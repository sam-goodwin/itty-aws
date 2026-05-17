import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListStickerPacksInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/sticker-packs" }));
export type ListStickerPacksInput = typeof ListStickerPacksInput.Type;

// Output Schema
export const ListStickerPacksOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    sticker_packs: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  },
);
export type ListStickerPacksOutput = typeof ListStickerPacksOutput.Type;

// The operation
export const listStickerPacks = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListStickerPacksInput,
  outputSchema: ListStickerPacksOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
