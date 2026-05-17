import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGuildBanInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
  user_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/bans/{user_id}" }));
export type GetGuildBanInput = typeof GetGuildBanInput.Type;

// Output Schema
export const GetGuildBanOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type GetGuildBanOutput = typeof GetGuildBanOutput.Type;

// The operation
export const getGuildBan = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetGuildBanInput,
  outputSchema: GetGuildBanOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
