import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSStopRecoveryModeV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/recovery",
    }),
  );
export type VPSStopRecoveryModeV1Input = typeof VPSStopRecoveryModeV1Input.Type;

// Output Schema
export const VPSStopRecoveryModeV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSStopRecoveryModeV1Output =
  typeof VPSStopRecoveryModeV1Output.Type;

// The operation
/**
 * Stop recovery mode
 *
 * Stop recovery mode for a specified virtual machine.
 * If virtual machine is not in recovery mode, this operation will fail.
 * Use this endpoint to exit system rescue mode and return VPS to normal operation.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSStopRecoveryModeV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSStopRecoveryModeV1Input,
    outputSchema: VPSStopRecoveryModeV1Output,
  }),
);
