import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateNatGatewayFirewallRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcId: Schema.String.pipe(T.PathParam()),
    natGatewayId: Schema.String.pipe(T.PathParam()),
    firewallRuleId: Schema.String.pipe(T.PathParam()),
    notes: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/vpcs/{vpcId}/nat-gateway/{natGatewayId}/global/firewall-rules/{firewallRuleId}",
    }),
  );
export type UpdateNatGatewayFirewallRuleInput =
  typeof UpdateNatGatewayFirewallRuleInput.Type;

// Output Schema
export const UpdateNatGatewayFirewallRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateNatGatewayFirewallRuleOutput =
  typeof UpdateNatGatewayFirewallRuleOutput.Type;

// The operation
/**
 * Update NAT Gateway Firewall Rule
 *
 * Update information for a NAT Gateway Firewall Rule. All attributes are optional. If not set, the attributes will retain their original values.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param natGatewayId - The [NAT Gateway ID](#operation/list-nat-gateways).
 * @param firewallRuleId - The [Firewall Rule ID](#operation/list-nat-gateway-firewall-rules).
 */
export const updateNatGatewayFirewallRule =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateNatGatewayFirewallRuleInput,
    outputSchema: UpdateNatGatewayFirewallRuleOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
