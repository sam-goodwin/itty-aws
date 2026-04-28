import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const DomainsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  organization_id: Schema.String.pipe(T.PathParam()),
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
}).pipe(
  T.Http({
    method: "PUT",
    path: "/api/organizations/{organization_id}/domains/{id}/",
  }),
);
export type DomainsUpdateInput = typeof DomainsUpdateInput.Type;

// Output Schema
export const DomainsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type DomainsUpdateOutput = typeof DomainsUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this domain.
 */
export const domainsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainsUpdateInput,
  outputSchema: DomainsUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
