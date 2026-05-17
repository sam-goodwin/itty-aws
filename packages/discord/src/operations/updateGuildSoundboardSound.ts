import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateGuildSoundboardSoundInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    sound_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    volume: Schema.optional(Schema.NullOr(Schema.Number)),
    emoji_id: Schema.optional(Schema.Unknown),
    emoji_name: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/guilds/{guild_id}/soundboard-sounds/{sound_id}",
    }),
  );
export type UpdateGuildSoundboardSoundInput =
  typeof UpdateGuildSoundboardSoundInput.Type;

// Output Schema
export const UpdateGuildSoundboardSoundOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    sound_id: Schema.String,
    volume: Schema.Number,
    emoji_id: Schema.Unknown,
    emoji_name: Schema.NullOr(Schema.String),
    guild_id: Schema.optional(Schema.String),
    available: Schema.Boolean,
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
  });
export type UpdateGuildSoundboardSoundOutput =
  typeof UpdateGuildSoundboardSoundOutput.Type;

// The operation
export const updateGuildSoundboardSound = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateGuildSoundboardSoundInput,
    outputSchema: UpdateGuildSoundboardSoundOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
