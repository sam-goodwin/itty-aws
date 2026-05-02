import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workspaceInviteCodeCreate($input: WorkspaceInviteCodeCreateInput!, $workspaceId: String!) {\n  workspaceInviteCodeCreate(input: $input, workspaceId: $workspaceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const WorkspaceInviteCodeCreateInput = Schema.Struct({
  input: Schema.Struct({
    role: Schema.String,
  }),
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workspaceInviteCodeCreate",
    type: "mutation",
  }),
);
export type WorkspaceInviteCodeCreateInput =
  typeof WorkspaceInviteCodeCreateInput.Type;

// Output Schema (GraphQL selection set)
export const WorkspaceInviteCodeCreateOutput = Schema.String.pipe(
  T.ResponsePath("workspaceInviteCodeCreate"),
);
export type WorkspaceInviteCodeCreateOutput =
  typeof WorkspaceInviteCodeCreateOutput.Type;

/**
 * Get an invite code for a workspace and role
 */
export const workspaceInviteCodeCreate = API.make(() => ({
  inputSchema: WorkspaceInviteCodeCreateInput,
  outputSchema: WorkspaceInviteCodeCreateOutput,
}));
