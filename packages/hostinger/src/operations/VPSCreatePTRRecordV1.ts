import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSCreatePTRRecordV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    ipAddressId: Schema.Number.pipe(T.PathParam()),
    domain: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/ptr/{ipAddressId}",
    }),
  );
export type VPSCreatePTRRecordV1Input = typeof VPSCreatePTRRecordV1Input.Type;

// Output Schema
export const VPSCreatePTRRecordV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSCreatePTRRecordV1Output = typeof VPSCreatePTRRecordV1Output.Type;

// The operation
/**
 * Create PTR record
 *
 * Create or update a PTR (Pointer) record for a specified virtual machine.
 * Use this endpoint to configure reverse DNS lookup for VPS IP addresses.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param ipAddressId - IP Address ID
 */
export const VPSCreatePTRRecordV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSCreatePTRRecordV1Input,
    outputSchema: VPSCreatePTRRecordV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
