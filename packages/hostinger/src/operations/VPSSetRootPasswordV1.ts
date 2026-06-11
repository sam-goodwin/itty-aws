import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const VPSSetRootPasswordV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    password: SensitiveString,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/root-password",
    }),
  );
export type VPSSetRootPasswordV1Input = typeof VPSSetRootPasswordV1Input.Type;

// Output Schema
export const VPSSetRootPasswordV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSSetRootPasswordV1Output = typeof VPSSetRootPasswordV1Output.Type;

// The operation
/**
 * Set root password
 *
 * Set root password for a specified virtual machine.
 * Requirements for password are same as in the [recreate virtual machine
 * endpoint](/#tag/vps-virtual-machine/POST/api/vps/v1/virtual-machines/{virtualMachineId}/recreate).
 * Use this endpoint to update administrator credentials for VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSSetRootPasswordV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSSetRootPasswordV1Input,
    outputSchema: VPSSetRootPasswordV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
