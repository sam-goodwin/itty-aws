import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const VPSSetupPurchasedVirtualMachineV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    template_id: Schema.Number,
    data_center_id: Schema.Number,
    post_install_script_id: Schema.optional(Schema.Number),
    password: Schema.optional(SensitiveString),
    hostname: Schema.optional(Schema.String),
    install_monarx: Schema.optional(Schema.Boolean),
    enable_backups: Schema.optional(Schema.Boolean),
    ns1: Schema.optional(Schema.String),
    ns2: Schema.optional(Schema.String),
    public_key: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/setup",
    }),
  );
export type VPSSetupPurchasedVirtualMachineV1Input =
  typeof VPSSetupPurchasedVirtualMachineV1Input.Type;

// Output Schema
export const VPSSetupPurchasedVirtualMachineV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VPSSetupPurchasedVirtualMachineV1Output =
  typeof VPSSetupPurchasedVirtualMachineV1Output.Type;

// The operation
/**
 * Setup purchased virtual machine
 *
 * Setup newly purchased virtual machine with `initial` state.
 * Use this endpoint to configure and initialize purchased VPS instances.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSSetupPurchasedVirtualMachineV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VPSSetupPurchasedVirtualMachineV1Input,
    outputSchema: VPSSetupPurchasedVirtualMachineV1Output,
    errors: [UnprocessableEntity] as const,
  }));
