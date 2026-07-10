#!/usr/bin/env bun
/**
 * generate — turn the Smithy JSON models in .generated-specs into an Effect SDK.
 *
 * Input:  .generated-specs/<resource>.json  (Smithy 2.0 models, one per resource)
 * Output: src/services/<resource>.ts  +  services/index.ts
 *
 * Each shape gets an explicit TypeScript type plus a schema const, and each
 * operation becomes an explicitly-annotated `API.make(...)` call:
 *
 *   export interface FinetunesCreateRequest { ... }        // hand-emitted type
 *   export const FinetunesCreateRequest = S.suspend(() =>  // lazy construction
 *     S.Struct({ ... }).pipe(T.Http({ ... })),
 *   ).annotate({ identifier: "FinetunesCreateRequest" })
 *     as any as S.Schema<FinetunesCreateRequest>;          // no inference needed
 *
 *   export const FinetunesCreate: API.OperationMethod<
 *     FinetunesCreateRequest, FinetunesCreateResponse,
 *     CloudflareOpError, CloudflareOpContext
 *   > = API.make(() => ({ input, output, errors, protocol }));
 *
 * Compile-time performance (ported from distilled PR #360): the emitted
 * interfaces / type aliases and `as any as S.Schema<T>` casts carry the real
 * types, `S` is the `any`-collapsing `@distilled.cloud/core/schema` wrapper so
 * tsc never instantiates the heavy effect/Schema generics, and `S.suspend`
 * defers schema construction to the first call of an operation.
 *
 * The protocol, credentials, errors, and traits are hand-written (see ../src).
 * Only src/services is generated.
 *
 * Usage:
 *   bun scripts/generate.ts
 *   bun scripts/generate.ts --resource ai
 *   bun scripts/generate.ts --limit 100
 */

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import { Flag } from "effect/unstable/cli";
import { Command } from "effect/unstable/cli";
import {
  applyOperation,
  isStaleTargetError,
  type PatchFile,
} from "@distilled.cloud/core/json-patch";

const ENVELOPE_PAYLOAD_TRAIT = "com.cloudflare.protocols#envelopePayload";

const PRELUDE: Record<string, string> = {
  String: "S.String",
  Boolean: "S.Boolean",
  Double: "S.Number",
  Float: "S.Number",
  Integer: "S.Number",
  Long: "S.Number",
  BigInteger: "S.Number",
  BigDecimal: "S.Number",
  Timestamp: "S.String",
  Blob: "S.String",
  Document: "S.Unknown",
  Unit: "S.Struct({})",
};

/** TypeScript type for each prelude shape, mirroring PRELUDE's schemas. */
const TS_PRELUDE: Record<string, string> = {
  String: "string",
  Boolean: "boolean",
  Double: "number",
  Float: "number",
  Integer: "number",
  Long: "number",
  BigInteger: "number",
  BigDecimal: "number",
  Timestamp: "string",
  Blob: "string",
  Document: "unknown",
  Unit: "{}",
};

const q = (s: string): string => JSON.stringify(s);
const local = (id: string): string => id.split("#")[1] ?? id;
const isPrelude = (id: string): boolean => id.startsWith("smithy.api#");

const IDENT = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
const tsKey = (s: string): string => (IDENT.test(s) ? s : q(s));

/** snake_case / kebab-case wire name → camelCase TS-facing name. */
const camel = (s: string): string =>
  s.replace(/[_-]+([A-Za-z0-9])/g, (_, c: string) => c.toUpperCase());

/** Reserved words that can't be `const` names — keep PascalCase for those. */
const RESERVED = new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "let",
  "new",
  "null",
  "package",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
]);

const lowerFirst = (s: string): string => {
  const lowered = s.charAt(0).toLowerCase() + s.slice(1);
  return RESERVED.has(lowered) ? s : lowered;
};

const NULLABLE_TRAIT = "com.cloudflare.protocols#nullable";
const ERROR_MATCHERS_TRAIT = "com.cloudflare.protocols#errorMatchers";
const FORM_DATA_FILE_TRAIT = "com.cloudflare.protocols#formDataFile";
const KEY_DICTIONARY_TRAIT = "com.cloudflare.protocols#keyDictionary";
const PAGINATED_TRAIT = "smithy.api#paginated";

const oneLine = (s: string | undefined): string | undefined =>
  s ? s.replace(/\s+/g, " ").replace(/\*\//g, "*\\/").trim() : undefined;

// ============================================================================
// Per-model code generation
// ============================================================================

interface Generated {
  code: string;
  operations: number;
}

const generateModel = (
  model: any,
  limitRef: { remaining: number },
  keyDictionary?: Record<string, string>,
): Generated => {
  const shapes: Record<string, any> = model.shapes;

  // 1. Split operations out; synthesize empty Request/Response for Unit I/O so
  //    every operation has a named input shape to carry the Http() trait.
  const operations: { id: string; def: any }[] = [];
  const httpFor: Record<string, any> = {}; // input shape id → http trait

  for (const [id, def] of Object.entries(shapes)) {
    if (def.type === "operation") operations.push({ id, def });
  }
  operations.sort((a, b) => local(a.id).localeCompare(local(b.id)));

  const ns = operations.length
    ? operations[0].id.split("#")[0]
    : (Object.keys(shapes)[0]?.split("#")[0] ?? "com.cloudflare.unknown");

  const selected: { id: string; def: any }[] = [];
  for (const op of operations) {
    if (limitRef.remaining <= 0) break;
    limitRef.remaining--;
    selected.push(op);

    const opName = local(op.id);
    let inputTarget = op.def.input?.target ?? "smithy.api#Unit";
    let outputTarget = op.def.output?.target ?? "smithy.api#Unit";

    if (inputTarget === "smithy.api#Unit") {
      inputTarget = `${ns}#${opName}Request`;
      shapes[inputTarget] = { type: "structure", members: {} };
    }
    if (outputTarget === "smithy.api#Unit") {
      outputTarget = `${ns}#${opName}Response`;
      shapes[outputTarget] = { type: "structure", members: {} };
    }
    op.def.__input = inputTarget;
    op.def.__output = outputTarget;

    const http = op.def.traits?.["smithy.api#http"];
    if (http) httpFor[inputTarget] = http;
  }

  if (selected.length === 0) return { code: "", operations: 0 };

  // 2. Collect every shape reachable from the selected operations' I/O.
  const reachable = new Set<string>();
  const deps = (id: string): string[] => {
    const d = shapes[id];
    if (!d) return [];
    if (d.type === "structure")
      return Object.values(d.members ?? {}).map((m: any) => m.target);
    if (d.type === "list") return [d.member.target];
    if (d.type === "map") return [d.value.target];
    return [];
  };
  const visit = (id: string) => {
    if (isPrelude(id) || reachable.has(id) || !shapes[id]) return;
    reachable.add(id);
    for (const dep of deps(id)) visit(dep);
  };
  for (const op of selected) {
    visit(op.def.__input);
    visit(op.def.__output);
  }

  // 3. Topological order (deps first); cycles handled with S.suspend at refs.
  const order: string[] = [];
  const done = new Set<string>();
  const stack = new Set<string>();
  const walk = (id: string) => {
    if (done.has(id) || stack.has(id) || isPrelude(id) || !shapes[id]) return;
    stack.add(id);
    for (const dep of deps(id)) walk(dep);
    stack.delete(id);
    done.add(id);
    order.push(id);
  };
  for (const id of reachable) walk(id);
  const indexOf = new Map<string, number>();
  order.forEach((id, i) => indexOf.set(id, i));

  // 4. Reference expression for a target from a shape at position `selfIdx`.
  const ref = (target: string, selfIdx: number): string => {
    if (isPrelude(target)) return PRELUDE[local(target)] ?? "S.Unknown";
    const name = local(target);
    const ti = indexOf.get(target);
    if (ti !== undefined && ti > selfIdx) return `S.suspend(() => ${name})`;
    return name;
  };

  // TypeScript type reference for a target. Named shapes all get an emitted
  // interface / type alias, so forward references are always fine.
  const tsRef = (target: string): string =>
    isPrelude(target)
      ? (TS_PRELUDE[local(target)] ?? "unknown")
      : local(target);

  /**
   * Per-member emission metadata: the camelCase TS-facing name, the wire name
   * it maps to, and its binding. The TS interface and the schema struct are
   * emitted from the same computation so they can never drift.
   */
  interface MemberInfo {
    tsName: string;
    wire: string;
    target: string;
    binding:
      | "label"
      | "query"
      | "header"
      | "payload"
      | "file"
      | "rawBody"
      | "body";
    required: boolean;
    nullable: boolean;
    doc: string | undefined;
    keyDictionary: Record<string, string> | undefined;
  }

  const memberInfos = (d: any): MemberInfo[] => {
    const used = new Set<string>();
    return Object.entries(d.members ?? {}).map(([mn, m]: [string, any]) => {
      const traits = m.traits ?? {};
      let tsName = camel(mn);
      if (used.has(tsName)) tsName = mn;
      let k = 2;
      while (used.has(tsName)) tsName = `${camel(mn)}${k++}`;
      used.add(tsName);

      const binding: MemberInfo["binding"] =
        "smithy.api#httpLabel" in traits
          ? "label"
          : "smithy.api#httpQuery" in traits
            ? "query"
            : "smithy.api#httpHeader" in traits
              ? "header"
              : ENVELOPE_PAYLOAD_TRAIT in traits
                ? "payload"
                : FORM_DATA_FILE_TRAIT in traits
                  ? "file"
                  : "smithy.api#httpPayload" in traits
                    ? "rawBody"
                    : "body";
      const wire =
        binding === "label"
          ? mn // URI placeholders use the smithy member name
          : binding === "query"
            ? typeof traits["smithy.api#httpQuery"] === "string" &&
              traits["smithy.api#httpQuery"]
              ? traits["smithy.api#httpQuery"]
              : mn
            : binding === "header"
              ? typeof traits["smithy.api#httpHeader"] === "string" &&
                traits["smithy.api#httpHeader"]
                ? traits["smithy.api#httpHeader"]
                : mn
              : (traits["smithy.api#jsonName"] ?? mn);

      return {
        tsName,
        wire,
        target: m.target,
        binding,
        required: "smithy.api#required" in traits,
        nullable: NULLABLE_TRAIT in traits,
        doc: oneLine(traits["smithy.api#documentation"]),
        keyDictionary: traits[KEY_DICTIONARY_TRAIT],
      };
    });
  };

  const emitMember = (info: MemberInfo, selfIdx: number): string => {
    let expr = ref(info.target, selfIdx);
    if (info.nullable) expr = `S.NullOr(${expr})`;
    const pipes: string[] = [];

    switch (info.binding) {
      case "label":
        pipes.push(
          info.wire === info.tsName ? "T.Label()" : `T.Label(${q(info.wire)})`,
        );
        break;
      case "query":
        pipes.push(
          info.wire === info.tsName ? "T.Query()" : `T.Query(${q(info.wire)})`,
        );
        break;
      case "header":
        pipes.push(
          info.wire === info.tsName
            ? "T.Header()"
            : `T.Header(${q(info.wire)})`,
        );
        break;
      case "payload":
        pipes.push("T.EnvelopePayload()");
        break;
      case "file":
        pipes.push("T.FormDataFile()");
        break;
      case "rawBody":
        pipes.push("T.HttpBody()");
        break;
      case "body":
        if (info.wire !== info.tsName) pipes.push(`T.Body(${q(info.wire)})`);
        if (info.keyDictionary) {
          pipes.push(`T.KeyDictionary(${JSON.stringify(info.keyDictionary)})`);
        }
        break;
    }

    if (pipes.length) expr = `${expr}.pipe(${pipes.join(", ")})`;
    if (!info.required) expr = `S.optional(${expr})`;
    return `  ${q(info.tsName)}: ${expr},`;
  };

  // Operation input/output shape ids — these roots carry the service key
  // dictionary annotation when one exists.
  const opIoShapes = new Set<string>();
  for (const op of selected) {
    opIoShapes.add(op.def.__input);
    opIoShapes.add(op.def.__output);
  }

  // 5. Validate pagination traits (added via patches). A paginated op must
  //    actually carry its page/cursor token on the input and its items member
  //    on the output — otherwise `.pages()` would loop or yield nothing, so
  //    the op degrades to a plain operation.
  const paginatedOutputs = new Set<string>();
  const paginatedItemsRoot = new Map<string, string>();
  for (const op of selected) {
    const pg = op.def.traits?.[PAGINATED_TRAIT];
    if (!pg) continue;
    const inNames = new Set(
      memberInfos(shapes[op.def.__input] ?? {}).map((m) => m.tsName),
    );
    const outNames = new Set(
      memberInfos(shapes[op.def.__output] ?? {}).map((m) => m.tsName),
    );
    const itemsRoot = String(pg.items ?? "result").split(".")[0];
    const tokenOk =
      pg.mode === "single" ||
      (typeof pg.inputToken === "string" && inNames.has(pg.inputToken));
    const itemsOk = outNames.has(itemsRoot) || itemsRoot === "resultInfo";
    if (tokenOk && itemsOk) {
      op.def.__pagination = pg;
      paginatedOutputs.add(op.def.__output);
      paginatedItemsRoot.set(op.def.__output, itemsRoot);
    }
  }

  //    Emit typed error classes referenced by the operations' `errors` lists
  //    (added to the smithy models via patches/<service>/<operation>.json).
  const out: string[] = [];
  const errorIds: string[] = [];
  const errorIdSet = new Set<string>();
  for (const op of selected) {
    for (const e of op.def.errors ?? []) {
      if (!errorIdSet.has(e.target) && shapes[e.target]) {
        errorIdSet.add(e.target);
        errorIds.push(e.target);
      }
    }
  }
  errorIds.sort((a, b) => local(a).localeCompare(local(b)));
  const errorNames = new Set(errorIds.map(local));

  for (const id of errorIds) {
    const d = shapes[id];
    const name = local(id);
    const doc = oneLine(d.traits?.["smithy.api#documentation"]);
    if (doc) out.push(`/** ${doc} */`);
    const memberEntries =
      d.members && Object.keys(d.members).length
        ? Object.entries(d.members)
        : Object.entries({
            code: { target: "smithy.api#Integer" },
            message: { target: "smithy.api#String" },
          });
    const fields = memberEntries
      .map(
        ([mn, m]: [string, any]) =>
          `  ${tsKey(mn)}: ${PRELUDE[local(m.target)] ?? "S.Unknown"},`,
      )
      .join("\n");
    const cls = `S.TaggedErrorClass<${name}>()(${q(name)}, {\n${fields}\n})`;
    const matchers = d.traits?.[ERROR_MATCHERS_TRAIT];
    out.push(
      matchers
        ? `export class ${name} extends T.applyErrorMatchers(\n${cls},\n${JSON.stringify(matchers)},\n) {}\n`
        : `export class ${name} extends ${cls} {}\n`,
    );
  }

  //    Then every reachable shape in dependency order. Every shape gets an
  //    explicit TypeScript type (interface / type alias) next to its schema
  //    const; the const is cast to `S.Schema<T>` so the compiler never infers
  //    types out of the schema generics (see the header comment).
  order.forEach((id, i) => {
    if (errorIdSet.has(id)) return; // emitted as an error class above
    const d = shapes[id];
    const name = local(id);
    const doc = oneLine(d.traits?.["smithy.api#documentation"]);
    if (doc) out.push(`/** ${doc} */`);

    if (d.type === "structure") {
      // Paginated list responses always deliver their items member (the
      // protocol maps the envelope's `result`), so type it required even
      // though the docs mark `result` optional in the envelope.
      const itemsRoot = paginatedItemsRoot.get(id);
      const infos = memberInfos(d).map((info) =>
        info.tsName === itemsRoot ? { ...info, required: true } : info,
      );
      const fields = infos.flatMap((info) => {
        const opt = info.required ? "" : "?";
        const type =
          info.binding === "file"
            ? "(File | Blob)[]"
            : `${tsRef(info.target)}${info.nullable ? " | null" : ""}`;
        return [
          ...(info.doc ? [`  /** ${info.doc} */`] : []),
          `  ${tsKey(info.tsName)}${opt}: ${type};`,
        ];
      });
      const members = infos.map((info) => emitMember(info, i));
      // Paginated responses additionally carry the envelope's `result_info`
      // (see CloudflarePaginatedProtocol / the shared ResultInfo schema).
      if (
        paginatedOutputs.has(id) &&
        !infos.some((m) => m.tsName === "resultInfo")
      ) {
        fields.push(
          `  /** Pagination info from the envelope's \`result_info\`. */`,
          `  resultInfo?: ResultInfo | null;`,
        );
        members.push(
          `  "resultInfo": S.optional(S.NullOr(ResultInfo).pipe(T.ResultInfo())),`,
        );
      }
      out.push(
        fields.length
          ? `export interface ${name} {\n${fields.join("\n")}\n}`
          : `export interface ${name} {}`,
      );
      const struct = members.length
        ? `S.Struct({\n${members.join("\n")}\n})`
        : `S.Struct({})`;
      const http = httpFor[id];
      const tail = http ? `.pipe(T.Http(${JSON.stringify(http)}))` : "";
      // Op I/O roots carry the service key dictionary (inside the suspend, so
      // it survives core's Suspend resolution): the protocol reads it off the
      // root AST as the fallback wire mapping for opaque content.
      const dictPipe =
        keyDictionary && opIoShapes.has(id)
          ? `.pipe(T.KeyDictionary(KEY_DICTIONARY))`
          : "";
      out.push(
        `export const ${name} = /*@__PURE__*/ S.suspend(() =>\n` +
          `${struct}${tail}${dictPipe},\n` +
          `).annotate({ identifier: ${q(name)} }) as any as S.Schema<${name}>;\n`,
      );
    } else if (d.type === "list") {
      out.push(`export type ${name} = ${tsRef(d.member.target)}[];`);
      out.push(
        `export const ${name} = /*@__PURE__*/ S.Array(${ref(d.member.target, i)}) as any as S.Schema<${name}>;\n`,
      );
    } else if (d.type === "map") {
      out.push(
        `export type ${name} = { [key: string]: ${tsRef(d.value.target)} | undefined };`,
      );
      out.push(
        `export const ${name} = /*@__PURE__*/ S.Record(S.String, ${ref(d.value.target, i)}) as any as S.Schema<${name}>;\n`,
      );
    } else if (d.type === "enum") {
      // Open string union: literal members for autocomplete, `(string & {})`
      // so unknown / future values still pass. The schema stays S.String —
      // the protocol never validates enum membership.
      const values = Object.values(d.members ?? {})
        .map((m: any) => m.traits?.["smithy.api#enumValue"])
        .filter((v: unknown): v is string => typeof v === "string");
      const union = values.length
        ? `${values.map(q).join(" | ")} | (string & {})`
        : "string";
      out.push(`export type ${name} = ${union};`);
      out.push(`export const ${name} = /*@__PURE__*/ S.String;\n`);
    }
  });

  // 6. Emit operations with explicit OperationMethod annotations so the
  //    call signature comes from the emitted interfaces, not inference. The
  //    export is lowerFirst (`getNamespace`) while the shapes stay PascalCase.
  //    Paginated ops get the pagination-specific protocol + `.pages/.items`.
  for (const op of selected) {
    const opName = local(op.id);
    const errNames = ((op.def.errors ?? []) as Array<{ target: string }>)
      .map((e) => local(e.target))
      .filter((n) => errorNames.has(n));
    const doc = oneLine(op.def.traits?.["smithy.api#documentation"]);
    out.push(
      `export type ${opName}Error = ${[...errNames, "CloudflareOpError"].join(" | ")};`,
    );
    if (doc) out.push(`/** ${doc} */`);
    const pg = op.def.__pagination;
    const errList = [...errNames, "CloudflareRateLimited", "CloudflareError"];
    out.push(
      pg
        ? `export const ${lowerFirst(opName)}: API.PaginatedOperationMethod<\n` +
            `  ${local(op.def.__input)},\n` +
            `  ${local(op.def.__output)},\n` +
            `  ${opName}Error,\n` +
            `  CloudflareOpContext\n` +
            `> = /*@__PURE__*/ API.makePaginated(() => ({\n` +
            `  input: ${local(op.def.__input)},\n` +
            `  output: ${local(op.def.__output)},\n` +
            `  errors: [${errList.join(", ")}],\n` +
            `  protocol: CloudflarePaginatedProtocol,\n` +
            `  retry: Retry.Retry,\n` +
            `  pagination: ${JSON.stringify(pg)} as const,\n` +
            `}), cloudflarePaginate);\n`
        : `export const ${lowerFirst(opName)}: API.OperationMethod<\n` +
            `  ${local(op.def.__input)},\n` +
            `  ${local(op.def.__output)},\n` +
            `  ${opName}Error,\n` +
            `  CloudflareOpContext\n` +
            `> = /*@__PURE__*/ API.make(() => ({\n` +
            `  input: ${local(op.def.__input)},\n` +
            `  output: ${local(op.def.__output)},\n` +
            `  errors: [${errList.join(", ")}],\n` +
            `  protocol: CloudflareProtocol,\n` +
            `  retry: Retry.Retry,\n` +
            `}));\n`,
    );
  }

  const hasPaginated = paginatedOutputs.size > 0;
  const header =
    `// AUTO-GENERATED by scripts/generate.ts from .generated-specs. Do not edit.\n` +
    `import * as S from "@distilled.cloud/core/schema";\n` +
    `import * as API from "@distilled.cloud/core/api";\n` +
    `import * as T from "../traits.ts";\n` +
    `import {\n` +
    `  CloudflareProtocol,\n` +
    (hasPaginated ? `  CloudflarePaginatedProtocol,\n` : "") +
    `  type CloudflareOpError,\n` +
    `  type CloudflareOpContext,\n` +
    `} from "../protocol.ts";\n` +
    (hasPaginated
      ? `import { cloudflarePaginate, ResultInfo } from "../pagination.ts";\n`
      : "") +
    `import { CloudflareError, CloudflareRateLimited } from "../errors.ts";\n` +
    `import * as Retry from "../retry.ts";\n\n` +
    // Re-exported so inferred provider types downstream can always name them.
    `export type { CloudflareOpError, CloudflareOpContext };\n\n` +
    (keyDictionary
      ? `/** Fallback camelCase→wire mapping for opaque content (mined from the distilled SDK). */\n` +
        `const KEY_DICTIONARY: Record<string, string> = ${JSON.stringify(keyDictionary)};\n\n`
      : "");

  return { code: header + out.join("\n") + "\n", operations: selected.length };
};

// ============================================================================
// CLI
// ============================================================================

const command = Command.make(
  "generate",
  {
    smithy: Flag.string("smithy").pipe(
      Flag.withDefault(".generated-specs"),
      Flag.withDescription("Directory of Smithy JSON models"),
    ),
    out: Flag.string("out").pipe(
      Flag.withDefault("src/services"),
      Flag.withDescription("Output directory for generated service modules"),
    ),
    resource: Flag.string("resource").pipe(
      Flag.withDefault(""),
      Flag.withDescription("Only generate this resource (e.g. ai)"),
    ),
    limit: Flag.integer("limit").pipe(
      Flag.withDefault(0),
      Flag.withDescription("Only generate the first N operations (0 = all)"),
    ),
  },
  (config) =>
    Effect.gen(function* () {
      const fs = yield* FileSystem.FileSystem;
      const path = yield* Path.Path;
      const root = path.resolve(import.meta.dir, "..");
      const smithyDir = path.resolve(root, config.smithy);
      const outDir = path.resolve(root, config.out);

      yield* Console.log("⚙️  generate");
      yield* Console.log(`   Smithy: ${smithyDir}`);
      yield* Console.log(`   Output: ${outDir}`);

      // Models come from the generated smithy dir plus manual-specs/ —
      // hand-authored models for APIs the Cloudflare docs don't cover
      // (e.g. Containers). A manual model must not shadow a generated one.
      const manualDir = path.resolve(root, "manual-specs");
      const generated = (yield* fs.readDirectory(smithyDir))
        .filter((f) => f.endsWith(".json") && f !== "cloudflare.protocols.json")
        .map((f) => ({ file: f, dir: smithyDir }));
      const manual = (yield* fs.exists(manualDir))
        ? (yield* fs.readDirectory(manualDir))
            .filter((f) => f.endsWith(".json"))
            .map((f) => ({ file: f, dir: manualDir }))
        : [];
      for (const m of manual) {
        if (generated.some((g) => g.file === m.file)) {
          return yield* Effect.dieMessage(
            `manual-specs/${m.file} shadows a generated model — rename or delete it`,
          );
        }
      }
      const entries = [...generated, ...manual].sort((a, b) =>
        a.file.localeCompare(b.file),
      );

      yield* fs.makeDirectory(outDir, { recursive: true });

      const limitRef = {
        remaining: config.limit > 0 ? config.limit : Infinity,
      };
      const written: string[] = [];
      let totalOps = 0;
      let totalPatches = 0;
      let staleOps = 0;
      const badPatches: string[] = [];

      // Orphan check: a patch directory that matches no smithy model would be
      // silently dropped — flag it instead.
      const patchRoot = path.join(root, "patches");
      if (yield* fs.exists(patchRoot)) {
        const resources = new Set(
          entries.map((e) => e.file.replace(/\.json$/, "")),
        );
        for (const dir of yield* fs.readDirectory(patchRoot)) {
          if (!resources.has(dir)) {
            yield* Console.warn(
              `⚠️  patches/${dir}/ matches no smithy model — orphaned?`,
            );
          }
        }
      }

      for (const { file, dir } of entries) {
        const resource = file.replace(/\.json$/, "");
        if (config.resource && resource !== config.resource) continue;
        if (limitRef.remaining <= 0) break;

        const model = JSON.parse(
          yield* fs.readFileString(path.join(dir, file)),
        );

        // Apply patches/<resource>/*.json (RFC 6902, one file per operation)
        // to the smithy model before generating. Operations whose target no
        // longer exists (spec drift) are skipped with a warning; malformed
        // patches fail the run.
        const patchDir = path.join(patchRoot, resource);
        if (yield* fs.exists(patchDir)) {
          const patchFiles = (yield* fs.readDirectory(patchDir))
            .filter((f) => f.endsWith(".json"))
            .sort();
          for (const pf of patchFiles) {
            const parsed = JSON.parse(
              yield* fs.readFileString(path.join(patchDir, pf)),
            ) as PatchFile;
            for (const patchOp of parsed.patches ?? []) {
              try {
                applyOperation(model, patchOp);
              } catch (e) {
                const msg = e instanceof Error ? e.message : String(e);
                if (isStaleTargetError(msg)) {
                  staleOps++;
                  yield* Console.warn(
                    `   ⚠️  stale: ${resource}/${pf} [${patchOp.op} ${patchOp.path}]`,
                  );
                } else {
                  badPatches.push(
                    `${resource}/${pf} [${patchOp.op} ${patchOp.path}]: ${msg}`,
                  );
                }
              }
            }
            totalPatches++;
          }
        }

        // Per-service fallback key dictionary (written by
        // import-distilled-patches.ts), attached to op I/O roots.
        const dictPath = path.join(root, "dictionaries", `${resource}.json`);
        const keyDictionary = (yield* fs.exists(dictPath))
          ? (JSON.parse(yield* fs.readFileString(dictPath)) as Record<
              string,
              string
            >)
          : undefined;

        const { code, operations } = generateModel(
          model,
          limitRef,
          keyDictionary,
        );
        if (operations === 0) continue;

        yield* fs.writeFileString(path.join(outDir, `${resource}.ts`), code);
        written.push(resource);
        totalOps += operations;
      }

      if (badPatches.length) {
        for (const b of badPatches) yield* Console.error(`❌ bad patch: ${b}`);
        return yield* Effect.dieMessage(
          `${badPatches.length} malformed patch operation(s) — fix or remove them`,
        );
      }

      // Barrel — namespace per resource to avoid op-name collisions.
      const barrel =
        `// AUTO-GENERATED by scripts/generate.ts. Do not edit.\n` +
        written.map((r) => `export * as ${r} from "./${r}.ts";`).join("\n") +
        "\n";
      yield* fs.writeFileString(path.join(outDir, "index.ts"), barrel);

      yield* Console.log(
        `\n✅ Generated ${totalOps} operations across ${written.length} resource modules` +
          (totalPatches
            ? ` (${totalPatches} patch files applied${staleOps ? `, ${staleOps} stale op(s) skipped` : ""}).`
            : "."),
      );
      yield* Console.log(`   ${path.join(outDir, "index.ts")}`);
    }),
).pipe(
  Command.withDescription(
    "Generate the Cloudflare Effect SDK from the Smithy models",
  ),
);

const program = Command.run(command, { version: "1.0.0" });

BunRuntime.runMain(Effect.provide(program, BunServices.layer));
