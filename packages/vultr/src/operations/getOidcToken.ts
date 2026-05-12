import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetOidcTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v2/oidc/token" }));
export type GetOidcTokenInput = typeof GetOidcTokenInput.Type;

// Output Schema
export const GetOidcTokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type GetOidcTokenOutput = typeof GetOidcTokenOutput.Type;

// The operation
/**
 * Get OIDC Token Info
 *
 * Get information about the current OIDC token.
 */
export const getOidcToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOidcTokenInput,
  outputSchema: GetOidcTokenOutput,
}));
