import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface SendVerificationEmailInput {
  email: string;
  callbackURL?: string;
}
export const SendVerificationEmailInput = /*@__PURE__*/ Schema.Struct({
  email: Schema.String,
  callbackURL: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/send-verification-email" }),
) as unknown as Schema.Codec<SendVerificationEmailInput>;

// Output Schema
export interface SendVerificationEmailOutput {
  status: boolean;
}
export const SendVerificationEmailOutput = /*@__PURE__*/ Schema.Struct({
  status: Schema.Boolean,
}) as unknown as Schema.Codec<SendVerificationEmailOutput>;

/**
 * Send (or resend) a verification email.
 *
 * Public endpoint; runs in constant time to avoid leaking account existence.
 *
 * @param email - The address to send the verification email to.
 * @param callbackURL - Optional redirect URL embedded in the verification link.
 */
export const sendVerificationEmail = /*@__PURE__*/ API.make(() => ({
  inputSchema: SendVerificationEmailInput,
  outputSchema: SendVerificationEmailOutput,
  errors: [BadRequest] as const,
}));
