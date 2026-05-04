import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const Oauth2introspectTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
    token_type_hint: Schema.optional(Schema.Unknown),
    client_id: Schema.String,
    client_secret: SensitiveString,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/oauth2/introspect",
      contentType: "form-urlencoded",
    }),
  );
export type Oauth2introspectTokenInput = typeof Oauth2introspectTokenInput.Type;

// Output Schema
export const Oauth2introspectTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.Boolean,
    client_id: Schema.String,
    token_type: Schema.Literals(["access_token", "refresh_token"]),
    scope: Schema.String,
    sub_type: Schema.Literals(["user", "organization"]),
    sub: Schema.String,
    aud: Schema.String,
    iss: Schema.String,
    exp: Schema.Number,
    iat: Schema.Number,
  });
export type Oauth2introspectTokenOutput =
  typeof Oauth2introspectTokenOutput.Type;

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
