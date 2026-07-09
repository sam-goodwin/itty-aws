import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSGetSnapshotV1Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  virtualMachineId: Schema.Number.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/vps/v1/virtual-machines/{virtualMachineId}/snapshot",
  }),
);
export type VPSGetSnapshotV1Input = typeof VPSGetSnapshotV1Input.Type;

// Output Schema
export const VPSGetSnapshotV1Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.Number),
    restore_time: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.String),
  },
);
export type VPSGetSnapshotV1Output = typeof VPSGetSnapshotV1Output.Type;

// The operation
/**
 * Get snapshot
 *
 * Retrieve snapshot for a specified virtual machine.
 * Use this endpoint to view current VPS snapshot information.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSGetSnapshotV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSGetSnapshotV1Input,
  outputSchema: VPSGetSnapshotV1Output,
}));
