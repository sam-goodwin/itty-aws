import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListGuildAuditLogEntriesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.optional(Schema.String),
    target_id: Schema.optional(Schema.String),
    action_type: Schema.optional(Schema.String),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/audit-logs" }));
export type ListGuildAuditLogEntriesInput =
  typeof ListGuildAuditLogEntriesInput.Type;

// Output Schema
export const ListGuildAuditLogEntriesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audit_log_entries: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        action_type: Schema.Unknown,
        user_id: Schema.Unknown,
        target_id: Schema.Unknown,
        changes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.NullOr(Schema.String),
              new_value: Schema.optional(Schema.Unknown),
              old_value: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        options: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        reason: Schema.optional(Schema.String),
      }),
    ),
    users: Schema.Array(
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
    integrations: Schema.Array(Schema.Unknown),
    webhooks: Schema.Array(Schema.Unknown),
    guild_scheduled_events: Schema.Array(Schema.Unknown),
    threads: Schema.Array(
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
      }),
    ),
    application_commands: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        application_id: Schema.String,
        version: Schema.String,
        default_member_permissions: Schema.NullOr(Schema.String),
        type: Schema.Unknown,
        name: Schema.String,
        name_localized: Schema.optional(Schema.String),
        name_localizations: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        ),
        description: Schema.String,
        description_localized: Schema.optional(Schema.String),
        description_localizations: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        ),
        guild_id: Schema.optional(Schema.String),
        dm_permission: Schema.optional(Schema.Boolean),
        contexts: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
        integration_types: Schema.optional(Schema.Array(Schema.Unknown)),
        options: Schema.optional(Schema.Array(Schema.Unknown)),
        nsfw: Schema.optional(Schema.Boolean),
      }),
    ),
    auto_moderation_rules: Schema.Array(Schema.Unknown),
  });
export type ListGuildAuditLogEntriesOutput =
  typeof ListGuildAuditLogEntriesOutput.Type;

// The operation
export const listGuildAuditLogEntries = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListGuildAuditLogEntriesInput,
    outputSchema: ListGuildAuditLogEntriesOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
