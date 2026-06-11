import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workspacePermissionChange($input: WorkspacePermissionChangeInput!) {\n  workspacePermissionChange(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ChangeWorkspacePermissionInput = Schema.Struct({
  input: Schema.Struct({
    role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
    userId: Schema.String,
    workspaceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workspacePermissionChange",
    type: "mutation",
  }),
);
export type ChangeWorkspacePermissionInput =
  typeof ChangeWorkspacePermissionInput.Type;

// Output Schema (GraphQL selection set)
export const ChangeWorkspacePermissionOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspacePermissionChange"),
);
export type ChangeWorkspacePermissionOutput =
  typeof ChangeWorkspacePermissionOutput.Type;

/**
 * Changes a user workspace permissions.
 */
export const changeWorkspacePermission = API.make(() => ({
  inputSchema: ChangeWorkspacePermissionInput,
  outputSchema: ChangeWorkspacePermissionOutput,
}));
