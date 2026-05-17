import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListGuildStickersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    guild_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/stickers" }));
export type ListGuildStickersInput = typeof ListGuildStickersInput.Type;

// Output Schema
export const ListGuildStickersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
);
export type ListGuildStickersOutput = typeof ListGuildStickersOutput.Type;

// The operation
export const listGuildStickers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListGuildStickersInput,
  outputSchema: ListGuildStickersOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
