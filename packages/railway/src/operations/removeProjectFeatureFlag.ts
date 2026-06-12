import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectFeatureFlagRemove($input: ProjectFeatureFlagToggleInput!) {\n  projectFeatureFlagRemove(input: $input)\n}";

// Input Schema (GraphQL variables)
export const RemoveProjectFeatureFlagInput = Schema.Struct({
  input: Schema.Struct({
    flag: Schema.Literals(["PLACEHOLDER"]),
    projectId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectFeatureFlagRemove",
    type: "mutation",
  }),
);
export type RemoveProjectFeatureFlagInput =
  typeof RemoveProjectFeatureFlagInput.Type;

// Output Schema (GraphQL selection set)
export const RemoveProjectFeatureFlagOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectFeatureFlagRemove"),
);
export type RemoveProjectFeatureFlagOutput =
  typeof RemoveProjectFeatureFlagOutput.Type;

/**
 * Remove a feature flag for a project
 */
export const removeProjectFeatureFlag = API.make(() => ({
  inputSchema: RemoveProjectFeatureFlagInput,
  outputSchema: RemoveProjectFeatureFlagOutput,
}));
