import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const UpdateLoadBalancerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancerId: Schema.String.pipe(T.PathParam()),
    ssl: Schema.optional(
      Schema.Struct({
        private_key: Schema.optional(SensitiveString),
        certificate: Schema.optional(Schema.String),
        chain: Schema.optional(Schema.String),
        private_key_b64: Schema.optional(Schema.String),
        certificate_b64: Schema.optional(Schema.String),
        chain_b64: Schema.optional(Schema.String),
      }),
    ),
    sticky_session: Schema.optional(
      Schema.Struct({
        cookie_name: Schema.optional(Schema.String),
      }),
    ),
    forwarding_rules: Schema.optional(
      Schema.Array(
        Schema.Struct({
          frontend_protocol: Schema.optional(Schema.String),
          frontend_port: Schema.optional(Schema.Number),
          backend_protocol: Schema.optional(Schema.String),
          backend_port: Schema.optional(Schema.Number),
        }),
      ),
    ),
    health_check: Schema.optional(
      Schema.Struct({
        protocol: Schema.optional(Schema.String),
        port: Schema.optional(Schema.Number),
        path: Schema.optional(Schema.String),
        check_interval: Schema.optional(Schema.String),
        response_timeout: Schema.optional(Schema.String),
        unhealthy_threshold: Schema.optional(Schema.String),
        healthy_threshold: Schema.optional(Schema.String),
      }),
    ),
    proxy_protocol: Schema.optional(Schema.Boolean),
    timeout: Schema.optional(Schema.Number),
    ssl_redirect: Schema.optional(Schema.Boolean),
    http2: Schema.optional(Schema.Boolean),
    http3: Schema.optional(Schema.Boolean),
    nodes: Schema.optional(Schema.Number),
    balancing_algorithm: Schema.optional(Schema.String),
    instances: Schema.optional(Schema.Array(Schema.String)),
    label: Schema.optional(Schema.String),
    private_network: Schema.optional(Schema.String),
    vpc: Schema.optional(Schema.String),
    firewall_rules: Schema.optional(
      Schema.Array(
        Schema.Struct({
          port: Schema.optional(Schema.Number),
          source: Schema.optional(Schema.String),
          ip_type: Schema.optional(Schema.String),
        }),
      ),
    ),
    auto_ssl: Schema.optional(
      Schema.Struct({
        domain_zone: Schema.optional(Schema.String),
        domain_sub: Schema.optional(Schema.String),
      }),
    ),
    global_regions: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/load-balancers/{loadBalancerId}" }),
  );
export type UpdateLoadBalancerInput = typeof UpdateLoadBalancerInput.Type;

// Output Schema
export const UpdateLoadBalancerOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateLoadBalancerOutput = typeof UpdateLoadBalancerOutput.Type;

// The operation
/**
 * Update Load Balancer
 *
 * Update information for a Load Balancer. All attributes are optional. If not set, the attributes will retain their original values.
 *
 * @param loadBalancerId - The [Load Balancer id](#operation/list-load-balancers).
 */
export const updateLoadBalancer = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateLoadBalancerInput,
  outputSchema: UpdateLoadBalancerOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
