import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DomainsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  id: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  is_verified: Schema.optional(Schema.Boolean),
  verified_at: Schema.optional(Schema.NullOr(Schema.String)),
  verification_challenge: Schema.optional(Schema.String),
  jit_provisioning_enabled: Schema.optional(Schema.Boolean),
  sso_enforcement: Schema.optional(Schema.String),
  has_saml: Schema.optional(Schema.Boolean),
  saml_entity_id: Schema.optional(Schema.NullOr(Schema.String)),
  saml_acs_url: Schema.optional(Schema.NullOr(Schema.String)),
  saml_x509_cert: Schema.optional(Schema.NullOr(Schema.String)),
  has_scim: Schema.optional(Schema.Boolean),
  scim_enabled: Schema.optional(Schema.Boolean),
  scim_base_url: Schema.optional(Schema.NullOr(Schema.String)),
  scim_bearer_token: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/api/organizations/{organization_id}/domains/",
  }),
);
export type DomainsCreateInput = typeof DomainsCreateInput.Type;

// Output Schema
export const DomainsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  is_verified: Schema.optional(Schema.Boolean),
  verified_at: Schema.optional(Schema.NullOr(Schema.String)),
  verification_challenge: Schema.optional(Schema.String),
  jit_provisioning_enabled: Schema.optional(Schema.Boolean),
  sso_enforcement: Schema.optional(Schema.String),
  has_saml: Schema.optional(Schema.Boolean),
  saml_entity_id: Schema.optional(Schema.NullOr(Schema.String)),
  saml_acs_url: Schema.optional(Schema.NullOr(Schema.String)),
  saml_x509_cert: Schema.optional(Schema.NullOr(Schema.String)),
  has_scim: Schema.optional(Schema.Boolean),
  scim_enabled: Schema.optional(Schema.Boolean),
  scim_base_url: Schema.optional(Schema.NullOr(Schema.String)),
  scim_bearer_token: Schema.optional(Schema.NullOr(Schema.String)),
});
export type DomainsCreateOutput = typeof DomainsCreateOutput.Type;

// The operation
export const domainsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainsCreateInput,
  outputSchema: DomainsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
