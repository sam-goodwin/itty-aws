import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const AuthorizationPermissionsControllerFindInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/authorization/permissions/{slug}" }));
export type AuthorizationPermissionsControllerFindInput =
  typeof AuthorizationPermissionsControllerFindInput.Type;

// Output Schema
export const AuthorizationPermissionsControllerFindOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    system: Schema.optional(Schema.Boolean),
    resource_type_slug: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type AuthorizationPermissionsControllerFindOutput =
  typeof AuthorizationPermissionsControllerFindOutput.Type;

// The operation
/**
 * Get a permission
 *
 * Retrieve a permission by its unique slug.
 *
 * @param slug - A unique key to reference the permission. Must be lowercase and contain only letters, numbers, hyphens, underscores, colons, periods, and asterisks.
 */
export const AuthorizationPermissionsControllerFind =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationPermissionsControllerFindInput,
    outputSchema: AuthorizationPermissionsControllerFindOutput,
    errors: [NotFound] as const,
  }));
