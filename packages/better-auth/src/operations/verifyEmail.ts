import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";
import { User } from "../schemas.ts";

// Input Schema
export interface VerifyEmailInput {
  token: string;
  callbackURL?: string;
}
export const VerifyEmailInput = /*@__PURE__*/ Schema.Struct({
  token: Schema.String.pipe(T.QueryParam()),
  callbackURL: Schema.optional(Schema.String).pipe(T.QueryParam()),
}).pipe(
  T.Http({ method: "GET", path: "/verify-email" }),
) as unknown as Schema.Codec<VerifyEmailInput>;

// Output Schema
export interface VerifyEmailOutput {
  status?: boolean;
  user?: User | null;
}
export const VerifyEmailOutput = /*@__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.Boolean),
  user: Schema.optional(Schema.NullOr(User)),
}) as unknown as Schema.Codec<VerifyEmailOutput>;

/**
 * Verify an email address with the token from a verification email.
 *
 * Public endpoint (the JWT token authorizes it). When `callbackURL` is set the
 * server redirects there after verifying; otherwise it returns a JSON status.
 *
 * @param token - The verification token from the email link.
 * @param callbackURL - Optional redirect URL after verification.
 */
export const verifyEmail = /*@__PURE__*/ API.make(() => ({
  inputSchema: VerifyEmailInput,
  outputSchema: VerifyEmailOutput,
  errors: [BadRequest] as const,
}));
