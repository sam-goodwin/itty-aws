import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const VPSRecreateVirtualMachineV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    template_id: Schema.Number,
    password: Schema.optional(SensitiveString),
    panel_password: Schema.optional(SensitiveString),
    post_install_script_id: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/recreate",
    }),
  );
export type VPSRecreateVirtualMachineV1Input =
  typeof VPSRecreateVirtualMachineV1Input.Type;

// Output Schema
export const VPSRecreateVirtualMachineV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSRecreateVirtualMachineV1Output =
  typeof VPSRecreateVirtualMachineV1Output.Type;

// The operation
/**
 * Recreate virtual machine
 *
 * Recreate a virtual machine from scratch.
 * The recreation process involves reinstalling the operating system and
 * resetting the virtual machine to its initial state.
 * Snapshots, if there are any, will be deleted.
 * ## Password Requirements
 * Password will be checked against leaked password databases.
 * Requirements for the password are:
 * - At least 12 characters long
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one number
 * - Is not leaked publicly
 * **This operation is irreversible and will result in the loss of all data stored on the virtual machine!**
 * Use this endpoint to completely rebuild VPS instances with fresh OS installation.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSRecreateVirtualMachineV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSRecreateVirtualMachineV1Input,
    outputSchema: VPSRecreateVirtualMachineV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
