import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  PaymentRequired,
  Forbidden,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const ListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  organization_id: Schema.optional(Schema.String),
  active: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "GET", path: "/enterprise_connections" }));
export type ListInput = typeof ListInput.Type;

// Output Schema
export const ListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  total_count: Schema.Number,
});
export type ListOutput = typeof ListOutput.Type;

// The operation
/**
 * List enterprise connections
 *
 * Returns the list of enterprise connections for the instance.
 * Results can be paginated using the optional `limit` and `offset` query parameters.
 *
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 * @param organization_id - Filter enterprise connections by organization ID
 * @param active - Filter by active status. If true, only active connections are returned. If false, only inactive connections are returned. If omitted, all connections are returned.
 */
export const list = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListInput,
  outputSchema: ListOutput,
  errors: [PaymentRequired, Forbidden, UnprocessableEntity] as const,
}));
