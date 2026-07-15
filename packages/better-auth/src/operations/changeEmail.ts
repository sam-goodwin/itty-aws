import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Unauthorized } from "../errors.ts";

// Input Schema
export interface ChangeEmailInput {
  newEmail: string;
  callbackURL?: string;
}
export const ChangeEmailInput = /*@__PURE__*/ Schema.Struct({
  newEmail: Schema.String,
  callbackURL: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/change-email" }),
) as unknown as Schema.Codec<ChangeEmailInput>;

// Output Schema
export interface ChangeEmailOutput {
  status: boolean;
  message?: string;
}
export const ChangeEmailOutput = /*@__PURE__*/ Schema.Struct({
  status: Schema.Boolean,
  message: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ChangeEmailOutput>;

/**
 * Change the current user's email address.
 *
 * Requires a fresh authenticated session. If the current email is verified, a
 * confirmation email is sent and the change applies after the user clicks it;
 * otherwise it may apply immediately.
 *
 * @param newEmail - The new email address.
 * @param callbackURL - Optional redirect URL for the confirmation flow.
 */
export const changeEmail = /*@__PURE__*/ API.make(() => ({
  inputSchema: ChangeEmailInput,
  outputSchema: ChangeEmailOutput,
  errors: [BadRequest, Unauthorized] as const,
}));
