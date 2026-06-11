import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const VPSSetPanelPasswordV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    password: SensitiveString,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/panel-password",
    }),
  );
export type VPSSetPanelPasswordV1Input = typeof VPSSetPanelPasswordV1Input.Type;

// Output Schema
export const VPSSetPanelPasswordV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSSetPanelPasswordV1Output =
  typeof VPSSetPanelPasswordV1Output.Type;

// The operation
/**
 * Set panel password
 *
 * Set panel password for a specified virtual machine.
 * If virtual machine does not use panel OS, the request will still be processed without any effect.
 * Requirements for password are same as in the [recreate virtual machine
 * endpoint](/#tag/vps-virtual-machine/POST/api/vps/v1/virtual-machines/{virtualMachineId}/recreate).
 * Use this endpoint to configure control panel access credentials for VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSSetPanelPasswordV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSSetPanelPasswordV1Input,
    outputSchema: VPSSetPanelPasswordV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
