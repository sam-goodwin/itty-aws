import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const AuthorizationRolesControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/authorization/roles" }),
  );
export type AuthorizationRolesControllerListInput =
  typeof AuthorizationRolesControllerListInput.Type;

// Output Schema
export const AuthorizationRolesControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  });
export type AuthorizationRolesControllerListOutput =
  typeof AuthorizationRolesControllerListOutput.Type;

// The operation
/**
 * List environment roles
 *
 * List all environment roles in priority order.
 */
export const AuthorizationRolesControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationRolesControllerListInput,
    outputSchema: AuthorizationRolesControllerListOutput,
    errors: [Forbidden] as const,
  }));
