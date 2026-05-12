import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetOidcUserinfoInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v2/oidc/userinfo" }));
export type GetOidcUserinfoInput = typeof GetOidcUserinfoInput.Type;

// Output Schema
export const GetOidcUserinfoOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type GetOidcUserinfoOutput = typeof GetOidcUserinfoOutput.Type;

// The operation
/**
 * Get OIDC User Info
 *
 * Get information about the authenticated user from OIDC.
 */
export const getOidcUserinfo = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOidcUserinfoInput,
  outputSchema: GetOidcUserinfoOutput,
}));
