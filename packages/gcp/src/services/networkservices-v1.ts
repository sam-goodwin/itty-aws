// ==========================================================================
// Network Services API (networkservices v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "networkservices",
  version: "v1",
  rootUrl: "https://networkservices.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface HttpRouteHeaderMatchIntegerRange {
  /** Start of the range (inclusive) */
  start?: number;
  /** End of the range (exclusive) */
  end?: number;
}

export const HttpRouteHeaderMatchIntegerRange: Schema.Schema<HttpRouteHeaderMatchIntegerRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    start: Schema.optional(Schema.Number),
    end: Schema.optional(Schema.Number),
  }).annotate({ identifier: "HttpRouteHeaderMatchIntegerRange" });

export interface HttpRouteHeaderMatch {
  /** If specified, the rule will match if the request header value is within the range. */
  rangeMatch?: HttpRouteHeaderMatchIntegerRange;
  /** A header with header_name must exist. The match takes place whether or not the header has a value. */
  presentMatch?: boolean;
  /** The value of the header must match the regular expression specified in regex_match. For regular expression grammar, please see: https://github.com/google/re2/wiki/Syntax */
  regexMatch?: string;
  /** The value of the header must start with the contents of prefix_match. */
  prefixMatch?: string;
  /** The value of the header should match exactly the content of exact_match. */
  exactMatch?: string;
  /** The name of the HTTP header to match against. */
  header?: string;
  /** If specified, the match result will be inverted before checking. Default value is set to false. */
  invertMatch?: boolean;
  /** The value of the header must end with the contents of suffix_match. */
  suffixMatch?: string;
}

export const HttpRouteHeaderMatch: Schema.Schema<HttpRouteHeaderMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rangeMatch: Schema.optional(HttpRouteHeaderMatchIntegerRange),
    presentMatch: Schema.optional(Schema.Boolean),
    regexMatch: Schema.optional(Schema.String),
    prefixMatch: Schema.optional(Schema.String),
    exactMatch: Schema.optional(Schema.String),
    header: Schema.optional(Schema.String),
    invertMatch: Schema.optional(Schema.Boolean),
    suffixMatch: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpRouteHeaderMatch" });

export interface HttpRouteQueryParameterMatch {
  /** The name of the query parameter to match. */
  queryParameter?: string;
  /** The value of the query parameter must exactly match the contents of exact_match. Only one of exact_match, regex_match, or present_match must be set. */
  exactMatch?: string;
  /** Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not. Only one of exact_match, regex_match, or present_match must be set. */
  presentMatch?: boolean;
  /** The value of the query parameter must match the regular expression specified by regex_match. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of exact_match, regex_match, or present_match must be set. */
  regexMatch?: string;
}

export const HttpRouteQueryParameterMatch: Schema.Schema<HttpRouteQueryParameterMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryParameter: Schema.optional(Schema.String),
    exactMatch: Schema.optional(Schema.String),
    presentMatch: Schema.optional(Schema.Boolean),
    regexMatch: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpRouteQueryParameterMatch" });

export interface HttpRouteRouteMatch {
  /** Specifies if prefix_match and full_path_match matches are case sensitive. The default value is false. */
  ignoreCase?: boolean;
  /** Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched. */
  headers?: ReadonlyArray<HttpRouteHeaderMatch>;
  /** The HTTP request path value must satisfy the regular expression specified by regex_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of full_path_match, prefix_match, or regex_match should be used. */
  regexMatch?: string;
  /** The HTTP request path value must begin with specified prefix_match. prefix_match must begin with a /. Only one of full_path_match, prefix_match, or regex_match should be used. */
  prefixMatch?: string;
  /** The HTTP request path value should exactly match this value. Only one of full_path_match, prefix_match, or regex_match should be used. */
  fullPathMatch?: string;
  /** Specifies a list of query parameters to match against. ALL of the query parameters must be matched. */
  queryParameters?: ReadonlyArray<HttpRouteQueryParameterMatch>;
}

export const HttpRouteRouteMatch: Schema.Schema<HttpRouteRouteMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ignoreCase: Schema.optional(Schema.Boolean),
    headers: Schema.optional(Schema.Array(HttpRouteHeaderMatch)),
    regexMatch: Schema.optional(Schema.String),
    prefixMatch: Schema.optional(Schema.String),
    fullPathMatch: Schema.optional(Schema.String),
    queryParameters: Schema.optional(
      Schema.Array(HttpRouteQueryParameterMatch),
    ),
  }).annotate({ identifier: "HttpRouteRouteMatch" });

export interface HttpRouteURLRewrite {
  /** Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value. */
  pathPrefixRewrite?: string;
  /** Prior to forwarding the request to the selected destination, the requests host header is replaced by this value. */
  hostRewrite?: string;
}

export const HttpRouteURLRewrite: Schema.Schema<HttpRouteURLRewrite> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pathPrefixRewrite: Schema.optional(Schema.String),
    hostRewrite: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpRouteURLRewrite" });

export interface HttpRouteHeaderModifier {
  /** Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. */
  set?: Record<string, string>;
  /** Remove headers (matching by header names) specified in the list. */
  remove?: ReadonlyArray<string>;
  /** Add the headers with given map where key is the name of the header, value is the value of the header. */
  add?: Record<string, string>;
}

export const HttpRouteHeaderModifier: Schema.Schema<HttpRouteHeaderModifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    set: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    remove: Schema.optional(Schema.Array(Schema.String)),
    add: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "HttpRouteHeaderModifier" });

export interface HttpRouteDestination {
  /** The URL of a BackendService to route traffic to. */
  serviceName?: string;
  /** Optional. The specification for modifying the headers of a matching request prior to delivery of the request to the destination. If HeaderModifiers are set on both the Destination and the RouteAction, they will be merged. Conflicts between the two will not be resolved on the configuration. */
  requestHeaderModifier?: HttpRouteHeaderModifier;
  /** Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: - weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them. */
  weight?: number;
  /** Optional. The specification for modifying the headers of a response prior to sending the response back to the client. If HeaderModifiers are set on both the Destination and the RouteAction, they will be merged. Conflicts between the two will not be resolved on the configuration. */
  responseHeaderModifier?: HttpRouteHeaderModifier;
}

export const HttpRouteDestination: Schema.Schema<HttpRouteDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.optional(Schema.String),
    requestHeaderModifier: Schema.optional(HttpRouteHeaderModifier),
    weight: Schema.optional(Schema.Number),
    responseHeaderModifier: Schema.optional(HttpRouteHeaderModifier),
  }).annotate({ identifier: "HttpRouteDestination" });

export interface HttpRouteHttpDirectResponse {
  /** Optional. Response body as bytes. Maximum body size is 4096B. */
  bytesBody?: string;
  /** Optional. Response body as a string. Maximum body length is 1024 characters. */
  stringBody?: string;
  /** Required. Status to return as part of HTTP Response. Must be a positive integer. */
  status?: number;
}

export const HttpRouteHttpDirectResponse: Schema.Schema<HttpRouteHttpDirectResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bytesBody: Schema.optional(Schema.String),
    stringBody: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Number),
  }).annotate({ identifier: "HttpRouteHttpDirectResponse" });

export interface HttpRouteRedirect {
  /** The host that will be used in the redirect response instead of the one that was supplied in the request. */
  hostRedirect?: string;
  /** The port that will be used in the redirected request instead of the one that was supplied in the request. */
  portRedirect?: number;
  /** Indicates that during redirection, the matched prefix (or path) should be swapped with this value. This option allows URLs be dynamically created based on the request. */
  prefixRewrite?: string;
  /** if set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. If set to false, the query portion of the original URL is retained. The default is set to false. */
  stripQuery?: boolean;
  /** If set to true, the URL scheme in the redirected request is set to https. If set to false, the URL scheme of the redirected request will remain the same as that of the request. The default is set to false. */
  httpsRedirect?: boolean;
  /** The path that will be used in the redirect response instead of the one that was supplied in the request. path_redirect can not be supplied together with prefix_redirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect. */
  pathRedirect?: string;
  /** The HTTP Status code to use for the redirect. */
  responseCode?:
    | "RESPONSE_CODE_UNSPECIFIED"
    | "MOVED_PERMANENTLY_DEFAULT"
    | "FOUND"
    | "SEE_OTHER"
    | "TEMPORARY_REDIRECT"
    | "PERMANENT_REDIRECT"
    | (string & {});
}

export const HttpRouteRedirect: Schema.Schema<HttpRouteRedirect> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostRedirect: Schema.optional(Schema.String),
    portRedirect: Schema.optional(Schema.Number),
    prefixRewrite: Schema.optional(Schema.String),
    stripQuery: Schema.optional(Schema.Boolean),
    httpsRedirect: Schema.optional(Schema.Boolean),
    pathRedirect: Schema.optional(Schema.String),
    responseCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpRouteRedirect" });

export interface HttpRouteFaultInjectionPolicyDelay {
  /** Specify a fixed delay before forwarding the request. */
  fixedDelay?: string;
  /** The percentage of traffic on which delay will be injected. The value must be between [0, 100] */
  percentage?: number;
}

export const HttpRouteFaultInjectionPolicyDelay: Schema.Schema<HttpRouteFaultInjectionPolicyDelay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fixedDelay: Schema.optional(Schema.String),
    percentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "HttpRouteFaultInjectionPolicyDelay" });

export interface HttpRouteFaultInjectionPolicyAbort {
  /** The percentage of traffic which will be aborted. The value must be between [0, 100] */
  percentage?: number;
  /** The HTTP status code used to abort the request. The value must be between 200 and 599 inclusive. */
  httpStatus?: number;
}

export const HttpRouteFaultInjectionPolicyAbort: Schema.Schema<HttpRouteFaultInjectionPolicyAbort> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    percentage: Schema.optional(Schema.Number),
    httpStatus: Schema.optional(Schema.Number),
  }).annotate({ identifier: "HttpRouteFaultInjectionPolicyAbort" });

export interface HttpRouteFaultInjectionPolicy {
  /** The specification for injecting delay to client requests. */
  delay?: HttpRouteFaultInjectionPolicyDelay;
  /** The specification for aborting to client requests. */
  abort?: HttpRouteFaultInjectionPolicyAbort;
}

export const HttpRouteFaultInjectionPolicy: Schema.Schema<HttpRouteFaultInjectionPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delay: Schema.optional(HttpRouteFaultInjectionPolicyDelay),
    abort: Schema.optional(HttpRouteFaultInjectionPolicyAbort),
  }).annotate({ identifier: "HttpRouteFaultInjectionPolicy" });

export interface HttpRouteRetryPolicy {
  /** Specifies the allowed number of retries. This number must be > 0. If not specified, default to 1. */
  numRetries?: number;
  /** Specifies a non-zero timeout per retry attempt. */
  perTryTimeout?: string;
  /** Specifies one or more conditions when this retry policy applies. Valid values are: 5xx: Proxy will attempt a retry if the destination service responds with any 5xx response code, of if the destination service does not respond at all, example: disconnect, reset, read timeout, connection failure and refused streams. gateway-error: Similar to 5xx, but only applies to response codes 502, 503, 504. reset: Proxy will attempt a retry if the destination service does not respond at all (disconnect/reset/read timeout) connect-failure: Proxy will retry on failures connecting to destination for example due to connection timeouts. retriable-4xx: Proxy will retry fro retriable 4xx response codes. Currently the only retriable error supported is 409. refused-stream: Proxy will retry if the destination resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry. */
  retryConditions?: ReadonlyArray<string>;
}

export const HttpRouteRetryPolicy: Schema.Schema<HttpRouteRetryPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numRetries: Schema.optional(Schema.Number),
    perTryTimeout: Schema.optional(Schema.String),
    retryConditions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "HttpRouteRetryPolicy" });

export interface HttpRouteCorsPolicy {
  /** Specifies the list of origins that will be allowed to do CORS requests. An origin is allowed if it matches either an item in allow_origins or an item in allow_origin_regexes. */
  allowOrigins?: ReadonlyArray<string>;
  /** Specifies the content for Access-Control-Allow-Headers header. */
  allowHeaders?: ReadonlyArray<string>;
  /** In response to a preflight request, setting this to true indicates that the actual request can include user credentials. This translates to the Access-Control-Allow-Credentials header. Default value is false. */
  allowCredentials?: boolean;
  /** Specifies the content for Access-Control-Allow-Methods header. */
  allowMethods?: ReadonlyArray<string>;
  /** Specifies how long result of a preflight request can be cached in seconds. This translates to the Access-Control-Max-Age header. */
  maxAge?: string;
  /** If true, the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect. */
  disabled?: boolean;
  /** Specifies the regular expression patterns that match allowed origins. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax. */
  allowOriginRegexes?: ReadonlyArray<string>;
  /** Specifies the content for Access-Control-Expose-Headers header. */
  exposeHeaders?: ReadonlyArray<string>;
}

export const HttpRouteCorsPolicy: Schema.Schema<HttpRouteCorsPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowOrigins: Schema.optional(Schema.Array(Schema.String)),
    allowHeaders: Schema.optional(Schema.Array(Schema.String)),
    allowCredentials: Schema.optional(Schema.Boolean),
    allowMethods: Schema.optional(Schema.Array(Schema.String)),
    maxAge: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    allowOriginRegexes: Schema.optional(Schema.Array(Schema.String)),
    exposeHeaders: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "HttpRouteCorsPolicy" });

export interface HttpRouteStatefulSessionAffinityPolicy {
  /** Required. The cookie TTL value for the Set-Cookie header generated by the data plane. The lifetime of the cookie may be set to a value from 0 to 86400 seconds (24 hours) inclusive. Set this to 0s to use a session cookie and disable cookie expiration. */
  cookieTtl?: string;
}

export const HttpRouteStatefulSessionAffinityPolicy: Schema.Schema<HttpRouteStatefulSessionAffinityPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cookieTtl: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpRouteStatefulSessionAffinityPolicy" });

export interface HttpRouteRequestMirrorPolicy {
  /** The destination the requests will be mirrored to. The weight of the destination will be ignored. */
  destination?: HttpRouteDestination;
  /** Optional. The percentage of requests to get mirrored to the desired destination. */
  mirrorPercent?: number;
}

export const HttpRouteRequestMirrorPolicy: Schema.Schema<HttpRouteRequestMirrorPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destination: Schema.optional(HttpRouteDestination),
    mirrorPercent: Schema.optional(Schema.Number),
  }).annotate({ identifier: "HttpRouteRequestMirrorPolicy" });

export interface HttpRouteRouteAction {
  /** The specification for rewrite URL before forwarding requests to the destination. */
  urlRewrite?: HttpRouteURLRewrite;
  /** The destination to which traffic should be forwarded. */
  destinations?: ReadonlyArray<HttpRouteDestination>;
  /** The specification for modifying the headers of a response prior to sending the response back to the client. If HeaderModifiers are set on both the Destination and the RouteAction, they will be merged. Conflicts between the two will not be resolved on the configuration. */
  responseHeaderModifier?: HttpRouteHeaderModifier;
  /** Optional. Static HTTP Response object to be returned regardless of the request. */
  directResponse?: HttpRouteHttpDirectResponse;
  /** If set, the request is directed as configured by this field. */
  redirect?: HttpRouteRedirect;
  /** Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries. */
  timeout?: string;
  /** The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure. As part of fault injection, when clients send requests to a backend service, delays can be introduced on a percentage of requests before sending those requests to the backend service. Similarly requests from clients can be aborted for a percentage of requests. timeout and retry_policy will be ignored by clients that are configured with a fault_injection_policy */
  faultInjectionPolicy?: HttpRouteFaultInjectionPolicy;
  /** Specifies the retry policy associated with this route. */
  retryPolicy?: HttpRouteRetryPolicy;
  /** Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled. */
  idleTimeout?: string;
  /** The specification for allowing client side cross-origin requests. */
  corsPolicy?: HttpRouteCorsPolicy;
  /** Optional. Specifies cookie-based stateful session affinity. */
  statefulSessionAffinity?: HttpRouteStatefulSessionAffinityPolicy;
  /** Specifies the policy on how requests intended for the routes destination are shadowed to a separate mirrored destination. Proxy will not wait for the shadow destination to respond before returning the response. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow. */
  requestMirrorPolicy?: HttpRouteRequestMirrorPolicy;
  /** The specification for modifying the headers of a matching request prior to delivery of the request to the destination. If HeaderModifiers are set on both the Destination and the RouteAction, they will be merged. Conflicts between the two will not be resolved on the configuration. */
  requestHeaderModifier?: HttpRouteHeaderModifier;
}

export const HttpRouteRouteAction: Schema.Schema<HttpRouteRouteAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    urlRewrite: Schema.optional(HttpRouteURLRewrite),
    destinations: Schema.optional(Schema.Array(HttpRouteDestination)),
    responseHeaderModifier: Schema.optional(HttpRouteHeaderModifier),
    directResponse: Schema.optional(HttpRouteHttpDirectResponse),
    redirect: Schema.optional(HttpRouteRedirect),
    timeout: Schema.optional(Schema.String),
    faultInjectionPolicy: Schema.optional(HttpRouteFaultInjectionPolicy),
    retryPolicy: Schema.optional(HttpRouteRetryPolicy),
    idleTimeout: Schema.optional(Schema.String),
    corsPolicy: Schema.optional(HttpRouteCorsPolicy),
    statefulSessionAffinity: Schema.optional(
      HttpRouteStatefulSessionAffinityPolicy,
    ),
    requestMirrorPolicy: Schema.optional(HttpRouteRequestMirrorPolicy),
    requestHeaderModifier: Schema.optional(HttpRouteHeaderModifier),
  }).annotate({ identifier: "HttpRouteRouteAction" });

export interface HttpRouteRouteRule {
  /** A list of matches define conditions used for matching the rule against incoming HTTP requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied. If no matches field is specified, this rule will unconditionally match traffic. If a default rule is desired to be configured, add a rule with no matches specified to the end of the rules list. */
  matches?: ReadonlyArray<HttpRouteRouteMatch>;
  /** The detailed rule defining how to route matched traffic. */
  action?: HttpRouteRouteAction;
}

export const HttpRouteRouteRule: Schema.Schema<HttpRouteRouteRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matches: Schema.optional(Schema.Array(HttpRouteRouteMatch)),
    action: Schema.optional(HttpRouteRouteAction),
  }).annotate({ identifier: "HttpRouteRouteRule" });

export interface GrpcRouteDestination {
  /** Optional. Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: - weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them. */
  weight?: number;
  /** Required. The URL of a destination service to which to route traffic. Must refer to either a BackendService or ServiceDirectoryService. */
  serviceName?: string;
}

export const GrpcRouteDestination: Schema.Schema<GrpcRouteDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    weight: Schema.optional(Schema.Number),
    serviceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrpcRouteDestination" });

export interface HttpRoute {
  /** Optional. Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/* /locations/* /gateways/` */
  gateways?: ReadonlyArray<string>;
  /** Optional. Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/* /locations/* /meshes/` The attached Mesh should be of a type SIDECAR */
  meshes?: ReadonlyArray<string>;
  /** Required. Rules that define how traffic is routed and handled. Rules will be matched sequentially based on the RouteMatch specified for the rule. */
  rules?: ReadonlyArray<HttpRouteRouteRule>;
  /** Output only. Server-defined URL of this resource */
  selfLink?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of label tags associated with the HttpRoute resource. */
  labels?: Record<string, string>;
  /** Identifier. Name of the HttpRoute resource. It matches pattern `projects/* /locations/* /httpRoutes/http_route_name>`. */
  name?: string;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Required. Hostnames define a set of hosts that should match against the HTTP host header to select a HttpRoute to process the request. Hostname is the fully qualified domain name of a network host, as defined by RFC 1123 with the exception that: - IPs are not allowed. - A hostname may be prefixed with a wildcard label (`*.`). The wildcard label must appear by itself as the first label. Hostname can be "precise" which is a domain name without the terminating dot of a network host (e.g. `foo.example.com`) or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. `*.example.com`). Note that as per RFC1035 and RFC1123, a label must consist of lower case alphanumeric characters or '-', and must start and end with an alphanumeric character. No other punctuation is allowed. The routes associated with a Mesh or Gateways must have unique hostnames. If you attempt to attach multiple routes with conflicting hostnames, the configuration will be rejected. For example, while it is acceptable for routes for the hostnames `*.foo.bar.com` and `*.bar.com` to be associated with the same Mesh (or Gateways under the same scope), it is not possible to associate two routes both with `*.bar.com` or both with `bar.com`. */
  hostnames?: ReadonlyArray<string>;
  /** Optional. A free-text description of the resource. Max length 1024 characters. */
  description?: string;
}

export const HttpRoute: Schema.Schema<HttpRoute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gateways: Schema.optional(Schema.Array(Schema.String)),
    meshes: Schema.optional(Schema.Array(Schema.String)),
    rules: Schema.optional(Schema.Array(HttpRouteRouteRule)),
    selfLink: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    hostnames: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpRoute" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ExtensionChainExtension {
  /** Optional. List of the Envoy attributes to forward to the extension server. The attributes provided here are included as part of the `ProcessingRequest.attributes` field (of type `map`), where the keys are the attribute names. Refer to the [documentation](https://cloud.google.com/service-extensions/docs/cel-matcher-language-reference#attributes) for the names of attributes that can be forwarded. If omitted, no attributes are sent. Each element is a string indicating the attribute name. */
  forwardAttributes?: ReadonlyArray<string>;
  /** Required. The reference to the service that runs the extension. To configure a callout extension, `service` must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format: `https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/backendServices/{backendService}` or `https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}`. To configure a plugin extension, `service` must be a reference to a [`WasmPlugin` resource](https://cloud.google.com/service-extensions/docs/reference/rest/v1beta1/projects.locations.wasmPlugins) in the format: `projects/{project}/locations/{location}/wasmPlugins/{plugin}` or `//networkservices.googleapis.com/projects/{project}/locations/{location}/wasmPlugins/{wasmPlugin}`. Plugin extensions are currently supported for the `LbTrafficExtension`, the `LbRouteExtension`, and the `LbEdgeExtension` resources. */
  service?: string;
  /** Optional. The `:authority` header in the gRPC request sent from Envoy to the extension service. Required for Callout extensions. This field is not supported for plugin extensions. Setting it results in a validation error. */
  authority?: string;
  /** Optional. List of the HTTP headers to forward to the extension (from the client or backend). If omitted, all headers are sent. Each element is a string indicating the header name. */
  forwardHeaders?: ReadonlyArray<string>;
  /** Optional. Determines how the proxy behaves if the call to the extension fails or times out. When set to `TRUE`, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to `FALSE` or the default setting of `FALSE` is used, one of the following happens: * If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer. * If response headers have been delivered, then the HTTP stream to the downstream client is reset. */
  failOpen?: boolean;
  /** Optional. Configures the send mode for response processing. If unspecified, the default value `STREAMED` is used. The field can only be set if `supported_events` includes `RESPONSE_BODY`. If `supported_events` includes `RESPONSE_BODY`, but `response_body_send_mode` is unset, the default value `STREAMED` is used. When this field is set to `FULL_DUPLEX_STREAMED`, `supported_events` must include both `RESPONSE_BODY` and `RESPONSE_TRAILERS`. This field can be set only for `LbTrafficExtension` resources, and only when the `service` field of the extension points to a `BackendService`. */
  responseBodySendMode?:
    | "BODY_SEND_MODE_UNSPECIFIED"
    | "BODY_SEND_MODE_STREAMED"
    | "BODY_SEND_MODE_FULL_DUPLEX_STREAMED"
    | (string & {});
  /** Optional. When set to `true`, the calls to the extension backend are performed asynchronously, without pausing the processing of the ongoing request. In this mode, only `STREAMED` (default) body processing is supported. Responses, if any, are ignored. Supported by regional `LbTrafficExtension` and `LbRouteExtension` resources. */
  observabilityMode?: boolean;
  /** Optional. The name for this extension. The name is logged as part of the HTTP request logs. The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first character must be a letter and the last a letter or a number. This field is required except for AuthzExtension. */
  name?: string;
  /** Optional. The metadata provided here is included as part of the `metadata_context` (of type `google.protobuf.Struct`) in the `ProcessingRequest` message sent to the extension server. For `AuthzExtension` resources, the metadata is available under the namespace `com.google.authz_extension.`. For other types of extensions, the metadata is available under the namespace `com.google....`. For example: `com.google.lb_traffic_extension.lbtrafficextension1.chain1.ext1`. The following variables are supported in the metadata: `{forwarding_rule_id}` - substituted with the forwarding rule's fully qualified resource name. This field must not be set for plugin extensions. Setting it results in a validation error. You can set metadata at either the resource level or the extension level. The extension level metadata is recommended because you can pass a different set of metadata through each extension to the backend. This field is subject to following limitations: * The total size of the metadata must be less than 1KiB. * The total number of keys in the metadata must be less than 16. * The length of each key must be less than 64 characters. * The length of each value must be less than 1024 characters. * All values must be strings. */
  metadata?: Record<string, unknown>;
  /** Optional. Specifies the timeout for each individual message on the stream. The timeout must be between `10`-`10000` milliseconds. Required for callout extensions. This field is not supported for plugin extensions. Setting it results in a validation error. */
  timeout?: string;
  /** Optional. Configures the send mode for request body processing. The field can only be set if `supported_events` includes `REQUEST_BODY`. If `supported_events` includes `REQUEST_BODY`, but `request_body_send_mode` is unset, the default value `STREAMED` is used. When this field is set to `FULL_DUPLEX_STREAMED`, `supported_events` must include both `REQUEST_BODY` and `REQUEST_TRAILERS`. This field can be set only for `LbTrafficExtension` and `LbRouteExtension` resources, and only when the `service` field of the extension points to a `BackendService`. Only `FULL_DUPLEX_STREAMED` mode is supported for `LbRouteExtension` resources. */
  requestBodySendMode?:
    | "BODY_SEND_MODE_UNSPECIFIED"
    | "BODY_SEND_MODE_STREAMED"
    | "BODY_SEND_MODE_FULL_DUPLEX_STREAMED"
    | (string & {});
  /** Optional. A set of events during request or response processing for which this extension is called. For the `LbTrafficExtension` resource, this field is required. For the `LbRouteExtension` resource, this field is optional. If unspecified, `REQUEST_HEADERS` event is assumed as supported. For the `LbEdgeExtension` resource, this field is required and must only contain `REQUEST_HEADERS` event. For the `AuthzExtension` resource, this field is optional. `REQUEST_HEADERS` is the only supported event. If unspecified, `REQUEST_HEADERS` event is assumed as supported. */
  supportedEvents?: ReadonlyArray<
    | "EVENT_TYPE_UNSPECIFIED"
    | "REQUEST_HEADERS"
    | "REQUEST_BODY"
    | "RESPONSE_HEADERS"
    | "RESPONSE_BODY"
    | "REQUEST_TRAILERS"
    | "RESPONSE_TRAILERS"
    | (string & {})
  >;
}

export const ExtensionChainExtension: Schema.Schema<ExtensionChainExtension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forwardAttributes: Schema.optional(Schema.Array(Schema.String)),
    service: Schema.optional(Schema.String),
    authority: Schema.optional(Schema.String),
    forwardHeaders: Schema.optional(Schema.Array(Schema.String)),
    failOpen: Schema.optional(Schema.Boolean),
    responseBodySendMode: Schema.optional(Schema.String),
    observabilityMode: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    timeout: Schema.optional(Schema.String),
    requestBodySendMode: Schema.optional(Schema.String),
    supportedEvents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ExtensionChainExtension" });

export interface GatewayRouteView {
  /** Output only. The resource id for the route. */
  routeId?: string;
  /** Output only. Type of the route: HttpRoute,GrpcRoute,TcpRoute, or TlsRoute */
  routeType?: string;
  /** Output only. Identifier. Full path name of the GatewayRouteView resource. Format: projects/{project_number}/locations/{location}/gateways/{gateway}/routeViews/{route_view} */
  name?: string;
  /** Output only. Project number where the route exists. */
  routeProjectNumber?: string;
  /** Output only. Location where the route exists. */
  routeLocation?: string;
}

export const GatewayRouteView: Schema.Schema<GatewayRouteView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    routeId: Schema.optional(Schema.String),
    routeType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    routeProjectNumber: Schema.optional(Schema.String),
    routeLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GatewayRouteView" });

export interface ListGatewayRouteViewsResponse {
  /** List of GatewayRouteView resources. */
  gatewayRouteViews?: ReadonlyArray<GatewayRouteView>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Unreachable resources. Populated when the request attempts to list all resources across all supported locations, while some locations are temporarily unavailable. */
  unreachable?: ReadonlyArray<string>;
}

export const ListGatewayRouteViewsResponse: Schema.Schema<ListGatewayRouteViewsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gatewayRouteViews: Schema.optional(Schema.Array(GatewayRouteView)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListGatewayRouteViewsResponse" });

export interface GrpcRouteMethodMatch {
  /** Required. Name of the method to match against. If unspecified, will match all methods. */
  grpcMethod?: string;
  /** Required. Name of the service to match against. If unspecified, will match all services. */
  grpcService?: string;
  /** Optional. Specifies that matches are case sensitive. The default value is true. case_sensitive must not be used with a type of REGULAR_EXPRESSION. */
  caseSensitive?: boolean;
  /** Optional. Specifies how to match against the name. If not specified, a default value of "EXACT" is used. */
  type?: "TYPE_UNSPECIFIED" | "EXACT" | "REGULAR_EXPRESSION" | (string & {});
}

export const GrpcRouteMethodMatch: Schema.Schema<GrpcRouteMethodMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    grpcMethod: Schema.optional(Schema.String),
    grpcService: Schema.optional(Schema.String),
    caseSensitive: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrpcRouteMethodMatch" });

export interface GrpcRouteHeaderMatch {
  /** Required. The key of the header. */
  key?: string;
  /** Required. The value of the header. */
  value?: string;
  /** Optional. Specifies how to match against the value of the header. If not specified, a default value of EXACT is used. */
  type?: "TYPE_UNSPECIFIED" | "EXACT" | "REGULAR_EXPRESSION" | (string & {});
}

export const GrpcRouteHeaderMatch: Schema.Schema<GrpcRouteHeaderMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrpcRouteHeaderMatch" });

export interface GrpcRouteRouteMatch {
  /** Optional. A gRPC method to match against. If this field is empty or omitted, will match all methods. */
  method?: GrpcRouteMethodMatch;
  /** Optional. Specifies a collection of headers to match. */
  headers?: ReadonlyArray<GrpcRouteHeaderMatch>;
}

export const GrpcRouteRouteMatch: Schema.Schema<GrpcRouteRouteMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.optional(GrpcRouteMethodMatch),
    headers: Schema.optional(Schema.Array(GrpcRouteHeaderMatch)),
  }).annotate({ identifier: "GrpcRouteRouteMatch" });

export interface GrpcRouteStatefulSessionAffinityPolicy {
  /** Required. The cookie TTL value for the Set-Cookie header generated by the data plane. The lifetime of the cookie may be set to a value from 0 to 86400 seconds (24 hours) inclusive. Set this to 0s to use a session cookie and disable cookie expiration. */
  cookieTtl?: string;
}

export const GrpcRouteStatefulSessionAffinityPolicy: Schema.Schema<GrpcRouteStatefulSessionAffinityPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cookieTtl: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrpcRouteStatefulSessionAffinityPolicy" });

export interface GrpcRouteFaultInjectionPolicyDelay {
  /** Specify a fixed delay before forwarding the request. */
  fixedDelay?: string;
  /** The percentage of traffic on which delay will be injected. The value must be between [0, 100] */
  percentage?: number;
}

export const GrpcRouteFaultInjectionPolicyDelay: Schema.Schema<GrpcRouteFaultInjectionPolicyDelay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fixedDelay: Schema.optional(Schema.String),
    percentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GrpcRouteFaultInjectionPolicyDelay" });

export interface GrpcRouteFaultInjectionPolicyAbort {
  /** The HTTP status code used to abort the request. The value must be between 200 and 599 inclusive. */
  httpStatus?: number;
  /** The percentage of traffic which will be aborted. The value must be between [0, 100] */
  percentage?: number;
}

export const GrpcRouteFaultInjectionPolicyAbort: Schema.Schema<GrpcRouteFaultInjectionPolicyAbort> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    httpStatus: Schema.optional(Schema.Number),
    percentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GrpcRouteFaultInjectionPolicyAbort" });

export interface GrpcRouteFaultInjectionPolicy {
  /** The specification for injecting delay to client requests. */
  delay?: GrpcRouteFaultInjectionPolicyDelay;
  /** The specification for aborting to client requests. */
  abort?: GrpcRouteFaultInjectionPolicyAbort;
}

export const GrpcRouteFaultInjectionPolicy: Schema.Schema<GrpcRouteFaultInjectionPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delay: Schema.optional(GrpcRouteFaultInjectionPolicyDelay),
    abort: Schema.optional(GrpcRouteFaultInjectionPolicyAbort),
  }).annotate({ identifier: "GrpcRouteFaultInjectionPolicy" });

export interface GrpcRouteRetryPolicy {
  /** Specifies the allowed number of retries. This number must be > 0. If not specified, default to 1. */
  numRetries?: number;
  /** - connect-failure: Router will retry on failures connecting to Backend Services, for example due to connection timeouts. - refused-stream: Router will retry if the backend service resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry. - cancelled: Router will retry if the gRPC status code in the response header is set to cancelled - deadline-exceeded: Router will retry if the gRPC status code in the response header is set to deadline-exceeded - resource-exhausted: Router will retry if the gRPC status code in the response header is set to resource-exhausted - unavailable: Router will retry if the gRPC status code in the response header is set to unavailable */
  retryConditions?: ReadonlyArray<string>;
}

export const GrpcRouteRetryPolicy: Schema.Schema<GrpcRouteRetryPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numRetries: Schema.optional(Schema.Number),
    retryConditions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GrpcRouteRetryPolicy" });

export interface GrpcRouteRouteAction {
  /** Optional. Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries. */
  timeout?: string;
  /** Optional. Specifies cookie-based stateful session affinity. */
  statefulSessionAffinity?: GrpcRouteStatefulSessionAffinityPolicy;
  /** Optional. The destination services to which traffic should be forwarded. If multiple destinations are specified, traffic will be split between Backend Service(s) according to the weight field of these destinations. */
  destinations?: ReadonlyArray<GrpcRouteDestination>;
  /** Optional. The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests. timeout and retry_policy will be ignored by clients that are configured with a fault_injection_policy */
  faultInjectionPolicy?: GrpcRouteFaultInjectionPolicy;
  /** Optional. Specifies the retry policy associated with this route. */
  retryPolicy?: GrpcRouteRetryPolicy;
  /** Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled. */
  idleTimeout?: string;
}

export const GrpcRouteRouteAction: Schema.Schema<GrpcRouteRouteAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeout: Schema.optional(Schema.String),
    statefulSessionAffinity: Schema.optional(
      GrpcRouteStatefulSessionAffinityPolicy,
    ),
    destinations: Schema.optional(Schema.Array(GrpcRouteDestination)),
    faultInjectionPolicy: Schema.optional(GrpcRouteFaultInjectionPolicy),
    retryPolicy: Schema.optional(GrpcRouteRetryPolicy),
    idleTimeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrpcRouteRouteAction" });

export interface GrpcRouteRouteRule {
  /** Optional. Matches define conditions used for matching the rule against incoming gRPC requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied. If no matches field is specified, this rule will unconditionally match traffic. */
  matches?: ReadonlyArray<GrpcRouteRouteMatch>;
  /** Required. A detailed rule defining how to route traffic. This field is required. */
  action?: GrpcRouteRouteAction;
}

export const GrpcRouteRouteRule: Schema.Schema<GrpcRouteRouteRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matches: Schema.optional(Schema.Array(GrpcRouteRouteMatch)),
    action: Schema.optional(GrpcRouteRouteAction),
  }).annotate({ identifier: "GrpcRouteRouteRule" });

export interface GrpcRoute {
  /** Output only. Server-defined URL of this resource */
  selfLink?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of label tags associated with the GrpcRoute resource. */
  labels?: Record<string, string>;
  /** Required. A list of detailed rules defining how to route traffic. Within a single GrpcRoute, the GrpcRoute.RouteAction associated with the first matching GrpcRoute.RouteRule will be executed. At least one rule must be supplied. */
  rules?: ReadonlyArray<GrpcRouteRouteRule>;
  /** Optional. Meshes defines a list of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/* /locations/* /meshes/` */
  meshes?: ReadonlyArray<string>;
  /** Optional. Gateways defines a list of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/* /locations/* /gateways/` */
  gateways?: ReadonlyArray<string>;
  /** Optional. A free-text description of the resource. Max length 1024 characters. */
  description?: string;
  /** Required. Service hostnames with an optional port for which this route describes traffic. Format: [:] Hostname is the fully qualified domain name of a network host. This matches the RFC 1123 definition of a hostname with 2 notable exceptions: - IPs are not allowed. - A hostname may be prefixed with a wildcard label (`*.`). The wildcard label must appear by itself as the first label. Hostname can be "precise" which is a domain name without the terminating dot of a network host (e.g. `foo.example.com`) or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. `*.example.com`). Note that as per RFC1035 and RFC1123, a label must consist of lower case alphanumeric characters or '-', and must start and end with an alphanumeric character. No other punctuation is allowed. The routes associated with a Mesh or Gateway must have unique hostnames. If you attempt to attach multiple routes with conflicting hostnames, the configuration will be rejected. For example, while it is acceptable for routes for the hostnames `*.foo.bar.com` and `*.bar.com` to be associated with the same route, it is not possible to associate two routes both with `*.bar.com` or both with `bar.com`. If a port is specified, then gRPC clients must use the channel URI with the port to match this rule (i.e. "xds:///service:123"), otherwise they must supply the URI without a port (i.e. "xds:///service"). */
  hostnames?: ReadonlyArray<string>;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Identifier. Name of the GrpcRoute resource. It matches pattern `projects/* /locations/* /grpcRoutes/` */
  name?: string;
}

export const GrpcRoute: Schema.Schema<GrpcRoute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selfLink: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    rules: Schema.optional(Schema.Array(GrpcRouteRouteRule)),
    meshes: Schema.optional(Schema.Array(Schema.String)),
    gateways: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    hostnames: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrpcRoute" });

export interface ListGrpcRoutesResponse {
  /** List of GrpcRoute resources. */
  grpcRoutes?: ReadonlyArray<GrpcRoute>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Unreachable resources. Populated when the request opts into return_partial_success and reading across collections e.g. when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListGrpcRoutesResponse: Schema.Schema<ListGrpcRoutesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    grpcRoutes: Schema.optional(Schema.Array(GrpcRoute)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListGrpcRoutesResponse" });

export interface Mesh {
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Identifier. Name of the Mesh resource. It matches pattern `projects/* /locations/* /meshes/`. */
  name?: string;
  /** Optional. Determines if envoy will insert internal debug headers into upstream requests. Other Envoy headers may still be injected. By default, envoy will not insert any debug headers. */
  envoyHeaders?:
    | "ENVOY_HEADERS_UNSPECIFIED"
    | "NONE"
    | "DEBUG_HEADERS"
    | (string & {});
  /** Optional. A free-text description of the resource. Max length 1024 characters. */
  description?: string;
  /** Optional. If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to be redirected to this port regardless of its actual ip:port destination. If unset, a port '15001' is used as the interception port. This is applicable only for sidecar proxy deployments. */
  interceptionPort?: number;
  /** Output only. Server-defined URL of this resource */
  selfLink?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of label tags associated with the Mesh resource. */
  labels?: Record<string, string>;
}

export const Mesh: Schema.Schema<Mesh> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    envoyHeaders: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    interceptionPort: Schema.optional(Schema.Number),
    selfLink: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Mesh" });

export interface ListMeshesResponse {
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Unreachable resources. Populated when the request opts into `return_partial_success` and reading across collections e.g. when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** List of Mesh resources. */
  meshes?: ReadonlyArray<Mesh>;
}

export const ListMeshesResponse: Schema.Schema<ListMeshesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    meshes: Schema.optional(Schema.Array(Mesh)),
  }).annotate({ identifier: "ListMeshesResponse" });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Location" });

export interface Expr {
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface EndpointMatcherMetadataLabelMatcherMetadataLabels {
  /** Required. Label value presented as value corresponding to the above key, in xDS Node Metadata. */
  labelValue?: string;
  /** Required. Label name presented as key in xDS Node Metadata. */
  labelName?: string;
}

export const EndpointMatcherMetadataLabelMatcherMetadataLabels: Schema.Schema<EndpointMatcherMetadataLabelMatcherMetadataLabels> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelValue: Schema.optional(Schema.String),
    labelName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EndpointMatcherMetadataLabelMatcherMetadataLabels",
  });

export interface Gateway {
  /** Optional. A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled. */
  serverTlsPolicy?: string;
  /** Optional. A free-text description of the resource. Max length 1024 characters. */
  description?: string;
  /** Optional. Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic. When no address is provided, an IP from the subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6. */
  addresses?: ReadonlyArray<string>;
  /** Identifier. Name of the Gateway resource. It matches pattern `projects/* /locations/* /gateways/`. */
  name?: string;
  /** Optional. Determines if envoy will insert internal debug headers into upstream requests. Other Envoy headers may still be injected. By default, envoy will not insert any debug headers. */
  envoyHeaders?:
    | "ENVOY_HEADERS_UNSPECIFIED"
    | "NONE"
    | "DEBUG_HEADERS"
    | (string & {});
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Output only. Server-defined URL of this resource */
  selfLink?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of label tags associated with the Gateway resource. */
  labels?: Record<string, string>;
  /** Optional. The routing mode of the Gateway. This field is configurable only for gateways of type SECURE_WEB_GATEWAY. This field is required for gateways of type SECURE_WEB_GATEWAY. */
  routingMode?:
    | "EXPLICIT_ROUTING_MODE"
    | "NEXT_HOP_ROUTING_MODE"
    | (string & {});
  /** Optional. If true, the Gateway will listen on all ports. This is mutually exclusive with the `ports` field. This field only applies to gateways of type 'SECURE_WEB_GATEWAY'. */
  allPorts?: boolean;
  /** Optional. The relative resource name identifying the VPC network that is using this configuration. For example: `projects/* /global/networks/network-1`. Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'. */
  network?: string;
  /** Optional. The IP Version that will be used by this gateway. Valid options are IPV4 or IPV6. Default is IPV4. */
  ipVersion?: "IP_VERSION_UNSPECIFIED" | "IPV4" | "IPV6" | (string & {});
  /** Optional. If true, the gateway will allow traffic from clients outside of the region where the gateway is located. This field is configurable only for gateways of type SECURE_WEB_GATEWAY. */
  allowGlobalAccess?: boolean;
  /** Optional. A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections. For example: `projects/* /locations/* /gatewaySecurityPolicies/swg-policy`. This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'. */
  gatewaySecurityPolicy?: string;
  /** Optional. The relative resource name identifying the subnetwork in which this SWG is allocated. For example: `projects/* /regions/us-central1/subnetworks/network-1` Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY". */
  subnetwork?: string;
  /** Required. One or more port numbers (1-65535), on which the Gateway will receive traffic. The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are limited to 5 ports. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6 and support multiple ports. */
  ports?: ReadonlyArray<number>;
  /** Optional. Scope determines how configuration across multiple Gateway instances are merged. The configuration for multiple Gateway instances with the same scope will be merged as presented as a single configuration to the proxy/load balancer. Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens. */
  scope?: string;
  /** Optional. A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection. This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'. */
  certificateUrls?: ReadonlyArray<string>;
  /** Immutable. The type of the customer managed gateway. This field is required. If unspecified, an error is returned. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "OPEN_MESH"
    | "SECURE_WEB_GATEWAY"
    | (string & {});
}

export const Gateway: Schema.Schema<Gateway> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serverTlsPolicy: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    addresses: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    envoyHeaders: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    routingMode: Schema.optional(Schema.String),
    allPorts: Schema.optional(Schema.Boolean),
    network: Schema.optional(Schema.String),
    ipVersion: Schema.optional(Schema.String),
    allowGlobalAccess: Schema.optional(Schema.Boolean),
    gatewaySecurityPolicy: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    ports: Schema.optional(Schema.Array(Schema.Number)),
    scope: Schema.optional(Schema.String),
    certificateUrls: Schema.optional(Schema.Array(Schema.String)),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Gateway" });

export interface ListGatewaysResponse {
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** List of Gateway resources. */
  gateways?: ReadonlyArray<Gateway>;
}

export const ListGatewaysResponse: Schema.Schema<ListGatewaysResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    gateways: Schema.optional(Schema.Array(Gateway)),
  }).annotate({ identifier: "ListGatewaysResponse" });

export interface EndpointMatcherMetadataLabelMatcher {
  /** The list of label value pairs that must match labels in the provided metadata based on filterMatchCriteria This list can have at most 64 entries. The list can be empty if the match criteria is MATCH_ANY, to specify a wildcard match (i.e this matches any client). */
  metadataLabels?: ReadonlyArray<EndpointMatcherMetadataLabelMatcherMetadataLabels>;
  /** Specifies how matching should be done. Supported values are: MATCH_ANY: At least one of the Labels specified in the matcher should match the metadata presented by xDS client. MATCH_ALL: The metadata presented by the xDS client should contain all of the labels specified here. The selection is determined based on the best match. For example, suppose there are three EndpointPolicy resources P1, P2 and P3 and if P1 has a the matcher as MATCH_ANY , P2 has MATCH_ALL , and P3 has MATCH_ALL . If a client with label connects, the config from P1 will be selected. If a client with label connects, the config from P2 will be selected. If a client with label connects, the config from P3 will be selected. If there is more than one best match, (for example, if a config P4 with selector exists and if a client with label connects), pick up the one with older creation time. */
  metadataLabelMatchCriteria?:
    | "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED"
    | "MATCH_ANY"
    | "MATCH_ALL"
    | (string & {});
}

export const EndpointMatcherMetadataLabelMatcher: Schema.Schema<EndpointMatcherMetadataLabelMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadataLabels: Schema.optional(
      Schema.Array(EndpointMatcherMetadataLabelMatcherMetadataLabels),
    ),
    metadataLabelMatchCriteria: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndpointMatcherMetadataLabelMatcher" });

export interface EndpointMatcher {
  /** The matcher is based on node metadata presented by xDS clients. */
  metadataLabelMatcher?: EndpointMatcherMetadataLabelMatcher;
}

export const EndpointMatcher: Schema.Schema<EndpointMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadataLabelMatcher: Schema.optional(EndpointMatcherMetadataLabelMatcher),
  }).annotate({ identifier: "EndpointMatcher" });

export interface WasmPluginUsedBy {
  /** Output only. Full name of the resource https://google.aip.dev/122#full-resource-names, for example `//networkservices.googleapis.com/projects/{project}/locations/{location}/lbRouteExtensions/{extension}` */
  name?: string;
}

export const WasmPluginUsedBy: Schema.Schema<WasmPluginUsedBy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "WasmPluginUsedBy" });

export interface TlsRouteRouteMatch {
  /** Optional. SNI (server name indicator) to match against. SNI will be matched against all wildcard domains, i.e. `www.example.com` will be first matched against `www.example.com`, then `*.example.com`, then `*.com.` Partial wildcards are not supported, and values like *w.example.com are invalid. At least one of sni_host and alpn is required. Up to 100 sni hosts across all matches can be set. */
  sniHost?: ReadonlyArray<string>;
  /** Optional. ALPN (Application-Layer Protocol Negotiation) to match against. Examples: "http/1.1", "h2". At least one of sni_host and alpn is required. Up to 5 alpns across all matches can be set. */
  alpn?: ReadonlyArray<string>;
}

export const TlsRouteRouteMatch: Schema.Schema<TlsRouteRouteMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sniHost: Schema.optional(Schema.Array(Schema.String)),
    alpn: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TlsRouteRouteMatch" });

export interface TlsRouteRouteDestination {
  /** Required. The URL of a BackendService to route traffic to. */
  serviceName?: string;
  /** Optional. Specifies the proportion of requests forwarded to the backend referenced by the service_name field. This is computed as: - weight/Sum(weights in destinations) Weights in all destinations does not need to sum up to 100. */
  weight?: number;
}

export const TlsRouteRouteDestination: Schema.Schema<TlsRouteRouteDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.optional(Schema.String),
    weight: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TlsRouteRouteDestination" });

export interface TlsRouteRouteAction {
  /** Required. The destination services to which traffic should be forwarded. At least one destination service is required. */
  destinations?: ReadonlyArray<TlsRouteRouteDestination>;
  /** Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled. */
  idleTimeout?: string;
}

export const TlsRouteRouteAction: Schema.Schema<TlsRouteRouteAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinations: Schema.optional(Schema.Array(TlsRouteRouteDestination)),
    idleTimeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "TlsRouteRouteAction" });

export interface TlsRouteRouteRule {
  /** Required. RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. Atleast one RouteMatch must be supplied. */
  matches?: ReadonlyArray<TlsRouteRouteMatch>;
  /** Required. The detailed rule defining how to route matched traffic. */
  action?: TlsRouteRouteAction;
}

export const TlsRouteRouteRule: Schema.Schema<TlsRouteRouteRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matches: Schema.optional(Schema.Array(TlsRouteRouteMatch)),
    action: Schema.optional(TlsRouteRouteAction),
  }).annotate({ identifier: "TlsRouteRouteRule" });

export interface TlsRoute {
  /** Optional. A free-text description of the resource. Max length 1024 characters. */
  description?: string;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Identifier. Name of the TlsRoute resource. It matches pattern `projects/* /locations/* /tlsRoutes/tls_route_name>`. */
  name?: string;
  /** Optional. TargetProxies defines a list of TargetTcpProxies this TlsRoute is attached to, as one of the routing rules to route the requests served by the TargetTcpProxy. Each TargetTcpProxy reference should match the pattern: `projects/* /locations/* /targetTcpProxies/` */
  targetProxies?: ReadonlyArray<string>;
  /** Output only. Server-defined URL of this resource */
  selfLink?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of label tags associated with the TlsRoute resource. */
  labels?: Record<string, string>;
  /** Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/* /locations/* /meshes/` The attached Mesh should be of a type SIDECAR */
  meshes?: ReadonlyArray<string>;
  /** Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/* /locations/* /gateways/` */
  gateways?: ReadonlyArray<string>;
  /** Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match. */
  rules?: ReadonlyArray<TlsRouteRouteRule>;
}

export const TlsRoute: Schema.Schema<TlsRoute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    targetProxies: Schema.optional(Schema.Array(Schema.String)),
    selfLink: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    meshes: Schema.optional(Schema.Array(Schema.String)),
    gateways: Schema.optional(Schema.Array(Schema.String)),
    rules: Schema.optional(Schema.Array(TlsRouteRouteRule)),
  }).annotate({ identifier: "TlsRoute" });

export interface ListTlsRoutesResponse {
  /** List of TlsRoute resources. */
  tlsRoutes?: ReadonlyArray<TlsRoute>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Unreachable resources. Populated when the request opts into return_partial_success and reading across collections e.g. when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListTlsRoutesResponse: Schema.Schema<ListTlsRoutesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tlsRoutes: Schema.optional(Schema.Array(TlsRoute)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListTlsRoutesResponse" });

export interface ExtensionChainMatchCondition {
  /** Required. A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. For more information, see [CEL matcher language reference](https://cloud.google.com/service-extensions/docs/cel-matcher-language-reference). */
  celExpression?: string;
}

export const ExtensionChainMatchCondition: Schema.Schema<ExtensionChainMatchCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    celExpression: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExtensionChainMatchCondition" });

export interface ExtensionChain {
  /** Required. Conditions under which this chain is invoked for a request. */
  matchCondition?: ExtensionChainMatchCondition;
  /** Required. A set of extensions to execute for the matching request. At least one extension is required. Up to 3 extensions can be defined for each extension chain for `LbTrafficExtension` resource. `LbRouteExtension` and `LbEdgeExtension` chains are limited to 1 extension per extension chain. */
  extensions?: ReadonlyArray<ExtensionChainExtension>;
  /** Required. The name for this extension chain. The name is logged as part of the HTTP request logs. The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first character must be a letter and the last a letter or a number. */
  name?: string;
}

export const ExtensionChain: Schema.Schema<ExtensionChain> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchCondition: Schema.optional(ExtensionChainMatchCondition),
    extensions: Schema.optional(Schema.Array(ExtensionChainExtension)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExtensionChain" });

export interface LbTrafficExtension {
  /** Optional. A list of references to the forwarding rules to which this service extension is attached. At least one forwarding rule is required. Only one `LbTrafficExtension` resource can be associated with a forwarding rule. */
  forwardingRules?: ReadonlyArray<string>;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Required. All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. Supported values: `INTERNAL_MANAGED` and `EXTERNAL_MANAGED`. For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). */
  loadBalancingScheme?:
    | "LOAD_BALANCING_SCHEME_UNSPECIFIED"
    | "INTERNAL_MANAGED"
    | "EXTERNAL_MANAGED"
    | (string & {});
  /** Required. Identifier. Name of the `LbTrafficExtension` resource in the following format: `projects/{project}/locations/{location}/lbTrafficExtensions/{lb_traffic_extension}`. */
  name?: string;
  /** Optional. A human-readable description of the resource. */
  description?: string;
  /** Optional. The metadata provided here is included as part of the `metadata_context` (of type `google.protobuf.Struct`) in the `ProcessingRequest` message sent to the extension server. The metadata applies to all extensions in all extensions chains in this resource. The metadata is available under the key `com.google.lb_traffic_extension.`. The following variables are supported in the metadata: `{forwarding_rule_id}` - substituted with the forwarding rule's fully qualified resource name. This field must not be set if at least one of the extension chains contains plugin extensions. Setting it results in a validation error. You can set metadata at either the resource level or the extension level. The extension level metadata is recommended because you can pass a different set of metadata through each extension to the backend. */
  metadata?: Record<string, unknown>;
  /** Required. A set of ordered extension chains that contain the match conditions and extensions to execute. Match conditions for each extension chain are evaluated in sequence for a given request. The first extension chain that has a condition that matches the request is executed. Any subsequent extension chains do not execute. Limited to 5 extension chains per resource. */
  extensionChains?: ReadonlyArray<ExtensionChain>;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of labels associated with the `LbTrafficExtension` resource. The format must comply with [the requirements for labels](https://cloud.google.com/compute/docs/labeling-resources#requirements) for Google Cloud resources. */
  labels?: Record<string, string>;
}

export const LbTrafficExtension: Schema.Schema<LbTrafficExtension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forwardingRules: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
    loadBalancingScheme: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    extensionChains: Schema.optional(Schema.Array(ExtensionChain)),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "LbTrafficExtension" });

export interface ListLbTrafficExtensionsResponse {
  /** The list of `LbTrafficExtension` resources. */
  lbTrafficExtensions?: ReadonlyArray<LbTrafficExtension>;
  /** A token identifying a page of results that the server returns. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListLbTrafficExtensionsResponse: Schema.Schema<ListLbTrafficExtensionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lbTrafficExtensions: Schema.optional(Schema.Array(LbTrafficExtension)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListLbTrafficExtensionsResponse" });

export interface WasmPluginLogConfig {
  /** Non-empty default. Configures the sampling rate of activity logs, where `1.0` means all logged activity is reported and `0.0` means no activity is reported. A floating point value between `0.0` and `1.0` indicates that a percentage of log messages is stored. The default value when logging is enabled is `1.0`. The value of the field must be between `0` and `1` (inclusive). This field can be specified only if logging is enabled for this plugin. */
  sampleRate?: number;
  /** Non-empty default. Specifies the lowest level of the plugin logs that are exported to Cloud Logging. This setting relates to the logs generated by using logging statements in your Wasm code. This field is can be set only if logging is enabled for the plugin. If the field is not provided when logging is enabled, it is set to `INFO` by default. */
  minLogLevel?:
    | "LOG_LEVEL_UNSPECIFIED"
    | "TRACE"
    | "DEBUG"
    | "INFO"
    | "WARN"
    | "ERROR"
    | "CRITICAL"
    | (string & {});
  /** Optional. Specifies whether to enable logging for activity by this plugin. Defaults to `false`. */
  enable?: boolean;
}

export const WasmPluginLogConfig: Schema.Schema<WasmPluginLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleRate: Schema.optional(Schema.Number),
    minLogLevel: Schema.optional(Schema.String),
    enable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "WasmPluginLogConfig" });

export interface WasmPluginVersionDetails {
  /** Configuration for the plugin. The configuration is provided to the plugin at runtime through the `ON_CONFIGURE` callback. When a new `WasmPluginVersion` version is created, the digest of the contents is saved in the `plugin_config_digest` field. */
  pluginConfigData?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of labels associated with the `WasmPluginVersion` resource. */
  labels?: Record<string, string>;
  /** URI of the plugin configuration stored in the Artifact Registry. The configuration is provided to the plugin at runtime through the `ON_CONFIGURE` callback. The URI can refer to one of the following repository formats: * Container images: the `plugin_config_uri` must point to a container that contains a single file with the name `plugin.config`. When a new `WasmPluginVersion` resource is created, the digest of the image is saved in the `plugin_config_digest` field. When pulling a container image from Artifact Registry, the digest value is used instead of an image tag. * Generic artifacts: the `plugin_config_uri` must be in this format: `projects/{project}/locations/{location}/repositories/{repository}/ genericArtifacts/{package}:{version}`. The specified package and version must contain a file with the name `plugin.config`. When a new `WasmPluginVersion` resource is created, the checksum of the contents of the file is saved in the `plugin_config_digest` field. */
  pluginConfigUri?: string;
  /** Output only. This field holds the digest (usually checksum) value for the plugin image. The value is calculated based on the `image_uri` field. If the `image_uri` field refers to a container image, the digest value is obtained from the container image. If the `image_uri` field refers to a generic artifact, the digest value is calculated based on the contents of the file. */
  imageDigest?: string;
  /** Output only. This field holds the digest (usually checksum) value for the plugin configuration. The value is calculated based on the contents of `plugin_config_data` field or the image defined by the `plugin_config_uri` field. */
  pluginConfigDigest?: string;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Optional. URI of the image containing the Wasm module, stored in Artifact Registry. The URI can refer to one of the following repository formats: * Container images: the `image_uri` must point to a container that contains a single file with the name `plugin.wasm`. When a new `WasmPluginVersion` resource is created, the digest of the image is saved in the `image_digest` field. When pulling a container image from Artifact Registry, the digest value is used instead of an image tag. * Generic artifacts: the `image_uri` must be in this format: `projects/{project}/locations/{location}/repositories/{repository}/ genericArtifacts/{package}:{version}`. The specified package and version must contain a file with the name `plugin.wasm`. When a new `WasmPluginVersion` resource is created, the checksum of the contents of the file is saved in the `image_digest` field. */
  imageUri?: string;
  /** Optional. A human-readable description of the resource. */
  description?: string;
}

export const WasmPluginVersionDetails: Schema.Schema<WasmPluginVersionDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pluginConfigData: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    pluginConfigUri: Schema.optional(Schema.String),
    imageDigest: Schema.optional(Schema.String),
    pluginConfigDigest: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "WasmPluginVersionDetails" });

export interface WasmPlugin {
  /** Optional. The ID of the `WasmPluginVersion` resource that is the currently serving one. The version referred to must be a child of this `WasmPlugin` resource. */
  mainVersionId?: string;
  /** Optional. A human-readable description of the resource. */
  description?: string;
  /** Identifier. Name of the `WasmPlugin` resource in the following format: `projects/{project}/locations/{location}/wasmPlugins/{wasm_plugin}`. */
  name?: string;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Output only. List of all [extensions](https://cloud.google.com/service-extensions/docs/overview) that use this `WasmPlugin` resource. */
  usedBy?: ReadonlyArray<WasmPluginUsedBy>;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of labels associated with the `WasmPlugin` resource. The format must comply with [the following requirements](/compute/docs/labeling-resources#requirements). */
  labels?: Record<string, string>;
  /** Optional. Specifies the logging options for the activity performed by this plugin. If logging is enabled, plugin logs are exported to Cloud Logging. Note that the settings relate to the logs generated by using logging statements in your Wasm code. */
  logConfig?: WasmPluginLogConfig;
  /** Optional. All versions of this `WasmPlugin` resource in the key-value format. The key is the resource ID, and the value is the `VersionDetails` object. Lets you create or update a `WasmPlugin` resource and its versions in a single request. When the `main_version_id` field is not empty, it must point to one of the `VersionDetails` objects in the map. If provided in a `PATCH` request, the new versions replace the previous set. Any version omitted from the `versions` field is removed. Because the `WasmPluginVersion` resource is immutable, if a `WasmPluginVersion` resource with the same name already exists and differs, the request fails. Note: In a `GET` request, this field is populated only if the field `GetWasmPluginRequest.view` is set to `WASM_PLUGIN_VIEW_FULL`. */
  versions?: Record<string, WasmPluginVersionDetails>;
}

export const WasmPlugin: Schema.Schema<WasmPlugin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mainVersionId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    usedBy: Schema.optional(Schema.Array(WasmPluginUsedBy)),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    logConfig: Schema.optional(WasmPluginLogConfig),
    versions: Schema.optional(
      Schema.Record(Schema.String, WasmPluginVersionDetails),
    ),
  }).annotate({ identifier: "WasmPlugin" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface Binding {
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(Expr),
  }).annotate({ identifier: "Binding" });

export interface AuditLogConfig {
  /** The log type that this config enables. */
  logType?:
    | "LOG_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "DATA_WRITE"
    | "DATA_READ"
    | (string & {});
  /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
  exemptedMembers?: ReadonlyArray<string>;
}

export const AuditLogConfig: Schema.Schema<AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logType: Schema.optional(Schema.String),
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AuditLogConfig" });

export interface AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
}

export const AuditConfig: Schema.Schema<AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
  }).annotate({ identifier: "AuditConfig" });

export interface Policy {
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bindings: Schema.optional(Schema.Array(Binding)),
    version: Schema.optional(Schema.Number),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface WasmPluginVersion {
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of labels associated with the `WasmPluginVersion` resource. */
  labels?: Record<string, string>;
  /** URI of the plugin configuration stored in the Artifact Registry. The configuration is provided to the plugin at runtime through the `ON_CONFIGURE` callback. The URI can refer to one of the following repository formats: * Container images: the `plugin_config_uri` must point to a container that contains a single file with the name `plugin.config`. When a new `WasmPluginVersion` resource is created, the digest of the image is saved in the `plugin_config_digest` field. When pulling a container image from Artifact Registry, the digest value is used instead of an image tag. * Generic artifacts: the `plugin_config_uri` must be in this format: `projects/{project}/locations/{location}/repositories/{repository}/ genericArtifacts/{package}:{version}`. The specified package and version must contain a file with the name `plugin.config`. When a new `WasmPluginVersion` resource is created, the checksum of the contents of the file is saved in the `plugin_config_digest` field. */
  pluginConfigUri?: string;
  /** Output only. This field holds the digest (usually checksum) value for the plugin image. The value is calculated based on the `image_uri` field. If the `image_uri` field refers to a container image, the digest value is obtained from the container image. If the `image_uri` field refers to a generic artifact, the digest value is calculated based on the contents of the file. */
  imageDigest?: string;
  /** Configuration for the plugin. The configuration is provided to the plugin at runtime through the `ON_CONFIGURE` callback. When a new `WasmPluginVersion` resource is created, the digest of the contents is saved in the `plugin_config_digest` field. */
  pluginConfigData?: string;
  /** Optional. A human-readable description of the resource. */
  description?: string;
  /** Optional. URI of the image containing the Wasm module, stored in Artifact Registry. The URI can refer to one of the following repository formats: * Container images: the `image_uri` must point to a container that contains a single file with the name `plugin.wasm`. When a new `WasmPluginVersion` resource is created, the digest of the image is saved in the `image_digest` field. When pulling a container image from Artifact Registry, the digest value is used instead of an image tag. * Generic artifacts: the `image_uri` must be in this format: `projects/{project}/locations/{location}/repositories/{repository}/ genericArtifacts/{package}:{version}`. The specified package and version must contain a file with the name `plugin.wasm`. When a new `WasmPluginVersion` resource is created, the checksum of the contents of the file is saved in the `image_digest` field. */
  imageUri?: string;
  /** Output only. This field holds the digest (usually checksum) value for the plugin configuration. The value is calculated based on the contents of `plugin_config_data` field or the image defined by the `plugin_config_uri` field. */
  pluginConfigDigest?: string;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Identifier. Name of the `WasmPluginVersion` resource in the following format: `projects/{project}/locations/{location}/wasmPlugins/{wasm_plugin}/ versions/{wasm_plugin_version}`. */
  name?: string;
}

export const WasmPluginVersion: Schema.Schema<WasmPluginVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    pluginConfigUri: Schema.optional(Schema.String),
    imageDigest: Schema.optional(Schema.String),
    pluginConfigData: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
    pluginConfigDigest: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "WasmPluginVersion" });

export interface ListWasmPluginVersionsResponse {
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Unreachable resources. Populated when the request attempts to list all resources across all supported locations, while some locations are temporarily unavailable. */
  unreachable?: ReadonlyArray<string>;
  /** List of `WasmPluginVersion` resources. */
  wasmPluginVersions?: ReadonlyArray<WasmPluginVersion>;
}

export const ListWasmPluginVersionsResponse: Schema.Schema<ListWasmPluginVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    wasmPluginVersions: Schema.optional(Schema.Array(WasmPluginVersion)),
  }).annotate({ identifier: "ListWasmPluginVersionsResponse" });

export interface OperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    statusMessage: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface TrafficPortSelector {
  /** Optional. A list of ports. Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected. */
  ports?: ReadonlyArray<string>;
}

export const TrafficPortSelector: Schema.Schema<TrafficPortSelector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ports: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TrafficPortSelector" });

export interface EndpointPolicy {
  /** Optional. A free-text description of the resource. Max length 1024 characters. */
  description?: string;
  /** Optional. A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends. If this field is not set, authentication is disabled(open) for this endpoint. */
  serverTlsPolicy?: string;
  /** Optional. Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports. */
  trafficPortSelector?: TrafficPortSelector;
  /** Required. A matcher that selects endpoints to which the policies should be applied. */
  endpointMatcher?: EndpointMatcher;
  /** Optional. This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. Refer to Authorization. If this field is not specified, authorization is disabled(no authz checks) for this endpoint. */
  authorizationPolicy?: string;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Identifier. Name of the EndpointPolicy resource. It matches pattern `projects/{project}/locations/* /endpointPolicies/{endpoint_policy}`. */
  name?: string;
  /** Optional. A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints. More specifically, it is applied to the outgoing traffic from the proxy to the endpoint. This is typically used for sidecar model where the proxy identifies itself as endpoint to the control plane, with the connection between sidecar and endpoint requiring authentication. If this field is not set, authentication is disabled(open). Applicable only when EndpointPolicyType is SIDECAR_PROXY. */
  clientTlsPolicy?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of label tags associated with the EndpointPolicy resource. */
  labels?: Record<string, string>;
  /** Required. The type of endpoint policy. This is primarily used to validate the configuration. */
  type?:
    | "ENDPOINT_POLICY_TYPE_UNSPECIFIED"
    | "SIDECAR_PROXY"
    | "GRPC_SERVER"
    | (string & {});
}

export const EndpointPolicy: Schema.Schema<EndpointPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    serverTlsPolicy: Schema.optional(Schema.String),
    trafficPortSelector: Schema.optional(TrafficPortSelector),
    endpointMatcher: Schema.optional(EndpointMatcher),
    authorizationPolicy: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    clientTlsPolicy: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndpointPolicy" });

export interface ListWasmPluginsResponse {
  /** List of `WasmPlugin` resources. */
  wasmPlugins?: ReadonlyArray<WasmPlugin>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Unreachable resources. Populated when the request attempts to list all resources across all supported locations, while some locations are temporarily unavailable. */
  unreachable?: ReadonlyArray<string>;
}

export const ListWasmPluginsResponse: Schema.Schema<ListWasmPluginsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wasmPlugins: Schema.optional(Schema.Array(WasmPlugin)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListWasmPluginsResponse" });

export interface ServiceLbPolicyAutoCapacityDrain {
  /** Optional. If set to 'True', an unhealthy IG/NEG will be set as drained. - An IG/NEG is considered unhealthy if less than 25% of the instances/endpoints in the IG/NEG are healthy. - This option will never result in draining more than 50% of the configured IGs/NEGs for the Backend Service. */
  enable?: boolean;
}

export const ServiceLbPolicyAutoCapacityDrain: Schema.Schema<ServiceLbPolicyAutoCapacityDrain> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ServiceLbPolicyAutoCapacityDrain" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface TcpRouteRouteMatch {
  /** Required. Specifies the destination port to match against. */
  port?: string;
  /** Required. Must be specified in the CIDR range format. A CIDR range consists of an IP Address and a prefix length to construct the subnet mask. By default, the prefix length is 32 (i.e. matches a single IP address). Only IPV4 addresses are supported. Examples: "10.0.0.1" - matches against this exact IP address. "10.0.0.0/8" - matches against any IP address within the 10.0.0.0 subnet and 255.255.255.0 mask. "0.0.0.0/0" - matches against any IP address'. */
  address?: string;
}

export const TcpRouteRouteMatch: Schema.Schema<TcpRouteRouteMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
  }).annotate({ identifier: "TcpRouteRouteMatch" });

export interface TcpRouteRouteDestination {
  /** Required. The URL of a BackendService to route traffic to. */
  serviceName?: string;
  /** Optional. Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: - weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them. */
  weight?: number;
}

export const TcpRouteRouteDestination: Schema.Schema<TcpRouteRouteDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.optional(Schema.String),
    weight: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TcpRouteRouteDestination" });

export interface TcpRouteRouteAction {
  /** Optional. If true, Router will use the destination IP and port of the original connection as the destination of the request. Default is false. Only one of route destinations or original destination can be set. */
  originalDestination?: boolean;
  /** Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 30 seconds. If set to 0s, the timeout will be disabled. */
  idleTimeout?: string;
  /** Optional. The destination services to which traffic should be forwarded. At least one destination service is required. Only one of route destination or original destination can be set. */
  destinations?: ReadonlyArray<TcpRouteRouteDestination>;
}

export const TcpRouteRouteAction: Schema.Schema<TcpRouteRouteAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originalDestination: Schema.optional(Schema.Boolean),
    idleTimeout: Schema.optional(Schema.String),
    destinations: Schema.optional(Schema.Array(TcpRouteRouteDestination)),
  }).annotate({ identifier: "TcpRouteRouteAction" });

export interface TcpRouteRouteRule {
  /** Optional. RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic. */
  matches?: ReadonlyArray<TcpRouteRouteMatch>;
  /** Required. The detailed rule defining how to route matched traffic. */
  action?: TcpRouteRouteAction;
}

export const TcpRouteRouteRule: Schema.Schema<TcpRouteRouteRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matches: Schema.optional(Schema.Array(TcpRouteRouteMatch)),
    action: Schema.optional(TcpRouteRouteAction),
  }).annotate({ identifier: "TcpRouteRouteRule" });

export interface ListEndpointPoliciesResponse {
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Unreachable resources. Populated when the request opts into return_partial_success and reading across collections e.g. when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** List of EndpointPolicy resources. */
  endpointPolicies?: ReadonlyArray<EndpointPolicy>;
}

export const ListEndpointPoliciesResponse: Schema.Schema<ListEndpointPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    endpointPolicies: Schema.optional(Schema.Array(EndpointPolicy)),
  }).annotate({ identifier: "ListEndpointPoliciesResponse" });

export interface ListHttpRoutesResponse {
  /** List of HttpRoute resources. */
  httpRoutes?: ReadonlyArray<HttpRoute>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Unreachable resources. Populated when the request opts into return_partial_success and reading across collections e.g. when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListHttpRoutesResponse: Schema.Schema<ListHttpRoutesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    httpRoutes: Schema.optional(Schema.Array(HttpRoute)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListHttpRoutesResponse" });

export interface LbRouteExtension {
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of labels associated with the `LbRouteExtension` resource. The format must comply with [the requirements for labels](https://cloud.google.com/compute/docs/labeling-resources#requirements) for Google Cloud resources. */
  labels?: Record<string, string>;
  /** Optional. A human-readable description of the resource. */
  description?: string;
  /** Optional. The metadata provided here is included as part of the `metadata_context` (of type `google.protobuf.Struct`) in the `ProcessingRequest` message sent to the extension server. The metadata applies to all extensions in all extensions chains in this resource. The metadata is available under the key `com.google.lb_route_extension.`. The following variables are supported in the metadata: `{forwarding_rule_id}` - substituted with the forwarding rule's fully qualified resource name. This field must not be set if at least one of the extension chains contains plugin extensions. Setting it results in a validation error. You can set metadata at either the resource level or the extension level. The extension level metadata is recommended because you can pass a different set of metadata through each extension to the backend. */
  metadata?: Record<string, unknown>;
  /** Required. A set of ordered extension chains that contain the match conditions and extensions to execute. Match conditions for each extension chain are evaluated in sequence for a given request. The first extension chain that has a condition that matches the request is executed. Any subsequent extension chains do not execute. Limited to 5 extension chains per resource. */
  extensionChains?: ReadonlyArray<ExtensionChain>;
  /** Required. A list of references to the forwarding rules to which this service extension is attached. At least one forwarding rule is required. Only one `LbRouteExtension` resource can be associated with a forwarding rule. */
  forwardingRules?: ReadonlyArray<string>;
  /** Required. Identifier. Name of the `LbRouteExtension` resource in the following format: `projects/{project}/locations/{location}/lbRouteExtensions/{lb_route_extension}`. */
  name?: string;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Required. All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. Supported values: `INTERNAL_MANAGED`, `EXTERNAL_MANAGED`. For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). */
  loadBalancingScheme?:
    | "LOAD_BALANCING_SCHEME_UNSPECIFIED"
    | "INTERNAL_MANAGED"
    | "EXTERNAL_MANAGED"
    | (string & {});
}

export const LbRouteExtension: Schema.Schema<LbRouteExtension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    extensionChains: Schema.optional(Schema.Array(ExtensionChain)),
    forwardingRules: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    loadBalancingScheme: Schema.optional(Schema.String),
  }).annotate({ identifier: "LbRouteExtension" });

export interface ListLbRouteExtensionsResponse {
  /** The list of `LbRouteExtension` resources. */
  lbRouteExtensions?: ReadonlyArray<LbRouteExtension>;
  /** A token identifying a page of results that the server returns. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListLbRouteExtensionsResponse: Schema.Schema<ListLbRouteExtensionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lbRouteExtensions: Schema.optional(Schema.Array(LbRouteExtension)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListLbRouteExtensionsResponse" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface ServiceLbPolicyIsolationConfig {
  /** Optional. The isolation granularity of the load balancer. */
  isolationGranularity?:
    | "ISOLATION_GRANULARITY_UNSPECIFIED"
    | "REGION"
    | (string & {});
  /** Optional. The isolation mode of the load balancer. */
  isolationMode?:
    | "ISOLATION_MODE_UNSPECIFIED"
    | "NEAREST"
    | "STRICT"
    | (string & {});
}

export const ServiceLbPolicyIsolationConfig: Schema.Schema<ServiceLbPolicyIsolationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isolationGranularity: Schema.optional(Schema.String),
    isolationMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceLbPolicyIsolationConfig" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface TcpRoute {
  /** Optional. A free-text description of the resource. Max length 1024 characters. */
  description?: string;
  /** Identifier. Name of the TcpRoute resource. It matches pattern `projects/* /locations/* /tcpRoutes/tcp_route_name>`. */
  name?: string;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Output only. Server-defined URL of this resource */
  selfLink?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of label tags associated with the TcpRoute resource. */
  labels?: Record<string, string>;
  /** Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match. */
  rules?: ReadonlyArray<TcpRouteRouteRule>;
  /** Optional. Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/* /locations/* /gateways/` */
  gateways?: ReadonlyArray<string>;
  /** Optional. Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/* /locations/* /meshes/` The attached Mesh should be of a type SIDECAR */
  meshes?: ReadonlyArray<string>;
}

export const TcpRoute: Schema.Schema<TcpRoute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    rules: Schema.optional(Schema.Array(TcpRouteRouteRule)),
    gateways: Schema.optional(Schema.Array(Schema.String)),
    meshes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TcpRoute" });

export interface ListTcpRoutesResponse {
  /** List of TcpRoute resources. */
  tcpRoutes?: ReadonlyArray<TcpRoute>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Unreachable resources. Populated when the request opts into return_partial_success and reading across collections e.g. when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListTcpRoutesResponse: Schema.Schema<ListTcpRoutesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tcpRoutes: Schema.optional(Schema.Array(TcpRoute)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListTcpRoutesResponse" });

export interface MeshRouteView {
  /** Output only. Project number where the route exists. */
  routeProjectNumber?: string;
  /** Output only. Location where the route exists. */
  routeLocation?: string;
  /** Output only. Identifier. Full path name of the MeshRouteView resource. Format: projects/{project_number}/locations/{location}/meshes/{mesh}/routeViews/{route_view} */
  name?: string;
  /** Output only. Type of the route: HttpRoute,GrpcRoute,TcpRoute, or TlsRoute */
  routeType?: string;
  /** Output only. The resource id for the route. */
  routeId?: string;
}

export const MeshRouteView: Schema.Schema<MeshRouteView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    routeProjectNumber: Schema.optional(Schema.String),
    routeLocation: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    routeType: Schema.optional(Schema.String),
    routeId: Schema.optional(Schema.String),
  }).annotate({ identifier: "MeshRouteView" });

export interface ServiceLbPolicyFailoverConfig {
  /** Optional. The percentage threshold that a load balancer will begin to send traffic to failover backends. If the percentage of endpoints in a MIG/NEG is smaller than this value, traffic would be sent to failover backends if possible. This field should be set to a value between 1 and 99. The default value is 50 for Global external HTTP(S) load balancer (classic) and Proxyless service mesh, and 70 for others. */
  failoverHealthThreshold?: number;
}

export const ServiceLbPolicyFailoverConfig: Schema.Schema<ServiceLbPolicyFailoverConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failoverHealthThreshold: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ServiceLbPolicyFailoverConfig" });

export interface ServiceLbPolicy {
  /** Output only. The timestamp when this resource was created. */
  createTime?: string;
  /** Optional. Set of label tags associated with the ServiceLbPolicy resource. */
  labels?: Record<string, string>;
  /** Optional. Configuration to provide isolation support for the associated Backend Service. */
  isolationConfig?: ServiceLbPolicyIsolationConfig;
  /** Optional. A free-text description of the resource. Max length 1024 characters. */
  description?: string;
  /** Identifier. Name of the ServiceLbPolicy resource. It matches pattern `projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}`. */
  name?: string;
  /** Optional. The type of load balancing algorithm to be used. The default behavior is WATERFALL_BY_REGION. */
  loadBalancingAlgorithm?:
    | "LOAD_BALANCING_ALGORITHM_UNSPECIFIED"
    | "SPRAY_TO_WORLD"
    | "SPRAY_TO_REGION"
    | "WATERFALL_BY_REGION"
    | "WATERFALL_BY_ZONE"
    | (string & {});
  /** Optional. Configuration related to health based failover. */
  failoverConfig?: ServiceLbPolicyFailoverConfig;
  /** Output only. The timestamp when this resource was last updated. */
  updateTime?: string;
  /** Optional. Configuration to automatically move traffic away for unhealthy IG/NEG for the associated Backend Service. */
  autoCapacityDrain?: ServiceLbPolicyAutoCapacityDrain;
}

export const ServiceLbPolicy: Schema.Schema<ServiceLbPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    isolationConfig: Schema.optional(ServiceLbPolicyIsolationConfig),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    loadBalancingAlgorithm: Schema.optional(Schema.String),
    failoverConfig: Schema.optional(ServiceLbPolicyFailoverConfig),
    updateTime: Schema.optional(Schema.String),
    autoCapacityDrain: Schema.optional(ServiceLbPolicyAutoCapacityDrain),
  }).annotate({ identifier: "ServiceLbPolicy" });

export interface LoggingConfig {
  /** Optional. The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. Logs at severitiy ≥ this value will be sent, unless it is NONE. */
  logSeverity?:
    | "LOG_SEVERITY_UNSPECIFIED"
    | "NONE"
    | "DEBUG"
    | "INFO"
    | "NOTICE"
    | "WARNING"
    | "ERROR"
    | "CRITICAL"
    | "ALERT"
    | "EMERGENCY"
    | (string & {});
}

export const LoggingConfig: Schema.Schema<LoggingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logSeverity: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoggingConfig" });

export interface AuthzExtension {
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of labels associated with the `AuthzExtension` resource. The format must comply with [the requirements for labels](/compute/docs/labeling-resources#requirements) for Google Cloud resources. */
  labels?: Record<string, string>;
  /** Optional. The `:authority` header in the gRPC request sent from Envoy to the extension service. It is required when the `service` field points to a backend service or a wasm plugin. */
  authority?: string;
  /** Required. Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds. */
  timeout?: string;
  /** Optional. A human-readable description of the resource. */
  description?: string;
  /** Required. Identifier. Name of the `AuthzExtension` resource in the following format: `projects/{project}/locations/{location}/authzExtensions/{authz_extension}`. */
  name?: string;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Optional. List of the HTTP headers to forward to the extension (from the client). If omitted, all headers are sent. Each element is a string indicating the header name. */
  forwardHeaders?: ReadonlyArray<string>;
  /** Required. The reference to the service that runs the extension. To configure a callout extension, `service` must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format: `https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/backendServices/{backendService}` or `https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}`. */
  service?: string;
  /** Optional. List of the Envoy attributes to forward to the extension server. The attributes provided here are included as part of the `ProcessingRequest.attributes` field (of type `map`), where the keys are the attribute names. Refer to the [documentation](https://cloud.google.com/service-extensions/docs/cel-matcher-language-reference#attributes) for the names of attributes that can be forwarded. If omitted, no attributes are sent. Each element is a string indicating the attribute name. */
  forwardAttributes?: ReadonlyArray<string>;
  /** Optional. The metadata provided here is included as part of the `metadata_context` (of type `google.protobuf.Struct`) in the `ProcessingRequest` message sent to the extension server. The metadata is available under the namespace `com.google.authz_extension.`. The following variables are supported in the metadata Struct: `{forwarding_rule_id}` - substituted with the forwarding rule's fully qualified resource name. */
  metadata?: Record<string, unknown>;
  /** Optional. All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. Supported values: `INTERNAL_MANAGED`, `EXTERNAL_MANAGED`. Can be omitted for AuthzExtensions that do not reference a backend service. For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). */
  loadBalancingScheme?:
    | "LOAD_BALANCING_SCHEME_UNSPECIFIED"
    | "INTERNAL_MANAGED"
    | "EXTERNAL_MANAGED"
    | (string & {});
  /** Optional. Determines how the proxy behaves if the call to the extension fails or times out. When set to `TRUE`, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to `FALSE` or the default setting of `FALSE` is used, one of the following happens: * If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer. * If response headers have been delivered, then the HTTP stream to the downstream client is reset. */
  failOpen?: boolean;
  /** Optional. The format of communication supported by the callout extension. This field is supported only for regional `AuthzExtension` resources. If not specified, the default value `EXT_PROC_GRPC` is used. Global `AuthzExtension` resources use the `EXT_PROC_GRPC` wire format. */
  wireFormat?:
    | "WIRE_FORMAT_UNSPECIFIED"
    | "EXT_PROC_GRPC"
    | "EXT_AUTHZ_GRPC"
    | (string & {});
}

export const AuthzExtension: Schema.Schema<AuthzExtension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    authority: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    forwardHeaders: Schema.optional(Schema.Array(Schema.String)),
    service: Schema.optional(Schema.String),
    forwardAttributes: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    loadBalancingScheme: Schema.optional(Schema.String),
    failOpen: Schema.optional(Schema.Boolean),
    wireFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthzExtension" });

export interface ListMeshRouteViewsResponse {
  /** List of MeshRouteView resources. */
  meshRouteViews?: ReadonlyArray<MeshRouteView>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Unreachable resources. Populated when the request attempts to list all resources across all supported locations, while some locations are temporarily unavailable. */
  unreachable?: ReadonlyArray<string>;
}

export const ListMeshRouteViewsResponse: Schema.Schema<ListMeshRouteViewsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meshRouteViews: Schema.optional(Schema.Array(MeshRouteView)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListMeshRouteViewsResponse" });

export interface ServiceBinding {
  /** Identifier. Name of the ServiceBinding resource. It matches pattern `projects/* /locations/* /serviceBindings/`. */
  name?: string;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Optional. The full Service Directory Service name of the format `projects/* /locations/* /namespaces/* /services/*`. This field is for Service Directory integration which will be deprecated soon. */
  service?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. The unique identifier of the Service Directory Service against which the ServiceBinding resource is validated. This is populated when the Service Binding resource is used in another resource (like Backend Service). This is of the UUID4 format. This field is for Service Directory integration which will be deprecated soon. */
  serviceId?: string;
  /** Optional. Set of label tags associated with the ServiceBinding resource. */
  labels?: Record<string, string>;
  /** Optional. A free-text description of the resource. Max length 1024 characters. */
  description?: string;
}

export const ServiceBinding: Schema.Schema<ServiceBinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    serviceId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceBinding" });

export interface ListServiceBindingsResponse {
  /** List of ServiceBinding resources. */
  serviceBindings?: ReadonlyArray<ServiceBinding>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Unreachable resources. Populated when the request attempts to list all resources across all supported locations, while some locations are temporarily unavailable. */
  unreachable?: ReadonlyArray<string>;
}

export const ListServiceBindingsResponse: Schema.Schema<ListServiceBindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceBindings: Schema.optional(Schema.Array(ServiceBinding)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListServiceBindingsResponse" });

export interface RetryFilterPerRouteConfig {
  /** The name of the crypto key to use for encrypting event data. */
  cryptoKeyName?: string;
}

export const RetryFilterPerRouteConfig: Schema.Schema<RetryFilterPerRouteConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cryptoKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "RetryFilterPerRouteConfig" });

export interface ListServiceLbPoliciesResponse {
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Unreachable resources. Populated when the request attempts to list all resources across all supported locations, while some locations are temporarily unavailable. */
  unreachable?: ReadonlyArray<string>;
  /** List of ServiceLbPolicy resources. */
  serviceLbPolicies?: ReadonlyArray<ServiceLbPolicy>;
}

export const ListServiceLbPoliciesResponse: Schema.Schema<ListServiceLbPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    serviceLbPolicies: Schema.optional(Schema.Array(ServiceLbPolicy)),
  }).annotate({ identifier: "ListServiceLbPoliciesResponse" });

export interface ListAuthzExtensionsResponse {
  /** The list of `AuthzExtension` resources. */
  authzExtensions?: ReadonlyArray<AuthzExtension>;
  /** A token identifying a page of results that the server returns. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListAuthzExtensionsResponse: Schema.Schema<ListAuthzExtensionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authzExtensions: Schema.optional(Schema.Array(AuthzExtension)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListAuthzExtensionsResponse" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface LbEdgeExtension {
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Required. All forwarding rules referenced by this extension must share the same load balancing scheme. Supported values: `EXTERNAL_MANAGED`. */
  loadBalancingScheme?:
    | "LOAD_BALANCING_SCHEME_UNSPECIFIED"
    | "INTERNAL_MANAGED"
    | "EXTERNAL_MANAGED"
    | (string & {});
  /** Required. Identifier. Name of the `LbEdgeExtension` resource in the following format: `projects/{project}/locations/{location}/lbEdgeExtensions/{lb_edge_extension}`. */
  name?: string;
  /** Required. A list of references to the forwarding rules to which this service extension is attached. At least one forwarding rule is required. Only one `LbEdgeExtension` resource can be associated with a forwarding rule. */
  forwardingRules?: ReadonlyArray<string>;
  /** Required. A set of ordered extension chains that contain the match conditions and extensions to execute. Match conditions for each extension chain are evaluated in sequence for a given request. The first extension chain that has a condition that matches the request is executed. Any subsequent extension chains do not execute. Limited to 5 extension chains per resource. */
  extensionChains?: ReadonlyArray<ExtensionChain>;
  /** Optional. A human-readable description of the resource. */
  description?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of labels associated with the `LbEdgeExtension` resource. The format must comply with [the requirements for labels](https://cloud.google.com/compute/docs/labeling-resources#requirements) for Google Cloud resources. */
  labels?: Record<string, string>;
}

export const LbEdgeExtension: Schema.Schema<LbEdgeExtension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    loadBalancingScheme: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    forwardingRules: Schema.optional(Schema.Array(Schema.String)),
    extensionChains: Schema.optional(Schema.Array(ExtensionChain)),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "LbEdgeExtension" });

export interface ListLbEdgeExtensionsResponse {
  /** The list of `LbEdgeExtension` resources. */
  lbEdgeExtensions?: ReadonlyArray<LbEdgeExtension>;
  /** A token identifying a page of results that the server returns. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListLbEdgeExtensionsResponse: Schema.Schema<ListLbEdgeExtensionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lbEdgeExtensions: Schema.optional(Schema.Array(LbEdgeExtension)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListLbEdgeExtensionsResponse" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface ListProjectsLocationsRequest {
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsLbRouteExtensionsRequest {
  /** Required. The parent resource of the `LbRouteExtension` resource. Must be in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. User-provided ID of the `LbRouteExtension` resource to be created. */
  lbRouteExtensionId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: LbRouteExtension;
}

export const CreateProjectsLocationsLbRouteExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    lbRouteExtensionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("lbRouteExtensionId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(LbRouteExtension).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/lbRouteExtensions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsLbRouteExtensionsRequest>;

export type CreateProjectsLocationsLbRouteExtensionsResponse = Operation;
export const CreateProjectsLocationsLbRouteExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsLbRouteExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new `LbRouteExtension` resource in a given project and location. */
export const createProjectsLocationsLbRouteExtensions: API.OperationMethod<
  CreateProjectsLocationsLbRouteExtensionsRequest,
  CreateProjectsLocationsLbRouteExtensionsResponse,
  CreateProjectsLocationsLbRouteExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsLbRouteExtensionsRequest,
  output: CreateProjectsLocationsLbRouteExtensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsLbRouteExtensionsRequest {
  /** Required. The project and location from which the `LbRouteExtension` resources are listed. These values are specified in the following format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. Hint about how to order the results. */
  orderBy?: string;
  /** Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default. */
  pageSize?: number;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. A token identifying a page of results that the server returns. */
  pageToken?: string;
}

export const ListProjectsLocationsLbRouteExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/lbRouteExtensions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsLbRouteExtensionsRequest>;

export type ListProjectsLocationsLbRouteExtensionsResponse =
  ListLbRouteExtensionsResponse;
export const ListProjectsLocationsLbRouteExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLbRouteExtensionsResponse;

export type ListProjectsLocationsLbRouteExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists `LbRouteExtension` resources in a given project and location. */
export const listProjectsLocationsLbRouteExtensions: API.PaginatedOperationMethod<
  ListProjectsLocationsLbRouteExtensionsRequest,
  ListProjectsLocationsLbRouteExtensionsResponse,
  ListProjectsLocationsLbRouteExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsLbRouteExtensionsRequest,
  output: ListProjectsLocationsLbRouteExtensionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsLbRouteExtensionsRequest {
  /** Required. A name of the `LbRouteExtension` resource to get. Must be in the format `projects/{project}/locations/{location}/lbRouteExtensions/{lb_route_extension}`. */
  name: string;
}

export const GetProjectsLocationsLbRouteExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsLbRouteExtensionsRequest>;

export type GetProjectsLocationsLbRouteExtensionsResponse = LbRouteExtension;
export const GetProjectsLocationsLbRouteExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LbRouteExtension;

export type GetProjectsLocationsLbRouteExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified `LbRouteExtension` resource. */
export const getProjectsLocationsLbRouteExtensions: API.OperationMethod<
  GetProjectsLocationsLbRouteExtensionsRequest,
  GetProjectsLocationsLbRouteExtensionsResponse,
  GetProjectsLocationsLbRouteExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsLbRouteExtensionsRequest,
  output: GetProjectsLocationsLbRouteExtensionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsLbRouteExtensionsRequest {
  /** Optional. Used to specify the fields to be overwritten in the `LbRouteExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Identifier. Name of the `LbRouteExtension` resource in the following format: `projects/{project}/locations/{location}/lbRouteExtensions/{lb_route_extension}`. */
  name: string;
  /** Request body */
  body?: LbRouteExtension;
}

export const PatchProjectsLocationsLbRouteExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(LbRouteExtension).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsLbRouteExtensionsRequest>;

export type PatchProjectsLocationsLbRouteExtensionsResponse = Operation;
export const PatchProjectsLocationsLbRouteExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsLbRouteExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of the specified `LbRouteExtension` resource. */
export const patchProjectsLocationsLbRouteExtensions: API.OperationMethod<
  PatchProjectsLocationsLbRouteExtensionsRequest,
  PatchProjectsLocationsLbRouteExtensionsResponse,
  PatchProjectsLocationsLbRouteExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsLbRouteExtensionsRequest,
  output: PatchProjectsLocationsLbRouteExtensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsLbRouteExtensionsRequest {
  /** Required. The name of the `LbRouteExtension` resource to delete. Must be in the format `projects/{project}/locations/{location}/lbRouteExtensions/{lb_route_extension}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsLbRouteExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsLbRouteExtensionsRequest>;

export type DeleteProjectsLocationsLbRouteExtensionsResponse = Operation;
export const DeleteProjectsLocationsLbRouteExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsLbRouteExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified `LbRouteExtension` resource. */
export const deleteProjectsLocationsLbRouteExtensions: API.OperationMethod<
  DeleteProjectsLocationsLbRouteExtensionsRequest,
  DeleteProjectsLocationsLbRouteExtensionsResponse,
  DeleteProjectsLocationsLbRouteExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsLbRouteExtensionsRequest,
  output: DeleteProjectsLocationsLbRouteExtensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsGrpcRoutesRequest {
  /** Required. The parent resource of the GrpcRoute. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. Short name of the GrpcRoute resource to be created. */
  grpcRouteId?: string;
  /** Request body */
  body?: GrpcRoute;
}

export const CreateProjectsLocationsGrpcRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    grpcRouteId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("grpcRouteId"),
    ),
    body: Schema.optional(GrpcRoute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/grpcRoutes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGrpcRoutesRequest>;

export type CreateProjectsLocationsGrpcRoutesResponse = Operation;
export const CreateProjectsLocationsGrpcRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsGrpcRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new GrpcRoute in a given project and location. */
export const createProjectsLocationsGrpcRoutes: API.OperationMethod<
  CreateProjectsLocationsGrpcRoutesRequest,
  CreateProjectsLocationsGrpcRoutesResponse,
  CreateProjectsLocationsGrpcRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGrpcRoutesRequest,
  output: CreateProjectsLocationsGrpcRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGrpcRoutesRequest {
  /** Maximum number of GrpcRoutes to return per call. */
  pageSize?: number;
  /** Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail. */
  returnPartialSuccess?: boolean;
  /** The value returned by the last `ListGrpcRoutesResponse` Indicates that this is a continuation of a prior `ListGrpcRoutes` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. The project and location from which the GrpcRoutes should be listed, specified in the format `projects/* /locations/*`. */
  parent: string;
}

export const ListProjectsLocationsGrpcRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/grpcRoutes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGrpcRoutesRequest>;

export type ListProjectsLocationsGrpcRoutesResponse = ListGrpcRoutesResponse;
export const ListProjectsLocationsGrpcRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGrpcRoutesResponse;

export type ListProjectsLocationsGrpcRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists GrpcRoutes in a given project and location. */
export const listProjectsLocationsGrpcRoutes: API.PaginatedOperationMethod<
  ListProjectsLocationsGrpcRoutesRequest,
  ListProjectsLocationsGrpcRoutesResponse,
  ListProjectsLocationsGrpcRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGrpcRoutesRequest,
  output: ListProjectsLocationsGrpcRoutesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsGrpcRoutesRequest {
  /** Required. A name of the GrpcRoute to get. Must be in the format `projects/* /locations/* /grpcRoutes/*`. */
  name: string;
}

export const GetProjectsLocationsGrpcRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGrpcRoutesRequest>;

export type GetProjectsLocationsGrpcRoutesResponse = GrpcRoute;
export const GetProjectsLocationsGrpcRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GrpcRoute;

export type GetProjectsLocationsGrpcRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single GrpcRoute. */
export const getProjectsLocationsGrpcRoutes: API.OperationMethod<
  GetProjectsLocationsGrpcRoutesRequest,
  GetProjectsLocationsGrpcRoutesResponse,
  GetProjectsLocationsGrpcRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGrpcRoutesRequest,
  output: GetProjectsLocationsGrpcRoutesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsGrpcRoutesRequest {
  /** Identifier. Name of the GrpcRoute resource. It matches pattern `projects/* /locations/* /grpcRoutes/` */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the GrpcRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: GrpcRoute;
}

export const PatchProjectsLocationsGrpcRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GrpcRoute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGrpcRoutesRequest>;

export type PatchProjectsLocationsGrpcRoutesResponse = Operation;
export const PatchProjectsLocationsGrpcRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsGrpcRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single GrpcRoute. */
export const patchProjectsLocationsGrpcRoutes: API.OperationMethod<
  PatchProjectsLocationsGrpcRoutesRequest,
  PatchProjectsLocationsGrpcRoutesResponse,
  PatchProjectsLocationsGrpcRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGrpcRoutesRequest,
  output: PatchProjectsLocationsGrpcRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsGrpcRoutesRequest {
  /** Required. A name of the GrpcRoute to delete. Must be in the format `projects/* /locations/* /grpcRoutes/*`. */
  name: string;
}

export const DeleteProjectsLocationsGrpcRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGrpcRoutesRequest>;

export type DeleteProjectsLocationsGrpcRoutesResponse = Operation;
export const DeleteProjectsLocationsGrpcRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsGrpcRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single GrpcRoute. */
export const deleteProjectsLocationsGrpcRoutes: API.OperationMethod<
  DeleteProjectsLocationsGrpcRoutesRequest,
  DeleteProjectsLocationsGrpcRoutesResponse,
  DeleteProjectsLocationsGrpcRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGrpcRoutesRequest,
  output: DeleteProjectsLocationsGrpcRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsWasmPluginsRequest {
  /** Required. User-provided ID of the `WasmPlugin` resource to be created. */
  wasmPluginId?: string;
  /** Required. The parent resource of the `WasmPlugin` resource. Must be in the format `projects/{project}/locations/global`. */
  parent: string;
  /** Request body */
  body?: WasmPlugin;
}

export const CreateProjectsLocationsWasmPluginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wasmPluginId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("wasmPluginId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(WasmPlugin).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/wasmPlugins", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsWasmPluginsRequest>;

export type CreateProjectsLocationsWasmPluginsResponse = Operation;
export const CreateProjectsLocationsWasmPluginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsWasmPluginsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new `WasmPlugin` resource in a given project and location. */
export const createProjectsLocationsWasmPlugins: API.OperationMethod<
  CreateProjectsLocationsWasmPluginsRequest,
  CreateProjectsLocationsWasmPluginsResponse,
  CreateProjectsLocationsWasmPluginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsWasmPluginsRequest,
  output: CreateProjectsLocationsWasmPluginsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsWasmPluginsRequest {
  /** Required. The project and location from which the `WasmPlugin` resources are listed, specified in the following format: `projects/{project}/locations/global`. */
  parent: string;
  /** The value returned by the last `ListWasmPluginsResponse` call. Indicates that this is a continuation of a prior `ListWasmPlugins` call, and that the next page of data is to be returned. */
  pageToken?: string;
  /** Maximum number of `WasmPlugin` resources to return per call. If not specified, at most 50 `WasmPlugin` resources are returned. The maximum value is 1000; values above 1000 are coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsWasmPluginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/wasmPlugins" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsWasmPluginsRequest>;

export type ListProjectsLocationsWasmPluginsResponse = ListWasmPluginsResponse;
export const ListProjectsLocationsWasmPluginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWasmPluginsResponse;

export type ListProjectsLocationsWasmPluginsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists `WasmPlugin` resources in a given project and location. */
export const listProjectsLocationsWasmPlugins: API.PaginatedOperationMethod<
  ListProjectsLocationsWasmPluginsRequest,
  ListProjectsLocationsWasmPluginsResponse,
  ListProjectsLocationsWasmPluginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsWasmPluginsRequest,
  output: ListProjectsLocationsWasmPluginsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsWasmPluginsRequest {
  /** Required. A name of the `WasmPlugin` resource to get. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}`. */
  name: string;
  /** Determines how much data must be returned in the response. See [AIP-157](https://google.aip.dev/157). */
  view?:
    | "WASM_PLUGIN_VIEW_UNSPECIFIED"
    | "WASM_PLUGIN_VIEW_BASIC"
    | "WASM_PLUGIN_VIEW_FULL"
    | (string & {});
}

export const GetProjectsLocationsWasmPluginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsWasmPluginsRequest>;

export type GetProjectsLocationsWasmPluginsResponse = WasmPlugin;
export const GetProjectsLocationsWasmPluginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WasmPlugin;

export type GetProjectsLocationsWasmPluginsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified `WasmPlugin` resource. */
export const getProjectsLocationsWasmPlugins: API.OperationMethod<
  GetProjectsLocationsWasmPluginsRequest,
  GetProjectsLocationsWasmPluginsResponse,
  GetProjectsLocationsWasmPluginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsWasmPluginsRequest,
  output: GetProjectsLocationsWasmPluginsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsWasmPluginsRequest {
  /** Identifier. Name of the `WasmPlugin` resource in the following format: `projects/{project}/locations/{location}/wasmPlugins/{wasm_plugin}`. */
  name: string;
  /** Optional. Used to specify the fields to be overwritten in the `WasmPlugin` resource by the update. The fields specified in the `update_mask` field are relative to the resource, not the full request. An omitted `update_mask` field is treated as an implied `update_mask` field equivalent to all fields that are populated (that have a non-empty value). The `update_mask` field supports a special value `*`, which means that each field in the given `WasmPlugin` resource (including the empty ones) replaces the current value. */
  updateMask?: string;
  /** Request body */
  body?: WasmPlugin;
}

export const PatchProjectsLocationsWasmPluginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(WasmPlugin).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsWasmPluginsRequest>;

export type PatchProjectsLocationsWasmPluginsResponse = Operation;
export const PatchProjectsLocationsWasmPluginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsWasmPluginsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of the specified `WasmPlugin` resource. */
export const patchProjectsLocationsWasmPlugins: API.OperationMethod<
  PatchProjectsLocationsWasmPluginsRequest,
  PatchProjectsLocationsWasmPluginsResponse,
  PatchProjectsLocationsWasmPluginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsWasmPluginsRequest,
  output: PatchProjectsLocationsWasmPluginsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsWasmPluginsRequest {
  /** Required. A name of the `WasmPlugin` resource to delete. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}`. */
  name: string;
}

export const DeleteProjectsLocationsWasmPluginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsWasmPluginsRequest>;

export type DeleteProjectsLocationsWasmPluginsResponse = Operation;
export const DeleteProjectsLocationsWasmPluginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsWasmPluginsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified `WasmPlugin` resource. */
export const deleteProjectsLocationsWasmPlugins: API.OperationMethod<
  DeleteProjectsLocationsWasmPluginsRequest,
  DeleteProjectsLocationsWasmPluginsResponse,
  DeleteProjectsLocationsWasmPluginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsWasmPluginsRequest,
  output: DeleteProjectsLocationsWasmPluginsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsWasmPluginsVersionsRequest {
  /** Required. A name of the `WasmPluginVersion` resource to delete. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}/versions/{wasm_plugin_version}`. */
  name: string;
}

export const DeleteProjectsLocationsWasmPluginsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsWasmPluginsVersionsRequest>;

export type DeleteProjectsLocationsWasmPluginsVersionsResponse = Operation;
export const DeleteProjectsLocationsWasmPluginsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsWasmPluginsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified `WasmPluginVersion` resource. */
export const deleteProjectsLocationsWasmPluginsVersions: API.OperationMethod<
  DeleteProjectsLocationsWasmPluginsVersionsRequest,
  DeleteProjectsLocationsWasmPluginsVersionsResponse,
  DeleteProjectsLocationsWasmPluginsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsWasmPluginsVersionsRequest,
  output: DeleteProjectsLocationsWasmPluginsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsWasmPluginsVersionsRequest {
  /** Required. A name of the `WasmPluginVersion` resource to get. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}/versions/{wasm_plugin_version}`. */
  name: string;
}

export const GetProjectsLocationsWasmPluginsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsWasmPluginsVersionsRequest>;

export type GetProjectsLocationsWasmPluginsVersionsResponse = WasmPluginVersion;
export const GetProjectsLocationsWasmPluginsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WasmPluginVersion;

export type GetProjectsLocationsWasmPluginsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified `WasmPluginVersion` resource. */
export const getProjectsLocationsWasmPluginsVersions: API.OperationMethod<
  GetProjectsLocationsWasmPluginsVersionsRequest,
  GetProjectsLocationsWasmPluginsVersionsResponse,
  GetProjectsLocationsWasmPluginsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsWasmPluginsVersionsRequest,
  output: GetProjectsLocationsWasmPluginsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsWasmPluginsVersionsRequest {
  /** Maximum number of `WasmPluginVersion` resources to return per call. If not specified, at most 50 `WasmPluginVersion` resources are returned. The maximum value is 1000; values above 1000 are coerced to 1000. */
  pageSize?: number;
  /** The value returned by the last `ListWasmPluginVersionsResponse` call. Indicates that this is a continuation of a prior `ListWasmPluginVersions` call, and that the next page of data is to be returned. */
  pageToken?: string;
  /** Required. The `WasmPlugin` resource whose `WasmPluginVersion`s are listed, specified in the following format: `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}`. */
  parent: string;
}

export const ListProjectsLocationsWasmPluginsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsWasmPluginsVersionsRequest>;

export type ListProjectsLocationsWasmPluginsVersionsResponse =
  ListWasmPluginVersionsResponse;
export const ListProjectsLocationsWasmPluginsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWasmPluginVersionsResponse;

export type ListProjectsLocationsWasmPluginsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists `WasmPluginVersion` resources in a given project and location. */
export const listProjectsLocationsWasmPluginsVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsWasmPluginsVersionsRequest,
  ListProjectsLocationsWasmPluginsVersionsResponse,
  ListProjectsLocationsWasmPluginsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsWasmPluginsVersionsRequest,
  output: ListProjectsLocationsWasmPluginsVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsWasmPluginsVersionsRequest {
  /** Required. The parent resource of the `WasmPluginVersion` resource. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}`. */
  parent: string;
  /** Required. User-provided ID of the `WasmPluginVersion` resource to be created. */
  wasmPluginVersionId?: string;
  /** Request body */
  body?: WasmPluginVersion;
}

export const CreateProjectsLocationsWasmPluginsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    wasmPluginVersionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("wasmPluginVersionId"),
    ),
    body: Schema.optional(WasmPluginVersion).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/versions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsWasmPluginsVersionsRequest>;

export type CreateProjectsLocationsWasmPluginsVersionsResponse = Operation;
export const CreateProjectsLocationsWasmPluginsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsWasmPluginsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new `WasmPluginVersion` resource in a given project and location. */
export const createProjectsLocationsWasmPluginsVersions: API.OperationMethod<
  CreateProjectsLocationsWasmPluginsVersionsRequest,
  CreateProjectsLocationsWasmPluginsVersionsResponse,
  CreateProjectsLocationsWasmPluginsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsWasmPluginsVersionsRequest,
  output: CreateProjectsLocationsWasmPluginsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsLbEdgeExtensionsRequest {
  /** Optional. A token identifying a page of results that the server returns. */
  pageToken?: string;
  /** Required. The project and location from which the `LbEdgeExtension` resources are listed. These values are specified in the following format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. Hint about how to order the results. */
  orderBy?: string;
  /** Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default. */
  pageSize?: number;
  /** Optional. Filtering results. */
  filter?: string;
}

export const ListProjectsLocationsLbEdgeExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/lbEdgeExtensions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsLbEdgeExtensionsRequest>;

export type ListProjectsLocationsLbEdgeExtensionsResponse =
  ListLbEdgeExtensionsResponse;
export const ListProjectsLocationsLbEdgeExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLbEdgeExtensionsResponse;

export type ListProjectsLocationsLbEdgeExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists `LbEdgeExtension` resources in a given project and location. */
export const listProjectsLocationsLbEdgeExtensions: API.PaginatedOperationMethod<
  ListProjectsLocationsLbEdgeExtensionsRequest,
  ListProjectsLocationsLbEdgeExtensionsResponse,
  ListProjectsLocationsLbEdgeExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsLbEdgeExtensionsRequest,
  output: ListProjectsLocationsLbEdgeExtensionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsLbEdgeExtensionsRequest {
  /** Required. The parent resource of the `LbEdgeExtension` resource. Must be in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. User-provided ID of the `LbEdgeExtension` resource to be created. */
  lbEdgeExtensionId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: LbEdgeExtension;
}

export const CreateProjectsLocationsLbEdgeExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    lbEdgeExtensionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("lbEdgeExtensionId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(LbEdgeExtension).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/lbEdgeExtensions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsLbEdgeExtensionsRequest>;

export type CreateProjectsLocationsLbEdgeExtensionsResponse = Operation;
export const CreateProjectsLocationsLbEdgeExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsLbEdgeExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new `LbEdgeExtension` resource in a given project and location. */
export const createProjectsLocationsLbEdgeExtensions: API.OperationMethod<
  CreateProjectsLocationsLbEdgeExtensionsRequest,
  CreateProjectsLocationsLbEdgeExtensionsResponse,
  CreateProjectsLocationsLbEdgeExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsLbEdgeExtensionsRequest,
  output: CreateProjectsLocationsLbEdgeExtensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsLbEdgeExtensionsRequest {
  /** Optional. Used to specify the fields to be overwritten in the `LbEdgeExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Identifier. Name of the `LbEdgeExtension` resource in the following format: `projects/{project}/locations/{location}/lbEdgeExtensions/{lb_edge_extension}`. */
  name: string;
  /** Request body */
  body?: LbEdgeExtension;
}

export const PatchProjectsLocationsLbEdgeExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(LbEdgeExtension).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsLbEdgeExtensionsRequest>;

export type PatchProjectsLocationsLbEdgeExtensionsResponse = Operation;
export const PatchProjectsLocationsLbEdgeExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsLbEdgeExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of the specified `LbEdgeExtension` resource. */
export const patchProjectsLocationsLbEdgeExtensions: API.OperationMethod<
  PatchProjectsLocationsLbEdgeExtensionsRequest,
  PatchProjectsLocationsLbEdgeExtensionsResponse,
  PatchProjectsLocationsLbEdgeExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsLbEdgeExtensionsRequest,
  output: PatchProjectsLocationsLbEdgeExtensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsLbEdgeExtensionsRequest {
  /** Required. The name of the `LbEdgeExtension` resource to delete. Must be in the format `projects/{project}/locations/{location}/lbEdgeExtensions/{lb_edge_extension}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsLbEdgeExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsLbEdgeExtensionsRequest>;

export type DeleteProjectsLocationsLbEdgeExtensionsResponse = Operation;
export const DeleteProjectsLocationsLbEdgeExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsLbEdgeExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified `LbEdgeExtension` resource. */
export const deleteProjectsLocationsLbEdgeExtensions: API.OperationMethod<
  DeleteProjectsLocationsLbEdgeExtensionsRequest,
  DeleteProjectsLocationsLbEdgeExtensionsResponse,
  DeleteProjectsLocationsLbEdgeExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsLbEdgeExtensionsRequest,
  output: DeleteProjectsLocationsLbEdgeExtensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsLbEdgeExtensionsRequest {
  /** Required. A name of the `LbEdgeExtension` resource to get. Must be in the format `projects/{project}/locations/{location}/lbEdgeExtensions/{lb_edge_extension}`. */
  name: string;
}

export const GetProjectsLocationsLbEdgeExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsLbEdgeExtensionsRequest>;

export type GetProjectsLocationsLbEdgeExtensionsResponse = LbEdgeExtension;
export const GetProjectsLocationsLbEdgeExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LbEdgeExtension;

export type GetProjectsLocationsLbEdgeExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified `LbEdgeExtension` resource. */
export const getProjectsLocationsLbEdgeExtensions: API.OperationMethod<
  GetProjectsLocationsLbEdgeExtensionsRequest,
  GetProjectsLocationsLbEdgeExtensionsResponse,
  GetProjectsLocationsLbEdgeExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsLbEdgeExtensionsRequest,
  output: GetProjectsLocationsLbEdgeExtensionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsServiceBindingsRequest {
  /** Required. The parent resource of the ServiceBinding. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. Short name of the ServiceBinding resource to be created. */
  serviceBindingId?: string;
  /** Request body */
  body?: ServiceBinding;
}

export const CreateProjectsLocationsServiceBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    serviceBindingId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("serviceBindingId"),
    ),
    body: Schema.optional(ServiceBinding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/serviceBindings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsServiceBindingsRequest>;

export type CreateProjectsLocationsServiceBindingsResponse = Operation;
export const CreateProjectsLocationsServiceBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsServiceBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ServiceBinding in a given project and location. */
export const createProjectsLocationsServiceBindings: API.OperationMethod<
  CreateProjectsLocationsServiceBindingsRequest,
  CreateProjectsLocationsServiceBindingsResponse,
  CreateProjectsLocationsServiceBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServiceBindingsRequest,
  output: CreateProjectsLocationsServiceBindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsServiceBindingsRequest {
  /** Required. The project and location from which the ServiceBindings should be listed, specified in the format `projects/* /locations/*`. */
  parent: string;
  /** The value returned by the last `ListServiceBindingsResponse` Indicates that this is a continuation of a prior `ListRouters` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Maximum number of ServiceBindings to return per call. */
  pageSize?: number;
}

export const ListProjectsLocationsServiceBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/serviceBindings" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsServiceBindingsRequest>;

export type ListProjectsLocationsServiceBindingsResponse =
  ListServiceBindingsResponse;
export const ListProjectsLocationsServiceBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListServiceBindingsResponse;

export type ListProjectsLocationsServiceBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ServiceBinding in a given project and location. */
export const listProjectsLocationsServiceBindings: API.PaginatedOperationMethod<
  ListProjectsLocationsServiceBindingsRequest,
  ListProjectsLocationsServiceBindingsResponse,
  ListProjectsLocationsServiceBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServiceBindingsRequest,
  output: ListProjectsLocationsServiceBindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsServiceBindingsRequest {
  /** Required. A name of the ServiceBinding to get. Must be in the format `projects/* /locations/* /serviceBindings/*`. */
  name: string;
}

export const GetProjectsLocationsServiceBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsServiceBindingsRequest>;

export type GetProjectsLocationsServiceBindingsResponse = ServiceBinding;
export const GetProjectsLocationsServiceBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServiceBinding;

export type GetProjectsLocationsServiceBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ServiceBinding. */
export const getProjectsLocationsServiceBindings: API.OperationMethod<
  GetProjectsLocationsServiceBindingsRequest,
  GetProjectsLocationsServiceBindingsResponse,
  GetProjectsLocationsServiceBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServiceBindingsRequest,
  output: GetProjectsLocationsServiceBindingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsServiceBindingsRequest {
  /** Identifier. Name of the ServiceBinding resource. It matches pattern `projects/* /locations/* /serviceBindings/`. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the ServiceBinding resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: ServiceBinding;
}

export const PatchProjectsLocationsServiceBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ServiceBinding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsServiceBindingsRequest>;

export type PatchProjectsLocationsServiceBindingsResponse = Operation;
export const PatchProjectsLocationsServiceBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsServiceBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single ServiceBinding. */
export const patchProjectsLocationsServiceBindings: API.OperationMethod<
  PatchProjectsLocationsServiceBindingsRequest,
  PatchProjectsLocationsServiceBindingsResponse,
  PatchProjectsLocationsServiceBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsServiceBindingsRequest,
  output: PatchProjectsLocationsServiceBindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsServiceBindingsRequest {
  /** Required. A name of the ServiceBinding to delete. Must be in the format `projects/* /locations/* /serviceBindings/*`. */
  name: string;
}

export const DeleteProjectsLocationsServiceBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsServiceBindingsRequest>;

export type DeleteProjectsLocationsServiceBindingsResponse = Operation;
export const DeleteProjectsLocationsServiceBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsServiceBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ServiceBinding. */
export const deleteProjectsLocationsServiceBindings: API.OperationMethod<
  DeleteProjectsLocationsServiceBindingsRequest,
  DeleteProjectsLocationsServiceBindingsResponse,
  DeleteProjectsLocationsServiceBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServiceBindingsRequest,
  output: DeleteProjectsLocationsServiceBindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsEdgeCacheKeysetsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsEdgeCacheKeysetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsEdgeCacheKeysetsRequest>;

export type TestIamPermissionsProjectsLocationsEdgeCacheKeysetsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsEdgeCacheKeysetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsEdgeCacheKeysetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsEdgeCacheKeysets: API.OperationMethod<
  TestIamPermissionsProjectsLocationsEdgeCacheKeysetsRequest,
  TestIamPermissionsProjectsLocationsEdgeCacheKeysetsResponse,
  TestIamPermissionsProjectsLocationsEdgeCacheKeysetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsEdgeCacheKeysetsRequest,
  output: TestIamPermissionsProjectsLocationsEdgeCacheKeysetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsEdgeCacheKeysetsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsEdgeCacheKeysetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsEdgeCacheKeysetsRequest>;

export type SetIamPolicyProjectsLocationsEdgeCacheKeysetsResponse = Policy;
export const SetIamPolicyProjectsLocationsEdgeCacheKeysetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsEdgeCacheKeysetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsEdgeCacheKeysets: API.OperationMethod<
  SetIamPolicyProjectsLocationsEdgeCacheKeysetsRequest,
  SetIamPolicyProjectsLocationsEdgeCacheKeysetsResponse,
  SetIamPolicyProjectsLocationsEdgeCacheKeysetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsEdgeCacheKeysetsRequest,
  output: SetIamPolicyProjectsLocationsEdgeCacheKeysetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsEdgeCacheKeysetsRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsEdgeCacheKeysetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsEdgeCacheKeysetsRequest>;

export type GetIamPolicyProjectsLocationsEdgeCacheKeysetsResponse = Policy;
export const GetIamPolicyProjectsLocationsEdgeCacheKeysetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsEdgeCacheKeysetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsEdgeCacheKeysets: API.OperationMethod<
  GetIamPolicyProjectsLocationsEdgeCacheKeysetsRequest,
  GetIamPolicyProjectsLocationsEdgeCacheKeysetsResponse,
  GetIamPolicyProjectsLocationsEdgeCacheKeysetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsEdgeCacheKeysetsRequest,
  output: GetIamPolicyProjectsLocationsEdgeCacheKeysetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAuthzExtensionsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent resource of the `AuthzExtension` resource. Must be in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. User-provided ID of the `AuthzExtension` resource to be created. */
  authzExtensionId?: string;
  /** Request body */
  body?: AuthzExtension;
}

export const CreateProjectsLocationsAuthzExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    authzExtensionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("authzExtensionId"),
    ),
    body: Schema.optional(AuthzExtension).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/authzExtensions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAuthzExtensionsRequest>;

export type CreateProjectsLocationsAuthzExtensionsResponse = Operation;
export const CreateProjectsLocationsAuthzExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsAuthzExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new `AuthzExtension` resource in a given project and location. */
export const createProjectsLocationsAuthzExtensions: API.OperationMethod<
  CreateProjectsLocationsAuthzExtensionsRequest,
  CreateProjectsLocationsAuthzExtensionsResponse,
  CreateProjectsLocationsAuthzExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAuthzExtensionsRequest,
  output: CreateProjectsLocationsAuthzExtensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAuthzExtensionsRequest {
  /** Optional. A token identifying a page of results that the server returns. */
  pageToken?: string;
  /** Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default. */
  pageSize?: number;
  /** Optional. Filtering results. */
  filter?: string;
  /** Required. The project and location from which the `AuthzExtension` resources are listed. These values are specified in the following format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. Hint about how to order the results. */
  orderBy?: string;
}

export const ListProjectsLocationsAuthzExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/authzExtensions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAuthzExtensionsRequest>;

export type ListProjectsLocationsAuthzExtensionsResponse =
  ListAuthzExtensionsResponse;
export const ListProjectsLocationsAuthzExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAuthzExtensionsResponse;

export type ListProjectsLocationsAuthzExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists `AuthzExtension` resources in a given project and location. */
export const listProjectsLocationsAuthzExtensions: API.PaginatedOperationMethod<
  ListProjectsLocationsAuthzExtensionsRequest,
  ListProjectsLocationsAuthzExtensionsResponse,
  ListProjectsLocationsAuthzExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAuthzExtensionsRequest,
  output: ListProjectsLocationsAuthzExtensionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAuthzExtensionsRequest {
  /** Required. A name of the `AuthzExtension` resource to get. Must be in the format `projects/{project}/locations/{location}/authzExtensions/{authz_extension}`. */
  name: string;
}

export const GetProjectsLocationsAuthzExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAuthzExtensionsRequest>;

export type GetProjectsLocationsAuthzExtensionsResponse = AuthzExtension;
export const GetProjectsLocationsAuthzExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AuthzExtension;

export type GetProjectsLocationsAuthzExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified `AuthzExtension` resource. */
export const getProjectsLocationsAuthzExtensions: API.OperationMethod<
  GetProjectsLocationsAuthzExtensionsRequest,
  GetProjectsLocationsAuthzExtensionsResponse,
  GetProjectsLocationsAuthzExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAuthzExtensionsRequest,
  output: GetProjectsLocationsAuthzExtensionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsAuthzExtensionsRequest {
  /** Required. Identifier. Name of the `AuthzExtension` resource in the following format: `projects/{project}/locations/{location}/authzExtensions/{authz_extension}`. */
  name: string;
  /** Required. Used to specify the fields to be overwritten in the `AuthzExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: AuthzExtension;
}

export const PatchProjectsLocationsAuthzExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(AuthzExtension).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAuthzExtensionsRequest>;

export type PatchProjectsLocationsAuthzExtensionsResponse = Operation;
export const PatchProjectsLocationsAuthzExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsAuthzExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of the specified `AuthzExtension` resource. */
export const patchProjectsLocationsAuthzExtensions: API.OperationMethod<
  PatchProjectsLocationsAuthzExtensionsRequest,
  PatchProjectsLocationsAuthzExtensionsResponse,
  PatchProjectsLocationsAuthzExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAuthzExtensionsRequest,
  output: PatchProjectsLocationsAuthzExtensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAuthzExtensionsRequest {
  /** Required. The name of the `AuthzExtension` resource to delete. Must be in the format `projects/{project}/locations/{location}/authzExtensions/{authz_extension}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsAuthzExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAuthzExtensionsRequest>;

export type DeleteProjectsLocationsAuthzExtensionsResponse = Operation;
export const DeleteProjectsLocationsAuthzExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsAuthzExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified `AuthzExtension` resource. */
export const deleteProjectsLocationsAuthzExtensions: API.OperationMethod<
  DeleteProjectsLocationsAuthzExtensionsRequest,
  DeleteProjectsLocationsAuthzExtensionsResponse,
  DeleteProjectsLocationsAuthzExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAuthzExtensionsRequest,
  output: DeleteProjectsLocationsAuthzExtensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsLbTrafficExtensionsRequest {
  /** Required. Identifier. Name of the `LbTrafficExtension` resource in the following format: `projects/{project}/locations/{location}/lbTrafficExtensions/{lb_traffic_extension}`. */
  name: string;
  /** Optional. Used to specify the fields to be overwritten in the `LbTrafficExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: LbTrafficExtension;
}

export const PatchProjectsLocationsLbTrafficExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(LbTrafficExtension).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsLbTrafficExtensionsRequest>;

export type PatchProjectsLocationsLbTrafficExtensionsResponse = Operation;
export const PatchProjectsLocationsLbTrafficExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsLbTrafficExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of the specified `LbTrafficExtension` resource. */
export const patchProjectsLocationsLbTrafficExtensions: API.OperationMethod<
  PatchProjectsLocationsLbTrafficExtensionsRequest,
  PatchProjectsLocationsLbTrafficExtensionsResponse,
  PatchProjectsLocationsLbTrafficExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsLbTrafficExtensionsRequest,
  output: PatchProjectsLocationsLbTrafficExtensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsLbTrafficExtensionsRequest {
  /** Required. The name of the `LbTrafficExtension` resource to delete. Must be in the format `projects/{project}/locations/{location}/lbTrafficExtensions/{lb_traffic_extension}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsLbTrafficExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsLbTrafficExtensionsRequest>;

export type DeleteProjectsLocationsLbTrafficExtensionsResponse = Operation;
export const DeleteProjectsLocationsLbTrafficExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsLbTrafficExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified `LbTrafficExtension` resource. */
export const deleteProjectsLocationsLbTrafficExtensions: API.OperationMethod<
  DeleteProjectsLocationsLbTrafficExtensionsRequest,
  DeleteProjectsLocationsLbTrafficExtensionsResponse,
  DeleteProjectsLocationsLbTrafficExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsLbTrafficExtensionsRequest,
  output: DeleteProjectsLocationsLbTrafficExtensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsLbTrafficExtensionsRequest {
  /** Required. A name of the `LbTrafficExtension` resource to get. Must be in the format `projects/{project}/locations/{location}/lbTrafficExtensions/{lb_traffic_extension}`. */
  name: string;
}

export const GetProjectsLocationsLbTrafficExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsLbTrafficExtensionsRequest>;

export type GetProjectsLocationsLbTrafficExtensionsResponse =
  LbTrafficExtension;
export const GetProjectsLocationsLbTrafficExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LbTrafficExtension;

export type GetProjectsLocationsLbTrafficExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified `LbTrafficExtension` resource. */
export const getProjectsLocationsLbTrafficExtensions: API.OperationMethod<
  GetProjectsLocationsLbTrafficExtensionsRequest,
  GetProjectsLocationsLbTrafficExtensionsResponse,
  GetProjectsLocationsLbTrafficExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsLbTrafficExtensionsRequest,
  output: GetProjectsLocationsLbTrafficExtensionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsLbTrafficExtensionsRequest {
  /** Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default. */
  pageSize?: number;
  /** Optional. Filtering results. */
  filter?: string;
  /** Required. The project and location from which the `LbTrafficExtension` resources are listed. These values are specified in the following format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. Hint about how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results that the server returns. */
  pageToken?: string;
}

export const ListProjectsLocationsLbTrafficExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/lbTrafficExtensions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsLbTrafficExtensionsRequest>;

export type ListProjectsLocationsLbTrafficExtensionsResponse =
  ListLbTrafficExtensionsResponse;
export const ListProjectsLocationsLbTrafficExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLbTrafficExtensionsResponse;

export type ListProjectsLocationsLbTrafficExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists `LbTrafficExtension` resources in a given project and location. */
export const listProjectsLocationsLbTrafficExtensions: API.PaginatedOperationMethod<
  ListProjectsLocationsLbTrafficExtensionsRequest,
  ListProjectsLocationsLbTrafficExtensionsResponse,
  ListProjectsLocationsLbTrafficExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsLbTrafficExtensionsRequest,
  output: ListProjectsLocationsLbTrafficExtensionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsLbTrafficExtensionsRequest {
  /** Required. User-provided ID of the `LbTrafficExtension` resource to be created. */
  lbTrafficExtensionId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent resource of the `LbTrafficExtension` resource. Must be in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Request body */
  body?: LbTrafficExtension;
}

export const CreateProjectsLocationsLbTrafficExtensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lbTrafficExtensionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("lbTrafficExtensionId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(LbTrafficExtension).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/lbTrafficExtensions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsLbTrafficExtensionsRequest>;

export type CreateProjectsLocationsLbTrafficExtensionsResponse = Operation;
export const CreateProjectsLocationsLbTrafficExtensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsLbTrafficExtensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new `LbTrafficExtension` resource in a given project and location. */
export const createProjectsLocationsLbTrafficExtensions: API.OperationMethod<
  CreateProjectsLocationsLbTrafficExtensionsRequest,
  CreateProjectsLocationsLbTrafficExtensionsResponse,
  CreateProjectsLocationsLbTrafficExtensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsLbTrafficExtensionsRequest,
  output: CreateProjectsLocationsLbTrafficExtensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsEndpointPoliciesRequest {
  /** Required. A name of the EndpointPolicy to get. Must be in the format `projects/* /locations/* /endpointPolicies/*`. */
  name: string;
}

export const GetProjectsLocationsEndpointPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsEndpointPoliciesRequest>;

export type GetProjectsLocationsEndpointPoliciesResponse = EndpointPolicy;
export const GetProjectsLocationsEndpointPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EndpointPolicy;

export type GetProjectsLocationsEndpointPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single EndpointPolicy. */
export const getProjectsLocationsEndpointPolicies: API.OperationMethod<
  GetProjectsLocationsEndpointPoliciesRequest,
  GetProjectsLocationsEndpointPoliciesResponse,
  GetProjectsLocationsEndpointPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsEndpointPoliciesRequest,
  output: GetProjectsLocationsEndpointPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsEndpointPoliciesRequest {
  /** Identifier. Name of the EndpointPolicy resource. It matches pattern `projects/{project}/locations/* /endpointPolicies/{endpoint_policy}`. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the EndpointPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: EndpointPolicy;
}

export const PatchProjectsLocationsEndpointPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EndpointPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsEndpointPoliciesRequest>;

export type PatchProjectsLocationsEndpointPoliciesResponse = Operation;
export const PatchProjectsLocationsEndpointPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsEndpointPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single EndpointPolicy. */
export const patchProjectsLocationsEndpointPolicies: API.OperationMethod<
  PatchProjectsLocationsEndpointPoliciesRequest,
  PatchProjectsLocationsEndpointPoliciesResponse,
  PatchProjectsLocationsEndpointPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsEndpointPoliciesRequest,
  output: PatchProjectsLocationsEndpointPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsEndpointPoliciesRequest {
  /** Required. A name of the EndpointPolicy to delete. Must be in the format `projects/* /locations/* /endpointPolicies/*`. */
  name: string;
}

export const DeleteProjectsLocationsEndpointPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsEndpointPoliciesRequest>;

export type DeleteProjectsLocationsEndpointPoliciesResponse = Operation;
export const DeleteProjectsLocationsEndpointPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsEndpointPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single EndpointPolicy. */
export const deleteProjectsLocationsEndpointPolicies: API.OperationMethod<
  DeleteProjectsLocationsEndpointPoliciesRequest,
  DeleteProjectsLocationsEndpointPoliciesResponse,
  DeleteProjectsLocationsEndpointPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsEndpointPoliciesRequest,
  output: DeleteProjectsLocationsEndpointPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsEndpointPoliciesRequest {
  /** Required. The parent resource of the EndpointPolicy. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. Short name of the EndpointPolicy resource to be created. E.g. "CustomECS". */
  endpointPolicyId?: string;
  /** Request body */
  body?: EndpointPolicy;
}

export const CreateProjectsLocationsEndpointPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    endpointPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("endpointPolicyId"),
    ),
    body: Schema.optional(EndpointPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/endpointPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsEndpointPoliciesRequest>;

export type CreateProjectsLocationsEndpointPoliciesResponse = Operation;
export const CreateProjectsLocationsEndpointPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsEndpointPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new EndpointPolicy in a given project and location. */
export const createProjectsLocationsEndpointPolicies: API.OperationMethod<
  CreateProjectsLocationsEndpointPoliciesRequest,
  CreateProjectsLocationsEndpointPoliciesResponse,
  CreateProjectsLocationsEndpointPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsEndpointPoliciesRequest,
  output: CreateProjectsLocationsEndpointPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsEndpointPoliciesRequest {
  /** Required. The project and location from which the EndpointPolicies should be listed, specified in the format `projects/* /locations/*`. */
  parent: string;
  /** The value returned by the last `ListEndpointPoliciesResponse` Indicates that this is a continuation of a prior `ListEndpointPolicies` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Maximum number of EndpointPolicies to return per call. */
  pageSize?: number;
  /** Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsEndpointPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/endpointPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEndpointPoliciesRequest>;

export type ListProjectsLocationsEndpointPoliciesResponse =
  ListEndpointPoliciesResponse;
export const ListProjectsLocationsEndpointPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEndpointPoliciesResponse;

export type ListProjectsLocationsEndpointPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists EndpointPolicies in a given project and location. */
export const listProjectsLocationsEndpointPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsEndpointPoliciesRequest,
  ListProjectsLocationsEndpointPoliciesResponse,
  ListProjectsLocationsEndpointPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEndpointPoliciesRequest,
  output: ListProjectsLocationsEndpointPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsServiceLbPoliciesRequest {
  /** Required. A name of the ServiceLbPolicy to get. Must be in the format `projects/{project}/locations/{location}/serviceLbPolicies/*`. */
  name: string;
}

export const GetProjectsLocationsServiceLbPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsServiceLbPoliciesRequest>;

export type GetProjectsLocationsServiceLbPoliciesResponse = ServiceLbPolicy;
export const GetProjectsLocationsServiceLbPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServiceLbPolicy;

export type GetProjectsLocationsServiceLbPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ServiceLbPolicy. */
export const getProjectsLocationsServiceLbPolicies: API.OperationMethod<
  GetProjectsLocationsServiceLbPoliciesRequest,
  GetProjectsLocationsServiceLbPoliciesResponse,
  GetProjectsLocationsServiceLbPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServiceLbPoliciesRequest,
  output: GetProjectsLocationsServiceLbPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsServiceLbPoliciesRequest {
  /** Identifier. Name of the ServiceLbPolicy resource. It matches pattern `projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}`. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the ServiceLbPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: ServiceLbPolicy;
}

export const PatchProjectsLocationsServiceLbPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ServiceLbPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsServiceLbPoliciesRequest>;

export type PatchProjectsLocationsServiceLbPoliciesResponse = Operation;
export const PatchProjectsLocationsServiceLbPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsServiceLbPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single ServiceLbPolicy. */
export const patchProjectsLocationsServiceLbPolicies: API.OperationMethod<
  PatchProjectsLocationsServiceLbPoliciesRequest,
  PatchProjectsLocationsServiceLbPoliciesResponse,
  PatchProjectsLocationsServiceLbPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsServiceLbPoliciesRequest,
  output: PatchProjectsLocationsServiceLbPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsServiceLbPoliciesRequest {
  /** Required. A name of the ServiceLbPolicy to delete. Must be in the format `projects/{project}/locations/{location}/serviceLbPolicies/*`. */
  name: string;
}

export const DeleteProjectsLocationsServiceLbPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsServiceLbPoliciesRequest>;

export type DeleteProjectsLocationsServiceLbPoliciesResponse = Operation;
export const DeleteProjectsLocationsServiceLbPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsServiceLbPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ServiceLbPolicy. */
export const deleteProjectsLocationsServiceLbPolicies: API.OperationMethod<
  DeleteProjectsLocationsServiceLbPoliciesRequest,
  DeleteProjectsLocationsServiceLbPoliciesResponse,
  DeleteProjectsLocationsServiceLbPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServiceLbPoliciesRequest,
  output: DeleteProjectsLocationsServiceLbPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsServiceLbPoliciesRequest {
  /** Required. The parent resource of the ServiceLbPolicy. Must be in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. Short name of the ServiceLbPolicy resource to be created. E.g. for resource name `projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}`. the id is value of {service_lb_policy_name} */
  serviceLbPolicyId?: string;
  /** Request body */
  body?: ServiceLbPolicy;
}

export const CreateProjectsLocationsServiceLbPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    serviceLbPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("serviceLbPolicyId"),
    ),
    body: Schema.optional(ServiceLbPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/serviceLbPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsServiceLbPoliciesRequest>;

export type CreateProjectsLocationsServiceLbPoliciesResponse = Operation;
export const CreateProjectsLocationsServiceLbPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsServiceLbPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ServiceLbPolicy in a given project and location. */
export const createProjectsLocationsServiceLbPolicies: API.OperationMethod<
  CreateProjectsLocationsServiceLbPoliciesRequest,
  CreateProjectsLocationsServiceLbPoliciesResponse,
  CreateProjectsLocationsServiceLbPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServiceLbPoliciesRequest,
  output: CreateProjectsLocationsServiceLbPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsServiceLbPoliciesRequest {
  /** Required. The project and location from which the ServiceLbPolicies should be listed, specified in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** The value returned by the last `ListServiceLbPoliciesResponse` Indicates that this is a continuation of a prior `ListRouters` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Maximum number of ServiceLbPolicies to return per call. */
  pageSize?: number;
}

export const ListProjectsLocationsServiceLbPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/serviceLbPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsServiceLbPoliciesRequest>;

export type ListProjectsLocationsServiceLbPoliciesResponse =
  ListServiceLbPoliciesResponse;
export const ListProjectsLocationsServiceLbPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListServiceLbPoliciesResponse;

export type ListProjectsLocationsServiceLbPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ServiceLbPolicies in a given project and location. */
export const listProjectsLocationsServiceLbPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsServiceLbPoliciesRequest,
  ListProjectsLocationsServiceLbPoliciesResponse,
  ListProjectsLocationsServiceLbPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServiceLbPoliciesRequest,
  output: ListProjectsLocationsServiceLbPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsGatewaysRequest {
  /** Required. A name of the Gateway to get. Must be in the format `projects/* /locations/* /gateways/*`. */
  name: string;
}

export const GetProjectsLocationsGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGatewaysRequest>;

export type GetProjectsLocationsGatewaysResponse = Gateway;
export const GetProjectsLocationsGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ Gateway;

export type GetProjectsLocationsGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Gateway. */
export const getProjectsLocationsGateways: API.OperationMethod<
  GetProjectsLocationsGatewaysRequest,
  GetProjectsLocationsGatewaysResponse,
  GetProjectsLocationsGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGatewaysRequest,
  output: GetProjectsLocationsGatewaysResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsGatewaysRequest {
  /** Identifier. Name of the Gateway resource. It matches pattern `projects/* /locations/* /gateways/`. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Gateway resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Gateway;
}

export const PatchProjectsLocationsGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Gateway).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGatewaysRequest>;

export type PatchProjectsLocationsGatewaysResponse = Operation;
export const PatchProjectsLocationsGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Gateway. */
export const patchProjectsLocationsGateways: API.OperationMethod<
  PatchProjectsLocationsGatewaysRequest,
  PatchProjectsLocationsGatewaysResponse,
  PatchProjectsLocationsGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGatewaysRequest,
  output: PatchProjectsLocationsGatewaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsGatewaysRequest {
  /** Required. A name of the Gateway to delete. Must be in the format `projects/* /locations/* /gateways/*`. */
  name: string;
}

export const DeleteProjectsLocationsGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGatewaysRequest>;

export type DeleteProjectsLocationsGatewaysResponse = Operation;
export const DeleteProjectsLocationsGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Gateway. */
export const deleteProjectsLocationsGateways: API.OperationMethod<
  DeleteProjectsLocationsGatewaysRequest,
  DeleteProjectsLocationsGatewaysResponse,
  DeleteProjectsLocationsGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGatewaysRequest,
  output: DeleteProjectsLocationsGatewaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsGatewaysRequest {
  /** Required. The parent resource of the Gateway. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. Short name of the Gateway resource to be created. */
  gatewayId?: string;
  /** Request body */
  body?: Gateway;
}

export const CreateProjectsLocationsGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    gatewayId: Schema.optional(Schema.String).pipe(T.HttpQuery("gatewayId")),
    body: Schema.optional(Gateway).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/gateways", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGatewaysRequest>;

export type CreateProjectsLocationsGatewaysResponse = Operation;
export const CreateProjectsLocationsGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Gateway in a given project and location. */
export const createProjectsLocationsGateways: API.OperationMethod<
  CreateProjectsLocationsGatewaysRequest,
  CreateProjectsLocationsGatewaysResponse,
  CreateProjectsLocationsGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGatewaysRequest,
  output: CreateProjectsLocationsGatewaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGatewaysRequest {
  /** Required. The project and location from which the Gateways should be listed, specified in the format `projects/* /locations/*`. */
  parent: string;
  /** The value returned by the last `ListGatewaysResponse` Indicates that this is a continuation of a prior `ListGateways` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Maximum number of Gateways to return per call. */
  pageSize?: number;
}

export const ListProjectsLocationsGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/gateways" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGatewaysRequest>;

export type ListProjectsLocationsGatewaysResponse = ListGatewaysResponse;
export const ListProjectsLocationsGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGatewaysResponse;

export type ListProjectsLocationsGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Gateways in a given project and location. */
export const listProjectsLocationsGateways: API.PaginatedOperationMethod<
  ListProjectsLocationsGatewaysRequest,
  ListProjectsLocationsGatewaysResponse,
  ListProjectsLocationsGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGatewaysRequest,
  output: ListProjectsLocationsGatewaysResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsGatewaysRouteViewsRequest {
  /** The value returned by the last `ListGatewayRouteViewsResponse` Indicates that this is a continuation of a prior `ListGatewayRouteViews` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Maximum number of GatewayRouteViews to return per call. */
  pageSize?: number;
  /** Required. The Gateway to which a Route is associated. Formats: projects/{project_number}/locations/{location}/gateways/{gateway} */
  parent: string;
}

export const ListProjectsLocationsGatewaysRouteViewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/routeViews" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGatewaysRouteViewsRequest>;

export type ListProjectsLocationsGatewaysRouteViewsResponse =
  ListGatewayRouteViewsResponse;
export const ListProjectsLocationsGatewaysRouteViewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGatewayRouteViewsResponse;

export type ListProjectsLocationsGatewaysRouteViewsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists RouteViews */
export const listProjectsLocationsGatewaysRouteViews: API.PaginatedOperationMethod<
  ListProjectsLocationsGatewaysRouteViewsRequest,
  ListProjectsLocationsGatewaysRouteViewsResponse,
  ListProjectsLocationsGatewaysRouteViewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGatewaysRouteViewsRequest,
  output: ListProjectsLocationsGatewaysRouteViewsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsGatewaysRouteViewsRequest {
  /** Required. Name of the GatewayRouteView resource. Formats: projects/{project_number}/locations/{location}/gateways/{gateway}/routeViews/{route_view} */
  name: string;
}

export const GetProjectsLocationsGatewaysRouteViewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGatewaysRouteViewsRequest>;

export type GetProjectsLocationsGatewaysRouteViewsResponse = GatewayRouteView;
export const GetProjectsLocationsGatewaysRouteViewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GatewayRouteView;

export type GetProjectsLocationsGatewaysRouteViewsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a single RouteView of a Gateway. */
export const getProjectsLocationsGatewaysRouteViews: API.OperationMethod<
  GetProjectsLocationsGatewaysRouteViewsRequest,
  GetProjectsLocationsGatewaysRouteViewsResponse,
  GetProjectsLocationsGatewaysRouteViewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGatewaysRouteViewsRequest,
  output: GetProjectsLocationsGatewaysRouteViewsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsMeshesRequest {
  /** Required. The parent resource of the Mesh. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. Short name of the Mesh resource to be created. */
  meshId?: string;
  /** Request body */
  body?: Mesh;
}

export const CreateProjectsLocationsMeshesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    meshId: Schema.optional(Schema.String).pipe(T.HttpQuery("meshId")),
    body: Schema.optional(Mesh).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/meshes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsMeshesRequest>;

export type CreateProjectsLocationsMeshesResponse = Operation;
export const CreateProjectsLocationsMeshesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsMeshesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Mesh in a given project and location. */
export const createProjectsLocationsMeshes: API.OperationMethod<
  CreateProjectsLocationsMeshesRequest,
  CreateProjectsLocationsMeshesResponse,
  CreateProjectsLocationsMeshesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMeshesRequest,
  output: CreateProjectsLocationsMeshesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMeshesRequest {
  /** The value returned by the last `ListMeshesResponse` Indicates that this is a continuation of a prior `ListMeshes` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Maximum number of Meshes to return per call. */
  pageSize?: number;
  /** Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail. */
  returnPartialSuccess?: boolean;
  /** Required. The project and location from which the Meshes should be listed, specified in the format `projects/* /locations/*`. */
  parent: string;
}

export const ListProjectsLocationsMeshesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/meshes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMeshesRequest>;

export type ListProjectsLocationsMeshesResponse = ListMeshesResponse;
export const ListProjectsLocationsMeshesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMeshesResponse;

export type ListProjectsLocationsMeshesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Meshes in a given project and location. */
export const listProjectsLocationsMeshes: API.PaginatedOperationMethod<
  ListProjectsLocationsMeshesRequest,
  ListProjectsLocationsMeshesResponse,
  ListProjectsLocationsMeshesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMeshesRequest,
  output: ListProjectsLocationsMeshesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsMeshesRequest {
  /** Required. A name of the Mesh to get. Must be in the format `projects/* /locations/* /meshes/*`. */
  name: string;
}

export const GetProjectsLocationsMeshesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMeshesRequest>;

export type GetProjectsLocationsMeshesResponse = Mesh;
export const GetProjectsLocationsMeshesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Mesh;

export type GetProjectsLocationsMeshesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Mesh. */
export const getProjectsLocationsMeshes: API.OperationMethod<
  GetProjectsLocationsMeshesRequest,
  GetProjectsLocationsMeshesResponse,
  GetProjectsLocationsMeshesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMeshesRequest,
  output: GetProjectsLocationsMeshesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsMeshesRequest {
  /** Identifier. Name of the Mesh resource. It matches pattern `projects/* /locations/* /meshes/`. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Mesh resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Mesh;
}

export const PatchProjectsLocationsMeshesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Mesh).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsMeshesRequest>;

export type PatchProjectsLocationsMeshesResponse = Operation;
export const PatchProjectsLocationsMeshesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsMeshesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Mesh. */
export const patchProjectsLocationsMeshes: API.OperationMethod<
  PatchProjectsLocationsMeshesRequest,
  PatchProjectsLocationsMeshesResponse,
  PatchProjectsLocationsMeshesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMeshesRequest,
  output: PatchProjectsLocationsMeshesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsMeshesRequest {
  /** Required. A name of the Mesh to delete. Must be in the format `projects/* /locations/* /meshes/*`. */
  name: string;
}

export const DeleteProjectsLocationsMeshesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsMeshesRequest>;

export type DeleteProjectsLocationsMeshesResponse = Operation;
export const DeleteProjectsLocationsMeshesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsMeshesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Mesh. */
export const deleteProjectsLocationsMeshes: API.OperationMethod<
  DeleteProjectsLocationsMeshesRequest,
  DeleteProjectsLocationsMeshesResponse,
  DeleteProjectsLocationsMeshesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMeshesRequest,
  output: DeleteProjectsLocationsMeshesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMeshesRouteViewsRequest {
  /** Required. The Mesh to which a Route is associated. Format: projects/{project_number}/locations/{location}/meshes/{mesh} */
  parent: string;
  /** The value returned by the last `ListMeshRouteViewsResponse` Indicates that this is a continuation of a prior `ListMeshRouteViews` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Maximum number of MeshRouteViews to return per call. */
  pageSize?: number;
}

export const ListProjectsLocationsMeshesRouteViewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/routeViews" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMeshesRouteViewsRequest>;

export type ListProjectsLocationsMeshesRouteViewsResponse =
  ListMeshRouteViewsResponse;
export const ListProjectsLocationsMeshesRouteViewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMeshRouteViewsResponse;

export type ListProjectsLocationsMeshesRouteViewsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists RouteViews */
export const listProjectsLocationsMeshesRouteViews: API.PaginatedOperationMethod<
  ListProjectsLocationsMeshesRouteViewsRequest,
  ListProjectsLocationsMeshesRouteViewsResponse,
  ListProjectsLocationsMeshesRouteViewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMeshesRouteViewsRequest,
  output: ListProjectsLocationsMeshesRouteViewsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsMeshesRouteViewsRequest {
  /** Required. Name of the MeshRouteView resource. Format: projects/{project_number}/locations/{location}/meshes/{mesh}/routeViews/{route_view} */
  name: string;
}

export const GetProjectsLocationsMeshesRouteViewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMeshesRouteViewsRequest>;

export type GetProjectsLocationsMeshesRouteViewsResponse = MeshRouteView;
export const GetProjectsLocationsMeshesRouteViewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MeshRouteView;

export type GetProjectsLocationsMeshesRouteViewsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a single RouteView of a Mesh. */
export const getProjectsLocationsMeshesRouteViews: API.OperationMethod<
  GetProjectsLocationsMeshesRouteViewsRequest,
  GetProjectsLocationsMeshesRouteViewsResponse,
  GetProjectsLocationsMeshesRouteViewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMeshesRouteViewsRequest,
  output: GetProjectsLocationsMeshesRouteViewsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsHttpRoutesRequest {
  /** The value returned by the last `ListHttpRoutesResponse` Indicates that this is a continuation of a prior `ListHttpRoutes` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail. */
  returnPartialSuccess?: boolean;
  /** Required. The project and location from which the HttpRoutes should be listed, specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Maximum number of HttpRoutes to return per call. */
  pageSize?: number;
  /** Optional. Filter expression to restrict the list. */
  filter?: string;
}

export const ListProjectsLocationsHttpRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/httpRoutes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsHttpRoutesRequest>;

export type ListProjectsLocationsHttpRoutesResponse = ListHttpRoutesResponse;
export const ListProjectsLocationsHttpRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListHttpRoutesResponse;

export type ListProjectsLocationsHttpRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists HttpRoute in a given project and location. */
export const listProjectsLocationsHttpRoutes: API.PaginatedOperationMethod<
  ListProjectsLocationsHttpRoutesRequest,
  ListProjectsLocationsHttpRoutesResponse,
  ListProjectsLocationsHttpRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsHttpRoutesRequest,
  output: ListProjectsLocationsHttpRoutesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsHttpRoutesRequest {
  /** Required. Short name of the HttpRoute resource to be created. */
  httpRouteId?: string;
  /** Required. The parent resource of the HttpRoute. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. Idempotent request UUID. */
  requestId?: string;
  /** Request body */
  body?: HttpRoute;
}

export const CreateProjectsLocationsHttpRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    httpRouteId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("httpRouteId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(HttpRoute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/httpRoutes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsHttpRoutesRequest>;

export type CreateProjectsLocationsHttpRoutesResponse = Operation;
export const CreateProjectsLocationsHttpRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsHttpRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new HttpRoute in a given project and location. */
export const createProjectsLocationsHttpRoutes: API.OperationMethod<
  CreateProjectsLocationsHttpRoutesRequest,
  CreateProjectsLocationsHttpRoutesResponse,
  CreateProjectsLocationsHttpRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsHttpRoutesRequest,
  output: CreateProjectsLocationsHttpRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsHttpRoutesRequest {
  /** Identifier. Name of the HttpRoute resource. It matches pattern `projects/* /locations/* /httpRoutes/http_route_name>`. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the HttpRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: HttpRoute;
}

export const PatchProjectsLocationsHttpRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(HttpRoute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsHttpRoutesRequest>;

export type PatchProjectsLocationsHttpRoutesResponse = Operation;
export const PatchProjectsLocationsHttpRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsHttpRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single HttpRoute. */
export const patchProjectsLocationsHttpRoutes: API.OperationMethod<
  PatchProjectsLocationsHttpRoutesRequest,
  PatchProjectsLocationsHttpRoutesResponse,
  PatchProjectsLocationsHttpRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsHttpRoutesRequest,
  output: PatchProjectsLocationsHttpRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsHttpRoutesRequest {
  /** Required. A name of the HttpRoute to delete. Must be in the format `projects/* /locations/* /httpRoutes/*`. */
  name: string;
}

export const DeleteProjectsLocationsHttpRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsHttpRoutesRequest>;

export type DeleteProjectsLocationsHttpRoutesResponse = Operation;
export const DeleteProjectsLocationsHttpRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsHttpRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single HttpRoute. */
export const deleteProjectsLocationsHttpRoutes: API.OperationMethod<
  DeleteProjectsLocationsHttpRoutesRequest,
  DeleteProjectsLocationsHttpRoutesResponse,
  DeleteProjectsLocationsHttpRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsHttpRoutesRequest,
  output: DeleteProjectsLocationsHttpRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsHttpRoutesRequest {
  /** Required. A name of the HttpRoute to get. Must be in the format `projects/* /locations/* /httpRoutes/*`. */
  name: string;
}

export const GetProjectsLocationsHttpRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsHttpRoutesRequest>;

export type GetProjectsLocationsHttpRoutesResponse = HttpRoute;
export const GetProjectsLocationsHttpRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpRoute;

export type GetProjectsLocationsHttpRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single HttpRoute. */
export const getProjectsLocationsHttpRoutes: API.OperationMethod<
  GetProjectsLocationsHttpRoutesRequest,
  GetProjectsLocationsHttpRoutesResponse,
  GetProjectsLocationsHttpRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsHttpRoutesRequest,
  output: GetProjectsLocationsHttpRoutesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsTcpRoutesRequest {
  /** Identifier. Name of the TcpRoute resource. It matches pattern `projects/* /locations/* /tcpRoutes/tcp_route_name>`. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the TcpRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: TcpRoute;
}

export const PatchProjectsLocationsTcpRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(TcpRoute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTcpRoutesRequest>;

export type PatchProjectsLocationsTcpRoutesResponse = Operation;
export const PatchProjectsLocationsTcpRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsTcpRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single TcpRoute. */
export const patchProjectsLocationsTcpRoutes: API.OperationMethod<
  PatchProjectsLocationsTcpRoutesRequest,
  PatchProjectsLocationsTcpRoutesResponse,
  PatchProjectsLocationsTcpRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTcpRoutesRequest,
  output: PatchProjectsLocationsTcpRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsTcpRoutesRequest {
  /** Required. A name of the TcpRoute to delete. Must be in the format `projects/* /locations/* /tcpRoutes/*`. */
  name: string;
}

export const DeleteProjectsLocationsTcpRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTcpRoutesRequest>;

export type DeleteProjectsLocationsTcpRoutesResponse = Operation;
export const DeleteProjectsLocationsTcpRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsTcpRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single TcpRoute. */
export const deleteProjectsLocationsTcpRoutes: API.OperationMethod<
  DeleteProjectsLocationsTcpRoutesRequest,
  DeleteProjectsLocationsTcpRoutesResponse,
  DeleteProjectsLocationsTcpRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTcpRoutesRequest,
  output: DeleteProjectsLocationsTcpRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsTcpRoutesRequest {
  /** Required. A name of the TcpRoute to get. Must be in the format `projects/* /locations/* /tcpRoutes/*`. */
  name: string;
}

export const GetProjectsLocationsTcpRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTcpRoutesRequest>;

export type GetProjectsLocationsTcpRoutesResponse = TcpRoute;
export const GetProjectsLocationsTcpRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TcpRoute;

export type GetProjectsLocationsTcpRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single TcpRoute. */
export const getProjectsLocationsTcpRoutes: API.OperationMethod<
  GetProjectsLocationsTcpRoutesRequest,
  GetProjectsLocationsTcpRoutesResponse,
  GetProjectsLocationsTcpRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTcpRoutesRequest,
  output: GetProjectsLocationsTcpRoutesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsTcpRoutesRequest {
  /** Maximum number of TcpRoutes to return per call. */
  pageSize?: number;
  /** Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail. */
  returnPartialSuccess?: boolean;
  /** The value returned by the last `ListTcpRoutesResponse` Indicates that this is a continuation of a prior `ListTcpRoutes` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. The project and location from which the TcpRoutes should be listed, specified in the format `projects/* /locations/*`. */
  parent: string;
}

export const ListProjectsLocationsTcpRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/tcpRoutes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTcpRoutesRequest>;

export type ListProjectsLocationsTcpRoutesResponse = ListTcpRoutesResponse;
export const ListProjectsLocationsTcpRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTcpRoutesResponse;

export type ListProjectsLocationsTcpRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists TcpRoute in a given project and location. */
export const listProjectsLocationsTcpRoutes: API.PaginatedOperationMethod<
  ListProjectsLocationsTcpRoutesRequest,
  ListProjectsLocationsTcpRoutesResponse,
  ListProjectsLocationsTcpRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTcpRoutesRequest,
  output: ListProjectsLocationsTcpRoutesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsTcpRoutesRequest {
  /** Required. The parent resource of the TcpRoute. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. Short name of the TcpRoute resource to be created. */
  tcpRouteId?: string;
  /** Request body */
  body?: TcpRoute;
}

export const CreateProjectsLocationsTcpRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    tcpRouteId: Schema.optional(Schema.String).pipe(T.HttpQuery("tcpRouteId")),
    body: Schema.optional(TcpRoute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/tcpRoutes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTcpRoutesRequest>;

export type CreateProjectsLocationsTcpRoutesResponse = Operation;
export const CreateProjectsLocationsTcpRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsTcpRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new TcpRoute in a given project and location. */
export const createProjectsLocationsTcpRoutes: API.OperationMethod<
  CreateProjectsLocationsTcpRoutesRequest,
  CreateProjectsLocationsTcpRoutesResponse,
  CreateProjectsLocationsTcpRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTcpRoutesRequest,
  output: CreateProjectsLocationsTcpRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsTlsRoutesRequest {
  /** Identifier. Name of the TlsRoute resource. It matches pattern `projects/* /locations/* /tlsRoutes/tls_route_name>`. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the TlsRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: TlsRoute;
}

export const PatchProjectsLocationsTlsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(TlsRoute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTlsRoutesRequest>;

export type PatchProjectsLocationsTlsRoutesResponse = Operation;
export const PatchProjectsLocationsTlsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsTlsRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single TlsRoute. */
export const patchProjectsLocationsTlsRoutes: API.OperationMethod<
  PatchProjectsLocationsTlsRoutesRequest,
  PatchProjectsLocationsTlsRoutesResponse,
  PatchProjectsLocationsTlsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTlsRoutesRequest,
  output: PatchProjectsLocationsTlsRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsTlsRoutesRequest {
  /** Required. A name of the TlsRoute to delete. Must be in the format `projects/* /locations/* /tlsRoutes/*`. */
  name: string;
}

export const DeleteProjectsLocationsTlsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTlsRoutesRequest>;

export type DeleteProjectsLocationsTlsRoutesResponse = Operation;
export const DeleteProjectsLocationsTlsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsTlsRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single TlsRoute. */
export const deleteProjectsLocationsTlsRoutes: API.OperationMethod<
  DeleteProjectsLocationsTlsRoutesRequest,
  DeleteProjectsLocationsTlsRoutesResponse,
  DeleteProjectsLocationsTlsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTlsRoutesRequest,
  output: DeleteProjectsLocationsTlsRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsTlsRoutesRequest {
  /** Required. A name of the TlsRoute to get. Must be in the format `projects/* /locations/* /tlsRoutes/*`. */
  name: string;
}

export const GetProjectsLocationsTlsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTlsRoutesRequest>;

export type GetProjectsLocationsTlsRoutesResponse = TlsRoute;
export const GetProjectsLocationsTlsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TlsRoute;

export type GetProjectsLocationsTlsRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single TlsRoute. */
export const getProjectsLocationsTlsRoutes: API.OperationMethod<
  GetProjectsLocationsTlsRoutesRequest,
  GetProjectsLocationsTlsRoutesResponse,
  GetProjectsLocationsTlsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTlsRoutesRequest,
  output: GetProjectsLocationsTlsRoutesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsTlsRoutesRequest {
  /** Maximum number of TlsRoutes to return per call. */
  pageSize?: number;
  /** Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail. */
  returnPartialSuccess?: boolean;
  /** The value returned by the last `ListTlsRoutesResponse` Indicates that this is a continuation of a prior `ListTlsRoutes` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. The project and location from which the TlsRoutes should be listed, specified in the format `projects/* /locations/*`. */
  parent: string;
}

export const ListProjectsLocationsTlsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/tlsRoutes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTlsRoutesRequest>;

export type ListProjectsLocationsTlsRoutesResponse = ListTlsRoutesResponse;
export const ListProjectsLocationsTlsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTlsRoutesResponse;

export type ListProjectsLocationsTlsRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists TlsRoute in a given project and location. */
export const listProjectsLocationsTlsRoutes: API.PaginatedOperationMethod<
  ListProjectsLocationsTlsRoutesRequest,
  ListProjectsLocationsTlsRoutesResponse,
  ListProjectsLocationsTlsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTlsRoutesRequest,
  output: ListProjectsLocationsTlsRoutesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsTlsRoutesRequest {
  /** Required. The parent resource of the TlsRoute. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. Short name of the TlsRoute resource to be created. */
  tlsRouteId?: string;
  /** Request body */
  body?: TlsRoute;
}

export const CreateProjectsLocationsTlsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    tlsRouteId: Schema.optional(Schema.String).pipe(T.HttpQuery("tlsRouteId")),
    body: Schema.optional(TlsRoute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/tlsRoutes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTlsRoutesRequest>;

export type CreateProjectsLocationsTlsRoutesResponse = Operation;
export const CreateProjectsLocationsTlsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsTlsRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new TlsRoute in a given project and location. */
export const createProjectsLocationsTlsRoutes: API.OperationMethod<
  CreateProjectsLocationsTlsRoutesRequest,
  CreateProjectsLocationsTlsRoutesResponse,
  CreateProjectsLocationsTlsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTlsRoutesRequest,
  output: CreateProjectsLocationsTlsRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsEdgeCacheServicesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsEdgeCacheServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsEdgeCacheServicesRequest>;

export type TestIamPermissionsProjectsLocationsEdgeCacheServicesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsEdgeCacheServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsEdgeCacheServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsEdgeCacheServices: API.OperationMethod<
  TestIamPermissionsProjectsLocationsEdgeCacheServicesRequest,
  TestIamPermissionsProjectsLocationsEdgeCacheServicesResponse,
  TestIamPermissionsProjectsLocationsEdgeCacheServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsEdgeCacheServicesRequest,
  output: TestIamPermissionsProjectsLocationsEdgeCacheServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsEdgeCacheServicesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsEdgeCacheServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsEdgeCacheServicesRequest>;

export type SetIamPolicyProjectsLocationsEdgeCacheServicesResponse = Policy;
export const SetIamPolicyProjectsLocationsEdgeCacheServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsEdgeCacheServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsEdgeCacheServices: API.OperationMethod<
  SetIamPolicyProjectsLocationsEdgeCacheServicesRequest,
  SetIamPolicyProjectsLocationsEdgeCacheServicesResponse,
  SetIamPolicyProjectsLocationsEdgeCacheServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsEdgeCacheServicesRequest,
  output: SetIamPolicyProjectsLocationsEdgeCacheServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsEdgeCacheServicesRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsEdgeCacheServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsEdgeCacheServicesRequest>;

export type GetIamPolicyProjectsLocationsEdgeCacheServicesResponse = Policy;
export const GetIamPolicyProjectsLocationsEdgeCacheServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsEdgeCacheServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsEdgeCacheServices: API.OperationMethod<
  GetIamPolicyProjectsLocationsEdgeCacheServicesRequest,
  GetIamPolicyProjectsLocationsEdgeCacheServicesResponse,
  GetIamPolicyProjectsLocationsEdgeCacheServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsEdgeCacheServicesRequest,
  output: GetIamPolicyProjectsLocationsEdgeCacheServicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsEdgeCacheOriginsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsEdgeCacheOriginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsEdgeCacheOriginsRequest>;

export type SetIamPolicyProjectsLocationsEdgeCacheOriginsResponse = Policy;
export const SetIamPolicyProjectsLocationsEdgeCacheOriginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsEdgeCacheOriginsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsEdgeCacheOrigins: API.OperationMethod<
  SetIamPolicyProjectsLocationsEdgeCacheOriginsRequest,
  SetIamPolicyProjectsLocationsEdgeCacheOriginsResponse,
  SetIamPolicyProjectsLocationsEdgeCacheOriginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsEdgeCacheOriginsRequest,
  output: SetIamPolicyProjectsLocationsEdgeCacheOriginsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsEdgeCacheOriginsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsEdgeCacheOriginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsEdgeCacheOriginsRequest>;

export type GetIamPolicyProjectsLocationsEdgeCacheOriginsResponse = Policy;
export const GetIamPolicyProjectsLocationsEdgeCacheOriginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsEdgeCacheOriginsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsEdgeCacheOrigins: API.OperationMethod<
  GetIamPolicyProjectsLocationsEdgeCacheOriginsRequest,
  GetIamPolicyProjectsLocationsEdgeCacheOriginsResponse,
  GetIamPolicyProjectsLocationsEdgeCacheOriginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsEdgeCacheOriginsRequest,
  output: GetIamPolicyProjectsLocationsEdgeCacheOriginsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsEdgeCacheOriginsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsEdgeCacheOriginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsEdgeCacheOriginsRequest>;

export type TestIamPermissionsProjectsLocationsEdgeCacheOriginsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsEdgeCacheOriginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsEdgeCacheOriginsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsEdgeCacheOrigins: API.OperationMethod<
  TestIamPermissionsProjectsLocationsEdgeCacheOriginsRequest,
  TestIamPermissionsProjectsLocationsEdgeCacheOriginsResponse,
  TestIamPermissionsProjectsLocationsEdgeCacheOriginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsEdgeCacheOriginsRequest,
  output: TestIamPermissionsProjectsLocationsEdgeCacheOriginsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
