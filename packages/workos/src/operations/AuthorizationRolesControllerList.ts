import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export interface AuthorizationRolesControllerListInput {}
export const AuthorizationRolesControllerListInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/authorization/roles" }),
  ) as unknown as Schema.Codec<AuthorizationRolesControllerListInput>;

// Output Schema
export interface AuthorizationRolesControllerListOutput {
  object?: string;
  data?: ReadonlyArray<{
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
  }>;
}
export const AuthorizationRolesControllerListOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AuthorizationRolesControllerListOutput>;

// The operation
/**
 * List environment roles
 *
 * List all environment roles in priority order.
 */
export const AuthorizationRolesControllerList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationRolesControllerListInput,
    outputSchema: AuthorizationRolesControllerListOutput,
    errors: [Forbidden] as const,
  }));
