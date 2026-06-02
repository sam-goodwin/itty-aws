import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";
import { SensitiveNullableString } from "../../sensitive.ts";

// Input Schema
export const UpdateEnterpriseConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterprise_connection_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    domains: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    active: Schema.optional(Schema.NullOr(Schema.Boolean)),
    sync_user_attributes: Schema.optional(Schema.NullOr(Schema.Boolean)),
    disable_additional_identifications: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    allow_organization_account_linking: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    saml: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          name: Schema.optional(Schema.NullOr(Schema.String)),
          idp_entity_id: Schema.optional(Schema.NullOr(Schema.String)),
          idp_sso_url: Schema.optional(Schema.NullOr(Schema.String)),
          idp_certificate: Schema.optional(Schema.NullOr(Schema.String)),
          idp_metadata_url: Schema.optional(Schema.NullOr(Schema.String)),
          idp_metadata: Schema.optional(Schema.NullOr(Schema.String)),
          attribute_mapping: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                user_id: Schema.optional(Schema.NullOr(Schema.String)),
                email_address: Schema.optional(Schema.NullOr(Schema.String)),
                first_name: Schema.optional(Schema.NullOr(Schema.String)),
                last_name: Schema.optional(Schema.NullOr(Schema.String)),
              }),
            ),
          ),
          allow_subdomains: Schema.optional(Schema.NullOr(Schema.Boolean)),
          allow_idp_initiated: Schema.optional(Schema.NullOr(Schema.Boolean)),
          force_authn: Schema.optional(Schema.NullOr(Schema.Boolean)),
        }),
      ),
    ),
    oidc: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          client_id: Schema.optional(Schema.NullOr(Schema.String)),
          client_secret: Schema.optional(SensitiveNullableString),
          discovery_url: Schema.optional(Schema.NullOr(Schema.String)),
          auth_url: Schema.optional(Schema.NullOr(Schema.String)),
          token_url: Schema.optional(Schema.NullOr(Schema.String)),
          user_info_url: Schema.optional(Schema.NullOr(Schema.String)),
          requires_pkce: Schema.optional(Schema.NullOr(Schema.Boolean)),
        }),
      ),
    ),
    custom_attributes: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            key: Schema.String,
            sso_path: Schema.optional(Schema.String),
            scim_path: Schema.optional(Schema.String),
          }),
        ),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/enterprise_connections/{enterprise_connection_id}",
    }),
  );
export type UpdateEnterpriseConnectionInput =
  typeof UpdateEnterpriseConnectionInput.Type;

// Output Schema
export const UpdateEnterpriseConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    provider: Schema.String,
    logo_public_url: Schema.optional(Schema.NullOr(Schema.String)),
    active: Schema.Boolean,
    domains: Schema.Array(Schema.String),
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    sync_user_attributes: Schema.optional(Schema.Boolean),
    disable_additional_identifications: Schema.optional(Schema.Boolean),
    allow_organization_account_linking: Schema.optional(Schema.Boolean),
    custom_attributes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          key: Schema.String,
          sso_path: Schema.optional(Schema.String),
          scim_path: Schema.optional(Schema.String),
        }),
      ),
    ),
    saml_connection: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          idp_entity_id: Schema.optional(Schema.NullOr(Schema.String)),
          idp_sso_url: Schema.optional(Schema.NullOr(Schema.String)),
          idp_metadata_url: Schema.optional(Schema.NullOr(Schema.String)),
          acs_url: Schema.optional(Schema.NullOr(Schema.String)),
          sp_entity_id: Schema.optional(Schema.NullOr(Schema.String)),
          sp_metadata_url: Schema.optional(Schema.NullOr(Schema.String)),
          active: Schema.optional(Schema.Boolean),
          allow_idp_initiated: Schema.optional(Schema.Boolean),
          allow_subdomains: Schema.optional(Schema.Boolean),
          force_authn: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    oauth_config: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          provider_key: Schema.optional(Schema.String),
          client_id: Schema.optional(Schema.NullOr(Schema.String)),
          discovery_url: Schema.optional(Schema.NullOr(Schema.String)),
          auth_url: Schema.optional(Schema.NullOr(Schema.String)),
          token_url: Schema.optional(Schema.NullOr(Schema.String)),
          user_info_url: Schema.optional(Schema.NullOr(Schema.String)),
          requires_pkce: Schema.optional(Schema.Boolean),
          logo_public_url: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.Number),
          updated_at: Schema.optional(Schema.Number),
        }),
      ),
    ),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type UpdateEnterpriseConnectionOutput =
  typeof UpdateEnterpriseConnectionOutput.Type;

// The operation
/**
 * Update an enterprise connection
 *
 * Updates the enterprise connection whose ID matches the provided `enterprise_connection_id` in the path.
 * When enabling the connection (setting `active` to true), any existing verified organization domains that match the connection's domains (e.g. used for enrollment modes like automatic invitation) may be deleted so the connection can be enabled.
 *
 * @param enterprise_connection_id - The ID of the enterprise connection to update
 */
export const UpdateEnterpriseConnection = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateEnterpriseConnectionInput,
    outputSchema: UpdateEnterpriseConnectionOutput,
    errors: [
      BadRequest,
      PaymentRequired,
      Forbidden,
      NotFound,
      UnprocessableEntity,
    ] as const,
  }),
);
