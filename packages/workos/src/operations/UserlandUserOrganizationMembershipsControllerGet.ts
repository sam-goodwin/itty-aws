import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const UserlandUserOrganizationMembershipsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/user_management/organization_memberships/{id}",
    }),
  );
export type UserlandUserOrganizationMembershipsControllerGetInput =
  typeof UserlandUserOrganizationMembershipsControllerGetInput.Type;

// Output Schema
export const UserlandUserOrganizationMembershipsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    user_id: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Literals(["active", "inactive", "pending"])),
    directory_managed: Schema.optional(Schema.Boolean),
    organization_name: Schema.optional(Schema.String),
    custom_attributes: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    role: Schema.optional(
      Schema.Struct({
        slug: Schema.optional(Schema.String),
      }),
    ),
  });
export type UserlandUserOrganizationMembershipsControllerGetOutput =
  typeof UserlandUserOrganizationMembershipsControllerGetOutput.Type;

// The operation
/**
 * Get an organization membership
 *
 * Get the details of an existing organization membership.
 *
 * @param id - The unique ID of the organization membership.
 */
export const UserlandUserOrganizationMembershipsControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserOrganizationMembershipsControllerGetInput,
    outputSchema: UserlandUserOrganizationMembershipsControllerGetOutput,
    errors: [NotFound] as const,
  }));
