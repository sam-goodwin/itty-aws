import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DomainsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/organizations/{organization_id}/domains/",
  }),
);
export type DomainsListInput = typeof DomainsListInput.Type;

// Output Schema
export const DomainsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      domain: Schema.String,
      is_verified: Schema.Boolean,
      verified_at: Schema.NullOr(Schema.String),
      verification_challenge: Schema.String,
      jit_provisioning_enabled: Schema.optional(Schema.Boolean),
      sso_enforcement: Schema.optional(Schema.String),
      has_saml: Schema.Boolean,
      saml_entity_id: Schema.optional(Schema.NullOr(Schema.String)),
      saml_acs_url: Schema.optional(Schema.NullOr(Schema.String)),
      saml_x509_cert: Schema.optional(Schema.NullOr(Schema.String)),
      has_scim: Schema.Boolean,
      scim_enabled: Schema.optional(Schema.Boolean),
      scim_base_url: Schema.NullOr(Schema.String),
      scim_bearer_token: Schema.NullOr(Schema.String),
    }),
  ),
});
export type DomainsListOutput = typeof DomainsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 */
export const domainsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainsListInput,
  outputSchema: DomainsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
