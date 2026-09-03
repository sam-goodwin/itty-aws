#!/usr/bin/env bun
/**
 * generate — turn the Smithy JSON model in .generated-specs into the Effect
 * ACME SDK.
 *
 * Input:  .generated-specs/acme.json  (written by scripts/convert.ts)
 * Patches: patches/acme/*.json — typed problem-document errors, one shape per
 *          `urn:ietf:params:acme:error:*` type, attached to the operations
 *          that raise them (RFC 6902 against the Smithy model)
 * Output: src/services/acme.ts  +  src/services/index.ts
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
  sourceNote: ".generated-specs (hand-authored RFC 8555 OpenAPI → smithy)",
  operationDecl: {
    contextType: "AcmeOpContext",
    commonErrorType: "AcmeOpError",
    commonErrorClasses: [],
    protocol: "AcmeProtocol",
    retry: "Retry.Retry",
  },
  postProcess: (code) =>
    code.replace(/import \{\s*\} from "\.\.\/errors\.ts";\n/, ""),
};

runGeneratorCli({
  description: "Generate the ACME Effect SDK from the Smithy model",
  root: `${import.meta.dir}/..`,
  patchesDir: "patches",
  spec: () => spec,
});
