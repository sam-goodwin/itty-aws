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
export const CreateLoadBalancerReverseDnsIpv4Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancerId: Schema.String.pipe(T.PathParam()),
    v4: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/load-balancers/{loadBalancerId}/reverse-dns",
    }),
  );
export type CreateLoadBalancerReverseDnsIpv4Input =
  typeof CreateLoadBalancerReverseDnsIpv4Input.Type;

// Output Schema
export const CreateLoadBalancerReverseDnsIpv4Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateLoadBalancerReverseDnsIpv4Output =
  typeof CreateLoadBalancerReverseDnsIpv4Output.Type;

// The operation
/**
 * Update Reverse DNS IPV4
 *
 * Update (ipv4) Reverse DNS for a Load Balancer.
 *
 * @param loadBalancerId - The [Load Balancer id](#operation/list-load-balancers).
 */
export const createLoadBalancerReverseDnsIpv4 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateLoadBalancerReverseDnsIpv4Input,
    outputSchema: CreateLoadBalancerReverseDnsIpv4Output,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
