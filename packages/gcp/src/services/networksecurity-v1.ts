// ==========================================================================
// Network Security API (networksecurity v1)
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
  name: "networksecurity",
  version: "v1",
  rootUrl: "https://networksecurity.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface HttpHeaderMatch {
  /** Required. The value of the header must match the regular expression specified in regexMatch. For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header's port specifier. */
  regexMatch?: string;
  /** Required. The name of the HTTP header to match. For matching against the HTTP request's authority, use a headerMatch with the header name ":authority". For matching a request's method, use the headerName ":method". */
  headerName?: string;
}

export const HttpHeaderMatch: Schema.Schema<HttpHeaderMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regexMatch: Schema.optional(Schema.String),
    headerName: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpHeaderMatch" });

export interface Destination {
  /** Required. List of host names to match. Matched against the ":authority" header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example "mydomain.*") or a suffix match (example "*.myorg.com") or a presence (any) match "*". */
  hosts?: ReadonlyArray<string>;
  /** Required. List of destination ports to match. At least one port should match. */
  ports?: ReadonlyArray<number>;
  /** Optional. A list of HTTP methods to match. At least one method should match. Should not be set for gRPC services. */
  methods?: ReadonlyArray<string>;
  /** Optional. Match against key:value pair in http header. Provides a flexible match based on HTTP headers, for potentially advanced use cases. At least one header should match. Avoid using header matches to make authorization decisions unless there is a strong guarantee that requests arrive through a trusted client or proxy. */
  httpHeaderMatch?: HttpHeaderMatch;
}

export const Destination: Schema.Schema<Destination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hosts: Schema.optional(Schema.Array(Schema.String)),
    ports: Schema.optional(Schema.Array(Schema.Number)),
    methods: Schema.optional(Schema.Array(Schema.String)),
    httpHeaderMatch: Schema.optional(HttpHeaderMatch),
  }).annotate({ identifier: "Destination" });

export interface InterceptLocation {
  /** Output only. The cloud location, e.g. "us-central1-a" or "asia-south1". */
  location?: string;
  /** Output only. The current state of the association in this location. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "OUT_OF_SYNC" | (string & {});
}

export const InterceptLocation: Schema.Schema<InterceptLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterceptLocation" });

export interface InterceptEndpointGroupConnectedDeploymentGroup {
  /** Output only. The connected deployment group's resource name, for example: `projects/123456789/locations/global/interceptDeploymentGroups/my-dg`. See https://google.aip.dev/124. */
  name?: string;
  /** Output only. The list of locations where the deployment group is present. */
  locations?: ReadonlyArray<InterceptLocation>;
}

export const InterceptEndpointGroupConnectedDeploymentGroup: Schema.Schema<InterceptEndpointGroupConnectedDeploymentGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(InterceptLocation)),
  }).annotate({ identifier: "InterceptEndpointGroupConnectedDeploymentGroup" });

export interface GoogleIamV1TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const GoogleIamV1TestIamPermissionsResponse: Schema.Schema<GoogleIamV1TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1TestIamPermissionsResponse" });

export interface AddressGroup {
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Optional. List of items. */
  items?: ReadonlyArray<string>;
  /** Required. Capacity of the Address Group */
  capacity?: number;
  /** Optional. List of supported purposes of the Address Group. */
  purpose?: ReadonlyArray<
    "PURPOSE_UNSPECIFIED" | "DEFAULT" | "CLOUD_ARMOR" | (string & {})
  >;
  /** Optional. Set of label tags associated with the AddressGroup resource. */
  labels?: Record<string, string>;
  /** Required. Name of the AddressGroup resource. It matches pattern `projects/* /locations/{location}/addressGroups/`. */
  name?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
  /** Output only. Server-defined fully-qualified URL for this resource. */
  selfLink?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Required. The type of the Address Group. Possible values are "IPv4" or "IPV6". */
  type?: "TYPE_UNSPECIFIED" | "IPV4" | "IPV6" | (string & {});
}

export const AddressGroup: Schema.Schema<AddressGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Schema.String)),
    capacity: Schema.optional(Schema.Number),
    purpose: Schema.optional(Schema.Array(Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddressGroup" });

export interface ListAddressGroupsResponse {
  /** List of AddressGroups resources. */
  addressGroups?: ReadonlyArray<AddressGroup>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListAddressGroupsResponse: Schema.Schema<ListAddressGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressGroups: Schema.optional(Schema.Array(AddressGroup)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListAddressGroupsResponse" });

export interface AuthzPolicyTarget {
  /** Optional. All gateways and forwarding rules referenced by this policy and extensions must share the same load balancing scheme. Required only when targeting forwarding rules. If targeting Secure Web Proxy, this field must be `INTERNAL_MANAGED` or not specified. Must not be specified when targeting Agent Gateway. Supported values: `INTERNAL_MANAGED` and `EXTERNAL_MANAGED`. For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). */
  loadBalancingScheme?:
    | "LOAD_BALANCING_SCHEME_UNSPECIFIED"
    | "INTERNAL_MANAGED"
    | "EXTERNAL_MANAGED"
    | "INTERNAL_SELF_MANAGED"
    | (string & {});
  /** Required. A list of references to the Forwarding Rules, Secure Web Proxy Gateways, or Agent Gateways on which this policy will be applied. */
  resources?: ReadonlyArray<string>;
}

export const AuthzPolicyTarget: Schema.Schema<AuthzPolicyTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancingScheme: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AuthzPolicyTarget" });

export interface AuthzPolicyCustomProviderCloudIap {}

export const AuthzPolicyCustomProviderCloudIap: Schema.Schema<AuthzPolicyCustomProviderCloudIap> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AuthzPolicyCustomProviderCloudIap",
  });

export interface AuthzPolicyCustomProviderAuthzExtension {
  /** Required. A list of references to authorization extensions that will be invoked for requests matching this policy. Limited to 1 custom provider. */
  resources?: ReadonlyArray<string>;
}

export const AuthzPolicyCustomProviderAuthzExtension: Schema.Schema<AuthzPolicyCustomProviderAuthzExtension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AuthzPolicyCustomProviderAuthzExtension" });

export interface AuthzPolicyCustomProvider {
  /** Optional. Delegates authorization decisions to Cloud IAP. Applicable only for managed load balancers. Enabling Cloud IAP at the AuthzPolicy level is not compatible with Cloud IAP settings in the BackendService. Enabling IAP in both places will result in request failure. Ensure that IAP is enabled in either the AuthzPolicy or the BackendService but not in both places. */
  cloudIap?: AuthzPolicyCustomProviderCloudIap;
  /** Optional. Delegate authorization decision to user authored Service Extension. Only one of cloudIap or authzExtension can be specified. */
  authzExtension?: AuthzPolicyCustomProviderAuthzExtension;
}

export const AuthzPolicyCustomProvider: Schema.Schema<AuthzPolicyCustomProvider> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudIap: Schema.optional(AuthzPolicyCustomProviderCloudIap),
    authzExtension: Schema.optional(AuthzPolicyCustomProviderAuthzExtension),
  }).annotate({ identifier: "AuthzPolicyCustomProvider" });

export interface AuthzPolicyAuthzRuleStringMatch {
  /** The input string must match exactly the string specified here. Examples: * ``abc`` only matches the value ``abc``. */
  exact?: string;
  /** The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * ``abc`` matches the value ``abc.xyz`` */
  prefix?: string;
  /** The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead. Examples: * ``abc`` matches the value ``xyz.abc.def`` */
  contains?: string;
  /** The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * ``abc`` matches the value ``xyz.abc`` */
  suffix?: string;
  /** If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher ``data`` will match both input string ``Data`` and ``data`` if set to true. */
  ignoreCase?: boolean;
}

export const AuthzPolicyAuthzRuleStringMatch: Schema.Schema<AuthzPolicyAuthzRuleStringMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exact: Schema.optional(Schema.String),
    prefix: Schema.optional(Schema.String),
    contains: Schema.optional(Schema.String),
    suffix: Schema.optional(Schema.String),
    ignoreCase: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleStringMatch" });

export interface AuthzPolicyAuthzRulePrincipal {
  /** Required. A non-empty string whose value is matched against the principal value based on the principal_selector. Only exact match can be applied for CLIENT_CERT_URI_SAN, CLIENT_CERT_DNS_NAME_SAN, CLIENT_CERT_COMMON_NAME selectors. */
  principal?: AuthzPolicyAuthzRuleStringMatch;
  /** Optional. An enum to decide what principal value the principal rule will match against. If not specified, the PrincipalSelector is CLIENT_CERT_URI_SAN. */
  principalSelector?:
    | "PRINCIPAL_SELECTOR_UNSPECIFIED"
    | "CLIENT_CERT_URI_SAN"
    | "CLIENT_CERT_DNS_NAME_SAN"
    | "CLIENT_CERT_COMMON_NAME"
    | (string & {});
}

export const AuthzPolicyAuthzRulePrincipal: Schema.Schema<AuthzPolicyAuthzRulePrincipal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principal: Schema.optional(AuthzPolicyAuthzRuleStringMatch),
    principalSelector: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthzPolicyAuthzRulePrincipal" });

export interface AuthzPolicyAuthzRuleIpBlock {
  /** Required. The length of the address range. */
  length?: number;
  /** Required. The address prefix. */
  prefix?: string;
}

export const AuthzPolicyAuthzRuleIpBlock: Schema.Schema<AuthzPolicyAuthzRuleIpBlock> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    length: Schema.optional(Schema.Number),
    prefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleIpBlock" });

export interface AuthzPolicyAuthzRuleRequestResourceTagValueIdSet {
  /** Required. A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. The match follows AND semantics which means all the ids must match. Limited to 5 ids in the Tag value id set. */
  ids?: ReadonlyArray<string>;
}

export const AuthzPolicyAuthzRuleRequestResourceTagValueIdSet: Schema.Schema<AuthzPolicyAuthzRuleRequestResourceTagValueIdSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ids: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "AuthzPolicyAuthzRuleRequestResourceTagValueIdSet",
  });

export interface AuthzPolicyAuthzRuleRequestResource {
  /** Optional. A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. */
  tagValueIdSet?: AuthzPolicyAuthzRuleRequestResourceTagValueIdSet;
  /** Optional. An IAM service account to match against the source service account of the VM sending the request. */
  iamServiceAccount?: AuthzPolicyAuthzRuleStringMatch;
}

export const AuthzPolicyAuthzRuleRequestResource: Schema.Schema<AuthzPolicyAuthzRuleRequestResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tagValueIdSet: Schema.optional(
      AuthzPolicyAuthzRuleRequestResourceTagValueIdSet,
    ),
    iamServiceAccount: Schema.optional(AuthzPolicyAuthzRuleStringMatch),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleRequestResource" });

export interface AuthzPolicyAuthzRuleFromRequestSource {
  /** Optional. A list of identities derived from the client's certificate. This field will not match on a request unless frontend mutual TLS is enabled for the forwarding rule or Gateway and the client certificate has been successfully validated by mTLS. Each identity is a string whose value is matched against a list of URI SANs, DNS Name SANs, or the common name in the client's certificate. A match happens when any principal matches with the rule. Limited to 50 principals per Authorization Policy for regional internal Application Load Balancers, regional external Application Load Balancers, cross-region internal Application Load Balancers, and Cloud Service Mesh. This field is not supported for global external Application Load Balancers. */
  principals?: ReadonlyArray<AuthzPolicyAuthzRulePrincipal>;
  /** Optional. A list of IP addresses or IP address ranges to match against the source IP address of the request. Limited to 10 ip_blocks per Authorization Policy */
  ipBlocks?: ReadonlyArray<AuthzPolicyAuthzRuleIpBlock>;
  /** Optional. A list of resources to match against the resource of the source VM of a request. Limited to 10 resources per Authorization Policy. */
  resources?: ReadonlyArray<AuthzPolicyAuthzRuleRequestResource>;
}

export const AuthzPolicyAuthzRuleFromRequestSource: Schema.Schema<AuthzPolicyAuthzRuleFromRequestSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principals: Schema.optional(Schema.Array(AuthzPolicyAuthzRulePrincipal)),
    ipBlocks: Schema.optional(Schema.Array(AuthzPolicyAuthzRuleIpBlock)),
    resources: Schema.optional(
      Schema.Array(AuthzPolicyAuthzRuleRequestResource),
    ),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleFromRequestSource" });

export interface AuthzPolicyAuthzRuleFrom {
  /** Optional. Describes the properties of a request's sources. At least one of sources or notSources must be specified. Limited to 1 source. A match occurs when ANY source (in sources or notSources) matches the request. Within a single source, the match follows AND semantics across fields and OR semantics within a single field, i.e. a match occurs when ANY principal matches AND ANY ipBlocks match. */
  sources?: ReadonlyArray<AuthzPolicyAuthzRuleFromRequestSource>;
  /** Optional. Describes the negated properties of request sources. Matches requests from sources that do not match the criteria specified in this field. At least one of sources or notSources must be specified. */
  notSources?: ReadonlyArray<AuthzPolicyAuthzRuleFromRequestSource>;
}

export const AuthzPolicyAuthzRuleFrom: Schema.Schema<AuthzPolicyAuthzRuleFrom> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(
      Schema.Array(AuthzPolicyAuthzRuleFromRequestSource),
    ),
    notSources: Schema.optional(
      Schema.Array(AuthzPolicyAuthzRuleFromRequestSource),
    ),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleFrom" });

export interface AuthzPolicyAuthzRuleHeaderMatch {
  /** Optional. Specifies the name of the header in the request. */
  name?: string;
  /** Optional. Specifies how the header match will be performed. */
  value?: AuthzPolicyAuthzRuleStringMatch;
}

export const AuthzPolicyAuthzRuleHeaderMatch: Schema.Schema<AuthzPolicyAuthzRuleHeaderMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(AuthzPolicyAuthzRuleStringMatch),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleHeaderMatch" });

export interface AuthzPolicyAuthzRuleToRequestOperationHeaderSet {
  /** Required. A list of headers to match against in http header. The match can be one of exact, prefix, suffix, or contains (substring match). The match follows AND semantics which means all the headers must match. Matches are always case sensitive unless the ignoreCase is set. Limited to 10 headers per Authorization Policy. */
  headers?: ReadonlyArray<AuthzPolicyAuthzRuleHeaderMatch>;
}

export const AuthzPolicyAuthzRuleToRequestOperationHeaderSet: Schema.Schema<AuthzPolicyAuthzRuleToRequestOperationHeaderSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headers: Schema.optional(Schema.Array(AuthzPolicyAuthzRuleHeaderMatch)),
  }).annotate({
    identifier: "AuthzPolicyAuthzRuleToRequestOperationHeaderSet",
  });

export interface AuthzPolicyAuthzRuleToRequestOperationMCPMethod {
  /** Optional. A list of MCP method parameters to match against. The match can be one of exact, prefix, suffix, or contains (substring match). Matches are always case sensitive unless the ignoreCase is set. Limited to 10 MCP method parameters per Authorization Policy. */
  params?: ReadonlyArray<AuthzPolicyAuthzRuleStringMatch>;
  /** Required. The MCP method to match against. Allowed values are as follows: 1. `tools`, `prompts`, `resources` - these will match against all sub methods under the respective methods. 2. `prompts/list`, `tools/list`, `resources/list`, `resources/templates/list` 3. `prompts/get`, `tools/call`, `resources/subscribe`, `resources/unsubscribe`, `resources/read` Params cannot be specified for categories 1 and 2. */
  name?: string;
}

export const AuthzPolicyAuthzRuleToRequestOperationMCPMethod: Schema.Schema<AuthzPolicyAuthzRuleToRequestOperationMCPMethod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    params: Schema.optional(Schema.Array(AuthzPolicyAuthzRuleStringMatch)),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "AuthzPolicyAuthzRuleToRequestOperationMCPMethod",
  });

export interface AuthzPolicyAuthzRuleToRequestOperationMCP {
  /** Optional. If specified, matches on the MCP protocol’s non-access specific methods namely: * initialize * completion/ * logging/ * notifications/ * ping Defaults to SKIP_BASE_PROTOCOL_METHODS if not specified. */
  baseProtocolMethodsOption?:
    | "BASE_PROTOCOL_METHODS_OPTION_UNSPECIFIED"
    | "SKIP_BASE_PROTOCOL_METHODS"
    | "MATCH_BASE_PROTOCOL_METHODS"
    | (string & {});
  /** Optional. A list of MCP methods and associated parameters to match on. It is recommended to use this field to match on tools, prompts and resource accesses while setting the baseProtocolMethodsOption to MATCH_BASE_PROTOCOL_METHODS to match on all the other MCP protocol methods. Limited to 10 MCP methods per Authorization Policy. */
  methods?: ReadonlyArray<AuthzPolicyAuthzRuleToRequestOperationMCPMethod>;
}

export const AuthzPolicyAuthzRuleToRequestOperationMCP: Schema.Schema<AuthzPolicyAuthzRuleToRequestOperationMCP> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baseProtocolMethodsOption: Schema.optional(Schema.String),
    methods: Schema.optional(
      Schema.Array(AuthzPolicyAuthzRuleToRequestOperationMCPMethod),
    ),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleToRequestOperationMCP" });

export interface AuthzPolicyAuthzRuleToRequestOperation {
  /** Optional. A list of HTTP methods to match against. Each entry must be a valid HTTP method name (GET, PUT, POST, HEAD, PATCH, DELETE, OPTIONS). It only allows exact match and is always case sensitive. Limited to 10 methods per Authorization Policy. */
  methods?: ReadonlyArray<string>;
  /** Optional. A list of headers to match against in http header. */
  headerSet?: AuthzPolicyAuthzRuleToRequestOperationHeaderSet;
  /** Optional. A list of HTTP Hosts to match against. The match can be one of exact, prefix, suffix, or contains (substring match). Matches are always case sensitive unless the ignoreCase is set. Limited to 10 hosts per Authorization Policy. */
  hosts?: ReadonlyArray<AuthzPolicyAuthzRuleStringMatch>;
  /** Optional. A list of paths to match against. The match can be one of exact, prefix, suffix, or contains (substring match). Matches are always case sensitive unless the ignoreCase is set. Limited to 10 paths per Authorization Policy. Note that this path match includes the query parameters. For gRPC services, this should be a fully-qualified name of the form /package.service/method. */
  paths?: ReadonlyArray<AuthzPolicyAuthzRuleStringMatch>;
  /** Optional. Defines the MCP protocol attributes to match on. If the MCP payload in the request body cannot be successfully parsed, the request will be denied. This field can be set only for AuthzPolicies targeting AgentGateway resources. */
  mcp?: AuthzPolicyAuthzRuleToRequestOperationMCP;
}

export const AuthzPolicyAuthzRuleToRequestOperation: Schema.Schema<AuthzPolicyAuthzRuleToRequestOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    methods: Schema.optional(Schema.Array(Schema.String)),
    headerSet: Schema.optional(AuthzPolicyAuthzRuleToRequestOperationHeaderSet),
    hosts: Schema.optional(Schema.Array(AuthzPolicyAuthzRuleStringMatch)),
    paths: Schema.optional(Schema.Array(AuthzPolicyAuthzRuleStringMatch)),
    mcp: Schema.optional(AuthzPolicyAuthzRuleToRequestOperationMCP),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleToRequestOperation" });

export interface AuthzPolicyAuthzRuleTo {
  /** Optional. Describes properties of one or more targets of a request. At least one of operations or notOperations must be specified. Limited to 1 operation. A match occurs when ANY operation (in operations or notOperations) matches. Within an operation, the match follows AND semantics across fields and OR semantics within a field, i.e. a match occurs when ANY path matches AND ANY header matches and ANY method matches. */
  operations?: ReadonlyArray<AuthzPolicyAuthzRuleToRequestOperation>;
  /** Optional. Describes the negated properties of the targets of a request. Matches requests for operations that do not match the criteria specified in this field. At least one of operations or notOperations must be specified. */
  notOperations?: ReadonlyArray<AuthzPolicyAuthzRuleToRequestOperation>;
}

export const AuthzPolicyAuthzRuleTo: Schema.Schema<AuthzPolicyAuthzRuleTo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(
      Schema.Array(AuthzPolicyAuthzRuleToRequestOperation),
    ),
    notOperations: Schema.optional(
      Schema.Array(AuthzPolicyAuthzRuleToRequestOperation),
    ),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleTo" });

export interface AuthzPolicyAuthzRule {
  /** Optional. Describes properties of a source of a request. */
  from?: AuthzPolicyAuthzRuleFrom;
  /** Optional. Describes properties of a target of a request. */
  to?: AuthzPolicyAuthzRuleTo;
  /** Optional. CEL expression that describes the conditions to be satisfied for the action. The result of the CEL expression is ANDed with the from and to. Refer to the CEL language reference for a list of available attributes. */
  when?: string;
}

export const AuthzPolicyAuthzRule: Schema.Schema<AuthzPolicyAuthzRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    from: Schema.optional(AuthzPolicyAuthzRuleFrom),
    to: Schema.optional(AuthzPolicyAuthzRuleTo),
    when: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthzPolicyAuthzRule" });

export interface AuthzPolicy {
  /** Required. Specifies the set of resources to which this policy should be applied to. */
  target?: AuthzPolicyTarget;
  /** Optional. Immutable. Defines the type of authorization being performed. If not specified, `REQUEST_AUTHZ` is applied. This field cannot be changed once AuthzPolicy is created. */
  policyProfile?:
    | "POLICY_PROFILE_UNSPECIFIED"
    | "REQUEST_AUTHZ"
    | "CONTENT_AUTHZ"
    | (string & {});
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Required if the action is `CUSTOM`. Allows delegating authorization decisions to Cloud IAP or to Service Extensions. One of `cloudIap` or `authzExtension` must be specified. */
  customProvider?: AuthzPolicyCustomProvider;
  /** Required. Can be one of `ALLOW`, `DENY`, `CUSTOM`. When the action is `CUSTOM`, `customProvider` must be specified. When the action is `ALLOW`, only requests matching the policy will be allowed. When the action is `DENY`, only requests matching the policy will be denied. When a request arrives, the policies are evaluated in the following order: 1. If there is a `CUSTOM` policy that matches the request, the `CUSTOM` policy is evaluated using the custom authorization providers and the request is denied if the provider rejects the request. 2. If there are any `DENY` policies that match the request, the request is denied. 3. If there are no `ALLOW` policies for the resource or if any of the `ALLOW` policies match the request, the request is allowed. 4. Else the request is denied by default if none of the configured AuthzPolicies with `ALLOW` action match the request. */
  action?:
    | "AUTHZ_ACTION_UNSPECIFIED"
    | "ALLOW"
    | "DENY"
    | "CUSTOM"
    | (string & {});
  /** Required. Identifier. Name of the `AuthzPolicy` resource in the following format: `projects/{project}/locations/{location}/authzPolicies/{authz_policy}`. */
  name?: string;
  /** Optional. A human-readable description of the resource. */
  description?: string;
  /** Optional. Set of labels associated with the `AuthzPolicy` resource. The format must comply with [the following requirements](/compute/docs/labeling-resources#requirements). */
  labels?: Record<string, string>;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Optional. A list of authorization HTTP rules to match against the incoming request. A policy match occurs when at least one HTTP rule matches the request or when no HTTP rules are specified in the policy. At least one HTTP Rule is required for Allow or Deny Action. Limited to 5 rules. */
  httpRules?: ReadonlyArray<AuthzPolicyAuthzRule>;
}

export const AuthzPolicy: Schema.Schema<AuthzPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(AuthzPolicyTarget),
    policyProfile: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    customProvider: Schema.optional(AuthzPolicyCustomProvider),
    action: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    httpRules: Schema.optional(Schema.Array(AuthzPolicyAuthzRule)),
  }).annotate({ identifier: "AuthzPolicy" });

export interface CertificateProviderInstance {
  /** Required. Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance. */
  pluginInstance?: string;
}

export const CertificateProviderInstance: Schema.Schema<CertificateProviderInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pluginInstance: Schema.optional(Schema.String),
  }).annotate({ identifier: "CertificateProviderInstance" });

export interface GoogleCloudNetworksecurityV1GrpcEndpoint {
  /** Required. The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". */
  targetUri?: string;
}

export const GoogleCloudNetworksecurityV1GrpcEndpoint: Schema.Schema<GoogleCloudNetworksecurityV1GrpcEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudNetworksecurityV1GrpcEndpoint" });

export interface GoogleCloudNetworksecurityV1CertificateProvider {
  /** The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information. */
  certificateProviderInstance?: CertificateProviderInstance;
  /** gRPC specific configuration to access the gRPC server to obtain the cert and private key. */
  grpcEndpoint?: GoogleCloudNetworksecurityV1GrpcEndpoint;
}

export const GoogleCloudNetworksecurityV1CertificateProvider: Schema.Schema<GoogleCloudNetworksecurityV1CertificateProvider> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateProviderInstance: Schema.optional(CertificateProviderInstance),
    grpcEndpoint: Schema.optional(GoogleCloudNetworksecurityV1GrpcEndpoint),
  }).annotate({
    identifier: "GoogleCloudNetworksecurityV1CertificateProvider",
  });

export interface ValidationCA {
  /** gRPC specific configuration to access the gRPC server to obtain the CA certificate. */
  grpcEndpoint?: GoogleCloudNetworksecurityV1GrpcEndpoint;
  /** The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information. */
  certificateProviderInstance?: CertificateProviderInstance;
}

export const ValidationCA: Schema.Schema<ValidationCA> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    grpcEndpoint: Schema.optional(GoogleCloudNetworksecurityV1GrpcEndpoint),
    certificateProviderInstance: Schema.optional(CertificateProviderInstance),
  }).annotate({ identifier: "ValidationCA" });

export interface ClientTlsPolicy {
  /** Required. Name of the ClientTlsPolicy resource. It matches the pattern `projects/{project}/locations/{location}/clientTlsPolicies/{client_tls_policy}` */
  name?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
  /** Optional. Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com". */
  sni?: string;
  /** Optional. Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS. */
  clientCertificate?: GoogleCloudNetworksecurityV1CertificateProvider;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate. */
  serverValidationCa?: ReadonlyArray<ValidationCA>;
  /** Optional. Set of label tags associated with the resource. */
  labels?: Record<string, string>;
}

export const ClientTlsPolicy: Schema.Schema<ClientTlsPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    sni: Schema.optional(Schema.String),
    clientCertificate: Schema.optional(
      GoogleCloudNetworksecurityV1CertificateProvider,
    ),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    serverValidationCa: Schema.optional(Schema.Array(ValidationCA)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ClientTlsPolicy" });

export interface ListClientTlsPoliciesResponse {
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** List of ClientTlsPolicy resources. */
  clientTlsPolicies?: ReadonlyArray<ClientTlsPolicy>;
}

export const ListClientTlsPoliciesResponse: Schema.Schema<ListClientTlsPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    clientTlsPolicies: Schema.optional(Schema.Array(ClientTlsPolicy)),
  }).annotate({ identifier: "ListClientTlsPoliciesResponse" });

export interface SeverityOverride {
  /** Required. Severity level to match. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "INFORMATIONAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Required. Threat action override. */
  action?:
    | "THREAT_ACTION_UNSPECIFIED"
    | "DEFAULT_ACTION"
    | "ALLOW"
    | "ALERT"
    | "DENY"
    | (string & {});
}

export const SeverityOverride: Schema.Schema<SeverityOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "SeverityOverride" });

export interface ThreatOverride {
  /** Required. Vendor-specific ID of a threat to override. */
  threatId?: string;
  /** Required. Threat action override. For some threat types, only a subset of actions applies. */
  action?:
    | "THREAT_ACTION_UNSPECIFIED"
    | "DEFAULT_ACTION"
    | "ALLOW"
    | "ALERT"
    | "DENY"
    | (string & {});
  /** Output only. Type of the threat (read only). */
  type?:
    | "THREAT_TYPE_UNSPECIFIED"
    | "UNKNOWN"
    | "VULNERABILITY"
    | "ANTIVIRUS"
    | "SPYWARE"
    | "DNS"
    | (string & {});
}

export const ThreatOverride: Schema.Schema<ThreatOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    threatId: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "ThreatOverride" });

export interface AntivirusOverride {
  /** Required. Threat action override. For some threat types, only a subset of actions applies. */
  action?:
    | "THREAT_ACTION_UNSPECIFIED"
    | "DEFAULT_ACTION"
    | "ALLOW"
    | "ALERT"
    | "DENY"
    | (string & {});
  /** Required. Protocol to match. */
  protocol?:
    | "PROTOCOL_UNSPECIFIED"
    | "SMTP"
    | "SMB"
    | "POP3"
    | "IMAP"
    | "HTTP2"
    | "HTTP"
    | "FTP"
    | (string & {});
}

export const AntivirusOverride: Schema.Schema<AntivirusOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
  }).annotate({ identifier: "AntivirusOverride" });

export interface ThreatPreventionProfile {
  /** Optional. Configuration for overriding threats actions by severity match. */
  severityOverrides?: ReadonlyArray<SeverityOverride>;
  /** Optional. Configuration for overriding threats actions by threat_id match. If a threat is matched both by configuration provided in severity_overrides and threat_overrides, the threat_overrides action is applied. */
  threatOverrides?: ReadonlyArray<ThreatOverride>;
  /** Optional. Configuration for overriding antivirus actions per protocol. */
  antivirusOverrides?: ReadonlyArray<AntivirusOverride>;
}

export const ThreatPreventionProfile: Schema.Schema<ThreatPreventionProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severityOverrides: Schema.optional(Schema.Array(SeverityOverride)),
    threatOverrides: Schema.optional(Schema.Array(ThreatOverride)),
    antivirusOverrides: Schema.optional(Schema.Array(AntivirusOverride)),
  }).annotate({ identifier: "ThreatPreventionProfile" });

export interface CustomMirroringProfile {
  /** Required. Immutable. The target MirroringEndpointGroup. When a mirroring rule with this security profile attached matches a packet, a replica will be mirrored to the location-local target in this group. */
  mirroringEndpointGroup?: string;
}

export const CustomMirroringProfile: Schema.Schema<CustomMirroringProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mirroringEndpointGroup: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomMirroringProfile" });

export interface CustomInterceptProfile {
  /** Required. The target InterceptEndpointGroup. When a firewall rule with this security profile attached matches a packet, the packet will be intercepted to the location-local target in this group. */
  interceptEndpointGroup?: string;
}

export const CustomInterceptProfile: Schema.Schema<CustomInterceptProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interceptEndpointGroup: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomInterceptProfile" });

export interface UrlFilter {
  /** Required. The priority of this filter within the URL Filtering Profile. Lower integers indicate higher priorities. The priority of a filter must be unique within a URL Filtering Profile. */
  priority?: number;
  /** Required. The action taken when this filter is applied. */
  filteringAction?:
    | "URL_FILTERING_ACTION_UNSPECIFIED"
    | "ALLOW"
    | "DENY"
    | (string & {});
  /** Required. The list of strings that a URL must match with for this filter to be applied. */
  urls?: ReadonlyArray<string>;
}

export const UrlFilter: Schema.Schema<UrlFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    priority: Schema.optional(Schema.Number),
    filteringAction: Schema.optional(Schema.String),
    urls: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "UrlFilter" });

export interface UrlFilteringProfile {
  /** Optional. The list of filtering configs in which each config defines an action to take for some URL match. */
  urlFilters?: ReadonlyArray<UrlFilter>;
}

export const UrlFilteringProfile: Schema.Schema<UrlFilteringProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    urlFilters: Schema.optional(Schema.Array(UrlFilter)),
  }).annotate({ identifier: "UrlFilteringProfile" });

export interface SecurityProfile {
  /** The threat prevention configuration for the SecurityProfile. */
  threatPreventionProfile?: ThreatPreventionProfile;
  /** Output only. Last resource update timestamp. */
  updateTime?: string;
  /** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** The custom Packet Mirroring v2 configuration for the SecurityProfile. */
  customMirroringProfile?: CustomMirroringProfile;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Immutable. Identifier. Name of the SecurityProfile resource. It matches pattern `projects|organizations/* /locations/{location}/securityProfiles/{security_profile}`. */
  name?: string;
  /** Optional. An optional description of the profile. Max length 512 characters. */
  description?: string;
  /** The custom TPPI configuration for the SecurityProfile. */
  customInterceptProfile?: CustomInterceptProfile;
  /** Immutable. The single ProfileType that the SecurityProfile resource configures. */
  type?:
    | "PROFILE_TYPE_UNSPECIFIED"
    | "THREAT_PREVENTION"
    | "CUSTOM_MIRRORING"
    | "CUSTOM_INTERCEPT"
    | "URL_FILTERING"
    | (string & {});
  /** Output only. Resource creation timestamp. */
  createTime?: string;
  /** The URL filtering configuration for the SecurityProfile. */
  urlFilteringProfile?: UrlFilteringProfile;
}

export const SecurityProfile: Schema.Schema<SecurityProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    threatPreventionProfile: Schema.optional(ThreatPreventionProfile),
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    customMirroringProfile: Schema.optional(CustomMirroringProfile),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    customInterceptProfile: Schema.optional(CustomInterceptProfile),
    type: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    urlFilteringProfile: Schema.optional(UrlFilteringProfile),
  }).annotate({ identifier: "SecurityProfile" });

export interface ListSecurityProfilesResponse {
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** List of SecurityProfile resources. */
  securityProfiles?: ReadonlyArray<SecurityProfile>;
}

export const ListSecurityProfilesResponse: Schema.Schema<ListSecurityProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    securityProfiles: Schema.optional(Schema.Array(SecurityProfile)),
  }).annotate({ identifier: "ListSecurityProfilesResponse" });

export interface MirroringEndpointGroupAssociationDetails {
  /** Output only. Most recent known state of the association. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "CLOSED"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Output only. The connected association's resource name, for example: `projects/123456789/locations/global/mirroringEndpointGroupAssociations/my-ega`. See https://google.aip.dev/124. */
  name?: string;
  /** Output only. The associated network, for example: projects/123456789/global/networks/my-network. See https://google.aip.dev/124. */
  network?: string;
}

export const MirroringEndpointGroupAssociationDetails: Schema.Schema<MirroringEndpointGroupAssociationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
  }).annotate({ identifier: "MirroringEndpointGroupAssociationDetails" });

export interface UrlList {
  /** Output only. Time when the security policy was updated. */
  updateTime?: string;
  /** Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
  /** Output only. Time when the security policy was created. */
  createTime?: string;
  /** Required. FQDNs and URLs. */
  values?: ReadonlyArray<string>;
}

export const UrlList: Schema.Schema<UrlList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "UrlList" });

export interface InterceptDeploymentGroupDeployment {
  /** Output only. The name of the Intercept Deployment, in the format: `projects/{project}/locations/{location}/interceptDeployments/{intercept_deployment}`. */
  name?: string;
  /** Output only. Most recent known state of the deployment. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
}

export const InterceptDeploymentGroupDeployment: Schema.Schema<InterceptDeploymentGroupDeployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterceptDeploymentGroupDeployment" });

export interface InterceptEndpointGroupAssociationLocationDetails {
  /** Output only. The cloud location, e.g. "us-central1-a" or "asia-south1". */
  location?: string;
  /** Output only. The current state of the association in this location. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "OUT_OF_SYNC" | (string & {});
}

export const InterceptEndpointGroupAssociationLocationDetails: Schema.Schema<InterceptEndpointGroupAssociationLocationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({
    identifier: "InterceptEndpointGroupAssociationLocationDetails",
  });

export interface InterceptEndpointGroupAssociation {
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This part of the normal operation (e.g. adding a new location to the target deployment group). See https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Output only. The list of locations where the association is configured. This information is retrieved from the linked endpoint group. */
  locations?: ReadonlyArray<InterceptLocation>;
  /** Output only. Current state of the endpoint group association. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "CLOSED"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Required. Immutable. The VPC network that is associated. for example: `projects/123456789/global/networks/my-network`. See https://google.aip.dev/124. */
  network?: string;
  /** Output only. Identifier used by the data-path. See the NSI GENEVE format for more details: https://docs.cloud.google.com/network-security-integration/docs/understand-geneve#network_id */
  networkCookie?: number;
  /** Output only. The list of locations where the association is present. This information is retrieved from the linked endpoint group, and not configured as part of the association itself. */
  locationsDetails?: ReadonlyArray<InterceptEndpointGroupAssociationLocationDetails>;
  /** Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/interceptEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Required. Immutable. The endpoint group that this association is connected to, for example: `projects/123456789/locations/global/interceptEndpointGroups/my-eg`. See https://google.aip.dev/124. */
  interceptEndpointGroup?: string;
}

export const InterceptEndpointGroupAssociation: Schema.Schema<InterceptEndpointGroupAssociation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reconciling: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(InterceptLocation)),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    networkCookie: Schema.optional(Schema.Number),
    locationsDetails: Schema.optional(
      Schema.Array(InterceptEndpointGroupAssociationLocationDetails),
    ),
    name: Schema.optional(Schema.String),
    interceptEndpointGroup: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterceptEndpointGroupAssociation" });

export interface ListInterceptEndpointGroupAssociationsResponse {
  /** The associations from the specified parent. */
  interceptEndpointGroupAssociations?: ReadonlyArray<InterceptEndpointGroupAssociation>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
}

export const ListInterceptEndpointGroupAssociationsResponse: Schema.Schema<ListInterceptEndpointGroupAssociationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interceptEndpointGroupAssociations: Schema.optional(
      Schema.Array(InterceptEndpointGroupAssociation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListInterceptEndpointGroupAssociationsResponse" });

export interface TlsInspectionPolicy {
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Optional. A TrustConfig resource used when making a connection to the TLS server. This is a relative resource path following the form "projects/{project}/locations/{location}/trustConfigs/{trust_config}". This is necessary to intercept TLS connections to servers with certificates signed by a private CA or self-signed certificates. Note that Secure Web Proxy does not yet honor this field. */
  trustConfig?: string;
  /** Optional. If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trust_config. These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trust_config will be accepted. This defaults to FALSE (use public CAs in addition to trust_config) for backwards compatibility, but trusting public root CAs is *not recommended* unless the traffic in question is outbound to public web servers. When possible, prefer setting this to "false" and explicitly specifying trusted CAs and certificates in a TrustConfig. Note that Secure Web Proxy does not yet honor this field. */
  excludePublicCaSet?: boolean;
  /** Required. A CA pool resource used to issue interception certificates. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}". */
  caPool?: string;
  /** Optional. List of custom TLS cipher suites selected. This field is valid only if the selected tls_feature_profile is CUSTOM. The compute.SslPoliciesService.ListAvailableFeatures method returns the set of features that can be specified in this list. Note that Secure Web Proxy does not yet honor this field. */
  customTlsFeatures?: ReadonlyArray<string>;
  /** Optional. Minimum TLS version that the firewall should use when negotiating connections with both clients and servers. If this is not set, then the default value is to allow the broadest set of clients and servers (TLS 1.0 or higher). Setting this to more restrictive values may improve security, but may also prevent the firewall from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. */
  minTlsVersion?:
    | "TLS_VERSION_UNSPECIFIED"
    | "TLS_1_0"
    | "TLS_1_1"
    | "TLS_1_2"
    | "TLS_1_3"
    | (string & {});
  /** Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy} tls_inspection_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
  /** Optional. The selected Profile. If this is not set, then the default value is to allow the broadest set of clients and servers ("PROFILE_COMPATIBLE"). Setting this to more restrictive values may improve security, but may also prevent the TLS inspection proxy from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. */
  tlsFeatureProfile?:
    | "PROFILE_UNSPECIFIED"
    | "PROFILE_COMPATIBLE"
    | "PROFILE_MODERN"
    | "PROFILE_RESTRICTED"
    | "PROFILE_CUSTOM"
    | (string & {});
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
}

export const TlsInspectionPolicy: Schema.Schema<TlsInspectionPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    trustConfig: Schema.optional(Schema.String),
    excludePublicCaSet: Schema.optional(Schema.Boolean),
    caPool: Schema.optional(Schema.String),
    customTlsFeatures: Schema.optional(Schema.Array(Schema.String)),
    minTlsVersion: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    tlsFeatureProfile: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TlsInspectionPolicy" });

export interface ListTlsInspectionPoliciesResponse {
  /** List of TlsInspectionPolicies resources. */
  tlsInspectionPolicies?: ReadonlyArray<TlsInspectionPolicy>;
  /** If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListTlsInspectionPoliciesResponse: Schema.Schema<ListTlsInspectionPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tlsInspectionPolicies: Schema.optional(Schema.Array(TlsInspectionPolicy)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListTlsInspectionPoliciesResponse" });

export interface CloneAddressGroupItemsRequest {
  /** Required. Source address group to clone items from. */
  sourceAddressGroup?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const CloneAddressGroupItemsRequest: Schema.Schema<CloneAddressGroupItemsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceAddressGroup: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloneAddressGroupItemsRequest" });

export interface MirroringLocation {
  /** Output only. The cloud location, e.g. "us-central1-a" or "asia-south1". */
  location?: string;
  /** Output only. The current state of the association in this location. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "OUT_OF_SYNC" | (string & {});
}

export const MirroringLocation: Schema.Schema<MirroringLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "MirroringLocation" });

export interface MirroringEndpointGroupAssociationLocationDetails {
  /** Output only. The current state of the association in this location. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "OUT_OF_SYNC" | (string & {});
  /** Output only. The cloud location, e.g. "us-central1-a" or "asia-south1". */
  location?: string;
}

export const MirroringEndpointGroupAssociationLocationDetails: Schema.Schema<MirroringEndpointGroupAssociationLocationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({
    identifier: "MirroringEndpointGroupAssociationLocationDetails",
  });

export interface MirroringEndpointGroupAssociation {
  /** Output only. Current state of the endpoint group association. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "CLOSED"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Output only. The list of locations where the association is configured. This information is retrieved from the linked endpoint group. */
  locations?: ReadonlyArray<MirroringLocation>;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Immutable. The endpoint group that this association is connected to, for example: `projects/123456789/locations/global/mirroringEndpointGroups/my-eg`. See https://google.aip.dev/124. */
  mirroringEndpointGroup?: string;
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This part of the normal operation (e.g. adding a new location to the target deployment group). See https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/mirroringEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Output only. The list of locations where the association is present. This information is retrieved from the linked endpoint group, and not configured as part of the association itself. */
  locationsDetails?: ReadonlyArray<MirroringEndpointGroupAssociationLocationDetails>;
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Immutable. The VPC network that is associated. for example: `projects/123456789/global/networks/my-network`. See https://google.aip.dev/124. */
  network?: string;
}

export const MirroringEndpointGroupAssociation: Schema.Schema<MirroringEndpointGroupAssociation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(MirroringLocation)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    mirroringEndpointGroup: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    locationsDetails: Schema.optional(
      Schema.Array(MirroringEndpointGroupAssociationLocationDetails),
    ),
    createTime: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
  }).annotate({ identifier: "MirroringEndpointGroupAssociation" });

export interface OperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OperationMetadata" });

export interface GoogleIamV1AuditLogConfig {
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

export const GoogleIamV1AuditLogConfig: Schema.Schema<GoogleIamV1AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logType: Schema.optional(Schema.String),
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1AuditLogConfig" });

export interface GoogleIamV1AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<GoogleIamV1AuditLogConfig>;
}

export const GoogleIamV1AuditConfig: Schema.Schema<GoogleIamV1AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(GoogleIamV1AuditLogConfig)),
  }).annotate({ identifier: "GoogleIamV1AuditConfig" });

export interface Location {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface MirroringDeployment {
  /** Output only. The current state of the deployment. See https://google.aip.dev/216. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This part of the normal operation (e.g. linking a new association to the parent group). See https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Immutable. Identifier. The resource name of this deployment, for example: `projects/123456789/locations/us-central1-a/mirroringDeployments/my-dep`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Optional. User-provided description of the deployment. Used as additional context for the deployment. */
  description?: string;
  /** Required. Immutable. The regional forwarding rule that fronts the mirroring collectors, for example: `projects/123456789/regions/us-central1/forwardingRules/my-rule`. See https://google.aip.dev/124. */
  forwardingRule?: string;
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Required. Immutable. The deployment group that this deployment is a part of, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/124. */
  mirroringDeploymentGroup?: string;
}

export const MirroringDeployment: Schema.Schema<MirroringDeployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    mirroringDeploymentGroup: Schema.optional(Schema.String),
  }).annotate({ identifier: "MirroringDeployment" });

export interface FirewallEndpointAssociation {
  /** Required. The URL of the FirewallEndpoint that is being associated. */
  firewallEndpoint?: string;
  /** Optional. Labels as key value pairs */
  labels?: Record<string, string>;
  /** Output only. Whether reconciling is in progress, recommended per https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Optional. Whether the association is disabled. True indicates that traffic won't be intercepted */
  disabled?: boolean;
  /** Output only. Current state of the association. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "INACTIVE"
    | "ORPHAN"
    | (string & {});
  /** Output only. Update time stamp */
  updateTime?: string;
  /** Optional. The URL of the TlsInspectionPolicy that is being associated. */
  tlsInspectionPolicy?: string;
  /** Output only. Create time stamp */
  createTime?: string;
  /** Required. The URL of the network that is being associated. */
  network?: string;
  /** Immutable. Identifier. name of resource */
  name?: string;
}

export const FirewallEndpointAssociation: Schema.Schema<FirewallEndpointAssociation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallEndpoint: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    reconciling: Schema.optional(Schema.Boolean),
    disabled: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    tlsInspectionPolicy: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "FirewallEndpointAssociation" });

export interface ListFirewallEndpointAssociationsResponse {
  /** The list of Association */
  firewallEndpointAssociations?: ReadonlyArray<FirewallEndpointAssociation>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListFirewallEndpointAssociationsResponse: Schema.Schema<ListFirewallEndpointAssociationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallEndpointAssociations: Schema.optional(
      Schema.Array(FirewallEndpointAssociation),
    ),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListFirewallEndpointAssociationsResponse" });

export interface MirroringEndpointGroupConnectedDeploymentGroup {
  /** Output only. The connected deployment group's resource name, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/124. */
  name?: string;
  /** Output only. The list of locations where the deployment group is present. */
  locations?: ReadonlyArray<MirroringLocation>;
}

export const MirroringEndpointGroupConnectedDeploymentGroup: Schema.Schema<MirroringEndpointGroupConnectedDeploymentGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(MirroringLocation)),
  }).annotate({ identifier: "MirroringEndpointGroupConnectedDeploymentGroup" });

export interface MirroringEndpointGroup {
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Output only. The current state of the endpoint group. See https://google.aip.dev/216. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CLOSED"
    | "CREATING"
    | "DELETING"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This is part of the normal operation (e.g. adding a new association to the group). See https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Immutable. Identifier. The resource name of this endpoint group, for example: `projects/123456789/locations/global/mirroringEndpointGroups/my-eg`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Output only. List of associations to this endpoint group. */
  associations?: ReadonlyArray<MirroringEndpointGroupAssociationDetails>;
  /** Optional. User-provided description of the endpoint group. Used as additional context for the endpoint group. */
  description?: string;
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Immutable. The deployment group that this DIRECT endpoint group is connected to, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/124. */
  mirroringDeploymentGroup?: string;
  /** Immutable. The type of the endpoint group. If left unspecified, defaults to DIRECT. */
  type?: "TYPE_UNSPECIFIED" | "DIRECT" | (string & {});
  /** Output only. List of details about the connected deployment groups to this endpoint group. */
  connectedDeploymentGroups?: ReadonlyArray<MirroringEndpointGroupConnectedDeploymentGroup>;
}

export const MirroringEndpointGroup: Schema.Schema<MirroringEndpointGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    associations: Schema.optional(
      Schema.Array(MirroringEndpointGroupAssociationDetails),
    ),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    mirroringDeploymentGroup: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    connectedDeploymentGroups: Schema.optional(
      Schema.Array(MirroringEndpointGroupConnectedDeploymentGroup),
    ),
  }).annotate({ identifier: "MirroringEndpointGroup" });

export interface ListMirroringEndpointGroupsResponse {
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
  /** The endpoint groups from the specified parent. */
  mirroringEndpointGroups?: ReadonlyArray<MirroringEndpointGroup>;
}

export const ListMirroringEndpointGroupsResponse: Schema.Schema<ListMirroringEndpointGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    mirroringEndpointGroups: Schema.optional(
      Schema.Array(MirroringEndpointGroup),
    ),
  }).annotate({ identifier: "ListMirroringEndpointGroupsResponse" });

export interface Source {
  /** Optional. List of CIDR ranges to match based on source IP address. At least one IP block should match. Single IP (e.g., "1.2.3.4") and CIDR (e.g., "1.2.3.0/24") are supported. Authorization based on source IP alone should be avoided. The IP addresses of any load balancers or proxies should be considered untrusted. */
  ipBlocks?: ReadonlyArray<string>;
  /** Optional. List of peer identities to match for authorization. At least one principal should match. Each peer can be an exact match, or a prefix match (example, "namespace/*") or a suffix match (example, "* /service-account") or a presence match "*". Authorization based on the principal name without certificate validation (configured by ServerTlsPolicy resource) is considered insecure. */
  principals?: ReadonlyArray<string>;
}

export const Source: Schema.Schema<Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipBlocks: Schema.optional(Schema.Array(Schema.String)),
    principals: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Source" });

export interface Expr {
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface GoogleIamV1Binding {
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
}

export const GoogleIamV1Binding: Schema.Schema<GoogleIamV1Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Expr),
    members: Schema.optional(Schema.Array(Schema.String)),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleIamV1Binding" });

export interface GoogleIamV1Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<GoogleIamV1Binding>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<GoogleIamV1AuditConfig>;
}

export const GoogleIamV1Policy: Schema.Schema<GoogleIamV1Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(GoogleIamV1Binding)),
    etag: Schema.optional(Schema.String),
    auditConfigs: Schema.optional(Schema.Array(GoogleIamV1AuditConfig)),
  }).annotate({ identifier: "GoogleIamV1Policy" });

export interface GoogleIamV1SetIamPolicyRequest {
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: GoogleIamV1Policy;
}

export const GoogleIamV1SetIamPolicyRequest: Schema.Schema<GoogleIamV1SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    policy: Schema.optional(GoogleIamV1Policy),
  }).annotate({ identifier: "GoogleIamV1SetIamPolicyRequest" });

export interface GoogleIamV1TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const GoogleIamV1TestIamPermissionsRequest: Schema.Schema<GoogleIamV1TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1TestIamPermissionsRequest" });

export interface FirewallEndpointAssociationReference {
  /** Output only. The resource name of the FirewallEndpointAssociation. Format: projects/{project}/locations/{location}/firewallEndpointAssociations/{id} */
  name?: string;
  /** Output only. The VPC network associated. Format: projects/{project}/global/networks/{name}. */
  network?: string;
}

export const FirewallEndpointAssociationReference: Schema.Schema<FirewallEndpointAssociationReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
  }).annotate({ identifier: "FirewallEndpointAssociationReference" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

export interface ListAddressGroupReferencesResponseAddressGroupReference {
  /** Rule priority of the FirewallPolicy that is using the Address Group. */
  rulePriority?: number;
  /** Cloud Armor SecurityPolicy that is using the Address Group. */
  securityPolicy?: string;
  /** FirewallPolicy that is using the Address Group. */
  firewallPolicy?: string;
}

export const ListAddressGroupReferencesResponseAddressGroupReference: Schema.Schema<ListAddressGroupReferencesResponseAddressGroupReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rulePriority: Schema.optional(Schema.Number),
    securityPolicy: Schema.optional(Schema.String),
    firewallPolicy: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ListAddressGroupReferencesResponseAddressGroupReference",
  });

export interface FirewallEndpointEndpointSettings {
  /** Optional. Immutable. Indicates whether Jumbo Frames are enabled. Default value is false. */
  jumboFramesEnabled?: boolean;
}

export const FirewallEndpointEndpointSettings: Schema.Schema<FirewallEndpointEndpointSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jumboFramesEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "FirewallEndpointEndpointSettings" });

export interface FirewallEndpoint {
  /** Output only. Current state of the endpoint. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "INACTIVE"
    | (string & {});
  /** Output only. List of FirewallEndpointAssociations that are associated to this endpoint. An association will only appear in this list after traffic routing is fully configured. */
  associations?: ReadonlyArray<FirewallEndpointAssociationReference>;
  /** Output only. Whether reconciling is in progress, recommended per https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Optional. Labels as key value pairs */
  labels?: Record<string, string>;
  /** Output only. [Output Only] Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Optional. Settings for the endpoint. */
  endpointSettings?: FirewallEndpointEndpointSettings;
  /** Output only. Update time stamp */
  updateTime?: string;
  /** Output only. Create time stamp. */
  createTime?: string;
  /** Optional. Project to charge for the deployed firewall endpoint. This field must be specified when creating the endpoint in the organization scope, and should be omitted otherwise. */
  billingProjectId?: string;
  /** Output only. List of networks that are associated with this endpoint in the local zone. This is a projection of the FirewallEndpointAssociations pointing at this endpoint. A network will only appear in this list after traffic routing is fully configured. Format: projects/{project}/global/networks/{name}. */
  associatedNetworks?: ReadonlyArray<string>;
  /** Output only. [Output Only] Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Immutable. Identifier. Name of resource. */
  name?: string;
  /** Optional. Description of the firewall endpoint. Max length 2048 characters. */
  description?: string;
}

export const FirewallEndpoint: Schema.Schema<FirewallEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    associations: Schema.optional(
      Schema.Array(FirewallEndpointAssociationReference),
    ),
    reconciling: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    endpointSettings: Schema.optional(FirewallEndpointEndpointSettings),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    billingProjectId: Schema.optional(Schema.String),
    associatedNetworks: Schema.optional(Schema.Array(Schema.String)),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "FirewallEndpoint" });

export interface ListFirewallEndpointsResponse {
  /** The list of Endpoint */
  firewallEndpoints?: ReadonlyArray<FirewallEndpoint>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListFirewallEndpointsResponse: Schema.Schema<ListFirewallEndpointsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallEndpoints: Schema.optional(Schema.Array(FirewallEndpoint)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListFirewallEndpointsResponse" });

export interface InterceptDeployment {
  /** Required. Immutable. The deployment group that this deployment is a part of, for example: `projects/123456789/locations/global/interceptDeploymentGroups/my-dg`. See https://google.aip.dev/124. */
  interceptDeploymentGroup?: string;
  /** Output only. The current state of the deployment. See https://google.aip.dev/216. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This part of the normal operation (e.g. linking a new association to the parent group). See https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Immutable. Identifier. The resource name of this deployment, for example: `projects/123456789/locations/us-central1-a/interceptDeployments/my-dep`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Optional. User-provided description of the deployment. Used as additional context for the deployment. */
  description?: string;
  /** Required. Immutable. The regional forwarding rule that fronts the interceptors, for example: `projects/123456789/regions/us-central1/forwardingRules/my-rule`. See https://google.aip.dev/124. */
  forwardingRule?: string;
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
}

export const InterceptDeployment: Schema.Schema<InterceptDeployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interceptDeploymentGroup: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterceptDeployment" });

export interface InterceptDeploymentGroupConnectedEndpointGroup {
  /** Output only. The connected endpoint group's resource name, for example: `projects/123456789/locations/global/interceptEndpointGroups/my-eg`. See https://google.aip.dev/124. */
  name?: string;
}

export const InterceptDeploymentGroupConnectedEndpointGroup: Schema.Schema<InterceptDeploymentGroupConnectedEndpointGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterceptDeploymentGroupConnectedEndpointGroup" });

export interface InterceptDeploymentGroup {
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This is part of the normal operation (e.g. adding a new deployment to the group) See https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Output only. The current state of the deployment group. See https://google.aip.dev/216. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | (string & {});
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Output only. The list of locations where the deployment group is present. */
  locations?: ReadonlyArray<InterceptLocation>;
  /** Output only. The list of Intercept Deployments that belong to this group. */
  nestedDeployments?: ReadonlyArray<InterceptDeploymentGroupDeployment>;
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Required. Immutable. The network that will be used for all child deployments, for example: `projects/{project}/global/networks/{network}`. See https://google.aip.dev/124. */
  network?: string;
  /** Output only. The list of endpoint groups that are connected to this resource. */
  connectedEndpointGroups?: ReadonlyArray<InterceptDeploymentGroupConnectedEndpointGroup>;
  /** Immutable. Identifier. The resource name of this deployment group, for example: `projects/123456789/locations/global/interceptDeploymentGroups/my-dg`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Optional. User-provided description of the deployment group. Used as additional context for the deployment group. */
  description?: string;
}

export const InterceptDeploymentGroup: Schema.Schema<InterceptDeploymentGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    reconciling: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(InterceptLocation)),
    nestedDeployments: Schema.optional(
      Schema.Array(InterceptDeploymentGroupDeployment),
    ),
    createTime: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    connectedEndpointGroups: Schema.optional(
      Schema.Array(InterceptDeploymentGroupConnectedEndpointGroup),
    ),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterceptDeploymentGroup" });

export interface ListInterceptDeploymentGroupsResponse {
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
  /** The deployment groups from the specified parent. */
  interceptDeploymentGroups?: ReadonlyArray<InterceptDeploymentGroup>;
}

export const ListInterceptDeploymentGroupsResponse: Schema.Schema<ListInterceptDeploymentGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    interceptDeploymentGroups: Schema.optional(
      Schema.Array(InterceptDeploymentGroup),
    ),
  }).annotate({ identifier: "ListInterceptDeploymentGroupsResponse" });

export interface Rule {
  /** Optional. List of attributes for the traffic source. All of the sources must match. A source is a match if both principals and ip_blocks match. If not set, the action specified in the 'action' field will be applied without any rule checks for the source. */
  sources?: ReadonlyArray<Source>;
  /** Optional. List of attributes for the traffic destination. All of the destinations must match. A destination is a match if a request matches all the specified hosts, ports, methods and headers. If not set, the action specified in the 'action' field will be applied without any rule checks for the destination. */
  destinations?: ReadonlyArray<Destination>;
}

export const Rule: Schema.Schema<Rule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(Schema.Array(Source)),
    destinations: Schema.optional(Schema.Array(Destination)),
  }).annotate({ identifier: "Rule" });

export interface MirroringDeploymentGroupConnectedEndpointGroup {
  /** Output only. The connected endpoint group's resource name, for example: `projects/123456789/locations/global/mirroringEndpointGroups/my-eg`. See https://google.aip.dev/124. */
  name?: string;
}

export const MirroringDeploymentGroupConnectedEndpointGroup: Schema.Schema<MirroringDeploymentGroupConnectedEndpointGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "MirroringDeploymentGroupConnectedEndpointGroup" });

export interface MirroringDeploymentGroupDeployment {
  /** Output only. The name of the Mirroring Deployment, in the format: `projects/{project}/locations/{location}/mirroringDeployments/{mirroring_deployment}`. */
  name?: string;
  /** Output only. Most recent known state of the deployment. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
}

export const MirroringDeploymentGroupDeployment: Schema.Schema<MirroringDeploymentGroupDeployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "MirroringDeploymentGroupDeployment" });

export interface MirroringDeploymentGroup {
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Required. Immutable. The network that will be used for all child deployments, for example: `projects/{project}/global/networks/{network}`. See https://google.aip.dev/124. */
  network?: string;
  /** Immutable. Identifier. The resource name of this deployment group, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Optional. User-provided description of the deployment group. Used as additional context for the deployment group. */
  description?: string;
  /** Output only. The list of endpoint groups that are connected to this resource. */
  connectedEndpointGroups?: ReadonlyArray<MirroringDeploymentGroupConnectedEndpointGroup>;
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This is part of the normal operation (e.g. adding a new deployment to the group) See https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Output only. The list of Mirroring Deployments that belong to this group. */
  nestedDeployments?: ReadonlyArray<MirroringDeploymentGroupDeployment>;
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Output only. The list of locations where the deployment group is present. */
  locations?: ReadonlyArray<MirroringLocation>;
  /** Output only. The current state of the deployment group. See https://google.aip.dev/216. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "CLOSED"
    | (string & {});
}

export const MirroringDeploymentGroup: Schema.Schema<MirroringDeploymentGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    connectedEndpointGroups: Schema.optional(
      Schema.Array(MirroringDeploymentGroupConnectedEndpointGroup),
    ),
    reconciling: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    nestedDeployments: Schema.optional(
      Schema.Array(MirroringDeploymentGroupDeployment),
    ),
    updateTime: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(MirroringLocation)),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "MirroringDeploymentGroup" });

export interface ListMirroringDeploymentGroupsResponse {
  /** The deployment groups from the specified parent. */
  mirroringDeploymentGroups?: ReadonlyArray<MirroringDeploymentGroup>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
}

export const ListMirroringDeploymentGroupsResponse: Schema.Schema<ListMirroringDeploymentGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mirroringDeploymentGroups: Schema.optional(
      Schema.Array(MirroringDeploymentGroup),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMirroringDeploymentGroupsResponse" });

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

export interface Operation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    done: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface InterceptEndpointGroupAssociationDetails {
  /** Output only. Most recent known state of the association. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "CLOSED"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Output only. The associated network, for example: projects/123456789/global/networks/my-network. See https://google.aip.dev/124. */
  network?: string;
  /** Output only. The connected association's resource name, for example: `projects/123456789/locations/global/interceptEndpointGroupAssociations/my-ega`. See https://google.aip.dev/124. */
  name?: string;
}

export const InterceptEndpointGroupAssociationDetails: Schema.Schema<InterceptEndpointGroupAssociationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterceptEndpointGroupAssociationDetails" });

export interface InterceptEndpointGroup {
  /** Output only. Details about the connected deployment group to this endpoint group. */
  connectedDeploymentGroup?: InterceptEndpointGroupConnectedDeploymentGroup;
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Immutable. Identifier. The resource name of this endpoint group, for example: `projects/123456789/locations/global/interceptEndpointGroups/my-eg`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Output only. List of associations to this endpoint group. */
  associations?: ReadonlyArray<InterceptEndpointGroupAssociationDetails>;
  /** Optional. User-provided description of the endpoint group. Used as additional context for the endpoint group. */
  description?: string;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This is part of the normal operation (e.g. adding a new association to the group). See https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Required. Immutable. The deployment group that this endpoint group is connected to, for example: `projects/123456789/locations/global/interceptDeploymentGroups/my-dg`. See https://google.aip.dev/124. */
  interceptDeploymentGroup?: string;
  /** Output only. The current state of the endpoint group. See https://google.aip.dev/216. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CLOSED"
    | "CREATING"
    | "DELETING"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
}

export const InterceptEndpointGroup: Schema.Schema<InterceptEndpointGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectedDeploymentGroup: Schema.optional(
      InterceptEndpointGroupConnectedDeploymentGroup,
    ),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    associations: Schema.optional(
      Schema.Array(InterceptEndpointGroupAssociationDetails),
    ),
    description: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    reconciling: Schema.optional(Schema.Boolean),
    interceptDeploymentGroup: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterceptEndpointGroup" });

export interface MTLSPolicy {
  /** When the client presents an invalid certificate or no certificate to the load balancer, the `client_validation_mode` specifies how the client connection is handled. Required if the policy is to be used with the Application Load Balancers. For Traffic Director it must be empty. */
  clientValidationMode?:
    | "CLIENT_VALIDATION_MODE_UNSPECIFIED"
    | "ALLOW_INVALID_OR_MISSING_CLIENT_CERT"
    | "REJECT_INVALID"
    | (string & {});
  /** Required if the policy is to be used with Traffic Director. For Application Load Balancers it must be empty. Defines the mechanism to obtain the Certificate Authority certificate to validate the client certificate. */
  clientValidationCa?: ReadonlyArray<ValidationCA>;
  /** Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with Application Load Balancers. */
  clientValidationTrustConfig?: string;
}

export const MTLSPolicy: Schema.Schema<MTLSPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientValidationMode: Schema.optional(Schema.String),
    clientValidationCa: Schema.optional(Schema.Array(ValidationCA)),
    clientValidationTrustConfig: Schema.optional(Schema.String),
  }).annotate({ identifier: "MTLSPolicy" });

export interface DnsThreatDetector {
  /** Output only. Update time stamp. */
  updateTime?: string;
  /** Immutable. Identifier. Name of the DnsThreatDetector resource. */
  name?: string;
  /** Optional. A list of network resource names which aren't monitored by this DnsThreatDetector. Example: `projects/PROJECT_ID/global/networks/NETWORK_NAME`. */
  excludedNetworks?: ReadonlyArray<string>;
  /** Optional. Any labels associated with the DnsThreatDetector, listed as key value pairs. */
  labels?: Record<string, string>;
  /** Required. The provider used for DNS threat analysis. */
  provider?: "PROVIDER_UNSPECIFIED" | "INFOBLOX" | (string & {});
  /** Output only. Create time stamp. */
  createTime?: string;
}

export const DnsThreatDetector: Schema.Schema<DnsThreatDetector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    excludedNetworks: Schema.optional(Schema.Array(Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    provider: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DnsThreatDetector" });

export interface ListDnsThreatDetectorsResponse {
  /** A token, which can be sent as `page_token`, to retrieve the next page. */
  nextPageToken?: string;
  /** Unordered list. Unreachable `DnsThreatDetector` resources. */
  unreachable?: ReadonlyArray<string>;
  /** The list of DnsThreatDetector resources. */
  dnsThreatDetectors?: ReadonlyArray<DnsThreatDetector>;
}

export const ListDnsThreatDetectorsResponse: Schema.Schema<ListDnsThreatDetectorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    dnsThreatDetectors: Schema.optional(Schema.Array(DnsThreatDetector)),
  }).annotate({ identifier: "ListDnsThreatDetectorsResponse" });

export interface SecurityProfileGroup {
  /** Output only. Identifier used by the data-path. Unique within {container, location}. */
  dataPathId?: string;
  /** Output only. Last resource update timestamp. */
  updateTime?: string;
  /** Optional. Reference to a SecurityProfile with the ThreatPrevention configuration. */
  threatPreventionProfile?: string;
  /** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Optional. Reference to a SecurityProfile with the CustomMirroring configuration. */
  customMirroringProfile?: string;
  /** Immutable. Identifier. Name of the SecurityProfileGroup resource. It matches pattern `projects|organizations/* /locations/{location}/securityProfileGroups/{security_profile_group}`. */
  name?: string;
  /** Optional. An optional description of the profile group. Max length 2048 characters. */
  description?: string;
  /** Optional. Reference to a SecurityProfile with the CustomIntercept configuration. */
  customInterceptProfile?: string;
  /** Output only. Resource creation timestamp. */
  createTime?: string;
  /** Optional. Reference to a SecurityProfile with the UrlFiltering configuration. */
  urlFilteringProfile?: string;
}

export const SecurityProfileGroup: Schema.Schema<SecurityProfileGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataPathId: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    threatPreventionProfile: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    customMirroringProfile: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    customInterceptProfile: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    urlFilteringProfile: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityProfileGroup" });

export interface AuthorizationPolicy {
  /** Optional. Set of label tags associated with the AuthorizationPolicy resource. */
  labels?: Record<string, string>;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. List of rules to match. Note that at least one of the rules must match in order for the action specified in the 'action' field to be taken. A rule is a match if there is a matching source and destination. If left blank, the action specified in the `action` field will be applied on every request. */
  rules?: ReadonlyArray<Rule>;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Required. The action to take when a rule match is found. Possible values are "ALLOW" or "DENY". */
  action?: "ACTION_UNSPECIFIED" | "ALLOW" | "DENY" | (string & {});
  /** Required. Name of the AuthorizationPolicy resource. It matches pattern `projects/{project}/locations/{location}/authorizationPolicies/`. */
  name?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
}

export const AuthorizationPolicy: Schema.Schema<AuthorizationPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    rules: Schema.optional(Schema.Array(Rule)),
    updateTime: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthorizationPolicy" });

export interface ListAuthorizationPoliciesResponse {
  /** List of AuthorizationPolicies resources. */
  authorizationPolicies?: ReadonlyArray<AuthorizationPolicy>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
}

export const ListAuthorizationPoliciesResponse: Schema.Schema<ListAuthorizationPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorizationPolicies: Schema.optional(Schema.Array(AuthorizationPolicy)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAuthorizationPoliciesResponse" });

export interface ServerTlsPolicy {
  /** This field is required if the policy is used with Application Load Balancers. This field can be empty for Traffic Director. Defines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. */
  mtlsPolicy?: MTLSPolicy;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Set of label tags associated with the resource. */
  labels?: Record<string, string>;
  /** Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/* /locations/{location}/serverTlsPolicies/{server_tls_policy}` */
  name?: string;
  /** Free-text description of the resource. */
  description?: string;
  /** Optional if policy is to be used with Traffic Director. For Application Load Balancers must be empty. Defines a mechanism to provision server identity (public and private keys). Cannot be combined with `allow_open` as a permissive mode that allows both plain text and TLS is not supported. */
  serverCertificate?: GoogleCloudNetworksecurityV1CertificateProvider;
  /** This field applies only for Traffic Director policies. It is must be set to false for Application Load Balancer policies. Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility. Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80. */
  allowOpen?: boolean;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
}

export const ServerTlsPolicy: Schema.Schema<ServerTlsPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mtlsPolicy: Schema.optional(MTLSPolicy),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    serverCertificate: Schema.optional(
      GoogleCloudNetworksecurityV1CertificateProvider,
    ),
    allowOpen: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServerTlsPolicy" });

export interface GatewaySecurityPolicy {
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy} gateway_security_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
  /** Optional. Name of a TLS Inspection Policy resource that defines how TLS inspection will be performed for any rule(s) which enables it. */
  tlsInspectionPolicy?: string;
}

export const GatewaySecurityPolicy: Schema.Schema<GatewaySecurityPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    tlsInspectionPolicy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GatewaySecurityPolicy" });

export interface GatewaySecurityPolicyRule {
  /** Optional. CEL expression for matching on L7/application level criteria. */
  applicationMatcher?: string;
  /** Required. CEL expression for matching on session criteria. */
  sessionMatcher?: string;
  /** Output only. Time when the rule was updated. */
  updateTime?: string;
  /** Required. Whether the rule is enforced. */
  enabled?: boolean;
  /** Required. Profile which tells what the primitive action should be. */
  basicProfile?: "BASIC_PROFILE_UNSPECIFIED" | "ALLOW" | "DENY" | (string & {});
  /** Optional. Flag to enable TLS inspection of traffic matching on , can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig. */
  tlsInspectionEnabled?: boolean;
  /** Output only. Time when the rule was created. */
  createTime?: string;
  /** Required. Priority of the rule. Lower number corresponds to higher precedence. */
  priority?: number;
  /** Required. Immutable. Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
}

export const GatewaySecurityPolicyRule: Schema.Schema<GatewaySecurityPolicyRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationMatcher: Schema.optional(Schema.String),
    sessionMatcher: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    basicProfile: Schema.optional(Schema.String),
    tlsInspectionEnabled: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GatewaySecurityPolicyRule" });

export interface ListGatewaySecurityPolicyRulesResponse {
  /** List of GatewaySecurityPolicyRule resources. */
  gatewaySecurityPolicyRules?: ReadonlyArray<GatewaySecurityPolicyRule>;
  /** If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListGatewaySecurityPolicyRulesResponse: Schema.Schema<ListGatewaySecurityPolicyRulesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gatewaySecurityPolicyRules: Schema.optional(
      Schema.Array(GatewaySecurityPolicyRule),
    ),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListGatewaySecurityPolicyRulesResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface ListUrlListsResponse {
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** List of UrlList resources. */
  urlLists?: ReadonlyArray<UrlList>;
}

export const ListUrlListsResponse: Schema.Schema<ListUrlListsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    urlLists: Schema.optional(Schema.Array(UrlList)),
  }).annotate({ identifier: "ListUrlListsResponse" });

export interface BackendAuthenticationConfig {
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Required. Name of the BackendAuthenticationConfig resource. It matches the pattern `projects/* /locations/{location}/backendAuthenticationConfigs/{backend_authentication_config}` */
  name?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
  /** Well known roots to use for server certificate validation. */
  wellKnownRoots?:
    | "WELL_KNOWN_ROOTS_UNSPECIFIED"
    | "NONE"
    | "PUBLIC_ROOTS"
    | (string & {});
  /** Optional. A reference to a certificatemanager.googleapis.com.Certificate resource. This is a relative resource path following the form "projects/{project}/locations/{location}/certificates/{certificate}". Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope. */
  clientCertificate?: string;
  /** Output only. Etag of the resource. */
  etag?: string;
  /** Set of label tags associated with the resource. */
  labels?: Record<string, string>;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Optional. A reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. This is a relative resource path following the form "projects/{project}/locations/{location}/trustConfigs/{trust_config}". A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS. */
  trustConfig?: string;
}

export const BackendAuthenticationConfig: Schema.Schema<BackendAuthenticationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    wellKnownRoots: Schema.optional(Schema.String),
    clientCertificate: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    trustConfig: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackendAuthenticationConfig" });

export interface ListInterceptDeploymentsResponse {
  /** The deployments from the specified parent. */
  interceptDeployments?: ReadonlyArray<InterceptDeployment>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListInterceptDeploymentsResponse: Schema.Schema<ListInterceptDeploymentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interceptDeployments: Schema.optional(Schema.Array(InterceptDeployment)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListInterceptDeploymentsResponse" });

export interface ListInterceptEndpointGroupsResponse {
  /** The endpoint groups from the specified parent. */
  interceptEndpointGroups?: ReadonlyArray<InterceptEndpointGroup>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
}

export const ListInterceptEndpointGroupsResponse: Schema.Schema<ListInterceptEndpointGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interceptEndpointGroups: Schema.optional(
      Schema.Array(InterceptEndpointGroup),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListInterceptEndpointGroupsResponse" });

export interface AddAddressGroupItemsRequest {
  /** Required. List of items to add. */
  items?: ReadonlyArray<string>;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const AddAddressGroupItemsRequest: Schema.Schema<AddAddressGroupItemsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Schema.String)),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddAddressGroupItemsRequest" });

export interface ListGatewaySecurityPoliciesResponse {
  /** List of GatewaySecurityPolicies resources. */
  gatewaySecurityPolicies?: ReadonlyArray<GatewaySecurityPolicy>;
  /** If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListGatewaySecurityPoliciesResponse: Schema.Schema<ListGatewaySecurityPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gatewaySecurityPolicies: Schema.optional(
      Schema.Array(GatewaySecurityPolicy),
    ),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListGatewaySecurityPoliciesResponse" });

export interface ListAuthzPoliciesResponse {
  /** The list of `AuthzPolicy` resources. */
  authzPolicies?: ReadonlyArray<AuthzPolicy>;
  /** A token identifying a page of results that the server returns. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListAuthzPoliciesResponse: Schema.Schema<ListAuthzPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authzPolicies: Schema.optional(Schema.Array(AuthzPolicy)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListAuthzPoliciesResponse" });

export interface ListServerTlsPoliciesResponse {
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Unreachable resources. Populated when the request opts into `return_partial_success` and reading across collections e.g. when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** List of ServerTlsPolicy resources. */
  serverTlsPolicies?: ReadonlyArray<ServerTlsPolicy>;
}

export const ListServerTlsPoliciesResponse: Schema.Schema<ListServerTlsPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    serverTlsPolicies: Schema.optional(Schema.Array(ServerTlsPolicy)),
  }).annotate({ identifier: "ListServerTlsPoliciesResponse" });

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

export interface RemoveAddressGroupItemsRequest {
  /** Required. List of items to remove. */
  items?: ReadonlyArray<string>;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RemoveAddressGroupItemsRequest: Schema.Schema<RemoveAddressGroupItemsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Schema.String)),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveAddressGroupItemsRequest" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListMirroringEndpointGroupAssociationsResponse {
  /** The associations from the specified parent. */
  mirroringEndpointGroupAssociations?: ReadonlyArray<MirroringEndpointGroupAssociation>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
}

export const ListMirroringEndpointGroupAssociationsResponse: Schema.Schema<ListMirroringEndpointGroupAssociationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mirroringEndpointGroupAssociations: Schema.optional(
      Schema.Array(MirroringEndpointGroupAssociation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMirroringEndpointGroupAssociationsResponse" });

export interface ListMirroringDeploymentsResponse {
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The deployments from the specified parent. */
  mirroringDeployments?: ReadonlyArray<MirroringDeployment>;
}

export const ListMirroringDeploymentsResponse: Schema.Schema<ListMirroringDeploymentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    mirroringDeployments: Schema.optional(Schema.Array(MirroringDeployment)),
  }).annotate({ identifier: "ListMirroringDeploymentsResponse" });

export interface ListBackendAuthenticationConfigsResponse {
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** List of BackendAuthenticationConfig resources. */
  backendAuthenticationConfigs?: ReadonlyArray<BackendAuthenticationConfig>;
}

export const ListBackendAuthenticationConfigsResponse: Schema.Schema<ListBackendAuthenticationConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    backendAuthenticationConfigs: Schema.optional(
      Schema.Array(BackendAuthenticationConfig),
    ),
  }).annotate({ identifier: "ListBackendAuthenticationConfigsResponse" });

export interface ListSecurityProfileGroupsResponse {
  /** List of SecurityProfileGroups resources. */
  securityProfileGroups?: ReadonlyArray<SecurityProfileGroup>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
}

export const ListSecurityProfileGroupsResponse: Schema.Schema<ListSecurityProfileGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    securityProfileGroups: Schema.optional(Schema.Array(SecurityProfileGroup)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSecurityProfileGroupsResponse" });

export interface ListAddressGroupReferencesResponse {
  /** A list of references that matches the specified filter in the request. */
  addressGroupReferences?: ReadonlyArray<ListAddressGroupReferencesResponseAddressGroupReference>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
}

export const ListAddressGroupReferencesResponse: Schema.Schema<ListAddressGroupReferencesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressGroupReferences: Schema.optional(
      Schema.Array(ListAddressGroupReferencesResponseAddressGroupReference),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAddressGroupReferencesResponse" });

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

export interface GetOrganizationsLocationsSecurityProfilesRequest {
  /** Required. A name of the SecurityProfile to get. Must be in the format `projects|organizations/* /locations/{location}/securityProfiles/{security_profile_id}`. */
  name: string;
}

export const GetOrganizationsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsSecurityProfilesRequest>;

export type GetOrganizationsLocationsSecurityProfilesResponse = SecurityProfile;
export const GetOrganizationsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityProfile;

export type GetOrganizationsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single SecurityProfile. */
export const getOrganizationsLocationsSecurityProfiles: API.OperationMethod<
  GetOrganizationsLocationsSecurityProfilesRequest,
  GetOrganizationsLocationsSecurityProfilesResponse,
  GetOrganizationsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsSecurityProfilesRequest,
  output: GetOrganizationsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsLocationsSecurityProfilesRequest {
  /** Required. A name of the SecurityProfile to delete. Must be in the format `projects|organizations/* /locations/{location}/securityProfiles/{security_profile_id}`. */
  name: string;
  /** Optional. If client provided etag is out of date, delete will return FAILED_PRECONDITION error. */
  etag?: string;
}

export const DeleteOrganizationsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsSecurityProfilesRequest>;

export type DeleteOrganizationsLocationsSecurityProfilesResponse = Operation;
export const DeleteOrganizationsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteOrganizationsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single SecurityProfile. */
export const deleteOrganizationsLocationsSecurityProfiles: API.OperationMethod<
  DeleteOrganizationsLocationsSecurityProfilesRequest,
  DeleteOrganizationsLocationsSecurityProfilesResponse,
  DeleteOrganizationsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsSecurityProfilesRequest,
  output: DeleteOrganizationsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsLocationsSecurityProfilesRequest {
  /** Required. Short name of the SecurityProfile resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "security_profile1". */
  securityProfileId?: string;
  /** Required. The parent resource of the SecurityProfile. Must be in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
  /** Request body */
  body?: SecurityProfile;
}

export const CreateOrganizationsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    securityProfileId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("securityProfileId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SecurityProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/securityProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsSecurityProfilesRequest>;

export type CreateOrganizationsLocationsSecurityProfilesResponse = Operation;
export const CreateOrganizationsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateOrganizationsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new SecurityProfile in a given organization and location. */
export const createOrganizationsLocationsSecurityProfiles: API.OperationMethod<
  CreateOrganizationsLocationsSecurityProfilesRequest,
  CreateOrganizationsLocationsSecurityProfilesResponse,
  CreateOrganizationsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsSecurityProfilesRequest,
  output: CreateOrganizationsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsSecurityProfilesRequest {
  /** Required. The project or organization and location from which the SecurityProfiles should be listed, specified in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
  /** Optional. Maximum number of SecurityProfiles to return per call. */
  pageSize?: number;
  /** Optional. The value returned by the last `ListSecurityProfilesResponse` Indicates that this is a continuation of a prior `ListSecurityProfiles` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListOrganizationsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/securityProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsSecurityProfilesRequest>;

export type ListOrganizationsLocationsSecurityProfilesResponse =
  ListSecurityProfilesResponse;
export const ListOrganizationsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSecurityProfilesResponse;

export type ListOrganizationsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists SecurityProfiles in a given organization and location. */
export const listOrganizationsLocationsSecurityProfiles: API.PaginatedOperationMethod<
  ListOrganizationsLocationsSecurityProfilesRequest,
  ListOrganizationsLocationsSecurityProfilesResponse,
  ListOrganizationsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsSecurityProfilesRequest,
  output: ListOrganizationsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchOrganizationsLocationsSecurityProfilesRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the SecurityProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. */
  updateMask?: string;
  /** Immutable. Identifier. Name of the SecurityProfile resource. It matches pattern `projects|organizations/* /locations/{location}/securityProfiles/{security_profile}`. */
  name: string;
  /** Request body */
  body?: SecurityProfile;
}

export const PatchOrganizationsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SecurityProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsSecurityProfilesRequest>;

export type PatchOrganizationsLocationsSecurityProfilesResponse = Operation;
export const PatchOrganizationsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchOrganizationsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single SecurityProfile. */
export const patchOrganizationsLocationsSecurityProfiles: API.OperationMethod<
  PatchOrganizationsLocationsSecurityProfilesRequest,
  PatchOrganizationsLocationsSecurityProfilesResponse,
  PatchOrganizationsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsSecurityProfilesRequest,
  output: PatchOrganizationsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsAddressGroupsRequest {
  /** Optional. If true, allow partial responses for multi-regional Aggregated List requests. */
  returnPartialSuccess?: boolean;
  /** Required. The project and location from which the AddressGroups should be listed, specified in the format `projects/* /locations/{location}`. */
  parent: string;
  /** Maximum number of AddressGroups to return per call. */
  pageSize?: number;
  /** The value returned by the last `ListAddressGroupsResponse` Indicates that this is a continuation of a prior `ListAddressGroups` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/addressGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsAddressGroupsRequest>;

export type ListOrganizationsLocationsAddressGroupsResponse =
  ListAddressGroupsResponse;
export const ListOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAddressGroupsResponse;

export type ListOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists address groups in a given project and location. */
export const listOrganizationsLocationsAddressGroups: API.PaginatedOperationMethod<
  ListOrganizationsLocationsAddressGroupsRequest,
  ListOrganizationsLocationsAddressGroupsResponse,
  ListOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsAddressGroupsRequest,
  output: ListOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to get. Must be in the format `projects/* /locations/{location}/addressGroups/*`. */
  name: string;
}

export const GetOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsAddressGroupsRequest>;

export type GetOrganizationsLocationsAddressGroupsResponse = AddressGroup;
export const GetOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AddressGroup;

export type GetOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single address group. */
export const getOrganizationsLocationsAddressGroups: API.OperationMethod<
  GetOrganizationsLocationsAddressGroupsRequest,
  GetOrganizationsLocationsAddressGroupsResponse,
  GetOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsAddressGroupsRequest,
  output: GetOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AddItemsOrganizationsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to add items to. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** Request body */
  body?: AddAddressGroupItemsRequest;
}

export const AddItemsOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    body: Schema.optional(AddAddressGroupItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+addressGroup}:addItems",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddItemsOrganizationsLocationsAddressGroupsRequest>;

export type AddItemsOrganizationsLocationsAddressGroupsResponse = Operation;
export const AddItemsOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AddItemsOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds items to an address group. */
export const addItemsOrganizationsLocationsAddressGroups: API.OperationMethod<
  AddItemsOrganizationsLocationsAddressGroupsRequest,
  AddItemsOrganizationsLocationsAddressGroupsResponse,
  AddItemsOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddItemsOrganizationsLocationsAddressGroupsRequest,
  output: AddItemsOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemoveItemsOrganizationsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to remove items from. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** Request body */
  body?: RemoveAddressGroupItemsRequest;
}

export const RemoveItemsOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    body: Schema.optional(RemoveAddressGroupItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+addressGroup}:removeItems",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveItemsOrganizationsLocationsAddressGroupsRequest>;

export type RemoveItemsOrganizationsLocationsAddressGroupsResponse = Operation;
export const RemoveItemsOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RemoveItemsOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes items from an address group. */
export const removeItemsOrganizationsLocationsAddressGroups: API.OperationMethod<
  RemoveItemsOrganizationsLocationsAddressGroupsRequest,
  RemoveItemsOrganizationsLocationsAddressGroupsResponse,
  RemoveItemsOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveItemsOrganizationsLocationsAddressGroupsRequest,
  output: RemoveItemsOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsLocationsAddressGroupsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Short name of the AddressGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy". */
  addressGroupId?: string;
  /** Required. The parent resource of the AddressGroup. Must be in the format `projects/* /locations/{location}`. */
  parent: string;
  /** Request body */
  body?: AddressGroup;
}

export const CreateOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    addressGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("addressGroupId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AddressGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/addressGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsAddressGroupsRequest>;

export type CreateOrganizationsLocationsAddressGroupsResponse = Operation;
export const CreateOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new address group in a given project and location. */
export const createOrganizationsLocationsAddressGroups: API.OperationMethod<
  CreateOrganizationsLocationsAddressGroupsRequest,
  CreateOrganizationsLocationsAddressGroupsResponse,
  CreateOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsAddressGroupsRequest,
  output: CreateOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CloneItemsOrganizationsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** Request body */
  body?: CloneAddressGroupItemsRequest;
}

export const CloneItemsOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    body: Schema.optional(CloneAddressGroupItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+addressGroup}:cloneItems",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CloneItemsOrganizationsLocationsAddressGroupsRequest>;

export type CloneItemsOrganizationsLocationsAddressGroupsResponse = Operation;
export const CloneItemsOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CloneItemsOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Clones items from one address group to another. */
export const cloneItemsOrganizationsLocationsAddressGroups: API.OperationMethod<
  CloneItemsOrganizationsLocationsAddressGroupsRequest,
  CloneItemsOrganizationsLocationsAddressGroupsResponse,
  CloneItemsOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CloneItemsOrganizationsLocationsAddressGroupsRequest,
  output: CloneItemsOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsLocationsAddressGroupsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the AddressGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Required. Name of the AddressGroup resource. It matches pattern `projects/* /locations/{location}/addressGroups/`. */
  name: string;
  /** Request body */
  body?: AddressGroup;
}

export const PatchOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AddressGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsAddressGroupsRequest>;

export type PatchOrganizationsLocationsAddressGroupsResponse = Operation;
export const PatchOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates parameters of an address group. */
export const patchOrganizationsLocationsAddressGroups: API.OperationMethod<
  PatchOrganizationsLocationsAddressGroupsRequest,
  PatchOrganizationsLocationsAddressGroupsResponse,
  PatchOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsAddressGroupsRequest,
  output: PatchOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListReferencesOrganizationsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** The maximum number of references to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more AddressGroupUsers left to be queried. */
  pageSize?: number;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListReferencesOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+addressGroup}:listReferences" }),
    svc,
  ) as unknown as Schema.Schema<ListReferencesOrganizationsLocationsAddressGroupsRequest>;

export type ListReferencesOrganizationsLocationsAddressGroupsResponse =
  ListAddressGroupReferencesResponse;
export const ListReferencesOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAddressGroupReferencesResponse;

export type ListReferencesOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists references of an address group. */
export const listReferencesOrganizationsLocationsAddressGroups: API.PaginatedOperationMethod<
  ListReferencesOrganizationsLocationsAddressGroupsRequest,
  ListReferencesOrganizationsLocationsAddressGroupsResponse,
  ListReferencesOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListReferencesOrganizationsLocationsAddressGroupsRequest,
  output: ListReferencesOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteOrganizationsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to delete. Must be in the format `projects/* /locations/{location}/addressGroups/*`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsAddressGroupsRequest>;

export type DeleteOrganizationsLocationsAddressGroupsResponse = Operation;
export const DeleteOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an address group. */
export const deleteOrganizationsLocationsAddressGroups: API.OperationMethod<
  DeleteOrganizationsLocationsAddressGroupsRequest,
  DeleteOrganizationsLocationsAddressGroupsResponse,
  DeleteOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsAddressGroupsRequest,
  output: DeleteOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsLocationsFirewallEndpointsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Immutable. Identifier. Name of resource. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Endpoint resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: FirewallEndpoint;
}

export const PatchOrganizationsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(FirewallEndpoint).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsFirewallEndpointsRequest>;

export type PatchOrganizationsLocationsFirewallEndpointsResponse = Operation;
export const PatchOrganizationsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchOrganizationsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single org Endpoint. */
export const patchOrganizationsLocationsFirewallEndpoints: API.OperationMethod<
  PatchOrganizationsLocationsFirewallEndpointsRequest,
  PatchOrganizationsLocationsFirewallEndpointsResponse,
  PatchOrganizationsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsFirewallEndpointsRequest,
  output: PatchOrganizationsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsFirewallEndpointsRequest {
  /** Optional. Filtering results */
  filter?: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Hint for how to order the results */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Parent value for ListEndpointsRequest */
  parent: string;
}

export const ListOrganizationsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/firewallEndpoints" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsFirewallEndpointsRequest>;

export type ListOrganizationsLocationsFirewallEndpointsResponse =
  ListFirewallEndpointsResponse;
export const ListOrganizationsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFirewallEndpointsResponse;

export type ListOrganizationsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists FirewallEndpoints in a given organization and location. */
export const listOrganizationsLocationsFirewallEndpoints: API.PaginatedOperationMethod<
  ListOrganizationsLocationsFirewallEndpointsRequest,
  ListOrganizationsLocationsFirewallEndpointsResponse,
  ListOrganizationsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsFirewallEndpointsRequest,
  output: ListOrganizationsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsLocationsFirewallEndpointsRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Required. Id of the requesting object. If auto-generating Id server-side, remove this field and firewall_endpoint_id from the method_signature of Create RPC. */
  firewallEndpointId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: FirewallEndpoint;
}

export const CreateOrganizationsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    firewallEndpointId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("firewallEndpointId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(FirewallEndpoint).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/firewallEndpoints",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsFirewallEndpointsRequest>;

export type CreateOrganizationsLocationsFirewallEndpointsResponse = Operation;
export const CreateOrganizationsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateOrganizationsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new FirewallEndpoint in a given organization and location. */
export const createOrganizationsLocationsFirewallEndpoints: API.OperationMethod<
  CreateOrganizationsLocationsFirewallEndpointsRequest,
  CreateOrganizationsLocationsFirewallEndpointsResponse,
  CreateOrganizationsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsFirewallEndpointsRequest,
  output: CreateOrganizationsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsLocationsFirewallEndpointsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the resource */
  name: string;
}

export const DeleteOrganizationsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsFirewallEndpointsRequest>;

export type DeleteOrganizationsLocationsFirewallEndpointsResponse = Operation;
export const DeleteOrganizationsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteOrganizationsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single org Endpoint. */
export const deleteOrganizationsLocationsFirewallEndpoints: API.OperationMethod<
  DeleteOrganizationsLocationsFirewallEndpointsRequest,
  DeleteOrganizationsLocationsFirewallEndpointsResponse,
  DeleteOrganizationsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsFirewallEndpointsRequest,
  output: DeleteOrganizationsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsFirewallEndpointsRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetOrganizationsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsFirewallEndpointsRequest>;

export type GetOrganizationsLocationsFirewallEndpointsResponse =
  FirewallEndpoint;
export const GetOrganizationsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FirewallEndpoint;

export type GetOrganizationsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single org Endpoint. */
export const getOrganizationsLocationsFirewallEndpoints: API.OperationMethod<
  GetOrganizationsLocationsFirewallEndpointsRequest,
  GetOrganizationsLocationsFirewallEndpointsResponse,
  GetOrganizationsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsFirewallEndpointsRequest,
  output: GetOrganizationsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetOrganizationsLocationsSecurityProfileGroupsRequest {
  /** Required. A name of the SecurityProfileGroup to get. Must be in the format `projects|organizations/* /locations/{location}/securityProfileGroups/{security_profile_group}`. */
  name: string;
}

export const GetOrganizationsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsSecurityProfileGroupsRequest>;

export type GetOrganizationsLocationsSecurityProfileGroupsResponse =
  SecurityProfileGroup;
export const GetOrganizationsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityProfileGroup;

export type GetOrganizationsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single SecurityProfileGroup. */
export const getOrganizationsLocationsSecurityProfileGroups: API.OperationMethod<
  GetOrganizationsLocationsSecurityProfileGroupsRequest,
  GetOrganizationsLocationsSecurityProfileGroupsResponse,
  GetOrganizationsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsSecurityProfileGroupsRequest,
  output: GetOrganizationsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsLocationsSecurityProfileGroupsRequest {
  /** Optional. If client provided etag is out of date, delete will return FAILED_PRECONDITION error. */
  etag?: string;
  /** Required. A name of the SecurityProfileGroup to delete. Must be in the format `projects|organizations/* /locations/{location}/securityProfileGroups/{security_profile_group}`. */
  name: string;
}

export const DeleteOrganizationsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsSecurityProfileGroupsRequest>;

export type DeleteOrganizationsLocationsSecurityProfileGroupsResponse =
  Operation;
export const DeleteOrganizationsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteOrganizationsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single SecurityProfileGroup. */
export const deleteOrganizationsLocationsSecurityProfileGroups: API.OperationMethod<
  DeleteOrganizationsLocationsSecurityProfileGroupsRequest,
  DeleteOrganizationsLocationsSecurityProfileGroupsResponse,
  DeleteOrganizationsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsSecurityProfileGroupsRequest,
  output: DeleteOrganizationsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsLocationsSecurityProfileGroupsRequest {
  /** Required. The parent resource of the SecurityProfileGroup. Must be in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
  /** Required. Short name of the SecurityProfileGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "security_profile_group1". */
  securityProfileGroupId?: string;
  /** Request body */
  body?: SecurityProfileGroup;
}

export const CreateOrganizationsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    securityProfileGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("securityProfileGroupId"),
    ),
    body: Schema.optional(SecurityProfileGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/securityProfileGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsSecurityProfileGroupsRequest>;

export type CreateOrganizationsLocationsSecurityProfileGroupsResponse =
  Operation;
export const CreateOrganizationsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateOrganizationsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new SecurityProfileGroup in a given organization and location. */
export const createOrganizationsLocationsSecurityProfileGroups: API.OperationMethod<
  CreateOrganizationsLocationsSecurityProfileGroupsRequest,
  CreateOrganizationsLocationsSecurityProfileGroupsResponse,
  CreateOrganizationsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsSecurityProfileGroupsRequest,
  output: CreateOrganizationsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsSecurityProfileGroupsRequest {
  /** Optional. Maximum number of SecurityProfileGroups to return per call. */
  pageSize?: number;
  /** Optional. The value returned by the last `ListSecurityProfileGroupsResponse` Indicates that this is a continuation of a prior `ListSecurityProfileGroups` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. The project or organization and location from which the SecurityProfileGroups should be listed, specified in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
}

export const ListOrganizationsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/securityProfileGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsSecurityProfileGroupsRequest>;

export type ListOrganizationsLocationsSecurityProfileGroupsResponse =
  ListSecurityProfileGroupsResponse;
export const ListOrganizationsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSecurityProfileGroupsResponse;

export type ListOrganizationsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists SecurityProfileGroups in a given organization and location. */
export const listOrganizationsLocationsSecurityProfileGroups: API.PaginatedOperationMethod<
  ListOrganizationsLocationsSecurityProfileGroupsRequest,
  ListOrganizationsLocationsSecurityProfileGroupsResponse,
  ListOrganizationsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsSecurityProfileGroupsRequest,
  output: ListOrganizationsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchOrganizationsLocationsSecurityProfileGroupsRequest {
  /** Immutable. Identifier. Name of the SecurityProfileGroup resource. It matches pattern `projects|organizations/* /locations/{location}/securityProfileGroups/{security_profile_group}`. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the SecurityProfileGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. */
  updateMask?: string;
  /** Request body */
  body?: SecurityProfileGroup;
}

export const PatchOrganizationsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SecurityProfileGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsSecurityProfileGroupsRequest>;

export type PatchOrganizationsLocationsSecurityProfileGroupsResponse =
  Operation;
export const PatchOrganizationsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchOrganizationsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single SecurityProfileGroup. */
export const patchOrganizationsLocationsSecurityProfileGroups: API.OperationMethod<
  PatchOrganizationsLocationsSecurityProfileGroupsRequest,
  PatchOrganizationsLocationsSecurityProfileGroupsResponse,
  PatchOrganizationsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsSecurityProfileGroupsRequest,
  output: PatchOrganizationsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelOrganizationsLocationsOperationsRequest>;

export type CancelOrganizationsLocationsOperationsResponse = Empty;
export const CancelOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelOrganizationsLocationsOperations: API.OperationMethod<
  CancelOrganizationsLocationsOperationsRequest,
  CancelOrganizationsLocationsOperationsResponse,
  CancelOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelOrganizationsLocationsOperationsRequest,
  output: CancelOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list filter. */
  filter?: string;
}

export const ListOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsOperationsRequest>;

export type ListOrganizationsLocationsOperationsResponse =
  ListOperationsResponse;
export const ListOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOrganizationsLocationsOperations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsOperationsRequest,
  ListOrganizationsLocationsOperationsResponse,
  ListOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsOperationsRequest,
  output: ListOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsOperationsRequest>;

export type GetOrganizationsLocationsOperationsResponse = Operation;
export const GetOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOrganizationsLocationsOperations: API.OperationMethod<
  GetOrganizationsLocationsOperationsRequest,
  GetOrganizationsLocationsOperationsResponse,
  GetOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsOperationsRequest,
  output: GetOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsOperationsRequest>;

export type DeleteOrganizationsLocationsOperationsResponse = Empty;
export const DeleteOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteOrganizationsLocationsOperations: API.OperationMethod<
  DeleteOrganizationsLocationsOperationsRequest,
  DeleteOrganizationsLocationsOperationsResponse,
  DeleteOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsOperationsRequest,
  output: DeleteOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRequest {
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface CreateProjectsLocationsInterceptDeploymentsRequest {
  /** Required. The parent resource where this deployment will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Required. The ID to use for the new deployment, which will become the final component of the deployment's resource name. */
  interceptDeploymentId?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: InterceptDeployment;
}

export const CreateProjectsLocationsInterceptDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    interceptDeploymentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("interceptDeploymentId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(InterceptDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/interceptDeployments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInterceptDeploymentsRequest>;

export type CreateProjectsLocationsInterceptDeploymentsResponse = Operation;
export const CreateProjectsLocationsInterceptDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsInterceptDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a deployment in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsInterceptDeployments: API.OperationMethod<
  CreateProjectsLocationsInterceptDeploymentsRequest,
  CreateProjectsLocationsInterceptDeploymentsResponse,
  CreateProjectsLocationsInterceptDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInterceptDeploymentsRequest,
  output: CreateProjectsLocationsInterceptDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsInterceptDeploymentsRequest {
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Immutable. Identifier. The resource name of this deployment, for example: `projects/123456789/locations/us-central1-a/interceptDeployments/my-dep`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Optional. The list of fields to update. Fields are specified relative to the deployment (e.g. `description`; *not* `intercept_deployment.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Request body */
  body?: InterceptDeployment;
}

export const PatchProjectsLocationsInterceptDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(InterceptDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsInterceptDeploymentsRequest>;

export type PatchProjectsLocationsInterceptDeploymentsResponse = Operation;
export const PatchProjectsLocationsInterceptDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsInterceptDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a deployment. See https://google.aip.dev/134. */
export const patchProjectsLocationsInterceptDeployments: API.OperationMethod<
  PatchProjectsLocationsInterceptDeploymentsRequest,
  PatchProjectsLocationsInterceptDeploymentsResponse,
  PatchProjectsLocationsInterceptDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInterceptDeploymentsRequest,
  output: PatchProjectsLocationsInterceptDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInterceptDeploymentsRequest {
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
  /** Optional. A page token, received from a previous `ListInterceptDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptDeployments` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The parent, which owns this collection of deployments. Example: `projects/123456789/locations/us-central1-a`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
}

export const ListProjectsLocationsInterceptDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/interceptDeployments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInterceptDeploymentsRequest>;

export type ListProjectsLocationsInterceptDeploymentsResponse =
  ListInterceptDeploymentsResponse;
export const ListProjectsLocationsInterceptDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInterceptDeploymentsResponse;

export type ListProjectsLocationsInterceptDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists deployments in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsInterceptDeployments: API.PaginatedOperationMethod<
  ListProjectsLocationsInterceptDeploymentsRequest,
  ListProjectsLocationsInterceptDeploymentsResponse,
  ListProjectsLocationsInterceptDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInterceptDeploymentsRequest,
  output: ListProjectsLocationsInterceptDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsInterceptDeploymentsRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
}

export const DeleteProjectsLocationsInterceptDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInterceptDeploymentsRequest>;

export type DeleteProjectsLocationsInterceptDeploymentsResponse = Operation;
export const DeleteProjectsLocationsInterceptDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsInterceptDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a deployment. See https://google.aip.dev/135. */
export const deleteProjectsLocationsInterceptDeployments: API.OperationMethod<
  DeleteProjectsLocationsInterceptDeploymentsRequest,
  DeleteProjectsLocationsInterceptDeploymentsResponse,
  DeleteProjectsLocationsInterceptDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInterceptDeploymentsRequest,
  output: DeleteProjectsLocationsInterceptDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInterceptDeploymentsRequest {
  /** Required. The name of the deployment to retrieve. Format: projects/{project}/locations/{location}/interceptDeployments/{intercept_deployment} */
  name: string;
}

export const GetProjectsLocationsInterceptDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInterceptDeploymentsRequest>;

export type GetProjectsLocationsInterceptDeploymentsResponse =
  InterceptDeployment;
export const GetProjectsLocationsInterceptDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ InterceptDeployment;

export type GetProjectsLocationsInterceptDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific deployment. See https://google.aip.dev/131. */
export const getProjectsLocationsInterceptDeployments: API.OperationMethod<
  GetProjectsLocationsInterceptDeploymentsRequest,
  GetProjectsLocationsInterceptDeploymentsResponse,
  GetProjectsLocationsInterceptDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInterceptDeploymentsRequest,
  output: GetProjectsLocationsInterceptDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsBackendAuthenticationConfigsRequest {
  /** Optional. Etag of the resource. If this is provided, it must match the server's etag. */
  etag?: string;
  /** Required. A name of the BackendAuthenticationConfig to delete. Must be in the format `projects/* /locations/{location}/backendAuthenticationConfigs/*`. */
  name: string;
}

export const DeleteProjectsLocationsBackendAuthenticationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsBackendAuthenticationConfigsRequest>;

export type DeleteProjectsLocationsBackendAuthenticationConfigsResponse =
  Operation;
export const DeleteProjectsLocationsBackendAuthenticationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsBackendAuthenticationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single BackendAuthenticationConfig to BackendAuthenticationConfig. */
export const deleteProjectsLocationsBackendAuthenticationConfigs: API.OperationMethod<
  DeleteProjectsLocationsBackendAuthenticationConfigsRequest,
  DeleteProjectsLocationsBackendAuthenticationConfigsResponse,
  DeleteProjectsLocationsBackendAuthenticationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackendAuthenticationConfigsRequest,
  output: DeleteProjectsLocationsBackendAuthenticationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBackendAuthenticationConfigsRequest {
  /** Required. A name of the BackendAuthenticationConfig to get. Must be in the format `projects/* /locations/{location}/backendAuthenticationConfigs/*`. */
  name: string;
}

export const GetProjectsLocationsBackendAuthenticationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBackendAuthenticationConfigsRequest>;

export type GetProjectsLocationsBackendAuthenticationConfigsResponse =
  BackendAuthenticationConfig;
export const GetProjectsLocationsBackendAuthenticationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BackendAuthenticationConfig;

export type GetProjectsLocationsBackendAuthenticationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single BackendAuthenticationConfig to BackendAuthenticationConfig. */
export const getProjectsLocationsBackendAuthenticationConfigs: API.OperationMethod<
  GetProjectsLocationsBackendAuthenticationConfigsRequest,
  GetProjectsLocationsBackendAuthenticationConfigsResponse,
  GetProjectsLocationsBackendAuthenticationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackendAuthenticationConfigsRequest,
  output: GetProjectsLocationsBackendAuthenticationConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsBackendAuthenticationConfigsRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the BackendAuthenticationConfig resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Required. Name of the BackendAuthenticationConfig resource. It matches the pattern `projects/* /locations/{location}/backendAuthenticationConfigs/{backend_authentication_config}` */
  name: string;
  /** Request body */
  body?: BackendAuthenticationConfig;
}

export const PatchProjectsLocationsBackendAuthenticationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(BackendAuthenticationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsBackendAuthenticationConfigsRequest>;

export type PatchProjectsLocationsBackendAuthenticationConfigsResponse =
  Operation;
export const PatchProjectsLocationsBackendAuthenticationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsBackendAuthenticationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single BackendAuthenticationConfig to BackendAuthenticationConfig. */
export const patchProjectsLocationsBackendAuthenticationConfigs: API.OperationMethod<
  PatchProjectsLocationsBackendAuthenticationConfigsRequest,
  PatchProjectsLocationsBackendAuthenticationConfigsResponse,
  PatchProjectsLocationsBackendAuthenticationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBackendAuthenticationConfigsRequest,
  output: PatchProjectsLocationsBackendAuthenticationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBackendAuthenticationConfigsRequest {
  /** Maximum number of BackendAuthenticationConfigs to return per call. */
  pageSize?: number;
  /** The value returned by the last `ListBackendAuthenticationConfigsResponse` Indicates that this is a continuation of a prior `ListBackendAuthenticationConfigs` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. The project and location from which the BackendAuthenticationConfigs should be listed, specified in the format `projects/* /locations/{location}`. */
  parent: string;
}

export const ListProjectsLocationsBackendAuthenticationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/backendAuthenticationConfigs",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBackendAuthenticationConfigsRequest>;

export type ListProjectsLocationsBackendAuthenticationConfigsResponse =
  ListBackendAuthenticationConfigsResponse;
export const ListProjectsLocationsBackendAuthenticationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBackendAuthenticationConfigsResponse;

export type ListProjectsLocationsBackendAuthenticationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists BackendAuthenticationConfigs in a given project and location. */
export const listProjectsLocationsBackendAuthenticationConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsBackendAuthenticationConfigsRequest,
  ListProjectsLocationsBackendAuthenticationConfigsResponse,
  ListProjectsLocationsBackendAuthenticationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackendAuthenticationConfigsRequest,
  output: ListProjectsLocationsBackendAuthenticationConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsBackendAuthenticationConfigsRequest {
  /** Required. The parent resource of the BackendAuthenticationConfig. Must be in the format `projects/* /locations/{location}`. */
  parent: string;
  /** Required. Short name of the BackendAuthenticationConfig resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "backend-auth-config". */
  backendAuthenticationConfigId?: string;
  /** Request body */
  body?: BackendAuthenticationConfig;
}

export const CreateProjectsLocationsBackendAuthenticationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    backendAuthenticationConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("backendAuthenticationConfigId"),
    ),
    body: Schema.optional(BackendAuthenticationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/backendAuthenticationConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsBackendAuthenticationConfigsRequest>;

export type CreateProjectsLocationsBackendAuthenticationConfigsResponse =
  Operation;
export const CreateProjectsLocationsBackendAuthenticationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsBackendAuthenticationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new BackendAuthenticationConfig in a given project and location. */
export const createProjectsLocationsBackendAuthenticationConfigs: API.OperationMethod<
  CreateProjectsLocationsBackendAuthenticationConfigsRequest,
  CreateProjectsLocationsBackendAuthenticationConfigsResponse,
  CreateProjectsLocationsBackendAuthenticationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBackendAuthenticationConfigsRequest,
  output: CreateProjectsLocationsBackendAuthenticationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsInterceptEndpointGroupsRequest {
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Required. The parent resource where this endpoint group will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Required. The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name. */
  interceptEndpointGroupId?: string;
  /** Request body */
  body?: InterceptEndpointGroup;
}

export const CreateProjectsLocationsInterceptEndpointGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    interceptEndpointGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("interceptEndpointGroupId"),
    ),
    body: Schema.optional(InterceptEndpointGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/interceptEndpointGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInterceptEndpointGroupsRequest>;

export type CreateProjectsLocationsInterceptEndpointGroupsResponse = Operation;
export const CreateProjectsLocationsInterceptEndpointGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsInterceptEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an endpoint group in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsInterceptEndpointGroups: API.OperationMethod<
  CreateProjectsLocationsInterceptEndpointGroupsRequest,
  CreateProjectsLocationsInterceptEndpointGroupsResponse,
  CreateProjectsLocationsInterceptEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInterceptEndpointGroupsRequest,
  output: CreateProjectsLocationsInterceptEndpointGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsInterceptEndpointGroupsRequest {
  /** Immutable. Identifier. The resource name of this endpoint group, for example: `projects/123456789/locations/global/interceptEndpointGroups/my-eg`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Optional. The list of fields to update. Fields are specified relative to the endpoint group (e.g. `description`; *not* `intercept_endpoint_group.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: InterceptEndpointGroup;
}

export const PatchProjectsLocationsInterceptEndpointGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(InterceptEndpointGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsInterceptEndpointGroupsRequest>;

export type PatchProjectsLocationsInterceptEndpointGroupsResponse = Operation;
export const PatchProjectsLocationsInterceptEndpointGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsInterceptEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an endpoint group. See https://google.aip.dev/134. */
export const patchProjectsLocationsInterceptEndpointGroups: API.OperationMethod<
  PatchProjectsLocationsInterceptEndpointGroupsRequest,
  PatchProjectsLocationsInterceptEndpointGroupsResponse,
  PatchProjectsLocationsInterceptEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInterceptEndpointGroupsRequest,
  output: PatchProjectsLocationsInterceptEndpointGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInterceptEndpointGroupsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
  /** Required. The parent, which owns this collection of endpoint groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
  /** Optional. A page token, received from a previous `ListInterceptEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsInterceptEndpointGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/interceptEndpointGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInterceptEndpointGroupsRequest>;

export type ListProjectsLocationsInterceptEndpointGroupsResponse =
  ListInterceptEndpointGroupsResponse;
export const ListProjectsLocationsInterceptEndpointGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInterceptEndpointGroupsResponse;

export type ListProjectsLocationsInterceptEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists endpoint groups in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsInterceptEndpointGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsInterceptEndpointGroupsRequest,
  ListProjectsLocationsInterceptEndpointGroupsResponse,
  ListProjectsLocationsInterceptEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInterceptEndpointGroupsRequest,
  output: ListProjectsLocationsInterceptEndpointGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsInterceptEndpointGroupsRequest {
  /** Required. The endpoint group to delete. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
}

export const DeleteProjectsLocationsInterceptEndpointGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInterceptEndpointGroupsRequest>;

export type DeleteProjectsLocationsInterceptEndpointGroupsResponse = Operation;
export const DeleteProjectsLocationsInterceptEndpointGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsInterceptEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an endpoint group. See https://google.aip.dev/135. */
export const deleteProjectsLocationsInterceptEndpointGroups: API.OperationMethod<
  DeleteProjectsLocationsInterceptEndpointGroupsRequest,
  DeleteProjectsLocationsInterceptEndpointGroupsResponse,
  DeleteProjectsLocationsInterceptEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInterceptEndpointGroupsRequest,
  output: DeleteProjectsLocationsInterceptEndpointGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInterceptEndpointGroupsRequest {
  /** Required. The name of the endpoint group to retrieve. Format: projects/{project}/locations/{location}/interceptEndpointGroups/{intercept_endpoint_group} */
  name: string;
}

export const GetProjectsLocationsInterceptEndpointGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInterceptEndpointGroupsRequest>;

export type GetProjectsLocationsInterceptEndpointGroupsResponse =
  InterceptEndpointGroup;
export const GetProjectsLocationsInterceptEndpointGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ InterceptEndpointGroup;

export type GetProjectsLocationsInterceptEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific endpoint group. See https://google.aip.dev/131. */
export const getProjectsLocationsInterceptEndpointGroups: API.OperationMethod<
  GetProjectsLocationsInterceptEndpointGroupsRequest,
  GetProjectsLocationsInterceptEndpointGroupsResponse,
  GetProjectsLocationsInterceptEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInterceptEndpointGroupsRequest,
  output: GetProjectsLocationsInterceptEndpointGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AddItemsProjectsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to add items to. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** Request body */
  body?: AddAddressGroupItemsRequest;
}

export const AddItemsProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    body: Schema.optional(AddAddressGroupItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+addressGroup}:addItems",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddItemsProjectsLocationsAddressGroupsRequest>;

export type AddItemsProjectsLocationsAddressGroupsResponse = Operation;
export const AddItemsProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AddItemsProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds items to an address group. */
export const addItemsProjectsLocationsAddressGroups: API.OperationMethod<
  AddItemsProjectsLocationsAddressGroupsRequest,
  AddItemsProjectsLocationsAddressGroupsResponse,
  AddItemsProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddItemsProjectsLocationsAddressGroupsRequest,
  output: AddItemsProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemoveItemsProjectsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to remove items from. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** Request body */
  body?: RemoveAddressGroupItemsRequest;
}

export const RemoveItemsProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    body: Schema.optional(RemoveAddressGroupItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+addressGroup}:removeItems",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveItemsProjectsLocationsAddressGroupsRequest>;

export type RemoveItemsProjectsLocationsAddressGroupsResponse = Operation;
export const RemoveItemsProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RemoveItemsProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes items from an address group. */
export const removeItemsProjectsLocationsAddressGroups: API.OperationMethod<
  RemoveItemsProjectsLocationsAddressGroupsRequest,
  RemoveItemsProjectsLocationsAddressGroupsResponse,
  RemoveItemsProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveItemsProjectsLocationsAddressGroupsRequest,
  output: RemoveItemsProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsAddressGroupsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsAddressGroupsRequest>;

export type TestIamPermissionsProjectsLocationsAddressGroupsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsAddressGroups: API.OperationMethod<
  TestIamPermissionsProjectsLocationsAddressGroupsRequest,
  TestIamPermissionsProjectsLocationsAddressGroupsResponse,
  TestIamPermissionsProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsAddressGroupsRequest,
  output: TestIamPermissionsProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to get. Must be in the format `projects/* /locations/{location}/addressGroups/*`. */
  name: string;
}

export const GetProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAddressGroupsRequest>;

export type GetProjectsLocationsAddressGroupsResponse = AddressGroup;
export const GetProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AddressGroup;

export type GetProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single address group. */
export const getProjectsLocationsAddressGroups: API.OperationMethod<
  GetProjectsLocationsAddressGroupsRequest,
  GetProjectsLocationsAddressGroupsResponse,
  GetProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAddressGroupsRequest,
  output: GetProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAddressGroupsRequest {
  /** Optional. If true, allow partial responses for multi-regional Aggregated List requests. */
  returnPartialSuccess?: boolean;
  /** Maximum number of AddressGroups to return per call. */
  pageSize?: number;
  /** The value returned by the last `ListAddressGroupsResponse` Indicates that this is a continuation of a prior `ListAddressGroups` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. The project and location from which the AddressGroups should be listed, specified in the format `projects/* /locations/{location}`. */
  parent: string;
}

export const ListProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/addressGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAddressGroupsRequest>;

export type ListProjectsLocationsAddressGroupsResponse =
  ListAddressGroupsResponse;
export const ListProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAddressGroupsResponse;

export type ListProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists address groups in a given project and location. */
export const listProjectsLocationsAddressGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsAddressGroupsRequest,
  ListProjectsLocationsAddressGroupsResponse,
  ListProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAddressGroupsRequest,
  output: ListProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsAddressGroupsRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsAddressGroupsRequest>;

export type GetIamPolicyProjectsLocationsAddressGroupsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsAddressGroups: API.OperationMethod<
  GetIamPolicyProjectsLocationsAddressGroupsRequest,
  GetIamPolicyProjectsLocationsAddressGroupsResponse,
  GetIamPolicyProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsAddressGroupsRequest,
  output: GetIamPolicyProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to delete. Must be in the format `projects/* /locations/{location}/addressGroups/*`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAddressGroupsRequest>;

export type DeleteProjectsLocationsAddressGroupsResponse = Operation;
export const DeleteProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single address group. */
export const deleteProjectsLocationsAddressGroups: API.OperationMethod<
  DeleteProjectsLocationsAddressGroupsRequest,
  DeleteProjectsLocationsAddressGroupsResponse,
  DeleteProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAddressGroupsRequest,
  output: DeleteProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListReferencesProjectsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** The maximum number of references to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more AddressGroupUsers left to be queried. */
  pageSize?: number;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListReferencesProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+addressGroup}:listReferences" }),
    svc,
  ) as unknown as Schema.Schema<ListReferencesProjectsLocationsAddressGroupsRequest>;

export type ListReferencesProjectsLocationsAddressGroupsResponse =
  ListAddressGroupReferencesResponse;
export const ListReferencesProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAddressGroupReferencesResponse;

export type ListReferencesProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists references of an address group. */
export const listReferencesProjectsLocationsAddressGroups: API.PaginatedOperationMethod<
  ListReferencesProjectsLocationsAddressGroupsRequest,
  ListReferencesProjectsLocationsAddressGroupsResponse,
  ListReferencesProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListReferencesProjectsLocationsAddressGroupsRequest,
  output: ListReferencesProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetIamPolicyProjectsLocationsAddressGroupsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsAddressGroupsRequest>;

export type SetIamPolicyProjectsLocationsAddressGroupsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsAddressGroups: API.OperationMethod<
  SetIamPolicyProjectsLocationsAddressGroupsRequest,
  SetIamPolicyProjectsLocationsAddressGroupsResponse,
  SetIamPolicyProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsAddressGroupsRequest,
  output: SetIamPolicyProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAddressGroupsRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the AddressGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Required. Name of the AddressGroup resource. It matches pattern `projects/* /locations/{location}/addressGroups/`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: AddressGroup;
}

export const PatchProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(AddressGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAddressGroupsRequest>;

export type PatchProjectsLocationsAddressGroupsResponse = Operation;
export const PatchProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single address group. */
export const patchProjectsLocationsAddressGroups: API.OperationMethod<
  PatchProjectsLocationsAddressGroupsRequest,
  PatchProjectsLocationsAddressGroupsResponse,
  PatchProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAddressGroupsRequest,
  output: PatchProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CloneItemsProjectsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** Request body */
  body?: CloneAddressGroupItemsRequest;
}

export const CloneItemsProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    body: Schema.optional(CloneAddressGroupItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+addressGroup}:cloneItems",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CloneItemsProjectsLocationsAddressGroupsRequest>;

export type CloneItemsProjectsLocationsAddressGroupsResponse = Operation;
export const CloneItemsProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CloneItemsProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Clones items from one address group to another. */
export const cloneItemsProjectsLocationsAddressGroups: API.OperationMethod<
  CloneItemsProjectsLocationsAddressGroupsRequest,
  CloneItemsProjectsLocationsAddressGroupsResponse,
  CloneItemsProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CloneItemsProjectsLocationsAddressGroupsRequest,
  output: CloneItemsProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAddressGroupsRequest {
  /** Required. The parent resource of the AddressGroup. Must be in the format `projects/* /locations/{location}`. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Short name of the AddressGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy". */
  addressGroupId?: string;
  /** Request body */
  body?: AddressGroup;
}

export const CreateProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    addressGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("addressGroupId"),
    ),
    body: Schema.optional(AddressGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/addressGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAddressGroupsRequest>;

export type CreateProjectsLocationsAddressGroupsResponse = Operation;
export const CreateProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new address group in a given project and location. */
export const createProjectsLocationsAddressGroups: API.OperationMethod<
  CreateProjectsLocationsAddressGroupsRequest,
  CreateProjectsLocationsAddressGroupsResponse,
  CreateProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAddressGroupsRequest,
  output: CreateProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsInterceptDeploymentGroupsRequest {
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Required. The ID to use for the new deployment group, which will become the final component of the deployment group's resource name. */
  interceptDeploymentGroupId?: string;
  /** Required. The parent resource where this deployment group will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Request body */
  body?: InterceptDeploymentGroup;
}

export const CreateProjectsLocationsInterceptDeploymentGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    interceptDeploymentGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("interceptDeploymentGroupId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(InterceptDeploymentGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/interceptDeploymentGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInterceptDeploymentGroupsRequest>;

export type CreateProjectsLocationsInterceptDeploymentGroupsResponse =
  Operation;
export const CreateProjectsLocationsInterceptDeploymentGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsInterceptDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a deployment group in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsInterceptDeploymentGroups: API.OperationMethod<
  CreateProjectsLocationsInterceptDeploymentGroupsRequest,
  CreateProjectsLocationsInterceptDeploymentGroupsResponse,
  CreateProjectsLocationsInterceptDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInterceptDeploymentGroupsRequest,
  output: CreateProjectsLocationsInterceptDeploymentGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsInterceptDeploymentGroupsRequest {
  /** Immutable. Identifier. The resource name of this deployment group, for example: `projects/123456789/locations/global/interceptDeploymentGroups/my-dg`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Optional. The list of fields to update. Fields are specified relative to the deployment group (e.g. `description`; *not* `intercept_deployment_group.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: InterceptDeploymentGroup;
}

export const PatchProjectsLocationsInterceptDeploymentGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(InterceptDeploymentGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsInterceptDeploymentGroupsRequest>;

export type PatchProjectsLocationsInterceptDeploymentGroupsResponse = Operation;
export const PatchProjectsLocationsInterceptDeploymentGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsInterceptDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a deployment group. See https://google.aip.dev/134. */
export const patchProjectsLocationsInterceptDeploymentGroups: API.OperationMethod<
  PatchProjectsLocationsInterceptDeploymentGroupsRequest,
  PatchProjectsLocationsInterceptDeploymentGroupsResponse,
  PatchProjectsLocationsInterceptDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInterceptDeploymentGroupsRequest,
  output: PatchProjectsLocationsInterceptDeploymentGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInterceptDeploymentGroupsRequest {
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
  /** Optional. A page token, received from a previous `ListInterceptDeploymentGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptDeploymentGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The parent, which owns this collection of deployment groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
}

export const ListProjectsLocationsInterceptDeploymentGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/interceptDeploymentGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInterceptDeploymentGroupsRequest>;

export type ListProjectsLocationsInterceptDeploymentGroupsResponse =
  ListInterceptDeploymentGroupsResponse;
export const ListProjectsLocationsInterceptDeploymentGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInterceptDeploymentGroupsResponse;

export type ListProjectsLocationsInterceptDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists deployment groups in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsInterceptDeploymentGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsInterceptDeploymentGroupsRequest,
  ListProjectsLocationsInterceptDeploymentGroupsResponse,
  ListProjectsLocationsInterceptDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInterceptDeploymentGroupsRequest,
  output: ListProjectsLocationsInterceptDeploymentGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsInterceptDeploymentGroupsRequest {
  /** Required. The deployment group to delete. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
}

export const DeleteProjectsLocationsInterceptDeploymentGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInterceptDeploymentGroupsRequest>;

export type DeleteProjectsLocationsInterceptDeploymentGroupsResponse =
  Operation;
export const DeleteProjectsLocationsInterceptDeploymentGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsInterceptDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a deployment group. See https://google.aip.dev/135. */
export const deleteProjectsLocationsInterceptDeploymentGroups: API.OperationMethod<
  DeleteProjectsLocationsInterceptDeploymentGroupsRequest,
  DeleteProjectsLocationsInterceptDeploymentGroupsResponse,
  DeleteProjectsLocationsInterceptDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInterceptDeploymentGroupsRequest,
  output: DeleteProjectsLocationsInterceptDeploymentGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInterceptDeploymentGroupsRequest {
  /** Required. The name of the deployment group to retrieve. Format: projects/{project}/locations/{location}/interceptDeploymentGroups/{intercept_deployment_group} */
  name: string;
}

export const GetProjectsLocationsInterceptDeploymentGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInterceptDeploymentGroupsRequest>;

export type GetProjectsLocationsInterceptDeploymentGroupsResponse =
  InterceptDeploymentGroup;
export const GetProjectsLocationsInterceptDeploymentGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ InterceptDeploymentGroup;

export type GetProjectsLocationsInterceptDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific deployment group. See https://google.aip.dev/131. */
export const getProjectsLocationsInterceptDeploymentGroups: API.OperationMethod<
  GetProjectsLocationsInterceptDeploymentGroupsRequest,
  GetProjectsLocationsInterceptDeploymentGroupsResponse,
  GetProjectsLocationsInterceptDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInterceptDeploymentGroupsRequest,
  output: GetProjectsLocationsInterceptDeploymentGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsMirroringEndpointGroupAssociationsRequest {
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Required. The association to delete. */
  name: string;
}

export const DeleteProjectsLocationsMirroringEndpointGroupAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsMirroringEndpointGroupAssociationsRequest>;

export type DeleteProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  Operation;
export const DeleteProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsMirroringEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an association. See https://google.aip.dev/135. */
export const deleteProjectsLocationsMirroringEndpointGroupAssociations: API.OperationMethod<
  DeleteProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  DeleteProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  DeleteProjectsLocationsMirroringEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  output: DeleteProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMirroringEndpointGroupAssociationsRequest {
  /** Required. The name of the association to retrieve. Format: projects/{project}/locations/{location}/mirroringEndpointGroupAssociations/{mirroring_endpoint_group_association} */
  name: string;
}

export const GetProjectsLocationsMirroringEndpointGroupAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMirroringEndpointGroupAssociationsRequest>;

export type GetProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  MirroringEndpointGroupAssociation;
export const GetProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MirroringEndpointGroupAssociation;

export type GetProjectsLocationsMirroringEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific association. See https://google.aip.dev/131. */
export const getProjectsLocationsMirroringEndpointGroupAssociations: API.OperationMethod<
  GetProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  GetProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  GetProjectsLocationsMirroringEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  output: GetProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsMirroringEndpointGroupAssociationsRequest {
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Optional. The ID to use for the new association, which will become the final component of the endpoint group's resource name. If not provided, the server will generate a unique ID. */
  mirroringEndpointGroupAssociationId?: string;
  /** Required. The parent resource where this association will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Request body */
  body?: MirroringEndpointGroupAssociation;
}

export const CreateProjectsLocationsMirroringEndpointGroupAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    mirroringEndpointGroupAssociationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("mirroringEndpointGroupAssociationId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(MirroringEndpointGroupAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/mirroringEndpointGroupAssociations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsMirroringEndpointGroupAssociationsRequest>;

export type CreateProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  Operation;
export const CreateProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsMirroringEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an association in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsMirroringEndpointGroupAssociations: API.OperationMethod<
  CreateProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  CreateProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  CreateProjectsLocationsMirroringEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  output: CreateProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsMirroringEndpointGroupAssociationsRequest {
  /** Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/mirroringEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Optional. The list of fields to update. Fields are specified relative to the association (e.g. `description`; *not* `mirroring_endpoint_group_association.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: MirroringEndpointGroupAssociation;
}

export const PatchProjectsLocationsMirroringEndpointGroupAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(MirroringEndpointGroupAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsMirroringEndpointGroupAssociationsRequest>;

export type PatchProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  Operation;
export const PatchProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsMirroringEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an association. See https://google.aip.dev/134. */
export const patchProjectsLocationsMirroringEndpointGroupAssociations: API.OperationMethod<
  PatchProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  PatchProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  PatchProjectsLocationsMirroringEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  output: PatchProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMirroringEndpointGroupAssociationsRequest {
  /** Optional. A page token, received from a previous `ListMirroringEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
  /** Required. The parent, which owns this collection of associations. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. */
  parent: string;
}

export const ListProjectsLocationsMirroringEndpointGroupAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/mirroringEndpointGroupAssociations",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMirroringEndpointGroupAssociationsRequest>;

export type ListProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  ListMirroringEndpointGroupAssociationsResponse;
export const ListProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMirroringEndpointGroupAssociationsResponse;

export type ListProjectsLocationsMirroringEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists associations in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsMirroringEndpointGroupAssociations: API.PaginatedOperationMethod<
  ListProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  ListProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  ListProjectsLocationsMirroringEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  output: ListProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAuthzPoliciesRequest {
  /** Required. The name of the `AuthzPolicy` resource to delete. Must be in the format `projects/{project}/locations/{location}/authzPolicies/{authz_policy}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAuthzPoliciesRequest>;

export type DeleteProjectsLocationsAuthzPoliciesResponse = Operation;
export const DeleteProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single AuthzPolicy. */
export const deleteProjectsLocationsAuthzPolicies: API.OperationMethod<
  DeleteProjectsLocationsAuthzPoliciesRequest,
  DeleteProjectsLocationsAuthzPoliciesResponse,
  DeleteProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAuthzPoliciesRequest,
  output: DeleteProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsAuthzPoliciesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsAuthzPoliciesRequest>;

export type TestIamPermissionsProjectsLocationsAuthzPoliciesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsAuthzPolicies: API.OperationMethod<
  TestIamPermissionsProjectsLocationsAuthzPoliciesRequest,
  TestIamPermissionsProjectsLocationsAuthzPoliciesResponse,
  TestIamPermissionsProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsAuthzPoliciesRequest,
  output: TestIamPermissionsProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAuthzPoliciesRequest {
  /** Required. A name of the `AuthzPolicy` resource to get. Must be in the format `projects/{project}/locations/{location}/authzPolicies/{authz_policy}`. */
  name: string;
}

export const GetProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAuthzPoliciesRequest>;

export type GetProjectsLocationsAuthzPoliciesResponse = AuthzPolicy;
export const GetProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AuthzPolicy;

export type GetProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single AuthzPolicy. */
export const getProjectsLocationsAuthzPolicies: API.OperationMethod<
  GetProjectsLocationsAuthzPoliciesRequest,
  GetProjectsLocationsAuthzPoliciesResponse,
  GetProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAuthzPoliciesRequest,
  output: GetProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsAuthzPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsAuthzPoliciesRequest>;

export type SetIamPolicyProjectsLocationsAuthzPoliciesResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsAuthzPolicies: API.OperationMethod<
  SetIamPolicyProjectsLocationsAuthzPoliciesRequest,
  SetIamPolicyProjectsLocationsAuthzPoliciesResponse,
  SetIamPolicyProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsAuthzPoliciesRequest,
  output: SetIamPolicyProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAuthzPoliciesRequest {
  /** Required. Used to specify the fields to be overwritten in the `AuthzPolicy` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten. */
  updateMask?: string;
  /** Required. Identifier. Name of the `AuthzPolicy` resource in the following format: `projects/{project}/locations/{location}/authzPolicies/{authz_policy}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: AuthzPolicy;
}

export const PatchProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(AuthzPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAuthzPoliciesRequest>;

export type PatchProjectsLocationsAuthzPoliciesResponse = Operation;
export const PatchProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single AuthzPolicy. */
export const patchProjectsLocationsAuthzPolicies: API.OperationMethod<
  PatchProjectsLocationsAuthzPoliciesRequest,
  PatchProjectsLocationsAuthzPoliciesResponse,
  PatchProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAuthzPoliciesRequest,
  output: PatchProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAuthzPoliciesRequest {
  /** Optional. A token identifying a page of results that the server returns. */
  pageToken?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default. */
  pageSize?: number;
  /** Required. The project and location from which the `AuthzPolicy` resources are listed, specified in the following format: `projects/{project}/locations/{location}`. */
  parent: string;
}

export const ListProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/authzPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAuthzPoliciesRequest>;

export type ListProjectsLocationsAuthzPoliciesResponse =
  ListAuthzPoliciesResponse;
export const ListProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAuthzPoliciesResponse;

export type ListProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists AuthzPolicies in a given project and location. */
export const listProjectsLocationsAuthzPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsAuthzPoliciesRequest,
  ListProjectsLocationsAuthzPoliciesResponse,
  ListProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAuthzPoliciesRequest,
  output: ListProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsAuthzPoliciesRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsAuthzPoliciesRequest>;

export type GetIamPolicyProjectsLocationsAuthzPoliciesResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsAuthzPolicies: API.OperationMethod<
  GetIamPolicyProjectsLocationsAuthzPoliciesRequest,
  GetIamPolicyProjectsLocationsAuthzPoliciesResponse,
  GetIamPolicyProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsAuthzPoliciesRequest,
  output: GetIamPolicyProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAuthzPoliciesRequest {
  /** Required. The parent resource of the `AuthzPolicy` resource. Must be in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. User-provided ID of the `AuthzPolicy` resource to be created. */
  authzPolicyId?: string;
  /** Request body */
  body?: AuthzPolicy;
}

export const CreateProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    authzPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("authzPolicyId"),
    ),
    body: Schema.optional(AuthzPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/authzPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAuthzPoliciesRequest>;

export type CreateProjectsLocationsAuthzPoliciesResponse = Operation;
export const CreateProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new AuthzPolicy in a given project and location. */
export const createProjectsLocationsAuthzPolicies: API.OperationMethod<
  CreateProjectsLocationsAuthzPoliciesRequest,
  CreateProjectsLocationsAuthzPoliciesResponse,
  CreateProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAuthzPoliciesRequest,
  output: CreateProjectsLocationsAuthzPoliciesResponse,
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface GetProjectsLocationsInterceptEndpointGroupAssociationsRequest {
  /** Required. The name of the association to retrieve. Format: projects/{project}/locations/{location}/interceptEndpointGroupAssociations/{intercept_endpoint_group_association} */
  name: string;
}

export const GetProjectsLocationsInterceptEndpointGroupAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInterceptEndpointGroupAssociationsRequest>;

export type GetProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  InterceptEndpointGroupAssociation;
export const GetProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ InterceptEndpointGroupAssociation;

export type GetProjectsLocationsInterceptEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific association. See https://google.aip.dev/131. */
export const getProjectsLocationsInterceptEndpointGroupAssociations: API.OperationMethod<
  GetProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  GetProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  GetProjectsLocationsInterceptEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  output: GetProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsInterceptEndpointGroupAssociationsRequest {
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Required. The association to delete. */
  name: string;
}

export const DeleteProjectsLocationsInterceptEndpointGroupAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInterceptEndpointGroupAssociationsRequest>;

export type DeleteProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  Operation;
export const DeleteProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsInterceptEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an association. See https://google.aip.dev/135. */
export const deleteProjectsLocationsInterceptEndpointGroupAssociations: API.OperationMethod<
  DeleteProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  DeleteProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  DeleteProjectsLocationsInterceptEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  output: DeleteProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInterceptEndpointGroupAssociationsRequest {
  /** Required. The parent, which owns this collection of associations. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
  /** Optional. A page token, received from a previous `ListInterceptEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsInterceptEndpointGroupAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/interceptEndpointGroupAssociations",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInterceptEndpointGroupAssociationsRequest>;

export type ListProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  ListInterceptEndpointGroupAssociationsResponse;
export const ListProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInterceptEndpointGroupAssociationsResponse;

export type ListProjectsLocationsInterceptEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists associations in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsInterceptEndpointGroupAssociations: API.PaginatedOperationMethod<
  ListProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  ListProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  ListProjectsLocationsInterceptEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  output: ListProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsInterceptEndpointGroupAssociationsRequest {
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/interceptEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Optional. The list of fields to update. Fields are specified relative to the association (e.g. `description`; *not* `intercept_endpoint_group_association.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Request body */
  body?: InterceptEndpointGroupAssociation;
}

export const PatchProjectsLocationsInterceptEndpointGroupAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(InterceptEndpointGroupAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsInterceptEndpointGroupAssociationsRequest>;

export type PatchProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  Operation;
export const PatchProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsInterceptEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an association. See https://google.aip.dev/134. */
export const patchProjectsLocationsInterceptEndpointGroupAssociations: API.OperationMethod<
  PatchProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  PatchProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  PatchProjectsLocationsInterceptEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  output: PatchProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsInterceptEndpointGroupAssociationsRequest {
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Required. The parent resource where this association will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. The ID to use for the new association, which will become the final component of the endpoint group's resource name. If not provided, the server will generate a unique ID. */
  interceptEndpointGroupAssociationId?: string;
  /** Request body */
  body?: InterceptEndpointGroupAssociation;
}

export const CreateProjectsLocationsInterceptEndpointGroupAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    interceptEndpointGroupAssociationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("interceptEndpointGroupAssociationId"),
    ),
    body: Schema.optional(InterceptEndpointGroupAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/interceptEndpointGroupAssociations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInterceptEndpointGroupAssociationsRequest>;

export type CreateProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  Operation;
export const CreateProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsInterceptEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an association in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsInterceptEndpointGroupAssociations: API.OperationMethod<
  CreateProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  CreateProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  CreateProjectsLocationsInterceptEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  output: CreateProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAuthorizationPoliciesRequest {
  /** Required. Short name of the AuthorizationPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy". */
  authorizationPolicyId?: string;
  /** Required. The parent resource of the AuthorizationPolicy. Must be in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Request body */
  body?: AuthorizationPolicy;
}

export const CreateProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorizationPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("authorizationPolicyId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AuthorizationPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/authorizationPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAuthorizationPoliciesRequest>;

export type CreateProjectsLocationsAuthorizationPoliciesResponse = Operation;
export const CreateProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new AuthorizationPolicy in a given project and location. */
export const createProjectsLocationsAuthorizationPolicies: API.OperationMethod<
  CreateProjectsLocationsAuthorizationPoliciesRequest,
  CreateProjectsLocationsAuthorizationPoliciesResponse,
  CreateProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAuthorizationPoliciesRequest,
  output: CreateProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAuthorizationPoliciesRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the AuthorizationPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Required. Name of the AuthorizationPolicy resource. It matches pattern `projects/{project}/locations/{location}/authorizationPolicies/`. */
  name: string;
  /** Request body */
  body?: AuthorizationPolicy;
}

export const PatchProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AuthorizationPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAuthorizationPoliciesRequest>;

export type PatchProjectsLocationsAuthorizationPoliciesResponse = Operation;
export const PatchProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single AuthorizationPolicy. */
export const patchProjectsLocationsAuthorizationPolicies: API.OperationMethod<
  PatchProjectsLocationsAuthorizationPoliciesRequest,
  PatchProjectsLocationsAuthorizationPoliciesResponse,
  PatchProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAuthorizationPoliciesRequest,
  output: PatchProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAuthorizationPoliciesRequest {
  /** Maximum number of AuthorizationPolicies to return per call. */
  pageSize?: number;
  /** The value returned by the last `ListAuthorizationPoliciesResponse` Indicates that this is a continuation of a prior `ListAuthorizationPolicies` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. The project and location from which the AuthorizationPolicies should be listed, specified in the format `projects/{project}/locations/{location}`. */
  parent: string;
}

export const ListProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/authorizationPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAuthorizationPoliciesRequest>;

export type ListProjectsLocationsAuthorizationPoliciesResponse =
  ListAuthorizationPoliciesResponse;
export const ListProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAuthorizationPoliciesResponse;

export type ListProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists AuthorizationPolicies in a given project and location. */
export const listProjectsLocationsAuthorizationPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsAuthorizationPoliciesRequest,
  ListProjectsLocationsAuthorizationPoliciesResponse,
  ListProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAuthorizationPoliciesRequest,
  output: ListProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsAuthorizationPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsAuthorizationPoliciesRequest>;

export type GetIamPolicyProjectsLocationsAuthorizationPoliciesResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsAuthorizationPolicies: API.OperationMethod<
  GetIamPolicyProjectsLocationsAuthorizationPoliciesRequest,
  GetIamPolicyProjectsLocationsAuthorizationPoliciesResponse,
  GetIamPolicyProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsAuthorizationPoliciesRequest,
  output: GetIamPolicyProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAuthorizationPoliciesRequest {
  /** Required. A name of the AuthorizationPolicy to delete. Must be in the format `projects/{project}/locations/{location}/authorizationPolicies/*`. */
  name: string;
}

export const DeleteProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAuthorizationPoliciesRequest>;

export type DeleteProjectsLocationsAuthorizationPoliciesResponse = Operation;
export const DeleteProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single AuthorizationPolicy. */
export const deleteProjectsLocationsAuthorizationPolicies: API.OperationMethod<
  DeleteProjectsLocationsAuthorizationPoliciesRequest,
  DeleteProjectsLocationsAuthorizationPoliciesResponse,
  DeleteProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAuthorizationPoliciesRequest,
  output: DeleteProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsAuthorizationPoliciesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsAuthorizationPoliciesRequest>;

export type TestIamPermissionsProjectsLocationsAuthorizationPoliciesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsAuthorizationPolicies: API.OperationMethod<
  TestIamPermissionsProjectsLocationsAuthorizationPoliciesRequest,
  TestIamPermissionsProjectsLocationsAuthorizationPoliciesResponse,
  TestIamPermissionsProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsAuthorizationPoliciesRequest,
  output: TestIamPermissionsProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAuthorizationPoliciesRequest {
  /** Required. A name of the AuthorizationPolicy to get. Must be in the format `projects/{project}/locations/{location}/authorizationPolicies/*`. */
  name: string;
}

export const GetProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAuthorizationPoliciesRequest>;

export type GetProjectsLocationsAuthorizationPoliciesResponse =
  AuthorizationPolicy;
export const GetProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AuthorizationPolicy;

export type GetProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single AuthorizationPolicy. */
export const getProjectsLocationsAuthorizationPolicies: API.OperationMethod<
  GetProjectsLocationsAuthorizationPoliciesRequest,
  GetProjectsLocationsAuthorizationPoliciesResponse,
  GetProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAuthorizationPoliciesRequest,
  output: GetProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsAuthorizationPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsAuthorizationPoliciesRequest>;

export type SetIamPolicyProjectsLocationsAuthorizationPoliciesResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsAuthorizationPolicies: API.OperationMethod<
  SetIamPolicyProjectsLocationsAuthorizationPoliciesRequest,
  SetIamPolicyProjectsLocationsAuthorizationPoliciesResponse,
  SetIamPolicyProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsAuthorizationPoliciesRequest,
  output: SetIamPolicyProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsMirroringEndpointGroupsRequest {
  /** Required. The endpoint group to delete. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
}

export const DeleteProjectsLocationsMirroringEndpointGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsMirroringEndpointGroupsRequest>;

export type DeleteProjectsLocationsMirroringEndpointGroupsResponse = Operation;
export const DeleteProjectsLocationsMirroringEndpointGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsMirroringEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an endpoint group. See https://google.aip.dev/135. */
export const deleteProjectsLocationsMirroringEndpointGroups: API.OperationMethod<
  DeleteProjectsLocationsMirroringEndpointGroupsRequest,
  DeleteProjectsLocationsMirroringEndpointGroupsResponse,
  DeleteProjectsLocationsMirroringEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMirroringEndpointGroupsRequest,
  output: DeleteProjectsLocationsMirroringEndpointGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMirroringEndpointGroupsRequest {
  /** Required. The name of the endpoint group to retrieve. Format: projects/{project}/locations/{location}/mirroringEndpointGroups/{mirroring_endpoint_group} */
  name: string;
}

export const GetProjectsLocationsMirroringEndpointGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMirroringEndpointGroupsRequest>;

export type GetProjectsLocationsMirroringEndpointGroupsResponse =
  MirroringEndpointGroup;
export const GetProjectsLocationsMirroringEndpointGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MirroringEndpointGroup;

export type GetProjectsLocationsMirroringEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific endpoint group. See https://google.aip.dev/131. */
export const getProjectsLocationsMirroringEndpointGroups: API.OperationMethod<
  GetProjectsLocationsMirroringEndpointGroupsRequest,
  GetProjectsLocationsMirroringEndpointGroupsResponse,
  GetProjectsLocationsMirroringEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMirroringEndpointGroupsRequest,
  output: GetProjectsLocationsMirroringEndpointGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsMirroringEndpointGroupsRequest {
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Optional. The list of fields to update. Fields are specified relative to the endpoint group (e.g. `description`; *not* `mirroring_endpoint_group.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Immutable. Identifier. The resource name of this endpoint group, for example: `projects/123456789/locations/global/mirroringEndpointGroups/my-eg`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Request body */
  body?: MirroringEndpointGroup;
}

export const PatchProjectsLocationsMirroringEndpointGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MirroringEndpointGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsMirroringEndpointGroupsRequest>;

export type PatchProjectsLocationsMirroringEndpointGroupsResponse = Operation;
export const PatchProjectsLocationsMirroringEndpointGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsMirroringEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an endpoint group. See https://google.aip.dev/134. */
export const patchProjectsLocationsMirroringEndpointGroups: API.OperationMethod<
  PatchProjectsLocationsMirroringEndpointGroupsRequest,
  PatchProjectsLocationsMirroringEndpointGroupsResponse,
  PatchProjectsLocationsMirroringEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMirroringEndpointGroupsRequest,
  output: PatchProjectsLocationsMirroringEndpointGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMirroringEndpointGroupsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
  /** Required. The parent, which owns this collection of endpoint groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
  /** Optional. A page token, received from a previous `ListMirroringEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsMirroringEndpointGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/mirroringEndpointGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMirroringEndpointGroupsRequest>;

export type ListProjectsLocationsMirroringEndpointGroupsResponse =
  ListMirroringEndpointGroupsResponse;
export const ListProjectsLocationsMirroringEndpointGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMirroringEndpointGroupsResponse;

export type ListProjectsLocationsMirroringEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists endpoint groups in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsMirroringEndpointGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsMirroringEndpointGroupsRequest,
  ListProjectsLocationsMirroringEndpointGroupsResponse,
  ListProjectsLocationsMirroringEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMirroringEndpointGroupsRequest,
  output: ListProjectsLocationsMirroringEndpointGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsMirroringEndpointGroupsRequest {
  /** Required. The parent resource where this endpoint group will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Required. The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name. */
  mirroringEndpointGroupId?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: MirroringEndpointGroup;
}

export const CreateProjectsLocationsMirroringEndpointGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    mirroringEndpointGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("mirroringEndpointGroupId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(MirroringEndpointGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/mirroringEndpointGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsMirroringEndpointGroupsRequest>;

export type CreateProjectsLocationsMirroringEndpointGroupsResponse = Operation;
export const CreateProjectsLocationsMirroringEndpointGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsMirroringEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an endpoint group in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsMirroringEndpointGroups: API.OperationMethod<
  CreateProjectsLocationsMirroringEndpointGroupsRequest,
  CreateProjectsLocationsMirroringEndpointGroupsResponse,
  CreateProjectsLocationsMirroringEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMirroringEndpointGroupsRequest,
  output: CreateProjectsLocationsMirroringEndpointGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsFirewallEndpointAssociationsRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsFirewallEndpointAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsFirewallEndpointAssociationsRequest>;

export type DeleteProjectsLocationsFirewallEndpointAssociationsResponse =
  Operation;
export const DeleteProjectsLocationsFirewallEndpointAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsFirewallEndpointAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single FirewallEndpointAssociation. */
export const deleteProjectsLocationsFirewallEndpointAssociations: API.OperationMethod<
  DeleteProjectsLocationsFirewallEndpointAssociationsRequest,
  DeleteProjectsLocationsFirewallEndpointAssociationsResponse,
  DeleteProjectsLocationsFirewallEndpointAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsFirewallEndpointAssociationsRequest,
  output: DeleteProjectsLocationsFirewallEndpointAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsFirewallEndpointAssociationsRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsFirewallEndpointAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsFirewallEndpointAssociationsRequest>;

export type GetProjectsLocationsFirewallEndpointAssociationsResponse =
  FirewallEndpointAssociation;
export const GetProjectsLocationsFirewallEndpointAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FirewallEndpointAssociation;

export type GetProjectsLocationsFirewallEndpointAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single FirewallEndpointAssociation. */
export const getProjectsLocationsFirewallEndpointAssociations: API.OperationMethod<
  GetProjectsLocationsFirewallEndpointAssociationsRequest,
  GetProjectsLocationsFirewallEndpointAssociationsResponse,
  GetProjectsLocationsFirewallEndpointAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsFirewallEndpointAssociationsRequest,
  output: GetProjectsLocationsFirewallEndpointAssociationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsFirewallEndpointAssociationsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Optional. Id of the requesting object. If auto-generating Id server-side, remove this field and firewall_endpoint_association_id from the method_signature of Create RPC. */
  firewallEndpointAssociationId?: string;
  /** Request body */
  body?: FirewallEndpointAssociation;
}

export const CreateProjectsLocationsFirewallEndpointAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    firewallEndpointAssociationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("firewallEndpointAssociationId"),
    ),
    body: Schema.optional(FirewallEndpointAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/firewallEndpointAssociations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsFirewallEndpointAssociationsRequest>;

export type CreateProjectsLocationsFirewallEndpointAssociationsResponse =
  Operation;
export const CreateProjectsLocationsFirewallEndpointAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsFirewallEndpointAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new FirewallEndpointAssociation in a given project and location. */
export const createProjectsLocationsFirewallEndpointAssociations: API.OperationMethod<
  CreateProjectsLocationsFirewallEndpointAssociationsRequest,
  CreateProjectsLocationsFirewallEndpointAssociationsResponse,
  CreateProjectsLocationsFirewallEndpointAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsFirewallEndpointAssociationsRequest,
  output: CreateProjectsLocationsFirewallEndpointAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsFirewallEndpointAssociationsRequest {
  /** Immutable. Identifier. name of resource */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Association resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: FirewallEndpointAssociation;
}

export const PatchProjectsLocationsFirewallEndpointAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(FirewallEndpointAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsFirewallEndpointAssociationsRequest>;

export type PatchProjectsLocationsFirewallEndpointAssociationsResponse =
  Operation;
export const PatchProjectsLocationsFirewallEndpointAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsFirewallEndpointAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single FirewallEndpointAssociation. */
export const patchProjectsLocationsFirewallEndpointAssociations: API.OperationMethod<
  PatchProjectsLocationsFirewallEndpointAssociationsRequest,
  PatchProjectsLocationsFirewallEndpointAssociationsResponse,
  PatchProjectsLocationsFirewallEndpointAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsFirewallEndpointAssociationsRequest,
  output: PatchProjectsLocationsFirewallEndpointAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsFirewallEndpointAssociationsRequest {
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Hint for how to order the results */
  orderBy?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Required. Parent value for ListAssociationsRequest */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsFirewallEndpointAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/firewallEndpointAssociations",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsFirewallEndpointAssociationsRequest>;

export type ListProjectsLocationsFirewallEndpointAssociationsResponse =
  ListFirewallEndpointAssociationsResponse;
export const ListProjectsLocationsFirewallEndpointAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFirewallEndpointAssociationsResponse;

export type ListProjectsLocationsFirewallEndpointAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Associations in a given project and location. */
export const listProjectsLocationsFirewallEndpointAssociations: API.PaginatedOperationMethod<
  ListProjectsLocationsFirewallEndpointAssociationsRequest,
  ListProjectsLocationsFirewallEndpointAssociationsResponse,
  ListProjectsLocationsFirewallEndpointAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsFirewallEndpointAssociationsRequest,
  output: ListProjectsLocationsFirewallEndpointAssociationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsTlsInspectionPoliciesRequest {
  /** Maximum number of TlsInspectionPolicies to return per call. */
  pageSize?: number;
  /** The value returned by the last 'ListTlsInspectionPoliciesResponse' Indicates that this is a continuation of a prior 'ListTlsInspectionPolicies' call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. The project and location from which the TlsInspectionPolicies should be listed, specified in the format `projects/{project}/locations/{location}`. */
  parent: string;
}

export const ListProjectsLocationsTlsInspectionPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/tlsInspectionPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTlsInspectionPoliciesRequest>;

export type ListProjectsLocationsTlsInspectionPoliciesResponse =
  ListTlsInspectionPoliciesResponse;
export const ListProjectsLocationsTlsInspectionPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTlsInspectionPoliciesResponse;

export type ListProjectsLocationsTlsInspectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists TlsInspectionPolicies in a given project and location. */
export const listProjectsLocationsTlsInspectionPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsTlsInspectionPoliciesRequest,
  ListProjectsLocationsTlsInspectionPoliciesResponse,
  ListProjectsLocationsTlsInspectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTlsInspectionPoliciesRequest,
  output: ListProjectsLocationsTlsInspectionPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsTlsInspectionPoliciesRequest {
  /** Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy} tls_inspection_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the TlsInspectionPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: TlsInspectionPolicy;
}

export const PatchProjectsLocationsTlsInspectionPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(TlsInspectionPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTlsInspectionPoliciesRequest>;

export type PatchProjectsLocationsTlsInspectionPoliciesResponse = Operation;
export const PatchProjectsLocationsTlsInspectionPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsTlsInspectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single TlsInspectionPolicy. */
export const patchProjectsLocationsTlsInspectionPolicies: API.OperationMethod<
  PatchProjectsLocationsTlsInspectionPoliciesRequest,
  PatchProjectsLocationsTlsInspectionPoliciesResponse,
  PatchProjectsLocationsTlsInspectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTlsInspectionPoliciesRequest,
  output: PatchProjectsLocationsTlsInspectionPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsTlsInspectionPoliciesRequest {
  /** Required. The parent resource of the TlsInspectionPolicy. Must be in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. Short name of the TlsInspectionPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "tls_inspection_policy1". */
  tlsInspectionPolicyId?: string;
  /** Request body */
  body?: TlsInspectionPolicy;
}

export const CreateProjectsLocationsTlsInspectionPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    tlsInspectionPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("tlsInspectionPolicyId"),
    ),
    body: Schema.optional(TlsInspectionPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/tlsInspectionPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTlsInspectionPoliciesRequest>;

export type CreateProjectsLocationsTlsInspectionPoliciesResponse = Operation;
export const CreateProjectsLocationsTlsInspectionPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsTlsInspectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new TlsInspectionPolicy in a given project and location. */
export const createProjectsLocationsTlsInspectionPolicies: API.OperationMethod<
  CreateProjectsLocationsTlsInspectionPoliciesRequest,
  CreateProjectsLocationsTlsInspectionPoliciesResponse,
  CreateProjectsLocationsTlsInspectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTlsInspectionPoliciesRequest,
  output: CreateProjectsLocationsTlsInspectionPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsTlsInspectionPoliciesRequest {
  /** Required. A name of the TlsInspectionPolicy to get. Must be in the format `projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy}`. */
  name: string;
}

export const GetProjectsLocationsTlsInspectionPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTlsInspectionPoliciesRequest>;

export type GetProjectsLocationsTlsInspectionPoliciesResponse =
  TlsInspectionPolicy;
export const GetProjectsLocationsTlsInspectionPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TlsInspectionPolicy;

export type GetProjectsLocationsTlsInspectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single TlsInspectionPolicy. */
export const getProjectsLocationsTlsInspectionPolicies: API.OperationMethod<
  GetProjectsLocationsTlsInspectionPoliciesRequest,
  GetProjectsLocationsTlsInspectionPoliciesResponse,
  GetProjectsLocationsTlsInspectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTlsInspectionPoliciesRequest,
  output: GetProjectsLocationsTlsInspectionPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsTlsInspectionPoliciesRequest {
  /** Required. A name of the TlsInspectionPolicy to delete. Must be in the format `projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy}`. */
  name: string;
  /** If set to true, any rules for this TlsInspectionPolicy will also be deleted. (Otherwise, the request will only work if the TlsInspectionPolicy has no rules.) */
  force?: boolean;
}

export const DeleteProjectsLocationsTlsInspectionPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTlsInspectionPoliciesRequest>;

export type DeleteProjectsLocationsTlsInspectionPoliciesResponse = Operation;
export const DeleteProjectsLocationsTlsInspectionPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsTlsInspectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single TlsInspectionPolicy. */
export const deleteProjectsLocationsTlsInspectionPolicies: API.OperationMethod<
  DeleteProjectsLocationsTlsInspectionPoliciesRequest,
  DeleteProjectsLocationsTlsInspectionPoliciesResponse,
  DeleteProjectsLocationsTlsInspectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTlsInspectionPoliciesRequest,
  output: DeleteProjectsLocationsTlsInspectionPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMirroringDeploymentGroupsRequest {
  /** Required. The name of the deployment group to retrieve. Format: projects/{project}/locations/{location}/mirroringDeploymentGroups/{mirroring_deployment_group} */
  name: string;
}

export const GetProjectsLocationsMirroringDeploymentGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMirroringDeploymentGroupsRequest>;

export type GetProjectsLocationsMirroringDeploymentGroupsResponse =
  MirroringDeploymentGroup;
export const GetProjectsLocationsMirroringDeploymentGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MirroringDeploymentGroup;

export type GetProjectsLocationsMirroringDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific deployment group. See https://google.aip.dev/131. */
export const getProjectsLocationsMirroringDeploymentGroups: API.OperationMethod<
  GetProjectsLocationsMirroringDeploymentGroupsRequest,
  GetProjectsLocationsMirroringDeploymentGroupsResponse,
  GetProjectsLocationsMirroringDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMirroringDeploymentGroupsRequest,
  output: GetProjectsLocationsMirroringDeploymentGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsMirroringDeploymentGroupsRequest {
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Required. The deployment group to delete. */
  name: string;
}

export const DeleteProjectsLocationsMirroringDeploymentGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsMirroringDeploymentGroupsRequest>;

export type DeleteProjectsLocationsMirroringDeploymentGroupsResponse =
  Operation;
export const DeleteProjectsLocationsMirroringDeploymentGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsMirroringDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a deployment group. See https://google.aip.dev/135. */
export const deleteProjectsLocationsMirroringDeploymentGroups: API.OperationMethod<
  DeleteProjectsLocationsMirroringDeploymentGroupsRequest,
  DeleteProjectsLocationsMirroringDeploymentGroupsResponse,
  DeleteProjectsLocationsMirroringDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMirroringDeploymentGroupsRequest,
  output: DeleteProjectsLocationsMirroringDeploymentGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsMirroringDeploymentGroupsRequest {
  /** Required. The parent resource where this deployment group will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Required. The ID to use for the new deployment group, which will become the final component of the deployment group's resource name. */
  mirroringDeploymentGroupId?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: MirroringDeploymentGroup;
}

export const CreateProjectsLocationsMirroringDeploymentGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    mirroringDeploymentGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("mirroringDeploymentGroupId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(MirroringDeploymentGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/mirroringDeploymentGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsMirroringDeploymentGroupsRequest>;

export type CreateProjectsLocationsMirroringDeploymentGroupsResponse =
  Operation;
export const CreateProjectsLocationsMirroringDeploymentGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsMirroringDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a deployment group in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsMirroringDeploymentGroups: API.OperationMethod<
  CreateProjectsLocationsMirroringDeploymentGroupsRequest,
  CreateProjectsLocationsMirroringDeploymentGroupsResponse,
  CreateProjectsLocationsMirroringDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMirroringDeploymentGroupsRequest,
  output: CreateProjectsLocationsMirroringDeploymentGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMirroringDeploymentGroupsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
  /** Required. The parent, which owns this collection of deployment groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. A page token, received from a previous `ListMirroringDeploymentGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringDeploymentGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
}

export const ListProjectsLocationsMirroringDeploymentGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/mirroringDeploymentGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMirroringDeploymentGroupsRequest>;

export type ListProjectsLocationsMirroringDeploymentGroupsResponse =
  ListMirroringDeploymentGroupsResponse;
export const ListProjectsLocationsMirroringDeploymentGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMirroringDeploymentGroupsResponse;

export type ListProjectsLocationsMirroringDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists deployment groups in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsMirroringDeploymentGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsMirroringDeploymentGroupsRequest,
  ListProjectsLocationsMirroringDeploymentGroupsResponse,
  ListProjectsLocationsMirroringDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMirroringDeploymentGroupsRequest,
  output: ListProjectsLocationsMirroringDeploymentGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsMirroringDeploymentGroupsRequest {
  /** Optional. The list of fields to update. Fields are specified relative to the deployment group (e.g. `description`; *not* `mirroring_deployment_group.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Immutable. Identifier. The resource name of this deployment group, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: MirroringDeploymentGroup;
}

export const PatchProjectsLocationsMirroringDeploymentGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(MirroringDeploymentGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsMirroringDeploymentGroupsRequest>;

export type PatchProjectsLocationsMirroringDeploymentGroupsResponse = Operation;
export const PatchProjectsLocationsMirroringDeploymentGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsMirroringDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a deployment group. See https://google.aip.dev/134. */
export const patchProjectsLocationsMirroringDeploymentGroups: API.OperationMethod<
  PatchProjectsLocationsMirroringDeploymentGroupsRequest,
  PatchProjectsLocationsMirroringDeploymentGroupsResponse,
  PatchProjectsLocationsMirroringDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMirroringDeploymentGroupsRequest,
  output: PatchProjectsLocationsMirroringDeploymentGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsFirewallEndpointsRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the Endpoint resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Immutable. Identifier. Name of resource. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: FirewallEndpoint;
}

export const PatchProjectsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(FirewallEndpoint).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsFirewallEndpointsRequest>;

export type PatchProjectsLocationsFirewallEndpointsResponse = Operation;
export const PatchProjectsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single project Endpoint. */
export const patchProjectsLocationsFirewallEndpoints: API.OperationMethod<
  PatchProjectsLocationsFirewallEndpointsRequest,
  PatchProjectsLocationsFirewallEndpointsResponse,
  PatchProjectsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsFirewallEndpointsRequest,
  output: PatchProjectsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsFirewallEndpointsRequest {
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Hint for how to order the results */
  orderBy?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Parent value for ListEndpointsRequest */
  parent: string;
}

export const ListProjectsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/firewallEndpoints" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsFirewallEndpointsRequest>;

export type ListProjectsLocationsFirewallEndpointsResponse =
  ListFirewallEndpointsResponse;
export const ListProjectsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFirewallEndpointsResponse;

export type ListProjectsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists FirewallEndpoints in a given project and location. */
export const listProjectsLocationsFirewallEndpoints: API.PaginatedOperationMethod<
  ListProjectsLocationsFirewallEndpointsRequest,
  ListProjectsLocationsFirewallEndpointsResponse,
  ListProjectsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsFirewallEndpointsRequest,
  output: ListProjectsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsFirewallEndpointsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Required. Id of the requesting object. If auto-generating Id server-side, remove this field and firewall_endpoint_id from the method_signature of Create RPC. */
  firewallEndpointId?: string;
  /** Request body */
  body?: FirewallEndpoint;
}

export const CreateProjectsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    firewallEndpointId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("firewallEndpointId"),
    ),
    body: Schema.optional(FirewallEndpoint).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/firewallEndpoints",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsFirewallEndpointsRequest>;

export type CreateProjectsLocationsFirewallEndpointsResponse = Operation;
export const CreateProjectsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new FirewallEndpoint in a given project and location. */
export const createProjectsLocationsFirewallEndpoints: API.OperationMethod<
  CreateProjectsLocationsFirewallEndpointsRequest,
  CreateProjectsLocationsFirewallEndpointsResponse,
  CreateProjectsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsFirewallEndpointsRequest,
  output: CreateProjectsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsFirewallEndpointsRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsFirewallEndpointsRequest>;

export type DeleteProjectsLocationsFirewallEndpointsResponse = Operation;
export const DeleteProjectsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single project Endpoint. */
export const deleteProjectsLocationsFirewallEndpoints: API.OperationMethod<
  DeleteProjectsLocationsFirewallEndpointsRequest,
  DeleteProjectsLocationsFirewallEndpointsResponse,
  DeleteProjectsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsFirewallEndpointsRequest,
  output: DeleteProjectsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsFirewallEndpointsRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsFirewallEndpointsRequest>;

export type GetProjectsLocationsFirewallEndpointsResponse = FirewallEndpoint;
export const GetProjectsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FirewallEndpoint;

export type GetProjectsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single project Endpoint. */
export const getProjectsLocationsFirewallEndpoints: API.OperationMethod<
  GetProjectsLocationsFirewallEndpointsRequest,
  GetProjectsLocationsFirewallEndpointsResponse,
  GetProjectsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsFirewallEndpointsRequest,
  output: GetProjectsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsServerTlsPoliciesRequest {
  /** Optional. Setting this field to `true` will opt the request into returning the resources that are reachable, and into including the names of those that were unreachable in the [ListServerTlsPoliciesResponse.unreachable] field. This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`. */
  returnPartialSuccess?: boolean;
  /** Required. The project and location from which the ServerTlsPolicies should be listed, specified in the format `projects/* /locations/{location}`. */
  parent: string;
  /** Maximum number of ServerTlsPolicies to return per call. */
  pageSize?: number;
  /** The value returned by the last `ListServerTlsPoliciesResponse` Indicates that this is a continuation of a prior `ListServerTlsPolicies` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/serverTlsPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsServerTlsPoliciesRequest>;

export type ListProjectsLocationsServerTlsPoliciesResponse =
  ListServerTlsPoliciesResponse;
export const ListProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListServerTlsPoliciesResponse;

export type ListProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ServerTlsPolicies in a given project and location. */
export const listProjectsLocationsServerTlsPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsServerTlsPoliciesRequest,
  ListProjectsLocationsServerTlsPoliciesResponse,
  ListProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServerTlsPoliciesRequest,
  output: ListProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsServerTlsPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsServerTlsPoliciesRequest>;

export type GetIamPolicyProjectsLocationsServerTlsPoliciesResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsServerTlsPolicies: API.OperationMethod<
  GetIamPolicyProjectsLocationsServerTlsPoliciesRequest,
  GetIamPolicyProjectsLocationsServerTlsPoliciesResponse,
  GetIamPolicyProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsServerTlsPoliciesRequest,
  output: GetIamPolicyProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsServerTlsPoliciesRequest {
  /** Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/* /locations/{location}/serverTlsPolicies/{server_tls_policy}` */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the ServerTlsPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: ServerTlsPolicy;
}

export const PatchProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ServerTlsPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsServerTlsPoliciesRequest>;

export type PatchProjectsLocationsServerTlsPoliciesResponse = Operation;
export const PatchProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single ServerTlsPolicy. */
export const patchProjectsLocationsServerTlsPolicies: API.OperationMethod<
  PatchProjectsLocationsServerTlsPoliciesRequest,
  PatchProjectsLocationsServerTlsPoliciesResponse,
  PatchProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsServerTlsPoliciesRequest,
  output: PatchProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsServerTlsPoliciesRequest {
  /** Required. The parent resource of the ServerTlsPolicy. Must be in the format `projects/* /locations/{location}`. */
  parent: string;
  /** Required. Short name of the ServerTlsPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "server_mtls_policy". */
  serverTlsPolicyId?: string;
  /** Request body */
  body?: ServerTlsPolicy;
}

export const CreateProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    serverTlsPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("serverTlsPolicyId"),
    ),
    body: Schema.optional(ServerTlsPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/serverTlsPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsServerTlsPoliciesRequest>;

export type CreateProjectsLocationsServerTlsPoliciesResponse = Operation;
export const CreateProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ServerTlsPolicy in a given project and location. */
export const createProjectsLocationsServerTlsPolicies: API.OperationMethod<
  CreateProjectsLocationsServerTlsPoliciesRequest,
  CreateProjectsLocationsServerTlsPoliciesResponse,
  CreateProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServerTlsPoliciesRequest,
  output: CreateProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsServerTlsPoliciesRequest {
  /** Required. A name of the ServerTlsPolicy to get. Must be in the format `projects/* /locations/{location}/serverTlsPolicies/*`. */
  name: string;
}

export const GetProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsServerTlsPoliciesRequest>;

export type GetProjectsLocationsServerTlsPoliciesResponse = ServerTlsPolicy;
export const GetProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServerTlsPolicy;

export type GetProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ServerTlsPolicy. */
export const getProjectsLocationsServerTlsPolicies: API.OperationMethod<
  GetProjectsLocationsServerTlsPoliciesRequest,
  GetProjectsLocationsServerTlsPoliciesResponse,
  GetProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServerTlsPoliciesRequest,
  output: GetProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsServerTlsPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsServerTlsPoliciesRequest>;

export type SetIamPolicyProjectsLocationsServerTlsPoliciesResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsServerTlsPolicies: API.OperationMethod<
  SetIamPolicyProjectsLocationsServerTlsPoliciesRequest,
  SetIamPolicyProjectsLocationsServerTlsPoliciesResponse,
  SetIamPolicyProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsServerTlsPoliciesRequest,
  output: SetIamPolicyProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsServerTlsPoliciesRequest {
  /** Required. A name of the ServerTlsPolicy to delete. Must be in the format `projects/* /locations/{location}/serverTlsPolicies/*`. */
  name: string;
}

export const DeleteProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsServerTlsPoliciesRequest>;

export type DeleteProjectsLocationsServerTlsPoliciesResponse = Operation;
export const DeleteProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ServerTlsPolicy. */
export const deleteProjectsLocationsServerTlsPolicies: API.OperationMethod<
  DeleteProjectsLocationsServerTlsPoliciesRequest,
  DeleteProjectsLocationsServerTlsPoliciesResponse,
  DeleteProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServerTlsPoliciesRequest,
  output: DeleteProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsServerTlsPoliciesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsServerTlsPoliciesRequest>;

export type TestIamPermissionsProjectsLocationsServerTlsPoliciesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsServerTlsPolicies: API.OperationMethod<
  TestIamPermissionsProjectsLocationsServerTlsPoliciesRequest,
  TestIamPermissionsProjectsLocationsServerTlsPoliciesResponse,
  TestIamPermissionsProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsServerTlsPoliciesRequest,
  output: TestIamPermissionsProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsGatewaySecurityPoliciesRequest {
  /** Required. A name of the GatewaySecurityPolicy to delete. Must be in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/*`. */
  name: string;
}

export const DeleteProjectsLocationsGatewaySecurityPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGatewaySecurityPoliciesRequest>;

export type DeleteProjectsLocationsGatewaySecurityPoliciesResponse = Operation;
export const DeleteProjectsLocationsGatewaySecurityPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsGatewaySecurityPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single GatewaySecurityPolicy. */
export const deleteProjectsLocationsGatewaySecurityPolicies: API.OperationMethod<
  DeleteProjectsLocationsGatewaySecurityPoliciesRequest,
  DeleteProjectsLocationsGatewaySecurityPoliciesResponse,
  DeleteProjectsLocationsGatewaySecurityPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGatewaySecurityPoliciesRequest,
  output: DeleteProjectsLocationsGatewaySecurityPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGatewaySecurityPoliciesRequest {
  /** Required. A name of the GatewaySecurityPolicy to get. Must be in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/*`. */
  name: string;
}

export const GetProjectsLocationsGatewaySecurityPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGatewaySecurityPoliciesRequest>;

export type GetProjectsLocationsGatewaySecurityPoliciesResponse =
  GatewaySecurityPolicy;
export const GetProjectsLocationsGatewaySecurityPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GatewaySecurityPolicy;

export type GetProjectsLocationsGatewaySecurityPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single GatewaySecurityPolicy. */
export const getProjectsLocationsGatewaySecurityPolicies: API.OperationMethod<
  GetProjectsLocationsGatewaySecurityPoliciesRequest,
  GetProjectsLocationsGatewaySecurityPoliciesResponse,
  GetProjectsLocationsGatewaySecurityPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGatewaySecurityPoliciesRequest,
  output: GetProjectsLocationsGatewaySecurityPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsGatewaySecurityPoliciesRequest {
  /** Required. The parent resource of the GatewaySecurityPolicy. Must be in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. Short name of the GatewaySecurityPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "gateway_security_policy1". */
  gatewaySecurityPolicyId?: string;
  /** Request body */
  body?: GatewaySecurityPolicy;
}

export const CreateProjectsLocationsGatewaySecurityPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    gatewaySecurityPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("gatewaySecurityPolicyId"),
    ),
    body: Schema.optional(GatewaySecurityPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/gatewaySecurityPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGatewaySecurityPoliciesRequest>;

export type CreateProjectsLocationsGatewaySecurityPoliciesResponse = Operation;
export const CreateProjectsLocationsGatewaySecurityPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsGatewaySecurityPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new GatewaySecurityPolicy in a given project and location. */
export const createProjectsLocationsGatewaySecurityPolicies: API.OperationMethod<
  CreateProjectsLocationsGatewaySecurityPoliciesRequest,
  CreateProjectsLocationsGatewaySecurityPoliciesResponse,
  CreateProjectsLocationsGatewaySecurityPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGatewaySecurityPoliciesRequest,
  output: CreateProjectsLocationsGatewaySecurityPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsGatewaySecurityPoliciesRequest {
  /** Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy} gateway_security_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the GatewaySecurityPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: GatewaySecurityPolicy;
}

export const PatchProjectsLocationsGatewaySecurityPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GatewaySecurityPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGatewaySecurityPoliciesRequest>;

export type PatchProjectsLocationsGatewaySecurityPoliciesResponse = Operation;
export const PatchProjectsLocationsGatewaySecurityPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsGatewaySecurityPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single GatewaySecurityPolicy. */
export const patchProjectsLocationsGatewaySecurityPolicies: API.OperationMethod<
  PatchProjectsLocationsGatewaySecurityPoliciesRequest,
  PatchProjectsLocationsGatewaySecurityPoliciesResponse,
  PatchProjectsLocationsGatewaySecurityPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGatewaySecurityPoliciesRequest,
  output: PatchProjectsLocationsGatewaySecurityPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGatewaySecurityPoliciesRequest {
  /** Required. The project and location from which the GatewaySecurityPolicies should be listed, specified in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Maximum number of GatewaySecurityPolicies to return per call. */
  pageSize?: number;
  /** The value returned by the last 'ListGatewaySecurityPoliciesResponse' Indicates that this is a continuation of a prior 'ListGatewaySecurityPolicies' call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListProjectsLocationsGatewaySecurityPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/gatewaySecurityPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGatewaySecurityPoliciesRequest>;

export type ListProjectsLocationsGatewaySecurityPoliciesResponse =
  ListGatewaySecurityPoliciesResponse;
export const ListProjectsLocationsGatewaySecurityPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGatewaySecurityPoliciesResponse;

export type ListProjectsLocationsGatewaySecurityPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists GatewaySecurityPolicies in a given project and location. */
export const listProjectsLocationsGatewaySecurityPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsGatewaySecurityPoliciesRequest,
  ListProjectsLocationsGatewaySecurityPoliciesResponse,
  ListProjectsLocationsGatewaySecurityPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGatewaySecurityPoliciesRequest,
  output: ListProjectsLocationsGatewaySecurityPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsGatewaySecurityPoliciesRulesRequest {
  /** Required. A name of the GatewaySecurityPolicyRule to delete. Must be in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}/rules/*`. */
  name: string;
}

export const DeleteProjectsLocationsGatewaySecurityPoliciesRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGatewaySecurityPoliciesRulesRequest>;

export type DeleteProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  Operation;
export const DeleteProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsGatewaySecurityPoliciesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single GatewaySecurityPolicyRule. */
export const deleteProjectsLocationsGatewaySecurityPoliciesRules: API.OperationMethod<
  DeleteProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  DeleteProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  DeleteProjectsLocationsGatewaySecurityPoliciesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  output: DeleteProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGatewaySecurityPoliciesRulesRequest {
  /** Required. The name of the GatewaySecurityPolicyRule to retrieve. Format: projects/{project}/location/{location}/gatewaySecurityPolicies/* /rules/* */
  name: string;
}

export const GetProjectsLocationsGatewaySecurityPoliciesRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGatewaySecurityPoliciesRulesRequest>;

export type GetProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  GatewaySecurityPolicyRule;
export const GetProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GatewaySecurityPolicyRule;

export type GetProjectsLocationsGatewaySecurityPoliciesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single GatewaySecurityPolicyRule. */
export const getProjectsLocationsGatewaySecurityPoliciesRules: API.OperationMethod<
  GetProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  GetProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  GetProjectsLocationsGatewaySecurityPoliciesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  output: GetProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsGatewaySecurityPoliciesRulesRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the GatewaySecurityPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Required. Immutable. Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name: string;
  /** Request body */
  body?: GatewaySecurityPolicyRule;
}

export const PatchProjectsLocationsGatewaySecurityPoliciesRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GatewaySecurityPolicyRule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGatewaySecurityPoliciesRulesRequest>;

export type PatchProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  Operation;
export const PatchProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsGatewaySecurityPoliciesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single GatewaySecurityPolicyRule. */
export const patchProjectsLocationsGatewaySecurityPoliciesRules: API.OperationMethod<
  PatchProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  PatchProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  PatchProjectsLocationsGatewaySecurityPoliciesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  output: PatchProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGatewaySecurityPoliciesRulesRequest {
  /** Maximum number of GatewaySecurityPolicyRules to return per call. */
  pageSize?: number;
  /** The value returned by the last 'ListGatewaySecurityPolicyRulesResponse' Indicates that this is a continuation of a prior 'ListGatewaySecurityPolicyRules' call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. The project, location and GatewaySecurityPolicy from which the GatewaySecurityPolicyRules should be listed, specified in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}`. */
  parent: string;
}

export const ListProjectsLocationsGatewaySecurityPoliciesRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/rules" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGatewaySecurityPoliciesRulesRequest>;

export type ListProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  ListGatewaySecurityPolicyRulesResponse;
export const ListProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGatewaySecurityPolicyRulesResponse;

export type ListProjectsLocationsGatewaySecurityPoliciesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists GatewaySecurityPolicyRules in a given project and location. */
export const listProjectsLocationsGatewaySecurityPoliciesRules: API.PaginatedOperationMethod<
  ListProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  ListProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  ListProjectsLocationsGatewaySecurityPoliciesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  output: ListProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsGatewaySecurityPoliciesRulesRequest {
  /** Required. The parent where this rule will be created. Format : projects/{project}/location/{location}/gatewaySecurityPolicies/* */
  parent: string;
  /** The ID to use for the rule, which will become the final component of the rule's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. */
  gatewaySecurityPolicyRuleId?: string;
  /** Request body */
  body?: GatewaySecurityPolicyRule;
}

export const CreateProjectsLocationsGatewaySecurityPoliciesRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    gatewaySecurityPolicyRuleId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("gatewaySecurityPolicyRuleId"),
    ),
    body: Schema.optional(GatewaySecurityPolicyRule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/rules", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGatewaySecurityPoliciesRulesRequest>;

export type CreateProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  Operation;
export const CreateProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsGatewaySecurityPoliciesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new GatewaySecurityPolicy in a given project and location. */
export const createProjectsLocationsGatewaySecurityPoliciesRules: API.OperationMethod<
  CreateProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  CreateProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  CreateProjectsLocationsGatewaySecurityPoliciesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  output: CreateProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsUrlListsRequest {
  /** Required. A name of the UrlList to get. Must be in the format `projects/* /locations/{location}/urlLists/*`. */
  name: string;
}

export const GetProjectsLocationsUrlListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsUrlListsRequest>;

export type GetProjectsLocationsUrlListsResponse = UrlList;
export const GetProjectsLocationsUrlListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UrlList;

export type GetProjectsLocationsUrlListsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single UrlList. */
export const getProjectsLocationsUrlLists: API.OperationMethod<
  GetProjectsLocationsUrlListsRequest,
  GetProjectsLocationsUrlListsResponse,
  GetProjectsLocationsUrlListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsUrlListsRequest,
  output: GetProjectsLocationsUrlListsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsUrlListsRequest {
  /** Required. A name of the UrlList to delete. Must be in the format `projects/* /locations/{location}/urlLists/*`. */
  name: string;
}

export const DeleteProjectsLocationsUrlListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsUrlListsRequest>;

export type DeleteProjectsLocationsUrlListsResponse = Operation;
export const DeleteProjectsLocationsUrlListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsUrlListsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single UrlList. */
export const deleteProjectsLocationsUrlLists: API.OperationMethod<
  DeleteProjectsLocationsUrlListsRequest,
  DeleteProjectsLocationsUrlListsResponse,
  DeleteProjectsLocationsUrlListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsUrlListsRequest,
  output: DeleteProjectsLocationsUrlListsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsUrlListsRequest {
  /** Required. The project and location from which the UrlLists should be listed, specified in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Maximum number of UrlLists to return per call. */
  pageSize?: number;
  /** The value returned by the last `ListUrlListsResponse` Indicates that this is a continuation of a prior `ListUrlLists` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListProjectsLocationsUrlListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/urlLists" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsUrlListsRequest>;

export type ListProjectsLocationsUrlListsResponse = ListUrlListsResponse;
export const ListProjectsLocationsUrlListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUrlListsResponse;

export type ListProjectsLocationsUrlListsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists UrlLists in a given project and location. */
export const listProjectsLocationsUrlLists: API.PaginatedOperationMethod<
  ListProjectsLocationsUrlListsRequest,
  ListProjectsLocationsUrlListsResponse,
  ListProjectsLocationsUrlListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsUrlListsRequest,
  output: ListProjectsLocationsUrlListsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsUrlListsRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the UrlList resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name: string;
  /** Request body */
  body?: UrlList;
}

export const PatchProjectsLocationsUrlListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UrlList).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsUrlListsRequest>;

export type PatchProjectsLocationsUrlListsResponse = Operation;
export const PatchProjectsLocationsUrlListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsUrlListsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single UrlList. */
export const patchProjectsLocationsUrlLists: API.OperationMethod<
  PatchProjectsLocationsUrlListsRequest,
  PatchProjectsLocationsUrlListsResponse,
  PatchProjectsLocationsUrlListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsUrlListsRequest,
  output: PatchProjectsLocationsUrlListsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsUrlListsRequest {
  /** Required. The parent resource of the UrlList. Must be in the format `projects/* /locations/{location}`. */
  parent: string;
  /** Required. Short name of the UrlList resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "url_list". */
  urlListId?: string;
  /** Request body */
  body?: UrlList;
}

export const CreateProjectsLocationsUrlListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    urlListId: Schema.optional(Schema.String).pipe(T.HttpQuery("urlListId")),
    body: Schema.optional(UrlList).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/urlLists", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsUrlListsRequest>;

export type CreateProjectsLocationsUrlListsResponse = Operation;
export const CreateProjectsLocationsUrlListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsUrlListsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new UrlList in a given project and location. */
export const createProjectsLocationsUrlLists: API.OperationMethod<
  CreateProjectsLocationsUrlListsRequest,
  CreateProjectsLocationsUrlListsResponse,
  CreateProjectsLocationsUrlListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsUrlListsRequest,
  output: CreateProjectsLocationsUrlListsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSecurityProfileGroupsRequest {
  /** Optional. Maximum number of SecurityProfileGroups to return per call. */
  pageSize?: number;
  /** Optional. The value returned by the last `ListSecurityProfileGroupsResponse` Indicates that this is a continuation of a prior `ListSecurityProfileGroups` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. The project or organization and location from which the SecurityProfileGroups should be listed, specified in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
}

export const ListProjectsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/securityProfileGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSecurityProfileGroupsRequest>;

export type ListProjectsLocationsSecurityProfileGroupsResponse =
  ListSecurityProfileGroupsResponse;
export const ListProjectsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSecurityProfileGroupsResponse;

export type ListProjectsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists SecurityProfileGroups in a given project and location. */
export const listProjectsLocationsSecurityProfileGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsSecurityProfileGroupsRequest,
  ListProjectsLocationsSecurityProfileGroupsResponse,
  ListProjectsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSecurityProfileGroupsRequest,
  output: ListProjectsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsSecurityProfileGroupsRequest {
  /** Immutable. Identifier. Name of the SecurityProfileGroup resource. It matches pattern `projects|organizations/* /locations/{location}/securityProfileGroups/{security_profile_group}`. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the SecurityProfileGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. */
  updateMask?: string;
  /** Request body */
  body?: SecurityProfileGroup;
}

export const PatchProjectsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SecurityProfileGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSecurityProfileGroupsRequest>;

export type PatchProjectsLocationsSecurityProfileGroupsResponse = Operation;
export const PatchProjectsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single SecurityProfileGroup. */
export const patchProjectsLocationsSecurityProfileGroups: API.OperationMethod<
  PatchProjectsLocationsSecurityProfileGroupsRequest,
  PatchProjectsLocationsSecurityProfileGroupsResponse,
  PatchProjectsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSecurityProfileGroupsRequest,
  output: PatchProjectsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsSecurityProfileGroupsRequest {
  /** Required. Short name of the SecurityProfileGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "security_profile_group1". */
  securityProfileGroupId?: string;
  /** Required. The parent resource of the SecurityProfileGroup. Must be in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
  /** Request body */
  body?: SecurityProfileGroup;
}

export const CreateProjectsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    securityProfileGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("securityProfileGroupId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SecurityProfileGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/securityProfileGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSecurityProfileGroupsRequest>;

export type CreateProjectsLocationsSecurityProfileGroupsResponse = Operation;
export const CreateProjectsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new SecurityProfileGroup in a given project and location. */
export const createProjectsLocationsSecurityProfileGroups: API.OperationMethod<
  CreateProjectsLocationsSecurityProfileGroupsRequest,
  CreateProjectsLocationsSecurityProfileGroupsResponse,
  CreateProjectsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSecurityProfileGroupsRequest,
  output: CreateProjectsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSecurityProfileGroupsRequest {
  /** Required. A name of the SecurityProfileGroup to get. Must be in the format `projects|organizations/* /locations/{location}/securityProfileGroups/{security_profile_group}`. */
  name: string;
}

export const GetProjectsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSecurityProfileGroupsRequest>;

export type GetProjectsLocationsSecurityProfileGroupsResponse =
  SecurityProfileGroup;
export const GetProjectsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityProfileGroup;

export type GetProjectsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single SecurityProfileGroup. */
export const getProjectsLocationsSecurityProfileGroups: API.OperationMethod<
  GetProjectsLocationsSecurityProfileGroupsRequest,
  GetProjectsLocationsSecurityProfileGroupsResponse,
  GetProjectsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSecurityProfileGroupsRequest,
  output: GetProjectsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSecurityProfileGroupsRequest {
  /** Optional. If client provided etag is out of date, delete will return FAILED_PRECONDITION error. */
  etag?: string;
  /** Required. A name of the SecurityProfileGroup to delete. Must be in the format `projects|organizations/* /locations/{location}/securityProfileGroups/{security_profile_group}`. */
  name: string;
}

export const DeleteProjectsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSecurityProfileGroupsRequest>;

export type DeleteProjectsLocationsSecurityProfileGroupsResponse = Operation;
export const DeleteProjectsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single SecurityProfileGroup. */
export const deleteProjectsLocationsSecurityProfileGroups: API.OperationMethod<
  DeleteProjectsLocationsSecurityProfileGroupsRequest,
  DeleteProjectsLocationsSecurityProfileGroupsResponse,
  DeleteProjectsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSecurityProfileGroupsRequest,
  output: DeleteProjectsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsClientTlsPoliciesRequest {
  /** Required. A name of the ClientTlsPolicy to get. Must be in the format `projects/* /locations/{location}/clientTlsPolicies/*`. */
  name: string;
}

export const GetProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsClientTlsPoliciesRequest>;

export type GetProjectsLocationsClientTlsPoliciesResponse = ClientTlsPolicy;
export const GetProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ClientTlsPolicy;

export type GetProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ClientTlsPolicy. */
export const getProjectsLocationsClientTlsPolicies: API.OperationMethod<
  GetProjectsLocationsClientTlsPoliciesRequest,
  GetProjectsLocationsClientTlsPoliciesResponse,
  GetProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsClientTlsPoliciesRequest,
  output: GetProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsClientTlsPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsClientTlsPoliciesRequest>;

export type SetIamPolicyProjectsLocationsClientTlsPoliciesResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsClientTlsPolicies: API.OperationMethod<
  SetIamPolicyProjectsLocationsClientTlsPoliciesRequest,
  SetIamPolicyProjectsLocationsClientTlsPoliciesResponse,
  SetIamPolicyProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsClientTlsPoliciesRequest,
  output: SetIamPolicyProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsClientTlsPoliciesRequest {
  /** Required. A name of the ClientTlsPolicy to delete. Must be in the format `projects/* /locations/{location}/clientTlsPolicies/*`. */
  name: string;
}

export const DeleteProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsClientTlsPoliciesRequest>;

export type DeleteProjectsLocationsClientTlsPoliciesResponse = Operation;
export const DeleteProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ClientTlsPolicy. */
export const deleteProjectsLocationsClientTlsPolicies: API.OperationMethod<
  DeleteProjectsLocationsClientTlsPoliciesRequest,
  DeleteProjectsLocationsClientTlsPoliciesResponse,
  DeleteProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsClientTlsPoliciesRequest,
  output: DeleteProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsClientTlsPoliciesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsClientTlsPoliciesRequest>;

export type TestIamPermissionsProjectsLocationsClientTlsPoliciesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsClientTlsPolicies: API.OperationMethod<
  TestIamPermissionsProjectsLocationsClientTlsPoliciesRequest,
  TestIamPermissionsProjectsLocationsClientTlsPoliciesResponse,
  TestIamPermissionsProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsClientTlsPoliciesRequest,
  output: TestIamPermissionsProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsClientTlsPoliciesRequest {
  /** Required. The parent resource of the ClientTlsPolicy. Must be in the format `projects/* /locations/{location}`. */
  parent: string;
  /** Required. Short name of the ClientTlsPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "client_mtls_policy". */
  clientTlsPolicyId?: string;
  /** Request body */
  body?: ClientTlsPolicy;
}

export const CreateProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    clientTlsPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("clientTlsPolicyId"),
    ),
    body: Schema.optional(ClientTlsPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/clientTlsPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsClientTlsPoliciesRequest>;

export type CreateProjectsLocationsClientTlsPoliciesResponse = Operation;
export const CreateProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ClientTlsPolicy in a given project and location. */
export const createProjectsLocationsClientTlsPolicies: API.OperationMethod<
  CreateProjectsLocationsClientTlsPoliciesRequest,
  CreateProjectsLocationsClientTlsPoliciesResponse,
  CreateProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsClientTlsPoliciesRequest,
  output: CreateProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsClientTlsPoliciesRequest {
  /** Maximum number of ClientTlsPolicies to return per call. */
  pageSize?: number;
  /** The value returned by the last `ListClientTlsPoliciesResponse` Indicates that this is a continuation of a prior `ListClientTlsPolicies` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. The project and location from which the ClientTlsPolicies should be listed, specified in the format `projects/* /locations/{location}`. */
  parent: string;
}

export const ListProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/clientTlsPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsClientTlsPoliciesRequest>;

export type ListProjectsLocationsClientTlsPoliciesResponse =
  ListClientTlsPoliciesResponse;
export const ListProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListClientTlsPoliciesResponse;

export type ListProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ClientTlsPolicies in a given project and location. */
export const listProjectsLocationsClientTlsPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsClientTlsPoliciesRequest,
  ListProjectsLocationsClientTlsPoliciesResponse,
  ListProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsClientTlsPoliciesRequest,
  output: ListProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsClientTlsPoliciesRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsClientTlsPoliciesRequest>;

export type GetIamPolicyProjectsLocationsClientTlsPoliciesResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsClientTlsPolicies: API.OperationMethod<
  GetIamPolicyProjectsLocationsClientTlsPoliciesRequest,
  GetIamPolicyProjectsLocationsClientTlsPoliciesResponse,
  GetIamPolicyProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsClientTlsPoliciesRequest,
  output: GetIamPolicyProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsClientTlsPoliciesRequest {
  /** Required. Name of the ClientTlsPolicy resource. It matches the pattern `projects/{project}/locations/{location}/clientTlsPolicies/{client_tls_policy}` */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the ClientTlsPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: ClientTlsPolicy;
}

export const PatchProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ClientTlsPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsClientTlsPoliciesRequest>;

export type PatchProjectsLocationsClientTlsPoliciesResponse = Operation;
export const PatchProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single ClientTlsPolicy. */
export const patchProjectsLocationsClientTlsPolicies: API.OperationMethod<
  PatchProjectsLocationsClientTlsPoliciesRequest,
  PatchProjectsLocationsClientTlsPoliciesResponse,
  PatchProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsClientTlsPoliciesRequest,
  output: PatchProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDnsThreatDetectorsRequest {
  /** Required. Name of the DnsThreatDetector resource. */
  name: string;
}

export const GetProjectsLocationsDnsThreatDetectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDnsThreatDetectorsRequest>;

export type GetProjectsLocationsDnsThreatDetectorsResponse = DnsThreatDetector;
export const GetProjectsLocationsDnsThreatDetectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DnsThreatDetector;

export type GetProjectsLocationsDnsThreatDetectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a single DnsThreatDetector. */
export const getProjectsLocationsDnsThreatDetectors: API.OperationMethod<
  GetProjectsLocationsDnsThreatDetectorsRequest,
  GetProjectsLocationsDnsThreatDetectorsResponse,
  GetProjectsLocationsDnsThreatDetectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDnsThreatDetectorsRequest,
  output: GetProjectsLocationsDnsThreatDetectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsDnsThreatDetectorsRequest {
  /** Required. Name of the DnsThreatDetector resource. */
  name: string;
}

export const DeleteProjectsLocationsDnsThreatDetectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDnsThreatDetectorsRequest>;

export type DeleteProjectsLocationsDnsThreatDetectorsResponse = Empty;
export const DeleteProjectsLocationsDnsThreatDetectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsDnsThreatDetectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single DnsThreatDetector. */
export const deleteProjectsLocationsDnsThreatDetectors: API.OperationMethod<
  DeleteProjectsLocationsDnsThreatDetectorsRequest,
  DeleteProjectsLocationsDnsThreatDetectorsResponse,
  DeleteProjectsLocationsDnsThreatDetectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDnsThreatDetectorsRequest,
  output: DeleteProjectsLocationsDnsThreatDetectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDnsThreatDetectorsRequest {
  /** Required. The parent value for `ListDnsThreatDetectorsRequest`. */
  parent: string;
  /** Optional. The requested page size. The server may return fewer items than requested. If unspecified, the server picks an appropriate default. */
  pageSize?: number;
  /** Optional. A page token received from a previous `ListDnsThreatDetectorsRequest` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsDnsThreatDetectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dnsThreatDetectors" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDnsThreatDetectorsRequest>;

export type ListProjectsLocationsDnsThreatDetectorsResponse =
  ListDnsThreatDetectorsResponse;
export const ListProjectsLocationsDnsThreatDetectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDnsThreatDetectorsResponse;

export type ListProjectsLocationsDnsThreatDetectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DnsThreatDetectors in a given project and location. */
export const listProjectsLocationsDnsThreatDetectors: API.PaginatedOperationMethod<
  ListProjectsLocationsDnsThreatDetectorsRequest,
  ListProjectsLocationsDnsThreatDetectorsResponse,
  ListProjectsLocationsDnsThreatDetectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDnsThreatDetectorsRequest,
  output: ListProjectsLocationsDnsThreatDetectorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsDnsThreatDetectorsRequest {
  /** Optional. The field mask is used to specify the fields to be overwritten in the DnsThreatDetector resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the mask is not provided then all fields present in the request will be overwritten. */
  updateMask?: string;
  /** Immutable. Identifier. Name of the DnsThreatDetector resource. */
  name: string;
  /** Request body */
  body?: DnsThreatDetector;
}

export const PatchProjectsLocationsDnsThreatDetectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DnsThreatDetector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDnsThreatDetectorsRequest>;

export type PatchProjectsLocationsDnsThreatDetectorsResponse =
  DnsThreatDetector;
export const PatchProjectsLocationsDnsThreatDetectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DnsThreatDetector;

export type PatchProjectsLocationsDnsThreatDetectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a single DnsThreatDetector. */
export const patchProjectsLocationsDnsThreatDetectors: API.OperationMethod<
  PatchProjectsLocationsDnsThreatDetectorsRequest,
  PatchProjectsLocationsDnsThreatDetectorsResponse,
  PatchProjectsLocationsDnsThreatDetectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDnsThreatDetectorsRequest,
  output: PatchProjectsLocationsDnsThreatDetectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsDnsThreatDetectorsRequest {
  /** Required. The value for the parent of the DnsThreatDetector resource. */
  parent: string;
  /** Optional. The ID of the requesting DnsThreatDetector object. If this field is not supplied, the service generates an identifier. */
  dnsThreatDetectorId?: string;
  /** Request body */
  body?: DnsThreatDetector;
}

export const CreateProjectsLocationsDnsThreatDetectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    dnsThreatDetectorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dnsThreatDetectorId"),
    ),
    body: Schema.optional(DnsThreatDetector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/dnsThreatDetectors",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDnsThreatDetectorsRequest>;

export type CreateProjectsLocationsDnsThreatDetectorsResponse =
  DnsThreatDetector;
export const CreateProjectsLocationsDnsThreatDetectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DnsThreatDetector;

export type CreateProjectsLocationsDnsThreatDetectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new DnsThreatDetector in a given project and location. */
export const createProjectsLocationsDnsThreatDetectors: API.OperationMethod<
  CreateProjectsLocationsDnsThreatDetectorsRequest,
  CreateProjectsLocationsDnsThreatDetectorsResponse,
  CreateProjectsLocationsDnsThreatDetectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDnsThreatDetectorsRequest,
  output: CreateProjectsLocationsDnsThreatDetectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsMirroringDeploymentsRequest {
  /** Required. The ID to use for the new deployment, which will become the final component of the deployment's resource name. */
  mirroringDeploymentId?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Required. The parent resource where this deployment will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Request body */
  body?: MirroringDeployment;
}

export const CreateProjectsLocationsMirroringDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mirroringDeploymentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("mirroringDeploymentId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(MirroringDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/mirroringDeployments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsMirroringDeploymentsRequest>;

export type CreateProjectsLocationsMirroringDeploymentsResponse = Operation;
export const CreateProjectsLocationsMirroringDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsMirroringDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a deployment in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsMirroringDeployments: API.OperationMethod<
  CreateProjectsLocationsMirroringDeploymentsRequest,
  CreateProjectsLocationsMirroringDeploymentsResponse,
  CreateProjectsLocationsMirroringDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMirroringDeploymentsRequest,
  output: CreateProjectsLocationsMirroringDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMirroringDeploymentsRequest {
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
  /** Optional. A page token, received from a previous `ListMirroringDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringDeployments` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The parent, which owns this collection of deployments. Example: `projects/123456789/locations/us-central1-a`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
}

export const ListProjectsLocationsMirroringDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/mirroringDeployments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMirroringDeploymentsRequest>;

export type ListProjectsLocationsMirroringDeploymentsResponse =
  ListMirroringDeploymentsResponse;
export const ListProjectsLocationsMirroringDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMirroringDeploymentsResponse;

export type ListProjectsLocationsMirroringDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists deployments in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsMirroringDeployments: API.PaginatedOperationMethod<
  ListProjectsLocationsMirroringDeploymentsRequest,
  ListProjectsLocationsMirroringDeploymentsResponse,
  ListProjectsLocationsMirroringDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMirroringDeploymentsRequest,
  output: ListProjectsLocationsMirroringDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsMirroringDeploymentsRequest {
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Immutable. Identifier. The resource name of this deployment, for example: `projects/123456789/locations/us-central1-a/mirroringDeployments/my-dep`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Optional. The list of fields to update. Fields are specified relative to the deployment (e.g. `description`; *not* `mirroring_deployment.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Request body */
  body?: MirroringDeployment;
}

export const PatchProjectsLocationsMirroringDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(MirroringDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsMirroringDeploymentsRequest>;

export type PatchProjectsLocationsMirroringDeploymentsResponse = Operation;
export const PatchProjectsLocationsMirroringDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsMirroringDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a deployment. See https://google.aip.dev/134. */
export const patchProjectsLocationsMirroringDeployments: API.OperationMethod<
  PatchProjectsLocationsMirroringDeploymentsRequest,
  PatchProjectsLocationsMirroringDeploymentsResponse,
  PatchProjectsLocationsMirroringDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMirroringDeploymentsRequest,
  output: PatchProjectsLocationsMirroringDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMirroringDeploymentsRequest {
  /** Required. The name of the deployment to retrieve. Format: projects/{project}/locations/{location}/mirroringDeployments/{mirroring_deployment} */
  name: string;
}

export const GetProjectsLocationsMirroringDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMirroringDeploymentsRequest>;

export type GetProjectsLocationsMirroringDeploymentsResponse =
  MirroringDeployment;
export const GetProjectsLocationsMirroringDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MirroringDeployment;

export type GetProjectsLocationsMirroringDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific deployment. See https://google.aip.dev/131. */
export const getProjectsLocationsMirroringDeployments: API.OperationMethod<
  GetProjectsLocationsMirroringDeploymentsRequest,
  GetProjectsLocationsMirroringDeploymentsResponse,
  GetProjectsLocationsMirroringDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMirroringDeploymentsRequest,
  output: GetProjectsLocationsMirroringDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsMirroringDeploymentsRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
}

export const DeleteProjectsLocationsMirroringDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsMirroringDeploymentsRequest>;

export type DeleteProjectsLocationsMirroringDeploymentsResponse = Operation;
export const DeleteProjectsLocationsMirroringDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsMirroringDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a deployment. See https://google.aip.dev/135. */
export const deleteProjectsLocationsMirroringDeployments: API.OperationMethod<
  DeleteProjectsLocationsMirroringDeploymentsRequest,
  DeleteProjectsLocationsMirroringDeploymentsResponse,
  DeleteProjectsLocationsMirroringDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMirroringDeploymentsRequest,
  output: DeleteProjectsLocationsMirroringDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsSecurityProfilesRequest {
  /** Required. The parent resource of the SecurityProfile. Must be in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
  /** Required. Short name of the SecurityProfile resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "security_profile1". */
  securityProfileId?: string;
  /** Request body */
  body?: SecurityProfile;
}

export const CreateProjectsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    securityProfileId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("securityProfileId"),
    ),
    body: Schema.optional(SecurityProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/securityProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSecurityProfilesRequest>;

export type CreateProjectsLocationsSecurityProfilesResponse = Operation;
export const CreateProjectsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new SecurityProfile in a given project and location. */
export const createProjectsLocationsSecurityProfiles: API.OperationMethod<
  CreateProjectsLocationsSecurityProfilesRequest,
  CreateProjectsLocationsSecurityProfilesResponse,
  CreateProjectsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSecurityProfilesRequest,
  output: CreateProjectsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsSecurityProfilesRequest {
  /** Immutable. Identifier. Name of the SecurityProfile resource. It matches pattern `projects|organizations/* /locations/{location}/securityProfiles/{security_profile}`. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the SecurityProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. */
  updateMask?: string;
  /** Request body */
  body?: SecurityProfile;
}

export const PatchProjectsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SecurityProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSecurityProfilesRequest>;

export type PatchProjectsLocationsSecurityProfilesResponse = Operation;
export const PatchProjectsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single SecurityProfile. */
export const patchProjectsLocationsSecurityProfiles: API.OperationMethod<
  PatchProjectsLocationsSecurityProfilesRequest,
  PatchProjectsLocationsSecurityProfilesResponse,
  PatchProjectsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSecurityProfilesRequest,
  output: PatchProjectsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSecurityProfilesRequest {
  /** Optional. Maximum number of SecurityProfiles to return per call. */
  pageSize?: number;
  /** Optional. The value returned by the last `ListSecurityProfilesResponse` Indicates that this is a continuation of a prior `ListSecurityProfiles` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. The project or organization and location from which the SecurityProfiles should be listed, specified in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
}

export const ListProjectsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/securityProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSecurityProfilesRequest>;

export type ListProjectsLocationsSecurityProfilesResponse =
  ListSecurityProfilesResponse;
export const ListProjectsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSecurityProfilesResponse;

export type ListProjectsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists SecurityProfiles in a given project and location. */
export const listProjectsLocationsSecurityProfiles: API.PaginatedOperationMethod<
  ListProjectsLocationsSecurityProfilesRequest,
  ListProjectsLocationsSecurityProfilesResponse,
  ListProjectsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSecurityProfilesRequest,
  output: ListProjectsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsSecurityProfilesRequest {
  /** Required. A name of the SecurityProfile to delete. Must be in the format `projects|organizations/* /locations/{location}/securityProfiles/{security_profile_id}`. */
  name: string;
  /** Optional. If client provided etag is out of date, delete will return FAILED_PRECONDITION error. */
  etag?: string;
}

export const DeleteProjectsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSecurityProfilesRequest>;

export type DeleteProjectsLocationsSecurityProfilesResponse = Operation;
export const DeleteProjectsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single SecurityProfile. */
export const deleteProjectsLocationsSecurityProfiles: API.OperationMethod<
  DeleteProjectsLocationsSecurityProfilesRequest,
  DeleteProjectsLocationsSecurityProfilesResponse,
  DeleteProjectsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSecurityProfilesRequest,
  output: DeleteProjectsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSecurityProfilesRequest {
  /** Required. A name of the SecurityProfile to get. Must be in the format `projects|organizations/* /locations/{location}/securityProfiles/{security_profile_id}`. */
  name: string;
}

export const GetProjectsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSecurityProfilesRequest>;

export type GetProjectsLocationsSecurityProfilesResponse = SecurityProfile;
export const GetProjectsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityProfile;

export type GetProjectsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single SecurityProfile. */
export const getProjectsLocationsSecurityProfiles: API.OperationMethod<
  GetProjectsLocationsSecurityProfilesRequest,
  GetProjectsLocationsSecurityProfilesResponse,
  GetProjectsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSecurityProfilesRequest,
  output: GetProjectsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden],
}));
