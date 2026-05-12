import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteLoadBalancerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancerId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/load-balancers/{loadBalancerId}" }),
  );
export type DeleteLoadBalancerInput = typeof DeleteLoadBalancerInput.Type;

// Output Schema
export const DeleteLoadBalancerOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteLoadBalancerOutput = typeof DeleteLoadBalancerOutput.Type;

// The operation
/**
 * Delete Load Balancer
 *
 * Delete a Load Balancer.
 *
 * @param loadBalancerId - The [Load Balancer id](#operation/list-load-balancers).
 */
export const deleteLoadBalancer = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteLoadBalancerInput,
  outputSchema: DeleteLoadBalancerOutput,
  errors: [BadRequest, NotFound] as const,
}));
