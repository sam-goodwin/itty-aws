import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectDelete($id: String!) {\n  projectDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectDelete",
    type: "mutation",
  }),
);
export type ProjectDeleteInput = typeof ProjectDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectDelete"),
);
export type ProjectDeleteOutput = typeof ProjectDeleteOutput.Type;

/**
 * Deletes a project.
 */
export const projectDelete = API.make(() => ({
  inputSchema: ProjectDeleteInput,
  outputSchema: ProjectDeleteOutput,
}));
