// ==========================================================================
// GKE Hub API (gkehub v2beta)
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
  name: "gkehub",
  version: "v2beta",
  rootUrl: "https://gkehub.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

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

export const WorkloadIdentityIdentityProviderStateDetail: Schema.Schema<WorkloadIdentityIdentityProviderStateDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkloadIdentityIdentityProviderStateDetail" });

export interface WorkloadIdentityState {
  /** The state of the Identity Providers corresponding to the membership. */
  identityProviderStateDetails?: Record<
    string,
    WorkloadIdentityIdentityProviderStateDetail
  >;
  /** Deprecated, this field will be erased after code is changed to use the new field. */
  description?: string;
}

export const WorkloadIdentityState: Schema.Schema<WorkloadIdentityState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identityProviderStateDetails: Schema.optional(
      Schema.Record(Schema.String, WorkloadIdentityIdentityProviderStateDetail),
    ),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkloadIdentityState" });

export interface GoogleRpcStatus {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const GoogleRpcStatus: Schema.Schema<GoogleRpcStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface ConfigManagementHierarchyControllerVersion {
  /** Version for open source HNC. */
  hnc?: string;
  /** Version for Hierarchy Controller extension. */
  extension?: string;
}

export const ConfigManagementHierarchyControllerVersion: Schema.Schema<ConfigManagementHierarchyControllerVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hnc: Schema.optional(Schema.String),
    extension: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementHierarchyControllerVersion" });

export interface ConfigManagementContainerOverride {
  /** Optional. The cpu request of the container. Use the following CPU resource units: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu. */
  cpuRequest?: string;
  /** Optional. The memory limit of the container. Use the following memory resource units: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory. */
  memoryLimit?: string;
  /** Required. The name of the container. */
  containerName?: string;
  /** Optional. The cpu limit of the container. Use the following CPU resource units: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu. */
  cpuLimit?: string;
  /** Optional. The memory request of the container. Use the following memory resource units: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory. */
  memoryRequest?: string;
}

export const ConfigManagementContainerOverride: Schema.Schema<ConfigManagementContainerOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpuRequest: Schema.optional(Schema.String),
    memoryLimit: Schema.optional(Schema.String),
    containerName: Schema.optional(Schema.String),
    cpuLimit: Schema.optional(Schema.String),
    memoryRequest: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementContainerOverride" });

export interface ConfigManagementDeploymentOverride {
  /** Optional. The containers of the deployment resource to be overridden. */
  containers?: ReadonlyArray<ConfigManagementContainerOverride>;
  /** Required. The name of the deployment resource to be overridden. */
  deploymentName?: string;
  /** Required. The namespace of the deployment resource to be overridden. */
  deploymentNamespace?: string;
}

export const ConfigManagementDeploymentOverride: Schema.Schema<ConfigManagementDeploymentOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containers: Schema.optional(
      Schema.Array(ConfigManagementContainerOverride),
    ),
    deploymentName: Schema.optional(Schema.String),
    deploymentNamespace: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementDeploymentOverride" });

export interface Origin {
  /** Type specifies which type of origin is set. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "FLEET"
    | "FLEET_OUT_OF_SYNC"
    | "USER"
    | (string & {});
}

export const Origin: Schema.Schema<Origin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Origin" });

export interface ServiceMeshCondition {
  /** Links contains actionable information. */
  documentationLink?: string;
  /** Severity level of the condition. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "ERROR"
    | "WARNING"
    | "INFO"
    | (string & {});
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
    | (string & {});
  /** A short summary about the issue. */
  details?: string;
}

export const ServiceMeshCondition: Schema.Schema<ServiceMeshCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentationLink: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshCondition" });

export interface ServiceMeshType {
  /** A human-readable name for the message type. e.g. "InternalError", "PodMissingProxy". This should be the same for all messages of the same type. (This corresponds to the `name` field in open-source Istio.) */
  displayName?: string;
  /** A 7 character code matching `^IST[0-9]{4}$` or `^ASM[0-9]{4}$`, intended to uniquely identify the message type. (e.g. "IST0001" is mapped to the "InternalError" message type.) */
  code?: string;
}

export const ServiceMeshType: Schema.Schema<ServiceMeshType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const ServiceMeshAnalysisMessageBase: Schema.Schema<ServiceMeshAnalysisMessageBase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(ServiceMeshType),
    level: Schema.optional(Schema.String),
    documentationUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshAnalysisMessageBase" });

export interface ServiceMeshAnalysisMessage {
  /** Details common to all types of Istio and ServiceMesh analysis messages. */
  messageBase?: ServiceMeshAnalysisMessageBase;
  /** A list of strings specifying the resource identifiers that were the cause of message generation. A "path" here may be: * MEMBERSHIP_ID if the cause is a specific member cluster * MEMBERSHIP_ID/(NAMESPACE\/)?RESOURCETYPE/NAME if the cause is a resource in a cluster */
  resourcePaths?: ReadonlyArray<string>;
  /** A UI can combine these args with a template (based on message_base.type) to produce an internationalized message. */
  args?: Record<string, unknown>;
  /** A human readable description of what the error means. It is suitable for non-internationalize display purposes. */
  description?: string;
}

export const ServiceMeshAnalysisMessage: Schema.Schema<ServiceMeshAnalysisMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageBase: Schema.optional(ServiceMeshAnalysisMessageBase),
    resourcePaths: Schema.optional(Schema.Array(Schema.String)),
    args: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshAnalysisMessage" });

export interface ServiceMeshStatusDetails {
  /** A machine-readable code that further describes a broad status. */
  code?: string;
  /** Human-readable explanation of code. */
  details?: string;
}

export const ServiceMeshStatusDetails: Schema.Schema<ServiceMeshStatusDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshStatusDetails" });

export interface ServiceMeshDataPlaneManagement {
  /** Explanation of the status. */
  details?: ReadonlyArray<ServiceMeshStatusDetails>;
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
}

export const ServiceMeshDataPlaneManagement: Schema.Schema<ServiceMeshDataPlaneManagement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(Schema.Array(ServiceMeshStatusDetails)),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshDataPlaneManagement" });

export interface ServiceMeshControlPlaneManagement {
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
  /** Explanation of state. */
  details?: ReadonlyArray<ServiceMeshStatusDetails>;
  /** Output only. Implementation of managed control plane. */
  implementation?:
    | "IMPLEMENTATION_UNSPECIFIED"
    | "ISTIOD"
    | "TRAFFIC_DIRECTOR"
    | "UPDATING"
    | (string & {});
}

export const ServiceMeshControlPlaneManagement: Schema.Schema<ServiceMeshControlPlaneManagement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(ServiceMeshStatusDetails)),
    implementation: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshControlPlaneManagement" });

export interface ServiceMeshState {
  /** Output only. Results of running Service Mesh analyzers. */
  analysisMessages?: ReadonlyArray<ServiceMeshAnalysisMessage>;
  /** Output only. Status of data plane management. */
  dataPlaneManagement?: ServiceMeshDataPlaneManagement;
  /** Output only. List of conditions reported for this membership. */
  conditions?: ReadonlyArray<ServiceMeshCondition>;
  /** Output only. Status of control plane management */
  controlPlaneManagement?: ServiceMeshControlPlaneManagement;
  /** The API version (i.e. Istio CRD version) for configuring service mesh in this cluster. This version is influenced by the `default_channel` field. */
  configApiVersion?: string;
}

export const ServiceMeshState: Schema.Schema<ServiceMeshState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    analysisMessages: Schema.optional(Schema.Array(ServiceMeshAnalysisMessage)),
    dataPlaneManagement: Schema.optional(ServiceMeshDataPlaneManagement),
    conditions: Schema.optional(Schema.Array(ServiceMeshCondition)),
    controlPlaneManagement: Schema.optional(ServiceMeshControlPlaneManagement),
    configApiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshState" });

export interface ConfigManagementGitConfig {
  /** Optional. The branch of the repository to sync from. Default: master. */
  syncBranch?: string;
  /** Optional. URL for the HTTPS proxy to be used when communicating with the Git repo. Only specify when secret_type is `cookiefile`, `token`, or `none`. */
  httpsProxy?: string;
  /** Optional. The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository. */
  policyDir?: string;
  /** Optional. Period in seconds between consecutive syncs. Default: 15. */
  syncWaitSecs?: string;
  /** Required. Type of secret configured for access to the Git repo. Must be one of `ssh`, `cookiefile`, `gcenode`, `token`, `gcpserviceaccount`, `githubapp` or `none`. The validation of this is case-sensitive. */
  secretType?: string;
  /** Optional. Git revision (tag or hash) to check out. Default HEAD. */
  syncRev?: string;
  /** Optional. The Google Cloud Service Account Email used for auth when secret_type is `gcpserviceaccount`. */
  gcpServiceAccountEmail?: string;
  /** Required. The URL of the Git repository to use as the source of truth. */
  syncRepo?: string;
}

export const ConfigManagementGitConfig: Schema.Schema<ConfigManagementGitConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    syncBranch: Schema.optional(Schema.String),
    httpsProxy: Schema.optional(Schema.String),
    policyDir: Schema.optional(Schema.String),
    syncWaitSecs: Schema.optional(Schema.String),
    secretType: Schema.optional(Schema.String),
    syncRev: Schema.optional(Schema.String),
    gcpServiceAccountEmail: Schema.optional(Schema.String),
    syncRepo: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementGitConfig" });

export interface ConfigManagementOciConfig {
  /** Required. The OCI image repository URL for the package to sync from. e.g. `LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME`. */
  syncRepo?: string;
  /** Optional. The Google Cloud Service Account Email used for auth when secret_type is `gcpserviceaccount`. */
  gcpServiceAccountEmail?: string;
  /** Optional. The absolute path of the directory that contains the local resources. Default: the root directory of the image. */
  policyDir?: string;
  /** Optional. Period in seconds between consecutive syncs. Default: 15. */
  syncWaitSecs?: string;
  /** Required. Type of secret configured for access to the OCI repo. Must be one of `gcenode`, `gcpserviceaccount`, `k8sserviceaccount` or `none`. The validation of this is case-sensitive. */
  secretType?: string;
}

export const ConfigManagementOciConfig: Schema.Schema<ConfigManagementOciConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    syncRepo: Schema.optional(Schema.String),
    gcpServiceAccountEmail: Schema.optional(Schema.String),
    policyDir: Schema.optional(Schema.String),
    syncWaitSecs: Schema.optional(Schema.String),
    secretType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementOciConfig" });

export interface ConfigManagementConfigSync {
  /** Optional. The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring and Cloud Monarch when Workload Identity is enabled. The GSA should have the Monitoring Metric Writer (roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount `default` in the namespace `config-management-monitoring` should be bound to the GSA. Deprecated: If Workload Identity Federation for GKE is enabled, Google Cloud Service Account is no longer needed for exporting Config Sync metrics: https://cloud.google.com/kubernetes-engine/enterprise/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring#custom-monitoring. */
  metricsGcpServiceAccountEmail?: string;
  /** Optional. Git repo configuration for the cluster. */
  git?: ConfigManagementGitConfig;
  /** Optional. Specifies whether the Config Sync repo is in `hierarchical` or `unstructured` mode. Defaults to `hierarchical`. See https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/configs#organize-configs for an explanation. */
  sourceFormat?: string;
  /** Optional. Enables the installation of Config Sync. If set to true, the Feature will manage Config Sync resources, and apply the other ConfigSync fields if they exist. If set to false, the Feature will ignore all other ConfigSync fields and delete the Config Sync resources. If omitted, ConfigSync is considered enabled if the git or oci field is present. */
  enabled?: boolean;
  /** Optional. Set to true to enable the Config Sync admission webhook to prevent drifts. If set to false, disables the Config Sync admission webhook and does not prevent drifts. Defaults to false. See https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/prevent-config-drift for details. */
  preventDrift?: boolean;
  /** Optional. Set to true to stop syncing configs for a single cluster. Default to false. */
  stopSyncing?: boolean;
  /** Optional. OCI repo configuration for the cluster. */
  oci?: ConfigManagementOciConfig;
  /** Optional. Configuration for deployment overrides. Applies only to Config Sync deployments with containers that are not a root or namespace reconciler: `reconciler-manager`, `otel-collector`, `resource-group-controller-manager`, `admission-webhook`. To override a root or namespace reconciler, use the rootsync or reposync fields at https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields#override-resources instead. */
  deploymentOverrides?: ReadonlyArray<ConfigManagementDeploymentOverride>;
}

export const ConfigManagementConfigSync: Schema.Schema<ConfigManagementConfigSync> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricsGcpServiceAccountEmail: Schema.optional(Schema.String),
    git: Schema.optional(ConfigManagementGitConfig),
    sourceFormat: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    preventDrift: Schema.optional(Schema.Boolean),
    stopSyncing: Schema.optional(Schema.Boolean),
    oci: Schema.optional(ConfigManagementOciConfig),
    deploymentOverrides: Schema.optional(
      Schema.Array(ConfigManagementDeploymentOverride),
    ),
  }).annotate({ identifier: "ConfigManagementConfigSync" });

export interface AppDevExperienceStatus {
  /** Code specifies AppDevExperienceFeature's subcomponent ready state. */
  code?: "CODE_UNSPECIFIED" | "OK" | "FAILED" | "UNKNOWN" | (string & {});
  /** Description is populated if Code is Failed, explaining why it has failed. */
  description?: string;
}

export const AppDevExperienceStatus: Schema.Schema<AppDevExperienceStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppDevExperienceStatus" });

export interface IdentityServiceServerConfig {
  /** Optional. Defines the connection type to communicate with the LDAP server. If `starttls` or `ldaps` is specified, the certificate_authority_data should not be empty. */
  connectionType?: string;
  /** Required. Defines the hostname or IP of the LDAP server. Port is optional and will default to 389, if unspecified. For example, "ldap.server.example" or "10.10.10.10:389". */
  host?: string;
  /** Optional. Contains a Base64 encoded, PEM formatted certificate authority certificate for the LDAP server. This must be provided for the "ldaps" and "startTLS" connections. */
  certificateAuthorityData?: string;
}

export const IdentityServiceServerConfig: Schema.Schema<IdentityServiceServerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectionType: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    certificateAuthorityData: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceServerConfig" });

export interface PolicyControllerResourceList {
  /** CPU requirement expressed in Kubernetes resource units. */
  cpu?: string;
  /** Memory requirement expressed in Kubernetes resource units. */
  memory?: string;
}

export const PolicyControllerResourceList: Schema.Schema<PolicyControllerResourceList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpu: Schema.optional(Schema.String),
    memory: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyControllerResourceList" });

export interface PolicyControllerResourceRequirements {
  /** Requests describes the amount of compute resources reserved for the container by the kube-scheduler. */
  requests?: PolicyControllerResourceList;
  /** Limits describes the maximum amount of compute resources allowed for use by the running container. */
  limits?: PolicyControllerResourceList;
}

export const PolicyControllerResourceRequirements: Schema.Schema<PolicyControllerResourceRequirements> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(PolicyControllerResourceList),
    limits: Schema.optional(PolicyControllerResourceList),
  }).annotate({ identifier: "PolicyControllerResourceRequirements" });

export interface PolicyControllerToleration {
  /** Matches a taint key (not necessarily unique). */
  key?: string;
  /** Matches a taint operator. */
  operator?: string;
  /** Matches a taint value. */
  value?: string;
  /** Matches a taint effect. */
  effect?: string;
}

export const PolicyControllerToleration: Schema.Schema<PolicyControllerToleration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    operator: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    effect: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyControllerToleration" });

export interface PolicyControllerPolicyControllerDeploymentConfig {
  /** Pod affinity configuration. */
  podAffinity?:
    | "AFFINITY_UNSPECIFIED"
    | "NO_AFFINITY"
    | "ANTI_AFFINITY"
    | (string & {});
  /** Container resource requirements. */
  containerResources?: PolicyControllerResourceRequirements;
  /** Pod tolerations of node taints. */
  podTolerations?: ReadonlyArray<PolicyControllerToleration>;
  /** Pod replica count. */
  replicaCount?: string;
  /** Pod anti-affinity enablement. Deprecated: use `pod_affinity` instead. */
  podAntiAffinity?: boolean;
}

export const PolicyControllerPolicyControllerDeploymentConfig: Schema.Schema<PolicyControllerPolicyControllerDeploymentConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    podAffinity: Schema.optional(Schema.String),
    containerResources: Schema.optional(PolicyControllerResourceRequirements),
    podTolerations: Schema.optional(Schema.Array(PolicyControllerToleration)),
    replicaCount: Schema.optional(Schema.String),
    podAntiAffinity: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "PolicyControllerPolicyControllerDeploymentConfig",
  });

export interface PolicyControllerMonitoringConfig {
  /** Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export. */
  backends?: ReadonlyArray<
    | "MONITORING_BACKEND_UNSPECIFIED"
    | "PROMETHEUS"
    | "CLOUD_MONITORING"
    | (string & {})
  >;
}

export const PolicyControllerMonitoringConfig: Schema.Schema<PolicyControllerMonitoringConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backends: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PolicyControllerMonitoringConfig" });

export interface PolicyControllerBundleInstallSpec {
  /** the set of namespaces to be exempted from the bundle */
  exemptedNamespaces?: ReadonlyArray<string>;
}

export const PolicyControllerBundleInstallSpec: Schema.Schema<PolicyControllerBundleInstallSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const PolicyControllerTemplateLibraryConfig: Schema.Schema<PolicyControllerTemplateLibraryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    installation: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyControllerTemplateLibraryConfig" });

export interface PolicyControllerPolicyContentSpec {
  /** map of bundle name to BundleInstallSpec. The bundle name maps to the `bundleName` key in the `policycontroller.gke.io/constraintData` annotation on a constraint. */
  bundles?: Record<string, PolicyControllerBundleInstallSpec>;
  /** Configures the installation of the Template Library. */
  templateLibrary?: PolicyControllerTemplateLibraryConfig;
}

export const PolicyControllerPolicyContentSpec: Schema.Schema<PolicyControllerPolicyContentSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bundles: Schema.optional(
      Schema.Record(Schema.String, PolicyControllerBundleInstallSpec),
    ),
    templateLibrary: Schema.optional(PolicyControllerTemplateLibraryConfig),
  }).annotate({ identifier: "PolicyControllerPolicyContentSpec" });

export interface PolicyControllerHubConfig {
  /** The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster. */
  exemptableNamespaces?: ReadonlyArray<string>;
  /** Enables the ability to mutate resources using Policy Controller. */
  mutationEnabled?: boolean;
  /** Map of deployment configs to deployments (“admission”, “audit”, “mutation”). */
  deploymentConfigs?: Record<
    string,
    PolicyControllerPolicyControllerDeploymentConfig
  >;
  /** Monitoring specifies the configuration of monitoring. */
  monitoring?: PolicyControllerMonitoringConfig;
  /** The install_spec represents the intended state specified by the latest request that mutated install_spec in the feature spec, not the lifecycle state of the feature observed by the Hub feature controller that is reported in the feature state. */
  installSpec?:
    | "INSTALL_SPEC_UNSPECIFIED"
    | "INSTALL_SPEC_NOT_INSTALLED"
    | "INSTALL_SPEC_ENABLED"
    | "INSTALL_SPEC_SUSPENDED"
    | "INSTALL_SPEC_DETACHED"
    | (string & {});
  /** Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. */
  auditIntervalSeconds?: string;
  /** Logs all denies and dry run failures. */
  logDeniesEnabled?: boolean;
  /** Specifies the desired policy content on the cluster */
  policyContent?: PolicyControllerPolicyContentSpec;
  /** The maximum number of audit violations to be stored in a constraint. If not set, the internal default (currently 20) will be used. */
  constraintViolationLimit?: string;
  /** Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. */
  referentialRulesEnabled?: boolean;
}

export const PolicyControllerHubConfig: Schema.Schema<PolicyControllerHubConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exemptableNamespaces: Schema.optional(Schema.Array(Schema.String)),
    mutationEnabled: Schema.optional(Schema.Boolean),
    deploymentConfigs: Schema.optional(
      Schema.Record(
        Schema.String,
        PolicyControllerPolicyControllerDeploymentConfig,
      ),
    ),
    monitoring: Schema.optional(PolicyControllerMonitoringConfig),
    installSpec: Schema.optional(Schema.String),
    auditIntervalSeconds: Schema.optional(Schema.String),
    logDeniesEnabled: Schema.optional(Schema.Boolean),
    policyContent: Schema.optional(PolicyControllerPolicyContentSpec),
    constraintViolationLimit: Schema.optional(Schema.String),
    referentialRulesEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PolicyControllerHubConfig" });

export interface ConfigManagementPolicyControllerMonitoring {
  /** Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export. */
  backends?: ReadonlyArray<
    | "MONITORING_BACKEND_UNSPECIFIED"
    | "PROMETHEUS"
    | "CLOUD_MONITORING"
    | (string & {})
  >;
}

export const ConfigManagementPolicyControllerMonitoring: Schema.Schema<ConfigManagementPolicyControllerMonitoring> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backends: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ConfigManagementPolicyControllerMonitoring" });

export interface ConfigManagementPolicyController {
  /** Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. */
  referentialRulesEnabled?: boolean;
  /** Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect. */
  enabled?: boolean;
  /** Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. */
  auditIntervalSeconds?: string;
  /** Logs all denies and dry run failures. */
  logDeniesEnabled?: boolean;
  /** Enable or disable mutation in policy controller. If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster. */
  mutationEnabled?: boolean;
  /** Monitoring specifies the configuration of monitoring. */
  monitoring?: ConfigManagementPolicyControllerMonitoring;
  /** The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster. */
  exemptableNamespaces?: ReadonlyArray<string>;
  /** Installs the default template library along with Policy Controller. */
  templateLibraryInstalled?: boolean;
  /** Output only. Last time this membership spec was updated. */
  updateTime?: string;
}

export const ConfigManagementPolicyController: Schema.Schema<ConfigManagementPolicyController> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    referentialRulesEnabled: Schema.optional(Schema.Boolean),
    enabled: Schema.optional(Schema.Boolean),
    auditIntervalSeconds: Schema.optional(Schema.String),
    logDeniesEnabled: Schema.optional(Schema.Boolean),
    mutationEnabled: Schema.optional(Schema.Boolean),
    monitoring: Schema.optional(ConfigManagementPolicyControllerMonitoring),
    exemptableNamespaces: Schema.optional(Schema.Array(Schema.String)),
    templateLibraryInstalled: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementPolicyController" });

export interface ConfigManagementHierarchyControllerConfig {
  /** Whether Hierarchy Controller is enabled in this cluster. */
  enabled?: boolean;
  /** Whether pod tree labels are enabled in this cluster. */
  enablePodTreeLabels?: boolean;
  /** Whether hierarchical resource quota is enabled in this cluster. */
  enableHierarchicalResourceQuota?: boolean;
}

export const ConfigManagementHierarchyControllerConfig: Schema.Schema<ConfigManagementHierarchyControllerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    enablePodTreeLabels: Schema.optional(Schema.Boolean),
    enableHierarchicalResourceQuota: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ConfigManagementHierarchyControllerConfig" });

export interface ConfigManagementBinauthzConfig {
  /** Whether binauthz is enabled in this cluster. */
  enabled?: boolean;
}

export const ConfigManagementBinauthzConfig: Schema.Schema<ConfigManagementBinauthzConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ConfigManagementBinauthzConfig" });

export interface ConfigManagementSpec {
  /** Optional. Policy Controller configuration for the cluster. Deprecated: Configuring Policy Controller through the configmanagement feature is no longer recommended. Use the policycontroller feature instead. */
  policyController?: ConfigManagementPolicyController;
  /** Optional. Version of Config Sync to install. Defaults to the latest supported Config Sync version if the config_sync field is enabled. See supported versions at https://cloud.google.com/kubernetes-engine/config-sync/docs/get-support-config-sync#version_support_policy. */
  version?: string;
  /** Optional. Deprecated: From version 1.21.0, automatic Feature management is unavailable, and Config Sync only supports manual upgrades. */
  management?:
    | "MANAGEMENT_UNSPECIFIED"
    | "MANAGEMENT_AUTOMATIC"
    | "MANAGEMENT_MANUAL"
    | (string & {});
  /** Optional. Hierarchy Controller configuration for the cluster. Deprecated: Configuring Hierarchy Controller through the configmanagement feature is no longer recommended. Use https://github.com/kubernetes-sigs/hierarchical-namespaces instead. */
  hierarchyController?: ConfigManagementHierarchyControllerConfig;
  /** Optional. Deprecated: Binauthz configuration will be ignored and should not be set. */
  binauthz?: ConfigManagementBinauthzConfig;
  /** Optional. User-specified cluster name used by the Config Sync cluster-name-selector annotation or ClusterSelector object, for applying configs to only a subset of clusters. Read more about the cluster-name-selector annotation and ClusterSelector object at https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects#limiting-configs. Only set this field if a name different from the cluster's fleet membership name is used by the Config Sync cluster-name-selector annotation or ClusterSelector. */
  cluster?: string;
  /** Optional. Config Sync configuration for the cluster. */
  configSync?: ConfigManagementConfigSync;
}

export const ConfigManagementSpec: Schema.Schema<ConfigManagementSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyController: Schema.optional(ConfigManagementPolicyController),
    version: Schema.optional(Schema.String),
    management: Schema.optional(Schema.String),
    hierarchyController: Schema.optional(
      ConfigManagementHierarchyControllerConfig,
    ),
    binauthz: Schema.optional(ConfigManagementBinauthzConfig),
    cluster: Schema.optional(Schema.String),
    configSync: Schema.optional(ConfigManagementConfigSync),
  }).annotate({ identifier: "ConfigManagementSpec" });

export interface ClusterUpgradeIgnoredMembership {
  /** Reason why the membership is ignored. */
  reason?: string;
  /** Time when the membership was first set to ignored. */
  ignoredTime?: string;
}

export const ClusterUpgradeIgnoredMembership: Schema.Schema<ClusterUpgradeIgnoredMembership> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    ignoredTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterUpgradeIgnoredMembership" });

export interface ClusterUpgradeGKEUpgrade {
  /** Version of the upgrade, e.g., "1.22.1-gke.100". */
  version?: string;
  /** Name of the upgrade, e.g., "k8s_control_plane". */
  name?: string;
}

export const ClusterUpgradeGKEUpgrade: Schema.Schema<ClusterUpgradeGKEUpgrade> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterUpgradeGKEUpgrade" });

export interface ClusterUpgradeUpgradeStatus {
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
  /** Reason for this status. */
  reason?: string;
  /** Last timestamp the status was updated. */
  updateTime?: string;
}

export const ClusterUpgradeUpgradeStatus: Schema.Schema<ClusterUpgradeUpgradeStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterUpgradeUpgradeStatus" });

export interface ClusterUpgradeMembershipGKEUpgradeState {
  /** Which upgrade to track the state. */
  upgrade?: ClusterUpgradeGKEUpgrade;
  /** Status of the upgrade. */
  status?: ClusterUpgradeUpgradeStatus;
}

export const ClusterUpgradeMembershipGKEUpgradeState: Schema.Schema<ClusterUpgradeMembershipGKEUpgradeState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upgrade: Schema.optional(ClusterUpgradeGKEUpgrade),
    status: Schema.optional(ClusterUpgradeUpgradeStatus),
  }).annotate({ identifier: "ClusterUpgradeMembershipGKEUpgradeState" });

export interface ClusterUpgradeState {
  /** Whether this membership is ignored by the feature. For example, manually upgraded clusters can be ignored if they are newer than the default versions of its release channel. */
  ignored?: ClusterUpgradeIgnoredMembership;
  /** Actual upgrade state against desired. */
  upgrades?: ReadonlyArray<ClusterUpgradeMembershipGKEUpgradeState>;
}

export const ClusterUpgradeState: Schema.Schema<ClusterUpgradeState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ignored: Schema.optional(ClusterUpgradeIgnoredMembership),
    upgrades: Schema.optional(
      Schema.Array(ClusterUpgradeMembershipGKEUpgradeState),
    ),
  }).annotate({ identifier: "ClusterUpgradeState" });

export interface IdentityServiceDiagnosticInterface {
  /** Determines whether to enable the diagnostic interface. */
  enabled?: boolean;
  /** Determines the expiration time of the diagnostic interface enablement. When reached, requests to the interface would be automatically rejected. */
  expirationTime?: string;
}

export const IdentityServiceDiagnosticInterface: Schema.Schema<IdentityServiceDiagnosticInterface> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    expirationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceDiagnosticInterface" });

export interface IdentityServiceIdentityServiceOptions {
  /** Configuration options for the AIS diagnostic interface. */
  diagnosticInterface?: IdentityServiceDiagnosticInterface;
  /** Determines the lifespan of STS tokens issued by Anthos Identity Service. */
  sessionDuration?: string;
}

export const IdentityServiceIdentityServiceOptions: Schema.Schema<IdentityServiceIdentityServiceOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diagnosticInterface: Schema.optional(IdentityServiceDiagnosticInterface),
    sessionDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceIdentityServiceOptions" });

export interface AppDevExperienceState {
  /** Status of subcomponent that detects configured Service Mesh resources. */
  networkingInstallSucceeded?: AppDevExperienceStatus;
}

export const AppDevExperienceState: Schema.Schema<AppDevExperienceState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkingInstallSucceeded: Schema.optional(AppDevExperienceStatus),
  }).annotate({ identifier: "AppDevExperienceState" });

export interface IdentityServiceOidcConfig {
  /** Prefix to prepend to group name. */
  groupPrefix?: string;
  /** Claim in OIDC ID token that holds group information. */
  groupsClaim?: string;
  /** PEM-encoded CA for OIDC provider. */
  certificateAuthorityData?: string;
  /** Prefix to prepend to user name. */
  userPrefix?: string;
  /** ID for OIDC client application. */
  clientId?: string;
  /** Registered redirect uri to redirect users going through OAuth flow using kubectl plugin. */
  kubectlRedirectUri?: string;
  /** Flag to denote if reverse proxy is used to connect to auth provider. This flag should be set to true when provider is not reachable by Google Cloud Console. */
  deployCloudConsoleProxy?: boolean;
  /** Comma-separated list of key-value pairs. */
  extraParams?: string;
  /** Output only. Encrypted OIDC Client secret */
  encryptedClientSecret?: string;
  /** Claim in OIDC ID token that holds username. */
  userClaim?: string;
  /** URI for the OIDC provider. This should point to the level below .well-known/openid-configuration. */
  issuerUri?: string;
  /** Enable access token. */
  enableAccessToken?: boolean;
  /** Comma-separated list of identifiers. */
  scopes?: string;
  /** Input only. Unencrypted OIDC client secret will be passed to the GKE Hub CLH. */
  clientSecret?: string;
}

export const IdentityServiceOidcConfig: Schema.Schema<IdentityServiceOidcConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupPrefix: Schema.optional(Schema.String),
    groupsClaim: Schema.optional(Schema.String),
    certificateAuthorityData: Schema.optional(Schema.String),
    userPrefix: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    kubectlRedirectUri: Schema.optional(Schema.String),
    deployCloudConsoleProxy: Schema.optional(Schema.Boolean),
    extraParams: Schema.optional(Schema.String),
    encryptedClientSecret: Schema.optional(Schema.String),
    userClaim: Schema.optional(Schema.String),
    issuerUri: Schema.optional(Schema.String),
    enableAccessToken: Schema.optional(Schema.Boolean),
    scopes: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceOidcConfig" });

export interface IdentityServiceSamlConfig {
  /** Required. The entity ID of the SAML IdP. */
  identityProviderId?: string;
  /** Optional. The SAML attribute to read groups from. This value is expected to be a string and will be passed along as-is (with the option of being prefixed by the `group_prefix`). */
  groupsAttribute?: string;
  /** Optional. Prefix to prepend to user name. */
  userPrefix?: string;
  /** Optional. The mapping of additional user attributes like nickname, birthday and address etc.. `key` is the name of this additional attribute. `value` is a string presenting as CEL(common expression language, go/cel) used for getting the value from the resources. Take nickname as an example, in this case, `key` is "attribute.nickname" and `value` is "assertion.nickname". */
  attributeMapping?: Record<string, string>;
  /** Optional. Prefix to prepend to group name. */
  groupPrefix?: string;
  /** Required. The list of IdP certificates to validate the SAML response against. */
  identityProviderCertificates?: ReadonlyArray<string>;
  /** Required. The URI where the SAML IdP exposes the SSO service. */
  identityProviderSsoUri?: string;
  /** Optional. The SAML attribute to read username from. If unspecified, the username will be read from the NameID element of the assertion in SAML response. This value is expected to be a string and will be passed along as-is (with the option of being prefixed by the `user_prefix`). */
  userAttribute?: string;
}

export const IdentityServiceSamlConfig: Schema.Schema<IdentityServiceSamlConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identityProviderId: Schema.optional(Schema.String),
    groupsAttribute: Schema.optional(Schema.String),
    userPrefix: Schema.optional(Schema.String),
    attributeMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    groupPrefix: Schema.optional(Schema.String),
    identityProviderCertificates: Schema.optional(Schema.Array(Schema.String)),
    identityProviderSsoUri: Schema.optional(Schema.String),
    userAttribute: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceSamlConfig" });

export interface IdentityServiceUserConfig {
  /** Optional. The name of the attribute which matches against the input username. This is used to find the user in the LDAP database e.g. "(=)" and is combined with the optional filter field. This defaults to "userPrincipalName". */
  loginAttribute?: string;
  /** Optional. Determines which attribute to use as the user's identity after they are authenticated. This is distinct from the loginAttribute field to allow users to login with a username, but then have their actual identifier be an email address or full Distinguished Name (DN). For example, setting loginAttribute to "sAMAccountName" and identifierAttribute to "userPrincipalName" would allow a user to login as "bsmith", but actual RBAC policies for the user would be written as "bsmith@example.com". Using "userPrincipalName" is recommended since this will be unique for each user. This defaults to "userPrincipalName". */
  idAttribute?: string;
  /** Required. The location of the subtree in the LDAP directory to search for user entries. */
  baseDn?: string;
  /** Optional. Filter to apply when searching for the user. This can be used to further restrict the user accounts which are allowed to login. This defaults to "(objectClass=User)". */
  filter?: string;
}

export const IdentityServiceUserConfig: Schema.Schema<IdentityServiceUserConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loginAttribute: Schema.optional(Schema.String),
    idAttribute: Schema.optional(Schema.String),
    baseDn: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceUserConfig" });

export interface IdentityServiceSimpleBindCredentials {
  /** Required. Input only. The password of the service account object/user. */
  password?: string;
  /** Required. The distinguished name(DN) of the service account object/user. */
  dn?: string;
  /** Output only. The encrypted password of the service account object/user. */
  encryptedPassword?: string;
}

export const IdentityServiceSimpleBindCredentials: Schema.Schema<IdentityServiceSimpleBindCredentials> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    password: Schema.optional(Schema.String),
    dn: Schema.optional(Schema.String),
    encryptedPassword: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceSimpleBindCredentials" });

export interface IdentityServiceServiceAccountConfig {
  /** Credentials for basic auth. */
  simpleBindCredentials?: IdentityServiceSimpleBindCredentials;
}

export const IdentityServiceServiceAccountConfig: Schema.Schema<IdentityServiceServiceAccountConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    simpleBindCredentials: Schema.optional(
      IdentityServiceSimpleBindCredentials,
    ),
  }).annotate({ identifier: "IdentityServiceServiceAccountConfig" });

export interface IdentityServiceGroupConfig {
  /** Optional. The identifying name of each group a user belongs to. For example, if this is set to "distinguishedName" then RBACs and other group expectations should be written as full DNs. This defaults to "distinguishedName". */
  idAttribute?: string;
  /** Optional. Optional filter to be used when searching for groups a user belongs to. This can be used to explicitly match only certain groups in order to reduce the amount of groups returned for each user. This defaults to "(objectClass=Group)". */
  filter?: string;
  /** Required. The location of the subtree in the LDAP directory to search for group entries. */
  baseDn?: string;
}

export const IdentityServiceGroupConfig: Schema.Schema<IdentityServiceGroupConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idAttribute: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    baseDn: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceGroupConfig" });

export interface IdentityServiceLdapConfig {
  /** Required. Server settings for the external LDAP server. */
  server?: IdentityServiceServerConfig;
  /** Required. Defines where users exist in the LDAP directory. */
  user?: IdentityServiceUserConfig;
  /** Required. Contains the credentials of the service account which is authorized to perform the LDAP search in the directory. The credentials can be supplied by the combination of the DN and password or the client certificate. */
  serviceAccount?: IdentityServiceServiceAccountConfig;
  /** Optional. Contains the properties for locating and authenticating groups in the directory. */
  group?: IdentityServiceGroupConfig;
}

export const IdentityServiceLdapConfig: Schema.Schema<IdentityServiceLdapConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    server: Schema.optional(IdentityServiceServerConfig),
    user: Schema.optional(IdentityServiceUserConfig),
    serviceAccount: Schema.optional(IdentityServiceServiceAccountConfig),
    group: Schema.optional(IdentityServiceGroupConfig),
  }).annotate({ identifier: "IdentityServiceLdapConfig" });

export interface IdentityServiceAzureADConfig {
  /** Kind of Azure AD account to be authenticated. Supported values are or for accounts belonging to a specific tenant. */
  tenant?: string;
  /** Output only. Encrypted AzureAD client secret. */
  encryptedClientSecret?: string;
  /** The redirect URL that kubectl uses for authorization. */
  kubectlRedirectUri?: string;
  /** Optional. Claim in the AzureAD ID Token that holds the user details. */
  userClaim?: string;
  /** Optional. Format of the AzureAD groups that the client wants for auth. */
  groupFormat?: string;
  /** ID for the registered client application that makes authentication requests to the Azure AD identity provider. */
  clientId?: string;
  /** Input only. Unencrypted AzureAD client secret will be passed to the GKE Hub CLH. */
  clientSecret?: string;
}

export const IdentityServiceAzureADConfig: Schema.Schema<IdentityServiceAzureADConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenant: Schema.optional(Schema.String),
    encryptedClientSecret: Schema.optional(Schema.String),
    kubectlRedirectUri: Schema.optional(Schema.String),
    userClaim: Schema.optional(Schema.String),
    groupFormat: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityServiceAzureADConfig" });

export interface IdentityServiceGoogleConfig {
  /** Disable automatic configuration of Google Plugin on supported platforms. */
  disable?: boolean;
}

export const IdentityServiceGoogleConfig: Schema.Schema<IdentityServiceGoogleConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "IdentityServiceGoogleConfig" });

export interface IdentityServiceAuthMethod {
  /** OIDC specific configuration. */
  oidcConfig?: IdentityServiceOidcConfig;
  /** Identifier for auth config. */
  name?: string;
  /** SAML specific configuration. */
  samlConfig?: IdentityServiceSamlConfig;
  /** LDAP specific configuration. */
  ldapConfig?: IdentityServiceLdapConfig;
  /** Proxy server address to use for auth method. */
  proxy?: string;
  /** AzureAD specific Configuration. */
  azureadConfig?: IdentityServiceAzureADConfig;
  /** GoogleConfig specific configuration */
  googleConfig?: IdentityServiceGoogleConfig;
}

export const IdentityServiceAuthMethod: Schema.Schema<IdentityServiceAuthMethod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oidcConfig: Schema.optional(IdentityServiceOidcConfig),
    name: Schema.optional(Schema.String),
    samlConfig: Schema.optional(IdentityServiceSamlConfig),
    ldapConfig: Schema.optional(IdentityServiceLdapConfig),
    proxy: Schema.optional(Schema.String),
    azureadConfig: Schema.optional(IdentityServiceAzureADConfig),
    googleConfig: Schema.optional(IdentityServiceGoogleConfig),
  }).annotate({ identifier: "IdentityServiceAuthMethod" });

export interface IdentityServiceSpec {
  /** A member may support multiple auth methods. */
  authMethods?: ReadonlyArray<IdentityServiceAuthMethod>;
  /** Optional. non-protocol-related configuration options. */
  identityServiceOptions?: IdentityServiceIdentityServiceOptions;
}

export const IdentityServiceSpec: Schema.Schema<IdentityServiceSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authMethods: Schema.optional(Schema.Array(IdentityServiceAuthMethod)),
    identityServiceOptions: Schema.optional(
      IdentityServiceIdentityServiceOptions,
    ),
  }).annotate({ identifier: "IdentityServiceSpec" });

export interface IdentityServiceState {
  /** Installed AIS version. This is the AIS version installed on this member. The values makes sense iff state is OK. */
  installedVersion?: string;
  /** Deployment state on this member */
  state?: "DEPLOYMENT_STATE_UNSPECIFIED" | "OK" | "ERROR" | (string & {});
  /** The reason of the failure. */
  failureReason?: string;
  /** Last reconciled membership configuration */
  memberConfig?: IdentityServiceSpec;
}

export const IdentityServiceState: Schema.Schema<IdentityServiceState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    installedVersion: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
    memberConfig: Schema.optional(IdentityServiceSpec),
  }).annotate({ identifier: "IdentityServiceState" });

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

export const PolicyControllerOnClusterState: Schema.Schema<PolicyControllerOnClusterState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const PolicyControllerPolicyContentState: Schema.Schema<PolicyControllerPolicyContentState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    templateLibraryState: Schema.optional(PolicyControllerOnClusterState),
    bundleStates: Schema.optional(
      Schema.Record(Schema.String, PolicyControllerOnClusterState),
    ),
    referentialSyncConfigState: Schema.optional(PolicyControllerOnClusterState),
  }).annotate({ identifier: "PolicyControllerPolicyContentState" });

export interface WorkloadCertificateSpec {
  /** CertificateManagement specifies workload certificate management. */
  certificateManagement?:
    | "CERTIFICATE_MANAGEMENT_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | (string & {});
}

export const WorkloadCertificateSpec: Schema.Schema<WorkloadCertificateSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateManagement: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkloadCertificateSpec" });

export interface LifecycleState {
  /** Output only. The current state of the Feature resource in the Hub API. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ENABLING"
    | "ACTIVE"
    | "DISABLING"
    | "UPDATING"
    | "SERVICE_UPDATING"
    | (string & {});
}

export const LifecycleState: Schema.Schema<LifecycleState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "LifecycleState" });

export interface RBACRoleBindingActuationSpec {}

export const RBACRoleBindingActuationSpec: Schema.Schema<RBACRoleBindingActuationSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RBACRoleBindingActuationSpec",
  });

export interface ConfigManagementGroupVersionKind {
  /** Kubernetes Kind */
  kind?: string;
  /** Kubernetes Version */
  version?: string;
  /** Kubernetes Group */
  group?: string;
}

export const ConfigManagementGroupVersionKind: Schema.Schema<ConfigManagementGroupVersionKind> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementGroupVersionKind" });

export interface ConfigManagementErrorResource {
  /** Group/version/kind of the resource that is causing an error */
  resourceGvk?: ConfigManagementGroupVersionKind;
  /** Path in the git repo of the erroneous config */
  sourcePath?: string;
  /** Metadata name of the resource that is causing an error */
  resourceName?: string;
  /** Namespace of the resource that is causing an error */
  resourceNamespace?: string;
}

export const ConfigManagementErrorResource: Schema.Schema<ConfigManagementErrorResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGvk: Schema.optional(ConfigManagementGroupVersionKind),
    sourcePath: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    resourceNamespace: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementErrorResource" });

export interface MeteringState {
  /** The time stamp of the most recent measurement of the number of vCPUs in the cluster. */
  lastMeasurementTime?: string;
  /** The vCPUs capacity in the cluster according to the most recent measurement (1/1000 precision). */
  preciseLastMeasuredClusterVcpuCapacity?: number;
}

export const MeteringState: Schema.Schema<MeteringState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastMeasurementTime: Schema.optional(Schema.String),
    preciseLastMeasuredClusterVcpuCapacity: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MeteringState" });

export interface ConfigManagementInstallError {
  /** A string representing the user facing error message. */
  errorMessage?: string;
}

export const ConfigManagementInstallError: Schema.Schema<ConfigManagementInstallError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementInstallError" });

export interface ConfigManagementOperatorState {
  /** Install errors. */
  errors?: ReadonlyArray<ConfigManagementInstallError>;
  /** The semenatic version number of the operator. */
  version?: string;
  /** The state of the Operator's deployment. */
  deploymentState?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
}

export const ConfigManagementOperatorState: Schema.Schema<ConfigManagementOperatorState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(ConfigManagementInstallError)),
    version: Schema.optional(Schema.String),
    deploymentState: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementOperatorState" });

export interface CloudBuildSpec {
  /** Version of the cloud build software on the cluster. */
  version?: string;
  /** Whether it is allowed to run the privileged builds on the cluster or not. */
  securityPolicy?:
    | "SECURITY_POLICY_UNSPECIFIED"
    | "NON_PRIVILEGED"
    | "PRIVILEGED"
    | (string & {});
}

export const CloudBuildSpec: Schema.Schema<CloudBuildSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    securityPolicy: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudBuildSpec" });

export interface ConfigManagementPolicyControllerMigration {
  /** Stage of the migration. */
  stage?: "STAGE_UNSPECIFIED" | "ACM_MANAGED" | "POCO_MANAGED" | (string & {});
  /** Last time this membership spec was copied to PoCo feature. */
  copyTime?: string;
}

export const ConfigManagementPolicyControllerMigration: Schema.Schema<ConfigManagementPolicyControllerMigration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stage: Schema.optional(Schema.String),
    copyTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementPolicyControllerMigration" });

export interface ConfigManagementConfigSyncError {
  /** A string representing the user facing error message */
  errorMessage?: string;
}

export const ConfigManagementConfigSyncError: Schema.Schema<ConfigManagementConfigSyncError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementConfigSyncError" });

export interface ConfigManagementHierarchyControllerDeploymentState {
  /** The deployment state for open source HNC (e.g. v0.7.0-hc.0). */
  hnc?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** The deployment state for Hierarchy Controller extension (e.g. v0.7.0-hc.1). */
  extension?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
}

export const ConfigManagementHierarchyControllerDeploymentState: Schema.Schema<ConfigManagementHierarchyControllerDeploymentState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hnc: Schema.optional(Schema.String),
    extension: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ConfigManagementHierarchyControllerDeploymentState",
  });

export interface ConfigManagementHierarchyControllerState {
  /** The version for Hierarchy Controller. */
  version?: ConfigManagementHierarchyControllerVersion;
  /** The deployment state for Hierarchy Controller. */
  state?: ConfigManagementHierarchyControllerDeploymentState;
}

export const ConfigManagementHierarchyControllerState: Schema.Schema<ConfigManagementHierarchyControllerState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(ConfigManagementHierarchyControllerVersion),
    state: Schema.optional(ConfigManagementHierarchyControllerDeploymentState),
  }).annotate({ identifier: "ConfigManagementHierarchyControllerState" });

export interface Location {
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

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
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "Operation" });

export interface ConfigManagementConfigSyncVersion {
  /** Version of the deployed admission-webhook pod. */
  admissionWebhook?: string;
  /** Version of the deployed reconciler container in root-reconciler pod. */
  rootReconciler?: string;
  /** Version of the deployed git-sync pod. */
  gitSync?: string;
  /** Version of the deployed syncer pod. */
  syncer?: string;
  /** Version of the deployed reconciler-manager pod. */
  reconcilerManager?: string;
  /** Version of the deployed monitor pod. */
  monitor?: string;
  /** Version of the deployed otel-collector pod */
  otelCollector?: string;
  /** Version of the deployed importer pod. */
  importer?: string;
  /** Version of the deployed resource-group-controller-manager pod */
  resourceGroupControllerManager?: string;
}

export const ConfigManagementConfigSyncVersion: Schema.Schema<ConfigManagementConfigSyncVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    admissionWebhook: Schema.optional(Schema.String),
    rootReconciler: Schema.optional(Schema.String),
    gitSync: Schema.optional(Schema.String),
    syncer: Schema.optional(Schema.String),
    reconcilerManager: Schema.optional(Schema.String),
    monitor: Schema.optional(Schema.String),
    otelCollector: Schema.optional(Schema.String),
    importer: Schema.optional(Schema.String),
    resourceGroupControllerManager: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementConfigSyncVersion" });

export interface RBACRoleBindingActuationRBACRoleBindingState {
  /** The reason for the failure. */
  description?: string;
  /** The time the RBACRoleBinding status was last updated. */
  updateTime?: string;
  /** Output only. The state of the RBACRoleBinding. */
  state?:
    | "ROLE_BINDING_STATE_UNSPECIFIED"
    | "OK"
    | "CUSTOM_ROLE_MISSING_FROM_CLUSTER"
    | (string & {});
}

export const RBACRoleBindingActuationRBACRoleBindingState: Schema.Schema<RBACRoleBindingActuationRBACRoleBindingState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "RBACRoleBindingActuationRBACRoleBindingState" });

export interface RBACRoleBindingActuationState {
  /** Output only. The state of RBACRoleBindings using custom roles that exist on the cluster, keyed by RBACRoleBinding resource name with format: projects/{project}/locations/{location}/scopes/{scope}/rbacrolebindings/{rbacrolebinding}. */
  rbacrolebindingStates?: Record<
    string,
    RBACRoleBindingActuationRBACRoleBindingState
  >;
}

export const RBACRoleBindingActuationState: Schema.Schema<RBACRoleBindingActuationState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rbacrolebindingStates: Schema.optional(
      Schema.Record(
        Schema.String,
        RBACRoleBindingActuationRBACRoleBindingState,
      ),
    ),
  }).annotate({ identifier: "RBACRoleBindingActuationState" });

export interface ServiceMeshSpec {
  /** Optional. Enables automatic Service Mesh management. */
  management?:
    | "MANAGEMENT_UNSPECIFIED"
    | "MANAGEMENT_AUTOMATIC"
    | "MANAGEMENT_MANUAL"
    | "MANAGEMENT_NOT_INSTALLED"
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
  /** Determines which release channel to use for default injection and service mesh APIs. */
  defaultChannel?:
    | "CHANNEL_UNSPECIFIED"
    | "RAPID"
    | "REGULAR"
    | "STABLE"
    | (string & {});
}

export const ServiceMeshSpec: Schema.Schema<ServiceMeshSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    management: Schema.optional(Schema.String),
    configApi: Schema.optional(Schema.String),
    controlPlane: Schema.optional(Schema.String),
    defaultChannel: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceMeshSpec" });

export interface PolicyControllerSpec {
  /** Policy Controller configuration for the cluster. */
  policyControllerHubConfig?: PolicyControllerHubConfig;
  /** Version of Policy Controller installed. */
  version?: string;
}

export const PolicyControllerSpec: Schema.Schema<PolicyControllerSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyControllerHubConfig: Schema.optional(PolicyControllerHubConfig),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyControllerSpec" });

export interface FeatureSpec {
  /** Config Management FeatureSpec. */
  configmanagement?: ConfigManagementSpec;
  /** Workloadcertificate-specific FeatureSpec. */
  workloadcertificate?: WorkloadCertificateSpec;
  /** IdentityService FeatureSpec. */
  identityservice?: IdentityServiceSpec;
  /** ServiceMesh Feature Spec. */
  servicemesh?: ServiceMeshSpec;
  /** Rbacrolebindingactuation-specific FeatureSpec. */
  rbacrolebindingactuation?: RBACRoleBindingActuationSpec;
  /** Cloudbuild-specific FeatureSpec. */
  cloudbuild?: CloudBuildSpec;
  /** Policycontroller-specific FeatureSpec. */
  policycontroller?: PolicyControllerSpec;
  /** Whether this per-Feature spec was inherited from a fleet-level default. This field can be updated by users by either overriding a Feature config (updated to USER implicitly) or setting to FLEET explicitly. */
  origin?: Origin;
}

export const FeatureSpec: Schema.Schema<FeatureSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configmanagement: Schema.optional(ConfigManagementSpec),
    workloadcertificate: Schema.optional(WorkloadCertificateSpec),
    identityservice: Schema.optional(IdentityServiceSpec),
    servicemesh: Schema.optional(ServiceMeshSpec),
    rbacrolebindingactuation: Schema.optional(RBACRoleBindingActuationSpec),
    cloudbuild: Schema.optional(CloudBuildSpec),
    policycontroller: Schema.optional(PolicyControllerSpec),
    origin: Schema.optional(Origin),
  }).annotate({ identifier: "FeatureSpec" });

export interface ConfigManagementBinauthzVersion {
  /** The version of the binauthz webhook. */
  webhookVersion?: string;
}

export const ConfigManagementBinauthzVersion: Schema.Schema<ConfigManagementBinauthzVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhookVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementBinauthzVersion" });

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

export const ConfigManagementGatekeeperDeploymentState: Schema.Schema<ConfigManagementGatekeeperDeploymentState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gatekeeperControllerManagerState: Schema.optional(Schema.String),
    gatekeeperAudit: Schema.optional(Schema.String),
    gatekeeperMutation: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementGatekeeperDeploymentState" });

export interface OperationMetadata {
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusDetail?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  cancelRequested?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    statusDetail: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    cancelRequested: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface ConfigManagementSyncError {
  /** A description of the error */
  errorMessage?: string;
  /** A list of config(s) associated with the error, if any */
  errorResources?: ReadonlyArray<ConfigManagementErrorResource>;
  /** An ACM defined error code */
  code?: string;
}

export const ConfigManagementSyncError: Schema.Schema<ConfigManagementSyncError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorMessage: Schema.optional(Schema.String),
    errorResources: Schema.optional(
      Schema.Array(ConfigManagementErrorResource),
    ),
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementSyncError" });

export interface ConfigManagementSyncState {
  /** Timestamp type of when ACM last successfully synced the repo. */
  lastSyncTime?: string;
  /** Sync status code. */
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
  /** Token indicating the state of the repo. */
  sourceToken?: string;
  /** Token indicating the state of the importer. */
  importToken?: string;
  /** Token indicating the state of the syncer. */
  syncToken?: string;
  /** Deprecated: use last_sync_time instead. Timestamp of when ACM last successfully synced the repo. The time format is specified in https://golang.org/pkg/time/#Time.String */
  lastSync?: string;
  /** A list of errors resulting from problematic configs. This list will be truncated after 100 errors, although it is unlikely for that many errors to simultaneously exist. */
  errors?: ReadonlyArray<ConfigManagementSyncError>;
}

export const ConfigManagementSyncState: Schema.Schema<ConfigManagementSyncState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastSyncTime: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    sourceToken: Schema.optional(Schema.String),
    importToken: Schema.optional(Schema.String),
    syncToken: Schema.optional(Schema.String),
    lastSync: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(ConfigManagementSyncError)),
  }).annotate({ identifier: "ConfigManagementSyncState" });

export interface ConfigManagementConfigSyncDeploymentState {
  /** Deployment state of the syncer pod. */
  syncer?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Deployment state of reconciler-manager pod. */
  reconcilerManager?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Deployment state of root-reconciler. */
  rootReconciler?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Deployment state of the git-sync pod. */
  gitSync?:
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
  /** Deployment state of the monitor pod. */
  monitor?:
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
  /** Deployment state of the importer pod. */
  importer?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
  /** Deployment state of admission-webhook. */
  admissionWebhook?:
    | "DEPLOYMENT_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "ERROR"
    | "PENDING"
    | (string & {});
}

export const ConfigManagementConfigSyncDeploymentState: Schema.Schema<ConfigManagementConfigSyncDeploymentState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    syncer: Schema.optional(Schema.String),
    reconcilerManager: Schema.optional(Schema.String),
    rootReconciler: Schema.optional(Schema.String),
    gitSync: Schema.optional(Schema.String),
    resourceGroupControllerManager: Schema.optional(Schema.String),
    monitor: Schema.optional(Schema.String),
    otelCollector: Schema.optional(Schema.String),
    importer: Schema.optional(Schema.String),
    admissionWebhook: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementConfigSyncDeploymentState" });

export interface ConfigManagementConfigSyncState {
  /** Output only. The state of ConfigSync's process to sync configs to a cluster. */
  syncState?: ConfigManagementSyncState;
  /** Output only. Errors pertaining to the installation of Config Sync. */
  errors?: ReadonlyArray<ConfigManagementConfigSyncError>;
  /** Output only. The state of the RootSync CRD */
  rootsyncCrd?:
    | "CRD_STATE_UNSPECIFIED"
    | "NOT_INSTALLED"
    | "INSTALLED"
    | "TERMINATING"
    | "INSTALLING"
    | (string & {});
  /** Output only. The state of CS This field summarizes the other fields in this message. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CONFIG_SYNC_NOT_INSTALLED"
    | "CONFIG_SYNC_INSTALLED"
    | "CONFIG_SYNC_ERROR"
    | "CONFIG_SYNC_PENDING"
    | (string & {});
  /** Output only. Whether syncing resources to the cluster is stopped at the cluster level. */
  clusterLevelStopSyncingState?:
    | "STOP_SYNCING_STATE_UNSPECIFIED"
    | "NOT_STOPPED"
    | "PENDING"
    | "STOPPED"
    | (string & {});
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
  /** Output only. The version of ConfigSync deployed. */
  version?: ConfigManagementConfigSyncVersion;
  /** Output only. Information about the deployment of ConfigSync, including the version. of the various Pods deployed */
  deploymentState?: ConfigManagementConfigSyncDeploymentState;
}

export const ConfigManagementConfigSyncState: Schema.Schema<ConfigManagementConfigSyncState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    syncState: Schema.optional(ConfigManagementSyncState),
    errors: Schema.optional(Schema.Array(ConfigManagementConfigSyncError)),
    rootsyncCrd: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    clusterLevelStopSyncingState: Schema.optional(Schema.String),
    reposyncCrd: Schema.optional(Schema.String),
    crCount: Schema.optional(Schema.Number),
    version: Schema.optional(ConfigManagementConfigSyncVersion),
    deploymentState: Schema.optional(ConfigManagementConfigSyncDeploymentState),
  }).annotate({ identifier: "ConfigManagementConfigSyncState" });

export interface ConfigManagementPolicyControllerVersion {
  /** The gatekeeper image tag that is composed of ACM version, git tag, build number. */
  version?: string;
}

export const ConfigManagementPolicyControllerVersion: Schema.Schema<ConfigManagementPolicyControllerVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigManagementPolicyControllerVersion" });

export interface ConfigManagementPolicyControllerState {
  /** The version of Gatekeeper Policy Controller deployed. */
  version?: ConfigManagementPolicyControllerVersion;
  /** The state about the policy controller installation. */
  deploymentState?: ConfigManagementGatekeeperDeploymentState;
  /** Record state of ACM -> PoCo Hub migration for this feature. */
  migration?: ConfigManagementPolicyControllerMigration;
}

export const ConfigManagementPolicyControllerState: Schema.Schema<ConfigManagementPolicyControllerState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(ConfigManagementPolicyControllerVersion),
    deploymentState: Schema.optional(ConfigManagementGatekeeperDeploymentState),
    migration: Schema.optional(ConfigManagementPolicyControllerMigration),
  }).annotate({ identifier: "ConfigManagementPolicyControllerState" });

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

export const ConfigManagementBinauthzState: Schema.Schema<ConfigManagementBinauthzState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhook: Schema.optional(Schema.String),
    version: Schema.optional(ConfigManagementBinauthzVersion),
  }).annotate({ identifier: "ConfigManagementBinauthzState" });

export interface ConfigManagementState {
  /** Output only. The Kubernetes API server version of the cluster. */
  kubernetesApiServerVersion?: string;
  /** Output only. Current sync status. */
  configSyncState?: ConfigManagementConfigSyncState;
  /** Output only. Membership configuration in the cluster. This represents the actual state in the cluster, while the MembershipSpec in the FeatureSpec represents the intended state. */
  membershipSpec?: ConfigManagementSpec;
  /** Output only. PolicyController status. */
  policyControllerState?: ConfigManagementPolicyControllerState;
  /** Output only. This field is set to the `cluster_name` field of the Membership Spec if it is not empty. Otherwise, it is set to the cluster's fleet membership name. */
  clusterName?: string;
  /** Output only. Binauthz status. */
  binauthzState?: ConfigManagementBinauthzState;
  /** Output only. Hierarchy Controller status. */
  hierarchyControllerState?: ConfigManagementHierarchyControllerState;
  /** Output only. Current install status of ACM's Operator. */
  operatorState?: ConfigManagementOperatorState;
}

export const ConfigManagementState: Schema.Schema<ConfigManagementState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kubernetesApiServerVersion: Schema.optional(Schema.String),
    configSyncState: Schema.optional(ConfigManagementConfigSyncState),
    membershipSpec: Schema.optional(ConfigManagementSpec),
    policyControllerState: Schema.optional(
      ConfigManagementPolicyControllerState,
    ),
    clusterName: Schema.optional(Schema.String),
    binauthzState: Schema.optional(ConfigManagementBinauthzState),
    hierarchyControllerState: Schema.optional(
      ConfigManagementHierarchyControllerState,
    ),
    operatorState: Schema.optional(ConfigManagementOperatorState),
  }).annotate({ identifier: "ConfigManagementState" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(Operation)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface PolicyControllerState {
  /** The overall content state observed by the Hub Feature controller. */
  policyContentState?: PolicyControllerPolicyContentState;
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
}

export const PolicyControllerState: Schema.Schema<PolicyControllerState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyContentState: Schema.optional(PolicyControllerPolicyContentState),
    componentStates: Schema.optional(
      Schema.Record(Schema.String, PolicyControllerOnClusterState),
    ),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyControllerState" });

export interface State {
  /** The high-level, machine-readable status of this MembershipFeature. */
  code?: "CODE_UNSPECIFIED" | "OK" | "WARNING" | "ERROR" | (string & {});
  /** A human-readable description of the current status. */
  description?: string;
  /** The time this status and any related Feature-specific details were updated. */
  updateTime?: string;
}

export const State: Schema.Schema<State> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "State" });

export interface FeatureState {
  /** Service mesh state */
  servicemesh?: ServiceMeshState;
  /** Metering state */
  metering?: MeteringState;
  /** The high-level state of this MembershipFeature. */
  state?: State;
  /** Config Management state */
  configmanagement?: ConfigManagementState;
  /** Workload Identity state */
  workloadidentity?: WorkloadIdentityState;
  /** RBAC Role Binding Actuation state */
  rbacrolebindingactuation?: RBACRoleBindingActuationState;
  /** Identity service state */
  identityservice?: IdentityServiceState;
  /** Policy Controller state */
  policycontroller?: PolicyControllerState;
  /** Appdevexperience specific state. */
  appdevexperience?: AppDevExperienceState;
  /** Cluster upgrade state. */
  clusterupgrade?: ClusterUpgradeState;
}

export const FeatureState: Schema.Schema<FeatureState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    servicemesh: Schema.optional(ServiceMeshState),
    metering: Schema.optional(MeteringState),
    state: Schema.optional(State),
    configmanagement: Schema.optional(ConfigManagementState),
    workloadidentity: Schema.optional(WorkloadIdentityState),
    rbacrolebindingactuation: Schema.optional(RBACRoleBindingActuationState),
    identityservice: Schema.optional(IdentityServiceState),
    policycontroller: Schema.optional(PolicyControllerState),
    appdevexperience: Schema.optional(AppDevExperienceState),
    clusterupgrade: Schema.optional(ClusterUpgradeState),
  }).annotate({ identifier: "FeatureState" });

export interface MembershipFeature {
  /** Optional. Spec of this membershipFeature. */
  spec?: FeatureSpec;
  /** Google Cloud labels for this MembershipFeature. */
  labels?: Record<string, string>;
  /** Output only. When the MembershipFeature resource was deleted. */
  deleteTime?: string;
  /** Output only. Lifecycle information of the resource itself. */
  lifecycleState?: LifecycleState;
  /** Output only. When the MembershipFeature resource was created. */
  createTime?: string;
  /** Output only. When the MembershipFeature resource was last updated. */
  updateTime?: string;
  /** Output only. The resource name of the membershipFeature, in the format: `projects/{project}/locations/{location}/memberships/{membership}/features/{feature}`. Note that `membershipFeatures` is shortened to `features` in the resource name. (see http://go/aip/122#collection-identifiers) */
  name?: string;
  /** Output only. State of the this membershipFeature. */
  state?: FeatureState;
}

export const MembershipFeature: Schema.Schema<MembershipFeature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spec: Schema.optional(FeatureSpec),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    deleteTime: Schema.optional(Schema.String),
    lifecycleState: Schema.optional(LifecycleState),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    state: Schema.optional(FeatureState),
  }).annotate({ identifier: "MembershipFeature" });

export interface ListMembershipFeaturesResponse {
  /** A token to request the next page of resources from the `ListMembershipFeatures` method. The value of an empty string means that there are no more resources to return. */
  nextPageToken?: string;
  /** List of locations that could not be reached while fetching this list. */
  unreachable?: ReadonlyArray<string>;
  /** The list of matching MembershipFeatures. */
  membershipFeatures?: ReadonlyArray<MembershipFeature>;
}

export const ListMembershipFeaturesResponse: Schema.Schema<ListMembershipFeaturesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    membershipFeatures: Schema.optional(Schema.Array(MembershipFeature)),
  }).annotate({ identifier: "ListMembershipFeaturesResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

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
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta/{+name}/locations" }),
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
    T.Http({ method: "GET", path: "v2beta/{+name}" }),
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

export interface ListProjectsLocationsMembershipsFeaturesRequest {
  /** One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering. */
  orderBy?: string;
  /** When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. */
  pageSize?: number;
  /** Lists MembershipFeatures that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Feature with the name "helloworld" in project "foo-proj" and membership "member-bar": name = "projects/foo-proj/locations/global/memberships/member-bar/features/helloworld" - Features that have a label called `foo`: labels.foo:* - Features that have a label called `foo` whose value is `bar`: labels.foo = bar */
  filter?: string;
  /** Token returned by previous call to `ListFeatures` which specifies the position in the list from where to continue listing the resources. */
  pageToken?: string;
  /** Required. The parent where the MembershipFeature will be listed. In the format: `projects/* /locations/* /memberships/*`. */
  parent: string;
}

export const ListProjectsLocationsMembershipsFeaturesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta/{+parent}/features" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMembershipsFeaturesRequest>;

export type ListProjectsLocationsMembershipsFeaturesResponse =
  ListMembershipFeaturesResponse;
export const ListProjectsLocationsMembershipsFeaturesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMembershipFeaturesResponse;

export type ListProjectsLocationsMembershipsFeaturesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists MembershipFeatures in a given project and location. */
export const listProjectsLocationsMembershipsFeatures: API.PaginatedOperationMethod<
  ListProjectsLocationsMembershipsFeaturesRequest,
  ListProjectsLocationsMembershipsFeaturesResponse,
  ListProjectsLocationsMembershipsFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMembershipsFeaturesRequest,
  output: ListProjectsLocationsMembershipsFeaturesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsMembershipsFeaturesRequest {
  /** Required. The ID of the membership_feature to create. */
  featureId?: string;
  /** Required. The name of parent where the MembershipFeature will be created. Specified in the format `projects/* /locations/* /memberships/*`. */
  parent: string;
  /** Idempotent request UUID. */
  requestId?: string;
  /** Request body */
  body?: MembershipFeature;
}

export const CreateProjectsLocationsMembershipsFeaturesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    featureId: Schema.optional(Schema.String).pipe(T.HttpQuery("featureId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(MembershipFeature).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta/{+parent}/features",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsMembershipsFeaturesRequest>;

export type CreateProjectsLocationsMembershipsFeaturesResponse = Operation;
export const CreateProjectsLocationsMembershipsFeaturesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsMembershipsFeaturesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates membershipFeature under a given parent. */
export const createProjectsLocationsMembershipsFeatures: API.OperationMethod<
  CreateProjectsLocationsMembershipsFeaturesRequest,
  CreateProjectsLocationsMembershipsFeaturesResponse,
  CreateProjectsLocationsMembershipsFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMembershipsFeaturesRequest,
  output: CreateProjectsLocationsMembershipsFeaturesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsMembershipsFeaturesRequest {
  /** Required. The name of the membershipFeature to be deleted. Specified in the format `projects/* /locations/* /memberships/* /features/*`. */
  name: string;
  /** Idempotent request UUID. */
  requestId?: string;
}

export const DeleteProjectsLocationsMembershipsFeaturesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsMembershipsFeaturesRequest>;

export type DeleteProjectsLocationsMembershipsFeaturesResponse = Operation;
export const DeleteProjectsLocationsMembershipsFeaturesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsMembershipsFeaturesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a membershipFeature. */
export const deleteProjectsLocationsMembershipsFeatures: API.OperationMethod<
  DeleteProjectsLocationsMembershipsFeaturesRequest,
  DeleteProjectsLocationsMembershipsFeaturesResponse,
  DeleteProjectsLocationsMembershipsFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMembershipsFeaturesRequest,
  output: DeleteProjectsLocationsMembershipsFeaturesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsMembershipsFeaturesRequest {
  /** Idempotent request UUID. */
  requestId?: string;
  /** Output only. The resource name of the membershipFeature, in the format: `projects/{project}/locations/{location}/memberships/{membership}/features/{feature}`. Note that `membershipFeatures` is shortened to `features` in the resource name. (see http://go/aip/122#collection-identifiers) */
  name: string;
  /** Required. Mask of fields to update. */
  updateMask?: string;
  /** Optional. If set to true, and the MembershipFeature is not found, a new MembershipFeature will be created. In this situation, `update_mask` is ignored. */
  allowMissing?: boolean;
  /** Request body */
  body?: MembershipFeature;
}

export const PatchProjectsLocationsMembershipsFeaturesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    body: Schema.optional(MembershipFeature).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsMembershipsFeaturesRequest>;

export type PatchProjectsLocationsMembershipsFeaturesResponse = Operation;
export const PatchProjectsLocationsMembershipsFeaturesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsMembershipsFeaturesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing MembershipFeature. */
export const patchProjectsLocationsMembershipsFeatures: API.OperationMethod<
  PatchProjectsLocationsMembershipsFeaturesRequest,
  PatchProjectsLocationsMembershipsFeaturesResponse,
  PatchProjectsLocationsMembershipsFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMembershipsFeaturesRequest,
  output: PatchProjectsLocationsMembershipsFeaturesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMembershipsFeaturesRequest {
  /** Required. The MembershipFeature resource name in the format `projects/* /locations/* /memberships/* /features/*`. */
  name: string;
}

export const GetProjectsLocationsMembershipsFeaturesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMembershipsFeaturesRequest>;

export type GetProjectsLocationsMembershipsFeaturesResponse = MembershipFeature;
export const GetProjectsLocationsMembershipsFeaturesResponse =
  /*@__PURE__*/ /*#__PURE__*/ MembershipFeature;

export type GetProjectsLocationsMembershipsFeaturesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** ========= MembershipFeature Services ========= Gets details of a membershipFeature. */
export const getProjectsLocationsMembershipsFeatures: API.OperationMethod<
  GetProjectsLocationsMembershipsFeaturesRequest,
  GetProjectsLocationsMembershipsFeaturesResponse,
  GetProjectsLocationsMembershipsFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMembershipsFeaturesRequest,
  output: GetProjectsLocationsMembershipsFeaturesResponse,
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
    T.Http({ method: "POST", path: "v2beta/{+name}:cancel", hasBody: true }),
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
    T.Http({ method: "GET", path: "v2beta/{+name}" }),
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
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta/{+name}/operations" }),
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
