import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteLoadBalancerSslInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancerId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/load-balancers/{loadBalancerId}/ssl" }),
  );
export type DeleteLoadBalancerSslInput = typeof DeleteLoadBalancerSslInput.Type;

// Output Schema
export const DeleteLoadBalancerSslOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteLoadBalancerSslOutput =
  typeof DeleteLoadBalancerSslOutput.Type;

// The operation
/**
 * Delete Load Balancer SSL
 *
 * Delete a Load Balancer SSL.
 *
 * @param loadBalancerId - The [Load Balancer id](#operation/list-load-balancers).
 */
export const deleteLoadBalancerSsl = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteLoadBalancerSslInput,
    outputSchema: DeleteLoadBalancerSslOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }),
);
