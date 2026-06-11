import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSStopVirtualMachineV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/stop",
    }),
  );
export type VPSStopVirtualMachineV1Input =
  typeof VPSStopVirtualMachineV1Input.Type;

// Output Schema
export const VPSStopVirtualMachineV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSStopVirtualMachineV1Output =
  typeof VPSStopVirtualMachineV1Output.Type;

// The operation
/**
 * Stop virtual machine
 *
 * Stop a specified virtual machine.
 * If the virtual machine is already stopped, the request will still be processed without any effect.
 * Use this endpoint to power off running VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSStopVirtualMachineV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSStopVirtualMachineV1Input,
    outputSchema: VPSStopVirtualMachineV1Output,
  }),
);
