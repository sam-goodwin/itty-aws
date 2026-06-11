import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workspaceDelete($id: String!) {\n  workspaceDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteWorkspaceInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workspaceDelete",
    type: "mutation",
  }),
);
export type DeleteWorkspaceInput = typeof DeleteWorkspaceInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteWorkspaceOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspaceDelete"),
);
export type DeleteWorkspaceOutput = typeof DeleteWorkspaceOutput.Type;

/**
 * Delete a workspace and all data associated with it
 */
export const deleteWorkspace = API.make(() => ({
  inputSchema: DeleteWorkspaceInput,
  outputSchema: DeleteWorkspaceOutput,
}));
