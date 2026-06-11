import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation removeWorkspaceUser($input: WorkspaceUserRemoveInput!, $workspaceId: String!) {\n  workspaceUserRemove(input: $input, workspaceId: $workspaceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const RemoveWorkspaceUserInput = Schema.Struct({
  input: Schema.Struct({
    userId: Schema.String,
  }),
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "removeWorkspaceUser",
    type: "mutation",
  }),
);
export type RemoveWorkspaceUserInput = typeof RemoveWorkspaceUserInput.Type;

// Output Schema (GraphQL selection set)
export const RemoveWorkspaceUserOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspaceUserRemove"),
);
export type RemoveWorkspaceUserOutput = typeof RemoveWorkspaceUserOutput.Type;

/**
 * Remove a user from a workspace
 */
export const removeWorkspaceUser = API.make(() => ({
  inputSchema: RemoveWorkspaceUserInput,
  outputSchema: RemoveWorkspaceUserOutput,
}));
