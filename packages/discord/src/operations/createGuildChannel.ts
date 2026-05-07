import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateGuildChannelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    type: Schema.optional(Schema.Unknown),
    name: Schema.String,
    position: Schema.optional(Schema.NullOr(Schema.Number)),
    topic: Schema.optional(Schema.NullOr(Schema.String)),
    bitrate: Schema.optional(Schema.NullOr(Schema.Number)),
    user_limit: Schema.optional(Schema.NullOr(Schema.Number)),
    nsfw: Schema.optional(Schema.NullOr(Schema.Boolean)),
    rate_limit_per_user: Schema.optional(Schema.NullOr(Schema.Number)),
    parent_id: Schema.optional(Schema.Unknown),
    permission_overwrites: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            type: Schema.optional(Schema.Unknown),
            allow: Schema.optional(Schema.NullOr(Schema.Number)),
            deny: Schema.optional(Schema.NullOr(Schema.Number)),
          }),
        ),
      ),
    ),
    rtc_region: Schema.optional(Schema.NullOr(Schema.String)),
    video_quality_mode: Schema.optional(Schema.Unknown),
    default_auto_archive_duration: Schema.optional(Schema.Unknown),
    default_reaction_emoji: Schema.optional(Schema.Unknown),
    default_thread_rate_limit_per_user: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    default_sort_order: Schema.optional(Schema.Unknown),
    default_forum_layout: Schema.optional(Schema.Unknown),
    default_tag_setting: Schema.optional(Schema.Unknown),
    available_tags: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.Unknown)),
    ),
  }).pipe(T.Http({ method: "POST", path: "/guilds/{guild_id}/channels" }));
export type CreateGuildChannelInput = typeof CreateGuildChannelInput.Type;

// Output Schema
export const CreateGuildChannelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type CreateGuildChannelOutput = typeof CreateGuildChannelOutput.Type;

// The operation
export const createGuildChannel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateGuildChannelInput,
  outputSchema: CreateGuildChannelOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
