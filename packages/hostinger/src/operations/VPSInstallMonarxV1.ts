import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSInstallMonarxV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/monarx",
    }),
  );
export type VPSInstallMonarxV1Input = typeof VPSInstallMonarxV1Input.Type;

// Output Schema
export const VPSInstallMonarxV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSInstallMonarxV1Output = typeof VPSInstallMonarxV1Output.Type;

// The operation
/**
 * Install Monarx
 *
 * Install the Monarx malware scanner on a specified virtual machine.
 * [Monarx](https://www.monarx.com/) is a security tool designed to detect and
 * prevent malware infections on virtual machines. By installing Monarx, users
 * can enhance the security of their virtual machines, ensuring that they are
 * protected against malicious software.
 * Use this endpoint to enable malware protection on VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSInstallMonarxV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSInstallMonarxV1Input,
  outputSchema: VPSInstallMonarxV1Output,
  errors: [UnprocessableEntity] as const,
}));
