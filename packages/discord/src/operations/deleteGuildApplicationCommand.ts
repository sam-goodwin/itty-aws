import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteGuildApplicationCommandInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    guild_id: Schema.String.pipe(T.PathParam()),
    command_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/applications/{application_id}/guilds/{guild_id}/commands/{command_id}",
    }),
  );
export type DeleteGuildApplicationCommandInput =
  typeof DeleteGuildApplicationCommandInput.Type;

// Output Schema
export const DeleteGuildApplicationCommandOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteGuildApplicationCommandOutput =
  typeof DeleteGuildApplicationCommandOutput.Type;

// The operation
export const deleteGuildApplicationCommand =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteGuildApplicationCommandInput,
    outputSchema: DeleteGuildApplicationCommandOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
