import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteNatGatewayInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcId: Schema.String.pipe(T.PathParam()),
  natGatewayId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/vpcs/{vpcId}/nat-gateway/{natGatewayId}",
  }),
);
export type DeleteNatGatewayInput = typeof DeleteNatGatewayInput.Type;

// Output Schema
export const DeleteNatGatewayOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteNatGatewayOutput = typeof DeleteNatGatewayOutput.Type;

// The operation
/**
 * Delete NAT Gateway
 *
 * Delete a NAT Gateway.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param natGatewayId - The [NAT Gateway ID](#operation/list-nat-gateways).
 */
export const deleteNatGateway = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteNatGatewayInput,
  outputSchema: DeleteNatGatewayOutput,
  errors: [BadRequest, NotFound] as const,
}));
