// ==========================================================================
// Kubernetes Engine API (container v1beta1)
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
  name: "container",
  version: "v1beta1",
  rootUrl: "https://container.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface RotationConfig {
  /** Whether the rotation is enabled. */
  enabled?: boolean;
  /** The interval between two consecutive rotations. Default rotation interval is 2 minutes. */
  rotationInterval?: string;
}

export const RotationConfig: Schema.Schema<RotationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    rotationInterval: Schema.optional(Schema.String),
  }).annotate({ identifier: "RotationConfig" });

export interface AutopilotCompatibilityIssue {
  /** The constraint type of the issue. */
  constraintType?: string;
  /** The name of the resources which are subject to this issue. */
  subjects?: ReadonlyArray<string>;
  /** The last time when this issue was observed. */
  lastObservation?: string;
  /** The incompatibility type of this issue. */
  incompatibilityType?:
    | "UNSPECIFIED"
    | "INCOMPATIBILITY"
    | "ADDITIONAL_CONFIG_REQUIRED"
    | "PASSED_WITH_OPTIONAL_CONFIG"
    | (string & {});
  /** A URL to a public documentation, which addresses resolving this issue. */
  documentationUrl?: string;
  /** The description of the issue. */
  description?: string;
}

export const AutopilotCompatibilityIssue: Schema.Schema<AutopilotCompatibilityIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    constraintType: Schema.optional(Schema.String),
    subjects: Schema.optional(Schema.Array(Schema.String)),
    lastObservation: Schema.optional(Schema.String),
    incompatibilityType: Schema.optional(Schema.String),
    documentationUrl: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutopilotCompatibilityIssue" });

export interface CheckAutopilotCompatibilityResponse {
  /** The list of issues for the given operation. */
  issues?: ReadonlyArray<AutopilotCompatibilityIssue>;
  /** The summary of the autopilot compatibility response. */
  summary?: string;
}

export const CheckAutopilotCompatibilityResponse: Schema.Schema<CheckAutopilotCompatibilityResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issues: Schema.optional(Schema.Array(AutopilotCompatibilityIssue)),
    summary: Schema.optional(Schema.String),
  }).annotate({ identifier: "CheckAutopilotCompatibilityResponse" });

export interface LoggingVariantConfig {
  /** Logging variant deployed on nodes. */
  variant?:
    | "VARIANT_UNSPECIFIED"
    | "DEFAULT"
    | "MAX_THROUGHPUT"
    | (string & {});
}

export const LoggingVariantConfig: Schema.Schema<LoggingVariantConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variant: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoggingVariantConfig" });

export interface NodePoolLoggingConfig {
  /** Logging variant configuration. */
  variantConfig?: LoggingVariantConfig;
}

export const NodePoolLoggingConfig: Schema.Schema<NodePoolLoggingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variantConfig: Schema.optional(LoggingVariantConfig),
  }).annotate({ identifier: "NodePoolLoggingConfig" });

export interface DNSEndpointConfig {
  /** Controls whether the k8s token auth is allowed via DNS. */
  enableK8sTokensViaDns?: boolean;
  /** Output only. The cluster's DNS endpoint configuration. A DNS format address. This is accessible from the public internet. Ex: uid.us-central1.gke.goog. Always present, but the behavior may change according to the value of DNSEndpointConfig.allow_external_traffic. */
  endpoint?: string;
  /** Controls whether user traffic is allowed over this endpoint. Note that Google-managed services may still use the endpoint even if this is false. */
  allowExternalTraffic?: boolean;
  /** Controls whether the k8s certs auth is allowed via DNS. */
  enableK8sCertsViaDns?: boolean;
}

export const DNSEndpointConfig: Schema.Schema<DNSEndpointConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableK8sTokensViaDns: Schema.optional(Schema.Boolean),
    endpoint: Schema.optional(Schema.String),
    allowExternalTraffic: Schema.optional(Schema.Boolean),
    enableK8sCertsViaDns: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DNSEndpointConfig" });

export interface CidrBlock {
  /** display_name is an optional field for users to identify CIDR blocks. */
  displayName?: string;
  /** cidr_block must be specified in CIDR notation. */
  cidrBlock?: string;
}

export const CidrBlock: Schema.Schema<CidrBlock> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    cidrBlock: Schema.optional(Schema.String),
  }).annotate({ identifier: "CidrBlock" });

export interface MasterAuthorizedNetworksConfig {
  /** cidr_blocks define up to 10 external networks that could access Kubernetes master through HTTPS. */
  cidrBlocks?: ReadonlyArray<CidrBlock>;
  /** Whether master is accessible via Google Compute Engine Public IP addresses. */
  gcpPublicCidrsAccessEnabled?: boolean;
  /** Whether master authorized networks is enforced on private endpoint or not. */
  privateEndpointEnforcementEnabled?: boolean;
  /** Whether or not master authorized networks is enabled. */
  enabled?: boolean;
}

export const MasterAuthorizedNetworksConfig: Schema.Schema<MasterAuthorizedNetworksConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cidrBlocks: Schema.optional(Schema.Array(CidrBlock)),
    gcpPublicCidrsAccessEnabled: Schema.optional(Schema.Boolean),
    privateEndpointEnforcementEnabled: Schema.optional(Schema.Boolean),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MasterAuthorizedNetworksConfig" });

export interface IPEndpointsConfig {
  /** Controls whether the control plane's private endpoint is accessible from sources in other regions. It is invalid to specify both PrivateClusterMasterGlobalAccessConfig.enabled and this field at the same time. */
  globalAccess?: boolean;
  /** Controls whether the control plane allows access through a public IP. It is invalid to specify both PrivateClusterConfig.enablePrivateEndpoint and this field at the same time. */
  enablePublicEndpoint?: boolean;
  /** Controls whether to allow direct IP access. */
  enabled?: boolean;
  /** Output only. The external IP address of this cluster's control plane. Only populated if enabled. */
  publicEndpoint?: string;
  /** Output only. The internal IP address of this cluster's control plane. Only populated if enabled. */
  privateEndpoint?: string;
  /** Configuration of authorized networks. If enabled, restricts access to the control plane based on source IP. It is invalid to specify both Cluster.masterAuthorizedNetworksConfig and this field at the same time. */
  authorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
  /** Subnet to provision the master's private endpoint during cluster creation. Specified in projects/* /regions/* /subnetworks/* format. It is invalid to specify both PrivateClusterConfig.privateEndpointSubnetwork and this field at the same time. */
  privateEndpointSubnetwork?: string;
}

export const IPEndpointsConfig: Schema.Schema<IPEndpointsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    globalAccess: Schema.optional(Schema.Boolean),
    enablePublicEndpoint: Schema.optional(Schema.Boolean),
    enabled: Schema.optional(Schema.Boolean),
    publicEndpoint: Schema.optional(Schema.String),
    privateEndpoint: Schema.optional(Schema.String),
    authorizedNetworksConfig: Schema.optional(MasterAuthorizedNetworksConfig),
    privateEndpointSubnetwork: Schema.optional(Schema.String),
  }).annotate({ identifier: "IPEndpointsConfig" });

export interface ControlPlaneEndpointsConfig {
  /** DNS endpoint configuration. */
  dnsEndpointConfig?: DNSEndpointConfig;
  /** IP endpoints configuration. */
  ipEndpointsConfig?: IPEndpointsConfig;
}

export const ControlPlaneEndpointsConfig: Schema.Schema<ControlPlaneEndpointsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsEndpointConfig: Schema.optional(DNSEndpointConfig),
    ipEndpointsConfig: Schema.optional(IPEndpointsConfig),
  }).annotate({ identifier: "ControlPlaneEndpointsConfig" });

export interface Container_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const Container_Date: Schema.Schema<Container_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    year: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Container_Date" });

export interface WindowsVersion {
  /** Mainstream support end date */
  supportEndDate?: Container_Date;
  /** Windows server build number */
  osVersion?: string;
  /** Windows server image type */
  imageType?: string;
}

export const WindowsVersion: Schema.Schema<WindowsVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportEndDate: Schema.optional(Container_Date),
    osVersion: Schema.optional(Schema.String),
    imageType: Schema.optional(Schema.String),
  }).annotate({ identifier: "WindowsVersion" });

export interface WindowsVersions {
  /** List of Windows server versions. */
  windowsVersions?: ReadonlyArray<WindowsVersion>;
}

export const WindowsVersions: Schema.Schema<WindowsVersions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    windowsVersions: Schema.optional(Schema.Array(WindowsVersion)),
  }).annotate({ identifier: "WindowsVersions" });

export interface AvailableVersion {
  /** Kubernetes version. */
  version?: string;
  /** Reason for availability. */
  reason?: string;
}

export const AvailableVersion: Schema.Schema<AvailableVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "AvailableVersion" });

export interface ReleaseChannelConfig {
  /** The default version for newly created clusters on the channel. */
  defaultVersion?: string;
  /** Deprecated. This field has been deprecated and replaced with the valid_versions field. */
  availableVersions?: ReadonlyArray<AvailableVersion>;
  /** The release channel this configuration applies to. */
  channel?:
    | "UNSPECIFIED"
    | "RAPID"
    | "REGULAR"
    | "STABLE"
    | "EXTENDED"
    | (string & {});
  /** List of valid versions for the channel. */
  validVersions?: ReadonlyArray<string>;
  /** The auto upgrade target version for clusters on the channel. */
  upgradeTargetVersion?: string;
}

export const ReleaseChannelConfig: Schema.Schema<ReleaseChannelConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultVersion: Schema.optional(Schema.String),
    availableVersions: Schema.optional(Schema.Array(AvailableVersion)),
    channel: Schema.optional(Schema.String),
    validVersions: Schema.optional(Schema.Array(Schema.String)),
    upgradeTargetVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReleaseChannelConfig" });

export interface ServerConfig {
  /** List of valid master versions, in descending order. */
  validMasterVersions?: ReadonlyArray<string>;
  /** Default image type. */
  defaultImageType?: string;
  /** Maps of Kubernetes version and supported Windows server versions. */
  windowsVersionMaps?: Record<string, WindowsVersions>;
  /** List of valid node upgrade target versions, in descending order. */
  validNodeVersions?: ReadonlyArray<string>;
  /** Version of Kubernetes the service deploys by default. */
  defaultClusterVersion?: string;
  /** List of valid image types. */
  validImageTypes?: ReadonlyArray<string>;
  /** List of release channel configurations. */
  channels?: ReadonlyArray<ReleaseChannelConfig>;
}

export const ServerConfig: Schema.Schema<ServerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validMasterVersions: Schema.optional(Schema.Array(Schema.String)),
    defaultImageType: Schema.optional(Schema.String),
    windowsVersionMaps: Schema.optional(
      Schema.Record(Schema.String, WindowsVersions),
    ),
    validNodeVersions: Schema.optional(Schema.Array(Schema.String)),
    defaultClusterVersion: Schema.optional(Schema.String),
    validImageTypes: Schema.optional(Schema.Array(Schema.String)),
    channels: Schema.optional(Schema.Array(ReleaseChannelConfig)),
  }).annotate({ identifier: "ServerConfig" });

export interface TimeOfDay {
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
}

export const TimeOfDay: Schema.Schema<TimeOfDay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hours: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
    nanos: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeOfDay" });

export interface RecurringMaintenanceWindow {
  /** Optional. Windows will not be scheduled before that day. Depending on the recurrence, this may be the date the first window appears. Days are measured in the UTC timezone. This setting must be used when INTERVAL>1 or FREQ=WEEKLY/MONTHLY and no BYDAY specified. */
  delayUntil?: Container_Date;
  /** Required. An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window reccurs. For example, to have something repeat every weekday, you'd use: `FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR` To repeat some window daily (equivalent to the DailyMaintenanceWindow): `FREQ=DAILY` For the first weekend of every month: `FREQ=MONTHLY;BYSETPOS=1;BYDAY=SA,SU` The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported. */
  recurrence?: string;
  /** Required. Start time of the window on days that it is scheduled, assuming UTC timezone. */
  windowStartTime?: TimeOfDay;
  /** Required. Duration of the window. */
  windowDuration?: string;
}

export const RecurringMaintenanceWindow: Schema.Schema<RecurringMaintenanceWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delayUntil: Schema.optional(Container_Date),
    recurrence: Schema.optional(Schema.String),
    windowStartTime: Schema.optional(TimeOfDay),
    windowDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "RecurringMaintenanceWindow" });

export interface DedicatedLocalSsdProfile {
  /** The number of physical local NVMe SSD disks to attach. */
  diskCount?: string;
}

export const DedicatedLocalSsdProfile: Schema.Schema<DedicatedLocalSsdProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "DedicatedLocalSsdProfile" });

export interface EnterpriseConfig {
  /** Output only. cluster_tier indicates the effective tier of the cluster. */
  clusterTier?:
    | "CLUSTER_TIER_UNSPECIFIED"
    | "STANDARD"
    | "ENTERPRISE"
    | (string & {});
  /** desired_tier specifies the desired tier of the cluster. */
  desiredTier?:
    | "CLUSTER_TIER_UNSPECIFIED"
    | "STANDARD"
    | "ENTERPRISE"
    | (string & {});
}

export const EnterpriseConfig: Schema.Schema<EnterpriseConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterTier: Schema.optional(Schema.String),
    desiredTier: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseConfig" });

export interface UsableSubnetworkSecondaryRange {
  /** The range of IP addresses belonging to this subnetwork secondary range. */
  ipCidrRange?: string;
  /** This field is to determine the status of the secondary range programmably. */
  status?:
    | "UNKNOWN"
    | "UNUSED"
    | "IN_USE_SERVICE"
    | "IN_USE_SHAREABLE_POD"
    | "IN_USE_MANAGED_POD"
    | (string & {});
  /** The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance. */
  rangeName?: string;
}

export const UsableSubnetworkSecondaryRange: Schema.Schema<UsableSubnetworkSecondaryRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipCidrRange: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    rangeName: Schema.optional(Schema.String),
  }).annotate({ identifier: "UsableSubnetworkSecondaryRange" });

export interface UsableSubnetwork {
  /** Network Name. Example: projects/my-project/global/networks/my-network */
  network?: string;
  /** Subnetwork Name. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet */
  subnetwork?: string;
  /** Secondary IP ranges. */
  secondaryIpRanges?: ReadonlyArray<UsableSubnetworkSecondaryRange>;
  /** The range of internal addresses that are owned by this subnetwork. */
  ipCidrRange?: string;
  /** A human readable status message representing the reasons for cases where the caller cannot use the secondary ranges under the subnet. For example if the secondary_ip_ranges is empty due to a permission issue, an insufficient permission message will be given by status_message. */
  statusMessage?: string;
}

export const UsableSubnetwork: Schema.Schema<UsableSubnetwork> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    secondaryIpRanges: Schema.optional(
      Schema.Array(UsableSubnetworkSecondaryRange),
    ),
    ipCidrRange: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "UsableSubnetwork" });

export interface ListUsableSubnetworksResponse {
  /** A list of usable subnetworks in the specified network project. */
  subnetworks?: ReadonlyArray<UsableSubnetwork>;
  /** This token allows you to get the next page of results for list requests. If the number of results is larger than `page_size`, use the `next_page_token` as a value for the query parameter `page_token` in the next request. The value will become empty when there are no more pages. */
  nextPageToken?: string;
}

export const ListUsableSubnetworksResponse: Schema.Schema<ListUsableSubnetworksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnetworks: Schema.optional(Schema.Array(UsableSubnetwork)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListUsableSubnetworksResponse" });

export interface FastSocket {
  /** Whether Fast Socket features are enabled in the node pool. */
  enabled?: boolean;
}

export const FastSocket: Schema.Schema<FastSocket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "FastSocket" });

export interface GcfsConfig {
  /** Whether to use GCFS. */
  enabled?: boolean;
}

export const GcfsConfig: Schema.Schema<GcfsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GcfsConfig" });

export interface ResourceLabels {
  /** Map of node label keys and node label values. */
  labels?: Record<string, string>;
}

export const ResourceLabels: Schema.Schema<ResourceLabels> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ResourceLabels" });

export interface WritableCgroups {
  /** Optional. Whether writable cgroups is enabled. */
  enabled?: boolean;
}

export const WritableCgroups: Schema.Schema<WritableCgroups> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "WritableCgroups" });

export interface GCPSecretManagerCertificateConfig {
  /** Secret URI, in the form "projects/$PROJECT_ID/secrets/$SECRET_NAME/versions/$VERSION". Version can be fixed (e.g. "2") or "latest" */
  secretUri?: string;
}

export const GCPSecretManagerCertificateConfig: Schema.Schema<GCPSecretManagerCertificateConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GCPSecretManagerCertificateConfig" });

export interface CertificateAuthorityDomainConfig {
  /** List of fully qualified domain names (FQDN). Specifying port is supported. Wildcards are NOT supported. Examples: - `my.customdomain.com` - `10.0.1.2:5000` */
  fqdns?: ReadonlyArray<string>;
  /** Secret Manager certificate configuration. */
  gcpSecretManagerCertificateConfig?: GCPSecretManagerCertificateConfig;
}

export const CertificateAuthorityDomainConfig: Schema.Schema<CertificateAuthorityDomainConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fqdns: Schema.optional(Schema.Array(Schema.String)),
    gcpSecretManagerCertificateConfig: Schema.optional(
      GCPSecretManagerCertificateConfig,
    ),
  }).annotate({ identifier: "CertificateAuthorityDomainConfig" });

export interface PrivateRegistryAccessConfig {
  /** Private registry access is enabled. */
  enabled?: boolean;
  /** Private registry access configuration. */
  certificateAuthorityDomainConfig?: ReadonlyArray<CertificateAuthorityDomainConfig>;
}

export const PrivateRegistryAccessConfig: Schema.Schema<PrivateRegistryAccessConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    certificateAuthorityDomainConfig: Schema.optional(
      Schema.Array(CertificateAuthorityDomainConfig),
    ),
  }).annotate({ identifier: "PrivateRegistryAccessConfig" });

export interface RegistryHeader {
  /** Key configures the header key. */
  key?: string;
  /** Value configures the header value. */
  value?: ReadonlyArray<string>;
}

export const RegistryHeader: Schema.Schema<RegistryHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RegistryHeader" });

export interface CertificateConfig {
  /** The URI configures a secret from [Secret Manager](https://cloud.google.com/secret-manager) in the format "projects/$PROJECT_ID/secrets/$SECRET_NAME/versions/$VERSION" for global secret or "projects/$PROJECT_ID/locations/$REGION/secrets/$SECRET_NAME/versions/$VERSION" for regional secret. Version can be fixed (e.g. "2") or "latest" */
  gcpSecretManagerSecretUri?: string;
}

export const CertificateConfig: Schema.Schema<CertificateConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcpSecretManagerSecretUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "CertificateConfig" });

export interface CertificateConfigPair {
  /** Cert configures the client certificate. */
  cert?: CertificateConfig;
  /** Key configures the client private key. Optional. */
  key?: CertificateConfig;
}

export const CertificateConfigPair: Schema.Schema<CertificateConfigPair> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cert: Schema.optional(CertificateConfig),
    key: Schema.optional(CertificateConfig),
  }).annotate({ identifier: "CertificateConfigPair" });

export interface HostConfig {
  /** Capabilities represent the capabilities of the registry host, specifying what operations a host is capable of performing. If not set, containerd enables all capabilities by default. */
  capabilities?: ReadonlyArray<
    | "HOST_CAPABILITY_UNSPECIFIED"
    | "HOST_CAPABILITY_PULL"
    | "HOST_CAPABILITY_RESOLVE"
    | "HOST_CAPABILITY_PUSH"
    | (string & {})
  >;
  /** Header configures the registry host headers. */
  header?: ReadonlyArray<RegistryHeader>;
  /** CA configures the registry host certificate. */
  ca?: ReadonlyArray<CertificateConfig>;
  /** Client configures the registry host client certificate and key. */
  client?: ReadonlyArray<CertificateConfigPair>;
  /** OverridePath is used to indicate the host's API root endpoint is defined in the URL path rather than by the API specification. This may be used with non-compliant OCI registries which are missing the /v2 prefix. If not set, containerd sets default false. */
  overridePath?: boolean;
  /** Host configures the registry host/mirror. It supports fully qualified domain names (FQDNs) and IP addresses. Specifying scheme, port or path is supported. Scheme can only be http or https. Wildcards are NOT supported. Examples: - `my.customdomain.com` - `https://my.customdomain.com/path` - `10.0.1.2:5000` */
  host?: string;
  /** Specifies the maximum duration allowed for a connection attempt to complete. A shorter timeout helps reduce delays when falling back to the original registry if the mirror is unreachable. Maximum allowed value is 180s. If not set, containerd sets default 30s. The value should be a decimal number of seconds with an `s` suffix. */
  dialTimeout?: string;
}

export const HostConfig: Schema.Schema<HostConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    capabilities: Schema.optional(Schema.Array(Schema.String)),
    header: Schema.optional(Schema.Array(RegistryHeader)),
    ca: Schema.optional(Schema.Array(CertificateConfig)),
    client: Schema.optional(Schema.Array(CertificateConfigPair)),
    overridePath: Schema.optional(Schema.Boolean),
    host: Schema.optional(Schema.String),
    dialTimeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "HostConfig" });

export interface RegistryHostConfig {
  /** Defines the host name of the registry server, which will be used to create configuration file as /etc/containerd/hosts.d//hosts.toml. It supports fully qualified domain names (FQDN) and IP addresses: Specifying port is supported, while scheme and path are NOT supported. Wildcards are NOT supported. Examples: - `my.customdomain.com` - `10.0.1.2:5000` */
  server?: string;
  /** HostConfig configures a list of host-specific configurations for the server. Each server can have at most 10 host configurations. */
  hosts?: ReadonlyArray<HostConfig>;
}

export const RegistryHostConfig: Schema.Schema<RegistryHostConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    server: Schema.optional(Schema.String),
    hosts: Schema.optional(Schema.Array(HostConfig)),
  }).annotate({ identifier: "RegistryHostConfig" });

export interface ContainerdConfig {
  /** Optional. WritableCgroups defines writable cgroups configuration for the node pool. */
  writableCgroups?: WritableCgroups;
  /** PrivateRegistryAccessConfig is used to configure access configuration for private container registries. */
  privateRegistryAccessConfig?: PrivateRegistryAccessConfig;
  /** RegistryHostConfig configures containerd registry host configuration. Each registry_hosts represents a hosts.toml file. At most 25 registry_hosts are allowed. */
  registryHosts?: ReadonlyArray<RegistryHostConfig>;
}

export const ContainerdConfig: Schema.Schema<ContainerdConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    writableCgroups: Schema.optional(WritableCgroups),
    privateRegistryAccessConfig: Schema.optional(PrivateRegistryAccessConfig),
    registryHosts: Schema.optional(Schema.Array(RegistryHostConfig)),
  }).annotate({ identifier: "ContainerdConfig" });

export interface NodeLabels {
  /** Map of node label keys and node label values. */
  labels?: Record<string, string>;
}

export const NodeLabels: Schema.Schema<NodeLabels> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "NodeLabels" });

export interface NodeDrainConfig {
  /** Whether to respect PDB during node pool deletion. */
  respectPdbDuringNodePoolDeletion?: boolean;
}

export const NodeDrainConfig: Schema.Schema<NodeDrainConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    respectPdbDuringNodePoolDeletion: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "NodeDrainConfig" });

export interface ResourceManagerTags {
  /** Tags must be in one of the following formats ([KEY]=[VALUE]) 1. `tagKeys/{tag_key_id}=tagValues/{tag_value_id}` 2. `{org_id}/{tag_key_name}={tag_value_name}` 3. `{project_id}/{tag_key_name}={tag_value_name}` */
  tags?: Record<string, string>;
}

export const ResourceManagerTags: Schema.Schema<ResourceManagerTags> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ResourceManagerTags" });

export interface TaintConfig {
  /** Optional. Controls architecture tainting behavior. */
  architectureTaintBehavior?:
    | "ARCHITECTURE_TAINT_BEHAVIOR_UNSPECIFIED"
    | "NONE"
    | "ARM"
    | (string & {});
}

export const TaintConfig: Schema.Schema<TaintConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    architectureTaintBehavior: Schema.optional(Schema.String),
  }).annotate({ identifier: "TaintConfig" });

export interface WindowsNodeConfig {
  /** OSVersion specifies the Windows node config to be used on the node. */
  osVersion?:
    | "OS_VERSION_UNSPECIFIED"
    | "OS_VERSION_LTSC2019"
    | "OS_VERSION_LTSC2022"
    | (string & {});
}

export const WindowsNodeConfig: Schema.Schema<WindowsNodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "WindowsNodeConfig" });

export interface NodeTaint {
  /** Value for taint. */
  value?: string;
  /** Effect for taint. */
  effect?:
    | "EFFECT_UNSPECIFIED"
    | "NO_SCHEDULE"
    | "PREFER_NO_SCHEDULE"
    | "NO_EXECUTE"
    | (string & {});
  /** Key for taint. */
  key?: string;
}

export const NodeTaint: Schema.Schema<NodeTaint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    effect: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodeTaint" });

export interface NodeTaints {
  /** List of node taints. */
  taints?: ReadonlyArray<NodeTaint>;
}

export const NodeTaints: Schema.Schema<NodeTaints> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taints: Schema.optional(Schema.Array(NodeTaint)),
  }).annotate({ identifier: "NodeTaints" });

export interface InitScript {
  /** The generation of the init script stored in Gloud Storage. This is the required field to identify the version of the init script. User can get the genetaion from `gcloud storage objects describe gs://BUCKET_NAME/OBJECT_NAME --format="value(generation)"` or from the "Version history" tab of the object in the Cloud Console UI. */
  gcsGeneration?: string;
  /** The resource name of the secret manager secret hosting the init script. Both global and regional secrets are supported with format below: Global secret: projects/{project}/secrets/{secret}/versions/{version} Regional secret: projects/{project}/locations/{location}/secrets/{secret}/versions/{version} Example: projects/1234567890/secrets/script_1/versions/1. Accept version number only, not support version alias. User can't configure both gcp_secret_manager_secret_uri and gcs_uri. */
  gcpSecretManagerSecretUri?: string;
  /** Optional. The optional arguments line to be passed to the init script. */
  args?: ReadonlyArray<string>;
  /** The Cloud Storage URI for storing the init script. Format: gs://BUCKET_NAME/OBJECT_NAME The service account on the node pool must have read access to the object. User can't configure both gcs_uri and gcp_secret_manager_secret_uri. */
  gcsUri?: string;
}

export const InitScript: Schema.Schema<InitScript> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsGeneration: Schema.optional(Schema.String),
    gcpSecretManagerSecretUri: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    gcsUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "InitScript" });

export interface CustomNodeInit {
  /** Optional. The init script to be executed on the node. */
  initScript?: InitScript;
}

export const CustomNodeInit: Schema.Schema<CustomNodeInit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    initScript: Schema.optional(InitScript),
  }).annotate({ identifier: "CustomNodeInit" });

export interface EncryptionConfig {
  /** Optional. If true, swap space will not be encrypted. Defaults to false (encrypted). */
  disabled?: boolean;
}

export const EncryptionConfig: Schema.Schema<EncryptionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "EncryptionConfig" });

export interface EphemeralLocalSsdProfile {
  /** Specifies the size of the swap space as a percentage of the ephemeral local SSD capacity. */
  swapSizePercent?: number;
  /** Specifies the size of the swap space in gibibytes (GiB). */
  swapSizeGib?: string;
}

export const EphemeralLocalSsdProfile: Schema.Schema<EphemeralLocalSsdProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    swapSizePercent: Schema.optional(Schema.Number),
    swapSizeGib: Schema.optional(Schema.String),
  }).annotate({ identifier: "EphemeralLocalSsdProfile" });

export interface BootDiskProfile {
  /** Specifies the size of the swap space as a percentage of the boot disk size. */
  swapSizePercent?: number;
  /** Specifies the size of the swap space in gibibytes (GiB). */
  swapSizeGib?: string;
}

export const BootDiskProfile: Schema.Schema<BootDiskProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    swapSizePercent: Schema.optional(Schema.Number),
    swapSizeGib: Schema.optional(Schema.String),
  }).annotate({ identifier: "BootDiskProfile" });

export interface SwapConfig {
  /** Optional. If omitted, swap space is encrypted by default. */
  encryptionConfig?: EncryptionConfig;
  /** Swap on the local SSD shared with pod ephemeral storage. */
  ephemeralLocalSsdProfile?: EphemeralLocalSsdProfile;
  /** Provisions a new, separate local NVMe SSD exclusively for swap. */
  dedicatedLocalSsdProfile?: DedicatedLocalSsdProfile;
  /** Optional. Enables or disables swap for the node pool. */
  enabled?: boolean;
  /** Swap on the node's boot disk. */
  bootDiskProfile?: BootDiskProfile;
}

export const SwapConfig: Schema.Schema<SwapConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionConfig: Schema.optional(EncryptionConfig),
    ephemeralLocalSsdProfile: Schema.optional(EphemeralLocalSsdProfile),
    dedicatedLocalSsdProfile: Schema.optional(DedicatedLocalSsdProfile),
    enabled: Schema.optional(Schema.Boolean),
    bootDiskProfile: Schema.optional(BootDiskProfile),
  }).annotate({ identifier: "SwapConfig" });

export interface NodeKernelModuleLoading {
  /** Set the node module loading policy for nodes in the node pool. */
  policy?:
    | "POLICY_UNSPECIFIED"
    | "ENFORCE_SIGNED_MODULES"
    | "DO_NOT_ENFORCE_SIGNED_MODULES"
    | (string & {});
}

export const NodeKernelModuleLoading: Schema.Schema<NodeKernelModuleLoading> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodeKernelModuleLoading" });

export interface HugepagesConfig {
  /** Optional. Amount of 1G hugepages */
  hugepageSize1g?: number;
  /** Optional. Amount of 2M hugepages */
  hugepageSize2m?: number;
}

export const HugepagesConfig: Schema.Schema<HugepagesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hugepageSize1g: Schema.optional(Schema.Number),
    hugepageSize2m: Schema.optional(Schema.Number),
  }).annotate({ identifier: "HugepagesConfig" });

export interface AccurateTimeConfig {
  /** Enables enhanced time synchronization using PTP-KVM. */
  enablePtpKvmTimeSync?: boolean;
}

export const AccurateTimeConfig: Schema.Schema<AccurateTimeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enablePtpKvmTimeSync: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AccurateTimeConfig" });

export interface LinuxNodeConfig {
  /** Optional. Allow users to run arbitrary bash script or container on the node. */
  customNodeInit?: CustomNodeInit;
  /** Optional. Defines the transparent hugepage defrag configuration on the node. VM hugepage allocation can be managed by either limiting defragmentation for delayed allocation or skipping it entirely for immediate allocation only. See https://docs.kernel.org/admin-guide/mm/transhuge.html for more details. */
  transparentHugepageDefrag?:
    | "TRANSPARENT_HUGEPAGE_DEFRAG_UNSPECIFIED"
    | "TRANSPARENT_HUGEPAGE_DEFRAG_ALWAYS"
    | "TRANSPARENT_HUGEPAGE_DEFRAG_DEFER"
    | "TRANSPARENT_HUGEPAGE_DEFRAG_DEFER_WITH_MADVISE"
    | "TRANSPARENT_HUGEPAGE_DEFRAG_MADVISE"
    | "TRANSPARENT_HUGEPAGE_DEFRAG_NEVER"
    | (string & {});
  /** Optional. Transparent hugepage support for anonymous memory can be entirely disabled (mostly for debugging purposes) or only enabled inside MADV_HUGEPAGE regions (to avoid the risk of consuming more memory resources) or enabled system wide. See https://docs.kernel.org/admin-guide/mm/transhuge.html for more details. */
  transparentHugepageEnabled?:
    | "TRANSPARENT_HUGEPAGE_ENABLED_UNSPECIFIED"
    | "TRANSPARENT_HUGEPAGE_ENABLED_ALWAYS"
    | "TRANSPARENT_HUGEPAGE_ENABLED_MADVISE"
    | "TRANSPARENT_HUGEPAGE_ENABLED_NEVER"
    | (string & {});
  /** Optional. Enables and configures swap space on nodes. If omitted, swap is disabled. */
  swapConfig?: SwapConfig;
  /** Optional. Configuration for kernel module loading on nodes. When enabled, the node pool will be provisioned with a Container-Optimized OS image that enforces kernel module signature verification. */
  nodeKernelModuleLoading?: NodeKernelModuleLoading;
  /** Optional. Amounts for 2M and 1G hugepages */
  hugepages?: HugepagesConfig;
  /** Optional. The accurate time configuration for the node pool. */
  accurateTimeConfig?: AccurateTimeConfig;
  /** The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. The following parameters are supported. net.core.busy_poll net.core.busy_read net.core.netdev_max_backlog net.core.rmem_max net.core.rmem_default net.core.wmem_default net.core.wmem_max net.core.optmem_max net.core.somaxconn net.ipv4.tcp_rmem net.ipv4.tcp_wmem net.ipv4.tcp_tw_reuse net.ipv4.tcp_mtu_probing net.ipv4.tcp_max_orphans net.ipv4.tcp_max_tw_buckets net.ipv4.tcp_syn_retries net.ipv4.tcp_ecn net.ipv4.tcp_congestion_control net.netfilter.nf_conntrack_max net.netfilter.nf_conntrack_buckets net.netfilter.nf_conntrack_tcp_timeout_close_wait net.netfilter.nf_conntrack_tcp_timeout_time_wait net.netfilter.nf_conntrack_tcp_timeout_established net.netfilter.nf_conntrack_acct kernel.shmmni kernel.shmmax kernel.shmall kernel.perf_event_paranoid kernel.sched_rt_runtime_us kernel.softlockup_panic kernel.yama.ptrace_scope kernel.kptr_restrict kernel.dmesg_restrict kernel.sysrq fs.aio-max-nr fs.file-max fs.inotify.max_user_instances fs.inotify.max_user_watches fs.nr_open vm.dirty_background_ratio vm.dirty_background_bytes vm.dirty_expire_centisecs vm.dirty_ratio vm.dirty_bytes vm.dirty_writeback_centisecs vm.max_map_count vm.overcommit_memory vm.overcommit_ratio vm.vfs_cache_pressure vm.swappiness vm.watermark_scale_factor vm.min_free_kbytes */
  sysctls?: Record<string, string>;
  /** cgroup_mode specifies the cgroup mode to be used on the node. */
  cgroupMode?:
    | "CGROUP_MODE_UNSPECIFIED"
    | "CGROUP_MODE_V1"
    | "CGROUP_MODE_V2"
    | (string & {});
}

export const LinuxNodeConfig: Schema.Schema<LinuxNodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customNodeInit: Schema.optional(CustomNodeInit),
    transparentHugepageDefrag: Schema.optional(Schema.String),
    transparentHugepageEnabled: Schema.optional(Schema.String),
    swapConfig: Schema.optional(SwapConfig),
    nodeKernelModuleLoading: Schema.optional(NodeKernelModuleLoading),
    hugepages: Schema.optional(HugepagesConfig),
    accurateTimeConfig: Schema.optional(AccurateTimeConfig),
    sysctls: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    cgroupMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "LinuxNodeConfig" });

export interface StandardRolloutPolicy {
  /** Number of blue nodes to drain in a batch. */
  batchNodeCount?: number;
  /** Soak time after each batch gets drained. Default to zero. */
  batchSoakDuration?: string;
  /** Percentage of the blue pool nodes to drain in a batch. The range of this field should be (0.0, 1.0]. */
  batchPercentage?: number;
}

export const StandardRolloutPolicy: Schema.Schema<StandardRolloutPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batchNodeCount: Schema.optional(Schema.Number),
    batchSoakDuration: Schema.optional(Schema.String),
    batchPercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "StandardRolloutPolicy" });

export interface AutoscaledRolloutPolicy {
  /** Optional. Time to wait after cordoning the blue pool before draining the nodes. Defaults to 3 days. The value can be set between 0 and 7 days, inclusive. */
  waitForDrainDuration?: string;
}

export const AutoscaledRolloutPolicy: Schema.Schema<AutoscaledRolloutPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    waitForDrainDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutoscaledRolloutPolicy" });

export interface BlueGreenSettings {
  /** Time needed after draining entire blue pool. After this period, blue pool will be cleaned up. */
  nodePoolSoakDuration?: string;
  /** Standard policy for the blue-green upgrade. */
  standardRolloutPolicy?: StandardRolloutPolicy;
  /** Autoscaled policy for cluster autoscaler enabled blue-green upgrade. */
  autoscaledRolloutPolicy?: AutoscaledRolloutPolicy;
}

export const BlueGreenSettings: Schema.Schema<BlueGreenSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePoolSoakDuration: Schema.optional(Schema.String),
    standardRolloutPolicy: Schema.optional(StandardRolloutPolicy),
    autoscaledRolloutPolicy: Schema.optional(AutoscaledRolloutPolicy),
  }).annotate({ identifier: "BlueGreenSettings" });

export interface UpgradeSettings {
  /** The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. */
  maxSurge?: number;
  /** Settings for blue-green upgrade strategy. */
  blueGreenSettings?: BlueGreenSettings;
  /** The maximum number of nodes that can be simultaneously unavailable during the upgrade process. A node is considered available if its status is Ready. */
  maxUnavailable?: number;
  /** Update strategy of the node pool. */
  strategy?:
    | "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
    | "BLUE_GREEN"
    | "SURGE"
    | "SHORT_LIVED"
    | (string & {});
}

export const UpgradeSettings: Schema.Schema<UpgradeSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxSurge: Schema.optional(Schema.Number),
    blueGreenSettings: Schema.optional(BlueGreenSettings),
    maxUnavailable: Schema.optional(Schema.Number),
    strategy: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeSettings" });

export interface NetworkTags {
  /** List of network tags. */
  tags?: ReadonlyArray<string>;
}

export const NetworkTags: Schema.Schema<NetworkTags> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "NetworkTags" });

export interface ConfidentialNodes {
  /** Whether Confidential Nodes feature is enabled. */
  enabled?: boolean;
  /** Defines the type of technology used by the confidential node. */
  confidentialInstanceType?:
    | "CONFIDENTIAL_INSTANCE_TYPE_UNSPECIFIED"
    | "SEV"
    | "SEV_SNP"
    | "TDX"
    | (string & {});
}

export const ConfidentialNodes: Schema.Schema<ConfidentialNodes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    confidentialInstanceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfidentialNodes" });

export interface VirtualNIC {
  /** Whether gVNIC features are enabled in the node pool. */
  enabled?: boolean;
}

export const VirtualNIC: Schema.Schema<VirtualNIC> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VirtualNIC" });

export interface NetworkTierConfig {
  /** Network tier configuration. */
  networkTier?:
    | "NETWORK_TIER_UNSPECIFIED"
    | "NETWORK_TIER_DEFAULT"
    | "NETWORK_TIER_PREMIUM"
    | "NETWORK_TIER_STANDARD"
    | (string & {});
}

export const NetworkTierConfig: Schema.Schema<NetworkTierConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkTier: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkTierConfig" });

export interface NetworkPerformanceConfig {
  /** Specifies the total network bandwidth tier for the NodePool. */
  totalEgressBandwidthTier?: "TIER_UNSPECIFIED" | "TIER_1" | (string & {});
  /** Specifies the network bandwidth tier for the NodePool for traffic to external/public IP addresses. */
  externalIpEgressBandwidthTier?: "TIER_UNSPECIFIED" | "TIER_1" | (string & {});
}

export const NetworkPerformanceConfig: Schema.Schema<NetworkPerformanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalEgressBandwidthTier: Schema.optional(Schema.String),
    externalIpEgressBandwidthTier: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkPerformanceConfig" });

export interface PodCIDROverprovisionConfig {
  /** Whether Pod CIDR overprovisioning is disabled. Note: Pod CIDR overprovisioning is enabled by default. */
  disable?: boolean;
}

export const PodCIDROverprovisionConfig: Schema.Schema<PodCIDROverprovisionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PodCIDROverprovisionConfig" });

export interface AdditionalNodeNetworkConfig {
  /** Name of the VPC where the additional interface belongs */
  network?: string;
  /** Name of the subnetwork where the additional interface belongs */
  subnetwork?: string;
}

export const AdditionalNodeNetworkConfig: Schema.Schema<AdditionalNodeNetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdditionalNodeNetworkConfig" });

export interface MaxPodsConstraint {
  /** Constraint enforced on the max num of pods per node. */
  maxPodsPerNode?: string;
}

export const MaxPodsConstraint: Schema.Schema<MaxPodsConstraint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxPodsPerNode: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaxPodsConstraint" });

export interface AdditionalPodNetworkConfig {
  /** The maximum number of pods per node which use this pod network. */
  maxPodsPerNode?: MaxPodsConstraint;
  /** The name of the network attachment for pods to communicate to; cannot be specified along with subnetwork or secondary_pod_range. */
  networkAttachment?: string;
  /** Name of the subnetwork where the additional pod network belongs. */
  subnetwork?: string;
  /** The name of the secondary range on the subnet which provides IP address for this pod range. */
  secondaryPodRange?: string;
}

export const AdditionalPodNetworkConfig: Schema.Schema<AdditionalPodNetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxPodsPerNode: Schema.optional(MaxPodsConstraint),
    networkAttachment: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    secondaryPodRange: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdditionalPodNetworkConfig" });

export interface NodeNetworkConfig {
  /** Input only. Whether to create a new range for pod IPs in this node pool. Defaults are provided for `pod_range` and `pod_ipv4_cidr_block` if they are not specified. If neither `create_pod_range` or `pod_range` are specified, the cluster-level default (`ip_allocation_policy.cluster_ipv4_cidr_block`) is used. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created. */
  createPodRange?: boolean;
  /** The IP address range for pod IPs in this node pool. Only applicable if `create_pod_range` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) to pick a specific range to use. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created. */
  podIpv4CidrBlock?: string;
  /** Whether nodes have internal IP addresses only. If enable_private_nodes is not specified, then the value is derived from Cluster.NetworkConfig.default_enable_private_nodes */
  enablePrivateNodes?: boolean;
  /** Immutable. The accelerator network profile for the node pool. For now the only valid value is "auto". If specified, the network configuration of the nodes in this node pool will be managed by this profile for the supported machine types, zone, etc. */
  acceleratorNetworkProfile?: string;
  /** Output only. The network tier configuration for the node pool inherits from the cluster-level configuration and remains immutable throughout the node pool's lifecycle, including during upgrades. */
  networkTierConfig?: NetworkTierConfig;
  /** Network bandwidth tier configuration. */
  networkPerformanceConfig?: NetworkPerformanceConfig;
  /** [PRIVATE FIELD] Pod CIDR size overprovisioning config for the node pool. Pod CIDR size per node depends on max_pods_per_node. By default, the value of max_pods_per_node is rounded off to next power of 2 and we then double that to get the size of pod CIDR block per node. Example: max_pods_per_node of 30 would result in 64 IPs (/26). This config can disable the doubling of IPs (we still round off to next power of 2) Example: max_pods_per_node of 30 will result in 32 IPs (/27) when overprovisioning is disabled. */
  podCidrOverprovisionConfig?: PodCIDROverprovisionConfig;
  /** We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface */
  additionalNodeNetworkConfigs?: ReadonlyArray<AdditionalNodeNetworkConfig>;
  /** We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node */
  additionalPodNetworkConfigs?: ReadonlyArray<AdditionalPodNetworkConfig>;
  /** The ID of the secondary range for pod IPs. If `create_pod_range` is true, this ID is used for the new range. If `create_pod_range` is false, uses an existing secondary range with this ID. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created. */
  podRange?: string;
  /** Output only. The utilization of the IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage=numNodes*numZones*podIPsPerNode. */
  podIpv4RangeUtilization?: number;
  /** Optional. The subnetwork name/path for the node pool. Format: projects/{project}/regions/{region}/subnetworks/{subnetwork} If the cluster is associated with multiple subnetworks, the subnetwork can be either: - A user supplied subnetwork name during node pool creation (e.g., `my-subnet`). The name must be between 1 and 63 characters long, start with a letter, contain only letters, numbers, and hyphens, and end with a letter or a number. - A full subnetwork path during node pool creation, such as `projects/gke-project/regions/us-central1/subnetworks/my-subnet` - A subnetwork path picked based on the IP utilization during node pool creation and is immutable. */
  subnetwork?: string;
}

export const NodeNetworkConfig: Schema.Schema<NodeNetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createPodRange: Schema.optional(Schema.Boolean),
    podIpv4CidrBlock: Schema.optional(Schema.String),
    enablePrivateNodes: Schema.optional(Schema.Boolean),
    acceleratorNetworkProfile: Schema.optional(Schema.String),
    networkTierConfig: Schema.optional(NetworkTierConfig),
    networkPerformanceConfig: Schema.optional(NetworkPerformanceConfig),
    podCidrOverprovisionConfig: Schema.optional(PodCIDROverprovisionConfig),
    additionalNodeNetworkConfigs: Schema.optional(
      Schema.Array(AdditionalNodeNetworkConfig),
    ),
    additionalPodNetworkConfigs: Schema.optional(
      Schema.Array(AdditionalPodNetworkConfig),
    ),
    podRange: Schema.optional(Schema.String),
    podIpv4RangeUtilization: Schema.optional(Schema.Number),
    subnetwork: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodeNetworkConfig" });

export interface WorkloadMetadataConfig {
  /** Mode is the configuration for how to expose metadata to workloads running on the node pool. */
  mode?: "MODE_UNSPECIFIED" | "GCE_METADATA" | "GKE_METADATA" | (string & {});
  /** NodeMetadata is the configuration for how to expose metadata to the workloads running on the node. */
  nodeMetadata?:
    | "UNSPECIFIED"
    | "SECURE"
    | "EXPOSE"
    | "GKE_METADATA_SERVER"
    | (string & {});
}

export const WorkloadMetadataConfig: Schema.Schema<WorkloadMetadataConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
    nodeMetadata: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkloadMetadataConfig" });

export interface EvictionGracePeriod {
  /** Optional. Grace period for eviction due to imagefs available signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  imagefsAvailable?: string;
  /** Optional. Grace period for eviction due to imagefs inodes free signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  imagefsInodesFree?: string;
  /** Optional. Grace period for eviction due to pid available signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  pidAvailable?: string;
  /** Optional. Grace period for eviction due to nodefs available signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  nodefsAvailable?: string;
  /** Optional. Grace period for eviction due to nodefs inodes free signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  nodefsInodesFree?: string;
  /** Optional. Grace period for eviction due to memory available signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  memoryAvailable?: string;
}

export const EvictionGracePeriod: Schema.Schema<EvictionGracePeriod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imagefsAvailable: Schema.optional(Schema.String),
    imagefsInodesFree: Schema.optional(Schema.String),
    pidAvailable: Schema.optional(Schema.String),
    nodefsAvailable: Schema.optional(Schema.String),
    nodefsInodesFree: Schema.optional(Schema.String),
    memoryAvailable: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvictionGracePeriod" });

export interface EvictionMinimumReclaim {
  /** Optional. Minimum reclaim for eviction due to nodefs available signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  nodefsAvailable?: string;
  /** Optional. Minimum reclaim for eviction due to imagefs available signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  imagefsAvailable?: string;
  /** Optional. Minimum reclaim for eviction due to imagefs inodes free signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  imagefsInodesFree?: string;
  /** Optional. Minimum reclaim for eviction due to pid available signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  pidAvailable?: string;
  /** Optional. Minimum reclaim for eviction due to memory available signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  memoryAvailable?: string;
  /** Optional. Minimum reclaim for eviction due to nodefs inodes free signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  nodefsInodesFree?: string;
}

export const EvictionMinimumReclaim: Schema.Schema<EvictionMinimumReclaim> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodefsAvailable: Schema.optional(Schema.String),
    imagefsAvailable: Schema.optional(Schema.String),
    imagefsInodesFree: Schema.optional(Schema.String),
    pidAvailable: Schema.optional(Schema.String),
    memoryAvailable: Schema.optional(Schema.String),
    nodefsInodesFree: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvictionMinimumReclaim" });

export interface EvictionSignals {
  /** Optional. Amount of inodes available on filesystem that kubelet uses for volumes, daemon logs, etc. Defines the amount of "nodefs.inodesFree" signal in kubelet. Default is unset, if not specified in the kubelet config. Linux only. It takses percentage value for now. Sample format: "30%". Must be >= 5% and <= 50%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  nodefsInodesFree?: string;
  /** Optional. Memory available (i.e. capacity - workingSet), in bytes. Defines the amount of "memory.available" signal in kubelet. Default is unset, if not specified in the kubelet config. Format: positive number + unit, e.g. 100Ki, 10Mi, 5Gi. Valid units are Ki, Mi, Gi. Must be >= 100Mi and <= 50% of the node's memory. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  memoryAvailable?: string;
  /** Optional. Amount of storage available on filesystem that container runtime uses for storing images layers. If the container filesystem and image filesystem are not separate, then imagefs can store both image layers and writeable layers. Defines the amount of "imagefs.available" signal in kubelet. Default is unset, if not specified in the kubelet config. Sample format: "30%". Must be >= 15%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  imagefsAvailable?: string;
  /** Optional. Amount of inodes available on filesystem that container runtime uses for storing images layers. Defines the amount of "imagefs.inodesFree" signal in kubelet. Default is unset, if not specified in the kubelet config. Linux only. Sample format: "30%". Must be >= 5%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  imagefsInodesFree?: string;
  /** Optional. Amount of PID available for pod allocation. Defines the amount of "pid.available" signal in kubelet. Default is unset, if not specified in the kubelet config. Sample format: "30%". Must be >= 10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  pidAvailable?: string;
  /** Optional. Amount of storage available on filesystem that kubelet uses for volumes, daemon logs, etc. Defines the amount of "nodefs.available" signal in kubelet. Default is unset, if not specified in the kubelet config. Sample format: "30%". Must be >= 10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  nodefsAvailable?: string;
}

export const EvictionSignals: Schema.Schema<EvictionSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodefsInodesFree: Schema.optional(Schema.String),
    memoryAvailable: Schema.optional(Schema.String),
    imagefsAvailable: Schema.optional(Schema.String),
    imagefsInodesFree: Schema.optional(Schema.String),
    pidAvailable: Schema.optional(Schema.String),
    nodefsAvailable: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvictionSignals" });

export interface TopologyManager {
  /** The Topology Manager aligns resources in following scopes: * container * pod The default scope is 'container' if unspecified. See https://kubernetes.io/docs/tasks/administer-cluster/topology-manager/#topology-manager-scopes */
  scope?: string;
  /** Configures the strategy for resource alignment. Allowed values are: * none: the default policy, and does not perform any topology alignment. * restricted: the topology manager stores the preferred NUMA node affinity for the container, and will reject the pod if the affinity if not preferred. * best-effort: the topology manager stores the preferred NUMA node affinity for the container. If the affinity is not preferred, the topology manager will admit the pod to the node anyway. * single-numa-node: the topology manager determines if the single NUMA node affinity is possible. If it is, Topology Manager will store this and the Hint Providers can then use this information when making the resource allocation decision. If, however, this is not possible then the Topology Manager will reject the pod from the node. This will result in a pod in a Terminated state with a pod admission failure. The default policy value is 'none' if unspecified. Details about each strategy can be found [here](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager/#topology-manager-policies). */
  policy?: string;
}

export const TopologyManager: Schema.Schema<TopologyManager> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
  }).annotate({ identifier: "TopologyManager" });

export interface MemoryManager {
  /** Controls the memory management policy on the Node. See https://kubernetes.io/docs/tasks/administer-cluster/memory-manager/#policies The following values are allowed. * "none" * "static" The default value is 'none' if unspecified. */
  policy?: string;
}

export const MemoryManager: Schema.Schema<MemoryManager> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Schema.String),
  }).annotate({ identifier: "MemoryManager" });

export interface CrashLoopBackOffConfig {
  /** Optional. The maximum duration the backoff delay can accrue to for container restarts, minimum 1 second, maximum 300 seconds. If not set, defaults to the internal crashloopbackoff maximum. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". See https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#configurable-container-restart-delay for more details. */
  maxContainerRestartPeriod?: string;
}

export const CrashLoopBackOffConfig: Schema.Schema<CrashLoopBackOffConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxContainerRestartPeriod: Schema.optional(Schema.String),
  }).annotate({ identifier: "CrashLoopBackOffConfig" });

export interface NodeKubeletConfig {
  /** Control the CPU management policy on the node. See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. * "none": the default, which represents the existing scheduling behavior. * "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node. The default value is 'none' if unspecified. */
  cpuManagerPolicy?: string;
  /** Optional. eviction_soft_grace_period is a map of signal names to quantities that defines grace periods for each soft eviction signal. The grace period is the amount of time that a pod must be under pressure before an eviction occurs. */
  evictionSoftGracePeriod?: EvictionGracePeriod;
  /** Set the Pod PID limits. See https://kubernetes.io/docs/concepts/policy/pid-limiting/#pod-pid-limits Controls the maximum number of processes allowed to run in a pod. The value must be greater than or equal to 1024 and less than 4194304. */
  podPidsLimit?: string;
  /** Optional. Defines the maximum number of image pulls in parallel. The range is 2 to 5, inclusive. The default value is 2 or 3 depending on the disk type. See https://kubernetes.io/docs/concepts/containers/images/#maximum-parallel-image-pulls for more details. */
  maxParallelImagePulls?: number;
  /** Optional. shutdown_grace_period_seconds is the maximum allowed grace period (in seconds) the total duration that the node should delay the shutdown during a graceful shutdown. This is the total grace period for pod termination for both regular and critical pods. https://kubernetes.io/docs/concepts/cluster-administration/node-shutdown/ If set to 0, node will not enable the graceful node shutdown functionality. This field is only valid for Spot VMs. Allowed values: 0, 30, 120. */
  shutdownGracePeriodSeconds?: number;
  /** Optional. shutdown_grace_period_critical_pods_seconds is the maximum allowed grace period (in seconds) used to terminate critical pods during a node shutdown. This value should be <= shutdown_grace_period_seconds, and is only valid if shutdown_grace_period_seconds is set. https://kubernetes.io/docs/concepts/cluster-administration/node-shutdown/ Range: [0, 120]. */
  shutdownGracePeriodCriticalPodsSeconds?: number;
  /** Enable CPU CFS quota enforcement for containers that specify CPU limits. This option is enabled by default which makes kubelet use CFS quota (https://www.kernel.org/doc/Documentation/scheduler/sched-bwc.txt) to enforce container CPU limits. Otherwise, CPU limits will not be enforced at all. Disable this option to mitigate CPU throttling problems while still having your pods to be in Guaranteed QoS class by specifying the CPU limits. The default value is 'true' if unspecified. */
  cpuCfsQuota?: boolean;
  /** Set the CPU CFS quota period value 'cpu.cfs_period_us'. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The value must be a positive duration between 1ms and 1 second, inclusive. */
  cpuCfsQuotaPeriod?: string;
  /** Optional. Defines whether to enable single process OOM killer. If true, will prevent the memory.oom.group flag from being set for container cgroups in cgroups v2. This causes processes in the container to be OOM killed individually instead of as a group. */
  singleProcessOomKill?: boolean;
  /** Optional. Defines the maximum age an image can be unused before it is garbage collected. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300s", "1.5h", and "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The value must be a positive duration greater than image_minimum_gc_age or "0s". The default value is "0s" if unspecified, which disables this field, meaning images won't be garbage collected based on being unused for too long. */
  imageMaximumGcAge?: string;
  /** Optional. Defines the percent of disk usage after which image garbage collection is always run. The percent is calculated as this field value out of 100. The value must be between 10 and 85, inclusive and greater than image_gc_low_threshold_percent. The default value is 85 if unspecified. */
  imageGcHighThresholdPercent?: number;
  /** Optional. Defines the minimum age for an unused image before it is garbage collected. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300s", "1.5h", and "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The value must be a positive duration less than or equal to 2 minutes. The default value is "2m0s" if unspecified. */
  imageMinimumGcAge?: string;
  /** Optional. eviction_minimum_reclaim is a map of signal names to quantities that defines minimum reclaims, which describe the minimum amount of a given resource the kubelet will reclaim when performing a pod eviction while that resource is under pressure. */
  evictionMinimumReclaim?: EvictionMinimumReclaim;
  /** Optional. Defines the percent of disk usage before which image garbage collection is never run. Lowest disk usage to garbage collect to. The percent is calculated as this field value out of 100. The value must be between 10 and 85, inclusive and smaller than image_gc_high_threshold_percent. The default value is 80 if unspecified. */
  imageGcLowThresholdPercent?: number;
  /** Optional. eviction_soft is a map of signal names to quantities that defines soft eviction thresholds. Each signal is compared to its corresponding threshold to determine if a pod eviction should occur. */
  evictionSoft?: EvictionSignals;
  /** Optional. Controls Topology Manager configuration on the node. For more information, see: https://kubernetes.io/docs/tasks/administer-cluster/topology-manager/ */
  topologyManager?: TopologyManager;
  /** Optional. eviction_max_pod_grace_period_seconds is the maximum allowed grace period (in seconds) to use when terminating pods in response to a soft eviction threshold being met. This value effectively caps the Pod's terminationGracePeriodSeconds value during soft evictions. Default: 0. Range: [0, 300]. */
  evictionMaxPodGracePeriodSeconds?: number;
  /** Optional. Controls NUMA-aware Memory Manager configuration on the node. For more information, see: https://kubernetes.io/docs/tasks/administer-cluster/memory-manager/ */
  memoryManager?: MemoryManager;
  /** Optional. Defines a comma-separated allowlist of unsafe sysctls or sysctl patterns (ending in `*`). The unsafe namespaced sysctl groups are `kernel.shm*`, `kernel.msg*`, `kernel.sem`, `fs.mqueue.*`, and `net.*`. Leaving this allowlist empty means they cannot be set on Pods. To allow certain sysctls or sysctl patterns to be set on Pods, list them separated by commas. For example: `kernel.msg*,net.ipv4.route.min_pmtu`. See https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/ for more details. */
  allowedUnsafeSysctls?: ReadonlyArray<string>;
  /** Optional. Defines the maximum size of the container log file before it is rotated. See https://kubernetes.io/docs/concepts/cluster-administration/logging/#log-rotation Valid format is positive number + unit, e.g. 100Ki, 10Mi. Valid units are Ki, Mi, Gi. The value must be between 10Mi and 500Mi, inclusive. Note that the total container log size (container_log_max_size * container_log_max_files) cannot exceed 1% of the total storage of the node, to avoid disk pressure caused by log files. The default value is 10Mi if unspecified. */
  containerLogMaxSize?: string;
  /** Optional. Contains configuration options to modify node-level parameters for container restart behavior. */
  crashLoopBackOff?: CrashLoopBackOffConfig;
  /** Enable or disable Kubelet read only port. */
  insecureKubeletReadonlyPortEnabled?: boolean;
  /** Optional. Defines the maximum number of container log files that can be present for a container. See https://kubernetes.io/docs/concepts/cluster-administration/logging/#log-rotation The value must be an integer between 2 and 10, inclusive. The default value is 5 if unspecified. */
  containerLogMaxFiles?: number;
}

export const NodeKubeletConfig: Schema.Schema<NodeKubeletConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpuManagerPolicy: Schema.optional(Schema.String),
    evictionSoftGracePeriod: Schema.optional(EvictionGracePeriod),
    podPidsLimit: Schema.optional(Schema.String),
    maxParallelImagePulls: Schema.optional(Schema.Number),
    shutdownGracePeriodSeconds: Schema.optional(Schema.Number),
    shutdownGracePeriodCriticalPodsSeconds: Schema.optional(Schema.Number),
    cpuCfsQuota: Schema.optional(Schema.Boolean),
    cpuCfsQuotaPeriod: Schema.optional(Schema.String),
    singleProcessOomKill: Schema.optional(Schema.Boolean),
    imageMaximumGcAge: Schema.optional(Schema.String),
    imageGcHighThresholdPercent: Schema.optional(Schema.Number),
    imageMinimumGcAge: Schema.optional(Schema.String),
    evictionMinimumReclaim: Schema.optional(EvictionMinimumReclaim),
    imageGcLowThresholdPercent: Schema.optional(Schema.Number),
    evictionSoft: Schema.optional(EvictionSignals),
    topologyManager: Schema.optional(TopologyManager),
    evictionMaxPodGracePeriodSeconds: Schema.optional(Schema.Number),
    memoryManager: Schema.optional(MemoryManager),
    allowedUnsafeSysctls: Schema.optional(Schema.Array(Schema.String)),
    containerLogMaxSize: Schema.optional(Schema.String),
    crashLoopBackOff: Schema.optional(CrashLoopBackOffConfig),
    insecureKubeletReadonlyPortEnabled: Schema.optional(Schema.Boolean),
    containerLogMaxFiles: Schema.optional(Schema.Number),
  }).annotate({ identifier: "NodeKubeletConfig" });

export interface GPUDriverInstallationConfig {
  /** Mode for how the GPU driver is installed. */
  gpuDriverVersion?:
    | "GPU_DRIVER_VERSION_UNSPECIFIED"
    | "INSTALLATION_DISABLED"
    | "DEFAULT"
    | "LATEST"
    | (string & {});
}

export const GPUDriverInstallationConfig: Schema.Schema<GPUDriverInstallationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gpuDriverVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GPUDriverInstallationConfig" });

export interface GPUSharingConfig {
  /** The type of GPU sharing strategy to enable on the GPU node. */
  gpuSharingStrategy?:
    | "GPU_SHARING_STRATEGY_UNSPECIFIED"
    | "TIME_SHARING"
    | "MPS"
    | (string & {});
  /** The max number of containers that can share a physical GPU. */
  maxSharedClientsPerGpu?: string;
}

export const GPUSharingConfig: Schema.Schema<GPUSharingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gpuSharingStrategy: Schema.optional(Schema.String),
    maxSharedClientsPerGpu: Schema.optional(Schema.String),
  }).annotate({ identifier: "GPUSharingConfig" });

export interface AcceleratorConfig {
  /** The accelerator type resource name. List of supported accelerators [here](https://cloud.google.com/compute/docs/gpus) */
  acceleratorType?: string;
  /** The number of time-shared GPU resources to expose for each physical GPU. */
  maxTimeSharedClientsPerGpu?: string;
  /** The configuration for auto installation of GPU driver. */
  gpuDriverInstallationConfig?: GPUDriverInstallationConfig;
  /** Size of partitions to create on the GPU. Valid values are described in the NVIDIA [mig user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning). */
  gpuPartitionSize?: string;
  /** The number of the accelerator cards exposed to an instance. */
  acceleratorCount?: string;
  /** The configuration for GPU sharing options. */
  gpuSharingConfig?: GPUSharingConfig;
}

export const AcceleratorConfig: Schema.Schema<AcceleratorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acceleratorType: Schema.optional(Schema.String),
    maxTimeSharedClientsPerGpu: Schema.optional(Schema.String),
    gpuDriverInstallationConfig: Schema.optional(GPUDriverInstallationConfig),
    gpuPartitionSize: Schema.optional(Schema.String),
    acceleratorCount: Schema.optional(Schema.String),
    gpuSharingConfig: Schema.optional(GPUSharingConfig),
  }).annotate({ identifier: "AcceleratorConfig" });

export interface QueuedProvisioning {
  /** Denotes that this node pool is QRM specific, meaning nodes can be only obtained through queuing via the Cluster Autoscaler ProvisioningRequest API. */
  enabled?: boolean;
}

export const QueuedProvisioning: Schema.Schema<QueuedProvisioning> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "QueuedProvisioning" });

export interface BootDisk {
  /** Disk type of the boot disk. (i.e. Hyperdisk-Balanced, PD-Balanced, etc.) */
  diskType?: string;
  /** For Hyperdisk-Balanced only, the provisioned throughput config value. */
  provisionedThroughput?: string;
  /** For Hyperdisk-Balanced only, the provisioned IOPS config value. */
  provisionedIops?: string;
  /** Disk size in GB. Replaces NodeConfig.disk_size_gb */
  sizeGb?: string;
}

export const BootDisk: Schema.Schema<BootDisk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskType: Schema.optional(Schema.String),
    provisionedThroughput: Schema.optional(Schema.String),
    provisionedIops: Schema.optional(Schema.String),
    sizeGb: Schema.optional(Schema.String),
  }).annotate({ identifier: "BootDisk" });

export interface UpdateNodePoolRequest {
  /** Optional. The desired disk type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk type. */
  diskType?: string;
  /** Optional. The desired disk size for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk size. */
  diskSizeGb?: string;
  /** Enable or disable NCCL fast socket for the node pool. */
  fastSocket?: FastSocket;
  /** List of Storage Pools where boot disks are provisioned. Existing Storage Pools will be replaced with storage-pools. */
  storagePools?: ReadonlyArray<string>;
  /** GCFS config. */
  gcfsConfig?: GcfsConfig;
  /** The resource labels for the node pool to use to annotate any related Google Compute Engine resources. */
  resourceLabels?: ResourceLabels;
  /** The desired containerd config for nodes in the node pool. Initiates an upgrade operation that recreates the nodes with the new config. */
  containerdConfig?: ContainerdConfig;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The current etag of the node pool. If an etag is provided and does not match the current etag of the node pool, update will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** The desired node labels to be applied to all nodes in the node pool. If this field is not present, the labels will not be changed. Otherwise, the existing node labels will be *replaced* with the provided labels. */
  labels?: NodeLabels;
  /** The desired node drain configuration for nodes in the node pool. */
  nodeDrainConfig?: NodeDrainConfig;
  /** The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name?: string;
  /** Desired resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Existing tags will be replaced with new values. */
  resourceManagerTags?: ResourceManagerTags;
  /** The taint configuration for the node pool. */
  taintConfig?: TaintConfig;
  /** Parameters that can be configured on Windows nodes. */
  windowsNodeConfig?: WindowsNodeConfig;
  /** The desired node taints to be applied to all nodes in the node pool. If this field is not present, the taints will not be changed. Otherwise, the existing node taints will be *replaced* with the provided taints. */
  taints?: NodeTaints;
  /** Parameters that can be configured on Linux nodes. */
  linuxNodeConfig?: LinuxNodeConfig;
  /** Logging configuration. */
  loggingConfig?: NodePoolLoggingConfig;
  /** Consolidation delay defines duration after which the Cluster Autoscaler can scale down underutilized nodes. If not set, nodes are scaled down by default behavior, i.e. according to the chosen autoscaling profile. */
  consolidationDelay?: string;
  /** The maximum duration for the nodes to exist. If unspecified, the nodes can exist indefinitely. */
  maxRunDuration?: string;
  /** Upgrade settings control disruption and speed of the upgrade. */
  upgradeSettings?: UpgradeSettings;
  /** Required. The desired image type for the node pool. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types. */
  imageType?: string;
  /** The desired network tags to be applied to all nodes in the node pool. If this field is not present, the tags will not be changed. Otherwise, the existing network tags will be *replaced* with the provided tags. */
  tags?: NetworkTags;
  /** Confidential nodes config. All the nodes in the node pool will be Confidential VM once enabled. */
  confidentialNodes?: ConfidentialNodes;
  /** Enable or disable gvnic on the node pool. */
  gvnic?: VirtualNIC;
  /** Required. The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version */
  nodeVersion?: string;
  /** Node network config. */
  nodeNetworkConfig?: NodeNetworkConfig;
  /** Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. */
  nodePoolId?: string;
  /** The desired workload metadata config for the node pool. */
  workloadMetadataConfig?: WorkloadMetadataConfig;
  /** Node kubelet configs. */
  kubeletConfig?: NodeKubeletConfig;
  /** The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the node pool's nodes should be located. Changing the locations for a node pool will result in nodes being either created or removed from the node pool, depending on whether locations are being added or removed. Warning: It is recommended to update node pool locations in a standalone API call. Do not combine a location update with changes to other fields (such as `tags`, `labels`, `taints`, etc.) in the same request. Otherwise, the API performs a structural modification where changes to other fields will only apply to newly created nodes and will not be applied to existing nodes in the node pool. To ensure all nodes are updated consistently, use a separate API call for location changes. */
  locations?: ReadonlyArray<string>;
  /** Flex Start flag for enabling Flex Start VM. */
  flexStart?: boolean;
  /** A list of hardware accelerators to be attached to each node. See https://cloud.google.com/compute/docs/gpus for more information about support for GPUs. */
  accelerators?: ReadonlyArray<AcceleratorConfig>;
  /** Optional. The desired machine type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified machine type. */
  machineType?: string;
  /** Specifies the configuration of queued provisioning. */
  queuedProvisioning?: QueuedProvisioning;
  /** The desired boot disk config for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified boot disk config. */
  bootDisk?: BootDisk;
}

export const UpdateNodePoolRequest: Schema.Schema<UpdateNodePoolRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskType: Schema.optional(Schema.String),
    diskSizeGb: Schema.optional(Schema.String),
    fastSocket: Schema.optional(FastSocket),
    storagePools: Schema.optional(Schema.Array(Schema.String)),
    gcfsConfig: Schema.optional(GcfsConfig),
    resourceLabels: Schema.optional(ResourceLabels),
    containerdConfig: Schema.optional(ContainerdConfig),
    projectId: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    labels: Schema.optional(NodeLabels),
    nodeDrainConfig: Schema.optional(NodeDrainConfig),
    name: Schema.optional(Schema.String),
    resourceManagerTags: Schema.optional(ResourceManagerTags),
    taintConfig: Schema.optional(TaintConfig),
    windowsNodeConfig: Schema.optional(WindowsNodeConfig),
    taints: Schema.optional(NodeTaints),
    linuxNodeConfig: Schema.optional(LinuxNodeConfig),
    loggingConfig: Schema.optional(NodePoolLoggingConfig),
    consolidationDelay: Schema.optional(Schema.String),
    maxRunDuration: Schema.optional(Schema.String),
    upgradeSettings: Schema.optional(UpgradeSettings),
    imageType: Schema.optional(Schema.String),
    tags: Schema.optional(NetworkTags),
    confidentialNodes: Schema.optional(ConfidentialNodes),
    gvnic: Schema.optional(VirtualNIC),
    nodeVersion: Schema.optional(Schema.String),
    nodeNetworkConfig: Schema.optional(NodeNetworkConfig),
    nodePoolId: Schema.optional(Schema.String),
    workloadMetadataConfig: Schema.optional(WorkloadMetadataConfig),
    kubeletConfig: Schema.optional(NodeKubeletConfig),
    locations: Schema.optional(Schema.Array(Schema.String)),
    flexStart: Schema.optional(Schema.Boolean),
    accelerators: Schema.optional(Schema.Array(AcceleratorConfig)),
    machineType: Schema.optional(Schema.String),
    queuedProvisioning: Schema.optional(QueuedProvisioning),
    bootDisk: Schema.optional(BootDisk),
  }).annotate({ identifier: "UpdateNodePoolRequest" });

export interface SetLegacyAbacRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Required. Whether ABAC authorization will be enabled in the cluster. */
  enabled?: boolean;
}

export const SetLegacyAbacRequest: Schema.Schema<SetLegacyAbacRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SetLegacyAbacRequest" });

export interface NodePoolAutoConfig {
  /** NodeKubeletConfig controls the defaults for autoprovisioned node-pools. Currently only `insecure_kubelet_readonly_port_enabled` can be set here. */
  nodeKubeletConfig?: NodeKubeletConfig;
  /** Resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. */
  resourceManagerTags?: ResourceManagerTags;
  /** The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster creation. Each tag within the list must comply with RFC1035. */
  networkTags?: NetworkTags;
  /** Output only. Configuration options for Linux nodes. */
  linuxNodeConfig?: LinuxNodeConfig;
}

export const NodePoolAutoConfig: Schema.Schema<NodePoolAutoConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeKubeletConfig: Schema.optional(NodeKubeletConfig),
    resourceManagerTags: Schema.optional(ResourceManagerTags),
    networkTags: Schema.optional(NetworkTags),
    linuxNodeConfig: Schema.optional(LinuxNodeConfig),
  }).annotate({ identifier: "NodePoolAutoConfig" });

export interface NodeReadinessConfig {
  /** Optional. Whether the GKE Node Readiness Controller is enabled for this cluster. */
  enabled?: boolean;
}

export const NodeReadinessConfig: Schema.Schema<NodeReadinessConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "NodeReadinessConfig" });

export interface EphemeralStorageLocalSsdConfig {
  /** Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. */
  localSsdCount?: number;
  /** Number of local SSDs to use for GKE Data Cache. */
  dataCacheCount?: number;
}

export const EphemeralStorageLocalSsdConfig: Schema.Schema<EphemeralStorageLocalSsdConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localSsdCount: Schema.optional(Schema.Number),
    dataCacheCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EphemeralStorageLocalSsdConfig" });

export interface AnonymousAuthenticationConfig {
  /** Defines the mode of limiting anonymous access in the cluster. */
  mode?: "MODE_UNSPECIFIED" | "ENABLED" | "LIMITED" | (string & {});
}

export const AnonymousAuthenticationConfig: Schema.Schema<AnonymousAuthenticationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnonymousAuthenticationConfig" });

export interface Location {
  /** Contains the name of the resource requested. Specified in the format `projects/* /locations/*`. */
  name?: string;
  /** Whether the location is recommended for GKE cluster scheduling. */
  recommended?: boolean;
  /** Contains the type of location this Location is for. Regional or Zonal. */
  type?: "LOCATION_TYPE_UNSPECIFIED" | "ZONE" | "REGION" | (string & {});
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    recommended: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface BigQueryDestination {
  /** The ID of a BigQuery Dataset. */
  datasetId?: string;
}

export const BigQueryDestination: Schema.Schema<BigQueryDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasetId: Schema.optional(Schema.String),
  }).annotate({ identifier: "BigQueryDestination" });

export interface PrivateClusterMasterGlobalAccessConfig {
  /** Whenever master is accessible globally or not. */
  enabled?: boolean;
}

export const PrivateClusterMasterGlobalAccessConfig: Schema.Schema<PrivateClusterMasterGlobalAccessConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PrivateClusterMasterGlobalAccessConfig" });

export interface ILBSubsettingConfig {
  /** Enables l4 ILB subsetting for this cluster */
  enabled?: boolean;
}

export const ILBSubsettingConfig: Schema.Schema<ILBSubsettingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ILBSubsettingConfig" });

export interface PdbBlockedPod {
  /** The namespace of the pod. */
  namespace?: string;
  /** The name of the pod. */
  name?: string;
}

export const PdbBlockedPod: Schema.Schema<PdbBlockedPod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PdbBlockedPod" });

export interface GatewayAPIConfig {
  /** The Gateway API release channel to use for Gateway API. */
  channel?:
    | "CHANNEL_UNSPECIFIED"
    | "CHANNEL_DISABLED"
    | "CHANNEL_EXPERIMENTAL"
    | "CHANNEL_STANDARD"
    | (string & {});
}

export const GatewayAPIConfig: Schema.Schema<GatewayAPIConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel: Schema.optional(Schema.String),
  }).annotate({ identifier: "GatewayAPIConfig" });

export interface AutoUpgradeOptions {
  /** Output only. This field is set when upgrades are about to commence with the approximate start time for the upgrades, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  autoUpgradeStartTime?: string;
  /** Output only. This field is set when upgrades are about to commence with the description of the upgrade. */
  description?: string;
}

export const AutoUpgradeOptions: Schema.Schema<AutoUpgradeOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoUpgradeStartTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutoUpgradeOptions" });

export interface NodeManagement {
  /** Whether the nodes will be automatically upgraded. */
  autoUpgrade?: boolean;
  /** Whether the nodes will be automatically repaired. */
  autoRepair?: boolean;
  /** Specifies the Auto Upgrade knobs for the node pool. */
  upgradeOptions?: AutoUpgradeOptions;
}

export const NodeManagement: Schema.Schema<NodeManagement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoUpgrade: Schema.optional(Schema.Boolean),
    autoRepair: Schema.optional(Schema.Boolean),
    upgradeOptions: Schema.optional(AutoUpgradeOptions),
  }).annotate({ identifier: "NodeManagement" });

export interface ShieldedInstanceConfig {
  /** Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. */
  enableSecureBoot?: boolean;
  /** Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. */
  enableIntegrityMonitoring?: boolean;
}

export const ShieldedInstanceConfig: Schema.Schema<ShieldedInstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableSecureBoot: Schema.optional(Schema.Boolean),
    enableIntegrityMonitoring: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ShieldedInstanceConfig" });

export interface AutoprovisioningNodePoolDefaults {
  /** NodeManagement configuration for this NodePool. */
  management?: NodeManagement;
  /** The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Artifact Registry](https://cloud.google.com/artifact-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added. */
  oauthScopes?: ReadonlyArray<string>;
  /** Deprecated. Minimum CPU platform to be used for NAP created node pools. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as minCpuPlatform: Intel Haswell or minCpuPlatform: Intel Sandy Bridge. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform). This field is deprecated, min_cpu_platform should be specified using `cloud.google.com/requested-min-cpu-platform` label selector on the pod. To unset the min cpu platform field pass "automatic" as field value. */
  minCpuPlatform?: string;
  /** The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used. */
  serviceAccount?: string;
  /** The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption */
  bootDiskKmsKey?: string;
  /** DEPRECATED. Use NodePoolAutoConfig.NodeKubeletConfig instead. */
  insecureKubeletReadonlyPortEnabled?: boolean;
  /** Shielded Instance options. */
  shieldedInstanceConfig?: ShieldedInstanceConfig;
  /** The image type to use for NAP created node. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types. */
  imageType?: string;
  /** Upgrade settings control disruption and speed of the upgrade. */
  upgradeSettings?: UpgradeSettings;
  /** Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard' */
  diskType?: string;
  /** Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB. */
  diskSizeGb?: number;
}

export const AutoprovisioningNodePoolDefaults: Schema.Schema<AutoprovisioningNodePoolDefaults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    management: Schema.optional(NodeManagement),
    oauthScopes: Schema.optional(Schema.Array(Schema.String)),
    minCpuPlatform: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    bootDiskKmsKey: Schema.optional(Schema.String),
    insecureKubeletReadonlyPortEnabled: Schema.optional(Schema.Boolean),
    shieldedInstanceConfig: Schema.optional(ShieldedInstanceConfig),
    imageType: Schema.optional(Schema.String),
    upgradeSettings: Schema.optional(UpgradeSettings),
    diskType: Schema.optional(Schema.String),
    diskSizeGb: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AutoprovisioningNodePoolDefaults" });

export interface ResourceLimit {
  /** Minimum amount of the resource in the cluster. */
  minimum?: string;
  /** Maximum amount of the resource in the cluster. */
  maximum?: string;
  /** Resource name "cpu", "memory" or gpu-specific string. */
  resourceType?: string;
}

export const ResourceLimit: Schema.Schema<ResourceLimit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minimum: Schema.optional(Schema.String),
    maximum: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceLimit" });

export interface DefaultComputeClassConfig {
  /** Enables default compute class. */
  enabled?: boolean;
}

export const DefaultComputeClassConfig: Schema.Schema<DefaultComputeClassConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DefaultComputeClassConfig" });

export interface ClusterAutoscaling {
  /** Enables automatic node pool creation and deletion. */
  enableNodeAutoprovisioning?: boolean;
  /** The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes can be created by NAP. */
  autoprovisioningLocations?: ReadonlyArray<string>;
  /** Defines autoscaling behaviour. */
  autoscalingProfile?:
    | "PROFILE_UNSPECIFIED"
    | "OPTIMIZE_UTILIZATION"
    | "BALANCED"
    | (string & {});
  /** AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP. */
  autoprovisioningNodePoolDefaults?: AutoprovisioningNodePoolDefaults;
  /** Contains global constraints regarding minimum and maximum amount of resources in the cluster. */
  resourceLimits?: ReadonlyArray<ResourceLimit>;
  /** Default compute class is a configuration for default compute class. */
  defaultComputeClassConfig?: DefaultComputeClassConfig;
  /** Autopilot general profile for the cluster, which defines the configuration for the cluster. */
  autopilotGeneralProfile?:
    | "AUTOPILOT_GENERAL_PROFILE_UNSPECIFIED"
    | "NO_PERFORMANCE"
    | "NONE"
    | (string & {});
}

export const ClusterAutoscaling: Schema.Schema<ClusterAutoscaling> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableNodeAutoprovisioning: Schema.optional(Schema.Boolean),
    autoprovisioningLocations: Schema.optional(Schema.Array(Schema.String)),
    autoscalingProfile: Schema.optional(Schema.String),
    autoprovisioningNodePoolDefaults: Schema.optional(
      AutoprovisioningNodePoolDefaults,
    ),
    resourceLimits: Schema.optional(Schema.Array(ResourceLimit)),
    defaultComputeClassConfig: Schema.optional(DefaultComputeClassConfig),
    autopilotGeneralProfile: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterAutoscaling" });

export interface GPUDirectConfig {
  /** The type of GPU direct strategy to enable on the node pool. */
  gpuDirectStrategy?:
    | "GPU_DIRECT_STRATEGY_UNSPECIFIED"
    | "RDMA"
    | (string & {});
}

export const GPUDirectConfig: Schema.Schema<GPUDirectConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gpuDirectStrategy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GPUDirectConfig" });

export interface RBACBindingConfig {
  /** Setting this to true will allow any ClusterRoleBinding and RoleBinding with subjets system:anonymous or system:unauthenticated. */
  enableInsecureBindingSystemUnauthenticated?: boolean;
  /** Setting this to true will allow any ClusterRoleBinding and RoleBinding with subjects system:authenticated. */
  enableInsecureBindingSystemAuthenticated?: boolean;
}

export const RBACBindingConfig: Schema.Schema<RBACBindingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableInsecureBindingSystemUnauthenticated: Schema.optional(Schema.Boolean),
    enableInsecureBindingSystemAuthenticated: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RBACBindingConfig" });

export interface ManagedMachineLearningDiagnosticsConfig {
  /** Enable/Disable Managed Machine Learning Diagnostics. */
  enabled?: boolean;
}

export const ManagedMachineLearningDiagnosticsConfig: Schema.Schema<ManagedMachineLearningDiagnosticsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ManagedMachineLearningDiagnosticsConfig" });

export interface LoggingComponentConfig {
  /** Select components to collect logs. An empty set would disable all logging. */
  enableComponents?: ReadonlyArray<
    | "COMPONENT_UNSPECIFIED"
    | "SYSTEM_COMPONENTS"
    | "WORKLOADS"
    | "APISERVER"
    | "SCHEDULER"
    | "CONTROLLER_MANAGER"
    | "KCP_SSHD"
    | "KCP_CONNECTION"
    | "KCP_HPA"
    | (string & {})
  >;
}

export const LoggingComponentConfig: Schema.Schema<LoggingComponentConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableComponents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LoggingComponentConfig" });

export interface LoggingConfig {
  /** Logging components configuration */
  componentConfig?: LoggingComponentConfig;
}

export const LoggingConfig: Schema.Schema<LoggingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    componentConfig: Schema.optional(LoggingComponentConfig),
  }).annotate({ identifier: "LoggingConfig" });

export interface SecretManagerConfig {
  /** Enable/Disable Secret Manager Config. */
  enabled?: boolean;
  /** Rotation config for secret manager. */
  rotationConfig?: RotationConfig;
}

export const SecretManagerConfig: Schema.Schema<SecretManagerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    rotationConfig: Schema.optional(RotationConfig),
  }).annotate({ identifier: "SecretManagerConfig" });

export interface UserManagedKeysConfig {
  /** The Cloud KMS cryptoKeyVersions to use for signing service account JWTs issued by this cluster. Format: `projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{cryptoKey}/cryptoKeyVersions/{cryptoKeyVersion}` */
  serviceAccountSigningKeys?: ReadonlyArray<string>;
  /** The Cloud KMS cryptoKeyVersions to use for verifying service account JWTs issued by this cluster. Format: `projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{cryptoKey}/cryptoKeyVersions/{cryptoKeyVersion}` */
  serviceAccountVerificationKeys?: ReadonlyArray<string>;
  /** Resource path of the Certificate Authority Service caPool to use for the etcd peer CA in this cluster. */
  etcdPeerCa?: string;
  /** The Certificate Authority Service caPool to use for the cluster CA in this cluster. */
  clusterCa?: string;
  /** Output only. All of the versions of the Cloud KMS cryptoKey that are used by Confidential Hyperdisks on the control plane nodes. */
  controlPlaneDiskEncryptionKeyVersions?: ReadonlyArray<string>;
  /** Resource path of the Cloud KMS cryptoKey to use for encryption of internal etcd backups. */
  gkeopsEtcdBackupEncryptionKey?: string;
  /** Resource path of the Certificate Authority Service caPool to use for the etcd API CA in this cluster. */
  etcdApiCa?: string;
  /** The Certificate Authority Service caPool to use for the aggregation CA in this cluster. */
  aggregationCa?: string;
  /** The Cloud KMS cryptoKey to use for Confidential Hyperdisk on the control plane nodes. */
  controlPlaneDiskEncryptionKey?: string;
}

export const UserManagedKeysConfig: Schema.Schema<UserManagedKeysConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccountSigningKeys: Schema.optional(Schema.Array(Schema.String)),
    serviceAccountVerificationKeys: Schema.optional(
      Schema.Array(Schema.String),
    ),
    etcdPeerCa: Schema.optional(Schema.String),
    clusterCa: Schema.optional(Schema.String),
    controlPlaneDiskEncryptionKeyVersions: Schema.optional(
      Schema.Array(Schema.String),
    ),
    gkeopsEtcdBackupEncryptionKey: Schema.optional(Schema.String),
    etcdApiCa: Schema.optional(Schema.String),
    aggregationCa: Schema.optional(Schema.String),
    controlPlaneDiskEncryptionKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserManagedKeysConfig" });

export interface SecurityPostureConfig {
  /** Sets which mode to use for vulnerability scanning. */
  vulnerabilityMode?:
    | "VULNERABILITY_MODE_UNSPECIFIED"
    | "VULNERABILITY_DISABLED"
    | "VULNERABILITY_BASIC"
    | "VULNERABILITY_ENTERPRISE"
    | (string & {});
  /** Sets which mode to use for Security Posture features. */
  mode?:
    | "MODE_UNSPECIFIED"
    | "DISABLED"
    | "BASIC"
    | "ENTERPRISE"
    | (string & {});
}

export const SecurityPostureConfig: Schema.Schema<SecurityPostureConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vulnerabilityMode: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityPostureConfig" });

export interface DNSConfig {
  /** cluster_dns_domain is the suffix used for all cluster service records. */
  clusterDnsDomain?: string;
  /** cluster_dns indicates which in-cluster DNS provider should be used. */
  clusterDns?:
    | "PROVIDER_UNSPECIFIED"
    | "PLATFORM_DEFAULT"
    | "CLOUD_DNS"
    | "KUBE_DNS"
    | (string & {});
  /** Optional. The domain used in Additive VPC scope. */
  additiveVpcScopeDnsDomain?: string;
  /** cluster_dns_scope indicates the scope of access to cluster DNS records. */
  clusterDnsScope?:
    | "DNS_SCOPE_UNSPECIFIED"
    | "CLUSTER_SCOPE"
    | "VPC_SCOPE"
    | (string & {});
}

export const DNSConfig: Schema.Schema<DNSConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterDnsDomain: Schema.optional(Schema.String),
    clusterDns: Schema.optional(Schema.String),
    additiveVpcScopeDnsDomain: Schema.optional(Schema.String),
    clusterDnsScope: Schema.optional(Schema.String),
  }).annotate({ identifier: "DNSConfig" });

export interface ClusterPolicyConfig {
  /** Denotes preventing unsafe webhooks. */
  noUnsafeWebhooks?: boolean;
  /** Denotes preventing impersonation and CSRs for GKE System users. */
  noSystemImpersonation?: boolean;
  /** Denotes preventing standard node pools and requiring only autopilot node pools. */
  noStandardNodePools?: boolean;
  /** Denotes that preventing creation and mutation of resources in GKE managed namespaces and cluster-scoped GKE managed resources . */
  noSystemMutation?: boolean;
}

export const ClusterPolicyConfig: Schema.Schema<ClusterPolicyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noUnsafeWebhooks: Schema.optional(Schema.Boolean),
    noSystemImpersonation: Schema.optional(Schema.Boolean),
    noStandardNodePools: Schema.optional(Schema.Boolean),
    noSystemMutation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ClusterPolicyConfig" });

export interface RollbackSafeUpgrade {
  /** A user-defined period for the cluster remains in the rollbackable state. ex: {seconds: 21600}. */
  controlPlaneSoakDuration?: string;
}

export const RollbackSafeUpgrade: Schema.Schema<RollbackSafeUpgrade> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneSoakDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "RollbackSafeUpgrade" });

export interface ManagedOpenTelemetryConfig {
  /** Scope of the Managed OpenTelemetry pipeline. */
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "NONE"
    | "COLLECTION_AND_INSTRUMENTATION_COMPONENTS"
    | (string & {});
}

export const ManagedOpenTelemetryConfig: Schema.Schema<ManagedOpenTelemetryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.optional(Schema.String),
  }).annotate({ identifier: "ManagedOpenTelemetryConfig" });

export interface ServiceExternalIPsConfig {
  /** Whether Services with ExternalIPs field are allowed or not. */
  enabled?: boolean;
}

export const ServiceExternalIPsConfig: Schema.Schema<ServiceExternalIPsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ServiceExternalIPsConfig" });

export interface Fleet {
  /** The Fleet host project(project ID or project number) where this cluster will be registered to. This field cannot be changed after the cluster has been registered. */
  project?: string;
  /** Output only. Whether the cluster has been registered through the fleet API. */
  preRegistered?: boolean;
  /** Output only. The full resource name of the registered fleet membership of the cluster, in the format `//gkehub.googleapis.com/projects/* /locations/* /memberships/*`. */
  membership?: string;
  /** The type of the cluster's fleet membership. */
  membershipType?:
    | "MEMBERSHIP_TYPE_UNSPECIFIED"
    | "LIGHTWEIGHT"
    | (string & {});
}

export const Fleet: Schema.Schema<Fleet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String),
    preRegistered: Schema.optional(Schema.Boolean),
    membership: Schema.optional(Schema.String),
    membershipType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Fleet" });

export interface AutoIpamConfig {
  /** The flag that enables Auto IPAM on this cluster */
  enabled?: boolean;
}

export const AutoIpamConfig: Schema.Schema<AutoIpamConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AutoIpamConfig" });

export interface WorkloadPolicyConfig {
  /** If true, workloads can use NET_ADMIN capability. */
  allowNetAdmin?: boolean;
  /** If true, enables the GCW Auditor that audits workloads on standard clusters. */
  autopilotCompatibilityAuditingEnabled?: boolean;
}

export const WorkloadPolicyConfig: Schema.Schema<WorkloadPolicyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowNetAdmin: Schema.optional(Schema.Boolean),
    autopilotCompatibilityAuditingEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "WorkloadPolicyConfig" });

export interface PodSecurityPolicyConfig {
  /** Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created. */
  enabled?: boolean;
}

export const PodSecurityPolicyConfig: Schema.Schema<PodSecurityPolicyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PodSecurityPolicyConfig" });

export interface PrivateClusterConfig {
  /** Whether the master's internal IP address is used as the cluster endpoint. Use ControlPlaneEndpointsConfig.IPEndpointsConfig.enable_public_endpoint instead. Note that the value of enable_public_endpoint is reversed: if enable_private_endpoint is false, then enable_public_endpoint will be true. */
  enablePrivateEndpoint?: boolean;
  /** Output only. The external IP address of this cluster's master endpoint. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.public_endpoint instead. */
  publicEndpoint?: string;
  /** Subnet to provision the master's private endpoint during cluster creation. Specified in projects/* /regions/* /subnetworks/* format. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.private_endpoint_subnetwork instead. */
  privateEndpointSubnetwork?: string;
  /** Output only. The internal IP address of this cluster's master endpoint. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.private_endpoint instead. */
  privateEndpoint?: string;
  /** Controls master global access settings. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.enable_global_access instead. */
  masterGlobalAccessConfig?: PrivateClusterMasterGlobalAccessConfig;
  /** Whether nodes have internal IP addresses only. If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking. Deprecated: Use NetworkConfig.default_enable_private_nodes instead. */
  enablePrivateNodes?: boolean;
  /** The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning internal IP addresses to the master or set of masters, as well as the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network. */
  masterIpv4CidrBlock?: string;
  /** Output only. The peering name in the customer VPC used by this cluster. */
  peeringName?: string;
}

export const PrivateClusterConfig: Schema.Schema<PrivateClusterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enablePrivateEndpoint: Schema.optional(Schema.Boolean),
    publicEndpoint: Schema.optional(Schema.String),
    privateEndpointSubnetwork: Schema.optional(Schema.String),
    privateEndpoint: Schema.optional(Schema.String),
    masterGlobalAccessConfig: Schema.optional(
      PrivateClusterMasterGlobalAccessConfig,
    ),
    enablePrivateNodes: Schema.optional(Schema.Boolean),
    masterIpv4CidrBlock: Schema.optional(Schema.String),
    peeringName: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrivateClusterConfig" });

export interface OperationError {
  /** CloudKMS key resource that had the error. */
  keyName?: string;
  /** Time when the CloudKMS error was seen. */
  timestamp?: string;
  /** Description of the error seen during the operation. */
  errorMessage?: string;
}

export const OperationError: Schema.Schema<OperationError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyName: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationError" });

export interface DatabaseEncryption {
  /** Name of CloudKMS key to use for the encryption of secrets in etcd. Ex. projects/my-project/locations/global/keyRings/my-ring/cryptoKeys/my-key */
  keyName?: string;
  /** Output only. Records errors seen during DatabaseEncryption update operations. */
  lastOperationErrors?: ReadonlyArray<OperationError>;
  /** The desired state of etcd encryption. */
  state?:
    | "UNKNOWN"
    | "ENCRYPTED"
    | "DECRYPTED"
    | "ALL_OBJECTS_ENCRYPTION_ENABLED"
    | (string & {});
  /** Output only. The current state of etcd encryption. */
  currentState?:
    | "CURRENT_STATE_UNSPECIFIED"
    | "CURRENT_STATE_ENCRYPTED"
    | "CURRENT_STATE_DECRYPTED"
    | "CURRENT_STATE_ENCRYPTION_PENDING"
    | "CURRENT_STATE_ENCRYPTION_ERROR"
    | "CURRENT_STATE_DECRYPTION_PENDING"
    | "CURRENT_STATE_DECRYPTION_ERROR"
    | "CURRENT_STATE_ALL_OBJECTS_ENCRYPTION_ENABLED"
    | "CURRENT_STATE_ALL_OBJECTS_ENCRYPTION_PENDING"
    | "CURRENT_STATE_ALL_OBJECTS_ENCRYPTION_ERROR"
    | (string & {});
  /** Output only. Keys in use by the cluster for decrypting existing objects, in addition to the key in `key_name`. Each item is a CloudKMS key resource. */
  decryptionKeys?: ReadonlyArray<string>;
}

export const DatabaseEncryption: Schema.Schema<DatabaseEncryption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyName: Schema.optional(Schema.String),
    lastOperationErrors: Schema.optional(Schema.Array(OperationError)),
    state: Schema.optional(Schema.String),
    currentState: Schema.optional(Schema.String),
    decryptionKeys: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DatabaseEncryption" });

export interface K8sBetaAPIConfig {
  /** api name, e.g. storage.k8s.io/v1beta1/csistoragecapacities. */
  enabledApis?: ReadonlyArray<string>;
}

export const K8sBetaAPIConfig: Schema.Schema<K8sBetaAPIConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabledApis: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "K8sBetaAPIConfig" });

export interface PolicyBinding {
  /** The relative resource name of the binauthz platform policy to evaluate. GKE platform policies have the following format: `projects/{project_number}/platforms/gke/policies/{policy_id}`. */
  name?: string;
}

export const PolicyBinding: Schema.Schema<PolicyBinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyBinding" });

export interface BinaryAuthorization {
  /** This field is deprecated. Leave this unset and instead configure BinaryAuthorization using evaluation_mode. If evaluation_mode is set to anything other than EVALUATION_MODE_UNSPECIFIED, this field is ignored. */
  enabled?: boolean;
  /** Mode of operation for binauthz policy evaluation. If unspecified, defaults to DISABLED. */
  evaluationMode?:
    | "EVALUATION_MODE_UNSPECIFIED"
    | "DISABLED"
    | "PROJECT_SINGLETON_POLICY_ENFORCE"
    | "POLICY_BINDINGS"
    | "POLICY_BINDINGS_AND_PROJECT_SINGLETON_POLICY_ENFORCE"
    | (string & {});
  /** Optional. Binauthz policies that apply to this cluster. */
  policyBindings?: ReadonlyArray<PolicyBinding>;
}

export const BinaryAuthorization: Schema.Schema<BinaryAuthorization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    evaluationMode: Schema.optional(Schema.String),
    policyBindings: Schema.optional(Schema.Array(PolicyBinding)),
  }).annotate({ identifier: "BinaryAuthorization" });

export interface ControlPlaneEgress {
  /** Defines the mode of control plane egress. */
  mode?: "MODE_UNSPECIFIED" | "VIA_CONTROL_PLANE" | "NONE" | (string & {});
}

export const ControlPlaneEgress: Schema.Schema<ControlPlaneEgress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "ControlPlaneEgress" });

export interface ReleaseChannel {
  /** channel specifies which release channel the cluster is subscribed to. */
  channel?:
    | "UNSPECIFIED"
    | "RAPID"
    | "REGULAR"
    | "STABLE"
    | "EXTENDED"
    | (string & {});
}

export const ReleaseChannel: Schema.Schema<ReleaseChannel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReleaseChannel" });

export interface ClusterNetworkPerformanceConfig {
  /** Specifies the total network bandwidth tier for the NodePool. */
  totalEgressBandwidthTier?: "TIER_UNSPECIFIED" | "TIER_1" | (string & {});
}

export const ClusterNetworkPerformanceConfig: Schema.Schema<ClusterNetworkPerformanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalEgressBandwidthTier: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterNetworkPerformanceConfig" });

export interface NodePoolAutoscaling {
  /** Can this node pool be deleted automatically. */
  autoprovisioned?: boolean;
  /** Minimum number of nodes in the node pool. Must be greater than or equal to 0 and less than or equal to total_max_node_count. The total_*_node_count fields are mutually exclusive with the *_node_count fields. */
  totalMinNodeCount?: number;
  /** Is autoscaling enabled for this node pool. */
  enabled?: boolean;
  /** Minimum number of nodes for one location in the node pool. Must be greater than or equal to 0 and less than or equal to max_node_count. */
  minNodeCount?: number;
  /** Maximum number of nodes for one location in the node pool. Must be >= min_node_count. There has to be enough quota to scale up the cluster. */
  maxNodeCount?: number;
  /** Location policy used when scaling up a node pool. */
  locationPolicy?:
    | "LOCATION_POLICY_UNSPECIFIED"
    | "BALANCED"
    | "ANY"
    | (string & {});
  /** Maximum number of nodes in the node pool. Must be greater than or equal to total_min_node_count. There has to be enough quota to scale up the cluster. The total_*_node_count fields are mutually exclusive with the *_node_count fields. */
  totalMaxNodeCount?: number;
}

export const NodePoolAutoscaling: Schema.Schema<NodePoolAutoscaling> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoprovisioned: Schema.optional(Schema.Boolean),
    totalMinNodeCount: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
    minNodeCount: Schema.optional(Schema.Number),
    maxNodeCount: Schema.optional(Schema.Number),
    locationPolicy: Schema.optional(Schema.String),
    totalMaxNodeCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "NodePoolAutoscaling" });

export interface HighScaleCheckpointingConfig {
  /** Whether the High Scale Checkpointing is enabled for this cluster. */
  enabled?: boolean;
}

export const HighScaleCheckpointingConfig: Schema.Schema<HighScaleCheckpointingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "HighScaleCheckpointingConfig" });

export interface AgentSandboxConfig {
  /** Optional. Whether AgentSandbox is enabled for this cluster. */
  enabled?: boolean;
}

export const AgentSandboxConfig: Schema.Schema<AgentSandboxConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AgentSandboxConfig" });

export interface CloudRunConfig {
  /** Which load balancer type is installed for Cloud Run. */
  loadBalancerType?:
    | "LOAD_BALANCER_TYPE_UNSPECIFIED"
    | "LOAD_BALANCER_TYPE_EXTERNAL"
    | "LOAD_BALANCER_TYPE_INTERNAL"
    | (string & {});
  /** Whether Cloud Run addon is enabled for this cluster. */
  disabled?: boolean;
}

export const CloudRunConfig: Schema.Schema<CloudRunConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancerType: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CloudRunConfig" });

export interface ConfigConnectorConfig {
  /** Whether Cloud Connector is enabled for this cluster. */
  enabled?: boolean;
}

export const ConfigConnectorConfig: Schema.Schema<ConfigConnectorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ConfigConnectorConfig" });

export interface IstioConfig {
  /** The specified Istio auth mode, either none, or mutual TLS. */
  auth?: "AUTH_NONE" | "AUTH_MUTUAL_TLS" | (string & {});
  /** Whether Istio is enabled for this cluster. */
  disabled?: boolean;
}

export const IstioConfig: Schema.Schema<IstioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auth: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "IstioConfig" });

export interface LustreCsiDriverConfig {
  /** Whether the Lustre CSI driver is enabled for this cluster. */
  enabled?: boolean;
  /** If set to true, the Lustre CSI driver will install Lustre kernel modules using port 6988. This serves as a workaround for a port conflict with the gke-metadata-server. This field is required ONLY under the following conditions: 1. The GKE node version is older than 1.33.2-gke.4655000. 2. You're connecting to a Lustre instance that has the 'gke-support-enabled' flag. Deprecated: This flag is no longer required as of GKE node version 1.33.2-gke.4655000, unless you are connecting to a Lustre instance that has the `gke-support-enabled` flag. */
  enableLegacyLustrePort?: boolean;
  /** When set to true, this disables multi-NIC support for the Lustre CSI driver. By default, GKE enables multi-NIC support, which allows the Lustre CSI driver to automatically detect and configure all suitable network interfaces on a node to maximize I/O performance for demanding workloads. */
  disableMultiNic?: boolean;
}

export const LustreCsiDriverConfig: Schema.Schema<LustreCsiDriverConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    enableLegacyLustrePort: Schema.optional(Schema.Boolean),
    disableMultiNic: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LustreCsiDriverConfig" });

export interface PodSnapshotConfig {
  /** Whether or not the Pod Snapshots feature is enabled. */
  enabled?: boolean;
}

export const PodSnapshotConfig: Schema.Schema<PodSnapshotConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PodSnapshotConfig" });

export interface SlurmOperatorConfig {
  /** Whether the Slurm Operator is enabled in the cluster. */
  enabled?: boolean;
}

export const SlurmOperatorConfig: Schema.Schema<SlurmOperatorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SlurmOperatorConfig" });

export interface HorizontalPodAutoscaling {
  /** Whether the Horizontal Pod Autoscaling feature is enabled in the cluster. When enabled, it ensures that metrics are collected into Stackdriver Monitoring. */
  disabled?: boolean;
}

export const HorizontalPodAutoscaling: Schema.Schema<HorizontalPodAutoscaling> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "HorizontalPodAutoscaling" });

export interface RayClusterMonitoringConfig {
  /** Enable metrics collection for Ray clusters. */
  enabled?: boolean;
}

export const RayClusterMonitoringConfig: Schema.Schema<RayClusterMonitoringConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RayClusterMonitoringConfig" });

export interface RayClusterLoggingConfig {
  /** Enable log collection for Ray clusters. */
  enabled?: boolean;
}

export const RayClusterLoggingConfig: Schema.Schema<RayClusterLoggingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RayClusterLoggingConfig" });

export interface RayOperatorConfig {
  /** Whether the Ray addon is enabled for this cluster. */
  enabled?: boolean;
  /** Optional. Monitoring configuration for Ray clusters. */
  rayClusterMonitoringConfig?: RayClusterMonitoringConfig;
  /** Optional. Logging configuration for Ray clusters. */
  rayClusterLoggingConfig?: RayClusterLoggingConfig;
}

export const RayOperatorConfig: Schema.Schema<RayOperatorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    rayClusterMonitoringConfig: Schema.optional(RayClusterMonitoringConfig),
    rayClusterLoggingConfig: Schema.optional(RayClusterLoggingConfig),
  }).annotate({ identifier: "RayOperatorConfig" });

export interface GcpFilestoreCsiDriverConfig {
  /** Whether the Filestore CSI driver is enabled for this cluster. */
  enabled?: boolean;
}

export const GcpFilestoreCsiDriverConfig: Schema.Schema<GcpFilestoreCsiDriverConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GcpFilestoreCsiDriverConfig" });

export interface GcePersistentDiskCsiDriverConfig {
  /** Whether the Compute Engine PD CSI driver is enabled for this cluster. */
  enabled?: boolean;
}

export const GcePersistentDiskCsiDriverConfig: Schema.Schema<GcePersistentDiskCsiDriverConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GcePersistentDiskCsiDriverConfig" });

export interface DnsCacheConfig {
  /** Whether NodeLocal DNSCache is enabled for this cluster. */
  enabled?: boolean;
}

export const DnsCacheConfig: Schema.Schema<DnsCacheConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DnsCacheConfig" });

export interface HttpLoadBalancing {
  /** Whether the HTTP Load Balancing controller is enabled in the cluster. When enabled, it runs a small pod in the cluster that manages the load balancers. */
  disabled?: boolean;
}

export const HttpLoadBalancing: Schema.Schema<HttpLoadBalancing> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "HttpLoadBalancing" });

export interface StatefulHAConfig {
  /** Whether the Stateful HA add-on is enabled for this cluster. */
  enabled?: boolean;
}

export const StatefulHAConfig: Schema.Schema<StatefulHAConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "StatefulHAConfig" });

export interface KubernetesDashboard {
  /** Whether the Kubernetes Dashboard is enabled for this cluster. */
  disabled?: boolean;
}

export const KubernetesDashboard: Schema.Schema<KubernetesDashboard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "KubernetesDashboard" });

export interface GkeBackupAgentConfig {
  /** Whether the Backup for GKE agent is enabled for this cluster. */
  enabled?: boolean;
}

export const GkeBackupAgentConfig: Schema.Schema<GkeBackupAgentConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GkeBackupAgentConfig" });

export interface SliceControllerConfig {
  /** Optional. Indicates whether Slice Controller is enabled in the cluster. */
  enabled?: boolean;
}

export const SliceControllerConfig: Schema.Schema<SliceControllerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SliceControllerConfig" });

export interface KalmConfig {
  /** Whether KALM is enabled for this cluster. */
  enabled?: boolean;
}

export const KalmConfig: Schema.Schema<KalmConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "KalmConfig" });

export interface ParallelstoreCsiDriverConfig {
  /** Whether the Cloud Storage Parallelstore CSI driver is enabled for this cluster. */
  enabled?: boolean;
}

export const ParallelstoreCsiDriverConfig: Schema.Schema<ParallelstoreCsiDriverConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ParallelstoreCsiDriverConfig" });

export interface GcsFuseCsiDriverConfig {
  /** Whether the Cloud Storage Fuse CSI driver is enabled for this cluster. */
  enabled?: boolean;
}

export const GcsFuseCsiDriverConfig: Schema.Schema<GcsFuseCsiDriverConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GcsFuseCsiDriverConfig" });

export interface NetworkPolicyConfig {
  /** Whether NetworkPolicy is enabled for this cluster. */
  disabled?: boolean;
}

export const NetworkPolicyConfig: Schema.Schema<NetworkPolicyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "NetworkPolicyConfig" });

export interface AddonsConfig {
  /** Optional. Configuration for NodeReadinessController add-on. */
  nodeReadinessConfig?: NodeReadinessConfig;
  /** Configuration for the High Scale Checkpointing add-on. */
  highScaleCheckpointingConfig?: HighScaleCheckpointingConfig;
  /** Optional. Configuration for the AgentSandbox addon. */
  agentSandboxConfig?: AgentSandboxConfig;
  /** Configuration for the Cloud Run addon. The `IstioConfig` addon must be enabled in order to enable Cloud Run addon. This option can only be enabled at cluster creation time. */
  cloudRunConfig?: CloudRunConfig;
  /** Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. */
  configConnectorConfig?: ConfigConnectorConfig;
  /** Configuration for Istio, an open platform to connect, manage, and secure microservices. */
  istioConfig?: IstioConfig;
  /** Configuration for the Lustre CSI driver. */
  lustreCsiDriverConfig?: LustreCsiDriverConfig;
  /** Configuration for the Pod Snapshot feature. */
  podSnapshotConfig?: PodSnapshotConfig;
  /** Configuration for the Slurm Operator. */
  slurmOperatorConfig?: SlurmOperatorConfig;
  /** Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. */
  horizontalPodAutoscaling?: HorizontalPodAutoscaling;
  /** Optional. Configuration for Ray Operator addon. */
  rayOperatorConfig?: RayOperatorConfig;
  /** Configuration for the Filestore CSI driver. */
  gcpFilestoreCsiDriverConfig?: GcpFilestoreCsiDriverConfig;
  /** Configuration for the Compute Engine Persistent Disk CSI driver. */
  gcePersistentDiskCsiDriverConfig?: GcePersistentDiskCsiDriverConfig;
  /** Configuration for NodeLocalDNS, a dns cache running on cluster nodes */
  dnsCacheConfig?: DnsCacheConfig;
  /** Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. */
  httpLoadBalancing?: HttpLoadBalancing;
  /** Optional. Configuration for the StatefulHA add-on. */
  statefulHaConfig?: StatefulHAConfig;
  /** Configuration for the Kubernetes Dashboard. This addon is deprecated, and will be disabled in 1.15. It is recommended to use the Cloud Console to manage and monitor your Kubernetes clusters, workloads and applications. For more information, see: https://cloud.google.com/kubernetes-engine/docs/concepts/dashboards */
  kubernetesDashboard?: KubernetesDashboard;
  /** Configuration for the Backup for GKE agent addon. */
  gkeBackupAgentConfig?: GkeBackupAgentConfig;
  /** Optional. Configuration for the slice controller add-on. */
  sliceControllerConfig?: SliceControllerConfig;
  /** Configuration for the KALM addon, which manages the lifecycle of k8s applications. */
  kalmConfig?: KalmConfig;
  /** Configuration for the Cloud Storage Parallelstore CSI driver. */
  parallelstoreCsiDriverConfig?: ParallelstoreCsiDriverConfig;
  /** Configuration for the Cloud Storage Fuse CSI driver. */
  gcsFuseCsiDriverConfig?: GcsFuseCsiDriverConfig;
  /** Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. */
  networkPolicyConfig?: NetworkPolicyConfig;
}

export const AddonsConfig: Schema.Schema<AddonsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeReadinessConfig: Schema.optional(NodeReadinessConfig),
    highScaleCheckpointingConfig: Schema.optional(HighScaleCheckpointingConfig),
    agentSandboxConfig: Schema.optional(AgentSandboxConfig),
    cloudRunConfig: Schema.optional(CloudRunConfig),
    configConnectorConfig: Schema.optional(ConfigConnectorConfig),
    istioConfig: Schema.optional(IstioConfig),
    lustreCsiDriverConfig: Schema.optional(LustreCsiDriverConfig),
    podSnapshotConfig: Schema.optional(PodSnapshotConfig),
    slurmOperatorConfig: Schema.optional(SlurmOperatorConfig),
    horizontalPodAutoscaling: Schema.optional(HorizontalPodAutoscaling),
    rayOperatorConfig: Schema.optional(RayOperatorConfig),
    gcpFilestoreCsiDriverConfig: Schema.optional(GcpFilestoreCsiDriverConfig),
    gcePersistentDiskCsiDriverConfig: Schema.optional(
      GcePersistentDiskCsiDriverConfig,
    ),
    dnsCacheConfig: Schema.optional(DnsCacheConfig),
    httpLoadBalancing: Schema.optional(HttpLoadBalancing),
    statefulHaConfig: Schema.optional(StatefulHAConfig),
    kubernetesDashboard: Schema.optional(KubernetesDashboard),
    gkeBackupAgentConfig: Schema.optional(GkeBackupAgentConfig),
    sliceControllerConfig: Schema.optional(SliceControllerConfig),
    kalmConfig: Schema.optional(KalmConfig),
    parallelstoreCsiDriverConfig: Schema.optional(ParallelstoreCsiDriverConfig),
    gcsFuseCsiDriverConfig: Schema.optional(GcsFuseCsiDriverConfig),
    networkPolicyConfig: Schema.optional(NetworkPolicyConfig),
  }).annotate({ identifier: "AddonsConfig" });

export interface VerticalPodAutoscaling {
  /** Enables vertical pod autoscaling. */
  enabled?: boolean;
}

export const VerticalPodAutoscaling: Schema.Schema<VerticalPodAutoscaling> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VerticalPodAutoscaling" });

export interface Filter {
  /** Event types to allowlist. */
  eventType?: ReadonlyArray<
    | "EVENT_TYPE_UNSPECIFIED"
    | "UPGRADE_AVAILABLE_EVENT"
    | "UPGRADE_EVENT"
    | "SECURITY_BULLETIN_EVENT"
    | "UPGRADE_INFO_EVENT"
    | (string & {})
  >;
}

export const Filter: Schema.Schema<Filter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventType: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Filter" });

export interface PubSub {
  /** Enable notifications for Pub/Sub. */
  enabled?: boolean;
  /** The desired Pub/Sub topic to which notifications will be sent by GKE. Format is `projects/{project}/topics/{topic}`. */
  topic?: string;
  /** Allows filtering to one or more specific event types. If no filter is specified, or if a filter is specified with no event types, all event types will be sent */
  filter?: Filter;
}

export const PubSub: Schema.Schema<PubSub> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    topic: Schema.optional(Schema.String),
    filter: Schema.optional(Filter),
  }).annotate({ identifier: "PubSub" });

export interface NotificationConfig {
  /** Notification config for Pub/Sub. */
  pubsub?: PubSub;
}

export const NotificationConfig: Schema.Schema<NotificationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pubsub: Schema.optional(PubSub),
  }).annotate({ identifier: "NotificationConfig" });

export interface WorkloadCertificates {
  /** enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty). */
  enableCertificates?: boolean;
}

export const WorkloadCertificates: Schema.Schema<WorkloadCertificates> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableCertificates: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "WorkloadCertificates" });

export interface ConsumptionMeteringConfig {
  /** Whether to enable consumption metering for this cluster. If enabled, a second BigQuery table will be created to hold resource consumption records. */
  enabled?: boolean;
}

export const ConsumptionMeteringConfig: Schema.Schema<ConsumptionMeteringConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ConsumptionMeteringConfig" });

export interface ResourceUsageExportConfig {
  /** Configuration to use BigQuery as usage export destination. */
  bigqueryDestination?: BigQueryDestination;
  /** Configuration to enable resource consumption metering. */
  consumptionMeteringConfig?: ConsumptionMeteringConfig;
  /** Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic. */
  enableNetworkEgressMetering?: boolean;
}

export const ResourceUsageExportConfig: Schema.Schema<ResourceUsageExportConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bigqueryDestination: Schema.optional(BigQueryDestination),
    consumptionMeteringConfig: Schema.optional(ConsumptionMeteringConfig),
    enableNetworkEgressMetering: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ResourceUsageExportConfig" });

export interface ClusterTelemetry {
  /** Type of the integration. */
  type?: "UNSPECIFIED" | "DISABLED" | "ENABLED" | "SYSTEM_ONLY" | (string & {});
}

export const ClusterTelemetry: Schema.Schema<ClusterTelemetry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterTelemetry" });

export interface WorkloadIdentityConfig {
  /** IAM Identity Namespace to attach all Kubernetes Service Accounts to. */
  identityNamespace?: string;
  /** The workload pool to attach all Kubernetes service accounts to. */
  workloadPool?: string;
  /** identity provider is the third party identity provider. */
  identityProvider?: string;
}

export const WorkloadIdentityConfig: Schema.Schema<WorkloadIdentityConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identityNamespace: Schema.optional(Schema.String),
    workloadPool: Schema.optional(Schema.String),
    identityProvider: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkloadIdentityConfig" });

export interface RangeInfo {
  /** Output only. Name of a range. */
  rangeName?: string;
  /** Output only. The utilization of the range. */
  utilization?: number;
}

export const RangeInfo: Schema.Schema<RangeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rangeName: Schema.optional(Schema.String),
    utilization: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RangeInfo" });

export interface AdditionalPodRangesConfig {
  /** Output only. Information for additional pod range. */
  podRangeInfo?: ReadonlyArray<RangeInfo>;
  /** Name for pod secondary ipv4 range which has the actual range defined ahead. */
  podRangeNames?: ReadonlyArray<string>;
}

export const AdditionalPodRangesConfig: Schema.Schema<AdditionalPodRangesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    podRangeInfo: Schema.optional(Schema.Array(RangeInfo)),
    podRangeNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AdditionalPodRangesConfig" });

export interface WorkloadConfig {
  /** Sets which mode of auditing should be used for the cluster's workloads. */
  auditMode?:
    | "MODE_UNSPECIFIED"
    | "DISABLED"
    | "BASIC"
    | "BASELINE"
    | "RESTRICTED"
    | (string & {});
}

export const WorkloadConfig: Schema.Schema<WorkloadConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auditMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkloadConfig" });

export interface ProtectConfig {
  /** Sets which mode to use for Protect workload vulnerability scanning feature. */
  workloadVulnerabilityMode?:
    | "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
    | "DISABLED"
    | "BASIC"
    | (string & {});
  /** WorkloadConfig defines which actions are enabled for a cluster's workload configurations. */
  workloadConfig?: WorkloadConfig;
}

export const ProtectConfig: Schema.Schema<ProtectConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workloadVulnerabilityMode: Schema.optional(Schema.String),
    workloadConfig: Schema.optional(WorkloadConfig),
  }).annotate({ identifier: "ProtectConfig" });

export interface WorkloadALTSConfig {
  /** enable_alts controls whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workload_pool must be non-empty). */
  enableAlts?: boolean;
}

export const WorkloadALTSConfig: Schema.Schema<WorkloadALTSConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableAlts: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "WorkloadALTSConfig" });

export interface MeshCertificates {
  /** enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty). */
  enableCertificates?: boolean;
}

export const MeshCertificates: Schema.Schema<MeshCertificates> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableCertificates: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MeshCertificates" });

export interface AutoMonitoringConfig {
  /** Scope for GKE Workload Auto-Monitoring. */
  scope?: "SCOPE_UNSPECIFIED" | "ALL" | "NONE" | (string & {});
}

export const AutoMonitoringConfig: Schema.Schema<AutoMonitoringConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutoMonitoringConfig" });

export interface ManagedPrometheusConfig {
  /** Enable Managed Collection. */
  enabled?: boolean;
  /** GKE Workload Auto-Monitoring Configuration. */
  autoMonitoringConfig?: AutoMonitoringConfig;
}

export const ManagedPrometheusConfig: Schema.Schema<ManagedPrometheusConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    autoMonitoringConfig: Schema.optional(AutoMonitoringConfig),
  }).annotate({ identifier: "ManagedPrometheusConfig" });

export interface AdvancedDatapathObservabilityConfig {
  /** Expose flow metrics on nodes */
  enableMetrics?: boolean;
  /** Enable Relay component */
  enableRelay?: boolean;
  /** Method used to make Relay available */
  relayMode?:
    | "RELAY_MODE_UNSPECIFIED"
    | "DISABLED"
    | "INTERNAL_VPC_LB"
    | "EXTERNAL_LB"
    | (string & {});
}

export const AdvancedDatapathObservabilityConfig: Schema.Schema<AdvancedDatapathObservabilityConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableMetrics: Schema.optional(Schema.Boolean),
    enableRelay: Schema.optional(Schema.Boolean),
    relayMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdvancedDatapathObservabilityConfig" });

export interface MonitoringComponentConfig {
  /** Select components to collect metrics. An empty set would disable all monitoring. */
  enableComponents?: ReadonlyArray<
    | "COMPONENT_UNSPECIFIED"
    | "SYSTEM_COMPONENTS"
    | "WORKLOADS"
    | "APISERVER"
    | "SCHEDULER"
    | "CONTROLLER_MANAGER"
    | "STORAGE"
    | "HPA"
    | "POD"
    | "DAEMONSET"
    | "DEPLOYMENT"
    | "STATEFULSET"
    | "CADVISOR"
    | "KUBELET"
    | "DCGM"
    | "JOBSET"
    | (string & {})
  >;
}

export const MonitoringComponentConfig: Schema.Schema<MonitoringComponentConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableComponents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "MonitoringComponentConfig" });

export interface MonitoringConfig {
  /** Enable Google Cloud Managed Service for Prometheus in the cluster. */
  managedPrometheusConfig?: ManagedPrometheusConfig;
  /** Configuration of Advanced Datapath Observability features. */
  advancedDatapathObservabilityConfig?: AdvancedDatapathObservabilityConfig;
  /** Monitoring components configuration */
  componentConfig?: MonitoringComponentConfig;
}

export const MonitoringConfig: Schema.Schema<MonitoringConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managedPrometheusConfig: Schema.optional(ManagedPrometheusConfig),
    advancedDatapathObservabilityConfig: Schema.optional(
      AdvancedDatapathObservabilityConfig,
    ),
    componentConfig: Schema.optional(MonitoringComponentConfig),
  }).annotate({ identifier: "MonitoringConfig" });

export interface AdditionalIPRangesConfig {
  /** Name of the subnetwork. This can be the full path of the subnetwork or just the name. Example1: my-subnet Example2: projects/gke-project/regions/us-central1/subnetworks/my-subnet */
  subnetwork?: string;
  /** List of secondary ranges names within this subnetwork that can be used for pod IPs. Example1: gke-pod-range1 Example2: gke-pod-range1,gke-pod-range2 */
  podIpv4RangeNames?: ReadonlyArray<string>;
  /** Draining status of the additional subnet. */
  status?: "STATUS_UNSPECIFIED" | "ACTIVE" | "DRAINING" | (string & {});
}

export const AdditionalIPRangesConfig: Schema.Schema<AdditionalIPRangesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnetwork: Schema.optional(Schema.String),
    podIpv4RangeNames: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdditionalIPRangesConfig" });

export interface DesiredAdditionalIPRangesConfig {
  /** List of additional IP ranges configs where each AdditionalIPRangesConfig corresponds to one subnetwork's IP ranges */
  additionalIpRangesConfigs?: ReadonlyArray<AdditionalIPRangesConfig>;
}

export const DesiredAdditionalIPRangesConfig: Schema.Schema<DesiredAdditionalIPRangesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additionalIpRangesConfigs: Schema.optional(
      Schema.Array(AdditionalIPRangesConfig),
    ),
  }).annotate({ identifier: "DesiredAdditionalIPRangesConfig" });

export interface ScheduleUpgradeConfig {
  /** Optional. Whether or not scheduled upgrades are enabled. */
  enabled?: boolean;
}

export const ScheduleUpgradeConfig: Schema.Schema<ScheduleUpgradeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ScheduleUpgradeConfig" });

export interface IdentityServiceConfig {
  /** Whether to enable the Identity Service component */
  enabled?: boolean;
}

export const IdentityServiceConfig: Schema.Schema<IdentityServiceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "IdentityServiceConfig" });

export interface ParentProductConfig {
  /** Name of the parent product associated with the cluster. */
  productName?: string;
  /** Labels contain the configuration of the parent product. */
  labels?: Record<string, string>;
}

export const ParentProductConfig: Schema.Schema<ParentProductConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ParentProductConfig" });

export interface NodePoolUpgradeConcurrencyConfig {
  /** If set, no more than max_count node pools can be upgraded concurrently. */
  maxCount?: string;
}

export const NodePoolUpgradeConcurrencyConfig: Schema.Schema<NodePoolUpgradeConcurrencyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodePoolUpgradeConcurrencyConfig" });

export interface DesiredEnterpriseConfig {
  /** desired_tier specifies the desired tier of the cluster. */
  desiredTier?:
    | "CLUSTER_TIER_UNSPECIFIED"
    | "STANDARD"
    | "ENTERPRISE"
    | (string & {});
}

export const DesiredEnterpriseConfig: Schema.Schema<DesiredEnterpriseConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    desiredTier: Schema.optional(Schema.String),
  }).annotate({ identifier: "DesiredEnterpriseConfig" });

export interface IntraNodeVisibilityConfig {
  /** Enables intra node visibility for this cluster. */
  enabled?: boolean;
}

export const IntraNodeVisibilityConfig: Schema.Schema<IntraNodeVisibilityConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "IntraNodeVisibilityConfig" });

export interface TpuConfig {
  /** Whether to use service networking for Cloud TPU or not. */
  useServiceNetworking?: boolean;
  /** IPv4 CIDR block reserved for Cloud TPU in the VPC. */
  ipv4CidrBlock?: string;
  /** Whether Cloud TPU integration is enabled or not. */
  enabled?: boolean;
}

export const TpuConfig: Schema.Schema<TpuConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    useServiceNetworking: Schema.optional(Schema.Boolean),
    ipv4CidrBlock: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TpuConfig" });

export interface DefaultSnatStatus {
  /** Disables cluster default sNAT rules. */
  disabled?: boolean;
}

export const DefaultSnatStatus: Schema.Schema<DefaultSnatStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DefaultSnatStatus" });

export interface PodAutoscaling {
  /** Selected Horizontal Pod Autoscaling profile. */
  hpaProfile?:
    | "HPA_PROFILE_UNSPECIFIED"
    | "NONE"
    | "PERFORMANCE"
    | (string & {});
}

export const PodAutoscaling: Schema.Schema<PodAutoscaling> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hpaProfile: Schema.optional(Schema.String),
  }).annotate({ identifier: "PodAutoscaling" });

export interface ComplianceStandard {
  /** Name of the compliance standard. */
  standard?: string;
}

export const ComplianceStandard: Schema.Schema<ComplianceStandard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    standard: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComplianceStandard" });

export interface CompliancePostureConfig {
  /** List of enabled compliance standards. */
  complianceStandards?: ReadonlyArray<ComplianceStandard>;
  /** Defines the enablement mode for Compliance Posture. */
  mode?: "MODE_UNSPECIFIED" | "DISABLED" | "ENABLED" | (string & {});
}

export const CompliancePostureConfig: Schema.Schema<CompliancePostureConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    complianceStandards: Schema.optional(Schema.Array(ComplianceStandard)),
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompliancePostureConfig" });

export interface CompatibilityStatus {
  /** Output only. The GKE version that the cluster can be safely downgraded to if the cluster is emulating the previous minor version. It is usually the cluster's previous version before a minor version upgrade. */
  downgradableVersion?: string;
  /** Output only. Last time the control plane became available after a minor version binary upgrade with emulated version set. It indicates the last time the cluster entered the rollback safe mode. */
  emulatedVersionTime?: string;
}

export const CompatibilityStatus: Schema.Schema<CompatibilityStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    downgradableVersion: Schema.optional(Schema.String),
    emulatedVersionTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompatibilityStatus" });

export interface Master {
  /** Output only. The compatibility status of the control plane. It should be empty if the cluster does not have emulated version. */
  compatibilityStatus?: CompatibilityStatus;
}

export const Master: Schema.Schema<Master> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    compatibilityStatus: Schema.optional(CompatibilityStatus),
  }).annotate({ identifier: "Master" });

export interface GkeAutoUpgradeConfig {
  /** PatchMode specifies how auto upgrade patch builds should be selected. */
  patchMode?: "PATCH_MODE_UNSPECIFIED" | "ACCELERATED" | (string & {});
}

export const GkeAutoUpgradeConfig: Schema.Schema<GkeAutoUpgradeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patchMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GkeAutoUpgradeConfig" });

export interface SyncRotationConfig {
  /** Whether the rotation is enabled. */
  enabled?: boolean;
  /** The interval between two consecutive rotations. Default rotation interval is 2 minutes. */
  rotationInterval?: string;
}

export const SyncRotationConfig: Schema.Schema<SyncRotationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    rotationInterval: Schema.optional(Schema.String),
  }).annotate({ identifier: "SyncRotationConfig" });

export interface SecretSyncConfig {
  /** Enable/Disable Secret Sync Config. */
  enabled?: boolean;
  /** Rotation config for secret manager. */
  rotationConfig?: SyncRotationConfig;
}

export const SecretSyncConfig: Schema.Schema<SecretSyncConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    rotationConfig: Schema.optional(SyncRotationConfig),
  }).annotate({ identifier: "SecretSyncConfig" });

export interface CostManagementConfig {
  /** Whether the feature is enabled or not. */
  enabled?: boolean;
}

export const CostManagementConfig: Schema.Schema<CostManagementConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CostManagementConfig" });

export interface ShieldedNodes {
  /** Whether Shielded Nodes features are enabled on all nodes in this cluster. */
  enabled?: boolean;
}

export const ShieldedNodes: Schema.Schema<ShieldedNodes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ShieldedNodes" });

export interface AuthenticatorGroupsConfig {
  /** Whether this cluster should return group membership lookups during authentication using a group of security groups. */
  enabled?: boolean;
  /** The name of the security group-of-groups to be used. Only relevant if enabled = true. */
  securityGroup?: string;
}

export const AuthenticatorGroupsConfig: Schema.Schema<AuthenticatorGroupsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    securityGroup: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthenticatorGroupsConfig" });

export interface OpportunisticMaintenanceStrategy {
  /** The window of time that opportunistic maintenance can run. Example: A setting of 14 days implies that opportunistic maintenance can only be ran in the 2 weeks leading up to the scheduled maintenance date. Setting 28 days allows opportunistic maintenance to run at any time in the scheduled maintenance window (all `PERIODIC` maintenance is set 28 days in advance). */
  maintenanceAvailabilityWindow?: string;
  /** The minimum nodes required to be available in a pool. Blocks maintenance if it would cause the number of running nodes to dip below this value. */
  minNodesPerPool?: string;
  /** The amount of time that a node can remain idle (no customer owned workloads running), before triggering maintenance. */
  nodeIdleTimeWindow?: string;
}

export const OpportunisticMaintenanceStrategy: Schema.Schema<OpportunisticMaintenanceStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maintenanceAvailabilityWindow: Schema.optional(Schema.String),
    minNodesPerPool: Schema.optional(Schema.String),
    nodeIdleTimeWindow: Schema.optional(Schema.String),
  }).annotate({ identifier: "OpportunisticMaintenanceStrategy" });

export interface HostMaintenancePolicy {
  /** Strategy that will trigger maintenance on behalf of the customer. */
  opportunisticMaintenanceStrategy?: OpportunisticMaintenanceStrategy;
  /** Specifies the frequency of planned maintenance events. */
  maintenanceInterval?:
    | "MAINTENANCE_INTERVAL_UNSPECIFIED"
    | "AS_NEEDED"
    | "PERIODIC"
    | (string & {});
}

export const HostMaintenancePolicy: Schema.Schema<HostMaintenancePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    opportunisticMaintenanceStrategy: Schema.optional(
      OpportunisticMaintenanceStrategy,
    ),
    maintenanceInterval: Schema.optional(Schema.String),
  }).annotate({ identifier: "HostMaintenancePolicy" });

export interface PrivilegedAdmissionConfig {
  /** The customer allowlist Cloud Storage paths for the cluster. These paths are used with the `--autopilot-privileged-admission` flag to authorize privileged workloads in Autopilot clusters. Paths can be GKE-owned, in the format `gke:////`, or customer-owned, in the format `gs:///`. Wildcards (`*`) are supported to authorize all allowlists under specific paths or directories. Example: `gs://my-bucket/*` will authorize all allowlists under the `my-bucket` bucket. */
  allowlistPaths?: ReadonlyArray<string>;
}

export const PrivilegedAdmissionConfig: Schema.Schema<PrivilegedAdmissionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowlistPaths: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PrivilegedAdmissionConfig" });

export interface ClusterUpdate {
  /** The desired config of Gateway API on this cluster. */
  desiredGatewayApiConfig?: GatewayAPIConfig;
  /** The desired datapath provider for the cluster. */
  desiredDatapathProvider?:
    | "DATAPATH_PROVIDER_UNSPECIFIED"
    | "LEGACY_DATAPATH"
    | "ADVANCED_DATAPATH"
    | (string & {});
  /** The desired image type for the node pool. NOTE: Set the "desired_node_pool" field as well. */
  desiredImageType?: string;
  /** RBACBindingConfig allows user to restrict ClusterRoleBindings an RoleBindings that can be created. */
  desiredRbacBindingConfig?: RBACBindingConfig;
  /** The desired managed machine learning diagnostics configuration. */
  desiredManagedMachineLearningDiagnosticsConfig?: ManagedMachineLearningDiagnosticsConfig;
  /** The Kubernetes version to change the master to. The only valid value is the latest supported version. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version */
  desiredMasterVersion?: string;
  /** The desired logging configuration. */
  desiredLoggingConfig?: LoggingConfig;
  /** Enable/Disable Secret Manager Config. */
  desiredSecretManagerConfig?: SecretManagerConfig;
  /** The desired user managed keys config for the cluster. */
  desiredUserManagedKeysConfig?: UserManagedKeysConfig;
  /** Enable/Disable Security Posture API features for the cluster. */
  desiredSecurityPostureConfig?: SecurityPostureConfig;
  /** The desired state of IPv6 connectivity to Google Services. */
  desiredPrivateIpv6GoogleAccess?:
    | "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
    | "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED"
    | "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE"
    | "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
    | (string & {});
  /** DNSConfig contains clusterDNS config for this cluster. */
  desiredDnsConfig?: DNSConfig;
  /** The node pool to be upgraded. This field is mandatory if "desired_node_version", "desired_image_family", "desired_node_pool_autoscaling", or "desired_workload_metadata_config" is specified and there is more than one node pool on the cluster. */
  desiredNodePoolId?: string;
  /** Override the default setting of whether future created nodes have private IP addresses only, namely NetworkConfig.default_enable_private_nodes */
  desiredDefaultEnablePrivateNodes?: boolean;
  /** Enable/Disable Cilium Clusterwide Network Policy for the cluster. */
  desiredEnableCiliumClusterwideNetworkPolicy?: boolean;
  /** The desired autopilot cluster policies that to be enforced in the cluster. */
  desiredAutopilotClusterPolicyConfig?: ClusterPolicyConfig;
  /** The desired rollback safe upgrade configuration. */
  desiredRollbackSafeUpgrade?: RollbackSafeUpgrade;
  /** The desired managed open telemetry configuration. */
  desiredManagedOpentelemetryConfig?: ManagedOpenTelemetryConfig;
  /** ServiceExternalIPsConfig specifies the config for the use of Services with ExternalIPs field. */
  desiredServiceExternalIpsConfig?: ServiceExternalIPsConfig;
  /** The desired fleet configuration for the cluster. */
  desiredFleet?: Fleet;
  /** AutoIpamConfig contains all information related to Auto IPAM */
  desiredAutoIpamConfig?: AutoIpamConfig;
  /** WorkloadPolicyConfig is the configuration related to GCW workload policy */
  desiredAutopilotWorkloadPolicyConfig?: WorkloadPolicyConfig;
  /** The desired configuration options for the PodSecurityPolicy feature. */
  desiredPodSecurityPolicyConfig?: PodSecurityPolicyConfig;
  /** The desired private cluster configuration. Has no effect. Use desired_private_cluster_config instead. */
  privateClusterConfig?: PrivateClusterConfig;
  /** Enable/Disable FQDN Network Policy for the cluster. */
  desiredEnableFqdnNetworkPolicy?: boolean;
  /** Configuration of etcd encryption. */
  desiredDatabaseEncryption?: DatabaseEncryption;
  /** The desired network tags that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. */
  desiredNodePoolAutoConfigNetworkTags?: NetworkTags;
  /** Configuration for limiting anonymous access to all endpoints except the health checks. */
  desiredAnonymousAuthenticationConfig?: AnonymousAuthenticationConfig;
  /** Beta APIs enabled for cluster. */
  desiredK8sBetaApis?: K8sBetaAPIConfig;
  /** The desired configuration options for the Binary Authorization feature. */
  desiredBinaryAuthorization?: BinaryAuthorization;
  /** Enable/Disable private endpoint for the cluster's master. Deprecated: Use desired_control_plane_endpoints_config.ip_endpoints_config.enable_public_endpoint instead. Note that the value of enable_public_endpoint is reversed: if enable_private_endpoint is false, then enable_public_endpoint will be true. */
  desiredEnablePrivateEndpoint?: boolean;
  /** The desired GCFS config for the cluster. */
  desiredGcfsConfig?: GcfsConfig;
  /** The desired control plane egress control config for the cluster. */
  desiredControlPlaneEgress?: ControlPlaneEgress;
  /** The desired release channel configuration. */
  desiredReleaseChannel?: ReleaseChannel;
  /** The desired network performance config. */
  desiredNetworkPerformanceConfig?: ClusterNetworkPerformanceConfig;
  /** The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This list must always include the cluster's primary zone. Warning: changing cluster locations will update the locations of all node pools and will result in nodes being added and/or removed. */
  desiredLocations?: ReadonlyArray<string>;
  /** Kubernetes open source beta apis enabled on the cluster. Only beta apis */
  enableK8sBetaApis?: K8sBetaAPIConfig;
  /** The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version */
  desiredNodeVersion?: string;
  /** The current etag of the cluster. If an etag is provided and does not match the current etag of the cluster, update will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** The monitoring service the cluster should use to write metrics. Currently available options: * `monitoring.googleapis.com/kubernetes` - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions. */
  desiredMonitoringService?: string;
  /** Autoscaler configuration for the node pool specified in desired_node_pool_id. If there is only one pool in the cluster and desired_node_pool_id is not provided then the change applies to that single node pool. */
  desiredNodePoolAutoscaling?: NodePoolAutoscaling;
  /** Configurations for the various addons available to run in the cluster. */
  desiredAddonsConfig?: AddonsConfig;
  /** Cluster-level Vertical Pod Autoscaling configuration. */
  desiredVerticalPodAutoscaling?: VerticalPodAutoscaling;
  /** The desired configuration options for master authorized networks feature. Deprecated: Use desired_control_plane_endpoints_config.ip_endpoints_config.authorized_networks_config instead. */
  desiredMasterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
  /** The desired notification configuration. */
  desiredNotificationConfig?: NotificationConfig;
  /** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
  desiredWorkloadCertificates?: WorkloadCertificates;
  /** The desired stack type of the cluster. If a stack type is provided and does not match the current stack type of the cluster, update will attempt to change the stack type to the new type. */
  desiredStackType?:
    | "STACK_TYPE_UNSPECIFIED"
    | "IPV4"
    | "IPV4_IPV6"
    | (string & {});
  /** The desired configuration for exporting resource usage. */
  desiredResourceUsageExportConfig?: ResourceUsageExportConfig;
  /** Enable/Disable Multi-Networking for the cluster */
  desiredEnableMultiNetworking?: boolean;
  /** The desired telemetry integration for the cluster. */
  desiredClusterTelemetry?: ClusterTelemetry;
  /** The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions. */
  desiredLoggingService?: string;
  /** The desired Linux node config for all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. Currently only `cgroup_mode` can be set here. */
  desiredNodePoolAutoConfigLinuxNodeConfig?: LinuxNodeConfig;
  /** The desired node pool logging configuration defaults for the cluster. */
  desiredNodePoolLoggingConfig?: NodePoolLoggingConfig;
  /** Configuration for Workload Identity. */
  desiredWorkloadIdentityConfig?: WorkloadIdentityConfig;
  /** The additional pod ranges to be added to the cluster. These pod ranges can be used by node pools to allocate pod IPs. */
  additionalPodRangesConfig?: AdditionalPodRangesConfig;
  /** Deprecated: Use DesiredSecurityPostureConfig instead. Enable/Disable Protect API features for the cluster. */
  desiredProtectConfig?: ProtectConfig;
  /** Configuration for direct-path (via ALTS) with workload identity. This feature is not officially supported for external customers in Kubernetes Engine when using Workload Identity. */
  desiredWorkloadAltsConfig?: WorkloadALTSConfig;
  /** The Custom keys configuration for the cluster. This field is deprecated. Use ClusterUpdate.desired_user_managed_keys_config instead. */
  userManagedKeysConfig?: UserManagedKeysConfig;
  /** The desired node kubelet config for the cluster. */
  desiredNodeKubeletConfig?: NodeKubeletConfig;
  /** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
  desiredMeshCertificates?: MeshCertificates;
  /** The desired monitoring configuration. */
  desiredMonitoringConfig?: MonitoringConfig;
  /** The desired L4 Internal Load Balancer Subsetting configuration. */
  desiredL4ilbSubsettingConfig?: ILBSubsettingConfig;
  /** The desired node kubelet config for all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. */
  desiredNodePoolAutoConfigKubeletConfig?: NodeKubeletConfig;
  /** The desired config for additional subnetworks attached to the cluster. */
  desiredAdditionalIpRangesConfig?: DesiredAdditionalIPRangesConfig;
  /** The additional pod ranges that are to be removed from the cluster. The pod ranges specified here must have been specified earlier in the 'additional_pod_ranges_config' argument. */
  removedAdditionalPodRangesConfig?: AdditionalPodRangesConfig;
  /** Cluster-level autoscaling configuration. */
  desiredClusterAutoscaling?: ClusterAutoscaling;
  /** Optional. The desired scheduled upgrades configuration for the cluster. */
  desiredScheduleUpgradeConfig?: ScheduleUpgradeConfig;
  /** The desired Identity Service component configuration. */
  desiredIdentityServiceConfig?: IdentityServiceConfig;
  /** The desired parent product config for the cluster. */
  desiredParentProductConfig?: ParentProductConfig;
  /** The desired node pool upgrade concurrency configuration. */
  desiredNodePoolUpgradeConcurrencyConfig?: NodePoolUpgradeConcurrencyConfig;
  /** The desired enterprise configuration for the cluster. Deprecated: GKE Enterprise features are now available without an Enterprise tier. */
  desiredEnterpriseConfig?: DesiredEnterpriseConfig;
  /** The desired config of Intra-node visibility. */
  desiredIntraNodeVisibilityConfig?: IntraNodeVisibilityConfig;
  /** The desired containerd config for the cluster. */
  desiredContainerdConfig?: ContainerdConfig;
  /** The desired Cloud TPU configuration. This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25. */
  desiredTpuConfig?: TpuConfig;
  /** The desired network tier configuration for the cluster. */
  desiredNetworkTierConfig?: NetworkTierConfig;
  /** The desired status of whether to disable default sNAT for this cluster. */
  desiredDefaultSnatStatus?: DefaultSnatStatus;
  /** The desired config for pod autoscaling. */
  desiredPodAutoscaling?: PodAutoscaling;
  /** Deprecated: Compliance Posture is no longer supported. For more details, see https://cloud.google.com/kubernetes-engine/docs/deprecations/posture-management-deprecation. Enable/Disable Compliance Posture features for the cluster. */
  desiredCompliancePostureConfig?: CompliancePostureConfig;
  /** Specify the details of in-transit encryption. Now named inter-node transparent encryption. */
  desiredInTransitEncryptionConfig?:
    | "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED"
    | "IN_TRANSIT_ENCRYPTION_DISABLED"
    | "IN_TRANSIT_ENCRYPTION_INTER_NODE_TRANSPARENT"
    | (string & {});
  /** Control plane endpoints configuration. */
  desiredControlPlaneEndpointsConfig?: ControlPlaneEndpointsConfig;
  /** Configuration for master components. */
  desiredMaster?: Master;
  /** The desired resource manager tags that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. */
  desiredNodePoolAutoConfigResourceManagerTags?: ResourceManagerTags;
  /** Configuration for GKE auto upgrade. */
  gkeAutoUpgradeConfig?: GkeAutoUpgradeConfig;
  /** Configuration for sync Secret Manager secrets as k8s secrets. */
  desiredSecretSyncConfig?: SecretSyncConfig;
  /** The desired configuration for the fine-grained cost management feature. */
  desiredCostManagementConfig?: CostManagementConfig;
  /** Configuration for Shielded Nodes. */
  desiredShieldedNodes?: ShieldedNodes;
  /** AuthenticatorGroupsConfig specifies the config for the cluster security groups settings. */
  desiredAuthenticatorGroupsConfig?: AuthenticatorGroupsConfig;
  /** HostMaintenancePolicy contains the desired maintenance policy for the Google Compute Engine hosts. */
  desiredHostMaintenancePolicy?: HostMaintenancePolicy;
  /** Enable/Disable L4 LB VPC firewall reconciliation for the cluster. */
  desiredDisableL4LbFirewallReconciliation?: boolean;
  /** The desired privileged admission config for the cluster. */
  desiredPrivilegedAdmissionConfig?: PrivilegedAdmissionConfig;
  /** The desired private cluster configuration. master_global_access_config is the only field that can be changed via this field. See also ClusterUpdate.desired_enable_private_endpoint for modifying other fields within PrivateClusterConfig. Deprecated: Use desired_control_plane_endpoints_config.ip_endpoints_config.global_access instead. */
  desiredPrivateClusterConfig?: PrivateClusterConfig;
}

export const ClusterUpdate: Schema.Schema<ClusterUpdate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    desiredGatewayApiConfig: Schema.optional(GatewayAPIConfig),
    desiredDatapathProvider: Schema.optional(Schema.String),
    desiredImageType: Schema.optional(Schema.String),
    desiredRbacBindingConfig: Schema.optional(RBACBindingConfig),
    desiredManagedMachineLearningDiagnosticsConfig: Schema.optional(
      ManagedMachineLearningDiagnosticsConfig,
    ),
    desiredMasterVersion: Schema.optional(Schema.String),
    desiredLoggingConfig: Schema.optional(LoggingConfig),
    desiredSecretManagerConfig: Schema.optional(SecretManagerConfig),
    desiredUserManagedKeysConfig: Schema.optional(UserManagedKeysConfig),
    desiredSecurityPostureConfig: Schema.optional(SecurityPostureConfig),
    desiredPrivateIpv6GoogleAccess: Schema.optional(Schema.String),
    desiredDnsConfig: Schema.optional(DNSConfig),
    desiredNodePoolId: Schema.optional(Schema.String),
    desiredDefaultEnablePrivateNodes: Schema.optional(Schema.Boolean),
    desiredEnableCiliumClusterwideNetworkPolicy: Schema.optional(
      Schema.Boolean,
    ),
    desiredAutopilotClusterPolicyConfig: Schema.optional(ClusterPolicyConfig),
    desiredRollbackSafeUpgrade: Schema.optional(RollbackSafeUpgrade),
    desiredManagedOpentelemetryConfig: Schema.optional(
      ManagedOpenTelemetryConfig,
    ),
    desiredServiceExternalIpsConfig: Schema.optional(ServiceExternalIPsConfig),
    desiredFleet: Schema.optional(Fleet),
    desiredAutoIpamConfig: Schema.optional(AutoIpamConfig),
    desiredAutopilotWorkloadPolicyConfig: Schema.optional(WorkloadPolicyConfig),
    desiredPodSecurityPolicyConfig: Schema.optional(PodSecurityPolicyConfig),
    privateClusterConfig: Schema.optional(PrivateClusterConfig),
    desiredEnableFqdnNetworkPolicy: Schema.optional(Schema.Boolean),
    desiredDatabaseEncryption: Schema.optional(DatabaseEncryption),
    desiredNodePoolAutoConfigNetworkTags: Schema.optional(NetworkTags),
    desiredAnonymousAuthenticationConfig: Schema.optional(
      AnonymousAuthenticationConfig,
    ),
    desiredK8sBetaApis: Schema.optional(K8sBetaAPIConfig),
    desiredBinaryAuthorization: Schema.optional(BinaryAuthorization),
    desiredEnablePrivateEndpoint: Schema.optional(Schema.Boolean),
    desiredGcfsConfig: Schema.optional(GcfsConfig),
    desiredControlPlaneEgress: Schema.optional(ControlPlaneEgress),
    desiredReleaseChannel: Schema.optional(ReleaseChannel),
    desiredNetworkPerformanceConfig: Schema.optional(
      ClusterNetworkPerformanceConfig,
    ),
    desiredLocations: Schema.optional(Schema.Array(Schema.String)),
    enableK8sBetaApis: Schema.optional(K8sBetaAPIConfig),
    desiredNodeVersion: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    desiredMonitoringService: Schema.optional(Schema.String),
    desiredNodePoolAutoscaling: Schema.optional(NodePoolAutoscaling),
    desiredAddonsConfig: Schema.optional(AddonsConfig),
    desiredVerticalPodAutoscaling: Schema.optional(VerticalPodAutoscaling),
    desiredMasterAuthorizedNetworksConfig: Schema.optional(
      MasterAuthorizedNetworksConfig,
    ),
    desiredNotificationConfig: Schema.optional(NotificationConfig),
    desiredWorkloadCertificates: Schema.optional(WorkloadCertificates),
    desiredStackType: Schema.optional(Schema.String),
    desiredResourceUsageExportConfig: Schema.optional(
      ResourceUsageExportConfig,
    ),
    desiredEnableMultiNetworking: Schema.optional(Schema.Boolean),
    desiredClusterTelemetry: Schema.optional(ClusterTelemetry),
    desiredLoggingService: Schema.optional(Schema.String),
    desiredNodePoolAutoConfigLinuxNodeConfig: Schema.optional(LinuxNodeConfig),
    desiredNodePoolLoggingConfig: Schema.optional(NodePoolLoggingConfig),
    desiredWorkloadIdentityConfig: Schema.optional(WorkloadIdentityConfig),
    additionalPodRangesConfig: Schema.optional(AdditionalPodRangesConfig),
    desiredProtectConfig: Schema.optional(ProtectConfig),
    desiredWorkloadAltsConfig: Schema.optional(WorkloadALTSConfig),
    userManagedKeysConfig: Schema.optional(UserManagedKeysConfig),
    desiredNodeKubeletConfig: Schema.optional(NodeKubeletConfig),
    desiredMeshCertificates: Schema.optional(MeshCertificates),
    desiredMonitoringConfig: Schema.optional(MonitoringConfig),
    desiredL4ilbSubsettingConfig: Schema.optional(ILBSubsettingConfig),
    desiredNodePoolAutoConfigKubeletConfig: Schema.optional(NodeKubeletConfig),
    desiredAdditionalIpRangesConfig: Schema.optional(
      DesiredAdditionalIPRangesConfig,
    ),
    removedAdditionalPodRangesConfig: Schema.optional(
      AdditionalPodRangesConfig,
    ),
    desiredClusterAutoscaling: Schema.optional(ClusterAutoscaling),
    desiredScheduleUpgradeConfig: Schema.optional(ScheduleUpgradeConfig),
    desiredIdentityServiceConfig: Schema.optional(IdentityServiceConfig),
    desiredParentProductConfig: Schema.optional(ParentProductConfig),
    desiredNodePoolUpgradeConcurrencyConfig: Schema.optional(
      NodePoolUpgradeConcurrencyConfig,
    ),
    desiredEnterpriseConfig: Schema.optional(DesiredEnterpriseConfig),
    desiredIntraNodeVisibilityConfig: Schema.optional(
      IntraNodeVisibilityConfig,
    ),
    desiredContainerdConfig: Schema.optional(ContainerdConfig),
    desiredTpuConfig: Schema.optional(TpuConfig),
    desiredNetworkTierConfig: Schema.optional(NetworkTierConfig),
    desiredDefaultSnatStatus: Schema.optional(DefaultSnatStatus),
    desiredPodAutoscaling: Schema.optional(PodAutoscaling),
    desiredCompliancePostureConfig: Schema.optional(CompliancePostureConfig),
    desiredInTransitEncryptionConfig: Schema.optional(Schema.String),
    desiredControlPlaneEndpointsConfig: Schema.optional(
      ControlPlaneEndpointsConfig,
    ),
    desiredMaster: Schema.optional(Master),
    desiredNodePoolAutoConfigResourceManagerTags:
      Schema.optional(ResourceManagerTags),
    gkeAutoUpgradeConfig: Schema.optional(GkeAutoUpgradeConfig),
    desiredSecretSyncConfig: Schema.optional(SecretSyncConfig),
    desiredCostManagementConfig: Schema.optional(CostManagementConfig),
    desiredShieldedNodes: Schema.optional(ShieldedNodes),
    desiredAuthenticatorGroupsConfig: Schema.optional(
      AuthenticatorGroupsConfig,
    ),
    desiredHostMaintenancePolicy: Schema.optional(HostMaintenancePolicy),
    desiredDisableL4LbFirewallReconciliation: Schema.optional(Schema.Boolean),
    desiredPrivilegedAdmissionConfig: Schema.optional(
      PrivilegedAdmissionConfig,
    ),
    desiredPrivateClusterConfig: Schema.optional(PrivateClusterConfig),
  }).annotate({ identifier: "ClusterUpdate" });

export interface StatusCondition {
  /** Human-friendly representation of the condition */
  message?: string;
  /** Canonical code of the condition. */
  canonicalCode?:
    | "OK"
    | "CANCELLED"
    | "UNKNOWN"
    | "INVALID_ARGUMENT"
    | "DEADLINE_EXCEEDED"
    | "NOT_FOUND"
    | "ALREADY_EXISTS"
    | "PERMISSION_DENIED"
    | "UNAUTHENTICATED"
    | "RESOURCE_EXHAUSTED"
    | "FAILED_PRECONDITION"
    | "ABORTED"
    | "OUT_OF_RANGE"
    | "UNIMPLEMENTED"
    | "INTERNAL"
    | "UNAVAILABLE"
    | "DATA_LOSS"
    | (string & {});
  /** Machine-friendly representation of the condition Deprecated. Use canonical_code instead. */
  code?:
    | "UNKNOWN"
    | "GCE_STOCKOUT"
    | "GKE_SERVICE_ACCOUNT_DELETED"
    | "GCE_QUOTA_EXCEEDED"
    | "SET_BY_OPERATOR"
    | "CLOUD_KMS_KEY_ERROR"
    | "CA_EXPIRING"
    | "NODE_SERVICE_ACCOUNT_MISSING_PERMISSIONS"
    | "CLOUD_KMS_KEY_DESTROYED"
    | (string & {});
}

export const StatusCondition: Schema.Schema<StatusCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    canonicalCode: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "StatusCondition" });

export interface SandboxConfig {
  /** Type of the sandbox to use for the node (e.g. 'gvisor') */
  sandboxType?: string;
  /** Type of the sandbox to use for the node. */
  type?: "UNSPECIFIED" | "GVISOR" | (string & {});
}

export const SandboxConfig: Schema.Schema<SandboxConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sandboxType: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "SandboxConfig" });

export interface AdvancedMachineFeatures {
  /** Whether or not to enable nested virtualization (defaults to false). */
  enableNestedVirtualization?: boolean;
  /** The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed. */
  threadsPerCore?: string;
  /** Type of Performance Monitoring Unit (PMU) requested on node pool instances. If unset, PMU will not be available to the node. */
  performanceMonitoringUnit?:
    | "PERFORMANCE_MONITORING_UNIT_UNSPECIFIED"
    | "ARCHITECTURAL"
    | "STANDARD"
    | "ENHANCED"
    | (string & {});
}

export const AdvancedMachineFeatures: Schema.Schema<AdvancedMachineFeatures> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableNestedVirtualization: Schema.optional(Schema.Boolean),
    threadsPerCore: Schema.optional(Schema.String),
    performanceMonitoringUnit: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdvancedMachineFeatures" });

export interface SecondaryBootDisk {
  /** Fully-qualified resource ID for an existing disk image. */
  diskImage?: string;
  /** Disk mode (container image cache, etc.) */
  mode?: "MODE_UNSPECIFIED" | "CONTAINER_IMAGE_CACHE" | (string & {});
}

export const SecondaryBootDisk: Schema.Schema<SecondaryBootDisk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskImage: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecondaryBootDisk" });

export interface SecondaryBootDiskUpdateStrategy {}

export const SecondaryBootDiskUpdateStrategy: Schema.Schema<SecondaryBootDiskUpdateStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SecondaryBootDiskUpdateStrategy",
  });

export interface EphemeralStorageConfig {
  /** Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. */
  localSsdCount?: number;
}

export const EphemeralStorageConfig: Schema.Schema<EphemeralStorageConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localSsdCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EphemeralStorageConfig" });

export interface NodeAffinity {
  /** Key for NodeAffinity. */
  key?: string;
  /** Operator for NodeAffinity. */
  operator?: "OPERATOR_UNSPECIFIED" | "IN" | "NOT_IN" | (string & {});
  /** Values for NodeAffinity. */
  values?: ReadonlyArray<string>;
}

export const NodeAffinity: Schema.Schema<NodeAffinity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    operator: Schema.optional(Schema.String),
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "NodeAffinity" });

export interface SoleTenantConfig {
  /** NodeAffinities used to match to a shared sole tenant node group. */
  nodeAffinities?: ReadonlyArray<NodeAffinity>;
  /** Optional. The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node. This field can only be set if the node pool is created in a shared sole-tenant node group. */
  minNodeCpus?: number;
}

export const SoleTenantConfig: Schema.Schema<SoleTenantConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeAffinities: Schema.optional(Schema.Array(NodeAffinity)),
    minNodeCpus: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SoleTenantConfig" });

export interface ReservationAffinity {
  /** Corresponds to the label value(s) of reservation resource(s). */
  values?: ReadonlyArray<string>;
  /** Corresponds to the type of reservation consumption. */
  consumeReservationType?:
    | "UNSPECIFIED"
    | "NO_RESERVATION"
    | "ANY_RESERVATION"
    | "SPECIFIC_RESERVATION"
    | (string & {});
  /** Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify "compute.googleapis.com/reservation-name" as the key and specify the name of your reservation as its value. */
  key?: string;
}

export const ReservationAffinity: Schema.Schema<ReservationAffinity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
    consumeReservationType: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReservationAffinity" });

export interface LocalNvmeSsdBlockConfig {
  /** Number of local NVMe SSDs to use. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. */
  localSsdCount?: number;
}

export const LocalNvmeSsdBlockConfig: Schema.Schema<LocalNvmeSsdBlockConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localSsdCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "LocalNvmeSsdBlockConfig" });

export interface NodeConfig {
  /** HostMaintenancePolicy contains the desired maintenance policy for the Google Compute Engine hosts. */
  hostMaintenancePolicy?: HostMaintenancePolicy;
  /** Whether the nodes are created as preemptible VM instances. See: https://cloud.google.com/compute/docs/instances/preemptible for more information about preemptible VM instances. */
  preemptible?: boolean;
  /** Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB. */
  diskSizeGb?: number;
  /** List of Storage Pools where boot disks are provisioned. */
  storagePools?: ReadonlyArray<string>;
  /** Output only. effective_cgroup_mode is the cgroup mode actually used by the node pool. It is determined by the cgroup mode specified in the LinuxNodeConfig or the default cgroup mode based on the cluster creation version. */
  effectiveCgroupMode?:
    | "EFFECTIVE_CGROUP_MODE_UNSPECIFIED"
    | "EFFECTIVE_CGROUP_MODE_V1"
    | "EFFECTIVE_CGROUP_MODE_V2"
    | (string & {});
  /** Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. */
  spot?: boolean;
  /** The Kubernetes labels (key/value pairs) to apply to each node. The values in this field are added to the set of default labels Kubernetes applies to nodes. This field has the following restrictions: * Labels must use a valid Kubernetes syntax and character set, as defined in https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set. * This field supports up to 1,024 total characters in a single request. Depending on the Kubernetes version, keys in this field might conflict with the keys of the default labels, which might change which of your labels are applied to the nodes. Assume that the behavior is unpredictable and avoid label key conflicts. For more information about the default labels, see: https://kubernetes.io/docs/reference/labels-annotations-taints/ */
  labels?: Record<string, string>;
  /** Sandbox configuration for this node. */
  sandboxConfig?: SandboxConfig;
  /** List of kubernetes taints to be applied to each node. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ */
  taints?: ReadonlyArray<NodeTaint>;
  /** Consolidation delay defines duration after which the Cluster Autoscaler can scale down underutilized nodes. If not set, nodes are scaled down by default behavior, i.e. according to the chosen autoscaling profile. */
  consolidationDelay?: string;
  /** Parameters for the node ephemeral storage using Local SSDs. If unspecified, ephemeral storage is backed by the boot disk. This field is functionally equivalent to the ephemeral_storage_config */
  ephemeralStorageLocalSsdConfig?: EphemeralStorageLocalSsdConfig;
  /** Advanced features for the Compute Engine VM. */
  advancedMachineFeatures?: AdvancedMachineFeatures;
  /** Optional. Reserved for future use. */
  enableConfidentialStorage?: boolean;
  /** Confidential nodes config. All the nodes in the node pool will be Confidential VM once enabled. */
  confidentialNodes?: ConfidentialNodes;
  /** Shielded Instance options. */
  shieldedInstanceConfig?: ShieldedInstanceConfig;
  /** The number of local SSD disks to be attached to the node. The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. */
  localSsdCount?: number;
  /** The metadata key/value pairs assigned to instances in the cluster. Keys must conform to the regexp `[a-zA-Z0-9-_]+` and be less than 128 bytes in length. These are reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: - "cluster-location" - "cluster-name" - "cluster-uid" - "configure-sh" - "containerd-configure-sh" - "enable-oslogin" - "gci-ensure-gke-docker" - "gci-metrics-enabled" - "gci-update-strategy" - "instance-template" - "kube-env" - "startup-script" - "user-data" - "disable-address-manager" - "windows-startup-script-ps1" - "common-psm1" - "k8s-node-setup-psm1" - "install-ssh-psm1" - "user-profile-psm1" Values are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on them is that each value's size must be less than or equal to 32 KB. The total size of all keys and values must be less than 512 KB. */
  metadata?: Record<string, string>;
  /** The image type to use for this node. Note that for a given image type, the latest version of it will be used. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types. */
  imageType?: string;
  /** List of secondary boot disks attached to the nodes. */
  secondaryBootDisks?: ReadonlyArray<SecondaryBootDisk>;
  /** The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption */
  bootDiskKmsKey?: string;
  /** The configuration for GPU Direct */
  gpuDirectConfig?: GPUDirectConfig;
  /** Boot disk configuration for the node pool. */
  bootDisk?: BootDisk;
  /** Flex Start flag for enabling Flex Start VM. */
  flexStart?: boolean;
  /** GCFS (Google Container File System) configs. */
  gcfsConfig?: GcfsConfig;
  /** The resource labels for the node pool to use to annotate any related Google Compute Engine resources. */
  resourceLabels?: Record<string, string>;
  /** Parameters for containerd customization. */
  containerdConfig?: ContainerdConfig;
  /** Specifies which method should be used for encrypting the Local SSDs attached to the node. */
  localSsdEncryptionMode?:
    | "LOCAL_SSD_ENCRYPTION_MODE_UNSPECIFIED"
    | "STANDARD_ENCRYPTION"
    | "EPHEMERAL_KEY_ENCRYPTION"
    | (string & {});
  /** Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard' */
  diskType?: string;
  /** Secondary boot disk update strategy. */
  secondaryBootDiskUpdateStrategy?: SecondaryBootDiskUpdateStrategy;
  /** Enable or disable NCCL fast socket for the node pool. */
  fastSocket?: FastSocket;
  /** Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as `minCpuPlatform: "Intel Haswell"` or `minCpuPlatform: "Intel Sandy Bridge"`. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform). */
  minCpuPlatform?: string;
  /** The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Artifact Registry](https://cloud.google.com/artifact-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added. */
  oauthScopes?: ReadonlyArray<string>;
  /** The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used. */
  serviceAccount?: string;
  /** Parameters that can be configured on Windows nodes. */
  windowsNodeConfig?: WindowsNodeConfig;
  /** Parameters that can be configured on Linux nodes. */
  linuxNodeConfig?: LinuxNodeConfig;
  /** Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. */
  ephemeralStorageConfig?: EphemeralStorageConfig;
  /** Parameters for node pools to be backed by shared sole tenant node groups. */
  soleTenantConfig?: SoleTenantConfig;
  /** A map of resource manager tag keys and values to be attached to the nodes. */
  resourceManagerTags?: ResourceManagerTags;
  /** Optional. The taint configuration for the node pool. */
  taintConfig?: TaintConfig;
  /** The maximum duration for the nodes to exist. If unspecified, the nodes can exist indefinitely. */
  maxRunDuration?: string;
  /** Logging configuration. */
  loggingConfig?: NodePoolLoggingConfig;
  /** The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster or node pool creation. Each tag within the list must comply with RFC1035. */
  tags?: ReadonlyArray<string>;
  /** The optional reservation affinity. Setting this field will apply the specified [Zonal Compute Reservation](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) to this node pool. */
  reservationAffinity?: ReservationAffinity;
  /** The workload metadata configuration for this node. */
  workloadMetadataConfig?: WorkloadMetadataConfig;
  /** Node kubelet configs. */
  kubeletConfig?: NodeKubeletConfig;
  /** Enable or disable gvnic on the node pool. */
  gvnic?: VirtualNIC;
  /** Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes). */
  nodeGroup?: string;
  /** Parameters for using raw-block Local NVMe SSDs. */
  localNvmeSsdBlockConfig?: LocalNvmeSsdBlockConfig;
  /** The name of a Google Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-types). If unspecified, the default machine type is `e2-medium`. */
  machineType?: string;
  /** A list of hardware accelerators to be attached to each node. See https://cloud.google.com/compute/docs/gpus for more information about support for GPUs. */
  accelerators?: ReadonlyArray<AcceleratorConfig>;
}

export const NodeConfig: Schema.Schema<NodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostMaintenancePolicy: Schema.optional(HostMaintenancePolicy),
    preemptible: Schema.optional(Schema.Boolean),
    diskSizeGb: Schema.optional(Schema.Number),
    storagePools: Schema.optional(Schema.Array(Schema.String)),
    effectiveCgroupMode: Schema.optional(Schema.String),
    spot: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sandboxConfig: Schema.optional(SandboxConfig),
    taints: Schema.optional(Schema.Array(NodeTaint)),
    consolidationDelay: Schema.optional(Schema.String),
    ephemeralStorageLocalSsdConfig: Schema.optional(
      EphemeralStorageLocalSsdConfig,
    ),
    advancedMachineFeatures: Schema.optional(AdvancedMachineFeatures),
    enableConfidentialStorage: Schema.optional(Schema.Boolean),
    confidentialNodes: Schema.optional(ConfidentialNodes),
    shieldedInstanceConfig: Schema.optional(ShieldedInstanceConfig),
    localSsdCount: Schema.optional(Schema.Number),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    imageType: Schema.optional(Schema.String),
    secondaryBootDisks: Schema.optional(Schema.Array(SecondaryBootDisk)),
    bootDiskKmsKey: Schema.optional(Schema.String),
    gpuDirectConfig: Schema.optional(GPUDirectConfig),
    bootDisk: Schema.optional(BootDisk),
    flexStart: Schema.optional(Schema.Boolean),
    gcfsConfig: Schema.optional(GcfsConfig),
    resourceLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    containerdConfig: Schema.optional(ContainerdConfig),
    localSsdEncryptionMode: Schema.optional(Schema.String),
    diskType: Schema.optional(Schema.String),
    secondaryBootDiskUpdateStrategy: Schema.optional(
      SecondaryBootDiskUpdateStrategy,
    ),
    fastSocket: Schema.optional(FastSocket),
    minCpuPlatform: Schema.optional(Schema.String),
    oauthScopes: Schema.optional(Schema.Array(Schema.String)),
    serviceAccount: Schema.optional(Schema.String),
    windowsNodeConfig: Schema.optional(WindowsNodeConfig),
    linuxNodeConfig: Schema.optional(LinuxNodeConfig),
    ephemeralStorageConfig: Schema.optional(EphemeralStorageConfig),
    soleTenantConfig: Schema.optional(SoleTenantConfig),
    resourceManagerTags: Schema.optional(ResourceManagerTags),
    taintConfig: Schema.optional(TaintConfig),
    maxRunDuration: Schema.optional(Schema.String),
    loggingConfig: Schema.optional(NodePoolLoggingConfig),
    tags: Schema.optional(Schema.Array(Schema.String)),
    reservationAffinity: Schema.optional(ReservationAffinity),
    workloadMetadataConfig: Schema.optional(WorkloadMetadataConfig),
    kubeletConfig: Schema.optional(NodeKubeletConfig),
    gvnic: Schema.optional(VirtualNIC),
    nodeGroup: Schema.optional(Schema.String),
    localNvmeSsdBlockConfig: Schema.optional(LocalNvmeSsdBlockConfig),
    machineType: Schema.optional(Schema.String),
    accelerators: Schema.optional(Schema.Array(AcceleratorConfig)),
  }).annotate({ identifier: "NodeConfig" });

export interface AutopilotConfig {
  /** Denotes that nodes belonging to this node pool are Autopilot nodes. */
  enabled?: boolean;
}

export const AutopilotConfig: Schema.Schema<AutopilotConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AutopilotConfig" });

export interface BestEffortProvisioning {
  /** When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes */
  enabled?: boolean;
  /** Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved. */
  minProvisionNodes?: number;
}

export const BestEffortProvisioning: Schema.Schema<BestEffortProvisioning> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    minProvisionNodes: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BestEffortProvisioning" });

export interface PlacementPolicy {
  /** The type of placement. */
  type?: "TYPE_UNSPECIFIED" | "COMPACT" | (string & {});
  /** If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned. */
  policyName?: string;
  /** TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies */
  tpuTopology?: string;
}

export const PlacementPolicy: Schema.Schema<PlacementPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    policyName: Schema.optional(Schema.String),
    tpuTopology: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlacementPolicy" });

export interface BlueGreenInfo {
  /** The resource URLs of the [managed instance groups] (/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with green pool. */
  greenInstanceGroupUrls?: ReadonlyArray<string>;
  /** Current blue-green upgrade phase. */
  phase?:
    | "PHASE_UNSPECIFIED"
    | "UPDATE_STARTED"
    | "CREATING_GREEN_POOL"
    | "CORDONING_BLUE_POOL"
    | "WAITING_TO_DRAIN_BLUE_POOL"
    | "DRAINING_BLUE_POOL"
    | "NODE_POOL_SOAKING"
    | "DELETING_BLUE_POOL"
    | "ROLLBACK_STARTED"
    | (string & {});
  /** The resource URLs of the [managed instance groups] (/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with blue pool. */
  blueInstanceGroupUrls?: ReadonlyArray<string>;
  /** Time to start deleting blue pool to complete blue-green upgrade, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  bluePoolDeletionStartTime?: string;
  /** Version of green pool. */
  greenPoolVersion?: string;
}

export const BlueGreenInfo: Schema.Schema<BlueGreenInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    greenInstanceGroupUrls: Schema.optional(Schema.Array(Schema.String)),
    phase: Schema.optional(Schema.String),
    blueInstanceGroupUrls: Schema.optional(Schema.Array(Schema.String)),
    bluePoolDeletionStartTime: Schema.optional(Schema.String),
    greenPoolVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "BlueGreenInfo" });

export interface UpdateInfo {
  /** Information of a blue-green upgrade. */
  blueGreenInfo?: BlueGreenInfo;
}

export const UpdateInfo: Schema.Schema<UpdateInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blueGreenInfo: Schema.optional(BlueGreenInfo),
  }).annotate({ identifier: "UpdateInfo" });

export interface NodePool {
  /** Which conditions caused the current node pool state. */
  conditions?: ReadonlyArray<StatusCondition>;
  /** The name of the node pool. */
  name?: string;
  /** Output only. Server-defined URL for the resource. */
  selfLink?: string;
  /** The node configuration of the pool. */
  config?: NodeConfig;
  /** Specifies the autopilot configuration for this node pool. This field is exclusively reserved for Cluster Autoscaler. */
  autopilotConfig?: AutopilotConfig;
  /** NodeManagement configuration for this NodePool. */
  management?: NodeManagement;
  /** The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool. */
  maxPodsConstraint?: MaxPodsConstraint;
  /** Specifies the configuration of queued provisioning. */
  queuedProvisioning?: QueuedProvisioning;
  /** The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes should be located. If this value is unspecified during node pool creation, the [Cluster.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.FIELDS.locations) value will be used, instead. Warning: changing node pool locations will result in nodes being added and/or removed. */
  locations?: ReadonlyArray<string>;
  /** Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults. */
  networkConfig?: NodeNetworkConfig;
  /** Output only. Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available. */
  statusMessage?: string;
  /** Upgrade settings control disruption and speed of the upgrade. */
  upgradeSettings?: UpgradeSettings;
  /** Enable best effort provisioning for nodes */
  bestEffortProvisioning?: BestEffortProvisioning;
  /** Specifies the node drain configuration for this node pool. */
  nodeDrainConfig?: NodeDrainConfig;
  /** Output only. The resource URLs of the [managed instance groups](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with this node pool. During the node pool blue-green upgrade operation, the URLs contain both blue and green resources. */
  instanceGroupUrls?: ReadonlyArray<string>;
  /** Specifies the node placement policy. */
  placementPolicy?: PlacementPolicy;
  /** The version of Kubernetes running on this NodePool's nodes. If unspecified, it defaults as described [here](https://cloud.google.com/kubernetes-engine/versioning#specifying_node_version). */
  version?: string;
  /** Output only. Update info contains relevant information during a node pool update. */
  updateInfo?: UpdateInfo;
  /** The initial node count for the pool. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. */
  initialNodeCount?: number;
  /** Output only. The status of the nodes in this pool instance. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "PROVISIONING"
    | "RUNNING"
    | "RUNNING_WITH_ERROR"
    | "RECONCILING"
    | "STOPPING"
    | "ERROR"
    | (string & {});
  /** Autoscaler configuration for this NodePool. Autoscaler is enabled only if a valid configuration is present. */
  autoscaling?: NodePoolAutoscaling;
  /** Output only. The pod CIDR block size per node in this node pool. */
  podIpv4CidrSize?: number;
  /** This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const NodePool: Schema.Schema<NodePool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(Schema.Array(StatusCondition)),
    name: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    config: Schema.optional(NodeConfig),
    autopilotConfig: Schema.optional(AutopilotConfig),
    management: Schema.optional(NodeManagement),
    maxPodsConstraint: Schema.optional(MaxPodsConstraint),
    queuedProvisioning: Schema.optional(QueuedProvisioning),
    locations: Schema.optional(Schema.Array(Schema.String)),
    networkConfig: Schema.optional(NodeNetworkConfig),
    statusMessage: Schema.optional(Schema.String),
    upgradeSettings: Schema.optional(UpgradeSettings),
    bestEffortProvisioning: Schema.optional(BestEffortProvisioning),
    nodeDrainConfig: Schema.optional(NodeDrainConfig),
    instanceGroupUrls: Schema.optional(Schema.Array(Schema.String)),
    placementPolicy: Schema.optional(PlacementPolicy),
    version: Schema.optional(Schema.String),
    updateInfo: Schema.optional(UpdateInfo),
    initialNodeCount: Schema.optional(Schema.Number),
    status: Schema.optional(Schema.String),
    autoscaling: Schema.optional(NodePoolAutoscaling),
    podIpv4CidrSize: Schema.optional(Schema.Number),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodePool" });

export interface ListNodePoolsResponse {
  /** A list of node pools for a cluster. */
  nodePools?: ReadonlyArray<NodePool>;
}

export const ListNodePoolsResponse: Schema.Schema<ListNodePoolsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePools: Schema.optional(Schema.Array(NodePool)),
  }).annotate({ identifier: "ListNodePoolsResponse" });

export interface MaintenanceExclusionOptions {
  /** Scope specifies the upgrade scope which upgrades are blocked by the exclusion. */
  scope?:
    | "NO_UPGRADES"
    | "NO_MINOR_UPGRADES"
    | "NO_MINOR_OR_NODE_UPGRADES"
    | (string & {});
  /** EndTimeBehavior specifies the behavior of the exclusion end time. */
  endTimeBehavior?:
    | "END_TIME_BEHAVIOR_UNSPECIFIED"
    | "UNTIL_END_OF_SUPPORT"
    | (string & {});
}

export const MaintenanceExclusionOptions: Schema.Schema<MaintenanceExclusionOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.optional(Schema.String),
    endTimeBehavior: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaintenanceExclusionOptions" });

export interface TimeWindow {
  /** MaintenanceExclusionOptions provides maintenance exclusion related options. */
  maintenanceExclusionOptions?: MaintenanceExclusionOptions;
  /** The time that the window first starts. */
  startTime?: string;
  /** The time that the window ends. The end time should take place after the start time. */
  endTime?: string;
}

export const TimeWindow: Schema.Schema<TimeWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maintenanceExclusionOptions: Schema.optional(MaintenanceExclusionOptions),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeWindow" });

export interface RecurringTimeWindow {
  /** An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window reccurs. They go on for the span of time between the start and end time. For example, to have something repeat every weekday, you'd use: `FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR` To repeat some window daily (equivalent to the DailyMaintenanceWindow): `FREQ=DAILY` For the first weekend of every month: `FREQ=MONTHLY;BYSETPOS=1;BYDAY=SA,SU` This specifies how frequently the window starts. Eg, if you wanted to have a 9-5 UTC-4 window every weekday, you'd use something like: ``` start time = 2019-01-01T09:00:00-0400 end time = 2019-01-01T17:00:00-0400 recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR ``` Windows can span multiple days. Eg, to make the window encompass every weekend from midnight Saturday till the last minute of Sunday UTC: ``` start time = 2019-01-05T00:00:00Z end time = 2019-01-07T23:59:00Z recurrence = FREQ=WEEKLY;BYDAY=SA ``` Note the start and end time's specific dates are largely arbitrary except to specify duration of the window and when it first starts. The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported. */
  recurrence?: string;
  /** The window of the first recurrence. */
  window?: TimeWindow;
}

export const RecurringTimeWindow: Schema.Schema<RecurringTimeWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recurrence: Schema.optional(Schema.String),
    window: Schema.optional(TimeWindow),
  }).annotate({ identifier: "RecurringTimeWindow" });

export interface UpdateClusterRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Required. A description of the update. */
  update?: ClusterUpdate;
  /** The name (project, location, cluster) of the cluster to update. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
}

export const UpdateClusterRequest: Schema.Schema<UpdateClusterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    update: Schema.optional(ClusterUpdate),
    name: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateClusterRequest" });

export interface UpgradeAvailableEvent {
  /** The resource type of the release version. */
  resourceType?:
    | "UPGRADE_RESOURCE_TYPE_UNSPECIFIED"
    | "MASTER"
    | "NODE_POOL"
    | (string & {});
  /** Windows node versions info. */
  windowsVersions?: WindowsVersions;
  /** The release version available for upgrade. */
  version?: string;
  /** The release channel of the version. If empty, it means a non-channel release. */
  releaseChannel?: ReleaseChannel;
  /** Optional relative path to the resource. For example, the relative path of the node pool. */
  resource?: string;
}

export const UpgradeAvailableEvent: Schema.Schema<UpgradeAvailableEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    windowsVersions: Schema.optional(WindowsVersions),
    version: Schema.optional(Schema.String),
    releaseChannel: Schema.optional(ReleaseChannel),
    resource: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeAvailableEvent" });

export interface UpgradeDetails {
  /** Output only. The state of the upgrade. */
  state?:
    | "UNKNOWN"
    | "FAILED"
    | "SUCCEEDED"
    | "CANCELED"
    | "RUNNING"
    | (string & {});
  /** The end timestamp of the upgrade. */
  endTime?: string;
  /** The emulated version after the upgrade. */
  targetEmulatedVersion?: string;
  /** The start timestamp of the upgrade. */
  startTime?: string;
  /** The start type of the upgrade. */
  startType?: "START_TYPE_UNSPECIFIED" | "AUTOMATIC" | "MANUAL" | (string & {});
  /** The emulated version before the upgrade. */
  initialEmulatedVersion?: string;
  /** The version before the upgrade. */
  initialVersion?: string;
  /** The version after the upgrade. */
  targetVersion?: string;
}

export const UpgradeDetails: Schema.Schema<UpgradeDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    targetEmulatedVersion: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    startType: Schema.optional(Schema.String),
    initialEmulatedVersion: Schema.optional(Schema.String),
    initialVersion: Schema.optional(Schema.String),
    targetVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeDetails" });

export interface RollbackSafeUpgradeStatus {
  /** The mode of the rollback-safe upgrade. */
  mode?:
    | "MODE_UNSPECIFIED"
    | "KCP_MINOR_UPGRADE_ROLLBACK_SAFE_MODE"
    | (string & {});
  /** The rollback-safe mode expiration time. */
  controlPlaneUpgradeRollbackEndTime?: string;
  /** The GKE version that the cluster previously used before step-one upgrade. */
  previousVersion?: string;
}

export const RollbackSafeUpgradeStatus: Schema.Schema<RollbackSafeUpgradeStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
    controlPlaneUpgradeRollbackEndTime: Schema.optional(Schema.String),
    previousVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "RollbackSafeUpgradeStatus" });

export interface ClusterUpgradeInfo {
  /** minor_target_version indicates the target version for minor upgrade. */
  minorTargetVersion?: string;
  /** patch_target_version indicates the target version for patch upgrade. */
  patchTargetVersion?: string;
  /** The auto upgrade paused reason. */
  pausedReason?: ReadonlyArray<
    | "AUTO_UPGRADE_PAUSED_REASON_UNSPECIFIED"
    | "MAINTENANCE_WINDOW"
    | "MAINTENANCE_EXCLUSION_NO_UPGRADES"
    | "MAINTENANCE_EXCLUSION_NO_MINOR_UPGRADES"
    | "CLUSTER_DISRUPTION_BUDGET"
    | "CLUSTER_DISRUPTION_BUDGET_MINOR_UPGRADE"
    | "SYSTEM_CONFIG"
    | (string & {})
  >;
  /** The cluster's current minor version's end of standard support timestamp. */
  endOfStandardSupportTimestamp?: string;
  /** The list of past auto upgrades. */
  upgradeDetails?: ReadonlyArray<UpgradeDetails>;
  /** The cluster's rollback-safe upgrade status. */
  rollbackSafeUpgradeStatus?: RollbackSafeUpgradeStatus;
  /** The auto upgrade status. */
  autoUpgradeStatus?: ReadonlyArray<
    | "UNKNOWN"
    | "ACTIVE"
    | "MINOR_UPGRADE_PAUSED"
    | "UPGRADE_PAUSED"
    | (string & {})
  >;
  /** The cluster's current minor version's end of extended support timestamp. */
  endOfExtendedSupportTimestamp?: string;
}

export const ClusterUpgradeInfo: Schema.Schema<ClusterUpgradeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minorTargetVersion: Schema.optional(Schema.String),
    patchTargetVersion: Schema.optional(Schema.String),
    pausedReason: Schema.optional(Schema.Array(Schema.String)),
    endOfStandardSupportTimestamp: Schema.optional(Schema.String),
    upgradeDetails: Schema.optional(Schema.Array(UpgradeDetails)),
    rollbackSafeUpgradeStatus: Schema.optional(RollbackSafeUpgradeStatus),
    autoUpgradeStatus: Schema.optional(Schema.Array(Schema.String)),
    endOfExtendedSupportTimestamp: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterUpgradeInfo" });

export interface SetNodePoolSizeRequest {
  /** Required. The desired node count for the pool. */
  nodeCount?: number;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. */
  nodePoolId?: string;
}

export const SetNodePoolSizeRequest: Schema.Schema<SetNodePoolSizeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeCount: Schema.optional(Schema.Number),
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    nodePoolId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetNodePoolSizeRequest" });

export interface NodeConfigDefaults {
  /** Parameters for containerd customization. */
  containerdConfig?: ContainerdConfig;
  /** HostMaintenancePolicy contains the desired maintenance policy for the Google Compute Engine hosts. */
  hostMaintenancePolicy?: HostMaintenancePolicy;
  /** GCFS (Google Container File System, also known as Riptide) options. */
  gcfsConfig?: GcfsConfig;
  /** NodeKubeletConfig controls the defaults for new node-pools. Currently only `insecure_kubelet_readonly_port_enabled` can be set here. */
  nodeKubeletConfig?: NodeKubeletConfig;
  /** Logging configuration for node pools. */
  loggingConfig?: NodePoolLoggingConfig;
}

export const NodeConfigDefaults: Schema.Schema<NodeConfigDefaults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerdConfig: Schema.optional(ContainerdConfig),
    hostMaintenancePolicy: Schema.optional(HostMaintenancePolicy),
    gcfsConfig: Schema.optional(GcfsConfig),
    nodeKubeletConfig: Schema.optional(NodeKubeletConfig),
    loggingConfig: Schema.optional(NodePoolLoggingConfig),
  }).annotate({ identifier: "NodeConfigDefaults" });

export interface DailyMaintenanceWindow {
  /** Time within the maintenance window to start the maintenance operations. It must be in format "HH:MM", where HH : [00-23] and MM : [00-59] GMT. */
  startTime?: string;
  /** Output only. Duration of the time window, automatically chosen to be smallest possible in the given scenario. */
  duration?: string;
}

export const DailyMaintenanceWindow: Schema.Schema<DailyMaintenanceWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({ identifier: "DailyMaintenanceWindow" });

export interface MaintenanceWindow {
  /** DailyMaintenanceWindow specifies a daily maintenance operation window. */
  dailyMaintenanceWindow?: DailyMaintenanceWindow;
  /** Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows. */
  maintenanceExclusions?: Record<string, TimeWindow>;
  /** RecurringMaintenanceWindow specifies some number of recurring time periods for maintenance to occur. The time windows may be overlapping. If no maintenance windows are set, maintenance can occur at any time. Alternative to RecurringWindow, with renamed fields. */
  recurringMaintenanceWindow?: RecurringMaintenanceWindow;
  /** RecurringWindow specifies some number of recurring time periods for maintenance to occur. The time windows may be overlapping. If no maintenance windows are set, maintenance can occur at any time. */
  recurringWindow?: RecurringTimeWindow;
}

export const MaintenanceWindow: Schema.Schema<MaintenanceWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dailyMaintenanceWindow: Schema.optional(DailyMaintenanceWindow),
    maintenanceExclusions: Schema.optional(
      Schema.Record(Schema.String, TimeWindow),
    ),
    recurringMaintenanceWindow: Schema.optional(RecurringMaintenanceWindow),
    recurringWindow: Schema.optional(RecurringTimeWindow),
  }).annotate({ identifier: "MaintenanceWindow" });

export interface UpgradeEvent {
  /** The current version before the upgrade. */
  currentVersion?: string;
  /** The current emulated version before the upgrade. */
  currentEmulatedVersion?: string;
  /** The target emulated version for the upgrade. */
  targetEmulatedVersion?: string;
  /** Optional relative path to the resource. For example in node pool upgrades, the relative path of the node pool. */
  resource?: string;
  /** The resource type that is upgrading. */
  resourceType?:
    | "UPGRADE_RESOURCE_TYPE_UNSPECIFIED"
    | "MASTER"
    | "NODE_POOL"
    | (string & {});
  /** The target version for the upgrade. */
  targetVersion?: string;
  /** The operation associated with this upgrade. */
  operation?: string;
  /** The time when the operation was started. */
  operationStartTime?: string;
}

export const UpgradeEvent: Schema.Schema<UpgradeEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentVersion: Schema.optional(Schema.String),
    currentEmulatedVersion: Schema.optional(Schema.String),
    targetEmulatedVersion: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    targetVersion: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    operationStartTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeEvent" });

export interface DisruptionBudget {
  /** Optional. The minimum duration between two patch version upgrades of the control plane. */
  patchVersionDisruptionInterval?: string;
  /** Optional. The minimum duration between two minor version upgrades of the control plane. */
  minorVersionDisruptionInterval?: string;
  /** Output only. The last time a minor version upgrade was performed on the control plane. */
  lastMinorVersionDisruptionTime?: string;
  /** Output only. The last time a disruption was performed on the control plane. */
  lastDisruptionTime?: string;
}

export const DisruptionBudget: Schema.Schema<DisruptionBudget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patchVersionDisruptionInterval: Schema.optional(Schema.String),
    minorVersionDisruptionInterval: Schema.optional(Schema.String),
    lastMinorVersionDisruptionTime: Schema.optional(Schema.String),
    lastDisruptionTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DisruptionBudget" });

export interface MaintenancePolicy {
  /** Specifies the maintenance window in which maintenance may be performed. */
  window?: MaintenanceWindow;
  /** A hash identifying the version of this policy, so that updates to fields of the policy won't accidentally undo intermediate changes (and so that users of the API unaware of some fields won't accidentally remove other fields). Make a `get()` request to the cluster to get the current resource version and include it with requests to set the policy. */
  resourceVersion?: string;
  /** Optional. The upgrade disruption budget for the cluster control plane. */
  disruptionBudget?: DisruptionBudget;
}

export const MaintenancePolicy: Schema.Schema<MaintenancePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    window: Schema.optional(MaintenanceWindow),
    resourceVersion: Schema.optional(Schema.String),
    disruptionBudget: Schema.optional(DisruptionBudget),
  }).annotate({ identifier: "MaintenancePolicy" });

export interface DisruptionEvent {
  /** The type of the disruption event. */
  disruptionType?:
    | "DISRUPTION_TYPE_UNSPECIFIED"
    | "POD_NOT_ENOUGH_PDB"
    | "POD_PDB_VIOLATION"
    | (string & {});
  /** The pods whose evictions are blocked by PDB. This field is set for both POD_PDB_VIOLATION and POD_NOT_ENOUGH_PDB event. */
  pdbBlockedPod?: ReadonlyArray<PdbBlockedPod>;
  /** The timeout in seconds for which the node drain is blocked by PDB. After this timeout, pods are forcefully evicted. This field is only populated when event_type is POD_PDB_VIOLATION. */
  pdbViolationTimeout?: string;
  /** The node whose drain is blocked by PDB. This field is set for both POD_PDB_VIOLATION and POD_NOT_ENOUGH_PDB event. */
  pdbBlockedNode?: string;
}

export const DisruptionEvent: Schema.Schema<DisruptionEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disruptionType: Schema.optional(Schema.String),
    pdbBlockedPod: Schema.optional(Schema.Array(PdbBlockedPod)),
    pdbViolationTimeout: Schema.optional(Schema.String),
    pdbBlockedNode: Schema.optional(Schema.String),
  }).annotate({ identifier: "DisruptionEvent" });

export interface HttpCacheControlResponseHeader {
  /** 14.9 request and response directives */
  directive?: string;
  /** 14.6 response cache age, in seconds since the response is generated */
  age?: string;
  /** 14.21 response cache expires, in RFC 1123 date format */
  expires?: string;
}

export const HttpCacheControlResponseHeader: Schema.Schema<HttpCacheControlResponseHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    directive: Schema.optional(Schema.String),
    age: Schema.optional(Schema.String),
    expires: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpCacheControlResponseHeader" });

export interface GetOpenIDConfigResponse {
  /** Supported grant types. */
  grant_types?: ReadonlyArray<string>;
  /** Supported claims. */
  claims_supported?: ReadonlyArray<string>;
  /** For HTTP requests, this field is automatically extracted into the Cache-Control HTTP header. */
  cacheHeader?: HttpCacheControlResponseHeader;
  /** JSON Web Key uri. */
  jwks_uri?: string;
  /** Supported response types. */
  response_types_supported?: ReadonlyArray<string>;
  /** Supported subject types. */
  subject_types_supported?: ReadonlyArray<string>;
  /** OIDC Issuer. */
  issuer?: string;
  /** supported ID Token signing Algorithms. */
  id_token_signing_alg_values_supported?: ReadonlyArray<string>;
}

export const GetOpenIDConfigResponse: Schema.Schema<GetOpenIDConfigResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    grant_types: Schema.optional(Schema.Array(Schema.String)),
    claims_supported: Schema.optional(Schema.Array(Schema.String)),
    cacheHeader: Schema.optional(HttpCacheControlResponseHeader),
    jwks_uri: Schema.optional(Schema.String),
    response_types_supported: Schema.optional(Schema.Array(Schema.String)),
    subject_types_supported: Schema.optional(Schema.Array(Schema.String)),
    issuer: Schema.optional(Schema.String),
    id_token_signing_alg_values_supported: Schema.optional(
      Schema.Array(Schema.String),
    ),
  }).annotate({ identifier: "GetOpenIDConfigResponse" });

export interface ClientCertificateConfig {
  /** Issue a client certificate. */
  issueClientCertificate?: boolean;
}

export const ClientCertificateConfig: Schema.Schema<ClientCertificateConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issueClientCertificate: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ClientCertificateConfig" });

export interface MasterAuth {
  /** The username to use for HTTP basic authentication to the master endpoint. For clusters v1.6.0 and later, basic authentication can be disabled by leaving username unspecified (or setting it to the empty string). Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication */
  username?: string;
  /** Configuration for client certificate authentication on the cluster. For clusters before v1.12, if no configuration is specified, a client certificate is issued. */
  clientCertificateConfig?: ClientCertificateConfig;
  /** Output only. Base64-encoded public certificate that is the root of trust for the cluster. */
  clusterCaCertificate?: string;
  /** The password to use for HTTP basic authentication to the master endpoint. Because the master endpoint is open to the Internet, you should create a strong password. If a password is provided for cluster creation, username must be non-empty. Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication */
  password?: string;
  /** Output only. Base64-encoded private key used by clients to authenticate to the cluster endpoint. */
  clientKey?: string;
  /** Output only. Base64-encoded public certificate used by clients to authenticate to the cluster endpoint. Issued only if client_certificate_config is set. */
  clientCertificate?: string;
}

export const MasterAuth: Schema.Schema<MasterAuth> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    clientCertificateConfig: Schema.optional(ClientCertificateConfig),
    clusterCaCertificate: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    clientKey: Schema.optional(Schema.String),
    clientCertificate: Schema.optional(Schema.String),
  }).annotate({ identifier: "MasterAuth" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface Metric {
  /** Required. Metric name, e.g., "nodes total", "percent done". */
  name?: string;
  /** For metrics with custom values (ratios, visual progress, etc.). */
  stringValue?: string;
  /** For metrics with integer value. */
  intValue?: string;
  /** For metrics with floating point value. */
  doubleValue?: number;
}

export const Metric: Schema.Schema<Metric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    stringValue: Schema.optional(Schema.String),
    intValue: Schema.optional(Schema.String),
    doubleValue: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Metric" });

export interface OperationProgress {
  /** Status of an operation stage. Unset for single-stage operations. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "DONE"
    | "ABORTING"
    | (string & {});
  /** Substages of an operation or a stage. */
  stages?: ReadonlyArray<OperationProgress>;
  /** A non-parameterized string describing an operation stage. Unset for single-stage operations. */
  name?: string;
  /** Progress metric bundle, for example: metrics: [{name: "nodes done", int_value: 15}, {name: "nodes total", int_value: 32}] or metrics: [{name: "progress", double_value: 0.56}, {name: "progress scale", double_value: 1.0}] */
  metrics?: ReadonlyArray<Metric>;
}

export const OperationProgress: Schema.Schema<OperationProgress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      status: Schema.optional(Schema.String),
      stages: Schema.optional(Schema.Array(OperationProgress)),
      name: Schema.optional(Schema.String),
      metrics: Schema.optional(Schema.Array(Metric)),
    }),
  ).annotate({
    identifier: "OperationProgress",
  }) as any as Schema.Schema<OperationProgress>;

export interface Operation {
  /** Output only. The server-assigned ID for the operation. */
  name?: string;
  /** Output only. Server-defined URI for the operation. Example: `https://container.googleapis.com/v1alpha1/projects/123/locations/us-central1/operations/operation-123`. */
  selfLink?: string;
  /** Output only. Server-defined URI for the target of the operation. The format of this is a URI to the resource being modified (such as a cluster, node pool, or node). For node pool repairs, there may be multiple nodes being repaired, but only one will be the target. Examples: - ## `https://container.googleapis.com/v1/projects/123/locations/us-central1/clusters/my-cluster` ## `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np` `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np/node/my-node` */
  targetLink?: string;
  /** Which conditions caused the current node pool state. Deprecated. Use field error instead. */
  nodepoolConditions?: ReadonlyArray<StatusCondition>;
  /** The error result of the operation in case of failure. */
  error?: Status;
  /** Output only. The time the operation completed, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  endTime?: string;
  /** Output only. The operation type. */
  operationType?:
    | "TYPE_UNSPECIFIED"
    | "CREATE_CLUSTER"
    | "DELETE_CLUSTER"
    | "UPGRADE_MASTER"
    | "UPGRADE_NODES"
    | "REPAIR_CLUSTER"
    | "UPDATE_CLUSTER"
    | "CREATE_NODE_POOL"
    | "DELETE_NODE_POOL"
    | "SET_NODE_POOL_MANAGEMENT"
    | "AUTO_REPAIR_NODES"
    | "AUTO_UPGRADE_NODES"
    | "SET_LABELS"
    | "SET_MASTER_AUTH"
    | "SET_NODE_POOL_SIZE"
    | "SET_NETWORK_POLICY"
    | "SET_MAINTENANCE_POLICY"
    | "RESIZE_CLUSTER"
    | "FLEET_FEATURE_UPGRADE"
    | (string & {});
  /** Output only. If an error has occurred, a textual description of the error. Deprecated. Use field error instead. */
  statusMessage?: string;
  /** Output only. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides. */
  location?: string;
  /** Output only. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation is taking place. This field is deprecated, use location instead. */
  zone?: string;
  /** Output only. The current status of the operation. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "DONE"
    | "ABORTING"
    | (string & {});
  /** Output only. Detailed operation progress, if available. */
  detail?: string;
  /** Output only. The time the operation started, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  startTime?: string;
  /** Which conditions caused the current cluster state. Deprecated. Use field error instead. */
  clusterConditions?: ReadonlyArray<StatusCondition>;
  /** Output only. Progress information for an operation. */
  progress?: OperationProgress;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    targetLink: Schema.optional(Schema.String),
    nodepoolConditions: Schema.optional(Schema.Array(StatusCondition)),
    error: Schema.optional(Status),
    endTime: Schema.optional(Schema.String),
    operationType: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    clusterConditions: Schema.optional(Schema.Array(StatusCondition)),
    progress: Schema.optional(OperationProgress),
  }).annotate({ identifier: "Operation" });

export interface CreateNodePoolRequest {
  /** Required. The node pool to create. */
  nodePool?: NodePool;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
  zone?: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field. */
  clusterId?: string;
  /** The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/* /locations/* /clusters/*`. */
  parent?: string;
}

export const CreateNodePoolRequest: Schema.Schema<CreateNodePoolRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePool: Schema.optional(NodePool),
    projectId: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateNodePoolRequest" });

export interface NetworkConfig {
  /** Whether the cluster disables default in-node sNAT rules. In-node sNAT rules will be disabled when default_snat_status is disabled. When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic. */
  defaultSnatStatus?: DefaultSnatStatus;
  /** GatewayAPIConfig contains the desired config of Gateway API on this cluster. */
  gatewayApiConfig?: GatewayAPIConfig;
  /** Whether multi-networking is enabled for this cluster. */
  enableMultiNetworking?: boolean;
  /** Controls whether by default nodes have private IP addresses only. It is invalid to specify both PrivateClusterConfig.enablePrivateNodes and this field at the same time. To update the default setting, use ClusterUpdate.desired_default_enable_private_nodes */
  defaultEnablePrivateNodes?: boolean;
  /** Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network. */
  enableIntraNodeVisibility?: boolean;
  /** Output only. The relative name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/vpc) to which the cluster is connected. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet */
  subnetwork?: string;
  /** DNSConfig contains clusterDNS config for this cluster. */
  dnsConfig?: DNSConfig;
  /** Disable L4 load balancer VPC firewalls to enable firewall policies. */
  disableL4LbFirewallReconciliation?: boolean;
  /** Output only. The relative name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. Example: projects/my-project/global/networks/my-network */
  network?: string;
  /** Specify the details of in-transit encryption. */
  inTransitEncryptionConfig?:
    | "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED"
    | "IN_TRANSIT_ENCRYPTION_DISABLED"
    | "IN_TRANSIT_ENCRYPTION_INTER_NODE_TRANSPARENT"
    | (string & {});
  /** Whether L4ILB Subsetting is enabled for this cluster. */
  enableL4ilbSubsetting?: boolean;
  /** The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation. */
  datapathProvider?:
    | "DATAPATH_PROVIDER_UNSPECIFIED"
    | "LEGACY_DATAPATH"
    | "ADVANCED_DATAPATH"
    | (string & {});
  /** Network bandwidth tier configuration. */
  networkPerformanceConfig?: ClusterNetworkPerformanceConfig;
  /** The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4) */
  privateIpv6GoogleAccess?:
    | "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
    | "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED"
    | "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE"
    | "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
    | (string & {});
  /** Whether CiliumClusterWideNetworkPolicy is enabled on this cluster. */
  enableCiliumClusterwideNetworkPolicy?: boolean;
  /** Whether FQDN Network Policy is enabled on this cluster. */
  enableFqdnNetworkPolicy?: boolean;
  /** ServiceExternalIPsConfig specifies if services with externalIPs field are blocked or not. */
  serviceExternalIpsConfig?: ServiceExternalIPsConfig;
}

export const NetworkConfig: Schema.Schema<NetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultSnatStatus: Schema.optional(DefaultSnatStatus),
    gatewayApiConfig: Schema.optional(GatewayAPIConfig),
    enableMultiNetworking: Schema.optional(Schema.Boolean),
    defaultEnablePrivateNodes: Schema.optional(Schema.Boolean),
    enableIntraNodeVisibility: Schema.optional(Schema.Boolean),
    subnetwork: Schema.optional(Schema.String),
    dnsConfig: Schema.optional(DNSConfig),
    disableL4LbFirewallReconciliation: Schema.optional(Schema.Boolean),
    network: Schema.optional(Schema.String),
    inTransitEncryptionConfig: Schema.optional(Schema.String),
    enableL4ilbSubsetting: Schema.optional(Schema.Boolean),
    datapathProvider: Schema.optional(Schema.String),
    networkPerformanceConfig: Schema.optional(ClusterNetworkPerformanceConfig),
    privateIpv6GoogleAccess: Schema.optional(Schema.String),
    enableCiliumClusterwideNetworkPolicy: Schema.optional(Schema.Boolean),
    enableFqdnNetworkPolicy: Schema.optional(Schema.Boolean),
    serviceExternalIpsConfig: Schema.optional(ServiceExternalIPsConfig),
  }).annotate({ identifier: "NetworkConfig" });

export interface LegacyAbac {
  /** Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM. */
  enabled?: boolean;
}

export const LegacyAbac: Schema.Schema<LegacyAbac> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LegacyAbac" });

export interface IPAllocationPolicy {
  /** This field is deprecated, use cluster_ipv4_cidr_block. */
  clusterIpv4Cidr?: string;
  /** The name of the secondary range to be used for the cluster CIDR block. The secondary range will be used for pod IP addresses. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false. */
  clusterSecondaryRangeName?: string;
  /** The name of the secondary range to be used as for the services CIDR block. The secondary range will be used for service ClusterIPs. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false. */
  servicesSecondaryRangeName?: string;
  /** This field is deprecated, use services_ipv4_cidr_block. */
  servicesIpv4Cidr?: string;
  /** If true, allow allocation of cluster CIDR ranges that overlap with certain kinds of network routes. By default we do not allow cluster CIDR ranges to intersect with any user declared routes. With allow_route_overlap == true, we allow overlapping with CIDR ranges that are larger than the cluster CIDR range. If this field is set to true, then cluster and services CIDRs must be fully-specified (e.g. `10.96.0.0/14`, but not `/14`), which means: 1) When `use_ip_aliases` is true, `cluster_ipv4_cidr_block` and `services_ipv4_cidr_block` must be fully-specified. 2) When `use_ip_aliases` is false, `cluster.cluster_ipv4_cidr` muse be fully-specified. */
  allowRouteOverlap?: boolean;
  /** Output only. The utilization of the cluster default IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage=numNodes*numZones*podIPsPerNode. */
  defaultPodIpv4RangeUtilization?: number;
  /** Output only. The additional IP ranges that are added to the cluster. These IP ranges can be used by new node pools to allocate node and pod IPs automatically. Each AdditionalIPRangesConfig corresponds to a single subnetwork. Once a range is removed it will not show up in IPAllocationPolicy. */
  additionalIpRangesConfigs?: ReadonlyArray<AdditionalIPRangesConfig>;
  /** The IP address range of the Cloud TPUs in this cluster. If unspecified, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. If unspecified, the range will use the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. This field is deprecated, use cluster.tpu_config.ipv4_cidr_block instead. */
  tpuIpv4CidrBlock?: string;
  /** The ipv6 access type (internal or external) when create_subnetwork is true */
  ipv6AccessType?:
    | "IPV6_ACCESS_TYPE_UNSPECIFIED"
    | "INTERNAL"
    | "EXTERNAL"
    | (string & {});
  /** [PRIVATE FIELD] Pod CIDR size overprovisioning config for the cluster. Pod CIDR size per node depends on max_pods_per_node. By default, the value of max_pods_per_node is doubled and then rounded off to next power of 2 to get the size of pod CIDR block per node. Example: max_pods_per_node of 30 would result in 64 IPs (/26). This config can disable the doubling of IPs (we still round off to next power of 2) Example: max_pods_per_node of 30 will result in 32 IPs (/27) when overprovisioning is disabled. */
  podCidrOverprovisionConfig?: PodCIDROverprovisionConfig;
  /** The IP address range for the cluster pod IPs. If this field is set, then `cluster.cluster_ipv4_cidr` must be left blank. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. */
  clusterIpv4CidrBlock?: string;
  /** The IP address range of the instance IPs in this cluster. This is applicable only if `create_subnetwork` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. */
  nodeIpv4CidrBlock?: string;
  /** IP stack type */
  stackType?: "STACK_TYPE_UNSPECIFIED" | "IPV4" | "IPV4_IPV6" | (string & {});
  /** Whether alias IPs will be used for pod IPs in the cluster. This is used in conjunction with use_routes. It cannot be true if use_routes is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode */
  useIpAliases?: boolean;
  /** The IP address range of the services IPs in this cluster. If blank, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. */
  servicesIpv4CidrBlock?: string;
  /** Whether routes will be used for pod IPs in the cluster. This is used in conjunction with use_ip_aliases. It cannot be true if use_ip_aliases is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode */
  useRoutes?: boolean;
  /** Output only. The subnet's IPv6 CIDR block used by nodes and pods. */
  subnetIpv6CidrBlock?: string;
  /** Output only. The additional pod ranges that are added to the cluster. These pod ranges can be used by new node pools to allocate pod IPs automatically. Once the range is removed it will not show up in IPAllocationPolicy. */
  additionalPodRangesConfig?: AdditionalPodRangesConfig;
  /** Optional. AutoIpamConfig contains all information related to Auto IPAM */
  autoIpamConfig?: AutoIpamConfig;
  /** Output only. The services IPv6 CIDR block for the cluster. */
  servicesIpv6CidrBlock?: string;
  /** A custom subnetwork name to be used if `create_subnetwork` is true. If this field is empty, then an automatic name will be chosen for the new subnetwork. */
  subnetworkName?: string;
  /** Cluster-level network tier configuration is used to determine the default network tier for external IP addresses on cluster resources, such as node pools and load balancers. */
  networkTierConfig?: NetworkTierConfig;
  /** Whether a new subnetwork will be created automatically for the cluster. This field is only applicable when `use_ip_aliases` is true. */
  createSubnetwork?: boolean;
  /** This field is deprecated, use node_ipv4_cidr_block. */
  nodeIpv4Cidr?: string;
}

export const IPAllocationPolicy: Schema.Schema<IPAllocationPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterIpv4Cidr: Schema.optional(Schema.String),
    clusterSecondaryRangeName: Schema.optional(Schema.String),
    servicesSecondaryRangeName: Schema.optional(Schema.String),
    servicesIpv4Cidr: Schema.optional(Schema.String),
    allowRouteOverlap: Schema.optional(Schema.Boolean),
    defaultPodIpv4RangeUtilization: Schema.optional(Schema.Number),
    additionalIpRangesConfigs: Schema.optional(
      Schema.Array(AdditionalIPRangesConfig),
    ),
    tpuIpv4CidrBlock: Schema.optional(Schema.String),
    ipv6AccessType: Schema.optional(Schema.String),
    podCidrOverprovisionConfig: Schema.optional(PodCIDROverprovisionConfig),
    clusterIpv4CidrBlock: Schema.optional(Schema.String),
    nodeIpv4CidrBlock: Schema.optional(Schema.String),
    stackType: Schema.optional(Schema.String),
    useIpAliases: Schema.optional(Schema.Boolean),
    servicesIpv4CidrBlock: Schema.optional(Schema.String),
    useRoutes: Schema.optional(Schema.Boolean),
    subnetIpv6CidrBlock: Schema.optional(Schema.String),
    additionalPodRangesConfig: Schema.optional(AdditionalPodRangesConfig),
    autoIpamConfig: Schema.optional(AutoIpamConfig),
    servicesIpv6CidrBlock: Schema.optional(Schema.String),
    subnetworkName: Schema.optional(Schema.String),
    networkTierConfig: Schema.optional(NetworkTierConfig),
    createSubnetwork: Schema.optional(Schema.Boolean),
    nodeIpv4Cidr: Schema.optional(Schema.String),
  }).annotate({ identifier: "IPAllocationPolicy" });

export interface NodePoolDefaults {
  /** Subset of NodeConfig message that has defaults. */
  nodeConfigDefaults?: NodeConfigDefaults;
}

export const NodePoolDefaults: Schema.Schema<NodePoolDefaults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeConfigDefaults: Schema.optional(NodeConfigDefaults),
  }).annotate({ identifier: "NodePoolDefaults" });

export interface AutopilotConversionStatus {
  /** Output only. The current state of the conversion. */
  state?: "STATE_UNSPECIFIED" | "DONE" | (string & {});
}

export const AutopilotConversionStatus: Schema.Schema<AutopilotConversionStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutopilotConversionStatus" });

export interface Autopilot {
  /** PrivilegedAdmissionConfig is the configuration related to privileged admission control. */
  privilegedAdmissionConfig?: PrivilegedAdmissionConfig;
  /** Output only. ConversionStatus shows conversion status. */
  conversionStatus?: AutopilotConversionStatus;
  /** ClusterPolicyConfig denotes cluster level policies that are enforced for the cluster. */
  clusterPolicyConfig?: ClusterPolicyConfig;
  /** Enable Autopilot */
  enabled?: boolean;
  /** WorkloadPolicyConfig is the configuration related to GCW workload policy */
  workloadPolicyConfig?: WorkloadPolicyConfig;
}

export const Autopilot: Schema.Schema<Autopilot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privilegedAdmissionConfig: Schema.optional(PrivilegedAdmissionConfig),
    conversionStatus: Schema.optional(AutopilotConversionStatus),
    clusterPolicyConfig: Schema.optional(ClusterPolicyConfig),
    enabled: Schema.optional(Schema.Boolean),
    workloadPolicyConfig: Schema.optional(WorkloadPolicyConfig),
  }).annotate({ identifier: "Autopilot" });

export interface NetworkPolicy {
  /** The selected network policy provider. */
  provider?: "PROVIDER_UNSPECIFIED" | "CALICO" | (string & {});
  /** Whether network policy is enabled on the cluster. */
  enabled?: boolean;
}

export const NetworkPolicy: Schema.Schema<NetworkPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "NetworkPolicy" });

export interface Cluster {
  /** Optional. Deprecated: Compliance Posture is no longer supported. For more details, see https://cloud.google.com/kubernetes-engine/docs/deprecations/posture-management-deprecation. Enable/Disable Compliance Posture features for the cluster. */
  compliancePostureConfig?: CompliancePostureConfig;
  /** Cluster-level Vertical Pod Autoscaling configuration. */
  verticalPodAutoscaling?: VerticalPodAutoscaling;
  /** The configuration options for master authorized networks feature. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.authorized_networks_config instead. */
  masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
  /** Configuration controlling RBAC group membership information. */
  authenticatorGroupsConfig?: AuthenticatorGroupsConfig;
  /** Output only. The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information. */
  endpoint?: string;
  /** Configuration for the PodSecurityPolicy feature. */
  podSecurityPolicyConfig?: PodSecurityPolicyConfig;
  /** Output only. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides. */
  location?: string;
  /** Configuration of Confidential Nodes. All the nodes in the cluster will be Confidential VM once enabled. */
  confidentialNodes?: ConfidentialNodes;
  /** Optional. Configuration for scheduled upgrades. */
  scheduleUpgradeConfig?: ScheduleUpgradeConfig;
  /** The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected. On output this shows the subnetwork ID instead of the name. */
  subnetwork?: string;
  /** The Custom keys configuration for the cluster. */
  userManagedKeysConfig?: UserManagedKeysConfig;
  /** Configuration for limiting anonymous access to all endpoints except the health checks. */
  anonymousAuthenticationConfig?: AnonymousAuthenticationConfig;
  /** Configure the maintenance policy for this cluster. */
  maintenancePolicy?: MaintenancePolicy;
  /** Secret CSI driver configuration. */
  secretManagerConfig?: SecretManagerConfig;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. The current software version of the master endpoint. */
  currentMasterVersion?: string;
  /** The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster. Only honored if cluster created with IP Alias support. */
  defaultMaxPodsConstraint?: MaxPodsConstraint;
  /** Output only. The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information. */
  currentNodeCount?: number;
  /** GKE Enterprise Configuration. Deprecated: GKE Enterprise features are now available without an Enterprise tier. */
  enterpriseConfig?: EnterpriseConfig;
  /** Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1beta1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation. */
  enableKubernetesAlpha?: boolean;
  /** Output only. The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createTime?: string;
  /** Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. */
  nodePoolAutoConfig?: NodePoolAutoConfig;
  /** Enable the ability to use Cloud TPUs in this cluster. This field is deprecated, use tpu_config.enabled instead. This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25. */
  enableTpu?: boolean;
  /** An optional description of this cluster. */
  description?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** The node pool upgrade concurrency config of the cluster. This field is used for auto upgrade. */
  nodePoolUpgradeConcurrencyConfig?: NodePoolUpgradeConcurrencyConfig;
  /** Optional. Enable/Disable Security Posture API features for the cluster. */
  securityPostureConfig?: SecurityPostureConfig;
  /** Configuration for control plane egress control. */
  controlPlaneEgress?: ControlPlaneEgress;
  /** Configuration for cluster networking. */
  networkConfig?: NetworkConfig;
  /** The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead. */
  initialNodeCount?: number;
  /** Cluster-level autoscaling configuration. */
  autoscaling?: ClusterAutoscaling;
  /** Configuration for Cloud TPU support; This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25. */
  tpuConfig?: TpuConfig;
  /** Configuration for GKE auto upgrades. */
  gkeAutoUpgradeConfig?: GkeAutoUpgradeConfig;
  /** Configuration for master components. */
  master?: Master;
  /** Deprecated: Use SecurityPostureConfig instead. Enable/Disable Protect API features for the cluster. */
  protectConfig?: ProtectConfig;
  /** The IP address range of the container pods in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`. */
  clusterIpv4Cidr?: string;
  /** Configuration for the use of Kubernetes Service Accounts in IAM policies. */
  workloadIdentityConfig?: WorkloadIdentityConfig;
  /** Output only. Deprecated. Use node_pools.instance_group_urls. */
  instanceGroupUrls?: ReadonlyArray<string>;
  /** Configuration for managed machine learning diagnostics. */
  managedMachineLearningDiagnosticsConfig?: ManagedMachineLearningDiagnosticsConfig;
  /** Output only. Server-defined URL for the resource. */
  selfLink?: string;
  /** The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter. */
  name?: string;
  /** The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version */
  initialClusterVersion?: string;
  /** Configuration for all cluster's control plane endpoints. */
  controlPlaneEndpointsConfig?: ControlPlaneEndpointsConfig;
  /** The IP prefix in CIDR notation to use for the hosted master network. This prefix will be used for assigning private IP addresses to the master or set of masters, as well as the ILB VIP. This field is deprecated, use private_cluster_config.master_ipv4_cidr_block instead. */
  masterIpv4CidrBlock?: string;
  /** Notification configuration of the cluster. */
  notificationConfig?: NotificationConfig;
  /** The monitoring service the cluster should use to write metrics. Currently available options: * `monitoring.googleapis.com/kubernetes` - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions. */
  monitoringService?: string;
  /** The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions. */
  loggingService?: string;
  /** Configuration for the legacy ABAC authorization mode. */
  legacyAbac?: LegacyAbac;
  /** Output only. Deprecated, use [NodePool.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes. */
  currentNodeVersion?: string;
  /** Output only. The IP address range of the Cloud TPUs in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25. */
  tpuIpv4CidrBlock?: string;
  /** The fingerprint of the set of labels for this cluster. */
  labelFingerprint?: string;
  /** Configuration for direct-path (via ALTS) with workload identity. This feature is not officially supported for external customers in Kubernetes Engine when using Workload Identity. */
  workloadAltsConfig?: WorkloadALTSConfig;
  /** Output only. Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available. */
  statusMessage?: string;
  /** Configuration for the fine-grained cost management feature. */
  costManagementConfig?: CostManagementConfig;
  /** The config for pod autoscaling. */
  podAutoscaling?: PodAutoscaling;
  /** Configuration for exporting resource usages. Resource usage export is disabled when this config unspecified. */
  resourceUsageExportConfig?: ResourceUsageExportConfig;
  /** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
  meshCertificates?: MeshCertificates;
  /** Configurations for the various addons available to run in the cluster. */
  addonsConfig?: AddonsConfig;
  /** Telemetry integration for the cluster. */
  clusterTelemetry?: ClusterTelemetry;
  /** Release channel configuration. If left unspecified on cluster creation and a version is specified, the cluster is enrolled in the most mature release channel where the version is available (first checking STABLE, then REGULAR, and finally RAPID). Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version. */
  releaseChannel?: ReleaseChannel;
  /** The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified. */
  nodePools?: ReadonlyArray<NodePool>;
  /** RBACBindingConfig allows user to restrict ClusterRoleBindings an RoleBindings that can be created. */
  rbacBindingConfig?: RBACBindingConfig;
  /** The authentication information for accessing the master endpoint. If unspecified, the defaults are used: For clusters before v1.12, if master_auth is unspecified, `username` will be set to "admin", a random password will be generated, and a client certificate will be issued. */
  masterAuth?: MasterAuth;
  /** The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed. */
  locations?: ReadonlyArray<string>;
  /** Configuration for cluster IP allocation. */
  ipAllocationPolicy?: IPAllocationPolicy;
  /** Output only. Unique id for the cluster. */
  id?: string;
  /** Configuration for Identity Service component. */
  identityServiceConfig?: IdentityServiceConfig;
  /** Output only. The current emulated version of the master endpoint. The version is in minor version format, e.g. 1.30. No value or empty string means the cluster has no emulated version. */
  currentEmulatedVersion?: string;
  /** The resource labels for the cluster to use to annotate any related Google Compute Engine resources. */
  resourceLabels?: Record<string, string>;
  /** If this is a private cluster setup. Private clusters are clusters that, by default have no external IP addresses on the nodes and where nodes and the master communicate over private IP addresses. This field is deprecated, use private_cluster_config.enable_private_nodes instead. */
  privateCluster?: boolean;
  /** Monitoring configuration for the cluster. */
  monitoringConfig?: MonitoringConfig;
  /** The configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of the GKE cluster and take the ownership of the cluster. */
  parentProductConfig?: ParentProductConfig;
  /** This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The current status of this cluster. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "PROVISIONING"
    | "RUNNING"
    | "RECONCILING"
    | "STOPPING"
    | "ERROR"
    | "DEGRADED"
    | (string & {});
  /** Output only. The IP address range of the Kubernetes services in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR. */
  servicesIpv4Cidr?: string;
  /** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
  workloadCertificates?: WorkloadCertificates;
  /** Output only. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead. */
  zone?: string;
  /** Configuration of etcd encryption. */
  databaseEncryption?: DatabaseEncryption;
  /** Configuration for Managed OpenTelemetry pipeline. */
  managedOpentelemetryConfig?: ManagedOpenTelemetryConfig;
  /** Kubernetes open source beta apis enabled on the cluster. Only beta apis. */
  enableK8sBetaApis?: K8sBetaAPIConfig;
  /** Parameters used in creating the cluster's nodes. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "initial_node_count") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. For responses, this field will be populated with the node configuration of the first node pool. (For configuration of each node pool, see `node_pool.config`) If unspecified, the defaults are used. This field is deprecated, use node_pool.config instead. */
  nodeConfig?: NodeConfig;
  /** The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used. On output this shows the network ID instead of the name. */
  network?: string;
  /** Configuration for Binary Authorization. */
  binaryAuthorization?: BinaryAuthorization;
  /** Output only. The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  expireTime?: string;
  /** Output only. The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode. */
  nodeIpv4CidrSize?: number;
  /** Which conditions caused the current cluster state. */
  conditions?: ReadonlyArray<StatusCondition>;
  /** Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object. */
  nodePoolDefaults?: NodePoolDefaults;
  /** The list of user specified Kubernetes feature gates. Each string represents the activation status of a feature gate (e.g. "featureX=true" or "featureX=false") */
  alphaClusterFeatureGates?: ReadonlyArray<string>;
  /** Autopilot configuration for the cluster. */
  autopilot?: Autopilot;
  /** Configuration for private cluster. */
  privateClusterConfig?: PrivateClusterConfig;
  /** The rollback safe upgrade information of the cluster. This field is used when user manually triggers a rollback safe upgrade. */
  rollbackSafeUpgrade?: RollbackSafeUpgrade;
  /** Configuration options for the NetworkPolicy feature. */
  networkPolicy?: NetworkPolicy;
  /** Logging configuration for the cluster. */
  loggingConfig?: LoggingConfig;
  /** Fleet information for the cluster. */
  fleet?: Fleet;
  /** Configuration for sync Secret Manager secrets as k8s secrets. */
  secretSyncConfig?: SecretSyncConfig;
  /** Shielded Nodes configuration. */
  shieldedNodes?: ShieldedNodes;
}

export const Cluster: Schema.Schema<Cluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    compliancePostureConfig: Schema.optional(CompliancePostureConfig),
    verticalPodAutoscaling: Schema.optional(VerticalPodAutoscaling),
    masterAuthorizedNetworksConfig: Schema.optional(
      MasterAuthorizedNetworksConfig,
    ),
    authenticatorGroupsConfig: Schema.optional(AuthenticatorGroupsConfig),
    endpoint: Schema.optional(Schema.String),
    podSecurityPolicyConfig: Schema.optional(PodSecurityPolicyConfig),
    location: Schema.optional(Schema.String),
    confidentialNodes: Schema.optional(ConfidentialNodes),
    scheduleUpgradeConfig: Schema.optional(ScheduleUpgradeConfig),
    subnetwork: Schema.optional(Schema.String),
    userManagedKeysConfig: Schema.optional(UserManagedKeysConfig),
    anonymousAuthenticationConfig: Schema.optional(
      AnonymousAuthenticationConfig,
    ),
    maintenancePolicy: Schema.optional(MaintenancePolicy),
    secretManagerConfig: Schema.optional(SecretManagerConfig),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    currentMasterVersion: Schema.optional(Schema.String),
    defaultMaxPodsConstraint: Schema.optional(MaxPodsConstraint),
    currentNodeCount: Schema.optional(Schema.Number),
    enterpriseConfig: Schema.optional(EnterpriseConfig),
    enableKubernetesAlpha: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    nodePoolAutoConfig: Schema.optional(NodePoolAutoConfig),
    enableTpu: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    nodePoolUpgradeConcurrencyConfig: Schema.optional(
      NodePoolUpgradeConcurrencyConfig,
    ),
    securityPostureConfig: Schema.optional(SecurityPostureConfig),
    controlPlaneEgress: Schema.optional(ControlPlaneEgress),
    networkConfig: Schema.optional(NetworkConfig),
    initialNodeCount: Schema.optional(Schema.Number),
    autoscaling: Schema.optional(ClusterAutoscaling),
    tpuConfig: Schema.optional(TpuConfig),
    gkeAutoUpgradeConfig: Schema.optional(GkeAutoUpgradeConfig),
    master: Schema.optional(Master),
    protectConfig: Schema.optional(ProtectConfig),
    clusterIpv4Cidr: Schema.optional(Schema.String),
    workloadIdentityConfig: Schema.optional(WorkloadIdentityConfig),
    instanceGroupUrls: Schema.optional(Schema.Array(Schema.String)),
    managedMachineLearningDiagnosticsConfig: Schema.optional(
      ManagedMachineLearningDiagnosticsConfig,
    ),
    selfLink: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    initialClusterVersion: Schema.optional(Schema.String),
    controlPlaneEndpointsConfig: Schema.optional(ControlPlaneEndpointsConfig),
    masterIpv4CidrBlock: Schema.optional(Schema.String),
    notificationConfig: Schema.optional(NotificationConfig),
    monitoringService: Schema.optional(Schema.String),
    loggingService: Schema.optional(Schema.String),
    legacyAbac: Schema.optional(LegacyAbac),
    currentNodeVersion: Schema.optional(Schema.String),
    tpuIpv4CidrBlock: Schema.optional(Schema.String),
    labelFingerprint: Schema.optional(Schema.String),
    workloadAltsConfig: Schema.optional(WorkloadALTSConfig),
    statusMessage: Schema.optional(Schema.String),
    costManagementConfig: Schema.optional(CostManagementConfig),
    podAutoscaling: Schema.optional(PodAutoscaling),
    resourceUsageExportConfig: Schema.optional(ResourceUsageExportConfig),
    meshCertificates: Schema.optional(MeshCertificates),
    addonsConfig: Schema.optional(AddonsConfig),
    clusterTelemetry: Schema.optional(ClusterTelemetry),
    releaseChannel: Schema.optional(ReleaseChannel),
    nodePools: Schema.optional(Schema.Array(NodePool)),
    rbacBindingConfig: Schema.optional(RBACBindingConfig),
    masterAuth: Schema.optional(MasterAuth),
    locations: Schema.optional(Schema.Array(Schema.String)),
    ipAllocationPolicy: Schema.optional(IPAllocationPolicy),
    id: Schema.optional(Schema.String),
    identityServiceConfig: Schema.optional(IdentityServiceConfig),
    currentEmulatedVersion: Schema.optional(Schema.String),
    resourceLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    privateCluster: Schema.optional(Schema.Boolean),
    monitoringConfig: Schema.optional(MonitoringConfig),
    parentProductConfig: Schema.optional(ParentProductConfig),
    etag: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    servicesIpv4Cidr: Schema.optional(Schema.String),
    workloadCertificates: Schema.optional(WorkloadCertificates),
    zone: Schema.optional(Schema.String),
    databaseEncryption: Schema.optional(DatabaseEncryption),
    managedOpentelemetryConfig: Schema.optional(ManagedOpenTelemetryConfig),
    enableK8sBetaApis: Schema.optional(K8sBetaAPIConfig),
    nodeConfig: Schema.optional(NodeConfig),
    network: Schema.optional(Schema.String),
    binaryAuthorization: Schema.optional(BinaryAuthorization),
    expireTime: Schema.optional(Schema.String),
    nodeIpv4CidrSize: Schema.optional(Schema.Number),
    conditions: Schema.optional(Schema.Array(StatusCondition)),
    nodePoolDefaults: Schema.optional(NodePoolDefaults),
    alphaClusterFeatureGates: Schema.optional(Schema.Array(Schema.String)),
    autopilot: Schema.optional(Autopilot),
    privateClusterConfig: Schema.optional(PrivateClusterConfig),
    rollbackSafeUpgrade: Schema.optional(RollbackSafeUpgrade),
    networkPolicy: Schema.optional(NetworkPolicy),
    loggingConfig: Schema.optional(LoggingConfig),
    fleet: Schema.optional(Fleet),
    secretSyncConfig: Schema.optional(SecretSyncConfig),
    shieldedNodes: Schema.optional(ShieldedNodes),
  }).annotate({ identifier: "Cluster" });

export interface ListClustersResponse {
  /** If any zones are listed here, the list of clusters returned may be missing those zones. */
  missingZones?: ReadonlyArray<string>;
  /** A list of clusters in the project in the specified zone, or across all ones. */
  clusters?: ReadonlyArray<Cluster>;
}

export const ListClustersResponse: Schema.Schema<ListClustersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    missingZones: Schema.optional(Schema.Array(Schema.String)),
    clusters: Schema.optional(Schema.Array(Cluster)),
  }).annotate({ identifier: "ListClustersResponse" });

export interface CompleteNodePoolUpgradeRequest {}

export const CompleteNodePoolUpgradeRequest: Schema.Schema<CompleteNodePoolUpgradeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CompleteNodePoolUpgradeRequest",
  });

export interface Jwk {
  /** Used for RSA keys. */
  n?: string;
  /** Permitted uses for the public keys. */
  use?: string;
  /** Used for RSA keys. */
  e?: string;
  /** Used for ECDSA keys. */
  x?: string;
  /** Used for ECDSA keys. */
  y?: string;
  /** Used for ECDSA keys. */
  crv?: string;
  /** Key Type. */
  kty?: string;
  /** Algorithm. */
  alg?: string;
  /** Key ID. */
  kid?: string;
}

export const Jwk: Schema.Schema<Jwk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    n: Schema.optional(Schema.String),
    use: Schema.optional(Schema.String),
    e: Schema.optional(Schema.String),
    x: Schema.optional(Schema.String),
    y: Schema.optional(Schema.String),
    crv: Schema.optional(Schema.String),
    kty: Schema.optional(Schema.String),
    alg: Schema.optional(Schema.String),
    kid: Schema.optional(Schema.String),
  }).annotate({ identifier: "Jwk" });

export interface GetJSONWebKeysResponse {
  /** The public component of the keys used by the cluster to sign token requests. */
  keys?: ReadonlyArray<Jwk>;
  /** For HTTP requests, this field is automatically extracted into the Cache-Control HTTP header. */
  cacheHeader?: HttpCacheControlResponseHeader;
}

export const GetJSONWebKeysResponse: Schema.Schema<GetJSONWebKeysResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keys: Schema.optional(Schema.Array(Jwk)),
    cacheHeader: Schema.optional(HttpCacheControlResponseHeader),
  }).annotate({ identifier: "GetJSONWebKeysResponse" });

export interface CreateClusterRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
  zone?: string;
  /** Required. A [cluster resource](https://cloud.google.com/container-engine/reference/rest/v1beta1/projects.locations.clusters) */
  cluster?: Cluster;
  /** The parent (project and location) where the cluster will be created. Specified in the format `projects/* /locations/*`. */
  parent?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId?: string;
}

export const CreateClusterRequest: Schema.Schema<CreateClusterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    cluster: Schema.optional(Cluster),
    parent: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateClusterRequest" });

export interface SetMaintenancePolicyRequest {
  /** Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. */
  zone?: string;
  /** Required. The name of the cluster to update. */
  clusterId?: string;
  /** The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Required. The maintenance policy to be set for the cluster. An empty field clears the existing maintenance policy. */
  maintenancePolicy?: MaintenancePolicy;
  /** Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). */
  projectId?: string;
}

export const SetMaintenancePolicyRequest: Schema.Schema<SetMaintenancePolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    maintenancePolicy: Schema.optional(MaintenancePolicy),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetMaintenancePolicyRequest" });

export interface CompleteIPRotationRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
}

export const CompleteIPRotationRequest: Schema.Schema<CompleteIPRotationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompleteIPRotationRequest" });

export interface SetMonitoringServiceRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Required. The monitoring service the cluster should use to write metrics. Currently available options: * `monitoring.googleapis.com/kubernetes` - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions. */
  monitoringService?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
}

export const SetMonitoringServiceRequest: Schema.Schema<SetMonitoringServiceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    monitoringService: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetMonitoringServiceRequest" });

export interface SetNodePoolManagementRequest {
  /** Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. */
  nodePoolId?: string;
  /** Required. NodeManagement configuration for the node pool. */
  management?: NodeManagement;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name?: string;
}

export const SetNodePoolManagementRequest: Schema.Schema<SetNodePoolManagementRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePoolId: Schema.optional(Schema.String),
    management: Schema.optional(NodeManagement),
    projectId: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetNodePoolManagementRequest" });

export interface SetNetworkPolicyRequest {
  /** Required. Configuration options for the NetworkPolicy feature. */
  networkPolicy?: NetworkPolicy;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
}

export const SetNetworkPolicyRequest: Schema.Schema<SetNetworkPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkPolicy: Schema.optional(NetworkPolicy),
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetNetworkPolicyRequest" });

export interface SetLoggingServiceRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Required. The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions. */
  loggingService?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
}

export const SetLoggingServiceRequest: Schema.Schema<SetLoggingServiceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    loggingService: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetLoggingServiceRequest" });

export interface SetMasterAuthRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Required. A description of the update. */
  update?: MasterAuth;
  /** The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Required. The exact form of action to be taken on the master auth. */
  action?:
    | "UNKNOWN"
    | "SET_PASSWORD"
    | "GENERATE_PASSWORD"
    | "SET_USERNAME"
    | (string & {});
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
}

export const SetMasterAuthRequest: Schema.Schema<SetMasterAuthRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    update: Schema.optional(MasterAuth),
    name: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetMasterAuthRequest" });

export interface SetLabelsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Required. The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Kubernetes Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash when updating or changing labels. Make a `get()` request to the resource to get the latest fingerprint. */
  labelFingerprint?: string;
  /** Required. The labels to set for that cluster. */
  resourceLabels?: Record<string, string>;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
}

export const SetLabelsRequest: Schema.Schema<SetLabelsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    labelFingerprint: Schema.optional(Schema.String),
    resourceLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetLabelsRequest" });

export interface ListLocationsResponse {
  /** A full list of GKE locations. */
  locations?: ReadonlyArray<Location>;
  /** Only return ListLocationsResponse that occur after the page_token. This value should be populated from the ListLocationsResponse.next_page_token if that response token was set (which happens when listing more Locations than fit in a single ListLocationsResponse). */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface ListOperationsResponse {
  /** A list of operations in the project in the specified zone. */
  operations?: ReadonlyArray<Operation>;
  /** If any zones are listed here, the list of operations returned may be missing the operations from those zones. */
  missingZones?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    missingZones: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface SecurityBulletinEvent {
  /** The GKE versions where this vulnerability is patched. */
  patchedVersions?: ReadonlyArray<string>;
  /** If this field is specified, it means there are manual steps that the user must take to make their clusters safe. */
  manualStepsRequired?: boolean;
  /** The CVEs associated with this bulletin. */
  cveIds?: ReadonlyArray<string>;
  /** The GKE minor versions affected by this vulnerability. */
  affectedSupportedMinors?: ReadonlyArray<string>;
  /** This represents a version selected from the patched_versions field that the cluster receiving this notification should most likely want to upgrade to based on its current version. Note that if this notification is being received by a given cluster, it means that this version is currently available as an upgrade target in that cluster's location. */
  suggestedUpgradeTarget?: string;
  /** The GKE versions where this vulnerability is mitigated. */
  mitigatedVersions?: ReadonlyArray<string>;
  /** The severity of this bulletin as it relates to GKE. */
  severity?: string;
  /** The resource type (node/control plane) that has the vulnerability. Multiple notifications (1 notification per resource type) will be sent for a vulnerability that affects > 1 resource type. */
  resourceTypeAffected?: string;
  /** The ID of the bulletin corresponding to the vulnerability. */
  bulletinId?: string;
  /** A brief description of the bulletin. See the bulletin pointed to by the bulletin_uri field for an expanded description. */
  briefDescription?: string;
  /** The URI link to the bulletin on the website for more information. */
  bulletinUri?: string;
}

export const SecurityBulletinEvent: Schema.Schema<SecurityBulletinEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patchedVersions: Schema.optional(Schema.Array(Schema.String)),
    manualStepsRequired: Schema.optional(Schema.Boolean),
    cveIds: Schema.optional(Schema.Array(Schema.String)),
    affectedSupportedMinors: Schema.optional(Schema.Array(Schema.String)),
    suggestedUpgradeTarget: Schema.optional(Schema.String),
    mitigatedVersions: Schema.optional(Schema.Array(Schema.String)),
    severity: Schema.optional(Schema.String),
    resourceTypeAffected: Schema.optional(Schema.String),
    bulletinId: Schema.optional(Schema.String),
    briefDescription: Schema.optional(Schema.String),
    bulletinUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityBulletinEvent" });

export interface CancelOperationRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field. */
  operationId?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/* /locations/* /operations/*`. */
  name?: string;
}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    operationId: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "CancelOperationRequest" });

export interface SetAddonsConfigRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Required. The desired configurations for the various addons available to run in the cluster. */
  addonsConfig?: AddonsConfig;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
}

export const SetAddonsConfigRequest: Schema.Schema<SetAddonsConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    addonsConfig: Schema.optional(AddonsConfig),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetAddonsConfigRequest" });

export interface SetLocationsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Required. The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. Changing the locations a cluster is in will result in nodes being either created or removed from the cluster, depending on whether locations are being added or removed. This list must always include the cluster's primary zone. */
  locations?: ReadonlyArray<string>;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
}

export const SetLocationsRequest: Schema.Schema<SetLocationsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Schema.String)),
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetLocationsRequest" });

export interface NodePoolUpgradeInfo {
  /** The node pool's current minor version's end of standard support timestamp. */
  endOfStandardSupportTimestamp?: string;
  /** The list of past auto upgrades. */
  upgradeDetails?: ReadonlyArray<UpgradeDetails>;
  /** The auto upgrade status. */
  autoUpgradeStatus?: ReadonlyArray<
    | "UNKNOWN"
    | "ACTIVE"
    | "MINOR_UPGRADE_PAUSED"
    | "UPGRADE_PAUSED"
    | (string & {})
  >;
  /** The node pool's current minor version's end of extended support timestamp. */
  endOfExtendedSupportTimestamp?: string;
  /** minor_target_version indicates the target version for minor upgrade. */
  minorTargetVersion?: string;
  /** patch_target_version indicates the target version for patch upgrade. */
  patchTargetVersion?: string;
  /** The auto upgrade paused reason. */
  pausedReason?: ReadonlyArray<
    | "AUTO_UPGRADE_PAUSED_REASON_UNSPECIFIED"
    | "MAINTENANCE_WINDOW"
    | "MAINTENANCE_EXCLUSION_NO_UPGRADES"
    | "MAINTENANCE_EXCLUSION_NO_MINOR_UPGRADES"
    | "SYSTEM_CONFIG"
    | (string & {})
  >;
}

export const NodePoolUpgradeInfo: Schema.Schema<NodePoolUpgradeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endOfStandardSupportTimestamp: Schema.optional(Schema.String),
    upgradeDetails: Schema.optional(Schema.Array(UpgradeDetails)),
    autoUpgradeStatus: Schema.optional(Schema.Array(Schema.String)),
    endOfExtendedSupportTimestamp: Schema.optional(Schema.String),
    minorTargetVersion: Schema.optional(Schema.String),
    patchTargetVersion: Schema.optional(Schema.String),
    pausedReason: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "NodePoolUpgradeInfo" });

export interface StartIPRotationRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Whether to rotate credentials during IP rotation. */
  rotateCredentials?: boolean;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
}

export const StartIPRotationRequest: Schema.Schema<StartIPRotationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    rotateCredentials: Schema.optional(Schema.Boolean),
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "StartIPRotationRequest" });

export interface SetNodePoolAutoscalingRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. */
  nodePoolId?: string;
  /** Required. Autoscaling configuration for the node pool. */
  autoscaling?: NodePoolAutoscaling;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name?: string;
}

export const SetNodePoolAutoscalingRequest: Schema.Schema<SetNodePoolAutoscalingRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    nodePoolId: Schema.optional(Schema.String),
    autoscaling: Schema.optional(NodePoolAutoscaling),
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetNodePoolAutoscalingRequest" });

export interface UpgradeInfoEvent {
  /** The end of standard support timestamp. */
  standardSupportEndTime?: string;
  /** A brief description of the event. */
  description?: string;
  /** Output only. The state of the upgrade. */
  state?:
    | "STATE_UNSPECIFIED"
    | "SCHEDULED"
    | "STARTED"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELED"
    | (string & {});
  /** The time when the operation ended. */
  endTime?: string;
  /** Optional relative path to the resource. For example in node pool upgrades, the relative path of the node pool. */
  resource?: string;
  /** The current version before the upgrade. */
  currentVersion?: string;
  /** The current emulated version before the upgrade. */
  currentEmulatedVersion?: string;
  /** The type of the event. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "END_OF_SUPPORT"
    | "COS_MILESTONE_VERSION_UPDATE"
    | "UPGRADE_LIFECYCLE"
    | "DISRUPTION_EVENT"
    | (string & {});
  /** The information about the disruption event. This field is only populated when event_type is DISRUPTION_EVENT. */
  disruptionEvent?: DisruptionEvent;
  /** The target emulated version for the upgrade. */
  targetEmulatedVersion?: string;
  /** The time when the operation was started. */
  startTime?: string;
  /** The operation associated with this upgrade. */
  operation?: string;
  /** The resource type associated with the upgrade. */
  resourceType?:
    | "UPGRADE_RESOURCE_TYPE_UNSPECIFIED"
    | "MASTER"
    | "NODE_POOL"
    | (string & {});
  /** The target version for the upgrade. */
  targetVersion?: string;
  /** The end of extended support timestamp. */
  extendedSupportEndTime?: string;
}

export const UpgradeInfoEvent: Schema.Schema<UpgradeInfoEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    standardSupportEndTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    currentVersion: Schema.optional(Schema.String),
    currentEmulatedVersion: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
    disruptionEvent: Schema.optional(DisruptionEvent),
    targetEmulatedVersion: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    targetVersion: Schema.optional(Schema.String),
    extendedSupportEndTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeInfoEvent" });

export interface UpdateMasterRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster) of the cluster to update. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Required. The Kubernetes version to change the master to. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version */
  masterVersion?: string;
}

export const UpdateMasterRequest: Schema.Schema<UpdateMasterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    masterVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateMasterRequest" });

export interface RollbackNodePoolUpgradeRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field. */
  nodePoolId?: string;
  /** Option for rollback to ignore the PodDisruptionBudget. Default value is false. */
  respectPdb?: boolean;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name?: string;
}

export const RollbackNodePoolUpgradeRequest: Schema.Schema<RollbackNodePoolUpgradeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    nodePoolId: Schema.optional(Schema.String),
    respectPdb: Schema.optional(Schema.Boolean),
    zone: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "RollbackNodePoolUpgradeRequest" });

export interface CompleteControlPlaneUpgradeRequest {
  /** API request version that initiates this operation. */
  version?: string;
}

export const CompleteControlPlaneUpgradeRequest: Schema.Schema<CompleteControlPlaneUpgradeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompleteControlPlaneUpgradeRequest" });

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

export interface ListProjectsAggregatedUsableSubnetworksRequest {
  /** The max number of results per page that should be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be used to get the next page of results in subsequent requests. Acceptable values are 0 to 500, inclusive. (Default: 500) */
  pageSize?: number;
  /** Filtering currently only supports equality on the networkProjectId and must be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId` is the project which owns the listed subnetworks. This defaults to the parent project ID. */
  filter?: string;
  /** Required. The parent project where subnetworks are usable. Specified in the format `projects/*`. */
  parent: string;
  /** Specifies a page token to use. Set this to the nextPageToken returned by previous list requests to get the next page of results. */
  pageToken?: string;
}

export const ListProjectsAggregatedUsableSubnetworksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/aggregated/usableSubnetworks",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAggregatedUsableSubnetworksRequest>;

export type ListProjectsAggregatedUsableSubnetworksResponse =
  ListUsableSubnetworksResponse;
export const ListProjectsAggregatedUsableSubnetworksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUsableSubnetworksResponse;

export type ListProjectsAggregatedUsableSubnetworksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists subnetworks that can be used for creating clusters in a project. */
export const listProjectsAggregatedUsableSubnetworks: API.PaginatedOperationMethod<
  ListProjectsAggregatedUsableSubnetworksRequest,
  ListProjectsAggregatedUsableSubnetworksResponse,
  ListProjectsAggregatedUsableSubnetworksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAggregatedUsableSubnetworksRequest,
  output: ListProjectsAggregatedUsableSubnetworksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetServerConfigProjectsLocationsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** The name (project and location) of the server config to get, specified in the format `projects/* /locations/*`. */
  name: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field. */
  zone?: string;
}

export const GetServerConfigProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/serverConfig" }),
    svc,
  ) as unknown as Schema.Schema<GetServerConfigProjectsLocationsRequest>;

export type GetServerConfigProjectsLocationsResponse = ServerConfig;
export const GetServerConfigProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServerConfig;

export type GetServerConfigProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns configuration info about the Google Kubernetes Engine service. */
export const getServerConfigProjectsLocations: API.OperationMethod<
  GetServerConfigProjectsLocationsRequest,
  GetServerConfigProjectsLocationsResponse,
  GetServerConfigProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetServerConfigProjectsLocationsRequest,
  output: GetServerConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRequest {
  /** Required. Contains the name of the resource requested. Specified in the format `projects/*`. */
  parent: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Fetches locations that offer Google Kubernetes Engine. */
export const listProjectsLocations: API.OperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/* /locations/* /operations/*`. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:cancel", hasBody: true }),
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

/** Cancels the specified operation. */
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

export interface ListProjectsLocationsOperationsRequest {
  /** The parent (project and location) where the operations will be listed. Specified in the format `projects/* /locations/*`. Location "-" matches all zones and all regions. */
  parent: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field. */
  zone?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all operations in a project in the specified zone or all zones. */
export const listProjectsLocationsOperations: API.OperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name (project, location, operation id) of the operation to get. Specified in the format `projects/* /locations/* /operations/*`. */
  name: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field. */
  operationId?: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    operationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("operationId"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the specified operation. */
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

export interface SetNetworkPolicyProjectsLocationsClustersRequest {
  /** The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: SetNetworkPolicyRequest;
}

export const SetNetworkPolicyProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetNetworkPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:setNetworkPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetNetworkPolicyProjectsLocationsClustersRequest>;

export type SetNetworkPolicyProjectsLocationsClustersResponse = Operation;
export const SetNetworkPolicyProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetNetworkPolicyProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enables or disables Network Policy for a cluster. */
export const setNetworkPolicyProjectsLocationsClusters: API.OperationMethod<
  SetNetworkPolicyProjectsLocationsClustersRequest,
  SetNetworkPolicyProjectsLocationsClustersResponse,
  SetNetworkPolicyProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetNetworkPolicyProjectsLocationsClustersRequest,
  output: SetNetworkPolicyProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateMasterProjectsLocationsClustersRequest {
  /** The name (project, location, cluster) of the cluster to update. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: UpdateMasterRequest;
}

export const UpdateMasterProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpdateMasterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:updateMaster",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateMasterProjectsLocationsClustersRequest>;

export type UpdateMasterProjectsLocationsClustersResponse = Operation;
export const UpdateMasterProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateMasterProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the master for a specific cluster. */
export const updateMasterProjectsLocationsClusters: API.OperationMethod<
  UpdateMasterProjectsLocationsClustersRequest,
  UpdateMasterProjectsLocationsClustersResponse,
  UpdateMasterProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateMasterProjectsLocationsClustersRequest,
  output: UpdateMasterProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsClustersRequest {
  /** The parent (project and location) where the clusters will be listed. Specified in the format `projects/* /locations/*`. Location "-" matches all zones and all regions. */
  parent: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field. */
  zone?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId?: string;
}

export const ListProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/clusters" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsClustersRequest>;

export type ListProjectsLocationsClustersResponse = ListClustersResponse;
export const ListProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListClustersResponse;

export type ListProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all clusters owned by a project in either the specified zone or all zones. */
export const listProjectsLocationsClusters: API.OperationMethod<
  ListProjectsLocationsClustersRequest,
  ListProjectsLocationsClustersResponse,
  ListProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsClustersRequest,
  output: ListProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateProjectsLocationsClustersRequest {
  /** The name (project, location, cluster) of the cluster to update. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: UpdateClusterRequest;
}

export const UpdateProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpdateClusterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsLocationsClustersRequest>;

export type UpdateProjectsLocationsClustersResponse = Operation;
export const UpdateProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the settings for a specific cluster. */
export const updateProjectsLocationsClusters: API.OperationMethod<
  UpdateProjectsLocationsClustersRequest,
  UpdateProjectsLocationsClustersResponse,
  UpdateProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsLocationsClustersRequest,
  output: UpdateProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchClusterUpgradeInfoProjectsLocationsClustersRequest {
  /** Required. The name (project, location, cluster) of the cluster to get. Specified in the format `projects/* /locations/* /clusters/*` or `projects/* /zones/* /clusters/*`. */
  name: string;
  /** API request version that initiates this operation. */
  version?: string;
}

export const FetchClusterUpgradeInfoProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    version: Schema.optional(Schema.String).pipe(T.HttpQuery("version")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:fetchClusterUpgradeInfo" }),
    svc,
  ) as unknown as Schema.Schema<FetchClusterUpgradeInfoProjectsLocationsClustersRequest>;

export type FetchClusterUpgradeInfoProjectsLocationsClustersResponse =
  ClusterUpgradeInfo;
export const FetchClusterUpgradeInfoProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ClusterUpgradeInfo;

export type FetchClusterUpgradeInfoProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetch upgrade information of a specific cluster. */
export const fetchClusterUpgradeInfoProjectsLocationsClusters: API.OperationMethod<
  FetchClusterUpgradeInfoProjectsLocationsClustersRequest,
  FetchClusterUpgradeInfoProjectsLocationsClustersResponse,
  FetchClusterUpgradeInfoProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchClusterUpgradeInfoProjectsLocationsClustersRequest,
  output: FetchClusterUpgradeInfoProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CheckAutopilotCompatibilityProjectsLocationsClustersRequest {
  /** The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
}

export const CheckAutopilotCompatibilityProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+name}:checkAutopilotCompatibility",
    }),
    svc,
  ) as unknown as Schema.Schema<CheckAutopilotCompatibilityProjectsLocationsClustersRequest>;

export type CheckAutopilotCompatibilityProjectsLocationsClustersResponse =
  CheckAutopilotCompatibilityResponse;
export const CheckAutopilotCompatibilityProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ CheckAutopilotCompatibilityResponse;

export type CheckAutopilotCompatibilityProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Checks the cluster compatibility with Autopilot mode, and returns a list of compatibility issues. */
export const checkAutopilotCompatibilityProjectsLocationsClusters: API.OperationMethod<
  CheckAutopilotCompatibilityProjectsLocationsClustersRequest,
  CheckAutopilotCompatibilityProjectsLocationsClustersResponse,
  CheckAutopilotCompatibilityProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CheckAutopilotCompatibilityProjectsLocationsClustersRequest,
  output: CheckAutopilotCompatibilityProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetAddonsProjectsLocationsClustersRequest {
  /** The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: SetAddonsConfigRequest;
}

export const SetAddonsProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetAddonsConfigRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:setAddons",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetAddonsProjectsLocationsClustersRequest>;

export type SetAddonsProjectsLocationsClustersResponse = Operation;
export const SetAddonsProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetAddonsProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the addons for a specific cluster. */
export const setAddonsProjectsLocationsClusters: API.OperationMethod<
  SetAddonsProjectsLocationsClustersRequest,
  SetAddonsProjectsLocationsClustersResponse,
  SetAddonsProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetAddonsProjectsLocationsClustersRequest,
  output: SetAddonsProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetLegacyAbacProjectsLocationsClustersRequest {
  /** The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: SetLegacyAbacRequest;
}

export const SetLegacyAbacProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetLegacyAbacRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:setLegacyAbac",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetLegacyAbacProjectsLocationsClustersRequest>;

export type SetLegacyAbacProjectsLocationsClustersResponse = Operation;
export const SetLegacyAbacProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetLegacyAbacProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enables or disables the ABAC authorization mechanism on a cluster. */
export const setLegacyAbacProjectsLocationsClusters: API.OperationMethod<
  SetLegacyAbacProjectsLocationsClustersRequest,
  SetLegacyAbacProjectsLocationsClustersResponse,
  SetLegacyAbacProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetLegacyAbacProjectsLocationsClustersRequest,
  output: SetLegacyAbacProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetJwksProjectsLocationsClustersRequest {
  /** The cluster (project, location, cluster name) to get keys for. Specified in the format `projects/* /locations/* /clusters/*`. */
  parent: string;
}

export const GetJwksProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/jwks" }),
    svc,
  ) as unknown as Schema.Schema<GetJwksProjectsLocationsClustersRequest>;

export type GetJwksProjectsLocationsClustersResponse = GetJSONWebKeysResponse;
export const GetJwksProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetJSONWebKeysResponse;

export type GetJwksProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the public component of the cluster signing keys in JSON Web Key format. */
export const getJwksProjectsLocationsClusters: API.OperationMethod<
  GetJwksProjectsLocationsClustersRequest,
  GetJwksProjectsLocationsClustersResponse,
  GetJwksProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetJwksProjectsLocationsClustersRequest,
  output: GetJwksProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetResourceLabelsProjectsLocationsClustersRequest {
  /** The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: SetLabelsRequest;
}

export const SetResourceLabelsProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetLabelsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:setResourceLabels",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetResourceLabelsProjectsLocationsClustersRequest>;

export type SetResourceLabelsProjectsLocationsClustersResponse = Operation;
export const SetResourceLabelsProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetResourceLabelsProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets labels on a cluster. */
export const setResourceLabelsProjectsLocationsClusters: API.OperationMethod<
  SetResourceLabelsProjectsLocationsClustersRequest,
  SetResourceLabelsProjectsLocationsClustersResponse,
  SetResourceLabelsProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetResourceLabelsProjectsLocationsClustersRequest,
  output: SetResourceLabelsProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetLocationsProjectsLocationsClustersRequest {
  /** The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: SetLocationsRequest;
}

export const SetLocationsProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetLocationsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:setLocations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetLocationsProjectsLocationsClustersRequest>;

export type SetLocationsProjectsLocationsClustersResponse = Operation;
export const SetLocationsProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetLocationsProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead. */
export const setLocationsProjectsLocationsClusters: API.OperationMethod<
  SetLocationsProjectsLocationsClustersRequest,
  SetLocationsProjectsLocationsClustersResponse,
  SetLocationsProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetLocationsProjectsLocationsClustersRequest,
  output: SetLocationsProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsClustersRequest {
  /** The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
}

export const DeleteProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
    clusterId: Schema.optional(Schema.String).pipe(T.HttpQuery("clusterId")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsClustersRequest>;

export type DeleteProjectsLocationsClustersResponse = Operation;
export const DeleteProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created. */
export const deleteProjectsLocationsClusters: API.OperationMethod<
  DeleteProjectsLocationsClustersRequest,
  DeleteProjectsLocationsClustersResponse,
  DeleteProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsClustersRequest,
  output: DeleteProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetMasterAuthProjectsLocationsClustersRequest {
  /** The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: SetMasterAuthRequest;
}

export const SetMasterAuthProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetMasterAuthRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:setMasterAuth",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetMasterAuthProjectsLocationsClustersRequest>;

export type SetMasterAuthProjectsLocationsClustersResponse = Operation;
export const SetMasterAuthProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetMasterAuthProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password. */
export const setMasterAuthProjectsLocationsClusters: API.OperationMethod<
  SetMasterAuthProjectsLocationsClustersRequest,
  SetMasterAuthProjectsLocationsClustersResponse,
  SetMasterAuthProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetMasterAuthProjectsLocationsClustersRequest,
  output: SetMasterAuthProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CompleteControlPlaneUpgradeProjectsLocationsClustersRequest {
  /** The name (project, location, cluster) of the cluster to complete upgrade. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: CompleteControlPlaneUpgradeRequest;
}

export const CompleteControlPlaneUpgradeProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CompleteControlPlaneUpgradeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:completeControlPlaneUpgrade",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CompleteControlPlaneUpgradeProjectsLocationsClustersRequest>;

export type CompleteControlPlaneUpgradeProjectsLocationsClustersResponse =
  Operation;
export const CompleteControlPlaneUpgradeProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CompleteControlPlaneUpgradeProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** CompleteControlPlaneUpgrade completes the rollback-safe upgrade by performing the step two upgrade for a specific cluster. */
export const completeControlPlaneUpgradeProjectsLocationsClusters: API.OperationMethod<
  CompleteControlPlaneUpgradeProjectsLocationsClustersRequest,
  CompleteControlPlaneUpgradeProjectsLocationsClustersResponse,
  CompleteControlPlaneUpgradeProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CompleteControlPlaneUpgradeProjectsLocationsClustersRequest,
  output: CompleteControlPlaneUpgradeProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetLoggingProjectsLocationsClustersRequest {
  /** The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: SetLoggingServiceRequest;
}

export const SetLoggingProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetLoggingServiceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:setLogging",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetLoggingProjectsLocationsClustersRequest>;

export type SetLoggingProjectsLocationsClustersResponse = Operation;
export const SetLoggingProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetLoggingProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the logging service for a specific cluster. */
export const setLoggingProjectsLocationsClusters: API.OperationMethod<
  SetLoggingProjectsLocationsClustersRequest,
  SetLoggingProjectsLocationsClustersResponse,
  SetLoggingProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetLoggingProjectsLocationsClustersRequest,
  output: SetLoggingProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CompleteIpRotationProjectsLocationsClustersRequest {
  /** The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: CompleteIPRotationRequest;
}

export const CompleteIpRotationProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CompleteIPRotationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:completeIpRotation",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CompleteIpRotationProjectsLocationsClustersRequest>;

export type CompleteIpRotationProjectsLocationsClustersResponse = Operation;
export const CompleteIpRotationProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CompleteIpRotationProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Completes master IP rotation. */
export const completeIpRotationProjectsLocationsClusters: API.OperationMethod<
  CompleteIpRotationProjectsLocationsClustersRequest,
  CompleteIpRotationProjectsLocationsClustersResponse,
  CompleteIpRotationProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CompleteIpRotationProjectsLocationsClustersRequest,
  output: CompleteIpRotationProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
}

export const GetProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
    clusterId: Schema.optional(Schema.String).pipe(T.HttpQuery("clusterId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsClustersRequest>;

export type GetProjectsLocationsClustersResponse = Cluster;
export const GetProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Cluster;

export type GetProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details for a specific cluster. */
export const getProjectsLocationsClusters: API.OperationMethod<
  GetProjectsLocationsClustersRequest,
  GetProjectsLocationsClustersResponse,
  GetProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsClustersRequest,
  output: GetProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsClustersRequest {
  /** The parent (project and location) where the cluster will be created. Specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Request body */
  body?: CreateClusterRequest;
}

export const CreateProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CreateClusterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/clusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsClustersRequest>;

export type CreateProjectsLocationsClustersResponse = Operation;
export const CreateProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using. */
export const createProjectsLocationsClusters: API.OperationMethod<
  CreateProjectsLocationsClustersRequest,
  CreateProjectsLocationsClustersResponse,
  CreateProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsClustersRequest,
  output: CreateProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartIpRotationProjectsLocationsClustersRequest {
  /** The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: StartIPRotationRequest;
}

export const StartIpRotationProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StartIPRotationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:startIpRotation",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StartIpRotationProjectsLocationsClustersRequest>;

export type StartIpRotationProjectsLocationsClustersResponse = Operation;
export const StartIpRotationProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StartIpRotationProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts master IP rotation. */
export const startIpRotationProjectsLocationsClusters: API.OperationMethod<
  StartIpRotationProjectsLocationsClustersRequest,
  StartIpRotationProjectsLocationsClustersResponse,
  StartIpRotationProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartIpRotationProjectsLocationsClustersRequest,
  output: StartIpRotationProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetMonitoringProjectsLocationsClustersRequest {
  /** The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: SetMonitoringServiceRequest;
}

export const SetMonitoringProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetMonitoringServiceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:setMonitoring",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetMonitoringProjectsLocationsClustersRequest>;

export type SetMonitoringProjectsLocationsClustersResponse = Operation;
export const SetMonitoringProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetMonitoringProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the monitoring service for a specific cluster. */
export const setMonitoringProjectsLocationsClusters: API.OperationMethod<
  SetMonitoringProjectsLocationsClustersRequest,
  SetMonitoringProjectsLocationsClustersResponse,
  SetMonitoringProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetMonitoringProjectsLocationsClustersRequest,
  output: SetMonitoringProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetMaintenancePolicyProjectsLocationsClustersRequest {
  /** The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: SetMaintenancePolicyRequest;
}

export const SetMaintenancePolicyProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetMaintenancePolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:setMaintenancePolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetMaintenancePolicyProjectsLocationsClustersRequest>;

export type SetMaintenancePolicyProjectsLocationsClustersResponse = Operation;
export const SetMaintenancePolicyProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetMaintenancePolicyProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the maintenance policy for a cluster. */
export const setMaintenancePolicyProjectsLocationsClusters: API.OperationMethod<
  SetMaintenancePolicyProjectsLocationsClustersRequest,
  SetMaintenancePolicyProjectsLocationsClustersResponse,
  SetMaintenancePolicyProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetMaintenancePolicyProjectsLocationsClustersRequest,
  output: SetMaintenancePolicyProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetAutoscalingProjectsLocationsClustersNodePoolsRequest {
  /** The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name: string;
  /** Request body */
  body?: SetNodePoolAutoscalingRequest;
}

export const SetAutoscalingProjectsLocationsClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetNodePoolAutoscalingRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:setAutoscaling",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetAutoscalingProjectsLocationsClustersNodePoolsRequest>;

export type SetAutoscalingProjectsLocationsClustersNodePoolsResponse =
  Operation;
export const SetAutoscalingProjectsLocationsClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetAutoscalingProjectsLocationsClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the autoscaling settings of a specific node pool. */
export const setAutoscalingProjectsLocationsClustersNodePools: API.OperationMethod<
  SetAutoscalingProjectsLocationsClustersNodePoolsRequest,
  SetAutoscalingProjectsLocationsClustersNodePoolsResponse,
  SetAutoscalingProjectsLocationsClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetAutoscalingProjectsLocationsClustersNodePoolsRequest,
  output: SetAutoscalingProjectsLocationsClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RollbackProjectsLocationsClustersNodePoolsRequest {
  /** The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name: string;
  /** Request body */
  body?: RollbackNodePoolUpgradeRequest;
}

export const RollbackProjectsLocationsClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RollbackNodePoolUpgradeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:rollback", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RollbackProjectsLocationsClustersNodePoolsRequest>;

export type RollbackProjectsLocationsClustersNodePoolsResponse = Operation;
export const RollbackProjectsLocationsClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RollbackProjectsLocationsClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed. */
export const rollbackProjectsLocationsClustersNodePools: API.OperationMethod<
  RollbackProjectsLocationsClustersNodePoolsRequest,
  RollbackProjectsLocationsClustersNodePoolsResponse,
  RollbackProjectsLocationsClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RollbackProjectsLocationsClustersNodePoolsRequest,
  output: RollbackProjectsLocationsClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsClustersNodePoolsRequest {
  /** The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field. */
  nodePoolId?: string;
}

export const GetProjectsLocationsClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
    clusterId: Schema.optional(Schema.String).pipe(T.HttpQuery("clusterId")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    nodePoolId: Schema.optional(Schema.String).pipe(T.HttpQuery("nodePoolId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsClustersNodePoolsRequest>;

export type GetProjectsLocationsClustersNodePoolsResponse = NodePool;
export const GetProjectsLocationsClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NodePool;

export type GetProjectsLocationsClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the requested node pool. */
export const getProjectsLocationsClustersNodePools: API.OperationMethod<
  GetProjectsLocationsClustersNodePoolsRequest,
  GetProjectsLocationsClustersNodePoolsResponse,
  GetProjectsLocationsClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsClustersNodePoolsRequest,
  output: GetProjectsLocationsClustersNodePoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsClustersNodePoolsRequest {
  /** The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/* /locations/* /clusters/*`. */
  parent: string;
  /** Request body */
  body?: CreateNodePoolRequest;
}

export const CreateProjectsLocationsClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CreateNodePoolRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/nodePools",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsClustersNodePoolsRequest>;

export type CreateProjectsLocationsClustersNodePoolsResponse = Operation;
export const CreateProjectsLocationsClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a node pool for a cluster. */
export const createProjectsLocationsClustersNodePools: API.OperationMethod<
  CreateProjectsLocationsClustersNodePoolsRequest,
  CreateProjectsLocationsClustersNodePoolsResponse,
  CreateProjectsLocationsClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsClustersNodePoolsRequest,
  output: CreateProjectsLocationsClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CompleteUpgradeProjectsLocationsClustersNodePoolsRequest {
  /** The name (project, location, cluster, node pool id) of the node pool to complete upgrade. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name: string;
  /** Request body */
  body?: CompleteNodePoolUpgradeRequest;
}

export const CompleteUpgradeProjectsLocationsClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CompleteNodePoolUpgradeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:completeUpgrade",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CompleteUpgradeProjectsLocationsClustersNodePoolsRequest>;

export type CompleteUpgradeProjectsLocationsClustersNodePoolsResponse = Empty;
export const CompleteUpgradeProjectsLocationsClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CompleteUpgradeProjectsLocationsClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete. */
export const completeUpgradeProjectsLocationsClustersNodePools: API.OperationMethod<
  CompleteUpgradeProjectsLocationsClustersNodePoolsRequest,
  CompleteUpgradeProjectsLocationsClustersNodePoolsResponse,
  CompleteUpgradeProjectsLocationsClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CompleteUpgradeProjectsLocationsClustersNodePoolsRequest,
  output: CompleteUpgradeProjectsLocationsClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetManagementProjectsLocationsClustersNodePoolsRequest {
  /** The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name: string;
  /** Request body */
  body?: SetNodePoolManagementRequest;
}

export const SetManagementProjectsLocationsClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetNodePoolManagementRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:setManagement",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetManagementProjectsLocationsClustersNodePoolsRequest>;

export type SetManagementProjectsLocationsClustersNodePoolsResponse = Operation;
export const SetManagementProjectsLocationsClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetManagementProjectsLocationsClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the NodeManagement options for a node pool. */
export const setManagementProjectsLocationsClustersNodePools: API.OperationMethod<
  SetManagementProjectsLocationsClustersNodePoolsRequest,
  SetManagementProjectsLocationsClustersNodePoolsResponse,
  SetManagementProjectsLocationsClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetManagementProjectsLocationsClustersNodePoolsRequest,
  output: SetManagementProjectsLocationsClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateProjectsLocationsClustersNodePoolsRequest {
  /** The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name: string;
  /** Request body */
  body?: UpdateNodePoolRequest;
}

export const UpdateProjectsLocationsClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpdateNodePoolRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsLocationsClustersNodePoolsRequest>;

export type UpdateProjectsLocationsClustersNodePoolsResponse = Operation;
export const UpdateProjectsLocationsClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateProjectsLocationsClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the version and/or image type of a specific node pool. */
export const updateProjectsLocationsClustersNodePools: API.OperationMethod<
  UpdateProjectsLocationsClustersNodePoolsRequest,
  UpdateProjectsLocationsClustersNodePoolsResponse,
  UpdateProjectsLocationsClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsLocationsClustersNodePoolsRequest,
  output: UpdateProjectsLocationsClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsClustersNodePoolsRequest {
  /** The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/* /locations/* /clusters/*`. */
  parent: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
  zone?: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field. */
  clusterId?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId?: string;
}

export const ListProjectsLocationsClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
    clusterId: Schema.optional(Schema.String).pipe(T.HttpQuery("clusterId")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/nodePools" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsClustersNodePoolsRequest>;

export type ListProjectsLocationsClustersNodePoolsResponse =
  ListNodePoolsResponse;
export const ListProjectsLocationsClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNodePoolsResponse;

export type ListProjectsLocationsClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the node pools for a cluster. */
export const listProjectsLocationsClustersNodePools: API.OperationMethod<
  ListProjectsLocationsClustersNodePoolsRequest,
  ListProjectsLocationsClustersNodePoolsResponse,
  ListProjectsLocationsClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsClustersNodePoolsRequest,
  output: ListProjectsLocationsClustersNodePoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetSizeProjectsLocationsClustersNodePoolsRequest {
  /** The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name: string;
  /** Request body */
  body?: SetNodePoolSizeRequest;
}

export const SetSizeProjectsLocationsClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetNodePoolSizeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:setSize", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetSizeProjectsLocationsClustersNodePoolsRequest>;

export type SetSizeProjectsLocationsClustersNodePoolsResponse = Operation;
export const SetSizeProjectsLocationsClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetSizeProjectsLocationsClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations. */
export const setSizeProjectsLocationsClustersNodePools: API.OperationMethod<
  SetSizeProjectsLocationsClustersNodePoolsRequest,
  SetSizeProjectsLocationsClustersNodePoolsResponse,
  SetSizeProjectsLocationsClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetSizeProjectsLocationsClustersNodePoolsRequest,
  output: SetSizeProjectsLocationsClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsClustersNodePoolsRequest {
  /** The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field. */
  nodePoolId?: string;
}

export const DeleteProjectsLocationsClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
    clusterId: Schema.optional(Schema.String).pipe(T.HttpQuery("clusterId")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    nodePoolId: Schema.optional(Schema.String).pipe(T.HttpQuery("nodePoolId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsClustersNodePoolsRequest>;

export type DeleteProjectsLocationsClustersNodePoolsResponse = Operation;
export const DeleteProjectsLocationsClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a node pool from a cluster. */
export const deleteProjectsLocationsClustersNodePools: API.OperationMethod<
  DeleteProjectsLocationsClustersNodePoolsRequest,
  DeleteProjectsLocationsClustersNodePoolsResponse,
  DeleteProjectsLocationsClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsClustersNodePoolsRequest,
  output: DeleteProjectsLocationsClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchNodePoolUpgradeInfoProjectsLocationsClustersNodePoolsRequest {
  /** API request version that initiates this operation. */
  version?: string;
  /** Required. The name (project, location, cluster, node pool) of the node pool to get. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*` or `projects/* /zones/* /clusters/* /nodePools/*`. */
  name: string;
}

export const FetchNodePoolUpgradeInfoProjectsLocationsClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String).pipe(T.HttpQuery("version")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:fetchNodePoolUpgradeInfo" }),
    svc,
  ) as unknown as Schema.Schema<FetchNodePoolUpgradeInfoProjectsLocationsClustersNodePoolsRequest>;

export type FetchNodePoolUpgradeInfoProjectsLocationsClustersNodePoolsResponse =
  NodePoolUpgradeInfo;
export const FetchNodePoolUpgradeInfoProjectsLocationsClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NodePoolUpgradeInfo;

export type FetchNodePoolUpgradeInfoProjectsLocationsClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetch upgrade information of a specific node pool. */
export const fetchNodePoolUpgradeInfoProjectsLocationsClustersNodePools: API.OperationMethod<
  FetchNodePoolUpgradeInfoProjectsLocationsClustersNodePoolsRequest,
  FetchNodePoolUpgradeInfoProjectsLocationsClustersNodePoolsResponse,
  FetchNodePoolUpgradeInfoProjectsLocationsClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchNodePoolUpgradeInfoProjectsLocationsClustersNodePoolsRequest,
  output: FetchNodePoolUpgradeInfoProjectsLocationsClustersNodePoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetOpenid_configurationProjectsLocationsClustersWell_knownRequest {
  /** The cluster (project, location, cluster name) to get the discovery document for. Specified in the format `projects/* /locations/* /clusters/*`. */
  parent: string;
}

export const GetOpenid_configurationProjectsLocationsClustersWell_knownRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/.well-known/openid-configuration",
    }),
    svc,
  ) as unknown as Schema.Schema<GetOpenid_configurationProjectsLocationsClustersWell_knownRequest>;

export type GetOpenid_configurationProjectsLocationsClustersWell_knownResponse =
  GetOpenIDConfigResponse;
export const GetOpenid_configurationProjectsLocationsClustersWell_knownResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetOpenIDConfigResponse;

export type GetOpenid_configurationProjectsLocationsClustersWell_knownError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. */
export const getOpenid_configurationProjectsLocationsClustersWell_known: API.OperationMethod<
  GetOpenid_configurationProjectsLocationsClustersWell_knownRequest,
  GetOpenid_configurationProjectsLocationsClustersWell_knownResponse,
  GetOpenid_configurationProjectsLocationsClustersWell_knownError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOpenid_configurationProjectsLocationsClustersWell_knownRequest,
  output: GetOpenid_configurationProjectsLocationsClustersWell_knownResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetServerconfigProjectsZonesRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** The name (project and location) of the server config to get, specified in the format `projects/* /locations/*`. */
  name?: string;
}

export const GetServerconfigProjectsZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/projects/{projectId}/zones/{zone}/serverconfig",
    }),
    svc,
  ) as unknown as Schema.Schema<GetServerconfigProjectsZonesRequest>;

export type GetServerconfigProjectsZonesResponse = ServerConfig;
export const GetServerconfigProjectsZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServerConfig;

export type GetServerconfigProjectsZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns configuration info about the Google Kubernetes Engine service. */
export const getServerconfigProjectsZones: API.OperationMethod<
  GetServerconfigProjectsZonesRequest,
  GetServerconfigProjectsZonesResponse,
  GetServerconfigProjectsZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetServerconfigProjectsZonesRequest,
  output: GetServerconfigProjectsZonesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
}

export const DeleteProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsZonesClustersRequest>;

export type DeleteProjectsZonesClustersResponse = Operation;
export const DeleteProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created. */
export const deleteProjectsZonesClusters: API.OperationMethod<
  DeleteProjectsZonesClustersRequest,
  DeleteProjectsZonesClustersResponse,
  DeleteProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsZonesClustersRequest,
  output: DeleteProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetMasterAuthProjectsZonesClustersRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Request body */
  body?: SetMasterAuthRequest;
}

export const SetMasterAuthProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(SetMasterAuthRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetMasterAuthProjectsZonesClustersRequest>;

export type SetMasterAuthProjectsZonesClustersResponse = Operation;
export const SetMasterAuthProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetMasterAuthProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password. */
export const setMasterAuthProjectsZonesClusters: API.OperationMethod<
  SetMasterAuthProjectsZonesClustersRequest,
  SetMasterAuthProjectsZonesClustersResponse,
  SetMasterAuthProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetMasterAuthProjectsZonesClustersRequest,
  output: SetMasterAuthProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CompleteControlPlaneUpgradeProjectsZonesClustersRequest {
  /** The name (project, location, cluster) of the cluster to complete upgrade. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Request body */
  body?: CompleteControlPlaneUpgradeRequest;
}

export const CompleteControlPlaneUpgradeProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CompleteControlPlaneUpgradeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:completeControlPlaneUpgrade",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CompleteControlPlaneUpgradeProjectsZonesClustersRequest>;

export type CompleteControlPlaneUpgradeProjectsZonesClustersResponse =
  Operation;
export const CompleteControlPlaneUpgradeProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CompleteControlPlaneUpgradeProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** CompleteControlPlaneUpgrade completes the rollback-safe upgrade by performing the step two upgrade for a specific cluster. */
export const completeControlPlaneUpgradeProjectsZonesClusters: API.OperationMethod<
  CompleteControlPlaneUpgradeProjectsZonesClustersRequest,
  CompleteControlPlaneUpgradeProjectsZonesClustersResponse,
  CompleteControlPlaneUpgradeProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CompleteControlPlaneUpgradeProjectsZonesClustersRequest,
  output: CompleteControlPlaneUpgradeProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LoggingProjectsZonesClustersRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Request body */
  body?: SetLoggingServiceRequest;
}

export const LoggingProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(SetLoggingServiceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<LoggingProjectsZonesClustersRequest>;

export type LoggingProjectsZonesClustersResponse = Operation;
export const LoggingProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type LoggingProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the logging service for a specific cluster. */
export const loggingProjectsZonesClusters: API.OperationMethod<
  LoggingProjectsZonesClustersRequest,
  LoggingProjectsZonesClustersResponse,
  LoggingProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LoggingProjectsZonesClustersRequest,
  output: LoggingProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MasterProjectsZonesClustersRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Request body */
  body?: UpdateMasterRequest;
}

export const MasterProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(UpdateMasterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<MasterProjectsZonesClustersRequest>;

export type MasterProjectsZonesClustersResponse = Operation;
export const MasterProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type MasterProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the master for a specific cluster. */
export const masterProjectsZonesClusters: API.OperationMethod<
  MasterProjectsZonesClustersRequest,
  MasterProjectsZonesClustersResponse,
  MasterProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MasterProjectsZonesClustersRequest,
  output: MasterProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AddonsProjectsZonesClustersRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Request body */
  body?: SetAddonsConfigRequest;
}

export const AddonsProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(SetAddonsConfigRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddonsProjectsZonesClustersRequest>;

export type AddonsProjectsZonesClustersResponse = Operation;
export const AddonsProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AddonsProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the addons for a specific cluster. */
export const addonsProjectsZonesClusters: API.OperationMethod<
  AddonsProjectsZonesClustersRequest,
  AddonsProjectsZonesClustersResponse,
  AddonsProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddonsProjectsZonesClustersRequest,
  output: AddonsProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CompleteIpRotationProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Request body */
  body?: CompleteIPRotationRequest;
}

export const CompleteIpRotationProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    body: Schema.optional(CompleteIPRotationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CompleteIpRotationProjectsZonesClustersRequest>;

export type CompleteIpRotationProjectsZonesClustersResponse = Operation;
export const CompleteIpRotationProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CompleteIpRotationProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Completes master IP rotation. */
export const completeIpRotationProjectsZonesClusters: API.OperationMethod<
  CompleteIpRotationProjectsZonesClustersRequest,
  CompleteIpRotationProjectsZonesClustersResponse,
  CompleteIpRotationProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CompleteIpRotationProjectsZonesClustersRequest,
  output: CompleteIpRotationProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsZonesClustersRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
}

export const GetProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsZonesClustersRequest>;

export type GetProjectsZonesClustersResponse = Cluster;
export const GetProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Cluster;

export type GetProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details for a specific cluster. */
export const getProjectsZonesClusters: API.OperationMethod<
  GetProjectsZonesClustersRequest,
  GetProjectsZonesClustersResponse,
  GetProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsZonesClustersRequest,
  output: GetProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
  zone: string;
  /** Request body */
  body?: CreateClusterRequest;
}

export const CreateProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    body: Schema.optional(CreateClusterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsZonesClustersRequest>;

export type CreateProjectsZonesClustersResponse = Operation;
export const CreateProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using. */
export const createProjectsZonesClusters: API.OperationMethod<
  CreateProjectsZonesClustersRequest,
  CreateProjectsZonesClustersResponse,
  CreateProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsZonesClustersRequest,
  output: CreateProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartIpRotationProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Request body */
  body?: StartIPRotationRequest;
}

export const StartIpRotationProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    body: Schema.optional(StartIPRotationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StartIpRotationProjectsZonesClustersRequest>;

export type StartIpRotationProjectsZonesClustersResponse = Operation;
export const StartIpRotationProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StartIpRotationProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts master IP rotation. */
export const startIpRotationProjectsZonesClusters: API.OperationMethod<
  StartIpRotationProjectsZonesClustersRequest,
  StartIpRotationProjectsZonesClustersResponse,
  StartIpRotationProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartIpRotationProjectsZonesClustersRequest,
  output: StartIpRotationProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResourceLabelsProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Request body */
  body?: SetLabelsRequest;
}

export const ResourceLabelsProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    body: Schema.optional(SetLabelsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResourceLabelsProjectsZonesClustersRequest>;

export type ResourceLabelsProjectsZonesClustersResponse = Operation;
export const ResourceLabelsProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ResourceLabelsProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets labels on a cluster. */
export const resourceLabelsProjectsZonesClusters: API.OperationMethod<
  ResourceLabelsProjectsZonesClustersRequest,
  ResourceLabelsProjectsZonesClustersResponse,
  ResourceLabelsProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResourceLabelsProjectsZonesClustersRequest,
  output: ResourceLabelsProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetMaintenancePolicyProjectsZonesClustersRequest {
  /** Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). */
  projectId: string;
  /** Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. */
  zone: string;
  /** Required. The name of the cluster to update. */
  clusterId: string;
  /** Request body */
  body?: SetMaintenancePolicyRequest;
}

export const SetMaintenancePolicyProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    body: Schema.optional(SetMaintenancePolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetMaintenancePolicyProjectsZonesClustersRequest>;

export type SetMaintenancePolicyProjectsZonesClustersResponse = Operation;
export const SetMaintenancePolicyProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetMaintenancePolicyProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the maintenance policy for a cluster. */
export const setMaintenancePolicyProjectsZonesClusters: API.OperationMethod<
  SetMaintenancePolicyProjectsZonesClustersRequest,
  SetMaintenancePolicyProjectsZonesClustersResponse,
  SetMaintenancePolicyProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetMaintenancePolicyProjectsZonesClustersRequest,
  output: SetMaintenancePolicyProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetNetworkPolicyProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Request body */
  body?: SetNetworkPolicyRequest;
}

export const SetNetworkPolicyProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    body: Schema.optional(SetNetworkPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetNetworkPolicyProjectsZonesClustersRequest>;

export type SetNetworkPolicyProjectsZonesClustersResponse = Operation;
export const SetNetworkPolicyProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetNetworkPolicyProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enables or disables Network Policy for a cluster. */
export const setNetworkPolicyProjectsZonesClusters: API.OperationMethod<
  SetNetworkPolicyProjectsZonesClustersRequest,
  SetNetworkPolicyProjectsZonesClustersResponse,
  SetNetworkPolicyProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetNetworkPolicyProjectsZonesClustersRequest,
  output: SetNetworkPolicyProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field. */
  zone: string;
  /** The parent (project and location) where the clusters will be listed. Specified in the format `projects/* /locations/*`. Location "-" matches all zones and all regions. */
  parent?: string;
}

export const ListProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsZonesClustersRequest>;

export type ListProjectsZonesClustersResponse = ListClustersResponse;
export const ListProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListClustersResponse;

export type ListProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all clusters owned by a project in either the specified zone or all zones. */
export const listProjectsZonesClusters: API.OperationMethod<
  ListProjectsZonesClustersRequest,
  ListProjectsZonesClustersResponse,
  ListProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsZonesClustersRequest,
  output: ListProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateProjectsZonesClustersRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Request body */
  body?: UpdateClusterRequest;
}

export const UpdateProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(UpdateClusterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsZonesClustersRequest>;

export type UpdateProjectsZonesClustersResponse = Operation;
export const UpdateProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the settings for a specific cluster. */
export const updateProjectsZonesClusters: API.OperationMethod<
  UpdateProjectsZonesClustersRequest,
  UpdateProjectsZonesClustersResponse,
  UpdateProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsZonesClustersRequest,
  output: UpdateProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchClusterUpgradeInfoProjectsZonesClustersRequest {
  /** API request version that initiates this operation. */
  version?: string;
  /** Required. The name (project, location, cluster) of the cluster to get. Specified in the format `projects/* /locations/* /clusters/*` or `projects/* /zones/* /clusters/*`. */
  name: string;
}

export const FetchClusterUpgradeInfoProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String).pipe(T.HttpQuery("version")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:fetchClusterUpgradeInfo" }),
    svc,
  ) as unknown as Schema.Schema<FetchClusterUpgradeInfoProjectsZonesClustersRequest>;

export type FetchClusterUpgradeInfoProjectsZonesClustersResponse =
  ClusterUpgradeInfo;
export const FetchClusterUpgradeInfoProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ClusterUpgradeInfo;

export type FetchClusterUpgradeInfoProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetch upgrade information of a specific cluster. */
export const fetchClusterUpgradeInfoProjectsZonesClusters: API.OperationMethod<
  FetchClusterUpgradeInfoProjectsZonesClustersRequest,
  FetchClusterUpgradeInfoProjectsZonesClustersResponse,
  FetchClusterUpgradeInfoProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchClusterUpgradeInfoProjectsZonesClustersRequest,
  output: FetchClusterUpgradeInfoProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface LocationsProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Request body */
  body?: SetLocationsRequest;
}

export const LocationsProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    body: Schema.optional(SetLocationsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<LocationsProjectsZonesClustersRequest>;

export type LocationsProjectsZonesClustersResponse = Operation;
export const LocationsProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type LocationsProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead. */
export const locationsProjectsZonesClusters: API.OperationMethod<
  LocationsProjectsZonesClustersRequest,
  LocationsProjectsZonesClustersResponse,
  LocationsProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LocationsProjectsZonesClustersRequest,
  output: LocationsProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MonitoringProjectsZonesClustersRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Request body */
  body?: SetMonitoringServiceRequest;
}

export const MonitoringProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(SetMonitoringServiceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<MonitoringProjectsZonesClustersRequest>;

export type MonitoringProjectsZonesClustersResponse = Operation;
export const MonitoringProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type MonitoringProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the monitoring service for a specific cluster. */
export const monitoringProjectsZonesClusters: API.OperationMethod<
  MonitoringProjectsZonesClustersRequest,
  MonitoringProjectsZonesClustersResponse,
  MonitoringProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MonitoringProjectsZonesClustersRequest,
  output: MonitoringProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LegacyAbacProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Request body */
  body?: SetLegacyAbacRequest;
}

export const LegacyAbacProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    body: Schema.optional(SetLegacyAbacRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<LegacyAbacProjectsZonesClustersRequest>;

export type LegacyAbacProjectsZonesClustersResponse = Operation;
export const LegacyAbacProjectsZonesClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type LegacyAbacProjectsZonesClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enables or disables the ABAC authorization mechanism on a cluster. */
export const legacyAbacProjectsZonesClusters: API.OperationMethod<
  LegacyAbacProjectsZonesClustersRequest,
  LegacyAbacProjectsZonesClustersResponse,
  LegacyAbacProjectsZonesClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LegacyAbacProjectsZonesClustersRequest,
  output: LegacyAbacProjectsZonesClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetManagementProjectsZonesClustersNodePoolsRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. */
  nodePoolId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Request body */
  body?: SetNodePoolManagementRequest;
}

export const SetManagementProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    nodePoolId: Schema.String.pipe(T.HttpPath("nodePoolId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(SetNodePoolManagementRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetManagementProjectsZonesClustersNodePoolsRequest>;

export type SetManagementProjectsZonesClustersNodePoolsResponse = Operation;
export const SetManagementProjectsZonesClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetManagementProjectsZonesClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the NodeManagement options for a node pool. */
export const setManagementProjectsZonesClustersNodePools: API.OperationMethod<
  SetManagementProjectsZonesClustersNodePoolsRequest,
  SetManagementProjectsZonesClustersNodePoolsResponse,
  SetManagementProjectsZonesClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetManagementProjectsZonesClustersNodePoolsRequest,
  output: SetManagementProjectsZonesClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateProjectsZonesClustersNodePoolsRequest {
  /** Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. */
  nodePoolId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Request body */
  body?: UpdateNodePoolRequest;
}

export const UpdateProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePoolId: Schema.String.pipe(T.HttpPath("nodePoolId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(UpdateNodePoolRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsZonesClustersNodePoolsRequest>;

export type UpdateProjectsZonesClustersNodePoolsResponse = Operation;
export const UpdateProjectsZonesClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateProjectsZonesClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the version and/or image type of a specific node pool. */
export const updateProjectsZonesClustersNodePools: API.OperationMethod<
  UpdateProjectsZonesClustersNodePoolsRequest,
  UpdateProjectsZonesClustersNodePoolsResponse,
  UpdateProjectsZonesClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsZonesClustersNodePoolsRequest,
  output: UpdateProjectsZonesClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsZonesClustersNodePoolsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
  zone: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field. */
  clusterId: string;
  /** The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/* /locations/* /clusters/*`. */
  parent?: string;
}

export const ListProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsZonesClustersNodePoolsRequest>;

export type ListProjectsZonesClustersNodePoolsResponse = ListNodePoolsResponse;
export const ListProjectsZonesClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNodePoolsResponse;

export type ListProjectsZonesClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the node pools for a cluster. */
export const listProjectsZonesClustersNodePools: API.OperationMethod<
  ListProjectsZonesClustersNodePoolsRequest,
  ListProjectsZonesClustersNodePoolsResponse,
  ListProjectsZonesClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsZonesClustersNodePoolsRequest,
  output: ListProjectsZonesClustersNodePoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetSizeProjectsZonesClustersNodePoolsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. */
  nodePoolId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Request body */
  body?: SetNodePoolSizeRequest;
}

export const SetSizeProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    nodePoolId: Schema.String.pipe(T.HttpPath("nodePoolId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    body: Schema.optional(SetNodePoolSizeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetSizeProjectsZonesClustersNodePoolsRequest>;

export type SetSizeProjectsZonesClustersNodePoolsResponse = Operation;
export const SetSizeProjectsZonesClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetSizeProjectsZonesClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations. */
export const setSizeProjectsZonesClustersNodePools: API.OperationMethod<
  SetSizeProjectsZonesClustersNodePoolsRequest,
  SetSizeProjectsZonesClustersNodePoolsResponse,
  SetSizeProjectsZonesClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetSizeProjectsZonesClustersNodePoolsRequest,
  output: SetSizeProjectsZonesClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchNodePoolUpgradeInfoProjectsZonesClustersNodePoolsRequest {
  /** Required. The name (project, location, cluster, node pool) of the node pool to get. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*` or `projects/* /zones/* /clusters/* /nodePools/*`. */
  name: string;
  /** API request version that initiates this operation. */
  version?: string;
}

export const FetchNodePoolUpgradeInfoProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    version: Schema.optional(Schema.String).pipe(T.HttpQuery("version")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:fetchNodePoolUpgradeInfo" }),
    svc,
  ) as unknown as Schema.Schema<FetchNodePoolUpgradeInfoProjectsZonesClustersNodePoolsRequest>;

export type FetchNodePoolUpgradeInfoProjectsZonesClustersNodePoolsResponse =
  NodePoolUpgradeInfo;
export const FetchNodePoolUpgradeInfoProjectsZonesClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NodePoolUpgradeInfo;

export type FetchNodePoolUpgradeInfoProjectsZonesClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetch upgrade information of a specific node pool. */
export const fetchNodePoolUpgradeInfoProjectsZonesClustersNodePools: API.OperationMethod<
  FetchNodePoolUpgradeInfoProjectsZonesClustersNodePoolsRequest,
  FetchNodePoolUpgradeInfoProjectsZonesClustersNodePoolsResponse,
  FetchNodePoolUpgradeInfoProjectsZonesClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchNodePoolUpgradeInfoProjectsZonesClustersNodePoolsRequest,
  output: FetchNodePoolUpgradeInfoProjectsZonesClustersNodePoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AutoscalingProjectsZonesClustersNodePoolsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. */
  nodePoolId: string;
  /** Request body */
  body?: SetNodePoolAutoscalingRequest;
}

export const AutoscalingProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    nodePoolId: Schema.String.pipe(T.HttpPath("nodePoolId")),
    body: Schema.optional(SetNodePoolAutoscalingRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AutoscalingProjectsZonesClustersNodePoolsRequest>;

export type AutoscalingProjectsZonesClustersNodePoolsResponse = Operation;
export const AutoscalingProjectsZonesClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AutoscalingProjectsZonesClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the autoscaling settings of a specific node pool. */
export const autoscalingProjectsZonesClustersNodePools: API.OperationMethod<
  AutoscalingProjectsZonesClustersNodePoolsRequest,
  AutoscalingProjectsZonesClustersNodePoolsResponse,
  AutoscalingProjectsZonesClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AutoscalingProjectsZonesClustersNodePoolsRequest,
  output: AutoscalingProjectsZonesClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsZonesClustersNodePoolsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field. */
  nodePoolId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name?: string;
}

export const DeleteProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    nodePoolId: Schema.String.pipe(T.HttpPath("nodePoolId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsZonesClustersNodePoolsRequest>;

export type DeleteProjectsZonesClustersNodePoolsResponse = Operation;
export const DeleteProjectsZonesClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsZonesClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a node pool from a cluster. */
export const deleteProjectsZonesClustersNodePools: API.OperationMethod<
  DeleteProjectsZonesClustersNodePoolsRequest,
  DeleteProjectsZonesClustersNodePoolsResponse,
  DeleteProjectsZonesClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsZonesClustersNodePoolsRequest,
  output: DeleteProjectsZonesClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RollbackProjectsZonesClustersNodePoolsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field. */
  nodePoolId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Request body */
  body?: RollbackNodePoolUpgradeRequest;
}

export const RollbackProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    nodePoolId: Schema.String.pipe(T.HttpPath("nodePoolId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    body: Schema.optional(RollbackNodePoolUpgradeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RollbackProjectsZonesClustersNodePoolsRequest>;

export type RollbackProjectsZonesClustersNodePoolsResponse = Operation;
export const RollbackProjectsZonesClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RollbackProjectsZonesClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed. */
export const rollbackProjectsZonesClustersNodePools: API.OperationMethod<
  RollbackProjectsZonesClustersNodePoolsRequest,
  RollbackProjectsZonesClustersNodePoolsResponse,
  RollbackProjectsZonesClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RollbackProjectsZonesClustersNodePoolsRequest,
  output: RollbackProjectsZonesClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsZonesClustersNodePoolsRequest {
  /** Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field. */
  nodePoolId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name?: string;
}

export const GetProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePoolId: Schema.String.pipe(T.HttpPath("nodePoolId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsZonesClustersNodePoolsRequest>;

export type GetProjectsZonesClustersNodePoolsResponse = NodePool;
export const GetProjectsZonesClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NodePool;

export type GetProjectsZonesClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the requested node pool. */
export const getProjectsZonesClustersNodePools: API.OperationMethod<
  GetProjectsZonesClustersNodePoolsRequest,
  GetProjectsZonesClustersNodePoolsResponse,
  GetProjectsZonesClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsZonesClustersNodePoolsRequest,
  output: GetProjectsZonesClustersNodePoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsZonesClustersNodePoolsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
  zone: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field. */
  clusterId: string;
  /** Request body */
  body?: CreateNodePoolRequest;
}

export const CreateProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    body: Schema.optional(CreateNodePoolRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsZonesClustersNodePoolsRequest>;

export type CreateProjectsZonesClustersNodePoolsResponse = Operation;
export const CreateProjectsZonesClustersNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsZonesClustersNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a node pool for a cluster. */
export const createProjectsZonesClustersNodePools: API.OperationMethod<
  CreateProjectsZonesClustersNodePoolsRequest,
  CreateProjectsZonesClustersNodePoolsResponse,
  CreateProjectsZonesClustersNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsZonesClustersNodePoolsRequest,
  output: CreateProjectsZonesClustersNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsZonesOperationsRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field. */
  operationId: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsZonesOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    operationId: Schema.String.pipe(T.HttpPath("operationId")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsZonesOperationsRequest>;

export type CancelProjectsZonesOperationsResponse = Empty;
export const CancelProjectsZonesOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsZonesOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels the specified operation. */
export const cancelProjectsZonesOperations: API.OperationMethod<
  CancelProjectsZonesOperationsRequest,
  CancelProjectsZonesOperationsResponse,
  CancelProjectsZonesOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsZonesOperationsRequest,
  output: CancelProjectsZonesOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsZonesOperationsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field. */
  zone: string;
  /** The parent (project and location) where the operations will be listed. Specified in the format `projects/* /locations/*`. Location "-" matches all zones and all regions. */
  parent?: string;
}

export const ListProjectsZonesOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/projects/{projectId}/zones/{zone}/operations",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsZonesOperationsRequest>;

export type ListProjectsZonesOperationsResponse = ListOperationsResponse;
export const ListProjectsZonesOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsZonesOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all operations in a project in the specified zone or all zones. */
export const listProjectsZonesOperations: API.OperationMethod<
  ListProjectsZonesOperationsRequest,
  ListProjectsZonesOperationsResponse,
  ListProjectsZonesOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsZonesOperationsRequest,
  output: ListProjectsZonesOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsZonesOperationsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field. */
  operationId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** The name (project, location, operation id) of the operation to get. Specified in the format `projects/* /locations/* /operations/*`. */
  name?: string;
}

export const GetProjectsZonesOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    operationId: Schema.String.pipe(T.HttpPath("operationId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsZonesOperationsRequest>;

export type GetProjectsZonesOperationsResponse = Operation;
export const GetProjectsZonesOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsZonesOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the specified operation. */
export const getProjectsZonesOperations: API.OperationMethod<
  GetProjectsZonesOperationsRequest,
  GetProjectsZonesOperationsResponse,
  GetProjectsZonesOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsZonesOperationsRequest,
  output: GetProjectsZonesOperationsResponse,
  errors: [NotFound, Forbidden],
}));
