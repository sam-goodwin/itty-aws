import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateChannelInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "PATCH", path: "/channels/{channel_id}" }));
export type UpdateChannelInput = typeof UpdateChannelInput.Type;

// Output Schema
export const UpdateChannelOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type UpdateChannelOutput = typeof UpdateChannelOutput.Type;

// The operation
export const updateChannel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateChannelInput,
  outputSchema: UpdateChannelOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
