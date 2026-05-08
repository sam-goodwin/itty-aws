// ==========================================================================
// Data pipelines API (datapipelines v1)
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
  name: "datapipelines",
  version: "v1",
  rootUrl: "https://datapipelines.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudDatapipelinesV1RunPipelineRequest {}

export const GoogleCloudDatapipelinesV1RunPipelineRequest: Schema.Schema<GoogleCloudDatapipelinesV1RunPipelineRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDatapipelinesV1RunPipelineRequest",
  });

export interface GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment {
  /** The email address of the service account to run the job as. */
  serviceAccountEmail?: string;
  /** Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions). An object containing a list of key/value pairs. Example: `{ "name": "wrench", "mass": "1kg", "count": "3" }`. */
  additionalUserLabels?: Record<string, string>;
  /** The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
  tempLocation?: string;
  /** Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs */
  flexrsGoal?:
    | "FLEXRS_UNSPECIFIED"
    | "FLEXRS_SPEED_OPTIMIZED"
    | "FLEXRS_COST_OPTIMIZED"
    | (string & {});
  /** The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence. */
  workerZone?: string;
  /** The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, defaults to the control plane region. */
  workerRegion?: string;
  /** Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL. */
  subnetwork?: string;
  /** Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/ */
  kmsKeyName?: string;
  /** The machine type to use for the job. Defaults to the value from the template if not specified. */
  machineType?: string;
  /** The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. */
  maxWorkers?: number;
  /** Configuration for VM IPs. */
  ipConfiguration?:
    | "WORKER_IP_UNSPECIFIED"
    | "WORKER_IP_PUBLIC"
    | "WORKER_IP_PRIVATE"
    | (string & {});
  /** Additional experiment flags for the job. */
  additionalExperiments?: ReadonlyArray<string>;
  /** Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
  network?: string;
  /** The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. */
  zone?: string;
  /** The initial number of Compute Engine instances for the job. */
  numWorkers?: number;
  /** Whether to enable Streaming Engine for the job. */
  enableStreamingEngine?: boolean;
}

export const GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment: Schema.Schema<GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccountEmail: Schema.optional(Schema.String),
    additionalUserLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    tempLocation: Schema.optional(Schema.String),
    flexrsGoal: Schema.optional(Schema.String),
    workerZone: Schema.optional(Schema.String),
    workerRegion: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    kmsKeyName: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    maxWorkers: Schema.optional(Schema.Number),
    ipConfiguration: Schema.optional(Schema.String),
    additionalExperiments: Schema.optional(Schema.Array(Schema.String)),
    network: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    numWorkers: Schema.optional(Schema.Number),
    enableStreamingEngine: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment",
  });

export interface GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter {
  /** The runtime environment for the Flex Template job. */
  environment?: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment;
  /** Use this to pass transform name mappings for streaming update jobs. Example: `{"oldTransformName":"newTransformName",...}` */
  transformNameMappings?: Record<string, string>;
  /** Required. The job name to use for the created job. For an update job request, the job name should be the same as the existing running job. */
  jobName?: string;
  /** Cloud Storage path to a file with a JSON-serialized ContainerSpec as content. */
  containerSpecGcsPath?: string;
  /** The parameters for the Flex Template. Example: `{"num_workers":"5"}` */
  parameters?: Record<string, string>;
  /** Launch options for this Flex Template job. This is a common set of options across languages and templates. This should not be used to pass job parameters. */
  launchOptions?: Record<string, string>;
  /** Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job. */
  update?: boolean;
}

export const GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter: Schema.Schema<GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(
      GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment,
    ),
    transformNameMappings: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    jobName: Schema.optional(Schema.String),
    containerSpecGcsPath: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    launchOptions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    update: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter",
  });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleCloudDatapipelinesV1StopPipelineRequest {}

export const GoogleCloudDatapipelinesV1StopPipelineRequest: Schema.Schema<GoogleCloudDatapipelinesV1StopPipelineRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDatapipelinesV1StopPipelineRequest",
  });

export interface GoogleCloudDatapipelinesV1RuntimeEnvironment {
  /** Configuration for VM IPs. */
  ipConfiguration?:
    | "WORKER_IP_UNSPECIFIED"
    | "WORKER_IP_PUBLIC"
    | "WORKER_IP_PRIVATE"
    | (string & {});
  /** Additional experiment flags for the job. */
  additionalExperiments?: ReadonlyArray<string>;
  /** Whether to bypass the safety checks for the job's temporary directory. Use with caution. */
  bypassTempDirValidation?: boolean;
  /** Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/ */
  kmsKeyName?: string;
  /** The machine type to use for the job. Defaults to the value from the template if not specified. */
  machineType?: string;
  /** The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. */
  maxWorkers?: number;
  /** The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region. */
  workerRegion?: string;
  /** Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL. */
  subnetwork?: string;
  /** The email address of the service account to run the job as. */
  serviceAccountEmail?: string;
  /** Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of key/value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }. */
  additionalUserLabels?: Record<string, string>;
  /** The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
  tempLocation?: string;
  /** The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence. */
  workerZone?: string;
  /** Whether to enable Streaming Engine for the job. */
  enableStreamingEngine?: boolean;
  /** The initial number of Compute Engine instances for the job. */
  numWorkers?: number;
  /** Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
  network?: string;
  /** The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. */
  zone?: string;
}

export const GoogleCloudDatapipelinesV1RuntimeEnvironment: Schema.Schema<GoogleCloudDatapipelinesV1RuntimeEnvironment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipConfiguration: Schema.optional(Schema.String),
    additionalExperiments: Schema.optional(Schema.Array(Schema.String)),
    bypassTempDirValidation: Schema.optional(Schema.Boolean),
    kmsKeyName: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    maxWorkers: Schema.optional(Schema.Number),
    workerRegion: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    serviceAccountEmail: Schema.optional(Schema.String),
    additionalUserLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    tempLocation: Schema.optional(Schema.String),
    workerZone: Schema.optional(Schema.String),
    enableStreamingEngine: Schema.optional(Schema.Boolean),
    numWorkers: Schema.optional(Schema.Number),
    network: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatapipelinesV1RuntimeEnvironment" });

export interface GoogleCloudDatapipelinesV1LaunchTemplateParameters {
  /** The runtime environment for the job. */
  environment?: GoogleCloudDatapipelinesV1RuntimeEnvironment;
  /** Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. Only applicable when updating a pipeline. */
  transformNameMapping?: Record<string, string>;
  /** The runtime parameters to pass to the job. */
  parameters?: Record<string, string>;
  /** If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state. */
  update?: boolean;
  /** Required. The job name to use for the created job. */
  jobName?: string;
}

export const GoogleCloudDatapipelinesV1LaunchTemplateParameters: Schema.Schema<GoogleCloudDatapipelinesV1LaunchTemplateParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(GoogleCloudDatapipelinesV1RuntimeEnvironment),
    transformNameMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    update: Schema.optional(Schema.Boolean),
    jobName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatapipelinesV1LaunchTemplateParameters",
  });

export interface GoogleCloudDatapipelinesV1LaunchTemplateRequest {
  /** A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with 'gs://'. */
  gcsPath?: string;
  /** Required. The ID of the Cloud Platform project that the job belongs to. */
  projectId?: string;
  /** The parameters of the template to launch. This should be part of the body of the POST request. */
  launchParameters?: GoogleCloudDatapipelinesV1LaunchTemplateParameters;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. */
  location?: string;
  /** If true, the request is validated but not actually executed. Defaults to false. */
  validateOnly?: boolean;
}

export const GoogleCloudDatapipelinesV1LaunchTemplateRequest: Schema.Schema<GoogleCloudDatapipelinesV1LaunchTemplateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsPath: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    launchParameters: Schema.optional(
      GoogleCloudDatapipelinesV1LaunchTemplateParameters,
    ),
    location: Schema.optional(Schema.String),
    validateOnly: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDatapipelinesV1LaunchTemplateRequest",
  });

export interface GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest {
  /** If true, the request is validated but not actually executed. Defaults to false. */
  validateOnly?: boolean;
  /** Required. Parameter to launch a job from a Flex Template. */
  launchParameter?: GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter;
  /** Required. The ID of the Cloud Platform project that the job belongs to. */
  projectId?: string;
  /** Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. For example, `us-central1`, `us-west1`. */
  location?: string;
}

export const GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest: Schema.Schema<GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean),
    launchParameter: Schema.optional(
      GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter,
    ),
    projectId: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest",
  });

export interface GoogleCloudDatapipelinesV1Workload {
  /** Template information and additional parameters needed to launch a Dataflow job using the standard launch API. */
  dataflowLaunchTemplateRequest?: GoogleCloudDatapipelinesV1LaunchTemplateRequest;
  /** Template information and additional parameters needed to launch a Dataflow job using the flex launch API. */
  dataflowFlexTemplateRequest?: GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest;
}

export const GoogleCloudDatapipelinesV1Workload: Schema.Schema<GoogleCloudDatapipelinesV1Workload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataflowLaunchTemplateRequest: Schema.optional(
      GoogleCloudDatapipelinesV1LaunchTemplateRequest,
    ),
    dataflowFlexTemplateRequest: Schema.optional(
      GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest,
    ),
  }).annotate({ identifier: "GoogleCloudDatapipelinesV1Workload" });

export interface GoogleCloudDatapipelinesV1ScheduleSpec {
  /** Output only. When the next Scheduler job is going to run. */
  nextJobTime?: string;
  /** Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler. */
  schedule?: string;
  /** Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed. */
  timeZone?: string;
}

export const GoogleCloudDatapipelinesV1ScheduleSpec: Schema.Schema<GoogleCloudDatapipelinesV1ScheduleSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextJobTime: Schema.optional(Schema.String),
    schedule: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatapipelinesV1ScheduleSpec" });

export interface GoogleCloudDatapipelinesV1Pipeline {
  /** Required. The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline. */
  type?:
    | "PIPELINE_TYPE_UNSPECIFIED"
    | "PIPELINE_TYPE_BATCH"
    | "PIPELINE_TYPE_STREAMING"
    | (string & {});
  /** Workload information for creating new jobs. */
  workload?: GoogleCloudDatapipelinesV1Workload;
  /** Immutable. The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation. */
  pipelineSources?: Record<string, string>;
  /** Required. The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_). */
  displayName?: string;
  /** Output only. Immutable. The timestamp when the pipeline was last modified. Set by the Data Pipelines service. */
  lastUpdateTime?: string;
  /** The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location. */
  name?: string;
  /** Output only. Immutable. The timestamp when the pipeline was initially created. Set by the Data Pipelines service. */
  createTime?: string;
  /** Output only. Number of jobs. */
  jobCount?: number;
  /** Required. The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through UpdatePipeline requests. */
  state?:
    | "STATE_UNSPECIFIED"
    | "STATE_RESUMING"
    | "STATE_ACTIVE"
    | "STATE_STOPPING"
    | "STATE_ARCHIVED"
    | "STATE_PAUSED"
    | (string & {});
  /** Internal scheduling information for a pipeline. If this information is provided, periodic jobs will be created per the schedule. If not, users are responsible for creating jobs externally. */
  scheduleInfo?: GoogleCloudDatapipelinesV1ScheduleSpec;
  /** Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used. */
  schedulerServiceAccountEmail?: string;
}

export const GoogleCloudDatapipelinesV1Pipeline: Schema.Schema<GoogleCloudDatapipelinesV1Pipeline> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    workload: Schema.optional(GoogleCloudDatapipelinesV1Workload),
    pipelineSources: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    displayName: Schema.optional(Schema.String),
    lastUpdateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    jobCount: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    scheduleInfo: Schema.optional(GoogleCloudDatapipelinesV1ScheduleSpec),
    schedulerServiceAccountEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatapipelinesV1Pipeline" });

export interface GoogleCloudDatapipelinesV1ListPipelinesResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Results that matched the filter criteria and were accessible to the caller. Results are always in descending order of pipeline creation date. */
  pipelines?: ReadonlyArray<GoogleCloudDatapipelinesV1Pipeline>;
}

export const GoogleCloudDatapipelinesV1ListPipelinesResponse: Schema.Schema<GoogleCloudDatapipelinesV1ListPipelinesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    pipelines: Schema.optional(
      Schema.Array(GoogleCloudDatapipelinesV1Pipeline),
    ),
  }).annotate({
    identifier: "GoogleCloudDatapipelinesV1ListPipelinesResponse",
  });

export interface GoogleCloudDatapipelinesV1SdkVersion {
  /** The support status for this SDK version. */
  sdkSupportStatus?:
    | "UNKNOWN"
    | "SUPPORTED"
    | "STALE"
    | "DEPRECATED"
    | "UNSUPPORTED"
    | (string & {});
  /** The version of the SDK used to run the job. */
  version?: string;
  /** A readable string describing the version of the SDK. */
  versionDisplayName?: string;
}

export const GoogleCloudDatapipelinesV1SdkVersion: Schema.Schema<GoogleCloudDatapipelinesV1SdkVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sdkSupportStatus: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    versionDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatapipelinesV1SdkVersion" });

export interface GoogleCloudDatapipelinesV1DataflowJobDetails {
  /** Output only. The current number of workers used to run the jobs. Only set to a value if the job is still running. */
  currentWorkers?: number;
  /** Output only. The SDK version used to run the job. */
  sdkVersion?: GoogleCloudDatapipelinesV1SdkVersion;
  /** Cached version of all the metrics of interest for the job. This value gets stored here when the job is terminated. As long as the job is running, this field is populated from the Dataflow API. */
  resourceInfo?: Record<string, number>;
}

export const GoogleCloudDatapipelinesV1DataflowJobDetails: Schema.Schema<GoogleCloudDatapipelinesV1DataflowJobDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentWorkers: Schema.optional(Schema.Number),
    sdkVersion: Schema.optional(GoogleCloudDatapipelinesV1SdkVersion),
    resourceInfo: Schema.optional(Schema.Record(Schema.String, Schema.Number)),
  }).annotate({ identifier: "GoogleCloudDatapipelinesV1DataflowJobDetails" });

export interface GoogleRpcStatus {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const GoogleRpcStatus: Schema.Schema<GoogleRpcStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface GoogleCloudDatapipelinesV1Job {
  /** Output only. The time of job creation. */
  createTime?: string;
  /** Output only. The time of job termination. This is absent if the job is still running. */
  endTime?: string;
  /** All the details that are specific to a Dataflow job. */
  dataflowJobDetails?: GoogleCloudDatapipelinesV1DataflowJobDetails;
  /** Required. The fully qualified resource name for the job. */
  name?: string;
  /** Output only. The internal ID for the job. */
  id?: string;
  /** Status capturing any error code or message related to job creation or execution. */
  status?: GoogleRpcStatus;
  /** The current state of the job. */
  state?:
    | "STATE_UNSPECIFIED"
    | "STATE_PENDING"
    | "STATE_RUNNING"
    | "STATE_DONE"
    | "STATE_FAILED"
    | "STATE_CANCELLED"
    | (string & {});
}

export const GoogleCloudDatapipelinesV1Job: Schema.Schema<GoogleCloudDatapipelinesV1Job> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    dataflowJobDetails: Schema.optional(
      GoogleCloudDatapipelinesV1DataflowJobDetails,
    ),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    status: Schema.optional(GoogleRpcStatus),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatapipelinesV1Job" });

export interface GoogleCloudDatapipelinesV1ListJobsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Results that were accessible to the caller. Results are always in descending order of job creation date. */
  jobs?: ReadonlyArray<GoogleCloudDatapipelinesV1Job>;
}

export const GoogleCloudDatapipelinesV1ListJobsResponse: Schema.Schema<GoogleCloudDatapipelinesV1ListJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    jobs: Schema.optional(Schema.Array(GoogleCloudDatapipelinesV1Job)),
  }).annotate({ identifier: "GoogleCloudDatapipelinesV1ListJobsResponse" });

export interface GoogleCloudDatapipelinesV1RunPipelineResponse {
  /** Job that was created as part of RunPipeline operation. */
  job?: GoogleCloudDatapipelinesV1Job;
}

export const GoogleCloudDatapipelinesV1RunPipelineResponse: Schema.Schema<GoogleCloudDatapipelinesV1RunPipelineResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    job: Schema.optional(GoogleCloudDatapipelinesV1Job),
  }).annotate({ identifier: "GoogleCloudDatapipelinesV1RunPipelineResponse" });

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

export interface StopProjectsLocationsPipelinesRequest {
  /** Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatapipelinesV1StopPipelineRequest;
}

export const StopProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatapipelinesV1StopPipelineRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StopProjectsLocationsPipelinesRequest>;

export type StopProjectsLocationsPipelinesResponse =
  GoogleCloudDatapipelinesV1Pipeline;
export const StopProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatapipelinesV1Pipeline;

export type StopProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained. */
export const stopProjectsLocationsPipelines: API.OperationMethod<
  StopProjectsLocationsPipelinesRequest,
  StopProjectsLocationsPipelinesResponse,
  StopProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopProjectsLocationsPipelinesRequest,
  output: StopProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsPipelinesRequest {
  /** The list of fields to be updated. */
  updateMask?: string;
  /** The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatapipelinesV1Pipeline;
}

export const PatchProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatapipelinesV1Pipeline).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsPipelinesRequest>;

export type PatchProjectsLocationsPipelinesResponse =
  GoogleCloudDatapipelinesV1Pipeline;
export const PatchProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatapipelinesV1Pipeline;

export type PatchProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response. */
export const patchProjectsLocationsPipelines: API.OperationMethod<
  PatchProjectsLocationsPipelinesRequest,
  PatchProjectsLocationsPipelinesResponse,
  PatchProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsPipelinesRequest,
  output: PatchProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunProjectsLocationsPipelinesRequest {
  /** Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatapipelinesV1RunPipelineRequest;
}

export const RunProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatapipelinesV1RunPipelineRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RunProjectsLocationsPipelinesRequest>;

export type RunProjectsLocationsPipelinesResponse =
  GoogleCloudDatapipelinesV1RunPipelineResponse;
export const RunProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatapipelinesV1RunPipelineResponse;

export type RunProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline. */
export const runProjectsLocationsPipelines: API.OperationMethod<
  RunProjectsLocationsPipelinesRequest,
  RunProjectsLocationsPipelinesResponse,
  RunProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsPipelinesRequest,
  output: RunProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsPipelinesRequest {
  /** Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. */
  name: string;
}

export const DeleteProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsPipelinesRequest>;

export type DeleteProjectsLocationsPipelinesResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted. */
export const deleteProjectsLocationsPipelines: API.OperationMethod<
  DeleteProjectsLocationsPipelinesRequest,
  DeleteProjectsLocationsPipelinesResponse,
  DeleteProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsPipelinesRequest,
  output: DeleteProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsPipelinesRequest {
  /** Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatapipelinesV1Pipeline;
}

export const CreateProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDatapipelinesV1Pipeline).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/pipelines", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsPipelinesRequest>;

export type CreateProjectsLocationsPipelinesResponse =
  GoogleCloudDatapipelinesV1Pipeline;
export const CreateProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatapipelinesV1Pipeline;

export type CreateProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs. */
export const createProjectsLocationsPipelines: API.OperationMethod<
  CreateProjectsLocationsPipelinesRequest,
  CreateProjectsLocationsPipelinesResponse,
  CreateProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsPipelinesRequest,
  output: CreateProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsPipelinesRequest {
  /** An expression for filtering the results of the request. If unspecified, all pipelines will be returned. Multiple filters can be applied and must be comma separated. Fields eligible for filtering are: + `type`: The type of the pipeline (streaming or batch). Allowed values are `ALL`, `BATCH`, and `STREAMING`. + `status`: The activity status of the pipeline. Allowed values are `ALL`, `ACTIVE`, `ARCHIVED`, and `PAUSED`. For example, to limit results to active batch processing pipelines: type:BATCH,status:ACTIVE */
  filter?: string;
  /** Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`. */
  parent: string;
  /** A page token, received from a previous `ListPipelines` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPipelines` must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of entities to return. The service may return fewer than this value, even if there are additional pages. If unspecified, the max limit is yet to be determined by the backend implementation. */
  pageSize?: number;
}

export const ListProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/pipelines" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsPipelinesRequest>;

export type ListProjectsLocationsPipelinesResponse =
  GoogleCloudDatapipelinesV1ListPipelinesResponse;
export const ListProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatapipelinesV1ListPipelinesResponse;

export type ListProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it. */
export const listProjectsLocationsPipelines: API.PaginatedOperationMethod<
  ListProjectsLocationsPipelinesRequest,
  ListProjectsLocationsPipelinesResponse,
  ListProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPipelinesRequest,
  output: ListProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsPipelinesRequest {
  /** Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. */
  name: string;
}

export const GetProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsPipelinesRequest>;

export type GetProjectsLocationsPipelinesResponse =
  GoogleCloudDatapipelinesV1Pipeline;
export const GetProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatapipelinesV1Pipeline;

export type GetProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it. */
export const getProjectsLocationsPipelines: API.OperationMethod<
  GetProjectsLocationsPipelinesRequest,
  GetProjectsLocationsPipelinesResponse,
  GetProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsPipelinesRequest,
  output: GetProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsPipelinesJobsRequest {
  /** The maximum number of entities to return. The service may return fewer than this value, even if there are additional pages. If unspecified, the max limit will be determined by the backend implementation. */
  pageSize?: number;
  /** Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. */
  parent: string;
  /** A page token, received from a previous `ListJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListJobs` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsPipelinesJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/jobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsPipelinesJobsRequest>;

export type ListProjectsLocationsPipelinesJobsResponse =
  GoogleCloudDatapipelinesV1ListJobsResponse;
export const ListProjectsLocationsPipelinesJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatapipelinesV1ListJobsResponse;

export type ListProjectsLocationsPipelinesJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it. */
export const listProjectsLocationsPipelinesJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsPipelinesJobsRequest,
  ListProjectsLocationsPipelinesJobsResponse,
  ListProjectsLocationsPipelinesJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPipelinesJobsRequest,
  output: ListProjectsLocationsPipelinesJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
