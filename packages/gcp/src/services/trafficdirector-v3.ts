// ==========================================================================
// Traffic Director API (trafficdirector v3)
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
  version: "v3",
  rootUrl: "https://trafficdirector.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleRE2 {
  /** This field controls the RE2 "program size" which is a rough estimate of how complex a compiled regex is to evaluate. A regex that has a program size greater than the configured value will fail to compile. In this case, the configured max program size can be increased or the regex can be simplified. If not specified, the default is 100. This field is deprecated; regexp validation should be performed on the management server instead of being done by each individual client. .. note:: Although this field is deprecated, the program size will still be checked against the global ``re2.max_program_size.error_level`` runtime value. */
  maxProgramSize?: number;
}

export const GoogleRE2 = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxProgramSize: Schema.optional(Schema.Number),
}).annotate({ identifier: "GoogleRE2" });

export interface DoubleRange {
  /** start of the range (inclusive) */
  start?: number;
  /** end of the range (exclusive) */
  end?: number;
}

export const DoubleRange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  start: Schema.optional(Schema.Number),
  end: Schema.optional(Schema.Number),
}).annotate({ identifier: "DoubleRange" });

export interface DoubleMatcher {
  /** If specified, the input double value must be in the range specified here. Note: The range is using half-open interval semantics [start, end). */
  range?: DoubleRange;
  /** If specified, the input double value must be equal to the value specified here. */
  exact?: number;
}

export const DoubleMatcher = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  range: Schema.optional(DoubleRange),
  exact: Schema.optional(Schema.Number),
}).annotate({ identifier: "DoubleMatcher" });

export interface RegexMatcher {
  /** The regex match string. The string must be supported by the configured engine. The regex is matched against the full string, not as a partial match. */
  regex?: string;
  /** Google's RE2 regex engine. */
  googleRe2?: GoogleRE2;
}

export const RegexMatcher = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  regex: Schema.optional(Schema.String),
  googleRe2: Schema.optional(GoogleRE2),
}).annotate({ identifier: "RegexMatcher" });

export interface TypedExtensionConfig {
  /** The name of an extension. This is not used to select the extension, instead it serves the role of an opaque identifier. */
  name?: string;
  /** The typed config for the extension. The type URL will be used to identify the extension. In the case that the type URL is *xds.type.v3.TypedStruct* (or, for historical reasons, *udpa.type.v1.TypedStruct*), the inner type URL of *TypedStruct* will be utilized. See the :ref:`extension configuration overview ` for further details. */
  typedConfig?: Record<string, unknown>;
}

export const TypedExtensionConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  typedConfig: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "TypedExtensionConfig" });

export interface StringMatcher {
  /** If ``true``, indicates the exact/prefix/suffix/contains matching should be case insensitive. This has no effect for the ``safe_regex`` match. For example, the matcher ``data`` will match both input string ``Data`` and ``data`` if this option is set to ``true``. */
  ignoreCase?: boolean;
  /** The input string must have the suffix specified here. .. note:: Empty suffix match is not allowed, please use ``safe_regex`` instead. Examples: * ``abc`` matches the value ``xyz.abc`` */
  suffix?: string;
  /** The input string must have the substring specified here. .. note:: Empty contains match is not allowed, please use ``safe_regex`` instead. Examples: * ``abc`` matches the value ``xyz.abc.def`` */
  contains?: string;
  /** The input string must match exactly the string specified here. Examples: * ``abc`` only matches the value ``abc``. */
  exact?: string;
  /** The input string must have the prefix specified here. .. note:: Empty prefix match is not allowed, please use ``safe_regex`` instead. Examples: * ``abc`` matches the value ``abc.xyz`` */
  prefix?: string;
  /** The input string must match the regular expression specified here. */
  safeRegex?: RegexMatcher;
  /** Use an extension as the matcher type. [#extension-category: envoy.string_matcher] */
  custom?: TypedExtensionConfig;
}

export const StringMatcher = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ignoreCase: Schema.optional(Schema.Boolean),
  suffix: Schema.optional(Schema.String),
  contains: Schema.optional(Schema.String),
  exact: Schema.optional(Schema.String),
  prefix: Schema.optional(Schema.String),
  safeRegex: Schema.optional(RegexMatcher),
  custom: Schema.optional(TypedExtensionConfig),
}).annotate({ identifier: "StringMatcher" });

export interface SocketAddress {
  protocol?: "TCP" | "UDP" | (string & {});
  portValue?: number;
  /** The name of the custom resolver. This must have been registered with Envoy. If this is empty, a context dependent default applies. If the address is a concrete IP address, no resolution will occur. If address is a hostname this should be set for resolution other than DNS. Specifying a custom resolver with ``STRICT_DNS`` or ``LOGICAL_DNS`` will generate an error at runtime. */
  resolverName?: string;
  /** This is only valid if :ref:`resolver_name ` is specified below and the named resolver is capable of named port resolution. */
  namedPort?: string;
  /** The address for this socket. :ref:`Listeners ` will bind to the address. An empty address is not allowed. Specify ``0.0.0.0`` or ``::`` to bind to any address. [#comment:TODO(zuercher) reinstate when implemented: It is possible to distinguish a Listener address via the prefix/suffix matching in :ref:`FilterChainMatch `.] When used within an upstream :ref:`BindConfig `, the address controls the source address of outbound connections. For :ref:`clusters `, the cluster type determines whether the address must be an IP (``STATIC`` or ``EDS`` clusters) or a hostname resolved by DNS (``STRICT_DNS`` or ``LOGICAL_DNS`` clusters). Address resolution can be customized via :ref:`resolver_name `. */
  address?: string;
  /** Filepath that specifies the Linux network namespace this socket will be created in (see ``man 7 network_namespaces``). If this field is set, Envoy will create the socket in the specified network namespace. .. note:: Setting this parameter requires Envoy to run with the ``CAP_NET_ADMIN`` capability. .. attention:: Network namespaces are only configurable on Linux. Otherwise, this field has no effect. */
  networkNamespaceFilepath?: string;
  /** When binding to an IPv6 address above, this enables `IPv4 compatibility `_. Binding to ``::`` will allow both IPv4 and IPv6 connections, with peer IPv4 addresses mapped into IPv6 space as ``::FFFF:``. */
  ipv4Compat?: boolean;
}

export const SocketAddress = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  protocol: Schema.optional(Schema.String),
  portValue: Schema.optional(Schema.Number),
  resolverName: Schema.optional(Schema.String),
  namedPort: Schema.optional(Schema.String),
  address: Schema.optional(Schema.String),
  networkNamespaceFilepath: Schema.optional(Schema.String),
  ipv4Compat: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SocketAddress" });

export interface EnvoyInternalAddress {
  /** Specifies an endpoint identifier to distinguish between multiple endpoints for the same internal listener in a single upstream pool. Only used in the upstream addresses for tracking changes to individual endpoints. This, for example, may be set to the final destination IP for the target internal listener. */
  endpointId?: string;
  /** Specifies the :ref:`name ` of the internal listener. */
  serverListenerName?: string;
}

export const EnvoyInternalAddress = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endpointId: Schema.optional(Schema.String),
  serverListenerName: Schema.optional(Schema.String),
}).annotate({ identifier: "EnvoyInternalAddress" });

export interface Pipe {
  /** Unix Domain Socket path. On Linux, paths starting with '@' will use the abstract namespace. The starting '@' is replaced by a null byte by Envoy. Paths starting with '@' will result in an error in environments other than Linux. */
  path?: string;
  /** The mode for the Pipe. Not applicable for abstract sockets. */
  mode?: number;
}

export const Pipe = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.optional(Schema.String),
  mode: Schema.optional(Schema.Number),
}).annotate({ identifier: "Pipe" });

export interface Address {
  /** Specifies a user-space address handled by :ref:`internal listeners `. */
  envoyInternalAddress?: EnvoyInternalAddress;
  socketAddress?: SocketAddress;
  pipe?: Pipe;
}

export const Address = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  envoyInternalAddress: Schema.optional(EnvoyInternalAddress),
  socketAddress: Schema.optional(SocketAddress),
  pipe: Schema.optional(Pipe),
}).annotate({ identifier: "Address" });

export interface PathSegment {
  /** If specified, use the key to retrieve the value in a Struct. */
  key?: string;
}

export const PathSegment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  key: Schema.optional(Schema.String),
}).annotate({ identifier: "PathSegment" });

export interface OrMatcher {
  valueMatchers?: ReadonlyArray<ValueMatcher>;
}

export const OrMatcher: Schema.Schema<OrMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      valueMatchers: Schema.optional(Schema.Array(ValueMatcher)),
    }),
  ).annotate({ identifier: "OrMatcher" }) as any as Schema.Schema<OrMatcher>;

export interface NullMatch {}

export const NullMatch = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate(
  { identifier: "NullMatch" },
);

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
  /** If specified, a match occurs if and only if the target value is a double value and is matched to this field. */
  doubleMatch?: DoubleMatcher;
  /** If specified, a match occurs if and only if any of the alternatives in the match accept the value. */
  orMatch?: OrMatcher;
  /** If specified, a match occurs if and only if the target value is a string value and is matched to this field. */
  stringMatch?: StringMatcher;
  /** If specified, a match occurs if and only if the target value is a bool value and is equal to this field. */
  boolMatch?: boolean;
  /** If specified, a match occurs if and only if the target value is a NullValue. */
  nullMatch?: NullMatch;
  /** If specified, a match occurs if and only if the target value is a list value and is matched to this field. */
  listMatch?: ListMatcher;
  /** If specified, value match will be performed based on whether the path is referring to a valid primitive value in the metadata. If the path is referring to a non-primitive value, the result is always not matched. */
  presentMatch?: boolean;
}

export const ValueMatcher: Schema.Schema<ValueMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      doubleMatch: Schema.optional(DoubleMatcher),
      orMatch: Schema.optional(OrMatcher),
      stringMatch: Schema.optional(StringMatcher),
      boolMatch: Schema.optional(Schema.Boolean),
      nullMatch: Schema.optional(NullMatch),
      listMatch: Schema.optional(ListMatcher),
      presentMatch: Schema.optional(Schema.Boolean),
    }),
  ).annotate({
    identifier: "ValueMatcher",
  }) as any as Schema.Schema<ValueMatcher>;

export interface StructMatcher {
  /** The path to retrieve the Value from the Struct. */
  path?: ReadonlyArray<PathSegment>;
  /** The StructMatcher is matched if the value retrieved by path is matched to this value. */
  value?: ValueMatcher;
}

export const StructMatcher = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.optional(Schema.Array(PathSegment)),
  value: Schema.optional(ValueMatcher),
}).annotate({ identifier: "StructMatcher" });

export interface SemanticVersion {
  majorNumber?: number;
  minorNumber?: number;
  patch?: number;
}

export const SemanticVersion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  majorNumber: Schema.optional(Schema.Number),
  minorNumber: Schema.optional(Schema.Number),
  patch: Schema.optional(Schema.Number),
}).annotate({ identifier: "SemanticVersion" });

export interface BuildVersion {
  /** Free-form build information. Envoy defines several well known keys in the source/common/version/version.h file */
  metadata?: Record<string, unknown>;
  /** SemVer version of extension. */
  version?: SemanticVersion;
}

export const BuildVersion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  version: Schema.optional(SemanticVersion),
}).annotate({ identifier: "BuildVersion" });

export interface DynamicListenerState {
  /** The timestamp when the Listener was last successfully updated. */
  lastUpdated?: string;
  /** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the listener was loaded. In the future, discrete per-listener versions may be supported by the API. */
  versionInfo?: string;
  /** The listener config. */
  listener?: Record<string, unknown>;
}

export const DynamicListenerState = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lastUpdated: Schema.optional(Schema.String),
  versionInfo: Schema.optional(Schema.String),
  listener: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "DynamicListenerState" });

export interface UpdateFailureState {
  /** Time of the latest failed update attempt. */
  lastUpdateAttempt?: string;
  /** Details about the last failed update attempt. */
  details?: string;
  /** This is the version of the rejected resource. [#not-implemented-hide:] */
  versionInfo?: string;
  /** What the component configuration would have been if the update had succeeded. This field may not be populated by xDS clients due to storage overhead. */
  failedConfiguration?: Record<string, unknown>;
}

export const UpdateFailureState = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lastUpdateAttempt: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
  versionInfo: Schema.optional(Schema.String),
  failedConfiguration: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
}).annotate({ identifier: "UpdateFailureState" });

export interface DynamicListener {
  /** The listener state for any warming listener by this name. These are listeners that are currently undergoing warming in preparation to service data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the warming listeners should generally be discarded. */
  warmingState?: DynamicListenerState;
  /** The listener state for any draining listener by this name. These are listeners that are currently undergoing draining in preparation to stop servicing data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the draining listeners should generally be discarded. */
  drainingState?: DynamicListenerState;
  /** The client status of this resource. [#not-implemented-hide:] */
  clientStatus?:
    | "UNKNOWN"
    | "REQUESTED"
    | "DOES_NOT_EXIST"
    | "ACKED"
    | "NACKED"
    | "RECEIVED_ERROR"
    | "TIMEOUT"
    | (string & {});
  /** Set if the last update failed, cleared after the next successful update. The ``error_state`` field contains the rejected version of this particular resource along with the reason and timestamp. For successfully updated or acknowledged resource, this field should be empty. */
  errorState?: UpdateFailureState;
  /** The name or unique id of this listener, pulled from the DynamicListenerState config. */
  name?: string;
  /** The listener state for any active listener by this name. These are listeners that are available to service data plane traffic. */
  activeState?: DynamicListenerState;
}

export const DynamicListener = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  warmingState: Schema.optional(DynamicListenerState),
  drainingState: Schema.optional(DynamicListenerState),
  clientStatus: Schema.optional(Schema.String),
  errorState: Schema.optional(UpdateFailureState),
  name: Schema.optional(Schema.String),
  activeState: Schema.optional(DynamicListenerState),
}).annotate({ identifier: "DynamicListener" });

export interface DynamicCluster {
  /** The client status of this resource. [#not-implemented-hide:] */
  clientStatus?:
    | "UNKNOWN"
    | "REQUESTED"
    | "DOES_NOT_EXIST"
    | "ACKED"
    | "NACKED"
    | "RECEIVED_ERROR"
    | "TIMEOUT"
    | (string & {});
  /** The timestamp when the Cluster was last updated. */
  lastUpdated?: string;
  /** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the cluster was loaded. In the future, discrete per-cluster versions may be supported by the API. */
  versionInfo?: string;
  /** The cluster config. */
  cluster?: Record<string, unknown>;
  /** Set if the last update failed, cleared after the next successful update. The ``error_state`` field contains the rejected version of this particular resource along with the reason and timestamp. For successfully updated or acknowledged resource, this field should be empty. [#not-implemented-hide:] */
  errorState?: UpdateFailureState;
}

export const DynamicCluster = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clientStatus: Schema.optional(Schema.String),
  lastUpdated: Schema.optional(Schema.String),
  versionInfo: Schema.optional(Schema.String),
  cluster: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  errorState: Schema.optional(UpdateFailureState),
}).annotate({ identifier: "DynamicCluster" });

export interface StaticEndpointConfig {
  /** The endpoint config. */
  endpointConfig?: Record<string, unknown>;
  /** [#not-implemented-hide:] The timestamp when the Endpoint was last updated. */
  lastUpdated?: string;
}

export const StaticEndpointConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endpointConfig: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  lastUpdated: Schema.optional(Schema.String),
}).annotate({ identifier: "StaticEndpointConfig" });

export interface StaticCluster {
  /** The timestamp when the Cluster was last updated. */
  lastUpdated?: string;
  /** The cluster config. */
  cluster?: Record<string, unknown>;
}

export const StaticCluster = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lastUpdated: Schema.optional(Schema.String),
  cluster: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "StaticCluster" });

export interface NodeMatcher {
  /** Specifies match criteria on the node id. */
  nodeId?: StringMatcher;
  /** Specifies match criteria on the node metadata. */
  nodeMetadatas?: ReadonlyArray<StructMatcher>;
}

export const NodeMatcher = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nodeId: Schema.optional(StringMatcher),
  nodeMetadatas: Schema.optional(Schema.Array(StructMatcher)),
}).annotate({ identifier: "NodeMatcher" });

export interface Locality {
  /** Region this :ref:`zone ` belongs to. */
  region?: string;
  /** Defines the local service zone where Envoy is running. Though optional, it should be set if discovery service routing is used and the discovery service exposes :ref:`zone data `, either in this message or via :option:`--service-zone`. The meaning of zone is context dependent, e.g. `Availability Zone (AZ) `_ on AWS, `Zone `_ on GCP, etc. */
  zone?: string;
  /** When used for locality of upstream hosts, this field further splits zone into smaller chunks of sub-zones so they can be load balanced independently. */
  subZone?: string;
}

export const Locality = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  region: Schema.optional(Schema.String),
  zone: Schema.optional(Schema.String),
  subZone: Schema.optional(Schema.String),
}).annotate({ identifier: "Locality" });

export interface DynamicScopedRouteConfigs {
  /** Set if the last update failed, cleared after the next successful update. The ``error_state`` field contains the rejected version of this particular resource along with the reason and timestamp. For successfully updated or acknowledged resource, this field should be empty. [#not-implemented-hide:] */
  errorState?: UpdateFailureState;
  /** The name assigned to the scoped route configurations. */
  name?: string;
  /** The scoped route configurations. */
  scopedRouteConfigs?: ReadonlyArray<Record<string, unknown>>;
  /** The timestamp when the scoped route config set was last updated. */
  lastUpdated?: string;
  /** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the scoped routes configuration was loaded. */
  versionInfo?: string;
  /** The client status of this resource. [#not-implemented-hide:] */
  clientStatus?:
    | "UNKNOWN"
    | "REQUESTED"
    | "DOES_NOT_EXIST"
    | "ACKED"
    | "NACKED"
    | "RECEIVED_ERROR"
    | "TIMEOUT"
    | (string & {});
}

export const DynamicScopedRouteConfigs =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorState: Schema.optional(UpdateFailureState),
    name: Schema.optional(Schema.String),
    scopedRouteConfigs: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    lastUpdated: Schema.optional(Schema.String),
    versionInfo: Schema.optional(Schema.String),
    clientStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicScopedRouteConfigs" });

export interface StaticListener {
  /** The timestamp when the Listener was last successfully updated. */
  lastUpdated?: string;
  /** The listener config. */
  listener?: Record<string, unknown>;
}

export const StaticListener = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lastUpdated: Schema.optional(Schema.String),
  listener: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "StaticListener" });

export interface ClustersConfigDump {
  /** The dynamically loaded active clusters. These are clusters that are available to service data plane traffic. */
  dynamicActiveClusters?: ReadonlyArray<DynamicCluster>;
  /** The statically loaded cluster configs. */
  staticClusters?: ReadonlyArray<StaticCluster>;
  /** The dynamically loaded warming clusters. These are clusters that are currently undergoing warming in preparation to service data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the warming clusters should generally be discarded. */
  dynamicWarmingClusters?: ReadonlyArray<DynamicCluster>;
  /** This is the :ref:`version_info ` in the last processed CDS discovery response. If there are only static bootstrap clusters, this field will be "". */
  versionInfo?: string;
}

export const ClustersConfigDump = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dynamicActiveClusters: Schema.optional(Schema.Array(DynamicCluster)),
  staticClusters: Schema.optional(Schema.Array(StaticCluster)),
  dynamicWarmingClusters: Schema.optional(Schema.Array(DynamicCluster)),
  versionInfo: Schema.optional(Schema.String),
}).annotate({ identifier: "ClustersConfigDump" });

export interface DynamicRouteConfig {
  /** Set if the last update failed, cleared after the next successful update. The ``error_state`` field contains the rejected version of this particular resource along with the reason and timestamp. For successfully updated or acknowledged resource, this field should be empty. [#not-implemented-hide:] */
  errorState?: UpdateFailureState;
  /** The client status of this resource. [#not-implemented-hide:] */
  clientStatus?:
    | "UNKNOWN"
    | "REQUESTED"
    | "DOES_NOT_EXIST"
    | "ACKED"
    | "NACKED"
    | "RECEIVED_ERROR"
    | "TIMEOUT"
    | (string & {});
  /** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the route configuration was loaded. */
  versionInfo?: string;
  /** The route config. */
  routeConfig?: Record<string, unknown>;
  /** The timestamp when the Route was last updated. */
  lastUpdated?: string;
}

export const DynamicRouteConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  errorState: Schema.optional(UpdateFailureState),
  clientStatus: Schema.optional(Schema.String),
  versionInfo: Schema.optional(Schema.String),
  routeConfig: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  lastUpdated: Schema.optional(Schema.String),
}).annotate({ identifier: "DynamicRouteConfig" });

export interface GenericXdsConfig {
  /** Per xDS resource status from the view of a xDS client */
  clientStatus?:
    | "UNKNOWN"
    | "REQUESTED"
    | "DOES_NOT_EXIST"
    | "ACKED"
    | "NACKED"
    | "RECEIVED_ERROR"
    | "TIMEOUT"
    | (string & {});
  /** Set if the last update failed, cleared after the next successful update. The *error_state* field contains the rejected version of this particular resource along with the reason and timestamp. For successfully updated or acknowledged resource, this field should be empty. [#not-implemented-hide:] */
  errorState?: UpdateFailureState;
  /** Name of the xDS resource */
  name?: string;
  /** Per xDS resource config status. It is generated by management servers. It will not be present if the CSDS server is an xDS client. */
  configStatus?:
    | "UNKNOWN"
    | "SYNCED"
    | "NOT_SENT"
    | "STALE"
    | "ERROR"
    | (string & {});
  /** Is static resource is true if it is specified in the config supplied through the file at the startup. */
  isStaticResource?: boolean;
  /** Timestamp when the xDS resource was last updated */
  lastUpdated?: string;
  /** This is the :ref:`version_info ` in the last processed xDS discovery response. If there are only static bootstrap listeners, this field will be "" */
  versionInfo?: string;
  /** Type_url represents the fully qualified name of xDS resource type like envoy.v3.Cluster, envoy.v3.ClusterLoadAssignment etc. */
  typeUrl?: string;
  /** The xDS resource config. Actual content depends on the type */
  xdsConfig?: Record<string, unknown>;
}

export const GenericXdsConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clientStatus: Schema.optional(Schema.String),
  errorState: Schema.optional(UpdateFailureState),
  name: Schema.optional(Schema.String),
  configStatus: Schema.optional(Schema.String),
  isStaticResource: Schema.optional(Schema.Boolean),
  lastUpdated: Schema.optional(Schema.String),
  versionInfo: Schema.optional(Schema.String),
  typeUrl: Schema.optional(Schema.String),
  xdsConfig: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "GenericXdsConfig" });

export interface Extension {
  /** This is the name of the Envoy filter as specified in the Envoy configuration, e.g. envoy.filters.http.router, com.acme.widget. */
  name?: string;
  /** [#not-implemented-hide:] Type descriptor of extension configuration proto. [#comment: */
  typeDescriptor?: string;
  /** Type URLs of extension configuration protos. */
  typeUrls?: ReadonlyArray<string>;
  /** Category of the extension. Extension category names use reverse DNS notation. For instance "envoy.filters.listener" for Envoy's built-in listener filters or "com.acme.filters.http" for HTTP filters from acme.com vendor. [#comment: */
  category?: string;
  /** The version is a property of the extension and maintained independently of other extensions and the Envoy API. This field is not set when extension did not provide version information. */
  version?: BuildVersion;
  /** Indicates that the extension is present but was disabled via dynamic configuration. */
  disabled?: boolean;
}

export const Extension = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  typeDescriptor: Schema.optional(Schema.String),
  typeUrls: Schema.optional(Schema.Array(Schema.String)),
  category: Schema.optional(Schema.String),
  version: Schema.optional(BuildVersion),
  disabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Extension" });

export interface ContextParams {
  params?: Record<string, string>;
}

export const ContextParams = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  params: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "ContextParams" });

export interface Node {
  /** List of extensions and their versions supported by the node. */
  extensions?: ReadonlyArray<Extension>;
  /** Free-form string that identifies the version of the entity requesting config. E.g. "1.12.2" or "abcd1234", or "SpecialEnvoyBuild" */
  userAgentVersion?: string;
  /** Known listening ports on the node as a generic hint to the management server for filtering :ref:`listeners ` to be returned. For example, if there is a listener bound to port 80, the list can optionally contain the SocketAddress ``(0.0.0.0,80)``. The field is optional and just a hint. */
  listeningAddresses?: ReadonlyArray<Address>;
  /** Locality specifying where the Envoy instance is running. */
  locality?: Locality;
  /** Defines the local service cluster name where Envoy is running. Though optional, it should be set if any of the following features are used: :ref:`statsd `, :ref:`health check cluster verification `, :ref:`runtime override directory `, :ref:`user agent addition `, :ref:`HTTP global rate limiting `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-cluster`. */
  cluster?: string;
  /** An opaque node identifier for the Envoy node. This also provides the local service node name. It should be set if any of the following features are used: :ref:`statsd `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-node`. */
  id?: string;
  /** Free-form string that identifies the entity requesting config. E.g. "envoy" or "grpc" */
  userAgentName?: string;
  /** Client feature support list. These are well known features described in the Envoy API repository for a given major version of an API. Client features use reverse DNS naming scheme, for example ``com.acme.feature``. See :ref:`the list of features ` that xDS client may support. */
  clientFeatures?: ReadonlyArray<string>;
  /** Structured version of the entity requesting config. */
  userAgentBuildVersion?: BuildVersion;
  /** Map from xDS resource type URL to dynamic context parameters. These may vary at runtime (unlike other fields in this message). For example, the xDS client may have a shard identifier that changes during the lifetime of the xDS client. In Envoy, this would be achieved by updating the dynamic context on the Server::Instance's LocalInfo context provider. The shard ID dynamic parameter then appears in this field during future discovery requests. */
  dynamicParameters?: Record<string, ContextParams>;
  /** Opaque metadata extending the node identifier. Envoy will pass this directly to the management server. */
  metadata?: Record<string, unknown>;
}

export const Node = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  extensions: Schema.optional(Schema.Array(Extension)),
  userAgentVersion: Schema.optional(Schema.String),
  listeningAddresses: Schema.optional(Schema.Array(Address)),
  locality: Schema.optional(Locality),
  cluster: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  userAgentName: Schema.optional(Schema.String),
  clientFeatures: Schema.optional(Schema.Array(Schema.String)),
  userAgentBuildVersion: Schema.optional(BuildVersion),
  dynamicParameters: Schema.optional(
    Schema.Record(Schema.String, ContextParams),
  ),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "Node" });

export interface ClientStatusRequest {
  /** The node making the csds request. */
  node?: Node;
  /** If true, the server will not include the resource contents in the response (i.e., the generic_xds_configs.xds_config field will not be populated). [#not-implemented-hide:] */
  excludeResourceContents?: boolean;
  /** Management server can use these match criteria to identify clients. The match follows OR semantics. */
  nodeMatchers?: ReadonlyArray<NodeMatcher>;
}

export const ClientStatusRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  node: Schema.optional(Node),
  excludeResourceContents: Schema.optional(Schema.Boolean),
  nodeMatchers: Schema.optional(Schema.Array(NodeMatcher)),
}).annotate({ identifier: "ClientStatusRequest" });

export interface ListenersConfigDump {
  /** The statically loaded listener configs. */
  staticListeners?: ReadonlyArray<StaticListener>;
  /** State for any warming, active, or draining listeners. */
  dynamicListeners?: ReadonlyArray<DynamicListener>;
  /** This is the :ref:`version_info ` in the last processed LDS discovery response. If there are only static bootstrap listeners, this field will be "". */
  versionInfo?: string;
}

export const ListenersConfigDump = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  staticListeners: Schema.optional(Schema.Array(StaticListener)),
  dynamicListeners: Schema.optional(Schema.Array(DynamicListener)),
  versionInfo: Schema.optional(Schema.String),
}).annotate({ identifier: "ListenersConfigDump" });

export interface DynamicEndpointConfig {
  /** The client status of this resource. [#not-implemented-hide:] */
  clientStatus?:
    | "UNKNOWN"
    | "REQUESTED"
    | "DOES_NOT_EXIST"
    | "ACKED"
    | "NACKED"
    | "RECEIVED_ERROR"
    | "TIMEOUT"
    | (string & {});
  /** [#not-implemented-hide:] This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the endpoint configuration was loaded. */
  versionInfo?: string;
  /** [#not-implemented-hide:] The timestamp when the Endpoint was last updated. */
  lastUpdated?: string;
  /** The endpoint config. */
  endpointConfig?: Record<string, unknown>;
  /** Set if the last update failed, cleared after the next successful update. The ``error_state`` field contains the rejected version of this particular resource along with the reason and timestamp. For successfully updated or acknowledged resource, this field should be empty. [#not-implemented-hide:] */
  errorState?: UpdateFailureState;
}

export const DynamicEndpointConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clientStatus: Schema.optional(Schema.String),
  versionInfo: Schema.optional(Schema.String),
  lastUpdated: Schema.optional(Schema.String),
  endpointConfig: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  errorState: Schema.optional(UpdateFailureState),
}).annotate({ identifier: "DynamicEndpointConfig" });

export interface EndpointsConfigDump {
  /** The statically loaded endpoint configs. */
  staticEndpointConfigs?: ReadonlyArray<StaticEndpointConfig>;
  /** The dynamically loaded endpoint configs. */
  dynamicEndpointConfigs?: ReadonlyArray<DynamicEndpointConfig>;
}

export const EndpointsConfigDump = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  staticEndpointConfigs: Schema.optional(Schema.Array(StaticEndpointConfig)),
  dynamicEndpointConfigs: Schema.optional(Schema.Array(DynamicEndpointConfig)),
}).annotate({ identifier: "EndpointsConfigDump" });

export interface StaticRouteConfig {
  /** The timestamp when the Route was last updated. */
  lastUpdated?: string;
  /** The route config. */
  routeConfig?: Record<string, unknown>;
}

export const StaticRouteConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lastUpdated: Schema.optional(Schema.String),
  routeConfig: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "StaticRouteConfig" });

export interface RoutesConfigDump {
  /** The statically loaded route configs. */
  staticRouteConfigs?: ReadonlyArray<StaticRouteConfig>;
  /** The dynamically loaded route configs. */
  dynamicRouteConfigs?: ReadonlyArray<DynamicRouteConfig>;
}

export const RoutesConfigDump = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  staticRouteConfigs: Schema.optional(Schema.Array(StaticRouteConfig)),
  dynamicRouteConfigs: Schema.optional(Schema.Array(DynamicRouteConfig)),
}).annotate({ identifier: "RoutesConfigDump" });

export interface InlineScopedRouteConfigs {
  /** The timestamp when the scoped route config set was last updated. */
  lastUpdated?: string;
  /** The name assigned to the scoped route configurations. */
  name?: string;
  /** The scoped route configurations. */
  scopedRouteConfigs?: ReadonlyArray<Record<string, unknown>>;
}

export const InlineScopedRouteConfigs =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastUpdated: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    scopedRouteConfigs: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "InlineScopedRouteConfigs" });

export interface ScopedRoutesConfigDump {
  /** The statically loaded scoped route configs. */
  inlineScopedRouteConfigs?: ReadonlyArray<InlineScopedRouteConfigs>;
  /** The dynamically loaded scoped route configs. */
  dynamicScopedRouteConfigs?: ReadonlyArray<DynamicScopedRouteConfigs>;
}

export const ScopedRoutesConfigDump = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    inlineScopedRouteConfigs: Schema.optional(
      Schema.Array(InlineScopedRouteConfigs),
    ),
    dynamicScopedRouteConfigs: Schema.optional(
      Schema.Array(DynamicScopedRouteConfigs),
    ),
  },
).annotate({ identifier: "ScopedRoutesConfigDump" });

export interface PerXdsConfig {
  listenerConfig?: ListenersConfigDump;
  endpointConfig?: EndpointsConfigDump;
  /** Config status generated by management servers. Will not be present if the CSDS server is an xDS client. */
  status?:
    | "UNKNOWN"
    | "SYNCED"
    | "NOT_SENT"
    | "STALE"
    | "ERROR"
    | (string & {});
  clusterConfig?: ClustersConfigDump;
  /** Client config status is populated by xDS clients. Will not be present if the CSDS server is an xDS server. No matter what the client config status is, xDS clients should always dump the most recent accepted xDS config. .. attention:: This field is deprecated. Use :ref:`ClientResourceStatus ` for per-resource config status instead. */
  clientStatus?:
    | "CLIENT_UNKNOWN"
    | "CLIENT_REQUESTED"
    | "CLIENT_ACKED"
    | "CLIENT_NACKED"
    | "CLIENT_RECEIVED_ERROR"
    | (string & {});
  routeConfig?: RoutesConfigDump;
  scopedRouteConfig?: ScopedRoutesConfigDump;
}

export const PerXdsConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  listenerConfig: Schema.optional(ListenersConfigDump),
  endpointConfig: Schema.optional(EndpointsConfigDump),
  status: Schema.optional(Schema.String),
  clusterConfig: Schema.optional(ClustersConfigDump),
  clientStatus: Schema.optional(Schema.String),
  routeConfig: Schema.optional(RoutesConfigDump),
  scopedRouteConfig: Schema.optional(ScopedRoutesConfigDump),
}).annotate({ identifier: "PerXdsConfig" });

export interface ClientConfig {
  /** This field is deprecated in favor of generic_xds_configs which is much simpler and uniform in structure. */
  xdsConfig?: ReadonlyArray<PerXdsConfig>;
  /** Node for a particular client. */
  node?: Node;
  /** For xDS clients, the scope in which the data is used. For example, gRPC indicates the data plane target or that the data is associated with gRPC server(s). */
  clientScope?: string;
  /** Represents generic xDS config and the exact config structure depends on the type URL (like Cluster if it is CDS) */
  genericXdsConfigs?: ReadonlyArray<GenericXdsConfig>;
}

export const ClientConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  xdsConfig: Schema.optional(Schema.Array(PerXdsConfig)),
  node: Schema.optional(Node),
  clientScope: Schema.optional(Schema.String),
  genericXdsConfigs: Schema.optional(Schema.Array(GenericXdsConfig)),
}).annotate({ identifier: "ClientConfig" });

export interface ClientStatusResponse {
  /** Client configs for the clients specified in the ClientStatusRequest. */
  config?: ReadonlyArray<ClientConfig>;
}

export const ClientStatusResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  config: Schema.optional(Schema.Array(ClientConfig)),
}).annotate({ identifier: "ClientStatusResponse" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
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
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
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
      path: "v3/discovery:client_status",
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
