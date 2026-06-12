import * as Schema from "effect/Schema";
import { RoleMembershipSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const RolesRoleMembershipsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    role_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/roles/{role_id}/role_memberships/",
    }),
  );
export type RolesRoleMembershipsListInput =
  typeof RolesRoleMembershipsListInput.Type;

// Output Schema
export const RolesRoleMembershipsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => RoleMembershipSchema)),
    ),
  });
export type RolesRoleMembershipsListOutput =
  typeof RolesRoleMembershipsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 */
export const rolesRoleMembershipsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RolesRoleMembershipsListInput,
    outputSchema: RolesRoleMembershipsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
