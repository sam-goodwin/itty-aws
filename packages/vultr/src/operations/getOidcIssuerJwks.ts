import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetOidcIssuerJwksInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    issuer_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/v2/oidc/issuer/{issuer_id}/jwks" }));
export type GetOidcIssuerJwksInput = typeof GetOidcIssuerJwksInput.Type;

// Output Schema
export const GetOidcIssuerJwksOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keys: Schema.optional(Schema.Array(Schema.Unknown)),
  });
export type GetOidcIssuerJwksOutput = typeof GetOidcIssuerJwksOutput.Type;

// The operation
/**
 * Get OIDC Issuer JWKS
 *
 * Get the JSON Web Key Set (JWKS) for an OIDC Issuer.
 *
 * @param issuer_id - The OIDC Issuer ID.
 */
export const getOidcIssuerJwks = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOidcIssuerJwksInput,
  outputSchema: GetOidcIssuerJwksOutput,
  errors: [NotFound] as const,
}));
