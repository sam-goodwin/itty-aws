#!/usr/bin/env bun
/**
 * convert — turn the Fly.io Machines OpenAPI spec into a Smithy JSON model.
 *
 * Input:  specs/distilled-spec-fly-io/specs/openapi.json  (OAS 3.0)
 * Output: .generated-specs/machines.json
 *
 * The RFC-6902 patch chain in `patches/` (ported verbatim from distilled v0)
 * applies HERE, to the OpenAPI document, before conversion — it adds the
 * 400/403/404 error responses the upstream spec omits (discovered via real
 * API testing). `scripts/generate.ts` therefore runs with `patchesDir:
 * false`.
 */
import { runOpenApiConvert } from "@distilled.cloud/core/codegen/openapi-cli";

await runOpenApiConvert({
  root: `${import.meta.dir}/..`,
  specs: [
    {
      name: "machines",
      specPath: "specs/distilled-spec-fly-io/specs/openapi.json",
    },
  ],
  options: {
    namespace: "com.flyio.machines",
    serviceName: "FlyMachines",
    // v0 parity (packages/fly-io/scripts/generate.ts in distilled):
    // statusToErrorClass keeps the converter default {400: BadRequest,
    // 403: Forbidden, 404: NotFound, 409: Conflict, 422: UnprocessableEntity}.
    defaultErrorStatuses: ["401", "429", "500", "502", "503", "504"],
    skipDeprecated: true,
  },
});
