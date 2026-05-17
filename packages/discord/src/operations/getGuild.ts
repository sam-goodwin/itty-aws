import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGuildInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
  with_counts: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}" }));
export type GetGuildInput = typeof GetGuildInput.Type;

// Output Schema
export const GetGuildOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  icon: Schema.NullOr(Schema.String),
  description: Schema.NullOr(Schema.String),
  home_header: Schema.NullOr(Schema.String),
  splash: Schema.NullOr(Schema.String),
  discovery_splash: Schema.NullOr(Schema.String),
  features: Schema.Array(Schema.Unknown),
  banner: Schema.NullOr(Schema.String),
  owner_id: Schema.String,
  application_id: Schema.Unknown,
  region: Schema.String,
  afk_channel_id: Schema.Unknown,
  afk_timeout: Schema.Unknown,
  system_channel_id: Schema.Unknown,
  system_channel_flags: Schema.Number,
  widget_enabled: Schema.Boolean,
  widget_channel_id: Schema.Unknown,
  verification_level: Schema.Unknown,
  roles: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      description: Schema.NullOr(Schema.String),
      permissions: Schema.String,
      position: Schema.Number,
      color: Schema.Number,
      colors: Schema.Struct({
        primary_color: Schema.Number,
        secondary_color: Schema.NullOr(Schema.Number),
        tertiary_color: Schema.NullOr(Schema.Number),
      }),
      hoist: Schema.Boolean,
      managed: Schema.Boolean,
      mentionable: Schema.Boolean,
      icon: Schema.NullOr(Schema.String),
      unicode_emoji: Schema.NullOr(Schema.String),
      tags: Schema.optional(
        Schema.Struct({
          premium_subscriber: Schema.optional(Schema.Unknown),
          bot_id: Schema.optional(Schema.String),
          integration_id: Schema.optional(Schema.String),
          subscription_listing_id: Schema.optional(Schema.String),
          available_for_purchase: Schema.optional(Schema.Unknown),
          guild_connections: Schema.optional(Schema.Unknown),
        }),
      ),
      flags: Schema.Number,
    }),
  ),
  default_message_notifications: Schema.Unknown,
  mfa_level: Schema.Unknown,
  explicit_content_filter: Schema.Unknown,
  max_presences: Schema.NullOr(Schema.Number),
  max_members: Schema.Number,
  max_stage_video_channel_users: Schema.Number,
  max_video_channel_users: Schema.Number,
  vanity_url_code: Schema.NullOr(Schema.String),
  premium_tier: Schema.Unknown,
  premium_subscription_count: Schema.Number,
  preferred_locale: Schema.Unknown,
  rules_channel_id: Schema.Unknown,
  safety_alerts_channel_id: Schema.Unknown,
  public_updates_channel_id: Schema.Unknown,
  premium_progress_bar_enabled: Schema.Boolean,
  premium_progress_bar_enabled_user_updated_at: Schema.optional(
    Schema.NullOr(Schema.String),
  ),
  nsfw: Schema.Boolean,
  nsfw_level: Schema.Unknown,
  emojis: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      user: Schema.optional(
        Schema.Struct({
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
      ),
      roles: Schema.Array(Schema.String),
      require_colons: Schema.Boolean,
      managed: Schema.Boolean,
      animated: Schema.Boolean,
      available: Schema.Boolean,
    }),
  ),
  stickers: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      tags: Schema.String,
      type: Schema.Unknown,
      format_type: Schema.Unknown,
      description: Schema.NullOr(Schema.String),
      available: Schema.Boolean,
      guild_id: Schema.String,
      user: Schema.optional(
        Schema.Struct({
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
      ),
    }),
  ),
  incidents_data: Schema.Unknown,
  approximate_member_count: Schema.optional(Schema.NullOr(Schema.Number)),
  approximate_presence_count: Schema.optional(Schema.NullOr(Schema.Number)),
});
export type GetGuildOutput = typeof GetGuildOutput.Type;

// The operation
export const getGuild = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetGuildInput,
  outputSchema: GetGuildOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
