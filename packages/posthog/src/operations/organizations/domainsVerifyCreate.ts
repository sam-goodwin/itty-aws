import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface DomainsVerifyCreateInput {
  id: string;
  organization_id: string;
  domain?: string;
  is_verified?: boolean;
  verified_at?: string | null;
  verification_challenge?: string;
  jit_provisioning_enabled?: boolean;
  sso_enforcement?: string;
  has_saml?: boolean;
  saml_entity_id?: string | null;
  saml_acs_url?: string | null;
  saml_x509_cert?: string | null;
  has_scim?: boolean;
  scim_enabled?: boolean;
  scim_base_url?: string | null;
  scim_bearer_token?: string | null;
  has_id_jag?: boolean;
  id_jag_issuer_url?: string | null;
  id_jag_jwks_url?: string | null;
  id_jag_allowed_clients?: string[];
}
export const DomainsVerifyCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
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
    has_id_jag: Schema.optional(Schema.Boolean),
    id_jag_issuer_url: Schema.optional(Schema.NullOr(Schema.String)),
    id_jag_jwks_url: Schema.optional(Schema.NullOr(Schema.String)),
    id_jag_allowed_clients: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/organizations/{organization_id}/domains/{id}/verify/",
    }),
  ) as unknown as Schema.Codec<DomainsVerifyCreateInput>;

// Output Schema
export type DomainsVerifyCreateOutput = void;
export const DomainsVerifyCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainsVerifyCreateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this domain.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const domainsVerifyCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DomainsVerifyCreateInput,
  outputSchema: DomainsVerifyCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
