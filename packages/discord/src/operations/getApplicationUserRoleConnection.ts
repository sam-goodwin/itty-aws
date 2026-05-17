import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetApplicationUserRoleConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/users/@me/applications/{application_id}/role-connection",
    }),
  );
export type GetApplicationUserRoleConnectionInput =
  typeof GetApplicationUserRoleConnectionInput.Type;

// Output Schema
export const GetApplicationUserRoleConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    platform_name: Schema.optional(Schema.String),
    platform_username: Schema.optional(Schema.NullOr(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type GetApplicationUserRoleConnectionOutput =
  typeof GetApplicationUserRoleConnectionOutput.Type;

// The operation
export const getApplicationUserRoleConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetApplicationUserRoleConnectionInput,
    outputSchema: GetApplicationUserRoleConnectionOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
