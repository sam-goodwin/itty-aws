import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSGetVirtualMachinesV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/vps/v1/virtual-machines" }),
  );
export type VPSGetVirtualMachinesV1Input =
  typeof VPSGetVirtualMachinesV1Input.Type;

// Output Schema
export const VPSGetVirtualMachinesV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.Number),
      firewall_group_id: Schema.optional(Schema.NullOr(Schema.Number)),
      subscription_id: Schema.optional(Schema.NullOr(Schema.String)),
      data_center_id: Schema.optional(Schema.NullOr(Schema.Number)),
      plan: Schema.optional(Schema.NullOr(Schema.String)),
      hostname: Schema.optional(Schema.String),
      state: Schema.optional(
        Schema.Literals([
          "running",
          "starting",
          "stopping",
          "stopped",
          "creating",
          "initial",
          "error",
          "suspending",
          "unsuspending",
          "suspended",
          "destroying",
          "destroyed",
          "recreating",
          "restoring",
          "recovery",
          "stopping_recovery",
        ]),
      ),
      actions_lock: Schema.optional(Schema.Literals(["unlocked", "locked"])),
      cpus: Schema.optional(Schema.Number),
      memory: Schema.optional(Schema.Number),
      disk: Schema.optional(Schema.Number),
      bandwidth: Schema.optional(Schema.Number),
      ns1: Schema.optional(Schema.NullOr(Schema.String)),
      ns2: Schema.optional(Schema.NullOr(Schema.String)),
      ipv4: Schema.optional(Schema.Unknown),
      ipv6: Schema.optional(Schema.Unknown),
      template: Schema.optional(Schema.Unknown),
      created_at: Schema.optional(Schema.String),
    }),
  );
export type VPSGetVirtualMachinesV1Output =
  typeof VPSGetVirtualMachinesV1Output.Type;

// The operation
/**
 * Get virtual machines
 *
 * Retrieve all available virtual machines.
 * Use this endpoint to view available VPS instances.
 */
export const VPSGetVirtualMachinesV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSGetVirtualMachinesV1Input,
    outputSchema: VPSGetVirtualMachinesV1Output,
  }),
);
