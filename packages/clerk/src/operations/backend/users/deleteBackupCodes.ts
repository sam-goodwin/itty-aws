import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { NotFound } from "../../../errors.ts";

// Input Schema
export const DeleteBackupCodesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    user_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "DELETE", path: "/users/{user_id}/backup_code" }));
export type DeleteBackupCodesInput = typeof DeleteBackupCodesInput.Type;

// Output Schema
export const DeleteBackupCodesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.optional(Schema.String),
  });
export type DeleteBackupCodesOutput = typeof DeleteBackupCodesOutput.Type;

// The operation
/**
 * Disable all user's Backup codes
 *
 * Disable all of a user's backup codes.
 *
 * @param user_id - The ID of the user whose backup codes are to be deleted.
 */
export const deleteBackupCodes = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteBackupCodesInput,
  outputSchema: DeleteBackupCodesOutput,
  errors: [NotFound] as const,
}));
