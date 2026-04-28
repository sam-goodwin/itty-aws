import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteBackupPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{organization}/databases/{database}/backup-policies/{id}",
    }),
  );
export type DeleteBackupPolicyInput = typeof DeleteBackupPolicyInput.Type;

// Output Schema
export const DeleteBackupPolicyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteBackupPolicyOutput = typeof DeleteBackupPolicyOutput.Type;

// The operation
/**
 * Delete a backup policy
 *
 * @param id - The ID of the backup policy
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 */
export const deleteBackupPolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteBackupPolicyInput,
  outputSchema: DeleteBackupPolicyOutput,
  errors: [Forbidden, NotFound] as const,
}));
