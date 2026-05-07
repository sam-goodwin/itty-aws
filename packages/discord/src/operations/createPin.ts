import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreatePinInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
  message_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/channels/{channel_id}/messages/pins/{message_id}",
  }),
);
export type CreatePinInput = typeof CreatePinInput.Type;

// Output Schema
export const CreatePinOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreatePinOutput = typeof CreatePinOutput.Type;

// The operation
export const createPin = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreatePinInput,
  outputSchema: CreatePinOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
