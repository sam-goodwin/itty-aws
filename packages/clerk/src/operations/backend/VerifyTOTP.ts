import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const VerifyTOTPInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String.pipe(T.PathParam()),
  code: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/users/{user_id}/verify_totp" }));
export type VerifyTOTPInput = typeof VerifyTOTPInput.Type;

// Output Schema
export const VerifyTOTPOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  verified: Schema.optional(Schema.Boolean),
  code_type: Schema.optional(Schema.Literals(["totp", "backup_code"])),
});
export type VerifyTOTPOutput = typeof VerifyTOTPOutput.Type;

// The operation
/**
 * Verify a TOTP or backup code for a user
 *
 * Verify that the provided TOTP or backup code is valid for the user.
 * Verifying a backup code will result it in being consumed (i.e. it will
 * become invalid).
 * Useful for custom auth flows and re-verification.
 *
 * @param user_id - The ID of the user for whom to verify the TOTP
 */
export const VerifyTOTP = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VerifyTOTPInput,
  outputSchema: VerifyTOTPOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
