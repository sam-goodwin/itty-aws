import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const Oauth2requestTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Union(
  [
    Schema.Struct({
      grant_type: Schema.Literal("authorization_code"),
      client_id: Schema.String,
      client_secret: SensitiveString,
      code: Schema.String,
      redirect_uri: Schema.String,
    }),
    Schema.Struct({
      grant_type: Schema.Literal("refresh_token"),
      client_id: Schema.String,
      client_secret: SensitiveString,
      refresh_token: SensitiveString,
    }),
    Schema.Struct({
      grant_type: Schema.Literal("web"),
      client_id: Schema.String,
      client_secret: SensitiveString,
      session_token: SensitiveString,
      sub_type: Schema.optional(Schema.Literals(["user", "organization"])),
      sub: Schema.optional(Schema.Unknown),
      scope: Schema.optional(Schema.Unknown),
    }),
  ],
).pipe(
  T.Http({
    method: "POST",
    path: "/v1/oauth2/token",
    contentType: "form-urlencoded",
  }),
);
export type Oauth2requestTokenInput = typeof Oauth2requestTokenInput.Type;

// Output Schema
export const Oauth2requestTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    access_token: SensitiveString,
    token_type: Schema.Literal("Bearer"),
    expires_in: Schema.Number,
    refresh_token: Schema.optional(Schema.Unknown),
    scope: Schema.String,
    id_token: Schema.optional(Schema.Unknown),
  });
export type Oauth2requestTokenOutput = typeof Oauth2requestTokenOutput.Type;

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
