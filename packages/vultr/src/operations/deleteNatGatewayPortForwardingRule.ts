import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteNatGatewayPortForwardingRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcId: Schema.String.pipe(T.PathParam()),
    natGatewayId: Schema.String.pipe(T.PathParam()),
    portForwardingRuleId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/vpcs/{vpcId}/nat-gateway/{natGatewayId}/global/port-forwarding-rules/{portForwardingRuleId}",
    }),
  );
export type DeleteNatGatewayPortForwardingRuleInput =
  typeof DeleteNatGatewayPortForwardingRuleInput.Type;

// Output Schema
export const DeleteNatGatewayPortForwardingRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteNatGatewayPortForwardingRuleOutput =
  typeof DeleteNatGatewayPortForwardingRuleOutput.Type;

// The operation
/**
 * Delete NAT Gateway Port Forwarding Rule
 *
 * Delete a NAT Gateway port-forwarding Rule.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param natGatewayId - The [NAT Gateway ID](#operation/list-nat-gateways).
 * @param portForwardingRuleId - The [Port Forwarding Rule ID](#operation/list-nat-gateway-port-forwarding-rules).
 */
export const deleteNatGatewayPortForwardingRule =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNatGatewayPortForwardingRuleInput,
    outputSchema: DeleteNatGatewayPortForwardingRuleOutput,
    errors: [BadRequest, NotFound] as const,
  }));
