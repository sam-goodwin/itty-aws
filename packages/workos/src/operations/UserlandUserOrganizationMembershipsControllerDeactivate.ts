import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUserOrganizationMembershipsControllerDeactivateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/user_management/organization_memberships/{id}/deactivate",
    }),
  );
export type UserlandUserOrganizationMembershipsControllerDeactivateInput =
  typeof UserlandUserOrganizationMembershipsControllerDeactivateInput.Type;

// Output Schema
export const UserlandUserOrganizationMembershipsControllerDeactivateOutput =
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
export type UserlandUserOrganizationMembershipsControllerDeactivateOutput =
  typeof UserlandUserOrganizationMembershipsControllerDeactivateOutput.Type;

// The operation
/**
 * Deactivate an organization membership
 *
 * Deactivates an `active` organization membership. Emits an [organization_membership.updated](/events/organization-membership) event upon successful deactivation.
 * - Deactivating an `inactive` membership is a no-op and does not emit an event.
 * - Deactivating a `pending` membership returns an error. This membership should be [deleted](/reference/authkit/organization-membership/delete) instead.
 * See the [membership management documentation](/authkit/users-organizations/organizations/membership-management) for additional details.
 *
 * @param id - The unique ID of the organization membership.
 */
export const UserlandUserOrganizationMembershipsControllerDeactivate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserOrganizationMembershipsControllerDeactivateInput,
    outputSchema: UserlandUserOrganizationMembershipsControllerDeactivateOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
