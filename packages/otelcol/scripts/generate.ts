/**
 * OpenTelemetry Collector config-schema -> `effect/Schema` compiler.
 *
 * Pipeline, mirroring the rest of distilled:
 *
 *   specs/{version}/{file}.json      vendored intermediary spec (never edited)
 *        |
 *        v  patches/{version}/{file}*.json   RFC 6902 chains, filename order
 *        |
 *        v  compile
 *   src/{version}/{section}/{component}.ts   generated (never edited)
 *
 * The specs are JSON Schemas reflected out of the collector's Go config
 * structs by pavolloffay/opentelemetry-collector-config-schema. The reflector
 * describes the Go TYPES, not the config FILE FORMAT, so several fields come
 * out with the wrong shape (squash applied inconsistently, custom
 * unmarshalers rendered structurally). Every such divergence is corrected by a
 * patch against the spec — never by editing the generated output, and never by
 * a special case in this compiler.
 *
 * Regenerating the specs themselves is out of scope here: they are produced by
 * an OCB build of the exact component set of an upstream release. See
 * `specs/{version}/README.md` for the recipe.
 *
 * Usage:
 *   bun run scripts/generate.ts                 # every version
 *   bun run scripts/generate.ts --version 0.151.0
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
}

/** The Go duration `pattern` the reflector stamps on every `time.Duration`. */
const GO_DURATION_PATTERN = "^[0-9]+(ns|us|µs|ms|s|m|h)$";

// ---------------------------------------------------------------------------
// RFC 6902
// ---------------------------------------------------------------------------

interface PatchFile {
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

  /** Compile a struct into a hoisted `interface` + `const` pair. */
  private struct(node: Node, preferred: string, where: string): Compiled {
    const properties = node.properties ?? {};
    const required = new Set(node.required ?? []);
    const wireKeys = Object.keys(properties).sort();

    const typeLines: string[] = [];
    const schemaLines: string[] = [];
    const keyMap: [camel: string, wire: string][] = [];

    for (const wire of wireKeys) {
      const field = properties[wire]!;
      const name = camel(wire);
      keyMap.push([name, wire]);
      const compiled = this.compile(
        field,
        `${preferred}${pascal(wire)}`,
        `${where}.${wire}`,
      );
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
    if (existing !== undefined) return { type: existing, schema: existing };

    const name = this.claim(preferred);
    this.byBody.set(fingerprint, name);
    this.declarations.push({
      name,
      body:
        `export interface ${name} ${bodyType}\n` +
        `export const ${name} = /*@__PURE__*/ Schema.suspend(() =>\n` +
        `  ${bodySchema},\n` +
        `) as unknown as Schema.Codec<${name}>;\n`,
    });
    return { type: name, schema: name };
  }

  compile(node: Node, preferred: string, where: string): Compiled {
    if (node.enum !== undefined) {
      if (node.type !== undefined && node.type !== "string") {
        throw new Error(`${where}: enum is only supported on strings`);
      }
      const literals = [...node.enum];
      return {
        type: literals.map((literal) => JSON.stringify(literal)).join(" | "),
        schema: `Schema.Literals([${literals.map((literal) => JSON.stringify(literal)).join(", ")}])`,
      };
    }
    switch (node.type) {
      case "string":
        if (node.pattern === GO_DURATION_PATTERN) {
          this.usesDuration = true;
          return { type: "Duration.Duration", schema: "DurationFromGoString" };
        }
        if (node.pattern !== undefined) {
          throw new Error(
            `${where}: unsupported string pattern ${node.pattern}`,
          );
        }
        return { type: "string", schema: "Schema.String" };
      case "boolean":
        return { type: "boolean", schema: "Schema.Boolean" };
      case "integer":
        return { type: "number", schema: "Schema.Int" };
      case "number":
        return { type: "number", schema: "Schema.Number" };
      case "array": {
        if (node.items === undefined) {
          throw new Error(`${where}: array without \`items\``);
        }
        const item = this.compile(node.items, `${preferred}Item`, `${where}[]`);
        return {
          type: `ReadonlyArray<${item.type}>`,
          schema: `Schema.Array(${item.schema})`,
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
          return { type: "unknown", schema: "Schema.Unknown" };
        }
        if (typeof node.additionalProperties === "object") {
          const value = this.compile(
            node.additionalProperties,
            `${preferred}Value`,
            `${where}.{}`,
          );
          return {
            type: `{ readonly [key: string]: ${value.type} }`,
            schema: `Schema.Record(Schema.String, ${value.schema})`,
          };
        }
        // An object with neither is the reflector rendering an opaque Go type
        // (a `component.ID`, a `Sizer`, a struct behind a custom unmarshaler).
        // Emitting `unknown` here would let a wrong config through, so it is a
        // hard stop demanding a patch.
        throw new Error(
          `${where}: object with neither \`properties\` nor \`additionalProperties\` — ` +
            `this is a reflector artifact (opaque Go type). Patch it in ` +
            `patches/{version}/{component}.json to its real config shape.`,
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

interface ComponentSpec {
  readonly file: string;
  readonly section: string;
  readonly wire: string;
  readonly typeName: string;
  readonly module: string;
}

const parseSpecFile = (file: string): ComponentSpec => {
  const base = file.replace(/\.json$/, "");
  const underscore = base.indexOf("_");
  const kind = base.slice(0, underscore);
  const wire = base.slice(underscore + 1);
  const section = SECTIONS[kind];
  if (section === undefined)
    throw new Error(`unknown component kind in ${file}`);
  return {
    file,
    section,
    wire,
    typeName: componentTypeName(kind, wire),
    module: `${section}/${camel(wire)}.ts`,
  };
};

const HEADER = (version: string, file: string) =>
  `// Generated by packages/otelcol/scripts/generate.ts — DO NOT EDIT.\n` +
  `// Source: specs/${version}/${file} (+ patches/${version}/${file})\n\n`;

const emitComponent = (
  version: string,
  spec: ComponentSpec,
  schema: Node,
): { text: string; declarations: number } => {
  const compiler = new ModuleCompiler(spec.typeName);
  const root = compiler.compile(schema, spec.typeName, spec.wire);
  if (root.type !== spec.typeName) {
    // The root collapsed onto an earlier structurally-identical declaration,
    // or is not a struct at all. Neither can happen for a component root.
    throw new Error(`${spec.file}: component root did not compile to a struct`);
  }

  const imports = [`import * as Schema from "@distilled.cloud/core/schema";`];
  if (compiler.usesDuration) {
    imports.unshift(`import type * as Duration from "effect/Duration";`);
    imports.push(`import { DurationFromGoString } from "../../duration.ts";`);
  }

  const wireLiteral = JSON.stringify(spec.wire);
  const footer =
    `\n/** The component's wire type, as written in \`${spec.section}:\` of the config file. */\n` +
    `export const type = ${wireLiteral} as const;\n` +
    `\n/** The config section this component is declared in. */\n` +
    `export const section = ${JSON.stringify(spec.section)} as const;\n`;

  return {
    text:
      HEADER(version, spec.file) +
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

const root = path.resolve(import.meta.dirname, "..");

const argv = process.argv.slice(2);
const flag = (name: string): string | undefined => {
  const index = argv.indexOf(`--${name}`);
  return index === -1 ? undefined : argv[index + 1];
};

const onlyVersion = flag("version");
const onlyComponent = flag("component");

const versions = fs
  .readdirSync(path.join(root, "specs"))
  .filter((entry) => fs.statSync(path.join(root, "specs", entry)).isDirectory())
  .filter((entry) => onlyVersion === undefined || entry === onlyVersion)
  .sort();

let totalComponents = 0;
let totalDeclarations = 0;
let totalPatches = 0;
let totalLines = 0;

for (const version of versions) {
  const specDir = path.join(root, "specs", version);
  const patchDir = path.join(root, "patches", version);
  const outDir = path.join(root, "src", version);

  const files = fs
    .readdirSync(specDir)
    .filter((entry) => entry.endsWith(".json"))
    .sort();

  const specs: ComponentSpec[] = [];
  const sections = new Map<string, ComponentSpec[]>();

  for (const file of files) {
    const spec = parseSpecFile(file);
    if (onlyComponent !== undefined && !file.startsWith(onlyComponent))
      continue;
    specs.push(spec);
    sections.set(spec.section, [...(sections.get(spec.section) ?? []), spec]);

    const document: Node = JSON.parse(
      fs.readFileSync(path.join(specDir, file), "utf8"),
    );
    const base = file.replace(/\.json$/, "");
    const patchFiles = fs.existsSync(patchDir)
      ? fs
          .readdirSync(patchDir)
          .filter(
            (entry) => entry === `${base}.json` || entry.startsWith(`${base}.`),
          )
          .sort()
      : [];
    for (const patchFile of patchFiles) {
      const patch: PatchFile = JSON.parse(
        fs.readFileSync(path.join(patchDir, patchFile), "utf8"),
      );
      applyPatch(document, patch, `patches/${version}/${patchFile}`);
      totalPatches += patch.patches.length;
    }

    const { text, declarations } = emitComponent(version, spec, document);
    const target = path.join(outDir, spec.module);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, text);
    totalComponents += 1;
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
      .sort((a, b) => a.wire.localeCompare(b.wire))
      .map(
        (spec) =>
          `export * as ${camel(spec.wire)} from "./${path.basename(spec.module)}";`,
      );
    fs.writeFileSync(
      path.join(outDir, section, "index.ts"),
      HEADER(version, "(barrel)") + lines.join("\n") + "\n",
    );
  }

  // The manifest: the closed component set as data, so a consumer can map a
  // generated type back to the `{section}` / `{type}` it is written under.
  const manifest = specs
    .slice()
    .sort((a, b) => (a.section + a.wire).localeCompare(b.section + b.wire))
    .map(
      (spec) =>
        `  { typeName: ${JSON.stringify(spec.typeName)}, section: ${JSON.stringify(
          spec.section,
        )}, type: ${JSON.stringify(spec.wire)} },`,
    );
  fs.writeFileSync(
    path.join(outDir, "manifest.ts"),
    HEADER(version, "(manifest)") +
      `/**\n * Every component in this release's build, as data.\n *\n` +
      ` * The build is CLOSED: this is the complete set, and a component absent\n` +
      ` * from it is one the collector binary does not contain.\n */\n` +
      `export const components = [\n${manifest.join("\n")}\n] as const;\n\n` +
      `export type ComponentManifest = (typeof components)[number];\n\n` +
      `/** The release the specs in this directory were reflected from. */\n` +
      `export const version = ${JSON.stringify(version)} as const;\n`,
  );

  fs.writeFileSync(
    path.join(outDir, "index.ts"),
    HEADER(version, "(barrel)") +
      [...sections.keys()]
        .sort()
        .map(
          (section) =>
            `export * as ${pascal(section)} from "./${section}/index.ts";`,
        )
        .join("\n") +
      `\nexport * from "./manifest.ts";\n`,
  );
}

fs.writeFileSync(
  path.join(root, "src", "index.ts"),
  `export * from "./duration.ts";\n` +
    versions
      .map(
        (version) =>
          `export * as v${version.replaceAll(".", "_")} from "./${version}/index.ts";`,
      )
      .join("\n") +
    "\n",
);

console.log(
  `otelcol: ${totalComponents} components, ${totalDeclarations} struct declarations, ` +
    `${totalPatches} patch operations applied, ${totalLines} lines emitted`,
);
