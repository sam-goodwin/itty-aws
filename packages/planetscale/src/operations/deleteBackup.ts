import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DeleteBackupInput {
  id: string;
  organization: string;
  database: string;
  branch: string;
}
export const DeleteBackupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/backups/{id}",
  }),
) as unknown as Schema.Codec<DeleteBackupInput>;

// Output Schema
export type DeleteBackupOutput = void;
export const DeleteBackupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteBackupOutput>;

// The operation
/**
 * Delete a backup
 *
 * @param id - The ID of the backup
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 */
export const deleteBackup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteBackupInput,
  outputSchema: DeleteBackupOutput,
  errors: [Forbidden, NotFound] as const,
}));
