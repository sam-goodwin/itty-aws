import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const SsoControllerLogoutAuthorizeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profile_id: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/sso/logout/authorize" }));
export type SsoControllerLogoutAuthorizeInput =
  typeof SsoControllerLogoutAuthorizeInput.Type;

// Output Schema
export const SsoControllerLogoutAuthorizeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logout_url: Schema.String,
    logout_token: Schema.String,
  });
export type SsoControllerLogoutAuthorizeOutput =
  typeof SsoControllerLogoutAuthorizeOutput.Type;

// The operation
/**
 * Logout Authorize
 *
 * You should call this endpoint from your server to generate a logout token which is required for the [Logout Redirect](/reference/sso/logout) endpoint.
 */
export const SsoControllerLogoutAuthorize =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SsoControllerLogoutAuthorizeInput,
    outputSchema: SsoControllerLogoutAuthorizeOutput,
    errors: [BadRequest, NotFound] as const,
  }));
