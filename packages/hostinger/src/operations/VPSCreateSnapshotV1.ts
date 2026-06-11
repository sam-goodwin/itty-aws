import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSCreateSnapshotV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/snapshot",
    }),
  );
export type VPSCreateSnapshotV1Input = typeof VPSCreateSnapshotV1Input.Type;

// Output Schema
export const VPSCreateSnapshotV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSCreateSnapshotV1Output = typeof VPSCreateSnapshotV1Output.Type;

// The operation
/**
 * Create snapshot
 *
 * Create a snapshot of a specified virtual machine.
 * A snapshot captures the state and data of the virtual machine at a specific point in time,
 * allowing users to restore the virtual machine to that state if needed.
 * This operation is useful for backup purposes, system recovery,
 * and testing changes without affecting the current state of the virtual machine.
 * **Creating new snapshot will overwrite the existing snapshot!**
 * Use this endpoint to capture VPS state for backup and recovery purposes.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSCreateSnapshotV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSCreateSnapshotV1Input,
  outputSchema: VPSCreateSnapshotV1Output,
}));
