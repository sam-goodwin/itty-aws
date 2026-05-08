// ==========================================================================
// Traffic Director API (trafficdirector v2)
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
  name: "trafficdirector",
  version: "v2",
  rootUrl: "https://trafficdirector.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface SemanticVersion {
  majorNumber?: number;
  patch?: number;
  minorNumber?: number;
}

export const SemanticVersion: Schema.Schema<SemanticVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    majorNumber: Schema.optional(Schema.Number),
    patch: Schema.optional(Schema.Number),
    minorNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SemanticVersion" });

export interface BuildVersion {
  /** SemVer version of extension. */
  version?: SemanticVersion;
  /** Free-form build information. Envoy defines several well known keys in the source/common/version/version.h file */
  metadata?: Record<string, unknown>;
}

export const BuildVersion: Schema.Schema<BuildVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(SemanticVersion),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "BuildVersion" });

export interface Extension {
  /** Indicates that the extension is present but was disabled via dynamic configuration. */
  disabled?: boolean;
  /** [#not-implemented-hide:] Type descriptor of extension configuration proto. [#comment: */
  typeDescriptor?: string;
  /** The version is a property of the extension and maintained independently of other extensions and the Envoy API. This field is not set when extension did not provide version information. */
  version?: BuildVersion;
  /** Category of the extension. Extension category names use reverse DNS notation. For instance "envoy.filters.listener" for Envoy's built-in listener filters or "com.acme.filters.http" for HTTP filters from acme.com vendor. [#comment: */
  category?: string;
  /** This is the name of the Envoy filter as specified in the Envoy configuration, e.g. envoy.filters.http.router, com.acme.widget. */
  name?: string;
}

export const Extension: Schema.Schema<Extension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled: Schema.optional(Schema.Boolean),
    typeDescriptor: Schema.optional(Schema.String),
    version: Schema.optional(BuildVersion),
    category: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Extension" });

export interface Locality {
  /** Defines the local service zone where Envoy is running. Though optional, it should be set if discovery service routing is used and the discovery service exposes :ref:`zone data `, either in this message or via :option:`--service-zone`. The meaning of zone is context dependent, e.g. `Availability Zone (AZ) `_ on AWS, `Zone `_ on GCP, etc. */
  zone?: string;
  /** When used for locality of upstream hosts, this field further splits zone into smaller chunks of sub-zones so they can be load balanced independently. */
  subZone?: string;
  /** Region this :ref:`zone ` belongs to. */
  region?: string;
}

export const Locality: Schema.Schema<Locality> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    subZone: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
  }).annotate({ identifier: "Locality" });

export interface SocketAddress {
  protocol?: "TCP" | "UDP" | (string & {});
  portValue?: number;
  /** This is only valid if :ref:`resolver_name ` is specified below and the named resolver is capable of named port resolution. */
  namedPort?: string;
  /** The address for this socket. :ref:`Listeners ` will bind to the address. An empty address is not allowed. Specify ``0.0.0.0`` or ``::`` to bind to any address. [#comment:TODO(zuercher) reinstate when implemented: It is possible to distinguish a Listener address via the prefix/suffix matching in :ref:`FilterChainMatch `.] When used within an upstream :ref:`BindConfig `, the address controls the source address of outbound connections. For :ref:`clusters `, the cluster type determines whether the address must be an IP (*STATIC* or *EDS* clusters) or a hostname resolved by DNS (*STRICT_DNS* or *LOGICAL_DNS* clusters). Address resolution can be customized via :ref:`resolver_name `. */
  address?: string;
  /** When binding to an IPv6 address above, this enables `IPv4 compatibility `_. Binding to ``::`` will allow both IPv4 and IPv6 connections, with peer IPv4 addresses mapped into IPv6 space as ``::FFFF:``. */
  ipv4Compat?: boolean;
  /** The name of the custom resolver. This must have been registered with Envoy. If this is empty, a context dependent default applies. If the address is a concrete IP address, no resolution will occur. If address is a hostname this should be set for resolution other than DNS. Specifying a custom resolver with *STRICT_DNS* or *LOGICAL_DNS* will generate an error at runtime. */
  resolverName?: string;
}

export const SocketAddress: Schema.Schema<SocketAddress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    portValue: Schema.optional(Schema.Number),
    namedPort: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
    ipv4Compat: Schema.optional(Schema.Boolean),
    resolverName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SocketAddress" });

export interface Pipe {
  /** Unix Domain Socket path. On Linux, paths starting with '@' will use the abstract namespace. The starting '@' is replaced by a null byte by Envoy. Paths starting with '@' will result in an error in environments other than Linux. */
  path?: string;
  /** The mode for the Pipe. Not applicable for abstract sockets. */
  mode?: number;
}

export const Pipe: Schema.Schema<Pipe> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Pipe" });

export interface Address {
  socketAddress?: SocketAddress;
  pipe?: Pipe;
}

export const Address: Schema.Schema<Address> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    socketAddress: Schema.optional(SocketAddress),
    pipe: Schema.optional(Pipe),
  }).annotate({ identifier: "Address" });

export interface Node {
  /** Free-form string that identifies the version of the entity requesting config. E.g. "1.12.2" or "abcd1234", or "SpecialEnvoyBuild" */
  userAgentVersion?: string;
  /** Free-form string that identifies the entity requesting config. E.g. "envoy" or "grpc" */
  userAgentName?: string;
  /** This is motivated by informing a management server during canary which version of Envoy is being tested in a heterogeneous fleet. This will be set by Envoy in management server RPCs. This field is deprecated in favor of the user_agent_name and user_agent_version values. */
  buildVersion?: string;
  /** Defines the local service cluster name where Envoy is running. Though optional, it should be set if any of the following features are used: :ref:`statsd `, :ref:`health check cluster verification `, :ref:`runtime override directory `, :ref:`user agent addition `, :ref:`HTTP global rate limiting `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-cluster`. */
  cluster?: string;
  /** Opaque metadata extending the node identifier. Envoy will pass this directly to the management server. */
  metadata?: Record<string, unknown>;
  /** Structured version of the entity requesting config. */
  userAgentBuildVersion?: BuildVersion;
  /** An opaque node identifier for the Envoy node. This also provides the local service node name. It should be set if any of the following features are used: :ref:`statsd `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-node`. */
  id?: string;
  /** List of extensions and their versions supported by the node. */
  extensions?: ReadonlyArray<Extension>;
  /** Locality specifying where the Envoy instance is running. */
  locality?: Locality;
  /** Client feature support list. These are well known features described in the Envoy API repository for a given major version of an API. Client features use reverse DNS naming scheme, for example `com.acme.feature`. See :ref:`the list of features ` that xDS client may support. */
  clientFeatures?: ReadonlyArray<string>;
  /** Known listening ports on the node as a generic hint to the management server for filtering :ref:`listeners ` to be returned. For example, if there is a listener bound to port 80, the list can optionally contain the SocketAddress `(0.0.0.0,80)`. The field is optional and just a hint. */
  listeningAddresses?: ReadonlyArray<Address>;
}

export const Node: Schema.Schema<Node> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userAgentVersion: Schema.optional(Schema.String),
    userAgentName: Schema.optional(Schema.String),
    buildVersion: Schema.optional(Schema.String),
    cluster: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    userAgentBuildVersion: Schema.optional(BuildVersion),
    id: Schema.optional(Schema.String),
    extensions: Schema.optional(Schema.Array(Extension)),
    locality: Schema.optional(Locality),
    clientFeatures: Schema.optional(Schema.Array(Schema.String)),
    listeningAddresses: Schema.optional(Schema.Array(Address)),
  }).annotate({ identifier: "Node" });

export interface InlineScopedRouteConfigs {
  /** The timestamp when the scoped route config set was last updated. */
  lastUpdated?: string;
  /** The scoped route configurations. */
  scopedRouteConfigs?: ReadonlyArray<Record<string, unknown>>;
  /** The name assigned to the scoped route configurations. */
  name?: string;
}

export const InlineScopedRouteConfigs: Schema.Schema<InlineScopedRouteConfigs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastUpdated: Schema.optional(Schema.String),
    scopedRouteConfigs: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "InlineScopedRouteConfigs" });

export interface DynamicScopedRouteConfigs {
  /** The name assigned to the scoped route configurations. */
  name?: string;
  /** The scoped route configurations. */
  scopedRouteConfigs?: ReadonlyArray<Record<string, unknown>>;
  /** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the scoped routes configuration was loaded. */
  versionInfo?: string;
  /** The timestamp when the scoped route config set was last updated. */
  lastUpdated?: string;
}

export const DynamicScopedRouteConfigs: Schema.Schema<DynamicScopedRouteConfigs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    scopedRouteConfigs: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    versionInfo: Schema.optional(Schema.String),
    lastUpdated: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicScopedRouteConfigs" });

export interface ScopedRoutesConfigDump {
  /** The statically loaded scoped route configs. */
  inlineScopedRouteConfigs?: ReadonlyArray<InlineScopedRouteConfigs>;
  /** The dynamically loaded scoped route configs. */
  dynamicScopedRouteConfigs?: ReadonlyArray<DynamicScopedRouteConfigs>;
}

export const ScopedRoutesConfigDump: Schema.Schema<ScopedRoutesConfigDump> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inlineScopedRouteConfigs: Schema.optional(
      Schema.Array(InlineScopedRouteConfigs),
    ),
    dynamicScopedRouteConfigs: Schema.optional(
      Schema.Array(DynamicScopedRouteConfigs),
    ),
  }).annotate({ identifier: "ScopedRoutesConfigDump" });

export interface DynamicListenerState {
  /** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the listener was loaded. In the future, discrete per-listener versions may be supported by the API. */
  versionInfo?: string;
  /** The timestamp when the Listener was last successfully updated. */
  lastUpdated?: string;
  /** The listener config. */
  listener?: Record<string, unknown>;
}

export const DynamicListenerState: Schema.Schema<DynamicListenerState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionInfo: Schema.optional(Schema.String),
    lastUpdated: Schema.optional(Schema.String),
    listener: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "DynamicListenerState" });

export interface UpdateFailureState {
  /** Details about the last failed update attempt. */
  details?: string;
  /** Time of the latest failed update attempt. */
  lastUpdateAttempt?: string;
  /** What the component configuration would have been if the update had succeeded. */
  failedConfiguration?: Record<string, unknown>;
}

export const UpdateFailureState: Schema.Schema<UpdateFailureState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(Schema.String),
    lastUpdateAttempt: Schema.optional(Schema.String),
    failedConfiguration: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "UpdateFailureState" });

export interface DynamicListener {
  /** The listener state for any active listener by this name. These are listeners that are available to service data plane traffic. */
  activeState?: DynamicListenerState;
  /** The listener state for any warming listener by this name. These are listeners that are currently undergoing warming in preparation to service data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the warming listeners should generally be discarded. */
  warmingState?: DynamicListenerState;
  /** The name or unique id of this listener, pulled from the DynamicListenerState config. */
  name?: string;
  /** Set if the last update failed, cleared after the next successful update. */
  errorState?: UpdateFailureState;
  /** The listener state for any draining listener by this name. These are listeners that are currently undergoing draining in preparation to stop servicing data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the draining listeners should generally be discarded. */
  drainingState?: DynamicListenerState;
}

export const DynamicListener: Schema.Schema<DynamicListener> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activeState: Schema.optional(DynamicListenerState),
    warmingState: Schema.optional(DynamicListenerState),
    name: Schema.optional(Schema.String),
    errorState: Schema.optional(UpdateFailureState),
    drainingState: Schema.optional(DynamicListenerState),
  }).annotate({ identifier: "DynamicListener" });

export interface StaticListener {
  /** The timestamp when the Listener was last successfully updated. */
  lastUpdated?: string;
  /** The listener config. */
  listener?: Record<string, unknown>;
}

export const StaticListener: Schema.Schema<StaticListener> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastUpdated: Schema.optional(Schema.String),
    listener: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "StaticListener" });

export interface ListenersConfigDump {
  /** This is the :ref:`version_info ` in the last processed LDS discovery response. If there are only static bootstrap listeners, this field will be "". */
  versionInfo?: string;
  /** State for any warming, active, or draining listeners. */
  dynamicListeners?: ReadonlyArray<DynamicListener>;
  /** The statically loaded listener configs. */
  staticListeners?: ReadonlyArray<StaticListener>;
}

export const ListenersConfigDump: Schema.Schema<ListenersConfigDump> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionInfo: Schema.optional(Schema.String),
    dynamicListeners: Schema.optional(Schema.Array(DynamicListener)),
    staticListeners: Schema.optional(Schema.Array(StaticListener)),
  }).annotate({ identifier: "ListenersConfigDump" });

export interface StaticRouteConfig {
  /** The route config. */
  routeConfig?: Record<string, unknown>;
  /** The timestamp when the Route was last updated. */
  lastUpdated?: string;
}

export const StaticRouteConfig: Schema.Schema<StaticRouteConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    routeConfig: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    lastUpdated: Schema.optional(Schema.String),
  }).annotate({ identifier: "StaticRouteConfig" });

export interface DynamicRouteConfig {
  /** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the route configuration was loaded. */
  versionInfo?: string;
  /** The route config. */
  routeConfig?: Record<string, unknown>;
  /** The timestamp when the Route was last updated. */
  lastUpdated?: string;
}

export const DynamicRouteConfig: Schema.Schema<DynamicRouteConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionInfo: Schema.optional(Schema.String),
    routeConfig: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    lastUpdated: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicRouteConfig" });

export interface RoutesConfigDump {
  /** The statically loaded route configs. */
  staticRouteConfigs?: ReadonlyArray<StaticRouteConfig>;
  /** The dynamically loaded route configs. */
  dynamicRouteConfigs?: ReadonlyArray<DynamicRouteConfig>;
}

export const RoutesConfigDump: Schema.Schema<RoutesConfigDump> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    staticRouteConfigs: Schema.optional(Schema.Array(StaticRouteConfig)),
    dynamicRouteConfigs: Schema.optional(Schema.Array(DynamicRouteConfig)),
  }).annotate({ identifier: "RoutesConfigDump" });

export interface DynamicCluster {
  /** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the cluster was loaded. In the future, discrete per-cluster versions may be supported by the API. */
  versionInfo?: string;
  /** The timestamp when the Cluster was last updated. */
  lastUpdated?: string;
  /** The cluster config. */
  cluster?: Record<string, unknown>;
}

export const DynamicCluster: Schema.Schema<DynamicCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionInfo: Schema.optional(Schema.String),
    lastUpdated: Schema.optional(Schema.String),
    cluster: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "DynamicCluster" });

export interface StaticCluster {
  /** The cluster config. */
  cluster?: Record<string, unknown>;
  /** The timestamp when the Cluster was last updated. */
  lastUpdated?: string;
}

export const StaticCluster: Schema.Schema<StaticCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cluster: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    lastUpdated: Schema.optional(Schema.String),
  }).annotate({ identifier: "StaticCluster" });

export interface ClustersConfigDump {
  /** This is the :ref:`version_info ` in the last processed CDS discovery response. If there are only static bootstrap clusters, this field will be "". */
  versionInfo?: string;
  /** The dynamically loaded active clusters. These are clusters that are available to service data plane traffic. */
  dynamicActiveClusters?: ReadonlyArray<DynamicCluster>;
  /** The statically loaded cluster configs. */
  staticClusters?: ReadonlyArray<StaticCluster>;
  /** The dynamically loaded warming clusters. These are clusters that are currently undergoing warming in preparation to service data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the warming clusters should generally be discarded. */
  dynamicWarmingClusters?: ReadonlyArray<DynamicCluster>;
}

export const ClustersConfigDump: Schema.Schema<ClustersConfigDump> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionInfo: Schema.optional(Schema.String),
    dynamicActiveClusters: Schema.optional(Schema.Array(DynamicCluster)),
    staticClusters: Schema.optional(Schema.Array(StaticCluster)),
    dynamicWarmingClusters: Schema.optional(Schema.Array(DynamicCluster)),
  }).annotate({ identifier: "ClustersConfigDump" });

export interface PerXdsConfig {
  status?:
    | "UNKNOWN"
    | "SYNCED"
    | "NOT_SENT"
    | "STALE"
    | "ERROR"
    | (string & {});
  scopedRouteConfig?: ScopedRoutesConfigDump;
  listenerConfig?: ListenersConfigDump;
  routeConfig?: RoutesConfigDump;
  clusterConfig?: ClustersConfigDump;
}

export const PerXdsConfig: Schema.Schema<PerXdsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    scopedRouteConfig: Schema.optional(ScopedRoutesConfigDump),
    listenerConfig: Schema.optional(ListenersConfigDump),
    routeConfig: Schema.optional(RoutesConfigDump),
    clusterConfig: Schema.optional(ClustersConfigDump),
  }).annotate({ identifier: "PerXdsConfig" });

export interface ClientConfig {
  /** Node for a particular client. */
  node?: Node;
  xdsConfig?: ReadonlyArray<PerXdsConfig>;
}

export const ClientConfig: Schema.Schema<ClientConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    node: Schema.optional(Node),
    xdsConfig: Schema.optional(Schema.Array(PerXdsConfig)),
  }).annotate({ identifier: "ClientConfig" });

export interface ClientStatusResponse {
  /** Client configs for the clients specified in the ClientStatusRequest. */
  config?: ReadonlyArray<ClientConfig>;
}

export const ClientStatusResponse: Schema.Schema<ClientStatusResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(Schema.Array(ClientConfig)),
  }).annotate({ identifier: "ClientStatusResponse" });

export interface NullMatch {}

export const NullMatch: Schema.Schema<NullMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "NullMatch",
  });

export interface DoubleRange {
  /** start of the range (inclusive) */
  start?: number;
  /** end of the range (exclusive) */
  end?: number;
}

export const DoubleRange: Schema.Schema<DoubleRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    start: Schema.optional(Schema.Number),
    end: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DoubleRange" });

export interface DoubleMatcher {
  /** If specified, the input double value must be in the range specified here. Note: The range is using half-open interval semantics [start, end). */
  range?: DoubleRange;
  /** If specified, the input double value must be equal to the value specified here. */
  exact?: number;
}

export const DoubleMatcher: Schema.Schema<DoubleMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    range: Schema.optional(DoubleRange),
    exact: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DoubleMatcher" });

export interface GoogleRE2 {
  /** This field controls the RE2 "program size" which is a rough estimate of how complex a compiled regex is to evaluate. A regex that has a program size greater than the configured value will fail to compile. In this case, the configured max program size can be increased or the regex can be simplified. If not specified, the default is 100. This field is deprecated; regexp validation should be performed on the management server instead of being done by each individual client. */
  maxProgramSize?: number;
}

export const GoogleRE2: Schema.Schema<GoogleRE2> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxProgramSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleRE2" });

export interface RegexMatcher {
  /** The regex match string. The string must be supported by the configured engine. */
  regex?: string;
  /** Google's RE2 regex engine. */
  googleRe2?: GoogleRE2;
}

export const RegexMatcher: Schema.Schema<RegexMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regex: Schema.optional(Schema.String),
    googleRe2: Schema.optional(GoogleRE2),
  }).annotate({ identifier: "RegexMatcher" });

export interface StringMatcher {
  /** The input string must match the regular expression specified here. */
  safeRegex?: RegexMatcher;
  /** The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * *abc* matches the value *xyz.abc* */
  suffix?: string;
  /** The input string must match the regular expression specified here. The regex grammar is defined `here `_. Examples: * The regex ``\d{3}`` matches the value *123* * The regex ``\d{3}`` does not match the value *1234* * The regex ``\d{3}`` does not match the value *123.456* .. attention:: This field has been deprecated in favor of `safe_regex` as it is not safe for use with untrusted input in all cases. */
  regex?: string;
  /** The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * *abc* matches the value *abc.xyz* */
  prefix?: string;
  /** If true, indicates the exact/prefix/suffix matching should be case insensitive. This has no effect for the safe_regex match. For example, the matcher *data* will match both input string *Data* and *data* if set to true. */
  ignoreCase?: boolean;
  /** The input string must match exactly the string specified here. Examples: * *abc* only matches the value *abc*. */
  exact?: string;
}

export const StringMatcher: Schema.Schema<StringMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    safeRegex: Schema.optional(RegexMatcher),
    suffix: Schema.optional(Schema.String),
    regex: Schema.optional(Schema.String),
    prefix: Schema.optional(Schema.String),
    ignoreCase: Schema.optional(Schema.Boolean),
    exact: Schema.optional(Schema.String),
  }).annotate({ identifier: "StringMatcher" });

export interface ListMatcher {
  /** If specified, at least one of the values in the list must match the value specified. */
  oneOf?: ValueMatcher;
}

export const ListMatcher: Schema.Schema<ListMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      oneOf: Schema.optional(ValueMatcher),
    }),
  ).annotate({
    identifier: "ListMatcher",
  }) as any as Schema.Schema<ListMatcher>;

export interface ValueMatcher {
  /** If specified, a match occurs if and only if the target value is a NullValue. */
  nullMatch?: NullMatch;
  /** If specified, a match occurs if and only if the target value is a bool value and is equal to this field. */
  boolMatch?: boolean;
  /** If specified, value match will be performed based on whether the path is referring to a valid primitive value in the metadata. If the path is referring to a non-primitive value, the result is always not matched. */
  presentMatch?: boolean;
  /** If specified, a match occurs if and only if the target value is a double value and is matched to this field. */
  doubleMatch?: DoubleMatcher;
  /** If specified, a match occurs if and only if the target value is a string value and is matched to this field. */
  stringMatch?: StringMatcher;
  /** If specified, a match occurs if and only if the target value is a list value and is matched to this field. */
  listMatch?: ListMatcher;
}

export const ValueMatcher: Schema.Schema<ValueMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      nullMatch: Schema.optional(NullMatch),
      boolMatch: Schema.optional(Schema.Boolean),
      presentMatch: Schema.optional(Schema.Boolean),
      doubleMatch: Schema.optional(DoubleMatcher),
      stringMatch: Schema.optional(StringMatcher),
      listMatch: Schema.optional(ListMatcher),
    }),
  ).annotate({
    identifier: "ValueMatcher",
  }) as any as Schema.Schema<ValueMatcher>;

export interface PathSegment {
  /** If specified, use the key to retrieve the value in a Struct. */
  key?: string;
}

export const PathSegment: Schema.Schema<PathSegment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "PathSegment" });

export interface StructMatcher {
  /** The path to retrieve the Value from the Struct. */
  path?: ReadonlyArray<PathSegment>;
  /** The StructMatcher is matched if the value retrieved by path is matched to this value. */
  value?: ValueMatcher;
}

export const StructMatcher: Schema.Schema<StructMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.Array(PathSegment)),
    value: Schema.optional(ValueMatcher),
  }).annotate({ identifier: "StructMatcher" });

export interface NodeMatcher {
  /** Specifies match criteria on the node id. */
  nodeId?: StringMatcher;
  /** Specifies match criteria on the node metadata. */
  nodeMetadatas?: ReadonlyArray<StructMatcher>;
}

export const NodeMatcher: Schema.Schema<NodeMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeId: Schema.optional(StringMatcher),
    nodeMetadatas: Schema.optional(Schema.Array(StructMatcher)),
  }).annotate({ identifier: "NodeMatcher" });

export interface ClientStatusRequest {
  /** Management server can use these match criteria to identify clients. The match follows OR semantics. */
  nodeMatchers?: ReadonlyArray<NodeMatcher>;
}

export const ClientStatusRequest: Schema.Schema<ClientStatusRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeMatchers: Schema.optional(Schema.Array(NodeMatcher)),
  }).annotate({ identifier: "ClientStatusRequest" });

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

export interface Client_statusDiscoveryRequest {
  /** Request body */
  body?: ClientStatusRequest;
}

export const Client_statusDiscoveryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(ClientStatusRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/discovery:client_status",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<Client_statusDiscoveryRequest>;

export type Client_statusDiscoveryResponse = ClientStatusResponse;
export const Client_statusDiscoveryResponse =
  /*@__PURE__*/ /*#__PURE__*/ ClientStatusResponse;

export type Client_statusDiscoveryError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const client_statusDiscovery: API.OperationMethod<
  Client_statusDiscoveryRequest,
  Client_statusDiscoveryResponse,
  Client_statusDiscoveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: Client_statusDiscoveryRequest,
  output: Client_statusDiscoveryResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
