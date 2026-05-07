import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetStickerInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sticker_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/stickers/{sticker_id}" }));
export type GetStickerInput = typeof GetStickerInput.Type;

// Output Schema
export const GetStickerOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type GetStickerOutput = typeof GetStickerOutput.Type;

// The operation
export const getSticker = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetStickerInput,
  outputSchema: GetStickerOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
