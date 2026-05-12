import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateNatGatewayPortForwardingRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcId: Schema.String.pipe(T.PathParam()),
    natGatewayId: Schema.String.pipe(T.PathParam()),
    portForwardingRuleId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
    external_port: Schema.optional(Schema.Number),
    internal_ip: Schema.optional(Schema.String),
    internal_port: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/vpcs/{vpcId}/nat-gateway/{natGatewayId}/global/port-forwarding-rules/{portForwardingRuleId}",
    }),
  );
export type UpdateNatGatewayPortForwardingRuleInput =
  typeof UpdateNatGatewayPortForwardingRuleInput.Type;

// Output Schema
export const UpdateNatGatewayPortForwardingRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateNatGatewayPortForwardingRuleOutput =
  typeof UpdateNatGatewayPortForwardingRuleOutput.Type;

// The operation
/**
 * Update NAT Gateway Port Forwarding Rule
 *
 * Update information for a NAT Gateway Port Forwarding Rule. All attributes are optional. If not set, the attributes will retain their original values.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param natGatewayId - The [NAT Gateway ID](#operation/list-nat-gateways).
 * @param portForwardingRuleId - The [Port Forwarding Rule ID](#operation/list-nat-gateway-port-forwarding-rules).
 */
export const updateNatGatewayPortForwardingRule =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateNatGatewayPortForwardingRuleInput,
    outputSchema: UpdateNatGatewayPortForwardingRuleOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
