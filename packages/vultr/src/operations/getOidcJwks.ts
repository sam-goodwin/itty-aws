import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetOidcJwksInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v2/oidc/jwks" }));
export type GetOidcJwksInput = typeof GetOidcJwksInput.Type;

// Output Schema
export const GetOidcJwksOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keys: Schema.optional(Schema.Array(Schema.Unknown)),
});
export type GetOidcJwksOutput = typeof GetOidcJwksOutput.Type;

// The operation
/**
 * Get OIDC JWKS
 *
 * Get the JSON Web Key Set (JWKS) for OIDC token verification.
 */
export const getOidcJwks = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOidcJwksInput,
  outputSchema: GetOidcJwksOutput,
}));
