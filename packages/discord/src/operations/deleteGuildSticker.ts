import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteGuildStickerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    sticker_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/guilds/{guild_id}/stickers/{sticker_id}",
    }),
  );
export type DeleteGuildStickerInput = typeof DeleteGuildStickerInput.Type;

// Output Schema
export const DeleteGuildStickerOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteGuildStickerOutput = typeof DeleteGuildStickerOutput.Type;

// The operation
export const deleteGuildSticker = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteGuildStickerInput,
  outputSchema: DeleteGuildStickerOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
