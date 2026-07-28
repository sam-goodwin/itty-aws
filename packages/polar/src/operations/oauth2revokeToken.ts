import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface Oauth2revokeTokenInput {
  token: string;
  token_type_hint?: "access_token" | "refresh_token" | null;
  client_id: string;
  client_secret: string | Redacted.Redacted<string>;
}
export const Oauth2revokeTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    token: Schema.String,
    token_type_hint: Schema.optional(
      Schema.NullOr(Schema.Literals(["access_token", "refresh_token"])),
    ),
    client_id: Schema.String,
    client_secret: SensitiveString,
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/v1/oauth2/revoke",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<Oauth2revokeTokenInput>;

// Output Schema
export interface Oauth2revokeTokenOutput {}
export const Oauth2revokeTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as unknown as Schema.Codec<Oauth2revokeTokenOutput>;

// The operation
/**
 * Revoke Token
 *
 * Revoke an access token or a refresh token.
 */
export const oauth2revokeToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: Oauth2revokeTokenInput,
  outputSchema: Oauth2revokeTokenOutput,
}));
