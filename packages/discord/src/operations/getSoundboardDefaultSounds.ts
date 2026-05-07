import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetSoundboardDefaultSoundsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/soundboard-default-sounds" }),
  );
export type GetSoundboardDefaultSoundsInput =
  typeof GetSoundboardDefaultSoundsInput.Type;

// Output Schema
export const GetSoundboardDefaultSoundsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
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
    }),
  );
export type GetSoundboardDefaultSoundsOutput =
  typeof GetSoundboardDefaultSoundsOutput.Type;

// The operation
export const getSoundboardDefaultSounds = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetSoundboardDefaultSoundsInput,
    outputSchema: GetSoundboardDefaultSoundsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
