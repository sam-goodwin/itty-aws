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
export const CreateLoadBalancerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    region: Schema.optional(Schema.String),
    balancing_algorithm: Schema.optional(Schema.String),
    ssl_redirect: Schema.optional(Schema.Boolean),
    http2: Schema.optional(Schema.Boolean),
    http3: Schema.optional(Schema.Boolean),
    nodes: Schema.optional(Schema.Number),
    proxy_protocol: Schema.optional(Schema.Boolean),
    timeout: Schema.optional(Schema.Number),
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
    sticky_session: Schema.optional(
      Schema.Struct({
        cookie_name: Schema.optional(Schema.String),
      }),
    ),
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
    label: Schema.optional(Schema.String),
    instances: Schema.optional(Schema.Array(Schema.String)),
    firewall_rules: Schema.optional(
      Schema.Array(
        Schema.Struct({
          port: Schema.optional(Schema.Number),
          source: Schema.optional(Schema.String),
          ip_type: Schema.optional(Schema.String),
        }),
      ),
    ),
    private_network: Schema.optional(Schema.String),
    vpc: Schema.optional(Schema.String),
    auto_ssl: Schema.optional(
      Schema.Struct({
        domain_zone: Schema.optional(Schema.String),
        domain_sub: Schema.optional(Schema.String),
      }),
    ),
    global_regions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          region_id: Schema.String,
          vpc_id: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(T.Http({ method: "POST", path: "/load-balancers" }));
export type CreateLoadBalancerInput = typeof CreateLoadBalancerInput.Type;

// Output Schema
export const CreateLoadBalancerOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateLoadBalancerOutput = typeof CreateLoadBalancerOutput.Type;

// The operation
/**
 * Create Load Balancer
 *
 * Create a new Load Balancer in a particular `region`.
 */
export const createLoadBalancer = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateLoadBalancerInput,
  outputSchema: CreateLoadBalancerOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
