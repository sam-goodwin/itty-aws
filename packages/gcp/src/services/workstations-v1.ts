// ==========================================================================
// Cloud Workstations API (workstations v1)
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
  name: "workstations",
  version: "v1",
  rootUrl: "https://workstations.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface DomainConfig {
  /** Immutable. Domain used by Workstations for HTTP ingress. */
  domain?: string;
}

export const DomainConfig: Schema.Codec<DomainConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
  }).annotate({ identifier: "DomainConfig" });

export interface GatewayConfig {
  /** Optional. Whether HTTP/2 is enabled for this workstation cluster. Defaults to false. */
  http2Enabled?: boolean;
}

export const GatewayConfig: Schema.Codec<GatewayConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    http2Enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GatewayConfig" });

export interface PrivateClusterConfig {
  /** Output only. Hostname for the workstation cluster. This field will be populated only when private endpoint is enabled. To access workstations in the workstation cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment. */
  clusterHostname?: string;
  /** Immutable. Whether Workstations endpoint is private. */
  enablePrivateEndpoint?: boolean;
  /** Output only. Service attachment URI for the workstation cluster. The service attachment is created when private endpoint is enabled. To access workstations in the workstation cluster, configure access to the managed service using [Private Service Connect](https://cloud.google.com/vpc/docs/configure-private-service-connect-services). */
  serviceAttachmentUri?: string;
  /** Optional. Additional projects that are allowed to attach to the workstation cluster's service attachment. By default, the workstation cluster's project and the VPC host project (if different) are allowed. */
  allowedProjects?: ReadonlyArray<string>;
}

export const PrivateClusterConfig: Schema.Codec<PrivateClusterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterHostname: Schema.optional(Schema.String),
    enablePrivateEndpoint: Schema.optional(Schema.Boolean),
    serviceAttachmentUri: Schema.optional(Schema.String),
    allowedProjects: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PrivateClusterConfig" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface WorkstationCluster {
  /** Immutable. Name of the Compute Engine subnetwork in which instances associated with this workstation cluster will be created. Must be part of the subnetwork specified for this workstation cluster. */
  subnetwork?: string;
  /** Identifier. Full name of this workstation cluster. */
  name?: string;
  /** Output only. Time when this workstation cluster was soft-deleted. */
  deleteTime?: string;
  /** Optional. Specifies the launch URL for workstations in this cluster. Requests sent to unstarted workstations will be redirected to this URL. Requests redirected to the launch endpoint will be sent with a `workstation` and `project` query parameter containing the full workstation resource name and project ID, respectively. The launch endpoint is responsible for starting the workstation, polling it until it reaches `STATE_RUNNING`, and then issuing a redirect to the workstation's host URL. */
  workstationLaunchUrl?: string;
  /** Output only. Time when this workstation cluster was created. */
  createTime?: string;
  /** Output only. The private IP address of the control plane for this workstation cluster. Workstation VMs need access to this IP address to work with the service, so make sure that your firewall rules allow egress from the workstation VMs to this address. */
  controlPlaneIp?: string;
  /** Optional. Configuration options for a custom domain. */
  domainConfig?: DomainConfig;
  /** Optional. Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster. Redirects to this endpoint will send a base64 encoded `state` query param containing the target workstation name and original request hostname. The endpoint is responsible for retrieving a token using `GenerateAccessToken` and redirecting back to the original hostname with the token. */
  workstationAuthorizationUrl?: string;
  /** Immutable. Name of the Compute Engine network in which instances associated with this workstation cluster will be created. */
  network?: string;
  /** Output only. Indicates whether this workstation cluster is currently being updated to match its intended state. */
  reconciling?: boolean;
  /** Output only. Whether this workstation cluster is in degraded mode, in which case it may require user action to restore full functionality. The conditions field contains detailed information about the status of the cluster. */
  degraded?: boolean;
  /** Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation cluster and that are also propagated to the underlying Compute Engine resources. */
  labels?: Record<string, string>;
  /** Optional. Configuration options for Cluster HTTP Gateway. */
  gatewayConfig?: GatewayConfig;
  /** Output only. A system-assigned unique identifier for this workstation cluster. */
  uid?: string;
  /** Output only. Time when this workstation cluster was most recently updated. */
  updateTime?: string;
  /** Optional. Configuration for private workstation cluster. */
  privateClusterConfig?: PrivateClusterConfig;
  /** Optional. Human-readable name for this workstation cluster. */
  displayName?: string;
  /** Output only. Status conditions describing the workstation cluster's current state. */
  conditions?: ReadonlyArray<Status>;
  /** Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing" */
  tags?: Record<string, string>;
  /** Optional. Client-specified annotations. */
  annotations?: Record<string, string>;
}

export const WorkstationCluster: Schema.Codec<WorkstationCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnetwork: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    workstationLaunchUrl: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    controlPlaneIp: Schema.optional(Schema.String),
    domainConfig: Schema.optional(DomainConfig),
    workstationAuthorizationUrl: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    degraded: Schema.optional(Schema.Boolean),
    etag: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    gatewayConfig: Schema.optional(GatewayConfig),
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    privateClusterConfig: Schema.optional(PrivateClusterConfig),
    displayName: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Array(Status)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "WorkstationCluster" });

export interface ListWorkstationClustersResponse {
  /** The requested workstation clusters. */
  workstationClusters?: ReadonlyArray<WorkstationCluster>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Unreachable resources. */
  unreachable?: ReadonlyArray<string>;
}

export const ListWorkstationClustersResponse: Schema.Codec<ListWorkstationClustersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workstationClusters: Schema.optional(Schema.Array(WorkstationCluster)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListWorkstationClustersResponse" });

export interface GcePersistentDisk {
  /** Optional. Name of the disk image to use as the source for the disk. Must be empty if source_snapshot is set. Updating source_image will update content in the ephemeral directory after the workstation is restarted. Only file systems supported by Container-Optimized OS (COS) are explicitly supported. For a list of supported file systems, please refer to the [COS documentation](https://cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems). This field is mutable. */
  sourceImage?: string;
  /** Optional. Name of the snapshot to use as the source for the disk. Must be empty if source_image is set. Must be empty if read_only is false. Updating source_snapshot will update content in the ephemeral directory after the workstation is restarted. Only file systems supported by Container-Optimized OS (COS) are explicitly supported. For a list of supported file systems, see [the filesystems available in Container-Optimized OS](https://cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems). This field is mutable. */
  sourceSnapshot?: string;
  /** Optional. Whether the disk is read only. If true, the disk may be shared by multiple VMs and source_snapshot must be set. */
  readOnly?: boolean;
  /** Optional. Type of the disk to use. Defaults to `"pd-standard"`. */
  diskType?: string;
}

export const GcePersistentDisk: Schema.Codec<GcePersistentDisk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceImage: Schema.optional(Schema.String),
    sourceSnapshot: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    diskType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcePersistentDisk" });

export interface Container {
  /** Optional. Arguments passed to the entrypoint. */
  args?: ReadonlyArray<string>;
  /** Optional. If set, overrides the default DIR specified by the image. */
  workingDir?: string;
  /** Optional. A Docker container image that defines a custom environment. Cloud Workstations provides a number of [preconfigured images](https://cloud.google.com/workstations/docs/preconfigured-base-images), but you can create your own [custom container images](https://cloud.google.com/workstations/docs/custom-container-images). If using a private image, the `host.gceInstance.serviceAccount` field must be specified in the workstation configuration. If using a custom container image, the service account must have [Artifact Registry Reader](https://cloud.google.com/artifact-registry/docs/access-control#roles) permission to pull the specified image. Otherwise, the image must be publicly accessible. */
  image?: string;
  /** Optional. Environment variables passed to the container's entrypoint. */
  env?: Record<string, string>;
  /** Optional. If set, overrides the USER specified in the image with the given uid. */
  runAsUser?: number;
  /** Optional. If set, overrides the default ENTRYPOINT specified by the image. */
  command?: ReadonlyArray<string>;
}

export const Container: Schema.Codec<Container> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    args: Schema.optional(Schema.Array(Schema.String)),
    workingDir: Schema.optional(Schema.String),
    image: Schema.optional(Schema.String),
    env: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    runAsUser: Schema.optional(Schema.Number),
    command: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Container" });

export interface ReadinessCheck {
  /** Optional. Path to which the request should be sent. */
  path?: string;
  /** Optional. Port to which the request should be sent. */
  port?: number;
}

export const ReadinessCheck: Schema.Codec<ReadinessCheck> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ReadinessCheck" });

export interface GceShieldedInstanceConfig {
  /** Optional. Whether the instance has Secure Boot enabled. */
  enableSecureBoot?: boolean;
  /** Optional. Whether the instance has the vTPM enabled. */
  enableVtpm?: boolean;
  /** Optional. Whether the instance has integrity monitoring enabled. */
  enableIntegrityMonitoring?: boolean;
}

export const GceShieldedInstanceConfig: Schema.Codec<GceShieldedInstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableSecureBoot: Schema.optional(Schema.Boolean),
    enableVtpm: Schema.optional(Schema.Boolean),
    enableIntegrityMonitoring: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GceShieldedInstanceConfig" });

export interface Accelerator {
  /** Optional. Type of accelerator resource to attach to the instance, for example, `"nvidia-tesla-p100"`. */
  type?: string;
  /** Optional. Number of accelerator cards exposed to the instance. */
  count?: number;
}

export const Accelerator: Schema.Codec<Accelerator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Accelerator" });

export interface BoostConfig {
  /** Required. The ID to be used for the boost configuration. */
  id?: string;
  /** Optional. Whether to enable nested virtualization on boosted Cloud Workstations VMs running using this boost configuration. Defaults to false. Nested virtualization lets you run virtual machine (VM) instances inside your workstation. Before enabling nested virtualization, consider the following important considerations. Cloud Workstations instances are subject to the [same restrictions as Compute Engine instances](https://cloud.google.com/compute/docs/instances/nested-virtualization/overview#restrictions): * **Organization policy**: projects, folders, or organizations may be restricted from creating nested VMs if the **Disable VM nested virtualization** constraint is enforced in the organization policy. For more information, see the Compute Engine section, [Checking whether nested virtualization is allowed](https://cloud.google.com/compute/docs/instances/nested-virtualization/managing-constraint#checking_whether_nested_virtualization_is_allowed). * **Performance**: nested VMs might experience a 10% or greater decrease in performance for workloads that are CPU-bound and possibly greater than a 10% decrease for workloads that are input/output bound. * **Machine Type**: nested virtualization can only be enabled on boost configurations that specify a machine_type in the N1 or N2 machine series. */
  enableNestedVirtualization?: boolean;
  /** Optional. A list of the type and count of accelerator cards attached to the boost instance. Defaults to `none`. */
  accelerators?: ReadonlyArray<Accelerator>;
  /** Optional. The number of boost VMs that the system should keep idle so that workstations can be boosted quickly. Defaults to `0`. */
  poolSize?: number;
  /** Optional. The size of the boot disk for the VM in gigabytes (GB). The minimum boot disk size is `30` GB. Defaults to `50` GB. */
  bootDiskSizeGb?: number;
  /** Optional. The type of machine that boosted VM instances will use—for example, `e2-standard-4`. For more information about machine types that Cloud Workstations supports, see the list of [available machine types](https://cloud.google.com/workstations/docs/available-machine-types). Defaults to `e2-standard-4`. */
  machineType?: string;
}

export const BoostConfig: Schema.Codec<BoostConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    enableNestedVirtualization: Schema.optional(Schema.Boolean),
    accelerators: Schema.optional(Schema.Array(Accelerator)),
    poolSize: Schema.optional(Schema.Number),
    bootDiskSizeGb: Schema.optional(Schema.Number),
    machineType: Schema.optional(Schema.String),
  }).annotate({ identifier: "BoostConfig" });

export interface GceConfidentialInstanceConfig {
  /** Optional. Whether the instance has confidential compute enabled. */
  enableConfidentialCompute?: boolean;
}

export const GceConfidentialInstanceConfig: Schema.Codec<GceConfidentialInstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableConfidentialCompute: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GceConfidentialInstanceConfig" });

export interface GceInstance {
  /** Optional. Network tags to add to the Compute Engine VMs backing the workstations. This option applies [network tags](https://cloud.google.com/vpc/docs/add-remove-network-tags) to VMs created with this configuration. These network tags enable the creation of [firewall rules](https://cloud.google.com/workstations/docs/configure-firewall-rules). */
  tags?: ReadonlyArray<string>;
  /** Optional. Resource manager tags to be bound to this instance. Tag keys and values have the same definition as [resource manager tags](https://cloud.google.com/resource-manager/docs/tags/tags-overview). Keys must be in the format `tagKeys/{tag_key_id}`, and values are in the format `tagValues/456`. */
  vmTags?: Record<string, string>;
  /** Optional. The number of VMs that the system should keep idle so that new workstations can be started quickly for new users. Defaults to `0` in the API. */
  poolSize?: number;
  /** Optional. A set of Compute Engine Shielded instance options. */
  shieldedInstanceConfig?: GceShieldedInstanceConfig;
  /** Optional. Whether to disable SSH access to the VM. */
  disableSsh?: boolean;
  /** Optional. The type of machine to use for VM instances—for example, `"e2-standard-4"`. For more information about machine types that Cloud Workstations supports, see the list of [available machine types](https://cloud.google.com/workstations/docs/available-machine-types). */
  machineType?: string;
  /** Optional. The size of the boot disk for the VM in gigabytes (GB). The minimum boot disk size is `30` GB. Defaults to `50` GB. */
  bootDiskSizeGb?: number;
  /** Optional. Whether to enable nested virtualization on Cloud Workstations VMs created using this workstation configuration. Defaults to false. Nested virtualization lets you run virtual machine (VM) instances inside your workstation. Before enabling nested virtualization, consider the following important considerations. Cloud Workstations instances are subject to the [same restrictions as Compute Engine instances](https://cloud.google.com/compute/docs/instances/nested-virtualization/overview#restrictions): * **Organization policy**: projects, folders, or organizations may be restricted from creating nested VMs if the **Disable VM nested virtualization** constraint is enforced in the organization policy. For more information, see the Compute Engine section, [Checking whether nested virtualization is allowed](https://cloud.google.com/compute/docs/instances/nested-virtualization/managing-constraint#checking_whether_nested_virtualization_is_allowed). * **Performance**: nested VMs might experience a 10% or greater decrease in performance for workloads that are CPU-bound and possibly greater than a 10% decrease for workloads that are input/output bound. * **Machine Type**: nested virtualization can only be enabled on workstation configurations that specify a machine_type in the N1 or N2 machine series. */
  enableNestedVirtualization?: boolean;
  /** Optional. Link to the startup script stored in Cloud Storage. This script will be run on the host workstation VM when the VM is created. The URI must be of the form gs://{bucket-name}/{object-name}. If specifying a startup script, the service account must have [Permission to access the bucket and script file in Cloud Storage](https://cloud.google.com/storage/docs/access-control/iam-permissions). Otherwise, the script must be publicly accessible. Note that the service regularly updates the OS version of the host VM, and it is the responsibility of the user to ensure the script stays compatible with the OS version. */
  startupScriptUri?: string;
  /** Optional. A list of the boost configurations that workstations created using this workstation configuration are allowed to use. If specified, users will have the option to choose from the list of boost configs when starting a workstation. */
  boostConfigs?: ReadonlyArray<BoostConfig>;
  /** Optional. A set of Compute Engine Confidential VM instance options. */
  confidentialInstanceConfig?: GceConfidentialInstanceConfig;
  /** Output only. Number of instances currently available in the pool for faster workstation startup. */
  pooledInstances?: number;
  /** Optional. A list of the type and count of accelerator cards attached to the instance. */
  accelerators?: ReadonlyArray<Accelerator>;
  /** Optional. Scopes to grant to the service_account. When specified, users of workstations under this configuration must have `iam.serviceAccounts.actAs` on the service account. */
  serviceAccountScopes?: ReadonlyArray<string>;
  /** Optional. The email address of the service account for Cloud Workstations VMs created with this configuration. When specified, be sure that the service account has `logging.logEntries.create` and `monitoring.timeSeries.create` permissions on the project so it can write logs out to Cloud Logging. If using a custom container image, the service account must have [Artifact Registry Reader](https://cloud.google.com/artifact-registry/docs/access-control#roles) permission to pull the specified image. If you as the administrator want to be able to `ssh` into the underlying VM, you need to set this value to a service account for which you have the `iam.serviceAccounts.actAs` permission. Conversely, if you don't want anyone to be able to `ssh` into the underlying VM, use a service account where no one has that permission. If not set, VMs run with a service account provided by the Cloud Workstations service, and the image must be publicly accessible. */
  serviceAccount?: string;
  /** Optional. Custom metadata to apply to Compute Engine instances. */
  instanceMetadata?: Record<string, string>;
  /** Optional. When set to true, disables public IP addresses for VMs. If you disable public IP addresses, you must set up Private Google Access or Cloud NAT on your network. If you use Private Google Access and you use `private.googleapis.com` or `restricted.googleapis.com` for Container Registry and Artifact Registry, make sure that you set up DNS records for domains `*.gcr.io` and `*.pkg.dev`. Defaults to false (VMs have public IP addresses). */
  disablePublicIpAddresses?: boolean;
}

export const GceInstance: Schema.Codec<GceInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Schema.String)),
    vmTags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    poolSize: Schema.optional(Schema.Number),
    shieldedInstanceConfig: Schema.optional(GceShieldedInstanceConfig),
    disableSsh: Schema.optional(Schema.Boolean),
    machineType: Schema.optional(Schema.String),
    bootDiskSizeGb: Schema.optional(Schema.Number),
    enableNestedVirtualization: Schema.optional(Schema.Boolean),
    startupScriptUri: Schema.optional(Schema.String),
    boostConfigs: Schema.optional(Schema.Array(BoostConfig)),
    confidentialInstanceConfig: Schema.optional(GceConfidentialInstanceConfig),
    pooledInstances: Schema.optional(Schema.Number),
    accelerators: Schema.optional(Schema.Array(Accelerator)),
    serviceAccountScopes: Schema.optional(Schema.Array(Schema.String)),
    serviceAccount: Schema.optional(Schema.String),
    instanceMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    disablePublicIpAddresses: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GceInstance" });

export interface Host {
  /** Specifies a Compute Engine instance as the host. */
  gceInstance?: GceInstance;
}

export const Host: Schema.Codec<Host> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gceInstance: Schema.optional(GceInstance),
  }).annotate({ identifier: "Host" });

export interface CustomerEncryptionKey {
  /** Immutable. The name of the Google Cloud KMS encryption key. For example, `"projects/PROJECT_ID/locations/REGION/keyRings/KEY_RING/cryptoKeys/KEY_NAME"`. The key must be in the same region as the workstation configuration. */
  kmsKey?: string;
  /** Immutable. The service account to use with the specified KMS key. We recommend that you use a separate service account and follow KMS best practices. For more information, see [Separation of duties](https://cloud.google.com/kms/docs/separation-of-duties) and `gcloud kms keys add-iam-policy-binding` [`--member`](https://cloud.google.com/sdk/gcloud/reference/kms/keys/add-iam-policy-binding#--member). */
  kmsKeyServiceAccount?: string;
}

export const CustomerEncryptionKey: Schema.Codec<CustomerEncryptionKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKey: Schema.optional(Schema.String),
    kmsKeyServiceAccount: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerEncryptionKey" });

export interface EphemeralDirectory {
  /** An EphemeralDirectory backed by a Compute Engine persistent disk. */
  gcePd?: GcePersistentDisk;
  /** Required. Location of this directory in the running workstation. */
  mountPath?: string;
}

export const EphemeralDirectory: Schema.Codec<EphemeralDirectory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcePd: Schema.optional(GcePersistentDisk),
    mountPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "EphemeralDirectory" });

export interface GceRegionalPersistentDisk {
  /** Optional. Name of the snapshot to use as the source for the disk. If set, size_gb and fs_type must be empty. Must be formatted as ext4 file system with no partitions. */
  sourceSnapshot?: string;
  /** Optional. The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if source_snapshot is set. Valid values are `10`, `50`, `100`, `200`, `500`, or `1000`. Defaults to `200`. If less than `200` GB, the disk_type must be `"pd-balanced"` or `"pd-ssd"`. */
  sizeGb?: number;
  /** Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`. */
  reclaimPolicy?:
    | "RECLAIM_POLICY_UNSPECIFIED"
    | "DELETE"
    | "RETAIN"
    | (string & {});
  /** Optional. Number of seconds to wait after initially creating or subsequently shutting down the workstation before converting its disk into a snapshot. This generally saves costs at the expense of greater startup time on next workstation start, as the service will need to create a disk from the archival snapshot. A value of `"0s"` indicates that the disk will never be archived. */
  archiveTimeout?: string;
  /** Optional. Maximum size in GB to which this persistent directory can be resized. Defaults to unlimited if not set. */
  maxSizeGb?: number;
  /** Optional. Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source_snapshot is set. Defaults to `"ext4"`. */
  fsType?: string;
  /** Optional. The [type of the persistent disk](https://cloud.google.com/compute/docs/disks#disk-types) for the home directory. Defaults to `"pd-standard"`. */
  diskType?: string;
}

export const GceRegionalPersistentDisk: Schema.Codec<GceRegionalPersistentDisk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceSnapshot: Schema.optional(Schema.String),
    sizeGb: Schema.optional(Schema.Number),
    reclaimPolicy: Schema.optional(Schema.String),
    archiveTimeout: Schema.optional(Schema.String),
    maxSizeGb: Schema.optional(Schema.Number),
    fsType: Schema.optional(Schema.String),
    diskType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GceRegionalPersistentDisk" });

export interface GceHyperdiskBalancedHighAvailability {
  /** Optional. Maximum size in GB to which this persistent directory can be resized. Defaults to unlimited if not set. */
  maxSizeGb?: number;
  /** Optional. The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if source_snapshot is set. Valid values are `10`, `50`, `100`, `200`, `500`, or `1000`. Defaults to `200`. */
  sizeGb?: number;
  /** Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`. */
  reclaimPolicy?:
    | "RECLAIM_POLICY_UNSPECIFIED"
    | "DELETE"
    | "RETAIN"
    | (string & {});
  /** Optional. Name of the snapshot to use as the source for the disk. If set, size_gb must be empty. Must be formatted as ext4 file system with no partitions. */
  sourceSnapshot?: string;
  /** Optional. Number of seconds to wait after initially creating or subsequently shutting down the workstation before converting its disk into a snapshot. This generally saves costs at the expense of greater startup time on next workstation start, as the service will need to create a disk from the archival snapshot. A value of `"0s"` indicates that the disk will never be archived. */
  archiveTimeout?: string;
}

export const GceHyperdiskBalancedHighAvailability: Schema.Codec<GceHyperdiskBalancedHighAvailability> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxSizeGb: Schema.optional(Schema.Number),
    sizeGb: Schema.optional(Schema.Number),
    reclaimPolicy: Schema.optional(Schema.String),
    sourceSnapshot: Schema.optional(Schema.String),
    archiveTimeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "GceHyperdiskBalancedHighAvailability" });

export interface PersistentDirectory {
  /** A PersistentDirectory backed by a Compute Engine persistent disk. */
  gcePd?: GceRegionalPersistentDisk;
  /** Optional. Location of this directory in the running workstation. */
  mountPath?: string;
  /** A PersistentDirectory backed by a Compute Engine hyperdisk high availability disk. */
  gceHd?: GceHyperdiskBalancedHighAvailability;
}

export const PersistentDirectory: Schema.Codec<PersistentDirectory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcePd: Schema.optional(GceRegionalPersistentDisk),
    mountPath: Schema.optional(Schema.String),
    gceHd: Schema.optional(GceHyperdiskBalancedHighAvailability),
  }).annotate({ identifier: "PersistentDirectory" });

export interface PortRange {
  /** Required. Starting port number for the current range of ports. Valid ports are 22, 80, and ports within the range 1024-65535. */
  first?: number;
  /** Required. Ending port number for the current range of ports. Valid ports are 22, 80, and ports within the range 1024-65535. */
  last?: number;
}

export const PortRange: Schema.Codec<PortRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    first: Schema.optional(Schema.Number),
    last: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PortRange" });

export interface WorkstationConfig {
  /** Output only. Indicates whether this workstation configuration is currently being updated to match its intended state. */
  reconciling?: boolean;
  /** Output only. Whether this workstation configuration is in degraded mode, in which case it may require user action to restore full functionality. The conditions field contains detailed information about the status of the configuration. */
  degraded?: boolean;
  /** Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation configuration and that are also propagated to the underlying Compute Engine resources. */
  labels?: Record<string, string>;
  /** Output only. A system-assigned unique identifier for this workstation configuration. */
  uid?: string;
  /** Optional. Container that runs upon startup for each workstation using this workstation configuration. */
  container?: Container;
  /** Optional. Readiness checks to perform when starting a workstation using this workstation configuration. Mark a workstation as running only after all specified readiness checks return 200 status codes. */
  readinessChecks?: ReadonlyArray<ReadinessCheck>;
  /** Optional. Runtime host for the workstation. */
  host?: Host;
  /** Identifier. Full name of this workstation configuration. */
  name?: string;
  /** Optional. Maximum number of workstations under this configuration a user can have `workstations.workstation.use` permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request. Can be overridden by: - granting a user workstations.workstationConfigs.exemptMaxUsableWorkstationLimit permission, or - having a user with that permission create a workstation and granting another user `workstations.workstation.use` permission on that workstation. If not specified, defaults to `0`, which indicates unlimited. */
  maxUsableWorkstations?: number;
  /** Optional. Number of seconds to wait before automatically stopping a workstation after it last received user traffic. A value of `"0s"` indicates that Cloud Workstations VMs created with this configuration should never time out due to idleness. Provide [duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration) terminated by `s` for seconds—for example, `"7200s"` (2 hours). The default is `"1200s"` (20 minutes). */
  idleTimeout?: string;
  /** Output only. Time when this workstation configuration was most recently updated. */
  updateTime?: string;
  /** Optional. Human-readable name for this workstation configuration. */
  displayName?: string;
  /** Immutable. Encrypts resources of this workstation configuration using a customer-managed encryption key (CMEK). If specified, the boot disk of the Compute Engine instance and the persistent disk are encrypted using this encryption key. If this field is not set, the disks are encrypted using a generated key. Customer-managed encryption keys do not protect disk metadata. If the customer-managed encryption key is rotated, when the workstation instance is stopped, the system attempts to recreate the persistent disk with the new version of the key. Be sure to keep older versions of the key until the persistent disk is recreated. Otherwise, data on the persistent disk might be lost. If the encryption key is revoked, the workstation session automatically stops within 7 hours. Immutable after the workstation configuration is created. */
  encryptionKey?: CustomerEncryptionKey;
  /** Optional. Whether to enable Linux `auditd` logging on the workstation. When enabled, a service_account must also be specified that has `roles/logging.logWriter` and `roles/monitoring.metricWriter` on the project. Operating system audit logging is distinct from [Cloud Audit Logs](https://cloud.google.com/workstations/docs/audit-logging) and [Container output logging](https://cloud.google.com/workstations/docs/container-output-logging#overview). Operating system audit logs are available in the [Cloud Logging](https://cloud.google.com/logging/docs) console by querying: resource.type="gce_instance" log_name:"/logs/linux-auditd" */
  enableAuditAgent?: boolean;
  /** Output only. Status conditions describing the workstation configuration's current state. */
  conditions?: ReadonlyArray<Status>;
  /** Optional. Client-specified annotations. */
  annotations?: Record<string, string>;
  /** Optional. Immutable. Specifies the zones used to replicate the VM and disk resources within the region. If set, exactly two zones within the workstation cluster's region must be specified—for example, `['us-central1-a', 'us-central1-f']`. If this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created. */
  replicaZones?: ReadonlyArray<string>;
  /** Output only. Time when this workstation configuration was soft-deleted. */
  deleteTime?: string;
  /** Optional. Ephemeral directories which won't persist across workstation sessions. */
  ephemeralDirectories?: ReadonlyArray<EphemeralDirectory>;
  /** Output only. Time when this workstation configuration was created. */
  createTime?: string;
  /** Optional. Number of seconds that a workstation can run until it is automatically shut down. We recommend that workstations be shut down daily to reduce costs and so that security updates can be applied upon restart. The idle_timeout and running_timeout fields are independent of each other. Note that the running_timeout field shuts down VMs after the specified time, regardless of whether or not the VMs are idle. Provide duration terminated by `s` for seconds—for example, `"54000s"` (15 hours). Defaults to `"43200s"` (12 hours). A value of `"0s"` indicates that workstations using this configuration should never time out. If encryption_key is set, it must be greater than `"0s"` and less than `"86400s"` (24 hours). Warning: A value of `"0s"` indicates that Cloud Workstations VMs created with this configuration have no maximum running time. This is strongly discouraged because you incur costs and will not pick up security updates. */
  runningTimeout?: string;
  /** Optional. Directories to persist across workstation sessions. */
  persistentDirectories?: ReadonlyArray<PersistentDirectory>;
  /** Optional. Disables support for plain TCP connections in the workstation. By default the service supports TCP connections through a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain TCP connections, such as SSH. When enabled, all communication must occur over HTTPS or WSS. */
  disableTcpConnections?: boolean;
  /** Optional. A list of PortRanges specifying single ports or ranges of ports that are externally accessible in the workstation. Allowed ports must be one of 22, 80, or within range 1024-65535. If not specified defaults to ports 22, 80, and ports 1024-65535. */
  allowedPorts?: ReadonlyArray<PortRange>;
  /** Optional. Grant creator of a workstation `roles/workstations.policyAdmin` role along with `roles/workstations.user` role on the workstation created by them. This allows workstation users to share access to either their entire workstation, or individual ports. Defaults to false. */
  grantWorkstationAdminRoleOnCreate?: boolean;
}

export const WorkstationConfig: Schema.Codec<WorkstationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reconciling: Schema.optional(Schema.Boolean),
    degraded: Schema.optional(Schema.Boolean),
    etag: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uid: Schema.optional(Schema.String),
    container: Schema.optional(Container),
    readinessChecks: Schema.optional(Schema.Array(ReadinessCheck)),
    host: Schema.optional(Host),
    name: Schema.optional(Schema.String),
    maxUsableWorkstations: Schema.optional(Schema.Number),
    idleTimeout: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    encryptionKey: Schema.optional(CustomerEncryptionKey),
    enableAuditAgent: Schema.optional(Schema.Boolean),
    conditions: Schema.optional(Schema.Array(Status)),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    replicaZones: Schema.optional(Schema.Array(Schema.String)),
    deleteTime: Schema.optional(Schema.String),
    ephemeralDirectories: Schema.optional(Schema.Array(EphemeralDirectory)),
    createTime: Schema.optional(Schema.String),
    runningTimeout: Schema.optional(Schema.String),
    persistentDirectories: Schema.optional(Schema.Array(PersistentDirectory)),
    disableTcpConnections: Schema.optional(Schema.Boolean),
    allowedPorts: Schema.optional(Schema.Array(PortRange)),
    grantWorkstationAdminRoleOnCreate: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "WorkstationConfig" });

export interface ListWorkstationConfigsResponse {
  /** The requested configs. */
  workstationConfigs?: ReadonlyArray<WorkstationConfig>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Unreachable resources. */
  unreachable?: ReadonlyArray<string>;
}

export const ListWorkstationConfigsResponse: Schema.Codec<ListWorkstationConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workstationConfigs: Schema.optional(Schema.Array(WorkstationConfig)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListWorkstationConfigsResponse" });

export interface WorkstationPersistentDirectory {
  /** Optional. The mount path of the persistent directory. */
  mountPath?: string;
  /** Optional. Size of the persistent directory in GB. If specified in an update request, this is the desired size of the directory. */
  sizeGb?: number;
}

export const WorkstationPersistentDirectory: Schema.Codec<WorkstationPersistentDirectory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mountPath: Schema.optional(Schema.String),
    sizeGb: Schema.optional(Schema.Number),
  }).annotate({ identifier: "WorkstationPersistentDirectory" });

export interface GceInstanceHost {
  /** Optional. Output only. The ID of the Compute Engine instance. */
  id?: string;
  /** Optional. Output only. The name of the Compute Engine instance. */
  name?: string;
  /** Optional. Output only. The zone of the Compute Engine instance. */
  zone?: string;
}

export const GceInstanceHost: Schema.Codec<GceInstanceHost> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
  }).annotate({ identifier: "GceInstanceHost" });

export interface RuntimeHost {
  /** Specifies a Compute Engine instance as the host. */
  gceInstanceHost?: GceInstanceHost;
}

export const RuntimeHost: Schema.Codec<RuntimeHost> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gceInstanceHost: Schema.optional(GceInstanceHost),
  }).annotate({ identifier: "RuntimeHost" });

export interface Workstation {
  /** Optional. Directories to persist across workstation sessions. */
  persistentDirectories?: ReadonlyArray<WorkstationPersistentDirectory>;
  /** Output only. Time when this workstation was created. */
  createTime?: string;
  /** Identifier. Full name of this workstation. */
  name?: string;
  /** Output only. Time when this workstation was soft-deleted. */
  deleteTime?: string;
  /** Output only. Current state of the workstation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "STATE_STARTING"
    | "STATE_RUNNING"
    | "STATE_STOPPING"
    | "STATE_STOPPED"
    | (string & {});
  /** Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. A system-assigned unique identifier for this workstation. */
  uid?: string;
  /** Output only. Time when this workstation was most recently updated. */
  updateTime?: string;
  /** Optional. Output only. Runtime host for the workstation when in STATE_RUNNING. */
  runtimeHost?: RuntimeHost;
  /** Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation and that are also propagated to the underlying Compute Engine resources. */
  labels?: Record<string, string>;
  /** Output only. Time when this workstation was most recently successfully started, regardless of the workstation's initial state. */
  startTime?: string;
  /** Output only. Indicates whether this workstation is currently being updated to match its intended state. */
  reconciling?: boolean;
  /** Output only. The name of the Google Cloud KMS encryption key used to encrypt this workstation. The KMS key can only be configured in the WorkstationConfig. The expected format is `projects/* /locations/* /keyRings/* /cryptoKeys/*`. */
  kmsKey?: string;
  /** Optional. Client-specified annotations. */
  annotations?: Record<string, string>;
  /** Output only. Host to which clients can send HTTPS traffic that will be received by the workstation. Authorized traffic will be received to the workstation as HTTP on port 80. To send traffic to a different port, clients may prefix the host with the destination port in the format `{port}-{host}`. */
  host?: string;
  /** Optional. The source workstation from which this workstation's persistent directories were cloned on creation. */
  sourceWorkstation?: string;
  /** Optional. Environment variables passed to the workstation container's entrypoint. */
  env?: Record<string, string>;
  /** Optional. Human-readable name for this workstation. */
  displayName?: string;
}

export const Workstation: Schema.Codec<Workstation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    persistentDirectories: Schema.optional(
      Schema.Array(WorkstationPersistentDirectory),
    ),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    runtimeHost: Schema.optional(RuntimeHost),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    startTime: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    kmsKey: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    host: Schema.optional(Schema.String),
    sourceWorkstation: Schema.optional(Schema.String),
    env: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Workstation" });

export interface ListUsableWorkstationsResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Unreachable resources. */
  unreachable?: ReadonlyArray<string>;
  /** The requested workstations. */
  workstations?: ReadonlyArray<Workstation>;
}

export const ListUsableWorkstationsResponse: Schema.Codec<ListUsableWorkstationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    workstations: Schema.optional(Schema.Array(Workstation)),
  }).annotate({ identifier: "ListUsableWorkstationsResponse" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Codec<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface ListUsableWorkstationConfigsResponse {
  /** The requested configs. */
  workstationConfigs?: ReadonlyArray<WorkstationConfig>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Unreachable resources. */
  unreachable?: ReadonlyArray<string>;
}

export const ListUsableWorkstationConfigsResponse: Schema.Codec<ListUsableWorkstationConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workstationConfigs: Schema.optional(Schema.Array(WorkstationConfig)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListUsableWorkstationConfigsResponse" });

export interface ListWorkstationsResponse {
  /** Optional. Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Optional. Unreachable resources. */
  unreachable?: ReadonlyArray<string>;
  /** The requested workstations. */
  workstations?: ReadonlyArray<Workstation>;
}

export const ListWorkstationsResponse: Schema.Codec<ListWorkstationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    workstations: Schema.optional(Schema.Array(Workstation)),
  }).annotate({ identifier: "ListWorkstationsResponse" });

export interface Expr {
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
}

export const Expr: Schema.Codec<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface Binding {
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
}

export const Binding: Schema.Codec<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    members: Schema.optional(Schema.Array(Schema.String)),
    role: Schema.optional(Schema.String),
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

export const AuditLogConfig: Schema.Codec<AuditLogConfig> =
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

export const AuditConfig: Schema.Codec<AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
  }).annotate({ identifier: "AuditConfig" });

export interface Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
}

export const Policy: Schema.Codec<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(Binding)),
    etag: Schema.optional(Schema.String),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
  }).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
}

export const SetIamPolicyRequest: Schema.Codec<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Codec<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface OperationMetadata {
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Time that the operation finished running. */
  endTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. */
  requestedCancellation?: boolean;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Time that the operation was created. */
  createTime?: string;
}

export const OperationMetadata: Schema.Codec<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    target: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Location" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Codec<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface StartWorkstationRequest {
  /** Optional. If set, validate the request and preview the result, but do not actually apply it. */
  validateOnly?: boolean;
  /** Optional. If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag. */
  etag?: string;
  /** Optional. If set, the workstation starts using the boost configuration with the specified ID. */
  boostConfig?: string;
}

export const StartWorkstationRequest: Schema.Codec<StartWorkstationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean),
    etag: Schema.optional(Schema.String),
    boostConfig: Schema.optional(Schema.String),
  }).annotate({ identifier: "StartWorkstationRequest" });

export interface GenerateAccessTokenRequest {
  /** Optional. Port for which the access token should be generated. If specified, the generated access token grants access only to the specified port of the workstation. If specified, values must be within the range [1 - 65535]. If not specified, the generated access token grants access to all ports of the workstation. */
  port?: number;
  /** Desired expiration time of the access token. This value must be at most 24 hours in the future. If a value is not specified, the token's expiration time will be set to a default value of 1 hour in the future. */
  expireTime?: string;
  /** Desired lifetime duration of the access token. This value must be at most 24 hours. If a value is not specified, the token's lifetime will be set to a default value of 1 hour. */
  ttl?: string;
}

export const GenerateAccessTokenRequest: Schema.Codec<GenerateAccessTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    expireTime: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateAccessTokenRequest" });

export interface StopWorkstationRequest {
  /** Optional. If set, validate the request and preview the result, but do not actually apply it. */
  validateOnly?: boolean;
  /** Optional. If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag. */
  etag?: string;
}

export const StopWorkstationRequest: Schema.Codec<StopWorkstationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "StopWorkstationRequest" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Codec<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface GenerateAccessTokenResponse {
  /** Time at which the generated token will expire. */
  expireTime?: string;
  /** The generated bearer access token. To use this token, include it in an Authorization header of an HTTP request sent to the associated workstation's hostname—for example, `Authorization: Bearer `. */
  accessToken?: string;
}

export const GenerateAccessTokenResponse: Schema.Codec<GenerateAccessTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expireTime: Schema.optional(Schema.String),
    accessToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateAccessTokenResponse" });

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
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRequest>;

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
  ) as unknown as Schema.Codec<GetProjectsLocationsRequest>;

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
  ) as unknown as Schema.Codec<ListProjectsLocationsOperationsRequest>;

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
  ) as unknown as Schema.Codec<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
  ) as unknown as Schema.Codec<GetProjectsLocationsOperationsRequest>;

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
  ) as unknown as Schema.Codec<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = GoogleProtobufEmpty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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

export interface CreateProjectsLocationsWorkstationClustersRequest {
  /** Required. Parent resource name. */
  parent: string;
  /** Required. ID to use for the workstation cluster. */
  workstationClusterId?: string;
  /** Optional. If set, validate the request and preview the result, but do not actually apply it. */
  validateOnly?: boolean;
  /** Request body */
  body?: WorkstationCluster;
}

export const CreateProjectsLocationsWorkstationClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    workstationClusterId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("workstationClusterId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(WorkstationCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/workstationClusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsWorkstationClustersRequest>;

export type CreateProjectsLocationsWorkstationClustersResponse = Operation;
export const CreateProjectsLocationsWorkstationClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsWorkstationClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new workstation cluster. */
export const createProjectsLocationsWorkstationClusters: API.OperationMethod<
  CreateProjectsLocationsWorkstationClustersRequest,
  CreateProjectsLocationsWorkstationClustersResponse,
  CreateProjectsLocationsWorkstationClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsWorkstationClustersRequest,
  output: CreateProjectsLocationsWorkstationClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsWorkstationClustersRequest {
  /** Required. Name of the requested resource. */
  name: string;
}

export const GetProjectsLocationsWorkstationClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsWorkstationClustersRequest>;

export type GetProjectsLocationsWorkstationClustersResponse =
  WorkstationCluster;
export const GetProjectsLocationsWorkstationClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkstationCluster;

export type GetProjectsLocationsWorkstationClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the requested workstation cluster. */
export const getProjectsLocationsWorkstationClusters: API.OperationMethod<
  GetProjectsLocationsWorkstationClustersRequest,
  GetProjectsLocationsWorkstationClustersResponse,
  GetProjectsLocationsWorkstationClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsWorkstationClustersRequest,
  output: GetProjectsLocationsWorkstationClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsWorkstationClustersRequest {
  /** Identifier. Full name of this workstation cluster. */
  name: string;
  /** Required. Mask that specifies which fields in the workstation cluster should be updated. */
  updateMask?: string;
  /** Optional. If set, validate the request and preview the result, but do not actually apply it. */
  validateOnly?: boolean;
  /** Optional. If set, and the workstation cluster is not found, a new workstation cluster will be created. In this situation, update_mask is ignored. */
  allowMissing?: boolean;
  /** Request body */
  body?: WorkstationCluster;
}

export const PatchProjectsLocationsWorkstationClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    body: Schema.optional(WorkstationCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsWorkstationClustersRequest>;

export type PatchProjectsLocationsWorkstationClustersResponse = Operation;
export const PatchProjectsLocationsWorkstationClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsWorkstationClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing workstation cluster. */
export const patchProjectsLocationsWorkstationClusters: API.OperationMethod<
  PatchProjectsLocationsWorkstationClustersRequest,
  PatchProjectsLocationsWorkstationClustersResponse,
  PatchProjectsLocationsWorkstationClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsWorkstationClustersRequest,
  output: PatchProjectsLocationsWorkstationClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsWorkstationClustersRequest {
  /** Optional. Maximum number of items to return. */
  pageSize?: number;
  /** Optional. Filter the WorkstationClusters to be listed. Possible filters are described in https://google.aip.dev/160. */
  filter?: string;
  /** Required. Parent resource name. */
  parent: string;
  /** Optional. next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsWorkstationClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/workstationClusters" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsWorkstationClustersRequest>;

export type ListProjectsLocationsWorkstationClustersResponse =
  ListWorkstationClustersResponse;
export const ListProjectsLocationsWorkstationClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWorkstationClustersResponse;

export type ListProjectsLocationsWorkstationClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns all workstation clusters in the specified location. */
export const listProjectsLocationsWorkstationClusters: API.PaginatedOperationMethod<
  ListProjectsLocationsWorkstationClustersRequest,
  ListProjectsLocationsWorkstationClustersResponse,
  ListProjectsLocationsWorkstationClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsWorkstationClustersRequest,
  output: ListProjectsLocationsWorkstationClustersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsWorkstationClustersRequest {
  /** Optional. If set, validate the request and preview the result, but do not apply it. */
  validateOnly?: boolean;
  /** Optional. If set, the request will be rejected if the latest version of the workstation cluster on the server does not have this ETag. */
  etag?: string;
  /** Optional. If set, any workstation configurations and workstations in the workstation cluster are also deleted. Otherwise, the request only works if the workstation cluster has no configurations or workstations. */
  force?: boolean;
  /** Required. Name of the workstation cluster to delete. */
  name: string;
}

export const DeleteProjectsLocationsWorkstationClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsWorkstationClustersRequest>;

export type DeleteProjectsLocationsWorkstationClustersResponse = Operation;
export const DeleteProjectsLocationsWorkstationClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsWorkstationClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified workstation cluster. */
export const deleteProjectsLocationsWorkstationClusters: API.OperationMethod<
  DeleteProjectsLocationsWorkstationClustersRequest,
  DeleteProjectsLocationsWorkstationClustersResponse,
  DeleteProjectsLocationsWorkstationClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsWorkstationClustersRequest,
  output: DeleteProjectsLocationsWorkstationClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsWorkstationClustersWorkstationConfigsRequest {
  /** Required. Parent resource name. */
  parent: string;
  /** Optional. next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
  /** Optional. Maximum number of items to return. */
  pageSize?: number;
  /** Optional. Filter the WorkstationConfigs to be listed. Possible filters are described in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsWorkstationClustersWorkstationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/workstationConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsWorkstationClustersWorkstationConfigsRequest>;

export type ListProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  ListWorkstationConfigsResponse;
export const ListProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWorkstationConfigsResponse;

export type ListProjectsLocationsWorkstationClustersWorkstationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns all workstation configurations in the specified cluster. */
export const listProjectsLocationsWorkstationClustersWorkstationConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  ListProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  ListProjectsLocationsWorkstationClustersWorkstationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  output: ListProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsRequest>;

export type GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  Policy;
export const GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigs: API.OperationMethod<
  GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  output:
    GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsRequest =
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
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsRequest>;

export type TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigs: API.OperationMethod<
  TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  output:
    TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsWorkstationClustersWorkstationConfigsRequest {
  /** Identifier. Full name of this workstation configuration. */
  name: string;
  /** Optional. If set, validate the request and preview the result, but do not actually apply it. */
  validateOnly?: boolean;
  /** Optional. If set and the workstation configuration is not found, a new workstation configuration will be created. In this situation, update_mask is ignored. */
  allowMissing?: boolean;
  /** Required. Mask specifying which fields in the workstation configuration should be updated. */
  updateMask?: string;
  /** Request body */
  body?: WorkstationConfig;
}

export const PatchProjectsLocationsWorkstationClustersWorkstationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(WorkstationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsWorkstationClustersWorkstationConfigsRequest>;

export type PatchProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  Operation;
export const PatchProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsWorkstationClustersWorkstationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing workstation configuration. */
export const patchProjectsLocationsWorkstationClustersWorkstationConfigs: API.OperationMethod<
  PatchProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  PatchProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  PatchProjectsLocationsWorkstationClustersWorkstationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  output: PatchProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsRequest {
  /** Required. Parent resource name. */
  parent: string;
  /** Optional. next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
  /** Optional. Maximum number of items to return. */
  pageSize?: number;
}

export const ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/workstationConfigs:listUsable",
    }),
    svc,
  ) as unknown as Schema.Codec<ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsRequest>;

export type ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  ListUsableWorkstationConfigsResponse;
export const ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUsableWorkstationConfigsResponse;

export type ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission. */
export const listUsableProjectsLocationsWorkstationClustersWorkstationConfigs: API.PaginatedOperationMethod<
  ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  output:
    ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsWorkstationClustersWorkstationConfigsRequest {
  /** Optional. If set, validate the request and preview the result, but do not actually apply it. */
  validateOnly?: boolean;
  /** Optional. If set, the request is rejected if the latest version of the workstation configuration on the server does not have this ETag. */
  etag?: string;
  /** Optional. If set, any workstations in the workstation configuration are also deleted. Otherwise, the request works only if the workstation configuration has no workstations. */
  force?: boolean;
  /** Required. Name of the workstation configuration to delete. */
  name: string;
}

export const DeleteProjectsLocationsWorkstationClustersWorkstationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsWorkstationClustersWorkstationConfigsRequest>;

export type DeleteProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  Operation;
export const DeleteProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsWorkstationClustersWorkstationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified workstation configuration. */
export const deleteProjectsLocationsWorkstationClustersWorkstationConfigs: API.OperationMethod<
  DeleteProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  DeleteProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  DeleteProjectsLocationsWorkstationClustersWorkstationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  output: DeleteProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsRequest =
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
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsRequest>;

export type SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  Policy;
export const SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigs: API.OperationMethod<
  SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  output:
    SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsWorkstationClustersWorkstationConfigsRequest {
  /** Required. ID to use for the workstation configuration. */
  workstationConfigId?: string;
  /** Optional. If set, validate the request and preview the result, but do not actually apply it. */
  validateOnly?: boolean;
  /** Required. Parent resource name. */
  parent: string;
  /** Request body */
  body?: WorkstationConfig;
}

export const CreateProjectsLocationsWorkstationClustersWorkstationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workstationConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("workstationConfigId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(WorkstationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/workstationConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsWorkstationClustersWorkstationConfigsRequest>;

export type CreateProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  Operation;
export const CreateProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsWorkstationClustersWorkstationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new workstation configuration. */
export const createProjectsLocationsWorkstationClustersWorkstationConfigs: API.OperationMethod<
  CreateProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  CreateProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  CreateProjectsLocationsWorkstationClustersWorkstationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  output: CreateProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsWorkstationClustersWorkstationConfigsRequest {
  /** Required. Name of the requested resource. */
  name: string;
}

export const GetProjectsLocationsWorkstationClustersWorkstationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsWorkstationClustersWorkstationConfigsRequest>;

export type GetProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  WorkstationConfig;
export const GetProjectsLocationsWorkstationClustersWorkstationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkstationConfig;

export type GetProjectsLocationsWorkstationClustersWorkstationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the requested workstation configuration. */
export const getProjectsLocationsWorkstationClustersWorkstationConfigs: API.OperationMethod<
  GetProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  GetProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  GetProjectsLocationsWorkstationClustersWorkstationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsWorkstationClustersWorkstationConfigsRequest,
  output: GetProjectsLocationsWorkstationClustersWorkstationConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest {
  /** Required. Name of the requested resource. */
  name: string;
}

export const GetProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest>;

export type GetProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  Workstation;
export const GetProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Workstation;

export type GetProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the requested workstation. */
export const getProjectsLocationsWorkstationClustersWorkstationConfigsWorkstations: API.OperationMethod<
  GetProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  GetProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  GetProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GetProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  output:
    GetProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest {
  /** Required. ID to use for the workstation. */
  workstationId?: string;
  /** Optional. If set, validate the request and preview the result, but do not actually apply it. */
  validateOnly?: boolean;
  /** Required. Parent resource name. */
  parent: string;
  /** Request body */
  body?: Workstation;
}

export const CreateProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workstationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("workstationId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Workstation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/workstations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest>;

export type CreateProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  Operation;
export const CreateProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new workstation. */
export const createProjectsLocationsWorkstationClustersWorkstationConfigsWorkstations: API.OperationMethod<
  CreateProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  CreateProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  CreateProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    CreateProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  output:
    CreateProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StopProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest {
  /** Required. Name of the workstation to stop. */
  name: string;
  /** Request body */
  body?: StopWorkstationRequest;
}

export const StopProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StopWorkstationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<StopProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest>;

export type StopProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  Operation;
export const StopProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StopProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops running a workstation, reducing costs. */
export const stopProjectsLocationsWorkstationClustersWorkstationConfigsWorkstations: API.OperationMethod<
  StopProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  StopProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  StopProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    StopProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  output:
    StopProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest =
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
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest>;

export type SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  Policy;
export const SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstations: API.OperationMethod<
  SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  output:
    SetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest {
  /** Required. Parent resource name. */
  parent: string;
  /** Optional. next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
  /** Optional. Maximum number of items to return. */
  pageSize?: number;
}

export const ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/workstations:listUsable" }),
    svc,
  ) as unknown as Schema.Codec<ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest>;

export type ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  ListUsableWorkstationsResponse;
export const ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUsableWorkstationsResponse;

export type ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission. */
export const listUsableProjectsLocationsWorkstationClustersWorkstationConfigsWorkstations: API.PaginatedOperationMethod<
  ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  output:
    ListUsableProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest {
  /** Required. Name of the workstation to delete. */
  name: string;
  /** Optional. If set, validate the request and preview the result, but do not actually apply it. */
  validateOnly?: boolean;
  /** Optional. If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag. */
  etag?: string;
}

export const DeleteProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest>;

export type DeleteProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  Operation;
export const DeleteProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified workstation. */
export const deleteProjectsLocationsWorkstationClustersWorkstationConfigsWorkstations: API.OperationMethod<
  DeleteProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  DeleteProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  DeleteProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    DeleteProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  output:
    DeleteProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest {
  /** Required. Name of the workstation to start. */
  name: string;
  /** Request body */
  body?: StartWorkstationRequest;
}

export const StartProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StartWorkstationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:start", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<StartProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest>;

export type StartProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  Operation;
export const StartProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StartProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts running a workstation so that users can connect to it. */
export const startProjectsLocationsWorkstationClustersWorkstationConfigsWorkstations: API.OperationMethod<
  StartProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  StartProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  StartProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    StartProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  output:
    StartProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest {
  /** Required. Mask specifying which fields in the workstation should be updated. */
  updateMask?: string;
  /** Optional. If set, validate the request and preview the result, but do not actually apply it. */
  validateOnly?: boolean;
  /** Optional. If set and the workstation is not found, a new workstation is created. In this situation, update_mask is ignored. */
  allowMissing?: boolean;
  /** Identifier. Full name of this workstation. */
  name: string;
  /** Request body */
  body?: Workstation;
}

export const PatchProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Workstation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest>;

export type PatchProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  Operation;
export const PatchProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing workstation. */
export const patchProjectsLocationsWorkstationClustersWorkstationConfigsWorkstations: API.OperationMethod<
  PatchProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  PatchProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  PatchProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    PatchProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  output:
    PatchProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest =
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
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest>;

export type TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstations: API.OperationMethod<
  TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  output:
    TestIamPermissionsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateAccessTokenProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest {
  /** Required. Name of the workstation for which the access token should be generated. */
  workstation: string;
  /** Request body */
  body?: GenerateAccessTokenRequest;
}

export const GenerateAccessTokenProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workstation: Schema.String.pipe(T.HttpPath("workstation")),
    body: Schema.optional(GenerateAccessTokenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+workstation}:generateAccessToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GenerateAccessTokenProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest>;

export type GenerateAccessTokenProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  GenerateAccessTokenResponse;
export const GenerateAccessTokenProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateAccessTokenResponse;

export type GenerateAccessTokenProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation. Once generated this token cannot be revoked and is good for the lifetime of the token. */
export const generateAccessTokenProjectsLocationsWorkstationClustersWorkstationConfigsWorkstations: API.OperationMethod<
  GenerateAccessTokenProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  GenerateAccessTokenProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  GenerateAccessTokenProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GenerateAccessTokenProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  output:
    GenerateAccessTokenProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest {
  /** Required. Parent resource name. */
  parent: string;
  /** Optional. next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
  /** Optional. Maximum number of items to return. */
  pageSize?: number;
  /** Optional. Filter the Workstations to be listed. Possible filters are described in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/workstations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest>;

export type ListProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  ListWorkstationsResponse;
export const ListProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWorkstationsResponse;

export type ListProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns all Workstations using the specified workstation configuration. */
export const listProjectsLocationsWorkstationClustersWorkstationConfigsWorkstations: API.PaginatedOperationMethod<
  ListProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  ListProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  ListProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    ListProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  output:
    ListProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest>;

export type GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  Policy;
export const GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstations: API.OperationMethod<
  GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsRequest,
  output:
    GetIamPolicyProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsResponse,
  errors: [NotFound, Forbidden],
}));
