import * as Schema from "effect/Schema";
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
export const UserlandSessionsControllerAuthenticate0Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/user_management/authenticate" }),
  );
export type UserlandSessionsControllerAuthenticate0Input =
  typeof UserlandSessionsControllerAuthenticate0Input.Type;

// Output Schema
export const UserlandSessionsControllerAuthenticate0Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user: Schema.optional(
      Schema.Struct({
        object: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        first_name: Schema.optional(Schema.NullOr(Schema.String)),
        last_name: Schema.optional(Schema.NullOr(Schema.String)),
        name: Schema.optional(Schema.NullOr(Schema.String)),
        profile_picture_url: Schema.optional(Schema.NullOr(Schema.String)),
        email: Schema.optional(Schema.String),
        email_verified: Schema.optional(Schema.Boolean),
        external_id: Schema.optional(Schema.NullOr(Schema.String)),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        last_sign_in_at: Schema.optional(Schema.NullOr(Schema.String)),
        locale: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
      }),
    ),
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
export type UserlandSessionsControllerAuthenticate0Output =
  typeof UserlandSessionsControllerAuthenticate0Output.Type;

// The operation
/**
 * Authenticate
 *
 * Authenticate a user with a specified [authentication method](/reference/authkit/authentication).
 */
export const UserlandSessionsControllerAuthenticate0 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandSessionsControllerAuthenticate0Input,
    outputSchema: UserlandSessionsControllerAuthenticate0Output,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
