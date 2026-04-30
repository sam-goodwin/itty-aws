import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation discordUser {\n  discordUser\n}";

// Input Schema (GraphQL variables)
export const DiscordUserInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "discordUser",
    type: "mutation",
  }),
);
export type DiscordUserInput = typeof DiscordUserInput.Type;

// Output Schema (GraphQL selection set)
export const DiscordUserOutput = Schema.Unknown;
export type DiscordUserOutput = typeof DiscordUserOutput.Type;

/**
 * Mutations for Discord users
 */
export const discordUser = API.make(() => ({
  inputSchema: DiscordUserInput,
  outputSchema: DiscordUserOutput,
}));
