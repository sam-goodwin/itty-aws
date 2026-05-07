import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListGuildBansInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  before: Schema.optional(Schema.String),
  after: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/bans" }));
export type ListGuildBansInput = typeof ListGuildBansInput.Type;

// Output Schema
export const ListGuildBansOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
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
    reason: Schema.NullOr(Schema.String),
  }),
);
export type ListGuildBansOutput = typeof ListGuildBansOutput.Type;

// The operation
export const listGuildBans = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListGuildBansInput,
  outputSchema: ListGuildBansOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
