// ==========================================================================
// GKE Hub API (gkehub v1beta1)
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
  version: "v1beta1",
  rootUrl: "https://gkehub.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GenerateExclusivityManifestResponse {
  /** The YAML manifest of the membership CR to apply if a new version of the CR is available. Empty if no update needs to be applied. */
  crManifest?: string;
  /** The YAML manifest of the membership CRD to apply if a newer version of the CRD is available. Empty if no update needs to be applied. */
  crdManifest?: string;
}

export const GenerateExclusivityManifestResponse: Schema.Schema<GenerateExclusivityManifestResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    crManifest: Schema.optional(Schema.String),
    crdManifest: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateExclusivityManifestResponse" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

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

export interface ValidateExclusivityResponse {
  /** The validation result. * `OK` means that exclusivity is validated, assuming the manifest produced by GenerateExclusivityManifest is successfully applied. * `ALREADY_EXISTS` means that the Membership CRD is already owned by another Hub. See `status.message` for more information. */
  status?: GoogleRpcStatus;
}

export const ValidateExclusivityResponse: Schema.Schema<ValidateExclusivityResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "ValidateExclusivityResponse" });

export interface Location {
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

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

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface Binding {
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Expr),
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Binding" });

export interface ResourceOptions {
  /** Optional. Use `apiextensions/v1beta1` instead of `apiextensions/v1` for CustomResourceDefinition resources. This option should be set for clusters with Kubernetes apiserver versions <1.16. */
  v1beta1Crd?: boolean;
  /** Optional. The Connect agent version to use for connect_resources. Defaults to the latest GKE Connect version. The version must be a currently supported version, obsolete versions will be rejected. */
  connectVersion?: string;
  /** Optional. Git version of the Kubernetes cluster. This is only used to gate the Connect Agent migration to svc.id.goog on GDC-SO 1.33.100 patch and above. */
  k8sGitVersion?: string;
  /** Optional. Major and minor version of the Kubernetes cluster. This is only used to determine which version to use for the CustomResourceDefinition resources, `apiextensions/v1beta1` or`apiextensions/v1`. */
  k8sVersion?: string;
}

export const ResourceOptions: Schema.Schema<ResourceOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    v1beta1Crd: Schema.optional(Schema.Boolean),
    connectVersion: Schema.optional(Schema.String),
    k8sGitVersion: Schema.optional(Schema.String),
    k8sVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceOptions" });

export interface Authority {
  /** Output only. The name of the workload identity pool in which `issuer` will be recognized. There is a single Workload Identity Pool per Hub that is shared between all Memberships that belong to that Hub. For a Hub hosted in {PROJECT_ID}, the workload pool format is `{PROJECT_ID}.hub.id.goog`, although this is subject to change in newer versions of this API. */
  workloadIdentityPool?: string;
  /** Optional. Output only. The name of the scope-tenancy workload identity pool. This pool is set in the fleet-level feature. */
  scopeTenancyWorkloadIdentityPool?: string;
  /** Optional. Output only. The identity provider for the scope-tenancy workload identity pool. */
  scopeTenancyIdentityProvider?: string;
  /** Optional. A JSON Web Token (JWT) issuer URI. `issuer` must start with `https://` and be a valid URL with length <2000 characters. If set, then Google will allow valid OIDC tokens from this issuer to authenticate within the workload_identity_pool. OIDC discovery will be performed on this URI to validate tokens from the issuer. Clearing `issuer` disables Workload Identity. `issuer` cannot be directly modified; it must be cleared (and Workload Identity disabled) before using a new issuer (and re-enabling Workload Identity). */
  issuer?: string;
  /** Optional. OIDC verification keys for this Membership in JWKS format (RFC 7517). When this field is set, OIDC discovery will NOT be performed on `issuer`, and instead OIDC tokens will be validated using this field. */
  oidcJwks?: string;
  /** Output only. An identity provider that reflects the `issuer` in the workload identity pool. */
  identityProvider?: string;
}

export const Authority: Schema.Schema<Authority> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workloadIdentityPool: Schema.optional(Schema.String),
    scopeTenancyWorkloadIdentityPool: Schema.optional(Schema.String),
    scopeTenancyIdentityProvider: Schema.optional(Schema.String),
    issuer: Schema.optional(Schema.String),
    oidcJwks: Schema.optional(Schema.String),
    identityProvider: Schema.optional(Schema.String),
  }).annotate({ identifier: "Authority" });

export interface GkeCluster {
  /** Immutable. Self-link of the Google Cloud resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported. */
  resourceLink?: string;
  /** Output only. If cluster_missing is set then it denotes that the GKE cluster no longer exists in the GKE Control Plane. */
  clusterMissing?: boolean;
}

export const GkeCluster: Schema.Schema<GkeCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceLink: Schema.optional(Schema.String),
    clusterMissing: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GkeCluster" });

export interface EdgeCluster {
  /** Immutable. Self-link of the Google Cloud resource for the Edge Cluster. For example: //edgecontainer.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster */
  resourceLink?: string;
}

export const EdgeCluster: Schema.Schema<EdgeCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "EdgeCluster" });

export interface KubernetesMetadata {
  /** Output only. vCPU count as reported by Kubernetes nodes resources. */
  vcpuCount?: number;
  /** Output only. Node count as reported by Kubernetes nodes resources. */
  nodeCount?: number;
  /** Output only. The time at which these details were last updated. This update_time is different from the Membership-level update_time since EndpointDetails are updated internally for API consumers. */
  updateTime?: string;
  /** Output only. Kubernetes API server version string as reported by '/version'. */
  kubernetesApiServerVersion?: string;
  /** Output only. Node providerID as reported by the first node in the list of nodes on the Kubernetes endpoint. On Kubernetes platforms that support zero-node clusters (like GKE-on-Google Cloud), the node_count will be zero and the node_provider_id will be empty. */
  nodeProviderId?: string;
  /** Output only. The total memory capacity as reported by the sum of all Kubernetes nodes resources, defined in MB. */
  memoryMb?: number;
}

export const KubernetesMetadata: Schema.Schema<KubernetesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vcpuCount: Schema.optional(Schema.Number),
    nodeCount: Schema.optional(Schema.Number),
    updateTime: Schema.optional(Schema.String),
    kubernetesApiServerVersion: Schema.optional(Schema.String),
    nodeProviderId: Schema.optional(Schema.String),
    memoryMb: Schema.optional(Schema.Number),
  }).annotate({ identifier: "KubernetesMetadata" });

export interface MultiCloudCluster {
  /** Immutable. Self-link of the Google Cloud resource for the GKE Multi-Cloud cluster. For example: //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/awsClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/azureClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/attachedClusters/my-cluster */
  resourceLink?: string;
  /** Output only. If cluster_missing is set then it denotes that API(gkemulticloud.googleapis.com) resource for this GKE Multi-Cloud cluster no longer exists. */
  clusterMissing?: boolean;
}

export const MultiCloudCluster: Schema.Schema<MultiCloudCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceLink: Schema.optional(Schema.String),
    clusterMissing: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MultiCloudCluster" });

export interface ResourceManifest {
  /** YAML manifest of the resource. */
  manifest?: string;
  /** Whether the resource provided in the manifest is `cluster_scoped`. If unset, the manifest is assumed to be namespace scoped. This field is used for REST mapping when applying the resource in a cluster. */
  clusterScoped?: boolean;
}

export const ResourceManifest: Schema.Schema<ResourceManifest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    manifest: Schema.optional(Schema.String),
    clusterScoped: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ResourceManifest" });

export interface KubernetesResource {
  /** Input only. The YAML representation of the Membership CR. This field is ignored for GKE clusters where Hub can read the CR directly. Callers should provide the CR that is currently present in the cluster during CreateMembership or UpdateMembership, or leave this field empty if none exists. The CR manifest is used to validate the cluster has not been registered with another Membership. */
  membershipCrManifest?: string;
  /** Optional. Options for Kubernetes resource generation. */
  resourceOptions?: ResourceOptions;
  /** Output only. Additional Kubernetes resources that need to be applied to the cluster after Membership creation, and after every update. This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask. */
  membershipResources?: ReadonlyArray<ResourceManifest>;
  /** Output only. The Kubernetes resources for installing the GKE Connect agent This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask. */
  connectResources?: ReadonlyArray<ResourceManifest>;
}

export const KubernetesResource: Schema.Schema<KubernetesResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    membershipCrManifest: Schema.optional(Schema.String),
    resourceOptions: Schema.optional(ResourceOptions),
    membershipResources: Schema.optional(Schema.Array(ResourceManifest)),
    connectResources: Schema.optional(Schema.Array(ResourceManifest)),
  }).annotate({ identifier: "KubernetesResource" });

export interface OnPremCluster {
  /** Immutable. Whether the cluster is an admin cluster. */
  adminCluster?: boolean;
  /** Immutable. Self-link of the Google Cloud resource for the GKE On-Prem cluster. For example: //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/vmwareClusters/my-cluster //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/bareMetalClusters/my-cluster */
  resourceLink?: string;
  /** Output only. If cluster_missing is set then it denotes that API(gkeonprem.googleapis.com) resource for this GKE On-Prem cluster no longer exists. */
  clusterMissing?: boolean;
  /** Immutable. The on prem cluster's type. */
  clusterType?:
    | "CLUSTERTYPE_UNSPECIFIED"
    | "BOOTSTRAP"
    | "HYBRID"
    | "STANDALONE"
    | "USER"
    | (string & {});
}

export const OnPremCluster: Schema.Schema<OnPremCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminCluster: Schema.optional(Schema.Boolean),
    resourceLink: Schema.optional(Schema.String),
    clusterMissing: Schema.optional(Schema.Boolean),
    clusterType: Schema.optional(Schema.String),
  }).annotate({ identifier: "OnPremCluster" });

export interface ApplianceCluster {
  /** Immutable. Self-link of the Google Cloud resource for the Appliance Cluster. For example: //transferappliance.googleapis.com/projects/my-project/locations/us-west1-a/appliances/my-appliance */
  resourceLink?: string;
}

export const ApplianceCluster: Schema.Schema<ApplianceCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApplianceCluster" });

export interface MembershipEndpoint {
  /** Optional. Specific information for a GKE-on-Google Cloud cluster. */
  gkeCluster?: GkeCluster;
  /** Optional. Specific information for a Google Edge cluster. */
  edgeCluster?: EdgeCluster;
  /** Output only. Useful Kubernetes-specific metadata. */
  kubernetesMetadata?: KubernetesMetadata;
  /** Optional. Specific information for a GKE Multi-Cloud cluster. */
  multiCloudCluster?: MultiCloudCluster;
  /** Optional. The in-cluster Kubernetes Resources that should be applied for a correctly registered cluster, in the steady state. These resources: * Ensure that the cluster is exclusively registered to one and only one Hub Membership. * Propagate Workload Pool Information available in the Membership Authority field. * Ensure proper initial configuration of default Hub Features. */
  kubernetesResource?: KubernetesResource;
  /** Optional. Specific information for a GKE On-Prem cluster. An onprem user-cluster who has no resourceLink is not allowed to use this field, it should have a nil "type" instead. */
  onPremCluster?: OnPremCluster;
  /** Optional. Specific information for a GDC Edge Appliance cluster. */
  applianceCluster?: ApplianceCluster;
}

export const MembershipEndpoint: Schema.Schema<MembershipEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gkeCluster: Schema.optional(GkeCluster),
    edgeCluster: Schema.optional(EdgeCluster),
    kubernetesMetadata: Schema.optional(KubernetesMetadata),
    multiCloudCluster: Schema.optional(MultiCloudCluster),
    kubernetesResource: Schema.optional(KubernetesResource),
    onPremCluster: Schema.optional(OnPremCluster),
    applianceCluster: Schema.optional(ApplianceCluster),
  }).annotate({ identifier: "MembershipEndpoint" });

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
  /** This field is never set by the Hub Service. */
  description?: string;
  /** This field is never set by the Hub Service. */
  updateTime?: string;
}

export const MembershipState: Schema.Schema<MembershipState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MembershipState" });

export interface MonitoringConfig {
  /** Optional. Project used to report Metrics */
  projectId?: string;
  /** Optional. Cluster name used to report metrics. For Anthos on VMWare/Baremetal/MultiCloud clusters, it would be in format {cluster_type}/{cluster_name}, e.g., "awsClusters/cluster_1". */
  cluster?: string;
  /** Optional. Kubernetes system metrics, if available, are written to this prefix. This defaults to kubernetes.io for GKE, and kubernetes.io/anthos for Anthos eventually. Noted: Anthos MultiCloud will have kubernetes.io prefix today but will migration to be under kubernetes.io/anthos. */
  kubernetesMetricsPrefix?: string;
  /** Optional. For GKE and Multicloud clusters, this is the UUID of the cluster resource. For VMWare and Baremetal clusters, this is the kube-system UID. */
  clusterHash?: string;
  /** Optional. Location used to report Metrics */
  location?: string;
}

export const MonitoringConfig: Schema.Schema<MonitoringConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    cluster: Schema.optional(Schema.String),
    kubernetesMetricsPrefix: Schema.optional(Schema.String),
    clusterHash: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "MonitoringConfig" });

export interface Membership {
  /** Optional. How to identify workloads from this Membership. See the documentation on Workload Identity for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity */
  authority?: Authority;
  /** Optional. Endpoint information to reach this member. */
  endpoint?: MembershipEndpoint;
  /** Output only. The type of the membership. */
  membershipType?:
    | "MEMBERSHIP_TYPE_UNSPECIFIED"
    | "LIGHTWEIGHT"
    | (string & {});
  /** Optional. The infrastructure type this Membership is running on. */
  infrastructureType?:
    | "INFRASTRUCTURE_TYPE_UNSPECIFIED"
    | "ON_PREM"
    | "MULTI_CLOUD"
    | (string & {});
  /** Output only. State of the Membership resource. */
  state?: MembershipState;
  /** Output only. For clusters using Connect, the timestamp of the most recent connection established with Google Cloud. This time is updated every several minutes, not continuously. For clusters that do not use GKE Connect, or that have never connected successfully, this field will be unset. */
  lastConnectionTime?: string;
  /** Optional. Google Cloud labels for this membership. These labels are not leveraged by multi-cluster features, instead, we prefer cluster labels, which can be set on GKE cluster or other cluster types. */
  labels?: Record<string, string>;
  /** Optional. Description of this membership, limited to 63 characters. Must match the regex: `a-zA-Z0-9*` */
  description?: string;
  /** Output only. When the Membership was last updated. */
  updateTime?: string;
  /** Output only. Google-generated UUID for this resource. This is unique across all Membership resources. If a Membership resource is deleted and another resource with the same name is created, it gets a different unique_id. */
  uniqueId?: string;
  /** Output only. The full, unique name of this Membership resource in the format `projects/* /locations/* /memberships/{membership_id}`, set during creation. `membership_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. */
  name?: string;
  /** Output only. When the Membership was deleted. */
  deleteTime?: string;
  /** Output only. When the Membership was created. */
  createTime?: string;
  /** Optional. An externally-generated and managed ID for this Membership. This ID may be modified after creation, but this is not recommended. For GKE clusters, external_id is managed by the Hub API and updates will be ignored. The ID must match the regex: `a-zA-Z0-9*` If this Membership represents a Kubernetes cluster, this value should be set to the UID of the `kube-system` namespace object. */
  externalId?: string;
  /** Optional. The monitoring config information for this membership. */
  monitoringConfig?: MonitoringConfig;
}

export const Membership: Schema.Schema<Membership> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authority: Schema.optional(Authority),
    endpoint: Schema.optional(MembershipEndpoint),
    membershipType: Schema.optional(Schema.String),
    infrastructureType: Schema.optional(Schema.String),
    state: Schema.optional(MembershipState),
    lastConnectionTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    uniqueId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    externalId: Schema.optional(Schema.String),
    monitoringConfig: Schema.optional(MonitoringConfig),
  }).annotate({ identifier: "Membership" });

export interface ListMembershipsResponse {
  /** A token to request the next page of resources from the `ListMemberships` method. The value of an empty string means that there are no more resources to return. */
  nextPageToken?: string;
  /** List of locations that could not be reached while fetching this list. */
  unreachable?: ReadonlyArray<string>;
  /** The list of matching Memberships. */
  resources?: ReadonlyArray<Membership>;
}

export const ListMembershipsResponse: Schema.Schema<ListMembershipsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    resources: Schema.optional(Schema.Array(Membership)),
  }).annotate({ identifier: "ListMembershipsResponse" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(GoogleRpcStatus),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
  }).annotate({ identifier: "ListOperationsResponse" });

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
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
    bindings: Schema.optional(Schema.Array(Binding)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Policy" });

export interface TypeMeta {
  /** APIVersion of the resource (e.g. v1). */
  apiVersion?: string;
  /** Kind of the resource (e.g. Deployment). */
  kind?: string;
}

export const TypeMeta: Schema.Schema<TypeMeta> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "TypeMeta" });

export interface ConnectAgentResource {
  /** Kubernetes type of the resource. */
  type?: TypeMeta;
  /** YAML manifest of the resource. */
  manifest?: string;
}

export const ConnectAgentResource: Schema.Schema<ConnectAgentResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(TypeMeta),
    manifest: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectAgentResource" });

export interface GenerateConnectManifestResponse {
  /** The ordered list of Kubernetes resources that need to be applied to the cluster for GKE Connect agent installation/upgrade. */
  manifest?: ReadonlyArray<ConnectAgentResource>;
}

export const GenerateConnectManifestResponse: Schema.Schema<GenerateConnectManifestResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    manifest: Schema.optional(Schema.Array(ConnectAgentResource)),
  }).annotate({ identifier: "GenerateConnectManifestResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

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

export interface OperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusDetail?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  cancelRequested?: boolean;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    statusDetail: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    cancelRequested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OperationMetadata" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface ListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Location)),
  }).annotate({ identifier: "ListLocationsResponse" });

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
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/locations" }),
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
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/operations" }),
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

export interface GenerateConnectManifestProjectsLocationsMembershipsRequest {
  /** Optional. The Connect agent version to use. Defaults to the most current version. */
  version?: string;
  /** Optional. The registry to fetch the connect agent image from. Defaults to gcr.io/gkeconnect. */
  registry?: string;
  /** Optional. The image pull secret content for the registry, if not public. */
  imagePullSecretContent?: string;
  /** Optional. Namespace for GKE Connect agent resources. Defaults to `gke-connect`. The Connect Agent is authorized automatically when run in the default namespace. Otherwise, explicit authorization must be granted with an additional IAM binding. */
  "connectAgent.namespace"?: string;
  /** Optional. URI of a proxy if connectivity from the agent to gkeconnect.googleapis.com requires the use of a proxy. Format must be in the form `http(s)://{proxy_address}`, depending on the HTTP/HTTPS protocol supported by the proxy. This will direct the connect agent's outbound traffic through a HTTP(S) proxy. */
  "connectAgent.proxy"?: string;
  /** Optional. If true, generate the resources for upgrade only. Some resources generated only for installation (e.g. secrets) will be excluded. */
  isUpgrade?: boolean;
  /** Do not set. */
  "connectAgent.name"?: string;
  /** Required. The Membership resource name the Agent will associate with, in the format `projects/* /locations/* /memberships/*`. */
  name: string;
}

export const GenerateConnectManifestProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String).pipe(T.HttpQuery("version")),
    registry: Schema.optional(Schema.String).pipe(T.HttpQuery("registry")),
    imagePullSecretContent: Schema.optional(Schema.String).pipe(
      T.HttpQuery("imagePullSecretContent"),
    ),
    "connectAgent.namespace": Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectAgent.namespace"),
    ),
    "connectAgent.proxy": Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectAgent.proxy"),
    ),
    isUpgrade: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("isUpgrade")),
    "connectAgent.name": Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectAgent.name"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:generateConnectManifest" }),
    svc,
  ) as unknown as Schema.Schema<GenerateConnectManifestProjectsLocationsMembershipsRequest>;

export type GenerateConnectManifestProjectsLocationsMembershipsResponse =
  GenerateConnectManifestResponse;
export const GenerateConnectManifestProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateConnectManifestResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateConnectManifestProjectsLocationsMembershipsRequest,
  output: GenerateConnectManifestProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsMembershipsRequest {
  /** Optional. Lists Memberships that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Name is `bar` in project `foo-proj` and location `global`: name = "projects/foo-proj/locations/global/membership/bar" - Memberships that have a label called `foo`: labels.foo:* - Memberships that have a label called `foo` whose value is `bar`: labels.foo = bar - Memberships in the CREATING state: state = CREATING */
  filter?: string;
  /** Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. */
  pageSize?: number;
  /** Required. The parent (project and location) where the Memberships will be listed. Specified in the format `projects/* /locations/*`. `projects/* /locations/-` list memberships in all the regions. */
  parent: string;
  /** Optional. Token returned by previous call to `ListMemberships` which specifies the position in the list from where to continue listing the resources. */
  pageToken?: string;
  /** Optional. One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering. */
  orderBy?: string;
}

export const ListProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/memberships" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMembershipsRequest>;

export type ListProjectsLocationsMembershipsResponse = ListMembershipsResponse;
export const ListProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMembershipsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMembershipsRequest,
  output: ListProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsMembershipsRequest {
  /** Required. The Membership resource name in the format `projects/* /locations/* /memberships/*`. */
  name: string;
}

export const GetProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMembershipsRequest>;

export type GetProjectsLocationsMembershipsResponse = Membership;
export const GetProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Membership;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMembershipsRequest,
  output: GetProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsMembershipsRequest {
  /** Required. The membership resource name in the format: `projects/[project_id]/locations/global/memberships/[membership_id]` */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Mask of fields to update. At least one field path must be specified in this mask. */
  updateMask?: string;
  /** Request body */
  body?: Membership;
}

export const PatchProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Membership).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsMembershipsRequest>;

export type PatchProjectsLocationsMembershipsResponse = Operation;
export const PatchProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsMembershipsRequest>;

export type SetIamPolicyProjectsLocationsMembershipsResponse = Policy;
export const SetIamPolicyProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsMembershipsRequest,
  output: SetIamPolicyProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsMembershipsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsMembershipsRequest>;

export type TestIamPermissionsProjectsLocationsMembershipsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsMembershipsRequest,
  output: TestIamPermissionsProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsMembershipsRequest {
  /** Required. The parent (project and location) where the Memberships will be created. Specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Client chosen ID for the membership. `membership_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. */
  membershipId?: string;
  /** Request body */
  body?: Membership;
}

export const CreateProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    membershipId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("membershipId"),
    ),
    body: Schema.optional(Membership).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/memberships",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsMembershipsRequest>;

export type CreateProjectsLocationsMembershipsResponse = Operation;
export const CreateProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMembershipsRequest,
  output: CreateProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsMembershipsRequest {
  /** Optional. If set to true, any subresource from this Membership will also be deleted. Otherwise, the request will only work if the Membership has no subresource. */
  force?: boolean;
  /** Required. The Membership resource name in the format `projects/* /locations/* /memberships/*`. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsMembershipsRequest>;

export type DeleteProjectsLocationsMembershipsResponse = Operation;
export const DeleteProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMembershipsRequest,
  output: DeleteProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateExclusivityManifestProjectsLocationsMembershipsRequest {
  /** Required. The Membership resource name in the format `projects/* /locations/* /memberships/*`. */
  name: string;
  /** Optional. The YAML manifest of the membership CR retrieved by `kubectl get memberships membership`. Leave empty if the resource does not exist. */
  crManifest?: string;
  /** Optional. The YAML manifest of the membership CRD retrieved by `kubectl get customresourcedefinitions membership`. Leave empty if the resource does not exist. */
  crdManifest?: string;
}

export const GenerateExclusivityManifestProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    crManifest: Schema.optional(Schema.String).pipe(T.HttpQuery("crManifest")),
    crdManifest: Schema.optional(Schema.String).pipe(
      T.HttpQuery("crdManifest"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+name}:generateExclusivityManifest",
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateExclusivityManifestProjectsLocationsMembershipsRequest>;

export type GenerateExclusivityManifestProjectsLocationsMembershipsResponse =
  GenerateExclusivityManifestResponse;
export const GenerateExclusivityManifestProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateExclusivityManifestResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateExclusivityManifestProjectsLocationsMembershipsRequest,
  output: GenerateExclusivityManifestProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ValidateExclusivityProjectsLocationsMembershipsRequest {
  /** Required. The parent (project and location) where the Memberships will be created. Specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. The YAML of the membership CR in the cluster. Empty if the membership CR does not exist. */
  crManifest?: string;
  /** Required. The intended membership name under the `parent`. This method only does validation in anticipation of a CreateMembership call with the same name. */
  intendedMembership?: string;
}

export const ValidateExclusivityProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    crManifest: Schema.optional(Schema.String).pipe(T.HttpQuery("crManifest")),
    intendedMembership: Schema.optional(Schema.String).pipe(
      T.HttpQuery("intendedMembership"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/memberships:validateExclusivity",
    }),
    svc,
  ) as unknown as Schema.Schema<ValidateExclusivityProjectsLocationsMembershipsRequest>;

export type ValidateExclusivityProjectsLocationsMembershipsResponse =
  ValidateExclusivityResponse;
export const ValidateExclusivityProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ValidateExclusivityResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValidateExclusivityProjectsLocationsMembershipsRequest,
  output: ValidateExclusivityProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetIamPolicyProjectsLocationsMembershipsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsMembershipsRequest>;

export type GetIamPolicyProjectsLocationsMembershipsResponse = Policy;
export const GetIamPolicyProjectsLocationsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsMembershipsRequest,
  output: GetIamPolicyProjectsLocationsMembershipsResponse,
  errors: [NotFound, Forbidden],
}));
