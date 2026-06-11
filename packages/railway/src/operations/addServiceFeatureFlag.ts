import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation serviceFeatureFlagAdd($input: ServiceFeatureFlagToggleInput!) {\n  serviceFeatureFlagAdd(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const AddServiceFeatureFlagInput = Schema.Struct({
  input: Schema.Struct({
    flag: Schema.Literals([
      "COPY_VOLUME_TO_ENVIRONMENT",
      "ENABLE_DOCKER_EXTENSION",
      "PLACEHOLDER",
      "SKIPPED_BUILDS",
      "USE_EXPRESS_DEPLOY",
      "USE_HA_STATIC_EGRESS",
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
export type AddServiceFeatureFlagInput = typeof AddServiceFeatureFlagInput.Type;

// Output Schema (GraphQL selection set)
export const AddServiceFeatureFlagOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceFeatureFlagAdd"),
);
export type AddServiceFeatureFlagOutput =
  typeof AddServiceFeatureFlagOutput.Type;

/**
 * Add a feature flag for a service
 */
export const addServiceFeatureFlag = API.make(() => ({
  inputSchema: AddServiceFeatureFlagInput,
  outputSchema: AddServiceFeatureFlagOutput,
}));
