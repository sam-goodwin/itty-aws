import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ConnectionsControllerFindInput {
  id: string;
}
export const ConnectionsControllerFindInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/connections/{id}" }),
  ) as unknown as Schema.Codec<ConnectionsControllerFindInput>;

// Output Schema
export interface ConnectionsControllerFindOutput {
  object?: string;
  id?: string;
  organization_id?: string;
  connection_type?:
    | "Pending"
    | "ADFSSAML"
    | "AdpOidc"
    | "AppleOAuth"
    | "Auth0Migration"
    | "Auth0SAML"
    | "AzureSAML"
    | "BitbucketOAuth"
    | "CasSAML"
    | "ClassLinkSAML"
    | "CleverOIDC"
    | "CloudflareSAML"
    | "CyberArkSAML"
    | "DiscordOAuth"
    | "DuoSAML"
    | "EntraIdOIDC"
    | "GenericOIDC"
    | "GenericSAML"
    | "GitHubOAuth"
    | "GitLabOAuth"
    | "GoogleOAuth"
    | "GoogleOIDC"
    | "GoogleSAML"
    | "IntuitOAuth"
    | "JumpCloudSAML"
    | "KeycloakSAML"
    | "LastPassSAML"
    | "LinkedInOAuth"
    | "LoginGovOidc"
    | "MagicLink"
    | "MicrosoftOAuth"
    | "MiniOrangeSAML"
    | "NetIqSAML"
    | "OktaOIDC"
    | "OktaSAML"
    | "OneLoginSAML"
    | "OracleSAML"
    | "PingFederateSAML"
    | "PingOneSAML"
    | "RipplingSAML"
    | "SalesforceSAML"
    | "ShibbolethGenericSAML"
    | "ShibbolethSAML"
    | "SimpleSamlPhpSAML"
    | "SalesforceOAuth"
    | "SlackOAuth"
    | "TestIdp"
    | "VercelMarketplaceOAuth"
    | "VercelOAuth"
    | "VMwareSAML"
    | "XeroOAuth";
  name?: string;
  state?:
    | "requires_type"
    | "draft"
    | "active"
    | "validating"
    | "inactive"
    | "deleting";
  status?: "linked" | "unlinked";
  domains?: ReadonlyArray<{ id: string; object: string; domain: string }>;
  options?: { signing_cert: string | null };
  created_at?: string;
  updated_at?: string;
}
export const ConnectionsControllerFindOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    connection_type: Schema.optional(
      Schema.Literals([
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
    ),
    name: Schema.optional(Schema.String),
    state: Schema.optional(
      Schema.Literals([
        "requires_type",
        "draft",
        "active",
        "validating",
        "inactive",
        "deleting",
      ]),
    ),
    status: Schema.optional(Schema.Literals(["linked", "unlinked"])),
    domains: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
          object: Schema.String,
          domain: Schema.String,
        }),
      ),
    ),
    options: Schema.optional(
      Schema.Struct({
        signing_cert: Schema.NullOr(Schema.String),
      }),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConnectionsControllerFindOutput>;

// The operation
/**
 * Get a Connection
 *
 * Get the details of an existing connection.
 *
 * @param id - Unique identifier for the Connection.
 */
export const ConnectionsControllerFind = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectionsControllerFindInput,
  outputSchema: ConnectionsControllerFindOutput,
  errors: [Forbidden, NotFound] as const,
}));
