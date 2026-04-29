import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const UserlandSessionsControllerAuthenticateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/user_management/authenticate" }),
  );
export type UserlandSessionsControllerAuthenticateInput =
  typeof UserlandSessionsControllerAuthenticateInput.Type;

// Output Schema
export const UserlandSessionsControllerAuthenticateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user: Schema.Struct({
      object: Schema.String,
      id: Schema.String,
      first_name: Schema.NullOr(Schema.String),
      last_name: Schema.NullOr(Schema.String),
      profile_picture_url: Schema.NullOr(Schema.String),
      email: Schema.String,
      email_verified: Schema.Boolean,
      external_id: Schema.NullOr(Schema.String),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      last_sign_in_at: Schema.NullOr(Schema.String),
      locale: Schema.optional(Schema.NullOr(Schema.String)),
      created_at: Schema.String,
      updated_at: Schema.String,
    }),
    organization_id: Schema.optional(Schema.String),
    authkit_authorization_code: Schema.optional(Schema.String),
    access_token: SensitiveString,
    refresh_token: SensitiveString,
    authentication_method: Schema.optional(
      Schema.Literals([
        "SSO",
        "Password",
        "Passkey",
        "AppleOAuth",
        "BitbucketOAuth",
        "CrossAppAuth",
        "DiscordOAuth",
        "ExternalAuth",
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
        "MagicAuth",
        "Impersonation",
        "MigratedSession",
      ]),
    ),
    impersonator: Schema.optional(
      Schema.Struct({
        email: Schema.String,
        reason: Schema.NullOr(Schema.String),
      }),
    ),
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
export type UserlandSessionsControllerAuthenticateOutput =
  typeof UserlandSessionsControllerAuthenticateOutput.Type;

// The operation
/**
 * Authenticate
 *
 * Authenticate a user with a specified [authentication method](/reference/authkit/authentication).
 */
export const UserlandSessionsControllerAuthenticate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandSessionsControllerAuthenticateInput,
    outputSchema: UserlandSessionsControllerAuthenticateOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
