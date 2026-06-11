import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSRestartVirtualMachineV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/restart",
    }),
  );
export type VPSRestartVirtualMachineV1Input =
  typeof VPSRestartVirtualMachineV1Input.Type;

// Output Schema
export const VPSRestartVirtualMachineV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSRestartVirtualMachineV1Output =
  typeof VPSRestartVirtualMachineV1Output.Type;

// The operation
/**
 * Restart virtual machine
 *
 * Restart a specified virtual machine by fully stopping and starting it.
 * If the virtual machine was stopped, it will be started.
 * Use this endpoint to reboot VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSRestartVirtualMachineV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSRestartVirtualMachineV1Input,
    outputSchema: VPSRestartVirtualMachineV1Output,
  }),
);
