#!/usr/bin/env bun
/**
 * convert — turn the hand-authored ACME OpenAPI document into a Smithy JSON
 * model.
 *
 * Input:  specs/acme/openapi.json  (hand-authored from RFC 8555; there is
 *         no vendor OpenAPI for a protocol)
 * Output: .generated-specs/acme.json
 *
 * ACME failures are RFC 7807 problem documents distinguished by their `type`
 * URN, not by HTTP status, so no status → class map is stamped here; every
 * typed error is a Smithy patch in `patches/acme/` matched on the URN (the
 * protocol matches on `Problem.type`). Only the always-possible statuses are
 * covered by the package's default errors.
 */
import { runOpenApiConvert } from "@distilled.cloud/core/codegen/openapi-cli";

await runOpenApiConvert({
  root: `${import.meta.dir}/..`,
  specs: [{ name: "acme", specPath: "specs/acme/openapi.json" }],
  // Smithy patches (typed problem errors) apply in scripts/generate.ts.
  patchesDir: false,
  options: {
    namespace: "org.ietf.acme",
    serviceName: "Acme",
    // No per-op status errors: the typed ones are patched onto the model.
    statusToErrorClass: {},
    defaultErrorStatuses: [
      "400",
      "401",
      "403",
      "404",
      "409",
      "429",
      "500",
      "503",
    ],
    successStatuses: ["200", "201", "204"],
    skipDeprecated: true,
  },
});
