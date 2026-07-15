import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, Unauthorized } from "../errors.ts";
import { User } from "../schemas.ts";

// Input Schema
export interface SignInEmailInput {
  email: string;
  password: string;
  rememberMe?: boolean;
  callbackURL?: string;
}
export const SignInEmailInput = /*@__PURE__*/ Schema.Struct({
  email: Schema.String,
  password: Schema.String,
  rememberMe: Schema.optional(Schema.Boolean),
  callbackURL: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/sign-in/email" }),
) as unknown as Schema.Codec<SignInEmailInput>;

// Output Schema
export interface SignInEmailOutput {
  redirect: boolean;
  token: string;
  url?: string;
  user: User;
}
export const SignInEmailOutput = /*@__PURE__*/ Schema.Struct({
  redirect: Schema.Boolean,
  token: Schema.String,
  url: Schema.optional(Schema.String),
  user: User,
}) as unknown as Schema.Codec<SignInEmailOutput>;

/**
 * Sign in with email and password.
 *
 * On success the response carries the session `token` (send it as
 * `Authorization: Bearer <token>` on subsequent authenticated calls when the
 * `bearer` plugin is enabled). Fails with `Unauthorized` on bad credentials
 * and `Forbidden` when email verification is required but incomplete.
 *
 * @param email - The user's email address.
 * @param password - The user's password.
 * @param rememberMe - Optional (default true); persist the session.
 * @param callbackURL - Optional redirect URL.
 */
export const signInEmail = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignInEmailInput,
  outputSchema: SignInEmailOutput,
  errors: [BadRequest, Unauthorized, Forbidden] as const,
}));
