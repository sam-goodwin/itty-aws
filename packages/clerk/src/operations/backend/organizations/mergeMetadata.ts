import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const MergeMetadataInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  public_metadata: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  private_metadata: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/organizations/{organization_id}/metadata",
  }),
);
export type MergeMetadataInput = typeof MergeMetadataInput.Type;

// Output Schema
export const MergeMetadataOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type MergeMetadataOutput = typeof MergeMetadataOutput.Type;

// The operation
/**
 * Merge and update metadata for an organization
 *
 * Update organization metadata attributes by merging existing values with the provided parameters.
 * Metadata values will be updated via a deep merge.
 * Deep meaning that any nested JSON objects will be merged as well.
 * You can remove metadata keys at any level by setting their value to `null`.
 *
 * @param organization_id - The ID of the organization for which metadata will be merged or updated
 */
export const mergeMetadata = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MergeMetadataInput,
  outputSchema: MergeMetadataOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
