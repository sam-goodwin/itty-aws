import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListGuildApplicationCommandPermissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    guild_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/applications/{application_id}/guilds/{guild_id}/commands/permissions",
    }),
  );
export type ListGuildApplicationCommandPermissionsInput =
  typeof ListGuildApplicationCommandPermissionsInput.Type;

// Output Schema
export const ListGuildApplicationCommandPermissionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
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
    }),
  );
export type ListGuildApplicationCommandPermissionsOutput =
  typeof ListGuildApplicationCommandPermissionsOutput.Type;

// The operation
export const listGuildApplicationCommandPermissions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListGuildApplicationCommandPermissionsInput,
    outputSchema: ListGuildApplicationCommandPermissionsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
