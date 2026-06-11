import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSRestoreBackupV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    backupId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/backups/{backupId}/restore",
    }),
  );
export type VPSRestoreBackupV1Input = typeof VPSRestoreBackupV1Input.Type;

// Output Schema
export const VPSRestoreBackupV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSRestoreBackupV1Output = typeof VPSRestoreBackupV1Output.Type;

// The operation
/**
 * Restore backup
 *
 * Restore a backup for a specified virtual machine.
 * The system will then initiate the restore process, which may take some time depending on the size of the backup.
 * **All data on the virtual machine will be overwritten with the data from the backup.**
 * Use this endpoint to recover VPS data from backup points.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param backupId - Backup ID
 */
export const VPSRestoreBackupV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSRestoreBackupV1Input,
  outputSchema: VPSRestoreBackupV1Output,
}));
