import * as Schema from "effect/Schema";
import { ProfileSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";

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
    token_type: Schema.optional(Schema.String),
    access_token: Schema.optional(SensitiveOutputString),
    expires_in: Schema.optional(Schema.Number),
    profile: Schema.optional(Schema.suspend(() => ProfileSchema)),
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
