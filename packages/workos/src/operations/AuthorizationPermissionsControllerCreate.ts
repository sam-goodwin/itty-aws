import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const AuthorizationPermissionsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String,
    name: Schema.String,
    description: Schema.optional(Schema.NullOr(Schema.String)),
    resource_type_slug: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/authorization/permissions" }));
export type AuthorizationPermissionsControllerCreateInput =
  typeof AuthorizationPermissionsControllerCreateInput.Type;

// Output Schema
export const AuthorizationPermissionsControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    slug: Schema.String,
    name: Schema.String,
    description: Schema.NullOr(Schema.String),
    system: Schema.Boolean,
    resource_type_slug: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type AuthorizationPermissionsControllerCreateOutput =
  typeof AuthorizationPermissionsControllerCreateOutput.Type;

// The operation
/**
 * Create a permission
 *
 * Create a new permission in your WorkOS environment. The permission can then be assigned to environment roles and custom roles.
 */
export const AuthorizationPermissionsControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationPermissionsControllerCreateInput,
    outputSchema: AuthorizationPermissionsControllerCreateOutput,
    errors: [BadRequest, NotFound, Conflict, UnprocessableEntity] as const,
  }));
