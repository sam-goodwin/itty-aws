#!/usr/bin/env bun
/**
 * convert — turn the hand-authored ZeroSSL OpenAPI document into a Smithy
 * JSON model.
 *
 * Input:  specs/zerossl/openapi.json  (hand-authored; ZeroSSL publishes
 *         docs, not an OpenAPI document)
 * Output: .generated-specs/zerossl.json
 *
 * ZeroSSL reports failures in a `{ success: false, error: { code, type } }`
 * envelope, typically under HTTP 200, so typed errors are Smithy patches in
 * `patches/zerossl/` matched on `error.type` by the protocol.
 */
import { runOpenApiConvert } from "@distilled.cloud/core/codegen/openapi-cli";

await runOpenApiConvert({
  root: `${import.meta.dir}/..`,
  specs: [{ name: "zerossl", specPath: "specs/zerossl/openapi.json" }],
  patchesDir: false,
  options: {
    namespace: "com.zerossl.api",
    serviceName: "ZeroSsl",
    statusToErrorClass: {},
    defaultErrorStatuses: ["400", "401", "403", "404", "429", "500", "503"],
    successStatuses: ["200", "201", "204"],
    skipDeprecated: true,
  },
});
