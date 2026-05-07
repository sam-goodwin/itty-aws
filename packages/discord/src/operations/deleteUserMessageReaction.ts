import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteUserMessageReactionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    message_id: Schema.String.pipe(T.PathParam()),
    emoji_name: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}",
    }),
  );
export type DeleteUserMessageReactionInput =
  typeof DeleteUserMessageReactionInput.Type;

// Output Schema
export const DeleteUserMessageReactionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteUserMessageReactionOutput =
  typeof DeleteUserMessageReactionOutput.Type;

// The operation
export const deleteUserMessageReaction = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteUserMessageReactionInput,
    outputSchema: DeleteUserMessageReactionOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
