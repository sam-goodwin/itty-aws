import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetApplicationEmojiInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    emoji_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/applications/{application_id}/emojis/{emoji_id}",
    }),
  );
export type GetApplicationEmojiInput = typeof GetApplicationEmojiInput.Type;

// Output Schema
export const GetApplicationEmojiOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type GetApplicationEmojiOutput = typeof GetApplicationEmojiOutput.Type;

// The operation
export const getApplicationEmoji = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetApplicationEmojiInput,
  outputSchema: GetApplicationEmojiOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
