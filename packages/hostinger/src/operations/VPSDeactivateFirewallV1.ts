import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSDeactivateFirewallV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallId: Schema.Number.pipe(T.PathParam()),
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/firewall/{firewallId}/deactivate/{virtualMachineId}",
    }),
  );
export type VPSDeactivateFirewallV1Input =
  typeof VPSDeactivateFirewallV1Input.Type;

// Output Schema
export const VPSDeactivateFirewallV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSDeactivateFirewallV1Output =
  typeof VPSDeactivateFirewallV1Output.Type;

// The operation
/**
 * Deactivate firewall
 *
 * Deactivate a firewall for a specified virtual machine.
 * Use this endpoint to remove firewall protection from VPS instances.
 *
 * @param firewallId - Firewall ID
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSDeactivateFirewallV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSDeactivateFirewallV1Input,
    outputSchema: VPSDeactivateFirewallV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
