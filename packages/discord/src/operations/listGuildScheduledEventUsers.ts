import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListGuildScheduledEventUsersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    guild_scheduled_event_id: Schema.String.pipe(T.PathParam()),
    with_member: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users",
    }),
  );
export type ListGuildScheduledEventUsersInput =
  typeof ListGuildScheduledEventUsersInput.Type;

// Output Schema
export const ListGuildScheduledEventUsersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      guild_scheduled_event_id: Schema.String,
      user_id: Schema.String,
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
  );
export type ListGuildScheduledEventUsersOutput =
  typeof ListGuildScheduledEventUsersOutput.Type;

// The operation
export const listGuildScheduledEventUsers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListGuildScheduledEventUsersInput,
    outputSchema: ListGuildScheduledEventUsersOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
