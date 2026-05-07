import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const FollowChannelInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
  webhook_channel_id: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/channels/{channel_id}/followers" }));
export type FollowChannelInput = typeof FollowChannelInput.Type;

// Output Schema
export const FollowChannelOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String,
  webhook_id: Schema.String,
});
export type FollowChannelOutput = typeof FollowChannelOutput.Type;

// The operation
export const followChannel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FollowChannelInput,
  outputSchema: FollowChannelOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
