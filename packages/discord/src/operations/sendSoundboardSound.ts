import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const SendSoundboardSoundInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    sound_id: Schema.String,
    source_guild_id: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/channels/{channel_id}/send-soundboard-sound",
    }),
  );
export type SendSoundboardSoundInput = typeof SendSoundboardSoundInput.Type;

// Output Schema
export const SendSoundboardSoundOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SendSoundboardSoundOutput = typeof SendSoundboardSoundOutput.Type;

// The operation
export const sendSoundboardSound = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SendSoundboardSoundInput,
  outputSchema: SendSoundboardSoundOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
