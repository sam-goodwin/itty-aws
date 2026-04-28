import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
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
  );
export type RolesRoleMembershipsDestroyInput =
  typeof RolesRoleMembershipsDestroyInput.Type;

// Output Schema
export const RolesRoleMembershipsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RolesRoleMembershipsDestroyOutput =
  typeof RolesRoleMembershipsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this role membership.
 */
export const rolesRoleMembershipsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RolesRoleMembershipsDestroyInput,
    outputSchema: RolesRoleMembershipsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
