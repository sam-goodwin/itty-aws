import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const CreateLoadBalancerReverseDnsIpv6Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancerId: Schema.String.pipe(T.PathParam()),
    v6: Schema.optional(
      Schema.Array(
        Schema.Struct({
          domain: Schema.optional(Schema.String),
          ip: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/load-balancers/{loadBalancerId}/reverse-dns",
    }),
  );
export type CreateLoadBalancerReverseDnsIpv6Input =
  typeof CreateLoadBalancerReverseDnsIpv6Input.Type;

// Output Schema
export const CreateLoadBalancerReverseDnsIpv6Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateLoadBalancerReverseDnsIpv6Output =
  typeof CreateLoadBalancerReverseDnsIpv6Output.Type;

// The operation
/**
 * Create Reverse DNS IPV6
 *
 * Create Reverse DNS (ipv6) for a Load Balancer.
 *
 * @param loadBalancerId - The [Load Balancer id](#operation/list-load-balancers).
 */
export const createLoadBalancerReverseDnsIpv6 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateLoadBalancerReverseDnsIpv6Input,
    outputSchema: CreateLoadBalancerReverseDnsIpv6Output,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
