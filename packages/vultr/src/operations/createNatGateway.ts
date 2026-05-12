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
export const CreateNatGatewayInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcId: Schema.String.pipe(T.PathParam()),
  label: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/vpcs/{vpcId}/nat-gateway" }));
export type CreateNatGatewayInput = typeof CreateNatGatewayInput.Type;

// Output Schema
export const CreateNatGatewayOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type CreateNatGatewayOutput = typeof CreateNatGatewayOutput.Type;

// The operation
/**
 * Create NAT Gateway
 *
 * Create a new NAT Gateway associated with this VPC Network. Supply optional attributes as desired.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 */
export const createNatGateway = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateNatGatewayInput,
  outputSchema: CreateNatGatewayOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
