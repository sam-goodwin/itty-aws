import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListLoadBalancerForwardingRulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancerId: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/load-balancers/{loadBalancerId}/forwarding-rules",
    }),
  );
export type ListLoadBalancerForwardingRulesInput =
  typeof ListLoadBalancerForwardingRulesInput.Type;

// Output Schema
export const ListLoadBalancerForwardingRulesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forwarding_rules: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          frontend_protocol: Schema.optional(Schema.String),
          frontend_port: Schema.optional(Schema.Number),
          backend_protocol: Schema.optional(Schema.String),
          backend_port: Schema.optional(Schema.Number),
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
export type ListLoadBalancerForwardingRulesOutput =
  typeof ListLoadBalancerForwardingRulesOutput.Type;

// The operation
/**
 * List Forwarding Rules
 *
 * List the fowarding rules for a Load Balancer.
 *
 * @param loadBalancerId - The [Load Balancer id](#operation/list-load-balancers).
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listLoadBalancerForwardingRules =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListLoadBalancerForwardingRulesInput,
    outputSchema: ListLoadBalancerForwardingRulesOutput,
    errors: [BadRequest, NotFound] as const,
  }));
