import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation leaveWorkspace($id: String!) {\n  workspaceLeave(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const LeaveWorkspaceInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "leaveWorkspace",
    type: "mutation",
  }),
);
export type LeaveWorkspaceInput = typeof LeaveWorkspaceInput.Type;

// Output Schema (GraphQL selection set)
export const LeaveWorkspaceOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspaceLeave"),
);
export type LeaveWorkspaceOutput = typeof LeaveWorkspaceOutput.Type;

/**
 * Leave a workspace
 */
export const leaveWorkspace = API.make(() => ({
  inputSchema: LeaveWorkspaceInput,
  outputSchema: LeaveWorkspaceOutput,
}));
