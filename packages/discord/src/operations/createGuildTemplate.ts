import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateGuildTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    description: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(T.Http({ method: "POST", path: "/guilds/{guild_id}/templates" }));
export type CreateGuildTemplateInput = typeof CreateGuildTemplateInput.Type;

// Output Schema
export const CreateGuildTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.String,
    name: Schema.String,
    description: Schema.NullOr(Schema.String),
    usage_count: Schema.Number,
    creator_id: Schema.String,
    creator: Schema.Unknown,
    created_at: Schema.String,
    updated_at: Schema.String,
    source_guild_id: Schema.String,
    serialized_source_guild: Schema.Struct({
      name: Schema.String,
      description: Schema.NullOr(Schema.String),
      region: Schema.NullOr(Schema.String),
      verification_level: Schema.Unknown,
      default_message_notifications: Schema.Unknown,
      explicit_content_filter: Schema.Unknown,
      preferred_locale: Schema.Unknown,
      afk_channel_id: Schema.Unknown,
      afk_timeout: Schema.Unknown,
      system_channel_id: Schema.Unknown,
      system_channel_flags: Schema.Number,
      roles: Schema.Array(
        Schema.Struct({
          id: Schema.Number,
          name: Schema.String,
          permissions: Schema.String,
          color: Schema.Number,
          colors: Schema.Unknown,
          hoist: Schema.Boolean,
          mentionable: Schema.Boolean,
          icon: Schema.NullOr(Schema.String),
          unicode_emoji: Schema.NullOr(Schema.String),
        }),
      ),
      channels: Schema.Array(
        Schema.Struct({
          id: Schema.NullOr(Schema.Number),
          type: Schema.Unknown,
          name: Schema.NullOr(Schema.String),
          position: Schema.NullOr(Schema.Number),
          topic: Schema.NullOr(Schema.String),
          bitrate: Schema.Number,
          user_limit: Schema.Number,
          nsfw: Schema.Boolean,
          rate_limit_per_user: Schema.Number,
          parent_id: Schema.Unknown,
          default_auto_archive_duration: Schema.Unknown,
          permission_overwrites: Schema.Array(
            Schema.Struct({
              id: Schema.String,
              type: Schema.Unknown,
              allow: Schema.String,
              deny: Schema.String,
            }),
          ),
          available_tags: Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                id: Schema.NullOr(Schema.Number),
                name: Schema.String,
                emoji_id: Schema.Unknown,
                emoji_name: Schema.NullOr(Schema.String),
                moderated: Schema.NullOr(Schema.Boolean),
              }),
            ),
          ),
          template: Schema.String,
          default_reaction_emoji: Schema.Unknown,
          default_thread_rate_limit_per_user: Schema.NullOr(Schema.Number),
          default_sort_order: Schema.Unknown,
          default_forum_layout: Schema.Unknown,
          default_tag_setting: Schema.Unknown,
          icon_emoji: Schema.Unknown,
          theme_color: Schema.NullOr(Schema.Number),
        }),
      ),
    }),
    is_dirty: Schema.NullOr(Schema.Boolean),
  });
export type CreateGuildTemplateOutput = typeof CreateGuildTemplateOutput.Type;

// The operation
export const createGuildTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateGuildTemplateInput,
  outputSchema: CreateGuildTemplateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
