// ==========================================================================
// Cloud Run Admin API (run v1)
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
  version: "v1",
  rootUrl: "https://run.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleDevtoolsCloudbuildV1DeveloperConnectConfig {
  /** Required. The Developer Connect Git repository link, formatted as `projects/* /locations/* /connections/* /gitRepositoryLink/*`. */
  gitRepositoryLink?: string;
  /** Required. Directory, relative to the source root, in which to run the build. */
  dir?: string;
  /** Required. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. */
  revision?: string;
}

export const GoogleDevtoolsCloudbuildV1DeveloperConnectConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitRepositoryLink: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV1DeveloperConnectConfig",
  });

export interface ExecutionReference {
  /** Optional. Status for the execution completion. */
  completionStatus?:
    | "COMPLETION_STATUS_UNSPECIFIED"
    | "EXECUTION_SUCCEEDED"
    | "EXECUTION_FAILED"
    | "EXECUTION_RUNNING"
    | "EXECUTION_PENDING"
    | "EXECUTION_CANCELLED"
    | (string & {});
  /** Optional. Name of the execution. */
  name?: string;
  /** Optional. The read-only soft deletion timestamp of the execution. */
  deletionTimestamp?: string;
  /** Optional. Creation timestamp of the execution. */
  creationTimestamp?: string;
  /** Optional. Completion timestamp of the execution. */
  completionTimestamp?: string;
}

export const ExecutionReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  completionStatus: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  deletionTimestamp: Schema.optional(Schema.String),
  creationTimestamp: Schema.optional(Schema.String),
  completionTimestamp: Schema.optional(Schema.String),
}).annotate({ identifier: "ExecutionReference" });

export interface LocalObjectReference {
  /** Name of the referent. */
  name?: string;
}

export const LocalObjectReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "LocalObjectReference" });

export interface SecretKeySelector {
  /** This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead. */
  localObjectReference?: LocalObjectReference;
  /** Required. A Cloud Secret Manager secret version. Must be 'latest' for the latest version, an integer for a specific version, or a version alias. The key of the secret to select from. Must be a valid secret key. */
  key?: string;
  /** Specify whether the Secret or its key must be defined. */
  optional?: boolean;
  /** The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. The name of the secret in the pod's namespace to select from. */
  name?: string;
}

export const SecretKeySelector = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  localObjectReference: Schema.optional(LocalObjectReference),
  key: Schema.optional(Schema.String),
  optional: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "SecretKeySelector" });

export interface ConfigMapKeySelector {
  /** Required. Not supported by Cloud Run. */
  key?: string;
  /** Not supported by Cloud Run. */
  localObjectReference?: LocalObjectReference;
  /** Not supported by Cloud Run. */
  optional?: boolean;
  /** Required. Not supported by Cloud Run. */
  name?: string;
}

export const ConfigMapKeySelector = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  key: Schema.optional(Schema.String),
  localObjectReference: Schema.optional(LocalObjectReference),
  optional: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "ConfigMapKeySelector" });

export interface EnvVarSource {
  /** Selects a key (version) of a secret in Secret Manager. */
  secretKeyRef?: SecretKeySelector;
  /** Not supported by Cloud Run. Not supported in Cloud Run. */
  configMapKeyRef?: ConfigMapKeySelector;
}

export const EnvVarSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  secretKeyRef: Schema.optional(SecretKeySelector),
  configMapKeyRef: Schema.optional(ConfigMapKeySelector),
}).annotate({ identifier: "EnvVarSource" });

export interface EnvVar {
  /** Source for the environment variable's value. Only supports secret_key_ref. Cannot be used if value is not empty. */
  valueFrom?: EnvVarSource;
  /** Required. Name of the environment variable. */
  name?: string;
  /** Value of the environment variable. Defaults to "". Variable references are not supported in Cloud Run. */
  value?: string;
}

export const EnvVar = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  valueFrom: Schema.optional(EnvVarSource),
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "EnvVar" });

export interface ContainerOverride {
  /** The name of the container specified as a DNS_LABEL. */
  name?: string;
  /** Arguments to the entrypoint. The specified arguments replace and override any existing entrypoint arguments. Must be empty if `clear_args` is set to true. */
  args?: ReadonlyArray<string>;
  /** Optional. Set to True to clear all existing arguments. */
  clearArgs?: boolean;
  /** List of environment variables to set in the container. All specified environment variables are merged with existing environment variables. When the specified environment variables exist, these values override any existing values. */
  env?: ReadonlyArray<EnvVar>;
}

export const ContainerOverride = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  args: Schema.optional(Schema.Array(Schema.String)),
  clearArgs: Schema.optional(Schema.Boolean),
  env: Schema.optional(Schema.Array(EnvVar)),
}).annotate({ identifier: "ContainerOverride" });

export interface Overrides {
  /** Per container override specification. */
  containerOverrides?: ReadonlyArray<ContainerOverride>;
  /** The desired number of tasks the execution should run. Will replace existing task_count value. */
  taskCount?: number;
  /** Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. Will replace existing timeout_seconds value. */
  timeoutSeconds?: number;
}

export const Overrides = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  containerOverrides: Schema.optional(Schema.Array(ContainerOverride)),
  taskCount: Schema.optional(Schema.Number),
  timeoutSeconds: Schema.optional(Schema.Number),
}).annotate({ identifier: "Overrides" });

export interface GoogleDevtoolsCloudbuildV1GitSourceRepository {
  /** Location of the Git repository. */
  url?: string;
  /** The Developer Connect Git repository link formatted as `projects/* /locations/* /connections/* /gitRepositoryLink/*` */
  developerConnect?: string;
}

export const GoogleDevtoolsCloudbuildV1GitSourceRepository =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    developerConnect: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1GitSourceRepository" });

export interface GoogleDevtoolsCloudbuildV1GitSourceDependency {
  /** Required. Where should the files be placed on the worker. */
  destPath?: string;
  /** Required. The kind of repo (url or dev connect). */
  repository?: GoogleDevtoolsCloudbuildV1GitSourceRepository;
  /** Optional. True if submodules should be fetched too (default false). */
  recurseSubmodules?: boolean;
  /** Required. The revision that we will fetch the repo at. */
  revision?: string;
  /** Optional. How much history should be fetched for the build (default 1, -1 for all history). */
  depth?: string;
}

export const GoogleDevtoolsCloudbuildV1GitSourceDependency =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destPath: Schema.optional(Schema.String),
    repository: Schema.optional(GoogleDevtoolsCloudbuildV1GitSourceRepository),
    recurseSubmodules: Schema.optional(Schema.Boolean),
    revision: Schema.optional(Schema.String),
    depth: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1GitSourceDependency" });

export interface GoogleDevtoolsCloudbuildV1SecretManagerSecret {
  /** Resource name of the SecretVersion. In format: projects/* /secrets/* /versions/* */
  versionName?: string;
  /** Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. */
  env?: string;
}

export const GoogleDevtoolsCloudbuildV1SecretManagerSecret =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionName: Schema.optional(Schema.String),
    env: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1SecretManagerSecret" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface CancelExecutionRequest {}

export const CancelExecutionRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CancelExecutionRequest" });

export interface ExecAction {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  command?: ReadonlyArray<string>;
}

export const ExecAction = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  command: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ExecAction" });

export interface HTTPHeader {
  /** The header field value */
  value?: string;
  /** Required. The header field name */
  name?: string;
}

export const HTTPHeader = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "HTTPHeader" });

export interface HTTPGetAction {
  /** Path to access on the HTTP server. */
  path?: string;
  /** Not supported by Cloud Run. */
  scheme?: string;
  /** Port number to access on the container. Number must be in the range 1 to 65535. */
  port?: number;
  /** Not supported by Cloud Run. */
  host?: string;
  /** Custom headers to set in the request. HTTP allows repeated headers. */
  httpHeaders?: ReadonlyArray<HTTPHeader>;
}

export const HTTPGetAction = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.optional(Schema.String),
  scheme: Schema.optional(Schema.String),
  port: Schema.optional(Schema.Number),
  host: Schema.optional(Schema.String),
  httpHeaders: Schema.optional(Schema.Array(HTTPHeader)),
}).annotate({ identifier: "HTTPGetAction" });

export interface GRPCAction {
  /** Service is the name of the service to place in the gRPC HealthCheckRequest. If this is not specified, the default behavior is defined by gRPC. */
  service?: string;
  /** Port number of the gRPC service. Number must be in the range 1 to 65535. */
  port?: number;
}

export const GRPCAction = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  service: Schema.optional(Schema.String),
  port: Schema.optional(Schema.Number),
}).annotate({ identifier: "GRPCAction" });

export interface TCPSocketAction {
  /** Port number to access on the container. Number must be in the range 1 to 65535. */
  port?: number;
  /** Not supported by Cloud Run. */
  host?: string;
}

export const TCPSocketAction = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  port: Schema.optional(Schema.Number),
  host: Schema.optional(Schema.String),
}).annotate({ identifier: "TCPSocketAction" });

export interface Probe {
  /** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds; if period_seconds is not set, must be less or equal than 10. */
  timeoutSeconds?: number;
  /** Not supported by Cloud Run. */
  exec?: ExecAction;
  /** HTTPGet specifies the http request to perform. */
  httpGet?: HTTPGetAction;
  /** Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. */
  initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds. */
  periodSeconds?: number;
  /** GRPCAction specifies an action involving a GRPC port. */
  grpc?: GRPCAction;
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
  failureThreshold?: number;
  /** TCPSocket specifies an action involving a TCP port. */
  tcpSocket?: TCPSocketAction;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 if set. */
  successThreshold?: number;
}

export const Probe = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  timeoutSeconds: Schema.optional(Schema.Number),
  exec: Schema.optional(ExecAction),
  httpGet: Schema.optional(HTTPGetAction),
  initialDelaySeconds: Schema.optional(Schema.Number),
  periodSeconds: Schema.optional(Schema.Number),
  grpc: Schema.optional(GRPCAction),
  failureThreshold: Schema.optional(Schema.Number),
  tcpSocket: Schema.optional(TCPSocketAction),
  successThreshold: Schema.optional(Schema.Number),
}).annotate({ identifier: "Probe" });

export interface ContainerPort {
  /** Port number the container listens on. If present, this must be a valid port number, 0 < x < 65536. If not present, it will default to port 8080. For more information, see https://cloud.google.com/run/docs/container-contract#port */
  containerPort?: number;
  /** If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". */
  name?: string;
  /** Protocol for port. Must be "TCP". Defaults to "TCP". */
  protocol?: string;
}

export const ContainerPort = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  containerPort: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  protocol: Schema.optional(Schema.String),
}).annotate({ identifier: "ContainerPort" });

export interface VolumeMount {
  /** Required. Path within the container at which the volume should be mounted. Must not contain ':'. */
  mountPath?: string;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). This field is currently rejected in Secret volume mounts. */
  subPath?: string;
  /** Required. The name of the volume. There must be a corresponding Volume with the same name. */
  name?: string;
  /** Sets the mount to be read-only or read-write. Not used by Cloud Run. */
  readOnly?: boolean;
}

export const VolumeMount = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mountPath: Schema.optional(Schema.String),
  subPath: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  readOnly: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "VolumeMount" });

export interface ConfigMapEnvSource {
  /** Specify whether the ConfigMap must be defined. */
  optional?: boolean;
  /** The ConfigMap to select from. */
  name?: string;
  /** This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead. */
  localObjectReference?: LocalObjectReference;
}

export const ConfigMapEnvSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  optional: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  localObjectReference: Schema.optional(LocalObjectReference),
}).annotate({ identifier: "ConfigMapEnvSource" });

export interface SecretEnvSource {
  /** This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead. */
  localObjectReference?: LocalObjectReference;
  /** Specify whether the Secret must be defined */
  optional?: boolean;
  /** The Secret to select from. */
  name?: string;
}

export const SecretEnvSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  localObjectReference: Schema.optional(LocalObjectReference),
  optional: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "SecretEnvSource" });

export interface EnvFromSource {
  /** An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  prefix?: string;
  /** The ConfigMap to select from */
  configMapRef?: ConfigMapEnvSource;
  /** The Secret to select from */
  secretRef?: SecretEnvSource;
}

export const EnvFromSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  prefix: Schema.optional(Schema.String),
  configMapRef: Schema.optional(ConfigMapEnvSource),
  secretRef: Schema.optional(SecretEnvSource),
}).annotate({ identifier: "EnvFromSource" });

export interface ResourceRequirements {
  /** Requests describes the minimum amount of compute resources required. Only `cpu` and `memory` are supported. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. * For supported 'cpu' values, go to https://cloud.google.com/run/docs/configuring/cpu. * For supported 'memory' values and syntax, go to https://cloud.google.com/run/docs/configuring/memory-limits */
  requests?: Record<string, string>;
  /** Limits describes the maximum amount of compute resources allowed. Only 'cpu', 'memory' and 'nvidia.com/gpu' keys are supported. * For supported 'cpu' values, go to https://cloud.google.com/run/docs/configuring/cpu. * For supported 'memory' values and syntax, go to https://cloud.google.com/run/docs/configuring/memory-limits. * The only supported 'nvidia.com/gpu' value is '1'. */
  limits?: Record<string, string>;
}

export const ResourceRequirements = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requests: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  limits: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "ResourceRequirements" });

export interface SecurityContext {
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  runAsUser?: number;
}

export const SecurityContext = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  runAsUser: Schema.optional(Schema.Number),
}).annotate({ identifier: "SecurityContext" });

export interface Container {
  /** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  terminationMessagePolicy?: string;
  /** Periodic probe of container liveness. Container will be restarted if the probe fails. */
  livenessProbe?: Probe;
  /** List of environment variables to set in the container. EnvVar with duplicate names are generally allowed; if referencing a secret, the name must be unique for the container. For non-secret EnvVar names, the Container will only get the last-declared one. */
  env?: ReadonlyArray<EnvVar>;
  /** List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible. If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on. */
  ports?: ReadonlyArray<ContainerPort>;
  /** Name of the container specified as a DNS_LABEL (RFC 1123). */
  name?: string;
  /** Volume to mount into the container's filesystem. Only supports SecretVolumeSources. Pod volumes to mount into the container's filesystem. */
  volumeMounts?: ReadonlyArray<VolumeMount>;
  /** Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. */
  terminationMessagePath?: string;
  /** Not supported by Cloud Run. */
  envFrom?: ReadonlyArray<EnvFromSource>;
  /** Required. Name of the container image in Dockerhub, Google Artifact Registry, or Google Container Registry. If the host is not provided, Dockerhub is assumed. */
  image?: string;
  /** Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not receive traffic if the probe fails. If not provided, a default startup probe with TCP socket action is used. */
  startupProbe?: Probe;
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references are not supported in Cloud Run. */
  command?: ReadonlyArray<string>;
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references are not supported in Cloud Run. */
  args?: ReadonlyArray<string>;
  /** Compute Resources required by this container. */
  resources?: ResourceRequirements;
  /** Readiness probe to be used for health checks. */
  readinessProbe?: Probe;
  /** Not supported by Cloud Run. */
  securityContext?: SecurityContext;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. */
  imagePullPolicy?: string;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. */
  workingDir?: string;
}

export const Container = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  terminationMessagePolicy: Schema.optional(Schema.String),
  livenessProbe: Schema.optional(Probe),
  env: Schema.optional(Schema.Array(EnvVar)),
  ports: Schema.optional(Schema.Array(ContainerPort)),
  name: Schema.optional(Schema.String),
  volumeMounts: Schema.optional(Schema.Array(VolumeMount)),
  terminationMessagePath: Schema.optional(Schema.String),
  envFrom: Schema.optional(Schema.Array(EnvFromSource)),
  image: Schema.optional(Schema.String),
  startupProbe: Schema.optional(Probe),
  command: Schema.optional(Schema.Array(Schema.String)),
  args: Schema.optional(Schema.Array(Schema.String)),
  resources: Schema.optional(ResourceRequirements),
  readinessProbe: Schema.optional(Probe),
  securityContext: Schema.optional(SecurityContext),
  imagePullPolicy: Schema.optional(Schema.String),
  workingDir: Schema.optional(Schema.String),
}).annotate({ identifier: "Container" });

export interface NFSVolumeSource {
  /** Hostname or IP address of the NFS server. */
  server?: string;
  /** Path that is exported by the NFS server. */
  path?: string;
  /** If true, mount the NFS volume as read only. Defaults to false. */
  readOnly?: boolean;
}

export const NFSVolumeSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  server: Schema.optional(Schema.String),
  path: Schema.optional(Schema.String),
  readOnly: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "NFSVolumeSource" });

export interface CSIVolumeSource {
  /** name of the CSI driver for the requested storage system. Cloud Run supports the following drivers: * gcsfuse.run.googleapis.com : Mount a Cloud Storage Bucket as a volume. */
  driver?: string;
  /** If true, mount the volume as read only. Defaults to false. */
  readOnly?: boolean;
  /** stores driver specific attributes. For Google Cloud Storage volumes, the following attributes are supported: * bucketName: the name of the Cloud Storage bucket to mount. The Cloud Run Service identity must have access to this bucket. * mountOptions: comma-separated list of mount options to pass to the gcsfuse. */
  volumeAttributes?: Record<string, string>;
}

export const CSIVolumeSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  driver: Schema.optional(Schema.String),
  readOnly: Schema.optional(Schema.Boolean),
  volumeAttributes: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
}).annotate({ identifier: "CSIVolumeSource" });

export interface EmptyDirVolumeSource {
  /** The medium on which the data is stored. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
  medium?: string;
  /** Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers. The default is nil which means that the limit is undefined. More info: https://cloud.google.com/run/docs/configuring/in-memory-volumes#configure-volume. Info in Kubernetes: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir */
  sizeLimit?: string;
}

export const EmptyDirVolumeSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  medium: Schema.optional(Schema.String),
  sizeLimit: Schema.optional(Schema.String),
}).annotate({ identifier: "EmptyDirVolumeSource" });

export interface KeyToPath {
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  path?: string;
  /** (Optional) Mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  mode?: number;
  /** The Cloud Secret Manager secret version. Can be 'latest' for the latest value, or an integer or a secret alias for a specific version. The key to project. */
  key?: string;
}

export const KeyToPath = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.optional(Schema.String),
  mode: Schema.optional(Schema.Number),
  key: Schema.optional(Schema.String),
}).annotate({ identifier: "KeyToPath" });

export interface ConfigMapVolumeSource {
  /** (Optional) Integer representation of mode bits to use on created files by default. Must be a value between 01 and 0777 (octal). If 0 or not set, it will default to 0644. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: number;
  /** Name of the config. */
  name?: string;
  /** (Optional) If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified that is not present in the Secret, the volume setup will error unless it is marked optional. */
  items?: ReadonlyArray<KeyToPath>;
  /** (Optional) Specify whether the Secret or its keys must be defined. */
  optional?: boolean;
}

export const ConfigMapVolumeSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  defaultMode: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(KeyToPath)),
  optional: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ConfigMapVolumeSource" });

export interface SecretVolumeSource {
  /** Integer representation of mode bits to use on created files by default. Must be a value between 01 and 0777 (octal). If 0 or not set, it will default to 0444. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: number;
  /** A list of secret versions to mount in the volume. If no items are specified, the volume will expose a file with the same name as the secret name. The contents of the file will be the data in the latest version of the secret. If items are specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify both a key and a path. */
  items?: ReadonlyArray<KeyToPath>;
  /** Not supported by Cloud Run. */
  optional?: boolean;
  /** The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. Name of the secret in the container's namespace to use. */
  secretName?: string;
}

export const SecretVolumeSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  defaultMode: Schema.optional(Schema.Number),
  items: Schema.optional(Schema.Array(KeyToPath)),
  optional: Schema.optional(Schema.Boolean),
  secretName: Schema.optional(Schema.String),
}).annotate({ identifier: "SecretVolumeSource" });

export interface Volume {
  /** Volume's name. In Cloud Run Fully Managed, the name 'cloudsql' is reserved. */
  name?: string;
  nfs?: NFSVolumeSource;
  /** Volume specified by the Container Storage Interface driver */
  csi?: CSIVolumeSource;
  /** Ephemeral storage used as a shared volume. */
  emptyDir?: EmptyDirVolumeSource;
  /** Not supported in Cloud Run. */
  configMap?: ConfigMapVolumeSource;
  /** The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secretName. */
  secret?: SecretVolumeSource;
}

export const Volume = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  nfs: Schema.optional(NFSVolumeSource),
  csi: Schema.optional(CSIVolumeSource),
  emptyDir: Schema.optional(EmptyDirVolumeSource),
  configMap: Schema.optional(ConfigMapVolumeSource),
  secret: Schema.optional(SecretVolumeSource),
}).annotate({ identifier: "Volume" });

export interface TaskSpec {
  /** Optional. The Node Selector configuration. Map of selector key to a value which matches a node. */
  nodeSelector?: Record<string, string>;
  /** Optional. List of containers belonging to the task. We disallow a number of fields on this Container. */
  containers?: ReadonlyArray<Container>;
  /** Optional. Number of retries allowed per task, before marking this job failed. Defaults to 3. */
  maxRetries?: number;
  /** Optional. List of volumes that can be mounted by containers belonging to the task. */
  volumes?: ReadonlyArray<Volume>;
  /** Optional. Email address of the IAM service account associated with the task of a job execution. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account. */
  serviceAccountName?: string;
  /** Optional. Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. Defaults to 600 seconds. */
  timeoutSeconds?: string;
}

export const TaskSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nodeSelector: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  containers: Schema.optional(Schema.Array(Container)),
  maxRetries: Schema.optional(Schema.Number),
  volumes: Schema.optional(Schema.Array(Volume)),
  serviceAccountName: Schema.optional(Schema.String),
  timeoutSeconds: Schema.optional(Schema.String),
}).annotate({ identifier: "TaskSpec" });

export interface TaskTemplateSpec {
  /** Optional. Specification of the desired behavior of the task. */
  spec?: TaskSpec;
}

export const TaskTemplateSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  spec: Schema.optional(TaskSpec),
}).annotate({ identifier: "TaskTemplateSpec" });

export interface ExecutionSpec {
  /** Optional. The template used to create tasks for this execution. */
  template?: TaskTemplateSpec;
  /** Optional. Specifies the maximum desired number of tasks the execution should run at given time. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed, i.e. when the work left to do is less than max parallelism. */
  parallelism?: number;
  /** Optional. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. Defaults to 1. */
  taskCount?: number;
}

export const ExecutionSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  template: Schema.optional(TaskTemplateSpec),
  parallelism: Schema.optional(Schema.Number),
  taskCount: Schema.optional(Schema.Number),
}).annotate({ identifier: "ExecutionSpec" });

export interface StartInstanceRequest {}

export const StartInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "StartInstanceRequest" });

export interface GoogleCloudRunV1Condition {
  /** Optional. How to interpret this condition. One of Error, Warning, or Info. Conditions of severity Info do not contribute to resource readiness. */
  severity?: string;
  /** Optional. One-word CamelCase reason for the condition's last transition. These are intended to be stable, unique values which the client may use to trigger error handling logic, whereas messages which may be changed later by the server. */
  reason?: string;
  /** Optional. Human readable message indicating details about the current status. */
  message?: string;
  /** Optional. Last time the condition transitioned from one status to another. */
  lastTransitionTime?: string;
  /** Status of the condition, one of True, False, Unknown. */
  status?: string;
  /** type is used to communicate the status of the reconciliation process. Types common to all resources include: * "Ready" or "Completed": True when the Resource is ready. */
  type?: string;
}

export const GoogleCloudRunV1Condition =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    lastTransitionTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRunV1Condition" });

export interface Addressable {
  url?: string;
}

export const Addressable = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.optional(Schema.String),
}).annotate({ identifier: "Addressable" });

export interface TrafficTarget {
  /** Output only. URL displays the URL for accessing tagged traffic targets. URL is displayed in status, and is disallowed on spec. URL must contain a scheme (e.g. https://) and a hostname, but may not contain anything else (e.g. basic auth, url path, etc.) */
  url?: string;
  /** Percent specifies percent of the traffic to this Revision or Configuration. This defaults to zero if unspecified. */
  percent?: number;
  /** Uses the "status.latestReadyRevisionName" of the Service to determine the traffic target. When it changes, traffic will automatically migrate from the prior "latest ready" revision to the new one. This field must be false if RevisionName is set. This field defaults to true otherwise. If the field is set to true on Status, this means that the Revision was resolved from the Service's latest ready revision. */
  latestRevision?: boolean;
  /** Tag is used to expose a dedicated url for referencing this target exclusively. */
  tag?: string;
  /** Points this traffic target to a specific Revision. This field is mutually exclusive with latest_revision. */
  revisionName?: string;
  /** [Deprecated] Not supported in Cloud Run. It must be empty. */
  configurationName?: string;
}

export const TrafficTarget = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.optional(Schema.String),
  percent: Schema.optional(Schema.Number),
  latestRevision: Schema.optional(Schema.Boolean),
  tag: Schema.optional(Schema.String),
  revisionName: Schema.optional(Schema.String),
  configurationName: Schema.optional(Schema.String),
}).annotate({ identifier: "TrafficTarget" });

export interface RouteStatus {
  /** URL holds the url that will distribute traffic over the provided traffic targets. It generally has the form: `https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app` */
  url?: string;
  /** Conditions communicates information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. */
  conditions?: ReadonlyArray<GoogleCloudRunV1Condition>;
  /** ObservedGeneration is the 'Generation' of the Route that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False. Note that providing a TrafficTarget that has latest_revision=True will result in a Route that does not increment either its metadata.generation or its observedGeneration, as new "latest ready" revisions from the Configuration are processed without an update to the Route's spec. */
  observedGeneration?: number;
  /** Similar to url, information on where the service is available on HTTP. */
  address?: Addressable;
  /** Traffic holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that was last observed. */
  traffic?: ReadonlyArray<TrafficTarget>;
}

export const RouteStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.optional(Schema.String),
  conditions: Schema.optional(Schema.Array(GoogleCloudRunV1Condition)),
  observedGeneration: Schema.optional(Schema.Number),
  address: Schema.optional(Addressable),
  traffic: Schema.optional(Schema.Array(TrafficTarget)),
}).annotate({ identifier: "RouteStatus" });

export interface RouteSpec {
  /** Traffic specifies how to distribute traffic over a collection of Knative Revisions and Configurations. Cloud Run currently supports a single configurationName. */
  traffic?: ReadonlyArray<TrafficTarget>;
}

export const RouteSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  traffic: Schema.optional(Schema.Array(TrafficTarget)),
}).annotate({ identifier: "RouteSpec" });

export interface OwnerReference {
  /** This is not supported or used by Cloud Run. */
  uid?: string;
  /** This is not supported or used by Cloud Run. */
  blockOwnerDeletion?: boolean;
  /** This is not supported or used by Cloud Run. */
  kind?: string;
  /** This is not supported or used by Cloud Run. */
  controller?: boolean;
  /** This is not supported or used by Cloud Run. */
  name?: string;
  /** This is not supported or used by Cloud Run. */
  apiVersion?: string;
}

export const OwnerReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uid: Schema.optional(Schema.String),
  blockOwnerDeletion: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
  controller: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  apiVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "OwnerReference" });

export interface ObjectMeta {
  /** Unique, system-generated identifier for this resource. */
  uid?: string;
  /** Unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. In Cloud Run, annotations with 'run.googleapis.com/' and 'autoscaling.knative.dev' are restricted, and the accepted annotations will be different depending on the resource type. * `autoscaling.knative.dev/maxScale`: Revision. * `autoscaling.knative.dev/minScale`: Revision. * `run.googleapis.com/base-images`: Service, Revision. * `run.googleapis.com/binary-authorization-breakglass`: Service, Job, * `run.googleapis.com/binary-authorization`: Service, Job, Execution. * `run.googleapis.com/build-base-image`: Service. * `run.googleapis.com/build-enable-automatic-updates`: Service. * `run.googleapis.com/build-environment-variables`: Service. * `run.googleapis.com/build-function-target`: Service, Revision. * `run.googleapis.com/build-id`: Service, Revision. * `run.googleapis.com/build-image-uri`: Service. * `run.googleapis.com/build-name`: Service. * `run.googleapis.com/build-service-account`: Service. * `run.googleapis.com/build-source-location`: Service, Revision. * `run.googleapis.com/build-worker-pool`: Service. * `run.googleapis.com/client-name`: All resources. * `run.googleapis.com/cloudsql-instances`: Revision, Execution. * `run.googleapis.com/container-dependencies`: Revision . * `run.googleapis.com/cpu-throttling`: Revision. * `run.googleapis.com/custom-audiences`: Service. * `run.googleapis.com/default-url-disabled`: Service. * `run.googleapis.com/description`: Service. * `run.googleapis.com/encryption-key-shutdown-hours`: Revision * `run.googleapis.com/encryption-key`: Revision, Execution. * `run.googleapis.com/execution-environment`: Revision, Execution. * `run.googleapis.com/gc-traffic-tags`: Service. * `run.googleapis.com/gpu-zonal-redundancy-disabled`: Revision. * `run.googleapis.com/health-check-disabled`: Revision. * `run.googleapis.com/ingress`: Service, Instance. * `run.googleapis.com/invoker-iam-disabled`: Service, Instance. * `run.googleapis.com/launch-stage`: Service, Job. * `run.googleapis.com/minScale`: Service. * `run.googleapis.com/maxScale`: Service. * `run.googleapis.com/manualInstanceCount`: Service. * `run.googleapis.com/network-interfaces`: Revision, Execution. * `run.googleapis.com/post-key-revocation-action-type`: Revision. `run.googleapis.com/scalingMode`: Service. * `run.googleapis.com/secrets`: Revision, Execution. * `run.googleapis.com/secure-session-agent`: Revision. * `run.googleapis.com/sessionAffinity`: Revision. * `run.googleapis.com/startup-cpu-boost`: Revision. * `run.googleapis.com/vpc-access-connector`: Revision, Execution. * `run.googleapis.com/vpc-access-egress`: Revision, Execution. */
  annotations?: Record<string, string>;
  /** Required. Defines the space within each name must be unique within a Cloud Run region. In Cloud Run, it must be project ID or number. */
  namespace?: string;
  /** URL representing this object. */
  selfLink?: string;
  /** Not supported by Cloud Run */
  ownerReferences?: ReadonlyArray<OwnerReference>;
  /** UTC timestamp representing the server time when this object was created. */
  creationTimestamp?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and routes. */
  labels?: Record<string, string>;
  /** Optional. The name of the resource. A name for creating top-level resources (Service, Job, WorkerPool). Must be unique within a Cloud Run project/region, and cannot be changed once created. If omitted, a default name will be generated. */
  name?: string;
  /** Optional. A prefix for the resource name if not provided in the create request. Must be less than 31 characters to allow for a random suffix. */
  generateName?: string;
  /** The read-only soft deletion timestamp for this resource. In Cloud Run, users are not able to set this field. Instead, they must call the corresponding Delete API. */
  deletionTimestamp?: string;
  /** Not supported by Cloud Run */
  clusterName?: string;
  /** A system-provided sequence number representing a specific generation of the desired state. */
  generation?: number;
  /** Not supported by Cloud Run */
  deletionGracePeriodSeconds?: number;
  /** Not supported by Cloud Run */
  finalizers?: ReadonlyArray<string>;
  /** Opaque, system-generated value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server or omit the value to disable conflict-detection. */
  resourceVersion?: string;
}

export const ObjectMeta = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uid: Schema.optional(Schema.String),
  annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  namespace: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  ownerReferences: Schema.optional(Schema.Array(OwnerReference)),
  creationTimestamp: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  generateName: Schema.optional(Schema.String),
  deletionTimestamp: Schema.optional(Schema.String),
  clusterName: Schema.optional(Schema.String),
  generation: Schema.optional(Schema.Number),
  deletionGracePeriodSeconds: Schema.optional(Schema.Number),
  finalizers: Schema.optional(Schema.Array(Schema.String)),
  resourceVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "ObjectMeta" });

export interface Route {
  /** Status communicates the observed state of the Route (from the controller). */
  status?: RouteStatus;
  /** The API version for this call such as "serving.knative.dev/v1". */
  apiVersion?: string;
  /** Spec holds the desired state of the Route (from the client). */
  spec?: RouteSpec;
  /** The kind of this resource, in this case always "Route". */
  kind?: string;
  /** Metadata associated with this Route, including name, namespace, labels, and annotations. */
  metadata?: ObjectMeta;
}

export const Route = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(RouteStatus),
  apiVersion: Schema.optional(Schema.String),
  spec: Schema.optional(RouteSpec),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ObjectMeta),
}).annotate({ identifier: "Route" });

export interface ListMeta {
  /** Continuation token is a value emitted when the count of items is larger than the user/system limit. To retrieve the next page of items, pass the value of `continue` as the next request's `page_token`. */
  continue?: string;
  /** URL representing this object. */
  selfLink?: string;
  /** Opaque string that identifies the server's internal version of this object. It can be used by clients to determine when objects have changed. If the message is passed back to the server, it must be left unmodified. */
  resourceVersion?: string;
}

export const ListMeta = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  continue: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  resourceVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "ListMeta" });

export interface ListRoutesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The API version for this call such as "serving.knative.dev/v1". */
  apiVersion?: string;
  /** List of Routes. */
  items?: ReadonlyArray<Route>;
  /** The kind of this resource, in this case always "RouteList". */
  kind?: string;
  /** Metadata associated with this Route list. */
  metadata?: ListMeta;
}

export const ListRoutesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  apiVersion: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Route)),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ListMeta),
}).annotate({ identifier: "ListRoutesResponse" });

export interface ExecutionTemplateSpec {
  /** Optional. Optional metadata for this Execution, including labels and annotations. The following annotation keys set properties of the created execution: * `run.googleapis.com/cloudsql-instances` sets Cloud SQL connections. Multiple values should be comma separated. * `run.googleapis.com/vpc-access-connector` sets a Serverless VPC Access connector. * `run.googleapis.com/vpc-access-egress` sets VPC egress. Supported values are `all-traffic`, `all` (deprecated), and `private-ranges-only`. `all-traffic` and `all` provide the same functionality. `all` is deprecated but will continue to be supported. Prefer `all-traffic`. */
  metadata?: ObjectMeta;
  /** Required. ExecutionSpec holds the desired configuration for executions of this job. */
  spec?: ExecutionSpec;
}

export const ExecutionTemplateSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.optional(ObjectMeta),
  spec: Schema.optional(ExecutionSpec),
}).annotate({ identifier: "ExecutionTemplateSpec" });

export interface GoogleDevtoolsCloudbuildV1GoModule {
  /** Optional. Project ID of the Artifact Registry repository. Defaults to the build project. */
  repositoryProjectId?: string;
  /** Optional. The Go module's "module path". e.g. example.com/foo/v2 */
  modulePath?: string;
  /** Optional. Artifact Registry repository name. Specified Go modules will be zipped and uploaded to Artifact Registry with this location as a prefix. e.g. my-go-repo */
  repositoryName?: string;
  /** Optional. Source path of the go.mod file in the build's workspace. If not specified, this will default to the current directory. e.g. ~/code/go/mypackage */
  sourcePath?: string;
  /** Optional. The Go module's semantic version in the form vX.Y.Z. e.g. v0.1.1 Pre-release identifiers can also be added by appending a dash and dot separated ASCII alphanumeric characters and hyphens. e.g. v0.2.3-alpha.x.12m.5 */
  moduleVersion?: string;
  /** Optional. Location of the Artifact Registry repository. i.e. us-east1 Defaults to the build’s location. */
  repositoryLocation?: string;
}

export const GoogleDevtoolsCloudbuildV1GoModule =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositoryProjectId: Schema.optional(Schema.String),
    modulePath: Schema.optional(Schema.String),
    repositoryName: Schema.optional(Schema.String),
    sourcePath: Schema.optional(Schema.String),
    moduleVersion: Schema.optional(Schema.String),
    repositoryLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1GoModule" });

export interface JobStatus {
  /** Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. Job-specific conditions include: * `Ready`: `True` when the job is ready to be executed. */
  conditions?: ReadonlyArray<GoogleCloudRunV1Condition>;
  /** Number of executions created for this job. */
  executionCount?: number;
  /** A pointer to the most recently created execution for this job. This is set regardless of the eventual state of the execution. */
  latestCreatedExecution?: ExecutionReference;
  /** The 'generation' of the job that was last processed by the controller. */
  observedGeneration?: number;
}

export const JobStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  conditions: Schema.optional(Schema.Array(GoogleCloudRunV1Condition)),
  executionCount: Schema.optional(Schema.Number),
  latestCreatedExecution: Schema.optional(ExecutionReference),
  observedGeneration: Schema.optional(Schema.Number),
}).annotate({ identifier: "JobStatus" });

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

export const GoogleDevtoolsCloudbuildV1Hash =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Hash" });

export interface GoogleDevtoolsCloudbuildV1FileHashes {
  /** Collection of file hashes. */
  fileHash?: ReadonlyArray<GoogleDevtoolsCloudbuildV1Hash>;
}

export const GoogleDevtoolsCloudbuildV1FileHashes =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileHash: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1Hash)),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1FileHashes" });

export interface GoogleDevtoolsCloudbuildV1TimeSpan {
  /** Start of time span. */
  startTime?: string;
  /** End of time span. */
  endTime?: string;
}

export const GoogleDevtoolsCloudbuildV1TimeSpan =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1TimeSpan" });

export interface GoogleDevtoolsCloudbuildV1UploadedGenericArtifact {
  /** Output only. URI of the uploaded artifact. Ex: projects/p1/locations/us/repositories/r1/packages/p1/versions/v1 */
  uri?: string;
  /** Output only. The hash of the whole artifact. */
  artifactFingerprint?: GoogleDevtoolsCloudbuildV1FileHashes;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** Output only. The file hashes that make up the generic artifact. */
  fileHashes?: Record<string, GoogleDevtoolsCloudbuildV1FileHashes>;
}

export const GoogleDevtoolsCloudbuildV1UploadedGenericArtifact =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    artifactFingerprint: Schema.optional(GoogleDevtoolsCloudbuildV1FileHashes),
    pushTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    artifactRegistryPackage: Schema.optional(Schema.String),
    fileHashes: Schema.optional(
      Schema.Record(Schema.String, GoogleDevtoolsCloudbuildV1FileHashes),
    ),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV1UploadedGenericArtifact",
  });

export interface ExecutionStatus {
  /** Optional. Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. Execution-specific conditions include: * `ResourcesAvailable`: `True` when underlying resources have been provisioned. * `Started`: `True` when the execution has started to execute. * `Completed`: `True` when the execution has succeeded. `False` when the execution has failed. */
  conditions?: ReadonlyArray<GoogleCloudRunV1Condition>;
  /** Optional. The number of tasks which reached phase Succeeded. */
  succeededCount?: number;
  /** Optional. The number of actively running tasks. */
  runningCount?: number;
  /** Optional. The 'generation' of the execution that was last processed by the controller. */
  observedGeneration?: number;
  /** Optional. The number of tasks which reached phase Failed. */
  failedCount?: number;
  /** Optional. Represents the time that the execution started to run. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. */
  startTime?: string;
  /** Optional. The number of tasks which reached phase Cancelled. */
  cancelledCount?: number;
  /** Optional. The number of tasks which have retried at least once. */
  retriedCount?: number;
  /** Optional. Represents the time that the execution was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional */
  completionTime?: string;
  /** Optional. URI where logs for this execution can be found in Cloud Console. */
  logUri?: string;
}

export const ExecutionStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  conditions: Schema.optional(Schema.Array(GoogleCloudRunV1Condition)),
  succeededCount: Schema.optional(Schema.Number),
  runningCount: Schema.optional(Schema.Number),
  observedGeneration: Schema.optional(Schema.Number),
  failedCount: Schema.optional(Schema.Number),
  startTime: Schema.optional(Schema.String),
  cancelledCount: Schema.optional(Schema.Number),
  retriedCount: Schema.optional(Schema.Number),
  completionTime: Schema.optional(Schema.String),
  logUri: Schema.optional(Schema.String),
}).annotate({ identifier: "ExecutionStatus" });

export interface Execution {
  /** Output only. Current status of an execution. */
  status?: ExecutionStatus;
  /** Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. */
  apiVersion?: string;
  /** Optional. Specification of the desired behavior of an execution. */
  spec?: ExecutionSpec;
  /** Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. */
  kind?: string;
  /** Optional. Standard object's metadata. */
  metadata?: ObjectMeta;
}

export const Execution = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(ExecutionStatus),
  apiVersion: Schema.optional(Schema.String),
  spec: Schema.optional(ExecutionSpec),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ObjectMeta),
}).annotate({ identifier: "Execution" });

export interface ListExecutionsResponse {
  /** The API version for this call such as "run.googleapis.com/v1". */
  apiVersion?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The kind of this resource, in this case "ExecutionsList". */
  kind?: string;
  /** Metadata associated with this executions list. */
  metadata?: ListMeta;
  /** List of Executions. */
  items?: ReadonlyArray<Execution>;
}

export const ListExecutionsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    apiVersion: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(ListMeta),
    items: Schema.optional(Schema.Array(Execution)),
  },
).annotate({ identifier: "ListExecutionsResponse" });

export interface GoogleLongrunningWaitOperationRequest {
  /** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
  timeout?: string;
}

export const GoogleLongrunningWaitOperationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleLongrunningWaitOperationRequest" });

export interface JobSpec {
  /** A unique string used as a suffix for creating a new execution. The Job will become ready when the execution is successfully started. The sum of job name and token length must be fewer than 63 characters. */
  startExecutionToken?: string;
  /** Optional. Describes the execution that will be created when running a job. */
  template?: ExecutionTemplateSpec;
  /** A unique string used as a suffix for creating a new execution. The Job will become ready when the execution is successfully completed. The sum of job name and token length must be fewer than 63 characters. */
  runExecutionToken?: string;
}

export const JobSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startExecutionToken: Schema.optional(Schema.String),
  template: Schema.optional(ExecutionTemplateSpec),
  runExecutionToken: Schema.optional(Schema.String),
}).annotate({ identifier: "JobSpec" });

export interface DomainMappingSpec {
  /** If set, the mapping will override any mapping set before this spec was set. It is recommended that the user leaves this empty to receive an error warning about a potential conflict and only set it once the respective UI has given such a warning. */
  forceOverride?: boolean;
  /** The mode of the certificate. */
  certificateMode?:
    | "CERTIFICATE_MODE_UNSPECIFIED"
    | "NONE"
    | "AUTOMATIC"
    | (string & {});
  /** The name of the Knative Route that this DomainMapping applies to. The route must exist. */
  routeName?: string;
}

export const DomainMappingSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  forceOverride: Schema.optional(Schema.Boolean),
  certificateMode: Schema.optional(Schema.String),
  routeName: Schema.optional(Schema.String),
}).annotate({ identifier: "DomainMappingSpec" });

export interface GoogleDevtoolsCloudbuildV1UploadedMavenArtifact {
  /** URI of the uploaded artifact. */
  uri?: string;
  /** Hash types and values of the Maven Artifact. */
  fileHashes?: GoogleDevtoolsCloudbuildV1FileHashes;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
}

export const GoogleDevtoolsCloudbuildV1UploadedMavenArtifact =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    fileHashes: Schema.optional(GoogleDevtoolsCloudbuildV1FileHashes),
    pushTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    artifactRegistryPackage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV1UploadedMavenArtifact",
  });

export interface InstanceSpec {
  /** Optional. List of containers belonging to the Instance. We disallow a number of fields on this Container. */
  containers?: ReadonlyArray<Container>;
  /** Optional. The Node Selector configuration. Map of selector key to a value which matches a node. */
  nodeSelector?: Record<string, string>;
  /** Optional. Duration the instance may be active before the system will shut it down. */
  timeout?: string;
  /** Optional. List of volumes that can be mounted by containers belonging to the Instance. */
  volumes?: ReadonlyArray<Volume>;
  /** Optional. Email address of the IAM service account associated with the Instance. The service account represents the identity of the running container, and determines what permissions the Instance has. If not provided, the Instance will use the project's default service account. */
  serviceAccountName?: string;
}

export const InstanceSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  containers: Schema.optional(Schema.Array(Container)),
  nodeSelector: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  timeout: Schema.optional(Schema.String),
  volumes: Schema.optional(Schema.Array(Volume)),
  serviceAccountName: Schema.optional(Schema.String),
}).annotate({ identifier: "InstanceSpec" });

export interface GoogleDevtoolsCloudbuildV1Volume {
  /** Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. */
  name?: string;
  /** Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. */
  path?: string;
}

export const GoogleDevtoolsCloudbuildV1Volume =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Volume" });

export interface GoogleDevtoolsCloudbuildV1BuildStep {
  /** Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence. */
  allowExitCodes?: ReadonlyArray<number>;
  /** Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption. */
  automapSubstitutions?: boolean;
  /** A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. */
  secretEnv?: ReadonlyArray<string>;
  /** Output only. Stores timing information for pulling this build step's builder image only. */
  pullTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully. */
  waitFor?: ReadonlyArray<string>;
  /** Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out. */
  timeout?: string;
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
  /** Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step. */
  name?: string;
  /** A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
  env?: ReadonlyArray<string>;
  /** Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field. */
  allowFailure?: boolean;
  /** Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution. */
  dir?: string;
  /** Output only. Return code from running the step. */
  exitCode?: number;
  /** Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency. */
  id?: string;
  /** A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments. */
  args?: ReadonlyArray<string>;
  /** Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. */
  entrypoint?: string;
  /** List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration. */
  volumes?: ReadonlyArray<GoogleDevtoolsCloudbuildV1Volume>;
  /** Output only. Stores timing information for executing this build step. */
  timing?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args. */
  script?: string;
}

export const GoogleDevtoolsCloudbuildV1BuildStep =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowExitCodes: Schema.optional(Schema.Array(Schema.Number)),
    automapSubstitutions: Schema.optional(Schema.Boolean),
    secretEnv: Schema.optional(Schema.Array(Schema.String)),
    pullTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    waitFor: Schema.optional(Schema.Array(Schema.String)),
    timeout: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    env: Schema.optional(Schema.Array(Schema.String)),
    allowFailure: Schema.optional(Schema.Boolean),
    dir: Schema.optional(Schema.String),
    exitCode: Schema.optional(Schema.Number),
    id: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    entrypoint: Schema.optional(Schema.String),
    volumes: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1Volume)),
    timing: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    script: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1BuildStep" });

export interface GoogleDevtoolsCloudbuildV1BuiltImage {
  /** Output only. Stores timing information for pushing the specified image. */
  pushTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** Name used to push the container image to Google Container Registry, as presented to `docker push`. */
  name?: string;
  /** Docker Registry 2.0 digest. */
  digest?: string;
  /** Output only. The OCI media type of the artifact. Non-OCI images, such as Docker images, will have an unspecified value. */
  ociMediaType?:
    | "OCI_MEDIA_TYPE_UNSPECIFIED"
    | "IMAGE_MANIFEST"
    | "IMAGE_INDEX"
    | (string & {});
}

export const GoogleDevtoolsCloudbuildV1BuiltImage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pushTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    artifactRegistryPackage: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.String),
    ociMediaType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1BuiltImage" });

export interface GoogleDevtoolsCloudbuildV1GenericArtifactDependency {
  /** Required. The location to download the artifact files from. Ex: projects/p1/locations/us/repositories/r1/packages/p1/versions/v1 */
  resource?: string;
  /** Required. Where the artifact files should be placed on the worker. */
  destPath?: string;
}

export const GoogleDevtoolsCloudbuildV1GenericArtifactDependency =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.String),
    destPath: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV1GenericArtifactDependency",
  });

export interface GoogleDevtoolsCloudbuildV1Dependency {
  /** If set to true disable all dependency fetching (ignoring the default source as well). */
  empty?: boolean;
  /** Represents a git repository as a build dependency. */
  gitSource?: GoogleDevtoolsCloudbuildV1GitSourceDependency;
  /** Represents a generic artifact as a build dependency. */
  genericArtifact?: GoogleDevtoolsCloudbuildV1GenericArtifactDependency;
}

export const GoogleDevtoolsCloudbuildV1Dependency =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    empty: Schema.optional(Schema.Boolean),
    gitSource: Schema.optional(GoogleDevtoolsCloudbuildV1GitSourceDependency),
    genericArtifact: Schema.optional(
      GoogleDevtoolsCloudbuildV1GenericArtifactDependency,
    ),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Dependency" });

export interface GoogleDevtoolsCloudbuildV1InlineSecret {
  /** Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/* /locations/* /keyRings/* /cryptoKeys/* */
  kmsKeyName?: string;
  /** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
  envMap?: Record<string, string>;
}

export const GoogleDevtoolsCloudbuildV1InlineSecret =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
    envMap: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1InlineSecret" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface RunJobRequest {
  /** Optional. Overrides existing job configuration for one specific new job execution only, using the specified values to update the job configuration for the new execution. */
  overrides?: Overrides;
}

export const RunJobRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  overrides: Schema.optional(Overrides),
}).annotate({ identifier: "RunJobRequest" });

export interface GoogleDevtoolsCloudbuildV1ArtifactObjects {
  /** Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix. */
  location?: string;
  /** Path globs used to match files in the build's workspace. */
  paths?: ReadonlyArray<string>;
  /** Output only. Stores timing information for pushing all artifact objects. */
  timing?: GoogleDevtoolsCloudbuildV1TimeSpan;
}

export const GoogleDevtoolsCloudbuildV1ArtifactObjects =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    paths: Schema.optional(Schema.Array(Schema.String)),
    timing: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1ArtifactObjects" });

export interface StatusCause {
  /** A human-readable description of the cause of the error. This field may be presented as-is to a reader. */
  message?: string;
  /** The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed. Fields may appear more than once in an array of causes due to fields having multiple errors. Examples: "name" - the field "name" on the current resource "items[0].name" - the field "name" on the first array entry in "items" */
  field?: string;
  /** A machine-readable description of the cause of the error. If this value is empty there is no information available. */
  reason?: string;
}

export const StatusCause = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
  field: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
}).annotate({ identifier: "StatusCause" });

export interface StatusDetails {
  /** The group attribute of the resource associated with the status StatusReason. */
  group?: string;
  /** The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described). */
  name?: string;
  /** The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. */
  kind?: string;
  /** The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes. */
  causes?: ReadonlyArray<StatusCause>;
  /** If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action. */
  retryAfterSeconds?: number;
  /** UID of the resource. (when there is a single resource which can be described). */
  uid?: string;
}

export const StatusDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  group: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  causes: Schema.optional(Schema.Array(StatusCause)),
  retryAfterSeconds: Schema.optional(Schema.Number),
  uid: Schema.optional(Schema.String),
}).annotate({ identifier: "StatusDetails" });

export interface Status {
  /** Status of the operation. One of: "Success" or "Failure". */
  status?: string;
  /** Extended data associated with the reason. Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type. */
  details?: StatusDetails;
  /** Suggested HTTP return code for this status, 0 if not set. */
  code?: number;
  /** Standard list metadata. */
  metadata?: ListMeta;
  /** A human-readable description of the status of this operation. */
  message?: string;
  /** A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it. */
  reason?: string;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  details: Schema.optional(StatusDetails),
  code: Schema.optional(Schema.Number),
  metadata: Schema.optional(ListMeta),
  message: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
}).annotate({ identifier: "Status" });

export interface GoogleDevtoolsCloudbuildV1StorageSourceManifest {
  /** Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
  generation?: string;
  /** Required. Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
  bucket?: string;
  /** Required. Cloud Storage object containing the source manifest. This object must be a JSON file. */
  object?: string;
}

export const GoogleDevtoolsCloudbuildV1StorageSourceManifest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generation: Schema.optional(Schema.String),
    bucket: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV1StorageSourceManifest",
  });

export interface GoogleDevtoolsCloudbuildV1RepoSource {
  /** Optional. ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. */
  projectId?: string;
  /** Optional. Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
  dir?: string;
  /** Optional. Substitutions to use in a triggered build. Should only be used with RunBuildTrigger */
  substitutions?: Record<string, string>;
  /** Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
  tagName?: string;
  /** Explicit commit SHA to build. */
  commitSha?: string;
  /** Required. Name of the Cloud Source Repository. */
  repoName?: string;
  /** Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
  branchName?: string;
  /** Optional. Only trigger a build if the revision regex does NOT match the revision regex. */
  invertRegex?: boolean;
}

export const GoogleDevtoolsCloudbuildV1RepoSource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
    substitutions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    tagName: Schema.optional(Schema.String),
    commitSha: Schema.optional(Schema.String),
    repoName: Schema.optional(Schema.String),
    branchName: Schema.optional(Schema.String),
    invertRegex: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1RepoSource" });

export interface ConfigurationStatus {
  /** LatestCreatedRevisionName is the last revision that was created from this Configuration. It might not be ready yet, so for the latest ready revision, use LatestReadyRevisionName. */
  latestCreatedRevisionName?: string;
  /** Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. */
  conditions?: ReadonlyArray<GoogleCloudRunV1Condition>;
  /** ObservedGeneration is the 'Generation' of the Configuration that was last processed by the controller. The observed generation is updated even if the controller failed to process the spec and create the Revision. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False. */
  observedGeneration?: number;
  /** LatestReadyRevisionName holds the name of the latest Revision stamped out from this Configuration that has had its "Ready" condition become "True". */
  latestReadyRevisionName?: string;
}

export const ConfigurationStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  latestCreatedRevisionName: Schema.optional(Schema.String),
  conditions: Schema.optional(Schema.Array(GoogleCloudRunV1Condition)),
  observedGeneration: Schema.optional(Schema.Number),
  latestReadyRevisionName: Schema.optional(Schema.String),
}).annotate({ identifier: "ConfigurationStatus" });

export interface RevisionSpec {
  /** ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container instance of the Revision. If not specified or 0, defaults to 80 when requested CPU >= 1 and defaults to 1 when requested CPU < 1. */
  containerConcurrency?: number;
  /** Not supported by Cloud Run. */
  enableServiceLinks?: boolean;
  /** Not supported by Cloud Run. */
  imagePullSecrets?: ReadonlyArray<LocalObjectReference>;
  /** Optional. TimeoutSeconds holds the max duration the instance is allowed for responding to a request. Cloud Run: defaults to 300 seconds (5 minutes). Maximum allowed value is 3600 seconds (1 hour). */
  timeoutSeconds?: number;
  /** Optional. Runtime. Leave unset for default. */
  runtimeClassName?: string;
  /** Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account. */
  serviceAccountName?: string;
  volumes?: ReadonlyArray<Volume>;
  /** Optional. The Node Selector configuration. Map of selector key to a value which matches a node. */
  nodeSelector?: Record<string, string>;
  /** Required. Containers holds the list which define the units of execution for this Revision. */
  containers?: ReadonlyArray<Container>;
}

export const RevisionSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  containerConcurrency: Schema.optional(Schema.Number),
  enableServiceLinks: Schema.optional(Schema.Boolean),
  imagePullSecrets: Schema.optional(Schema.Array(LocalObjectReference)),
  timeoutSeconds: Schema.optional(Schema.Number),
  runtimeClassName: Schema.optional(Schema.String),
  serviceAccountName: Schema.optional(Schema.String),
  volumes: Schema.optional(Schema.Array(Volume)),
  nodeSelector: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  containers: Schema.optional(Schema.Array(Container)),
}).annotate({ identifier: "RevisionSpec" });

export interface RevisionTemplate {
  /** Optional metadata for this Revision, including labels and annotations. Name will be generated by the Configuration. The following annotation keys set properties of the created revision: * `autoscaling.knative.dev/minScale` sets the minimum number of instances. * `autoscaling.knative.dev/maxScale` sets the maximum number of instances. * `run.googleapis.com/cloudsql-instances` sets Cloud SQL connections. Multiple values should be comma separated. * `run.googleapis.com/health-check-disabled`: if true, deploy-time startup probes will not run for this revision. * `run.googleapis.com/vpc-access-connector` sets a Serverless VPC Access connector. * `run.googleapis.com/vpc-access-egress` sets VPC egress. Supported values are `all-traffic`, `all` (deprecated), and `private-ranges-only`. `all-traffic` and `all` provide the same functionality. `all` is deprecated but will continue to be supported. Prefer `all-traffic`. */
  metadata?: ObjectMeta;
  /** RevisionSpec holds the desired state of the Revision (from the client). */
  spec?: RevisionSpec;
}

export const RevisionTemplate = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.optional(ObjectMeta),
  spec: Schema.optional(RevisionSpec),
}).annotate({ identifier: "RevisionTemplate" });

export interface ConfigurationSpec {
  /** Template holds the latest specification for the Revision to be stamped out. */
  template?: RevisionTemplate;
}

export const ConfigurationSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  template: Schema.optional(RevisionTemplate),
}).annotate({ identifier: "ConfigurationSpec" });

export interface Configuration {
  /** Status communicates the observed state of the Configuration (from the controller). */
  status?: ConfigurationStatus;
  /** The API version for this call such as "serving.knative.dev/v1". */
  apiVersion?: string;
  /** Spec holds the desired state of the Configuration (from the client). */
  spec?: ConfigurationSpec;
  /** The kind of resource, in this case always "Configuration". */
  kind?: string;
  /** Metadata associated with this Configuration, including name, namespace, labels, and annotations. */
  metadata?: ObjectMeta;
}

export const Configuration = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(ConfigurationStatus),
  apiVersion: Schema.optional(Schema.String),
  spec: Schema.optional(ConfigurationSpec),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ObjectMeta),
}).annotate({ identifier: "Configuration" });

export interface ListConfigurationsResponse {
  /** The kind of this resource, in this case "ConfigurationList". */
  kind?: string;
  /** Metadata associated with this Configuration list. */
  metadata?: ListMeta;
  /** List of Configurations. */
  items?: ReadonlyArray<Configuration>;
  /** The API version for this call such as "serving.knative.dev/v1". */
  apiVersion?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(ListMeta),
    items: Schema.optional(Schema.Array(Configuration)),
    apiVersion: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListConfigurationsResponse" });

export interface ResourceRecord {
  /** Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1). */
  rrdata?: string;
  /** Resource record type. Example: `AAAA`. */
  type?: "RECORD_TYPE_UNSPECIFIED" | "A" | "AAAA" | "CNAME" | (string & {});
  /** Relative name of the object affected by this record. Only applicable for `CNAME` records. Example: 'www'. */
  name?: string;
}

export const ResourceRecord = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rrdata: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "ResourceRecord" });

export interface DomainMappingStatus {
  /** ObservedGeneration is the 'Generation' of the DomainMapping that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False. */
  observedGeneration?: number;
  /** Optional. Not supported by Cloud Run. */
  url?: string;
  /** Array of observed DomainMappingConditions, indicating the current state of the DomainMapping. */
  conditions?: ReadonlyArray<GoogleCloudRunV1Condition>;
  /** The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping. */
  resourceRecords?: ReadonlyArray<ResourceRecord>;
  /** The name of the route that the mapping currently points to. */
  mappedRouteName?: string;
}

export const DomainMappingStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  observedGeneration: Schema.optional(Schema.Number),
  url: Schema.optional(Schema.String),
  conditions: Schema.optional(Schema.Array(GoogleCloudRunV1Condition)),
  resourceRecords: Schema.optional(Schema.Array(ResourceRecord)),
  mappedRouteName: Schema.optional(Schema.String),
}).annotate({ identifier: "DomainMappingStatus" });

export interface Expr {
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
}

export const Expr = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  expression: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
}).annotate({ identifier: "Expr" });

export interface Binding {
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
}

export const Binding = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  members: Schema.optional(Schema.Array(Schema.String)),
  condition: Schema.optional(Expr),
  role: Schema.optional(Schema.String),
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

export const AuditLogConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  logType: Schema.optional(Schema.String),
  exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "AuditLogConfig" });

export interface AuditConfig {
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
}

export const AuditConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
  service: Schema.optional(Schema.String),
}).annotate({ identifier: "AuditConfig" });

export interface Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
}

export const Policy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  version: Schema.optional(Schema.Number),
  etag: Schema.optional(Schema.String),
  bindings: Schema.optional(Schema.Array(Binding)),
  auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
}).annotate({ identifier: "Policy" });

export interface RevisionStatus {
  /** Optional. Specifies the generated logging url for this particular revision based on the revision url template specified in the controller's config. */
  logUrl?: string;
  /** ImageDigest holds the resolved digest for the image specified within .Spec.Container.Image. The digest is resolved during the creation of Revision. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object. */
  imageDigest?: string;
  /** Not currently used by Cloud Run. */
  serviceName?: string;
  /** Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. As a Revision is being prepared, it will incrementally update conditions. Revision-specific conditions include: * `ResourcesAvailable`: `True` when underlying resources have been provisioned. * `ContainerHealthy`: `True` when the Revision readiness check completes. * `Active`: `True` when the Revision may receive traffic. */
  conditions?: ReadonlyArray<GoogleCloudRunV1Condition>;
  /** ObservedGeneration is the 'Generation' of the Revision that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False. */
  observedGeneration?: number;
  /** Output only. The configured number of instances running this revision. For Cloud Run, this only includes instances provisioned using the minScale annotation. It does not include instances created by autoscaling. */
  desiredReplicas?: number;
}

export const RevisionStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  logUrl: Schema.optional(Schema.String),
  imageDigest: Schema.optional(Schema.String),
  serviceName: Schema.optional(Schema.String),
  conditions: Schema.optional(Schema.Array(GoogleCloudRunV1Condition)),
  observedGeneration: Schema.optional(Schema.Number),
  desiredReplicas: Schema.optional(Schema.Number),
}).annotate({ identifier: "RevisionStatus" });

export interface InstanceSplit {
  /** Uses the "status.latestReadyRevisionName" to determine the instance split target. When it changes, workloads will automatically migrate from the prior "latest ready" revision to the new one. */
  latestRevision?: boolean;
  /** Optional. Specifies percent of the instance split to this Revision. This defaults to zero if unspecified. */
  percent?: number;
  /** Revision to which to assign this portion of instances. */
  revisionName?: string;
}

export const InstanceSplit = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  latestRevision: Schema.optional(Schema.Boolean),
  percent: Schema.optional(Schema.Number),
  revisionName: Schema.optional(Schema.String),
}).annotate({ identifier: "InstanceSplit" });

export interface GoogleDevtoolsCloudbuildV1ApprovalConfig {
  /** Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start. */
  approvalRequired?: boolean;
}

export const GoogleDevtoolsCloudbuildV1ApprovalConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approvalRequired: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1ApprovalConfig" });

export interface GoogleDevtoolsCloudbuildV1MavenArtifact {
  /** Maven `artifactId` value used when uploading the artifact to Artifact Registry. */
  artifactId?: string;
  /** Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix. */
  repository?: string;
  /** Optional. Path to a folder containing the files to upload to Artifact Registry. This can be either an absolute path, e.g. `/workspace/my-app/target/`, or a relative path from /workspace, e.g. `my-app/target/`. This field is mutually exclusive with the `path` field. */
  deployFolder?: string;
  /** Maven `version` value used when uploading the artifact to Artifact Registry. */
  version?: string;
  /** Optional. Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar. */
  path?: string;
  /** Maven `groupId` value used when uploading the artifact to Artifact Registry. */
  groupId?: string;
}

export const GoogleDevtoolsCloudbuildV1MavenArtifact =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactId: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.String),
    deployFolder: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    groupId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1MavenArtifact" });

export interface GoogleRpcStatus {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const GoogleRpcStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
  code: Schema.optional(Schema.Number),
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
}).annotate({ identifier: "GoogleRpcStatus" });

export interface TaskAttemptResult {
  /** Optional. Termination signal of the container. This is set to non-zero if the container is terminated by the system. At most one of exit_code or term_signal will be set. */
  termSignal?: number;
  /** Optional. The status of this attempt. If the status code is OK, then the attempt succeeded. */
  status?: GoogleRpcStatus;
  /** Optional. The exit code of this attempt. This may be unset if the container was unable to exit cleanly with a code due to some other failure. See status field for possible failure details. At most one of exit_code or term_signal will be set. */
  exitCode?: number;
}

export const TaskAttemptResult = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  termSignal: Schema.optional(Schema.Number),
  status: Schema.optional(GoogleRpcStatus),
  exitCode: Schema.optional(Schema.Number),
}).annotate({ identifier: "TaskAttemptResult" });

export interface WorkerPoolSpec {
  /** Specifies how to distribute instances over a collection of Revisions. */
  instanceSplits?: ReadonlyArray<InstanceSplit>;
  /** Holds the latest specification for the Revision to be stamped out. */
  template?: RevisionTemplate;
}

export const WorkerPoolSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceSplits: Schema.optional(Schema.Array(InstanceSplit)),
  template: Schema.optional(RevisionTemplate),
}).annotate({ identifier: "WorkerPoolSpec" });

export interface WorkerPoolStatus {
  /** Holds the configured workload distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that we last observed. */
  instanceSplits?: ReadonlyArray<InstanceSplit>;
  /** Conditions communicate information about ongoing/complete reconciliation processes that bring the `spec` inline with the observed state of the world. * `Ready`: `True` when all underlying resources are ready. */
  conditions?: ReadonlyArray<GoogleCloudRunV1Condition>;
  /** Name of the last revision that was created from this WorkerPool's template. It might not be ready yet, for that use LatestReadyRevisionName. */
  latestCreatedRevisionName?: string;
  /** Returns the generation last seen by the system. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False. */
  observedGeneration?: number;
  /** Name of the latest Revision from this WorkerPool's template that has had its `Ready` condition become `True`. */
  latestReadyRevisionName?: string;
}

export const WorkerPoolStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceSplits: Schema.optional(Schema.Array(InstanceSplit)),
  conditions: Schema.optional(Schema.Array(GoogleCloudRunV1Condition)),
  latestCreatedRevisionName: Schema.optional(Schema.String),
  observedGeneration: Schema.optional(Schema.Number),
  latestReadyRevisionName: Schema.optional(Schema.String),
}).annotate({ identifier: "WorkerPoolStatus" });

export interface WorkerPool {
  /** The kind of resource. It must be "WorkerPool". */
  kind?: string;
  /** Metadata associated with this WorkerPool, including name, namespace, labels, and annotations. In Cloud Run, annotations with 'run.googleapis.com/' and 'autoscaling.knative.dev' are restricted, and the accepted annotations will be different depending on the resource type. The following Cloud Run-specific annotations are accepted in WorkerPool.metadata.annotations. * `run.googleapis.com/binary-authorization-breakglass` * `run.googleapis.com/binary-authorization` * `run.googleapis.com/client-name` * `run.googleapis.com/description` */
  metadata?: ObjectMeta;
  /** Holds the desired state of the WorkerPool (from the client). */
  spec?: WorkerPoolSpec;
  /** The API version for this call. It must be "run.googleapis.com/v1". */
  apiVersion?: string;
  /** Communicates the system-controlled state of the WorkerPool. */
  status?: WorkerPoolStatus;
}

export const WorkerPool = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ObjectMeta),
  spec: Schema.optional(WorkerPoolSpec),
  apiVersion: Schema.optional(Schema.String),
  status: Schema.optional(WorkerPoolStatus),
}).annotate({ identifier: "WorkerPool" });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  locationId: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "Location" });

export interface ServiceSpec {
  /** Holds the latest specification for the Revision to be stamped out. */
  template?: RevisionTemplate;
  /** Specifies how to distribute traffic over a collection of Knative Revisions and Configurations to the Service's main URL. */
  traffic?: ReadonlyArray<TrafficTarget>;
}

export const ServiceSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  template: Schema.optional(RevisionTemplate),
  traffic: Schema.optional(Schema.Array(TrafficTarget)),
}).annotate({ identifier: "ServiceSpec" });

export interface ServiceStatus {
  /** Returns the generation last seen by the system. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False. */
  observedGeneration?: number;
  /** Name of the latest Revision from this Service's Configuration that has had its `Ready` condition become `True`. */
  latestReadyRevisionName?: string;
  /** Similar to url, information on where the service is available on HTTP. */
  address?: Addressable;
  /** URL that will distribute traffic over the provided traffic targets. It generally has the form `https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app` */
  url?: string;
  /** Conditions communicate information about ongoing/complete reconciliation processes that bring the `spec` inline with the observed state of the world. Service-specific conditions include: * `ConfigurationsReady`: `True` when the underlying Configuration is ready. * `RoutesReady`: `True` when the underlying Route is ready. * `Ready`: `True` when all underlying resources are ready. */
  conditions?: ReadonlyArray<GoogleCloudRunV1Condition>;
  /** Name of the last revision that was created from this Service's Configuration. It might not be ready yet, for that use LatestReadyRevisionName. */
  latestCreatedRevisionName?: string;
  /** Holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that we last observed. */
  traffic?: ReadonlyArray<TrafficTarget>;
}

export const ServiceStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  observedGeneration: Schema.optional(Schema.Number),
  latestReadyRevisionName: Schema.optional(Schema.String),
  address: Schema.optional(Addressable),
  url: Schema.optional(Schema.String),
  conditions: Schema.optional(Schema.Array(GoogleCloudRunV1Condition)),
  latestCreatedRevisionName: Schema.optional(Schema.String),
  traffic: Schema.optional(Schema.Array(TrafficTarget)),
}).annotate({ identifier: "ServiceStatus" });

export interface Service {
  /** The kind of resource. It must be "Service". */
  kind?: string;
  /** Metadata associated with this Service, including name, namespace, labels, and annotations. In Cloud Run, annotations with 'run.googleapis.com/' and 'autoscaling.knative.dev' are restricted, and the accepted annotations will be different depending on the resource type. The following Cloud Run-specific annotations are accepted in Service.metadata.annotations. * `run.googleapis.com/base-images` * `run.googleapis.com/binary-authorization-breakglass` * `run.googleapis.com/binary-authorization` * `run.googleapis.com/client-name` * `run.googleapis.com/custom-audiences` * `run.googleapis.com/default-url-disabled` * `run.googleapis.com/description` * `run.googleapis.com/gc-traffic-tags` * `run.googleapis.com/ingress` * `run.googleapis.com/ingress` sets the ingress settings for the Service. See [the ingress settings documentation](/run/docs/securing/ingress) for details on configuring ingress settings. * `run.googleapis.com/ingress-status` is output-only and contains the currently active ingress settings for the Service. `run.googleapis.com/ingress-status` may differ from `run.googleapis.com/ingress` while the system is processing a change to `run.googleapis.com/ingress` or if the system failed to process a change to `run.googleapis.com/ingress`. When the system has processed all changes successfully `run.googleapis.com/ingress-status` and `run.googleapis.com/ingress` are equal. */
  metadata?: ObjectMeta;
  /** Holds the desired state of the Service (from the client). */
  spec?: ServiceSpec;
  /** The API version for this call. It must be "serving.knative.dev/v1". */
  apiVersion?: string;
  /** Communicates the system-controlled state of the Service. */
  status?: ServiceStatus;
}

export const Service = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ObjectMeta),
  spec: Schema.optional(ServiceSpec),
  apiVersion: Schema.optional(Schema.String),
  status: Schema.optional(ServiceStatus),
}).annotate({ identifier: "Service" });

export interface ListServicesResponse {
  /** List of Services. */
  items?: ReadonlyArray<Service>;
  /** The kind of this resource; returns "ServiceList". */
  kind?: string;
  /** Metadata associated with this Service list. */
  metadata?: ListMeta;
  /** For calls against the global endpoint, returns the list of Cloud locations that could not be reached. For regional calls, this field is not used. */
  unreachable?: ReadonlyArray<string>;
  /** The API version for this call; returns "serving.knative.dev/v1". */
  apiVersion?: string;
}

export const ListServicesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.optional(Schema.Array(Service)),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ListMeta),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  apiVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "ListServicesResponse" });

export interface GoogleDevtoolsCloudbuildV1Oci {
  /** Optional. Tags to apply to the uploaded image. e.g. latest, 1.0.0 */
  tags?: ReadonlyArray<string>;
  /** Required. Path on the local file system where to find the container to upload. e.g. /workspace/my-image.tar */
  file?: string;
  /** Required. Registry path to upload the container to. e.g. us-east1-docker.pkg.dev/my-project/my-repo/my-image */
  registryPath?: string;
}

export const GoogleDevtoolsCloudbuildV1Oci =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Schema.String)),
    file: Schema.optional(Schema.String),
    registryPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Oci" });

export interface DomainMapping {
  /** The spec for this DomainMapping. */
  spec?: DomainMappingSpec;
  /** The kind of resource, in this case "DomainMapping". */
  kind?: string;
  /** Metadata associated with this BuildTemplate. */
  metadata?: ObjectMeta;
  /** The current status of the DomainMapping. */
  status?: DomainMappingStatus;
  /** The API version for this call such as "domains.cloudrun.com/v1". */
  apiVersion?: string;
}

export const DomainMapping = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  spec: Schema.optional(DomainMappingSpec),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ObjectMeta),
  status: Schema.optional(DomainMappingStatus),
  apiVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "DomainMapping" });

export interface ListDomainMappingsResponse {
  /** The API version for this call such as "domains.cloudrun.com/v1". */
  apiVersion?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The kind of this resource, in this case "DomainMappingList". */
  kind?: string;
  /** Metadata associated with this DomainMapping list. */
  metadata?: ListMeta;
  /** List of DomainMappings. */
  items?: ReadonlyArray<DomainMapping>;
}

export const ListDomainMappingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(ListMeta),
    items: Schema.optional(Schema.Array(DomainMapping)),
  }).annotate({ identifier: "ListDomainMappingsResponse" });

export interface InstanceStatus {
  /** Output only. The 'generation' of the Instance that was last processed by the controller. */
  observedGeneration?: number;
  /** Optional. URI where logs for this execution can be found in Cloud Console. */
  logUri?: string;
  /** Output only. Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. Instance-specific conditions include: * `Ready`: `True` when the Instance is ready to be executed. */
  conditions?: ReadonlyArray<GoogleCloudRunV1Condition>;
  /** Output only. All URLs serving traffic for this Instance. */
  urls?: ReadonlyArray<string>;
}

export const InstanceStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  observedGeneration: Schema.optional(Schema.Number),
  logUri: Schema.optional(Schema.String),
  conditions: Schema.optional(Schema.Array(GoogleCloudRunV1Condition)),
  urls: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "InstanceStatus" });

export interface Instance {
  /** Optional. Specification of the desired behavior of a Instance. */
  spec?: InstanceSpec;
  /** Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. */
  kind?: string;
  /** Optional. Standard object's metadata. */
  metadata?: ObjectMeta;
  /** Output only. Current status of a Instance. */
  status?: InstanceStatus;
  /** Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. */
  apiVersion?: string;
}

export const Instance = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  spec: Schema.optional(InstanceSpec),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ObjectMeta),
  status: Schema.optional(InstanceStatus),
  apiVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "Instance" });

export interface ListInstancesResponse {
  /** The kind of this resource, in this case "InstancesList". */
  kind?: string;
  /** Metadata associated with this Instances list. */
  metadata?: ListMeta;
  /** List of Instances. */
  items?: ReadonlyArray<Instance>;
  /** The API version for this call such as "run.googleapis.com/v1". */
  apiVersion?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ListMeta),
  items: Schema.optional(Schema.Array(Instance)),
  apiVersion: Schema.optional(Schema.String),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ListInstancesResponse" });

export interface GoogleDevtoolsCloudbuildV1HttpConfig {
  /** SecretVersion resource of the HTTP proxy URL. The Service Account used in the build (either the default Service Account or user-specified Service Account) should have `secretmanager.versions.access` permissions on this secret. The proxy URL should be in format `protocol://@]proxyhost[:port]`. */
  proxySecretVersionName?: string;
}

export const GoogleDevtoolsCloudbuildV1HttpConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    proxySecretVersionName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1HttpConfig" });

export interface GoogleDevtoolsCloudbuildV1StorageSource {
  /** Optional. Option to specify the tool to fetch the source file for the build. */
  sourceFetcher?:
    | "SOURCE_FETCHER_UNSPECIFIED"
    | "GSUTIL"
    | "GCS_FETCHER"
    | (string & {});
  /** Optional. Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
  generation?: string;
  /** Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
  bucket?: string;
  /** Required. Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build. */
  object?: string;
}

export const GoogleDevtoolsCloudbuildV1StorageSource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceFetcher: Schema.optional(Schema.String),
    generation: Schema.optional(Schema.String),
    bucket: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1StorageSource" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  locations: Schema.optional(Schema.Array(Location)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListLocationsResponse" });

export interface GoogleDevtoolsCloudbuildV1UploadedGoModule {
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** URI of the uploaded artifact. */
  uri?: string;
  /** Hash types and values of the Go Module Artifact. */
  fileHashes?: GoogleDevtoolsCloudbuildV1FileHashes;
}

export const GoogleDevtoolsCloudbuildV1UploadedGoModule =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pushTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    artifactRegistryPackage: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    fileHashes: Schema.optional(GoogleDevtoolsCloudbuildV1FileHashes),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1UploadedGoModule" });

export interface GoogleDevtoolsCloudbuildV1UploadedNpmPackage {
  /** URI of the uploaded npm package. */
  uri?: string;
  /** Hash types and values of the npm package. */
  fileHashes?: GoogleDevtoolsCloudbuildV1FileHashes;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
}

export const GoogleDevtoolsCloudbuildV1UploadedNpmPackage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    fileHashes: Schema.optional(GoogleDevtoolsCloudbuildV1FileHashes),
    pushTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    artifactRegistryPackage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1UploadedNpmPackage" });

export interface GoogleDevtoolsCloudbuildV1UploadedPythonPackage {
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** URI of the uploaded artifact. */
  uri?: string;
  /** Hash types and values of the Python Artifact. */
  fileHashes?: GoogleDevtoolsCloudbuildV1FileHashes;
}

export const GoogleDevtoolsCloudbuildV1UploadedPythonPackage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pushTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    artifactRegistryPackage: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    fileHashes: Schema.optional(GoogleDevtoolsCloudbuildV1FileHashes),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV1UploadedPythonPackage",
  });

export interface GoogleDevtoolsCloudbuildV1Results {
  /** Output only. Generic artifacts uploaded to Artifact Registry at the end of the build. */
  genericArtifacts?: ReadonlyArray<GoogleDevtoolsCloudbuildV1UploadedGenericArtifact>;
  /** Optional. Go module artifacts uploaded to Artifact Registry at the end of the build. */
  goModules?: ReadonlyArray<GoogleDevtoolsCloudbuildV1UploadedGoModule>;
  /** Container images that were built as a part of the build. */
  images?: ReadonlyArray<GoogleDevtoolsCloudbuildV1BuiltImage>;
  /** List of build step digests, in the order corresponding to build step indices. */
  buildStepImages?: ReadonlyArray<string>;
  /** Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
  artifactManifest?: string;
  /** Maven artifacts uploaded to Artifact Registry at the end of the build. */
  mavenArtifacts?: ReadonlyArray<GoogleDevtoolsCloudbuildV1UploadedMavenArtifact>;
  /** Npm packages uploaded to Artifact Registry at the end of the build. */
  npmPackages?: ReadonlyArray<GoogleDevtoolsCloudbuildV1UploadedNpmPackage>;
  /** List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 50KB of data is stored. Note that the `$BUILDER_OUTPUT` variable is read-only and can't be substituted. */
  buildStepOutputs?: ReadonlyArray<string>;
  /** Time to push all non-container artifacts to Cloud Storage. */
  artifactTiming?: GoogleDevtoolsCloudbuildV1TimeSpan;
  /** Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
  numArtifacts?: string;
  /** Python artifacts uploaded to Artifact Registry at the end of the build. */
  pythonPackages?: ReadonlyArray<GoogleDevtoolsCloudbuildV1UploadedPythonPackage>;
}

export const GoogleDevtoolsCloudbuildV1Results =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    genericArtifacts: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1UploadedGenericArtifact),
    ),
    goModules: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1UploadedGoModule),
    ),
    images: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1BuiltImage)),
    buildStepImages: Schema.optional(Schema.Array(Schema.String)),
    artifactManifest: Schema.optional(Schema.String),
    mavenArtifacts: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1UploadedMavenArtifact),
    ),
    npmPackages: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1UploadedNpmPackage),
    ),
    buildStepOutputs: Schema.optional(Schema.Array(Schema.String)),
    artifactTiming: Schema.optional(GoogleDevtoolsCloudbuildV1TimeSpan),
    numArtifacts: Schema.optional(Schema.String),
    pythonPackages: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1UploadedPythonPackage),
    ),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Results" });

export interface GoogleDevtoolsCloudbuildV1Secret {
  /** Cloud KMS key name to use to decrypt these envs. */
  kmsKeyName?: string;
  /** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
  secretEnv?: Record<string, string>;
}

export const GoogleDevtoolsCloudbuildV1Secret =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
    secretEnv: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Secret" });

export interface GoogleDevtoolsCloudbuildV1ApprovalResult {
  /** Optional. An optional comment for this manual approval result. */
  comment?: string;
  /** Output only. The time when the approval decision was made. */
  approvalTime?: string;
  /** Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build. */
  url?: string;
  /** Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called. */
  approverAccount?: string;
  /** Required. The decision of this manual approval. */
  decision?: "DECISION_UNSPECIFIED" | "APPROVED" | "REJECTED" | (string & {});
}

export const GoogleDevtoolsCloudbuildV1ApprovalResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    comment: Schema.optional(Schema.String),
    approvalTime: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    approverAccount: Schema.optional(Schema.String),
    decision: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1ApprovalResult" });

export interface GoogleDevtoolsCloudbuildV1BuildApproval {
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
  /** Output only. Configuration for manual approval of this build. */
  config?: GoogleDevtoolsCloudbuildV1ApprovalConfig;
}

export const GoogleDevtoolsCloudbuildV1BuildApproval =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    result: Schema.optional(GoogleDevtoolsCloudbuildV1ApprovalResult),
    config: Schema.optional(GoogleDevtoolsCloudbuildV1ApprovalConfig),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1BuildApproval" });

export interface GoogleDevtoolsCloudbuildV1PoolOption {
  /** The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project}/locations/{location}/workerPools/{workerPoolId} */
  name?: string;
}

export const GoogleDevtoolsCloudbuildV1PoolOption =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1PoolOption" });

export interface GoogleDevtoolsCloudbuildV1NpmPackage {
  /** Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY" Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix. */
  repository?: string;
  /** Optional. Path to the package.json. e.g. workspace/path/to/package Only one of `archive` or `package_path` can be specified. */
  packagePath?: string;
}

export const GoogleDevtoolsCloudbuildV1NpmPackage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.optional(Schema.String),
    packagePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1NpmPackage" });

export interface ListWorkerPoolsResponse {
  /** For calls against the global endpoint, returns the list of Cloud locations that could not be reached. For regional calls, this field is not used. */
  unreachable?: ReadonlyArray<string>;
  /** The API version for this call; returns "run.googleapis.com/v1". */
  apiVersion?: string;
  /** List of WorkerPools. */
  items?: ReadonlyArray<WorkerPool>;
  /** The kind of this resource; returns "WorkerPoolList". */
  kind?: string;
  /** Metadata associated with this WorkerPool list. */
  metadata?: ListMeta;
}

export const ListWorkerPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    apiVersion: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(WorkerPool)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(ListMeta),
  }).annotate({ identifier: "ListWorkerPoolsResponse" });

export interface GoogleDevtoolsCloudbuildV1ConnectedRepository {
  /** Required. Name of the Google Cloud Build repository, formatted as `projects/* /locations/* /connections/* /repositories/*`. */
  repository?: string;
  /** Optional. Directory, relative to the source root, in which to run the build. */
  dir?: string;
  /** Required. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. */
  revision?: string;
}

export const GoogleDevtoolsCloudbuildV1ConnectedRepository =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1ConnectedRepository" });

export interface GoogleDevtoolsCloudbuildV1GitSource {
  /** Optional. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. Cloud Build uses `git fetch` to fetch the revision from the Git repository; therefore make sure that the string you provide for `revision` is parsable by the command. For information on string values accepted by `git fetch`, see https://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on `git fetch`, see https://git-scm.com/docs/git-fetch. */
  revision?: string;
  /** Optional. Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
  dir?: string;
  /** Required. Location of the Git repo to build. This will be used as a `git remote`, see https://git-scm.com/docs/git-remote. */
  url?: string;
}

export const GoogleDevtoolsCloudbuildV1GitSource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revision: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1GitSource" });

export interface GoogleDevtoolsCloudbuildV1Source {
  /** If provided, get the source from this location in Cloud Storage. */
  storageSource?: GoogleDevtoolsCloudbuildV1StorageSource;
  /** If provided, get the source from this Developer Connect config. */
  developerConnectConfig?: GoogleDevtoolsCloudbuildV1DeveloperConnectConfig;
  /** Optional. If provided, get the source from this 2nd-gen Google Cloud Build repository resource. */
  connectedRepository?: GoogleDevtoolsCloudbuildV1ConnectedRepository;
  /** If provided, get the source from this location in a Cloud Source Repository. */
  repoSource?: GoogleDevtoolsCloudbuildV1RepoSource;
  /** If provided, get the source from this Git repository. */
  gitSource?: GoogleDevtoolsCloudbuildV1GitSource;
  /** If provided, get the source from this manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
  storageSourceManifest?: GoogleDevtoolsCloudbuildV1StorageSourceManifest;
}

export const GoogleDevtoolsCloudbuildV1Source =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageSource: Schema.optional(GoogleDevtoolsCloudbuildV1StorageSource),
    developerConnectConfig: Schema.optional(
      GoogleDevtoolsCloudbuildV1DeveloperConnectConfig,
    ),
    connectedRepository: Schema.optional(
      GoogleDevtoolsCloudbuildV1ConnectedRepository,
    ),
    repoSource: Schema.optional(GoogleDevtoolsCloudbuildV1RepoSource),
    gitSource: Schema.optional(GoogleDevtoolsCloudbuildV1GitSource),
    storageSourceManifest: Schema.optional(
      GoogleDevtoolsCloudbuildV1StorageSourceManifest,
    ),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Source" });

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

export const GoogleDevtoolsCloudbuildV1Warning =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Warning" });

export interface GoogleDevtoolsCloudbuildV1Secrets {
  /** Secrets in Secret Manager and associated secret environment variable. */
  secretManager?: ReadonlyArray<GoogleDevtoolsCloudbuildV1SecretManagerSecret>;
  /** Secrets encrypted with KMS key and the associated secret environment variable. */
  inline?: ReadonlyArray<GoogleDevtoolsCloudbuildV1InlineSecret>;
}

export const GoogleDevtoolsCloudbuildV1Secrets =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretManager: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1SecretManagerSecret),
    ),
    inline: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1InlineSecret),
    ),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Secrets" });

export interface GoogleDevtoolsCloudbuildV1BuildOptions {
  /** A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
  env?: ReadonlyArray<string>;
  /** Optional. Option to specify whether structured logging is enabled. If true, JSON-formatted logs are parsed as structured logs. */
  enableStructuredLogging?: boolean;
  /** Optional. Option to specify how default logs buckets are setup. */
  defaultLogsBucketBehavior?:
    | "DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED"
    | "REGIONAL_USER_OWNED_BUCKET"
    | "LEGACY_BUCKET"
    | (string & {});
  /** Optional. Option to specify the Pub/Sub topic to receive build status updates. */
  pubsubTopic?: string;
  /** Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file. */
  dynamicSubstitutions?: boolean;
  /** Option to include built-in and custom substitutions as env variables for all build steps. */
  automapSubstitutions?: boolean;
  /** A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build. */
  secretEnv?: ReadonlyArray<string>;
  /** Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file. */
  substitutionOption?: "MUST_MATCH" | "ALLOW_LOOSE" | (string & {});
  /** Compute Engine machine type on which to run the build. */
  machineType?:
    | "UNSPECIFIED"
    | "N1_HIGHCPU_8"
    | "N1_HIGHCPU_32"
    | "E2_HIGHCPU_8"
    | "E2_HIGHCPU_32"
    | "E2_MEDIUM"
    | (string & {});
  /** Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 4000GB; builds that request more than the maximum are rejected with an error. */
  diskSizeGb?: string;
  /** This field deprecated; please use `pool.name` instead. */
  workerPool?: string;
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
  /** Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration. */
  volumes?: ReadonlyArray<GoogleDevtoolsCloudbuildV1Volume>;
  /** Option to specify the logging mode, which determines if and where build logs are stored. */
  logging?:
    | "LOGGING_UNSPECIFIED"
    | "LEGACY"
    | "GCS_ONLY"
    | "STACKDRIVER_ONLY"
    | "CLOUD_LOGGING_ONLY"
    | "NONE"
    | (string & {});
  /** Requested verifiability options. */
  requestedVerifyOption?: "NOT_VERIFIED" | "VERIFIED" | (string & {});
  /** Optional. Specification for execution on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information. */
  pool?: GoogleDevtoolsCloudbuildV1PoolOption;
  /** Option to define build log streaming behavior to Cloud Storage. */
  logStreamingOption?:
    | "STREAM_DEFAULT"
    | "STREAM_ON"
    | "STREAM_OFF"
    | (string & {});
}

export const GoogleDevtoolsCloudbuildV1BuildOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    env: Schema.optional(Schema.Array(Schema.String)),
    enableStructuredLogging: Schema.optional(Schema.Boolean),
    defaultLogsBucketBehavior: Schema.optional(Schema.String),
    pubsubTopic: Schema.optional(Schema.String),
    dynamicSubstitutions: Schema.optional(Schema.Boolean),
    automapSubstitutions: Schema.optional(Schema.Boolean),
    secretEnv: Schema.optional(Schema.Array(Schema.String)),
    substitutionOption: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    diskSizeGb: Schema.optional(Schema.String),
    workerPool: Schema.optional(Schema.String),
    sourceProvenanceHash: Schema.optional(Schema.Array(Schema.String)),
    volumes: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1Volume)),
    logging: Schema.optional(Schema.String),
    requestedVerifyOption: Schema.optional(Schema.String),
    pool: Schema.optional(GoogleDevtoolsCloudbuildV1PoolOption),
    logStreamingOption: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1BuildOptions" });

export interface GoogleDevtoolsCloudbuildV1FailureInfo {
  /** Explains the failure issue in more detail using hard-coded text. */
  detail?: string;
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
}

export const GoogleDevtoolsCloudbuildV1FailureInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detail: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1FailureInfo" });

export interface GoogleDevtoolsCloudbuildV1GitConfig {
  /** Configuration for HTTP related git operations. */
  http?: GoogleDevtoolsCloudbuildV1HttpConfig;
}

export const GoogleDevtoolsCloudbuildV1GitConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    http: Schema.optional(GoogleDevtoolsCloudbuildV1HttpConfig),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1GitConfig" });

export interface GoogleDevtoolsCloudbuildV1PythonPackage {
  /** Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix. */
  repository?: string;
  /** Path globs used to match files in the build's workspace. For Python/ Twine, this is usually `dist/*`, and sometimes additionally an `.asc` file. */
  paths?: ReadonlyArray<string>;
}

export const GoogleDevtoolsCloudbuildV1PythonPackage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.optional(Schema.String),
    paths: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1PythonPackage" });

export interface GoogleDevtoolsCloudbuildV1GenericArtifact {
  /** Required. Registry path to upload the generic artifact to, in the form projects/$PROJECT/locations/$LOCATION/repositories/$REPO/packages/$PACKAGE/versions/$VERSION */
  registryPath?: string;
  /** Required. Path to the generic artifact in the build's workspace to be uploaded to Artifact Registry. */
  folder?: string;
}

export const GoogleDevtoolsCloudbuildV1GenericArtifact =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryPath: Schema.optional(Schema.String),
    folder: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1GenericArtifact" });

export interface GoogleDevtoolsCloudbuildV1Artifacts {
  /** A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps. Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account's credentials. The location and generation of the uploaded objects will be stored in the Build resource's results field. If any objects fail to be pushed, the build is marked FAILURE. */
  objects?: GoogleDevtoolsCloudbuildV1ArtifactObjects;
  /** Optional. A list of Go modules to be uploaded to Artifact Registry upon successful completion of all build steps. If any objects fail to be pushed, the build is marked FAILURE. */
  goModules?: ReadonlyArray<GoogleDevtoolsCloudbuildV1GoModule>;
  /** A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE. */
  pythonPackages?: ReadonlyArray<GoogleDevtoolsCloudbuildV1PythonPackage>;
  /** A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE. */
  images?: ReadonlyArray<string>;
  /** Optional. A list of generic artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. If any artifacts fail to be pushed, the build is marked FAILURE. */
  genericArtifacts?: ReadonlyArray<GoogleDevtoolsCloudbuildV1GenericArtifact>;
  /** A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE. */
  mavenArtifacts?: ReadonlyArray<GoogleDevtoolsCloudbuildV1MavenArtifact>;
  /** A list of npm packages to be uploaded to Artifact Registry upon successful completion of all build steps. Npm packages in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any packages fail to be pushed, the build is marked FAILURE. */
  npmPackages?: ReadonlyArray<GoogleDevtoolsCloudbuildV1NpmPackage>;
  /** Optional. A list of OCI images to be uploaded to Artifact Registry upon successful completion of all build steps. OCI images in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any images fail to be pushed, the build is marked FAILURE. */
  oci?: ReadonlyArray<GoogleDevtoolsCloudbuildV1Oci>;
}

export const GoogleDevtoolsCloudbuildV1Artifacts =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objects: Schema.optional(GoogleDevtoolsCloudbuildV1ArtifactObjects),
    goModules: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1GoModule),
    ),
    pythonPackages: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1PythonPackage),
    ),
    images: Schema.optional(Schema.Array(Schema.String)),
    genericArtifacts: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1GenericArtifact),
    ),
    mavenArtifacts: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1MavenArtifact),
    ),
    npmPackages: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1NpmPackage),
    ),
    oci: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1Oci)),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Artifacts" });

export interface GoogleDevtoolsCloudbuildV1SourceProvenance {
  /** A copy of the build's `source.storage_source`, if exists, with any generations resolved. */
  resolvedStorageSource?: GoogleDevtoolsCloudbuildV1StorageSource;
  /** Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file. */
  fileHashes?: Record<string, GoogleDevtoolsCloudbuildV1FileHashes>;
  /** A copy of the build's `source.repo_source`, if exists, with any revisions resolved. */
  resolvedRepoSource?: GoogleDevtoolsCloudbuildV1RepoSource;
  /** Output only. A copy of the build's `source.git_source`, if exists, with any revisions resolved. */
  resolvedGitSource?: GoogleDevtoolsCloudbuildV1GitSource;
  /** A copy of the build's `source.storage_source_manifest`, if exists, with any revisions resolved. This feature is in Preview. */
  resolvedStorageSourceManifest?: GoogleDevtoolsCloudbuildV1StorageSourceManifest;
  /** Output only. A copy of the build's `source.connected_repository`, if exists, with any revisions resolved. */
  resolvedConnectedRepository?: GoogleDevtoolsCloudbuildV1ConnectedRepository;
}

export const GoogleDevtoolsCloudbuildV1SourceProvenance =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resolvedStorageSource: Schema.optional(
      GoogleDevtoolsCloudbuildV1StorageSource,
    ),
    fileHashes: Schema.optional(
      Schema.Record(Schema.String, GoogleDevtoolsCloudbuildV1FileHashes),
    ),
    resolvedRepoSource: Schema.optional(GoogleDevtoolsCloudbuildV1RepoSource),
    resolvedGitSource: Schema.optional(GoogleDevtoolsCloudbuildV1GitSource),
    resolvedStorageSourceManifest: Schema.optional(
      GoogleDevtoolsCloudbuildV1StorageSourceManifest,
    ),
    resolvedConnectedRepository: Schema.optional(
      GoogleDevtoolsCloudbuildV1ConnectedRepository,
    ),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1SourceProvenance" });

export interface GoogleDevtoolsCloudbuildV1Build {
  /** Optional. The location of the source files to build. */
  source?: GoogleDevtoolsCloudbuildV1Source;
  /** Output only. Non-fatal problems encountered during the execution of the build. */
  warnings?: ReadonlyArray<GoogleDevtoolsCloudbuildV1Warning>;
  /** Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`. */
  logsBucket?: string;
  /** Output only. Unique identifier of the build. */
  id?: string;
  /** Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets */
  secrets?: ReadonlyArray<GoogleDevtoolsCloudbuildV1Secret>;
  /** Output only. The 'Build' name with format: `projects/{project}/locations/{location}/builds/{build}`, where {build} is a unique identifier generated by the service. */
  name?: string;
  /** Output only. Time at which the request to create the build was received. */
  createTime?: string;
  /** Secrets and secret environment variables. */
  availableSecrets?: GoogleDevtoolsCloudbuildV1Secrets;
  /** A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`. */
  images?: ReadonlyArray<string>;
  /** Output only. Describes this build's approval configuration, status, and result. */
  approval?: GoogleDevtoolsCloudbuildV1BuildApproval;
  /** Special options for this build. */
  options?: GoogleDevtoolsCloudbuildV1BuildOptions;
  /** Output only. Customer-readable message about the current status. */
  statusDetail?: string;
  /** IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. ACCOUNT can be email address or uniqueId of the service account. */
  serviceAccount?: string;
  /** Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included. */
  timing?: Record<string, GoogleDevtoolsCloudbuildV1TimeSpan>;
  /** Tags for annotation of a `Build`. These are not docker tags. */
  tags?: ReadonlyArray<string>;
  /** Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically. */
  buildTriggerId?: string;
  /** Output only. Time at which execution of the build was started. */
  startTime?: string;
  /** TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time. */
  queueTtl?: string;
  /** Optional. Dependencies that the Cloud Build worker will fetch before executing user steps. */
  dependencies?: ReadonlyArray<GoogleDevtoolsCloudbuildV1Dependency>;
  /** Output only. Contains information about the build when status=FAILURE. */
  failureInfo?: GoogleDevtoolsCloudbuildV1FailureInfo;
  /** Optional. Configuration for git operations. */
  gitConfig?: GoogleDevtoolsCloudbuildV1GitConfig;
  /** Output only. ID of the project. */
  projectId?: string;
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
  /** Artifacts produced by the build that should be uploaded upon successful completion of all build steps. */
  artifacts?: GoogleDevtoolsCloudbuildV1Artifacts;
  /** Output only. URL to logs for this build in Google Cloud Console. */
  logUrl?: string;
  /** Required. The operations to be performed on the workspace. */
  steps?: ReadonlyArray<GoogleDevtoolsCloudbuildV1BuildStep>;
  /** Output only. A permanent fixed identifier for source. */
  sourceProvenance?: GoogleDevtoolsCloudbuildV1SourceProvenance;
  /** Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution. */
  finishTime?: string;
  /** Substitutions data for `Build` resource. */
  substitutions?: Record<string, string>;
  /** Output only. Results of the build. */
  results?: GoogleDevtoolsCloudbuildV1Results;
  /** Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is 60 minutes. */
  timeout?: string;
}

export const GoogleDevtoolsCloudbuildV1Build =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(GoogleDevtoolsCloudbuildV1Source),
    warnings: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1Warning)),
    logsBucket: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    secrets: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1Secret)),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    availableSecrets: Schema.optional(GoogleDevtoolsCloudbuildV1Secrets),
    images: Schema.optional(Schema.Array(Schema.String)),
    approval: Schema.optional(GoogleDevtoolsCloudbuildV1BuildApproval),
    options: Schema.optional(GoogleDevtoolsCloudbuildV1BuildOptions),
    statusDetail: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    timing: Schema.optional(
      Schema.Record(Schema.String, GoogleDevtoolsCloudbuildV1TimeSpan),
    ),
    tags: Schema.optional(Schema.Array(Schema.String)),
    buildTriggerId: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    queueTtl: Schema.optional(Schema.String),
    dependencies: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV1Dependency),
    ),
    failureInfo: Schema.optional(GoogleDevtoolsCloudbuildV1FailureInfo),
    gitConfig: Schema.optional(GoogleDevtoolsCloudbuildV1GitConfig),
    projectId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    artifacts: Schema.optional(GoogleDevtoolsCloudbuildV1Artifacts),
    logUrl: Schema.optional(Schema.String),
    steps: Schema.optional(Schema.Array(GoogleDevtoolsCloudbuildV1BuildStep)),
    sourceProvenance: Schema.optional(
      GoogleDevtoolsCloudbuildV1SourceProvenance,
    ),
    finishTime: Schema.optional(Schema.String),
    substitutions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    results: Schema.optional(GoogleDevtoolsCloudbuildV1Results),
    timeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV1Build" });

export interface Revision {
  /** Status communicates the observed state of the Revision (from the controller). */
  status?: RevisionStatus;
  /** The API version for this call such as "serving.knative.dev/v1". */
  apiVersion?: string;
  /** Spec holds the desired state of the Revision (from the client). */
  spec?: RevisionSpec;
  /** The kind of this resource, in this case "Revision". */
  kind?: string;
  /** Metadata associated with this Revision, including name, namespace, labels, and annotations. */
  metadata?: ObjectMeta;
}

export const Revision = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(RevisionStatus),
  apiVersion: Schema.optional(Schema.String),
  spec: Schema.optional(RevisionSpec),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ObjectMeta),
}).annotate({ identifier: "Revision" });

export interface TaskStatus {
  /** Optional. The 'generation' of the task that was last processed by the controller. */
  observedGeneration?: number;
  /** Optional. Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. Task-specific conditions include: * `Started`: `True` when the task has started to execute. * `Completed`: `True` when the task has succeeded. `False` when the task has failed. */
  conditions?: ReadonlyArray<GoogleCloudRunV1Condition>;
  /** Required. Index of the task, unique per execution, and beginning at 0. */
  index?: number;
  /** Optional. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. */
  startTime?: string;
  /** Optional. The number of times this task was retried. Instances are retried when they fail up to the maxRetries limit. */
  retried?: number;
  /** Optional. URI where logs for this task can be found in Cloud Console. */
  logUri?: string;
  /** Optional. Result of the last attempt of this task. */
  lastAttemptResult?: TaskAttemptResult;
  /** Optional. Represents time when the task was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. */
  completionTime?: string;
}

export const TaskStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  observedGeneration: Schema.optional(Schema.Number),
  conditions: Schema.optional(Schema.Array(GoogleCloudRunV1Condition)),
  index: Schema.optional(Schema.Number),
  startTime: Schema.optional(Schema.String),
  retried: Schema.optional(Schema.Number),
  logUri: Schema.optional(Schema.String),
  lastAttemptResult: Schema.optional(TaskAttemptResult),
  completionTime: Schema.optional(Schema.String),
}).annotate({ identifier: "TaskStatus" });

export interface Task {
  /** Optional. Specification of the desired behavior of a task. */
  spec?: TaskSpec;
  /** Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. */
  kind?: string;
  /** Optional. Standard object's metadata. */
  metadata?: ObjectMeta;
  /** Output only. Current status of a task. */
  status?: TaskStatus;
  /** Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. */
  apiVersion?: string;
}

export const Task = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  spec: Schema.optional(TaskSpec),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ObjectMeta),
  status: Schema.optional(TaskStatus),
  apiVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "Task" });

export interface AuthorizedDomain {
  /** Deprecated Read only. Full path to the `AuthorizedDomain` resource in the API. Example: `projects/myproject/authorizedDomains/example.com`. */
  name?: string;
  /** Relative name of the domain authorized for use. Example: `example.com`. */
  id?: string;
}

export const AuthorizedDomain = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "AuthorizedDomain" });

export interface GoogleLongrunningOperation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
}

export const GoogleLongrunningOperation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleLongrunningListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const GoogleLongrunningListOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface SetIamPolicyRequest {
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
}

export const SetIamPolicyRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updateMask: Schema.optional(Schema.String),
  policy: Schema.optional(Policy),
}).annotate({ identifier: "SetIamPolicyRequest" });

export interface GoogleDevtoolsCloudbuildV1BuildOperationMetadata {
  /** The build that the operation is tracking. */
  build?: GoogleDevtoolsCloudbuildV1Build;
}

export const GoogleDevtoolsCloudbuildV1BuildOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    build: Schema.optional(GoogleDevtoolsCloudbuildV1Build),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV1BuildOperationMetadata",
  });

export interface ListRevisionsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The API version for this call such as "serving.knative.dev/v1". */
  apiVersion?: string;
  /** List of Revisions. */
  items?: ReadonlyArray<Revision>;
  /** The kind of this resource, in this case "RevisionList". */
  kind?: string;
  /** Metadata associated with this revision list. */
  metadata?: ListMeta;
}

export const ListRevisionsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  apiVersion: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Revision)),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ListMeta),
}).annotate({ identifier: "ListRevisionsResponse" });

export interface Job {
  /** Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. */
  kind?: string;
  /** Optional. Standard object's metadata. */
  metadata?: ObjectMeta;
  /** Optional. Specification of the desired behavior of a job. */
  spec?: JobSpec;
  /** Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. */
  apiVersion?: string;
  /** Output only. Current status of a job. */
  status?: JobStatus;
}

export const Job = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ObjectMeta),
  spec: Schema.optional(JobSpec),
  apiVersion: Schema.optional(Schema.String),
  status: Schema.optional(JobStatus),
}).annotate({ identifier: "Job" });

export interface ListJobsResponse {
  /** List of Jobs. */
  items?: ReadonlyArray<Job>;
  /** The kind of this resource, in this case "JobsList". */
  kind?: string;
  /** Metadata associated with this jobs list. */
  metadata?: ListMeta;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The API version for this call such as "run.googleapis.com/v1". */
  apiVersion?: string;
}

export const ListJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.optional(Schema.Array(Job)),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ListMeta),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  apiVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "ListJobsResponse" });

export interface ListTasksResponse {
  /** The API version for this call such as "run.googleapis.com/v1". */
  apiVersion?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The kind of this resource, in this case "TasksList". */
  kind?: string;
  /** Metadata associated with this tasks list. */
  metadata?: ListMeta;
  /** List of Tasks. */
  items?: ReadonlyArray<Task>;
}

export const ListTasksResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiVersion: Schema.optional(Schema.String),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(ListMeta),
  items: Schema.optional(Schema.Array(Task)),
}).annotate({ identifier: "ListTasksResponse" });

export interface ListAuthorizedDomainsResponse {
  /** The authorized domains belonging to the user. */
  domains?: ReadonlyArray<AuthorizedDomain>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListAuthorizedDomainsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domains: Schema.optional(Schema.Array(AuthorizedDomain)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAuthorizedDomainsResponse" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface StopInstanceRequest {}

export const StopInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "StopInstanceRequest" });

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

export interface ListProjectsLocationsRequest {
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
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

export interface ListProjectsLocationsConfigurationsRequest {
  /** The namespace from which the configurations should be listed. For Cloud Run, replace {namespace_id} with the project ID or number. */
  parent: string;
  /** Optional. The maximum number of the records that should be returned. */
  limit?: number;
  /** Optional. Encoded string to continue paging. */
  continue?: string;
  /** Not supported by Cloud Run. */
  fieldSelector?: string;
  /** Not supported by Cloud Run. */
  includeUninitialized?: boolean;
  /** Not supported by Cloud Run. */
  watch?: boolean;
  /** Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. */
  labelSelector?: string;
  /** Not supported by Cloud Run. */
  resourceVersion?: string;
}

export const ListProjectsLocationsConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
    fieldSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldSelector"),
    ),
    includeUninitialized: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeUninitialized"),
    ),
    watch: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("watch")),
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
    resourceVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/configurations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConfigurationsRequest>;

export type ListProjectsLocationsConfigurationsResponse =
  ListConfigurationsResponse;
export const ListProjectsLocationsConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConfigurationsResponse;

export type ListProjectsLocationsConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List configurations. Results are sorted by creation time, descending. */
export const listProjectsLocationsConfigurations: API.OperationMethod<
  ListProjectsLocationsConfigurationsRequest,
  ListProjectsLocationsConfigurationsResponse,
  ListProjectsLocationsConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsConfigurationsRequest,
  output: ListProjectsLocationsConfigurationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsConfigurationsRequest {
  /** The name of the configuration to retrieve. For Cloud Run, replace {namespace_id} with the project ID or number. */
  name: string;
}

export const GetProjectsLocationsConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConfigurationsRequest>;

export type GetProjectsLocationsConfigurationsResponse = Configuration;
export const GetProjectsLocationsConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Configuration;

export type GetProjectsLocationsConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get information about a configuration. */
export const getProjectsLocationsConfigurations: API.OperationMethod<
  GetProjectsLocationsConfigurationsRequest,
  GetProjectsLocationsConfigurationsResponse,
  GetProjectsLocationsConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConfigurationsRequest,
  output: GetProjectsLocationsConfigurationsResponse,
  errors: [NotFound, Forbidden],
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
    T.Http({ method: "GET", path: "v1/{resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsJobsRequest>;

export type GetIamPolicyProjectsLocationsJobsResponse = Policy;
export const GetIamPolicyProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the IAM Access Control policy currently in effect for the given job. This result does not include any inherited policies. */
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

export interface TestIamPermissionsProjectsLocationsJobsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsJobsRequest>;

export type TestIamPermissionsProjectsLocationsJobsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified job. There are no permissions required for making this API call. */
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

export interface SetIamPolicyProjectsLocationsJobsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsJobsRequest>;

export type SetIamPolicyProjectsLocationsJobsResponse = Policy;
export const SetIamPolicyProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the IAM Access control policy for the specified job. Overwrites any existing policy. */
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

export interface SetIamPolicyProjectsLocationsInstancesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsInstancesRequest>;

export type SetIamPolicyProjectsLocationsInstancesResponse = Policy;
export const SetIamPolicyProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the IAM Access control policy for the specified instance. Overwrites any existing policy. */
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

export interface GetIamPolicyProjectsLocationsInstancesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsInstancesRequest>;

export type GetIamPolicyProjectsLocationsInstancesResponse = Policy;
export const GetIamPolicyProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the IAM Access Control policy currently in effect for the given instance. This result does not include any inherited policies. */
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

export interface TestIamPermissionsProjectsLocationsInstancesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsInstancesRequest>;

export type TestIamPermissionsProjectsLocationsInstancesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified instance. There are no permissions required for making this API call. */
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

export interface SetIamPolicyProjectsLocationsWorkerpoolsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsWorkerpoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsWorkerpoolsRequest>;

export type SetIamPolicyProjectsLocationsWorkerpoolsResponse = Policy;
export const SetIamPolicyProjectsLocationsWorkerpoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsWorkerpoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the IAM Access control policy for the specified worker pool. Overwrites any existing policy. */
export const setIamPolicyProjectsLocationsWorkerpools: API.OperationMethod<
  SetIamPolicyProjectsLocationsWorkerpoolsRequest,
  SetIamPolicyProjectsLocationsWorkerpoolsResponse,
  SetIamPolicyProjectsLocationsWorkerpoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsWorkerpoolsRequest,
  output: SetIamPolicyProjectsLocationsWorkerpoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsWorkerpoolsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsWorkerpoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsWorkerpoolsRequest>;

export type GetIamPolicyProjectsLocationsWorkerpoolsResponse = Policy;
export const GetIamPolicyProjectsLocationsWorkerpoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsWorkerpoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the IAM Access Control policy currently in effect for the given worker pool. This result does not include any inherited policies. */
export const getIamPolicyProjectsLocationsWorkerpools: API.OperationMethod<
  GetIamPolicyProjectsLocationsWorkerpoolsRequest,
  GetIamPolicyProjectsLocationsWorkerpoolsResponse,
  GetIamPolicyProjectsLocationsWorkerpoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsWorkerpoolsRequest,
  output: GetIamPolicyProjectsLocationsWorkerpoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsWorkerpoolsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsWorkerpoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsWorkerpoolsRequest>;

export type TestIamPermissionsProjectsLocationsWorkerpoolsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsWorkerpoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsWorkerpoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified worker pool. There are no permissions required for making this API call. */
export const testIamPermissionsProjectsLocationsWorkerpools: API.OperationMethod<
  TestIamPermissionsProjectsLocationsWorkerpoolsRequest,
  TestIamPermissionsProjectsLocationsWorkerpoolsResponse,
  TestIamPermissionsProjectsLocationsWorkerpoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsWorkerpoolsRequest,
  output: TestIamPermissionsProjectsLocationsWorkerpoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRoutesRequest {
  /** Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run. */
  watch?: boolean;
  /** Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. */
  labelSelector?: string;
  /** The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run. */
  resourceVersion?: string;
  /** The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  parent: string;
  /** Optional. The maximum number of records that should be returned. */
  limit?: number;
  /** Optional. Encoded string to continue paging. */
  continue?: string;
  /** Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run. */
  fieldSelector?: string;
  /** Not currently used by Cloud Run. */
  includeUninitialized?: boolean;
}

export const ListProjectsLocationsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    watch: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("watch")),
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
    resourceVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceVersion"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
    fieldSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldSelector"),
    ),
    includeUninitialized: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeUninitialized"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/routes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRoutesRequest>;

export type ListProjectsLocationsRoutesResponse = ListRoutesResponse;
export const ListProjectsLocationsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRoutesResponse;

export type ListProjectsLocationsRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List routes. Results are sorted by creation time, descending. */
export const listProjectsLocationsRoutes: API.OperationMethod<
  ListProjectsLocationsRoutesRequest,
  ListProjectsLocationsRoutesResponse,
  ListProjectsLocationsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsRoutesRequest,
  output: ListProjectsLocationsRoutesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsRoutesRequest {
  /** The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
}

export const GetProjectsLocationsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRoutesRequest>;

export type GetProjectsLocationsRoutesResponse = Route;
export const GetProjectsLocationsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Route;

export type GetProjectsLocationsRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get information about a route. */
export const getProjectsLocationsRoutes: API.OperationMethod<
  GetProjectsLocationsRoutesRequest,
  GetProjectsLocationsRoutesResponse,
  GetProjectsLocationsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRoutesRequest,
  output: GetProjectsLocationsRoutesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsDomainmappingsRequest {
  /** The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run. */
  resourceVersion?: string;
  /** Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. */
  labelSelector?: string;
  /** Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run. */
  watch?: boolean;
  /** Not currently used by Cloud Run. */
  includeUninitialized?: boolean;
  /** Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run. */
  fieldSelector?: string;
  /** Required. The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  parent: string;
  /** Optional. The maximum number of records that should be returned. */
  limit?: number;
  /** Optional. Encoded string to continue paging. */
  continue?: string;
}

export const ListProjectsLocationsDomainmappingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceVersion"),
    ),
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
    watch: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("watch")),
    includeUninitialized: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeUninitialized"),
    ),
    fieldSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldSelector"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/domainmappings" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDomainmappingsRequest>;

export type ListProjectsLocationsDomainmappingsResponse =
  ListDomainMappingsResponse;
export const ListProjectsLocationsDomainmappingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDomainMappingsResponse;

export type ListProjectsLocationsDomainmappingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all domain mappings. */
export const listProjectsLocationsDomainmappings: API.OperationMethod<
  ListProjectsLocationsDomainmappingsRequest,
  ListProjectsLocationsDomainmappingsResponse,
  ListProjectsLocationsDomainmappingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsDomainmappingsRequest,
  output: ListProjectsLocationsDomainmappingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsDomainmappingsRequest {
  /** Required. The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
}

export const GetProjectsLocationsDomainmappingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDomainmappingsRequest>;

export type GetProjectsLocationsDomainmappingsResponse = DomainMapping;
export const GetProjectsLocationsDomainmappingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DomainMapping;

export type GetProjectsLocationsDomainmappingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get information about a domain mapping. */
export const getProjectsLocationsDomainmappings: API.OperationMethod<
  GetProjectsLocationsDomainmappingsRequest,
  GetProjectsLocationsDomainmappingsResponse,
  GetProjectsLocationsDomainmappingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDomainmappingsRequest,
  output: GetProjectsLocationsDomainmappingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsDomainmappingsRequest {
  /** Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information. */
  propagationPolicy?: string;
  /** Cloud Run currently ignores this parameter. */
  apiVersion?: string;
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
  /** Cloud Run currently ignores this parameter. */
  kind?: string;
  /** Required. The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
}

export const DeleteProjectsLocationsDomainmappingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    propagationPolicy: Schema.optional(Schema.String).pipe(
      T.HttpQuery("propagationPolicy"),
    ),
    apiVersion: Schema.optional(Schema.String).pipe(T.HttpQuery("apiVersion")),
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
    kind: Schema.optional(Schema.String).pipe(T.HttpQuery("kind")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDomainmappingsRequest>;

export type DeleteProjectsLocationsDomainmappingsResponse = Status;
export const DeleteProjectsLocationsDomainmappingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Status;

export type DeleteProjectsLocationsDomainmappingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a domain mapping. */
export const deleteProjectsLocationsDomainmappings: API.OperationMethod<
  DeleteProjectsLocationsDomainmappingsRequest,
  DeleteProjectsLocationsDomainmappingsResponse,
  DeleteProjectsLocationsDomainmappingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDomainmappingsRequest,
  output: DeleteProjectsLocationsDomainmappingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsDomainmappingsRequest {
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
  /** Required. The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  parent: string;
  /** Request body */
  body?: DomainMapping;
}

export const CreateProjectsLocationsDomainmappingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DomainMapping).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/domainmappings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDomainmappingsRequest>;

export type CreateProjectsLocationsDomainmappingsResponse = DomainMapping;
export const CreateProjectsLocationsDomainmappingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DomainMapping;

export type CreateProjectsLocationsDomainmappingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new domain mapping. */
export const createProjectsLocationsDomainmappings: API.OperationMethod<
  CreateProjectsLocationsDomainmappingsRequest,
  CreateProjectsLocationsDomainmappingsResponse,
  CreateProjectsLocationsDomainmappingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDomainmappingsRequest,
  output: CreateProjectsLocationsDomainmappingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsServicesRequest {
  /** Not supported, and ignored by Cloud Run. */
  includeUninitialized?: boolean;
  /** Not supported, and ignored by Cloud Run. */
  fieldSelector?: string;
  /** Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}` */
  parent: string;
  /** The maximum number of records that should be returned. */
  limit?: number;
  /** Encoded string to continue paging. */
  continue?: string;
  /** Not supported, and ignored by Cloud Run. */
  resourceVersion?: string;
  /** Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. */
  labelSelector?: string;
  /** Not supported, and ignored by Cloud Run. */
  watch?: boolean;
}

export const ListProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeUninitialized: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeUninitialized"),
    ),
    fieldSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldSelector"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
    resourceVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceVersion"),
    ),
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
    watch: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("watch")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/services" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsServicesRequest>;

export type ListProjectsLocationsServicesResponse = ListServicesResponse;
export const ListProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListServicesResponse;

export type ListProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists services for the given project and region. Results are sorted by creation time, descending. */
export const listProjectsLocationsServices: API.OperationMethod<
  ListProjectsLocationsServicesRequest,
  ListProjectsLocationsServicesResponse,
  ListProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsServicesRequest,
  output: ListProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsServicesRequest {
  /** Required. The fully qualified name of the service to delete. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}` */
  name: string;
  /** Not supported, and ignored by Cloud Run. */
  kind?: string;
  /** Not supported, and ignored by Cloud Run. */
  propagationPolicy?: string;
  /** Not supported, and ignored by Cloud Run. */
  apiVersion?: string;
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
}

export const DeleteProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    kind: Schema.optional(Schema.String).pipe(T.HttpQuery("kind")),
    propagationPolicy: Schema.optional(Schema.String).pipe(
      T.HttpQuery("propagationPolicy"),
    ),
    apiVersion: Schema.optional(Schema.String).pipe(T.HttpQuery("apiVersion")),
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsServicesRequest>;

export type DeleteProjectsLocationsServicesResponse = Status;
export const DeleteProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Status;

export type DeleteProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions. */
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

export interface GetIamPolicyProjectsLocationsServicesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsServicesRequest>;

export type GetIamPolicyProjectsLocationsServicesResponse = Policy;
export const GetIamPolicyProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies. */
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

export interface CreateProjectsLocationsServicesRequest {
  /** Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}` */
  parent: string;
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
  /** Request body */
  body?: Service;
}

export const CreateProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
    body: Schema.optional(Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/services", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsServicesRequest>;

export type CreateProjectsLocationsServicesResponse = Service;
export const CreateProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Service;

export type CreateProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready. */
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

export interface GetProjectsLocationsServicesRequest {
  /** Required. The fully qualified name of the service to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}` */
  name: string;
}

export const GetProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsServicesRequest>;

export type GetProjectsLocationsServicesResponse = Service;
export const GetProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Service;

export type GetProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a service. */
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
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsServicesRequest>;

export type SetIamPolicyProjectsLocationsServicesResponse = Policy;
export const SetIamPolicyProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

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

export interface ReplaceServiceProjectsLocationsServicesRequest {
  /** Required. The fully qualified name of the service to replace. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}` */
  name: string;
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
  /** Request body */
  body?: Service;
}

export const ReplaceServiceProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
    body: Schema.optional(Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReplaceServiceProjectsLocationsServicesRequest>;

export type ReplaceServiceProjectsLocationsServicesResponse = Service;
export const ReplaceServiceProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Service;

export type ReplaceServiceProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control. */
export const replaceServiceProjectsLocationsServices: API.OperationMethod<
  ReplaceServiceProjectsLocationsServicesRequest,
  ReplaceServiceProjectsLocationsServicesResponse,
  ReplaceServiceProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReplaceServiceProjectsLocationsServicesRequest,
  output: ReplaceServiceProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsServicesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsServicesRequest>;

export type TestIamPermissionsProjectsLocationsServicesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

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

export interface ListProjectsLocationsAuthorizeddomainsRequest {
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
  /** Name of the parent Project resource. Example: `projects/myproject`. */
  parent: string;
  /** Maximum results to return per page. */
  pageSize?: number;
}

export const ListProjectsLocationsAuthorizeddomainsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/authorizeddomains" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAuthorizeddomainsRequest>;

export type ListProjectsLocationsAuthorizeddomainsResponse =
  ListAuthorizedDomainsResponse;
export const ListProjectsLocationsAuthorizeddomainsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAuthorizedDomainsResponse;

export type ListProjectsLocationsAuthorizeddomainsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List authorized domains. */
export const listProjectsLocationsAuthorizeddomains: API.PaginatedOperationMethod<
  ListProjectsLocationsAuthorizeddomainsRequest,
  ListProjectsLocationsAuthorizeddomainsResponse,
  ListProjectsLocationsAuthorizeddomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAuthorizeddomainsRequest,
  output: ListProjectsLocationsAuthorizeddomainsResponse,
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
    T.Http({ method: "DELETE", path: "v1/{name}" }),
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
    T.Http({ method: "POST", path: "v1/{name}:wait", hasBody: true }),
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

export interface ListProjectsLocationsOperationsRequest {
  /** Token identifying which result to start with, which is returned by a previous list call. */
  pageToken?: string;
  /** Optional. A filter for matching the completed or in-progress operations. The supported formats of *filter* are: To query for only completed operations: done:true To query for only ongoing operations: done:false Must be empty to query for all of the latest operations for the given parent project. */
  filter?: string;
  /** Required. To query for all of the operations for a project. */
  name: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set or set to less than or equal to 0, the default page size is 100. . */
  pageSize?: number;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/operations" }),
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

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
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

export interface ListProjectsLocationsRevisionsRequest {
  /** Not currently used by Cloud Run. */
  includeUninitialized?: boolean;
  /** Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run. */
  fieldSelector?: string;
  /** The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  parent: string;
  /** Optional. The maximum number of records that should be returned. */
  limit?: number;
  /** Optional. Encoded string to continue paging. */
  continue?: string;
  /** The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run. */
  resourceVersion?: string;
  /** Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. */
  labelSelector?: string;
  /** Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run. */
  watch?: boolean;
}

export const ListProjectsLocationsRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeUninitialized: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeUninitialized"),
    ),
    fieldSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldSelector"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
    resourceVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceVersion"),
    ),
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
    watch: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("watch")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/revisions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRevisionsRequest>;

export type ListProjectsLocationsRevisionsResponse = ListRevisionsResponse;
export const ListProjectsLocationsRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRevisionsResponse;

export type ListProjectsLocationsRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List revisions. Results are sorted by creation time, descending. */
export const listProjectsLocationsRevisions: API.OperationMethod<
  ListProjectsLocationsRevisionsRequest,
  ListProjectsLocationsRevisionsResponse,
  ListProjectsLocationsRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsRevisionsRequest,
  output: ListProjectsLocationsRevisionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsRevisionsRequest {
  /** The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
}

export const GetProjectsLocationsRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRevisionsRequest>;

export type GetProjectsLocationsRevisionsResponse = Revision;
export const GetProjectsLocationsRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Revision;

export type GetProjectsLocationsRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get information about a revision. */
export const getProjectsLocationsRevisions: API.OperationMethod<
  GetProjectsLocationsRevisionsRequest,
  GetProjectsLocationsRevisionsResponse,
  GetProjectsLocationsRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRevisionsRequest,
  output: GetProjectsLocationsRevisionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsRevisionsRequest {
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
  /** Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. */
  propagationPolicy?: string;
  /** Cloud Run currently ignores this parameter. */
  apiVersion?: string;
  /** The name of the revision to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
  /** Cloud Run currently ignores this parameter. */
  kind?: string;
}

export const DeleteProjectsLocationsRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
    propagationPolicy: Schema.optional(Schema.String).pipe(
      T.HttpQuery("propagationPolicy"),
    ),
    apiVersion: Schema.optional(Schema.String).pipe(T.HttpQuery("apiVersion")),
    name: Schema.String.pipe(T.HttpPath("name")),
    kind: Schema.optional(Schema.String).pipe(T.HttpQuery("kind")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRevisionsRequest>;

export type DeleteProjectsLocationsRevisionsResponse = Status;
export const DeleteProjectsLocationsRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Status;

export type DeleteProjectsLocationsRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a revision. */
export const deleteProjectsLocationsRevisions: API.OperationMethod<
  DeleteProjectsLocationsRevisionsRequest,
  DeleteProjectsLocationsRevisionsResponse,
  DeleteProjectsLocationsRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRevisionsRequest,
  output: DeleteProjectsLocationsRevisionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAuthorizeddomainsRequest {
  /** Name of the parent Project resource. Example: `projects/myproject`. */
  parent: string;
  /** Maximum results to return per page. */
  pageSize?: number;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListProjectsAuthorizeddomainsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/authorizeddomains" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAuthorizeddomainsRequest>;

export type ListProjectsAuthorizeddomainsResponse =
  ListAuthorizedDomainsResponse;
export const ListProjectsAuthorizeddomainsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAuthorizedDomainsResponse;

export type ListProjectsAuthorizeddomainsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List authorized domains. */
export const listProjectsAuthorizeddomains: API.PaginatedOperationMethod<
  ListProjectsAuthorizeddomainsRequest,
  ListProjectsAuthorizeddomainsResponse,
  ListProjectsAuthorizeddomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAuthorizeddomainsRequest,
  output: ListProjectsAuthorizeddomainsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListNamespacesWorkerpoolsRequest {
  /** =, !=, exists, in, and notIn. */
  labelSelector?: string;
  /** Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/workerpools` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}` */
  parent: string;
  /** The maximum number of records that should be returned. */
  limit?: number;
  /** Encoded string to continue paging. */
  continue?: string;
}

export const ListNamespacesWorkerpoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "apis/run.googleapis.com/v1/{parent}/workerpools",
    }),
    svc,
  ) as unknown as Schema.Schema<ListNamespacesWorkerpoolsRequest>;

export type ListNamespacesWorkerpoolsResponse = ListWorkerPoolsResponse;
export const ListNamespacesWorkerpoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWorkerPoolsResponse;

export type ListNamespacesWorkerpoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists worker pools for the given project and region. Results are sorted by creation time, descending. */
export const listNamespacesWorkerpools: API.OperationMethod<
  ListNamespacesWorkerpoolsRequest,
  ListNamespacesWorkerpoolsResponse,
  ListNamespacesWorkerpoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListNamespacesWorkerpoolsRequest,
  output: ListNamespacesWorkerpoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ReplaceWorkerPoolNamespacesWorkerpoolsRequest {
  /** Required. The fully qualified name of the worker pool to replace. It can be any of the following forms: * `namespaces/{project_id_or_number}/workerpools/{worker_pool_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/workerpools/{worker_pool_name}` * `projects/{project_id_or_number}/regions/{region}/workerpools/{worker_pool_name}` */
  name: string;
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
  /** Request body */
  body?: WorkerPool;
}

export const ReplaceWorkerPoolNamespacesWorkerpoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
    body: Schema.optional(WorkerPool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "apis/run.googleapis.com/v1/{name}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReplaceWorkerPoolNamespacesWorkerpoolsRequest>;

export type ReplaceWorkerPoolNamespacesWorkerpoolsResponse = WorkerPool;
export const ReplaceWorkerPoolNamespacesWorkerpoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkerPool;

export type ReplaceWorkerPoolNamespacesWorkerpoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Replaces a worker pool. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control. */
export const replaceWorkerPoolNamespacesWorkerpools: API.OperationMethod<
  ReplaceWorkerPoolNamespacesWorkerpoolsRequest,
  ReplaceWorkerPoolNamespacesWorkerpoolsResponse,
  ReplaceWorkerPoolNamespacesWorkerpoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReplaceWorkerPoolNamespacesWorkerpoolsRequest,
  output: ReplaceWorkerPoolNamespacesWorkerpoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteNamespacesWorkerpoolsRequest {
  /** Required. The fully qualified name of the worker pool to delete. It can be any of the following forms: * `namespaces/{project_id_or_number}/workerpools/{worker_pool_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/workerpools/{worker_pool_name}` * `projects/{project_id_or_number}/regions/{region}/workerpools/{worker_pool_name}` */
  name: string;
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
}

export const DeleteNamespacesWorkerpoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
  }).pipe(
    T.Http({ method: "DELETE", path: "apis/run.googleapis.com/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteNamespacesWorkerpoolsRequest>;

export type DeleteNamespacesWorkerpoolsResponse = Status;
export const DeleteNamespacesWorkerpoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Status;

export type DeleteNamespacesWorkerpoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the provided worker pool. This will cause the WorkerPool to stop all instances and will delete all associated WorkerPoolRevisions. */
export const deleteNamespacesWorkerpools: API.OperationMethod<
  DeleteNamespacesWorkerpoolsRequest,
  DeleteNamespacesWorkerpoolsResponse,
  DeleteNamespacesWorkerpoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNamespacesWorkerpoolsRequest,
  output: DeleteNamespacesWorkerpoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateNamespacesWorkerpoolsRequest {
  /** Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/workerpools` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}` */
  parent: string;
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
  /** Request body */
  body?: WorkerPool;
}

export const CreateNamespacesWorkerpoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
    body: Schema.optional(WorkerPool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "apis/run.googleapis.com/v1/{parent}/workerpools",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateNamespacesWorkerpoolsRequest>;

export type CreateNamespacesWorkerpoolsResponse = WorkerPool;
export const CreateNamespacesWorkerpoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkerPool;

export type CreateNamespacesWorkerpoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new WorkerPool. WorkerPool creation will trigger a new deployment. Use GetWorkerPool, and check worker_pool.status to determine if the WorkerPool is ready. */
export const createNamespacesWorkerpools: API.OperationMethod<
  CreateNamespacesWorkerpoolsRequest,
  CreateNamespacesWorkerpoolsResponse,
  CreateNamespacesWorkerpoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNamespacesWorkerpoolsRequest,
  output: CreateNamespacesWorkerpoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetNamespacesWorkerpoolsRequest {
  /** Required. The fully qualified name of the worker pool to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number}/workerpools/{worker_pool_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/workerpools/{worker_pool_name}` * `projects/{project_id_or_number}/regions/{region}/workerpools/{worker_pool_name}` */
  name: string;
}

export const GetNamespacesWorkerpoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "apis/run.googleapis.com/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetNamespacesWorkerpoolsRequest>;

export type GetNamespacesWorkerpoolsResponse = WorkerPool;
export const GetNamespacesWorkerpoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkerPool;

export type GetNamespacesWorkerpoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a worker pool. */
export const getNamespacesWorkerpools: API.OperationMethod<
  GetNamespacesWorkerpoolsRequest,
  GetNamespacesWorkerpoolsResponse,
  GetNamespacesWorkerpoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespacesWorkerpoolsRequest,
  output: GetNamespacesWorkerpoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListNamespacesDomainmappingsRequest {
  /** Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. */
  labelSelector?: string;
  /** Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run. */
  watch?: boolean;
  /** The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run. */
  resourceVersion?: string;
  /** Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run. */
  fieldSelector?: string;
  /** Required. The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  parent: string;
  /** Optional. The maximum number of records that should be returned. */
  limit?: number;
  /** Optional. Encoded string to continue paging. */
  continue?: string;
  /** Not currently used by Cloud Run. */
  includeUninitialized?: boolean;
}

export const ListNamespacesDomainmappingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
    watch: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("watch")),
    resourceVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceVersion"),
    ),
    fieldSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldSelector"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
    includeUninitialized: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeUninitialized"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "apis/domains.cloudrun.com/v1/{parent}/domainmappings",
    }),
    svc,
  ) as unknown as Schema.Schema<ListNamespacesDomainmappingsRequest>;

export type ListNamespacesDomainmappingsResponse = ListDomainMappingsResponse;
export const ListNamespacesDomainmappingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDomainMappingsResponse;

export type ListNamespacesDomainmappingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all domain mappings. */
export const listNamespacesDomainmappings: API.OperationMethod<
  ListNamespacesDomainmappingsRequest,
  ListNamespacesDomainmappingsResponse,
  ListNamespacesDomainmappingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListNamespacesDomainmappingsRequest,
  output: ListNamespacesDomainmappingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetNamespacesDomainmappingsRequest {
  /** Required. The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
}

export const GetNamespacesDomainmappingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "apis/domains.cloudrun.com/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetNamespacesDomainmappingsRequest>;

export type GetNamespacesDomainmappingsResponse = DomainMapping;
export const GetNamespacesDomainmappingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DomainMapping;

export type GetNamespacesDomainmappingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get information about a domain mapping. */
export const getNamespacesDomainmappings: API.OperationMethod<
  GetNamespacesDomainmappingsRequest,
  GetNamespacesDomainmappingsResponse,
  GetNamespacesDomainmappingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespacesDomainmappingsRequest,
  output: GetNamespacesDomainmappingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateNamespacesDomainmappingsRequest {
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
  /** Required. The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  parent: string;
  /** Request body */
  body?: DomainMapping;
}

export const CreateNamespacesDomainmappingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DomainMapping).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "apis/domains.cloudrun.com/v1/{parent}/domainmappings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateNamespacesDomainmappingsRequest>;

export type CreateNamespacesDomainmappingsResponse = DomainMapping;
export const CreateNamespacesDomainmappingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DomainMapping;

export type CreateNamespacesDomainmappingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new domain mapping. */
export const createNamespacesDomainmappings: API.OperationMethod<
  CreateNamespacesDomainmappingsRequest,
  CreateNamespacesDomainmappingsResponse,
  CreateNamespacesDomainmappingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNamespacesDomainmappingsRequest,
  output: CreateNamespacesDomainmappingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteNamespacesDomainmappingsRequest {
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
  /** Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information. */
  propagationPolicy?: string;
  /** Cloud Run currently ignores this parameter. */
  apiVersion?: string;
  /** Cloud Run currently ignores this parameter. */
  kind?: string;
  /** Required. The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
}

export const DeleteNamespacesDomainmappingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
    propagationPolicy: Schema.optional(Schema.String).pipe(
      T.HttpQuery("propagationPolicy"),
    ),
    apiVersion: Schema.optional(Schema.String).pipe(T.HttpQuery("apiVersion")),
    kind: Schema.optional(Schema.String).pipe(T.HttpQuery("kind")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "apis/domains.cloudrun.com/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteNamespacesDomainmappingsRequest>;

export type DeleteNamespacesDomainmappingsResponse = Status;
export const DeleteNamespacesDomainmappingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Status;

export type DeleteNamespacesDomainmappingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a domain mapping. */
export const deleteNamespacesDomainmappings: API.OperationMethod<
  DeleteNamespacesDomainmappingsRequest,
  DeleteNamespacesDomainmappingsResponse,
  DeleteNamespacesDomainmappingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNamespacesDomainmappingsRequest,
  output: DeleteNamespacesDomainmappingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteNamespacesServicesRequest {
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
  /** Not supported, and ignored by Cloud Run. */
  propagationPolicy?: string;
  /** Not supported, and ignored by Cloud Run. */
  apiVersion?: string;
  /** Not supported, and ignored by Cloud Run. */
  kind?: string;
  /** Required. The fully qualified name of the service to delete. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}` */
  name: string;
}

export const DeleteNamespacesServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
    propagationPolicy: Schema.optional(Schema.String).pipe(
      T.HttpQuery("propagationPolicy"),
    ),
    apiVersion: Schema.optional(Schema.String).pipe(T.HttpQuery("apiVersion")),
    kind: Schema.optional(Schema.String).pipe(T.HttpQuery("kind")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "apis/serving.knative.dev/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteNamespacesServicesRequest>;

export type DeleteNamespacesServicesResponse = Status;
export const DeleteNamespacesServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Status;

export type DeleteNamespacesServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions. */
export const deleteNamespacesServices: API.OperationMethod<
  DeleteNamespacesServicesRequest,
  DeleteNamespacesServicesResponse,
  DeleteNamespacesServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNamespacesServicesRequest,
  output: DeleteNamespacesServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateNamespacesServicesRequest {
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
  /** Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}` */
  parent: string;
  /** Request body */
  body?: Service;
}

export const CreateNamespacesServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "apis/serving.knative.dev/v1/{parent}/services",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateNamespacesServicesRequest>;

export type CreateNamespacesServicesResponse = Service;
export const CreateNamespacesServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Service;

export type CreateNamespacesServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready. */
export const createNamespacesServices: API.OperationMethod<
  CreateNamespacesServicesRequest,
  CreateNamespacesServicesResponse,
  CreateNamespacesServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNamespacesServicesRequest,
  output: CreateNamespacesServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListNamespacesServicesRequest {
  /** Not supported, and ignored by Cloud Run. */
  includeUninitialized?: boolean;
  /** Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}` */
  parent: string;
  /** The maximum number of records that should be returned. */
  limit?: number;
  /** Encoded string to continue paging. */
  continue?: string;
  /** Not supported, and ignored by Cloud Run. */
  fieldSelector?: string;
  /** Not supported, and ignored by Cloud Run. */
  resourceVersion?: string;
  /** Not supported, and ignored by Cloud Run. */
  watch?: boolean;
  /** Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. */
  labelSelector?: string;
}

export const ListNamespacesServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeUninitialized: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeUninitialized"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
    fieldSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldSelector"),
    ),
    resourceVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceVersion"),
    ),
    watch: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("watch")),
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "apis/serving.knative.dev/v1/{parent}/services",
    }),
    svc,
  ) as unknown as Schema.Schema<ListNamespacesServicesRequest>;

export type ListNamespacesServicesResponse = ListServicesResponse;
export const ListNamespacesServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListServicesResponse;

export type ListNamespacesServicesError = DefaultErrors | NotFound | Forbidden;

/** Lists services for the given project and region. Results are sorted by creation time, descending. */
export const listNamespacesServices: API.OperationMethod<
  ListNamespacesServicesRequest,
  ListNamespacesServicesResponse,
  ListNamespacesServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListNamespacesServicesRequest,
  output: ListNamespacesServicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ReplaceServiceNamespacesServicesRequest {
  /** Required. The fully qualified name of the service to replace. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}` */
  name: string;
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
  /** Request body */
  body?: Service;
}

export const ReplaceServiceNamespacesServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
    body: Schema.optional(Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "apis/serving.knative.dev/v1/{name}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReplaceServiceNamespacesServicesRequest>;

export type ReplaceServiceNamespacesServicesResponse = Service;
export const ReplaceServiceNamespacesServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Service;

export type ReplaceServiceNamespacesServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control. */
export const replaceServiceNamespacesServices: API.OperationMethod<
  ReplaceServiceNamespacesServicesRequest,
  ReplaceServiceNamespacesServicesResponse,
  ReplaceServiceNamespacesServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReplaceServiceNamespacesServicesRequest,
  output: ReplaceServiceNamespacesServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetNamespacesServicesRequest {
  /** Required. The fully qualified name of the service to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}` */
  name: string;
}

export const GetNamespacesServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "apis/serving.knative.dev/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetNamespacesServicesRequest>;

export type GetNamespacesServicesResponse = Service;
export const GetNamespacesServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Service;

export type GetNamespacesServicesError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a service. */
export const getNamespacesServices: API.OperationMethod<
  GetNamespacesServicesRequest,
  GetNamespacesServicesResponse,
  GetNamespacesServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespacesServicesRequest,
  output: GetNamespacesServicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetNamespacesExecutionsRequest {
  /** Required. The name of the execution to retrieve. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
}

export const GetNamespacesExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "apis/run.googleapis.com/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetNamespacesExecutionsRequest>;

export type GetNamespacesExecutionsResponse = Execution;
export const GetNamespacesExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Execution;

export type GetNamespacesExecutionsError = DefaultErrors | NotFound | Forbidden;

/** Get information about an execution. */
export const getNamespacesExecutions: API.OperationMethod<
  GetNamespacesExecutionsRequest,
  GetNamespacesExecutionsResponse,
  GetNamespacesExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespacesExecutionsRequest,
  output: GetNamespacesExecutionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListNamespacesExecutionsRequest {
  /** Required. The namespace from which the executions should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  parent: string;
  /** Optional. The maximum number of the records that should be returned. */
  limit?: number;
  /** Optional. Optional encoded string to continue paging. */
  continue?: string;
  /** Optional. Not supported by Cloud Run. */
  fieldSelector?: string;
  /** Optional. Not supported by Cloud Run. */
  includeUninitialized?: boolean;
  /** Optional. Not supported by Cloud Run. */
  watch?: boolean;
  /** Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. */
  labelSelector?: string;
  /** Optional. Not supported by Cloud Run. */
  resourceVersion?: string;
}

export const ListNamespacesExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
    fieldSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldSelector"),
    ),
    includeUninitialized: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeUninitialized"),
    ),
    watch: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("watch")),
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
    resourceVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceVersion"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "apis/run.googleapis.com/v1/{parent}/executions",
    }),
    svc,
  ) as unknown as Schema.Schema<ListNamespacesExecutionsRequest>;

export type ListNamespacesExecutionsResponse = ListExecutionsResponse;
export const ListNamespacesExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListExecutionsResponse;

export type ListNamespacesExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List executions. Results are sorted by creation time, descending. */
export const listNamespacesExecutions: API.OperationMethod<
  ListNamespacesExecutionsRequest,
  ListNamespacesExecutionsResponse,
  ListNamespacesExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListNamespacesExecutionsRequest,
  output: ListNamespacesExecutionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteNamespacesExecutionsRequest {
  /** Required. The name of the execution to delete. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
  /** Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting. */
  propagationPolicy?: string;
  /** Optional. Cloud Run currently ignores this parameter. */
  kind?: string;
  /** Optional. Cloud Run currently ignores this parameter. */
  apiVersion?: string;
}

export const DeleteNamespacesExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    propagationPolicy: Schema.optional(Schema.String).pipe(
      T.HttpQuery("propagationPolicy"),
    ),
    kind: Schema.optional(Schema.String).pipe(T.HttpQuery("kind")),
    apiVersion: Schema.optional(Schema.String).pipe(T.HttpQuery("apiVersion")),
  }).pipe(
    T.Http({ method: "DELETE", path: "apis/run.googleapis.com/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteNamespacesExecutionsRequest>;

export type DeleteNamespacesExecutionsResponse = Status;
export const DeleteNamespacesExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Status;

export type DeleteNamespacesExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an execution. */
export const deleteNamespacesExecutions: API.OperationMethod<
  DeleteNamespacesExecutionsRequest,
  DeleteNamespacesExecutionsResponse,
  DeleteNamespacesExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNamespacesExecutionsRequest,
  output: DeleteNamespacesExecutionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelNamespacesExecutionsRequest {
  /** Required. The name of the execution to cancel. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
  /** Request body */
  body?: CancelExecutionRequest;
}

export const CancelNamespacesExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelExecutionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "apis/run.googleapis.com/v1/{name}:cancel",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CancelNamespacesExecutionsRequest>;

export type CancelNamespacesExecutionsResponse = Execution;
export const CancelNamespacesExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Execution;

export type CancelNamespacesExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancel an execution. */
export const cancelNamespacesExecutions: API.OperationMethod<
  CancelNamespacesExecutionsRequest,
  CancelNamespacesExecutionsResponse,
  CancelNamespacesExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelNamespacesExecutionsRequest,
  output: CancelNamespacesExecutionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListNamespacesRoutesRequest {
  /** The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run. */
  resourceVersion?: string;
  /** Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run. */
  watch?: boolean;
  /** Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. */
  labelSelector?: string;
  /** Not currently used by Cloud Run. */
  includeUninitialized?: boolean;
  /** The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  parent: string;
  /** Optional. The maximum number of records that should be returned. */
  limit?: number;
  /** Optional. Encoded string to continue paging. */
  continue?: string;
  /** Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run. */
  fieldSelector?: string;
}

export const ListNamespacesRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceVersion"),
    ),
    watch: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("watch")),
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
    includeUninitialized: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeUninitialized"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
    fieldSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldSelector"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "apis/serving.knative.dev/v1/{parent}/routes",
    }),
    svc,
  ) as unknown as Schema.Schema<ListNamespacesRoutesRequest>;

export type ListNamespacesRoutesResponse = ListRoutesResponse;
export const ListNamespacesRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRoutesResponse;

export type ListNamespacesRoutesError = DefaultErrors | NotFound | Forbidden;

/** List routes. Results are sorted by creation time, descending. */
export const listNamespacesRoutes: API.OperationMethod<
  ListNamespacesRoutesRequest,
  ListNamespacesRoutesResponse,
  ListNamespacesRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListNamespacesRoutesRequest,
  output: ListNamespacesRoutesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetNamespacesRoutesRequest {
  /** The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
}

export const GetNamespacesRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "apis/serving.knative.dev/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetNamespacesRoutesRequest>;

export type GetNamespacesRoutesResponse = Route;
export const GetNamespacesRoutesResponse = /*@__PURE__*/ /*#__PURE__*/ Route;

export type GetNamespacesRoutesError = DefaultErrors | NotFound | Forbidden;

/** Get information about a route. */
export const getNamespacesRoutes: API.OperationMethod<
  GetNamespacesRoutesRequest,
  GetNamespacesRoutesResponse,
  GetNamespacesRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespacesRoutesRequest,
  output: GetNamespacesRoutesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListNamespacesJobsRequest {
  /** Optional. Not supported by Cloud Run. */
  fieldSelector?: string;
  /** Required. The namespace from which the jobs should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  parent: string;
  /** Optional. The maximum number of records that should be returned. */
  limit?: number;
  /** Optional. Optional encoded string to continue paging. */
  continue?: string;
  /** Optional. Not supported by Cloud Run. */
  includeUninitialized?: boolean;
  /** Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. */
  labelSelector?: string;
  /** Optional. Not supported by Cloud Run. */
  watch?: boolean;
  /** Optional. Not supported by Cloud Run. */
  resourceVersion?: string;
}

export const ListNamespacesJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldSelector"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
    includeUninitialized: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeUninitialized"),
    ),
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
    watch: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("watch")),
    resourceVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "apis/run.googleapis.com/v1/{parent}/jobs" }),
    svc,
  ) as unknown as Schema.Schema<ListNamespacesJobsRequest>;

export type ListNamespacesJobsResponse = ListJobsResponse;
export const ListNamespacesJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListJobsResponse;

export type ListNamespacesJobsError = DefaultErrors | NotFound | Forbidden;

/** List jobs. Results are sorted by creation time, descending. */
export const listNamespacesJobs: API.OperationMethod<
  ListNamespacesJobsRequest,
  ListNamespacesJobsResponse,
  ListNamespacesJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListNamespacesJobsRequest,
  output: ListNamespacesJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteNamespacesJobsRequest {
  /** Required. The name of the job to delete. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
  /** Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information. */
  propagationPolicy?: string;
  /** Optional. Cloud Run currently ignores this parameter. */
  kind?: string;
  /** Optional. Cloud Run currently ignores this parameter. */
  apiVersion?: string;
}

export const DeleteNamespacesJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    propagationPolicy: Schema.optional(Schema.String).pipe(
      T.HttpQuery("propagationPolicy"),
    ),
    kind: Schema.optional(Schema.String).pipe(T.HttpQuery("kind")),
    apiVersion: Schema.optional(Schema.String).pipe(T.HttpQuery("apiVersion")),
  }).pipe(
    T.Http({ method: "DELETE", path: "apis/run.googleapis.com/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteNamespacesJobsRequest>;

export type DeleteNamespacesJobsResponse = Status;
export const DeleteNamespacesJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Status;

export type DeleteNamespacesJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a job. */
export const deleteNamespacesJobs: API.OperationMethod<
  DeleteNamespacesJobsRequest,
  DeleteNamespacesJobsResponse,
  DeleteNamespacesJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNamespacesJobsRequest,
  output: DeleteNamespacesJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateNamespacesJobsRequest {
  /** Required. The namespace in which the job should be created. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  parent: string;
  /** Request body */
  body?: Job;
}

export const CreateNamespacesJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Job).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "apis/run.googleapis.com/v1/{parent}/jobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateNamespacesJobsRequest>;

export type CreateNamespacesJobsResponse = Job;
export const CreateNamespacesJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Job;

export type CreateNamespacesJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a job. */
export const createNamespacesJobs: API.OperationMethod<
  CreateNamespacesJobsRequest,
  CreateNamespacesJobsResponse,
  CreateNamespacesJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNamespacesJobsRequest,
  output: CreateNamespacesJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReplaceJobNamespacesJobsRequest {
  /** Required. The name of the job being replaced. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
  /** Request body */
  body?: Job;
}

export const ReplaceJobNamespacesJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Job).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "apis/run.googleapis.com/v1/{name}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReplaceJobNamespacesJobsRequest>;

export type ReplaceJobNamespacesJobsResponse = Job;
export const ReplaceJobNamespacesJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Job;

export type ReplaceJobNamespacesJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control. */
export const replaceJobNamespacesJobs: API.OperationMethod<
  ReplaceJobNamespacesJobsRequest,
  ReplaceJobNamespacesJobsResponse,
  ReplaceJobNamespacesJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReplaceJobNamespacesJobsRequest,
  output: ReplaceJobNamespacesJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetNamespacesJobsRequest {
  /** Required. The name of the job to retrieve. It takes the form namespaces/{namespace}/jobs/{job_name} and the `endpoint` must be regional. Replace {namespace} with the project ID or number. */
  name: string;
}

export const GetNamespacesJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "apis/run.googleapis.com/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetNamespacesJobsRequest>;

export type GetNamespacesJobsResponse = Job;
export const GetNamespacesJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Job;

export type GetNamespacesJobsError = DefaultErrors | NotFound | Forbidden;

/** Get information about a job. */
export const getNamespacesJobs: API.OperationMethod<
  GetNamespacesJobsRequest,
  GetNamespacesJobsResponse,
  GetNamespacesJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespacesJobsRequest,
  output: GetNamespacesJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RunNamespacesJobsRequest {
  /** Required. The name of the job to run. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
  /** Request body */
  body?: RunJobRequest;
}

export const RunNamespacesJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RunJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "apis/run.googleapis.com/v1/{name}:run",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RunNamespacesJobsRequest>;

export type RunNamespacesJobsResponse = Execution;
export const RunNamespacesJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Execution;

export type RunNamespacesJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Trigger creation of a new execution of this job. */
export const runNamespacesJobs: API.OperationMethod<
  RunNamespacesJobsRequest,
  RunNamespacesJobsResponse,
  RunNamespacesJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunNamespacesJobsRequest,
  output: RunNamespacesJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListNamespacesConfigurationsRequest {
  /** Not supported by Cloud Run. */
  resourceVersion?: string;
  /** Not supported by Cloud Run. */
  watch?: boolean;
  /** Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. */
  labelSelector?: string;
  /** Not supported by Cloud Run. */
  includeUninitialized?: boolean;
  /** The namespace from which the configurations should be listed. For Cloud Run, replace {namespace_id} with the project ID or number. */
  parent: string;
  /** Optional. The maximum number of the records that should be returned. */
  limit?: number;
  /** Optional. Encoded string to continue paging. */
  continue?: string;
  /** Not supported by Cloud Run. */
  fieldSelector?: string;
}

export const ListNamespacesConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceVersion"),
    ),
    watch: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("watch")),
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
    includeUninitialized: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeUninitialized"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
    fieldSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldSelector"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "apis/serving.knative.dev/v1/{parent}/configurations",
    }),
    svc,
  ) as unknown as Schema.Schema<ListNamespacesConfigurationsRequest>;

export type ListNamespacesConfigurationsResponse = ListConfigurationsResponse;
export const ListNamespacesConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConfigurationsResponse;

export type ListNamespacesConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List configurations. Results are sorted by creation time, descending. */
export const listNamespacesConfigurations: API.OperationMethod<
  ListNamespacesConfigurationsRequest,
  ListNamespacesConfigurationsResponse,
  ListNamespacesConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListNamespacesConfigurationsRequest,
  output: ListNamespacesConfigurationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetNamespacesConfigurationsRequest {
  /** The name of the configuration to retrieve. For Cloud Run, replace {namespace_id} with the project ID or number. */
  name: string;
}

export const GetNamespacesConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "apis/serving.knative.dev/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetNamespacesConfigurationsRequest>;

export type GetNamespacesConfigurationsResponse = Configuration;
export const GetNamespacesConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Configuration;

export type GetNamespacesConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get information about a configuration. */
export const getNamespacesConfigurations: API.OperationMethod<
  GetNamespacesConfigurationsRequest,
  GetNamespacesConfigurationsResponse,
  GetNamespacesConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespacesConfigurationsRequest,
  output: GetNamespacesConfigurationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateNamespacesInstancesRequest {
  /** Required. The namespace in which the Instance should be created. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  parent: string;
  /** Request body */
  body?: Instance;
}

export const CreateNamespacesInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Instance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "apis/run.googleapis.com/v1/{parent}/instances",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateNamespacesInstancesRequest>;

export type CreateNamespacesInstancesResponse = Instance;
export const CreateNamespacesInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Instance;

export type CreateNamespacesInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a Instance. */
export const createNamespacesInstances: API.OperationMethod<
  CreateNamespacesInstancesRequest,
  CreateNamespacesInstancesResponse,
  CreateNamespacesInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNamespacesInstancesRequest,
  output: CreateNamespacesInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteNamespacesInstancesRequest {
  /** Required. The name of the Instance to delete. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
  /** Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information. */
  propagationPolicy?: string;
  /** Optional. Cloud Run currently ignores this parameter. */
  kind?: string;
  /** Optional. Cloud Run currently ignores this parameter. */
  apiVersion?: string;
}

export const DeleteNamespacesInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    propagationPolicy: Schema.optional(Schema.String).pipe(
      T.HttpQuery("propagationPolicy"),
    ),
    kind: Schema.optional(Schema.String).pipe(T.HttpQuery("kind")),
    apiVersion: Schema.optional(Schema.String).pipe(T.HttpQuery("apiVersion")),
  }).pipe(
    T.Http({ method: "DELETE", path: "apis/run.googleapis.com/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteNamespacesInstancesRequest>;

export type DeleteNamespacesInstancesResponse = Status;
export const DeleteNamespacesInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Status;

export type DeleteNamespacesInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a Instance. */
export const deleteNamespacesInstances: API.OperationMethod<
  DeleteNamespacesInstancesRequest,
  DeleteNamespacesInstancesResponse,
  DeleteNamespacesInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNamespacesInstancesRequest,
  output: DeleteNamespacesInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartNamespacesInstancesRequest {
  /** Required. The name of the Instance to run. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
  /** Request body */
  body?: StartInstanceRequest;
}

export const StartNamespacesInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StartInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "apis/run.googleapis.com/v1/{name}:start",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StartNamespacesInstancesRequest>;

export type StartNamespacesInstancesResponse = Instance;
export const StartNamespacesInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Instance;

export type StartNamespacesInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Start an Instance which has been stopped. */
export const startNamespacesInstances: API.OperationMethod<
  StartNamespacesInstancesRequest,
  StartNamespacesInstancesResponse,
  StartNamespacesInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartNamespacesInstancesRequest,
  output: StartNamespacesInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StopNamespacesInstancesRequest {
  /** Required. The name of the Instance to run. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
  /** Request body */
  body?: StopInstanceRequest;
}

export const StopNamespacesInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StopInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "apis/run.googleapis.com/v1/{name}:stop",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StopNamespacesInstancesRequest>;

export type StopNamespacesInstancesResponse = Instance;
export const StopNamespacesInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Instance;

export type StopNamespacesInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stop an Instance that is running. */
export const stopNamespacesInstances: API.OperationMethod<
  StopNamespacesInstancesRequest,
  StopNamespacesInstancesResponse,
  StopNamespacesInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopNamespacesInstancesRequest,
  output: StopNamespacesInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListNamespacesInstancesRequest {
  /** Optional. Not supported by Cloud Run. */
  fieldSelector?: string;
  /** Required. The namespace from which the Instances should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  parent: string;
  /** Optional. The maximum number of records that should be returned. */
  limit?: number;
  /** Optional. Optional encoded string to continue paging. */
  continue?: string;
  /** Optional. Not supported by Cloud Run. */
  includeUninitialized?: boolean;
  /** Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. */
  labelSelector?: string;
  /** Optional. Not supported by Cloud Run. */
  watch?: boolean;
  /** Optional. Not supported by Cloud Run. */
  resourceVersion?: string;
}

export const ListNamespacesInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldSelector"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
    includeUninitialized: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeUninitialized"),
    ),
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
    watch: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("watch")),
    resourceVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceVersion"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "apis/run.googleapis.com/v1/{parent}/instances",
    }),
    svc,
  ) as unknown as Schema.Schema<ListNamespacesInstancesRequest>;

export type ListNamespacesInstancesResponse = ListInstancesResponse;
export const ListNamespacesInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInstancesResponse;

export type ListNamespacesInstancesError = DefaultErrors | NotFound | Forbidden;

/** List Instances. Results are sorted by creation time, descending. */
export const listNamespacesInstances: API.OperationMethod<
  ListNamespacesInstancesRequest,
  ListNamespacesInstancesResponse,
  ListNamespacesInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListNamespacesInstancesRequest,
  output: ListNamespacesInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ReplaceInstanceNamespacesInstancesRequest {
  /** Required. The name of the Instance being replaced. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
  /** Request body */
  body?: Instance;
}

export const ReplaceInstanceNamespacesInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Instance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "apis/run.googleapis.com/v1/{name}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReplaceInstanceNamespacesInstancesRequest>;

export type ReplaceInstanceNamespacesInstancesResponse = Instance;
export const ReplaceInstanceNamespacesInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Instance;

export type ReplaceInstanceNamespacesInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Replace an Instance. */
export const replaceInstanceNamespacesInstances: API.OperationMethod<
  ReplaceInstanceNamespacesInstancesRequest,
  ReplaceInstanceNamespacesInstancesResponse,
  ReplaceInstanceNamespacesInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReplaceInstanceNamespacesInstancesRequest,
  output: ReplaceInstanceNamespacesInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetNamespacesInstancesRequest {
  /** Required. The name of the Instance to retrieve. It takes the form namespaces/{namespace}/instances/{Instance_name} and the `endpoint` must be regional. Replace {namespace} with the project ID or number. */
  name: string;
}

export const GetNamespacesInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "apis/run.googleapis.com/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetNamespacesInstancesRequest>;

export type GetNamespacesInstancesResponse = Instance;
export const GetNamespacesInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Instance;

export type GetNamespacesInstancesError = DefaultErrors | NotFound | Forbidden;

/** Get an Instance. */
export const getNamespacesInstances: API.OperationMethod<
  GetNamespacesInstancesRequest,
  GetNamespacesInstancesResponse,
  GetNamespacesInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespacesInstancesRequest,
  output: GetNamespacesInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetNamespacesTasksRequest {
  /** Required. The name of the task to retrieve. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
}

export const GetNamespacesTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "apis/run.googleapis.com/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetNamespacesTasksRequest>;

export type GetNamespacesTasksResponse = Task;
export const GetNamespacesTasksResponse = /*@__PURE__*/ /*#__PURE__*/ Task;

export type GetNamespacesTasksError = DefaultErrors | NotFound | Forbidden;

/** Get information about a task. */
export const getNamespacesTasks: API.OperationMethod<
  GetNamespacesTasksRequest,
  GetNamespacesTasksResponse,
  GetNamespacesTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespacesTasksRequest,
  output: GetNamespacesTasksResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListNamespacesTasksRequest {
  /** Optional. Not supported by Cloud Run. */
  includeUninitialized?: boolean;
  /** Required. The namespace from which the tasks should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  parent: string;
  /** Optional. The maximum number of records that should be returned. */
  limit?: number;
  /** Optional. Optional encoded string to continue paging. */
  continue?: string;
  /** Optional. Not supported by Cloud Run. */
  fieldSelector?: string;
  /** Optional. Not supported by Cloud Run. */
  resourceVersion?: string;
  /** Optional. Not supported by Cloud Run. */
  watch?: boolean;
  /** Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. For example, to list all tasks of execution "foo" in succeeded state: `run.googleapis.com/execution=foo,run.googleapis.com/runningState=Succeeded`. Supported states are: * `Pending`: Initial state of all tasks. The task has not yet started but eventually will. * `Running`: Container instances for this task are running or will be running shortly. * `Succeeded`: No more container instances to run for the task, and the last attempt succeeded. * `Failed`: No more container instances to run for the task, and the last attempt failed. This task has run out of retry attempts. * `Cancelled`: Task was running but got stopped because its parent execution has been aborted. * `Abandoned`: The task has not yet started and never will because its parent execution has been aborted. */
  labelSelector?: string;
}

export const ListNamespacesTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeUninitialized: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeUninitialized"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
    fieldSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldSelector"),
    ),
    resourceVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceVersion"),
    ),
    watch: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("watch")),
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "apis/run.googleapis.com/v1/{parent}/tasks",
    }),
    svc,
  ) as unknown as Schema.Schema<ListNamespacesTasksRequest>;

export type ListNamespacesTasksResponse = ListTasksResponse;
export const ListNamespacesTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTasksResponse;

export type ListNamespacesTasksError = DefaultErrors | NotFound | Forbidden;

/** List tasks. */
export const listNamespacesTasks: API.OperationMethod<
  ListNamespacesTasksRequest,
  ListNamespacesTasksResponse,
  ListNamespacesTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListNamespacesTasksRequest,
  output: ListNamespacesTasksResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListNamespacesAuthorizeddomainsRequest {
  /** Name of the parent Project resource. Example: `projects/myproject`. */
  parent: string;
  /** Maximum results to return per page. */
  pageSize?: number;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListNamespacesAuthorizeddomainsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "apis/domains.cloudrun.com/v1/{parent}/authorizeddomains",
    }),
    svc,
  ) as unknown as Schema.Schema<ListNamespacesAuthorizeddomainsRequest>;

export type ListNamespacesAuthorizeddomainsResponse =
  ListAuthorizedDomainsResponse;
export const ListNamespacesAuthorizeddomainsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAuthorizedDomainsResponse;

export type ListNamespacesAuthorizeddomainsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List authorized domains. */
export const listNamespacesAuthorizeddomains: API.PaginatedOperationMethod<
  ListNamespacesAuthorizeddomainsRequest,
  ListNamespacesAuthorizeddomainsResponse,
  ListNamespacesAuthorizeddomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNamespacesAuthorizeddomainsRequest,
  output: ListNamespacesAuthorizeddomainsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteNamespacesRevisionsRequest {
  /** The name of the revision to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
  /** Cloud Run currently ignores this parameter. */
  kind?: string;
  /** Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` */
  dryRun?: string;
  /** Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. */
  propagationPolicy?: string;
  /** Cloud Run currently ignores this parameter. */
  apiVersion?: string;
}

export const DeleteNamespacesRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    kind: Schema.optional(Schema.String).pipe(T.HttpQuery("kind")),
    dryRun: Schema.optional(Schema.String).pipe(T.HttpQuery("dryRun")),
    propagationPolicy: Schema.optional(Schema.String).pipe(
      T.HttpQuery("propagationPolicy"),
    ),
    apiVersion: Schema.optional(Schema.String).pipe(T.HttpQuery("apiVersion")),
  }).pipe(
    T.Http({ method: "DELETE", path: "apis/serving.knative.dev/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteNamespacesRevisionsRequest>;

export type DeleteNamespacesRevisionsResponse = Status;
export const DeleteNamespacesRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Status;

export type DeleteNamespacesRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a revision. */
export const deleteNamespacesRevisions: API.OperationMethod<
  DeleteNamespacesRevisionsRequest,
  DeleteNamespacesRevisionsResponse,
  DeleteNamespacesRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNamespacesRevisionsRequest,
  output: DeleteNamespacesRevisionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListNamespacesRevisionsRequest {
  /** Not currently used by Cloud Run. */
  includeUninitialized?: boolean;
  /** Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run. */
  fieldSelector?: string;
  /** The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  parent: string;
  /** Optional. The maximum number of records that should be returned. */
  limit?: number;
  /** Optional. Encoded string to continue paging. */
  continue?: string;
  /** The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run. */
  resourceVersion?: string;
  /** Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. */
  labelSelector?: string;
  /** Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run. */
  watch?: boolean;
}

export const ListNamespacesRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeUninitialized: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeUninitialized"),
    ),
    fieldSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldSelector"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    continue: Schema.optional(Schema.String).pipe(T.HttpQuery("continue")),
    resourceVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceVersion"),
    ),
    labelSelector: Schema.optional(Schema.String).pipe(
      T.HttpQuery("labelSelector"),
    ),
    watch: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("watch")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "apis/serving.knative.dev/v1/{parent}/revisions",
    }),
    svc,
  ) as unknown as Schema.Schema<ListNamespacesRevisionsRequest>;

export type ListNamespacesRevisionsResponse = ListRevisionsResponse;
export const ListNamespacesRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRevisionsResponse;

export type ListNamespacesRevisionsError = DefaultErrors | NotFound | Forbidden;

/** List revisions. Results are sorted by creation time, descending. */
export const listNamespacesRevisions: API.OperationMethod<
  ListNamespacesRevisionsRequest,
  ListNamespacesRevisionsResponse,
  ListNamespacesRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListNamespacesRevisionsRequest,
  output: ListNamespacesRevisionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetNamespacesRevisionsRequest {
  /** The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID */
  name: string;
}

export const GetNamespacesRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "apis/serving.knative.dev/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetNamespacesRevisionsRequest>;

export type GetNamespacesRevisionsResponse = Revision;
export const GetNamespacesRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Revision;

export type GetNamespacesRevisionsError = DefaultErrors | NotFound | Forbidden;

/** Get information about a revision. */
export const getNamespacesRevisions: API.OperationMethod<
  GetNamespacesRevisionsRequest,
  GetNamespacesRevisionsResponse,
  GetNamespacesRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespacesRevisionsRequest,
  output: GetNamespacesRevisionsResponse,
  errors: [NotFound, Forbidden],
}));
