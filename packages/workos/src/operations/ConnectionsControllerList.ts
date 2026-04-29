import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ConnectionsControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
    connection_type: Schema.optional(
      Schema.Literals([
        "ADFSSAML",
        "AdpOidc",
        "AppleOAuth",
        "Auth0SAML",
        "AzureSAML",
        "BitbucketOAuth",
        "CasSAML",
        "CloudflareSAML",
        "ClassLinkSAML",
        "CleverOIDC",
        "CyberArkSAML",
        "DiscordOAuth",
        "DuoSAML",
        "EntraIdOIDC",
        "GenericOIDC",
        "GenericSAML",
        "GithubOAuth",
        "GitLabOAuth",
        "GoogleOAuth",
        "GoogleOIDC",
        "GoogleSAML",
        "IntuitOAuth",
        "JumpCloudSAML",
        "KeycloakSAML",
        "LastPassSAML",
        "LinkedInOAuth",
        "LoginGovOidc",
        "MagicLink",
        "MicrosoftOAuth",
        "MiniOrangeSAML",
        "NetIqSAML",
        "OktaOIDC",
        "OktaSAML",
        "OneLoginSAML",
        "OracleSAML",
        "PingFederateSAML",
        "PingOneSAML",
        "RipplingSAML",
        "SalesforceSAML",
        "ShibbolethGenericSAML",
        "ShibbolethSAML",
        "SimpleSamlPhpSAML",
        "SalesforceOAuth",
        "SlackOAuth",
        "VercelMarketplaceOAuth",
        "VercelOAuth",
        "VMwareSAML",
        "XeroOAuth",
      ]),
    ),
    domain: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/connections" }));
export type ConnectionsControllerListInput =
  typeof ConnectionsControllerListInput.Type;

// Output Schema
export const ConnectionsControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        organization_id: Schema.optional(Schema.String),
        connection_type: Schema.Literals([
          "Pending",
          "ADFSSAML",
          "AdpOidc",
          "AppleOAuth",
          "Auth0Migration",
          "Auth0SAML",
          "AzureSAML",
          "BitbucketOAuth",
          "CasSAML",
          "ClassLinkSAML",
          "CleverOIDC",
          "CloudflareSAML",
          "CyberArkSAML",
          "DiscordOAuth",
          "DuoSAML",
          "EntraIdOIDC",
          "GenericOIDC",
          "GenericSAML",
          "GitHubOAuth",
          "GitLabOAuth",
          "GoogleOAuth",
          "GoogleOIDC",
          "GoogleSAML",
          "IntuitOAuth",
          "JumpCloudSAML",
          "KeycloakSAML",
          "LastPassSAML",
          "LinkedInOAuth",
          "LoginGovOidc",
          "MagicLink",
          "MicrosoftOAuth",
          "MiniOrangeSAML",
          "NetIqSAML",
          "OktaOIDC",
          "OktaSAML",
          "OneLoginSAML",
          "OracleSAML",
          "PingFederateSAML",
          "PingOneSAML",
          "RipplingSAML",
          "SalesforceSAML",
          "ShibbolethGenericSAML",
          "ShibbolethSAML",
          "SimpleSamlPhpSAML",
          "SalesforceOAuth",
          "SlackOAuth",
          "TestIdp",
          "VercelMarketplaceOAuth",
          "VercelOAuth",
          "VMwareSAML",
          "XeroOAuth",
        ]),
        name: Schema.String,
        state: Schema.Literals([
          "requires_type",
          "draft",
          "active",
          "validating",
          "inactive",
          "deleting",
        ]),
        status: Schema.Literals(["linked", "unlinked"]),
        domains: Schema.Array(
          Schema.Struct({
            id: Schema.String,
            object: Schema.String,
            domain: Schema.String,
          }),
        ),
        options: Schema.optional(
          Schema.Struct({
            signing_cert: Schema.NullOr(Schema.String),
          }),
        ),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  });
export type ConnectionsControllerListOutput =
  typeof ConnectionsControllerListOutput.Type;

// The operation
/**
 * List Connections
 *
 * Get a list of all of your existing connections matching the criteria specified.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time.
 * @param connection_type - Filter Connections by their type.
 * @param domain - Filter Connections by their associated domain.
 * @param organization_id - Filter Connections by their associated organization.
 * @param search - Searchable text to match against Connection names.
 */
export const ConnectionsControllerList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectionsControllerListInput,
    outputSchema: ConnectionsControllerListOutput,
    errors: [Forbidden, UnprocessableEntity] as const,
  }),
);
