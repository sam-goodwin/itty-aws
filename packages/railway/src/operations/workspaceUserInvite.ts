import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workspaceUserInvite($input: WorkspaceUserInviteInput!, $workspaceId: String!) {\n  workspaceUserInvite(input: $input, workspaceId: $workspaceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const WorkspaceUserInviteInput = Schema.Struct({
  input: Schema.Struct({
    code: Schema.String,
    email: Schema.String,
  }),
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workspaceUserInvite",
    type: "mutation",
  }),
);
export type WorkspaceUserInviteInput = typeof WorkspaceUserInviteInput.Type;

// Output Schema (GraphQL selection set)
export const WorkspaceUserInviteOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspaceUserInvite"),
);
export type WorkspaceUserInviteOutput = typeof WorkspaceUserInviteOutput.Type;

/**
 * Invite a user by email to a workspace
 */
export const workspaceUserInvite = API.make(() => ({
  inputSchema: WorkspaceUserInviteInput,
  outputSchema: WorkspaceUserInviteOutput,
}));
