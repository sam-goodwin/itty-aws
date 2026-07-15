import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";
import { User } from "../schemas.ts";

// Input Schema
export interface SignInSocialInput {
  provider: string;
  callbackURL?: string;
  newUserCallbackURL?: string;
  errorCallbackURL?: string;
  disableRedirect?: boolean;
  scopes?: string[];
  requestSignUp?: boolean;
  loginHint?: string;
  idToken?: {
    token: string;
    nonce?: string;
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: number;
  };
}
export const SignInSocialInput = /*@__PURE__*/ Schema.Struct({
  provider: Schema.String,
  callbackURL: Schema.optional(Schema.String),
  newUserCallbackURL: Schema.optional(Schema.String),
  errorCallbackURL: Schema.optional(Schema.String),
  disableRedirect: Schema.optional(Schema.Boolean),
  scopes: Schema.optional(Schema.Array(Schema.String)),
  requestSignUp: Schema.optional(Schema.Boolean),
  loginHint: Schema.optional(Schema.String),
  idToken: Schema.optional(
    Schema.Struct({
      token: Schema.String,
      nonce: Schema.optional(Schema.String),
      accessToken: Schema.optional(Schema.String),
      refreshToken: Schema.optional(Schema.String),
      expiresAt: Schema.optional(Schema.Number),
    }),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/sign-in/social" }),
) as unknown as Schema.Codec<SignInSocialInput>;

// Output Schema
export interface SignInSocialOutput {
  redirect: boolean;
  url?: string;
  token?: string;
  user?: User;
}
export const SignInSocialOutput = /*@__PURE__*/ Schema.Struct({
  redirect: Schema.Boolean,
  url: Schema.optional(Schema.String),
  token: Schema.optional(Schema.String),
  user: Schema.optional(User),
}) as unknown as Schema.Codec<SignInSocialOutput>;

/**
 * Sign in with a social / OAuth provider.
 *
 * For the redirect (browser) flow the response is `{ url, redirect: true }` —
 * navigate the user to `url`. For the native `idToken` flow the response is
 * `{ redirect: false, token, user }`.
 *
 * @param provider - A configured social provider id (e.g. "github", "google").
 * @param callbackURL - Optional post-auth redirect URL.
 * @param idToken - Optional; native ID-token flow (skips the browser redirect).
 */
export const signInSocial = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignInSocialInput,
  outputSchema: SignInSocialOutput,
  errors: [BadRequest] as const,
}));
