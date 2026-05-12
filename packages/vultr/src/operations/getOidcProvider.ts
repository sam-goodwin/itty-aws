import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetOidcProviderInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/oidc/provider/{provider_id}" }));
export type GetOidcProviderInput = typeof GetOidcProviderInput.Type;

// Output Schema
export const GetOidcProviderOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      issuer_id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
    }),
  ),
});
export type GetOidcProviderOutput = typeof GetOidcProviderOutput.Type;

// The operation
/**
 * Get OIDC Provider
 *
 * Get information about an OIDC Provider.
 *
 * @param provider_id - The OIDC Provider ID.
 */
export const getOidcProvider = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOidcProviderInput,
  outputSchema: GetOidcProviderOutput,
  errors: [Forbidden, NotFound] as const,
}));
