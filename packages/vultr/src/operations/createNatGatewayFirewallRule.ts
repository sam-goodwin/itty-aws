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
export const CreateNatGatewayFirewallRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcId: Schema.String.pipe(T.PathParam()),
    natGatewayId: Schema.String.pipe(T.PathParam()),
    protocol: Schema.optional(Schema.String),
    port: Schema.optional(Schema.String),
    subnet: Schema.optional(Schema.String),
    subnet_size: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/vpcs/{vpcId}/nat-gateway/{natGatewayId}/global/firewall-rules",
    }),
  );
export type CreateNatGatewayFirewallRuleInput =
  typeof CreateNatGatewayFirewallRuleInput.Type;

// Output Schema
export const CreateNatGatewayFirewallRuleOutput =
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
export type CreateNatGatewayFirewallRuleOutput =
  typeof CreateNatGatewayFirewallRuleOutput.Type;

// The operation
/**
 * Create NAT Gateway Firewall Rule
 *
 * Create a new Firewall Rule associated with this NAT Gateway. Supply optional attributes as desired.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param natGatewayId - The [NAT Gateway ID](#operation/list-nat-gateways).
 */
export const createNatGatewayFirewallRule =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateNatGatewayFirewallRuleInput,
    outputSchema: CreateNatGatewayFirewallRuleOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
