import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUserOrganizationMembershipsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String,
    organization_id: Schema.String,
  }).pipe(
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
      slug: Schema.optional(Schema.String),
    }),
    roles: Schema.Array(
      Schema.Struct({
        slug: Schema.optional(Schema.String),
      }),
    ),
    user: Schema.Struct({
      object: Schema.optional(Schema.String),
      id: Schema.optional(Schema.String),
      first_name: Schema.optional(Schema.NullOr(Schema.String)),
      last_name: Schema.optional(Schema.NullOr(Schema.String)),
      name: Schema.optional(Schema.NullOr(Schema.String)),
      profile_picture_url: Schema.optional(Schema.NullOr(Schema.String)),
      email: Schema.optional(Schema.String),
      email_verified: Schema.optional(Schema.Boolean),
      external_id: Schema.optional(Schema.NullOr(Schema.String)),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      last_sign_in_at: Schema.optional(Schema.NullOr(Schema.String)),
      locale: Schema.optional(Schema.NullOr(Schema.String)),
      created_at: Schema.optional(Schema.String),
      updated_at: Schema.optional(Schema.String),
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
