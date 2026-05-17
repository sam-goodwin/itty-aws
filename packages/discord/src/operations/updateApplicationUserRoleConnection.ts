import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateApplicationUserRoleConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    platform_name: Schema.optional(Schema.NullOr(Schema.String)),
    platform_username: Schema.optional(Schema.NullOr(Schema.String)),
    metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/users/@me/applications/{application_id}/role-connection",
    }),
  );
export type UpdateApplicationUserRoleConnectionInput =
  typeof UpdateApplicationUserRoleConnectionInput.Type;

// Output Schema
export const UpdateApplicationUserRoleConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    platform_name: Schema.optional(Schema.String),
    platform_username: Schema.optional(Schema.NullOr(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type UpdateApplicationUserRoleConnectionOutput =
  typeof UpdateApplicationUserRoleConnectionOutput.Type;

// The operation
export const updateApplicationUserRoleConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateApplicationUserRoleConnectionInput,
    outputSchema: UpdateApplicationUserRoleConnectionOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
