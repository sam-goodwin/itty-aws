import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSRestoreSnapshotV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/snapshot/restore",
    }),
  );
export type VPSRestoreSnapshotV1Input = typeof VPSRestoreSnapshotV1Input.Type;

// Output Schema
export const VPSRestoreSnapshotV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSRestoreSnapshotV1Output = typeof VPSRestoreSnapshotV1Output.Type;

// The operation
/**
 * Restore snapshot
 *
 * Restore a specified virtual machine to a previous state using a snapshot.
 * Restoring from a snapshot allows users to revert the virtual machine to that state,
 * which is useful for system recovery, undoing changes, or testing.
 * Use this endpoint to revert VPS instances to previous saved states.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSRestoreSnapshotV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSRestoreSnapshotV1Input,
    outputSchema: VPSRestoreSnapshotV1Output,
  }),
);
