import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface AuthorizationPermissionsControllerUpdateInput {
  slug: string;
  name?: string;
  description?: string | null;
}
export const AuthorizationPermissionsControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/authorization/permissions/{slug}" }),
  ) as unknown as Schema.Codec<AuthorizationPermissionsControllerUpdateInput>;

// Output Schema
export interface AuthorizationPermissionsControllerUpdateOutput {
  object?: string;
  id?: string;
  slug?: string;
  name?: string;
  description?: string | null;
  system?: boolean;
  resource_type_slug?: string;
  created_at?: string;
  updated_at?: string;
}
export const AuthorizationPermissionsControllerUpdateOutput =
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
  }) as unknown as Schema.Codec<AuthorizationPermissionsControllerUpdateOutput>;

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
