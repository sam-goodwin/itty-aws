import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSResetHostnameV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/hostname",
    }),
  );
export type VPSResetHostnameV1Input = typeof VPSResetHostnameV1Input.Type;

// Output Schema
export const VPSResetHostnameV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSResetHostnameV1Output = typeof VPSResetHostnameV1Output.Type;

// The operation
/**
 * Reset hostname
 *
 * Reset hostname and PTR record of a specified virtual machine to default value.
 * Use this endpoint to restore default hostname configuration for VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSResetHostnameV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSResetHostnameV1Input,
  outputSchema: VPSResetHostnameV1Output,
}));
