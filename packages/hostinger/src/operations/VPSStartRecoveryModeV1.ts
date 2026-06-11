import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const VPSStartRecoveryModeV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    root_password: SensitiveString,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/recovery",
    }),
  );
export type VPSStartRecoveryModeV1Input =
  typeof VPSStartRecoveryModeV1Input.Type;

// Output Schema
export const VPSStartRecoveryModeV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSStartRecoveryModeV1Output =
  typeof VPSStartRecoveryModeV1Output.Type;

// The operation
/**
 * Start recovery mode
 *
 * Initiate recovery mode for a specified virtual machine.
 * Recovery mode is a special state that allows users to perform system rescue operations,
 * such as repairing file systems, recovering data, or troubleshooting issues that prevent the virtual machine
 * from booting normally.
 * Virtual machine will boot recovery disk image and original disk image will be mounted in `/mnt` directory.
 * Use this endpoint to enable system rescue operations on VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSStartRecoveryModeV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSStartRecoveryModeV1Input,
    outputSchema: VPSStartRecoveryModeV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
