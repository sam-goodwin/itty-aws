import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const SsoControllerGetProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/sso/profile" }),
  );
export type SsoControllerGetProfileInput =
  typeof SsoControllerGetProfileInput.Type;

// Output Schema
export const SsoControllerGetProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    organization_id: Schema.NullOr(Schema.String),
    connection_id: Schema.String,
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
    idp_id: Schema.String,
    email: Schema.String,
    first_name: Schema.NullOr(Schema.String),
    last_name: Schema.NullOr(Schema.String),
    role: Schema.optional(Schema.Unknown),
    roles: Schema.optional(Schema.Unknown),
    groups: Schema.optional(Schema.Array(Schema.String)),
    custom_attributes: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    raw_attributes: Schema.Record(Schema.String, Schema.Unknown),
  });
export type SsoControllerGetProfileOutput =
  typeof SsoControllerGetProfileOutput.Type;

// The operation
/**
 * Get a User Profile
 *
 * Exchange an access token for a user's [Profile](/reference/sso/profile). Because this profile is returned in the [Get a Profile and Token endpoint](/reference/sso/profile/get-profile-and-token) your application usually does not need to call this endpoint. It is available for any authentication flows that require an additional endpoint to retrieve a user's profile.
 */
export const SsoControllerGetProfile = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SsoControllerGetProfileInput,
    outputSchema: SsoControllerGetProfileOutput,
    errors: [NotFound] as const,
  }),
);
