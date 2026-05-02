import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation serviceFeatureFlagAdd($input: ServiceFeatureFlagToggleInput!) {\n  serviceFeatureFlagAdd(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ServiceFeatureFlagAddInput = Schema.Struct({
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
    operationName: "serviceFeatureFlagAdd",
    type: "mutation",
  }),
);
export type ServiceFeatureFlagAddInput = typeof ServiceFeatureFlagAddInput.Type;

// Output Schema (GraphQL selection set)
export const ServiceFeatureFlagAddOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceFeatureFlagAdd"),
);
export type ServiceFeatureFlagAddOutput =
  typeof ServiceFeatureFlagAddOutput.Type;

/**
 * Add a feature flag for a service
 */
export const serviceFeatureFlagAdd = API.make(() => ({
  inputSchema: ServiceFeatureFlagAddInput,
  outputSchema: ServiceFeatureFlagAddOutput,
}));
