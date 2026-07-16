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
export interface AuthorizationRolesControllerCreateInput {
  slug?: string;
  name?: string;
  description?: string | null;
  resource_type_slug?: string;
}
export const AuthorizationRolesControllerCreateInput =
  /*@__PURE__*/ Schema.Struct({
    slug: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    resource_type_slug: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/authorization/roles" }),
  ) as unknown as Schema.Codec<AuthorizationRolesControllerCreateInput>;

// Output Schema
export interface AuthorizationRolesControllerCreateOutput {
  slug: string;
  object: string;
  id: string;
  name: string;
  description: string | null;
  type: "EnvironmentRole" | "OrganizationRole";
  resource_type_slug: string;
  permissions: ReadonlyArray<string>;
  created_at: string;
  updated_at: string;
}
export const AuthorizationRolesControllerCreateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AuthorizationRolesControllerCreateOutput>;

// The operation
/**
 * Create an environment role
 *
 * Create a new environment role.
 */
export const AuthorizationRolesControllerCreate =
  /*@__PURE__*/ API.make(() => ({
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
