import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userDiscordDisconnect {\n  userDiscordDisconnect {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UserDiscordDisconnectInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userDiscordDisconnect",
    type: "mutation",
  }),
);
export type UserDiscordDisconnectInput = typeof UserDiscordDisconnectInput.Type;

// Output Schema (GraphQL selection set)
export const UserDiscordDisconnectOutput = Schema.Boolean.pipe(
  T.ResponsePath("userDiscordDisconnect"),
);
export type UserDiscordDisconnectOutput =
  typeof UserDiscordDisconnectOutput.Type;

/**
 * Disconnect your Railway account from Discord.
 */
export const userDiscordDisconnect = API.make(() => ({
  inputSchema: UserDiscordDisconnectInput,
  outputSchema: UserDiscordDisconnectOutput,
}));
