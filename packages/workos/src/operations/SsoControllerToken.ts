import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const SsoControllerTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_id: Schema.String,
    client_secret: Schema.String,
    code: Schema.String,
    grant_type: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/sso/token" }));
export type SsoControllerTokenInput = typeof SsoControllerTokenInput.Type;

// Output Schema
export const SsoControllerTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token_type: Schema.String,
    access_token: SensitiveString,
    expires_in: Schema.Number,
    profile: Schema.Struct({
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
    }),
    oauth_tokens: Schema.optional(
      Schema.Struct({
        provider: Schema.String,
        refresh_token: SensitiveString,
        access_token: SensitiveString,
        expires_at: Schema.Number,
        scopes: Schema.Array(Schema.String),
      }),
    ),
  });
export type SsoControllerTokenOutput = typeof SsoControllerTokenOutput.Type;

// The operation
/**
 * Get a Profile and Token
 *
 * Get an access token along with the user [Profile](/reference/sso/profile) using the code passed to your [Redirect URI](/reference/sso/get-authorization-url/redirect-uri).
 *
 * @param client_id - The client ID of the WorkOS environment.
 * @param client_secret - The client secret of the WorkOS environment.
 * @param code - The authorization code received from the authorization callback.
 * @param grant_type - The grant type for the token request.
 */
export const SsoControllerToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SsoControllerTokenInput,
  outputSchema: SsoControllerTokenOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
