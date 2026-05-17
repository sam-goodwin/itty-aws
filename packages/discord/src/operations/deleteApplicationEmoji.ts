import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteApplicationEmojiInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    emoji_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/applications/{application_id}/emojis/{emoji_id}",
    }),
  );
export type DeleteApplicationEmojiInput =
  typeof DeleteApplicationEmojiInput.Type;

// Output Schema
export const DeleteApplicationEmojiOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteApplicationEmojiOutput =
  typeof DeleteApplicationEmojiOutput.Type;

// The operation
export const deleteApplicationEmoji = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteApplicationEmojiInput,
    outputSchema: DeleteApplicationEmojiOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
