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
 * The generic smithy→code machinery (naming, shape graph, emission idioms,
 * pagination validation) lives in `@distilled.cloud/core/codegen`; this
 * script supplies what is Cloudflare's own: the docs-pipeline scalar
 * prelude, envelope/key-dictionary/union-case traits, the RFC-6902 patch
 * pipeline, and route aliases.
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
import {
  camel,
  local,
  lowerFirst,
  oneLine,
  q,
  tsKey,
  upperFirst,
} from "@distilled.cloud/core/codegen/naming";
import {
  orderIndex,
  reachableFrom,
  shapeDeps,
  topoOrder,
} from "@distilled.cloud/core/codegen/graph";
import {
  barrel,
  enumDecl,
  errorClass,
  errorUnionAlias,
  interfaceDecl,
  interfaceField,
  operationConst,
  suspendConst,
} from "@distilled.cloud/core/codegen/emit";
import {
  JSON_PRELUDE,
  makeSchemaRef,
  makeTsRef,
  TS_JSON_PRELUDE,
} from "@distilled.cloud/core/codegen/prelude";
import {
  collectOperations,
  collectOpErrorIds,
  ensureNamedIo,
  modelNamespace,
} from "@distilled.cloud/core/codegen/operations";
import {
  memberBases,
  smithyWireName,
} from "@distilled.cloud/core/codegen/members";
import { validatePaginated } from "@distilled.cloud/core/codegen/pagination";

const ENVELOPE_PAYLOAD_TRAIT = "com.cloudflare.protocols#envelopePayload";

const PURE = "/*@__PURE__*/ ";

const NULLABLE_TRAIT = "com.cloudflare.protocols#nullable";
const ERROR_MATCHERS_TRAIT = "com.cloudflare.protocols#errorMatchers";
const FORM_DATA_FILE_TRAIT = "com.cloudflare.protocols#formDataFile";
const KEY_DICTIONARY_TRAIT = "com.cloudflare.protocols#keyDictionary";
const PAGINATED_TRAIT = "smithy.api#paginated";

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
  opAliases?: Array<{ alias: string; target: string }>,
): Generated => {
  const shapes: Record<string, any> = model.shapes;

  // 1. Split operations out; synthesize empty Request/Response for Unit I/O so
  //    every operation has a named input shape to carry the Http() trait.
  const operations = collectOperations(shapes);
  const httpFor: Record<string, any> = {}; // input shape id → http trait
  const ns = modelNamespace(operations, shapes, "com.cloudflare.unknown");

  const selected: { id: string; def: any }[] = [];
  for (const op of operations) {
    if (limitRef.remaining <= 0) break;
    limitRef.remaining--;
    selected.push(op);

    const { input, output } = ensureNamedIo(shapes, op, ns);
    op.def.__input = input;
    op.def.__output = output;

    const http = op.def.traits?.["smithy.api#http"];
    if (http) httpFor[input] = http;
  }

  if (selected.length === 0) return { code: "", operations: 0 };

  // 2. Collect every shape reachable from the selected operations' I/O, then
  //    order dependencies-first (cycles handled with S.suspend at refs).
  const roots = selected.flatMap((op) => [op.def.__input, op.def.__output]);
  const reachable = reachableFrom(shapes, roots, shapeDeps);
  const order = topoOrder(shapes, reachable, shapeDeps);
  const indexOf = orderIndex(order);

  // 3. Reference resolvers (shared): prelude scalars via the JSON baseline,
  //    forward references wrapped in S.suspend.
  const ref = makeSchemaRef(JSON_PRELUDE, indexOf);
  const tsRef = makeTsRef(TS_JSON_PRELUDE);

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

  const memberInfos = (d: any): MemberInfo[] =>
    memberBases(d, camel).map((base) => {
      const traits = base.traits;
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
      return {
        tsName: base.tsName,
        wire: smithyWireName(
          traits,
          base.name,
          binding === "label" || binding === "query" || binding === "header"
            ? binding
            : "other",
        ),
        target: base.target,
        binding,
        required: base.required,
        nullable: NULLABLE_TRAIT in traits,
        doc: base.doc,
        keyDictionary: traits[KEY_DICTIONARY_TRAIT],
      };
    });

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

  // 4. Validate pagination traits (added via patches). A paginated op must
  //    actually carry its page/cursor token on the input and its items member
  //    on the output — otherwise `.pages()` would loop or yield nothing, so
  //    the op degrades to a plain operation.
  const paginatedOutputs = new Set<string>();
  const paginatedItemsRoot = new Map<string, string>();
  const syntheticOutputs = new Set(["resultInfo"]);
  for (const op of selected) {
    const pg = op.def.traits?.[PAGINATED_TRAIT];
    if (!pg) continue;
    const inNames = new Set(
      memberInfos(shapes[op.def.__input] ?? {}).map((m) => m.tsName),
    );
    const outNames = new Set(
      memberInfos(shapes[op.def.__output] ?? {}).map((m) => m.tsName),
    );
    const { ok, itemsRoot } = validatePaginated({
      trait: pg,
      inputNames: inNames,
      outputNames: outNames,
      itemsFallback: "result",
      syntheticOutputs,
    });
    if (ok) {
      op.def.__pagination = pg;
      paginatedOutputs.add(op.def.__output);
      paginatedItemsRoot.set(op.def.__output, itemsRoot);
    }
  }

  //    Emit typed error classes referenced by the operations' `errors` lists
  //    (added to the smithy models via patches/<service>/<operation>.json).
  const out: string[] = [];
  const errorIds = collectOpErrorIds(selected, shapes);
  const errorIdSet = new Set(errorIds);
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
    const fields = memberEntries.map(
      ([mn, m]: [string, any]) =>
        `  ${tsKey(mn)}: ${JSON_PRELUDE[local(m.target)] ?? "S.Unknown"},`,
    );
    const matchers = d.traits?.[ERROR_MATCHERS_TRAIT];
    out.push(
      errorClass({
        name,
        fields,
        wrap: matchers
          ? (cls) =>
              `T.applyErrorMatchers(\n${cls},\n${JSON.stringify(matchers)},\n)`
          : undefined,
      }),
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
      // Bare-payload response: a single member tagged EnvelopePayload means
      // `result` is an array/scalar and the whole response IS that payload
      // (e.g. worker script search → a bare array). Emit the member's type
      // directly + a root marker the protocol honors, matching distilled.
      const memberEntriesAll = Object.entries(d.members ?? {});
      if (
        !paginatedOutputs.has(id) &&
        memberEntriesAll.length === 1 &&
        ENVELOPE_PAYLOAD_TRAIT in
          ((memberEntriesAll[0]![1] as any).traits ?? {})
      ) {
        const [, m] = memberEntriesAll[0]! as [string, any];
        out.push(`export type ${name} = ${tsRef(m.target)};`);
        out.push(
          suspendConst({
            name,
            pure: PURE,
            multiline: true,
            annotateIdentifier: true,
            expr: `${ref(m.target, i)}.pipe(T.EnvelopePayloadRoot())`,
          }),
        );
        return;
      }

      // Paginated list responses always deliver their items member (the
      // protocol maps the envelope's `result`), so type it required even
      // though the docs mark `result` optional in the envelope.
      const itemsRoot = paginatedItemsRoot.get(id);
      const infos = memberInfos(d).map((info) =>
        info.tsName === itemsRoot ? { ...info, required: true } : info,
      );
      const fields = infos.flatMap((info) =>
        interfaceField({
          name: info.tsName,
          optional: !info.required,
          doc: info.doc,
          type:
            info.binding === "file"
              ? "(File | Blob)[]"
              : `${tsRef(info.target)}${info.nullable ? " | null" : ""}`,
        }),
      );
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
      out.push(interfaceDecl(name, fields));
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
        suspendConst({
          name,
          pure: PURE,
          multiline: true,
          annotateIdentifier: true,
          expr: `${struct}${tail}${dictPipe}`,
        }),
      );
    } else if (d.type === "list") {
      out.push(`export type ${name} = ${tsRef(d.member.target)}[];`);
      out.push(
        `export const ${name} = ${PURE}S.Array(${ref(d.member.target, i)}) as any as S.Schema<${name}>;\n`,
      );
    } else if (d.type === "map") {
      out.push(
        `export type ${name} = { [key: string]: ${tsRef(d.value.target)} | undefined };`,
      );
      out.push(
        `export const ${name} = ${PURE}S.Record(S.String, ${ref(d.value.target, i)}) as any as S.Schema<${name}>;\n`,
      );
    } else if (d.type === "union") {
      // Discriminated union of object cases. The TS type is the case union;
      // the schema is opaque (S.Unknown) carrying each case's camelCase key
      // set. Cloudflare returns every case's keys (null for inactive ones),
      // so the protocol picks the active case and drops the others — keeping
      // each case's exact key set for `"key" in value` discrimination.
      const caseTargets = Object.values(d.members ?? {}).map(
        (m: any) => m.target,
      );
      const caseKeys = caseTargets.map((t: string) => {
        const cd = shapes[t];
        return cd?.type === "structure"
          ? memberInfos(cd).map((mi) => mi.tsName)
          : [];
      });
      out.push(
        `export type ${name} = ${caseTargets.map(tsRef).join(" | ") || "unknown"};`,
      );
      out.push(
        `export const ${name} = ${PURE}S.Unknown.pipe(T.UnionCases(${JSON.stringify(caseKeys)}));\n`,
      );
    } else if (d.type === "enum") {
      // Open string union: literal members for autocomplete, `(string & {})`
      // so unknown / future values still pass. The schema stays S.String —
      // the protocol never validates enum membership.
      const values = Object.values(d.members ?? {})
        .map((m: any) => m.traits?.["smithy.api#enumValue"])
        .filter((v: unknown): v is string => typeof v === "string");
      out.push(...enumDecl({ name, values, pure: PURE }));
    }
  });

  // 5. Emit operations with explicit OperationMethod annotations so the
  //    call signature comes from the emitted interfaces, not inference. The
  //    export is lowerFirst (`getNamespace`) while the shapes stay PascalCase.
  //    Paginated ops get the pagination-specific protocol + `.pages/.items`.
  for (const op of selected) {
    const opName = local(op.id);
    const errNames = ((op.def.errors ?? []) as Array<{ target: string }>)
      .map((e) => local(e.target))
      .filter((n) => errorNames.has(n));
    const doc = oneLine(op.def.traits?.["smithy.api#documentation"]);
    out.push(errorUnionAlias(opName, errNames, "CloudflareOpError"));
    if (doc) out.push(`/** ${doc} */`);
    const pg = op.def.__pagination;
    const errList = [...errNames, "CloudflareRateLimited", "CloudflareError"];
    const typeAnnotation = (method: string) =>
      `API.${method}<\n` +
      `  ${local(op.def.__input)},\n` +
      `  ${local(op.def.__output)},\n` +
      `  ${opName}Error,\n` +
      `  CloudflareOpContext\n` +
      `>`;
    out.push(
      pg
        ? operationConst({
            exportName: lowerFirst(opName),
            typeAnnotation: typeAnnotation("PaginatedOperationMethod"),
            factory: "API.makePaginated",
            pure: PURE,
            extraArg: "cloudflarePaginate",
            config:
              `{\n` +
              `  input: ${local(op.def.__input)},\n` +
              `  output: ${local(op.def.__output)},\n` +
              `  errors: [${errList.join(", ")}],\n` +
              `  protocol: CloudflarePaginatedProtocol,\n` +
              `  retry: Retry.Retry,\n` +
              `  pagination: ${JSON.stringify(pg)} as const,\n` +
              `}`,
          })
        : operationConst({
            exportName: lowerFirst(opName),
            typeAnnotation: typeAnnotation("OperationMethod"),
            factory: "API.make",
            pure: PURE,
            config:
              `{\n` +
              `  input: ${local(op.def.__input)},\n` +
              `  output: ${local(op.def.__output)},\n` +
              `  errors: [${errList.join(", ")}],\n` +
              `  protocol: CloudflareProtocol,\n` +
              `  retry: Retry.Retry,\n` +
              `}`,
          }),
    );
  }

  // 6. Route-alias exports: some routes exist under several distilled export
  //    names; re-export the canonical op (and its Request/Response/Error
  //    types) under each alias.
  const emittedOps = new Set(selected.map((op) => lowerFirst(local(op.id))));
  for (const { alias, target } of opAliases ?? []) {
    if (!emittedOps.has(target) || emittedOps.has(alias)) continue;
    emittedOps.add(alias);
    const A = upperFirst(alias);
    const T2 = upperFirst(target);
    out.push(
      `// Alias of ${target} (same route, alternate export name upstream).\n` +
        `export const ${alias} = ${target};\n` +
        `export type ${A}Request = ${T2}Request;\n` +
        `export type ${A}Response = ${T2}Response;\n` +
        `export type ${A}Error = ${T2}Error;\n`,
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
          // Hand-written *.manual.json patches apply after the generated
          // ones — they usually target post-rename shape names.
          const patchFiles = (yield* fs.readDirectory(patchDir))
            .filter((f) => f.endsWith(".json"))
            .sort(
              (a, b) =>
                Number(a.endsWith(".manual.json")) -
                  Number(b.endsWith(".manual.json")) || a.localeCompare(b),
            );
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

        // Per-service fallback key dictionary and route aliases, patched
        // into the model's metadata by patches/<resource>/_metadata.json
        // (written by import-distilled-patches.ts). The dictionary attaches
        // to op I/O roots; the aliases become re-exports.
        const keyDictionary = model.metadata?.keyDictionary as
          | Record<string, string>
          | undefined;
        const opAliases = model.metadata?.opAliases as
          | Array<{ alias: string; target: string }>
          | undefined;

        const { code, operations } = generateModel(
          model,
          limitRef,
          keyDictionary,
          opAliases,
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
      yield* fs.writeFileString(
        path.join(outDir, "index.ts"),
        barrel(
          `// AUTO-GENERATED by scripts/generate.ts. Do not edit.\n`,
          written.map((r) => ({ name: r, path: `./${r}.ts` })),
        ),
      );

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
