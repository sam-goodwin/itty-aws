import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetChannelInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/channels/{channel_id}" }));
export type GetChannelInput = typeof GetChannelInput.Type;

// Output Schema
export const GetChannelOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type GetChannelOutput = typeof GetChannelOutput.Type;

// The operation
export const getChannel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetChannelInput,
  outputSchema: GetChannelOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
