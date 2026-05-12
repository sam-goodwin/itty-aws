import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetLoadBalancerForwardingRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancerId: Schema.String.pipe(T.PathParam()),
    forwardingRuleId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/load-balancers/{loadBalancerId}/forwarding-rules/{forwardingRuleId}",
    }),
  );
export type GetLoadBalancerForwardingRuleInput =
  typeof GetLoadBalancerForwardingRuleInput.Type;

// Output Schema
export const GetLoadBalancerForwardingRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forwarding_rule: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        frontend_protocol: Schema.optional(Schema.String),
        frontend_port: Schema.optional(Schema.Number),
        backend_protocol: Schema.optional(Schema.String),
        backend_port: Schema.optional(Schema.Number),
      }),
    ),
  });
export type GetLoadBalancerForwardingRuleOutput =
  typeof GetLoadBalancerForwardingRuleOutput.Type;

// The operation
/**
 * Get Forwarding Rule
 *
 * Get information for a Forwarding Rule on a Load Balancer.
 *
 * @param loadBalancerId - The [Load Balancer id](#operation/list-load-balancers).
 * @param forwardingRuleId - The [Forwarding Rule id](#operation/list-load-balancer-forwarding-rules).
 */
export const getLoadBalancerForwardingRule =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetLoadBalancerForwardingRuleInput,
    outputSchema: GetLoadBalancerForwardingRuleOutput,
    errors: [BadRequest, NotFound] as const,
  }));
