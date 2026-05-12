import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteLoadBalancerForwardingRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancerId: Schema.String.pipe(T.PathParam()),
    forwardingRuleId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/load-balancers/{loadBalancerId}/forwarding-rules/{forwardingRuleId}",
    }),
  );
export type DeleteLoadBalancerForwardingRuleInput =
  typeof DeleteLoadBalancerForwardingRuleInput.Type;

// Output Schema
export const DeleteLoadBalancerForwardingRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteLoadBalancerForwardingRuleOutput =
  typeof DeleteLoadBalancerForwardingRuleOutput.Type;

// The operation
/**
 * Delete Forwarding Rule
 *
 * Delete a Forwarding Rule on a Load Balancer.
 *
 * @param loadBalancerId - The [Load Balancer id](#operation/list-load-balancers).
 * @param forwardingRuleId - The [Forwarding Rule id](#operation/list-load-balancer-forwarding-rules).
 */
export const deleteLoadBalancerForwardingRule =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteLoadBalancerForwardingRuleInput,
    outputSchema: DeleteLoadBalancerForwardingRuleOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
