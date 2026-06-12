import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workspaceInviteCodeCreate($input: WorkspaceInviteCodeCreateInput!, $workspaceId: String!) {\n  workspaceInviteCodeCreate(input: $input, workspaceId: $workspaceId)\n}";

// Input Schema (GraphQL variables)
export const CreateWorkspaceInviteCodeInput = Schema.Struct({
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
export type CreateWorkspaceInviteCodeInput =
  typeof CreateWorkspaceInviteCodeInput.Type;

// Output Schema (GraphQL selection set)
export const CreateWorkspaceInviteCodeOutput = Schema.String.pipe(
  T.ResponsePath("workspaceInviteCodeCreate"),
);
export type CreateWorkspaceInviteCodeOutput =
  typeof CreateWorkspaceInviteCodeOutput.Type;

/**
 * Get an invite code for a workspace and role
 */
export const createWorkspaceInviteCode = API.make(() => ({
  inputSchema: CreateWorkspaceInviteCodeInput,
  outputSchema: CreateWorkspaceInviteCodeOutput,
}));
