import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workspaceUpsertSlackChannel($id: String!) {\n  workspaceUpsertSlackChannel(id: $id)\n}";

// Input Schema (GraphQL variables)
export const UpsertWorkspaceSlackChannelInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workspaceUpsertSlackChannel",
    type: "mutation",
  }),
);
export type UpsertWorkspaceSlackChannelInput =
  typeof UpsertWorkspaceSlackChannelInput.Type;

// Output Schema (GraphQL selection set)
export const UpsertWorkspaceSlackChannelOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspaceUpsertSlackChannel"),
);
export type UpsertWorkspaceSlackChannelOutput =
  typeof UpsertWorkspaceSlackChannelOutput.Type;

/**
 * Generate a Slack channel for a workspace
 */
export const upsertWorkspaceSlackChannel = API.make(() => ({
  inputSchema: UpsertWorkspaceSlackChannelInput,
  outputSchema: UpsertWorkspaceSlackChannelOutput,
}));
