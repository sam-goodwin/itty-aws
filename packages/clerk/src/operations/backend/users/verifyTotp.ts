import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const VerifyTotpInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String.pipe(T.PathParam()),
  code: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/users/{user_id}/verify_totp" }));
export type VerifyTotpInput = typeof VerifyTotpInput.Type;

// Output Schema
export const VerifyTotpOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  verified: Schema.optional(Schema.Boolean),
  code_type: Schema.optional(Schema.Literals(["totp", "backup_code"])),
});
export type VerifyTotpOutput = typeof VerifyTotpOutput.Type;

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
export const verifyTotp = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VerifyTotpInput,
  outputSchema: VerifyTotpOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
