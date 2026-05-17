import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateSelfVoiceStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    request_to_speak_timestamp: Schema.optional(Schema.NullOr(Schema.String)),
    suppress: Schema.optional(Schema.NullOr(Schema.Boolean)),
    channel_id: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({ method: "PATCH", path: "/guilds/{guild_id}/voice-states/@me" }),
  );
export type UpdateSelfVoiceStateInput = typeof UpdateSelfVoiceStateInput.Type;

// Output Schema
export const UpdateSelfVoiceStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateSelfVoiceStateOutput = typeof UpdateSelfVoiceStateOutput.Type;

// The operation
export const updateSelfVoiceState = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateSelfVoiceStateInput,
    outputSchema: UpdateSelfVoiceStateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
