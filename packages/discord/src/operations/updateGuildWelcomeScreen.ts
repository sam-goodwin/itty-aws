import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateGuildWelcomeScreenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    welcome_channels: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            channel_id: Schema.String,
            description: Schema.String,
            emoji_id: Schema.optional(Schema.Unknown),
            emoji_name: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
      ),
    ),
    enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/guilds/{guild_id}/welcome-screen" }),
  );
export type UpdateGuildWelcomeScreenInput =
  typeof UpdateGuildWelcomeScreenInput.Type;

// Output Schema
export const UpdateGuildWelcomeScreenOutput =
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
export type UpdateGuildWelcomeScreenOutput =
  typeof UpdateGuildWelcomeScreenOutput.Type;

// The operation
export const updateGuildWelcomeScreen = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateGuildWelcomeScreenInput,
    outputSchema: UpdateGuildWelcomeScreenOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
