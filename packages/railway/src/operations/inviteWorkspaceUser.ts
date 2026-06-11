import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation inviteWorkspaceUser($input: WorkspaceUserInviteInput!, $workspaceId: String!) {\n  workspaceUserInvite(input: $input, workspaceId: $workspaceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const InviteWorkspaceUserInput = Schema.Struct({
  input: Schema.Struct({
    code: Schema.String,
    email: Schema.String,
  }),
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "inviteWorkspaceUser",
    type: "mutation",
  }),
);
export type InviteWorkspaceUserInput = typeof InviteWorkspaceUserInput.Type;

// Output Schema (GraphQL selection set)
export const InviteWorkspaceUserOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspaceUserInvite"),
);
export type InviteWorkspaceUserOutput = typeof InviteWorkspaceUserOutput.Type;

/**
 * Invite a user by email to a workspace
 */
export const inviteWorkspaceUser = API.make(() => ({
  inputSchema: InviteWorkspaceUserInput,
  outputSchema: InviteWorkspaceUserOutput,
}));
