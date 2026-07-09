import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSUninstallMonarxV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/monarx",
    }),
  );
export type VPSUninstallMonarxV1Input = typeof VPSUninstallMonarxV1Input.Type;

// Output Schema
export const VPSUninstallMonarxV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSUninstallMonarxV1Output = typeof VPSUninstallMonarxV1Output.Type;

// The operation
/**
 * Uninstall Monarx
 *
 * Uninstall the Monarx malware scanner on a specified virtual machine.
 * If Monarx is not installed, the request will still be processed without any effect.
 * Use this endpoint to remove malware scanner from VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSUninstallMonarxV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSUninstallMonarxV1Input,
    outputSchema: VPSUninstallMonarxV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
