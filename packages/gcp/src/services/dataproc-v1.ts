// ==========================================================================
// Cloud Dataproc API (dataproc v1)
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
  name: "dataproc",
  version: "v1",
  rootUrl: "https://dataproc.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface RddOperationEdge {
  fromId?: number;
  toId?: number;
}

export const RddOperationEdge: Schema.Schema<RddOperationEdge> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fromId: Schema.optional(Schema.Number),
    toId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RddOperationEdge" });

export interface RddOperationNode {
  name?: string;
  cached?: boolean;
  callsite?: string;
  nodeId?: number;
  outputDeterministicLevel?:
    | "DETERMINISTIC_LEVEL_UNSPECIFIED"
    | "DETERMINISTIC_LEVEL_DETERMINATE"
    | "DETERMINISTIC_LEVEL_UNORDERED"
    | "DETERMINISTIC_LEVEL_INDETERMINATE"
    | (string & {});
  barrier?: boolean;
}

export const RddOperationNode: Schema.Schema<RddOperationNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    cached: Schema.optional(Schema.Boolean),
    callsite: Schema.optional(Schema.String),
    nodeId: Schema.optional(Schema.Number),
    outputDeterministicLevel: Schema.optional(Schema.String),
    barrier: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RddOperationNode" });

export interface RddOperationCluster {
  name?: string;
  childNodes?: ReadonlyArray<RddOperationNode>;
  childClusters?: ReadonlyArray<RddOperationCluster>;
  rddClusterId?: string;
}

export const RddOperationCluster: Schema.Schema<RddOperationCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.optional(Schema.String),
      childNodes: Schema.optional(Schema.Array(RddOperationNode)),
      childClusters: Schema.optional(Schema.Array(RddOperationCluster)),
      rddClusterId: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "RddOperationCluster",
  }) as any as Schema.Schema<RddOperationCluster>;

export interface RddOperationGraph {
  edges?: ReadonlyArray<RddOperationEdge>;
  incomingEdges?: ReadonlyArray<RddOperationEdge>;
  stageId?: string;
  outgoingEdges?: ReadonlyArray<RddOperationEdge>;
  rootCluster?: RddOperationCluster;
}

export const RddOperationGraph: Schema.Schema<RddOperationGraph> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    edges: Schema.optional(Schema.Array(RddOperationEdge)),
    incomingEdges: Schema.optional(Schema.Array(RddOperationEdge)),
    stageId: Schema.optional(Schema.String),
    outgoingEdges: Schema.optional(Schema.Array(RddOperationEdge)),
    rootCluster: Schema.optional(RddOperationCluster),
  }).annotate({ identifier: "RddOperationGraph" });

export interface AccessSessionSparkApplicationStageRddOperationGraphResponse {
  /** RDD operation graph for a Spark Application Stage. */
  rddOperationGraph?: RddOperationGraph;
}

export const AccessSessionSparkApplicationStageRddOperationGraphResponse: Schema.Schema<AccessSessionSparkApplicationStageRddOperationGraphResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rddOperationGraph: Schema.optional(RddOperationGraph),
  }).annotate({
    identifier: "AccessSessionSparkApplicationStageRddOperationGraphResponse",
  });

export interface SqlPlanMetric {
  accumulatorId?: string;
  metricType?: string;
  name?: string;
}

export const SqlPlanMetric: Schema.Schema<SqlPlanMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accumulatorId: Schema.optional(Schema.String),
    metricType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlPlanMetric" });

export interface SqlExecutionUiData {
  metricValues?: Record<string, string>;
  description?: string;
  executionId?: string;
  details?: string;
  physicalPlanDescription?: string;
  submissionTime?: string;
  metricValuesIsNull?: boolean;
  rootExecutionId?: string;
  completionTime?: string;
  errorMessage?: string;
  jobs?: Record<
    string,
    | "JOB_EXECUTION_STATUS_UNSPECIFIED"
    | "JOB_EXECUTION_STATUS_RUNNING"
    | "JOB_EXECUTION_STATUS_SUCCEEDED"
    | "JOB_EXECUTION_STATUS_FAILED"
    | "JOB_EXECUTION_STATUS_UNKNOWN"
    | (string & {})
  >;
  metrics?: ReadonlyArray<SqlPlanMetric>;
  stages?: ReadonlyArray<string>;
  modifiedConfigs?: Record<string, string>;
}

export const SqlExecutionUiData: Schema.Schema<SqlExecutionUiData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricValues: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    executionId: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
    physicalPlanDescription: Schema.optional(Schema.String),
    submissionTime: Schema.optional(Schema.String),
    metricValuesIsNull: Schema.optional(Schema.Boolean),
    rootExecutionId: Schema.optional(Schema.String),
    completionTime: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    jobs: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metrics: Schema.optional(Schema.Array(SqlPlanMetric)),
    stages: Schema.optional(Schema.Array(Schema.String)),
    modifiedConfigs: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "SqlExecutionUiData" });

export interface AccessSessionSparkApplicationSqlQueryResponse {
  /** SQL Execution Data */
  executionData?: SqlExecutionUiData;
}

export const AccessSessionSparkApplicationSqlQueryResponse: Schema.Schema<AccessSessionSparkApplicationSqlQueryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionData: Schema.optional(SqlExecutionUiData),
  }).annotate({ identifier: "AccessSessionSparkApplicationSqlQueryResponse" });

export interface KubernetesSoftwareConfig {
  /** The properties to set on daemon config files.Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image. The following are supported prefixes and their mappings: spark: spark-defaults.confFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties). */
  properties?: Record<string, string>;
  /** The components that should be installed in this Dataproc cluster. The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must be specified. */
  componentVersion?: Record<string, string>;
}

export const KubernetesSoftwareConfig: Schema.Schema<KubernetesSoftwareConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    componentVersion: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "KubernetesSoftwareConfig" });

export interface JobScheduling {
  /** Optional. Maximum number of times per hour a driver can be restarted as a result of driver exiting with non-zero code before job is reported failed.A job might be reported as thrashing if the driver exits with a non-zero code four times within a 10-minute window.Maximum value is 10.Note: This restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template). */
  maxFailuresPerHour?: number;
  /** Optional. Maximum total number of times a driver can be restarted as a result of the driver exiting with a non-zero code. After the maximum number is reached, the job will be reported as failed.Maximum value is 240.Note: Currently, this restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template). */
  maxFailuresTotal?: number;
}

export const JobScheduling: Schema.Schema<JobScheduling> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxFailuresPerHour: Schema.optional(Schema.Number),
    maxFailuresTotal: Schema.optional(Schema.Number),
  }).annotate({ identifier: "JobScheduling" });

export interface AccumulableInfo {
  name?: string;
  value?: string;
  accumullableInfoId?: string;
  update?: string;
}

export const AccumulableInfo: Schema.Schema<AccumulableInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    accumullableInfoId: Schema.optional(Schema.String),
    update: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccumulableInfo" });

export interface OutputMetrics {
  recordsWritten?: string;
  bytesWritten?: string;
}

export const OutputMetrics: Schema.Schema<OutputMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recordsWritten: Schema.optional(Schema.String),
    bytesWritten: Schema.optional(Schema.String),
  }).annotate({ identifier: "OutputMetrics" });

export interface ShufflePushReadMetrics {
  localMergedBlocksFetched?: string;
  remoteMergedReqsDuration?: string;
  remoteMergedBytesRead?: string;
  mergedFetchFallbackCount?: string;
  corruptMergedBlockChunks?: string;
  remoteMergedBlocksFetched?: string;
  localMergedBytesRead?: string;
  remoteMergedChunksFetched?: string;
  localMergedChunksFetched?: string;
}

export const ShufflePushReadMetrics: Schema.Schema<ShufflePushReadMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localMergedBlocksFetched: Schema.optional(Schema.String),
    remoteMergedReqsDuration: Schema.optional(Schema.String),
    remoteMergedBytesRead: Schema.optional(Schema.String),
    mergedFetchFallbackCount: Schema.optional(Schema.String),
    corruptMergedBlockChunks: Schema.optional(Schema.String),
    remoteMergedBlocksFetched: Schema.optional(Schema.String),
    localMergedBytesRead: Schema.optional(Schema.String),
    remoteMergedChunksFetched: Schema.optional(Schema.String),
    localMergedChunksFetched: Schema.optional(Schema.String),
  }).annotate({ identifier: "ShufflePushReadMetrics" });

export interface ShuffleReadMetrics {
  fetchWaitTimeMillis?: string;
  remoteBytesRead?: string;
  localBlocksFetched?: string;
  shufflePushReadMetrics?: ShufflePushReadMetrics;
  remoteBytesReadToDisk?: string;
  remoteReqsDuration?: string;
  recordsRead?: string;
  remoteBlocksFetched?: string;
  localBytesRead?: string;
}

export const ShuffleReadMetrics: Schema.Schema<ShuffleReadMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fetchWaitTimeMillis: Schema.optional(Schema.String),
    remoteBytesRead: Schema.optional(Schema.String),
    localBlocksFetched: Schema.optional(Schema.String),
    shufflePushReadMetrics: Schema.optional(ShufflePushReadMetrics),
    remoteBytesReadToDisk: Schema.optional(Schema.String),
    remoteReqsDuration: Schema.optional(Schema.String),
    recordsRead: Schema.optional(Schema.String),
    remoteBlocksFetched: Schema.optional(Schema.String),
    localBytesRead: Schema.optional(Schema.String),
  }).annotate({ identifier: "ShuffleReadMetrics" });

export interface ShuffleWriteMetrics {
  bytesWritten?: string;
  writeTimeNanos?: string;
  recordsWritten?: string;
}

export const ShuffleWriteMetrics: Schema.Schema<ShuffleWriteMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bytesWritten: Schema.optional(Schema.String),
    writeTimeNanos: Schema.optional(Schema.String),
    recordsWritten: Schema.optional(Schema.String),
  }).annotate({ identifier: "ShuffleWriteMetrics" });

export interface InputMetrics {
  bytesRead?: string;
  recordsRead?: string;
}

export const InputMetrics: Schema.Schema<InputMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bytesRead: Schema.optional(Schema.String),
    recordsRead: Schema.optional(Schema.String),
  }).annotate({ identifier: "InputMetrics" });

export interface TaskMetrics {
  executorDeserializeCpuTimeNanos?: string;
  outputMetrics?: OutputMetrics;
  jvmGcTimeMillis?: string;
  shuffleReadMetrics?: ShuffleReadMetrics;
  memoryBytesSpilled?: string;
  diskBytesSpilled?: string;
  executorRunTimeMillis?: string;
  executorDeserializeTimeMillis?: string;
  resultSerializationTimeMillis?: string;
  shuffleWriteMetrics?: ShuffleWriteMetrics;
  peakExecutionMemoryBytes?: string;
  resultSize?: string;
  inputMetrics?: InputMetrics;
  executorCpuTimeNanos?: string;
}

export const TaskMetrics: Schema.Schema<TaskMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executorDeserializeCpuTimeNanos: Schema.optional(Schema.String),
    outputMetrics: Schema.optional(OutputMetrics),
    jvmGcTimeMillis: Schema.optional(Schema.String),
    shuffleReadMetrics: Schema.optional(ShuffleReadMetrics),
    memoryBytesSpilled: Schema.optional(Schema.String),
    diskBytesSpilled: Schema.optional(Schema.String),
    executorRunTimeMillis: Schema.optional(Schema.String),
    executorDeserializeTimeMillis: Schema.optional(Schema.String),
    resultSerializationTimeMillis: Schema.optional(Schema.String),
    shuffleWriteMetrics: Schema.optional(ShuffleWriteMetrics),
    peakExecutionMemoryBytes: Schema.optional(Schema.String),
    resultSize: Schema.optional(Schema.String),
    inputMetrics: Schema.optional(InputMetrics),
    executorCpuTimeNanos: Schema.optional(Schema.String),
  }).annotate({ identifier: "TaskMetrics" });

export interface TaskData {
  accumulatorUpdates?: ReadonlyArray<AccumulableInfo>;
  host?: string;
  stageAttemptId?: number;
  launchTime?: string;
  schedulerDelayMillis?: string;
  partitionId?: number;
  attempt?: number;
  taskId?: string;
  gettingResultTimeMillis?: string;
  resultFetchStart?: string;
  speculative?: boolean;
  taskMetrics?: TaskMetrics;
  executorId?: string;
  executorLogs?: Record<string, string>;
  errorMessage?: string;
  taskLocality?: string;
  durationMillis?: string;
  status?: string;
  hasMetrics?: boolean;
  stageId?: string;
  index?: number;
}

export const TaskData: Schema.Schema<TaskData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accumulatorUpdates: Schema.optional(Schema.Array(AccumulableInfo)),
    host: Schema.optional(Schema.String),
    stageAttemptId: Schema.optional(Schema.Number),
    launchTime: Schema.optional(Schema.String),
    schedulerDelayMillis: Schema.optional(Schema.String),
    partitionId: Schema.optional(Schema.Number),
    attempt: Schema.optional(Schema.Number),
    taskId: Schema.optional(Schema.String),
    gettingResultTimeMillis: Schema.optional(Schema.String),
    resultFetchStart: Schema.optional(Schema.String),
    speculative: Schema.optional(Schema.Boolean),
    taskMetrics: Schema.optional(TaskMetrics),
    executorId: Schema.optional(Schema.String),
    executorLogs: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    errorMessage: Schema.optional(Schema.String),
    taskLocality: Schema.optional(Schema.String),
    durationMillis: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    hasMetrics: Schema.optional(Schema.Boolean),
    stageId: Schema.optional(Schema.String),
    index: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TaskData" });

export interface SearchSessionSparkApplicationStageAttemptTasksResponse {
  /** Output only. Data corresponding to tasks created by spark. */
  sparkApplicationStageAttemptTasks?: ReadonlyArray<TaskData>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSessionSparkApplicationStageAttemptTasksRequest. */
  nextPageToken?: string;
}

export const SearchSessionSparkApplicationStageAttemptTasksResponse: Schema.Schema<SearchSessionSparkApplicationStageAttemptTasksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplicationStageAttemptTasks: Schema.optional(Schema.Array(TaskData)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "SearchSessionSparkApplicationStageAttemptTasksResponse",
  });

export interface ClusterStatus {
  /** Output only. Additional state information that includes status reported by the agent. */
  substate?: "UNSPECIFIED" | "UNHEALTHY" | "STALE_STATUS" | (string & {});
  /** Output only. The cluster's state. */
  state?:
    | "UNKNOWN"
    | "CREATING"
    | "RUNNING"
    | "ERROR"
    | "ERROR_DUE_TO_UPDATE"
    | "DELETING"
    | "UPDATING"
    | "STOPPING"
    | "STOPPED"
    | "STARTING"
    | "REPAIRING"
    | "SCHEDULED"
    | (string & {});
  /** Optional. Output only. Details of cluster's state. */
  detail?: string;
  /** Output only. Time when this state was entered (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
  stateStartTime?: string;
}

export const ClusterStatus: Schema.Schema<ClusterStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    substate: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
    stateStartTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterStatus" });

export interface JobReference {
  /** Optional. The ID of the Google Cloud Platform project that the job belongs to. If specified, must match the request project ID. */
  projectId?: string;
  /** Optional. The job ID, which must be unique within the project.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.If not specified by the caller, the job ID will be provided by the server. */
  jobId?: string;
}

export const JobReference: Schema.Schema<JobReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    jobId: Schema.optional(Schema.String),
  }).annotate({ identifier: "JobReference" });

export interface UsageSnapshot {
  /** Optional. Shuffle Storage in gigabytes (GB). (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)) */
  shuffleStorageGb?: string;
  /** Optional. Shuffle Storage in gigabytes (GB) charged at premium tier. (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)) */
  shuffleStorageGbPremium?: string;
  /** Optional. Accelerator type being used, if any */
  acceleratorType?: string;
  /** Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) charged at premium tier (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
  milliDcuPremium?: string;
  /** Optional. The timestamp of the usage snapshot. */
  snapshotTime?: string;
  /** Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
  milliDcu?: string;
  /** Optional. Milli (one-thousandth) accelerator. (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)) */
  milliAccelerator?: string;
}

export const UsageSnapshot: Schema.Schema<UsageSnapshot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shuffleStorageGb: Schema.optional(Schema.String),
    shuffleStorageGbPremium: Schema.optional(Schema.String),
    acceleratorType: Schema.optional(Schema.String),
    milliDcuPremium: Schema.optional(Schema.String),
    snapshotTime: Schema.optional(Schema.String),
    milliDcu: Schema.optional(Schema.String),
    milliAccelerator: Schema.optional(Schema.String),
  }).annotate({ identifier: "UsageSnapshot" });

export interface ValueInfo {
  /** Annotation, comment or explanation why the property was set. */
  annotation?: string;
  /** Optional. Value which was replaced by the corresponding component. */
  overriddenValue?: string;
  /** Property value. */
  value?: string;
}

export const ValueInfo: Schema.Schema<ValueInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    annotation: Schema.optional(Schema.String),
    overriddenValue: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValueInfo" });

export interface PropertiesInfo {
  /** Output only. Properties set by autotuning engine. */
  autotuningProperties?: Record<string, ValueInfo>;
}

export const PropertiesInfo: Schema.Schema<PropertiesInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autotuningProperties: Schema.optional(
      Schema.Record(Schema.String, ValueInfo),
    ),
  }).annotate({ identifier: "PropertiesInfo" });

export interface CohortInfo {
  /** Output only. Final cohort that was used to tune the workload. */
  cohort?: string;
  /** Output only. Source of the cohort. */
  cohortSource?:
    | "COHORT_SOURCE_UNSPECIFIED"
    | "USER_PROVIDED"
    | "AIRFLOW"
    | (string & {});
}

export const CohortInfo: Schema.Schema<CohortInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cohort: Schema.optional(Schema.String),
    cohortSource: Schema.optional(Schema.String),
  }).annotate({ identifier: "CohortInfo" });

export interface UsageMetrics {
  /** Optional. Shuffle storage usage in (GB x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
  shuffleStorageGbSeconds?: string;
  /** Optional. DEPRECATED Accelerator type being used, if any */
  acceleratorType?: string;
  /** Optional. DCU (Dataproc Compute Units) usage in (milliDCU x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
  milliDcuSeconds?: string;
  /** Optional. The timestamp of the usage metrics. */
  updateTime?: string;
  /** Optional. DEPRECATED Accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
  milliAcceleratorSeconds?: string;
}

export const UsageMetrics: Schema.Schema<UsageMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shuffleStorageGbSeconds: Schema.optional(Schema.String),
    acceleratorType: Schema.optional(Schema.String),
    milliDcuSeconds: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    milliAcceleratorSeconds: Schema.optional(Schema.String),
  }).annotate({ identifier: "UsageMetrics" });

export interface RuntimeInfo {
  /** Output only. Map of remote access endpoints (such as web interfaces and APIs) to their URIs. */
  endpoints?: Record<string, string>;
  /** Output only. Snapshot of current workload resource usage. */
  currentUsage?: UsageSnapshot;
  /** Optional. Properties of the workload organized by origin. */
  propertiesInfo?: PropertiesInfo;
  /** Output only. A URI pointing to the location of the stdout and stderr of the workload. */
  outputUri?: string;
  /** Output only. Information about the cohort that the workload belongs to. */
  cohortInfo?: CohortInfo;
  /** Output only. A URI pointing to the location of the diagnostics tarball. */
  diagnosticOutputUri?: string;
  /** Output only. Approximate workload resource usage, calculated when the workload completes (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).Note: This metric calculation may change in the future, for example, to capture cumulative workload resource consumption during workload execution (see the Dataproc Serverless release notes (https://cloud.google.com/dataproc-serverless/docs/release-notes) for announcements, changes, fixes and other Dataproc developments). */
  approximateUsage?: UsageMetrics;
}

export const RuntimeInfo: Schema.Schema<RuntimeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoints: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    currentUsage: Schema.optional(UsageSnapshot),
    propertiesInfo: Schema.optional(PropertiesInfo),
    outputUri: Schema.optional(Schema.String),
    cohortInfo: Schema.optional(CohortInfo),
    diagnosticOutputUri: Schema.optional(Schema.String),
    approximateUsage: Schema.optional(UsageMetrics),
  }).annotate({ identifier: "RuntimeInfo" });

export interface ExecutorMetrics {
  metrics?: Record<string, string>;
}

export const ExecutorMetrics: Schema.Schema<ExecutorMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metrics: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ExecutorMetrics" });

export interface Quantiles {
  percentile50?: string;
  percentile25?: string;
  minimum?: string;
  percentile75?: string;
  count?: string;
  maximum?: string;
  sum?: string;
}

export const Quantiles: Schema.Schema<Quantiles> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    percentile50: Schema.optional(Schema.String),
    percentile25: Schema.optional(Schema.String),
    minimum: Schema.optional(Schema.String),
    percentile75: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
    maximum: Schema.optional(Schema.String),
    sum: Schema.optional(Schema.String),
  }).annotate({ identifier: "Quantiles" });

export interface OutputQuantileMetrics {
  recordsWritten?: Quantiles;
  bytesWritten?: Quantiles;
}

export const OutputQuantileMetrics: Schema.Schema<OutputQuantileMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recordsWritten: Schema.optional(Quantiles),
    bytesWritten: Schema.optional(Quantiles),
  }).annotate({ identifier: "OutputQuantileMetrics" });

export interface ShufflePushReadQuantileMetrics {
  remoteMergedChunksFetched?: Quantiles;
  localMergedChunksFetched?: Quantiles;
  remoteMergedBlocksFetched?: Quantiles;
  localMergedBytesRead?: Quantiles;
  corruptMergedBlockChunks?: Quantiles;
  mergedFetchFallbackCount?: Quantiles;
  remoteMergedBytesRead?: Quantiles;
  remoteMergedReqsDuration?: Quantiles;
  localMergedBlocksFetched?: Quantiles;
}

export const ShufflePushReadQuantileMetrics: Schema.Schema<ShufflePushReadQuantileMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    remoteMergedChunksFetched: Schema.optional(Quantiles),
    localMergedChunksFetched: Schema.optional(Quantiles),
    remoteMergedBlocksFetched: Schema.optional(Quantiles),
    localMergedBytesRead: Schema.optional(Quantiles),
    corruptMergedBlockChunks: Schema.optional(Quantiles),
    mergedFetchFallbackCount: Schema.optional(Quantiles),
    remoteMergedBytesRead: Schema.optional(Quantiles),
    remoteMergedReqsDuration: Schema.optional(Quantiles),
    localMergedBlocksFetched: Schema.optional(Quantiles),
  }).annotate({ identifier: "ShufflePushReadQuantileMetrics" });

export interface ShuffleReadQuantileMetrics {
  readRecords?: Quantiles;
  localBlocksFetched?: Quantiles;
  totalBlocksFetched?: Quantiles;
  shufflePushReadMetrics?: ShufflePushReadQuantileMetrics;
  readBytes?: Quantiles;
  remoteBlocksFetched?: Quantiles;
  remoteBytesReadToDisk?: Quantiles;
  remoteReqsDuration?: Quantiles;
  fetchWaitTimeMillis?: Quantiles;
  remoteBytesRead?: Quantiles;
}

export const ShuffleReadQuantileMetrics: Schema.Schema<ShuffleReadQuantileMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readRecords: Schema.optional(Quantiles),
    localBlocksFetched: Schema.optional(Quantiles),
    totalBlocksFetched: Schema.optional(Quantiles),
    shufflePushReadMetrics: Schema.optional(ShufflePushReadQuantileMetrics),
    readBytes: Schema.optional(Quantiles),
    remoteBlocksFetched: Schema.optional(Quantiles),
    remoteBytesReadToDisk: Schema.optional(Quantiles),
    remoteReqsDuration: Schema.optional(Quantiles),
    fetchWaitTimeMillis: Schema.optional(Quantiles),
    remoteBytesRead: Schema.optional(Quantiles),
  }).annotate({ identifier: "ShuffleReadQuantileMetrics" });

export interface ShuffleWriteQuantileMetrics {
  writeBytes?: Quantiles;
  writeTimeNanos?: Quantiles;
  writeRecords?: Quantiles;
}

export const ShuffleWriteQuantileMetrics: Schema.Schema<ShuffleWriteQuantileMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    writeBytes: Schema.optional(Quantiles),
    writeTimeNanos: Schema.optional(Quantiles),
    writeRecords: Schema.optional(Quantiles),
  }).annotate({ identifier: "ShuffleWriteQuantileMetrics" });

export interface InputQuantileMetrics {
  bytesRead?: Quantiles;
  recordsRead?: Quantiles;
}

export const InputQuantileMetrics: Schema.Schema<InputQuantileMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bytesRead: Schema.optional(Quantiles),
    recordsRead: Schema.optional(Quantiles),
  }).annotate({ identifier: "InputQuantileMetrics" });

export interface TaskQuantileMetrics {
  outputMetrics?: OutputQuantileMetrics;
  executorDeserializeCpuTimeNanos?: Quantiles;
  shuffleReadMetrics?: ShuffleReadQuantileMetrics;
  memoryBytesSpilled?: Quantiles;
  jvmGcTimeMillis?: Quantiles;
  durationMillis?: Quantiles;
  executorRunTimeMillis?: Quantiles;
  diskBytesSpilled?: Quantiles;
  executorDeserializeTimeMillis?: Quantiles;
  schedulerDelayMillis?: Quantiles;
  resultSerializationTimeMillis?: Quantiles;
  shuffleWriteMetrics?: ShuffleWriteQuantileMetrics;
  peakExecutionMemoryBytes?: Quantiles;
  executorCpuTimeNanos?: Quantiles;
  resultSize?: Quantiles;
  inputMetrics?: InputQuantileMetrics;
  gettingResultTimeMillis?: Quantiles;
}

export const TaskQuantileMetrics: Schema.Schema<TaskQuantileMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputMetrics: Schema.optional(OutputQuantileMetrics),
    executorDeserializeCpuTimeNanos: Schema.optional(Quantiles),
    shuffleReadMetrics: Schema.optional(ShuffleReadQuantileMetrics),
    memoryBytesSpilled: Schema.optional(Quantiles),
    jvmGcTimeMillis: Schema.optional(Quantiles),
    durationMillis: Schema.optional(Quantiles),
    executorRunTimeMillis: Schema.optional(Quantiles),
    diskBytesSpilled: Schema.optional(Quantiles),
    executorDeserializeTimeMillis: Schema.optional(Quantiles),
    schedulerDelayMillis: Schema.optional(Quantiles),
    resultSerializationTimeMillis: Schema.optional(Quantiles),
    shuffleWriteMetrics: Schema.optional(ShuffleWriteQuantileMetrics),
    peakExecutionMemoryBytes: Schema.optional(Quantiles),
    executorCpuTimeNanos: Schema.optional(Quantiles),
    resultSize: Schema.optional(Quantiles),
    inputMetrics: Schema.optional(InputQuantileMetrics),
    gettingResultTimeMillis: Schema.optional(Quantiles),
  }).annotate({ identifier: "TaskQuantileMetrics" });

export interface SpeculationStageSummary {
  numFailedTasks?: number;
  stageId?: string;
  stageAttemptId?: number;
  numActiveTasks?: number;
  numTasks?: number;
  numCompletedTasks?: number;
  numKilledTasks?: number;
}

export const SpeculationStageSummary: Schema.Schema<SpeculationStageSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numFailedTasks: Schema.optional(Schema.Number),
    stageId: Schema.optional(Schema.String),
    stageAttemptId: Schema.optional(Schema.Number),
    numActiveTasks: Schema.optional(Schema.Number),
    numTasks: Schema.optional(Schema.Number),
    numCompletedTasks: Schema.optional(Schema.Number),
    numKilledTasks: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SpeculationStageSummary" });

export interface ExecutorStageSummary {
  inputBytes?: string;
  outputRecords?: string;
  shuffleRead?: string;
  taskTimeMillis?: string;
  stageAttemptId?: number;
  succeededTasks?: number;
  isExcludedForStage?: boolean;
  peakMemoryMetrics?: ExecutorMetrics;
  diskBytesSpilled?: string;
  stageId?: string;
  inputRecords?: string;
  shuffleWriteRecords?: string;
  failedTasks?: number;
  shuffleReadRecords?: string;
  executorId?: string;
  outputBytes?: string;
  killedTasks?: number;
  shuffleWrite?: string;
  memoryBytesSpilled?: string;
}

export const ExecutorStageSummary: Schema.Schema<ExecutorStageSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputBytes: Schema.optional(Schema.String),
    outputRecords: Schema.optional(Schema.String),
    shuffleRead: Schema.optional(Schema.String),
    taskTimeMillis: Schema.optional(Schema.String),
    stageAttemptId: Schema.optional(Schema.Number),
    succeededTasks: Schema.optional(Schema.Number),
    isExcludedForStage: Schema.optional(Schema.Boolean),
    peakMemoryMetrics: Schema.optional(ExecutorMetrics),
    diskBytesSpilled: Schema.optional(Schema.String),
    stageId: Schema.optional(Schema.String),
    inputRecords: Schema.optional(Schema.String),
    shuffleWriteRecords: Schema.optional(Schema.String),
    failedTasks: Schema.optional(Schema.Number),
    shuffleReadRecords: Schema.optional(Schema.String),
    executorId: Schema.optional(Schema.String),
    outputBytes: Schema.optional(Schema.String),
    killedTasks: Schema.optional(Schema.Number),
    shuffleWrite: Schema.optional(Schema.String),
    memoryBytesSpilled: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExecutorStageSummary" });

export interface ExecutorPeakMetricsDistributions {
  quantiles?: ReadonlyArray<number>;
  executorMetrics?: ReadonlyArray<ExecutorMetrics>;
}

export const ExecutorPeakMetricsDistributions: Schema.Schema<ExecutorPeakMetricsDistributions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quantiles: Schema.optional(Schema.Array(Schema.Number)),
    executorMetrics: Schema.optional(Schema.Array(ExecutorMetrics)),
  }).annotate({ identifier: "ExecutorPeakMetricsDistributions" });

export interface ExecutorMetricsDistributions {
  shuffleReadRecords?: ReadonlyArray<number>;
  outputBytes?: ReadonlyArray<number>;
  killedTasks?: ReadonlyArray<number>;
  shuffleWrite?: ReadonlyArray<number>;
  memoryBytesSpilled?: ReadonlyArray<number>;
  diskBytesSpilled?: ReadonlyArray<number>;
  failedTasks?: ReadonlyArray<number>;
  inputRecords?: ReadonlyArray<number>;
  shuffleWriteRecords?: ReadonlyArray<number>;
  quantiles?: ReadonlyArray<number>;
  succeededTasks?: ReadonlyArray<number>;
  peakMemoryMetrics?: ExecutorPeakMetricsDistributions;
  taskTimeMillis?: ReadonlyArray<number>;
  inputBytes?: ReadonlyArray<number>;
  outputRecords?: ReadonlyArray<number>;
  shuffleRead?: ReadonlyArray<number>;
}

export const ExecutorMetricsDistributions: Schema.Schema<ExecutorMetricsDistributions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shuffleReadRecords: Schema.optional(Schema.Array(Schema.Number)),
    outputBytes: Schema.optional(Schema.Array(Schema.Number)),
    killedTasks: Schema.optional(Schema.Array(Schema.Number)),
    shuffleWrite: Schema.optional(Schema.Array(Schema.Number)),
    memoryBytesSpilled: Schema.optional(Schema.Array(Schema.Number)),
    diskBytesSpilled: Schema.optional(Schema.Array(Schema.Number)),
    failedTasks: Schema.optional(Schema.Array(Schema.Number)),
    inputRecords: Schema.optional(Schema.Array(Schema.Number)),
    shuffleWriteRecords: Schema.optional(Schema.Array(Schema.Number)),
    quantiles: Schema.optional(Schema.Array(Schema.Number)),
    succeededTasks: Schema.optional(Schema.Array(Schema.Number)),
    peakMemoryMetrics: Schema.optional(ExecutorPeakMetricsDistributions),
    taskTimeMillis: Schema.optional(Schema.Array(Schema.Number)),
    inputBytes: Schema.optional(Schema.Array(Schema.Number)),
    outputRecords: Schema.optional(Schema.Array(Schema.Number)),
    shuffleRead: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "ExecutorMetricsDistributions" });

export interface StageShufflePushReadMetrics {
  mergedFetchFallbackCount?: string;
  remoteMergedBlocksFetched?: string;
  localMergedBytesRead?: string;
  corruptMergedBlockChunks?: string;
  remoteMergedChunksFetched?: string;
  localMergedChunksFetched?: string;
  localMergedBlocksFetched?: string;
  remoteMergedReqsDuration?: string;
  remoteMergedBytesRead?: string;
}

export const StageShufflePushReadMetrics: Schema.Schema<StageShufflePushReadMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mergedFetchFallbackCount: Schema.optional(Schema.String),
    remoteMergedBlocksFetched: Schema.optional(Schema.String),
    localMergedBytesRead: Schema.optional(Schema.String),
    corruptMergedBlockChunks: Schema.optional(Schema.String),
    remoteMergedChunksFetched: Schema.optional(Schema.String),
    localMergedChunksFetched: Schema.optional(Schema.String),
    localMergedBlocksFetched: Schema.optional(Schema.String),
    remoteMergedReqsDuration: Schema.optional(Schema.String),
    remoteMergedBytesRead: Schema.optional(Schema.String),
  }).annotate({ identifier: "StageShufflePushReadMetrics" });

export interface StageShuffleReadMetrics {
  fetchWaitTimeMillis?: string;
  remoteBytesRead?: string;
  remoteBytesReadToDisk?: string;
  remoteReqsDuration?: string;
  recordsRead?: string;
  remoteBlocksFetched?: string;
  localBytesRead?: string;
  bytesRead?: string;
  stageShufflePushReadMetrics?: StageShufflePushReadMetrics;
  localBlocksFetched?: string;
}

export const StageShuffleReadMetrics: Schema.Schema<StageShuffleReadMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fetchWaitTimeMillis: Schema.optional(Schema.String),
    remoteBytesRead: Schema.optional(Schema.String),
    remoteBytesReadToDisk: Schema.optional(Schema.String),
    remoteReqsDuration: Schema.optional(Schema.String),
    recordsRead: Schema.optional(Schema.String),
    remoteBlocksFetched: Schema.optional(Schema.String),
    localBytesRead: Schema.optional(Schema.String),
    bytesRead: Schema.optional(Schema.String),
    stageShufflePushReadMetrics: Schema.optional(StageShufflePushReadMetrics),
    localBlocksFetched: Schema.optional(Schema.String),
  }).annotate({ identifier: "StageShuffleReadMetrics" });

export interface StageShuffleWriteMetrics {
  writeTimeNanos?: string;
  recordsWritten?: string;
  bytesWritten?: string;
}

export const StageShuffleWriteMetrics: Schema.Schema<StageShuffleWriteMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    writeTimeNanos: Schema.optional(Schema.String),
    recordsWritten: Schema.optional(Schema.String),
    bytesWritten: Schema.optional(Schema.String),
  }).annotate({ identifier: "StageShuffleWriteMetrics" });

export interface StageOutputMetrics {
  bytesWritten?: string;
  recordsWritten?: string;
}

export const StageOutputMetrics: Schema.Schema<StageOutputMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bytesWritten: Schema.optional(Schema.String),
    recordsWritten: Schema.optional(Schema.String),
  }).annotate({ identifier: "StageOutputMetrics" });

export interface StageInputMetrics {
  bytesRead?: string;
  recordsRead?: string;
}

export const StageInputMetrics: Schema.Schema<StageInputMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bytesRead: Schema.optional(Schema.String),
    recordsRead: Schema.optional(Schema.String),
  }).annotate({ identifier: "StageInputMetrics" });

export interface StageMetrics {
  resultSize?: string;
  executorCpuTimeNanos?: string;
  peakExecutionMemoryBytes?: string;
  resultSerializationTimeMillis?: string;
  stageShuffleReadMetrics?: StageShuffleReadMetrics;
  stageShuffleWriteMetrics?: StageShuffleWriteMetrics;
  executorDeserializeTimeMillis?: string;
  stageOutputMetrics?: StageOutputMetrics;
  diskBytesSpilled?: string;
  executorRunTimeMillis?: string;
  jvmGcTimeMillis?: string;
  memoryBytesSpilled?: string;
  executorDeserializeCpuTimeNanos?: string;
  stageInputMetrics?: StageInputMetrics;
}

export const StageMetrics: Schema.Schema<StageMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resultSize: Schema.optional(Schema.String),
    executorCpuTimeNanos: Schema.optional(Schema.String),
    peakExecutionMemoryBytes: Schema.optional(Schema.String),
    resultSerializationTimeMillis: Schema.optional(Schema.String),
    stageShuffleReadMetrics: Schema.optional(StageShuffleReadMetrics),
    stageShuffleWriteMetrics: Schema.optional(StageShuffleWriteMetrics),
    executorDeserializeTimeMillis: Schema.optional(Schema.String),
    stageOutputMetrics: Schema.optional(StageOutputMetrics),
    diskBytesSpilled: Schema.optional(Schema.String),
    executorRunTimeMillis: Schema.optional(Schema.String),
    jvmGcTimeMillis: Schema.optional(Schema.String),
    memoryBytesSpilled: Schema.optional(Schema.String),
    executorDeserializeCpuTimeNanos: Schema.optional(Schema.String),
    stageInputMetrics: Schema.optional(StageInputMetrics),
  }).annotate({ identifier: "StageMetrics" });

export interface StageData {
  locality?: Record<string, string>;
  numTasks?: number;
  submissionTime?: string;
  numActiveTasks?: number;
  peakExecutorMetrics?: ExecutorMetrics;
  schedulingPool?: string;
  resourceProfileId?: number;
  /** Summary metrics fields. These are included in response only if present in summary_metrics_mask field in request */
  taskQuantileMetrics?: TaskQuantileMetrics;
  status?:
    | "STAGE_STATUS_UNSPECIFIED"
    | "STAGE_STATUS_ACTIVE"
    | "STAGE_STATUS_COMPLETE"
    | "STAGE_STATUS_FAILED"
    | "STAGE_STATUS_PENDING"
    | "STAGE_STATUS_SKIPPED"
    | (string & {});
  failureReason?: string;
  jobIds?: ReadonlyArray<string>;
  accumulatorUpdates?: ReadonlyArray<AccumulableInfo>;
  description?: string;
  numFailedTasks?: number;
  details?: string;
  numKilledTasks?: number;
  killedTasksSummary?: Record<string, number>;
  speculationSummary?: SpeculationStageSummary;
  isShufflePushEnabled?: boolean;
  numCompleteTasks?: number;
  numCompletedIndices?: number;
  executorSummary?: Record<string, ExecutorStageSummary>;
  name?: string;
  completionTime?: string;
  stageId?: string;
  parentStageIds?: ReadonlyArray<string>;
  executorMetricsDistributions?: ExecutorMetricsDistributions;
  stageAttemptId?: number;
  firstTaskLaunchedTime?: string;
  stageMetrics?: StageMetrics;
  tasks?: Record<string, TaskData>;
  rddIds?: ReadonlyArray<string>;
  shuffleMergersCount?: number;
}

export const StageData: Schema.Schema<StageData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locality: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    numTasks: Schema.optional(Schema.Number),
    submissionTime: Schema.optional(Schema.String),
    numActiveTasks: Schema.optional(Schema.Number),
    peakExecutorMetrics: Schema.optional(ExecutorMetrics),
    schedulingPool: Schema.optional(Schema.String),
    resourceProfileId: Schema.optional(Schema.Number),
    taskQuantileMetrics: Schema.optional(TaskQuantileMetrics),
    status: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
    jobIds: Schema.optional(Schema.Array(Schema.String)),
    accumulatorUpdates: Schema.optional(Schema.Array(AccumulableInfo)),
    description: Schema.optional(Schema.String),
    numFailedTasks: Schema.optional(Schema.Number),
    details: Schema.optional(Schema.String),
    numKilledTasks: Schema.optional(Schema.Number),
    killedTasksSummary: Schema.optional(
      Schema.Record(Schema.String, Schema.Number),
    ),
    speculationSummary: Schema.optional(SpeculationStageSummary),
    isShufflePushEnabled: Schema.optional(Schema.Boolean),
    numCompleteTasks: Schema.optional(Schema.Number),
    numCompletedIndices: Schema.optional(Schema.Number),
    executorSummary: Schema.optional(
      Schema.Record(Schema.String, ExecutorStageSummary),
    ),
    name: Schema.optional(Schema.String),
    completionTime: Schema.optional(Schema.String),
    stageId: Schema.optional(Schema.String),
    parentStageIds: Schema.optional(Schema.Array(Schema.String)),
    executorMetricsDistributions: Schema.optional(ExecutorMetricsDistributions),
    stageAttemptId: Schema.optional(Schema.Number),
    firstTaskLaunchedTime: Schema.optional(Schema.String),
    stageMetrics: Schema.optional(StageMetrics),
    tasks: Schema.optional(Schema.Record(Schema.String, TaskData)),
    rddIds: Schema.optional(Schema.Array(Schema.String)),
    shuffleMergersCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "StageData" });

export interface SearchSparkApplicationStageAttemptsResponse {
  /** Output only. Data corresponding to a stage attempts */
  sparkApplicationStageAttempts?: ReadonlyArray<StageData>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListSparkApplicationStageAttemptsRequest. */
  nextPageToken?: string;
}

export const SearchSparkApplicationStageAttemptsResponse: Schema.Schema<SearchSparkApplicationStageAttemptsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplicationStageAttempts: Schema.optional(Schema.Array(StageData)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchSparkApplicationStageAttemptsResponse" });

export interface SearchSparkApplicationSqlQueriesResponse {
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSparkApplicationSqlQueriesRequest. */
  nextPageToken?: string;
  /** Output only. SQL Execution Data */
  sparkApplicationSqlQueries?: ReadonlyArray<SqlExecutionUiData>;
}

export const SearchSparkApplicationSqlQueriesResponse: Schema.Schema<SearchSparkApplicationSqlQueriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    sparkApplicationSqlQueries: Schema.optional(
      Schema.Array(SqlExecutionUiData),
    ),
  }).annotate({ identifier: "SearchSparkApplicationSqlQueriesResponse" });

export interface FallbackReason {
  /** Optional. Fallback to Spark reason. */
  fallbackReason?: string;
  /** Optional. Fallback node information. */
  fallbackNode?: string;
}

export const FallbackReason: Schema.Schema<FallbackReason> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fallbackReason: Schema.optional(Schema.String),
    fallbackNode: Schema.optional(Schema.String),
  }).annotate({ identifier: "FallbackReason" });

export interface SparkHistoryServerConfig {
  /** Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.Example: projects/[project_id]/regions/[region]/clusters/[cluster_name] */
  dataprocCluster?: string;
}

export const SparkHistoryServerConfig: Schema.Schema<SparkHistoryServerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataprocCluster: Schema.optional(Schema.String),
  }).annotate({ identifier: "SparkHistoryServerConfig" });

export interface PeripheralsConfig {
  /** Optional. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[region]/services/[service_id] */
  metastoreService?: string;
  /** Optional. The Spark History Server configuration for the workload. */
  sparkHistoryServerConfig?: SparkHistoryServerConfig;
}

export const PeripheralsConfig: Schema.Schema<PeripheralsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metastoreService: Schema.optional(Schema.String),
    sparkHistoryServerConfig: Schema.optional(SparkHistoryServerConfig),
  }).annotate({ identifier: "PeripheralsConfig" });

export interface WorkflowNode {
  /** Output only. The error detail. */
  error?: string;
  /** Output only. The node state. */
  state?:
    | "NODE_STATE_UNSPECIFIED"
    | "BLOCKED"
    | "RUNNABLE"
    | "RUNNING"
    | "COMPLETED"
    | "FAILED"
    | (string & {});
  /** Output only. Node's prerequisite nodes. */
  prerequisiteStepIds?: ReadonlyArray<string>;
  /** Output only. The job id; populated after the node enters RUNNING state. */
  jobId?: string;
  /** Output only. The name of the node. */
  stepId?: string;
}

export const WorkflowNode: Schema.Schema<WorkflowNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    prerequisiteStepIds: Schema.optional(Schema.Array(Schema.String)),
    jobId: Schema.optional(Schema.String),
    stepId: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkflowNode" });

export interface SinkProgress {
  numOutputRows?: string;
  metrics?: Record<string, string>;
  description?: string;
}

export const SinkProgress: Schema.Schema<SinkProgress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numOutputRows: Schema.optional(Schema.String),
    metrics: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "SinkProgress" });

export interface GkeNodePoolAutoscalingConfig {
  /** The minimum number of nodes in the node pool. Must be >= 0 and <= max_node_count. */
  minNodeCount?: number;
  /** The maximum number of nodes in the node pool. Must be >= min_node_count, and must be > 0. Note: Quota must be sufficient to scale up the cluster. */
  maxNodeCount?: number;
}

export const GkeNodePoolAutoscalingConfig: Schema.Schema<GkeNodePoolAutoscalingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minNodeCount: Schema.optional(Schema.Number),
    maxNodeCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GkeNodePoolAutoscalingConfig" });

export interface GkeNodePoolAcceleratorConfig {
  /** The number of accelerator cards exposed to an instance. */
  acceleratorCount?: string;
  /** The accelerator type resource namename (see GPUs on Compute Engine). */
  acceleratorType?: string;
  /** Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning). */
  gpuPartitionSize?: string;
}

export const GkeNodePoolAcceleratorConfig: Schema.Schema<GkeNodePoolAcceleratorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acceleratorCount: Schema.optional(Schema.String),
    acceleratorType: Schema.optional(Schema.String),
    gpuPartitionSize: Schema.optional(Schema.String),
  }).annotate({ identifier: "GkeNodePoolAcceleratorConfig" });

export interface GkeNodeConfig {
  /** Optional. The number of local SSD disks to attach to the node, which is limited by the maximum number of disks allowable per zone (see Adding Local SSDs (https://cloud.google.com/compute/docs/disks/local-ssd)). */
  localSsdCount?: number;
  /** Optional. A list of hardware accelerators (https://cloud.google.com/compute/docs/gpus) to attach to each node. */
  accelerators?: ReadonlyArray<GkeNodePoolAcceleratorConfig>;
  /** Optional. The name of a Compute Engine machine type (https://cloud.google.com/compute/docs/machine-types). */
  machineType?: string;
  /** Optional. Whether the nodes are created as legacy preemptible VM instances (https://cloud.google.com/compute/docs/instances/preemptible). Also see Spot VMs, preemptible VM instances without a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role). */
  preemptible?: boolean;
  /** Optional. Minimum CPU platform (https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) to be used by this instance. The instance may be scheduled on the specified or a newer CPU platform. Specify the friendly names of CPU platforms, such as "Intel Haswell"` or Intel Sandy Bridge". */
  minCpuPlatform?: string;
  /** Optional. The Customer Managed Encryption Key (CMEK) (https://cloud.google.com/kubernetes-engine/docs/how-to/using-cmek) used to encrypt the boot disk attached to each node in the node pool. Specify the key using the following format: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key} */
  bootDiskKmsKey?: string;
  /** Optional. Whether the nodes are created as Spot VM instances (https://cloud.google.com/compute/docs/instances/spot). Spot VMs are the latest update to legacy preemptible VMs. Spot VMs do not have a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role). */
  spot?: boolean;
}

export const GkeNodeConfig: Schema.Schema<GkeNodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localSsdCount: Schema.optional(Schema.Number),
    accelerators: Schema.optional(Schema.Array(GkeNodePoolAcceleratorConfig)),
    machineType: Schema.optional(Schema.String),
    preemptible: Schema.optional(Schema.Boolean),
    minCpuPlatform: Schema.optional(Schema.String),
    bootDiskKmsKey: Schema.optional(Schema.String),
    spot: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GkeNodeConfig" });

export interface GkeNodePoolConfig {
  /** Optional. The autoscaler configuration for this node pool. The autoscaler is enabled only when a valid configuration is present. */
  autoscaling?: GkeNodePoolAutoscalingConfig;
  /** Optional. The node pool configuration. */
  config?: GkeNodeConfig;
  /** Optional. The list of Compute Engine zones (https://cloud.google.com/compute/docs/zones#available) where node pool nodes associated with a Dataproc on GKE virtual cluster will be located.Note: All node pools associated with a virtual cluster must be located in the same region as the virtual cluster, and they must be located in the same zone within that region.If a location is not specified during node pool creation, Dataproc on GKE will choose the zone. */
  locations?: ReadonlyArray<string>;
}

export const GkeNodePoolConfig: Schema.Schema<GkeNodePoolConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoscaling: Schema.optional(GkeNodePoolAutoscalingConfig),
    config: Schema.optional(GkeNodeConfig),
    locations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GkeNodePoolConfig" });

export interface GkeNodePoolTarget {
  /** Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}' */
  nodePool?: string;
  /** Input only. The configuration for the GKE node pool.If specified, Dataproc attempts to create a node pool with the specified shape. If one with the same name already exists, it is verified against all specified fields. If a field differs, the virtual cluster creation will fail.If omitted, any node pool with the specified name is used. If a node pool with the specified name does not exist, Dataproc create a node pool with default values.This is an input only field. It will not be returned by the API. */
  nodePoolConfig?: GkeNodePoolConfig;
  /** Required. The roles associated with the GKE node pool. */
  roles?: ReadonlyArray<
    | "ROLE_UNSPECIFIED"
    | "DEFAULT"
    | "CONTROLLER"
    | "SPARK_DRIVER"
    | "SPARK_EXECUTOR"
    | (string & {})
  >;
}

export const GkeNodePoolTarget: Schema.Schema<GkeNodePoolTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePool: Schema.optional(Schema.String),
    nodePoolConfig: Schema.optional(GkeNodePoolConfig),
    roles: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GkeNodePoolTarget" });

export interface NamespacedGkeDeploymentTarget {
  /** Optional. The target GKE cluster to deploy to. Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}' */
  targetGkeCluster?: string;
  /** Optional. A namespace within the GKE cluster to deploy into. */
  clusterNamespace?: string;
}

export const NamespacedGkeDeploymentTarget: Schema.Schema<NamespacedGkeDeploymentTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetGkeCluster: Schema.optional(Schema.String),
    clusterNamespace: Schema.optional(Schema.String),
  }).annotate({ identifier: "NamespacedGkeDeploymentTarget" });

export interface GkeClusterConfig {
  /** Optional. GKE node pools where workloads will be scheduled. At least one node pool must be assigned the DEFAULT GkeNodePoolTarget.Role. If a GkeNodePoolTarget is not specified, Dataproc constructs a DEFAULT GkeNodePoolTarget. Each role can be given to only one GkeNodePoolTarget. All node pools must have the same location settings. */
  nodePoolTarget?: ReadonlyArray<GkeNodePoolTarget>;
  /** Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}' */
  gkeClusterTarget?: string;
  /** Optional. Deprecated. Use gkeClusterTarget. Used only for the deprecated beta. A target for the deployment. */
  namespacedGkeDeploymentTarget?: NamespacedGkeDeploymentTarget;
}

export const GkeClusterConfig: Schema.Schema<GkeClusterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePoolTarget: Schema.optional(Schema.Array(GkeNodePoolTarget)),
    gkeClusterTarget: Schema.optional(Schema.String),
    namespacedGkeDeploymentTarget: Schema.optional(
      NamespacedGkeDeploymentTarget,
    ),
  }).annotate({ identifier: "GkeClusterConfig" });

export interface LoggingConfig {
  /** The per-package log levels for the driver. This can include "root" package name to configure rootLogger. Examples: - 'com.google = FATAL' - 'root = INFO' - 'org.apache = DEBUG' */
  driverLogLevels?: Record<
    string,
    | "LEVEL_UNSPECIFIED"
    | "ALL"
    | "TRACE"
    | "DEBUG"
    | "INFO"
    | "WARN"
    | "ERROR"
    | "FATAL"
    | "OFF"
    | (string & {})
  >;
}

export const LoggingConfig: Schema.Schema<LoggingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    driverLogLevels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "LoggingConfig" });

export interface SparkRJob {
  /** Optional. A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
  properties?: Record<string, string>;
  /** Required. The HCFS URI of the main R file to use as the driver. Must be a .R file. */
  mainRFileUri?: string;
  /** Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. */
  fileUris?: ReadonlyArray<string>;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig;
  /** Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission. */
  args?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
  archiveUris?: ReadonlyArray<string>;
}

export const SparkRJob: Schema.Schema<SparkRJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    mainRFileUri: Schema.optional(Schema.String),
    fileUris: Schema.optional(Schema.Array(Schema.String)),
    loggingConfig: Schema.optional(LoggingConfig),
    args: Schema.optional(Schema.Array(Schema.String)),
    archiveUris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SparkRJob" });

export interface PySparkJob {
  /** Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file. */
  mainPythonFileUri?: string;
  /** Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. */
  pythonFileUris?: ReadonlyArray<string>;
  /** Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
  properties?: Record<string, string>;
  /** Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission. */
  args?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.Note: Spark applications must be deployed in cluster mode (https://spark.apache.org/docs/latest/cluster-overview.html) for correct environment propagation. */
  archiveUris?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. */
  jarFileUris?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. */
  fileUris?: ReadonlyArray<string>;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig;
}

export const PySparkJob: Schema.Schema<PySparkJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mainPythonFileUri: Schema.optional(Schema.String),
    pythonFileUris: Schema.optional(Schema.Array(Schema.String)),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    args: Schema.optional(Schema.Array(Schema.String)),
    archiveUris: Schema.optional(Schema.Array(Schema.String)),
    jarFileUris: Schema.optional(Schema.Array(Schema.String)),
    fileUris: Schema.optional(Schema.Array(Schema.String)),
    loggingConfig: Schema.optional(LoggingConfig),
  }).annotate({ identifier: "PySparkJob" });

export interface HadoopJob {
  /** Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks. */
  jarFileUris?: ReadonlyArray<string>;
  /** Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks. */
  fileUris?: ReadonlyArray<string>;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig;
  /** Optional. The arguments to pass to the driver. Do not include arguments, such as -libjars or -Dfoo=bar, that can be set as job properties, since a collision might occur that causes an incorrect job submission. */
  args?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip. */
  archiveUris?: ReadonlyArray<string>;
  /** The name of the driver's main class. The jar file containing the class must be in the default CLASSPATH or specified in jar_file_uris. */
  mainClass?: string;
  /** The HCFS URI of the jar file containing the main class. Examples: 'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar' 'hdfs:/tmp/test-samples/custom-wordcount.jar' 'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar' */
  mainJarFileUri?: string;
  /** Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code. */
  properties?: Record<string, string>;
}

export const HadoopJob: Schema.Schema<HadoopJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jarFileUris: Schema.optional(Schema.Array(Schema.String)),
    fileUris: Schema.optional(Schema.Array(Schema.String)),
    loggingConfig: Schema.optional(LoggingConfig),
    args: Schema.optional(Schema.Array(Schema.String)),
    archiveUris: Schema.optional(Schema.Array(Schema.String)),
    mainClass: Schema.optional(Schema.String),
    mainJarFileUri: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "HadoopJob" });

export interface JobStatus {
  /** Output only. The time when this state was entered. */
  stateStartTime?: string;
  /** Output only. A state message specifying the overall job state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "SETUP_DONE"
    | "RUNNING"
    | "CANCEL_PENDING"
    | "CANCEL_STARTED"
    | "CANCELLED"
    | "DONE"
    | "ERROR"
    | "ATTEMPT_FAILURE"
    | (string & {});
  /** Optional. Output only. Job state details, such as an error description if the state is ERROR. */
  details?: string;
  /** Output only. Additional state information, which includes status reported by the agent. */
  substate?:
    | "UNSPECIFIED"
    | "SUBMITTED"
    | "QUEUED"
    | "STALE_STATUS"
    | (string & {});
}

export const JobStatus: Schema.Schema<JobStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stateStartTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
    substate: Schema.optional(Schema.String),
  }).annotate({ identifier: "JobStatus" });

export interface YarnApplication {
  /** Required. The application state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "NEW"
    | "NEW_SAVING"
    | "SUBMITTED"
    | "ACCEPTED"
    | "RUNNING"
    | "FINISHED"
    | "FAILED"
    | "KILLED"
    | (string & {});
  /** Optional. The cumulative CPU time consumed by the application for a job, measured in vcore-seconds. */
  vcoreSeconds?: string;
  /** Required. The numerical progress of the application, from 1 to 100. */
  progress?: number;
  /** Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides application-specific information. The URL uses the internal hostname, and requires a proxy server for resolution and, possibly, access. */
  trackingUrl?: string;
  /** Required. The application name. */
  name?: string;
  /** Optional. The cumulative memory usage of the application for a job, measured in mb-seconds. */
  memoryMbSeconds?: string;
}

export const YarnApplication: Schema.Schema<YarnApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    vcoreSeconds: Schema.optional(Schema.String),
    progress: Schema.optional(Schema.Number),
    trackingUrl: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    memoryMbSeconds: Schema.optional(Schema.String),
  }).annotate({ identifier: "YarnApplication" });

export interface QueryList {
  /** Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } } */
  queries?: ReadonlyArray<string>;
}

export const QueryList: Schema.Schema<QueryList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queries: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "QueryList" });

export interface HiveJob {
  /** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
  continueOnFailure?: boolean;
  /** Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code. */
  properties?: Record<string, string>;
  /** A list of queries. */
  queryList?: QueryList;
  /** Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name="value";). */
  scriptVariables?: Record<string, string>;
  /** The HCFS URI of the script that contains Hive queries. */
  queryFileUri?: string;
  /** Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs. */
  jarFileUris?: ReadonlyArray<string>;
}

export const HiveJob: Schema.Schema<HiveJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    continueOnFailure: Schema.optional(Schema.Boolean),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    queryList: Schema.optional(QueryList),
    scriptVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    queryFileUri: Schema.optional(Schema.String),
    jarFileUris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "HiveJob" });

export interface JobPlacement {
  /** Output only. A cluster UUID generated by the Dataproc service when the job is submitted. */
  clusterUuid?: string;
  /** Optional. Cluster labels to identify a cluster where the job will be submitted. */
  clusterLabels?: Record<string, string>;
  /** Required. The name of the cluster where the job will be submitted. */
  clusterName?: string;
}

export const JobPlacement: Schema.Schema<JobPlacement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterUuid: Schema.optional(Schema.String),
    clusterLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    clusterName: Schema.optional(Schema.String),
  }).annotate({ identifier: "JobPlacement" });

export interface DriverSchedulingConfig {
  /** Required. The number of vCPUs the driver is requesting. */
  vcores?: number;
  /** Required. The amount of memory in MB the driver is requesting. */
  memoryMb?: number;
}

export const DriverSchedulingConfig: Schema.Schema<DriverSchedulingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vcores: Schema.optional(Schema.Number),
    memoryMb: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DriverSchedulingConfig" });

export interface SparkJob {
  /** The HCFS URI of the jar file that contains the main class. */
  mainJarFileUri?: string;
  /** Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
  properties?: Record<string, string>;
  /** The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in SparkJob.jar_file_uris. */
  mainClass?: string;
  /** Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission. */
  args?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
  archiveUris?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. */
  jarFileUris?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. */
  fileUris?: ReadonlyArray<string>;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig;
}

export const SparkJob: Schema.Schema<SparkJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mainJarFileUri: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    mainClass: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    archiveUris: Schema.optional(Schema.Array(Schema.String)),
    jarFileUris: Schema.optional(Schema.Array(Schema.String)),
    fileUris: Schema.optional(Schema.Array(Schema.String)),
    loggingConfig: Schema.optional(LoggingConfig),
  }).annotate({ identifier: "SparkJob" });

export interface FlinkJob {
  /** The HCFS URI of the jar file that contains the main class. */
  mainJarFileUri?: string;
  /** Optional. A mapping of property names to values, used to configure Flink. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/flink/conf/flink-defaults.conf and classes in user code. */
  properties?: Record<string, string>;
  /** Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision might occur that causes an incorrect job submission. */
  args?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Flink driver and tasks. */
  jarFileUris?: ReadonlyArray<string>;
  /** Optional. HCFS URI of the savepoint, which contains the last saved progress for starting the current job. */
  savepointUri?: string;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig;
  /** The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jarFileUris. */
  mainClass?: string;
}

export const FlinkJob: Schema.Schema<FlinkJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mainJarFileUri: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    args: Schema.optional(Schema.Array(Schema.String)),
    jarFileUris: Schema.optional(Schema.Array(Schema.String)),
    savepointUri: Schema.optional(Schema.String),
    loggingConfig: Schema.optional(LoggingConfig),
    mainClass: Schema.optional(Schema.String),
  }).annotate({ identifier: "FlinkJob" });

export interface PigJob {
  /** Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs. */
  jarFileUris?: ReadonlyArray<string>;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig;
  /** The HCFS URI of the script that contains the Pig queries. */
  queryFileUri?: string;
  /** Optional. Mapping of query variable names to values (equivalent to the Pig command: name=[value]). */
  scriptVariables?: Record<string, string>;
  /** A list of queries. */
  queryList?: QueryList;
  /** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
  continueOnFailure?: boolean;
  /** Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code. */
  properties?: Record<string, string>;
}

export const PigJob: Schema.Schema<PigJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jarFileUris: Schema.optional(Schema.Array(Schema.String)),
    loggingConfig: Schema.optional(LoggingConfig),
    queryFileUri: Schema.optional(Schema.String),
    scriptVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    queryList: Schema.optional(QueryList),
    continueOnFailure: Schema.optional(Schema.Boolean),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "PigJob" });

export interface PrestoJob {
  /** A list of queries. */
  queryList?: QueryList;
  /** Optional. The format in which query output will be displayed. See the Presto documentation for supported output formats */
  outputFormat?: string;
  /** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
  continueOnFailure?: boolean;
  /** Optional. A mapping of property names to values. Used to set Presto session properties (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI */
  properties?: Record<string, string>;
  /** Optional. Presto client tags to attach to this query */
  clientTags?: ReadonlyArray<string>;
  /** The HCFS URI of the script that contains SQL queries. */
  queryFileUri?: string;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig;
}

export const PrestoJob: Schema.Schema<PrestoJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryList: Schema.optional(QueryList),
    outputFormat: Schema.optional(Schema.String),
    continueOnFailure: Schema.optional(Schema.Boolean),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    clientTags: Schema.optional(Schema.Array(Schema.String)),
    queryFileUri: Schema.optional(Schema.String),
    loggingConfig: Schema.optional(LoggingConfig),
  }).annotate({ identifier: "PrestoJob" });

export interface SparkSqlJob {
  /** A list of queries. */
  queryList?: QueryList;
  /** Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API might be overwritten. */
  properties?: Record<string, string>;
  /** Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). */
  scriptVariables?: Record<string, string>;
  /** The HCFS URI of the script that contains SQL queries. */
  queryFileUri?: string;
  /** Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH. */
  jarFileUris?: ReadonlyArray<string>;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig;
}

export const SparkSqlJob: Schema.Schema<SparkSqlJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryList: Schema.optional(QueryList),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    scriptVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    queryFileUri: Schema.optional(Schema.String),
    jarFileUris: Schema.optional(Schema.Array(Schema.String)),
    loggingConfig: Schema.optional(LoggingConfig),
  }).annotate({ identifier: "SparkSqlJob" });

export interface TrinoJob {
  /** The HCFS URI of the script that contains SQL queries. */
  queryFileUri?: string;
  /** Optional. The runtime log config for job execution. */
  loggingConfig?: LoggingConfig;
  /** A list of queries. */
  queryList?: QueryList;
  /** Optional. The format in which query output will be displayed. See the Trino documentation for supported output formats */
  outputFormat?: string;
  /** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
  continueOnFailure?: boolean;
  /** Optional. A mapping of property names to values. Used to set Trino session properties (https://trino.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Trino CLI */
  properties?: Record<string, string>;
  /** Optional. Trino client tags to attach to this query */
  clientTags?: ReadonlyArray<string>;
}

export const TrinoJob: Schema.Schema<TrinoJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryFileUri: Schema.optional(Schema.String),
    loggingConfig: Schema.optional(LoggingConfig),
    queryList: Schema.optional(QueryList),
    outputFormat: Schema.optional(Schema.String),
    continueOnFailure: Schema.optional(Schema.Boolean),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    clientTags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TrinoJob" });

export interface Job {
  /** Optional. Job is a SparkR job. */
  sparkRJob?: SparkRJob;
  /** Optional. Job is a PySpark job. */
  pysparkJob?: PySparkJob;
  /** Optional. Job is a Hadoop job. */
  hadoopJob?: HadoopJob;
  /** Output only. The job status. Additional application-specific status information might be contained in the type_job and yarn_applications fields. */
  status?: JobStatus;
  /** Output only. The previous job status. */
  statusHistory?: ReadonlyArray<JobStatus>;
  /** Optional. Job scheduling configuration. */
  scheduling?: JobScheduling;
  /** Output only. A URI pointing to the location of the stdout of the job's driver program. */
  driverOutputResourceUri?: string;
  /** Output only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for testing purposes only. It might be changed before final release. */
  yarnApplications?: ReadonlyArray<YarnApplication>;
  /** Optional. Job is a Hive job. */
  hiveJob?: HiveJob;
  /** Output only. If present, the location of miscellaneous control files which can be used as part of job setup and handling. If not present, control files might be placed in the same location as driver_output_uri. */
  driverControlFilesUri?: string;
  /** Required. Job information, including how, when, and where to run the job. */
  placement?: JobPlacement;
  /** Optional. Driver scheduling configuration. */
  driverSchedulingConfig?: DriverSchedulingConfig;
  /** Optional. Job is a Spark job. */
  sparkJob?: SparkJob;
  /** Optional. Job is a Flink job. */
  flinkJob?: FlinkJob;
  /** Optional. Job is a Pig job. */
  pigJob?: PigJob;
  /** Output only. Indicates whether the job is completed. If the value is false, the job is still in progress. If true, the job is completed, and status.state field will indicate if it was successful, failed, or cancelled. */
  done?: boolean;
  /** Optional. Job is a Presto job. */
  prestoJob?: PrestoJob;
  /** Output only. A UUID that uniquely identifies a job within the project over time. This is in contrast to a user-settable reference.job_id that might be reused over time. */
  jobUuid?: string;
  /** Optional. Job is a SparkSql job. */
  sparkSqlJob?: SparkSqlJob;
  /** Optional. Job is a Trino job. */
  trinoJob?: TrinoJob;
  /** Optional. The fully qualified reference to the job, which can be used to obtain the equivalent REST path of the job resource. If this property is not specified when a job is created, the server generates a job_id. */
  reference?: JobReference;
  /** Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job. */
  labels?: Record<string, string>;
}

export const Job: Schema.Schema<Job> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkRJob: Schema.optional(SparkRJob),
    pysparkJob: Schema.optional(PySparkJob),
    hadoopJob: Schema.optional(HadoopJob),
    status: Schema.optional(JobStatus),
    statusHistory: Schema.optional(Schema.Array(JobStatus)),
    scheduling: Schema.optional(JobScheduling),
    driverOutputResourceUri: Schema.optional(Schema.String),
    yarnApplications: Schema.optional(Schema.Array(YarnApplication)),
    hiveJob: Schema.optional(HiveJob),
    driverControlFilesUri: Schema.optional(Schema.String),
    placement: Schema.optional(JobPlacement),
    driverSchedulingConfig: Schema.optional(DriverSchedulingConfig),
    sparkJob: Schema.optional(SparkJob),
    flinkJob: Schema.optional(FlinkJob),
    pigJob: Schema.optional(PigJob),
    done: Schema.optional(Schema.Boolean),
    prestoJob: Schema.optional(PrestoJob),
    jobUuid: Schema.optional(Schema.String),
    sparkSqlJob: Schema.optional(SparkSqlJob),
    trinoJob: Schema.optional(TrinoJob),
    reference: Schema.optional(JobReference),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Job" });

export interface ListJobsResponse {
  /** Output only. Jobs list. */
  jobs?: ReadonlyArray<Job>;
  /** Optional. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListJobsRequest. */
  nextPageToken?: string;
  /** Output only. List of jobs with kms_key-encrypted parameters that could not be decrypted. A response to a jobs.get request may indicate the reason for the decryption failure for a specific job. */
  unreachable?: ReadonlyArray<string>;
}

export const ListJobsResponse: Schema.Schema<ListJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobs: Schema.optional(Schema.Array(Job)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListJobsResponse" });

export interface RddPartitionInfo {
  blockName?: string;
  diskUsed?: string;
  storageLevel?: string;
  executors?: ReadonlyArray<string>;
  memoryUsed?: string;
}

export const RddPartitionInfo: Schema.Schema<RddPartitionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blockName: Schema.optional(Schema.String),
    diskUsed: Schema.optional(Schema.String),
    storageLevel: Schema.optional(Schema.String),
    executors: Schema.optional(Schema.Array(Schema.String)),
    memoryUsed: Schema.optional(Schema.String),
  }).annotate({ identifier: "RddPartitionInfo" });

export interface ResourceInformation {
  addresses?: ReadonlyArray<string>;
  name?: string;
}

export const ResourceInformation: Schema.Schema<ResourceInformation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addresses: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceInformation" });

export interface MemoryMetrics {
  totalOnHeapStorageMemory?: string;
  usedOffHeapStorageMemory?: string;
  totalOffHeapStorageMemory?: string;
  usedOnHeapStorageMemory?: string;
}

export const MemoryMetrics: Schema.Schema<MemoryMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalOnHeapStorageMemory: Schema.optional(Schema.String),
    usedOffHeapStorageMemory: Schema.optional(Schema.String),
    totalOffHeapStorageMemory: Schema.optional(Schema.String),
    usedOnHeapStorageMemory: Schema.optional(Schema.String),
  }).annotate({ identifier: "MemoryMetrics" });

export interface ExecutorSummary {
  totalInputBytes?: string;
  removeReason?: string;
  memoryUsed?: string;
  totalShuffleWrite?: string;
  attributes?: Record<string, string>;
  completedTasks?: number;
  resourceProfileId?: number;
  totalTasks?: number;
  executorId?: string;
  failedTasks?: number;
  diskUsed?: string;
  totalShuffleRead?: string;
  excludedInStages?: ReadonlyArray<string>;
  isActive?: boolean;
  rddBlocks?: number;
  maxTasks?: number;
  removeTime?: string;
  maxMemory?: string;
  peakMemoryMetrics?: ExecutorMetrics;
  totalGcTimeMillis?: string;
  isExcluded?: boolean;
  activeTasks?: number;
  addTime?: string;
  resources?: Record<string, ResourceInformation>;
  memoryMetrics?: MemoryMetrics;
  totalCores?: number;
  totalDurationMillis?: string;
  hostPort?: string;
  executorLogs?: Record<string, string>;
}

export const ExecutorSummary: Schema.Schema<ExecutorSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalInputBytes: Schema.optional(Schema.String),
    removeReason: Schema.optional(Schema.String),
    memoryUsed: Schema.optional(Schema.String),
    totalShuffleWrite: Schema.optional(Schema.String),
    attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    completedTasks: Schema.optional(Schema.Number),
    resourceProfileId: Schema.optional(Schema.Number),
    totalTasks: Schema.optional(Schema.Number),
    executorId: Schema.optional(Schema.String),
    failedTasks: Schema.optional(Schema.Number),
    diskUsed: Schema.optional(Schema.String),
    totalShuffleRead: Schema.optional(Schema.String),
    excludedInStages: Schema.optional(Schema.Array(Schema.String)),
    isActive: Schema.optional(Schema.Boolean),
    rddBlocks: Schema.optional(Schema.Number),
    maxTasks: Schema.optional(Schema.Number),
    removeTime: Schema.optional(Schema.String),
    maxMemory: Schema.optional(Schema.String),
    peakMemoryMetrics: Schema.optional(ExecutorMetrics),
    totalGcTimeMillis: Schema.optional(Schema.String),
    isExcluded: Schema.optional(Schema.Boolean),
    activeTasks: Schema.optional(Schema.Number),
    addTime: Schema.optional(Schema.String),
    resources: Schema.optional(
      Schema.Record(Schema.String, ResourceInformation),
    ),
    memoryMetrics: Schema.optional(MemoryMetrics),
    totalCores: Schema.optional(Schema.Number),
    totalDurationMillis: Schema.optional(Schema.String),
    hostPort: Schema.optional(Schema.String),
    executorLogs: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ExecutorSummary" });

export interface SearchSessionSparkApplicationExecutorsResponse {
  /** Details about executors used by the application. */
  sparkApplicationExecutors?: ReadonlyArray<ExecutorSummary>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSessionSparkApplicationExecutorsRequest. */
  nextPageToken?: string;
}

export const SearchSessionSparkApplicationExecutorsResponse: Schema.Schema<SearchSessionSparkApplicationExecutorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplicationExecutors: Schema.optional(Schema.Array(ExecutorSummary)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchSessionSparkApplicationExecutorsResponse" });

export interface Expr {
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface Binding {
  /** The condition that is associated with this binding.If the condition evaluates to true, then this binding applies to the current request.If the condition evaluates to false, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Specifies the principals requesting access for a Google Cloud resource. members can have the following values: allUsers: A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. user:{emailid}: An email address that represents a specific Google account. For example, alice@example.com . serviceAccount:{emailid}: An email address that represents a Google service account. For example, my-other-app@appspot.gserviceaccount.com. serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]: An identifier for a Kubernetes service account (https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, my-project.svc.id.goog[my-namespace/my-kubernetes-sa]. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: The G Suite domain (primary) that represents all the users of that domain. For example, google.com or example.com. principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}: A single identity in a workforce identity pool. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}: All workforce identities in a group. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}: All workforce identities with a specific attribute value. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*: All identities in a workforce identity pool. principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}: A single identity in a workload identity pool. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}: A workload identity pool group. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}: All identities in a workload identity pool with a certain attribute. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*: All identities in a workload identity pool. deleted:user:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a user that has been recently deleted. For example, alice@example.com?uid=123456789012345678901. If the user is recovered, this value reverts to user:{emailid} and the recovered user retains the role in the binding. deleted:serviceAccount:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901. If the service account is undeleted, this value reverts to serviceAccount:{emailid} and the undeleted service account retains the role in the binding. deleted:group:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, admins@example.com?uid=123456789012345678901. If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding. deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}: Deleted single identity in a workforce identity pool. For example, deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value. */
  members?: ReadonlyArray<string>;
  /** Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner.For an overview of the IAM roles and permissions, see the IAM documentation (https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see here (https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Expr),
    members: Schema.optional(Schema.Array(Schema.String)),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "Binding" });

export interface Policy {
  /** Associates a list of members, or principals, with a role. Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one principal.The bindings in a Policy can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the bindings grant 50 different roles to user:alice@example.com, and not to any other principal, then you can add another 1,450 principals to the bindings in the Policy. */
  bindings?: ReadonlyArray<Binding>;
  /** etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost. */
  etag?: string;
  /** Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bindings: Schema.optional(Schema.Array(Binding)),
    etag: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface KerberosConfig {
  /** Optional. The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate. */
  truststoreUri?: string;
  /** Optional. The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate. */
  keystoreUri?: string;
  /** Optional. The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database. */
  kdcDbKeyUri?: string;
  /** Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc. */
  keyPasswordUri?: string;
  /** Optional. The lifetime of the ticket granting ticket, in hours. If not specified, or user specifies 0, then default value 10 will be used. */
  tgtLifetimeHours?: number;
  /** Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore. For the self-signed certificate, this password is generated by Dataproc. */
  keystorePasswordUri?: string;
  /** Optional. The URI of the KMS key used to encrypt sensitive files. */
  kmsKeyUri?: string;
  /** Optional. The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship. */
  crossRealmTrustSharedPasswordUri?: string;
  /** Optional. The Cloud Storage URI of a KMS encrypted file containing the root principal password. */
  rootPrincipalPasswordUri?: string;
  /** Optional. The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship. */
  crossRealmTrustKdc?: string;
  /** Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc. */
  truststorePasswordUri?: string;
  /** Optional. The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm. */
  realm?: string;
  /** Optional. Flag to indicate whether to Kerberize the cluster (default: false). Set this field to true to enable Kerberos on a cluster. */
  enableKerberos?: boolean;
  /** Optional. The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust. */
  crossRealmTrustRealm?: string;
  /** Optional. The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship. */
  crossRealmTrustAdminServer?: string;
}

export const KerberosConfig: Schema.Schema<KerberosConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    truststoreUri: Schema.optional(Schema.String),
    keystoreUri: Schema.optional(Schema.String),
    kdcDbKeyUri: Schema.optional(Schema.String),
    keyPasswordUri: Schema.optional(Schema.String),
    tgtLifetimeHours: Schema.optional(Schema.Number),
    keystorePasswordUri: Schema.optional(Schema.String),
    kmsKeyUri: Schema.optional(Schema.String),
    crossRealmTrustSharedPasswordUri: Schema.optional(Schema.String),
    rootPrincipalPasswordUri: Schema.optional(Schema.String),
    crossRealmTrustKdc: Schema.optional(Schema.String),
    truststorePasswordUri: Schema.optional(Schema.String),
    realm: Schema.optional(Schema.String),
    enableKerberos: Schema.optional(Schema.Boolean),
    crossRealmTrustRealm: Schema.optional(Schema.String),
    crossRealmTrustAdminServer: Schema.optional(Schema.String),
  }).annotate({ identifier: "KerberosConfig" });

export interface IdentityConfig {
  /** Required. Map of user to service account. */
  userServiceAccountMapping?: Record<string, string>;
}

export const IdentityConfig: Schema.Schema<IdentityConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userServiceAccountMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "IdentityConfig" });

export interface SecurityConfig {
  /** Optional. Kerberos related configuration. */
  kerberosConfig?: KerberosConfig;
  /** Optional. Identity related configuration, including service account based secure multi-tenancy user mappings. */
  identityConfig?: IdentityConfig;
}

export const SecurityConfig: Schema.Schema<SecurityConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kerberosConfig: Schema.optional(KerberosConfig),
    identityConfig: Schema.optional(IdentityConfig),
  }).annotate({ identifier: "SecurityConfig" });

export interface BuildInfo {
  /** Optional. Build key. */
  buildKey?: string;
  /** Optional. Build value. */
  buildValue?: string;
}

export const BuildInfo: Schema.Schema<BuildInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buildKey: Schema.optional(Schema.String),
    buildValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuildInfo" });

export interface NativeBuildInfoUiData {
  /** Optional. Build class of Native. */
  buildClass?: string;
  /** Optional. Build related details. */
  buildInfo?: ReadonlyArray<BuildInfo>;
}

export const NativeBuildInfoUiData: Schema.Schema<NativeBuildInfoUiData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buildClass: Schema.optional(Schema.String),
    buildInfo: Schema.optional(Schema.Array(BuildInfo)),
  }).annotate({ identifier: "NativeBuildInfoUiData" });

export interface JobData {
  numTasks?: number;
  numCompletedStages?: number;
  submissionTime?: string;
  numCompletedIndices?: number;
  numActiveTasks?: number;
  name?: string;
  completionTime?: string;
  stageIds?: ReadonlyArray<string>;
  status?:
    | "JOB_EXECUTION_STATUS_UNSPECIFIED"
    | "JOB_EXECUTION_STATUS_RUNNING"
    | "JOB_EXECUTION_STATUS_SUCCEEDED"
    | "JOB_EXECUTION_STATUS_FAILED"
    | "JOB_EXECUTION_STATUS_UNKNOWN"
    | (string & {});
  numFailedStages?: number;
  jobGroup?: string;
  jobId?: string;
  description?: string;
  numFailedTasks?: number;
  numActiveStages?: number;
  numCompletedTasks?: number;
  numSkippedTasks?: number;
  numKilledTasks?: number;
  sqlExecutionId?: string;
  killTasksSummary?: Record<string, number>;
  numSkippedStages?: number;
  skippedStages?: ReadonlyArray<number>;
}

export const JobData: Schema.Schema<JobData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numTasks: Schema.optional(Schema.Number),
    numCompletedStages: Schema.optional(Schema.Number),
    submissionTime: Schema.optional(Schema.String),
    numCompletedIndices: Schema.optional(Schema.Number),
    numActiveTasks: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    completionTime: Schema.optional(Schema.String),
    stageIds: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.optional(Schema.String),
    numFailedStages: Schema.optional(Schema.Number),
    jobGroup: Schema.optional(Schema.String),
    jobId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    numFailedTasks: Schema.optional(Schema.Number),
    numActiveStages: Schema.optional(Schema.Number),
    numCompletedTasks: Schema.optional(Schema.Number),
    numSkippedTasks: Schema.optional(Schema.Number),
    numKilledTasks: Schema.optional(Schema.Number),
    sqlExecutionId: Schema.optional(Schema.String),
    killTasksSummary: Schema.optional(
      Schema.Record(Schema.String, Schema.Number),
    ),
    numSkippedStages: Schema.optional(Schema.Number),
    skippedStages: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "JobData" });

export interface AccessSparkApplicationJobResponse {
  /** Output only. Data corresponding to a spark job. */
  jobData?: JobData;
}

export const AccessSparkApplicationJobResponse: Schema.Schema<AccessSparkApplicationJobResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobData: Schema.optional(JobData),
  }).annotate({ identifier: "AccessSparkApplicationJobResponse" });

export interface BasicYarnAutoscalingConfig {
  /** Required. Fraction of average YARN pending memory in the last cooldown period for which to remove workers. A scale-down factor of 1 will result in scaling down so that there is no available memory remaining after the update (more aggressive scaling). A scale-down factor of 0 disables removing workers, which can be beneficial for autoscaling a single job. See How autoscaling works (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/autoscaling#how_autoscaling_works) for more information.Bounds: 0.0, 1.0. */
  scaleDownFactor?: number;
  /** Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. */
  scaleDownMinWorkerFraction?: number;
  /** Required. Timeout for YARN graceful decommissioning of Node Managers. Specifies the duration to wait for jobs to complete before forcefully removing workers (and potentially interrupting jobs). Only applicable to downscaling operations.Bounds: 0s, 1d. */
  gracefulDecommissionTimeout?: string;
  /** Required. Fraction of average YARN pending memory in the last cooldown period for which to add workers. A scale-up factor of 1.0 will result in scaling up so that there is no pending memory remaining after the update (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling). See How autoscaling works (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/autoscaling#how_autoscaling_works) for more information.Bounds: 0.0, 1.0. */
  scaleUpFactor?: number;
  /** Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. */
  scaleUpMinWorkerFraction?: number;
}

export const BasicYarnAutoscalingConfig: Schema.Schema<BasicYarnAutoscalingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scaleDownFactor: Schema.optional(Schema.Number),
    scaleDownMinWorkerFraction: Schema.optional(Schema.Number),
    gracefulDecommissionTimeout: Schema.optional(Schema.String),
    scaleUpFactor: Schema.optional(Schema.Number),
    scaleUpMinWorkerFraction: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BasicYarnAutoscalingConfig" });

export interface AccessSessionSparkApplicationStageAttemptResponse {
  /** Output only. Data corresponding to a stage. */
  stageData?: StageData;
}

export const AccessSessionSparkApplicationStageAttemptResponse: Schema.Schema<AccessSessionSparkApplicationStageAttemptResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stageData: Schema.optional(StageData),
  }).annotate({
    identifier: "AccessSessionSparkApplicationStageAttemptResponse",
  });

export interface SearchSessionSparkApplicationSqlQueriesResponse {
  /** Output only. SQL Execution Data */
  sparkApplicationSqlQueries?: ReadonlyArray<SqlExecutionUiData>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSessionSparkApplicationSqlQueriesRequest. */
  nextPageToken?: string;
}

export const SearchSessionSparkApplicationSqlQueriesResponse: Schema.Schema<SearchSessionSparkApplicationSqlQueriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplicationSqlQueries: Schema.optional(
      Schema.Array(SqlExecutionUiData),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "SearchSessionSparkApplicationSqlQueriesResponse",
  });

export interface StreamBlockData {
  deserialized?: boolean;
  storageLevel?: string;
  name?: string;
  executorId?: string;
  hostPort?: string;
  useDisk?: boolean;
  useMemory?: boolean;
  diskSize?: string;
  memSize?: string;
}

export const StreamBlockData: Schema.Schema<StreamBlockData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deserialized: Schema.optional(Schema.Boolean),
    storageLevel: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    executorId: Schema.optional(Schema.String),
    hostPort: Schema.optional(Schema.String),
    useDisk: Schema.optional(Schema.Boolean),
    useMemory: Schema.optional(Schema.Boolean),
    diskSize: Schema.optional(Schema.String),
    memSize: Schema.optional(Schema.String),
  }).annotate({ identifier: "StreamBlockData" });

export interface AccessSessionSparkApplicationJobResponse {
  /** Output only. Data corresponding to a spark job. */
  jobData?: JobData;
}

export const AccessSessionSparkApplicationJobResponse: Schema.Schema<AccessSessionSparkApplicationJobResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobData: Schema.optional(JobData),
  }).annotate({ identifier: "AccessSessionSparkApplicationJobResponse" });

export interface Metric {
  /** Required. A standard set of metrics is collected unless metricOverrides are specified for the metric source (see Custom metrics (https://cloud.google.com/dataproc/docs/guides/dataproc-metrics#custom_metrics) for more information). */
  metricSource?:
    | "METRIC_SOURCE_UNSPECIFIED"
    | "MONITORING_AGENT_DEFAULTS"
    | "HDFS"
    | "SPARK"
    | "YARN"
    | "SPARK_HISTORY_SERVER"
    | "HIVESERVER2"
    | "HIVEMETASTORE"
    | "FLINK"
    | (string & {});
  /** Optional. Specify one or more Custom metrics (https://cloud.google.com/dataproc/docs/guides/dataproc-metrics#custom_metrics) to collect for the metric course (for the SPARK metric source (any Spark metric (https://spark.apache.org/docs/latest/monitoring.html#metrics) can be specified).Provide metrics in the following format: METRIC_SOURCE: INSTANCE:GROUP:METRIC Use camelcase as appropriate.Examples: yarn:ResourceManager:QueueMetrics:AppsCompleted spark:driver:DAGScheduler:job.allJobs sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.committed hiveserver2:JVM:Memory:NonHeapMemoryUsage.used Notes: Only the specified overridden metrics are collected for the metric source. For example, if one or more spark:executive metrics are listed as metric overrides, other SPARK metrics are not collected. The collection of the metrics for other enabled custom metric sources is unaffected. For example, if both SPARK and YARN metric sources are enabled, and overrides are provided for Spark metrics only, all YARN metrics are collected. */
  metricOverrides?: ReadonlyArray<string>;
}

export const Metric: Schema.Schema<Metric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricSource: Schema.optional(Schema.String),
    metricOverrides: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Metric" });

export interface DataprocMetricConfig {
  /** Required. Metrics sources to enable. */
  metrics?: ReadonlyArray<Metric>;
}

export const DataprocMetricConfig: Schema.Schema<DataprocMetricConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metrics: Schema.optional(Schema.Array(Metric)),
  }).annotate({ identifier: "DataprocMetricConfig" });

export interface SparkPlanGraphEdge {
  fromId?: string;
  toId?: string;
}

export const SparkPlanGraphEdge: Schema.Schema<SparkPlanGraphEdge> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fromId: Schema.optional(Schema.String),
    toId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SparkPlanGraphEdge" });

export interface SparkPlanGraphNode {
  name?: string;
  desc?: string;
  /** Optional. Additional metadata for the spark plan graph cluster. */
  metadata?: Record<string, string>;
  sparkPlanGraphNodeId?: string;
  metrics?: ReadonlyArray<SqlPlanMetric>;
}

export const SparkPlanGraphNode: Schema.Schema<SparkPlanGraphNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    desc: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sparkPlanGraphNodeId: Schema.optional(Schema.String),
    metrics: Schema.optional(Schema.Array(SqlPlanMetric)),
  }).annotate({ identifier: "SparkPlanGraphNode" });

export interface SparkPlanGraphCluster {
  sparkPlanGraphClusterId?: string;
  name?: string;
  desc?: string;
  /** Optional. Additional metadata for the spark plan graph cluster. */
  metadata?: Record<string, string>;
  metrics?: ReadonlyArray<SqlPlanMetric>;
  nodes?: ReadonlyArray<SparkPlanGraphNodeWrapper>;
}

export const SparkPlanGraphCluster: Schema.Schema<SparkPlanGraphCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sparkPlanGraphClusterId: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      desc: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      metrics: Schema.optional(Schema.Array(SqlPlanMetric)),
      nodes: Schema.optional(Schema.Array(SparkPlanGraphNodeWrapper)),
    }),
  ).annotate({
    identifier: "SparkPlanGraphCluster",
  }) as any as Schema.Schema<SparkPlanGraphCluster>;

export interface SparkPlanGraphNodeWrapper {
  node?: SparkPlanGraphNode;
  cluster?: SparkPlanGraphCluster;
}

export const SparkPlanGraphNodeWrapper: Schema.Schema<SparkPlanGraphNodeWrapper> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      node: Schema.optional(SparkPlanGraphNode),
      cluster: Schema.optional(SparkPlanGraphCluster),
    }),
  ).annotate({
    identifier: "SparkPlanGraphNodeWrapper",
  }) as any as Schema.Schema<SparkPlanGraphNodeWrapper>;

export interface SparkPlanGraph {
  edges?: ReadonlyArray<SparkPlanGraphEdge>;
  executionId?: string;
  nodes?: ReadonlyArray<SparkPlanGraphNodeWrapper>;
}

export const SparkPlanGraph: Schema.Schema<SparkPlanGraph> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    edges: Schema.optional(Schema.Array(SparkPlanGraphEdge)),
    executionId: Schema.optional(Schema.String),
    nodes: Schema.optional(Schema.Array(SparkPlanGraphNodeWrapper)),
  }).annotate({ identifier: "SparkPlanGraph" });

export interface AccessSparkApplicationSqlSparkPlanGraphResponse {
  /** SparkPlanGraph for a Spark Application execution. */
  sparkPlanGraph?: SparkPlanGraph;
}

export const AccessSparkApplicationSqlSparkPlanGraphResponse: Schema.Schema<AccessSparkApplicationSqlSparkPlanGraphResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkPlanGraph: Schema.optional(SparkPlanGraph),
  }).annotate({
    identifier: "AccessSparkApplicationSqlSparkPlanGraphResponse",
  });

export interface DiagnoseClusterResults {
  /** Output only. The Cloud Storage URI of the diagnostic output. The output report is a plain text file with a summary of collected diagnostics. */
  outputUri?: string;
}

export const DiagnoseClusterResults: Schema.Schema<DiagnoseClusterResults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiagnoseClusterResults" });

export interface SparkRuntimeInfo {
  javaVersion?: string;
  javaHome?: string;
  scalaVersion?: string;
}

export const SparkRuntimeInfo: Schema.Schema<SparkRuntimeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    javaVersion: Schema.optional(Schema.String),
    javaHome: Schema.optional(Schema.String),
    scalaVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "SparkRuntimeInfo" });

export interface ExecutorResourceRequest {
  vendor?: string;
  discoveryScript?: string;
  resourceName?: string;
  amount?: string;
}

export const ExecutorResourceRequest: Schema.Schema<ExecutorResourceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vendor: Schema.optional(Schema.String),
    discoveryScript: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    amount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExecutorResourceRequest" });

export interface TaskResourceRequest {
  resourceName?: string;
  amount?: number;
}

export const TaskResourceRequest: Schema.Schema<TaskResourceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    amount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TaskResourceRequest" });

export interface ResourceProfileInfo {
  resourceProfileId?: number;
  executorResources?: Record<string, ExecutorResourceRequest>;
  taskResources?: Record<string, TaskResourceRequest>;
}

export const ResourceProfileInfo: Schema.Schema<ResourceProfileInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceProfileId: Schema.optional(Schema.Number),
    executorResources: Schema.optional(
      Schema.Record(Schema.String, ExecutorResourceRequest),
    ),
    taskResources: Schema.optional(
      Schema.Record(Schema.String, TaskResourceRequest),
    ),
  }).annotate({ identifier: "ResourceProfileInfo" });

export interface ApplicationEnvironmentInfo {
  hadoopProperties?: Record<string, string>;
  runtime?: SparkRuntimeInfo;
  classpathEntries?: Record<string, string>;
  sparkProperties?: Record<string, string>;
  systemProperties?: Record<string, string>;
  metricsProperties?: Record<string, string>;
  resourceProfiles?: ReadonlyArray<ResourceProfileInfo>;
}

export const ApplicationEnvironmentInfo: Schema.Schema<ApplicationEnvironmentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hadoopProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    runtime: Schema.optional(SparkRuntimeInfo),
    classpathEntries: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    sparkProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    systemProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    metricsProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    resourceProfiles: Schema.optional(Schema.Array(ResourceProfileInfo)),
  }).annotate({ identifier: "ApplicationEnvironmentInfo" });

export interface AccessSparkApplicationEnvironmentInfoResponse {
  /** Details about the Environment that the application is running in. */
  applicationEnvironmentInfo?: ApplicationEnvironmentInfo;
}

export const AccessSparkApplicationEnvironmentInfoResponse: Schema.Schema<AccessSparkApplicationEnvironmentInfoResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationEnvironmentInfo: Schema.optional(ApplicationEnvironmentInfo),
  }).annotate({ identifier: "AccessSparkApplicationEnvironmentInfoResponse" });

export interface RegexValidation {
  /** Required. RE2 regular expressions used to validate the parameter's value. The value must match the regex in its entirety (substring matches are not sufficient). */
  regexes?: ReadonlyArray<string>;
}

export const RegexValidation: Schema.Schema<RegexValidation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regexes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RegexValidation" });

export interface ValueValidation {
  /** Required. List of allowed values for the parameter. */
  values?: ReadonlyArray<string>;
}

export const ValueValidation: Schema.Schema<ValueValidation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ValueValidation" });

export interface ParameterValidation {
  /** Validation based on regular expressions. */
  regex?: RegexValidation;
  /** Validation based on a list of allowed values. */
  values?: ValueValidation;
}

export const ParameterValidation: Schema.Schema<ParameterValidation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regex: Schema.optional(RegexValidation),
    values: Schema.optional(ValueValidation),
  }).annotate({ identifier: "ParameterValidation" });

export interface TemplateParameter {
  /** Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters. */
  name?: string;
  /** Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter's list of field paths.A field path is similar in syntax to a google.protobuf.FieldMask. For example, a field path that references the zone field of a workflow template's cluster selector would be specified as placement.clusterSelector.zone.Also, field paths can reference fields using the following syntax: Values in maps can be referenced by key: labels'key' placement.clusterSelector.clusterLabels'key' placement.managedCluster.labels'key' placement.clusterSelector.clusterLabels'key' jobs'step-id'.labels'key' Jobs in the jobs list can be referenced by step-id: jobs'step-id'.hadoopJob.mainJarFileUri jobs'step-id'.hiveJob.queryFileUri jobs'step-id'.pySparkJob.mainPythonFileUri jobs'step-id'.hadoopJob.jarFileUris0 jobs'step-id'.hadoopJob.archiveUris0 jobs'step-id'.hadoopJob.fileUris0 jobs'step-id'.pySparkJob.pythonFileUris0 Items in repeated fields can be referenced by a zero-based index: jobs'step-id'.sparkJob.args0 Other examples: jobs'step-id'.hadoopJob.properties'key' jobs'step-id'.hadoopJob.args0 jobs'step-id'.hiveJob.scriptVariables'key' jobs'step-id'.hadoopJob.mainJarFileUri placement.clusterSelector.zoneIt may not be possible to parameterize maps and repeated fields in their entirety since only individual map values and individual items in repeated fields can be referenced. For example, the following field paths are invalid: placement.clusterSelector.clusterLabels jobs'step-id'.sparkJob.args */
  fields?: ReadonlyArray<string>;
  /** Optional. Brief description of the parameter. Must not exceed 1024 characters. */
  description?: string;
  /** Optional. Validation rules to be applied to this parameter's value. */
  validation?: ParameterValidation;
}

export const TemplateParameter: Schema.Schema<TemplateParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    validation: Schema.optional(ParameterValidation),
  }).annotate({ identifier: "TemplateParameter" });

export interface OrderedJob {
  /** Optional. Job is a Pig job. */
  pigJob?: PigJob;
  /** Optional. Job is a Presto job. */
  prestoJob?: PrestoJob;
  /** Optional. Job is a SparkSql job. */
  sparkSqlJob?: SparkSqlJob;
  /** Optional. Job is a Trino job. */
  trinoJob?: TrinoJob;
  /** Optional. The labels to associate with this job.Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given job. */
  labels?: Record<string, string>;
  /** Optional. Job is a Hive job. */
  hiveJob?: HiveJob;
  /** Required. The step id. The id must be unique among all jobs within the template.The step id is used as prefix for job id, as job goog-dataproc-workflow-step-id label, and in prerequisiteStepIds field from other steps.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters. */
  stepId?: string;
  /** Optional. Job is a Spark job. */
  sparkJob?: SparkJob;
  /** Optional. Job is a Flink job. */
  flinkJob?: FlinkJob;
  /** Optional. Job scheduling configuration. */
  scheduling?: JobScheduling;
  /** Optional. Job is a SparkR job. */
  sparkRJob?: SparkRJob;
  /** Optional. Job is a PySpark job. */
  pysparkJob?: PySparkJob;
  /** Optional. Job is a Hadoop job. */
  hadoopJob?: HadoopJob;
  /** Optional. The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow. */
  prerequisiteStepIds?: ReadonlyArray<string>;
}

export const OrderedJob: Schema.Schema<OrderedJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pigJob: Schema.optional(PigJob),
    prestoJob: Schema.optional(PrestoJob),
    sparkSqlJob: Schema.optional(SparkSqlJob),
    trinoJob: Schema.optional(TrinoJob),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    hiveJob: Schema.optional(HiveJob),
    stepId: Schema.optional(Schema.String),
    sparkJob: Schema.optional(SparkJob),
    flinkJob: Schema.optional(FlinkJob),
    scheduling: Schema.optional(JobScheduling),
    sparkRJob: Schema.optional(SparkRJob),
    pysparkJob: Schema.optional(PySparkJob),
    hadoopJob: Schema.optional(HadoopJob),
    prerequisiteStepIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "OrderedJob" });

export interface AttachedDiskConfig {
  /** Optional. Disk type. */
  diskType?:
    | "DISK_TYPE_UNSPECIFIED"
    | "HYPERDISK_BALANCED"
    | "HYPERDISK_EXTREME"
    | "HYPERDISK_ML"
    | "HYPERDISK_THROUGHPUT"
    | (string & {});
  /** Optional. Disk size in GB. */
  diskSizeGb?: number;
  /** Optional. Indicates how many IOPS to provision for the attached disk. This sets the number of I/O operations per second that the disk can handle. See https://cloud.google.com/compute/docs/disks/hyperdisks#hyperdisk-features */
  provisionedIops?: string;
  /** Optional. Indicates how much throughput to provision for the attached disk. This sets the number of throughput mb per second that the disk can handle. See https://cloud.google.com/compute/docs/disks/hyperdisks#hyperdisk-features */
  provisionedThroughput?: string;
}

export const AttachedDiskConfig: Schema.Schema<AttachedDiskConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskType: Schema.optional(Schema.String),
    diskSizeGb: Schema.optional(Schema.Number),
    provisionedIops: Schema.optional(Schema.String),
    provisionedThroughput: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttachedDiskConfig" });

export interface DiskConfig {
  /** Optional. Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle. Values must be greater than or equal to 1. This field is supported only if boot_disk_type is hyperdisk-balanced. */
  bootDiskProvisionedThroughput?: string;
  /** Optional. Type of the boot disk (default is pd-standard). Valid values: pd-balanced (Persistent Disk Balanced Solid State Drive), pd-ssd (Persistent Disk Solid State Drive), or pd-standard (Persistent Disk Hard Disk Drive). See Disk types (https://cloud.google.com/compute/docs/disks#disk-types). */
  bootDiskType?: string;
  /** Optional. Number of attached SSDs, from 0 to 8 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.Note: Local SSD options may vary by machine type and number of vCPUs selected. */
  numLocalSsds?: number;
  /** Optional. Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle. This field is supported only if boot_disk_type is hyperdisk-balanced. */
  bootDiskProvisionedIops?: string;
  /** Optional. Size in GB of the boot disk (default is 500GB). */
  bootDiskSizeGb?: number;
  /** Optional. Interface type of local SSDs (default is scsi). Valid values: scsi (Small Computer System Interface), nvme (Non-Volatile Memory Express). See local SSD performance (https://cloud.google.com/compute/docs/disks/local-ssd#performance). */
  localSsdInterface?: string;
  /** Optional. A list of attached disk configs for a group of VM instances. */
  attachedDiskConfigs?: ReadonlyArray<AttachedDiskConfig>;
}

export const DiskConfig: Schema.Schema<DiskConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bootDiskProvisionedThroughput: Schema.optional(Schema.String),
    bootDiskType: Schema.optional(Schema.String),
    numLocalSsds: Schema.optional(Schema.Number),
    bootDiskProvisionedIops: Schema.optional(Schema.String),
    bootDiskSizeGb: Schema.optional(Schema.Number),
    localSsdInterface: Schema.optional(Schema.String),
    attachedDiskConfigs: Schema.optional(Schema.Array(AttachedDiskConfig)),
  }).annotate({ identifier: "DiskConfig" });

export interface ManagedGroupConfig {
  /** Output only. The name of the Instance Group Manager for this group. */
  instanceGroupManagerName?: string;
  /** Output only. The name of the Instance Template used for the Managed Instance Group. */
  instanceTemplateName?: string;
  /** Output only. The partial URI to the instance group manager for this group. E.g. projects/my-project/regions/us-central1/instanceGroupManagers/my-igm. */
  instanceGroupManagerUri?: string;
}

export const ManagedGroupConfig: Schema.Schema<ManagedGroupConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceGroupManagerName: Schema.optional(Schema.String),
    instanceTemplateName: Schema.optional(Schema.String),
    instanceGroupManagerUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ManagedGroupConfig" });

export interface AcceleratorConfig {
  /** Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See Compute Engine AcceleratorTypes (https://cloud.google.com/compute/docs/reference/v1/acceleratorTypes).Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4. */
  acceleratorTypeUri?: string;
  /** The number of the accelerator cards of this type exposed to this instance. */
  acceleratorCount?: number;
}

export const AcceleratorConfig: Schema.Schema<AcceleratorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acceleratorTypeUri: Schema.optional(Schema.String),
    acceleratorCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AcceleratorConfig" });

export interface ProvisioningModelMix {
  /** Optional. The base capacity that will always use Standard VMs to avoid risk of more preemption than the minimum capacity you need. Dataproc will create only standard VMs until it reaches standard_capacity_base, then it will start using standard_capacity_percent_above_base to mix Spot with Standard VMs. eg. If 15 instances are requested and standard_capacity_base is 5, Dataproc will create 5 standard VMs and then start mixing spot and standard VMs for remaining 10 instances. */
  standardCapacityBase?: number;
  /** Optional. The percentage of target capacity that should use Standard VM. The remaining percentage will use Spot VMs. The percentage applies only to the capacity above standard_capacity_base. eg. If 15 instances are requested and standard_capacity_base is 5 and standard_capacity_percent_above_base is 30, Dataproc will create 5 standard VMs and then start mixing spot and standard VMs for remaining 10 instances. The mix will be 30% standard and 70% spot. */
  standardCapacityPercentAboveBase?: number;
}

export const ProvisioningModelMix: Schema.Schema<ProvisioningModelMix> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    standardCapacityBase: Schema.optional(Schema.Number),
    standardCapacityPercentAboveBase: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ProvisioningModelMix" });

export interface InstanceSelection {
  /** Optional. Full machine-type names, e.g. "n1-standard-16". */
  machineTypes?: ReadonlyArray<string>;
  /** Optional. Preference of this instance selection. Lower number means higher preference. Dataproc will first try to create a VM based on the machine-type with priority rank and fallback to next rank based on availability. Machine types and instance selections with the same priority have the same preference. */
  rank?: number;
}

export const InstanceSelection: Schema.Schema<InstanceSelection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineTypes: Schema.optional(Schema.Array(Schema.String)),
    rank: Schema.optional(Schema.Number),
  }).annotate({ identifier: "InstanceSelection" });

export interface InstanceSelectionResult {
  /** Output only. Number of VM provisioned with the machine_type. */
  vmCount?: number;
  /** Output only. Full machine-type names, e.g. "n1-standard-16". */
  machineType?: string;
}

export const InstanceSelectionResult: Schema.Schema<InstanceSelectionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmCount: Schema.optional(Schema.Number),
    machineType: Schema.optional(Schema.String),
  }).annotate({ identifier: "InstanceSelectionResult" });

export interface InstanceFlexibilityPolicy {
  /** Output only. A map of instance short name to machine type. The key is the short name of the Compute Engine instance, and the value is the full machine-type name (e.g., 'n1-standard-16'). See Machine types for more information on valid machine type strings. */
  instanceMachineTypes?: Record<string, string>;
  /** Optional. Defines how the Group selects the provisioning model to ensure required reliability. */
  provisioningModelMix?: ProvisioningModelMix;
  /** Optional. List of instance selection options that the group will use when creating new VMs. */
  instanceSelectionList?: ReadonlyArray<InstanceSelection>;
  /** Output only. A list of instance selection results in the group. */
  instanceSelectionResults?: ReadonlyArray<InstanceSelectionResult>;
}

export const InstanceFlexibilityPolicy: Schema.Schema<InstanceFlexibilityPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceMachineTypes: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    provisioningModelMix: Schema.optional(ProvisioningModelMix),
    instanceSelectionList: Schema.optional(Schema.Array(InstanceSelection)),
    instanceSelectionResults: Schema.optional(
      Schema.Array(InstanceSelectionResult),
    ),
  }).annotate({ identifier: "InstanceFlexibilityPolicy" });

export interface StartupConfig {
  /** Optional. The config setting to enable cluster creation/ updation to be successful only after required_registration_fraction of instances are up and running. This configuration is applicable to only secondary workers for now. The cluster will fail if required_registration_fraction of instances are not available. This will include instance creation, agent registration, and service registration (if enabled). */
  requiredRegistrationFraction?: number;
}

export const StartupConfig: Schema.Schema<StartupConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requiredRegistrationFraction: Schema.optional(Schema.Number),
  }).annotate({ identifier: "StartupConfig" });

export interface InstanceReference {
  /** The user-friendly name of the Compute Engine instance. */
  instanceName?: string;
  /** The unique identifier of the Compute Engine instance. */
  instanceId?: string;
  /** The public RSA key used for sharing data with this instance. */
  publicKey?: string;
  /** The public ECIES key used for sharing data with this instance. */
  publicEciesKey?: string;
}

export const InstanceReference: Schema.Schema<InstanceReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceName: Schema.optional(Schema.String),
    instanceId: Schema.optional(Schema.String),
    publicKey: Schema.optional(Schema.String),
    publicEciesKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "InstanceReference" });

export interface InstanceGroupConfig {
  /** Optional. Disk option config settings. */
  diskConfig?: DiskConfig;
  /** Optional. The number of VM instances in the instance group. For HA cluster master_config groups, must be set to 3. For standard cluster master_config groups, must be set to 1. */
  numInstances?: number;
  /** Optional. The minimum number of primary worker instances to create. If min_num_instances is set, cluster creation will succeed if the number of primary workers created is at least equal to the min_num_instances number.Example: Cluster creation request with num_instances = 5 and min_num_instances = 3: If 4 VMs are created and 1 instance fails, the failed VM is deleted. The cluster is resized to 4 instances and placed in a RUNNING state. If 2 instances are created and 3 instances fail, the cluster in placed in an ERROR state. The failed VMs are not deleted. */
  minNumInstances?: number;
  /** Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups. */
  managedGroupConfig?: ManagedGroupConfig;
  /** Optional. The Compute Engine machine type used for cluster instances.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, n1-standard-2. */
  machineTypeUri?: string;
  /** Optional. The Compute Engine image resource used for cluster instances.The URI can represent an image or image family.Image examples: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/[image-id] projects/[project_id]/global/images/[image-id] image-idImage family examples. Dataproc will use the most recent image from the family: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/family/[custom-image-family-name] projects/[project_id]/global/images/family/[custom-image-family-name]If the URI is unspecified, it will be inferred from SoftwareConfig.image_version or the system default. */
  imageUri?: string;
  /** Optional. The Compute Engine accelerator configuration for these instances. */
  accelerators?: ReadonlyArray<AcceleratorConfig>;
  /** Optional. Specifies the minimum cpu platform for the Instance Group. See Dataproc -> Minimum CPU Platform (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu). */
  minCpuPlatform?: string;
  /** Optional. Specifies the preemptibility of the instance group.The default value for master and worker groups is NON_PREEMPTIBLE. This default cannot be changed.The default value for secondary instances is PREEMPTIBLE. */
  preemptibility?:
    | "PREEMPTIBILITY_UNSPECIFIED"
    | "NON_PREEMPTIBLE"
    | "PREEMPTIBLE"
    | "SPOT"
    | (string & {});
  /** Output only. The list of instance names. Dataproc derives the names from cluster_name, num_instances, and the instance group. */
  instanceNames?: ReadonlyArray<string>;
  /** Output only. Specifies that this instance group contains preemptible instances. */
  isPreemptible?: boolean;
  /** Optional. Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. */
  instanceFlexibilityPolicy?: InstanceFlexibilityPolicy;
  /** Optional. Configuration to handle the startup of instances during cluster create and update process. */
  startupConfig?: StartupConfig;
  /** Output only. List of references to Compute Engine instances. */
  instanceReferences?: ReadonlyArray<InstanceReference>;
}

export const InstanceGroupConfig: Schema.Schema<InstanceGroupConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskConfig: Schema.optional(DiskConfig),
    numInstances: Schema.optional(Schema.Number),
    minNumInstances: Schema.optional(Schema.Number),
    managedGroupConfig: Schema.optional(ManagedGroupConfig),
    machineTypeUri: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
    accelerators: Schema.optional(Schema.Array(AcceleratorConfig)),
    minCpuPlatform: Schema.optional(Schema.String),
    preemptibility: Schema.optional(Schema.String),
    instanceNames: Schema.optional(Schema.Array(Schema.String)),
    isPreemptible: Schema.optional(Schema.Boolean),
    instanceFlexibilityPolicy: Schema.optional(InstanceFlexibilityPolicy),
    startupConfig: Schema.optional(StartupConfig),
    instanceReferences: Schema.optional(Schema.Array(InstanceReference)),
  }).annotate({ identifier: "InstanceGroupConfig" });

export interface SoftwareConfig {
  /** Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. The following are supported prefixes and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xmlFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties). */
  properties?: Record<string, string>;
  /** Optional. The set of components to activate on the cluster. */
  optionalComponents?: ReadonlyArray<
    | "COMPONENT_UNSPECIFIED"
    | "ANACONDA"
    | "DELTA"
    | "DOCKER"
    | "DRUID"
    | "FLINK"
    | "HBASE"
    | "HIVE_WEBHCAT"
    | "HUDI"
    | "ICEBERG"
    | "JUPYTER"
    | "PIG"
    | "PRESTO"
    | "TRINO"
    | "RANGER"
    | "SOLR"
    | "ZEPPELIN"
    | "ZOOKEEPER"
    | "JUPYTER_KERNEL_GATEWAY"
    | (string & {})
  >;
  /** Optional. The version of software inside the cluster. It must be one of the supported Dataproc Versions (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported-dataproc-image-versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the "preview" version (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version. */
  imageVersion?: string;
}

export const SoftwareConfig: Schema.Schema<SoftwareConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    optionalComponents: Schema.optional(Schema.Array(Schema.String)),
    imageVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareConfig" });

export interface NodeInitializationAction {
  /** Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period. */
  executionTimeout?: string;
  /** Required. Cloud Storage URI of executable file. */
  executableFile?: string;
}

export const NodeInitializationAction: Schema.Schema<NodeInitializationAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionTimeout: Schema.optional(Schema.String),
    executableFile: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodeInitializationAction" });

export interface LifecycleConfig {
  /** Optional. The time when cluster will be auto-deleted (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
  autoDeleteTime?: string;
  /** Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
  autoDeleteTtl?: string;
  /** Optional. The time when cluster will be auto-stopped (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
  autoStopTime?: string;
  /** Optional. The duration to keep the cluster started while idling (when no jobs are running). Passing this threshold will cause the cluster to be stopped. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
  idleStopTtl?: string;
  /** Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
  idleDeleteTtl?: string;
  /** Optional. The lifetime duration of the cluster. The cluster will be auto-stopped at the end of this period, calculated from the time of submission of the create or update cluster request. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
  autoStopTtl?: string;
  /** Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
  idleStartTime?: string;
}

export const LifecycleConfig: Schema.Schema<LifecycleConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoDeleteTime: Schema.optional(Schema.String),
    autoDeleteTtl: Schema.optional(Schema.String),
    autoStopTime: Schema.optional(Schema.String),
    idleStopTtl: Schema.optional(Schema.String),
    idleDeleteTtl: Schema.optional(Schema.String),
    autoStopTtl: Schema.optional(Schema.String),
    idleStartTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "LifecycleConfig" });

export interface EndpointConfig {
  /** Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false. */
  enableHttpPortAccess?: boolean;
  /** Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true. */
  httpPorts?: Record<string, string>;
}

export const EndpointConfig: Schema.Schema<EndpointConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableHttpPortAccess: Schema.optional(Schema.Boolean),
    httpPorts: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "EndpointConfig" });

export interface NodeGroup {
  /** Required. Node group roles. */
  roles?: ReadonlyArray<"ROLE_UNSPECIFIED" | "DRIVER" | (string & {})>;
  /** The Node group resource name (https://aip.dev/122). */
  name?: string;
  /** Optional. The node group instance group configuration. */
  nodeGroupConfig?: InstanceGroupConfig;
  /** Optional. Node group labels. Label keys must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty. If specified, they must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). The node group must have no more than 32 labels. */
  labels?: Record<string, string>;
}

export const NodeGroup: Schema.Schema<NodeGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    roles: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    nodeGroupConfig: Schema.optional(InstanceGroupConfig),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "NodeGroup" });

export interface AuxiliaryNodeGroup {
  /** Required. Node group configuration. */
  nodeGroup?: NodeGroup;
  /** Optional. A node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters. */
  nodeGroupId?: string;
}

export const AuxiliaryNodeGroup: Schema.Schema<AuxiliaryNodeGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeGroup: Schema.optional(NodeGroup),
    nodeGroupId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuxiliaryNodeGroup" });

export interface EncryptionConfig {
  /** Optional. The Cloud KMS key resource name to use for persistent disk encryption for all instances in the cluster. See Use CMEK with cluster data (https://cloud.google.com//dataproc/docs/concepts/configuring-clusters/customer-managed-encryption#use_cmek_with_cluster_data) for more information. */
  gcePdKmsKeyName?: string;
  /** Optional. The Cloud KMS key resource name to use for cluster persistent disk and job argument encryption. See Use CMEK with cluster data (https://cloud.google.com//dataproc/docs/concepts/configuring-clusters/customer-managed-encryption#use_cmek_with_cluster_data) for more information.When this key resource name is provided, the following job arguments of the following job types submitted to the cluster are encrypted using CMEK: FlinkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/FlinkJob) HadoopJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/HadoopJob) SparkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob) SparkRJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkRJob) PySparkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob) SparkSqlJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob) scriptVariables and queryList.queries HiveJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/HiveJob) scriptVariables and queryList.queries PigJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/PigJob) scriptVariables and queryList.queries PrestoJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob) scriptVariables and queryList.queries */
  kmsKey?: string;
}

export const EncryptionConfig: Schema.Schema<EncryptionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcePdKmsKeyName: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptionConfig" });

export interface ConfidentialInstanceConfig {
  /** Optional. Deprecated: Use 'confidential_instance_type' instead. Defines whether the instance should have confidential compute enabled. */
  enableConfidentialCompute?: boolean;
}

export const ConfidentialInstanceConfig: Schema.Schema<ConfidentialInstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableConfidentialCompute: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ConfidentialInstanceConfig" });

export interface ShieldedInstanceConfig {
  /** Optional. Defines whether instances have Secure Boot enabled. */
  enableSecureBoot?: boolean;
  /** Optional. Defines whether instances have integrity monitoring enabled. */
  enableIntegrityMonitoring?: boolean;
  /** Optional. Defines whether instances have the vTPM enabled. */
  enableVtpm?: boolean;
}

export const ShieldedInstanceConfig: Schema.Schema<ShieldedInstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableSecureBoot: Schema.optional(Schema.Boolean),
    enableIntegrityMonitoring: Schema.optional(Schema.Boolean),
    enableVtpm: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ShieldedInstanceConfig" });

export interface ReservationAffinity {
  /** Optional. Type of reservation to consume */
  consumeReservationType?:
    | "TYPE_UNSPECIFIED"
    | "NO_RESERVATION"
    | "ANY_RESERVATION"
    | "SPECIFIC_RESERVATION"
    | (string & {});
  /** Optional. Corresponds to the label values of reservation resource. */
  values?: ReadonlyArray<string>;
  /** Optional. Corresponds to the label key of reservation resource. */
  key?: string;
}

export const ReservationAffinity: Schema.Schema<ReservationAffinity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consumeReservationType: Schema.optional(Schema.String),
    values: Schema.optional(Schema.Array(Schema.String)),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReservationAffinity" });

export interface NodeGroupAffinity {
  /** Required. The URI of a sole-tenant node group resource (https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on.A full URL, partial URI, or node group name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 node-group-1 */
  nodeGroupUri?: string;
}

export const NodeGroupAffinity: Schema.Schema<NodeGroupAffinity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeGroupUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodeGroupAffinity" });

export interface GceClusterConfig {
  /** Optional. The Compute Engine metadata entries to add to all instances (see Project and instance metadata (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)). */
  metadata?: Record<string, string>;
  /** Optional. Resource manager tags (https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing) to add to all instances (see Use secure tags in Dataproc (https://cloud.google.com/dataproc/docs/guides/use-secure-tags)). */
  resourceManagerTags?: Record<string, string>;
  /** Optional. The type of IPv6 access for a cluster. */
  privateIpv6GoogleAccess?:
    | "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
    | "INHERIT_FROM_SUBNETWORK"
    | "OUTBOUND"
    | "BIDIRECTIONAL"
    | (string & {});
  /** Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/regions/[region]/subnetworks/sub0 projects/[project_id]/regions/[region]/subnetworks/sub0 sub0 */
  subnetworkUri?: string;
  /** The Compute Engine network tags to add to all instances (see Tagging instances (https://cloud.google.com/vpc/docs/add-remove-network-tags)). */
  tags?: ReadonlyArray<string>;
  /** Optional. Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/compute/confidential-vm/docs). */
  confidentialInstanceConfig?: ConfidentialInstanceConfig;
  /** Optional. Shielded Instance Config for clusters using Compute Engine Shielded VMs (https://cloud.google.com/security/shielded-cloud/shielded-vm). */
  shieldedInstanceConfig?: ShieldedInstanceConfig;
  /** Optional. An optional list of Compute Engine zones where the Dataproc cluster will not be located when Auto Zone is enabled. Only one of zone_uri or auto_zone_exclude_zone_uris can be set. If both are omitted, the service will pick a zone in the cluster Compute Engine region. If auto_zone_exclude_zone_uris is set and there is more than one non-excluded zone, the service will pick one of the non-excluded zones. Otherwise, cluster creation will fail with INVALID_ARGUMENT error.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone] projects/[project_id]/zones/[zone] [zone] */
  autoZoneExcludeZoneUris?: ReadonlyArray<string>;
  /** Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither network_uri nor subnetwork_uri is specified, the "default" network of the project is used, if it exists. Cannot be a Custom Subnet Network (see Using Subnetworks (https://cloud.google.com/compute/docs/subnetworks) for more information).A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default projects/[project_id]/global/networks/default default */
  networkUri?: string;
  /** Optional. Reservation Affinity for consuming Zonal reservation. */
  reservationAffinity?: ReservationAffinity;
  /** Optional. This setting applies to subnetwork-enabled networks. It is set to true by default in clusters created with image versions 2.2.x.When set to true: All cluster VMs have internal IP addresses. Google Private Access (https://cloud.google.com/vpc/docs/private-google-access) must be enabled to access Dataproc and other Google Cloud APIs. Off-cluster dependencies must be configured to be accessible without external IP addresses.When set to false: Cluster VMs are not restricted to internal IP addresses. Ephemeral external IP addresses are assigned to each cluster VM. */
  internalIpOnly?: boolean;
  /** Optional. The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read_write https://www.googleapis.com/auth/logging.writeIf no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full_control */
  serviceAccountScopes?: ReadonlyArray<string>;
  /** Optional. The Dataproc service account (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see VM Data Plane identity (https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services.If not specified, the Compute Engine default service account (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. */
  serviceAccount?: string;
  /** Optional. The Compute Engine zone where the Dataproc cluster will be located. If omitted, the service will pick a zone in the cluster's Compute Engine region. On a get request, zone will always be present.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone] projects/[project_id]/zones/[zone] [zone] */
  zoneUri?: string;
  /** Optional. Node Group Affinity for sole-tenant clusters. */
  nodeGroupAffinity?: NodeGroupAffinity;
}

export const GceClusterConfig: Schema.Schema<GceClusterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    resourceManagerTags: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    privateIpv6GoogleAccess: Schema.optional(Schema.String),
    subnetworkUri: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    confidentialInstanceConfig: Schema.optional(ConfidentialInstanceConfig),
    shieldedInstanceConfig: Schema.optional(ShieldedInstanceConfig),
    autoZoneExcludeZoneUris: Schema.optional(Schema.Array(Schema.String)),
    networkUri: Schema.optional(Schema.String),
    reservationAffinity: Schema.optional(ReservationAffinity),
    internalIpOnly: Schema.optional(Schema.Boolean),
    serviceAccountScopes: Schema.optional(Schema.Array(Schema.String)),
    serviceAccount: Schema.optional(Schema.String),
    zoneUri: Schema.optional(Schema.String),
    nodeGroupAffinity: Schema.optional(NodeGroupAffinity),
  }).annotate({ identifier: "GceClusterConfig" });

export interface MetastoreConfig {
  /** Required. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[dataproc_region]/services/[service-name] */
  dataprocMetastoreService?: string;
}

export const MetastoreConfig: Schema.Schema<MetastoreConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataprocMetastoreService: Schema.optional(Schema.String),
  }).annotate({ identifier: "MetastoreConfig" });

export interface AutoscalingConfig {
  /** Optional. The autoscaling policy used by the cluster.Only resource names including projectid and location (region) are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id] projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]Note that the policy must be in the same project and Dataproc region. */
  policyUri?: string;
}

export const AutoscalingConfig: Schema.Schema<AutoscalingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutoscalingConfig" });

export interface ClusterConfig {
  /** Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc determines a Cloud Storage location (US, ASIA, or EU) for the cluster temp bucket according to the Compute Engine zone where the cluster is deployed, and then creates and manages this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. */
  tempBucket?: string;
  /** Optional. The type of the cluster. */
  clusterType?:
    | "CLUSTER_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "SINGLE_NODE"
    | "ZERO_SCALE"
    | (string & {});
  /** Optional. The Compute Engine config settings for the cluster's worker instances. */
  workerConfig?: InstanceGroupConfig;
  /** Optional. The config for Dataproc metrics. */
  dataprocMetricConfig?: DataprocMetricConfig;
  /** Optional. The Compute Engine config settings for the cluster's master instance. */
  masterConfig?: InstanceGroupConfig;
  /** Optional. The config settings for cluster software. */
  softwareConfig?: SoftwareConfig;
  /** Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ "${ROLE}" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi */
  initializationActions?: ReadonlyArray<NodeInitializationAction>;
  /** Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Dataproc determines a Cloud Storage location (US, ASIA, or EU) for the cluster staging bucket according to the Compute Engine zone where the cluster is deployed, and then creates and manages this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. */
  configBucket?: string;
  /** Optional. The cluster engine. */
  engine?: "ENGINE_UNSPECIFIED" | "DEFAULT" | "LIGHTNING" | (string & {});
  /** Optional. Lifecycle setting for the cluster. */
  lifecycleConfig?: LifecycleConfig;
  /** Optional. Port/endpoint configuration for this cluster */
  endpointConfig?: EndpointConfig;
  /** Optional. The node group settings. */
  auxiliaryNodeGroups?: ReadonlyArray<AuxiliaryNodeGroup>;
  /** Optional. Encryption settings for the cluster. */
  encryptionConfig?: EncryptionConfig;
  /** Optional. The shared Compute Engine config settings for all instances in a cluster. */
  gceClusterConfig?: GceClusterConfig;
  /** Optional. Security settings for the cluster. */
  securityConfig?: SecurityConfig;
  /** Optional. The cluster tier. */
  clusterTier?:
    | "CLUSTER_TIER_UNSPECIFIED"
    | "CLUSTER_TIER_STANDARD"
    | "CLUSTER_TIER_PREMIUM"
    | (string & {});
  /** Optional. A Cloud Storage bucket used to collect checkpoint diagnostic data (https://cloud.google.com/dataproc/docs/support/diagnose-clusters#checkpoint_diagnostic_data). If you do not specify a diagnostic bucket, Cloud Dataproc will use the Dataproc temp bucket to collect the checkpoint diagnostic data. This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. */
  diagnosticBucket?: string;
  /** Optional. Metastore configuration. */
  metastoreConfig?: MetastoreConfig;
  /** Optional. Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field is unset. */
  autoscalingConfig?: AutoscalingConfig;
  /** Optional. The Compute Engine config settings for a cluster's secondary worker instances */
  secondaryWorkerConfig?: InstanceGroupConfig;
  /** Optional. BETA. The Kubernetes Engine config for Dataproc clusters deployed to The Kubernetes Engine config for Dataproc clusters deployed to Kubernetes. These config settings are mutually exclusive with Compute Engine-based options, such as gce_cluster_config, master_config, worker_config, secondary_worker_config, and autoscaling_config. */
  gkeClusterConfig?: GkeClusterConfig;
}

export const ClusterConfig: Schema.Schema<ClusterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tempBucket: Schema.optional(Schema.String),
    clusterType: Schema.optional(Schema.String),
    workerConfig: Schema.optional(InstanceGroupConfig),
    dataprocMetricConfig: Schema.optional(DataprocMetricConfig),
    masterConfig: Schema.optional(InstanceGroupConfig),
    softwareConfig: Schema.optional(SoftwareConfig),
    initializationActions: Schema.optional(
      Schema.Array(NodeInitializationAction),
    ),
    configBucket: Schema.optional(Schema.String),
    engine: Schema.optional(Schema.String),
    lifecycleConfig: Schema.optional(LifecycleConfig),
    endpointConfig: Schema.optional(EndpointConfig),
    auxiliaryNodeGroups: Schema.optional(Schema.Array(AuxiliaryNodeGroup)),
    encryptionConfig: Schema.optional(EncryptionConfig),
    gceClusterConfig: Schema.optional(GceClusterConfig),
    securityConfig: Schema.optional(SecurityConfig),
    clusterTier: Schema.optional(Schema.String),
    diagnosticBucket: Schema.optional(Schema.String),
    metastoreConfig: Schema.optional(MetastoreConfig),
    autoscalingConfig: Schema.optional(AutoscalingConfig),
    secondaryWorkerConfig: Schema.optional(InstanceGroupConfig),
    gkeClusterConfig: Schema.optional(GkeClusterConfig),
  }).annotate({ identifier: "ClusterConfig" });

export interface ManagedCluster {
  /** Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix.The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters. */
  clusterName?: string;
  /** Required. The cluster configuration. */
  config?: ClusterConfig;
  /** Optional. The labels to associate with this cluster.Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given cluster. */
  labels?: Record<string, string>;
}

export const ManagedCluster: Schema.Schema<ManagedCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterName: Schema.optional(Schema.String),
    config: Schema.optional(ClusterConfig),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ManagedCluster" });

export interface ClusterSelector {
  /** Optional. The zone where workflow process executes. This parameter does not affect the selection of the cluster.If unspecified, the zone of the first cluster matching the selector is used. */
  zone?: string;
  /** Required. The cluster labels. Cluster must have all labels to match. */
  clusterLabels?: Record<string, string>;
}

export const ClusterSelector: Schema.Schema<ClusterSelector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    clusterLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ClusterSelector" });

export interface WorkflowTemplatePlacement {
  /** A cluster that is managed by the workflow. */
  managedCluster?: ManagedCluster;
  /** Optional. A selector that chooses target cluster for jobs based on metadata.The selector is evaluated at the time each job is submitted. */
  clusterSelector?: ClusterSelector;
}

export const WorkflowTemplatePlacement: Schema.Schema<WorkflowTemplatePlacement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managedCluster: Schema.optional(ManagedCluster),
    clusterSelector: Schema.optional(ClusterSelector),
  }).annotate({ identifier: "WorkflowTemplatePlacement" });

export interface GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig {
  /** Optional. The Cloud KMS key name to use for encrypting workflow template job arguments.When this this key is provided, the following workflow template job arguments (https://cloud.google.com/dataproc/docs/concepts/workflows/use-workflows#adding_jobs_to_a_template), if present, are CMEK encrypted (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/customer-managed-encryption#use_cmek_with_workflow_template_data): FlinkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/FlinkJob) HadoopJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/HadoopJob) SparkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob) SparkRJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkRJob) PySparkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob) SparkSqlJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob) scriptVariables and queryList.queries HiveJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/HiveJob) scriptVariables and queryList.queries PigJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/PigJob) scriptVariables and queryList.queries PrestoJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob) scriptVariables and queryList.queries */
  kmsKey?: string;
}

export const GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig: Schema.Schema<GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKey: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig",
  });

export interface WorkflowTemplate {
  /** Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated. */
  parameters?: ReadonlyArray<TemplateParameter>;
  /** Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template. */
  labels?: Record<string, string>;
  /** Required. The Directed Acyclic Graph of Jobs to submit. */
  jobs?: ReadonlyArray<OrderedJob>;
  /** Output only. The time template was last updated. */
  updateTime?: string;
  /** Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} */
  name?: string;
  /** Output only. The time template was created. */
  createTime?: string;
  /** Required. WorkflowTemplate scheduling information. */
  placement?: WorkflowTemplatePlacement;
  id?: string;
  /** Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request. */
  version?: number;
  /** Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a managed cluster, the cluster is deleted. */
  dagTimeout?: string;
  /** Optional. Encryption settings for encrypting workflow template job arguments. */
  encryptionConfig?: GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig;
}

export const WorkflowTemplate: Schema.Schema<WorkflowTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Array(TemplateParameter)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    jobs: Schema.optional(Schema.Array(OrderedJob)),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    placement: Schema.optional(WorkflowTemplatePlacement),
    id: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    dagTimeout: Schema.optional(Schema.String),
    encryptionConfig: Schema.optional(
      GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig,
    ),
  }).annotate({ identifier: "WorkflowTemplate" });

export interface RepairNodeGroupRequest {
  /** Required. Name of instances to be repaired. These instances must belong to specified node pool. */
  instanceNames?: ReadonlyArray<string>;
  /** Required. Repair action to take on specified resources of the node pool. */
  repairAction?: "REPAIR_ACTION_UNSPECIFIED" | "REPLACE" | (string & {});
  /** Optional. A unique ID used to identify the request. If the server receives two RepairNodeGroupRequest with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
}

export const RepairNodeGroupRequest: Schema.Schema<RepairNodeGroupRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceNames: Schema.optional(Schema.Array(Schema.String)),
    repairAction: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RepairNodeGroupRequest" });

export interface SparkBatch {
  /** Optional. The name of the driver main class. The jar file that contains the class must be in the classpath or specified in jar_file_uris. */
  mainClass?: string;
  /** Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. */
  jarFileUris?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of files to be placed in the working directory of each executor. */
  fileUris?: ReadonlyArray<string>;
  /** Optional. The arguments to pass to the driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission. */
  args?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
  archiveUris?: ReadonlyArray<string>;
  /** Optional. The HCFS URI of the jar file that contains the main class. */
  mainJarFileUri?: string;
}

export const SparkBatch: Schema.Schema<SparkBatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mainClass: Schema.optional(Schema.String),
    jarFileUris: Schema.optional(Schema.Array(Schema.String)),
    fileUris: Schema.optional(Schema.Array(Schema.String)),
    args: Schema.optional(Schema.Array(Schema.String)),
    archiveUris: Schema.optional(Schema.Array(Schema.String)),
    mainJarFileUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "SparkBatch" });

export interface SearchSessionSparkApplicationExecutorStageSummaryResponse {
  /** Details about executors used by the application stage. */
  sparkApplicationStageExecutors?: ReadonlyArray<ExecutorStageSummary>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSessionSparkApplicationExecutorStageSummaryRequest. */
  nextPageToken?: string;
}

export const SearchSessionSparkApplicationExecutorStageSummaryResponse: Schema.Schema<SearchSessionSparkApplicationExecutorStageSummaryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplicationStageExecutors: Schema.optional(
      Schema.Array(ExecutorStageSummary),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "SearchSessionSparkApplicationExecutorStageSummaryResponse",
  });

export interface PySparkNotebookBatch {
  /** Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
  archiveUris?: ReadonlyArray<string>;
  /** Required. The HCFS URI of the notebook file to execute. */
  notebookFileUri?: string;
  /** Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH. */
  jarFileUris?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of files to be placed in the working directory of each executor */
  fileUris?: ReadonlyArray<string>;
  /** Optional. The parameters to pass to the notebook. */
  params?: Record<string, string>;
  /** Optional. HCFS URIs of Python files to pass to the PySpark framework. */
  pythonFileUris?: ReadonlyArray<string>;
}

export const PySparkNotebookBatch: Schema.Schema<PySparkNotebookBatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    archiveUris: Schema.optional(Schema.Array(Schema.String)),
    notebookFileUri: Schema.optional(Schema.String),
    jarFileUris: Schema.optional(Schema.Array(Schema.String)),
    fileUris: Schema.optional(Schema.Array(Schema.String)),
    params: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    pythonFileUris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PySparkNotebookBatch" });

export interface StateHistory {
  /** Output only. The state of the batch at this point in history. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "CANCELLING"
    | "CANCELLED"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Output only. The time when the batch entered the historical state. */
  stateStartTime?: string;
  /** Output only. Details about the state at this point in history. */
  stateMessage?: string;
}

export const StateHistory: Schema.Schema<StateHistory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    stateStartTime: Schema.optional(Schema.String),
    stateMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "StateHistory" });

export interface SparkSqlBatch {
  /** Required. The HCFS URI of the script that contains Spark SQL queries to execute. */
  queryFileUri?: string;
  /** Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). */
  queryVariables?: Record<string, string>;
  /** Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH. */
  jarFileUris?: ReadonlyArray<string>;
}

export const SparkSqlBatch: Schema.Schema<SparkSqlBatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryFileUri: Schema.optional(Schema.String),
    queryVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    jarFileUris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SparkSqlBatch" });

export interface SparkRBatch {
  /** Required. The HCFS URI of the main R file to use as the driver. Must be a .R or .r file. */
  mainRFileUri?: string;
  /** Optional. HCFS URIs of files to be placed in the working directory of each executor. */
  fileUris?: ReadonlyArray<string>;
  /** Optional. The arguments to pass to the Spark driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission. */
  args?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
  archiveUris?: ReadonlyArray<string>;
}

export const SparkRBatch: Schema.Schema<SparkRBatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mainRFileUri: Schema.optional(Schema.String),
    fileUris: Schema.optional(Schema.Array(Schema.String)),
    args: Schema.optional(Schema.Array(Schema.String)),
    archiveUris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SparkRBatch" });

export interface PySparkBatch {
  /** Optional. The arguments to pass to the driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission. */
  args?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
  archiveUris?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. */
  jarFileUris?: ReadonlyArray<string>;
  /** Optional. HCFS URIs of files to be placed in the working directory of each executor. */
  fileUris?: ReadonlyArray<string>;
  /** Required. The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file. */
  mainPythonFileUri?: string;
  /** Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. */
  pythonFileUris?: ReadonlyArray<string>;
}

export const PySparkBatch: Schema.Schema<PySparkBatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    args: Schema.optional(Schema.Array(Schema.String)),
    archiveUris: Schema.optional(Schema.Array(Schema.String)),
    jarFileUris: Schema.optional(Schema.Array(Schema.String)),
    fileUris: Schema.optional(Schema.Array(Schema.String)),
    mainPythonFileUri: Schema.optional(Schema.String),
    pythonFileUris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PySparkBatch" });

export interface AuthenticationConfig {
  /** Optional. Authentication type for the user workload running in containers. */
  userWorkloadAuthenticationType?:
    | "AUTHENTICATION_TYPE_UNSPECIFIED"
    | "SERVICE_ACCOUNT"
    | "END_USER_CREDENTIALS"
    | (string & {});
}

export const AuthenticationConfig: Schema.Schema<AuthenticationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userWorkloadAuthenticationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthenticationConfig" });

export interface ExecutionConfig {
  /** Optional. The duration after which the workload will be terminated, specified as the JSON representation for Duration (https://protobuf.dev/programming-guides/proto3/#json). When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it exits naturally (or run forever without exiting). If ttl is not specified for an interactive session, it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours. Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idle_ttl are specified (for an interactive session), the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idle_ttl or when ttl has been exceeded, whichever occurs first. */
  ttl?: string;
  /** Optional. Tags used for network traffic control. */
  networkTags?: ReadonlyArray<string>;
  /** Optional. Applies to sessions only. The duration to keep the session alive while it's idling. Exceeding this threshold causes the session to terminate. This field cannot be set on a batch workload. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). Defaults to 1 hour if not set. If both ttl and idle_ttl are specified for an interactive session, the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idle_ttl or when ttl has been exceeded, whichever occurs first. */
  idleTtl?: string;
  /** Optional. Service account that used to execute workload. */
  serviceAccount?: string;
  /** Optional. Authentication configuration used to set the default identity for the workload execution. The config specifies the type of identity (service account or user) that will be used by workloads to access resources on the project(s). */
  authenticationConfig?: AuthenticationConfig;
  /** Optional. Subnetwork URI to connect workload to. */
  subnetworkUri?: string;
  /** Optional. The Cloud KMS key to use for encryption. */
  kmsKey?: string;
  /** Optional. Associates Resource Manager tags with the workload nodes. There is a max limit of 30 tags. Keys and values can be either in numeric format, such as tagKeys/{tag_key_id} and tagValues/{tag_value_id}, or in namespaced format, such as {org_id|project_id}/{tag_key_short_name} and {tag_value_short_name}. */
  resourceManagerTags?: Record<string, string>;
  /** Optional. A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running, and then create and manage project-level, per-location staging and temporary buckets. This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. */
  stagingBucket?: string;
  /** Optional. Network URI to connect workload to. */
  networkUri?: string;
}

export const ExecutionConfig: Schema.Schema<ExecutionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ttl: Schema.optional(Schema.String),
    networkTags: Schema.optional(Schema.Array(Schema.String)),
    idleTtl: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    authenticationConfig: Schema.optional(AuthenticationConfig),
    subnetworkUri: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
    resourceManagerTags: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    stagingBucket: Schema.optional(Schema.String),
    networkUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExecutionConfig" });

export interface EnvironmentConfig {
  /** Optional. Peripherals configuration that workload has access to. */
  peripheralsConfig?: PeripheralsConfig;
  /** Optional. Execution configuration for a workload. */
  executionConfig?: ExecutionConfig;
}

export const EnvironmentConfig: Schema.Schema<EnvironmentConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    peripheralsConfig: Schema.optional(PeripheralsConfig),
    executionConfig: Schema.optional(ExecutionConfig),
  }).annotate({ identifier: "EnvironmentConfig" });

export interface PyPiRepositoryConfig {
  /** Optional. The PyPi repository address. Note: This field is not available for batch workloads. */
  pypiRepository?: string;
}

export const PyPiRepositoryConfig: Schema.Schema<PyPiRepositoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pypiRepository: Schema.optional(Schema.String),
  }).annotate({ identifier: "PyPiRepositoryConfig" });

export interface RepositoryConfig {
  /** Optional. Configuration for PyPi repository. */
  pypiRepositoryConfig?: PyPiRepositoryConfig;
}

export const RepositoryConfig: Schema.Schema<RepositoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pypiRepositoryConfig: Schema.optional(PyPiRepositoryConfig),
  }).annotate({ identifier: "RepositoryConfig" });

export interface AutotuningConfig {
  /** Optional. Scenarios for which tunings are applied. */
  scenarios?: ReadonlyArray<
    | "SCENARIO_UNSPECIFIED"
    | "SCALING"
    | "BROADCAST_HASH_JOIN"
    | "MEMORY"
    | "NONE"
    | "AUTO"
    | (string & {})
  >;
}

export const AutotuningConfig: Schema.Schema<AutotuningConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scenarios: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AutotuningConfig" });

export interface RuntimeConfig {
  /** Optional. Dependency repository configuration. */
  repositoryConfig?: RepositoryConfig;
  /** Optional. Version of the batch runtime. */
  version?: string;
  /** Optional. A mapping of property names to values, which are used to configure workload execution. */
  properties?: Record<string, string>;
  /** Optional. Cohort identifier. Identifies families of the workloads that have the same shape, for example, daily ETL jobs. */
  cohort?: string;
  /** Optional. Optional custom container image for the job runtime environment. If not specified, a default container image will be used. */
  containerImage?: string;
  /** Optional. Autotuning configuration of the workload. */
  autotuningConfig?: AutotuningConfig;
}

export const RuntimeConfig: Schema.Schema<RuntimeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositoryConfig: Schema.optional(RepositoryConfig),
    version: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    cohort: Schema.optional(Schema.String),
    containerImage: Schema.optional(Schema.String),
    autotuningConfig: Schema.optional(AutotuningConfig),
  }).annotate({ identifier: "RuntimeConfig" });

export interface Batch {
  /** Optional. PySpark notebook batch config. */
  pysparkNotebookBatch?: PySparkNotebookBatch;
  /** Output only. Historical state information for the batch. */
  stateHistory?: ReadonlyArray<StateHistory>;
  /** Optional. SparkSql batch config. */
  sparkSqlBatch?: SparkSqlBatch;
  /** Output only. The time when the batch entered a current state. */
  stateTime?: string;
  /** Output only. Batch state details, such as a failure description if the state is FAILED. */
  stateMessage?: string;
  /** Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a batch. */
  labels?: Record<string, string>;
  /** Output only. A batch UUID (Unique Universal Identifier). The service generates this value when it creates the batch. */
  uuid?: string;
  /** Output only. The state of the batch. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "CANCELLING"
    | "CANCELLED"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Optional. SparkR batch config. */
  sparkRBatch?: SparkRBatch;
  /** Output only. The resource name of the batch. */
  name?: string;
  /** Optional. PySpark batch config. */
  pysparkBatch?: PySparkBatch;
  /** Optional. Environment configuration for the batch execution. */
  environmentConfig?: EnvironmentConfig;
  /** Output only. The time when the batch was created. */
  createTime?: string;
  /** Output only. The email address of the user who created the batch. */
  creator?: string;
  /** Output only. Runtime information about batch execution. */
  runtimeInfo?: RuntimeInfo;
  /** Optional. Spark batch config. */
  sparkBatch?: SparkBatch;
  /** Optional. Runtime configuration for the batch execution. */
  runtimeConfig?: RuntimeConfig;
  /** Output only. The resource name of the operation associated with this batch. */
  operation?: string;
}

export const Batch: Schema.Schema<Batch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pysparkNotebookBatch: Schema.optional(PySparkNotebookBatch),
    stateHistory: Schema.optional(Schema.Array(StateHistory)),
    sparkSqlBatch: Schema.optional(SparkSqlBatch),
    stateTime: Schema.optional(Schema.String),
    stateMessage: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uuid: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    sparkRBatch: Schema.optional(SparkRBatch),
    name: Schema.optional(Schema.String),
    pysparkBatch: Schema.optional(PySparkBatch),
    environmentConfig: Schema.optional(EnvironmentConfig),
    createTime: Schema.optional(Schema.String),
    creator: Schema.optional(Schema.String),
    runtimeInfo: Schema.optional(RuntimeInfo),
    sparkBatch: Schema.optional(SparkBatch),
    runtimeConfig: Schema.optional(RuntimeConfig),
    operation: Schema.optional(Schema.String),
  }).annotate({ identifier: "Batch" });

export interface ListBatchesResponse {
  /** A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Output only. The batches from the specified collection. */
  batches?: ReadonlyArray<Batch>;
  /** Output only. List of Batches that could not be included in the response. Attempting to get one of these resources may indicate why it was not included in the list response. */
  unreachable?: ReadonlyArray<string>;
}

export const ListBatchesResponse: Schema.Schema<ListBatchesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    batches: Schema.optional(Schema.Array(Batch)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListBatchesResponse" });

export interface AnalyzeOperationMetadata {
  /** Output only. The time when the operation finished. */
  doneTime?: string;
  /** Output only. Warnings encountered during operation execution. */
  warnings?: ReadonlyArray<string>;
  /** Output only. The time when the operation was created. */
  createTime?: string;
  /** Output only. Short description of the operation. */
  description?: string;
  /** Output only. name of the workload being analyzed. */
  analyzedWorkloadName?: string;
  /** Output only. unique identifier of the workload typically generated by control plane. E.g. batch uuid. */
  analyzedWorkloadUuid?: string;
  /** Output only. Labels associated with the operation. */
  labels?: Record<string, string>;
  /** Output only. Type of the workload being analyzed. */
  analyzedWorkloadType?: "WORKLOAD_TYPE_UNSPECIFIED" | "BATCH" | (string & {});
}

export const AnalyzeOperationMetadata: Schema.Schema<AnalyzeOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    doneTime: Schema.optional(Schema.String),
    warnings: Schema.optional(Schema.Array(Schema.String)),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    analyzedWorkloadName: Schema.optional(Schema.String),
    analyzedWorkloadUuid: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    analyzedWorkloadType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnalyzeOperationMetadata" });

export interface AccessSparkApplicationStageAttemptResponse {
  /** Output only. Data corresponding to a stage. */
  stageData?: StageData;
}

export const AccessSparkApplicationStageAttemptResponse: Schema.Schema<AccessSparkApplicationStageAttemptResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stageData: Schema.optional(StageData),
  }).annotate({ identifier: "AccessSparkApplicationStageAttemptResponse" });

export interface StageAttemptTasksSummary {
  stageAttemptId?: number;
  numTasks?: number;
  applicationId?: string;
  numPendingTasks?: number;
  numSuccessTasks?: number;
  numFailedTasks?: number;
  numRunningTasks?: number;
  numKilledTasks?: number;
  stageId?: string;
}

export const StageAttemptTasksSummary: Schema.Schema<StageAttemptTasksSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stageAttemptId: Schema.optional(Schema.Number),
    numTasks: Schema.optional(Schema.Number),
    applicationId: Schema.optional(Schema.String),
    numPendingTasks: Schema.optional(Schema.Number),
    numSuccessTasks: Schema.optional(Schema.Number),
    numFailedTasks: Schema.optional(Schema.Number),
    numRunningTasks: Schema.optional(Schema.Number),
    numKilledTasks: Schema.optional(Schema.Number),
    stageId: Schema.optional(Schema.String),
  }).annotate({ identifier: "StageAttemptTasksSummary" });

export interface SummarizeSessionSparkApplicationStageAttemptTasksResponse {
  /** Summary of tasks for a Spark Application Stage Attempt */
  stageAttemptTasksSummary?: StageAttemptTasksSummary;
}

export const SummarizeSessionSparkApplicationStageAttemptTasksResponse: Schema.Schema<SummarizeSessionSparkApplicationStageAttemptTasksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stageAttemptTasksSummary: Schema.optional(StageAttemptTasksSummary),
  }).annotate({
    identifier: "SummarizeSessionSparkApplicationStageAttemptTasksResponse",
  });

export interface JobMetadata {
  /** Output only. Most recent job status. */
  status?: JobStatus;
  /** Output only. The job id. */
  jobId?: string;
  /** Output only. Operation type. */
  operationType?: string;
  /** Output only. Job submission time. */
  startTime?: string;
}

export const JobMetadata: Schema.Schema<JobMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(JobStatus),
    jobId: Schema.optional(Schema.String),
    operationType: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "JobMetadata" });

export interface PoolData {
  stageIds?: ReadonlyArray<string>;
  name?: string;
}

export const PoolData: Schema.Schema<PoolData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stageIds: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PoolData" });

export interface GetPolicyOptions {
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  requestedPolicyVersion?: number;
}

export const GetPolicyOptions: Schema.Schema<GetPolicyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedPolicyVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GetPolicyOptions" });

export interface GetIamPolicyRequest {
  /** OPTIONAL: A GetPolicyOptions object for specifying options to GetIamPolicy. */
  options?: GetPolicyOptions;
}

export const GetIamPolicyRequest: Schema.Schema<GetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    options: Schema.optional(GetPolicyOptions),
  }).annotate({ identifier: "GetIamPolicyRequest" });

export interface StagesSummary {
  numSkippedStages?: number;
  numPendingStages?: number;
  numActiveStages?: number;
  applicationId?: string;
  numCompletedStages?: number;
  numFailedStages?: number;
}

export const StagesSummary: Schema.Schema<StagesSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numSkippedStages: Schema.optional(Schema.Number),
    numPendingStages: Schema.optional(Schema.Number),
    numActiveStages: Schema.optional(Schema.Number),
    applicationId: Schema.optional(Schema.String),
    numCompletedStages: Schema.optional(Schema.Number),
    numFailedStages: Schema.optional(Schema.Number),
  }).annotate({ identifier: "StagesSummary" });

export interface ClusterOperation {
  /** Output only. Indicates the operation is done. */
  done?: boolean;
  /** Output only. The id of the cluster operation. */
  operationId?: string;
  /** Output only. Error, if operation failed. */
  error?: string;
}

export const ClusterOperation: Schema.Schema<ClusterOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    operationId: Schema.optional(Schema.String),
    error: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterOperation" });

export interface WorkflowGraph {
  /** Output only. The workflow nodes. */
  nodes?: ReadonlyArray<WorkflowNode>;
}

export const WorkflowGraph: Schema.Schema<WorkflowGraph> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(WorkflowNode)),
  }).annotate({ identifier: "WorkflowGraph" });

export interface WorkflowMetadata {
  /** Output only. The workflow state. */
  state?: "UNKNOWN" | "PENDING" | "RUNNING" | "DONE" | (string & {});
  /** Output only. The name of the target cluster. */
  clusterName?: string;
  /** Output only. The version of template at the time of workflow instantiation. */
  version?: number;
  /** Output only. The timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
  dagTimeout?: string;
  /** Output only. The delete cluster operation metadata. */
  deleteCluster?: ClusterOperation;
  /** Output only. The resource name of the workflow template as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} */
  template?: string;
  /** Output only. The UUID of target cluster. */
  clusterUuid?: string;
  /** Output only. DAG start time, only set for workflows with dag_timeout when DAG begins. */
  dagStartTime?: string;
  /** Output only. Workflow end time. */
  endTime?: string;
  /** Output only. The create cluster operation metadata. */
  createCluster?: ClusterOperation;
  /** Map from parameter names to values that were used for those parameters. */
  parameters?: Record<string, string>;
  /** Output only. The workflow graph. */
  graph?: WorkflowGraph;
  /** Output only. DAG end time, only set for workflows with dag_timeout when DAG ends. */
  dagEndTime?: string;
  /** Output only. Workflow start time. */
  startTime?: string;
}

export const WorkflowMetadata: Schema.Schema<WorkflowMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    clusterName: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    dagTimeout: Schema.optional(Schema.String),
    deleteCluster: Schema.optional(ClusterOperation),
    template: Schema.optional(Schema.String),
    clusterUuid: Schema.optional(Schema.String),
    dagStartTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    createCluster: Schema.optional(ClusterOperation),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    graph: Schema.optional(WorkflowGraph),
    dagEndTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkflowMetadata" });

export interface SessionStateHistory {
  /** Output only. The state of the session at this point in the session history. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "TERMINATING"
    | "TERMINATED"
    | "FAILED"
    | (string & {});
  /** Output only. The time when the session entered the historical state. */
  stateStartTime?: string;
  /** Output only. Details about the state at this point in the session history. */
  stateMessage?: string;
}

export const SessionStateHistory: Schema.Schema<SessionStateHistory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    stateStartTime: Schema.optional(Schema.String),
    stateMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "SessionStateHistory" });

export interface ConsolidatedExecutorSummary {
  count?: number;
  failedTasks?: number;
  diskUsed?: string;
  totalShuffleRead?: string;
  rddBlocks?: number;
  memoryMetrics?: MemoryMetrics;
  completedTasks?: number;
  totalTasks?: number;
  totalCores?: number;
  totalDurationMillis?: string;
  totalShuffleWrite?: string;
  activeTasks?: number;
  totalInputBytes?: string;
  maxMemory?: string;
  memoryUsed?: string;
  totalGcTimeMillis?: string;
  isExcluded?: number;
}

export const ConsolidatedExecutorSummary: Schema.Schema<ConsolidatedExecutorSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    failedTasks: Schema.optional(Schema.Number),
    diskUsed: Schema.optional(Schema.String),
    totalShuffleRead: Schema.optional(Schema.String),
    rddBlocks: Schema.optional(Schema.Number),
    memoryMetrics: Schema.optional(MemoryMetrics),
    completedTasks: Schema.optional(Schema.Number),
    totalTasks: Schema.optional(Schema.Number),
    totalCores: Schema.optional(Schema.Number),
    totalDurationMillis: Schema.optional(Schema.String),
    totalShuffleWrite: Schema.optional(Schema.String),
    activeTasks: Schema.optional(Schema.Number),
    totalInputBytes: Schema.optional(Schema.String),
    maxMemory: Schema.optional(Schema.String),
    memoryUsed: Schema.optional(Schema.String),
    totalGcTimeMillis: Schema.optional(Schema.String),
    isExcluded: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ConsolidatedExecutorSummary" });

export interface SparkStandaloneAutoscalingConfig {
  /** Required. Fraction of required executors to remove from Spark Serverless clusters. A scale-down factor of 1.0 will result in scaling down so that there are no more executors for the Spark Job.(more aggressive scaling). A scale-down factor closer to 0 will result in a smaller magnitude of scaling donw (less aggressive scaling).Bounds: 0.0, 1.0. */
  scaleDownFactor?: number;
  /** Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. */
  scaleDownMinWorkerFraction?: number;
  /** Optional. Remove only idle workers when scaling down cluster */
  removeOnlyIdleWorkers?: boolean;
  /** Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. */
  scaleUpMinWorkerFraction?: number;
  /** Required. Timeout for Spark graceful decommissioning of spark workers. Specifies the duration to wait for spark worker to complete spark decommissioning tasks before forcefully removing workers. Only applicable to downscaling operations.Bounds: 0s, 1d. */
  gracefulDecommissionTimeout?: string;
  /** Required. Fraction of required workers to add to Spark Standalone clusters. A scale-up factor of 1.0 will result in scaling up so that there are no more required workers for the Spark Job (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling).Bounds: 0.0, 1.0. */
  scaleUpFactor?: number;
}

export const SparkStandaloneAutoscalingConfig: Schema.Schema<SparkStandaloneAutoscalingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scaleDownFactor: Schema.optional(Schema.Number),
    scaleDownMinWorkerFraction: Schema.optional(Schema.Number),
    removeOnlyIdleWorkers: Schema.optional(Schema.Boolean),
    scaleUpMinWorkerFraction: Schema.optional(Schema.Number),
    gracefulDecommissionTimeout: Schema.optional(Schema.String),
    scaleUpFactor: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SparkStandaloneAutoscalingConfig" });

export interface BasicAutoscalingAlgorithm {
  /** Optional. YARN autoscaling configuration. */
  yarnConfig?: BasicYarnAutoscalingConfig;
  /** Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.Bounds: 2m, 1d. Default: 2m. */
  cooldownPeriod?: string;
  /** Optional. Spark Standalone autoscaling configuration */
  sparkStandaloneConfig?: SparkStandaloneAutoscalingConfig;
}

export const BasicAutoscalingAlgorithm: Schema.Schema<BasicAutoscalingAlgorithm> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yarnConfig: Schema.optional(BasicYarnAutoscalingConfig),
    cooldownPeriod: Schema.optional(Schema.String),
    sparkStandaloneConfig: Schema.optional(SparkStandaloneAutoscalingConfig),
  }).annotate({ identifier: "BasicAutoscalingAlgorithm" });

export interface InstanceGroupAutoscalingPolicyConfig {
  /** Required. Maximum number of instances for this group. Required for primary workers. Note that by default, clusters will not use secondary workers. Required for secondary workers if the minimum secondary instances is set.Primary workers - Bounds: [min_instances, ). Secondary workers - Bounds: [min_instances, ). Default: 0. */
  maxInstances?: number;
  /** Optional. Minimum number of instances for this group.Primary workers - Bounds: 2, max_instances. Default: 2. Secondary workers - Bounds: 0, max_instances. Default: 0. */
  minInstances?: number;
  /** Optional. Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. For example, if primary workers have weight 2, and secondary workers have weight 1, the cluster will have approximately 2 primary workers for each secondary worker.The cluster may not reach the specified balance if constrained by min/max bounds or other autoscaling settings. For example, if max_instances for secondary workers is 0, then only primary workers will be added. The cluster can also be out of balance when created.If weight is not set on any instance group, the cluster will default to equal weight for all groups: the cluster will attempt to maintain an equal number of workers in each group within the configured size bounds for each group. If weight is set for one group only, the cluster will default to zero weight on the unset group. For example if weight is set only on primary workers, the cluster will use primary workers only and no secondary workers. */
  weight?: number;
}

export const InstanceGroupAutoscalingPolicyConfig: Schema.Schema<InstanceGroupAutoscalingPolicyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxInstances: Schema.optional(Schema.Number),
    minInstances: Schema.optional(Schema.Number),
    weight: Schema.optional(Schema.Number),
  }).annotate({ identifier: "InstanceGroupAutoscalingPolicyConfig" });

export interface AutoscalingPolicy {
  /** Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} */
  name?: string;
  basicAlgorithm?: BasicAutoscalingAlgorithm;
  /** Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with an autoscaling policy. */
  labels?: Record<string, string>;
  /** Optional. Describes how the autoscaler will operate for secondary workers. */
  secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig;
  /** Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters. */
  id?: string;
  /** Required. Describes how the autoscaler will operate for primary workers. */
  workerConfig?: InstanceGroupAutoscalingPolicyConfig;
  /** Optional. The type of the clusters for which this autoscaling policy is to be configured. */
  clusterType?:
    | "CLUSTER_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "ZERO_SCALE"
    | (string & {});
}

export const AutoscalingPolicy: Schema.Schema<AutoscalingPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    basicAlgorithm: Schema.optional(BasicAutoscalingAlgorithm),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    secondaryWorkerConfig: Schema.optional(
      InstanceGroupAutoscalingPolicyConfig,
    ),
    id: Schema.optional(Schema.String),
    workerConfig: Schema.optional(InstanceGroupAutoscalingPolicyConfig),
    clusterType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutoscalingPolicy" });

export interface SearchSessionSparkApplicationJobsResponse {
  /** Output only. Data corresponding to a spark job. */
  sparkApplicationJobs?: ReadonlyArray<JobData>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSessionSparkApplicationJobsRequest. */
  nextPageToken?: string;
}

export const SearchSessionSparkApplicationJobsResponse: Schema.Schema<SearchSessionSparkApplicationJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplicationJobs: Schema.optional(Schema.Array(JobData)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchSessionSparkApplicationJobsResponse" });

export interface KubernetesClusterConfig {
  /** Optional. A namespace within the Kubernetes cluster to deploy into. If this namespace does not exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not specified, the name of the Dataproc Cluster is used. */
  kubernetesNamespace?: string;
  /** Required. The configuration for running the Dataproc cluster on GKE. */
  gkeClusterConfig?: GkeClusterConfig;
  /** Optional. The software configuration for this Dataproc cluster running on Kubernetes. */
  kubernetesSoftwareConfig?: KubernetesSoftwareConfig;
}

export const KubernetesClusterConfig: Schema.Schema<KubernetesClusterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kubernetesNamespace: Schema.optional(Schema.String),
    gkeClusterConfig: Schema.optional(GkeClusterConfig),
    kubernetesSoftwareConfig: Schema.optional(KubernetesSoftwareConfig),
  }).annotate({ identifier: "KubernetesClusterConfig" });

export interface SparkConnectConfig {}

export const SparkConnectConfig: Schema.Schema<SparkConnectConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SparkConnectConfig",
  });

export interface ApplicationAttemptInfo {
  appSparkVersion?: string;
  startTime?: string;
  attemptId?: string;
  endTime?: string;
  durationMillis?: string;
  lastUpdated?: string;
  sparkUser?: string;
  completed?: boolean;
}

export const ApplicationAttemptInfo: Schema.Schema<ApplicationAttemptInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appSparkVersion: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    attemptId: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    durationMillis: Schema.optional(Schema.String),
    lastUpdated: Schema.optional(Schema.String),
    sparkUser: Schema.optional(Schema.String),
    completed: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ApplicationAttemptInfo" });

export interface ApplicationInfo {
  coresPerExecutor?: number;
  applicationContextIngestionStatus?:
    | "APPLICATION_CONTEXT_INGESTION_STATUS_UNSPECIFIED"
    | "APPLICATION_CONTEXT_INGESTION_STATUS_COMPLETED"
    | (string & {});
  applicationId?: string;
  maxCores?: number;
  attempts?: ReadonlyArray<ApplicationAttemptInfo>;
  name?: string;
  memoryPerExecutorMb?: number;
  quantileDataStatus?:
    | "QUANTILE_DATA_STATUS_UNSPECIFIED"
    | "QUANTILE_DATA_STATUS_COMPLETED"
    | "QUANTILE_DATA_STATUS_FAILED"
    | (string & {});
  coresGranted?: number;
}

export const ApplicationInfo: Schema.Schema<ApplicationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    coresPerExecutor: Schema.optional(Schema.Number),
    applicationContextIngestionStatus: Schema.optional(Schema.String),
    applicationId: Schema.optional(Schema.String),
    maxCores: Schema.optional(Schema.Number),
    attempts: Schema.optional(Schema.Array(ApplicationAttemptInfo)),
    name: Schema.optional(Schema.String),
    memoryPerExecutorMb: Schema.optional(Schema.Number),
    quantileDataStatus: Schema.optional(Schema.String),
    coresGranted: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ApplicationInfo" });

export interface SparkApplication {
  /** Identifier. Name of the spark application */
  name?: string;
  /** Output only. High level information corresponding to an application. */
  application?: ApplicationInfo;
}

export const SparkApplication: Schema.Schema<SparkApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    application: Schema.optional(ApplicationInfo),
  }).annotate({ identifier: "SparkApplication" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the resource. Permissions with wildcards (such as * or storage.*) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface AuxiliaryServicesConfig {
  /** Optional. The Hive Metastore configuration for this workload. */
  metastoreConfig?: MetastoreConfig;
  /** Optional. The Spark History Server configuration for the workload. */
  sparkHistoryServerConfig?: SparkHistoryServerConfig;
}

export const AuxiliaryServicesConfig: Schema.Schema<AuxiliaryServicesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metastoreConfig: Schema.optional(MetastoreConfig),
    sparkHistoryServerConfig: Schema.optional(SparkHistoryServerConfig),
  }).annotate({ identifier: "AuxiliaryServicesConfig" });

export interface VirtualClusterConfig {
  /** Required. The configuration for running the Dataproc cluster on Kubernetes. */
  kubernetesClusterConfig?: KubernetesClusterConfig;
  /** Optional. Configuration of auxiliary services used by this cluster. */
  auxiliaryServicesConfig?: AuxiliaryServicesConfig;
  /** Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Dataproc determines a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. */
  stagingBucket?: string;
}

export const VirtualClusterConfig: Schema.Schema<VirtualClusterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kubernetesClusterConfig: Schema.optional(KubernetesClusterConfig),
    auxiliaryServicesConfig: Schema.optional(AuxiliaryServicesConfig),
    stagingBucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "VirtualClusterConfig" });

export interface ClusterMetrics {
  /** YARN metrics. */
  yarnMetrics?: Record<string, string>;
  /** The HDFS metrics. */
  hdfsMetrics?: Record<string, string>;
}

export const ClusterMetrics: Schema.Schema<ClusterMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yarnMetrics: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    hdfsMetrics: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ClusterMetrics" });

export interface Cluster {
  /** Optional. The virtual cluster config is used when creating a Dataproc cluster that does not directly control the underlying compute resources, for example, when creating a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). Dataproc may set default values, and values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified. */
  virtualClusterConfig?: VirtualClusterConfig;
  /** Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster. */
  labels?: Record<string, string>;
  /** Required. The Google Cloud Platform project ID that the cluster belongs to. */
  projectId?: string;
  /** Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused. */
  clusterName?: string;
  /** Output only. The previous cluster status. */
  statusHistory?: ReadonlyArray<ClusterStatus>;
  /** Output only. Cluster status. */
  status?: ClusterStatus;
  /** Output only. Contains cluster daemon metrics such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release. */
  metrics?: ClusterMetrics;
  /** Output only. A cluster UUID (Unique Universal Identifier). Dataproc generates this value when it creates the cluster. */
  clusterUuid?: string;
  /** Optional. The cluster config for a cluster of Compute Engine Instances. Note that Dataproc may set default values, and values may change when clusters are updated.Exactly one of ClusterConfig or VirtualClusterConfig must be specified. */
  config?: ClusterConfig;
}

export const Cluster: Schema.Schema<Cluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualClusterConfig: Schema.optional(VirtualClusterConfig),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    projectId: Schema.optional(Schema.String),
    clusterName: Schema.optional(Schema.String),
    statusHistory: Schema.optional(Schema.Array(ClusterStatus)),
    status: Schema.optional(ClusterStatus),
    metrics: Schema.optional(ClusterMetrics),
    clusterUuid: Schema.optional(Schema.String),
    config: Schema.optional(ClusterConfig),
  }).annotate({ identifier: "Cluster" });

export interface ListClustersResponse {
  /** Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListClustersRequest. */
  nextPageToken?: string;
  /** Output only. The clusters in the project. */
  clusters?: ReadonlyArray<Cluster>;
}

export const ListClustersResponse: Schema.Schema<ListClustersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    clusters: Schema.optional(Schema.Array(Cluster)),
  }).annotate({ identifier: "ListClustersResponse" });

export interface AccessSparkApplicationStageRddOperationGraphResponse {
  /** RDD operation graph for a Spark Application Stage. */
  rddOperationGraph?: RddOperationGraph;
}

export const AccessSparkApplicationStageRddOperationGraphResponse: Schema.Schema<AccessSparkApplicationStageRddOperationGraphResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rddOperationGraph: Schema.optional(RddOperationGraph),
  }).annotate({
    identifier: "AccessSparkApplicationStageRddOperationGraphResponse",
  });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets ListOperationsRequest.return_partial_success and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface SearchSessionSparkApplicationStageAttemptsResponse {
  /** Output only. Data corresponding to a stage attempts */
  sparkApplicationStageAttempts?: ReadonlyArray<StageData>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSessionSparkApplicationStageAttemptsRequest. */
  nextPageToken?: string;
}

export const SearchSessionSparkApplicationStageAttemptsResponse: Schema.Schema<SearchSessionSparkApplicationStageAttemptsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplicationStageAttempts: Schema.optional(Schema.Array(StageData)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "SearchSessionSparkApplicationStageAttemptsResponse",
  });

export interface ClusterOperationStatus {
  /** Output only. The time this state was entered. */
  stateStartTime?: string;
  /** Output only. A message containing the operation state. */
  state?: "UNKNOWN" | "PENDING" | "RUNNING" | "DONE" | (string & {});
  /** Output only. A message containing the detailed operation state. */
  innerState?: string;
  /** Output only. A message containing any operation metadata details. */
  details?: string;
}

export const ClusterOperationStatus: Schema.Schema<ClusterOperationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stateStartTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    innerState: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterOperationStatus" });

export interface Interval {
  /** Optional. Inclusive start of the interval.If specified, a Timestamp matching this interval will have to be the same or after the start. */
  startTime?: string;
  /** Optional. Exclusive end of the interval.If specified, a Timestamp matching this interval will have to be before the end. */
  endTime?: string;
}

export const Interval: Schema.Schema<Interval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Interval" });

export interface SearchSessionSparkApplicationStagesResponse {
  /** Output only. Data corresponding to a stage. */
  sparkApplicationStages?: ReadonlyArray<StageData>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSessionSparkApplicationStages. */
  nextPageToken?: string;
}

export const SearchSessionSparkApplicationStagesResponse: Schema.Schema<SearchSessionSparkApplicationStagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplicationStages: Schema.optional(Schema.Array(StageData)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchSessionSparkApplicationStagesResponse" });

export interface SearchSparkApplicationExecutorStageSummaryResponse {
  /** Details about executors used by the application stage. */
  sparkApplicationStageExecutors?: ReadonlyArray<ExecutorStageSummary>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSparkApplicationExecutorsListRequest. */
  nextPageToken?: string;
}

export const SearchSparkApplicationExecutorStageSummaryResponse: Schema.Schema<SearchSparkApplicationExecutorStageSummaryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplicationStageExecutors: Schema.optional(
      Schema.Array(ExecutorStageSummary),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "SearchSparkApplicationExecutorStageSummaryResponse",
  });

export interface SummarizeSparkApplicationStagesResponse {
  /** Summary of a Spark Application Stages */
  stagesSummary?: StagesSummary;
}

export const SummarizeSparkApplicationStagesResponse: Schema.Schema<SummarizeSparkApplicationStagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stagesSummary: Schema.optional(StagesSummary),
  }).annotate({ identifier: "SummarizeSparkApplicationStagesResponse" });

export interface ClusterToRepair {
  /** Required. Repair action to take on the cluster resource. */
  clusterRepairAction?:
    | "CLUSTER_REPAIR_ACTION_UNSPECIFIED"
    | "REPAIR_ERROR_DUE_TO_UPDATE_CLUSTER"
    | (string & {});
}

export const ClusterToRepair: Schema.Schema<ClusterToRepair> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterRepairAction: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterToRepair" });

export interface RddDataDistribution {
  onHeapMemoryUsed?: string;
  offHeapMemoryUsed?: string;
  diskUsed?: string;
  onHeapMemoryRemaining?: string;
  offHeapMemoryRemaining?: string;
  memoryUsed?: string;
  address?: string;
  memoryRemaining?: string;
}

export const RddDataDistribution: Schema.Schema<RddDataDistribution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    onHeapMemoryUsed: Schema.optional(Schema.String),
    offHeapMemoryUsed: Schema.optional(Schema.String),
    diskUsed: Schema.optional(Schema.String),
    onHeapMemoryRemaining: Schema.optional(Schema.String),
    offHeapMemoryRemaining: Schema.optional(Schema.String),
    memoryUsed: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
    memoryRemaining: Schema.optional(Schema.String),
  }).annotate({ identifier: "RddDataDistribution" });

export interface JupyterConfig {
  /** Optional. Display name, shown in the Jupyter kernelspec card. */
  displayName?: string;
  /** Optional. Kernel */
  kernel?: "KERNEL_UNSPECIFIED" | "PYTHON" | "SCALA" | (string & {});
}

export const JupyterConfig: Schema.Schema<JupyterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    kernel: Schema.optional(Schema.String),
  }).annotate({ identifier: "JupyterConfig" });

export interface SessionTemplate {
  /** Output only. A session template UUID (Unique Universal Identifier). The service generates this value when it creates the session template. */
  uuid?: string;
  /** Optional. Labels to associate with sessions created using this template. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if present, must contain 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a session. */
  labels?: Record<string, string>;
  /** Optional. Spark connect session config. */
  sparkConnectSession?: SparkConnectConfig;
  /** Optional. Runtime configuration for session execution. */
  runtimeConfig?: RuntimeConfig;
  /** Output only. The time when the template was created. */
  createTime?: string;
  /** Optional. Jupyter session config. */
  jupyterSession?: JupyterConfig;
  /** Output only. The email address of the user who created the template. */
  creator?: string;
  /** Output only. The time the template was last updated. */
  updateTime?: string;
  /** Required. Identifier. The resource name of the session template. */
  name?: string;
  /** Optional. Environment configuration for session execution. */
  environmentConfig?: EnvironmentConfig;
  /** Optional. Brief description of the template. */
  description?: string;
}

export const SessionTemplate: Schema.Schema<SessionTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sparkConnectSession: Schema.optional(SparkConnectConfig),
    runtimeConfig: Schema.optional(RuntimeConfig),
    createTime: Schema.optional(Schema.String),
    jupyterSession: Schema.optional(JupyterConfig),
    creator: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    environmentConfig: Schema.optional(EnvironmentConfig),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "SessionTemplate" });

export interface SearchSparkApplicationsResponse {
  /** Output only. High level information corresponding to an application. */
  sparkApplications?: ReadonlyArray<SparkApplication>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSparkApplicationsRequest. */
  nextPageToken?: string;
}

export const SearchSparkApplicationsResponse: Schema.Schema<SearchSparkApplicationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplications: Schema.optional(Schema.Array(SparkApplication)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchSparkApplicationsResponse" });

export interface SummarizeSparkApplicationStageAttemptTasksResponse {
  /** Summary of tasks for a Spark Application Stage Attempt */
  stageAttemptTasksSummary?: StageAttemptTasksSummary;
}

export const SummarizeSparkApplicationStageAttemptTasksResponse: Schema.Schema<SummarizeSparkApplicationStageAttemptTasksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stageAttemptTasksSummary: Schema.optional(StageAttemptTasksSummary),
  }).annotate({
    identifier: "SummarizeSparkApplicationStageAttemptTasksResponse",
  });

export interface AppSummary {
  numCompletedJobs?: number;
  numCompletedStages?: number;
}

export const AppSummary: Schema.Schema<AppSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numCompletedJobs: Schema.optional(Schema.Number),
    numCompletedStages: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AppSummary" });

export interface WriteSessionSparkApplicationContextResponse {}

export const WriteSessionSparkApplicationContextResponse: Schema.Schema<WriteSessionSparkApplicationContextResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "WriteSessionSparkApplicationContextResponse",
  });

export interface SummarizeSessionSparkApplicationStagesResponse {
  /** Summary of a Spark Application Stages */
  stagesSummary?: StagesSummary;
}

export const SummarizeSessionSparkApplicationStagesResponse: Schema.Schema<SummarizeSessionSparkApplicationStagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stagesSummary: Schema.optional(StagesSummary),
  }).annotate({ identifier: "SummarizeSessionSparkApplicationStagesResponse" });

export interface NativeSqlExecutionUiData {
  /** Optional. Number of nodes in Native. */
  numNativeNodes?: number;
  /** Required. Execution ID of the Native SQL Execution. */
  executionId?: string;
  /** Optional. Number of nodes fallen back to Spark. */
  numFallbackNodes?: number;
  /** Optional. Description of the fallback. */
  fallbackDescription?: string;
  /** Optional. Fallback node to reason. */
  fallbackNodeToReason?: ReadonlyArray<FallbackReason>;
  /** Optional. Description of the execution. */
  description?: string;
}

export const NativeSqlExecutionUiData: Schema.Schema<NativeSqlExecutionUiData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numNativeNodes: Schema.optional(Schema.Number),
    executionId: Schema.optional(Schema.String),
    numFallbackNodes: Schema.optional(Schema.Number),
    fallbackDescription: Schema.optional(Schema.String),
    fallbackNodeToReason: Schema.optional(Schema.Array(FallbackReason)),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "NativeSqlExecutionUiData" });

export interface JobsSummary {
  /** Spark Scheduling mode */
  schedulingMode?: string;
  /** Number of active jobs */
  activeJobs?: number;
  /** Attempts info */
  attempts?: ReadonlyArray<ApplicationAttemptInfo>;
  /** Number of failed jobs */
  failedJobs?: number;
  /** Number of completed jobs */
  completedJobs?: number;
  /** Spark Application Id */
  applicationId?: string;
}

export const JobsSummary: Schema.Schema<JobsSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schedulingMode: Schema.optional(Schema.String),
    activeJobs: Schema.optional(Schema.Number),
    attempts: Schema.optional(Schema.Array(ApplicationAttemptInfo)),
    failedJobs: Schema.optional(Schema.Number),
    completedJobs: Schema.optional(Schema.Number),
    applicationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "JobsSummary" });

export interface Session {
  /** Identifier. The resource name of the session. */
  name?: string;
  /** Optional. Environment configuration for the session execution. */
  environmentConfig?: EnvironmentConfig;
  /** Output only. The time when the session was created. */
  createTime?: string;
  /** Output only. The email address of the user who created the session. */
  creator?: string;
  /** Output only. Runtime information about session execution. */
  runtimeInfo?: RuntimeInfo;
  /** Optional. Spark connect session config. */
  sparkConnectSession?: SparkConnectConfig;
  /** Optional. Runtime configuration for the session execution. */
  runtimeConfig?: RuntimeConfig;
  /** Optional. The session template used by the session.Only resource names, including project ID and location, are valid.Example: * https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id] * projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id]The template must be in the same project and Dataproc region as the session. */
  sessionTemplate?: string;
  /** Optional. The email address of the user who owns the session. */
  user?: string;
  /** Output only. Historical state information for the session. */
  stateHistory?: ReadonlyArray<SessionStateHistory>;
  /** Output only. The time when the session entered the current state. */
  stateTime?: string;
  /** Optional. Jupyter session config. */
  jupyterSession?: JupyterConfig;
  /** Output only. Session state details, such as the failure description if the state is FAILED. */
  stateMessage?: string;
  /** Optional. The labels to associate with the session. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a session. */
  labels?: Record<string, string>;
  /** Output only. A session UUID (Unique Universal Identifier). The service generates this value when it creates the session. */
  uuid?: string;
  /** Output only. A state of the session. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "TERMINATING"
    | "TERMINATED"
    | "FAILED"
    | (string & {});
}

export const Session: Schema.Schema<Session> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    environmentConfig: Schema.optional(EnvironmentConfig),
    createTime: Schema.optional(Schema.String),
    creator: Schema.optional(Schema.String),
    runtimeInfo: Schema.optional(RuntimeInfo),
    sparkConnectSession: Schema.optional(SparkConnectConfig),
    runtimeConfig: Schema.optional(RuntimeConfig),
    sessionTemplate: Schema.optional(Schema.String),
    user: Schema.optional(Schema.String),
    stateHistory: Schema.optional(Schema.Array(SessionStateHistory)),
    stateTime: Schema.optional(Schema.String),
    jupyterSession: Schema.optional(JupyterConfig),
    stateMessage: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uuid: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "Session" });

export interface ListSessionsResponse {
  /** A token, which can be sent as page_token, to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Output only. The sessions from the specified collection. */
  sessions?: ReadonlyArray<Session>;
}

export const ListSessionsResponse: Schema.Schema<ListSessionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    sessions: Schema.optional(Schema.Array(Session)),
  }).annotate({ identifier: "ListSessionsResponse" });

export interface SummarizeSessionSparkApplicationJobsResponse {
  /** Summary of a Spark Application Jobs */
  jobsSummary?: JobsSummary;
}

export const SummarizeSessionSparkApplicationJobsResponse: Schema.Schema<SummarizeSessionSparkApplicationJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobsSummary: Schema.optional(JobsSummary),
  }).annotate({ identifier: "SummarizeSessionSparkApplicationJobsResponse" });

export interface SearchSparkApplicationStagesResponse {
  /** Output only. Data corresponding to a stage. */
  sparkApplicationStages?: ReadonlyArray<StageData>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSparkApplicationStages. */
  nextPageToken?: string;
}

export const SearchSparkApplicationStagesResponse: Schema.Schema<SearchSparkApplicationStagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplicationStages: Schema.optional(Schema.Array(StageData)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchSparkApplicationStagesResponse" });

export interface NodePool {
  /** Required. A unique id of the node pool. Primary and Secondary workers can be specified using special reserved ids PRIMARY_WORKER_POOL and SECONDARY_WORKER_POOL respectively. Aux node pools can be referenced using corresponding pool id. */
  id?: string;
  /** Name of instances to be repaired. These instances must belong to specified node pool. */
  instanceNames?: ReadonlyArray<string>;
  /** Required. Repair action to take on specified resources of the node pool. */
  repairAction?: "REPAIR_ACTION_UNSPECIFIED" | "DELETE" | (string & {});
}

export const NodePool: Schema.Schema<NodePool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    instanceNames: Schema.optional(Schema.Array(Schema.String)),
    repairAction: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodePool" });

export interface SearchSessionSparkApplicationsResponse {
  /** Output only. High level information corresponding to an application. */
  sparkApplications?: ReadonlyArray<SparkApplication>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSessionSparkApplicationsRequest. */
  nextPageToken?: string;
}

export const SearchSessionSparkApplicationsResponse: Schema.Schema<SearchSessionSparkApplicationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplications: Schema.optional(Schema.Array(SparkApplication)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchSessionSparkApplicationsResponse" });

export interface ResizeNodeGroupRequest {
  /** Required. The number of running instances for the node group to maintain. The group adds or removes instances to maintain the number of instances specified by this parameter. */
  size?: number;
  /** Optional. operation id of the parent operation sending the resize request */
  parentOperationId?: string;
  /** Optional. A unique ID used to identify the request. If the server receives two ResizeNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.ResizeNodeGroupRequests) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/scaling-clusters#graceful_decommissioning) allows the removal of nodes from the Compute Engine node group without interrupting jobs in progress. This timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher. */
  gracefulDecommissionTimeout?: string;
}

export const ResizeNodeGroupRequest: Schema.Schema<ResizeNodeGroupRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    size: Schema.optional(Schema.Number),
    parentOperationId: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
    gracefulDecommissionTimeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResizeNodeGroupRequest" });

export interface SummarizeSessionSparkApplicationExecutorsResponse {
  /** Spark Application Id */
  applicationId?: string;
  /** Consolidated summary for active executors. */
  activeExecutorSummary?: ConsolidatedExecutorSummary;
  /** Consolidated summary for dead executors. */
  deadExecutorSummary?: ConsolidatedExecutorSummary;
  /** Overall consolidated summary for all executors. */
  totalExecutorSummary?: ConsolidatedExecutorSummary;
}

export const SummarizeSessionSparkApplicationExecutorsResponse: Schema.Schema<SummarizeSessionSparkApplicationExecutorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationId: Schema.optional(Schema.String),
    activeExecutorSummary: Schema.optional(ConsolidatedExecutorSummary),
    deadExecutorSummary: Schema.optional(ConsolidatedExecutorSummary),
    totalExecutorSummary: Schema.optional(ConsolidatedExecutorSummary),
  }).annotate({
    identifier: "SummarizeSessionSparkApplicationExecutorsResponse",
  });

export interface AccessSparkApplicationResponse {
  /** Output only. High level information corresponding to an application. */
  application?: ApplicationInfo;
}

export const AccessSparkApplicationResponse: Schema.Schema<AccessSparkApplicationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application: Schema.optional(ApplicationInfo),
  }).annotate({ identifier: "AccessSparkApplicationResponse" });

export interface RepairClusterRequest {
  /** Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist. */
  clusterUuid?: string;
  /** Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning facilitates the removal of cluster nodes without interrupting jobs in progress. The timeout specifies the amount of time to wait for jobs finish before forcefully removing nodes. The default timeout is 0 for forceful decommissioning, and the maximum timeout period is 1 day. (see JSON Mapping—Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).graceful_decommission_timeout is supported in Dataproc image versions 1.2+. */
  gracefulDecommissionTimeout?: string;
  /** Optional. Node pools and corresponding repair action to be taken. All node pools should be unique in this request. i.e. Multiple entries for the same node pool id are not allowed. */
  nodePools?: ReadonlyArray<NodePool>;
  /** Optional. operation id of the parent operation sending the repair request */
  parentOperationId?: string;
  /** Optional. Cluster to be repaired */
  cluster?: ClusterToRepair;
  /** Optional. Whether the request is submitted by Dataproc super user. If true, IAM will check 'dataproc.clusters.repair' permission instead of 'dataproc.clusters.update' permission. This is to give Dataproc superuser the ability to repair clusters without granting the overly broad update permission. */
  dataprocSuperUser?: boolean;
  /** Optional. A unique ID used to identify the request. If the server receives two RepairClusterRequests with the same ID, the second request is ignored, and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
}

export const RepairClusterRequest: Schema.Schema<RepairClusterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterUuid: Schema.optional(Schema.String),
    gracefulDecommissionTimeout: Schema.optional(Schema.String),
    nodePools: Schema.optional(Schema.Array(NodePool)),
    parentOperationId: Schema.optional(Schema.String),
    cluster: Schema.optional(ClusterToRepair),
    dataprocSuperUser: Schema.optional(Schema.Boolean),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RepairClusterRequest" });

export interface ClusterOperationMetadata {
  /** Output only. The previous operation status. */
  statusHistory?: ReadonlyArray<ClusterOperationStatus>;
  /** Output only. Current operation status. */
  status?: ClusterOperationStatus;
  /** Output only. Errors encountered during operation execution. */
  warnings?: ReadonlyArray<string>;
  /** Output only. Labels associated with the operation */
  labels?: Record<string, string>;
  /** Output only. Name of the cluster for the operation. */
  clusterName?: string;
  /** Output only. Child operation ids */
  childOperationIds?: ReadonlyArray<string>;
  /** Output only. Cluster UUID for the operation. */
  clusterUuid?: string;
  /** Output only. The operation type. */
  operationType?: string;
  /** Output only. Short description of operation. */
  description?: string;
}

export const ClusterOperationMetadata: Schema.Schema<ClusterOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusHistory: Schema.optional(Schema.Array(ClusterOperationStatus)),
    status: Schema.optional(ClusterOperationStatus),
    warnings: Schema.optional(Schema.Array(Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    clusterName: Schema.optional(Schema.String),
    childOperationIds: Schema.optional(Schema.Array(Schema.String)),
    clusterUuid: Schema.optional(Schema.String),
    operationType: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterOperationMetadata" });

export interface InstantiateWorkflowTemplateRequest {
  /** Optional. The version of workflow template to instantiate. If specified, the workflow will be instantiated only if the current version of the workflow template has the supplied version.This option cannot be used to instantiate a previous version of workflow template. */
  version?: number;
  /** Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Optional. Map from parameter names to values that should be used for those parameters. Values may not exceed 1000 characters. */
  parameters?: Record<string, string>;
}

export const InstantiateWorkflowTemplateRequest: Schema.Schema<InstantiateWorkflowTemplateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    requestId: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "InstantiateWorkflowTemplateRequest" });

export interface RddStorageInfo {
  storageLevel?: string;
  name?: string;
  numCachedPartitions?: number;
  dataDistribution?: ReadonlyArray<RddDataDistribution>;
  memoryUsed?: string;
  partitions?: ReadonlyArray<RddPartitionInfo>;
  rddStorageId?: number;
  numPartitions?: number;
  diskUsed?: string;
}

export const RddStorageInfo: Schema.Schema<RddStorageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageLevel: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    numCachedPartitions: Schema.optional(Schema.Number),
    dataDistribution: Schema.optional(Schema.Array(RddDataDistribution)),
    memoryUsed: Schema.optional(Schema.String),
    partitions: Schema.optional(Schema.Array(RddPartitionInfo)),
    rddStorageId: Schema.optional(Schema.Number),
    numPartitions: Schema.optional(Schema.Number),
    diskUsed: Schema.optional(Schema.String),
  }).annotate({ identifier: "RddStorageInfo" });

export interface AccessSparkApplicationSqlQueryResponse {
  /** SQL Execution Data */
  executionData?: SqlExecutionUiData;
}

export const AccessSparkApplicationSqlQueryResponse: Schema.Schema<AccessSparkApplicationSqlQueryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionData: Schema.optional(SqlExecutionUiData),
  }).annotate({ identifier: "AccessSparkApplicationSqlQueryResponse" });

export interface SummarizeSparkApplicationExecutorsResponse {
  /** Consolidated summary for dead executors. */
  deadExecutorSummary?: ConsolidatedExecutorSummary;
  /** Overall consolidated summary for all executors. */
  totalExecutorSummary?: ConsolidatedExecutorSummary;
  /** Spark Application Id */
  applicationId?: string;
  /** Consolidated summary for active executors. */
  activeExecutorSummary?: ConsolidatedExecutorSummary;
}

export const SummarizeSparkApplicationExecutorsResponse: Schema.Schema<SummarizeSparkApplicationExecutorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deadExecutorSummary: Schema.optional(ConsolidatedExecutorSummary),
    totalExecutorSummary: Schema.optional(ConsolidatedExecutorSummary),
    applicationId: Schema.optional(Schema.String),
    activeExecutorSummary: Schema.optional(ConsolidatedExecutorSummary),
  }).annotate({ identifier: "SummarizeSparkApplicationExecutorsResponse" });

export interface ListWorkflowTemplatesResponse {
  /** Output only. WorkflowTemplates list. */
  templates?: ReadonlyArray<WorkflowTemplate>;
  /** Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListWorkflowTemplatesRequest. */
  nextPageToken?: string;
  /** Output only. List of workflow templates that could not be included in the response. Attempting to get one of these resources may indicate why it was not included in the list response. */
  unreachable?: ReadonlyArray<string>;
}

export const ListWorkflowTemplatesResponse: Schema.Schema<ListWorkflowTemplatesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    templates: Schema.optional(Schema.Array(WorkflowTemplate)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListWorkflowTemplatesResponse" });

export interface StateOperatorProgress {
  allUpdatesTimeMs?: string;
  memoryUsedBytes?: string;
  numStateStoreInstances?: string;
  numRowsTotal?: string;
  numRowsRemoved?: string;
  numRowsDroppedByWatermark?: string;
  customMetrics?: Record<string, string>;
  allRemovalsTimeMs?: string;
  commitTimeMs?: string;
  operatorName?: string;
  numRowsUpdated?: string;
  numShufflePartitions?: string;
}

export const StateOperatorProgress: Schema.Schema<StateOperatorProgress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allUpdatesTimeMs: Schema.optional(Schema.String),
    memoryUsedBytes: Schema.optional(Schema.String),
    numStateStoreInstances: Schema.optional(Schema.String),
    numRowsTotal: Schema.optional(Schema.String),
    numRowsRemoved: Schema.optional(Schema.String),
    numRowsDroppedByWatermark: Schema.optional(Schema.String),
    customMetrics: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    allRemovalsTimeMs: Schema.optional(Schema.String),
    commitTimeMs: Schema.optional(Schema.String),
    operatorName: Schema.optional(Schema.String),
    numRowsUpdated: Schema.optional(Schema.String),
    numShufflePartitions: Schema.optional(Schema.String),
  }).annotate({ identifier: "StateOperatorProgress" });

export interface AccessSessionSparkApplicationEnvironmentInfoResponse {
  /** Details about the Environment that the application is running in. */
  applicationEnvironmentInfo?: ApplicationEnvironmentInfo;
}

export const AccessSessionSparkApplicationEnvironmentInfoResponse: Schema.Schema<AccessSessionSparkApplicationEnvironmentInfoResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationEnvironmentInfo: Schema.optional(ApplicationEnvironmentInfo),
  }).annotate({
    identifier: "AccessSessionSparkApplicationEnvironmentInfoResponse",
  });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface SparkConnectExecutionInfo {
  /** Optional. List of sql execution ids associated with the execution. */
  sqlExecIds?: ReadonlyArray<string>;
  /** Timestamp when the execution started. */
  startTimestamp?: string;
  /** Timestamp when the execution was closed. */
  closeTimestamp?: string;
  /** Output only. Current state of the execution. */
  state?:
    | "EXECUTION_STATE_UNKNOWN"
    | "EXECUTION_STATE_STARTED"
    | "EXECUTION_STATE_COMPILED"
    | "EXECUTION_STATE_READY"
    | "EXECUTION_STATE_CANCELED"
    | "EXECUTION_STATE_FAILED"
    | "EXECUTION_STATE_FINISHED"
    | "EXECUTION_STATE_CLOSED"
    | (string & {});
  /** Required. Job tag of the execution. */
  jobTag?: string;
  /** statement of the execution. */
  statement?: string;
  /** Optional. Tags associated with the Spark session. */
  sparkSessionTags?: ReadonlyArray<string>;
  /** Optional. List of job ids associated with the execution. */
  jobIds?: ReadonlyArray<string>;
  /** Timestamp when the execution finished. */
  finishTimestamp?: string;
  /** Detailed information about the execution. */
  detail?: string;
  /** Required. Session ID, ties the execution to a specific Spark Connect session. */
  sessionId?: string;
  /** Unique identifier for the operation. */
  operationId?: string;
  /** User ID of the user who started the execution. */
  userId?: string;
}

export const SparkConnectExecutionInfo: Schema.Schema<SparkConnectExecutionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sqlExecIds: Schema.optional(Schema.Array(Schema.String)),
    startTimestamp: Schema.optional(Schema.String),
    closeTimestamp: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    jobTag: Schema.optional(Schema.String),
    statement: Schema.optional(Schema.String),
    sparkSessionTags: Schema.optional(Schema.Array(Schema.String)),
    jobIds: Schema.optional(Schema.Array(Schema.String)),
    finishTimestamp: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
    sessionId: Schema.optional(Schema.String),
    operationId: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SparkConnectExecutionInfo" });

export interface SearchSparkApplicationJobsResponse {
  /** Output only. Data corresponding to a spark job. */
  sparkApplicationJobs?: ReadonlyArray<JobData>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSparkApplicationJobsRequest. */
  nextPageToken?: string;
}

export const SearchSparkApplicationJobsResponse: Schema.Schema<SearchSparkApplicationJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplicationJobs: Schema.optional(Schema.Array(JobData)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchSparkApplicationJobsResponse" });

export interface ProcessSummary {
  processId?: string;
  isActive?: boolean;
  addTime?: string;
  totalCores?: number;
  removeTime?: string;
  hostPort?: string;
  processLogs?: Record<string, string>;
}

export const ProcessSummary: Schema.Schema<ProcessSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    processId: Schema.optional(Schema.String),
    isActive: Schema.optional(Schema.Boolean),
    addTime: Schema.optional(Schema.String),
    totalCores: Schema.optional(Schema.Number),
    removeTime: Schema.optional(Schema.String),
    hostPort: Schema.optional(Schema.String),
    processLogs: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ProcessSummary" });

export interface SourceProgress {
  description?: string;
  startOffset?: string;
  processedRowsPerSecond?: number;
  latestOffset?: string;
  inputRowsPerSecond?: number;
  numInputRows?: string;
  metrics?: Record<string, string>;
  endOffset?: string;
}

export const SourceProgress: Schema.Schema<SourceProgress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    startOffset: Schema.optional(Schema.String),
    processedRowsPerSecond: Schema.optional(Schema.Number),
    latestOffset: Schema.optional(Schema.String),
    inputRowsPerSecond: Schema.optional(Schema.Number),
    numInputRows: Schema.optional(Schema.String),
    metrics: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    endOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "SourceProgress" });

export interface StreamingQueryProgress {
  batchId?: string;
  timestamp?: string;
  sources?: ReadonlyArray<SourceProgress>;
  name?: string;
  streamingQueryProgressId?: string;
  durationMillis?: Record<string, string>;
  eventTime?: Record<string, string>;
  stateOperators?: ReadonlyArray<StateOperatorProgress>;
  observedMetrics?: Record<string, string>;
  batchDuration?: string;
  runId?: string;
  sink?: SinkProgress;
}

export const StreamingQueryProgress: Schema.Schema<StreamingQueryProgress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batchId: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    sources: Schema.optional(Schema.Array(SourceProgress)),
    name: Schema.optional(Schema.String),
    streamingQueryProgressId: Schema.optional(Schema.String),
    durationMillis: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    eventTime: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    stateOperators: Schema.optional(Schema.Array(StateOperatorProgress)),
    observedMetrics: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    batchDuration: Schema.optional(Schema.String),
    runId: Schema.optional(Schema.String),
    sink: Schema.optional(SinkProgress),
  }).annotate({ identifier: "StreamingQueryProgress" });

export interface SparkConnectSessionInfo {
  /** Optional. Total number of executions in the session. */
  totalExecution?: string;
  /** Timestamp when the session started. */
  startTimestamp?: string;
  /** User ID of the user who started the session. */
  userId?: string;
  /** Timestamp when the session finished. */
  finishTimestamp?: string;
  /** Required. Session ID of the session. */
  sessionId?: string;
}

export const SparkConnectSessionInfo: Schema.Schema<SparkConnectSessionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalExecution: Schema.optional(Schema.String),
    startTimestamp: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
    finishTimestamp: Schema.optional(Schema.String),
    sessionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SparkConnectSessionInfo" });

export interface StreamingQueryData {
  isActive?: boolean;
  endTimestamp?: string;
  startTimestamp?: string;
  runId?: string;
  name?: string;
  streamingQueryId?: string;
  exception?: string;
}

export const StreamingQueryData: Schema.Schema<StreamingQueryData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isActive: Schema.optional(Schema.Boolean),
    endTimestamp: Schema.optional(Schema.String),
    startTimestamp: Schema.optional(Schema.String),
    runId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    streamingQueryId: Schema.optional(Schema.String),
    exception: Schema.optional(Schema.String),
  }).annotate({ identifier: "StreamingQueryData" });

export interface SparkWrapperObject {
  /** Application Id created by Spark. */
  applicationId?: string;
  executorSummary?: ExecutorSummary;
  /** Native Build Info */
  nativeBuildInfoUiData?: NativeBuildInfoUiData;
  stageData?: StageData;
  rddStorageInfo?: RddStorageInfo;
  processSummary?: ProcessSummary;
  sqlExecutionUiData?: SqlExecutionUiData;
  /** Spark Connect Execution Info */
  sparkConnectExecutionInfo?: SparkConnectExecutionInfo;
  poolData?: PoolData;
  streamingQueryProgress?: StreamingQueryProgress;
  applicationEnvironmentInfo?: ApplicationEnvironmentInfo;
  jobData?: JobData;
  /** Spark Connect Session Info */
  sparkConnectSessionInfo?: SparkConnectSessionInfo;
  taskData?: TaskData;
  sparkPlanGraph?: SparkPlanGraph;
  rddOperationGraph?: RddOperationGraph;
  streamBlockData?: StreamBlockData;
  streamingQueryData?: StreamingQueryData;
  applicationInfo?: ApplicationInfo;
  executorStageSummary?: ExecutorStageSummary;
  appSummary?: AppSummary;
  speculationStageSummary?: SpeculationStageSummary;
  /** Native SQL Execution Info */
  nativeSqlExecutionUiData?: NativeSqlExecutionUiData;
  /** VM Timestamp associated with the data object. */
  eventTimestamp?: string;
  resourceProfileInfo?: ResourceProfileInfo;
}

export const SparkWrapperObject: Schema.Schema<SparkWrapperObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationId: Schema.optional(Schema.String),
    executorSummary: Schema.optional(ExecutorSummary),
    nativeBuildInfoUiData: Schema.optional(NativeBuildInfoUiData),
    stageData: Schema.optional(StageData),
    rddStorageInfo: Schema.optional(RddStorageInfo),
    processSummary: Schema.optional(ProcessSummary),
    sqlExecutionUiData: Schema.optional(SqlExecutionUiData),
    sparkConnectExecutionInfo: Schema.optional(SparkConnectExecutionInfo),
    poolData: Schema.optional(PoolData),
    streamingQueryProgress: Schema.optional(StreamingQueryProgress),
    applicationEnvironmentInfo: Schema.optional(ApplicationEnvironmentInfo),
    jobData: Schema.optional(JobData),
    sparkConnectSessionInfo: Schema.optional(SparkConnectSessionInfo),
    taskData: Schema.optional(TaskData),
    sparkPlanGraph: Schema.optional(SparkPlanGraph),
    rddOperationGraph: Schema.optional(RddOperationGraph),
    streamBlockData: Schema.optional(StreamBlockData),
    streamingQueryData: Schema.optional(StreamingQueryData),
    applicationInfo: Schema.optional(ApplicationInfo),
    executorStageSummary: Schema.optional(ExecutorStageSummary),
    appSummary: Schema.optional(AppSummary),
    speculationStageSummary: Schema.optional(SpeculationStageSummary),
    nativeSqlExecutionUiData: Schema.optional(NativeSqlExecutionUiData),
    eventTimestamp: Schema.optional(Schema.String),
    resourceProfileInfo: Schema.optional(ResourceProfileInfo),
  }).annotate({ identifier: "SparkWrapperObject" });

export interface WriteSparkApplicationContextRequest {
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
  sparkWrapperObjects?: ReadonlyArray<SparkWrapperObject>;
}

export const WriteSparkApplicationContextRequest: Schema.Schema<WriteSparkApplicationContextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    sparkWrapperObjects: Schema.optional(Schema.Array(SparkWrapperObject)),
  }).annotate({ identifier: "WriteSparkApplicationContextRequest" });

export interface ListSessionTemplatesResponse {
  /** Output only. Session template list */
  sessionTemplates?: ReadonlyArray<SessionTemplate>;
  /** A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListSessionTemplatesResponse: Schema.Schema<ListSessionTemplatesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionTemplates: Schema.optional(Schema.Array(SessionTemplate)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSessionTemplatesResponse" });

export interface SessionOperationMetadata {
  /** Name of the session for the operation. */
  session?: string;
  /** The time when the operation was created. */
  createTime?: string;
  /** The time when the operation was finished. */
  doneTime?: string;
  /** Warnings encountered during operation execution. */
  warnings?: ReadonlyArray<string>;
  /** Session UUID for the operation. */
  sessionUuid?: string;
  /** Labels associated with the operation. */
  labels?: Record<string, string>;
  /** The operation type. */
  operationType?:
    | "SESSION_OPERATION_TYPE_UNSPECIFIED"
    | "CREATE"
    | "TERMINATE"
    | "DELETE"
    | (string & {});
  /** Short description of the operation. */
  description?: string;
}

export const SessionOperationMetadata: Schema.Schema<SessionOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
    warnings: Schema.optional(Schema.Array(Schema.String)),
    sessionUuid: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    operationType: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "SessionOperationMetadata" });

export interface AccessSessionSparkApplicationResponse {
  /** Output only. High level information corresponding to an application. */
  application?: ApplicationInfo;
}

export const AccessSessionSparkApplicationResponse: Schema.Schema<AccessSessionSparkApplicationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application: Schema.optional(ApplicationInfo),
  }).annotate({ identifier: "AccessSessionSparkApplicationResponse" });

export interface WriteSparkApplicationContextResponse {}

export const WriteSparkApplicationContextResponse: Schema.Schema<WriteSparkApplicationContextResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "WriteSparkApplicationContextResponse",
  });

export interface DiagnoseClusterRequest {
  /** Optional. (Optional) The access type to the diagnostic tarball. If not specified, falls back to default access of the bucket */
  tarballAccess?:
    | "TARBALL_ACCESS_UNSPECIFIED"
    | "GOOGLE_CLOUD_SUPPORT"
    | "GOOGLE_DATAPROC_DIAGNOSE"
    | (string & {});
  /** Optional. Time interval in which diagnosis should be carried out on the cluster. */
  diagnosisInterval?: Interval;
  /** Optional. Specifies a list of jobs on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job} */
  jobs?: ReadonlyArray<string>;
  /** Optional. DEPRECATED Specifies the job on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job} */
  job?: string;
  /** Optional. (Optional) The output Cloud Storage directory for the diagnostic tarball. If not specified, a task-specific directory in the cluster's staging bucket will be used. */
  tarballGcsDir?: string;
  /** Optional. DEPRECATED Specifies the yarn application on which diagnosis is to be performed. */
  yarnApplicationId?: string;
  /** Optional. Specifies a list of yarn applications on which diagnosis is to be performed. */
  yarnApplicationIds?: ReadonlyArray<string>;
}

export const DiagnoseClusterRequest: Schema.Schema<DiagnoseClusterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tarballAccess: Schema.optional(Schema.String),
    diagnosisInterval: Schema.optional(Interval),
    jobs: Schema.optional(Schema.Array(Schema.String)),
    job: Schema.optional(Schema.String),
    tarballGcsDir: Schema.optional(Schema.String),
    yarnApplicationId: Schema.optional(Schema.String),
    yarnApplicationIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DiagnoseClusterRequest" });

export interface SearchSparkApplicationExecutorsResponse {
  /** Details about executors used by the application. */
  sparkApplicationExecutors?: ReadonlyArray<ExecutorSummary>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent SearchSparkApplicationExecutorsListRequest. */
  nextPageToken?: string;
}

export const SearchSparkApplicationExecutorsResponse: Schema.Schema<SearchSparkApplicationExecutorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplicationExecutors: Schema.optional(Schema.Array(ExecutorSummary)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchSparkApplicationExecutorsResponse" });

export interface InjectCredentialsRequest {
  /** Required. The encrypted credentials being injected in to the cluster.The client is responsible for encrypting the credentials in a way that is supported by the cluster.A wrapped value is used here so that the actual contents of the encrypted credentials are not written to audit logs. */
  credentialsCiphertext?: string;
  /** Required. The cluster UUID. */
  clusterUuid?: string;
}

export const InjectCredentialsRequest: Schema.Schema<InjectCredentialsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    credentialsCiphertext: Schema.optional(Schema.String),
    clusterUuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "InjectCredentialsRequest" });

export interface WriteSessionSparkApplicationContextRequest {
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
  /** Required. The batch of spark application context objects sent for ingestion. */
  sparkWrapperObjects?: ReadonlyArray<SparkWrapperObject>;
}

export const WriteSessionSparkApplicationContextRequest: Schema.Schema<WriteSessionSparkApplicationContextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    sparkWrapperObjects: Schema.optional(Schema.Array(SparkWrapperObject)),
  }).annotate({ identifier: "WriteSessionSparkApplicationContextRequest" });

export interface ListAutoscalingPoliciesResponse {
  /** Output only. Autoscaling policies list. */
  policies?: ReadonlyArray<AutoscalingPolicy>;
  /** Output only. This token is included in the response if there are more results to fetch. */
  nextPageToken?: string;
}

export const ListAutoscalingPoliciesResponse: Schema.Schema<ListAutoscalingPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policies: Schema.optional(Schema.Array(AutoscalingPolicy)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAutoscalingPoliciesResponse" });

export interface AccessSessionSparkApplicationSqlSparkPlanGraphResponse {
  /** SparkPlanGraph for a Spark Application execution. */
  sparkPlanGraph?: SparkPlanGraph;
}

export const AccessSessionSparkApplicationSqlSparkPlanGraphResponse: Schema.Schema<AccessSessionSparkApplicationSqlSparkPlanGraphResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkPlanGraph: Schema.optional(SparkPlanGraph),
  }).annotate({
    identifier: "AccessSessionSparkApplicationSqlSparkPlanGraphResponse",
  });

export interface BatchOperationMetadata {
  /** Name of the batch for the operation. */
  batch?: string;
  /** The operation type. */
  operationType?: "BATCH_OPERATION_TYPE_UNSPECIFIED" | "BATCH" | (string & {});
  /** Short description of the operation. */
  description?: string;
  /** Batch UUID for the operation. */
  batchUuid?: string;
  /** Labels associated with the operation. */
  labels?: Record<string, string>;
  /** The time when the operation was created. */
  createTime?: string;
  /** The time when the operation finished. */
  doneTime?: string;
  /** Warnings encountered during operation execution. */
  warnings?: ReadonlyArray<string>;
}

export const BatchOperationMetadata: Schema.Schema<BatchOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batch: Schema.optional(Schema.String),
    operationType: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    batchUuid: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
    warnings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchOperationMetadata" });

export interface TestIamPermissionsResponse {
  /** A subset of TestPermissionsRequest.permissions that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface SubmitJobRequest {
  /** Required. The job resource. */
  job?: Job;
  /** Optional. A unique id used to identify the request. If the server receives two SubmitJobRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.SubmitJobRequest)s with the same id, then the second request will be ignored and the first Job created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
}

export const SubmitJobRequest: Schema.Schema<SubmitJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    job: Schema.optional(Job),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubmitJobRequest" });

export interface StartClusterRequest {
  /** Optional. A unique ID used to identify the request. If the server receives two StartClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StartClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist. */
  clusterUuid?: string;
}

export const StartClusterRequest: Schema.Schema<StartClusterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    clusterUuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "StartClusterRequest" });

export interface AnalyzeBatchRequest {
  /** Optional. A unique ID used to identify the request. If the service receives two AnalyzeBatchRequest (http://cloud/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.AnalyzeBatchRequest)s with the same request_id, the second request is ignored and the Operation that corresponds to the first request created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Optional. The requestor ID is used to identify if the request comes from a GCA investigation or the old Ask Gemini Experience. */
  requestorId?: string;
}

export const AnalyzeBatchRequest: Schema.Schema<AnalyzeBatchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    requestorId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnalyzeBatchRequest" });

export interface TerminateSessionRequest {
  /** Optional. A unique ID used to identify the request. If the service receives two TerminateSessionRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.TerminateSessionRequest)s with the same ID, the second request is ignored.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
}

export const TerminateSessionRequest: Schema.Schema<TerminateSessionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "TerminateSessionRequest" });

export interface SummarizeSparkApplicationJobsResponse {
  /** Summary of a Spark Application Jobs */
  jobsSummary?: JobsSummary;
}

export const SummarizeSparkApplicationJobsResponse: Schema.Schema<SummarizeSparkApplicationJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobsSummary: Schema.optional(JobsSummary),
  }).annotate({ identifier: "SummarizeSparkApplicationJobsResponse" });

export interface NodeGroupOperationMetadata {
  /** Output only. The previous operation status. */
  statusHistory?: ReadonlyArray<ClusterOperationStatus>;
  /** Output only. Current operation status. */
  status?: ClusterOperationStatus;
  /** Output only. Errors encountered during operation execution. */
  warnings?: ReadonlyArray<string>;
  /** Output only. Node group ID for the operation. */
  nodeGroupId?: string;
  /** Output only. Cluster UUID associated with the node group operation. */
  clusterUuid?: string;
  /** Output only. Labels associated with the operation. */
  labels?: Record<string, string>;
  /** The operation type. */
  operationType?:
    | "NODE_GROUP_OPERATION_TYPE_UNSPECIFIED"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | "RESIZE"
    | "REPAIR"
    | "UPDATE_LABELS"
    | "START"
    | "STOP"
    | "UPDATE_METADATA_CONFIG"
    | (string & {});
  /** Output only. Short description of operation. */
  description?: string;
}

export const NodeGroupOperationMetadata: Schema.Schema<NodeGroupOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusHistory: Schema.optional(Schema.Array(ClusterOperationStatus)),
    status: Schema.optional(ClusterOperationStatus),
    warnings: Schema.optional(Schema.Array(Schema.String)),
    nodeGroupId: Schema.optional(Schema.String),
    clusterUuid: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    operationType: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodeGroupOperationMetadata" });

export interface CancelJobRequest {}

export const CancelJobRequest: Schema.Schema<CancelJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelJobRequest",
  });

export interface SearchSparkApplicationStageAttemptTasksResponse {
  /** Output only. Data corresponding to tasks created by spark. */
  sparkApplicationStageAttemptTasks?: ReadonlyArray<TaskData>;
  /** This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListSparkApplicationStageAttemptTasksRequest. */
  nextPageToken?: string;
}

export const SearchSparkApplicationStageAttemptTasksResponse: Schema.Schema<SearchSparkApplicationStageAttemptTasksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sparkApplicationStageAttemptTasks: Schema.optional(Schema.Array(TaskData)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "SearchSparkApplicationStageAttemptTasksResponse",
  });

export interface StopClusterRequest {
  /** Optional. A unique ID used to identify the request. If the server receives two StopClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StopClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist. */
  clusterUuid?: string;
}

export const StopClusterRequest: Schema.Schema<StopClusterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    clusterUuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "StopClusterRequest" });

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

export interface TestIamPermissionsProjectsRegionsClustersRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsRegionsClustersRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsRegionsClustersRequest>;

export type TestIamPermissionsProjectsRegionsClustersResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsRegionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsRegionsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsRegionsClusters: API.OperationMethod<
  TestIamPermissionsProjectsRegionsClustersRequest,
  TestIamPermissionsProjectsRegionsClustersResponse,
  TestIamPermissionsProjectsRegionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsRegionsClustersRequest,
  output: TestIamPermissionsProjectsRegionsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsRegionsClustersRequest {
  /** Required. The ID of the Google Cloud Platform project that the cluster belongs to. */
  projectId: string;
  /** Optional. A unique ID used to identify the request. If the server receives two CreateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Optional. Failure action when primary worker creation fails. */
  actionOnFailedPrimaryWorkers?:
    | "FAILURE_ACTION_UNSPECIFIED"
    | "NO_ACTION"
    | "DELETE"
    | (string & {});
  /** Request body */
  body?: Cluster;
}

export const CreateProjectsRegionsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    region: Schema.String.pipe(T.HttpPath("region")),
    actionOnFailedPrimaryWorkers: Schema.optional(Schema.String).pipe(
      T.HttpQuery("actionOnFailedPrimaryWorkers"),
    ),
    body: Schema.optional(Cluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}/regions/{region}/clusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsRegionsClustersRequest>;

export type CreateProjectsRegionsClustersResponse = Operation;
export const CreateProjectsRegionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsRegionsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). */
export const createProjectsRegionsClusters: API.OperationMethod<
  CreateProjectsRegionsClustersRequest,
  CreateProjectsRegionsClustersResponse,
  CreateProjectsRegionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsRegionsClustersRequest,
  output: CreateProjectsRegionsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsRegionsClustersRequest {
  /** Required. The ID of the Google Cloud Platform project that the cluster belongs to. */
  projectId: string;
  /** Required. The cluster name. */
  clusterName: string;
  /** Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist. */
  clusterUuid?: string;
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Optional. A unique ID used to identify the request. If the server receives two DeleteClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Optional. The graceful termination timeout for the deletion of the cluster. Indicate the time the request will wait to complete the running jobs on the cluster before its forceful deletion. Default value is 0 indicating that the user has not enabled the graceful termination. Value can be between 60 second and 6 Hours, in case the graceful termination is enabled. (There is no separate flag to check the enabling or disabling of graceful termination, it can be checked by the values in the field). */
  gracefulTerminationTimeout?: string;
}

export const DeleteProjectsRegionsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterName: Schema.String.pipe(T.HttpPath("clusterName")),
    clusterUuid: Schema.optional(Schema.String).pipe(
      T.HttpQuery("clusterUuid"),
    ),
    region: Schema.String.pipe(T.HttpPath("region")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    gracefulTerminationTimeout: Schema.optional(Schema.String).pipe(
      T.HttpQuery("gracefulTerminationTimeout"),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "v1/projects/{projectId}/regions/{region}/clusters/{clusterName}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsRegionsClustersRequest>;

export type DeleteProjectsRegionsClustersResponse = Operation;
export const DeleteProjectsRegionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsRegionsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). */
export const deleteProjectsRegionsClusters: API.OperationMethod<
  DeleteProjectsRegionsClustersRequest,
  DeleteProjectsRegionsClustersResponse,
  DeleteProjectsRegionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsRegionsClustersRequest,
  output: DeleteProjectsRegionsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsRegionsClustersRequest {
  /** Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be "*" to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, UPDATING, STOPPING, or STOPPED. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING, ERROR, STOPPING, and STOPPED states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = * */
  filter?: string;
  /** Optional. A page token received from a previous ListClusters call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Required. The ID of the Google Cloud Platform project that the cluster belongs to. */
  projectId: string;
  /** Optional. The maximum number of clusters to return in each response. The service may return fewer than this value. If unspecified, the default value is 200. The maximum value is 1000. */
  pageSize?: number;
}

export const ListProjectsRegionsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    region: Schema.String.pipe(T.HttpPath("region")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/projects/{projectId}/regions/{region}/clusters",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsRegionsClustersRequest>;

export type ListProjectsRegionsClustersResponse = ListClustersResponse;
export const ListProjectsRegionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListClustersResponse;

export type ListProjectsRegionsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all regions/{region}/clusters in a project alphabetically. */
export const listProjectsRegionsClusters: API.PaginatedOperationMethod<
  ListProjectsRegionsClustersRequest,
  ListProjectsRegionsClustersResponse,
  ListProjectsRegionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsRegionsClustersRequest,
  output: ListProjectsRegionsClustersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsRegionsClustersRequest {
  /** Required. The ID of the Google Cloud Platform project the cluster belongs to. */
  projectId: string;
  /** Required. The cluster name. */
  clusterName: string;
  /** Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher. */
  gracefulDecommissionTimeout?: string;
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } *Note:* Currently, only the following fields can be updated: *Mask* *Purpose* *labels* Update labels *config.worker_config.num_instances* Resize primary worker group *config.secondary_worker_config.num_instances* Resize secondary worker group config.autoscaling_config.policy_uri Use, stop using, or change autoscaling policies */
  updateMask?: string;
  /** Optional. A unique ID used to identify the request. If the server receives two UpdateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.UpdateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Request body */
  body?: Cluster;
}

export const PatchProjectsRegionsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterName: Schema.String.pipe(T.HttpPath("clusterName")),
    gracefulDecommissionTimeout: Schema.optional(Schema.String).pipe(
      T.HttpQuery("gracefulDecommissionTimeout"),
    ),
    region: Schema.String.pipe(T.HttpPath("region")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Cluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "v1/projects/{projectId}/regions/{region}/clusters/{clusterName}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsRegionsClustersRequest>;

export type PatchProjectsRegionsClustersResponse = Operation;
export const PatchProjectsRegionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsRegionsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned. */
export const patchProjectsRegionsClusters: API.OperationMethod<
  PatchProjectsRegionsClustersRequest,
  PatchProjectsRegionsClustersResponse,
  PatchProjectsRegionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsRegionsClustersRequest,
  output: PatchProjectsRegionsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsRegionsClustersRequest {
  /** Required. The ID of the Google Cloud Platform project that the cluster belongs to. */
  projectId: string;
  /** Required. The cluster name. */
  clusterName: string;
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
}

export const GetProjectsRegionsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterName: Schema.String.pipe(T.HttpPath("clusterName")),
    region: Schema.String.pipe(T.HttpPath("region")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/projects/{projectId}/regions/{region}/clusters/{clusterName}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsRegionsClustersRequest>;

export type GetProjectsRegionsClustersResponse = Cluster;
export const GetProjectsRegionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Cluster;

export type GetProjectsRegionsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the resource representation for a cluster in a project. */
export const getProjectsRegionsClusters: API.OperationMethod<
  GetProjectsRegionsClustersRequest,
  GetProjectsRegionsClustersResponse,
  GetProjectsRegionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsRegionsClustersRequest,
  output: GetProjectsRegionsClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface DiagnoseProjectsRegionsClustersRequest {
  /** Required. The ID of the Google Cloud Platform project that the cluster belongs to. */
  projectId: string;
  /** Required. The cluster name. */
  clusterName: string;
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Request body */
  body?: DiagnoseClusterRequest;
}

export const DiagnoseProjectsRegionsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterName: Schema.String.pipe(T.HttpPath("clusterName")),
    region: Schema.String.pipe(T.HttpPath("region")),
    body: Schema.optional(DiagnoseClusterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DiagnoseProjectsRegionsClustersRequest>;

export type DiagnoseProjectsRegionsClustersResponse = Operation;
export const DiagnoseProjectsRegionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DiagnoseProjectsRegionsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults). */
export const diagnoseProjectsRegionsClusters: API.OperationMethod<
  DiagnoseProjectsRegionsClustersRequest,
  DiagnoseProjectsRegionsClustersResponse,
  DiagnoseProjectsRegionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DiagnoseProjectsRegionsClustersRequest,
  output: DiagnoseProjectsRegionsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InjectCredentialsProjectsRegionsClustersRequest {
  /** Required. The ID of the Google Cloud Platform project the cluster belongs to, of the form projects/. */
  project: string;
  /** Required. The region containing the cluster, of the form regions/. */
  region: string;
  /** Required. The cluster, in the form clusters/. */
  cluster: string;
  /** Request body */
  body?: InjectCredentialsRequest;
}

export const InjectCredentialsProjectsRegionsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    region: Schema.String.pipe(T.HttpPath("region")),
    cluster: Schema.String.pipe(T.HttpPath("cluster")),
    body: Schema.optional(InjectCredentialsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+project}/{+region}/{+cluster}:injectCredentials",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InjectCredentialsProjectsRegionsClustersRequest>;

export type InjectCredentialsProjectsRegionsClustersResponse = Operation;
export const InjectCredentialsProjectsRegionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type InjectCredentialsProjectsRegionsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC. */
export const injectCredentialsProjectsRegionsClusters: API.OperationMethod<
  InjectCredentialsProjectsRegionsClustersRequest,
  InjectCredentialsProjectsRegionsClustersResponse,
  InjectCredentialsProjectsRegionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InjectCredentialsProjectsRegionsClustersRequest,
  output: InjectCredentialsProjectsRegionsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RepairProjectsRegionsClustersRequest {
  /** Required. The ID of the Google Cloud Platform project the cluster belongs to. */
  projectId: string;
  /** Required. The cluster name. */
  clusterName: string;
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Request body */
  body?: RepairClusterRequest;
}

export const RepairProjectsRegionsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterName: Schema.String.pipe(T.HttpPath("clusterName")),
    region: Schema.String.pipe(T.HttpPath("region")),
    body: Schema.optional(RepairClusterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:repair",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RepairProjectsRegionsClustersRequest>;

export type RepairProjectsRegionsClustersResponse = Operation;
export const RepairProjectsRegionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RepairProjectsRegionsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Repairs a cluster. */
export const repairProjectsRegionsClusters: API.OperationMethod<
  RepairProjectsRegionsClustersRequest,
  RepairProjectsRegionsClustersResponse,
  RepairProjectsRegionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RepairProjectsRegionsClustersRequest,
  output: RepairProjectsRegionsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsRegionsClustersRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsRegionsClustersRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsRegionsClustersRequest>;

export type SetIamPolicyProjectsRegionsClustersResponse = Policy;
export const SetIamPolicyProjectsRegionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsRegionsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsRegionsClusters: API.OperationMethod<
  SetIamPolicyProjectsRegionsClustersRequest,
  SetIamPolicyProjectsRegionsClustersResponse,
  SetIamPolicyProjectsRegionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsRegionsClustersRequest,
  output: SetIamPolicyProjectsRegionsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartProjectsRegionsClustersRequest {
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Required. The ID of the Google Cloud Platform project the cluster belongs to. */
  projectId: string;
  /** Required. The cluster name. */
  clusterName: string;
  /** Request body */
  body?: StartClusterRequest;
}

export const StartProjectsRegionsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    region: Schema.String.pipe(T.HttpPath("region")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterName: Schema.String.pipe(T.HttpPath("clusterName")),
    body: Schema.optional(StartClusterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:start",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StartProjectsRegionsClustersRequest>;

export type StartProjectsRegionsClustersResponse = Operation;
export const StartProjectsRegionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StartProjectsRegionsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts a cluster in a project. */
export const startProjectsRegionsClusters: API.OperationMethod<
  StartProjectsRegionsClustersRequest,
  StartProjectsRegionsClustersResponse,
  StartProjectsRegionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartProjectsRegionsClustersRequest,
  output: StartProjectsRegionsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsRegionsClustersRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsRegionsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsRegionsClustersRequest>;

export type GetIamPolicyProjectsRegionsClustersResponse = Policy;
export const GetIamPolicyProjectsRegionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsRegionsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsRegionsClusters: API.OperationMethod<
  GetIamPolicyProjectsRegionsClustersRequest,
  GetIamPolicyProjectsRegionsClustersResponse,
  GetIamPolicyProjectsRegionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsRegionsClustersRequest,
  output: GetIamPolicyProjectsRegionsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StopProjectsRegionsClustersRequest {
  /** Required. The ID of the Google Cloud Platform project the cluster belongs to. */
  projectId: string;
  /** Required. The cluster name. */
  clusterName: string;
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Request body */
  body?: StopClusterRequest;
}

export const StopProjectsRegionsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterName: Schema.String.pipe(T.HttpPath("clusterName")),
    region: Schema.String.pipe(T.HttpPath("region")),
    body: Schema.optional(StopClusterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:stop",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StopProjectsRegionsClustersRequest>;

export type StopProjectsRegionsClustersResponse = Operation;
export const StopProjectsRegionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StopProjectsRegionsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops a cluster in a project. */
export const stopProjectsRegionsClusters: API.OperationMethod<
  StopProjectsRegionsClustersRequest,
  StopProjectsRegionsClustersResponse,
  StopProjectsRegionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopProjectsRegionsClustersRequest,
  output: StopProjectsRegionsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsRegionsClustersNodeGroupsRequest {
  /** Optional. operation id of the parent operation sending the create request */
  parentOperationId?: string;
  /** Optional. An optional node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters. */
  nodeGroupId?: string;
  /** Optional. A unique ID used to identify the request. If the server receives two CreateNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateNodeGroupRequest) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Required. The parent resource where this node group will be created. Format: projects/{project}/regions/{region}/clusters/{cluster} */
  parent: string;
  /** Request body */
  body?: NodeGroup;
}

export const CreateProjectsRegionsClustersNodeGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parentOperationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("parentOperationId"),
    ),
    nodeGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("nodeGroupId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(NodeGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/nodeGroups", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsRegionsClustersNodeGroupsRequest>;

export type CreateProjectsRegionsClustersNodeGroupsResponse = Operation;
export const CreateProjectsRegionsClustersNodeGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsRegionsClustersNodeGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata). */
export const createProjectsRegionsClustersNodeGroups: API.OperationMethod<
  CreateProjectsRegionsClustersNodeGroupsRequest,
  CreateProjectsRegionsClustersNodeGroupsResponse,
  CreateProjectsRegionsClustersNodeGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsRegionsClustersNodeGroupsRequest,
  output: CreateProjectsRegionsClustersNodeGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResizeProjectsRegionsClustersNodeGroupsRequest {
  /** Required. The name of the node group to resize. Format: projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup} */
  name: string;
  /** Request body */
  body?: ResizeNodeGroupRequest;
}

export const ResizeProjectsRegionsClustersNodeGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResizeNodeGroupRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:resize", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ResizeProjectsRegionsClustersNodeGroupsRequest>;

export type ResizeProjectsRegionsClustersNodeGroupsResponse = Operation;
export const ResizeProjectsRegionsClustersNodeGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ResizeProjectsRegionsClustersNodeGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata). */
export const resizeProjectsRegionsClustersNodeGroups: API.OperationMethod<
  ResizeProjectsRegionsClustersNodeGroupsRequest,
  ResizeProjectsRegionsClustersNodeGroupsResponse,
  ResizeProjectsRegionsClustersNodeGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResizeProjectsRegionsClustersNodeGroupsRequest,
  output: ResizeProjectsRegionsClustersNodeGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RepairProjectsRegionsClustersNodeGroupsRequest {
  /** Required. The name of the node group to resize. Format: projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup} */
  name: string;
  /** Request body */
  body?: RepairNodeGroupRequest;
}

export const RepairProjectsRegionsClustersNodeGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RepairNodeGroupRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:repair", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RepairProjectsRegionsClustersNodeGroupsRequest>;

export type RepairProjectsRegionsClustersNodeGroupsResponse = Operation;
export const RepairProjectsRegionsClustersNodeGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RepairProjectsRegionsClustersNodeGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Repair nodes in a node group. */
export const repairProjectsRegionsClustersNodeGroups: API.OperationMethod<
  RepairProjectsRegionsClustersNodeGroupsRequest,
  RepairProjectsRegionsClustersNodeGroupsResponse,
  RepairProjectsRegionsClustersNodeGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RepairProjectsRegionsClustersNodeGroupsRequest,
  output: RepairProjectsRegionsClustersNodeGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsRegionsClustersNodeGroupsRequest {
  /** Required. The name of the node group to retrieve. Format: projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup} */
  name: string;
}

export const GetProjectsRegionsClustersNodeGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsRegionsClustersNodeGroupsRequest>;

export type GetProjectsRegionsClustersNodeGroupsResponse = NodeGroup;
export const GetProjectsRegionsClustersNodeGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NodeGroup;

export type GetProjectsRegionsClustersNodeGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the resource representation for a node group in a cluster. */
export const getProjectsRegionsClustersNodeGroups: API.OperationMethod<
  GetProjectsRegionsClustersNodeGroupsRequest,
  GetProjectsRegionsClustersNodeGroupsResponse,
  GetProjectsRegionsClustersNodeGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsRegionsClustersNodeGroupsRequest,
  output: GetProjectsRegionsClustersNodeGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsRegionsWorkflowTemplatesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsRegionsWorkflowTemplatesRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsRegionsWorkflowTemplatesRequest>;

export type SetIamPolicyProjectsRegionsWorkflowTemplatesResponse = Policy;
export const SetIamPolicyProjectsRegionsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsRegionsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsRegionsWorkflowTemplates: API.OperationMethod<
  SetIamPolicyProjectsRegionsWorkflowTemplatesRequest,
  SetIamPolicyProjectsRegionsWorkflowTemplatesResponse,
  SetIamPolicyProjectsRegionsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsRegionsWorkflowTemplatesRequest,
  output: SetIamPolicyProjectsRegionsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsRegionsWorkflowTemplatesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsRegionsWorkflowTemplatesRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsRegionsWorkflowTemplatesRequest>;

export type TestIamPermissionsProjectsRegionsWorkflowTemplatesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsRegionsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsRegionsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsRegionsWorkflowTemplates: API.OperationMethod<
  TestIamPermissionsProjectsRegionsWorkflowTemplatesRequest,
  TestIamPermissionsProjectsRegionsWorkflowTemplatesResponse,
  TestIamPermissionsProjectsRegionsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsRegionsWorkflowTemplatesRequest,
  output: TestIamPermissionsProjectsRegionsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InstantiateInlineProjectsRegionsWorkflowTemplatesRequest {
  /** Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,instantiateinline, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.instantiateinline, the resource name of the location has the following format: projects/{project_id}/locations/{location} */
  parent: string;
  /** Request body */
  body?: WorkflowTemplate;
}

export const InstantiateInlineProjectsRegionsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(WorkflowTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/workflowTemplates:instantiateInline",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InstantiateInlineProjectsRegionsWorkflowTemplatesRequest>;

export type InstantiateInlineProjectsRegionsWorkflowTemplatesResponse =
  Operation;
export const InstantiateInlineProjectsRegionsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type InstantiateInlineProjectsRegionsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty. */
export const instantiateInlineProjectsRegionsWorkflowTemplates: API.OperationMethod<
  InstantiateInlineProjectsRegionsWorkflowTemplatesRequest,
  InstantiateInlineProjectsRegionsWorkflowTemplatesResponse,
  InstantiateInlineProjectsRegionsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InstantiateInlineProjectsRegionsWorkflowTemplatesRequest,
  output: InstantiateInlineProjectsRegionsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsRegionsWorkflowTemplatesRequest {
  /** Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.create, the resource name of the location has the following format: projects/{project_id}/locations/{location} */
  parent: string;
  /** Request body */
  body?: WorkflowTemplate;
}

export const CreateProjectsRegionsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(WorkflowTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/workflowTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsRegionsWorkflowTemplatesRequest>;

export type CreateProjectsRegionsWorkflowTemplatesResponse = WorkflowTemplate;
export const CreateProjectsRegionsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkflowTemplate;

export type CreateProjectsRegionsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new workflow template. */
export const createProjectsRegionsWorkflowTemplates: API.OperationMethod<
  CreateProjectsRegionsWorkflowTemplatesRequest,
  CreateProjectsRegionsWorkflowTemplatesResponse,
  CreateProjectsRegionsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsRegionsWorkflowTemplatesRequest,
  output: CreateProjectsRegionsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateProjectsRegionsWorkflowTemplatesRequest {
  /** Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} */
  name: string;
  /** Request body */
  body?: WorkflowTemplate;
}

export const UpdateProjectsRegionsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(WorkflowTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsRegionsWorkflowTemplatesRequest>;

export type UpdateProjectsRegionsWorkflowTemplatesResponse = WorkflowTemplate;
export const UpdateProjectsRegionsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkflowTemplate;

export type UpdateProjectsRegionsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates (replaces) workflow template. The updated template must contain version that matches the current server version. */
export const updateProjectsRegionsWorkflowTemplates: API.OperationMethod<
  UpdateProjectsRegionsWorkflowTemplatesRequest,
  UpdateProjectsRegionsWorkflowTemplatesResponse,
  UpdateProjectsRegionsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsRegionsWorkflowTemplatesRequest,
  output: UpdateProjectsRegionsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsRegionsWorkflowTemplatesRequest {
  /** Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.list, the resource name of the location has the following format: projects/{project_id}/locations/{location} */
  parent: string;
  /** Optional. The maximum number of results to return in each response. */
  pageSize?: number;
  /** Optional. The page token, returned by a previous call, to request the next page of results. */
  pageToken?: string;
}

export const ListProjectsRegionsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/workflowTemplates" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsRegionsWorkflowTemplatesRequest>;

export type ListProjectsRegionsWorkflowTemplatesResponse =
  ListWorkflowTemplatesResponse;
export const ListProjectsRegionsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWorkflowTemplatesResponse;

export type ListProjectsRegionsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists workflows that match the specified filter in the request. */
export const listProjectsRegionsWorkflowTemplates: API.PaginatedOperationMethod<
  ListProjectsRegionsWorkflowTemplatesRequest,
  ListProjectsRegionsWorkflowTemplatesResponse,
  ListProjectsRegionsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsRegionsWorkflowTemplatesRequest,
  output: ListProjectsRegionsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsRegionsWorkflowTemplatesRequest {
  /** Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version. */
  version?: number;
  /** Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.delete, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} */
  name: string;
}

export const DeleteProjectsRegionsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number).pipe(T.HttpQuery("version")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsRegionsWorkflowTemplatesRequest>;

export type DeleteProjectsRegionsWorkflowTemplatesResponse = Empty;
export const DeleteProjectsRegionsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsRegionsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a workflow template. It does not cancel in-progress workflows. */
export const deleteProjectsRegionsWorkflowTemplates: API.OperationMethod<
  DeleteProjectsRegionsWorkflowTemplatesRequest,
  DeleteProjectsRegionsWorkflowTemplatesResponse,
  DeleteProjectsRegionsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsRegionsWorkflowTemplatesRequest,
  output: DeleteProjectsRegionsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsRegionsWorkflowTemplatesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsRegionsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsRegionsWorkflowTemplatesRequest>;

export type GetIamPolicyProjectsRegionsWorkflowTemplatesResponse = Policy;
export const GetIamPolicyProjectsRegionsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsRegionsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsRegionsWorkflowTemplates: API.OperationMethod<
  GetIamPolicyProjectsRegionsWorkflowTemplatesRequest,
  GetIamPolicyProjectsRegionsWorkflowTemplatesResponse,
  GetIamPolicyProjectsRegionsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsRegionsWorkflowTemplatesRequest,
  output: GetIamPolicyProjectsRegionsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsRegionsWorkflowTemplatesRequest {
  /** Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} */
  name: string;
  /** Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version. */
  version?: number;
}

export const GetProjectsRegionsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    version: Schema.optional(Schema.Number).pipe(T.HttpQuery("version")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsRegionsWorkflowTemplatesRequest>;

export type GetProjectsRegionsWorkflowTemplatesResponse = WorkflowTemplate;
export const GetProjectsRegionsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkflowTemplate;

export type GetProjectsRegionsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter. */
export const getProjectsRegionsWorkflowTemplates: API.OperationMethod<
  GetProjectsRegionsWorkflowTemplatesRequest,
  GetProjectsRegionsWorkflowTemplatesResponse,
  GetProjectsRegionsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsRegionsWorkflowTemplatesRequest,
  output: GetProjectsRegionsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface InstantiateProjectsRegionsWorkflowTemplatesRequest {
  /** Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} */
  name: string;
  /** Request body */
  body?: InstantiateWorkflowTemplateRequest;
}

export const InstantiateProjectsRegionsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(InstantiateWorkflowTemplateRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:instantiate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<InstantiateProjectsRegionsWorkflowTemplatesRequest>;

export type InstantiateProjectsRegionsWorkflowTemplatesResponse = Operation;
export const InstantiateProjectsRegionsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type InstantiateProjectsRegionsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty. */
export const instantiateProjectsRegionsWorkflowTemplates: API.OperationMethod<
  InstantiateProjectsRegionsWorkflowTemplatesRequest,
  InstantiateProjectsRegionsWorkflowTemplatesResponse,
  InstantiateProjectsRegionsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InstantiateProjectsRegionsWorkflowTemplatesRequest,
  output: InstantiateProjectsRegionsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsRegionsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsRegionsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsRegionsOperationsRequest>;

export type GetProjectsRegionsOperationsResponse = Operation;
export const GetProjectsRegionsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsRegionsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsRegionsOperations: API.OperationMethod<
  GetProjectsRegionsOperationsRequest,
  GetProjectsRegionsOperationsResponse,
  GetProjectsRegionsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsRegionsOperationsRequest,
  output: GetProjectsRegionsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsRegionsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}

export const CancelProjectsRegionsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsRegionsOperationsRequest>;

export type CancelProjectsRegionsOperationsResponse = Empty;
export const CancelProjectsRegionsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsRegionsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED. */
export const cancelProjectsRegionsOperations: API.OperationMethod<
  CancelProjectsRegionsOperationsRequest,
  CancelProjectsRegionsOperationsResponse,
  CancelProjectsRegionsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsRegionsOperationsRequest,
  output: CancelProjectsRegionsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsRegionsOperationsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsRegionsOperationsRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsRegionsOperationsRequest>;

export type SetIamPolicyProjectsRegionsOperationsResponse = Policy;
export const SetIamPolicyProjectsRegionsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsRegionsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsRegionsOperations: API.OperationMethod<
  SetIamPolicyProjectsRegionsOperationsRequest,
  SetIamPolicyProjectsRegionsOperationsResponse,
  SetIamPolicyProjectsRegionsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsRegionsOperationsRequest,
  output: SetIamPolicyProjectsRegionsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsRegionsOperationsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsRegionsOperationsRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsRegionsOperationsRequest>;

export type TestIamPermissionsProjectsRegionsOperationsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsRegionsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsRegionsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsRegionsOperations: API.OperationMethod<
  TestIamPermissionsProjectsRegionsOperationsRequest,
  TestIamPermissionsProjectsRegionsOperationsResponse,
  TestIamPermissionsProjectsRegionsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsRegionsOperationsRequest,
  output: TestIamPermissionsProjectsRegionsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsRegionsOperationsRequest {
  /** When set to true, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field.This can only be true when reading across collections. For example, when parent is set to "projects/example/locations/-".This field is not supported by default and will result in an UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListProjectsRegionsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsRegionsOperationsRequest>;

export type ListProjectsRegionsOperationsResponse = ListOperationsResponse;
export const ListProjectsRegionsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsRegionsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED. */
export const listProjectsRegionsOperations: API.PaginatedOperationMethod<
  ListProjectsRegionsOperationsRequest,
  ListProjectsRegionsOperationsResponse,
  ListProjectsRegionsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsRegionsOperationsRequest,
  output: ListProjectsRegionsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsRegionsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsRegionsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsRegionsOperationsRequest>;

export type DeleteProjectsRegionsOperationsResponse = Empty;
export const DeleteProjectsRegionsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsRegionsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. */
export const deleteProjectsRegionsOperations: API.OperationMethod<
  DeleteProjectsRegionsOperationsRequest,
  DeleteProjectsRegionsOperationsResponse,
  DeleteProjectsRegionsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsRegionsOperationsRequest,
  output: DeleteProjectsRegionsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsRegionsOperationsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsRegionsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsRegionsOperationsRequest>;

export type GetIamPolicyProjectsRegionsOperationsResponse = Policy;
export const GetIamPolicyProjectsRegionsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsRegionsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsRegionsOperations: API.OperationMethod<
  GetIamPolicyProjectsRegionsOperationsRequest,
  GetIamPolicyProjectsRegionsOperationsResponse,
  GetIamPolicyProjectsRegionsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsRegionsOperationsRequest,
  output: GetIamPolicyProjectsRegionsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsRegionsAutoscalingPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsRegionsAutoscalingPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsRegionsAutoscalingPoliciesRequest>;

export type GetIamPolicyProjectsRegionsAutoscalingPoliciesResponse = Policy;
export const GetIamPolicyProjectsRegionsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsRegionsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsRegionsAutoscalingPolicies: API.OperationMethod<
  GetIamPolicyProjectsRegionsAutoscalingPoliciesRequest,
  GetIamPolicyProjectsRegionsAutoscalingPoliciesResponse,
  GetIamPolicyProjectsRegionsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsRegionsAutoscalingPoliciesRequest,
  output: GetIamPolicyProjectsRegionsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsRegionsAutoscalingPoliciesRequest {
  /** Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.create, the resource name of the location has the following format: projects/{project_id}/locations/{location} */
  parent: string;
  /** Request body */
  body?: AutoscalingPolicy;
}

export const CreateProjectsRegionsAutoscalingPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AutoscalingPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/autoscalingPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsRegionsAutoscalingPoliciesRequest>;

export type CreateProjectsRegionsAutoscalingPoliciesResponse =
  AutoscalingPolicy;
export const CreateProjectsRegionsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AutoscalingPolicy;

export type CreateProjectsRegionsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new autoscaling policy. */
export const createProjectsRegionsAutoscalingPolicies: API.OperationMethod<
  CreateProjectsRegionsAutoscalingPoliciesRequest,
  CreateProjectsRegionsAutoscalingPoliciesResponse,
  CreateProjectsRegionsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsRegionsAutoscalingPoliciesRequest,
  output: CreateProjectsRegionsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateProjectsRegionsAutoscalingPoliciesRequest {
  /** Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} */
  name: string;
  /** Request body */
  body?: AutoscalingPolicy;
}

export const UpdateProjectsRegionsAutoscalingPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AutoscalingPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsRegionsAutoscalingPoliciesRequest>;

export type UpdateProjectsRegionsAutoscalingPoliciesResponse =
  AutoscalingPolicy;
export const UpdateProjectsRegionsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AutoscalingPolicy;

export type UpdateProjectsRegionsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements. */
export const updateProjectsRegionsAutoscalingPolicies: API.OperationMethod<
  UpdateProjectsRegionsAutoscalingPoliciesRequest,
  UpdateProjectsRegionsAutoscalingPoliciesResponse,
  UpdateProjectsRegionsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsRegionsAutoscalingPoliciesRequest,
  output: UpdateProjectsRegionsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsRegionsAutoscalingPoliciesRequest {
  /** Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100. */
  pageSize?: number;
  /** Optional. The page token, returned by a previous call, to request the next page of results. */
  pageToken?: string;
  /** Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.list, the resource name of the location has the following format: projects/{project_id}/locations/{location} */
  parent: string;
}

export const ListProjectsRegionsAutoscalingPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/autoscalingPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsRegionsAutoscalingPoliciesRequest>;

export type ListProjectsRegionsAutoscalingPoliciesResponse =
  ListAutoscalingPoliciesResponse;
export const ListProjectsRegionsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAutoscalingPoliciesResponse;

export type ListProjectsRegionsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists autoscaling policies in the project. */
export const listProjectsRegionsAutoscalingPolicies: API.PaginatedOperationMethod<
  ListProjectsRegionsAutoscalingPoliciesRequest,
  ListProjectsRegionsAutoscalingPoliciesResponse,
  ListProjectsRegionsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsRegionsAutoscalingPoliciesRequest,
  output: ListProjectsRegionsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsRegionsAutoscalingPoliciesRequest {
  /** Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.delete, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.delete, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} */
  name: string;
}

export const DeleteProjectsRegionsAutoscalingPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsRegionsAutoscalingPoliciesRequest>;

export type DeleteProjectsRegionsAutoscalingPoliciesResponse = Empty;
export const DeleteProjectsRegionsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsRegionsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters. */
export const deleteProjectsRegionsAutoscalingPolicies: API.OperationMethod<
  DeleteProjectsRegionsAutoscalingPoliciesRequest,
  DeleteProjectsRegionsAutoscalingPoliciesResponse,
  DeleteProjectsRegionsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsRegionsAutoscalingPoliciesRequest,
  output: DeleteProjectsRegionsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsRegionsAutoscalingPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsRegionsAutoscalingPoliciesRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsRegionsAutoscalingPoliciesRequest>;

export type SetIamPolicyProjectsRegionsAutoscalingPoliciesResponse = Policy;
export const SetIamPolicyProjectsRegionsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsRegionsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsRegionsAutoscalingPolicies: API.OperationMethod<
  SetIamPolicyProjectsRegionsAutoscalingPoliciesRequest,
  SetIamPolicyProjectsRegionsAutoscalingPoliciesResponse,
  SetIamPolicyProjectsRegionsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsRegionsAutoscalingPoliciesRequest,
  output: SetIamPolicyProjectsRegionsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsRegionsAutoscalingPoliciesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsRegionsAutoscalingPoliciesRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsRegionsAutoscalingPoliciesRequest>;

export type TestIamPermissionsProjectsRegionsAutoscalingPoliciesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsRegionsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsRegionsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsRegionsAutoscalingPolicies: API.OperationMethod<
  TestIamPermissionsProjectsRegionsAutoscalingPoliciesRequest,
  TestIamPermissionsProjectsRegionsAutoscalingPoliciesResponse,
  TestIamPermissionsProjectsRegionsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsRegionsAutoscalingPoliciesRequest,
  output: TestIamPermissionsProjectsRegionsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsRegionsAutoscalingPoliciesRequest {
  /** Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.get, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.get, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} */
  name: string;
}

export const GetProjectsRegionsAutoscalingPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsRegionsAutoscalingPoliciesRequest>;

export type GetProjectsRegionsAutoscalingPoliciesResponse = AutoscalingPolicy;
export const GetProjectsRegionsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AutoscalingPolicy;

export type GetProjectsRegionsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves autoscaling policy. */
export const getProjectsRegionsAutoscalingPolicies: API.OperationMethod<
  GetProjectsRegionsAutoscalingPoliciesRequest,
  GetProjectsRegionsAutoscalingPoliciesResponse,
  GetProjectsRegionsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsRegionsAutoscalingPoliciesRequest,
  output: GetProjectsRegionsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsRegionsJobsRequest {
  /** Required. The job ID. */
  jobId: string;
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Required. The ID of the Google Cloud Platform project that the job belongs to. */
  projectId: string;
}

export const GetProjectsRegionsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    region: Schema.String.pipe(T.HttpPath("region")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/projects/{projectId}/regions/{region}/jobs/{jobId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsRegionsJobsRequest>;

export type GetProjectsRegionsJobsResponse = Job;
export const GetProjectsRegionsJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Job;

export type GetProjectsRegionsJobsError = DefaultErrors | NotFound | Forbidden;

/** Gets the resource representation for a job in a project. */
export const getProjectsRegionsJobs: API.OperationMethod<
  GetProjectsRegionsJobsRequest,
  GetProjectsRegionsJobsResponse,
  GetProjectsRegionsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsRegionsJobsRequest,
  output: GetProjectsRegionsJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsRegionsJobsRequest {
  /** Required. The job ID. */
  jobId: string;
  /** Required. The ID of the Google Cloud Platform project that the job belongs to. */
  projectId: string;
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Required. Specifies the path, relative to Job, of the field to update. For example, to update the labels of a Job the update_mask parameter would be specified as labels, and the PATCH request body would specify the new value. *Note:* Currently, labels is the only field that can be updated. */
  updateMask?: string;
  /** Request body */
  body?: Job;
}

export const PatchProjectsRegionsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    region: Schema.String.pipe(T.HttpPath("region")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Job).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "v1/projects/{projectId}/regions/{region}/jobs/{jobId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsRegionsJobsRequest>;

export type PatchProjectsRegionsJobsResponse = Job;
export const PatchProjectsRegionsJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Job;

export type PatchProjectsRegionsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a job in a project. */
export const patchProjectsRegionsJobs: API.OperationMethod<
  PatchProjectsRegionsJobsRequest,
  PatchProjectsRegionsJobsResponse,
  PatchProjectsRegionsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsRegionsJobsRequest,
  output: PatchProjectsRegionsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsRegionsJobsRequest {
  /** Required. The job ID. */
  jobId: string;
  /** Required. The ID of the Google Cloud Platform project that the job belongs to. */
  projectId: string;
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Request body */
  body?: CancelJobRequest;
}

export const CancelProjectsRegionsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    region: Schema.String.pipe(T.HttpPath("region")),
    body: Schema.optional(CancelJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsRegionsJobsRequest>;

export type CancelProjectsRegionsJobsResponse = Job;
export const CancelProjectsRegionsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Job;

export type CancelProjectsRegionsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get). */
export const cancelProjectsRegionsJobs: API.OperationMethod<
  CancelProjectsRegionsJobsRequest,
  CancelProjectsRegionsJobsResponse,
  CancelProjectsRegionsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsRegionsJobsRequest,
  output: CancelProjectsRegionsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsRegionsJobsRequest {
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Optional. The page token, returned by a previous call, to request the next page of results. */
  pageToken?: string;
  /** Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or insertTime, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or NON_ACTIVE. Allows insertTime to be a timestamp in RFC 3339 format in double quotes, such as 2025-01-01T00:00:00Z. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = * AND insertTime <= "2025-01-01T00:00:00Z" */
  filter?: string;
  /** Optional. Specifies enumerated categories of jobs to list. (default = match ALL jobs).If filter is provided, jobStateMatcher will be ignored. */
  jobStateMatcher?: "ALL" | "ACTIVE" | "NON_ACTIVE" | (string & {});
  /** Optional. The number of results to return in each response. */
  pageSize?: number;
  /** Required. The ID of the Google Cloud Platform project that the job belongs to. */
  projectId: string;
  /** Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster. */
  clusterName?: string;
}

export const ListProjectsRegionsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    region: Schema.String.pipe(T.HttpPath("region")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    jobStateMatcher: Schema.optional(Schema.String).pipe(
      T.HttpQuery("jobStateMatcher"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    clusterName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("clusterName"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/projects/{projectId}/regions/{region}/jobs",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsRegionsJobsRequest>;

export type ListProjectsRegionsJobsResponse = ListJobsResponse;
export const ListProjectsRegionsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListJobsResponse;

export type ListProjectsRegionsJobsError = DefaultErrors | NotFound | Forbidden;

/** Lists regions/{region}/jobs in a project. */
export const listProjectsRegionsJobs: API.PaginatedOperationMethod<
  ListProjectsRegionsJobsRequest,
  ListProjectsRegionsJobsResponse,
  ListProjectsRegionsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsRegionsJobsRequest,
  output: ListProjectsRegionsJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsRegionsJobsRequest {
  /** Required. The job ID. */
  jobId: string;
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Required. The ID of the Google Cloud Platform project that the job belongs to. */
  projectId: string;
}

export const DeleteProjectsRegionsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    region: Schema.String.pipe(T.HttpPath("region")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "v1/projects/{projectId}/regions/{region}/jobs/{jobId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsRegionsJobsRequest>;

export type DeleteProjectsRegionsJobsResponse = Empty;
export const DeleteProjectsRegionsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsRegionsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION. */
export const deleteProjectsRegionsJobs: API.OperationMethod<
  DeleteProjectsRegionsJobsRequest,
  DeleteProjectsRegionsJobsResponse,
  DeleteProjectsRegionsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsRegionsJobsRequest,
  output: DeleteProjectsRegionsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SubmitProjectsRegionsJobsRequest {
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Required. The ID of the Google Cloud Platform project that the job belongs to. */
  projectId: string;
  /** Request body */
  body?: SubmitJobRequest;
}

export const SubmitProjectsRegionsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    region: Schema.String.pipe(T.HttpPath("region")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(SubmitJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}/regions/{region}/jobs:submit",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SubmitProjectsRegionsJobsRequest>;

export type SubmitProjectsRegionsJobsResponse = Job;
export const SubmitProjectsRegionsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Job;

export type SubmitProjectsRegionsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Submits a job to a cluster. */
export const submitProjectsRegionsJobs: API.OperationMethod<
  SubmitProjectsRegionsJobsRequest,
  SubmitProjectsRegionsJobsResponse,
  SubmitProjectsRegionsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SubmitProjectsRegionsJobsRequest,
  output: SubmitProjectsRegionsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsRegionsJobsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsRegionsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsRegionsJobsRequest>;

export type GetIamPolicyProjectsRegionsJobsResponse = Policy;
export const GetIamPolicyProjectsRegionsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsRegionsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsRegionsJobs: API.OperationMethod<
  GetIamPolicyProjectsRegionsJobsRequest,
  GetIamPolicyProjectsRegionsJobsResponse,
  GetIamPolicyProjectsRegionsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsRegionsJobsRequest,
  output: GetIamPolicyProjectsRegionsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SubmitAsOperationProjectsRegionsJobsRequest {
  /** Required. The ID of the Google Cloud Platform project that the job belongs to. */
  projectId: string;
  /** Required. The Dataproc region in which to handle the request. */
  region: string;
  /** Request body */
  body?: SubmitJobRequest;
}

export const SubmitAsOperationProjectsRegionsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    region: Schema.String.pipe(T.HttpPath("region")),
    body: Schema.optional(SubmitJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}/regions/{region}/jobs:submitAsOperation",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SubmitAsOperationProjectsRegionsJobsRequest>;

export type SubmitAsOperationProjectsRegionsJobsResponse = Operation;
export const SubmitAsOperationProjectsRegionsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SubmitAsOperationProjectsRegionsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Submits job to a cluster. */
export const submitAsOperationProjectsRegionsJobs: API.OperationMethod<
  SubmitAsOperationProjectsRegionsJobsRequest,
  SubmitAsOperationProjectsRegionsJobsResponse,
  SubmitAsOperationProjectsRegionsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SubmitAsOperationProjectsRegionsJobsRequest,
  output: SubmitAsOperationProjectsRegionsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsRegionsJobsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsRegionsJobsRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsRegionsJobsRequest>;

export type SetIamPolicyProjectsRegionsJobsResponse = Policy;
export const SetIamPolicyProjectsRegionsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsRegionsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsRegionsJobs: API.OperationMethod<
  SetIamPolicyProjectsRegionsJobsRequest,
  SetIamPolicyProjectsRegionsJobsResponse,
  SetIamPolicyProjectsRegionsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsRegionsJobsRequest,
  output: SetIamPolicyProjectsRegionsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsRegionsJobsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsRegionsJobsRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsRegionsJobsRequest>;

export type TestIamPermissionsProjectsRegionsJobsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsRegionsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsRegionsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsRegionsJobs: API.OperationMethod<
  TestIamPermissionsProjectsRegionsJobsRequest,
  TestIamPermissionsProjectsRegionsJobsResponse,
  TestIamPermissionsProjectsRegionsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsRegionsJobsRequest,
  output: TestIamPermissionsProjectsRegionsJobsResponse,
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

export interface ListProjectsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to true, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field.This can only be true when reading across collections. For example, when parent is set to "projects/example/locations/-".This field is not supported by default and will result in an UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED. */
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

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. */
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
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
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

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED. */
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

export interface TerminateProjectsLocationsSessionsRequest {
  /** Required. The name of the session resource to terminate. */
  name: string;
  /** Request body */
  body?: TerminateSessionRequest;
}

export const TerminateProjectsLocationsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(TerminateSessionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:terminate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<TerminateProjectsLocationsSessionsRequest>;

export type TerminateProjectsLocationsSessionsResponse = Operation;
export const TerminateProjectsLocationsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type TerminateProjectsLocationsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Terminates the interactive session. */
export const terminateProjectsLocationsSessions: API.OperationMethod<
  TerminateProjectsLocationsSessionsRequest,
  TerminateProjectsLocationsSessionsResponse,
  TerminateProjectsLocationsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TerminateProjectsLocationsSessionsRequest,
  output: TerminateProjectsLocationsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsSessionsRequest {
  /** Optional. A unique ID used to identify the request. If the service receives two CreateSessionRequests (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateSessionRequest)s with the same ID, the second request is ignored, and the first Session is created and stored in the backend.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Required. The parent resource where this session will be created. */
  parent: string;
  /** Required. The ID to use for the session, which becomes the final component of the session's resource name.This value must be 4-63 characters. Valid characters are /a-z-/. */
  sessionId?: string;
  /** Request body */
  body?: Session;
}

export const CreateProjectsLocationsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    sessionId: Schema.optional(Schema.String).pipe(T.HttpQuery("sessionId")),
    body: Schema.optional(Session).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/sessions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSessionsRequest>;

export type CreateProjectsLocationsSessionsResponse = Operation;
export const CreateProjectsLocationsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an interactive session asynchronously. */
export const createProjectsLocationsSessions: API.OperationMethod<
  CreateProjectsLocationsSessionsRequest,
  CreateProjectsLocationsSessionsResponse,
  CreateProjectsLocationsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSessionsRequest,
  output: CreateProjectsLocationsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSessionsRequest {
  /** Required. The parent, which owns this collection of sessions. */
  parent: string;
  /** Optional. The maximum number of sessions to return in each response. The service may return fewer than this value. */
  pageSize?: number;
  /** Optional. A page token received from a previous ListSessions call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. A filter for the sessions to return in the response.A filter is a logical expression constraining the values of various fields in each session resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND, OR). Supported fields are session_id, session_uuid, state, create_time, and labels.Example: state = ACTIVE and create_time < "2023-01-01T00:00:00Z" is a filter for sessions in an ACTIVE state that were created before 2023-01-01. state = ACTIVE and labels.environment=production is a filter for sessions in an ACTIVE state that have a production environment label.See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparators. */
  filter?: string;
}

export const ListProjectsLocationsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/sessions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSessionsRequest>;

export type ListProjectsLocationsSessionsResponse = ListSessionsResponse;
export const ListProjectsLocationsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSessionsResponse;

export type ListProjectsLocationsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists interactive sessions. */
export const listProjectsLocationsSessions: API.PaginatedOperationMethod<
  ListProjectsLocationsSessionsRequest,
  ListProjectsLocationsSessionsResponse,
  ListProjectsLocationsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSessionsRequest,
  output: ListProjectsLocationsSessionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsSessionsRequest {
  /** Optional. A unique ID used to identify the request. If the service receives two DeleteSessionRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteSessionRequest)s with the same ID, the second request is ignored.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Required. The name of the session resource to delete. */
  name: string;
}

export const DeleteProjectsLocationsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSessionsRequest>;

export type DeleteProjectsLocationsSessionsResponse = Operation;
export const DeleteProjectsLocationsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the interactive session resource. If the session is not in terminal state, it is terminated, and then deleted. */
export const deleteProjectsLocationsSessions: API.OperationMethod<
  DeleteProjectsLocationsSessionsRequest,
  DeleteProjectsLocationsSessionsResponse,
  DeleteProjectsLocationsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSessionsRequest,
  output: DeleteProjectsLocationsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSessionsRequest {
  /** Required. The name of the session to retrieve. */
  name: string;
}

export const GetProjectsLocationsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSessionsRequest>;

export type GetProjectsLocationsSessionsResponse = Session;
export const GetProjectsLocationsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Session;

export type GetProjectsLocationsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the resource representation for an interactive session. */
export const getProjectsLocationsSessions: API.OperationMethod<
  GetProjectsLocationsSessionsRequest,
  GetProjectsLocationsSessionsResponse,
  GetProjectsLocationsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSessionsRequest,
  output: GetProjectsLocationsSessionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AccessJobProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Required. Parent (Session) resource reference. */
  parent?: string;
  /** Required. Job ID to fetch data for. */
  jobId?: string;
}

export const AccessJobProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    jobId: Schema.optional(Schema.String).pipe(T.HttpQuery("jobId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:accessJob" }),
    svc,
  ) as unknown as Schema.Schema<AccessJobProjectsLocationsSessionsSparkApplicationsRequest>;

export type AccessJobProjectsLocationsSessionsSparkApplicationsResponse =
  AccessSessionSparkApplicationJobResponse;
export const AccessJobProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessSessionSparkApplicationJobResponse;

export type AccessJobProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to a spark job for a Spark Application. */
export const accessJobProjectsLocationsSessionsSparkApplications: API.OperationMethod<
  AccessJobProjectsLocationsSessionsSparkApplicationsRequest,
  AccessJobProjectsLocationsSessionsSparkApplicationsResponse,
  AccessJobProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessJobProjectsLocationsSessionsSparkApplicationsRequest,
  output: AccessJobProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchStagesProjectsLocationsSessionsSparkApplicationsRequest {
  /** Optional. A page token received from a previous SearchSessionSparkApplicationStages call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field */
  summaryMetricsMask?: string;
  /** Optional. List of Stage IDs to filter by if provided. */
  stageIds?: string[];
  /** Required. Parent (Session) resource reference. */
  parent?: string;
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. List only stages in the given state. */
  stageStatus?:
    | "STAGE_STATUS_UNSPECIFIED"
    | "STAGE_STATUS_ACTIVE"
    | "STAGE_STATUS_COMPLETE"
    | "STAGE_STATUS_FAILED"
    | "STAGE_STATUS_PENDING"
    | "STAGE_STATUS_SKIPPED"
    | (string & {});
  /** Optional. Maximum number of stages (paging based on stage_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
}

export const SearchStagesProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    summaryMetricsMask: Schema.optional(Schema.String).pipe(
      T.HttpQuery("summaryMetricsMask"),
    ),
    stageIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("stageIds"),
    ),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    name: Schema.String.pipe(T.HttpPath("name")),
    stageStatus: Schema.optional(Schema.String).pipe(
      T.HttpQuery("stageStatus"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:searchStages" }),
    svc,
  ) as unknown as Schema.Schema<SearchStagesProjectsLocationsSessionsSparkApplicationsRequest>;

export type SearchStagesProjectsLocationsSessionsSparkApplicationsResponse =
  SearchSessionSparkApplicationStagesResponse;
export const SearchStagesProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSessionSparkApplicationStagesResponse;

export type SearchStagesProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to stages for a Spark Application. */
export const searchStagesProjectsLocationsSessionsSparkApplications: API.PaginatedOperationMethod<
  SearchStagesProjectsLocationsSessionsSparkApplicationsRequest,
  SearchStagesProjectsLocationsSessionsSparkApplicationsResponse,
  SearchStagesProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchStagesProjectsLocationsSessionsSparkApplicationsRequest,
  output: SearchStagesProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface WriteProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. The fully qualified name of the spark application to write data about in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Request body */
  body?: WriteSessionSparkApplicationContextRequest;
}

export const WriteProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(WriteSessionSparkApplicationContextRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:write", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<WriteProjectsLocationsSessionsSparkApplicationsRequest>;

export type WriteProjectsLocationsSessionsSparkApplicationsResponse =
  WriteSessionSparkApplicationContextResponse;
export const WriteProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WriteSessionSparkApplicationContextResponse;

export type WriteProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Write wrapper objects from dataplane to spanner */
export const writeProjectsLocationsSessionsSparkApplications: API.OperationMethod<
  WriteProjectsLocationsSessionsSparkApplicationsRequest,
  WriteProjectsLocationsSessionsSparkApplicationsResponse,
  WriteProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WriteProjectsLocationsSessionsSparkApplicationsRequest,
  output: WriteProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchJobsProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. Parent (Session) resource reference. */
  parent?: string;
  /** Optional. A page token received from a previous SearchSessionSparkApplicationJobs call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. List of Job IDs to filter by if provided. */
  jobIds?: string[];
  /** Optional. List only jobs in the specific state. */
  jobStatus?:
    | "JOB_EXECUTION_STATUS_UNSPECIFIED"
    | "JOB_EXECUTION_STATUS_RUNNING"
    | "JOB_EXECUTION_STATUS_SUCCEEDED"
    | "JOB_EXECUTION_STATUS_FAILED"
    | "JOB_EXECUTION_STATUS_UNKNOWN"
    | (string & {});
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. Maximum number of jobs to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
}

export const SearchJobsProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    jobIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("jobIds"),
    ),
    jobStatus: Schema.optional(Schema.String).pipe(T.HttpQuery("jobStatus")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:searchJobs" }),
    svc,
  ) as unknown as Schema.Schema<SearchJobsProjectsLocationsSessionsSparkApplicationsRequest>;

export type SearchJobsProjectsLocationsSessionsSparkApplicationsResponse =
  SearchSessionSparkApplicationJobsResponse;
export const SearchJobsProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSessionSparkApplicationJobsResponse;

export type SearchJobsProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain list of spark jobs corresponding to a Spark Application. */
export const searchJobsProjectsLocationsSessionsSparkApplications: API.PaginatedOperationMethod<
  SearchJobsProjectsLocationsSessionsSparkApplicationsRequest,
  SearchJobsProjectsLocationsSessionsSparkApplicationsResponse,
  SearchJobsProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchJobsProjectsLocationsSessionsSparkApplicationsRequest,
  output: SearchJobsProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AccessProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Required. Parent (Session) resource reference. */
  parent?: string;
}

export const AccessProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:access" }),
    svc,
  ) as unknown as Schema.Schema<AccessProjectsLocationsSessionsSparkApplicationsRequest>;

export type AccessProjectsLocationsSessionsSparkApplicationsResponse =
  AccessSessionSparkApplicationResponse;
export const AccessProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessSessionSparkApplicationResponse;

export type AccessProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain high level information corresponding to a single Spark Application. */
export const accessProjectsLocationsSessionsSparkApplications: API.OperationMethod<
  AccessProjectsLocationsSessionsSparkApplicationsRequest,
  AccessProjectsLocationsSessionsSparkApplicationsResponse,
  AccessProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessProjectsLocationsSessionsSparkApplicationsRequest,
  output: AccessProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchStageAttemptsProjectsLocationsSessionsSparkApplicationsRequest {
  /** Optional. A page token received from a previous SearchSessionSparkApplicationStageAttempts call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field */
  summaryMetricsMask?: string;
  /** Required. Parent (Session) resource reference. */
  parent?: string;
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. Maximum number of stage attempts (paging based on stage_attempt_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
  /** Required. Stage ID for which attempts are to be fetched */
  stageId?: string;
}

export const SearchStageAttemptsProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    summaryMetricsMask: Schema.optional(Schema.String).pipe(
      T.HttpQuery("summaryMetricsMask"),
    ),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    stageId: Schema.optional(Schema.String).pipe(T.HttpQuery("stageId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:searchStageAttempts" }),
    svc,
  ) as unknown as Schema.Schema<SearchStageAttemptsProjectsLocationsSessionsSparkApplicationsRequest>;

export type SearchStageAttemptsProjectsLocationsSessionsSparkApplicationsResponse =
  SearchSessionSparkApplicationStageAttemptsResponse;
export const SearchStageAttemptsProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSessionSparkApplicationStageAttemptsResponse;

export type SearchStageAttemptsProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to a spark stage attempts for a Spark Application. */
export const searchStageAttemptsProjectsLocationsSessionsSparkApplications: API.PaginatedOperationMethod<
  SearchStageAttemptsProjectsLocationsSessionsSparkApplicationsRequest,
  SearchStageAttemptsProjectsLocationsSessionsSparkApplicationsResponse,
  SearchStageAttemptsProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchStageAttemptsProjectsLocationsSessionsSparkApplicationsRequest,
  output: SearchStageAttemptsProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchExecutorStageSummaryProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. Stage ID */
  stageId?: string;
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
  /** Required. Parent (Session) resource reference. */
  parent?: string;
  /** Required. Stage Attempt ID */
  stageAttemptId?: number;
  /** Optional. A page token received from a previous SearchSessionSparkApplicationExecutorStageSummary call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
}

export const SearchExecutorStageSummaryProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stageId: Schema.optional(Schema.String).pipe(T.HttpQuery("stageId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    stageAttemptId: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("stageAttemptId"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:searchExecutorStageSummary" }),
    svc,
  ) as unknown as Schema.Schema<SearchExecutorStageSummaryProjectsLocationsSessionsSparkApplicationsRequest>;

export type SearchExecutorStageSummaryProjectsLocationsSessionsSparkApplicationsResponse =
  SearchSessionSparkApplicationExecutorStageSummaryResponse;
export const SearchExecutorStageSummaryProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSessionSparkApplicationExecutorStageSummaryResponse;

export type SearchExecutorStageSummaryProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain executor summary with respect to a spark stage attempt. */
export const searchExecutorStageSummaryProjectsLocationsSessionsSparkApplications: API.PaginatedOperationMethod<
  SearchExecutorStageSummaryProjectsLocationsSessionsSparkApplicationsRequest,
  SearchExecutorStageSummaryProjectsLocationsSessionsSparkApplicationsResponse,
  SearchExecutorStageSummaryProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    SearchExecutorStageSummaryProjectsLocationsSessionsSparkApplicationsRequest,
  output:
    SearchExecutorStageSummaryProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AccessSqlPlanProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. Parent (Session) resource reference. */
  parent?: string;
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Required. Execution ID */
  executionId?: string;
}

export const AccessSqlPlanProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    name: Schema.String.pipe(T.HttpPath("name")),
    executionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionId"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:accessSqlPlan" }),
    svc,
  ) as unknown as Schema.Schema<AccessSqlPlanProjectsLocationsSessionsSparkApplicationsRequest>;

export type AccessSqlPlanProjectsLocationsSessionsSparkApplicationsResponse =
  AccessSessionSparkApplicationSqlSparkPlanGraphResponse;
export const AccessSqlPlanProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessSessionSparkApplicationSqlSparkPlanGraphResponse;

export type AccessSqlPlanProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000. */
export const accessSqlPlanProjectsLocationsSessionsSparkApplications: API.OperationMethod<
  AccessSqlPlanProjectsLocationsSessionsSparkApplicationsRequest,
  AccessSqlPlanProjectsLocationsSessionsSparkApplicationsResponse,
  AccessSqlPlanProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessSqlPlanProjectsLocationsSessionsSparkApplicationsRequest,
  output: AccessSqlPlanProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AccessSqlQueryProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. Execution ID */
  executionId?: string;
  /** Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide. */
  details?: boolean;
  /** Required. Parent (Session) resource reference. */
  parent?: string;
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. Enables/ disables physical plan description on demand */
  planDescription?: boolean;
}

export const AccessSqlQueryProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionId"),
    ),
    details: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("details")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    name: Schema.String.pipe(T.HttpPath("name")),
    planDescription: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("planDescription"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:accessSqlQuery" }),
    svc,
  ) as unknown as Schema.Schema<AccessSqlQueryProjectsLocationsSessionsSparkApplicationsRequest>;

export type AccessSqlQueryProjectsLocationsSessionsSparkApplicationsResponse =
  AccessSessionSparkApplicationSqlQueryResponse;
export const AccessSqlQueryProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessSessionSparkApplicationSqlQueryResponse;

export type AccessSqlQueryProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to a particular SQL Query for a Spark Application. */
export const accessSqlQueryProjectsLocationsSessionsSparkApplications: API.OperationMethod<
  AccessSqlQueryProjectsLocationsSessionsSparkApplicationsRequest,
  AccessSqlQueryProjectsLocationsSessionsSparkApplicationsResponse,
  AccessSqlQueryProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessSqlQueryProjectsLocationsSessionsSparkApplicationsRequest,
  output: AccessSqlQueryProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SummarizeJobsProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Required. Parent (Session) resource reference. */
  parent?: string;
  /** Optional. List of Job IDs to filter by if provided. */
  jobIds?: string[];
}

export const SummarizeJobsProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    jobIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("jobIds"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:summarizeJobs" }),
    svc,
  ) as unknown as Schema.Schema<SummarizeJobsProjectsLocationsSessionsSparkApplicationsRequest>;

export type SummarizeJobsProjectsLocationsSessionsSparkApplicationsResponse =
  SummarizeSessionSparkApplicationJobsResponse;
export const SummarizeJobsProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SummarizeSessionSparkApplicationJobsResponse;

export type SummarizeJobsProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain summary of Jobs for a Spark Application */
export const summarizeJobsProjectsLocationsSessionsSparkApplications: API.OperationMethod<
  SummarizeJobsProjectsLocationsSessionsSparkApplicationsRequest,
  SummarizeJobsProjectsLocationsSessionsSparkApplicationsResponse,
  SummarizeJobsProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SummarizeJobsProjectsLocationsSessionsSparkApplicationsRequest,
  output: SummarizeJobsProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SummarizeStagesProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. List of Stage IDs to filter by if provided. */
  stageIds?: string[];
  /** Required. Parent (Session) resource reference. */
  parent?: string;
}

export const SummarizeStagesProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    stageIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("stageIds"),
    ),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:summarizeStages" }),
    svc,
  ) as unknown as Schema.Schema<SummarizeStagesProjectsLocationsSessionsSparkApplicationsRequest>;

export type SummarizeStagesProjectsLocationsSessionsSparkApplicationsResponse =
  SummarizeSessionSparkApplicationStagesResponse;
export const SummarizeStagesProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SummarizeSessionSparkApplicationStagesResponse;

export type SummarizeStagesProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain summary of Stages for a Spark Application */
export const summarizeStagesProjectsLocationsSessionsSparkApplications: API.OperationMethod<
  SummarizeStagesProjectsLocationsSessionsSparkApplicationsRequest,
  SummarizeStagesProjectsLocationsSessionsSparkApplicationsResponse,
  SummarizeStagesProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SummarizeStagesProjectsLocationsSessionsSparkApplicationsRequest,
  output: SummarizeStagesProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchProjectsLocationsSessionsSparkApplicationsRequest {
  /** Optional. Earliest end timestamp to list. */
  minEndTime?: string;
  /** Optional. Maximum number of applications to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
  /** Optional. A page token received from a previous SearchSessionSparkApplications call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. Latest start timestamp to list. */
  maxTime?: string;
  /** Optional. Latest end timestamp to list. */
  maxEndTime?: string;
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID" */
  parent: string;
  /** Optional. Search only applications in the chosen state. */
  applicationStatus?:
    | "APPLICATION_STATUS_UNSPECIFIED"
    | "APPLICATION_STATUS_RUNNING"
    | "APPLICATION_STATUS_COMPLETED"
    | (string & {});
  /** Optional. Earliest start timestamp to list. */
  minTime?: string;
}

export const SearchProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minEndTime: Schema.optional(Schema.String).pipe(T.HttpQuery("minEndTime")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    maxTime: Schema.optional(Schema.String).pipe(T.HttpQuery("maxTime")),
    maxEndTime: Schema.optional(Schema.String).pipe(T.HttpQuery("maxEndTime")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    applicationStatus: Schema.optional(Schema.String).pipe(
      T.HttpQuery("applicationStatus"),
    ),
    minTime: Schema.optional(Schema.String).pipe(T.HttpQuery("minTime")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/sparkApplications:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsLocationsSessionsSparkApplicationsRequest>;

export type SearchProjectsLocationsSessionsSparkApplicationsResponse =
  SearchSessionSparkApplicationsResponse;
export const SearchProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSessionSparkApplicationsResponse;

export type SearchProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain high level information and list of Spark Applications corresponding to a batch */
export const searchProjectsLocationsSessionsSparkApplications: API.PaginatedOperationMethod<
  SearchProjectsLocationsSessionsSparkApplicationsRequest,
  SearchProjectsLocationsSessionsSparkApplicationsResponse,
  SearchProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchProjectsLocationsSessionsSparkApplicationsRequest,
  output: SearchProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SummarizeStageAttemptTasksProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. Stage ID */
  stageId?: string;
  /** Required. Stage Attempt ID */
  stageAttemptId?: number;
  /** Required. Parent (Session) resource reference. */
  parent?: string;
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
}

export const SummarizeStageAttemptTasksProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stageId: Schema.optional(Schema.String).pipe(T.HttpQuery("stageId")),
    stageAttemptId: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("stageAttemptId"),
    ),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:summarizeStageAttemptTasks" }),
    svc,
  ) as unknown as Schema.Schema<SummarizeStageAttemptTasksProjectsLocationsSessionsSparkApplicationsRequest>;

export type SummarizeStageAttemptTasksProjectsLocationsSessionsSparkApplicationsResponse =
  SummarizeSessionSparkApplicationStageAttemptTasksResponse;
export const SummarizeStageAttemptTasksProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SummarizeSessionSparkApplicationStageAttemptTasksResponse;

export type SummarizeStageAttemptTasksProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain summary of Tasks for a Spark Application Stage Attempt */
export const summarizeStageAttemptTasksProjectsLocationsSessionsSparkApplications: API.OperationMethod<
  SummarizeStageAttemptTasksProjectsLocationsSessionsSparkApplicationsRequest,
  SummarizeStageAttemptTasksProjectsLocationsSessionsSparkApplicationsResponse,
  SummarizeStageAttemptTasksProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    SummarizeStageAttemptTasksProjectsLocationsSessionsSparkApplicationsRequest,
  output:
    SummarizeStageAttemptTasksProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AccessStageAttemptProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Required. Stage ID */
  stageId?: string;
  /** Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field */
  summaryMetricsMask?: string;
  /** Required. Stage Attempt ID */
  stageAttemptId?: number;
  /** Required. Parent (Session) resource reference. */
  parent?: string;
}

export const AccessStageAttemptProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    stageId: Schema.optional(Schema.String).pipe(T.HttpQuery("stageId")),
    summaryMetricsMask: Schema.optional(Schema.String).pipe(
      T.HttpQuery("summaryMetricsMask"),
    ),
    stageAttemptId: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("stageAttemptId"),
    ),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:accessStageAttempt" }),
    svc,
  ) as unknown as Schema.Schema<AccessStageAttemptProjectsLocationsSessionsSparkApplicationsRequest>;

export type AccessStageAttemptProjectsLocationsSessionsSparkApplicationsResponse =
  AccessSessionSparkApplicationStageAttemptResponse;
export const AccessStageAttemptProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessSessionSparkApplicationStageAttemptResponse;

export type AccessStageAttemptProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to a spark stage attempt for a Spark Application. */
export const accessStageAttemptProjectsLocationsSessionsSparkApplications: API.OperationMethod<
  AccessStageAttemptProjectsLocationsSessionsSparkApplicationsRequest,
  AccessStageAttemptProjectsLocationsSessionsSparkApplicationsResponse,
  AccessStageAttemptProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessStageAttemptProjectsLocationsSessionsSparkApplicationsRequest,
  output: AccessStageAttemptProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AccessStageRddGraphProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. Parent (Session) resource reference. */
  parent?: string;
  /** Required. Stage ID */
  stageId?: string;
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
}

export const AccessStageRddGraphProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    stageId: Schema.optional(Schema.String).pipe(T.HttpQuery("stageId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:accessStageRddGraph" }),
    svc,
  ) as unknown as Schema.Schema<AccessStageRddGraphProjectsLocationsSessionsSparkApplicationsRequest>;

export type AccessStageRddGraphProjectsLocationsSessionsSparkApplicationsResponse =
  AccessSessionSparkApplicationStageRddOperationGraphResponse;
export const AccessStageRddGraphProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessSessionSparkApplicationStageRddOperationGraphResponse;

export type AccessStageRddGraphProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000. */
export const accessStageRddGraphProjectsLocationsSessionsSparkApplications: API.OperationMethod<
  AccessStageRddGraphProjectsLocationsSessionsSparkApplicationsRequest,
  AccessStageRddGraphProjectsLocationsSessionsSparkApplicationsResponse,
  AccessStageRddGraphProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessStageRddGraphProjectsLocationsSessionsSparkApplicationsRequest,
  output: AccessStageRddGraphProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AccessEnvironmentInfoProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Required. Parent (Session) resource reference. */
  parent?: string;
}

export const AccessEnvironmentInfoProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:accessEnvironmentInfo" }),
    svc,
  ) as unknown as Schema.Schema<AccessEnvironmentInfoProjectsLocationsSessionsSparkApplicationsRequest>;

export type AccessEnvironmentInfoProjectsLocationsSessionsSparkApplicationsResponse =
  AccessSessionSparkApplicationEnvironmentInfoResponse;
export const AccessEnvironmentInfoProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessSessionSparkApplicationEnvironmentInfoResponse;

export type AccessEnvironmentInfoProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain environment details for a Spark Application */
export const accessEnvironmentInfoProjectsLocationsSessionsSparkApplications: API.OperationMethod<
  AccessEnvironmentInfoProjectsLocationsSessionsSparkApplicationsRequest,
  AccessEnvironmentInfoProjectsLocationsSessionsSparkApplicationsResponse,
  AccessEnvironmentInfoProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessEnvironmentInfoProjectsLocationsSessionsSparkApplicationsRequest,
  output:
    AccessEnvironmentInfoProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchSqlQueriesProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. Parent (Session) resource reference. */
  parent?: string;
  /** Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide. */
  details?: boolean;
  /** Optional. A page token received from a previous SearchSessionSparkApplicationSqlQueries call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. List of Spark Connect operation IDs to filter by if provided. */
  operationIds?: string[];
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. Enables/ disables physical plan description on demand */
  planDescription?: boolean;
  /** Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
}

export const SearchSqlQueriesProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    details: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("details")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    operationIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("operationIds"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    planDescription: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("planDescription"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:searchSqlQueries" }),
    svc,
  ) as unknown as Schema.Schema<SearchSqlQueriesProjectsLocationsSessionsSparkApplicationsRequest>;

export type SearchSqlQueriesProjectsLocationsSessionsSparkApplicationsResponse =
  SearchSessionSparkApplicationSqlQueriesResponse;
export const SearchSqlQueriesProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSessionSparkApplicationSqlQueriesResponse;

export type SearchSqlQueriesProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to SQL Queries for a Spark Application. */
export const searchSqlQueriesProjectsLocationsSessionsSparkApplications: API.PaginatedOperationMethod<
  SearchSqlQueriesProjectsLocationsSessionsSparkApplicationsRequest,
  SearchSqlQueriesProjectsLocationsSessionsSparkApplicationsResponse,
  SearchSqlQueriesProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchSqlQueriesProjectsLocationsSessionsSparkApplicationsRequest,
  output: SearchSqlQueriesProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SummarizeExecutorsProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Required. Parent (Session) resource reference. */
  parent?: string;
}

export const SummarizeExecutorsProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:summarizeExecutors" }),
    svc,
  ) as unknown as Schema.Schema<SummarizeExecutorsProjectsLocationsSessionsSparkApplicationsRequest>;

export type SummarizeExecutorsProjectsLocationsSessionsSparkApplicationsResponse =
  SummarizeSessionSparkApplicationExecutorsResponse;
export const SummarizeExecutorsProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SummarizeSessionSparkApplicationExecutorsResponse;

export type SummarizeExecutorsProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain summary of Executor Summary for a Spark Application */
export const summarizeExecutorsProjectsLocationsSessionsSparkApplications: API.OperationMethod<
  SummarizeExecutorsProjectsLocationsSessionsSparkApplicationsRequest,
  SummarizeExecutorsProjectsLocationsSessionsSparkApplicationsResponse,
  SummarizeExecutorsProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SummarizeExecutorsProjectsLocationsSessionsSparkApplicationsRequest,
  output: SummarizeExecutorsProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchStageAttemptTasksProjectsLocationsSessionsSparkApplicationsRequest {
  /** Optional. A page token received from a previous SearchSessionSparkApplicationStageAttemptTasks call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Required. Parent (Session) resource reference. */
  parent?: string;
  /** Optional. Stage Attempt ID */
  stageAttemptId?: number;
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. Maximum number of tasks to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
  /** Optional. Stage ID */
  stageId?: string;
  /** Optional. Sort the tasks by runtime. */
  sortRuntime?: boolean;
  /** Optional. List only tasks in the state. */
  taskStatus?:
    | "TASK_STATUS_UNSPECIFIED"
    | "TASK_STATUS_RUNNING"
    | "TASK_STATUS_SUCCESS"
    | "TASK_STATUS_FAILED"
    | "TASK_STATUS_KILLED"
    | "TASK_STATUS_PENDING"
    | (string & {});
}

export const SearchStageAttemptTasksProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    stageAttemptId: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("stageAttemptId"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    stageId: Schema.optional(Schema.String).pipe(T.HttpQuery("stageId")),
    sortRuntime: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("sortRuntime"),
    ),
    taskStatus: Schema.optional(Schema.String).pipe(T.HttpQuery("taskStatus")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:searchStageAttemptTasks" }),
    svc,
  ) as unknown as Schema.Schema<SearchStageAttemptTasksProjectsLocationsSessionsSparkApplicationsRequest>;

export type SearchStageAttemptTasksProjectsLocationsSessionsSparkApplicationsResponse =
  SearchSessionSparkApplicationStageAttemptTasksResponse;
export const SearchStageAttemptTasksProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSessionSparkApplicationStageAttemptTasksResponse;

export type SearchStageAttemptTasksProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to tasks for a spark stage attempt for a Spark Application. */
export const searchStageAttemptTasksProjectsLocationsSessionsSparkApplications: API.PaginatedOperationMethod<
  SearchStageAttemptTasksProjectsLocationsSessionsSparkApplicationsRequest,
  SearchStageAttemptTasksProjectsLocationsSessionsSparkApplicationsResponse,
  SearchStageAttemptTasksProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    SearchStageAttemptTasksProjectsLocationsSessionsSparkApplicationsRequest,
  output:
    SearchStageAttemptTasksProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchExecutorsProjectsLocationsSessionsSparkApplicationsRequest {
  /** Required. The fully qualified name of the session to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/sessions/SESSION_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. Filter to select whether active/ dead or all executors should be selected. */
  executorStatus?:
    | "EXECUTOR_STATUS_UNSPECIFIED"
    | "EXECUTOR_STATUS_ACTIVE"
    | "EXECUTOR_STATUS_DEAD"
    | (string & {});
  /** Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
  /** Optional. A page token received from a previous SearchSessionSparkApplicationExecutors call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Required. Parent (Session) resource reference. */
  parent?: string;
}

export const SearchExecutorsProjectsLocationsSessionsSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    executorStatus: Schema.optional(Schema.String).pipe(
      T.HttpQuery("executorStatus"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:searchExecutors" }),
    svc,
  ) as unknown as Schema.Schema<SearchExecutorsProjectsLocationsSessionsSparkApplicationsRequest>;

export type SearchExecutorsProjectsLocationsSessionsSparkApplicationsResponse =
  SearchSessionSparkApplicationExecutorsResponse;
export const SearchExecutorsProjectsLocationsSessionsSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSessionSparkApplicationExecutorsResponse;

export type SearchExecutorsProjectsLocationsSessionsSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to executors for a Spark Application. */
export const searchExecutorsProjectsLocationsSessionsSparkApplications: API.PaginatedOperationMethod<
  SearchExecutorsProjectsLocationsSessionsSparkApplicationsRequest,
  SearchExecutorsProjectsLocationsSessionsSparkApplicationsResponse,
  SearchExecutorsProjectsLocationsSessionsSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchExecutorsProjectsLocationsSessionsSparkApplicationsRequest,
  output: SearchExecutorsProjectsLocationsSessionsSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsWorkflowTemplatesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsLocationsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsWorkflowTemplatesRequest>;

export type GetIamPolicyProjectsLocationsWorkflowTemplatesResponse = Policy;
export const GetIamPolicyProjectsLocationsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsWorkflowTemplates: API.OperationMethod<
  GetIamPolicyProjectsLocationsWorkflowTemplatesRequest,
  GetIamPolicyProjectsLocationsWorkflowTemplatesResponse,
  GetIamPolicyProjectsLocationsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsWorkflowTemplatesRequest,
  output: GetIamPolicyProjectsLocationsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsWorkflowTemplatesRequest {
  /** Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.create, the resource name of the location has the following format: projects/{project_id}/locations/{location} */
  parent: string;
  /** Request body */
  body?: WorkflowTemplate;
}

export const CreateProjectsLocationsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(WorkflowTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/workflowTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsWorkflowTemplatesRequest>;

export type CreateProjectsLocationsWorkflowTemplatesResponse = WorkflowTemplate;
export const CreateProjectsLocationsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkflowTemplate;

export type CreateProjectsLocationsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new workflow template. */
export const createProjectsLocationsWorkflowTemplates: API.OperationMethod<
  CreateProjectsLocationsWorkflowTemplatesRequest,
  CreateProjectsLocationsWorkflowTemplatesResponse,
  CreateProjectsLocationsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsWorkflowTemplatesRequest,
  output: CreateProjectsLocationsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateProjectsLocationsWorkflowTemplatesRequest {
  /** Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} */
  name: string;
  /** Request body */
  body?: WorkflowTemplate;
}

export const UpdateProjectsLocationsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(WorkflowTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsLocationsWorkflowTemplatesRequest>;

export type UpdateProjectsLocationsWorkflowTemplatesResponse = WorkflowTemplate;
export const UpdateProjectsLocationsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkflowTemplate;

export type UpdateProjectsLocationsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates (replaces) workflow template. The updated template must contain version that matches the current server version. */
export const updateProjectsLocationsWorkflowTemplates: API.OperationMethod<
  UpdateProjectsLocationsWorkflowTemplatesRequest,
  UpdateProjectsLocationsWorkflowTemplatesResponse,
  UpdateProjectsLocationsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsLocationsWorkflowTemplatesRequest,
  output: UpdateProjectsLocationsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsWorkflowTemplatesRequest {
  /** Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.list, the resource name of the location has the following format: projects/{project_id}/locations/{location} */
  parent: string;
  /** Optional. The maximum number of results to return in each response. */
  pageSize?: number;
  /** Optional. The page token, returned by a previous call, to request the next page of results. */
  pageToken?: string;
}

export const ListProjectsLocationsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/workflowTemplates" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsWorkflowTemplatesRequest>;

export type ListProjectsLocationsWorkflowTemplatesResponse =
  ListWorkflowTemplatesResponse;
export const ListProjectsLocationsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWorkflowTemplatesResponse;

export type ListProjectsLocationsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists workflows that match the specified filter in the request. */
export const listProjectsLocationsWorkflowTemplates: API.PaginatedOperationMethod<
  ListProjectsLocationsWorkflowTemplatesRequest,
  ListProjectsLocationsWorkflowTemplatesResponse,
  ListProjectsLocationsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsWorkflowTemplatesRequest,
  output: ListProjectsLocationsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsWorkflowTemplatesRequest {
  /** Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.delete, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} */
  name: string;
  /** Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version. */
  version?: number;
}

export const DeleteProjectsLocationsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    version: Schema.optional(Schema.Number).pipe(T.HttpQuery("version")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsWorkflowTemplatesRequest>;

export type DeleteProjectsLocationsWorkflowTemplatesResponse = Empty;
export const DeleteProjectsLocationsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a workflow template. It does not cancel in-progress workflows. */
export const deleteProjectsLocationsWorkflowTemplates: API.OperationMethod<
  DeleteProjectsLocationsWorkflowTemplatesRequest,
  DeleteProjectsLocationsWorkflowTemplatesResponse,
  DeleteProjectsLocationsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsWorkflowTemplatesRequest,
  output: DeleteProjectsLocationsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InstantiateInlineProjectsLocationsWorkflowTemplatesRequest {
  /** Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,instantiateinline, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.instantiateinline, the resource name of the location has the following format: projects/{project_id}/locations/{location} */
  parent: string;
  /** Request body */
  body?: WorkflowTemplate;
}

export const InstantiateInlineProjectsLocationsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(WorkflowTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/workflowTemplates:instantiateInline",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InstantiateInlineProjectsLocationsWorkflowTemplatesRequest>;

export type InstantiateInlineProjectsLocationsWorkflowTemplatesResponse =
  Operation;
export const InstantiateInlineProjectsLocationsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type InstantiateInlineProjectsLocationsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty. */
export const instantiateInlineProjectsLocationsWorkflowTemplates: API.OperationMethod<
  InstantiateInlineProjectsLocationsWorkflowTemplatesRequest,
  InstantiateInlineProjectsLocationsWorkflowTemplatesResponse,
  InstantiateInlineProjectsLocationsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InstantiateInlineProjectsLocationsWorkflowTemplatesRequest,
  output: InstantiateInlineProjectsLocationsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsWorkflowTemplatesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsWorkflowTemplatesRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsWorkflowTemplatesRequest>;

export type SetIamPolicyProjectsLocationsWorkflowTemplatesResponse = Policy;
export const SetIamPolicyProjectsLocationsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsWorkflowTemplates: API.OperationMethod<
  SetIamPolicyProjectsLocationsWorkflowTemplatesRequest,
  SetIamPolicyProjectsLocationsWorkflowTemplatesResponse,
  SetIamPolicyProjectsLocationsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsWorkflowTemplatesRequest,
  output: SetIamPolicyProjectsLocationsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsWorkflowTemplatesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsWorkflowTemplatesRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsWorkflowTemplatesRequest>;

export type TestIamPermissionsProjectsLocationsWorkflowTemplatesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsWorkflowTemplates: API.OperationMethod<
  TestIamPermissionsProjectsLocationsWorkflowTemplatesRequest,
  TestIamPermissionsProjectsLocationsWorkflowTemplatesResponse,
  TestIamPermissionsProjectsLocationsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsWorkflowTemplatesRequest,
  output: TestIamPermissionsProjectsLocationsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsWorkflowTemplatesRequest {
  /** Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} */
  name: string;
  /** Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version. */
  version?: number;
}

export const GetProjectsLocationsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    version: Schema.optional(Schema.Number).pipe(T.HttpQuery("version")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsWorkflowTemplatesRequest>;

export type GetProjectsLocationsWorkflowTemplatesResponse = WorkflowTemplate;
export const GetProjectsLocationsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkflowTemplate;

export type GetProjectsLocationsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter. */
export const getProjectsLocationsWorkflowTemplates: API.OperationMethod<
  GetProjectsLocationsWorkflowTemplatesRequest,
  GetProjectsLocationsWorkflowTemplatesResponse,
  GetProjectsLocationsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsWorkflowTemplatesRequest,
  output: GetProjectsLocationsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface InstantiateProjectsLocationsWorkflowTemplatesRequest {
  /** Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} */
  name: string;
  /** Request body */
  body?: InstantiateWorkflowTemplateRequest;
}

export const InstantiateProjectsLocationsWorkflowTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(InstantiateWorkflowTemplateRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:instantiate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<InstantiateProjectsLocationsWorkflowTemplatesRequest>;

export type InstantiateProjectsLocationsWorkflowTemplatesResponse = Operation;
export const InstantiateProjectsLocationsWorkflowTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type InstantiateProjectsLocationsWorkflowTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty. */
export const instantiateProjectsLocationsWorkflowTemplates: API.OperationMethod<
  InstantiateProjectsLocationsWorkflowTemplatesRequest,
  InstantiateProjectsLocationsWorkflowTemplatesResponse,
  InstantiateProjectsLocationsWorkflowTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InstantiateProjectsLocationsWorkflowTemplatesRequest,
  output: InstantiateProjectsLocationsWorkflowTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAutoscalingPoliciesRequest {
  /** Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.create, the resource name of the location has the following format: projects/{project_id}/locations/{location} */
  parent: string;
  /** Request body */
  body?: AutoscalingPolicy;
}

export const CreateProjectsLocationsAutoscalingPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AutoscalingPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/autoscalingPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAutoscalingPoliciesRequest>;

export type CreateProjectsLocationsAutoscalingPoliciesResponse =
  AutoscalingPolicy;
export const CreateProjectsLocationsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AutoscalingPolicy;

export type CreateProjectsLocationsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new autoscaling policy. */
export const createProjectsLocationsAutoscalingPolicies: API.OperationMethod<
  CreateProjectsLocationsAutoscalingPoliciesRequest,
  CreateProjectsLocationsAutoscalingPoliciesResponse,
  CreateProjectsLocationsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAutoscalingPoliciesRequest,
  output: CreateProjectsLocationsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateProjectsLocationsAutoscalingPoliciesRequest {
  /** Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} */
  name: string;
  /** Request body */
  body?: AutoscalingPolicy;
}

export const UpdateProjectsLocationsAutoscalingPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AutoscalingPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsLocationsAutoscalingPoliciesRequest>;

export type UpdateProjectsLocationsAutoscalingPoliciesResponse =
  AutoscalingPolicy;
export const UpdateProjectsLocationsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AutoscalingPolicy;

export type UpdateProjectsLocationsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements. */
export const updateProjectsLocationsAutoscalingPolicies: API.OperationMethod<
  UpdateProjectsLocationsAutoscalingPoliciesRequest,
  UpdateProjectsLocationsAutoscalingPoliciesResponse,
  UpdateProjectsLocationsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsLocationsAutoscalingPoliciesRequest,
  output: UpdateProjectsLocationsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAutoscalingPoliciesRequest {
  /** Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100. */
  pageSize?: number;
  /** Optional. The page token, returned by a previous call, to request the next page of results. */
  pageToken?: string;
  /** Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.list, the resource name of the location has the following format: projects/{project_id}/locations/{location} */
  parent: string;
}

export const ListProjectsLocationsAutoscalingPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/autoscalingPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAutoscalingPoliciesRequest>;

export type ListProjectsLocationsAutoscalingPoliciesResponse =
  ListAutoscalingPoliciesResponse;
export const ListProjectsLocationsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAutoscalingPoliciesResponse;

export type ListProjectsLocationsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists autoscaling policies in the project. */
export const listProjectsLocationsAutoscalingPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsAutoscalingPoliciesRequest,
  ListProjectsLocationsAutoscalingPoliciesResponse,
  ListProjectsLocationsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAutoscalingPoliciesRequest,
  output: ListProjectsLocationsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAutoscalingPoliciesRequest {
  /** Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.delete, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.delete, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} */
  name: string;
}

export const DeleteProjectsLocationsAutoscalingPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAutoscalingPoliciesRequest>;

export type DeleteProjectsLocationsAutoscalingPoliciesResponse = Empty;
export const DeleteProjectsLocationsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters. */
export const deleteProjectsLocationsAutoscalingPolicies: API.OperationMethod<
  DeleteProjectsLocationsAutoscalingPoliciesRequest,
  DeleteProjectsLocationsAutoscalingPoliciesResponse,
  DeleteProjectsLocationsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAutoscalingPoliciesRequest,
  output: DeleteProjectsLocationsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsAutoscalingPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsLocationsAutoscalingPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsAutoscalingPoliciesRequest>;

export type GetIamPolicyProjectsLocationsAutoscalingPoliciesResponse = Policy;
export const GetIamPolicyProjectsLocationsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsAutoscalingPolicies: API.OperationMethod<
  GetIamPolicyProjectsLocationsAutoscalingPoliciesRequest,
  GetIamPolicyProjectsLocationsAutoscalingPoliciesResponse,
  GetIamPolicyProjectsLocationsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsAutoscalingPoliciesRequest,
  output: GetIamPolicyProjectsLocationsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAutoscalingPoliciesRequest {
  /** Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.get, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.get, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} */
  name: string;
}

export const GetProjectsLocationsAutoscalingPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAutoscalingPoliciesRequest>;

export type GetProjectsLocationsAutoscalingPoliciesResponse = AutoscalingPolicy;
export const GetProjectsLocationsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AutoscalingPolicy;

export type GetProjectsLocationsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves autoscaling policy. */
export const getProjectsLocationsAutoscalingPolicies: API.OperationMethod<
  GetProjectsLocationsAutoscalingPoliciesRequest,
  GetProjectsLocationsAutoscalingPoliciesResponse,
  GetProjectsLocationsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAutoscalingPoliciesRequest,
  output: GetProjectsLocationsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsAutoscalingPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsAutoscalingPoliciesRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsAutoscalingPoliciesRequest>;

export type SetIamPolicyProjectsLocationsAutoscalingPoliciesResponse = Policy;
export const SetIamPolicyProjectsLocationsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsAutoscalingPolicies: API.OperationMethod<
  SetIamPolicyProjectsLocationsAutoscalingPoliciesRequest,
  SetIamPolicyProjectsLocationsAutoscalingPoliciesResponse,
  SetIamPolicyProjectsLocationsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsAutoscalingPoliciesRequest,
  output: SetIamPolicyProjectsLocationsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsAutoscalingPoliciesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsAutoscalingPoliciesRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsAutoscalingPoliciesRequest>;

export type TestIamPermissionsProjectsLocationsAutoscalingPoliciesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsAutoscalingPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsAutoscalingPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsAutoscalingPolicies: API.OperationMethod<
  TestIamPermissionsProjectsLocationsAutoscalingPoliciesRequest,
  TestIamPermissionsProjectsLocationsAutoscalingPoliciesResponse,
  TestIamPermissionsProjectsLocationsAutoscalingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsAutoscalingPoliciesRequest,
  output: TestIamPermissionsProjectsLocationsAutoscalingPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBatchesRequest {
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID" */
  name: string;
}

export const GetProjectsLocationsBatchesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBatchesRequest>;

export type GetProjectsLocationsBatchesResponse = Batch;
export const GetProjectsLocationsBatchesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Batch;

export type GetProjectsLocationsBatchesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the batch workload resource representation. */
export const getProjectsLocationsBatches: API.OperationMethod<
  GetProjectsLocationsBatchesRequest,
  GetProjectsLocationsBatchesResponse,
  GetProjectsLocationsBatchesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBatchesRequest,
  output: GetProjectsLocationsBatchesResponse,
  errors: [NotFound, Forbidden],
}));

export interface AnalyzeProjectsLocationsBatchesRequest {
  /** Required. The fully qualified name of the batch to analyze in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID" */
  name: string;
  /** Request body */
  body?: AnalyzeBatchRequest;
}

export const AnalyzeProjectsLocationsBatchesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AnalyzeBatchRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:analyze", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeProjectsLocationsBatchesRequest>;

export type AnalyzeProjectsLocationsBatchesResponse = Operation;
export const AnalyzeProjectsLocationsBatchesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AnalyzeProjectsLocationsBatchesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Analyze a Batch for possible recommendations and insights. */
export const analyzeProjectsLocationsBatches: API.OperationMethod<
  AnalyzeProjectsLocationsBatchesRequest,
  AnalyzeProjectsLocationsBatchesResponse,
  AnalyzeProjectsLocationsBatchesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnalyzeProjectsLocationsBatchesRequest,
  output: AnalyzeProjectsLocationsBatchesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsBatchesRequest {
  /** Optional. A unique ID used to identify the request. If the service receives two CreateBatchRequests with the same request_id, the second request is ignored and the operation that corresponds to the first Batch created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Required. The parent resource where this batch will be created. */
  parent: string;
  /** Optional. The ID to use for the batch, which will become the final component of the batch's resource name.This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/. */
  batchId?: string;
  /** Request body */
  body?: Batch;
}

export const CreateProjectsLocationsBatchesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    batchId: Schema.optional(Schema.String).pipe(T.HttpQuery("batchId")),
    body: Schema.optional(Batch).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/batches", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsBatchesRequest>;

export type CreateProjectsLocationsBatchesResponse = Operation;
export const CreateProjectsLocationsBatchesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsBatchesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a batch workload that executes asynchronously. */
export const createProjectsLocationsBatches: API.OperationMethod<
  CreateProjectsLocationsBatchesRequest,
  CreateProjectsLocationsBatchesResponse,
  CreateProjectsLocationsBatchesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBatchesRequest,
  output: CreateProjectsLocationsBatchesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBatchesRequest {
  /** Optional. A page token received from a previous ListBatches call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. A filter for the batches to return in the response.A filter is a logical expression constraining the values of various fields in each batch resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND/OR). Supported fields are batch_id, batch_uuid, state, create_time, and labels.e.g. state = RUNNING and create_time < "2023-01-01T00:00:00Z" filters for batches in state RUNNING that were created before 2023-01-01. state = RUNNING and labels.environment=production filters for batches in state in a RUNNING state that have a production environment label.See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparisons. */
  filter?: string;
  /** Optional. Field(s) on which to sort the list of batches.Currently the only supported sort orders are unspecified (empty) and create_time desc to sort by most recently created batches first.See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The parent, which owns this collection of batches. */
  parent: string;
  /** Optional. The maximum number of batches to return in each response. The service may return fewer than this value. The default page size is 20; the maximum page size is 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsBatchesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/batches" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBatchesRequest>;

export type ListProjectsLocationsBatchesResponse = ListBatchesResponse;
export const ListProjectsLocationsBatchesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBatchesResponse;

export type ListProjectsLocationsBatchesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists batch workloads. */
export const listProjectsLocationsBatches: API.PaginatedOperationMethod<
  ListProjectsLocationsBatchesRequest,
  ListProjectsLocationsBatchesResponse,
  ListProjectsLocationsBatchesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBatchesRequest,
  output: ListProjectsLocationsBatchesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsBatchesRequest {
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID" */
  name: string;
}

export const DeleteProjectsLocationsBatchesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsBatchesRequest>;

export type DeleteProjectsLocationsBatchesResponse = Empty;
export const DeleteProjectsLocationsBatchesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsBatchesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the batch workload resource. If the batch is not in a CANCELLED, SUCCEEDED or FAILED State, the delete operation fails and the response returns FAILED_PRECONDITION. */
export const deleteProjectsLocationsBatches: API.OperationMethod<
  DeleteProjectsLocationsBatchesRequest,
  DeleteProjectsLocationsBatchesResponse,
  DeleteProjectsLocationsBatchesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBatchesRequest,
  output: DeleteProjectsLocationsBatchesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AccessProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
}

export const AccessProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:access" }),
    svc,
  ) as unknown as Schema.Schema<AccessProjectsLocationsBatchesSparkApplicationsRequest>;

export type AccessProjectsLocationsBatchesSparkApplicationsResponse =
  AccessSparkApplicationResponse;
export const AccessProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessSparkApplicationResponse;

export type AccessProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain high level information corresponding to a single Spark Application. */
export const accessProjectsLocationsBatchesSparkApplications: API.OperationMethod<
  AccessProjectsLocationsBatchesSparkApplicationsRequest,
  AccessProjectsLocationsBatchesSparkApplicationsResponse,
  AccessProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessProjectsLocationsBatchesSparkApplicationsRequest,
  output: AccessProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchJobsProjectsLocationsBatchesSparkApplicationsRequest {
  /** Optional. List only jobs in the specific state. */
  jobStatus?:
    | "JOB_EXECUTION_STATUS_UNSPECIFIED"
    | "JOB_EXECUTION_STATUS_RUNNING"
    | "JOB_EXECUTION_STATUS_SUCCEEDED"
    | "JOB_EXECUTION_STATUS_FAILED"
    | "JOB_EXECUTION_STATUS_UNKNOWN"
    | (string & {});
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. Maximum number of jobs to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
  /** Optional. A page token received from a previous SearchSparkApplicationJobs call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
}

export const SearchJobsProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobStatus: Schema.optional(Schema.String).pipe(T.HttpQuery("jobStatus")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:searchJobs" }),
    svc,
  ) as unknown as Schema.Schema<SearchJobsProjectsLocationsBatchesSparkApplicationsRequest>;

export type SearchJobsProjectsLocationsBatchesSparkApplicationsResponse =
  SearchSparkApplicationJobsResponse;
export const SearchJobsProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSparkApplicationJobsResponse;

export type SearchJobsProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain list of spark jobs corresponding to a Spark Application. */
export const searchJobsProjectsLocationsBatchesSparkApplications: API.PaginatedOperationMethod<
  SearchJobsProjectsLocationsBatchesSparkApplicationsRequest,
  SearchJobsProjectsLocationsBatchesSparkApplicationsResponse,
  SearchJobsProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchJobsProjectsLocationsBatchesSparkApplicationsRequest,
  output: SearchJobsProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AccessSqlQueryProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. Enables/ disables physical plan description on demand */
  planDescription?: boolean;
  /** Required. Execution ID */
  executionId?: string;
  /** Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide. */
  details?: boolean;
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
}

export const AccessSqlQueryProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    planDescription: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("planDescription"),
    ),
    executionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionId"),
    ),
    details: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("details")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:accessSqlQuery" }),
    svc,
  ) as unknown as Schema.Schema<AccessSqlQueryProjectsLocationsBatchesSparkApplicationsRequest>;

export type AccessSqlQueryProjectsLocationsBatchesSparkApplicationsResponse =
  AccessSparkApplicationSqlQueryResponse;
export const AccessSqlQueryProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessSparkApplicationSqlQueryResponse;

export type AccessSqlQueryProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to a particular SQL Query for a Spark Application. */
export const accessSqlQueryProjectsLocationsBatchesSparkApplications: API.OperationMethod<
  AccessSqlQueryProjectsLocationsBatchesSparkApplicationsRequest,
  AccessSqlQueryProjectsLocationsBatchesSparkApplicationsResponse,
  AccessSqlQueryProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessSqlQueryProjectsLocationsBatchesSparkApplicationsRequest,
  output: AccessSqlQueryProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SummarizeJobsProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
}

export const SummarizeJobsProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:summarizeJobs" }),
    svc,
  ) as unknown as Schema.Schema<SummarizeJobsProjectsLocationsBatchesSparkApplicationsRequest>;

export type SummarizeJobsProjectsLocationsBatchesSparkApplicationsResponse =
  SummarizeSparkApplicationJobsResponse;
export const SummarizeJobsProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SummarizeSparkApplicationJobsResponse;

export type SummarizeJobsProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain summary of Jobs for a Spark Application */
export const summarizeJobsProjectsLocationsBatchesSparkApplications: API.OperationMethod<
  SummarizeJobsProjectsLocationsBatchesSparkApplicationsRequest,
  SummarizeJobsProjectsLocationsBatchesSparkApplicationsResponse,
  SummarizeJobsProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SummarizeJobsProjectsLocationsBatchesSparkApplicationsRequest,
  output: SummarizeJobsProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AccessSqlPlanProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Required. Execution ID */
  executionId?: string;
}

export const AccessSqlPlanProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    name: Schema.String.pipe(T.HttpPath("name")),
    executionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionId"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:accessSqlPlan" }),
    svc,
  ) as unknown as Schema.Schema<AccessSqlPlanProjectsLocationsBatchesSparkApplicationsRequest>;

export type AccessSqlPlanProjectsLocationsBatchesSparkApplicationsResponse =
  AccessSparkApplicationSqlSparkPlanGraphResponse;
export const AccessSqlPlanProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessSparkApplicationSqlSparkPlanGraphResponse;

export type AccessSqlPlanProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000. */
export const accessSqlPlanProjectsLocationsBatchesSparkApplications: API.OperationMethod<
  AccessSqlPlanProjectsLocationsBatchesSparkApplicationsRequest,
  AccessSqlPlanProjectsLocationsBatchesSparkApplicationsResponse,
  AccessSqlPlanProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessSqlPlanProjectsLocationsBatchesSparkApplicationsRequest,
  output: AccessSqlPlanProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchStageAttemptsProjectsLocationsBatchesSparkApplicationsRequest {
  /** Optional. A page token received from a previous SearchSparkApplicationStageAttempts call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field */
  summaryMetricsMask?: string;
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. Maximum number of stage attempts (paging based on stage_attempt_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
  /** Required. Stage ID for which attempts are to be fetched */
  stageId?: string;
}

export const SearchStageAttemptsProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    summaryMetricsMask: Schema.optional(Schema.String).pipe(
      T.HttpQuery("summaryMetricsMask"),
    ),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    stageId: Schema.optional(Schema.String).pipe(T.HttpQuery("stageId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:searchStageAttempts" }),
    svc,
  ) as unknown as Schema.Schema<SearchStageAttemptsProjectsLocationsBatchesSparkApplicationsRequest>;

export type SearchStageAttemptsProjectsLocationsBatchesSparkApplicationsResponse =
  SearchSparkApplicationStageAttemptsResponse;
export const SearchStageAttemptsProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSparkApplicationStageAttemptsResponse;

export type SearchStageAttemptsProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to a spark stage attempts for a Spark Application. */
export const searchStageAttemptsProjectsLocationsBatchesSparkApplications: API.PaginatedOperationMethod<
  SearchStageAttemptsProjectsLocationsBatchesSparkApplicationsRequest,
  SearchStageAttemptsProjectsLocationsBatchesSparkApplicationsResponse,
  SearchStageAttemptsProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchStageAttemptsProjectsLocationsBatchesSparkApplicationsRequest,
  output: SearchStageAttemptsProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchExecutorStageSummaryProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. Stage ID */
  stageId?: string;
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
  /** Required. Stage Attempt ID */
  stageAttemptId?: number;
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
  /** Optional. A page token received from a previous AccessSparkApplicationExecutorsList call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
}

export const SearchExecutorStageSummaryProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stageId: Schema.optional(Schema.String).pipe(T.HttpQuery("stageId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    stageAttemptId: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("stageAttemptId"),
    ),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:searchExecutorStageSummary" }),
    svc,
  ) as unknown as Schema.Schema<SearchExecutorStageSummaryProjectsLocationsBatchesSparkApplicationsRequest>;

export type SearchExecutorStageSummaryProjectsLocationsBatchesSparkApplicationsResponse =
  SearchSparkApplicationExecutorStageSummaryResponse;
export const SearchExecutorStageSummaryProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSparkApplicationExecutorStageSummaryResponse;

export type SearchExecutorStageSummaryProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain executor summary with respect to a spark stage attempt. */
export const searchExecutorStageSummaryProjectsLocationsBatchesSparkApplications: API.PaginatedOperationMethod<
  SearchExecutorStageSummaryProjectsLocationsBatchesSparkApplicationsRequest,
  SearchExecutorStageSummaryProjectsLocationsBatchesSparkApplicationsResponse,
  SearchExecutorStageSummaryProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    SearchExecutorStageSummaryProjectsLocationsBatchesSparkApplicationsRequest,
  output:
    SearchExecutorStageSummaryProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AccessJobProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
  /** Required. Job ID to fetch data for. */
  jobId?: string;
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
}

export const AccessJobProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    jobId: Schema.optional(Schema.String).pipe(T.HttpQuery("jobId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:accessJob" }),
    svc,
  ) as unknown as Schema.Schema<AccessJobProjectsLocationsBatchesSparkApplicationsRequest>;

export type AccessJobProjectsLocationsBatchesSparkApplicationsResponse =
  AccessSparkApplicationJobResponse;
export const AccessJobProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessSparkApplicationJobResponse;

export type AccessJobProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to a spark job for a Spark Application. */
export const accessJobProjectsLocationsBatchesSparkApplications: API.OperationMethod<
  AccessJobProjectsLocationsBatchesSparkApplicationsRequest,
  AccessJobProjectsLocationsBatchesSparkApplicationsResponse,
  AccessJobProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessJobProjectsLocationsBatchesSparkApplicationsRequest,
  output: AccessJobProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface WriteProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. The fully qualified name of the spark application to write data about in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Request body */
  body?: WriteSparkApplicationContextRequest;
}

export const WriteProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(WriteSparkApplicationContextRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:write", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<WriteProjectsLocationsBatchesSparkApplicationsRequest>;

export type WriteProjectsLocationsBatchesSparkApplicationsResponse =
  WriteSparkApplicationContextResponse;
export const WriteProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WriteSparkApplicationContextResponse;

export type WriteProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Write wrapper objects from dataplane to spanner */
export const writeProjectsLocationsBatchesSparkApplications: API.OperationMethod<
  WriteProjectsLocationsBatchesSparkApplicationsRequest,
  WriteProjectsLocationsBatchesSparkApplicationsResponse,
  WriteProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WriteProjectsLocationsBatchesSparkApplicationsRequest,
  output: WriteProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchStagesProjectsLocationsBatchesSparkApplicationsRequest {
  /** Optional. A page token received from a previous FetchSparkApplicationStagesList call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field */
  summaryMetricsMask?: string;
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. List only stages in the given state. */
  stageStatus?:
    | "STAGE_STATUS_UNSPECIFIED"
    | "STAGE_STATUS_ACTIVE"
    | "STAGE_STATUS_COMPLETE"
    | "STAGE_STATUS_FAILED"
    | "STAGE_STATUS_PENDING"
    | "STAGE_STATUS_SKIPPED"
    | (string & {});
  /** Optional. Maximum number of stages (paging based on stage_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
}

export const SearchStagesProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    summaryMetricsMask: Schema.optional(Schema.String).pipe(
      T.HttpQuery("summaryMetricsMask"),
    ),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    name: Schema.String.pipe(T.HttpPath("name")),
    stageStatus: Schema.optional(Schema.String).pipe(
      T.HttpQuery("stageStatus"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:searchStages" }),
    svc,
  ) as unknown as Schema.Schema<SearchStagesProjectsLocationsBatchesSparkApplicationsRequest>;

export type SearchStagesProjectsLocationsBatchesSparkApplicationsResponse =
  SearchSparkApplicationStagesResponse;
export const SearchStagesProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSparkApplicationStagesResponse;

export type SearchStagesProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to stages for a Spark Application. */
export const searchStagesProjectsLocationsBatchesSparkApplications: API.PaginatedOperationMethod<
  SearchStagesProjectsLocationsBatchesSparkApplicationsRequest,
  SearchStagesProjectsLocationsBatchesSparkApplicationsResponse,
  SearchStagesProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchStagesProjectsLocationsBatchesSparkApplicationsRequest,
  output: SearchStagesProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchSqlQueriesProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. Enables/ disables physical plan description on demand */
  planDescription?: boolean;
  /** Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
  /** Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide. */
  details?: boolean;
  /** Optional. A page token received from a previous SearchSparkApplicationSqlQueries call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
}

export const SearchSqlQueriesProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    planDescription: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("planDescription"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    details: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("details")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:searchSqlQueries" }),
    svc,
  ) as unknown as Schema.Schema<SearchSqlQueriesProjectsLocationsBatchesSparkApplicationsRequest>;

export type SearchSqlQueriesProjectsLocationsBatchesSparkApplicationsResponse =
  SearchSparkApplicationSqlQueriesResponse;
export const SearchSqlQueriesProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSparkApplicationSqlQueriesResponse;

export type SearchSqlQueriesProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to SQL Queries for a Spark Application. */
export const searchSqlQueriesProjectsLocationsBatchesSparkApplications: API.PaginatedOperationMethod<
  SearchSqlQueriesProjectsLocationsBatchesSparkApplicationsRequest,
  SearchSqlQueriesProjectsLocationsBatchesSparkApplicationsResponse,
  SearchSqlQueriesProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchSqlQueriesProjectsLocationsBatchesSparkApplicationsRequest,
  output: SearchSqlQueriesProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AccessStageRddGraphProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. Stage ID */
  stageId?: string;
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
}

export const AccessStageRddGraphProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stageId: Schema.optional(Schema.String).pipe(T.HttpQuery("stageId")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:accessStageRddGraph" }),
    svc,
  ) as unknown as Schema.Schema<AccessStageRddGraphProjectsLocationsBatchesSparkApplicationsRequest>;

export type AccessStageRddGraphProjectsLocationsBatchesSparkApplicationsResponse =
  AccessSparkApplicationStageRddOperationGraphResponse;
export const AccessStageRddGraphProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessSparkApplicationStageRddOperationGraphResponse;

export type AccessStageRddGraphProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000. */
export const accessStageRddGraphProjectsLocationsBatchesSparkApplications: API.OperationMethod<
  AccessStageRddGraphProjectsLocationsBatchesSparkApplicationsRequest,
  AccessStageRddGraphProjectsLocationsBatchesSparkApplicationsResponse,
  AccessStageRddGraphProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessStageRddGraphProjectsLocationsBatchesSparkApplicationsRequest,
  output: AccessStageRddGraphProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AccessEnvironmentInfoProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
}

export const AccessEnvironmentInfoProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:accessEnvironmentInfo" }),
    svc,
  ) as unknown as Schema.Schema<AccessEnvironmentInfoProjectsLocationsBatchesSparkApplicationsRequest>;

export type AccessEnvironmentInfoProjectsLocationsBatchesSparkApplicationsResponse =
  AccessSparkApplicationEnvironmentInfoResponse;
export const AccessEnvironmentInfoProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessSparkApplicationEnvironmentInfoResponse;

export type AccessEnvironmentInfoProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain environment details for a Spark Application */
export const accessEnvironmentInfoProjectsLocationsBatchesSparkApplications: API.OperationMethod<
  AccessEnvironmentInfoProjectsLocationsBatchesSparkApplicationsRequest,
  AccessEnvironmentInfoProjectsLocationsBatchesSparkApplicationsResponse,
  AccessEnvironmentInfoProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessEnvironmentInfoProjectsLocationsBatchesSparkApplicationsRequest,
  output:
    AccessEnvironmentInfoProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchStageAttemptTasksProjectsLocationsBatchesSparkApplicationsRequest {
  /** Optional. A page token received from a previous ListSparkApplicationStageAttemptTasks call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
  /** Optional. Stage Attempt ID */
  stageAttemptId?: number;
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. Maximum number of tasks to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
  /** Optional. Stage ID */
  stageId?: string;
  /** Optional. Sort the tasks by runtime. */
  sortRuntime?: boolean;
  /** Optional. List only tasks in the state. */
  taskStatus?:
    | "TASK_STATUS_UNSPECIFIED"
    | "TASK_STATUS_RUNNING"
    | "TASK_STATUS_SUCCESS"
    | "TASK_STATUS_FAILED"
    | "TASK_STATUS_KILLED"
    | "TASK_STATUS_PENDING"
    | (string & {});
}

export const SearchStageAttemptTasksProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    stageAttemptId: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("stageAttemptId"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    stageId: Schema.optional(Schema.String).pipe(T.HttpQuery("stageId")),
    sortRuntime: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("sortRuntime"),
    ),
    taskStatus: Schema.optional(Schema.String).pipe(T.HttpQuery("taskStatus")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:searchStageAttemptTasks" }),
    svc,
  ) as unknown as Schema.Schema<SearchStageAttemptTasksProjectsLocationsBatchesSparkApplicationsRequest>;

export type SearchStageAttemptTasksProjectsLocationsBatchesSparkApplicationsResponse =
  SearchSparkApplicationStageAttemptTasksResponse;
export const SearchStageAttemptTasksProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSparkApplicationStageAttemptTasksResponse;

export type SearchStageAttemptTasksProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to tasks for a spark stage attempt for a Spark Application. */
export const searchStageAttemptTasksProjectsLocationsBatchesSparkApplications: API.PaginatedOperationMethod<
  SearchStageAttemptTasksProjectsLocationsBatchesSparkApplicationsRequest,
  SearchStageAttemptTasksProjectsLocationsBatchesSparkApplicationsResponse,
  SearchStageAttemptTasksProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    SearchStageAttemptTasksProjectsLocationsBatchesSparkApplicationsRequest,
  output:
    SearchStageAttemptTasksProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchExecutorsProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
  /** Optional. A page token received from a previous AccessSparkApplicationExecutorsList call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Optional. Filter to select whether active/ dead or all executors should be selected. */
  executorStatus?:
    | "EXECUTOR_STATUS_UNSPECIFIED"
    | "EXECUTOR_STATUS_ACTIVE"
    | "EXECUTOR_STATUS_DEAD"
    | (string & {});
  /** Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
}

export const SearchExecutorsProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    executorStatus: Schema.optional(Schema.String).pipe(
      T.HttpQuery("executorStatus"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:searchExecutors" }),
    svc,
  ) as unknown as Schema.Schema<SearchExecutorsProjectsLocationsBatchesSparkApplicationsRequest>;

export type SearchExecutorsProjectsLocationsBatchesSparkApplicationsResponse =
  SearchSparkApplicationExecutorsResponse;
export const SearchExecutorsProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSparkApplicationExecutorsResponse;

export type SearchExecutorsProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to executors for a Spark Application. */
export const searchExecutorsProjectsLocationsBatchesSparkApplications: API.PaginatedOperationMethod<
  SearchExecutorsProjectsLocationsBatchesSparkApplicationsRequest,
  SearchExecutorsProjectsLocationsBatchesSparkApplicationsResponse,
  SearchExecutorsProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchExecutorsProjectsLocationsBatchesSparkApplicationsRequest,
  output: SearchExecutorsProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SummarizeExecutorsProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
}

export const SummarizeExecutorsProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:summarizeExecutors" }),
    svc,
  ) as unknown as Schema.Schema<SummarizeExecutorsProjectsLocationsBatchesSparkApplicationsRequest>;

export type SummarizeExecutorsProjectsLocationsBatchesSparkApplicationsResponse =
  SummarizeSparkApplicationExecutorsResponse;
export const SummarizeExecutorsProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SummarizeSparkApplicationExecutorsResponse;

export type SummarizeExecutorsProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain summary of Executor Summary for a Spark Application */
export const summarizeExecutorsProjectsLocationsBatchesSparkApplications: API.OperationMethod<
  SummarizeExecutorsProjectsLocationsBatchesSparkApplicationsRequest,
  SummarizeExecutorsProjectsLocationsBatchesSparkApplicationsResponse,
  SummarizeExecutorsProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SummarizeExecutorsProjectsLocationsBatchesSparkApplicationsRequest,
  output: SummarizeExecutorsProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchProjectsLocationsBatchesSparkApplicationsRequest {
  /** Optional. Earliest end timestamp to list. */
  minEndTime?: string;
  /** Optional. Maximum number of applications to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100. */
  pageSize?: number;
  /** Optional. A page token received from a previous SearchSparkApplications call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. Latest start timestamp to list. */
  maxTime?: string;
  /** Optional. Latest end timestamp to list. */
  maxEndTime?: string;
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID" */
  parent: string;
  /** Optional. Search only applications in the chosen state. */
  applicationStatus?:
    | "APPLICATION_STATUS_UNSPECIFIED"
    | "APPLICATION_STATUS_RUNNING"
    | "APPLICATION_STATUS_COMPLETED"
    | (string & {});
  /** Optional. Earliest start timestamp to list. */
  minTime?: string;
}

export const SearchProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minEndTime: Schema.optional(Schema.String).pipe(T.HttpQuery("minEndTime")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    maxTime: Schema.optional(Schema.String).pipe(T.HttpQuery("maxTime")),
    maxEndTime: Schema.optional(Schema.String).pipe(T.HttpQuery("maxEndTime")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    applicationStatus: Schema.optional(Schema.String).pipe(
      T.HttpQuery("applicationStatus"),
    ),
    minTime: Schema.optional(Schema.String).pipe(T.HttpQuery("minTime")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/sparkApplications:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsLocationsBatchesSparkApplicationsRequest>;

export type SearchProjectsLocationsBatchesSparkApplicationsResponse =
  SearchSparkApplicationsResponse;
export const SearchProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchSparkApplicationsResponse;

export type SearchProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain high level information and list of Spark Applications corresponding to a batch */
export const searchProjectsLocationsBatchesSparkApplications: API.PaginatedOperationMethod<
  SearchProjectsLocationsBatchesSparkApplicationsRequest,
  SearchProjectsLocationsBatchesSparkApplicationsResponse,
  SearchProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchProjectsLocationsBatchesSparkApplicationsRequest,
  output: SearchProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SummarizeStageAttemptTasksProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
  /** Required. Stage ID */
  stageId?: string;
  /** Required. Stage Attempt ID */
  stageAttemptId?: number;
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
}

export const SummarizeStageAttemptTasksProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    stageId: Schema.optional(Schema.String).pipe(T.HttpQuery("stageId")),
    stageAttemptId: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("stageAttemptId"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:summarizeStageAttemptTasks" }),
    svc,
  ) as unknown as Schema.Schema<SummarizeStageAttemptTasksProjectsLocationsBatchesSparkApplicationsRequest>;

export type SummarizeStageAttemptTasksProjectsLocationsBatchesSparkApplicationsResponse =
  SummarizeSparkApplicationStageAttemptTasksResponse;
export const SummarizeStageAttemptTasksProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SummarizeSparkApplicationStageAttemptTasksResponse;

export type SummarizeStageAttemptTasksProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain summary of Tasks for a Spark Application Stage Attempt */
export const summarizeStageAttemptTasksProjectsLocationsBatchesSparkApplications: API.OperationMethod<
  SummarizeStageAttemptTasksProjectsLocationsBatchesSparkApplicationsRequest,
  SummarizeStageAttemptTasksProjectsLocationsBatchesSparkApplicationsResponse,
  SummarizeStageAttemptTasksProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    SummarizeStageAttemptTasksProjectsLocationsBatchesSparkApplicationsRequest,
  output:
    SummarizeStageAttemptTasksProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SummarizeStagesProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
}

export const SummarizeStagesProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:summarizeStages" }),
    svc,
  ) as unknown as Schema.Schema<SummarizeStagesProjectsLocationsBatchesSparkApplicationsRequest>;

export type SummarizeStagesProjectsLocationsBatchesSparkApplicationsResponse =
  SummarizeSparkApplicationStagesResponse;
export const SummarizeStagesProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SummarizeSparkApplicationStagesResponse;

export type SummarizeStagesProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain summary of Stages for a Spark Application */
export const summarizeStagesProjectsLocationsBatchesSparkApplications: API.OperationMethod<
  SummarizeStagesProjectsLocationsBatchesSparkApplicationsRequest,
  SummarizeStagesProjectsLocationsBatchesSparkApplicationsResponse,
  SummarizeStagesProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SummarizeStagesProjectsLocationsBatchesSparkApplicationsRequest,
  output: SummarizeStagesProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AccessStageAttemptProjectsLocationsBatchesSparkApplicationsRequest {
  /** Required. The fully qualified name of the batch to retrieve in the format "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID/sparkApplications/APPLICATION_ID" */
  name: string;
  /** Required. Stage ID */
  stageId?: string;
  /** Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field */
  summaryMetricsMask?: string;
  /** Required. Stage Attempt ID */
  stageAttemptId?: number;
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
}

export const AccessStageAttemptProjectsLocationsBatchesSparkApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    stageId: Schema.optional(Schema.String).pipe(T.HttpQuery("stageId")),
    summaryMetricsMask: Schema.optional(Schema.String).pipe(
      T.HttpQuery("summaryMetricsMask"),
    ),
    stageAttemptId: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("stageAttemptId"),
    ),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:accessStageAttempt" }),
    svc,
  ) as unknown as Schema.Schema<AccessStageAttemptProjectsLocationsBatchesSparkApplicationsRequest>;

export type AccessStageAttemptProjectsLocationsBatchesSparkApplicationsResponse =
  AccessSparkApplicationStageAttemptResponse;
export const AccessStageAttemptProjectsLocationsBatchesSparkApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessSparkApplicationStageAttemptResponse;

export type AccessStageAttemptProjectsLocationsBatchesSparkApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Obtain data corresponding to a spark stage attempt for a Spark Application. */
export const accessStageAttemptProjectsLocationsBatchesSparkApplications: API.OperationMethod<
  AccessStageAttemptProjectsLocationsBatchesSparkApplicationsRequest,
  AccessStageAttemptProjectsLocationsBatchesSparkApplicationsResponse,
  AccessStageAttemptProjectsLocationsBatchesSparkApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessStageAttemptProjectsLocationsBatchesSparkApplicationsRequest,
  output: AccessStageAttemptProjectsLocationsBatchesSparkApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsSessionTemplatesRequest {
  /** Required. The parent resource where this session template will be created. */
  parent: string;
  /** Request body */
  body?: SessionTemplate;
}

export const CreateProjectsLocationsSessionTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SessionTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/sessionTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSessionTemplatesRequest>;

export type CreateProjectsLocationsSessionTemplatesResponse = SessionTemplate;
export const CreateProjectsLocationsSessionTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SessionTemplate;

export type CreateProjectsLocationsSessionTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a session template synchronously. */
export const createProjectsLocationsSessionTemplates: API.OperationMethod<
  CreateProjectsLocationsSessionTemplatesRequest,
  CreateProjectsLocationsSessionTemplatesResponse,
  CreateProjectsLocationsSessionTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSessionTemplatesRequest,
  output: CreateProjectsLocationsSessionTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSessionTemplatesRequest {
  /** Required. The parent that owns this collection of session templates. */
  parent: string;
  /** Optional. The maximum number of sessions to return in each response. The service may return fewer than this value. */
  pageSize?: number;
  /** Optional. A page token received from a previous ListSessions call. Provide this token to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. A filter for the session templates to return in the response. Filters are case sensitive and have the following syntax:field = value AND field = value ... */
  filter?: string;
}

export const ListProjectsLocationsSessionTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/sessionTemplates" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSessionTemplatesRequest>;

export type ListProjectsLocationsSessionTemplatesResponse =
  ListSessionTemplatesResponse;
export const ListProjectsLocationsSessionTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSessionTemplatesResponse;

export type ListProjectsLocationsSessionTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists session templates. */
export const listProjectsLocationsSessionTemplates: API.PaginatedOperationMethod<
  ListProjectsLocationsSessionTemplatesRequest,
  ListProjectsLocationsSessionTemplatesResponse,
  ListProjectsLocationsSessionTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSessionTemplatesRequest,
  output: ListProjectsLocationsSessionTemplatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsSessionTemplatesRequest {
  /** Required. The name of the session template resource to delete. */
  name: string;
}

export const DeleteProjectsLocationsSessionTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSessionTemplatesRequest>;

export type DeleteProjectsLocationsSessionTemplatesResponse = Empty;
export const DeleteProjectsLocationsSessionTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsSessionTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a session template. */
export const deleteProjectsLocationsSessionTemplates: API.OperationMethod<
  DeleteProjectsLocationsSessionTemplatesRequest,
  DeleteProjectsLocationsSessionTemplatesResponse,
  DeleteProjectsLocationsSessionTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSessionTemplatesRequest,
  output: DeleteProjectsLocationsSessionTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsSessionTemplatesRequest {
  /** Required. Identifier. The resource name of the session template. */
  name: string;
  /** Request body */
  body?: SessionTemplate;
}

export const PatchProjectsLocationsSessionTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SessionTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSessionTemplatesRequest>;

export type PatchProjectsLocationsSessionTemplatesResponse = SessionTemplate;
export const PatchProjectsLocationsSessionTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SessionTemplate;

export type PatchProjectsLocationsSessionTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the session template synchronously. */
export const patchProjectsLocationsSessionTemplates: API.OperationMethod<
  PatchProjectsLocationsSessionTemplatesRequest,
  PatchProjectsLocationsSessionTemplatesResponse,
  PatchProjectsLocationsSessionTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSessionTemplatesRequest,
  output: PatchProjectsLocationsSessionTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSessionTemplatesRequest {
  /** Required. The name of the session template to retrieve. */
  name: string;
}

export const GetProjectsLocationsSessionTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSessionTemplatesRequest>;

export type GetProjectsLocationsSessionTemplatesResponse = SessionTemplate;
export const GetProjectsLocationsSessionTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SessionTemplate;

export type GetProjectsLocationsSessionTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the resource representation for a session template. */
export const getProjectsLocationsSessionTemplates: API.OperationMethod<
  GetProjectsLocationsSessionTemplatesRequest,
  GetProjectsLocationsSessionTemplatesResponse,
  GetProjectsLocationsSessionTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSessionTemplatesRequest,
  output: GetProjectsLocationsSessionTemplatesResponse,
  errors: [NotFound, Forbidden],
}));
