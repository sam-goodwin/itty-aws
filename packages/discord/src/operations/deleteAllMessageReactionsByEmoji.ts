import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteAllMessageReactionsByEmojiInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    message_id: Schema.String.pipe(T.PathParam()),
    emoji_name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}",
    }),
  );
export type DeleteAllMessageReactionsByEmojiInput =
  typeof DeleteAllMessageReactionsByEmojiInput.Type;

// Output Schema
export const DeleteAllMessageReactionsByEmojiOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteAllMessageReactionsByEmojiOutput =
  typeof DeleteAllMessageReactionsByEmojiOutput.Type;

// The operation
export const deleteAllMessageReactionsByEmoji =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAllMessageReactionsByEmojiInput,
    outputSchema: DeleteAllMessageReactionsByEmojiOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
