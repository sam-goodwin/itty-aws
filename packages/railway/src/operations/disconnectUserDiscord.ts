import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation disconnectUserDiscord {\n  userDiscordDisconnect {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DisconnectUserDiscordInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "disconnectUserDiscord",
    type: "mutation",
  }),
);
export type DisconnectUserDiscordInput = typeof DisconnectUserDiscordInput.Type;

// Output Schema (GraphQL selection set)
export const DisconnectUserDiscordOutput = Schema.Boolean.pipe(
  T.ResponsePath("userDiscordDisconnect"),
);
export type DisconnectUserDiscordOutput =
  typeof DisconnectUserDiscordOutput.Type;

/**
 * Disconnect your Railway account from Discord.
 */
export const disconnectUserDiscord = API.make(() => ({
  inputSchema: DisconnectUserDiscordInput,
  outputSchema: DisconnectUserDiscordOutput,
}));
