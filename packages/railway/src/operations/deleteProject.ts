import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotAuthorized } from "./errors.ts";

const __document =
  "mutation projectDelete($id: String!) {\n  projectDelete(id: $id)\n}";

// Input Schema (GraphQL variables)
export const DeleteProjectInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectDelete",
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
  errors: [NotAuthorized],
}));
