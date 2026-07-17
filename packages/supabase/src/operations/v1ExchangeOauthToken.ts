import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";
import { SensitiveString, SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface V1ExchangeOauthTokenInput {
  grant_type?:
    | "authorization_code"
    | "refresh_token"
    | "urn:ietf:params:oauth:grant-type:jwt-bearer";
  client_id?: string;
  client_secret?: string | Redacted.Redacted<string>;
  code?: string;
  code_verifier?: string;
  redirect_uri?: string;
  refresh_token?: string | Redacted.Redacted<string>;
  assertion?: string;
  resource?: string;
  scope?: string;
}
export const V1ExchangeOauthTokenInput =
  /*@__PURE__*/ Schema.Struct({
    grant_type: Schema.optional(
      Schema.Literals([
        "authorization_code",
        "refresh_token",
        "urn:ietf:params:oauth:grant-type:jwt-bearer",
      ]),
    ),
    client_id: Schema.optional(Schema.String),
    client_secret: Schema.optional(SensitiveString),
    code: Schema.optional(Schema.String),
    code_verifier: Schema.optional(Schema.String),
    redirect_uri: Schema.optional(Schema.String),
    refresh_token: Schema.optional(SensitiveString),
    assertion: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/oauth/token",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<V1ExchangeOauthTokenInput>;

// Output Schema
export interface V1ExchangeOauthTokenOutput {
  access_token: Redacted.Redacted<string>;
  refresh_token?: Redacted.Redacted<string>;
  expires_in: number;
  token_type: "Bearer";
}
export const V1ExchangeOauthTokenOutput =
  /*@__PURE__*/ Schema.Struct({
    access_token: SensitiveOutputString,
    refresh_token: Schema.optional(SensitiveOutputString),
    expires_in: Schema.Number,
    token_type: Schema.Literals(["Bearer"]),
  }) as unknown as Schema.Codec<V1ExchangeOauthTokenOutput>;

// The operation
/**
 * [Beta] Exchange auth code for user's access and refresh token
 *
 * Supports `authorization_code`, `refresh_token`, and `urn:ietf:params:oauth:grant-type:jwt-bearer` grant types. The `jwt-bearer` grant type (IDJAG — identity-directed JWT assertion) is in beta and available on Team and Enterprise plans only.
 */
export const v1ExchangeOauthToken = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1ExchangeOauthTokenInput,
  outputSchema: V1ExchangeOauthTokenOutput,
  errors: [BadRequest, Forbidden] as const,
}));
