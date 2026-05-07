import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGuildPreviewInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/preview" }));
export type GetGuildPreviewInput = typeof GetGuildPreviewInput.Type;

// Output Schema
export const GetGuildPreviewOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  icon: Schema.NullOr(Schema.String),
  description: Schema.NullOr(Schema.String),
  home_header: Schema.NullOr(Schema.String),
  splash: Schema.NullOr(Schema.String),
  discovery_splash: Schema.NullOr(Schema.String),
  features: Schema.Array(Schema.Unknown),
  approximate_member_count: Schema.Number,
  approximate_presence_count: Schema.Number,
  emojis: Schema.Array(
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
  ),
  stickers: Schema.Array(
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
  ),
});
export type GetGuildPreviewOutput = typeof GetGuildPreviewOutput.Type;

// The operation
export const getGuildPreview = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetGuildPreviewInput,
  outputSchema: GetGuildPreviewOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
