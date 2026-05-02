import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workspaceUserRemove($input: WorkspaceUserRemoveInput!, $workspaceId: String!) {\n  workspaceUserRemove(input: $input, workspaceId: $workspaceId)\n}";

// Input Schema (GraphQL variables)
export const WorkspaceUserRemoveInput = Schema.Struct({
  input: Schema.Struct({
    userId: Schema.String,
  }),
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workspaceUserRemove",
    type: "mutation",
  }),
);
export type WorkspaceUserRemoveInput = typeof WorkspaceUserRemoveInput.Type;

// Output Schema (GraphQL selection set)
export const WorkspaceUserRemoveOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspaceUserRemove"),
);
export type WorkspaceUserRemoveOutput = typeof WorkspaceUserRemoveOutput.Type;

/**
 * Remove a user from a workspace
 */
export const workspaceUserRemove = API.make(() => ({
  inputSchema: WorkspaceUserRemoveInput,
  outputSchema: WorkspaceUserRemoveOutput,
}));
