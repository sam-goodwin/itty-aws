import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSDeletePTRRecordV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    ipAddressId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/ptr/{ipAddressId}",
    }),
  );
export type VPSDeletePTRRecordV1Input = typeof VPSDeletePTRRecordV1Input.Type;

// Output Schema
export const VPSDeletePTRRecordV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSDeletePTRRecordV1Output = typeof VPSDeletePTRRecordV1Output.Type;

// The operation
/**
 * Delete PTR record
 *
 * Delete a PTR (Pointer) record for a specified virtual machine.
 * Once deleted, reverse DNS lookups to the virtual machine's IP address will
 * no longer return the previously configured hostname.
 * Use this endpoint to remove reverse DNS configuration from VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param ipAddressId - IP Address ID
 */
export const VPSDeletePTRRecordV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSDeletePTRRecordV1Input,
    outputSchema: VPSDeletePTRRecordV1Output,
  }),
);
