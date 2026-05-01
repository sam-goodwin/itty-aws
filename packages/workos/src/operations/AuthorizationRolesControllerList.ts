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
