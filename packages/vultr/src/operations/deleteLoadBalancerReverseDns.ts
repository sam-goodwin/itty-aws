import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteLoadBalancerReverseDnsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancerId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/load-balancers/{loadBalancerId}/reverse-dns",
    }),
  );
export type DeleteLoadBalancerReverseDnsInput =
  typeof DeleteLoadBalancerReverseDnsInput.Type;

// Output Schema
export const DeleteLoadBalancerReverseDnsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteLoadBalancerReverseDnsOutput =
  typeof DeleteLoadBalancerReverseDnsOutput.Type;

// The operation
/**
 * Delete Reverse DNS
 *
 * Delete a ipv6 reverse dns entry on a Load Balancer.
 *
 * @param loadBalancerId - The [Load Balancer id](#operation/list-load-balancers).
 */
export const deleteLoadBalancerReverseDns =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteLoadBalancerReverseDnsInput,
    outputSchema: DeleteLoadBalancerReverseDnsOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
