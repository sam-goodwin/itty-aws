import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export const AuthorizationOrganizationRolesControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/authorization/organizations/{organizationId}/roles/{slug}",
    }),
  );
export type AuthorizationOrganizationRolesControllerDeleteInput =
  typeof AuthorizationOrganizationRolesControllerDeleteInput.Type;

// Output Schema
export const AuthorizationOrganizationRolesControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AuthorizationOrganizationRolesControllerDeleteOutput =
  typeof AuthorizationOrganizationRolesControllerDeleteOutput.Type;

// The operation
/**
 * Delete a custom role
 *
 * Delete an existing custom role.
 *
 * @param organizationId - The ID of the organization.
 * @param slug - The slug of the role.
 */
export const AuthorizationOrganizationRolesControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationOrganizationRolesControllerDeleteInput,
    outputSchema: AuthorizationOrganizationRolesControllerDeleteOutput,
    errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
  }));
