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

export interface ConfigConnectorConfig {
  /** Whether Cloud Connector is enabled for this cluster. */
  enabled?: boolean;
}

export const ConfigConnectorConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ConfigConnectorConfig" });

export interface NetworkPolicyConfig {
  /** Whether NetworkPolicy is enabled for this cluster. */
  disabled?: boolean;
}

export const NetworkPolicyConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "NetworkPolicyConfig" });

export interface SandboxConfig {
  /** Type of the sandbox to use for the node (e.g. 'gvisor') */
  sandboxType?: string;
  /** Type of the sandbox to use for the node. */
  type?: "UNSPECIFIED" | "GVISOR" | (string & {});
}

export const SandboxConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sandboxType: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "SandboxConfig" });

export interface LustreCsiDriverConfig {
  /** If set to true, the Lustre CSI driver will install Lustre kernel modules using port 6988. This serves as a workaround for a port conflict with the gke-metadata-server. This field is required ONLY under the following conditions: 1. The GKE node version is older than 1.33.2-gke.4655000. 2. You're connecting to a Lustre instance that has the 'gke-support-enabled' flag. Deprecated: This flag is no longer required as of GKE node version 1.33.2-gke.4655000, unless you are connecting to a Lustre instance that has the `gke-support-enabled` flag. */
  enableLegacyLustrePort?: boolean;
  /** Whether the Lustre CSI driver is enabled for this cluster. */
  enabled?: boolean;
  /** When set to true, this disables multi-NIC support for the Lustre CSI driver. By default, GKE enables multi-NIC support, which allows the Lustre CSI driver to automatically detect and configure all suitable network interfaces on a node to maximize I/O performance for demanding workloads. */
  disableMultiNic?: boolean;
}

export const LustreCsiDriverConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enableLegacyLustrePort: Schema.optional(Schema.Boolean),
  enabled: Schema.optional(Schema.Boolean),
  disableMultiNic: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "LustreCsiDriverConfig" });

export interface VirtualNIC {
  /** Whether gVNIC features are enabled in the node pool. */
  enabled?: boolean;
}

export const VirtualNIC = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "VirtualNIC" });

export interface DefaultSnatStatus {
  /** Disables cluster default sNAT rules. */
  disabled?: boolean;
}

export const DefaultSnatStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "DefaultSnatStatus" });

export interface PrivilegedAdmissionConfig {
  /** The customer allowlist Cloud Storage paths for the cluster. These paths are used with the `--autopilot-privileged-admission` flag to authorize privileged workloads in Autopilot clusters. Paths can be GKE-owned, in the format `gke:////`, or customer-owned, in the format `gs:///`. Wildcards (`*`) are supported to authorize all allowlists under specific paths or directories. Example: `gs://my-bucket/*` will authorize all allowlists under the `my-bucket` bucket. */
  allowlistPaths?: ReadonlyArray<string>;
}

export const PrivilegedAdmissionConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowlistPaths: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PrivilegedAdmissionConfig" });

export interface IdentityServiceConfig {
  /** Whether to enable the Identity Service component */
  enabled?: boolean;
}

export const IdentityServiceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "IdentityServiceConfig" });

export interface DefaultComputeClassConfig {
  /** Enables default compute class. */
  enabled?: boolean;
}

export const DefaultComputeClassConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DefaultComputeClassConfig" });

export interface ResourceLimit {
  /** Minimum amount of the resource in the cluster. */
  minimum?: string;
  /** Resource name "cpu", "memory" or gpu-specific string. */
  resourceType?: string;
  /** Maximum amount of the resource in the cluster. */
  maximum?: string;
}

export const ResourceLimit = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  minimum: Schema.optional(Schema.String),
  resourceType: Schema.optional(Schema.String),
  maximum: Schema.optional(Schema.String),
}).annotate({ identifier: "ResourceLimit" });

export interface ShieldedInstanceConfig {
  /** Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. */
  enableIntegrityMonitoring?: boolean;
  /** Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. */
  enableSecureBoot?: boolean;
}

export const ShieldedInstanceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    enableIntegrityMonitoring: Schema.optional(Schema.Boolean),
    enableSecureBoot: Schema.optional(Schema.Boolean),
  },
).annotate({ identifier: "ShieldedInstanceConfig" });

export interface StandardRolloutPolicy {
  /** Soak time after each batch gets drained. Default to zero. */
  batchSoakDuration?: string;
  /** Percentage of the blue pool nodes to drain in a batch. The range of this field should be (0.0, 1.0]. */
  batchPercentage?: number;
  /** Number of blue nodes to drain in a batch. */
  batchNodeCount?: number;
}

export const StandardRolloutPolicy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  batchSoakDuration: Schema.optional(Schema.String),
  batchPercentage: Schema.optional(Schema.Number),
  batchNodeCount: Schema.optional(Schema.Number),
}).annotate({ identifier: "StandardRolloutPolicy" });

export interface AutoscaledRolloutPolicy {
  /** Optional. Time to wait after cordoning the blue pool before draining the nodes. Defaults to 3 days. The value can be set between 0 and 7 days, inclusive. */
  waitForDrainDuration?: string;
}

export const AutoscaledRolloutPolicy =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    waitForDrainDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutoscaledRolloutPolicy" });

export interface BlueGreenSettings {
  /** Standard policy for the blue-green upgrade. */
  standardRolloutPolicy?: StandardRolloutPolicy;
  /** Autoscaled policy for cluster autoscaler enabled blue-green upgrade. */
  autoscaledRolloutPolicy?: AutoscaledRolloutPolicy;
  /** Time needed after draining entire blue pool. After this period, blue pool will be cleaned up. */
  nodePoolSoakDuration?: string;
}

export const BlueGreenSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  standardRolloutPolicy: Schema.optional(StandardRolloutPolicy),
  autoscaledRolloutPolicy: Schema.optional(AutoscaledRolloutPolicy),
  nodePoolSoakDuration: Schema.optional(Schema.String),
}).annotate({ identifier: "BlueGreenSettings" });

export interface UpgradeSettings {
  /** The maximum number of nodes that can be simultaneously unavailable during the upgrade process. A node is considered available if its status is Ready. */
  maxUnavailable?: number;
  /** Settings for blue-green upgrade strategy. */
  blueGreenSettings?: BlueGreenSettings;
  /** Update strategy of the node pool. */
  strategy?:
    | "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
    | "BLUE_GREEN"
    | "SURGE"
    | "SHORT_LIVED"
    | (string & {});
  /** The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. */
  maxSurge?: number;
}

export const UpgradeSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxUnavailable: Schema.optional(Schema.Number),
  blueGreenSettings: Schema.optional(BlueGreenSettings),
  strategy: Schema.optional(Schema.String),
  maxSurge: Schema.optional(Schema.Number),
}).annotate({ identifier: "UpgradeSettings" });

export interface AutoUpgradeOptions {
  /** Output only. This field is set when upgrades are about to commence with the approximate start time for the upgrades, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  autoUpgradeStartTime?: string;
  /** Output only. This field is set when upgrades are about to commence with the description of the upgrade. */
  description?: string;
}

export const AutoUpgradeOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const NodeManagement = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  autoUpgrade: Schema.optional(Schema.Boolean),
  autoRepair: Schema.optional(Schema.Boolean),
  upgradeOptions: Schema.optional(AutoUpgradeOptions),
}).annotate({ identifier: "NodeManagement" });

export interface AutoprovisioningNodePoolDefaults {
  /** Shielded Instance options. */
  shieldedInstanceConfig?: ShieldedInstanceConfig;
  /** The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption */
  bootDiskKmsKey?: string;
  /** The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Artifact Registry](https://cloud.google.com/artifact-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added. */
  oauthScopes?: ReadonlyArray<string>;
  /** Upgrade settings control disruption and speed of the upgrade. */
  upgradeSettings?: UpgradeSettings;
  /** The image type to use for NAP created node. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types. */
  imageType?: string;
  /** NodeManagement configuration for this NodePool. */
  management?: NodeManagement;
  /** Deprecated. Minimum CPU platform to be used for NAP created node pools. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as minCpuPlatform: Intel Haswell or minCpuPlatform: Intel Sandy Bridge. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform). This field is deprecated, min_cpu_platform should be specified using `cloud.google.com/requested-min-cpu-platform` label selector on the pod. To unset the min cpu platform field pass "automatic" as field value. */
  minCpuPlatform?: string;
  /** Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB. */
  diskSizeGb?: number;
  /** Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard' */
  diskType?: string;
  /** DEPRECATED. Use NodePoolAutoConfig.NodeKubeletConfig instead. */
  insecureKubeletReadonlyPortEnabled?: boolean;
  /** The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used. */
  serviceAccount?: string;
}

export const AutoprovisioningNodePoolDefaults =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shieldedInstanceConfig: Schema.optional(ShieldedInstanceConfig),
    bootDiskKmsKey: Schema.optional(Schema.String),
    oauthScopes: Schema.optional(Schema.Array(Schema.String)),
    upgradeSettings: Schema.optional(UpgradeSettings),
    imageType: Schema.optional(Schema.String),
    management: Schema.optional(NodeManagement),
    minCpuPlatform: Schema.optional(Schema.String),
    diskSizeGb: Schema.optional(Schema.Number),
    diskType: Schema.optional(Schema.String),
    insecureKubeletReadonlyPortEnabled: Schema.optional(Schema.Boolean),
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutoprovisioningNodePoolDefaults" });

export interface ClusterAutoscaling {
  /** Default compute class is a configuration for default compute class. */
  defaultComputeClassConfig?: DefaultComputeClassConfig;
  /** Autopilot general profile for the cluster, which defines the configuration for the cluster. */
  autopilotGeneralProfile?:
    | "AUTOPILOT_GENERAL_PROFILE_UNSPECIFIED"
    | "NO_PERFORMANCE"
    | "NONE"
    | (string & {});
  /** The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes can be created by NAP. */
  autoprovisioningLocations?: ReadonlyArray<string>;
  /** Defines autoscaling behaviour. */
  autoscalingProfile?:
    | "PROFILE_UNSPECIFIED"
    | "OPTIMIZE_UTILIZATION"
    | "BALANCED"
    | (string & {});
  /** Enables automatic node pool creation and deletion. */
  enableNodeAutoprovisioning?: boolean;
  /** Contains global constraints regarding minimum and maximum amount of resources in the cluster. */
  resourceLimits?: ReadonlyArray<ResourceLimit>;
  /** AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP. */
  autoprovisioningNodePoolDefaults?: AutoprovisioningNodePoolDefaults;
}

export const ClusterAutoscaling = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  defaultComputeClassConfig: Schema.optional(DefaultComputeClassConfig),
  autopilotGeneralProfile: Schema.optional(Schema.String),
  autoprovisioningLocations: Schema.optional(Schema.Array(Schema.String)),
  autoscalingProfile: Schema.optional(Schema.String),
  enableNodeAutoprovisioning: Schema.optional(Schema.Boolean),
  resourceLimits: Schema.optional(Schema.Array(ResourceLimit)),
  autoprovisioningNodePoolDefaults: Schema.optional(
    AutoprovisioningNodePoolDefaults,
  ),
}).annotate({ identifier: "ClusterAutoscaling" });

export interface NetworkTags {
  /** List of network tags. */
  tags?: ReadonlyArray<string>;
}

export const NetworkTags = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tags: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "NetworkTags" });

export interface ShieldedNodes {
  /** Whether Shielded Nodes features are enabled on all nodes in this cluster. */
  enabled?: boolean;
}

export const ShieldedNodes = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ShieldedNodes" });

export interface GatewayAPIConfig {
  /** The Gateway API release channel to use for Gateway API. */
  channel?:
    | "CHANNEL_UNSPECIFIED"
    | "CHANNEL_DISABLED"
    | "CHANNEL_EXPERIMENTAL"
    | "CHANNEL_STANDARD"
    | (string & {});
}

export const GatewayAPIConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel: Schema.optional(Schema.String),
}).annotate({ identifier: "GatewayAPIConfig" });

export interface K8sBetaAPIConfig {
  /** api name, e.g. storage.k8s.io/v1beta1/csistoragecapacities. */
  enabledApis?: ReadonlyArray<string>;
}

export const K8sBetaAPIConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabledApis: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "K8sBetaAPIConfig" });

export interface TpuConfig {
  /** IPv4 CIDR block reserved for Cloud TPU in the VPC. */
  ipv4CidrBlock?: string;
  /** Whether to use service networking for Cloud TPU or not. */
  useServiceNetworking?: boolean;
  /** Whether Cloud TPU integration is enabled or not. */
  enabled?: boolean;
}

export const TpuConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ipv4CidrBlock: Schema.optional(Schema.String),
  useServiceNetworking: Schema.optional(Schema.Boolean),
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "TpuConfig" });

export interface BigQueryDestination {
  /** The ID of a BigQuery Dataset. */
  datasetId?: string;
}

export const BigQueryDestination = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasetId: Schema.optional(Schema.String),
}).annotate({ identifier: "BigQueryDestination" });

export interface ConsumptionMeteringConfig {
  /** Whether to enable consumption metering for this cluster. If enabled, a second BigQuery table will be created to hold resource consumption records. */
  enabled?: boolean;
}

export const ConsumptionMeteringConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ConsumptionMeteringConfig" });

export interface ResourceUsageExportConfig {
  /** Configuration to use BigQuery as usage export destination. */
  bigqueryDestination?: BigQueryDestination;
  /** Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic. */
  enableNetworkEgressMetering?: boolean;
  /** Configuration to enable resource consumption metering. */
  consumptionMeteringConfig?: ConsumptionMeteringConfig;
}

export const ResourceUsageExportConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bigqueryDestination: Schema.optional(BigQueryDestination),
    enableNetworkEgressMetering: Schema.optional(Schema.Boolean),
    consumptionMeteringConfig: Schema.optional(ConsumptionMeteringConfig),
  }).annotate({ identifier: "ResourceUsageExportConfig" });

export interface ResourceManagerTags {
  /** Tags must be in one of the following formats ([KEY]=[VALUE]) 1. `tagKeys/{tag_key_id}=tagValues/{tag_value_id}` 2. `{org_id}/{tag_key_name}={tag_value_name}` 3. `{project_id}/{tag_key_name}={tag_value_name}` */
  tags?: Record<string, string>;
}

export const ResourceManagerTags = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "ResourceManagerTags" });

export interface GkeAutoUpgradeConfig {
  /** PatchMode specifies how auto upgrade patch builds should be selected. */
  patchMode?: "PATCH_MODE_UNSPECIFIED" | "ACCELERATED" | (string & {});
}

export const GkeAutoUpgradeConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  patchMode: Schema.optional(Schema.String),
}).annotate({ identifier: "GkeAutoUpgradeConfig" });

export interface AutoIpamConfig {
  /** The flag that enables Auto IPAM on this cluster */
  enabled?: boolean;
}

export const AutoIpamConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "AutoIpamConfig" });

export interface OpportunisticMaintenanceStrategy {
  /** The minimum nodes required to be available in a pool. Blocks maintenance if it would cause the number of running nodes to dip below this value. */
  minNodesPerPool?: string;
  /** The amount of time that a node can remain idle (no customer owned workloads running), before triggering maintenance. */
  nodeIdleTimeWindow?: string;
  /** The window of time that opportunistic maintenance can run. Example: A setting of 14 days implies that opportunistic maintenance can only be ran in the 2 weeks leading up to the scheduled maintenance date. Setting 28 days allows opportunistic maintenance to run at any time in the scheduled maintenance window (all `PERIODIC` maintenance is set 28 days in advance). */
  maintenanceAvailabilityWindow?: string;
}

export const OpportunisticMaintenanceStrategy =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minNodesPerPool: Schema.optional(Schema.String),
    nodeIdleTimeWindow: Schema.optional(Schema.String),
    maintenanceAvailabilityWindow: Schema.optional(Schema.String),
  }).annotate({ identifier: "OpportunisticMaintenanceStrategy" });

export interface HostMaintenancePolicy {
  /** Specifies the frequency of planned maintenance events. */
  maintenanceInterval?:
    | "MAINTENANCE_INTERVAL_UNSPECIFIED"
    | "AS_NEEDED"
    | "PERIODIC"
    | (string & {});
  /** Strategy that will trigger maintenance on behalf of the customer. */
  opportunisticMaintenanceStrategy?: OpportunisticMaintenanceStrategy;
}

export const HostMaintenancePolicy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maintenanceInterval: Schema.optional(Schema.String),
  opportunisticMaintenanceStrategy: Schema.optional(
    OpportunisticMaintenanceStrategy,
  ),
}).annotate({ identifier: "HostMaintenancePolicy" });

export interface SyncRotationConfig {
  /** The interval between two consecutive rotations. Default rotation interval is 2 minutes. */
  rotationInterval?: string;
  /** Whether the rotation is enabled. */
  enabled?: boolean;
}

export const SyncRotationConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rotationInterval: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SyncRotationConfig" });

export interface SecretSyncConfig {
  /** Enable/Disable Secret Sync Config. */
  enabled?: boolean;
  /** Rotation config for secret manager. */
  rotationConfig?: SyncRotationConfig;
}

export const SecretSyncConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  rotationConfig: Schema.optional(SyncRotationConfig),
}).annotate({ identifier: "SecretSyncConfig" });

export interface LoggingVariantConfig {
  /** Logging variant deployed on nodes. */
  variant?:
    | "VARIANT_UNSPECIFIED"
    | "DEFAULT"
    | "MAX_THROUGHPUT"
    | (string & {});
}

export const LoggingVariantConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  variant: Schema.optional(Schema.String),
}).annotate({ identifier: "LoggingVariantConfig" });

export interface NodePoolLoggingConfig {
  /** Logging variant configuration. */
  variantConfig?: LoggingVariantConfig;
}

export const NodePoolLoggingConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  variantConfig: Schema.optional(LoggingVariantConfig),
}).annotate({ identifier: "NodePoolLoggingConfig" });

export interface ClusterNetworkPerformanceConfig {
  /** Specifies the total network bandwidth tier for the NodePool. */
  totalEgressBandwidthTier?: "TIER_UNSPECIFIED" | "TIER_1" | (string & {});
}

export const ClusterNetworkPerformanceConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalEgressBandwidthTier: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterNetworkPerformanceConfig" });

export interface GCPSecretManagerCertificateConfig {
  /** Secret URI, in the form "projects/$PROJECT_ID/secrets/$SECRET_NAME/versions/$VERSION". Version can be fixed (e.g. "2") or "latest" */
  secretUri?: string;
}

export const GCPSecretManagerCertificateConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GCPSecretManagerCertificateConfig" });

export interface CertificateAuthorityDomainConfig {
  /** Secret Manager certificate configuration. */
  gcpSecretManagerCertificateConfig?: GCPSecretManagerCertificateConfig;
  /** List of fully qualified domain names (FQDN). Specifying port is supported. Wildcards are NOT supported. Examples: - `my.customdomain.com` - `10.0.1.2:5000` */
  fqdns?: ReadonlyArray<string>;
}

export const CertificateAuthorityDomainConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcpSecretManagerCertificateConfig: Schema.optional(
      GCPSecretManagerCertificateConfig,
    ),
    fqdns: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CertificateAuthorityDomainConfig" });

export interface PrivateRegistryAccessConfig {
  /** Private registry access is enabled. */
  enabled?: boolean;
  /** Private registry access configuration. */
  certificateAuthorityDomainConfig?: ReadonlyArray<CertificateAuthorityDomainConfig>;
}

export const PrivateRegistryAccessConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    certificateAuthorityDomainConfig: Schema.optional(
      Schema.Array(CertificateAuthorityDomainConfig),
    ),
  }).annotate({ identifier: "PrivateRegistryAccessConfig" });

export interface WritableCgroups {
  /** Optional. Whether writable cgroups is enabled. */
  enabled?: boolean;
}

export const WritableCgroups = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "WritableCgroups" });

export interface CertificateConfig {
  /** The URI configures a secret from [Secret Manager](https://cloud.google.com/secret-manager) in the format "projects/$PROJECT_ID/secrets/$SECRET_NAME/versions/$VERSION" for global secret or "projects/$PROJECT_ID/locations/$REGION/secrets/$SECRET_NAME/versions/$VERSION" for regional secret. Version can be fixed (e.g. "2") or "latest" */
  gcpSecretManagerSecretUri?: string;
}

export const CertificateConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gcpSecretManagerSecretUri: Schema.optional(Schema.String),
}).annotate({ identifier: "CertificateConfig" });

export interface CertificateConfigPair {
  /** Key configures the client private key. Optional. */
  key?: CertificateConfig;
  /** Cert configures the client certificate. */
  cert?: CertificateConfig;
}

export const CertificateConfigPair = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  key: Schema.optional(CertificateConfig),
  cert: Schema.optional(CertificateConfig),
}).annotate({ identifier: "CertificateConfigPair" });

export interface RegistryHeader {
  /** Key configures the header key. */
  key?: string;
  /** Value configures the header value. */
  value?: ReadonlyArray<string>;
}

export const RegistryHeader = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  key: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "RegistryHeader" });

export interface HostConfig {
  /** Client configures the registry host client certificate and key. */
  client?: ReadonlyArray<CertificateConfigPair>;
  /** Header configures the registry host headers. */
  header?: ReadonlyArray<RegistryHeader>;
  /** OverridePath is used to indicate the host's API root endpoint is defined in the URL path rather than by the API specification. This may be used with non-compliant OCI registries which are missing the /v2 prefix. If not set, containerd sets default false. */
  overridePath?: boolean;
  /** Specifies the maximum duration allowed for a connection attempt to complete. A shorter timeout helps reduce delays when falling back to the original registry if the mirror is unreachable. Maximum allowed value is 180s. If not set, containerd sets default 30s. The value should be a decimal number of seconds with an `s` suffix. */
  dialTimeout?: string;
  /** Host configures the registry host/mirror. It supports fully qualified domain names (FQDNs) and IP addresses. Specifying scheme, port or path is supported. Scheme can only be http or https. Wildcards are NOT supported. Examples: - `my.customdomain.com` - `https://my.customdomain.com/path` - `10.0.1.2:5000` */
  host?: string;
  /** CA configures the registry host certificate. */
  ca?: ReadonlyArray<CertificateConfig>;
  /** Capabilities represent the capabilities of the registry host, specifying what operations a host is capable of performing. If not set, containerd enables all capabilities by default. */
  capabilities?: ReadonlyArray<
    | "HOST_CAPABILITY_UNSPECIFIED"
    | "HOST_CAPABILITY_PULL"
    | "HOST_CAPABILITY_RESOLVE"
    | "HOST_CAPABILITY_PUSH"
    | (string & {})
  >;
}

export const HostConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  client: Schema.optional(Schema.Array(CertificateConfigPair)),
  header: Schema.optional(Schema.Array(RegistryHeader)),
  overridePath: Schema.optional(Schema.Boolean),
  dialTimeout: Schema.optional(Schema.String),
  host: Schema.optional(Schema.String),
  ca: Schema.optional(Schema.Array(CertificateConfig)),
  capabilities: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "HostConfig" });

export interface RegistryHostConfig {
  /** Defines the host name of the registry server, which will be used to create configuration file as /etc/containerd/hosts.d//hosts.toml. It supports fully qualified domain names (FQDN) and IP addresses: Specifying port is supported, while scheme and path are NOT supported. Wildcards are NOT supported. Examples: - `my.customdomain.com` - `10.0.1.2:5000` */
  server?: string;
  /** HostConfig configures a list of host-specific configurations for the server. Each server can have at most 10 host configurations. */
  hosts?: ReadonlyArray<HostConfig>;
}

export const RegistryHostConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  server: Schema.optional(Schema.String),
  hosts: Schema.optional(Schema.Array(HostConfig)),
}).annotate({ identifier: "RegistryHostConfig" });

export interface ContainerdConfig {
  /** PrivateRegistryAccessConfig is used to configure access configuration for private container registries. */
  privateRegistryAccessConfig?: PrivateRegistryAccessConfig;
  /** Optional. WritableCgroups defines writable cgroups configuration for the node pool. */
  writableCgroups?: WritableCgroups;
  /** RegistryHostConfig configures containerd registry host configuration. Each registry_hosts represents a hosts.toml file. At most 25 registry_hosts are allowed. */
  registryHosts?: ReadonlyArray<RegistryHostConfig>;
}

export const ContainerdConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  privateRegistryAccessConfig: Schema.optional(PrivateRegistryAccessConfig),
  writableCgroups: Schema.optional(WritableCgroups),
  registryHosts: Schema.optional(Schema.Array(RegistryHostConfig)),
}).annotate({ identifier: "ContainerdConfig" });

export interface DesiredEnterpriseConfig {
  /** desired_tier specifies the desired tier of the cluster. */
  desiredTier?:
    | "CLUSTER_TIER_UNSPECIFIED"
    | "STANDARD"
    | "ENTERPRISE"
    | (string & {});
}

export const DesiredEnterpriseConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    desiredTier: Schema.optional(Schema.String),
  }).annotate({ identifier: "DesiredEnterpriseConfig" });

export interface ClusterPolicyConfig {
  /** Denotes preventing standard node pools and requiring only autopilot node pools. */
  noStandardNodePools?: boolean;
  /** Denotes preventing unsafe webhooks. */
  noUnsafeWebhooks?: boolean;
  /** Denotes that preventing creation and mutation of resources in GKE managed namespaces and cluster-scoped GKE managed resources . */
  noSystemMutation?: boolean;
  /** Denotes preventing impersonation and CSRs for GKE System users. */
  noSystemImpersonation?: boolean;
}

export const ClusterPolicyConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  noStandardNodePools: Schema.optional(Schema.Boolean),
  noUnsafeWebhooks: Schema.optional(Schema.Boolean),
  noSystemMutation: Schema.optional(Schema.Boolean),
  noSystemImpersonation: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ClusterPolicyConfig" });

export interface ComplianceStandard {
  /** Name of the compliance standard. */
  standard?: string;
}

export const ComplianceStandard = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  standard: Schema.optional(Schema.String),
}).annotate({ identifier: "ComplianceStandard" });

export interface CompliancePostureConfig {
  /** List of enabled compliance standards. */
  complianceStandards?: ReadonlyArray<ComplianceStandard>;
  /** Defines the enablement mode for Compliance Posture. */
  mode?: "MODE_UNSPECIFIED" | "DISABLED" | "ENABLED" | (string & {});
}

export const CompliancePostureConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    complianceStandards: Schema.optional(Schema.Array(ComplianceStandard)),
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompliancePostureConfig" });

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

export const WorkloadConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  auditMode: Schema.optional(Schema.String),
}).annotate({ identifier: "WorkloadConfig" });

export interface ProtectConfig {
  /** WorkloadConfig defines which actions are enabled for a cluster's workload configurations. */
  workloadConfig?: WorkloadConfig;
  /** Sets which mode to use for Protect workload vulnerability scanning feature. */
  workloadVulnerabilityMode?:
    | "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
    | "DISABLED"
    | "BASIC"
    | (string & {});
}

export const ProtectConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  workloadConfig: Schema.optional(WorkloadConfig),
  workloadVulnerabilityMode: Schema.optional(Schema.String),
}).annotate({ identifier: "ProtectConfig" });

export interface CidrBlock {
  /** display_name is an optional field for users to identify CIDR blocks. */
  displayName?: string;
  /** cidr_block must be specified in CIDR notation. */
  cidrBlock?: string;
}

export const CidrBlock = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  displayName: Schema.optional(Schema.String),
  cidrBlock: Schema.optional(Schema.String),
}).annotate({ identifier: "CidrBlock" });

export interface MasterAuthorizedNetworksConfig {
  /** cidr_blocks define up to 10 external networks that could access Kubernetes master through HTTPS. */
  cidrBlocks?: ReadonlyArray<CidrBlock>;
  /** Whether master is accessible via Google Compute Engine Public IP addresses. */
  gcpPublicCidrsAccessEnabled?: boolean;
  /** Whether or not master authorized networks is enabled. */
  enabled?: boolean;
  /** Whether master authorized networks is enforced on private endpoint or not. */
  privateEndpointEnforcementEnabled?: boolean;
}

export const MasterAuthorizedNetworksConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cidrBlocks: Schema.optional(Schema.Array(CidrBlock)),
    gcpPublicCidrsAccessEnabled: Schema.optional(Schema.Boolean),
    enabled: Schema.optional(Schema.Boolean),
    privateEndpointEnforcementEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MasterAuthorizedNetworksConfig" });

export interface CrashLoopBackOffConfig {
  /** Optional. The maximum duration the backoff delay can accrue to for container restarts, minimum 1 second, maximum 300 seconds. If not set, defaults to the internal crashloopbackoff maximum. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". See https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#configurable-container-restart-delay for more details. */
  maxContainerRestartPeriod?: string;
}

export const CrashLoopBackOffConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    maxContainerRestartPeriod: Schema.optional(Schema.String),
  },
).annotate({ identifier: "CrashLoopBackOffConfig" });

export interface EvictionMinimumReclaim {
  /** Optional. Minimum reclaim for eviction due to memory available signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  memoryAvailable?: string;
  /** Optional. Minimum reclaim for eviction due to pid available signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  pidAvailable?: string;
  /** Optional. Minimum reclaim for eviction due to imagefs inodes free signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  imagefsInodesFree?: string;
  /** Optional. Minimum reclaim for eviction due to imagefs available signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  imagefsAvailable?: string;
  /** Optional. Minimum reclaim for eviction due to nodefs inodes free signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  nodefsInodesFree?: string;
  /** Optional. Minimum reclaim for eviction due to nodefs available signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  nodefsAvailable?: string;
}

export const EvictionMinimumReclaim = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    memoryAvailable: Schema.optional(Schema.String),
    pidAvailable: Schema.optional(Schema.String),
    imagefsInodesFree: Schema.optional(Schema.String),
    imagefsAvailable: Schema.optional(Schema.String),
    nodefsInodesFree: Schema.optional(Schema.String),
    nodefsAvailable: Schema.optional(Schema.String),
  },
).annotate({ identifier: "EvictionMinimumReclaim" });

export interface TopologyManager {
  /** Configures the strategy for resource alignment. Allowed values are: * none: the default policy, and does not perform any topology alignment. * restricted: the topology manager stores the preferred NUMA node affinity for the container, and will reject the pod if the affinity if not preferred. * best-effort: the topology manager stores the preferred NUMA node affinity for the container. If the affinity is not preferred, the topology manager will admit the pod to the node anyway. * single-numa-node: the topology manager determines if the single NUMA node affinity is possible. If it is, Topology Manager will store this and the Hint Providers can then use this information when making the resource allocation decision. If, however, this is not possible then the Topology Manager will reject the pod from the node. This will result in a pod in a Terminated state with a pod admission failure. The default policy value is 'none' if unspecified. Details about each strategy can be found [here](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager/#topology-manager-policies). */
  policy?: string;
  /** The Topology Manager aligns resources in following scopes: * container * pod The default scope is 'container' if unspecified. See https://kubernetes.io/docs/tasks/administer-cluster/topology-manager/#topology-manager-scopes */
  scope?: string;
}

export const TopologyManager = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  policy: Schema.optional(Schema.String),
  scope: Schema.optional(Schema.String),
}).annotate({ identifier: "TopologyManager" });

export interface EvictionSignals {
  /** Optional. Amount of storage available on filesystem that container runtime uses for storing images layers. If the container filesystem and image filesystem are not separate, then imagefs can store both image layers and writeable layers. Defines the amount of "imagefs.available" signal in kubelet. Default is unset, if not specified in the kubelet config. Sample format: "30%". Must be >= 15%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  imagefsAvailable?: string;
  /** Optional. Amount of storage available on filesystem that kubelet uses for volumes, daemon logs, etc. Defines the amount of "nodefs.available" signal in kubelet. Default is unset, if not specified in the kubelet config. Sample format: "30%". Must be >= 10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  nodefsAvailable?: string;
  /** Optional. Amount of PID available for pod allocation. Defines the amount of "pid.available" signal in kubelet. Default is unset, if not specified in the kubelet config. Sample format: "30%". Must be >= 10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  pidAvailable?: string;
  /** Optional. Amount of inodes available on filesystem that container runtime uses for storing images layers. Defines the amount of "imagefs.inodesFree" signal in kubelet. Default is unset, if not specified in the kubelet config. Linux only. Sample format: "30%". Must be >= 5%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  imagefsInodesFree?: string;
  /** Optional. Amount of inodes available on filesystem that kubelet uses for volumes, daemon logs, etc. Defines the amount of "nodefs.inodesFree" signal in kubelet. Default is unset, if not specified in the kubelet config. Linux only. It takses percentage value for now. Sample format: "30%". Must be >= 5% and <= 50%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  nodefsInodesFree?: string;
  /** Optional. Memory available (i.e. capacity - workingSet), in bytes. Defines the amount of "memory.available" signal in kubelet. Default is unset, if not specified in the kubelet config. Format: positive number + unit, e.g. 100Ki, 10Mi, 5Gi. Valid units are Ki, Mi, Gi. Must be >= 100Mi and <= 50% of the node's memory. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  memoryAvailable?: string;
}

export const EvictionSignals = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  imagefsAvailable: Schema.optional(Schema.String),
  nodefsAvailable: Schema.optional(Schema.String),
  pidAvailable: Schema.optional(Schema.String),
  imagefsInodesFree: Schema.optional(Schema.String),
  nodefsInodesFree: Schema.optional(Schema.String),
  memoryAvailable: Schema.optional(Schema.String),
}).annotate({ identifier: "EvictionSignals" });

export interface EvictionGracePeriod {
  /** Optional. Grace period for eviction due to nodefs inodes free signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  nodefsInodesFree?: string;
  /** Optional. Grace period for eviction due to imagefs inodes free signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  imagefsInodesFree?: string;
  /** Optional. Grace period for eviction due to pid available signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  pidAvailable?: string;
  /** Optional. Grace period for eviction due to nodefs available signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  nodefsAvailable?: string;
  /** Optional. Grace period for eviction due to imagefs available signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  imagefsAvailable?: string;
  /** Optional. Grace period for eviction due to memory available signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals */
  memoryAvailable?: string;
}

export const EvictionGracePeriod = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nodefsInodesFree: Schema.optional(Schema.String),
  imagefsInodesFree: Schema.optional(Schema.String),
  pidAvailable: Schema.optional(Schema.String),
  nodefsAvailable: Schema.optional(Schema.String),
  imagefsAvailable: Schema.optional(Schema.String),
  memoryAvailable: Schema.optional(Schema.String),
}).annotate({ identifier: "EvictionGracePeriod" });

export interface MemoryManager {
  /** Controls the memory management policy on the Node. See https://kubernetes.io/docs/tasks/administer-cluster/memory-manager/#policies The following values are allowed. * "none" * "static" The default value is 'none' if unspecified. */
  policy?: string;
}

export const MemoryManager = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  policy: Schema.optional(Schema.String),
}).annotate({ identifier: "MemoryManager" });

export interface NodeKubeletConfig {
  /** Optional. Defines the minimum age for an unused image before it is garbage collected. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300s", "1.5h", and "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The value must be a positive duration less than or equal to 2 minutes. The default value is "2m0s" if unspecified. */
  imageMinimumGcAge?: string;
  /** Optional. Contains configuration options to modify node-level parameters for container restart behavior. */
  crashLoopBackOff?: CrashLoopBackOffConfig;
  /** Enable CPU CFS quota enforcement for containers that specify CPU limits. This option is enabled by default which makes kubelet use CFS quota (https://www.kernel.org/doc/Documentation/scheduler/sched-bwc.txt) to enforce container CPU limits. Otherwise, CPU limits will not be enforced at all. Disable this option to mitigate CPU throttling problems while still having your pods to be in Guaranteed QoS class by specifying the CPU limits. The default value is 'true' if unspecified. */
  cpuCfsQuota?: boolean;
  /** Optional. Defines a comma-separated allowlist of unsafe sysctls or sysctl patterns (ending in `*`). The unsafe namespaced sysctl groups are `kernel.shm*`, `kernel.msg*`, `kernel.sem`, `fs.mqueue.*`, and `net.*`. Leaving this allowlist empty means they cannot be set on Pods. To allow certain sysctls or sysctl patterns to be set on Pods, list them separated by commas. For example: `kernel.msg*,net.ipv4.route.min_pmtu`. See https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/ for more details. */
  allowedUnsafeSysctls?: ReadonlyArray<string>;
  /** Optional. Defines the percent of disk usage after which image garbage collection is always run. The percent is calculated as this field value out of 100. The value must be between 10 and 85, inclusive and greater than image_gc_low_threshold_percent. The default value is 85 if unspecified. */
  imageGcHighThresholdPercent?: number;
  /** Optional. Defines the maximum number of image pulls in parallel. The range is 2 to 5, inclusive. The default value is 2 or 3 depending on the disk type. See https://kubernetes.io/docs/concepts/containers/images/#maximum-parallel-image-pulls for more details. */
  maxParallelImagePulls?: number;
  /** Optional. Defines the maximum age an image can be unused before it is garbage collected. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300s", "1.5h", and "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The value must be a positive duration greater than image_minimum_gc_age or "0s". The default value is "0s" if unspecified, which disables this field, meaning images won't be garbage collected based on being unused for too long. */
  imageMaximumGcAge?: string;
  /** Optional. eviction_minimum_reclaim is a map of signal names to quantities that defines minimum reclaims, which describe the minimum amount of a given resource the kubelet will reclaim when performing a pod eviction while that resource is under pressure. */
  evictionMinimumReclaim?: EvictionMinimumReclaim;
  /** Optional. Controls Topology Manager configuration on the node. For more information, see: https://kubernetes.io/docs/tasks/administer-cluster/topology-manager/ */
  topologyManager?: TopologyManager;
  /** Optional. shutdown_grace_period_seconds is the maximum allowed grace period (in seconds) the total duration that the node should delay the shutdown during a graceful shutdown. This is the total grace period for pod termination for both regular and critical pods. https://kubernetes.io/docs/concepts/cluster-administration/node-shutdown/ If set to 0, node will not enable the graceful node shutdown functionality. This field is only valid for Spot VMs. Allowed values: 0, 30, 120. */
  shutdownGracePeriodSeconds?: number;
  /** Set the CPU CFS quota period value 'cpu.cfs_period_us'. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The value must be a positive duration between 1ms and 1 second, inclusive. */
  cpuCfsQuotaPeriod?: string;
  /** Control the CPU management policy on the node. See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. * "none": the default, which represents the existing scheduling behavior. * "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node. The default value is 'none' if unspecified. */
  cpuManagerPolicy?: string;
  /** Optional. eviction_soft is a map of signal names to quantities that defines soft eviction thresholds. Each signal is compared to its corresponding threshold to determine if a pod eviction should occur. */
  evictionSoft?: EvictionSignals;
  /** Optional. eviction_max_pod_grace_period_seconds is the maximum allowed grace period (in seconds) to use when terminating pods in response to a soft eviction threshold being met. This value effectively caps the Pod's terminationGracePeriodSeconds value during soft evictions. Default: 0. Range: [0, 300]. */
  evictionMaxPodGracePeriodSeconds?: number;
  /** Optional. shutdown_grace_period_critical_pods_seconds is the maximum allowed grace period (in seconds) used to terminate critical pods during a node shutdown. This value should be <= shutdown_grace_period_seconds, and is only valid if shutdown_grace_period_seconds is set. https://kubernetes.io/docs/concepts/cluster-administration/node-shutdown/ Range: [0, 120]. */
  shutdownGracePeriodCriticalPodsSeconds?: number;
  /** Set the Pod PID limits. See https://kubernetes.io/docs/concepts/policy/pid-limiting/#pod-pid-limits Controls the maximum number of processes allowed to run in a pod. The value must be greater than or equal to 1024 and less than 4194304. */
  podPidsLimit?: string;
  /** Optional. eviction_soft_grace_period is a map of signal names to quantities that defines grace periods for each soft eviction signal. The grace period is the amount of time that a pod must be under pressure before an eviction occurs. */
  evictionSoftGracePeriod?: EvictionGracePeriod;
  /** Optional. Defines the percent of disk usage before which image garbage collection is never run. Lowest disk usage to garbage collect to. The percent is calculated as this field value out of 100. The value must be between 10 and 85, inclusive and smaller than image_gc_high_threshold_percent. The default value is 80 if unspecified. */
  imageGcLowThresholdPercent?: number;
  /** Optional. Defines whether to enable single process OOM killer. If true, will prevent the memory.oom.group flag from being set for container cgroups in cgroups v2. This causes processes in the container to be OOM killed individually instead of as a group. */
  singleProcessOomKill?: boolean;
  /** Enable or disable Kubelet read only port. */
  insecureKubeletReadonlyPortEnabled?: boolean;
  /** Optional. Defines the maximum size of the container log file before it is rotated. See https://kubernetes.io/docs/concepts/cluster-administration/logging/#log-rotation Valid format is positive number + unit, e.g. 100Ki, 10Mi. Valid units are Ki, Mi, Gi. The value must be between 10Mi and 500Mi, inclusive. Note that the total container log size (container_log_max_size * container_log_max_files) cannot exceed 1% of the total storage of the node, to avoid disk pressure caused by log files. The default value is 10Mi if unspecified. */
  containerLogMaxSize?: string;
  /** Optional. Defines the maximum number of container log files that can be present for a container. See https://kubernetes.io/docs/concepts/cluster-administration/logging/#log-rotation The value must be an integer between 2 and 10, inclusive. The default value is 5 if unspecified. */
  containerLogMaxFiles?: number;
  /** Optional. Controls NUMA-aware Memory Manager configuration on the node. For more information, see: https://kubernetes.io/docs/tasks/administer-cluster/memory-manager/ */
  memoryManager?: MemoryManager;
}

export const NodeKubeletConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  imageMinimumGcAge: Schema.optional(Schema.String),
  crashLoopBackOff: Schema.optional(CrashLoopBackOffConfig),
  cpuCfsQuota: Schema.optional(Schema.Boolean),
  allowedUnsafeSysctls: Schema.optional(Schema.Array(Schema.String)),
  imageGcHighThresholdPercent: Schema.optional(Schema.Number),
  maxParallelImagePulls: Schema.optional(Schema.Number),
  imageMaximumGcAge: Schema.optional(Schema.String),
  evictionMinimumReclaim: Schema.optional(EvictionMinimumReclaim),
  topologyManager: Schema.optional(TopologyManager),
  shutdownGracePeriodSeconds: Schema.optional(Schema.Number),
  cpuCfsQuotaPeriod: Schema.optional(Schema.String),
  cpuManagerPolicy: Schema.optional(Schema.String),
  evictionSoft: Schema.optional(EvictionSignals),
  evictionMaxPodGracePeriodSeconds: Schema.optional(Schema.Number),
  shutdownGracePeriodCriticalPodsSeconds: Schema.optional(Schema.Number),
  podPidsLimit: Schema.optional(Schema.String),
  evictionSoftGracePeriod: Schema.optional(EvictionGracePeriod),
  imageGcLowThresholdPercent: Schema.optional(Schema.Number),
  singleProcessOomKill: Schema.optional(Schema.Boolean),
  insecureKubeletReadonlyPortEnabled: Schema.optional(Schema.Boolean),
  containerLogMaxSize: Schema.optional(Schema.String),
  containerLogMaxFiles: Schema.optional(Schema.Number),
  memoryManager: Schema.optional(MemoryManager),
}).annotate({ identifier: "NodeKubeletConfig" });

export interface OperationError {
  /** CloudKMS key resource that had the error. */
  keyName?: string;
  /** Description of the error seen during the operation. */
  errorMessage?: string;
  /** Time when the CloudKMS error was seen. */
  timestamp?: string;
}

export const OperationError = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyName: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.String),
}).annotate({ identifier: "OperationError" });

export interface DatabaseEncryption {
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
  /** Name of CloudKMS key to use for the encryption of secrets in etcd. Ex. projects/my-project/locations/global/keyRings/my-ring/cryptoKeys/my-key */
  keyName?: string;
}

export const DatabaseEncryption = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lastOperationErrors: Schema.optional(Schema.Array(OperationError)),
  state: Schema.optional(Schema.String),
  currentState: Schema.optional(Schema.String),
  decryptionKeys: Schema.optional(Schema.Array(Schema.String)),
  keyName: Schema.optional(Schema.String),
}).annotate({ identifier: "DatabaseEncryption" });

export interface PodAutoscaling {
  /** Selected Horizontal Pod Autoscaling profile. */
  hpaProfile?:
    | "HPA_PROFILE_UNSPECIFIED"
    | "NONE"
    | "PERFORMANCE"
    | (string & {});
}

export const PodAutoscaling = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hpaProfile: Schema.optional(Schema.String),
}).annotate({ identifier: "PodAutoscaling" });

export interface WorkloadALTSConfig {
  /** enable_alts controls whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workload_pool must be non-empty). */
  enableAlts?: boolean;
}

export const WorkloadALTSConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enableAlts: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "WorkloadALTSConfig" });

export interface ParentProductConfig {
  /** Name of the parent product associated with the cluster. */
  productName?: string;
  /** Labels contain the configuration of the parent product. */
  labels?: Record<string, string>;
}

export const ParentProductConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  productName: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "ParentProductConfig" });

export interface ServiceExternalIPsConfig {
  /** Whether Services with ExternalIPs field are allowed or not. */
  enabled?: boolean;
}

export const ServiceExternalIPsConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ServiceExternalIPsConfig" });

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

export const AdvancedDatapathObservabilityConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableMetrics: Schema.optional(Schema.Boolean),
    enableRelay: Schema.optional(Schema.Boolean),
    relayMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdvancedDatapathObservabilityConfig" });

export interface AutoMonitoringConfig {
  /** Scope for GKE Workload Auto-Monitoring. */
  scope?: "SCOPE_UNSPECIFIED" | "ALL" | "NONE" | (string & {});
}

export const AutoMonitoringConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.optional(Schema.String),
}).annotate({ identifier: "AutoMonitoringConfig" });

export interface ManagedPrometheusConfig {
  /** Enable Managed Collection. */
  enabled?: boolean;
  /** GKE Workload Auto-Monitoring Configuration. */
  autoMonitoringConfig?: AutoMonitoringConfig;
}

export const ManagedPrometheusConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    autoMonitoringConfig: Schema.optional(AutoMonitoringConfig),
  }).annotate({ identifier: "ManagedPrometheusConfig" });

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

export const MonitoringComponentConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableComponents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "MonitoringComponentConfig" });

export interface MonitoringConfig {
  /** Configuration of Advanced Datapath Observability features. */
  advancedDatapathObservabilityConfig?: AdvancedDatapathObservabilityConfig;
  /** Enable Google Cloud Managed Service for Prometheus in the cluster. */
  managedPrometheusConfig?: ManagedPrometheusConfig;
  /** Monitoring components configuration */
  componentConfig?: MonitoringComponentConfig;
}

export const MonitoringConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  advancedDatapathObservabilityConfig: Schema.optional(
    AdvancedDatapathObservabilityConfig,
  ),
  managedPrometheusConfig: Schema.optional(ManagedPrometheusConfig),
  componentConfig: Schema.optional(MonitoringComponentConfig),
}).annotate({ identifier: "MonitoringConfig" });

export interface RollbackSafeUpgrade {
  /** A user-defined period for the cluster remains in the rollbackable state. ex: {seconds: 21600}. */
  controlPlaneSoakDuration?: string;
}

export const RollbackSafeUpgrade = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  controlPlaneSoakDuration: Schema.optional(Schema.String),
}).annotate({ identifier: "RollbackSafeUpgrade" });

export interface RBACBindingConfig {
  /** Setting this to true will allow any ClusterRoleBinding and RoleBinding with subjects system:authenticated. */
  enableInsecureBindingSystemAuthenticated?: boolean;
  /** Setting this to true will allow any ClusterRoleBinding and RoleBinding with subjets system:anonymous or system:unauthenticated. */
  enableInsecureBindingSystemUnauthenticated?: boolean;
}

export const RBACBindingConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enableInsecureBindingSystemAuthenticated: Schema.optional(Schema.Boolean),
  enableInsecureBindingSystemUnauthenticated: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "RBACBindingConfig" });

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

export const LoggingComponentConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    enableComponents: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "LoggingComponentConfig" });

export interface LoggingConfig {
  /** Logging components configuration */
  componentConfig?: LoggingComponentConfig;
}

export const LoggingConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  componentConfig: Schema.optional(LoggingComponentConfig),
}).annotate({ identifier: "LoggingConfig" });

export interface WorkloadCertificates {
  /** enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty). */
  enableCertificates?: boolean;
}

export const WorkloadCertificates = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enableCertificates: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "WorkloadCertificates" });

export interface CompatibilityStatus {
  /** Output only. Last time the control plane became available after a minor version binary upgrade with emulated version set. It indicates the last time the cluster entered the rollback safe mode. */
  emulatedVersionTime?: string;
  /** Output only. The GKE version that the cluster can be safely downgraded to if the cluster is emulating the previous minor version. It is usually the cluster's previous version before a minor version upgrade. */
  downgradableVersion?: string;
}

export const CompatibilityStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  emulatedVersionTime: Schema.optional(Schema.String),
  downgradableVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "CompatibilityStatus" });

export interface Master {
  /** Output only. The compatibility status of the control plane. It should be empty if the cluster does not have emulated version. */
  compatibilityStatus?: CompatibilityStatus;
}

export const Master = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  compatibilityStatus: Schema.optional(CompatibilityStatus),
}).annotate({ identifier: "Master" });

export interface PrivateClusterMasterGlobalAccessConfig {
  /** Whenever master is accessible globally or not. */
  enabled?: boolean;
}

export const PrivateClusterMasterGlobalAccessConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PrivateClusterMasterGlobalAccessConfig" });

export interface PrivateClusterConfig {
  /** Whether the master's internal IP address is used as the cluster endpoint. Use ControlPlaneEndpointsConfig.IPEndpointsConfig.enable_public_endpoint instead. Note that the value of enable_public_endpoint is reversed: if enable_private_endpoint is false, then enable_public_endpoint will be true. */
  enablePrivateEndpoint?: boolean;
  /** Controls master global access settings. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.enable_global_access instead. */
  masterGlobalAccessConfig?: PrivateClusterMasterGlobalAccessConfig;
  /** Subnet to provision the master's private endpoint during cluster creation. Specified in projects/* /regions/* /subnetworks/* format. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.private_endpoint_subnetwork instead. */
  privateEndpointSubnetwork?: string;
  /** Output only. The peering name in the customer VPC used by this cluster. */
  peeringName?: string;
  /** Whether nodes have internal IP addresses only. If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking. Deprecated: Use NetworkConfig.default_enable_private_nodes instead. */
  enablePrivateNodes?: boolean;
  /** The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning internal IP addresses to the master or set of masters, as well as the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network. */
  masterIpv4CidrBlock?: string;
  /** Output only. The external IP address of this cluster's master endpoint. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.public_endpoint instead. */
  publicEndpoint?: string;
  /** Output only. The internal IP address of this cluster's master endpoint. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.private_endpoint instead. */
  privateEndpoint?: string;
}

export const PrivateClusterConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enablePrivateEndpoint: Schema.optional(Schema.Boolean),
  masterGlobalAccessConfig: Schema.optional(
    PrivateClusterMasterGlobalAccessConfig,
  ),
  privateEndpointSubnetwork: Schema.optional(Schema.String),
  peeringName: Schema.optional(Schema.String),
  enablePrivateNodes: Schema.optional(Schema.Boolean),
  masterIpv4CidrBlock: Schema.optional(Schema.String),
  publicEndpoint: Schema.optional(Schema.String),
  privateEndpoint: Schema.optional(Schema.String),
}).annotate({ identifier: "PrivateClusterConfig" });

export interface WorkloadPolicyConfig {
  /** If true, workloads can use NET_ADMIN capability. */
  allowNetAdmin?: boolean;
  /** If true, enables the GCW Auditor that audits workloads on standard clusters. */
  autopilotCompatibilityAuditingEnabled?: boolean;
}

export const WorkloadPolicyConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allowNetAdmin: Schema.optional(Schema.Boolean),
  autopilotCompatibilityAuditingEnabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "WorkloadPolicyConfig" });

export interface AdditionalIPRangesConfig {
  /** List of secondary ranges names within this subnetwork that can be used for pod IPs. Example1: gke-pod-range1 Example2: gke-pod-range1,gke-pod-range2 */
  podIpv4RangeNames?: ReadonlyArray<string>;
  /** Draining status of the additional subnet. */
  status?: "STATUS_UNSPECIFIED" | "ACTIVE" | "DRAINING" | (string & {});
  /** Name of the subnetwork. This can be the full path of the subnetwork or just the name. Example1: my-subnet Example2: projects/gke-project/regions/us-central1/subnetworks/my-subnet */
  subnetwork?: string;
}

export const AdditionalIPRangesConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    podIpv4RangeNames: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdditionalIPRangesConfig" });

export interface DesiredAdditionalIPRangesConfig {
  /** List of additional IP ranges configs where each AdditionalIPRangesConfig corresponds to one subnetwork's IP ranges */
  additionalIpRangesConfigs?: ReadonlyArray<AdditionalIPRangesConfig>;
}

export const DesiredAdditionalIPRangesConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additionalIpRangesConfigs: Schema.optional(
      Schema.Array(AdditionalIPRangesConfig),
    ),
  }).annotate({ identifier: "DesiredAdditionalIPRangesConfig" });

export interface EncryptionConfig {
  /** Optional. If true, swap space will not be encrypted. Defaults to false (encrypted). */
  disabled?: boolean;
}

export const EncryptionConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "EncryptionConfig" });

export interface BootDiskProfile {
  /** Specifies the size of the swap space in gibibytes (GiB). */
  swapSizeGib?: string;
  /** Specifies the size of the swap space as a percentage of the boot disk size. */
  swapSizePercent?: number;
}

export const BootDiskProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  swapSizeGib: Schema.optional(Schema.String),
  swapSizePercent: Schema.optional(Schema.Number),
}).annotate({ identifier: "BootDiskProfile" });

export interface DedicatedLocalSsdProfile {
  /** The number of physical local NVMe SSD disks to attach. */
  diskCount?: string;
}

export const DedicatedLocalSsdProfile =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "DedicatedLocalSsdProfile" });

export interface EphemeralLocalSsdProfile {
  /** Specifies the size of the swap space in gibibytes (GiB). */
  swapSizeGib?: string;
  /** Specifies the size of the swap space as a percentage of the ephemeral local SSD capacity. */
  swapSizePercent?: number;
}

export const EphemeralLocalSsdProfile =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    swapSizeGib: Schema.optional(Schema.String),
    swapSizePercent: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EphemeralLocalSsdProfile" });

export interface SwapConfig {
  /** Optional. If omitted, swap space is encrypted by default. */
  encryptionConfig?: EncryptionConfig;
  /** Swap on the node's boot disk. */
  bootDiskProfile?: BootDiskProfile;
  /** Provisions a new, separate local NVMe SSD exclusively for swap. */
  dedicatedLocalSsdProfile?: DedicatedLocalSsdProfile;
  /** Swap on the local SSD shared with pod ephemeral storage. */
  ephemeralLocalSsdProfile?: EphemeralLocalSsdProfile;
  /** Optional. Enables or disables swap for the node pool. */
  enabled?: boolean;
}

export const SwapConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  encryptionConfig: Schema.optional(EncryptionConfig),
  bootDiskProfile: Schema.optional(BootDiskProfile),
  dedicatedLocalSsdProfile: Schema.optional(DedicatedLocalSsdProfile),
  ephemeralLocalSsdProfile: Schema.optional(EphemeralLocalSsdProfile),
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SwapConfig" });

export interface AccurateTimeConfig {
  /** Enables enhanced time synchronization using PTP-KVM. */
  enablePtpKvmTimeSync?: boolean;
}

export const AccurateTimeConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enablePtpKvmTimeSync: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "AccurateTimeConfig" });

export interface HugepagesConfig {
  /** Optional. Amount of 1G hugepages */
  hugepageSize1g?: number;
  /** Optional. Amount of 2M hugepages */
  hugepageSize2m?: number;
}

export const HugepagesConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hugepageSize1g: Schema.optional(Schema.Number),
  hugepageSize2m: Schema.optional(Schema.Number),
}).annotate({ identifier: "HugepagesConfig" });

export interface NodeKernelModuleLoading {
  /** Set the node module loading policy for nodes in the node pool. */
  policy?:
    | "POLICY_UNSPECIFIED"
    | "ENFORCE_SIGNED_MODULES"
    | "DO_NOT_ENFORCE_SIGNED_MODULES"
    | (string & {});
}

export const NodeKernelModuleLoading =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodeKernelModuleLoading" });

export interface LinuxNodeConfig {
  /** Optional. Enables and configures swap space on nodes. If omitted, swap is disabled. */
  swapConfig?: SwapConfig;
  /** Optional. The accurate time configuration for the node pool. */
  accurateTimeConfig?: AccurateTimeConfig;
  /** cgroup_mode specifies the cgroup mode to be used on the node. */
  cgroupMode?:
    | "CGROUP_MODE_UNSPECIFIED"
    | "CGROUP_MODE_V1"
    | "CGROUP_MODE_V2"
    | (string & {});
  /** Optional. Amounts for 2M and 1G hugepages */
  hugepages?: HugepagesConfig;
  /** Optional. Configuration for kernel module loading on nodes. When enabled, the node pool will be provisioned with a Container-Optimized OS image that enforces kernel module signature verification. */
  nodeKernelModuleLoading?: NodeKernelModuleLoading;
  /** The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. The following parameters are supported. net.core.busy_poll net.core.busy_read net.core.netdev_max_backlog net.core.rmem_max net.core.rmem_default net.core.wmem_default net.core.wmem_max net.core.optmem_max net.core.somaxconn net.ipv4.tcp_rmem net.ipv4.tcp_wmem net.ipv4.tcp_tw_reuse net.ipv4.tcp_mtu_probing net.ipv4.tcp_max_orphans net.ipv4.tcp_max_tw_buckets net.ipv4.tcp_syn_retries net.ipv4.tcp_ecn net.ipv4.tcp_congestion_control net.netfilter.nf_conntrack_max net.netfilter.nf_conntrack_buckets net.netfilter.nf_conntrack_tcp_timeout_close_wait net.netfilter.nf_conntrack_tcp_timeout_time_wait net.netfilter.nf_conntrack_tcp_timeout_established net.netfilter.nf_conntrack_acct kernel.shmmni kernel.shmmax kernel.shmall kernel.perf_event_paranoid kernel.sched_rt_runtime_us kernel.softlockup_panic kernel.yama.ptrace_scope kernel.kptr_restrict kernel.dmesg_restrict kernel.sysrq fs.aio-max-nr fs.file-max fs.inotify.max_user_instances fs.inotify.max_user_watches fs.nr_open vm.dirty_background_ratio vm.dirty_background_bytes vm.dirty_expire_centisecs vm.dirty_ratio vm.dirty_bytes vm.dirty_writeback_centisecs vm.max_map_count vm.overcommit_memory vm.overcommit_ratio vm.vfs_cache_pressure vm.swappiness vm.watermark_scale_factor vm.min_free_kbytes */
  sysctls?: Record<string, string>;
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
}

export const LinuxNodeConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  swapConfig: Schema.optional(SwapConfig),
  accurateTimeConfig: Schema.optional(AccurateTimeConfig),
  cgroupMode: Schema.optional(Schema.String),
  hugepages: Schema.optional(HugepagesConfig),
  nodeKernelModuleLoading: Schema.optional(NodeKernelModuleLoading),
  sysctls: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  transparentHugepageDefrag: Schema.optional(Schema.String),
  transparentHugepageEnabled: Schema.optional(Schema.String),
}).annotate({ identifier: "LinuxNodeConfig" });

export interface RangeInfo {
  /** Output only. Name of a range. */
  rangeName?: string;
  /** Output only. The utilization of the range. */
  utilization?: number;
}

export const RangeInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rangeName: Schema.optional(Schema.String),
  utilization: Schema.optional(Schema.Number),
}).annotate({ identifier: "RangeInfo" });

export interface AdditionalPodRangesConfig {
  /** Output only. Information for additional pod range. */
  podRangeInfo?: ReadonlyArray<RangeInfo>;
  /** Name for pod secondary ipv4 range which has the actual range defined ahead. */
  podRangeNames?: ReadonlyArray<string>;
}

export const AdditionalPodRangesConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    podRangeInfo: Schema.optional(Schema.Array(RangeInfo)),
    podRangeNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AdditionalPodRangesConfig" });

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

export const Filter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  eventType: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Filter" });

export interface PubSub {
  /** Allows filtering to one or more specific event types. If no filter is specified, or if a filter is specified with no event types, all event types will be sent */
  filter?: Filter;
  /** The desired Pub/Sub topic to which notifications will be sent by GKE. Format is `projects/{project}/topics/{topic}`. */
  topic?: string;
  /** Enable notifications for Pub/Sub. */
  enabled?: boolean;
}

export const PubSub = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(Filter),
  topic: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "PubSub" });

export interface NotificationConfig {
  /** Notification config for Pub/Sub. */
  pubsub?: PubSub;
}

export const NotificationConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pubsub: Schema.optional(PubSub),
}).annotate({ identifier: "NotificationConfig" });

export interface Fleet {
  /** The type of the cluster's fleet membership. */
  membershipType?:
    | "MEMBERSHIP_TYPE_UNSPECIFIED"
    | "LIGHTWEIGHT"
    | (string & {});
  /** The Fleet host project(project ID or project number) where this cluster will be registered to. This field cannot be changed after the cluster has been registered. */
  project?: string;
  /** Output only. Whether the cluster has been registered through the fleet API. */
  preRegistered?: boolean;
  /** Output only. The full resource name of the registered fleet membership of the cluster, in the format `//gkehub.googleapis.com/projects/* /locations/* /memberships/*`. */
  membership?: string;
}

export const Fleet = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  membershipType: Schema.optional(Schema.String),
  project: Schema.optional(Schema.String),
  preRegistered: Schema.optional(Schema.Boolean),
  membership: Schema.optional(Schema.String),
}).annotate({ identifier: "Fleet" });

export interface PolicyBinding {
  /** The relative resource name of the binauthz platform policy to evaluate. GKE platform policies have the following format: `projects/{project_number}/platforms/gke/policies/{policy_id}`. */
  name?: string;
}

export const PolicyBinding = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const BinaryAuthorization = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  evaluationMode: Schema.optional(Schema.String),
  policyBindings: Schema.optional(Schema.Array(PolicyBinding)),
}).annotate({ identifier: "BinaryAuthorization" });

export interface ControlPlaneEgress {
  /** Defines the mode of control plane egress. */
  mode?: "MODE_UNSPECIFIED" | "VIA_CONTROL_PLANE" | "NONE" | (string & {});
}

export const ControlPlaneEgress = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.String),
}).annotate({ identifier: "ControlPlaneEgress" });

export interface WorkloadIdentityConfig {
  /** The workload pool to attach all Kubernetes service accounts to. */
  workloadPool?: string;
  /** identity provider is the third party identity provider. */
  identityProvider?: string;
  /** IAM Identity Namespace to attach all Kubernetes Service Accounts to. */
  identityNamespace?: string;
}

export const WorkloadIdentityConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    workloadPool: Schema.optional(Schema.String),
    identityProvider: Schema.optional(Schema.String),
    identityNamespace: Schema.optional(Schema.String),
  },
).annotate({ identifier: "WorkloadIdentityConfig" });

export interface ScheduleUpgradeConfig {
  /** Optional. Whether or not scheduled upgrades are enabled. */
  enabled?: boolean;
}

export const ScheduleUpgradeConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ScheduleUpgradeConfig" });

export interface IntraNodeVisibilityConfig {
  /** Enables intra node visibility for this cluster. */
  enabled?: boolean;
}

export const IntraNodeVisibilityConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "IntraNodeVisibilityConfig" });

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

export const ReleaseChannel = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel: Schema.optional(Schema.String),
}).annotate({ identifier: "ReleaseChannel" });

export interface GcfsConfig {
  /** Whether to use GCFS. */
  enabled?: boolean;
}

export const GcfsConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "GcfsConfig" });

export interface UserManagedKeysConfig {
  /** Resource path of the Certificate Authority Service caPool to use for the etcd API CA in this cluster. */
  etcdApiCa?: string;
  /** The Certificate Authority Service caPool to use for the aggregation CA in this cluster. */
  aggregationCa?: string;
  /** Output only. All of the versions of the Cloud KMS cryptoKey that are used by Confidential Hyperdisks on the control plane nodes. */
  controlPlaneDiskEncryptionKeyVersions?: ReadonlyArray<string>;
  /** The Cloud KMS cryptoKeyVersions to use for signing service account JWTs issued by this cluster. Format: `projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{cryptoKey}/cryptoKeyVersions/{cryptoKeyVersion}` */
  serviceAccountSigningKeys?: ReadonlyArray<string>;
  /** Resource path of the Cloud KMS cryptoKey to use for encryption of internal etcd backups. */
  gkeopsEtcdBackupEncryptionKey?: string;
  /** The Certificate Authority Service caPool to use for the cluster CA in this cluster. */
  clusterCa?: string;
  /** Resource path of the Certificate Authority Service caPool to use for the etcd peer CA in this cluster. */
  etcdPeerCa?: string;
  /** The Cloud KMS cryptoKey to use for Confidential Hyperdisk on the control plane nodes. */
  controlPlaneDiskEncryptionKey?: string;
  /** The Cloud KMS cryptoKeyVersions to use for verifying service account JWTs issued by this cluster. Format: `projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{cryptoKey}/cryptoKeyVersions/{cryptoKeyVersion}` */
  serviceAccountVerificationKeys?: ReadonlyArray<string>;
}

export const UserManagedKeysConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  etcdApiCa: Schema.optional(Schema.String),
  aggregationCa: Schema.optional(Schema.String),
  controlPlaneDiskEncryptionKeyVersions: Schema.optional(
    Schema.Array(Schema.String),
  ),
  serviceAccountSigningKeys: Schema.optional(Schema.Array(Schema.String)),
  gkeopsEtcdBackupEncryptionKey: Schema.optional(Schema.String),
  clusterCa: Schema.optional(Schema.String),
  etcdPeerCa: Schema.optional(Schema.String),
  controlPlaneDiskEncryptionKey: Schema.optional(Schema.String),
  serviceAccountVerificationKeys: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "UserManagedKeysConfig" });

export interface ILBSubsettingConfig {
  /** Enables l4 ILB subsetting for this cluster */
  enabled?: boolean;
}

export const ILBSubsettingConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ILBSubsettingConfig" });

export interface ManagedMachineLearningDiagnosticsConfig {
  /** Enable/Disable Managed Machine Learning Diagnostics. */
  enabled?: boolean;
}

export const ManagedMachineLearningDiagnosticsConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ManagedMachineLearningDiagnosticsConfig" });

export interface DNSEndpointConfig {
  /** Controls whether user traffic is allowed over this endpoint. Note that Google-managed services may still use the endpoint even if this is false. */
  allowExternalTraffic?: boolean;
  /** Controls whether the k8s certs auth is allowed via DNS. */
  enableK8sCertsViaDns?: boolean;
  /** Output only. The cluster's DNS endpoint configuration. A DNS format address. This is accessible from the public internet. Ex: uid.us-central1.gke.goog. Always present, but the behavior may change according to the value of DNSEndpointConfig.allow_external_traffic. */
  endpoint?: string;
  /** Controls whether the k8s token auth is allowed via DNS. */
  enableK8sTokensViaDns?: boolean;
}

export const DNSEndpointConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allowExternalTraffic: Schema.optional(Schema.Boolean),
  enableK8sCertsViaDns: Schema.optional(Schema.Boolean),
  endpoint: Schema.optional(Schema.String),
  enableK8sTokensViaDns: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "DNSEndpointConfig" });

export interface IPEndpointsConfig {
  /** Subnet to provision the master's private endpoint during cluster creation. Specified in projects/* /regions/* /subnetworks/* format. It is invalid to specify both PrivateClusterConfig.privateEndpointSubnetwork and this field at the same time. */
  privateEndpointSubnetwork?: string;
  /** Configuration of authorized networks. If enabled, restricts access to the control plane based on source IP. It is invalid to specify both Cluster.masterAuthorizedNetworksConfig and this field at the same time. */
  authorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
  /** Controls whether to allow direct IP access. */
  enabled?: boolean;
  /** Output only. The internal IP address of this cluster's control plane. Only populated if enabled. */
  privateEndpoint?: string;
  /** Controls whether the control plane allows access through a public IP. It is invalid to specify both PrivateClusterConfig.enablePrivateEndpoint and this field at the same time. */
  enablePublicEndpoint?: boolean;
  /** Output only. The external IP address of this cluster's control plane. Only populated if enabled. */
  publicEndpoint?: string;
  /** Controls whether the control plane's private endpoint is accessible from sources in other regions. It is invalid to specify both PrivateClusterMasterGlobalAccessConfig.enabled and this field at the same time. */
  globalAccess?: boolean;
}

export const IPEndpointsConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  privateEndpointSubnetwork: Schema.optional(Schema.String),
  authorizedNetworksConfig: Schema.optional(MasterAuthorizedNetworksConfig),
  enabled: Schema.optional(Schema.Boolean),
  privateEndpoint: Schema.optional(Schema.String),
  enablePublicEndpoint: Schema.optional(Schema.Boolean),
  publicEndpoint: Schema.optional(Schema.String),
  globalAccess: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "IPEndpointsConfig" });

export interface ControlPlaneEndpointsConfig {
  /** DNS endpoint configuration. */
  dnsEndpointConfig?: DNSEndpointConfig;
  /** IP endpoints configuration. */
  ipEndpointsConfig?: IPEndpointsConfig;
}

export const ControlPlaneEndpointsConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsEndpointConfig: Schema.optional(DNSEndpointConfig),
    ipEndpointsConfig: Schema.optional(IPEndpointsConfig),
  }).annotate({ identifier: "ControlPlaneEndpointsConfig" });

export interface AuthenticatorGroupsConfig {
  /** The name of the security group-of-groups to be used. Only relevant if enabled = true. */
  securityGroup?: string;
  /** Whether this cluster should return group membership lookups during authentication using a group of security groups. */
  enabled?: boolean;
}

export const AuthenticatorGroupsConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    securityGroup: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AuthenticatorGroupsConfig" });

export interface NodePoolAutoscaling {
  /** Maximum number of nodes in the node pool. Must be greater than or equal to total_min_node_count. There has to be enough quota to scale up the cluster. The total_*_node_count fields are mutually exclusive with the *_node_count fields. */
  totalMaxNodeCount?: number;
  /** Minimum number of nodes for one location in the node pool. Must be greater than or equal to 0 and less than or equal to max_node_count. */
  minNodeCount?: number;
  /** Maximum number of nodes for one location in the node pool. Must be >= min_node_count. There has to be enough quota to scale up the cluster. */
  maxNodeCount?: number;
  /** Minimum number of nodes in the node pool. Must be greater than or equal to 0 and less than or equal to total_max_node_count. The total_*_node_count fields are mutually exclusive with the *_node_count fields. */
  totalMinNodeCount?: number;
  /** Location policy used when scaling up a node pool. */
  locationPolicy?:
    | "LOCATION_POLICY_UNSPECIFIED"
    | "BALANCED"
    | "ANY"
    | (string & {});
  /** Is autoscaling enabled for this node pool. */
  enabled?: boolean;
  /** Can this node pool be deleted automatically. */
  autoprovisioned?: boolean;
}

export const NodePoolAutoscaling = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totalMaxNodeCount: Schema.optional(Schema.Number),
  minNodeCount: Schema.optional(Schema.Number),
  maxNodeCount: Schema.optional(Schema.Number),
  totalMinNodeCount: Schema.optional(Schema.Number),
  locationPolicy: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  autoprovisioned: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "NodePoolAutoscaling" });

export interface ClusterTelemetry {
  /** Type of the integration. */
  type?: "UNSPECIFIED" | "DISABLED" | "ENABLED" | "SYSTEM_ONLY" | (string & {});
}

export const ClusterTelemetry = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "ClusterTelemetry" });

export interface MeshCertificates {
  /** enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty). */
  enableCertificates?: boolean;
}

export const MeshCertificates = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enableCertificates: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "MeshCertificates" });

export interface DNSConfig {
  /** cluster_dns_domain is the suffix used for all cluster service records. */
  clusterDnsDomain?: string;
  /** cluster_dns_scope indicates the scope of access to cluster DNS records. */
  clusterDnsScope?:
    | "DNS_SCOPE_UNSPECIFIED"
    | "CLUSTER_SCOPE"
    | "VPC_SCOPE"
    | (string & {});
  /** Optional. The domain used in Additive VPC scope. */
  additiveVpcScopeDnsDomain?: string;
  /** cluster_dns indicates which in-cluster DNS provider should be used. */
  clusterDns?:
    | "PROVIDER_UNSPECIFIED"
    | "PLATFORM_DEFAULT"
    | "CLOUD_DNS"
    | "KUBE_DNS"
    | (string & {});
}

export const DNSConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterDnsDomain: Schema.optional(Schema.String),
  clusterDnsScope: Schema.optional(Schema.String),
  additiveVpcScopeDnsDomain: Schema.optional(Schema.String),
  clusterDns: Schema.optional(Schema.String),
}).annotate({ identifier: "DNSConfig" });

export interface ManagedOpenTelemetryConfig {
  /** Scope of the Managed OpenTelemetry pipeline. */
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "NONE"
    | "COLLECTION_AND_INSTRUMENTATION_COMPONENTS"
    | (string & {});
}

export const ManagedOpenTelemetryConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.optional(Schema.String),
  }).annotate({ identifier: "ManagedOpenTelemetryConfig" });

export interface SecurityPostureConfig {
  /** Sets which mode to use for Security Posture features. */
  mode?:
    | "MODE_UNSPECIFIED"
    | "DISABLED"
    | "BASIC"
    | "ENTERPRISE"
    | (string & {});
  /** Sets which mode to use for vulnerability scanning. */
  vulnerabilityMode?:
    | "VULNERABILITY_MODE_UNSPECIFIED"
    | "VULNERABILITY_DISABLED"
    | "VULNERABILITY_BASIC"
    | "VULNERABILITY_ENTERPRISE"
    | (string & {});
}

export const SecurityPostureConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.String),
  vulnerabilityMode: Schema.optional(Schema.String),
}).annotate({ identifier: "SecurityPostureConfig" });

export interface AnonymousAuthenticationConfig {
  /** Defines the mode of limiting anonymous access in the cluster. */
  mode?: "MODE_UNSPECIFIED" | "ENABLED" | "LIMITED" | (string & {});
}

export const AnonymousAuthenticationConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnonymousAuthenticationConfig" });

export interface RotationConfig {
  /** Whether the rotation is enabled. */
  enabled?: boolean;
  /** The interval between two consecutive rotations. Default rotation interval is 2 minutes. */
  rotationInterval?: string;
}

export const RotationConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  rotationInterval: Schema.optional(Schema.String),
}).annotate({ identifier: "RotationConfig" });

export interface SecretManagerConfig {
  /** Rotation config for secret manager. */
  rotationConfig?: RotationConfig;
  /** Enable/Disable Secret Manager Config. */
  enabled?: boolean;
}

export const SecretManagerConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rotationConfig: Schema.optional(RotationConfig),
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SecretManagerConfig" });

export interface KubernetesDashboard {
  /** Whether the Kubernetes Dashboard is enabled for this cluster. */
  disabled?: boolean;
}

export const KubernetesDashboard = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "KubernetesDashboard" });

export interface GcePersistentDiskCsiDriverConfig {
  /** Whether the Compute Engine PD CSI driver is enabled for this cluster. */
  enabled?: boolean;
}

export const GcePersistentDiskCsiDriverConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GcePersistentDiskCsiDriverConfig" });

export interface IstioConfig {
  /** Whether Istio is enabled for this cluster. */
  disabled?: boolean;
  /** The specified Istio auth mode, either none, or mutual TLS. */
  auth?: "AUTH_NONE" | "AUTH_MUTUAL_TLS" | (string & {});
}

export const IstioConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disabled: Schema.optional(Schema.Boolean),
  auth: Schema.optional(Schema.String),
}).annotate({ identifier: "IstioConfig" });

export interface PodSnapshotConfig {
  /** Whether or not the Pod Snapshots feature is enabled. */
  enabled?: boolean;
}

export const PodSnapshotConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "PodSnapshotConfig" });

export interface GcsFuseCsiDriverConfig {
  /** Whether the Cloud Storage Fuse CSI driver is enabled for this cluster. */
  enabled?: boolean;
}

export const GcsFuseCsiDriverConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    enabled: Schema.optional(Schema.Boolean),
  },
).annotate({ identifier: "GcsFuseCsiDriverConfig" });

export interface GcpFilestoreCsiDriverConfig {
  /** Whether the Filestore CSI driver is enabled for this cluster. */
  enabled?: boolean;
}

export const GcpFilestoreCsiDriverConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GcpFilestoreCsiDriverConfig" });

export interface HttpLoadBalancing {
  /** Whether the HTTP Load Balancing controller is enabled in the cluster. When enabled, it runs a small pod in the cluster that manages the load balancers. */
  disabled?: boolean;
}

export const HttpLoadBalancing = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "HttpLoadBalancing" });

export interface AgentSandboxConfig {
  /** Optional. Whether AgentSandbox is enabled for this cluster. */
  enabled?: boolean;
}

export const AgentSandboxConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "AgentSandboxConfig" });

export interface HighScaleCheckpointingConfig {
  /** Whether the High Scale Checkpointing is enabled for this cluster. */
  enabled?: boolean;
}

export const HighScaleCheckpointingConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "HighScaleCheckpointingConfig" });

export interface StatefulHAConfig {
  /** Whether the Stateful HA add-on is enabled for this cluster. */
  enabled?: boolean;
}

export const StatefulHAConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "StatefulHAConfig" });

export interface SliceControllerConfig {
  /** Optional. Indicates whether Slice Controller is enabled in the cluster. */
  enabled?: boolean;
}

export const SliceControllerConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SliceControllerConfig" });

export interface CloudRunConfig {
  /** Whether Cloud Run addon is enabled for this cluster. */
  disabled?: boolean;
  /** Which load balancer type is installed for Cloud Run. */
  loadBalancerType?:
    | "LOAD_BALANCER_TYPE_UNSPECIFIED"
    | "LOAD_BALANCER_TYPE_EXTERNAL"
    | "LOAD_BALANCER_TYPE_INTERNAL"
    | (string & {});
}

export const CloudRunConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disabled: Schema.optional(Schema.Boolean),
  loadBalancerType: Schema.optional(Schema.String),
}).annotate({ identifier: "CloudRunConfig" });

export interface GkeBackupAgentConfig {
  /** Whether the Backup for GKE agent is enabled for this cluster. */
  enabled?: boolean;
}

export const GkeBackupAgentConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "GkeBackupAgentConfig" });

export interface ParallelstoreCsiDriverConfig {
  /** Whether the Cloud Storage Parallelstore CSI driver is enabled for this cluster. */
  enabled?: boolean;
}

export const ParallelstoreCsiDriverConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ParallelstoreCsiDriverConfig" });

export interface KalmConfig {
  /** Whether KALM is enabled for this cluster. */
  enabled?: boolean;
}

export const KalmConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "KalmConfig" });

export interface HorizontalPodAutoscaling {
  /** Whether the Horizontal Pod Autoscaling feature is enabled in the cluster. When enabled, it ensures that metrics are collected into Stackdriver Monitoring. */
  disabled?: boolean;
}

export const HorizontalPodAutoscaling =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "HorizontalPodAutoscaling" });

export interface DnsCacheConfig {
  /** Whether NodeLocal DNSCache is enabled for this cluster. */
  enabled?: boolean;
}

export const DnsCacheConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "DnsCacheConfig" });

export interface RayClusterLoggingConfig {
  /** Enable log collection for Ray clusters. */
  enabled?: boolean;
}

export const RayClusterLoggingConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RayClusterLoggingConfig" });

export interface RayClusterMonitoringConfig {
  /** Enable metrics collection for Ray clusters. */
  enabled?: boolean;
}

export const RayClusterMonitoringConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RayClusterMonitoringConfig" });

export interface RayOperatorConfig {
  /** Optional. Logging configuration for Ray clusters. */
  rayClusterLoggingConfig?: RayClusterLoggingConfig;
  /** Optional. Monitoring configuration for Ray clusters. */
  rayClusterMonitoringConfig?: RayClusterMonitoringConfig;
  /** Whether the Ray addon is enabled for this cluster. */
  enabled?: boolean;
}

export const RayOperatorConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rayClusterLoggingConfig: Schema.optional(RayClusterLoggingConfig),
  rayClusterMonitoringConfig: Schema.optional(RayClusterMonitoringConfig),
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "RayOperatorConfig" });

export interface AddonsConfig {
  /** Configuration for the Kubernetes Dashboard. This addon is deprecated, and will be disabled in 1.15. It is recommended to use the Cloud Console to manage and monitor your Kubernetes clusters, workloads and applications. For more information, see: https://cloud.google.com/kubernetes-engine/docs/concepts/dashboards */
  kubernetesDashboard?: KubernetesDashboard;
  /** Configuration for the Compute Engine Persistent Disk CSI driver. */
  gcePersistentDiskCsiDriverConfig?: GcePersistentDiskCsiDriverConfig;
  /** Configuration for Istio, an open platform to connect, manage, and secure microservices. */
  istioConfig?: IstioConfig;
  /** Configuration for the Pod Snapshot feature. */
  podSnapshotConfig?: PodSnapshotConfig;
  /** Configuration for the Cloud Storage Fuse CSI driver. */
  gcsFuseCsiDriverConfig?: GcsFuseCsiDriverConfig;
  /** Configuration for the Filestore CSI driver. */
  gcpFilestoreCsiDriverConfig?: GcpFilestoreCsiDriverConfig;
  /** Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. */
  httpLoadBalancing?: HttpLoadBalancing;
  /** Optional. Configuration for the AgentSandbox addon. */
  agentSandboxConfig?: AgentSandboxConfig;
  /** Configuration for the High Scale Checkpointing add-on. */
  highScaleCheckpointingConfig?: HighScaleCheckpointingConfig;
  /** Optional. Configuration for the StatefulHA add-on. */
  statefulHaConfig?: StatefulHAConfig;
  /** Optional. Configuration for the slice controller add-on. */
  sliceControllerConfig?: SliceControllerConfig;
  /** Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. */
  configConnectorConfig?: ConfigConnectorConfig;
  /** Configuration for the Cloud Run addon. The `IstioConfig` addon must be enabled in order to enable Cloud Run addon. This option can only be enabled at cluster creation time. */
  cloudRunConfig?: CloudRunConfig;
  /** Configuration for the Backup for GKE agent addon. */
  gkeBackupAgentConfig?: GkeBackupAgentConfig;
  /** Configuration for the Cloud Storage Parallelstore CSI driver. */
  parallelstoreCsiDriverConfig?: ParallelstoreCsiDriverConfig;
  /** Configuration for the KALM addon, which manages the lifecycle of k8s applications. */
  kalmConfig?: KalmConfig;
  /** Configuration for the Lustre CSI driver. */
  lustreCsiDriverConfig?: LustreCsiDriverConfig;
  /** Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. */
  horizontalPodAutoscaling?: HorizontalPodAutoscaling;
  /** Configuration for NodeLocalDNS, a dns cache running on cluster nodes */
  dnsCacheConfig?: DnsCacheConfig;
  /** Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. */
  networkPolicyConfig?: NetworkPolicyConfig;
  /** Optional. Configuration for Ray Operator addon. */
  rayOperatorConfig?: RayOperatorConfig;
}

export const AddonsConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kubernetesDashboard: Schema.optional(KubernetesDashboard),
  gcePersistentDiskCsiDriverConfig: Schema.optional(
    GcePersistentDiskCsiDriverConfig,
  ),
  istioConfig: Schema.optional(IstioConfig),
  podSnapshotConfig: Schema.optional(PodSnapshotConfig),
  gcsFuseCsiDriverConfig: Schema.optional(GcsFuseCsiDriverConfig),
  gcpFilestoreCsiDriverConfig: Schema.optional(GcpFilestoreCsiDriverConfig),
  httpLoadBalancing: Schema.optional(HttpLoadBalancing),
  agentSandboxConfig: Schema.optional(AgentSandboxConfig),
  highScaleCheckpointingConfig: Schema.optional(HighScaleCheckpointingConfig),
  statefulHaConfig: Schema.optional(StatefulHAConfig),
  sliceControllerConfig: Schema.optional(SliceControllerConfig),
  configConnectorConfig: Schema.optional(ConfigConnectorConfig),
  cloudRunConfig: Schema.optional(CloudRunConfig),
  gkeBackupAgentConfig: Schema.optional(GkeBackupAgentConfig),
  parallelstoreCsiDriverConfig: Schema.optional(ParallelstoreCsiDriverConfig),
  kalmConfig: Schema.optional(KalmConfig),
  lustreCsiDriverConfig: Schema.optional(LustreCsiDriverConfig),
  horizontalPodAutoscaling: Schema.optional(HorizontalPodAutoscaling),
  dnsCacheConfig: Schema.optional(DnsCacheConfig),
  networkPolicyConfig: Schema.optional(NetworkPolicyConfig),
  rayOperatorConfig: Schema.optional(RayOperatorConfig),
}).annotate({ identifier: "AddonsConfig" });

export interface CostManagementConfig {
  /** Whether the feature is enabled or not. */
  enabled?: boolean;
}

export const CostManagementConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "CostManagementConfig" });

export interface PodSecurityPolicyConfig {
  /** Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created. */
  enabled?: boolean;
}

export const PodSecurityPolicyConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PodSecurityPolicyConfig" });

export interface NetworkTierConfig {
  /** Network tier configuration. */
  networkTier?:
    | "NETWORK_TIER_UNSPECIFIED"
    | "NETWORK_TIER_DEFAULT"
    | "NETWORK_TIER_PREMIUM"
    | "NETWORK_TIER_STANDARD"
    | (string & {});
}

export const NetworkTierConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  networkTier: Schema.optional(Schema.String),
}).annotate({ identifier: "NetworkTierConfig" });

export interface VerticalPodAutoscaling {
  /** Enables vertical pod autoscaling. */
  enabled?: boolean;
}

export const VerticalPodAutoscaling = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    enabled: Schema.optional(Schema.Boolean),
  },
).annotate({ identifier: "VerticalPodAutoscaling" });

export interface ClusterUpdate {
  /** The desired status of whether to disable default sNAT for this cluster. */
  desiredDefaultSnatStatus?: DefaultSnatStatus;
  /** Enable/Disable L4 LB VPC firewall reconciliation for the cluster. */
  desiredDisableL4LbFirewallReconciliation?: boolean;
  /** The desired privileged admission config for the cluster. */
  desiredPrivilegedAdmissionConfig?: PrivilegedAdmissionConfig;
  /** The desired Identity Service component configuration. */
  desiredIdentityServiceConfig?: IdentityServiceConfig;
  /** The desired image type for the node pool. NOTE: Set the "desired_node_pool" field as well. */
  desiredImageType?: string;
  /** Cluster-level autoscaling configuration. */
  desiredClusterAutoscaling?: ClusterAutoscaling;
  /** The desired network tags that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. */
  desiredNodePoolAutoConfigNetworkTags?: NetworkTags;
  /** Configuration for Shielded Nodes. */
  desiredShieldedNodes?: ShieldedNodes;
  /** The desired config of Gateway API on this cluster. */
  desiredGatewayApiConfig?: GatewayAPIConfig;
  /** The desired state of IPv6 connectivity to Google Services. */
  desiredPrivateIpv6GoogleAccess?:
    | "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
    | "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED"
    | "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE"
    | "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
    | (string & {});
  /** Beta APIs enabled for cluster. */
  desiredK8sBetaApis?: K8sBetaAPIConfig;
  /** The desired Cloud TPU configuration. This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25. */
  desiredTpuConfig?: TpuConfig;
  /** The desired configuration for exporting resource usage. */
  desiredResourceUsageExportConfig?: ResourceUsageExportConfig;
  /** The desired datapath provider for the cluster. */
  desiredDatapathProvider?:
    | "DATAPATH_PROVIDER_UNSPECIFIED"
    | "LEGACY_DATAPATH"
    | "ADVANCED_DATAPATH"
    | (string & {});
  /** The desired resource manager tags that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. */
  desiredNodePoolAutoConfigResourceManagerTags?: ResourceManagerTags;
  /** Configuration for GKE auto upgrade. */
  gkeAutoUpgradeConfig?: GkeAutoUpgradeConfig;
  /** AutoIpamConfig contains all information related to Auto IPAM */
  desiredAutoIpamConfig?: AutoIpamConfig;
  /** HostMaintenancePolicy contains the desired maintenance policy for the Google Compute Engine hosts. */
  desiredHostMaintenancePolicy?: HostMaintenancePolicy;
  /** Configuration for sync Secret Manager secrets as k8s secrets. */
  desiredSecretSyncConfig?: SecretSyncConfig;
  /** The desired node pool logging configuration defaults for the cluster. */
  desiredNodePoolLoggingConfig?: NodePoolLoggingConfig;
  /** The desired network performance config. */
  desiredNetworkPerformanceConfig?: ClusterNetworkPerformanceConfig;
  /** The desired containerd config for the cluster. */
  desiredContainerdConfig?: ContainerdConfig;
  /** The desired enterprise configuration for the cluster. Deprecated: GKE Enterprise features are now available without an Enterprise tier. */
  desiredEnterpriseConfig?: DesiredEnterpriseConfig;
  /** The monitoring service the cluster should use to write metrics. Currently available options: * `monitoring.googleapis.com/kubernetes` - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions. */
  desiredMonitoringService?: string;
  /** The desired autopilot cluster policies that to be enforced in the cluster. */
  desiredAutopilotClusterPolicyConfig?: ClusterPolicyConfig;
  /** Deprecated: Compliance Posture is no longer supported. For more details, see https://cloud.google.com/kubernetes-engine/docs/deprecations/posture-management-deprecation. Enable/Disable Compliance Posture features for the cluster. */
  desiredCompliancePostureConfig?: CompliancePostureConfig;
  /** The Kubernetes version to change the master to. The only valid value is the latest supported version. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version */
  desiredMasterVersion?: string;
  /** Deprecated: Use DesiredSecurityPostureConfig instead. Enable/Disable Protect API features for the cluster. */
  desiredProtectConfig?: ProtectConfig;
  /** The desired configuration options for master authorized networks feature. Deprecated: Use desired_control_plane_endpoints_config.ip_endpoints_config.authorized_networks_config instead. */
  desiredMasterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
  /** The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions. */
  desiredLoggingService?: string;
  /** The desired node kubelet config for all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. */
  desiredNodePoolAutoConfigKubeletConfig?: NodeKubeletConfig;
  /** Configuration of etcd encryption. */
  desiredDatabaseEncryption?: DatabaseEncryption;
  /** The desired config for pod autoscaling. */
  desiredPodAutoscaling?: PodAutoscaling;
  /** Configuration for direct-path (via ALTS) with workload identity. This feature is not officially supported for external customers in Kubernetes Engine when using Workload Identity. */
  desiredWorkloadAltsConfig?: WorkloadALTSConfig;
  /** Enable/Disable FQDN Network Policy for the cluster. */
  desiredEnableFqdnNetworkPolicy?: boolean;
  /** The desired parent product config for the cluster. */
  desiredParentProductConfig?: ParentProductConfig;
  /** ServiceExternalIPsConfig specifies the config for the use of Services with ExternalIPs field. */
  desiredServiceExternalIpsConfig?: ServiceExternalIPsConfig;
  /** The desired monitoring configuration. */
  desiredMonitoringConfig?: MonitoringConfig;
  /** The desired rollback safe upgrade configuration. */
  desiredRollbackSafeUpgrade?: RollbackSafeUpgrade;
  /** The current etag of the cluster. If an etag is provided and does not match the current etag of the cluster, update will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** RBACBindingConfig allows user to restrict ClusterRoleBindings an RoleBindings that can be created. */
  desiredRbacBindingConfig?: RBACBindingConfig;
  /** The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This list must always include the cluster's primary zone. Warning: changing cluster locations will update the locations of all node pools and will result in nodes being added and/or removed. */
  desiredLocations?: ReadonlyArray<string>;
  /** The desired logging configuration. */
  desiredLoggingConfig?: LoggingConfig;
  /** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
  desiredWorkloadCertificates?: WorkloadCertificates;
  /** Configuration for master components. */
  desiredMaster?: Master;
  /** The desired private cluster configuration. master_global_access_config is the only field that can be changed via this field. See also ClusterUpdate.desired_enable_private_endpoint for modifying other fields within PrivateClusterConfig. Deprecated: Use desired_control_plane_endpoints_config.ip_endpoints_config.global_access instead. */
  desiredPrivateClusterConfig?: PrivateClusterConfig;
  /** WorkloadPolicyConfig is the configuration related to GCW workload policy */
  desiredAutopilotWorkloadPolicyConfig?: WorkloadPolicyConfig;
  /** The desired stack type of the cluster. If a stack type is provided and does not match the current stack type of the cluster, update will attempt to change the stack type to the new type. */
  desiredStackType?:
    | "STACK_TYPE_UNSPECIFIED"
    | "IPV4"
    | "IPV4_IPV6"
    | (string & {});
  /** Enable/Disable Multi-Networking for the cluster */
  desiredEnableMultiNetworking?: boolean;
  /** The desired private cluster configuration. Has no effect. Use desired_private_cluster_config instead. */
  privateClusterConfig?: PrivateClusterConfig;
  /** The desired config for additional subnetworks attached to the cluster. */
  desiredAdditionalIpRangesConfig?: DesiredAdditionalIPRangesConfig;
  /** The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version */
  desiredNodeVersion?: string;
  /** Kubernetes open source beta apis enabled on the cluster. Only beta apis */
  enableK8sBetaApis?: K8sBetaAPIConfig;
  /** The desired Linux node config for all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. Currently only `cgroup_mode` can be set here. */
  desiredNodePoolAutoConfigLinuxNodeConfig?: LinuxNodeConfig;
  /** The additional pod ranges to be added to the cluster. These pod ranges can be used by node pools to allocate pod IPs. */
  additionalPodRangesConfig?: AdditionalPodRangesConfig;
  /** The desired node kubelet config for the cluster. */
  desiredNodeKubeletConfig?: NodeKubeletConfig;
  /** Enable/Disable Cilium Clusterwide Network Policy for the cluster. */
  desiredEnableCiliumClusterwideNetworkPolicy?: boolean;
  /** The desired notification configuration. */
  desiredNotificationConfig?: NotificationConfig;
  /** The desired fleet configuration for the cluster. */
  desiredFleet?: Fleet;
  /** The desired configuration options for the Binary Authorization feature. */
  desiredBinaryAuthorization?: BinaryAuthorization;
  /** The desired control plane egress control config for the cluster. */
  desiredControlPlaneEgress?: ControlPlaneEgress;
  /** Configuration for Workload Identity. */
  desiredWorkloadIdentityConfig?: WorkloadIdentityConfig;
  /** The additional pod ranges that are to be removed from the cluster. The pod ranges specified here must have been specified earlier in the 'additional_pod_ranges_config' argument. */
  removedAdditionalPodRangesConfig?: AdditionalPodRangesConfig;
  /** Optional. The desired scheduled upgrades configuration for the cluster. */
  desiredScheduleUpgradeConfig?: ScheduleUpgradeConfig;
  /** Override the default setting of whether future created nodes have private IP addresses only, namely NetworkConfig.default_enable_private_nodes */
  desiredDefaultEnablePrivateNodes?: boolean;
  /** The desired config of Intra-node visibility. */
  desiredIntraNodeVisibilityConfig?: IntraNodeVisibilityConfig;
  /** The desired release channel configuration. */
  desiredReleaseChannel?: ReleaseChannel;
  /** The desired GCFS config for the cluster. */
  desiredGcfsConfig?: GcfsConfig;
  /** The desired user managed keys config for the cluster. */
  desiredUserManagedKeysConfig?: UserManagedKeysConfig;
  /** The desired L4 Internal Load Balancer Subsetting configuration. */
  desiredL4ilbSubsettingConfig?: ILBSubsettingConfig;
  /** The desired managed machine learning diagnostics configuration. */
  desiredManagedMachineLearningDiagnosticsConfig?: ManagedMachineLearningDiagnosticsConfig;
  /** Control plane endpoints configuration. */
  desiredControlPlaneEndpointsConfig?: ControlPlaneEndpointsConfig;
  /** AuthenticatorGroupsConfig specifies the config for the cluster security groups settings. */
  desiredAuthenticatorGroupsConfig?: AuthenticatorGroupsConfig;
  /** Autoscaler configuration for the node pool specified in desired_node_pool_id. If there is only one pool in the cluster and desired_node_pool_id is not provided then the change applies to that single node pool. */
  desiredNodePoolAutoscaling?: NodePoolAutoscaling;
  /** The desired telemetry integration for the cluster. */
  desiredClusterTelemetry?: ClusterTelemetry;
  /** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
  desiredMeshCertificates?: MeshCertificates;
  /** DNSConfig contains clusterDNS config for this cluster. */
  desiredDnsConfig?: DNSConfig;
  /** The desired managed open telemetry configuration. */
  desiredManagedOpentelemetryConfig?: ManagedOpenTelemetryConfig;
  /** Specify the details of in-transit encryption. Now named inter-node transparent encryption. */
  desiredInTransitEncryptionConfig?:
    | "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED"
    | "IN_TRANSIT_ENCRYPTION_DISABLED"
    | "IN_TRANSIT_ENCRYPTION_INTER_NODE_TRANSPARENT"
    | (string & {});
  /** Enable/Disable Security Posture API features for the cluster. */
  desiredSecurityPostureConfig?: SecurityPostureConfig;
  /** Configuration for limiting anonymous access to all endpoints except the health checks. */
  desiredAnonymousAuthenticationConfig?: AnonymousAuthenticationConfig;
  /** Enable/Disable Secret Manager Config. */
  desiredSecretManagerConfig?: SecretManagerConfig;
  /** Configurations for the various addons available to run in the cluster. */
  desiredAddonsConfig?: AddonsConfig;
  /** The desired configuration for the fine-grained cost management feature. */
  desiredCostManagementConfig?: CostManagementConfig;
  /** The Custom keys configuration for the cluster. This field is deprecated. Use ClusterUpdate.desired_user_managed_keys_config instead. */
  userManagedKeysConfig?: UserManagedKeysConfig;
  /** The desired configuration options for the PodSecurityPolicy feature. */
  desiredPodSecurityPolicyConfig?: PodSecurityPolicyConfig;
  /** The desired network tier configuration for the cluster. */
  desiredNetworkTierConfig?: NetworkTierConfig;
  /** The node pool to be upgraded. This field is mandatory if "desired_node_version", "desired_image_family", "desired_node_pool_autoscaling", or "desired_workload_metadata_config" is specified and there is more than one node pool on the cluster. */
  desiredNodePoolId?: string;
  /** Cluster-level Vertical Pod Autoscaling configuration. */
  desiredVerticalPodAutoscaling?: VerticalPodAutoscaling;
  /** Enable/Disable private endpoint for the cluster's master. Deprecated: Use desired_control_plane_endpoints_config.ip_endpoints_config.enable_public_endpoint instead. Note that the value of enable_public_endpoint is reversed: if enable_private_endpoint is false, then enable_public_endpoint will be true. */
  desiredEnablePrivateEndpoint?: boolean;
}

export const ClusterUpdate = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  desiredDefaultSnatStatus: Schema.optional(DefaultSnatStatus),
  desiredDisableL4LbFirewallReconciliation: Schema.optional(Schema.Boolean),
  desiredPrivilegedAdmissionConfig: Schema.optional(PrivilegedAdmissionConfig),
  desiredIdentityServiceConfig: Schema.optional(IdentityServiceConfig),
  desiredImageType: Schema.optional(Schema.String),
  desiredClusterAutoscaling: Schema.optional(ClusterAutoscaling),
  desiredNodePoolAutoConfigNetworkTags: Schema.optional(NetworkTags),
  desiredShieldedNodes: Schema.optional(ShieldedNodes),
  desiredGatewayApiConfig: Schema.optional(GatewayAPIConfig),
  desiredPrivateIpv6GoogleAccess: Schema.optional(Schema.String),
  desiredK8sBetaApis: Schema.optional(K8sBetaAPIConfig),
  desiredTpuConfig: Schema.optional(TpuConfig),
  desiredResourceUsageExportConfig: Schema.optional(ResourceUsageExportConfig),
  desiredDatapathProvider: Schema.optional(Schema.String),
  desiredNodePoolAutoConfigResourceManagerTags:
    Schema.optional(ResourceManagerTags),
  gkeAutoUpgradeConfig: Schema.optional(GkeAutoUpgradeConfig),
  desiredAutoIpamConfig: Schema.optional(AutoIpamConfig),
  desiredHostMaintenancePolicy: Schema.optional(HostMaintenancePolicy),
  desiredSecretSyncConfig: Schema.optional(SecretSyncConfig),
  desiredNodePoolLoggingConfig: Schema.optional(NodePoolLoggingConfig),
  desiredNetworkPerformanceConfig: Schema.optional(
    ClusterNetworkPerformanceConfig,
  ),
  desiredContainerdConfig: Schema.optional(ContainerdConfig),
  desiredEnterpriseConfig: Schema.optional(DesiredEnterpriseConfig),
  desiredMonitoringService: Schema.optional(Schema.String),
  desiredAutopilotClusterPolicyConfig: Schema.optional(ClusterPolicyConfig),
  desiredCompliancePostureConfig: Schema.optional(CompliancePostureConfig),
  desiredMasterVersion: Schema.optional(Schema.String),
  desiredProtectConfig: Schema.optional(ProtectConfig),
  desiredMasterAuthorizedNetworksConfig: Schema.optional(
    MasterAuthorizedNetworksConfig,
  ),
  desiredLoggingService: Schema.optional(Schema.String),
  desiredNodePoolAutoConfigKubeletConfig: Schema.optional(NodeKubeletConfig),
  desiredDatabaseEncryption: Schema.optional(DatabaseEncryption),
  desiredPodAutoscaling: Schema.optional(PodAutoscaling),
  desiredWorkloadAltsConfig: Schema.optional(WorkloadALTSConfig),
  desiredEnableFqdnNetworkPolicy: Schema.optional(Schema.Boolean),
  desiredParentProductConfig: Schema.optional(ParentProductConfig),
  desiredServiceExternalIpsConfig: Schema.optional(ServiceExternalIPsConfig),
  desiredMonitoringConfig: Schema.optional(MonitoringConfig),
  desiredRollbackSafeUpgrade: Schema.optional(RollbackSafeUpgrade),
  etag: Schema.optional(Schema.String),
  desiredRbacBindingConfig: Schema.optional(RBACBindingConfig),
  desiredLocations: Schema.optional(Schema.Array(Schema.String)),
  desiredLoggingConfig: Schema.optional(LoggingConfig),
  desiredWorkloadCertificates: Schema.optional(WorkloadCertificates),
  desiredMaster: Schema.optional(Master),
  desiredPrivateClusterConfig: Schema.optional(PrivateClusterConfig),
  desiredAutopilotWorkloadPolicyConfig: Schema.optional(WorkloadPolicyConfig),
  desiredStackType: Schema.optional(Schema.String),
  desiredEnableMultiNetworking: Schema.optional(Schema.Boolean),
  privateClusterConfig: Schema.optional(PrivateClusterConfig),
  desiredAdditionalIpRangesConfig: Schema.optional(
    DesiredAdditionalIPRangesConfig,
  ),
  desiredNodeVersion: Schema.optional(Schema.String),
  enableK8sBetaApis: Schema.optional(K8sBetaAPIConfig),
  desiredNodePoolAutoConfigLinuxNodeConfig: Schema.optional(LinuxNodeConfig),
  additionalPodRangesConfig: Schema.optional(AdditionalPodRangesConfig),
  desiredNodeKubeletConfig: Schema.optional(NodeKubeletConfig),
  desiredEnableCiliumClusterwideNetworkPolicy: Schema.optional(Schema.Boolean),
  desiredNotificationConfig: Schema.optional(NotificationConfig),
  desiredFleet: Schema.optional(Fleet),
  desiredBinaryAuthorization: Schema.optional(BinaryAuthorization),
  desiredControlPlaneEgress: Schema.optional(ControlPlaneEgress),
  desiredWorkloadIdentityConfig: Schema.optional(WorkloadIdentityConfig),
  removedAdditionalPodRangesConfig: Schema.optional(AdditionalPodRangesConfig),
  desiredScheduleUpgradeConfig: Schema.optional(ScheduleUpgradeConfig),
  desiredDefaultEnablePrivateNodes: Schema.optional(Schema.Boolean),
  desiredIntraNodeVisibilityConfig: Schema.optional(IntraNodeVisibilityConfig),
  desiredReleaseChannel: Schema.optional(ReleaseChannel),
  desiredGcfsConfig: Schema.optional(GcfsConfig),
  desiredUserManagedKeysConfig: Schema.optional(UserManagedKeysConfig),
  desiredL4ilbSubsettingConfig: Schema.optional(ILBSubsettingConfig),
  desiredManagedMachineLearningDiagnosticsConfig: Schema.optional(
    ManagedMachineLearningDiagnosticsConfig,
  ),
  desiredControlPlaneEndpointsConfig: Schema.optional(
    ControlPlaneEndpointsConfig,
  ),
  desiredAuthenticatorGroupsConfig: Schema.optional(AuthenticatorGroupsConfig),
  desiredNodePoolAutoscaling: Schema.optional(NodePoolAutoscaling),
  desiredClusterTelemetry: Schema.optional(ClusterTelemetry),
  desiredMeshCertificates: Schema.optional(MeshCertificates),
  desiredDnsConfig: Schema.optional(DNSConfig),
  desiredManagedOpentelemetryConfig: Schema.optional(
    ManagedOpenTelemetryConfig,
  ),
  desiredInTransitEncryptionConfig: Schema.optional(Schema.String),
  desiredSecurityPostureConfig: Schema.optional(SecurityPostureConfig),
  desiredAnonymousAuthenticationConfig: Schema.optional(
    AnonymousAuthenticationConfig,
  ),
  desiredSecretManagerConfig: Schema.optional(SecretManagerConfig),
  desiredAddonsConfig: Schema.optional(AddonsConfig),
  desiredCostManagementConfig: Schema.optional(CostManagementConfig),
  userManagedKeysConfig: Schema.optional(UserManagedKeysConfig),
  desiredPodSecurityPolicyConfig: Schema.optional(PodSecurityPolicyConfig),
  desiredNetworkTierConfig: Schema.optional(NetworkTierConfig),
  desiredNodePoolId: Schema.optional(Schema.String),
  desiredVerticalPodAutoscaling: Schema.optional(VerticalPodAutoscaling),
  desiredEnablePrivateEndpoint: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ClusterUpdate" });

export interface DisruptionBudget {
  /** Optional. The minimum duration between two patch version upgrades of the control plane. */
  patchVersionDisruptionInterval?: string;
  /** Optional. The minimum duration between two minor version upgrades of the control plane. */
  minorVersionDisruptionInterval?: string;
  /** Output only. The last time a disruption was performed on the control plane. */
  lastDisruptionTime?: string;
  /** Output only. The last time a minor version upgrade was performed on the control plane. */
  lastMinorVersionDisruptionTime?: string;
}

export const DisruptionBudget = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  patchVersionDisruptionInterval: Schema.optional(Schema.String),
  minorVersionDisruptionInterval: Schema.optional(Schema.String),
  lastDisruptionTime: Schema.optional(Schema.String),
  lastMinorVersionDisruptionTime: Schema.optional(Schema.String),
}).annotate({ identifier: "DisruptionBudget" });

export interface Metric {
  /** Required. Metric name, e.g., "nodes total", "percent done". */
  name?: string;
  /** For metrics with custom values (ratios, visual progress, etc.). */
  stringValue?: string;
  /** For metrics with floating point value. */
  doubleValue?: number;
  /** For metrics with integer value. */
  intValue?: string;
}

export const Metric = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  stringValue: Schema.optional(Schema.String),
  doubleValue: Schema.optional(Schema.Number),
  intValue: Schema.optional(Schema.String),
}).annotate({ identifier: "Metric" });

export interface AvailableVersion {
  /** Kubernetes version. */
  version?: string;
  /** Reason for availability. */
  reason?: string;
}

export const AvailableVersion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  version: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
}).annotate({ identifier: "AvailableVersion" });

export interface ReleaseChannelConfig {
  /** The release channel this configuration applies to. */
  channel?:
    | "UNSPECIFIED"
    | "RAPID"
    | "REGULAR"
    | "STABLE"
    | "EXTENDED"
    | (string & {});
  /** The auto upgrade target version for clusters on the channel. */
  upgradeTargetVersion?: string;
  /** Deprecated. This field has been deprecated and replaced with the valid_versions field. */
  availableVersions?: ReadonlyArray<AvailableVersion>;
  /** List of valid versions for the channel. */
  validVersions?: ReadonlyArray<string>;
  /** The default version for newly created clusters on the channel. */
  defaultVersion?: string;
}

export const ReleaseChannelConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel: Schema.optional(Schema.String),
  upgradeTargetVersion: Schema.optional(Schema.String),
  availableVersions: Schema.optional(Schema.Array(AvailableVersion)),
  validVersions: Schema.optional(Schema.Array(Schema.String)),
  defaultVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "ReleaseChannelConfig" });

export interface MaintenanceExclusionOptions {
  /** EndTimeBehavior specifies the behavior of the exclusion end time. */
  endTimeBehavior?:
    | "END_TIME_BEHAVIOR_UNSPECIFIED"
    | "UNTIL_END_OF_SUPPORT"
    | (string & {});
  /** Scope specifies the upgrade scope which upgrades are blocked by the exclusion. */
  scope?:
    | "NO_UPGRADES"
    | "NO_MINOR_UPGRADES"
    | "NO_MINOR_OR_NODE_UPGRADES"
    | (string & {});
}

export const MaintenanceExclusionOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTimeBehavior: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaintenanceExclusionOptions" });

export interface TimeWindow {
  /** The time that the window ends. The end time should take place after the start time. */
  endTime?: string;
  /** MaintenanceExclusionOptions provides maintenance exclusion related options. */
  maintenanceExclusionOptions?: MaintenanceExclusionOptions;
  /** The time that the window first starts. */
  startTime?: string;
}

export const TimeWindow = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endTime: Schema.optional(Schema.String),
  maintenanceExclusionOptions: Schema.optional(MaintenanceExclusionOptions),
  startTime: Schema.optional(Schema.String),
}).annotate({ identifier: "TimeWindow" });

export interface UpdateClusterRequest {
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Required. A description of the update. */
  update?: ClusterUpdate;
  /** The name (project, location, cluster) of the cluster to update. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
}

export const UpdateClusterRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterId: Schema.optional(Schema.String),
  projectId: Schema.optional(Schema.String),
  update: Schema.optional(ClusterUpdate),
  name: Schema.optional(Schema.String),
  zone: Schema.optional(Schema.String),
}).annotate({ identifier: "UpdateClusterRequest" });

export interface MaxPodsConstraint {
  /** Constraint enforced on the max num of pods per node. */
  maxPodsPerNode?: string;
}

export const MaxPodsConstraint = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxPodsPerNode: Schema.optional(Schema.String),
}).annotate({ identifier: "MaxPodsConstraint" });

export interface SetNodePoolSizeRequest {
  /** Required. The desired node count for the pool. */
  nodeCount?: number;
  /** The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. */
  nodePoolId?: string;
  /** Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
}

export const SetNodePoolSizeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    nodeCount: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    nodePoolId: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
  },
).annotate({ identifier: "SetNodePoolSizeRequest" });

export interface StatusCondition {
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
}

export const StatusCondition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  canonicalCode: Schema.optional(Schema.String),
}).annotate({ identifier: "StatusCondition" });

export interface QueuedProvisioning {
  /** Denotes that this node pool is QRM specific, meaning nodes can be only obtained through queuing via the Cluster Autoscaler ProvisioningRequest API. */
  enabled?: boolean;
}

export const QueuedProvisioning = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "QueuedProvisioning" });

export interface CompleteNodePoolUpgradeRequest {}

export const CompleteNodePoolUpgradeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CompleteNodePoolUpgradeRequest",
  });

export interface LocalNvmeSsdBlockConfig {
  /** Number of local NVMe SSDs to use. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. */
  localSsdCount?: number;
}

export const LocalNvmeSsdBlockConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localSsdCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "LocalNvmeSsdBlockConfig" });

export interface NodeConfigDefaults {
  /** Parameters for containerd customization. */
  containerdConfig?: ContainerdConfig;
  /** Logging configuration for node pools. */
  loggingConfig?: NodePoolLoggingConfig;
  /** HostMaintenancePolicy contains the desired maintenance policy for the Google Compute Engine hosts. */
  hostMaintenancePolicy?: HostMaintenancePolicy;
  /** GCFS (Google Container File System, also known as Riptide) options. */
  gcfsConfig?: GcfsConfig;
  /** NodeKubeletConfig controls the defaults for new node-pools. Currently only `insecure_kubelet_readonly_port_enabled` can be set here. */
  nodeKubeletConfig?: NodeKubeletConfig;
}

export const NodeConfigDefaults = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  containerdConfig: Schema.optional(ContainerdConfig),
  loggingConfig: Schema.optional(NodePoolLoggingConfig),
  hostMaintenancePolicy: Schema.optional(HostMaintenancePolicy),
  gcfsConfig: Schema.optional(GcfsConfig),
  nodeKubeletConfig: Schema.optional(NodeKubeletConfig),
}).annotate({ identifier: "NodeConfigDefaults" });

export interface NodePoolDefaults {
  /** Subset of NodeConfig message that has defaults. */
  nodeConfigDefaults?: NodeConfigDefaults;
}

export const NodePoolDefaults = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nodeConfigDefaults: Schema.optional(NodeConfigDefaults),
}).annotate({ identifier: "NodePoolDefaults" });

export interface Jwk {
  /** Key Type. */
  kty?: string;
  /** Permitted uses for the public keys. */
  use?: string;
  /** Key ID. */
  kid?: string;
  /** Used for ECDSA keys. */
  y?: string;
  /** Used for RSA keys. */
  n?: string;
  /** Used for ECDSA keys. */
  crv?: string;
  /** Algorithm. */
  alg?: string;
  /** Used for ECDSA keys. */
  x?: string;
  /** Used for RSA keys. */
  e?: string;
}

export const Jwk = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kty: Schema.optional(Schema.String),
  use: Schema.optional(Schema.String),
  kid: Schema.optional(Schema.String),
  y: Schema.optional(Schema.String),
  n: Schema.optional(Schema.String),
  crv: Schema.optional(Schema.String),
  alg: Schema.optional(Schema.String),
  x: Schema.optional(Schema.String),
  e: Schema.optional(Schema.String),
}).annotate({ identifier: "Jwk" });

export interface ConfidentialNodes {
  /** Defines the type of technology used by the confidential node. */
  confidentialInstanceType?:
    | "CONFIDENTIAL_INSTANCE_TYPE_UNSPECIFIED"
    | "SEV"
    | "SEV_SNP"
    | "TDX"
    | (string & {});
  /** Whether Confidential Nodes feature is enabled. */
  enabled?: boolean;
}

export const ConfidentialNodes = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  confidentialInstanceType: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ConfidentialNodes" });

export interface BootDisk {
  /** For Hyperdisk-Balanced only, the provisioned IOPS config value. */
  provisionedIops?: string;
  /** For Hyperdisk-Balanced only, the provisioned throughput config value. */
  provisionedThroughput?: string;
  /** Disk size in GB. Replaces NodeConfig.disk_size_gb */
  sizeGb?: string;
  /** Disk type of the boot disk. (i.e. Hyperdisk-Balanced, PD-Balanced, etc.) */
  diskType?: string;
}

export const BootDisk = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisionedIops: Schema.optional(Schema.String),
  provisionedThroughput: Schema.optional(Schema.String),
  sizeGb: Schema.optional(Schema.String),
  diskType: Schema.optional(Schema.String),
}).annotate({ identifier: "BootDisk" });

export interface BlueGreenInfo {
  /** Time to start deleting blue pool to complete blue-green upgrade, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  bluePoolDeletionStartTime?: string;
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
  /** Version of green pool. */
  greenPoolVersion?: string;
  /** The resource URLs of the [managed instance groups] (/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with green pool. */
  greenInstanceGroupUrls?: ReadonlyArray<string>;
  /** The resource URLs of the [managed instance groups] (/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with blue pool. */
  blueInstanceGroupUrls?: ReadonlyArray<string>;
}

export const BlueGreenInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bluePoolDeletionStartTime: Schema.optional(Schema.String),
  phase: Schema.optional(Schema.String),
  greenPoolVersion: Schema.optional(Schema.String),
  greenInstanceGroupUrls: Schema.optional(Schema.Array(Schema.String)),
  blueInstanceGroupUrls: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "BlueGreenInfo" });

export interface UpdateInfo {
  /** Information of a blue-green upgrade. */
  blueGreenInfo?: BlueGreenInfo;
}

export const UpdateInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blueGreenInfo: Schema.optional(BlueGreenInfo),
}).annotate({ identifier: "UpdateInfo" });

export interface PlacementPolicy {
  /** TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies */
  tpuTopology?: string;
  /** The type of placement. */
  type?: "TYPE_UNSPECIFIED" | "COMPACT" | (string & {});
  /** If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned. */
  policyName?: string;
}

export const PlacementPolicy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tpuTopology: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  policyName: Schema.optional(Schema.String),
}).annotate({ identifier: "PlacementPolicy" });

export interface PodCIDROverprovisionConfig {
  /** Whether Pod CIDR overprovisioning is disabled. Note: Pod CIDR overprovisioning is enabled by default. */
  disable?: boolean;
}

export const PodCIDROverprovisionConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PodCIDROverprovisionConfig" });

export interface AdditionalNodeNetworkConfig {
  /** Name of the VPC where the additional interface belongs */
  network?: string;
  /** Name of the subnetwork where the additional interface belongs */
  subnetwork?: string;
}

export const AdditionalNodeNetworkConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdditionalNodeNetworkConfig" });

export interface AdditionalPodNetworkConfig {
  /** The name of the secondary range on the subnet which provides IP address for this pod range. */
  secondaryPodRange?: string;
  /** The maximum number of pods per node which use this pod network. */
  maxPodsPerNode?: MaxPodsConstraint;
  /** The name of the network attachment for pods to communicate to; cannot be specified along with subnetwork or secondary_pod_range. */
  networkAttachment?: string;
  /** Name of the subnetwork where the additional pod network belongs. */
  subnetwork?: string;
}

export const AdditionalPodNetworkConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secondaryPodRange: Schema.optional(Schema.String),
    maxPodsPerNode: Schema.optional(MaxPodsConstraint),
    networkAttachment: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdditionalPodNetworkConfig" });

export interface NetworkPerformanceConfig {
  /** Specifies the total network bandwidth tier for the NodePool. */
  totalEgressBandwidthTier?: "TIER_UNSPECIFIED" | "TIER_1" | (string & {});
  /** Specifies the network bandwidth tier for the NodePool for traffic to external/public IP addresses. */
  externalIpEgressBandwidthTier?: "TIER_UNSPECIFIED" | "TIER_1" | (string & {});
}

export const NetworkPerformanceConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalEgressBandwidthTier: Schema.optional(Schema.String),
    externalIpEgressBandwidthTier: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkPerformanceConfig" });

export interface NodeNetworkConfig {
  /** The ID of the secondary range for pod IPs. If `create_pod_range` is true, this ID is used for the new range. If `create_pod_range` is false, uses an existing secondary range with this ID. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created. */
  podRange?: string;
  /** [PRIVATE FIELD] Pod CIDR size overprovisioning config for the node pool. Pod CIDR size per node depends on max_pods_per_node. By default, the value of max_pods_per_node is rounded off to next power of 2 and we then double that to get the size of pod CIDR block per node. Example: max_pods_per_node of 30 would result in 64 IPs (/26). This config can disable the doubling of IPs (we still round off to next power of 2) Example: max_pods_per_node of 30 will result in 32 IPs (/27) when overprovisioning is disabled. */
  podCidrOverprovisionConfig?: PodCIDROverprovisionConfig;
  /** Whether nodes have internal IP addresses only. If enable_private_nodes is not specified, then the value is derived from Cluster.NetworkConfig.default_enable_private_nodes */
  enablePrivateNodes?: boolean;
  /** The IP address range for pod IPs in this node pool. Only applicable if `create_pod_range` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) to pick a specific range to use. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created. */
  podIpv4CidrBlock?: string;
  /** Input only. Whether to create a new range for pod IPs in this node pool. Defaults are provided for `pod_range` and `pod_ipv4_cidr_block` if they are not specified. If neither `create_pod_range` or `pod_range` are specified, the cluster-level default (`ip_allocation_policy.cluster_ipv4_cidr_block`) is used. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created. */
  createPodRange?: boolean;
  /** Immutable. The accelerator network profile for the node pool. For now the only valid value is "auto". If specified, the network configuration of the nodes in this node pool will be managed by this profile for the supported machine types, zone, etc. */
  acceleratorNetworkProfile?: string;
  /** We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface */
  additionalNodeNetworkConfigs?: ReadonlyArray<AdditionalNodeNetworkConfig>;
  /** We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node */
  additionalPodNetworkConfigs?: ReadonlyArray<AdditionalPodNetworkConfig>;
  /** Network bandwidth tier configuration. */
  networkPerformanceConfig?: NetworkPerformanceConfig;
  /** Output only. The network tier configuration for the node pool inherits from the cluster-level configuration and remains immutable throughout the node pool's lifecycle, including during upgrades. */
  networkTierConfig?: NetworkTierConfig;
  /** Output only. The utilization of the IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage=numNodes*numZones*podIPsPerNode. */
  podIpv4RangeUtilization?: number;
  /** Optional. The subnetwork name/path for the node pool. Format: projects/{project}/regions/{region}/subnetworks/{subnetwork} If the cluster is associated with multiple subnetworks, the subnetwork can be either: - A user supplied subnetwork name during node pool creation (e.g., `my-subnet`). The name must be between 1 and 63 characters long, start with a letter, contain only letters, numbers, and hyphens, and end with a letter or a number. - A full subnetwork path during node pool creation, such as `projects/gke-project/regions/us-central1/subnetworks/my-subnet` - A subnetwork path picked based on the IP utilization during node pool creation and is immutable. */
  subnetwork?: string;
}

export const NodeNetworkConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  podRange: Schema.optional(Schema.String),
  podCidrOverprovisionConfig: Schema.optional(PodCIDROverprovisionConfig),
  enablePrivateNodes: Schema.optional(Schema.Boolean),
  podIpv4CidrBlock: Schema.optional(Schema.String),
  createPodRange: Schema.optional(Schema.Boolean),
  acceleratorNetworkProfile: Schema.optional(Schema.String),
  additionalNodeNetworkConfigs: Schema.optional(
    Schema.Array(AdditionalNodeNetworkConfig),
  ),
  additionalPodNetworkConfigs: Schema.optional(
    Schema.Array(AdditionalPodNetworkConfig),
  ),
  networkPerformanceConfig: Schema.optional(NetworkPerformanceConfig),
  networkTierConfig: Schema.optional(NetworkTierConfig),
  podIpv4RangeUtilization: Schema.optional(Schema.Number),
  subnetwork: Schema.optional(Schema.String),
}).annotate({ identifier: "NodeNetworkConfig" });

export interface AutopilotConfig {
  /** Denotes that nodes belonging to this node pool are Autopilot nodes. */
  enabled?: boolean;
}

export const AutopilotConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "AutopilotConfig" });

export interface NodeDrainConfig {
  /** Whether to respect PDB during node pool deletion. */
  respectPdbDuringNodePoolDeletion?: boolean;
}

export const NodeDrainConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  respectPdbDuringNodePoolDeletion: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "NodeDrainConfig" });

export interface WindowsNodeConfig {
  /** OSVersion specifies the Windows node config to be used on the node. */
  osVersion?:
    | "OS_VERSION_UNSPECIFIED"
    | "OS_VERSION_LTSC2019"
    | "OS_VERSION_LTSC2022"
    | (string & {});
}

export const WindowsNodeConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  osVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "WindowsNodeConfig" });

export interface NodeAffinity {
  /** Values for NodeAffinity. */
  values?: ReadonlyArray<string>;
  /** Key for NodeAffinity. */
  key?: string;
  /** Operator for NodeAffinity. */
  operator?: "OPERATOR_UNSPECIFIED" | "IN" | "NOT_IN" | (string & {});
}

export const NodeAffinity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  values: Schema.optional(Schema.Array(Schema.String)),
  key: Schema.optional(Schema.String),
  operator: Schema.optional(Schema.String),
}).annotate({ identifier: "NodeAffinity" });

export interface SoleTenantConfig {
  /** Optional. The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node. This field can only be set if the node pool is created in a shared sole-tenant node group. */
  minNodeCpus?: number;
  /** NodeAffinities used to match to a shared sole tenant node group. */
  nodeAffinities?: ReadonlyArray<NodeAffinity>;
}

export const SoleTenantConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  minNodeCpus: Schema.optional(Schema.Number),
  nodeAffinities: Schema.optional(Schema.Array(NodeAffinity)),
}).annotate({ identifier: "SoleTenantConfig" });

export interface SecondaryBootDisk {
  /** Fully-qualified resource ID for an existing disk image. */
  diskImage?: string;
  /** Disk mode (container image cache, etc.) */
  mode?: "MODE_UNSPECIFIED" | "CONTAINER_IMAGE_CACHE" | (string & {});
}

export const SecondaryBootDisk = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  diskImage: Schema.optional(Schema.String),
  mode: Schema.optional(Schema.String),
}).annotate({ identifier: "SecondaryBootDisk" });

export interface NodeTaint {
  /** Key for taint. */
  key?: string;
  /** Value for taint. */
  value?: string;
  /** Effect for taint. */
  effect?:
    | "EFFECT_UNSPECIFIED"
    | "NO_SCHEDULE"
    | "PREFER_NO_SCHEDULE"
    | "NO_EXECUTE"
    | (string & {});
}

export const NodeTaint = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  key: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
  effect: Schema.optional(Schema.String),
}).annotate({ identifier: "NodeTaint" });

export interface GPUDirectConfig {
  /** The type of GPU direct strategy to enable on the node pool. */
  gpuDirectStrategy?:
    | "GPU_DIRECT_STRATEGY_UNSPECIFIED"
    | "RDMA"
    | (string & {});
}

export const GPUDirectConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gpuDirectStrategy: Schema.optional(Schema.String),
}).annotate({ identifier: "GPUDirectConfig" });

export interface TaintConfig {
  /** Optional. Controls architecture tainting behavior. */
  architectureTaintBehavior?:
    | "ARCHITECTURE_TAINT_BEHAVIOR_UNSPECIFIED"
    | "NONE"
    | "ARM"
    | (string & {});
}

export const TaintConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  architectureTaintBehavior: Schema.optional(Schema.String),
}).annotate({ identifier: "TaintConfig" });

export interface EphemeralStorageConfig {
  /** Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. */
  localSsdCount?: number;
}

export const EphemeralStorageConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    localSsdCount: Schema.optional(Schema.Number),
  },
).annotate({ identifier: "EphemeralStorageConfig" });

export interface WorkloadMetadataConfig {
  /** NodeMetadata is the configuration for how to expose metadata to the workloads running on the node. */
  nodeMetadata?:
    | "UNSPECIFIED"
    | "SECURE"
    | "EXPOSE"
    | "GKE_METADATA_SERVER"
    | (string & {});
  /** Mode is the configuration for how to expose metadata to workloads running on the node pool. */
  mode?: "MODE_UNSPECIFIED" | "GCE_METADATA" | "GKE_METADATA" | (string & {});
}

export const WorkloadMetadataConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    nodeMetadata: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
  },
).annotate({ identifier: "WorkloadMetadataConfig" });

export interface SecondaryBootDiskUpdateStrategy {}

export const SecondaryBootDiskUpdateStrategy =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SecondaryBootDiskUpdateStrategy",
  });

export interface AdvancedMachineFeatures {
  /** The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed. */
  threadsPerCore?: string;
  /** Whether or not to enable nested virtualization (defaults to false). */
  enableNestedVirtualization?: boolean;
  /** Type of Performance Monitoring Unit (PMU) requested on node pool instances. If unset, PMU will not be available to the node. */
  performanceMonitoringUnit?:
    | "PERFORMANCE_MONITORING_UNIT_UNSPECIFIED"
    | "ARCHITECTURAL"
    | "STANDARD"
    | "ENHANCED"
    | (string & {});
}

export const AdvancedMachineFeatures =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    threadsPerCore: Schema.optional(Schema.String),
    enableNestedVirtualization: Schema.optional(Schema.Boolean),
    performanceMonitoringUnit: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdvancedMachineFeatures" });

export interface EphemeralStorageLocalSsdConfig {
  /** Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. */
  localSsdCount?: number;
  /** Number of local SSDs to use for GKE Data Cache. */
  dataCacheCount?: number;
}

export const EphemeralStorageLocalSsdConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localSsdCount: Schema.optional(Schema.Number),
    dataCacheCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EphemeralStorageLocalSsdConfig" });

export interface FastSocket {
  /** Whether Fast Socket features are enabled in the node pool. */
  enabled?: boolean;
}

export const FastSocket = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "FastSocket" });

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

export const ReservationAffinity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  values: Schema.optional(Schema.Array(Schema.String)),
  consumeReservationType: Schema.optional(Schema.String),
  key: Schema.optional(Schema.String),
}).annotate({ identifier: "ReservationAffinity" });

export interface GPUSharingConfig {
  /** The max number of containers that can share a physical GPU. */
  maxSharedClientsPerGpu?: string;
  /** The type of GPU sharing strategy to enable on the GPU node. */
  gpuSharingStrategy?:
    | "GPU_SHARING_STRATEGY_UNSPECIFIED"
    | "TIME_SHARING"
    | "MPS"
    | (string & {});
}

export const GPUSharingConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxSharedClientsPerGpu: Schema.optional(Schema.String),
  gpuSharingStrategy: Schema.optional(Schema.String),
}).annotate({ identifier: "GPUSharingConfig" });

export interface GPUDriverInstallationConfig {
  /** Mode for how the GPU driver is installed. */
  gpuDriverVersion?:
    | "GPU_DRIVER_VERSION_UNSPECIFIED"
    | "INSTALLATION_DISABLED"
    | "DEFAULT"
    | "LATEST"
    | (string & {});
}

export const GPUDriverInstallationConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gpuDriverVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GPUDriverInstallationConfig" });

export interface AcceleratorConfig {
  /** The configuration for GPU sharing options. */
  gpuSharingConfig?: GPUSharingConfig;
  /** The number of time-shared GPU resources to expose for each physical GPU. */
  maxTimeSharedClientsPerGpu?: string;
  /** The number of the accelerator cards exposed to an instance. */
  acceleratorCount?: string;
  /** The configuration for auto installation of GPU driver. */
  gpuDriverInstallationConfig?: GPUDriverInstallationConfig;
  /** The accelerator type resource name. List of supported accelerators [here](https://cloud.google.com/compute/docs/gpus) */
  acceleratorType?: string;
  /** Size of partitions to create on the GPU. Valid values are described in the NVIDIA [mig user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning). */
  gpuPartitionSize?: string;
}

export const AcceleratorConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gpuSharingConfig: Schema.optional(GPUSharingConfig),
  maxTimeSharedClientsPerGpu: Schema.optional(Schema.String),
  acceleratorCount: Schema.optional(Schema.String),
  gpuDriverInstallationConfig: Schema.optional(GPUDriverInstallationConfig),
  acceleratorType: Schema.optional(Schema.String),
  gpuPartitionSize: Schema.optional(Schema.String),
}).annotate({ identifier: "AcceleratorConfig" });

export interface NodeConfig {
  /** The resource labels for the node pool to use to annotate any related Google Compute Engine resources. */
  resourceLabels?: Record<string, string>;
  /** Flex Start flag for enabling Flex Start VM. */
  flexStart?: boolean;
  /** Parameters that can be configured on Windows nodes. */
  windowsNodeConfig?: WindowsNodeConfig;
  /** Parameters that can be configured on Linux nodes. */
  linuxNodeConfig?: LinuxNodeConfig;
  /** The name of a Google Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-types). If unspecified, the default machine type is `e2-medium`. */
  machineType?: string;
  /** Sandbox configuration for this node. */
  sandboxConfig?: SandboxConfig;
  /** A map of resource manager tag keys and values to be attached to the nodes. */
  resourceManagerTags?: ResourceManagerTags;
  /** The number of local SSD disks to be attached to the node. The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. */
  localSsdCount?: number;
  /** Logging configuration. */
  loggingConfig?: NodePoolLoggingConfig;
  /** Parameters for node pools to be backed by shared sole tenant node groups. */
  soleTenantConfig?: SoleTenantConfig;
  /** The Kubernetes labels (key/value pairs) to apply to each node. The values in this field are added to the set of default labels Kubernetes applies to nodes. This field has the following restrictions: * Labels must use a valid Kubernetes syntax and character set, as defined in https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set. * This field supports up to 1,024 total characters in a single request. Depending on the Kubernetes version, keys in this field might conflict with the keys of the default labels, which might change which of your labels are applied to the nodes. Assume that the behavior is unpredictable and avoid label key conflicts. For more information about the default labels, see: https://kubernetes.io/docs/reference/labels-annotations-taints/ */
  labels?: Record<string, string>;
  /** List of secondary boot disks attached to the nodes. */
  secondaryBootDisks?: ReadonlyArray<SecondaryBootDisk>;
  /** Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB. */
  diskSizeGb?: number;
  /** Parameters for containerd customization. */
  containerdConfig?: ContainerdConfig;
  /** Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes). */
  nodeGroup?: string;
  /** List of Storage Pools where boot disks are provisioned. */
  storagePools?: ReadonlyArray<string>;
  /** Confidential nodes config. All the nodes in the node pool will be Confidential VM once enabled. */
  confidentialNodes?: ConfidentialNodes;
  /** Whether the nodes are created as preemptible VM instances. See: https://cloud.google.com/compute/docs/instances/preemptible for more information about preemptible VM instances. */
  preemptible?: boolean;
  /** Consolidation delay defines duration after which the Cluster Autoscaler can scale down underutilized nodes. If not set, nodes are scaled down by default behavior, i.e. according to the chosen autoscaling profile. */
  consolidationDelay?: string;
  /** The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Artifact Registry](https://cloud.google.com/artifact-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added. */
  oauthScopes?: ReadonlyArray<string>;
  /** Specifies which method should be used for encrypting the Local SSDs attached to the node. */
  localSsdEncryptionMode?:
    | "LOCAL_SSD_ENCRYPTION_MODE_UNSPECIFIED"
    | "STANDARD_ENCRYPTION"
    | "EPHEMERAL_KEY_ENCRYPTION"
    | (string & {});
  /** The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster or node pool creation. Each tag within the list must comply with RFC1035. */
  tags?: ReadonlyArray<string>;
  /** List of kubernetes taints to be applied to each node. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ */
  taints?: ReadonlyArray<NodeTaint>;
  /** The configuration for GPU Direct */
  gpuDirectConfig?: GPUDirectConfig;
  /** The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used. */
  serviceAccount?: string;
  /** The image type to use for this node. Note that for a given image type, the latest version of it will be used. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types. */
  imageType?: string;
  /** The maximum duration for the nodes to exist. If unspecified, the nodes can exist indefinitely. */
  maxRunDuration?: string;
  /** Node kubelet configs. */
  kubeletConfig?: NodeKubeletConfig;
  /** Parameters for using raw-block Local NVMe SSDs. */
  localNvmeSsdBlockConfig?: LocalNvmeSsdBlockConfig;
  /** Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as `minCpuPlatform: "Intel Haswell"` or `minCpuPlatform: "Intel Sandy Bridge"`. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform). */
  minCpuPlatform?: string;
  /** The metadata key/value pairs assigned to instances in the cluster. Keys must conform to the regexp `[a-zA-Z0-9-_]+` and be less than 128 bytes in length. These are reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: - "cluster-location" - "cluster-name" - "cluster-uid" - "configure-sh" - "containerd-configure-sh" - "enable-oslogin" - "gci-ensure-gke-docker" - "gci-metrics-enabled" - "gci-update-strategy" - "instance-template" - "kube-env" - "startup-script" - "user-data" - "disable-address-manager" - "windows-startup-script-ps1" - "common-psm1" - "k8s-node-setup-psm1" - "install-ssh-psm1" - "user-profile-psm1" Values are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on them is that each value's size must be less than or equal to 32 KB. The total size of all keys and values must be less than 512 KB. */
  metadata?: Record<string, string>;
  /** Optional. The taint configuration for the node pool. */
  taintConfig?: TaintConfig;
  /** GCFS (Google Container File System) configs. */
  gcfsConfig?: GcfsConfig;
  /** Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. */
  ephemeralStorageConfig?: EphemeralStorageConfig;
  /** Enable or disable gvnic on the node pool. */
  gvnic?: VirtualNIC;
  /** The workload metadata configuration for this node. */
  workloadMetadataConfig?: WorkloadMetadataConfig;
  /** The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption */
  bootDiskKmsKey?: string;
  /** Secondary boot disk update strategy. */
  secondaryBootDiskUpdateStrategy?: SecondaryBootDiskUpdateStrategy;
  /** Advanced features for the Compute Engine VM. */
  advancedMachineFeatures?: AdvancedMachineFeatures;
  /** Output only. effective_cgroup_mode is the cgroup mode actually used by the node pool. It is determined by the cgroup mode specified in the LinuxNodeConfig or the default cgroup mode based on the cluster creation version. */
  effectiveCgroupMode?:
    | "EFFECTIVE_CGROUP_MODE_UNSPECIFIED"
    | "EFFECTIVE_CGROUP_MODE_V1"
    | "EFFECTIVE_CGROUP_MODE_V2"
    | (string & {});
  /** Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard' */
  diskType?: string;
  /** Boot disk configuration for the node pool. */
  bootDisk?: BootDisk;
  /** Parameters for the node ephemeral storage using Local SSDs. If unspecified, ephemeral storage is backed by the boot disk. This field is functionally equivalent to the ephemeral_storage_config */
  ephemeralStorageLocalSsdConfig?: EphemeralStorageLocalSsdConfig;
  /** Enable or disable NCCL fast socket for the node pool. */
  fastSocket?: FastSocket;
  /** Optional. Reserved for future use. */
  enableConfidentialStorage?: boolean;
  /** Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. */
  spot?: boolean;
  /** The optional reservation affinity. Setting this field will apply the specified [Zonal Compute Reservation](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) to this node pool. */
  reservationAffinity?: ReservationAffinity;
  /** A list of hardware accelerators to be attached to each node. See https://cloud.google.com/compute/docs/gpus for more information about support for GPUs. */
  accelerators?: ReadonlyArray<AcceleratorConfig>;
  /** HostMaintenancePolicy contains the desired maintenance policy for the Google Compute Engine hosts. */
  hostMaintenancePolicy?: HostMaintenancePolicy;
  /** Shielded Instance options. */
  shieldedInstanceConfig?: ShieldedInstanceConfig;
}

export const NodeConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  flexStart: Schema.optional(Schema.Boolean),
  windowsNodeConfig: Schema.optional(WindowsNodeConfig),
  linuxNodeConfig: Schema.optional(LinuxNodeConfig),
  machineType: Schema.optional(Schema.String),
  sandboxConfig: Schema.optional(SandboxConfig),
  resourceManagerTags: Schema.optional(ResourceManagerTags),
  localSsdCount: Schema.optional(Schema.Number),
  loggingConfig: Schema.optional(NodePoolLoggingConfig),
  soleTenantConfig: Schema.optional(SoleTenantConfig),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  secondaryBootDisks: Schema.optional(Schema.Array(SecondaryBootDisk)),
  diskSizeGb: Schema.optional(Schema.Number),
  containerdConfig: Schema.optional(ContainerdConfig),
  nodeGroup: Schema.optional(Schema.String),
  storagePools: Schema.optional(Schema.Array(Schema.String)),
  confidentialNodes: Schema.optional(ConfidentialNodes),
  preemptible: Schema.optional(Schema.Boolean),
  consolidationDelay: Schema.optional(Schema.String),
  oauthScopes: Schema.optional(Schema.Array(Schema.String)),
  localSsdEncryptionMode: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Array(Schema.String)),
  taints: Schema.optional(Schema.Array(NodeTaint)),
  gpuDirectConfig: Schema.optional(GPUDirectConfig),
  serviceAccount: Schema.optional(Schema.String),
  imageType: Schema.optional(Schema.String),
  maxRunDuration: Schema.optional(Schema.String),
  kubeletConfig: Schema.optional(NodeKubeletConfig),
  localNvmeSsdBlockConfig: Schema.optional(LocalNvmeSsdBlockConfig),
  minCpuPlatform: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  taintConfig: Schema.optional(TaintConfig),
  gcfsConfig: Schema.optional(GcfsConfig),
  ephemeralStorageConfig: Schema.optional(EphemeralStorageConfig),
  gvnic: Schema.optional(VirtualNIC),
  workloadMetadataConfig: Schema.optional(WorkloadMetadataConfig),
  bootDiskKmsKey: Schema.optional(Schema.String),
  secondaryBootDiskUpdateStrategy: Schema.optional(
    SecondaryBootDiskUpdateStrategy,
  ),
  advancedMachineFeatures: Schema.optional(AdvancedMachineFeatures),
  effectiveCgroupMode: Schema.optional(Schema.String),
  diskType: Schema.optional(Schema.String),
  bootDisk: Schema.optional(BootDisk),
  ephemeralStorageLocalSsdConfig: Schema.optional(
    EphemeralStorageLocalSsdConfig,
  ),
  fastSocket: Schema.optional(FastSocket),
  enableConfidentialStorage: Schema.optional(Schema.Boolean),
  spot: Schema.optional(Schema.Boolean),
  reservationAffinity: Schema.optional(ReservationAffinity),
  accelerators: Schema.optional(Schema.Array(AcceleratorConfig)),
  hostMaintenancePolicy: Schema.optional(HostMaintenancePolicy),
  shieldedInstanceConfig: Schema.optional(ShieldedInstanceConfig),
}).annotate({ identifier: "NodeConfig" });

export interface BestEffortProvisioning {
  /** When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes */
  enabled?: boolean;
  /** Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved. */
  minProvisionNodes?: number;
}

export const BestEffortProvisioning = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    enabled: Schema.optional(Schema.Boolean),
    minProvisionNodes: Schema.optional(Schema.Number),
  },
).annotate({ identifier: "BestEffortProvisioning" });

export interface NodePool {
  /** The initial node count for the pool. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. */
  initialNodeCount?: number;
  /** Which conditions caused the current node pool state. */
  conditions?: ReadonlyArray<StatusCondition>;
  /** Output only. Update info contains relevant information during a node pool update. */
  updateInfo?: UpdateInfo;
  /** Output only. Server-defined URL for the resource. */
  selfLink?: string;
  /** The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool. */
  maxPodsConstraint?: MaxPodsConstraint;
  /** Specifies the node placement policy. */
  placementPolicy?: PlacementPolicy;
  /** NodeManagement configuration for this NodePool. */
  management?: NodeManagement;
  /** Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults. */
  networkConfig?: NodeNetworkConfig;
  /** Specifies the autopilot configuration for this node pool. This field is exclusively reserved for Cluster Autoscaler. */
  autopilotConfig?: AutopilotConfig;
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
  /** Specifies the node drain configuration for this node pool. */
  nodeDrainConfig?: NodeDrainConfig;
  /** The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes should be located. If this value is unspecified during node pool creation, the [Cluster.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.FIELDS.locations) value will be used, instead. Warning: changing node pool locations will result in nodes being added and/or removed. */
  locations?: ReadonlyArray<string>;
  /** Output only. The pod CIDR block size per node in this node pool. */
  podIpv4CidrSize?: number;
  /** Upgrade settings control disruption and speed of the upgrade. */
  upgradeSettings?: UpgradeSettings;
  /** Specifies the configuration of queued provisioning. */
  queuedProvisioning?: QueuedProvisioning;
  /** Output only. Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available. */
  statusMessage?: string;
  /** This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** The node configuration of the pool. */
  config?: NodeConfig;
  /** The version of Kubernetes running on this NodePool's nodes. If unspecified, it defaults as described [here](https://cloud.google.com/kubernetes-engine/versioning#specifying_node_version). */
  version?: string;
  /** Autoscaler configuration for this NodePool. Autoscaler is enabled only if a valid configuration is present. */
  autoscaling?: NodePoolAutoscaling;
  /** The name of the node pool. */
  name?: string;
  /** Enable best effort provisioning for nodes */
  bestEffortProvisioning?: BestEffortProvisioning;
  /** Output only. The resource URLs of the [managed instance groups](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with this node pool. During the node pool blue-green upgrade operation, the URLs contain both blue and green resources. */
  instanceGroupUrls?: ReadonlyArray<string>;
}

export const NodePool = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  initialNodeCount: Schema.optional(Schema.Number),
  conditions: Schema.optional(Schema.Array(StatusCondition)),
  updateInfo: Schema.optional(UpdateInfo),
  selfLink: Schema.optional(Schema.String),
  maxPodsConstraint: Schema.optional(MaxPodsConstraint),
  placementPolicy: Schema.optional(PlacementPolicy),
  management: Schema.optional(NodeManagement),
  networkConfig: Schema.optional(NodeNetworkConfig),
  autopilotConfig: Schema.optional(AutopilotConfig),
  status: Schema.optional(Schema.String),
  nodeDrainConfig: Schema.optional(NodeDrainConfig),
  locations: Schema.optional(Schema.Array(Schema.String)),
  podIpv4CidrSize: Schema.optional(Schema.Number),
  upgradeSettings: Schema.optional(UpgradeSettings),
  queuedProvisioning: Schema.optional(QueuedProvisioning),
  statusMessage: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  config: Schema.optional(NodeConfig),
  version: Schema.optional(Schema.String),
  autoscaling: Schema.optional(NodePoolAutoscaling),
  name: Schema.optional(Schema.String),
  bestEffortProvisioning: Schema.optional(BestEffortProvisioning),
  instanceGroupUrls: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "NodePool" });

export interface CancelOperationRequest {
  /** The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/* /locations/* /operations/*`. */
  name?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field. */
  operationId?: string;
}

export const CancelOperationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    operationId: Schema.optional(Schema.String),
  },
).annotate({ identifier: "CancelOperationRequest" });

export interface HttpCacheControlResponseHeader {
  /** 14.6 response cache age, in seconds since the response is generated */
  age?: string;
  /** 14.21 response cache expires, in RFC 1123 date format */
  expires?: string;
  /** 14.9 request and response directives */
  directive?: string;
}

export const HttpCacheControlResponseHeader =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    age: Schema.optional(Schema.String),
    expires: Schema.optional(Schema.String),
    directive: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpCacheControlResponseHeader" });

export interface GetOpenIDConfigResponse {
  /** Supported claims. */
  claims_supported?: ReadonlyArray<string>;
  /** For HTTP requests, this field is automatically extracted into the Cache-Control HTTP header. */
  cacheHeader?: HttpCacheControlResponseHeader;
  /** JSON Web Key uri. */
  jwks_uri?: string;
  /** supported ID Token signing Algorithms. */
  id_token_signing_alg_values_supported?: ReadonlyArray<string>;
  /** OIDC Issuer. */
  issuer?: string;
  /** Supported grant types. */
  grant_types?: ReadonlyArray<string>;
  /** Supported response types. */
  response_types_supported?: ReadonlyArray<string>;
  /** Supported subject types. */
  subject_types_supported?: ReadonlyArray<string>;
}

export const GetOpenIDConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    claims_supported: Schema.optional(Schema.Array(Schema.String)),
    cacheHeader: Schema.optional(HttpCacheControlResponseHeader),
    jwks_uri: Schema.optional(Schema.String),
    id_token_signing_alg_values_supported: Schema.optional(
      Schema.Array(Schema.String),
    ),
    issuer: Schema.optional(Schema.String),
    grant_types: Schema.optional(Schema.Array(Schema.String)),
    response_types_supported: Schema.optional(Schema.Array(Schema.String)),
    subject_types_supported: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GetOpenIDConfigResponse" });

export interface NodeLabels {
  /** Map of node label keys and node label values. */
  labels?: Record<string, string>;
}

export const NodeLabels = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "NodeLabels" });

export interface ResourceLabels {
  /** Map of node label keys and node label values. */
  labels?: Record<string, string>;
}

export const ResourceLabels = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "ResourceLabels" });

export interface NodeTaints {
  /** List of node taints. */
  taints?: ReadonlyArray<NodeTaint>;
}

export const NodeTaints = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  taints: Schema.optional(Schema.Array(NodeTaint)),
}).annotate({ identifier: "NodeTaints" });

export interface UpdateNodePoolRequest {
  /** Required. The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version */
  nodeVersion?: string;
  /** Parameters that can be configured on Linux nodes. */
  linuxNodeConfig?: LinuxNodeConfig;
  /** Confidential nodes config. All the nodes in the node pool will be Confidential VM once enabled. */
  confidentialNodes?: ConfidentialNodes;
  /** The desired node drain configuration for nodes in the node pool. */
  nodeDrainConfig?: NodeDrainConfig;
  /** Optional. The desired disk size for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk size. */
  diskSizeGb?: string;
  /** Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. */
  nodePoolId?: string;
  /** Desired resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Existing tags will be replaced with new values. */
  resourceManagerTags?: ResourceManagerTags;
  /** Node kubelet configs. */
  kubeletConfig?: NodeKubeletConfig;
  /** Specifies the configuration of queued provisioning. */
  queuedProvisioning?: QueuedProvisioning;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** GCFS config. */
  gcfsConfig?: GcfsConfig;
  /** Logging configuration. */
  loggingConfig?: NodePoolLoggingConfig;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Optional. The desired machine type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified machine type. */
  machineType?: string;
  /** Upgrade settings control disruption and speed of the upgrade. */
  upgradeSettings?: UpgradeSettings;
  /** Parameters that can be configured on Windows nodes. */
  windowsNodeConfig?: WindowsNodeConfig;
  /** A list of hardware accelerators to be attached to each node. See https://cloud.google.com/compute/docs/gpus for more information about support for GPUs. */
  accelerators?: ReadonlyArray<AcceleratorConfig>;
  /** Node network config. */
  nodeNetworkConfig?: NodeNetworkConfig;
  /** The desired node labels to be applied to all nodes in the node pool. If this field is not present, the labels will not be changed. Otherwise, the existing node labels will be *replaced* with the provided labels. */
  labels?: NodeLabels;
  /** The resource labels for the node pool to use to annotate any related Google Compute Engine resources. */
  resourceLabels?: ResourceLabels;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Enable or disable NCCL fast socket for the node pool. */
  fastSocket?: FastSocket;
  /** Consolidation delay defines duration after which the Cluster Autoscaler can scale down underutilized nodes. If not set, nodes are scaled down by default behavior, i.e. according to the chosen autoscaling profile. */
  consolidationDelay?: string;
  /** The desired network tags to be applied to all nodes in the node pool. If this field is not present, the tags will not be changed. Otherwise, the existing network tags will be *replaced* with the provided tags. */
  tags?: NetworkTags;
  /** The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the node pool's nodes should be located. Changing the locations for a node pool will result in nodes being either created or removed from the node pool, depending on whether locations are being added or removed. Warning: It is recommended to update node pool locations in a standalone API call. Do not combine a location update with changes to other fields (such as `tags`, `labels`, `taints`, etc.) in the same request. Otherwise, the API performs a structural modification where changes to other fields will only apply to newly created nodes and will not be applied to existing nodes in the node pool. To ensure all nodes are updated consistently, use a separate API call for location changes. */
  locations?: ReadonlyArray<string>;
  /** Enable or disable gvnic on the node pool. */
  gvnic?: VirtualNIC;
  /** The current etag of the node pool. If an etag is provided and does not match the current etag of the node pool, update will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** The desired workload metadata config for the node pool. */
  workloadMetadataConfig?: WorkloadMetadataConfig;
  /** Required. The desired image type for the node pool. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types. */
  imageType?: string;
  /** Flex Start flag for enabling Flex Start VM. */
  flexStart?: boolean;
  /** Optional. The desired disk type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk type. */
  diskType?: string;
  /** The desired containerd config for nodes in the node pool. Initiates an upgrade operation that recreates the nodes with the new config. */
  containerdConfig?: ContainerdConfig;
  /** The desired node taints to be applied to all nodes in the node pool. If this field is not present, the taints will not be changed. Otherwise, the existing node taints will be *replaced* with the provided taints. */
  taints?: NodeTaints;
  /** List of Storage Pools where boot disks are provisioned. Existing Storage Pools will be replaced with storage-pools. */
  storagePools?: ReadonlyArray<string>;
  /** The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name?: string;
  /** The maximum duration for the nodes to exist. If unspecified, the nodes can exist indefinitely. */
  maxRunDuration?: string;
  /** The desired boot disk config for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified boot disk config. */
  bootDisk?: BootDisk;
}

export const UpdateNodePoolRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nodeVersion: Schema.optional(Schema.String),
  linuxNodeConfig: Schema.optional(LinuxNodeConfig),
  confidentialNodes: Schema.optional(ConfidentialNodes),
  nodeDrainConfig: Schema.optional(NodeDrainConfig),
  diskSizeGb: Schema.optional(Schema.String),
  nodePoolId: Schema.optional(Schema.String),
  resourceManagerTags: Schema.optional(ResourceManagerTags),
  kubeletConfig: Schema.optional(NodeKubeletConfig),
  queuedProvisioning: Schema.optional(QueuedProvisioning),
  zone: Schema.optional(Schema.String),
  gcfsConfig: Schema.optional(GcfsConfig),
  loggingConfig: Schema.optional(NodePoolLoggingConfig),
  clusterId: Schema.optional(Schema.String),
  machineType: Schema.optional(Schema.String),
  upgradeSettings: Schema.optional(UpgradeSettings),
  windowsNodeConfig: Schema.optional(WindowsNodeConfig),
  accelerators: Schema.optional(Schema.Array(AcceleratorConfig)),
  nodeNetworkConfig: Schema.optional(NodeNetworkConfig),
  labels: Schema.optional(NodeLabels),
  resourceLabels: Schema.optional(ResourceLabels),
  projectId: Schema.optional(Schema.String),
  fastSocket: Schema.optional(FastSocket),
  consolidationDelay: Schema.optional(Schema.String),
  tags: Schema.optional(NetworkTags),
  locations: Schema.optional(Schema.Array(Schema.String)),
  gvnic: Schema.optional(VirtualNIC),
  etag: Schema.optional(Schema.String),
  workloadMetadataConfig: Schema.optional(WorkloadMetadataConfig),
  imageType: Schema.optional(Schema.String),
  flexStart: Schema.optional(Schema.Boolean),
  diskType: Schema.optional(Schema.String),
  containerdConfig: Schema.optional(ContainerdConfig),
  taints: Schema.optional(NodeTaints),
  storagePools: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.optional(Schema.String),
  maxRunDuration: Schema.optional(Schema.String),
  bootDisk: Schema.optional(BootDisk),
}).annotate({ identifier: "UpdateNodePoolRequest" });

export interface OperationProgress {
  /** A non-parameterized string describing an operation stage. Unset for single-stage operations. */
  name?: string;
  /** Progress metric bundle, for example: metrics: [{name: "nodes done", int_value: 15}, {name: "nodes total", int_value: 32}] or metrics: [{name: "progress", double_value: 0.56}, {name: "progress scale", double_value: 1.0}] */
  metrics?: ReadonlyArray<Metric>;
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
}

export const OperationProgress: Schema.Schema<OperationProgress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.optional(Schema.String),
      metrics: Schema.optional(Schema.Array(Metric)),
      status: Schema.optional(Schema.String),
      stages: Schema.optional(Schema.Array(OperationProgress)),
    }),
  ).annotate({
    identifier: "OperationProgress",
  }) as any as Schema.Schema<OperationProgress>;

export interface UpgradeDetails {
  /** Output only. The state of the upgrade. */
  state?:
    | "UNKNOWN"
    | "FAILED"
    | "SUCCEEDED"
    | "CANCELED"
    | "RUNNING"
    | (string & {});
  /** The version after the upgrade. */
  targetVersion?: string;
  /** The end timestamp of the upgrade. */
  endTime?: string;
  /** The version before the upgrade. */
  initialVersion?: string;
  /** The start type of the upgrade. */
  startType?: "START_TYPE_UNSPECIFIED" | "AUTOMATIC" | "MANUAL" | (string & {});
  /** The emulated version before the upgrade. */
  initialEmulatedVersion?: string;
  /** The emulated version after the upgrade. */
  targetEmulatedVersion?: string;
  /** The start timestamp of the upgrade. */
  startTime?: string;
}

export const UpgradeDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.String),
  targetVersion: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  initialVersion: Schema.optional(Schema.String),
  startType: Schema.optional(Schema.String),
  initialEmulatedVersion: Schema.optional(Schema.String),
  targetEmulatedVersion: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
}).annotate({ identifier: "UpgradeDetails" });

export interface NodePoolUpgradeInfo {
  /** The list of past auto upgrades. */
  upgradeDetails?: ReadonlyArray<UpgradeDetails>;
  /** The node pool's current minor version's end of extended support timestamp. */
  endOfExtendedSupportTimestamp?: string;
  /** The node pool's current minor version's end of standard support timestamp. */
  endOfStandardSupportTimestamp?: string;
  /** patch_target_version indicates the target version for patch upgrade. */
  patchTargetVersion?: string;
  /** The auto upgrade status. */
  autoUpgradeStatus?: ReadonlyArray<
    | "UNKNOWN"
    | "ACTIVE"
    | "MINOR_UPGRADE_PAUSED"
    | "UPGRADE_PAUSED"
    | (string & {})
  >;
  /** The auto upgrade paused reason. */
  pausedReason?: ReadonlyArray<
    | "AUTO_UPGRADE_PAUSED_REASON_UNSPECIFIED"
    | "MAINTENANCE_WINDOW"
    | "MAINTENANCE_EXCLUSION_NO_UPGRADES"
    | "MAINTENANCE_EXCLUSION_NO_MINOR_UPGRADES"
    | "SYSTEM_CONFIG"
    | (string & {})
  >;
  /** minor_target_version indicates the target version for minor upgrade. */
  minorTargetVersion?: string;
}

export const NodePoolUpgradeInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  upgradeDetails: Schema.optional(Schema.Array(UpgradeDetails)),
  endOfExtendedSupportTimestamp: Schema.optional(Schema.String),
  endOfStandardSupportTimestamp: Schema.optional(Schema.String),
  patchTargetVersion: Schema.optional(Schema.String),
  autoUpgradeStatus: Schema.optional(Schema.Array(Schema.String)),
  pausedReason: Schema.optional(Schema.Array(Schema.String)),
  minorTargetVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "NodePoolUpgradeInfo" });

export interface RecurringTimeWindow {
  /** An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window reccurs. They go on for the span of time between the start and end time. For example, to have something repeat every weekday, you'd use: `FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR` To repeat some window daily (equivalent to the DailyMaintenanceWindow): `FREQ=DAILY` For the first weekend of every month: `FREQ=MONTHLY;BYSETPOS=1;BYDAY=SA,SU` This specifies how frequently the window starts. Eg, if you wanted to have a 9-5 UTC-4 window every weekday, you'd use something like: ``` start time = 2019-01-01T09:00:00-0400 end time = 2019-01-01T17:00:00-0400 recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR ``` Windows can span multiple days. Eg, to make the window encompass every weekend from midnight Saturday till the last minute of Sunday UTC: ``` start time = 2019-01-05T00:00:00Z end time = 2019-01-07T23:59:00Z recurrence = FREQ=WEEKLY;BYDAY=SA ``` Note the start and end time's specific dates are largely arbitrary except to specify duration of the window and when it first starts. The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported. */
  recurrence?: string;
  /** The window of the first recurrence. */
  window?: TimeWindow;
}

export const RecurringTimeWindow = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  recurrence: Schema.optional(Schema.String),
  window: Schema.optional(TimeWindow),
}).annotate({ identifier: "RecurringTimeWindow" });

export interface DailyMaintenanceWindow {
  /** Time within the maintenance window to start the maintenance operations. It must be in format "HH:MM", where HH : [00-23] and MM : [00-59] GMT. */
  startTime?: string;
  /** Output only. Duration of the time window, automatically chosen to be smallest possible in the given scenario. */
  duration?: string;
}

export const DailyMaintenanceWindow = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    startTime: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  },
).annotate({ identifier: "DailyMaintenanceWindow" });

export interface MaintenanceWindow {
  /** RecurringWindow specifies some number of recurring time periods for maintenance to occur. The time windows may be overlapping. If no maintenance windows are set, maintenance can occur at any time. */
  recurringWindow?: RecurringTimeWindow;
  /** DailyMaintenanceWindow specifies a daily maintenance operation window. */
  dailyMaintenanceWindow?: DailyMaintenanceWindow;
  /** Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows. */
  maintenanceExclusions?: Record<string, TimeWindow>;
}

export const MaintenanceWindow = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  recurringWindow: Schema.optional(RecurringTimeWindow),
  dailyMaintenanceWindow: Schema.optional(DailyMaintenanceWindow),
  maintenanceExclusions: Schema.optional(
    Schema.Record(Schema.String, TimeWindow),
  ),
}).annotate({ identifier: "MaintenanceWindow" });

export interface MaintenancePolicy {
  /** Optional. The upgrade disruption budget for the cluster control plane. */
  disruptionBudget?: DisruptionBudget;
  /** Specifies the maintenance window in which maintenance may be performed. */
  window?: MaintenanceWindow;
  /** A hash identifying the version of this policy, so that updates to fields of the policy won't accidentally undo intermediate changes (and so that users of the API unaware of some fields won't accidentally remove other fields). Make a `get()` request to the cluster to get the current resource version and include it with requests to set the policy. */
  resourceVersion?: string;
}

export const MaintenancePolicy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disruptionBudget: Schema.optional(DisruptionBudget),
  window: Schema.optional(MaintenanceWindow),
  resourceVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "MaintenancePolicy" });

export interface NetworkPolicy {
  /** The selected network policy provider. */
  provider?: "PROVIDER_UNSPECIFIED" | "CALICO" | (string & {});
  /** Whether network policy is enabled on the cluster. */
  enabled?: boolean;
}

export const NetworkPolicy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "NetworkPolicy" });

export interface IPAllocationPolicy {
  /** Output only. The services IPv6 CIDR block for the cluster. */
  servicesIpv6CidrBlock?: string;
  /** The IP address range for the cluster pod IPs. If this field is set, then `cluster.cluster_ipv4_cidr` must be left blank. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. */
  clusterIpv4CidrBlock?: string;
  /** If true, allow allocation of cluster CIDR ranges that overlap with certain kinds of network routes. By default we do not allow cluster CIDR ranges to intersect with any user declared routes. With allow_route_overlap == true, we allow overlapping with CIDR ranges that are larger than the cluster CIDR range. If this field is set to true, then cluster and services CIDRs must be fully-specified (e.g. `10.96.0.0/14`, but not `/14`), which means: 1) When `use_ip_aliases` is true, `cluster_ipv4_cidr_block` and `services_ipv4_cidr_block` must be fully-specified. 2) When `use_ip_aliases` is false, `cluster.cluster_ipv4_cidr` muse be fully-specified. */
  allowRouteOverlap?: boolean;
  /** Whether a new subnetwork will be created automatically for the cluster. This field is only applicable when `use_ip_aliases` is true. */
  createSubnetwork?: boolean;
  /** The name of the secondary range to be used as for the services CIDR block. The secondary range will be used for service ClusterIPs. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false. */
  servicesSecondaryRangeName?: string;
  /** Output only. The additional IP ranges that are added to the cluster. These IP ranges can be used by new node pools to allocate node and pod IPs automatically. Each AdditionalIPRangesConfig corresponds to a single subnetwork. Once a range is removed it will not show up in IPAllocationPolicy. */
  additionalIpRangesConfigs?: ReadonlyArray<AdditionalIPRangesConfig>;
  /** Optional. AutoIpamConfig contains all information related to Auto IPAM */
  autoIpamConfig?: AutoIpamConfig;
  /** The IP address range of the instance IPs in this cluster. This is applicable only if `create_subnetwork` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. */
  nodeIpv4CidrBlock?: string;
  /** This field is deprecated, use services_ipv4_cidr_block. */
  servicesIpv4Cidr?: string;
  /** This field is deprecated, use cluster_ipv4_cidr_block. */
  clusterIpv4Cidr?: string;
  /** IP stack type */
  stackType?: "STACK_TYPE_UNSPECIFIED" | "IPV4" | "IPV4_IPV6" | (string & {});
  /** The IP address range of the services IPs in this cluster. If blank, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. */
  servicesIpv4CidrBlock?: string;
  /** Output only. The utilization of the cluster default IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage=numNodes*numZones*podIPsPerNode. */
  defaultPodIpv4RangeUtilization?: number;
  /** The ipv6 access type (internal or external) when create_subnetwork is true */
  ipv6AccessType?:
    | "IPV6_ACCESS_TYPE_UNSPECIFIED"
    | "INTERNAL"
    | "EXTERNAL"
    | (string & {});
  /** Whether alias IPs will be used for pod IPs in the cluster. This is used in conjunction with use_routes. It cannot be true if use_routes is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode */
  useIpAliases?: boolean;
  /** Output only. The subnet's IPv6 CIDR block used by nodes and pods. */
  subnetIpv6CidrBlock?: string;
  /** Whether routes will be used for pod IPs in the cluster. This is used in conjunction with use_ip_aliases. It cannot be true if use_ip_aliases is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode */
  useRoutes?: boolean;
  /** Cluster-level network tier configuration is used to determine the default network tier for external IP addresses on cluster resources, such as node pools and load balancers. */
  networkTierConfig?: NetworkTierConfig;
  /** This field is deprecated, use node_ipv4_cidr_block. */
  nodeIpv4Cidr?: string;
  /** Output only. The additional pod ranges that are added to the cluster. These pod ranges can be used by new node pools to allocate pod IPs automatically. Once the range is removed it will not show up in IPAllocationPolicy. */
  additionalPodRangesConfig?: AdditionalPodRangesConfig;
  /** The IP address range of the Cloud TPUs in this cluster. If unspecified, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. If unspecified, the range will use the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. This field is deprecated, use cluster.tpu_config.ipv4_cidr_block instead. */
  tpuIpv4CidrBlock?: string;
  /** The name of the secondary range to be used for the cluster CIDR block. The secondary range will be used for pod IP addresses. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false. */
  clusterSecondaryRangeName?: string;
  /** A custom subnetwork name to be used if `create_subnetwork` is true. If this field is empty, then an automatic name will be chosen for the new subnetwork. */
  subnetworkName?: string;
  /** [PRIVATE FIELD] Pod CIDR size overprovisioning config for the cluster. Pod CIDR size per node depends on max_pods_per_node. By default, the value of max_pods_per_node is doubled and then rounded off to next power of 2 to get the size of pod CIDR block per node. Example: max_pods_per_node of 30 would result in 64 IPs (/26). This config can disable the doubling of IPs (we still round off to next power of 2) Example: max_pods_per_node of 30 will result in 32 IPs (/27) when overprovisioning is disabled. */
  podCidrOverprovisionConfig?: PodCIDROverprovisionConfig;
}

export const IPAllocationPolicy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  servicesIpv6CidrBlock: Schema.optional(Schema.String),
  clusterIpv4CidrBlock: Schema.optional(Schema.String),
  allowRouteOverlap: Schema.optional(Schema.Boolean),
  createSubnetwork: Schema.optional(Schema.Boolean),
  servicesSecondaryRangeName: Schema.optional(Schema.String),
  additionalIpRangesConfigs: Schema.optional(
    Schema.Array(AdditionalIPRangesConfig),
  ),
  autoIpamConfig: Schema.optional(AutoIpamConfig),
  nodeIpv4CidrBlock: Schema.optional(Schema.String),
  servicesIpv4Cidr: Schema.optional(Schema.String),
  clusterIpv4Cidr: Schema.optional(Schema.String),
  stackType: Schema.optional(Schema.String),
  servicesIpv4CidrBlock: Schema.optional(Schema.String),
  defaultPodIpv4RangeUtilization: Schema.optional(Schema.Number),
  ipv6AccessType: Schema.optional(Schema.String),
  useIpAliases: Schema.optional(Schema.Boolean),
  subnetIpv6CidrBlock: Schema.optional(Schema.String),
  useRoutes: Schema.optional(Schema.Boolean),
  networkTierConfig: Schema.optional(NetworkTierConfig),
  nodeIpv4Cidr: Schema.optional(Schema.String),
  additionalPodRangesConfig: Schema.optional(AdditionalPodRangesConfig),
  tpuIpv4CidrBlock: Schema.optional(Schema.String),
  clusterSecondaryRangeName: Schema.optional(Schema.String),
  subnetworkName: Schema.optional(Schema.String),
  podCidrOverprovisionConfig: Schema.optional(PodCIDROverprovisionConfig),
}).annotate({ identifier: "IPAllocationPolicy" });

export interface ClientCertificateConfig {
  /** Issue a client certificate. */
  issueClientCertificate?: boolean;
}

export const ClientCertificateConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issueClientCertificate: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ClientCertificateConfig" });

export interface MasterAuth {
  /** Configuration for client certificate authentication on the cluster. For clusters before v1.12, if no configuration is specified, a client certificate is issued. */
  clientCertificateConfig?: ClientCertificateConfig;
  /** Output only. Base64-encoded public certificate that is the root of trust for the cluster. */
  clusterCaCertificate?: string;
  /** Output only. Base64-encoded public certificate used by clients to authenticate to the cluster endpoint. Issued only if client_certificate_config is set. */
  clientCertificate?: string;
  /** The username to use for HTTP basic authentication to the master endpoint. For clusters v1.6.0 and later, basic authentication can be disabled by leaving username unspecified (or setting it to the empty string). Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication */
  username?: string;
  /** Output only. Base64-encoded private key used by clients to authenticate to the cluster endpoint. */
  clientKey?: string;
  /** The password to use for HTTP basic authentication to the master endpoint. Because the master endpoint is open to the Internet, you should create a strong password. If a password is provided for cluster creation, username must be non-empty. Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication */
  password?: string;
}

export const MasterAuth = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clientCertificateConfig: Schema.optional(ClientCertificateConfig),
  clusterCaCertificate: Schema.optional(Schema.String),
  clientCertificate: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  clientKey: Schema.optional(Schema.String),
  password: Schema.optional(Schema.String),
}).annotate({ identifier: "MasterAuth" });

export interface NetworkConfig {
  /** Whether CiliumClusterWideNetworkPolicy is enabled on this cluster. */
  enableCiliumClusterwideNetworkPolicy?: boolean;
  /** Specify the details of in-transit encryption. */
  inTransitEncryptionConfig?:
    | "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED"
    | "IN_TRANSIT_ENCRYPTION_DISABLED"
    | "IN_TRANSIT_ENCRYPTION_INTER_NODE_TRANSPARENT"
    | (string & {});
  /** ServiceExternalIPsConfig specifies if services with externalIPs field are blocked or not. */
  serviceExternalIpsConfig?: ServiceExternalIPsConfig;
  /** Network bandwidth tier configuration. */
  networkPerformanceConfig?: ClusterNetworkPerformanceConfig;
  /** Whether FQDN Network Policy is enabled on this cluster. */
  enableFqdnNetworkPolicy?: boolean;
  /** Disable L4 load balancer VPC firewalls to enable firewall policies. */
  disableL4LbFirewallReconciliation?: boolean;
  /** The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation. */
  datapathProvider?:
    | "DATAPATH_PROVIDER_UNSPECIFIED"
    | "LEGACY_DATAPATH"
    | "ADVANCED_DATAPATH"
    | (string & {});
  /** Controls whether by default nodes have private IP addresses only. It is invalid to specify both PrivateClusterConfig.enablePrivateNodes and this field at the same time. To update the default setting, use ClusterUpdate.desired_default_enable_private_nodes */
  defaultEnablePrivateNodes?: boolean;
  /** GatewayAPIConfig contains the desired config of Gateway API on this cluster. */
  gatewayApiConfig?: GatewayAPIConfig;
  /** Whether the cluster disables default in-node sNAT rules. In-node sNAT rules will be disabled when default_snat_status is disabled. When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic. */
  defaultSnatStatus?: DefaultSnatStatus;
  /** Output only. The relative name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/vpc) to which the cluster is connected. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet */
  subnetwork?: string;
  /** The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4) */
  privateIpv6GoogleAccess?:
    | "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
    | "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED"
    | "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE"
    | "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
    | (string & {});
  /** DNSConfig contains clusterDNS config for this cluster. */
  dnsConfig?: DNSConfig;
  /** Whether L4ILB Subsetting is enabled for this cluster. */
  enableL4ilbSubsetting?: boolean;
  /** Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network. */
  enableIntraNodeVisibility?: boolean;
  /** Output only. The relative name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. Example: projects/my-project/global/networks/my-network */
  network?: string;
  /** Whether multi-networking is enabled for this cluster. */
  enableMultiNetworking?: boolean;
}

export const NetworkConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enableCiliumClusterwideNetworkPolicy: Schema.optional(Schema.Boolean),
  inTransitEncryptionConfig: Schema.optional(Schema.String),
  serviceExternalIpsConfig: Schema.optional(ServiceExternalIPsConfig),
  networkPerformanceConfig: Schema.optional(ClusterNetworkPerformanceConfig),
  enableFqdnNetworkPolicy: Schema.optional(Schema.Boolean),
  disableL4LbFirewallReconciliation: Schema.optional(Schema.Boolean),
  datapathProvider: Schema.optional(Schema.String),
  defaultEnablePrivateNodes: Schema.optional(Schema.Boolean),
  gatewayApiConfig: Schema.optional(GatewayAPIConfig),
  defaultSnatStatus: Schema.optional(DefaultSnatStatus),
  subnetwork: Schema.optional(Schema.String),
  privateIpv6GoogleAccess: Schema.optional(Schema.String),
  dnsConfig: Schema.optional(DNSConfig),
  enableL4ilbSubsetting: Schema.optional(Schema.Boolean),
  enableIntraNodeVisibility: Schema.optional(Schema.Boolean),
  network: Schema.optional(Schema.String),
  enableMultiNetworking: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "NetworkConfig" });

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

export const EnterpriseConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterTier: Schema.optional(Schema.String),
  desiredTier: Schema.optional(Schema.String),
}).annotate({ identifier: "EnterpriseConfig" });

export interface LegacyAbac {
  /** Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM. */
  enabled?: boolean;
}

export const LegacyAbac = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "LegacyAbac" });

export interface NodePoolAutoConfig {
  /** Resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. */
  resourceManagerTags?: ResourceManagerTags;
  /** NodeKubeletConfig controls the defaults for autoprovisioned node-pools. Currently only `insecure_kubelet_readonly_port_enabled` can be set here. */
  nodeKubeletConfig?: NodeKubeletConfig;
  /** Output only. Configuration options for Linux nodes. */
  linuxNodeConfig?: LinuxNodeConfig;
  /** The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster creation. Each tag within the list must comply with RFC1035. */
  networkTags?: NetworkTags;
}

export const NodePoolAutoConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceManagerTags: Schema.optional(ResourceManagerTags),
  nodeKubeletConfig: Schema.optional(NodeKubeletConfig),
  linuxNodeConfig: Schema.optional(LinuxNodeConfig),
  networkTags: Schema.optional(NetworkTags),
}).annotate({ identifier: "NodePoolAutoConfig" });

export interface AutopilotConversionStatus {
  /** Output only. The current state of the conversion. */
  state?: "STATE_UNSPECIFIED" | "DONE" | (string & {});
}

export const AutopilotConversionStatus =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutopilotConversionStatus" });

export interface Autopilot {
  /** PrivilegedAdmissionConfig is the configuration related to privileged admission control. */
  privilegedAdmissionConfig?: PrivilegedAdmissionConfig;
  /** ClusterPolicyConfig denotes cluster level policies that are enforced for the cluster. */
  clusterPolicyConfig?: ClusterPolicyConfig;
  /** Output only. ConversionStatus shows conversion status. */
  conversionStatus?: AutopilotConversionStatus;
  /** Enable Autopilot */
  enabled?: boolean;
  /** WorkloadPolicyConfig is the configuration related to GCW workload policy */
  workloadPolicyConfig?: WorkloadPolicyConfig;
}

export const Autopilot = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  privilegedAdmissionConfig: Schema.optional(PrivilegedAdmissionConfig),
  clusterPolicyConfig: Schema.optional(ClusterPolicyConfig),
  conversionStatus: Schema.optional(AutopilotConversionStatus),
  enabled: Schema.optional(Schema.Boolean),
  workloadPolicyConfig: Schema.optional(WorkloadPolicyConfig),
}).annotate({ identifier: "Autopilot" });

export interface Cluster {
  /** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
  workloadCertificates?: WorkloadCertificates;
  /** Optional. Deprecated: Compliance Posture is no longer supported. For more details, see https://cloud.google.com/kubernetes-engine/docs/deprecations/posture-management-deprecation. Enable/Disable Compliance Posture features for the cluster. */
  compliancePostureConfig?: CompliancePostureConfig;
  /** Output only. The IP address range of the Cloud TPUs in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25. */
  tpuIpv4CidrBlock?: string;
  /** Logging configuration for the cluster. */
  loggingConfig?: LoggingConfig;
  /** Configuration controlling RBAC group membership information. */
  authenticatorGroupsConfig?: AuthenticatorGroupsConfig;
  /** Configurations for the various addons available to run in the cluster. */
  addonsConfig?: AddonsConfig;
  /** Output only. The IP address range of the Kubernetes services in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR. */
  servicesIpv4Cidr?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version */
  initialClusterVersion?: string;
  /** Configuration for the PodSecurityPolicy feature. */
  podSecurityPolicyConfig?: PodSecurityPolicyConfig;
  /** Configure the maintenance policy for this cluster. */
  maintenancePolicy?: MaintenancePolicy;
  /** Output only. The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information. */
  currentNodeCount?: number;
  /** Configuration options for the NetworkPolicy feature. */
  networkPolicy?: NetworkPolicy;
  /** Configuration for sync Secret Manager secrets as k8s secrets. */
  secretSyncConfig?: SecretSyncConfig;
  /** Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1beta1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation. */
  enableKubernetesAlpha?: boolean;
  /** The configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of the GKE cluster and take the ownership of the cluster. */
  parentProductConfig?: ParentProductConfig;
  /** The IP prefix in CIDR notation to use for the hosted master network. This prefix will be used for assigning private IP addresses to the master or set of masters, as well as the ILB VIP. This field is deprecated, use private_cluster_config.master_ipv4_cidr_block instead. */
  masterIpv4CidrBlock?: string;
  /** The rollback safe upgrade information of the cluster. This field is used when user manually triggers a rollback safe upgrade. */
  rollbackSafeUpgrade?: RollbackSafeUpgrade;
  /** Configuration for GKE auto upgrades. */
  gkeAutoUpgradeConfig?: GkeAutoUpgradeConfig;
  /** The Custom keys configuration for the cluster. */
  userManagedKeysConfig?: UserManagedKeysConfig;
  /** The configuration options for master authorized networks feature. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.authorized_networks_config instead. */
  masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
  /** The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead. */
  initialNodeCount?: number;
  /** Monitoring configuration for the cluster. */
  monitoringConfig?: MonitoringConfig;
  /** If this is a private cluster setup. Private clusters are clusters that, by default have no external IP addresses on the nodes and where nodes and the master communicate over private IP addresses. This field is deprecated, use private_cluster_config.enable_private_nodes instead. */
  privateCluster?: boolean;
  /** Configuration for cluster IP allocation. */
  ipAllocationPolicy?: IPAllocationPolicy;
  /** Output only. The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createTime?: string;
  /** Configuration for control plane egress control. */
  controlPlaneEgress?: ControlPlaneEgress;
  /** Telemetry integration for the cluster. */
  clusterTelemetry?: ClusterTelemetry;
  /** Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object. */
  nodePoolDefaults?: NodePoolDefaults;
  /** The resource labels for the cluster to use to annotate any related Google Compute Engine resources. */
  resourceLabels?: Record<string, string>;
  /** Optional. Configuration for scheduled upgrades. */
  scheduleUpgradeConfig?: ScheduleUpgradeConfig;
  /** Kubernetes open source beta apis enabled on the cluster. Only beta apis. */
  enableK8sBetaApis?: K8sBetaAPIConfig;
  /** An optional description of this cluster. */
  description?: string;
  /** RBACBindingConfig allows user to restrict ClusterRoleBindings an RoleBindings that can be created. */
  rbacBindingConfig?: RBACBindingConfig;
  /** The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified. */
  nodePools?: ReadonlyArray<NodePool>;
  /** Shielded Nodes configuration. */
  shieldedNodes?: ShieldedNodes;
  /** Configuration for master components. */
  master?: Master;
  /** Configuration for private cluster. */
  privateClusterConfig?: PrivateClusterConfig;
  /** The fingerprint of the set of labels for this cluster. */
  labelFingerprint?: string;
  /** Configuration for direct-path (via ALTS) with workload identity. This feature is not officially supported for external customers in Kubernetes Engine when using Workload Identity. */
  workloadAltsConfig?: WorkloadALTSConfig;
  /** Release channel configuration. If left unspecified on cluster creation and a version is specified, the cluster is enrolled in the most mature release channel where the version is available (first checking STABLE, then REGULAR, and finally RAPID). Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version. */
  releaseChannel?: ReleaseChannel;
  /** The list of user specified Kubernetes feature gates. Each string represents the activation status of a feature gate (e.g. "featureX=true" or "featureX=false") */
  alphaClusterFeatureGates?: ReadonlyArray<string>;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Cluster-level Vertical Pod Autoscaling configuration. */
  verticalPodAutoscaling?: VerticalPodAutoscaling;
  /** The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected. On output this shows the subnetwork ID instead of the name. */
  subnetwork?: string;
  /** The authentication information for accessing the master endpoint. If unspecified, the defaults are used: For clusters before v1.12, if master_auth is unspecified, `username` will be set to "admin", a random password will be generated, and a client certificate will be issued. */
  masterAuth?: MasterAuth;
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
  /** Which conditions caused the current cluster state. */
  conditions?: ReadonlyArray<StatusCondition>;
  /** The monitoring service the cluster should use to write metrics. Currently available options: * `monitoring.googleapis.com/kubernetes` - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions. */
  monitoringService?: string;
  /** Configuration for the use of Kubernetes Service Accounts in IAM policies. */
  workloadIdentityConfig?: WorkloadIdentityConfig;
  /** Configuration for managed machine learning diagnostics. */
  managedMachineLearningDiagnosticsConfig?: ManagedMachineLearningDiagnosticsConfig;
  /** Output only. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides. */
  location?: string;
  /** Configuration for Managed OpenTelemetry pipeline. */
  managedOpentelemetryConfig?: ManagedOpenTelemetryConfig;
  /** Configuration for cluster networking. */
  networkConfig?: NetworkConfig;
  /** Configuration for exporting resource usages. Resource usage export is disabled when this config unspecified. */
  resourceUsageExportConfig?: ResourceUsageExportConfig;
  /** Output only. The current emulated version of the master endpoint. The version is in minor version format, e.g. 1.30. No value or empty string means the cluster has no emulated version. */
  currentEmulatedVersion?: string;
  /** Configuration for Identity Service component. */
  identityServiceConfig?: IdentityServiceConfig;
  /** Configuration for Binary Authorization. */
  binaryAuthorization?: BinaryAuthorization;
  /** The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster. Only honored if cluster created with IP Alias support. */
  defaultMaxPodsConstraint?: MaxPodsConstraint;
  /** Output only. The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  expireTime?: string;
  /** Configuration for limiting anonymous access to all endpoints except the health checks. */
  anonymousAuthenticationConfig?: AnonymousAuthenticationConfig;
  /** The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed. */
  locations?: ReadonlyArray<string>;
  /** Configuration for all cluster's control plane endpoints. */
  controlPlaneEndpointsConfig?: ControlPlaneEndpointsConfig;
  /** Output only. Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available. */
  statusMessage?: string;
  /** Output only. Deprecated, use [NodePool.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes. */
  currentNodeVersion?: string;
  /** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
  meshCertificates?: MeshCertificates;
  /** Output only. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead. */
  zone?: string;
  /** Fleet information for the cluster. */
  fleet?: Fleet;
  /** The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used. On output this shows the network ID instead of the name. */
  network?: string;
  /** Configuration of etcd encryption. */
  databaseEncryption?: DatabaseEncryption;
  /** The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions. */
  loggingService?: string;
  /** Output only. Unique id for the cluster. */
  id?: string;
  /** Parameters used in creating the cluster's nodes. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "initial_node_count") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. For responses, this field will be populated with the node configuration of the first node pool. (For configuration of each node pool, see `node_pool.config`) If unspecified, the defaults are used. This field is deprecated, use node_pool.config instead. */
  nodeConfig?: NodeConfig;
  /** Enable the ability to use Cloud TPUs in this cluster. This field is deprecated, use tpu_config.enabled instead. This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25. */
  enableTpu?: boolean;
  /** Output only. Server-defined URL for the resource. */
  selfLink?: string;
  /** Configuration of Confidential Nodes. All the nodes in the cluster will be Confidential VM once enabled. */
  confidentialNodes?: ConfidentialNodes;
  /** GKE Enterprise Configuration. Deprecated: GKE Enterprise features are now available without an Enterprise tier. */
  enterpriseConfig?: EnterpriseConfig;
  /** The config for pod autoscaling. */
  podAutoscaling?: PodAutoscaling;
  /** Secret CSI driver configuration. */
  secretManagerConfig?: SecretManagerConfig;
  /** Configuration for the legacy ABAC authorization mode. */
  legacyAbac?: LegacyAbac;
  /** Optional. Enable/Disable Security Posture API features for the cluster. */
  securityPostureConfig?: SecurityPostureConfig;
  /** Output only. The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information. */
  endpoint?: string;
  /** Deprecated: Use SecurityPostureConfig instead. Enable/Disable Protect API features for the cluster. */
  protectConfig?: ProtectConfig;
  /** Output only. The current software version of the master endpoint. */
  currentMasterVersion?: string;
  /** The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter. */
  name?: string;
  /** Output only. The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode. */
  nodeIpv4CidrSize?: number;
  /** Cluster-level autoscaling configuration. */
  autoscaling?: ClusterAutoscaling;
  /** Configuration for the fine-grained cost management feature. */
  costManagementConfig?: CostManagementConfig;
  /** Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. */
  nodePoolAutoConfig?: NodePoolAutoConfig;
  /** Configuration for Cloud TPU support; This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25. */
  tpuConfig?: TpuConfig;
  /** This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** The IP address range of the container pods in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`. */
  clusterIpv4Cidr?: string;
  /** Autopilot configuration for the cluster. */
  autopilot?: Autopilot;
  /** Notification configuration of the cluster. */
  notificationConfig?: NotificationConfig;
  /** Output only. Deprecated. Use node_pools.instance_group_urls. */
  instanceGroupUrls?: ReadonlyArray<string>;
}

export const Cluster = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  workloadCertificates: Schema.optional(WorkloadCertificates),
  compliancePostureConfig: Schema.optional(CompliancePostureConfig),
  tpuIpv4CidrBlock: Schema.optional(Schema.String),
  loggingConfig: Schema.optional(LoggingConfig),
  authenticatorGroupsConfig: Schema.optional(AuthenticatorGroupsConfig),
  addonsConfig: Schema.optional(AddonsConfig),
  servicesIpv4Cidr: Schema.optional(Schema.String),
  satisfiesPzs: Schema.optional(Schema.Boolean),
  initialClusterVersion: Schema.optional(Schema.String),
  podSecurityPolicyConfig: Schema.optional(PodSecurityPolicyConfig),
  maintenancePolicy: Schema.optional(MaintenancePolicy),
  currentNodeCount: Schema.optional(Schema.Number),
  networkPolicy: Schema.optional(NetworkPolicy),
  secretSyncConfig: Schema.optional(SecretSyncConfig),
  enableKubernetesAlpha: Schema.optional(Schema.Boolean),
  parentProductConfig: Schema.optional(ParentProductConfig),
  masterIpv4CidrBlock: Schema.optional(Schema.String),
  rollbackSafeUpgrade: Schema.optional(RollbackSafeUpgrade),
  gkeAutoUpgradeConfig: Schema.optional(GkeAutoUpgradeConfig),
  userManagedKeysConfig: Schema.optional(UserManagedKeysConfig),
  masterAuthorizedNetworksConfig: Schema.optional(
    MasterAuthorizedNetworksConfig,
  ),
  initialNodeCount: Schema.optional(Schema.Number),
  monitoringConfig: Schema.optional(MonitoringConfig),
  privateCluster: Schema.optional(Schema.Boolean),
  ipAllocationPolicy: Schema.optional(IPAllocationPolicy),
  createTime: Schema.optional(Schema.String),
  controlPlaneEgress: Schema.optional(ControlPlaneEgress),
  clusterTelemetry: Schema.optional(ClusterTelemetry),
  nodePoolDefaults: Schema.optional(NodePoolDefaults),
  resourceLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  scheduleUpgradeConfig: Schema.optional(ScheduleUpgradeConfig),
  enableK8sBetaApis: Schema.optional(K8sBetaAPIConfig),
  description: Schema.optional(Schema.String),
  rbacBindingConfig: Schema.optional(RBACBindingConfig),
  nodePools: Schema.optional(Schema.Array(NodePool)),
  shieldedNodes: Schema.optional(ShieldedNodes),
  master: Schema.optional(Master),
  privateClusterConfig: Schema.optional(PrivateClusterConfig),
  labelFingerprint: Schema.optional(Schema.String),
  workloadAltsConfig: Schema.optional(WorkloadALTSConfig),
  releaseChannel: Schema.optional(ReleaseChannel),
  alphaClusterFeatureGates: Schema.optional(Schema.Array(Schema.String)),
  satisfiesPzi: Schema.optional(Schema.Boolean),
  verticalPodAutoscaling: Schema.optional(VerticalPodAutoscaling),
  subnetwork: Schema.optional(Schema.String),
  masterAuth: Schema.optional(MasterAuth),
  status: Schema.optional(Schema.String),
  conditions: Schema.optional(Schema.Array(StatusCondition)),
  monitoringService: Schema.optional(Schema.String),
  workloadIdentityConfig: Schema.optional(WorkloadIdentityConfig),
  managedMachineLearningDiagnosticsConfig: Schema.optional(
    ManagedMachineLearningDiagnosticsConfig,
  ),
  location: Schema.optional(Schema.String),
  managedOpentelemetryConfig: Schema.optional(ManagedOpenTelemetryConfig),
  networkConfig: Schema.optional(NetworkConfig),
  resourceUsageExportConfig: Schema.optional(ResourceUsageExportConfig),
  currentEmulatedVersion: Schema.optional(Schema.String),
  identityServiceConfig: Schema.optional(IdentityServiceConfig),
  binaryAuthorization: Schema.optional(BinaryAuthorization),
  defaultMaxPodsConstraint: Schema.optional(MaxPodsConstraint),
  expireTime: Schema.optional(Schema.String),
  anonymousAuthenticationConfig: Schema.optional(AnonymousAuthenticationConfig),
  locations: Schema.optional(Schema.Array(Schema.String)),
  controlPlaneEndpointsConfig: Schema.optional(ControlPlaneEndpointsConfig),
  statusMessage: Schema.optional(Schema.String),
  currentNodeVersion: Schema.optional(Schema.String),
  meshCertificates: Schema.optional(MeshCertificates),
  zone: Schema.optional(Schema.String),
  fleet: Schema.optional(Fleet),
  network: Schema.optional(Schema.String),
  databaseEncryption: Schema.optional(DatabaseEncryption),
  loggingService: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  nodeConfig: Schema.optional(NodeConfig),
  enableTpu: Schema.optional(Schema.Boolean),
  selfLink: Schema.optional(Schema.String),
  confidentialNodes: Schema.optional(ConfidentialNodes),
  enterpriseConfig: Schema.optional(EnterpriseConfig),
  podAutoscaling: Schema.optional(PodAutoscaling),
  secretManagerConfig: Schema.optional(SecretManagerConfig),
  legacyAbac: Schema.optional(LegacyAbac),
  securityPostureConfig: Schema.optional(SecurityPostureConfig),
  endpoint: Schema.optional(Schema.String),
  protectConfig: Schema.optional(ProtectConfig),
  currentMasterVersion: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  nodeIpv4CidrSize: Schema.optional(Schema.Number),
  autoscaling: Schema.optional(ClusterAutoscaling),
  costManagementConfig: Schema.optional(CostManagementConfig),
  nodePoolAutoConfig: Schema.optional(NodePoolAutoConfig),
  tpuConfig: Schema.optional(TpuConfig),
  etag: Schema.optional(Schema.String),
  clusterIpv4Cidr: Schema.optional(Schema.String),
  autopilot: Schema.optional(Autopilot),
  notificationConfig: Schema.optional(NotificationConfig),
  instanceGroupUrls: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Cluster" });

export interface SetLocationsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Required. The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. Changing the locations a cluster is in will result in nodes being either created or removed from the cluster, depending on whether locations are being added or removed. This list must always include the cluster's primary zone. */
  locations?: ReadonlyArray<string>;
  /** The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
}

export const SetLocationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  projectId: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.optional(Schema.String),
  clusterId: Schema.optional(Schema.String),
  zone: Schema.optional(Schema.String),
}).annotate({ identifier: "SetLocationsRequest" });

export interface SetNetworkPolicyRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Required. Configuration options for the NetworkPolicy feature. */
  networkPolicy?: NetworkPolicy;
  /** The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
}

export const SetNetworkPolicyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    networkPolicy: Schema.optional(NetworkPolicy),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetNetworkPolicyRequest" });

export interface Container_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
}

export const Container_Date = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  year: Schema.optional(Schema.Number),
  day: Schema.optional(Schema.Number),
  month: Schema.optional(Schema.Number),
}).annotate({ identifier: "Container_Date" });

export interface SetMasterAuthRequest {
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Required. The exact form of action to be taken on the master auth. */
  action?:
    | "UNKNOWN"
    | "SET_PASSWORD"
    | "GENERATE_PASSWORD"
    | "SET_USERNAME"
    | (string & {});
  /** Required. A description of the update. */
  update?: MasterAuth;
}

export const SetMasterAuthRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterId: Schema.optional(Schema.String),
  projectId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  zone: Schema.optional(Schema.String),
  action: Schema.optional(Schema.String),
  update: Schema.optional(MasterAuth),
}).annotate({ identifier: "SetMasterAuthRequest" });

export interface WindowsVersion {
  /** Windows server build number */
  osVersion?: string;
  /** Mainstream support end date */
  supportEndDate?: Container_Date;
  /** Windows server image type */
  imageType?: string;
}

export const WindowsVersion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  osVersion: Schema.optional(Schema.String),
  supportEndDate: Schema.optional(Container_Date),
  imageType: Schema.optional(Schema.String),
}).annotate({ identifier: "WindowsVersion" });

export interface WindowsVersions {
  /** List of Windows server versions. */
  windowsVersions?: ReadonlyArray<WindowsVersion>;
}

export const WindowsVersions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  windowsVersions: Schema.optional(Schema.Array(WindowsVersion)),
}).annotate({ identifier: "WindowsVersions" });

export interface UpgradeAvailableEvent {
  /** The release version available for upgrade. */
  version?: string;
  /** Windows node versions info. */
  windowsVersions?: WindowsVersions;
  /** The release channel of the version. If empty, it means a non-channel release. */
  releaseChannel?: ReleaseChannel;
  /** The resource type of the release version. */
  resourceType?:
    | "UPGRADE_RESOURCE_TYPE_UNSPECIFIED"
    | "MASTER"
    | "NODE_POOL"
    | (string & {});
  /** Optional relative path to the resource. For example, the relative path of the node pool. */
  resource?: string;
}

export const UpgradeAvailableEvent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  version: Schema.optional(Schema.String),
  windowsVersions: Schema.optional(WindowsVersions),
  releaseChannel: Schema.optional(ReleaseChannel),
  resourceType: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
}).annotate({ identifier: "UpgradeAvailableEvent" });

export interface SetMaintenancePolicyRequest {
  /** Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. */
  zone?: string;
  /** The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Required. The maintenance policy to be set for the cluster. An empty field clears the existing maintenance policy. */
  maintenancePolicy?: MaintenancePolicy;
  /** Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). */
  projectId?: string;
  /** Required. The name of the cluster to update. */
  clusterId?: string;
}

export const SetMaintenancePolicyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    maintenancePolicy: Schema.optional(MaintenancePolicy),
    projectId: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetMaintenancePolicyRequest" });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
  code: Schema.optional(Schema.Number),
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
}).annotate({ identifier: "Status" });

export interface Operation {
  /** Output only. The time the operation started, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  startTime?: string;
  /** Output only. The time the operation completed, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  endTime?: string;
  /** Which conditions caused the current cluster state. Deprecated. Use field error instead. */
  clusterConditions?: ReadonlyArray<StatusCondition>;
  /** The error result of the operation in case of failure. */
  error?: Status;
  /** Output only. The server-assigned ID for the operation. */
  name?: string;
  /** Output only. Progress information for an operation. */
  progress?: OperationProgress;
  /** Output only. Server-defined URI for the target of the operation. The format of this is a URI to the resource being modified (such as a cluster, node pool, or node). For node pool repairs, there may be multiple nodes being repaired, but only one will be the target. Examples: - ## `https://container.googleapis.com/v1/projects/123/locations/us-central1/clusters/my-cluster` ## `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np` `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np/node/my-node` */
  targetLink?: string;
  /** Which conditions caused the current node pool state. Deprecated. Use field error instead. */
  nodepoolConditions?: ReadonlyArray<StatusCondition>;
  /** Output only. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides. */
  location?: string;
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
  /** Output only. Detailed operation progress, if available. */
  detail?: string;
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
  /** Output only. Server-defined URI for the operation. Example: `https://container.googleapis.com/v1alpha1/projects/123/locations/us-central1/operations/operation-123`. */
  selfLink?: string;
  /** Output only. If an error has occurred, a textual description of the error. Deprecated. Use field error instead. */
  statusMessage?: string;
}

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  clusterConditions: Schema.optional(Schema.Array(StatusCondition)),
  error: Schema.optional(Status),
  name: Schema.optional(Schema.String),
  progress: Schema.optional(OperationProgress),
  targetLink: Schema.optional(Schema.String),
  nodepoolConditions: Schema.optional(Schema.Array(StatusCondition)),
  location: Schema.optional(Schema.String),
  operationType: Schema.optional(Schema.String),
  detail: Schema.optional(Schema.String),
  zone: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  statusMessage: Schema.optional(Schema.String),
}).annotate({ identifier: "Operation" });

export interface Location {
  /** Contains the name of the resource requested. Specified in the format `projects/* /locations/*`. */
  name?: string;
  /** Contains the type of location this Location is for. Regional or Zonal. */
  type?: "LOCATION_TYPE_UNSPECIFIED" | "ZONE" | "REGION" | (string & {});
  /** Whether the location is recommended for GKE cluster scheduling. */
  recommended?: boolean;
}

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  recommended: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Location" });

export interface SetLegacyAbacRequest {
  /** Required. Whether ABAC authorization will be enabled in the cluster. */
  enabled?: boolean;
  /** Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
}

export const SetLegacyAbacRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  clusterId: Schema.optional(Schema.String),
  zone: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  projectId: Schema.optional(Schema.String),
}).annotate({ identifier: "SetLegacyAbacRequest" });

export interface RollbackSafeUpgradeStatus {
  /** The rollback-safe mode expiration time. */
  controlPlaneUpgradeRollbackEndTime?: string;
  /** The mode of the rollback-safe upgrade. */
  mode?:
    | "MODE_UNSPECIFIED"
    | "KCP_MINOR_UPGRADE_ROLLBACK_SAFE_MODE"
    | (string & {});
  /** The GKE version that the cluster previously used before step-one upgrade. */
  previousVersion?: string;
}

export const RollbackSafeUpgradeStatus =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneUpgradeRollbackEndTime: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
    previousVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "RollbackSafeUpgradeStatus" });

export interface ClusterUpgradeInfo {
  /** The cluster's current minor version's end of standard support timestamp. */
  endOfStandardSupportTimestamp?: string;
  /** The list of past auto upgrades. */
  upgradeDetails?: ReadonlyArray<UpgradeDetails>;
  /** patch_target_version indicates the target version for patch upgrade. */
  patchTargetVersion?: string;
  /** minor_target_version indicates the target version for minor upgrade. */
  minorTargetVersion?: string;
  /** The cluster's current minor version's end of extended support timestamp. */
  endOfExtendedSupportTimestamp?: string;
  /** The auto upgrade status. */
  autoUpgradeStatus?: ReadonlyArray<
    | "UNKNOWN"
    | "ACTIVE"
    | "MINOR_UPGRADE_PAUSED"
    | "UPGRADE_PAUSED"
    | (string & {})
  >;
  /** The cluster's rollback-safe upgrade status. */
  rollbackSafeUpgradeStatus?: RollbackSafeUpgradeStatus;
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
}

export const ClusterUpgradeInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endOfStandardSupportTimestamp: Schema.optional(Schema.String),
  upgradeDetails: Schema.optional(Schema.Array(UpgradeDetails)),
  patchTargetVersion: Schema.optional(Schema.String),
  minorTargetVersion: Schema.optional(Schema.String),
  endOfExtendedSupportTimestamp: Schema.optional(Schema.String),
  autoUpgradeStatus: Schema.optional(Schema.Array(Schema.String)),
  rollbackSafeUpgradeStatus: Schema.optional(RollbackSafeUpgradeStatus),
  pausedReason: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ClusterUpgradeInfo" });

export interface StartIPRotationRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Whether to rotate credentials during IP rotation. */
  rotateCredentials?: boolean;
}

export const StartIPRotationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    zone: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    rotateCredentials: Schema.optional(Schema.Boolean),
  },
).annotate({ identifier: "StartIPRotationRequest" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface CompleteControlPlaneUpgradeRequest {
  /** API request version that initiates this operation. */
  version?: string;
}

export const CompleteControlPlaneUpgradeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompleteControlPlaneUpgradeRequest" });

export interface SetNodePoolAutoscalingRequest {
  /** Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. */
  nodePoolId?: string;
  /** The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Required. Autoscaling configuration for the node pool. */
  autoscaling?: NodePoolAutoscaling;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
}

export const SetNodePoolAutoscalingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePoolId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    autoscaling: Schema.optional(NodePoolAutoscaling),
    zone: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetNodePoolAutoscalingRequest" });

export interface CreateClusterRequest {
  /** Required. A [cluster resource](https://cloud.google.com/container-engine/reference/rest/v1beta1/projects.locations.clusters) */
  cluster?: Cluster;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
  zone?: string;
  /** The parent (project and location) where the cluster will be created. Specified in the format `projects/* /locations/*`. */
  parent?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId?: string;
}

export const CreateClusterRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cluster: Schema.optional(Cluster),
  zone: Schema.optional(Schema.String),
  parent: Schema.optional(Schema.String),
  projectId: Schema.optional(Schema.String),
}).annotate({ identifier: "CreateClusterRequest" });

export interface GetJSONWebKeysResponse {
  /** For HTTP requests, this field is automatically extracted into the Cache-Control HTTP header. */
  cacheHeader?: HttpCacheControlResponseHeader;
  /** The public component of the keys used by the cluster to sign token requests. */
  keys?: ReadonlyArray<Jwk>;
}

export const GetJSONWebKeysResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    cacheHeader: Schema.optional(HttpCacheControlResponseHeader),
    keys: Schema.optional(Schema.Array(Jwk)),
  },
).annotate({ identifier: "GetJSONWebKeysResponse" });

export interface ServerConfig {
  /** Maps of Kubernetes version and supported Windows server versions. */
  windowsVersionMaps?: Record<string, WindowsVersions>;
  /** Version of Kubernetes the service deploys by default. */
  defaultClusterVersion?: string;
  /** List of release channel configurations. */
  channels?: ReadonlyArray<ReleaseChannelConfig>;
  /** List of valid node upgrade target versions, in descending order. */
  validNodeVersions?: ReadonlyArray<string>;
  /** List of valid master versions, in descending order. */
  validMasterVersions?: ReadonlyArray<string>;
  /** Default image type. */
  defaultImageType?: string;
  /** List of valid image types. */
  validImageTypes?: ReadonlyArray<string>;
}

export const ServerConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  windowsVersionMaps: Schema.optional(
    Schema.Record(Schema.String, WindowsVersions),
  ),
  defaultClusterVersion: Schema.optional(Schema.String),
  channels: Schema.optional(Schema.Array(ReleaseChannelConfig)),
  validNodeVersions: Schema.optional(Schema.Array(Schema.String)),
  validMasterVersions: Schema.optional(Schema.Array(Schema.String)),
  defaultImageType: Schema.optional(Schema.String),
  validImageTypes: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ServerConfig" });

export interface ListOperationsResponse {
  /** If any zones are listed here, the list of operations returned may be missing the operations from those zones. */
  missingZones?: ReadonlyArray<string>;
  /** A list of operations in the project in the specified zone. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    missingZones: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
  },
).annotate({ identifier: "ListOperationsResponse" });

export interface SetLoggingServiceRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Required. The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions. */
  loggingService?: string;
}

export const SetLoggingServiceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    loggingService: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetLoggingServiceRequest" });

export interface PdbBlockedPod {
  /** The namespace of the pod. */
  namespace?: string;
  /** The name of the pod. */
  name?: string;
}

export const PdbBlockedPod = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namespace: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "PdbBlockedPod" });

export interface DisruptionEvent {
  /** The node whose drain is blocked by PDB. This field is set for both POD_PDB_VIOLATION and POD_NOT_ENOUGH_PDB event. */
  pdbBlockedNode?: string;
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
}

export const DisruptionEvent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pdbBlockedNode: Schema.optional(Schema.String),
  disruptionType: Schema.optional(Schema.String),
  pdbBlockedPod: Schema.optional(Schema.Array(PdbBlockedPod)),
  pdbViolationTimeout: Schema.optional(Schema.String),
}).annotate({ identifier: "DisruptionEvent" });

export interface UpgradeInfoEvent {
  /** Output only. The state of the upgrade. */
  state?:
    | "STATE_UNSPECIFIED"
    | "SCHEDULED"
    | "STARTED"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELED"
    | (string & {});
  /** The resource type associated with the upgrade. */
  resourceType?:
    | "UPGRADE_RESOURCE_TYPE_UNSPECIFIED"
    | "MASTER"
    | "NODE_POOL"
    | (string & {});
  /** The current emulated version before the upgrade. */
  currentEmulatedVersion?: string;
  /** The time when the operation was started. */
  startTime?: string;
  /** The type of the event. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "END_OF_SUPPORT"
    | "COS_MILESTONE_VERSION_UPDATE"
    | "UPGRADE_LIFECYCLE"
    | "DISRUPTION_EVENT"
    | (string & {});
  /** Optional relative path to the resource. For example in node pool upgrades, the relative path of the node pool. */
  resource?: string;
  /** The target version for the upgrade. */
  targetVersion?: string;
  /** The end of extended support timestamp. */
  extendedSupportEndTime?: string;
  /** The end of standard support timestamp. */
  standardSupportEndTime?: string;
  /** The target emulated version for the upgrade. */
  targetEmulatedVersion?: string;
  /** The time when the operation ended. */
  endTime?: string;
  /** The information about the disruption event. This field is only populated when event_type is DISRUPTION_EVENT. */
  disruptionEvent?: DisruptionEvent;
  /** The operation associated with this upgrade. */
  operation?: string;
  /** A brief description of the event. */
  description?: string;
  /** The current version before the upgrade. */
  currentVersion?: string;
}

export const UpgradeInfoEvent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.String),
  resourceType: Schema.optional(Schema.String),
  currentEmulatedVersion: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  eventType: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  targetVersion: Schema.optional(Schema.String),
  extendedSupportEndTime: Schema.optional(Schema.String),
  standardSupportEndTime: Schema.optional(Schema.String),
  targetEmulatedVersion: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  disruptionEvent: Schema.optional(DisruptionEvent),
  operation: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  currentVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "UpgradeInfoEvent" });

export interface CreateNodePoolRequest {
  /** Required. The node pool to create. */
  nodePool?: NodePool;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field. */
  clusterId?: string;
  /** The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/* /locations/* /clusters/*`. */
  parent?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
  zone?: string;
}

export const CreateNodePoolRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nodePool: Schema.optional(NodePool),
  clusterId: Schema.optional(Schema.String),
  parent: Schema.optional(Schema.String),
  projectId: Schema.optional(Schema.String),
  zone: Schema.optional(Schema.String),
}).annotate({ identifier: "CreateNodePoolRequest" });

export interface ListNodePoolsResponse {
  /** A list of node pools for a cluster. */
  nodePools?: ReadonlyArray<NodePool>;
}

export const ListNodePoolsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nodePools: Schema.optional(Schema.Array(NodePool)),
}).annotate({ identifier: "ListNodePoolsResponse" });

export interface UsableSubnetworkSecondaryRange {
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
  /** The range of IP addresses belonging to this subnetwork secondary range. */
  ipCidrRange?: string;
}

export const UsableSubnetworkSecondaryRange =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    rangeName: Schema.optional(Schema.String),
    ipCidrRange: Schema.optional(Schema.String),
  }).annotate({ identifier: "UsableSubnetworkSecondaryRange" });

export interface UsableSubnetwork {
  /** Subnetwork Name. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet */
  subnetwork?: string;
  /** Network Name. Example: projects/my-project/global/networks/my-network */
  network?: string;
  /** A human readable status message representing the reasons for cases where the caller cannot use the secondary ranges under the subnet. For example if the secondary_ip_ranges is empty due to a permission issue, an insufficient permission message will be given by status_message. */
  statusMessage?: string;
  /** The range of internal addresses that are owned by this subnetwork. */
  ipCidrRange?: string;
  /** Secondary IP ranges. */
  secondaryIpRanges?: ReadonlyArray<UsableSubnetworkSecondaryRange>;
}

export const UsableSubnetwork = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subnetwork: Schema.optional(Schema.String),
  network: Schema.optional(Schema.String),
  statusMessage: Schema.optional(Schema.String),
  ipCidrRange: Schema.optional(Schema.String),
  secondaryIpRanges: Schema.optional(
    Schema.Array(UsableSubnetworkSecondaryRange),
  ),
}).annotate({ identifier: "UsableSubnetwork" });

export interface SetNodePoolManagementRequest {
  /** Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name?: string;
  /** Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. */
  nodePoolId?: string;
  /** Required. NodeManagement configuration for the node pool. */
  management?: NodeManagement;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
}

export const SetNodePoolManagementRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    nodePoolId: Schema.optional(Schema.String),
    management: Schema.optional(NodeManagement),
    zone: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetNodePoolManagementRequest" });

export interface ListLocationsResponse {
  /** A full list of GKE locations. */
  locations?: ReadonlyArray<Location>;
  /** Only return ListLocationsResponse that occur after the page_token. This value should be populated from the ListLocationsResponse.next_page_token if that response token was set (which happens when listing more Locations than fit in a single ListLocationsResponse). */
  nextPageToken?: string;
}

export const ListLocationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  locations: Schema.optional(Schema.Array(Location)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListLocationsResponse" });

export interface CompleteIPRotationRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
}

export const CompleteIPRotationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompleteIPRotationRequest" });

export interface ListUsableSubnetworksResponse {
  /** This token allows you to get the next page of results for list requests. If the number of results is larger than `page_size`, use the `next_page_token` as a value for the query parameter `page_token` in the next request. The value will become empty when there are no more pages. */
  nextPageToken?: string;
  /** A list of usable subnetworks in the specified network project. */
  subnetworks?: ReadonlyArray<UsableSubnetwork>;
}

export const ListUsableSubnetworksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    subnetworks: Schema.optional(Schema.Array(UsableSubnetwork)),
  }).annotate({ identifier: "ListUsableSubnetworksResponse" });

export interface SecurityBulletinEvent {
  /** The URI link to the bulletin on the website for more information. */
  bulletinUri?: string;
  /** The GKE minor versions affected by this vulnerability. */
  affectedSupportedMinors?: ReadonlyArray<string>;
  /** The GKE versions where this vulnerability is patched. */
  patchedVersions?: ReadonlyArray<string>;
  /** The resource type (node/control plane) that has the vulnerability. Multiple notifications (1 notification per resource type) will be sent for a vulnerability that affects > 1 resource type. */
  resourceTypeAffected?: string;
  /** The ID of the bulletin corresponding to the vulnerability. */
  bulletinId?: string;
  /** The CVEs associated with this bulletin. */
  cveIds?: ReadonlyArray<string>;
  /** This represents a version selected from the patched_versions field that the cluster receiving this notification should most likely want to upgrade to based on its current version. Note that if this notification is being received by a given cluster, it means that this version is currently available as an upgrade target in that cluster's location. */
  suggestedUpgradeTarget?: string;
  /** The GKE versions where this vulnerability is mitigated. */
  mitigatedVersions?: ReadonlyArray<string>;
  /** The severity of this bulletin as it relates to GKE. */
  severity?: string;
  /** A brief description of the bulletin. See the bulletin pointed to by the bulletin_uri field for an expanded description. */
  briefDescription?: string;
  /** If this field is specified, it means there are manual steps that the user must take to make their clusters safe. */
  manualStepsRequired?: boolean;
}

export const SecurityBulletinEvent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bulletinUri: Schema.optional(Schema.String),
  affectedSupportedMinors: Schema.optional(Schema.Array(Schema.String)),
  patchedVersions: Schema.optional(Schema.Array(Schema.String)),
  resourceTypeAffected: Schema.optional(Schema.String),
  bulletinId: Schema.optional(Schema.String),
  cveIds: Schema.optional(Schema.Array(Schema.String)),
  suggestedUpgradeTarget: Schema.optional(Schema.String),
  mitigatedVersions: Schema.optional(Schema.Array(Schema.String)),
  severity: Schema.optional(Schema.String),
  briefDescription: Schema.optional(Schema.String),
  manualStepsRequired: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SecurityBulletinEvent" });

export interface RollbackNodePoolUpgradeRequest {
  /** Option for rollback to ignore the PodDisruptionBudget. Default value is false. */
  respectPdb?: boolean;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field. */
  nodePoolId?: string;
  /** Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name?: string;
}

export const RollbackNodePoolUpgradeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    respectPdb: Schema.optional(Schema.Boolean),
    zone: Schema.optional(Schema.String),
    nodePoolId: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "RollbackNodePoolUpgradeRequest" });

export interface UpdateMasterRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Required. The Kubernetes version to change the master to. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version */
  masterVersion?: string;
  /** The name (project, location, cluster) of the cluster to update. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
}

export const UpdateMasterRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  projectId: Schema.optional(Schema.String),
  masterVersion: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  zone: Schema.optional(Schema.String),
  clusterId: Schema.optional(Schema.String),
}).annotate({ identifier: "UpdateMasterRequest" });

export interface AutopilotCompatibilityIssue {
  /** The name of the resources which are subject to this issue. */
  subjects?: ReadonlyArray<string>;
  /** The last time when this issue was observed. */
  lastObservation?: string;
  /** The description of the issue. */
  description?: string;
  /** A URL to a public documentation, which addresses resolving this issue. */
  documentationUrl?: string;
  /** The incompatibility type of this issue. */
  incompatibilityType?:
    | "UNSPECIFIED"
    | "INCOMPATIBILITY"
    | "ADDITIONAL_CONFIG_REQUIRED"
    | "PASSED_WITH_OPTIONAL_CONFIG"
    | (string & {});
  /** The constraint type of the issue. */
  constraintType?: string;
}

export const AutopilotCompatibilityIssue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subjects: Schema.optional(Schema.Array(Schema.String)),
    lastObservation: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    documentationUrl: Schema.optional(Schema.String),
    incompatibilityType: Schema.optional(Schema.String),
    constraintType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutopilotCompatibilityIssue" });

export interface CheckAutopilotCompatibilityResponse {
  /** The list of issues for the given operation. */
  issues?: ReadonlyArray<AutopilotCompatibilityIssue>;
  /** The summary of the autopilot compatibility response. */
  summary?: string;
}

export const CheckAutopilotCompatibilityResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issues: Schema.optional(Schema.Array(AutopilotCompatibilityIssue)),
    summary: Schema.optional(Schema.String),
  }).annotate({ identifier: "CheckAutopilotCompatibilityResponse" });

export interface SetLabelsRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Required. The labels to set for that cluster. */
  resourceLabels?: Record<string, string>;
  /** Required. The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Kubernetes Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash when updating or changing labels. Make a `get()` request to the resource to get the latest fingerprint. */
  labelFingerprint?: string;
}

export const SetLabelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zone: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  clusterId: Schema.optional(Schema.String),
  projectId: Schema.optional(Schema.String),
  resourceLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  labelFingerprint: Schema.optional(Schema.String),
}).annotate({ identifier: "SetLabelsRequest" });

export interface UpgradeEvent {
  /** The target version for the upgrade. */
  targetVersion?: string;
  /** The current version before the upgrade. */
  currentVersion?: string;
  /** Optional relative path to the resource. For example in node pool upgrades, the relative path of the node pool. */
  resource?: string;
  /** The current emulated version before the upgrade. */
  currentEmulatedVersion?: string;
  /** The operation associated with this upgrade. */
  operation?: string;
  /** The time when the operation was started. */
  operationStartTime?: string;
  /** The target emulated version for the upgrade. */
  targetEmulatedVersion?: string;
  /** The resource type that is upgrading. */
  resourceType?:
    | "UPGRADE_RESOURCE_TYPE_UNSPECIFIED"
    | "MASTER"
    | "NODE_POOL"
    | (string & {});
}

export const UpgradeEvent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetVersion: Schema.optional(Schema.String),
  currentVersion: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  currentEmulatedVersion: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  operationStartTime: Schema.optional(Schema.String),
  targetEmulatedVersion: Schema.optional(Schema.String),
  resourceType: Schema.optional(Schema.String),
}).annotate({ identifier: "UpgradeEvent" });

export interface ListClustersResponse {
  /** A list of clusters in the project in the specified zone, or across all ones. */
  clusters?: ReadonlyArray<Cluster>;
  /** If any zones are listed here, the list of clusters returned may be missing those zones. */
  missingZones?: ReadonlyArray<string>;
}

export const ListClustersResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusters: Schema.optional(Schema.Array(Cluster)),
  missingZones: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ListClustersResponse" });

export interface SetAddonsConfigRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Required. The desired configurations for the various addons available to run in the cluster. */
  addonsConfig?: AddonsConfig;
}

export const SetAddonsConfigRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    zone: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    addonsConfig: Schema.optional(AddonsConfig),
  },
).annotate({ identifier: "SetAddonsConfigRequest" });

export interface SetMonitoringServiceRequest {
  /** The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Required. The monitoring service the cluster should use to write metrics. Currently available options: * `monitoring.googleapis.com/kubernetes` - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions. */
  monitoringService?: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
}

export const SetMonitoringServiceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    monitoringService: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetMonitoringServiceRequest" });

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

export interface ListProjectsAggregatedUsableSubnetworksRequest {
  /** Required. The parent project where subnetworks are usable. Specified in the format `projects/*`. */
  parent: string;
  /** The max number of results per page that should be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be used to get the next page of results in subsequent requests. Acceptable values are 0 to 500, inclusive. (Default: 500) */
  pageSize?: number;
  /** Filtering currently only supports equality on the networkProjectId and must be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId` is the project which owns the listed subnetworks. This defaults to the parent project ID. */
  filter?: string;
  /** Specifies a page token to use. Set this to the nextPageToken returned by previous list requests to get the next page of results. */
  pageToken?: string;
}

export const ListProjectsAggregatedUsableSubnetworksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
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

export interface GetServerconfigProjectsZonesRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** The name (project and location) of the server config to get, specified in the format `projects/* /locations/*`. */
  name?: string;
}

export const GetServerconfigProjectsZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
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

export interface ListProjectsZonesOperationsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId: string;
  /** The parent (project and location) where the operations will be listed. Specified in the format `projects/* /locations/*`. Location "-" matches all zones and all regions. */
  parent?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field. */
  zone: string;
}

export const ListProjectsZonesOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
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

export interface GetProjectsZonesOperationsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field. */
  operationId: string;
  /** The name (project, location, operation id) of the operation to get. Specified in the format `projects/* /locations/* /operations/*`. */
  name?: string;
}

export const GetProjectsZonesOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    operationId: Schema.String.pipe(T.HttpPath("operationId")),
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

export interface FetchClusterUpgradeInfoProjectsZonesClustersRequest {
  /** Required. The name (project, location, cluster) of the cluster to get. Specified in the format `projects/* /locations/* /clusters/*` or `projects/* /zones/* /clusters/*`. */
  name: string;
  /** API request version that initiates this operation. */
  version?: string;
}

export const FetchClusterUpgradeInfoProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    version: Schema.optional(Schema.String).pipe(T.HttpQuery("version")),
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

export interface GetProjectsZonesClustersRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field. */
  clusterId: string;
}

export const GetProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
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

export interface CreateProjectsZonesClustersRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
  zone: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId: string;
  /** Request body */
  body?: CreateClusterRequest;
}

export const CreateProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
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

export interface SetMasterAuthProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Request body */
  body?: SetMasterAuthRequest;
}

export const SetMasterAuthProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
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

export interface SetNetworkPolicyProjectsZonesClustersRequest {
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Request body */
  body?: SetNetworkPolicyRequest;
}

export const SetNetworkPolicyProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
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

export interface CompleteIpRotationProjectsZonesClustersRequest {
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Request body */
  body?: CompleteIPRotationRequest;
}

export const CompleteIpRotationProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
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

export interface ListProjectsZonesClustersRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field. */
  zone: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId: string;
  /** The parent (project and location) where the clusters will be listed. Specified in the format `projects/* /locations/*`. Location "-" matches all zones and all regions. */
  parent?: string;
}

export const ListProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
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

export interface LocationsProjectsZonesClustersRequest {
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Request body */
  body?: SetLocationsRequest;
}

export const LocationsProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
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

export interface AddonsProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Request body */
  body?: SetAddonsConfigRequest;
}

export const AddonsProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
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

export interface MasterProjectsZonesClustersRequest {
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Request body */
  body?: UpdateMasterRequest;
}

export const MasterProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
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

export interface DeleteProjectsZonesClustersRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/* /locations/* /clusters/*`. */
  name?: string;
  /** Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
}

export const DeleteProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
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

export interface LegacyAbacProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Request body */
  body?: SetLegacyAbacRequest;
}

export const LegacyAbacProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
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

export interface LoggingProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Request body */
  body?: SetLoggingServiceRequest;
}

export const LoggingProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
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

export interface StartIpRotationProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Request body */
  body?: StartIPRotationRequest;
}

export const StartIpRotationProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
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
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Request body */
  body?: SetLabelsRequest;
}

export const ResourceLabelsProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
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

export interface MonitoringProjectsZonesClustersRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Request body */
  body?: SetMonitoringServiceRequest;
}

export const MonitoringProjectsZonesClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
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

export interface DeleteProjectsZonesClustersNodePoolsRequest {
  /** The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name?: string;
  /** Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field. */
  nodePoolId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId: string;
}

export const DeleteProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    nodePoolId: Schema.String.pipe(T.HttpPath("nodePoolId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
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
  /** Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field. */
  nodePoolId: string;
  /** Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Request body */
  body?: RollbackNodePoolUpgradeRequest;
}

export const RollbackProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePoolId: Schema.String.pipe(T.HttpPath("nodePoolId")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
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

export interface CreateProjectsZonesClustersNodePoolsRequest {
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field. */
  clusterId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
  zone: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId: string;
  /** Request body */
  body?: CreateNodePoolRequest;
}

export const CreateProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
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

export interface AutoscalingProjectsZonesClustersNodePoolsRequest {
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. */
  nodePoolId: string;
  /** Request body */
  body?: SetNodePoolAutoscalingRequest;
}

export const AutoscalingProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
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

export interface GetProjectsZonesClustersNodePoolsRequest {
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field. */
  nodePoolId: string;
  /** The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name?: string;
}

export const GetProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    nodePoolId: Schema.String.pipe(T.HttpPath("nodePoolId")),
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

export interface SetManagementProjectsZonesClustersNodePoolsRequest {
  /** Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. */
  nodePoolId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Request body */
  body?: SetNodePoolManagementRequest;
}

export const SetManagementProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePoolId: Schema.String.pipe(T.HttpPath("nodePoolId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
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
  /** Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. */
  nodePoolId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Request body */
  body?: UpdateNodePoolRequest;
}

export const UpdateProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    nodePoolId: Schema.String.pipe(T.HttpPath("nodePoolId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
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
  /** The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/* /locations/* /clusters/*`. */
  parent?: string;
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field. */
  clusterId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
  zone: string;
}

export const ListProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
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
  /** Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
  clusterId: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone: string;
  /** Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. */
  nodePoolId: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId: string;
  /** Request body */
  body?: SetNodePoolSizeRequest;
}

export const SetSizeProjectsZonesClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    zone: Schema.String.pipe(T.HttpPath("zone")),
    nodePoolId: Schema.String.pipe(T.HttpPath("nodePoolId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
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

export interface ListProjectsLocationsClustersRequest {
  /** The parent (project and location) where the clusters will be listed. Specified in the format `projects/* /locations/*`. Location "-" matches all zones and all regions. */
  parent: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field. */
  zone?: string;
}

export const ListProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
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

export interface FetchClusterUpgradeInfoProjectsLocationsClustersRequest {
  /** API request version that initiates this operation. */
  version?: string;
  /** Required. The name (project, location, cluster) of the cluster to get. Specified in the format `projects/* /locations/* /clusters/*` or `projects/* /zones/* /clusters/*`. */
  name: string;
}

export const FetchClusterUpgradeInfoProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String).pipe(T.HttpQuery("version")),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface GetProjectsLocationsClustersRequest {
  /** Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
}

export const GetProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.optional(Schema.String).pipe(T.HttpQuery("clusterId")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
    name: Schema.String.pipe(T.HttpPath("name")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
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

export interface DeleteProjectsLocationsClustersRequest {
  /** The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/* /locations/* /clusters/*`. */
  name: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
}

export const DeleteProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    clusterId: Schema.optional(Schema.String).pipe(T.HttpQuery("clusterId")),
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

export interface ListProjectsLocationsClustersNodePoolsRequest {
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field. */
  clusterId?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
  zone?: string;
  /** The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/* /locations/* /clusters/*`. */
  parent: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId?: string;
}

export const ListProjectsLocationsClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.optional(Schema.String).pipe(T.HttpQuery("clusterId")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
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

export interface GetProjectsLocationsClustersNodePoolsRequest {
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field. */
  nodePoolId?: string;
}

export const GetProjectsLocationsClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.optional(Schema.String).pipe(T.HttpQuery("clusterId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
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

export interface DeleteProjectsLocationsClustersNodePoolsRequest {
  /** Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
  clusterId?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
  /** The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`. */
  name: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field. */
  nodePoolId?: string;
}

export const DeleteProjectsLocationsClustersNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.optional(Schema.String).pipe(T.HttpQuery("clusterId")),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface GetProjectsLocationsOperationsRequest {
  /** The name (project, location, operation id) of the operation to get. Specified in the format `projects/* /locations/* /operations/*`. */
  name: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
  projectId?: string;
  /** Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field. */
  operationId?: string;
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
  zone?: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    operationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("operationId"),
    ),
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
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
  /** Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field. */
  zone?: string;
  /** The parent (project and location) where the operations will be listed. Specified in the format `projects/* /locations/*`. Location "-" matches all zones and all regions. */
  parent: string;
  /** Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
  projectId?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String).pipe(T.HttpQuery("zone")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
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
