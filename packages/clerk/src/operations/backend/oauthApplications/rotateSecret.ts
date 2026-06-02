import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { Forbidden, NotFound } from "../../../errors.ts";
import { SensitiveOutputString } from "../../../sensitive.ts";

// Input Schema
export const RotateSecretInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  oauth_application_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/oauth_applications/{oauth_application_id}/rotate_secret",
  }),
);
export type RotateSecretInput = typeof RotateSecretInput.Type;

// Output Schema
export const RotateSecretOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  client_secret: Schema.optional(SensitiveOutputString),
});
export type RotateSecretOutput = typeof RotateSecretOutput.Type;

// The operation
/**
 * Rotate the client secret of the given OAuth application
 *
 * Rotates the OAuth application's client secret.
 * When the client secret is rotated, make sure to update it in authorized OAuth clients.
 *
 * @param oauth_application_id - The ID of the OAuth application for which to rotate the client secret
 */
export const rotateSecret = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RotateSecretInput,
  outputSchema: RotateSecretOutput,
  errors: [Forbidden, NotFound] as const,
}));
