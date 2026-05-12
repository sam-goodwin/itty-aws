import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListNatGatewayFirewallRulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcId: Schema.String.pipe(T.PathParam()),
    natGatewayId: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/vpcs/{vpcId}/nat-gateway/{natGatewayId}/global/firewall-rules",
    }),
  );
export type ListNatGatewayFirewallRulesInput =
  typeof ListNatGatewayFirewallRulesInput.Type;

// Output Schema
export const ListNatGatewayFirewallRulesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewall_rules: Schema.optional(
      Schema.Array(
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
export type ListNatGatewayFirewallRulesOutput =
  typeof ListNatGatewayFirewallRulesOutput.Type;

// The operation
/**
 * List NAT Gateway Firewall Rules
 *
 * List all Firewall Rules for this NAT Gateway.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param natGatewayId - The [NAT Gateway ID](#operation/list-nat-gateways).
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listNatGatewayFirewallRules = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListNatGatewayFirewallRulesInput,
    outputSchema: ListNatGatewayFirewallRulesOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
