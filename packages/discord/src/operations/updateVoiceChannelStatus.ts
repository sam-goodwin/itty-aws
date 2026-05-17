import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateVoiceChannelStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    status: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({ method: "PUT", path: "/channels/{channel_id}/voice-status" }),
  );
export type UpdateVoiceChannelStatusInput =
  typeof UpdateVoiceChannelStatusInput.Type;

// Output Schema
export const UpdateVoiceChannelStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateVoiceChannelStatusOutput =
  typeof UpdateVoiceChannelStatusOutput.Type;

// The operation
/**
 * Set a voice channel's status.
 */
export const updateVoiceChannelStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateVoiceChannelStatusInput,
    outputSchema: UpdateVoiceChannelStatusOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
