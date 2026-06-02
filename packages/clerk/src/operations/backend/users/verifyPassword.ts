import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../../../errors.ts";
import { SensitiveString } from "../../../sensitive.ts";

// Input Schema
export const VerifyPasswordInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String.pipe(T.PathParam()),
  password: SensitiveString,
}).pipe(T.Http({ method: "POST", path: "/users/{user_id}/verify_password" }));
export type VerifyPasswordInput = typeof VerifyPasswordInput.Type;

// Output Schema
export const VerifyPasswordOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  verified: Schema.optional(Schema.Boolean),
});
export type VerifyPasswordOutput = typeof VerifyPasswordOutput.Type;

// The operation
/**
 * Verify the password of a user
 *
 * Check that the user's password matches the supplied input.
 * Useful for custom auth flows and re-verification.
 *
 * @param user_id - The ID of the user for whom to verify the password
 */
export const verifyPassword = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VerifyPasswordInput,
  outputSchema: VerifyPasswordOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
