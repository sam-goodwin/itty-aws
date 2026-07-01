import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface UserlandSsoControllerAuthorizeInput {
  code_challenge_method?: string;
  code_challenge?: string;
  domain_hint?: string;
  connection_id?: string;
  provider_query_params?: string;
  provider_scopes?: string;
  invitation_token?: string;
  max_age?: number;
  screen_hint?: "sign-up" | "sign-in";
  login_hint?: string;
  provider?:
    | "authkit"
    | "AppleOAuth"
    | "BitbucketOAuth"
    | "GitHubOAuth"
    | "GitLabOAuth"
    | "GoogleOAuth"
    | "IntuitOAuth"
    | "LinkedInOAuth"
    | "MicrosoftOAuth"
    | "SalesforceOAuth"
    | "SlackOAuth"
    | "VercelMarketplaceOAuth"
    | "VercelOAuth"
    | "XeroOAuth";
  prompt?: string;
  state?: string;
  organization_id?: string;
  response_type: string;
  redirect_uri: string;
  client_id: string;
}
export const UserlandSsoControllerAuthorizeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code_challenge_method: Schema.optional(Schema.String),
    code_challenge: Schema.optional(Schema.String),
    domain_hint: Schema.optional(Schema.String),
    connection_id: Schema.optional(Schema.String),
    provider_query_params: Schema.optional(Schema.String),
    provider_scopes: Schema.optional(Schema.String),
    invitation_token: Schema.optional(Schema.String),
    max_age: Schema.optional(Schema.Number),
    screen_hint: Schema.optional(Schema.Literals(["sign-up", "sign-in"])),
    login_hint: Schema.optional(Schema.String),
    provider: Schema.optional(
      Schema.Literals([
        "authkit",
        "AppleOAuth",
        "BitbucketOAuth",
        "GitHubOAuth",
        "GitLabOAuth",
        "GoogleOAuth",
        "IntuitOAuth",
        "LinkedInOAuth",
        "MicrosoftOAuth",
        "SalesforceOAuth",
        "SlackOAuth",
        "VercelMarketplaceOAuth",
        "VercelOAuth",
        "XeroOAuth",
      ]),
    ),
    prompt: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    response_type: Schema.String,
    redirect_uri: Schema.String,
    client_id: Schema.String,
  }).pipe(
    T.Http({ method: "GET", path: "/user_management/authorize" }),
  ) as unknown as Schema.Codec<UserlandSsoControllerAuthorizeInput>;

// Output Schema
export type UserlandSsoControllerAuthorizeOutput = void;
export const UserlandSsoControllerAuthorizeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UserlandSsoControllerAuthorizeOutput>;

// The operation
/**
 * Get an authorization URL
 *
 * Generates an OAuth 2.0 authorization URL to authenticate a user with AuthKit or SSO.
 *
 * @param code_challenge_method - The only valid PKCE code challenge method is `"S256"`. Required when specifying a `code_challenge`.
 * @param code_challenge - Code challenge derived from the code verifier used for the PKCE flow.
 * @param domain_hint - A domain hint for SSO connection lookup.
 * @param connection_id - The ID of an SSO connection to use for authentication.
 * @param provider_query_params - Key/value pairs of query parameters to pass to the OAuth provider.
 * @param provider_scopes - Additional OAuth scopes to request from the identity provider.
 * @param invitation_token - A token representing a user invitation to redeem during authentication.
 * @param max_age - Maximum allowable elapsed time, in seconds, since the user last actively authenticated. If the last authentication is older than this value, the user is prompted to re-authenticate; a value of `0` forces re-authentication. Only supported when the provider is `authkit`.
 * @param screen_hint - Used to specify which screen to display when the provider is `authkit`.
 * @param login_hint - A hint to the authorization server about the login identifier the user might use.
 * @param provider - The OAuth provider to authenticate with (e.g., GoogleOAuth, MicrosoftOAuth, GitHubOAuth).
 * @param prompt - Controls the authentication flow behavior for the user.
 * @param state - An opaque value used to maintain state between the request and the callback.
 * @param organization_id - The ID of the organization to authenticate the user against.
 * @param response_type - The response type of the application.
 * @param redirect_uri - The callback URI where the authorization code will be sent after authentication.
 * @param client_id - The unique identifier of the WorkOS environment client.
 */
export const UserlandSsoControllerAuthorize =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandSsoControllerAuthorizeInput,
    outputSchema: UserlandSsoControllerAuthorizeOutput,
  }));
