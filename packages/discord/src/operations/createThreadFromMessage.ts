import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateThreadFromMessageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    message_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    auto_archive_duration: Schema.optional(Schema.Unknown),
    rate_limit_per_user: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/channels/{channel_id}/messages/{message_id}/threads",
    }),
  );
export type CreateThreadFromMessageInput =
  typeof CreateThreadFromMessageInput.Type;

// Output Schema
export const CreateThreadFromMessageOutput =
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
    owner_id: Schema.String,
    thread_metadata: Schema.Struct({
      archived: Schema.Boolean,
      archive_timestamp: Schema.NullOr(Schema.String),
      auto_archive_duration: Schema.Unknown,
      locked: Schema.Boolean,
      create_timestamp: Schema.optional(Schema.String),
      invitable: Schema.optional(Schema.Boolean),
    }),
    message_count: Schema.Number,
    member_count: Schema.Number,
    total_message_sent: Schema.Number,
    applied_tags: Schema.optional(Schema.Array(Schema.String)),
    member: Schema.optional(
      Schema.Struct({
        id: Schema.String,
        user_id: Schema.String,
        join_timestamp: Schema.String,
        flags: Schema.Number,
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
      }),
    ),
  });
export type CreateThreadFromMessageOutput =
  typeof CreateThreadFromMessageOutput.Type;

// The operation
export const createThreadFromMessage = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateThreadFromMessageInput,
    outputSchema: CreateThreadFromMessageOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
