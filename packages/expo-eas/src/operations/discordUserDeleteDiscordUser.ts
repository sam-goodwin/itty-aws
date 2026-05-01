import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation discordUserDeleteDiscordUser($id: ID!) {\n  discordUser {\n    deleteDiscordUser(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const DiscordUserDeleteDiscordUserInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "discordUserDeleteDiscordUser",
    type: "mutation",
  }),
);
export type DiscordUserDeleteDiscordUserInput =
  typeof DiscordUserDeleteDiscordUserInput.Type;

// Output Schema (GraphQL selection set)
export const DiscordUserDeleteDiscordUserOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("discordUser.deleteDiscordUser"));
export type DiscordUserDeleteDiscordUserOutput =
  typeof DiscordUserDeleteDiscordUserOutput.Type;

export const discordUserDeleteDiscordUser = API.make(() => ({
  inputSchema: DiscordUserDeleteDiscordUserInput,
  outputSchema: DiscordUserDeleteDiscordUserOutput,
}));
