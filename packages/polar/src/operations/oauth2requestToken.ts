import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString, SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface Oauth2requestTokenInput {
  grant_type: string;
  client_id: string;
  client_secret: string | Redacted.Redacted<string>;
  code?: string;
  redirect_uri?: string;
  refresh_token?: string | Redacted.Redacted<string>;
  session_token?: string | Redacted.Redacted<string>;
  sub_type?: "user" | "organization";
  sub?: string | null;
  scope?: string | null;
}
export const Oauth2requestTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    grant_type: Schema.String,
    client_id: Schema.String,
    client_secret: SensitiveString,
    code: Schema.optional(Schema.String),
    redirect_uri: Schema.optional(Schema.String),
    refresh_token: Schema.optional(SensitiveString),
    session_token: Schema.optional(SensitiveString),
    sub_type: Schema.optional(Schema.Literals(["user", "organization"])),
    sub: Schema.optional(Schema.NullOr(Schema.String)),
    scope: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/oauth2/token",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<Oauth2requestTokenInput>;

// Output Schema
export interface Oauth2requestTokenOutput {
  access_token: Redacted.Redacted<string>;
  token_type: string;
  expires_in: number;
  refresh_token?: string | null;
  scope: string;
  id_token?: string | null;
}
export const Oauth2requestTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    access_token: SensitiveOutputString,
    token_type: Schema.String,
    expires_in: Schema.Number,
    refresh_token: Schema.optional(Schema.NullOr(Schema.String)),
    scope: Schema.String,
    id_token: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<Oauth2requestTokenOutput>;

// The operation
/**
 * Request Token
 *
 * Request an access token using a valid grant.
 */
export const oauth2requestToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: Oauth2requestTokenInput,
  outputSchema: Oauth2requestTokenOutput,
}));
