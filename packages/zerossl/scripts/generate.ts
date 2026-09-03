#!/usr/bin/env bun
/**
 * generate — turn the Smithy JSON model in .generated-specs into the Effect
 * ZeroSSL SDK.
 *
 * Input:  .generated-specs/zerossl.json  (written by scripts/convert.ts)
 * Patches: patches/zerossl/*.json — typed `error.type` errors
 * Output: src/services/zerossl.ts  +  src/services/index.ts
 */
import { type SdkSpec } from "@distilled.cloud/core/codegen/generator";
import { runGeneratorCli } from "@distilled.cloud/core/codegen/cli";
import {
  ERROR_MATCHERS_TRAIT,
  NULLABLE_TRAIT,
  RAW_RESPONSE_TRAIT,
} from "@distilled.cloud/core/codegen/openapi";

const spec: SdkSpec = {
  nullableTrait: NULLABLE_TRAIT,
  errorMatchersTrait: ERROR_MATCHERS_TRAIT,
  extraBindings: [
    {
      trait: RAW_RESPONSE_TRAIT,
      binding: "rawResponse",
      pipe: "T.RawResponse()",
      rootPipe: "T.RawResponseRoot()",
    },
  ],
  memberTraitPipes: {
    "smithy.api#sensitive": "T.SensitiveValue",
  },
  sourceNote: ".generated-specs (hand-authored ZeroSSL OpenAPI → smithy)",
  operationDecl: {
    contextType: "ZeroSslOpContext",
    commonErrorType: "ZeroSslOpError",
    commonErrorClasses: [],
    protocol: "ZeroSslProtocol",
    retry: "Retry.Retry",
  },
  postProcess: (code) =>
    code.replace(/import \{\s*\} from "\.\.\/errors\.ts";\n/, ""),
};

runGeneratorCli({
  description: "Generate the ZeroSSL Effect SDK from the Smithy model",
  root: `${import.meta.dir}/..`,
  patchesDir: "patches",
  spec: () => spec,
});
