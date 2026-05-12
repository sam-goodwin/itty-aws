import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetNatGatewayInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcId: Schema.String.pipe(T.PathParam()),
  natGatewayId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/vpcs/{vpcId}/nat-gateway/{natGatewayId}" }),
);
export type GetNatGatewayInput = typeof GetNatGatewayInput.Type;

// Output Schema
export const GetNatGatewayOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nat_gateway: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      vpc_id: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      label: Schema.optional(Schema.String),
      tag: Schema.optional(Schema.String),
      public_ips: Schema.optional(Schema.Array(Schema.String)),
      public_ips_v6: Schema.optional(Schema.Array(Schema.String)),
      private_ips: Schema.optional(Schema.Array(Schema.String)),
      billing: Schema.optional(
        Schema.Struct({
          charges: Schema.optional(Schema.Number),
          monthly: Schema.optional(Schema.Number),
        }),
      ),
    }),
  ),
});
export type GetNatGatewayOutput = typeof GetNatGatewayOutput.Type;

// The operation
/**
 * Get NAT Gateway
 *
 * Get information about a NAT Gateway.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param natGatewayId - The [NAT Gateway ID](#operation/list-nat-gateways).
 */
export const getNatGateway = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetNatGatewayInput,
  outputSchema: GetNatGatewayOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
