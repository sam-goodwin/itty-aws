import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSDeleteFirewallRuleV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallId: Schema.Number.pipe(T.PathParam()),
    ruleId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/vps/v1/firewall/{firewallId}/rules/{ruleId}",
    }),
  );
export type VPSDeleteFirewallRuleV1Input =
  typeof VPSDeleteFirewallRuleV1Input.Type;

// Output Schema
export const VPSDeleteFirewallRuleV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type VPSDeleteFirewallRuleV1Output =
  typeof VPSDeleteFirewallRuleV1Output.Type;

// The operation
/**
 * Delete firewall rule
 *
 * Delete a specific firewall rule from a specified firewall.
 * Any virtual machine that has this firewall activated will lose sync with the firewall
 * and will have to be synced again manually.
 * Use this endpoint to remove specific firewall rules.
 *
 * @param firewallId - Firewall ID
 * @param ruleId - Firewall Rule ID
 */
export const VPSDeleteFirewallRuleV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSDeleteFirewallRuleV1Input,
    outputSchema: VPSDeleteFirewallRuleV1Output,
  }),
);
