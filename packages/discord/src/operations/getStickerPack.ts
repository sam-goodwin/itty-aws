import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetStickerPackInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pack_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/sticker-packs/{pack_id}" }));
export type GetStickerPackInput = typeof GetStickerPackInput.Type;

// Output Schema
export const GetStickerPackOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  sku_id: Schema.String,
  name: Schema.String,
  description: Schema.NullOr(Schema.String),
  stickers: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      tags: Schema.String,
      type: Schema.Unknown,
      format_type: Schema.Unknown,
      description: Schema.NullOr(Schema.String),
      pack_id: Schema.String,
      sort_value: Schema.Number,
    }),
  ),
  cover_sticker_id: Schema.optional(Schema.String),
  banner_asset_id: Schema.optional(Schema.String),
});
export type GetStickerPackOutput = typeof GetStickerPackOutput.Type;

// The operation
export const getStickerPack = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetStickerPackInput,
  outputSchema: GetStickerPackOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
