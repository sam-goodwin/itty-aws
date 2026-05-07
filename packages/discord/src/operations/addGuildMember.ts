import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const AddGuildMemberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
  user_id: Schema.String.pipe(T.PathParam()),
  nick: Schema.optional(Schema.NullOr(Schema.String)),
  roles: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  mute: Schema.optional(Schema.NullOr(Schema.Boolean)),
  deaf: Schema.optional(Schema.NullOr(Schema.Boolean)),
  access_token: SensitiveString,
  flags: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "PUT", path: "/guilds/{guild_id}/members/{user_id}" }),
);
export type AddGuildMemberInput = typeof AddGuildMemberInput.Type;

// Output Schema
export const AddGuildMemberOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type AddGuildMemberOutput = typeof AddGuildMemberOutput.Type;

// The operation
export const addGuildMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddGuildMemberInput,
  outputSchema: AddGuildMemberOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
