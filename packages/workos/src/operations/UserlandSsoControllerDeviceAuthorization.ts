import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface UserlandSsoControllerDeviceAuthorizationInput {
  client_id: string;
}
export const UserlandSsoControllerDeviceAuthorizationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/user_management/authorize/device" }),
  ) as unknown as Schema.Codec<UserlandSsoControllerDeviceAuthorizationInput>;

// Output Schema
export interface UserlandSsoControllerDeviceAuthorizationOutput {
  device_code?: string;
  user_code?: string;
  verification_uri?: string;
  verification_uri_complete?: string;
  expires_in?: number;
  interval?: number;
}
export const UserlandSsoControllerDeviceAuthorizationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device_code: Schema.optional(Schema.String),
    user_code: Schema.optional(Schema.String),
    verification_uri: Schema.optional(Schema.String),
    verification_uri_complete: Schema.optional(Schema.String),
    expires_in: Schema.optional(Schema.Number),
    interval: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<UserlandSsoControllerDeviceAuthorizationOutput>;

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
