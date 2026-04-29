import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DomainsScimTokenCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      method: "POST",
      path: "/api/organizations/{organization_id}/domains/{id}/scim/token/",
    }),
  );
export type DomainsScimTokenCreateInput =
  typeof DomainsScimTokenCreateInput.Type;

// Output Schema
export const DomainsScimTokenCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DomainsScimTokenCreateOutput =
  typeof DomainsScimTokenCreateOutput.Type;

// The operation
/**
 * Regenerate SCIM bearer token.
 *
 * @param id - A UUID string identifying this domain.
 */
export const domainsScimTokenCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsScimTokenCreateInput,
    outputSchema: DomainsScimTokenCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
