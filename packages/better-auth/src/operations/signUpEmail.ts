import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Conflict, UnprocessableEntity } from "../errors.ts";
import { User } from "../schemas.ts";

// Input Schema
export interface SignUpEmailInput {
  name: string;
  email: string;
  password: string;
  image?: string;
  callbackURL?: string;
  rememberMe?: boolean;
}
export const SignUpEmailInput = /*@__PURE__*/ Schema.Struct({
  name: Schema.String,
  email: Schema.String,
  password: Schema.String,
  image: Schema.optional(Schema.String),
  callbackURL: Schema.optional(Schema.String),
  rememberMe: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "POST", path: "/sign-up/email" }),
) as unknown as Schema.Codec<SignUpEmailInput>;

// Output Schema
export interface SignUpEmailOutput {
  token: string | null;
  user: User;
}
export const SignUpEmailOutput = /*@__PURE__*/ Schema.Struct({
  token: Schema.NullOr(Schema.String),
  user: User,
}) as unknown as Schema.Codec<SignUpEmailOutput>;

/**
 * Sign up with email and password.
 *
 * Creates a new user. With auto sign-in on (the default) the response carries
 * a session `token`; if auto sign-in is disabled, `token` is `null`.
 *
 * @param name - The user's display name.
 * @param email - The user's email address.
 * @param password - The user's password (subject to the server's policy).
 * @param image - Optional avatar URL.
 * @param callbackURL - Optional post-verification redirect URL.
 * @param rememberMe - Optional; persist the session beyond the browser session.
 */
export const signUpEmail = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignUpEmailInput,
  outputSchema: SignUpEmailOutput,
  errors: [BadRequest, UnprocessableEntity, Conflict] as const,
}));
