import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSGetActionDetailsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    actionId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/actions/{actionId}",
    }),
  );
export type VPSGetActionDetailsV1Input = typeof VPSGetActionDetailsV1Input.Type;

// Output Schema
export const VPSGetActionDetailsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSGetActionDetailsV1Output =
  typeof VPSGetActionDetailsV1Output.Type;

// The operation
/**
 * Get action details
 *
 * Retrieve detailed information about a specific action performed on a specified virtual machine.
 * Use this endpoint to monitor specific VPS operation status and details.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param actionId - Action ID
 */
export const VPSGetActionDetailsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSGetActionDetailsV1Input,
    outputSchema: VPSGetActionDetailsV1Output,
  }),
);
