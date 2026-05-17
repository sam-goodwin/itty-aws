import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteMessageInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
  message_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/channels/{channel_id}/messages/{message_id}",
  }),
);
export type DeleteMessageInput = typeof DeleteMessageInput.Type;

// Output Schema
export const DeleteMessageOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteMessageOutput = typeof DeleteMessageOutput.Type;

// The operation
export const deleteMessage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteMessageInput,
  outputSchema: DeleteMessageOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
