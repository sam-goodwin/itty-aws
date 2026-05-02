import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectFeatureFlagAdd($input: ProjectFeatureFlagToggleInput!) {\n  projectFeatureFlagAdd(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectFeatureFlagAddInput = Schema.Struct({
  input: Schema.Struct({
    flag: Schema.Literals(["PLACEHOLDER"]),
    projectId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectFeatureFlagAdd",
    type: "mutation",
  }),
);
export type ProjectFeatureFlagAddInput = typeof ProjectFeatureFlagAddInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectFeatureFlagAddOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectFeatureFlagAdd"),
);
export type ProjectFeatureFlagAddOutput =
  typeof ProjectFeatureFlagAddOutput.Type;

/**
 * Add a feature flag for a project
 */
export const projectFeatureFlagAdd = API.make(() => ({
  inputSchema: ProjectFeatureFlagAddInput,
  outputSchema: ProjectFeatureFlagAddOutput,
}));
