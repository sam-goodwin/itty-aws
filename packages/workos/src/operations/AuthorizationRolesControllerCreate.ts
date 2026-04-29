import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const AuthorizationRolesControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String,
    name: Schema.String,
    description: Schema.optional(Schema.NullOr(Schema.String)),
    resource_type_slug: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/authorization/roles" }));
export type AuthorizationRolesControllerCreateInput =
  typeof AuthorizationRolesControllerCreateInput.Type;

// Output Schema
export const AuthorizationRolesControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String,
    object: Schema.String,
    id: Schema.String,
    name: Schema.String,
    description: Schema.NullOr(Schema.String),
    type: Schema.Literals(["EnvironmentRole", "OrganizationRole"]),
    resource_type_slug: Schema.String,
    permissions: Schema.Array(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type AuthorizationRolesControllerCreateOutput =
  typeof AuthorizationRolesControllerCreateOutput.Type;

// The operation
/**
 * Create an environment role
 *
 * Create a new environment role.
 */
export const AuthorizationRolesControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationRolesControllerCreateInput,
    outputSchema: AuthorizationRolesControllerCreateOutput,
    errors: [
      BadRequest,
      Forbidden,
      NotFound,
      Conflict,
      UnprocessableEntity,
    ] as const,
  }));
