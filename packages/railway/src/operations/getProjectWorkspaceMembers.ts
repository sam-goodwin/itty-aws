import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getProjectWorkspaceMembers($projectId: String!) {\n  projectWorkspaceMembers(projectId: $projectId) {\n    members {\n      email\n      enabledMethods\n      name\n      twoFactorAuthEnabled\n    }\n    projectId\n    projectName\n    workspaceId\n  }\n}";

// Input Schema (GraphQL variables)
export const GetProjectWorkspaceMembersInput = Schema.Struct({
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getProjectWorkspaceMembers",
    type: "query",
  }),
);
export type GetProjectWorkspaceMembersInput =
  typeof GetProjectWorkspaceMembersInput.Type;

// Output Schema (GraphQL selection set)
export const GetProjectWorkspaceMembersOutput = Schema.Struct({
  members: Schema.Array(
    Schema.Struct({
      email: Schema.String,
      enabledMethods: Schema.Array(
        Schema.Literals(["AUTHENTICATOR", "PASSKEY"]),
      ),
      name: Schema.NullOr(Schema.String),
      twoFactorAuthEnabled: Schema.Boolean,
    }),
  ),
  projectId: Schema.String,
  projectName: Schema.String,
  workspaceId: Schema.String,
}).pipe(T.ResponsePath("projectWorkspaceMembers"));
export type GetProjectWorkspaceMembersOutput =
  typeof GetProjectWorkspaceMembersOutput.Type;

/**
 * Get workspace members for a project with 2FA details
 */
export const getProjectWorkspaceMembers = API.make(() => ({
  inputSchema: GetProjectWorkspaceMembersInput,
  outputSchema: GetProjectWorkspaceMembersOutput,
}));
