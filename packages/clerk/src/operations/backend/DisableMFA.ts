import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const DisableMFAInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/users/{user_id}/mfa" }));
export type DisableMFAInput = typeof DisableMFAInput.Type;

// Output Schema
export const DisableMFAOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.optional(Schema.String),
});
export type DisableMFAOutput = typeof DisableMFAOutput.Type;

// The operation
/**
 * Disable a user's MFA methods
 *
 * Disable all of a user's MFA methods (e.g. OTP sent via SMS, TOTP on their authenticator app) at once.
 *
 * @param user_id - The ID of the user whose MFA methods are to be disabled
 */
export const DisableMFA = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisableMFAInput,
  outputSchema: DisableMFAOutput,
  errors: [NotFound] as const,
}));
