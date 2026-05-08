// ==========================================================================
// Cloud Natural Language API (language v2)
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
  name: "language",
  version: "v2",
  rootUrl: "https://language.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface XPSCommonStats {
  distinctValueCount?: string;
  nullValueCount?: string;
  validValueCount?: string;
}

export const XPSCommonStats: Schema.Schema<XPSCommonStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    distinctValueCount: Schema.optional(Schema.String),
    nullValueCount: Schema.optional(Schema.String),
    validValueCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSCommonStats" });

export interface XPSTimestampStatsGranularStats {
  /** A map from granularity key to example count for that key. E.g. for hour_of_day `13` means 1pm, or for month_of_year `5` means May). */
  buckets?: Record<string, string>;
}

export const XPSTimestampStatsGranularStats: Schema.Schema<XPSTimestampStatsGranularStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buckets: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "XPSTimestampStatsGranularStats" });

export interface XPSTimestampStats {
  medianTimestampNanos?: string;
  commonStats?: XPSCommonStats;
  /** The string key is the pre-defined granularity. Currently supported: hour_of_day, day_of_week, month_of_year. Granularities finer that the granularity of timestamp data are not populated (e.g. if timestamps are at day granularity, then hour_of_day is not populated). */
  granularStats?: Record<string, XPSTimestampStatsGranularStats>;
}

export const XPSTimestampStats: Schema.Schema<XPSTimestampStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    medianTimestampNanos: Schema.optional(Schema.String),
    commonStats: Schema.optional(XPSCommonStats),
    granularStats: Schema.optional(
      Schema.Record(Schema.String, XPSTimestampStatsGranularStats),
    ),
  }).annotate({ identifier: "XPSTimestampStats" });

export interface XPSCategoryStatsSingleCategoryStats {
  /** The CATEGORY value. */
  value?: string;
  /** The number of occurrences of this value in the series. */
  count?: string;
}

export const XPSCategoryStatsSingleCategoryStats: Schema.Schema<XPSCategoryStatsSingleCategoryStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSCategoryStatsSingleCategoryStats" });

export interface XPSSpeechModelSpecSubModelSpec {
  /** If true then it means we have an enhanced version of the biasing models. */
  isEnhancedModel?: boolean;
  /** In S3, Recognition ClientContextId.client_id */
  clientId?: string;
  /** In S3, Recognition ClientContextId.context_id */
  contextId?: string;
  /** Type of the biasing model. */
  biasingModelType?:
    | "BIASING_MODEL_TYPE_UNSPECIFIED"
    | "COMMAND_AND_SEARCH"
    | "PHONE_CALL"
    | "VIDEO"
    | "DEFAULT"
    | (string & {});
}

export const XPSSpeechModelSpecSubModelSpec: Schema.Schema<XPSSpeechModelSpecSubModelSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isEnhancedModel: Schema.optional(Schema.Boolean),
    clientId: Schema.optional(Schema.String),
    contextId: Schema.optional(Schema.String),
    biasingModelType: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSSpeechModelSpecSubModelSpec" });

export interface XPSSpeechModelSpec {
  language?: string;
  /** Model specs for all submodels contained in this model. */
  subModelSpecs?: ReadonlyArray<XPSSpeechModelSpecSubModelSpec>;
  /** Required for speech xps backend. Speech xps has to use dataset_id and model_id as the primary key in db so that speech API can query the db directly. */
  datasetId?: string;
}

export const XPSSpeechModelSpec: Schema.Schema<XPSSpeechModelSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    language: Schema.optional(Schema.String),
    subModelSpecs: Schema.optional(
      Schema.Array(XPSSpeechModelSpecSubModelSpec),
    ),
    datasetId: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSSpeechModelSpec" });

export interface XPSVideoTrainingOperationMetadata {
  /** This is an estimation of the node hours necessary for training a model, expressed in milli node hours (i.e. 1,000 value in this field means 1 node hour). A node hour represents the time a virtual machine spends running your training job. The cost of one node running for one hour is a node hour. */
  trainCostMilliNodeHour?: string;
}

export const XPSVideoTrainingOperationMetadata: Schema.Schema<XPSVideoTrainingOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trainCostMilliNodeHour: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSVideoTrainingOperationMetadata" });

export interface XPSMetricEntryLabel {
  /** The name of the label. */
  labelName?: string;
  /** The value of the label. */
  labelValue?: string;
}

export const XPSMetricEntryLabel: Schema.Schema<XPSMetricEntryLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelName: Schema.optional(Schema.String),
    labelValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSMetricEntryLabel" });

export interface XPSMetricEntry {
  /** Billing system labels for this (metric, value) pair. */
  systemLabels?: ReadonlyArray<XPSMetricEntryLabel>;
  /** A double value. */
  doubleValue?: number;
  /** The metric name defined in the service configuration. */
  metricName?: string;
  /** For billing metrics that are using legacy sku's, set the legacy billing metric id here. This will be sent to Chemist as the "cloudbilling.googleapis.com/argentum_metric_id" label. Otherwise leave empty. */
  argentumMetricId?: string;
  /** A signed 64-bit integer value. */
  int64Value?: string;
}

export const XPSMetricEntry: Schema.Schema<XPSMetricEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    systemLabels: Schema.optional(Schema.Array(XPSMetricEntryLabel)),
    doubleValue: Schema.optional(Schema.Number),
    metricName: Schema.optional(Schema.String),
    argentumMetricId: Schema.optional(Schema.String),
    int64Value: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSMetricEntry" });

export interface XPSReportingMetrics {
  /** One entry per metric name. The values must be aggregated per metric name. */
  metricEntries?: ReadonlyArray<XPSMetricEntry>;
  /** The effective time training used. If set, this is used for quota management and billing. Deprecated. AutoML BE doesn't use this. Don't set. */
  effectiveTrainingDuration?: string;
}

export const XPSReportingMetrics: Schema.Schema<XPSReportingMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricEntries: Schema.optional(Schema.Array(XPSMetricEntry)),
    effectiveTrainingDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSReportingMetrics" });

export interface XPSTablesModelStructureModelParametersParameter {
  /** Parameter name. */
  name?: string;
  /** Float type parameter value. */
  floatValue?: number;
  /** Integer type parameter value. */
  intValue?: string;
  /** String type parameter value. */
  stringValue?: string;
}

export const XPSTablesModelStructureModelParametersParameter: Schema.Schema<XPSTablesModelStructureModelParametersParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    floatValue: Schema.optional(Schema.Number),
    intValue: Schema.optional(Schema.String),
    stringValue: Schema.optional(Schema.String),
  }).annotate({
    identifier: "XPSTablesModelStructureModelParametersParameter",
  });

export interface XPSTablesModelStructureModelParameters {
  hyperparameters?: ReadonlyArray<XPSTablesModelStructureModelParametersParameter>;
}

export const XPSTablesModelStructureModelParameters: Schema.Schema<XPSTablesModelStructureModelParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hyperparameters: Schema.optional(
      Schema.Array(XPSTablesModelStructureModelParametersParameter),
    ),
  }).annotate({ identifier: "XPSTablesModelStructureModelParameters" });

export interface XPSTablesModelStructure {
  /** A list of models. */
  modelParameters?: ReadonlyArray<XPSTablesModelStructureModelParameters>;
}

export const XPSTablesModelStructure: Schema.Schema<XPSTablesModelStructure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelParameters: Schema.optional(
      Schema.Array(XPSTablesModelStructureModelParameters),
    ),
  }).annotate({ identifier: "XPSTablesModelStructure" });

export interface XPSTrainingObjectivePoint {
  /** The objective value when this point was recorded. */
  value?: number;
  /** The time at which this point was recorded. */
  createTime?: string;
}

export const XPSTrainingObjectivePoint: Schema.Schema<XPSTrainingObjectivePoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSTrainingObjectivePoint" });

export interface XPSTuningTrial {
  /** Model parameters for the trial. */
  modelStructure?: XPSTablesModelStructure;
  /** The optimization objective evaluation of the eval split data. */
  trainingObjectivePoint?: XPSTrainingObjectivePoint;
}

export const XPSTuningTrial: Schema.Schema<XPSTuningTrial> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelStructure: Schema.optional(XPSTablesModelStructure),
    trainingObjectivePoint: Schema.optional(XPSTrainingObjectivePoint),
  }).annotate({ identifier: "XPSTuningTrial" });

export interface XPSTablesTrainingOperationMetadata {
  /** This field is for training. When the operation is terminated successfully, AutoML Backend post this field to operation metadata in spanner. If the metadata has no trials returned, the training operation is supposed to be a failure. */
  topTrials?: ReadonlyArray<XPSTuningTrial>;
  /** This field records the training objective value with respect to time, giving insight into how the model architecture search is performing as training time elapses. */
  trainingObjectivePoints?: ReadonlyArray<XPSTrainingObjectivePoint>;
  /** The optimization objective for model. */
  optimizationObjective?: string;
  /** Current stage of creating model. */
  createModelStage?:
    | "CREATE_MODEL_STAGE_UNSPECIFIED"
    | "DATA_PREPROCESSING"
    | "TRAINING"
    | "EVALUATING"
    | "MODEL_POST_PROCESSING"
    | (string & {});
  /** Timestamp when training process starts. */
  trainingStartTime?: string;
  /** Creating model budget. */
  trainBudgetMilliNodeHours?: string;
}

export const XPSTablesTrainingOperationMetadata: Schema.Schema<XPSTablesTrainingOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topTrials: Schema.optional(Schema.Array(XPSTuningTrial)),
    trainingObjectivePoints: Schema.optional(
      Schema.Array(XPSTrainingObjectivePoint),
    ),
    optimizationObjective: Schema.optional(Schema.String),
    createModelStage: Schema.optional(Schema.String),
    trainingStartTime: Schema.optional(Schema.String),
    trainBudgetMilliNodeHours: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSTablesTrainingOperationMetadata" });

export interface CpuMetric {
  /** Required. Machine spec, e.g. N1_STANDARD_4. */
  machineSpec?:
    | "UNKNOWN_MACHINE_SPEC"
    | "N1_STANDARD_2"
    | "N1_STANDARD_4"
    | "N1_STANDARD_8"
    | "N1_STANDARD_16"
    | "N1_STANDARD_32"
    | "N1_STANDARD_64"
    | "N1_STANDARD_96"
    | "N1_HIGHMEM_2"
    | "N1_HIGHMEM_4"
    | "N1_HIGHMEM_8"
    | "N1_HIGHMEM_16"
    | "N1_HIGHMEM_32"
    | "N1_HIGHMEM_64"
    | "N1_HIGHMEM_96"
    | "N1_HIGHCPU_2"
    | "N1_HIGHCPU_4"
    | "N1_HIGHCPU_8"
    | "N1_HIGHCPU_16"
    | "N1_HIGHCPU_32"
    | "N1_HIGHCPU_64"
    | "N1_HIGHCPU_96"
    | "A2_HIGHGPU_1G"
    | "A2_HIGHGPU_2G"
    | "A2_HIGHGPU_4G"
    | "A2_HIGHGPU_8G"
    | "A2_MEGAGPU_16G"
    | "A2_ULTRAGPU_1G"
    | "A2_ULTRAGPU_2G"
    | "A2_ULTRAGPU_4G"
    | "A2_ULTRAGPU_8G"
    | "A3_HIGHGPU_1G"
    | "A3_HIGHGPU_2G"
    | "A3_HIGHGPU_4G"
    | "A3_HIGHGPU_8G"
    | "A3_MEGAGPU_8G"
    | "A3_ULTRAGPU_8G"
    | "A3_EDGEGPU_8G"
    | "A4_HIGHGPU_8G"
    | "A4X_HIGHGPU_4G"
    | "E2_STANDARD_2"
    | "E2_STANDARD_4"
    | "E2_STANDARD_8"
    | "E2_STANDARD_16"
    | "E2_STANDARD_32"
    | "E2_HIGHMEM_2"
    | "E2_HIGHMEM_4"
    | "E2_HIGHMEM_8"
    | "E2_HIGHMEM_16"
    | "E2_HIGHCPU_2"
    | "E2_HIGHCPU_4"
    | "E2_HIGHCPU_8"
    | "E2_HIGHCPU_16"
    | "E2_HIGHCPU_32"
    | "N2_STANDARD_2"
    | "N2_STANDARD_4"
    | "N2_STANDARD_8"
    | "N2_STANDARD_16"
    | "N2_STANDARD_32"
    | "N2_STANDARD_48"
    | "N2_STANDARD_64"
    | "N2_STANDARD_80"
    | "N2_STANDARD_96"
    | "N2_STANDARD_128"
    | "N2_HIGHMEM_2"
    | "N2_HIGHMEM_4"
    | "N2_HIGHMEM_8"
    | "N2_HIGHMEM_16"
    | "N2_HIGHMEM_32"
    | "N2_HIGHMEM_48"
    | "N2_HIGHMEM_64"
    | "N2_HIGHMEM_80"
    | "N2_HIGHMEM_96"
    | "N2_HIGHMEM_128"
    | "N2_HIGHCPU_2"
    | "N2_HIGHCPU_4"
    | "N2_HIGHCPU_8"
    | "N2_HIGHCPU_16"
    | "N2_HIGHCPU_32"
    | "N2_HIGHCPU_48"
    | "N2_HIGHCPU_64"
    | "N2_HIGHCPU_80"
    | "N2_HIGHCPU_96"
    | "N2D_STANDARD_2"
    | "N2D_STANDARD_4"
    | "N2D_STANDARD_8"
    | "N2D_STANDARD_16"
    | "N2D_STANDARD_32"
    | "N2D_STANDARD_48"
    | "N2D_STANDARD_64"
    | "N2D_STANDARD_80"
    | "N2D_STANDARD_96"
    | "N2D_STANDARD_128"
    | "N2D_STANDARD_224"
    | "N2D_HIGHMEM_2"
    | "N2D_HIGHMEM_4"
    | "N2D_HIGHMEM_8"
    | "N2D_HIGHMEM_16"
    | "N2D_HIGHMEM_32"
    | "N2D_HIGHMEM_48"
    | "N2D_HIGHMEM_64"
    | "N2D_HIGHMEM_80"
    | "N2D_HIGHMEM_96"
    | "N2D_HIGHCPU_2"
    | "N2D_HIGHCPU_4"
    | "N2D_HIGHCPU_8"
    | "N2D_HIGHCPU_16"
    | "N2D_HIGHCPU_32"
    | "N2D_HIGHCPU_48"
    | "N2D_HIGHCPU_64"
    | "N2D_HIGHCPU_80"
    | "N2D_HIGHCPU_96"
    | "N2D_HIGHCPU_128"
    | "N2D_HIGHCPU_224"
    | "C2_STANDARD_4"
    | "C2_STANDARD_8"
    | "C2_STANDARD_16"
    | "C2_STANDARD_30"
    | "C2_STANDARD_60"
    | "C2D_STANDARD_2"
    | "C2D_STANDARD_4"
    | "C2D_STANDARD_8"
    | "C2D_STANDARD_16"
    | "C2D_STANDARD_32"
    | "C2D_STANDARD_56"
    | "C2D_STANDARD_112"
    | "C2D_HIGHCPU_2"
    | "C2D_HIGHCPU_4"
    | "C2D_HIGHCPU_8"
    | "C2D_HIGHCPU_16"
    | "C2D_HIGHCPU_32"
    | "C2D_HIGHCPU_56"
    | "C2D_HIGHCPU_112"
    | "C2D_HIGHMEM_2"
    | "C2D_HIGHMEM_4"
    | "C2D_HIGHMEM_8"
    | "C2D_HIGHMEM_16"
    | "C2D_HIGHMEM_32"
    | "C2D_HIGHMEM_56"
    | "C2D_HIGHMEM_112"
    | "G2_STANDARD_4"
    | "G2_STANDARD_8"
    | "G2_STANDARD_12"
    | "G2_STANDARD_16"
    | "G2_STANDARD_24"
    | "G2_STANDARD_32"
    | "G2_STANDARD_48"
    | "G2_STANDARD_96"
    | "G4_STANDARD_48"
    | "C3_STANDARD_4"
    | "C3_STANDARD_8"
    | "C3_STANDARD_22"
    | "C3_STANDARD_44"
    | "C3_STANDARD_88"
    | "C3_STANDARD_176"
    | "C3_HIGHCPU_4"
    | "C3_HIGHCPU_8"
    | "C3_HIGHCPU_22"
    | "C3_HIGHCPU_44"
    | "C3_HIGHCPU_88"
    | "C3_HIGHCPU_176"
    | "C3_HIGHMEM_4"
    | "C3_HIGHMEM_8"
    | "C3_HIGHMEM_22"
    | "C3_HIGHMEM_44"
    | "C3_HIGHMEM_88"
    | "C3_HIGHMEM_176"
    | "C4_STANDARD_8"
    | "C4_STANDARD_16"
    | "C4_STANDARD_24"
    | "C4_STANDARD_32"
    | "C4_STANDARD_48"
    | "C4_STANDARD_96"
    | "C4_STANDARD_144"
    | "C4_STANDARD_192"
    | "C4_STANDARD_288"
    | "C4_HIGHCPU_8"
    | "C4_HIGHCPU_16"
    | "C4_HIGHCPU_24"
    | "C4_HIGHCPU_32"
    | "C4_HIGHCPU_48"
    | "C4_HIGHCPU_96"
    | "C4_HIGHCPU_144"
    | "C4_HIGHCPU_192"
    | "C4_HIGHCPU_288"
    | "C4_HIGHMEM_8"
    | "C4_HIGHMEM_16"
    | "C4_HIGHMEM_24"
    | "C4_HIGHMEM_32"
    | "C4_HIGHMEM_48"
    | "C4_HIGHMEM_96"
    | "C4_HIGHMEM_144"
    | "C4_HIGHMEM_192"
    | "C4_HIGHMEM_288"
    | "C4A_STANDARD_8"
    | "C4A_STANDARD_16"
    | "C4A_STANDARD_32"
    | "C4A_STANDARD_48"
    | "C4A_STANDARD_64"
    | "C4A_STANDARD_72"
    | "C4A_HIGHCPU_8"
    | "C4A_HIGHCPU_16"
    | "C4A_HIGHCPU_32"
    | "C4A_HIGHCPU_48"
    | "C4A_HIGHCPU_64"
    | "C4A_HIGHCPU_72"
    | "C4A_HIGHMEM_8"
    | "C4A_HIGHMEM_16"
    | "C4A_HIGHMEM_32"
    | "C4A_HIGHMEM_48"
    | "C4A_HIGHMEM_64"
    | "C4A_HIGHMEM_72"
    | "C4D_STANDARD_8"
    | "C4D_STANDARD_16"
    | "C4D_STANDARD_32"
    | "C4D_STANDARD_48"
    | "C4D_STANDARD_64"
    | "C4D_STANDARD_96"
    | "C4D_STANDARD_192"
    | "C4D_STANDARD_384"
    | "C4D_HIGHCPU_8"
    | "C4D_HIGHCPU_16"
    | "C4D_HIGHCPU_32"
    | "C4D_HIGHCPU_48"
    | "C4D_HIGHCPU_64"
    | "C4D_HIGHCPU_96"
    | "C4D_HIGHCPU_192"
    | "C4D_HIGHCPU_384"
    | "C4D_HIGHMEM_8"
    | "C4D_HIGHMEM_16"
    | "C4D_HIGHMEM_32"
    | "C4D_HIGHMEM_48"
    | "C4D_HIGHMEM_64"
    | "C4D_HIGHMEM_96"
    | "C4D_HIGHMEM_192"
    | "C4D_HIGHMEM_384"
    | "N4_STANDARD_2"
    | "N4_STANDARD_4"
    | "N4_STANDARD_8"
    | "N4_STANDARD_16"
    | "N4_STANDARD_32"
    | "N4_STANDARD_48"
    | "N4_STANDARD_64"
    | "N4_STANDARD_80"
    | "N4_HIGHCPU_2"
    | "N4_HIGHCPU_4"
    | "N4_HIGHCPU_8"
    | "N4_HIGHCPU_16"
    | "N4_HIGHCPU_32"
    | "N4_HIGHCPU_48"
    | "N4_HIGHCPU_64"
    | "N4_HIGHCPU_80"
    | "N4_HIGHMEM_2"
    | "N4_HIGHMEM_4"
    | "N4_HIGHMEM_8"
    | "N4_HIGHMEM_16"
    | "N4_HIGHMEM_32"
    | "N4_HIGHMEM_48"
    | "N4_HIGHMEM_64"
    | "N4_HIGHMEM_80"
    | "N4A_STANDARD_8"
    | "N4A_STANDARD_16"
    | "N4A_STANDARD_32"
    | "N4A_STANDARD_48"
    | "N4A_STANDARD_64"
    | "N4A_HIGHCPU_8"
    | "N4A_HIGHCPU_16"
    | "N4A_HIGHCPU_32"
    | "N4A_HIGHCPU_48"
    | "N4A_HIGHCPU_64"
    | "N4A_HIGHMEM_8"
    | "N4A_HIGHMEM_16"
    | "N4A_HIGHMEM_32"
    | "N4A_HIGHMEM_48"
    | "N4A_HIGHMEM_64"
    | "C3D_STANDARD_8"
    | "C3D_STANDARD_16"
    | "C3D_STANDARD_30"
    | "C3D_STANDARD_60"
    | "C3D_STANDARD_90"
    | "C3D_STANDARD_180"
    | "C3D_STANDARD_360"
    | "C3D_HIGHCPU_8"
    | "C3D_HIGHCPU_16"
    | "C3D_HIGHCPU_30"
    | "C3D_HIGHCPU_60"
    | "C3D_HIGHCPU_90"
    | "C3D_HIGHCPU_180"
    | "C3D_HIGHCPU_360"
    | "C3D_HIGHMEM_8"
    | "C3D_HIGHMEM_16"
    | "C3D_HIGHMEM_30"
    | "C3D_HIGHMEM_60"
    | "C3D_HIGHMEM_90"
    | "C3D_HIGHMEM_180"
    | "C3D_HIGHMEM_360"
    | (string & {});
  /** Required. Type of cpu, e.g. N2. */
  cpuType?:
    | "UNKNOWN_CPU_TYPE"
    | "A2"
    | "A3"
    | "A4"
    | "A4X"
    | "C2"
    | "C2D"
    | "CUSTOM"
    | "E2"
    | "G2"
    | "G4"
    | "C3"
    | "C4"
    | "C4A"
    | "C4D"
    | "N4"
    | "N4A"
    | "C3D"
    | "M2"
    | "M1"
    | "N1"
    | "N2_CUSTOM"
    | "N2"
    | "N2D"
    | (string & {});
  /** Required. Number of CPU cores. */
  coreNumber?: string;
  /** Billing tracking labels. They do not contain any user data but only the labels set by Vertex Core Infra itself. Tracking labels' keys are defined with special format: goog-[\p{Ll}\p{N}]+ E.g. "key": "goog-k8s-cluster-name","value": "us-east1-b4rk" */
  trackingLabels?: Record<string, string>;
  /** Required. Total seconds of core usage, e.g. 4. */
  coreSec?: string;
}

export const CpuMetric: Schema.Schema<CpuMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineSpec: Schema.optional(Schema.String),
    cpuType: Schema.optional(Schema.String),
    coreNumber: Schema.optional(Schema.String),
    trackingLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    coreSec: Schema.optional(Schema.String),
  }).annotate({ identifier: "CpuMetric" });

export interface TpuMetric {
  /** Required. Seconds of TPU usage, e.g. 3600. */
  tpuSec?: string;
  /** Required. Type of TPU, e.g. TPU_V2, TPU_V3_POD. */
  tpuType?:
    | "UNKNOWN_TPU_TYPE"
    | "TPU_V2_POD"
    | "TPU_V2"
    | "TPU_V3_POD"
    | "TPU_V3"
    | "TPU_V5_LITEPOD"
    | (string & {});
}

export const TpuMetric: Schema.Schema<TpuMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tpuSec: Schema.optional(Schema.String),
    tpuType: Schema.optional(Schema.String),
  }).annotate({ identifier: "TpuMetric" });

export interface DiskMetric {
  /** Required. Type of Disk, e.g. REGIONAL_SSD. */
  diskType?:
    | "UNKNOWN_DISK_TYPE"
    | "REGIONAL_SSD"
    | "REGIONAL_STORAGE"
    | "PD_SSD"
    | "PD_STANDARD"
    | "STORAGE_SNAPSHOT"
    | (string & {});
  /** Required. Seconds of physical disk usage, e.g. 3600. */
  gibSec?: string;
}

export const DiskMetric: Schema.Schema<DiskMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskType: Schema.optional(Schema.String),
    gibSec: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskMetric" });

export interface RamMetric {
  /** Required. VM memory in gb. */
  memories?: number;
  /** Required. Type of ram. */
  ramType?:
    | "UNKNOWN_RAM_TYPE"
    | "A2"
    | "A3"
    | "A4"
    | "A4X"
    | "C2"
    | "C2D"
    | "CUSTOM"
    | "E2"
    | "G2"
    | "G4"
    | "C4"
    | "C4A"
    | "C4D"
    | "N4"
    | "N4A"
    | "C3D"
    | "C3"
    | "M2"
    | "M1"
    | "N1"
    | "N2_CUSTOM"
    | "N2"
    | "N2D"
    | (string & {});
  /** Required. VM memory in Gigabyte second, e.g. 3600. Using int64 type to match billing metrics definition. */
  gibSec?: string;
  /** Billing tracking labels. They do not contain any user data but only the labels set by Vertex Core Infra itself. Tracking labels' keys are defined with special format: goog-[\p{Ll}\p{N}]+ E.g. "key": "goog-k8s-cluster-name","value": "us-east1-b4rk" */
  trackingLabels?: Record<string, string>;
  /** Required. Machine spec, e.g. N1_STANDARD_4. */
  machineSpec?:
    | "UNKNOWN_MACHINE_SPEC"
    | "N1_STANDARD_2"
    | "N1_STANDARD_4"
    | "N1_STANDARD_8"
    | "N1_STANDARD_16"
    | "N1_STANDARD_32"
    | "N1_STANDARD_64"
    | "N1_STANDARD_96"
    | "N1_HIGHMEM_2"
    | "N1_HIGHMEM_4"
    | "N1_HIGHMEM_8"
    | "N1_HIGHMEM_16"
    | "N1_HIGHMEM_32"
    | "N1_HIGHMEM_64"
    | "N1_HIGHMEM_96"
    | "N1_HIGHCPU_2"
    | "N1_HIGHCPU_4"
    | "N1_HIGHCPU_8"
    | "N1_HIGHCPU_16"
    | "N1_HIGHCPU_32"
    | "N1_HIGHCPU_64"
    | "N1_HIGHCPU_96"
    | "A2_HIGHGPU_1G"
    | "A2_HIGHGPU_2G"
    | "A2_HIGHGPU_4G"
    | "A2_HIGHGPU_8G"
    | "A2_MEGAGPU_16G"
    | "A2_ULTRAGPU_1G"
    | "A2_ULTRAGPU_2G"
    | "A2_ULTRAGPU_4G"
    | "A2_ULTRAGPU_8G"
    | "A3_HIGHGPU_1G"
    | "A3_HIGHGPU_2G"
    | "A3_HIGHGPU_4G"
    | "A3_HIGHGPU_8G"
    | "A3_MEGAGPU_8G"
    | "A3_ULTRAGPU_8G"
    | "A3_EDGEGPU_8G"
    | "A4_HIGHGPU_8G"
    | "A4X_HIGHGPU_4G"
    | "E2_STANDARD_2"
    | "E2_STANDARD_4"
    | "E2_STANDARD_8"
    | "E2_STANDARD_16"
    | "E2_STANDARD_32"
    | "E2_HIGHMEM_2"
    | "E2_HIGHMEM_4"
    | "E2_HIGHMEM_8"
    | "E2_HIGHMEM_16"
    | "E2_HIGHCPU_2"
    | "E2_HIGHCPU_4"
    | "E2_HIGHCPU_8"
    | "E2_HIGHCPU_16"
    | "E2_HIGHCPU_32"
    | "N2_STANDARD_2"
    | "N2_STANDARD_4"
    | "N2_STANDARD_8"
    | "N2_STANDARD_16"
    | "N2_STANDARD_32"
    | "N2_STANDARD_48"
    | "N2_STANDARD_64"
    | "N2_STANDARD_80"
    | "N2_STANDARD_96"
    | "N2_STANDARD_128"
    | "N2_HIGHMEM_2"
    | "N2_HIGHMEM_4"
    | "N2_HIGHMEM_8"
    | "N2_HIGHMEM_16"
    | "N2_HIGHMEM_32"
    | "N2_HIGHMEM_48"
    | "N2_HIGHMEM_64"
    | "N2_HIGHMEM_80"
    | "N2_HIGHMEM_96"
    | "N2_HIGHMEM_128"
    | "N2_HIGHCPU_2"
    | "N2_HIGHCPU_4"
    | "N2_HIGHCPU_8"
    | "N2_HIGHCPU_16"
    | "N2_HIGHCPU_32"
    | "N2_HIGHCPU_48"
    | "N2_HIGHCPU_64"
    | "N2_HIGHCPU_80"
    | "N2_HIGHCPU_96"
    | "N2D_STANDARD_2"
    | "N2D_STANDARD_4"
    | "N2D_STANDARD_8"
    | "N2D_STANDARD_16"
    | "N2D_STANDARD_32"
    | "N2D_STANDARD_48"
    | "N2D_STANDARD_64"
    | "N2D_STANDARD_80"
    | "N2D_STANDARD_96"
    | "N2D_STANDARD_128"
    | "N2D_STANDARD_224"
    | "N2D_HIGHMEM_2"
    | "N2D_HIGHMEM_4"
    | "N2D_HIGHMEM_8"
    | "N2D_HIGHMEM_16"
    | "N2D_HIGHMEM_32"
    | "N2D_HIGHMEM_48"
    | "N2D_HIGHMEM_64"
    | "N2D_HIGHMEM_80"
    | "N2D_HIGHMEM_96"
    | "N2D_HIGHCPU_2"
    | "N2D_HIGHCPU_4"
    | "N2D_HIGHCPU_8"
    | "N2D_HIGHCPU_16"
    | "N2D_HIGHCPU_32"
    | "N2D_HIGHCPU_48"
    | "N2D_HIGHCPU_64"
    | "N2D_HIGHCPU_80"
    | "N2D_HIGHCPU_96"
    | "N2D_HIGHCPU_128"
    | "N2D_HIGHCPU_224"
    | "C2_STANDARD_4"
    | "C2_STANDARD_8"
    | "C2_STANDARD_16"
    | "C2_STANDARD_30"
    | "C2_STANDARD_60"
    | "C2D_STANDARD_2"
    | "C2D_STANDARD_4"
    | "C2D_STANDARD_8"
    | "C2D_STANDARD_16"
    | "C2D_STANDARD_32"
    | "C2D_STANDARD_56"
    | "C2D_STANDARD_112"
    | "C2D_HIGHCPU_2"
    | "C2D_HIGHCPU_4"
    | "C2D_HIGHCPU_8"
    | "C2D_HIGHCPU_16"
    | "C2D_HIGHCPU_32"
    | "C2D_HIGHCPU_56"
    | "C2D_HIGHCPU_112"
    | "C2D_HIGHMEM_2"
    | "C2D_HIGHMEM_4"
    | "C2D_HIGHMEM_8"
    | "C2D_HIGHMEM_16"
    | "C2D_HIGHMEM_32"
    | "C2D_HIGHMEM_56"
    | "C2D_HIGHMEM_112"
    | "G2_STANDARD_4"
    | "G2_STANDARD_8"
    | "G2_STANDARD_12"
    | "G2_STANDARD_16"
    | "G2_STANDARD_24"
    | "G2_STANDARD_32"
    | "G2_STANDARD_48"
    | "G2_STANDARD_96"
    | "G4_STANDARD_48"
    | "C3_STANDARD_4"
    | "C3_STANDARD_8"
    | "C3_STANDARD_22"
    | "C3_STANDARD_44"
    | "C3_STANDARD_88"
    | "C3_STANDARD_176"
    | "C3_HIGHCPU_4"
    | "C3_HIGHCPU_8"
    | "C3_HIGHCPU_22"
    | "C3_HIGHCPU_44"
    | "C3_HIGHCPU_88"
    | "C3_HIGHCPU_176"
    | "C3_HIGHMEM_4"
    | "C3_HIGHMEM_8"
    | "C3_HIGHMEM_22"
    | "C3_HIGHMEM_44"
    | "C3_HIGHMEM_88"
    | "C3_HIGHMEM_176"
    | "C4_STANDARD_8"
    | "C4_STANDARD_16"
    | "C4_STANDARD_24"
    | "C4_STANDARD_32"
    | "C4_STANDARD_48"
    | "C4_STANDARD_96"
    | "C4_STANDARD_144"
    | "C4_STANDARD_192"
    | "C4_STANDARD_288"
    | "C4_HIGHCPU_8"
    | "C4_HIGHCPU_16"
    | "C4_HIGHCPU_24"
    | "C4_HIGHCPU_32"
    | "C4_HIGHCPU_48"
    | "C4_HIGHCPU_96"
    | "C4_HIGHCPU_144"
    | "C4_HIGHCPU_192"
    | "C4_HIGHCPU_288"
    | "C4_HIGHMEM_8"
    | "C4_HIGHMEM_16"
    | "C4_HIGHMEM_24"
    | "C4_HIGHMEM_32"
    | "C4_HIGHMEM_48"
    | "C4_HIGHMEM_96"
    | "C4_HIGHMEM_144"
    | "C4_HIGHMEM_192"
    | "C4_HIGHMEM_288"
    | "C4A_STANDARD_8"
    | "C4A_STANDARD_16"
    | "C4A_STANDARD_32"
    | "C4A_STANDARD_48"
    | "C4A_STANDARD_64"
    | "C4A_STANDARD_72"
    | "C4A_HIGHCPU_8"
    | "C4A_HIGHCPU_16"
    | "C4A_HIGHCPU_32"
    | "C4A_HIGHCPU_48"
    | "C4A_HIGHCPU_64"
    | "C4A_HIGHCPU_72"
    | "C4A_HIGHMEM_8"
    | "C4A_HIGHMEM_16"
    | "C4A_HIGHMEM_32"
    | "C4A_HIGHMEM_48"
    | "C4A_HIGHMEM_64"
    | "C4A_HIGHMEM_72"
    | "C4D_STANDARD_8"
    | "C4D_STANDARD_16"
    | "C4D_STANDARD_32"
    | "C4D_STANDARD_48"
    | "C4D_STANDARD_64"
    | "C4D_STANDARD_96"
    | "C4D_STANDARD_192"
    | "C4D_STANDARD_384"
    | "C4D_HIGHCPU_8"
    | "C4D_HIGHCPU_16"
    | "C4D_HIGHCPU_32"
    | "C4D_HIGHCPU_48"
    | "C4D_HIGHCPU_64"
    | "C4D_HIGHCPU_96"
    | "C4D_HIGHCPU_192"
    | "C4D_HIGHCPU_384"
    | "C4D_HIGHMEM_8"
    | "C4D_HIGHMEM_16"
    | "C4D_HIGHMEM_32"
    | "C4D_HIGHMEM_48"
    | "C4D_HIGHMEM_64"
    | "C4D_HIGHMEM_96"
    | "C4D_HIGHMEM_192"
    | "C4D_HIGHMEM_384"
    | "N4_STANDARD_2"
    | "N4_STANDARD_4"
    | "N4_STANDARD_8"
    | "N4_STANDARD_16"
    | "N4_STANDARD_32"
    | "N4_STANDARD_48"
    | "N4_STANDARD_64"
    | "N4_STANDARD_80"
    | "N4_HIGHCPU_2"
    | "N4_HIGHCPU_4"
    | "N4_HIGHCPU_8"
    | "N4_HIGHCPU_16"
    | "N4_HIGHCPU_32"
    | "N4_HIGHCPU_48"
    | "N4_HIGHCPU_64"
    | "N4_HIGHCPU_80"
    | "N4_HIGHMEM_2"
    | "N4_HIGHMEM_4"
    | "N4_HIGHMEM_8"
    | "N4_HIGHMEM_16"
    | "N4_HIGHMEM_32"
    | "N4_HIGHMEM_48"
    | "N4_HIGHMEM_64"
    | "N4_HIGHMEM_80"
    | "N4A_STANDARD_8"
    | "N4A_STANDARD_16"
    | "N4A_STANDARD_32"
    | "N4A_STANDARD_48"
    | "N4A_STANDARD_64"
    | "N4A_HIGHCPU_8"
    | "N4A_HIGHCPU_16"
    | "N4A_HIGHCPU_32"
    | "N4A_HIGHCPU_48"
    | "N4A_HIGHCPU_64"
    | "N4A_HIGHMEM_8"
    | "N4A_HIGHMEM_16"
    | "N4A_HIGHMEM_32"
    | "N4A_HIGHMEM_48"
    | "N4A_HIGHMEM_64"
    | "C3D_STANDARD_8"
    | "C3D_STANDARD_16"
    | "C3D_STANDARD_30"
    | "C3D_STANDARD_60"
    | "C3D_STANDARD_90"
    | "C3D_STANDARD_180"
    | "C3D_STANDARD_360"
    | "C3D_HIGHCPU_8"
    | "C3D_HIGHCPU_16"
    | "C3D_HIGHCPU_30"
    | "C3D_HIGHCPU_60"
    | "C3D_HIGHCPU_90"
    | "C3D_HIGHCPU_180"
    | "C3D_HIGHCPU_360"
    | "C3D_HIGHMEM_8"
    | "C3D_HIGHMEM_16"
    | "C3D_HIGHMEM_30"
    | "C3D_HIGHMEM_60"
    | "C3D_HIGHMEM_90"
    | "C3D_HIGHMEM_180"
    | "C3D_HIGHMEM_360"
    | (string & {});
}

export const RamMetric: Schema.Schema<RamMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memories: Schema.optional(Schema.Number),
    ramType: Schema.optional(Schema.String),
    gibSec: Schema.optional(Schema.String),
    trackingLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    machineSpec: Schema.optional(Schema.String),
  }).annotate({ identifier: "RamMetric" });

export interface GpuMetric {
  /** Required. Type of GPU, e.g. NVIDIA_TESLA_V100. */
  gpuType?:
    | "UNKNOWN_GPU_TYPE"
    | "NVIDIA_TESLA_A100"
    | "NVIDIA_A100_80GB"
    | "NVIDIA_B200"
    | "NVIDIA_GB200"
    | "NVIDIA_TESLA_K80"
    | "NVIDIA_L4"
    | "NVIDIA_TESLA_P100"
    | "NVIDIA_TESLA_P4"
    | "NVIDIA_TESLA_T4"
    | "NVIDIA_TESLA_V100"
    | "NVIDIA_H100_80GB"
    | "NVIDIA_H100_MEGA_80GB"
    | "NVIDIA_H200_141GB"
    | "NVIDIA_RTX_PRO_6000"
    | (string & {});
  /** Required. Seconds of GPU usage, e.g. 3600. */
  gpuSec?: string;
  /** Required. Machine spec, e.g. N1_STANDARD_4. */
  machineSpec?:
    | "UNKNOWN_MACHINE_SPEC"
    | "N1_STANDARD_2"
    | "N1_STANDARD_4"
    | "N1_STANDARD_8"
    | "N1_STANDARD_16"
    | "N1_STANDARD_32"
    | "N1_STANDARD_64"
    | "N1_STANDARD_96"
    | "N1_HIGHMEM_2"
    | "N1_HIGHMEM_4"
    | "N1_HIGHMEM_8"
    | "N1_HIGHMEM_16"
    | "N1_HIGHMEM_32"
    | "N1_HIGHMEM_64"
    | "N1_HIGHMEM_96"
    | "N1_HIGHCPU_2"
    | "N1_HIGHCPU_4"
    | "N1_HIGHCPU_8"
    | "N1_HIGHCPU_16"
    | "N1_HIGHCPU_32"
    | "N1_HIGHCPU_64"
    | "N1_HIGHCPU_96"
    | "A2_HIGHGPU_1G"
    | "A2_HIGHGPU_2G"
    | "A2_HIGHGPU_4G"
    | "A2_HIGHGPU_8G"
    | "A2_MEGAGPU_16G"
    | "A2_ULTRAGPU_1G"
    | "A2_ULTRAGPU_2G"
    | "A2_ULTRAGPU_4G"
    | "A2_ULTRAGPU_8G"
    | "A3_HIGHGPU_1G"
    | "A3_HIGHGPU_2G"
    | "A3_HIGHGPU_4G"
    | "A3_HIGHGPU_8G"
    | "A3_MEGAGPU_8G"
    | "A3_ULTRAGPU_8G"
    | "A3_EDGEGPU_8G"
    | "A4_HIGHGPU_8G"
    | "A4X_HIGHGPU_4G"
    | "E2_STANDARD_2"
    | "E2_STANDARD_4"
    | "E2_STANDARD_8"
    | "E2_STANDARD_16"
    | "E2_STANDARD_32"
    | "E2_HIGHMEM_2"
    | "E2_HIGHMEM_4"
    | "E2_HIGHMEM_8"
    | "E2_HIGHMEM_16"
    | "E2_HIGHCPU_2"
    | "E2_HIGHCPU_4"
    | "E2_HIGHCPU_8"
    | "E2_HIGHCPU_16"
    | "E2_HIGHCPU_32"
    | "N2_STANDARD_2"
    | "N2_STANDARD_4"
    | "N2_STANDARD_8"
    | "N2_STANDARD_16"
    | "N2_STANDARD_32"
    | "N2_STANDARD_48"
    | "N2_STANDARD_64"
    | "N2_STANDARD_80"
    | "N2_STANDARD_96"
    | "N2_STANDARD_128"
    | "N2_HIGHMEM_2"
    | "N2_HIGHMEM_4"
    | "N2_HIGHMEM_8"
    | "N2_HIGHMEM_16"
    | "N2_HIGHMEM_32"
    | "N2_HIGHMEM_48"
    | "N2_HIGHMEM_64"
    | "N2_HIGHMEM_80"
    | "N2_HIGHMEM_96"
    | "N2_HIGHMEM_128"
    | "N2_HIGHCPU_2"
    | "N2_HIGHCPU_4"
    | "N2_HIGHCPU_8"
    | "N2_HIGHCPU_16"
    | "N2_HIGHCPU_32"
    | "N2_HIGHCPU_48"
    | "N2_HIGHCPU_64"
    | "N2_HIGHCPU_80"
    | "N2_HIGHCPU_96"
    | "N2D_STANDARD_2"
    | "N2D_STANDARD_4"
    | "N2D_STANDARD_8"
    | "N2D_STANDARD_16"
    | "N2D_STANDARD_32"
    | "N2D_STANDARD_48"
    | "N2D_STANDARD_64"
    | "N2D_STANDARD_80"
    | "N2D_STANDARD_96"
    | "N2D_STANDARD_128"
    | "N2D_STANDARD_224"
    | "N2D_HIGHMEM_2"
    | "N2D_HIGHMEM_4"
    | "N2D_HIGHMEM_8"
    | "N2D_HIGHMEM_16"
    | "N2D_HIGHMEM_32"
    | "N2D_HIGHMEM_48"
    | "N2D_HIGHMEM_64"
    | "N2D_HIGHMEM_80"
    | "N2D_HIGHMEM_96"
    | "N2D_HIGHCPU_2"
    | "N2D_HIGHCPU_4"
    | "N2D_HIGHCPU_8"
    | "N2D_HIGHCPU_16"
    | "N2D_HIGHCPU_32"
    | "N2D_HIGHCPU_48"
    | "N2D_HIGHCPU_64"
    | "N2D_HIGHCPU_80"
    | "N2D_HIGHCPU_96"
    | "N2D_HIGHCPU_128"
    | "N2D_HIGHCPU_224"
    | "C2_STANDARD_4"
    | "C2_STANDARD_8"
    | "C2_STANDARD_16"
    | "C2_STANDARD_30"
    | "C2_STANDARD_60"
    | "C2D_STANDARD_2"
    | "C2D_STANDARD_4"
    | "C2D_STANDARD_8"
    | "C2D_STANDARD_16"
    | "C2D_STANDARD_32"
    | "C2D_STANDARD_56"
    | "C2D_STANDARD_112"
    | "C2D_HIGHCPU_2"
    | "C2D_HIGHCPU_4"
    | "C2D_HIGHCPU_8"
    | "C2D_HIGHCPU_16"
    | "C2D_HIGHCPU_32"
    | "C2D_HIGHCPU_56"
    | "C2D_HIGHCPU_112"
    | "C2D_HIGHMEM_2"
    | "C2D_HIGHMEM_4"
    | "C2D_HIGHMEM_8"
    | "C2D_HIGHMEM_16"
    | "C2D_HIGHMEM_32"
    | "C2D_HIGHMEM_56"
    | "C2D_HIGHMEM_112"
    | "G2_STANDARD_4"
    | "G2_STANDARD_8"
    | "G2_STANDARD_12"
    | "G2_STANDARD_16"
    | "G2_STANDARD_24"
    | "G2_STANDARD_32"
    | "G2_STANDARD_48"
    | "G2_STANDARD_96"
    | "G4_STANDARD_48"
    | "C3_STANDARD_4"
    | "C3_STANDARD_8"
    | "C3_STANDARD_22"
    | "C3_STANDARD_44"
    | "C3_STANDARD_88"
    | "C3_STANDARD_176"
    | "C3_HIGHCPU_4"
    | "C3_HIGHCPU_8"
    | "C3_HIGHCPU_22"
    | "C3_HIGHCPU_44"
    | "C3_HIGHCPU_88"
    | "C3_HIGHCPU_176"
    | "C3_HIGHMEM_4"
    | "C3_HIGHMEM_8"
    | "C3_HIGHMEM_22"
    | "C3_HIGHMEM_44"
    | "C3_HIGHMEM_88"
    | "C3_HIGHMEM_176"
    | "C4_STANDARD_8"
    | "C4_STANDARD_16"
    | "C4_STANDARD_24"
    | "C4_STANDARD_32"
    | "C4_STANDARD_48"
    | "C4_STANDARD_96"
    | "C4_STANDARD_144"
    | "C4_STANDARD_192"
    | "C4_STANDARD_288"
    | "C4_HIGHCPU_8"
    | "C4_HIGHCPU_16"
    | "C4_HIGHCPU_24"
    | "C4_HIGHCPU_32"
    | "C4_HIGHCPU_48"
    | "C4_HIGHCPU_96"
    | "C4_HIGHCPU_144"
    | "C4_HIGHCPU_192"
    | "C4_HIGHCPU_288"
    | "C4_HIGHMEM_8"
    | "C4_HIGHMEM_16"
    | "C4_HIGHMEM_24"
    | "C4_HIGHMEM_32"
    | "C4_HIGHMEM_48"
    | "C4_HIGHMEM_96"
    | "C4_HIGHMEM_144"
    | "C4_HIGHMEM_192"
    | "C4_HIGHMEM_288"
    | "C4A_STANDARD_8"
    | "C4A_STANDARD_16"
    | "C4A_STANDARD_32"
    | "C4A_STANDARD_48"
    | "C4A_STANDARD_64"
    | "C4A_STANDARD_72"
    | "C4A_HIGHCPU_8"
    | "C4A_HIGHCPU_16"
    | "C4A_HIGHCPU_32"
    | "C4A_HIGHCPU_48"
    | "C4A_HIGHCPU_64"
    | "C4A_HIGHCPU_72"
    | "C4A_HIGHMEM_8"
    | "C4A_HIGHMEM_16"
    | "C4A_HIGHMEM_32"
    | "C4A_HIGHMEM_48"
    | "C4A_HIGHMEM_64"
    | "C4A_HIGHMEM_72"
    | "C4D_STANDARD_8"
    | "C4D_STANDARD_16"
    | "C4D_STANDARD_32"
    | "C4D_STANDARD_48"
    | "C4D_STANDARD_64"
    | "C4D_STANDARD_96"
    | "C4D_STANDARD_192"
    | "C4D_STANDARD_384"
    | "C4D_HIGHCPU_8"
    | "C4D_HIGHCPU_16"
    | "C4D_HIGHCPU_32"
    | "C4D_HIGHCPU_48"
    | "C4D_HIGHCPU_64"
    | "C4D_HIGHCPU_96"
    | "C4D_HIGHCPU_192"
    | "C4D_HIGHCPU_384"
    | "C4D_HIGHMEM_8"
    | "C4D_HIGHMEM_16"
    | "C4D_HIGHMEM_32"
    | "C4D_HIGHMEM_48"
    | "C4D_HIGHMEM_64"
    | "C4D_HIGHMEM_96"
    | "C4D_HIGHMEM_192"
    | "C4D_HIGHMEM_384"
    | "N4_STANDARD_2"
    | "N4_STANDARD_4"
    | "N4_STANDARD_8"
    | "N4_STANDARD_16"
    | "N4_STANDARD_32"
    | "N4_STANDARD_48"
    | "N4_STANDARD_64"
    | "N4_STANDARD_80"
    | "N4_HIGHCPU_2"
    | "N4_HIGHCPU_4"
    | "N4_HIGHCPU_8"
    | "N4_HIGHCPU_16"
    | "N4_HIGHCPU_32"
    | "N4_HIGHCPU_48"
    | "N4_HIGHCPU_64"
    | "N4_HIGHCPU_80"
    | "N4_HIGHMEM_2"
    | "N4_HIGHMEM_4"
    | "N4_HIGHMEM_8"
    | "N4_HIGHMEM_16"
    | "N4_HIGHMEM_32"
    | "N4_HIGHMEM_48"
    | "N4_HIGHMEM_64"
    | "N4_HIGHMEM_80"
    | "N4A_STANDARD_8"
    | "N4A_STANDARD_16"
    | "N4A_STANDARD_32"
    | "N4A_STANDARD_48"
    | "N4A_STANDARD_64"
    | "N4A_HIGHCPU_8"
    | "N4A_HIGHCPU_16"
    | "N4A_HIGHCPU_32"
    | "N4A_HIGHCPU_48"
    | "N4A_HIGHCPU_64"
    | "N4A_HIGHMEM_8"
    | "N4A_HIGHMEM_16"
    | "N4A_HIGHMEM_32"
    | "N4A_HIGHMEM_48"
    | "N4A_HIGHMEM_64"
    | "C3D_STANDARD_8"
    | "C3D_STANDARD_16"
    | "C3D_STANDARD_30"
    | "C3D_STANDARD_60"
    | "C3D_STANDARD_90"
    | "C3D_STANDARD_180"
    | "C3D_STANDARD_360"
    | "C3D_HIGHCPU_8"
    | "C3D_HIGHCPU_16"
    | "C3D_HIGHCPU_30"
    | "C3D_HIGHCPU_60"
    | "C3D_HIGHCPU_90"
    | "C3D_HIGHCPU_180"
    | "C3D_HIGHCPU_360"
    | "C3D_HIGHMEM_8"
    | "C3D_HIGHMEM_16"
    | "C3D_HIGHMEM_30"
    | "C3D_HIGHMEM_60"
    | "C3D_HIGHMEM_90"
    | "C3D_HIGHMEM_180"
    | "C3D_HIGHMEM_360"
    | (string & {});
  /** Billing tracking labels. They do not contain any user data but only the labels set by Vertex Core Infra itself. Tracking labels' keys are defined with special format: goog-[\p{Ll}\p{N}]+ E.g. "key": "goog-k8s-cluster-name","value": "us-east1-b4rk" */
  trackingLabels?: Record<string, string>;
}

export const GpuMetric: Schema.Schema<GpuMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gpuType: Schema.optional(Schema.String),
    gpuSec: Schema.optional(Schema.String),
    machineSpec: Schema.optional(Schema.String),
    trackingLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "GpuMetric" });

export interface InfraUsage {
  /** Aggregated core metrics since requested start_time. */
  cpuMetrics?: ReadonlyArray<CpuMetric>;
  /** Aggregated tpu metrics since requested start_time. */
  tpuMetrics?: ReadonlyArray<TpuMetric>;
  /** Aggregated persistent disk metrics since requested start_time. */
  diskMetrics?: ReadonlyArray<DiskMetric>;
  /** Aggregated ram metrics since requested start_time. */
  ramMetrics?: ReadonlyArray<RamMetric>;
  /** Aggregated gpu metrics since requested start_time. */
  gpuMetrics?: ReadonlyArray<GpuMetric>;
}

export const InfraUsage: Schema.Schema<InfraUsage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpuMetrics: Schema.optional(Schema.Array(CpuMetric)),
    tpuMetrics: Schema.optional(Schema.Array(TpuMetric)),
    diskMetrics: Schema.optional(Schema.Array(DiskMetric)),
    ramMetrics: Schema.optional(Schema.Array(RamMetric)),
    gpuMetrics: Schema.optional(Schema.Array(GpuMetric)),
  }).annotate({ identifier: "InfraUsage" });

export interface XPSVisionTrainingOperationMetadata {
  /** Aggregated infra usage within certain time period, for billing report purpose if XAI is enable in training request. */
  explanationUsage?: InfraUsage;
}

export const XPSVisionTrainingOperationMetadata: Schema.Schema<XPSVisionTrainingOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    explanationUsage: Schema.optional(InfraUsage),
  }).annotate({ identifier: "XPSVisionTrainingOperationMetadata" });

export interface XPSVideoBatchPredictOperationMetadata {
  /** All the partial batch prediction results that are completed at the moment. Output examples are sorted by completion time. The order will not be changed. Each output example should be the path of a single RecordIO file of AnnotatedExamples. */
  outputExamples?: ReadonlyArray<string>;
}

export const XPSVideoBatchPredictOperationMetadata: Schema.Schema<XPSVideoBatchPredictOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputExamples: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "XPSVideoBatchPredictOperationMetadata" });

export interface XPSXpsOperationMetadata {
  videoTrainingOperationMetadata?: XPSVideoTrainingOperationMetadata;
  /** Metrics for the operation. By the time the operation is terminated (whether succeeded or failed) as returned from XPS, AutoML BE assumes the metrics are finalized. AutoML BE transparently posts the metrics to Chemist if it's not empty, regardless of the response content or error type. If user is supposed to be charged in case of cancellation/error, this field should be set. In the case where the type of LRO doesn't require any billing, this field should be left unset. */
  reportingMetrics?: XPSReportingMetrics;
  /** Optional. XPS server can opt to provide example count of the long running operation (e.g. training, data importing, batch prediction). */
  exampleCount?: string;
  tablesTrainingOperationMetadata?: XPSTablesTrainingOperationMetadata;
  visionTrainingOperationMetadata?: XPSVisionTrainingOperationMetadata;
  videoBatchPredictOperationMetadata?: XPSVideoBatchPredictOperationMetadata;
}

export const XPSXpsOperationMetadata: Schema.Schema<XPSXpsOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    videoTrainingOperationMetadata: Schema.optional(
      XPSVideoTrainingOperationMetadata,
    ),
    reportingMetrics: Schema.optional(XPSReportingMetrics),
    exampleCount: Schema.optional(Schema.String),
    tablesTrainingOperationMetadata: Schema.optional(
      XPSTablesTrainingOperationMetadata,
    ),
    visionTrainingOperationMetadata: Schema.optional(
      XPSVisionTrainingOperationMetadata,
    ),
    videoBatchPredictOperationMetadata: Schema.optional(
      XPSVideoBatchPredictOperationMetadata,
    ),
  }).annotate({ identifier: "XPSXpsOperationMetadata" });

export interface Document {
  /** Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an `INVALID_ARGUMENT` error. */
  type?: "TYPE_UNSPECIFIED" | "PLAIN_TEXT" | "HTML" | (string & {});
  /** The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported. */
  gcsContentUri?: string;
  /** The content of the input in string format. Cloud audit logging exempt since it is based on user data. */
  content?: string;
  /** Optional. The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. [Language Support](https://cloud.google.com/natural-language/docs/languages) lists currently supported languages for each API method. If the language (either specified by the caller or automatically detected) is not supported by the called API method, an `INVALID_ARGUMENT` error is returned. */
  languageCode?: string;
}

export const Document: Schema.Schema<Document> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    gcsContentUri: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Document" });

export interface AnalyzeSentimentRequest {
  /** Required. Input document. */
  document?: Document;
  /** The encoding type used by the API to calculate sentence offsets. */
  encodingType?: "NONE" | "UTF8" | "UTF16" | "UTF32" | (string & {});
}

export const AnalyzeSentimentRequest: Schema.Schema<AnalyzeSentimentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    document: Schema.optional(Document),
    encodingType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnalyzeSentimentRequest" });

export interface ClassificationCategory {
  /** The name of the category representing the document. */
  name?: string;
  /** The classifier's confidence of the category. Number represents how certain the classifier is that this category represents the given text. */
  confidence?: number;
  /** Optional. The classifier's severity of the category. This is only present when the ModerateTextRequest.ModelVersion is set to MODEL_VERSION_2, and the corresponding category has a severity score. */
  severity?: number;
}

export const ClassificationCategory: Schema.Schema<ClassificationCategory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    severity: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ClassificationCategory" });

export interface ClassifyTextResponse {
  /** Categories representing the input document. */
  categories?: ReadonlyArray<ClassificationCategory>;
  /** Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. */
  languageSupported?: boolean;
  /** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language_code field for more details. */
  languageCode?: string;
}

export const ClassifyTextResponse: Schema.Schema<ClassifyTextResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    categories: Schema.optional(Schema.Array(ClassificationCategory)),
    languageSupported: Schema.optional(Schema.Boolean),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClassifyTextResponse" });

export interface XPSTranslationPreprocessResponse {
  /** Total example count parsed. */
  parsedExampleCount?: string;
  /** Total valid example count. */
  validExampleCount?: string;
}

export const XPSTranslationPreprocessResponse: Schema.Schema<XPSTranslationPreprocessResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parsedExampleCount: Schema.optional(Schema.String),
    validExampleCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSTranslationPreprocessResponse" });

export interface XPSFloat64StatsHistogramBucket {
  /** The number of data values that are in the bucket, i.e. are between min and max values. */
  count?: string;
  /** The minimum value of the bucket, inclusive. */
  min?: number;
  /** The maximum value of the bucket, exclusive unless max = `"Infinity"`, in which case it's inclusive. */
  max?: number;
}

export const XPSFloat64StatsHistogramBucket: Schema.Schema<XPSFloat64StatsHistogramBucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
    min: Schema.optional(Schema.Number),
    max: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSFloat64StatsHistogramBucket" });

export interface XPSFloat64Stats {
  commonStats?: XPSCommonStats;
  /** Histogram buckets of the data series. Sorted by the min value of the bucket, ascendingly, and the number of the buckets is dynamically generated. The buckets are non-overlapping and completely cover whole FLOAT64 range with min of first bucket being `"-Infinity"`, and max of the last one being `"Infinity"`. */
  histogramBuckets?: ReadonlyArray<XPSFloat64StatsHistogramBucket>;
  /** The standard deviation of the series. */
  standardDeviation?: number;
  /** Ordered from 0 to k k-quantile values of the data series of n values. The value at index i is, approximately, the i*n/k-th smallest value in the series; for i = 0 and i = k these are, respectively, the min and max values. */
  quantiles?: ReadonlyArray<number>;
  /** The mean of the series. */
  mean?: number;
}

export const XPSFloat64Stats: Schema.Schema<XPSFloat64Stats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commonStats: Schema.optional(XPSCommonStats),
    histogramBuckets: Schema.optional(
      Schema.Array(XPSFloat64StatsHistogramBucket),
    ),
    standardDeviation: Schema.optional(Schema.Number),
    quantiles: Schema.optional(Schema.Array(Schema.Number)),
    mean: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSFloat64Stats" });

export interface XPSRow {
  /** The ids of the columns. Note: The below `values` field must match order of this field, if this field is set. */
  columnIds?: ReadonlyArray<number>;
  /** The values of the row cells, given in the same order as the column_ids. If column_ids is not set, then in the same order as the input_feature_column_ids in TablesModelMetadata. */
  values?: ReadonlyArray<unknown>;
}

export const XPSRow: Schema.Schema<XPSRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columnIds: Schema.optional(Schema.Array(Schema.Number)),
    values: Schema.optional(Schema.Array(Schema.Unknown)),
  }).annotate({ identifier: "XPSRow" });

export interface XPSTablesConfidenceMetricsEntry {
  /** Recall = #true positives / (#true positives + #false negatives). */
  recall?: number;
  /** False positive count. */
  falsePositiveCount?: string;
  /** FPR = #false positives / (#false positives + #true negatives) */
  falsePositiveRate?: number;
  /** False negative count. */
  falseNegativeCount?: string;
  /** TPR = #true positives / (#true positives + #false negatvies) */
  truePositiveRate?: number;
  /** True negative count. */
  trueNegativeCount?: string;
  /** Precision = #true positives / (#true positives + #false positives). */
  precision?: number;
  /** The harmonic mean of recall and precision. (2 * precision * recall) / (precision + recall) */
  f1Score?: number;
  /** True positive count. */
  truePositiveCount?: string;
  /** The confidence threshold value used to compute the metrics. */
  confidenceThreshold?: number;
}

export const XPSTablesConfidenceMetricsEntry: Schema.Schema<XPSTablesConfidenceMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recall: Schema.optional(Schema.Number),
    falsePositiveCount: Schema.optional(Schema.String),
    falsePositiveRate: Schema.optional(Schema.Number),
    falseNegativeCount: Schema.optional(Schema.String),
    truePositiveRate: Schema.optional(Schema.Number),
    trueNegativeCount: Schema.optional(Schema.String),
    precision: Schema.optional(Schema.Number),
    f1Score: Schema.optional(Schema.Number),
    truePositiveCount: Schema.optional(Schema.String),
    confidenceThreshold: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSTablesConfidenceMetricsEntry" });

export interface XPSTablesClassificationMetricsCurveMetrics {
  /** The CATEGORY row value (for ARRAY unnested) the curve metrics are for. */
  value?: string;
  /** The position threshold value used to compute the metrics. */
  positionThreshold?: number;
  /** Metrics that have confidence thresholds. Precision-recall curve and ROC curve can be derived from them. */
  confidenceMetricsEntries?: ReadonlyArray<XPSTablesConfidenceMetricsEntry>;
  /** The area under receiver operating characteristic curve. */
  aucRoc?: number;
  /** The Log loss metric. */
  logLoss?: number;
  /** The area under the precision-recall curve. */
  aucPr?: number;
}

export const XPSTablesClassificationMetricsCurveMetrics: Schema.Schema<XPSTablesClassificationMetricsCurveMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    positionThreshold: Schema.optional(Schema.Number),
    confidenceMetricsEntries: Schema.optional(
      Schema.Array(XPSTablesConfidenceMetricsEntry),
    ),
    aucRoc: Schema.optional(Schema.Number),
    logLoss: Schema.optional(Schema.Number),
    aucPr: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSTablesClassificationMetricsCurveMetrics" });

export interface XPSTablesClassificationMetrics {
  /** Metrics building a curve. */
  curveMetrics?: ReadonlyArray<XPSTablesClassificationMetricsCurveMetrics>;
}

export const XPSTablesClassificationMetrics: Schema.Schema<XPSTablesClassificationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    curveMetrics: Schema.optional(
      Schema.Array(XPSTablesClassificationMetricsCurveMetrics),
    ),
  }).annotate({ identifier: "XPSTablesClassificationMetrics" });

export interface XPSRegressionMetricsEntry {
  /** The actual target value for a row in the dataset. */
  trueValue?: number;
  /** The observed value for a row in the dataset. */
  predictedValue?: number;
}

export const XPSRegressionMetricsEntry: Schema.Schema<XPSRegressionMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trueValue: Schema.optional(Schema.Number),
    predictedValue: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSRegressionMetricsEntry" });

export interface XPSTablesRegressionMetrics {
  /** Root mean squared error. */
  rootMeanSquaredError?: number;
  /** Mean absolute percentage error, only set if all of the target column's values are positive. */
  meanAbsolutePercentageError?: number;
  /** Mean absolute error. */
  meanAbsoluteError?: number;
  /** R squared. */
  rSquared?: number;
  /** A list of actual versus predicted points for the model being evaluated. */
  regressionMetricsEntries?: ReadonlyArray<XPSRegressionMetricsEntry>;
  /** Root mean squared log error. */
  rootMeanSquaredLogError?: number;
}

export const XPSTablesRegressionMetrics: Schema.Schema<XPSTablesRegressionMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rootMeanSquaredError: Schema.optional(Schema.Number),
    meanAbsolutePercentageError: Schema.optional(Schema.Number),
    meanAbsoluteError: Schema.optional(Schema.Number),
    rSquared: Schema.optional(Schema.Number),
    regressionMetricsEntries: Schema.optional(
      Schema.Array(XPSRegressionMetricsEntry),
    ),
    rootMeanSquaredLogError: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSTablesRegressionMetrics" });

export interface XPSTablesEvaluationMetrics {
  /** Classification metrics. */
  classificationMetrics?: XPSTablesClassificationMetrics;
  /** Regression metrics. */
  regressionMetrics?: XPSTablesRegressionMetrics;
}

export const XPSTablesEvaluationMetrics: Schema.Schema<XPSTablesEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    classificationMetrics: Schema.optional(XPSTablesClassificationMetrics),
    regressionMetrics: Schema.optional(XPSTablesRegressionMetrics),
  }).annotate({ identifier: "XPSTablesEvaluationMetrics" });

export interface XPSConfusionMatrixRow {
  /** Value of the specific cell in the confusion matrix. The number of values each row has (i.e. the length of the row) is equal to the length of the annotation_spec_id_token field. */
  exampleCount?: ReadonlyArray<number>;
  /** Same as above except intended to represent other counts (for e.g. for segmentation this is pixel count). NOTE(params): Only example_count or count is set (oneoff does not support repeated fields unless they are embedded inside another message). */
  count?: ReadonlyArray<string>;
}

export const XPSConfusionMatrixRow: Schema.Schema<XPSConfusionMatrixRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exampleCount: Schema.optional(Schema.Array(Schema.Number)),
    count: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "XPSConfusionMatrixRow" });

export interface XPSConfusionMatrix {
  /** For the following three repeated fields, only one is intended to be set. annotation_spec_id_token is preferable to be set. ID tokens of the annotation specs used in the confusion matrix. */
  annotationSpecIdToken?: ReadonlyArray<string>;
  /** Sentiment labels used in the confusion matrix. Set only for text sentiment models. For AutoML Text Revamp, use `annotation_spec_id_token` instead and leave this field empty. */
  sentimentLabel?: ReadonlyArray<number>;
  /** Category (mainly for segmentation). Set only for image segmentation models. Note: uCAIP Image Segmentation should use annotation_spec_id_token. */
  category?: ReadonlyArray<number>;
  /** Rows in the confusion matrix. The number of rows is equal to the size of `annotation_spec_id_token`. `row[i].value[j]` is the number of examples that have ground truth of the `annotation_spec_id_token[i]` and are predicted as `annotation_spec_id_token[j]` by the model being evaluated. */
  row?: ReadonlyArray<XPSConfusionMatrixRow>;
}

export const XPSConfusionMatrix: Schema.Schema<XPSConfusionMatrix> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    annotationSpecIdToken: Schema.optional(Schema.Array(Schema.String)),
    sentimentLabel: Schema.optional(Schema.Array(Schema.Number)),
    category: Schema.optional(Schema.Array(Schema.Number)),
    row: Schema.optional(Schema.Array(XPSConfusionMatrixRow)),
  }).annotate({ identifier: "XPSConfusionMatrix" });

export interface XPSConfidenceMetricsEntry {
  /** False Positive Rate for the given confidence threshold. */
  falsePositiveRate?: number;
  /** The recall (true positive rate) when only considering the label that has the highest prediction score and not below the confidence threshold for each example. */
  recallAt1?: number;
  /** The harmonic mean of recall_at1 and precision_at1. */
  f1ScoreAt1?: number;
  /** The precision when only considering the label that has the highest prediction score and not below the confidence threshold for each example. */
  precisionAt1?: number;
  /** The harmonic mean of recall and precision. */
  f1Score?: number;
  /** Recall (true positive rate) for the given confidence threshold. */
  recall?: number;
  /** Metrics are computed with an assumption that the model always returns at most this many predictions (ordered by their score, descendingly), but they all still need to meet the confidence_threshold. */
  positionThreshold?: number;
  /** The number of ground truth labels that are not matched by a model created label. */
  falseNegativeCount?: string;
  /** The number of model created labels that do not match a ground truth label. */
  falsePositiveCount?: string;
  /** Precision for the given confidence threshold. */
  precision?: number;
  /** The False Positive Rate when only considering the label that has the highest prediction score and not below the confidence threshold for each example. */
  falsePositiveRateAt1?: number;
  /** The number of labels that were not created by the model, but if they would, they would not match a ground truth label. */
  trueNegativeCount?: string;
  /** Metrics are computed with an assumption that the model never return predictions with score lower than this value. */
  confidenceThreshold?: number;
  /** The number of model created labels that match a ground truth label. */
  truePositiveCount?: string;
}

export const XPSConfidenceMetricsEntry: Schema.Schema<XPSConfidenceMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    falsePositiveRate: Schema.optional(Schema.Number),
    recallAt1: Schema.optional(Schema.Number),
    f1ScoreAt1: Schema.optional(Schema.Number),
    precisionAt1: Schema.optional(Schema.Number),
    f1Score: Schema.optional(Schema.Number),
    recall: Schema.optional(Schema.Number),
    positionThreshold: Schema.optional(Schema.Number),
    falseNegativeCount: Schema.optional(Schema.String),
    falsePositiveCount: Schema.optional(Schema.String),
    precision: Schema.optional(Schema.Number),
    falsePositiveRateAt1: Schema.optional(Schema.Number),
    trueNegativeCount: Schema.optional(Schema.String),
    confidenceThreshold: Schema.optional(Schema.Number),
    truePositiveCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSConfidenceMetricsEntry" });

export interface XPSClassificationEvaluationMetrics {
  /** The Log Loss metric. */
  logLoss?: number;
  /** The Area under precision recall curve metric based on priors. */
  baseAuPrc?: number;
  /** Confusion matrix of the evaluation. Only set for MULTICLASS classification problems where number of annotation specs is no more than 10. Only set for model level evaluation, not for evaluation per label. */
  confusionMatrix?: XPSConfusionMatrix;
  /** The number of examples used for model evaluation. */
  evaluatedExamplesCount?: number;
  /** The Area under precision recall curve metric. */
  auPrc?: number;
  /** The Area Under Receiver Operating Characteristic curve metric. Micro-averaged for the overall evaluation. */
  auRoc?: number;
  /** Metrics that have confidence thresholds. Precision-recall curve can be derived from it. */
  confidenceMetricsEntries?: ReadonlyArray<XPSConfidenceMetricsEntry>;
}

export const XPSClassificationEvaluationMetrics: Schema.Schema<XPSClassificationEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logLoss: Schema.optional(Schema.Number),
    baseAuPrc: Schema.optional(Schema.Number),
    confusionMatrix: Schema.optional(XPSConfusionMatrix),
    evaluatedExamplesCount: Schema.optional(Schema.Number),
    auPrc: Schema.optional(Schema.Number),
    auRoc: Schema.optional(Schema.Number),
    confidenceMetricsEntries: Schema.optional(
      Schema.Array(XPSConfidenceMetricsEntry),
    ),
  }).annotate({ identifier: "XPSClassificationEvaluationMetrics" });

export interface XPSTextSentimentEvaluationMetrics {
  /** Output only. Precision. */
  precision?: number;
  /** Output only. Recall. */
  recall?: number;
  /** Output only. Quadratic weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
  quadraticKappa?: number;
  /** Output only. Mean squared error. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
  meanSquaredError?: number;
  /** Output only. Linear weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
  linearKappa?: number;
  /** Output only. The harmonic mean of recall and precision. */
  f1Score?: number;
  /** Output only. Mean absolute error. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
  meanAbsoluteError?: number;
  /** Output only. Confusion matrix of the evaluation. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
  confusionMatrix?: XPSConfusionMatrix;
}

export const XPSTextSentimentEvaluationMetrics: Schema.Schema<XPSTextSentimentEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    precision: Schema.optional(Schema.Number),
    recall: Schema.optional(Schema.Number),
    quadraticKappa: Schema.optional(Schema.Number),
    meanSquaredError: Schema.optional(Schema.Number),
    linearKappa: Schema.optional(Schema.Number),
    f1Score: Schema.optional(Schema.Number),
    meanAbsoluteError: Schema.optional(Schema.Number),
    confusionMatrix: Schema.optional(XPSConfusionMatrix),
  }).annotate({ identifier: "XPSTextSentimentEvaluationMetrics" });

export interface XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry {
  /** The confidence threshold value used to compute the metrics. */
  confidenceThreshold?: number;
  /** IOU score. */
  iouScore?: number;
  /** Confusion matrix of the per confidence_threshold evaluation. Pixel counts are set here. Only set for model level evaluation, not for evaluation per label. */
  confusionMatrix?: XPSConfusionMatrix;
  /** Recall for the given confidence threshold. */
  recall?: number;
  /** Precision for the given confidence threshold. */
  precision?: number;
  /** DSC or the F1 score: The harmonic mean of recall and precision. */
  diceScoreCoefficient?: number;
}

export const XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry: Schema.Schema<XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidenceThreshold: Schema.optional(Schema.Number),
    iouScore: Schema.optional(Schema.Number),
    confusionMatrix: Schema.optional(XPSConfusionMatrix),
    recall: Schema.optional(Schema.Number),
    precision: Schema.optional(Schema.Number),
    diceScoreCoefficient: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry",
  });

export interface XPSImageSegmentationEvaluationMetrics {
  /** Metrics that have confidence thresholds. Precision-recall curve can be derived from it. */
  confidenceMetricsEntries?: ReadonlyArray<XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry>;
}

export const XPSImageSegmentationEvaluationMetrics: Schema.Schema<XPSImageSegmentationEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidenceMetricsEntries: Schema.optional(
      Schema.Array(XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry),
    ),
  }).annotate({ identifier: "XPSImageSegmentationEvaluationMetrics" });

export interface XPSVideoActionMetricsEntryConfidenceMetricsEntry {
  /** Output only. The harmonic mean of recall and precision. */
  f1Score?: number;
  /** Output only. The confidence threshold value used to compute the metrics. */
  confidenceThreshold?: number;
  /** Output only. Recall for the given confidence threshold. */
  recall?: number;
  /** Output only. Precision for the given confidence threshold. */
  precision?: number;
}

export const XPSVideoActionMetricsEntryConfidenceMetricsEntry: Schema.Schema<XPSVideoActionMetricsEntryConfidenceMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    f1Score: Schema.optional(Schema.Number),
    confidenceThreshold: Schema.optional(Schema.Number),
    recall: Schema.optional(Schema.Number),
    precision: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "XPSVideoActionMetricsEntryConfidenceMetricsEntry",
  });

export interface XPSVideoActionMetricsEntry {
  /** This VideoActionMetricsEntry is calculated based on this prediction window length. If the predicted action's timestamp is inside the time window whose center is the ground truth action's timestamp with this specific length, the prediction result is treated as a true positive. */
  precisionWindowLength?: string;
  /** Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. */
  confidenceMetricsEntries?: ReadonlyArray<XPSVideoActionMetricsEntryConfidenceMetricsEntry>;
  /** The mean average precision. */
  meanAveragePrecision?: number;
}

export const XPSVideoActionMetricsEntry: Schema.Schema<XPSVideoActionMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    precisionWindowLength: Schema.optional(Schema.String),
    confidenceMetricsEntries: Schema.optional(
      Schema.Array(XPSVideoActionMetricsEntryConfidenceMetricsEntry),
    ),
    meanAveragePrecision: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSVideoActionMetricsEntry" });

export interface XPSVideoActionRecognitionEvaluationMetrics {
  /** Output only. The number of ground truth actions used to create this evaluation. */
  evaluatedActionCount?: number;
  /** Output only. The metric entries for precision window lengths: 1s,2s,3s,4s, 5s. */
  videoActionMetricsEntries?: ReadonlyArray<XPSVideoActionMetricsEntry>;
}

export const XPSVideoActionRecognitionEvaluationMetrics: Schema.Schema<XPSVideoActionRecognitionEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluatedActionCount: Schema.optional(Schema.Number),
    videoActionMetricsEntries: Schema.optional(
      Schema.Array(XPSVideoActionMetricsEntry),
    ),
  }).annotate({ identifier: "XPSVideoActionRecognitionEvaluationMetrics" });

export interface XPSBoundingBoxMetricsEntryConfidenceMetricsEntry {
  /** The harmonic mean of recall and precision. */
  f1Score?: number;
  /** The confidence threshold value used to compute the metrics. */
  confidenceThreshold?: number;
  /** Recall for the given confidence threshold. */
  recall?: number;
  /** Precision for the given confidence threshold. */
  precision?: number;
}

export const XPSBoundingBoxMetricsEntryConfidenceMetricsEntry: Schema.Schema<XPSBoundingBoxMetricsEntryConfidenceMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    f1Score: Schema.optional(Schema.Number),
    confidenceThreshold: Schema.optional(Schema.Number),
    recall: Schema.optional(Schema.Number),
    precision: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "XPSBoundingBoxMetricsEntryConfidenceMetricsEntry",
  });

export interface XPSBoundingBoxMetricsEntry {
  /** The intersection-over-union threshold value used to compute this metrics entry. */
  iouThreshold?: number;
  /** Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. */
  confidenceMetricsEntries?: ReadonlyArray<XPSBoundingBoxMetricsEntryConfidenceMetricsEntry>;
  /** The mean average precision. */
  meanAveragePrecision?: number;
}

export const XPSBoundingBoxMetricsEntry: Schema.Schema<XPSBoundingBoxMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iouThreshold: Schema.optional(Schema.Number),
    confidenceMetricsEntries: Schema.optional(
      Schema.Array(XPSBoundingBoxMetricsEntryConfidenceMetricsEntry),
    ),
    meanAveragePrecision: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSBoundingBoxMetricsEntry" });

export interface XPSTrackMetricsEntryConfidenceMetricsEntry {
  /** Output only. The confidence threshold value used to compute the metrics. */
  confidenceThreshold?: number;
  /** Output only. Tracking precision. */
  trackingPrecision?: number;
  /** Output only. Mismatch rate, which measures the tracking consistency, i.e. correctness of instance ID continuity. */
  mismatchRate?: number;
  /** Output only. Bounding box intersection-over-union precision. Measures how well the bounding boxes overlap between each other (e.g. complete overlap or just barely above iou_threshold). */
  boundingBoxIou?: number;
  /** Output only. Tracking recall. */
  trackingRecall?: number;
}

export const XPSTrackMetricsEntryConfidenceMetricsEntry: Schema.Schema<XPSTrackMetricsEntryConfidenceMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidenceThreshold: Schema.optional(Schema.Number),
    trackingPrecision: Schema.optional(Schema.Number),
    mismatchRate: Schema.optional(Schema.Number),
    boundingBoxIou: Schema.optional(Schema.Number),
    trackingRecall: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSTrackMetricsEntryConfidenceMetricsEntry" });

export interface XPSTrackMetricsEntry {
  /** Output only. The intersection-over-union threshold value between bounding boxes across frames used to compute this metric entry. */
  iouThreshold?: number;
  /** Output only. The mean bounding box iou over all confidence thresholds. */
  meanBoundingBoxIou?: number;
  /** Output only. The mean mismatch rate over all confidence thresholds. */
  meanMismatchRate?: number;
  /** Output only. Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. Precision-recall curve is derived from them. */
  confidenceMetricsEntries?: ReadonlyArray<XPSTrackMetricsEntryConfidenceMetricsEntry>;
  /** Output only. The mean average precision over all confidence thresholds. */
  meanTrackingAveragePrecision?: number;
}

export const XPSTrackMetricsEntry: Schema.Schema<XPSTrackMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iouThreshold: Schema.optional(Schema.Number),
    meanBoundingBoxIou: Schema.optional(Schema.Number),
    meanMismatchRate: Schema.optional(Schema.Number),
    confidenceMetricsEntries: Schema.optional(
      Schema.Array(XPSTrackMetricsEntryConfidenceMetricsEntry),
    ),
    meanTrackingAveragePrecision: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSTrackMetricsEntry" });

export interface XPSVideoObjectTrackingEvaluationMetrics {
  /** The number of video frames used for model evaluation. */
  evaluatedFrameCount?: number;
  /** Output only. The single metric for tracks accuracy evaluation: the mean_average_precision averaged over all track_metrics_entries. */
  trackMeanAveragePrecision?: number;
  /** The number of tracks used for model evaluation. */
  evaluatedTrackCount?: number;
  /** Output only. The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. */
  boundingBoxMetricsEntries?: ReadonlyArray<XPSBoundingBoxMetricsEntry>;
  /** Output only. The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries. */
  boundingBoxMeanAveragePrecision?: number;
  /** The number of bounding boxes used for model evaluation. */
  evaluatedBoundingboxCount?: number;
  /** Output only. The single metric for tracking consistency evaluation: the mean_mismatch_rate averaged over all track_metrics_entries. */
  trackMeanMismatchRate?: number;
  /** Output only. The tracks match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. */
  trackMetricsEntries?: ReadonlyArray<XPSTrackMetricsEntry>;
  /** Output only. The single metric for tracks bounding box iou evaluation: the mean_bounding_box_iou averaged over all track_metrics_entries. */
  trackMeanBoundingBoxIou?: number;
}

export const XPSVideoObjectTrackingEvaluationMetrics: Schema.Schema<XPSVideoObjectTrackingEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluatedFrameCount: Schema.optional(Schema.Number),
    trackMeanAveragePrecision: Schema.optional(Schema.Number),
    evaluatedTrackCount: Schema.optional(Schema.Number),
    boundingBoxMetricsEntries: Schema.optional(
      Schema.Array(XPSBoundingBoxMetricsEntry),
    ),
    boundingBoxMeanAveragePrecision: Schema.optional(Schema.Number),
    evaluatedBoundingboxCount: Schema.optional(Schema.Number),
    trackMeanMismatchRate: Schema.optional(Schema.Number),
    trackMetricsEntries: Schema.optional(Schema.Array(XPSTrackMetricsEntry)),
    trackMeanBoundingBoxIou: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSVideoObjectTrackingEvaluationMetrics" });

export interface XPSRegressionEvaluationMetrics {
  /** A list of actual versus predicted points for the model being evaluated. */
  regressionMetricsEntries?: ReadonlyArray<XPSRegressionMetricsEntry>;
  /** Root mean squared log error. */
  rootMeanSquaredLogError?: number;
  /** R squared. */
  rSquared?: number;
  /** Mean Absolute Error (MAE). */
  meanAbsoluteError?: number;
  /** Root Mean Squared Error (RMSE). */
  rootMeanSquaredError?: number;
  /** Mean absolute percentage error. Only set if all ground truth values are positive. */
  meanAbsolutePercentageError?: number;
}

export const XPSRegressionEvaluationMetrics: Schema.Schema<XPSRegressionEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regressionMetricsEntries: Schema.optional(
      Schema.Array(XPSRegressionMetricsEntry),
    ),
    rootMeanSquaredLogError: Schema.optional(Schema.Number),
    rSquared: Schema.optional(Schema.Number),
    meanAbsoluteError: Schema.optional(Schema.Number),
    rootMeanSquaredError: Schema.optional(Schema.Number),
    meanAbsolutePercentageError: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSRegressionEvaluationMetrics" });

export interface XPSImageObjectDetectionEvaluationMetrics {
  /** The total number of bounding boxes (i.e. summed over all images) the ground truth used to create this evaluation had. */
  evaluatedBoundingBoxCount?: number;
  /** The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 pair. */
  boundingBoxMetricsEntries?: ReadonlyArray<XPSBoundingBoxMetricsEntry>;
  /** The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries. */
  boundingBoxMeanAveragePrecision?: number;
}

export const XPSImageObjectDetectionEvaluationMetrics: Schema.Schema<XPSImageObjectDetectionEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluatedBoundingBoxCount: Schema.optional(Schema.Number),
    boundingBoxMetricsEntries: Schema.optional(
      Schema.Array(XPSBoundingBoxMetricsEntry),
    ),
    boundingBoxMeanAveragePrecision: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSImageObjectDetectionEvaluationMetrics" });

export interface XPSTranslationEvaluationMetrics {
  /** BLEU score. */
  bleuScore?: number;
  /** BLEU score for base model. */
  baseBleuScore?: number;
}

export const XPSTranslationEvaluationMetrics: Schema.Schema<XPSTranslationEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bleuScore: Schema.optional(Schema.Number),
    baseBleuScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSTranslationEvaluationMetrics" });

export interface XPSTextExtractionEvaluationMetrics {
  /** Values are at the highest F1 score on the precision-recall curve. Only confidence_threshold, recall, precision, and f1_score will be set. */
  bestF1ConfidenceMetrics?: XPSConfidenceMetricsEntry;
  /** Only recall, precision, and f1_score will be set. */
  perLabelConfidenceMetrics?: Record<string, XPSConfidenceMetricsEntry>;
  /** If the enclosing EvaluationMetrics.label is empty, confidence_metrics_entries is an evaluation of the entire model across all labels. If the enclosing EvaluationMetrics.label is set, confidence_metrics_entries applies to that label. */
  confidenceMetricsEntries?: ReadonlyArray<XPSConfidenceMetricsEntry>;
  /** Confusion matrix of the model, at the default confidence threshold (0.0). Only set for whole-model evaluation, not for evaluation per label. */
  confusionMatrix?: XPSConfusionMatrix;
}

export const XPSTextExtractionEvaluationMetrics: Schema.Schema<XPSTextExtractionEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bestF1ConfidenceMetrics: Schema.optional(XPSConfidenceMetricsEntry),
    perLabelConfidenceMetrics: Schema.optional(
      Schema.Record(Schema.String, XPSConfidenceMetricsEntry),
    ),
    confidenceMetricsEntries: Schema.optional(
      Schema.Array(XPSConfidenceMetricsEntry),
    ),
    confusionMatrix: Schema.optional(XPSConfusionMatrix),
  }).annotate({ identifier: "XPSTextExtractionEvaluationMetrics" });

export interface XPSEvaluationMetrics {
  tablesEvalMetrics?: XPSTablesEvaluationMetrics;
  textClassificationEvalMetrics?: XPSClassificationEvaluationMetrics;
  /** The number of examples used to create this evaluation metrics instance. */
  evaluatedExampleCount?: number;
  textSentimentEvalMetrics?: XPSTextSentimentEvaluationMetrics;
  imageSegmentationEvalMetrics?: XPSImageSegmentationEvaluationMetrics;
  tablesClassificationEvalMetrics?: XPSClassificationEvaluationMetrics;
  videoActionRecognitionEvalMetrics?: XPSVideoActionRecognitionEvaluationMetrics;
  videoObjectTrackingEvalMetrics?: XPSVideoObjectTrackingEvaluationMetrics;
  regressionEvalMetrics?: XPSRegressionEvaluationMetrics;
  imageObjectDetectionEvalMetrics?: XPSImageObjectDetectionEvaluationMetrics;
  /** The label for which this evaluation metrics instance had been created. Empty iff this is an overall model evaluation (like Tables evaluation metrics), i.e. aggregated across all labels. The label maps to AnnotationSpec.display_name in Public API protos. Only used by MVP implementation and text sentiment FULL implementation. */
  label?: string;
  /** The integer category label for which this evaluation metric instance had been created. Valid categories are 0 or higher. Overall model evaluation should set this to negative values (rather than implicit zero). Only used for Image Segmentation (prefer to set annotation_spec_id_token instead). Note: uCAIP Image Segmentation should use annotation_spec_id_token. */
  category?: number;
  translationEvalMetrics?: XPSTranslationEvaluationMetrics;
  imageClassificationEvalMetrics?: XPSClassificationEvaluationMetrics;
  /** The annotation_spec for which this evaluation metrics instance had been created. Empty iff this is an overall model evaluation (like Tables evaluation metrics), i.e. aggregated across all labels. The value comes from the input annotations in AnnotatedExample. For MVP product or for text sentiment models where annotation_spec_id_token is not available, set label instead. */
  annotationSpecIdToken?: string;
  videoClassificationEvalMetrics?: XPSClassificationEvaluationMetrics;
  textExtractionEvalMetrics?: XPSTextExtractionEvaluationMetrics;
}

export const XPSEvaluationMetrics: Schema.Schema<XPSEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tablesEvalMetrics: Schema.optional(XPSTablesEvaluationMetrics),
    textClassificationEvalMetrics: Schema.optional(
      XPSClassificationEvaluationMetrics,
    ),
    evaluatedExampleCount: Schema.optional(Schema.Number),
    textSentimentEvalMetrics: Schema.optional(
      XPSTextSentimentEvaluationMetrics,
    ),
    imageSegmentationEvalMetrics: Schema.optional(
      XPSImageSegmentationEvaluationMetrics,
    ),
    tablesClassificationEvalMetrics: Schema.optional(
      XPSClassificationEvaluationMetrics,
    ),
    videoActionRecognitionEvalMetrics: Schema.optional(
      XPSVideoActionRecognitionEvaluationMetrics,
    ),
    videoObjectTrackingEvalMetrics: Schema.optional(
      XPSVideoObjectTrackingEvaluationMetrics,
    ),
    regressionEvalMetrics: Schema.optional(XPSRegressionEvaluationMetrics),
    imageObjectDetectionEvalMetrics: Schema.optional(
      XPSImageObjectDetectionEvaluationMetrics,
    ),
    label: Schema.optional(Schema.String),
    category: Schema.optional(Schema.Number),
    translationEvalMetrics: Schema.optional(XPSTranslationEvaluationMetrics),
    imageClassificationEvalMetrics: Schema.optional(
      XPSClassificationEvaluationMetrics,
    ),
    annotationSpecIdToken: Schema.optional(Schema.String),
    videoClassificationEvalMetrics: Schema.optional(
      XPSClassificationEvaluationMetrics,
    ),
    textExtractionEvalMetrics: Schema.optional(
      XPSTextExtractionEvaluationMetrics,
    ),
  }).annotate({ identifier: "XPSEvaluationMetrics" });

export interface XPSCorrelationStats {
  /** The correlation value using the Cramer's V measure. */
  cramersV?: number;
}

export const XPSCorrelationStats: Schema.Schema<XPSCorrelationStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cramersV: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSCorrelationStats" });

export interface XPSStructType {
  /** Unordered map of struct field names to their data types. */
  fields?: Record<string, XPSDataType>;
}

export const XPSStructType: Schema.Schema<XPSStructType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      fields: Schema.optional(Schema.Record(Schema.String, XPSDataType)),
    }),
  ).annotate({
    identifier: "XPSStructType",
  }) as any as Schema.Schema<XPSStructType>;

export interface XPSDataType {
  /** Required. The TypeCode for this type. */
  typeCode?:
    | "TYPE_CODE_UNSPECIFIED"
    | "FLOAT64"
    | "TIMESTAMP"
    | "STRING"
    | "ARRAY"
    | "STRUCT"
    | "CATEGORY"
    | (string & {});
  /** If true, this DataType can also be `null`. */
  nullable?: boolean;
  /** If type_code == STRUCT, then `struct_type` provides type information for the struct's fields. */
  structType?: XPSStructType;
  /** If type_code == ARRAY, then `list_element_type` is the type of the elements. */
  listElementType?: XPSDataType;
  /** If type_code == TIMESTAMP then `time_format` provides the format in which that time field is expressed. The time_format must be written in `strftime` syntax. If time_format is not set, then the default format as described on the field is used. */
  timeFormat?: string;
  /** The highly compatible data types to this data type. */
  compatibleDataTypes?: ReadonlyArray<XPSDataType>;
}

export const XPSDataType: Schema.Schema<XPSDataType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      typeCode: Schema.optional(Schema.String),
      nullable: Schema.optional(Schema.Boolean),
      structType: Schema.optional(XPSStructType),
      listElementType: Schema.optional(XPSDataType),
      timeFormat: Schema.optional(Schema.String),
      compatibleDataTypes: Schema.optional(Schema.Array(XPSDataType)),
    }),
  ).annotate({
    identifier: "XPSDataType",
  }) as any as Schema.Schema<XPSDataType>;

export interface XPSColumnSpecForecastingMetadata {
  /** The type of the column for FORECASTING model training purposes. */
  columnType?:
    | "COLUMN_TYPE_UNSPECIFIED"
    | "KEY"
    | "KEY_METADATA"
    | "TIME_SERIES_AVAILABLE_PAST_ONLY"
    | "TIME_SERIES_AVAILABLE_PAST_AND_FUTURE"
    | (string & {});
}

export const XPSColumnSpecForecastingMetadata: Schema.Schema<XPSColumnSpecForecastingMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columnType: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSColumnSpecForecastingMetadata" });

export interface XPSArrayStats {
  /** Stats of all the values of all arrays, as if they were a single long series of data. The type depends on the element type of the array. */
  memberStats?: XPSDataStats;
  commonStats?: XPSCommonStats;
}

export const XPSArrayStats: Schema.Schema<XPSArrayStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      memberStats: Schema.optional(XPSDataStats),
      commonStats: Schema.optional(XPSCommonStats),
    }),
  ).annotate({
    identifier: "XPSArrayStats",
  }) as any as Schema.Schema<XPSArrayStats>;

export interface XPSStringStatsUnigramStats {
  /** The unigram. */
  value?: string;
  /** The number of occurrences of this unigram in the series. */
  count?: string;
}

export const XPSStringStatsUnigramStats: Schema.Schema<XPSStringStatsUnigramStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSStringStatsUnigramStats" });

export interface XPSStringStats {
  /** The statistics of the top 20 unigrams, ordered by StringStats.UnigramStats.count. */
  topUnigramStats?: ReadonlyArray<XPSStringStatsUnigramStats>;
  commonStats?: XPSCommonStats;
}

export const XPSStringStats: Schema.Schema<XPSStringStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topUnigramStats: Schema.optional(Schema.Array(XPSStringStatsUnigramStats)),
    commonStats: Schema.optional(XPSCommonStats),
  }).annotate({ identifier: "XPSStringStats" });

export interface XPSCategoryStats {
  /** The statistics of the top 20 CATEGORY values, ordered by CategoryStats.SingleCategoryStats.count. */
  topCategoryStats?: ReadonlyArray<XPSCategoryStatsSingleCategoryStats>;
  commonStats?: XPSCommonStats;
}

export const XPSCategoryStats: Schema.Schema<XPSCategoryStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topCategoryStats: Schema.optional(
      Schema.Array(XPSCategoryStatsSingleCategoryStats),
    ),
    commonStats: Schema.optional(XPSCommonStats),
  }).annotate({ identifier: "XPSCategoryStats" });

export interface XPSStructStats {
  /** Map from a field name of the struct to data stats aggregated over series of all data in that field across all the structs. */
  fieldStats?: Record<string, XPSDataStats>;
  commonStats?: XPSCommonStats;
}

export const XPSStructStats: Schema.Schema<XPSStructStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      fieldStats: Schema.optional(Schema.Record(Schema.String, XPSDataStats)),
      commonStats: Schema.optional(XPSCommonStats),
    }),
  ).annotate({
    identifier: "XPSStructStats",
  }) as any as Schema.Schema<XPSStructStats>;

export interface XPSDataStats {
  /** The number of values that are valid. */
  validValueCount?: string;
  /** The statistics for FLOAT64 DataType. */
  float64Stats?: XPSFloat64Stats;
  /** The statistics for ARRAY DataType. */
  arrayStats?: XPSArrayStats;
  /** The number of distinct values. */
  distinctValueCount?: string;
  /** The statistics for TIMESTAMP DataType. */
  timestampStats?: XPSTimestampStats;
  /** The statistics for STRING DataType. */
  stringStats?: XPSStringStats;
  /** The statistics for CATEGORY DataType. */
  categoryStats?: XPSCategoryStats;
  /** The statistics for STRUCT DataType. */
  structStats?: XPSStructStats;
  /** The number of values that are null. */
  nullValueCount?: string;
}

export const XPSDataStats: Schema.Schema<XPSDataStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      validValueCount: Schema.optional(Schema.String),
      float64Stats: Schema.optional(XPSFloat64Stats),
      arrayStats: Schema.optional(XPSArrayStats),
      distinctValueCount: Schema.optional(Schema.String),
      timestampStats: Schema.optional(XPSTimestampStats),
      stringStats: Schema.optional(XPSStringStats),
      categoryStats: Schema.optional(XPSCategoryStats),
      structStats: Schema.optional(XPSStructStats),
      nullValueCount: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSDataStats",
  }) as any as Schema.Schema<XPSDataStats>;

export interface XPSColumnSpecCorrelatedColumn {
  correlationStats?: XPSCorrelationStats;
  columnId?: number;
}

export const XPSColumnSpecCorrelatedColumn: Schema.Schema<XPSColumnSpecCorrelatedColumn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    correlationStats: Schema.optional(XPSCorrelationStats),
    columnId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSColumnSpecCorrelatedColumn" });

export interface XPSColumnSpec {
  /** The unique id of the column. When Preprocess, the Tables BE will popuate the order id of the column, which reflects the order of the column inside the table, i.e. 0 means the first column in the table, N-1 means the last column. AutoML BE will persist this order id in Spanner and set the order id here when calling RefreshTablesStats and Train. Note: it's different than the column_spec_id that is generated in AutoML BE. */
  columnId?: number;
  /** The display name of the column. It's outputed in Preprocess and a required input for RefreshTablesStats and Train. */
  displayName?: string;
  /** The data type of the column. It's outputed in Preprocess rpc and a required input for RefreshTablesStats and Train. */
  dataType?: XPSDataType;
  forecastingMetadata?: XPSColumnSpecForecastingMetadata;
  /** The data stats of the column. It's outputed in RefreshTablesStats and a required input for Train. */
  dataStats?: XPSDataStats;
  /** It's outputed in RefreshTablesStats, and a required input in Train. */
  topCorrelatedColumns?: ReadonlyArray<XPSColumnSpecCorrelatedColumn>;
}

export const XPSColumnSpec: Schema.Schema<XPSColumnSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columnId: Schema.optional(Schema.Number),
    displayName: Schema.optional(Schema.String),
    dataType: Schema.optional(XPSDataType),
    forecastingMetadata: Schema.optional(XPSColumnSpecForecastingMetadata),
    dataStats: Schema.optional(XPSDataStats),
    topCorrelatedColumns: Schema.optional(
      Schema.Array(XPSColumnSpecCorrelatedColumn),
    ),
  }).annotate({ identifier: "XPSColumnSpec" });

export interface XPSTableSpec {
  /** Mapping from column id to column spec. */
  columnSpecs?: Record<string, XPSColumnSpec>;
  /** The id of the time column. */
  timeColumnId?: number;
  /** The total size of imported data of the table. */
  importedDataSizeInBytes?: string;
  /** The number of rows in the table. */
  rowCount?: string;
  /** The number of valid rows. */
  validRowCount?: string;
}

export const XPSTableSpec: Schema.Schema<XPSTableSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columnSpecs: Schema.optional(Schema.Record(Schema.String, XPSColumnSpec)),
    timeColumnId: Schema.optional(Schema.Number),
    importedDataSizeInBytes: Schema.optional(Schema.String),
    rowCount: Schema.optional(Schema.String),
    validRowCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSTableSpec" });

export interface XPSTablesDatasetMetadata {
  /** Id the column to split the table. */
  mlUseColumnId?: number;
  /** Id of the primary table column that should be used as the training label. */
  targetColumnId?: number;
  /** Id of the primary table column that should be used as the weight column. */
  weightColumnId?: number;
  /** (the column id : its CorrelationStats with target column). */
  targetColumnCorrelations?: Record<string, XPSCorrelationStats>;
  /** Primary table. */
  primaryTableSpec?: XPSTableSpec;
}

export const XPSTablesDatasetMetadata: Schema.Schema<XPSTablesDatasetMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mlUseColumnId: Schema.optional(Schema.Number),
    targetColumnId: Schema.optional(Schema.Number),
    weightColumnId: Schema.optional(Schema.Number),
    targetColumnCorrelations: Schema.optional(
      Schema.Record(Schema.String, XPSCorrelationStats),
    ),
    primaryTableSpec: Schema.optional(XPSTableSpec),
  }).annotate({ identifier: "XPSTablesDatasetMetadata" });

export interface XPSTablesPreprocessResponse {
  /** The table/column id, column_name and the DataTypes of the columns will be populated. */
  tablesDatasetMetadata?: XPSTablesDatasetMetadata;
}

export const XPSTablesPreprocessResponse: Schema.Schema<XPSTablesPreprocessResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tablesDatasetMetadata: Schema.optional(XPSTablesDatasetMetadata),
  }).annotate({ identifier: "XPSTablesPreprocessResponse" });

export interface XPSFileSpec {
  /** Deprecated. Use file_spec. */
  directoryPath?: string;
  /** Deprecated. Use file_spec. */
  singleFilePath?: string;
  /** Single file path, or file pattern of format "/path/to/file@shard_count". E.g. /cns/cell-d/somewhere/file@2 is expanded to two files: /cns/cell-d/somewhere/file-00000-of-00002 and /cns/cell-d/somewhere/file-00001-of-00002. */
  fileSpec?: string;
  fileFormat?:
    | "FILE_FORMAT_UNKNOWN"
    | "FILE_FORMAT_SSTABLE"
    | "FILE_FORMAT_TRANSLATION_RKV"
    | "FILE_FORMAT_RECORDIO"
    | "FILE_FORMAT_RAW_CSV"
    | "FILE_FORMAT_RAW_CAPACITOR"
    | (string & {});
}

export const XPSFileSpec: Schema.Schema<XPSFileSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    directoryPath: Schema.optional(Schema.String),
    singleFilePath: Schema.optional(Schema.String),
    fileSpec: Schema.optional(Schema.String),
    fileFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSFileSpec" });

export interface XPSExampleSet {
  /** Number of examples. */
  numExamples?: string;
  /** File spec of the examples or input sources. */
  fileSpec?: XPSFileSpec;
  /** Number of input sources. */
  numInputSources?: string;
  /** Fingerprint of the example set. */
  fingerprint?: string;
}

export const XPSExampleSet: Schema.Schema<XPSExampleSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numExamples: Schema.optional(Schema.String),
    fileSpec: Schema.optional(XPSFileSpec),
    numInputSources: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSExampleSet" });

export interface XPSSpeechEvaluationMetricsSubModelEvaluationMetric {
  numDeletions?: number;
  /** Number of utterances used in the wer computation. */
  numUtterances?: number;
  /** Word error rate (standard error metric used for speech recognition). */
  wer?: number;
  /** Number of words over which the word error rate was computed. */
  numWords?: number;
  /** If true then it means we have an enhanced version of the biasing models. */
  isEnhancedModel?: boolean;
  numSubstitutions?: number;
  /** Type of the biasing model. */
  biasingModelType?:
    | "BIASING_MODEL_TYPE_UNSPECIFIED"
    | "COMMAND_AND_SEARCH"
    | "PHONE_CALL"
    | "VIDEO"
    | "DEFAULT"
    | (string & {});
  numInsertions?: number;
  /** Below fields are used for debugging purposes */
  sentenceAccuracy?: number;
}

export const XPSSpeechEvaluationMetricsSubModelEvaluationMetric: Schema.Schema<XPSSpeechEvaluationMetricsSubModelEvaluationMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numDeletions: Schema.optional(Schema.Number),
    numUtterances: Schema.optional(Schema.Number),
    wer: Schema.optional(Schema.Number),
    numWords: Schema.optional(Schema.Number),
    isEnhancedModel: Schema.optional(Schema.Boolean),
    numSubstitutions: Schema.optional(Schema.Number),
    biasingModelType: Schema.optional(Schema.String),
    numInsertions: Schema.optional(Schema.Number),
    sentenceAccuracy: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "XPSSpeechEvaluationMetricsSubModelEvaluationMetric",
  });

export interface XPSSpeechEvaluationMetrics {
  /** Evaluation metrics for all submodels contained in this model. */
  subModelEvaluationMetrics?: ReadonlyArray<XPSSpeechEvaluationMetricsSubModelEvaluationMetric>;
}

export const XPSSpeechEvaluationMetrics: Schema.Schema<XPSSpeechEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subModelEvaluationMetrics: Schema.optional(
      Schema.Array(XPSSpeechEvaluationMetricsSubModelEvaluationMetric),
    ),
  }).annotate({ identifier: "XPSSpeechEvaluationMetrics" });

export interface XPSDataErrors {
  /** Number of records having errors associated with the enum. */
  count?: number;
  /** Type of the error. */
  errorType?:
    | "ERROR_TYPE_UNSPECIFIED"
    | "UNSUPPORTED_AUDIO_FORMAT"
    | "FILE_EXTENSION_MISMATCH_WITH_AUDIO_FORMAT"
    | "FILE_TOO_LARGE"
    | "MISSING_TRANSCRIPTION"
    | (string & {});
}

export const XPSDataErrors: Schema.Schema<XPSDataErrors> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    errorType: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSDataErrors" });

export interface XPSSpeechPreprocessStats {
  /** Different types of data errors and the counts associated with them. */
  dataErrors?: ReadonlyArray<XPSDataErrors>;
  /** The number of sentences in the training data set. */
  trainSentencesCount?: number;
  /** The number of rows marked HUMAN_LABELLED */
  numHumanLabeledExamples?: number;
  /** The number of rows marked as MACHINE_TRANSCRIBED */
  numMachineTranscribedExamples?: number;
  /** The number of words in the test data set. */
  testWordsCount?: number;
  /** The number of examples labeled as TRAIN by Speech xps server. */
  trainExamplesCount?: number;
  /** The number of examples labelled as TEST by Speech xps server. */
  testExamplesCount?: number;
  /** The number of sentences in the test data set. */
  testSentencesCount?: number;
  /** The number of words in the training data set. */
  trainWordsCount?: number;
  /** The number of samples found in the previously recorded logs data. */
  numLogsExamples?: number;
}

export const XPSSpeechPreprocessStats: Schema.Schema<XPSSpeechPreprocessStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataErrors: Schema.optional(Schema.Array(XPSDataErrors)),
    trainSentencesCount: Schema.optional(Schema.Number),
    numHumanLabeledExamples: Schema.optional(Schema.Number),
    numMachineTranscribedExamples: Schema.optional(Schema.Number),
    testWordsCount: Schema.optional(Schema.Number),
    trainExamplesCount: Schema.optional(Schema.Number),
    testExamplesCount: Schema.optional(Schema.Number),
    testSentencesCount: Schema.optional(Schema.Number),
    trainWordsCount: Schema.optional(Schema.Number),
    numLogsExamples: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSSpeechPreprocessStats" });

export interface XPSSpeechPreprocessResponse {
  /** Location of shards of sstables (training data) of DataUtterance protos. */
  cnsTrainDataPath?: string;
  /** The metrics for prebuilt speech models. They are included here because there is no prebuilt speech models stored in the AutoML. */
  prebuiltModelEvaluationMetrics?: XPSSpeechEvaluationMetrics;
  /** Stats associated with the data. */
  speechPreprocessStats?: XPSSpeechPreprocessStats;
  /** Location od shards of sstables (test data) of DataUtterance protos. */
  cnsTestDataPath?: string;
}

export const XPSSpeechPreprocessResponse: Schema.Schema<XPSSpeechPreprocessResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cnsTrainDataPath: Schema.optional(Schema.String),
    prebuiltModelEvaluationMetrics: Schema.optional(XPSSpeechEvaluationMetrics),
    speechPreprocessStats: Schema.optional(XPSSpeechPreprocessStats),
    cnsTestDataPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSSpeechPreprocessResponse" });

export interface XPSPreprocessResponse {
  tablesPreprocessResponse?: XPSTablesPreprocessResponse;
  translationPreprocessResp?: XPSTranslationPreprocessResponse;
  /** Preprocessed examples, that are to be imported into AutoML storage. This should point to RecordIO file(s) of PreprocessedExample messages. The PreprocessedExample.mvp_training_data-s returned here are later verbatim passed to Train() call in TrainExample.mvp_training_data. */
  outputExampleSet?: XPSExampleSet;
  speechPreprocessResp?: XPSSpeechPreprocessResponse;
}

export const XPSPreprocessResponse: Schema.Schema<XPSPreprocessResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tablesPreprocessResponse: Schema.optional(XPSTablesPreprocessResponse),
    translationPreprocessResp: Schema.optional(
      XPSTranslationPreprocessResponse,
    ),
    outputExampleSet: Schema.optional(XPSExampleSet),
    speechPreprocessResp: Schema.optional(XPSSpeechPreprocessResponse),
  }).annotate({ identifier: "XPSPreprocessResponse" });

export interface Sentiment {
  /** A non-negative number in the [0, +inf] range, which represents the absolute magnitude of sentiment regardless of score (positive or negative). */
  magnitude?: number;
  /** Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment). */
  score?: number;
}

export const Sentiment: Schema.Schema<Sentiment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    magnitude: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Sentiment" });

export interface TextSpan {
  /** The content of the text span, which is a substring of the document. */
  content?: string;
  /** The API calculates the beginning offset of the content in the original document according to the EncodingType specified in the API request. */
  beginOffset?: number;
}

export const TextSpan: Schema.Schema<TextSpan> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    beginOffset: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TextSpan" });

export interface EntityMention {
  /** The type of the entity mention. */
  type?: "TYPE_UNKNOWN" | "PROPER" | "COMMON" | (string & {});
  /** Probability score associated with the entity. The score shows the probability of the entity mention being the entity type. The score is in (0, 1] range. */
  probability?: number;
  /** The mention text. */
  text?: TextSpan;
  /** For calls to AnalyzeEntitySentiment this field will contain the sentiment expressed for this mention of the entity in the provided document. */
  sentiment?: Sentiment;
}

export const EntityMention: Schema.Schema<EntityMention> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    probability: Schema.optional(Schema.Number),
    text: Schema.optional(TextSpan),
    sentiment: Schema.optional(Sentiment),
  }).annotate({ identifier: "EntityMention" });

export interface Entity {
  /** For calls to AnalyzeEntitySentiment this field will contain the aggregate sentiment expressed for this entity in the provided document. */
  sentiment?: Sentiment;
  /** The entity type. */
  type?:
    | "UNKNOWN"
    | "PERSON"
    | "LOCATION"
    | "ORGANIZATION"
    | "EVENT"
    | "WORK_OF_ART"
    | "CONSUMER_GOOD"
    | "OTHER"
    | "PHONE_NUMBER"
    | "ADDRESS"
    | "DATE"
    | "NUMBER"
    | "PRICE"
    | (string & {});
  /** Metadata associated with the entity. For the metadata associated with other entity types, see the Type table below. */
  metadata?: Record<string, string>;
  /** The representative name for the entity. */
  name?: string;
  /** The mentions of this entity in the input document. The API currently supports proper noun mentions. */
  mentions?: ReadonlyArray<EntityMention>;
}

export const Entity: Schema.Schema<Entity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sentiment: Schema.optional(Sentiment),
    type: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    mentions: Schema.optional(Schema.Array(EntityMention)),
  }).annotate({ identifier: "Entity" });

export interface XPSTablesModelColumnInfo {
  /** When given as part of a Model: Measurement of how much model predictions correctness on the TEST data depend on values in this column. A value between 0 and 1, higher means higher influence. These values are normalized - for all input feature columns of a given model they add to 1. When given back by Predict or Batch Predict: Measurement of how impactful for the prediction returned for the given row the value in this column was. Specifically, the feature importance specifies the marginal contribution that the feature made to the prediction score compared to the baseline score. These values are computed using the Sampled Shapley method. */
  featureImportance?: number;
  /** The ID of the column. */
  columnId?: number;
}

export const XPSTablesModelColumnInfo: Schema.Schema<XPSTablesModelColumnInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    featureImportance: Schema.optional(Schema.Number),
    columnId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSTablesModelColumnInfo" });

export interface XPSTablesTrainResponse {
  /** The actual training cost of the model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget. */
  trainCostMilliNodeHours?: string;
  modelStructure?: XPSTablesModelStructure;
  /** Output only. Auxiliary information for each of the input_feature_column_specs, with respect to this particular model. */
  tablesModelColumnInfo?: ReadonlyArray<XPSTablesModelColumnInfo>;
  /** Sample rows from the dataset this model was trained. */
  predictionSampleRows?: ReadonlyArray<XPSRow>;
}

export const XPSTablesTrainResponse: Schema.Schema<XPSTablesTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trainCostMilliNodeHours: Schema.optional(Schema.String),
    modelStructure: Schema.optional(XPSTablesModelStructure),
    tablesModelColumnInfo: Schema.optional(
      Schema.Array(XPSTablesModelColumnInfo),
    ),
    predictionSampleRows: Schema.optional(Schema.Array(XPSRow)),
  }).annotate({ identifier: "XPSTablesTrainResponse" });

export interface XPSCoreMlFormat {}

export const XPSCoreMlFormat: Schema.Schema<XPSCoreMlFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "XPSCoreMlFormat",
  });

export interface XPSTfLiteFormat {}

export const XPSTfLiteFormat: Schema.Schema<XPSTfLiteFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "XPSTfLiteFormat",
  });

export interface XPSTfSavedModelFormat {}

export const XPSTfSavedModelFormat: Schema.Schema<XPSTfSavedModelFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "XPSTfSavedModelFormat",
  });

export interface XPSEdgeTpuTfLiteFormat {}

export const XPSEdgeTpuTfLiteFormat: Schema.Schema<XPSEdgeTpuTfLiteFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "XPSEdgeTpuTfLiteFormat",
  });

export interface XPSTfJsFormat {}

export const XPSTfJsFormat: Schema.Schema<XPSTfJsFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "XPSTfJsFormat",
  });

export interface XPSDockerFormat {
  /** Optional. Additional cpu information describing the requirements for the to be exported model files. */
  cpuArchitecture?:
    | "CPU_ARCHITECTURE_UNSPECIFIED"
    | "CPU_ARCHITECTURE_X86_64"
    | (string & {});
  /** Optional. Additional gpu information describing the requirements for the to be exported model files. */
  gpuArchitecture?:
    | "GPU_ARCHITECTURE_UNSPECIFIED"
    | "GPU_ARCHITECTURE_NVIDIA"
    | (string & {});
}

export const XPSDockerFormat: Schema.Schema<XPSDockerFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpuArchitecture: Schema.optional(Schema.String),
    gpuArchitecture: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSDockerFormat" });

export interface XPSExportModelOutputConfig {
  /** The Google Contained Registry path the exported files to be pushed to. This location is set if the exported format is DOCKDER. */
  outputGcrUri?: string;
  coreMlFormat?: XPSCoreMlFormat;
  tfLiteFormat?: XPSTfLiteFormat;
  tfSavedModelFormat?: XPSTfSavedModelFormat;
  /** For any model and format: If true, will additionally export FirebaseExportedModelInfo in a firebase.txt file. */
  exportFirebaseAuxiliaryInfo?: boolean;
  edgeTpuTfLiteFormat?: XPSEdgeTpuTfLiteFormat;
  /** The Google Cloud Storage directory where XPS will output the exported models and related files. Format: gs://bucket/directory */
  outputGcsUri?: string;
  tfJsFormat?: XPSTfJsFormat;
  dockerFormat?: XPSDockerFormat;
}

export const XPSExportModelOutputConfig: Schema.Schema<XPSExportModelOutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputGcrUri: Schema.optional(Schema.String),
    coreMlFormat: Schema.optional(XPSCoreMlFormat),
    tfLiteFormat: Schema.optional(XPSTfLiteFormat),
    tfSavedModelFormat: Schema.optional(XPSTfSavedModelFormat),
    exportFirebaseAuxiliaryInfo: Schema.optional(Schema.Boolean),
    edgeTpuTfLiteFormat: Schema.optional(XPSEdgeTpuTfLiteFormat),
    outputGcsUri: Schema.optional(Schema.String),
    tfJsFormat: Schema.optional(XPSTfJsFormat),
    dockerFormat: Schema.optional(XPSDockerFormat),
  }).annotate({ identifier: "XPSExportModelOutputConfig" });

export interface XPSImageExportModelSpec {
  /** Contains the model format and internal location of the model files to be exported/downloaded. Use the Google Cloud Storage bucket name which is provided via TrainRequest.gcs_bucket_name to store the model files. */
  exportModelOutputConfig?: ReadonlyArray<XPSExportModelOutputConfig>;
}

export const XPSImageExportModelSpec: Schema.Schema<XPSImageExportModelSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportModelOutputConfig: Schema.optional(
      Schema.Array(XPSExportModelOutputConfig),
    ),
  }).annotate({ identifier: "XPSImageExportModelSpec" });

export interface XPSModelArtifactItem {
  /** The Google Cloud Storage URI that stores the model binary files. */
  gcsUri?: string;
  /** The model artifact format. */
  artifactFormat?:
    | "ARTIFACT_FORMAT_UNSPECIFIED"
    | "TF_CHECKPOINT"
    | "TF_SAVED_MODEL"
    | "TF_LITE"
    | "EDGE_TPU_TF_LITE"
    | "TF_JS"
    | "CORE_ML"
    | (string & {});
}

export const XPSModelArtifactItem: Schema.Schema<XPSModelArtifactItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsUri: Schema.optional(Schema.String),
    artifactFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSModelArtifactItem" });

export interface XPSImageModelArtifactSpec {
  /** The model binary files in different formats for model export. */
  exportArtifact?: ReadonlyArray<XPSModelArtifactItem>;
  /** Google Cloud Storage URI of Tensorflow Lite metadata 'tflite_metadata.json'. */
  tfLiteMetadataGcsUri?: string;
  /** Google Cloud Storage URI of decoded labels file for model export 'dict.txt'. */
  labelGcsUri?: string;
  /** Google Cloud Storage URI prefix of Tensorflow JavaScript binary files 'groupX-shardXofX.bin'. Deprecated. */
  tfJsBinaryGcsPrefix?: string;
  /** The default model binary file used for serving (e.g. online predict, batch predict) via public Cloud AI Platform API. */
  servingArtifact?: XPSModelArtifactItem;
  /** The Tensorflow checkpoint files. e.g. Used for resumable training. */
  checkpointArtifact?: XPSModelArtifactItem;
}

export const XPSImageModelArtifactSpec: Schema.Schema<XPSImageModelArtifactSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportArtifact: Schema.optional(Schema.Array(XPSModelArtifactItem)),
    tfLiteMetadataGcsUri: Schema.optional(Schema.String),
    labelGcsUri: Schema.optional(Schema.String),
    tfJsBinaryGcsPrefix: Schema.optional(Schema.String),
    servingArtifact: Schema.optional(XPSModelArtifactItem),
    checkpointArtifact: Schema.optional(XPSModelArtifactItem),
  }).annotate({ identifier: "XPSImageModelArtifactSpec" });

export interface XPSImageModelServingSpecModelThroughputEstimation {
  /** Estimated latency. */
  latencyInMilliseconds?: number;
  /** The approximate qps a deployed node can serve. */
  nodeQps?: number;
  computeEngineAcceleratorType?:
    | "UNSPECIFIED"
    | "NVIDIA_TESLA_K80"
    | "NVIDIA_TESLA_P100"
    | "NVIDIA_TESLA_V100"
    | "NVIDIA_TESLA_P4"
    | "NVIDIA_TESLA_T4"
    | "NVIDIA_TESLA_A100"
    | "NVIDIA_A100_80GB"
    | "NVIDIA_L4"
    | "NVIDIA_H100_80GB"
    | "NVIDIA_H100_MEGA_80GB"
    | "NVIDIA_H200_141GB"
    | "NVIDIA_B200"
    | "NVIDIA_GB200"
    | "TPU_V2"
    | "TPU_V3"
    | "TPU_V4_POD"
    | "TPU_V5_LITEPOD"
    | (string & {});
  servomaticPartitionType?:
    | "PARTITION_TYPE_UNSPECIFIED"
    | "PARTITION_ZERO"
    | "PARTITION_REDUCED_HOMING"
    | "PARTITION_JELLYFISH"
    | "PARTITION_CPU"
    | "PARTITION_CUSTOM_STORAGE_CPU"
    | (string & {});
}

export const XPSImageModelServingSpecModelThroughputEstimation: Schema.Schema<XPSImageModelServingSpecModelThroughputEstimation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latencyInMilliseconds: Schema.optional(Schema.Number),
    nodeQps: Schema.optional(Schema.Number),
    computeEngineAcceleratorType: Schema.optional(Schema.String),
    servomaticPartitionType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "XPSImageModelServingSpecModelThroughputEstimation",
  });

export interface XPSImageModelServingSpec {
  /** An estimated value of how much traffic a node can serve. Populated for AutoMl request only. */
  nodeQps?: number;
  /** ## The fields below are only populated under uCAIP request scope. https://cloud.google.com/ml-engine/docs/runtime-version-list */
  tfRuntimeVersion?: string;
  /** Populate under uCAIP request scope. */
  modelThroughputEstimation?: ReadonlyArray<XPSImageModelServingSpecModelThroughputEstimation>;
}

export const XPSImageModelServingSpec: Schema.Schema<XPSImageModelServingSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeQps: Schema.optional(Schema.Number),
    tfRuntimeVersion: Schema.optional(Schema.String),
    modelThroughputEstimation: Schema.optional(
      Schema.Array(XPSImageModelServingSpecModelThroughputEstimation),
    ),
  }).annotate({ identifier: "XPSImageModelServingSpec" });

export interface XPSImageObjectDetectionModelSpec {
  /** Stop reason for training job, e.g. 'TRAIN_BUDGET_REACHED', 'MODEL_CONVERGED'. */
  stopReason?:
    | "TRAIN_STOP_REASON_UNSPECIFIED"
    | "TRAIN_STOP_REASON_BUDGET_REACHED"
    | "TRAIN_STOP_REASON_MODEL_CONVERGED"
    | "TRAIN_STOP_REASON_MODEL_EARLY_STOPPED"
    | (string & {});
  exportModelSpec?: XPSImageExportModelSpec;
  /** ## The fields below are only populated under uCAIP request scope. */
  modelArtifactSpec?: XPSImageModelArtifactSpec;
  /** Max number of bounding box. */
  maxBoundingBoxCount?: string;
  modelServingSpec?: XPSImageModelServingSpec;
  /** The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour. */
  trainCostNodeSeconds?: string;
  /** Total number of classes. */
  classCount?: string;
}

export const XPSImageObjectDetectionModelSpec: Schema.Schema<XPSImageObjectDetectionModelSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stopReason: Schema.optional(Schema.String),
    exportModelSpec: Schema.optional(XPSImageExportModelSpec),
    modelArtifactSpec: Schema.optional(XPSImageModelArtifactSpec),
    maxBoundingBoxCount: Schema.optional(Schema.String),
    modelServingSpec: Schema.optional(XPSImageModelServingSpec),
    trainCostNodeSeconds: Schema.optional(Schema.String),
    classCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSImageObjectDetectionModelSpec" });

export interface XPSVisualization {
  /** Whether to only highlight pixels with positive contributions, negative or both. Defaults to POSITIVE. */
  polarity?:
    | "POLARITY_UNSPECIFIED"
    | "POSITIVE"
    | "NEGATIVE"
    | "BOTH"
    | (string & {});
  /** The color scheme used for the highlighted areas. Defaults to PINK_GREEN for Integrated Gradients attribution, which shows positive attributions in green and negative in pink. Defaults to VIRIDIS for XRAI attribution, which highlights the most influential regions in yellow and the least influential in blue. */
  colorMap?:
    | "COLOR_MAP_UNSPECIFIED"
    | "PINK_GREEN"
    | "VIRIDIS"
    | "RED"
    | "GREEN"
    | "RED_GREEN"
    | "PINK_WHITE_GREEN"
    | (string & {});
  /** Excludes attributions below the specified percentile, from the highlighted areas. Defaults to 62. */
  clipPercentLowerbound?: number;
  /** How the original image is displayed in the visualization. Adjusting the overlay can help increase visual clarity if the original image makes it difficult to view the visualization. Defaults to NONE. */
  overlayType?:
    | "OVERLAY_TYPE_UNSPECIFIED"
    | "NONE"
    | "ORIGINAL"
    | "GRAYSCALE"
    | "MASK_BLACK"
    | (string & {});
  /** Type of the image visualization. Only applicable to Integrated Gradients attribution. OUTLINES shows regions of attribution, while PIXELS shows per-pixel attribution. Defaults to OUTLINES. */
  type?: "TYPE_UNSPECIFIED" | "PIXELS" | "OUTLINES" | (string & {});
  /** Excludes attributions above the specified percentile from the highlighted areas. Using the clip_percent_upperbound and clip_percent_lowerbound together can be useful for filtering out noise and making it easier to see areas of strong attribution. Defaults to 99.9. */
  clipPercentUpperbound?: number;
}

export const XPSVisualization: Schema.Schema<XPSVisualization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    polarity: Schema.optional(Schema.String),
    colorMap: Schema.optional(Schema.String),
    clipPercentLowerbound: Schema.optional(Schema.Number),
    overlayType: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    clipPercentUpperbound: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSVisualization" });

export interface XPSResponseExplanationMetadataInputMetadata {
  /** Visualization configurations for image explanation. */
  visualizationConfig?: XPSVisualization;
  /** Name of the input tensor for this model. Only needed in train response. */
  inputTensorName?: string;
  /** Modality of the feature. Valid values are: numeric, image. Defaults to numeric. */
  modality?:
    | "MODALITY_UNSPECIFIED"
    | "NUMERIC"
    | "IMAGE"
    | "CATEGORICAL"
    | (string & {});
}

export const XPSResponseExplanationMetadataInputMetadata: Schema.Schema<XPSResponseExplanationMetadataInputMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    visualizationConfig: Schema.optional(XPSVisualization),
    inputTensorName: Schema.optional(Schema.String),
    modality: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSResponseExplanationMetadataInputMetadata" });

export interface XPSTranslationTrainResponse {
  /** Type of the model. */
  modelType?: "MODEL_TYPE_UNSPECIFIED" | "LEGACY" | "CURRENT" | (string & {});
}

export const XPSTranslationTrainResponse: Schema.Schema<XPSTranslationTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelType: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSTranslationTrainResponse" });

export interface XPSTextToSpeechTrainResponse {}

export const XPSTextToSpeechTrainResponse: Schema.Schema<XPSTextToSpeechTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "XPSTextToSpeechTrainResponse",
  });

export interface XPSVideoModelArtifactSpec {
  /** The model binary files in different formats for model export. */
  exportArtifact?: ReadonlyArray<XPSModelArtifactItem>;
  /** The default model binary file used for serving (e.g. batch predict) via public Cloud AI Platform API. */
  servingArtifact?: XPSModelArtifactItem;
}

export const XPSVideoModelArtifactSpec: Schema.Schema<XPSVideoModelArtifactSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportArtifact: Schema.optional(Schema.Array(XPSModelArtifactItem)),
    servingArtifact: Schema.optional(XPSModelArtifactItem),
  }).annotate({ identifier: "XPSVideoModelArtifactSpec" });

export interface XPSVideoActionRecognitionTrainResponse {
  /** The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour. */
  trainCostNodeSeconds?: string;
  /** ## The fields below are only populated under uCAIP request scope. */
  modelArtifactSpec?: XPSVideoModelArtifactSpec;
}

export const XPSVideoActionRecognitionTrainResponse: Schema.Schema<XPSVideoActionRecognitionTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trainCostNodeSeconds: Schema.optional(Schema.String),
    modelArtifactSpec: Schema.optional(XPSVideoModelArtifactSpec),
  }).annotate({ identifier: "XPSVideoActionRecognitionTrainResponse" });

export interface XPSResponseExplanationMetadataOutputMetadata {
  /** Name of the output tensor. Only needed in train response. */
  outputTensorName?: string;
}

export const XPSResponseExplanationMetadataOutputMetadata: Schema.Schema<XPSResponseExplanationMetadataOutputMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputTensorName: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSResponseExplanationMetadataOutputMetadata" });

export interface XPSVideoClassificationTrainResponse {
  /** The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour. */
  trainCostNodeSeconds?: string;
  /** ## The fields below are only populated under uCAIP request scope. */
  modelArtifactSpec?: XPSVideoModelArtifactSpec;
}

export const XPSVideoClassificationTrainResponse: Schema.Schema<XPSVideoClassificationTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trainCostNodeSeconds: Schema.optional(Schema.String),
    modelArtifactSpec: Schema.optional(XPSVideoModelArtifactSpec),
  }).annotate({ identifier: "XPSVideoClassificationTrainResponse" });

export interface XPSTextComponentModel {
  /** The default model binary file used for serving (e.g. online predict, batch predict) via public Cloud Ai Platform API. */
  servingArtifact?: XPSModelArtifactItem;
  /** The name of servo model. Populated by uCAIP BE as part of online PredictRequest. */
  servoModelName?: string;
  /** The Cloud Storage resource path to hold batch prediction model. */
  batchPredictionModelGcsUri?: string;
  /** The servomatic model version number. Populated by uCAIP BE as part of online PredictRequest. */
  versionNumber?: string;
  /** The partition where the model is deployed. Populated by uCAIP BE as part of online PredictRequest. */
  partition?:
    | "PARTITION_TYPE_UNSPECIFIED"
    | "PARTITION_ZERO"
    | "PARTITION_REDUCED_HOMING"
    | "PARTITION_JELLYFISH"
    | "PARTITION_CPU"
    | "PARTITION_CUSTOM_STORAGE_CPU"
    | (string & {});
  /** ## The fields below are only populated under uCAIP request scope. https://cloud.google.com/ml-engine/docs/runtime-version-list */
  tfRuntimeVersion?: string;
  /** The name of the trained NL submodel. */
  submodelName?: string;
  /** The type of trained NL submodel */
  submodelType?:
    | "TEXT_MODEL_TYPE_UNSPECIFIED"
    | "TEXT_MODEL_TYPE_DEFAULT"
    | "TEXT_MODEL_TYPE_META_ARCHITECT"
    | "TEXT_MODEL_TYPE_ATC"
    | "TEXT_MODEL_TYPE_CLARA2"
    | "TEXT_MODEL_TYPE_CHATBASE"
    | "TEXT_MODEL_TYPE_SAFT_SPAN_LABELING"
    | "TEXT_MODEL_TYPE_TEXT_EXTRACTION"
    | "TEXT_MODEL_TYPE_RELATIONSHIP_EXTRACTION"
    | "TEXT_MODEL_TYPE_COMPOSITE"
    | "TEXT_MODEL_TYPE_ALL_MODELS"
    | "TEXT_MODEL_TYPE_BERT"
    | "TEXT_MODEL_TYPE_ENC_PALM"
    | (string & {});
  /** The Cloud Storage resource path to hold online prediction model. */
  onlinePredictionModelGcsUri?: string;
}

export const XPSTextComponentModel: Schema.Schema<XPSTextComponentModel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    servingArtifact: Schema.optional(XPSModelArtifactItem),
    servoModelName: Schema.optional(Schema.String),
    batchPredictionModelGcsUri: Schema.optional(Schema.String),
    versionNumber: Schema.optional(Schema.String),
    partition: Schema.optional(Schema.String),
    tfRuntimeVersion: Schema.optional(Schema.String),
    submodelName: Schema.optional(Schema.String),
    submodelType: Schema.optional(Schema.String),
    onlinePredictionModelGcsUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSTextComponentModel" });

export interface XPSTextTrainResponse {
  /** Component submodels. */
  componentModel?: ReadonlyArray<XPSTextComponentModel>;
}

export const XPSTextTrainResponse: Schema.Schema<XPSTextTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    componentModel: Schema.optional(Schema.Array(XPSTextComponentModel)),
  }).annotate({ identifier: "XPSTextTrainResponse" });

export interface Sentence {
  /** For calls to AnalyzeSentiment or if AnnotateTextRequest.Features.extract_document_sentiment is set to true, this field will contain the sentiment for the sentence. */
  sentiment?: Sentiment;
  /** The sentence text. */
  text?: TextSpan;
}

export const Sentence: Schema.Schema<Sentence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sentiment: Schema.optional(Sentiment),
    text: Schema.optional(TextSpan),
  }).annotate({ identifier: "Sentence" });

export interface XPSImageClassificationTrainResponse {
  /** ## The fields below are only populated under uCAIP request scope. */
  modelArtifactSpec?: XPSImageModelArtifactSpec;
  /** Information of downloadable models that are pre-generated as part of training flow and will be persisted in AutoMl backend. Populated for AutoMl requests. */
  exportModelSpec?: XPSImageExportModelSpec;
  /** Stop reason for training job, e.g. 'TRAIN_BUDGET_REACHED', 'MODEL_CONVERGED', 'MODEL_EARLY_STOPPED'. */
  stopReason?:
    | "TRAIN_STOP_REASON_UNSPECIFIED"
    | "TRAIN_STOP_REASON_BUDGET_REACHED"
    | "TRAIN_STOP_REASON_MODEL_CONVERGED"
    | "TRAIN_STOP_REASON_MODEL_EARLY_STOPPED"
    | (string & {});
  /** The actual cost to create this model. - For edge type model, the cost is expressed in node hour. - For cloud type model,the cost is expressed in compute hour. - Populated for models created before GA. To be deprecated after GA. */
  trainCostInNodeTime?: string;
  /** The actual training cost, expressed in node seconds. Populated for models trained in node time. */
  trainCostNodeSeconds?: string;
  /** Total number of classes. */
  classCount?: string;
  modelServingSpec?: XPSImageModelServingSpec;
}

export const XPSImageClassificationTrainResponse: Schema.Schema<XPSImageClassificationTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelArtifactSpec: Schema.optional(XPSImageModelArtifactSpec),
    exportModelSpec: Schema.optional(XPSImageExportModelSpec),
    stopReason: Schema.optional(Schema.String),
    trainCostInNodeTime: Schema.optional(Schema.String),
    trainCostNodeSeconds: Schema.optional(Schema.String),
    classCount: Schema.optional(Schema.String),
    modelServingSpec: Schema.optional(XPSImageModelServingSpec),
  }).annotate({ identifier: "XPSImageClassificationTrainResponse" });

export interface XPSVideoExportModelSpec {
  /** Contains the model format and internal location of the model files to be exported/downloaded. Use the Google Cloud Storage bucket name which is provided via TrainRequest.gcs_bucket_name to store the model files. */
  exportModelOutputConfig?: ReadonlyArray<XPSExportModelOutputConfig>;
}

export const XPSVideoExportModelSpec: Schema.Schema<XPSVideoExportModelSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportModelOutputConfig: Schema.optional(
      Schema.Array(XPSExportModelOutputConfig),
    ),
  }).annotate({ identifier: "XPSVideoExportModelSpec" });

export interface XPSVideoObjectTrackingTrainResponse {
  /** Populated for AutoML request only. */
  exportModelSpec?: XPSVideoExportModelSpec;
  /** The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour. */
  trainCostNodeSeconds?: string;
  /** ## The fields below are only populated under uCAIP request scope. */
  modelArtifactSpec?: XPSVideoModelArtifactSpec;
}

export const XPSVideoObjectTrackingTrainResponse: Schema.Schema<XPSVideoObjectTrackingTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportModelSpec: Schema.optional(XPSVideoExportModelSpec),
    trainCostNodeSeconds: Schema.optional(Schema.String),
    modelArtifactSpec: Schema.optional(XPSVideoModelArtifactSpec),
  }).annotate({ identifier: "XPSVideoObjectTrackingTrainResponse" });

export interface XPSResponseExplanationMetadata {
  /** Metadata of the output. */
  outputs?: Record<string, XPSResponseExplanationMetadataOutputMetadata>;
  /** Metadata of the input. */
  inputs?: Record<string, XPSResponseExplanationMetadataInputMetadata>;
}

export const XPSResponseExplanationMetadata: Schema.Schema<XPSResponseExplanationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputs: Schema.optional(
      Schema.Record(
        Schema.String,
        XPSResponseExplanationMetadataOutputMetadata,
      ),
    ),
    inputs: Schema.optional(
      Schema.Record(Schema.String, XPSResponseExplanationMetadataInputMetadata),
    ),
  }).annotate({ identifier: "XPSResponseExplanationMetadata" });

export interface XPSIntegratedGradientsAttribution {
  /** The number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is within the desired error range. Valid range of its value is [1, 100], inclusively. */
  stepCount?: number;
}

export const XPSIntegratedGradientsAttribution: Schema.Schema<XPSIntegratedGradientsAttribution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stepCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSIntegratedGradientsAttribution" });

export interface XPSXraiAttribution {
  /** The number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range. Valid range of its value is [1, 100], inclusively. */
  stepCount?: number;
}

export const XPSXraiAttribution: Schema.Schema<XPSXraiAttribution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stepCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSXraiAttribution" });

export interface XPSResponseExplanationParameters {
  /** An attribution method that computes Aumann-Shapley values taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365 */
  integratedGradientsAttribution?: XPSIntegratedGradientsAttribution;
  /** An attribution method that redistributes Integrated Gradients attribution to segmented regions, taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 XRAI currently performs better on natural images, like a picture of a house or an animal. If the images are taken in artificial environments, like a lab or manufacturing line, or from diagnostic equipment, like x-rays or quality-control cameras, use Integrated Gradients instead. */
  xraiAttribution?: XPSXraiAttribution;
}

export const XPSResponseExplanationParameters: Schema.Schema<XPSResponseExplanationParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integratedGradientsAttribution: Schema.optional(
      XPSIntegratedGradientsAttribution,
    ),
    xraiAttribution: Schema.optional(XPSXraiAttribution),
  }).annotate({ identifier: "XPSResponseExplanationParameters" });

export interface XPSResponseExplanationSpec {
  /** Metadata describing the Model's input and output for explanation. */
  metadata?: XPSResponseExplanationMetadata;
  /** Parameters that configure explaining of the Model's predictions. */
  parameters?: XPSResponseExplanationParameters;
  /** Explanation type. For AutoML Image Classification models, possible values are: * `image-integrated-gradients` * `image-xrai` */
  explanationType?: string;
}

export const XPSResponseExplanationSpec: Schema.Schema<XPSResponseExplanationSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(XPSResponseExplanationMetadata),
    parameters: Schema.optional(XPSResponseExplanationParameters),
    explanationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSResponseExplanationSpec" });

export interface XPSVisionErrorAnalysisConfig {
  /** The number of query examples in error analysis. */
  exampleCount?: number;
  /** The query type used in retrieval. The enum values are frozen in the foreseeable future. */
  queryType?:
    | "QUERY_TYPE_UNSPECIFIED"
    | "QUERY_TYPE_ALL_SIMILAR"
    | "QUERY_TYPE_SAME_CLASS_SIMILAR"
    | "QUERY_TYPE_SAME_CLASS_DISSIMILAR"
    | (string & {});
}

export const XPSVisionErrorAnalysisConfig: Schema.Schema<XPSVisionErrorAnalysisConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exampleCount: Schema.optional(Schema.Number),
    queryType: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSVisionErrorAnalysisConfig" });

export interface XPSEvaluationMetricsSet {
  /** Inline EvaluationMetrics - should be relatively small. For passing large quantities of exhaustive metrics, use file_spec. */
  evaluationMetrics?: ReadonlyArray<XPSEvaluationMetrics>;
  /** File spec containing evaluation metrics of a model, must point to RecordIO file(s) of intelligence.cloud.automl.xps.EvaluationMetrics messages. */
  fileSpec?: XPSFileSpec;
  /** Number of the evaluation metrics (usually one per label plus overall). */
  numEvaluationMetrics?: string;
}

export const XPSEvaluationMetricsSet: Schema.Schema<XPSEvaluationMetricsSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationMetrics: Schema.optional(Schema.Array(XPSEvaluationMetrics)),
    fileSpec: Schema.optional(XPSFileSpec),
    numEvaluationMetrics: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSEvaluationMetricsSet" });

export interface Color {
  /** The amount of green in the color as a value in the interval [0, 1]. */
  green?: number;
  /** The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0). */
  alpha?: number;
  /** The amount of blue in the color as a value in the interval [0, 1]. */
  blue?: number;
  /** The amount of red in the color as a value in the interval [0, 1]. */
  red?: number;
}

export const Color: Schema.Schema<Color> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    green: Schema.optional(Schema.Number),
    alpha: Schema.optional(Schema.Number),
    blue: Schema.optional(Schema.Number),
    red: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Color" });

export interface XPSColorMapIntColor {
  /** The value should be in range of [0, 255]. */
  green?: number;
  /** The value should be in range of [0, 255]. */
  blue?: number;
  /** The value should be in range of [0, 255]. */
  red?: number;
}

export const XPSColorMapIntColor: Schema.Schema<XPSColorMapIntColor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    green: Schema.optional(Schema.Number),
    blue: Schema.optional(Schema.Number),
    red: Schema.optional(Schema.Number),
  }).annotate({ identifier: "XPSColorMapIntColor" });

export interface XPSColorMap {
  /** This type is deprecated in favor of the IntColor below. This is because google.type.Color represent color has a float which semantically does not reflect discrete classes/categories concept. Moreover, to handle it well we need to have some tolerance when converting to a discretized color. As such, the recommendation is to have API surface still use google.type.Color while internally IntColor is used. */
  color?: Color;
  /** Should be used during training. */
  annotationSpecIdToken?: string;
  intColor?: XPSColorMapIntColor;
  /** Should be used during preprocessing. */
  displayName?: string;
}

export const XPSColorMap: Schema.Schema<XPSColorMap> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    color: Schema.optional(Color),
    annotationSpecIdToken: Schema.optional(Schema.String),
    intColor: Schema.optional(XPSColorMapIntColor),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "XPSColorMap" });

export interface XPSImageSegmentationTrainResponse {
  modelServingSpec?: XPSImageModelServingSpec;
  /** The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour. */
  trainCostNodeSeconds?: string;
  /** Stop reason for training job, e.g. 'TRAIN_BUDGET_REACHED', 'MODEL_CONVERGED'. */
  stopReason?:
    | "TRAIN_STOP_REASON_UNSPECIFIED"
    | "TRAIN_STOP_REASON_BUDGET_REACHED"
    | "TRAIN_STOP_REASON_MODEL_CONVERGED"
    | "TRAIN_STOP_REASON_MODEL_EARLY_STOPPED"
    | (string & {});
  /** Color map of the model. */
  colorMaps?: ReadonlyArray<XPSColorMap>;
  /** NOTE: These fields are not used/needed in EAP but will be set later. */
  exportModelSpec?: XPSImageExportModelSpec;
  /** ## The fields below are only populated under uCAIP request scope. Model artifact spec stores and model gcs pathes and related metadata */
  modelArtifactSpec?: XPSImageModelArtifactSpec;
}

export const XPSImageSegmentationTrainResponse: Schema.Schema<XPSImageSegmentationTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelServingSpec: Schema.optional(XPSImageModelServingSpec),
    trainCostNodeSeconds: Schema.optional(Schema.String),
    stopReason: Schema.optional(Schema.String),
    colorMaps: Schema.optional(Schema.Array(XPSColorMap)),
    exportModelSpec: Schema.optional(XPSImageExportModelSpec),
    modelArtifactSpec: Schema.optional(XPSImageModelArtifactSpec),
  }).annotate({ identifier: "XPSImageSegmentationTrainResponse" });

export interface XPSTrainResponse {
  /** Estimated model size in bytes once deployed. */
  deployedModelSizeBytes?: string;
  imageClassificationTrainResp?: XPSImageClassificationTrainResponse;
  translationTrainResp?: XPSTranslationTrainResponse;
  tablesTrainResp?: XPSTablesTrainResponse;
  videoObjectTrackingTrainResp?: XPSVideoObjectTrackingTrainResponse;
  /** Examples used to evaluate the model (usually the test set), with the predicted annotations. The file_spec should point to recordio file(s) of AnnotatedExample. For each returned example, the example_id_token and annotations predicted by the model must be set. The example payload can and is recommended to be omitted. */
  evaluatedExampleSet?: XPSExampleSet;
  imageObjectDetectionTrainResp?: XPSImageObjectDetectionModelSpec;
  /** VisionExplanationConfig for XAI on test set. Optional for when XAI is enable in training request. */
  explanationConfigs?: ReadonlyArray<XPSResponseExplanationSpec>;
  /** Optional vision model error analysis configuration. The field is set when model error analysis is enabled in the training request. The results of error analysis will be binded together with evaluation results (in the format of AnnotatedExample). */
  errorAnalysisConfigs?: ReadonlyArray<XPSVisionErrorAnalysisConfig>;
  /** Token that represents the trained model. This is considered immutable and is persisted in AutoML. xPS can put their own proto in the byte string, to e.g. point to the model checkpoints. The token is passed to other xPS APIs to refer to the model. */
  modelToken?: string;
  textToSpeechTrainResp?: XPSTextToSpeechTrainResponse;
  speechTrainResp?: XPSSpeechModelSpec;
  videoClassificationTrainResp?: XPSVideoClassificationTrainResponse;
  videoActionRecognitionTrainResp?: XPSVideoActionRecognitionTrainResponse;
  /** Will only be needed for uCAIP from Beta. */
  textTrainResp?: XPSTextTrainResponse;
  /** The trained model evaluation metrics. This can be optionally returned. */
  evaluationMetricsSet?: XPSEvaluationMetricsSet;
  imageSegmentationTrainResp?: XPSImageSegmentationTrainResponse;
}

export const XPSTrainResponse: Schema.Schema<XPSTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployedModelSizeBytes: Schema.optional(Schema.String),
    imageClassificationTrainResp: Schema.optional(
      XPSImageClassificationTrainResponse,
    ),
    translationTrainResp: Schema.optional(XPSTranslationTrainResponse),
    tablesTrainResp: Schema.optional(XPSTablesTrainResponse),
    videoObjectTrackingTrainResp: Schema.optional(
      XPSVideoObjectTrackingTrainResponse,
    ),
    evaluatedExampleSet: Schema.optional(XPSExampleSet),
    imageObjectDetectionTrainResp: Schema.optional(
      XPSImageObjectDetectionModelSpec,
    ),
    explanationConfigs: Schema.optional(
      Schema.Array(XPSResponseExplanationSpec),
    ),
    errorAnalysisConfigs: Schema.optional(
      Schema.Array(XPSVisionErrorAnalysisConfig),
    ),
    modelToken: Schema.optional(Schema.String),
    textToSpeechTrainResp: Schema.optional(XPSTextToSpeechTrainResponse),
    speechTrainResp: Schema.optional(XPSSpeechModelSpec),
    videoClassificationTrainResp: Schema.optional(
      XPSVideoClassificationTrainResponse,
    ),
    videoActionRecognitionTrainResp: Schema.optional(
      XPSVideoActionRecognitionTrainResponse,
    ),
    textTrainResp: Schema.optional(XPSTextTrainResponse),
    evaluationMetricsSet: Schema.optional(XPSEvaluationMetricsSet),
    imageSegmentationTrainResp: Schema.optional(
      XPSImageSegmentationTrainResponse,
    ),
  }).annotate({ identifier: "XPSTrainResponse" });

export interface ModerateTextRequest {
  /** Optional. The model version to use for ModerateText. */
  modelVersion?:
    | "MODEL_VERSION_UNSPECIFIED"
    | "MODEL_VERSION_1"
    | "MODEL_VERSION_2"
    | (string & {});
  /** Required. Input document. */
  document?: Document;
}

export const ModerateTextRequest: Schema.Schema<ModerateTextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelVersion: Schema.optional(Schema.String),
    document: Schema.optional(Document),
  }).annotate({ identifier: "ModerateTextRequest" });

export interface ClassifyTextRequest {
  /** Required. Input document. */
  document?: Document;
}

export const ClassifyTextRequest: Schema.Schema<ClassifyTextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    document: Schema.optional(Document),
  }).annotate({ identifier: "ClassifyTextRequest" });

export interface AnalyzeEntitiesRequest {
  /** Required. Input document. */
  document?: Document;
  /** The encoding type used by the API to calculate offsets. */
  encodingType?: "NONE" | "UTF8" | "UTF16" | "UTF32" | (string & {});
}

export const AnalyzeEntitiesRequest: Schema.Schema<AnalyzeEntitiesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    document: Schema.optional(Document),
    encodingType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnalyzeEntitiesRequest" });

export interface AnalyzeSentimentResponse {
  /** The sentiment for all the sentences in the document. */
  sentences?: ReadonlyArray<Sentence>;
  /** Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. */
  languageSupported?: boolean;
  /** The overall sentiment of the input document. */
  documentSentiment?: Sentiment;
  /** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language_code field for more details. */
  languageCode?: string;
}

export const AnalyzeSentimentResponse: Schema.Schema<AnalyzeSentimentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sentences: Schema.optional(Schema.Array(Sentence)),
    languageSupported: Schema.optional(Schema.Boolean),
    documentSentiment: Schema.optional(Sentiment),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnalyzeSentimentResponse" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface XPSBatchPredictResponse {
  /** Examples for batch prediction result. Under full API implementation, results are stored in shared RecordIO of AnnotatedExample protobufs, the annotations field of which is populated by XPS backend. */
  exampleSet?: XPSExampleSet;
}

export const XPSBatchPredictResponse: Schema.Schema<XPSBatchPredictResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exampleSet: Schema.optional(XPSExampleSet),
  }).annotate({ identifier: "XPSBatchPredictResponse" });

export interface ModerateTextResponse {
  /** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language_code field for more details. */
  languageCode?: string;
  /** Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. */
  languageSupported?: boolean;
  /** Harmful and sensitive categories representing the input document. */
  moderationCategories?: ReadonlyArray<ClassificationCategory>;
}

export const ModerateTextResponse: Schema.Schema<ModerateTextResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    languageSupported: Schema.optional(Schema.Boolean),
    moderationCategories: Schema.optional(Schema.Array(ClassificationCategory)),
  }).annotate({ identifier: "ModerateTextResponse" });

export interface AnnotateTextRequestFeatures {
  /** Optional. Extract document-level sentiment. */
  extractDocumentSentiment?: boolean;
  /** Optional. Moderate the document for harmful and sensitive categories. */
  moderateText?: boolean;
  /** Optional. Extract entities. */
  extractEntities?: boolean;
  /** Optional. Classify the full document into categories. */
  classifyText?: boolean;
}

export const AnnotateTextRequestFeatures: Schema.Schema<AnnotateTextRequestFeatures> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extractDocumentSentiment: Schema.optional(Schema.Boolean),
    moderateText: Schema.optional(Schema.Boolean),
    extractEntities: Schema.optional(Schema.Boolean),
    classifyText: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AnnotateTextRequestFeatures" });

export interface AnnotateTextRequest {
  /** Required. Input document. */
  document?: Document;
  /** Required. The enabled features. */
  features?: AnnotateTextRequestFeatures;
  /** The encoding type used by the API to calculate offsets. */
  encodingType?: "NONE" | "UTF8" | "UTF16" | "UTF32" | (string & {});
}

export const AnnotateTextRequest: Schema.Schema<AnnotateTextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    document: Schema.optional(Document),
    features: Schema.optional(AnnotateTextRequestFeatures),
    encodingType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnnotateTextRequest" });

export interface AnnotateTextResponse {
  /** Harmful and sensitive categories identified in the input document. */
  moderationCategories?: ReadonlyArray<ClassificationCategory>;
  /** The overall sentiment for the document. Populated if the user enables AnnotateTextRequest.Features.extract_document_sentiment. */
  documentSentiment?: Sentiment;
  /** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language_code field for more details. */
  languageCode?: string;
  /** Sentences in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_document_sentiment. */
  sentences?: ReadonlyArray<Sentence>;
  /** Entities, along with their semantic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_entities . */
  entities?: ReadonlyArray<Entity>;
  /** Categories identified in the input document. */
  categories?: ReadonlyArray<ClassificationCategory>;
  /** Whether the language is officially supported by all requested features. The API may still return a response when the language is not supported, but it is on a best effort basis. */
  languageSupported?: boolean;
}

export const AnnotateTextResponse: Schema.Schema<AnnotateTextResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    moderationCategories: Schema.optional(Schema.Array(ClassificationCategory)),
    documentSentiment: Schema.optional(Sentiment),
    languageCode: Schema.optional(Schema.String),
    sentences: Schema.optional(Schema.Array(Sentence)),
    entities: Schema.optional(Schema.Array(Entity)),
    categories: Schema.optional(Schema.Array(ClassificationCategory)),
    languageSupported: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AnnotateTextResponse" });

export interface AnalyzeEntitiesResponse {
  /** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language_code field for more details. */
  languageCode?: string;
  /** The recognized entities in the input document. */
  entities?: ReadonlyArray<Entity>;
  /** Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. */
  languageSupported?: boolean;
}

export const AnalyzeEntitiesResponse: Schema.Schema<AnalyzeEntitiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    entities: Schema.optional(Schema.Array(Entity)),
    languageSupported: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AnalyzeEntitiesResponse" });

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

export interface AnalyzeEntitiesDocumentsRequest {
  /** Request body */
  body?: AnalyzeEntitiesRequest;
}

export const AnalyzeEntitiesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AnalyzeEntitiesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/documents:analyzeEntities",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeEntitiesDocumentsRequest>;

export type AnalyzeEntitiesDocumentsResponse = AnalyzeEntitiesResponse;
export const AnalyzeEntitiesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AnalyzeEntitiesResponse;

export type AnalyzeEntitiesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Finds named entities (currently proper names and common nouns) in the text along with entity types, probability, mentions for each entity, and other properties. */
export const analyzeEntitiesDocuments: API.OperationMethod<
  AnalyzeEntitiesDocumentsRequest,
  AnalyzeEntitiesDocumentsResponse,
  AnalyzeEntitiesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnalyzeEntitiesDocumentsRequest,
  output: AnalyzeEntitiesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AnnotateTextDocumentsRequest {
  /** Request body */
  body?: AnnotateTextRequest;
}

export const AnnotateTextDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AnnotateTextRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/documents:annotateText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnnotateTextDocumentsRequest>;

export type AnnotateTextDocumentsResponse = AnnotateTextResponse;
export const AnnotateTextDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AnnotateTextResponse;

export type AnnotateTextDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** A convenience method that provides all features in one call. */
export const annotateTextDocuments: API.OperationMethod<
  AnnotateTextDocumentsRequest,
  AnnotateTextDocumentsResponse,
  AnnotateTextDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnnotateTextDocumentsRequest,
  output: AnnotateTextDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ModerateTextDocumentsRequest {
  /** Request body */
  body?: ModerateTextRequest;
}

export const ModerateTextDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(ModerateTextRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/documents:moderateText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ModerateTextDocumentsRequest>;

export type ModerateTextDocumentsResponse = ModerateTextResponse;
export const ModerateTextDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ModerateTextResponse;

export type ModerateTextDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moderates a document for harmful and sensitive categories. */
export const moderateTextDocuments: API.OperationMethod<
  ModerateTextDocumentsRequest,
  ModerateTextDocumentsResponse,
  ModerateTextDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ModerateTextDocumentsRequest,
  output: ModerateTextDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AnalyzeSentimentDocumentsRequest {
  /** Request body */
  body?: AnalyzeSentimentRequest;
}

export const AnalyzeSentimentDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AnalyzeSentimentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/documents:analyzeSentiment",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeSentimentDocumentsRequest>;

export type AnalyzeSentimentDocumentsResponse = AnalyzeSentimentResponse;
export const AnalyzeSentimentDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AnalyzeSentimentResponse;

export type AnalyzeSentimentDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Analyzes the sentiment of the provided text. */
export const analyzeSentimentDocuments: API.OperationMethod<
  AnalyzeSentimentDocumentsRequest,
  AnalyzeSentimentDocumentsResponse,
  AnalyzeSentimentDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnalyzeSentimentDocumentsRequest,
  output: AnalyzeSentimentDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ClassifyTextDocumentsRequest {
  /** Request body */
  body?: ClassifyTextRequest;
}

export const ClassifyTextDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(ClassifyTextRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/documents:classifyText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ClassifyTextDocumentsRequest>;

export type ClassifyTextDocumentsResponse = ClassifyTextResponse;
export const ClassifyTextDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ClassifyTextResponse;

export type ClassifyTextDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Classifies a document into categories. */
export const classifyTextDocuments: API.OperationMethod<
  ClassifyTextDocumentsRequest,
  ClassifyTextDocumentsResponse,
  ClassifyTextDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ClassifyTextDocumentsRequest,
  output: ClassifyTextDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
