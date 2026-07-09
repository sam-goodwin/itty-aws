import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const VPSPurchaseNewVirtualMachineV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    item_id: Schema.String,
    payment_method_id: Schema.optional(Schema.Number),
    setup: Schema.Struct({
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
    }),
    coupons: Schema.optional(Schema.Array(Schema.Unknown)),
  }).pipe(T.Http({ method: "POST", path: "/api/vps/v1/virtual-machines" }));
export type VPSPurchaseNewVirtualMachineV1Input =
  typeof VPSPurchaseNewVirtualMachineV1Input.Type;

// Output Schema
export const VPSPurchaseNewVirtualMachineV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    order: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        subscription_id: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals([
            "completed",
            "pending",
            "processing",
            "failed",
            "refunded",
            "cancelled",
            "awaiting_payment",
            "payment_initiated",
            "fraud_refund",
          ]),
        ),
        currency: Schema.optional(Schema.String),
        subtotal: Schema.optional(Schema.Number),
        total: Schema.optional(Schema.Number),
        billing_address: Schema.optional(
          Schema.Struct({
            first_name: Schema.optional(Schema.String),
            last_name: Schema.optional(Schema.String),
            company: Schema.optional(Schema.NullOr(Schema.String)),
            address_1: Schema.optional(Schema.NullOr(Schema.String)),
            address_2: Schema.optional(Schema.NullOr(Schema.String)),
            city: Schema.optional(Schema.NullOr(Schema.String)),
            state: Schema.optional(Schema.NullOr(Schema.String)),
            zip: Schema.optional(Schema.NullOr(Schema.String)),
            country: Schema.optional(Schema.NullOr(Schema.String)),
            phone: Schema.optional(Schema.NullOr(Schema.String)),
            email: Schema.optional(Schema.String),
          }),
        ),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
      }),
    ),
    virtual_machine: Schema.optional(
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
    ),
  });
export type VPSPurchaseNewVirtualMachineV1Output =
  typeof VPSPurchaseNewVirtualMachineV1Output.Type;

// The operation
/**
 * Purchase new virtual machine
 *
 * Purchase and setup a new virtual machine.
 * If virtual machine setup fails for any reason, login to
 * [hPanel](https://hpanel.hostinger.com/) and complete the setup manually.
 * If no payment method is provided, your default payment method will be used automatically.
 * Use this endpoint to create new VPS instances.
 */
export const VPSPurchaseNewVirtualMachineV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VPSPurchaseNewVirtualMachineV1Input,
    outputSchema: VPSPurchaseNewVirtualMachineV1Output,
    errors: [UnprocessableEntity] as const,
  }));
