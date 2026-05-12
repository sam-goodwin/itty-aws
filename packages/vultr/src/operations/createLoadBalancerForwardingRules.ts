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
export const CreateLoadBalancerForwardingRulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancerId: Schema.String.pipe(T.PathParam()),
    frontend_protocol: Schema.String,
    frontend_port: Schema.Number,
    backend_protocol: Schema.String,
    backend_port: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/load-balancers/{loadBalancerId}/forwarding-rules",
    }),
  );
export type CreateLoadBalancerForwardingRulesInput =
  typeof CreateLoadBalancerForwardingRulesInput.Type;

// Output Schema
export const CreateLoadBalancerForwardingRulesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateLoadBalancerForwardingRulesOutput =
  typeof CreateLoadBalancerForwardingRulesOutput.Type;

// The operation
/**
 * Create Forwarding Rule
 *
 * Create a new forwarding rule for a Load Balancer.
 *
 * @param loadBalancerId - The [Load Balancer id](#operation/list-load-balancers).
 */
export const createLoadBalancerForwardingRules =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateLoadBalancerForwardingRulesInput,
    outputSchema: CreateLoadBalancerForwardingRulesOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
