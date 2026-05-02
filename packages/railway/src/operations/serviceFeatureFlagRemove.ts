import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation serviceFeatureFlagRemove($input: ServiceFeatureFlagToggleInput!) {\n  serviceFeatureFlagRemove(input: $input)\n}";

// Input Schema (GraphQL variables)
export const ServiceFeatureFlagRemoveInput = Schema.Struct({
  input: Schema.Struct({
    flag: Schema.Literals([
      "COPY_VOLUME_TO_ENVIRONMENT",
      "ENABLE_DOCKER_EXTENSION",
      "PLACEHOLDER",
      "SKIPPED_BUILDS",
      "USE_BUILDER_V3_FOR_CLI_DEPLOYS",
      "USE_GH_WEBHOOKS_FOR_CHANGE_DETECTION",
      "USE_VM_RUNTIME",
    ]),
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceFeatureFlagRemove",
    type: "mutation",
  }),
);
export type ServiceFeatureFlagRemoveInput =
  typeof ServiceFeatureFlagRemoveInput.Type;

// Output Schema (GraphQL selection set)
export const ServiceFeatureFlagRemoveOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceFeatureFlagRemove"),
);
export type ServiceFeatureFlagRemoveOutput =
  typeof ServiceFeatureFlagRemoveOutput.Type;

/**
 * Remove a feature flag for a service
 */
export const serviceFeatureFlagRemove = API.make(() => ({
  inputSchema: ServiceFeatureFlagRemoveInput,
  outputSchema: ServiceFeatureFlagRemoveOutput,
}));
