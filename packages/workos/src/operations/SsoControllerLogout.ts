import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const SsoControllerLogoutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
  }).pipe(T.Http({ method: "GET", path: "/sso/logout" }));
export type SsoControllerLogoutInput = typeof SsoControllerLogoutInput.Type;

// Output Schema
export const SsoControllerLogoutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SsoControllerLogoutOutput = typeof SsoControllerLogoutOutput.Type;

// The operation
/**
 * Logout Redirect
 *
 * Logout allows to sign out a user from your application by triggering the identity provider sign out flow. This `GET` endpoint should be a redirection, since the identity provider user will be identified in the browser session.
 * Before redirecting to this endpoint, you need to generate a short-lived logout token using the [Logout Authorize](/reference/sso/logout/authorize) endpoint.
 *
 * @param token - The logout token returned from the [Logout Authorize](/reference/sso/logout/authorize) endpoint.
 */
export const SsoControllerLogout = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SsoControllerLogoutInput,
  outputSchema: SsoControllerLogoutOutput,
  errors: [NotFound] as const,
}));
