/**
 * Cloudflare LOAD-BALANCERS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service load-balancers
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Errors
// =============================================================================

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class LoadBalancerNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<LoadBalancerNotFound>()("LoadBalancerNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1001 }],
) {}

export class LoadBalancingNotEnabledForZone extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<LoadBalancingNotEnabledForZone>()(
    "LoadBalancingNotEnabledForZone",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1002, message: { includes: "load balancing not enabled" } }],
) {}

export class MonitorGroupInUse extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MonitorGroupInUse>()("MonitorGroupInUse", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1002, message: { includes: "still referenced" } }],
) {}

export class MonitorGroupNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MonitorGroupNotFound>()("MonitorGroupNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1001 }],
) {}

export class MonitorGroupsNotEnabled extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MonitorGroupsNotEnabled>()(
    "MonitorGroupsNotEnabled",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1002, message: { includes: "monitor groups not enabled" } }],
) {}

export class MonitorIntervalOutOfRange extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MonitorIntervalOutOfRange>()(
    "MonitorIntervalOutOfRange",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1002, message: { includes: "interval is not in range" } }],
) {}

export class MonitorInUse extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MonitorInUse>()("MonitorInUse", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1002, message: { includes: "still referenced" } }],
) {}

export class MonitorNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MonitorNotFound>()("MonitorNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1001 }],
) {}

export class PoolAccessFailed extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<PoolAccessFailed>()("PoolAccessFailed", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1002, message: { includes: "Access Failed" } }],
) {}

export class PoolInUse extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<PoolInUse>()("PoolInUse", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1002, message: { includes: "still referenced" } }],
) {}

export class PoolNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<PoolNotFound>()("PoolNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1001 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface AdaptiveRouting {
  /** Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin ste */
  failoverAcrossPools?: boolean | null;
}
const AdaptiveRouting = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    failoverAcrossPools: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ failoverAcrossPools: "failover_across_pools" })),
) as unknown as Schema.Codec<AdaptiveRouting>;

interface LocationStrategy {
  /** Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.  - `"pop"`: Use the Cloudflare PoP location. - `"resolver_ip"`: Use */
  mode?: "pop" | "resolver_ip" | (string & {}) | null;
  /** Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.  - `"always"`: Always prefer ECS. - `"never"`: Never prefer ECS. - `"proximity"`: Prefer ECS only when `st */
  preferEcs?: "always" | "never" | "proximity" | "geo" | (string & {}) | null;
}
const LocationStrategy = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    mode: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["pop", "resolver_ip"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    preferEcs: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["always", "never", "proximity", "geo"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(Schema.encodeKeys({ mode: "mode", preferEcs: "prefer_ecs" })),
) as unknown as Schema.Codec<LocationStrategy>;

interface RandomSteering {
  /** The default weight for pools in the load balancer that are not specified in the pool_weights map. */
  defaultWeight?: number | null;
  /** A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer. */
  poolWeights?: Record<string, unknown> | null;
}
const RandomSteering = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    defaultWeight: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    poolWeights: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      defaultWeight: "default_weight",
      poolWeights: "pool_weights",
    }),
  ),
) as unknown as Schema.Codec<RandomSteering>;

interface FixedResponse {
  /** The http 'Content-Type' header to include in the response. */
  contentType?: string | null;
  /** The http 'Location' header to include in the response. */
  location?: string | null;
  /** Text to include as the http body. */
  messageBody?: string | null;
  /** The http status code to respond with. */
  statusCode?: number | null;
}
const FixedResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    contentType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    location: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    messageBody: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    statusCode: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      contentType: "content_type",
      location: "location",
      messageBody: "message_body",
      statusCode: "status_code",
    }),
  ),
) as unknown as Schema.Codec<FixedResponse>;

interface SessionAffinityAttributes {
  /** Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer. */
  drainDuration?: number | null;
  /** Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled. At least one HTTP header name must be provided. To specify the exact cookies to be used, inc */
  headers?: string[] | null;
  /** When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. The supported values are: - `"true"`: Load balancing requests mu */
  requireAllHeaders?: boolean | null;
  /** Configures the SameSite attribute on session affinity cookie. Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure att */
  samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {}) | null;
  /** Configures the Secure attribute on session affinity cookie. Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set,  */
  secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
  /** Configures the zero-downtime failover between origins within a pool when session affinity is enabled. This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The suppor */
  zeroDowntimeFailover?: "none" | "temporary" | "sticky" | (string & {}) | null;
}
const SessionAffinityAttributes = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      drainDuration: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      headers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      requireAllHeaders: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      samesite: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["Auto", "Lax", "None", "Strict"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      secure: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["Auto", "Always", "Never"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      zeroDowntimeFailover: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["none", "temporary", "sticky"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        drainDuration: "drain_duration",
        headers: "headers",
        requireAllHeaders: "require_all_headers",
        samesite: "samesite",
        secure: "secure",
        zeroDowntimeFailover: "zero_downtime_failover",
      }),
    ),
) as unknown as Schema.Codec<SessionAffinityAttributes>;

interface Overrides {
  /** Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. For example, zero-d */
  adaptiveRouting?: { failoverAcrossPools?: boolean | null } | null;
  /** A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool ma */
  countryPools?: Record<string, unknown> | null;
  /** A list of pool IDs ordered by their failover priority. Pools defined here are used by default, or when region_pools are not configured for a given region. */
  defaultPools?: string[] | null;
  /** The pool ID to use when all other pools are detected as unhealthy. */
  fallbackPool?: string | null;
  /** Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. */
  locationStrategy?: {
    mode?: "pop" | "resolver_ip" | (string & {}) | null;
    preferEcs?: "always" | "never" | "proximity" | "geo" | (string & {}) | null;
  } | null;
  /** Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using th */
  popPools?: Record<string, unknown> | null;
  /** Configures pool weights.  - `steering_policy="random"`: A random pool is selected with probability proportional to pool weights. - `steering_policy="least_outstanding_requests"`: Use pool weights to s */
  randomSteering?: {
    defaultWeight?: number | null;
    poolWeights?: Record<string, unknown> | null;
  } | null;
  /** A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools. */
  regionPools?: Record<string, unknown> | null;
  /** Specifies the type of session affinity the load balancer should use unless specified as `"none"`. The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is ge */
  sessionAffinity?:
    | "none"
    | "cookie"
    | "ip_cookie"
    | "header"
    | (string & {})
    | null;
  /** Configures attributes for session affinity. */
  sessionAffinityAttributes?: {
    drainDuration?: number | null;
    headers?: string[] | null;
    requireAllHeaders?: boolean | null;
    samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {}) | null;
    secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
    zeroDowntimeFailover?:
      | "none"
      | "temporary"
      | "sticky"
      | (string & {})
      | null;
  } | null;
  /** Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `s */
  sessionAffinityTtl?: number | null;
  /** Steering Policy for this load balancer.  - `"off"`: Use `default_pools`. - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determi */
  steeringPolicy?:
    | "off"
    | "geo"
    | "random"
    | "dynamic_latency"
    | "proximity"
    | "least_outstanding_requests"
    | "least_connections"
    | ""
    | (string & {})
    | null;
  /** Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers. */
  ttl?: number | null;
}
const Overrides = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    adaptiveRouting: Schema.optional(
      Schema.Union([AdaptiveRouting, Schema.Null]),
    ),
    countryPools: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    defaultPools: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    fallbackPool: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    locationStrategy: Schema.optional(
      Schema.Union([LocationStrategy, Schema.Null]),
    ),
    popPools: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    randomSteering: Schema.optional(
      Schema.Union([RandomSteering, Schema.Null]),
    ),
    regionPools: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    sessionAffinity: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["none", "cookie", "ip_cookie", "header"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    sessionAffinityAttributes: Schema.optional(
      Schema.Union([SessionAffinityAttributes, Schema.Null]),
    ),
    sessionAffinityTtl: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    steeringPolicy: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "off",
            "geo",
            "random",
            "dynamic_latency",
            "proximity",
            "least_outstanding_requests",
            "least_connections",
            "",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    ttl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      adaptiveRouting: "adaptive_routing",
      countryPools: "country_pools",
      defaultPools: "default_pools",
      fallbackPool: "fallback_pool",
      locationStrategy: "location_strategy",
      popPools: "pop_pools",
      randomSteering: "random_steering",
      regionPools: "region_pools",
      sessionAffinity: "session_affinity",
      sessionAffinityAttributes: "session_affinity_attributes",
      sessionAffinityTtl: "session_affinity_ttl",
      steeringPolicy: "steering_policy",
      ttl: "ttl",
    }),
  ),
) as unknown as Schema.Codec<Overrides>;

interface Rules {
  /** The condition expressions to evaluate. If the condition evaluates to true, the overrides or fixed_response in this rule will be applied. An empty condition is always true. For more details on conditio */
  condition?: string | null;
  /** Disable this specific rule. It will no longer be evaluated by this load balancer. */
  disabled?: boolean | null;
  /** A collection of fields used to directly respond to the eyeball instead of routing to a pool. If a fixed_response is supplied the rule will be marked as terminates. */
  fixedResponse?: {
    contentType?: string | null;
    location?: string | null;
    messageBody?: string | null;
    statusCode?: number | null;
  } | null;
  /** Name of this rule. Only used for human readability. */
  name?: string | null;
  /** A collection of overrides to apply to the load balancer when this rule's condition is true. All fields are optional. */
  overrides?: {
    adaptiveRouting?: { failoverAcrossPools?: boolean | null } | null;
    countryPools?: Record<string, unknown> | null;
    defaultPools?: string[] | null;
    fallbackPool?: string | null;
    locationStrategy?: {
      mode?: "pop" | "resolver_ip" | (string & {}) | null;
      preferEcs?:
        | "always"
        | "never"
        | "proximity"
        | "geo"
        | (string & {})
        | null;
    } | null;
    popPools?: Record<string, unknown> | null;
    randomSteering?: {
      defaultWeight?: number | null;
      poolWeights?: Record<string, unknown> | null;
    } | null;
    regionPools?: Record<string, unknown> | null;
    sessionAffinity?:
      | "none"
      | "cookie"
      | "ip_cookie"
      | "header"
      | (string & {})
      | null;
    sessionAffinityAttributes?: {
      drainDuration?: number | null;
      headers?: string[] | null;
      requireAllHeaders?: boolean | null;
      samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {}) | null;
      secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
      zeroDowntimeFailover?:
        | "none"
        | "temporary"
        | "sticky"
        | (string & {})
        | null;
    } | null;
    sessionAffinityTtl?: number | null;
    steeringPolicy?:
      | "off"
      | "geo"
      | "random"
      | "dynamic_latency"
      | "proximity"
      | "least_outstanding_requests"
      | "least_connections"
      | ""
      | (string & {})
      | null;
    ttl?: number | null;
  } | null;
  /** The order in which rules should be executed in relation to each other. Lower values are executed first. Values do not need to be sequential. If no value is provided for any rule the array order of the */
  priority?: number | null;
  /** If this rule's condition is true, this causes rule evaluation to stop after processing this rule. */
  terminates?: boolean | null;
}
const Rules = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    condition: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    disabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    fixedResponse: Schema.optional(Schema.Union([FixedResponse, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    overrides: Schema.optional(Schema.Union([Overrides, Schema.Null])),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    terminates: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      condition: "condition",
      disabled: "disabled",
      fixedResponse: "fixed_response",
      name: "name",
      overrides: "overrides",
      priority: "priority",
      terminates: "terminates",
    }),
  ),
) as unknown as Schema.Codec<Rules>;

interface ListLoadBalancersResponseResult {
  id?: string | null;
  /** Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. For example, zero-d */
  adaptiveRouting?: { failoverAcrossPools?: boolean | null } | null;
  /** A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool ma */
  countryPools?: Record<string, unknown> | null;
  createdOn?: string | null;
  /** A list of pool IDs ordered by their failover priority. Pools defined here are used by default, or when region_pools are not configured for a given region. */
  defaultPools?: string[] | null;
  /** Object description. */
  description?: string | null;
  /** Whether to enable (the default) this load balancer. */
  enabled?: boolean | null;
  /** The pool ID to use when all other pools are detected as unhealthy. */
  fallbackPool?: string | null;
  /** Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. */
  locationStrategy?: {
    mode?: "pop" | "resolver_ip" | (string & {}) | null;
    preferEcs?: "always" | "never" | "proximity" | "geo" | (string & {}) | null;
  } | null;
  modifiedOn?: string | null;
  /** The DNS hostname to associate with your Load Balancer. If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will not be used. */
  name?: string | null;
  /** List of networks where Load Balancer or Pool is enabled. */
  networks?: string[] | null;
  /** Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using th */
  popPools?: Record<string, unknown> | null;
  /** Whether the hostname should be gray clouded (false) or orange clouded (true). */
  proxied?: boolean | null;
  /** Configures pool weights.  - `steering_policy="random"`: A random pool is selected with probability proportional to pool weights. - `steering_policy="least_outstanding_requests"`: Use pool weights to s */
  randomSteering?: {
    defaultWeight?: number | null;
    poolWeights?: Record<string, unknown> | null;
  } | null;
  /** A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools. */
  regionPools?: Record<string, unknown> | null;
  /** BETA Field Not General Access: A list of rules for this load balancer to execute. */
  rules?:
    | {
        condition?: string | null;
        disabled?: boolean | null;
        fixedResponse?: {
          contentType?: string | null;
          location?: string | null;
          messageBody?: string | null;
          statusCode?: number | null;
        } | null;
        name?: string | null;
        overrides?: {
          adaptiveRouting?: { failoverAcrossPools?: boolean | null } | null;
          countryPools?: Record<string, unknown> | null;
          defaultPools?: string[] | null;
          fallbackPool?: string | null;
          locationStrategy?: {
            mode?: "pop" | "resolver_ip" | (string & {}) | null;
            preferEcs?:
              | "always"
              | "never"
              | "proximity"
              | "geo"
              | (string & {})
              | null;
          } | null;
          popPools?: Record<string, unknown> | null;
          randomSteering?: {
            defaultWeight?: number | null;
            poolWeights?: Record<string, unknown> | null;
          } | null;
          regionPools?: Record<string, unknown> | null;
          sessionAffinity?:
            | "none"
            | "cookie"
            | "ip_cookie"
            | "header"
            | (string & {})
            | null;
          sessionAffinityAttributes?: {
            drainDuration?: number | null;
            headers?: string[] | null;
            requireAllHeaders?: boolean | null;
            samesite?:
              | "Auto"
              | "Lax"
              | "None"
              | "Strict"
              | (string & {})
              | null;
            secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
            zeroDowntimeFailover?:
              | "none"
              | "temporary"
              | "sticky"
              | (string & {})
              | null;
          } | null;
          sessionAffinityTtl?: number | null;
          steeringPolicy?:
            | "off"
            | "geo"
            | "random"
            | "dynamic_latency"
            | "proximity"
            | "least_outstanding_requests"
            | "least_connections"
            | ""
            | (string & {})
            | null;
          ttl?: number | null;
        } | null;
        priority?: number | null;
        terminates?: boolean | null;
      }[]
    | null;
  /** Specifies the type of session affinity the load balancer should use unless specified as `"none"`. The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is ge */
  sessionAffinity?:
    | "none"
    | "cookie"
    | "ip_cookie"
    | "header"
    | (string & {})
    | null;
  /** Configures attributes for session affinity. */
  sessionAffinityAttributes?: {
    drainDuration?: number | null;
    headers?: string[] | null;
    requireAllHeaders?: boolean | null;
    samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {}) | null;
    secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
    zeroDowntimeFailover?:
      | "none"
      | "temporary"
      | "sticky"
      | (string & {})
      | null;
  } | null;
  /** Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `s */
  sessionAffinityTtl?: number | null;
  /** Steering Policy for this load balancer.  - `"off"`: Use `default_pools`. - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determi */
  steeringPolicy?:
    | "off"
    | "geo"
    | "random"
    | "dynamic_latency"
    | "proximity"
    | "least_outstanding_requests"
    | "least_connections"
    | ""
    | (string & {})
    | null;
  /** Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers. */
  ttl?: number | null;
  zoneName?: string | null;
}
const ListLoadBalancersResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      adaptiveRouting: Schema.optional(
        Schema.Union([AdaptiveRouting, Schema.Null]),
      ),
      countryPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      defaultPools: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      fallbackPool: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      locationStrategy: Schema.optional(
        Schema.Union([LocationStrategy, Schema.Null]),
      ),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      networks: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      popPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      randomSteering: Schema.optional(
        Schema.Union([RandomSteering, Schema.Null]),
      ),
      regionPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      rules: Schema.optional(Schema.Union([Schema.Array(Rules), Schema.Null])),
      sessionAffinity: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["none", "cookie", "ip_cookie", "header"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      sessionAffinityAttributes: Schema.optional(
        Schema.Union([SessionAffinityAttributes, Schema.Null]),
      ),
      sessionAffinityTtl: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      steeringPolicy: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "off",
              "geo",
              "random",
              "dynamic_latency",
              "proximity",
              "least_outstanding_requests",
              "least_connections",
              "",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      ttl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      zoneName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        adaptiveRouting: "adaptive_routing",
        countryPools: "country_pools",
        createdOn: "created_on",
        defaultPools: "default_pools",
        description: "description",
        enabled: "enabled",
        fallbackPool: "fallback_pool",
        locationStrategy: "location_strategy",
        modifiedOn: "modified_on",
        name: "name",
        networks: "networks",
        popPools: "pop_pools",
        proxied: "proxied",
        randomSteering: "random_steering",
        regionPools: "region_pools",
        rules: "rules",
        sessionAffinity: "session_affinity",
        sessionAffinityAttributes: "session_affinity_attributes",
        sessionAffinityTtl: "session_affinity_ttl",
        steeringPolicy: "steering_policy",
        ttl: "ttl",
        zoneName: "zone_name",
      }),
    ),
  ) as unknown as Schema.Codec<ListLoadBalancersResponseResult>;

interface ListMonitorsResponseResult {
  id?: string | null;
  /** Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors. */
  allowInsecure?: boolean | null;
  /** To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times. */
  consecutiveDown?: number | null;
  /** To be marked healthy the monitored origin must pass this healthcheck N consecutive times. */
  consecutiveUp?: number | null;
  createdOn?: string | null;
  /** Object description. */
  description?: string | null;
  /** A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedBody?: string | null;
  /** The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedCodes?: string | null;
  /** Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors. */
  followRedirects?: boolean | null;
  /** The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP and HTTPS mo */
  header?: Record<string, unknown> | null;
  /** The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations. */
  interval?: number | null;
  /** The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks. */
  method?: string | null;
  modifiedOn?: string | null;
  /** The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors. */
  path?: string | null;
  /** The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default 80, HTTPS: d */
  port?: number | null;
  /** Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors. */
  probeZone?: string | null;
  /** The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number | null;
  /** The timeout (in seconds) before marking the health check as failed. */
  timeout?: number | null;
  /** The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'. */
  type?:
    | "http"
    | "https"
    | "tcp"
    | "udp_icmp"
    | "icmp_ping"
    | "smtp"
    | (string & {})
    | null;
}
const ListMonitorsResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      allowInsecure: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      consecutiveDown: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      consecutiveUp: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expectedBody: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expectedCodes: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      followRedirects: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      header: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      interval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      method: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      path: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      probeZone: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      retries: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "http",
              "https",
              "tcp",
              "udp_icmp",
              "icmp_ping",
              "smtp",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        allowInsecure: "allow_insecure",
        consecutiveDown: "consecutive_down",
        consecutiveUp: "consecutive_up",
        createdOn: "created_on",
        description: "description",
        expectedBody: "expected_body",
        expectedCodes: "expected_codes",
        followRedirects: "follow_redirects",
        header: "header",
        interval: "interval",
        method: "method",
        modifiedOn: "modified_on",
        path: "path",
        port: "port",
        probeZone: "probe_zone",
        retries: "retries",
        timeout: "timeout",
        type: "type",
      }),
    ),
) as unknown as Schema.Codec<ListMonitorsResponseResult>;

interface Member {
  /** Whether this monitor is enabled in the group */
  enabled: boolean;
  /** The ID of the Monitor to use for checking the health of origins within this pool. */
  monitorId: string;
  /** Whether this monitor is used for monitoring only (does not affect pool health) */
  monitoringOnly: boolean;
  /** Whether this monitor must be healthy for the pool to be considered healthy */
  mustBeHealthy: boolean;
  /** The timestamp of when the monitor was added to the group */
  createdAt?: string | null;
  /** The timestamp of when the monitor group member was last updated */
  updatedAt?: string | null;
}
const Member = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.Boolean,
    monitorId: Schema.String,
    monitoringOnly: Schema.Boolean,
    mustBeHealthy: Schema.Boolean,
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      enabled: "enabled",
      monitorId: "monitor_id",
      monitoringOnly: "monitoring_only",
      mustBeHealthy: "must_be_healthy",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }),
  ),
) as unknown as Schema.Codec<Member>;

interface ListMonitorGroupsResponseResult {
  /** The ID of the Monitor Group to use for checking the health of origins within this pool. */
  id: string;
  /** A short description of the monitor group */
  description: string;
  /** List of monitors in this group */
  members: {
    enabled: boolean;
    monitorId: string;
    monitoringOnly: boolean;
    mustBeHealthy: boolean;
    createdAt?: string | null;
    updatedAt?: string | null;
  }[];
  /** The timestamp of when the monitor group was created */
  createdOn?: string | null;
  /** The timestamp of when the monitor group was last updated */
  modifiedOn?: string | null;
}
const ListMonitorGroupsResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      description: Schema.String,
      members: Schema.Array(Member),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        description: "description",
        members: "members",
        createdOn: "created_on",
        modifiedOn: "modified_on",
      }),
    ),
  ) as unknown as Schema.Codec<ListMonitorGroupsResponseResult>;

interface Member2 {
  /** Whether this monitor is enabled in the group */
  enabled: boolean;
  /** The ID of the Monitor to use for checking the health of origins within this pool. */
  monitorId: string;
  /** Whether this monitor is used for monitoring only (does not affect pool health) */
  monitoringOnly: boolean;
  /** Whether this monitor must be healthy for the pool to be considered healthy */
  mustBeHealthy: boolean;
}
const Member2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.Boolean,
    monitorId: Schema.String,
    monitoringOnly: Schema.Boolean,
    mustBeHealthy: Schema.Boolean,
  }).pipe(
    Schema.encodeKeys({
      enabled: "enabled",
      monitorId: "monitor_id",
      monitoringOnly: "monitoring_only",
      mustBeHealthy: "must_be_healthy",
    }),
  ),
) as unknown as Schema.Codec<Member2>;

interface GetMonitorGroupReferenceResponseResult {
  referenceType?: "*" | "referral" | "referrer" | (string & {}) | null;
  resourceId?: string | null;
  resourceName?: string | null;
  resourceType?: string | null;
}
const GetMonitorGroupReferenceResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      referenceType: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["*", "referral", "referrer"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      resourceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      resourceName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      resourceType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        referenceType: "reference_type",
        resourceId: "resource_id",
        resourceName: "resource_name",
        resourceType: "resource_type",
      }),
    ),
  ) as unknown as Schema.Codec<GetMonitorGroupReferenceResponseResult>;

interface LoadShedding {
  /** The percent of traffic to shed from the pool, according to the default policy. Applies to new sessions and traffic without session affinity. */
  defaultPercent?: number | null;
  /** The default policy to use when load shedding. A random policy randomly sheds a given percent of requests. A hash policy computes a hash over the CF-Connecting-IP address and sheds all requests origina */
  defaultPolicy?: "random" | "hash" | (string & {}) | null;
  /** The percent of existing sessions to shed from the pool, according to the session policy. */
  sessionPercent?: number | null;
  /** Only the hash policy is supported for existing sessions (to avoid exponential decay). */
  sessionPolicy?: "hash" | null;
}
const LoadShedding = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    defaultPercent: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    defaultPolicy: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["random", "hash"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    sessionPercent: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    sessionPolicy: Schema.optional(
      Schema.Union([Schema.Literal("hash"), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      defaultPercent: "default_percent",
      defaultPolicy: "default_policy",
      sessionPercent: "session_percent",
      sessionPolicy: "session_policy",
    }),
  ),
) as unknown as Schema.Codec<LoadShedding>;

interface FilterOptions {
  /** If set true, disable notifications for this type of resource (pool or origin). */
  disable?: boolean | null;
  /** If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events). */
  healthy?: boolean | null;
}
const FilterOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    disable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    healthy: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<FilterOptions>;

interface NotificationFilter {
  /** Filter options for a particular resource type (pool or origin). Use null to reset. */
  origin?: { disable?: boolean | null; healthy?: boolean | null } | null;
  /** Filter options for a particular resource type (pool or origin). Use null to reset. */
  pool?: { disable?: boolean | null; healthy?: boolean | null } | null;
}
const NotificationFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    origin: Schema.optional(Schema.Union([FilterOptions, Schema.Null])),
    pool: Schema.optional(Schema.Union([FilterOptions, Schema.Null])),
  }),
) as unknown as Schema.Codec<NotificationFilter>;

interface OriginSteering {
  /** The type of origin steering policy to use.  - `"random"`: Select an origin randomly. - `"hash"`: Select an origin by computing a hash over the CF-Connecting-IP address. - `"least_outstanding_requests" */
  policy?:
    | "random"
    | "hash"
    | "least_outstanding_requests"
    | "least_connections"
    | (string & {})
    | null;
}
const OriginSteering = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    policy: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "random",
            "hash",
            "least_outstanding_requests",
            "least_connections",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<OriginSteering>;

interface Header {
  /** The 'Host' header allows to override the hostname set in the HTTP request. Current support is 1 'Host' header override per origin. */
  host?: string[] | null;
}
const Header = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    host: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ host: "Host" })),
) as unknown as Schema.Codec<Header>;

interface Origin {
  /** The IP address (IPv4 or IPv6) of the origin, or its publicly addressable hostname. Hostnames entered here should resolve directly to the origin, and not be a hostname proxied by Cloudflare. To set an  */
  address?: string | null;
  /** This field shows up only if the origin is disabled. This field is set with the time the origin was disabled. */
  disabledAt?: string | null;
  /** Whether to enable (the default) this origin within the pool. Disabled origins will not receive traffic and are excluded from health checks. The origin will only be disabled for the current pool. */
  enabled?: boolean | null;
  /** Whether to flatten CNAME records for this origin, resolving them to A/AAAA records before returning to the client. When true (the default), the director resolves CNAME addresses to their underlying A/ */
  flattenCname?: boolean | null;
  /** The request header is used to pass additional information with an HTTP request. Currently supported header is 'Host'. */
  header?: { host?: string[] | null } | null;
  /** A human-identifiable name for the origin. */
  name?: string | null;
  /** The port for upstream connections. A value of 0 means the default port for the protocol will be used. */
  port?: number | null;
  /** The virtual network subnet ID the origin belongs in. Virtual network must also belong to the account. */
  virtualNetworkId?: string | null;
  /** The weight of this origin relative to other origins in the pool. Based on the configured weight the total traffic is distributed among origins within the pool.  - `origin_steering.policy="least_outsta */
  weight?: number | null;
}
const Origin = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    address: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    disabledAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    flattenCname: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    header: Schema.optional(Schema.Union([Header, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    virtualNetworkId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    weight: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      address: "address",
      disabledAt: "disabled_at",
      enabled: "enabled",
      flattenCname: "flatten_cname",
      header: "header",
      name: "name",
      port: "port",
      virtualNetworkId: "virtual_network_id",
      weight: "weight",
    }),
  ),
) as unknown as Schema.Codec<Origin>;

interface ListPoolsResponseResult {
  id?: string | null;
  /** A list of regions from which to run health checks. Null means every Cloudflare data center. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "SAS"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  createdOn?: string | null;
  /** A human-readable description of the pool. */
  description?: string | null;
  /** This field shows up only if the pool is disabled. This field is set with the time the pool was disabled at. */
  disabledAt?: string | null;
  /** Whether to enable (the default) or disable this pool. Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover t */
  enabled?: boolean | null;
  /** The latitude of the data center containing the origins used in this pool in decimal degrees. If this is set, longitude must also be set. */
  latitude?: number | null;
  /** Configures load shedding policies and percentages for the pool. */
  loadShedding?: {
    defaultPercent?: number | null;
    defaultPolicy?: "random" | "hash" | (string & {}) | null;
    sessionPercent?: number | null;
    sessionPolicy?: "hash" | null;
  } | null;
  /** The longitude of the data center containing the origins used in this pool in decimal degrees. If this is set, latitude must also be set. */
  longitude?: number | null;
  /** The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and will failover to the  */
  minimumOrigins?: number | null;
  modifiedOn?: string | null;
  /** The ID of the Monitor to use for checking the health of origins within this pool. */
  monitor?: string | null;
  /** The ID of the Monitor Group to use for checking the health of origins within this pool. */
  monitorGroup?: string | null;
  /** A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed. */
  name?: string | null;
  /** List of networks where Load Balancer or Pool is enabled. */
  networks?: string[] | null;
  /** This field is now deprecated. It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send health status  */
  notificationEmail?: string | null;
  /** Filter pool and origin health notifications by resource type or health status. Use null to reset. */
  notificationFilter?: {
    origin?: { disable?: boolean | null; healthy?: boolean | null } | null;
    pool?: { disable?: boolean | null; healthy?: boolean | null } | null;
  } | null;
  /** Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity. */
  originSteering?: {
    policy?:
      | "random"
      | "hash"
      | "least_outstanding_requests"
      | "least_connections"
      | (string & {})
      | null;
  } | null;
  /** The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy. */
  origins?:
    | {
        address?: string | null;
        disabledAt?: string | null;
        enabled?: boolean | null;
        flattenCname?: boolean | null;
        header?: { host?: string[] | null } | null;
        name?: string | null;
        port?: number | null;
        virtualNetworkId?: string | null;
        weight?: number | null;
      }[]
    | null;
}
const ListPoolsResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    checkRegions: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "WNAM",
              "ENAM",
              "WEU",
              "EEU",
              "NSAM",
              "SSAM",
              "OC",
              "ME",
              "NAF",
              "SAF",
              "SAS",
              "SEAS",
              "NEAS",
              "ALL_REGIONS",
            ]),
            Schema.String,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    disabledAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    latitude: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    loadShedding: Schema.optional(Schema.Union([LoadShedding, Schema.Null])),
    longitude: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    minimumOrigins: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    monitor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    monitorGroup: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    networks: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    notificationEmail: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    notificationFilter: Schema.optional(
      Schema.Union([NotificationFilter, Schema.Null]),
    ),
    originSteering: Schema.optional(
      Schema.Union([OriginSteering, Schema.Null]),
    ),
    origins: Schema.optional(Schema.Union([Schema.Array(Origin), Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      checkRegions: "check_regions",
      createdOn: "created_on",
      description: "description",
      disabledAt: "disabled_at",
      enabled: "enabled",
      latitude: "latitude",
      loadShedding: "load_shedding",
      longitude: "longitude",
      minimumOrigins: "minimum_origins",
      modifiedOn: "modified_on",
      monitor: "monitor",
      monitorGroup: "monitor_group",
      name: "name",
      networks: "networks",
      notificationEmail: "notification_email",
      notificationFilter: "notification_filter",
      originSteering: "origin_steering",
      origins: "origins",
    }),
  ),
) as unknown as Schema.Codec<ListPoolsResponseResult>;

interface OriginParam {
  /** The IP address (IPv4 or IPv6) of the origin, or its publicly addressable hostname. Hostnames entered here should resolve directly to the origin, and not be a hostname proxied by Cloudflare. To set an  */
  address?: string | null;
  /** Whether to enable (the default) this origin within the pool. Disabled origins will not receive traffic and are excluded from health checks. The origin will only be disabled for the current pool. */
  enabled?: boolean | null;
  /** Whether to flatten CNAME records for this origin, resolving them to A/AAAA records before returning to the client. When true (the default), the director resolves CNAME addresses to their underlying A/ */
  flattenCname?: boolean | null;
  /** The request header is used to pass additional information with an HTTP request. Currently supported header is 'Host'. */
  header?: { host?: string[] | null } | null;
  /** A human-identifiable name for the origin. */
  name?: string | null;
  /** The port for upstream connections. A value of 0 means the default port for the protocol will be used. */
  port?: number | null;
  /** The virtual network subnet ID the origin belongs in. Virtual network must also belong to the account. */
  virtualNetworkId?: string | null;
  /** The weight of this origin relative to other origins in the pool. Based on the configured weight the total traffic is distributed among origins within the pool.  - `origin_steering.policy="least_outsta */
  weight?: number | null;
}
const OriginParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    address: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    flattenCname: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    header: Schema.optional(Schema.Union([Header, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    virtualNetworkId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    weight: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      address: "address",
      enabled: "enabled",
      flattenCname: "flatten_cname",
      header: "header",
      name: "name",
      port: "port",
      virtualNetworkId: "virtual_network_id",
      weight: "weight",
    }),
  ),
) as unknown as Schema.Codec<OriginParam>;

interface Ip {
  /** Failure reason. */
  failureReason?: string | null;
  /** Origin health status. */
  healthy?: boolean | null;
  /** Response code from origin health check. */
  responseCode?: number | null;
  /** Origin RTT (Round Trip Time) response. */
  rtt?: string | null;
}
const Ip = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    failureReason: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    healthy: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    responseCode: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    rtt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      failureReason: "failure_reason",
      healthy: "healthy",
      responseCode: "response_code",
      rtt: "rtt",
    }),
  ),
) as unknown as Schema.Codec<Ip>;

interface Origin2 {
  ip?: {
    failureReason?: string | null;
    healthy?: boolean | null;
    responseCode?: number | null;
    rtt?: string | null;
  } | null;
}
const Origin2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    ip: Schema.optional(Schema.Union([Ip, Schema.Null])),
  }),
) as unknown as Schema.Codec<Origin2>;

interface Pophealth {
  /** Whether health check in region is healthy. */
  healthy?: boolean | null;
  origins?:
    | {
        ip?: {
          failureReason?: string | null;
          healthy?: boolean | null;
          responseCode?: number | null;
          rtt?: string | null;
        } | null;
      }[]
    | null;
}
const Pophealth = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    healthy: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    origins: Schema.optional(
      Schema.Union([Schema.Array(Origin2), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Pophealth>;

interface Resource {
  /** When listed as a reference, the type (direction) of the reference. */
  referenceType?: "referral" | "referrer" | (string & {}) | null;
  /** A list of references to (referrer) or from (referral) this resource. */
  references?: unknown[] | null;
  resourceId?: string | null;
  /** The human-identifiable name of the resource. */
  resourceName?: string | null;
  /** The type of the resource. */
  resourceType?: "load_balancer" | "monitor" | "pool" | (string & {}) | null;
}
const Resource = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    referenceType: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["referral", "referrer"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    references: Schema.optional(
      Schema.Union([Schema.Array(Schema.Unknown), Schema.Null]),
    ),
    resourceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    resourceName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    resourceType: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["load_balancer", "monitor", "pool"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      referenceType: "reference_type",
      references: "references",
      resourceId: "resource_id",
      resourceName: "resource_name",
      resourceType: "resource_type",
    }),
  ),
) as unknown as Schema.Codec<Resource>;

interface ListSearchesResponseResultItem {
  /** A list of resources matching the search query. */
  resources?:
    | {
        referenceType?: "referral" | "referrer" | (string & {}) | null;
        references?: unknown[] | null;
        resourceId?: string | null;
        resourceName?: string | null;
        resourceType?:
          | "load_balancer"
          | "monitor"
          | "pool"
          | (string & {})
          | null;
      }[]
    | null;
}
const ListSearchesResponseResultItem =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      resources: Schema.optional(
        Schema.Union([Schema.Array(Resource), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Codec<ListSearchesResponseResultItem>;

interface ListSearchesResponseResult {
  items?:
    | {
        resources?:
          | {
              referenceType?: "referral" | "referrer" | (string & {}) | null;
              references?: unknown[] | null;
              resourceId?: string | null;
              resourceName?: string | null;
              resourceType?:
                | "load_balancer"
                | "monitor"
                | "pool"
                | (string & {})
                | null;
            }[]
          | null;
      }[]
    | null;
}
const ListSearchesResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      items: Schema.optional(
        Schema.Union([
          Schema.Array(ListSearchesResponseResultItem),
          Schema.Null,
        ]),
      ),
    }),
) as unknown as Schema.Codec<ListSearchesResponseResult>;

interface ListSearchesResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListSearchesResponseResultInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      totalCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        count: "count",
        page: "page",
        perPage: "per_page",
        totalCount: "total_count",
      }),
    ),
  ) as unknown as Schema.Codec<ListSearchesResponseResultInfo>;

// =============================================================================
// LoadBalancer
// =============================================================================

export interface GetLoadBalancerRequest {
  loadBalancerId: string;
  zoneId: string;
}

export const GetLoadBalancerRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      loadBalancerId: Schema.String.pipe(T.HttpPath("loadBalancerId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/load_balancers/{loadBalancerId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetLoadBalancerRequest>;

export interface GetLoadBalancerResponse {
  id?: string | null;
  /** Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. For example, zero-d */
  adaptiveRouting?: { failoverAcrossPools?: boolean | null } | null;
  /** A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool ma */
  countryPools?: Record<string, unknown> | null;
  createdOn?: string | null;
  /** A list of pool IDs ordered by their failover priority. Pools defined here are used by default, or when region_pools are not configured for a given region. */
  defaultPools?: string[] | null;
  /** Object description. */
  description?: string | null;
  /** Whether to enable (the default) this load balancer. */
  enabled?: boolean | null;
  /** The pool ID to use when all other pools are detected as unhealthy. */
  fallbackPool?: string | null;
  /** Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. */
  locationStrategy?: {
    mode?: "pop" | "resolver_ip" | (string & {}) | null;
    preferEcs?: "always" | "never" | "proximity" | "geo" | (string & {}) | null;
  } | null;
  modifiedOn?: string | null;
  /** The DNS hostname to associate with your Load Balancer. If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will not be used. */
  name?: string | null;
  /** List of networks where Load Balancer or Pool is enabled. */
  networks?: string[] | null;
  /** Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using th */
  popPools?: Record<string, unknown> | null;
  /** Whether the hostname should be gray clouded (false) or orange clouded (true). */
  proxied?: boolean | null;
  /** Configures pool weights.  - `steering_policy="random"`: A random pool is selected with probability proportional to pool weights. - `steering_policy="least_outstanding_requests"`: Use pool weights to s */
  randomSteering?: {
    defaultWeight?: number | null;
    poolWeights?: Record<string, unknown> | null;
  } | null;
  /** A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools. */
  regionPools?: Record<string, unknown> | null;
  /** BETA Field Not General Access: A list of rules for this load balancer to execute. */
  rules?:
    | {
        condition?: string | null;
        disabled?: boolean | null;
        fixedResponse?: {
          contentType?: string | null;
          location?: string | null;
          messageBody?: string | null;
          statusCode?: number | null;
        } | null;
        name?: string | null;
        overrides?: {
          adaptiveRouting?: { failoverAcrossPools?: boolean | null } | null;
          countryPools?: Record<string, unknown> | null;
          defaultPools?: string[] | null;
          fallbackPool?: string | null;
          locationStrategy?: {
            mode?: "pop" | "resolver_ip" | (string & {}) | null;
            preferEcs?:
              | "always"
              | "never"
              | "proximity"
              | "geo"
              | (string & {})
              | null;
          } | null;
          popPools?: Record<string, unknown> | null;
          randomSteering?: {
            defaultWeight?: number | null;
            poolWeights?: Record<string, unknown> | null;
          } | null;
          regionPools?: Record<string, unknown> | null;
          sessionAffinity?:
            | "none"
            | "cookie"
            | "ip_cookie"
            | "header"
            | (string & {})
            | null;
          sessionAffinityAttributes?: {
            drainDuration?: number | null;
            headers?: string[] | null;
            requireAllHeaders?: boolean | null;
            samesite?:
              | "Auto"
              | "Lax"
              | "None"
              | "Strict"
              | (string & {})
              | null;
            secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
            zeroDowntimeFailover?:
              | "none"
              | "temporary"
              | "sticky"
              | (string & {})
              | null;
          } | null;
          sessionAffinityTtl?: number | null;
          steeringPolicy?:
            | "off"
            | "geo"
            | "random"
            | "dynamic_latency"
            | "proximity"
            | "least_outstanding_requests"
            | "least_connections"
            | ""
            | (string & {})
            | null;
          ttl?: number | null;
        } | null;
        priority?: number | null;
        terminates?: boolean | null;
      }[]
    | null;
  /** Specifies the type of session affinity the load balancer should use unless specified as `"none"`. The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is ge */
  sessionAffinity?:
    | "none"
    | "cookie"
    | "ip_cookie"
    | "header"
    | (string & {})
    | null;
  /** Configures attributes for session affinity. */
  sessionAffinityAttributes?: {
    drainDuration?: number | null;
    headers?: string[] | null;
    requireAllHeaders?: boolean | null;
    samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {}) | null;
    secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
    zeroDowntimeFailover?:
      | "none"
      | "temporary"
      | "sticky"
      | (string & {})
      | null;
  } | null;
  /** Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `s */
  sessionAffinityTtl?: number | null;
  /** Steering Policy for this load balancer.  - `"off"`: Use `default_pools`. - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determi */
  steeringPolicy?:
    | "off"
    | "geo"
    | "random"
    | "dynamic_latency"
    | "proximity"
    | "least_outstanding_requests"
    | "least_connections"
    | ""
    | (string & {})
    | null;
  /** Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers. */
  ttl?: number | null;
  zoneName?: string | null;
}

export const GetLoadBalancerResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      adaptiveRouting: Schema.optional(
        Schema.Union([AdaptiveRouting, Schema.Null]),
      ),
      countryPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      defaultPools: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      fallbackPool: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      locationStrategy: Schema.optional(
        Schema.Union([LocationStrategy, Schema.Null]),
      ),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      networks: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      popPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      randomSteering: Schema.optional(
        Schema.Union([RandomSteering, Schema.Null]),
      ),
      regionPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      rules: Schema.optional(Schema.Union([Schema.Array(Rules), Schema.Null])),
      sessionAffinity: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["none", "cookie", "ip_cookie", "header"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      sessionAffinityAttributes: Schema.optional(
        Schema.Union([SessionAffinityAttributes, Schema.Null]),
      ),
      sessionAffinityTtl: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      steeringPolicy: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "off",
              "geo",
              "random",
              "dynamic_latency",
              "proximity",
              "least_outstanding_requests",
              "least_connections",
              "",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      ttl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      zoneName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          adaptiveRouting: "adaptive_routing",
          countryPools: "country_pools",
          createdOn: "created_on",
          defaultPools: "default_pools",
          description: "description",
          enabled: "enabled",
          fallbackPool: "fallback_pool",
          locationStrategy: "location_strategy",
          modifiedOn: "modified_on",
          name: "name",
          networks: "networks",
          popPools: "pop_pools",
          proxied: "proxied",
          randomSteering: "random_steering",
          regionPools: "region_pools",
          rules: "rules",
          sessionAffinity: "session_affinity",
          sessionAffinityAttributes: "session_affinity_attributes",
          sessionAffinityTtl: "session_affinity_ttl",
          steeringPolicy: "steering_policy",
          ttl: "ttl",
          zoneName: "zone_name",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetLoadBalancerResponse>;

export type GetLoadBalancerError =
  | DefaultErrors
  | LoadBalancerNotFound
  | Forbidden;

export const getLoadBalancer: API.OperationMethod<
  GetLoadBalancerRequest,
  GetLoadBalancerResponse,
  GetLoadBalancerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLoadBalancerRequest,
  output: GetLoadBalancerResponse,
  errors: [LoadBalancerNotFound, Forbidden],
}));

export interface ListLoadBalancersRequest {
  zoneId: string;
}

export const ListLoadBalancersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/load_balancers" })),
  ) as unknown as Schema.Codec<ListLoadBalancersRequest>;

export interface ListLoadBalancersResponse {
  result: {
    id?: string | null;
    adaptiveRouting?: { failoverAcrossPools?: boolean | null } | null;
    countryPools?: Record<string, unknown> | null;
    createdOn?: string | null;
    defaultPools?: string[] | null;
    description?: string | null;
    enabled?: boolean | null;
    fallbackPool?: string | null;
    locationStrategy?: {
      mode?: "pop" | "resolver_ip" | (string & {}) | null;
      preferEcs?:
        | "always"
        | "never"
        | "proximity"
        | "geo"
        | (string & {})
        | null;
    } | null;
    modifiedOn?: string | null;
    name?: string | null;
    networks?: string[] | null;
    popPools?: Record<string, unknown> | null;
    proxied?: boolean | null;
    randomSteering?: {
      defaultWeight?: number | null;
      poolWeights?: Record<string, unknown> | null;
    } | null;
    regionPools?: Record<string, unknown> | null;
    rules?:
      | {
          condition?: string | null;
          disabled?: boolean | null;
          fixedResponse?: {
            contentType?: string | null;
            location?: string | null;
            messageBody?: string | null;
            statusCode?: number | null;
          } | null;
          name?: string | null;
          overrides?: {
            adaptiveRouting?: { failoverAcrossPools?: boolean | null } | null;
            countryPools?: Record<string, unknown> | null;
            defaultPools?: string[] | null;
            fallbackPool?: string | null;
            locationStrategy?: {
              mode?: "pop" | "resolver_ip" | (string & {}) | null;
              preferEcs?:
                | "always"
                | "never"
                | "proximity"
                | "geo"
                | (string & {})
                | null;
            } | null;
            popPools?: Record<string, unknown> | null;
            randomSteering?: {
              defaultWeight?: number | null;
              poolWeights?: Record<string, unknown> | null;
            } | null;
            regionPools?: Record<string, unknown> | null;
            sessionAffinity?:
              | "none"
              | "cookie"
              | "ip_cookie"
              | "header"
              | (string & {})
              | null;
            sessionAffinityAttributes?: {
              drainDuration?: number | null;
              headers?: string[] | null;
              requireAllHeaders?: boolean | null;
              samesite?:
                | "Auto"
                | "Lax"
                | "None"
                | "Strict"
                | (string & {})
                | null;
              secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
              zeroDowntimeFailover?:
                | "none"
                | "temporary"
                | "sticky"
                | (string & {})
                | null;
            } | null;
            sessionAffinityTtl?: number | null;
            steeringPolicy?:
              | "off"
              | "geo"
              | "random"
              | "dynamic_latency"
              | "proximity"
              | "least_outstanding_requests"
              | "least_connections"
              | ""
              | (string & {})
              | null;
            ttl?: number | null;
          } | null;
          priority?: number | null;
          terminates?: boolean | null;
        }[]
      | null;
    sessionAffinity?:
      | "none"
      | "cookie"
      | "ip_cookie"
      | "header"
      | (string & {})
      | null;
    sessionAffinityAttributes?: {
      drainDuration?: number | null;
      headers?: string[] | null;
      requireAllHeaders?: boolean | null;
      samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {}) | null;
      secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
      zeroDowntimeFailover?:
        | "none"
        | "temporary"
        | "sticky"
        | (string & {})
        | null;
    } | null;
    sessionAffinityTtl?: number | null;
    steeringPolicy?:
      | "off"
      | "geo"
      | "random"
      | "dynamic_latency"
      | "proximity"
      | "least_outstanding_requests"
      | "least_connections"
      | ""
      | (string & {})
      | null;
    ttl?: number | null;
    zoneName?: string | null;
  }[];
}

export const ListLoadBalancersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListLoadBalancersResponseResult),
    }),
  ) as unknown as Schema.Codec<ListLoadBalancersResponse>;

export type ListLoadBalancersError = DefaultErrors;

export const listLoadBalancers: API.PaginatedOperationMethod<
  ListLoadBalancersRequest,
  ListLoadBalancersResponse,
  ListLoadBalancersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLoadBalancersRequest,
  output: ListLoadBalancersResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateLoadBalancerRequest {
  /** Path param */
  zoneId: string;
  /** Body param: A list of pool IDs ordered by their failover priority. Pools defined here are used by default, or when region_pools are not configured for a given region. */
  defaultPools: string[];
  /** Body param: The pool ID to use when all other pools are detected as unhealthy. */
  fallbackPool: string;
  /** Body param: The DNS hostname to associate with your Load Balancer. If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will n */
  name: string;
  /** Body param: Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. For exa */
  adaptiveRouting?: { failoverAcrossPools?: boolean };
  /** Body param: A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding re */
  countryPools?: Record<string, unknown>;
  /** Body param: Object description. */
  description?: string;
  /** Body param: Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. */
  locationStrategy?: {
    mode?: "pop" | "resolver_ip" | (string & {});
    preferEcs?: "always" | "never" | "proximity" | "geo" | (string & {});
  };
  /** Body param: List of networks where Load Balancer or Pool is enabled. */
  networks?: string[];
  /** Body param: Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back */
  popPools?: Record<string, unknown>;
  /** Body param: Whether the hostname should be gray clouded (false) or orange clouded (true). */
  proxied?: boolean;
  /** Body param: Configures pool weights.  - `steering_policy="random"`: A random pool is selected with probability proportional to pool weights. - `steering_policy="least_outstanding_requests"`: Use pool  */
  randomSteering?: {
    defaultWeight?: number;
    poolWeights?: Record<string, unknown>;
  };
  /** Body param: A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools. */
  regionPools?: Record<string, unknown>;
  /** Body param: BETA Field Not General Access: A list of rules for this load balancer to execute. */
  rules?: {
    condition?: string;
    disabled?: boolean;
    fixedResponse?: {
      contentType?: string;
      location?: string;
      messageBody?: string;
      statusCode?: number;
    };
    name?: string;
    overrides?: {
      adaptiveRouting?: { failoverAcrossPools?: boolean };
      countryPools?: Record<string, unknown>;
      defaultPools?: string[];
      fallbackPool?: string;
      locationStrategy?: {
        mode?: "pop" | "resolver_ip" | (string & {});
        preferEcs?: "always" | "never" | "proximity" | "geo" | (string & {});
      };
      popPools?: Record<string, unknown>;
      randomSteering?: {
        defaultWeight?: number;
        poolWeights?: Record<string, unknown>;
      };
      regionPools?: Record<string, unknown>;
      sessionAffinity?:
        | "none"
        | "cookie"
        | "ip_cookie"
        | "header"
        | (string & {});
      sessionAffinityAttributes?: {
        drainDuration?: number;
        headers?: string[];
        requireAllHeaders?: boolean;
        samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {});
        secure?: "Auto" | "Always" | "Never" | (string & {});
        zeroDowntimeFailover?: "none" | "temporary" | "sticky" | (string & {});
      };
      sessionAffinityTtl?: number;
      steeringPolicy?:
        | "off"
        | "geo"
        | "random"
        | "dynamic_latency"
        | "proximity"
        | "least_outstanding_requests"
        | "least_connections"
        | ""
        | (string & {});
      ttl?: number;
    };
    priority?: number;
    terminates?: boolean;
  }[];
  /** Body param: Specifies the type of session affinity the load balancer should use unless specified as `"none"`. The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a  */
  sessionAffinity?: "none" | "cookie" | "ip_cookie" | "header" | (string & {});
  /** Body param: Configures attributes for session affinity. */
  sessionAffinityAttributes?: {
    drainDuration?: number;
    headers?: string[];
    requireAllHeaders?: boolean;
    samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {});
    secure?: "Auto" | "Always" | "Never" | (string & {});
    zeroDowntimeFailover?: "none" | "temporary" | "sticky" | (string & {});
  };
  /** Body param: Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted r */
  sessionAffinityTtl?: number;
  /** Body param: Steering Policy for this load balancer.  - `"off"`: Use `default_pools`. - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools */
  steeringPolicy?:
    | "off"
    | "geo"
    | "random"
    | "dynamic_latency"
    | "proximity"
    | "least_outstanding_requests"
    | "least_connections"
    | ""
    | (string & {});
  /** Body param: Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers. */
  ttl?: number;
}

export const CreateLoadBalancerRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      defaultPools: Schema.Array(Schema.String),
      fallbackPool: Schema.String,
      name: Schema.String,
      adaptiveRouting: Schema.optional(AdaptiveRouting),
      countryPools: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      description: Schema.optional(Schema.String),
      locationStrategy: Schema.optional(LocationStrategy),
      networks: Schema.optional(Schema.Array(Schema.String)),
      popPools: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      proxied: Schema.optional(Schema.Boolean),
      randomSteering: Schema.optional(RandomSteering),
      regionPools: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      rules: Schema.optional(Schema.Array(Rules)),
      sessionAffinity: Schema.optional(
        Schema.Union([
          Schema.Literals(["none", "cookie", "ip_cookie", "header"]),
          Schema.String,
        ]),
      ),
      sessionAffinityAttributes: Schema.optional(SessionAffinityAttributes),
      sessionAffinityTtl: Schema.optional(Schema.Number),
      steeringPolicy: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "off",
            "geo",
            "random",
            "dynamic_latency",
            "proximity",
            "least_outstanding_requests",
            "least_connections",
            "",
          ]),
          Schema.String,
        ]),
      ),
      ttl: Schema.optional(Schema.Number),
    }).pipe(
      Schema.encodeKeys({
        defaultPools: "default_pools",
        fallbackPool: "fallback_pool",
        name: "name",
        adaptiveRouting: "adaptive_routing",
        countryPools: "country_pools",
        description: "description",
        locationStrategy: "location_strategy",
        networks: "networks",
        popPools: "pop_pools",
        proxied: "proxied",
        randomSteering: "random_steering",
        regionPools: "region_pools",
        rules: "rules",
        sessionAffinity: "session_affinity",
        sessionAffinityAttributes: "session_affinity_attributes",
        sessionAffinityTtl: "session_affinity_ttl",
        steeringPolicy: "steering_policy",
        ttl: "ttl",
      }),
      T.Http({ method: "POST", path: "/zones/{zone_id}/load_balancers" }),
    ),
  ) as unknown as Schema.Codec<CreateLoadBalancerRequest>;

export interface CreateLoadBalancerResponse {
  id?: string | null;
  /** Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. For example, zero-d */
  adaptiveRouting?: { failoverAcrossPools?: boolean | null } | null;
  /** A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool ma */
  countryPools?: Record<string, unknown> | null;
  createdOn?: string | null;
  /** A list of pool IDs ordered by their failover priority. Pools defined here are used by default, or when region_pools are not configured for a given region. */
  defaultPools?: string[] | null;
  /** Object description. */
  description?: string | null;
  /** Whether to enable (the default) this load balancer. */
  enabled?: boolean | null;
  /** The pool ID to use when all other pools are detected as unhealthy. */
  fallbackPool?: string | null;
  /** Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. */
  locationStrategy?: {
    mode?: "pop" | "resolver_ip" | (string & {}) | null;
    preferEcs?: "always" | "never" | "proximity" | "geo" | (string & {}) | null;
  } | null;
  modifiedOn?: string | null;
  /** The DNS hostname to associate with your Load Balancer. If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will not be used. */
  name?: string | null;
  /** List of networks where Load Balancer or Pool is enabled. */
  networks?: string[] | null;
  /** Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using th */
  popPools?: Record<string, unknown> | null;
  /** Whether the hostname should be gray clouded (false) or orange clouded (true). */
  proxied?: boolean | null;
  /** Configures pool weights.  - `steering_policy="random"`: A random pool is selected with probability proportional to pool weights. - `steering_policy="least_outstanding_requests"`: Use pool weights to s */
  randomSteering?: {
    defaultWeight?: number | null;
    poolWeights?: Record<string, unknown> | null;
  } | null;
  /** A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools. */
  regionPools?: Record<string, unknown> | null;
  /** BETA Field Not General Access: A list of rules for this load balancer to execute. */
  rules?:
    | {
        condition?: string | null;
        disabled?: boolean | null;
        fixedResponse?: {
          contentType?: string | null;
          location?: string | null;
          messageBody?: string | null;
          statusCode?: number | null;
        } | null;
        name?: string | null;
        overrides?: {
          adaptiveRouting?: { failoverAcrossPools?: boolean | null } | null;
          countryPools?: Record<string, unknown> | null;
          defaultPools?: string[] | null;
          fallbackPool?: string | null;
          locationStrategy?: {
            mode?: "pop" | "resolver_ip" | (string & {}) | null;
            preferEcs?:
              | "always"
              | "never"
              | "proximity"
              | "geo"
              | (string & {})
              | null;
          } | null;
          popPools?: Record<string, unknown> | null;
          randomSteering?: {
            defaultWeight?: number | null;
            poolWeights?: Record<string, unknown> | null;
          } | null;
          regionPools?: Record<string, unknown> | null;
          sessionAffinity?:
            | "none"
            | "cookie"
            | "ip_cookie"
            | "header"
            | (string & {})
            | null;
          sessionAffinityAttributes?: {
            drainDuration?: number | null;
            headers?: string[] | null;
            requireAllHeaders?: boolean | null;
            samesite?:
              | "Auto"
              | "Lax"
              | "None"
              | "Strict"
              | (string & {})
              | null;
            secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
            zeroDowntimeFailover?:
              | "none"
              | "temporary"
              | "sticky"
              | (string & {})
              | null;
          } | null;
          sessionAffinityTtl?: number | null;
          steeringPolicy?:
            | "off"
            | "geo"
            | "random"
            | "dynamic_latency"
            | "proximity"
            | "least_outstanding_requests"
            | "least_connections"
            | ""
            | (string & {})
            | null;
          ttl?: number | null;
        } | null;
        priority?: number | null;
        terminates?: boolean | null;
      }[]
    | null;
  /** Specifies the type of session affinity the load balancer should use unless specified as `"none"`. The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is ge */
  sessionAffinity?:
    | "none"
    | "cookie"
    | "ip_cookie"
    | "header"
    | (string & {})
    | null;
  /** Configures attributes for session affinity. */
  sessionAffinityAttributes?: {
    drainDuration?: number | null;
    headers?: string[] | null;
    requireAllHeaders?: boolean | null;
    samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {}) | null;
    secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
    zeroDowntimeFailover?:
      | "none"
      | "temporary"
      | "sticky"
      | (string & {})
      | null;
  } | null;
  /** Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `s */
  sessionAffinityTtl?: number | null;
  /** Steering Policy for this load balancer.  - `"off"`: Use `default_pools`. - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determi */
  steeringPolicy?:
    | "off"
    | "geo"
    | "random"
    | "dynamic_latency"
    | "proximity"
    | "least_outstanding_requests"
    | "least_connections"
    | ""
    | (string & {})
    | null;
  /** Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers. */
  ttl?: number | null;
  zoneName?: string | null;
}

export const CreateLoadBalancerResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      adaptiveRouting: Schema.optional(
        Schema.Union([AdaptiveRouting, Schema.Null]),
      ),
      countryPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      defaultPools: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      fallbackPool: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      locationStrategy: Schema.optional(
        Schema.Union([LocationStrategy, Schema.Null]),
      ),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      networks: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      popPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      randomSteering: Schema.optional(
        Schema.Union([RandomSteering, Schema.Null]),
      ),
      regionPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      rules: Schema.optional(Schema.Union([Schema.Array(Rules), Schema.Null])),
      sessionAffinity: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["none", "cookie", "ip_cookie", "header"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      sessionAffinityAttributes: Schema.optional(
        Schema.Union([SessionAffinityAttributes, Schema.Null]),
      ),
      sessionAffinityTtl: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      steeringPolicy: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "off",
              "geo",
              "random",
              "dynamic_latency",
              "proximity",
              "least_outstanding_requests",
              "least_connections",
              "",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      ttl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      zoneName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          adaptiveRouting: "adaptive_routing",
          countryPools: "country_pools",
          createdOn: "created_on",
          defaultPools: "default_pools",
          description: "description",
          enabled: "enabled",
          fallbackPool: "fallback_pool",
          locationStrategy: "location_strategy",
          modifiedOn: "modified_on",
          name: "name",
          networks: "networks",
          popPools: "pop_pools",
          proxied: "proxied",
          randomSteering: "random_steering",
          regionPools: "region_pools",
          rules: "rules",
          sessionAffinity: "session_affinity",
          sessionAffinityAttributes: "session_affinity_attributes",
          sessionAffinityTtl: "session_affinity_ttl",
          steeringPolicy: "steering_policy",
          ttl: "ttl",
          zoneName: "zone_name",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateLoadBalancerResponse>;

export type CreateLoadBalancerError =
  | DefaultErrors
  | LoadBalancingNotEnabledForZone
  | Forbidden;

export const createLoadBalancer: API.OperationMethod<
  CreateLoadBalancerRequest,
  CreateLoadBalancerResponse,
  CreateLoadBalancerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateLoadBalancerRequest,
  output: CreateLoadBalancerResponse,
  errors: [LoadBalancingNotEnabledForZone, Forbidden],
}));

export interface UpdateLoadBalancerRequest {
  loadBalancerId: string;
  /** Path param */
  zoneId: string;
  /** Body param: A list of pool IDs ordered by their failover priority. Pools defined here are used by default, or when region_pools are not configured for a given region. */
  defaultPools: string[];
  /** Body param: The pool ID to use when all other pools are detected as unhealthy. */
  fallbackPool: string;
  /** Body param: The DNS hostname to associate with your Load Balancer. If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will n */
  name: string;
  /** Body param: Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. For exa */
  adaptiveRouting?: { failoverAcrossPools?: boolean };
  /** Body param: A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding re */
  countryPools?: Record<string, unknown>;
  /** Body param: Object description. */
  description?: string;
  /** Body param: Whether to enable (the default) this load balancer. */
  enabled?: boolean;
  /** Body param: Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. */
  locationStrategy?: {
    mode?: "pop" | "resolver_ip" | (string & {});
    preferEcs?: "always" | "never" | "proximity" | "geo" | (string & {});
  };
  /** Body param: List of networks where Load Balancer or Pool is enabled. */
  networks?: string[];
  /** Body param: Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back */
  popPools?: Record<string, unknown>;
  /** Body param: Whether the hostname should be gray clouded (false) or orange clouded (true). */
  proxied?: boolean;
  /** Body param: Configures pool weights.  - `steering_policy="random"`: A random pool is selected with probability proportional to pool weights. - `steering_policy="least_outstanding_requests"`: Use pool  */
  randomSteering?: {
    defaultWeight?: number;
    poolWeights?: Record<string, unknown>;
  };
  /** Body param: A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools. */
  regionPools?: Record<string, unknown>;
  /** Body param: BETA Field Not General Access: A list of rules for this load balancer to execute. */
  rules?: {
    condition?: string;
    disabled?: boolean;
    fixedResponse?: {
      contentType?: string;
      location?: string;
      messageBody?: string;
      statusCode?: number;
    };
    name?: string;
    overrides?: {
      adaptiveRouting?: { failoverAcrossPools?: boolean };
      countryPools?: Record<string, unknown>;
      defaultPools?: string[];
      fallbackPool?: string;
      locationStrategy?: {
        mode?: "pop" | "resolver_ip" | (string & {});
        preferEcs?: "always" | "never" | "proximity" | "geo" | (string & {});
      };
      popPools?: Record<string, unknown>;
      randomSteering?: {
        defaultWeight?: number;
        poolWeights?: Record<string, unknown>;
      };
      regionPools?: Record<string, unknown>;
      sessionAffinity?:
        | "none"
        | "cookie"
        | "ip_cookie"
        | "header"
        | (string & {});
      sessionAffinityAttributes?: {
        drainDuration?: number;
        headers?: string[];
        requireAllHeaders?: boolean;
        samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {});
        secure?: "Auto" | "Always" | "Never" | (string & {});
        zeroDowntimeFailover?: "none" | "temporary" | "sticky" | (string & {});
      };
      sessionAffinityTtl?: number;
      steeringPolicy?:
        | "off"
        | "geo"
        | "random"
        | "dynamic_latency"
        | "proximity"
        | "least_outstanding_requests"
        | "least_connections"
        | ""
        | (string & {});
      ttl?: number;
    };
    priority?: number;
    terminates?: boolean;
  }[];
  /** Body param: Specifies the type of session affinity the load balancer should use unless specified as `"none"`. The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a  */
  sessionAffinity?: "none" | "cookie" | "ip_cookie" | "header" | (string & {});
  /** Body param: Configures attributes for session affinity. */
  sessionAffinityAttributes?: {
    drainDuration?: number;
    headers?: string[];
    requireAllHeaders?: boolean;
    samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {});
    secure?: "Auto" | "Always" | "Never" | (string & {});
    zeroDowntimeFailover?: "none" | "temporary" | "sticky" | (string & {});
  };
  /** Body param: Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted r */
  sessionAffinityTtl?: number;
  /** Body param: Steering Policy for this load balancer.  - `"off"`: Use `default_pools`. - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools */
  steeringPolicy?:
    | "off"
    | "geo"
    | "random"
    | "dynamic_latency"
    | "proximity"
    | "least_outstanding_requests"
    | "least_connections"
    | ""
    | (string & {});
  /** Body param: Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers. */
  ttl?: number;
}

export const UpdateLoadBalancerRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      loadBalancerId: Schema.String.pipe(T.HttpPath("loadBalancerId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      defaultPools: Schema.Array(Schema.String),
      fallbackPool: Schema.String,
      name: Schema.String,
      adaptiveRouting: Schema.optional(AdaptiveRouting),
      countryPools: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      description: Schema.optional(Schema.String),
      enabled: Schema.optional(Schema.Boolean),
      locationStrategy: Schema.optional(LocationStrategy),
      networks: Schema.optional(Schema.Array(Schema.String)),
      popPools: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      proxied: Schema.optional(Schema.Boolean),
      randomSteering: Schema.optional(RandomSteering),
      regionPools: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      rules: Schema.optional(Schema.Array(Rules)),
      sessionAffinity: Schema.optional(
        Schema.Union([
          Schema.Literals(["none", "cookie", "ip_cookie", "header"]),
          Schema.String,
        ]),
      ),
      sessionAffinityAttributes: Schema.optional(SessionAffinityAttributes),
      sessionAffinityTtl: Schema.optional(Schema.Number),
      steeringPolicy: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "off",
            "geo",
            "random",
            "dynamic_latency",
            "proximity",
            "least_outstanding_requests",
            "least_connections",
            "",
          ]),
          Schema.String,
        ]),
      ),
      ttl: Schema.optional(Schema.Number),
    }).pipe(
      Schema.encodeKeys({
        defaultPools: "default_pools",
        fallbackPool: "fallback_pool",
        name: "name",
        adaptiveRouting: "adaptive_routing",
        countryPools: "country_pools",
        description: "description",
        enabled: "enabled",
        locationStrategy: "location_strategy",
        networks: "networks",
        popPools: "pop_pools",
        proxied: "proxied",
        randomSteering: "random_steering",
        regionPools: "region_pools",
        rules: "rules",
        sessionAffinity: "session_affinity",
        sessionAffinityAttributes: "session_affinity_attributes",
        sessionAffinityTtl: "session_affinity_ttl",
        steeringPolicy: "steering_policy",
        ttl: "ttl",
      }),
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/load_balancers/{loadBalancerId}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateLoadBalancerRequest>;

export interface UpdateLoadBalancerResponse {
  id?: string | null;
  /** Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. For example, zero-d */
  adaptiveRouting?: { failoverAcrossPools?: boolean | null } | null;
  /** A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool ma */
  countryPools?: Record<string, unknown> | null;
  createdOn?: string | null;
  /** A list of pool IDs ordered by their failover priority. Pools defined here are used by default, or when region_pools are not configured for a given region. */
  defaultPools?: string[] | null;
  /** Object description. */
  description?: string | null;
  /** Whether to enable (the default) this load balancer. */
  enabled?: boolean | null;
  /** The pool ID to use when all other pools are detected as unhealthy. */
  fallbackPool?: string | null;
  /** Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. */
  locationStrategy?: {
    mode?: "pop" | "resolver_ip" | (string & {}) | null;
    preferEcs?: "always" | "never" | "proximity" | "geo" | (string & {}) | null;
  } | null;
  modifiedOn?: string | null;
  /** The DNS hostname to associate with your Load Balancer. If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will not be used. */
  name?: string | null;
  /** List of networks where Load Balancer or Pool is enabled. */
  networks?: string[] | null;
  /** Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using th */
  popPools?: Record<string, unknown> | null;
  /** Whether the hostname should be gray clouded (false) or orange clouded (true). */
  proxied?: boolean | null;
  /** Configures pool weights.  - `steering_policy="random"`: A random pool is selected with probability proportional to pool weights. - `steering_policy="least_outstanding_requests"`: Use pool weights to s */
  randomSteering?: {
    defaultWeight?: number | null;
    poolWeights?: Record<string, unknown> | null;
  } | null;
  /** A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools. */
  regionPools?: Record<string, unknown> | null;
  /** BETA Field Not General Access: A list of rules for this load balancer to execute. */
  rules?:
    | {
        condition?: string | null;
        disabled?: boolean | null;
        fixedResponse?: {
          contentType?: string | null;
          location?: string | null;
          messageBody?: string | null;
          statusCode?: number | null;
        } | null;
        name?: string | null;
        overrides?: {
          adaptiveRouting?: { failoverAcrossPools?: boolean | null } | null;
          countryPools?: Record<string, unknown> | null;
          defaultPools?: string[] | null;
          fallbackPool?: string | null;
          locationStrategy?: {
            mode?: "pop" | "resolver_ip" | (string & {}) | null;
            preferEcs?:
              | "always"
              | "never"
              | "proximity"
              | "geo"
              | (string & {})
              | null;
          } | null;
          popPools?: Record<string, unknown> | null;
          randomSteering?: {
            defaultWeight?: number | null;
            poolWeights?: Record<string, unknown> | null;
          } | null;
          regionPools?: Record<string, unknown> | null;
          sessionAffinity?:
            | "none"
            | "cookie"
            | "ip_cookie"
            | "header"
            | (string & {})
            | null;
          sessionAffinityAttributes?: {
            drainDuration?: number | null;
            headers?: string[] | null;
            requireAllHeaders?: boolean | null;
            samesite?:
              | "Auto"
              | "Lax"
              | "None"
              | "Strict"
              | (string & {})
              | null;
            secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
            zeroDowntimeFailover?:
              | "none"
              | "temporary"
              | "sticky"
              | (string & {})
              | null;
          } | null;
          sessionAffinityTtl?: number | null;
          steeringPolicy?:
            | "off"
            | "geo"
            | "random"
            | "dynamic_latency"
            | "proximity"
            | "least_outstanding_requests"
            | "least_connections"
            | ""
            | (string & {})
            | null;
          ttl?: number | null;
        } | null;
        priority?: number | null;
        terminates?: boolean | null;
      }[]
    | null;
  /** Specifies the type of session affinity the load balancer should use unless specified as `"none"`. The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is ge */
  sessionAffinity?:
    | "none"
    | "cookie"
    | "ip_cookie"
    | "header"
    | (string & {})
    | null;
  /** Configures attributes for session affinity. */
  sessionAffinityAttributes?: {
    drainDuration?: number | null;
    headers?: string[] | null;
    requireAllHeaders?: boolean | null;
    samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {}) | null;
    secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
    zeroDowntimeFailover?:
      | "none"
      | "temporary"
      | "sticky"
      | (string & {})
      | null;
  } | null;
  /** Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `s */
  sessionAffinityTtl?: number | null;
  /** Steering Policy for this load balancer.  - `"off"`: Use `default_pools`. - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determi */
  steeringPolicy?:
    | "off"
    | "geo"
    | "random"
    | "dynamic_latency"
    | "proximity"
    | "least_outstanding_requests"
    | "least_connections"
    | ""
    | (string & {})
    | null;
  /** Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers. */
  ttl?: number | null;
  zoneName?: string | null;
}

export const UpdateLoadBalancerResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      adaptiveRouting: Schema.optional(
        Schema.Union([AdaptiveRouting, Schema.Null]),
      ),
      countryPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      defaultPools: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      fallbackPool: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      locationStrategy: Schema.optional(
        Schema.Union([LocationStrategy, Schema.Null]),
      ),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      networks: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      popPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      randomSteering: Schema.optional(
        Schema.Union([RandomSteering, Schema.Null]),
      ),
      regionPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      rules: Schema.optional(Schema.Union([Schema.Array(Rules), Schema.Null])),
      sessionAffinity: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["none", "cookie", "ip_cookie", "header"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      sessionAffinityAttributes: Schema.optional(
        Schema.Union([SessionAffinityAttributes, Schema.Null]),
      ),
      sessionAffinityTtl: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      steeringPolicy: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "off",
              "geo",
              "random",
              "dynamic_latency",
              "proximity",
              "least_outstanding_requests",
              "least_connections",
              "",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      ttl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      zoneName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          adaptiveRouting: "adaptive_routing",
          countryPools: "country_pools",
          createdOn: "created_on",
          defaultPools: "default_pools",
          description: "description",
          enabled: "enabled",
          fallbackPool: "fallback_pool",
          locationStrategy: "location_strategy",
          modifiedOn: "modified_on",
          name: "name",
          networks: "networks",
          popPools: "pop_pools",
          proxied: "proxied",
          randomSteering: "random_steering",
          regionPools: "region_pools",
          rules: "rules",
          sessionAffinity: "session_affinity",
          sessionAffinityAttributes: "session_affinity_attributes",
          sessionAffinityTtl: "session_affinity_ttl",
          steeringPolicy: "steering_policy",
          ttl: "ttl",
          zoneName: "zone_name",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateLoadBalancerResponse>;

export type UpdateLoadBalancerError =
  | DefaultErrors
  | LoadBalancerNotFound
  | LoadBalancingNotEnabledForZone
  | Forbidden;

export const updateLoadBalancer: API.OperationMethod<
  UpdateLoadBalancerRequest,
  UpdateLoadBalancerResponse,
  UpdateLoadBalancerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateLoadBalancerRequest,
  output: UpdateLoadBalancerResponse,
  errors: [LoadBalancerNotFound, LoadBalancingNotEnabledForZone, Forbidden],
}));

export interface PatchLoadBalancerRequest {
  loadBalancerId: string;
  /** Path param */
  zoneId: string;
  /** Body param: Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. For exa */
  adaptiveRouting?: { failoverAcrossPools?: boolean };
  /** Body param: A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding re */
  countryPools?: Record<string, unknown>;
  /** Body param: A list of pool IDs ordered by their failover priority. Pools defined here are used by default, or when region_pools are not configured for a given region. */
  defaultPools?: string[];
  /** Body param: Object description. */
  description?: string;
  /** Body param: Whether to enable (the default) this load balancer. */
  enabled?: boolean;
  /** Body param: The pool ID to use when all other pools are detected as unhealthy. */
  fallbackPool?: string;
  /** Body param: Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. */
  locationStrategy?: {
    mode?: "pop" | "resolver_ip" | (string & {});
    preferEcs?: "always" | "never" | "proximity" | "geo" | (string & {});
  };
  /** Body param: The DNS hostname to associate with your Load Balancer. If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will n */
  name?: string;
  /** Body param: Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back */
  popPools?: Record<string, unknown>;
  /** Body param: Whether the hostname should be gray clouded (false) or orange clouded (true). */
  proxied?: boolean;
  /** Body param: Configures pool weights.  - `steering_policy="random"`: A random pool is selected with probability proportional to pool weights. - `steering_policy="least_outstanding_requests"`: Use pool  */
  randomSteering?: {
    defaultWeight?: number;
    poolWeights?: Record<string, unknown>;
  };
  /** Body param: A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools. */
  regionPools?: Record<string, unknown>;
  /** Body param: BETA Field Not General Access: A list of rules for this load balancer to execute. */
  rules?: {
    condition?: string;
    disabled?: boolean;
    fixedResponse?: {
      contentType?: string;
      location?: string;
      messageBody?: string;
      statusCode?: number;
    };
    name?: string;
    overrides?: {
      adaptiveRouting?: { failoverAcrossPools?: boolean };
      countryPools?: Record<string, unknown>;
      defaultPools?: string[];
      fallbackPool?: string;
      locationStrategy?: {
        mode?: "pop" | "resolver_ip" | (string & {});
        preferEcs?: "always" | "never" | "proximity" | "geo" | (string & {});
      };
      popPools?: Record<string, unknown>;
      randomSteering?: {
        defaultWeight?: number;
        poolWeights?: Record<string, unknown>;
      };
      regionPools?: Record<string, unknown>;
      sessionAffinity?:
        | "none"
        | "cookie"
        | "ip_cookie"
        | "header"
        | (string & {});
      sessionAffinityAttributes?: {
        drainDuration?: number;
        headers?: string[];
        requireAllHeaders?: boolean;
        samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {});
        secure?: "Auto" | "Always" | "Never" | (string & {});
        zeroDowntimeFailover?: "none" | "temporary" | "sticky" | (string & {});
      };
      sessionAffinityTtl?: number;
      steeringPolicy?:
        | "off"
        | "geo"
        | "random"
        | "dynamic_latency"
        | "proximity"
        | "least_outstanding_requests"
        | "least_connections"
        | ""
        | (string & {});
      ttl?: number;
    };
    priority?: number;
    terminates?: boolean;
  }[];
  /** Body param: Specifies the type of session affinity the load balancer should use unless specified as `"none"`. The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a  */
  sessionAffinity?: "none" | "cookie" | "ip_cookie" | "header" | (string & {});
  /** Body param: Configures attributes for session affinity. */
  sessionAffinityAttributes?: {
    drainDuration?: number;
    headers?: string[];
    requireAllHeaders?: boolean;
    samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {});
    secure?: "Auto" | "Always" | "Never" | (string & {});
    zeroDowntimeFailover?: "none" | "temporary" | "sticky" | (string & {});
  };
  /** Body param: Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted r */
  sessionAffinityTtl?: number;
  /** Body param: Steering Policy for this load balancer.  - `"off"`: Use `default_pools`. - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools */
  steeringPolicy?:
    | "off"
    | "geo"
    | "random"
    | "dynamic_latency"
    | "proximity"
    | "least_outstanding_requests"
    | "least_connections"
    | ""
    | (string & {});
  /** Body param: Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers. */
  ttl?: number;
}

export const PatchLoadBalancerRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      loadBalancerId: Schema.String.pipe(T.HttpPath("loadBalancerId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      adaptiveRouting: Schema.optional(AdaptiveRouting),
      countryPools: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      defaultPools: Schema.optional(Schema.Array(Schema.String)),
      description: Schema.optional(Schema.String),
      enabled: Schema.optional(Schema.Boolean),
      fallbackPool: Schema.optional(Schema.String),
      locationStrategy: Schema.optional(LocationStrategy),
      name: Schema.optional(Schema.String),
      popPools: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      proxied: Schema.optional(Schema.Boolean),
      randomSteering: Schema.optional(RandomSteering),
      regionPools: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      rules: Schema.optional(Schema.Array(Rules)),
      sessionAffinity: Schema.optional(
        Schema.Union([
          Schema.Literals(["none", "cookie", "ip_cookie", "header"]),
          Schema.String,
        ]),
      ),
      sessionAffinityAttributes: Schema.optional(SessionAffinityAttributes),
      sessionAffinityTtl: Schema.optional(Schema.Number),
      steeringPolicy: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "off",
            "geo",
            "random",
            "dynamic_latency",
            "proximity",
            "least_outstanding_requests",
            "least_connections",
            "",
          ]),
          Schema.String,
        ]),
      ),
      ttl: Schema.optional(Schema.Number),
    }).pipe(
      Schema.encodeKeys({
        adaptiveRouting: "adaptive_routing",
        countryPools: "country_pools",
        defaultPools: "default_pools",
        description: "description",
        enabled: "enabled",
        fallbackPool: "fallback_pool",
        locationStrategy: "location_strategy",
        name: "name",
        popPools: "pop_pools",
        proxied: "proxied",
        randomSteering: "random_steering",
        regionPools: "region_pools",
        rules: "rules",
        sessionAffinity: "session_affinity",
        sessionAffinityAttributes: "session_affinity_attributes",
        sessionAffinityTtl: "session_affinity_ttl",
        steeringPolicy: "steering_policy",
        ttl: "ttl",
      }),
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/load_balancers/{loadBalancerId}",
      }),
    ),
  ) as unknown as Schema.Codec<PatchLoadBalancerRequest>;

export interface PatchLoadBalancerResponse {
  id?: string | null;
  /** Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. For example, zero-d */
  adaptiveRouting?: { failoverAcrossPools?: boolean | null } | null;
  /** A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool ma */
  countryPools?: Record<string, unknown> | null;
  createdOn?: string | null;
  /** A list of pool IDs ordered by their failover priority. Pools defined here are used by default, or when region_pools are not configured for a given region. */
  defaultPools?: string[] | null;
  /** Object description. */
  description?: string | null;
  /** Whether to enable (the default) this load balancer. */
  enabled?: boolean | null;
  /** The pool ID to use when all other pools are detected as unhealthy. */
  fallbackPool?: string | null;
  /** Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. */
  locationStrategy?: {
    mode?: "pop" | "resolver_ip" | (string & {}) | null;
    preferEcs?: "always" | "never" | "proximity" | "geo" | (string & {}) | null;
  } | null;
  modifiedOn?: string | null;
  /** The DNS hostname to associate with your Load Balancer. If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will not be used. */
  name?: string | null;
  /** List of networks where Load Balancer or Pool is enabled. */
  networks?: string[] | null;
  /** Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using th */
  popPools?: Record<string, unknown> | null;
  /** Whether the hostname should be gray clouded (false) or orange clouded (true). */
  proxied?: boolean | null;
  /** Configures pool weights.  - `steering_policy="random"`: A random pool is selected with probability proportional to pool weights. - `steering_policy="least_outstanding_requests"`: Use pool weights to s */
  randomSteering?: {
    defaultWeight?: number | null;
    poolWeights?: Record<string, unknown> | null;
  } | null;
  /** A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools. */
  regionPools?: Record<string, unknown> | null;
  /** BETA Field Not General Access: A list of rules for this load balancer to execute. */
  rules?:
    | {
        condition?: string | null;
        disabled?: boolean | null;
        fixedResponse?: {
          contentType?: string | null;
          location?: string | null;
          messageBody?: string | null;
          statusCode?: number | null;
        } | null;
        name?: string | null;
        overrides?: {
          adaptiveRouting?: { failoverAcrossPools?: boolean | null } | null;
          countryPools?: Record<string, unknown> | null;
          defaultPools?: string[] | null;
          fallbackPool?: string | null;
          locationStrategy?: {
            mode?: "pop" | "resolver_ip" | (string & {}) | null;
            preferEcs?:
              | "always"
              | "never"
              | "proximity"
              | "geo"
              | (string & {})
              | null;
          } | null;
          popPools?: Record<string, unknown> | null;
          randomSteering?: {
            defaultWeight?: number | null;
            poolWeights?: Record<string, unknown> | null;
          } | null;
          regionPools?: Record<string, unknown> | null;
          sessionAffinity?:
            | "none"
            | "cookie"
            | "ip_cookie"
            | "header"
            | (string & {})
            | null;
          sessionAffinityAttributes?: {
            drainDuration?: number | null;
            headers?: string[] | null;
            requireAllHeaders?: boolean | null;
            samesite?:
              | "Auto"
              | "Lax"
              | "None"
              | "Strict"
              | (string & {})
              | null;
            secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
            zeroDowntimeFailover?:
              | "none"
              | "temporary"
              | "sticky"
              | (string & {})
              | null;
          } | null;
          sessionAffinityTtl?: number | null;
          steeringPolicy?:
            | "off"
            | "geo"
            | "random"
            | "dynamic_latency"
            | "proximity"
            | "least_outstanding_requests"
            | "least_connections"
            | ""
            | (string & {})
            | null;
          ttl?: number | null;
        } | null;
        priority?: number | null;
        terminates?: boolean | null;
      }[]
    | null;
  /** Specifies the type of session affinity the load balancer should use unless specified as `"none"`. The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is ge */
  sessionAffinity?:
    | "none"
    | "cookie"
    | "ip_cookie"
    | "header"
    | (string & {})
    | null;
  /** Configures attributes for session affinity. */
  sessionAffinityAttributes?: {
    drainDuration?: number | null;
    headers?: string[] | null;
    requireAllHeaders?: boolean | null;
    samesite?: "Auto" | "Lax" | "None" | "Strict" | (string & {}) | null;
    secure?: "Auto" | "Always" | "Never" | (string & {}) | null;
    zeroDowntimeFailover?:
      | "none"
      | "temporary"
      | "sticky"
      | (string & {})
      | null;
  } | null;
  /** Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `s */
  sessionAffinityTtl?: number | null;
  /** Steering Policy for this load balancer.  - `"off"`: Use `default_pools`. - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determi */
  steeringPolicy?:
    | "off"
    | "geo"
    | "random"
    | "dynamic_latency"
    | "proximity"
    | "least_outstanding_requests"
    | "least_connections"
    | ""
    | (string & {})
    | null;
  /** Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers. */
  ttl?: number | null;
  zoneName?: string | null;
}

export const PatchLoadBalancerResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      adaptiveRouting: Schema.optional(
        Schema.Union([AdaptiveRouting, Schema.Null]),
      ),
      countryPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      defaultPools: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      fallbackPool: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      locationStrategy: Schema.optional(
        Schema.Union([LocationStrategy, Schema.Null]),
      ),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      networks: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      popPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      randomSteering: Schema.optional(
        Schema.Union([RandomSteering, Schema.Null]),
      ),
      regionPools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      rules: Schema.optional(Schema.Union([Schema.Array(Rules), Schema.Null])),
      sessionAffinity: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["none", "cookie", "ip_cookie", "header"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      sessionAffinityAttributes: Schema.optional(
        Schema.Union([SessionAffinityAttributes, Schema.Null]),
      ),
      sessionAffinityTtl: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      steeringPolicy: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "off",
              "geo",
              "random",
              "dynamic_latency",
              "proximity",
              "least_outstanding_requests",
              "least_connections",
              "",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      ttl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      zoneName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          adaptiveRouting: "adaptive_routing",
          countryPools: "country_pools",
          createdOn: "created_on",
          defaultPools: "default_pools",
          description: "description",
          enabled: "enabled",
          fallbackPool: "fallback_pool",
          locationStrategy: "location_strategy",
          modifiedOn: "modified_on",
          name: "name",
          networks: "networks",
          popPools: "pop_pools",
          proxied: "proxied",
          randomSteering: "random_steering",
          regionPools: "region_pools",
          rules: "rules",
          sessionAffinity: "session_affinity",
          sessionAffinityAttributes: "session_affinity_attributes",
          sessionAffinityTtl: "session_affinity_ttl",
          steeringPolicy: "steering_policy",
          ttl: "ttl",
          zoneName: "zone_name",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchLoadBalancerResponse>;

export type PatchLoadBalancerError = DefaultErrors;

export const patchLoadBalancer: API.OperationMethod<
  PatchLoadBalancerRequest,
  PatchLoadBalancerResponse,
  PatchLoadBalancerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchLoadBalancerRequest,
  output: PatchLoadBalancerResponse,
  errors: [],
}));

export interface DeleteLoadBalancerRequest {
  loadBalancerId: string;
  zoneId: string;
}

export const DeleteLoadBalancerRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      loadBalancerId: Schema.String.pipe(T.HttpPath("loadBalancerId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/load_balancers/{loadBalancerId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteLoadBalancerRequest>;

export interface DeleteLoadBalancerResponse {
  id?: string | null;
}

export const DeleteLoadBalancerResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteLoadBalancerResponse>;

export type DeleteLoadBalancerError =
  | DefaultErrors
  | LoadBalancerNotFound
  | Forbidden;

export const deleteLoadBalancer: API.OperationMethod<
  DeleteLoadBalancerRequest,
  DeleteLoadBalancerResponse,
  DeleteLoadBalancerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLoadBalancerRequest,
  output: DeleteLoadBalancerResponse,
  errors: [LoadBalancerNotFound, Forbidden],
}));

// =============================================================================
// Monitor
// =============================================================================

export interface GetMonitorRequest {
  monitorId: string;
  /** Identifier. */
  accountId: string;
}

export const GetMonitorRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      monitorId: Schema.String.pipe(T.HttpPath("monitorId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/load_balancers/monitors/{monitorId}",
      }),
    ),
) as unknown as Schema.Codec<GetMonitorRequest>;

export interface GetMonitorResponse {
  id?: string | null;
  /** Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors. */
  allowInsecure?: boolean | null;
  /** To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times. */
  consecutiveDown?: number | null;
  /** To be marked healthy the monitored origin must pass this healthcheck N consecutive times. */
  consecutiveUp?: number | null;
  createdOn?: string | null;
  /** Object description. */
  description?: string | null;
  /** A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedBody?: string | null;
  /** The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedCodes?: string | null;
  /** Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors. */
  followRedirects?: boolean | null;
  /** The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP and HTTPS mo */
  header?: Record<string, unknown> | null;
  /** The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations. */
  interval?: number | null;
  /** The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks. */
  method?: string | null;
  modifiedOn?: string | null;
  /** The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors. */
  path?: string | null;
  /** The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default 80, HTTPS: d */
  port?: number | null;
  /** Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors. */
  probeZone?: string | null;
  /** The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number | null;
  /** The timeout (in seconds) before marking the health check as failed. */
  timeout?: number | null;
  /** The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'. */
  type?:
    | "http"
    | "https"
    | "tcp"
    | "udp_icmp"
    | "icmp_ping"
    | "smtp"
    | (string & {})
    | null;
}

export const GetMonitorResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      allowInsecure: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      consecutiveDown: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      consecutiveUp: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expectedBody: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expectedCodes: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      followRedirects: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      header: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      interval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      method: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      path: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      probeZone: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      retries: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "http",
              "https",
              "tcp",
              "udp_icmp",
              "icmp_ping",
              "smtp",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          allowInsecure: "allow_insecure",
          consecutiveDown: "consecutive_down",
          consecutiveUp: "consecutive_up",
          createdOn: "created_on",
          description: "description",
          expectedBody: "expected_body",
          expectedCodes: "expected_codes",
          followRedirects: "follow_redirects",
          header: "header",
          interval: "interval",
          method: "method",
          modifiedOn: "modified_on",
          path: "path",
          port: "port",
          probeZone: "probe_zone",
          retries: "retries",
          timeout: "timeout",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetMonitorResponse>;

export type GetMonitorError = DefaultErrors | MonitorNotFound | Forbidden;

export const getMonitor: API.OperationMethod<
  GetMonitorRequest,
  GetMonitorResponse,
  GetMonitorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMonitorRequest,
  output: GetMonitorResponse,
  errors: [MonitorNotFound, Forbidden],
}));

export interface ListMonitorsRequest {
  /** Identifier. */
  accountId: string;
}

export const ListMonitorsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/load_balancers/monitors",
      }),
    ),
) as unknown as Schema.Codec<ListMonitorsRequest>;

export interface ListMonitorsResponse {
  result: {
    id?: string | null;
    allowInsecure?: boolean | null;
    consecutiveDown?: number | null;
    consecutiveUp?: number | null;
    createdOn?: string | null;
    description?: string | null;
    expectedBody?: string | null;
    expectedCodes?: string | null;
    followRedirects?: boolean | null;
    header?: Record<string, unknown> | null;
    interval?: number | null;
    method?: string | null;
    modifiedOn?: string | null;
    path?: string | null;
    port?: number | null;
    probeZone?: string | null;
    retries?: number | null;
    timeout?: number | null;
    type?:
      | "http"
      | "https"
      | "tcp"
      | "udp_icmp"
      | "icmp_ping"
      | "smtp"
      | (string & {})
      | null;
  }[];
}

export const ListMonitorsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListMonitorsResponseResult),
    }),
) as unknown as Schema.Codec<ListMonitorsResponse>;

export type ListMonitorsError = DefaultErrors;

export const listMonitors: API.PaginatedOperationMethod<
  ListMonitorsRequest,
  ListMonitorsResponse,
  ListMonitorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMonitorsRequest,
  output: ListMonitorsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateMonitorRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors. */
  allowInsecure?: boolean;
  /** Body param: To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times. */
  consecutiveDown?: number;
  /** Body param: To be marked healthy the monitored origin must pass this healthcheck N consecutive times. */
  consecutiveUp?: number;
  /** Body param: Object description. */
  description?: string;
  /** Body param: A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitor */
  expectedBody?: string;
  /** Body param: The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedCodes?: string;
  /** Body param: Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors. */
  followRedirects?: boolean;
  /** Body param: The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP  */
  header?: Record<string, unknown>;
  /** Body param: The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations. */
  interval?: number;
  /** Body param: The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks. */
  method?: string;
  /** Body param: The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors. */
  path?: string;
  /** Body param: The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default  */
  port?: number | null;
  /** Body param: Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors. */
  probeZone?: string;
  /** Body param: The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number;
  /** Body param: The timeout (in seconds) before marking the health check as failed. */
  timeout?: number;
  /** Body param: The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'. */
  type?:
    | "http"
    | "https"
    | "tcp"
    | "udp_icmp"
    | "icmp_ping"
    | "smtp"
    | (string & {});
}

export const CreateMonitorRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      allowInsecure: Schema.optional(Schema.Boolean),
      consecutiveDown: Schema.optional(Schema.Number),
      consecutiveUp: Schema.optional(Schema.Number),
      description: Schema.optional(Schema.String),
      expectedBody: Schema.optional(Schema.String),
      expectedCodes: Schema.optional(Schema.String),
      followRedirects: Schema.optional(Schema.Boolean),
      header: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      interval: Schema.optional(Schema.Number),
      method: Schema.optional(Schema.String),
      path: Schema.optional(Schema.String),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      probeZone: Schema.optional(Schema.String),
      retries: Schema.optional(Schema.Number),
      timeout: Schema.optional(Schema.Number),
      type: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "http",
            "https",
            "tcp",
            "udp_icmp",
            "icmp_ping",
            "smtp",
          ]),
          Schema.String,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        allowInsecure: "allow_insecure",
        consecutiveDown: "consecutive_down",
        consecutiveUp: "consecutive_up",
        description: "description",
        expectedBody: "expected_body",
        expectedCodes: "expected_codes",
        followRedirects: "follow_redirects",
        header: "header",
        interval: "interval",
        method: "method",
        path: "path",
        port: "port",
        probeZone: "probe_zone",
        retries: "retries",
        timeout: "timeout",
        type: "type",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/load_balancers/monitors",
      }),
    ),
) as unknown as Schema.Codec<CreateMonitorRequest>;

export interface CreateMonitorResponse {
  id?: string | null;
  /** Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors. */
  allowInsecure?: boolean | null;
  /** To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times. */
  consecutiveDown?: number | null;
  /** To be marked healthy the monitored origin must pass this healthcheck N consecutive times. */
  consecutiveUp?: number | null;
  createdOn?: string | null;
  /** Object description. */
  description?: string | null;
  /** A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedBody?: string | null;
  /** The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedCodes?: string | null;
  /** Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors. */
  followRedirects?: boolean | null;
  /** The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP and HTTPS mo */
  header?: Record<string, unknown> | null;
  /** The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations. */
  interval?: number | null;
  /** The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks. */
  method?: string | null;
  modifiedOn?: string | null;
  /** The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors. */
  path?: string | null;
  /** The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default 80, HTTPS: d */
  port?: number | null;
  /** Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors. */
  probeZone?: string | null;
  /** The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number | null;
  /** The timeout (in seconds) before marking the health check as failed. */
  timeout?: number | null;
  /** The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'. */
  type?:
    | "http"
    | "https"
    | "tcp"
    | "udp_icmp"
    | "icmp_ping"
    | "smtp"
    | (string & {})
    | null;
}

export const CreateMonitorResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      allowInsecure: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      consecutiveDown: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      consecutiveUp: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expectedBody: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expectedCodes: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      followRedirects: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      header: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      interval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      method: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      path: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      probeZone: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      retries: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "http",
              "https",
              "tcp",
              "udp_icmp",
              "icmp_ping",
              "smtp",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          allowInsecure: "allow_insecure",
          consecutiveDown: "consecutive_down",
          consecutiveUp: "consecutive_up",
          createdOn: "created_on",
          description: "description",
          expectedBody: "expected_body",
          expectedCodes: "expected_codes",
          followRedirects: "follow_redirects",
          header: "header",
          interval: "interval",
          method: "method",
          modifiedOn: "modified_on",
          path: "path",
          port: "port",
          probeZone: "probe_zone",
          retries: "retries",
          timeout: "timeout",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateMonitorResponse>;

export type CreateMonitorError =
  | DefaultErrors
  | MonitorIntervalOutOfRange
  | Forbidden;

export const createMonitor: API.OperationMethod<
  CreateMonitorRequest,
  CreateMonitorResponse,
  CreateMonitorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateMonitorRequest,
  output: CreateMonitorResponse,
  errors: [MonitorIntervalOutOfRange, Forbidden],
}));

export interface UpdateMonitorRequest {
  monitorId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors. */
  allowInsecure?: boolean;
  /** Body param: To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times. */
  consecutiveDown?: number;
  /** Body param: To be marked healthy the monitored origin must pass this healthcheck N consecutive times. */
  consecutiveUp?: number;
  /** Body param: Object description. */
  description?: string;
  /** Body param: A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitor */
  expectedBody?: string;
  /** Body param: The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedCodes?: string;
  /** Body param: Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors. */
  followRedirects?: boolean;
  /** Body param: The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP  */
  header?: Record<string, unknown>;
  /** Body param: The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations. */
  interval?: number;
  /** Body param: The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks. */
  method?: string;
  /** Body param: The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors. */
  path?: string;
  /** Body param: The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default  */
  port?: number | null;
  /** Body param: Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors. */
  probeZone?: string;
  /** Body param: The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number;
  /** Body param: The timeout (in seconds) before marking the health check as failed. */
  timeout?: number;
  /** Body param: The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'. */
  type?:
    | "http"
    | "https"
    | "tcp"
    | "udp_icmp"
    | "icmp_ping"
    | "smtp"
    | (string & {});
}

export const UpdateMonitorRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      monitorId: Schema.String.pipe(T.HttpPath("monitorId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      allowInsecure: Schema.optional(Schema.Boolean),
      consecutiveDown: Schema.optional(Schema.Number),
      consecutiveUp: Schema.optional(Schema.Number),
      description: Schema.optional(Schema.String),
      expectedBody: Schema.optional(Schema.String),
      expectedCodes: Schema.optional(Schema.String),
      followRedirects: Schema.optional(Schema.Boolean),
      header: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      interval: Schema.optional(Schema.Number),
      method: Schema.optional(Schema.String),
      path: Schema.optional(Schema.String),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      probeZone: Schema.optional(Schema.String),
      retries: Schema.optional(Schema.Number),
      timeout: Schema.optional(Schema.Number),
      type: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "http",
            "https",
            "tcp",
            "udp_icmp",
            "icmp_ping",
            "smtp",
          ]),
          Schema.String,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        allowInsecure: "allow_insecure",
        consecutiveDown: "consecutive_down",
        consecutiveUp: "consecutive_up",
        description: "description",
        expectedBody: "expected_body",
        expectedCodes: "expected_codes",
        followRedirects: "follow_redirects",
        header: "header",
        interval: "interval",
        method: "method",
        path: "path",
        port: "port",
        probeZone: "probe_zone",
        retries: "retries",
        timeout: "timeout",
        type: "type",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/load_balancers/monitors/{monitorId}",
      }),
    ),
) as unknown as Schema.Codec<UpdateMonitorRequest>;

export interface UpdateMonitorResponse {
  id?: string | null;
  /** Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors. */
  allowInsecure?: boolean | null;
  /** To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times. */
  consecutiveDown?: number | null;
  /** To be marked healthy the monitored origin must pass this healthcheck N consecutive times. */
  consecutiveUp?: number | null;
  createdOn?: string | null;
  /** Object description. */
  description?: string | null;
  /** A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedBody?: string | null;
  /** The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedCodes?: string | null;
  /** Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors. */
  followRedirects?: boolean | null;
  /** The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP and HTTPS mo */
  header?: Record<string, unknown> | null;
  /** The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations. */
  interval?: number | null;
  /** The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks. */
  method?: string | null;
  modifiedOn?: string | null;
  /** The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors. */
  path?: string | null;
  /** The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default 80, HTTPS: d */
  port?: number | null;
  /** Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors. */
  probeZone?: string | null;
  /** The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number | null;
  /** The timeout (in seconds) before marking the health check as failed. */
  timeout?: number | null;
  /** The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'. */
  type?:
    | "http"
    | "https"
    | "tcp"
    | "udp_icmp"
    | "icmp_ping"
    | "smtp"
    | (string & {})
    | null;
}

export const UpdateMonitorResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      allowInsecure: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      consecutiveDown: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      consecutiveUp: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expectedBody: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expectedCodes: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      followRedirects: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      header: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      interval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      method: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      path: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      probeZone: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      retries: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "http",
              "https",
              "tcp",
              "udp_icmp",
              "icmp_ping",
              "smtp",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          allowInsecure: "allow_insecure",
          consecutiveDown: "consecutive_down",
          consecutiveUp: "consecutive_up",
          createdOn: "created_on",
          description: "description",
          expectedBody: "expected_body",
          expectedCodes: "expected_codes",
          followRedirects: "follow_redirects",
          header: "header",
          interval: "interval",
          method: "method",
          modifiedOn: "modified_on",
          path: "path",
          port: "port",
          probeZone: "probe_zone",
          retries: "retries",
          timeout: "timeout",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateMonitorResponse>;

export type UpdateMonitorError =
  | DefaultErrors
  | MonitorNotFound
  | MonitorIntervalOutOfRange
  | Forbidden;

export const updateMonitor: API.OperationMethod<
  UpdateMonitorRequest,
  UpdateMonitorResponse,
  UpdateMonitorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateMonitorRequest,
  output: UpdateMonitorResponse,
  errors: [MonitorNotFound, MonitorIntervalOutOfRange, Forbidden],
}));

export interface PatchMonitorRequest {
  monitorId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors. */
  allowInsecure?: boolean;
  /** Body param: To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times. */
  consecutiveDown?: number;
  /** Body param: To be marked healthy the monitored origin must pass this healthcheck N consecutive times. */
  consecutiveUp?: number;
  /** Body param: Object description. */
  description?: string;
  /** Body param: A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitor */
  expectedBody?: string;
  /** Body param: The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedCodes?: string;
  /** Body param: Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors. */
  followRedirects?: boolean;
  /** Body param: The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP  */
  header?: Record<string, unknown>;
  /** Body param: The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations. */
  interval?: number;
  /** Body param: The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks. */
  method?: string;
  /** Body param: The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors. */
  path?: string;
  /** Body param: The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default  */
  port?: number | null;
  /** Body param: Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors. */
  probeZone?: string;
  /** Body param: The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number;
  /** Body param: The timeout (in seconds) before marking the health check as failed. */
  timeout?: number;
  /** Body param: The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'. */
  type?:
    | "http"
    | "https"
    | "tcp"
    | "udp_icmp"
    | "icmp_ping"
    | "smtp"
    | (string & {});
}

export const PatchMonitorRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      monitorId: Schema.String.pipe(T.HttpPath("monitorId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      allowInsecure: Schema.optional(Schema.Boolean),
      consecutiveDown: Schema.optional(Schema.Number),
      consecutiveUp: Schema.optional(Schema.Number),
      description: Schema.optional(Schema.String),
      expectedBody: Schema.optional(Schema.String),
      expectedCodes: Schema.optional(Schema.String),
      followRedirects: Schema.optional(Schema.Boolean),
      header: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      interval: Schema.optional(Schema.Number),
      method: Schema.optional(Schema.String),
      path: Schema.optional(Schema.String),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      probeZone: Schema.optional(Schema.String),
      retries: Schema.optional(Schema.Number),
      timeout: Schema.optional(Schema.Number),
      type: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "http",
            "https",
            "tcp",
            "udp_icmp",
            "icmp_ping",
            "smtp",
          ]),
          Schema.String,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        allowInsecure: "allow_insecure",
        consecutiveDown: "consecutive_down",
        consecutiveUp: "consecutive_up",
        description: "description",
        expectedBody: "expected_body",
        expectedCodes: "expected_codes",
        followRedirects: "follow_redirects",
        header: "header",
        interval: "interval",
        method: "method",
        path: "path",
        port: "port",
        probeZone: "probe_zone",
        retries: "retries",
        timeout: "timeout",
        type: "type",
      }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/load_balancers/monitors/{monitorId}",
      }),
    ),
) as unknown as Schema.Codec<PatchMonitorRequest>;

export interface PatchMonitorResponse {
  id?: string | null;
  /** Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors. */
  allowInsecure?: boolean | null;
  /** To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times. */
  consecutiveDown?: number | null;
  /** To be marked healthy the monitored origin must pass this healthcheck N consecutive times. */
  consecutiveUp?: number | null;
  createdOn?: string | null;
  /** Object description. */
  description?: string | null;
  /** A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedBody?: string | null;
  /** The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedCodes?: string | null;
  /** Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors. */
  followRedirects?: boolean | null;
  /** The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP and HTTPS mo */
  header?: Record<string, unknown> | null;
  /** The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations. */
  interval?: number | null;
  /** The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks. */
  method?: string | null;
  modifiedOn?: string | null;
  /** The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors. */
  path?: string | null;
  /** The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default 80, HTTPS: d */
  port?: number | null;
  /** Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors. */
  probeZone?: string | null;
  /** The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number | null;
  /** The timeout (in seconds) before marking the health check as failed. */
  timeout?: number | null;
  /** The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'. */
  type?:
    | "http"
    | "https"
    | "tcp"
    | "udp_icmp"
    | "icmp_ping"
    | "smtp"
    | (string & {})
    | null;
}

export const PatchMonitorResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      allowInsecure: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      consecutiveDown: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      consecutiveUp: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expectedBody: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expectedCodes: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      followRedirects: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      header: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      interval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      method: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      path: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      probeZone: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      retries: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "http",
              "https",
              "tcp",
              "udp_icmp",
              "icmp_ping",
              "smtp",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          allowInsecure: "allow_insecure",
          consecutiveDown: "consecutive_down",
          consecutiveUp: "consecutive_up",
          createdOn: "created_on",
          description: "description",
          expectedBody: "expected_body",
          expectedCodes: "expected_codes",
          followRedirects: "follow_redirects",
          header: "header",
          interval: "interval",
          method: "method",
          modifiedOn: "modified_on",
          path: "path",
          port: "port",
          probeZone: "probe_zone",
          retries: "retries",
          timeout: "timeout",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchMonitorResponse>;

export type PatchMonitorError = DefaultErrors;

export const patchMonitor: API.OperationMethod<
  PatchMonitorRequest,
  PatchMonitorResponse,
  PatchMonitorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchMonitorRequest,
  output: PatchMonitorResponse,
  errors: [],
}));

export interface DeleteMonitorRequest {
  monitorId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteMonitorRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      monitorId: Schema.String.pipe(T.HttpPath("monitorId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/load_balancers/monitors/{monitorId}",
      }),
    ),
) as unknown as Schema.Codec<DeleteMonitorRequest>;

export interface DeleteMonitorResponse {
  id?: string | null;
}

export const DeleteMonitorResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteMonitorResponse>;

export type DeleteMonitorError =
  | DefaultErrors
  | MonitorNotFound
  | MonitorInUse
  | Forbidden;

export const deleteMonitor: API.OperationMethod<
  DeleteMonitorRequest,
  DeleteMonitorResponse,
  DeleteMonitorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteMonitorRequest,
  output: DeleteMonitorResponse,
  errors: [MonitorNotFound, MonitorInUse, Forbidden],
}));

// =============================================================================
// MonitorGroup
// =============================================================================

export interface GetMonitorGroupRequest {
  monitorGroupId: string;
  /** Identifier. */
  accountId: string;
}

export const GetMonitorGroupRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      monitorGroupId: Schema.String.pipe(T.HttpPath("monitorGroupId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/load_balancers/monitor_groups/{monitorGroupId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetMonitorGroupRequest>;

export interface GetMonitorGroupResponse {
  /** The ID of the Monitor Group to use for checking the health of origins within this pool. */
  id: string;
  /** A short description of the monitor group */
  description: string;
  /** List of monitors in this group */
  members: {
    enabled: boolean;
    monitorId: string;
    monitoringOnly: boolean;
    mustBeHealthy: boolean;
    createdAt?: string | null;
    updatedAt?: string | null;
  }[];
  /** The timestamp of when the monitor group was created */
  createdOn?: string | null;
  /** The timestamp of when the monitor group was last updated */
  modifiedOn?: string | null;
}

export const GetMonitorGroupResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      description: Schema.String,
      members: Schema.Array(Member),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          description: "description",
          members: "members",
          createdOn: "created_on",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetMonitorGroupResponse>;

export type GetMonitorGroupError =
  | DefaultErrors
  | MonitorGroupNotFound
  | Forbidden;

export const getMonitorGroup: API.OperationMethod<
  GetMonitorGroupRequest,
  GetMonitorGroupResponse,
  GetMonitorGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMonitorGroupRequest,
  output: GetMonitorGroupResponse,
  errors: [MonitorGroupNotFound, Forbidden],
}));

export interface ListMonitorGroupsRequest {
  /** Identifier. */
  accountId: string;
}

export const ListMonitorGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/load_balancers/monitor_groups",
      }),
    ),
  ) as unknown as Schema.Codec<ListMonitorGroupsRequest>;

export interface ListMonitorGroupsResponse {
  result: {
    id: string;
    description: string;
    members: {
      enabled: boolean;
      monitorId: string;
      monitoringOnly: boolean;
      mustBeHealthy: boolean;
      createdAt?: string | null;
      updatedAt?: string | null;
    }[];
    createdOn?: string | null;
    modifiedOn?: string | null;
  }[];
}

export const ListMonitorGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListMonitorGroupsResponseResult),
    }),
  ) as unknown as Schema.Codec<ListMonitorGroupsResponse>;

export type ListMonitorGroupsError = DefaultErrors;

export const listMonitorGroups: API.PaginatedOperationMethod<
  ListMonitorGroupsRequest,
  ListMonitorGroupsResponse,
  ListMonitorGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMonitorGroupsRequest,
  output: ListMonitorGroupsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateMonitorGroupRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A short description of the monitor group */
  description: string;
  /** Body param: List of monitors in this group */
  members: {
    enabled: boolean;
    monitorId: string;
    monitoringOnly: boolean;
    mustBeHealthy: boolean;
  }[];
}

export const CreateMonitorGroupRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      description: Schema.String,
      members: Schema.Array(Member2),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/load_balancers/monitor_groups",
      }),
    ),
  ) as unknown as Schema.Codec<CreateMonitorGroupRequest>;

export interface CreateMonitorGroupResponse {
  /** The ID of the Monitor Group to use for checking the health of origins within this pool. */
  id: string;
  /** A short description of the monitor group */
  description: string;
  /** List of monitors in this group */
  members: {
    enabled: boolean;
    monitorId: string;
    monitoringOnly: boolean;
    mustBeHealthy: boolean;
    createdAt?: string | null;
    updatedAt?: string | null;
  }[];
  /** The timestamp of when the monitor group was created */
  createdOn?: string | null;
  /** The timestamp of when the monitor group was last updated */
  modifiedOn?: string | null;
}

export const CreateMonitorGroupResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      description: Schema.String,
      members: Schema.Array(Member),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          description: "description",
          members: "members",
          createdOn: "created_on",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateMonitorGroupResponse>;

export type CreateMonitorGroupError =
  | DefaultErrors
  | MonitorGroupsNotEnabled
  | Forbidden;

export const createMonitorGroup: API.OperationMethod<
  CreateMonitorGroupRequest,
  CreateMonitorGroupResponse,
  CreateMonitorGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateMonitorGroupRequest,
  output: CreateMonitorGroupResponse,
  errors: [MonitorGroupsNotEnabled, Forbidden],
}));

export interface UpdateMonitorGroupRequest {
  monitorGroupId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A short description of the monitor group */
  description: string;
  /** Body param: List of monitors in this group */
  members: {
    enabled: boolean;
    monitorId: string;
    monitoringOnly: boolean;
    mustBeHealthy: boolean;
  }[];
}

export const UpdateMonitorGroupRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      monitorGroupId: Schema.String.pipe(T.HttpPath("monitorGroupId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      description: Schema.String,
      members: Schema.Array(Member2),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/load_balancers/monitor_groups/{monitorGroupId}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateMonitorGroupRequest>;

export interface UpdateMonitorGroupResponse {
  /** The ID of the Monitor Group to use for checking the health of origins within this pool. */
  id: string;
  /** A short description of the monitor group */
  description: string;
  /** List of monitors in this group */
  members: {
    enabled: boolean;
    monitorId: string;
    monitoringOnly: boolean;
    mustBeHealthy: boolean;
    createdAt?: string | null;
    updatedAt?: string | null;
  }[];
  /** The timestamp of when the monitor group was created */
  createdOn?: string | null;
  /** The timestamp of when the monitor group was last updated */
  modifiedOn?: string | null;
}

export const UpdateMonitorGroupResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      description: Schema.String,
      members: Schema.Array(Member),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          description: "description",
          members: "members",
          createdOn: "created_on",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateMonitorGroupResponse>;

export type UpdateMonitorGroupError =
  | DefaultErrors
  | MonitorGroupNotFound
  | MonitorGroupsNotEnabled
  | Forbidden;

export const updateMonitorGroup: API.OperationMethod<
  UpdateMonitorGroupRequest,
  UpdateMonitorGroupResponse,
  UpdateMonitorGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateMonitorGroupRequest,
  output: UpdateMonitorGroupResponse,
  errors: [MonitorGroupNotFound, MonitorGroupsNotEnabled, Forbidden],
}));

export interface PatchMonitorGroupRequest {
  monitorGroupId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A short description of the monitor group */
  description: string;
  /** Body param: List of monitors in this group */
  members: {
    enabled: boolean;
    monitorId: string;
    monitoringOnly: boolean;
    mustBeHealthy: boolean;
  }[];
}

export const PatchMonitorGroupRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      monitorGroupId: Schema.String.pipe(T.HttpPath("monitorGroupId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      description: Schema.String,
      members: Schema.Array(Member2),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/load_balancers/monitor_groups/{monitorGroupId}",
      }),
    ),
  ) as unknown as Schema.Codec<PatchMonitorGroupRequest>;

export interface PatchMonitorGroupResponse {
  /** The ID of the Monitor Group to use for checking the health of origins within this pool. */
  id: string;
  /** A short description of the monitor group */
  description: string;
  /** List of monitors in this group */
  members: {
    enabled: boolean;
    monitorId: string;
    monitoringOnly: boolean;
    mustBeHealthy: boolean;
    createdAt?: string | null;
    updatedAt?: string | null;
  }[];
  /** The timestamp of when the monitor group was created */
  createdOn?: string | null;
  /** The timestamp of when the monitor group was last updated */
  modifiedOn?: string | null;
}

export const PatchMonitorGroupResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      description: Schema.String,
      members: Schema.Array(Member),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          description: "description",
          members: "members",
          createdOn: "created_on",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchMonitorGroupResponse>;

export type PatchMonitorGroupError = DefaultErrors;

export const patchMonitorGroup: API.OperationMethod<
  PatchMonitorGroupRequest,
  PatchMonitorGroupResponse,
  PatchMonitorGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchMonitorGroupRequest,
  output: PatchMonitorGroupResponse,
  errors: [],
}));

export interface DeleteMonitorGroupRequest {
  monitorGroupId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteMonitorGroupRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      monitorGroupId: Schema.String.pipe(T.HttpPath("monitorGroupId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/load_balancers/monitor_groups/{monitorGroupId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteMonitorGroupRequest>;

export interface DeleteMonitorGroupResponse {
  /** The ID of the Monitor Group to use for checking the health of origins within this pool. */
  id: string;
  /** A short description of the monitor group */
  description: string;
  /** List of monitors in this group */
  members: {
    enabled: boolean;
    monitorId: string;
    monitoringOnly: boolean;
    mustBeHealthy: boolean;
    createdAt?: string | null;
    updatedAt?: string | null;
  }[];
  /** The timestamp of when the monitor group was created */
  createdOn?: string | null;
  /** The timestamp of when the monitor group was last updated */
  modifiedOn?: string | null;
}

export const DeleteMonitorGroupResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      description: Schema.String,
      members: Schema.Array(Member),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          description: "description",
          members: "members",
          createdOn: "created_on",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteMonitorGroupResponse>;

export type DeleteMonitorGroupError =
  | DefaultErrors
  | MonitorGroupNotFound
  | MonitorGroupInUse
  | Forbidden;

export const deleteMonitorGroup: API.OperationMethod<
  DeleteMonitorGroupRequest,
  DeleteMonitorGroupResponse,
  DeleteMonitorGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteMonitorGroupRequest,
  output: DeleteMonitorGroupResponse,
  errors: [MonitorGroupNotFound, MonitorGroupInUse, Forbidden],
}));

// =============================================================================
// MonitorGroupReference
// =============================================================================

export interface GetMonitorGroupReferenceRequest {
  monitorGroupId: string;
  /** Identifier. */
  accountId: string;
}

export const GetMonitorGroupReferenceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      monitorGroupId: Schema.String.pipe(T.HttpPath("monitorGroupId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/load_balancers/monitor_groups/{monitorGroupId}/references",
      }),
    ),
  ) as unknown as Schema.Codec<GetMonitorGroupReferenceRequest>;

export interface GetMonitorGroupReferenceResponse {
  result: {
    referenceType?: "*" | "referral" | "referrer" | (string & {}) | null;
    resourceId?: string | null;
    resourceName?: string | null;
    resourceType?: string | null;
  }[];
}

export const GetMonitorGroupReferenceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(GetMonitorGroupReferenceResponseResult),
    }),
  ) as unknown as Schema.Codec<GetMonitorGroupReferenceResponse>;

export type GetMonitorGroupReferenceError = DefaultErrors;

export const getMonitorGroupReference: API.PaginatedOperationMethod<
  GetMonitorGroupReferenceRequest,
  GetMonitorGroupReferenceResponse,
  GetMonitorGroupReferenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetMonitorGroupReferenceRequest,
  output: GetMonitorGroupReferenceResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// MonitorPreview
// =============================================================================

export interface CreateMonitorPreviewRequest {
  monitorId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors. */
  allowInsecure?: boolean;
  /** Body param: To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times. */
  consecutiveDown?: number;
  /** Body param: To be marked healthy the monitored origin must pass this healthcheck N consecutive times. */
  consecutiveUp?: number;
  /** Body param: Object description. */
  description?: string;
  /** Body param: A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitor */
  expectedBody?: string;
  /** Body param: The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedCodes?: string;
  /** Body param: Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors. */
  followRedirects?: boolean;
  /** Body param: The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP  */
  header?: Record<string, unknown>;
  /** Body param: The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations. */
  interval?: number;
  /** Body param: The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks. */
  method?: string;
  /** Body param: The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors. */
  path?: string;
  /** Body param: The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default  */
  port?: number | null;
  /** Body param: Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors. */
  probeZone?: string;
  /** Body param: The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number;
  /** Body param: The timeout (in seconds) before marking the health check as failed. */
  timeout?: number;
  /** Body param: The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'. */
  type?:
    | "http"
    | "https"
    | "tcp"
    | "udp_icmp"
    | "icmp_ping"
    | "smtp"
    | (string & {});
}

export const CreateMonitorPreviewRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      monitorId: Schema.String.pipe(T.HttpPath("monitorId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      allowInsecure: Schema.optional(Schema.Boolean),
      consecutiveDown: Schema.optional(Schema.Number),
      consecutiveUp: Schema.optional(Schema.Number),
      description: Schema.optional(Schema.String),
      expectedBody: Schema.optional(Schema.String),
      expectedCodes: Schema.optional(Schema.String),
      followRedirects: Schema.optional(Schema.Boolean),
      header: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      interval: Schema.optional(Schema.Number),
      method: Schema.optional(Schema.String),
      path: Schema.optional(Schema.String),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      probeZone: Schema.optional(Schema.String),
      retries: Schema.optional(Schema.Number),
      timeout: Schema.optional(Schema.Number),
      type: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "http",
            "https",
            "tcp",
            "udp_icmp",
            "icmp_ping",
            "smtp",
          ]),
          Schema.String,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        allowInsecure: "allow_insecure",
        consecutiveDown: "consecutive_down",
        consecutiveUp: "consecutive_up",
        description: "description",
        expectedBody: "expected_body",
        expectedCodes: "expected_codes",
        followRedirects: "follow_redirects",
        header: "header",
        interval: "interval",
        method: "method",
        path: "path",
        port: "port",
        probeZone: "probe_zone",
        retries: "retries",
        timeout: "timeout",
        type: "type",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/load_balancers/monitors/{monitorId}/preview",
      }),
    ),
  ) as unknown as Schema.Codec<CreateMonitorPreviewRequest>;

export interface CreateMonitorPreviewResponse {
  /** Monitored pool IDs mapped to their respective names. */
  pools?: Record<string, unknown> | null;
  previewId?: string | null;
}

export const CreateMonitorPreviewResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      pools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      previewId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(Schema.encodeKeys({ pools: "pools", previewId: "preview_id" }))
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateMonitorPreviewResponse>;

export type CreateMonitorPreviewError = DefaultErrors;

export const createMonitorPreview: API.OperationMethod<
  CreateMonitorPreviewRequest,
  CreateMonitorPreviewResponse,
  CreateMonitorPreviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateMonitorPreviewRequest,
  output: CreateMonitorPreviewResponse,
  errors: [],
}));

// =============================================================================
// MonitorReference
// =============================================================================

export interface GetMonitorReferenceRequest {
  monitorId: string;
  /** Identifier. */
  accountId: string;
}

export const GetMonitorReferenceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      monitorId: Schema.String.pipe(T.HttpPath("monitorId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/load_balancers/monitors/{monitorId}/references",
      }),
    ),
  ) as unknown as Schema.Codec<GetMonitorReferenceRequest>;

export interface GetMonitorReferenceResponse {
  result: {
    referenceType?: "*" | "referral" | "referrer" | (string & {}) | null;
    resourceId?: string | null;
    resourceName?: string | null;
    resourceType?: string | null;
  }[];
}

export const GetMonitorReferenceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(GetMonitorGroupReferenceResponseResult),
    }),
  ) as unknown as Schema.Codec<GetMonitorReferenceResponse>;

export type GetMonitorReferenceError = DefaultErrors;

export const getMonitorReference: API.PaginatedOperationMethod<
  GetMonitorReferenceRequest,
  GetMonitorReferenceResponse,
  GetMonitorReferenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetMonitorReferenceRequest,
  output: GetMonitorReferenceResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Pool
// =============================================================================

export interface GetPoolRequest {
  poolId: string;
  /** Identifier. */
  accountId: string;
}

export const GetPoolRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    poolId: Schema.String.pipe(T.HttpPath("poolId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/load_balancers/pools/{poolId}",
    }),
  ),
) as unknown as Schema.Codec<GetPoolRequest>;

export interface GetPoolResponse {
  id?: string | null;
  /** A list of regions from which to run health checks. Null means every Cloudflare data center. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "SAS"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  createdOn?: string | null;
  /** A human-readable description of the pool. */
  description?: string | null;
  /** This field shows up only if the pool is disabled. This field is set with the time the pool was disabled at. */
  disabledAt?: string | null;
  /** Whether to enable (the default) or disable this pool. Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover t */
  enabled?: boolean | null;
  /** The latitude of the data center containing the origins used in this pool in decimal degrees. If this is set, longitude must also be set. */
  latitude?: number | null;
  /** Configures load shedding policies and percentages for the pool. */
  loadShedding?: {
    defaultPercent?: number | null;
    defaultPolicy?: "random" | "hash" | (string & {}) | null;
    sessionPercent?: number | null;
    sessionPolicy?: "hash" | null;
  } | null;
  /** The longitude of the data center containing the origins used in this pool in decimal degrees. If this is set, latitude must also be set. */
  longitude?: number | null;
  /** The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and will failover to the  */
  minimumOrigins?: number | null;
  modifiedOn?: string | null;
  /** The ID of the Monitor to use for checking the health of origins within this pool. */
  monitor?: string | null;
  /** The ID of the Monitor Group to use for checking the health of origins within this pool. */
  monitorGroup?: string | null;
  /** A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed. */
  name?: string | null;
  /** List of networks where Load Balancer or Pool is enabled. */
  networks?: string[] | null;
  /** This field is now deprecated. It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send health status  */
  notificationEmail?: string | null;
  /** Filter pool and origin health notifications by resource type or health status. Use null to reset. */
  notificationFilter?: {
    origin?: { disable?: boolean | null; healthy?: boolean | null } | null;
    pool?: { disable?: boolean | null; healthy?: boolean | null } | null;
  } | null;
  /** Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity. */
  originSteering?: {
    policy?:
      | "random"
      | "hash"
      | "least_outstanding_requests"
      | "least_connections"
      | (string & {})
      | null;
  } | null;
  /** The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy. */
  origins?:
    | {
        address?: string | null;
        disabledAt?: string | null;
        enabled?: boolean | null;
        flattenCname?: boolean | null;
        header?: { host?: string[] | null } | null;
        name?: string | null;
        port?: number | null;
        virtualNetworkId?: string | null;
        weight?: number | null;
      }[]
    | null;
}

export const GetPoolResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    checkRegions: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "WNAM",
              "ENAM",
              "WEU",
              "EEU",
              "NSAM",
              "SSAM",
              "OC",
              "ME",
              "NAF",
              "SAF",
              "SAS",
              "SEAS",
              "NEAS",
              "ALL_REGIONS",
            ]),
            Schema.String,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    disabledAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    latitude: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    loadShedding: Schema.optional(Schema.Union([LoadShedding, Schema.Null])),
    longitude: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    minimumOrigins: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    monitor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    monitorGroup: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    networks: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    notificationEmail: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    notificationFilter: Schema.optional(
      Schema.Union([NotificationFilter, Schema.Null]),
    ),
    originSteering: Schema.optional(
      Schema.Union([OriginSteering, Schema.Null]),
    ),
    origins: Schema.optional(Schema.Union([Schema.Array(Origin), Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        checkRegions: "check_regions",
        createdOn: "created_on",
        description: "description",
        disabledAt: "disabled_at",
        enabled: "enabled",
        latitude: "latitude",
        loadShedding: "load_shedding",
        longitude: "longitude",
        minimumOrigins: "minimum_origins",
        modifiedOn: "modified_on",
        monitor: "monitor",
        monitorGroup: "monitor_group",
        name: "name",
        networks: "networks",
        notificationEmail: "notification_email",
        notificationFilter: "notification_filter",
        originSteering: "origin_steering",
        origins: "origins",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetPoolResponse>;

export type GetPoolError = DefaultErrors | PoolNotFound | Forbidden;

export const getPool: API.OperationMethod<
  GetPoolRequest,
  GetPoolResponse,
  GetPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPoolRequest,
  output: GetPoolResponse,
  errors: [PoolNotFound, Forbidden],
}));

export interface ListPoolsRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: The ID of the Monitor to use for checking the health of origins within this pool. */
  monitor?: string;
}

export const ListPoolsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    monitor: Schema.optional(Schema.String).pipe(T.HttpQuery("monitor")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/load_balancers/pools",
    }),
  ),
) as unknown as Schema.Codec<ListPoolsRequest>;

export interface ListPoolsResponse {
  result: {
    id?: string | null;
    checkRegions?:
      | (
          | "WNAM"
          | "ENAM"
          | "WEU"
          | "EEU"
          | "NSAM"
          | "SSAM"
          | "OC"
          | "ME"
          | "NAF"
          | "SAF"
          | "SAS"
          | "SEAS"
          | "NEAS"
          | "ALL_REGIONS"
          | (string & {})
        )[]
      | null;
    createdOn?: string | null;
    description?: string | null;
    disabledAt?: string | null;
    enabled?: boolean | null;
    latitude?: number | null;
    loadShedding?: {
      defaultPercent?: number | null;
      defaultPolicy?: "random" | "hash" | (string & {}) | null;
      sessionPercent?: number | null;
      sessionPolicy?: "hash" | null;
    } | null;
    longitude?: number | null;
    minimumOrigins?: number | null;
    modifiedOn?: string | null;
    monitor?: string | null;
    monitorGroup?: string | null;
    name?: string | null;
    networks?: string[] | null;
    notificationEmail?: string | null;
    notificationFilter?: {
      origin?: { disable?: boolean | null; healthy?: boolean | null } | null;
      pool?: { disable?: boolean | null; healthy?: boolean | null } | null;
    } | null;
    originSteering?: {
      policy?:
        | "random"
        | "hash"
        | "least_outstanding_requests"
        | "least_connections"
        | (string & {})
        | null;
    } | null;
    origins?:
      | {
          address?: string | null;
          disabledAt?: string | null;
          enabled?: boolean | null;
          flattenCname?: boolean | null;
          header?: { host?: string[] | null } | null;
          name?: string | null;
          port?: number | null;
          virtualNetworkId?: string | null;
          weight?: number | null;
        }[]
      | null;
  }[];
}

export const ListPoolsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListPoolsResponseResult),
    }),
) as unknown as Schema.Codec<ListPoolsResponse>;

export type ListPoolsError = DefaultErrors;

export const listPools: API.PaginatedOperationMethod<
  ListPoolsRequest,
  ListPoolsResponse,
  ListPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPoolsRequest,
  output: ListPoolsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreatePoolRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed. */
  name: string;
  /** Body param: The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy. */
  origins: {
    address?: string;
    enabled?: boolean;
    flattenCname?: boolean;
    header?: { host?: string[] };
    name?: string;
    port?: number;
    virtualNetworkId?: string;
    weight?: number;
  }[];
  /** Body param: A human-readable description of the pool. */
  description?: string;
  /** Body param: Whether to enable (the default) or disable this pool. Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it t */
  enabled?: boolean;
  /** Body param: The latitude of the data center containing the origins used in this pool in decimal degrees. If this is set, longitude must also be set. */
  latitude?: number;
  /** Body param: Configures load shedding policies and percentages for the pool. */
  loadShedding?: {
    defaultPercent?: number;
    defaultPolicy?: "random" | "hash" | (string & {});
    sessionPercent?: number;
    sessionPolicy?: "hash";
  } | null;
  /** Body param: The longitude of the data center containing the origins used in this pool in decimal degrees. If this is set, latitude must also be set. */
  longitude?: number;
  /** Body param: The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and will fail */
  minimumOrigins?: number;
  /** Body param: The ID of the Monitor to use for checking the health of origins within this pool. */
  monitor?: string;
  /** Body param: The ID of the Monitor Group to use for checking the health of origins within this pool. */
  monitorGroup?: string;
  /** Body param: This field is now deprecated. It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send he */
  notificationEmail?: string;
  /** Body param: Filter pool and origin health notifications by resource type or health status. Use null to reset. */
  notificationFilter?: {
    origin?: { disable?: boolean | null; healthy?: boolean | null } | null;
    pool?: { disable?: boolean | null; healthy?: boolean | null } | null;
  } | null;
  /** Body param: Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity. */
  originSteering?: {
    policy?:
      | "random"
      | "hash"
      | "least_outstanding_requests"
      | "least_connections"
      | (string & {});
  } | null;
}

export const CreatePoolRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      origins: Schema.Array(OriginParam),
      description: Schema.optional(Schema.String),
      enabled: Schema.optional(Schema.Boolean),
      latitude: Schema.optional(Schema.Number),
      loadShedding: Schema.optional(Schema.Union([LoadShedding, Schema.Null])),
      longitude: Schema.optional(Schema.Number),
      minimumOrigins: Schema.optional(Schema.Number),
      monitor: Schema.optional(Schema.String),
      monitorGroup: Schema.optional(Schema.String),
      notificationEmail: Schema.optional(Schema.String),
      notificationFilter: Schema.optional(
        Schema.Union([NotificationFilter, Schema.Null]),
      ),
      originSteering: Schema.optional(
        Schema.Union([OriginSteering, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        origins: "origins",
        description: "description",
        enabled: "enabled",
        latitude: "latitude",
        loadShedding: "load_shedding",
        longitude: "longitude",
        minimumOrigins: "minimum_origins",
        monitor: "monitor",
        monitorGroup: "monitor_group",
        notificationEmail: "notification_email",
        notificationFilter: "notification_filter",
        originSteering: "origin_steering",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/load_balancers/pools",
      }),
    ),
) as unknown as Schema.Codec<CreatePoolRequest>;

export interface CreatePoolResponse {
  id?: string | null;
  /** A list of regions from which to run health checks. Null means every Cloudflare data center. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "SAS"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  createdOn?: string | null;
  /** A human-readable description of the pool. */
  description?: string | null;
  /** This field shows up only if the pool is disabled. This field is set with the time the pool was disabled at. */
  disabledAt?: string | null;
  /** Whether to enable (the default) or disable this pool. Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover t */
  enabled?: boolean | null;
  /** The latitude of the data center containing the origins used in this pool in decimal degrees. If this is set, longitude must also be set. */
  latitude?: number | null;
  /** Configures load shedding policies and percentages for the pool. */
  loadShedding?: {
    defaultPercent?: number | null;
    defaultPolicy?: "random" | "hash" | (string & {}) | null;
    sessionPercent?: number | null;
    sessionPolicy?: "hash" | null;
  } | null;
  /** The longitude of the data center containing the origins used in this pool in decimal degrees. If this is set, latitude must also be set. */
  longitude?: number | null;
  /** The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and will failover to the  */
  minimumOrigins?: number | null;
  modifiedOn?: string | null;
  /** The ID of the Monitor to use for checking the health of origins within this pool. */
  monitor?: string | null;
  /** The ID of the Monitor Group to use for checking the health of origins within this pool. */
  monitorGroup?: string | null;
  /** A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed. */
  name?: string | null;
  /** List of networks where Load Balancer or Pool is enabled. */
  networks?: string[] | null;
  /** This field is now deprecated. It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send health status  */
  notificationEmail?: string | null;
  /** Filter pool and origin health notifications by resource type or health status. Use null to reset. */
  notificationFilter?: {
    origin?: { disable?: boolean | null; healthy?: boolean | null } | null;
    pool?: { disable?: boolean | null; healthy?: boolean | null } | null;
  } | null;
  /** Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity. */
  originSteering?: {
    policy?:
      | "random"
      | "hash"
      | "least_outstanding_requests"
      | "least_connections"
      | (string & {})
      | null;
  } | null;
  /** The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy. */
  origins?:
    | {
        address?: string | null;
        disabledAt?: string | null;
        enabled?: boolean | null;
        flattenCname?: boolean | null;
        header?: { host?: string[] | null } | null;
        name?: string | null;
        port?: number | null;
        virtualNetworkId?: string | null;
        weight?: number | null;
      }[]
    | null;
}

export const CreatePoolResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "SAS",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      disabledAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      latitude: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      loadShedding: Schema.optional(Schema.Union([LoadShedding, Schema.Null])),
      longitude: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      minimumOrigins: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      monitor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      monitorGroup: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      networks: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      notificationEmail: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      notificationFilter: Schema.optional(
        Schema.Union([NotificationFilter, Schema.Null]),
      ),
      originSteering: Schema.optional(
        Schema.Union([OriginSteering, Schema.Null]),
      ),
      origins: Schema.optional(
        Schema.Union([Schema.Array(Origin), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          checkRegions: "check_regions",
          createdOn: "created_on",
          description: "description",
          disabledAt: "disabled_at",
          enabled: "enabled",
          latitude: "latitude",
          loadShedding: "load_shedding",
          longitude: "longitude",
          minimumOrigins: "minimum_origins",
          modifiedOn: "modified_on",
          monitor: "monitor",
          monitorGroup: "monitor_group",
          name: "name",
          networks: "networks",
          notificationEmail: "notification_email",
          notificationFilter: "notification_filter",
          originSteering: "origin_steering",
          origins: "origins",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreatePoolResponse>;

export type CreatePoolError = DefaultErrors | PoolAccessFailed | Forbidden;

export const createPool: API.OperationMethod<
  CreatePoolRequest,
  CreatePoolResponse,
  CreatePoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePoolRequest,
  output: CreatePoolResponse,
  errors: [PoolAccessFailed, Forbidden],
}));

export interface UpdatePoolRequest {
  poolId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed. */
  name: string;
  /** Body param: The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy. */
  origins: {
    address?: string;
    enabled?: boolean;
    flattenCname?: boolean;
    header?: { host?: string[] };
    name?: string;
    port?: number;
    virtualNetworkId?: string;
    weight?: number;
  }[];
  /** Body param: A list of regions from which to run health checks. Null means every Cloudflare data center. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "SAS"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  /** Body param: A human-readable description of the pool. */
  description?: string;
  /** Body param: Whether to enable (the default) or disable this pool. Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it t */
  enabled?: boolean;
  /** Body param: The latitude of the data center containing the origins used in this pool in decimal degrees. If this is set, longitude must also be set. */
  latitude?: number;
  /** Body param: Configures load shedding policies and percentages for the pool. */
  loadShedding?: {
    defaultPercent?: number;
    defaultPolicy?: "random" | "hash" | (string & {});
    sessionPercent?: number;
    sessionPolicy?: "hash";
  } | null;
  /** Body param: The longitude of the data center containing the origins used in this pool in decimal degrees. If this is set, latitude must also be set. */
  longitude?: number;
  /** Body param: The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and will fail */
  minimumOrigins?: number;
  /** Body param: The ID of the Monitor to use for checking the health of origins within this pool. */
  monitor?: string;
  /** Body param: The ID of the Monitor Group to use for checking the health of origins within this pool. */
  monitorGroup?: string;
  /** Body param: This field is now deprecated. It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send he */
  notificationEmail?: string;
  /** Body param: Filter pool and origin health notifications by resource type or health status. Use null to reset. */
  notificationFilter?: {
    origin?: { disable?: boolean | null; healthy?: boolean | null } | null;
    pool?: { disable?: boolean | null; healthy?: boolean | null } | null;
  } | null;
  /** Body param: Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity. */
  originSteering?: {
    policy?:
      | "random"
      | "hash"
      | "least_outstanding_requests"
      | "least_connections"
      | (string & {});
  } | null;
}

export const UpdatePoolRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      poolId: Schema.String.pipe(T.HttpPath("poolId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      origins: Schema.Array(OriginParam),
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "SAS",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      description: Schema.optional(Schema.String),
      enabled: Schema.optional(Schema.Boolean),
      latitude: Schema.optional(Schema.Number),
      loadShedding: Schema.optional(Schema.Union([LoadShedding, Schema.Null])),
      longitude: Schema.optional(Schema.Number),
      minimumOrigins: Schema.optional(Schema.Number),
      monitor: Schema.optional(Schema.String),
      monitorGroup: Schema.optional(Schema.String),
      notificationEmail: Schema.optional(Schema.String),
      notificationFilter: Schema.optional(
        Schema.Union([NotificationFilter, Schema.Null]),
      ),
      originSteering: Schema.optional(
        Schema.Union([OriginSteering, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        origins: "origins",
        checkRegions: "check_regions",
        description: "description",
        enabled: "enabled",
        latitude: "latitude",
        loadShedding: "load_shedding",
        longitude: "longitude",
        minimumOrigins: "minimum_origins",
        monitor: "monitor",
        monitorGroup: "monitor_group",
        notificationEmail: "notification_email",
        notificationFilter: "notification_filter",
        originSteering: "origin_steering",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/load_balancers/pools/{poolId}",
      }),
    ),
) as unknown as Schema.Codec<UpdatePoolRequest>;

export interface UpdatePoolResponse {
  id?: string | null;
  /** A list of regions from which to run health checks. Null means every Cloudflare data center. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "SAS"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  createdOn?: string | null;
  /** A human-readable description of the pool. */
  description?: string | null;
  /** This field shows up only if the pool is disabled. This field is set with the time the pool was disabled at. */
  disabledAt?: string | null;
  /** Whether to enable (the default) or disable this pool. Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover t */
  enabled?: boolean | null;
  /** The latitude of the data center containing the origins used in this pool in decimal degrees. If this is set, longitude must also be set. */
  latitude?: number | null;
  /** Configures load shedding policies and percentages for the pool. */
  loadShedding?: {
    defaultPercent?: number | null;
    defaultPolicy?: "random" | "hash" | (string & {}) | null;
    sessionPercent?: number | null;
    sessionPolicy?: "hash" | null;
  } | null;
  /** The longitude of the data center containing the origins used in this pool in decimal degrees. If this is set, latitude must also be set. */
  longitude?: number | null;
  /** The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and will failover to the  */
  minimumOrigins?: number | null;
  modifiedOn?: string | null;
  /** The ID of the Monitor to use for checking the health of origins within this pool. */
  monitor?: string | null;
  /** The ID of the Monitor Group to use for checking the health of origins within this pool. */
  monitorGroup?: string | null;
  /** A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed. */
  name?: string | null;
  /** List of networks where Load Balancer or Pool is enabled. */
  networks?: string[] | null;
  /** This field is now deprecated. It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send health status  */
  notificationEmail?: string | null;
  /** Filter pool and origin health notifications by resource type or health status. Use null to reset. */
  notificationFilter?: {
    origin?: { disable?: boolean | null; healthy?: boolean | null } | null;
    pool?: { disable?: boolean | null; healthy?: boolean | null } | null;
  } | null;
  /** Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity. */
  originSteering?: {
    policy?:
      | "random"
      | "hash"
      | "least_outstanding_requests"
      | "least_connections"
      | (string & {})
      | null;
  } | null;
  /** The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy. */
  origins?:
    | {
        address?: string | null;
        disabledAt?: string | null;
        enabled?: boolean | null;
        flattenCname?: boolean | null;
        header?: { host?: string[] | null } | null;
        name?: string | null;
        port?: number | null;
        virtualNetworkId?: string | null;
        weight?: number | null;
      }[]
    | null;
}

export const UpdatePoolResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "SAS",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      disabledAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      latitude: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      loadShedding: Schema.optional(Schema.Union([LoadShedding, Schema.Null])),
      longitude: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      minimumOrigins: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      monitor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      monitorGroup: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      networks: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      notificationEmail: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      notificationFilter: Schema.optional(
        Schema.Union([NotificationFilter, Schema.Null]),
      ),
      originSteering: Schema.optional(
        Schema.Union([OriginSteering, Schema.Null]),
      ),
      origins: Schema.optional(
        Schema.Union([Schema.Array(Origin), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          checkRegions: "check_regions",
          createdOn: "created_on",
          description: "description",
          disabledAt: "disabled_at",
          enabled: "enabled",
          latitude: "latitude",
          loadShedding: "load_shedding",
          longitude: "longitude",
          minimumOrigins: "minimum_origins",
          modifiedOn: "modified_on",
          monitor: "monitor",
          monitorGroup: "monitor_group",
          name: "name",
          networks: "networks",
          notificationEmail: "notification_email",
          notificationFilter: "notification_filter",
          originSteering: "origin_steering",
          origins: "origins",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdatePoolResponse>;

export type UpdatePoolError =
  | DefaultErrors
  | PoolNotFound
  | PoolAccessFailed
  | Forbidden;

export const updatePool: API.OperationMethod<
  UpdatePoolRequest,
  UpdatePoolResponse,
  UpdatePoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePoolRequest,
  output: UpdatePoolResponse,
  errors: [PoolNotFound, PoolAccessFailed, Forbidden],
}));

export interface PatchPoolRequest {
  poolId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A list of regions from which to run health checks. Null means every Cloudflare data center. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "SAS"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  /** Body param: A human-readable description of the pool. */
  description?: string;
  /** Body param: Whether to enable (the default) or disable this pool. Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it t */
  enabled?: boolean;
  /** Body param: The latitude of the data center containing the origins used in this pool in decimal degrees. If this is set, longitude must also be set. */
  latitude?: number;
  /** Body param: Configures load shedding policies and percentages for the pool. */
  loadShedding?: {
    defaultPercent?: number;
    defaultPolicy?: "random" | "hash" | (string & {});
    sessionPercent?: number;
    sessionPolicy?: "hash";
  } | null;
  /** Body param: The longitude of the data center containing the origins used in this pool in decimal degrees. If this is set, latitude must also be set. */
  longitude?: number;
  /** Body param: The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and will fail */
  minimumOrigins?: number;
  /** Body param: The ID of the Monitor to use for checking the health of origins within this pool. */
  monitor?: string;
  /** Body param: The ID of the Monitor Group to use for checking the health of origins within this pool. */
  monitorGroup?: string;
  /** Body param: A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed. */
  name?: string;
  /** Body param: This field is now deprecated. It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send he */
  notificationEmail?: string;
  /** Body param: Filter pool and origin health notifications by resource type or health status. Use null to reset. */
  notificationFilter?: {
    origin?: { disable?: boolean | null; healthy?: boolean | null } | null;
    pool?: { disable?: boolean | null; healthy?: boolean | null } | null;
  } | null;
  /** Body param: Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity. */
  originSteering?: {
    policy?:
      | "random"
      | "hash"
      | "least_outstanding_requests"
      | "least_connections"
      | (string & {});
  } | null;
  /** Body param: The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy. */
  origins?: {
    address?: string;
    enabled?: boolean;
    flattenCname?: boolean;
    header?: { host?: string[] };
    name?: string;
    port?: number;
    virtualNetworkId?: string;
    weight?: number;
  }[];
}

export const PatchPoolRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    poolId: Schema.String.pipe(T.HttpPath("poolId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    checkRegions: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "WNAM",
              "ENAM",
              "WEU",
              "EEU",
              "NSAM",
              "SSAM",
              "OC",
              "ME",
              "NAF",
              "SAF",
              "SAS",
              "SEAS",
              "NEAS",
              "ALL_REGIONS",
            ]),
            Schema.String,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    description: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    latitude: Schema.optional(Schema.Number),
    loadShedding: Schema.optional(Schema.Union([LoadShedding, Schema.Null])),
    longitude: Schema.optional(Schema.Number),
    minimumOrigins: Schema.optional(Schema.Number),
    monitor: Schema.optional(Schema.String),
    monitorGroup: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    notificationEmail: Schema.optional(Schema.String),
    notificationFilter: Schema.optional(
      Schema.Union([NotificationFilter, Schema.Null]),
    ),
    originSteering: Schema.optional(
      Schema.Union([OriginSteering, Schema.Null]),
    ),
    origins: Schema.optional(Schema.Array(OriginParam)),
  }).pipe(
    Schema.encodeKeys({
      checkRegions: "check_regions",
      description: "description",
      enabled: "enabled",
      latitude: "latitude",
      loadShedding: "load_shedding",
      longitude: "longitude",
      minimumOrigins: "minimum_origins",
      monitor: "monitor",
      monitorGroup: "monitor_group",
      name: "name",
      notificationEmail: "notification_email",
      notificationFilter: "notification_filter",
      originSteering: "origin_steering",
      origins: "origins",
    }),
    T.Http({
      method: "PATCH",
      path: "/accounts/{account_id}/load_balancers/pools/{poolId}",
    }),
  ),
) as unknown as Schema.Codec<PatchPoolRequest>;

export interface PatchPoolResponse {
  id?: string | null;
  /** A list of regions from which to run health checks. Null means every Cloudflare data center. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "SAS"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  createdOn?: string | null;
  /** A human-readable description of the pool. */
  description?: string | null;
  /** This field shows up only if the pool is disabled. This field is set with the time the pool was disabled at. */
  disabledAt?: string | null;
  /** Whether to enable (the default) or disable this pool. Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover t */
  enabled?: boolean | null;
  /** The latitude of the data center containing the origins used in this pool in decimal degrees. If this is set, longitude must also be set. */
  latitude?: number | null;
  /** Configures load shedding policies and percentages for the pool. */
  loadShedding?: {
    defaultPercent?: number | null;
    defaultPolicy?: "random" | "hash" | (string & {}) | null;
    sessionPercent?: number | null;
    sessionPolicy?: "hash" | null;
  } | null;
  /** The longitude of the data center containing the origins used in this pool in decimal degrees. If this is set, latitude must also be set. */
  longitude?: number | null;
  /** The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and will failover to the  */
  minimumOrigins?: number | null;
  modifiedOn?: string | null;
  /** The ID of the Monitor to use for checking the health of origins within this pool. */
  monitor?: string | null;
  /** The ID of the Monitor Group to use for checking the health of origins within this pool. */
  monitorGroup?: string | null;
  /** A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed. */
  name?: string | null;
  /** List of networks where Load Balancer or Pool is enabled. */
  networks?: string[] | null;
  /** This field is now deprecated. It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send health status  */
  notificationEmail?: string | null;
  /** Filter pool and origin health notifications by resource type or health status. Use null to reset. */
  notificationFilter?: {
    origin?: { disable?: boolean | null; healthy?: boolean | null } | null;
    pool?: { disable?: boolean | null; healthy?: boolean | null } | null;
  } | null;
  /** Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity. */
  originSteering?: {
    policy?:
      | "random"
      | "hash"
      | "least_outstanding_requests"
      | "least_connections"
      | (string & {})
      | null;
  } | null;
  /** The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy. */
  origins?:
    | {
        address?: string | null;
        disabledAt?: string | null;
        enabled?: boolean | null;
        flattenCname?: boolean | null;
        header?: { host?: string[] | null } | null;
        name?: string | null;
        port?: number | null;
        virtualNetworkId?: string | null;
        weight?: number | null;
      }[]
    | null;
}

export const PatchPoolResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "SAS",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      disabledAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      latitude: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      loadShedding: Schema.optional(Schema.Union([LoadShedding, Schema.Null])),
      longitude: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      minimumOrigins: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      monitor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      monitorGroup: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      networks: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      notificationEmail: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      notificationFilter: Schema.optional(
        Schema.Union([NotificationFilter, Schema.Null]),
      ),
      originSteering: Schema.optional(
        Schema.Union([OriginSteering, Schema.Null]),
      ),
      origins: Schema.optional(
        Schema.Union([Schema.Array(Origin), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          checkRegions: "check_regions",
          createdOn: "created_on",
          description: "description",
          disabledAt: "disabled_at",
          enabled: "enabled",
          latitude: "latitude",
          loadShedding: "load_shedding",
          longitude: "longitude",
          minimumOrigins: "minimum_origins",
          modifiedOn: "modified_on",
          monitor: "monitor",
          monitorGroup: "monitor_group",
          name: "name",
          networks: "networks",
          notificationEmail: "notification_email",
          notificationFilter: "notification_filter",
          originSteering: "origin_steering",
          origins: "origins",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchPoolResponse>;

export type PatchPoolError = DefaultErrors;

export const patchPool: API.OperationMethod<
  PatchPoolRequest,
  PatchPoolResponse,
  PatchPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPoolRequest,
  output: PatchPoolResponse,
  errors: [],
}));

export interface DeletePoolRequest {
  poolId: string;
  /** Identifier. */
  accountId: string;
}

export const DeletePoolRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      poolId: Schema.String.pipe(T.HttpPath("poolId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/load_balancers/pools/{poolId}",
      }),
    ),
) as unknown as Schema.Codec<DeletePoolRequest>;

export interface DeletePoolResponse {
  id?: string | null;
}

export const DeletePoolResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeletePoolResponse>;

export type DeletePoolError =
  | DefaultErrors
  | PoolNotFound
  | PoolInUse
  | Forbidden;

export const deletePool: API.OperationMethod<
  DeletePoolRequest,
  DeletePoolResponse,
  DeletePoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePoolRequest,
  output: DeletePoolResponse,
  errors: [PoolNotFound, PoolInUse, Forbidden],
}));

export interface BulkPatchPoolsRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The email address to send health status notifications to. This field is now deprecated in favor of Cloudflare Notifications for Load Balancing, so only resetting this field with an empty s */
  notificationEmail?: "";
}

export const BulkPatchPoolsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      notificationEmail: Schema.optional(Schema.Literal("")),
    }).pipe(
      Schema.encodeKeys({ notificationEmail: "notification_email" }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/load_balancers/pools",
      }),
    ),
) as unknown as Schema.Codec<BulkPatchPoolsRequest>;

export interface BulkPatchPoolsResponse {
  result: {
    id?: string | null;
    checkRegions?:
      | (
          | "WNAM"
          | "ENAM"
          | "WEU"
          | "EEU"
          | "NSAM"
          | "SSAM"
          | "OC"
          | "ME"
          | "NAF"
          | "SAF"
          | "SAS"
          | "SEAS"
          | "NEAS"
          | "ALL_REGIONS"
          | (string & {})
        )[]
      | null;
    createdOn?: string | null;
    description?: string | null;
    disabledAt?: string | null;
    enabled?: boolean | null;
    latitude?: number | null;
    loadShedding?: {
      defaultPercent?: number | null;
      defaultPolicy?: "random" | "hash" | (string & {}) | null;
      sessionPercent?: number | null;
      sessionPolicy?: "hash" | null;
    } | null;
    longitude?: number | null;
    minimumOrigins?: number | null;
    modifiedOn?: string | null;
    monitor?: string | null;
    monitorGroup?: string | null;
    name?: string | null;
    networks?: string[] | null;
    notificationEmail?: string | null;
    notificationFilter?: {
      origin?: { disable?: boolean | null; healthy?: boolean | null } | null;
      pool?: { disable?: boolean | null; healthy?: boolean | null } | null;
    } | null;
    originSteering?: {
      policy?:
        | "random"
        | "hash"
        | "least_outstanding_requests"
        | "least_connections"
        | (string & {})
        | null;
    } | null;
    origins?:
      | {
          address?: string | null;
          disabledAt?: string | null;
          enabled?: boolean | null;
          flattenCname?: boolean | null;
          header?: { host?: string[] | null } | null;
          name?: string | null;
          port?: number | null;
          virtualNetworkId?: string | null;
          weight?: number | null;
        }[]
      | null;
  }[];
}

export const BulkPatchPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListPoolsResponseResult),
    }),
  ) as unknown as Schema.Codec<BulkPatchPoolsResponse>;

export type BulkPatchPoolsError = DefaultErrors;

export const bulkPatchPools: API.PaginatedOperationMethod<
  BulkPatchPoolsRequest,
  BulkPatchPoolsResponse,
  BulkPatchPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: BulkPatchPoolsRequest,
  output: BulkPatchPoolsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// PoolHealth
// =============================================================================

export interface GetPoolHealthRequest {
  poolId: string;
  /** Identifier. */
  accountId: string;
}

export const GetPoolHealthRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      poolId: Schema.String.pipe(T.HttpPath("poolId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/load_balancers/pools/{poolId}/health",
      }),
    ),
) as unknown as Schema.Codec<GetPoolHealthRequest>;

export interface GetPoolHealthResponse {
  /** Pool ID. */
  poolId?: string | null;
  /** List of regions and associated health status. */
  popHealth?: {
    healthy?: boolean | null;
    origins?:
      | {
          ip?: {
            failureReason?: string | null;
            healthy?: boolean | null;
            responseCode?: number | null;
            rtt?: string | null;
          } | null;
        }[]
      | null;
  } | null;
}

export const GetPoolHealthResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      poolId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      popHealth: Schema.optional(Schema.Union([Pophealth, Schema.Null])),
    })
      .pipe(Schema.encodeKeys({ poolId: "pool_id", popHealth: "pop_health" }))
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetPoolHealthResponse>;

export type GetPoolHealthError = DefaultErrors;

export const getPoolHealth: API.OperationMethod<
  GetPoolHealthRequest,
  GetPoolHealthResponse,
  GetPoolHealthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPoolHealthRequest,
  output: GetPoolHealthResponse,
  errors: [],
}));

export interface CreatePoolHealthRequest {
  poolId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors. */
  allowInsecure?: boolean;
  /** Body param: To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times. */
  consecutiveDown?: number;
  /** Body param: To be marked healthy the monitored origin must pass this healthcheck N consecutive times. */
  consecutiveUp?: number;
  /** Body param: Object description. */
  description?: string;
  /** Body param: A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitor */
  expectedBody?: string;
  /** Body param: The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors. */
  expectedCodes?: string;
  /** Body param: Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors. */
  followRedirects?: boolean;
  /** Body param: The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP  */
  header?: Record<string, unknown>;
  /** Body param: The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations. */
  interval?: number;
  /** Body param: The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks. */
  method?: string;
  /** Body param: The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors. */
  path?: string;
  /** Body param: The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default  */
  port?: number | null;
  /** Body param: Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors. */
  probeZone?: string;
  /** Body param: The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number;
  /** Body param: The timeout (in seconds) before marking the health check as failed. */
  timeout?: number;
  /** Body param: The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'. */
  type?:
    | "http"
    | "https"
    | "tcp"
    | "udp_icmp"
    | "icmp_ping"
    | "smtp"
    | (string & {});
}

export const CreatePoolHealthRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      poolId: Schema.String.pipe(T.HttpPath("poolId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      allowInsecure: Schema.optional(Schema.Boolean),
      consecutiveDown: Schema.optional(Schema.Number),
      consecutiveUp: Schema.optional(Schema.Number),
      description: Schema.optional(Schema.String),
      expectedBody: Schema.optional(Schema.String),
      expectedCodes: Schema.optional(Schema.String),
      followRedirects: Schema.optional(Schema.Boolean),
      header: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      interval: Schema.optional(Schema.Number),
      method: Schema.optional(Schema.String),
      path: Schema.optional(Schema.String),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      probeZone: Schema.optional(Schema.String),
      retries: Schema.optional(Schema.Number),
      timeout: Schema.optional(Schema.Number),
      type: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "http",
            "https",
            "tcp",
            "udp_icmp",
            "icmp_ping",
            "smtp",
          ]),
          Schema.String,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        allowInsecure: "allow_insecure",
        consecutiveDown: "consecutive_down",
        consecutiveUp: "consecutive_up",
        description: "description",
        expectedBody: "expected_body",
        expectedCodes: "expected_codes",
        followRedirects: "follow_redirects",
        header: "header",
        interval: "interval",
        method: "method",
        path: "path",
        port: "port",
        probeZone: "probe_zone",
        retries: "retries",
        timeout: "timeout",
        type: "type",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/load_balancers/pools/{poolId}/preview",
      }),
    ),
  ) as unknown as Schema.Codec<CreatePoolHealthRequest>;

export interface CreatePoolHealthResponse {
  /** Monitored pool IDs mapped to their respective names. */
  pools?: Record<string, unknown> | null;
  previewId?: string | null;
}

export const CreatePoolHealthResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      pools: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      previewId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(Schema.encodeKeys({ pools: "pools", previewId: "preview_id" }))
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreatePoolHealthResponse>;

export type CreatePoolHealthError = DefaultErrors;

export const createPoolHealth: API.OperationMethod<
  CreatePoolHealthRequest,
  CreatePoolHealthResponse,
  CreatePoolHealthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePoolHealthRequest,
  output: CreatePoolHealthResponse,
  errors: [],
}));

// =============================================================================
// PoolReference
// =============================================================================

export interface GetPoolReferenceRequest {
  poolId: string;
  /** Identifier. */
  accountId: string;
}

export const GetPoolReferenceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      poolId: Schema.String.pipe(T.HttpPath("poolId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/load_balancers/pools/{poolId}/references",
      }),
    ),
  ) as unknown as Schema.Codec<GetPoolReferenceRequest>;

export interface GetPoolReferenceResponse {
  result: {
    referenceType?: "*" | "referral" | "referrer" | (string & {}) | null;
    resourceId?: string | null;
    resourceName?: string | null;
    resourceType?: string | null;
  }[];
}

export const GetPoolReferenceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(GetMonitorGroupReferenceResponseResult),
    }),
  ) as unknown as Schema.Codec<GetPoolReferenceResponse>;

export type GetPoolReferenceError = DefaultErrors;

export const getPoolReference: API.PaginatedOperationMethod<
  GetPoolReferenceRequest,
  GetPoolReferenceResponse,
  GetPoolReferenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetPoolReferenceRequest,
  output: GetPoolReferenceResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Preview
// =============================================================================

export interface GetPreviewRequest {
  previewId: string;
  /** Identifier. */
  accountId: string;
}

export const GetPreviewRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      previewId: Schema.String.pipe(T.HttpPath("previewId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/load_balancers/preview/{previewId}",
      }),
    ),
) as unknown as Schema.Codec<GetPreviewRequest>;

export type GetPreviewResponse = Record<string, unknown>;

export const GetPreviewResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Record(Schema.String, Schema.Unknown).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetPreviewResponse>;

export type GetPreviewError = DefaultErrors;

export const getPreview: API.OperationMethod<
  GetPreviewRequest,
  GetPreviewResponse,
  GetPreviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPreviewRequest,
  output: GetPreviewResponse,
  errors: [],
}));

// =============================================================================
// Region
// =============================================================================

export interface GetRegionRequest {
  /** Identifier. */
  accountId: string;
  regionId: string;
}

export const GetRegionRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    regionId: Schema.String.pipe(T.HttpPath("regionId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/load_balancers/regions/{regionId}",
    }),
  ),
) as unknown as Schema.Codec<GetRegionRequest>;

export type GetRegionResponse = unknown;

export const GetRegionResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetRegionResponse>;

export type GetRegionError = DefaultErrors;

export const getRegion: API.OperationMethod<
  GetRegionRequest,
  GetRegionResponse,
  GetRegionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRegionRequest,
  output: GetRegionResponse,
  errors: [],
}));

export interface ListRegionsRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Two-letter alpha-2 country code followed in ISO 3166-1. */
  countryCodeA2?: string;
  /** Query param: Two-letter subdivision code followed in ISO 3166-2. */
  subdivisionCode?: string;
  /** Query param: Two-letter subdivision code followed in ISO 3166-2. */
  subdivisionCodeA2?: string;
}

export const ListRegionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      countryCodeA2: Schema.optional(Schema.String).pipe(
        T.HttpQuery("country_code_a2"),
      ),
      subdivisionCode: Schema.optional(Schema.String).pipe(
        T.HttpQuery("subdivision_code"),
      ),
      subdivisionCodeA2: Schema.optional(Schema.String).pipe(
        T.HttpQuery("subdivision_code_a2"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/load_balancers/regions",
      }),
    ),
) as unknown as Schema.Codec<ListRegionsRequest>;

export type ListRegionsResponse = unknown;

export const ListRegionsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<ListRegionsResponse>;

export type ListRegionsError = DefaultErrors;

export const listRegions: API.OperationMethod<
  ListRegionsRequest,
  ListRegionsResponse,
  ListRegionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListRegionsRequest,
  output: ListRegionsResponse,
  errors: [],
}));

// =============================================================================
// Search
// =============================================================================

export interface ListSearchesRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Search query term. */
  query?: string;
  /** Query param: The type of references to include. "\ " to include both referral and referrer references. "" to not include any reference information. */
  references?: "" | "*" | "referral" | "referrer" | (string & {});
}

export const ListSearchesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
      references: Schema.optional(
        Schema.Union([
          Schema.Literals(["", "*", "referral", "referrer"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("references")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/load_balancers/search",
      }),
    ),
) as unknown as Schema.Codec<ListSearchesRequest>;

export interface ListSearchesResponse {
  result: {
    items?:
      | {
          resources?:
            | {
                referenceType?: "referral" | "referrer" | (string & {}) | null;
                references?: unknown[] | null;
                resourceId?: string | null;
                resourceName?: string | null;
                resourceType?:
                  | "load_balancer"
                  | "monitor"
                  | "pool"
                  | (string & {})
                  | null;
              }[]
            | null;
        }[]
      | null;
  };
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListSearchesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: ListSearchesResponseResult,
      resultInfo: Schema.optional(
        Schema.Union([ListSearchesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListSearchesResponse>;

export type ListSearchesError = DefaultErrors;

export const listSearches: API.PaginatedOperationMethod<
  ListSearchesRequest,
  ListSearchesResponse,
  ListSearchesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSearchesRequest,
  output: ListSearchesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result.items",
    pageSize: "perPage",
  } as const,
}));
