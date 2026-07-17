import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AuthorizationRolesControllerGetInput {
  slug: string;
}
export const AuthorizationRolesControllerGetInput =
  /*@__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/authorization/roles/{slug}" }),
  ) as unknown as Schema.Codec<AuthorizationRolesControllerGetInput>;

// Output Schema
export interface AuthorizationRolesControllerGetOutput {
  slug?: string;
  object?: string;
  id?: string;
  name?: string;
  description?: string | null;
  type?: "EnvironmentRole" | "OrganizationRole";
  resource_type_slug?: string;
  permissions?: ReadonlyArray<string>;
  created_at?: string;
  updated_at?: string;
}
export const AuthorizationRolesControllerGetOutput =
  /*@__PURE__*/ Schema.Struct({
    slug: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    type: Schema.optional(
      Schema.Literals(["EnvironmentRole", "OrganizationRole"]),
    ),
    resource_type_slug: Schema.optional(Schema.String),
    permissions: Schema.optional(Schema.Array(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AuthorizationRolesControllerGetOutput>;

// The operation
/**
 * Get an environment role
 *
 * Get an environment role by its slug.
 *
 * @param slug - The slug of the environment role.
 */
export const AuthorizationRolesControllerGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationRolesControllerGetInput,
    outputSchema: AuthorizationRolesControllerGetOutput,
    errors: [Forbidden, NotFound] as const,
  }));
