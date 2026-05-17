import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteGuildEmojiInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
  emoji_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/guilds/{guild_id}/emojis/{emoji_id}" }),
);
export type DeleteGuildEmojiInput = typeof DeleteGuildEmojiInput.Type;

// Output Schema
export const DeleteGuildEmojiOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteGuildEmojiOutput = typeof DeleteGuildEmojiOutput.Type;

// The operation
export const deleteGuildEmoji = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteGuildEmojiInput,
  outputSchema: DeleteGuildEmojiOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
