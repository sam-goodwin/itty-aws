import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Unauthorized } from "../errors.ts";

// Input Schema
export interface LinkSocialInput {
  provider: string;
  callbackURL?: string;
  errorCallbackURL?: string;
  disableRedirect?: boolean;
  requestSignUp?: boolean;
  scopes?: string[];
  idToken?: {
    token: string;
    nonce?: string;
    accessToken?: string;
    refreshToken?: string;
  };
}
export const LinkSocialInput = /*@__PURE__*/ Schema.Struct({
  provider: Schema.String,
  callbackURL: Schema.optional(Schema.String),
  errorCallbackURL: Schema.optional(Schema.String),
  disableRedirect: Schema.optional(Schema.Boolean),
  requestSignUp: Schema.optional(Schema.Boolean),
  scopes: Schema.optional(Schema.Array(Schema.String)),
  idToken: Schema.optional(
    Schema.Struct({
      token: Schema.String,
      nonce: Schema.optional(Schema.String),
      accessToken: Schema.optional(Schema.String),
      refreshToken: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/link-social" }),
) as unknown as Schema.Codec<LinkSocialInput>;

// Output Schema
export interface LinkSocialOutput {
  redirect: boolean;
  url?: string;
  status?: boolean;
}
export const LinkSocialOutput = /*@__PURE__*/ Schema.Struct({
  redirect: Schema.Boolean,
  url: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Boolean),
}) as unknown as Schema.Codec<LinkSocialOutput>;

/**
 * Link a social / OAuth provider to the current user.
 *
 * Requires an authenticated session. For the redirect flow, navigate the user
 * to `url`; the native `idToken` flow links directly.
 *
 * @param provider - A configured social provider id.
 * @param callbackURL - Optional post-link redirect URL.
 * @param idToken - Optional; native ID-token flow.
 */
export const linkSocial = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkSocialInput,
  outputSchema: LinkSocialOutput,
  errors: [BadRequest, Unauthorized] as const,
}));
