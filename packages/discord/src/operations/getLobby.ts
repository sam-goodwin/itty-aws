import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetLobbyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lobby_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/lobbies/{lobby_id}" }));
export type GetLobbyInput = typeof GetLobbyInput.Type;

// Output Schema
export const GetLobbyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  application_id: Schema.String,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  members: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      flags: Schema.Number,
    }),
  ),
  linked_channel: Schema.optional(
    Schema.Struct({
      id: Schema.String,
      type: Schema.Unknown,
      last_message_id: Schema.optional(Schema.Unknown),
      flags: Schema.Number,
      last_pin_timestamp: Schema.optional(Schema.NullOr(Schema.String)),
      guild_id: Schema.String,
      name: Schema.String,
      parent_id: Schema.optional(Schema.Unknown),
      rate_limit_per_user: Schema.optional(Schema.Number),
      bitrate: Schema.optional(Schema.Number),
      user_limit: Schema.optional(Schema.Number),
      rtc_region: Schema.optional(Schema.NullOr(Schema.String)),
      video_quality_mode: Schema.optional(Schema.Unknown),
      permissions: Schema.optional(Schema.String),
      topic: Schema.optional(Schema.NullOr(Schema.String)),
      default_auto_archive_duration: Schema.optional(Schema.Unknown),
      default_thread_rate_limit_per_user: Schema.optional(Schema.Number),
      position: Schema.Number,
      permission_overwrites: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            type: Schema.Unknown,
            allow: Schema.String,
            deny: Schema.String,
          }),
        ),
      ),
      nsfw: Schema.optional(Schema.Boolean),
      available_tags: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            moderated: Schema.Boolean,
            emoji_id: Schema.Unknown,
            emoji_name: Schema.NullOr(Schema.String),
          }),
        ),
      ),
      default_reaction_emoji: Schema.optional(Schema.Unknown),
      default_sort_order: Schema.optional(Schema.Unknown),
      default_forum_layout: Schema.optional(Schema.Unknown),
      default_tag_setting: Schema.optional(Schema.Unknown),
      hd_streaming_until: Schema.optional(Schema.String),
      hd_streaming_buyer_id: Schema.optional(Schema.String),
    }),
  ),
  flags: Schema.Number,
  override_event_webhooks_url: Schema.optional(Schema.NullOr(Schema.String)),
});
export type GetLobbyOutput = typeof GetLobbyOutput.Type;

// The operation
export const getLobby = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetLobbyInput,
  outputSchema: GetLobbyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
