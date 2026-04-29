import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUserOrganizationMembershipsControllerReactivateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/user_management/organization_memberships/{id}/reactivate",
    }),
  );
export type UserlandUserOrganizationMembershipsControllerReactivateInput =
  typeof UserlandUserOrganizationMembershipsControllerReactivateInput.Type;

// Output Schema
export const UserlandUserOrganizationMembershipsControllerReactivateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    user_id: Schema.String,
    organization_id: Schema.String,
    status: Schema.Literals(["active", "inactive", "pending"]),
    directory_managed: Schema.Boolean,
    organization_name: Schema.optional(Schema.String),
    custom_attributes: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    created_at: Schema.String,
    updated_at: Schema.String,
    role: Schema.Struct({
      slug: Schema.String,
    }),
  });
export type UserlandUserOrganizationMembershipsControllerReactivateOutput =
  typeof UserlandUserOrganizationMembershipsControllerReactivateOutput.Type;

// The operation
/**
 * Reactivate an organization membership
 *
 * Reactivates an `inactive` organization membership, retaining the pre-existing role(s). Emits an [organization_membership.updated](/events/organization-membership) event upon successful reactivation.
 * - Reactivating an `active` membership is a no-op and does not emit an event.
 * - Reactivating a `pending` membership returns an error. The user needs to [accept the invitation](/authkit/invitations) instead.
 * See the [membership management documentation](/authkit/users-organizations/organizations/membership-management) for additional details.
 *
 * @param id - The unique ID of the organization membership.
 */
export const UserlandUserOrganizationMembershipsControllerReactivate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserOrganizationMembershipsControllerReactivateInput,
    outputSchema: UserlandUserOrganizationMembershipsControllerReactivateOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
