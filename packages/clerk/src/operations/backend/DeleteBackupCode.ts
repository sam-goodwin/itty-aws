import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const DeleteBackupCodeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/users/{user_id}/backup_code" }));
export type DeleteBackupCodeInput = typeof DeleteBackupCodeInput.Type;

// Output Schema
export const DeleteBackupCodeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    user_id: Schema.optional(Schema.String),
  },
);
export type DeleteBackupCodeOutput = typeof DeleteBackupCodeOutput.Type;

// The operation
/**
 * Disable all user's Backup codes
 *
 * Disable all of a user's backup codes.
 *
 * @param user_id - The ID of the user whose backup codes are to be deleted.
 */
export const DeleteBackupCode = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteBackupCodeInput,
  outputSchema: DeleteBackupCodeOutput,
  errors: [NotFound] as const,
}));
