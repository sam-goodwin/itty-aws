import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetSelfVoiceStateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    guild_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/voice-states/@me" }));
export type GetSelfVoiceStateInput = typeof GetSelfVoiceStateInput.Type;

// Output Schema
export const GetSelfVoiceStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.Unknown,
    deaf: Schema.Boolean,
    guild_id: Schema.Unknown,
    member: Schema.optional(
      Schema.Struct({
        avatar: Schema.NullOr(Schema.String),
        avatar_decoration_data: Schema.optional(Schema.Unknown),
        banner: Schema.NullOr(Schema.String),
        communication_disabled_until: Schema.NullOr(Schema.String),
        flags: Schema.Number,
        joined_at: Schema.String,
        nick: Schema.NullOr(Schema.String),
        pending: Schema.Boolean,
        premium_since: Schema.NullOr(Schema.String),
        roles: Schema.Array(Schema.String),
        collectibles: Schema.optional(Schema.Unknown),
        user: Schema.Struct({
          id: Schema.String,
          username: Schema.String,
          avatar: Schema.NullOr(Schema.String),
          discriminator: Schema.String,
          public_flags: Schema.Number,
          flags: Schema.Number,
          bot: Schema.optional(Schema.Boolean),
          system: Schema.optional(Schema.Boolean),
          banner: Schema.optional(Schema.NullOr(Schema.String)),
          accent_color: Schema.optional(Schema.NullOr(Schema.Number)),
          global_name: Schema.NullOr(Schema.String),
          avatar_decoration_data: Schema.optional(Schema.Unknown),
          collectibles: Schema.optional(Schema.Unknown),
          primary_guild: Schema.Unknown,
        }),
        mute: Schema.Boolean,
        deaf: Schema.Boolean,
      }),
    ),
    mute: Schema.Boolean,
    request_to_speak_timestamp: Schema.NullOr(Schema.String),
    suppress: Schema.Boolean,
    self_stream: Schema.NullOr(Schema.Boolean),
    self_deaf: Schema.Boolean,
    self_mute: Schema.Boolean,
    self_video: Schema.Boolean,
    session_id: Schema.String,
    user_id: Schema.String,
  });
export type GetSelfVoiceStateOutput = typeof GetSelfVoiceStateOutput.Type;

// The operation
export const getSelfVoiceState = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetSelfVoiceStateInput,
  outputSchema: GetSelfVoiceStateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
