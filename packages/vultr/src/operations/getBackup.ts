import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetBackupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backupId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/backups/{backupId}" }));
export type GetBackupInput = typeof GetBackupInput.Type;

// Output Schema
export const GetBackupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backup: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      size: Schema.optional(Schema.Number),
      status: Schema.optional(Schema.String),
    }),
  ),
});
export type GetBackupOutput = typeof GetBackupOutput.Type;

// The operation
/**
 * Get a Backup
 *
 * Get the information for the Backup.
 *
 * @param backupId - The [Backup id](#operation/list-backups).
 */
export const getBackup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBackupInput,
  outputSchema: GetBackupOutput,
  errors: [BadRequest, NotFound] as const,
}));
