import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const UserlandSsoControllerDeviceAuthorizationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/user_management/authorize/device" }),
  );
export type UserlandSsoControllerDeviceAuthorizationInput =
  typeof UserlandSsoControllerDeviceAuthorizationInput.Type;

// Output Schema
export const UserlandSsoControllerDeviceAuthorizationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device_code: Schema.String,
    user_code: Schema.String,
    verification_uri: Schema.String,
    verification_uri_complete: Schema.optional(Schema.String),
    expires_in: Schema.Number,
    interval: Schema.optional(Schema.Number),
  });
export type UserlandSsoControllerDeviceAuthorizationOutput =
  typeof UserlandSsoControllerDeviceAuthorizationOutput.Type;

// The operation
/**
 * Get device authorization URL
 *
 * Initiates the CLI Auth flow by requesting a device code and verification URLs. This endpoint implements the OAuth 2.0 Device Authorization Flow ([RFC 8628](https://datatracker.ietf.org/doc/html/rfc8628)) and is designed for command-line applications or other devices with limited input capabilities.
 */
export const UserlandSsoControllerDeviceAuthorization =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandSsoControllerDeviceAuthorizationInput,
    outputSchema: UserlandSsoControllerDeviceAuthorizationOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
