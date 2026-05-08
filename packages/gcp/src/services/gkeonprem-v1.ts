// ==========================================================================
// GKE On-Prem API (gkeonprem v1)
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
  name: "gkeonprem",
  version: "v1",
  rootUrl: "https://gkeonprem.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface UpgradeDependency {
  /** Current version of the dependency e.g. 1.15.0. */
  currentVersion?: string;
  /** Target version of the dependency e.g. 1.16.1. This is the version the dependency needs to be upgraded to before a resource can be upgraded. */
  targetVersion?: string;
  /** Resource name of the dependency. */
  resourceName?: string;
  /** Membership names are formatted as `projects//locations//memberships/`. */
  membership?: string;
}

export const UpgradeDependency: Schema.Schema<UpgradeDependency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentVersion: Schema.optional(Schema.String),
    targetVersion: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    membership: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeDependency" });

export interface VmwareAdminProxy {
  /** The HTTP address of proxy server. */
  url?: string;
  /** A comma-separated list of IP addresses, IP address ranges, host names, and domain names that should not go through the proxy server. When Google Distributed Cloud sends a request to one of these addresses, hosts, or domains, the request is sent directly. */
  noProxy?: string;
}

export const VmwareAdminProxy: Schema.Schema<VmwareAdminProxy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    noProxy: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareAdminProxy" });

export interface VmwareAdminManualLbConfig {
  /** NodePort for ingress service's http. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 32527). */
  ingressHttpNodePort?: number;
  /** NodePort for ingress service's https. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 30139). */
  ingressHttpsNodePort?: number;
  /** NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). */
  konnectivityServerNodePort?: number;
  /** NodePort for control plane service. The Kubernetes API server in the admin cluster is implemented as a Service of type NodePort (ex. 30968). */
  controlPlaneNodePort?: number;
  /** NodePort for add-ons server in the admin cluster. */
  addonsNodePort?: number;
}

export const VmwareAdminManualLbConfig: Schema.Schema<VmwareAdminManualLbConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingressHttpNodePort: Schema.optional(Schema.Number),
    ingressHttpsNodePort: Schema.optional(Schema.Number),
    konnectivityServerNodePort: Schema.optional(Schema.Number),
    controlPlaneNodePort: Schema.optional(Schema.Number),
    addonsNodePort: Schema.optional(Schema.Number),
  }).annotate({ identifier: "VmwareAdminManualLbConfig" });

export interface BareMetalAdminProxyConfig {
  /** Required. Specifies the address of your proxy server. Examples: `http://domain` WARNING: Do not provide credentials in the format `http://(username:password@)domain` these will be rejected by the server. */
  uri?: string;
  /** A list of IPs, hostnames, and domains that should skip the proxy. Examples: ["127.0.0.1", "example.com", ".corp", "localhost"]. */
  noProxy?: ReadonlyArray<string>;
}

export const BareMetalAdminProxyConfig: Schema.Schema<BareMetalAdminProxyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    noProxy: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BareMetalAdminProxyConfig" });

export interface VmwareManualLbConfig {
  /** NodePort for ingress service's http. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 32527). */
  ingressHttpNodePort?: number;
  /** NodePort for ingress service's https. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 30139). */
  ingressHttpsNodePort?: number;
  /** NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). */
  konnectivityServerNodePort?: number;
  /** NodePort for control plane service. The Kubernetes API server in the admin cluster is implemented as a Service of type NodePort (ex. 30968). */
  controlPlaneNodePort?: number;
}

export const VmwareManualLbConfig: Schema.Schema<VmwareManualLbConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingressHttpNodePort: Schema.optional(Schema.Number),
    ingressHttpsNodePort: Schema.optional(Schema.Number),
    konnectivityServerNodePort: Schema.optional(Schema.Number),
    controlPlaneNodePort: Schema.optional(Schema.Number),
  }).annotate({ identifier: "VmwareManualLbConfig" });

export interface NodeTaint {
  /** Key associated with the effect. */
  key?: string;
  /** Value associated with the effect. */
  value?: string;
  /** The taint effect. */
  effect?:
    | "EFFECT_UNSPECIFIED"
    | "NO_SCHEDULE"
    | "PREFER_NO_SCHEDULE"
    | "NO_EXECUTE"
    | (string & {});
}

export const NodeTaint: Schema.Schema<NodeTaint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    effect: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodeTaint" });

export interface BareMetalKubeletConfig {
  /** The limit of registry pulls per second. Setting this value to 0 means no limit. Updating this field may impact scalability by changing the amount of traffic produced by image pulls. Defaults to 5. */
  registryPullQps?: number;
  /** The maximum size of bursty pulls, temporarily allows pulls to burst to this number, while still not exceeding registry_pull_qps. The value must not be a negative number. Updating this field may impact scalability by changing the amount of traffic produced by image pulls. Defaults to 10. */
  registryBurst?: number;
  /** Prevents the Kubelet from pulling multiple images at a time. We recommend *not* changing the default value on nodes that run docker daemon with version < 1.9 or an Another Union File System (Aufs) storage backend. Issue https://github.com/kubernetes/kubernetes/issues/10959 has more details. */
  serializeImagePullsDisabled?: boolean;
}

export const BareMetalKubeletConfig: Schema.Schema<BareMetalKubeletConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryPullQps: Schema.optional(Schema.Number),
    registryBurst: Schema.optional(Schema.Number),
    serializeImagePullsDisabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BareMetalKubeletConfig" });

export interface BareMetalNodeConfig {
  /** The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1 */
  nodeIp?: string;
  /** The labels assigned to this node. An object containing a list of key/value pairs. The labels here, unioned with the labels set on BareMetalNodePoolConfig are the set of labels that will be applied to the node. If there are any conflicts, the BareMetalNodeConfig labels take precedence. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
  labels?: Record<string, string>;
}

export const BareMetalNodeConfig: Schema.Schema<BareMetalNodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeIp: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "BareMetalNodeConfig" });

export interface BareMetalNodePoolConfig {
  /** Specifies the nodes operating system (default: LINUX). */
  operatingSystem?: "OPERATING_SYSTEM_UNSPECIFIED" | "LINUX" | (string & {});
  /** The initial taints assigned to nodes of this node pool. */
  taints?: ReadonlyArray<NodeTaint>;
  /** The labels assigned to nodes of this node pool. An object containing a list of key/value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
  labels?: Record<string, string>;
  /** The modifiable kubelet configurations for the bare metal machines. */
  kubeletConfig?: BareMetalKubeletConfig;
  /** Required. The list of machine addresses in the bare metal node pool. */
  nodeConfigs?: ReadonlyArray<BareMetalNodeConfig>;
}

export const BareMetalNodePoolConfig: Schema.Schema<BareMetalNodePoolConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatingSystem: Schema.optional(Schema.String),
    taints: Schema.optional(Schema.Array(NodeTaint)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    kubeletConfig: Schema.optional(BareMetalKubeletConfig),
    nodeConfigs: Schema.optional(Schema.Array(BareMetalNodeConfig)),
  }).annotate({ identifier: "BareMetalNodePoolConfig" });

export interface BareMetalAdminLoadBalancerNodePoolConfig {
  /** The generic configuration for a node pool running a load balancer. */
  nodePoolConfig?: BareMetalNodePoolConfig;
}

export const BareMetalAdminLoadBalancerNodePoolConfig: Schema.Schema<BareMetalAdminLoadBalancerNodePoolConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePoolConfig: Schema.optional(BareMetalNodePoolConfig),
  }).annotate({ identifier: "BareMetalAdminLoadBalancerNodePoolConfig" });

export interface BareMetalAdminBgpPeerConfig {
  /** Required. The IP address of the external peer device. */
  ipAddress?: string;
  /** Required. BGP autonomous system number (ASN) for the network that contains the external peer device. */
  asn?: string;
  /** The IP address of the control plane node that connects to the external peer. If you don't specify any control plane nodes, all control plane nodes can connect to the external peer. If you specify one or more IP addresses, only the nodes specified participate in peering sessions. */
  controlPlaneNodes?: ReadonlyArray<string>;
}

export const BareMetalAdminBgpPeerConfig: Schema.Schema<BareMetalAdminBgpPeerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipAddress: Schema.optional(Schema.String),
    asn: Schema.optional(Schema.String),
    controlPlaneNodes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BareMetalAdminBgpPeerConfig" });

export interface BareMetalAdminLoadBalancerAddressPool {
  /** Required. The name of the address pool. */
  pool?: string;
  /** Required. The addresses that are part of this pool. Each address must be either in the CIDR form (1.2.3.0/24) or range form (1.2.3.1-1.2.3.5). */
  addresses?: ReadonlyArray<string>;
  /** If true, prevent IP addresses from being automatically assigned. */
  manualAssign?: boolean;
  /** If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses. */
  avoidBuggyIps?: boolean;
}

export const BareMetalAdminLoadBalancerAddressPool: Schema.Schema<BareMetalAdminLoadBalancerAddressPool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pool: Schema.optional(Schema.String),
    addresses: Schema.optional(Schema.Array(Schema.String)),
    manualAssign: Schema.optional(Schema.Boolean),
    avoidBuggyIps: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BareMetalAdminLoadBalancerAddressPool" });

export interface BareMetalAdminBgpLbConfig {
  /** Required. BGP autonomous system number (ASN) of the cluster. This field can be updated after cluster creation. */
  asn?: string;
  /** Required. The list of BGP peers that the cluster will connect to. At least one peer must be configured for each control plane node. Control plane nodes will connect to these peers to advertise the control plane VIP. The Services load balancer also uses these peers by default. This field can be updated after cluster creation. */
  bgpPeerConfigs?: ReadonlyArray<BareMetalAdminBgpPeerConfig>;
  /** Required. AddressPools is a list of non-overlapping IP pools used by load balancer typed services. All addresses must be routable to load balancer nodes. IngressVIP must be included in the pools. */
  addressPools?: ReadonlyArray<BareMetalAdminLoadBalancerAddressPool>;
  /** Specifies the node pool running data plane load balancing. L2 connectivity is required among nodes in this pool. If missing, the control plane node pool is used for data plane load balancing. */
  loadBalancerNodePoolConfig?: BareMetalAdminLoadBalancerNodePoolConfig;
}

export const BareMetalAdminBgpLbConfig: Schema.Schema<BareMetalAdminBgpLbConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    asn: Schema.optional(Schema.String),
    bgpPeerConfigs: Schema.optional(Schema.Array(BareMetalAdminBgpPeerConfig)),
    addressPools: Schema.optional(
      Schema.Array(BareMetalAdminLoadBalancerAddressPool),
    ),
    loadBalancerNodePoolConfig: Schema.optional(
      BareMetalAdminLoadBalancerNodePoolConfig,
    ),
  }).annotate({ identifier: "BareMetalAdminBgpLbConfig" });

export interface VmwareHostIp {
  /** IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). */
  ip?: string;
  /** Hostname of the machine. VM's name will be used if this field is empty. */
  hostname?: string;
}

export const VmwareHostIp: Schema.Schema<VmwareHostIp> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ip: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareHostIp" });

export interface VmwareAdminControlPlaneNodeConfig {
  /** The number of mebibytes of memory for the control-plane node of the admin cluster. */
  memory?: string;
  /** The number of vCPUs for the control-plane node of the admin cluster. */
  cpus?: string;
  /** The number of control plane nodes for this VMware admin cluster. (default: 1 replica). */
  replicas?: string;
}

export const VmwareAdminControlPlaneNodeConfig: Schema.Schema<VmwareAdminControlPlaneNodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memory: Schema.optional(Schema.String),
    cpus: Schema.optional(Schema.String),
    replicas: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareAdminControlPlaneNodeConfig" });

export interface BareMetalNodeAccessConfig {
  /** LoginUser is the user name used to access node machines. It defaults to "root" if not set. */
  loginUser?: string;
}

export const BareMetalNodeAccessConfig: Schema.Schema<BareMetalNodeAccessConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loginUser: Schema.optional(Schema.String),
  }).annotate({ identifier: "BareMetalNodeAccessConfig" });

export interface VmwareVipConfig {
  /** The VIP which you previously set aside for the Kubernetes API of this cluster. */
  controlPlaneVip?: string;
  /** The VIP which you previously set aside for ingress traffic into this cluster. */
  ingressVip?: string;
}

export const VmwareVipConfig: Schema.Schema<VmwareVipConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneVip: Schema.optional(Schema.String),
    ingressVip: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareVipConfig" });

export interface EnrollVmwareAdminClusterRequest {
  /** User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all GKE on-prem clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. */
  vmwareAdminClusterId?: string;
  /** Required. This is the full resource name of this admin cluster's fleet membership. */
  membership?: string;
}

export const EnrollVmwareAdminClusterRequest: Schema.Schema<EnrollVmwareAdminClusterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmwareAdminClusterId: Schema.optional(Schema.String),
    membership: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnrollVmwareAdminClusterRequest" });

export interface Expr {
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

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

export interface ClusterUser {
  /** Required. The name of the user, e.g. `my-gcp-id@gmail.com`. */
  username?: string;
}

export const ClusterUser: Schema.Schema<ClusterUser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterUser" });

export interface VmwareAdminAuthorizationConfig {
  /** For VMware admin clusters, users will be granted the cluster-viewer role on the cluster. */
  viewerUsers?: ReadonlyArray<ClusterUser>;
}

export const VmwareAdminAuthorizationConfig: Schema.Schema<VmwareAdminAuthorizationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    viewerUsers: Schema.optional(Schema.Array(ClusterUser)),
  }).annotate({ identifier: "VmwareAdminAuthorizationConfig" });

export interface EnrollVmwareClusterRequest {
  /** User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all GKE on-prem clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. */
  vmwareClusterId?: string;
  /** Optional. The object name of the VMware OnPremUserCluster custom resource on the associated admin cluster. This field is used to support conflicting resource names when enrolling existing clusters to the API. When not provided, this field will resolve to the vmware_cluster_id. Otherwise, it must match the object name of the VMware OnPremUserCluster custom resource. It is not modifiable outside / beyond the enrollment operation. */
  localName?: string;
  /** Required. The admin cluster this VMware user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources. */
  adminClusterMembership?: string;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
}

export const EnrollVmwareClusterRequest: Schema.Schema<EnrollVmwareClusterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmwareClusterId: Schema.optional(Schema.String),
    localName: Schema.optional(Schema.String),
    adminClusterMembership: Schema.optional(Schema.String),
    validateOnly: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "EnrollVmwareClusterRequest" });

export interface VmwareVsphereTag {
  /** The Vsphere tag category. */
  category?: string;
  /** The Vsphere tag name. */
  tag?: string;
}

export const VmwareVsphereTag: Schema.Schema<VmwareVsphereTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareVsphereTag" });

export interface VmwareVsphereConfig {
  /** The name of the vCenter datastore. Inherited from the user cluster. */
  datastore?: string;
  /** Tags to apply to VMs. */
  tags?: ReadonlyArray<VmwareVsphereTag>;
  /** Vsphere host groups to apply to all VMs in the node pool */
  hostGroups?: ReadonlyArray<string>;
}

export const VmwareVsphereConfig: Schema.Schema<VmwareVsphereConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datastore: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(VmwareVsphereTag)),
    hostGroups: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VmwareVsphereConfig" });

export interface VmwareNodeConfig {
  /** The number of CPUs for each node in the node pool. */
  cpus?: string;
  /** The megabytes of memory for each node in the node pool. */
  memoryMb?: string;
  /** The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it's best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ */
  labels?: Record<string, string>;
  /** Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers. */
  enableLoadBalancer?: boolean;
  /** Specifies the vSphere config for node pool. */
  vsphereConfig?: VmwareVsphereConfig;
  /** The initial taints assigned to nodes of this node pool. */
  taints?: ReadonlyArray<NodeTaint>;
  /** Required. The OS image to be used for each node in a node pool. Currently `cos`, `cos_cgv2`, `ubuntu`, `ubuntu_cgv2`, `ubuntu_containerd` and `windows` are supported. */
  imageType?: string;
  /** The number of nodes in the node pool. */
  replicas?: string;
  /** VMware disk size to be used during creation. */
  bootDiskSizeGb?: string;
  /** The OS image name in vCenter, only valid when using Windows. */
  image?: string;
}

export const VmwareNodeConfig: Schema.Schema<VmwareNodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpus: Schema.optional(Schema.String),
    memoryMb: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    enableLoadBalancer: Schema.optional(Schema.Boolean),
    vsphereConfig: Schema.optional(VmwareVsphereConfig),
    taints: Schema.optional(Schema.Array(NodeTaint)),
    imageType: Schema.optional(Schema.String),
    replicas: Schema.optional(Schema.String),
    bootDiskSizeGb: Schema.optional(Schema.String),
    image: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareNodeConfig" });

export interface BareMetalDrainingMachine {
  /** The count of pods yet to drain. */
  podCount?: number;
  /** Draining machine IP address. */
  nodeIp?: string;
}

export const BareMetalDrainingMachine: Schema.Schema<BareMetalDrainingMachine> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    podCount: Schema.optional(Schema.Number),
    nodeIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "BareMetalDrainingMachine" });

export interface BareMetalDrainedMachine {
  /** Drained machine IP address. */
  nodeIp?: string;
}

export const BareMetalDrainedMachine: Schema.Schema<BareMetalDrainedMachine> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "BareMetalDrainedMachine" });

export interface BareMetalMachineDrainStatus {
  /** The list of draning machines. */
  drainingMachines?: ReadonlyArray<BareMetalDrainingMachine>;
  /** The list of drained machines. */
  drainedMachines?: ReadonlyArray<BareMetalDrainedMachine>;
}

export const BareMetalMachineDrainStatus: Schema.Schema<BareMetalMachineDrainStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    drainingMachines: Schema.optional(Schema.Array(BareMetalDrainingMachine)),
    drainedMachines: Schema.optional(Schema.Array(BareMetalDrainedMachine)),
  }).annotate({ identifier: "BareMetalMachineDrainStatus" });

export interface Version {
  /** Resource version. */
  version?: string;
  /** Number of machines under the above version. */
  count?: string;
}

export const Version: Schema.Schema<Version> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "Version" });

export interface BareMetalAdminApiServerArgument {
  /** Required. The argument name as it appears on the API Server command line please make sure to remove the leading dashes. */
  argument?: string;
  /** Required. The value of the arg as it will be passed to the API Server command line. */
  value?: string;
}

export const BareMetalAdminApiServerArgument: Schema.Schema<BareMetalAdminApiServerArgument> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    argument: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "BareMetalAdminApiServerArgument" });

export interface BareMetalAdminMultipleNetworkInterfacesConfig {
  /** Whether to enable multiple network interfaces for your pods. When set network_config.advanced_networking is automatically set to true. */
  enabled?: boolean;
}

export const BareMetalAdminMultipleNetworkInterfacesConfig: Schema.Schema<BareMetalAdminMultipleNetworkInterfacesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BareMetalAdminMultipleNetworkInterfacesConfig" });

export interface BareMetalMultipleNetworkInterfacesConfig {
  /** Whether to enable multiple network interfaces for your pods. When set network_config.advanced_networking is automatically set to true. */
  enabled?: boolean;
}

export const BareMetalMultipleNetworkInterfacesConfig: Schema.Schema<BareMetalMultipleNetworkInterfacesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BareMetalMultipleNetworkInterfacesConfig" });

export interface BareMetalMaintenanceStatus {
  /** The maintenance status of node machines. */
  machineDrainStatus?: BareMetalMachineDrainStatus;
}

export const BareMetalMaintenanceStatus: Schema.Schema<BareMetalMaintenanceStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineDrainStatus: Schema.optional(BareMetalMachineDrainStatus),
  }).annotate({ identifier: "BareMetalMaintenanceStatus" });

export interface Policy {
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    bindings: Schema.optional(Schema.Array(Binding)),
    version: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Policy" });

export interface BareMetalProxyConfig {
  /** Required. Specifies the address of your proxy server. Examples: `http://domain` Do not provide credentials in the format `http://(username:password@)domain` these will be rejected by the server. */
  uri?: string;
  /** A list of IPs, hostnames, and domains that should skip the proxy. Examples: ["127.0.0.1", "example.com", ".corp", "localhost"]. */
  noProxy?: ReadonlyArray<string>;
}

export const BareMetalProxyConfig: Schema.Schema<BareMetalProxyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    noProxy: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BareMetalProxyConfig" });

export interface VmwareAutoResizeConfig {
  /** Whether to enable controle plane node auto resizing. */
  enabled?: boolean;
}

export const VmwareAutoResizeConfig: Schema.Schema<VmwareAutoResizeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VmwareAutoResizeConfig" });

export interface VmwareIpBlock {
  /** The netmask used by the VMware user cluster. */
  netmask?: string;
  /** The node's network configurations used by the VMware user cluster. */
  ips?: ReadonlyArray<VmwareHostIp>;
  /** The network gateway used by the VMware user cluster. */
  gateway?: string;
}

export const VmwareIpBlock: Schema.Schema<VmwareIpBlock> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    netmask: Schema.optional(Schema.String),
    ips: Schema.optional(Schema.Array(VmwareHostIp)),
    gateway: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareIpBlock" });

export interface VmwareControlPlaneV2Config {
  /** Static IP addresses for the control plane nodes. */
  controlPlaneIpBlock?: VmwareIpBlock;
}

export const VmwareControlPlaneV2Config: Schema.Schema<VmwareControlPlaneV2Config> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneIpBlock: Schema.optional(VmwareIpBlock),
  }).annotate({ identifier: "VmwareControlPlaneV2Config" });

export interface VmwareAdminVCenterConfig {
  /** The name of the vCenter datacenter for the admin cluster. */
  datacenter?: string;
  /** The vCenter IP address. */
  address?: string;
  /** The name of the vCenter resource pool for the admin cluster. */
  resourcePool?: string;
  /** Contains the vCenter CA certificate public key for SSL verification. */
  caCertData?: string;
  /** The name of the vCenter storage policy for the user cluster. */
  storagePolicyName?: string;
  /** The name of the virtual machine disk (VMDK) for the admin cluster. */
  dataDisk?: string;
  /** The name of the vCenter folder for the admin cluster. */
  folder?: string;
  /** The name of the vCenter datastore for the admin cluster. */
  datastore?: string;
  /** The name of the vCenter cluster for the admin cluster. */
  cluster?: string;
}

export const VmwareAdminVCenterConfig: Schema.Schema<VmwareAdminVCenterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datacenter: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
    resourcePool: Schema.optional(Schema.String),
    caCertData: Schema.optional(Schema.String),
    storagePolicyName: Schema.optional(Schema.String),
    dataDisk: Schema.optional(Schema.String),
    folder: Schema.optional(Schema.String),
    datastore: Schema.optional(Schema.String),
    cluster: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareAdminVCenterConfig" });

export interface BareMetalClusterUpgradePolicy {
  /** Specifies which upgrade policy to use. */
  policy?:
    | "NODE_POOL_POLICY_UNSPECIFIED"
    | "SERIAL"
    | "CONCURRENT"
    | (string & {});
  /** Output only. Pause is used to show the upgrade pause status. It's view only for now. */
  pause?: boolean;
}

export const BareMetalClusterUpgradePolicy: Schema.Schema<BareMetalClusterUpgradePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Schema.String),
    pause: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BareMetalClusterUpgradePolicy" });

export interface BareMetalVersionInfo {
  /** Version number e.g. 1.13.1. */
  version?: string;
  /** The list of upgrade dependencies for this version. */
  dependencies?: ReadonlyArray<UpgradeDependency>;
  /** If set, the cluster dependencies (e.g. the admin cluster, other user clusters managed by the same admin cluster, version skew policy, etc) must be upgraded before this version can be installed or upgraded to. */
  hasDependencies?: boolean;
}

export const BareMetalVersionInfo: Schema.Schema<BareMetalVersionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    dependencies: Schema.optional(Schema.Array(UpgradeDependency)),
    hasDependencies: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BareMetalVersionInfo" });

export interface VmwareClusterUpgradePolicy {
  /** Controls whether the upgrade applies to the control plane only. */
  controlPlaneOnly?: boolean;
}

export const VmwareClusterUpgradePolicy: Schema.Schema<VmwareClusterUpgradePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneOnly: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VmwareClusterUpgradePolicy" });

export interface BinaryAuthorization {
  /** Mode of operation for binauthz policy evaluation. If unspecified, defaults to DISABLED. */
  evaluationMode?:
    | "EVALUATION_MODE_UNSPECIFIED"
    | "DISABLED"
    | "PROJECT_SINGLETON_POLICY_ENFORCE"
    | (string & {});
}

export const BinaryAuthorization: Schema.Schema<BinaryAuthorization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "BinaryAuthorization" });

export interface BareMetalBgpPeerConfig {
  /** Required. The IP address of the external peer device. */
  ipAddress?: string;
  /** Required. BGP autonomous system number (ASN) for the network that contains the external peer device. */
  asn?: string;
  /** The IP address of the control plane node that connects to the external peer. If you don't specify any control plane nodes, all control plane nodes can connect to the external peer. If you specify one or more IP addresses, only the nodes specified participate in peering sessions. */
  controlPlaneNodes?: ReadonlyArray<string>;
}

export const BareMetalBgpPeerConfig: Schema.Schema<BareMetalBgpPeerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipAddress: Schema.optional(Schema.String),
    asn: Schema.optional(Schema.String),
    controlPlaneNodes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BareMetalBgpPeerConfig" });

export interface BareMetalLoadBalancerAddressPool {
  /** Required. The name of the address pool. */
  pool?: string;
  /** Required. The addresses that are part of this pool. Each address must be either in the CIDR form (1.2.3.0/24) or range form (1.2.3.1-1.2.3.5). */
  addresses?: ReadonlyArray<string>;
  /** If true, prevent IP addresses from being automatically assigned. */
  manualAssign?: boolean;
  /** If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses. */
  avoidBuggyIps?: boolean;
}

export const BareMetalLoadBalancerAddressPool: Schema.Schema<BareMetalLoadBalancerAddressPool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pool: Schema.optional(Schema.String),
    addresses: Schema.optional(Schema.Array(Schema.String)),
    manualAssign: Schema.optional(Schema.Boolean),
    avoidBuggyIps: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BareMetalLoadBalancerAddressPool" });

export interface BareMetalLoadBalancerNodePoolConfig {
  /** The generic configuration for a node pool running a load balancer. */
  nodePoolConfig?: BareMetalNodePoolConfig;
}

export const BareMetalLoadBalancerNodePoolConfig: Schema.Schema<BareMetalLoadBalancerNodePoolConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePoolConfig: Schema.optional(BareMetalNodePoolConfig),
  }).annotate({ identifier: "BareMetalLoadBalancerNodePoolConfig" });

export interface BareMetalBgpLbConfig {
  /** Required. BGP autonomous system number (ASN) of the cluster. This field can be updated after cluster creation. */
  asn?: string;
  /** Required. The list of BGP peers that the cluster will connect to. At least one peer must be configured for each control plane node. Control plane nodes will connect to these peers to advertise the control plane VIP. The Services load balancer also uses these peers by default. This field can be updated after cluster creation. */
  bgpPeerConfigs?: ReadonlyArray<BareMetalBgpPeerConfig>;
  /** Required. AddressPools is a list of non-overlapping IP pools used by load balancer typed services. All addresses must be routable to load balancer nodes. IngressVIP must be included in the pools. */
  addressPools?: ReadonlyArray<BareMetalLoadBalancerAddressPool>;
  /** Specifies the node pool running data plane load balancing. L2 connectivity is required among nodes in this pool. If missing, the control plane node pool is used for data plane load balancing. */
  loadBalancerNodePoolConfig?: BareMetalLoadBalancerNodePoolConfig;
}

export const BareMetalBgpLbConfig: Schema.Schema<BareMetalBgpLbConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    asn: Schema.optional(Schema.String),
    bgpPeerConfigs: Schema.optional(Schema.Array(BareMetalBgpPeerConfig)),
    addressPools: Schema.optional(
      Schema.Array(BareMetalLoadBalancerAddressPool),
    ),
    loadBalancerNodePoolConfig: Schema.optional(
      BareMetalLoadBalancerNodePoolConfig,
    ),
  }).annotate({ identifier: "BareMetalBgpLbConfig" });

export interface BareMetalSrIovConfig {
  /** Whether to install the SR-IOV operator. */
  enabled?: boolean;
}

export const BareMetalSrIovConfig: Schema.Schema<BareMetalSrIovConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BareMetalSrIovConfig" });

export interface BareMetalApiServerArgument {
  /** Required. The argument name as it appears on the API Server command line, make sure to remove the leading dashes. */
  argument?: string;
  /** Required. The value of the arg as it will be passed to the API Server command line. */
  value?: string;
}

export const BareMetalApiServerArgument: Schema.Schema<BareMetalApiServerArgument> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    argument: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "BareMetalApiServerArgument" });

export interface Authorization {
  /** For VMware and bare metal user clusters, users will be granted the cluster-admin role on the cluster, which provides full administrative access to the cluster. For bare metal admin clusters, users will be granted the cluster-view role, which limits users to read-only access. */
  adminUsers?: ReadonlyArray<ClusterUser>;
}

export const Authorization: Schema.Schema<Authorization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminUsers: Schema.optional(Schema.Array(ClusterUser)),
  }).annotate({ identifier: "Authorization" });

export interface VmwareVCenterConfig {
  /** The name of the vCenter datacenter for the user cluster. */
  datacenter?: string;
  /** The name of the vCenter storage policy for the user cluster. */
  storagePolicyName?: string;
  /** The name of the vCenter folder for the user cluster. */
  folder?: string;
  /** The name of the vCenter datastore for the user cluster. */
  datastore?: string;
  /** Output only. The vCenter IP address. */
  address?: string;
  /** The name of the vCenter resource pool for the user cluster. */
  resourcePool?: string;
  /** The name of the vCenter cluster for the user cluster. */
  cluster?: string;
  /** Contains the vCenter CA certificate public key for SSL verification. */
  caCertData?: string;
}

export const VmwareVCenterConfig: Schema.Schema<VmwareVCenterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datacenter: Schema.optional(Schema.String),
    storagePolicyName: Schema.optional(Schema.String),
    folder: Schema.optional(Schema.String),
    datastore: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
    resourcePool: Schema.optional(Schema.String),
    cluster: Schema.optional(Schema.String),
    caCertData: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareVCenterConfig" });

export interface BareMetalControlPlaneNodePoolConfig {
  /** Required. The generic configuration for a node pool running the control plane. */
  nodePoolConfig?: BareMetalNodePoolConfig;
}

export const BareMetalControlPlaneNodePoolConfig: Schema.Schema<BareMetalControlPlaneNodePoolConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePoolConfig: Schema.optional(BareMetalNodePoolConfig),
  }).annotate({ identifier: "BareMetalControlPlaneNodePoolConfig" });

export interface BareMetalAdminOsEnvironmentConfig {
  /** Whether the package repo should be added when initializing bare metal machines. */
  packageRepoExcluded?: boolean;
}

export const BareMetalAdminOsEnvironmentConfig: Schema.Schema<BareMetalAdminOsEnvironmentConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageRepoExcluded: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BareMetalAdminOsEnvironmentConfig" });

export interface BareMetalAdminClusterOperationsConfig {
  /** Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics). */
  enableApplicationLogs?: boolean;
}

export const BareMetalAdminClusterOperationsConfig: Schema.Schema<BareMetalAdminClusterOperationsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableApplicationLogs: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BareMetalAdminClusterOperationsConfig" });

export interface BareMetalAdminControlPlaneNodePoolConfig {
  /** Required. The generic configuration for a node pool running the control plane. */
  nodePoolConfig?: BareMetalNodePoolConfig;
}

export const BareMetalAdminControlPlaneNodePoolConfig: Schema.Schema<BareMetalAdminControlPlaneNodePoolConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePoolConfig: Schema.optional(BareMetalNodePoolConfig),
  }).annotate({ identifier: "BareMetalAdminControlPlaneNodePoolConfig" });

export interface BareMetalAdminControlPlaneConfig {
  /** Required. Configures the node pool running the control plane. If specified the corresponding NodePool will be created for the cluster's control plane. The NodePool will have the same name and namespace as the cluster. */
  controlPlaneNodePoolConfig?: BareMetalAdminControlPlaneNodePoolConfig;
  /** Customizes the default API server args. Only a subset of customized flags are supported. Please refer to the API server documentation below to know the exact format: https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/ */
  apiServerArgs?: ReadonlyArray<BareMetalAdminApiServerArgument>;
}

export const BareMetalAdminControlPlaneConfig: Schema.Schema<BareMetalAdminControlPlaneConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneNodePoolConfig: Schema.optional(
      BareMetalAdminControlPlaneNodePoolConfig,
    ),
    apiServerArgs: Schema.optional(
      Schema.Array(BareMetalAdminApiServerArgument),
    ),
  }).annotate({ identifier: "BareMetalAdminControlPlaneConfig" });

export interface BareMetalAdminIslandModeCidrConfig {
  /** Required. All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation. */
  serviceAddressCidrBlocks?: ReadonlyArray<string>;
  /** Required. All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation. */
  podAddressCidrBlocks?: ReadonlyArray<string>;
}

export const BareMetalAdminIslandModeCidrConfig: Schema.Schema<BareMetalAdminIslandModeCidrConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAddressCidrBlocks: Schema.optional(Schema.Array(Schema.String)),
    podAddressCidrBlocks: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BareMetalAdminIslandModeCidrConfig" });

export interface BareMetalAdminNetworkConfig {
  /** Enables the use of advanced Anthos networking features, such as Bundled Load Balancing with BGP or the egress NAT gateway. Setting configuration for advanced networking features will automatically set this flag. */
  advancedNetworking?: boolean;
  /** Configuration for Island mode CIDR. */
  islandModeCidr?: BareMetalAdminIslandModeCidrConfig;
  /** Configuration for multiple network interfaces. */
  multipleNetworkInterfacesConfig?: BareMetalAdminMultipleNetworkInterfacesConfig;
}

export const BareMetalAdminNetworkConfig: Schema.Schema<BareMetalAdminNetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advancedNetworking: Schema.optional(Schema.Boolean),
    islandModeCidr: Schema.optional(BareMetalAdminIslandModeCidrConfig),
    multipleNetworkInterfacesConfig: Schema.optional(
      BareMetalAdminMultipleNetworkInterfacesConfig,
    ),
  }).annotate({ identifier: "BareMetalAdminNetworkConfig" });

export interface Fleet {
  /** Output only. The name of the managed fleet Membership resource associated to this cluster. Membership names are formatted as `projects//locations//memberships/`. */
  membership?: string;
}

export const Fleet: Schema.Schema<Fleet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    membership: Schema.optional(Schema.String),
  }).annotate({ identifier: "Fleet" });

export interface BareMetalAdminPortConfig {
  /** The port that control plane hosted load balancers will listen on. */
  controlPlaneLoadBalancerPort?: number;
}

export const BareMetalAdminPortConfig: Schema.Schema<BareMetalAdminPortConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneLoadBalancerPort: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BareMetalAdminPortConfig" });

export interface BareMetalAdminVipConfig {
  /** The VIP which you previously set aside for the Kubernetes API of this bare metal admin cluster. */
  controlPlaneVip?: string;
}

export const BareMetalAdminVipConfig: Schema.Schema<BareMetalAdminVipConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneVip: Schema.optional(Schema.String),
  }).annotate({ identifier: "BareMetalAdminVipConfig" });

export interface BareMetalAdminManualLbConfig {
  /** Whether manual load balancing is enabled. */
  enabled?: boolean;
}

export const BareMetalAdminManualLbConfig: Schema.Schema<BareMetalAdminManualLbConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BareMetalAdminManualLbConfig" });

export interface BareMetalAdminLoadBalancerConfig {
  /** Configures the ports that the load balancer will listen on. */
  portConfig?: BareMetalAdminPortConfig;
  /** Configuration for BGP typed load balancers. */
  bgpLbConfig?: BareMetalAdminBgpLbConfig;
  /** The VIPs used by the load balancer. */
  vipConfig?: BareMetalAdminVipConfig;
  /** Manually configured load balancers. */
  manualLbConfig?: BareMetalAdminManualLbConfig;
}

export const BareMetalAdminLoadBalancerConfig: Schema.Schema<BareMetalAdminLoadBalancerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    portConfig: Schema.optional(BareMetalAdminPortConfig),
    bgpLbConfig: Schema.optional(BareMetalAdminBgpLbConfig),
    vipConfig: Schema.optional(BareMetalAdminVipConfig),
    manualLbConfig: Schema.optional(BareMetalAdminManualLbConfig),
  }).annotate({ identifier: "BareMetalAdminLoadBalancerConfig" });

export interface ValidationCheckResult {
  /** The category of the validation. */
  category?: string;
  /** Detailed failure information, which might be unformatted. */
  details?: string;
  /** The description of the validation check. */
  description?: string;
  /** The validation check state. */
  state?:
    | "STATE_UNKNOWN"
    | "STATE_FAILURE"
    | "STATE_SKIPPED"
    | "STATE_FATAL"
    | "STATE_WARNING"
    | (string & {});
  /** A human-readable message of the check failure. */
  reason?: string;
}

export const ValidationCheckResult: Schema.Schema<ValidationCheckResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValidationCheckResult" });

export interface ValidationCheckStatus {
  /** Individual checks which failed as part of the Preflight check execution. */
  result?: ReadonlyArray<ValidationCheckResult>;
}

export const ValidationCheckStatus: Schema.Schema<ValidationCheckStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(Schema.Array(ValidationCheckResult)),
  }).annotate({ identifier: "ValidationCheckStatus" });

export interface ValidationCheck {
  /** Output only. The scenario when the preflight checks were run. */
  scenario?: "SCENARIO_UNSPECIFIED" | "CREATE" | "UPDATE" | (string & {});
  /** Options used for the validation check */
  option?:
    | "OPTIONS_UNSPECIFIED"
    | "SKIP_VALIDATION_CHECK_BLOCKING"
    | "SKIP_VALIDATION_ALL"
    | (string & {});
  /** Output only. The detailed validation check status. */
  status?: ValidationCheckStatus;
}

export const ValidationCheck: Schema.Schema<ValidationCheck> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scenario: Schema.optional(Schema.String),
    option: Schema.optional(Schema.String),
    status: Schema.optional(ValidationCheckStatus),
  }).annotate({ identifier: "ValidationCheck" });

export interface BareMetalAdminNodeAccessConfig {
  /** Required. LoginUser is the user name used to access node machines. It defaults to "root" if not set. */
  loginUser?: string;
}

export const BareMetalAdminNodeAccessConfig: Schema.Schema<BareMetalAdminNodeAccessConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loginUser: Schema.optional(Schema.String),
  }).annotate({ identifier: "BareMetalAdminNodeAccessConfig" });

export interface BareMetalAdminWorkloadNodeConfig {
  /** The maximum number of pods a node can run. The size of the CIDR range assigned to the node will be derived from this parameter. By default 110 Pods are created per Node. Upper bound is 250 for both HA and non-HA admin cluster. Lower bound is 64 for non-HA admin cluster and 32 for HA admin cluster. */
  maxPodsPerNode?: string;
}

export const BareMetalAdminWorkloadNodeConfig: Schema.Schema<BareMetalAdminWorkloadNodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxPodsPerNode: Schema.optional(Schema.String),
  }).annotate({ identifier: "BareMetalAdminWorkloadNodeConfig" });

export interface ResourceCondition {
  /** Human-readable message indicating details about last transition. */
  message?: string;
  /** Type of the condition. (e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady) */
  type?: string;
  /** Machine-readable message indicating details about last transition. */
  reason?: string;
  /** state of the condition. */
  state?:
    | "STATE_UNSPECIFIED"
    | "STATE_TRUE"
    | "STATE_FALSE"
    | "STATE_UNKNOWN"
    | (string & {});
  /** Last time the condition transit from one status to another. */
  lastTransitionTime?: string;
}

export const ResourceCondition: Schema.Schema<ResourceCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    lastTransitionTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceCondition" });

export interface Versions {
  /** Shows the mapping of a given version to the number of machines under this version. */
  versions?: ReadonlyArray<Version>;
}

export const Versions: Schema.Schema<Versions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versions: Schema.optional(Schema.Array(Version)),
  }).annotate({ identifier: "Versions" });

export interface ResourceStatus {
  /** ResourceCondition provide a standard mechanism for higher-level status reporting from controller. */
  conditions?: ReadonlyArray<ResourceCondition>;
  /** Human-friendly representation of the error message from controller. The error message can be temporary as the controller controller creates a cluster or node pool. If the error message persists for a longer period of time, it can be used to surface error message to indicate real problems requiring user intervention. */
  errorMessage?: string;
  /** Shows the mapping of a given version to the number of machines under this version. */
  versions?: Versions;
  /** Reflect current version of the resource. */
  version?: string;
}

export const ResourceStatus: Schema.Schema<ResourceStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(Schema.Array(ResourceCondition)),
    errorMessage: Schema.optional(Schema.String),
    versions: Schema.optional(Versions),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceStatus" });

export interface BareMetalAdminMaintenanceConfig {
  /** Required. All IPv4 address from these ranges will be placed into maintenance mode. Nodes in maintenance mode will be cordoned and drained. When both of these are true, the "baremetal.cluster.gke.io/maintenance" annotation will be set on the node resource. */
  maintenanceAddressCidrBlocks?: ReadonlyArray<string>;
}

export const BareMetalAdminMaintenanceConfig: Schema.Schema<BareMetalAdminMaintenanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maintenanceAddressCidrBlocks: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BareMetalAdminMaintenanceConfig" });

export interface BareMetalAdminDrainingMachine {
  /** Draining machine IP address. */
  nodeIp?: string;
  /** The count of pods yet to drain. */
  podCount?: number;
}

export const BareMetalAdminDrainingMachine: Schema.Schema<BareMetalAdminDrainingMachine> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeIp: Schema.optional(Schema.String),
    podCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BareMetalAdminDrainingMachine" });

export interface BareMetalAdminDrainedMachine {
  /** Drained machine IP address. */
  nodeIp?: string;
}

export const BareMetalAdminDrainedMachine: Schema.Schema<BareMetalAdminDrainedMachine> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "BareMetalAdminDrainedMachine" });

export interface BareMetalAdminMachineDrainStatus {
  /** The list of draning machines. */
  drainingMachines?: ReadonlyArray<BareMetalAdminDrainingMachine>;
  /** The list of drained machines. */
  drainedMachines?: ReadonlyArray<BareMetalAdminDrainedMachine>;
}

export const BareMetalAdminMachineDrainStatus: Schema.Schema<BareMetalAdminMachineDrainStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    drainingMachines: Schema.optional(
      Schema.Array(BareMetalAdminDrainingMachine),
    ),
    drainedMachines: Schema.optional(
      Schema.Array(BareMetalAdminDrainedMachine),
    ),
  }).annotate({ identifier: "BareMetalAdminMachineDrainStatus" });

export interface BareMetalAdminMaintenanceStatus {
  /** Represents the status of draining and drained machine nodes. This is used to show the progress of cluster upgrade. */
  machineDrainStatus?: BareMetalAdminMachineDrainStatus;
}

export const BareMetalAdminMaintenanceStatus: Schema.Schema<BareMetalAdminMaintenanceStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineDrainStatus: Schema.optional(BareMetalAdminMachineDrainStatus),
  }).annotate({ identifier: "BareMetalAdminMaintenanceStatus" });

export interface BareMetalLvpConfig {
  /** Required. The host machine path. */
  path?: string;
  /** Required. The StorageClass name that PVs will be created with. */
  storageClass?: string;
}

export const BareMetalLvpConfig: Schema.Schema<BareMetalLvpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    storageClass: Schema.optional(Schema.String),
  }).annotate({ identifier: "BareMetalLvpConfig" });

export interface BareMetalLvpShareConfig {
  /** Required. Defines the machine path and storage class for the LVP Share. */
  lvpConfig?: BareMetalLvpConfig;
  /** The number of subdirectories to create under path. */
  sharedPathPvCount?: number;
}

export const BareMetalLvpShareConfig: Schema.Schema<BareMetalLvpShareConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lvpConfig: Schema.optional(BareMetalLvpConfig),
    sharedPathPvCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BareMetalLvpShareConfig" });

export interface BareMetalAdminStorageConfig {
  /** Required. Specifies the config for local PersistentVolumes backed by subdirectories in a shared filesystem. These subdirectores are automatically created during cluster creation. */
  lvpShareConfig?: BareMetalLvpShareConfig;
  /** Required. Specifies the config for local PersistentVolumes backed by mounted node disks. These disks need to be formatted and mounted by the user, which can be done before or after cluster creation. */
  lvpNodeMountsConfig?: BareMetalLvpConfig;
}

export const BareMetalAdminStorageConfig: Schema.Schema<BareMetalAdminStorageConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lvpShareConfig: Schema.optional(BareMetalLvpShareConfig),
    lvpNodeMountsConfig: Schema.optional(BareMetalLvpConfig),
  }).annotate({ identifier: "BareMetalAdminStorageConfig" });

export interface BareMetalAdminSecurityConfig {
  /** Configures user access to the admin cluster. */
  authorization?: Authorization;
}

export const BareMetalAdminSecurityConfig: Schema.Schema<BareMetalAdminSecurityConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorization: Schema.optional(Authorization),
  }).annotate({ identifier: "BareMetalAdminSecurityConfig" });

export interface BareMetalAdminCluster {
  /** OS environment related configurations. */
  osEnvironmentConfig?: BareMetalAdminOsEnvironmentConfig;
  /** Output only. The current state of the bare metal admin cluster. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "RUNNING"
    | "RECONCILING"
    | "STOPPING"
    | "ERROR"
    | "DEGRADED"
    | (string & {});
  /** Annotations on the bare metal admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
  annotations?: Record<string, string>;
  /** Cluster operations configuration. */
  clusterOperations?: BareMetalAdminClusterOperationsConfig;
  /** Output only. The object name of the bare metal cluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs. */
  localName?: string;
  /** Binary Authorization related configurations. */
  binaryAuthorization?: BinaryAuthorization;
  /** Control plane configuration. */
  controlPlane?: BareMetalAdminControlPlaneConfig;
  /** Network configuration. */
  networkConfig?: BareMetalAdminNetworkConfig;
  /** A human readable description of this bare metal admin cluster. */
  description?: string;
  /** Output only. Fleet configuration for the cluster. */
  fleet?: Fleet;
  /** Load balancer configuration. */
  loadBalancer?: BareMetalAdminLoadBalancerConfig;
  /** Output only. ValidationCheck representing the result of the preflight check. */
  validationCheck?: ValidationCheck;
  /** Node access related configurations. */
  nodeAccessConfig?: BareMetalAdminNodeAccessConfig;
  /** Output only. The IP address name of bare metal admin cluster's API server. */
  endpoint?: string;
  /** Workload node configuration. */
  nodeConfig?: BareMetalAdminWorkloadNodeConfig;
  /** Output only. ResourceStatus representing detailed cluster status. */
  status?: ResourceStatus;
  /** Output only. The unique identifier of the bare metal admin cluster. */
  uid?: string;
  /** Output only. The time at which this bare metal admin cluster was created. */
  createTime?: string;
  /** Immutable. The bare metal admin cluster resource name. */
  name?: string;
  /** Output only. If set, there are currently changes in flight to the bare metal Admin Cluster. */
  reconciling?: boolean;
  /** Maintenance configuration. */
  maintenanceConfig?: BareMetalAdminMaintenanceConfig;
  /** The Anthos clusters on bare metal version for the bare metal admin cluster. */
  bareMetalVersion?: string;
  /** Proxy configuration. */
  proxy?: BareMetalAdminProxyConfig;
  /** Output only. MaintenanceStatus representing state of maintenance. */
  maintenanceStatus?: BareMetalAdminMaintenanceStatus;
  /** Output only. The time at which this bare metal admin cluster was deleted. If the resource is not deleted, this must be empty */
  deleteTime?: string;
  /** Storage configuration. */
  storage?: BareMetalAdminStorageConfig;
  /** Output only. The time at which this bare metal admin cluster was last updated. */
  updateTime?: string;
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
  etag?: string;
  /** Security related configuration. */
  securityConfig?: BareMetalAdminSecurityConfig;
}

export const BareMetalAdminCluster: Schema.Schema<BareMetalAdminCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osEnvironmentConfig: Schema.optional(BareMetalAdminOsEnvironmentConfig),
    state: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    clusterOperations: Schema.optional(BareMetalAdminClusterOperationsConfig),
    localName: Schema.optional(Schema.String),
    binaryAuthorization: Schema.optional(BinaryAuthorization),
    controlPlane: Schema.optional(BareMetalAdminControlPlaneConfig),
    networkConfig: Schema.optional(BareMetalAdminNetworkConfig),
    description: Schema.optional(Schema.String),
    fleet: Schema.optional(Fleet),
    loadBalancer: Schema.optional(BareMetalAdminLoadBalancerConfig),
    validationCheck: Schema.optional(ValidationCheck),
    nodeAccessConfig: Schema.optional(BareMetalAdminNodeAccessConfig),
    endpoint: Schema.optional(Schema.String),
    nodeConfig: Schema.optional(BareMetalAdminWorkloadNodeConfig),
    status: Schema.optional(ResourceStatus),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    maintenanceConfig: Schema.optional(BareMetalAdminMaintenanceConfig),
    bareMetalVersion: Schema.optional(Schema.String),
    proxy: Schema.optional(BareMetalAdminProxyConfig),
    maintenanceStatus: Schema.optional(BareMetalAdminMaintenanceStatus),
    deleteTime: Schema.optional(Schema.String),
    storage: Schema.optional(BareMetalAdminStorageConfig),
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    securityConfig: Schema.optional(BareMetalAdminSecurityConfig),
  }).annotate({ identifier: "BareMetalAdminCluster" });

export interface VmwareStaticIpConfig {
  /** Represents the configuration values for static IP allocation to nodes. */
  ipBlocks?: ReadonlyArray<VmwareIpBlock>;
}

export const VmwareStaticIpConfig: Schema.Schema<VmwareStaticIpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipBlocks: Schema.optional(Schema.Array(VmwareIpBlock)),
  }).annotate({ identifier: "VmwareStaticIpConfig" });

export interface VmwareDhcpIpConfig {
  /** enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters. */
  enabled?: boolean;
}

export const VmwareDhcpIpConfig: Schema.Schema<VmwareDhcpIpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VmwareDhcpIpConfig" });

export interface VmwareHostConfig {
  /** DNS search domains. */
  dnsSearchDomains?: ReadonlyArray<string>;
  /** NTP servers. */
  ntpServers?: ReadonlyArray<string>;
  /** DNS servers. */
  dnsServers?: ReadonlyArray<string>;
}

export const VmwareHostConfig: Schema.Schema<VmwareHostConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsSearchDomains: Schema.optional(Schema.Array(Schema.String)),
    ntpServers: Schema.optional(Schema.Array(Schema.String)),
    dnsServers: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VmwareHostConfig" });

export interface VmwareAdminHAControlPlaneConfig {
  /** Static IP addresses for the admin control plane nodes. */
  controlPlaneIpBlock?: VmwareIpBlock;
}

export const VmwareAdminHAControlPlaneConfig: Schema.Schema<VmwareAdminHAControlPlaneConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneIpBlock: Schema.optional(VmwareIpBlock),
  }).annotate({ identifier: "VmwareAdminHAControlPlaneConfig" });

export interface VmwareAdminNetworkConfig {
  /** vcenter_network specifies vCenter network name. */
  vcenterNetwork?: string;
  /** Required. All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. */
  serviceAddressCidrBlocks?: ReadonlyArray<string>;
  /** Configuration settings for a static IP configuration. */
  staticIpConfig?: VmwareStaticIpConfig;
  /** Configuration settings for a DHCP IP configuration. */
  dhcpIpConfig?: VmwareDhcpIpConfig;
  /** Required. All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. */
  podAddressCidrBlocks?: ReadonlyArray<string>;
  /** Represents common network settings irrespective of the host's IP address. */
  hostConfig?: VmwareHostConfig;
  /** Configuration for HA admin cluster control plane. */
  haControlPlaneConfig?: VmwareAdminHAControlPlaneConfig;
}

export const VmwareAdminNetworkConfig: Schema.Schema<VmwareAdminNetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vcenterNetwork: Schema.optional(Schema.String),
    serviceAddressCidrBlocks: Schema.optional(Schema.Array(Schema.String)),
    staticIpConfig: Schema.optional(VmwareStaticIpConfig),
    dhcpIpConfig: Schema.optional(VmwareDhcpIpConfig),
    podAddressCidrBlocks: Schema.optional(Schema.Array(Schema.String)),
    hostConfig: Schema.optional(VmwareHostConfig),
    haControlPlaneConfig: Schema.optional(VmwareAdminHAControlPlaneConfig),
  }).annotate({ identifier: "VmwareAdminNetworkConfig" });

export interface VmwareAdminVipConfig {
  /** The VIP which you previously set aside for the Kubernetes API of the admin cluster. */
  controlPlaneVip?: string;
  /** The VIP to configure the load balancer for add-ons. */
  addonsVip?: string;
}

export const VmwareAdminVipConfig: Schema.Schema<VmwareAdminVipConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneVip: Schema.optional(Schema.String),
    addonsVip: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareAdminVipConfig" });

export interface VmwareStorageConfig {
  /** Whether or not to deploy vSphere CSI components in the VMware user cluster. Enabled by default. */
  vsphereCsiDisabled?: boolean;
}

export const VmwareStorageConfig: Schema.Schema<VmwareStorageConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vsphereCsiDisabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VmwareStorageConfig" });

export interface VmwareAdminAddonNodeConfig {
  /** VmwareAutoResizeConfig config specifies auto resize config. */
  autoResizeConfig?: VmwareAutoResizeConfig;
}

export const VmwareAdminAddonNodeConfig: Schema.Schema<VmwareAdminAddonNodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoResizeConfig: Schema.optional(VmwareAutoResizeConfig),
  }).annotate({ identifier: "VmwareAdminAddonNodeConfig" });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface BareMetalWorkloadNodeConfig {
  /** The maximum number of pods a node can run. The size of the CIDR range assigned to the node will be derived from this parameter. */
  maxPodsPerNode?: string;
  /** Specifies which container runtime will be used. */
  containerRuntime?:
    | "CONTAINER_RUNTIME_UNSPECIFIED"
    | "CONTAINERD"
    | (string & {});
}

export const BareMetalWorkloadNodeConfig: Schema.Schema<BareMetalWorkloadNodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxPodsPerNode: Schema.optional(Schema.String),
    containerRuntime: Schema.optional(Schema.String),
  }).annotate({ identifier: "BareMetalWorkloadNodeConfig" });

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

export interface BareMetalManualLbConfig {
  /** Whether manual load balancing is enabled. */
  enabled?: boolean;
}

export const BareMetalManualLbConfig: Schema.Schema<BareMetalManualLbConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BareMetalManualLbConfig" });

export interface VmwareAAGConfig {
  /** Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default. */
  aagConfigDisabled?: boolean;
}

export const VmwareAAGConfig: Schema.Schema<VmwareAAGConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aagConfigDisabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VmwareAAGConfig" });

export interface VmwareAutoRepairConfig {
  /** Whether auto repair is enabled. */
  enabled?: boolean;
}

export const VmwareAutoRepairConfig: Schema.Schema<VmwareAutoRepairConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VmwareAutoRepairConfig" });

export interface VmwareControlPlaneVsphereConfig {
  /** The Vsphere datastore used by the control plane Node. */
  datastore?: string;
  /** The Vsphere storage policy used by the control plane Node. */
  storagePolicyName?: string;
}

export const VmwareControlPlaneVsphereConfig: Schema.Schema<VmwareControlPlaneVsphereConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datastore: Schema.optional(Schema.String),
    storagePolicyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareControlPlaneVsphereConfig" });

export interface VmwareControlPlaneNodeConfig {
  /** The number of control plane nodes for this VMware user cluster. (default: 1 replica). */
  replicas?: string;
  /** The number of CPUs for each admin cluster node that serve as control planes for this VMware user cluster. (default: 4 CPUs) */
  cpus?: string;
  /** AutoResizeConfig provides auto resizing configurations. */
  autoResizeConfig?: VmwareAutoResizeConfig;
  /** The megabytes of memory for each admin cluster node that serves as a control plane for this VMware user cluster (default: 8192 MB memory). */
  memory?: string;
  /** Vsphere-specific config. */
  vsphereConfig?: VmwareControlPlaneVsphereConfig;
}

export const VmwareControlPlaneNodeConfig: Schema.Schema<VmwareControlPlaneNodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replicas: Schema.optional(Schema.String),
    cpus: Schema.optional(Schema.String),
    autoResizeConfig: Schema.optional(VmwareAutoResizeConfig),
    memory: Schema.optional(Schema.String),
    vsphereConfig: Schema.optional(VmwareControlPlaneVsphereConfig),
  }).annotate({ identifier: "VmwareControlPlaneNodeConfig" });

export interface VmwareNetworkConfig {
  /** Configuration for control plane V2 mode. */
  controlPlaneV2Config?: VmwareControlPlaneV2Config;
  /** Required. All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. */
  podAddressCidrBlocks?: ReadonlyArray<string>;
  /** Represents common network settings irrespective of the host's IP address. */
  hostConfig?: VmwareHostConfig;
  /** Required. All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. */
  serviceAddressCidrBlocks?: ReadonlyArray<string>;
  /** Configuration settings for a static IP configuration. */
  staticIpConfig?: VmwareStaticIpConfig;
  /** Configuration settings for a DHCP IP configuration. */
  dhcpIpConfig?: VmwareDhcpIpConfig;
  /** vcenter_network specifies vCenter network name. Inherited from the admin cluster. */
  vcenterNetwork?: string;
}

export const VmwareNetworkConfig: Schema.Schema<VmwareNetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneV2Config: Schema.optional(VmwareControlPlaneV2Config),
    podAddressCidrBlocks: Schema.optional(Schema.Array(Schema.String)),
    hostConfig: Schema.optional(VmwareHostConfig),
    serviceAddressCidrBlocks: Schema.optional(Schema.Array(Schema.String)),
    staticIpConfig: Schema.optional(VmwareStaticIpConfig),
    dhcpIpConfig: Schema.optional(VmwareDhcpIpConfig),
    vcenterNetwork: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareNetworkConfig" });

export interface VmwareDataplaneV2Config {
  /** Enable Dataplane V2 for clusters with Windows nodes. */
  windowsDataplaneV2Enabled?: boolean;
  /** Enables Dataplane V2. */
  dataplaneV2Enabled?: boolean;
  /** Enable advanced networking which requires dataplane_v2_enabled to be set true. */
  advancedNetworking?: boolean;
  /** Configure ForwardMode for Dataplane v2. */
  forwardMode?: string;
}

export const VmwareDataplaneV2Config: Schema.Schema<VmwareDataplaneV2Config> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    windowsDataplaneV2Enabled: Schema.optional(Schema.Boolean),
    dataplaneV2Enabled: Schema.optional(Schema.Boolean),
    advancedNetworking: Schema.optional(Schema.Boolean),
    forwardMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareDataplaneV2Config" });

export interface VmwareSeesawConfig {
  /** Required. MasterIP is the IP announced by the master of Seesaw group. */
  masterIp?: string;
  /** Required. The IP Blocks to be used by the Seesaw load balancer */
  ipBlocks?: ReadonlyArray<VmwareIpBlock>;
  /** Enable two load balancer VMs to achieve a highly-available Seesaw load balancer. */
  enableHa?: boolean;
  /** Names of the VMs created for this Seesaw group. */
  vms?: ReadonlyArray<string>;
  /** Name to be used by Stackdriver. */
  stackdriverName?: string;
  /** Required. In general the following format should be used for the Seesaw group name: seesaw-for-[cluster_name]. */
  group?: string;
}

export const VmwareSeesawConfig: Schema.Schema<VmwareSeesawConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    masterIp: Schema.optional(Schema.String),
    ipBlocks: Schema.optional(Schema.Array(VmwareIpBlock)),
    enableHa: Schema.optional(Schema.Boolean),
    vms: Schema.optional(Schema.Array(Schema.String)),
    stackdriverName: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareSeesawConfig" });

export interface VmwareF5BigIpConfig {
  /** The load balancer's IP address. */
  address?: string;
  /** The preexisting partition to be used by the load balancer. This partition is usually created for the admin cluster for example: 'my-f5-admin-partition'. */
  partition?: string;
  /** The pool name. Only necessary, if using SNAT. */
  snatPool?: string;
}

export const VmwareF5BigIpConfig: Schema.Schema<VmwareF5BigIpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.optional(Schema.String),
    partition: Schema.optional(Schema.String),
    snatPool: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareF5BigIpConfig" });

export interface VmwareAddressPool {
  /** If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses. */
  avoidBuggyIps?: boolean;
  /** Required. The name of the address pool. */
  pool?: string;
  /** Required. The addresses that are part of this pool. Each address must be either in the CIDR form (1.2.3.0/24) or range form (1.2.3.1-1.2.3.5). */
  addresses?: ReadonlyArray<string>;
  /** If true, prevent IP addresses from being automatically assigned. */
  manualAssign?: boolean;
}

export const VmwareAddressPool: Schema.Schema<VmwareAddressPool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    avoidBuggyIps: Schema.optional(Schema.Boolean),
    pool: Schema.optional(Schema.String),
    addresses: Schema.optional(Schema.Array(Schema.String)),
    manualAssign: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VmwareAddressPool" });

export interface VmwareMetalLbConfig {
  /** Required. AddressPools is a list of non-overlapping IP pools used by load balancer typed services. All addresses must be routable to load balancer nodes. IngressVIP must be included in the pools. */
  addressPools?: ReadonlyArray<VmwareAddressPool>;
}

export const VmwareMetalLbConfig: Schema.Schema<VmwareMetalLbConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressPools: Schema.optional(Schema.Array(VmwareAddressPool)),
  }).annotate({ identifier: "VmwareMetalLbConfig" });

export interface VmwareLoadBalancerConfig {
  /** Output only. Configuration for Seesaw typed load balancers. */
  seesawConfig?: VmwareSeesawConfig;
  /** Manually configured load balancers. */
  manualLbConfig?: VmwareManualLbConfig;
  /** The VIPs used by the load balancer. */
  vipConfig?: VmwareVipConfig;
  /** Configuration for F5 Big IP typed load balancers. */
  f5Config?: VmwareF5BigIpConfig;
  /** Configuration for MetalLB typed load balancers. */
  metalLbConfig?: VmwareMetalLbConfig;
}

export const VmwareLoadBalancerConfig: Schema.Schema<VmwareLoadBalancerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    seesawConfig: Schema.optional(VmwareSeesawConfig),
    manualLbConfig: Schema.optional(VmwareManualLbConfig),
    vipConfig: Schema.optional(VmwareVipConfig),
    f5Config: Schema.optional(VmwareF5BigIpConfig),
    metalLbConfig: Schema.optional(VmwareMetalLbConfig),
  }).annotate({ identifier: "VmwareLoadBalancerConfig" });

export interface VmwareCluster {
  /** Immutable. The VMware user cluster resource name. */
  name?: string;
  /** Output only. If set, there are currently changes in flight to the VMware user cluster. */
  reconciling?: boolean;
  /** Required. The Anthos clusters on the VMware version for your user cluster. */
  onPremVersion?: string;
  /** AAGConfig specifies whether to spread VMware user cluster nodes across at least three physical hosts in the datacenter. */
  antiAffinityGroups?: VmwareAAGConfig;
  /** Output only. The time at which VMware user cluster was deleted. */
  deleteTime?: string;
  /** Enable control plane V2. Default to false. */
  enableControlPlaneV2?: boolean;
  /** Configuration for auto repairing. */
  autoRepairConfig?: VmwareAutoRepairConfig;
  /** Storage configuration. */
  storage?: VmwareStorageConfig;
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
  etag?: string;
  /** Enable advanced cluster. */
  enableAdvancedCluster?: boolean;
  /** Output only. The time at which VMware user cluster was last updated. */
  updateTime?: string;
  /** Output only. The resource name of the VMware admin cluster hosting this user cluster. */
  adminClusterName?: string;
  /** Annotations on the VMware user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
  annotations?: Record<string, string>;
  /** RBAC policy that will be applied and managed by the Anthos On-Prem API. */
  authorization?: Authorization;
  /** Output only. The current state of VMware user cluster. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "RUNNING"
    | "RECONCILING"
    | "STOPPING"
    | "ERROR"
    | "DEGRADED"
    | (string & {});
  /** Disable bundled ingress. */
  disableBundledIngress?: boolean;
  /** Output only. The object name of the VMware OnPremUserCluster custom resource on the associated admin cluster. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs. */
  localName?: string;
  /** VMware user cluster control plane nodes must have either 1 or 3 replicas. */
  controlPlaneNode?: VmwareControlPlaneNodeConfig;
  /** The VMware user cluster network configuration. */
  networkConfig?: VmwareNetworkConfig;
  /** Enable VM tracking. */
  vmTrackingEnabled?: boolean;
  /** Binary Authorization related configurations. */
  binaryAuthorization?: BinaryAuthorization;
  /** Required. The admin cluster this VMware user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources. */
  adminClusterMembership?: string;
  /** VmwareDataplaneV2Config specifies configuration for Dataplane V2. */
  dataplaneV2?: VmwareDataplaneV2Config;
  /** Output only. Fleet configuration for the cluster. */
  fleet?: Fleet;
  /** A human readable description of this VMware user cluster. */
  description?: string;
  /** Load balancer configuration. */
  loadBalancer?: VmwareLoadBalancerConfig;
  /** Output only. ValidationCheck represents the result of the preflight check job. */
  validationCheck?: ValidationCheck;
  /** VmwareVCenterConfig specifies vCenter config for the user cluster. If unspecified, it is inherited from the admin cluster. */
  vcenter?: VmwareVCenterConfig;
  /** Specifies upgrade policy for the cluster. */
  upgradePolicy?: VmwareClusterUpgradePolicy;
  /** Output only. The DNS name of VMware user cluster's API server. */
  endpoint?: string;
  /** Output only. ResourceStatus representing detailed cluster state. */
  status?: ResourceStatus;
  /** Output only. The unique identifier of the VMware user cluster. */
  uid?: string;
  /** Output only. The time at which VMware user cluster was created. */
  createTime?: string;
}

export const VmwareCluster: Schema.Schema<VmwareCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    onPremVersion: Schema.optional(Schema.String),
    antiAffinityGroups: Schema.optional(VmwareAAGConfig),
    deleteTime: Schema.optional(Schema.String),
    enableControlPlaneV2: Schema.optional(Schema.Boolean),
    autoRepairConfig: Schema.optional(VmwareAutoRepairConfig),
    storage: Schema.optional(VmwareStorageConfig),
    etag: Schema.optional(Schema.String),
    enableAdvancedCluster: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
    adminClusterName: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    authorization: Schema.optional(Authorization),
    state: Schema.optional(Schema.String),
    disableBundledIngress: Schema.optional(Schema.Boolean),
    localName: Schema.optional(Schema.String),
    controlPlaneNode: Schema.optional(VmwareControlPlaneNodeConfig),
    networkConfig: Schema.optional(VmwareNetworkConfig),
    vmTrackingEnabled: Schema.optional(Schema.Boolean),
    binaryAuthorization: Schema.optional(BinaryAuthorization),
    adminClusterMembership: Schema.optional(Schema.String),
    dataplaneV2: Schema.optional(VmwareDataplaneV2Config),
    fleet: Schema.optional(Fleet),
    description: Schema.optional(Schema.String),
    loadBalancer: Schema.optional(VmwareLoadBalancerConfig),
    validationCheck: Schema.optional(ValidationCheck),
    vcenter: Schema.optional(VmwareVCenterConfig),
    upgradePolicy: Schema.optional(VmwareClusterUpgradePolicy),
    endpoint: Schema.optional(Schema.String),
    status: Schema.optional(ResourceStatus),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareCluster" });

export interface BareMetalPortConfig {
  /** The port that control plane hosted load balancers will listen on. */
  controlPlaneLoadBalancerPort?: number;
}

export const BareMetalPortConfig: Schema.Schema<BareMetalPortConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneLoadBalancerPort: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BareMetalPortConfig" });

export interface BareMetalVipConfig {
  /** The VIP which you previously set aside for the Kubernetes API of this bare metal user cluster. */
  controlPlaneVip?: string;
  /** The VIP which you previously set aside for ingress traffic into this bare metal user cluster. */
  ingressVip?: string;
}

export const BareMetalVipConfig: Schema.Schema<BareMetalVipConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneVip: Schema.optional(Schema.String),
    ingressVip: Schema.optional(Schema.String),
  }).annotate({ identifier: "BareMetalVipConfig" });

export interface BareMetalMetalLbConfig {
  /** Required. AddressPools is a list of non-overlapping IP pools used by load balancer typed services. All addresses must be routable to load balancer nodes. IngressVIP must be included in the pools. */
  addressPools?: ReadonlyArray<BareMetalLoadBalancerAddressPool>;
  /** Specifies the node pool running the load balancer. L2 connectivity is required among nodes in this pool. If missing, the control plane node pool is used as the load balancer pool. */
  loadBalancerNodePoolConfig?: BareMetalLoadBalancerNodePoolConfig;
}

export const BareMetalMetalLbConfig: Schema.Schema<BareMetalMetalLbConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressPools: Schema.optional(
      Schema.Array(BareMetalLoadBalancerAddressPool),
    ),
    loadBalancerNodePoolConfig: Schema.optional(
      BareMetalLoadBalancerNodePoolConfig,
    ),
  }).annotate({ identifier: "BareMetalMetalLbConfig" });

export interface BareMetalLoadBalancerConfig {
  /** Configures the ports that the load balancer will listen on. */
  portConfig?: BareMetalPortConfig;
  /** Configuration for BGP typed load balancers. When set network_config.advanced_networking is automatically set to true. */
  bgpLbConfig?: BareMetalBgpLbConfig;
  /** Manually configured load balancers. */
  manualLbConfig?: BareMetalManualLbConfig;
  /** The VIPs used by the load balancer. */
  vipConfig?: BareMetalVipConfig;
  /** Configuration for MetalLB load balancers. */
  metalLbConfig?: BareMetalMetalLbConfig;
}

export const BareMetalLoadBalancerConfig: Schema.Schema<BareMetalLoadBalancerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    portConfig: Schema.optional(BareMetalPortConfig),
    bgpLbConfig: Schema.optional(BareMetalBgpLbConfig),
    manualLbConfig: Schema.optional(BareMetalManualLbConfig),
    vipConfig: Schema.optional(BareMetalVipConfig),
    metalLbConfig: Schema.optional(BareMetalMetalLbConfig),
  }).annotate({ identifier: "BareMetalLoadBalancerConfig" });

export interface BareMetalOsEnvironmentConfig {
  /** Whether the package repo should not be included when initializing bare metal machines. */
  packageRepoExcluded?: boolean;
}

export const BareMetalOsEnvironmentConfig: Schema.Schema<BareMetalOsEnvironmentConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageRepoExcluded: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BareMetalOsEnvironmentConfig" });

export interface BareMetalClusterOperationsConfig {
  /** Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics). */
  enableApplicationLogs?: boolean;
}

export const BareMetalClusterOperationsConfig: Schema.Schema<BareMetalClusterOperationsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableApplicationLogs: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BareMetalClusterOperationsConfig" });

export interface BareMetalIslandModeCidrConfig {
  /** Required. All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation. */
  podAddressCidrBlocks?: ReadonlyArray<string>;
  /** Required. All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field is mutable after creation starting with version 1.15. */
  serviceAddressCidrBlocks?: ReadonlyArray<string>;
}

export const BareMetalIslandModeCidrConfig: Schema.Schema<BareMetalIslandModeCidrConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    podAddressCidrBlocks: Schema.optional(Schema.Array(Schema.String)),
    serviceAddressCidrBlocks: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BareMetalIslandModeCidrConfig" });

export interface BareMetalNetworkConfig {
  /** Enables the use of advanced Anthos networking features, such as Bundled Load Balancing with BGP or the egress NAT gateway. Setting configuration for advanced networking features will automatically set this flag. */
  advancedNetworking?: boolean;
  /** Configuration for island mode CIDR. In an island-mode network, nodes have unique IP addresses, but pods don't have unique addresses across clusters. This doesn't cause problems because pods in one cluster never directly communicate with pods in another cluster. Instead, there are gateways that mediate between a pod in one cluster and a pod in another cluster. */
  islandModeCidr?: BareMetalIslandModeCidrConfig;
  /** Configuration for multiple network interfaces. */
  multipleNetworkInterfacesConfig?: BareMetalMultipleNetworkInterfacesConfig;
  /** Configuration for SR-IOV. */
  srIovConfig?: BareMetalSrIovConfig;
}

export const BareMetalNetworkConfig: Schema.Schema<BareMetalNetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advancedNetworking: Schema.optional(Schema.Boolean),
    islandModeCidr: Schema.optional(BareMetalIslandModeCidrConfig),
    multipleNetworkInterfacesConfig: Schema.optional(
      BareMetalMultipleNetworkInterfacesConfig,
    ),
    srIovConfig: Schema.optional(BareMetalSrIovConfig),
  }).annotate({ identifier: "BareMetalNetworkConfig" });

export interface BareMetalControlPlaneConfig {
  /** Required. Configures the node pool running the control plane. */
  controlPlaneNodePoolConfig?: BareMetalControlPlaneNodePoolConfig;
  /** Customizes the default API server args. Only a subset of customized flags are supported. For the exact format, refer to the [API server documentation](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/). */
  apiServerArgs?: ReadonlyArray<BareMetalApiServerArgument>;
}

export const BareMetalControlPlaneConfig: Schema.Schema<BareMetalControlPlaneConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneNodePoolConfig: Schema.optional(
      BareMetalControlPlaneNodePoolConfig,
    ),
    apiServerArgs: Schema.optional(Schema.Array(BareMetalApiServerArgument)),
  }).annotate({ identifier: "BareMetalControlPlaneConfig" });

export interface BareMetalStorageConfig {
  /** Required. Specifies the config for local PersistentVolumes backed by subdirectories in a shared filesystem. These subdirectores are automatically created during cluster creation. */
  lvpShareConfig?: BareMetalLvpShareConfig;
  /** Required. Specifies the config for local PersistentVolumes backed by mounted node disks. These disks need to be formatted and mounted by the user, which can be done before or after cluster creation. */
  lvpNodeMountsConfig?: BareMetalLvpConfig;
}

export const BareMetalStorageConfig: Schema.Schema<BareMetalStorageConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lvpShareConfig: Schema.optional(BareMetalLvpShareConfig),
    lvpNodeMountsConfig: Schema.optional(BareMetalLvpConfig),
  }).annotate({ identifier: "BareMetalStorageConfig" });

export interface BareMetalSecurityConfig {
  /** Configures user access to the user cluster. */
  authorization?: Authorization;
}

export const BareMetalSecurityConfig: Schema.Schema<BareMetalSecurityConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorization: Schema.optional(Authorization),
  }).annotate({ identifier: "BareMetalSecurityConfig" });

export interface BareMetalMaintenanceConfig {
  /** Required. All IPv4 address from these ranges will be placed into maintenance mode. Nodes in maintenance mode will be cordoned and drained. When both of these are true, the "baremetal.cluster.gke.io/maintenance" annotation will be set on the node resource. */
  maintenanceAddressCidrBlocks?: ReadonlyArray<string>;
}

export const BareMetalMaintenanceConfig: Schema.Schema<BareMetalMaintenanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maintenanceAddressCidrBlocks: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BareMetalMaintenanceConfig" });

export interface BareMetalCluster {
  /** Required. Load balancer configuration. */
  loadBalancer?: BareMetalLoadBalancerConfig;
  /** Output only. The result of the preflight check. */
  validationCheck?: ValidationCheck;
  /** The cluster upgrade policy. */
  upgradePolicy?: BareMetalClusterUpgradePolicy;
  /** Output only. Detailed cluster status. */
  status?: ResourceStatus;
  /** Output only. The IP address of the bare metal user cluster's API server. */
  endpoint?: string;
  /** Workload node configuration. */
  nodeConfig?: BareMetalWorkloadNodeConfig;
  /** Node access related configurations. */
  nodeAccessConfig?: BareMetalNodeAccessConfig;
  /** Output only. The unique identifier of the bare metal user cluster. */
  uid?: string;
  /** Output only. The time when the bare metal user cluster was created. */
  createTime?: string;
  /** Annotations on the bare metal user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
  annotations?: Record<string, string>;
  /** Output only. The current state of the bare metal user cluster. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "RUNNING"
    | "RECONCILING"
    | "STOPPING"
    | "ERROR"
    | "DEGRADED"
    | (string & {});
  /** OS environment related configurations. */
  osEnvironmentConfig?: BareMetalOsEnvironmentConfig;
  /** Output only. The object name of the bare metal user cluster custom resource on the associated admin cluster. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the name in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. When the local name and cluster name differ, the local name is used in the admin cluster controller logs. You use the cluster name when accessing the cluster using bmctl and kubectl. */
  localName?: string;
  /** Cluster operations configuration. */
  clusterOperations?: BareMetalClusterOperationsConfig;
  /** Output only. The namespace of the cluster. */
  localNamespace?: string;
  /** Required. Network configuration. */
  networkConfig?: BareMetalNetworkConfig;
  /** Required. The admin cluster this bare metal user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. */
  adminClusterMembership?: string;
  /** Required. Control plane configuration. */
  controlPlane?: BareMetalControlPlaneConfig;
  /** Binary Authorization related configurations. */
  binaryAuthorization?: BinaryAuthorization;
  /** Output only. Fleet configuration for the cluster. */
  fleet?: Fleet;
  /** A human readable description of this bare metal user cluster. */
  description?: string;
  /** Required. Storage configuration. */
  storage?: BareMetalStorageConfig;
  /** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
  etag?: string;
  /** Output only. The resource name of the bare metal admin cluster managing this user cluster. */
  adminClusterName?: string;
  /** Output only. The time when the bare metal user cluster was last updated. */
  updateTime?: string;
  /** Security related setting configuration. */
  securityConfig?: BareMetalSecurityConfig;
  /** Immutable. The bare metal user cluster resource name. */
  name?: string;
  /** Output only. If set, there are currently changes in flight to the bare metal user cluster. */
  reconciling?: boolean;
  /** Proxy configuration. */
  proxy?: BareMetalProxyConfig;
  /** Required. The Anthos clusters on bare metal version for your user cluster. */
  bareMetalVersion?: string;
  /** Maintenance configuration. */
  maintenanceConfig?: BareMetalMaintenanceConfig;
  /** Output only. The time when the bare metal user cluster was deleted. If the resource is not deleted, this must be empty */
  deleteTime?: string;
  /** Output only. Status of on-going maintenance tasks. */
  maintenanceStatus?: BareMetalMaintenanceStatus;
}

export const BareMetalCluster: Schema.Schema<BareMetalCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancer: Schema.optional(BareMetalLoadBalancerConfig),
    validationCheck: Schema.optional(ValidationCheck),
    upgradePolicy: Schema.optional(BareMetalClusterUpgradePolicy),
    status: Schema.optional(ResourceStatus),
    endpoint: Schema.optional(Schema.String),
    nodeConfig: Schema.optional(BareMetalWorkloadNodeConfig),
    nodeAccessConfig: Schema.optional(BareMetalNodeAccessConfig),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
    osEnvironmentConfig: Schema.optional(BareMetalOsEnvironmentConfig),
    localName: Schema.optional(Schema.String),
    clusterOperations: Schema.optional(BareMetalClusterOperationsConfig),
    localNamespace: Schema.optional(Schema.String),
    networkConfig: Schema.optional(BareMetalNetworkConfig),
    adminClusterMembership: Schema.optional(Schema.String),
    controlPlane: Schema.optional(BareMetalControlPlaneConfig),
    binaryAuthorization: Schema.optional(BinaryAuthorization),
    fleet: Schema.optional(Fleet),
    description: Schema.optional(Schema.String),
    storage: Schema.optional(BareMetalStorageConfig),
    etag: Schema.optional(Schema.String),
    adminClusterName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    securityConfig: Schema.optional(BareMetalSecurityConfig),
    name: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    proxy: Schema.optional(BareMetalProxyConfig),
    bareMetalVersion: Schema.optional(Schema.String),
    maintenanceConfig: Schema.optional(BareMetalMaintenanceConfig),
    deleteTime: Schema.optional(Schema.String),
    maintenanceStatus: Schema.optional(BareMetalMaintenanceStatus),
  }).annotate({ identifier: "BareMetalCluster" });

export interface ListBareMetalClustersResponse {
  /** The list of bare metal Clusters. */
  bareMetalClusters?: ReadonlyArray<BareMetalCluster>;
  /** A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListBareMetalClustersResponse: Schema.Schema<ListBareMetalClustersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bareMetalClusters: Schema.optional(Schema.Array(BareMetalCluster)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListBareMetalClustersResponse" });

export interface VmwareBundleConfig {
  /** The version of the bundle. */
  version?: string;
  /** Output only. Resource status for the bundle. */
  status?: ResourceStatus;
}

export const VmwareBundleConfig: Schema.Schema<VmwareBundleConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    status: Schema.optional(ResourceStatus),
  }).annotate({ identifier: "VmwareBundleConfig" });

export interface VmwarePlatformConfig {
  /** Output only. The platform version e.g. 1.13.2. */
  platformVersion?: string;
  /** Input only. The required platform version e.g. 1.13.1. If the current platform version is lower than the target version, the platform version will be updated to the target version. If the target version is not installed in the platform (bundle versions), download the target version bundle. */
  requiredPlatformVersion?: string;
  /** Output only. The list of bundles installed in the admin cluster. */
  bundles?: ReadonlyArray<VmwareBundleConfig>;
  /** Output only. Resource status for the platform. */
  status?: ResourceStatus;
}

export const VmwarePlatformConfig: Schema.Schema<VmwarePlatformConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    platformVersion: Schema.optional(Schema.String),
    requiredPlatformVersion: Schema.optional(Schema.String),
    bundles: Schema.optional(Schema.Array(VmwareBundleConfig)),
    status: Schema.optional(ResourceStatus),
  }).annotate({ identifier: "VmwarePlatformConfig" });

export interface VmwareAdminPreparedSecretsConfig {
  /** Whether prepared secrets is enabled. */
  enabled?: boolean;
}

export const VmwareAdminPreparedSecretsConfig: Schema.Schema<VmwareAdminPreparedSecretsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VmwareAdminPreparedSecretsConfig" });

export interface VmwareVersionInfo {
  /** If set, the cluster dependencies (e.g. the admin cluster, other user clusters managed by the same admin cluster) must be upgraded before this version can be installed or upgraded to. */
  hasDependencies?: boolean;
  /** If set, the version is installed in the admin cluster. Otherwise, the version bundle must be downloaded and installed before a user cluster can be created at or upgraded to this version. */
  isInstalled?: boolean;
  /** Version number e.g. 1.13.1-gke.1000. */
  version?: string;
  /** The list of upgrade dependencies for this version. */
  dependencies?: ReadonlyArray<UpgradeDependency>;
}

export const VmwareVersionInfo: Schema.Schema<VmwareVersionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasDependencies: Schema.optional(Schema.Boolean),
    isInstalled: Schema.optional(Schema.Boolean),
    version: Schema.optional(Schema.String),
    dependencies: Schema.optional(Schema.Array(UpgradeDependency)),
  }).annotate({ identifier: "VmwareVersionInfo" });

export interface QueryVmwareVersionConfigResponse {
  /** List of available versions to install or to upgrade to. */
  versions?: ReadonlyArray<VmwareVersionInfo>;
}

export const QueryVmwareVersionConfigResponse: Schema.Schema<QueryVmwareVersionConfigResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versions: Schema.optional(Schema.Array(VmwareVersionInfo)),
  }).annotate({ identifier: "QueryVmwareVersionConfigResponse" });

export interface EnrollVmwareNodePoolRequest {
  /** The target node pool id to be enrolled. */
  vmwareNodePoolId?: string;
}

export const EnrollVmwareNodePoolRequest: Schema.Schema<EnrollVmwareNodePoolRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmwareNodePoolId: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnrollVmwareNodePoolRequest" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface VmwareNodePoolAutoscalingConfig {
  /** Minimum number of replicas in the NodePool. */
  minReplicas?: number;
  /** Maximum number of replicas in the NodePool. */
  maxReplicas?: number;
}

export const VmwareNodePoolAutoscalingConfig: Schema.Schema<VmwareNodePoolAutoscalingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minReplicas: Schema.optional(Schema.Number),
    maxReplicas: Schema.optional(Schema.Number),
  }).annotate({ identifier: "VmwareNodePoolAutoscalingConfig" });

export interface VmwareNodePool {
  /** Output only. The time at which this node pool was created. */
  createTime?: string;
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
  etag?: string;
  /** Output only. The unique identifier of the node pool. */
  uid?: string;
  /** Output only. The time at which this node pool was last updated. */
  updateTime?: string;
  /** Required. The node configuration of the node pool. */
  config?: VmwareNodeConfig;
  /** Output only. ResourceStatus representing the detailed VMware node pool state. */
  status?: ResourceStatus;
  /** The display name for the node pool. */
  displayName?: string;
  /** Output only. The time at which this node pool was deleted. If the resource is not deleted, this must be empty */
  deleteTime?: string;
  /** Immutable. The resource name of this node pool. */
  name?: string;
  /** Output only. If set, there are currently changes in flight to the node pool. */
  reconciling?: boolean;
  /** Anthos version for the node pool. Defaults to the user cluster version. */
  onPremVersion?: string;
  /** Node pool autoscaling config for the node pool. */
  nodePoolAutoscaling?: VmwareNodePoolAutoscalingConfig;
  /** Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
  annotations?: Record<string, string>;
  /** Output only. The current state of the node pool. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "RUNNING"
    | "RECONCILING"
    | "STOPPING"
    | "ERROR"
    | "DEGRADED"
    | (string & {});
}

export const VmwareNodePool: Schema.Schema<VmwareNodePool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    config: Schema.optional(VmwareNodeConfig),
    status: Schema.optional(ResourceStatus),
    displayName: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    onPremVersion: Schema.optional(Schema.String),
    nodePoolAutoscaling: Schema.optional(VmwareNodePoolAutoscalingConfig),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareNodePool" });

export interface QueryBareMetalVersionConfigResponse {
  /** List of available versions to install or to upgrade to. */
  versions?: ReadonlyArray<BareMetalVersionInfo>;
}

export const QueryBareMetalVersionConfigResponse: Schema.Schema<QueryBareMetalVersionConfigResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versions: Schema.optional(Schema.Array(BareMetalVersionInfo)),
  }).annotate({ identifier: "QueryBareMetalVersionConfigResponse" });

export interface ListVmwareNodePoolsResponse {
  /** The node pools from the specified parent resource. */
  vmwareNodePools?: ReadonlyArray<VmwareNodePool>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListVmwareNodePoolsResponse: Schema.Schema<ListVmwareNodePoolsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmwareNodePools: Schema.optional(Schema.Array(VmwareNodePool)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListVmwareNodePoolsResponse" });

export interface Metric {
  /** For metrics with integer value. */
  intValue?: string;
  /** Required. The metric name. */
  metric?:
    | "METRIC_ID_UNSPECIFIED"
    | "NODES_TOTAL"
    | "NODES_DRAINING"
    | "NODES_UPGRADING"
    | "NODES_PENDING_UPGRADE"
    | "NODES_UPGRADED"
    | "NODES_FAILED"
    | "NODES_HEALTHY"
    | "NODES_RECONCILING"
    | "NODES_IN_MAINTENANCE"
    | "PREFLIGHTS_COMPLETED"
    | "PREFLIGHTS_RUNNING"
    | "PREFLIGHTS_FAILED"
    | "PREFLIGHTS_TOTAL"
    | (string & {});
  /** For metrics with floating point value. */
  doubleValue?: number;
  /** For metrics with custom values (ratios, visual progress, etc.). */
  stringValue?: string;
}

export const Metric: Schema.Schema<Metric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intValue: Schema.optional(Schema.String),
    metric: Schema.optional(Schema.String),
    doubleValue: Schema.optional(Schema.Number),
    stringValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "Metric" });

export interface OperationStage {
  /** The high-level stage of the operation. */
  stage?:
    | "STAGE_UNSPECIFIED"
    | "PREFLIGHT_CHECK"
    | "CONFIGURE"
    | "DEPLOY"
    | "HEALTH_CHECK"
    | "UPDATE"
    | (string & {});
  /** Time the stage started. */
  startTime?: string;
  /** Time the stage ended. */
  endTime?: string;
  /** Progress metric bundle. */
  metrics?: ReadonlyArray<Metric>;
  /** Output only. State of the stage. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
}

export const OperationStage: Schema.Schema<OperationStage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stage: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    metrics: Schema.optional(Schema.Array(Metric)),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationStage" });

export interface BareMetalParallelUpgradeConfig {
  /** The maximum number of nodes that can be upgraded at once. */
  concurrentNodes?: number;
  /** The minimum number of nodes that should be healthy and available during an upgrade. If set to the default value of 0, it is possible that none of the nodes will be available during an upgrade. */
  minimumAvailableNodes?: number;
}

export const BareMetalParallelUpgradeConfig: Schema.Schema<BareMetalParallelUpgradeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    concurrentNodes: Schema.optional(Schema.Number),
    minimumAvailableNodes: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BareMetalParallelUpgradeConfig" });

export interface BareMetalNodePoolUpgradePolicy {
  /** The parallel upgrade settings for worker node pools. */
  parallelUpgradeConfig?: BareMetalParallelUpgradeConfig;
}

export const BareMetalNodePoolUpgradePolicy: Schema.Schema<BareMetalNodePoolUpgradePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parallelUpgradeConfig: Schema.optional(BareMetalParallelUpgradeConfig),
  }).annotate({ identifier: "BareMetalNodePoolUpgradePolicy" });

export interface BareMetalNodePool {
  /** Immutable. The bare metal node pool resource name. */
  name?: string;
  /** Output only. If set, there are currently changes in flight to the bare metal node pool. */
  reconciling?: boolean;
  /** Required. Node pool configuration. */
  nodePoolConfig?: BareMetalNodePoolConfig;
  /** Output only. The current state of the bare metal node pool. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "RUNNING"
    | "RECONCILING"
    | "STOPPING"
    | "ERROR"
    | "DEGRADED"
    | (string & {});
  /** Annotations on the bare metal node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
  annotations?: Record<string, string>;
  /** Output only. The time at which this bare metal node pool was deleted. If the resource is not deleted, this must be empty */
  deleteTime?: string;
  /** The display name for the bare metal node pool. */
  displayName?: string;
  /** Output only. ResourceStatus representing the detailed node pool status. */
  status?: ResourceStatus;
  /** The worker node pool upgrade policy. */
  upgradePolicy?: BareMetalNodePoolUpgradePolicy;
  /** Output only. The time at which this bare metal node pool was created. */
  createTime?: string;
  /** Output only. The unique identifier of the bare metal node pool. */
  uid?: string;
  /** Output only. The time at which this bare metal node pool was last updated. */
  updateTime?: string;
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
  etag?: string;
}

export const BareMetalNodePool: Schema.Schema<BareMetalNodePool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    nodePoolConfig: Schema.optional(BareMetalNodePoolConfig),
    state: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    deleteTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    status: Schema.optional(ResourceStatus),
    upgradePolicy: Schema.optional(BareMetalNodePoolUpgradePolicy),
    createTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "BareMetalNodePool" });

export interface VmwareAdminMetalLbConfig {
  /** Whether MetalLB is enabled. */
  enabled?: boolean;
}

export const VmwareAdminMetalLbConfig: Schema.Schema<VmwareAdminMetalLbConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VmwareAdminMetalLbConfig" });

export interface VmwareAdminF5BigIpConfig {
  /** The load balancer's IP address. */
  address?: string;
  /** The preexisting partition to be used by the load balancer. This partition is usually created for the admin cluster for example: 'my-f5-admin-partition'. */
  partition?: string;
  /** The pool name. Only necessary, if using SNAT. */
  snatPool?: string;
}

export const VmwareAdminF5BigIpConfig: Schema.Schema<VmwareAdminF5BigIpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.optional(Schema.String),
    partition: Schema.optional(Schema.String),
    snatPool: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareAdminF5BigIpConfig" });

export interface VmwareAdminSeesawConfig {
  /** Enable two load balancer VMs to achieve a highly-available Seesaw load balancer. */
  enableHa?: boolean;
  /** The IP Blocks to be used by the Seesaw load balancer */
  ipBlocks?: ReadonlyArray<VmwareIpBlock>;
  /** MasterIP is the IP announced by the master of Seesaw group. */
  masterIp?: string;
  /** In general the following format should be used for the Seesaw group name: seesaw-for-[cluster_name]. */
  group?: string;
  /** Name to be used by Stackdriver. */
  stackdriverName?: string;
  /** Names of the VMs created for this Seesaw group. */
  vms?: ReadonlyArray<string>;
}

export const VmwareAdminSeesawConfig: Schema.Schema<VmwareAdminSeesawConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableHa: Schema.optional(Schema.Boolean),
    ipBlocks: Schema.optional(Schema.Array(VmwareIpBlock)),
    masterIp: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    stackdriverName: Schema.optional(Schema.String),
    vms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VmwareAdminSeesawConfig" });

export interface VmwareAdminLoadBalancerConfig {
  /** The VIPs used by the load balancer. */
  vipConfig?: VmwareAdminVipConfig;
  /** Configuration for F5 Big IP typed load balancers. */
  f5Config?: VmwareAdminF5BigIpConfig;
  /** MetalLB load balancers. */
  metalLbConfig?: VmwareAdminMetalLbConfig;
  /** Manually configured load balancers. */
  manualLbConfig?: VmwareAdminManualLbConfig;
  /** Output only. Configuration for Seesaw typed load balancers. */
  seesawConfig?: VmwareAdminSeesawConfig;
}

export const VmwareAdminLoadBalancerConfig: Schema.Schema<VmwareAdminLoadBalancerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vipConfig: Schema.optional(VmwareAdminVipConfig),
    f5Config: Schema.optional(VmwareAdminF5BigIpConfig),
    metalLbConfig: Schema.optional(VmwareAdminMetalLbConfig),
    manualLbConfig: Schema.optional(VmwareAdminManualLbConfig),
    seesawConfig: Schema.optional(VmwareAdminSeesawConfig),
  }).annotate({ identifier: "VmwareAdminLoadBalancerConfig" });

export interface VmwareAdminPrivateRegistryConfig {
  /** The registry address. */
  address?: string;
  /** When the container runtime pulls an image from private registry, the registry must prove its identity by presenting a certificate. The registry's certificate is signed by a certificate authority (CA). The container runtime uses the CA's certificate to validate the registry's certificate. */
  caCert?: string;
}

export const VmwareAdminPrivateRegistryConfig: Schema.Schema<VmwareAdminPrivateRegistryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.optional(Schema.String),
    caCert: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareAdminPrivateRegistryConfig" });

export interface VmwareAdminCluster {
  /** A human readable description of this VMware admin cluster. */
  description?: string;
  /** Output only. Fleet configuration for the cluster. */
  fleet?: Fleet;
  /** The OS image type for the VMware admin cluster. */
  imageType?: string;
  /** Output only. The VMware admin cluster prepared secrets configuration. It should always be enabled by the Central API, instead of letting users set it. */
  preparedSecrets?: VmwareAdminPreparedSecretsConfig;
  /** The VMware admin cluster network configuration. */
  networkConfig?: VmwareAdminNetworkConfig;
  /** Output only. The object name of the VMware OnPremAdminCluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs. */
  localName?: string;
  /** The VMware admin cluster control plane node configuration. */
  controlPlaneNode?: VmwareAdminControlPlaneNodeConfig;
  /** Output only. The current state of VMware admin cluster. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "RUNNING"
    | "RECONCILING"
    | "STOPPING"
    | "ERROR"
    | "DEGRADED"
    | (string & {});
  /** Annotations on the VMware admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
  annotations?: Record<string, string>;
  /** The VMware admin cluster authorization configuration. */
  authorization?: VmwareAdminAuthorizationConfig;
  /** Output only. The time at which VMware admin cluster was created. */
  createTime?: string;
  /** Output only. The unique identifier of the VMware admin cluster. */
  uid?: string;
  /** Output only. ResourceStatus representing detailed cluster state. */
  status?: ResourceStatus;
  /** Output only. The DNS name of VMware admin cluster's API server. */
  endpoint?: string;
  /** The VMware admin cluster VCenter configuration. */
  vcenter?: VmwareAdminVCenterConfig;
  /** The VMware admin cluster load balancer configuration. */
  loadBalancer?: VmwareAdminLoadBalancerConfig;
  /** Output only. ValidationCheck represents the result of the preflight check job. */
  validationCheck?: ValidationCheck;
  /** The bootstrap cluster this VMware admin cluster belongs to. */
  bootstrapClusterMembership?: string;
  /** The VMware admin cluster addon node configuration. */
  addonNode?: VmwareAdminAddonNodeConfig;
  /** Configuration for proxy. */
  proxy?: VmwareAdminProxy;
  /** The VMware admin cluster anti affinity group configuration. */
  antiAffinityGroups?: VmwareAAGConfig;
  /** The Anthos clusters on the VMware version for the admin cluster. */
  onPremVersion?: string;
  /** Immutable. The VMware admin cluster resource name. */
  name?: string;
  /** Output only. If set, there are currently changes in flight to the VMware admin cluster. */
  reconciling?: boolean;
  /** The VMware platform configuration. */
  platformConfig?: VmwarePlatformConfig;
  /** Output only. The time at which VMware admin cluster was last updated. */
  updateTime?: string;
  /** Enable advanced cluster. */
  enableAdvancedCluster?: boolean;
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
  etag?: string;
  /** Configuration for registry. */
  privateRegistryConfig?: VmwareAdminPrivateRegistryConfig;
  /** The VMware admin cluster auto repair configuration. */
  autoRepairConfig?: VmwareAutoRepairConfig;
}

export const VmwareAdminCluster: Schema.Schema<VmwareAdminCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    fleet: Schema.optional(Fleet),
    imageType: Schema.optional(Schema.String),
    preparedSecrets: Schema.optional(VmwareAdminPreparedSecretsConfig),
    networkConfig: Schema.optional(VmwareAdminNetworkConfig),
    localName: Schema.optional(Schema.String),
    controlPlaneNode: Schema.optional(VmwareAdminControlPlaneNodeConfig),
    state: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    authorization: Schema.optional(VmwareAdminAuthorizationConfig),
    createTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    status: Schema.optional(ResourceStatus),
    endpoint: Schema.optional(Schema.String),
    vcenter: Schema.optional(VmwareAdminVCenterConfig),
    loadBalancer: Schema.optional(VmwareAdminLoadBalancerConfig),
    validationCheck: Schema.optional(ValidationCheck),
    bootstrapClusterMembership: Schema.optional(Schema.String),
    addonNode: Schema.optional(VmwareAdminAddonNodeConfig),
    proxy: Schema.optional(VmwareAdminProxy),
    antiAffinityGroups: Schema.optional(VmwareAAGConfig),
    onPremVersion: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    platformConfig: Schema.optional(VmwarePlatformConfig),
    updateTime: Schema.optional(Schema.String),
    enableAdvancedCluster: Schema.optional(Schema.Boolean),
    etag: Schema.optional(Schema.String),
    privateRegistryConfig: Schema.optional(VmwareAdminPrivateRegistryConfig),
    autoRepairConfig: Schema.optional(VmwareAutoRepairConfig),
  }).annotate({ identifier: "VmwareAdminCluster" });

export interface QueryBareMetalAdminVersionConfigResponse {
  /** List of available versions to install or to upgrade to. */
  versions?: ReadonlyArray<BareMetalVersionInfo>;
}

export const QueryBareMetalAdminVersionConfigResponse: Schema.Schema<QueryBareMetalAdminVersionConfigResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versions: Schema.optional(Schema.Array(BareMetalVersionInfo)),
  }).annotate({ identifier: "QueryBareMetalAdminVersionConfigResponse" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface ListBareMetalAdminClustersResponse {
  /** The list of bare metal admin cluster. */
  bareMetalAdminClusters?: ReadonlyArray<BareMetalAdminCluster>;
  /** A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListBareMetalAdminClustersResponse: Schema.Schema<ListBareMetalAdminClustersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bareMetalAdminClusters: Schema.optional(
      Schema.Array(BareMetalAdminCluster),
    ),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListBareMetalAdminClustersResponse" });

export interface EnrollBareMetalClusterRequest {
  /** Optional. The object name of the bare metal cluster custom resource on the associated admin cluster. This field is used to support conflicting resource names when enrolling existing clusters to the API. When not provided, this field will resolve to the bare_metal_cluster_id. Otherwise, it must match the object name of the bare metal cluster custom resource. It is not modifiable outside / beyond the enrollment operation. */
  localName?: string;
  /** Optional. The namespace of the cluster. */
  localNamespace?: string;
  /** User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all bare metal clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. */
  bareMetalClusterId?: string;
  /** Required. The admin cluster this bare metal user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources. */
  adminClusterMembership?: string;
}

export const EnrollBareMetalClusterRequest: Schema.Schema<EnrollBareMetalClusterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localName: Schema.optional(Schema.String),
    localNamespace: Schema.optional(Schema.String),
    bareMetalClusterId: Schema.optional(Schema.String),
    adminClusterMembership: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnrollBareMetalClusterRequest" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface EnrollBareMetalAdminClusterRequest {
  /** Required. This is the full resource name of this admin cluster's fleet membership. */
  membership?: string;
  /** User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all GKE on-prem clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. */
  bareMetalAdminClusterId?: string;
}

export const EnrollBareMetalAdminClusterRequest: Schema.Schema<EnrollBareMetalAdminClusterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    membership: Schema.optional(Schema.String),
    bareMetalAdminClusterId: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnrollBareMetalAdminClusterRequest" });

export interface ListVmwareAdminClustersResponse {
  /** The list of VMware admin cluster. */
  vmwareAdminClusters?: ReadonlyArray<VmwareAdminCluster>;
  /** A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListVmwareAdminClustersResponse: Schema.Schema<ListVmwareAdminClustersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmwareAdminClusters: Schema.optional(Schema.Array(VmwareAdminCluster)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListVmwareAdminClustersResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Location" });

export interface OperationProgress {
  /** The stages of the operation. */
  stages?: ReadonlyArray<OperationStage>;
}

export const OperationProgress: Schema.Schema<OperationProgress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stages: Schema.optional(Schema.Array(OperationStage)),
  }).annotate({ identifier: "OperationProgress" });

export interface ListBareMetalNodePoolsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The node pools from the specified parent resource. */
  bareMetalNodePools?: ReadonlyArray<BareMetalNodePool>;
}

export const ListBareMetalNodePoolsResponse: Schema.Schema<ListBareMetalNodePoolsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    bareMetalNodePools: Schema.optional(Schema.Array(BareMetalNodePool)),
  }).annotate({ identifier: "ListBareMetalNodePoolsResponse" });

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

export interface OperationMetadata {
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have [Operation.error] value with a [google.rpc.Status.code] of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Denotes if the local managing cluster's control plane is currently disconnected. This is expected to occur temporarily during self-managed cluster upgrades. */
  controlPlaneDisconnected?: boolean;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Type of operation being executed. */
  type?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "CREATE"
    | "DELETE"
    | "UPDATE"
    | "UPGRADE"
    | "PLATFORM_UPGRADE"
    | (string & {});
  /** Output only. Detailed progress information for the operation. */
  progress?: OperationProgress;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedCancellation: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    controlPlaneDisconnected: Schema.optional(Schema.Boolean),
    target: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    progress: Schema.optional(OperationProgress),
    verb: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface ListVmwareClustersResponse {
  /** A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of VMware Cluster. */
  vmwareClusters?: ReadonlyArray<VmwareCluster>;
}

export const ListVmwareClustersResponse: Schema.Schema<ListVmwareClustersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    vmwareClusters: Schema.optional(Schema.Array(VmwareCluster)),
  }).annotate({ identifier: "ListVmwareClustersResponse" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface EnrollBareMetalNodePoolRequest {
  /** User provided OnePlatform identifier that is used as part of the resource name. (https://tools.ietf.org/html/rfc1123) format. */
  bareMetalNodePoolId?: string;
  /** If set, only validate the request, but do not actually enroll the node pool. */
  validateOnly?: boolean;
}

export const EnrollBareMetalNodePoolRequest: Schema.Schema<EnrollBareMetalNodePoolRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bareMetalNodePoolId: Schema.optional(Schema.String),
    validateOnly: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "EnrollBareMetalNodePoolRequest" });

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

export interface ListProjectsLocationsRequest {
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface PatchProjectsLocationsBareMetalClustersRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the BareMetalCluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the BareMetalCluster message will be updated. Empty fields will be ignored unless a field mask is used. */
  updateMask?: string;
  /** If set to true, and the bare metal cluster is not found, the request will create a new bare metal cluster with the provided configuration. The user must have both create and update permission to call Update with allow_missing set to true. */
  allowMissing?: boolean;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
  /** Immutable. The bare metal user cluster resource name. */
  name: string;
  /** Request body */
  body?: BareMetalCluster;
}

export const PatchProjectsLocationsBareMetalClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(BareMetalCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsBareMetalClustersRequest>;

export type PatchProjectsLocationsBareMetalClustersResponse = Operation;
export const PatchProjectsLocationsBareMetalClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsBareMetalClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single bare metal Cluster. */
export const patchProjectsLocationsBareMetalClusters: API.OperationMethod<
  PatchProjectsLocationsBareMetalClustersRequest,
  PatchProjectsLocationsBareMetalClustersResponse,
  PatchProjectsLocationsBareMetalClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBareMetalClustersRequest,
  output: PatchProjectsLocationsBareMetalClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsBareMetalClustersRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsBareMetalClustersRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsBareMetalClustersRequest>;

export type TestIamPermissionsProjectsLocationsBareMetalClustersResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsBareMetalClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsBareMetalClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsBareMetalClusters: API.OperationMethod<
  TestIamPermissionsProjectsLocationsBareMetalClustersRequest,
  TestIamPermissionsProjectsLocationsBareMetalClustersResponse,
  TestIamPermissionsProjectsLocationsBareMetalClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsBareMetalClustersRequest,
  output: TestIamPermissionsProjectsLocationsBareMetalClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsBareMetalClustersRequest {
  /** Required. Name of the bare metal user cluster to be deleted. Format: "projects/{project}/locations/{location}/bareMetalClusters/{bare_metal_cluster}" */
  name: string;
  /** If set to true, and the bare metal cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO. */
  allowMissing?: boolean;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
  /** If set to true, any node pools from the cluster will also be deleted. */
  force?: boolean;
  /** If set to true, the deletion of a bare metal user cluster resource will succeed even if errors occur during deletion. This parameter can be used when you want to delete GCP's cluster resource and the on-prem admin cluster that hosts your user cluster is disconnected / unreachable or deleted. WARNING: Using this parameter when your user cluster still exists may result in a deleted GCP user cluster but an existing on-prem user cluster. */
  ignoreErrors?: boolean;
  /** The current etag of the bare metal Cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsBareMetalClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    ignoreErrors: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreErrors"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsBareMetalClustersRequest>;

export type DeleteProjectsLocationsBareMetalClustersResponse = Operation;
export const DeleteProjectsLocationsBareMetalClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsBareMetalClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single bare metal Cluster. */
export const deleteProjectsLocationsBareMetalClusters: API.OperationMethod<
  DeleteProjectsLocationsBareMetalClustersRequest,
  DeleteProjectsLocationsBareMetalClustersResponse,
  DeleteProjectsLocationsBareMetalClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBareMetalClustersRequest,
  output: DeleteProjectsLocationsBareMetalClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBareMetalClustersRequest {
  /** Optional. If true, return BareMetal Cluster including the one that only exists in RMS. */
  allowMissing?: boolean;
  /** Required. Name of the bare metal user cluster to get. Format: "projects/{project}/locations/{location}/bareMetalClusters/{bare_metal_cluster}" */
  name: string;
  /** View for bare metal user cluster. When `BASIC` is specified, only the cluster resource name and admin cluster membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details. */
  view?: "CLUSTER_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const GetProjectsLocationsBareMetalClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBareMetalClustersRequest>;

export type GetProjectsLocationsBareMetalClustersResponse = BareMetalCluster;
export const GetProjectsLocationsBareMetalClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ BareMetalCluster;

export type GetProjectsLocationsBareMetalClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single bare metal Cluster. */
export const getProjectsLocationsBareMetalClusters: API.OperationMethod<
  GetProjectsLocationsBareMetalClustersRequest,
  GetProjectsLocationsBareMetalClustersResponse,
  GetProjectsLocationsBareMetalClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBareMetalClustersRequest,
  output: GetProjectsLocationsBareMetalClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsBareMetalClustersRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsBareMetalClustersRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsBareMetalClustersRequest>;

export type SetIamPolicyProjectsLocationsBareMetalClustersResponse = Policy;
export const SetIamPolicyProjectsLocationsBareMetalClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsBareMetalClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsBareMetalClusters: API.OperationMethod<
  SetIamPolicyProjectsLocationsBareMetalClustersRequest,
  SetIamPolicyProjectsLocationsBareMetalClustersResponse,
  SetIamPolicyProjectsLocationsBareMetalClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsBareMetalClustersRequest,
  output: SetIamPolicyProjectsLocationsBareMetalClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsBareMetalClustersRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsBareMetalClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsBareMetalClustersRequest>;

export type GetIamPolicyProjectsLocationsBareMetalClustersResponse = Policy;
export const GetIamPolicyProjectsLocationsBareMetalClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsBareMetalClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsBareMetalClusters: API.OperationMethod<
  GetIamPolicyProjectsLocationsBareMetalClustersRequest,
  GetIamPolicyProjectsLocationsBareMetalClustersResponse,
  GetIamPolicyProjectsLocationsBareMetalClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsBareMetalClustersRequest,
  output: GetIamPolicyProjectsLocationsBareMetalClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsBareMetalClustersRequest {
  /** A resource filtering expression following https://google.aip.dev/160. When non-empty, only resource's whose attributes field matches the filter are returned. */
  filter?: string;
  /** View for bare metal Clusters. When `BASIC` is specified, only the cluster resource name and admin cluster membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details. */
  view?: "CLUSTER_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  /** Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. If true, return list of BareMetal Clusters including the ones that only exists in RMS. */
  allowMissing?: boolean;
  /** Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project}/locations/{location}" */
  parent: string;
}

export const ListProjectsLocationsBareMetalClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/bareMetalClusters" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBareMetalClustersRequest>;

export type ListProjectsLocationsBareMetalClustersResponse =
  ListBareMetalClustersResponse;
export const ListProjectsLocationsBareMetalClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBareMetalClustersResponse;

export type ListProjectsLocationsBareMetalClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists bare metal clusters in a given project and location. */
export const listProjectsLocationsBareMetalClusters: API.PaginatedOperationMethod<
  ListProjectsLocationsBareMetalClustersRequest,
  ListProjectsLocationsBareMetalClustersResponse,
  ListProjectsLocationsBareMetalClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBareMetalClustersRequest,
  output: ListProjectsLocationsBareMetalClustersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsBareMetalClustersRequest {
  /** Required. User provided identifier that is used as part of the resource name; must conform to RFC-1034 and additionally restrict to lower-cased letters. This comes out roughly to: /^a-z+[a-z0-9]$/ */
  bareMetalClusterId?: string;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
  /** Optional. If set to true, CLM will force CCFE to persist the cluster resource in RMS when the creation fails during standalone preflight checks. In that case the subsequent create call will fail with "cluster already exists" error and hence a update cluster is required to fix the cluster. */
  allowPreflightFailure?: boolean;
  /** Required. The parent of the project and location where the cluster is created in. Format: "projects/{project}/locations/{location}" */
  parent: string;
  /** Request body */
  body?: BareMetalCluster;
}

export const CreateProjectsLocationsBareMetalClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bareMetalClusterId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("bareMetalClusterId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowPreflightFailure: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowPreflightFailure"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BareMetalCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/bareMetalClusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsBareMetalClustersRequest>;

export type CreateProjectsLocationsBareMetalClustersResponse = Operation;
export const CreateProjectsLocationsBareMetalClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsBareMetalClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new bare metal cluster in a given project and location. */
export const createProjectsLocationsBareMetalClusters: API.OperationMethod<
  CreateProjectsLocationsBareMetalClustersRequest,
  CreateProjectsLocationsBareMetalClustersResponse,
  CreateProjectsLocationsBareMetalClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBareMetalClustersRequest,
  output: CreateProjectsLocationsBareMetalClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnenrollProjectsLocationsBareMetalClustersRequest {
  /** The current etag of the bare metal Cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** If set to true, and the bare metal cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO. */
  allowMissing?: boolean;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
  /** This is required if the cluster has any associated node pools. When set, any child node pools will also be unenrolled. */
  force?: boolean;
  /** Required. Name of the bare metal user cluster to be unenrolled. Format: "projects/{project}/locations/{location}/bareMetalClusters/{cluster}" */
  name: string;
}

export const UnenrollProjectsLocationsBareMetalClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}:unenroll" }),
    svc,
  ) as unknown as Schema.Schema<UnenrollProjectsLocationsBareMetalClustersRequest>;

export type UnenrollProjectsLocationsBareMetalClustersResponse = Operation;
export const UnenrollProjectsLocationsBareMetalClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UnenrollProjectsLocationsBareMetalClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unenrolls an existing bare metal user cluster and its node pools from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters and node pools will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients. */
export const unenrollProjectsLocationsBareMetalClusters: API.OperationMethod<
  UnenrollProjectsLocationsBareMetalClustersRequest,
  UnenrollProjectsLocationsBareMetalClustersResponse,
  UnenrollProjectsLocationsBareMetalClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnenrollProjectsLocationsBareMetalClustersRequest,
  output: UnenrollProjectsLocationsBareMetalClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryVersionConfigProjectsLocationsBareMetalClustersRequest {
  /** Required. The parent of the project and location to query for version config. Format: "projects/{project}/locations/{location}" */
  parent: string;
  /** The admin cluster membership. This is the full resource name of the admin cluster's fleet membership. Format: "projects/{project}/locations/{location}/memberships/{membership}" */
  "createConfig.adminClusterMembership"?: string;
  /** The user cluster resource name. This is the full resource name of the user cluster resource. Format: "projects/{project}/locations/{location}/bareMetalClusters/{bare_metal_cluster}" */
  "upgradeConfig.clusterName"?: string;
  /** The admin cluster resource name. This is the full resource name of the admin cluster resource. Format: "projects/{project}/locations/{location}/bareMetalAdminClusters/{bare_metal_admin_cluster}" */
  "createConfig.adminClusterName"?: string;
}

export const QueryVersionConfigProjectsLocationsBareMetalClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    "createConfig.adminClusterMembership": Schema.optional(Schema.String).pipe(
      T.HttpQuery("createConfig.adminClusterMembership"),
    ),
    "upgradeConfig.clusterName": Schema.optional(Schema.String).pipe(
      T.HttpQuery("upgradeConfig.clusterName"),
    ),
    "createConfig.adminClusterName": Schema.optional(Schema.String).pipe(
      T.HttpQuery("createConfig.adminClusterName"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/bareMetalClusters:queryVersionConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<QueryVersionConfigProjectsLocationsBareMetalClustersRequest>;

export type QueryVersionConfigProjectsLocationsBareMetalClustersResponse =
  QueryBareMetalVersionConfigResponse;
export const QueryVersionConfigProjectsLocationsBareMetalClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueryBareMetalVersionConfigResponse;

export type QueryVersionConfigProjectsLocationsBareMetalClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Queries the bare metal user cluster version config. */
export const queryVersionConfigProjectsLocationsBareMetalClusters: API.OperationMethod<
  QueryVersionConfigProjectsLocationsBareMetalClustersRequest,
  QueryVersionConfigProjectsLocationsBareMetalClustersResponse,
  QueryVersionConfigProjectsLocationsBareMetalClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: QueryVersionConfigProjectsLocationsBareMetalClustersRequest,
  output: QueryVersionConfigProjectsLocationsBareMetalClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface EnrollProjectsLocationsBareMetalClustersRequest {
  /** Required. The parent of the project and location where the cluster is enrolled in. Format: "projects/{project}/locations/{location}" */
  parent: string;
  /** Request body */
  body?: EnrollBareMetalClusterRequest;
}

export const EnrollProjectsLocationsBareMetalClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EnrollBareMetalClusterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/bareMetalClusters:enroll",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<EnrollProjectsLocationsBareMetalClustersRequest>;

export type EnrollProjectsLocationsBareMetalClustersResponse = Operation;
export const EnrollProjectsLocationsBareMetalClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type EnrollProjectsLocationsBareMetalClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enrolls an existing bare metal user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API. */
export const enrollProjectsLocationsBareMetalClusters: API.OperationMethod<
  EnrollProjectsLocationsBareMetalClustersRequest,
  EnrollProjectsLocationsBareMetalClustersResponse,
  EnrollProjectsLocationsBareMetalClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnrollProjectsLocationsBareMetalClustersRequest,
  output: EnrollProjectsLocationsBareMetalClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBareMetalClustersOperationsRequest {
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsBareMetalClustersOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBareMetalClustersOperationsRequest>;

export type ListProjectsLocationsBareMetalClustersOperationsResponse =
  ListOperationsResponse;
export const ListProjectsLocationsBareMetalClustersOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsBareMetalClustersOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsBareMetalClustersOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsBareMetalClustersOperationsRequest,
  ListProjectsLocationsBareMetalClustersOperationsResponse,
  ListProjectsLocationsBareMetalClustersOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBareMetalClustersOperationsRequest,
  output: ListProjectsLocationsBareMetalClustersOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsBareMetalClustersOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsBareMetalClustersOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBareMetalClustersOperationsRequest>;

export type GetProjectsLocationsBareMetalClustersOperationsResponse = Operation;
export const GetProjectsLocationsBareMetalClustersOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsBareMetalClustersOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsBareMetalClustersOperations: API.OperationMethod<
  GetProjectsLocationsBareMetalClustersOperationsRequest,
  GetProjectsLocationsBareMetalClustersOperationsResponse,
  GetProjectsLocationsBareMetalClustersOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBareMetalClustersOperationsRequest,
  output: GetProjectsLocationsBareMetalClustersOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface EnrollProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest {
  /** Required. The parent resource where this node pool will be created. projects/{project}/locations/{location}/bareMetalClusters/{cluster} */
  parent: string;
  /** Request body */
  body?: EnrollBareMetalNodePoolRequest;
}

export const EnrollProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EnrollBareMetalNodePoolRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/bareMetalNodePools:enroll",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<EnrollProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest>;

export type EnrollProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  Operation;
export const EnrollProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type EnrollProjectsLocationsBareMetalClustersBareMetalNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enrolls an existing bare metal node pool to the Anthos On-Prem API within a given project and location. Through enrollment, an existing node pool will become Anthos On-Prem API managed. The corresponding GCP resources will be created. */
export const enrollProjectsLocationsBareMetalClustersBareMetalNodePools: API.OperationMethod<
  EnrollProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  EnrollProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  EnrollProjectsLocationsBareMetalClustersBareMetalNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnrollProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  output: EnrollProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest {
  /** If set, only validate the request, but do not actually create the node pool. */
  validateOnly?: boolean;
  /** Required. The parent resource where this node pool will be created. projects/{project}/locations/{location}/bareMetalClusters/{cluster} */
  parent: string;
  /** The ID to use for the node pool, which will become the final component of the node pool's resource name. This value must be up to 63 characters, and valid characters are /a-z-/. The value must not be permitted to be a UUID (or UUID-like: anything matching /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i). */
  bareMetalNodePoolId?: string;
  /** Request body */
  body?: BareMetalNodePool;
}

export const CreateProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    bareMetalNodePoolId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("bareMetalNodePoolId"),
    ),
    body: Schema.optional(BareMetalNodePool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/bareMetalNodePools",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest>;

export type CreateProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  Operation;
export const CreateProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsBareMetalClustersBareMetalNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new bare metal node pool in a given project, location and Bare Metal cluster. */
export const createProjectsLocationsBareMetalClustersBareMetalNodePools: API.OperationMethod<
  CreateProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  CreateProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  CreateProjectsLocationsBareMetalClustersBareMetalNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  output: CreateProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnenrollProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest {
  /** If set to true, and the bare metal node pool is not found, the request will succeed but no action will be taken on the server and return a completed LRO. */
  allowMissing?: boolean;
  /** If set, only validate the request, but do not actually unenroll the node pool. */
  validateOnly?: boolean;
  /** Required. The name of the node pool to unenroll. Format: projects/{project}/locations/{location}/bareMetalClusters/{cluster}/bareMetalNodePools/{nodepool} */
  name: string;
  /** The current etag of the bare metal node pool. If an etag is provided and does not match the current etag of node pool, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const UnenrollProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}:unenroll" }),
    svc,
  ) as unknown as Schema.Schema<UnenrollProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest>;

export type UnenrollProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  Operation;
export const UnenrollProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UnenrollProjectsLocationsBareMetalClustersBareMetalNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unenrolls a bare metal node pool from Anthos On-Prem API. */
export const unenrollProjectsLocationsBareMetalClustersBareMetalNodePools: API.OperationMethod<
  UnenrollProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  UnenrollProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  UnenrollProjectsLocationsBareMetalClustersBareMetalNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnenrollProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  output: UnenrollProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest {
  /** View for bare metal node pools. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details. */
  view?: "NODE_POOL_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  /** The maximum number of node pools to return. The service may return fewer than this value. If unspecified, at most 50 node pools will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent, which owns this collection of node pools. Format: projects/{project}/locations/{location}/bareMetalClusters/{bareMetalCluster} */
  parent: string;
  /** A page token, received from a previous `ListBareMetalNodePools` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBareMetalNodePools` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/bareMetalNodePools" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest>;

export type ListProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  ListBareMetalNodePoolsResponse;
export const ListProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBareMetalNodePoolsResponse;

export type ListProjectsLocationsBareMetalClustersBareMetalNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists bare metal node pools in a given project, location and bare metal cluster. */
export const listProjectsLocationsBareMetalClustersBareMetalNodePools: API.PaginatedOperationMethod<
  ListProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  ListProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  ListProjectsLocationsBareMetalClustersBareMetalNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  output: ListProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest>;

export type GetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  Policy;
export const GetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePools: API.OperationMethod<
  GetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  GetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  GetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  output:
    GetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest {
  /** Required. The name of the node pool to delete. Format: projects/{project}/locations/{location}/bareMetalClusters/{cluster}/bareMetalNodePools/{nodepool} */
  name: string;
  /** If set to true, and the bare metal node pool is not found, the request will succeed but no action will be taken on the server and return a completed LRO. */
  allowMissing?: boolean;
  /** If set, only validate the request, but do not actually delete the node pool. */
  validateOnly?: boolean;
  /** The current etag of the BareMetalNodePool. If an etag is provided and does not match the current etag of the node pool, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** If set to true, the deletion of a bare metal node pool resource will succeed even if errors occur during deletion. This parameter can be used when you want to delete GCP's node pool resource and you've already deleted the on-prem admin cluster that hosted your node pool. WARNING: Using this parameter when your user cluster still exists may result in a deleted GCP node pool but an existing on-prem node pool. */
  ignoreErrors?: boolean;
}

export const DeleteProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    ignoreErrors: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreErrors"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest>;

export type DeleteProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  Operation;
export const DeleteProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsBareMetalClustersBareMetalNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single bare metal node pool. */
export const deleteProjectsLocationsBareMetalClustersBareMetalNodePools: API.OperationMethod<
  DeleteProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  DeleteProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  DeleteProjectsLocationsBareMetalClustersBareMetalNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  output: DeleteProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest {
  /** Required. The name of the node pool to retrieve. projects/{project}/locations/{location}/bareMetalClusters/{cluster}/bareMetalNodePools/{nodepool} */
  name: string;
  /** View for bare metal node pool. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details. */
  view?: "NODE_POOL_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const GetProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest>;

export type GetProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  BareMetalNodePool;
export const GetProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BareMetalNodePool;

export type GetProjectsLocationsBareMetalClustersBareMetalNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single bare metal node pool. */
export const getProjectsLocationsBareMetalClustersBareMetalNodePools: API.OperationMethod<
  GetProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  GetProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  GetProjectsLocationsBareMetalClustersBareMetalNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  output: GetProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest>;

export type SetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  Policy;
export const SetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePools: API.OperationMethod<
  SetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  SetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  SetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    SetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  output:
    SetIamPolicyProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest>;

export type TestIamPermissionsProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsBareMetalClustersBareMetalNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsBareMetalClustersBareMetalNodePools: API.OperationMethod<
  TestIamPermissionsProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  TestIamPermissionsProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  TestIamPermissionsProjectsLocationsBareMetalClustersBareMetalNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    TestIamPermissionsProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  output:
    TestIamPermissionsProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest {
  /** Immutable. The bare metal node pool resource name. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the BareMetalNodePool resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the BareMetalNodePool message will be updated. Empty fields will be ignored unless a field mask is used. */
  updateMask?: string;
  /** If set to true, and the bare metal node pool is not found, the request will create a new bare metal node pool with the provided configuration. The user must have both create and update permission to call Update with allow_missing set to true. */
  allowMissing?: boolean;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
  /** Request body */
  body?: BareMetalNodePool;
}

export const PatchProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(BareMetalNodePool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest>;

export type PatchProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  Operation;
export const PatchProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsBareMetalClustersBareMetalNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single bare metal node pool. */
export const patchProjectsLocationsBareMetalClustersBareMetalNodePools: API.OperationMethod<
  PatchProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  PatchProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  PatchProjectsLocationsBareMetalClustersBareMetalNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBareMetalClustersBareMetalNodePoolsRequest,
  output: PatchProjectsLocationsBareMetalClustersBareMetalNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsRequest>;

export type ListProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsResponse =
  ListOperationsResponse;
export const ListProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsBareMetalClustersBareMetalNodePoolsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsRequest,
  ListProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsResponse,
  ListProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    ListProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsRequest,
  output:
    ListProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsRequest>;

export type GetProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsResponse =
  Operation;
export const GetProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsBareMetalClustersBareMetalNodePoolsOperations: API.OperationMethod<
  GetProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsRequest,
  GetProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsResponse,
  GetProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GetProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsRequest,
  output:
    GetProjectsLocationsBareMetalClustersBareMetalNodePoolsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface PatchProjectsLocationsVmwareClustersRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the VMwareCluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the VmwareCluster message will be updated. Empty fields will be ignored unless a field mask is used. */
  updateMask?: string;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
  skipValidations?: string[];
  /** Immutable. The VMware user cluster resource name. */
  name: string;
  /** Request body */
  body?: VmwareCluster;
}

export const PatchProjectsLocationsVmwareClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    skipValidations: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("skipValidations"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(VmwareCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsVmwareClustersRequest>;

export type PatchProjectsLocationsVmwareClustersResponse = Operation;
export const PatchProjectsLocationsVmwareClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsVmwareClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single VMware cluster. */
export const patchProjectsLocationsVmwareClusters: API.OperationMethod<
  PatchProjectsLocationsVmwareClustersRequest,
  PatchProjectsLocationsVmwareClustersResponse,
  PatchProjectsLocationsVmwareClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsVmwareClustersRequest,
  output: PatchProjectsLocationsVmwareClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsVmwareClustersRequest {
  /** Required. Name of the VMware user cluster to be deleted. Format: "projects/{project}/locations/{location}/vmwareClusters/{vmware_cluster}" */
  name: string;
  /** The current etag of the VMware cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** If set to true, the deletion of a VMware user cluster resource will succeed even if errors occur during deletion. This parameter can be used when you want to delete GCP's cluster resource and the on-prem admin cluster that hosts your user cluster is disconnected / unreachable or deleted. WARNING: Using this parameter when your user cluster still exists may result in a deleted GCP user cluster but an existing on-prem user cluster. */
  ignoreErrors?: boolean;
  /** If set to true, any node pools from the cluster will also be deleted. */
  force?: boolean;
  /** If set to true, and the VMware cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO. */
  allowMissing?: boolean;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsVmwareClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    ignoreErrors: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreErrors"),
    ),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsVmwareClustersRequest>;

export type DeleteProjectsLocationsVmwareClustersResponse = Operation;
export const DeleteProjectsLocationsVmwareClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsVmwareClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single VMware Cluster. */
export const deleteProjectsLocationsVmwareClusters: API.OperationMethod<
  DeleteProjectsLocationsVmwareClustersRequest,
  DeleteProjectsLocationsVmwareClustersResponse,
  DeleteProjectsLocationsVmwareClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsVmwareClustersRequest,
  output: DeleteProjectsLocationsVmwareClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsVmwareClustersRequest {
  /** Optional. If true, return Vmware Cluster including the one that only exists in RMS. */
  allowMissing?: boolean;
  /** Required. Name of the VMware user cluster to be returned. Format: "projects/{project}/locations/{location}/vmwareClusters/{vmware_cluster}" */
  name: string;
  /** View for VMware user cluster. When `BASIC` is specified, only the cluster resource name and admin cluster membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details. */
  view?: "CLUSTER_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const GetProjectsLocationsVmwareClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsVmwareClustersRequest>;

export type GetProjectsLocationsVmwareClustersResponse = VmwareCluster;
export const GetProjectsLocationsVmwareClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ VmwareCluster;

export type GetProjectsLocationsVmwareClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single VMware Cluster. */
export const getProjectsLocationsVmwareClusters: API.OperationMethod<
  GetProjectsLocationsVmwareClustersRequest,
  GetProjectsLocationsVmwareClustersResponse,
  GetProjectsLocationsVmwareClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsVmwareClustersRequest,
  output: GetProjectsLocationsVmwareClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsVmwareClustersRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsVmwareClustersRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsVmwareClustersRequest>;

export type SetIamPolicyProjectsLocationsVmwareClustersResponse = Policy;
export const SetIamPolicyProjectsLocationsVmwareClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsVmwareClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsVmwareClusters: API.OperationMethod<
  SetIamPolicyProjectsLocationsVmwareClustersRequest,
  SetIamPolicyProjectsLocationsVmwareClustersResponse,
  SetIamPolicyProjectsLocationsVmwareClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsVmwareClustersRequest,
  output: SetIamPolicyProjectsLocationsVmwareClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsVmwareClustersRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsVmwareClustersRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsVmwareClustersRequest>;

export type TestIamPermissionsProjectsLocationsVmwareClustersResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsVmwareClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsVmwareClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsVmwareClusters: API.OperationMethod<
  TestIamPermissionsProjectsLocationsVmwareClustersRequest,
  TestIamPermissionsProjectsLocationsVmwareClustersResponse,
  TestIamPermissionsProjectsLocationsVmwareClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsVmwareClustersRequest,
  output: TestIamPermissionsProjectsLocationsVmwareClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsVmwareClustersRequest {
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. If true, return list of Vmware Clusters including the ones that only exists in RMS. */
  allowMissing?: boolean;
  /** A resource filtering expression following https://google.aip.dev/160. When non-empty, only resource's whose attributes field matches the filter are returned. */
  filter?: string;
  /** View for VMware clusters. When `BASIC` is specified, only the cluster resource name and admin cluster membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details. */
  view?: "CLUSTER_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  /** Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project}/locations/{location}" */
  parent: string;
}

export const ListProjectsLocationsVmwareClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/vmwareClusters" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsVmwareClustersRequest>;

export type ListProjectsLocationsVmwareClustersResponse =
  ListVmwareClustersResponse;
export const ListProjectsLocationsVmwareClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListVmwareClustersResponse;

export type ListProjectsLocationsVmwareClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists VMware Clusters in a given project and location. */
export const listProjectsLocationsVmwareClusters: API.PaginatedOperationMethod<
  ListProjectsLocationsVmwareClustersRequest,
  ListProjectsLocationsVmwareClustersResponse,
  ListProjectsLocationsVmwareClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsVmwareClustersRequest,
  output: ListProjectsLocationsVmwareClustersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsVmwareClustersRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsVmwareClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsVmwareClustersRequest>;

export type GetIamPolicyProjectsLocationsVmwareClustersResponse = Policy;
export const GetIamPolicyProjectsLocationsVmwareClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsVmwareClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsVmwareClusters: API.OperationMethod<
  GetIamPolicyProjectsLocationsVmwareClustersRequest,
  GetIamPolicyProjectsLocationsVmwareClustersResponse,
  GetIamPolicyProjectsLocationsVmwareClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsVmwareClustersRequest,
  output: GetIamPolicyProjectsLocationsVmwareClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface EnrollProjectsLocationsVmwareClustersRequest {
  /** Required. The parent of the project and location where the cluster is Enrolled in. Format: "projects/{project}/locations/{location}" */
  parent: string;
  /** Request body */
  body?: EnrollVmwareClusterRequest;
}

export const EnrollProjectsLocationsVmwareClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EnrollVmwareClusterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/vmwareClusters:enroll",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<EnrollProjectsLocationsVmwareClustersRequest>;

export type EnrollProjectsLocationsVmwareClustersResponse = Operation;
export const EnrollProjectsLocationsVmwareClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type EnrollProjectsLocationsVmwareClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enrolls an existing VMware user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API. */
export const enrollProjectsLocationsVmwareClusters: API.OperationMethod<
  EnrollProjectsLocationsVmwareClustersRequest,
  EnrollProjectsLocationsVmwareClustersResponse,
  EnrollProjectsLocationsVmwareClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnrollProjectsLocationsVmwareClustersRequest,
  output: EnrollProjectsLocationsVmwareClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryVersionConfigProjectsLocationsVmwareClustersRequest {
  /** The admin cluster resource name. This is the full resource name of the admin cluster resource. Format: "projects/{project}/locations/{location}/vmwareAdminClusters/{vmware_admin_cluster}" */
  "createConfig.adminClusterName"?: string;
  /** Required. The parent of the project and location to query for version config. Format: "projects/{project}/locations/{location}" */
  parent: string;
  /** The admin cluster membership. This is the full resource name of the admin cluster's fleet membership. Format: "projects/{project}/locations/{location}/memberships/{membership}" */
  "createConfig.adminClusterMembership"?: string;
  /** The user cluster resource name. This is the full resource name of the user cluster resource. Format: "projects/{project}/locations/{location}/vmwareClusters/{vmware_cluster}" */
  "upgradeConfig.clusterName"?: string;
}

export const QueryVersionConfigProjectsLocationsVmwareClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "createConfig.adminClusterName": Schema.optional(Schema.String).pipe(
      T.HttpQuery("createConfig.adminClusterName"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    "createConfig.adminClusterMembership": Schema.optional(Schema.String).pipe(
      T.HttpQuery("createConfig.adminClusterMembership"),
    ),
    "upgradeConfig.clusterName": Schema.optional(Schema.String).pipe(
      T.HttpQuery("upgradeConfig.clusterName"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/vmwareClusters:queryVersionConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<QueryVersionConfigProjectsLocationsVmwareClustersRequest>;

export type QueryVersionConfigProjectsLocationsVmwareClustersResponse =
  QueryVmwareVersionConfigResponse;
export const QueryVersionConfigProjectsLocationsVmwareClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueryVmwareVersionConfigResponse;

export type QueryVersionConfigProjectsLocationsVmwareClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Queries the VMware user cluster version config. */
export const queryVersionConfigProjectsLocationsVmwareClusters: API.OperationMethod<
  QueryVersionConfigProjectsLocationsVmwareClustersRequest,
  QueryVersionConfigProjectsLocationsVmwareClustersResponse,
  QueryVersionConfigProjectsLocationsVmwareClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: QueryVersionConfigProjectsLocationsVmwareClustersRequest,
  output: QueryVersionConfigProjectsLocationsVmwareClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnenrollProjectsLocationsVmwareClustersRequest {
  /** If set to true, and the VMware cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO. */
  allowMissing?: boolean;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
  /** This is required if the cluster has any associated node pools. When set, any child node pools will also be unenrolled. */
  force?: boolean;
  /** The current etag of the VMware Cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** Required. Name of the VMware user cluster to be unenrolled. Format: "projects/{project}/locations/{location}/vmwareClusters/{vmware_cluster}" */
  name: string;
}

export const UnenrollProjectsLocationsVmwareClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}:unenroll" }),
    svc,
  ) as unknown as Schema.Schema<UnenrollProjectsLocationsVmwareClustersRequest>;

export type UnenrollProjectsLocationsVmwareClustersResponse = Operation;
export const UnenrollProjectsLocationsVmwareClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UnenrollProjectsLocationsVmwareClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unenrolls an existing VMware user cluster and its node pools from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters and node pools will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or UI. */
export const unenrollProjectsLocationsVmwareClusters: API.OperationMethod<
  UnenrollProjectsLocationsVmwareClustersRequest,
  UnenrollProjectsLocationsVmwareClustersResponse,
  UnenrollProjectsLocationsVmwareClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnenrollProjectsLocationsVmwareClustersRequest,
  output: UnenrollProjectsLocationsVmwareClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsVmwareClustersRequest {
  /** Required. The parent of the project and location where this cluster is created in. Format: "projects/{project}/locations/{location}" */
  parent: string;
  /** User provided identifier that is used as part of the resource name; This value must be up to 40 characters and follow RFC-1123 (https://tools.ietf.org/html/rfc1123) format. */
  vmwareClusterId?: string;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
  /** Optional. If set to true, CLM will force CCFE to persist the cluster resource in RMS when the creation fails during standalone preflight checks. In that case the subsequent create call will fail with "cluster already exists" error and hence a update cluster is required to fix the cluster. */
  allowPreflightFailure?: boolean;
  /** Optional. List of validations to skip during cluster creation. */
  skipValidations?: string[];
  /** Request body */
  body?: VmwareCluster;
}

export const CreateProjectsLocationsVmwareClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    vmwareClusterId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("vmwareClusterId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowPreflightFailure: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowPreflightFailure"),
    ),
    skipValidations: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("skipValidations"),
    ),
    body: Schema.optional(VmwareCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/vmwareClusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsVmwareClustersRequest>;

export type CreateProjectsLocationsVmwareClustersResponse = Operation;
export const CreateProjectsLocationsVmwareClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsVmwareClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new VMware user cluster in a given project and location. */
export const createProjectsLocationsVmwareClusters: API.OperationMethod<
  CreateProjectsLocationsVmwareClustersRequest,
  CreateProjectsLocationsVmwareClustersResponse,
  CreateProjectsLocationsVmwareClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsVmwareClustersRequest,
  output: CreateProjectsLocationsVmwareClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsVmwareClustersOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsVmwareClustersOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsVmwareClustersOperationsRequest>;

export type GetProjectsLocationsVmwareClustersOperationsResponse = Operation;
export const GetProjectsLocationsVmwareClustersOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsVmwareClustersOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsVmwareClustersOperations: API.OperationMethod<
  GetProjectsLocationsVmwareClustersOperationsRequest,
  GetProjectsLocationsVmwareClustersOperationsResponse,
  GetProjectsLocationsVmwareClustersOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsVmwareClustersOperationsRequest,
  output: GetProjectsLocationsVmwareClustersOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsVmwareClustersOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsVmwareClustersOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsVmwareClustersOperationsRequest>;

export type ListProjectsLocationsVmwareClustersOperationsResponse =
  ListOperationsResponse;
export const ListProjectsLocationsVmwareClustersOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsVmwareClustersOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsVmwareClustersOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsVmwareClustersOperationsRequest,
  ListProjectsLocationsVmwareClustersOperationsResponse,
  ListProjectsLocationsVmwareClustersOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsVmwareClustersOperationsRequest,
  output: ListProjectsLocationsVmwareClustersOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsVmwareClustersVmwareNodePoolsRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the VMwareNodePool resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the VMwareNodePool message will be updated. Empty fields will be ignored unless a field mask is used. */
  updateMask?: string;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
  /** Immutable. The resource name of this node pool. */
  name: string;
  /** Request body */
  body?: VmwareNodePool;
}

export const PatchProjectsLocationsVmwareClustersVmwareNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(VmwareNodePool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsVmwareClustersVmwareNodePoolsRequest>;

export type PatchProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  Operation;
export const PatchProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsVmwareClustersVmwareNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single VMware node pool. */
export const patchProjectsLocationsVmwareClustersVmwareNodePools: API.OperationMethod<
  PatchProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  PatchProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  PatchProjectsLocationsVmwareClustersVmwareNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  output: PatchProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsVmwareClustersVmwareNodePoolsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsVmwareClustersVmwareNodePoolsRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsVmwareClustersVmwareNodePoolsRequest>;

export type TestIamPermissionsProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsVmwareClustersVmwareNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsVmwareClustersVmwareNodePools: API.OperationMethod<
  TestIamPermissionsProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  TestIamPermissionsProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  TestIamPermissionsProjectsLocationsVmwareClustersVmwareNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    TestIamPermissionsProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  output:
    TestIamPermissionsProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsVmwareClustersVmwareNodePoolsRequest {
  /** Required. The name of the node pool to delete. Format: projects/{project}/locations/{location}/vmwareClusters/{cluster}/vmwareNodePools/{nodepool} */
  name: string;
  /** If set to true, and the VMware node pool is not found, the request will succeed but no action will be taken on the server and return a completed LRO. */
  allowMissing?: boolean;
  /** If set, only validate the request, but do not actually delete the node pool. */
  validateOnly?: boolean;
  /** The current etag of the VmwareNodePool. If an etag is provided and does not match the current etag of the node pool, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** If set to true, the deletion of a VMware node pool resource will succeed even if errors occur during deletion. This parameter can be used when you want to delete GCP's node pool resource and you've already deleted the on-prem admin cluster that hosted your node pool. WARNING: Using this parameter when your user cluster still exists may result in a deleted GCP node pool but an existing on-prem node pool. */
  ignoreErrors?: boolean;
}

export const DeleteProjectsLocationsVmwareClustersVmwareNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    ignoreErrors: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreErrors"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsVmwareClustersVmwareNodePoolsRequest>;

export type DeleteProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  Operation;
export const DeleteProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsVmwareClustersVmwareNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single VMware node pool. */
export const deleteProjectsLocationsVmwareClustersVmwareNodePools: API.OperationMethod<
  DeleteProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  DeleteProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  DeleteProjectsLocationsVmwareClustersVmwareNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  output: DeleteProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsVmwareClustersVmwareNodePoolsRequest {
  /** Required. The name of the node pool to retrieve. projects/{project}/locations/{location}/vmwareClusters/{cluster}/vmwareNodePools/{nodepool} */
  name: string;
  /** View for VMware node pool. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details. */
  view?: "NODE_POOL_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const GetProjectsLocationsVmwareClustersVmwareNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsVmwareClustersVmwareNodePoolsRequest>;

export type GetProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  VmwareNodePool;
export const GetProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VmwareNodePool;

export type GetProjectsLocationsVmwareClustersVmwareNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single VMware node pool. */
export const getProjectsLocationsVmwareClustersVmwareNodePools: API.OperationMethod<
  GetProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  GetProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  GetProjectsLocationsVmwareClustersVmwareNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  output: GetProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsRequest>;

export type SetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  Policy;
export const SetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsVmwareClustersVmwareNodePools: API.OperationMethod<
  SetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  SetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  SetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  output: SetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsVmwareClustersVmwareNodePoolsRequest {
  /** Required. The parent, which owns this collection of node pools. Format: projects/{project}/locations/{location}/vmwareClusters/{vmwareCluster} */
  parent: string;
  /** A page token, received from a previous `ListVmwareNodePools` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListVmwareNodePools` must match the call that provided the page token. */
  pageToken?: string;
  /** View for VMware node pools. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details. */
  view?: "NODE_POOL_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  /** The maximum number of node pools to return. The service may return fewer than this value. If unspecified, at most 50 node pools will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsVmwareClustersVmwareNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/vmwareNodePools" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsVmwareClustersVmwareNodePoolsRequest>;

export type ListProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  ListVmwareNodePoolsResponse;
export const ListProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListVmwareNodePoolsResponse;

export type ListProjectsLocationsVmwareClustersVmwareNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists VMware node pools in a given project, location and VMWare cluster. */
export const listProjectsLocationsVmwareClustersVmwareNodePools: API.PaginatedOperationMethod<
  ListProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  ListProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  ListProjectsLocationsVmwareClustersVmwareNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  output: ListProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsRequest>;

export type GetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  Policy;
export const GetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsVmwareClustersVmwareNodePools: API.OperationMethod<
  GetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  GetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  GetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  output: GetIamPolicyProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface EnrollProjectsLocationsVmwareClustersVmwareNodePoolsRequest {
  /** Required. The parent resource where the node pool is enrolled in. */
  parent: string;
  /** Request body */
  body?: EnrollVmwareNodePoolRequest;
}

export const EnrollProjectsLocationsVmwareClustersVmwareNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EnrollVmwareNodePoolRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/vmwareNodePools:enroll",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<EnrollProjectsLocationsVmwareClustersVmwareNodePoolsRequest>;

export type EnrollProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  Operation;
export const EnrollProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type EnrollProjectsLocationsVmwareClustersVmwareNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enrolls a VMware node pool to Anthos On-Prem API */
export const enrollProjectsLocationsVmwareClustersVmwareNodePools: API.OperationMethod<
  EnrollProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  EnrollProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  EnrollProjectsLocationsVmwareClustersVmwareNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnrollProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  output: EnrollProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsVmwareClustersVmwareNodePoolsRequest {
  /** Required. The parent resource where this node pool will be created. projects/{project}/locations/{location}/vmwareClusters/{cluster} */
  parent: string;
  /** The ID to use for the node pool, which will become the final component of the node pool's resource name. This value must be up to 40 characters and follow RFC-1123 (https://tools.ietf.org/html/rfc1123) format. The value must not be permitted to be a UUID (or UUID-like: anything matching /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i). */
  vmwareNodePoolId?: string;
  /** If set, only validate the request, but do not actually create the node pool. */
  validateOnly?: boolean;
  /** Request body */
  body?: VmwareNodePool;
}

export const CreateProjectsLocationsVmwareClustersVmwareNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    vmwareNodePoolId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("vmwareNodePoolId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(VmwareNodePool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/vmwareNodePools",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsVmwareClustersVmwareNodePoolsRequest>;

export type CreateProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  Operation;
export const CreateProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsVmwareClustersVmwareNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new VMware node pool in a given project, location and VMWare cluster. */
export const createProjectsLocationsVmwareClustersVmwareNodePools: API.OperationMethod<
  CreateProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  CreateProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  CreateProjectsLocationsVmwareClustersVmwareNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  output: CreateProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnenrollProjectsLocationsVmwareClustersVmwareNodePoolsRequest {
  /** If set to true, and the VMware node pool is not found, the request will succeed but no action will be taken on the server and return a completed LRO. */
  allowMissing?: boolean;
  /** If set, only validate the request, but do not actually unenroll the node pool. */
  validateOnly?: boolean;
  /** Required. The name of the node pool to unenroll. Format: projects/{project}/locations/{location}/vmwareClusters/{cluster}/vmwareNodePools/{nodepool} */
  name: string;
  /** The current etag of the VMware node pool. If an etag is provided and does not match the current etag of node pool, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const UnenrollProjectsLocationsVmwareClustersVmwareNodePoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}:unenroll" }),
    svc,
  ) as unknown as Schema.Schema<UnenrollProjectsLocationsVmwareClustersVmwareNodePoolsRequest>;

export type UnenrollProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  Operation;
export const UnenrollProjectsLocationsVmwareClustersVmwareNodePoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UnenrollProjectsLocationsVmwareClustersVmwareNodePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unenrolls a VMware node pool to Anthos On-Prem API */
export const unenrollProjectsLocationsVmwareClustersVmwareNodePools: API.OperationMethod<
  UnenrollProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  UnenrollProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  UnenrollProjectsLocationsVmwareClustersVmwareNodePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnenrollProjectsLocationsVmwareClustersVmwareNodePoolsRequest,
  output: UnenrollProjectsLocationsVmwareClustersVmwareNodePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsVmwareClustersVmwareNodePoolsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListProjectsLocationsVmwareClustersVmwareNodePoolsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsVmwareClustersVmwareNodePoolsOperationsRequest>;

export type ListProjectsLocationsVmwareClustersVmwareNodePoolsOperationsResponse =
  ListOperationsResponse;
export const ListProjectsLocationsVmwareClustersVmwareNodePoolsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsVmwareClustersVmwareNodePoolsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsVmwareClustersVmwareNodePoolsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsVmwareClustersVmwareNodePoolsOperationsRequest,
  ListProjectsLocationsVmwareClustersVmwareNodePoolsOperationsResponse,
  ListProjectsLocationsVmwareClustersVmwareNodePoolsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsVmwareClustersVmwareNodePoolsOperationsRequest,
  output: ListProjectsLocationsVmwareClustersVmwareNodePoolsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsVmwareClustersVmwareNodePoolsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsVmwareClustersVmwareNodePoolsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsVmwareClustersVmwareNodePoolsOperationsRequest>;

export type GetProjectsLocationsVmwareClustersVmwareNodePoolsOperationsResponse =
  Operation;
export const GetProjectsLocationsVmwareClustersVmwareNodePoolsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsVmwareClustersVmwareNodePoolsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsVmwareClustersVmwareNodePoolsOperations: API.OperationMethod<
  GetProjectsLocationsVmwareClustersVmwareNodePoolsOperationsRequest,
  GetProjectsLocationsVmwareClustersVmwareNodePoolsOperationsResponse,
  GetProjectsLocationsVmwareClustersVmwareNodePoolsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsVmwareClustersVmwareNodePoolsOperationsRequest,
  output: GetProjectsLocationsVmwareClustersVmwareNodePoolsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsVmwareAdminClustersRequest {
  /** Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project}/locations/{location}" */
  parent: string;
  /** View for VMware admin clusters. When `BASIC` is specified, only the admin cluster resource name and membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete admin cluster configuration details. */
  view?: "CLUSTER_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  /** Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. If true, return list of Vmware Admin Clusters including the ones that only exists in RMS. */
  allowMissing?: boolean;
}

export const ListProjectsLocationsVmwareAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/vmwareAdminClusters" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsVmwareAdminClustersRequest>;

export type ListProjectsLocationsVmwareAdminClustersResponse =
  ListVmwareAdminClustersResponse;
export const ListProjectsLocationsVmwareAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListVmwareAdminClustersResponse;

export type ListProjectsLocationsVmwareAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists VMware admin clusters in a given project and location. */
export const listProjectsLocationsVmwareAdminClusters: API.PaginatedOperationMethod<
  ListProjectsLocationsVmwareAdminClustersRequest,
  ListProjectsLocationsVmwareAdminClustersResponse,
  ListProjectsLocationsVmwareAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsVmwareAdminClustersRequest,
  output: ListProjectsLocationsVmwareAdminClustersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsVmwareAdminClustersRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsVmwareAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsVmwareAdminClustersRequest>;

export type GetIamPolicyProjectsLocationsVmwareAdminClustersResponse = Policy;
export const GetIamPolicyProjectsLocationsVmwareAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsVmwareAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsVmwareAdminClusters: API.OperationMethod<
  GetIamPolicyProjectsLocationsVmwareAdminClustersRequest,
  GetIamPolicyProjectsLocationsVmwareAdminClustersResponse,
  GetIamPolicyProjectsLocationsVmwareAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsVmwareAdminClustersRequest,
  output: GetIamPolicyProjectsLocationsVmwareAdminClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface EnrollProjectsLocationsVmwareAdminClustersRequest {
  /** Required. The parent of the project and location where the cluster is enrolled in. Format: "projects/{project}/locations/{location}" */
  parent: string;
  /** Request body */
  body?: EnrollVmwareAdminClusterRequest;
}

export const EnrollProjectsLocationsVmwareAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EnrollVmwareAdminClusterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/vmwareAdminClusters:enroll",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<EnrollProjectsLocationsVmwareAdminClustersRequest>;

export type EnrollProjectsLocationsVmwareAdminClustersResponse = Operation;
export const EnrollProjectsLocationsVmwareAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type EnrollProjectsLocationsVmwareAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API. */
export const enrollProjectsLocationsVmwareAdminClusters: API.OperationMethod<
  EnrollProjectsLocationsVmwareAdminClustersRequest,
  EnrollProjectsLocationsVmwareAdminClustersResponse,
  EnrollProjectsLocationsVmwareAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnrollProjectsLocationsVmwareAdminClustersRequest,
  output: EnrollProjectsLocationsVmwareAdminClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsVmwareAdminClustersRequest {
  /** Required. User provided identifier that is used as part of the resource name; must conform to RFC-1034 and additionally restrict to lower-cased letters. This comes out roughly to: /^a-z+[a-z0-9]$/ */
  vmwareAdminClusterId?: string;
  /** Required. The parent of the project and location where the cluster is created in. Format: "projects/{project}/locations/{location}" */
  parent: string;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
  /** Optional. If set to true, CLM will force CCFE to persist the cluster resource in RMS when the creation fails during standalone preflight checks. In that case the subsequent create call will fail with "cluster already exists" error and hence a update cluster is required to fix the cluster. */
  allowPreflightFailure?: boolean;
  /** Optional. If set, skip the specified validations. */
  skipValidations?: string[];
  /** Request body */
  body?: VmwareAdminCluster;
}

export const CreateProjectsLocationsVmwareAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmwareAdminClusterId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("vmwareAdminClusterId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowPreflightFailure: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowPreflightFailure"),
    ),
    skipValidations: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("skipValidations"),
    ),
    body: Schema.optional(VmwareAdminCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/vmwareAdminClusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsVmwareAdminClustersRequest>;

export type CreateProjectsLocationsVmwareAdminClustersResponse = Operation;
export const CreateProjectsLocationsVmwareAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsVmwareAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new VMware admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work. */
export const createProjectsLocationsVmwareAdminClusters: API.OperationMethod<
  CreateProjectsLocationsVmwareAdminClustersRequest,
  CreateProjectsLocationsVmwareAdminClustersResponse,
  CreateProjectsLocationsVmwareAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsVmwareAdminClustersRequest,
  output: CreateProjectsLocationsVmwareAdminClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnenrollProjectsLocationsVmwareAdminClustersRequest {
  /** If set to true, and the VMware admin cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO. */
  allowMissing?: boolean;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
  /** Optional. If set to true, the unenrollment of a vmware admin cluster resource will succeed even if errors occur during unenrollment. This parameter can be used when you want to unenroll admin cluster resource and the on-prem admin cluster is disconnected / unreachable. WARNING: Using this parameter when your admin cluster still exists may result in a deleted GCP admin cluster but existing resourcelink in on-prem admin cluster and membership. */
  ignoreErrors?: boolean;
  /** The current etag of the VMware admin cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** Required. Name of the VMware admin cluster to be unenrolled. Format: "projects/{project}/locations/{location}/vmwareAdminClusters/{cluster}" */
  name: string;
}

export const UnenrollProjectsLocationsVmwareAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    ignoreErrors: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreErrors"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}:unenroll" }),
    svc,
  ) as unknown as Schema.Schema<UnenrollProjectsLocationsVmwareAdminClustersRequest>;

export type UnenrollProjectsLocationsVmwareAdminClustersResponse = Operation;
export const UnenrollProjectsLocationsVmwareAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UnenrollProjectsLocationsVmwareAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unenrolls an existing VMware admin cluster from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients. */
export const unenrollProjectsLocationsVmwareAdminClusters: API.OperationMethod<
  UnenrollProjectsLocationsVmwareAdminClustersRequest,
  UnenrollProjectsLocationsVmwareAdminClustersResponse,
  UnenrollProjectsLocationsVmwareAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnenrollProjectsLocationsVmwareAdminClustersRequest,
  output: UnenrollProjectsLocationsVmwareAdminClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsVmwareAdminClustersRequest {
  /** Immutable. The VMware admin cluster resource name. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the VMwareAdminCluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the VmwareAdminCluster message will be updated. Empty fields will be ignored unless a field mask is used. */
  updateMask?: string;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
  /** Optional. If set, the server-side preflight checks will be skipped. */
  skipValidations?: string[];
  /** Request body */
  body?: VmwareAdminCluster;
}

export const PatchProjectsLocationsVmwareAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    skipValidations: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("skipValidations"),
    ),
    body: Schema.optional(VmwareAdminCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsVmwareAdminClustersRequest>;

export type PatchProjectsLocationsVmwareAdminClustersResponse = Operation;
export const PatchProjectsLocationsVmwareAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsVmwareAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single VMware admin cluster. */
export const patchProjectsLocationsVmwareAdminClusters: API.OperationMethod<
  PatchProjectsLocationsVmwareAdminClustersRequest,
  PatchProjectsLocationsVmwareAdminClustersResponse,
  PatchProjectsLocationsVmwareAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsVmwareAdminClustersRequest,
  output: PatchProjectsLocationsVmwareAdminClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsVmwareAdminClustersRequest {
  /** Required. Name of the VMware admin cluster to be returned. Format: "projects/{project}/locations/{location}/vmwareAdminClusters/{vmware_admin_cluster}" */
  name: string;
  /** View for VMware admin cluster. When `BASIC` is specified, only the cluster resource name and membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details. */
  view?: "CLUSTER_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  /** Optional. If true, return Vmware Admin Cluster including the one that only exists in RMS. */
  allowMissing?: boolean;
}

export const GetProjectsLocationsVmwareAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsVmwareAdminClustersRequest>;

export type GetProjectsLocationsVmwareAdminClustersResponse =
  VmwareAdminCluster;
export const GetProjectsLocationsVmwareAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ VmwareAdminCluster;

export type GetProjectsLocationsVmwareAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single VMware admin cluster. */
export const getProjectsLocationsVmwareAdminClusters: API.OperationMethod<
  GetProjectsLocationsVmwareAdminClustersRequest,
  GetProjectsLocationsVmwareAdminClustersResponse,
  GetProjectsLocationsVmwareAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsVmwareAdminClustersRequest,
  output: GetProjectsLocationsVmwareAdminClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsVmwareAdminClustersRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsVmwareAdminClustersRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsVmwareAdminClustersRequest>;

export type SetIamPolicyProjectsLocationsVmwareAdminClustersResponse = Policy;
export const SetIamPolicyProjectsLocationsVmwareAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsVmwareAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsVmwareAdminClusters: API.OperationMethod<
  SetIamPolicyProjectsLocationsVmwareAdminClustersRequest,
  SetIamPolicyProjectsLocationsVmwareAdminClustersResponse,
  SetIamPolicyProjectsLocationsVmwareAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsVmwareAdminClustersRequest,
  output: SetIamPolicyProjectsLocationsVmwareAdminClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsVmwareAdminClustersRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsVmwareAdminClustersRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsVmwareAdminClustersRequest>;

export type TestIamPermissionsProjectsLocationsVmwareAdminClustersResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsVmwareAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsVmwareAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsVmwareAdminClusters: API.OperationMethod<
  TestIamPermissionsProjectsLocationsVmwareAdminClustersRequest,
  TestIamPermissionsProjectsLocationsVmwareAdminClustersResponse,
  TestIamPermissionsProjectsLocationsVmwareAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsVmwareAdminClustersRequest,
  output: TestIamPermissionsProjectsLocationsVmwareAdminClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsVmwareAdminClustersOperationsRequest {
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsVmwareAdminClustersOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsVmwareAdminClustersOperationsRequest>;

export type ListProjectsLocationsVmwareAdminClustersOperationsResponse =
  ListOperationsResponse;
export const ListProjectsLocationsVmwareAdminClustersOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsVmwareAdminClustersOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsVmwareAdminClustersOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsVmwareAdminClustersOperationsRequest,
  ListProjectsLocationsVmwareAdminClustersOperationsResponse,
  ListProjectsLocationsVmwareAdminClustersOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsVmwareAdminClustersOperationsRequest,
  output: ListProjectsLocationsVmwareAdminClustersOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsVmwareAdminClustersOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsVmwareAdminClustersOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsVmwareAdminClustersOperationsRequest>;

export type GetProjectsLocationsVmwareAdminClustersOperationsResponse =
  Operation;
export const GetProjectsLocationsVmwareAdminClustersOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsVmwareAdminClustersOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsVmwareAdminClustersOperations: API.OperationMethod<
  GetProjectsLocationsVmwareAdminClustersOperationsRequest,
  GetProjectsLocationsVmwareAdminClustersOperationsResponse,
  GetProjectsLocationsVmwareAdminClustersOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsVmwareAdminClustersOperationsRequest,
  output: GetProjectsLocationsVmwareAdminClustersOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsBareMetalAdminClustersRequest {
  /** Required. Name of the bare metal admin cluster to get. Format: "projects/{project}/locations/{location}/bareMetalAdminClusters/{bare_metal_admin_cluster}" */
  name: string;
  /** View for bare metal admin cluster. When `BASIC` is specified, only the cluster resource name and membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details. */
  view?: "CLUSTER_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  /** Optional. If true, return BareMetal Admin Cluster including the one that only exists in RMS. */
  allowMissing?: boolean;
}

export const GetProjectsLocationsBareMetalAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBareMetalAdminClustersRequest>;

export type GetProjectsLocationsBareMetalAdminClustersResponse =
  BareMetalAdminCluster;
export const GetProjectsLocationsBareMetalAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ BareMetalAdminCluster;

export type GetProjectsLocationsBareMetalAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single bare metal admin cluster. */
export const getProjectsLocationsBareMetalAdminClusters: API.OperationMethod<
  GetProjectsLocationsBareMetalAdminClustersRequest,
  GetProjectsLocationsBareMetalAdminClustersResponse,
  GetProjectsLocationsBareMetalAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBareMetalAdminClustersRequest,
  output: GetProjectsLocationsBareMetalAdminClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsBareMetalAdminClustersRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsBareMetalAdminClustersRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsBareMetalAdminClustersRequest>;

export type SetIamPolicyProjectsLocationsBareMetalAdminClustersResponse =
  Policy;
export const SetIamPolicyProjectsLocationsBareMetalAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsBareMetalAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsBareMetalAdminClusters: API.OperationMethod<
  SetIamPolicyProjectsLocationsBareMetalAdminClustersRequest,
  SetIamPolicyProjectsLocationsBareMetalAdminClustersResponse,
  SetIamPolicyProjectsLocationsBareMetalAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsBareMetalAdminClustersRequest,
  output: SetIamPolicyProjectsLocationsBareMetalAdminClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsBareMetalAdminClustersRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsBareMetalAdminClustersRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsBareMetalAdminClustersRequest>;

export type TestIamPermissionsProjectsLocationsBareMetalAdminClustersResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsBareMetalAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsBareMetalAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsBareMetalAdminClusters: API.OperationMethod<
  TestIamPermissionsProjectsLocationsBareMetalAdminClustersRequest,
  TestIamPermissionsProjectsLocationsBareMetalAdminClustersResponse,
  TestIamPermissionsProjectsLocationsBareMetalAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsBareMetalAdminClustersRequest,
  output: TestIamPermissionsProjectsLocationsBareMetalAdminClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsBareMetalAdminClustersRequest {
  /** Immutable. The bare metal admin cluster resource name. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the BareMetalAdminCluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the BareMetalAdminCluster message will be updated. Empty fields will be ignored unless a field mask is used. */
  updateMask?: string;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
  /** Request body */
  body?: BareMetalAdminCluster;
}

export const PatchProjectsLocationsBareMetalAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(BareMetalAdminCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsBareMetalAdminClustersRequest>;

export type PatchProjectsLocationsBareMetalAdminClustersResponse = Operation;
export const PatchProjectsLocationsBareMetalAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsBareMetalAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single bare metal admin cluster. */
export const patchProjectsLocationsBareMetalAdminClusters: API.OperationMethod<
  PatchProjectsLocationsBareMetalAdminClustersRequest,
  PatchProjectsLocationsBareMetalAdminClustersResponse,
  PatchProjectsLocationsBareMetalAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBareMetalAdminClustersRequest,
  output: PatchProjectsLocationsBareMetalAdminClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsBareMetalAdminClustersRequest {
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
  /** Optional. If set to true, CLM will force CCFE to persist the cluster resource in RMS when the creation fails during standalone preflight checks. In that case the subsequent create call will fail with "cluster already exists" error and hence a update cluster is required to fix the cluster. */
  allowPreflightFailure?: boolean;
  /** Required. The parent of the project and location where the cluster is created in. Format: "projects/{project}/locations/{location}" */
  parent: string;
  /** Required. User provided identifier that is used as part of the resource name; must conform to RFC-1034 and additionally restrict to lower-cased letters. This comes out roughly to: /^a-z+[a-z0-9]$/ */
  bareMetalAdminClusterId?: string;
  /** Request body */
  body?: BareMetalAdminCluster;
}

export const CreateProjectsLocationsBareMetalAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowPreflightFailure: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowPreflightFailure"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    bareMetalAdminClusterId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("bareMetalAdminClusterId"),
    ),
    body: Schema.optional(BareMetalAdminCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/bareMetalAdminClusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsBareMetalAdminClustersRequest>;

export type CreateProjectsLocationsBareMetalAdminClustersResponse = Operation;
export const CreateProjectsLocationsBareMetalAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsBareMetalAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new bare metal admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work. See: https://cloud.google.com/anthos/clusters/docs/bare-metal/latest/installing/creating-clusters/create-admin-cluster-api#prepare_bootstrap_environment */
export const createProjectsLocationsBareMetalAdminClusters: API.OperationMethod<
  CreateProjectsLocationsBareMetalAdminClustersRequest,
  CreateProjectsLocationsBareMetalAdminClustersResponse,
  CreateProjectsLocationsBareMetalAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBareMetalAdminClustersRequest,
  output: CreateProjectsLocationsBareMetalAdminClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnenrollProjectsLocationsBareMetalAdminClustersRequest {
  /** Required. Name of the bare metal admin cluster to be unenrolled. Format: "projects/{project}/locations/{location}/bareMetalAdminClusters/{cluster}" */
  name: string;
  /** If set to true, the unenrollment of a bare metal admin cluster resource will succeed even if errors occur during unenrollment. This parameter can be used when you want to unenroll admin cluster resource and the on-prem admin cluster is disconnected / unreachable. WARNING: Using this parameter when your admin cluster still exists may result in a deleted GCP admin cluster but existing resourcelink in on-prem admin cluster and membership. */
  ignoreErrors?: boolean;
  /** The current etag of the bare metal admin cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** If set to true, and the bare metal admin cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO. */
  allowMissing?: boolean;
  /** Validate the request without actually doing any updates. */
  validateOnly?: boolean;
}

export const UnenrollProjectsLocationsBareMetalAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    ignoreErrors: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreErrors"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}:unenroll" }),
    svc,
  ) as unknown as Schema.Schema<UnenrollProjectsLocationsBareMetalAdminClustersRequest>;

export type UnenrollProjectsLocationsBareMetalAdminClustersResponse = Operation;
export const UnenrollProjectsLocationsBareMetalAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UnenrollProjectsLocationsBareMetalAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unenrolls an existing bare metal admin cluster from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients. */
export const unenrollProjectsLocationsBareMetalAdminClusters: API.OperationMethod<
  UnenrollProjectsLocationsBareMetalAdminClustersRequest,
  UnenrollProjectsLocationsBareMetalAdminClustersResponse,
  UnenrollProjectsLocationsBareMetalAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnenrollProjectsLocationsBareMetalAdminClustersRequest,
  output: UnenrollProjectsLocationsBareMetalAdminClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface EnrollProjectsLocationsBareMetalAdminClustersRequest {
  /** Required. The parent of the project and location where the cluster is enrolled in. Format: "projects/{project}/locations/{location}" */
  parent: string;
  /** Request body */
  body?: EnrollBareMetalAdminClusterRequest;
}

export const EnrollProjectsLocationsBareMetalAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EnrollBareMetalAdminClusterRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/bareMetalAdminClusters:enroll",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<EnrollProjectsLocationsBareMetalAdminClustersRequest>;

export type EnrollProjectsLocationsBareMetalAdminClustersResponse = Operation;
export const EnrollProjectsLocationsBareMetalAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type EnrollProjectsLocationsBareMetalAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enrolls an existing bare metal admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API. */
export const enrollProjectsLocationsBareMetalAdminClusters: API.OperationMethod<
  EnrollProjectsLocationsBareMetalAdminClustersRequest,
  EnrollProjectsLocationsBareMetalAdminClustersResponse,
  EnrollProjectsLocationsBareMetalAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnrollProjectsLocationsBareMetalAdminClustersRequest,
  output: EnrollProjectsLocationsBareMetalAdminClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryVersionConfigProjectsLocationsBareMetalAdminClustersRequest {
  /** Required. The parent of the project and location to query for version config. Format: "projects/{project}/locations/{location}" */
  parent: string;
  /** The admin cluster resource name. This is the full resource name of the admin cluster resource. Format: "projects/{project}/locations/{location}/bareMetalAdminClusters/{bare_metal_admin_cluster}" */
  "upgradeConfig.clusterName"?: string;
}

export const QueryVersionConfigProjectsLocationsBareMetalAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    "upgradeConfig.clusterName": Schema.optional(Schema.String).pipe(
      T.HttpQuery("upgradeConfig.clusterName"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/bareMetalAdminClusters:queryVersionConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<QueryVersionConfigProjectsLocationsBareMetalAdminClustersRequest>;

export type QueryVersionConfigProjectsLocationsBareMetalAdminClustersResponse =
  QueryBareMetalAdminVersionConfigResponse;
export const QueryVersionConfigProjectsLocationsBareMetalAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueryBareMetalAdminVersionConfigResponse;

export type QueryVersionConfigProjectsLocationsBareMetalAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Queries the bare metal admin cluster version config. */
export const queryVersionConfigProjectsLocationsBareMetalAdminClusters: API.OperationMethod<
  QueryVersionConfigProjectsLocationsBareMetalAdminClustersRequest,
  QueryVersionConfigProjectsLocationsBareMetalAdminClustersResponse,
  QueryVersionConfigProjectsLocationsBareMetalAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: QueryVersionConfigProjectsLocationsBareMetalAdminClustersRequest,
  output: QueryVersionConfigProjectsLocationsBareMetalAdminClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsBareMetalAdminClustersRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsBareMetalAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsBareMetalAdminClustersRequest>;

export type GetIamPolicyProjectsLocationsBareMetalAdminClustersResponse =
  Policy;
export const GetIamPolicyProjectsLocationsBareMetalAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsBareMetalAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsBareMetalAdminClusters: API.OperationMethod<
  GetIamPolicyProjectsLocationsBareMetalAdminClustersRequest,
  GetIamPolicyProjectsLocationsBareMetalAdminClustersResponse,
  GetIamPolicyProjectsLocationsBareMetalAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsBareMetalAdminClustersRequest,
  output: GetIamPolicyProjectsLocationsBareMetalAdminClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsBareMetalAdminClustersRequest {
  /** Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project}/locations/{location}" */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. If true, return list of BareMetal Admin Clusters including the ones that only exists in RMS. */
  allowMissing?: boolean;
  /** Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** View for bare metal admin clusters. When `BASIC` is specified, only the admin cluster resource name and membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete admin cluster configuration details. */
  view?: "CLUSTER_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const ListProjectsLocationsBareMetalAdminClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/bareMetalAdminClusters" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBareMetalAdminClustersRequest>;

export type ListProjectsLocationsBareMetalAdminClustersResponse =
  ListBareMetalAdminClustersResponse;
export const ListProjectsLocationsBareMetalAdminClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBareMetalAdminClustersResponse;

export type ListProjectsLocationsBareMetalAdminClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists bare metal admin clusters in a given project and location. */
export const listProjectsLocationsBareMetalAdminClusters: API.PaginatedOperationMethod<
  ListProjectsLocationsBareMetalAdminClustersRequest,
  ListProjectsLocationsBareMetalAdminClustersResponse,
  ListProjectsLocationsBareMetalAdminClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBareMetalAdminClustersRequest,
  output: ListProjectsLocationsBareMetalAdminClustersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsBareMetalAdminClustersOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsBareMetalAdminClustersOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBareMetalAdminClustersOperationsRequest>;

export type ListProjectsLocationsBareMetalAdminClustersOperationsResponse =
  ListOperationsResponse;
export const ListProjectsLocationsBareMetalAdminClustersOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsBareMetalAdminClustersOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsBareMetalAdminClustersOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsBareMetalAdminClustersOperationsRequest,
  ListProjectsLocationsBareMetalAdminClustersOperationsResponse,
  ListProjectsLocationsBareMetalAdminClustersOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBareMetalAdminClustersOperationsRequest,
  output: ListProjectsLocationsBareMetalAdminClustersOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsBareMetalAdminClustersOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsBareMetalAdminClustersOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBareMetalAdminClustersOperationsRequest>;

export type GetProjectsLocationsBareMetalAdminClustersOperationsResponse =
  Operation;
export const GetProjectsLocationsBareMetalAdminClustersOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsBareMetalAdminClustersOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsBareMetalAdminClustersOperations: API.OperationMethod<
  GetProjectsLocationsBareMetalAdminClustersOperationsRequest,
  GetProjectsLocationsBareMetalAdminClustersOperationsResponse,
  GetProjectsLocationsBareMetalAdminClustersOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBareMetalAdminClustersOperationsRequest,
  output: GetProjectsLocationsBareMetalAdminClustersOperationsResponse,
  errors: [NotFound, Forbidden],
}));
