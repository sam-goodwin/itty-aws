// ==========================================================================
// GKE Hub API (gkehub v1alpha)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "gkehub",
  version: "v1alpha",
  rootUrl: "https://gkehub.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ClusterUpgradeUpgradeStatus {
  /** Reason for this status. */
  reason?: string;
  /** Status code of the upgrade. */
  code?:
    | "CODE_UNSPECIFIED"
    | "INELIGIBLE"
    | "PENDING"
    | "IN_PROGRESS"
    | "SOAKING"
    | "FORCED_SOAKING"
    | "COMPLETE"
    | (string & {});
  /** Last timestamp the status was updated. */
  updateTime?: string;
}

export const ClusterUpgradeUpgradeStatus: Schema.Codec<ClusterUpgradeUpgradeStatus> =
  /*@__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterUpgradeUpgradeStatus" });

export interface NamespaceLifecycleState {
  /** Output only. The current state of the Namespace resource. */
  code?:
    | "CODE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "DELETING"
    | "UPDATING"
    | (string & {});
}

export const NamespaceLifecycleState: Schema.Codec<NamespaceLifecycleState> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "NamespaceLifecycleState" });

export interface Namespace {
  /** Output only. When the namespace was deleted. */
  deleteTime?: string;
  /** Required. Scope associated with the namespace */
  scope?: string;
  /** Optional. Namespace-level cluster namespace labels. These labels are applied to the related namespace of the member clusters bound to the parent Scope. Scope-level labels (`namespace_labels` in the Fleet Scope resource) take precedence over Namespace-level labels if they share a key. Keys and values must be Kubernetes-conformant. */
  namespaceLabels?: Record<string, string>;
  /** The resource name for the namespace `projects/{project}/locations/{location}/namespaces/{namespace}` */
  name?: string;
  /** Output only. Google-generated UUID for this resource. This is unique across all namespace resources. If a namespace resource is deleted and another resource with the same name is created, it gets a different uid. */
  uid?: string;
  /** Output only. State of the namespace resource. */
  state?: NamespaceLifecycleState;
  /** Output only. When the namespace was last updated. */
  updateTime?: string;
  /** Output only. When the namespace was created. */
  createTime?: string;
  /** Optional. Labels for this Namespace. */
  labels?: Record<string, string>;
}

export const Namespace: Schema.Codec<Namespace> =
  /*@__PURE__*/ Schema.Struct({
    deleteTime: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    namespaceLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    state: Schema.optional(NamespaceLifecycleState),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Namespace" });

export interface FleetObservabilityRoutingConfig {
  /** mode configures the logs routing mode. */
  mode?: "MODE_UNSPECIFIED" | "COPY" | "MOVE" | (string & {});
}

export const FleetObservabilityRoutingConfig: Schema.Codec<FleetObservabilityRoutingConfig> =
  /*@__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "FleetObservabilityRoutingConfig" });

export interface ConfigManagementGroupVersionKind {
  /** Kubernetes Group */
  group?: string;
  /** Kubernetes Kind */
  kind?: string;
  /** Kubernetes Version */
  version?: string;
}

export const ConfigManagementGroupVersionKind: Schema.Codec<ConfigManagementGroupVersionKind> =
  /*@__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementGroupVersionKind" });

export interface ClusterUpgradeGKEUpgrade {
  /** Version of the upgrade, e.g., "1.22.1-gke.100". It should be a valid version. It must not exceet 99 characters. */
  version?: string;
  /** Name of the upgrade, e.g., "k8s_control_plane". It should be a valid upgrade name. It must not exceet 99 characters. */
  name?: string;
}

export const ClusterUpgradeGKEUpgrade: Schema.Codec<ClusterUpgradeGKEUpgrade> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterUpgradeGKEUpgrade" });

export interface ClusterUpgradeGKEUpgradeState {
  /** Status of the upgrade. */
  status?: ClusterUpgradeUpgradeStatus;
  /** Which upgrade to track the state. */
  upgrade?: ClusterUpgradeGKEUpgrade;
  /** Number of GKE clusters in each status code. */
  stats?: Record<string, string>;
}

export const ClusterUpgradeGKEUpgradeState: Schema.Codec<ClusterUpgradeGKEUpgradeState> =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(ClusterUpgradeUpgradeStatus),
    upgrade: Schema.optional(ClusterUpgradeGKEUpgrade),
    stats: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ClusterUpgradeGKEUpgradeState" });

export interface DataplaneV2FeatureSpec {
  /** Enable dataplane-v2 based encryption for multiple clusters. */
  enableEncryption?: boolean;
}

export const DataplaneV2FeatureSpec: Schema.Codec<DataplaneV2FeatureSpec> =
  /*@__PURE__*/ Schema.Struct({
    enableEncryption: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataplaneV2FeatureSpec" });

export interface ClusterUpgradePostConditions {
  /** Required. Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days. Required. */
  soaking?: string;
}

export const ClusterUpgradePostConditions: Schema.Codec<ClusterUpgradePostConditions> =
  /*@__PURE__*/ Schema.Struct({
    soaking: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterUpgradePostConditions" });

export interface ClusterUpgradeGKEUpgradeOverride {
  /** Required. Which upgrade to override. Required. */
  upgrade?: ClusterUpgradeGKEUpgrade;
  /** Required. Post conditions to override for the specified upgrade (name + version). Required. */
  postConditions?: ClusterUpgradePostConditions;
}

export const ClusterUpgradeGKEUpgradeOverride: Schema.Codec<ClusterUpgradeGKEUpgradeOverride> =
  /*@__PURE__*/ Schema.Struct({
    upgrade: Schema.optional(ClusterUpgradeGKEUpgrade),
    postConditions: Schema.optional(ClusterUpgradePostConditions),
  }).annotate({ identifier: "ClusterUpgradeGKEUpgradeOverride" });

export interface ClusterUpgradeFleetSpec {
  /** Allow users to override some properties of each GKE upgrade. */
  gkeUpgradeOverrides?: ReadonlyArray<ClusterUpgradeGKEUpgradeOverride>;
  /** Output only. The effective upgrade engine for the fleet. */
  upgradeEngine?:
    | "UPGRADE_ENGINE_UNSPECIFIED"
    | "SEQUENCING_V1"
    | "SEQUENCING_V2"
    | (string & {});
  /** This fleet consumes upgrades that have COMPLETE status code in the upstream fleets. See UpgradeStatus.Code for code definitions. The fleet name should be either fleet project number or id. This is defined as repeated for future proof reasons. Initial implementation will enforce at most one upstream fleet. */
  upstreamFleets?: ReadonlyArray<string>;
  /** Required. Post conditions to evaluate to mark an upgrade COMPLETE. Required. */
  postConditions?: ClusterUpgradePostConditions;
}

export const ClusterUpgradeFleetSpec: Schema.Codec<ClusterUpgradeFleetSpec> =
  /*@__PURE__*/ Schema.Struct({
    gkeUpgradeOverrides: Schema.optional(
      Schema.Array(ClusterUpgradeGKEUpgradeOverride),
    ),
    upgradeEngine: Schema.optional(Schema.String),
    upstreamFleets: Schema.optional(Schema.Array(Schema.String)),
    postConditions: Schema.optional(ClusterUpgradePostConditions),
  }).annotate({ identifier: "ClusterUpgradeFleetSpec" });

export interface ServiceMeshCondition {
  /** Links contains actionable information. */
  documentationLink?: string;
  /** A short summary about the issue. */
  details?: string;
  /** Unique identifier of the condition which describes the condition recognizable to the user. */
  code?:
    | "CODE_UNSPECIFIED"
    | "MESH_IAM_PERMISSION_DENIED"
    | "MESH_IAM_CROSS_PROJECT_PERMISSION_DENIED"
    | "CNI_CONFIG_UNSUPPORTED"
    | "GKE_SANDBOX_UNSUPPORTED"
    | "NODEPOOL_WORKLOAD_IDENTITY_FEDERATION_REQUIRED"
    | "CNI_INSTALLATION_FAILED"
    | "CNI_POD_UNSCHEDULABLE"
    | "CLUSTER_HAS_ZERO_NODES"
    | "CANONICAL_SERVICE_ERROR"
    | "UNSUPPORTED_MULTIPLE_CONTROL_PLANES"
    | "VPCSC_GA_SUPPORTED"
    | "DEPRECATED_SPEC_CONTROL_PLANE_MANAGEMENT"
    | "DEPRECATED_SPEC_CONTROL_PLANE_MANAGEMENT_SAFE"
    | "CONFIG_APPLY_INTERNAL_ERROR"
    | "CONFIG_VALIDATION_ERROR"
    | "CONFIG_VALIDATION_WARNING"
    | "QUOTA_EXCEEDED_BACKEND_SERVICES"
    | "QUOTA_EXCEEDED_HEALTH_CHECKS"
    | "QUOTA_EXCEEDED_HTTP_ROUTES"
    | "QUOTA_EXCEEDED_TCP_ROUTES"
    | "QUOTA_EXCEEDED_TLS_ROUTES"
    | "QUOTA_EXCEEDED_TRAFFIC_POLICIES"
    | "QUOTA_EXCEEDED_ENDPOINT_POLICIES"
    | "QUOTA_EXCEEDED_GATEWAYS"
    | "QUOTA_EXCEEDED_MESHES"
    | "QUOTA_EXCEEDED_SERVER_TLS_POLICIES"
    | "QUOTA_EXCEEDED_CLIENT_TLS_POLICIES"
    | "QUOTA_EXCEEDED_SERVICE_LB_POLICIES"
    | "QUOTA_EXCEEDED_HTTP_FILTERS"
    | "QUOTA_EXCEEDED_TCP_FILTERS"
    | "QUOTA_EXCEEDED_NETWORK_ENDPOINT_GROUPS"
    | "CONFIG_APPLY_BLOCKED"
    | "LEGACY_MC_SECRETS"
    | "WORKLOAD_IDENTITY_REQUIRED"
    | "NON_STANDARD_BINARY_USAGE"
    | "UNSUPPORTED_GATEWAY_CLASS"
    | "MANAGED_CNI_NOT_ENABLED"
    | "MISSING_CONTROL_PLANE_CONFIG"
    | "SHARED_VPC_MISSING_PERMISSIONS"
    | "REQUIRED_ORG_POLICY_DISABLED"
    | "MODERNIZATION_INCOMPATIBLE_POD_ANNOTATION"
    | "MODERNIZATION_INCOMPATIBLE_CONFIG"
    | "MODERNIZATION_INCOMPATIBLE_GATEWAY_POD_SCALE"
    | "MODERNIZATION_SCHEDULED"
    | "MODERNIZATION_IN_PROGRESS"
    | "MODERNIZATION_COMPLETED"
    | "MODERNIZATION_ABORTED"
    | "MODERNIZATION_PREPARING"
    | "MODERNIZATION_STALLED"
    | "MODERNIZATION_PREPARED"
    | "MODERNIZATION_MIGRATING_WORKLOADS"
    | "MODERNIZATION_ROLLING_BACK_CLUSTER"
    | "MODERNIZATION_WILL_BE_SCHEDULED"
    | "MODERNIZATION_MANUAL"
    | "MODERNIZATION_ELIGIBLE"
    | "MODERNIZATION_MODERNIZING"
    | "MODERNIZATION_MODERNIZED_SOAKING"
    | "MODERNIZATION_FINALIZED"
    | "MODERNIZATION_ROLLING_BACK_FLEET"
    | "MODERNIZATION_COMPATIBLE"
    | "MODERNIZATION_INCOMPATIBLE"
    | "MODERNIZATION_INCOMPATIBLE_FLEET_SCALE"
    | "MODERNIZATION_INCOMPATIBLE_FLEET_QUOTA"
    | (string & {});
  /** Severity level of the condition. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "ERROR"
    | "WARNING"
    | "INFO"
    | (string & {});
}

export const ServiceMeshCondition: Schema.Codec<ServiceMeshCondition> =
  /*@__PURE__*/ Schema.Struct({
    documentationLink: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshCondition" });

export interface ConfigManagementContainerOverride {
  /** Optional. The memory request of the container. Use the following memory resource units: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory. */
  memoryRequest?: string;
  /** Optional. The cpu limit of the container. Use the following CPU resource units: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu. */
  cpuLimit?: string;
  /** Optional. The cpu request of the container. Use the following CPU resource units: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu. */
  cpuRequest?: string;
  /** Required. The name of the container. */
  containerName?: string;
  /** Optional. The memory limit of the container. Use the following memory resource units: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory. */
  memoryLimit?: string;
}

export const ConfigManagementContainerOverride: Schema.Codec<ConfigManagementContainerOverride> =
  /*@__PURE__*/ Schema.Struct({
    memoryRequest: Schema.optional(Schema.String),
    cpuLimit: Schema.optional(Schema.String),
    cpuRequest: Schema.optional(Schema.String),
    containerName: Schema.optional(Schema.String),
    memoryLimit: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementContainerOverride" });

export interface MembershipBindingLifecycleState {
  /** Output only. The current state of the MembershipBinding resource. */
  code?:
    | "CODE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "DELETING"
    | "UPDATING"
    | (string & {});
}

export const MembershipBindingLifecycleState: Schema.Codec<MembershipBindingLifecycleState> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "MembershipBindingLifecycleState" });

export interface ClusterSelector {
  /** Required. A valid CEL (Common Expression Language) expression which evaluates `resource.labels`. */
  labelSelector?: string;
}

export const ClusterSelector: Schema.Codec<ClusterSelector> =
  /*@__PURE__*/ Schema.Struct({
    labelSelector: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterSelector" });

export interface AuditLogConfig {
  /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
  exemptedMembers?: ReadonlyArray<string>;
  /** The log type that this config enables. */
  logType?:
    | "LOG_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "DATA_WRITE"
    | "DATA_READ"
    | (string & {});
}

export const AuditLogConfig: Schema.Codec<AuditLogConfig> =
  /*@__PURE__*/ Schema.Struct({
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
    logType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuditLogConfig" });

export interface GenerateExclusivityManifestResponse {
  /** The YAML manifest of the membership CRD to apply if a newer version of the CRD is available. Empty if no update needs to be applied. */
  crdManifest?: string;
  /** The YAML manifest of the membership CR to apply if a new version of the CR is available. Empty if no update needs to be applied. */
  crManifest?: string;
}

export const GenerateExclusivityManifestResponse: Schema.Codec<GenerateExclusivityManifestResponse> =
  /*@__PURE__*/ Schema.Struct({
    crdManifest: Schema.optional(Schema.String),
    crManifest: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateExclusivityManifestResponse" });

export interface WorkloadIdentityIdentityProviderStateDetail {
  /** The state of the Identity Provider. */
  code?:
    | "IDENTITY_PROVIDER_STATE_UNSPECIFIED"
    | "IDENTITY_PROVIDER_STATE_OK"
    | "IDENTITY_PROVIDER_STATE_ERROR"
    | (string & {});
  /** A human-readable description of the current state or returned error. */
  description?: string;
}

export const WorkloadIdentityIdentityProviderStateDetail: Schema.Codec<WorkloadIdentityIdentityProviderStateDetail> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkloadIdentityIdentityProviderStateDetail" });

export interface FleetObservabilityMembershipSpec {}

export const FleetObservabilityMembershipSpec: Schema.Codec<FleetObservabilityMembershipSpec> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "FleetObservabilityMembershipSpec",
  });

export interface IdentityServiceSimpleBindCredentials {
  /** Output only. The encrypted password of the service account object/user. */
  encryptedPassword?: string;
  /** Required. Input only. The password of the service account object/user. */
  password?: string;
  /** Required. The distinguished name(DN) of the service account object/user. */
  dn?: string;
}

export const IdentityServiceSimpleBindCredentials: Schema.Codec<IdentityServiceSimpleBindCredentials> =
  /*@__PURE__*/ Schema.Struct({
    encryptedPassword: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    dn: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceSimpleBindCredentials" });

export interface ConfigManagementBinauthzConfig {
  /** Whether binauthz is enabled in this cluster. */
  enabled?: boolean;
}

export const ConfigManagementBinauthzConfig: Schema.Codec<ConfigManagementBinauthzConfig> =
  /*@__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ConfigManagementBinauthzConfig" });

export interface ConfigManagementOciConfig {
  /** Optional. Period in seconds between consecutive syncs. Default: 15. */
  syncWaitSecs?: string;
  /** Optional. The absolute path of the directory that contains the local resources. Default: the root directory of the image. */
  policyDir?: string;
  /** Optional. The Google Cloud Service Account Email used for auth when secret_type is `gcpserviceaccount`. */
  gcpServiceAccountEmail?: string;
  /** Required. Type of secret configured for access to the OCI repo. Must be one of `gcenode`, `gcpserviceaccount`, `k8sserviceaccount` or `none`. The validation of this is case-sensitive. */
  secretType?: string;
  /** Required. The OCI image repository URL for the package to sync from. e.g. `LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME`. */
  syncRepo?: string;
}

export const ConfigManagementOciConfig: Schema.Codec<ConfigManagementOciConfig> =
  /*@__PURE__*/ Schema.Struct({
    syncWaitSecs: Schema.optional(Schema.String),
    policyDir: Schema.optional(Schema.String),
    gcpServiceAccountEmail: Schema.optional(Schema.String),
    secretType: Schema.optional(Schema.String),
    syncRepo: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementOciConfig" });

export interface ConfigManagementGitConfig {
  /** Required. The URL of the Git repository to use as the source of truth. */
  syncRepo?: string;
  /** Optional. URL for the HTTPS proxy to be used when communicating with the Git repo. Only specify when secret_type is `cookiefile`, `token`, or `none`. */
  httpsProxy?: string;
  /** Optional. Git revision (tag or hash) to check out. Default HEAD. */
  syncRev?: string;
  /** Required. Type of secret configured for access to the Git repo. Must be one of `ssh`, `cookiefile`, `gcenode`, `token`, `gcpserviceaccount`, `githubapp` or `none`. The validation of this is case-sensitive. */
  secretType?: string;
  /** Optional. The branch of the repository to sync from. Default: master. */
  syncBranch?: string;
  /** Optional. The Google Cloud Service Account Email used for auth when secret_type is `gcpserviceaccount`. */
  gcpServiceAccountEmail?: string;
  /** Optional. The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository. */
  policyDir?: string;
  /** Optional. Period in seconds between consecutive syncs. Default: 15. */
  syncWaitSecs?: string;
}

export const ConfigManagementGitConfig: Schema.Codec<ConfigManagementGitConfig> =
  /*@__PURE__*/ Schema.Struct({
    syncRepo: Schema.optional(Schema.String),
    httpsProxy: Schema.optional(Schema.String),
    syncRev: Schema.optional(Schema.String),
    secretType: Schema.optional(Schema.String),
    syncBranch: Schema.optional(Schema.String),
    gcpServiceAccountEmail: Schema.optional(Schema.String),
    policyDir: Schema.optional(Schema.String),
    syncWaitSecs: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementGitConfig" });

export interface ConfigManagementDeploymentOverride {
  /** Optional. The containers of the deployment resource to be overridden. */
  containers?: ReadonlyArray<ConfigManagementContainerOverride>;
  /** Required. The name of the deployment resource to be overridden. */
  deploymentName?: string;
  /** Required. The namespace of the deployment resource to be overridden. */
  deploymentNamespace?: string;
}

export const ConfigManagementDeploymentOverride: Schema.Codec<ConfigManagementDeploymentOverride> =
  /*@__PURE__*/ Schema.Struct({
    containers: Schema.optional(
      Schema.Array(ConfigManagementContainerOverride),
    ),
    deploymentName: Schema.optional(Schema.String),
    deploymentNamespace: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementDeploymentOverride" });

export interface ConfigManagementConfigSync {
  /** Optional. OCI repo configuration for the cluster */
  oci?: ConfigManagementOciConfig;
  /** Optional. The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring and Cloud Monarch when Workload Identity is enabled. The GSA should have the Monitoring Metric Writer (roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount `default` in the namespace `config-management-monitoring` should be bound to the GSA. Deprecated: If Workload Identity Federation for GKE is enabled, Google Cloud Service Account is no longer needed for exporting Config Sync metrics: https://cloud.google.com/kubernetes-engine/enterprise/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring#custom-monitoring. */
  metricsGcpServiceAccountEmail?: string;
  /** Optional. Git repo configuration for the cluster. */
  git?: ConfigManagementGitConfig;
  /** Optional. Set to true to enable the Config Sync admission webhook to prevent drifts. If set to false, disables the Config Sync admission webhook and does not prevent drifts. Defaults to false. See https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/prevent-config-drift for details. */
  preventDrift?: boolean;
  /** Optional. Configuration for deployment overrides. Applies only to Config Sync deployments with containers that are not a root or namespace reconciler: `reconciler-manager`, `otel-collector`, `resource-group-controller-manager`, `admission-webhook`. To override a root or namespace reconciler, use the rootsync or reposync fields at https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields#override-resources instead. */
  deploymentOverrides?: ReadonlyArray<ConfigManagementDeploymentOverride>;
  /** Optional. Enables the installation of Config Sync. If set to true, the Feature will manage Config Sync resources, and apply the other ConfigSync fields if they exist. If set to false, the Feature will ignore all other ConfigSync fields and delete the Config Sync resources. If omitted, ConfigSync is considered enabled if the git or oci field is present. */
  enabled?: boolean;
  /** Optional. Set to true to stop syncing configs for a single cluster. Default to false. */
  stopSyncing?: boolean;
  /** Optional. Specifies whether the Config Sync repo is in `hierarchical` or `unstructured` mode. Defaults to `hierarchical`. See https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/configs#organize-configs for an explanation. */
  sourceFormat?: string;
}

export const ConfigManagementConfigSync: Schema.Codec<ConfigManagementConfigSync> =
  /*@__PURE__*/ Schema.Struct({
    oci: Schema.optional(ConfigManagementOciConfig),
    metricsGcpServiceAccountEmail: Schema.optional(Schema.String),
    git: Schema.optional(ConfigManagementGitConfig),
    preventDrift: Schema.optional(Schema.Boolean),
    deploymentOverrides: Schema.optional(
      Schema.Array(ConfigManagementDeploymentOverride),
    ),
    enabled: Schema.optional(Schema.Boolean),
    stopSyncing: Schema.optional(Schema.Boolean),
    sourceFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementConfigSync" });

export interface ConfigManagementPolicyControllerMonitoring {
  /** Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export. */
  backends?: ReadonlyArray<
    | "MONITORING_BACKEND_UNSPECIFIED"
    | "PROMETHEUS"
    | "CLOUD_MONITORING"
    | (string & {})
  >;
}

export const ConfigManagementPolicyControllerMonitoring: Schema.Codec<ConfigManagementPolicyControllerMonitoring> =
  /*@__PURE__*/ Schema.Struct({
    backends: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ConfigManagementPolicyControllerMonitoring" });

export interface ConfigManagementPolicyController {
  /** Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect. */
  enabled?: boolean;
  /** Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. */
  auditIntervalSeconds?: string;
  /** Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. */
  referentialRulesEnabled?: boolean;
  /** Monitoring specifies the configuration of monitoring. */
  monitoring?: ConfigManagementPolicyControllerMonitoring;
  /** Installs the default template library along with Policy Controller. */
  templateLibraryInstalled?: boolean;
  /** The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster. */
  exemptableNamespaces?: ReadonlyArray<string>;
  /** Logs all denies and dry run failures. */
  logDeniesEnabled?: boolean;
  /** Output only. Last time this membership spec was updated. */
  updateTime?: string;
  /** Enable or disable mutation in policy controller. If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster. */
  mutationEnabled?: boolean;
}

export const ConfigManagementPolicyController: Schema.Codec<ConfigManagementPolicyController> =
  /*@__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    auditIntervalSeconds: Schema.optional(Schema.String),
    referentialRulesEnabled: Schema.optional(Schema.Boolean),
    monitoring: Schema.optional(ConfigManagementPolicyControllerMonitoring),
    templateLibraryInstalled: Schema.optional(Schema.Boolean),
    exemptableNamespaces: Schema.optional(Schema.Array(Schema.String)),
    logDeniesEnabled: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
    mutationEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ConfigManagementPolicyController" });

export interface ConfigManagementHierarchyControllerConfig {
  /** Whether Hierarchy Controller is enabled in this cluster. */
  enabled?: boolean;
  /** Whether pod tree labels are enabled in this cluster. */
  enablePodTreeLabels?: boolean;
  /** Whether hierarchical resource quota is enabled in this cluster. */
  enableHierarchicalResourceQuota?: boolean;
}

export const ConfigManagementHierarchyControllerConfig: Schema.Codec<ConfigManagementHierarchyControllerConfig> =
  /*@__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    enablePodTreeLabels: Schema.optional(Schema.Boolean),
    enableHierarchicalResourceQuota: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ConfigManagementHierarchyControllerConfig" });

export interface ConfigManagementMembershipSpec {
  /** Optional. Version of Config Sync to install. Defaults to the latest supported Config Sync version if the config_sync field is enabled. See supported versions at https://cloud.google.com/kubernetes-engine/config-sync/docs/get-support-config-sync#version_support_policy. */
  version?: string;
  /** Optional. User-specified cluster name used by the Config Sync cluster-name-selector annotation or ClusterSelector object, for applying configs to only a subset of clusters. Read more about the cluster-name-selector annotation and ClusterSelector object at https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects#limiting-configs. Only set this field if a name different from the cluster's fleet membership name is used by the Config Sync cluster-name-selector annotation or ClusterSelector. */
  cluster?: string;
  /** Optional. Deprecated: Binauthz configuration will be ignored and should not be set. */
  binauthz?: ConfigManagementBinauthzConfig;
  /** Optional. Config Sync configuration for the cluster. */
  configSync?: ConfigManagementConfigSync;
  /** Optional. Policy Controller configuration for the cluster. Deprecated: Configuring Policy Controller through the configmanagement feature is no longer recommended. Use the policycontroller feature instead. */
  policyController?: ConfigManagementPolicyController;
  /** Optional. Hierarchy Controller configuration for the cluster. Deprecated: Configuring Hierarchy Controller through the configmanagement feature is no longer recommended. Use https://github.com/kubernetes-sigs/hierarchical-namespaces instead. */
  hierarchyController?: ConfigManagementHierarchyControllerConfig;
  /** Optional. Deprecated: From version 1.21.0, automatic Feature management is unavailable, and Config Sync only supports manual upgrades. */
  management?:
    | "MANAGEMENT_UNSPECIFIED"
    | "MANAGEMENT_AUTOMATIC"
    | "MANAGEMENT_MANUAL"
    | (string & {});
}

export const ConfigManagementMembershipSpec: Schema.Codec<ConfigManagementMembershipSpec> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    cluster: Schema.optional(Schema.String),
    binauthz: Schema.optional(ConfigManagementBinauthzConfig),
    configSync: Schema.optional(ConfigManagementConfigSync),
    policyController: Schema.optional(ConfigManagementPolicyController),
    hierarchyController: Schema.optional(
      ConfigManagementHierarchyControllerConfig,
    ),
    management: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementMembershipSpec" });

export interface VersionUpgrade {
  /** Optional. Type of version upgrade specifies which component should be upgraded. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_CONTROL_PLANE"
    | "TYPE_NODE_POOL"
    | (string & {});
  /** Optional. Desired version of the component. */
  desiredVersion?: string;
}

export const VersionUpgrade: Schema.Codec<VersionUpgrade> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    desiredVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "VersionUpgrade" });

export interface ScopeLifecycleState {
  /** Output only. The current state of the scope resource. */
  code?:
    | "CODE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "DELETING"
    | "UPDATING"
    | (string & {});
}

export const ScopeLifecycleState: Schema.Codec<ScopeLifecycleState> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "ScopeLifecycleState" });

export interface Scope {
  /** Optional. Scope-level cluster namespace labels. For the member clusters bound to the Scope, these labels are applied to each namespace under the Scope. Scope-level labels take precedence over Namespace-level labels (`namespace_labels` in the Fleet Namespace resource) if they share a key. Keys and values must be Kubernetes-conformant. */
  namespaceLabels?: Record<string, string>;
  /** The resource name for the scope `projects/{project}/locations/{location}/scopes/{scope}` */
  name?: string;
  /** Output only. Google-generated UUID for this resource. This is unique across all scope resources. If a scope resource is deleted and another resource with the same name is created, it gets a different uid. */
  uid?: string;
  /** Optional. Labels for this Scope. */
  labels?: Record<string, string>;
  /** Output only. State of the scope resource. */
  state?: ScopeLifecycleState;
  /** Output only. When the scope was last updated. */
  updateTime?: string;
  /** Output only. When the scope was created. */
  createTime?: string;
  /** Output only. When the scope was deleted. */
  deleteTime?: string;
}

export const Scope: Schema.Codec<Scope> =
  /*@__PURE__*/ Schema.Struct({
    namespaceLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(ScopeLifecycleState),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Scope" });

export interface ListScopesResponse {
  /** The list of Scopes */
  scopes?: ReadonlyArray<Scope>;
  /** A token to request the next page of resources from the `ListScopes` method. The value of an empty string means that there are no more resources to return. */
  nextPageToken?: string;
}

export const ListScopesResponse: Schema.Codec<ListScopesResponse> =
  /*@__PURE__*/ Schema.Struct({
    scopes: Schema.optional(Schema.Array(Scope)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListScopesResponse" });

export interface GkeCluster {
  /** Immutable. Self-link of the Google Cloud resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported. */
  resourceLink?: string;
  /** Output only. If cluster_missing is set then it denotes that the GKE cluster no longer exists in the GKE Control Plane. */
  clusterMissing?: boolean;
}

export const GkeCluster: Schema.Codec<GkeCluster> =
  /*@__PURE__*/ Schema.Struct({
    resourceLink: Schema.optional(Schema.String),
    clusterMissing: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GkeCluster" });

export interface ConfigManagementHierarchyControllerDeploymentState {
  /** The deployment state for open source HNC (e.g. v0.7.0-hc.0) */
  hnc?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** The deployment state for Hierarchy Controller extension (e.g. v0.7.0-hc.1) */
  extension?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
}

export const ConfigManagementHierarchyControllerDeploymentState: Schema.Codec<ConfigManagementHierarchyControllerDeploymentState> =
  /*@__PURE__*/ Schema.Struct({
    hnc: Schema.optional(Schema.String),
    extension: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ConfigManagementHierarchyControllerDeploymentState",
  });

export interface TypeMeta {
  /** Kind of the resource (e.g. Deployment). */
  kind?: string;
  /** APIVersion of the resource (e.g. v1). */
  apiVersion?: string;
}

export const TypeMeta: Schema.Codec<TypeMeta> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "TypeMeta" });

export interface ConnectAgentResource {
  /** Kubernetes type of the resource. */
  type?: TypeMeta;
  /** YAML manifest of the resource. */
  manifest?: string;
}

export const ConnectAgentResource: Schema.Codec<ConnectAgentResource> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(TypeMeta),
    manifest: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectAgentResource" });

export interface GenerateConnectManifestResponse {
  /** The ordered list of Kubernetes resources that need to be applied to the cluster for GKE Connect agent installation/upgrade. */
  manifest?: ReadonlyArray<ConnectAgentResource>;
}

export const GenerateConnectManifestResponse: Schema.Codec<GenerateConnectManifestResponse> =
  /*@__PURE__*/ Schema.Struct({
    manifest: Schema.optional(Schema.Array(ConnectAgentResource)),
  }).annotate({ identifier: "GenerateConnectManifestResponse" });

export interface IdentityServiceUserConfig {
  /** Optional. Filter to apply when searching for the user. This can be used to further restrict the user accounts which are allowed to login. This defaults to "(objectClass=User)". */
  filter?: string;
  /** Required. The location of the subtree in the LDAP directory to search for user entries. */
  baseDn?: string;
  /** Optional. The name of the attribute which matches against the input username. This is used to find the user in the LDAP database e.g. "(=)" and is combined with the optional filter field. This defaults to "userPrincipalName". */
  loginAttribute?: string;
  /** Optional. Determines which attribute to use as the user's identity after they are authenticated. This is distinct from the loginAttribute field to allow users to login with a username, but then have their actual identifier be an email address or full Distinguished Name (DN). For example, setting loginAttribute to "sAMAccountName" and identifierAttribute to "userPrincipalName" would allow a user to login as "bsmith", but actual RBAC policies for the user would be written as "bsmith@example.com". Using "userPrincipalName" is recommended since this will be unique for each user. This defaults to "userPrincipalName". */
  idAttribute?: string;
}

export const IdentityServiceUserConfig: Schema.Codec<IdentityServiceUserConfig> =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    baseDn: Schema.optional(Schema.String),
    loginAttribute: Schema.optional(Schema.String),
    idAttribute: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceUserConfig" });

export interface WorkloadIdentityNamespaceStateDetail {
  /** The state of the IAM namespace. */
  code?:
    | "NAMESPACE_STATE_UNSPECIFIED"
    | "NAMESPACE_STATE_OK"
    | "NAMESPACE_STATE_ERROR"
    | (string & {});
  /** A human-readable description of the current state or returned error. */
  description?: string;
}

export const WorkloadIdentityNamespaceStateDetail: Schema.Codec<WorkloadIdentityNamespaceStateDetail> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkloadIdentityNamespaceStateDetail" });

export interface GoogleRpcStatus {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const GoogleRpcStatus: Schema.Codec<GoogleRpcStatus> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface ValidateExclusivityResponse {
  /** The validation result. * `OK` means that exclusivity is validated, assuming the manifest produced by GenerateExclusivityManifest is successfully applied. * `ALREADY_EXISTS` means that the Membership CRD is already owned by another Hub. See `status.message` for more information. */
  status?: GoogleRpcStatus;
}

export const ValidateExclusivityResponse: Schema.Codec<ValidateExclusivityResponse> =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "ValidateExclusivityResponse" });

export interface EdgeCluster {
  /** Immutable. Self-link of the Google Cloud resource for the Edge Cluster. For example: //edgecontainer.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster */
  resourceLink?: string;
}

export const EdgeCluster: Schema.Codec<EdgeCluster> =
  /*@__PURE__*/ Schema.Struct({
    resourceLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "EdgeCluster" });

export interface KubernetesMetadata {
  /** Output only. vCPU count as reported by Kubernetes nodes resources. */
  vcpuCount?: number;
  /** Output only. Node providerID as reported by the first node in the list of nodes on the Kubernetes endpoint. On Kubernetes platforms that support zero-node clusters (like GKE on Google Cloud), the node_count will be zero and the node_provider_id will be empty. */
  nodeProviderId?: string;
  /** Output only. Node count as reported by Kubernetes nodes resources. */
  nodeCount?: number;
  /** Output only. The time at which these details were last updated. This update_time is different from the Membership-level update_time since EndpointDetails are updated internally for API consumers. */
  updateTime?: string;
  /** Output only. Kubernetes API server version string as reported by `/version`. */
  kubernetesApiServerVersion?: string;
  /** Output only. The total memory capacity as reported by the sum of all Kubernetes nodes resources, defined in MB. */
  memoryMb?: number;
}

export const KubernetesMetadata: Schema.Codec<KubernetesMetadata> =
  /*@__PURE__*/ Schema.Struct({
    vcpuCount: Schema.optional(Schema.Number),
    nodeProviderId: Schema.optional(Schema.String),
    nodeCount: Schema.optional(Schema.Number),
    updateTime: Schema.optional(Schema.String),
    kubernetesApiServerVersion: Schema.optional(Schema.String),
    memoryMb: Schema.optional(Schema.Number),
  }).annotate({ identifier: "KubernetesMetadata" });

export interface ResourceManifest {
  /** Output only. YAML manifest of the resource. */
  manifest?: string;
  /** Output only. Whether the resource provided in the manifest is `cluster_scoped`. If unset, the manifest is assumed to be namespace scoped. This field is used for REST mapping when applying the resource in a cluster. */
  clusterScoped?: boolean;
}

export const ResourceManifest: Schema.Codec<ResourceManifest> =
  /*@__PURE__*/ Schema.Struct({
    manifest: Schema.optional(Schema.String),
    clusterScoped: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ResourceManifest" });

export interface ResourceOptions {
  /** Optional. The Connect agent version to use for connect_resources. Defaults to the latest GKE Connect version. The version must be a currently supported version, obsolete versions will be rejected. */
  connectVersion?: string;
  /** Optional. Git version of the Kubernetes cluster. This is only used to gate the Connect Agent migration to svc.id.goog on GDC-SO 1.33.100 patch and above. */
  k8sGitVersion?: string;
  /** Optional. Use `apiextensions/v1beta1` instead of `apiextensions/v1` for CustomResourceDefinition resources. This option should be set for clusters with Kubernetes apiserver versions <1.16. */
  v1beta1Crd?: boolean;
  /** Optional. Major and minor version of the Kubernetes cluster. This is only used to determine which version to use for the CustomResourceDefinition resources, `apiextensions/v1beta1` or`apiextensions/v1`. */
  k8sVersion?: string;
}

export const ResourceOptions: Schema.Codec<ResourceOptions> =
  /*@__PURE__*/ Schema.Struct({
    connectVersion: Schema.optional(Schema.String),
    k8sGitVersion: Schema.optional(Schema.String),
    v1beta1Crd: Schema.optional(Schema.Boolean),
    k8sVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceOptions" });

export interface KubernetesResource {
  /** Output only. Additional Kubernetes resources that need to be applied to the cluster after Membership creation, and after every update. This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask. */
  membershipResources?: ReadonlyArray<ResourceManifest>;
  /** Output only. The Kubernetes resources for installing the GKE Connect agent This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask. */
  connectResources?: ReadonlyArray<ResourceManifest>;
  /** Optional. Options for Kubernetes resource generation. */
  resourceOptions?: ResourceOptions;
  /** Input only. The YAML representation of the Membership CR. This field is ignored for GKE clusters where Hub can read the CR directly. Callers should provide the CR that is currently present in the cluster during CreateMembership or UpdateMembership, or leave this field empty if none exists. The CR manifest is used to validate the cluster has not been registered with another Membership. */
  membershipCrManifest?: string;
}

export const KubernetesResource: Schema.Codec<KubernetesResource> =
  /*@__PURE__*/ Schema.Struct({
    membershipResources: Schema.optional(Schema.Array(ResourceManifest)),
    connectResources: Schema.optional(Schema.Array(ResourceManifest)),
    resourceOptions: Schema.optional(ResourceOptions),
    membershipCrManifest: Schema.optional(Schema.String),
  }).annotate({ identifier: "KubernetesResource" });

export interface MultiCloudCluster {
  /** Immutable. Self-link of the Google Cloud resource for the GKE Multi-Cloud cluster. For example: //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/awsClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/azureClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/attachedClusters/my-cluster */
  resourceLink?: string;
  /** Output only. If cluster_missing is set then it denotes that API(gkemulticloud.googleapis.com) resource for this GKE Multi-Cloud cluster no longer exists. */
  clusterMissing?: boolean;
}

export const MultiCloudCluster: Schema.Codec<MultiCloudCluster> =
  /*@__PURE__*/ Schema.Struct({
    resourceLink: Schema.optional(Schema.String),
    clusterMissing: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MultiCloudCluster" });

export interface ApplianceCluster {
  /** Immutable. Self-link of the Google Cloud resource for the Appliance Cluster. For example: //transferappliance.googleapis.com/projects/my-project/locations/us-west1-a/appliances/my-appliance */
  resourceLink?: string;
}

export const ApplianceCluster: Schema.Codec<ApplianceCluster> =
  /*@__PURE__*/ Schema.Struct({
    resourceLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApplianceCluster" });

export interface OnPremCluster {
  /** Immutable. Whether the cluster is an admin cluster. */
  adminCluster?: boolean;
  /** Immutable. The on prem cluster's type. */
  clusterType?:
    | "CLUSTERTYPE_UNSPECIFIED"
    | "BOOTSTRAP"
    | "HYBRID"
    | "STANDALONE"
    | "USER"
    | (string & {});
  /** Immutable. Self-link of the Google Cloud resource for the GKE On-Prem cluster. For example: //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/vmwareClusters/my-cluster //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/bareMetalClusters/my-cluster */
  resourceLink?: string;
  /** Output only. If cluster_missing is set then it denotes that API(gkeonprem.googleapis.com) resource for this GKE On-Prem cluster no longer exists. */
  clusterMissing?: boolean;
}

export const OnPremCluster: Schema.Codec<OnPremCluster> =
  /*@__PURE__*/ Schema.Struct({
    adminCluster: Schema.optional(Schema.Boolean),
    clusterType: Schema.optional(Schema.String),
    resourceLink: Schema.optional(Schema.String),
    clusterMissing: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OnPremCluster" });

export interface MembershipEndpoint {
  /** Optional. Specific information for a Google Edge cluster. */
  edgeCluster?: EdgeCluster;
  /** Output only. Whether the lifecycle of this membership is managed by a google cluster platform service. */
  googleManaged?: boolean;
  /** Output only. Useful Kubernetes-specific metadata. */
  kubernetesMetadata?: KubernetesMetadata;
  /** Optional. The in-cluster Kubernetes Resources that should be applied for a correctly registered cluster, in the steady state. These resources: * Ensure that the cluster is exclusively registered to one and only one Hub Membership. * Propagate Workload Pool Information available in the Membership Authority field. * Ensure proper initial configuration of default Hub Features. */
  kubernetesResource?: KubernetesResource;
  /** Optional. Specific information for a GKE on Google Cloud cluster. */
  gkeCluster?: GkeCluster;
  /** Optional. Specific information for a GKE Multi-Cloud cluster. */
  multiCloudCluster?: MultiCloudCluster;
  /** Optional. Specific information for a GDC Edge Appliance cluster. */
  applianceCluster?: ApplianceCluster;
  /** Optional. Specific information for a GKE On-Prem cluster. An onprem user-cluster who has no resourceLink is not allowed to use this field, it should have a nil "type" instead. */
  onPremCluster?: OnPremCluster;
}

export const MembershipEndpoint: Schema.Codec<MembershipEndpoint> =
  /*@__PURE__*/ Schema.Struct({
    edgeCluster: Schema.optional(EdgeCluster),
    googleManaged: Schema.optional(Schema.Boolean),
    kubernetesMetadata: Schema.optional(KubernetesMetadata),
    kubernetesResource: Schema.optional(KubernetesResource),
    gkeCluster: Schema.optional(GkeCluster),
    multiCloudCluster: Schema.optional(MultiCloudCluster),
    applianceCluster: Schema.optional(ApplianceCluster),
    onPremCluster: Schema.optional(OnPremCluster),
  }).annotate({ identifier: "MembershipEndpoint" });

export interface IdentityServiceServerConfig {
  /** Optional. Contains a Base64 encoded, PEM formatted certificate authority certificate for the LDAP server. This must be provided for the "ldaps" and "startTLS" connections. */
  certificateAuthorityData?: string;
  /** Required. Defines the hostname or IP of the LDAP server. Port is optional and will default to 389, if unspecified. For example, "ldap.server.example" or "10.10.10.10:389". */
  host?: string;
  /** Optional. Defines the connection type to communicate with the LDAP server. If `starttls` or `ldaps` is specified, the certificate_authority_data should not be empty. */
  connectionType?: string;
}

export const IdentityServiceServerConfig: Schema.Codec<IdentityServiceServerConfig> =
  /*@__PURE__*/ Schema.Struct({
    certificateAuthorityData: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    connectionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceServerConfig" });

export interface ServiceMeshType {
  /** A human-readable name for the message type. e.g. "InternalError", "PodMissingProxy". This should be the same for all messages of the same type. (This corresponds to the `name` field in open-source Istio.) */
  displayName?: string;
  /** A 7 character code matching `^IST[0-9]{4}$` or `^ASM[0-9]{4}$`, intended to uniquely identify the message type. (e.g. "IST0001" is mapped to the "InternalError" message type.) */
  code?: string;
}

export const ServiceMeshType: Schema.Codec<ServiceMeshType> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshType" });

export interface ServiceMeshAnalysisMessageBase {
  /** Represents the specific type of a message. */
  type?: ServiceMeshType;
  /** Represents how severe a message is. */
  level?: "LEVEL_UNSPECIFIED" | "ERROR" | "WARNING" | "INFO" | (string & {});
  /** A url pointing to the Service Mesh or Istio documentation for this specific error type. */
  documentationUrl?: string;
}

export const ServiceMeshAnalysisMessageBase: Schema.Codec<ServiceMeshAnalysisMessageBase> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(ServiceMeshType),
    level: Schema.optional(Schema.String),
    documentationUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshAnalysisMessageBase" });

export interface PolicyControllerToleration {
  /** Matches a taint value. */
  value?: string;
  /** Matches a taint effect. */
  effect?: string;
  /** Matches a taint key (not necessarily unique). */
  key?: string;
  /** Matches a taint operator. */
  operator?: string;
}

export const PolicyControllerToleration: Schema.Codec<PolicyControllerToleration> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    effect: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    operator: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyControllerToleration" });

export interface IdentityServiceGroupConfig {
  /** Optional. The identifying name of each group a user belongs to. For example, if this is set to "distinguishedName" then RBACs and other group expectations should be written as full DNs. This defaults to "distinguishedName". */
  idAttribute?: string;
  /** Optional. Optional filter to be used when searching for groups a user belongs to. This can be used to explicitly match only certain groups in order to reduce the amount of groups returned for each user. This defaults to "(objectClass=Group)". */
  filter?: string;
  /** Required. The location of the subtree in the LDAP directory to search for group entries. */
  baseDn?: string;
}

export const IdentityServiceGroupConfig: Schema.Codec<IdentityServiceGroupConfig> =
  /*@__PURE__*/ Schema.Struct({
    idAttribute: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    baseDn: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceGroupConfig" });

export interface FeatureState {
  /** A human-readable description of the current status. */
  description?: string;
  /** The high-level, machine-readable status of this Feature. */
  code?: "CODE_UNSPECIFIED" | "OK" | "WARNING" | "ERROR" | (string & {});
  /** The time this status and any related Feature-specific details were updated. */
  updateTime?: string;
}

export const FeatureState: Schema.Codec<FeatureState> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "FeatureState" });

export interface ClusterUpgradeGKEUpgradeFeatureCondition {
  /** Type of the condition, for example, "ready". */
  type?: string;
  /** Last timestamp the condition was updated. */
  updateTime?: string;
  /** Status of the condition, one of True, False, Unknown. */
  status?: string;
  /** Reason why the feature is in this status. */
  reason?: string;
}

export const ClusterUpgradeGKEUpgradeFeatureCondition: Schema.Codec<ClusterUpgradeGKEUpgradeFeatureCondition> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterUpgradeGKEUpgradeFeatureCondition" });

export interface ClusterUpgradeGKEUpgradeFeatureState {
  /** Upgrade state. It will eventually replace `state`. */
  upgradeState?: ReadonlyArray<ClusterUpgradeGKEUpgradeState>;
  /** Current conditions of the feature. */
  conditions?: ReadonlyArray<ClusterUpgradeGKEUpgradeFeatureCondition>;
}

export const ClusterUpgradeGKEUpgradeFeatureState: Schema.Codec<ClusterUpgradeGKEUpgradeFeatureState> =
  /*@__PURE__*/ Schema.Struct({
    upgradeState: Schema.optional(Schema.Array(ClusterUpgradeGKEUpgradeState)),
    conditions: Schema.optional(
      Schema.Array(ClusterUpgradeGKEUpgradeFeatureCondition),
    ),
  }).annotate({ identifier: "ClusterUpgradeGKEUpgradeFeatureState" });

export interface ClusterUpgradeIgnoredMembership {
  /** Reason why the membership is ignored. */
  reason?: string;
  /** Time when the membership was first set to ignored. */
  ignoredTime?: string;
}

export const ClusterUpgradeIgnoredMembership: Schema.Codec<ClusterUpgradeIgnoredMembership> =
  /*@__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    ignoredTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterUpgradeIgnoredMembership" });

export interface ClusterUpgradeScopeState {
  /** Feature state for GKE clusters. */
  gkeState?: ClusterUpgradeGKEUpgradeFeatureState;
  /** This scopes whose upstream_scopes contain the current scope. The scope name should be in the form: `projects/{p}/locations/gloobal/scopes/{s}` Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature's project. */
  downstreamScopes?: ReadonlyArray<string>;
  /** A list of memberships ignored by the feature. For example, manually upgraded clusters can be ignored if they are newer than the default versions of its release channel. The membership resource is in the format: `projects/{p}/locations/{l}/membership/{m}`. */
  ignored?: Record<string, ClusterUpgradeIgnoredMembership>;
}

export const ClusterUpgradeScopeState: Schema.Codec<ClusterUpgradeScopeState> =
  /*@__PURE__*/ Schema.Struct({
    gkeState: Schema.optional(ClusterUpgradeGKEUpgradeFeatureState),
    downstreamScopes: Schema.optional(Schema.Array(Schema.String)),
    ignored: Schema.optional(
      Schema.Record(Schema.String, ClusterUpgradeIgnoredMembership),
    ),
  }).annotate({ identifier: "ClusterUpgradeScopeState" });

export interface ScopeFeatureState {
  /** Output only. The "running state" of the Feature in this Scope. */
  state?: FeatureState;
  /** State for the ClusterUpgrade feature at the scope level */
  clusterupgrade?: ClusterUpgradeScopeState;
}

export const ScopeFeatureState: Schema.Codec<ScopeFeatureState> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(FeatureState),
    clusterupgrade: Schema.optional(ClusterUpgradeScopeState),
  }).annotate({ identifier: "ScopeFeatureState" });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Location" });

export interface ComplianceStandard {
  /** Name of the compliance standard. */
  standard?: string;
}

export const ComplianceStandard: Schema.Codec<ComplianceStandard> =
  /*@__PURE__*/ Schema.Struct({
    standard: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComplianceStandard" });

export interface OperationMetadata {
  /** Output only. Human-readable status of the operation, if any. */
  statusDetail?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  cancelRequested?: boolean;
}

export const OperationMetadata: Schema.Codec<OperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    statusDetail: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    cancelRequested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OperationMetadata" });

export interface FleetLifecycleState {
  /** Output only. The current state of the Fleet resource. */
  code?:
    | "CODE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "DELETING"
    | "UPDATING"
    | (string & {});
}

export const FleetLifecycleState: Schema.Codec<FleetLifecycleState> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "FleetLifecycleState" });

export interface RolloutTarget {
  /** Optional. Output only. The resource link of the Cluster resource upgraded in this Rollout. It is formatted as: `//{api_service}/projects/{project_number}/locations/{location}/clusters/{cluster_name}`. . */
  cluster?: string;
  /** Optional. Output only. A human-readable description of the current status. */
  reason?: string;
  /** Optional. Output only. The resource link of the NodePool resource upgraded in this Rollout. It is formatted as: `//{api_service}/projects/{project_number}/locations/{location}/clusters/{cluster_name}/nodePools/{node_pool_name}`. */
  nodePool?: string;
  /** Output only. The high-level, machine-readable status of this Rollout for the target. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "FAILED"
    | "SUCCEEDED"
    | "PAUSED"
    | "REMOVED"
    | "INELIGIBLE"
    | "SKIPPED"
    | (string & {});
  /** Optional. Output only. The operation resource name performing the mutation. */
  operation?: string;
}

export const RolloutTarget: Schema.Codec<RolloutTarget> =
  /*@__PURE__*/ Schema.Struct({
    cluster: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    nodePool: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
  }).annotate({ identifier: "RolloutTarget" });

export interface RolloutMembershipState {
  /** Output only. The targets of the rollout - clusters or node pools that are being upgraded. All targets belongs to the same cluster, identified by the membership name (key of membership_states map). */
  targets?: ReadonlyArray<RolloutTarget>;
  /** Optional. Output only. The time this status and any related Rollout-specific details for the membership were updated. */
  lastUpdateTime?: string;
  /** Output only. The stage assignment of this cluster in this rollout. */
  stageAssignment?: number;
}

export const RolloutMembershipState: Schema.Codec<RolloutMembershipState> =
  /*@__PURE__*/ Schema.Struct({
    targets: Schema.optional(Schema.Array(RolloutTarget)),
    lastUpdateTime: Schema.optional(Schema.String),
    stageAssignment: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RolloutMembershipState" });

export interface PolicyControllerBundleInstallSpec {
  /** The set of namespaces to be exempted from the bundle. */
  exemptedNamespaces?: ReadonlyArray<string>;
}

export const PolicyControllerBundleInstallSpec: Schema.Codec<PolicyControllerBundleInstallSpec> =
  /*@__PURE__*/ Schema.Struct({
    exemptedNamespaces: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PolicyControllerBundleInstallSpec" });

export interface PolicyControllerTemplateLibraryConfig {
  /** Configures the manner in which the template library is installed on the cluster. */
  installation?:
    | "INSTALLATION_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "ALL"
    | (string & {});
}

export const PolicyControllerTemplateLibraryConfig: Schema.Codec<PolicyControllerTemplateLibraryConfig> =
  /*@__PURE__*/ Schema.Struct({
    installation: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyControllerTemplateLibraryConfig" });

export interface PolicyControllerPolicyContentSpec {
  /** map of bundle name to BundleInstallSpec. The bundle name maps to the `bundleName` key in the `policycontroller.gke.io/constraintData` annotation on a constraint. */
  bundles?: Record<string, PolicyControllerBundleInstallSpec>;
  /** Configures the installation of the Template Library. */
  templateLibrary?: PolicyControllerTemplateLibraryConfig;
}

export const PolicyControllerPolicyContentSpec: Schema.Codec<PolicyControllerPolicyContentSpec> =
  /*@__PURE__*/ Schema.Struct({
    bundles: Schema.optional(
      Schema.Record(Schema.String, PolicyControllerBundleInstallSpec),
    ),
    templateLibrary: Schema.optional(PolicyControllerTemplateLibraryConfig),
  }).annotate({ identifier: "PolicyControllerPolicyContentSpec" });

export interface PolicyControllerMonitoringConfig {
  /** Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export. */
  backends?: ReadonlyArray<
    | "MONITORING_BACKEND_UNSPECIFIED"
    | "PROMETHEUS"
    | "CLOUD_MONITORING"
    | (string & {})
  >;
}

export const PolicyControllerMonitoringConfig: Schema.Codec<PolicyControllerMonitoringConfig> =
  /*@__PURE__*/ Schema.Struct({
    backends: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PolicyControllerMonitoringConfig" });

export interface PolicyControllerResourceList {
  /** Memory requirement expressed in Kubernetes resource units. */
  memory?: string;
  /** CPU requirement expressed in Kubernetes resource units. */
  cpu?: string;
}

export const PolicyControllerResourceList: Schema.Codec<PolicyControllerResourceList> =
  /*@__PURE__*/ Schema.Struct({
    memory: Schema.optional(Schema.String),
    cpu: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyControllerResourceList" });

export interface PolicyControllerResourceRequirements {
  /** Limits describes the maximum amount of compute resources allowed for use by the running container. */
  limits?: PolicyControllerResourceList;
  /** Requests describes the amount of compute resources reserved for the container by the kube-scheduler. */
  requests?: PolicyControllerResourceList;
}

export const PolicyControllerResourceRequirements: Schema.Codec<PolicyControllerResourceRequirements> =
  /*@__PURE__*/ Schema.Struct({
    limits: Schema.optional(PolicyControllerResourceList),
    requests: Schema.optional(PolicyControllerResourceList),
  }).annotate({ identifier: "PolicyControllerResourceRequirements" });

export interface PolicyControllerPolicyControllerDeploymentConfig {
  /** Pod anti-affinity enablement. Deprecated: use `pod_affinity` instead. */
  podAntiAffinity?: boolean;
  /** Container resource requirements. */
  containerResources?: PolicyControllerResourceRequirements;
  /** Pod tolerations of node taints. */
  podTolerations?: ReadonlyArray<PolicyControllerToleration>;
  /** Pod affinity configuration. */
  podAffinity?:
    | "AFFINITY_UNSPECIFIED"
    | "NO_AFFINITY"
    | "ANTI_AFFINITY"
    | (string & {});
  /** Pod replica count. */
  replicaCount?: string;
}

export const PolicyControllerPolicyControllerDeploymentConfig: Schema.Codec<PolicyControllerPolicyControllerDeploymentConfig> =
  /*@__PURE__*/ Schema.Struct({
    podAntiAffinity: Schema.optional(Schema.Boolean),
    containerResources: Schema.optional(PolicyControllerResourceRequirements),
    podTolerations: Schema.optional(Schema.Array(PolicyControllerToleration)),
    podAffinity: Schema.optional(Schema.String),
    replicaCount: Schema.optional(Schema.String),
  }).annotate({
    identifier: "PolicyControllerPolicyControllerDeploymentConfig",
  });

export interface PolicyControllerHubConfig {
  /** The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster. */
  exemptableNamespaces?: ReadonlyArray<string>;
  /** The install_spec represents the intended state specified by the latest request that mutated install_spec in the feature spec, not the lifecycle state of the feature observed by the Hub feature controller that is reported in the feature state. */
  installSpec?:
    | "INSTALL_SPEC_UNSPECIFIED"
    | "INSTALL_SPEC_NOT_INSTALLED"
    | "INSTALL_SPEC_ENABLED"
    | "INSTALL_SPEC_SUSPENDED"
    | "INSTALL_SPEC_DETACHED"
    | (string & {});
  /** Specifies the desired policy content on the cluster */
  policyContent?: PolicyControllerPolicyContentSpec;
  /** The maximum number of audit violations to be stored in a constraint. If not set, the internal default (currently 20) will be used. */
  constraintViolationLimit?: string;
  /** Logs all denies and dry run failures. */
  logDeniesEnabled?: boolean;
  /** Monitoring specifies the configuration of monitoring. */
  monitoring?: PolicyControllerMonitoringConfig;
  /** Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. */
  auditIntervalSeconds?: string;
  /** Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. */
  referentialRulesEnabled?: boolean;
  /** Map of deployment configs to deployments ("admission", "audit", "mutation'). */
  deploymentConfigs?: Record<
    string,
    PolicyControllerPolicyControllerDeploymentConfig
  >;
  /** Enables the ability to mutate resources using Policy Controller. */
  mutationEnabled?: boolean;
}

export const PolicyControllerHubConfig: Schema.Codec<PolicyControllerHubConfig> =
  /*@__PURE__*/ Schema.Struct({
    exemptableNamespaces: Schema.optional(Schema.Array(Schema.String)),
    installSpec: Schema.optional(Schema.String),
    policyContent: Schema.optional(PolicyControllerPolicyContentSpec),
    constraintViolationLimit: Schema.optional(Schema.String),
    logDeniesEnabled: Schema.optional(Schema.Boolean),
    monitoring: Schema.optional(PolicyControllerMonitoringConfig),
    auditIntervalSeconds: Schema.optional(Schema.String),
    referentialRulesEnabled: Schema.optional(Schema.Boolean),
    deploymentConfigs: Schema.optional(
      Schema.Record(
        Schema.String,
        PolicyControllerPolicyControllerDeploymentConfig,
      ),
    ),
    mutationEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PolicyControllerHubConfig" });

export interface PolicyControllerMembershipSpec {
  /** Version of Policy Controller installed. */
  version?: string;
  /** Policy Controller configuration for the cluster. */
  policyControllerHubConfig?: PolicyControllerHubConfig;
}

export const PolicyControllerMembershipSpec: Schema.Codec<PolicyControllerMembershipSpec> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    policyControllerHubConfig: Schema.optional(PolicyControllerHubConfig),
  }).annotate({ identifier: "PolicyControllerMembershipSpec" });

export interface MembershipSpec {
  /** Specifies workload certificate management. */
  certificateManagement?:
    | "CERTIFICATE_MANAGEMENT_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | (string & {});
}

export const MembershipSpec: Schema.Codec<MembershipSpec> =
  /*@__PURE__*/ Schema.Struct({
    certificateManagement: Schema.optional(Schema.String),
  }).annotate({ identifier: "MembershipSpec" });

export interface Origin {
  /** Type specifies which type of origin is set. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "FLEET"
    | "FLEET_OUT_OF_SYNC"
    | "USER"
    | (string & {});
}

export const Origin: Schema.Codec<Origin> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Origin" });

export interface CloudBuildMembershipSpec {
  /** Version of the cloud build software on the cluster. */
  version?: string;
  /** Whether it is allowed to run the privileged builds on the cluster or not. */
  securityPolicy?:
    | "SECURITY_POLICY_UNSPECIFIED"
    | "NON_PRIVILEGED"
    | "PRIVILEGED"
    | (string & {});
}

export const CloudBuildMembershipSpec: Schema.Codec<CloudBuildMembershipSpec> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    securityPolicy: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudBuildMembershipSpec" });

export interface ServiceMeshMembershipSpec {
  /** Determines which release channel to use for default injection and service mesh APIs. */
  defaultChannel?:
    | "CHANNEL_UNSPECIFIED"
    | "RAPID"
    | "REGULAR"
    | "STABLE"
    | (string & {});
  /** Optional. Specifies the API that will be used for configuring the mesh workloads. */
  configApi?:
    | "CONFIG_API_UNSPECIFIED"
    | "CONFIG_API_ISTIO"
    | "CONFIG_API_GATEWAY"
    | (string & {});
  /** Deprecated: use `management` instead Enables automatic control plane management. */
  controlPlane?:
    | "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED"
    | "AUTOMATIC"
    | "MANUAL"
    | (string & {});
  /** Optional. Enables automatic Service Mesh management. */
  management?:
    | "MANAGEMENT_UNSPECIFIED"
    | "MANAGEMENT_AUTOMATIC"
    | "MANAGEMENT_MANUAL"
    | "MANAGEMENT_NOT_INSTALLED"
    | (string & {});
}

export const ServiceMeshMembershipSpec: Schema.Codec<ServiceMeshMembershipSpec> =
  /*@__PURE__*/ Schema.Struct({
    defaultChannel: Schema.optional(Schema.String),
    configApi: Schema.optional(Schema.String),
    controlPlane: Schema.optional(Schema.String),
    management: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshMembershipSpec" });

export interface NamespaceActuationMembershipSpec {}

export const NamespaceActuationMembershipSpec: Schema.Codec<NamespaceActuationMembershipSpec> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "NamespaceActuationMembershipSpec",
  });

export interface IdentityServiceOidcConfig {
  /** Comma-separated list of identifiers. */
  scopes?: string;
  /** PEM-encoded CA for OIDC provider. */
  certificateAuthorityData?: string;
  /** Claim in OIDC ID token that holds group information. */
  groupsClaim?: string;
  /** Claim in OIDC ID token that holds username. */
  userClaim?: string;
  /** Output only. Encrypted OIDC Client secret */
  encryptedClientSecret?: string;
  /** URI for the OIDC provider. This should point to the level below .well-known/openid-configuration. */
  issuerUri?: string;
  /** Registered redirect uri to redirect users going through OAuth flow using kubectl plugin. */
  kubectlRedirectUri?: string;
  /** Flag to denote if reverse proxy is used to connect to auth provider. This flag should be set to true when provider is not reachable by Google Cloud Console. */
  deployCloudConsoleProxy?: boolean;
  /** Prefix to prepend to group name. */
  groupPrefix?: string;
  /** Comma-separated list of key-value pairs. */
  extraParams?: string;
  /** Input only. Unencrypted OIDC client secret will be passed to the GKE Hub CLH. */
  clientSecret?: string;
  /** ID for OIDC client application. */
  clientId?: string;
  /** Enable access token. */
  enableAccessToken?: boolean;
  /** Prefix to prepend to user name. */
  userPrefix?: string;
}

export const IdentityServiceOidcConfig: Schema.Codec<IdentityServiceOidcConfig> =
  /*@__PURE__*/ Schema.Struct({
    scopes: Schema.optional(Schema.String),
    certificateAuthorityData: Schema.optional(Schema.String),
    groupsClaim: Schema.optional(Schema.String),
    userClaim: Schema.optional(Schema.String),
    encryptedClientSecret: Schema.optional(Schema.String),
    issuerUri: Schema.optional(Schema.String),
    kubectlRedirectUri: Schema.optional(Schema.String),
    deployCloudConsoleProxy: Schema.optional(Schema.Boolean),
    groupPrefix: Schema.optional(Schema.String),
    extraParams: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    enableAccessToken: Schema.optional(Schema.Boolean),
    userPrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceOidcConfig" });

export interface IdentityServiceAzureADConfig {
  /** Kind of Azure AD account to be authenticated. Supported values are or for accounts belonging to a specific tenant. */
  tenant?: string;
  /** Optional. Claim in the AzureAD ID Token that holds the user details. */
  userClaim?: string;
  /** Input only. Unencrypted AzureAD client secret will be passed to the GKE Hub CLH. */
  clientSecret?: string;
  /** ID for the registered client application that makes authentication requests to the Azure AD identity provider. */
  clientId?: string;
  /** Output only. Encrypted AzureAD client secret. */
  encryptedClientSecret?: string;
  /** The redirect URL that kubectl uses for authorization. */
  kubectlRedirectUri?: string;
  /** Optional. Format of the AzureAD groups that the client wants for auth. */
  groupFormat?: string;
}

export const IdentityServiceAzureADConfig: Schema.Codec<IdentityServiceAzureADConfig> =
  /*@__PURE__*/ Schema.Struct({
    tenant: Schema.optional(Schema.String),
    userClaim: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    encryptedClientSecret: Schema.optional(Schema.String),
    kubectlRedirectUri: Schema.optional(Schema.String),
    groupFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceAzureADConfig" });

export interface IdentityServiceServiceAccountConfig {
  /** Credentials for basic auth. */
  simpleBindCredentials?: IdentityServiceSimpleBindCredentials;
}

export const IdentityServiceServiceAccountConfig: Schema.Codec<IdentityServiceServiceAccountConfig> =
  /*@__PURE__*/ Schema.Struct({
    simpleBindCredentials: Schema.optional(
      IdentityServiceSimpleBindCredentials,
    ),
  }).annotate({ identifier: "IdentityServiceServiceAccountConfig" });

export interface IdentityServiceLdapConfig {
  /** Optional. Contains the properties for locating and authenticating groups in the directory. */
  group?: IdentityServiceGroupConfig;
  /** Required. Server settings for the external LDAP server. */
  server?: IdentityServiceServerConfig;
  /** Required. Contains the credentials of the service account which is authorized to perform the LDAP search in the directory. The credentials can be supplied by the combination of the DN and password or the client certificate. */
  serviceAccount?: IdentityServiceServiceAccountConfig;
  /** Required. Defines where users exist in the LDAP directory. */
  user?: IdentityServiceUserConfig;
}

export const IdentityServiceLdapConfig: Schema.Codec<IdentityServiceLdapConfig> =
  /*@__PURE__*/ Schema.Struct({
    group: Schema.optional(IdentityServiceGroupConfig),
    server: Schema.optional(IdentityServiceServerConfig),
    serviceAccount: Schema.optional(IdentityServiceServiceAccountConfig),
    user: Schema.optional(IdentityServiceUserConfig),
  }).annotate({ identifier: "IdentityServiceLdapConfig" });

export interface IdentityServiceGoogleConfig {
  /** Disable automatic configuration of Google Plugin on supported platforms. */
  disable?: boolean;
}

export const IdentityServiceGoogleConfig: Schema.Codec<IdentityServiceGoogleConfig> =
  /*@__PURE__*/ Schema.Struct({
    disable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "IdentityServiceGoogleConfig" });

export interface IdentityServiceSamlConfig {
  /** Optional. The SAML attribute to read groups from. This value is expected to be a string and will be passed along as-is (with the option of being prefixed by the `group_prefix`). */
  groupsAttribute?: string;
  /** Required. The URI where the SAML IdP exposes the SSO service. */
  identityProviderSsoUri?: string;
  /** Optional. The SAML attribute to read username from. If unspecified, the username will be read from the NameID element of the assertion in SAML response. This value is expected to be a string and will be passed along as-is (with the option of being prefixed by the `user_prefix`). */
  userAttribute?: string;
  /** Required. The entity ID of the SAML IdP. */
  identityProviderId?: string;
  /** Required. The list of IdP certificates to validate the SAML response against. */
  identityProviderCertificates?: ReadonlyArray<string>;
  /** Optional. The mapping of additional user attributes like nickname, birthday and address etc.. `key` is the name of this additional attribute. `value` is a string presenting as CEL(common expression language, go/cel) used for getting the value from the resources. Take nickname as an example, in this case, `key` is "attribute.nickname" and `value` is "assertion.nickname". */
  attributeMapping?: Record<string, string>;
  /** Optional. Prefix to prepend to user name. */
  userPrefix?: string;
  /** Optional. Prefix to prepend to group name. */
  groupPrefix?: string;
}

export const IdentityServiceSamlConfig: Schema.Codec<IdentityServiceSamlConfig> =
  /*@__PURE__*/ Schema.Struct({
    groupsAttribute: Schema.optional(Schema.String),
    identityProviderSsoUri: Schema.optional(Schema.String),
    userAttribute: Schema.optional(Schema.String),
    identityProviderId: Schema.optional(Schema.String),
    identityProviderCertificates: Schema.optional(Schema.Array(Schema.String)),
    attributeMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    userPrefix: Schema.optional(Schema.String),
    groupPrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceSamlConfig" });

export interface IdentityServiceAuthMethod {
  /** Proxy server address to use for auth method. */
  proxy?: string;
  /** OIDC specific configuration. */
  oidcConfig?: IdentityServiceOidcConfig;
  /** AzureAD specific Configuration. */
  azureadConfig?: IdentityServiceAzureADConfig;
  /** LDAP specific configuration. */
  ldapConfig?: IdentityServiceLdapConfig;
  /** GoogleConfig specific configuration. */
  googleConfig?: IdentityServiceGoogleConfig;
  /** SAML specific configuration. */
  samlConfig?: IdentityServiceSamlConfig;
  /** Identifier for auth config. */
  name?: string;
}

export const IdentityServiceAuthMethod: Schema.Codec<IdentityServiceAuthMethod> =
  /*@__PURE__*/ Schema.Struct({
    proxy: Schema.optional(Schema.String),
    oidcConfig: Schema.optional(IdentityServiceOidcConfig),
    azureadConfig: Schema.optional(IdentityServiceAzureADConfig),
    ldapConfig: Schema.optional(IdentityServiceLdapConfig),
    googleConfig: Schema.optional(IdentityServiceGoogleConfig),
    samlConfig: Schema.optional(IdentityServiceSamlConfig),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceAuthMethod" });

export interface IdentityServiceDiagnosticInterface {
  /** Determines the expiration time of the diagnostic interface enablement. When reached, requests to the interface would be automatically rejected. */
  expirationTime?: string;
  /** Determines whether to enable the diagnostic interface. */
  enabled?: boolean;
}

export const IdentityServiceDiagnosticInterface: Schema.Codec<IdentityServiceDiagnosticInterface> =
  /*@__PURE__*/ Schema.Struct({
    expirationTime: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "IdentityServiceDiagnosticInterface" });

export interface IdentityServiceIdentityServiceOptions {
  /** Configuration options for the AIS diagnostic interface. */
  diagnosticInterface?: IdentityServiceDiagnosticInterface;
  /** Determines the lifespan of STS tokens issued by Anthos Identity Service. */
  sessionDuration?: string;
}

export const IdentityServiceIdentityServiceOptions: Schema.Codec<IdentityServiceIdentityServiceOptions> =
  /*@__PURE__*/ Schema.Struct({
    diagnosticInterface: Schema.optional(IdentityServiceDiagnosticInterface),
    sessionDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceIdentityServiceOptions" });

export interface IdentityServiceMembershipSpec {
  /** A member may support multiple auth methods. */
  authMethods?: ReadonlyArray<IdentityServiceAuthMethod>;
  /** Optional. non-protocol-related configuration options. */
  identityServiceOptions?: IdentityServiceIdentityServiceOptions;
}

export const IdentityServiceMembershipSpec: Schema.Codec<IdentityServiceMembershipSpec> =
  /*@__PURE__*/ Schema.Struct({
    authMethods: Schema.optional(Schema.Array(IdentityServiceAuthMethod)),
    identityServiceOptions: Schema.optional(
      IdentityServiceIdentityServiceOptions,
    ),
  }).annotate({ identifier: "IdentityServiceMembershipSpec" });

export interface MembershipFeatureSpec {
  /** Policy Controller spec. */
  policycontroller?: PolicyControllerMembershipSpec;
  /** Workload Certificate spec. */
  workloadcertificate?: MembershipSpec;
  /** Whether this per-Membership spec was inherited from a fleet-level default. This field can be updated by users by either overriding a Membership config (updated to USER implicitly) or setting to FLEET explicitly. */
  origin?: Origin;
  /** Config Management-specific spec. */
  configmanagement?: ConfigManagementMembershipSpec;
  /** Cloud Build-specific spec */
  cloudbuild?: CloudBuildMembershipSpec;
  /** Anthos Service Mesh-specific spec */
  mesh?: ServiceMeshMembershipSpec;
  /** FNS Actuation membership spec */
  namespaceactuation?: NamespaceActuationMembershipSpec;
  /** Identity Service-specific spec. */
  identityservice?: IdentityServiceMembershipSpec;
  /** Fleet observability membership spec */
  fleetobservability?: FleetObservabilityMembershipSpec;
}

export const MembershipFeatureSpec: Schema.Codec<MembershipFeatureSpec> =
  /*@__PURE__*/ Schema.Struct({
    policycontroller: Schema.optional(PolicyControllerMembershipSpec),
    workloadcertificate: Schema.optional(MembershipSpec),
    origin: Schema.optional(Origin),
    configmanagement: Schema.optional(ConfigManagementMembershipSpec),
    cloudbuild: Schema.optional(CloudBuildMembershipSpec),
    mesh: Schema.optional(ServiceMeshMembershipSpec),
    namespaceactuation: Schema.optional(NamespaceActuationMembershipSpec),
    identityservice: Schema.optional(IdentityServiceMembershipSpec),
    fleetobservability: Schema.optional(FleetObservabilityMembershipSpec),
  }).annotate({ identifier: "MembershipFeatureSpec" });

export interface ClusterUpgradeFleetState {
  /** This fleets whose upstream_fleets contain the current fleet. The fleet name should be either fleet project number or id. */
  downstreamFleets?: ReadonlyArray<string>;
  /** Feature state for GKE clusters. */
  gkeState?: ClusterUpgradeGKEUpgradeFeatureState;
  /** A list of memberships ignored by the feature. For example, manually upgraded clusters can be ignored if they are newer than the default versions of its release channel. The membership resource is in the format: `projects/{p}/locations/{l}/membership/{m}`. */
  ignored?: Record<string, ClusterUpgradeIgnoredMembership>;
}

export const ClusterUpgradeFleetState: Schema.Codec<ClusterUpgradeFleetState> =
  /*@__PURE__*/ Schema.Struct({
    downstreamFleets: Schema.optional(Schema.Array(Schema.String)),
    gkeState: Schema.optional(ClusterUpgradeGKEUpgradeFeatureState),
    ignored: Schema.optional(
      Schema.Record(Schema.String, ClusterUpgradeIgnoredMembership),
    ),
  }).annotate({ identifier: "ClusterUpgradeFleetState" });

export interface NamespaceActuationFeatureState {}

export const NamespaceActuationFeatureState: Schema.Codec<NamespaceActuationFeatureState> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "NamespaceActuationFeatureState",
  });

export interface RBACRoleBindingActuationFeatureState {}

export const RBACRoleBindingActuationFeatureState: Schema.Codec<RBACRoleBindingActuationFeatureState> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RBACRoleBindingActuationFeatureState",
  });

export interface WorkloadIdentityWorkloadIdentityPoolStateDetail {
  /** A human-readable description of the current state or returned error. */
  description?: string;
  /** The state of the Workload Identity Pool. */
  code?:
    | "WORKLOAD_IDENTITY_POOL_STATE_UNSPECIFIED"
    | "WORKLOAD_IDENTITY_POOL_STATE_OK"
    | "WORKLOAD_IDENTITY_POOL_STATE_ERROR"
    | (string & {});
}

export const WorkloadIdentityWorkloadIdentityPoolStateDetail: Schema.Codec<WorkloadIdentityWorkloadIdentityPoolStateDetail> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  }).annotate({
    identifier: "WorkloadIdentityWorkloadIdentityPoolStateDetail",
  });

export interface WorkloadIdentityFeatureState {
  /** The full name of the scope-tenancy pool for the fleet. */
  scopeTenancyWorkloadIdentityPool?: string;
  /** The full name of the svc.id.goog pool for the fleet. */
  workloadIdentityPool?: string;
  /** Deprecated, this field will be erased after code is changed to use the new field. */
  namespaceStates?: Record<
    string,
    | "NAMESPACE_STATE_UNSPECIFIED"
    | "NAMESPACE_STATE_OK"
    | "NAMESPACE_STATE_ERROR"
    | (string & {})
  >;
  /** The state of the IAM namespaces for the fleet. */
  namespaceStateDetails?: Record<string, WorkloadIdentityNamespaceStateDetail>;
  /** The state of the Workload Identity Pools for the fleet. */
  workloadIdentityPoolStateDetails?: Record<
    string,
    WorkloadIdentityWorkloadIdentityPoolStateDetail
  >;
}

export const WorkloadIdentityFeatureState: Schema.Codec<WorkloadIdentityFeatureState> =
  /*@__PURE__*/ Schema.Struct({
    scopeTenancyWorkloadIdentityPool: Schema.optional(Schema.String),
    workloadIdentityPool: Schema.optional(Schema.String),
    namespaceStates: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    namespaceStateDetails: Schema.optional(
      Schema.Record(Schema.String, WorkloadIdentityNamespaceStateDetail),
    ),
    workloadIdentityPoolStateDetails: Schema.optional(
      Schema.Record(
        Schema.String,
        WorkloadIdentityWorkloadIdentityPoolStateDetail,
      ),
    ),
  }).annotate({ identifier: "WorkloadIdentityFeatureState" });

export interface Status {
  /** Description is populated if Code is Failed, explaining why it has failed. */
  description?: string;
  /** Code specifies AppDevExperienceFeature's subcomponent ready state. */
  code?: "CODE_UNSPECIFIED" | "OK" | "FAILED" | "UNKNOWN" | (string & {});
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface AppDevExperienceFeatureState {
  /** Status of subcomponent that detects configured Service Mesh resources. */
  networkingInstallSucceeded?: Status;
}

export const AppDevExperienceFeatureState: Schema.Codec<AppDevExperienceFeatureState> =
  /*@__PURE__*/ Schema.Struct({
    networkingInstallSucceeded: Schema.optional(Status),
  }).annotate({ identifier: "AppDevExperienceFeatureState" });

export interface FleetObservabilityFeatureError {
  /** A human-readable description of the current status. */
  description?: string;
  /** The code of the error. */
  code?: string;
}

export const FleetObservabilityFeatureError: Schema.Codec<FleetObservabilityFeatureError> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "FleetObservabilityFeatureError" });

export interface FleetObservabilityFleetObservabilityBaseFeatureState {
  /** The high-level, machine-readable status of this Feature. */
  code?: "CODE_UNSPECIFIED" | "OK" | "ERROR" | (string & {});
  /** Errors after reconciling the monitoring and logging feature if the code is not OK. */
  errors?: ReadonlyArray<FleetObservabilityFeatureError>;
}

export const FleetObservabilityFleetObservabilityBaseFeatureState: Schema.Codec<FleetObservabilityFleetObservabilityBaseFeatureState> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(FleetObservabilityFeatureError)),
  }).annotate({
    identifier: "FleetObservabilityFleetObservabilityBaseFeatureState",
  });

export interface FleetObservabilityFleetObservabilityLoggingState {
  /** The base feature state of fleet default log. */
  defaultLog?: FleetObservabilityFleetObservabilityBaseFeatureState;
  /** The base feature state of fleet scope log. */
  scopeLog?: FleetObservabilityFleetObservabilityBaseFeatureState;
}

export const FleetObservabilityFleetObservabilityLoggingState: Schema.Codec<FleetObservabilityFleetObservabilityLoggingState> =
  /*@__PURE__*/ Schema.Struct({
    defaultLog: Schema.optional(
      FleetObservabilityFleetObservabilityBaseFeatureState,
    ),
    scopeLog: Schema.optional(
      FleetObservabilityFleetObservabilityBaseFeatureState,
    ),
  }).annotate({
    identifier: "FleetObservabilityFleetObservabilityLoggingState",
  });

export interface FleetObservabilityFleetObservabilityMonitoringState {
  /** The base feature state of fleet monitoring feature. */
  state?: FleetObservabilityFleetObservabilityBaseFeatureState;
}

export const FleetObservabilityFleetObservabilityMonitoringState: Schema.Codec<FleetObservabilityFleetObservabilityMonitoringState> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(
      FleetObservabilityFleetObservabilityBaseFeatureState,
    ),
  }).annotate({
    identifier: "FleetObservabilityFleetObservabilityMonitoringState",
  });

export interface FleetObservabilityFeatureState {
  /** The feature state of default logging. */
  logging?: FleetObservabilityFleetObservabilityLoggingState;
  /** The feature state of fleet monitoring. */
  monitoring?: FleetObservabilityFleetObservabilityMonitoringState;
}

export const FleetObservabilityFeatureState: Schema.Codec<FleetObservabilityFeatureState> =
  /*@__PURE__*/ Schema.Struct({
    logging: Schema.optional(FleetObservabilityFleetObservabilityLoggingState),
    monitoring: Schema.optional(
      FleetObservabilityFleetObservabilityMonitoringState,
    ),
  }).annotate({ identifier: "FleetObservabilityFeatureState" });

export interface ServiceMeshAnalysisMessage {
  /** A human readable description of what the error means. It is suitable for non-internationalize display purposes. */
  description?: string;
  /** A UI can combine these args with a template (based on message_base.type) to produce an internationalized message. */
  args?: Record<string, unknown>;
  /** A list of strings specifying the resource identifiers that were the cause of message generation. A "path" here may be: * MEMBERSHIP_ID if the cause is a specific member cluster * MEMBERSHIP_ID/(NAMESPACE\/)?RESOURCETYPE/NAME if the cause is a resource in a cluster */
  resourcePaths?: ReadonlyArray<string>;
  /** Details common to all types of Istio and ServiceMesh analysis messages. */
  messageBase?: ServiceMeshAnalysisMessageBase;
}

export const ServiceMeshAnalysisMessage: Schema.Codec<ServiceMeshAnalysisMessage> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    resourcePaths: Schema.optional(Schema.Array(Schema.String)),
    messageBase: Schema.optional(ServiceMeshAnalysisMessageBase),
  }).annotate({ identifier: "ServiceMeshAnalysisMessage" });

export interface ServiceMeshFeatureCondition {
  /** Links contains actionable information. */
  documentationLink?: string;
  /** A short summary about the issue. */
  details?: string;
  /** Unique identifier of the condition which describes the condition recognizable to the user. */
  code?:
    | "CODE_UNSPECIFIED"
    | "MESH_IAM_PERMISSION_DENIED"
    | "MESH_IAM_CROSS_PROJECT_PERMISSION_DENIED"
    | "CNI_CONFIG_UNSUPPORTED"
    | "GKE_SANDBOX_UNSUPPORTED"
    | "NODEPOOL_WORKLOAD_IDENTITY_FEDERATION_REQUIRED"
    | "CNI_INSTALLATION_FAILED"
    | "CNI_POD_UNSCHEDULABLE"
    | "CLUSTER_HAS_ZERO_NODES"
    | "CANONICAL_SERVICE_ERROR"
    | "UNSUPPORTED_MULTIPLE_CONTROL_PLANES"
    | "VPCSC_GA_SUPPORTED"
    | "DEPRECATED_SPEC_CONTROL_PLANE_MANAGEMENT"
    | "DEPRECATED_SPEC_CONTROL_PLANE_MANAGEMENT_SAFE"
    | "CONFIG_APPLY_INTERNAL_ERROR"
    | "CONFIG_VALIDATION_ERROR"
    | "CONFIG_VALIDATION_WARNING"
    | "QUOTA_EXCEEDED_BACKEND_SERVICES"
    | "QUOTA_EXCEEDED_HEALTH_CHECKS"
    | "QUOTA_EXCEEDED_HTTP_ROUTES"
    | "QUOTA_EXCEEDED_TCP_ROUTES"
    | "QUOTA_EXCEEDED_TLS_ROUTES"
    | "QUOTA_EXCEEDED_TRAFFIC_POLICIES"
    | "QUOTA_EXCEEDED_ENDPOINT_POLICIES"
    | "QUOTA_EXCEEDED_GATEWAYS"
    | "QUOTA_EXCEEDED_MESHES"
    | "QUOTA_EXCEEDED_SERVER_TLS_POLICIES"
    | "QUOTA_EXCEEDED_CLIENT_TLS_POLICIES"
    | "QUOTA_EXCEEDED_SERVICE_LB_POLICIES"
    | "QUOTA_EXCEEDED_HTTP_FILTERS"
    | "QUOTA_EXCEEDED_TCP_FILTERS"
    | "QUOTA_EXCEEDED_NETWORK_ENDPOINT_GROUPS"
    | "CONFIG_APPLY_BLOCKED"
    | "LEGACY_MC_SECRETS"
    | "WORKLOAD_IDENTITY_REQUIRED"
    | "NON_STANDARD_BINARY_USAGE"
    | "UNSUPPORTED_GATEWAY_CLASS"
    | "MANAGED_CNI_NOT_ENABLED"
    | "MISSING_CONTROL_PLANE_CONFIG"
    | "SHARED_VPC_MISSING_PERMISSIONS"
    | "REQUIRED_ORG_POLICY_DISABLED"
    | "MODERNIZATION_INCOMPATIBLE_POD_ANNOTATION"
    | "MODERNIZATION_INCOMPATIBLE_CONFIG"
    | "MODERNIZATION_INCOMPATIBLE_GATEWAY_POD_SCALE"
    | "MODERNIZATION_SCHEDULED"
    | "MODERNIZATION_IN_PROGRESS"
    | "MODERNIZATION_COMPLETED"
    | "MODERNIZATION_ABORTED"
    | "MODERNIZATION_PREPARING"
    | "MODERNIZATION_STALLED"
    | "MODERNIZATION_PREPARED"
    | "MODERNIZATION_MIGRATING_WORKLOADS"
    | "MODERNIZATION_ROLLING_BACK_CLUSTER"
    | "MODERNIZATION_WILL_BE_SCHEDULED"
    | "MODERNIZATION_MANUAL"
    | "MODERNIZATION_ELIGIBLE"
    | "MODERNIZATION_MODERNIZING"
    | "MODERNIZATION_MODERNIZED_SOAKING"
    | "MODERNIZATION_FINALIZED"
    | "MODERNIZATION_ROLLING_BACK_FLEET"
    | "MODERNIZATION_COMPATIBLE"
    | "MODERNIZATION_INCOMPATIBLE"
    | "MODERNIZATION_INCOMPATIBLE_FLEET_SCALE"
    | "MODERNIZATION_INCOMPATIBLE_FLEET_QUOTA"
    | (string & {});
  /** Severity level of the condition. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "ERROR"
    | "WARNING"
    | "INFO"
    | (string & {});
}

export const ServiceMeshFeatureCondition: Schema.Codec<ServiceMeshFeatureCondition> =
  /*@__PURE__*/ Schema.Struct({
    documentationLink: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshFeatureCondition" });

export interface ServiceMeshFeatureState {
  /** Output only. Results of running Service Mesh analyzers. */
  analysisMessages?: ReadonlyArray<ServiceMeshAnalysisMessage>;
  /** Output only. List of conditions reported for this feature. */
  conditions?: ReadonlyArray<ServiceMeshFeatureCondition>;
}

export const ServiceMeshFeatureState: Schema.Codec<ServiceMeshFeatureState> =
  /*@__PURE__*/ Schema.Struct({
    analysisMessages: Schema.optional(Schema.Array(ServiceMeshAnalysisMessage)),
    conditions: Schema.optional(Schema.Array(ServiceMeshFeatureCondition)),
  }).annotate({ identifier: "ServiceMeshFeatureState" });

export interface CommonFeatureState {
  /** ClusterUpgrade fleet-level state. */
  clusterupgrade?: ClusterUpgradeFleetState;
  /** Namespace Actuation feature state. */
  namespaceactuation?: NamespaceActuationFeatureState;
  /** RBAC Role Binding Actuation feature state */
  rbacrolebindingactuation?: RBACRoleBindingActuationFeatureState;
  /** WorkloadIdentity fleet-level state. */
  workloadidentity?: WorkloadIdentityFeatureState;
  /** Appdevexperience specific state. */
  appdevexperience?: AppDevExperienceFeatureState;
  /** FleetObservability feature state. */
  fleetobservability?: FleetObservabilityFeatureState;
  /** Service Mesh-specific state. */
  servicemesh?: ServiceMeshFeatureState;
  /** Output only. The "running state" of the Feature in this Fleet. */
  state?: FeatureState;
}

export const CommonFeatureState: Schema.Codec<CommonFeatureState> =
  /*@__PURE__*/ Schema.Struct({
    clusterupgrade: Schema.optional(ClusterUpgradeFleetState),
    namespaceactuation: Schema.optional(NamespaceActuationFeatureState),
    rbacrolebindingactuation: Schema.optional(
      RBACRoleBindingActuationFeatureState,
    ),
    workloadidentity: Schema.optional(WorkloadIdentityFeatureState),
    appdevexperience: Schema.optional(AppDevExperienceFeatureState),
    fleetobservability: Schema.optional(FleetObservabilityFeatureState),
    servicemesh: Schema.optional(ServiceMeshFeatureState),
    state: Schema.optional(FeatureState),
  }).annotate({ identifier: "CommonFeatureState" });

export interface ConfigManagementGatekeeperDeploymentState {
  /** Status of gatekeeper-controller-manager pod. */
  gatekeeperControllerManagerState?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Status of gatekeeper-audit deployment. */
  gatekeeperAudit?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Status of the pod serving the mutation webhook. */
  gatekeeperMutation?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
}

export const ConfigManagementGatekeeperDeploymentState: Schema.Codec<ConfigManagementGatekeeperDeploymentState> =
  /*@__PURE__*/ Schema.Struct({
    gatekeeperControllerManagerState: Schema.optional(Schema.String),
    gatekeeperAudit: Schema.optional(Schema.String),
    gatekeeperMutation: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementGatekeeperDeploymentState" });

export interface ConfigManagementHierarchyControllerVersion {
  /** Version for open source HNC */
  hnc?: string;
  /** Version for Hierarchy Controller extension */
  extension?: string;
}

export const ConfigManagementHierarchyControllerVersion: Schema.Codec<ConfigManagementHierarchyControllerVersion> =
  /*@__PURE__*/ Schema.Struct({
    hnc: Schema.optional(Schema.String),
    extension: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementHierarchyControllerVersion" });

export interface ConfigManagementHierarchyControllerState {
  /** The deployment state for Hierarchy Controller */
  state?: ConfigManagementHierarchyControllerDeploymentState;
  /** The version for Hierarchy Controller */
  version?: ConfigManagementHierarchyControllerVersion;
}

export const ConfigManagementHierarchyControllerState: Schema.Codec<ConfigManagementHierarchyControllerState> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(ConfigManagementHierarchyControllerDeploymentState),
    version: Schema.optional(ConfigManagementHierarchyControllerVersion),
  }).annotate({ identifier: "ConfigManagementHierarchyControllerState" });

export interface ConfigManagementErrorResource {
  /** Metadata name of the resource that is causing an error */
  resourceName?: string;
  /** Group/version/kind of the resource that is causing an error */
  resourceGvk?: ConfigManagementGroupVersionKind;
  /** Path in the git repo of the erroneous config */
  sourcePath?: string;
  /** Namespace of the resource that is causing an error */
  resourceNamespace?: string;
}

export const ConfigManagementErrorResource: Schema.Codec<ConfigManagementErrorResource> =
  /*@__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    resourceGvk: Schema.optional(ConfigManagementGroupVersionKind),
    sourcePath: Schema.optional(Schema.String),
    resourceNamespace: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementErrorResource" });

export interface ConfigManagementSyncError {
  /** An ACM defined error code */
  code?: string;
  /** A description of the error */
  errorMessage?: string;
  /** A list of config(s) associated with the error, if any */
  errorResources?: ReadonlyArray<ConfigManagementErrorResource>;
}

export const ConfigManagementSyncError: Schema.Codec<ConfigManagementSyncError> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    errorResources: Schema.optional(
      Schema.Array(ConfigManagementErrorResource),
    ),
  }).annotate({ identifier: "ConfigManagementSyncError" });

export interface ConfigManagementSyncState {
  /** Token indicating the state of the importer. */
  importToken?: string;
  /** Timestamp type of when ACM last successfully synced the repo */
  lastSyncTime?: string;
  /** Sync status code */
  code?:
    | "SYNC_CODE_UNSPECIFIED"
    | "SYNCED"
    | "PENDING"
    | "ERROR"
    | "NOT_CONFIGURED"
    | "NOT_INSTALLED"
    | "UNAUTHORIZED"
    | "UNREACHABLE"
    | (string & {});
  /** A list of errors resulting from problematic configs. This list will be truncated after 100 errors, although it is unlikely for that many errors to simultaneously exist. */
  errors?: ReadonlyArray<ConfigManagementSyncError>;
  /** Token indicating the state of the repo. */
  sourceToken?: string;
  /** Token indicating the state of the syncer. */
  syncToken?: string;
  /** Deprecated: use last_sync_time instead. Timestamp of when ACM last successfully synced the repo The time format is specified in https://golang.org/pkg/time/#Time.String */
  lastSync?: string;
}

export const ConfigManagementSyncState: Schema.Codec<ConfigManagementSyncState> =
  /*@__PURE__*/ Schema.Struct({
    importToken: Schema.optional(Schema.String),
    lastSyncTime: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(ConfigManagementSyncError)),
    sourceToken: Schema.optional(Schema.String),
    syncToken: Schema.optional(Schema.String),
    lastSync: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementSyncState" });

export interface PolicyBinding {
  /** The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: `projects/{project_number}/platforms/gke/policies/{policy_id}`. */
  name?: string;
}

export const PolicyBinding: Schema.Codec<PolicyBinding> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyBinding" });

export interface BinaryAuthorizationConfig {
  /** Optional. Mode of operation for binauthz policy evaluation. */
  evaluationMode?:
    | "EVALUATION_MODE_UNSPECIFIED"
    | "DISABLED"
    | "POLICY_BINDINGS"
    | (string & {});
  /** Optional. Binauthz policies that apply to this cluster. */
  policyBindings?: ReadonlyArray<PolicyBinding>;
}

export const BinaryAuthorizationConfig: Schema.Codec<BinaryAuthorizationConfig> =
  /*@__PURE__*/ Schema.Struct({
    evaluationMode: Schema.optional(Schema.String),
    policyBindings: Schema.optional(Schema.Array(PolicyBinding)),
  }).annotate({ identifier: "BinaryAuthorizationConfig" });

export interface IdentityServiceMembershipState {
  /** Last reconciled membership configuration */
  memberConfig?: IdentityServiceMembershipSpec;
  /** Installed AIS version. This is the AIS version installed on this member. The values makes sense iff state is OK. */
  installedVersion?: string;
  /** The reason of the failure. */
  failureReason?: string;
  /** Deployment state on this member */
  state?: "DEPLOYMENT_STATE_UNSPECIFIED" | "OK" | "ERROR" | (string & {});
}

export const IdentityServiceMembershipState: Schema.Codec<IdentityServiceMembershipState> =
  /*@__PURE__*/ Schema.Struct({
    memberConfig: Schema.optional(IdentityServiceMembershipSpec),
    installedVersion: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceMembershipState" });

export interface ServiceMeshStatusDetails {
  /** Human-readable explanation of code. */
  details?: string;
  /** A machine-readable code that further describes a broad status. */
  code?: string;
}

export const ServiceMeshStatusDetails: Schema.Codec<ServiceMeshStatusDetails> =
  /*@__PURE__*/ Schema.Struct({
    details: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshStatusDetails" });

export interface ServiceMeshDataPlaneManagement {
  /** Lifecycle status of data plane management. */
  state?:
    | "LIFECYCLE_STATE_UNSPECIFIED"
    | "DISABLED"
    | "FAILED_PRECONDITION"
    | "PROVISIONING"
    | "ACTIVE"
    | "STALLED"
    | "NEEDS_ATTENTION"
    | "DEGRADED"
    | "DEPROVISIONING"
    | (string & {});
  /** Explanation of the status. */
  details?: ReadonlyArray<ServiceMeshStatusDetails>;
}

export const ServiceMeshDataPlaneManagement: Schema.Codec<ServiceMeshDataPlaneManagement> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(ServiceMeshStatusDetails)),
  }).annotate({ identifier: "ServiceMeshDataPlaneManagement" });

export interface ServiceMeshControlPlaneManagement {
  /** Output only. Implementation of managed control plane. */
  implementation?:
    | "IMPLEMENTATION_UNSPECIFIED"
    | "ISTIOD"
    | "TRAFFIC_DIRECTOR"
    | "UPDATING"
    | (string & {});
  /** Explanation of state. */
  details?: ReadonlyArray<ServiceMeshStatusDetails>;
  /** LifecycleState of control plane management. */
  state?:
    | "LIFECYCLE_STATE_UNSPECIFIED"
    | "DISABLED"
    | "FAILED_PRECONDITION"
    | "PROVISIONING"
    | "ACTIVE"
    | "STALLED"
    | "NEEDS_ATTENTION"
    | "DEGRADED"
    | "DEPROVISIONING"
    | (string & {});
}

export const ServiceMeshControlPlaneManagement: Schema.Codec<ServiceMeshControlPlaneManagement> =
  /*@__PURE__*/ Schema.Struct({
    implementation: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(ServiceMeshStatusDetails)),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshControlPlaneManagement" });

export interface ServiceMeshMembershipState {
  /** Output only. List of conditions reported for this membership. */
  conditions?: ReadonlyArray<ServiceMeshCondition>;
  /** Output only. Results of running Service Mesh analyzers. */
  analysisMessages?: ReadonlyArray<ServiceMeshAnalysisMessage>;
  /** The API version (i.e. Istio CRD version) for configuring service mesh in this cluster. This version is influenced by the `default_channel` field. */
  configApiVersion?: string;
  /** Output only. Status of data plane management. */
  dataPlaneManagement?: ServiceMeshDataPlaneManagement;
  /** Output only. Status of control plane management */
  controlPlaneManagement?: ServiceMeshControlPlaneManagement;
}

export const ServiceMeshMembershipState: Schema.Codec<ServiceMeshMembershipState> =
  /*@__PURE__*/ Schema.Struct({
    conditions: Schema.optional(Schema.Array(ServiceMeshCondition)),
    analysisMessages: Schema.optional(Schema.Array(ServiceMeshAnalysisMessage)),
    configApiVersion: Schema.optional(Schema.String),
    dataPlaneManagement: Schema.optional(ServiceMeshDataPlaneManagement),
    controlPlaneManagement: Schema.optional(ServiceMeshControlPlaneManagement),
  }).annotate({ identifier: "ServiceMeshMembershipState" });

export interface CancelRolloutRequest {}

export const CancelRolloutRequest: Schema.Codec<CancelRolloutRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelRolloutRequest",
  });

export interface PauseRolloutRequest {}

export const PauseRolloutRequest: Schema.Codec<PauseRolloutRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PauseRolloutRequest",
  });

export interface MultiClusterIngressFeatureSpec {
  /** Deprecated: This field will be ignored and should not be set. Customer's billing structure. */
  billing?:
    | "BILLING_UNSPECIFIED"
    | "PAY_AS_YOU_GO"
    | "ANTHOS_LICENSE"
    | (string & {});
  /** Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar` */
  configMembership?: string;
}

export const MultiClusterIngressFeatureSpec: Schema.Codec<MultiClusterIngressFeatureSpec> =
  /*@__PURE__*/ Schema.Struct({
    billing: Schema.optional(Schema.String),
    configMembership: Schema.optional(Schema.String),
  }).annotate({ identifier: "MultiClusterIngressFeatureSpec" });

export interface MeteringMembershipState {
  /** The time stamp of the most recent measurement of the number of vCPUs in the cluster. */
  lastMeasurementTime?: string;
  /** The vCPUs capacity in the cluster according to the most recent measurement (1/1000 precision). */
  preciseLastMeasuredClusterVcpuCapacity?: number;
}

export const MeteringMembershipState: Schema.Codec<MeteringMembershipState> =
  /*@__PURE__*/ Schema.Struct({
    lastMeasurementTime: Schema.optional(Schema.String),
    preciseLastMeasuredClusterVcpuCapacity: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MeteringMembershipState" });

export interface Expr {
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr: Schema.Codec<Expr> =
  /*@__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface PolicyControllerOnClusterState {
  /** The lifecycle state of this component. */
  state?:
    | "LIFECYCLE_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLING"
    | "ACTIVE"
    | "UPDATING"
    | "DECOMMISSIONING"
    | "CLUSTER_ERROR"
    | "HUB_ERROR"
    | "SUSPENDED"
    | "DETACHED"
    | (string & {});
  /** Surface potential errors or information logs. */
  details?: string;
}

export const PolicyControllerOnClusterState: Schema.Codec<PolicyControllerOnClusterState> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyControllerOnClusterState" });

export interface PolicyControllerPolicyContentState {
  /** The state of the template library */
  templateLibraryState?: PolicyControllerOnClusterState;
  /** The state of the any bundles included in the chosen version of the manifest */
  bundleStates?: Record<string, PolicyControllerOnClusterState>;
  /** The state of the referential data sync configuration. This could represent the state of either the syncSet object(s) or the config object, depending on the version of PoCo configured by the user. */
  referentialSyncConfigState?: PolicyControllerOnClusterState;
}

export const PolicyControllerPolicyContentState: Schema.Codec<PolicyControllerPolicyContentState> =
  /*@__PURE__*/ Schema.Struct({
    templateLibraryState: Schema.optional(PolicyControllerOnClusterState),
    bundleStates: Schema.optional(
      Schema.Record(Schema.String, PolicyControllerOnClusterState),
    ),
    referentialSyncConfigState: Schema.optional(PolicyControllerOnClusterState),
  }).annotate({ identifier: "PolicyControllerPolicyContentState" });

export interface PolicyControllerMembershipState {
  /** Currently these include (also serving as map keys): 1. "admission" 2. "audit" 3. "mutation" */
  componentStates?: Record<string, PolicyControllerOnClusterState>;
  /** The overall Policy Controller lifecycle state observed by the Hub Feature controller. */
  state?:
    | "LIFECYCLE_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLING"
    | "ACTIVE"
    | "UPDATING"
    | "DECOMMISSIONING"
    | "CLUSTER_ERROR"
    | "HUB_ERROR"
    | "SUSPENDED"
    | "DETACHED"
    | (string & {});
  /** The overall content state observed by the Hub Feature controller. */
  policyContentState?: PolicyControllerPolicyContentState;
}

export const PolicyControllerMembershipState: Schema.Codec<PolicyControllerMembershipState> =
  /*@__PURE__*/ Schema.Struct({
    componentStates: Schema.optional(
      Schema.Record(Schema.String, PolicyControllerOnClusterState),
    ),
    state: Schema.optional(Schema.String),
    policyContentState: Schema.optional(PolicyControllerPolicyContentState),
  }).annotate({ identifier: "PolicyControllerMembershipState" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
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

export const Binding: Schema.Codec<Binding> =
  /*@__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(Expr),
  }).annotate({ identifier: "Binding" });

export interface ClusterUpgradeScopeSpec {
  /** This scope consumes upgrades that have COMPLETE status code in the upstream scopes. See UpgradeStatus.Code for code definitions. The scope name should be in the form: `projects/{p}/locations/global/scopes/{s}` Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature's project. This is defined as repeated for future proof reasons. Initial implementation will enforce at most one upstream scope. */
  upstreamScopes?: ReadonlyArray<string>;
  /** Allow users to override some properties of each GKE upgrade. */
  gkeUpgradeOverrides?: ReadonlyArray<ClusterUpgradeGKEUpgradeOverride>;
  /** Required. Post conditions to evaluate to mark an upgrade COMPLETE. Required. */
  postConditions?: ClusterUpgradePostConditions;
}

export const ClusterUpgradeScopeSpec: Schema.Codec<ClusterUpgradeScopeSpec> =
  /*@__PURE__*/ Schema.Struct({
    upstreamScopes: Schema.optional(Schema.Array(Schema.String)),
    gkeUpgradeOverrides: Schema.optional(
      Schema.Array(ClusterUpgradeGKEUpgradeOverride),
    ),
    postConditions: Schema.optional(ClusterUpgradePostConditions),
  }).annotate({ identifier: "ClusterUpgradeScopeSpec" });

export interface ListScopeNamespacesResponse {
  /** The list of fleet namespaces */
  scopeNamespaces?: ReadonlyArray<Namespace>;
  /** A token to request the next page of resources from the `ListNamespaces` method. The value of an empty string means that there are no more resources to return. */
  nextPageToken?: string;
}

export const ListScopeNamespacesResponse: Schema.Codec<ListScopeNamespacesResponse> =
  /*@__PURE__*/ Schema.Struct({
    scopeNamespaces: Schema.optional(Schema.Array(Namespace)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListScopeNamespacesResponse" });

export interface ConfigManagementConfigSyncVersion {
  /** Version of the deployed syncer pod */
  syncer?: string;
  /** Version of the deployed reconciler container in root-reconciler pod */
  rootReconciler?: string;
  /** Version of the deployed git-sync pod */
  gitSync?: string;
  /** Version of the deployed importer pod */
  importer?: string;
  /** Version of the deployed otel-collector pod */
  otelCollector?: string;
  /** Version of the deployed monitor pod */
  monitor?: string;
  /** Version of the deployed reconciler-manager pod */
  reconcilerManager?: string;
  /** Version of the deployed admission-webhook pod */
  admissionWebhook?: string;
  /** Version of the deployed resource-group-controller-manager pod */
  resourceGroupControllerManager?: string;
}

export const ConfigManagementConfigSyncVersion: Schema.Codec<ConfigManagementConfigSyncVersion> =
  /*@__PURE__*/ Schema.Struct({
    syncer: Schema.optional(Schema.String),
    rootReconciler: Schema.optional(Schema.String),
    gitSync: Schema.optional(Schema.String),
    importer: Schema.optional(Schema.String),
    otelCollector: Schema.optional(Schema.String),
    monitor: Schema.optional(Schema.String),
    reconcilerManager: Schema.optional(Schema.String),
    admissionWebhook: Schema.optional(Schema.String),
    resourceGroupControllerManager: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementConfigSyncVersion" });

export interface ConfigManagementConfigSyncError {
  /** A string representing the user facing error message */
  errorMessage?: string;
}

export const ConfigManagementConfigSyncError: Schema.Codec<ConfigManagementConfigSyncError> =
  /*@__PURE__*/ Schema.Struct({
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementConfigSyncError" });

export interface ConfigManagementConfigSyncDeploymentState {
  /** Deployment state of root-reconciler */
  rootReconciler?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Deployment state of the syncer pod */
  syncer?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Deployment state of the git-sync pod */
  gitSync?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Deployment state of the monitor pod */
  monitor?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Deployment state of the importer pod */
  importer?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Deployment state of otel-collector */
  otelCollector?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Deployment state of admission-webhook */
  admissionWebhook?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Deployment state of resource-group-controller-manager */
  resourceGroupControllerManager?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Deployment state of reconciler-manager pod */
  reconcilerManager?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
}

export const ConfigManagementConfigSyncDeploymentState: Schema.Codec<ConfigManagementConfigSyncDeploymentState> =
  /*@__PURE__*/ Schema.Struct({
    rootReconciler: Schema.optional(Schema.String),
    syncer: Schema.optional(Schema.String),
    gitSync: Schema.optional(Schema.String),
    monitor: Schema.optional(Schema.String),
    importer: Schema.optional(Schema.String),
    otelCollector: Schema.optional(Schema.String),
    admissionWebhook: Schema.optional(Schema.String),
    resourceGroupControllerManager: Schema.optional(Schema.String),
    reconcilerManager: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementConfigSyncDeploymentState" });

export interface ConfigManagementConfigSyncState {
  /** Output only. The version of ConfigSync deployed */
  version?: ConfigManagementConfigSyncVersion;
  /** Output only. The state of CS This field summarizes the other fields in this message. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CONFIG_SYNC_NOT_INSTALLED"
    | "CONFIG_SYNC_INSTALLED"
    | "CONFIG_SYNC_ERROR"
    | "CONFIG_SYNC_PENDING"
    | (string & {});
  /** Output only. Errors pertaining to the installation of Config Sync. */
  errors?: ReadonlyArray<ConfigManagementConfigSyncError>;
  /** Output only. Whether syncing resources to the cluster is stopped at the cluster level. */
  clusterLevelStopSyncingState?:
    | "STOP_SYNCING_STATE_UNSPECIFIED"
    | "NOT_STOPPED"
    | "PENDING"
    | "STOPPED"
    | (string & {});
  /** Output only. Information about the deployment of ConfigSync, including the version of the various Pods deployed */
  deploymentState?: ConfigManagementConfigSyncDeploymentState;
  /** Output only. The state of ConfigSync's process to sync configs to a cluster */
  syncState?: ConfigManagementSyncState;
  /** Output only. The state of the Reposync CRD */
  reposyncCrd?:
    | "CRD_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "TERMINATING"
    | "INSTALLING"
    | (string & {});
  /** Output only. The number of RootSync and RepoSync CRs in the cluster. */
  crCount?: number;
  /** Output only. The state of the RootSync CRD */
  rootsyncCrd?:
    | "CRD_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "TERMINATING"
    | "INSTALLING"
    | (string & {});
}

export const ConfigManagementConfigSyncState: Schema.Codec<ConfigManagementConfigSyncState> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(ConfigManagementConfigSyncVersion),
    state: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(ConfigManagementConfigSyncError)),
    clusterLevelStopSyncingState: Schema.optional(Schema.String),
    deploymentState: Schema.optional(ConfigManagementConfigSyncDeploymentState),
    syncState: Schema.optional(ConfigManagementSyncState),
    reposyncCrd: Schema.optional(Schema.String),
    crCount: Schema.optional(Schema.Number),
    rootsyncCrd: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementConfigSyncState" });

export interface ConfigManagementBinauthzVersion {
  /** The version of the binauthz webhook. */
  webhookVersion?: string;
}

export const ConfigManagementBinauthzVersion: Schema.Codec<ConfigManagementBinauthzVersion> =
  /*@__PURE__*/ Schema.Struct({
    webhookVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementBinauthzVersion" });

export interface ConfigManagementBinauthzState {
  /** The state of the binauthz webhook. */
  webhook?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** The version of binauthz that is installed. */
  version?: ConfigManagementBinauthzVersion;
}

export const ConfigManagementBinauthzState: Schema.Codec<ConfigManagementBinauthzState> =
  /*@__PURE__*/ Schema.Struct({
    webhook: Schema.optional(Schema.String),
    version: Schema.optional(ConfigManagementBinauthzVersion),
  }).annotate({ identifier: "ConfigManagementBinauthzState" });

export interface ConfigManagementInstallError {
  /** A string representing the user facing error message */
  errorMessage?: string;
}

export const ConfigManagementInstallError: Schema.Codec<ConfigManagementInstallError> =
  /*@__PURE__*/ Schema.Struct({
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementInstallError" });

export interface ConfigManagementOperatorState {
  /** The semenatic version number of the operator */
  version?: string;
  /** The state of the Operator's deployment */
  deploymentState?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Install errors. */
  errors?: ReadonlyArray<ConfigManagementInstallError>;
}

export const ConfigManagementOperatorState: Schema.Codec<ConfigManagementOperatorState> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    deploymentState: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(ConfigManagementInstallError)),
  }).annotate({ identifier: "ConfigManagementOperatorState" });

export interface ConfigManagementPolicyControllerVersion {
  /** The gatekeeper image tag that is composed of ACM version, git tag, build number. */
  version?: string;
}

export const ConfigManagementPolicyControllerVersion: Schema.Codec<ConfigManagementPolicyControllerVersion> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementPolicyControllerVersion" });

export interface ConfigManagementPolicyControllerMigration {
  /** Last time this membership spec was copied to PoCo feature. */
  copyTime?: string;
  /** Stage of the migration. */
  stage?: "STAGE_UNSPECIFIED" | "ACM_MANAGED" | "POCO_MANAGED" | (string & {});
}

export const ConfigManagementPolicyControllerMigration: Schema.Codec<ConfigManagementPolicyControllerMigration> =
  /*@__PURE__*/ Schema.Struct({
    copyTime: Schema.optional(Schema.String),
    stage: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementPolicyControllerMigration" });

export interface ConfigManagementPolicyControllerState {
  /** The version of Gatekeeper Policy Controller deployed. */
  version?: ConfigManagementPolicyControllerVersion;
  /** The state about the policy controller installation. */
  deploymentState?: ConfigManagementGatekeeperDeploymentState;
  /** Record state of ACM -> PoCo Hub migration for this feature. */
  migration?: ConfigManagementPolicyControllerMigration;
}

export const ConfigManagementPolicyControllerState: Schema.Codec<ConfigManagementPolicyControllerState> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(ConfigManagementPolicyControllerVersion),
    deploymentState: Schema.optional(ConfigManagementGatekeeperDeploymentState),
    migration: Schema.optional(ConfigManagementPolicyControllerMigration),
  }).annotate({ identifier: "ConfigManagementPolicyControllerState" });

export interface ConfigManagementMembershipState {
  /** Output only. Current sync status */
  configSyncState?: ConfigManagementConfigSyncState;
  /** Output only. This field is set to the `cluster_name` field of the Membership Spec if it is not empty. Otherwise, it is set to the cluster's fleet membership name. */
  clusterName?: string;
  /** Output only. Binauthz status */
  binauthzState?: ConfigManagementBinauthzState;
  /** Output only. Membership configuration in the cluster. This represents the actual state in the cluster, while the MembershipSpec in the FeatureSpec represents the intended state */
  membershipSpec?: ConfigManagementMembershipSpec;
  /** Output only. Hierarchy Controller status */
  hierarchyControllerState?: ConfigManagementHierarchyControllerState;
  /** Output only. The Kubernetes API server version of the cluster. */
  kubernetesApiServerVersion?: string;
  /** Output only. Current install status of ACM's Operator */
  operatorState?: ConfigManagementOperatorState;
  /** Output only. PolicyController status */
  policyControllerState?: ConfigManagementPolicyControllerState;
}

export const ConfigManagementMembershipState: Schema.Codec<ConfigManagementMembershipState> =
  /*@__PURE__*/ Schema.Struct({
    configSyncState: Schema.optional(ConfigManagementConfigSyncState),
    clusterName: Schema.optional(Schema.String),
    binauthzState: Schema.optional(ConfigManagementBinauthzState),
    membershipSpec: Schema.optional(ConfigManagementMembershipSpec),
    hierarchyControllerState: Schema.optional(
      ConfigManagementHierarchyControllerState,
    ),
    kubernetesApiServerVersion: Schema.optional(Schema.String),
    operatorState: Schema.optional(ConfigManagementOperatorState),
    policyControllerState: Schema.optional(
      ConfigManagementPolicyControllerState,
    ),
  }).annotate({ identifier: "ConfigManagementMembershipState" });

export interface ForceCompleteRolloutStageRequest {
  /** Required. The stage number to force-complete. */
  stageNumber?: number;
}

export const ForceCompleteRolloutStageRequest: Schema.Codec<ForceCompleteRolloutStageRequest> =
  /*@__PURE__*/ Schema.Struct({
    stageNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ForceCompleteRolloutStageRequest" });

export interface FleetObservabilityLoggingConfig {
  /** Specified if applying the default routing config to logs not specified in other configs. */
  defaultConfig?: FleetObservabilityRoutingConfig;
  /** Specified if applying the routing config to all logs for all fleet scopes. */
  fleetScopeLogsConfig?: FleetObservabilityRoutingConfig;
}

export const FleetObservabilityLoggingConfig: Schema.Codec<FleetObservabilityLoggingConfig> =
  /*@__PURE__*/ Schema.Struct({
    defaultConfig: Schema.optional(FleetObservabilityRoutingConfig),
    fleetScopeLogsConfig: Schema.optional(FleetObservabilityRoutingConfig),
  }).annotate({ identifier: "FleetObservabilityLoggingConfig" });

export interface FleetObservabilityFeatureSpec {
  /** Specified if fleet logging feature is enabled for the entire fleet. If UNSPECIFIED, fleet logging feature is disabled for the entire fleet. */
  loggingConfig?: FleetObservabilityLoggingConfig;
}

export const FleetObservabilityFeatureSpec: Schema.Codec<FleetObservabilityFeatureSpec> =
  /*@__PURE__*/ Schema.Struct({
    loggingConfig: Schema.optional(FleetObservabilityLoggingConfig),
  }).annotate({ identifier: "FleetObservabilityFeatureSpec" });

export interface ScopeFeatureSpec {
  /** Spec for the ClusterUpgrade feature at the scope level */
  clusterupgrade?: ClusterUpgradeScopeSpec;
}

export const ScopeFeatureSpec: Schema.Codec<ScopeFeatureSpec> =
  /*@__PURE__*/ Schema.Struct({
    clusterupgrade: Schema.optional(ClusterUpgradeScopeSpec),
  }).annotate({ identifier: "ScopeFeatureSpec" });

export interface RolloutStage {
  /** Output only. The state of the stage. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SOAKING"
    | "COMPLETED"
    | "PAUSED"
    | (string & {});
  /** Output only. The selector from the sequence that was used to create this stage. Example CEL expression: resource.labels.canary == 'true' */
  clusterSelector?: ClusterSelector;
  /** Optional. Output only. The time at which the stage ended. */
  endTime?: string;
  /** Output only. The fleet projects from the sequence that was used to create this stage. Expected format: projects/{project_number} */
  fleetProjects?: ReadonlyArray<string>;
  /** Optional. Output only. The time at which the stage started. */
  startTime?: string;
  /** Optional. Duration to soak after this stage before starting the next stage. */
  soakDuration?: string;
  /** Output only. The stage number to which this status applies. */
  stageNumber?: number;
}

export const RolloutStage: Schema.Codec<RolloutStage> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    clusterSelector: Schema.optional(ClusterSelector),
    endTime: Schema.optional(Schema.String),
    fleetProjects: Schema.optional(Schema.Array(Schema.String)),
    startTime: Schema.optional(Schema.String),
    soakDuration: Schema.optional(Schema.String),
    stageNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RolloutStage" });

export interface Rollout {
  /** Output only. The intent of the rollout. */
  intent?:
    | "ROLLOUT_INTENT_UNSPECIFIED"
    | "REGULAR_UPGRADE"
    | "CONTROL_PLANE_PATCH_ENFORCEMENT"
    | "END_OF_SUPPORT_ENFORCEMENT"
    | (string & {});
  /** Identifier. The full, unique resource name of this Rollout in the format of `projects/{project}/locations/global/rollouts/{rollout}`. */
  name?: string;
  /** Output only. The trigger of the rollout. */
  trigger?: "ROLLOUT_TRIGGER_UNSPECIFIED" | "USER" | "GKE" | (string & {});
  /** Optional. Config for version upgrade of clusters. */
  versionUpgrade?: VersionUpgrade;
  /** Output only. The stages of the Rollout. */
  stages?: ReadonlyArray<RolloutStage>;
  /** Optional. Labels for this Rollout. */
  labels?: Record<string, string>;
  /** Output only. The timestamp at which the Rollout was completed. */
  completeTime?: string;
  /** Output only. States of upgrading control plane or node pool targets of a single cluster (GKE Hub membership) that's part of this Rollout. The key is the membership name of the cluster. The value is the state of the cluster. */
  membershipStates?: Record<string, RolloutMembershipState>;
  /** Output only. The timestamp at which the Rollout was created. */
  createTime?: string;
  /** Output only. StateReasonType specifies the reason type of the Rollout state. */
  stateReasonType?:
    | "STATE_REASON_TYPE_UNSPECIFIED"
    | "PAUSED_BY_USER"
    | "PAUSED_BY_SYSTEM_CONFIG"
    | "PAUSED_WAITING_FOR_NEXT_STAGE"
    | "CANCELLED_BY_USER"
    | "CANCELLED_PAUSED_TOO_LONG"
    | "CANCELLED_SUPERSEDED"
    | "CANCELLED_INCOMPATIBLE_ROLLOUT_SEQUENCE"
    | "CANCELLED_SUPERSEDED_BY_USER_ROLLOUT"
    | (string & {});
  /** Output only. State specifies various states of the Rollout. */
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "PAUSED"
    | "CANCELLED"
    | "COMPLETED"
    | (string & {});
  /** Optional. Immutable. The full, unique resource name of the rollout sequence that initiatied this Rollout. In the format of `projects/{project}/locations/global/rolloutSequences/{rollout_sequence}`. */
  rolloutSequence?: string;
  /** Output only. Google-generated UUID for this resource. This is unique across all Rollout resources. If a Rollout resource is deleted and another resource with the same name is created, it gets a different uid. */
  uid?: string;
  /** Output only. The timestamp at the Rollout was deleted. */
  deleteTime?: string;
  /** Output only. etag of the Rollout Ex. abc1234 */
  etag?: string;
  /** Output only. A human-readable description explaining the reason for the current state. */
  stateReason?: string;
  /** Optional. Human readable display name of the Rollout. */
  displayName?: string;
  /** Output only. The timestamp at which the Rollout was last updated. */
  updateTime?: string;
}

export const Rollout: Schema.Codec<Rollout> =
  /*@__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    trigger: Schema.optional(Schema.String),
    versionUpgrade: Schema.optional(VersionUpgrade),
    stages: Schema.optional(Schema.Array(RolloutStage)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    completeTime: Schema.optional(Schema.String),
    membershipStates: Schema.optional(
      Schema.Record(Schema.String, RolloutMembershipState),
    ),
    createTime: Schema.optional(Schema.String),
    stateReasonType: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    rolloutSequence: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    stateReason: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Rollout" });

export interface ListRolloutsResponse {
  /** The rollouts from the specified parent resource. */
  rollouts?: ReadonlyArray<Rollout>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListRolloutsResponse: Schema.Codec<ListRolloutsResponse> =
  /*@__PURE__*/ Schema.Struct({
    rollouts: Schema.optional(Schema.Array(Rollout)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListRolloutsResponse" });

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

export const SecurityPostureConfig: Schema.Codec<SecurityPostureConfig> =
  /*@__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
    vulnerabilityMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityPostureConfig" });

export interface CompliancePostureConfig {
  /** Defines the enablement mode for Compliance Posture. */
  mode?: "MODE_UNSPECIFIED" | "DISABLED" | "ENABLED" | (string & {});
  /** List of enabled compliance standards. */
  complianceStandards?: ReadonlyArray<ComplianceStandard>;
}

export const CompliancePostureConfig: Schema.Codec<CompliancePostureConfig> =
  /*@__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
    complianceStandards: Schema.optional(Schema.Array(ComplianceStandard)),
  }).annotate({ identifier: "CompliancePostureConfig" });

export interface DefaultClusterConfig {
  /** Optional. Enable/Disable Security Posture features for the cluster. */
  securityPostureConfig?: SecurityPostureConfig;
  /** Optional. Enable/Disable binary authorization features for the cluster. */
  binaryAuthorizationConfig?: BinaryAuthorizationConfig;
  /** Optional. Deprecated: Compliance Posture is no longer supported. For more details, see https://cloud.google.com/kubernetes-engine/docs/deprecations/posture-management-deprecation. Enable/Disable Compliance Posture features for the cluster. Note that on UpdateFleet, only full replacement of this field is allowed. Users are not allowed for partial updates through field mask. */
  compliancePostureConfig?: CompliancePostureConfig;
}

export const DefaultClusterConfig: Schema.Codec<DefaultClusterConfig> =
  /*@__PURE__*/ Schema.Struct({
    securityPostureConfig: Schema.optional(SecurityPostureConfig),
    binaryAuthorizationConfig: Schema.optional(BinaryAuthorizationConfig),
    compliancePostureConfig: Schema.optional(CompliancePostureConfig),
  }).annotate({ identifier: "DefaultClusterConfig" });

export interface Fleet {
  /** Optional. A user-assigned display name of the Fleet. When present, it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: `Production Fleet` */
  displayName?: string;
  /** Optional. Labels for this Fleet. */
  labels?: Record<string, string>;
  /** Output only. When the Fleet was created. */
  createTime?: string;
  /** Output only. When the Fleet was last updated. */
  updateTime?: string;
  /** Output only. The full, unique resource name of this fleet in the format of `projects/{project}/locations/{location}/fleets/{fleet}`. Each Google Cloud project can have at most one fleet resource, named "default". */
  name?: string;
  /** Output only. Google-generated UUID for this resource. This is unique across all Fleet resources. If a Fleet resource is deleted and another resource with the same name is created, it gets a different uid. */
  uid?: string;
  /** Output only. State of the namespace resource. */
  state?: FleetLifecycleState;
  /** Optional. The default cluster configurations to apply across the fleet. */
  defaultClusterConfig?: DefaultClusterConfig;
  /** Output only. When the Fleet was deleted. */
  deleteTime?: string;
}

export const Fleet: Schema.Codec<Fleet> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    state: Schema.optional(FleetLifecycleState),
    defaultClusterConfig: Schema.optional(DefaultClusterConfig),
    deleteTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Fleet" });

export interface ListFleetsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. The token is only valid for 1h. */
  nextPageToken?: string;
  /** The list of matching fleets. */
  fleets?: ReadonlyArray<Fleet>;
}

export const ListFleetsResponse: Schema.Codec<ListFleetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    fleets: Schema.optional(Schema.Array(Fleet)),
  }).annotate({ identifier: "ListFleetsResponse" });

export interface CommonFleetDefaultMemberConfigSpec {
  /** Anthos Service Mesh-specific spec */
  mesh?: ServiceMeshMembershipSpec;
  /** Config Management-specific spec. */
  configmanagement?: ConfigManagementMembershipSpec;
  /** Identity Service-specific spec. */
  identityservice?: IdentityServiceMembershipSpec;
  /** Policy Controller spec. */
  policycontroller?: PolicyControllerMembershipSpec;
}

export const CommonFleetDefaultMemberConfigSpec: Schema.Codec<CommonFleetDefaultMemberConfigSpec> =
  /*@__PURE__*/ Schema.Struct({
    mesh: Schema.optional(ServiceMeshMembershipSpec),
    configmanagement: Schema.optional(ConfigManagementMembershipSpec),
    identityservice: Schema.optional(IdentityServiceMembershipSpec),
    policycontroller: Schema.optional(PolicyControllerMembershipSpec),
  }).annotate({ identifier: "CommonFleetDefaultMemberConfigSpec" });

export interface RBACRoleBindingLifecycleState {
  /** Output only. The current state of the rbacrolebinding resource. */
  code?:
    | "CODE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "DELETING"
    | "UPDATING"
    | (string & {});
}

export const RBACRoleBindingLifecycleState: Schema.Codec<RBACRoleBindingLifecycleState> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "RBACRoleBindingLifecycleState" });

export interface Role {
  /** predefined_role is the Kubernetes default role to use */
  predefinedRole?:
    | "UNKNOWN"
    | "ADMIN"
    | "EDIT"
    | "VIEW"
    | "ANTHOS_SUPPORT"
    | (string & {});
  /** Optional. custom_role is the name of a custom KubernetesClusterRole to use. */
  customRole?: string;
}

export const Role: Schema.Codec<Role> =
  /*@__PURE__*/ Schema.Struct({
    predefinedRole: Schema.optional(Schema.String),
    customRole: Schema.optional(Schema.String),
  }).annotate({ identifier: "Role" });

export interface RBACRoleBinding {
  /** Output only. State of the rbacrolebinding resource. */
  state?: RBACRoleBindingLifecycleState;
  /** The resource name for the rbacrolebinding `projects/{project}/locations/{location}/scopes/{scope}/rbacrolebindings/{rbacrolebinding}` or `projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}` */
  name?: string;
  /** Output only. Google-generated UUID for this resource. This is unique across all rbacrolebinding resources. If a rbacrolebinding resource is deleted and another resource with the same name is created, it gets a different uid. */
  uid?: string;
  /** Output only. When the rbacrolebinding was deleted. */
  deleteTime?: string;
  /** Required. Role to bind to the principal */
  role?: Role;
  /** group is the group, as seen by the kubernetes cluster. */
  group?: string;
  /** Optional. Labels for this RBACRolebinding. */
  labels?: Record<string, string>;
  /** user is the name of the user as seen by the kubernetes cluster, example "alice" or "alice@domain.tld" */
  user?: string;
  /** Output only. When the rbacrolebinding was created. */
  createTime?: string;
  /** Output only. When the rbacrolebinding was last updated. */
  updateTime?: string;
}

export const RBACRoleBinding: Schema.Codec<RBACRoleBinding> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(RBACRoleBindingLifecycleState),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    role: Schema.optional(Role),
    group: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    user: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "RBACRoleBinding" });

export interface Stage {
  /** Required. List of Fleet projects to select the clusters from. Expected format: projects/{project} */
  fleetProjects?: ReadonlyArray<string>;
  /** Optional. Filter members of fleets (above) to a subset of clusters. If not specified, all clusters in the fleets are selected. */
  clusterSelector?: ClusterSelector;
  /** Optional. Soak time after upgrading all the clusters in the stage. */
  soakDuration?: string;
}

export const Stage: Schema.Codec<Stage> =
  /*@__PURE__*/ Schema.Struct({
    fleetProjects: Schema.optional(Schema.Array(Schema.String)),
    clusterSelector: Schema.optional(ClusterSelector),
    soakDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "Stage" });

export interface CloudAuditLoggingFeatureSpec {
  /** Service account that should be allowlisted to send the audit logs; eg cloudauditlogging@gcp-project.iam.gserviceaccount.com. These accounts must already exist, but do not need to have any permissions granted to them. The customer's entitlements will be checked prior to allowlisting (i.e. the customer must be an Anthos customer.) */
  allowlistedServiceAccounts?: ReadonlyArray<string>;
}

export const CloudAuditLoggingFeatureSpec: Schema.Codec<CloudAuditLoggingFeatureSpec> =
  /*@__PURE__*/ Schema.Struct({
    allowlistedServiceAccounts: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CloudAuditLoggingFeatureSpec" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Codec<TestIamPermissionsRequest> =
  /*@__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface FeatureResourceState {
  /** The current state of the Feature resource in the Hub API. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ENABLING"
    | "ACTIVE"
    | "DISABLING"
    | "UPDATING"
    | "SERVICE_UPDATING"
    | (string & {});
}

export const FeatureResourceState: Schema.Codec<FeatureResourceState> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "FeatureResourceState" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    error: Schema.optional(GoogleRpcStatus),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface MonitoringConfig {
  /** Optional. For GKE and Multicloud clusters, this is the UUID of the cluster resource. For VMWare and Baremetal clusters, this is the kube-system UID. */
  clusterHash?: string;
  /** Optional. Kubernetes system metrics, if available, are written to this prefix. This defaults to kubernetes.io for GKE, and kubernetes.io/anthos for Anthos eventually. Noted: Anthos MultiCloud will have kubernetes.io prefix today but will migration to be under kubernetes.io/anthos. */
  kubernetesMetricsPrefix?: string;
  /** Optional. Cluster name used to report metrics. For Anthos on VMWare/Baremetal/MultiCloud clusters, it would be in format {cluster_type}/{cluster_name}, e.g., "awsClusters/cluster_1". */
  cluster?: string;
  /** Optional. Project used to report Metrics */
  projectId?: string;
  /** Optional. Location used to report Metrics */
  location?: string;
}

export const MonitoringConfig: Schema.Codec<MonitoringConfig> =
  /*@__PURE__*/ Schema.Struct({
    clusterHash: Schema.optional(Schema.String),
    kubernetesMetricsPrefix: Schema.optional(Schema.String),
    cluster: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "MonitoringConfig" });

export interface Authority {
  /** Optional. A JSON Web Token (JWT) issuer URI. `issuer` must start with `https://` and be a valid URL with length <2000 characters, it must use `location` rather than `zone` for GKE clusters. If set, then Google will allow valid OIDC tokens from this issuer to authenticate within the workload_identity_pool. OIDC discovery will be performed on this URI to validate tokens from the issuer. Clearing `issuer` disables Workload Identity. `issuer` cannot be directly modified; it must be cleared (and Workload Identity disabled) before using a new issuer (and re-enabling Workload Identity). */
  issuer?: string;
  /** Output only. An identity provider that reflects the `issuer` in the workload identity pool. */
  identityProvider?: string;
  /** Optional. Output only. The name of the scope-tenancy workload identity pool. This pool is set in the fleet-level feature. */
  scopeTenancyWorkloadIdentityPool?: string;
  /** Output only. The name of the workload identity pool in which `issuer` will be recognized. There is a single Workload Identity Pool per Hub that is shared between all Memberships that belong to that Hub. For a Hub hosted in {PROJECT_ID}, the workload pool format is `{PROJECT_ID}.hub.id.goog`, although this is subject to change in newer versions of this API. */
  workloadIdentityPool?: string;
  /** Optional. OIDC verification keys for this Membership in JWKS format (RFC 7517). When this field is set, OIDC discovery will NOT be performed on `issuer`, and instead OIDC tokens will be validated using this field. */
  oidcJwks?: string;
  /** Optional. Output only. The identity provider for the scope-tenancy workload identity pool. */
  scopeTenancyIdentityProvider?: string;
}

export const Authority: Schema.Codec<Authority> =
  /*@__PURE__*/ Schema.Struct({
    issuer: Schema.optional(Schema.String),
    identityProvider: Schema.optional(Schema.String),
    scopeTenancyWorkloadIdentityPool: Schema.optional(Schema.String),
    workloadIdentityPool: Schema.optional(Schema.String),
    oidcJwks: Schema.optional(Schema.String),
    scopeTenancyIdentityProvider: Schema.optional(Schema.String),
  }).annotate({ identifier: "Authority" });

export interface MembershipState {
  /** Output only. The current state of the Membership resource. */
  code?:
    | "CODE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "DELETING"
    | "UPDATING"
    | "SERVICE_UPDATING"
    | (string & {});
}

export const MembershipState: Schema.Codec<MembershipState> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "MembershipState" });

export interface Membership {
  /** Output only. The full, unique name of this Membership resource in the format `projects/* /locations/* /memberships/{membership_id}`, set during creation. `membership_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. */
  name?: string;
  /** Output only. The type of the membership. */
  membershipType?:
    | "MEMBERSHIP_TYPE_UNSPECIFIED"
    | "LIGHTWEIGHT"
    | (string & {});
  /** Optional. Endpoint information to reach this member. */
  endpoint?: MembershipEndpoint;
  /** Optional. Labels for this membership. These labels are not leveraged by multi-cluster features, instead, we prefer cluster labels, which can be set on GKE cluster or other cluster types. */
  labels?: Record<string, string>;
  /** Optional. The monitoring config information for this membership. */
  monitoringConfig?: MonitoringConfig;
  /** Optional. An externally-generated and managed ID for this Membership. This ID may be modified after creation, but this is not recommended. The ID must match the regex: `a-zA-Z0-9*` If this Membership represents a Kubernetes cluster, this value should be set to the UID of the `kube-system` namespace object. */
  externalId?: string;
  /** Optional. How to identify workloads from this Membership. See the documentation on Workload Identity for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity */
  authority?: Authority;
  /** Output only. When the Membership was created. */
  createTime?: string;
  /** Output only. State of the Membership resource. */
  state?: MembershipState;
  /** Output only. When the Membership was deleted. */
  deleteTime?: string;
  /** Output only. Description of this membership, limited to 63 characters. Must match the regex: `a-zA-Z0-9*` This field is present for legacy purposes. */
  description?: string;
  /** Output only. For clusters using Connect, the timestamp of the most recent connection established with Google Cloud. This time is updated every several minutes, not continuously. For clusters that do not use GKE Connect, or that have never connected successfully, this field will be unset. */
  lastConnectionTime?: string;
  /** Output only. Google-generated UUID for this resource. This is unique across all Membership resources. If a Membership resource is deleted and another resource with the same name is created, it gets a different unique_id. */
  uniqueId?: string;
  /** Output only. When the Membership was last updated. */
  updateTime?: string;
  /** Output only. The tier of the cluster. */
  clusterTier?:
    | "CLUSTER_TIER_UNSPECIFIED"
    | "STANDARD"
    | "ENTERPRISE"
    | (string & {});
}

export const Membership: Schema.Codec<Membership> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    membershipType: Schema.optional(Schema.String),
    endpoint: Schema.optional(MembershipEndpoint),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    monitoringConfig: Schema.optional(MonitoringConfig),
    externalId: Schema.optional(Schema.String),
    authority: Schema.optional(Authority),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(MembershipState),
    deleteTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    lastConnectionTime: Schema.optional(Schema.String),
    uniqueId: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    clusterTier: Schema.optional(Schema.String),
  }).annotate({ identifier: "Membership" });

export interface ListMembershipsResponse {
  /** The list of matching Memberships. */
  resources?: ReadonlyArray<Membership>;
  /** List of locations that could not be reached while fetching this list. */
  unreachable?: ReadonlyArray<string>;
  /** A token to request the next page of resources from the `ListMemberships` method. The value of an empty string means that there are no more resources to return. */
  nextPageToken?: string;
}

export const ListMembershipsResponse: Schema.Codec<ListMembershipsResponse> =
  /*@__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(Membership)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMembershipsResponse" });

export interface OperationalState {
  /** Output only. State of the Rollout Sequence. */
  state?:
    | "STATE_CODE_UNSPECIFIED"
    | "ACTIVE"
    | "WARNING"
    | "ERROR"
    | "INITIALIZING"
    | (string & {});
  /** Output only. The timestamp at which the operational state was last changed. Used to track how long it has been in the current state. */
  stateChangeTime?: string;
  /** Output only. Reasons for the Rollout Sequence state. */
  reasons?: ReadonlyArray<
    | "REASON_UNSPECIFIED"
    | "FLEET_FEATURE_DELETED_ERROR"
    | "FLEET_DELETED_ERROR"
    | "EMPTY_STAGE_WARNING"
    | "MIXED_RELEASE_CHANNELS_WARNING"
    | "INTERNAL_ERROR"
    | "NO_CLUSTERS_IN_SEQUENCE"
    | (string & {})
  >;
}

export const OperationalState: Schema.Codec<OperationalState> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    stateChangeTime: Schema.optional(Schema.String),
    reasons: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "OperationalState" });

export interface ListAdminClusterMembershipsResponse {
  /** List of locations that could not be reached while fetching this list. */
  unreachable?: ReadonlyArray<string>;
  /** The list of matching Memberships of admin clusters. */
  adminClusterMemberships?: ReadonlyArray<Membership>;
  /** A token to request the next page of resources from the `ListAdminClusterMemberships` method. The value of an empty string means that there are no more resources to return. */
  nextPageToken?: string;
}

export const ListAdminClusterMembershipsResponse: Schema.Codec<ListAdminClusterMembershipsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    adminClusterMemberships: Schema.optional(Schema.Array(Membership)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAdminClusterMembershipsResponse" });

export interface RolloutCreationScope {
  /** Optional. The list of enabled upgrade types. */
  upgradeTypes?: ReadonlyArray<
    | "UPGRADE_TYPE_UNSPECIFIED"
    | "CONTROL_PLANE_MINOR"
    | "CONTROL_PLANE_PATCH"
    | "NODE_MINOR"
    | "NODE_PATCH"
    | (string & {})
  >;
}

export const RolloutCreationScope: Schema.Codec<RolloutCreationScope> =
  /*@__PURE__*/ Schema.Struct({
    upgradeTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RolloutCreationScope" });

export interface AutoUpgradeConfig {
  /** Output only. Mandatory Safety Policies (Always active) which cannot be disabled. The key is the policy ID (e.g., "ENFORCED_CONTROL_PLANE_PATCH") and the value is a human-readable description. */
  enforcedRollouts?: Record<string, string>;
  /** Optional. Specifies the scope of automation for the creation of rollouts. Represents the types of rollouts (version upgrades) the sequence should initiate automatically. If this field is `unset`, it defaults to all types. If this field is `set` but the internal `upgrade_types` list is `empty`, most automatic rollouts are disabled for this sequence. Exceptions are rollouts enforcing our security policies (e.g. such as end-of-support and outdated control plane patch enforcements). These policy enforcements cannot be disabled. */
  rolloutCreationScope?: RolloutCreationScope;
}

export const AutoUpgradeConfig: Schema.Codec<AutoUpgradeConfig> =
  /*@__PURE__*/ Schema.Struct({
    enforcedRollouts: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    rolloutCreationScope: Schema.optional(RolloutCreationScope),
  }).annotate({ identifier: "AutoUpgradeConfig" });

export interface RolloutSequence {
  /** Output only. etag of the Rollout Sequence Ex. abc1234 */
  etag?: string;
  /** Optional. Configuration for automatic upgrades. If this message is `unset`, the system applies default behavior. */
  autoUpgradeConfig?: AutoUpgradeConfig;
  /** Output only. The timestamp at the Rollout Sequence was deleted. */
  deleteTime?: string;
  /** Output only. Google-generated UUID for this resource. This is unique across all Rollout Sequence resources. If a Rollout Sequence resource is deleted and another resource with the same name is created, it gets a different uid. */
  uid?: string;
  /** Output only. The last qualified node version. */
  lastQualifiedNodeVersion?: string;
  /** Optional. Selector for clusters to exclude from the Rollout Sequence. */
  ignoredClustersSelector?: ClusterSelector;
  /** Output only. The timestamp at which the Rollout Sequence was last updated. */
  updateTime?: string;
  /** Optional. Human readable display name of the Rollout Sequence. */
  displayName?: string;
  /** Output only. The target control plane version of the Rollout Sequence. */
  targetControlPlaneVersion?: string;
  /** Output only. The computed release channel used for the Rollout Sequence. */
  computedReleaseChannel?:
    | "GKE_RELEASE_CHANNEL_UNSPECIFIED"
    | "RAPID"
    | "REGULAR"
    | "STABLE"
    | "EXTENDED"
    | "NO_CHANNEL"
    | (string & {});
  /** Output only. The last qualified control plane version. */
  lastQualifiedControlPlaneVersion?: string;
  /** Identifier. Name of the rollout sequence in the format of: projects/{PROJECT_ID}/locations/global/rolloutSequences/{NAME} */
  name?: string;
  /** Output only. The timestamp at which the Rollout Sequence was created. */
  createTime?: string;
  /** Output only. Operational state of the Rollout Sequence. */
  operationalState?: OperationalState;
  /** Output only. The resolved auto-upgrade options which are in effect. */
  effectiveAutoUpgradeConfig?: AutoUpgradeConfig;
  /** Optional. Labels for this Rollout Sequence. */
  labels?: Record<string, string>;
  /** Output only. The target node version of the Rollout Sequence. */
  targetNodeVersion?: string;
  /** Required. Ordered list of stages that constitutes this Rollout. */
  stages?: ReadonlyArray<Stage>;
}

export const RolloutSequence: Schema.Codec<RolloutSequence> =
  /*@__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    autoUpgradeConfig: Schema.optional(AutoUpgradeConfig),
    deleteTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    lastQualifiedNodeVersion: Schema.optional(Schema.String),
    ignoredClustersSelector: Schema.optional(ClusterSelector),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    targetControlPlaneVersion: Schema.optional(Schema.String),
    computedReleaseChannel: Schema.optional(Schema.String),
    lastQualifiedControlPlaneVersion: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    operationalState: Schema.optional(OperationalState),
    effectiveAutoUpgradeConfig: Schema.optional(AutoUpgradeConfig),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    targetNodeVersion: Schema.optional(Schema.String),
    stages: Schema.optional(Schema.Array(Stage)),
  }).annotate({ identifier: "RolloutSequence" });

export interface WorkloadIdentityMembershipState {
  /** Deprecated, this field will be erased after code is changed to use the new field. */
  description?: string;
  /** The state of the Identity Providers corresponding to the membership. */
  identityProviderStateDetails?: Record<
    string,
    WorkloadIdentityIdentityProviderStateDetail
  >;
}

export const WorkloadIdentityMembershipState: Schema.Codec<WorkloadIdentityMembershipState> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    identityProviderStateDetails: Schema.optional(
      Schema.Record(Schema.String, WorkloadIdentityIdentityProviderStateDetail),
    ),
  }).annotate({ identifier: "WorkloadIdentityMembershipState" });

export interface ValidationResult {
  /** Validator type to validate membership with. */
  validator?:
    | "VALIDATOR_TYPE_UNSPECIFIED"
    | "MEMBERSHIP_ID"
    | "CROSS_PROJECT_PERMISSION"
    | "FLEET_ALLOWED_FOR_PROJECT_GUARDRAIL"
    | (string & {});
  /** Whether the validation is passed or not. */
  success?: boolean;
  /** Additional information for the validation. */
  result?: string;
}

export const ValidationResult: Schema.Codec<ValidationResult> =
  /*@__PURE__*/ Schema.Struct({
    validator: Schema.optional(Schema.String),
    success: Schema.optional(Schema.Boolean),
    result: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValidationResult" });

export interface AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
}

export const AuditConfig: Schema.Codec<AuditConfig> =
  /*@__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
  }).annotate({ identifier: "AuditConfig" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Codec<TestIamPermissionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface ListBoundMembershipsResponse {
  /** The list of Memberships bound to the given Scope. */
  memberships?: ReadonlyArray<Membership>;
  /** A token to request the next page of resources from the `ListBoundMemberships` method. The value of an empty string means that there are no more resources to return. */
  nextPageToken?: string;
  /** List of locations that could not be reached while fetching this list. */
  unreachable?: ReadonlyArray<string>;
}

export const ListBoundMembershipsResponse: Schema.Codec<ListBoundMembershipsResponse> =
  /*@__PURE__*/ Schema.Struct({
    memberships: Schema.optional(Schema.Array(Membership)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListBoundMembershipsResponse" });

export interface RBACRoleBindingActuationFeatureSpec {
  /** The list of allowed custom roles (ClusterRoles). If a ClusterRole is not part of this list, it cannot be used in a Scope RBACRoleBinding. If a ClusterRole in this list is in use, it cannot be removed from the list. */
  allowedCustomRoles?: ReadonlyArray<string>;
}

export const RBACRoleBindingActuationFeatureSpec: Schema.Codec<RBACRoleBindingActuationFeatureSpec> =
  /*@__PURE__*/ Schema.Struct({
    allowedCustomRoles: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RBACRoleBindingActuationFeatureSpec" });

export interface WorkloadIdentityFeatureSpec {
  /** Pool to be used for Workload Identity. This pool in trust-domain mode is used with Fleet Tenancy, so that sameness can be enforced. ex: projects/example/locations/global/workloadidentitypools/custompool */
  scopeTenancyPool?: string;
}

export const WorkloadIdentityFeatureSpec: Schema.Codec<WorkloadIdentityFeatureSpec> =
  /*@__PURE__*/ Schema.Struct({
    scopeTenancyPool: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkloadIdentityFeatureSpec" });

export interface ServiceMeshFeatureSpec {
  /** Optional. Specifies modernization compatibility for the fleet. */
  modernizationCompatibility?:
    | "MODERNIZATION_COMPATIBILITY_UNSPECIFIED"
    | "VALIDATION_ENABLED"
    | "VALIDATION_DISABLED"
    | (string & {});
}

export const ServiceMeshFeatureSpec: Schema.Codec<ServiceMeshFeatureSpec> =
  /*@__PURE__*/ Schema.Struct({
    modernizationCompatibility: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshFeatureSpec" });

export interface NamespaceActuationFeatureSpec {
  /** actuation_mode controls the behavior of the controller */
  actuationMode?:
    | "ACTUATION_MODE_UNSPECIFIED"
    | "ACTUATION_MODE_CREATE_AND_DELETE_IF_CREATED"
    | "ACTUATION_MODE_ADD_AND_REMOVE_FLEET_LABELS"
    | (string & {});
}

export const NamespaceActuationFeatureSpec: Schema.Codec<NamespaceActuationFeatureSpec> =
  /*@__PURE__*/ Schema.Struct({
    actuationMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "NamespaceActuationFeatureSpec" });

export interface AppDevExperienceFeatureSpec {}

export const AppDevExperienceFeatureSpec: Schema.Codec<AppDevExperienceFeatureSpec> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AppDevExperienceFeatureSpec",
  });

export interface FeatureSpec {
  /** Immutable. Specifies CA configuration. */
  provisionGoogleCa?:
    | "GOOGLE_CA_PROVISIONING_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | "ENABLED_WITH_MANAGED_CA"
    | "ENABLED_WITH_DEFAULT_CA"
    | (string & {});
  /** Specifies default membership spec. Users can override the default in the member_configs for each member. */
  defaultConfig?: MembershipSpec;
}

export const FeatureSpec: Schema.Codec<FeatureSpec> =
  /*@__PURE__*/ Schema.Struct({
    provisionGoogleCa: Schema.optional(Schema.String),
    defaultConfig: Schema.optional(MembershipSpec),
  }).annotate({ identifier: "FeatureSpec" });

export interface CommonFeatureSpec {
  /** RBAC Role Binding Actuation feature spec */
  rbacrolebindingactuation?: RBACRoleBindingActuationFeatureSpec;
  /** Workload Identity feature spec. */
  workloadidentity?: WorkloadIdentityFeatureSpec;
  /** Servicemesh feature spec. */
  mesh?: ServiceMeshFeatureSpec;
  /** Namespace Actuation feature spec */
  namespaceactuation?: NamespaceActuationFeatureSpec;
  /** Appdevexperience specific spec. */
  appdevexperience?: AppDevExperienceFeatureSpec;
  /** FleetObservability feature spec. */
  fleetobservability?: FleetObservabilityFeatureSpec;
  /** DataplaneV2 feature spec. */
  dataplanev2?: DataplaneV2FeatureSpec;
  /** Multicluster Ingress-specific spec. */
  multiclusteringress?: MultiClusterIngressFeatureSpec;
  /** ClusterUpgrade (fleet-based) feature spec. */
  clusterupgrade?: ClusterUpgradeFleetSpec;
  /** Cloud Audit Logging-specific spec. */
  cloudauditlogging?: CloudAuditLoggingFeatureSpec;
  /** Workload Certificate spec. */
  workloadcertificate?: FeatureSpec;
}

export const CommonFeatureSpec: Schema.Codec<CommonFeatureSpec> =
  /*@__PURE__*/ Schema.Struct({
    rbacrolebindingactuation: Schema.optional(
      RBACRoleBindingActuationFeatureSpec,
    ),
    workloadidentity: Schema.optional(WorkloadIdentityFeatureSpec),
    mesh: Schema.optional(ServiceMeshFeatureSpec),
    namespaceactuation: Schema.optional(NamespaceActuationFeatureSpec),
    appdevexperience: Schema.optional(AppDevExperienceFeatureSpec),
    fleetobservability: Schema.optional(FleetObservabilityFeatureSpec),
    dataplanev2: Schema.optional(DataplaneV2FeatureSpec),
    multiclusteringress: Schema.optional(MultiClusterIngressFeatureSpec),
    clusterupgrade: Schema.optional(ClusterUpgradeFleetSpec),
    cloudauditlogging: Schema.optional(CloudAuditLoggingFeatureSpec),
    workloadcertificate: Schema.optional(FeatureSpec),
  }).annotate({ identifier: "CommonFeatureSpec" });

export interface ClusterUpgradeMembershipGKEUpgradeState {
  /** Status of the upgrade. */
  status?: ClusterUpgradeUpgradeStatus;
  /** Which upgrade to track the state. */
  upgrade?: ClusterUpgradeGKEUpgrade;
}

export const ClusterUpgradeMembershipGKEUpgradeState: Schema.Codec<ClusterUpgradeMembershipGKEUpgradeState> =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(ClusterUpgradeUpgradeStatus),
    upgrade: Schema.optional(ClusterUpgradeGKEUpgrade),
  }).annotate({ identifier: "ClusterUpgradeMembershipGKEUpgradeState" });

export interface ClusterUpgradeMembershipState {
  /** Whether this membership is ignored by the feature. For example, manually upgraded clusters can be ignored if they are newer than the default versions of its release channel. */
  ignored?: ClusterUpgradeIgnoredMembership;
  /** Actual upgrade state against desired. */
  upgrades?: ReadonlyArray<ClusterUpgradeMembershipGKEUpgradeState>;
  /** Fully qualified scope names that this clusters is bound to which also have rollout sequencing enabled. */
  scopes?: ReadonlyArray<string>;
}

export const ClusterUpgradeMembershipState: Schema.Codec<ClusterUpgradeMembershipState> =
  /*@__PURE__*/ Schema.Struct({
    ignored: Schema.optional(ClusterUpgradeIgnoredMembership),
    upgrades: Schema.optional(
      Schema.Array(ClusterUpgradeMembershipGKEUpgradeState),
    ),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ClusterUpgradeMembershipState" });

export interface NamespaceActuationMembershipState {}

export const NamespaceActuationMembershipState: Schema.Codec<NamespaceActuationMembershipState> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "NamespaceActuationMembershipState",
  });

export interface FleetObservabilityMembershipState {}

export const FleetObservabilityMembershipState: Schema.Codec<FleetObservabilityMembershipState> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "FleetObservabilityMembershipState",
  });

export interface MembershipFeatureState {
  /** ClusterUpgrade state. */
  clusterupgrade?: ClusterUpgradeMembershipState;
  /** Policycontroller-specific state. */
  policycontroller?: PolicyControllerMembershipState;
  /** Service Mesh-specific state. */
  servicemesh?: ServiceMeshMembershipState;
  /** The high-level state of this Feature for a single membership. */
  state?: FeatureState;
  /** FNS Actuation membership state */
  namespaceactuation?: NamespaceActuationMembershipState;
  /** Config Management-specific state. */
  configmanagement?: ConfigManagementMembershipState;
  /** Workload Identity membership specific state. */
  workloadidentity?: WorkloadIdentityMembershipState;
  /** Metering-specific state. */
  metering?: MeteringMembershipState;
  /** Identity Service-specific state. */
  identityservice?: IdentityServiceMembershipState;
  /** Appdevexperience specific state. */
  appdevexperience?: AppDevExperienceFeatureState;
  /** Fleet observability membership state. */
  fleetobservability?: FleetObservabilityMembershipState;
}

export const MembershipFeatureState: Schema.Codec<MembershipFeatureState> =
  /*@__PURE__*/ Schema.Struct({
    clusterupgrade: Schema.optional(ClusterUpgradeMembershipState),
    policycontroller: Schema.optional(PolicyControllerMembershipState),
    servicemesh: Schema.optional(ServiceMeshMembershipState),
    state: Schema.optional(FeatureState),
    namespaceactuation: Schema.optional(NamespaceActuationMembershipState),
    configmanagement: Schema.optional(ConfigManagementMembershipState),
    workloadidentity: Schema.optional(WorkloadIdentityMembershipState),
    metering: Schema.optional(MeteringMembershipState),
    identityservice: Schema.optional(IdentityServiceMembershipState),
    appdevexperience: Schema.optional(AppDevExperienceFeatureState),
    fleetobservability: Schema.optional(FleetObservabilityMembershipState),
  }).annotate({ identifier: "MembershipFeatureState" });

export interface Feature {
  /** Output only. When the Feature resource was last updated. */
  updateTime?: string;
  /** Output only. State of the Feature resource itself. */
  resourceState?: FeatureResourceState;
  /** Output only. List of locations that could not be reached while fetching this feature. */
  unreachable?: ReadonlyArray<string>;
  /** Optional. Scope-specific configuration for this Feature. If this Feature does not support any per-Scope configuration, this field may be unused. The keys indicate which Scope the configuration is for, in the form: `projects/{p}/locations/global/scopes/{s}` Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature's project. {p} will always be returned as the project number, but the project ID is also accepted during input. If the same Scope is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature. */
  scopeSpecs?: Record<string, ScopeFeatureSpec>;
  /** Output only. The Fleet-wide Feature state. */
  state?: CommonFeatureState;
  /** Output only. Scope-specific Feature status. If this Feature does report any per-Scope status, this field may be unused. The keys indicate which Scope the state is for, in the form: `projects/{p}/locations/global/scopes/{s}` Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature's project. */
  scopeStates?: Record<string, ScopeFeatureState>;
  /** Output only. When the Feature resource was deleted. */
  deleteTime?: string;
  /** Labels for this Feature. */
  labels?: Record<string, string>;
  /** Optional. Fleet-wide Feature configuration. If this Feature does not support any Fleet-wide configuration, this field may be unused. */
  spec?: CommonFeatureSpec;
  /** Optional. Membership-specific configuration for this Feature. If this Feature does not support any per-Membership configuration, this field may be unused. The keys indicate which Membership the configuration is for, in the form: `projects/{p}/locations/{l}/memberships/{m}` Where {p} is the project, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} WILL match the Feature's project. {p} will always be returned as the project number, but the project ID is also accepted during input. If the same Membership is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature. */
  membershipSpecs?: Record<string, MembershipFeatureSpec>;
  /** Output only. When the Feature resource was created. */
  createTime?: string;
  /** Output only. Membership-specific Feature status. If this Feature does report any per-Membership status, this field may be unused. The keys indicate which Membership the state is for, in the form: `projects/{p}/locations/{l}/memberships/{m}` Where {p} is the project number, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} MUST match the Feature's project number. */
  membershipStates?: Record<string, MembershipFeatureState>;
  /** Optional. Feature configuration applicable to all memberships of the fleet. */
  fleetDefaultMemberConfig?: CommonFleetDefaultMemberConfigSpec;
  /** Output only. The full, unique name of this Feature resource in the format `projects/* /locations/* /features/*`. */
  name?: string;
}

export const Feature: Schema.Codec<Feature> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    resourceState: Schema.optional(FeatureResourceState),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    scopeSpecs: Schema.optional(Schema.Record(Schema.String, ScopeFeatureSpec)),
    state: Schema.optional(CommonFeatureState),
    scopeStates: Schema.optional(
      Schema.Record(Schema.String, ScopeFeatureState),
    ),
    deleteTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    spec: Schema.optional(CommonFeatureSpec),
    membershipSpecs: Schema.optional(
      Schema.Record(Schema.String, MembershipFeatureSpec),
    ),
    createTime: Schema.optional(Schema.String),
    membershipStates: Schema.optional(
      Schema.Record(Schema.String, MembershipFeatureState),
    ),
    fleetDefaultMemberConfig: Schema.optional(
      CommonFleetDefaultMemberConfigSpec,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Feature" });

export interface GenerateMembershipRBACRoleBindingYAMLResponse {
  /** a yaml text blob including the RBAC policies. */
  roleBindingsYaml?: string;
}

export const GenerateMembershipRBACRoleBindingYAMLResponse: Schema.Codec<GenerateMembershipRBACRoleBindingYAMLResponse> =
  /*@__PURE__*/ Schema.Struct({
    roleBindingsYaml: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateMembershipRBACRoleBindingYAMLResponse" });

export interface ValidateCreateMembershipResponse {
  /** Wraps all the validator results. */
  validationResults?: ReadonlyArray<ValidationResult>;
}

export const ValidateCreateMembershipResponse: Schema.Codec<ValidateCreateMembershipResponse> =
  /*@__PURE__*/ Schema.Struct({
    validationResults: Schema.optional(Schema.Array(ValidationResult)),
  }).annotate({ identifier: "ValidateCreateMembershipResponse" });

export interface MembershipBinding {
  /** Output only. When the membership binding was created. */
  createTime?: string;
  /** Output only. When the membership binding was last updated. */
  updateTime?: string;
  /** Output only. When the membership binding was deleted. */
  deleteTime?: string;
  /** The resource name for the membershipbinding itself `projects/{project}/locations/{location}/memberships/{membership}/bindings/{membershipbinding}` */
  name?: string;
  /** Output only. Google-generated UUID for this resource. This is unique across all membershipbinding resources. If a membershipbinding resource is deleted and another resource with the same name is created, it gets a different uid. */
  uid?: string;
  /** Optional. Labels for this MembershipBinding. */
  labels?: Record<string, string>;
  /** A Scope resource name in the format `projects/* /locations/* /scopes/*`. */
  scope?: string;
  /** Output only. State of the membership binding resource. */
  state?: MembershipBindingLifecycleState;
}

export const MembershipBinding: Schema.Codec<MembershipBinding> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    scope: Schema.optional(Schema.String),
    state: Schema.optional(MembershipBindingLifecycleState),
  }).annotate({ identifier: "MembershipBinding" });

export interface UpgradeRolloutSequenceRequest {
  /** Required. The type of upgrade. */
  upgradeType?:
    | "UPGRADE_TYPE_UNSPECIFIED"
    | "CONTROL_PLANE"
    | "NODE"
    | (string & {});
  /** Required. GKE version to upgrade to. A valid GKE version available on the release channel used by the sequence. Patch versions from less conservative channels are allowed if their minor version is already available in the sequence's channel. This is similar to single-cluster upgrade rules, see https://cloud.google.com/kubernetes-engine/docs/how-to/upgrading-a-cluster#supported-versions Example: With the following versions available on the RAPID and REGULAR channels: * REGULAR: 1.35.3-gke.123000 * RAPID: 1.36.4-gke.321000, 1.35.6-gke.045000 Valid versions are 1.35.3-gke.123, 1.35.6-gke.045000 Aliases like `latest` are supported. For more information on valid upgrade versions and specifying cluster versions, see: https://cloud.google.com/kubernetes-engine/versioning#specifying_cluster_version */
  version?: string;
  /** Optional. If set to true, any rollout already running on the first stage of the sequence will be cancelled to allow for the creation of the new rollout. */
  force?: boolean;
}

export const UpgradeRolloutSequenceRequest: Schema.Codec<UpgradeRolloutSequenceRequest> =
  /*@__PURE__*/ Schema.Struct({
    upgradeType: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "UpgradeRolloutSequenceRequest" });

export interface ListFeaturesResponse {
  /** A token to request the next page of resources from the `ListFeatures` method. The value of an empty string means that there are no more resources to return. */
  nextPageToken?: string;
  /** The list of matching Features */
  resources?: ReadonlyArray<Feature>;
}

export const ListFeaturesResponse: Schema.Codec<ListFeaturesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(Feature)),
  }).annotate({ identifier: "ListFeaturesResponse" });

export interface ValidateCreateMembershipRequest {
  /** Required. Membership resource to be created. */
  membership?: Membership;
  /** Required. Client chosen membership id. */
  membershipId?: string;
}

export const ValidateCreateMembershipRequest: Schema.Codec<ValidateCreateMembershipRequest> =
  /*@__PURE__*/ Schema.Struct({
    membership: Schema.optional(Membership),
    membershipId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValidateCreateMembershipRequest" });

export interface ResumeRolloutRequest {
  /** Optional. The duration to offset the Rollout schedule by. */
  scheduleOffset?: string;
  /** Optional. If set, resume rollout will be executed in dry-run mode. */
  validateOnly?: boolean;
}

export const ResumeRolloutRequest: Schema.Codec<ResumeRolloutRequest> =
  /*@__PURE__*/ Schema.Struct({
    scheduleOffset: Schema.optional(Schema.String),
    validateOnly: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ResumeRolloutRequest" });

export interface ListRolloutSequencesResponse {
  /** The rollout sequences from the specified parent resource. */
  rolloutSequences?: ReadonlyArray<RolloutSequence>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListRolloutSequencesResponse: Schema.Codec<ListRolloutSequencesResponse> =
  /*@__PURE__*/ Schema.Struct({
    rolloutSequences: Schema.optional(Schema.Array(RolloutSequence)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListRolloutSequencesResponse" });

export interface ListPermittedScopesResponse {
  /** A token to request the next page of resources from the `ListPermittedScopes` method. The value of an empty string means that there are no more resources to return. */
  nextPageToken?: string;
  /** The list of permitted Scopes */
  scopes?: ReadonlyArray<Scope>;
}

export const ListPermittedScopesResponse: Schema.Codec<ListPermittedScopesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Scope)),
  }).annotate({ identifier: "ListPermittedScopesResponse" });

export interface Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
}

export const Policy: Schema.Codec<Policy> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(Binding)),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Policy" });

export interface ListMembershipRBACRoleBindingsResponse {
  /** The list of Membership RBACRoleBindings. */
  rbacrolebindings?: ReadonlyArray<RBACRoleBinding>;
  /** A token to request the next page of resources from the `ListMembershipRBACRoleBindings` method. The value of an empty string means that there are no more resources to return. */
  nextPageToken?: string;
  /** List of locations that could not be reached while fetching this list. */
  unreachable?: ReadonlyArray<string>;
}

export const ListMembershipRBACRoleBindingsResponse: Schema.Codec<ListMembershipRBACRoleBindingsResponse> =
  /*@__PURE__*/ Schema.Struct({
    rbacrolebindings: Schema.optional(Schema.Array(RBACRoleBinding)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListMembershipRBACRoleBindingsResponse" });

export interface ListScopeRBACRoleBindingsResponse {
  /** The list of Scope RBACRoleBindings. */
  rbacrolebindings?: ReadonlyArray<RBACRoleBinding>;
  /** A token to request the next page of resources from the `ListScopeRBACRoleBindings` method. The value of an empty string means that there are no more resources to return. */
  nextPageToken?: string;
}

export const ListScopeRBACRoleBindingsResponse: Schema.Codec<ListScopeRBACRoleBindingsResponse> =
  /*@__PURE__*/ Schema.Struct({
    rbacrolebindings: Schema.optional(Schema.Array(RBACRoleBinding)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListScopeRBACRoleBindingsResponse" });

export interface ListMembershipBindingsResponse {
  /** A token to request the next page of resources from the `ListMembershipBindings` method. The value of an empty string means that there are no more resources to return. */
  nextPageToken?: string;
  /** The list of membership_bindings */
  membershipBindings?: ReadonlyArray<MembershipBinding>;
  /** List of locations that could not be reached while fetching this list. */
  unreachable?: ReadonlyArray<string>;
}

export const ListMembershipBindingsResponse: Schema.Codec<ListMembershipBindingsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    membershipBindings: Schema.optional(Schema.Array(MembershipBinding)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListMembershipBindingsResponse" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Codec<ListLocationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const SetIamPolicyRequest: Schema.Codec<SetIamPolicyRequest> =
  /*@__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetIamPolicyRequest" });

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
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse = /*@__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse = /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
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
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ ListOperationsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResumeProjectsLocationsRolloutsRequest {
  /** Required. The name of the rollout to resume. projects/{project}/locations/{location}/rollouts/{rollout} */
  name: string;
  /** Request body */
  body?: ResumeRolloutRequest;
}

export const ResumeProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResumeRolloutRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}:resume", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ResumeProjectsLocationsRolloutsRequest>;

export type ResumeProjectsLocationsRolloutsResponse = Operation;
export const ResumeProjectsLocationsRolloutsResponse = /*@__PURE__*/ Operation;

export type ResumeProjectsLocationsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resume a paused Rollout. The rollout will be resumed and allowed to be started on clusters. */
export const resumeProjectsLocationsRollouts: API.OperationMethod<
  ResumeProjectsLocationsRolloutsRequest,
  ResumeProjectsLocationsRolloutsResponse,
  ResumeProjectsLocationsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResumeProjectsLocationsRolloutsRequest,
  output: ResumeProjectsLocationsRolloutsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PauseProjectsLocationsRolloutsRequest {
  /** Required. The name of the rollout to pause. projects/{project}/locations/{location}/rollouts/{rollout} */
  name: string;
  /** Request body */
  body?: PauseRolloutRequest;
}

export const PauseProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PauseRolloutRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}:pause", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PauseProjectsLocationsRolloutsRequest>;

export type PauseProjectsLocationsRolloutsResponse = Operation;
export const PauseProjectsLocationsRolloutsResponse = /*@__PURE__*/ Operation;

export type PauseProjectsLocationsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Pauses a running Rollout. The rollout will not be started on new clusters, however the rollout running on the cluster will be allowed to finish. */
export const pauseProjectsLocationsRollouts: API.OperationMethod<
  PauseProjectsLocationsRolloutsRequest,
  PauseProjectsLocationsRolloutsResponse,
  PauseProjectsLocationsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PauseProjectsLocationsRolloutsRequest,
  output: PauseProjectsLocationsRolloutsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRolloutsRequest {
  /** Required. The name of the rollout to delete. projects/{project}/locations/{location}/rollouts/{rollout} */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsRolloutsRequest>;

export type DeleteProjectsLocationsRolloutsResponse = Operation;
export const DeleteProjectsLocationsRolloutsResponse = /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a Rollout. */
export const deleteProjectsLocationsRollouts: API.OperationMethod<
  DeleteProjectsLocationsRolloutsRequest,
  DeleteProjectsLocationsRolloutsResponse,
  DeleteProjectsLocationsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRolloutsRequest,
  output: DeleteProjectsLocationsRolloutsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRolloutsRequest {
  /** Required. The parent, which owns this collection of rollout. Format: projects/{project}/locations/{location} */
  parent: string;
  /** The maximum number of rollout to return. The service may return fewer than this value. If unspecified, at most 50 rollouts will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** A page token, received from a previous `ListRollouts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRollouts` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Lists Rollouts that match the filter expression, following the syntax outlined in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/rollouts" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRolloutsRequest>;

export type ListProjectsLocationsRolloutsResponse = ListRolloutsResponse;
export const ListProjectsLocationsRolloutsResponse =
  /*@__PURE__*/ ListRolloutsResponse;

export type ListProjectsLocationsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the list of all rollouts. */
export const listProjectsLocationsRollouts: API.PaginatedOperationMethod<
  ListProjectsLocationsRolloutsRequest,
  ListProjectsLocationsRolloutsResponse,
  ListProjectsLocationsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRolloutsRequest,
  output: ListProjectsLocationsRolloutsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsLocationsRolloutsRequest {
  /** Required. The name of the rollout to cancel. projects/{project}/locations/{location}/rollouts/{rollout} */
  name: string;
  /** Request body */
  body?: CancelRolloutRequest;
}

export const CancelProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelRolloutRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsLocationsRolloutsRequest>;

export type CancelProjectsLocationsRolloutsResponse = Operation;
export const CancelProjectsLocationsRolloutsResponse = /*@__PURE__*/ Operation;

export type CancelProjectsLocationsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels a Rollout. The rollout will not be started on new clusters, however the rollout running on the cluster will be allowed to finish. */
export const cancelProjectsLocationsRollouts: API.OperationMethod<
  CancelProjectsLocationsRolloutsRequest,
  CancelProjectsLocationsRolloutsResponse,
  CancelProjectsLocationsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsRolloutsRequest,
  output: CancelProjectsLocationsRolloutsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ForceCompleteStageProjectsLocationsRolloutsRequest {
  /** Required. The name of the rollout. Format: projects/{project}/locations/{location}/rollouts/{rollout} */
  name: string;
  /** Request body */
  body?: ForceCompleteRolloutStageRequest;
}

export const ForceCompleteStageProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ForceCompleteRolloutStageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+name}:forceCompleteStage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ForceCompleteStageProjectsLocationsRolloutsRequest>;

export type ForceCompleteStageProjectsLocationsRolloutsResponse = Operation;
export const ForceCompleteStageProjectsLocationsRolloutsResponse =
  /*@__PURE__*/ Operation;

export type ForceCompleteStageProjectsLocationsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Force-completes a rollout stage. Only the active stage of an active rollout can be force-completed. */
export const forceCompleteStageProjectsLocationsRollouts: API.OperationMethod<
  ForceCompleteStageProjectsLocationsRolloutsRequest,
  ForceCompleteStageProjectsLocationsRolloutsResponse,
  ForceCompleteStageProjectsLocationsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ForceCompleteStageProjectsLocationsRolloutsRequest,
  output: ForceCompleteStageProjectsLocationsRolloutsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRolloutsRequest {
  /** Required. The name of the rollout to retrieve. projects/{project}/locations/{location}/rollouts/{rollout} */
  name: string;
}

export const GetProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRolloutsRequest>;

export type GetProjectsLocationsRolloutsResponse = Rollout;
export const GetProjectsLocationsRolloutsResponse = /*@__PURE__*/ Rollout;

export type GetProjectsLocationsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a single rollout. */
export const getProjectsLocationsRollouts: API.OperationMethod<
  GetProjectsLocationsRolloutsRequest,
  GetProjectsLocationsRolloutsResponse,
  GetProjectsLocationsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRolloutsRequest,
  output: GetProjectsLocationsRolloutsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsRolloutSequencesRequest {
  /** Required. The name of the rollout sequence to retrieve. projects/{project}/locations/{location}/rolloutSequences/{rollout_sequence} */
  name: string;
}

export const GetProjectsLocationsRolloutSequencesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRolloutSequencesRequest>;

export type GetProjectsLocationsRolloutSequencesResponse = RolloutSequence;
export const GetProjectsLocationsRolloutSequencesResponse =
  /*@__PURE__*/ RolloutSequence;

export type GetProjectsLocationsRolloutSequencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single rollout sequence. */
export const getProjectsLocationsRolloutSequences: API.OperationMethod<
  GetProjectsLocationsRolloutSequencesRequest,
  GetProjectsLocationsRolloutSequencesResponse,
  GetProjectsLocationsRolloutSequencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRolloutSequencesRequest,
  output: GetProjectsLocationsRolloutSequencesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRolloutSequencesRequest {
  /** Optional. A page token, received from a previous `ListRolloutSequences` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRolloutSequences` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Lists Rollout Sequences that match the filter expression, following the syntax outlined in https://google.aip.dev/160. */
  filter?: string;
  /** Required. The parent, which owns this collection of rollout sequences. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. The maximum number of rollout sequences to return. The service may return fewer than this value. If unspecified, at most 50 rollout sequences will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsRolloutSequencesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/rolloutSequences" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRolloutSequencesRequest>;

export type ListProjectsLocationsRolloutSequencesResponse =
  ListRolloutSequencesResponse;
export const ListProjectsLocationsRolloutSequencesResponse =
  /*@__PURE__*/ ListRolloutSequencesResponse;

export type ListProjectsLocationsRolloutSequencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the list of all rollout sequences. */
export const listProjectsLocationsRolloutSequences: API.PaginatedOperationMethod<
  ListProjectsLocationsRolloutSequencesRequest,
  ListProjectsLocationsRolloutSequencesResponse,
  ListProjectsLocationsRolloutSequencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRolloutSequencesRequest,
  output: ListProjectsLocationsRolloutSequencesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsRolloutSequencesRequest {
  /** Required. The name of the rollout sequence to delete. projects/{project}/locations/{location}/rolloutSequences/{rollout_sequence} */
  name: string;
}

export const DeleteProjectsLocationsRolloutSequencesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsRolloutSequencesRequest>;

export type DeleteProjectsLocationsRolloutSequencesResponse = Operation;
export const DeleteProjectsLocationsRolloutSequencesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsRolloutSequencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a RolloutSequence. */
export const deleteProjectsLocationsRolloutSequences: API.OperationMethod<
  DeleteProjectsLocationsRolloutSequencesRequest,
  DeleteProjectsLocationsRolloutSequencesResponse,
  DeleteProjectsLocationsRolloutSequencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRolloutSequencesRequest,
  output: DeleteProjectsLocationsRolloutSequencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpgradeProjectsLocationsRolloutSequencesRequest {
  /** Required. The name of the rollout sequence. Format: projects/{project}/locations/{location}/rolloutSequences/{rollout_sequence} */
  name: string;
  /** Request body */
  body?: UpgradeRolloutSequenceRequest;
}

export const UpgradeProjectsLocationsRolloutSequencesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpgradeRolloutSequenceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}:upgrade", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpgradeProjectsLocationsRolloutSequencesRequest>;

export type UpgradeProjectsLocationsRolloutSequencesResponse = Operation;
export const UpgradeProjectsLocationsRolloutSequencesResponse =
  /*@__PURE__*/ Operation;

export type UpgradeProjectsLocationsRolloutSequencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Upgrades a rollout sequence. */
export const upgradeProjectsLocationsRolloutSequences: API.OperationMethod<
  UpgradeProjectsLocationsRolloutSequencesRequest,
  UpgradeProjectsLocationsRolloutSequencesResponse,
  UpgradeProjectsLocationsRolloutSequencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpgradeProjectsLocationsRolloutSequencesRequest,
  output: UpgradeProjectsLocationsRolloutSequencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsRolloutSequencesRequest {
  /** Required. The parent resource where this rollout sequence will be created. projects/{project}/locations/{location} */
  parent: string;
  /** Required. User provided identifier that is used as part of the resource name; must conform to RFC-1034 and additionally restrict to lower-cased letters. This comes out roughly to: /^a-z+[a-z0-9]$/ */
  rolloutSequenceId?: string;
  /** Request body */
  body?: RolloutSequence;
}

export const CreateProjectsLocationsRolloutSequencesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    rolloutSequenceId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("rolloutSequenceId"),
    ),
    body: Schema.optional(RolloutSequence).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/rolloutSequences",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsRolloutSequencesRequest>;

export type CreateProjectsLocationsRolloutSequencesResponse = Operation;
export const CreateProjectsLocationsRolloutSequencesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsRolloutSequencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new rollout sequence resource. */
export const createProjectsLocationsRolloutSequences: API.OperationMethod<
  CreateProjectsLocationsRolloutSequencesRequest,
  CreateProjectsLocationsRolloutSequencesResponse,
  CreateProjectsLocationsRolloutSequencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRolloutSequencesRequest,
  output: CreateProjectsLocationsRolloutSequencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsRolloutSequencesRequest {
  /** Optional. The list of fields to update. */
  updateMask?: string;
  /** Identifier. Name of the rollout sequence in the format of: projects/{PROJECT_ID}/locations/global/rolloutSequences/{NAME} */
  name: string;
  /** Request body */
  body?: RolloutSequence;
}

export const PatchProjectsLocationsRolloutSequencesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RolloutSequence).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsRolloutSequencesRequest>;

export type PatchProjectsLocationsRolloutSequencesResponse = Operation;
export const PatchProjectsLocationsRolloutSequencesResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsRolloutSequencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a rollout sequence. */
export const patchProjectsLocationsRolloutSequences: API.OperationMethod<
  PatchProjectsLocationsRolloutSequencesRequest,
  PatchProjectsLocationsRolloutSequencesResponse,
  PatchProjectsLocationsRolloutSequencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRolloutSequencesRequest,
  output: PatchProjectsLocationsRolloutSequencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsMembershipsRequest {
  /** Required. The parent (project and location) where the Memberships will be created. Specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. Client chosen ID for the membership. `membership_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. */
  membershipId?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Membership;
}

export const CreateProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    membershipId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("membershipId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Membership).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/memberships",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsMembershipsRequest>;

export type CreateProjectsLocationsMembershipsResponse = Operation;
export const CreateProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster. */
export const createProjectsLocationsMemberships: API.OperationMethod<
  CreateProjectsLocationsMembershipsRequest,
  CreateProjectsLocationsMembershipsResponse,
  CreateProjectsLocationsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMembershipsRequest,
  output: CreateProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ValidateCreateProjectsLocationsMembershipsRequest {
  /** Required. The parent (project and location) where the Memberships will be created. Specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Request body */
  body?: ValidateCreateMembershipRequest;
}

export const ValidateCreateProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ValidateCreateMembershipRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/memberships:validateCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ValidateCreateProjectsLocationsMembershipsRequest>;

export type ValidateCreateProjectsLocationsMembershipsResponse =
  ValidateCreateMembershipResponse;
export const ValidateCreateProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ ValidateCreateMembershipResponse;

export type ValidateCreateProjectsLocationsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available. */
export const validateCreateProjectsLocationsMemberships: API.OperationMethod<
  ValidateCreateProjectsLocationsMembershipsRequest,
  ValidateCreateProjectsLocationsMembershipsResponse,
  ValidateCreateProjectsLocationsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ValidateCreateProjectsLocationsMembershipsRequest,
  output: ValidateCreateProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateConnectManifestProjectsLocationsMembershipsRequest {
  /** Optional. Namespace for GKE Connect agent resources. Defaults to `gke-connect`. The Connect Agent is authorized automatically when run in the default namespace. Otherwise, explicit authorization must be granted with an additional IAM binding. */
  namespace?: string;
  /** Optional. The registry to fetch the connect agent image from. Defaults to gcr.io/gkeconnect. */
  registry?: string;
  /** Optional. URI of a proxy if connectivity from the agent to gkeconnect.googleapis.com requires the use of a proxy. Format must be in the form `http(s)://{proxy_address}`, depending on the HTTP/HTTPS protocol supported by the proxy. This will direct the connect agent's outbound traffic through a HTTP(S) proxy. */
  proxy?: string;
  /** Optional. If true, generate the resources for upgrade only. Some resources generated only for installation (e.g. secrets) will be excluded. */
  isUpgrade?: boolean;
  /** Required. The Membership resource name the Agent will associate with, in the format `projects/* /locations/* /memberships/*`. */
  name: string;
  /** Optional. The image pull secret content for the registry, if not public. */
  imagePullSecretContent?: string;
  /** Optional. The Connect agent version to use. Defaults to the most current version. */
  version?: string;
}

export const GenerateConnectManifestProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ Schema.Struct({
    namespace: Schema.optional(Schema.String).pipe(T.HttpQuery("namespace")),
    registry: Schema.optional(Schema.String).pipe(T.HttpQuery("registry")),
    proxy: Schema.optional(Schema.String).pipe(T.HttpQuery("proxy")),
    isUpgrade: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("isUpgrade")),
    name: Schema.String.pipe(T.HttpPath("name")),
    imagePullSecretContent: Schema.optional(Schema.String).pipe(
      T.HttpQuery("imagePullSecretContent"),
    ),
    version: Schema.optional(Schema.String).pipe(T.HttpQuery("version")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}:generateConnectManifest" }),
    svc,
  ) as unknown as Schema.Codec<GenerateConnectManifestProjectsLocationsMembershipsRequest>;

export type GenerateConnectManifestProjectsLocationsMembershipsResponse =
  GenerateConnectManifestResponse;
export const GenerateConnectManifestProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ GenerateConnectManifestResponse;

export type GenerateConnectManifestProjectsLocationsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly. */
export const generateConnectManifestProjectsLocationsMemberships: API.OperationMethod<
  GenerateConnectManifestProjectsLocationsMembershipsRequest,
  GenerateConnectManifestProjectsLocationsMembershipsResponse,
  GenerateConnectManifestProjectsLocationsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GenerateConnectManifestProjectsLocationsMembershipsRequest,
  output: GenerateConnectManifestProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsMembershipsRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Mask of fields to update. */
  updateMask?: string;
  /** Required. The Membership resource name in the format `projects/* /locations/* /memberships/*`. */
  name: string;
  /** Request body */
  body?: Membership;
}

export const PatchProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Membership).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsMembershipsRequest>;

export type PatchProjectsLocationsMembershipsResponse = Operation;
export const PatchProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing Membership. */
export const patchProjectsLocationsMemberships: API.OperationMethod<
  PatchProjectsLocationsMembershipsRequest,
  PatchProjectsLocationsMembershipsResponse,
  PatchProjectsLocationsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMembershipsRequest,
  output: PatchProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsMembershipsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsMembershipsRequest>;

export type SetIamPolicyProjectsLocationsMembershipsResponse = Policy;
export const SetIamPolicyProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsMemberships: API.OperationMethod<
  SetIamPolicyProjectsLocationsMembershipsRequest,
  SetIamPolicyProjectsLocationsMembershipsResponse,
  SetIamPolicyProjectsLocationsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsMembershipsRequest,
  output: SetIamPolicyProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAdminProjectsLocationsMembershipsRequest {
  /** Optional. Token returned by previous call to `ListAdminClusterMemberships` which specifies the position in the list from where to continue listing the resources. */
  pageToken?: string;
  /** Optional. Lists Memberships of admin clusters that match the filter expression. */
  filter?: string;
  /** Required. The parent (project and location) where the Memberships of admin cluster will be listed. Specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. */
  pageSize?: number;
  /** Optional. One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering. */
  orderBy?: string;
}

export const ListAdminProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/memberships:listAdmin" }),
    svc,
  ) as unknown as Schema.Codec<ListAdminProjectsLocationsMembershipsRequest>;

export type ListAdminProjectsLocationsMembershipsResponse =
  ListAdminClusterMembershipsResponse;
export const ListAdminProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ ListAdminClusterMembershipsResponse;

export type ListAdminProjectsLocationsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Memberships of admin clusters in a given project and location. **This method is only used internally**. */
export const listAdminProjectsLocationsMemberships: API.PaginatedOperationMethod<
  ListAdminProjectsLocationsMembershipsRequest,
  ListAdminProjectsLocationsMembershipsResponse,
  ListAdminProjectsLocationsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAdminProjectsLocationsMembershipsRequest,
  output: ListAdminProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GenerateExclusivityManifestProjectsLocationsMembershipsRequest {
  /** Optional. The YAML manifest of the membership CR retrieved by `kubectl get memberships membership`. Leave empty if the resource does not exist. */
  crManifest?: string;
  /** Required. The Membership resource name in the format `projects/* /locations/* /memberships/*`. */
  name: string;
  /** Optional. The YAML manifest of the membership CRD retrieved by `kubectl get customresourcedefinitions membership`. Leave empty if the resource does not exist. */
  crdManifest?: string;
}

export const GenerateExclusivityManifestProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ Schema.Struct({
    crManifest: Schema.optional(Schema.String).pipe(T.HttpQuery("crManifest")),
    name: Schema.String.pipe(T.HttpPath("name")),
    crdManifest: Schema.optional(Schema.String).pipe(
      T.HttpQuery("crdManifest"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/{+name}:generateExclusivityManifest",
    }),
    svc,
  ) as unknown as Schema.Codec<GenerateExclusivityManifestProjectsLocationsMembershipsRequest>;

export type GenerateExclusivityManifestProjectsLocationsMembershipsResponse =
  GenerateExclusivityManifestResponse;
export const GenerateExclusivityManifestProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ GenerateExclusivityManifestResponse;

export type GenerateExclusivityManifestProjectsLocationsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** GenerateExclusivityManifest generates the manifests to update the exclusivity artifacts in the cluster if needed. Exclusivity artifacts include the Membership custom resource definition (CRD) and the singleton Membership custom resource (CR). Combined with ValidateExclusivity, exclusivity artifacts guarantee that a Kubernetes cluster is only registered to a single GKE Hub. The Membership CRD is versioned, and may require conversion when the GKE Hub API server begins serving a newer version of the CRD and corresponding CR. The response will be the converted CRD and CR if there are any differences between the versions. */
export const generateExclusivityManifestProjectsLocationsMemberships: API.OperationMethod<
  GenerateExclusivityManifestProjectsLocationsMembershipsRequest,
  GenerateExclusivityManifestProjectsLocationsMembershipsResponse,
  GenerateExclusivityManifestProjectsLocationsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GenerateExclusivityManifestProjectsLocationsMembershipsRequest,
  output: GenerateExclusivityManifestProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsMembershipsRequest {
  /** Required. The Membership resource name in the format `projects/* /locations/* /memberships/*`. */
  name: string;
}

export const GetProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsMembershipsRequest>;

export type GetProjectsLocationsMembershipsResponse = Membership;
export const GetProjectsLocationsMembershipsResponse = /*@__PURE__*/ Membership;

export type GetProjectsLocationsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a Membership. */
export const getProjectsLocationsMemberships: API.OperationMethod<
  GetProjectsLocationsMembershipsRequest,
  GetProjectsLocationsMembershipsResponse,
  GetProjectsLocationsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMembershipsRequest,
  output: GetProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsMembershipsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsMembershipsRequest>;

export type TestIamPermissionsProjectsLocationsMembershipsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsMemberships: API.OperationMethod<
  TestIamPermissionsProjectsLocationsMembershipsRequest,
  TestIamPermissionsProjectsLocationsMembershipsResponse,
  TestIamPermissionsProjectsLocationsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsMembershipsRequest,
  output: TestIamPermissionsProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMembershipsRequest {
  /** Required. The parent (project and location) where the Memberships will be listed. Specified in the format `projects/* /locations/*`. `projects/* /locations/-` list memberships in all the regions. */
  parent: string;
  /** Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. */
  pageSize?: number;
  /** Optional. One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering. */
  orderBy?: string;
  /** Optional. Token returned by previous call to `ListMemberships` which specifies the position in the list from where to continue listing the resources. */
  pageToken?: string;
  /** Optional. Lists Memberships that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Name is `bar` in project `foo-proj` and location `global`: name = "projects/foo-proj/locations/global/membership/bar" - Memberships that have a label called `foo`: labels.foo:* - Memberships that have a label called `foo` whose value is `bar`: labels.foo = bar - Memberships in the CREATING state: state = CREATING */
  filter?: string;
}

export const ListProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/memberships" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsMembershipsRequest>;

export type ListProjectsLocationsMembershipsResponse = ListMembershipsResponse;
export const ListProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ ListMembershipsResponse;

export type ListProjectsLocationsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Memberships in a given project and location. */
export const listProjectsLocationsMemberships: API.PaginatedOperationMethod<
  ListProjectsLocationsMembershipsRequest,
  ListProjectsLocationsMembershipsResponse,
  ListProjectsLocationsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMembershipsRequest,
  output: ListProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsMembershipsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsMembershipsRequest>;

export type GetIamPolicyProjectsLocationsMembershipsResponse = Policy;
export const GetIamPolicyProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsMemberships: API.OperationMethod<
  GetIamPolicyProjectsLocationsMembershipsRequest,
  GetIamPolicyProjectsLocationsMembershipsResponse,
  GetIamPolicyProjectsLocationsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsMembershipsRequest,
  output: GetIamPolicyProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ValidateExclusivityProjectsLocationsMembershipsRequest {
  /** Optional. The YAML of the membership CR in the cluster. Empty if the membership CR does not exist. */
  crManifest?: string;
  /** Required. The intended membership name under the `parent`. This method only does validation in anticipation of a CreateMembership call with the same name. */
  intendedMembership?: string;
  /** Required. The parent (project and location) where the Memberships will be created. Specified in the format `projects/* /locations/*`. */
  parent: string;
}

export const ValidateExclusivityProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ Schema.Struct({
    crManifest: Schema.optional(Schema.String).pipe(T.HttpQuery("crManifest")),
    intendedMembership: Schema.optional(Schema.String).pipe(
      T.HttpQuery("intendedMembership"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/{+parent}/memberships:validateExclusivity",
    }),
    svc,
  ) as unknown as Schema.Codec<ValidateExclusivityProjectsLocationsMembershipsRequest>;

export type ValidateExclusivityProjectsLocationsMembershipsResponse =
  ValidateExclusivityResponse;
export const ValidateExclusivityProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ ValidateExclusivityResponse;

export type ValidateExclusivityProjectsLocationsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** ValidateExclusivity validates the state of exclusivity in the cluster. The validation does not depend on an existing Hub membership resource. */
export const validateExclusivityProjectsLocationsMemberships: API.OperationMethod<
  ValidateExclusivityProjectsLocationsMembershipsRequest,
  ValidateExclusivityProjectsLocationsMembershipsResponse,
  ValidateExclusivityProjectsLocationsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ValidateExclusivityProjectsLocationsMembershipsRequest,
  output: ValidateExclusivityProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsMembershipsRequest {
  /** Required. The Membership resource name in the format `projects/* /locations/* /memberships/*`. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, any subresource from this Membership will also be deleted. Otherwise, the request will only work if the Membership has no subresource. */
  force?: boolean;
}

export const DeleteProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsMembershipsRequest>;

export type DeleteProjectsLocationsMembershipsResponse = Operation;
export const DeleteProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a Membership. **This is currently only supported for GKE clusters on Google Cloud**. To unregister other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/unregistering-a-cluster. */
export const deleteProjectsLocationsMemberships: API.OperationMethod<
  DeleteProjectsLocationsMembershipsRequest,
  DeleteProjectsLocationsMembershipsResponse,
  DeleteProjectsLocationsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMembershipsRequest,
  output: DeleteProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsMembershipsRbacrolebindingsRequest {
  /** Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/* /locations/* /memberships/*`. */
  parent: string;
  /** Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. */
  rbacrolebindingId?: string;
  /** Request body */
  body?: RBACRoleBinding;
}

export const CreateProjectsLocationsMembershipsRbacrolebindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    rbacrolebindingId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("rbacrolebindingId"),
    ),
    body: Schema.optional(RBACRoleBinding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/rbacrolebindings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsMembershipsRbacrolebindingsRequest>;

export type CreateProjectsLocationsMembershipsRbacrolebindingsResponse =
  Operation;
export const CreateProjectsLocationsMembershipsRbacrolebindingsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsMembershipsRbacrolebindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Membership RBACRoleBinding. */
export const createProjectsLocationsMembershipsRbacrolebindings: API.OperationMethod<
  CreateProjectsLocationsMembershipsRbacrolebindingsRequest,
  CreateProjectsLocationsMembershipsRbacrolebindingsResponse,
  CreateProjectsLocationsMembershipsRbacrolebindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMembershipsRbacrolebindingsRequest,
  output: CreateProjectsLocationsMembershipsRbacrolebindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsMembershipsRbacrolebindingsRequest {
  /** The resource name for the rbacrolebinding `projects/{project}/locations/{location}/scopes/{scope}/rbacrolebindings/{rbacrolebinding}` or `projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}` */
  name: string;
  /** Required. The fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: RBACRoleBinding;
}

export const PatchProjectsLocationsMembershipsRbacrolebindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(RBACRoleBinding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsMembershipsRbacrolebindingsRequest>;

export type PatchProjectsLocationsMembershipsRbacrolebindingsResponse =
  Operation;
export const PatchProjectsLocationsMembershipsRbacrolebindingsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsMembershipsRbacrolebindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Membership RBACRoleBinding. */
export const patchProjectsLocationsMembershipsRbacrolebindings: API.OperationMethod<
  PatchProjectsLocationsMembershipsRbacrolebindingsRequest,
  PatchProjectsLocationsMembershipsRbacrolebindingsResponse,
  PatchProjectsLocationsMembershipsRbacrolebindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMembershipsRbacrolebindingsRequest,
  output: PatchProjectsLocationsMembershipsRbacrolebindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsMembershipsRbacrolebindingsRequest {
  /** Required. The RBACRoleBinding resource name in the format `projects/* /locations/* /memberships/* /rbacrolebindings/*`. */
  name: string;
}

export const DeleteProjectsLocationsMembershipsRbacrolebindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsMembershipsRbacrolebindingsRequest>;

export type DeleteProjectsLocationsMembershipsRbacrolebindingsResponse =
  Operation;
export const DeleteProjectsLocationsMembershipsRbacrolebindingsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsMembershipsRbacrolebindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Membership RBACRoleBinding. */
export const deleteProjectsLocationsMembershipsRbacrolebindings: API.OperationMethod<
  DeleteProjectsLocationsMembershipsRbacrolebindingsRequest,
  DeleteProjectsLocationsMembershipsRbacrolebindingsResponse,
  DeleteProjectsLocationsMembershipsRbacrolebindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMembershipsRbacrolebindingsRequest,
  output: DeleteProjectsLocationsMembershipsRbacrolebindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMembershipsRbacrolebindingsRequest {
  /** Optional. Token returned by previous call to `ListMembershipRBACRoleBindings` which specifies the position in the list from where to continue listing the resources. */
  pageToken?: string;
  /** Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/* /locations/* /memberships/*`. */
  parent: string;
  /** Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. */
  pageSize?: number;
}

export const ListProjectsLocationsMembershipsRbacrolebindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/rbacrolebindings" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsMembershipsRbacrolebindingsRequest>;

export type ListProjectsLocationsMembershipsRbacrolebindingsResponse =
  ListMembershipRBACRoleBindingsResponse;
export const ListProjectsLocationsMembershipsRbacrolebindingsResponse =
  /*@__PURE__*/ ListMembershipRBACRoleBindingsResponse;

export type ListProjectsLocationsMembershipsRbacrolebindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all Membership RBACRoleBindings. */
export const listProjectsLocationsMembershipsRbacrolebindings: API.PaginatedOperationMethod<
  ListProjectsLocationsMembershipsRbacrolebindingsRequest,
  ListProjectsLocationsMembershipsRbacrolebindingsResponse,
  ListProjectsLocationsMembershipsRbacrolebindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMembershipsRbacrolebindingsRequest,
  output: ListProjectsLocationsMembershipsRbacrolebindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsMembershipsRbacrolebindingsRequest {
  /** Required. The RBACRoleBinding resource name in the format `projects/* /locations/* /memberships/* /rbacrolebindings/*`. */
  name: string;
}

export const GetProjectsLocationsMembershipsRbacrolebindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsMembershipsRbacrolebindingsRequest>;

export type GetProjectsLocationsMembershipsRbacrolebindingsResponse =
  RBACRoleBinding;
export const GetProjectsLocationsMembershipsRbacrolebindingsResponse =
  /*@__PURE__*/ RBACRoleBinding;

export type GetProjectsLocationsMembershipsRbacrolebindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the details of a Membership RBACRoleBinding. */
export const getProjectsLocationsMembershipsRbacrolebindings: API.OperationMethod<
  GetProjectsLocationsMembershipsRbacrolebindingsRequest,
  GetProjectsLocationsMembershipsRbacrolebindingsResponse,
  GetProjectsLocationsMembershipsRbacrolebindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMembershipsRbacrolebindingsRequest,
  output: GetProjectsLocationsMembershipsRbacrolebindingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GenerateMembershipRBACRoleBindingYAMLProjectsLocationsMembershipsRbacrolebindingsRequest {
  /** Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/* /locations/* /memberships/*`. */
  parent: string;
  /** Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. */
  rbacrolebindingId?: string;
  /** Request body */
  body?: RBACRoleBinding;
}

export const GenerateMembershipRBACRoleBindingYAMLProjectsLocationsMembershipsRbacrolebindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    rbacrolebindingId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("rbacrolebindingId"),
    ),
    body: Schema.optional(RBACRoleBinding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/rbacrolebindings:generateMembershipRBACRoleBindingYAML",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GenerateMembershipRBACRoleBindingYAMLProjectsLocationsMembershipsRbacrolebindingsRequest>;

export type GenerateMembershipRBACRoleBindingYAMLProjectsLocationsMembershipsRbacrolebindingsResponse =
  GenerateMembershipRBACRoleBindingYAMLResponse;
export const GenerateMembershipRBACRoleBindingYAMLProjectsLocationsMembershipsRbacrolebindingsResponse =
  /*@__PURE__*/ GenerateMembershipRBACRoleBindingYAMLResponse;

export type GenerateMembershipRBACRoleBindingYAMLProjectsLocationsMembershipsRbacrolebindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates a YAML of the RBAC policies for the specified RoleBinding and its associated impersonation resources. */
export const generateMembershipRBACRoleBindingYAMLProjectsLocationsMembershipsRbacrolebindings: API.OperationMethod<
  GenerateMembershipRBACRoleBindingYAMLProjectsLocationsMembershipsRbacrolebindingsRequest,
  GenerateMembershipRBACRoleBindingYAMLProjectsLocationsMembershipsRbacrolebindingsResponse,
  GenerateMembershipRBACRoleBindingYAMLProjectsLocationsMembershipsRbacrolebindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    GenerateMembershipRBACRoleBindingYAMLProjectsLocationsMembershipsRbacrolebindingsRequest,
  output:
    GenerateMembershipRBACRoleBindingYAMLProjectsLocationsMembershipsRbacrolebindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsMembershipsBindingsRequest {
  /** Required. The ID to use for the MembershipBinding. */
  membershipBindingId?: string;
  /** Required. The parent (project and location) where the MembershipBinding will be created. Specified in the format `projects/* /locations/* /memberships/*`. */
  parent: string;
  /** Request body */
  body?: MembershipBinding;
}

export const CreateProjectsLocationsMembershipsBindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    membershipBindingId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("membershipBindingId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(MembershipBinding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/bindings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsMembershipsBindingsRequest>;

export type CreateProjectsLocationsMembershipsBindingsResponse = Operation;
export const CreateProjectsLocationsMembershipsBindingsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsMembershipsBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a MembershipBinding. */
export const createProjectsLocationsMembershipsBindings: API.OperationMethod<
  CreateProjectsLocationsMembershipsBindingsRequest,
  CreateProjectsLocationsMembershipsBindingsResponse,
  CreateProjectsLocationsMembershipsBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMembershipsBindingsRequest,
  output: CreateProjectsLocationsMembershipsBindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsMembershipsBindingsRequest {
  /** The resource name for the membershipbinding itself `projects/{project}/locations/{location}/memberships/{membership}/bindings/{membershipbinding}` */
  name: string;
  /** Required. The fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: MembershipBinding;
}

export const PatchProjectsLocationsMembershipsBindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(MembershipBinding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsMembershipsBindingsRequest>;

export type PatchProjectsLocationsMembershipsBindingsResponse = Operation;
export const PatchProjectsLocationsMembershipsBindingsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsMembershipsBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a MembershipBinding. */
export const patchProjectsLocationsMembershipsBindings: API.OperationMethod<
  PatchProjectsLocationsMembershipsBindingsRequest,
  PatchProjectsLocationsMembershipsBindingsResponse,
  PatchProjectsLocationsMembershipsBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMembershipsBindingsRequest,
  output: PatchProjectsLocationsMembershipsBindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMembershipsBindingsRequest {
  /** Required. The MembershipBinding resource name in the format `projects/* /locations/* /memberships/* /bindings/*`. */
  name: string;
}

export const GetProjectsLocationsMembershipsBindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsMembershipsBindingsRequest>;

export type GetProjectsLocationsMembershipsBindingsResponse = MembershipBinding;
export const GetProjectsLocationsMembershipsBindingsResponse =
  /*@__PURE__*/ MembershipBinding;

export type GetProjectsLocationsMembershipsBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the details of a MembershipBinding. */
export const getProjectsLocationsMembershipsBindings: API.OperationMethod<
  GetProjectsLocationsMembershipsBindingsRequest,
  GetProjectsLocationsMembershipsBindingsResponse,
  GetProjectsLocationsMembershipsBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMembershipsBindingsRequest,
  output: GetProjectsLocationsMembershipsBindingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsMembershipsBindingsRequest {
  /** Optional. Token returned by previous call to `ListMembershipBindings` which specifies the position in the list from where to continue listing the resources. */
  pageToken?: string;
  /** Optional. Lists MembershipBindings that match the filter expression, following the syntax outlined in https://google.aip.dev/160. */
  filter?: string;
  /** Required. The parent Membership for which the MembershipBindings will be listed. Specified in the format `projects/* /locations/* /memberships/*`. */
  parent: string;
  /** Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. */
  pageSize?: number;
}

export const ListProjectsLocationsMembershipsBindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/bindings" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsMembershipsBindingsRequest>;

export type ListProjectsLocationsMembershipsBindingsResponse =
  ListMembershipBindingsResponse;
export const ListProjectsLocationsMembershipsBindingsResponse =
  /*@__PURE__*/ ListMembershipBindingsResponse;

export type ListProjectsLocationsMembershipsBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists MembershipBindings. */
export const listProjectsLocationsMembershipsBindings: API.PaginatedOperationMethod<
  ListProjectsLocationsMembershipsBindingsRequest,
  ListProjectsLocationsMembershipsBindingsResponse,
  ListProjectsLocationsMembershipsBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMembershipsBindingsRequest,
  output: ListProjectsLocationsMembershipsBindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsMembershipsBindingsRequest {
  /** Required. The MembershipBinding resource name in the format `projects/* /locations/* /memberships/* /bindings/*`. */
  name: string;
}

export const DeleteProjectsLocationsMembershipsBindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsMembershipsBindingsRequest>;

export type DeleteProjectsLocationsMembershipsBindingsResponse = Operation;
export const DeleteProjectsLocationsMembershipsBindingsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsMembershipsBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a MembershipBinding. */
export const deleteProjectsLocationsMembershipsBindings: API.OperationMethod<
  DeleteProjectsLocationsMembershipsBindingsRequest,
  DeleteProjectsLocationsMembershipsBindingsResponse,
  DeleteProjectsLocationsMembershipsBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMembershipsBindingsRequest,
  output: DeleteProjectsLocationsMembershipsBindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListMembershipsProjectsLocationsScopesRequest {
  /** Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. Pagination is currently not supported; therefore, setting this field does not have any impact for now. */
  pageSize?: number;
  /** Required. Name of the Scope, in the format `projects/* /locations/global/scopes/*`, to which the Memberships are bound. */
  scopeName: string;
  /** Optional. Lists Memberships that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Currently, filtering can be done only based on Memberships's `name`, `labels`, `create_time`, `update_time`, and `unique_id`. */
  filter?: string;
  /** Optional. Token returned by previous call to `ListBoundMemberships` which specifies the position in the list from where to continue listing the resources. */
  pageToken?: string;
}

export const ListMembershipsProjectsLocationsScopesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    scopeName: Schema.String.pipe(T.HttpPath("scopeName")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+scopeName}:listMemberships" }),
    svc,
  ) as unknown as Schema.Codec<ListMembershipsProjectsLocationsScopesRequest>;

export type ListMembershipsProjectsLocationsScopesResponse =
  ListBoundMembershipsResponse;
export const ListMembershipsProjectsLocationsScopesResponse =
  /*@__PURE__*/ ListBoundMembershipsResponse;

export type ListMembershipsProjectsLocationsScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Memberships bound to a Scope. The response includes relevant Memberships from all regions. */
export const listMembershipsProjectsLocationsScopes: API.PaginatedOperationMethod<
  ListMembershipsProjectsLocationsScopesRequest,
  ListMembershipsProjectsLocationsScopesResponse,
  ListMembershipsProjectsLocationsScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMembershipsProjectsLocationsScopesRequest,
  output: ListMembershipsProjectsLocationsScopesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsScopesRequest {
  /** Required. The Scope resource name in the format `projects/* /locations/* /scopes/*`. */
  name: string;
}

export const DeleteProjectsLocationsScopesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsScopesRequest>;

export type DeleteProjectsLocationsScopesResponse = Operation;
export const DeleteProjectsLocationsScopesResponse = /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Scope. */
export const deleteProjectsLocationsScopes: API.OperationMethod<
  DeleteProjectsLocationsScopesRequest,
  DeleteProjectsLocationsScopesResponse,
  DeleteProjectsLocationsScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsScopesRequest,
  output: DeleteProjectsLocationsScopesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPermittedProjectsLocationsScopesRequest {
  /** Optional. Token returned by previous call to `ListPermittedScopes` which specifies the position in the list from where to continue listing the resources. */
  pageToken?: string;
  /** Required. The parent (project and location) where the Scope will be listed. Specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. */
  pageSize?: number;
}

export const ListPermittedProjectsLocationsScopesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/scopes:listPermitted" }),
    svc,
  ) as unknown as Schema.Codec<ListPermittedProjectsLocationsScopesRequest>;

export type ListPermittedProjectsLocationsScopesResponse =
  ListPermittedScopesResponse;
export const ListPermittedProjectsLocationsScopesResponse =
  /*@__PURE__*/ ListPermittedScopesResponse;

export type ListPermittedProjectsLocationsScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists permitted Scopes. */
export const listPermittedProjectsLocationsScopes: API.PaginatedOperationMethod<
  ListPermittedProjectsLocationsScopesRequest,
  ListPermittedProjectsLocationsScopesResponse,
  ListPermittedProjectsLocationsScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPermittedProjectsLocationsScopesRequest,
  output: ListPermittedProjectsLocationsScopesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface TestIamPermissionsProjectsLocationsScopesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsScopesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsScopesRequest>;

export type TestIamPermissionsProjectsLocationsScopesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsScopesResponse =
  /*@__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsScopes: API.OperationMethod<
  TestIamPermissionsProjectsLocationsScopesRequest,
  TestIamPermissionsProjectsLocationsScopesResponse,
  TestIamPermissionsProjectsLocationsScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsScopesRequest,
  output: TestIamPermissionsProjectsLocationsScopesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsScopesRequest {
  /** Required. The Scope resource name in the format `projects/* /locations/* /scopes/*`. */
  name: string;
}

export const GetProjectsLocationsScopesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsScopesRequest>;

export type GetProjectsLocationsScopesResponse = Scope;
export const GetProjectsLocationsScopesResponse = /*@__PURE__*/ Scope;

export type GetProjectsLocationsScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the details of a Scope. */
export const getProjectsLocationsScopes: API.OperationMethod<
  GetProjectsLocationsScopesRequest,
  GetProjectsLocationsScopesResponse,
  GetProjectsLocationsScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsScopesRequest,
  output: GetProjectsLocationsScopesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsScopesRequest {
  /** Required. The parent (project and location) where the Scope will be listed. Specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. */
  pageSize?: number;
  /** Optional. Token returned by previous call to `ListScopes` which specifies the position in the list from where to continue listing the resources. */
  pageToken?: string;
}

export const ListProjectsLocationsScopesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/scopes" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsScopesRequest>;

export type ListProjectsLocationsScopesResponse = ListScopesResponse;
export const ListProjectsLocationsScopesResponse =
  /*@__PURE__*/ ListScopesResponse;

export type ListProjectsLocationsScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Scopes. */
export const listProjectsLocationsScopes: API.PaginatedOperationMethod<
  ListProjectsLocationsScopesRequest,
  ListProjectsLocationsScopesResponse,
  ListProjectsLocationsScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsScopesRequest,
  output: ListProjectsLocationsScopesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsScopesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsScopesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsScopesRequest>;

export type GetIamPolicyProjectsLocationsScopesResponse = Policy;
export const GetIamPolicyProjectsLocationsScopesResponse = /*@__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsScopes: API.OperationMethod<
  GetIamPolicyProjectsLocationsScopesRequest,
  GetIamPolicyProjectsLocationsScopesResponse,
  GetIamPolicyProjectsLocationsScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsScopesRequest,
  output: GetIamPolicyProjectsLocationsScopesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsScopesRequest {
  /** Required. The parent (project and location) where the Scope will be created. Specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. Client chosen ID for the Scope. `scope_id` must be a ???? */
  scopeId?: string;
  /** Request body */
  body?: Scope;
}

export const CreateProjectsLocationsScopesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    scopeId: Schema.optional(Schema.String).pipe(T.HttpQuery("scopeId")),
    body: Schema.optional(Scope).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+parent}/scopes", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsScopesRequest>;

export type CreateProjectsLocationsScopesResponse = Operation;
export const CreateProjectsLocationsScopesResponse = /*@__PURE__*/ Operation;

export type CreateProjectsLocationsScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Scope. */
export const createProjectsLocationsScopes: API.OperationMethod<
  CreateProjectsLocationsScopesRequest,
  CreateProjectsLocationsScopesResponse,
  CreateProjectsLocationsScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsScopesRequest,
  output: CreateProjectsLocationsScopesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsScopesRequest {
  /** Required. The fields to be updated. */
  updateMask?: string;
  /** The resource name for the scope `projects/{project}/locations/{location}/scopes/{scope}` */
  name: string;
  /** Request body */
  body?: Scope;
}

export const PatchProjectsLocationsScopesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Scope).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsScopesRequest>;

export type PatchProjectsLocationsScopesResponse = Operation;
export const PatchProjectsLocationsScopesResponse = /*@__PURE__*/ Operation;

export type PatchProjectsLocationsScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a scopes. */
export const patchProjectsLocationsScopes: API.OperationMethod<
  PatchProjectsLocationsScopesRequest,
  PatchProjectsLocationsScopesResponse,
  PatchProjectsLocationsScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsScopesRequest,
  output: PatchProjectsLocationsScopesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsScopesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsScopesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsScopesRequest>;

export type SetIamPolicyProjectsLocationsScopesResponse = Policy;
export const SetIamPolicyProjectsLocationsScopesResponse = /*@__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsScopes: API.OperationMethod<
  SetIamPolicyProjectsLocationsScopesRequest,
  SetIamPolicyProjectsLocationsScopesResponse,
  SetIamPolicyProjectsLocationsScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsScopesRequest,
  output: SetIamPolicyProjectsLocationsScopesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsScopesNamespacesRequest {
  /** Required. The Namespace resource name in the format `projects/* /locations/* /scopes/* /namespaces/*`. */
  name: string;
}

export const DeleteProjectsLocationsScopesNamespacesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsScopesNamespacesRequest>;

export type DeleteProjectsLocationsScopesNamespacesResponse = Operation;
export const DeleteProjectsLocationsScopesNamespacesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsScopesNamespacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a fleet namespace. */
export const deleteProjectsLocationsScopesNamespaces: API.OperationMethod<
  DeleteProjectsLocationsScopesNamespacesRequest,
  DeleteProjectsLocationsScopesNamespacesResponse,
  DeleteProjectsLocationsScopesNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsScopesNamespacesRequest,
  output: DeleteProjectsLocationsScopesNamespacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsScopesNamespacesRequest {
  /** Optional. Token returned by previous call to `ListFeatures` which specifies the position in the list from where to continue listing the resources. */
  pageToken?: string;
  /** Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/* /locations/* /scopes/*`. */
  parent: string;
  /** Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. */
  pageSize?: number;
}

export const ListProjectsLocationsScopesNamespacesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/namespaces" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsScopesNamespacesRequest>;

export type ListProjectsLocationsScopesNamespacesResponse =
  ListScopeNamespacesResponse;
export const ListProjectsLocationsScopesNamespacesResponse =
  /*@__PURE__*/ ListScopeNamespacesResponse;

export type ListProjectsLocationsScopesNamespacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists fleet namespaces. */
export const listProjectsLocationsScopesNamespaces: API.PaginatedOperationMethod<
  ListProjectsLocationsScopesNamespacesRequest,
  ListProjectsLocationsScopesNamespacesResponse,
  ListProjectsLocationsScopesNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsScopesNamespacesRequest,
  output: ListProjectsLocationsScopesNamespacesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsScopesNamespacesRequest {
  /** Required. The Namespace resource name in the format `projects/* /locations/* /scopes/* /namespaces/*`. */
  name: string;
}

export const GetProjectsLocationsScopesNamespacesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsScopesNamespacesRequest>;

export type GetProjectsLocationsScopesNamespacesResponse = Namespace;
export const GetProjectsLocationsScopesNamespacesResponse =
  /*@__PURE__*/ Namespace;

export type GetProjectsLocationsScopesNamespacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the details of a fleet namespace. */
export const getProjectsLocationsScopesNamespaces: API.OperationMethod<
  GetProjectsLocationsScopesNamespacesRequest,
  GetProjectsLocationsScopesNamespacesResponse,
  GetProjectsLocationsScopesNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsScopesNamespacesRequest,
  output: GetProjectsLocationsScopesNamespacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsScopesNamespacesRequest {
  /** Required. The parent (project and location) where the Namespace will be created. Specified in the format `projects/* /locations/* /scopes/*`. */
  parent: string;
  /** Required. Client chosen ID for the Namespace. `namespace_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. */
  scopeNamespaceId?: string;
  /** Request body */
  body?: Namespace;
}

export const CreateProjectsLocationsScopesNamespacesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    scopeNamespaceId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("scopeNamespaceId"),
    ),
    body: Schema.optional(Namespace).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/namespaces",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsScopesNamespacesRequest>;

export type CreateProjectsLocationsScopesNamespacesResponse = Operation;
export const CreateProjectsLocationsScopesNamespacesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsScopesNamespacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a fleet namespace. */
export const createProjectsLocationsScopesNamespaces: API.OperationMethod<
  CreateProjectsLocationsScopesNamespacesRequest,
  CreateProjectsLocationsScopesNamespacesResponse,
  CreateProjectsLocationsScopesNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsScopesNamespacesRequest,
  output: CreateProjectsLocationsScopesNamespacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsScopesNamespacesRequest {
  /** Required. The fields to be updated. */
  updateMask?: string;
  /** The resource name for the namespace `projects/{project}/locations/{location}/namespaces/{namespace}` */
  name: string;
  /** Request body */
  body?: Namespace;
}

export const PatchProjectsLocationsScopesNamespacesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Namespace).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsScopesNamespacesRequest>;

export type PatchProjectsLocationsScopesNamespacesResponse = Operation;
export const PatchProjectsLocationsScopesNamespacesResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsScopesNamespacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a fleet namespace. */
export const patchProjectsLocationsScopesNamespaces: API.OperationMethod<
  PatchProjectsLocationsScopesNamespacesRequest,
  PatchProjectsLocationsScopesNamespacesResponse,
  PatchProjectsLocationsScopesNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsScopesNamespacesRequest,
  output: PatchProjectsLocationsScopesNamespacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsScopesRbacrolebindingsRequest {
  /** Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/* /locations/* /scopes/*`. */
  parent: string;
  /** Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. */
  rbacrolebindingId?: string;
  /** Request body */
  body?: RBACRoleBinding;
}

export const CreateProjectsLocationsScopesRbacrolebindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    rbacrolebindingId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("rbacrolebindingId"),
    ),
    body: Schema.optional(RBACRoleBinding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/rbacrolebindings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsScopesRbacrolebindingsRequest>;

export type CreateProjectsLocationsScopesRbacrolebindingsResponse = Operation;
export const CreateProjectsLocationsScopesRbacrolebindingsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsScopesRbacrolebindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Scope RBACRoleBinding. */
export const createProjectsLocationsScopesRbacrolebindings: API.OperationMethod<
  CreateProjectsLocationsScopesRbacrolebindingsRequest,
  CreateProjectsLocationsScopesRbacrolebindingsResponse,
  CreateProjectsLocationsScopesRbacrolebindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsScopesRbacrolebindingsRequest,
  output: CreateProjectsLocationsScopesRbacrolebindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsScopesRbacrolebindingsRequest {
  /** Required. The fields to be updated. */
  updateMask?: string;
  /** The resource name for the rbacrolebinding `projects/{project}/locations/{location}/scopes/{scope}/rbacrolebindings/{rbacrolebinding}` or `projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}` */
  name: string;
  /** Request body */
  body?: RBACRoleBinding;
}

export const PatchProjectsLocationsScopesRbacrolebindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RBACRoleBinding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsScopesRbacrolebindingsRequest>;

export type PatchProjectsLocationsScopesRbacrolebindingsResponse = Operation;
export const PatchProjectsLocationsScopesRbacrolebindingsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsScopesRbacrolebindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Scope RBACRoleBinding. */
export const patchProjectsLocationsScopesRbacrolebindings: API.OperationMethod<
  PatchProjectsLocationsScopesRbacrolebindingsRequest,
  PatchProjectsLocationsScopesRbacrolebindingsResponse,
  PatchProjectsLocationsScopesRbacrolebindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsScopesRbacrolebindingsRequest,
  output: PatchProjectsLocationsScopesRbacrolebindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsScopesRbacrolebindingsRequest {
  /** Required. The RBACRoleBinding resource name in the format `projects/* /locations/* /scopes/* /rbacrolebindings/*`. */
  name: string;
}

export const GetProjectsLocationsScopesRbacrolebindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsScopesRbacrolebindingsRequest>;

export type GetProjectsLocationsScopesRbacrolebindingsResponse =
  RBACRoleBinding;
export const GetProjectsLocationsScopesRbacrolebindingsResponse =
  /*@__PURE__*/ RBACRoleBinding;

export type GetProjectsLocationsScopesRbacrolebindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the details of a Scope RBACRoleBinding. */
export const getProjectsLocationsScopesRbacrolebindings: API.OperationMethod<
  GetProjectsLocationsScopesRbacrolebindingsRequest,
  GetProjectsLocationsScopesRbacrolebindingsResponse,
  GetProjectsLocationsScopesRbacrolebindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsScopesRbacrolebindingsRequest,
  output: GetProjectsLocationsScopesRbacrolebindingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsScopesRbacrolebindingsRequest {
  /** Optional. Token returned by previous call to `ListScopeRBACRoleBindings` which specifies the position in the list from where to continue listing the resources. */
  pageToken?: string;
  /** Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/* /locations/* /scopes/*`. */
  parent: string;
  /** Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. */
  pageSize?: number;
}

export const ListProjectsLocationsScopesRbacrolebindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/rbacrolebindings" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsScopesRbacrolebindingsRequest>;

export type ListProjectsLocationsScopesRbacrolebindingsResponse =
  ListScopeRBACRoleBindingsResponse;
export const ListProjectsLocationsScopesRbacrolebindingsResponse =
  /*@__PURE__*/ ListScopeRBACRoleBindingsResponse;

export type ListProjectsLocationsScopesRbacrolebindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all Scope RBACRoleBindings. */
export const listProjectsLocationsScopesRbacrolebindings: API.PaginatedOperationMethod<
  ListProjectsLocationsScopesRbacrolebindingsRequest,
  ListProjectsLocationsScopesRbacrolebindingsResponse,
  ListProjectsLocationsScopesRbacrolebindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsScopesRbacrolebindingsRequest,
  output: ListProjectsLocationsScopesRbacrolebindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsScopesRbacrolebindingsRequest {
  /** Required. The RBACRoleBinding resource name in the format `projects/* /locations/* /scopes/* /rbacrolebindings/*`. */
  name: string;
}

export const DeleteProjectsLocationsScopesRbacrolebindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsScopesRbacrolebindingsRequest>;

export type DeleteProjectsLocationsScopesRbacrolebindingsResponse = Operation;
export const DeleteProjectsLocationsScopesRbacrolebindingsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsScopesRbacrolebindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Scope RBACRoleBinding. */
export const deleteProjectsLocationsScopesRbacrolebindings: API.OperationMethod<
  DeleteProjectsLocationsScopesRbacrolebindingsRequest,
  DeleteProjectsLocationsScopesRbacrolebindingsResponse,
  DeleteProjectsLocationsScopesRbacrolebindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsScopesRbacrolebindingsRequest,
  output: DeleteProjectsLocationsScopesRbacrolebindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsFeaturesRequest {
  /** Required. The parent (project and location) where the Feature will be created. Specified in the format `projects/* /locations/*`. */
  parent: string;
  /** The ID of the feature to create. */
  featureId?: string;
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Feature;
}

export const CreateProjectsLocationsFeaturesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    featureId: Schema.optional(Schema.String).pipe(T.HttpQuery("featureId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Feature).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/features",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsFeaturesRequest>;

export type CreateProjectsLocationsFeaturesResponse = Operation;
export const CreateProjectsLocationsFeaturesResponse = /*@__PURE__*/ Operation;

export type CreateProjectsLocationsFeaturesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a new Feature. */
export const createProjectsLocationsFeatures: API.OperationMethod<
  CreateProjectsLocationsFeaturesRequest,
  CreateProjectsLocationsFeaturesResponse,
  CreateProjectsLocationsFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsFeaturesRequest,
  output: CreateProjectsLocationsFeaturesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsFeaturesRequest {
  /** Required. The Feature resource name in the format `projects/* /locations/* /features/*`. */
  name: string;
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Mask of fields to update. */
  updateMask?: string;
  /** Request body */
  body?: Feature;
}

export const PatchProjectsLocationsFeaturesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Feature).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsFeaturesRequest>;

export type PatchProjectsLocationsFeaturesResponse = Operation;
export const PatchProjectsLocationsFeaturesResponse = /*@__PURE__*/ Operation;

export type PatchProjectsLocationsFeaturesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing Feature. */
export const patchProjectsLocationsFeatures: API.OperationMethod<
  PatchProjectsLocationsFeaturesRequest,
  PatchProjectsLocationsFeaturesResponse,
  PatchProjectsLocationsFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsFeaturesRequest,
  output: PatchProjectsLocationsFeaturesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsFeaturesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsFeaturesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsFeaturesRequest>;

export type SetIamPolicyProjectsLocationsFeaturesResponse = Policy;
export const SetIamPolicyProjectsLocationsFeaturesResponse =
  /*@__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsFeaturesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsFeatures: API.OperationMethod<
  SetIamPolicyProjectsLocationsFeaturesRequest,
  SetIamPolicyProjectsLocationsFeaturesResponse,
  SetIamPolicyProjectsLocationsFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsFeaturesRequest,
  output: SetIamPolicyProjectsLocationsFeaturesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsFeaturesRequest {
  /** Required. The Feature resource name in the format `projects/* /locations/* /features/*` */
  name: string;
  /** Optional. If set to true, the response will return partial results when some regions are unreachable and the unreachable field in Feature proto will be populated. If set to false, the request will fail when some regions are unreachable. */
  returnPartialSuccess?: boolean;
}

export const GetProjectsLocationsFeaturesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsFeaturesRequest>;

export type GetProjectsLocationsFeaturesResponse = Feature;
export const GetProjectsLocationsFeaturesResponse = /*@__PURE__*/ Feature;

export type GetProjectsLocationsFeaturesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Feature. */
export const getProjectsLocationsFeatures: API.OperationMethod<
  GetProjectsLocationsFeaturesRequest,
  GetProjectsLocationsFeaturesResponse,
  GetProjectsLocationsFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsFeaturesRequest,
  output: GetProjectsLocationsFeaturesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsFeaturesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsFeaturesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsFeaturesRequest>;

export type TestIamPermissionsProjectsLocationsFeaturesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsFeaturesResponse =
  /*@__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsFeaturesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsFeatures: API.OperationMethod<
  TestIamPermissionsProjectsLocationsFeaturesRequest,
  TestIamPermissionsProjectsLocationsFeaturesResponse,
  TestIamPermissionsProjectsLocationsFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsFeaturesRequest,
  output: TestIamPermissionsProjectsLocationsFeaturesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsFeaturesRequest {
  /** Optional. If set to true, the response will return partial results when some regions are unreachable and the unreachable field in Feature proto will be populated. If set to false, the request will fail when some regions are unreachable. */
  returnPartialSuccess?: boolean;
  /** Token returned by previous call to `ListFeatures` which specifies the position in the list from where to continue listing the resources. */
  pageToken?: string;
  /** Lists Features that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Feature with the name "servicemesh" in project "foo-proj": name = "projects/foo-proj/locations/global/features/servicemesh" - Features that have a label called `foo`: labels.foo:* - Features that have a label called `foo` whose value is `bar`: labels.foo = bar */
  filter?: string;
  /** Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/* /locations/*`. */
  parent: string;
  /** When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. */
  pageSize?: number;
  /** One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering. */
  orderBy?: string;
}

export const ListProjectsLocationsFeaturesRequest =
  /*@__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/features" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsFeaturesRequest>;

export type ListProjectsLocationsFeaturesResponse = ListFeaturesResponse;
export const ListProjectsLocationsFeaturesResponse =
  /*@__PURE__*/ ListFeaturesResponse;

export type ListProjectsLocationsFeaturesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Features in a given project and location. */
export const listProjectsLocationsFeatures: API.PaginatedOperationMethod<
  ListProjectsLocationsFeaturesRequest,
  ListProjectsLocationsFeaturesResponse,
  ListProjectsLocationsFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsFeaturesRequest,
  output: ListProjectsLocationsFeaturesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsFeaturesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsFeaturesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsFeaturesRequest>;

export type GetIamPolicyProjectsLocationsFeaturesResponse = Policy;
export const GetIamPolicyProjectsLocationsFeaturesResponse =
  /*@__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsFeaturesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsFeatures: API.OperationMethod<
  GetIamPolicyProjectsLocationsFeaturesRequest,
  GetIamPolicyProjectsLocationsFeaturesResponse,
  GetIamPolicyProjectsLocationsFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsFeaturesRequest,
  output: GetIamPolicyProjectsLocationsFeaturesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsFeaturesRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If set to true, the delete will ignore any outstanding resources for this Feature (that is, `FeatureState.has_resources` is set to true). These resources will NOT be cleaned up or modified in any way. */
  force?: boolean;
  /** Required. The Feature resource name in the format `projects/* /locations/* /features/*`. */
  name: string;
}

export const DeleteProjectsLocationsFeaturesRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsFeaturesRequest>;

export type DeleteProjectsLocationsFeaturesResponse = Operation;
export const DeleteProjectsLocationsFeaturesResponse = /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsFeaturesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a Feature. */
export const deleteProjectsLocationsFeatures: API.OperationMethod<
  DeleteProjectsLocationsFeaturesRequest,
  DeleteProjectsLocationsFeaturesResponse,
  DeleteProjectsLocationsFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsFeaturesRequest,
  output: DeleteProjectsLocationsFeaturesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsFleetsRequest {
  /** Required. The Fleet resource name in the format `projects/* /locations/* /fleets/*`. */
  name: string;
}

export const GetProjectsLocationsFleetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsFleetsRequest>;

export type GetProjectsLocationsFleetsResponse = Fleet;
export const GetProjectsLocationsFleetsResponse = /*@__PURE__*/ Fleet;

export type GetProjectsLocationsFleetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the details of a fleet. */
export const getProjectsLocationsFleets: API.OperationMethod<
  GetProjectsLocationsFleetsRequest,
  GetProjectsLocationsFleetsResponse,
  GetProjectsLocationsFleetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsFleetsRequest,
  output: GetProjectsLocationsFleetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsFleetsRequest {
  /** Required. The organization or project to list for Fleets under, in the format `organizations/* /locations/*` or `projects/* /locations/*`. */
  parent: string;
  /** Optional. The maximum number of fleets to return. The service may return fewer than this value. If unspecified, at most 200 fleets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListFleets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFleets` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsFleetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/fleets" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsFleetsRequest>;

export type ListProjectsLocationsFleetsResponse = ListFleetsResponse;
export const ListProjectsLocationsFleetsResponse =
  /*@__PURE__*/ ListFleetsResponse;

export type ListProjectsLocationsFleetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns all fleets within an organization or a project that the caller has access to. */
export const listProjectsLocationsFleets: API.PaginatedOperationMethod<
  ListProjectsLocationsFleetsRequest,
  ListProjectsLocationsFleetsResponse,
  ListProjectsLocationsFleetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsFleetsRequest,
  output: ListProjectsLocationsFleetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsFleetsRequest {
  /** Required. The Fleet resource name in the format `projects/* /locations/* /fleets/*`. */
  name: string;
}

export const DeleteProjectsLocationsFleetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsFleetsRequest>;

export type DeleteProjectsLocationsFleetsResponse = Operation;
export const DeleteProjectsLocationsFleetsResponse = /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsFleetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a Fleet. There must be no memberships remaining in the Fleet. */
export const deleteProjectsLocationsFleets: API.OperationMethod<
  DeleteProjectsLocationsFleetsRequest,
  DeleteProjectsLocationsFleetsResponse,
  DeleteProjectsLocationsFleetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsFleetsRequest,
  output: DeleteProjectsLocationsFleetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsFleetsRequest {
  /** Required. The parent (project and location) where the Fleet will be created. Specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Request body */
  body?: Fleet;
}

export const CreateProjectsLocationsFleetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Fleet).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+parent}/fleets", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsFleetsRequest>;

export type CreateProjectsLocationsFleetsResponse = Operation;
export const CreateProjectsLocationsFleetsResponse = /*@__PURE__*/ Operation;

export type CreateProjectsLocationsFleetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a fleet. */
export const createProjectsLocationsFleets: API.OperationMethod<
  CreateProjectsLocationsFleetsRequest,
  CreateProjectsLocationsFleetsResponse,
  CreateProjectsLocationsFleetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsFleetsRequest,
  output: CreateProjectsLocationsFleetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsFleetsRequest {
  /** Output only. The full, unique resource name of this fleet in the format of `projects/{project}/locations/{location}/fleets/{fleet}`. Each Google Cloud project can have at most one fleet resource, named "default". */
  name: string;
  /** Required. The fields to be updated; */
  updateMask?: string;
  /** Request body */
  body?: Fleet;
}

export const PatchProjectsLocationsFleetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Fleet).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsFleetsRequest>;

export type PatchProjectsLocationsFleetsResponse = Operation;
export const PatchProjectsLocationsFleetsResponse = /*@__PURE__*/ Operation;

export type PatchProjectsLocationsFleetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a fleet. */
export const patchProjectsLocationsFleets: API.OperationMethod<
  PatchProjectsLocationsFleetsRequest,
  PatchProjectsLocationsFleetsResponse,
  PatchProjectsLocationsFleetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsFleetsRequest,
  output: PatchProjectsLocationsFleetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsFleetsRequest {
  /** Required. The organization or project to list for Fleets under, in the format `organizations/* /locations/*` or `projects/* /locations/*`. */
  parent: string;
  /** Optional. The maximum number of fleets to return. The service may return fewer than this value. If unspecified, at most 200 fleets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListFleets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFleets` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListOrganizationsLocationsFleetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/fleets" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsLocationsFleetsRequest>;

export type ListOrganizationsLocationsFleetsResponse = ListFleetsResponse;
export const ListOrganizationsLocationsFleetsResponse =
  /*@__PURE__*/ ListFleetsResponse;

export type ListOrganizationsLocationsFleetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns all fleets within an organization or a project that the caller has access to. */
export const listOrganizationsLocationsFleets: API.PaginatedOperationMethod<
  ListOrganizationsLocationsFleetsRequest,
  ListOrganizationsLocationsFleetsResponse,
  ListOrganizationsLocationsFleetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsFleetsRequest,
  output: ListOrganizationsLocationsFleetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
