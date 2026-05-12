import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateLoadbalancerFirewallRulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadbalancerId: Schema.String.pipe(T.PathParam()),
    firewall_rules: Schema.Array(
      Schema.Struct({
        port: Schema.optional(Schema.Number),
        source: Schema.optional(Schema.String),
        ip_type: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/load-balancers/{loadbalancerId}/firewall-rules",
    }),
  );
export type CreateLoadbalancerFirewallRulesInput =
  typeof CreateLoadbalancerFirewallRulesInput.Type;

// Output Schema
export const CreateLoadbalancerFirewallRulesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateLoadbalancerFirewallRulesOutput =
  typeof CreateLoadbalancerFirewallRulesOutput.Type;

// The operation
/**
 * Create Firewall Rules
 *
 * Create the firewall rules for a Load Balancer.
 */
export const createLoadbalancerFirewallRules =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateLoadbalancerFirewallRulesInput,
    outputSchema: CreateLoadbalancerFirewallRulesOutput,
    errors: [BadRequest, NotFound] as const,
  }));
