import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deleteProject($id: String!) {\n  projectDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteProjectInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deleteProject",
    type: "mutation",
  }),
);
export type DeleteProjectInput = typeof DeleteProjectInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteProjectOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectDelete"),
);
export type DeleteProjectOutput = typeof DeleteProjectOutput.Type;

/**
 * Deletes a project.
 */
export const deleteProject = API.make(() => ({
  inputSchema: DeleteProjectInput,
  outputSchema: DeleteProjectOutput,
}));
