import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListGuildEmojisInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/emojis" }));
export type ListGuildEmojisInput = typeof ListGuildEmojisInput.Type;

// Output Schema
export const ListGuildEmojisOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
);
export type ListGuildEmojisOutput = typeof ListGuildEmojisOutput.Type;

// The operation
export const listGuildEmojis = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListGuildEmojisInput,
  outputSchema: ListGuildEmojisOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
