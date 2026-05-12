import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const GetLoadBalancerReverseDnsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancerId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/load-balancers/{loadBalancerId}/reverse-dns",
    }),
  );
export type GetLoadBalancerReverseDnsInput =
  typeof GetLoadBalancerReverseDnsInput.Type;

// Output Schema
export const GetLoadBalancerReverseDnsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipv4: Schema.optional(Schema.String),
    ipv6: Schema.optional(Schema.Array(Schema.Unknown)),
  });
export type GetLoadBalancerReverseDnsOutput =
  typeof GetLoadBalancerReverseDnsOutput.Type;

// The operation
/**
 * Get Reverse DNS
 *
 * Get Reverse DNS information for a Load Balancer.
 *
 * @param loadBalancerId - The [Load Balancer id](#operation/list-load-balancers).
 */
export const getLoadBalancerReverseDns = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetLoadBalancerReverseDnsInput,
    outputSchema: GetLoadBalancerReverseDnsOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }),
);
