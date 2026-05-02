import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workspaceDelete($id: String!) {\n  workspaceDelete(id: $id)\n}";

// Input Schema (GraphQL variables)
export const WorkspaceDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workspaceDelete",
    type: "mutation",
  }),
);
export type WorkspaceDeleteInput = typeof WorkspaceDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const WorkspaceDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspaceDelete"),
);
export type WorkspaceDeleteOutput = typeof WorkspaceDeleteOutput.Type;

/**
 * Delete a workspace and all data associated with it
 */
export const workspaceDelete = API.make(() => ({
  inputSchema: WorkspaceDeleteInput,
  outputSchema: WorkspaceDeleteOutput,
}));
