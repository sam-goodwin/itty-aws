#!/usr/bin/env bun
/**
 * Generate Grafana service modules from the Smithy models written by
 * scripts/convert.ts.
 */
import type { SdkSpec } from "@distilled.cloud/core/codegen/generator";
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
  paginationProfiles: {
    grafana: {
      strategy: "paginateGrafana",
      itemsFallback: "items",
    },
  },
  // Grafana PATCH bodies are intentionally opaque at the SDK boundary. The
  // conversion union accepts either an object or RFC 6902 array, while the
  // protocol chooses the media type from RequestOptions.
  unionStyle: "opaque-cases",
  operationDecl: {
    contextType: "GrafanaOpContext",
    commonErrorType: "GrafanaOpError",
    commonErrorClasses: ["UnknownGrafanaError"],
    protocol: "GrafanaProtocol",
    retry: "Retry.Retry",
  },
  sourceNote: ".generated-specs (pinned Grafana /apis OpenAPI snapshots)",
};

runGeneratorCli({
  description: "Generate the Grafana Effect SDK from the Smithy models",
  root: `${import.meta.dir}/..`,
  patchesDir: false,
  spec: () => spec,
});
