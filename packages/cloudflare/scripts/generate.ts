#!/usr/bin/env bun
/**
 * generate — turn the Smithy JSON models in .generated-specs into an Effect SDK.
 *
 * Input:  .generated-specs/<resource>.json  (Smithy 2.0 models, one per resource)
 * Output: src/services/<resource>.ts  +  services/index.ts
 *
 * The smithy→SDK compiler and CLI pipeline live in
 * `@distilled.cloud/core/codegen`; this script is Cloudflare's provider
 * spec: the envelope / form-data / nullable / key-dictionary trait
 * vocabulary and pipes, opaque union-cases, error matchers, resultInfo
 * injection, protocol/retry names, the import header, and route aliases.
 */

import { camel } from "@distilled.cloud/core/codegen/naming";
import { PURE } from "@distilled.cloud/core/codegen/emit";
import {
  upperFirst,
  type SdkSpec,
} from "@distilled.cloud/core/codegen/generator";
import { runGeneratorCli } from "@distilled.cloud/core/codegen/cli";

const ENVELOPE_PAYLOAD_TRAIT = "com.cloudflare.protocols#envelopePayload";
const NULLABLE_TRAIT = "com.cloudflare.protocols#nullable";
const ERROR_MATCHERS_TRAIT = "com.cloudflare.protocols#errorMatchers";
const FORM_DATA_FILE_TRAIT = "com.cloudflare.protocols#formDataFile";
const KEY_DICTIONARY_TRAIT = "com.cloudflare.protocols#keyDictionary";

/** Cloudflare's provider spec for the shared smithy→SDK compiler. */
const makeCfSpec = (
  keyDictionary?: Record<string, string>,
  opAliases?: Array<{ alias: string; target: string }>,
): SdkSpec => ({
  // Docs wire names are snake_case; the TS surface is camelCase.
  memberName: camel,
  nullableTrait: NULLABLE_TRAIT,
  errorMatchersTrait: ERROR_MATCHERS_TRAIT,

  extraBindings: [
    {
      trait: ENVELOPE_PAYLOAD_TRAIT,
      binding: "payload",
      pipe: "T.EnvelopePayload()",
    },
    {
      trait: FORM_DATA_FILE_TRAIT,
      binding: "file",
      pipe: "T.FormDataFile()",
      tsType: "(File | Blob)[]",
    },
  ],

  memberTraitPipes: {
    [KEY_DICTIONARY_TRAIT]: "T.KeyDictionary",
  },

  sourceNote: ".generated-specs",

  // Op I/O roots carry the service key dictionary (inside the suspend, so it
  // survives core's Suspend resolution): the protocol reads it off the root
  // AST as the fallback wire mapping for opaque content.
  ...(keyDictionary
    ? {
        rootKeyDictionary: {
          dict: keyDictionary,
          doc: "Fallback camelCase→wire mapping for opaque content (mined from the distilled SDK).",
        },
      }
    : {}),

  barePayload: {
    trait: ENVELOPE_PAYLOAD_TRAIT,
    rootPipe: "T.EnvelopePayloadRoot()",
  },

  pagination: {
    itemsFallback: "result",
    syntheticOutputs: ["resultInfo"],
    // Paginated responses additionally carry the envelope's `result_info`
    // (see CloudflarePaginatedProtocol / the shared ResultInfo schema).
    injectOutputMember: {
      tsName: "resultInfo",
      interfaceLines: [
        `  /** Pagination info from the envelope's \`result_info\`. */`,
        `  resultInfo?: ResultInfo | null;`,
      ],
      structLine: `  "resultInfo": S.optional(S.NullOr(ResultInfo).pipe(T.ResultInfo())),`,
      imports: ["ResultInfo"],
    },
  },

  // Discriminated union of object cases. The TS type is the case union; the
  // schema is opaque (S.Unknown) carrying each case's camelCase key set —
  // Cloudflare returns every case's keys (null for inactive ones), so the
  // protocol picks the active case by key-set.
  union: ({ name, caseTargets, caseKeys, tsRef }) => [
    `export type ${name} = ${caseTargets.map(tsRef).join(" | ") || "unknown"};`,
    `export const ${name} = ${PURE}S.Unknown.pipe(T.UnionCases(${JSON.stringify(caseKeys)}));\n`,
  ],

  operationDecl: {
    contextType: "CloudflareOpContext",
    commonErrorType: "CloudflareOpError",
    commonErrorClasses: ["CloudflareRateLimited", "CloudflareError"],
    protocol: "CloudflareProtocol",
    paginatedProtocol: "CloudflarePaginatedProtocol",
    paginateStrategy: "cloudflarePaginate",
    retry: "Retry.Retry",
  },

  // Route-alias exports: some routes exist under several distilled export
  // names; re-export the canonical op (and its types) under each alias.
  footer: ({ emittedOps }) => {
    const out: string[] = [];
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
    return out;
  },
});

runGeneratorCli({
  description: "Generate the Cloudflare Effect SDK from the Smithy models",
  root: `${import.meta.dir}/..`,
  excludeModel: (f) => f === "cloudflare.protocols.json",
  manualSpecsDir: "manual-specs",
  // Per-service fallback key dictionary and route aliases arrive via the
  // model's metadata (written by import-distilled-patches.ts).
  spec: (model) =>
    makeCfSpec(model.metadata?.keyDictionary, model.metadata?.opAliases),
});
