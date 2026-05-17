import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateGuildEmojiInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
  emoji_id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  roles: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
}).pipe(
  T.Http({ method: "PATCH", path: "/guilds/{guild_id}/emojis/{emoji_id}" }),
);
export type UpdateGuildEmojiInput = typeof UpdateGuildEmojiInput.Type;

// Output Schema
export const UpdateGuildEmojiOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
export type UpdateGuildEmojiOutput = typeof UpdateGuildEmojiOutput.Type;

// The operation
export const updateGuildEmoji = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateGuildEmojiInput,
  outputSchema: UpdateGuildEmojiOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
