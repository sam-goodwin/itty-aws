import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface RequestPasswordResetInput {
  email: string;
  redirectTo?: string;
}
export const RequestPasswordResetInput = /*@__PURE__*/ Schema.Struct({
  email: Schema.String,
  redirectTo: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/request-password-reset" }),
) as unknown as Schema.Codec<RequestPasswordResetInput>;

// Output Schema
export interface RequestPasswordResetOutput {
  status: boolean;
  message?: string;
}
export const RequestPasswordResetOutput = /*@__PURE__*/ Schema.Struct({
  status: Schema.Boolean,
  message: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<RequestPasswordResetOutput>;

/**
 * Request a password-reset email.
 *
 * Public endpoint. Always returns a success shape (to avoid leaking whether
 * an account exists). On newer better-auth this is `/request-password-reset`;
 * older servers exposed it as `/forget-password`.
 *
 * @param email - The account email to send the reset link to.
 * @param redirectTo - Optional URL to land on after the emailed link is opened.
 */
export const requestPasswordReset = /*@__PURE__*/ API.make(() => ({
  inputSchema: RequestPasswordResetInput,
  outputSchema: RequestPasswordResetOutput,
  errors: [BadRequest] as const,
}));
