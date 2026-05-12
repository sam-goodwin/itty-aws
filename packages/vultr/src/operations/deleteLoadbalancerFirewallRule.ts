import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteLoadbalancerFirewallRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadbalancerId: Schema.String.pipe(T.PathParam()),
    firewallRuleId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/load-balancers/{loadbalancerId}/firewall-rules/{firewallRuleId}",
    }),
  );
export type DeleteLoadbalancerFirewallRuleInput =
  typeof DeleteLoadbalancerFirewallRuleInput.Type;

// Output Schema
export const DeleteLoadbalancerFirewallRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteLoadbalancerFirewallRuleOutput =
  typeof DeleteLoadbalancerFirewallRuleOutput.Type;

// The operation
/**
 * Delete Firewall Rule
 *
 * Delete a firewall rule for a Load Balancer.
 */
export const deleteLoadbalancerFirewallRule =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteLoadbalancerFirewallRuleInput,
    outputSchema: DeleteLoadbalancerFirewallRuleOutput,
    errors: [BadRequest, NotFound] as const,
  }));
