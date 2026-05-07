import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateGuildEmojiInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
  name: Schema.String,
  image: Schema.String,
  roles: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
}).pipe(T.Http({ method: "POST", path: "/guilds/{guild_id}/emojis" }));
export type CreateGuildEmojiInput = typeof CreateGuildEmojiInput.Type;

// Output Schema
export const CreateGuildEmojiOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type CreateGuildEmojiOutput = typeof CreateGuildEmojiOutput.Type;

// The operation
export const createGuildEmoji = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateGuildEmojiInput,
  outputSchema: CreateGuildEmojiOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
