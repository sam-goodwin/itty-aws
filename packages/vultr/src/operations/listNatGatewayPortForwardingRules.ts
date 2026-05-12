import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListNatGatewayPortForwardingRulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcId: Schema.String.pipe(T.PathParam()),
    natGatewayId: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/vpcs/{vpcId}/nat-gateway/{natGatewayId}/global/port-forwarding-rules",
    }),
  );
export type ListNatGatewayPortForwardingRulesInput =
  typeof ListNatGatewayPortForwardingRulesInput.Type;

// Output Schema
export const ListNatGatewayPortForwardingRulesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port_forwarding_rules: Schema.optional(
      Schema.Array(
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
export type ListNatGatewayPortForwardingRulesOutput =
  typeof ListNatGatewayPortForwardingRulesOutput.Type;

// The operation
/**
 * List NAT Gateway Port Forwarding Rules
 *
 * List all Port Forwarding Rules for this NAT Gateway.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param natGatewayId - The [NAT Gateway ID](#operation/list-nat-gateways).
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listNatGatewayPortForwardingRules =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListNatGatewayPortForwardingRulesInput,
    outputSchema: ListNatGatewayPortForwardingRulesOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
