import * as Schema from "effect/Schema";
import { UserlandUserSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";

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
    user: Schema.optional(Schema.suspend(() => UserlandUserSchema)),
    organization_id: Schema.optional(Schema.String),
    authkit_authorization_code: Schema.optional(Schema.String),
    access_token: Schema.optional(SensitiveOutputString),
    refresh_token: Schema.optional(SensitiveOutputString),
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
        refresh_token: SensitiveOutputString,
        access_token: SensitiveOutputString,
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
