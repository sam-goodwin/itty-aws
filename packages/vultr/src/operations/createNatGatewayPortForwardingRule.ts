import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const CreateNatGatewayPortForwardingRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcId: Schema.String.pipe(T.PathParam()),
    natGatewayId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
    external_port: Schema.optional(Schema.Number),
    internal_ip: Schema.optional(Schema.String),
    internal_port: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/vpcs/{vpcId}/nat-gateway/{natGatewayId}/global/port-forwarding-rules",
    }),
  );
export type CreateNatGatewayPortForwardingRuleInput =
  typeof CreateNatGatewayPortForwardingRuleInput.Type;

// Output Schema
export const CreateNatGatewayPortForwardingRuleOutput =
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
export type CreateNatGatewayPortForwardingRuleOutput =
  typeof CreateNatGatewayPortForwardingRuleOutput.Type;

// The operation
/**
 * Create NAT Gateway Port Forwarding Rule
 *
 * Create a new Port Forwarding Rule associated with this NAT Gateway. Supply optional attributes as desired.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param natGatewayId - The [NAT Gateway ID](#operation/list-nat-gateways).
 */
export const createNatGatewayPortForwardingRule =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateNatGatewayPortForwardingRuleInput,
    outputSchema: CreateNatGatewayPortForwardingRuleOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
