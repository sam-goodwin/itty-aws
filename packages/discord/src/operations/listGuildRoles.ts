import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListGuildRolesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/roles" }));
export type ListGuildRolesInput = typeof ListGuildRolesInput.Type;

// Output Schema
export const ListGuildRolesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
);
export type ListGuildRolesOutput = typeof ListGuildRolesOutput.Type;

// The operation
export const listGuildRoles = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListGuildRolesInput,
  outputSchema: ListGuildRolesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
