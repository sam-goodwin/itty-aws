import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateGuildRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  permissions: Schema.optional(Schema.NullOr(Schema.Number)),
  color: Schema.optional(Schema.NullOr(Schema.Number)),
  colors: Schema.optional(Schema.Unknown),
  hoist: Schema.optional(Schema.NullOr(Schema.Boolean)),
  mentionable: Schema.optional(Schema.NullOr(Schema.Boolean)),
  icon: Schema.optional(Schema.NullOr(Schema.String)),
  unicode_emoji: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/guilds/{guild_id}/roles" }));
export type CreateGuildRoleInput = typeof CreateGuildRoleInput.Type;

// Output Schema
export const CreateGuildRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type CreateGuildRoleOutput = typeof CreateGuildRoleOutput.Type;

// The operation
export const createGuildRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateGuildRoleInput,
  outputSchema: CreateGuildRoleOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
