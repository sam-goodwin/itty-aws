import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSActivateFirewallV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallId: Schema.Number.pipe(T.PathParam()),
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/firewall/{firewallId}/activate/{virtualMachineId}",
    }),
  );
export type VPSActivateFirewallV1Input = typeof VPSActivateFirewallV1Input.Type;

// Output Schema
export const VPSActivateFirewallV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSActivateFirewallV1Output =
  typeof VPSActivateFirewallV1Output.Type;

// The operation
/**
 * Activate firewall
 *
 * Activate a firewall for a specified virtual machine.
 * Only one firewall can be active for a virtual machine at a time.
 * Use this endpoint to apply firewall rules to VPS instances.
 *
 * @param firewallId - Firewall ID
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSActivateFirewallV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSActivateFirewallV1Input,
    outputSchema: VPSActivateFirewallV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
