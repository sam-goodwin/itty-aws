import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGuildApplicationCommandPermissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    guild_id: Schema.String.pipe(T.PathParam()),
    command_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions",
    }),
  );
export type GetGuildApplicationCommandPermissionsInput =
  typeof GetGuildApplicationCommandPermissionsInput.Type;

// Output Schema
export const GetGuildApplicationCommandPermissionsOutput =
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
export type GetGuildApplicationCommandPermissionsOutput =
  typeof GetGuildApplicationCommandPermissionsOutput.Type;

// The operation
export const getGuildApplicationCommandPermissions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetGuildApplicationCommandPermissionsInput,
    outputSchema: GetGuildApplicationCommandPermissionsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
