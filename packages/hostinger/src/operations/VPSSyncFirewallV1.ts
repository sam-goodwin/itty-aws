import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSSyncFirewallV1Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    firewallId: Schema.Number.pipe(T.PathParam()),
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/api/vps/v1/firewall/{firewallId}/sync/{virtualMachineId}",
  }),
);
export type VPSSyncFirewallV1Input = typeof VPSSyncFirewallV1Input.Type;

// Output Schema
export const VPSSyncFirewallV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSSyncFirewallV1Output = typeof VPSSyncFirewallV1Output.Type;

// The operation
/**
 * Sync firewall
 *
 * Sync a firewall for a specified virtual machine.
 * Firewall can lose sync with virtual machine if the firewall has new rules added, removed or updated.
 * Use this endpoint to apply updated firewall rules to VPS instances.
 *
 * @param firewallId - Firewall ID
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSSyncFirewallV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSSyncFirewallV1Input,
  outputSchema: VPSSyncFirewallV1Output,
  errors: [UnprocessableEntity] as const,
}));
