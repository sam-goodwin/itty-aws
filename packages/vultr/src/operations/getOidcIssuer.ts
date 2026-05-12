import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetOidcIssuerInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  issuer_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/oidc/issuer/{issuer_id}" }));
export type GetOidcIssuerInput = typeof GetOidcIssuerInput.Type;

// Output Schema
export const GetOidcIssuerOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  issuer: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      source: Schema.optional(Schema.String),
      uri: Schema.optional(Schema.String),
      kid: Schema.optional(Schema.String),
      kty: Schema.optional(Schema.String),
      n: Schema.optional(Schema.String),
      e: Schema.optional(Schema.String),
      alg: Schema.optional(Schema.String),
      use: Schema.optional(Schema.String),
      jwks_fetched_at: Schema.optional(Schema.String),
      jwks_expires_at: Schema.optional(Schema.String),
    }),
  ),
});
export type GetOidcIssuerOutput = typeof GetOidcIssuerOutput.Type;

// The operation
/**
 * Get OIDC Issuer
 *
 * Get information about an OIDC Issuer.
 *
 * @param issuer_id - The OIDC Issuer ID.
 */
export const getOidcIssuer = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOidcIssuerInput,
  outputSchema: GetOidcIssuerOutput,
  errors: [Forbidden, NotFound] as const,
}));
