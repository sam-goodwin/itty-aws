import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const OidcAuthorizeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  response_type: Schema.optional(Schema.String),
  client_id: Schema.optional(Schema.String),
  redirect_uri: Schema.optional(Schema.String),
  scope: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v2/oidc/authorize" }));
export type OidcAuthorizeInput = typeof OidcAuthorizeInput.Type;

// Output Schema
export const OidcAuthorizeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OidcAuthorizeOutput = typeof OidcAuthorizeOutput.Type;

// The operation
/**
 * OIDC Authorization Endpoint
 *
 * Initiate an OIDC authorization flow.
 *
 * @param response_type - The response type (e.g., "code").
 * @param client_id - The client ID.
 * @param redirect_uri - The redirect URI after authorization.
 * @param scope - The requested scopes (e.g., "openid").
 * @param state - An opaque value for security.
 */
export const oidcAuthorize = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OidcAuthorizeInput,
  outputSchema: OidcAuthorizeOutput,
  errors: [BadRequest] as const,
}));
