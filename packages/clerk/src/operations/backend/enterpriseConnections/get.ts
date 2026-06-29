import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { PaymentRequired, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const GetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterprise_connection_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/enterprise_connections/{enterprise_connection_id}",
  }),
);
export type GetInput = typeof GetInput.Type;

// Output Schema
export const GetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetOutput = typeof GetOutput.Type;

// The operation
/**
 * Retrieve an enterprise connection
 *
 * Fetches the enterprise connection whose ID matches the provided `enterprise_connection_id` in the path.
 *
 * @param enterprise_connection_id - The ID of the enterprise connection
 */
export const get = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInput,
  outputSchema: GetOutput,
  errors: [PaymentRequired, Forbidden, NotFound] as const,
}));
