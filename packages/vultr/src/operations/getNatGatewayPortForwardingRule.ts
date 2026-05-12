import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetNatGatewayPortForwardingRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcId: Schema.String.pipe(T.PathParam()),
    natGatewayId: Schema.String.pipe(T.PathParam()),
    portForwardingRuleId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/vpcs/{vpcId}/nat-gateway/{natGatewayId}/global/port-forwarding-rules/{portForwardingRuleId}",
    }),
  );
export type GetNatGatewayPortForwardingRuleInput =
  typeof GetNatGatewayPortForwardingRuleInput.Type;

// Output Schema
export const GetNatGatewayPortForwardingRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port_forwarding_rule: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        protocol: Schema.optional(Schema.String),
        external_port: Schema.optional(Schema.Number),
        internal_ip: Schema.optional(Schema.String),
        internal_port: Schema.optional(Schema.Number),
        enabled: Schema.optional(Schema.Boolean),
        description: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
      }),
    ),
  });
export type GetNatGatewayPortForwardingRuleOutput =
  typeof GetNatGatewayPortForwardingRuleOutput.Type;

// The operation
/**
 * Get NAT Gateway Port Forwarding Rule
 *
 * Get information about a NAT Gateway Port Forwarding Rule.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param natGatewayId - The [NAT Gateway ID](#operation/list-nat-gateways).
 * @param portForwardingRuleId - The [Port Forwarding Rule ID](#operation/list-nat-gateway-port-forwarding-rules).
 */
export const getNatGatewayPortForwardingRule =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetNatGatewayPortForwardingRuleInput,
    outputSchema: GetNatGatewayPortForwardingRuleOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
