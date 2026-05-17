import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteChannelInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/channels/{channel_id}" }));
export type DeleteChannelInput = typeof DeleteChannelInput.Type;

// Output Schema
export const DeleteChannelOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type DeleteChannelOutput = typeof DeleteChannelOutput.Type;

// The operation
export const deleteChannel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteChannelInput,
  outputSchema: DeleteChannelOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
