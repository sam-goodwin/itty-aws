import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGuildWelcomeScreenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/welcome-screen" }));
export type GetGuildWelcomeScreenInput = typeof GetGuildWelcomeScreenInput.Type;

// Output Schema
export const GetGuildWelcomeScreenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.NullOr(Schema.String),
    welcome_channels: Schema.Array(
      Schema.Struct({
        channel_id: Schema.String,
        description: Schema.String,
        emoji_id: Schema.Unknown,
        emoji_name: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type GetGuildWelcomeScreenOutput =
  typeof GetGuildWelcomeScreenOutput.Type;

// The operation
export const getGuildWelcomeScreen = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetGuildWelcomeScreenInput,
    outputSchema: GetGuildWelcomeScreenOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
