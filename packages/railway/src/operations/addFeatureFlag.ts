import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation addFeatureFlag($input: FeatureFlagToggleInput!) {\n  featureFlagAdd(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const AddFeatureFlagInput = Schema.Struct({
  input: Schema.Struct({
    flag: Schema.Literals([
      "CHAT_SANDBOX",
      "DEBUG_SMART_DIAGNOSIS",
      "IN_DASHBOARD_SUPPORT",
      "MAGIC_CONFIG",
      "POSTGRES_PGBOUNCER",
      "PRIORITY_BOARDING",
      "PROJECT_SANDBOXES",
    ]),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "addFeatureFlag",
    type: "mutation",
  }),
);
export type AddFeatureFlagInput = typeof AddFeatureFlagInput.Type;

// Output Schema (GraphQL selection set)
export const AddFeatureFlagOutput = Schema.Boolean.pipe(
  T.ResponsePath("featureFlagAdd"),
);
export type AddFeatureFlagOutput = typeof AddFeatureFlagOutput.Type;

/**
 * Add a feature flag for a user
 */
export const addFeatureFlag = API.make(() => ({
  inputSchema: AddFeatureFlagInput,
  outputSchema: AddFeatureFlagOutput,
}));
