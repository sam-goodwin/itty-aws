import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteGuildSoundboardSoundInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    sound_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/guilds/{guild_id}/soundboard-sounds/{sound_id}",
    }),
  );
export type DeleteGuildSoundboardSoundInput =
  typeof DeleteGuildSoundboardSoundInput.Type;

// Output Schema
export const DeleteGuildSoundboardSoundOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteGuildSoundboardSoundOutput =
  typeof DeleteGuildSoundboardSoundOutput.Type;

// The operation
export const deleteGuildSoundboardSound = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteGuildSoundboardSoundInput,
    outputSchema: DeleteGuildSoundboardSoundOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
