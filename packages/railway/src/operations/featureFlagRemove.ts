import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation featureFlagRemove($input: FeatureFlagToggleInput!) {\n  featureFlagRemove(input: $input)\n}";

// Input Schema (GraphQL variables)
export const FeatureFlagRemoveInput = Schema.Struct({
  input: Schema.Struct({
    flag: Schema.Literals([
      "AUDIT_LOGS",
      "BUCKET_FILE_BROWSER",
      "DEBUG_SMART_DIAGNOSIS",
      "IN_DASHBOARD_SUPPORT",
      "MAGIC_CONFIG",
      "POSTGRES_PGBOUNCER",
      "PRIORITY_BOARDING",
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
export type FeatureFlagRemoveInput = typeof FeatureFlagRemoveInput.Type;

// Output Schema (GraphQL selection set)
export const FeatureFlagRemoveOutput = Schema.Boolean.pipe(
  T.ResponsePath("featureFlagRemove"),
);
export type FeatureFlagRemoveOutput = typeof FeatureFlagRemoveOutput.Type;

/**
 * Remove a feature flag for a user
 */
export const featureFlagRemove = API.make(() => ({
  inputSchema: FeatureFlagRemoveInput,
  outputSchema: FeatureFlagRemoveOutput,
}));
