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
  oauth_application_id: Schema.String.pipe(T.PathParam()),
  uploader_user_id: Schema.optional(Schema.String),
  file: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/oauth_applications/{oauth_application_id}/logo",
    contentType: "multipart",
  }),
);
export type UploadLogoInput = typeof UploadLogoInput.Type;

// Output Schema
export const UploadLogoOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["oauth_application"]),
  id: Schema.String,
  instance_id: Schema.String,
  name: Schema.String,
  client_id: Schema.String,
  client_uri: Schema.NullOr(Schema.String),
  client_image_url: Schema.NullOr(Schema.String),
  dynamically_registered: Schema.Boolean,
  consent_screen_enabled: Schema.Boolean,
  pkce_required: Schema.Boolean,
  public: Schema.Boolean,
  scopes: Schema.String,
  redirect_uris: Schema.Array(Schema.String),
  callback_url: Schema.String,
  authorize_url: Schema.String,
  token_fetch_url: Schema.String,
  user_info_url: Schema.String,
  discovery_url: Schema.String,
  token_introspection_url: Schema.String,
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type UploadLogoOutput = typeof UploadLogoOutput.Type;

// The operation
/**
 * Upload a logo for the OAuth application
 *
 * Set or replace an OAuth application's logo by uploading an image file.
 * This endpoint uses the `multipart/form-data` request content type and accepts a file of image type.
 * The file size cannot exceed 10MB.
 * Only the following file content types are supported: `image/jpeg`, `image/png`, `image/gif`, `image/webp`.
 *
 * @param oauth_application_id - The ID of the OAuth application for which to upload a logo
 */
export const uploadLogo = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UploadLogoInput,
  outputSchema: UploadLogoOutput,
  errors: [BadRequest, Forbidden, NotFound, PayloadTooLarge] as const,
}));
