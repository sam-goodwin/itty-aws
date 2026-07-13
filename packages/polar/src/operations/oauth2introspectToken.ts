import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface Oauth2introspectTokenInput {
  token: string;
  token_type_hint?: "access_token" | "refresh_token" | null;
  client_id: string;
  client_secret: string | Redacted.Redacted<string>;
}
export const Oauth2introspectTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
    token_type_hint: Schema.optional(
      Schema.NullOr(Schema.Literals(["access_token", "refresh_token"])),
    ),
    client_id: Schema.String,
    client_secret: SensitiveString,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/oauth2/introspect",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<Oauth2introspectTokenInput>;

// Output Schema
export interface Oauth2introspectTokenOutput {
  active: boolean;
  client_id: string;
  token_type: "access_token" | "refresh_token";
  scope: string;
  sub_type: "user" | "organization";
  sub: string;
  organizations: ReadonlyArray<string>;
  aud: string;
  iss: string;
  exp: number;
  iat: number;
}
export const Oauth2introspectTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.Boolean,
    client_id: Schema.String,
    token_type: Schema.Literals(["access_token", "refresh_token"]),
    scope: Schema.String,
    sub_type: Schema.Literals(["user", "organization"]),
    sub: Schema.String,
    organizations: Schema.Array(Schema.String),
    aud: Schema.String,
    iss: Schema.String,
    exp: Schema.Number,
    iat: Schema.Number,
  }) as unknown as Schema.Codec<Oauth2introspectTokenOutput>;

// The operation
/**
 * Introspect Token
 *
 * Get information about an access token.
 */
export const oauth2introspectToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: Oauth2introspectTokenInput,
    outputSchema: Oauth2introspectTokenOutput,
  }),
);
