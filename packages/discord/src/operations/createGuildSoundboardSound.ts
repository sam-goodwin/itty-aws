import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateGuildSoundboardSoundInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    volume: Schema.optional(Schema.NullOr(Schema.Number)),
    emoji_id: Schema.optional(Schema.Unknown),
    emoji_name: Schema.optional(Schema.NullOr(Schema.String)),
    sound: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/guilds/{guild_id}/soundboard-sounds" }),
  );
export type CreateGuildSoundboardSoundInput =
  typeof CreateGuildSoundboardSoundInput.Type;

// Output Schema
export const CreateGuildSoundboardSoundOutput =
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
export type CreateGuildSoundboardSoundOutput =
  typeof CreateGuildSoundboardSoundOutput.Type;

// The operation
export const createGuildSoundboardSound = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateGuildSoundboardSoundInput,
    outputSchema: CreateGuildSoundboardSoundOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
