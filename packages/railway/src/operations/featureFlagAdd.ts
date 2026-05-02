import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation featureFlagAdd($input: FeatureFlagToggleInput!) {\n  featureFlagAdd(input: $input)\n}";

// Input Schema (GraphQL variables)
export const FeatureFlagAddInput = Schema.Struct({
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
    operationName: "featureFlagAdd",
    type: "mutation",
  }),
);
export type FeatureFlagAddInput = typeof FeatureFlagAddInput.Type;

// Output Schema (GraphQL selection set)
export const FeatureFlagAddOutput = Schema.Boolean.pipe(
  T.ResponsePath("featureFlagAdd"),
);
export type FeatureFlagAddOutput = typeof FeatureFlagAddOutput.Type;

/**
 * Add a feature flag for a user
 */
export const featureFlagAdd = API.make(() => ({
  inputSchema: FeatureFlagAddInput,
  outputSchema: FeatureFlagAddOutput,
}));
