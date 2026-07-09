import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSDeleteSnapshotV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/snapshot",
    }),
  );
export type VPSDeleteSnapshotV1Input = typeof VPSDeleteSnapshotV1Input.Type;

// Output Schema
export const VPSDeleteSnapshotV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSDeleteSnapshotV1Output = typeof VPSDeleteSnapshotV1Output.Type;

// The operation
/**
 * Delete snapshot
 *
 * Delete a snapshot of a specified virtual machine.
 * Use this endpoint to remove VPS snapshots.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSDeleteSnapshotV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSDeleteSnapshotV1Input,
  outputSchema: VPSDeleteSnapshotV1Output,
}));
