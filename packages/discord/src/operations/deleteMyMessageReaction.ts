import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteMyMessageReactionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    message_id: Schema.String.pipe(T.PathParam()),
    emoji_name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me",
    }),
  );
export type DeleteMyMessageReactionInput =
  typeof DeleteMyMessageReactionInput.Type;

// Output Schema
export const DeleteMyMessageReactionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteMyMessageReactionOutput =
  typeof DeleteMyMessageReactionOutput.Type;

// The operation
export const deleteMyMessageReaction = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteMyMessageReactionInput,
    outputSchema: DeleteMyMessageReactionOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
