import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteNatGatewayFirewallRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcId: Schema.String.pipe(T.PathParam()),
    natGatewayId: Schema.String.pipe(T.PathParam()),
    firewallRuleId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/vpcs/{vpcId}/nat-gateway/{natGatewayId}/global/firewall-rules/{firewallRuleId}",
    }),
  );
export type DeleteNatGatewayFirewallRuleInput =
  typeof DeleteNatGatewayFirewallRuleInput.Type;

// Output Schema
export const DeleteNatGatewayFirewallRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteNatGatewayFirewallRuleOutput =
  typeof DeleteNatGatewayFirewallRuleOutput.Type;

// The operation
/**
 * Delete NAT Gateway Firewall Rule
 *
 * Delete a NAT Gateway Firewall Rule.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param natGatewayId - The [NAT Gateway ID](#operation/list-nat-gateways).
 * @param firewallRuleId - The [Firewall Rule ID](#operation/list-nat-gateway-firewall-rules).
 */
export const deleteNatGatewayFirewallRule =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNatGatewayFirewallRuleInput,
    outputSchema: DeleteNatGatewayFirewallRuleOutput,
    errors: [BadRequest, NotFound] as const,
  }));
