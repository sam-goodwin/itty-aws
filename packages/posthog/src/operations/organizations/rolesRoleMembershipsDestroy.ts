import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface RolesRoleMembershipsDestroyInput {
  id: string;
  organization_id: string;
  role_id: string;
}
export const RolesRoleMembershipsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
    role_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/organizations/{organization_id}/roles/{role_id}/role_memberships/{id}/",
    }),
  ) as unknown as Schema.Codec<RolesRoleMembershipsDestroyInput>;

// Output Schema
export type RolesRoleMembershipsDestroyOutput = void;
export const RolesRoleMembershipsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RolesRoleMembershipsDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this role membership.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const rolesRoleMembershipsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RolesRoleMembershipsDestroyInput,
    outputSchema: RolesRoleMembershipsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
