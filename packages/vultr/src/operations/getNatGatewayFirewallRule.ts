import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetNatGatewayFirewallRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcId: Schema.String.pipe(T.PathParam()),
    natGatewayId: Schema.String.pipe(T.PathParam()),
    firewallRuleId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/vpcs/{vpcId}/nat-gateway/{natGatewayId}/global/firewall-rules/{firewallRuleId}",
    }),
  );
export type GetNatGatewayFirewallRuleInput =
  typeof GetNatGatewayFirewallRuleInput.Type;

// Output Schema
export const GetNatGatewayFirewallRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewall_rule: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        action: Schema.optional(Schema.String),
        protocol: Schema.optional(Schema.String),
        port: Schema.optional(Schema.String),
        subnet: Schema.optional(Schema.String),
        subnet_size: Schema.optional(Schema.Number),
        notes: Schema.optional(Schema.String),
      }),
    ),
  });
export type GetNatGatewayFirewallRuleOutput =
  typeof GetNatGatewayFirewallRuleOutput.Type;

// The operation
/**
 * Get NAT Gateway Firewall Rule
 *
 * Get information about a NAT Gateway Firewall Rule.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param natGatewayId - The [NAT Gateway ID](#operation/list-nat-gateways).
 * @param firewallRuleId - The [Firewall Rule ID](#operation/list-nat-gateway-firewall-rules).
 */
export const getNatGatewayFirewallRule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetNatGatewayFirewallRuleInput,
    outputSchema: GetNatGatewayFirewallRuleOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
