import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const DeleteTOTPInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/users/{user_id}/totp" }));
export type DeleteTOTPInput = typeof DeleteTOTPInput.Type;

// Output Schema
export const DeleteTOTPOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.optional(Schema.String),
});
export type DeleteTOTPOutput = typeof DeleteTOTPOutput.Type;

// The operation
/**
 * Delete all the user's TOTPs
 *
 * Deletes all of the user's TOTPs.
 *
 * @param user_id - The ID of the user whose TOTPs are to be deleted
 */
export const DeleteTOTP = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteTOTPInput,
  outputSchema: DeleteTOTPOutput,
  errors: [NotFound] as const,
}));
