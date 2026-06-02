import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const CreateOrganizationMembershipInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String,
    role: Schema.String,
    public_metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    private_metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{organization_id}/memberships",
    }),
  );
export type CreateOrganizationMembershipInput =
  typeof CreateOrganizationMembershipInput.Type;

// Output Schema
export const CreateOrganizationMembershipOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    object: Schema.Literals(["organization_membership"]),
    role: Schema.String,
    role_name: Schema.optional(Schema.String),
    permissions: Schema.Array(Schema.String),
    public_metadata: Schema.Record(Schema.String, Schema.Unknown),
    private_metadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    organization: Schema.Struct({
      object: Schema.Literals(["organization"]),
      id: Schema.String,
      name: Schema.String,
      slug: Schema.String,
      image_url: Schema.optional(Schema.String),
      has_image: Schema.Boolean,
      members_count: Schema.optional(Schema.Number),
      missing_member_with_elevated_permissions: Schema.optional(Schema.Boolean),
      pending_invitations_count: Schema.optional(Schema.Number),
      max_allowed_memberships: Schema.Number,
      admin_delete_enabled: Schema.Boolean,
      public_metadata: Schema.Record(Schema.String, Schema.Unknown),
      private_metadata: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      created_by: Schema.optional(Schema.String),
      created_at: Schema.Number,
      updated_at: Schema.Number,
      last_active_at: Schema.optional(Schema.Number),
      role_set_key: Schema.optional(Schema.NullOr(Schema.String)),
    }),
    public_user_data: Schema.optional(
      Schema.Struct({
        user_id: Schema.String,
        first_name: Schema.NullOr(Schema.String),
        last_name: Schema.NullOr(Schema.String),
        profile_image_url: Schema.NullOr(Schema.String),
        image_url: Schema.String,
        has_image: Schema.Boolean,
        identifier: Schema.optional(Schema.NullOr(Schema.String)),
        username: Schema.optional(Schema.NullOr(Schema.String)),
        banned: Schema.optional(Schema.Boolean),
      }),
    ),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type CreateOrganizationMembershipOutput =
  typeof CreateOrganizationMembershipOutput.Type;

// The operation
/**
 * Create a new organization membership
 *
 * Adds a user as a member to the given organization.
 * Only users in the same instance as the organization can be added as members.
 * This organization will be the user's [active organization] (https://clerk.com/docs/organizations/overview#active-organization)
 * the next time they create a session, presuming they don't explicitly set a
 * different organization as active before then.
 *
 * @param organization_id - The ID of the organization where the new membership will be created
 */
export const CreateOrganizationMembership =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateOrganizationMembershipInput,
    outputSchema: CreateOrganizationMembershipOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
