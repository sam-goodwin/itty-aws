import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const AuthorizationRolesControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(T.Http({ method: "PATCH", path: "/authorization/roles/{slug}" }));
export type AuthorizationRolesControllerUpdateInput =
  typeof AuthorizationRolesControllerUpdateInput.Type;

// Output Schema
export const AuthorizationRolesControllerUpdateOutput =
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
export type AuthorizationRolesControllerUpdateOutput =
  typeof AuthorizationRolesControllerUpdateOutput.Type;

// The operation
/**
 * Update an environment role
 *
 * Update an existing environment role.
 *
 * @param slug - The slug of the environment role.
 */
export const AuthorizationRolesControllerUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationRolesControllerUpdateInput,
    outputSchema: AuthorizationRolesControllerUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
