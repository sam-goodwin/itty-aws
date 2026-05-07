import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateVoiceStateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
  user_id: Schema.String.pipe(T.PathParam()),
  suppress: Schema.optional(Schema.NullOr(Schema.Boolean)),
  channel_id: Schema.optional(Schema.Unknown),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/guilds/{guild_id}/voice-states/{user_id}",
  }),
);
export type UpdateVoiceStateInput = typeof UpdateVoiceStateInput.Type;

// Output Schema
export const UpdateVoiceStateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateVoiceStateOutput = typeof UpdateVoiceStateOutput.Type;

// The operation
export const updateVoiceState = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateVoiceStateInput,
  outputSchema: UpdateVoiceStateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
