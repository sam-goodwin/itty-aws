import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUserOrganizationMembershipsControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/user_management/organization_memberships/{id}",
    }),
  );
export type UserlandUserOrganizationMembershipsControllerUpdateInput =
  typeof UserlandUserOrganizationMembershipsControllerUpdateInput.Type;

// Output Schema
export const UserlandUserOrganizationMembershipsControllerUpdateOutput =
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
export type UserlandUserOrganizationMembershipsControllerUpdateOutput =
  typeof UserlandUserOrganizationMembershipsControllerUpdateOutput.Type;

// The operation
/**
 * Update an organization membership
 *
 * Update the details of an existing organization membership.
 *
 * @param id - The unique ID of the organization membership.
 */
export const UserlandUserOrganizationMembershipsControllerUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserOrganizationMembershipsControllerUpdateInput,
    outputSchema: UserlandUserOrganizationMembershipsControllerUpdateOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
