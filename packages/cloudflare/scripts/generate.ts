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
import { type SdkSpec } from "@distilled.cloud/core/codegen/generator";
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
      // A member holding the whole envelope `result`; as a response's sole
      // member, the response IS the payload (bare arrays/scalars).
      trait: ENVELOPE_PAYLOAD_TRAIT,
      binding: "payload",
      pipe: "T.EnvelopePayload()",
      rootPipe: "T.EnvelopePayloadRoot()",
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

  // One pagination profile: the v4 envelope. Its protocol keeps the
  // envelope's `result_info` on the response (delivered as the injected
  // `resultInfo` member) so `.pages()`/`.items()` can advance.
  paginationProfiles: {
    envelope: {
      protocol: "CloudflarePaginatedProtocol",
      strategy: "cloudflarePaginate",
      itemsFallback: "result",
      syntheticOutputs: ["resultInfo"],
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
  },

  // Cloudflare returns every union case's keys (null for the inactive
  // ones), so the protocol discriminates by key-set at decode time.
  unionStyle: "opaque-cases",

  operationDecl: {
    contextType: "CloudflareOpContext",
    commonErrorType: "CloudflareOpError",
    commonErrorClasses: ["CloudflareRateLimited", "CloudflareError"],
    protocol: "CloudflareProtocol",
    retry: "Retry.Retry",
  },

  // Some routes exist under several distilled export names upstream.
  opAliases,
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
