import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListLoadbalancerFirewallRulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadbalancerId: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.String),
    cursor: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/load-balancers/{loadbalancerId}/firewall-rules",
    }),
  );
export type ListLoadbalancerFirewallRulesInput =
  typeof ListLoadbalancerFirewallRulesInput.Type;

// Output Schema
export const ListLoadbalancerFirewallRulesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    source: Schema.optional(Schema.String),
    ip_type: Schema.optional(Schema.String),
  });
export type ListLoadbalancerFirewallRulesOutput =
  typeof ListLoadbalancerFirewallRulesOutput.Type;

// The operation
/**
 * List Firewall Rules
 *
 * List the firewall rules for a Load Balancer.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listLoadbalancerFirewallRules =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListLoadbalancerFirewallRulesInput,
    outputSchema: ListLoadbalancerFirewallRulesOutput,
    errors: [BadRequest, NotFound] as const,
  }));
