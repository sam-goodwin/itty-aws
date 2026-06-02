import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  PayloadTooLarge,
} from "../../../errors.ts";

// Input Schema
export const UploadLogoInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  uploader_user_id: Schema.optional(Schema.String),
  file: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/organizations/{organization_id}/logo",
    contentType: "multipart",
  }),
);
export type UploadLogoInput = typeof UploadLogoInput.Type;

// Output Schema
export const UploadLogoOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["organization"]),
  id: Schema.String,
  name: Schema.String,
  slug: Schema.String,
  image_url: Schema.String,
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
  logo_url: Schema.optional(Schema.String),
});
export type UploadLogoOutput = typeof UploadLogoOutput.Type;

// The operation
/**
 * Upload a logo for the organization
 *
 * Set or replace an organization's logo, by uploading an image file.
 * This endpoint uses the `multipart/form-data` request content type and accepts a file of image type.
 * The file size cannot exceed 10MB.
 * Only the following file content types are supported: `image/jpeg`, `image/png`, `image/gif`, `image/webp`.
 *
 * @param organization_id - The ID of the organization for which to upload a logo
 */
export const uploadLogo = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UploadLogoInput,
  outputSchema: UploadLogoOutput,
  errors: [BadRequest, Forbidden, NotFound, PayloadTooLarge] as const,
}));
