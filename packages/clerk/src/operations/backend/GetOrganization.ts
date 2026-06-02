import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GetOrganizationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  include_members_count: Schema.optional(Schema.Boolean),
  include_missing_member_with_elevated_permissions: Schema.optional(
    Schema.Boolean,
  ),
}).pipe(T.Http({ method: "GET", path: "/organizations/{organization_id}" }));
export type GetOrganizationInput = typeof GetOrganizationInput.Type;

// Output Schema
export const GetOrganizationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type GetOrganizationOutput = typeof GetOrganizationOutput.Type;

// The operation
/**
 * Retrieve an organization by ID or slug
 *
 * Fetches the organization whose ID or slug matches the provided `id_or_slug` URL query parameter.
 *
 * @param organization_id - The ID or slug of the organization
 * @param include_members_count - Flag to denote whether or not the organization's members count should be included in the response.
 * @param include_missing_member_with_elevated_permissions - Flag to denote whether or not to include a member with elevated permissions who is not currently a member of the organization.
 */
export const GetOrganization = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOrganizationInput,
  outputSchema: GetOrganizationOutput,
  errors: [Forbidden, NotFound] as const,
}));
