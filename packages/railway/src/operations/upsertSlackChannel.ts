import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation upsertSlackChannel($workspaceId: String!) {\n  upsertSlackChannel(workspaceId: $workspaceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UpsertSlackChannelInput = Schema.Struct({
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "upsertSlackChannel",
    type: "mutation",
  }),
);
export type UpsertSlackChannelInput = typeof UpsertSlackChannelInput.Type;

// Output Schema (GraphQL selection set)
export const UpsertSlackChannelOutput = Schema.Boolean.pipe(
  T.ResponsePath("upsertSlackChannel"),
);
export type UpsertSlackChannelOutput = typeof UpsertSlackChannelOutput.Type;

/**
 * Generate a Slack channel for a workspace
 */
export const upsertSlackChannel = API.make(() => ({
  inputSchema: UpsertSlackChannelInput,
  outputSchema: UpsertSlackChannelOutput,
}));
