import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetLoadbalancerFirewallRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadbalancerId: Schema.String.pipe(T.PathParam()),
    firewallRuleId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/load-balancers/{loadbalancerId}/firewall-rules/{firewallRuleId}",
    }),
  );
export type GetLoadbalancerFirewallRuleInput =
  typeof GetLoadbalancerFirewallRuleInput.Type;

// Output Schema
export const GetLoadbalancerFirewallRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    source: Schema.optional(Schema.String),
    ip_type: Schema.optional(Schema.String),
  });
export type GetLoadbalancerFirewallRuleOutput =
  typeof GetLoadbalancerFirewallRuleOutput.Type;

// The operation
/**
 * Get Firewall Rule
 *
 * Get a firewall rule for a Load Balancer.
 */
export const getLoadbalancerFirewallRule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetLoadbalancerFirewallRuleInput,
    outputSchema: GetLoadbalancerFirewallRuleOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
