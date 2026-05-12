import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateNatGatewayInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcId: Schema.String.pipe(T.PathParam()),
  natGatewayId: Schema.String.pipe(T.PathParam()),
  label: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "PUT", path: "/vpcs/{vpcId}/nat-gateway/{natGatewayId}" }),
);
export type UpdateNatGatewayInput = typeof UpdateNatGatewayInput.Type;

// Output Schema
export const UpdateNatGatewayOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateNatGatewayOutput = typeof UpdateNatGatewayOutput.Type;

// The operation
/**
 * Update NAT Gateway
 *
 * Update information for a NAT Gateway. All attributes are optional. If not set, the attributes will retain their original values.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param natGatewayId - The [NAT Gateway ID](#operation/list-nat-gateways).
 */
export const updateNatGateway = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateNatGatewayInput,
  outputSchema: UpdateNatGatewayOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
