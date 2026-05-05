import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const Oauth2revokeTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    token: SensitiveString,
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
);
export type Oauth2revokeTokenInput = typeof Oauth2revokeTokenInput.Type;

// Output Schema
export const Oauth2revokeTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export type Oauth2revokeTokenOutput = typeof Oauth2revokeTokenOutput.Type;

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
