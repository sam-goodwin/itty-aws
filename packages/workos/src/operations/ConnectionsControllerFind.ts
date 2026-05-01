import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ConnectionsControllerFindInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/connections/{id}" }));
export type ConnectionsControllerFindInput =
  typeof ConnectionsControllerFindInput.Type;

// Output Schema
export const ConnectionsControllerFindOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ConnectionsControllerFindOutput =
  typeof ConnectionsControllerFindOutput.Type;

// The operation
/**
 * Get a Connection
 *
 * Get the details of an existing connection.
 *
 * @param id - Unique identifier for the Connection.
 */
export const ConnectionsControllerFind = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectionsControllerFindInput,
    outputSchema: ConnectionsControllerFindOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
