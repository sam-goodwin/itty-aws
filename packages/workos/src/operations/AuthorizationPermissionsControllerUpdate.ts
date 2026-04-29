import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuthorizationPermissionsControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/authorization/permissions/{slug}" }),
  );
export type AuthorizationPermissionsControllerUpdateInput =
  typeof AuthorizationPermissionsControllerUpdateInput.Type;

// Output Schema
export const AuthorizationPermissionsControllerUpdateOutput =
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
export type AuthorizationPermissionsControllerUpdateOutput =
  typeof AuthorizationPermissionsControllerUpdateOutput.Type;

// The operation
/**
 * Update a permission
 *
 * Update an existing permission. Only the fields provided in the request body will be updated.
 *
 * @param slug - A unique key to reference the permission. Must be lowercase and contain only letters, numbers, hyphens, underscores, colons, periods, and asterisks.
 */
export const AuthorizationPermissionsControllerUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationPermissionsControllerUpdateInput,
    outputSchema: AuthorizationPermissionsControllerUpdateOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
