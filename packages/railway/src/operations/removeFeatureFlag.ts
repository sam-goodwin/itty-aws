import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation featureFlagRemove($input: FeatureFlagToggleInput!) {\n  featureFlagRemove(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const RemoveFeatureFlagInput = Schema.Struct({
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
    operationName: "featureFlagRemove",
    type: "mutation",
  }),
);
export type RemoveFeatureFlagInput = typeof RemoveFeatureFlagInput.Type;

// Output Schema (GraphQL selection set)
export const RemoveFeatureFlagOutput = Schema.Boolean.pipe(
  T.ResponsePath("featureFlagRemove"),
);
export type RemoveFeatureFlagOutput = typeof RemoveFeatureFlagOutput.Type;

/**
 * Remove a feature flag for a user
 */
export const removeFeatureFlag = API.make(() => ({
  inputSchema: RemoveFeatureFlagInput,
  outputSchema: RemoveFeatureFlagOutput,
}));
