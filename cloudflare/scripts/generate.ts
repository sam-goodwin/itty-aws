#!/usr/bin/env bun
/**
 * generate — turn the Smithy JSON models in cloudflare/smithy into an Effect SDK.
 *
 * Input:  cloudflare/smithy/<resource>.json  (Smithy 2.0 models, one per resource)
 * Output: cloudflare/sdk/operations/<resource>.ts  +  operations/index.ts
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
 * The protocol, credentials, errors, and traits are hand-written (see ../sdk).
 * Only ./operations is generated.
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

  const emitMember = (memberName: string, m: any, selfIdx: number): string => {
    const traits = m.traits ?? {};
    let expr = ref(m.target, selfIdx);
    const pipes: string[] = [];

    if ("smithy.api#httpLabel" in traits) {
      pipes.push("T.Label()");
    } else if ("smithy.api#httpQuery" in traits) {
      const wire = traits["smithy.api#httpQuery"];
      pipes.push(
        wire && wire !== memberName ? `T.Query(${q(wire)})` : "T.Query()",
      );
    } else if ("smithy.api#httpHeader" in traits) {
      const wire = traits["smithy.api#httpHeader"];
      pipes.push(
        wire && wire !== memberName ? `T.Header(${q(wire)})` : "T.Header()",
      );
    } else if (ENVELOPE_PAYLOAD_TRAIT in traits) {
      pipes.push("T.EnvelopePayload()");
    } else {
      const jn = traits["smithy.api#jsonName"];
      if (jn && jn !== memberName) pipes.push(`T.Body(${q(jn)})`);
    }

    if (pipes.length) expr = `${expr}.pipe(${pipes.join(", ")})`;
    if (!("smithy.api#required" in traits)) expr = `S.optional(${expr})`;
    return `  ${q(memberName)}: ${expr},`;
  };

  // 5. Emit shape declarations in dependency order. Every shape gets an
  //    explicit TypeScript type (interface / type alias) next to its schema
  //    const; the const is cast to `S.Schema<T>` so the compiler never infers
  //    types out of the schema generics (see the header comment).
  const out: string[] = [];
  order.forEach((id, i) => {
    const d = shapes[id];
    const name = local(id);
    const doc = oneLine(d.traits?.["smithy.api#documentation"]);
    if (doc) out.push(`/** ${doc} */`);

    if (d.type === "structure") {
      const entries = Object.entries(d.members ?? {});
      const fields = entries.map(([mn, m]: [string, any]) => {
        const opt = "smithy.api#required" in (m.traits ?? {}) ? "" : "?";
        return `  ${tsKey(mn)}${opt}: ${tsRef(m.target)};`;
      });
      out.push(
        fields.length
          ? `export interface ${name} {\n${fields.join("\n")}\n}`
          : `export interface ${name} {}`,
      );
      const members = entries.map(([mn, m]) => emitMember(mn, m, i));
      const struct = members.length
        ? `S.Struct({\n${members.join("\n")}\n})`
        : `S.Struct({})`;
      const http = httpFor[id];
      const tail = http ? `.pipe(T.Http(${JSON.stringify(http)}))` : "";
      out.push(
        `export const ${name} = /*@__PURE__*/ S.suspend(() =>\n` +
          `${struct}${tail},\n` +
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
  //    call signature comes from the emitted interfaces, not inference.
  for (const op of selected) {
    const opName = local(op.id);
    const doc = oneLine(op.def.traits?.["smithy.api#documentation"]);
    if (doc) out.push(`/** ${doc} */`);
    out.push(
      `export const ${opName}: API.OperationMethod<\n` +
        `  ${local(op.def.__input)},\n` +
        `  ${local(op.def.__output)},\n` +
        `  CloudflareOpError,\n` +
        `  CloudflareOpContext\n` +
        `> = /*@__PURE__*/ API.make(() => ({\n` +
        `  input: ${local(op.def.__input)},\n` +
        `  output: ${local(op.def.__output)},\n` +
        `  errors: [CloudflareRateLimited, CloudflareError],\n` +
        `  protocol: CloudflareProtocol,\n` +
        `}));\n`,
    );
  }

  const header =
    `// AUTO-GENERATED by scripts/generate.ts from cloudflare/smithy. Do not edit.\n` +
    `import * as S from "@distilled.cloud/core/schema";\n` +
    `import * as API from "@distilled.cloud/core/api";\n` +
    `import * as T from "../traits.ts";\n` +
    `import {\n` +
    `  CloudflareProtocol,\n` +
    `  type CloudflareOpError,\n` +
    `  type CloudflareOpContext,\n` +
    `} from "../protocol.ts";\n` +
    `import { CloudflareError, CloudflareRateLimited } from "../errors.ts";\n\n`;

  return { code: header + out.join("\n") + "\n", operations: selected.length };
};

// ============================================================================
// CLI
// ============================================================================

const command = Command.make(
  "generate",
  {
    smithy: Flag.string("smithy").pipe(
      Flag.withDefault("smithy"),
      Flag.withDescription("Directory of Smithy JSON models"),
    ),
    out: Flag.string("out").pipe(
      Flag.withDefault("sdk/operations"),
      Flag.withDescription("Output directory for generated operation modules"),
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

      const entries = (yield* fs.readDirectory(smithyDir))
        .filter((f) => f.endsWith(".json") && f !== "cloudflare.protocols.json")
        .sort();

      yield* fs.makeDirectory(outDir, { recursive: true });

      const limitRef = {
        remaining: config.limit > 0 ? config.limit : Infinity,
      };
      const written: string[] = [];
      let totalOps = 0;

      for (const file of entries) {
        const resource = file.replace(/\.json$/, "");
        if (config.resource && resource !== config.resource) continue;
        if (limitRef.remaining <= 0) break;

        const model = JSON.parse(
          yield* fs.readFileString(path.join(smithyDir, file)),
        );
        const { code, operations } = generateModel(model, limitRef);
        if (operations === 0) continue;

        yield* fs.writeFileString(path.join(outDir, `${resource}.ts`), code);
        written.push(resource);
        totalOps += operations;
      }

      // Barrel — namespace per resource to avoid op-name collisions.
      const barrel =
        `// AUTO-GENERATED by scripts/generate.ts. Do not edit.\n` +
        written.map((r) => `export * as ${r} from "./${r}.ts";`).join("\n") +
        "\n";
      yield* fs.writeFileString(path.join(outDir, "index.ts"), barrel);

      yield* Console.log(
        `\n✅ Generated ${totalOps} operations across ${written.length} resource modules.`,
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
