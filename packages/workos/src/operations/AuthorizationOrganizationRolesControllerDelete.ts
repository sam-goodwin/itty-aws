import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface AuthorizationOrganizationRolesControllerDeleteInput {
  organizationId: string;
  slug: string;
}
export const AuthorizationOrganizationRolesControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/authorization/organizations/{organizationId}/roles/{slug}",
    }),
  ) as unknown as Schema.Codec<AuthorizationOrganizationRolesControllerDeleteInput>;

// Output Schema
export type AuthorizationOrganizationRolesControllerDeleteOutput = void;
export const AuthorizationOrganizationRolesControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AuthorizationOrganizationRolesControllerDeleteOutput>;

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
