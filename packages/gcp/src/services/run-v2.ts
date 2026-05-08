// ==========================================================================
// Cloud Run Admin API (run v2)
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
  name: "run",
  version: "v2",
  rootUrl: "https://run.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudRunV2NetworkInterface {
  /** Optional. The VPC subnetwork that the Cloud Run resource will get IPs from. At least one of network or subnetwork must be specified. If both network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the subnetwork with the same name with the network will be used. */
  subnetwork?: string;
  /** Optional. Network tags applied to this Cloud Run resource. */
  tags?: ReadonlyArray<string>;
  /** Optional. The VPC network that the Cloud Run resource will be able to send traffic to. At least one of network or subnetwork must be specified. If both network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be looked up from the subnetwork. */
  network?: string;
}

export const GoogleCloudRunV2NetworkInterface: Schema.Schema<GoogleCloudRunV2NetworkInterface> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnetwork: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    network: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2NetworkInterface" });

export interface GoogleCloudRunV2VpcAccess {
  /** Optional. Traffic VPC egress settings. If not provided, it defaults to PRIVATE_RANGES_ONLY. */
  egress?:
    | "VPC_EGRESS_UNSPECIFIED"
    | "ALL_TRAFFIC"
    | "PRIVATE_RANGES_ONLY"
    | (string & {});
  /** Optional. Direct VPC egress settings. Currently only single network interface is supported. */
  networkInterfaces?: ReadonlyArray<GoogleCloudRunV2NetworkInterface>;
  /** VPC Access connector name. Format: `projects/{project}/locations/{location}/connectors/{connector}`, where `{project}` can be project id or number. For more information on sending traffic to a VPC network via a connector, visit https://cloud.google.com/run/docs/configuring/vpc-connectors. */
  connector?: string;
}

export const GoogleCloudRunV2VpcAccess: Schema.Schema<GoogleCloudRunV2VpcAccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    egress: Schema.optional(Schema.String),
    networkInterfaces: Schema.optional(
      Schema.Array(GoogleCloudRunV2NetworkInterface),
    ),
    connector: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2VpcAccess" });

export interface GoogleCloudRunV2BuildInfo {
  /** Output only. Entry point of the function when the image is a Cloud Run function. */
  functionTarget?: string;
  /** Output only. Source code location of the image. */
  sourceLocation?: string;
}

export const GoogleCloudRunV2BuildInfo: Schema.Schema<GoogleCloudRunV2BuildInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    functionTarget: Schema.optional(Schema.String),
    sourceLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2BuildInfo" });

export interface GoogleCloudRunV2ContainerPort {
  /** Port number the container listens on. This must be a valid TCP port number, 0 < container_port < 65536. */
  containerPort?: number;
  /** If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". */
  name?: string;
}

export const GoogleCloudRunV2ContainerPort: Schema.Schema<GoogleCloudRunV2ContainerPort> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerPort: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2ContainerPort" });

export interface GoogleCloudRunV2CloudStorageSource {
  /** Optional. The Cloud Storage object generation. */
  generation?: string;
  /** Required. The Cloud Storage object name. */
  object?: string;
  /** Required. The Cloud Storage bucket name. */
  bucket?: string;
}

export const GoogleCloudRunV2CloudStorageSource: Schema.Schema<GoogleCloudRunV2CloudStorageSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generation: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
    bucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2CloudStorageSource" });

export interface GoogleCloudRunV2SourceFile {
  /** Required. Input only. The file name for the source code. e.g., `"index.js"` or `"node_modules/dependency.js"`. The filename must be less than 255 characters and cannot contain `..`, `./`, `//`, or end with a `/`. Cloud Run will place the files in the container subdirectories, please use relative path to access the file. */
  filename?: string;
  /** Required. Input only. Represents the exact, literal, and complete source code of the file. Placeholders like `...` or comments such as `# [rest of code]` should NEVER be used as omission. Every character in this field will be built into the final container. Any omission will result in a broken application. */
  content?: string;
}

export const GoogleCloudRunV2SourceFile: Schema.Schema<GoogleCloudRunV2SourceFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filename: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2SourceFile" });

export interface GoogleCloudRunV2InlinedSource {
  /** Required. Input only. The source code. */
  sources?: ReadonlyArray<GoogleCloudRunV2SourceFile>;
}

export const GoogleCloudRunV2InlinedSource: Schema.Schema<GoogleCloudRunV2InlinedSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(Schema.Array(GoogleCloudRunV2SourceFile)),
  }).annotate({ identifier: "GoogleCloudRunV2InlinedSource" });

export interface GoogleCloudRunV2SourceCode {
  /** The source is a Cloud Storage bucket. */
  cloudStorageSource?: GoogleCloudRunV2CloudStorageSource;
  /** Optional. Input only. Source code inlined in the request. Cloud Run will store the inlined_source to Cloud Storage and replace the field with cloud_storage_source. */
  inlinedSource?: GoogleCloudRunV2InlinedSource;
}

export const GoogleCloudRunV2SourceCode: Schema.Schema<GoogleCloudRunV2SourceCode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudStorageSource: Schema.optional(GoogleCloudRunV2CloudStorageSource),
    inlinedSource: Schema.optional(GoogleCloudRunV2InlinedSource),
  }).annotate({ identifier: "GoogleCloudRunV2SourceCode" });

export interface GoogleCloudRunV2GRPCAction {
  /** Optional. Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort. */
  port?: number;
  /** Optional. Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC. */
  service?: string;
}

export const GoogleCloudRunV2GRPCAction: Schema.Schema<GoogleCloudRunV2GRPCAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2GRPCAction" });

export interface GoogleCloudRunV2HTTPHeader {
  /** Required. The header field name */
  name?: string;
  /** Optional. The header field value */
  value?: string;
}

export const GoogleCloudRunV2HTTPHeader: Schema.Schema<GoogleCloudRunV2HTTPHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2HTTPHeader" });

export interface GoogleCloudRunV2HTTPGetAction {
  /** Optional. Custom headers to set in the request. HTTP allows repeated headers. */
  httpHeaders?: ReadonlyArray<GoogleCloudRunV2HTTPHeader>;
  /** Optional. Path to access on the HTTP server. Defaults to '/'. */
  path?: string;
  /** Optional. Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort. */
  port?: number;
}

export const GoogleCloudRunV2HTTPGetAction: Schema.Schema<GoogleCloudRunV2HTTPGetAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    httpHeaders: Schema.optional(Schema.Array(GoogleCloudRunV2HTTPHeader)),
    path: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudRunV2HTTPGetAction" });

export interface GoogleCloudRunV2TCPSocketAction {
  /** Optional. Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort. */
  port?: number;
}

export const GoogleCloudRunV2TCPSocketAction: Schema.Schema<GoogleCloudRunV2TCPSocketAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudRunV2TCPSocketAction" });

export interface GoogleCloudRunV2Probe {
  /** Optional. Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
  failureThreshold?: number;
  /** Optional. How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds. */
  periodSeconds?: number;
  /** Optional. GRPC specifies an action involving a gRPC port. Exactly one of httpGet, tcpSocket, or grpc must be specified. */
  grpc?: GoogleCloudRunV2GRPCAction;
  /** Optional. HTTPGet specifies the http request to perform. Exactly one of httpGet, tcpSocket, or grpc must be specified. */
  httpGet?: GoogleCloudRunV2HTTPGetAction;
  /** Optional. Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds. */
  timeoutSeconds?: number;
  /** Optional. Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. */
  initialDelaySeconds?: number;
  /** Optional. TCPSocket specifies an action involving a TCP port. Exactly one of httpGet, tcpSocket, or grpc must be specified. */
  tcpSocket?: GoogleCloudRunV2TCPSocketAction;
}

export const GoogleCloudRunV2Probe: Schema.Schema<GoogleCloudRunV2Probe> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failureThreshold: Schema.optional(Schema.Number),
    periodSeconds: Schema.optional(Schema.Number),
    grpc: Schema.optional(GoogleCloudRunV2GRPCAction),
    httpGet: Schema.optional(GoogleCloudRunV2HTTPGetAction),
    timeoutSeconds: Schema.optional(Schema.Number),
    initialDelaySeconds: Schema.optional(Schema.Number),
    tcpSocket: Schema.optional(GoogleCloudRunV2TCPSocketAction),
  }).annotate({ identifier: "GoogleCloudRunV2Probe" });

export interface GoogleCloudRunV2ResourceRequirements {
  /** Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency. */
  startupCpuBoost?: boolean;
  /** Determines whether CPU is only allocated during requests (true by default). However, if ResourceRequirements is set, the caller must explicitly set this field to true to preserve the default behavior. */
  cpuIdle?: boolean;
  /** Only `memory`, `cpu` and `nvidia.com/gpu` keys in the map are supported. Notes: * The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. For more information, go to https://cloud.google.com/run/docs/configuring/cpu. * For supported 'memory' values and syntax, go to https://cloud.google.com/run/docs/configuring/memory-limits * The only supported 'nvidia.com/gpu' value is '1'. */
  limits?: Record<string, string>;
}

export const GoogleCloudRunV2ResourceRequirements: Schema.Schema<GoogleCloudRunV2ResourceRequirements> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startupCpuBoost: Schema.optional(Schema.Boolean),
    cpuIdle: Schema.optional(Schema.Boolean),
    limits: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudRunV2ResourceRequirements" });

export interface GoogleCloudRunV2VolumeMount {
  /** Required. This must match the Name of a Volume. */
  name?: string;
  /** Required. Path within the container at which the volume should be mounted. Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be `/cloudsql`. All instances defined in the Volume will be available as `/cloudsql/[instance]`. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run */
  mountPath?: string;
  /** Optional. Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). This field is currently rejected in Secret volume mounts. */
  subPath?: string;
}

export const GoogleCloudRunV2VolumeMount: Schema.Schema<GoogleCloudRunV2VolumeMount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    mountPath: Schema.optional(Schema.String),
    subPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2VolumeMount" });

export interface GoogleCloudRunV2SecretKeySelector {
  /** The Cloud Secret Manager secret version. Can be 'latest' for the latest version, an integer for a specific version, or a version alias. */
  version?: string;
  /** Required. The name of the secret in Cloud Secret Manager. Format: {secret_name} if the secret is in the same project. projects/{project}/secrets/{secret_name} if the secret is in a different project. */
  secret?: string;
}

export const GoogleCloudRunV2SecretKeySelector: Schema.Schema<GoogleCloudRunV2SecretKeySelector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    secret: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2SecretKeySelector" });

export interface GoogleCloudRunV2EnvVarSource {
  /** Selects a secret and a specific version from Cloud Secret Manager. */
  secretKeyRef?: GoogleCloudRunV2SecretKeySelector;
}

export const GoogleCloudRunV2EnvVarSource: Schema.Schema<GoogleCloudRunV2EnvVarSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretKeyRef: Schema.optional(GoogleCloudRunV2SecretKeySelector),
  }).annotate({ identifier: "GoogleCloudRunV2EnvVarSource" });

export interface GoogleCloudRunV2EnvVar {
  /** Required. Name of the environment variable. Must not exceed 32768 characters. */
  name?: string;
  /** Literal value of the environment variable. Defaults to "", and the maximum length is 32768 bytes. Variable references are not supported in Cloud Run. */
  value?: string;
  /** Source for the environment variable's value. */
  valueSource?: GoogleCloudRunV2EnvVarSource;
}

export const GoogleCloudRunV2EnvVar: Schema.Schema<GoogleCloudRunV2EnvVar> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    valueSource: Schema.optional(GoogleCloudRunV2EnvVarSource),
  }).annotate({ identifier: "GoogleCloudRunV2EnvVar" });

export interface GoogleCloudRunV2Container {
  /** Output only. The build info of the container image. */
  buildInfo?: GoogleCloudRunV2BuildInfo;
  /** Required. Name of the container image in Dockerhub, Google Artifact Registry, or Google Container Registry. If the host is not provided, Dockerhub is assumed. */
  image?: string;
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. */
  args?: ReadonlyArray<string>;
  /** List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible. If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on. */
  ports?: ReadonlyArray<GoogleCloudRunV2ContainerPort>;
  /** Name of the container specified as a DNS_LABEL (RFC 1123). */
  name?: string;
  /** Optional. Location of the source. */
  sourceCode?: GoogleCloudRunV2SourceCode;
  /** Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not be added to service endpoints if the probe fails. */
  startupProbe?: GoogleCloudRunV2Probe;
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. */
  command?: ReadonlyArray<string>;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. */
  workingDir?: string;
  /** Names of the containers that must start before this container. */
  dependsOn?: ReadonlyArray<string>;
  /** Base image for this container. Only supported for services. If set, it indicates that the service is enrolled into automatic base image update. */
  baseImageUri?: string;
  /** Compute Resource requirements by this container. */
  resources?: GoogleCloudRunV2ResourceRequirements;
  /** Volume to mount into the container's filesystem. */
  volumeMounts?: ReadonlyArray<GoogleCloudRunV2VolumeMount>;
  /** Readiness probe to be used for health checks. */
  readinessProbe?: GoogleCloudRunV2Probe;
  /** List of environment variables to set in the container. */
  env?: ReadonlyArray<GoogleCloudRunV2EnvVar>;
  /** Periodic probe of container liveness. Container will be restarted if the probe fails. */
  livenessProbe?: GoogleCloudRunV2Probe;
}

export const GoogleCloudRunV2Container: Schema.Schema<GoogleCloudRunV2Container> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buildInfo: Schema.optional(GoogleCloudRunV2BuildInfo),
    image: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    ports: Schema.optional(Schema.Array(GoogleCloudRunV2ContainerPort)),
    name: Schema.optional(Schema.String),
    sourceCode: Schema.optional(GoogleCloudRunV2SourceCode),
    startupProbe: Schema.optional(GoogleCloudRunV2Probe),
    command: Schema.optional(Schema.Array(Schema.String)),
    workingDir: Schema.optional(Schema.String),
    dependsOn: Schema.optional(Schema.Array(Schema.String)),
    baseImageUri: Schema.optional(Schema.String),
    resources: Schema.optional(GoogleCloudRunV2ResourceRequirements),
    volumeMounts: Schema.optional(Schema.Array(GoogleCloudRunV2VolumeMount)),
    readinessProbe: Schema.optional(GoogleCloudRunV2Probe),
    env: Schema.optional(Schema.Array(GoogleCloudRunV2EnvVar)),
    livenessProbe: Schema.optional(GoogleCloudRunV2Probe),
  }).annotate({ identifier: "GoogleCloudRunV2Container" });

export interface GoogleCloudRunV2NFSVolumeSource {
  /** Hostname or IP address of the NFS server */
  server?: string;
  /** If true, the volume will be mounted as read only for all mounts. */
  readOnly?: boolean;
  /** Path that is exported by the NFS server. */
  path?: string;
}

export const GoogleCloudRunV2NFSVolumeSource: Schema.Schema<GoogleCloudRunV2NFSVolumeSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    server: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2NFSVolumeSource" });

export interface GoogleCloudRunV2EmptyDirVolumeSource {
  /** Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers. The default is nil which means that the limit is undefined. More info: https://cloud.google.com/run/docs/configuring/in-memory-volumes#configure-volume. Info in Kubernetes: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir */
  sizeLimit?: string;
  /** The medium on which the data is stored. Acceptable values today is only MEMORY or none. When none, the default will currently be backed by memory but could change over time. +optional */
  medium?: "MEDIUM_UNSPECIFIED" | "MEMORY" | "DISK" | (string & {});
}

export const GoogleCloudRunV2EmptyDirVolumeSource: Schema.Schema<GoogleCloudRunV2EmptyDirVolumeSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sizeLimit: Schema.optional(Schema.String),
    medium: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2EmptyDirVolumeSource" });

export interface GoogleCloudRunV2VersionToPath {
  /** The Cloud Secret Manager secret version. Can be 'latest' for the latest value, or an integer or a secret alias for a specific version. */
  version?: string;
  /** Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  mode?: number;
  /** Required. The relative path of the secret in the container. */
  path?: string;
}

export const GoogleCloudRunV2VersionToPath: Schema.Schema<GoogleCloudRunV2VersionToPath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.Number),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2VersionToPath" });

export interface GoogleCloudRunV2SecretVolumeSource {
  /** Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. This might be in conflict with other options that affect the file mode, like fsGroup, and as a result, other mode bits could be set. */
  defaultMode?: number;
  /** Required. The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project. */
  secret?: string;
  /** If unspecified, the volume will expose a file whose name is the secret, relative to VolumeMount.mount_path + VolumeMount.sub_path. If specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify a path and a version. */
  items?: ReadonlyArray<GoogleCloudRunV2VersionToPath>;
}

export const GoogleCloudRunV2SecretVolumeSource: Schema.Schema<GoogleCloudRunV2SecretVolumeSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultMode: Schema.optional(Schema.Number),
    secret: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(GoogleCloudRunV2VersionToPath)),
  }).annotate({ identifier: "GoogleCloudRunV2SecretVolumeSource" });

export interface GoogleCloudRunV2CloudSqlInstance {
  /** A list of Cloud SQL instance connection names. Cloud Run uses these to establish connections to the specified Cloud SQL instances. While the SQL instance name itself is unique within a project, the full connection name requires the location for proper routing. Format: `{project}:{location}:{instance}` Example: `my-project:us-central1:my-instance` You can find this value on the instance's **Overview** page in the Google Cloud console or by using the following `gcloud` command: ```sh gcloud sql instances describe INSTANCE_NAME \ --format='value(connectionName)' ``` Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. */
  instances?: ReadonlyArray<string>;
}

export const GoogleCloudRunV2CloudSqlInstance: Schema.Schema<GoogleCloudRunV2CloudSqlInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instances: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudRunV2CloudSqlInstance" });

export interface GoogleCloudRunV2GCSVolumeSource {
  /** If true, the volume will be mounted as read only for all mounts. */
  readOnly?: boolean;
  /** A list of additional flags to pass to the gcsfuse CLI. Options should be specified without the leading "--". */
  mountOptions?: ReadonlyArray<string>;
  /** Cloud Storage Bucket name. */
  bucket?: string;
}

export const GoogleCloudRunV2GCSVolumeSource: Schema.Schema<GoogleCloudRunV2GCSVolumeSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readOnly: Schema.optional(Schema.Boolean),
    mountOptions: Schema.optional(Schema.Array(Schema.String)),
    bucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2GCSVolumeSource" });

export interface GoogleCloudRunV2Volume {
  /** For NFS Voumes, contains the path to the nfs Volume */
  nfs?: GoogleCloudRunV2NFSVolumeSource;
  /** Required. Volume's name. */
  name?: string;
  /** Ephemeral storage used as a shared volume. */
  emptyDir?: GoogleCloudRunV2EmptyDirVolumeSource;
  /** Secret represents a secret that should populate this volume. */
  secret?: GoogleCloudRunV2SecretVolumeSource;
  /** For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. */
  cloudSqlInstance?: GoogleCloudRunV2CloudSqlInstance;
  /** Persistent storage backed by a Google Cloud Storage bucket. */
  gcs?: GoogleCloudRunV2GCSVolumeSource;
}

export const GoogleCloudRunV2Volume: Schema.Schema<GoogleCloudRunV2Volume> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nfs: Schema.optional(GoogleCloudRunV2NFSVolumeSource),
    name: Schema.optional(Schema.String),
    emptyDir: Schema.optional(GoogleCloudRunV2EmptyDirVolumeSource),
    secret: Schema.optional(GoogleCloudRunV2SecretVolumeSource),
    cloudSqlInstance: Schema.optional(GoogleCloudRunV2CloudSqlInstance),
    gcs: Schema.optional(GoogleCloudRunV2GCSVolumeSource),
  }).annotate({ identifier: "GoogleCloudRunV2Volume" });

export interface GoogleCloudRunV2ServiceMesh {
  /** The Mesh resource name. Format: `projects/{project}/locations/global/meshes/{mesh}`, where `{project}` can be project id or number. */
  mesh?: string;
}

export const GoogleCloudRunV2ServiceMesh: Schema.Schema<GoogleCloudRunV2ServiceMesh> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mesh: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2ServiceMesh" });

export interface GoogleCloudRunV2NodeSelector {
  /** Required. GPU accelerator type to attach to an instance. */
  accelerator?: string;
}

export const GoogleCloudRunV2NodeSelector: Schema.Schema<GoogleCloudRunV2NodeSelector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accelerator: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2NodeSelector" });

export interface GoogleCloudRunV2RevisionScaling {
  /** Optional. Maximum number of serving instances that this resource should have. When unspecified, the field is set to the server default value of 100. For more information see https://cloud.google.com/run/docs/configuring/max-instances */
  maxInstanceCount?: number;
  /** Optional. Determines a threshold for CPU utilization before scaling begins. Accepted values are between `0.1` and `0.95` (inclusive) or `0.0` to disable CPU utilization as threshold for scaling. CPU and concurrency scaling cannot both be disabled. */
  cpuUtilization?: number;
  /** Optional. Determines a threshold for concurrency utilization before scaling begins. Accepted values are between `0.1` and `0.95` (inclusive) or `0.0` to disable concurrency utilization as threshold for scaling. CPU and concurrency scaling cannot both be disabled. */
  concurrencyUtilization?: number;
  /** Optional. Minimum number of serving instances that this resource should have. */
  minInstanceCount?: number;
}

export const GoogleCloudRunV2RevisionScaling: Schema.Schema<GoogleCloudRunV2RevisionScaling> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxInstanceCount: Schema.optional(Schema.Number),
    cpuUtilization: Schema.optional(Schema.Number),
    concurrencyUtilization: Schema.optional(Schema.Number),
    minInstanceCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudRunV2RevisionScaling" });

export interface GoogleCloudRunV2RevisionTemplate {
  /** Optional. VPC Access configuration to use for this Revision. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. */
  vpcAccess?: GoogleCloudRunV2VpcAccess;
  /** Optional. Max allowed time for an instance to respond to a request. */
  timeout?: string;
  /** Holds the list which define the units of execution for this Revision. */
  containers?: ReadonlyArray<GoogleCloudRunV2Container>;
  /** Optional. A list of Volumes to make available to containers. */
  volumes?: ReadonlyArray<GoogleCloudRunV2Volume>;
  /** Optional. Enables service mesh connectivity. */
  serviceMesh?: GoogleCloudRunV2ServiceMesh;
  /** Optional. Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account. */
  serviceAccount?: string;
  /** Optional. The node selector for the revision template. */
  nodeSelector?: GoogleCloudRunV2NodeSelector;
  /** Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 RevisionTemplate. */
  labels?: Record<string, string>;
  /** Optional. True if GPU zonal redundancy is disabled on this revision. */
  gpuZonalRedundancyDisabled?: boolean;
  /** Optional. Enable session affinity. */
  sessionAffinity?: boolean;
  /** Optional. The sandbox environment to host this Revision. */
  executionEnvironment?:
    | "EXECUTION_ENVIRONMENT_UNSPECIFIED"
    | "EXECUTION_ENVIRONMENT_GEN1"
    | "EXECUTION_ENVIRONMENT_GEN2"
    | (string & {});
  /** A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
  encryptionKey?: string;
  /** Optional. Sets the maximum number of requests that each serving instance can receive. If not specified or 0, concurrency defaults to 80 when requested `CPU >= 1` and defaults to 1 when requested `CPU < 1`. */
  maxInstanceRequestConcurrency?: number;
  /** Optional. Arbitrary identifier for the API client. */
  client?: string;
  /** Optional. Arbitrary version identifier for the API client. */
  clientVersion?: string;
  /** Optional. Disables health checking containers during deployment. */
  healthCheckDisabled?: boolean;
  /** Optional. Scaling settings for this Revision. */
  scaling?: GoogleCloudRunV2RevisionScaling;
  /** Optional. The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name. */
  revision?: string;
  /** Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 RevisionTemplate. This field follows Kubernetes annotations' namespacing, limits, and rules. */
  annotations?: Record<string, string>;
  /** Optional. The action to take if the encryption key is revoked. */
  encryptionKeyRevocationAction?:
    | "ENCRYPTION_KEY_REVOCATION_ACTION_UNSPECIFIED"
    | "PREVENT_NEW"
    | "SHUTDOWN"
    | (string & {});
  /** Optional. If encryption_key_revocation_action is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour. */
  encryptionKeyShutdownDuration?: string;
}

export const GoogleCloudRunV2RevisionTemplate: Schema.Schema<GoogleCloudRunV2RevisionTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcAccess: Schema.optional(GoogleCloudRunV2VpcAccess),
    timeout: Schema.optional(Schema.String),
    containers: Schema.optional(Schema.Array(GoogleCloudRunV2Container)),
    volumes: Schema.optional(Schema.Array(GoogleCloudRunV2Volume)),
    serviceMesh: Schema.optional(GoogleCloudRunV2ServiceMesh),
    serviceAccount: Schema.optional(Schema.String),
    nodeSelector: Schema.optional(GoogleCloudRunV2NodeSelector),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    gpuZonalRedundancyDisabled: Schema.optional(Schema.Boolean),
    sessionAffinity: Schema.optional(Schema.Boolean),
    executionEnvironment: Schema.optional(Schema.String),
    encryptionKey: Schema.optional(Schema.String),
    maxInstanceRequestConcurrency: Schema.optional(Schema.Number),
    client: Schema.optional(Schema.String),
    clientVersion: Schema.optional(Schema.String),
    healthCheckDisabled: Schema.optional(Schema.Boolean),
    scaling: Schema.optional(GoogleCloudRunV2RevisionScaling),
    revision: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    encryptionKeyRevocationAction: Schema.optional(Schema.String),
    encryptionKeyShutdownDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2RevisionTemplate" });

export interface GoogleCloudRunV2StopInstanceRequest {
  /** Optional. Indicates that the request should be validated without actually stopping any resources. */
  validateOnly?: boolean;
  /** Optional. A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates. */
  etag?: string;
}

export const GoogleCloudRunV2StopInstanceRequest: Schema.Schema<GoogleCloudRunV2StopInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2StopInstanceRequest" });

export interface GoogleDevtoolsCloudbuildV1Secret {
  /** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
  secretEnv?: Record<string, string>;
  /** Cloud KMS key name to use to decrypt these envs. */
  kmsKeyName?: string;
}

export const GoogleDevtoolsCloudbuildV1Secret: Schema.Schema<GoogleDevtoolsCloudbuildV1Secret> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretEnv: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    kmsKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Secret" });

export interface GoogleDevtoolsCloudbuildV1RepoSource {
  /** Optional. ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. */
  projectId?: string;
  /** Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
  tagName?: string;
  /** Explicit commit SHA to build. */
  commitSha?: string;
  /** Optional. Substitutions to use in a triggered build. Should only be used with RunBuildTrigger */
  substitutions?: Record<string, string>;
  /** Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
  branchName?: string;
  /** Optional. Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
  dir?: string;
  /** Required. Name of the Cloud Source Repository. */
  repoName?: string;
  /** Optional. Only trigger a build if the revision regex does NOT match the revision regex. */
  invertRegex?: boolean;
}

export const GoogleDevtoolsCloudbuildV1RepoSource: Schema.Schema<GoogleDevtoolsCloudbuildV1RepoSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    tagName: Schema.optional(Schema.String),
    commitSha: Schema.optional(Schema.String),
    substitutions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    branchName: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
    repoName: Schema.optional(Schema.String),
    invertRegex: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1RepoSource" });

export interface GoogleDevtoolsCloudbuildV1StepResult {
  /** Required. The name of the result. */
  name?: string;
  /** Optional. The content of the attestation to be generated. */
  attestationContent?: string;
  /** Optional. The type of attestation to be generated. */
  attestationType?: string;
}

export const GoogleDevtoolsCloudbuildV1StepResult: Schema.Schema<GoogleDevtoolsCloudbuildV1StepResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attestationContent: Schema.optional(Schema.String),
    attestationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1StepResult" });

export interface GoogleCloudRunV2Condition {
  /** type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * "Ready": True when the Resource is ready. */
  type?: string;
  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?: string;
  /** Output only. A common (service-level) reason for this condition. */
  reason?:
    | "COMMON_REASON_UNDEFINED"
    | "UNKNOWN"
    | "REVISION_FAILED"
    | "PROGRESS_DEADLINE_EXCEEDED"
    | "CONTAINER_MISSING"
    | "CONTAINER_PERMISSION_DENIED"
    | "CONTAINER_IMAGE_UNAUTHORIZED"
    | "CONTAINER_IMAGE_AUTHORIZATION_CHECK_FAILED"
    | "ENCRYPTION_KEY_PERMISSION_DENIED"
    | "ENCRYPTION_KEY_CHECK_FAILED"
    | "SECRETS_ACCESS_CHECK_FAILED"
    | "WAITING_FOR_OPERATION"
    | "IMMEDIATE_RETRY"
    | "POSTPONED_RETRY"
    | "INTERNAL"
    | "VPC_NETWORK_NOT_FOUND"
    | (string & {});
  /** Output only. A reason for the revision condition. */
  revisionReason?:
    | "REVISION_REASON_UNDEFINED"
    | "PENDING"
    | "RESERVE"
    | "RETIRED"
    | "RETIRING"
    | "RECREATING"
    | "HEALTH_CHECK_CONTAINER_ERROR"
    | "CUSTOMIZED_PATH_RESPONSE_PENDING"
    | "MIN_INSTANCES_NOT_PROVISIONED"
    | "ACTIVE_REVISION_LIMIT_REACHED"
    | "NO_DEPLOYMENT"
    | "HEALTH_CHECK_SKIPPED"
    | "MIN_INSTANCES_WARMING"
    | (string & {});
  /** State of the condition. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CONDITION_PENDING"
    | "CONDITION_RECONCILING"
    | "CONDITION_FAILED"
    | "CONDITION_SUCCEEDED"
    | (string & {});
  /** Human readable message indicating details about the current status. */
  message?: string;
  /** How to interpret failures of this condition, one of Error, Warning, Info */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "ERROR"
    | "WARNING"
    | "INFO"
    | (string & {});
  /** Output only. A reason for the execution condition. */
  executionReason?:
    | "EXECUTION_REASON_UNDEFINED"
    | "JOB_STATUS_SERVICE_POLLING_ERROR"
    | "NON_ZERO_EXIT_CODE"
    | "CANCELLED"
    | "CANCELLING"
    | "DELETED"
    | "DELAYED_START_PENDING"
    | (string & {});
}

export const GoogleCloudRunV2Condition: Schema.Schema<GoogleCloudRunV2Condition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    lastTransitionTime: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    revisionReason: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    executionReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2Condition" });

export interface GoogleRpcStatus {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const GoogleRpcStatus: Schema.Schema<GoogleRpcStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface GoogleCloudRunV2TaskAttemptResult {
  /** Output only. The exit code of this attempt. This may be unset if the container was unable to exit cleanly with a code due to some other failure. See status field for possible failure details. At most one of exit_code or term_signal will be set. */
  exitCode?: number;
  /** Output only. The status of this attempt. If the status code is OK, then the attempt succeeded. */
  status?: GoogleRpcStatus;
  /** Output only. Termination signal of the container. This is set to non-zero if the container is terminated by the system. At most one of exit_code or term_signal will be set. */
  termSignal?: number;
}

export const GoogleCloudRunV2TaskAttemptResult: Schema.Schema<GoogleCloudRunV2TaskAttemptResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exitCode: Schema.optional(Schema.Number),
    status: Schema.optional(GoogleRpcStatus),
    termSignal: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudRunV2TaskAttemptResult" });

export interface GoogleCloudRunV2Task {
  /** Holds the single container that defines the unit of execution for this task. */
  containers?: ReadonlyArray<GoogleCloudRunV2Container>;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Output only. VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. */
  vpcAccess?: GoogleCloudRunV2VpcAccess;
  /** Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
  etag?: string;
  /** Output only. The number of times this Task was retried. Tasks are retried when they fail up to the maxRetries limit. */
  retried?: number;
  /** Output only. Represents time when the task was created by the system. It is not guaranteed to be set in happens-before order across separate operations. */
  createTime?: string;
  /** Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request. */
  expireTime?: string;
  /** Optional. Output only. True if GPU zonal redundancy is disabled on this task. */
  gpuZonalRedundancyDisabled?: boolean;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. URI where logs for this execution can be found in Cloud Console. */
  logUri?: string;
  /** A list of Volumes to make available to containers. */
  volumes?: ReadonlyArray<GoogleCloudRunV2Volume>;
  /** Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. */
  timeout?: string;
  /** Number of retries allowed per Task, before marking this Task failed. */
  maxRetries?: number;
  /** Output only. The generation of this Task. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run. */
  observedGeneration?: string;
  /** Output only. Server assigned unique identifier for the Task. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
  uid?: string;
  /** Output only. Represents time when the task was scheduled to run by the system. It is not guaranteed to be set in happens-before order across separate operations. */
  scheduledTime?: string;
  /** Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request. */
  deleteTime?: string;
  /** Output only. The name of the parent Execution. */
  execution?: string;
  /** Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account. */
  serviceAccount?: string;
  /** Output only. The node selector for the task. */
  nodeSelector?: GoogleCloudRunV2NodeSelector;
  /** Output only. Represents time when the Task was completed. It is not guaranteed to be set in happens-before order across separate operations. */
  completionTime?: string;
  /** Output only. The name of the parent Job. */
  job?: string;
  /** Output only. The Condition of this Task, containing its readiness status, and detailed error information in case it did not reach the desired state. */
  conditions?: ReadonlyArray<GoogleCloudRunV2Condition>;
  /** Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels */
  labels?: Record<string, string>;
  /** Output only. Index of the Task, unique per execution, and beginning at 0. */
  index?: number;
  /** Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run. */
  reconciling?: boolean;
  /** Output only. A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
  encryptionKey?: string;
  /** Output only. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations. */
  startTime?: string;
  /** The execution environment being used to host this Task. */
  executionEnvironment?:
    | "EXECUTION_ENVIRONMENT_UNSPECIFIED"
    | "EXECUTION_ENVIRONMENT_GEN1"
    | "EXECUTION_ENVIRONMENT_GEN2"
    | (string & {});
  /** Output only. Result of the last attempt of this Task. */
  lastAttemptResult?: GoogleCloudRunV2TaskAttemptResult;
  /** Output only. A number that monotonically increases every time the user modifies the desired state. */
  generation?: string;
  /** Output only. The unique name of this Task. */
  name?: string;
  /** Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
  annotations?: Record<string, string>;
}

export const GoogleCloudRunV2Task: Schema.Schema<GoogleCloudRunV2Task> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containers: Schema.optional(Schema.Array(GoogleCloudRunV2Container)),
    updateTime: Schema.optional(Schema.String),
    vpcAccess: Schema.optional(GoogleCloudRunV2VpcAccess),
    etag: Schema.optional(Schema.String),
    retried: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    gpuZonalRedundancyDisabled: Schema.optional(Schema.Boolean),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    logUri: Schema.optional(Schema.String),
    volumes: Schema.optional(Schema.Array(GoogleCloudRunV2Volume)),
    timeout: Schema.optional(Schema.String),
    maxRetries: Schema.optional(Schema.Number),
    observedGeneration: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    scheduledTime: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    execution: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    nodeSelector: Schema.optional(GoogleCloudRunV2NodeSelector),
    completionTime: Schema.optional(Schema.String),
    job: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Array(GoogleCloudRunV2Condition)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    index: Schema.optional(Schema.Number),
    reconciling: Schema.optional(Schema.Boolean),
    encryptionKey: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    executionEnvironment: Schema.optional(Schema.String),
    lastAttemptResult: Schema.optional(GoogleCloudRunV2TaskAttemptResult),
    generation: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudRunV2Task" });

export interface GoogleCloudRunV2ListTasksResponse {
  /** The resulting list of Tasks. */
  tasks?: ReadonlyArray<GoogleCloudRunV2Task>;
  /** A token indicating there are more items than page_size. Use it in the next ListTasks request to continue. */
  nextPageToken?: string;
}

export const GoogleCloudRunV2ListTasksResponse: Schema.Schema<GoogleCloudRunV2ListTasksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tasks: Schema.optional(Schema.Array(GoogleCloudRunV2Task)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2ListTasksResponse" });

export interface GoogleCloudRunV2BuildpacksBuild {
  /** Optional. Whether or not the application container will be enrolled in automatic base image updates. When true, the application will be built on a scratch base image, so the base layers can be appended at run time. */
  enableAutomaticUpdates?: boolean;
  /** Optional. The base image to use for the build. */
  baseImage?: string;
  /** Optional. User-provided build-time environment variables. */
  environmentVariables?: Record<string, string>;
  /** Optional. cache_image_uri is the GCR/AR URL where the cache image will be stored. cache_image_uri is optional and omitting it will disable caching. This URL must be stable across builds. It is used to derive a build-specific temporary URL by substituting the tag with the build ID. The build will clean up the temporary image on a best-effort basis. */
  cacheImageUri?: string;
  /** Optional. project_descriptor stores the path to the project descriptor file. When empty, it means that there is no project descriptor file in the source. */
  projectDescriptor?: string;
  /** Optional. Name of the function target if the source is a function source. Required for function builds. */
  functionTarget?: string;
  /** The runtime name, e.g. 'go113'. Leave blank for generic builds. */
  runtime?: string;
}

export const GoogleCloudRunV2BuildpacksBuild: Schema.Schema<GoogleCloudRunV2BuildpacksBuild> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableAutomaticUpdates: Schema.optional(Schema.Boolean),
    baseImage: Schema.optional(Schema.String),
    environmentVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    cacheImageUri: Schema.optional(Schema.String),
    projectDescriptor: Schema.optional(Schema.String),
    functionTarget: Schema.optional(Schema.String),
    runtime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2BuildpacksBuild" });

export interface GoogleDevtoolsCloudbuildV1GoModule {
  /** Optional. The Go module's "module path". e.g. example.com/foo/v2 */
  modulePath?: string;
  /** Optional. The Go module's semantic version in the form vX.Y.Z. e.g. v0.1.1 Pre-release identifiers can also be added by appending a dash and dot separated ASCII alphanumeric characters and hyphens. e.g. v0.2.3-alpha.x.12m.5 */
  moduleVersion?: string;
  /** Optional. Project ID of the Artifact Registry repository. Defaults to the build project. */
  repositoryProjectId?: string;
  /** Optional. Location of the Artifact Registry repository. i.e. us-east1 Defaults to the build’s location. */
  repositoryLocation?: string;
  /** Optional. Source path of the go.mod file in the build's workspace. If not specified, this will default to the current directory. e.g. ~/code/go/mypackage */
  sourcePath?: string;
  /** Optional. Artifact Registry repository name. Specified Go modules will be zipped and uploaded to Artifact Registry with this location as a prefix. e.g. my-go-repo */
  repositoryName?: string;
}

export const GoogleDevtoolsCloudbuildV1GoModule: Schema.Schema<GoogleDevtoolsCloudbuildV1GoModule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modulePath: Schema.optional(Schema.String),
    moduleVersion: Schema.optional(Schema.String),
    repositoryProjectId: Schema.optional(Schema.String),
    repositoryLocation: Schema.optional(Schema.String),
    sourcePath: Schema.optional(Schema.String),
    repositoryName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1GoModule" });

export interface GoogleDevtoolsCloudbuildV1TimeSpan {
  /** Start of time span. */
  startTime?: string;
  /** End of time span. */
  endTime?: string;
}

export const GoogleDevtoolsCloudbuildV1TimeSpan: Schema.Schema<GoogleDevtoolsCloudbuildV1TimeSpan> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1TimeSpan" });

export interface GoogleDevtoolsCloudbuildV1Hash {
  /** The type of hash that was performed. */
  type?:
    | "NONE"
    | "SHA256"
    | "MD5"
    | "GO_MODULE_H1"
    | "SHA512"
    | "DIRSUM_SHA256"
    | (string & {});
  /** The hash value. */
  value?: string;
}

export const GoogleDevtoolsCloudbuildV1Hash: Schema.Schema<GoogleDevtoolsCloudbuildV1Hash> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Hash" });

export interface GoogleDevtoolsCloudbuildV1FileHashes {
  /** Collection of file hashes. */
  fileHash?: ReadonlyArray<GoogleDevtoolsCloudbuildV1Hash>;
}

export const GoogleDevtoolsCloudbuildV1FileHashes: Schema.Schema<GoogleDevtoolsCloudbuildV1FileHashes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileHash: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1Hash)),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1FileHashes" });

export interface GoogleDevtoolsCloudbuildV1UploadedPythonPackage {
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** Hash types and values of the Python Artifact. */
  fileHashes?: GoogleDevtoolsCloudbuildV1FileHashes;
  /** URI of the uploaded artifact. */
  uri?: string;
}

export const GoogleDevtoolsCloudbuildV1UploadedPythonPackage: Schema.Schema<GoogleDevtoolsCloudbuildV1UploadedPythonPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pushTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    artifactRegistryPackage: Schema.optional(Schema.String),
    fileHashes: Schema.optional(GoogleDevtoolsCloudbuildV1FileHashes),
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV1UploadedPythonPackage",
  });

export interface GoogleDevtoolsCloudbuildV1UploadedGoModule {
  /** Hash types and values of the Go Module Artifact. */
  fileHashes?: GoogleDevtoolsCloudbuildV1FileHashes;
  /** URI of the uploaded artifact. */
  uri?: string;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
}

export const GoogleDevtoolsCloudbuildV1UploadedGoModule: Schema.Schema<GoogleDevtoolsCloudbuildV1UploadedGoModule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileHashes: Schema.optional(GoogleDevtoolsCloudbuildV1FileHashes),
    uri: Schema.optional(Schema.String),
    pushTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    artifactRegistryPackage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1UploadedGoModule" });

export interface GoogleDevtoolsCloudbuildV1UploadedNpmPackage {
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** URI of the uploaded npm package. */
  uri?: string;
  /** Hash types and values of the npm package. */
  fileHashes?: GoogleDevtoolsCloudbuildV1FileHashes;
}

export const GoogleDevtoolsCloudbuildV1UploadedNpmPackage: Schema.Schema<GoogleDevtoolsCloudbuildV1UploadedNpmPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pushTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    artifactRegistryPackage: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    fileHashes: Schema.optional(GoogleDevtoolsCloudbuildV1FileHashes),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1UploadedNpmPackage" });

export interface GoogleDevtoolsCloudbuildV1UploadedGenericArtifact {
  /** Output only. The file hashes that make up the generic artifact. */
  fileHashes?: Record<string, GoogleDevtoolsCloudbuildV1FileHashes>;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. URI of the uploaded artifact. Ex: projects/p1/locations/us/repositories/r1/packages/p1/versions/v1 */
  uri?: string;
  /** Output only. The hash of the whole artifact. */
  artifactFingerprint?: GoogleDevtoolsCloudbuildV1FileHashes;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
}

export const GoogleDevtoolsCloudbuildV1UploadedGenericArtifact: Schema.Schema<GoogleDevtoolsCloudbuildV1UploadedGenericArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileHashes: Schema.optional(
      Schema.Record(Schema.String, GoogleDevtoolsCloudbuildV1FileHashes),
    ),
    pushTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    uri: Schema.optional(Schema.String),
    artifactFingerprint: Schema.optional(GoogleDevtoolsCloudbuildV1FileHashes),
    artifactRegistryPackage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV1UploadedGenericArtifact",
  });

export interface GoogleDevtoolsCloudbuildV1BuildStepResults {
  /** Results for a build step. */
  results?: Record<string, string>;
}

export const GoogleDevtoolsCloudbuildV1BuildStepResults: Schema.Schema<GoogleDevtoolsCloudbuildV1BuildStepResults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1BuildStepResults" });

export interface GoogleDevtoolsCloudbuildV1UploadedMavenArtifact {
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** URI of the uploaded artifact. */
  uri?: string;
  /** Hash types and values of the Maven Artifact. */
  fileHashes?: GoogleDevtoolsCloudbuildV1FileHashes;
}

export const GoogleDevtoolsCloudbuildV1UploadedMavenArtifact: Schema.Schema<GoogleDevtoolsCloudbuildV1UploadedMavenArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pushTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    artifactRegistryPackage: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    fileHashes: Schema.optional(GoogleDevtoolsCloudbuildV1FileHashes),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV1UploadedMavenArtifact",
  });

export interface GoogleDevtoolsCloudbuildV1BuiltImage {
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** Output only. The OCI media type of the artifact. Non-OCI images, such as Docker images, will have an unspecified value. */
  ociMediaType?:
    | "OCI_MEDIA_TYPE_UNSPECIFIED"
    | "IMAGE_MANIFEST"
    | "IMAGE_INDEX"
    | (string & {});
  /** Docker Registry 2.0 digest. */
  digest?: string;
  /** Name used to push the container image to Google Container Registry, as presented to `docker push`. */
  name?: string;
  /** Output only. Stores timing information for pushing the specified image. */
  pushTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
}

export const GoogleDevtoolsCloudbuildV1BuiltImage: Schema.Schema<GoogleDevtoolsCloudbuildV1BuiltImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactRegistryPackage: Schema.optional(Schema.String),
    ociMediaType: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    pushTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1BuiltImage" });

export interface GoogleDevtoolsCloudbuildV1Results {
  /** Python artifacts uploaded to Artifact Registry at the end of the build. */
  pythonPackages?: ReadonlyArray<GoogleDevtoolsCloudbuildV1UploadedPythonPackage>;
  /** List of build step digests, in the order corresponding to build step indices. */
  buildStepImages?: ReadonlyArray<string>;
  /** Time to push all non-container artifacts to Cloud Storage. */
  artifactTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 50KB of data is stored. Note that the `$BUILDER_OUTPUT` variable is read-only and can't be substituted. */
  buildStepOutputs?: ReadonlyArray<string>;
  /** Optional. Go module artifacts uploaded to Artifact Registry at the end of the build. */
  goModules?: ReadonlyArray<GoogleDevtoolsCloudbuildV1UploadedGoModule>;
  /** Npm packages uploaded to Artifact Registry at the end of the build. */
  npmPackages?: ReadonlyArray<GoogleDevtoolsCloudbuildV1UploadedNpmPackage>;
  /** Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
  artifactManifest?: string;
  /** Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
  numArtifacts?: string;
  /** Output only. Generic artifacts uploaded to Artifact Registry at the end of the build. */
  genericArtifacts?: ReadonlyArray<GoogleDevtoolsCloudbuildV1UploadedGenericArtifact>;
  /** Results for build steps. step_id -> */
  buildStepResults?: Record<string, GoogleDevtoolsCloudbuildV1BuildStepResults>;
  /** Maven artifacts uploaded to Artifact Registry at the end of the build. */
  mavenArtifacts?: ReadonlyArray<GoogleDevtoolsCloudbuildV1UploadedMavenArtifact>;
  /** Container images that were built as a part of the build. */
  images?: ReadonlyArray<GoogleDevtoolsCloudbuildV1BuiltImage>;
}

export const GoogleDevtoolsCloudbuildV1Results: Schema.Schema<GoogleDevtoolsCloudbuildV1Results> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pythonPackages: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1UploadedPythonPackage),
    ),
    buildStepImages: Schema.optional(Schema.Array(Schema.String)),
    artifactTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    buildStepOutputs: Schema.optional(Schema.Array(Schema.String)),
    goModules: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1UploadedGoModule),
    ),
    npmPackages: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1UploadedNpmPackage),
    ),
    artifactManifest: Schema.optional(Schema.String),
    numArtifacts: Schema.optional(Schema.String),
    genericArtifacts: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1UploadedGenericArtifact),
    ),
    buildStepResults: Schema.optional(
      Schema.Record(Schema.String, GoogleDevtoolsCloudbuildV1BuildStepResults),
    ),
    mavenArtifacts: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1UploadedMavenArtifact),
    ),
    images: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1BuiltImage)),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Results" });

export interface GoogleDevtoolsCloudbuildV1StorageSourceManifest {
  /** Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
  generation?: string;
  /** Required. Cloud Storage object containing the source manifest. This object must be a JSON file. */
  object?: string;
  /** Required. Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
  bucket?: string;
}

export const GoogleDevtoolsCloudbuildV1StorageSourceManifest: Schema.Schema<GoogleDevtoolsCloudbuildV1StorageSourceManifest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generation: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
    bucket: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV1StorageSourceManifest",
  });

export interface GoogleDevtoolsCloudbuildV1GitSource {
  /** Optional. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. Cloud Build uses `git fetch` to fetch the revision from the Git repository; therefore make sure that the string you provide for `revision` is parsable by the command. For information on string values accepted by `git fetch`, see https://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on `git fetch`, see https://git-scm.com/docs/git-fetch. */
  revision?: string;
  /** Optional. Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
  dir?: string;
  /** Required. Location of the Git repo to build. This will be used as a `git remote`, see https://git-scm.com/docs/git-remote. */
  url?: string;
}

export const GoogleDevtoolsCloudbuildV1GitSource: Schema.Schema<GoogleDevtoolsCloudbuildV1GitSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revision: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1GitSource" });

export interface GoogleDevtoolsCloudbuildV1StorageSource {
  /** Optional. Option to specify the tool to fetch the source file for the build. */
  sourceFetcher?:
    | "SOURCE_FETCHER_UNSPECIFIED"
    | "GSUTIL"
    | "GCS_FETCHER"
    | (string & {});
  /** Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
  bucket?: string;
  /** Required. Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build. */
  object?: string;
  /** Optional. Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
  generation?: string;
}

export const GoogleDevtoolsCloudbuildV1StorageSource: Schema.Schema<GoogleDevtoolsCloudbuildV1StorageSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceFetcher: Schema.optional(Schema.String),
    bucket: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
    generation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1StorageSource" });

export interface GoogleDevtoolsCloudbuildV1ConnectedRepository {
  /** Optional. Directory, relative to the source root, in which to run the build. */
  dir?: string;
  /** Required. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. */
  revision?: string;
  /** Required. Name of the Google Cloud Build repository, formatted as `projects/* /locations/* /connections/* /repositories/*`. */
  repository?: string;
}

export const GoogleDevtoolsCloudbuildV1ConnectedRepository: Schema.Schema<GoogleDevtoolsCloudbuildV1ConnectedRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dir: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1ConnectedRepository" });

export interface GoogleDevtoolsCloudbuildV1SourceProvenance {
  /** A copy of the build's `source.repo_source`, if exists, with any revisions resolved. */
  resolvedRepoSource?: GoogleDevtoolsCloudbuildV1RepoSource;
  /** Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file. */
  fileHashes?: Record<string, GoogleDevtoolsCloudbuildV1FileHashes>;
  /** Output only. A copy of the build's `source.git_source`, if exists, with any revisions resolved. */
  resolvedGitSource?: GoogleDevtoolsCloudbuildV1GitSource;
  /** A copy of the build's `source.storage_source`, if exists, with any generations resolved. */
  resolvedStorageSource?: GoogleDevtoolsCloudbuildV1StorageSource;
  /** A copy of the build's `source.storage_source_manifest`, if exists, with any revisions resolved. This feature is in Preview. */
  resolvedStorageSourceManifest?: GoogleDevtoolsCloudbuildV1StorageSourceManifest;
  /** Output only. A copy of the build's `source.connected_repository`, if exists, with any revisions resolved. */
  resolvedConnectedRepository?: GoogleDevtoolsCloudbuildV1ConnectedRepository;
}

export const GoogleDevtoolsCloudbuildV1SourceProvenance: Schema.Schema<GoogleDevtoolsCloudbuildV1SourceProvenance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resolvedRepoSource: Schema.optional(GoogleDevtoolsCloudbuildV1RepoSource),
    fileHashes: Schema.optional(
      Schema.Record(Schema.String, GoogleDevtoolsCloudbuildV1FileHashes),
    ),
    resolvedGitSource: Schema.optional(GoogleDevtoolsCloudbuildV1GitSource),
    resolvedStorageSource: Schema.optional(
      GoogleDevtoolsCloudbuildV1StorageSource,
    ),
    resolvedStorageSourceManifest: Schema.optional(
      GoogleDevtoolsCloudbuildV1StorageSourceManifest,
    ),
    resolvedConnectedRepository: Schema.optional(
      GoogleDevtoolsCloudbuildV1ConnectedRepository,
    ),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1SourceProvenance" });

export interface GoogleDevtoolsCloudbuildV1Volume {
  /** Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. */
  path?: string;
  /** Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. */
  name?: string;
}

export const GoogleDevtoolsCloudbuildV1Volume: Schema.Schema<GoogleDevtoolsCloudbuildV1Volume> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Volume" });

export interface GoogleDevtoolsCloudbuildV1BuildStep {
  /** The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully. */
  waitFor?: ReadonlyArray<string>;
  /** Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption. */
  automapSubstitutions?: boolean;
  /** Output only. Stores timing information for pulling this build step's builder image only. */
  pullTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step. */
  name?: string;
  /** A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args. */
  script?: string;
  /** A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. */
  secretEnv?: ReadonlyArray<string>;
  /** A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments. */
  args?: ReadonlyArray<string>;
  /** Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence. */
  allowExitCodes?: ReadonlyArray<number>;
  /** Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field. */
  allowFailure?: boolean;
  /** Output only. Return code from running the step. */
  exitCode?: number;
  /** Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses. */
  status?:
    | "STATUS_UNKNOWN"
    | "PENDING"
    | "QUEUED"
    | "WORKING"
    | "SUCCESS"
    | "FAILURE"
    | "INTERNAL_ERROR"
    | "TIMEOUT"
    | "CANCELLED"
    | "EXPIRED"
    | (string & {});
  /** A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
  env?: ReadonlyArray<string>;
  /** Output only. Stores timing information for executing this build step. */
  timing?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution. */
  dir?: string;
  /** Output only. Declaration of results for this build step. */
  results?: ReadonlyArray<GoogleDevtoolsCloudbuildV1StepResult>;
  /** Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency. */
  id?: string;
  /** Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. */
  entrypoint?: string;
  /** Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out. */
  timeout?: string;
  /** List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration. */
  volumes?: ReadonlyArray<GoogleDevtoolsCloudbuildV1Volume>;
}

export const GoogleDevtoolsCloudbuildV1BuildStep: Schema.Schema<GoogleDevtoolsCloudbuildV1BuildStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    waitFor: Schema.optional(Schema.Array(Schema.String)),
    automapSubstitutions: Schema.optional(Schema.Boolean),
    pullTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    name: Schema.optional(Schema.String),
    script: Schema.optional(Schema.String),
    secretEnv: Schema.optional(Schema.Array(Schema.String)),
    args: Schema.optional(Schema.Array(Schema.String)),
    allowExitCodes: Schema.optional(Schema.Array(Schema.Number)),
    allowFailure: Schema.optional(Schema.Boolean),
    exitCode: Schema.optional(Schema.Number),
    status: Schema.optional(Schema.String),
    env: Schema.optional(Schema.Array(Schema.String)),
    timing: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    dir: Schema.optional(Schema.String),
    results: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1StepResult),
    ),
    id: Schema.optional(Schema.String),
    entrypoint: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.String),
    volumes: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1Volume)),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1BuildStep" });

export interface GoogleDevtoolsCloudbuildV1Warning {
  /** Explanation of the warning generated. */
  text?: string;
  /** The priority for this warning. */
  priority?:
    | "PRIORITY_UNSPECIFIED"
    | "INFO"
    | "WARNING"
    | "ALERT"
    | (string & {});
}

export const GoogleDevtoolsCloudbuildV1Warning: Schema.Schema<GoogleDevtoolsCloudbuildV1Warning> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Warning" });

export interface GoogleDevtoolsCloudbuildV1HttpConfig {
  /** SecretVersion resource of the HTTP proxy URL. The Service Account used in the build (either the default Service Account or user-specified Service Account) should have `secretmanager.versions.access` permissions on this secret. The proxy URL should be in format `protocol://@]proxyhost[:port]`. */
  proxySecretVersionName?: string;
}

export const GoogleDevtoolsCloudbuildV1HttpConfig: Schema.Schema<GoogleDevtoolsCloudbuildV1HttpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    proxySecretVersionName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1HttpConfig" });

export interface GoogleDevtoolsCloudbuildV1GitConfig {
  /** Configuration for HTTP related git operations. */
  http?: GoogleDevtoolsCloudbuildV1HttpConfig;
}

export const GoogleDevtoolsCloudbuildV1GitConfig: Schema.Schema<GoogleDevtoolsCloudbuildV1GitConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    http: Schema.optional(GoogleDevtoolsCloudbuildV1HttpConfig),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1GitConfig" });

export interface GoogleDevtoolsCloudbuildV1DeveloperConnectConfig {
  /** Required. Directory, relative to the source root, in which to run the build. */
  dir?: string;
  /** Required. The Developer Connect Git repository link, formatted as `projects/* /locations/* /connections/* /gitRepositoryLink/*`. */
  gitRepositoryLink?: string;
  /** Required. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. */
  revision?: string;
}

export const GoogleDevtoolsCloudbuildV1DeveloperConnectConfig: Schema.Schema<GoogleDevtoolsCloudbuildV1DeveloperConnectConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dir: Schema.optional(Schema.String),
    gitRepositoryLink: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV1DeveloperConnectConfig",
  });

export interface GoogleDevtoolsCloudbuildV1Source {
  /** If provided, get the source from this manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
  storageSourceManifest?: GoogleDevtoolsCloudbuildV1StorageSourceManifest;
  /** Optional. If provided, get the source from this 2nd-gen Google Cloud Build repository resource. */
  connectedRepository?: GoogleDevtoolsCloudbuildV1ConnectedRepository;
  /** If provided, get the source from this Git repository. */
  gitSource?: GoogleDevtoolsCloudbuildV1GitSource;
  /** If provided, get the source from this location in Cloud Storage. */
  storageSource?: GoogleDevtoolsCloudbuildV1StorageSource;
  /** If provided, get the source from this Developer Connect config. */
  developerConnectConfig?: GoogleDevtoolsCloudbuildV1DeveloperConnectConfig;
  /** If provided, get the source from this location in a Cloud Source Repository. */
  repoSource?: GoogleDevtoolsCloudbuildV1RepoSource;
}

export const GoogleDevtoolsCloudbuildV1Source: Schema.Schema<GoogleDevtoolsCloudbuildV1Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageSourceManifest: Schema.optional(
      GoogleDevtoolsCloudbuildV1StorageSourceManifest,
    ),
    connectedRepository: Schema.optional(
      GoogleDevtoolsCloudbuildV1ConnectedRepository,
    ),
    gitSource: Schema.optional(GoogleDevtoolsCloudbuildV1GitSource),
    storageSource: Schema.optional(GoogleDevtoolsCloudbuildV1StorageSource),
    developerConnectConfig: Schema.optional(
      GoogleDevtoolsCloudbuildV1DeveloperConnectConfig,
    ),
    repoSource: Schema.optional(GoogleDevtoolsCloudbuildV1RepoSource),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Source" });

export interface GoogleDevtoolsCloudbuildV1GitSourceRepository {
  /** Location of the Git repository. */
  url?: string;
  /** The Developer Connect Git repository link formatted as `projects/* /locations/* /connections/* /gitRepositoryLink/*` */
  developerConnect?: string;
}

export const GoogleDevtoolsCloudbuildV1GitSourceRepository: Schema.Schema<GoogleDevtoolsCloudbuildV1GitSourceRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    developerConnect: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1GitSourceRepository" });

export interface GoogleDevtoolsCloudbuildV1GitSourceDependency {
  /** Optional. How much history should be fetched for the build (default 1, -1 for all history). */
  depth?: string;
  /** Required. The revision that we will fetch the repo at. */
  revision?: string;
  /** Required. The kind of repo (url or dev connect). */
  repository?: GoogleDevtoolsCloudbuildV1GitSourceRepository;
  /** Optional. True if submodules should be fetched too (default false). */
  recurseSubmodules?: boolean;
  /** Required. Where should the files be placed on the worker. */
  destPath?: string;
}

export const GoogleDevtoolsCloudbuildV1GitSourceDependency: Schema.Schema<GoogleDevtoolsCloudbuildV1GitSourceDependency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    depth: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
    repository: Schema.optional(GoogleDevtoolsCloudbuildV1GitSourceRepository),
    recurseSubmodules: Schema.optional(Schema.Boolean),
    destPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1GitSourceDependency" });

export interface GoogleDevtoolsCloudbuildV1GenericArtifactDependency {
  /** Required. The location to download the artifact files from. Ex: projects/p1/locations/us/repositories/r1/packages/p1/versions/v1 */
  resource?: string;
  /** Required. Where the artifact files should be placed on the worker. */
  destPath?: string;
}

export const GoogleDevtoolsCloudbuildV1GenericArtifactDependency: Schema.Schema<GoogleDevtoolsCloudbuildV1GenericArtifactDependency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.String),
    destPath: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV1GenericArtifactDependency",
  });

export interface GoogleDevtoolsCloudbuildV1Dependency {
  /** Represents a git repository as a build dependency. */
  gitSource?: GoogleDevtoolsCloudbuildV1GitSourceDependency;
  /** Represents a generic artifact as a build dependency. */
  genericArtifact?: GoogleDevtoolsCloudbuildV1GenericArtifactDependency;
  /** If set to true disable all dependency fetching (ignoring the default source as well). */
  empty?: boolean;
}

export const GoogleDevtoolsCloudbuildV1Dependency: Schema.Schema<GoogleDevtoolsCloudbuildV1Dependency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitSource: Schema.optional(GoogleDevtoolsCloudbuildV1GitSourceDependency),
    genericArtifact: Schema.optional(
      GoogleDevtoolsCloudbuildV1GenericArtifactDependency,
    ),
    empty: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Dependency" });

export interface GoogleDevtoolsCloudbuildV1InlineSecret {
  /** Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/* /locations/* /keyRings/* /cryptoKeys/* */
  kmsKeyName?: string;
  /** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
  envMap?: Record<string, string>;
}

export const GoogleDevtoolsCloudbuildV1InlineSecret: Schema.Schema<GoogleDevtoolsCloudbuildV1InlineSecret> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
    envMap: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1InlineSecret" });

export interface GoogleDevtoolsCloudbuildV1SecretManagerSecret {
  /** Resource name of the SecretVersion. In format: projects/* /secrets/* /versions/* */
  versionName?: string;
  /** Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. */
  env?: string;
}

export const GoogleDevtoolsCloudbuildV1SecretManagerSecret: Schema.Schema<GoogleDevtoolsCloudbuildV1SecretManagerSecret> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionName: Schema.optional(Schema.String),
    env: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1SecretManagerSecret" });

export interface GoogleDevtoolsCloudbuildV1Secrets {
  /** Secrets encrypted with KMS key and the associated secret environment variable. */
  inline?: ReadonlyArray<GoogleDevtoolsCloudbuildV1InlineSecret>;
  /** Secrets in Secret Manager and associated secret environment variable. */
  secretManager?: ReadonlyArray<GoogleDevtoolsCloudbuildV1SecretManagerSecret>;
}

export const GoogleDevtoolsCloudbuildV1Secrets: Schema.Schema<GoogleDevtoolsCloudbuildV1Secrets> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inline: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1InlineSecret),
    ),
    secretManager: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1SecretManagerSecret),
    ),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Secrets" });

export interface GoogleDevtoolsCloudbuildV1PoolOption {
  /** The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project}/locations/{location}/workerPools/{workerPoolId} */
  name?: string;
}

export const GoogleDevtoolsCloudbuildV1PoolOption: Schema.Schema<GoogleDevtoolsCloudbuildV1PoolOption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1PoolOption" });

export interface GoogleDevtoolsCloudbuildV1BuildOptions {
  /** A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
  env?: ReadonlyArray<string>;
  /** This field deprecated; please use `pool.name` instead. */
  workerPool?: string;
  /** Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 4000GB; builds that request more than the maximum are rejected with an error. */
  diskSizeGb?: string;
  /** Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file. */
  substitutionOption?: "MUST_MATCH" | "ALLOW_LOOSE" | (string & {});
  /** Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration. */
  volumes?: ReadonlyArray<GoogleDevtoolsCloudbuildV1Volume>;
  /** Compute Engine machine type on which to run the build. */
  machineType?:
    | "UNSPECIFIED"
    | "N1_HIGHCPU_8"
    | "N1_HIGHCPU_32"
    | "E2_HIGHCPU_8"
    | "E2_HIGHCPU_32"
    | "E2_MEDIUM"
    | (string & {});
  /** Requested verifiability options. */
  requestedVerifyOption?: "NOT_VERIFIED" | "VERIFIED" | (string & {});
  /** Optional. Option to specify the Pub/Sub topic to receive build status updates. */
  pubsubTopic?: string;
  /** Requested hash for SourceProvenance. */
  sourceProvenanceHash?: ReadonlyArray<
    | "NONE"
    | "SHA256"
    | "MD5"
    | "GO_MODULE_H1"
    | "SHA512"
    | "DIRSUM_SHA256"
    | (string & {})
  >;
  /** Option to include built-in and custom substitutions as env variables for all build steps. */
  automapSubstitutions?: boolean;
  /** Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file. */
  dynamicSubstitutions?: boolean;
  /** Option to specify the logging mode, which determines if and where build logs are stored. */
  logging?:
    | "LOGGING_UNSPECIFIED"
    | "LEGACY"
    | "GCS_ONLY"
    | "STACKDRIVER_ONLY"
    | "CLOUD_LOGGING_ONLY"
    | "NONE"
    | (string & {});
  /** Optional. Option to specify how default logs buckets are setup. */
  defaultLogsBucketBehavior?:
    | "DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED"
    | "REGIONAL_USER_OWNED_BUCKET"
    | "LEGACY_BUCKET"
    | (string & {});
  /** Option to define build log streaming behavior to Cloud Storage. */
  logStreamingOption?:
    | "STREAM_DEFAULT"
    | "STREAM_ON"
    | "STREAM_OFF"
    | (string & {});
  /** Optional. Option to specify whether structured logging is enabled. If true, JSON-formatted logs are parsed as structured logs. */
  enableStructuredLogging?: boolean;
  /** A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build. */
  secretEnv?: ReadonlyArray<string>;
  /** Optional. Specification for execution on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information. */
  pool?: GoogleDevtoolsCloudbuildV1PoolOption;
}

export const GoogleDevtoolsCloudbuildV1BuildOptions: Schema.Schema<GoogleDevtoolsCloudbuildV1BuildOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    env: Schema.optional(Schema.Array(Schema.String)),
    workerPool: Schema.optional(Schema.String),
    diskSizeGb: Schema.optional(Schema.String),
    substitutionOption: Schema.optional(Schema.String),
    volumes: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1Volume)),
    machineType: Schema.optional(Schema.String),
    requestedVerifyOption: Schema.optional(Schema.String),
    pubsubTopic: Schema.optional(Schema.String),
    sourceProvenanceHash: Schema.optional(Schema.Array(Schema.String)),
    automapSubstitutions: Schema.optional(Schema.Boolean),
    dynamicSubstitutions: Schema.optional(Schema.Boolean),
    logging: Schema.optional(Schema.String),
    defaultLogsBucketBehavior: Schema.optional(Schema.String),
    logStreamingOption: Schema.optional(Schema.String),
    enableStructuredLogging: Schema.optional(Schema.Boolean),
    secretEnv: Schema.optional(Schema.Array(Schema.String)),
    pool: Schema.optional(GoogleDevtoolsCloudbuildV1PoolOption),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1BuildOptions" });

export interface GoogleDevtoolsCloudbuildV1ArtifactObjects {
  /** Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix. */
  location?: string;
  /** Path globs used to match files in the build's workspace. */
  paths?: ReadonlyArray<string>;
  /** Output only. Stores timing information for pushing all artifact objects. */
  timing?: GoogleDevtoolsCloudbuildV1TimeSpan;
}

export const GoogleDevtoolsCloudbuildV1ArtifactObjects: Schema.Schema<GoogleDevtoolsCloudbuildV1ArtifactObjects> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    paths: Schema.optional(Schema.Array(Schema.String)),
    timing: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1ArtifactObjects" });

export interface GoogleDevtoolsCloudbuildV1MavenArtifact {
  /** Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix. */
  repository?: string;
  /** Maven `groupId` value used when uploading the artifact to Artifact Registry. */
  groupId?: string;
  /** Optional. Path to a folder containing the files to upload to Artifact Registry. This can be either an absolute path, e.g. `/workspace/my-app/target/`, or a relative path from /workspace, e.g. `my-app/target/`. This field is mutually exclusive with the `path` field. */
  deployFolder?: string;
  /** Maven `artifactId` value used when uploading the artifact to Artifact Registry. */
  artifactId?: string;
  /** Maven `version` value used when uploading the artifact to Artifact Registry. */
  version?: string;
  /** Optional. Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar. */
  path?: string;
}

export const GoogleDevtoolsCloudbuildV1MavenArtifact: Schema.Schema<GoogleDevtoolsCloudbuildV1MavenArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.optional(Schema.String),
    groupId: Schema.optional(Schema.String),
    deployFolder: Schema.optional(Schema.String),
    artifactId: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1MavenArtifact" });

export interface GoogleDevtoolsCloudbuildV1GenericArtifact {
  /** Required. Path to the generic artifact in the build's workspace to be uploaded to Artifact Registry. */
  folder?: string;
  /** Required. Registry path to upload the generic artifact to, in the form projects/$PROJECT/locations/$LOCATION/repositories/$REPO/packages/$PACKAGE/versions/$VERSION */
  registryPath?: string;
}

export const GoogleDevtoolsCloudbuildV1GenericArtifact: Schema.Schema<GoogleDevtoolsCloudbuildV1GenericArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    folder: Schema.optional(Schema.String),
    registryPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1GenericArtifact" });

export interface GoogleDevtoolsCloudbuildV1NpmPackage {
  /** Optional. Path to the package.json. e.g. workspace/path/to/package Only one of `archive` or `package_path` can be specified. */
  packagePath?: string;
  /** Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY" Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix. */
  repository?: string;
}

export const GoogleDevtoolsCloudbuildV1NpmPackage: Schema.Schema<GoogleDevtoolsCloudbuildV1NpmPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packagePath: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1NpmPackage" });

export interface GoogleDevtoolsCloudbuildV1Oci {
  /** Optional. Tags to apply to the uploaded image. e.g. latest, 1.0.0 */
  tags?: ReadonlyArray<string>;
  /** Required. Path on the local file system where to find the container to upload. e.g. /workspace/my-image.tar */
  file?: string;
  /** Required. Registry path to upload the container to. e.g. us-east1-docker.pkg.dev/my-project/my-repo/my-image */
  registryPath?: string;
}

export const GoogleDevtoolsCloudbuildV1Oci: Schema.Schema<GoogleDevtoolsCloudbuildV1Oci> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Schema.String)),
    file: Schema.optional(Schema.String),
    registryPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Oci" });

export interface GoogleDevtoolsCloudbuildV1PythonPackage {
  /** Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix. */
  repository?: string;
  /** Path globs used to match files in the build's workspace. For Python/ Twine, this is usually `dist/*`, and sometimes additionally an `.asc` file. */
  paths?: ReadonlyArray<string>;
}

export const GoogleDevtoolsCloudbuildV1PythonPackage: Schema.Schema<GoogleDevtoolsCloudbuildV1PythonPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.optional(Schema.String),
    paths: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1PythonPackage" });

export interface GoogleDevtoolsCloudbuildV1Artifacts {
  /** A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps. Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account's credentials. The location and generation of the uploaded objects will be stored in the Build resource's results field. If any objects fail to be pushed, the build is marked FAILURE. */
  objects?: GoogleDevtoolsCloudbuildV1ArtifactObjects;
  /** A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE. */
  mavenArtifacts?: ReadonlyArray<GoogleDevtoolsCloudbuildV1MavenArtifact>;
  /** Optional. A list of generic artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. If any artifacts fail to be pushed, the build is marked FAILURE. */
  genericArtifacts?: ReadonlyArray<GoogleDevtoolsCloudbuildV1GenericArtifact>;
  /** A list of npm packages to be uploaded to Artifact Registry upon successful completion of all build steps. Npm packages in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any packages fail to be pushed, the build is marked FAILURE. */
  npmPackages?: ReadonlyArray<GoogleDevtoolsCloudbuildV1NpmPackage>;
  /** A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE. */
  images?: ReadonlyArray<string>;
  /** Optional. A list of Go modules to be uploaded to Artifact Registry upon successful completion of all build steps. If any objects fail to be pushed, the build is marked FAILURE. */
  goModules?: ReadonlyArray<GoogleDevtoolsCloudbuildV1GoModule>;
  /** Optional. A list of OCI images to be uploaded to Artifact Registry upon successful completion of all build steps. OCI images in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any images fail to be pushed, the build is marked FAILURE. */
  oci?: ReadonlyArray<GoogleDevtoolsCloudbuildV1Oci>;
  /** A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE. */
  pythonPackages?: ReadonlyArray<GoogleDevtoolsCloudbuildV1PythonPackage>;
}

export const GoogleDevtoolsCloudbuildV1Artifacts: Schema.Schema<GoogleDevtoolsCloudbuildV1Artifacts> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objects: Schema.optional(GoogleDevtoolsCloudbuildV1ArtifactObjects),
    mavenArtifacts: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1MavenArtifact),
    ),
    genericArtifacts: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1GenericArtifact),
    ),
    npmPackages: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1NpmPackage),
    ),
    images: Schema.optional(Schema.Array(Schema.String)),
    goModules: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1GoModule),
    ),
    oci: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1Oci)),
    pythonPackages: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1PythonPackage),
    ),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Artifacts" });

export interface GoogleDevtoolsCloudbuildV1ApprovalConfig {
  /** Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start. */
  approvalRequired?: boolean;
}

export const GoogleDevtoolsCloudbuildV1ApprovalConfig: Schema.Schema<GoogleDevtoolsCloudbuildV1ApprovalConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approvalRequired: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1ApprovalConfig" });

export interface GoogleDevtoolsCloudbuildV1ApprovalResult {
  /** Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called. */
  approverAccount?: string;
  /** Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build. */
  url?: string;
  /** Optional. An optional comment for this manual approval result. */
  comment?: string;
  /** Output only. The time when the approval decision was made. */
  approvalTime?: string;
  /** Required. The decision of this manual approval. */
  decision?: "DECISION_UNSPECIFIED" | "APPROVED" | "REJECTED" | (string & {});
}

export const GoogleDevtoolsCloudbuildV1ApprovalResult: Schema.Schema<GoogleDevtoolsCloudbuildV1ApprovalResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approverAccount: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.String),
    approvalTime: Schema.optional(Schema.String),
    decision: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1ApprovalResult" });

export interface GoogleDevtoolsCloudbuildV1BuildApproval {
  /** Output only. Configuration for manual approval of this build. */
  config?: GoogleDevtoolsCloudbuildV1ApprovalConfig;
  /** Output only. The state of this build's approval. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "APPROVED"
    | "REJECTED"
    | "CANCELLED"
    | (string & {});
  /** Output only. Result of manual approval for this Build. */
  result?: GoogleDevtoolsCloudbuildV1ApprovalResult;
}

export const GoogleDevtoolsCloudbuildV1BuildApproval: Schema.Schema<GoogleDevtoolsCloudbuildV1BuildApproval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(GoogleDevtoolsCloudbuildV1ApprovalConfig),
    state: Schema.optional(Schema.String),
    result: Schema.optional(GoogleDevtoolsCloudbuildV1ApprovalResult),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1BuildApproval" });

export interface GoogleDevtoolsCloudbuildV1FailureInfo {
  /** The name of the failure. */
  type?:
    | "FAILURE_TYPE_UNSPECIFIED"
    | "PUSH_FAILED"
    | "PUSH_IMAGE_NOT_FOUND"
    | "PUSH_NOT_AUTHORIZED"
    | "LOGGING_FAILURE"
    | "USER_BUILD_STEP"
    | "FETCH_SOURCE_FAILED"
    | (string & {});
  /** Explains the failure issue in more detail using hard-coded text. */
  detail?: string;
}

export const GoogleDevtoolsCloudbuildV1FailureInfo: Schema.Schema<GoogleDevtoolsCloudbuildV1FailureInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1FailureInfo" });

export interface GoogleDevtoolsCloudbuildV1Build {
  /** Output only. A permanent fixed identifier for source. */
  sourceProvenance?: GoogleDevtoolsCloudbuildV1SourceProvenance;
  /** Output only. Time at which execution of the build was started. */
  startTime?: string;
  /** Required. The operations to be performed on the workspace. */
  steps?: ReadonlyArray<GoogleDevtoolsCloudbuildV1BuildStep>;
  /** Output only. URL to logs for this build in Google Cloud Console. */
  logUrl?: string;
  /** Output only. Non-fatal problems encountered during the execution of the build. */
  warnings?: ReadonlyArray<GoogleDevtoolsCloudbuildV1Warning>;
  /** Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically. */
  buildTriggerId?: string;
  /** Optional. Configuration for git operations. */
  gitConfig?: GoogleDevtoolsCloudbuildV1GitConfig;
  /** Output only. ID of the project. */
  projectId?: string;
  /** Output only. The 'Build' name with format: `projects/{project}/locations/{location}/builds/{build}`, where {build} is a unique identifier generated by the service. */
  name?: string;
  /** Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution. */
  finishTime?: string;
  /** Output only. Results of the build. */
  results?: GoogleDevtoolsCloudbuildV1Results;
  /** Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is 60 minutes. */
  timeout?: string;
  /** Optional. The location of the source files to build. */
  source?: GoogleDevtoolsCloudbuildV1Source;
  /** Optional. Dependencies that the Cloud Build worker will fetch before executing user steps. */
  dependencies?: ReadonlyArray<GoogleDevtoolsCloudbuildV1Dependency>;
  /** Output only. Customer-readable message about the current status. */
  statusDetail?: string;
  /** Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets */
  secrets?: ReadonlyArray<GoogleDevtoolsCloudbuildV1Secret>;
  /** Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included. */
  timing?: Record<string, GoogleDevtoolsCloudbuildV1TimeSpan>;
  /** Output only. Status of the build. */
  status?:
    | "STATUS_UNKNOWN"
    | "PENDING"
    | "QUEUED"
    | "WORKING"
    | "SUCCESS"
    | "FAILURE"
    | "INTERNAL_ERROR"
    | "TIMEOUT"
    | "CANCELLED"
    | "EXPIRED"
    | (string & {});
  /** A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`. */
  images?: ReadonlyArray<string>;
  /** Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`. */
  logsBucket?: string;
  /** Substitutions data for `Build` resource. */
  substitutions?: Record<string, string>;
  /** IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. ACCOUNT can be email address or uniqueId of the service account. */
  serviceAccount?: string;
  /** Secrets and secret environment variables. */
  availableSecrets?: GoogleDevtoolsCloudbuildV1Secrets;
  /** Special options for this build. */
  options?: GoogleDevtoolsCloudbuildV1BuildOptions;
  /** Artifacts produced by the build that should be uploaded upon successful completion of all build steps. */
  artifacts?: GoogleDevtoolsCloudbuildV1Artifacts;
  /** Output only. Unique identifier of the build. */
  id?: string;
  /** Output only. Describes this build's approval configuration, status, and result. */
  approval?: GoogleDevtoolsCloudbuildV1BuildApproval;
  /** TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time. */
  queueTtl?: string;
  /** Tags for annotation of a `Build`. These are not docker tags. */
  tags?: ReadonlyArray<string>;
  /** Output only. Time at which the request to create the build was received. */
  createTime?: string;
  /** Output only. Contains information about the build when status=FAILURE. */
  failureInfo?: GoogleDevtoolsCloudbuildV1FailureInfo;
}

export const GoogleDevtoolsCloudbuildV1Build: Schema.Schema<GoogleDevtoolsCloudbuildV1Build> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceProvenance: Schema.optional(
      GoogleDevtoolsCloudbuildV1SourceProvenance,
    ),
    startTime: Schema.optional(Schema.String),
    steps: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1BuildStep)),
    logUrl: Schema.optional(Schema.String),
    warnings: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1Warning)),
    buildTriggerId: Schema.optional(Schema.String),
    gitConfig: Schema.optional(GoogleDevtoolsCloudbuildV1GitConfig),
    projectId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    finishTime: Schema.optional(Schema.String),
    results: Schema.optional(GoogleDevtoolsCloudbuildV1Results),
    timeout: Schema.optional(Schema.String),
    source: Schema.optional(GoogleDevtoolsCloudbuildV1Source),
    dependencies: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1Dependency),
    ),
    statusDetail: Schema.optional(Schema.String),
    secrets: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1Secret)),
    timing: Schema.optional(
      Schema.Record(Schema.String, GoogleDevtoolsCloudbuildV1TimeSpan),
    ),
    status: Schema.optional(Schema.String),
    images: Schema.optional(Schema.Array(Schema.String)),
    logsBucket: Schema.optional(Schema.String),
    substitutions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    serviceAccount: Schema.optional(Schema.String),
    availableSecrets: Schema.optional(GoogleDevtoolsCloudbuildV1Secrets),
    options: Schema.optional(GoogleDevtoolsCloudbuildV1BuildOptions),
    artifacts: Schema.optional(GoogleDevtoolsCloudbuildV1Artifacts),
    id: Schema.optional(Schema.String),
    approval: Schema.optional(GoogleDevtoolsCloudbuildV1BuildApproval),
    queueTtl: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    createTime: Schema.optional(Schema.String),
    failureInfo: Schema.optional(GoogleDevtoolsCloudbuildV1FailureInfo),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Build" });

export interface GoogleCloudRunV2BuildConfig {
  /** Optional. The name of the function (as defined in source code) that will be executed. Defaults to the resource name suffix, if not specified. For backward compatibility, if function with given name is not found, then the system will try to use function named "function". */
  functionTarget?: string;
  /** The Cloud Storage bucket URI where the function source code is located. */
  sourceLocation?: string;
  /** Optional. User-provided build-time environment variables for the function */
  environmentVariables?: Record<string, string>;
  /** Output only. The Cloud Build name of the latest successful deployment of the function. */
  name?: string;
  /** Optional. The base image used to build the function. */
  baseImage?: string;
  /** Optional. Sets whether the function will receive automatic base image updates. */
  enableAutomaticUpdates?: boolean;
  /** Optional. Service account to be used for building the container. The format of this field is `projects/{projectId}/serviceAccounts/{serviceAccountEmail}`. */
  serviceAccount?: string;
  /** Optional. Artifact Registry URI to store the built image. */
  imageUri?: string;
  /** Optional. Name of the Cloud Build Custom Worker Pool that should be used to build the Cloud Run function. The format of this field is `projects/{project}/locations/{region}/workerPools/{workerPool}` where `{project}` and `{region}` are the project id and region respectively where the worker pool is defined and `{workerPool}` is the short name of the worker pool. */
  workerPool?: string;
}

export const GoogleCloudRunV2BuildConfig: Schema.Schema<GoogleCloudRunV2BuildConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    functionTarget: Schema.optional(Schema.String),
    sourceLocation: Schema.optional(Schema.String),
    environmentVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    name: Schema.optional(Schema.String),
    baseImage: Schema.optional(Schema.String),
    enableAutomaticUpdates: Schema.optional(Schema.Boolean),
    serviceAccount: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
    workerPool: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2BuildConfig" });

export interface GoogleCloudRunV2MultiRegionSettings {
  /** Optional. System-generated unique id for the multi-region Service. */
  multiRegionId?: string;
  /** Required. List of regions to deploy to, including primary region. */
  regions?: ReadonlyArray<string>;
}

export const GoogleCloudRunV2MultiRegionSettings: Schema.Schema<GoogleCloudRunV2MultiRegionSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    multiRegionId: Schema.optional(Schema.String),
    regions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudRunV2MultiRegionSettings" });

export interface GoogleCloudRunV2ExecutionReference {
  /** Status for the execution completion. */
  completionStatus?:
    | "COMPLETION_STATUS_UNSPECIFIED"
    | "EXECUTION_SUCCEEDED"
    | "EXECUTION_FAILED"
    | "EXECUTION_RUNNING"
    | "EXECUTION_PENDING"
    | "EXECUTION_CANCELLED"
    | (string & {});
  /** Creation timestamp of the execution. */
  createTime?: string;
  /** The deletion time of the execution. It is only populated as a response to a Delete request. */
  deleteTime?: string;
  /** Creation timestamp of the execution. */
  completionTime?: string;
  /** Name of the execution. */
  name?: string;
}

export const GoogleCloudRunV2ExecutionReference: Schema.Schema<GoogleCloudRunV2ExecutionReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    completionStatus: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    completionTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2ExecutionReference" });

export interface GoogleCloudRunV2ServiceScaling {
  /** Optional. total min instances for the service. This number of instances is divided among all revisions with specified traffic based on the percent of traffic they are receiving. */
  minInstanceCount?: number;
  /** Optional. The scaling mode for the service. */
  scalingMode?:
    | "SCALING_MODE_UNSPECIFIED"
    | "AUTOMATIC"
    | "MANUAL"
    | (string & {});
  /** Optional. total instance count for the service in manual scaling mode. This number of instances is divided among all revisions with specified traffic based on the percent of traffic they are receiving. */
  manualInstanceCount?: number;
  /** Optional. total max instances for the service. This number of instances is divided among all revisions with specified traffic based on the percent of traffic they are receiving. */
  maxInstanceCount?: number;
}

export const GoogleCloudRunV2ServiceScaling: Schema.Schema<GoogleCloudRunV2ServiceScaling> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minInstanceCount: Schema.optional(Schema.Number),
    scalingMode: Schema.optional(Schema.String),
    manualInstanceCount: Schema.optional(Schema.Number),
    maxInstanceCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudRunV2ServiceScaling" });

export interface GoogleCloudRunV2TrafficTarget {
  /** The allocation type for this traffic target. */
  type?:
    | "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED"
    | "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
    | "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"
    | (string & {});
  /** Specifies percent of the traffic to this Revision. This defaults to zero if unspecified. */
  percent?: number;
  /** Revision to which to send this portion of traffic, if traffic allocation is by revision. */
  revision?: string;
  /** Indicates a string to be part of the URI to exclusively reference this target. */
  tag?: string;
}

export const GoogleCloudRunV2TrafficTarget: Schema.Schema<GoogleCloudRunV2TrafficTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    percent: Schema.optional(Schema.Number),
    revision: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2TrafficTarget" });

export interface GoogleCloudRunV2BinaryAuthorization {
  /** Optional. If present, indicates to use Breakglass using this justification. If use_default is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass */
  breakglassJustification?: string;
  /** Optional. If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. */
  useDefault?: boolean;
  /** Optional. The path to a binary authorization policy. Format: `projects/{project}/platforms/cloudRun/{policy-name}` */
  policy?: string;
}

export const GoogleCloudRunV2BinaryAuthorization: Schema.Schema<GoogleCloudRunV2BinaryAuthorization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    breakglassJustification: Schema.optional(Schema.String),
    useDefault: Schema.optional(Schema.Boolean),
    policy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2BinaryAuthorization" });

export interface GoogleCloudRunV2TrafficTargetStatus {
  /** Specifies percent of the traffic to this Revision. */
  percent?: number;
  /** Displays the target URI. */
  uri?: string;
  /** The allocation type for this traffic target. */
  type?:
    | "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED"
    | "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
    | "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"
    | (string & {});
  /** Revision to which this traffic is sent. */
  revision?: string;
  /** Indicates the string used in the URI to exclusively reference this target. */
  tag?: string;
}

export const GoogleCloudRunV2TrafficTargetStatus: Schema.Schema<GoogleCloudRunV2TrafficTargetStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    percent: Schema.optional(Schema.Number),
    uri: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2TrafficTargetStatus" });

export interface GoogleCloudRunV2Service {
  /** Optional. Specifies service-level scaling settings */
  scaling?: GoogleCloudRunV2ServiceScaling;
  /** Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`. */
  generation?: string;
  /** Identifier. The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project}/locations/{location}/services/{service_id} */
  name?: string;
  /** Output only. Name of the latest revision that is serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  latestReadyRevision?: string;
  /** Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 Service. This field follows Kubernetes annotations' namespacing, limits, and rules. */
  annotations?: Record<string, string>;
  /** Output only. Email address of the last authenticated modifier. */
  lastModifier?: string;
  /** Optional. Settings for multi-region deployment. */
  multiRegionSettings?: GoogleCloudRunV2MultiRegionSettings;
  /** Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service. */
  labels?: Record<string, string>;
  /** Output only. True if Cloud Run Threat Detection monitoring is enabled for the parent project of this Service. */
  threatDetectionEnabled?: boolean;
  /** Optional. Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100% traffic to the latest `Ready` Revision. */
  traffic?: ReadonlyArray<GoogleCloudRunV2TrafficTarget>;
  /** Output only. Returns true if the Service is currently being acted upon by the system to bring it into the desired state. When a new Service is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Service to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation`, `latest_ready_revision`, `traffic_statuses`, and `uri` will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the Service, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `traffic` and `traffic_statuses`, `observed_generation` and `generation`, `latest_ready_revision` and `latest_created_revision`. If reconciliation failed, `traffic_statuses`, `observed_generation`, and `latest_ready_revision` will have the state of the last serving revision, or empty for newly created Services. Additional information on the failure can be found in `terminal_condition` and `conditions`. */
  reconciling?: boolean;
  /** Output only. Email address of the authenticated creator. */
  creator?: string;
  /** Arbitrary identifier for the API client. */
  client?: string;
  /** Arbitrary version identifier for the API client. */
  clientVersion?: string;
  /** Optional. Disables public resolution of the default URI of this service. */
  defaultUriDisabled?: boolean;
  /** Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Service does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  conditions?: ReadonlyArray<GoogleCloudRunV2Condition>;
  /** One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests. For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences. */
  customAudiences?: ReadonlyArray<string>;
  /** Optional. Settings for the Binary Authorization feature. */
  binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;
  /** Output only. The generation of this Service currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`. */
  observedGeneration?: string;
  /** Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
  uid?: string;
  /** Output only. The deletion time. It is only populated as a response to a Delete request. */
  deleteTime?: string;
  /** Optional. The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. */
  launchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "UNIMPLEMENTED"
    | "PRELAUNCH"
    | "EARLY_ACCESS"
    | "ALPHA"
    | "BETA"
    | "GA"
    | "DEPRECATED"
    | (string & {});
  /** User-provided description of the Service. This field currently has a 512-character limit. */
  description?: string;
  /** Output only. The Condition of this Service, containing its readiness status, and detailed error information in case it did not reach a serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  terminalCondition?: GoogleCloudRunV2Condition;
  /** Output only. For a deleted resource, the time after which it will be permanently deleted. */
  expireTime?: string;
  /** Output only. The main URI in which this Service is serving traffic. */
  uri?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. All URLs serving traffic for this Service. */
  urls?: ReadonlyArray<string>;
  /** Optional. IAP settings on the Service. */
  iapEnabled?: boolean;
  /** Optional. Disables IAM permission check for run.routes.invoke for callers of this service. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check. */
  invokerIamDisabled?: boolean;
  /** Output only. Name of the last created revision. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  latestCreatedRevision?: string;
  /** Optional. Configuration for building a Cloud Run function. */
  buildConfig?: GoogleCloudRunV2BuildConfig;
  /** Output only. The creation time. */
  createTime?: string;
  /** Required. The template used to create revisions for this Service. */
  template?: GoogleCloudRunV2RevisionTemplate;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Optional. Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. */
  ingress?:
    | "INGRESS_TRAFFIC_UNSPECIFIED"
    | "INGRESS_TRAFFIC_ALL"
    | "INGRESS_TRAFFIC_INTERNAL_ONLY"
    | "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"
    | "INGRESS_TRAFFIC_NONE"
    | (string & {});
  /** Output only. Detailed status information for corresponding traffic targets. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  trafficStatuses?: ReadonlyArray<GoogleCloudRunV2TrafficTargetStatus>;
  /** Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
  etag?: string;
}

export const GoogleCloudRunV2Service: Schema.Schema<GoogleCloudRunV2Service> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scaling: Schema.optional(GoogleCloudRunV2ServiceScaling),
    generation: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    latestReadyRevision: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    lastModifier: Schema.optional(Schema.String),
    multiRegionSettings: Schema.optional(GoogleCloudRunV2MultiRegionSettings),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    threatDetectionEnabled: Schema.optional(Schema.Boolean),
    traffic: Schema.optional(Schema.Array(GoogleCloudRunV2TrafficTarget)),
    reconciling: Schema.optional(Schema.Boolean),
    creator: Schema.optional(Schema.String),
    client: Schema.optional(Schema.String),
    clientVersion: Schema.optional(Schema.String),
    defaultUriDisabled: Schema.optional(Schema.Boolean),
    conditions: Schema.optional(Schema.Array(GoogleCloudRunV2Condition)),
    customAudiences: Schema.optional(Schema.Array(Schema.String)),
    binaryAuthorization: Schema.optional(GoogleCloudRunV2BinaryAuthorization),
    observedGeneration: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    launchStage: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    terminalCondition: Schema.optional(GoogleCloudRunV2Condition),
    expireTime: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    urls: Schema.optional(Schema.Array(Schema.String)),
    iapEnabled: Schema.optional(Schema.Boolean),
    invokerIamDisabled: Schema.optional(Schema.Boolean),
    latestCreatedRevision: Schema.optional(Schema.String),
    buildConfig: Schema.optional(GoogleCloudRunV2BuildConfig),
    createTime: Schema.optional(Schema.String),
    template: Schema.optional(GoogleCloudRunV2RevisionTemplate),
    updateTime: Schema.optional(Schema.String),
    ingress: Schema.optional(Schema.String),
    trafficStatuses: Schema.optional(
      Schema.Array(GoogleCloudRunV2TrafficTargetStatus),
    ),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2Service" });

export interface GoogleCloudRunV2ListServicesResponse {
  /** A token indicating there are more items than page_size. Use it in the next ListServices request to continue. */
  nextPageToken?: string;
  /** The resulting list of Services. */
  services?: ReadonlyArray<GoogleCloudRunV2Service>;
  /** Output only. For global requests, returns the list of regions that could not be reached within the deadline. */
  unreachable?: ReadonlyArray<string>;
}

export const GoogleCloudRunV2ListServicesResponse: Schema.Schema<GoogleCloudRunV2ListServicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    services: Schema.optional(Schema.Array(GoogleCloudRunV2Service)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudRunV2ListServicesResponse" });

export interface GoogleTypeExpr {
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
}

export const GoogleTypeExpr: Schema.Schema<GoogleTypeExpr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleTypeExpr" });

export interface GoogleIamV1Binding {
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: GoogleTypeExpr;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
}

export const GoogleIamV1Binding: Schema.Schema<GoogleIamV1Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(GoogleTypeExpr),
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1Binding" });

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
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<GoogleIamV1AuditLogConfig>;
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
}

export const GoogleIamV1AuditConfig: Schema.Schema<GoogleIamV1AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auditLogConfigs: Schema.optional(Schema.Array(GoogleIamV1AuditLogConfig)),
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleIamV1AuditConfig" });

export interface GoogleIamV1Policy {
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<GoogleIamV1Binding>;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<GoogleIamV1AuditConfig>;
}

export const GoogleIamV1Policy: Schema.Schema<GoogleIamV1Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(GoogleIamV1Binding)),
    auditConfigs: Schema.optional(Schema.Array(GoogleIamV1AuditConfig)),
  }).annotate({ identifier: "GoogleIamV1Policy" });

export interface GoogleIamV1TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const GoogleIamV1TestIamPermissionsResponse: Schema.Schema<GoogleIamV1TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1TestIamPermissionsResponse" });

export interface GoogleCloudRunV2TaskTemplate {
  /** Number of retries allowed per Task, before marking this Task failed. Defaults to 3. */
  maxRetries?: number;
  /** A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
  encryptionKey?: string;
  /** Optional. The execution environment being used to host this Task. */
  executionEnvironment?:
    | "EXECUTION_ENVIRONMENT_UNSPECIFIED"
    | "EXECUTION_ENVIRONMENT_GEN1"
    | "EXECUTION_ENVIRONMENT_GEN2"
    | (string & {});
  /** Holds the single container that defines the unit of execution for this task. */
  containers?: ReadonlyArray<GoogleCloudRunV2Container>;
  /** Optional. A list of Volumes to make available to containers. */
  volumes?: ReadonlyArray<GoogleCloudRunV2Volume>;
  /** Optional. Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. Defaults to 600 seconds. */
  timeout?: string;
  /** Optional. True if GPU zonal redundancy is disabled on this task template. */
  gpuZonalRedundancyDisabled?: boolean;
  /** Optional. VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. */
  vpcAccess?: GoogleCloudRunV2VpcAccess;
  /** Optional. The node selector for the task template. */
  nodeSelector?: GoogleCloudRunV2NodeSelector;
  /** Optional. Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account. */
  serviceAccount?: string;
}

export const GoogleCloudRunV2TaskTemplate: Schema.Schema<GoogleCloudRunV2TaskTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxRetries: Schema.optional(Schema.Number),
    encryptionKey: Schema.optional(Schema.String),
    executionEnvironment: Schema.optional(Schema.String),
    containers: Schema.optional(Schema.Array(GoogleCloudRunV2Container)),
    volumes: Schema.optional(Schema.Array(GoogleCloudRunV2Volume)),
    timeout: Schema.optional(Schema.String),
    gpuZonalRedundancyDisabled: Schema.optional(Schema.Boolean),
    vpcAccess: Schema.optional(GoogleCloudRunV2VpcAccess),
    nodeSelector: Schema.optional(GoogleCloudRunV2NodeSelector),
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2TaskTemplate" });

export interface GoogleCloudRunV2ExecutionTemplate {
  /** Optional. Arbitrary identifier for the API client. */
  client?: string;
  /** Optional. Arbitrary version identifier for the API client. */
  clientVersion?: string;
  /** Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 ExecutionTemplate. This field follows Kubernetes annotations' namespacing, limits, and rules. */
  annotations?: Record<string, string>;
  /** Optional. Specifies the maximum desired number of tasks the execution should run at given time. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism. */
  parallelism?: number;
  /** Required. Describes the task(s) that will be created when executing an execution. */
  template?: GoogleCloudRunV2TaskTemplate;
  /** Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. Defaults to 1. */
  taskCount?: number;
  /** Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 ExecutionTemplate. */
  labels?: Record<string, string>;
}

export const GoogleCloudRunV2ExecutionTemplate: Schema.Schema<GoogleCloudRunV2ExecutionTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client: Schema.optional(Schema.String),
    clientVersion: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    parallelism: Schema.optional(Schema.Number),
    template: Schema.optional(GoogleCloudRunV2TaskTemplate),
    taskCount: Schema.optional(Schema.Number),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudRunV2ExecutionTemplate" });

export interface GoogleCloudRunV2Job {
  /** Output only. A number that monotonically increases every time the user modifies the desired state. */
  generation?: string;
  /** Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected on new resources. All system annotations in v1 now have a corresponding field in v2 Job. This field follows Kubernetes annotations' namespacing, limits, and rules. */
  annotations?: Record<string, string>;
  /** The fully qualified name of this Job. Format: projects/{project}/locations/{location}/jobs/{job} */
  name?: string;
  /** Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Job. */
  labels?: Record<string, string>;
  /** Output only. Returns true if the Job is currently being acted upon by the system to bring it into the desired state. When a new Job is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Job to the desired state. This process is called reconciliation. While reconciliation is in process, `observed_generation` and `latest_succeeded_execution`, will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the state matches the Job, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `observed_generation` and `generation`, `latest_succeeded_execution` and `latest_created_execution`. If reconciliation failed, `observed_generation` and `latest_succeeded_execution` will have the state of the last succeeded execution or empty for newly created Job. Additional information on the failure can be found in `terminal_condition` and `conditions`. */
  reconciling?: boolean;
  /** Output only. Email address of the last authenticated modifier. */
  lastModifier?: string;
  /** Output only. Email address of the authenticated creator. */
  creator?: string;
  /** Arbitrary identifier for the API client. */
  client?: string;
  /** Arbitrary version identifier for the API client. */
  clientVersion?: string;
  /** Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Job does not reach its desired state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  conditions?: ReadonlyArray<GoogleCloudRunV2Condition>;
  /** Settings for the Binary Authorization feature. */
  binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;
  /** Output only. Name of the last created execution. */
  latestCreatedExecution?: GoogleCloudRunV2ExecutionReference;
  /** Output only. The deletion time. It is only populated as a response to a Delete request. */
  deleteTime?: string;
  /** Output only. The generation of this Job. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  observedGeneration?: string;
  /** Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
  uid?: string;
  /** The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. */
  launchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "UNIMPLEMENTED"
    | "PRELAUNCH"
    | "EARLY_ACCESS"
    | "ALPHA"
    | "BETA"
    | "GA"
    | "DEPRECATED"
    | (string & {});
  /** Output only. The Condition of this Job, containing its readiness status, and detailed error information in case it did not reach the desired state. */
  terminalCondition?: GoogleCloudRunV2Condition;
  /** A unique string used as a suffix for creating a new execution. The Job will become ready when the execution is successfully completed. The sum of job name and token length must be fewer than 63 characters. */
  runExecutionToken?: string;
  /** Output only. For a deleted resource, the time after which it will be permamently deleted. */
  expireTime?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** A unique string used as a suffix creating a new execution. The Job will become ready when the execution is successfully started. The sum of job name and token length must be fewer than 63 characters. */
  startExecutionToken?: string;
  /** Output only. The creation time. */
  createTime?: string;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Required. The template used to create executions for this Job. */
  template?: GoogleCloudRunV2ExecutionTemplate;
  /** Output only. Number of executions created for this job. */
  executionCount?: number;
  /** Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
  etag?: string;
}

export const GoogleCloudRunV2Job: Schema.Schema<GoogleCloudRunV2Job> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generation: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    reconciling: Schema.optional(Schema.Boolean),
    lastModifier: Schema.optional(Schema.String),
    creator: Schema.optional(Schema.String),
    client: Schema.optional(Schema.String),
    clientVersion: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Array(GoogleCloudRunV2Condition)),
    binaryAuthorization: Schema.optional(GoogleCloudRunV2BinaryAuthorization),
    latestCreatedExecution: Schema.optional(GoogleCloudRunV2ExecutionReference),
    deleteTime: Schema.optional(Schema.String),
    observedGeneration: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    launchStage: Schema.optional(Schema.String),
    terminalCondition: Schema.optional(GoogleCloudRunV2Condition),
    runExecutionToken: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    startExecutionToken: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    template: Schema.optional(GoogleCloudRunV2ExecutionTemplate),
    executionCount: Schema.optional(Schema.Number),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2Job" });

export interface GoogleCloudRunV2ListJobsResponse {
  /** The resulting list of Jobs. */
  jobs?: ReadonlyArray<GoogleCloudRunV2Job>;
  /** A token indicating there are more items than page_size. Use it in the next ListJobs request to continue. */
  nextPageToken?: string;
}

export const GoogleCloudRunV2ListJobsResponse: Schema.Schema<GoogleCloudRunV2ListJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobs: Schema.optional(Schema.Array(GoogleCloudRunV2Job)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2ListJobsResponse" });

export interface GoogleCloudRunV2ExportImageResponse {
  /** An operation ID used to track the status of image exports tied to the original pod ID in the request. */
  operationId?: string;
}

export const GoogleCloudRunV2ExportImageResponse: Schema.Schema<GoogleCloudRunV2ExportImageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2ExportImageResponse" });

export interface GoogleCloudRunV2InstanceSplitStatus {
  /** The allocation type for this instance split. */
  type?:
    | "INSTANCE_SPLIT_ALLOCATION_TYPE_UNSPECIFIED"
    | "INSTANCE_SPLIT_ALLOCATION_TYPE_LATEST"
    | "INSTANCE_SPLIT_ALLOCATION_TYPE_REVISION"
    | (string & {});
  /** Specifies percent of the instance split to this Revision. */
  percent?: number;
  /** Revision to which this instance split is assigned. */
  revision?: string;
}

export const GoogleCloudRunV2InstanceSplitStatus: Schema.Schema<GoogleCloudRunV2InstanceSplitStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    percent: Schema.optional(Schema.Number),
    revision: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2InstanceSplitStatus" });

export interface GoogleCloudRunV2WorkerPoolScaling {
  /** Optional. The total number of instances in manual scaling mode. */
  manualInstanceCount?: number;
}

export const GoogleCloudRunV2WorkerPoolScaling: Schema.Schema<GoogleCloudRunV2WorkerPoolScaling> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    manualInstanceCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudRunV2WorkerPoolScaling" });

export interface GoogleCloudRunV2WorkerPoolRevisionTemplate {
  /** Optional. The unique name for the revision. If this field is omitted, it will be automatically generated based on the WorkerPool name. */
  revision?: string;
  /** Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 WorkerPoolRevisionTemplate. This field follows Kubernetes annotations' namespacing, limits, and rules. */
  annotations?: Record<string, string>;
  /** Optional. The action to take if the encryption key is revoked. */
  encryptionKeyRevocationAction?:
    | "ENCRYPTION_KEY_REVOCATION_ACTION_UNSPECIFIED"
    | "PREVENT_NEW"
    | "SHUTDOWN"
    | (string & {});
  /** Optional. If encryption_key_revocation_action is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour. */
  encryptionKeyShutdownDuration?: string;
  /** Optional. True if GPU zonal redundancy is disabled on this worker pool. */
  gpuZonalRedundancyDisabled?: boolean;
  /** Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 WorkerPoolRevisionTemplate. */
  labels?: Record<string, string>;
  /** A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
  encryptionKey?: string;
  /** Optional. Arbitrary identifier for the API client. */
  client?: string;
  /** Optional. Arbitrary version identifier for the API client. */
  clientVersion?: string;
  /** Optional. Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account. */
  serviceAccount?: string;
  /** Optional. The node selector for the revision template. */
  nodeSelector?: GoogleCloudRunV2NodeSelector;
  /** Optional. VPC Access configuration to use for this Revision. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. */
  vpcAccess?: GoogleCloudRunV2VpcAccess;
  /** Holds list of the containers that defines the unit of execution for this Revision. */
  containers?: ReadonlyArray<GoogleCloudRunV2Container>;
  /** Optional. A list of Volumes to make available to containers. */
  volumes?: ReadonlyArray<GoogleCloudRunV2Volume>;
  /** Optional. Enables service mesh connectivity. */
  serviceMesh?: GoogleCloudRunV2ServiceMesh;
}

export const GoogleCloudRunV2WorkerPoolRevisionTemplate: Schema.Schema<GoogleCloudRunV2WorkerPoolRevisionTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revision: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    encryptionKeyRevocationAction: Schema.optional(Schema.String),
    encryptionKeyShutdownDuration: Schema.optional(Schema.String),
    gpuZonalRedundancyDisabled: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    encryptionKey: Schema.optional(Schema.String),
    client: Schema.optional(Schema.String),
    clientVersion: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    nodeSelector: Schema.optional(GoogleCloudRunV2NodeSelector),
    vpcAccess: Schema.optional(GoogleCloudRunV2VpcAccess),
    containers: Schema.optional(Schema.Array(GoogleCloudRunV2Container)),
    volumes: Schema.optional(Schema.Array(GoogleCloudRunV2Volume)),
    serviceMesh: Schema.optional(GoogleCloudRunV2ServiceMesh),
  }).annotate({ identifier: "GoogleCloudRunV2WorkerPoolRevisionTemplate" });

export interface GoogleCloudRunV2InstanceSplit {
  /** The allocation type for this instance split. */
  type?:
    | "INSTANCE_SPLIT_ALLOCATION_TYPE_UNSPECIFIED"
    | "INSTANCE_SPLIT_ALLOCATION_TYPE_LATEST"
    | "INSTANCE_SPLIT_ALLOCATION_TYPE_REVISION"
    | (string & {});
  /** Specifies percent of the instance split to this Revision. This defaults to zero if unspecified. */
  percent?: number;
  /** Revision to which to assign this portion of instances, if split allocation is by revision. */
  revision?: string;
}

export const GoogleCloudRunV2InstanceSplit: Schema.Schema<GoogleCloudRunV2InstanceSplit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    percent: Schema.optional(Schema.Number),
    revision: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2InstanceSplit" });

export interface GoogleCloudRunV2WorkerPool {
  /** Output only. The generation of this WorkerPool currently serving workloads. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`. */
  observedGeneration?: string;
  /** Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
  uid?: string;
  /** Output only. The deletion time. It is only populated as a response to a Delete request. */
  deleteTime?: string;
  /** Deprecated: Not supported, and ignored by Cloud Run. */
  customAudiences?: ReadonlyArray<string>;
  /** Optional. Settings for the Binary Authorization feature. */
  binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;
  /** Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the WorkerPool does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  conditions?: ReadonlyArray<GoogleCloudRunV2Condition>;
  /** Output only. Detailed status information for corresponding instance splits. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  instanceSplitStatuses?: ReadonlyArray<GoogleCloudRunV2InstanceSplitStatus>;
  /** Output only. Email address of the authenticated creator. */
  creator?: string;
  /** Arbitrary identifier for the API client. */
  client?: string;
  /** Arbitrary version identifier for the API client. */
  clientVersion?: string;
  /** Output only. Email address of the last authenticated modifier. */
  lastModifier?: string;
  /** Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 WorkerPool. */
  labels?: Record<string, string>;
  /** Output only. Indicates whether Cloud Run Threat Detection monitoring is enabled for the parent project of this worker pool. */
  threatDetectionEnabled?: boolean;
  /** Output only. Returns true if the WorkerPool is currently being acted upon by the system to bring it into the desired state. When a new WorkerPool is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the WorkerPool to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation`, `latest_ready_revison`, `instance_split_statuses`, and `uri` will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the WorkerPool, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `instance_splits` and `instance_split_statuses`, `observed_generation` and `generation`, `latest_ready_revision` and `latest_created_revision`. If reconciliation failed, `instance_split_statuses`, `observed_generation`, and `latest_ready_revision` will have the state of the last serving revision, or empty for newly created WorkerPools. Additional information on the failure can be found in `terminal_condition` and `conditions`. */
  reconciling?: boolean;
  /** The fully qualified name of this WorkerPool. In CreateWorkerPoolRequest, this field is ignored, and instead composed from CreateWorkerPoolRequest.parent and CreateWorkerPoolRequest.worker_id. Format: `projects/{project}/locations/{location}/workerPools/{worker_id}` */
  name?: string;
  /** Output only. Name of the latest revision that is serving workloads. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  latestReadyRevision?: string;
  /** Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 WorkerPool. This field follows Kubernetes annotations' namespacing, limits, and rules. */
  annotations?: Record<string, string>;
  /** Optional. Specifies worker-pool-level scaling settings */
  scaling?: GoogleCloudRunV2WorkerPoolScaling;
  /** Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`. */
  generation?: string;
  /** Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
  etag?: string;
  /** Required. The template used to create revisions for this WorkerPool. */
  template?: GoogleCloudRunV2WorkerPoolRevisionTemplate;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Output only. The creation time. */
  createTime?: string;
  /** Output only. Name of the last created revision. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  latestCreatedRevision?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. For a deleted resource, the time after which it will be permamently deleted. */
  expireTime?: string;
  /** Optional. Specifies how to distribute instances over a collection of Revisions belonging to the WorkerPool. If instance split is empty or not provided, defaults to 100% instances assigned to the latest `Ready` Revision. */
  instanceSplits?: ReadonlyArray<GoogleCloudRunV2InstanceSplit>;
  /** User-provided description of the WorkerPool. This field currently has a 512-character limit. */
  description?: string;
  /** Output only. The Condition of this WorkerPool, containing its readiness status, and detailed error information in case it did not reach a serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  terminalCondition?: GoogleCloudRunV2Condition;
  /** Optional. The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. */
  launchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "UNIMPLEMENTED"
    | "PRELAUNCH"
    | "EARLY_ACCESS"
    | "ALPHA"
    | "BETA"
    | "GA"
    | "DEPRECATED"
    | (string & {});
}

export const GoogleCloudRunV2WorkerPool: Schema.Schema<GoogleCloudRunV2WorkerPool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    observedGeneration: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    customAudiences: Schema.optional(Schema.Array(Schema.String)),
    binaryAuthorization: Schema.optional(GoogleCloudRunV2BinaryAuthorization),
    conditions: Schema.optional(Schema.Array(GoogleCloudRunV2Condition)),
    instanceSplitStatuses: Schema.optional(
      Schema.Array(GoogleCloudRunV2InstanceSplitStatus),
    ),
    creator: Schema.optional(Schema.String),
    client: Schema.optional(Schema.String),
    clientVersion: Schema.optional(Schema.String),
    lastModifier: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    threatDetectionEnabled: Schema.optional(Schema.Boolean),
    reconciling: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    latestReadyRevision: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    scaling: Schema.optional(GoogleCloudRunV2WorkerPoolScaling),
    generation: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    template: Schema.optional(GoogleCloudRunV2WorkerPoolRevisionTemplate),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    latestCreatedRevision: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    expireTime: Schema.optional(Schema.String),
    instanceSplits: Schema.optional(
      Schema.Array(GoogleCloudRunV2InstanceSplit),
    ),
    description: Schema.optional(Schema.String),
    terminalCondition: Schema.optional(GoogleCloudRunV2Condition),
    launchStage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2WorkerPool" });

export interface GoogleCloudRunV2ContainerStatus {
  /** ImageDigest holds the resolved digest for the image specified and resolved during the creation of Revision. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object. */
  imageDigest?: string;
  /** The name of the container, if specified. */
  name?: string;
}

export const GoogleCloudRunV2ContainerStatus: Schema.Schema<GoogleCloudRunV2ContainerStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageDigest: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2ContainerStatus" });

export interface GoogleIamV1TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const GoogleIamV1TestIamPermissionsRequest: Schema.Schema<GoogleIamV1TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1TestIamPermissionsRequest" });

export interface GoogleCloudRunV2ContainerOverride {
  /** Optional. True if the intention is to clear out existing args list. */
  clearArgs?: boolean;
  /** List of environment variables to set in the container. Will be merged with existing env for override. */
  env?: ReadonlyArray<GoogleCloudRunV2EnvVar>;
  /** The name of the container specified as a DNS_LABEL. */
  name?: string;
  /** Optional. Arguments to the entrypoint. Will replace existing args for override. */
  args?: ReadonlyArray<string>;
}

export const GoogleCloudRunV2ContainerOverride: Schema.Schema<GoogleCloudRunV2ContainerOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clearArgs: Schema.optional(Schema.Boolean),
    env: Schema.optional(Schema.Array(GoogleCloudRunV2EnvVar)),
    name: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudRunV2ContainerOverride" });

export interface GoogleCloudRunV2Overrides {
  /** Optional. The desired number of tasks the execution should run. Will replace existing task_count value. */
  taskCount?: number;
  /** Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. Will replace existing timeout_seconds value. */
  timeout?: string;
  /** Per container override specification. */
  containerOverrides?: ReadonlyArray<GoogleCloudRunV2ContainerOverride>;
}

export const GoogleCloudRunV2Overrides: Schema.Schema<GoogleCloudRunV2Overrides> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taskCount: Schema.optional(Schema.Number),
    timeout: Schema.optional(Schema.String),
    containerOverrides: Schema.optional(
      Schema.Array(GoogleCloudRunV2ContainerOverride),
    ),
  }).annotate({ identifier: "GoogleCloudRunV2Overrides" });

export interface GoogleLongrunningOperation {
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(GoogleRpcStatus),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleLongrunningListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const GoogleLongrunningListOperationsResponse: Schema.Schema<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface Proto2BridgeMessageSet {}

export const Proto2BridgeMessageSet: Schema.Schema<Proto2BridgeMessageSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Proto2BridgeMessageSet",
  });

export interface UtilStatusProto {
  /** Numeric code drawn from the space specified below. Often, this is the canonical error space, and code is drawn from google3/util/task/codes.proto copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional int32 code = 1; */
  code?: number;
  /** Detail message copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional string message = 3; */
  message?: string;
  /** copybara:strip_begin(b/383363683) Space to which this status belongs copybara:strip_end_and_replace optional string space = 2; // Space to which this status belongs */
  space?: string;
  /** copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional int32 canonical_code = 6; */
  canonicalCode?: number;
  /** message_set associates an arbitrary proto message with the status. copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional proto2.bridge.MessageSet message_set = 5; */
  messageSet?: Proto2BridgeMessageSet;
}

export const UtilStatusProto: Schema.Schema<UtilStatusProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    space: Schema.optional(Schema.String),
    canonicalCode: Schema.optional(Schema.Number),
    messageSet: Schema.optional(Proto2BridgeMessageSet),
  }).annotate({ identifier: "UtilStatusProto" });

export interface GoogleCloudRunV2Execution {
  /** Output only. The generation of this Execution. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  observedGeneration?: string;
  /** Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
  uid?: string;
  /** Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request. */
  deleteTime?: string;
  /** Output only. The number of tasks which have retried at least once. */
  retriedCount?: number;
  /** Output only. URI where logs for this execution can be found in Cloud Console. */
  logUri?: string;
  /** Output only. The number of actively running tasks. */
  runningCount?: number;
  /** Output only. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. */
  taskCount?: number;
  /** Output only. Represents time when the execution was completed. It is not guaranteed to be set in happens-before order across separate operations. */
  completionTime?: string;
  /** Output only. The name of the parent Job. */
  job?: string;
  /** Output only. The Condition of this Execution, containing its readiness status, and detailed error information in case it did not reach the desired state. */
  conditions?: ReadonlyArray<GoogleCloudRunV2Condition>;
  /** Output only. The number of tasks which reached phase Succeeded. */
  succeededCount?: number;
  /** Output only. Email address of the authenticated creator. */
  creator?: string;
  /** Output only. Arbitrary identifier for the API client. */
  client?: string;
  /** Output only. Arbitrary version identifier for the API client. */
  clientVersion?: string;
  /** Output only. Represents time when the execution started to run. It is not guaranteed to be set in happens-before order across separate operations. */
  startTime?: string;
  /** Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels */
  labels?: Record<string, string>;
  /** Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run. */
  reconciling?: boolean;
  /** Output only. The unique name of this Execution. */
  name?: string;
  /** Output only. Specifies the maximum desired number of tasks the execution should run at any given time. Must be <= task_count. The actual number of tasks running in steady state will be less than this number when ((.spec.task_count - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. */
  parallelism?: number;
  /** Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
  annotations?: Record<string, string>;
  /** Output only. A number that monotonically increases every time the user modifies the desired state. */
  generation?: string;
  /** Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
  etag?: string;
  /** Output only. The template used to create tasks for this execution. */
  template?: GoogleCloudRunV2TaskTemplate;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Output only. The number of tasks which reached phase Cancelled. */
  cancelledCount?: number;
  /** Output only. Represents time when the execution was acknowledged by the execution controller. It is not guaranteed to be set in happens-before order across separate operations. */
  createTime?: string;
  /** Output only. The number of tasks which reached phase Failed. */
  failedCount?: number;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request. */
  expireTime?: string;
  /** The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are used, this field will be BETA. */
  launchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "UNIMPLEMENTED"
    | "PRELAUNCH"
    | "EARLY_ACCESS"
    | "ALPHA"
    | "BETA"
    | "GA"
    | "DEPRECATED"
    | (string & {});
}

export const GoogleCloudRunV2Execution: Schema.Schema<GoogleCloudRunV2Execution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    observedGeneration: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    retriedCount: Schema.optional(Schema.Number),
    logUri: Schema.optional(Schema.String),
    runningCount: Schema.optional(Schema.Number),
    taskCount: Schema.optional(Schema.Number),
    completionTime: Schema.optional(Schema.String),
    job: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Array(GoogleCloudRunV2Condition)),
    succeededCount: Schema.optional(Schema.Number),
    creator: Schema.optional(Schema.String),
    client: Schema.optional(Schema.String),
    clientVersion: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    reconciling: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    parallelism: Schema.optional(Schema.Number),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    generation: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    template: Schema.optional(GoogleCloudRunV2TaskTemplate),
    updateTime: Schema.optional(Schema.String),
    cancelledCount: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    failedCount: Schema.optional(Schema.Number),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    expireTime: Schema.optional(Schema.String),
    launchStage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2Execution" });

export interface GoogleDevtoolsCloudbuildV1BuildOperationMetadata {
  /** The build that the operation is tracking. */
  build?: GoogleDevtoolsCloudbuildV1Build;
}

export const GoogleDevtoolsCloudbuildV1BuildOperationMetadata: Schema.Schema<GoogleDevtoolsCloudbuildV1BuildOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    build: Schema.optional(GoogleDevtoolsCloudbuildV1Build),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV1BuildOperationMetadata",
  });

export interface GoogleCloudRunV2ExportImageRequest {
  /** Required. The export destination url (the Artifact Registry repo). */
  destinationRepo?: string;
}

export const GoogleCloudRunV2ExportImageRequest: Schema.Schema<GoogleCloudRunV2ExportImageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationRepo: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2ExportImageRequest" });

export interface GoogleCloudRunV2Instance {
  /** Output only. The creation time. */
  createTime?: string;
  /** Optional. IAP settings on the Instance. */
  iapEnabled?: boolean;
  /** Optional. Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check. */
  invokerIamDisabled?: boolean;
  /** Optional. Provides the ingress settings for this Instance. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. */
  ingress?:
    | "INGRESS_TRAFFIC_UNSPECIFIED"
    | "INGRESS_TRAFFIC_ALL"
    | "INGRESS_TRAFFIC_INTERNAL_ONLY"
    | "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"
    | "INGRESS_TRAFFIC_NONE"
    | (string & {});
  /** Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
  etag?: string;
  /** Required. Holds the single container that defines the unit of execution for this Instance. */
  containers?: ReadonlyArray<GoogleCloudRunV2Container>;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Optional. VPC Access configuration to use for this Revision. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. */
  vpcAccess?: GoogleCloudRunV2VpcAccess;
  /** If encryption_key_revocation_action is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour. */
  encryptionKeyShutdownDuration?: string;
  /** User-provided description of the Instance. This field currently has a 512-character limit. */
  description?: string;
  /** Output only. The Condition of this Instance, containing its readiness status, and detailed error information in case it did not reach a serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  terminalCondition?: GoogleCloudRunV2Condition;
  /** The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. */
  launchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "UNIMPLEMENTED"
    | "PRELAUNCH"
    | "EARLY_ACCESS"
    | "ALPHA"
    | "BETA"
    | "GA"
    | "DEPRECATED"
    | (string & {});
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. All URLs serving traffic for this Instance. */
  urls?: ReadonlyArray<string>;
  /** Output only. For a deleted resource, the time after which it will be permamently deleted. */
  expireTime?: string;
  /** Optional. True if GPU zonal redundancy is disabled on this instance. */
  gpuZonalRedundancyDisabled?: boolean;
  /** Optional. The node selector for the instance. */
  nodeSelector?: GoogleCloudRunV2NodeSelector;
  /** Optional. Disables public resolution of the default URI of this Instance. */
  defaultUriDisabled?: boolean;
  /** Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Instance does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  conditions?: ReadonlyArray<GoogleCloudRunV2Condition>;
  /** Output only. Status information for each of the specified containers. The status includes the resolved digest for specified images. */
  containerStatuses?: ReadonlyArray<GoogleCloudRunV2ContainerStatus>;
  serviceAccount?: string;
  /** Output only. The generation of this Instance currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`. */
  observedGeneration?: string;
  /** Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
  uid?: string;
  /** Output only. The deletion time. */
  deleteTime?: string;
  /** Output only. The Google Console URI to obtain logs for the Instance. */
  logUri?: string;
  /** A list of Volumes to make available to containers. */
  volumes?: ReadonlyArray<GoogleCloudRunV2Volume>;
  /** Settings for the Binary Authorization feature. */
  binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;
  /** Optional. Duration the instance may be active before the system will shut it down. */
  timeout?: string;
  /** The fully qualified name of this Instance. In CreateInstanceRequest, this field is ignored, and instead composed from CreateInstanceRequest.parent and CreateInstanceRequest.instance_id. Format: projects/{project}/locations/{location}/instances/{instance_id} */
  name?: string;
  /** The action to take if the encryption key is revoked. */
  encryptionKeyRevocationAction?:
    | "ENCRYPTION_KEY_REVOCATION_ACTION_UNSPECIFIED"
    | "PREVENT_NEW"
    | "SHUTDOWN"
    | (string & {});
  annotations?: Record<string, string>;
  /** Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`. */
  generation?: string;
  /** Output only. Email address of the authenticated creator. */
  creator?: string;
  /** Arbitrary identifier for the API client. */
  client?: string;
  /** Arbitrary version identifier for the API client. */
  clientVersion?: string;
  /** A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
  encryptionKey?: string;
  /** Output only. Email address of the last authenticated modifier. */
  lastModifier?: string;
  labels?: Record<string, string>;
  /** Output only. Returns true if the Instance is currently being acted upon by the system to bring it into the desired state. When a new Instance is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Instance to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation` will have a transient value that might mismatch the intended state. Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the Instance, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. */
  reconciling?: boolean;
}

export const GoogleCloudRunV2Instance: Schema.Schema<GoogleCloudRunV2Instance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    iapEnabled: Schema.optional(Schema.Boolean),
    invokerIamDisabled: Schema.optional(Schema.Boolean),
    ingress: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    containers: Schema.optional(Schema.Array(GoogleCloudRunV2Container)),
    updateTime: Schema.optional(Schema.String),
    vpcAccess: Schema.optional(GoogleCloudRunV2VpcAccess),
    encryptionKeyShutdownDuration: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    terminalCondition: Schema.optional(GoogleCloudRunV2Condition),
    launchStage: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    urls: Schema.optional(Schema.Array(Schema.String)),
    expireTime: Schema.optional(Schema.String),
    gpuZonalRedundancyDisabled: Schema.optional(Schema.Boolean),
    nodeSelector: Schema.optional(GoogleCloudRunV2NodeSelector),
    defaultUriDisabled: Schema.optional(Schema.Boolean),
    conditions: Schema.optional(Schema.Array(GoogleCloudRunV2Condition)),
    containerStatuses: Schema.optional(
      Schema.Array(GoogleCloudRunV2ContainerStatus),
    ),
    serviceAccount: Schema.optional(Schema.String),
    observedGeneration: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    logUri: Schema.optional(Schema.String),
    volumes: Schema.optional(Schema.Array(GoogleCloudRunV2Volume)),
    binaryAuthorization: Schema.optional(GoogleCloudRunV2BinaryAuthorization),
    timeout: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    encryptionKeyRevocationAction: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    generation: Schema.optional(Schema.String),
    creator: Schema.optional(Schema.String),
    client: Schema.optional(Schema.String),
    clientVersion: Schema.optional(Schema.String),
    encryptionKey: Schema.optional(Schema.String),
    lastModifier: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    reconciling: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudRunV2Instance" });

export interface GoogleCloudRunV2Metadata {
  /** JSON encoded Google-generated Customer Metadata for a given resource/project. */
  metadata?: string;
}

export const GoogleCloudRunV2Metadata: Schema.Schema<GoogleCloudRunV2Metadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2Metadata" });

export interface GoogleCloudRunV2DockerBuild {}

export const GoogleCloudRunV2DockerBuild: Schema.Schema<GoogleCloudRunV2DockerBuild> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudRunV2DockerBuild",
  });

export interface GoogleCloudRunV2SubmitBuildResponse {
  /** Cloud Build operation to be polled via CloudBuild API. */
  buildOperation?: GoogleLongrunningOperation;
  /** URI of the base builder image in Artifact Registry being used in the build. Used to opt into automatic base image updates. */
  baseImageUri?: string;
  /** Warning message for the base image. */
  baseImageWarning?: string;
}

export const GoogleCloudRunV2SubmitBuildResponse: Schema.Schema<GoogleCloudRunV2SubmitBuildResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buildOperation: Schema.optional(GoogleLongrunningOperation),
    baseImageUri: Schema.optional(Schema.String),
    baseImageWarning: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2SubmitBuildResponse" });

export interface GoogleCloudRunV2CancelExecutionRequest {
  /** Indicates that the request should be validated without actually cancelling any resources. */
  validateOnly?: boolean;
  /** A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates. */
  etag?: string;
}

export const GoogleCloudRunV2CancelExecutionRequest: Schema.Schema<GoogleCloudRunV2CancelExecutionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2CancelExecutionRequest" });

export interface GoogleCloudRunV2RevisionScalingStatus {
  /** The current number of min instances provisioned for this revision. */
  desiredMinInstanceCount?: number;
}

export const GoogleCloudRunV2RevisionScalingStatus: Schema.Schema<GoogleCloudRunV2RevisionScalingStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    desiredMinInstanceCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudRunV2RevisionScalingStatus" });

export interface GoogleCloudRunV2Revision {
  /** Output only. The creation time. */
  createTime?: string;
  /** Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
  etag?: string;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** VPC Access configuration for this Revision. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. */
  vpcAccess?: GoogleCloudRunV2VpcAccess;
  /** Holds the list which define the units of execution for this Revision. */
  containers?: ReadonlyArray<GoogleCloudRunV2Container>;
  /** Enables service mesh connectivity. */
  serviceMesh?: GoogleCloudRunV2ServiceMesh;
  /** If encryption_key_revocation_action is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour. */
  encryptionKeyShutdownDuration?: string;
  /** The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are used, this field will be BETA. */
  launchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "UNIMPLEMENTED"
    | "PRELAUNCH"
    | "EARLY_ACCESS"
    | "ALPHA"
    | "BETA"
    | "GA"
    | "DEPRECATED"
    | (string & {});
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Sets the maximum number of requests that each serving instance can receive. */
  maxInstanceRequestConcurrency?: number;
  /** Output only. The current effective scaling settings for the revision. */
  scalingStatus?: GoogleCloudRunV2RevisionScalingStatus;
  /** Optional. Output only. True if GPU zonal redundancy is disabled on this revision. */
  gpuZonalRedundancyDisabled?: boolean;
  /** Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request. */
  expireTime?: string;
  /** Output only. The Condition of this Revision, containing its readiness status, and detailed error information in case it did not reach a serving state. */
  conditions?: ReadonlyArray<GoogleCloudRunV2Condition>;
  /** The node selector for the revision. */
  nodeSelector?: GoogleCloudRunV2NodeSelector;
  /** Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. */
  serviceAccount?: string;
  /** Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request. */
  deleteTime?: string;
  /** Output only. The generation of this Revision currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. */
  observedGeneration?: string;
  /** Output only. Server assigned unique identifier for the Revision. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
  uid?: string;
  /** Max allowed time for an instance to respond to a request. */
  timeout?: string;
  /** Output only. The Google Console URI to obtain logs for the Revision. */
  logUri?: string;
  /** A list of Volumes to make available to containers. */
  volumes?: ReadonlyArray<GoogleCloudRunV2Volume>;
  /** Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
  annotations?: Record<string, string>;
  /** Output only. The unique name of this Revision. */
  name?: string;
  /** The action to take if the encryption key is revoked. */
  encryptionKeyRevocationAction?:
    | "ENCRYPTION_KEY_REVOCATION_ACTION_UNSPECIFIED"
    | "PREVENT_NEW"
    | "SHUTDOWN"
    | (string & {});
  /** Output only. A number that monotonically increases every time the user modifies the desired state. */
  generation?: string;
  /** Output only. The name of the parent service. */
  service?: string;
  /** Scaling settings for this revision. */
  scaling?: GoogleCloudRunV2RevisionScaling;
  /** The execution environment being used to host this Revision. */
  executionEnvironment?:
    | "EXECUTION_ENVIRONMENT_UNSPECIFIED"
    | "EXECUTION_ENVIRONMENT_GEN1"
    | "EXECUTION_ENVIRONMENT_GEN2"
    | (string & {});
  /** A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
  encryptionKey?: string;
  /** Output only. Email address of the authenticated creator. */
  creator?: string;
  /** Output only. Arbitrary identifier for the API client. */
  client?: string;
  /** Output only. Arbitrary version identifier for the API client. */
  clientVersion?: string;
  /** Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. */
  labels?: Record<string, string>;
  /** Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Service.reconciling` for additional information on reconciliation process in Cloud Run. */
  reconciling?: boolean;
  /** Enable session affinity. */
  sessionAffinity?: boolean;
}

export const GoogleCloudRunV2Revision: Schema.Schema<GoogleCloudRunV2Revision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    vpcAccess: Schema.optional(GoogleCloudRunV2VpcAccess),
    containers: Schema.optional(Schema.Array(GoogleCloudRunV2Container)),
    serviceMesh: Schema.optional(GoogleCloudRunV2ServiceMesh),
    encryptionKeyShutdownDuration: Schema.optional(Schema.String),
    launchStage: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    maxInstanceRequestConcurrency: Schema.optional(Schema.Number),
    scalingStatus: Schema.optional(GoogleCloudRunV2RevisionScalingStatus),
    gpuZonalRedundancyDisabled: Schema.optional(Schema.Boolean),
    expireTime: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Array(GoogleCloudRunV2Condition)),
    nodeSelector: Schema.optional(GoogleCloudRunV2NodeSelector),
    serviceAccount: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    observedGeneration: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.String),
    logUri: Schema.optional(Schema.String),
    volumes: Schema.optional(Schema.Array(GoogleCloudRunV2Volume)),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    encryptionKeyRevocationAction: Schema.optional(Schema.String),
    generation: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    scaling: Schema.optional(GoogleCloudRunV2RevisionScaling),
    executionEnvironment: Schema.optional(Schema.String),
    encryptionKey: Schema.optional(Schema.String),
    creator: Schema.optional(Schema.String),
    client: Schema.optional(Schema.String),
    clientVersion: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    reconciling: Schema.optional(Schema.Boolean),
    sessionAffinity: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudRunV2Revision" });

export interface GoogleCloudRunV2ListRevisionsResponse {
  /** The resulting list of Revisions. */
  revisions?: ReadonlyArray<GoogleCloudRunV2Revision>;
  /** A token indicating there are more items than page_size. Use it in the next ListRevisions request to continue. */
  nextPageToken?: string;
}

export const GoogleCloudRunV2ListRevisionsResponse: Schema.Schema<GoogleCloudRunV2ListRevisionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revisions: Schema.optional(Schema.Array(GoogleCloudRunV2Revision)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2ListRevisionsResponse" });

export interface GoogleCloudRunV2RunJobRequest {
  /** Indicates that the request should be validated without actually deleting any resources. */
  validateOnly?: boolean;
  /** A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
  etag?: string;
  /** Overrides specification for a given execution of a job. If provided, overrides will be applied to update the execution or task spec. */
  overrides?: GoogleCloudRunV2Overrides;
}

export const GoogleCloudRunV2RunJobRequest: Schema.Schema<GoogleCloudRunV2RunJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean),
    etag: Schema.optional(Schema.String),
    overrides: Schema.optional(GoogleCloudRunV2Overrides),
  }).annotate({ identifier: "GoogleCloudRunV2RunJobRequest" });

export interface GoogleCloudRunV2StorageSource {
  /** Optional. Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
  generation?: string;
  /** Required. Google Cloud Storage object containing the source. This object must be a gzipped archive file (`.tar.gz`) containing source to build. */
  object?: string;
  /** Required. Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
  bucket?: string;
}

export const GoogleCloudRunV2StorageSource: Schema.Schema<GoogleCloudRunV2StorageSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generation: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
    bucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2StorageSource" });

export interface GoogleCloudRunV2ListInstancesResponse {
  /** The resulting list of Instances. */
  instances?: ReadonlyArray<GoogleCloudRunV2Instance>;
  /** A token indicating there are more items than page_size. Use it in the next ListInstances request to continue. */
  nextPageToken?: string;
}

export const GoogleCloudRunV2ListInstancesResponse: Schema.Schema<GoogleCloudRunV2ListInstancesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instances: Schema.optional(Schema.Array(GoogleCloudRunV2Instance)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2ListInstancesResponse" });

export interface GoogleCloudRunV2SubmitBuildRequest {
  /** Build the source using Docker. This means the source has a Dockerfile. */
  dockerBuild?: GoogleCloudRunV2DockerBuild;
  /** Optional. The service account to use for the build. If not set, the default Cloud Build service account for the project will be used. */
  serviceAccount?: string;
  /** Required. Artifact Registry URI to store the built image. */
  imageUri?: string;
  /** Optional. Name of the Cloud Build Custom Worker Pool that should be used to build the function. The format of this field is `projects/{project}/locations/{region}/workerPools/{workerPool}` where `{project}` and `{region}` are the project id and region respectively where the worker pool is defined and `{workerPool}` is the short name of the worker pool. */
  workerPool?: string;
  /** Required. Source for the build. */
  storageSource?: GoogleCloudRunV2StorageSource;
  /** Build the source using Buildpacks. */
  buildpackBuild?: GoogleCloudRunV2BuildpacksBuild;
  /** Optional. The machine type from default pool to use for the build. If left blank, cloudbuild will use a sensible default. Currently only E2_HIGHCPU_8 is supported. If worker_pool is set, this field will be ignored. */
  machineType?: string;
  /** Optional. The client that initiated the build request. */
  client?: string;
  /** Optional. The release track of the client that initiated the build request. */
  releaseTrack?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "UNIMPLEMENTED"
    | "PRELAUNCH"
    | "EARLY_ACCESS"
    | "ALPHA"
    | "BETA"
    | "GA"
    | "DEPRECATED"
    | (string & {});
  /** Optional. Additional tags to annotate the build. */
  tags?: ReadonlyArray<string>;
}

export const GoogleCloudRunV2SubmitBuildRequest: Schema.Schema<GoogleCloudRunV2SubmitBuildRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dockerBuild: Schema.optional(GoogleCloudRunV2DockerBuild),
    serviceAccount: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
    workerPool: Schema.optional(Schema.String),
    storageSource: Schema.optional(GoogleCloudRunV2StorageSource),
    buildpackBuild: Schema.optional(GoogleCloudRunV2BuildpacksBuild),
    machineType: Schema.optional(Schema.String),
    client: Schema.optional(Schema.String),
    releaseTrack: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudRunV2SubmitBuildRequest" });

export interface GoogleCloudRunV2StartInstanceRequest {
  /** Optional. Indicates that the request should be validated without actually stopping any resources. */
  validateOnly?: boolean;
  /** Optional. A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates. */
  etag?: string;
}

export const GoogleCloudRunV2StartInstanceRequest: Schema.Schema<GoogleCloudRunV2StartInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2StartInstanceRequest" });

export interface GoogleIamV1SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: GoogleIamV1Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const GoogleIamV1SetIamPolicyRequest: Schema.Schema<GoogleIamV1SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(GoogleIamV1Policy),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleIamV1SetIamPolicyRequest" });

export interface GoogleCloudRunV2ListWorkerPoolsResponse {
  /** The resulting list of WorkerPools. */
  workerPools?: ReadonlyArray<GoogleCloudRunV2WorkerPool>;
  /** A token indicating there are more items than page_size. Use it in the next ListWorkerPools request to continue. */
  nextPageToken?: string;
}

export const GoogleCloudRunV2ListWorkerPoolsResponse: Schema.Schema<GoogleCloudRunV2ListWorkerPoolsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workerPools: Schema.optional(Schema.Array(GoogleCloudRunV2WorkerPool)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2ListWorkerPoolsResponse" });

export interface GoogleCloudRunV2ImageExportStatus {
  /** Output only. Has the image export job finished (regardless of successful or failure). */
  exportJobState?:
    | "EXPORT_JOB_STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "FINISHED"
    | (string & {});
  /** The status of the export task if done. */
  status?: UtilStatusProto;
  /** The image tag as it will appear in Artifact Registry. */
  tag?: string;
  /** The exported image ID as it will appear in Artifact Registry. */
  exportedImageDigest?: string;
}

export const GoogleCloudRunV2ImageExportStatus: Schema.Schema<GoogleCloudRunV2ImageExportStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportJobState: Schema.optional(Schema.String),
    status: Schema.optional(UtilStatusProto),
    tag: Schema.optional(Schema.String),
    exportedImageDigest: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2ImageExportStatus" });

export interface GoogleCloudRunV2ExportStatusResponse {
  /** Output only. The state of the overall export operation. */
  operationState?:
    | "OPERATION_STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "FINISHED"
    | (string & {});
  /** The operation id. */
  operationId?: string;
  /** The status of each image export job. */
  imageExportStatuses?: ReadonlyArray<GoogleCloudRunV2ImageExportStatus>;
}

export const GoogleCloudRunV2ExportStatusResponse: Schema.Schema<GoogleCloudRunV2ExportStatusResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationState: Schema.optional(Schema.String),
    operationId: Schema.optional(Schema.String),
    imageExportStatuses: Schema.optional(
      Schema.Array(GoogleCloudRunV2ImageExportStatus),
    ),
  }).annotate({ identifier: "GoogleCloudRunV2ExportStatusResponse" });

export interface GoogleCloudRunV2ListExecutionsResponse {
  /** The resulting list of Executions. */
  executions?: ReadonlyArray<GoogleCloudRunV2Execution>;
  /** A token indicating there are more items than page_size. Use it in the next ListExecutions request to continue. */
  nextPageToken?: string;
}

export const GoogleCloudRunV2ListExecutionsResponse: Schema.Schema<GoogleCloudRunV2ListExecutionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executions: Schema.optional(Schema.Array(GoogleCloudRunV2Execution)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV2ListExecutionsResponse" });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleLongrunningWaitOperationRequest {
  /** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
  timeout?: string;
}

export const GoogleLongrunningWaitOperationRequest: Schema.Schema<GoogleLongrunningWaitOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleLongrunningWaitOperationRequest" });

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

export interface ExportMetadataProjectsLocationsRequest {
  /** Required. The name of the resource of which metadata should be exported. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}` for Service `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution {project_id_or_number} may contains domain-scoped project IDs */
  name: string;
}

export const ExportMetadataProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}:exportMetadata" }),
    svc,
  ) as unknown as Schema.Schema<ExportMetadataProjectsLocationsRequest>;

export type ExportMetadataProjectsLocationsResponse = GoogleCloudRunV2Metadata;
export const ExportMetadataProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2Metadata;

export type ExportMetadataProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Export generated customer metadata for a given resource. */
export const exportMetadataProjectsLocations: API.OperationMethod<
  ExportMetadataProjectsLocationsRequest,
  ExportMetadataProjectsLocationsResponse,
  ExportMetadataProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportMetadataProjectsLocationsRequest,
  output: ExportMetadataProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExportImageMetadataProjectsLocationsRequest {
  /** Required. The name of the resource of which image metadata should be exported. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution */
  name: string;
}

export const ExportImageMetadataProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}:exportImageMetadata" }),
    svc,
  ) as unknown as Schema.Schema<ExportImageMetadataProjectsLocationsRequest>;

export type ExportImageMetadataProjectsLocationsResponse =
  GoogleCloudRunV2Metadata;
export const ExportImageMetadataProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2Metadata;

export type ExportImageMetadataProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Export image metadata for a given resource. */
export const exportImageMetadataProjectsLocations: API.OperationMethod<
  ExportImageMetadataProjectsLocationsRequest,
  ExportImageMetadataProjectsLocationsResponse,
  ExportImageMetadataProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportImageMetadataProjectsLocationsRequest,
  output: ExportImageMetadataProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExportProjectMetadataProjectsLocationsRequest {
  /** Required. The name of the project of which metadata should be exported. Format: `projects/{project_id_or_number}/locations/{location}` for Project in a given location. */
  name: string;
}

export const ExportProjectMetadataProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}:exportProjectMetadata" }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectMetadataProjectsLocationsRequest>;

export type ExportProjectMetadataProjectsLocationsResponse =
  GoogleCloudRunV2Metadata;
export const ExportProjectMetadataProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2Metadata;

export type ExportProjectMetadataProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Export generated customer metadata for a given project. */
export const exportProjectMetadataProjectsLocations: API.OperationMethod<
  ExportProjectMetadataProjectsLocationsRequest,
  ExportProjectMetadataProjectsLocationsResponse,
  ExportProjectMetadataProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectMetadataProjectsLocationsRequest,
  output: ExportProjectMetadataProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExportImageProjectsLocationsRequest {
  /** Required. The name of the resource of which image metadata should be exported. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution */
  name: string;
  /** Request body */
  body?: GoogleCloudRunV2ExportImageRequest;
}

export const ExportImageProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudRunV2ExportImageRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:exportImage", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportImageProjectsLocationsRequest>;

export type ExportImageProjectsLocationsResponse =
  GoogleCloudRunV2ExportImageResponse;
export const ExportImageProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2ExportImageResponse;

export type ExportImageProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Export image for a given resource. */
export const exportImageProjectsLocations: API.OperationMethod<
  ExportImageProjectsLocationsRequest,
  ExportImageProjectsLocationsResponse,
  ExportImageProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportImageProjectsLocationsRequest,
  output: ExportImageProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SubmitProjectsLocationsBuildsRequest {
  /** Required. The project and location to build in. Location must be a region, e.g., 'us-central1' or 'global' if the global builder is to be used. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Request body */
  body?: GoogleCloudRunV2SubmitBuildRequest;
}

export const SubmitProjectsLocationsBuildsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudRunV2SubmitBuildRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/builds:submit",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SubmitProjectsLocationsBuildsRequest>;

export type SubmitProjectsLocationsBuildsResponse =
  GoogleCloudRunV2SubmitBuildResponse;
export const SubmitProjectsLocationsBuildsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2SubmitBuildResponse;

export type SubmitProjectsLocationsBuildsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Submits a build in a given project. */
export const submitProjectsLocationsBuilds: API.OperationMethod<
  SubmitProjectsLocationsBuildsRequest,
  SubmitProjectsLocationsBuildsResponse,
  SubmitProjectsLocationsBuildsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SubmitProjectsLocationsBuildsRequest,
  output: SubmitProjectsLocationsBuildsResponse,
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
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

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

export interface WaitProjectsLocationsOperationsRequest {
  /** The name of the operation resource to wait on. */
  name: string;
  /** Request body */
  body?: GoogleLongrunningWaitOperationRequest;
}

export const WaitProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleLongrunningWaitOperationRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:wait", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<WaitProjectsLocationsOperationsRequest>;

export type WaitProjectsLocationsOperationsResponse =
  GoogleLongrunningOperation;
export const WaitProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type WaitProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done. */
export const waitProjectsLocationsOperations: API.OperationMethod<
  WaitProjectsLocationsOperationsRequest,
  WaitProjectsLocationsOperationsResponse,
  WaitProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WaitProjectsLocationsOperationsRequest,
  output: WaitProjectsLocationsOperationsResponse,
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
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** Optional. A filter for matching the completed or in-progress operations. The supported formats of *filter* are: To query for only completed operations: done:true To query for only ongoing operations: done:false Must be empty to query for all of the latest operations for the given parent project. */
  filter?: string;
  /** The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set or set to less than or equal to 0, the default page size is 100. . */
  pageSize?: number;
  /** Token identifying which result to start with, which is returned by a previous list call. */
  pageToken?: string;
  /** Required. To query for all of the operations for a project. */
  name: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

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

export interface GetProjectsLocationsWorkerPoolsRequest {
  /** Required. The full name of the WorkerPool. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`, where `{project}` can be project id or number. */
  name: string;
}

export const GetProjectsLocationsWorkerPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsWorkerPoolsRequest>;

export type GetProjectsLocationsWorkerPoolsResponse =
  GoogleCloudRunV2WorkerPool;
export const GetProjectsLocationsWorkerPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2WorkerPool;

export type GetProjectsLocationsWorkerPoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a WorkerPool. */
export const getProjectsLocationsWorkerPools: API.OperationMethod<
  GetProjectsLocationsWorkerPoolsRequest,
  GetProjectsLocationsWorkerPoolsResponse,
  GetProjectsLocationsWorkerPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsWorkerPoolsRequest,
  output: GetProjectsLocationsWorkerPoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsWorkerPoolsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsWorkerPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsWorkerPoolsRequest>;

export type SetIamPolicyProjectsLocationsWorkerPoolsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsWorkerPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsWorkerPoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the IAM Access control policy for the specified WorkerPool. Overwrites any existing policy. */
export const setIamPolicyProjectsLocationsWorkerPools: API.OperationMethod<
  SetIamPolicyProjectsLocationsWorkerPoolsRequest,
  SetIamPolicyProjectsLocationsWorkerPoolsResponse,
  SetIamPolicyProjectsLocationsWorkerPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsWorkerPoolsRequest,
  output: SetIamPolicyProjectsLocationsWorkerPoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsWorkerPoolsRequest {
  /** Maximum number of WorkerPools to return in this call. */
  pageSize?: number;
  /** A page token received from a previous call to ListWorkerPools. All other parameters must match. */
  pageToken?: string;
  /** If true, returns deleted (but unexpired) resources along with active ones. */
  showDeleted?: boolean;
  /** Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: `projects/{project}/locations/{location}`, where `{project}` can be project id or number. */
  parent: string;
}

export const ListProjectsLocationsWorkerPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/workerPools" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsWorkerPoolsRequest>;

export type ListProjectsLocationsWorkerPoolsResponse =
  GoogleCloudRunV2ListWorkerPoolsResponse;
export const ListProjectsLocationsWorkerPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2ListWorkerPoolsResponse;

export type ListProjectsLocationsWorkerPoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists WorkerPools. Results are sorted by creation time, descending. */
export const listProjectsLocationsWorkerPools: API.PaginatedOperationMethod<
  ListProjectsLocationsWorkerPoolsRequest,
  ListProjectsLocationsWorkerPoolsResponse,
  ListProjectsLocationsWorkerPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsWorkerPoolsRequest,
  output: ListProjectsLocationsWorkerPoolsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsWorkerPoolsRequest {
  /** Required. The location and project in which this worker pool should be created. Format: `projects/{project}/locations/{location}`, where `{project}` can be project id or number. Only lowercase characters, digits, and hyphens. */
  parent: string;
  /** Optional. The unique identifier for the WorkerPool. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the worker pool becomes `{parent}/workerPools/{worker_pool_id}`. If not provided, the server will generate a unique `worker_pool_id`. */
  workerPoolId?: string;
  /** Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudRunV2WorkerPool;
}

export const CreateProjectsLocationsWorkerPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    workerPoolId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("workerPoolId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudRunV2WorkerPool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/workerPools", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsWorkerPoolsRequest>;

export type CreateProjectsLocationsWorkerPoolsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsWorkerPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsWorkerPoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new WorkerPool in a given project and location. */
export const createProjectsLocationsWorkerPools: API.OperationMethod<
  CreateProjectsLocationsWorkerPoolsRequest,
  CreateProjectsLocationsWorkerPoolsResponse,
  CreateProjectsLocationsWorkerPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsWorkerPoolsRequest,
  output: CreateProjectsLocationsWorkerPoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsWorkerPoolsRequest {
  /** Required. The full name of the WorkerPool. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`, where `{project}` can be project id or number. */
  name: string;
  /** Optional. Indicates that the request should be validated without actually deleting any resources. */
  validateOnly?: boolean;
  /** A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
  etag?: string;
}

export const DeleteProjectsLocationsWorkerPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsWorkerPoolsRequest>;

export type DeleteProjectsLocationsWorkerPoolsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsWorkerPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsWorkerPoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a WorkerPool. */
export const deleteProjectsLocationsWorkerPools: API.OperationMethod<
  DeleteProjectsLocationsWorkerPoolsRequest,
  DeleteProjectsLocationsWorkerPoolsResponse,
  DeleteProjectsLocationsWorkerPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsWorkerPoolsRequest,
  output: DeleteProjectsLocationsWorkerPoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsWorkerPoolsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsWorkerPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsWorkerPoolsRequest>;

export type TestIamPermissionsProjectsLocationsWorkerPoolsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsWorkerPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsWorkerPoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call. */
export const testIamPermissionsProjectsLocationsWorkerPools: API.OperationMethod<
  TestIamPermissionsProjectsLocationsWorkerPoolsRequest,
  TestIamPermissionsProjectsLocationsWorkerPoolsResponse,
  TestIamPermissionsProjectsLocationsWorkerPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsWorkerPoolsRequest,
  output: TestIamPermissionsProjectsLocationsWorkerPoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsWorkerPoolsRequest {
  /** Optional. If set to true, a new revision will be created from the template even if the system doesn't detect any changes from the previously deployed revision. This may be useful for cases where the underlying resources need to be recreated or reinitialized. For example if the image is specified by label, but the underlying image digest has changed) or if the container performs deployment initialization work that needs to be performed again. */
  forceNewRevision?: boolean;
  /** The fully qualified name of this WorkerPool. In CreateWorkerPoolRequest, this field is ignored, and instead composed from CreateWorkerPoolRequest.parent and CreateWorkerPoolRequest.worker_id. Format: `projects/{project}/locations/{location}/workerPools/{worker_id}` */
  name: string;
  /** Optional. The list of fields to be updated. */
  updateMask?: string;
  /** Optional. Indicates that the request should be validated and default values populated, without persisting the request or updating any resources. */
  validateOnly?: boolean;
  /** Optional. If set to true, and if the WorkerPool does not exist, it will create a new one. The caller must have 'run.workerpools.create' permissions if this is set to true and the WorkerPool does not exist. */
  allowMissing?: boolean;
  /** Request body */
  body?: GoogleCloudRunV2WorkerPool;
}

export const PatchProjectsLocationsWorkerPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forceNewRevision: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("forceNewRevision"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    body: Schema.optional(GoogleCloudRunV2WorkerPool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsWorkerPoolsRequest>;

export type PatchProjectsLocationsWorkerPoolsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsWorkerPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsWorkerPoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a WorkerPool. */
export const patchProjectsLocationsWorkerPools: API.OperationMethod<
  PatchProjectsLocationsWorkerPoolsRequest,
  PatchProjectsLocationsWorkerPoolsResponse,
  PatchProjectsLocationsWorkerPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsWorkerPoolsRequest,
  output: PatchProjectsLocationsWorkerPoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsWorkerPoolsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsWorkerPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsWorkerPoolsRequest>;

export type GetIamPolicyProjectsLocationsWorkerPoolsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsWorkerPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsWorkerPoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the IAM Access Control policy currently in effect for the given Cloud Run WorkerPool. This result does not include any inherited policies. */
export const getIamPolicyProjectsLocationsWorkerPools: API.OperationMethod<
  GetIamPolicyProjectsLocationsWorkerPoolsRequest,
  GetIamPolicyProjectsLocationsWorkerPoolsResponse,
  GetIamPolicyProjectsLocationsWorkerPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsWorkerPoolsRequest,
  output: GetIamPolicyProjectsLocationsWorkerPoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsWorkerPoolsRevisionsRequest {
  /** Indicates that the request should be validated without actually deleting any resources. */
  validateOnly?: boolean;
  /** A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates. */
  etag?: string;
  /** Required. The name of the Revision to delete. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision} */
  name: string;
}

export const DeleteProjectsLocationsWorkerPoolsRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsWorkerPoolsRevisionsRequest>;

export type DeleteProjectsLocationsWorkerPoolsRevisionsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsWorkerPoolsRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsWorkerPoolsRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Revision. */
export const deleteProjectsLocationsWorkerPoolsRevisions: API.OperationMethod<
  DeleteProjectsLocationsWorkerPoolsRevisionsRequest,
  DeleteProjectsLocationsWorkerPoolsRevisionsResponse,
  DeleteProjectsLocationsWorkerPoolsRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsWorkerPoolsRevisionsRequest,
  output: DeleteProjectsLocationsWorkerPoolsRevisionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsWorkerPoolsRevisionsRequest {
  /** Required. The full name of the Revision. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision} */
  name: string;
}

export const GetProjectsLocationsWorkerPoolsRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsWorkerPoolsRevisionsRequest>;

export type GetProjectsLocationsWorkerPoolsRevisionsResponse =
  GoogleCloudRunV2Revision;
export const GetProjectsLocationsWorkerPoolsRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2Revision;

export type GetProjectsLocationsWorkerPoolsRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a Revision. */
export const getProjectsLocationsWorkerPoolsRevisions: API.OperationMethod<
  GetProjectsLocationsWorkerPoolsRevisionsRequest,
  GetProjectsLocationsWorkerPoolsRevisionsResponse,
  GetProjectsLocationsWorkerPoolsRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsWorkerPoolsRevisionsRequest,
  output: GetProjectsLocationsWorkerPoolsRevisionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsWorkerPoolsRevisionsRequest {
  /** Required. The Service from which the Revisions should be listed. To list all Revisions across Services, use "-" instead of Service name. Format: projects/{project}/locations/{location}/services/{service} */
  parent: string;
  /** Maximum number of revisions to return in this call. */
  pageSize?: number;
  /** A page token received from a previous call to ListRevisions. All other parameters must match. */
  pageToken?: string;
  /** If true, returns deleted (but unexpired) resources along with active ones. */
  showDeleted?: boolean;
}

export const ListProjectsLocationsWorkerPoolsRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/revisions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsWorkerPoolsRevisionsRequest>;

export type ListProjectsLocationsWorkerPoolsRevisionsResponse =
  GoogleCloudRunV2ListRevisionsResponse;
export const ListProjectsLocationsWorkerPoolsRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2ListRevisionsResponse;

export type ListProjectsLocationsWorkerPoolsRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Revisions from a given Service, or from a given location. Results are sorted by creation time, descending. */
export const listProjectsLocationsWorkerPoolsRevisions: API.PaginatedOperationMethod<
  ListProjectsLocationsWorkerPoolsRevisionsRequest,
  ListProjectsLocationsWorkerPoolsRevisionsResponse,
  ListProjectsLocationsWorkerPoolsRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsWorkerPoolsRevisionsRequest,
  output: ListProjectsLocationsWorkerPoolsRevisionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsInstancesRequest {
  /** The fully qualified name of this Instance. In CreateInstanceRequest, this field is ignored, and instead composed from CreateInstanceRequest.parent and CreateInstanceRequest.instance_id. Format: projects/{project}/locations/{location}/instances/{instance_id} */
  name: string;
  /** Optional. The list of fields to be updated. */
  updateMask?: string;
  /** Optional. Indicates that the request should be validated and default values populated, without persisting the request or updating any resources. */
  validateOnly?: boolean;
  /** Optional. If set to true, and if the Instance does not exist, it will create a new one. The caller must have 'run.instances.create' permissions if this is set to true and the Instance does not exist. */
  allowMissing?: boolean;
  /** Request body */
  body?: GoogleCloudRunV2Instance;
}

export const PatchProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    body: Schema.optional(GoogleCloudRunV2Instance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsInstancesRequest>;

export type PatchProjectsLocationsInstancesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an Instance. */
export const patchProjectsLocationsInstances: API.OperationMethod<
  PatchProjectsLocationsInstancesRequest,
  PatchProjectsLocationsInstancesResponse,
  PatchProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInstancesRequest,
  output: PatchProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartProjectsLocationsInstancesRequest {
  /** Required. The name of the Instance to stop. Format: `projects/{project}/locations/{location}/instances/{instance}`, where `{project}` can be project id or number. */
  name: string;
  /** Request body */
  body?: GoogleCloudRunV2StartInstanceRequest;
}

export const StartProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudRunV2StartInstanceRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:start", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StartProjectsLocationsInstancesRequest>;

export type StartProjectsLocationsInstancesResponse =
  GoogleLongrunningOperation;
export const StartProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type StartProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts an Instance. */
export const startProjectsLocationsInstances: API.OperationMethod<
  StartProjectsLocationsInstancesRequest,
  StartProjectsLocationsInstancesResponse,
  StartProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartProjectsLocationsInstancesRequest,
  output: StartProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsInstancesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsInstancesRequest>;

export type TestIamPermissionsProjectsLocationsInstancesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call. */
export const testIamPermissionsProjectsLocationsInstances: API.OperationMethod<
  TestIamPermissionsProjectsLocationsInstancesRequest,
  TestIamPermissionsProjectsLocationsInstancesResponse,
  TestIamPermissionsProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsInstancesRequest,
  output: TestIamPermissionsProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsInstancesRequest {
  parent: string;
  /** Optional. The unique identifier for the Instance. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the instance becomes {parent}/instances/{instance_id}. If not provided, the server will generate a unique `instance_id`. */
  instanceId?: string;
  /** Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudRunV2Instance;
}

export const CreateProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    instanceId: Schema.optional(Schema.String).pipe(T.HttpQuery("instanceId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudRunV2Instance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/instances", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInstancesRequest>;

export type CreateProjectsLocationsInstancesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an Instance. */
export const createProjectsLocationsInstances: API.OperationMethod<
  CreateProjectsLocationsInstancesRequest,
  CreateProjectsLocationsInstancesResponse,
  CreateProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInstancesRequest,
  output: CreateProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StopProjectsLocationsInstancesRequest {
  /** Required. The name of the Instance to stop. Format: `projects/{project}/locations/{location}/instances/{instance}`, where `{project}` can be project id or number. */
  name: string;
  /** Request body */
  body?: GoogleCloudRunV2StopInstanceRequest;
}

export const StopProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudRunV2StopInstanceRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StopProjectsLocationsInstancesRequest>;

export type StopProjectsLocationsInstancesResponse = GoogleLongrunningOperation;
export const StopProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type StopProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops an Instance. */
export const stopProjectsLocationsInstances: API.OperationMethod<
  StopProjectsLocationsInstancesRequest,
  StopProjectsLocationsInstancesResponse,
  StopProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopProjectsLocationsInstancesRequest,
  output: StopProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsInstancesRequest {
  /** Optional. Indicates that the request should be validated without actually deleting any resources. */
  validateOnly?: boolean;
  /** Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
  etag?: string;
  name: string;
}

export const DeleteProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInstancesRequest>;

export type DeleteProjectsLocationsInstancesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Instance */
export const deleteProjectsLocationsInstances: API.OperationMethod<
  DeleteProjectsLocationsInstancesRequest,
  DeleteProjectsLocationsInstancesResponse,
  DeleteProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInstancesRequest,
  output: DeleteProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsInstancesRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsInstancesRequest>;

export type GetIamPolicyProjectsLocationsInstancesResponse = GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the IAM Access Control policy currently in effect for the given Instance. This result does not include any inherited policies. */
export const getIamPolicyProjectsLocationsInstances: API.OperationMethod<
  GetIamPolicyProjectsLocationsInstancesRequest,
  GetIamPolicyProjectsLocationsInstancesResponse,
  GetIamPolicyProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsInstancesRequest,
  output: GetIamPolicyProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsInstancesRequest {
  name: string;
}

export const GetProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInstancesRequest>;

export type GetProjectsLocationsInstancesResponse = GoogleCloudRunV2Instance;
export const GetProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2Instance;

export type GetProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a Instance */
export const getProjectsLocationsInstances: API.OperationMethod<
  GetProjectsLocationsInstancesRequest,
  GetProjectsLocationsInstancesResponse,
  GetProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInstancesRequest,
  output: GetProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsInstancesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsInstancesRequest>;

export type SetIamPolicyProjectsLocationsInstancesResponse = GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the IAM Access control policy for the specified Instance. Overwrites any existing policy. */
export const setIamPolicyProjectsLocationsInstances: API.OperationMethod<
  SetIamPolicyProjectsLocationsInstancesRequest,
  SetIamPolicyProjectsLocationsInstancesResponse,
  SetIamPolicyProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsInstancesRequest,
  output: SetIamPolicyProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInstancesRequest {
  /** Optional. Maximum number of Instances to return in this call. */
  pageSize?: number;
  /** Optional. A page token received from a previous call to ListInstances. All other parameters must match. */
  pageToken?: string;
  /** Optional. If true, returns deleted (but unexpired) resources along with active ones. */
  showDeleted?: boolean;
  /** Required. The location and project to list resources on. Format: projects/{project}/locations/{location}, where {project} can be project id or number. */
  parent: string;
}

export const ListProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/instances" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInstancesRequest>;

export type ListProjectsLocationsInstancesResponse =
  GoogleCloudRunV2ListInstancesResponse;
export const ListProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2ListInstancesResponse;

export type ListProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Instances. Results are sorted by creation time, descending. */
export const listProjectsLocationsInstances: API.PaginatedOperationMethod<
  ListProjectsLocationsInstancesRequest,
  ListProjectsLocationsInstancesResponse,
  ListProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInstancesRequest,
  output: ListProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsJobsRequest {
  /** The fully qualified name of this Job. Format: projects/{project}/locations/{location}/jobs/{job} */
  name: string;
  /** Indicates that the request should be validated and default values populated, without persisting the request or updating any resources. */
  validateOnly?: boolean;
  /** Optional. If set to true, and if the Job does not exist, it will create a new one. Caller must have both create and update permissions for this call if this is set to true. */
  allowMissing?: boolean;
  /** Request body */
  body?: GoogleCloudRunV2Job;
}

export const PatchProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    body: Schema.optional(GoogleCloudRunV2Job).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsJobsRequest>;

export type PatchProjectsLocationsJobsResponse = GoogleLongrunningOperation;
export const PatchProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Job. */
export const patchProjectsLocationsJobs: API.OperationMethod<
  PatchProjectsLocationsJobsRequest,
  PatchProjectsLocationsJobsResponse,
  PatchProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsJobsRequest,
  output: PatchProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsJobsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsJobsRequest>;

export type TestIamPermissionsProjectsLocationsJobsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call. */
export const testIamPermissionsProjectsLocationsJobs: API.OperationMethod<
  TestIamPermissionsProjectsLocationsJobsRequest,
  TestIamPermissionsProjectsLocationsJobsResponse,
  TestIamPermissionsProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsJobsRequest,
  output: TestIamPermissionsProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsJobsRequest {
  /** Required. The location and project in which this Job should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number. */
  parent: string;
  /** Optional. The unique identifier for the Job. The name of the job becomes {parent}/jobs/{job_id}. If not provided, the server will generate a unique `job_id`. */
  jobId?: string;
  /** Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudRunV2Job;
}

export const CreateProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    jobId: Schema.optional(Schema.String).pipe(T.HttpQuery("jobId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudRunV2Job).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/jobs", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsJobsRequest>;

export type CreateProjectsLocationsJobsResponse = GoogleLongrunningOperation;
export const CreateProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Job. */
export const createProjectsLocationsJobs: API.OperationMethod<
  CreateProjectsLocationsJobsRequest,
  CreateProjectsLocationsJobsResponse,
  CreateProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsJobsRequest,
  output: CreateProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunProjectsLocationsJobsRequest {
  /** Required. The full name of the Job. Format: projects/{project}/locations/{location}/jobs/{job}, where {project} can be project id or number. */
  name: string;
  /** Request body */
  body?: GoogleCloudRunV2RunJobRequest;
}

export const RunProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudRunV2RunJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RunProjectsLocationsJobsRequest>;

export type RunProjectsLocationsJobsResponse = GoogleLongrunningOperation;
export const RunProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type RunProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Triggers creation of a new Execution of this Job. */
export const runProjectsLocationsJobs: API.OperationMethod<
  RunProjectsLocationsJobsRequest,
  RunProjectsLocationsJobsResponse,
  RunProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsJobsRequest,
  output: RunProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsJobsRequest {
  /** Required. The full name of the Job. Format: projects/{project}/locations/{location}/jobs/{job}, where {project} can be project id or number. */
  name: string;
  /** Indicates that the request should be validated without actually deleting any resources. */
  validateOnly?: boolean;
  /** A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
  etag?: string;
}

export const DeleteProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsJobsRequest>;

export type DeleteProjectsLocationsJobsResponse = GoogleLongrunningOperation;
export const DeleteProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Job. */
export const deleteProjectsLocationsJobs: API.OperationMethod<
  DeleteProjectsLocationsJobsRequest,
  DeleteProjectsLocationsJobsResponse,
  DeleteProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsJobsRequest,
  output: DeleteProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsJobsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsJobsRequest>;

export type GetIamPolicyProjectsLocationsJobsResponse = GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the IAM Access Control policy currently in effect for the given Job. This result does not include any inherited policies. */
export const getIamPolicyProjectsLocationsJobs: API.OperationMethod<
  GetIamPolicyProjectsLocationsJobsRequest,
  GetIamPolicyProjectsLocationsJobsResponse,
  GetIamPolicyProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsJobsRequest,
  output: GetIamPolicyProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsJobsRequest {
  /** Required. The full name of the Job. Format: projects/{project}/locations/{location}/jobs/{job}, where {project} can be project id or number. */
  name: string;
}

export const GetProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsJobsRequest>;

export type GetProjectsLocationsJobsResponse = GoogleCloudRunV2Job;
export const GetProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2Job;

export type GetProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a Job. */
export const getProjectsLocationsJobs: API.OperationMethod<
  GetProjectsLocationsJobsRequest,
  GetProjectsLocationsJobsResponse,
  GetProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobsRequest,
  output: GetProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsJobsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsJobsRequest>;

export type SetIamPolicyProjectsLocationsJobsResponse = GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the IAM Access control policy for the specified Job. Overwrites any existing policy. */
export const setIamPolicyProjectsLocationsJobs: API.OperationMethod<
  SetIamPolicyProjectsLocationsJobsRequest,
  SetIamPolicyProjectsLocationsJobsResponse,
  SetIamPolicyProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsJobsRequest,
  output: SetIamPolicyProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsJobsRequest {
  /** Maximum number of Jobs to return in this call. */
  pageSize?: number;
  /** A page token received from a previous call to ListJobs. All other parameters must match. */
  pageToken?: string;
  /** If true, returns deleted (but unexpired) resources along with active ones. */
  showDeleted?: boolean;
  /** Required. The location and project to list resources on. Format: projects/{project}/locations/{location}, where {project} can be project id or number. */
  parent: string;
}

export const ListProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/jobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsJobsRequest>;

export type ListProjectsLocationsJobsResponse =
  GoogleCloudRunV2ListJobsResponse;
export const ListProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2ListJobsResponse;

export type ListProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Jobs. Results are sorted by creation time, descending. */
export const listProjectsLocationsJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsJobsRequest,
  ListProjectsLocationsJobsResponse,
  ListProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobsRequest,
  output: ListProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsJobsExecutionsRequest {
  /** Maximum number of Executions to return in this call. */
  pageSize?: number;
  /** A page token received from a previous call to ListExecutions. All other parameters must match. */
  pageToken?: string;
  /** If true, returns deleted (but unexpired) resources along with active ones. */
  showDeleted?: boolean;
  /** Required. The Execution from which the Executions should be listed. To list all Executions across Jobs, use "-" instead of Job name. Format: `projects/{project}/locations/{location}/jobs/{job}`, where `{project}` can be project id or number. */
  parent: string;
}

export const ListProjectsLocationsJobsExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/executions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsJobsExecutionsRequest>;

export type ListProjectsLocationsJobsExecutionsResponse =
  GoogleCloudRunV2ListExecutionsResponse;
export const ListProjectsLocationsJobsExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2ListExecutionsResponse;

export type ListProjectsLocationsJobsExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Executions from a Job. Results are sorted by creation time, descending. */
export const listProjectsLocationsJobsExecutions: API.PaginatedOperationMethod<
  ListProjectsLocationsJobsExecutionsRequest,
  ListProjectsLocationsJobsExecutionsResponse,
  ListProjectsLocationsJobsExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobsExecutionsRequest,
  output: ListProjectsLocationsJobsExecutionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ExportStatusProjectsLocationsJobsExecutionsRequest {
  /** Required. The name of the resource of which image export operation status has to be fetched. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution */
  name: string;
  /** Required. The operation id returned from ExportImage. */
  operationId: string;
}

export const ExportStatusProjectsLocationsJobsExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    operationId: Schema.String.pipe(T.HttpPath("operationId")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}/{+operationId}:exportStatus" }),
    svc,
  ) as unknown as Schema.Schema<ExportStatusProjectsLocationsJobsExecutionsRequest>;

export type ExportStatusProjectsLocationsJobsExecutionsResponse =
  GoogleCloudRunV2ExportStatusResponse;
export const ExportStatusProjectsLocationsJobsExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2ExportStatusResponse;

export type ExportStatusProjectsLocationsJobsExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Read the status of an image export operation. */
export const exportStatusProjectsLocationsJobsExecutions: API.OperationMethod<
  ExportStatusProjectsLocationsJobsExecutionsRequest,
  ExportStatusProjectsLocationsJobsExecutionsResponse,
  ExportStatusProjectsLocationsJobsExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportStatusProjectsLocationsJobsExecutionsRequest,
  output: ExportStatusProjectsLocationsJobsExecutionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsJobsExecutionsRequest {
  /** Required. The name of the Execution to cancel. Format: `projects/{project}/locations/{location}/jobs/{job}/executions/{execution}`, where `{project}` can be project id or number. */
  name: string;
  /** Request body */
  body?: GoogleCloudRunV2CancelExecutionRequest;
}

export const CancelProjectsLocationsJobsExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudRunV2CancelExecutionRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsJobsExecutionsRequest>;

export type CancelProjectsLocationsJobsExecutionsResponse =
  GoogleLongrunningOperation;
export const CancelProjectsLocationsJobsExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CancelProjectsLocationsJobsExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels an Execution. */
export const cancelProjectsLocationsJobsExecutions: API.OperationMethod<
  CancelProjectsLocationsJobsExecutionsRequest,
  CancelProjectsLocationsJobsExecutionsResponse,
  CancelProjectsLocationsJobsExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsJobsExecutionsRequest,
  output: CancelProjectsLocationsJobsExecutionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsJobsExecutionsRequest {
  /** Required. The full name of the Execution. Format: `projects/{project}/locations/{location}/jobs/{job}/executions/{execution}`, where `{project}` can be project id or number. */
  name: string;
}

export const GetProjectsLocationsJobsExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsJobsExecutionsRequest>;

export type GetProjectsLocationsJobsExecutionsResponse =
  GoogleCloudRunV2Execution;
export const GetProjectsLocationsJobsExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2Execution;

export type GetProjectsLocationsJobsExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about an Execution. */
export const getProjectsLocationsJobsExecutions: API.OperationMethod<
  GetProjectsLocationsJobsExecutionsRequest,
  GetProjectsLocationsJobsExecutionsResponse,
  GetProjectsLocationsJobsExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobsExecutionsRequest,
  output: GetProjectsLocationsJobsExecutionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsJobsExecutionsRequest {
  /** Indicates that the request should be validated without actually deleting any resources. */
  validateOnly?: boolean;
  /** A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates. */
  etag?: string;
  /** Required. The name of the Execution to delete. Format: `projects/{project}/locations/{location}/jobs/{job}/executions/{execution}`, where `{project}` can be project id or number. */
  name: string;
}

export const DeleteProjectsLocationsJobsExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsJobsExecutionsRequest>;

export type DeleteProjectsLocationsJobsExecutionsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsJobsExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsJobsExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an Execution. */
export const deleteProjectsLocationsJobsExecutions: API.OperationMethod<
  DeleteProjectsLocationsJobsExecutionsRequest,
  DeleteProjectsLocationsJobsExecutionsResponse,
  DeleteProjectsLocationsJobsExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsJobsExecutionsRequest,
  output: DeleteProjectsLocationsJobsExecutionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsJobsExecutionsTasksRequest {
  /** Maximum number of Tasks to return in this call. */
  pageSize?: number;
  /** A page token received from a previous call to ListTasks. All other parameters must match. */
  pageToken?: string;
  /** If true, returns deleted (but unexpired) resources along with active ones. */
  showDeleted?: boolean;
  /** Required. The Execution from which the Tasks should be listed. To list all Tasks across Executions of a Job, use "-" instead of Execution name. To list all Tasks across Jobs, use "-" instead of Job name. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution} */
  parent: string;
}

export const ListProjectsLocationsJobsExecutionsTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/tasks" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsJobsExecutionsTasksRequest>;

export type ListProjectsLocationsJobsExecutionsTasksResponse =
  GoogleCloudRunV2ListTasksResponse;
export const ListProjectsLocationsJobsExecutionsTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2ListTasksResponse;

export type ListProjectsLocationsJobsExecutionsTasksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Tasks from an Execution of a Job. */
export const listProjectsLocationsJobsExecutionsTasks: API.PaginatedOperationMethod<
  ListProjectsLocationsJobsExecutionsTasksRequest,
  ListProjectsLocationsJobsExecutionsTasksResponse,
  ListProjectsLocationsJobsExecutionsTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobsExecutionsTasksRequest,
  output: ListProjectsLocationsJobsExecutionsTasksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsJobsExecutionsTasksRequest {
  /** Required. The full name of the Task. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution}/tasks/{task} */
  name: string;
}

export const GetProjectsLocationsJobsExecutionsTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsJobsExecutionsTasksRequest>;

export type GetProjectsLocationsJobsExecutionsTasksResponse =
  GoogleCloudRunV2Task;
export const GetProjectsLocationsJobsExecutionsTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2Task;

export type GetProjectsLocationsJobsExecutionsTasksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a Task. */
export const getProjectsLocationsJobsExecutionsTasks: API.OperationMethod<
  GetProjectsLocationsJobsExecutionsTasksRequest,
  GetProjectsLocationsJobsExecutionsTasksResponse,
  GetProjectsLocationsJobsExecutionsTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobsExecutionsTasksRequest,
  output: GetProjectsLocationsJobsExecutionsTasksResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsServicesRequest {
  /** Indicates that the request should be validated without actually deleting any resources. */
  validateOnly?: boolean;
  /** A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. */
  etag?: string;
  /** Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number. */
  name: string;
}

export const DeleteProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsServicesRequest>;

export type DeleteProjectsLocationsServicesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions. */
export const deleteProjectsLocationsServices: API.OperationMethod<
  DeleteProjectsLocationsServicesRequest,
  DeleteProjectsLocationsServicesResponse,
  DeleteProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServicesRequest,
  output: DeleteProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsServicesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsServicesRequest>;

export type TestIamPermissionsProjectsLocationsServicesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call. */
export const testIamPermissionsProjectsLocationsServices: API.OperationMethod<
  TestIamPermissionsProjectsLocationsServicesRequest,
  TestIamPermissionsProjectsLocationsServicesResponse,
  TestIamPermissionsProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsServicesRequest,
  output: TestIamPermissionsProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsServicesRequest {
  /** Indicates that the request should be validated and default values populated, without persisting the request or updating any resources. */
  validateOnly?: boolean;
  /** Optional. If set to true, and if the Service does not exist, it will create a new one. The caller must have 'run.services.create' permissions if this is set to true and the Service does not exist. */
  allowMissing?: boolean;
  /** Identifier. The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project}/locations/{location}/services/{service_id} */
  name: string;
  /** Optional. The list of fields to be updated. */
  updateMask?: string;
  /** Optional. If set to true, a new revision will be created from the template even if the system doesn't detect any changes from the previously deployed revision. This may be useful for cases where the underlying resources need to be recreated or reinitialized. For example if the image is specified by label, but the underlying image digest has changed) or if the container performs deployment initialization work that needs to be performed again. */
  forceNewRevision?: boolean;
  /** Request body */
  body?: GoogleCloudRunV2Service;
}

export const PatchProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    forceNewRevision: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("forceNewRevision"),
    ),
    body: Schema.optional(GoogleCloudRunV2Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsServicesRequest>;

export type PatchProjectsLocationsServicesResponse = GoogleLongrunningOperation;
export const PatchProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Service. */
export const patchProjectsLocationsServices: API.OperationMethod<
  PatchProjectsLocationsServicesRequest,
  PatchProjectsLocationsServicesResponse,
  PatchProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsServicesRequest,
  output: PatchProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsServicesRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsServicesRequest>;

export type GetIamPolicyProjectsLocationsServicesResponse = GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies. */
export const getIamPolicyProjectsLocationsServices: API.OperationMethod<
  GetIamPolicyProjectsLocationsServicesRequest,
  GetIamPolicyProjectsLocationsServicesResponse,
  GetIamPolicyProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsServicesRequest,
  output: GetIamPolicyProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsServicesRequest {
  /** Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number. */
  name: string;
}

export const GetProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsServicesRequest>;

export type GetProjectsLocationsServicesResponse = GoogleCloudRunV2Service;
export const GetProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2Service;

export type GetProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a Service. */
export const getProjectsLocationsServices: API.OperationMethod<
  GetProjectsLocationsServicesRequest,
  GetProjectsLocationsServicesResponse,
  GetProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServicesRequest,
  output: GetProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsServicesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsServicesRequest>;

export type SetIamPolicyProjectsLocationsServicesResponse = GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the IAM Access control policy for the specified Service. Overwrites any existing policy. */
export const setIamPolicyProjectsLocationsServices: API.OperationMethod<
  SetIamPolicyProjectsLocationsServicesRequest,
  SetIamPolicyProjectsLocationsServicesResponse,
  SetIamPolicyProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsServicesRequest,
  output: SetIamPolicyProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsServicesRequest {
  /** Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: projects/{project}/locations/{location}, where {project} can be project id or number. */
  parent: string;
  /** Maximum number of Services to return in this call. */
  pageSize?: number;
  /** A page token received from a previous call to ListServices. All other parameters must match. */
  pageToken?: string;
  /** If true, returns deleted (but unexpired) resources along with active ones. */
  showDeleted?: boolean;
}

export const ListProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/services" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsServicesRequest>;

export type ListProjectsLocationsServicesResponse =
  GoogleCloudRunV2ListServicesResponse;
export const ListProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2ListServicesResponse;

export type ListProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Services. Results are sorted by creation time, descending. */
export const listProjectsLocationsServices: API.PaginatedOperationMethod<
  ListProjectsLocationsServicesRequest,
  ListProjectsLocationsServicesResponse,
  ListProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServicesRequest,
  output: ListProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsServicesRequest {
  /** Optional. The unique identifier for the Service. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the service becomes {parent}/services/{service_id}. If not provided, the server will generate a unique `service_id`. */
  serviceId?: string;
  /** Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. */
  validateOnly?: boolean;
  /** Required. The location and project in which this service should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number. Only lowercase characters, digits, and hyphens. */
  parent: string;
  /** Request body */
  body?: GoogleCloudRunV2Service;
}

export const CreateProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceId: Schema.optional(Schema.String).pipe(T.HttpQuery("serviceId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudRunV2Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/services", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsServicesRequest>;

export type CreateProjectsLocationsServicesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Service in a given project and location. */
export const createProjectsLocationsServices: API.OperationMethod<
  CreateProjectsLocationsServicesRequest,
  CreateProjectsLocationsServicesResponse,
  CreateProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServicesRequest,
  output: CreateProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsServicesRevisionsRequest {
  /** Required. The full name of the Revision. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision} */
  name: string;
}

export const GetProjectsLocationsServicesRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsServicesRevisionsRequest>;

export type GetProjectsLocationsServicesRevisionsResponse =
  GoogleCloudRunV2Revision;
export const GetProjectsLocationsServicesRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2Revision;

export type GetProjectsLocationsServicesRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a Revision. */
export const getProjectsLocationsServicesRevisions: API.OperationMethod<
  GetProjectsLocationsServicesRevisionsRequest,
  GetProjectsLocationsServicesRevisionsResponse,
  GetProjectsLocationsServicesRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServicesRevisionsRequest,
  output: GetProjectsLocationsServicesRevisionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExportStatusProjectsLocationsServicesRevisionsRequest {
  /** Required. The name of the resource of which image export operation status has to be fetched. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution */
  name: string;
  /** Required. The operation id returned from ExportImage. */
  operationId: string;
}

export const ExportStatusProjectsLocationsServicesRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    operationId: Schema.String.pipe(T.HttpPath("operationId")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}/{+operationId}:exportStatus" }),
    svc,
  ) as unknown as Schema.Schema<ExportStatusProjectsLocationsServicesRevisionsRequest>;

export type ExportStatusProjectsLocationsServicesRevisionsResponse =
  GoogleCloudRunV2ExportStatusResponse;
export const ExportStatusProjectsLocationsServicesRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2ExportStatusResponse;

export type ExportStatusProjectsLocationsServicesRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Read the status of an image export operation. */
export const exportStatusProjectsLocationsServicesRevisions: API.OperationMethod<
  ExportStatusProjectsLocationsServicesRevisionsRequest,
  ExportStatusProjectsLocationsServicesRevisionsResponse,
  ExportStatusProjectsLocationsServicesRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportStatusProjectsLocationsServicesRevisionsRequest,
  output: ExportStatusProjectsLocationsServicesRevisionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsServicesRevisionsRequest {
  /** Required. The name of the Revision to delete. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision} */
  name: string;
  /** Indicates that the request should be validated without actually deleting any resources. */
  validateOnly?: boolean;
  /** A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates. */
  etag?: string;
}

export const DeleteProjectsLocationsServicesRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsServicesRevisionsRequest>;

export type DeleteProjectsLocationsServicesRevisionsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsServicesRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsServicesRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Revision. */
export const deleteProjectsLocationsServicesRevisions: API.OperationMethod<
  DeleteProjectsLocationsServicesRevisionsRequest,
  DeleteProjectsLocationsServicesRevisionsResponse,
  DeleteProjectsLocationsServicesRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServicesRevisionsRequest,
  output: DeleteProjectsLocationsServicesRevisionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsServicesRevisionsRequest {
  /** Required. The Service from which the Revisions should be listed. To list all Revisions across Services, use "-" instead of Service name. Format: projects/{project}/locations/{location}/services/{service} */
  parent: string;
  /** Maximum number of revisions to return in this call. */
  pageSize?: number;
  /** A page token received from a previous call to ListRevisions. All other parameters must match. */
  pageToken?: string;
  /** If true, returns deleted (but unexpired) resources along with active ones. */
  showDeleted?: boolean;
}

export const ListProjectsLocationsServicesRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/revisions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsServicesRevisionsRequest>;

export type ListProjectsLocationsServicesRevisionsResponse =
  GoogleCloudRunV2ListRevisionsResponse;
export const ListProjectsLocationsServicesRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRunV2ListRevisionsResponse;

export type ListProjectsLocationsServicesRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Revisions from a given Service, or from a given location. Results are sorted by creation time, descending. */
export const listProjectsLocationsServicesRevisions: API.PaginatedOperationMethod<
  ListProjectsLocationsServicesRevisionsRequest,
  ListProjectsLocationsServicesRevisionsResponse,
  ListProjectsLocationsServicesRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServicesRevisionsRequest,
  output: ListProjectsLocationsServicesRevisionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
