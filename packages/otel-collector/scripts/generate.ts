/**
 * OpenTelemetry Collector config-schema -> `effect/Schema` compiler.
 *
 * Pipeline, mirroring the rest of distilled:
 *
 *   specs/{build}/{file}.json        vendored intermediary spec (never edited)
 *   manual-specs/{build}/{file}.json hand-authored spec for what the reflector
 *                                    cannot see (the `service` block)
 *        |
 *        v  patches/{build}/{file}*.json    RFC 6902 chains, filename order
 *        |
 *        v  compile
 *   src/{build}/{section}/{component}.ts    generated (never edited)
 *   src/{build}/service.ts                  generated (never edited)
 *
 * ## The axis is the BUILD, not a version
 *
 * A collector binary's component set is decided by its OCB manifest, which
 * pins core, contrib and (here) the lambda-only modules independently. There
 * is no single upstream version that names the set, so every directory on this
 * axis is keyed on the build TAG — `layer-collector-0.22.0` — and the pins it
 * resolves to are recorded in `specs/{build}/build.json`.
 *
 * ## Patches come in two kinds, and the difference is load-bearing
 *
 * - `"kind": "schema-truth"` — the reflector describes the collector's Go
 *   TYPES, not its config FILE FORMAT. Where the two disagree (squash applied
 *   inconsistently, a custom unmarshaler rendered structurally), the spec is
 *   corrected. These patches would be needed by ANY build.
 * - `"kind": "build-policy"` — the field is real, but THIS build registers no
 *   component that could give it a value, so the collector would reject every
 *   configuration that sets it. Removing it here is a statement about the
 *   build, and it belongs on the build axis. The rule is narrow on purpose:
 *   policy removes only what this build's config loader would REJECT.
 *
 * Either way the fix is a patch against the spec — never an edit to the
 * generated output, and never a special case in this compiler.
 *
 * Regenerating the specs themselves is out of scope here: they are produced by
 * an OCB build of the exact component set of an upstream release. See
 * `specs/{build}/README.md` for the recipe.
 *
 * Usage:
 *   bun run scripts/generate.ts                 # every build
 *   bun run scripts/generate.ts --build layer-collector-0.22.0
 *   bun run scripts/generate.ts --component exporter_otlphttp
 */
import * as fs from "node:fs";
import * as path from "node:path";

// ---------------------------------------------------------------------------
// The JSON Schema subset
// ---------------------------------------------------------------------------

/**
 * The subset of JSON Schema the reflector emits, plus the two keywords a patch
 * may introduce (`enum`, `required`).
 *
 * Anything outside this is a hard error rather than a silent `unknown`: the
 * point of the package is that a config it cannot express is a config the
 * collector cannot load.
 */
interface Node {
  type?: "object" | "array" | "string" | "integer" | "number" | "boolean";
  description?: string;
  deprecated?: boolean;
  properties?: Record<string, Node>;
  required?: readonly string[];
  additionalProperties?: boolean | Node;
  items?: Node;
  pattern?: string;
  enum?: readonly string[];
  /**
   * Name the declaration this node compiles to, instead of deriving it from
   * the path that reached it. Only a hand-authored spec uses it — the
   * reflector emits no titles.
   */
  title?: string;
  /**
   * Constrain the KEYS of an `additionalProperties` map to a closed set,
   * optionally admitting a `/`-suffixed instance name — the collector's
   * `component.ID` spelling, and the only shape of open-ended key this package
   * needs. Compiles to a hoisted template-literal union plus a mapped type, so
   * `pipelines: { tracez: … }` is a compile error while `traces/internal` is
   * not.
   */
  propertyNames?: {
    title: string;
    enum: readonly string[];
    named?: boolean;
  };
}

/** The Go duration `pattern` the reflector stamps on every `time.Duration`. */
const GO_DURATION_PATTERN = "^[0-9]+(ns|us|µs|ms|s|m|h)$";

// ---------------------------------------------------------------------------
// RFC 6902
// ---------------------------------------------------------------------------

/**
 * `kind` is mandatory so the two reasons a patch can exist stay distinguishable
 * forever: see the module doc.
 */
type PatchKind = "schema-truth" | "build-policy";

interface PatchFile {
  readonly kind: PatchKind;
  readonly description: string;
  readonly patches: readonly Operation[];
}

type Operation =
  | { op: "add"; path: string; value: unknown }
  | { op: "remove"; path: string }
  | { op: "replace"; path: string; value: unknown }
  | { op: "move"; from: string; path: string }
  | { op: "copy"; from: string; path: string }
  | { op: "test"; path: string; value: unknown };

const unescapePointer = (token: string): string =>
  token.replaceAll("~1", "/").replaceAll("~0", "~");

const parsePointer = (pointer: string): string[] =>
  pointer === "" ? [] : pointer.slice(1).split("/").map(unescapePointer);

const resolveParent = (
  document: unknown,
  pointer: string,
): [container: any, key: string] => {
  const tokens = parsePointer(pointer);
  if (tokens.length === 0) throw new Error(`cannot address the document root`);
  let node: any = document;
  for (const token of tokens.slice(0, -1)) {
    if (node == null || typeof node !== "object") {
      throw new Error(`path ${pointer} does not exist`);
    }
    node = Array.isArray(node) ? node[Number(token)] : node[token];
  }
  if (node == null || typeof node !== "object") {
    throw new Error(`path ${pointer} does not exist`);
  }
  return [node, tokens[tokens.length - 1]!];
};

const readPointer = (document: unknown, pointer: string): unknown => {
  const [container, key] = resolveParent(document, pointer);
  const value = Array.isArray(container)
    ? container[Number(key)]
    : container[key];
  if (value === undefined) throw new Error(`path ${pointer} does not exist`);
  return value;
};

const writePointer = (
  document: unknown,
  pointer: string,
  value: unknown,
): void => {
  const [container, key] = resolveParent(document, pointer);
  if (Array.isArray(container)) {
    if (key === "-") container.push(value);
    else container.splice(Number(key), 0, value);
  } else {
    container[key] = value;
  }
};

const deletePointer = (document: unknown, pointer: string): unknown => {
  const [container, key] = resolveParent(document, pointer);
  if (Array.isArray(container)) {
    const index = Number(key);
    if (index >= container.length)
      throw new Error(`path ${pointer} does not exist`);
    return container.splice(index, 1)[0];
  }
  if (!(key in container)) throw new Error(`path ${pointer} does not exist`);
  const value = container[key];
  delete container[key];
  return value;
};

/**
 * Apply one RFC 6902 chain in place.
 *
 * A failing operation FAILS THE RUN rather than warning: unlike the Smithy
 * packages, where a stale patch usually means upstream fixed something, a
 * stale patch here means a config field silently reverted to the reflector's
 * wrong shape.
 */
const applyPatch = (
  document: unknown,
  file: PatchFile,
  source: string,
): void => {
  file.patches.forEach((operation, index) => {
    const where = `${source} #${index} (${operation.op} ${"path" in operation ? operation.path : ""})`;
    try {
      switch (operation.op) {
        case "add":
          writePointer(
            document,
            operation.path,
            structuredClone(operation.value),
          );
          break;
        case "remove":
          deletePointer(document, operation.path);
          break;
        case "replace":
          readPointer(document, operation.path);
          deletePointer(document, operation.path);
          writePointer(
            document,
            operation.path,
            structuredClone(operation.value),
          );
          break;
        case "move": {
          const value = deletePointer(document, operation.from);
          writePointer(document, operation.path, value);
          break;
        }
        case "copy":
          writePointer(
            document,
            operation.path,
            structuredClone(readPointer(document, operation.from)),
          );
          break;
        case "test": {
          const actual = readPointer(document, operation.path);
          if (JSON.stringify(actual) !== JSON.stringify(operation.value)) {
            throw new Error(`test failed: ${JSON.stringify(actual)}`);
          }
          break;
        }
      }
    } catch (cause) {
      throw new Error(`${where}: ${(cause as Error).message}`);
    }
  });
};

// ---------------------------------------------------------------------------
// Naming
// ---------------------------------------------------------------------------

/**
 * The one hand-maintained input to naming.
 *
 * A wire component type is a lowercase, unpunctuated Go package name, so it
 * carries no word boundaries a machine can recover (`otlphttp`,
 * `prometheusremotewrite`). Everything else — field names, nested struct names
 * — is derived mechanically from snake_case.
 */
const COMPONENT_WORDS: Record<string, string> = {
  otlphttp: "OtlpHttp",
  prometheusremotewrite: "PrometheusRemoteWrite",
  telemetryapi: "TelemetryApi",
  sigv4auth: "Sigv4Auth",
  basicauth: "BasicAuth",
  coldstart: "ColdStart",
  otlp: "Otlp",
};

const SECTIONS: Record<string, string> = {
  receiver: "receivers",
  processor: "processors",
  exporter: "exporters",
  extension: "extensions",
};

const pascal = (snake: string): string =>
  snake
    .split(/[_-]+/)
    .filter((word) => word.length > 0)
    .map((word) => word[0]!.toUpperCase() + word.slice(1))
    .join("");

const camel = (snake: string): string => {
  const parts = snake.split(/[_-]+/).filter((word) => word.length > 0);
  return (
    parts[0]! +
    parts
      .slice(1)
      .map((word) => word[0]!.toUpperCase() + word.slice(1))
      .join("")
  );
};

const componentTypeName = (section: string, wire: string): string =>
  `${COMPONENT_WORDS[wire] ?? pascal(wire)}${pascal(section)}`;

// ---------------------------------------------------------------------------
// Compiler
// ---------------------------------------------------------------------------

interface Declaration {
  readonly name: string;
  readonly body: string;
}

interface Compiled {
  /** The TypeScript type expression for this node. */
  readonly type: string;
  /** The `effect/Schema` expression for this node. */
  readonly schema: string;
  /**
   * Whether this node contains a plain-string leaf, and therefore threads the
   * `Str` type parameter.
   *
   * Every generated struct that holds one is declared `<Str = string>` and
   * spells its string leaves `Str`. A consumer that needs to accept deferred
   * or secret values at those leaves — an alchemy `Output`, a `Redacted` —
   * instantiates the interface (`OtlpHttpExporter<CollectorInput>`) instead of
   * mapping over it. The distinction is not cosmetic: a mapped type erases
   * every nested interface name, so the hover for a mapped component config is
   * a single 200-line structural blob, while an instantiated one still reads
   * `OtlpHttpExporterTls<CollectorInput>`.
   *
   * Enum leaves are `Str`-free by construction: an unresolved value is not a
   * spelling of `basic | normal | detailed`.
   */
  readonly usesStr: boolean;
}

class ModuleCompiler {
  /** Hoisted nested-struct declarations, in emission order. */
  readonly declarations: Declaration[] = [];
  /** Structurally identical bodies collapse onto the first name that produced them. */
  private readonly byBody = new Map<string, string>();
  private readonly taken = new Set<string>();
  usesDuration = false;

  constructor(readonly component: string) {}

  private claim(preferred: string): string {
    if (!this.taken.has(preferred)) {
      this.taken.add(preferred);
      return preferred;
    }
    for (let n = 2; ; n++) {
      const candidate = `${preferred}${n}`;
      if (!this.taken.has(candidate)) {
        this.taken.add(candidate);
        return candidate;
      }
    }
  }

  private jsdoc(node: Node, indent: string): string {
    const lines: string[] = [];
    if (node.description !== undefined && node.description.trim() !== "") {
      // Descriptions are Go doc comments; keep them on one logical line and
      // neutralise anything that would close the block.
      lines.push(node.description.trim().replaceAll("*/", "*\\/"));
    }
    if (node.deprecated === true) lines.push("@deprecated");
    if (lines.length === 0) return "";
    if (lines.length === 1 && lines[0]!.length < 76) {
      return `${indent}/** ${lines[0]} */\n`;
    }
    return `${indent}/**\n${lines.map((line) => `${indent} * ${line}`).join("\n")}\n${indent} */\n`;
  }

  /**
   * Compile a closed set of map keys into a hoisted template-literal union.
   *
   * `{ enum: ["traces"], named: true }` becomes `"traces" | \`traces/${string}\``
   * — the collector's `component.ID` spelling, where the bare type is the
   * unnamed instance.
   */
  private keyType(
    propertyNames: NonNullable<Node["propertyNames"]>,
    where: string,
  ): string {
    const members = [...propertyNames.enum].sort();
    if (members.length === 0) throw new Error(`${where}: empty propertyNames`);
    const union = [
      ...members.map((member) => JSON.stringify(member)),
      ...(propertyNames.named === true
        ? members.map((member) => `\`${member}/\${string}\``)
        : []),
    ];
    const name = this.claim(propertyNames.title);
    this.declarations.push({
      name,
      body: `export type ${name} =\n${union.map((member) => `  | ${member}`).join("\n")};\n`,
    });
    return name;
  }

  /** Compile a struct into a hoisted `interface` + `const` pair. */
  private struct(node: Node, preferred: string, where: string): Compiled {
    const properties = node.properties ?? {};
    const required = new Set(node.required ?? []);
    const wireKeys = Object.keys(properties).sort();

    const typeLines: string[] = [];
    const schemaLines: string[] = [];
    const keyMap: [camel: string, wire: string][] = [];
    let usesStr = false;

    for (const wire of wireKeys) {
      const field = properties[wire]!;
      const name = camel(wire);
      keyMap.push([name, wire]);
      const compiled = this.compile(
        field,
        `${preferred}${pascal(wire)}`,
        `${where}.${wire}`,
      );
      usesStr ||= compiled.usesStr;
      const optional = !required.has(wire);
      typeLines.push(
        `${this.jsdoc(field, "  ")}  readonly ${name}${optional ? "?" : ""}: ${compiled.type};`,
      );
      schemaLines.push(
        `    ${name}: ${optional ? `Schema.optional(${compiled.schema})` : compiled.schema},`,
      );
    }

    const renamed = keyMap.some(([name, wire]) => name !== wire);
    const encodeKeys = renamed
      ? `.pipe(\n    Schema.encodeKeys({\n${keyMap
          .map(([name, wire]) => `      ${name}: ${JSON.stringify(wire)},`)
          .join("\n")}\n    }),\n  )`
      : "";

    const bodyType =
      typeLines.length === 0 ? "{}" : `{\n${typeLines.join("\n")}\n}`;
    const bodySchema = `Schema.Struct({\n${schemaLines.join("\n")}\n  })${encodeKeys}`;

    // Collapse structurally identical nested structs (the collector reuses one
    // Go type — TLS, retry, queue — across many components and many paths).
    const fingerprint = `${bodyType} ${bodySchema}`;
    const existing = this.byBody.get(fingerprint);
    if (existing !== undefined) {
      return {
        type: usesStr ? `${existing}<Str>` : existing,
        schema: existing,
        usesStr,
      };
    }

    const name = this.claim(preferred);
    this.byBody.set(fingerprint, name);
    this.declarations.push({
      name,
      body:
        `export interface ${name}${usesStr ? "<Str = string>" : ""} ${bodyType}\n` +
        `export const ${name} = /*@__PURE__*/ Schema.suspend(() =>\n` +
        `  ${bodySchema},\n` +
        `) as unknown as Schema.Codec<${name}>;\n`,
    });
    return { type: usesStr ? `${name}<Str>` : name, schema: name, usesStr };
  }

  compile(node: Node, requested: string, where: string): Compiled {
    // A hand-authored spec may name its own declarations; a reflected one
    // never does, so the path-derived name stands.
    const preferred = node.title ?? requested;
    if (node.enum !== undefined) {
      if (node.type !== undefined && node.type !== "string") {
        throw new Error(`${where}: enum is only supported on strings`);
      }
      const literals = [...node.enum];
      return {
        type: literals.map((literal) => JSON.stringify(literal)).join(" | "),
        schema: `Schema.Literals([${literals.map((literal) => JSON.stringify(literal)).join(", ")}])`,
        usesStr: false,
      };
    }
    switch (node.type) {
      case "string":
        if (node.pattern === GO_DURATION_PATTERN) {
          this.usesDuration = true;
          return {
            type: "Duration.Duration",
            schema: "DurationFromGoString",
            usesStr: false,
          };
        }
        if (node.pattern !== undefined) {
          throw new Error(
            `${where}: unsupported string pattern ${node.pattern}`,
          );
        }
        return { type: "Str", schema: "Schema.String", usesStr: true };
      case "boolean":
        return { type: "boolean", schema: "Schema.Boolean", usesStr: false };
      case "integer":
        return { type: "number", schema: "Schema.Int", usesStr: false };
      case "number":
        return { type: "number", schema: "Schema.Number", usesStr: false };
      case "array": {
        if (node.items === undefined) {
          throw new Error(`${where}: array without \`items\``);
        }
        const item = this.compile(node.items, `${preferred}Item`, `${where}[]`);
        return {
          type: `ReadonlyArray<${item.type}>`,
          schema: `Schema.Array(${item.schema})`,
          usesStr: item.usesStr,
        };
      }
      case "object": {
        if (node.properties !== undefined) {
          if (node.additionalProperties !== undefined) {
            throw new Error(
              `${where}: both \`properties\` and \`additionalProperties\``,
            );
          }
          return this.struct(node, preferred, where);
        }
        if (node.additionalProperties === true) {
          // The reflector's spelling of Go's `any` — an attribute value.
          return { type: "unknown", schema: "Schema.Unknown", usesStr: false };
        }
        if (typeof node.additionalProperties === "object") {
          const value = this.compile(
            node.additionalProperties,
            `${preferred}Value`,
            `${where}.{}`,
          );
          // The key type is emitted for the TYPE side only. The schema stays a
          // plain `Schema.Record`: the collector parses every key through
          // `component.ID` itself, and a key check here would only duplicate
          // what the compile error already said.
          const key =
            node.propertyNames === undefined
              ? undefined
              : this.keyType(node.propertyNames, where);
          return {
            type:
              key === undefined
                ? `{ readonly [key: string]: ${value.type} }`
                : `{ readonly [key in ${key}]?: ${value.type} }`,
            schema: `Schema.Record(Schema.String, ${value.schema})`,
            usesStr: value.usesStr,
          };
        }
        // An object with neither is the reflector rendering an opaque Go type
        // (a `component.ID`, a `Sizer`, a struct behind a custom unmarshaler).
        // Emitting `unknown` here would let a wrong config through, so it is a
        // hard stop demanding a patch.
        throw new Error(
          `${where}: object with neither \`properties\` nor \`additionalProperties\` — ` +
            `this is a reflector artifact (opaque Go type). Patch it in ` +
            `patches/{build}/{component}.json to its real config shape.`,
        );
      }
      default:
        throw new Error(
          `${where}: missing or unsupported \`type\`: ${node.type}`,
        );
    }
  }
}

// ---------------------------------------------------------------------------
// Emission
// ---------------------------------------------------------------------------

/** One spec file and the module it compiles to. */
interface ModuleSpec {
  readonly file: string;
  /** Which directory the spec was read from — reflected, or hand-authored. */
  readonly origin: "specs" | "manual-specs";
  readonly typeName: string;
  readonly module: string;
  /**
   * Set for a component; absent for a top-level config block like `service`,
   * which has no factory and therefore no section or wire type.
   */
  readonly component?: { readonly section: string; readonly wire: string };
}

const parseComponentFile = (file: string): ModuleSpec => {
  const base = file.replace(/\.json$/, "");
  const underscore = base.indexOf("_");
  const kind = base.slice(0, underscore);
  const wire = base.slice(underscore + 1);
  const section = SECTIONS[kind];
  if (section === undefined)
    throw new Error(`unknown component kind in ${file}`);
  return {
    file,
    origin: "specs",
    typeName: componentTypeName(kind, wire),
    module: `${section}/${camel(wire)}.ts`,
    component: { section, wire },
  };
};

/**
 * A hand-authored spec describes a top-level config BLOCK, not a component:
 * `service.json` -> `src/{build}/service.ts`, root interface `Service`.
 */
const parseManualFile = (file: string): ModuleSpec => {
  const base = file.replace(/\.json$/, "");
  if (base.includes("_")) {
    throw new Error(
      `manual-specs/${file}: a hand-authored spec names a top-level config block, not a component`,
    );
  }
  return {
    file,
    origin: "manual-specs",
    typeName: pascal(base),
    module: `${base}.ts`,
  };
};

const HEADER = (build: string, spec: ModuleSpec | string) =>
  `// Generated by packages/otel-collector/scripts/generate.ts — DO NOT EDIT.\n` +
  (typeof spec === "string"
    ? `// Build: ${build} ${spec}\n\n`
    : `// Source: ${spec.origin}/${build}/${spec.file}` +
      (spec.origin === "specs" ? ` (+ patches/${build}/${spec.file})` : "") +
      "\n\n");

const emitModule = (
  build: string,
  spec: ModuleSpec,
  schema: Node,
): { text: string; declarations: number } => {
  const compiler = new ModuleCompiler(spec.typeName);
  const root = compiler.compile(
    schema,
    spec.typeName,
    spec.component?.wire ?? spec.typeName.toLowerCase(),
  );
  if (root.type.replace(/<Str>$/, "") !== spec.typeName) {
    // The root collapsed onto an earlier structurally-identical declaration,
    // or is not a struct at all. Neither can happen for a config root.
    throw new Error(`${spec.file}: root did not compile to a struct`);
  }

  // Every ROOT is declared `<Str = string>`, even the four components whose
  // config has no string field at all (`coldstart`, `decouple`,
  // `memory_limiter`, `telemetryapi`). A consumer that instantiates the whole
  // closed set at one string type should not have to know which members
  // happen to contain a string this release; that is exactly the kind of
  // detail that turns into a breaking change when a field is added upstream.
  if (!root.usesStr) {
    const declaration =
      compiler.declarations[compiler.declarations.length - 1]!;
    (declaration as { body: string }).body = declaration.body.replace(
      `export interface ${spec.typeName} `,
      `export interface ${spec.typeName}<Str = string> `,
    );
  }

  const up = "../".repeat(spec.module.split("/").length);
  const imports = [`import * as Schema from "@distilled.cloud/core/schema";`];
  if (compiler.usesDuration) {
    imports.unshift(`import type * as Duration from "effect/Duration";`);
    imports.push(`import { DurationFromGoString } from "${up}duration.ts";`);
  }

  const footer =
    spec.component === undefined
      ? ""
      : `\n/** The component's wire type, as written in \`${spec.component.section}:\` of the config file. */\n` +
        `export const type = ${JSON.stringify(spec.component.wire)} as const;\n` +
        `\n/** The config section this component is declared in. */\n` +
        `export const section = ${JSON.stringify(spec.component.section)} as const;\n`;

  return {
    text:
      HEADER(build, spec) +
      imports.join("\n") +
      "\n\n" +
      compiler.declarations.map((declaration) => declaration.body).join("\n") +
      footer,
    declarations: compiler.declarations.length,
  };
};

// ---------------------------------------------------------------------------
// Driver
// ---------------------------------------------------------------------------

/** `specs/{build}/build.json` — what the OCB manifest pinned. */
interface BuildMetadata {
  readonly tag: string;
  readonly repository: string;
  readonly closed: boolean;
  readonly modules: Record<string, string>;
  readonly components: Record<string, readonly string[]>;
}

/** A build tag is directory-safe but not identifier-safe. */
const identifier = (build: string): string =>
  build.replace(/[^A-Za-z0-9]+/g, "_");

const root = path.resolve(import.meta.dirname, "..");

const argv = process.argv.slice(2);
const flag = (name: string): string | undefined => {
  const index = argv.indexOf(`--${name}`);
  return index === -1 ? undefined : argv[index + 1];
};

const onlyBuild = flag("build");
const onlyComponent = flag("component");

const builds = fs
  .readdirSync(path.join(root, "specs"))
  .filter((entry) => fs.statSync(path.join(root, "specs", entry)).isDirectory())
  .filter((entry) => onlyBuild === undefined || entry === onlyBuild)
  .sort();

let totalModules = 0;
let totalDeclarations = 0;
let totalLines = 0;
const patchOps: Record<PatchKind, number> = {
  "schema-truth": 0,
  "build-policy": 0,
};

for (const build of builds) {
  const specDir = path.join(root, "specs", build);
  const manualDir = path.join(root, "manual-specs", build);
  const patchDir = path.join(root, "patches", build);
  const outDir = path.join(root, "src", build);

  const metadata: BuildMetadata = JSON.parse(
    fs.readFileSync(path.join(specDir, "build.json"), "utf8"),
  );

  const specs: ModuleSpec[] = [
    ...fs
      .readdirSync(specDir)
      .filter((entry) => entry.endsWith(".json") && entry !== "build.json")
      .sort()
      .map(parseComponentFile),
    ...(fs.existsSync(manualDir)
      ? fs
          .readdirSync(manualDir)
          .filter((entry) => entry.endsWith(".json"))
          .sort()
          .map(parseManualFile)
      : []),
  ].filter(
    (spec) =>
      onlyComponent === undefined || spec.file.startsWith(onlyComponent),
  );

  const sections = new Map<string, ModuleSpec[]>();

  for (const spec of specs) {
    if (spec.component !== undefined) {
      sections.set(spec.component.section, [
        ...(sections.get(spec.component.section) ?? []),
        spec,
      ]);
    }

    const document: Node = JSON.parse(
      fs.readFileSync(path.join(root, spec.origin, build, spec.file), "utf8"),
    );
    const base = spec.file.replace(/\.json$/, "");
    // A hand-authored spec is edited in place; patching one would only hide
    // the edit, so patches apply to the vendored specs alone.
    const patchFiles =
      spec.origin === "specs" && fs.existsSync(patchDir)
        ? fs
            .readdirSync(patchDir)
            .filter(
              (entry) =>
                entry === `${base}.json` || entry.startsWith(`${base}.`),
            )
            .sort()
        : [];
    for (const patchFile of patchFiles) {
      const patch: PatchFile = JSON.parse(
        fs.readFileSync(path.join(patchDir, patchFile), "utf8"),
      );
      if (patchOps[patch.kind] === undefined) {
        throw new Error(
          `patches/${build}/${patchFile}: \`kind\` must be "schema-truth" or "build-policy", got ${JSON.stringify(patch.kind)}`,
        );
      }
      applyPatch(document, patch, `patches/${build}/${patchFile}`);
      patchOps[patch.kind] += patch.patches.length;
    }

    const { text, declarations } = emitModule(build, spec, document);
    const target = path.join(outDir, spec.module);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, text);
    totalModules += 1;
    totalDeclarations += declarations;
    totalLines += text.split("\n").length;
  }

  // Per-section barrels: one namespace per component, so a consumer writes
  // `Exporters.otlphttp.OtlpHttpExporter`.
  for (const [section, members] of [...sections].sort(([a], [b]) =>
    a.localeCompare(b),
  )) {
    const lines = members
      .slice()
      .sort((a, b) => a.component!.wire.localeCompare(b.component!.wire))
      .map(
        (spec) =>
          `export * as ${camel(spec.component!.wire)} from "./${path.basename(spec.module)}";`,
      );
    fs.writeFileSync(
      path.join(outDir, section, "index.ts"),
      HEADER(build, "(barrel)") + lines.join("\n") + "\n",
    );
  }

  // The manifest: the closed component set as data, plus the provenance of the
  // build that decided it, so a consumer can map a generated type back to the
  // `{section}` / `{type}` it is written under and say where it came from.
  const manifest = specs
    .filter((spec) => spec.component !== undefined)
    .sort((a, b) =>
      (a.component!.section + a.component!.wire).localeCompare(
        b.component!.section + b.component!.wire,
      ),
    )
    .map(
      (spec) =>
        `  { typeName: ${JSON.stringify(spec.typeName)}, section: ${JSON.stringify(
          spec.component!.section,
        )}, type: ${JSON.stringify(spec.component!.wire)} },`,
    );
  fs.writeFileSync(
    path.join(outDir, "manifest.ts"),
    HEADER(build, "(manifest)") +
      `/**\n * Every component in this build, as data.\n *\n` +
      ` * The build is CLOSED: this is the complete set, and a component absent\n` +
      ` * from it is one the collector binary does not contain.\n */\n` +
      `export const components = [\n${manifest.join("\n")}\n] as const;\n\n` +
      `export type ComponentManifest = (typeof components)[number];\n\n` +
      `/**\n * The OCB build this directory describes.\n *\n` +
      ` * The component set is a property of the BUILD, not of any one upstream\n` +
      ` * version — core, contrib and the lambda-only modules are pinned\n` +
      ` * independently — so the build tag, not a version, is the axis.\n */\n` +
      `export const build = {\n` +
      `  tag: ${JSON.stringify(metadata.tag)},\n` +
      `  repository: ${JSON.stringify(metadata.repository)},\n` +
      `  closed: ${JSON.stringify(metadata.closed)},\n` +
      `  modules: {\n` +
      Object.entries(metadata.modules)
        .map(
          ([name, version]) =>
            `    ${JSON.stringify(name)}: ${JSON.stringify(version)},`,
        )
        .join("\n") +
      `\n  },\n} as const;\n`,
  );

  fs.writeFileSync(
    path.join(outDir, "index.ts"),
    HEADER(build, "(barrel)") +
      [...sections.keys()]
        .sort()
        .map(
          (section) =>
            `export * as ${pascal(section)} from "./${section}/index.ts";`,
        )
        .join("\n") +
      "\n" +
      specs
        .filter((spec) => spec.component === undefined)
        .map((spec) => `export * from "./${spec.module}";`)
        .join("\n") +
      `\nexport * from "./manifest.ts";\n`,
  );
}

fs.writeFileSync(
  path.join(root, "src", "index.ts"),
  `export * from "./duration.ts";\n` +
    builds
      .map(
        (build) =>
          `export * as ${identifier(build)} from "./${build}/index.ts";`,
      )
      .join("\n") +
    "\n",
);

console.log(
  `otel-collector: ${totalModules} modules, ${totalDeclarations} declarations, ` +
    `${patchOps["schema-truth"]} schema-truth + ${patchOps["build-policy"]} build-policy ` +
    `patch operations applied, ${totalLines} lines emitted`,
);
