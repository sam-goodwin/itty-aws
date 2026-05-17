import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeletePinInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
  message_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/channels/{channel_id}/messages/pins/{message_id}",
  }),
);
export type DeletePinInput = typeof DeletePinInput.Type;

// Output Schema
export const DeletePinOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeletePinOutput = typeof DeletePinOutput.Type;

// The operation
export const deletePin = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeletePinInput,
  outputSchema: DeletePinOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
