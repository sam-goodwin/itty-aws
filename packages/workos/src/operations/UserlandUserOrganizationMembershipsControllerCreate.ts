import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUserOrganizationMembershipsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/user_management/organization_memberships",
    }),
  );
export type UserlandUserOrganizationMembershipsControllerCreateInput =
  typeof UserlandUserOrganizationMembershipsControllerCreateInput.Type;

// Output Schema
export const UserlandUserOrganizationMembershipsControllerCreateOutput =
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
export type UserlandUserOrganizationMembershipsControllerCreateOutput =
  typeof UserlandUserOrganizationMembershipsControllerCreateOutput.Type;

// The operation
/**
 * Create an organization membership
 *
 * Creates a new `active` organization membership for the given organization and user.
 * Calling this API with an organization and user that match an `inactive` organization membership will activate the membership with the specified role(s).
 */
export const UserlandUserOrganizationMembershipsControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserOrganizationMembershipsControllerCreateInput,
    outputSchema: UserlandUserOrganizationMembershipsControllerCreateOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
