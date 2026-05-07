import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const SetGuildApplicationCommandPermissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    guild_id: Schema.String.pipe(T.PathParam()),
    command_id: Schema.String.pipe(T.PathParam()),
    permissions: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            type: Schema.Unknown,
            permission: Schema.Boolean,
          }),
        ),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions",
    }),
  );
export type SetGuildApplicationCommandPermissionsInput =
  typeof SetGuildApplicationCommandPermissionsInput.Type;

// Output Schema
export const SetGuildApplicationCommandPermissionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    application_id: Schema.String,
    guild_id: Schema.String,
    permissions: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        type: Schema.Unknown,
        permission: Schema.Boolean,
      }),
    ),
  });
export type SetGuildApplicationCommandPermissionsOutput =
  typeof SetGuildApplicationCommandPermissionsOutput.Type;

// The operation
export const setGuildApplicationCommandPermissions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SetGuildApplicationCommandPermissionsInput,
    outputSchema: SetGuildApplicationCommandPermissionsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
