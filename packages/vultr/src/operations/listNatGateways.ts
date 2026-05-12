import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListNatGatewaysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcId: Schema.String.pipe(T.PathParam()),
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/vpcs/{vpcId}/nat-gateway" }));
export type ListNatGatewaysInput = typeof ListNatGatewaysInput.Type;

// Output Schema
export const ListNatGatewaysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nat_gateways: Schema.optional(
    Schema.Array(
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
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
      links: Schema.optional(
        Schema.Struct({
          next: Schema.optional(Schema.String),
          prev: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type ListNatGatewaysOutput = typeof ListNatGatewaysOutput.Type;

// The operation
/**
 * List NAT Gateways
 *
 * List all NAT Gateways for this VPC Network.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listNatGateways = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListNatGatewaysInput,
  outputSchema: ListNatGatewaysOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
