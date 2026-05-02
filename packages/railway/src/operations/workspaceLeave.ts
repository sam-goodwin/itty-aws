import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workspaceLeave($id: String!) {\n  workspaceLeave(id: $id)\n}";

// Input Schema (GraphQL variables)
export const WorkspaceLeaveInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workspaceLeave",
    type: "mutation",
  }),
);
export type WorkspaceLeaveInput = typeof WorkspaceLeaveInput.Type;

// Output Schema (GraphQL selection set)
export const WorkspaceLeaveOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspaceLeave"),
);
export type WorkspaceLeaveOutput = typeof WorkspaceLeaveOutput.Type;

/**
 * Leave a workspace
 */
export const workspaceLeave = API.make(() => ({
  inputSchema: WorkspaceLeaveInput,
  outputSchema: WorkspaceLeaveOutput,
}));
