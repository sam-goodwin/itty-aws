import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetLoadBalancerInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  loadBalancerId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/load-balancers/{loadBalancerId}" }));
export type GetLoadBalancerInput = typeof GetLoadBalancerInput.Type;

// Output Schema
export const GetLoadBalancerOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  load_balancer: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      region: Schema.optional(Schema.String),
      label: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      ipv4: Schema.optional(Schema.String),
      ipv6: Schema.optional(Schema.String),
      generic_info: Schema.optional(
        Schema.Struct({
          balancing_algorithm: Schema.optional(Schema.String),
          ssl_redirect: Schema.optional(Schema.Boolean),
          sticky_sessions: Schema.optional(
            Schema.Struct({
              cookie_name: Schema.optional(Schema.String),
            }),
          ),
          proxy_protocol: Schema.optional(Schema.Boolean),
          private_network: Schema.optional(Schema.String),
          vpc: Schema.optional(Schema.String),
        }),
      ),
      health_check: Schema.optional(
        Schema.Struct({
          protocol: Schema.optional(Schema.String),
          port: Schema.optional(Schema.Number),
          path: Schema.optional(Schema.String),
          check_interval: Schema.optional(Schema.Number),
          response_timeout: Schema.optional(Schema.Number),
          unhealthy_threshold: Schema.optional(Schema.Number),
          healthy_threshold: Schema.optional(Schema.Number),
        }),
      ),
      has_ssl: Schema.optional(Schema.Boolean),
      http2: Schema.optional(Schema.Boolean),
      nodes: Schema.optional(Schema.Number),
      forward_rules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            frontend_protocol: Schema.optional(Schema.String),
            frontend_port: Schema.optional(Schema.Number),
            backend_portocol: Schema.optional(Schema.String),
            backend_port: Schema.optional(Schema.Number),
          }),
        ),
      ),
      instances: Schema.optional(Schema.Array(Schema.String)),
      firewall_rules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            port: Schema.optional(Schema.Number),
            source: Schema.optional(Schema.String),
            ip_type: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
});
export type GetLoadBalancerOutput = typeof GetLoadBalancerOutput.Type;

// The operation
/**
 * Get Load Balancer
 *
 * Get information for a Load Balancer.
 *
 * @param loadBalancerId - The [Load Balancer id](#operation/list-load-balancers).
 */
export const getLoadBalancer = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetLoadBalancerInput,
  outputSchema: GetLoadBalancerOutput,
  errors: [BadRequest, NotFound] as const,
}));
