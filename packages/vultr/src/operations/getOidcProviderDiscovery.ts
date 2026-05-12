import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetOidcProviderDiscoveryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v2/oidc/provider/{provider_id}/.well-known/openid-configuration",
    }),
  );
export type GetOidcProviderDiscoveryInput =
  typeof GetOidcProviderDiscoveryInput.Type;

// Output Schema
export const GetOidcProviderDiscoveryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type GetOidcProviderDiscoveryOutput =
  typeof GetOidcProviderDiscoveryOutput.Type;

// The operation
/**
 * Get OIDC Provider Discovery
 *
 * Get the OpenID Connect discovery document for an OIDC Provider.
 *
 * @param provider_id - The OIDC Provider ID.
 */
export const getOidcProviderDiscovery = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetOidcProviderDiscoveryInput,
    outputSchema: GetOidcProviderDiscoveryOutput,
    errors: [NotFound] as const,
  }),
);
