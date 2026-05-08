// ==========================================================================
// Notebooks API (notebooks v1)
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
  name: "notebooks",
  version: "v1",
  rootUrl: "https://notebooks.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface DiagnosticConfig {
  /** Required. User Cloud Storage bucket location (REQUIRED). Must be formatted with path prefix (`gs://$GCS_BUCKET`). Permissions: User Managed Notebooks: - storage.buckets.writer: Must be given to the project's service account attached to VM. Google Managed Notebooks: - storage.buckets.writer: Must be given to the project's service account or user credentials attached to VM depending on authentication mode. Cloud Storage bucket Log file will be written to `gs://$GCS_BUCKET/$RELATIVE_PATH/$VM_DATE_$TIME.tar.gz` */
  gcsBucket?: string;
  /** Optional. Defines the relative storage path in the Cloud Storage bucket where the diagnostic logs will be written: Default path will be the root directory of the Cloud Storage bucket (`gs://$GCS_BUCKET/$DATE_$TIME.tar.gz`) Example of full path where Log file will be written: `gs://$GCS_BUCKET/$RELATIVE_PATH/` */
  relativePath?: string;
  /** Optional. Enables flag to capture packets from the instance for 30 seconds */
  packetCaptureFlagEnabled?: boolean;
  /** Optional. Enables flag to repair service for instance */
  repairFlagEnabled?: boolean;
  /** Optional. Enables flag to copy all `/home/jupyter` folder contents */
  copyHomeFilesFlagEnabled?: boolean;
}

export const DiagnosticConfig: Schema.Schema<DiagnosticConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsBucket: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
    packetCaptureFlagEnabled: Schema.optional(Schema.Boolean),
    repairFlagEnabled: Schema.optional(Schema.Boolean),
    copyHomeFilesFlagEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DiagnosticConfig" });

export interface DataprocParameters {
  /** URI for cluster used to run Dataproc execution. Format: `projects/{PROJECT_ID}/regions/{REGION}/clusters/{CLUSTER_NAME}` */
  cluster?: string;
}

export const DataprocParameters: Schema.Schema<DataprocParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cluster: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataprocParameters" });

export interface VertexAIParameters {
  /** The full name of the Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the Job should be peered. For example, `projects/12345/global/networks/myVPC`. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert) is of the form `projects/{project}/global/networks/{network}`. Where `{project}` is a project number, as in `12345`, and `{network}` is a network name. Private services access must already be configured for the network. If left unspecified, the job is not peered with any network. */
  network?: string;
  /** Environment variables. At most 100 environment variables can be specified and unique. Example: `GCP_BUCKET=gs://my-bucket/samples/` */
  env?: Record<string, string>;
}

export const VertexAIParameters: Schema.Schema<VertexAIParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    env: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "VertexAIParameters" });

export interface SchedulerAcceleratorConfig {
  /** Type of this accelerator. */
  type?:
    | "SCHEDULER_ACCELERATOR_TYPE_UNSPECIFIED"
    | "NVIDIA_TESLA_K80"
    | "NVIDIA_TESLA_P100"
    | "NVIDIA_TESLA_V100"
    | "NVIDIA_TESLA_P4"
    | "NVIDIA_TESLA_T4"
    | "NVIDIA_TESLA_A100"
    | "TPU_V2"
    | "TPU_V3"
    | (string & {});
  /** Count of cores of this accelerator. */
  coreCount?: string;
}

export const SchedulerAcceleratorConfig: Schema.Schema<SchedulerAcceleratorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    coreCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "SchedulerAcceleratorConfig" });

export interface ExecutionTemplate {
  /** Container Image URI to a DLVM Example: 'gcr.io/deeplearning-platform-release/base-cu100' More examples can be found at: https://cloud.google.com/ai-platform/deep-learning-containers/docs/choosing-container */
  containerImageUri?: string;
  /** Parameters used in Dataproc JobType executions. */
  dataprocParameters?: DataprocParameters;
  /** Parameters used in Vertex AI JobType executions. */
  vertexAiParameters?: VertexAIParameters;
  /** Configuration (count and accelerator type) for hardware running notebook execution. */
  acceleratorConfig?: SchedulerAcceleratorConfig;
  /** The email address of a service account to use when running the execution. You must have the `iam.serviceAccounts.actAs` permission for the specified service account. */
  serviceAccount?: string;
  /** Name of the kernel spec to use. This must be specified if the kernel spec name on the execution target does not match the name in the input notebook file. */
  kernelSpec?: string;
  /** Path to the notebook folder to write to. Must be in a Google Cloud Storage bucket path. Format: `gs://{bucket_name}/{folder}` Ex: `gs://notebook_user/scheduled_notebooks` */
  outputNotebookFolder?: string;
  /** Specifies the type of virtual machine to use for your training job's master worker. You must specify this field when `scaleTier` is set to `CUSTOM`. You can use certain Compute Engine machine types directly in this field. The following types are supported: - `n1-standard-4` - `n1-standard-8` - `n1-standard-16` - `n1-standard-32` - `n1-standard-64` - `n1-standard-96` - `n1-highmem-2` - `n1-highmem-4` - `n1-highmem-8` - `n1-highmem-16` - `n1-highmem-32` - `n1-highmem-64` - `n1-highmem-96` - `n1-highcpu-16` - `n1-highcpu-32` - `n1-highcpu-64` - `n1-highcpu-96` Alternatively, you can use the following legacy machine types: - `standard` - `large_model` - `complex_model_s` - `complex_model_m` - `complex_model_l` - `standard_gpu` - `complex_model_m_gpu` - `complex_model_l_gpu` - `standard_p100` - `complex_model_m_p100` - `standard_v100` - `large_model_v100` - `complex_model_m_v100` - `complex_model_l_v100` Finally, if you want to use a TPU for training, specify `cloud_tpu` in this field. Learn more about the [special configuration options for training with TPU](https://cloud.google.com/ai-platform/training/docs/using-tpus#configuring_a_custom_tpu_machine). */
  masterType?: string;
  /** Parameters used within the 'input_notebook_file' notebook. */
  parameters?: string;
  /** The name of a Vertex AI [Tensorboard] resource to which this execution will upload Tensorboard logs. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}` */
  tensorboard?: string;
  /** Labels for execution. If execution is scheduled, a field included will be 'nbs-scheduled'. Otherwise, it is an immediate execution, and an included field will be 'nbs-immediate'. Use fields to efficiently index between various types of executions. */
  labels?: Record<string, string>;
  /** Required. Scale tier of the hardware used for notebook execution. DEPRECATED Will be discontinued. As right now only CUSTOM is supported. */
  scaleTier?:
    | "SCALE_TIER_UNSPECIFIED"
    | "BASIC"
    | "STANDARD_1"
    | "PREMIUM_1"
    | "BASIC_GPU"
    | "BASIC_TPU"
    | "CUSTOM"
    | (string & {});
  /** Path to the notebook file to execute. Must be in a Google Cloud Storage bucket. Format: `gs://{bucket_name}/{folder}/{notebook_file_name}` Ex: `gs://notebook_user/scheduled_notebooks/sentiment_notebook.ipynb` */
  inputNotebookFile?: string;
  /** Parameters to be overridden in the notebook during execution. Ref https://papermill.readthedocs.io/en/latest/usage-parameterize.html on how to specifying parameters in the input notebook and pass them here in an YAML file. Ex: `gs://notebook_user/scheduled_notebooks/sentiment_notebook_params.yaml` */
  paramsYamlFile?: string;
  /** The type of Job to be used on this execution. */
  jobType?: "JOB_TYPE_UNSPECIFIED" | "VERTEX_AI" | "DATAPROC" | (string & {});
}

export const ExecutionTemplate: Schema.Schema<ExecutionTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerImageUri: Schema.optional(Schema.String),
    dataprocParameters: Schema.optional(DataprocParameters),
    vertexAiParameters: Schema.optional(VertexAIParameters),
    acceleratorConfig: Schema.optional(SchedulerAcceleratorConfig),
    serviceAccount: Schema.optional(Schema.String),
    kernelSpec: Schema.optional(Schema.String),
    outputNotebookFolder: Schema.optional(Schema.String),
    masterType: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.String),
    tensorboard: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    scaleTier: Schema.optional(Schema.String),
    inputNotebookFile: Schema.optional(Schema.String),
    paramsYamlFile: Schema.optional(Schema.String),
    jobType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExecutionTemplate" });

export interface Execution {
  /** Output only. State of the underlying AI Platform job. */
  state?:
    | "STATE_UNSPECIFIED"
    | "QUEUED"
    | "PREPARING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELLING"
    | "CANCELLED"
    | "EXPIRED"
    | "INITIALIZING"
    | (string & {});
  /** Output only. The URI of the external job used to execute the notebook. */
  jobUri?: string;
  /** Output only. Name used for UI purposes. Name can only contain alphanumeric characters and underscores '_'. */
  displayName?: string;
  /** A brief description of this execution. */
  description?: string;
  /** Output only. Time the Execution was last updated. */
  updateTime?: string;
  /** Output notebook file generated by this execution */
  outputNotebookFile?: string;
  /** Output only. The resource name of the execute. Format: `projects/{project_id}/locations/{location}/executions/{execution_id}` */
  name?: string;
  /** execute metadata including name, hardware spec, region, labels, etc. */
  executionTemplate?: ExecutionTemplate;
  /** Output only. Time the Execution was instantiated. */
  createTime?: string;
}

export const Execution: Schema.Schema<Execution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    jobUri: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    outputNotebookFile: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    executionTemplate: Schema.optional(ExecutionTemplate),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Execution" });

export interface Schedule {
  /** Output only. The name of this schedule. Format: `projects/{project_id}/locations/{location}/schedules/{schedule_id}` */
  name?: string;
  /** Output only. Time the schedule was created. */
  createTime?: string;
  /** Notebook Execution Template corresponding to this schedule. */
  executionTemplate?: ExecutionTemplate;
  state?:
    | "STATE_UNSPECIFIED"
    | "ENABLED"
    | "PAUSED"
    | "DISABLED"
    | "UPDATE_FAILED"
    | "INITIALIZING"
    | "DELETING"
    | (string & {});
  /** Cron-tab formatted schedule by which the job will execute. Format: minute, hour, day of month, month, day of week, e.g. `0 0 * * WED` = every Wednesday More examples: https://crontab.guru/examples.html */
  cronSchedule?: string;
  /** Output only. Display name used for UI purposes. Name can only contain alphanumeric characters, hyphens `-`, and underscores `_`. */
  displayName?: string;
  /** Timezone on which the cron_schedule. The value of this field must be a time zone name from the tz database. TZ Database: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones Note that some time zones include a provision for daylight savings time. The rules for daylight saving time are determined by the chosen tz. For UTC use the string "utc". If a time zone is not specified, the default will be in UTC (also known as GMT). */
  timeZone?: string;
  /** Output only. Time the schedule was last updated. */
  updateTime?: string;
  /** A brief description of this environment. */
  description?: string;
  /** Output only. The most recent execution names triggered from this schedule and their corresponding states. */
  recentExecutions?: ReadonlyArray<Execution>;
}

export const Schedule: Schema.Schema<Schedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    executionTemplate: Schema.optional(ExecutionTemplate),
    state: Schema.optional(Schema.String),
    cronSchedule: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    recentExecutions: Schema.optional(Schema.Array(Execution)),
  }).annotate({ identifier: "Schedule" });

export interface ListSchedulesResponse {
  /** A list of returned instances. */
  schedules?: ReadonlyArray<Schedule>;
  /** Schedules that could not be reached. For example: ['projects/{project_id}/location/{location}/schedules/monthly_digest', 'projects/{project_id}/location/{location}/schedules/weekly_sentiment'] */
  unreachable?: ReadonlyArray<string>;
  /** Page token that can be used to continue listing from the last result in the next list call. */
  nextPageToken?: string;
}

export const ListSchedulesResponse: Schema.Schema<ListSchedulesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schedules: Schema.optional(Schema.Array(Schedule)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSchedulesResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface InstanceConfig {
  /** Cron expression in UTC timezone, used to schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron). */
  notebookUpgradeSchedule?: string;
  /** Verifies core internal services are running. */
  enableHealthMonitoring?: boolean;
}

export const InstanceConfig: Schema.Schema<InstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notebookUpgradeSchedule: Schema.optional(Schema.String),
    enableHealthMonitoring: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "InstanceConfig" });

export interface ResetInstanceRequest {}

export const ResetInstanceRequest: Schema.Schema<ResetInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResetInstanceRequest",
  });

export interface ResetRuntimeRequest {
  /** Idempotent request UUID. */
  requestId?: string;
}

export const ResetRuntimeRequest: Schema.Schema<ResetRuntimeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResetRuntimeRequest" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface UpgradeHistoryEntry {
  /** The container image before this instance upgrade. */
  containerImage?: string;
  /** The version of the notebook instance before this upgrade. */
  version?: string;
  /** The state of this instance upgrade history entry. */
  state?:
    | "STATE_UNSPECIFIED"
    | "STARTED"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Target VM Image. Format: `ainotebooks-vm/project/image-name/name`. */
  targetImage?: string;
  /** Action. Rolloback or Upgrade. */
  action?: "ACTION_UNSPECIFIED" | "UPGRADE" | "ROLLBACK" | (string & {});
  /** The VM image before this instance upgrade. */
  vmImage?: string;
  /** Target VM Version, like m63. */
  targetVersion?: string;
  /** The time that this instance upgrade history entry is created. */
  createTime?: string;
  /** The snapshot of the boot disk of this notebook instance before upgrade. */
  snapshot?: string;
  /** The framework of this notebook instance. */
  framework?: string;
}

export const UpgradeHistoryEntry: Schema.Schema<UpgradeHistoryEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerImage: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    targetImage: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    vmImage: Schema.optional(Schema.String),
    targetVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    snapshot: Schema.optional(Schema.String),
    framework: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeHistoryEntry" });

export interface ContainerImage {
  /** Required. The path to the container image repository. For example: `gcr.io/{project_id}/{image_name}` */
  repository?: string;
  /** The tag of the container image. If not specified, this defaults to the latest tag. */
  tag?: string;
}

export const ContainerImage: Schema.Schema<ContainerImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContainerImage" });

export interface VmImage {
  /** Required. The name of the Google Cloud project that this VM image belongs to. Format: `{project_id}` */
  project?: string;
  /** Use VM image name to find the image. */
  imageName?: string;
  /** Use this VM image family to find the image; the newest image in this family will be used. */
  imageFamily?: string;
}

export const VmImage: Schema.Schema<VmImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String),
    imageName: Schema.optional(Schema.String),
    imageFamily: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmImage" });

export interface Environment {
  /** Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path. Example: `"gs://path-to-file/file-name"` */
  postStartupScript?: string;
  /** Output only. Name of this environment. Format: `projects/{project_id}/locations/{location}/environments/{environment_id}` */
  name?: string;
  /** Use a container image to start the notebook instance. */
  containerImage?: ContainerImage;
  /** Use a Compute Engine VM image to start the notebook instance. */
  vmImage?: VmImage;
  /** Display name of this environment for the UI. */
  displayName?: string;
  /** A brief description of this environment. */
  description?: string;
  /** Output only. The time at which this environment was created. */
  createTime?: string;
}

export const Environment: Schema.Schema<Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postStartupScript: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    containerImage: Schema.optional(ContainerImage),
    vmImage: Schema.optional(VmImage),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Environment" });

export interface SetInstanceLabelsRequest {
  /** Labels to apply to this instance. These can be later modified by the setLabels method */
  labels?: Record<string, string>;
}

export const SetInstanceLabelsRequest: Schema.Schema<SetInstanceLabelsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "SetInstanceLabelsRequest" });

export interface ReservationAffinity {
  /** Optional. Corresponds to the label values of reservation resource. */
  values?: ReadonlyArray<string>;
  /** Optional. Type of reservation to consume */
  consumeReservationType?:
    | "TYPE_UNSPECIFIED"
    | "NO_RESERVATION"
    | "ANY_RESERVATION"
    | "SPECIFIC_RESERVATION"
    | (string & {});
  /** Optional. Corresponds to the label key of reservation resource. */
  key?: string;
}

export const ReservationAffinity: Schema.Schema<ReservationAffinity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
    consumeReservationType: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReservationAffinity" });

export interface AcceleratorConfig {
  /** Type of this accelerator. */
  type?:
    | "ACCELERATOR_TYPE_UNSPECIFIED"
    | "NVIDIA_TESLA_K80"
    | "NVIDIA_TESLA_P100"
    | "NVIDIA_TESLA_V100"
    | "NVIDIA_TESLA_P4"
    | "NVIDIA_TESLA_T4"
    | "NVIDIA_TESLA_A100"
    | "NVIDIA_L4"
    | "NVIDIA_A100_80GB"
    | "NVIDIA_TESLA_T4_VWS"
    | "NVIDIA_TESLA_P100_VWS"
    | "NVIDIA_TESLA_P4_VWS"
    | "NVIDIA_H100_80GB"
    | "NVIDIA_H100_MEGA_80GB"
    | "TPU_V2"
    | "TPU_V3"
    | (string & {});
  /** Count of cores of this accelerator. */
  coreCount?: string;
}

export const AcceleratorConfig: Schema.Schema<AcceleratorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    coreCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "AcceleratorConfig" });

export interface InstanceMigrationEligibility {
  /** Output only. Certain configurations make the UmN ineligible for an automatic migration. A manual migration is required. */
  errors?: ReadonlyArray<"ERROR_UNSPECIFIED" | "DATAPROC_HUB" | (string & {})>;
  /** Output only. Certain configurations will be defaulted during the migration. */
  warnings?: ReadonlyArray<
    | "WARNING_UNSPECIFIED"
    | "UNSUPPORTED_MACHINE_TYPE"
    | "UNSUPPORTED_ACCELERATOR_TYPE"
    | "UNSUPPORTED_OS"
    | "NO_REMOVE_DATA_DISK"
    | "GCS_BACKUP"
    | "POST_STARTUP_SCRIPT"
    | (string & {})
  >;
}

export const InstanceMigrationEligibility: Schema.Schema<InstanceMigrationEligibility> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(Schema.String)),
    warnings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "InstanceMigrationEligibility" });

export interface GuestOsFeature {
  /** The ID of a supported feature. Read Enabling guest operating system features to see a list of available options. Valid values: * `FEATURE_TYPE_UNSPECIFIED` * `MULTI_IP_SUBNET` * `SECURE_BOOT` * `UEFI_COMPATIBLE` * `VIRTIO_SCSI_MULTIQUEUE` * `WINDOWS` */
  type?: string;
}

export const GuestOsFeature: Schema.Schema<GuestOsFeature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuestOsFeature" });

export interface Disk {
  /** The mode in which to attach this disk, either `READ_WRITE` or `READ_ONLY`. If not specified, the default is to attach the disk in `READ_WRITE` mode. Valid values: * `READ_ONLY` * `READ_WRITE` */
  mode?: string;
  /** Indicates the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance. Valid values: * `NVME` * `SCSI` */
  interface?: string;
  /** A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number. */
  index?: string;
  /** Indicates the type of the disk, either `SCRATCH` or `PERSISTENT`. Valid values: * `PERSISTENT` * `SCRATCH` */
  type?: string;
  /** A list of publicly visible licenses. Reserved for Google's use. A License represents billing and aggregate usage data for public and marketplace images. */
  licenses?: ReadonlyArray<string>;
  /** Indicates whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance). */
  autoDelete?: boolean;
  /** Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem. */
  boot?: boolean;
  /** Indicates the size of the disk in base-2 GB. */
  diskSizeGb?: string;
  /** Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options. */
  guestOsFeatures?: ReadonlyArray<GuestOsFeature>;
  /** Indicates a valid partial or full URL to an existing Persistent Disk resource. */
  source?: string;
  /** Type of the resource. Always compute#attachedDisk for attached disks. */
  kind?: string;
  /** Indicates a unique device name of your choice that is reflected into the `/dev/disk/by-id/google-*` tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine.This field is only applicable for persistent disks. */
  deviceName?: string;
}

export const Disk: Schema.Schema<Disk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
    interface: Schema.optional(Schema.String),
    index: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    licenses: Schema.optional(Schema.Array(Schema.String)),
    autoDelete: Schema.optional(Schema.Boolean),
    boot: Schema.optional(Schema.Boolean),
    diskSizeGb: Schema.optional(Schema.String),
    guestOsFeatures: Schema.optional(Schema.Array(GuestOsFeature)),
    source: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    deviceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Disk" });

export interface ShieldedInstanceConfig {
  /** Defines whether the instance has the vTPM enabled. Enabled by default. */
  enableVtpm?: boolean;
  /** Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default. */
  enableSecureBoot?: boolean;
  /** Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. Enabled by default. */
  enableIntegrityMonitoring?: boolean;
}

export const ShieldedInstanceConfig: Schema.Schema<ShieldedInstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableVtpm: Schema.optional(Schema.Boolean),
    enableSecureBoot: Schema.optional(Schema.Boolean),
    enableIntegrityMonitoring: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ShieldedInstanceConfig" });

export interface Instance {
  /** The name of the VPC that this instance is in. Format: `projects/{project_id}/global/networks/{network_id}` */
  network?: string;
  /** Input only. The KMS key used to encrypt the disks, only applicable if disk_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}` Learn more about [using your own encryption keys](/kms/docs/quickstart). */
  kmsKey?: string;
  /** Custom metadata to apply to this instance. For example, to specify a Cloud Storage bucket for automatic backup, you can use the `gcs-data-bucket` metadata tag. Format: `"--metadata=gcs-data-bucket=BUCKET"`. */
  metadata?: Record<string, string>;
  /** Labels to apply to this instance. These can be later modified by the setLabels method. */
  labels?: Record<string, string>;
  /** The name of the subnet that this instance is in. Format: `projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}` */
  subnet?: string;
  /** Output only. Instance update time. */
  updateTime?: string;
  /** Input only. The owner of this instance after creation. Format: `alias@example.com` Currently supports one owner only. If not specified, all of the service account users of your VM instance's service account can use the instance. */
  instanceOwners?: ReadonlyArray<string>;
  /** Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet. */
  nicType?: "UNSPECIFIED_NIC_TYPE" | "VIRTIO_NET" | "GVNIC" | (string & {});
  /** Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers. */
  customGpuDriverPath?: string;
  /** Input only. The type of the data disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`). */
  dataDiskType?:
    | "DISK_TYPE_UNSPECIFIED"
    | "PD_STANDARD"
    | "PD_SSD"
    | "PD_BALANCED"
    | "PD_EXTREME"
    | (string & {});
  /** Output only. Instance creation time. */
  createTime?: string;
  /** Required. The [Compute Engine machine type](https://cloud.google.com/compute/docs/machine-resource) of this instance. */
  machineType?: string;
  /** Whether the end user authorizes Google Cloud to install GPU driver on this instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs. */
  installGpuDriver?: boolean;
  /** Optional. The optional reservation affinity. Setting this field will apply the specified [Zonal Compute Reservation](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) to this notebook instance. */
  reservationAffinity?: ReservationAffinity;
  /** The hardware accelerator used on this instance. If you use accelerators, make sure that your configuration has [enough vCPUs and memory to support the `machine_type` you have selected](https://cloud.google.com/compute/docs/gpus/#gpus-list). */
  acceleratorConfig?: AcceleratorConfig;
  /** Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward */
  canIpForward?: boolean;
  /** Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (`gs://path-to-file/file-name`). */
  postStartupScript?: string;
  /** Optional. The Compute Engine network tags to add to runtime (see [Add network tags](https://cloud.google.com/vpc/docs/add-remove-network-tags)). */
  tags?: ReadonlyArray<string>;
  /** Output only. The proxy endpoint that is used to access the Jupyter notebook. */
  proxyUri?: string;
  /** Output only. Checks how feasible a migration from UmN to WbI is. */
  instanceMigrationEligibility?: InstanceMigrationEligibility;
  /** The upgrade history of this instance. */
  upgradeHistory?: ReadonlyArray<UpgradeHistoryEntry>;
  /** The service account on this instance, giving access to other Google Cloud services. You can use any service account within the same project, but you must have the service account user permission to use the instance. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. */
  serviceAccount?: string;
  /** If true, no external IP will be assigned to this instance. */
  noPublicIp?: boolean;
  /** Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. */
  diskEncryption?:
    | "DISK_ENCRYPTION_UNSPECIFIED"
    | "GMEK"
    | "CMEK"
    | (string & {});
  /** Output only. Bool indicating whether this notebook has been migrated to a Workbench Instance */
  migrated?: boolean;
  /** Use a Compute Engine VM image to start the notebook instance. */
  vmImage?: VmImage;
  /** Input only. The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB. If not specified, this defaults to 100. */
  bootDiskSizeGb?: string;
  /** If true, the notebook instance will not register with the proxy. */
  noProxyAccess?: boolean;
  /** Input only. If true, the data disk will not be auto deleted when deleting the instance. */
  noRemoveDataDisk?: boolean;
  /** Use a container image to start the notebook instance. */
  containerImage?: ContainerImage;
  /** Input only. The type of the boot disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`). */
  bootDiskType?:
    | "DISK_TYPE_UNSPECIFIED"
    | "PD_STANDARD"
    | "PD_SSD"
    | "PD_BALANCED"
    | "PD_EXTREME"
    | (string & {});
  /** Output only. Attached disks to notebook instance. */
  disks?: ReadonlyArray<Disk>;
  /** Output only. The state of this instance. */
  state?:
    | "STATE_UNSPECIFIED"
    | "STARTING"
    | "PROVISIONING"
    | "ACTIVE"
    | "STOPPING"
    | "STOPPED"
    | "DELETED"
    | "UPGRADING"
    | "INITIALIZING"
    | "REGISTERING"
    | "SUSPENDING"
    | "SUSPENDED"
    | (string & {});
  /** Input only. The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). You can choose the size of the data disk based on how big your notebooks and data are. If not specified, this defaults to 100. */
  dataDiskSizeGb?: string;
  /** Optional. The URIs of service account scopes to be included in Compute Engine instances. If not specified, the following [scopes](https://cloud.google.com/compute/docs/access/service-accounts#accesscopesiam) are defined: - https://www.googleapis.com/auth/cloud-platform - https://www.googleapis.com/auth/userinfo.email If not using default scopes, you need at least: https://www.googleapis.com/auth/compute */
  serviceAccountScopes?: ReadonlyArray<string>;
  /** Optional. Shielded VM configuration. [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). */
  shieldedInstanceConfig?: ShieldedInstanceConfig;
  /** Output only. Email address of entity that sent original CreateInstance request. */
  creator?: string;
  /** Output only. The name of this notebook instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name?: string;
}

export const Instance: Schema.Schema<Instance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    subnet: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    instanceOwners: Schema.optional(Schema.Array(Schema.String)),
    nicType: Schema.optional(Schema.String),
    customGpuDriverPath: Schema.optional(Schema.String),
    dataDiskType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    installGpuDriver: Schema.optional(Schema.Boolean),
    reservationAffinity: Schema.optional(ReservationAffinity),
    acceleratorConfig: Schema.optional(AcceleratorConfig),
    canIpForward: Schema.optional(Schema.Boolean),
    postStartupScript: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    proxyUri: Schema.optional(Schema.String),
    instanceMigrationEligibility: Schema.optional(InstanceMigrationEligibility),
    upgradeHistory: Schema.optional(Schema.Array(UpgradeHistoryEntry)),
    serviceAccount: Schema.optional(Schema.String),
    noPublicIp: Schema.optional(Schema.Boolean),
    diskEncryption: Schema.optional(Schema.String),
    migrated: Schema.optional(Schema.Boolean),
    vmImage: Schema.optional(VmImage),
    bootDiskSizeGb: Schema.optional(Schema.String),
    noProxyAccess: Schema.optional(Schema.Boolean),
    noRemoveDataDisk: Schema.optional(Schema.Boolean),
    containerImage: Schema.optional(ContainerImage),
    bootDiskType: Schema.optional(Schema.String),
    disks: Schema.optional(Schema.Array(Disk)),
    state: Schema.optional(Schema.String),
    dataDiskSizeGb: Schema.optional(Schema.String),
    serviceAccountScopes: Schema.optional(Schema.Array(Schema.String)),
    shieldedInstanceConfig: Schema.optional(ShieldedInstanceConfig),
    creator: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Instance" });

export interface ListInstancesResponse {
  /** Page token that can be used to continue listing from the last result in the next list call. */
  nextPageToken?: string;
  /** Locations that could not be reached. For example, `['us-west1-a', 'us-central1-b']`. A ListInstancesResponse will only contain either instances or unreachables, */
  unreachable?: ReadonlyArray<string>;
  /** A list of returned instances. */
  instances?: ReadonlyArray<Instance>;
}

export const ListInstancesResponse: Schema.Schema<ListInstancesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    instances: Schema.optional(Schema.Array(Instance)),
  }).annotate({ identifier: "ListInstancesResponse" });

export interface GetInstanceHealthResponse {
  /** Output only. Runtime health_state. */
  healthState?:
    | "HEALTH_STATE_UNSPECIFIED"
    | "HEALTHY"
    | "UNHEALTHY"
    | "AGENT_NOT_INSTALLED"
    | "AGENT_NOT_RUNNING"
    | (string & {});
  /** Output only. Additional information about instance health. Example: healthInfo": { "docker_proxy_agent_status": "1", "docker_status": "1", "jupyterlab_api_status": "-1", "jupyterlab_status": "-1", "updated": "2020-10-18 09:40:03.573409" } */
  healthInfo?: Record<string, string>;
}

export const GetInstanceHealthResponse: Schema.Schema<GetInstanceHealthResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    healthState: Schema.optional(Schema.String),
    healthInfo: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GetInstanceHealthResponse" });

export interface UpgradeRuntimeRequest {
  /** Idempotent request UUID. */
  requestId?: string;
}

export const UpgradeRuntimeRequest: Schema.Schema<UpgradeRuntimeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeRuntimeRequest" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface SetInstanceMachineTypeRequest {
  /** Required. The [Compute Engine machine type](https://cloud.google.com/compute/docs/machine-resource). */
  machineType?: string;
}

export const SetInstanceMachineTypeRequest: Schema.Schema<SetInstanceMachineTypeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetInstanceMachineTypeRequest" });

export interface LocalDiskInitializeParams {
  /** Optional. Specifies the size of the disk in base-2 GB. If not specified, the disk will be the same size as the image (usually 10GB). If specified, the size must be equal to or larger than 10GB. Default 100 GB. */
  diskSizeGb?: string;
  /** Optional. Provide this property when creating the disk. */
  description?: string;
  /** Input only. The type of the boot disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`). */
  diskType?:
    | "DISK_TYPE_UNSPECIFIED"
    | "PD_STANDARD"
    | "PD_SSD"
    | "PD_BALANCED"
    | "PD_EXTREME"
    | (string & {});
  /** Optional. Specifies the disk name. If not specified, the default is to use the name of the instance. If the disk with the instance name exists already in the given zone/region, a new name will be automatically generated. */
  diskName?: string;
  /** Optional. Labels to apply to this disk. These can be later modified by the disks.setLabels method. This field is only applicable for persistent disks. */
  labels?: Record<string, string>;
}

export const LocalDiskInitializeParams: Schema.Schema<LocalDiskInitializeParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskSizeGb: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    diskType: Schema.optional(Schema.String),
    diskName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "LocalDiskInitializeParams" });

export interface RuntimeGuestOsFeature {
  /** The ID of a supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Valid values: * `FEATURE_TYPE_UNSPECIFIED` * `MULTI_IP_SUBNET` * `SECURE_BOOT` * `UEFI_COMPATIBLE` * `VIRTIO_SCSI_MULTIQUEUE` * `WINDOWS` */
  type?: string;
}

export const RuntimeGuestOsFeature: Schema.Schema<RuntimeGuestOsFeature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "RuntimeGuestOsFeature" });

export interface LocalDisk {
  /** Input only. Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new instance. This property is mutually exclusive with the source property; you can only define one or the other, but not both. */
  initializeParams?: LocalDiskInitializeParams;
  /** Output only. Any valid publicly visible licenses. */
  licenses?: ReadonlyArray<string>;
  /** Optional. Output only. Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance). */
  autoDelete?: boolean;
  /** Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance. Valid values: * `NVME` * `SCSI` */
  interface?: string;
  /** The mode in which to attach this disk, either `READ_WRITE` or `READ_ONLY`. If not specified, the default is to attach the disk in `READ_WRITE` mode. Valid values: * `READ_ONLY` * `READ_WRITE` */
  mode?: string;
  /** Specifies the type of the disk, either `SCRATCH` or `PERSISTENT`. If not specified, the default is `PERSISTENT`. Valid values: * `PERSISTENT` * `SCRATCH` */
  type?: string;
  /** Output only. A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number. */
  index?: number;
  /** Optional. Output only. Specifies a unique device name of your choice that is reflected into the `/dev/disk/by-id/google-*` tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks. */
  deviceName?: string;
  /** Optional. Output only. Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem. */
  boot?: boolean;
  /** Output only. Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options. */
  guestOsFeatures?: ReadonlyArray<RuntimeGuestOsFeature>;
  /** Specifies a valid partial or full URL to an existing Persistent Disk resource. */
  source?: string;
  /** Output only. Type of the resource. Always compute#attachedDisk for attached disks. */
  kind?: string;
}

export const LocalDisk: Schema.Schema<LocalDisk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    initializeParams: Schema.optional(LocalDiskInitializeParams),
    licenses: Schema.optional(Schema.Array(Schema.String)),
    autoDelete: Schema.optional(Schema.Boolean),
    interface: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    index: Schema.optional(Schema.Number),
    deviceName: Schema.optional(Schema.String),
    boot: Schema.optional(Schema.Boolean),
    guestOsFeatures: Schema.optional(Schema.Array(RuntimeGuestOsFeature)),
    source: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "LocalDisk" });

export interface EncryptionConfig {
  /** The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks. It has the following format: `projects/{PROJECT_ID}/locations/{REGION}/keyRings/{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}` */
  kmsKey?: string;
}

export const EncryptionConfig: Schema.Schema<EncryptionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptionConfig" });

export interface BootImage {}

export const BootImage: Schema.Schema<BootImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "BootImage",
  });

export interface RuntimeShieldedInstanceConfig {
  /** Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default. */
  enableSecureBoot?: boolean;
  /** Defines whether the instance has the vTPM enabled. Enabled by default. */
  enableVtpm?: boolean;
  /** Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. Enabled by default. */
  enableIntegrityMonitoring?: boolean;
}

export const RuntimeShieldedInstanceConfig: Schema.Schema<RuntimeShieldedInstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableSecureBoot: Schema.optional(Schema.Boolean),
    enableVtpm: Schema.optional(Schema.Boolean),
    enableIntegrityMonitoring: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RuntimeShieldedInstanceConfig" });

export interface RuntimeAcceleratorConfig {
  /** Accelerator model. */
  type?:
    | "ACCELERATOR_TYPE_UNSPECIFIED"
    | "NVIDIA_TESLA_K80"
    | "NVIDIA_TESLA_P100"
    | "NVIDIA_TESLA_V100"
    | "NVIDIA_TESLA_P4"
    | "NVIDIA_TESLA_T4"
    | "NVIDIA_TESLA_A100"
    | "NVIDIA_L4"
    | "TPU_V2"
    | "TPU_V3"
    | "NVIDIA_TESLA_T4_VWS"
    | "NVIDIA_TESLA_P100_VWS"
    | "NVIDIA_TESLA_P4_VWS"
    | (string & {});
  /** Count of cores of this accelerator. */
  coreCount?: string;
}

export const RuntimeAcceleratorConfig: Schema.Schema<RuntimeAcceleratorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    coreCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "RuntimeAcceleratorConfig" });

export interface VirtualMachineConfig {
  /** Optional. Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range *name* if it's assigned. Example: managed-notebooks-range-c PEERING_RANGE_NAME_3=managed-notebooks-range-c gcloud compute addresses create $PEERING_RANGE_NAME_3 \ --global \ --prefix-length=24 \ --description="Google Cloud Managed Notebooks Range 24 c" \ --network=$NETWORK \ --addresses=192.168.0.0 \ --purpose=VPC_PEERING Field value will be: `managed-notebooks-range-c` */
  reservedIpRange?: string;
  /** Output only. The zone where the virtual machine is located. If using regional request, the notebooks service will pick a location in the corresponding runtime region. On a get request, zone will always be present. Example: * `us-central1-b` */
  zone?: string;
  /** Required. Data disk option configuration settings. */
  dataDisk?: LocalDisk;
  /** Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork. If neither `network` nor `subnet` is specified, the "default" network of the project is used, if it exists. A full URL or partial URI. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default` * `projects/[project_id]/global/networks/default` Runtimes are managed resources inside Google Infrastructure. Runtimes support the following network configurations: * Google Managed Network (Network & subnet are empty) * Consumer Project VPC (network & subnet are required). Requires configuring Private Service Access. * Shared VPC (network & subnet are required). Requires configuring Private Service Access. */
  network?: string;
  /** Optional. Encryption settings for virtual machine data disk. */
  encryptionConfig?: EncryptionConfig;
  /** Optional. The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)). */
  metadata?: Record<string, string>;
  /** Output only. The Compute Engine guest attributes. (see [Project and instance guest attributes](https://cloud.google.com/compute/docs/storing-retrieving-metadata#guest_attributes)). */
  guestAttributes?: Record<string, string>;
  /** Optional. Boot image metadata used for runtime upgradeability. */
  bootImage?: BootImage;
  /** Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network. A full URL or partial URI are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0` * `projects/[project_id]/regions/us-east1/subnetworks/sub0` */
  subnet?: string;
  /** Optional. If true, runtime will only have internal IP addresses. By default, runtimes are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each vm. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all dependencies must be configured to be accessible without external IP addresses. */
  internalIpOnly?: boolean;
  /** Optional. The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster. */
  labels?: Record<string, string>;
  /** Optional. Use a list of container images to use as Kernels in the notebook instance. */
  containerImages?: ReadonlyArray<ContainerImage>;
  /** Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet. */
  nicType?: "UNSPECIFIED_NIC_TYPE" | "VIRTIO_NET" | "GVNIC" | (string & {});
  /** Optional. Shielded VM Instance configuration settings. */
  shieldedInstanceConfig?: RuntimeShieldedInstanceConfig;
  /** Required. The Compute Engine machine type used for runtimes. Short name is valid. Examples: * `n1-standard-2` * `e2-standard-8` */
  machineType?: string;
  /** Optional. The Compute Engine accelerator configuration for this runtime. */
  acceleratorConfig?: RuntimeAcceleratorConfig;
  /** Optional. The Compute Engine network tags to add to runtime (see [Add network tags](https://cloud.google.com/vpc/docs/add-remove-network-tags)). */
  tags?: ReadonlyArray<string>;
}

export const VirtualMachineConfig: Schema.Schema<VirtualMachineConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservedIpRange: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    dataDisk: Schema.optional(LocalDisk),
    network: Schema.optional(Schema.String),
    encryptionConfig: Schema.optional(EncryptionConfig),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    guestAttributes: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    bootImage: Schema.optional(BootImage),
    subnet: Schema.optional(Schema.String),
    internalIpOnly: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    containerImages: Schema.optional(Schema.Array(ContainerImage)),
    nicType: Schema.optional(Schema.String),
    shieldedInstanceConfig: Schema.optional(RuntimeShieldedInstanceConfig),
    machineType: Schema.optional(Schema.String),
    acceleratorConfig: Schema.optional(RuntimeAcceleratorConfig),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VirtualMachineConfig" });

export interface VirtualMachine {
  /** Output only. The user-friendly name of the Managed Compute Engine instance. */
  instanceName?: string;
  /** Virtual Machine configuration settings. */
  virtualMachineConfig?: VirtualMachineConfig;
  /** Output only. The unique identifier of the Managed Compute Engine instance. */
  instanceId?: string;
}

export const VirtualMachine: Schema.Schema<VirtualMachine> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceName: Schema.optional(Schema.String),
    virtualMachineConfig: Schema.optional(VirtualMachineConfig),
    instanceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "VirtualMachine" });

export interface Event {
  /** Optional. Event details. This field is used to pass event information. */
  details?: Record<string, string>;
  /** Event report time. */
  reportTime?: string;
  /** Event type. */
  type?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "IDLE"
    | "HEARTBEAT"
    | "HEALTH"
    | "MAINTENANCE"
    | (string & {});
}

export const Event: Schema.Schema<Event> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    reportTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Event" });

export interface ReportRuntimeEventRequest {
  /** Required. The Event to be reported. */
  event?: Event;
  /** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
  vmId?: string;
}

export const ReportRuntimeEventRequest: Schema.Schema<ReportRuntimeEventRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Event),
    vmId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportRuntimeEventRequest" });

export interface DiagnoseInstanceRequest {
  /** Required. Defines flags that are used to run the diagnostic tool */
  diagnosticConfig?: DiagnosticConfig;
  /** Optional. Maximum amount of time in minutes before the operation times out. */
  timeoutMinutes?: number;
}

export const DiagnoseInstanceRequest: Schema.Schema<DiagnoseInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diagnosticConfig: Schema.optional(DiagnosticConfig),
    timeoutMinutes: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DiagnoseInstanceRequest" });

export interface RefreshRuntimeTokenInternalRequest {
  /** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
  vmId?: string;
}

export const RefreshRuntimeTokenInternalRequest: Schema.Schema<RefreshRuntimeTokenInternalRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RefreshRuntimeTokenInternalRequest" });

export interface TriggerScheduleRequest {}

export const TriggerScheduleRequest: Schema.Schema<TriggerScheduleRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "TriggerScheduleRequest",
  });

export interface Location {
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

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

export interface RuntimeSoftwareConfig {
  /** Output only. Bool indicating whether an newer image is available in an image family. */
  upgradeable?: boolean;
  /** Bool indicating whether mixer client should be disabled. Default: False */
  mixerDisabled?: boolean;
  /** Install Nvidia Driver automatically. Default: True */
  installGpuDriver?: boolean;
  /** Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers. */
  customGpuDriverPath?: string;
  /** Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (`gs://path-to-file/file-name`). */
  postStartupScript?: string;
  /** Bool indicating whether JupyterLab terminal will be available or not. Default: False */
  disableTerminal?: boolean;
  /** Behavior for the post startup script. */
  postStartupScriptBehavior?:
    | "POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED"
    | "RUN_EVERY_START"
    | "DOWNLOAD_AND_RUN_EVERY_START"
    | (string & {});
  /** Cron expression in UTC timezone, used to schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron). */
  notebookUpgradeSchedule?: string;
  /** Time in minutes to wait before shutting down runtime. Default: 180 minutes */
  idleShutdownTimeout?: number;
  /** Output only. version of boot image such as M100, from release label of the image. */
  version?: string;
  /** Runtime will automatically shutdown after idle_shutdown_time. Default: True */
  idleShutdown?: boolean;
  /** Optional. Use a list of container images to use as Kernels in the notebook instance. */
  kernels?: ReadonlyArray<ContainerImage>;
  /** Verifies core internal services are running. Default: True */
  enableHealthMonitoring?: boolean;
}

export const RuntimeSoftwareConfig: Schema.Schema<RuntimeSoftwareConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upgradeable: Schema.optional(Schema.Boolean),
    mixerDisabled: Schema.optional(Schema.Boolean),
    installGpuDriver: Schema.optional(Schema.Boolean),
    customGpuDriverPath: Schema.optional(Schema.String),
    postStartupScript: Schema.optional(Schema.String),
    disableTerminal: Schema.optional(Schema.Boolean),
    postStartupScriptBehavior: Schema.optional(Schema.String),
    notebookUpgradeSchedule: Schema.optional(Schema.String),
    idleShutdownTimeout: Schema.optional(Schema.Number),
    version: Schema.optional(Schema.String),
    idleShutdown: Schema.optional(Schema.Boolean),
    kernels: Schema.optional(Schema.Array(ContainerImage)),
    enableHealthMonitoring: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RuntimeSoftwareConfig" });

export interface RuntimeMigrationEligibility {
  /** Output only. Certain configurations make the GmN ineligible for an automatic migration. A manual migration is required. */
  errors?: ReadonlyArray<
    "ERROR_UNSPECIFIED" | "CUSTOM_CONTAINER" | (string & {})
  >;
  /** Output only. Certain configurations will be defaulted during the migration. */
  warnings?: ReadonlyArray<
    | "WARNING_UNSPECIFIED"
    | "UNSUPPORTED_ACCELERATOR_TYPE"
    | "UNSUPPORTED_OS"
    | "RESERVED_IP_RANGE"
    | "GOOGLE_MANAGED_NETWORK"
    | "POST_STARTUP_SCRIPT"
    | "SINGLE_USER"
    | (string & {})
  >;
}

export const RuntimeMigrationEligibility: Schema.Schema<RuntimeMigrationEligibility> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(Schema.String)),
    warnings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RuntimeMigrationEligibility" });

export interface RuntimeMetrics {
  /** Output only. The system metrics. */
  systemMetrics?: Record<string, string>;
}

export const RuntimeMetrics: Schema.Schema<RuntimeMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    systemMetrics: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "RuntimeMetrics" });

export interface RuntimeAccessConfig {
  /** The type of access mode this instance. */
  accessType?:
    | "RUNTIME_ACCESS_TYPE_UNSPECIFIED"
    | "SINGLE_USER"
    | "SERVICE_ACCOUNT"
    | (string & {});
  /** The owner of this runtime after creation. Format: `alias@example.com` Currently supports one owner only. */
  runtimeOwner?: string;
  /** Output only. The proxy endpoint that is used to access the runtime. */
  proxyUri?: string;
}

export const RuntimeAccessConfig: Schema.Schema<RuntimeAccessConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessType: Schema.optional(Schema.String),
    runtimeOwner: Schema.optional(Schema.String),
    proxyUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "RuntimeAccessConfig" });

export interface Runtime {
  /** The config settings for software inside the runtime. */
  softwareConfig?: RuntimeSoftwareConfig;
  /** Output only. Checks how feasible a migration from GmN to WbI is. */
  runtimeMigrationEligibility?: RuntimeMigrationEligibility;
  /** Use a Compute Engine VM image to start the managed notebook instance. */
  virtualMachine?: VirtualMachine;
  /** Output only. Runtime state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "STARTING"
    | "PROVISIONING"
    | "ACTIVE"
    | "STOPPING"
    | "STOPPED"
    | "DELETING"
    | "UPGRADING"
    | "INITIALIZING"
    | (string & {});
  /** Output only. Runtime update time. */
  updateTime?: string;
  /** Output only. Runtime health_state. */
  healthState?:
    | "HEALTH_STATE_UNSPECIFIED"
    | "HEALTHY"
    | "UNHEALTHY"
    | "AGENT_NOT_INSTALLED"
    | "AGENT_NOT_RUNNING"
    | (string & {});
  /** Output only. Contains Runtime daemon metrics such as Service status and JupyterLab stats. */
  metrics?: RuntimeMetrics;
  /** The config settings for accessing runtime. */
  accessConfig?: RuntimeAccessConfig;
  /** Output only. The resource name of the runtime. Format: `projects/{project}/locations/{location}/runtimes/{runtimeId}` */
  name?: string;
  /** Optional. The labels to associate with this Managed Notebook or Runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster. */
  labels?: Record<string, string>;
  /** Output only. Runtime creation time. */
  createTime?: string;
  /** Output only. Bool indicating whether this notebook has been migrated to a Workbench Instance */
  migrated?: boolean;
}

export const Runtime: Schema.Schema<Runtime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    softwareConfig: Schema.optional(RuntimeSoftwareConfig),
    runtimeMigrationEligibility: Schema.optional(RuntimeMigrationEligibility),
    virtualMachine: Schema.optional(VirtualMachine),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    healthState: Schema.optional(Schema.String),
    metrics: Schema.optional(RuntimeMetrics),
    accessConfig: Schema.optional(RuntimeAccessConfig),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    migrated: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Runtime" });

export interface ListRuntimesResponse {
  /** Locations that could not be reached. For example, `['us-west1', 'us-central1']`. A ListRuntimesResponse will only contain either runtimes or unreachables, */
  unreachable?: ReadonlyArray<string>;
  /** Page token that can be used to continue listing from the last result in the next list call. */
  nextPageToken?: string;
  /** A list of returned Runtimes. */
  runtimes?: ReadonlyArray<Runtime>;
}

export const ListRuntimesResponse: Schema.Schema<ListRuntimesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    runtimes: Schema.optional(Schema.Array(Runtime)),
  }).annotate({ identifier: "ListRuntimesResponse" });

export interface UpdateInstanceMetadataItemsRequest {
  /** Metadata items to add/update for the instance. */
  items?: Record<string, string>;
}

export const UpdateInstanceMetadataItemsRequest: Schema.Schema<UpdateInstanceMetadataItemsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "UpdateInstanceMetadataItemsRequest" });

export interface IsInstanceUpgradeableResponse {
  /** The version this instance will be upgraded to if calling the upgrade endpoint. This field will only be populated if field upgradeable is true. */
  upgradeVersion?: string;
  /** Additional information about upgrade. */
  upgradeInfo?: string;
  /** If an instance is upgradeable. */
  upgradeable?: boolean;
  /** The new image self link this instance will be upgraded to if calling the upgrade endpoint. This field will only be populated if field upgradeable is true. */
  upgradeImage?: string;
}

export const IsInstanceUpgradeableResponse: Schema.Schema<IsInstanceUpgradeableResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upgradeVersion: Schema.optional(Schema.String),
    upgradeInfo: Schema.optional(Schema.String),
    upgradeable: Schema.optional(Schema.Boolean),
    upgradeImage: Schema.optional(Schema.String),
  }).annotate({ identifier: "IsInstanceUpgradeableResponse" });

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
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    members: Schema.optional(Schema.Array(Schema.String)),
    role: Schema.optional(Schema.String),
    condition: Schema.optional(Expr),
  }).annotate({ identifier: "Binding" });

export interface UpgradeInstanceRequest {
  /** Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance. */
  type?:
    | "UPGRADE_TYPE_UNSPECIFIED"
    | "UPGRADE_FRAMEWORK"
    | "UPGRADE_OS"
    | "UPGRADE_CUDA"
    | "UPGRADE_ALL"
    | (string & {});
}

export const UpgradeInstanceRequest: Schema.Schema<UpgradeInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeInstanceRequest" });

export interface UpgradeInstanceInternalRequest {
  /** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
  vmId?: string;
  /** Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance. */
  type?:
    | "UPGRADE_TYPE_UNSPECIFIED"
    | "UPGRADE_FRAMEWORK"
    | "UPGRADE_OS"
    | "UPGRADE_CUDA"
    | "UPGRADE_ALL"
    | (string & {});
}

export const UpgradeInstanceInternalRequest: Schema.Schema<UpgradeInstanceInternalRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeInstanceInternalRequest" });

export interface RegisterInstanceRequest {
  /** Required. User defined unique ID of this instance. The `instance_id` must be 1 to 63 characters long and contain only lowercase letters, numeric characters, and dashes. The first character must be a lowercase letter and the last character cannot be a dash. */
  instanceId?: string;
}

export const RegisterInstanceRequest: Schema.Schema<RegisterInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RegisterInstanceRequest" });

export interface Policy {
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bindings: Schema.optional(Schema.Array(Binding)),
    etag: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface ReportInstanceEventRequest {
  /** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
  vmId?: string;
  /** Required. The Event to be reported. */
  event?: Event;
}

export const ReportInstanceEventRequest: Schema.Schema<ReportInstanceEventRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmId: Schema.optional(Schema.String),
    event: Schema.optional(Event),
  }).annotate({ identifier: "ReportInstanceEventRequest" });

export interface UpdateInstanceConfigRequest {
  /** The instance configurations to be updated. */
  config?: InstanceConfig;
}

export const UpdateInstanceConfigRequest: Schema.Schema<UpdateInstanceConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(InstanceConfig),
  }).annotate({ identifier: "UpdateInstanceConfigRequest" });

export interface StopInstanceRequest {}

export const StopInstanceRequest: Schema.Schema<StopInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StopInstanceRequest",
  });

export interface StartRuntimeRequest {
  /** Idempotent request UUID. */
  requestId?: string;
}

export const StartRuntimeRequest: Schema.Schema<StartRuntimeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "StartRuntimeRequest" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface StartInstanceRequest {}

export const StartInstanceRequest: Schema.Schema<StartInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StartInstanceRequest",
  });

export interface ListEnvironmentsResponse {
  /** A page token that can be used to continue listing from the last result in the next list call. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A list of returned environments. */
  environments?: ReadonlyArray<Environment>;
}

export const ListEnvironmentsResponse: Schema.Schema<ListEnvironmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    environments: Schema.optional(Schema.Array(Environment)),
  }).annotate({ identifier: "ListEnvironmentsResponse" });

export interface SwitchRuntimeRequest {
  /** accelerator config. */
  acceleratorConfig?: RuntimeAcceleratorConfig;
  /** Idempotent request UUID. */
  requestId?: string;
  /** machine type. */
  machineType?: string;
}

export const SwitchRuntimeRequest: Schema.Schema<SwitchRuntimeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acceleratorConfig: Schema.optional(RuntimeAcceleratorConfig),
    requestId: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SwitchRuntimeRequest" });

export interface SetInstanceAcceleratorRequest {
  /** Required. Type of this accelerator. */
  type?:
    | "ACCELERATOR_TYPE_UNSPECIFIED"
    | "NVIDIA_TESLA_K80"
    | "NVIDIA_TESLA_P100"
    | "NVIDIA_TESLA_V100"
    | "NVIDIA_TESLA_P4"
    | "NVIDIA_TESLA_T4"
    | "NVIDIA_TESLA_A100"
    | "NVIDIA_L4"
    | "NVIDIA_A100_80GB"
    | "NVIDIA_TESLA_T4_VWS"
    | "NVIDIA_TESLA_P100_VWS"
    | "NVIDIA_TESLA_P4_VWS"
    | "NVIDIA_H100_80GB"
    | "NVIDIA_H100_MEGA_80GB"
    | "TPU_V2"
    | "TPU_V3"
    | (string & {});
  /** Required. Count of cores of this accelerator. Note that not all combinations of `type` and `core_count` are valid. See [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported. */
  coreCount?: string;
}

export const SetInstanceAcceleratorRequest: Schema.Schema<SetInstanceAcceleratorRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    coreCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetInstanceAcceleratorRequest" });

export interface ReportInstanceInfoRequest {
  /** The metadata reported to Notebooks API. This will be merged to the instance metadata store */
  metadata?: Record<string, string>;
  /** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
  vmId?: string;
}

export const ReportInstanceInfoRequest: Schema.Schema<ReportInstanceInfoRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    vmId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportInstanceInfoRequest" });

export interface UpdateShieldedInstanceConfigRequest {
  /** ShieldedInstance configuration to be updated. */
  shieldedInstanceConfig?: ShieldedInstanceConfig;
}

export const UpdateShieldedInstanceConfigRequest: Schema.Schema<UpdateShieldedInstanceConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shieldedInstanceConfig: Schema.optional(ShieldedInstanceConfig),
  }).annotate({ identifier: "UpdateShieldedInstanceConfigRequest" });

export interface OperationMetadata {
  /** The time the operation was created. */
  createTime?: string;
  /** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Server-defined resource path for the target of the operation. */
  target?: string;
  /** Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** API endpoint name of this operation. */
  endpoint?: string;
  /** Name of the verb executed by the operation. */
  verb?: string;
  /** The time the operation finished running. */
  endTime?: string;
  /** API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    endpoint: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface RefreshRuntimeTokenInternalResponse {
  /** The OAuth 2.0 access token. */
  accessToken?: string;
  /** Output only. Token expiration time. */
  expireTime?: string;
}

export const RefreshRuntimeTokenInternalResponse: Schema.Schema<RefreshRuntimeTokenInternalResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessToken: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "RefreshRuntimeTokenInternalResponse" });

export interface DiagnoseRuntimeRequest {
  /** Required. Defines flags that are used to run the diagnostic tool */
  diagnosticConfig?: DiagnosticConfig;
  /** Optional. Maximum amount of time in minutes before the operation times out. */
  timeoutMinutes?: number;
}

export const DiagnoseRuntimeRequest: Schema.Schema<DiagnoseRuntimeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diagnosticConfig: Schema.optional(DiagnosticConfig),
    timeoutMinutes: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DiagnoseRuntimeRequest" });

export interface UpdateInstanceMetadataItemsResponse {
  /** Map of items that were added/updated to/in the metadata. */
  items?: Record<string, string>;
}

export const UpdateInstanceMetadataItemsResponse: Schema.Schema<UpdateInstanceMetadataItemsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "UpdateInstanceMetadataItemsResponse" });

export interface ListExecutionsResponse {
  /** A list of returned instances. */
  executions?: ReadonlyArray<Execution>;
  /** Executions IDs that could not be reached. For example: ['projects/{project_id}/location/{location}/executions/imagenet_test1', 'projects/{project_id}/location/{location}/executions/classifier_train1'] */
  unreachable?: ReadonlyArray<string>;
  /** Page token that can be used to continue listing from the last result in the next list call. */
  nextPageToken?: string;
}

export const ListExecutionsResponse: Schema.Schema<ListExecutionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executions: Schema.optional(Schema.Array(Execution)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListExecutionsResponse" });

export interface StopRuntimeRequest {
  /** Idempotent request UUID. */
  requestId?: string;
}

export const StopRuntimeRequest: Schema.Schema<StopRuntimeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "StopRuntimeRequest" });

export interface MigrateRuntimeRequest {
  /** Optional. The service account to be included in the Compute Engine instance of the new Workbench Instance when the Runtime uses "single user only" mode for permission. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. When the Runtime uses service account mode for permission, it will reuse the same service account, and this field must be empty. */
  serviceAccount?: string;
  /** Optional. Specifies the behavior of post startup script during migration. */
  postStartupScriptOption?:
    | "POST_STARTUP_SCRIPT_OPTION_UNSPECIFIED"
    | "POST_STARTUP_SCRIPT_OPTION_SKIP"
    | "POST_STARTUP_SCRIPT_OPTION_RERUN"
    | (string & {});
  /** Optional. Name of the subnet that the new Instance is in. This is required if the Runtime uses google-managed network. If the Runtime uses customer-owned network, it will reuse the same subnet, and this field must be empty. Format: `projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}` */
  subnet?: string;
  /** Optional. Name of the VPC that the new Instance is in. This is required if the Runtime uses google-managed network. If the Runtime uses customer-owned network, it will reuse the same VPC, and this field must be empty. Format: `projects/{project_id}/global/networks/{network_id}` */
  network?: string;
  /** Optional. Idempotent request UUID. */
  requestId?: string;
}

export const MigrateRuntimeRequest: Schema.Schema<MigrateRuntimeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
    postStartupScriptOption: Schema.optional(Schema.String),
    subnet: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "MigrateRuntimeRequest" });

export interface MigrateInstanceRequest {
  /** Optional. Specifies the behavior of post startup script during migration. */
  postStartupScriptOption?:
    | "POST_STARTUP_SCRIPT_OPTION_UNSPECIFIED"
    | "POST_STARTUP_SCRIPT_OPTION_SKIP"
    | "POST_STARTUP_SCRIPT_OPTION_RERUN"
    | (string & {});
}

export const MigrateInstanceRequest: Schema.Schema<MigrateInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postStartupScriptOption: Schema.optional(Schema.String),
  }).annotate({ identifier: "MigrateInstanceRequest" });

export interface RollbackInstanceRequest {
  /** Required. The snapshot for rollback. Example: `projects/test-project/global/snapshots/krwlzipynril`. */
  targetSnapshot?: string;
}

export const RollbackInstanceRequest: Schema.Schema<RollbackInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetSnapshot: Schema.optional(Schema.String),
  }).annotate({ identifier: "RollbackInstanceRequest" });

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
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
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

export interface TestIamPermissionsProjectsLocationsRuntimesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsRuntimesRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsRuntimesRequest>;

export type TestIamPermissionsProjectsLocationsRuntimesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsRuntimes: API.OperationMethod<
  TestIamPermissionsProjectsLocationsRuntimesRequest,
  TestIamPermissionsProjectsLocationsRuntimesResponse,
  TestIamPermissionsProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsRuntimesRequest,
  output: TestIamPermissionsProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRuntimesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` */
  name: string;
  /** Idempotent request UUID. */
  requestId?: string;
}

export const DeleteProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRuntimesRequest>;

export type DeleteProjectsLocationsRuntimesResponse = Operation;
export const DeleteProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Runtime. */
export const deleteProjectsLocationsRuntimes: API.OperationMethod<
  DeleteProjectsLocationsRuntimesRequest,
  DeleteProjectsLocationsRuntimesResponse,
  DeleteProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRuntimesRequest,
  output: DeleteProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetProjectsLocationsRuntimesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` */
  name: string;
  /** Request body */
  body?: ResetRuntimeRequest;
}

export const ResetProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResetRuntimeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:reset", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ResetProjectsLocationsRuntimesRequest>;

export type ResetProjectsLocationsRuntimesResponse = Operation;
export const ResetProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ResetProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets a Managed Notebook Runtime. */
export const resetProjectsLocationsRuntimes: API.OperationMethod<
  ResetProjectsLocationsRuntimesRequest,
  ResetProjectsLocationsRuntimesResponse,
  ResetProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetProjectsLocationsRuntimesRequest,
  output: ResetProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsRuntimesRequest {
  /** Required. Format: `parent=projects/{project_id}/locations/{location}` */
  parent: string;
  /** Required. User-defined unique ID of this Runtime. */
  runtimeId?: string;
  /** Idempotent request UUID. */
  requestId?: string;
  /** Request body */
  body?: Runtime;
}

export const CreateProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    runtimeId: Schema.optional(Schema.String).pipe(T.HttpQuery("runtimeId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Runtime).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/runtimes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRuntimesRequest>;

export type CreateProjectsLocationsRuntimesResponse = Operation;
export const CreateProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Runtime in a given project and location. */
export const createProjectsLocationsRuntimes: API.OperationMethod<
  CreateProjectsLocationsRuntimesRequest,
  CreateProjectsLocationsRuntimesResponse,
  CreateProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRuntimesRequest,
  output: CreateProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsRuntimesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsRuntimesRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsRuntimesRequest>;

export type SetIamPolicyProjectsLocationsRuntimesResponse = Policy;
export const SetIamPolicyProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsRuntimes: API.OperationMethod<
  SetIamPolicyProjectsLocationsRuntimesRequest,
  SetIamPolicyProjectsLocationsRuntimesResponse,
  SetIamPolicyProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsRuntimesRequest,
  output: SetIamPolicyProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StopProjectsLocationsRuntimesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` */
  name: string;
  /** Request body */
  body?: StopRuntimeRequest;
}

export const StopProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StopRuntimeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StopProjectsLocationsRuntimesRequest>;

export type StopProjectsLocationsRuntimesResponse = Operation;
export const StopProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StopProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance */
export const stopProjectsLocationsRuntimes: API.OperationMethod<
  StopProjectsLocationsRuntimesRequest,
  StopProjectsLocationsRuntimesResponse,
  StopProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopProjectsLocationsRuntimesRequest,
  output: StopProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRuntimesRequest {
  /** A previous returned page token that can be used to continue listing from the last result. */
  pageToken?: string;
  /** Optional. Sort results. Supported values are "name", "name desc" or "" (unsorted). */
  orderBy?: string;
  /** Maximum return size of the list call. */
  pageSize?: number;
  /** Optional. List filter. */
  filter?: string;
  /** Required. Format: `parent=projects/{project_id}/locations/{location}` */
  parent: string;
}

export const ListProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/runtimes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRuntimesRequest>;

export type ListProjectsLocationsRuntimesResponse = ListRuntimesResponse;
export const ListProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRuntimesResponse;

export type ListProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Runtimes in a given project and location. */
export const listProjectsLocationsRuntimes: API.PaginatedOperationMethod<
  ListProjectsLocationsRuntimesRequest,
  ListProjectsLocationsRuntimesResponse,
  ListProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRuntimesRequest,
  output: ListProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsRuntimesRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsRuntimesRequest>;

export type GetIamPolicyProjectsLocationsRuntimesResponse = Policy;
export const GetIamPolicyProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsRuntimes: API.OperationMethod<
  GetIamPolicyProjectsLocationsRuntimesRequest,
  GetIamPolicyProjectsLocationsRuntimesResponse,
  GetIamPolicyProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsRuntimesRequest,
  output: GetIamPolicyProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden],
}));

export interface StartProjectsLocationsRuntimesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` */
  name: string;
  /** Request body */
  body?: StartRuntimeRequest;
}

export const StartProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StartRuntimeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:start", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StartProjectsLocationsRuntimesRequest>;

export type StartProjectsLocationsRuntimesResponse = Operation;
export const StartProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StartProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance */
export const startProjectsLocationsRuntimes: API.OperationMethod<
  StartProjectsLocationsRuntimesRequest,
  StartProjectsLocationsRuntimesResponse,
  StartProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartProjectsLocationsRuntimesRequest,
  output: StartProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RefreshRuntimeTokenInternalProjectsLocationsRuntimesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` */
  name: string;
  /** Request body */
  body?: RefreshRuntimeTokenInternalRequest;
}

export const RefreshRuntimeTokenInternalProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RefreshRuntimeTokenInternalRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:refreshRuntimeTokenInternal",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RefreshRuntimeTokenInternalProjectsLocationsRuntimesRequest>;

export type RefreshRuntimeTokenInternalProjectsLocationsRuntimesResponse =
  RefreshRuntimeTokenInternalResponse;
export const RefreshRuntimeTokenInternalProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RefreshRuntimeTokenInternalResponse;

export type RefreshRuntimeTokenInternalProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance. */
export const refreshRuntimeTokenInternalProjectsLocationsRuntimes: API.OperationMethod<
  RefreshRuntimeTokenInternalProjectsLocationsRuntimesRequest,
  RefreshRuntimeTokenInternalProjectsLocationsRuntimesResponse,
  RefreshRuntimeTokenInternalProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RefreshRuntimeTokenInternalProjectsLocationsRuntimesRequest,
  output: RefreshRuntimeTokenInternalProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReportEventProjectsLocationsRuntimesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` */
  name: string;
  /** Request body */
  body?: ReportRuntimeEventRequest;
}

export const ReportEventProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ReportRuntimeEventRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:reportEvent", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReportEventProjectsLocationsRuntimesRequest>;

export type ReportEventProjectsLocationsRuntimesResponse = Operation;
export const ReportEventProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ReportEventProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reports and processes a runtime event. */
export const reportEventProjectsLocationsRuntimes: API.OperationMethod<
  ReportEventProjectsLocationsRuntimesRequest,
  ReportEventProjectsLocationsRuntimesResponse,
  ReportEventProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReportEventProjectsLocationsRuntimesRequest,
  output: ReportEventProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MigrateProjectsLocationsRuntimesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` */
  name: string;
  /** Request body */
  body?: MigrateRuntimeRequest;
}

export const MigrateProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MigrateRuntimeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:migrate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MigrateProjectsLocationsRuntimesRequest>;

export type MigrateProjectsLocationsRuntimesResponse = Operation;
export const MigrateProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type MigrateProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Migrate an existing Runtime to a new Workbench Instance. */
export const migrateProjectsLocationsRuntimes: API.OperationMethod<
  MigrateProjectsLocationsRuntimesRequest,
  MigrateProjectsLocationsRuntimesResponse,
  MigrateProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MigrateProjectsLocationsRuntimesRequest,
  output: MigrateProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsRuntimesRequest {
  /** Required. Specifies the path, relative to `Runtime`, of the field to update. For example, to change the software configuration kernels, the `update_mask` parameter would be specified as `software_config.kernels`, and the `PATCH` request body would specify the new value, as follows: { "software_config":{ "kernels": [{ 'repository': 'gcr.io/deeplearning-platform-release/pytorch-gpu', 'tag': 'latest' }], } } Currently, only the following fields can be updated: - `software_config.kernels` - `software_config.post_startup_script` - `software_config.custom_gpu_driver_path` - `software_config.idle_shutdown` - `software_config.idle_shutdown_timeout` - `software_config.disable_terminal` - `labels` */
  updateMask?: string;
  /** Output only. The resource name of the runtime. Format: `projects/{project}/locations/{location}/runtimes/{runtimeId}` */
  name: string;
  /** Idempotent request UUID. */
  requestId?: string;
  /** Request body */
  body?: Runtime;
}

export const PatchProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Runtime).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsRuntimesRequest>;

export type PatchProjectsLocationsRuntimesResponse = Operation;
export const PatchProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update Notebook Runtime configuration. */
export const patchProjectsLocationsRuntimes: API.OperationMethod<
  PatchProjectsLocationsRuntimesRequest,
  PatchProjectsLocationsRuntimesResponse,
  PatchProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRuntimesRequest,
  output: PatchProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRuntimesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` */
  name: string;
}

export const GetProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRuntimesRequest>;

export type GetProjectsLocationsRuntimesResponse = Runtime;
export const GetProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Runtime;

export type GetProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Runtime. The location must be a regional endpoint rather than zonal. */
export const getProjectsLocationsRuntimes: API.OperationMethod<
  GetProjectsLocationsRuntimesRequest,
  GetProjectsLocationsRuntimesResponse,
  GetProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRuntimesRequest,
  output: GetProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SwitchProjectsLocationsRuntimesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` */
  name: string;
  /** Request body */
  body?: SwitchRuntimeRequest;
}

export const SwitchProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SwitchRuntimeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:switch", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SwitchProjectsLocationsRuntimesRequest>;

export type SwitchProjectsLocationsRuntimesResponse = Operation;
export const SwitchProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SwitchProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Switch a Managed Notebook Runtime. */
export const switchProjectsLocationsRuntimes: API.OperationMethod<
  SwitchProjectsLocationsRuntimesRequest,
  SwitchProjectsLocationsRuntimesResponse,
  SwitchProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SwitchProjectsLocationsRuntimesRequest,
  output: SwitchProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DiagnoseProjectsLocationsRuntimesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtimes_id}` */
  name: string;
  /** Request body */
  body?: DiagnoseRuntimeRequest;
}

export const DiagnoseProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DiagnoseRuntimeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:diagnose", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DiagnoseProjectsLocationsRuntimesRequest>;

export type DiagnoseProjectsLocationsRuntimesResponse = Operation;
export const DiagnoseProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DiagnoseProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Diagnostic File and runs Diagnostic Tool given a Runtime. */
export const diagnoseProjectsLocationsRuntimes: API.OperationMethod<
  DiagnoseProjectsLocationsRuntimesRequest,
  DiagnoseProjectsLocationsRuntimesResponse,
  DiagnoseProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DiagnoseProjectsLocationsRuntimesRequest,
  output: DiagnoseProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpgradeProjectsLocationsRuntimesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` */
  name: string;
  /** Request body */
  body?: UpgradeRuntimeRequest;
}

export const UpgradeProjectsLocationsRuntimesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpgradeRuntimeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:upgrade", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpgradeProjectsLocationsRuntimesRequest>;

export type UpgradeProjectsLocationsRuntimesResponse = Operation;
export const UpgradeProjectsLocationsRuntimesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpgradeProjectsLocationsRuntimesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Upgrades a Managed Notebook Runtime to the latest version. */
export const upgradeProjectsLocationsRuntimes: API.OperationMethod<
  UpgradeProjectsLocationsRuntimesRequest,
  UpgradeProjectsLocationsRuntimesResponse,
  UpgradeProjectsLocationsRuntimesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpgradeProjectsLocationsRuntimesRequest,
  output: UpgradeProjectsLocationsRuntimesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsInstancesRequest {
  /** Required. Format: `parent=projects/{project_id}/locations/{location}` */
  parent: string;
  /** Required. User-defined unique ID of this instance. */
  instanceId?: string;
  /** Request body */
  body?: Instance;
}

export const CreateProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    instanceId: Schema.optional(Schema.String).pipe(T.HttpQuery("instanceId")),
    body: Schema.optional(Instance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/instances", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInstancesRequest>;

export type CreateProjectsLocationsInstancesResponse = Operation;
export const CreateProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Instance in a given project and location. */
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

export interface ReportProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: ReportInstanceInfoRequest;
}

export const ReportProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ReportInstanceInfoRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:report", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReportProjectsLocationsInstancesRequest>;

export type ReportProjectsLocationsInstancesResponse = Operation;
export const ReportProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ReportProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly. */
export const reportProjectsLocationsInstances: API.OperationMethod<
  ReportProjectsLocationsInstancesRequest,
  ReportProjectsLocationsInstancesResponse,
  ReportProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReportProjectsLocationsInstancesRequest,
  output: ReportProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "v1/{+resource}:testIamPermissions",
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

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
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

export interface SetAcceleratorProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: SetInstanceAcceleratorRequest;
}

export const SetAcceleratorProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetInstanceAcceleratorRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "v1/{+name}:setAccelerator",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetAcceleratorProjectsLocationsInstancesRequest>;

export type SetAcceleratorProjectsLocationsInstancesResponse = Operation;
export const SetAcceleratorProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetAcceleratorProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the guest accelerators of a single Instance. */
export const setAcceleratorProjectsLocationsInstances: API.OperationMethod<
  SetAcceleratorProjectsLocationsInstancesRequest,
  SetAcceleratorProjectsLocationsInstancesResponse,
  SetAcceleratorProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetAcceleratorProjectsLocationsInstancesRequest,
  output: SetAcceleratorProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
}

export const DeleteProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInstancesRequest>;

export type DeleteProjectsLocationsInstancesResponse = Operation;
export const DeleteProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Instance. */
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
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsInstancesRequest>;

export type GetIamPolicyProjectsLocationsInstancesResponse = Policy;
export const GetIamPolicyProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
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

export interface StartProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: StartInstanceRequest;
}

export const StartProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StartInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:start", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StartProjectsLocationsInstancesRequest>;

export type StartProjectsLocationsInstancesResponse = Operation;
export const StartProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StartProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts a notebook instance. */
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

export interface ReportEventProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: ReportInstanceEventRequest;
}

export const ReportEventProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ReportInstanceEventRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:reportEvent", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReportEventProjectsLocationsInstancesRequest>;

export type ReportEventProjectsLocationsInstancesResponse = Operation;
export const ReportEventProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ReportEventProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reports and processes an instance event. */
export const reportEventProjectsLocationsInstances: API.OperationMethod<
  ReportEventProjectsLocationsInstancesRequest,
  ReportEventProjectsLocationsInstancesResponse,
  ReportEventProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReportEventProjectsLocationsInstancesRequest,
  output: ReportEventProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateMetadataItemsProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: UpdateInstanceMetadataItemsRequest;
}

export const UpdateMetadataItemsProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpdateInstanceMetadataItemsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "v1/{+name}:updateMetadataItems",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateMetadataItemsProjectsLocationsInstancesRequest>;

export type UpdateMetadataItemsProjectsLocationsInstancesResponse =
  UpdateInstanceMetadataItemsResponse;
export const UpdateMetadataItemsProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ UpdateInstanceMetadataItemsResponse;

export type UpdateMetadataItemsProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Add/update metadata items for an instance. */
export const updateMetadataItemsProjectsLocationsInstances: API.OperationMethod<
  UpdateMetadataItemsProjectsLocationsInstancesRequest,
  UpdateMetadataItemsProjectsLocationsInstancesResponse,
  UpdateMetadataItemsProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateMetadataItemsProjectsLocationsInstancesRequest,
  output: UpdateMetadataItemsProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StopProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: StopInstanceRequest;
}

export const StopProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StopInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StopProjectsLocationsInstancesRequest>;

export type StopProjectsLocationsInstancesResponse = Operation;
export const StopProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StopProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops a notebook instance. */
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

export interface IsUpgradeableProjectsLocationsInstancesRequest {
  /** Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance. */
  type?:
    | "UPGRADE_TYPE_UNSPECIFIED"
    | "UPGRADE_FRAMEWORK"
    | "UPGRADE_OS"
    | "UPGRADE_CUDA"
    | "UPGRADE_ALL"
    | (string & {});
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  notebookInstance: string;
}

export const IsUpgradeableProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
    notebookInstance: Schema.String.pipe(T.HttpPath("notebookInstance")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+notebookInstance}:isUpgradeable" }),
    svc,
  ) as unknown as Schema.Schema<IsUpgradeableProjectsLocationsInstancesRequest>;

export type IsUpgradeableProjectsLocationsInstancesResponse =
  IsInstanceUpgradeableResponse;
export const IsUpgradeableProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ IsInstanceUpgradeableResponse;

export type IsUpgradeableProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Checks whether a notebook instance is upgradable. */
export const isUpgradeableProjectsLocationsInstances: API.OperationMethod<
  IsUpgradeableProjectsLocationsInstancesRequest,
  IsUpgradeableProjectsLocationsInstancesResponse,
  IsUpgradeableProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: IsUpgradeableProjectsLocationsInstancesRequest,
  output: IsUpgradeableProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface MigrateProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: MigrateInstanceRequest;
}

export const MigrateProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MigrateInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:migrate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MigrateProjectsLocationsInstancesRequest>;

export type MigrateProjectsLocationsInstancesResponse = Operation;
export const MigrateProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type MigrateProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Migrates an existing User-Managed Notebook to Workbench Instances. */
export const migrateProjectsLocationsInstances: API.OperationMethod<
  MigrateProjectsLocationsInstancesRequest,
  MigrateProjectsLocationsInstancesResponse,
  MigrateProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MigrateProjectsLocationsInstancesRequest,
  output: MigrateProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetMachineTypeProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: SetInstanceMachineTypeRequest;
}

export const SetMachineTypeProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetInstanceMachineTypeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "v1/{+name}:setMachineType",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetMachineTypeProjectsLocationsInstancesRequest>;

export type SetMachineTypeProjectsLocationsInstancesResponse = Operation;
export const SetMachineTypeProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetMachineTypeProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the machine type of a single Instance. */
export const setMachineTypeProjectsLocationsInstances: API.OperationMethod<
  SetMachineTypeProjectsLocationsInstancesRequest,
  SetMachineTypeProjectsLocationsInstancesResponse,
  SetMachineTypeProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetMachineTypeProjectsLocationsInstancesRequest,
  output: SetMachineTypeProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpgradeProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: UpgradeInstanceRequest;
}

export const UpgradeProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpgradeInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:upgrade", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpgradeProjectsLocationsInstancesRequest>;

export type UpgradeProjectsLocationsInstancesResponse = Operation;
export const UpgradeProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpgradeProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Upgrades a notebook instance to the latest version. */
export const upgradeProjectsLocationsInstances: API.OperationMethod<
  UpgradeProjectsLocationsInstancesRequest,
  UpgradeProjectsLocationsInstancesResponse,
  UpgradeProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpgradeProjectsLocationsInstancesRequest,
  output: UpgradeProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: ResetInstanceRequest;
}

export const ResetProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResetInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:reset", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ResetProjectsLocationsInstancesRequest>;

export type ResetProjectsLocationsInstancesResponse = Operation;
export const ResetProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ResetProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets a notebook instance. */
export const resetProjectsLocationsInstances: API.OperationMethod<
  ResetProjectsLocationsInstancesRequest,
  ResetProjectsLocationsInstancesResponse,
  ResetProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetProjectsLocationsInstancesRequest,
  output: ResetProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInstancesRequest {
  /** A previous returned page token that can be used to continue listing from the last result. */
  pageToken?: string;
  /** Optional. Sort results. Supported values are "name", "name desc" or "" (unsorted). */
  orderBy?: string;
  /** Maximum return size of the list call. */
  pageSize?: number;
  /** Optional. List filter. */
  filter?: string;
  /** Required. Format: `parent=projects/{project_id}/locations/{location}` */
  parent: string;
}

export const ListProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/instances" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInstancesRequest>;

export type ListProjectsLocationsInstancesResponse = ListInstancesResponse;
export const ListProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInstancesResponse;

export type ListProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists instances in a given project and location. */
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

export interface SetLabelsProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: SetInstanceLabelsRequest;
}

export const SetLabelsProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetInstanceLabelsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}:setLabels", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetLabelsProjectsLocationsInstancesRequest>;

export type SetLabelsProjectsLocationsInstancesResponse = Operation;
export const SetLabelsProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetLabelsProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Replaces all the labels of an Instance. */
export const setLabelsProjectsLocationsInstances: API.OperationMethod<
  SetLabelsProjectsLocationsInstancesRequest,
  SetLabelsProjectsLocationsInstancesResponse,
  SetLabelsProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetLabelsProjectsLocationsInstancesRequest,
  output: SetLabelsProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateConfigProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: UpdateInstanceConfigRequest;
}

export const UpdateConfigProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpdateInstanceConfigRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}:updateConfig", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateConfigProjectsLocationsInstancesRequest>;

export type UpdateConfigProjectsLocationsInstancesResponse = Operation;
export const UpdateConfigProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateConfigProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update Notebook Instance configurations. */
export const updateConfigProjectsLocationsInstances: API.OperationMethod<
  UpdateConfigProjectsLocationsInstancesRequest,
  UpdateConfigProjectsLocationsInstancesResponse,
  UpdateConfigProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateConfigProjectsLocationsInstancesRequest,
  output: UpdateConfigProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RollbackProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: RollbackInstanceRequest;
}

export const RollbackProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RollbackInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:rollback", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RollbackProjectsLocationsInstancesRequest>;

export type RollbackProjectsLocationsInstancesResponse = Operation;
export const RollbackProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RollbackProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Rollbacks a notebook instance to the previous version. */
export const rollbackProjectsLocationsInstances: API.OperationMethod<
  RollbackProjectsLocationsInstancesRequest,
  RollbackProjectsLocationsInstancesResponse,
  RollbackProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RollbackProjectsLocationsInstancesRequest,
  output: RollbackProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpgradeInternalProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: UpgradeInstanceInternalRequest;
}

export const UpgradeInternalProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpgradeInstanceInternalRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:upgradeInternal",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpgradeInternalProjectsLocationsInstancesRequest>;

export type UpgradeInternalProjectsLocationsInstancesResponse = Operation;
export const UpgradeInternalProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpgradeInternalProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly. */
export const upgradeInternalProjectsLocationsInstances: API.OperationMethod<
  UpgradeInternalProjectsLocationsInstancesRequest,
  UpgradeInternalProjectsLocationsInstancesResponse,
  UpgradeInternalProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpgradeInternalProjectsLocationsInstancesRequest,
  output: UpgradeInternalProjectsLocationsInstancesResponse,
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
      path: "v1/{+resource}:setIamPolicy",
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

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
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

export interface RegisterProjectsLocationsInstancesRequest {
  /** Required. Format: `parent=projects/{project_id}/locations/{location}` */
  parent: string;
  /** Request body */
  body?: RegisterInstanceRequest;
}

export const RegisterProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RegisterInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/instances:register",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RegisterProjectsLocationsInstancesRequest>;

export type RegisterProjectsLocationsInstancesResponse = Operation;
export const RegisterProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RegisterProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API. */
export const registerProjectsLocationsInstances: API.OperationMethod<
  RegisterProjectsLocationsInstancesRequest,
  RegisterProjectsLocationsInstancesResponse,
  RegisterProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RegisterProjectsLocationsInstancesRequest,
  output: RegisterProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateShieldedInstanceConfigProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: UpdateShieldedInstanceConfigRequest;
}

export const UpdateShieldedInstanceConfigProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpdateShieldedInstanceConfigRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "v1/{+name}:updateShieldedInstanceConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateShieldedInstanceConfigProjectsLocationsInstancesRequest>;

export type UpdateShieldedInstanceConfigProjectsLocationsInstancesResponse =
  Operation;
export const UpdateShieldedInstanceConfigProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateShieldedInstanceConfigProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the Shielded instance configuration of a single Instance. */
export const updateShieldedInstanceConfigProjectsLocationsInstances: API.OperationMethod<
  UpdateShieldedInstanceConfigProjectsLocationsInstancesRequest,
  UpdateShieldedInstanceConfigProjectsLocationsInstancesResponse,
  UpdateShieldedInstanceConfigProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateShieldedInstanceConfigProjectsLocationsInstancesRequest,
  output: UpdateShieldedInstanceConfigProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
}

export const GetProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInstancesRequest>;

export type GetProjectsLocationsInstancesResponse = Instance;
export const GetProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Instance;

export type GetProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Instance. */
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

export interface GetInstanceHealthProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
}

export const GetInstanceHealthProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:getInstanceHealth" }),
    svc,
  ) as unknown as Schema.Schema<GetInstanceHealthProjectsLocationsInstancesRequest>;

export type GetInstanceHealthProjectsLocationsInstancesResponse =
  GetInstanceHealthResponse;
export const GetInstanceHealthProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetInstanceHealthResponse;

export type GetInstanceHealthProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Checks whether a notebook instance is healthy. */
export const getInstanceHealthProjectsLocationsInstances: API.OperationMethod<
  GetInstanceHealthProjectsLocationsInstancesRequest,
  GetInstanceHealthProjectsLocationsInstancesResponse,
  GetInstanceHealthProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInstanceHealthProjectsLocationsInstancesRequest,
  output: GetInstanceHealthProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DiagnoseProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** Request body */
  body?: DiagnoseInstanceRequest;
}

export const DiagnoseProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DiagnoseInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:diagnose", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DiagnoseProjectsLocationsInstancesRequest>;

export type DiagnoseProjectsLocationsInstancesResponse = Operation;
export const DiagnoseProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DiagnoseProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Diagnostic File and runs Diagnostic Tool given an Instance. */
export const diagnoseProjectsLocationsInstances: API.OperationMethod<
  DiagnoseProjectsLocationsInstancesRequest,
  DiagnoseProjectsLocationsInstancesResponse,
  DiagnoseProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DiagnoseProjectsLocationsInstancesRequest,
  output: DiagnoseProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsEnvironmentsRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}` */
  parent: string;
  /** A previous returned page token that can be used to continue listing from the last result. */
  pageToken?: string;
  /** Maximum return size of the list call. */
  pageSize?: number;
}

export const ListProjectsLocationsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/environments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEnvironmentsRequest>;

export type ListProjectsLocationsEnvironmentsResponse =
  ListEnvironmentsResponse;
export const ListProjectsLocationsEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEnvironmentsResponse;

export type ListProjectsLocationsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists environments in a project. */
export const listProjectsLocationsEnvironments: API.PaginatedOperationMethod<
  ListProjectsLocationsEnvironmentsRequest,
  ListProjectsLocationsEnvironmentsResponse,
  ListProjectsLocationsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEnvironmentsRequest,
  output: ListProjectsLocationsEnvironmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsEnvironmentsRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/environments/{environment_id}` */
  name: string;
}

export const GetProjectsLocationsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsEnvironmentsRequest>;

export type GetProjectsLocationsEnvironmentsResponse = Environment;
export const GetProjectsLocationsEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Environment;

export type GetProjectsLocationsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Environment. */
export const getProjectsLocationsEnvironments: API.OperationMethod<
  GetProjectsLocationsEnvironmentsRequest,
  GetProjectsLocationsEnvironmentsResponse,
  GetProjectsLocationsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsEnvironmentsRequest,
  output: GetProjectsLocationsEnvironmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsEnvironmentsRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}` */
  parent: string;
  /** Required. User-defined unique ID of this environment. The `environment_id` must be 1 to 63 characters long and contain only lowercase letters, numeric characters, and dashes. The first character must be a lowercase letter and the last character cannot be a dash. */
  environmentId?: string;
  /** Request body */
  body?: Environment;
}

export const CreateProjectsLocationsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    environmentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("environmentId"),
    ),
    body: Schema.optional(Environment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/environments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsEnvironmentsRequest>;

export type CreateProjectsLocationsEnvironmentsResponse = Operation;
export const CreateProjectsLocationsEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Environment. */
export const createProjectsLocationsEnvironments: API.OperationMethod<
  CreateProjectsLocationsEnvironmentsRequest,
  CreateProjectsLocationsEnvironmentsResponse,
  CreateProjectsLocationsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsEnvironmentsRequest,
  output: CreateProjectsLocationsEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsEnvironmentsRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/environments/{environment_id}` */
  name: string;
}

export const DeleteProjectsLocationsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsEnvironmentsRequest>;

export type DeleteProjectsLocationsEnvironmentsResponse = Operation;
export const DeleteProjectsLocationsEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Environment. */
export const deleteProjectsLocationsEnvironments: API.OperationMethod<
  DeleteProjectsLocationsEnvironmentsRequest,
  DeleteProjectsLocationsEnvironmentsResponse,
  DeleteProjectsLocationsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsEnvironmentsRequest,
  output: DeleteProjectsLocationsEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
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

export interface CreateProjectsLocationsExecutionsRequest {
  /** Required. Format: `parent=projects/{project_id}/locations/{location}` */
  parent: string;
  /** Required. User-defined unique ID of this execution. */
  executionId?: string;
  /** Request body */
  body?: Execution;
}

export const CreateProjectsLocationsExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    executionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionId"),
    ),
    body: Schema.optional(Execution).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/executions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsExecutionsRequest>;

export type CreateProjectsLocationsExecutionsResponse = Operation;
export const CreateProjectsLocationsExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Execution in a given project and location. */
export const createProjectsLocationsExecutions: API.OperationMethod<
  CreateProjectsLocationsExecutionsRequest,
  CreateProjectsLocationsExecutionsResponse,
  CreateProjectsLocationsExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsExecutionsRequest,
  output: CreateProjectsLocationsExecutionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsExecutionsRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/executions/{execution_id}` */
  name: string;
}

export const DeleteProjectsLocationsExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsExecutionsRequest>;

export type DeleteProjectsLocationsExecutionsResponse = Operation;
export const DeleteProjectsLocationsExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes execution */
export const deleteProjectsLocationsExecutions: API.OperationMethod<
  DeleteProjectsLocationsExecutionsRequest,
  DeleteProjectsLocationsExecutionsResponse,
  DeleteProjectsLocationsExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsExecutionsRequest,
  output: DeleteProjectsLocationsExecutionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsExecutionsRequest {
  /** Maximum return size of the list call. */
  pageSize?: number;
  /** Filter applied to resulting executions. Currently only supports filtering executions by a specified `schedule_id`. Format: `schedule_id=` */
  filter?: string;
  /** Required. Format: `parent=projects/{project_id}/locations/{location}` */
  parent: string;
  /** A previous returned page token that can be used to continue listing from the last result. */
  pageToken?: string;
  /** Sort by field. */
  orderBy?: string;
}

export const ListProjectsLocationsExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/executions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsExecutionsRequest>;

export type ListProjectsLocationsExecutionsResponse = ListExecutionsResponse;
export const ListProjectsLocationsExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListExecutionsResponse;

export type ListProjectsLocationsExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists executions in a given project and location */
export const listProjectsLocationsExecutions: API.PaginatedOperationMethod<
  ListProjectsLocationsExecutionsRequest,
  ListProjectsLocationsExecutionsResponse,
  ListProjectsLocationsExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsExecutionsRequest,
  output: ListProjectsLocationsExecutionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsExecutionsRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/executions/{execution_id}` */
  name: string;
}

export const GetProjectsLocationsExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsExecutionsRequest>;

export type GetProjectsLocationsExecutionsResponse = Execution;
export const GetProjectsLocationsExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Execution;

export type GetProjectsLocationsExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of executions */
export const getProjectsLocationsExecutions: API.OperationMethod<
  GetProjectsLocationsExecutionsRequest,
  GetProjectsLocationsExecutionsResponse,
  GetProjectsLocationsExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsExecutionsRequest,
  output: GetProjectsLocationsExecutionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsSchedulesRequest {
  /** Required. Format: `parent=projects/{project_id}/locations/{location}` */
  parent: string;
  /** Required. User-defined unique ID of this schedule. */
  scheduleId?: string;
  /** Request body */
  body?: Schedule;
}

export const CreateProjectsLocationsSchedulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    scheduleId: Schema.optional(Schema.String).pipe(T.HttpQuery("scheduleId")),
    body: Schema.optional(Schedule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/schedules", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSchedulesRequest>;

export type CreateProjectsLocationsSchedulesResponse = Operation;
export const CreateProjectsLocationsSchedulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsSchedulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Scheduled Notebook in a given project and location. */
export const createProjectsLocationsSchedules: API.OperationMethod<
  CreateProjectsLocationsSchedulesRequest,
  CreateProjectsLocationsSchedulesResponse,
  CreateProjectsLocationsSchedulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSchedulesRequest,
  output: CreateProjectsLocationsSchedulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSchedulesRequest {
  /** A previous returned page token that can be used to continue listing from the last result. */
  pageToken?: string;
  /** Field to order results by. */
  orderBy?: string;
  /** Maximum return size of the list call. */
  pageSize?: number;
  /** Filter applied to resulting schedules. */
  filter?: string;
  /** Required. Format: `parent=projects/{project_id}/locations/{location}` */
  parent: string;
}

export const ListProjectsLocationsSchedulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/schedules" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchedulesRequest>;

export type ListProjectsLocationsSchedulesResponse = ListSchedulesResponse;
export const ListProjectsLocationsSchedulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSchedulesResponse;

export type ListProjectsLocationsSchedulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists schedules in a given project and location. */
export const listProjectsLocationsSchedules: API.PaginatedOperationMethod<
  ListProjectsLocationsSchedulesRequest,
  ListProjectsLocationsSchedulesResponse,
  ListProjectsLocationsSchedulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSchedulesRequest,
  output: ListProjectsLocationsSchedulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsSchedulesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/schedules/{schedule_id}` */
  name: string;
}

export const GetProjectsLocationsSchedulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSchedulesRequest>;

export type GetProjectsLocationsSchedulesResponse = Schedule;
export const GetProjectsLocationsSchedulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schedule;

export type GetProjectsLocationsSchedulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of schedule */
export const getProjectsLocationsSchedules: API.OperationMethod<
  GetProjectsLocationsSchedulesRequest,
  GetProjectsLocationsSchedulesResponse,
  GetProjectsLocationsSchedulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSchedulesRequest,
  output: GetProjectsLocationsSchedulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSchedulesRequest {
  /** Required. Format: `projects/{project_id}/locations/{location}/schedules/{schedule_id}` */
  name: string;
}

export const DeleteProjectsLocationsSchedulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSchedulesRequest>;

export type DeleteProjectsLocationsSchedulesResponse = Operation;
export const DeleteProjectsLocationsSchedulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsSchedulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes schedule and all underlying jobs */
export const deleteProjectsLocationsSchedules: API.OperationMethod<
  DeleteProjectsLocationsSchedulesRequest,
  DeleteProjectsLocationsSchedulesResponse,
  DeleteProjectsLocationsSchedulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSchedulesRequest,
  output: DeleteProjectsLocationsSchedulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TriggerProjectsLocationsSchedulesRequest {
  /** Required. Format: `parent=projects/{project_id}/locations/{location}/schedules/{schedule_id}` */
  name: string;
  /** Request body */
  body?: TriggerScheduleRequest;
}

export const TriggerProjectsLocationsSchedulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(TriggerScheduleRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:trigger", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<TriggerProjectsLocationsSchedulesRequest>;

export type TriggerProjectsLocationsSchedulesResponse = Operation;
export const TriggerProjectsLocationsSchedulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type TriggerProjectsLocationsSchedulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Triggers execution of an existing schedule. */
export const triggerProjectsLocationsSchedules: API.OperationMethod<
  TriggerProjectsLocationsSchedulesRequest,
  TriggerProjectsLocationsSchedulesResponse,
  TriggerProjectsLocationsSchedulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TriggerProjectsLocationsSchedulesRequest,
  output: TriggerProjectsLocationsSchedulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
