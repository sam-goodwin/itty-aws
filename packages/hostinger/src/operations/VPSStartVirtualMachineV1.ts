import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSStartVirtualMachineV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/start",
    }),
  );
export type VPSStartVirtualMachineV1Input =
  typeof VPSStartVirtualMachineV1Input.Type;

// Output Schema
export const VPSStartVirtualMachineV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSStartVirtualMachineV1Output =
  typeof VPSStartVirtualMachineV1Output.Type;

// The operation
/**
 * Start virtual machine
 *
 * Start a specified virtual machine.
 * If the virtual machine is already running, the request will still be processed without any effect.
 * Use this endpoint to power on stopped VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSStartVirtualMachineV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSStartVirtualMachineV1Input,
    outputSchema: VPSStartVirtualMachineV1Output,
  }),
);
