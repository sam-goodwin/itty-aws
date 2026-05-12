import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteLoadBalancerAutoSslInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancerId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/load-balancers/{loadBalancerId}/auto_ssl",
    }),
  );
export type DeleteLoadBalancerAutoSslInput =
  typeof DeleteLoadBalancerAutoSslInput.Type;

// Output Schema
export const DeleteLoadBalancerAutoSslOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteLoadBalancerAutoSslOutput =
  typeof DeleteLoadBalancerAutoSslOutput.Type;

// The operation
/**
 * Disable Load Balancer Auto SSL
 *
 * Disable a Load Balancer Auto SSL. This will not remove an ssl certificate from the load balancer.
 *
 * @param loadBalancerId - The [Load Balancer id](#operation/list-load-balancers).
 */
export const deleteLoadBalancerAutoSsl = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteLoadBalancerAutoSslInput,
    outputSchema: DeleteLoadBalancerAutoSslOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }),
);
