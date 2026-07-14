// ==========================================================================
// Dataflow API (dataflow v1b3)
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
  name: "dataflow",
  version: "v1b3",
  rootUrl: "https://dataflow.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface SDKInfo {
  /** Required. The SDK Language. */
  language?: "UNKNOWN" | "JAVA" | "PYTHON" | "GO" | "YAML" | (string & {});
  /** Optional. The SDK version. */
  version?: string;
}

export const SDKInfo: Schema.Codec<SDKInfo> =
  /*@__PURE__*/ Schema.Struct({
    language: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "SDKInfo" });

export interface WorkerHealthReport {
  /** The time the VM was booted. */
  vmStartupTime?: string;
  /** Whether the VM is in a permanently broken state. Broken VMs should be abandoned or deleted ASAP to avoid assigning or completing any work. */
  vmIsBroken?: boolean;
  /** The interval at which the worker is sending health reports. The default value of 0 should be interpreted as the field is not being explicitly set by the worker. */
  reportInterval?: string;
  /** Code to describe a specific reason, if known, that a VM has reported broken state. */
  vmBrokenCode?: string;
  /** The pods running on the worker. See: http://kubernetes.io/v1.1/docs/api-reference/v1/definitions.html#_v1_pod This field is used by the worker to send the status of the indvidual containers running on each worker. */
  pods?: ReadonlyArray<Record<string, unknown>>;
  /** Whether the VM is currently healthy. */
  vmIsHealthy?: boolean;
  /** Message describing any unusual health reports. */
  msg?: string;
}

export const WorkerHealthReport: Schema.Codec<WorkerHealthReport> =
  /*@__PURE__*/ Schema.Struct({
    vmStartupTime: Schema.optional(Schema.String),
    vmIsBroken: Schema.optional(Schema.Boolean),
    reportInterval: Schema.optional(Schema.String),
    vmBrokenCode: Schema.optional(Schema.String),
    pods: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    vmIsHealthy: Schema.optional(Schema.Boolean),
    msg: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkerHealthReport" });

export interface SourceMetadata {
  /** An estimate of the total size (in bytes) of the data that would be read from this source. This estimate is in terms of external storage size, before any decompression or other processing done by the reader. */
  estimatedSizeBytes?: string;
  /** Whether this source is known to produce key/value pairs with the (encoded) keys in lexicographically sorted order. */
  producesSortedKeys?: boolean;
  /** Specifies that the size of this source is known to be infinite (this is a streaming source). */
  infinite?: boolean;
}

export const SourceMetadata: Schema.Codec<SourceMetadata> =
  /*@__PURE__*/ Schema.Struct({
    estimatedSizeBytes: Schema.optional(Schema.String),
    producesSortedKeys: Schema.optional(Schema.Boolean),
    infinite: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SourceMetadata" });

export interface Source {
  /** The source to read from, plus its parameters. */
  spec?: Record<string, unknown>;
  /** The codec to use to decode data read from the source. */
  codec?: Record<string, unknown>;
  /** Optionally, metadata for this source can be supplied right away, avoiding a SourceGetMetadataOperation roundtrip (see SourceOperationRequest). This field is meaningful only in the Source objects populated by the user (e.g. when filling in a DerivedSource). Source objects supplied by the framework to the user don't have this field populated. */
  metadata?: SourceMetadata;
  /** Setting this value to true hints to the framework that the source doesn't need splitting, and using SourceSplitRequest on it would yield SOURCE_SPLIT_OUTCOME_USE_CURRENT. E.g. a file splitter may set this to true when splitting a single file into a set of byte ranges of appropriate size, and set this to false when splitting a filepattern into individual files. However, for efficiency, a file splitter may decide to produce file subranges directly from the filepattern to avoid a splitting round-trip. See SourceSplitRequest for an overview of the splitting process. This field is meaningful only in the Source objects populated by the user (e.g. when filling in a DerivedSource). Source objects supplied by the framework to the user don't have this field populated. */
  doesNotNeedSplitting?: boolean;
  /** While splitting, sources may specify the produced bundles as differences against another source, in order to save backend-side memory and allow bigger jobs. For details, see SourceSplitRequest. To support this use case, the full set of parameters of the source is logically obtained by taking the latest explicitly specified value of each parameter in the order: base_specs (later items win), spec (overrides anything in base_specs). */
  baseSpecs?: ReadonlyArray<Record<string, unknown>>;
}

export const Source: Schema.Codec<Source> =
  /*@__PURE__*/ Schema.Struct({
    spec: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    codec: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(SourceMetadata),
    doesNotNeedSplitting: Schema.optional(Schema.Boolean),
    baseSpecs: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Source" });

export interface DerivedSource {
  /** Specification of the source. */
  source?: Source;
  /** What source to base the produced source on (if any). */
  derivationMode?:
    | "SOURCE_DERIVATION_MODE_UNKNOWN"
    | "SOURCE_DERIVATION_MODE_INDEPENDENT"
    | "SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT"
    | "SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT"
    | (string & {});
}

export const DerivedSource: Schema.Codec<DerivedSource> =
  /*@__PURE__*/ Schema.Struct({
    source: Schema.optional(Source),
    derivationMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "DerivedSource" });

export interface SourceSplitShard {
  /** DEPRECATED */
  source?: Source;
  /** DEPRECATED */
  derivationMode?:
    | "SOURCE_DERIVATION_MODE_UNKNOWN"
    | "SOURCE_DERIVATION_MODE_INDEPENDENT"
    | "SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT"
    | "SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT"
    | (string & {});
}

export const SourceSplitShard: Schema.Codec<SourceSplitShard> =
  /*@__PURE__*/ Schema.Struct({
    source: Schema.optional(Source),
    derivationMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "SourceSplitShard" });

export interface SourceSplitResponse {
  /** Indicates whether splitting happened and produced a list of bundles. If this is USE_CURRENT_SOURCE_AS_IS, the current source should be processed "as is" without splitting. "bundles" is ignored in this case. If this is SPLITTING_HAPPENED, then "bundles" contains a list of bundles into which the source was split. */
  outcome?:
    | "SOURCE_SPLIT_OUTCOME_UNKNOWN"
    | "SOURCE_SPLIT_OUTCOME_USE_CURRENT"
    | "SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED"
    | (string & {});
  /** If outcome is SPLITTING_HAPPENED, then this is a list of bundles into which the source was split. Otherwise this field is ignored. This list can be empty, which means the source represents an empty input. */
  bundles?: ReadonlyArray<DerivedSource>;
  /** DEPRECATED in favor of bundles. */
  shards?: ReadonlyArray<SourceSplitShard>;
}

export const SourceSplitResponse: Schema.Codec<SourceSplitResponse> =
  /*@__PURE__*/ Schema.Struct({
    outcome: Schema.optional(Schema.String),
    bundles: Schema.optional(Schema.Array(DerivedSource)),
    shards: Schema.optional(Schema.Array(SourceSplitShard)),
  }).annotate({ identifier: "SourceSplitResponse" });

export interface SourceGetMetadataResponse {
  /** The computed metadata. */
  metadata?: SourceMetadata;
}

export const SourceGetMetadataResponse: Schema.Codec<SourceGetMetadataResponse> =
  /*@__PURE__*/ Schema.Struct({
    metadata: Schema.optional(SourceMetadata),
  }).annotate({ identifier: "SourceGetMetadataResponse" });

export interface SourceOperationResponse {
  /** A response to a request to split a source. */
  split?: SourceSplitResponse;
  /** A response to a request to get metadata about a source. */
  getMetadata?: SourceGetMetadataResponse;
}

export const SourceOperationResponse: Schema.Codec<SourceOperationResponse> =
  /*@__PURE__*/ Schema.Struct({
    split: Schema.optional(SourceSplitResponse),
    getMetadata: Schema.optional(SourceGetMetadataResponse),
  }).annotate({ identifier: "SourceOperationResponse" });

export interface ReportedParallelism {
  /** Specifies whether the parallelism is infinite. If true, "value" is ignored. Infinite parallelism means the service will assume that the work item can always be split into more non-empty work items by dynamic splitting. This is a work-around for lack of support for infinity by the current JSON-based Java RPC stack. */
  isInfinite?: boolean;
  /** Specifies the level of parallelism in case it is finite. */
  value?: number;
}

export const ReportedParallelism: Schema.Codec<ReportedParallelism> =
  /*@__PURE__*/ Schema.Struct({
    isInfinite: Schema.optional(Schema.Boolean),
    value: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ReportedParallelism" });

export interface ConcatPosition {
  /** Index of the inner source. */
  index?: number;
  /** Position within the inner source. */
  position?: Position;
}

export const ConcatPosition: Schema.Codec<ConcatPosition> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      index: Schema.optional(Schema.Number),
      position: Schema.optional(Position),
    }),
  ).annotate({
    identifier: "ConcatPosition",
  }) as any as Schema.Codec<ConcatPosition>;

export interface Position {
  /** Position is a byte offset. */
  byteOffset?: string;
  /** CloudPosition is a concat position. */
  concatPosition?: ConcatPosition;
  /** Position is past all other positions. Also useful for the end position of an unbounded range. */
  end?: boolean;
  /** Position is a record index. */
  recordIndex?: string;
  /** Position is a string key, ordered lexicographically. */
  key?: string;
  /** CloudPosition is a base64 encoded BatchShufflePosition (with FIXED sharding). */
  shufflePosition?: string;
}

export const Position: Schema.Codec<Position> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      byteOffset: Schema.optional(Schema.String),
      concatPosition: Schema.optional(ConcatPosition),
      end: Schema.optional(Schema.Boolean),
      recordIndex: Schema.optional(Schema.String),
      key: Schema.optional(Schema.String),
      shufflePosition: Schema.optional(Schema.String),
    }),
  ).annotate({ identifier: "Position" }) as any as Schema.Codec<Position>;

export interface ApproximateReportedProgress {
  /** Total amount of parallelism in the portion of input of this task that has already been consumed and is no longer active. In the first two examples above (see remaining_parallelism), the value should be 29 or 2 respectively. The sum of remaining_parallelism and consumed_parallelism should equal the total amount of parallelism in this work item. If specified, must be finite. */
  consumedParallelism?: ReportedParallelism;
  /** Completion as fraction of the input consumed, from 0.0 (beginning, nothing consumed), to 1.0 (end of the input, entire input consumed). */
  fractionConsumed?: number;
  /** Total amount of parallelism in the input of this task that remains, (i.e. can be delegated to this task and any new tasks via dynamic splitting). Always at least 1 for non-finished work items and 0 for finished. "Amount of parallelism" refers to how many non-empty parts of the input can be read in parallel. This does not necessarily equal number of records. An input that can be read in parallel down to the individual records is called "perfectly splittable". An example of non-perfectly parallelizable input is a block-compressed file format where a block of records has to be read as a whole, but different blocks can be read in parallel. Examples: * If we are processing record #30 (starting at 1) out of 50 in a perfectly splittable 50-record input, this value should be 21 (20 remaining + 1 current). * If we are reading through block 3 in a block-compressed file consisting of 5 blocks, this value should be 3 (since blocks 4 and 5 can be processed in parallel by new tasks via dynamic splitting and the current task remains processing block 3). * If we are reading through the last block in a block-compressed file, or reading or processing the last record in a perfectly splittable input, this value should be 1, because apart from the current task, no additional remainder can be split off. */
  remainingParallelism?: ReportedParallelism;
  /** A Position within the work to represent a progress. */
  position?: Position;
}

export const ApproximateReportedProgress: Schema.Codec<ApproximateReportedProgress> =
  /*@__PURE__*/ Schema.Struct({
    consumedParallelism: Schema.optional(ReportedParallelism),
    fractionConsumed: Schema.optional(Schema.Number),
    remainingParallelism: Schema.optional(ReportedParallelism),
    position: Schema.optional(Position),
  }).annotate({ identifier: "ApproximateReportedProgress" });

export interface MetricStructuredName {
  /** Origin (namespace) of metric name. May be blank for user-define metrics; will be "dataflow" for metrics defined by the Dataflow service or SDK. */
  origin?: string;
  /** Worker-defined metric name. */
  name?: string;
  /** Zero or more labeled fields which identify the part of the job this metric is associated with, such as the name of a step or collection. For example, built-in counters associated with steps will have context['step'] = . Counters associated with PCollections in the SDK will have context['pcollection'] = . */
  context?: Record<string, string>;
}

export const MetricStructuredName: Schema.Codec<MetricStructuredName> =
  /*@__PURE__*/ Schema.Struct({
    origin: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    context: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "MetricStructuredName" });

export interface MetricUpdate {
  /** True if this metric is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this metric is reported as a delta that is not associated with any WorkItem. */
  cumulative?: boolean;
  /** Worker-computed aggregate value for aggregation kinds "Sum", "Max", "Min", "And", and "Or". The possible value types are Long, Double, and Boolean. */
  scalar?: unknown;
  /** Worker-computed aggregate value for the "Set" aggregation kind. The only possible value type is a list of Values whose type can be Long, Double, String, or BoundedTrie according to the metric's type. All Values in the list must be of the same type. */
  set?: unknown;
  /** A struct value describing properties of a distribution of numeric values. */
  distribution?: unknown;
  /** Worker-computed aggregate value for the "Mean" aggregation kind. This holds the sum of the aggregated values and is used in combination with mean_count below to obtain the actual mean aggregate value. The only possible value types are Long and Double. */
  meanSum?: unknown;
  /** Worker-computed aggregate value for the "Trie" aggregation kind. The only possible value type is a BoundedTrieNode. */
  trie?: unknown;
  /** Worker-computed aggregate value for internal use by the Dataflow service. */
  internal?: unknown;
  /** Timestamp associated with the metric value. Optional when workers are reporting work progress; it will be filled in responses from the metrics API. */
  updateTime?: string;
  /** A struct value describing properties of a Gauge. Metrics of gauge type show the value of a metric across time, and is aggregated based on the newest value. */
  gauge?: unknown;
  /** Worker-computed aggregate value for the "Trie" aggregation kind. The only possible value type is a BoundedTrieNode. Introduced this field to avoid breaking older SDKs when Dataflow service starts to populate the `bounded_trie` field. */
  boundedTrie?: unknown;
  /** Worker-computed aggregate value for the "Mean" aggregation kind. This holds the count of the aggregated values and is used in combination with mean_sum above to obtain the actual mean aggregate value. The only possible value type is Long. */
  meanCount?: unknown;
  /** Name of the metric. */
  name?: MetricStructuredName;
  /** Metric aggregation kind. The possible metric aggregation kinds are "Sum", "Max", "Min", "Mean", "Set", "And", "Or", and "Distribution". The specified aggregation kind is case-insensitive. If omitted, this is not an aggregated value but instead a single metric sample value. */
  kind?: string;
}

export const MetricUpdate: Schema.Codec<MetricUpdate> =
  /*@__PURE__*/ Schema.Struct({
    cumulative: Schema.optional(Schema.Boolean),
    scalar: Schema.optional(Schema.Unknown),
    set: Schema.optional(Schema.Unknown),
    distribution: Schema.optional(Schema.Unknown),
    meanSum: Schema.optional(Schema.Unknown),
    trie: Schema.optional(Schema.Unknown),
    internal: Schema.optional(Schema.Unknown),
    updateTime: Schema.optional(Schema.String),
    gauge: Schema.optional(Schema.Unknown),
    boundedTrie: Schema.optional(Schema.Unknown),
    meanCount: Schema.optional(Schema.Unknown),
    name: Schema.optional(MetricStructuredName),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "MetricUpdate" });

export interface SourceFork {
  /** DEPRECATED */
  primary?: SourceSplitShard;
  /** DEPRECATED */
  primarySource?: DerivedSource;
  /** DEPRECATED */
  residual?: SourceSplitShard;
  /** DEPRECATED */
  residualSource?: DerivedSource;
}

export const SourceFork: Schema.Codec<SourceFork> =
  /*@__PURE__*/ Schema.Struct({
    primary: Schema.optional(SourceSplitShard),
    primarySource: Schema.optional(DerivedSource),
    residual: Schema.optional(SourceSplitShard),
    residualSource: Schema.optional(DerivedSource),
  }).annotate({ identifier: "SourceFork" });

export interface StringList {
  /** Elements of the list. */
  elements?: ReadonlyArray<string>;
}

export const StringList: Schema.Codec<StringList> =
  /*@__PURE__*/ Schema.Struct({
    elements: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "StringList" });

export interface SplitInt64 {
  /** The low order bits: n & 0xffffffff. */
  lowBits?: number;
  /** The high order bits, including the sign: n >> 32. */
  highBits?: number;
}

export const SplitInt64: Schema.Codec<SplitInt64> =
  /*@__PURE__*/ Schema.Struct({
    lowBits: Schema.optional(Schema.Number),
    highBits: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SplitInt64" });

export interface IntegerGauge {
  /** The value of the variable represented by this gauge. */
  value?: SplitInt64;
  /** The time at which this value was measured. Measured as msecs from epoch. */
  timestamp?: string;
}

export const IntegerGauge: Schema.Codec<IntegerGauge> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(SplitInt64),
    timestamp: Schema.optional(Schema.String),
  }).annotate({ identifier: "IntegerGauge" });

export interface BoundedTrieNode {
  /** Whether this node has been truncated. A truncated leaf represents possibly many children with the same prefix. */
  truncated?: boolean;
  /** Children of this node. Must be empty if truncated is true. */
  children?: Record<string, BoundedTrieNode>;
}

export const BoundedTrieNode: Schema.Codec<BoundedTrieNode> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      truncated: Schema.optional(Schema.Boolean),
      children: Schema.optional(Schema.Record(Schema.String, BoundedTrieNode)),
    }),
  ).annotate({
    identifier: "BoundedTrieNode",
  }) as any as Schema.Codec<BoundedTrieNode>;

export interface BoundedTrie {
  /** A compact representation of all the elements in this trie. */
  root?: BoundedTrieNode;
  /** The maximum number of elements to store before truncation. */
  bound?: number;
  /** A more efficient representation for metrics consisting of a single value. */
  singleton?: ReadonlyArray<string>;
}

export const BoundedTrie: Schema.Codec<BoundedTrie> =
  /*@__PURE__*/ Schema.Struct({
    root: Schema.optional(BoundedTrieNode),
    bound: Schema.optional(Schema.Number),
    singleton: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BoundedTrie" });

export interface NameAndKind {
  /** Name of the counter. */
  name?: string;
  /** Counter aggregation kind. */
  kind?:
    | "INVALID"
    | "SUM"
    | "MAX"
    | "MIN"
    | "MEAN"
    | "OR"
    | "AND"
    | "SET"
    | "DISTRIBUTION"
    | "LATEST_VALUE"
    | (string & {});
}

export const NameAndKind: Schema.Codec<NameAndKind> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "NameAndKind" });

export interface IntegerList {
  /** Elements of the list. */
  elements?: ReadonlyArray<SplitInt64>;
}

export const IntegerList: Schema.Codec<IntegerList> =
  /*@__PURE__*/ Schema.Struct({
    elements: Schema.optional(Schema.Array(SplitInt64)),
  }).annotate({ identifier: "IntegerList" });

export interface IntegerMean {
  /** The sum of all values being aggregated. */
  sum?: SplitInt64;
  /** The number of values being aggregated. */
  count?: SplitInt64;
}

export const IntegerMean: Schema.Codec<IntegerMean> =
  /*@__PURE__*/ Schema.Struct({
    sum: Schema.optional(SplitInt64),
    count: Schema.optional(SplitInt64),
  }).annotate({ identifier: "IntegerMean" });

export interface FloatingPointMean {
  /** The sum of all values being aggregated. */
  sum?: number;
  /** The number of values being aggregated. */
  count?: SplitInt64;
}

export const FloatingPointMean: Schema.Codec<FloatingPointMean> =
  /*@__PURE__*/ Schema.Struct({
    sum: Schema.optional(Schema.Number),
    count: Schema.optional(SplitInt64),
  }).annotate({ identifier: "FloatingPointMean" });

export interface CounterStructuredName {
  /** Name of the optimized step being executed by the workers. */
  componentStepName?: string;
  /** A string containing a more specific namespace of the counter's origin. */
  originNamespace?: string;
  /** Counter name. Not necessarily globally-unique, but unique within the context of the other fields. Required. */
  name?: string;
  /** System generated name of the original step in the user's graph, before optimization. */
  originalStepName?: string;
  /** Name of the stage. An execution step contains multiple component steps. */
  executionStepName?: string;
  /** One of the standard Origins defined above. */
  origin?: "SYSTEM" | "USER" | (string & {});
  /** Portion of this counter, either key or value. */
  portion?: "ALL" | "KEY" | "VALUE" | (string & {});
  /** ID of a particular worker. */
  workerId?: string;
  /** Index of an input collection that's being read from/written to as a side input. The index identifies a step's side inputs starting by 1 (e.g. the first side input has input_index 1, the third has input_index 3). Side inputs are identified by a pair of (original_step_name, input_index). This field helps uniquely identify them. */
  inputIndex?: number;
  /** The step name requesting an operation, such as GBK. I.e. the ParDo causing a read/write from shuffle to occur, or a read from side inputs. */
  originalRequestingStepName?: string;
}

export const CounterStructuredName: Schema.Codec<CounterStructuredName> =
  /*@__PURE__*/ Schema.Struct({
    componentStepName: Schema.optional(Schema.String),
    originNamespace: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    originalStepName: Schema.optional(Schema.String),
    executionStepName: Schema.optional(Schema.String),
    origin: Schema.optional(Schema.String),
    portion: Schema.optional(Schema.String),
    workerId: Schema.optional(Schema.String),
    inputIndex: Schema.optional(Schema.Number),
    originalRequestingStepName: Schema.optional(Schema.String),
  }).annotate({ identifier: "CounterStructuredName" });

export interface CounterMetadata {
  /** Human-readable description of the counter semantics. */
  description?: string;
  /** System defined Units, see above enum. */
  standardUnits?:
    | "BYTES"
    | "BYTES_PER_SEC"
    | "MILLISECONDS"
    | "MICROSECONDS"
    | "NANOSECONDS"
    | "TIMESTAMP_MSEC"
    | "TIMESTAMP_USEC"
    | "TIMESTAMP_NSEC"
    | (string & {});
  /** Counter aggregation kind. */
  kind?:
    | "INVALID"
    | "SUM"
    | "MAX"
    | "MIN"
    | "MEAN"
    | "OR"
    | "AND"
    | "SET"
    | "DISTRIBUTION"
    | "LATEST_VALUE"
    | (string & {});
  /** A string referring to the unit type. */
  otherUnits?: string;
}

export const CounterMetadata: Schema.Codec<CounterMetadata> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    standardUnits: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    otherUnits: Schema.optional(Schema.String),
  }).annotate({ identifier: "CounterMetadata" });

export interface CounterStructuredNameAndMetadata {
  /** Structured name of the counter. */
  name?: CounterStructuredName;
  /** Metadata associated with a counter */
  metadata?: CounterMetadata;
}

export const CounterStructuredNameAndMetadata: Schema.Codec<CounterStructuredNameAndMetadata> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(CounterStructuredName),
    metadata: Schema.optional(CounterMetadata),
  }).annotate({ identifier: "CounterStructuredNameAndMetadata" });

export interface FloatingPointList {
  /** Elements of the list. */
  elements?: ReadonlyArray<number>;
}

export const FloatingPointList: Schema.Codec<FloatingPointList> =
  /*@__PURE__*/ Schema.Struct({
    elements: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "FloatingPointList" });

export interface Histogram {
  /** Starting index of first stored bucket. The non-inclusive upper-bound of the ith bucket is given by: pow(10,(i-first_bucket_offset)/3) * (1,2,5)[(i-first_bucket_offset)%3] */
  firstBucketOffset?: number;
  /** Counts of values in each bucket. For efficiency, prefix and trailing buckets with count = 0 are elided. Buckets can store the full range of values of an unsigned long, with ULLONG_MAX falling into the 59th bucket with range [1e19, 2e19). */
  bucketCounts?: ReadonlyArray<string>;
}

export const Histogram: Schema.Codec<Histogram> =
  /*@__PURE__*/ Schema.Struct({
    firstBucketOffset: Schema.optional(Schema.Number),
    bucketCounts: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Histogram" });

export interface DistributionUpdate {
  /** The minimum value present in the distribution. */
  min?: SplitInt64;
  /** The maximum value present in the distribution. */
  max?: SplitInt64;
  /** Use a double since the sum of squares is likely to overflow int64. */
  sumOfSquares?: number;
  /** The count of the number of elements present in the distribution. */
  count?: SplitInt64;
  /** Use an int64 since we'd prefer the added precision. If overflow is a common problem we can detect it and use an additional int64 or a double. */
  sum?: SplitInt64;
  /** (Optional) Histogram of value counts for the distribution. */
  histogram?: Histogram;
}

export const DistributionUpdate: Schema.Codec<DistributionUpdate> =
  /*@__PURE__*/ Schema.Struct({
    min: Schema.optional(SplitInt64),
    max: Schema.optional(SplitInt64),
    sumOfSquares: Schema.optional(Schema.Number),
    count: Schema.optional(SplitInt64),
    sum: Schema.optional(SplitInt64),
    histogram: Schema.optional(Histogram),
  }).annotate({ identifier: "DistributionUpdate" });

export interface CounterUpdate {
  /** List of strings, for Set. */
  stringList?: StringList;
  /** Gauge data */
  integerGauge?: IntegerGauge;
  /** Bounded trie data */
  boundedTrie?: BoundedTrie;
  /** Boolean value for And, Or. */
  boolean?: boolean;
  /** Counter name and aggregation type. */
  nameAndKind?: NameAndKind;
  /** List of integers, for Set. */
  integerList?: IntegerList;
  /** Integer mean aggregation value for Mean. */
  integerMean?: IntegerMean;
  /** True if this counter is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this counter is reported as a delta. */
  cumulative?: boolean;
  /** Floating point mean aggregation value for Mean. */
  floatingPointMean?: FloatingPointMean;
  /** Counter structured name and metadata. */
  structuredNameAndMetadata?: CounterStructuredNameAndMetadata;
  /** Value for internally-defined counters used by the Dataflow service. */
  internal?: unknown;
  /** Integer value for Sum, Max, Min. */
  integer?: SplitInt64;
  /** Floating point value for Sum, Max, Min. */
  floatingPoint?: number;
  /** List of floating point numbers, for Set. */
  floatingPointList?: FloatingPointList;
  /** Distribution data */
  distribution?: DistributionUpdate;
  /** The service-generated short identifier for this counter. The short_id -> (name, metadata) mapping is constant for the lifetime of a job. */
  shortId?: string;
}

export const CounterUpdate: Schema.Codec<CounterUpdate> =
  /*@__PURE__*/ Schema.Struct({
    stringList: Schema.optional(StringList),
    integerGauge: Schema.optional(IntegerGauge),
    boundedTrie: Schema.optional(BoundedTrie),
    boolean: Schema.optional(Schema.Boolean),
    nameAndKind: Schema.optional(NameAndKind),
    integerList: Schema.optional(IntegerList),
    integerMean: Schema.optional(IntegerMean),
    cumulative: Schema.optional(Schema.Boolean),
    floatingPointMean: Schema.optional(FloatingPointMean),
    structuredNameAndMetadata: Schema.optional(
      CounterStructuredNameAndMetadata,
    ),
    internal: Schema.optional(Schema.Unknown),
    integer: Schema.optional(SplitInt64),
    floatingPoint: Schema.optional(Schema.Number),
    floatingPointList: Schema.optional(FloatingPointList),
    distribution: Schema.optional(DistributionUpdate),
    shortId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CounterUpdate" });

export interface ApproximateProgress {
  /** Obsolete. */
  percentComplete?: number;
  /** Obsolete. */
  position?: Position;
  /** Obsolete. */
  remainingTime?: string;
}

export const ApproximateProgress: Schema.Codec<ApproximateProgress> =
  /*@__PURE__*/ Schema.Struct({
    percentComplete: Schema.optional(Schema.Number),
    position: Schema.optional(Position),
    remainingTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApproximateProgress" });

export interface DynamicSourceSplit {
  /** Primary part (continued to be processed by worker). Specified relative to the previously-current source. Becomes current. */
  primary?: DerivedSource;
  /** Residual part (returned to the pool of work). Specified relative to the previously-current source. */
  residual?: DerivedSource;
}

export const DynamicSourceSplit: Schema.Codec<DynamicSourceSplit> =
  /*@__PURE__*/ Schema.Struct({
    primary: Schema.optional(DerivedSource),
    residual: Schema.optional(DerivedSource),
  }).annotate({ identifier: "DynamicSourceSplit" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface WorkItemStatus {
  /** If the work item represented a SourceOperationRequest, and the work is completed, contains the result of the operation. */
  sourceOperationResponse?: SourceOperationResponse;
  /** The worker's progress through this WorkItem. */
  reportedProgress?: ApproximateReportedProgress;
  /** DEPRECATED in favor of counter_updates. */
  metricUpdates?: ReadonlyArray<MetricUpdate>;
  /** DEPRECATED in favor of dynamic_source_split. */
  sourceFork?: SourceFork;
  /** Identifies the WorkItem. */
  workItemId?: string;
  /** Worker output counters for this WorkItem. */
  counterUpdates?: ReadonlyArray<CounterUpdate>;
  /** DEPRECATED in favor of reported_progress. */
  progress?: ApproximateProgress;
  /** A worker may split an active map task in two parts, "primary" and "residual", continuing to process the primary part and returning the residual part into the pool of available work. This event is called a "dynamic split" and is critical to the dynamic work rebalancing feature. The two obtained sub-tasks are called "parts" of the split. The parts, if concatenated, must represent the same input as would be read by the current task if the split did not happen. The exact way in which the original task is decomposed into the two parts is specified either as a position demarcating them (stop_position), or explicitly as two DerivedSources, if this task consumes a user-defined source type (dynamic_source_split). The "current" task is adjusted as a result of the split: after a task with range [A, B) sends a stop_position update at C, its range is considered to be [A, C), e.g.: * Progress should be interpreted relative to the new range, e.g. "75% completed" means "75% of [A, C) completed" * The worker should interpret proposed_stop_position relative to the new range, e.g. "split at 68%" should be interpreted as "split at 68% of [A, C)". * If the worker chooses to split again using stop_position, only stop_positions in [A, C) will be accepted. * Etc. dynamic_source_split has similar semantics: e.g., if a task with source S splits using dynamic_source_split into {P, R} (where P and R must be together equivalent to S), then subsequent progress and proposed_stop_position should be interpreted relative to P, and in a potential subsequent dynamic_source_split into {P', R'}, P' and R' must be together equivalent to P, etc. */
  stopPosition?: Position;
  /** See documentation of stop_position. */
  dynamicSourceSplit?: DynamicSourceSplit;
  /** Total time the worker spent being throttled by external systems. */
  totalThrottlerWaitTimeSeconds?: number;
  /** Amount of time the worker requests for its lease. */
  requestedLeaseDuration?: string;
  /** The report index. When a WorkItem is leased, the lease will contain an initial report index. When a WorkItem's status is reported to the system, the report should be sent with that report index, and the response will contain the index the worker should use for the next report. Reports received with unexpected index values will be rejected by the service. In order to preserve idempotency, the worker should not alter the contents of a report, even if the worker must submit the same report multiple times before getting back a response. The worker should not submit a subsequent report until the response for the previous report had been received from the service. */
  reportIndex?: string;
  /** True if the WorkItem was completed (successfully or unsuccessfully). */
  completed?: boolean;
  /** Specifies errors which occurred during processing. If errors are provided, and completed = true, then the WorkItem is considered to have failed. */
  errors?: ReadonlyArray<Status>;
}

export const WorkItemStatus: Schema.Codec<WorkItemStatus> =
  /*@__PURE__*/ Schema.Struct({
    sourceOperationResponse: Schema.optional(SourceOperationResponse),
    reportedProgress: Schema.optional(ApproximateReportedProgress),
    metricUpdates: Schema.optional(Schema.Array(MetricUpdate)),
    sourceFork: Schema.optional(SourceFork),
    workItemId: Schema.optional(Schema.String),
    counterUpdates: Schema.optional(Schema.Array(CounterUpdate)),
    progress: Schema.optional(ApproximateProgress),
    stopPosition: Schema.optional(Position),
    dynamicSourceSplit: Schema.optional(DynamicSourceSplit),
    totalThrottlerWaitTimeSeconds: Schema.optional(Schema.Number),
    requestedLeaseDuration: Schema.optional(Schema.String),
    reportIndex: Schema.optional(Schema.String),
    completed: Schema.optional(Schema.Boolean),
    errors: Schema.optional(Schema.Array(Status)),
  }).annotate({ identifier: "WorkItemStatus" });

export interface ReportWorkItemStatusRequest {
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job. */
  location?: string;
  /** Optional. The project number of the project which owns the WorkItem's job. */
  projectNumber?: string;
  /** The ID of the worker reporting the WorkItem status. If this does not match the ID of the worker which the Dataflow service believes currently has the lease on the WorkItem, the report will be dropped (with an error response). */
  workerId?: string;
  /** Untranslated bag-of-bytes WorkProgressUpdateRequest from UnifiedWorker. */
  unifiedWorkerRequest?: Record<string, unknown>;
  /** The order is unimportant, except that the order of the WorkItemServiceState messages in the ReportWorkItemStatusResponse corresponds to the order of WorkItemStatus messages here. */
  workItemStatuses?: ReadonlyArray<WorkItemStatus>;
  /** The current timestamp at the worker. */
  currentWorkerTime?: string;
}

export const ReportWorkItemStatusRequest: Schema.Codec<ReportWorkItemStatusRequest> =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    projectNumber: Schema.optional(Schema.String),
    workerId: Schema.optional(Schema.String),
    unifiedWorkerRequest: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    workItemStatuses: Schema.optional(Schema.Array(WorkItemStatus)),
    currentWorkerTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportWorkItemStatusRequest" });

export interface ComponentSource {
  /** User name for the original user transform or collection with which this source is most closely associated. */
  originalTransformOrCollection?: string;
  /** Human-readable name for this transform; may be user or system generated. */
  userName?: string;
  /** Dataflow service generated name for this source. */
  name?: string;
}

export const ComponentSource: Schema.Codec<ComponentSource> =
  /*@__PURE__*/ Schema.Struct({
    originalTransformOrCollection: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComponentSource" });

export interface StageSource {
  /** Dataflow service generated name for this source. */
  name?: string;
  /** Human-readable name for this source; may be user or system generated. */
  userName?: string;
  /** User name for the original user transform or collection with which this source is most closely associated. */
  originalTransformOrCollection?: string;
  /** Size of the source, if measurable. */
  sizeBytes?: string;
}

export const StageSource: Schema.Codec<StageSource> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    originalTransformOrCollection: Schema.optional(Schema.String),
    sizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "StageSource" });

export interface ComponentTransform {
  /** Dataflow service generated name for this source. */
  name?: string;
  /** User name for the original user transform with which this transform is most closely associated. */
  originalTransform?: string;
  /** Human-readable name for this transform; may be user or system generated. */
  userName?: string;
}

export const ComponentTransform: Schema.Codec<ComponentTransform> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    originalTransform: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComponentTransform" });

export interface ExecutionStageSummary {
  /** Type of transform this stage is executing. */
  kind?:
    | "UNKNOWN_KIND"
    | "PAR_DO_KIND"
    | "GROUP_BY_KEY_KIND"
    | "FLATTEN_KIND"
    | "READ_KIND"
    | "WRITE_KIND"
    | "CONSTANT_KIND"
    | "SINGLETON_KIND"
    | "SHUFFLE_KIND"
    | (string & {});
  /** Collections produced and consumed by component transforms of this stage. */
  componentSource?: ReadonlyArray<ComponentSource>;
  /** Other stages that must complete before this stage can run. */
  prerequisiteStage?: ReadonlyArray<string>;
  /** Input sources for this stage. */
  inputSource?: ReadonlyArray<StageSource>;
  /** Dataflow service generated id for this stage. */
  id?: string;
  /** Transforms that comprise this execution stage. */
  componentTransform?: ReadonlyArray<ComponentTransform>;
  /** Dataflow service generated name for this stage. */
  name?: string;
  /** Output sources for this stage. */
  outputSource?: ReadonlyArray<StageSource>;
}

export const ExecutionStageSummary: Schema.Codec<ExecutionStageSummary> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    componentSource: Schema.optional(Schema.Array(ComponentSource)),
    prerequisiteStage: Schema.optional(Schema.Array(Schema.String)),
    inputSource: Schema.optional(Schema.Array(StageSource)),
    id: Schema.optional(Schema.String),
    componentTransform: Schema.optional(Schema.Array(ComponentTransform)),
    name: Schema.optional(Schema.String),
    outputSource: Schema.optional(Schema.Array(StageSource)),
  }).annotate({ identifier: "ExecutionStageSummary" });

export interface MemInfo {
  /** Instantenous memory limit in bytes. */
  currentLimitBytes?: string;
  /** Timestamp of the measurement. */
  timestamp?: string;
  /** Instantenous memory (RSS) size in bytes. */
  currentRssBytes?: string;
  /** Total memory (RSS) usage since start up in GB * ms. */
  totalGbMs?: string;
  /** Number of Out of Memory (OOM) events recorded since the previous measurement. */
  currentOoms?: string;
}

export const MemInfo: Schema.Codec<MemInfo> =
  /*@__PURE__*/ Schema.Struct({
    currentLimitBytes: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    currentRssBytes: Schema.optional(Schema.String),
    totalGbMs: Schema.optional(Schema.String),
    currentOoms: Schema.optional(Schema.String),
  }).annotate({ identifier: "MemInfo" });

export interface WorkerSettings {
  /** The Shuffle service path relative to the root URL, for example, "shuffle/v1beta1". */
  shuffleServicePath?: string;
  /** Whether to send work progress updates to the service. */
  reportingEnabled?: boolean;
  /** The Cloud Dataflow service path relative to the root URL, for example, "dataflow/v1b3/projects". */
  servicePath?: string;
  /** The ID of the worker running this pipeline. */
  workerId?: string;
  /** The prefix of the resources the system should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} */
  tempStoragePrefix?: string;
  /** The base URL for accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/" */
  baseUrl?: string;
}

export const WorkerSettings: Schema.Codec<WorkerSettings> =
  /*@__PURE__*/ Schema.Struct({
    shuffleServicePath: Schema.optional(Schema.String),
    reportingEnabled: Schema.optional(Schema.Boolean),
    servicePath: Schema.optional(Schema.String),
    workerId: Schema.optional(Schema.String),
    tempStoragePrefix: Schema.optional(Schema.String),
    baseUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkerSettings" });

export interface Parameter {
  /** Key or name for this parameter. */
  key?: string;
  /** Value for this parameter. */
  value?: unknown;
}

export const Parameter: Schema.Codec<Parameter> =
  /*@__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Unknown),
  }).annotate({ identifier: "Parameter" });

export interface StructuredMessage {
  /** Human-readable version of message. */
  messageText?: string;
  /** Identifier for this message type. Used by external systems to internationalize or personalize message. */
  messageKey?: string;
  /** The structured data associated with this message. */
  parameters?: ReadonlyArray<Parameter>;
}

export const StructuredMessage: Schema.Codec<StructuredMessage> =
  /*@__PURE__*/ Schema.Struct({
    messageText: Schema.optional(Schema.String),
    messageKey: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Array(Parameter)),
  }).annotate({ identifier: "StructuredMessage" });

export interface AutoscalingEvent {
  /** The current number of workers the job has. */
  currentNumWorkers?: string;
  /** The target number of workers the worker pool wants to resize to use. */
  targetNumWorkers?: string;
  /** The time this event was emitted to indicate a new target or current num_workers value. */
  time?: string;
  /** A short and friendly name for the worker pool this event refers to. */
  workerPool?: string;
  /** The type of autoscaling event to report. */
  eventType?:
    | "TYPE_UNKNOWN"
    | "TARGET_NUM_WORKERS_CHANGED"
    | "CURRENT_NUM_WORKERS_CHANGED"
    | "ACTUATION_FAILURE"
    | "NO_CHANGE"
    | (string & {});
  /** A message describing why the system decided to adjust the current number of workers, why it failed, or why the system decided to not make any changes to the number of workers. */
  description?: StructuredMessage;
}

export const AutoscalingEvent: Schema.Codec<AutoscalingEvent> =
  /*@__PURE__*/ Schema.Struct({
    currentNumWorkers: Schema.optional(Schema.String),
    targetNumWorkers: Schema.optional(Schema.String),
    time: Schema.optional(Schema.String),
    workerPool: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
    description: Schema.optional(StructuredMessage),
  }).annotate({ identifier: "AutoscalingEvent" });

export interface JobMessage {
  /** Deprecated. */
  id?: string;
  /** The timestamp of the message. */
  time?: string;
  /** Importance level of the message. */
  messageImportance?:
    | "JOB_MESSAGE_IMPORTANCE_UNKNOWN"
    | "JOB_MESSAGE_DEBUG"
    | "JOB_MESSAGE_DETAILED"
    | "JOB_MESSAGE_BASIC"
    | "JOB_MESSAGE_WARNING"
    | "JOB_MESSAGE_ERROR"
    | (string & {});
  /** The text of the message. */
  messageText?: string;
}

export const JobMessage: Schema.Codec<JobMessage> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    time: Schema.optional(Schema.String),
    messageImportance: Schema.optional(Schema.String),
    messageText: Schema.optional(Schema.String),
  }).annotate({ identifier: "JobMessage" });

export interface ListJobMessagesResponse {
  /** The token to obtain the next page of results if there are more. */
  nextPageToken?: string;
  /** Autoscaling events in ascending timestamp order. */
  autoscalingEvents?: ReadonlyArray<AutoscalingEvent>;
  /** Messages in ascending timestamp order. */
  jobMessages?: ReadonlyArray<JobMessage>;
}

export const ListJobMessagesResponse: Schema.Codec<ListJobMessagesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    autoscalingEvents: Schema.optional(Schema.Array(AutoscalingEvent)),
    jobMessages: Schema.optional(Schema.Array(JobMessage)),
  }).annotate({ identifier: "ListJobMessagesResponse" });

export interface StreamingStragglerInfo {
  /** Start time of this straggler. */
  startTime?: string;
  /** End time of this straggler. */
  endTime?: string;
  /** Name of the worker where the straggler was detected. */
  workerName?: string;
  /** The event-time watermark lag at the time of the straggler detection. */
  dataWatermarkLag?: string;
  /** The system watermark lag at the time of the straggler detection. */
  systemWatermarkLag?: string;
}

export const StreamingStragglerInfo: Schema.Codec<StreamingStragglerInfo> =
  /*@__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    workerName: Schema.optional(Schema.String),
    dataWatermarkLag: Schema.optional(Schema.String),
    systemWatermarkLag: Schema.optional(Schema.String),
  }).annotate({ identifier: "StreamingStragglerInfo" });

export interface HotKeyInfo {
  /** The age of the hot key measured from when it was first detected. */
  hotKeyAge?: string;
  /** If true, then the above key is truncated and cannot be deserialized. This occurs if the key above is populated and the key size is >5MB. */
  keyTruncated?: boolean;
  /** A detected hot key that is causing limited parallelism. This field will be populated only if the following flag is set to true: "--enable_hot_key_logging". */
  key?: string;
}

export const HotKeyInfo: Schema.Codec<HotKeyInfo> =
  /*@__PURE__*/ Schema.Struct({
    hotKeyAge: Schema.optional(Schema.String),
    keyTruncated: Schema.optional(Schema.Boolean),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "HotKeyInfo" });

export interface HotKeyDebuggingInfo {
  /** Debugging information for each detected hot key. Keyed by a hash of the key. */
  detectedHotKeys?: Record<string, HotKeyInfo>;
}

export const HotKeyDebuggingInfo: Schema.Codec<HotKeyDebuggingInfo> =
  /*@__PURE__*/ Schema.Struct({
    detectedHotKeys: Schema.optional(Schema.Record(Schema.String, HotKeyInfo)),
  }).annotate({ identifier: "HotKeyDebuggingInfo" });

export interface StragglerDebuggingInfo {
  /** Hot key debugging details. */
  hotKey?: HotKeyDebuggingInfo;
}

export const StragglerDebuggingInfo: Schema.Codec<StragglerDebuggingInfo> =
  /*@__PURE__*/ Schema.Struct({
    hotKey: Schema.optional(HotKeyDebuggingInfo),
  }).annotate({ identifier: "StragglerDebuggingInfo" });

export interface StragglerInfo {
  /** The straggler causes, keyed by the string representation of the StragglerCause enum and contains specialized debugging information for each straggler cause. */
  causes?: Record<string, StragglerDebuggingInfo>;
  /** The time when the work item attempt became a straggler. */
  startTime?: string;
}

export const StragglerInfo: Schema.Codec<StragglerInfo> =
  /*@__PURE__*/ Schema.Struct({
    causes: Schema.optional(
      Schema.Record(Schema.String, StragglerDebuggingInfo),
    ),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "StragglerInfo" });

export interface Straggler {
  /** Streaming straggler identification and debugging information. */
  streamingStraggler?: StreamingStragglerInfo;
  /** Batch straggler identification and debugging information. */
  batchStraggler?: StragglerInfo;
}

export const Straggler: Schema.Codec<Straggler> =
  /*@__PURE__*/ Schema.Struct({
    streamingStraggler: Schema.optional(StreamingStragglerInfo),
    batchStraggler: Schema.optional(StragglerInfo),
  }).annotate({ identifier: "Straggler" });

export interface StragglerSummary {
  /** The most recent stragglers. */
  recentStragglers?: ReadonlyArray<Straggler>;
  /** The total count of stragglers. */
  totalStragglerCount?: string;
  /** Aggregated counts of straggler causes, keyed by the string representation of the StragglerCause enum. */
  stragglerCauseCount?: Record<string, string>;
}

export const StragglerSummary: Schema.Codec<StragglerSummary> =
  /*@__PURE__*/ Schema.Struct({
    recentStragglers: Schema.optional(Schema.Array(Straggler)),
    totalStragglerCount: Schema.optional(Schema.String),
    stragglerCauseCount: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "StragglerSummary" });

export interface Point {
  /** The timestamp of the point. */
  time?: string;
  /** The value of the point. */
  value?: number;
}

export const Point: Schema.Codec<Point> =
  /*@__PURE__*/ Schema.Struct({
    time: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Point" });

export interface ProgressTimeseries {
  /** History of progress for the component. Points are sorted by time. */
  dataPoints?: ReadonlyArray<Point>;
  /** The current progress of the component, in the range [0,1]. */
  currentProgress?: number;
}

export const ProgressTimeseries: Schema.Codec<ProgressTimeseries> =
  /*@__PURE__*/ Schema.Struct({
    dataPoints: Schema.optional(Schema.Array(Point)),
    currentProgress: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ProgressTimeseries" });

export interface StageSummary {
  /** Straggler summary for this stage. */
  stragglerSummary?: StragglerSummary;
  /** ID of this stage */
  stageId?: string;
  /** Metrics for this stage. */
  metrics?: ReadonlyArray<MetricUpdate>;
  /** Progress for this stage. Only applicable to Batch jobs. */
  progress?: ProgressTimeseries;
  /** End time of this stage. If the work item is completed, this is the actual end time of the stage. Otherwise, it is the predicted end time. */
  endTime?: string;
  /** State of this stage. */
  state?:
    | "EXECUTION_STATE_UNKNOWN"
    | "EXECUTION_STATE_NOT_STARTED"
    | "EXECUTION_STATE_RUNNING"
    | "EXECUTION_STATE_SUCCEEDED"
    | "EXECUTION_STATE_FAILED"
    | "EXECUTION_STATE_CANCELLED"
    | (string & {});
  /** Start time of this stage. */
  startTime?: string;
}

export const StageSummary: Schema.Codec<StageSummary> =
  /*@__PURE__*/ Schema.Struct({
    stragglerSummary: Schema.optional(StragglerSummary),
    stageId: Schema.optional(Schema.String),
    metrics: Schema.optional(Schema.Array(MetricUpdate)),
    progress: Schema.optional(ProgressTimeseries),
    endTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "StageSummary" });

export interface InstructionInput {
  /** The index (origin zero) of the parallel instruction that produces the output to be consumed by this input. This index is relative to the list of instructions in this input's instruction's containing MapTask. */
  producerInstructionIndex?: number;
  /** The output index (origin zero) within the producer. */
  outputNum?: number;
}

export const InstructionInput: Schema.Codec<InstructionInput> =
  /*@__PURE__*/ Schema.Struct({
    producerInstructionIndex: Schema.optional(Schema.Number),
    outputNum: Schema.optional(Schema.Number),
  }).annotate({ identifier: "InstructionInput" });

export interface FlattenInstruction {
  /** Describes the inputs to the flatten instruction. */
  inputs?: ReadonlyArray<InstructionInput>;
}

export const FlattenInstruction: Schema.Codec<FlattenInstruction> =
  /*@__PURE__*/ Schema.Struct({
    inputs: Schema.optional(Schema.Array(InstructionInput)),
  }).annotate({ identifier: "FlattenInstruction" });

export interface HotKeyDetection {
  /** The age of the hot key measured from when it was first detected. */
  hotKeyAge?: string;
  /** User-provided name of the step that contains this hot key. */
  userStepName?: string;
  /** System-defined name of the step containing this hot key. Unique across the workflow. */
  systemName?: string;
}

export const HotKeyDetection: Schema.Codec<HotKeyDetection> =
  /*@__PURE__*/ Schema.Struct({
    hotKeyAge: Schema.optional(Schema.String),
    userStepName: Schema.optional(Schema.String),
    systemName: Schema.optional(Schema.String),
  }).annotate({ identifier: "HotKeyDetection" });

export interface SendDebugCaptureResponse {}

export const SendDebugCaptureResponse: Schema.Codec<SendDebugCaptureResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SendDebugCaptureResponse",
  });

export interface Stack {
  /** With java thread dumps we may get collapsed stacks e.g., N threads in stack "". Instead of having to copy over the same stack trace N times, this int field captures this. */
  threadCount?: number;
  /** Thread name. For example, "CommitThread-0,10,main" */
  threadName?: string;
  /** The state of the thread. For example, "WAITING". */
  threadState?: string;
  /** The raw stack trace. */
  stackContent?: string;
  /** Timestamp at which the stack was captured. */
  timestamp?: string;
}

export const Stack: Schema.Codec<Stack> =
  /*@__PURE__*/ Schema.Struct({
    threadCount: Schema.optional(Schema.Number),
    threadName: Schema.optional(Schema.String),
    threadState: Schema.optional(Schema.String),
    stackContent: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
  }).annotate({ identifier: "Stack" });

export interface ParameterMetadataEnumOption {
  /** Optional. The description to display for the enum option. */
  description?: string;
  /** Required. The value of the enum option. */
  value?: string;
  /** Optional. The label to display for the enum option. */
  label?: string;
}

export const ParameterMetadataEnumOption: Schema.Codec<ParameterMetadataEnumOption> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
  }).annotate({ identifier: "ParameterMetadataEnumOption" });

export interface ParameterMetadata {
  /** Optional. The options shown when ENUM ParameterType is specified. */
  enumOptions?: ReadonlyArray<ParameterMetadataEnumOption>;
  /** Required. The help text to display for the parameter. */
  helpText?: string;
  /** Optional. The value(s) of the 'parent_name' parameter which will trigger this parameter to be shown. If left empty, ANY non-empty value in parent_name will trigger this parameter to be shown. Only considered when this parameter is conditional (when 'parent_name' has been provided). */
  parentTriggerValues?: ReadonlyArray<string>;
  /** Optional. Whether the parameter should be hidden in the UI. */
  hiddenUi?: boolean;
  /** Optional. Additional metadata for describing this parameter. */
  customMetadata?: Record<string, string>;
  /** Optional. Specifies the name of the parent parameter. Used in conjunction with 'parent_trigger_values' to make this parameter conditional (will only be rendered conditionally). Should be mappable to a ParameterMetadata.name field. */
  parentName?: string;
  /** Required. The name of the parameter. */
  name?: string;
  /** Optional. Whether the parameter is optional. Defaults to false. */
  isOptional?: boolean;
  /** Optional. Regexes that the parameter must match. */
  regexes?: ReadonlyArray<string>;
  /** Required. The label to display for the parameter. */
  label?: string;
  /** Optional. The type of the parameter. Used for selecting input picker. */
  paramType?:
    | "DEFAULT"
    | "TEXT"
    | "GCS_READ_BUCKET"
    | "GCS_WRITE_BUCKET"
    | "GCS_READ_FILE"
    | "GCS_WRITE_FILE"
    | "GCS_READ_FOLDER"
    | "GCS_WRITE_FOLDER"
    | "PUBSUB_TOPIC"
    | "PUBSUB_SUBSCRIPTION"
    | "BIGQUERY_TABLE"
    | "JAVASCRIPT_UDF_FILE"
    | "SERVICE_ACCOUNT"
    | "MACHINE_TYPE"
    | "KMS_KEY_NAME"
    | "WORKER_REGION"
    | "WORKER_ZONE"
    | "BOOLEAN"
    | "ENUM"
    | "NUMBER"
    | "KAFKA_TOPIC"
    | "KAFKA_READ_TOPIC"
    | "KAFKA_WRITE_TOPIC"
    | (string & {});
  /** Optional. Specifies a group name for this parameter to be rendered under. Group header text will be rendered exactly as specified in this field. Only considered when parent_name is NOT provided. */
  groupName?: string;
  /** Optional. The default values will pre-populate the parameter with the given value from the proto. If default_value is left empty, the parameter will be populated with a default of the relevant type, e.g. false for a boolean. */
  defaultValue?: string;
}

export const ParameterMetadata: Schema.Codec<ParameterMetadata> =
  /*@__PURE__*/ Schema.Struct({
    enumOptions: Schema.optional(Schema.Array(ParameterMetadataEnumOption)),
    helpText: Schema.optional(Schema.String),
    parentTriggerValues: Schema.optional(Schema.Array(Schema.String)),
    hiddenUi: Schema.optional(Schema.Boolean),
    customMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    parentName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    isOptional: Schema.optional(Schema.Boolean),
    regexes: Schema.optional(Schema.Array(Schema.String)),
    label: Schema.optional(Schema.String),
    paramType: Schema.optional(Schema.String),
    groupName: Schema.optional(Schema.String),
    defaultValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "ParameterMetadata" });

export interface TemplateMetadata {
  /** Optional. A description of the template. */
  description?: string;
  /** Optional. Indicates if the streaming template supports at least once mode. */
  supportsAtLeastOnce?: boolean;
  /** Optional. For future use. */
  yamlDefinition?: string;
  /** Optional. Indicates if the template is streaming or not. */
  streaming?: boolean;
  /** Optional. Indicates the default streaming mode for a streaming template. Only valid if both supports_at_least_once and supports_exactly_once are true. Possible values: UNSPECIFIED, EXACTLY_ONCE and AT_LEAST_ONCE */
  defaultStreamingMode?: string;
  /** The parameters for the template. */
  parameters?: ReadonlyArray<ParameterMetadata>;
  /** Optional. Indicates if the streaming template supports exactly once mode. */
  supportsExactlyOnce?: boolean;
  /** Required. The name of the template. */
  name?: string;
}

export const TemplateMetadata: Schema.Codec<TemplateMetadata> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    supportsAtLeastOnce: Schema.optional(Schema.Boolean),
    yamlDefinition: Schema.optional(Schema.String),
    streaming: Schema.optional(Schema.Boolean),
    defaultStreamingMode: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Array(ParameterMetadata)),
    supportsExactlyOnce: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "TemplateMetadata" });

export interface FlexTemplateRuntimeEnvironment {
  /** Cloud Storage bucket (directory) to upload heap dumps to. Enabling this field implies that `dump_heap_on_oom` is set to true. */
  saveHeapDumpsToGcsPath?: string;
  /** Optional. Additional pipeline option flags for the job. */
  additionalPipelineOptions?: ReadonlyArray<string>;
  /** Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
  network?: string;
  /** Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL. */
  subnetwork?: string;
  /** Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/ */
  kmsKeyName?: string;
  /** The machine type to use for the job. Defaults to the value from the template if not specified. */
  machineType?: string;
  /** Configuration for VM IPs. */
  ipConfiguration?:
    | "WORKER_IP_UNSPECIFIED"
    | "WORKER_IP_PUBLIC"
    | "WORKER_IP_PRIVATE"
    | (string & {});
  /** Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }. */
  additionalUserLabels?: Record<string, string>;
  /** Optional. Specifies the Streaming Engine message processing guarantees. Reduces cost and latency but might result in duplicate messages committed to storage. Designed to run simple mapping streaming ETL jobs at the lowest cost. For example, Change Data Capture (CDC) to BigQuery is a canonical use case. For more information, see [Set the pipeline streaming mode](https://cloud.google.com/dataflow/docs/guides/streaming-modes). */
  streamingMode?:
    | "STREAMING_MODE_UNSPECIFIED"
    | "STREAMING_MODE_EXACTLY_ONCE"
    | "STREAMING_MODE_AT_LEAST_ONCE"
    | (string & {});
  /** The algorithm to use for autoscaling */
  autoscalingAlgorithm?:
    | "AUTOSCALING_ALGORITHM_UNKNOWN"
    | "AUTOSCALING_ALGORITHM_NONE"
    | "AUTOSCALING_ALGORITHM_BASIC"
    | (string & {});
  /** Additional experiment flags for the job. */
  additionalExperiments?: ReadonlyArray<string>;
  /** Whether to enable Streaming Engine for the job. */
  enableStreamingEngine?: boolean;
  /** The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. */
  zone?: string;
  /** The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. */
  maxWorkers?: number;
  /** The email address of the service account to run the job as. */
  serviceAccountEmail?: string;
  /** The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
  tempLocation?: string;
  /** If true serial port logging will be enabled for the launcher VM. */
  enableLauncherVmSerialPortLogging?: boolean;
  /** The Cloud Storage path for staging local files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
  stagingLocation?: string;
  /** If true, when processing time is spent almost entirely on garbage collection (GC), saves a heap dump before ending the thread or process. If false, ends the thread or process without saving a heap dump. Does not save a heap dump when the Java Virtual Machine (JVM) has an out of memory error during processing. The location of the heap file is either echoed back to the user, or the user is given the opportunity to download the heap file. */
  dumpHeapOnOom?: boolean;
  /** The initial number of Google Compute Engine instances for the job. */
  numWorkers?: number;
  /** Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs */
  flexrsGoal?:
    | "FLEXRS_UNSPECIFIED"
    | "FLEXRS_SPEED_OPTIMIZED"
    | "FLEXRS_COST_OPTIMIZED"
    | (string & {});
  /** Worker disk size, in gigabytes. */
  diskSizeGb?: number;
  /** The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region. */
  workerRegion?: string;
  /** The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence. */
  workerZone?: string;
  /** Docker registry location of container image to use for the 'worker harness. Default is the container for the version of the SDK. Note this field is only valid for portable pipelines. */
  sdkContainerImage?: string;
  /** The machine type to use for launching the job. If not set, Dataflow will select a default machine type. */
  launcherMachineType?: string;
}

export const FlexTemplateRuntimeEnvironment: Schema.Codec<FlexTemplateRuntimeEnvironment> =
  /*@__PURE__*/ Schema.Struct({
    saveHeapDumpsToGcsPath: Schema.optional(Schema.String),
    additionalPipelineOptions: Schema.optional(Schema.Array(Schema.String)),
    network: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    kmsKeyName: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    ipConfiguration: Schema.optional(Schema.String),
    additionalUserLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    streamingMode: Schema.optional(Schema.String),
    autoscalingAlgorithm: Schema.optional(Schema.String),
    additionalExperiments: Schema.optional(Schema.Array(Schema.String)),
    enableStreamingEngine: Schema.optional(Schema.Boolean),
    zone: Schema.optional(Schema.String),
    maxWorkers: Schema.optional(Schema.Number),
    serviceAccountEmail: Schema.optional(Schema.String),
    tempLocation: Schema.optional(Schema.String),
    enableLauncherVmSerialPortLogging: Schema.optional(Schema.Boolean),
    stagingLocation: Schema.optional(Schema.String),
    dumpHeapOnOom: Schema.optional(Schema.Boolean),
    numWorkers: Schema.optional(Schema.Number),
    flexrsGoal: Schema.optional(Schema.String),
    diskSizeGb: Schema.optional(Schema.Number),
    workerRegion: Schema.optional(Schema.String),
    workerZone: Schema.optional(Schema.String),
    sdkContainerImage: Schema.optional(Schema.String),
    launcherMachineType: Schema.optional(Schema.String),
  }).annotate({ identifier: "FlexTemplateRuntimeEnvironment" });

export interface ContainerSpec {
  /** Required. SDK info of the Flex Template. */
  sdkInfo?: SDKInfo;
  /** Cloud Storage path to self-signed certificate of private registry. */
  imageRepositoryCertPath?: string;
  /** Name of the docker container image. E.g., gcr.io/project/some-image */
  image?: string;
  /** Metadata describing a template including description and validation rules. */
  metadata?: TemplateMetadata;
  /** Default runtime environment for the job. */
  defaultEnvironment?: FlexTemplateRuntimeEnvironment;
  /** Secret Manager secret id for username to authenticate to private registry. */
  imageRepositoryUsernameSecretId?: string;
  /** Secret Manager secret id for password to authenticate to private registry. */
  imageRepositoryPasswordSecretId?: string;
}

export const ContainerSpec: Schema.Codec<ContainerSpec> =
  /*@__PURE__*/ Schema.Struct({
    sdkInfo: Schema.optional(SDKInfo),
    imageRepositoryCertPath: Schema.optional(Schema.String),
    image: Schema.optional(Schema.String),
    metadata: Schema.optional(TemplateMetadata),
    defaultEnvironment: Schema.optional(FlexTemplateRuntimeEnvironment),
    imageRepositoryUsernameSecretId: Schema.optional(Schema.String),
    imageRepositoryPasswordSecretId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContainerSpec" });

export interface LaunchFlexTemplateParameter {
  /** Required. The job name to use for the created job. For update job request, job name should be same as the existing running job. */
  jobName?: string;
  /** Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job. */
  update?: boolean;
  /** Use this to pass transform_name_mappings for streaming update jobs. Ex:{"oldTransformName":"newTransformName",...}' */
  transformNameMappings?: Record<string, string>;
  /** The parameters for FlexTemplate. Ex. {"num_workers":"5"} */
  parameters?: Record<string, string>;
  /** Spec about the container image to launch. */
  containerSpec?: ContainerSpec;
  /** Cloud Storage path to a file with json serialized ContainerSpec as content. */
  containerSpecGcsPath?: string;
  /** Launch options for this flex template job. This is a common set of options across languages and templates. This should not be used to pass job parameters. */
  launchOptions?: Record<string, string>;
  /** The runtime environment for the FlexTemplate job */
  environment?: FlexTemplateRuntimeEnvironment;
}

export const LaunchFlexTemplateParameter: Schema.Codec<LaunchFlexTemplateParameter> =
  /*@__PURE__*/ Schema.Struct({
    jobName: Schema.optional(Schema.String),
    update: Schema.optional(Schema.Boolean),
    transformNameMappings: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    containerSpec: Schema.optional(ContainerSpec),
    containerSpecGcsPath: Schema.optional(Schema.String),
    launchOptions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    environment: Schema.optional(FlexTemplateRuntimeEnvironment),
  }).annotate({ identifier: "LaunchFlexTemplateParameter" });

export interface SourceGetMetadataRequest {
  /** Specification of the source whose metadata should be computed. */
  source?: Source;
}

export const SourceGetMetadataRequest: Schema.Codec<SourceGetMetadataRequest> =
  /*@__PURE__*/ Schema.Struct({
    source: Schema.optional(Source),
  }).annotate({ identifier: "SourceGetMetadataRequest" });

export interface Linear {
  /** Lower bound of the first bucket. */
  start?: number;
  /** Must be greater than 0. */
  numberOfBuckets?: number;
  /** Distance between bucket boundaries. Must be greater than 0. */
  width?: number;
}

export const Linear: Schema.Codec<Linear> =
  /*@__PURE__*/ Schema.Struct({
    start: Schema.optional(Schema.Number),
    numberOfBuckets: Schema.optional(Schema.Number),
    width: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Linear" });

export interface Base2Exponent {
  /** Must be between -3 and 3. This forces the growth factor of the bucket boundaries to be between `2^(1/8)` and `256`. */
  scale?: number;
  /** Must be greater than 0. */
  numberOfBuckets?: number;
}

export const Base2Exponent: Schema.Codec<Base2Exponent> =
  /*@__PURE__*/ Schema.Struct({
    scale: Schema.optional(Schema.Number),
    numberOfBuckets: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Base2Exponent" });

export interface BucketOptions {
  /** Bucket boundaries grow linearly. */
  linear?: Linear;
  /** Bucket boundaries grow exponentially. */
  exponential?: Base2Exponent;
}

export const BucketOptions: Schema.Codec<BucketOptions> =
  /*@__PURE__*/ Schema.Struct({
    linear: Schema.optional(Linear),
    exponential: Schema.optional(Base2Exponent),
  }).annotate({ identifier: "BucketOptions" });

export interface OutlierStats {
  /** Mean of values in the overflow bucket. */
  overflowMean?: number;
  /** Number of values that are smaller than the lower bound of the smallest bucket. */
  underflowCount?: string;
  /** Number of values that are larger than the upper bound of the largest bucket. */
  overflowCount?: string;
  /** Mean of values in the undeflow bucket. */
  underflowMean?: number;
}

export const OutlierStats: Schema.Codec<OutlierStats> =
  /*@__PURE__*/ Schema.Struct({
    overflowMean: Schema.optional(Schema.Number),
    underflowCount: Schema.optional(Schema.String),
    overflowCount: Schema.optional(Schema.String),
    underflowMean: Schema.optional(Schema.Number),
  }).annotate({ identifier: "OutlierStats" });

export interface DataflowHistogramValue {
  /** Describes the bucket boundaries used in the histogram. */
  bucketOptions?: BucketOptions;
  /** Statistics on the values recorded in the histogram that fall out of the bucket boundaries. */
  outlierStats?: OutlierStats;
  /** Number of values recorded in this histogram. */
  count?: string;
  /** Optional. The number of values in each bucket of the histogram, as described in `bucket_options`. `bucket_counts` should contain N values, where N is the number of buckets specified in `bucket_options`. If `bucket_counts` has fewer than N values, the remaining values are assumed to be 0. */
  bucketCounts?: ReadonlyArray<string>;
}

export const DataflowHistogramValue: Schema.Codec<DataflowHistogramValue> =
  /*@__PURE__*/ Schema.Struct({
    bucketOptions: Schema.optional(BucketOptions),
    outlierStats: Schema.optional(OutlierStats),
    count: Schema.optional(Schema.String),
    bucketCounts: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DataflowHistogramValue" });

export interface DataflowGaugeValue {
  /** The value of the gauge. */
  value?: string;
  /** The timestamp when the gauge was recorded. */
  measuredTime?: string;
}

export const DataflowGaugeValue: Schema.Codec<DataflowGaugeValue> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    measuredTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataflowGaugeValue" });

export interface MetricValue {
  /** Base name for this metric. */
  metric?: string;
  /** Histogram value of this metric. */
  valueHistogram?: DataflowHistogramValue;
  /** Optional. Set of metric labels for this metric. */
  metricLabels?: Record<string, string>;
  /** Non-cumulative int64 value of this metric. */
  valueGauge64?: DataflowGaugeValue;
  /** Integer value of this metric. */
  valueInt64?: string;
}

export const MetricValue: Schema.Codec<MetricValue> =
  /*@__PURE__*/ Schema.Struct({
    metric: Schema.optional(Schema.String),
    valueHistogram: Schema.optional(DataflowHistogramValue),
    metricLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    valueGauge64: Schema.optional(DataflowGaugeValue),
    valueInt64: Schema.optional(Schema.String),
  }).annotate({ identifier: "MetricValue" });

export interface PerStepNamespaceMetrics {
  /** The namespace of these metrics on the worker. */
  metricsNamespace?: string;
  /** The original system name of the unfused step that these metrics are reported from. */
  originalStep?: string;
  /** Optional. Metrics that are recorded for this namespace and unfused step. */
  metricValues?: ReadonlyArray<MetricValue>;
}

export const PerStepNamespaceMetrics: Schema.Codec<PerStepNamespaceMetrics> =
  /*@__PURE__*/ Schema.Struct({
    metricsNamespace: Schema.optional(Schema.String),
    originalStep: Schema.optional(Schema.String),
    metricValues: Schema.optional(Schema.Array(MetricValue)),
  }).annotate({ identifier: "PerStepNamespaceMetrics" });

export interface PerWorkerMetrics {
  /** Optional. Metrics for a particular unfused step and namespace. */
  perStepNamespaceMetrics?: ReadonlyArray<PerStepNamespaceMetrics>;
}

export const PerWorkerMetrics: Schema.Codec<PerWorkerMetrics> =
  /*@__PURE__*/ Schema.Struct({
    perStepNamespaceMetrics: Schema.optional(
      Schema.Array(PerStepNamespaceMetrics),
    ),
  }).annotate({ identifier: "PerWorkerMetrics" });

export interface DataSamplingConfig {
  /** List of given sampling behaviors to enable. For example, specifying behaviors = [ALWAYS_ON] samples in-flight elements but does not sample exceptions. Can be used to specify multiple behaviors like, behaviors = [ALWAYS_ON, EXCEPTIONS] for specifying periodic sampling and exception sampling. If DISABLED is in the list, then sampling will be disabled and ignore the other given behaviors. Ordering does not matter. */
  behaviors?: ReadonlyArray<
    | "DATA_SAMPLING_BEHAVIOR_UNSPECIFIED"
    | "DISABLED"
    | "ALWAYS_ON"
    | "EXCEPTIONS"
    | (string & {})
  >;
}

export const DataSamplingConfig: Schema.Codec<DataSamplingConfig> =
  /*@__PURE__*/ Schema.Struct({
    behaviors: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DataSamplingConfig" });

export interface SourceSplitOptions {
  /** The source should be split into a set of bundles where the estimated size of each is approximately this many bytes. */
  desiredBundleSizeBytes?: string;
  /** DEPRECATED in favor of desired_bundle_size_bytes. */
  desiredShardSizeBytes?: string;
}

export const SourceSplitOptions: Schema.Codec<SourceSplitOptions> =
  /*@__PURE__*/ Schema.Struct({
    desiredBundleSizeBytes: Schema.optional(Schema.String),
    desiredShardSizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "SourceSplitOptions" });

export interface SourceSplitRequest {
  /** Hints for tuning the splitting process. */
  options?: SourceSplitOptions;
  /** Specification of the source to be split. */
  source?: Source;
}

export const SourceSplitRequest: Schema.Codec<SourceSplitRequest> =
  /*@__PURE__*/ Schema.Struct({
    options: Schema.optional(SourceSplitOptions),
    source: Schema.optional(Source),
  }).annotate({ identifier: "SourceSplitRequest" });

export interface SourceOperationRequest {
  /** System-defined name of the stage containing the source operation. Unique across the workflow. */
  stageName?: string;
  /** User-provided name of the Read instruction for this source. */
  name?: string;
  /** System-defined name of the Read instruction for this source. Unique across the workflow. */
  systemName?: string;
  /** Information about a request to split a source. */
  split?: SourceSplitRequest;
  /** Information about a request to get metadata about a source. */
  getMetadata?: SourceGetMetadataRequest;
  /** System-defined name for the Read instruction for this source in the original workflow graph. */
  originalName?: string;
}

export const SourceOperationRequest: Schema.Codec<SourceOperationRequest> =
  /*@__PURE__*/ Schema.Struct({
    stageName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemName: Schema.optional(Schema.String),
    split: Schema.optional(SourceSplitRequest),
    getMetadata: Schema.optional(SourceGetMetadataRequest),
    originalName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SourceOperationRequest" });

export interface DataDiskAssignment {
  /** VM instance name the data disks mounted to, for example "myproject-1014-104817-4c2-harness-0". */
  vmInstance?: string;
  /** Mounted data disks. The order is important a data disk's 0-based index in this list defines which persistent directory the disk is mounted to, for example the list of { "myproject-1014-104817-4c2-harness-0-disk-0" }, { "myproject-1014-104817-4c2-harness-0-disk-1" }. */
  dataDisks?: ReadonlyArray<string>;
}

export const DataDiskAssignment: Schema.Codec<DataDiskAssignment> =
  /*@__PURE__*/ Schema.Struct({
    vmInstance: Schema.optional(Schema.String),
    dataDisks: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DataDiskAssignment" });

export interface StreamingStageLocation {
  /** Identifies the particular stream within the streaming Dataflow job. */
  streamId?: string;
}

export const StreamingStageLocation: Schema.Codec<StreamingStageLocation> =
  /*@__PURE__*/ Schema.Struct({
    streamId: Schema.optional(Schema.String),
  }).annotate({ identifier: "StreamingStageLocation" });

export interface PubsubLocation {
  /** If true, then this location represents dynamic topics. */
  dynamicDestinations?: boolean;
  /** If set, contains a pubsub label from which to extract record timestamps. If left empty, record timestamps will be generated upon arrival. */
  timestampLabel?: string;
  /** If set, contains a pubsub label from which to extract record ids. If left empty, record deduplication will be strictly best effort. */
  idLabel?: string;
  /** A pubsub topic, in the form of "pubsub.googleapis.com/topics//" */
  topic?: string;
  /** Indicates whether the pipeline allows late-arriving data. */
  dropLateData?: boolean;
  /** If true, then the client has requested to get pubsub attributes. */
  withAttributes?: boolean;
  /** A pubsub subscription, in the form of "pubsub.googleapis.com/subscriptions//" */
  subscription?: string;
  /** If set, specifies the pubsub subscription that will be used for tracking custom time timestamps for watermark estimation. */
  trackingSubscription?: string;
}

export const PubsubLocation: Schema.Codec<PubsubLocation> =
  /*@__PURE__*/ Schema.Struct({
    dynamicDestinations: Schema.optional(Schema.Boolean),
    timestampLabel: Schema.optional(Schema.String),
    idLabel: Schema.optional(Schema.String),
    topic: Schema.optional(Schema.String),
    dropLateData: Schema.optional(Schema.Boolean),
    withAttributes: Schema.optional(Schema.Boolean),
    subscription: Schema.optional(Schema.String),
    trackingSubscription: Schema.optional(Schema.String),
  }).annotate({ identifier: "PubsubLocation" });

export interface CustomSourceLocation {
  /** Whether this source is stateful. */
  stateful?: boolean;
}

export const CustomSourceLocation: Schema.Codec<CustomSourceLocation> =
  /*@__PURE__*/ Schema.Struct({
    stateful: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CustomSourceLocation" });

export interface StreamingSideInputLocation {
  /** Identifies the particular side input within the streaming Dataflow job. */
  tag?: string;
  /** Identifies the state family where this side input is stored. */
  stateFamily?: string;
}

export const StreamingSideInputLocation: Schema.Codec<StreamingSideInputLocation> =
  /*@__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
    stateFamily: Schema.optional(Schema.String),
  }).annotate({ identifier: "StreamingSideInputLocation" });

export interface StreamLocation {
  /** The stream is part of another computation within the current streaming Dataflow job. */
  streamingStageLocation?: StreamingStageLocation;
  /** The stream is a pubsub stream. */
  pubsubLocation?: PubsubLocation;
  /** The stream is a custom source. */
  customSourceLocation?: CustomSourceLocation;
  /** The stream is a streaming side input. */
  sideInputLocation?: StreamingSideInputLocation;
}

export const StreamLocation: Schema.Codec<StreamLocation> =
  /*@__PURE__*/ Schema.Struct({
    streamingStageLocation: Schema.optional(StreamingStageLocation),
    pubsubLocation: Schema.optional(PubsubLocation),
    customSourceLocation: Schema.optional(CustomSourceLocation),
    sideInputLocation: Schema.optional(StreamingSideInputLocation),
  }).annotate({ identifier: "StreamLocation" });

export interface KeyRangeLocation {
  /** The start (inclusive) of the key range. */
  start?: string;
  /** The end (exclusive) of the key range. */
  end?: string;
  /** The physical location of this range assignment to be used for streaming computation cross-worker message delivery. */
  deliveryEndpoint?: string;
  /** DEPRECATED. The location of the persistent state for this range, as a persistent directory in the worker local filesystem. */
  deprecatedPersistentDirectory?: string;
  /** The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1". */
  dataDisk?: string;
}

export const KeyRangeLocation: Schema.Codec<KeyRangeLocation> =
  /*@__PURE__*/ Schema.Struct({
    start: Schema.optional(Schema.String),
    end: Schema.optional(Schema.String),
    deliveryEndpoint: Schema.optional(Schema.String),
    deprecatedPersistentDirectory: Schema.optional(Schema.String),
    dataDisk: Schema.optional(Schema.String),
  }).annotate({ identifier: "KeyRangeLocation" });

export interface StateFamilyConfig {
  /** The state family value. */
  stateFamily?: string;
  /** If true, this family corresponds to a read operation. */
  isRead?: boolean;
}

export const StateFamilyConfig: Schema.Codec<StateFamilyConfig> =
  /*@__PURE__*/ Schema.Struct({
    stateFamily: Schema.optional(Schema.String),
    isRead: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "StateFamilyConfig" });

export interface ComputationTopology {
  /** The ID of the computation. */
  computationId?: string;
  /** The outputs from the computation. */
  outputs?: ReadonlyArray<StreamLocation>;
  /** The system stage name. */
  systemStageName?: string;
  /** The inputs to the computation. */
  inputs?: ReadonlyArray<StreamLocation>;
  /** The key ranges processed by the computation. */
  keyRanges?: ReadonlyArray<KeyRangeLocation>;
  /** The state family values. */
  stateFamilies?: ReadonlyArray<StateFamilyConfig>;
}

export const ComputationTopology: Schema.Codec<ComputationTopology> =
  /*@__PURE__*/ Schema.Struct({
    computationId: Schema.optional(Schema.String),
    outputs: Schema.optional(Schema.Array(StreamLocation)),
    systemStageName: Schema.optional(Schema.String),
    inputs: Schema.optional(Schema.Array(StreamLocation)),
    keyRanges: Schema.optional(Schema.Array(KeyRangeLocation)),
    stateFamilies: Schema.optional(Schema.Array(StateFamilyConfig)),
  }).annotate({ identifier: "ComputationTopology" });

export interface TopologyConfig {
  /** The disks assigned to a streaming Dataflow job. */
  dataDiskAssignments?: ReadonlyArray<DataDiskAssignment>;
  /** Version number for persistent state. */
  persistentStateVersion?: number;
  /** The size (in bits) of keys that will be assigned to source messages. */
  forwardingKeyBits?: number;
  /** The computations associated with a streaming Dataflow job. */
  computations?: ReadonlyArray<ComputationTopology>;
  /** Maps user stage names to stable computation names. */
  userStageToComputationNameMap?: Record<string, string>;
}

export const TopologyConfig: Schema.Codec<TopologyConfig> =
  /*@__PURE__*/ Schema.Struct({
    dataDiskAssignments: Schema.optional(Schema.Array(DataDiskAssignment)),
    persistentStateVersion: Schema.optional(Schema.Number),
    forwardingKeyBits: Schema.optional(Schema.Number),
    computations: Schema.optional(Schema.Array(ComputationTopology)),
    userStageToComputationNameMap: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "TopologyConfig" });

export interface StreamingApplianceSnapshotConfig {
  /** If set, indicates the snapshot id for the snapshot being performed. */
  snapshotId?: string;
  /** Indicates which endpoint is used to import appliance state. */
  importStateEndpoint?: string;
}

export const StreamingApplianceSnapshotConfig: Schema.Codec<StreamingApplianceSnapshotConfig> =
  /*@__PURE__*/ Schema.Struct({
    snapshotId: Schema.optional(Schema.String),
    importStateEndpoint: Schema.optional(Schema.String),
  }).annotate({ identifier: "StreamingApplianceSnapshotConfig" });

export interface StreamingSetupTask {
  /** The global topology of the streaming Dataflow job. */
  streamingComputationTopology?: TopologyConfig;
  /** Configures streaming appliance snapshot. */
  snapshotConfig?: StreamingApplianceSnapshotConfig;
  /** The user has requested drain. */
  drain?: boolean;
  /** The TCP port on which the worker should listen for messages from other streaming computation workers. */
  receiveWorkPort?: number;
  /** The TCP port used by the worker to communicate with the Dataflow worker harness. */
  workerHarnessPort?: number;
}

export const StreamingSetupTask: Schema.Codec<StreamingSetupTask> =
  /*@__PURE__*/ Schema.Struct({
    streamingComputationTopology: Schema.optional(TopologyConfig),
    snapshotConfig: Schema.optional(StreamingApplianceSnapshotConfig),
    drain: Schema.optional(Schema.Boolean),
    receiveWorkPort: Schema.optional(Schema.Number),
    workerHarnessPort: Schema.optional(Schema.Number),
  }).annotate({ identifier: "StreamingSetupTask" });

export interface SideInputInfo {
  /** The source(s) to read element(s) from to get the value of this side input. If more than one source, then the elements are taken from the sources, in the specified order if order matters. At least one source is required. */
  sources?: ReadonlyArray<Source>;
  /** How to interpret the source element(s) as a side input value. */
  kind?: Record<string, unknown>;
  /** The id of the tag the user code will access this side input by; this should correspond to the tag of some MultiOutputInfo. */
  tag?: string;
}

export const SideInputInfo: Schema.Codec<SideInputInfo> =
  /*@__PURE__*/ Schema.Struct({
    sources: Schema.optional(Schema.Array(Source)),
    kind: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    tag: Schema.optional(Schema.String),
  }).annotate({ identifier: "SideInputInfo" });

export interface MultiOutputInfo {
  /** The id of the tag the user code will emit to this output by; this should correspond to the tag of some SideInputInfo. */
  tag?: string;
}

export const MultiOutputInfo: Schema.Codec<MultiOutputInfo> =
  /*@__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
  }).annotate({ identifier: "MultiOutputInfo" });

export interface ParDoInstruction {
  /** Zero or more side inputs. */
  sideInputs?: ReadonlyArray<SideInputInfo>;
  /** The number of outputs. */
  numOutputs?: number;
  /** Information about each of the outputs, if user_fn is a MultiDoFn. */
  multiOutputInfos?: ReadonlyArray<MultiOutputInfo>;
  /** The input. */
  input?: InstructionInput;
  /** The user function to invoke. */
  userFn?: Record<string, unknown>;
}

export const ParDoInstruction: Schema.Codec<ParDoInstruction> =
  /*@__PURE__*/ Schema.Struct({
    sideInputs: Schema.optional(Schema.Array(SideInputInfo)),
    numOutputs: Schema.optional(Schema.Number),
    multiOutputInfos: Schema.optional(Schema.Array(MultiOutputInfo)),
    input: Schema.optional(InstructionInput),
    userFn: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ParDoInstruction" });

export interface Sink {
  /** The sink to write to, plus its parameters. */
  spec?: Record<string, unknown>;
  /** The codec to use to encode data written to the sink. */
  codec?: Record<string, unknown>;
}

export const Sink: Schema.Codec<Sink> =
  /*@__PURE__*/ Schema.Struct({
    spec: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    codec: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Sink" });

export interface WriteInstruction {
  /** The input. */
  input?: InstructionInput;
  /** The sink to write to. */
  sink?: Sink;
}

export const WriteInstruction: Schema.Codec<WriteInstruction> =
  /*@__PURE__*/ Schema.Struct({
    input: Schema.optional(InstructionInput),
    sink: Schema.optional(Sink),
  }).annotate({ identifier: "WriteInstruction" });

export interface PartialGroupByKeyInstruction {
  /** The value combining function to invoke. */
  valueCombiningFn?: Record<string, unknown>;
  /** If this instruction includes a combining function, this is the name of the CombineValues instruction lifted into this instruction. */
  originalCombineValuesStepName?: string;
  /** The codec to use for interpreting an element in the input PTable. */
  inputElementCodec?: Record<string, unknown>;
  /** If this instruction includes a combining function this is the name of the intermediate store between the GBK and the CombineValues. */
  originalCombineValuesInputStoreName?: string;
  /** Describes the input to the partial group-by-key instruction. */
  input?: InstructionInput;
  /** Zero or more side inputs. */
  sideInputs?: ReadonlyArray<SideInputInfo>;
}

export const PartialGroupByKeyInstruction: Schema.Codec<PartialGroupByKeyInstruction> =
  /*@__PURE__*/ Schema.Struct({
    valueCombiningFn: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    originalCombineValuesStepName: Schema.optional(Schema.String),
    inputElementCodec: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    originalCombineValuesInputStoreName: Schema.optional(Schema.String),
    input: Schema.optional(InstructionInput),
    sideInputs: Schema.optional(Schema.Array(SideInputInfo)),
  }).annotate({ identifier: "PartialGroupByKeyInstruction" });

export interface ReadInstruction {
  /** The source to read from. */
  source?: Source;
}

export const ReadInstruction: Schema.Codec<ReadInstruction> =
  /*@__PURE__*/ Schema.Struct({
    source: Schema.optional(Source),
  }).annotate({ identifier: "ReadInstruction" });

export interface InstructionOutput {
  /** System-defined name of this output. Unique across the workflow. */
  systemName?: string;
  /** For system-generated byte and mean byte metrics, certain instructions should only report the value size. */
  onlyCountValueBytes?: boolean;
  /** System-defined name for this output in the original workflow graph. Outputs that do not contribute to an original instruction do not set this. */
  originalName?: string;
  /** For system-generated byte and mean byte metrics, certain instructions should only report the key size. */
  onlyCountKeyBytes?: boolean;
  /** The user-provided name of this output. */
  name?: string;
  /** The codec to use to encode data being written via this output. */
  codec?: Record<string, unknown>;
}

export const InstructionOutput: Schema.Codec<InstructionOutput> =
  /*@__PURE__*/ Schema.Struct({
    systemName: Schema.optional(Schema.String),
    onlyCountValueBytes: Schema.optional(Schema.Boolean),
    originalName: Schema.optional(Schema.String),
    onlyCountKeyBytes: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    codec: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "InstructionOutput" });

export interface ParallelInstruction {
  /** Additional information for ParDo instructions. */
  parDo?: ParDoInstruction;
  /** Additional information for Flatten instructions. */
  flatten?: FlattenInstruction;
  /** User-provided name of this operation. */
  name?: string;
  /** Additional information for Write instructions. */
  write?: WriteInstruction;
  /** Additional information for PartialGroupByKey instructions. */
  partialGroupByKey?: PartialGroupByKeyInstruction;
  /** Additional information for Read instructions. */
  read?: ReadInstruction;
  /** Describes the outputs of the instruction. */
  outputs?: ReadonlyArray<InstructionOutput>;
  /** System-defined name of this operation. Unique across the workflow. */
  systemName?: string;
  /** System-defined name for the operation in the original workflow graph. */
  originalName?: string;
}

export const ParallelInstruction: Schema.Codec<ParallelInstruction> =
  /*@__PURE__*/ Schema.Struct({
    parDo: Schema.optional(ParDoInstruction),
    flatten: Schema.optional(FlattenInstruction),
    name: Schema.optional(Schema.String),
    write: Schema.optional(WriteInstruction),
    partialGroupByKey: Schema.optional(PartialGroupByKeyInstruction),
    read: Schema.optional(ReadInstruction),
    outputs: Schema.optional(Schema.Array(InstructionOutput)),
    systemName: Schema.optional(Schema.String),
    originalName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ParallelInstruction" });

export interface StreamingComputationConfig {
  /** System defined name for this computation. */
  systemName?: string;
  /** Unique identifier for this computation. */
  computationId?: string;
  /** Stage name of this computation. */
  stageName?: string;
  /** Map from user name of stateful transforms in this stage to their state family. */
  transformUserNameToStateFamily?: Record<string, string>;
  /** Instructions that comprise the computation. */
  instructions?: ReadonlyArray<ParallelInstruction>;
}

export const StreamingComputationConfig: Schema.Codec<StreamingComputationConfig> =
  /*@__PURE__*/ Schema.Struct({
    systemName: Schema.optional(Schema.String),
    computationId: Schema.optional(Schema.String),
    stageName: Schema.optional(Schema.String),
    transformUserNameToStateFamily: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    instructions: Schema.optional(Schema.Array(ParallelInstruction)),
  }).annotate({ identifier: "StreamingComputationConfig" });

export interface StreamingOperationalLimits {
  /** The maximum size for a state tag. */
  maxTagBytes?: string;
  /** The maximum size for an element in bag state. */
  maxBagElementBytes?: string;
  /** The maximum size for a value state field. */
  maxValueBytes?: string;
  /** The maximum size for a source state update. */
  maxSourceStateBytes?: string;
  /** The maximum size for an element in sorted list state. */
  maxSortedListElementBytes?: string;
  /** The maximum size for an element in global data. */
  maxGlobalDataBytes?: string;
  /** The maximum size for a single output element. */
  maxProductionOutputBytes?: string;
  /** The maximum size allowed for a key. */
  maxKeyBytes?: string;
}

export const StreamingOperationalLimits: Schema.Codec<StreamingOperationalLimits> =
  /*@__PURE__*/ Schema.Struct({
    maxTagBytes: Schema.optional(Schema.String),
    maxBagElementBytes: Schema.optional(Schema.String),
    maxValueBytes: Schema.optional(Schema.String),
    maxSourceStateBytes: Schema.optional(Schema.String),
    maxSortedListElementBytes: Schema.optional(Schema.String),
    maxGlobalDataBytes: Schema.optional(Schema.String),
    maxProductionOutputBytes: Schema.optional(Schema.String),
    maxKeyBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "StreamingOperationalLimits" });

export interface StreamingConfigTask {
  /** Binary encoded proto to control runtime behavior of the java runner v1 user worker. */
  userWorkerRunnerV1Settings?: string;
  /** Maximum size for work item commit supported windmill storage layer. */
  maxWorkItemCommitBytes?: string;
  /** Chunk size for get data streams from the harness to windmill. */
  getDataStreamChunkSizeBytes?: string;
  /** Binary encoded proto to control runtime behavior of the runner v2 user worker. */
  userWorkerRunnerV2Settings?: string;
  /** Chunk size for commit streams from the harness to windmill. */
  commitStreamChunkSizeBytes?: string;
  /** Optional. The state tag encoding format version for streaming engine jobs. */
  streamingEngineStateTagEncodingVersion?: number;
  /** Set of computation configuration information. */
  streamingComputationConfigs?: ReadonlyArray<StreamingComputationConfig>;
  /** Map from user step names to state families. */
  userStepToStateFamilyNameMap?: Record<string, string>;
  /** If present, the worker must use this port to communicate with Windmill Service dispatchers. Only applicable when windmill_service_endpoint is specified. */
  windmillServicePort?: string;
  /** Operational limits for the streaming job. Can be used by the worker to validate outputs sent to the backend. */
  operationalLimits?: StreamingOperationalLimits;
  /** If present, the worker must use this endpoint to communicate with Windmill Service dispatchers, otherwise the worker must continue to use whatever endpoint it had been using. */
  windmillServiceEndpoint?: string;
}

export const StreamingConfigTask: Schema.Codec<StreamingConfigTask> =
  /*@__PURE__*/ Schema.Struct({
    userWorkerRunnerV1Settings: Schema.optional(Schema.String),
    maxWorkItemCommitBytes: Schema.optional(Schema.String),
    getDataStreamChunkSizeBytes: Schema.optional(Schema.String),
    userWorkerRunnerV2Settings: Schema.optional(Schema.String),
    commitStreamChunkSizeBytes: Schema.optional(Schema.String),
    streamingEngineStateTagEncodingVersion: Schema.optional(Schema.Number),
    streamingComputationConfigs: Schema.optional(
      Schema.Array(StreamingComputationConfig),
    ),
    userStepToStateFamilyNameMap: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    windmillServicePort: Schema.optional(Schema.String),
    operationalLimits: Schema.optional(StreamingOperationalLimits),
    windmillServiceEndpoint: Schema.optional(Schema.String),
  }).annotate({ identifier: "StreamingConfigTask" });

export interface Package {
  /** Optional. The hex-encoded SHA256 checksum of the package. If the checksum is provided, the worker will verify the checksum of the package before using it. If the checksum does not match, the worker will fail to start. */
  sha256?: string;
  /** The resource to read the package from. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket} bucket.storage.googleapis.com/ */
  location?: string;
  /** The name of the package. */
  name?: string;
}

export const Package: Schema.Codec<Package> =
  /*@__PURE__*/ Schema.Struct({
    sha256: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Package" });

export interface MountedDataDisk {
  /** The name of the data disk. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1". */
  dataDisk?: string;
}

export const MountedDataDisk: Schema.Codec<MountedDataDisk> =
  /*@__PURE__*/ Schema.Struct({
    dataDisk: Schema.optional(Schema.String),
  }).annotate({ identifier: "MountedDataDisk" });

export interface KeyRangeDataDiskAssignment {
  /** The start (inclusive) of the key range. */
  start?: string;
  /** The end (exclusive) of the key range. */
  end?: string;
  /** The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1". */
  dataDisk?: string;
}

export const KeyRangeDataDiskAssignment: Schema.Codec<KeyRangeDataDiskAssignment> =
  /*@__PURE__*/ Schema.Struct({
    start: Schema.optional(Schema.String),
    end: Schema.optional(Schema.String),
    dataDisk: Schema.optional(Schema.String),
  }).annotate({ identifier: "KeyRangeDataDiskAssignment" });

export interface StreamingComputationRanges {
  /** The ID of the computation. */
  computationId?: string;
  /** Data disk assignments for ranges from this computation. */
  rangeAssignments?: ReadonlyArray<KeyRangeDataDiskAssignment>;
}

export const StreamingComputationRanges: Schema.Codec<StreamingComputationRanges> =
  /*@__PURE__*/ Schema.Struct({
    computationId: Schema.optional(Schema.String),
    rangeAssignments: Schema.optional(Schema.Array(KeyRangeDataDiskAssignment)),
  }).annotate({ identifier: "StreamingComputationRanges" });

export interface StreamingComputationTask {
  /** Describes the set of data disks this task should apply to. */
  dataDisks?: ReadonlyArray<MountedDataDisk>;
  /** Contains ranges of a streaming computation this task should apply to. */
  computationRanges?: ReadonlyArray<StreamingComputationRanges>;
  /** A type of streaming computation task. */
  taskType?:
    | "STREAMING_COMPUTATION_TASK_UNKNOWN"
    | "STREAMING_COMPUTATION_TASK_STOP"
    | "STREAMING_COMPUTATION_TASK_START"
    | (string & {});
}

export const StreamingComputationTask: Schema.Codec<StreamingComputationTask> =
  /*@__PURE__*/ Schema.Struct({
    dataDisks: Schema.optional(Schema.Array(MountedDataDisk)),
    computationRanges: Schema.optional(
      Schema.Array(StreamingComputationRanges),
    ),
    taskType: Schema.optional(Schema.String),
  }).annotate({ identifier: "StreamingComputationTask" });

export interface ShellTask {
  /** The shell command to run. */
  command?: string;
  /** Exit code for the task. */
  exitCode?: number;
}

export const ShellTask: Schema.Codec<ShellTask> =
  /*@__PURE__*/ Schema.Struct({
    command: Schema.optional(Schema.String),
    exitCode: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ShellTask" });

export interface SeqMapTaskOutputInfo {
  /** The sink to write the output value to. */
  sink?: Sink;
  /** The id of the TupleTag the user code will tag the output value by. */
  tag?: string;
}

export const SeqMapTaskOutputInfo: Schema.Codec<SeqMapTaskOutputInfo> =
  /*@__PURE__*/ Schema.Struct({
    sink: Schema.optional(Sink),
    tag: Schema.optional(Schema.String),
  }).annotate({ identifier: "SeqMapTaskOutputInfo" });

export interface SeqMapTask {
  /** System-defined name of the SeqDo operation. Unique across the workflow. */
  systemName?: string;
  /** System-defined name of the stage containing the SeqDo operation. Unique across the workflow. */
  stageName?: string;
  /** The user-provided name of the SeqDo operation. */
  name?: string;
  /** The user function to invoke. */
  userFn?: Record<string, unknown>;
  /** Information about each of the inputs. */
  inputs?: ReadonlyArray<SideInputInfo>;
  /** Information about each of the outputs. */
  outputInfos?: ReadonlyArray<SeqMapTaskOutputInfo>;
}

export const SeqMapTask: Schema.Codec<SeqMapTask> =
  /*@__PURE__*/ Schema.Struct({
    systemName: Schema.optional(Schema.String),
    stageName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    userFn: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    inputs: Schema.optional(Schema.Array(SideInputInfo)),
    outputInfos: Schema.optional(Schema.Array(SeqMapTaskOutputInfo)),
  }).annotate({ identifier: "SeqMapTask" });

export interface MapTask {
  /** System-defined name of this MapTask. Unique across the workflow. */
  systemName?: string;
  /** Counter prefix that can be used to prefix counters. Not currently used in Dataflow. */
  counterPrefix?: string;
  /** The instructions in the MapTask. */
  instructions?: ReadonlyArray<ParallelInstruction>;
  /** System-defined name of the stage containing this MapTask. Unique across the workflow. */
  stageName?: string;
}

export const MapTask: Schema.Codec<MapTask> =
  /*@__PURE__*/ Schema.Struct({
    systemName: Schema.optional(Schema.String),
    counterPrefix: Schema.optional(Schema.String),
    instructions: Schema.optional(Schema.Array(ParallelInstruction)),
    stageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "MapTask" });

export interface WorkItem {
  /** The initial index to use when reporting the status of the WorkItem. */
  initialReportIndex?: string;
  /** Additional information for source operation WorkItems. */
  sourceOperationTask?: SourceOperationRequest;
  /** Work item-specific configuration as an opaque blob. */
  configuration?: string;
  /** Additional information for StreamingSetupTask WorkItems. */
  streamingSetupTask?: StreamingSetupTask;
  /** Additional information for StreamingConfigTask WorkItems. */
  streamingConfigTask?: StreamingConfigTask;
  /** Any required packages that need to be fetched in order to execute this WorkItem. */
  packages?: ReadonlyArray<Package>;
  /** Identifies the cloud project this WorkItem belongs to. */
  projectId?: string;
  /** Additional information for StreamingComputationTask WorkItems. */
  streamingComputationTask?: StreamingComputationTask;
  /** Additional information for ShellTask WorkItems. */
  shellTask?: ShellTask;
  /** Recommended reporting interval. */
  reportStatusInterval?: string;
  /** Additional information for SeqMapTask WorkItems. */
  seqMapTask?: SeqMapTask;
  /** Time when the lease on this Work will expire. */
  leaseExpireTime?: string;
  /** Identifies this WorkItem. */
  id?: string;
  /** Identifies the workflow job this WorkItem belongs to. */
  jobId?: string;
  /** Additional information for MapTask WorkItems. */
  mapTask?: MapTask;
}

export const WorkItem: Schema.Codec<WorkItem> =
  /*@__PURE__*/ Schema.Struct({
    initialReportIndex: Schema.optional(Schema.String),
    sourceOperationTask: Schema.optional(SourceOperationRequest),
    configuration: Schema.optional(Schema.String),
    streamingSetupTask: Schema.optional(StreamingSetupTask),
    streamingConfigTask: Schema.optional(StreamingConfigTask),
    packages: Schema.optional(Schema.Array(Package)),
    projectId: Schema.optional(Schema.String),
    streamingComputationTask: Schema.optional(StreamingComputationTask),
    shellTask: Schema.optional(ShellTask),
    reportStatusInterval: Schema.optional(Schema.String),
    seqMapTask: Schema.optional(SeqMapTask),
    leaseExpireTime: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    jobId: Schema.optional(Schema.String),
    mapTask: Schema.optional(MapTask),
  }).annotate({ identifier: "WorkItem" });

export interface DisplayData {
  /** The key identifying the display data. This is intended to be used as a label for the display data when viewed in a dax monitoring system. */
  key?: string;
  /** The namespace for the key. This is usually a class name or programming language namespace (i.e. python module) which defines the display data. This allows a dax monitoring system to specially handle the data and perform custom rendering. */
  namespace?: string;
  /** Contains value if the data is of java class type. */
  javaClassValue?: string;
  /** An optional label to display in a dax UI for the element. */
  label?: string;
  /** Contains value if the data is of a boolean type. */
  boolValue?: boolean;
  /** A possible additional shorter value to display. For example a java_class_name_value of com.mypackage.MyDoFn will be stored with MyDoFn as the short_str_value and com.mypackage.MyDoFn as the java_class_name value. short_str_value can be displayed and java_class_name_value will be displayed as a tooltip. */
  shortStrValue?: string;
  /** Contains value if the data is of string type. */
  strValue?: string;
  /** Contains value if the data is of timestamp type. */
  timestampValue?: string;
  /** Contains value if the data is of float type. */
  floatValue?: number;
  /** Contains value if the data is of int64 type. */
  int64Value?: string;
  /** Contains value if the data is of duration type. */
  durationValue?: string;
  /** An optional full URL. */
  url?: string;
}

export const DisplayData: Schema.Codec<DisplayData> =
  /*@__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
    javaClassValue: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    boolValue: Schema.optional(Schema.Boolean),
    shortStrValue: Schema.optional(Schema.String),
    strValue: Schema.optional(Schema.String),
    timestampValue: Schema.optional(Schema.String),
    floatValue: Schema.optional(Schema.Number),
    int64Value: Schema.optional(Schema.String),
    durationValue: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "DisplayData" });

export interface TransformSummary {
  /** Type of transform. */
  kind?:
    | "UNKNOWN_KIND"
    | "PAR_DO_KIND"
    | "GROUP_BY_KEY_KIND"
    | "FLATTEN_KIND"
    | "READ_KIND"
    | "WRITE_KIND"
    | "CONSTANT_KIND"
    | "SINGLETON_KIND"
    | "SHUFFLE_KIND"
    | (string & {});
  /** User names for all collection outputs to this transform. */
  outputCollectionName?: ReadonlyArray<string>;
  /** User names for all collection inputs to this transform. */
  inputCollectionName?: ReadonlyArray<string>;
  /** User provided name for this transform instance. */
  name?: string;
  /** Transform-specific display data. */
  displayData?: ReadonlyArray<DisplayData>;
  /** SDK generated id of this transform instance. */
  id?: string;
}

export const TransformSummary: Schema.Codec<TransformSummary> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    outputCollectionName: Schema.optional(Schema.Array(Schema.String)),
    inputCollectionName: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    displayData: Schema.optional(Schema.Array(DisplayData)),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "TransformSummary" });

export interface MetricShortId {
  /** The index of the corresponding metric in the ReportWorkItemStatusRequest. Required. */
  metricIndex?: number;
  /** The service-generated short identifier for the metric. */
  shortId?: string;
}

export const MetricShortId: Schema.Codec<MetricShortId> =
  /*@__PURE__*/ Schema.Struct({
    metricIndex: Schema.optional(Schema.Number),
    shortId: Schema.optional(Schema.String),
  }).annotate({ identifier: "MetricShortId" });

export interface ApproximateSplitRequest {
  /** A fraction at which to split the work item, from 0.0 (beginning of the input) to 1.0 (end of the input). */
  fractionConsumed?: number;
  /** The fraction of the remainder of work to split the work item at, from 0.0 (split at the current position) to 1.0 (end of the input). */
  fractionOfRemainder?: number;
  /** A Position at which to split the work item. */
  position?: Position;
}

export const ApproximateSplitRequest: Schema.Codec<ApproximateSplitRequest> =
  /*@__PURE__*/ Schema.Struct({
    fractionConsumed: Schema.optional(Schema.Number),
    fractionOfRemainder: Schema.optional(Schema.Number),
    position: Schema.optional(Position),
  }).annotate({ identifier: "ApproximateSplitRequest" });

export interface WorkItemServiceState {
  /** The short ids that workers should use in subsequent metric updates. Workers should strive to use short ids whenever possible, but it is ok to request the short_id again if a worker lost track of it (e.g. if the worker is recovering from a crash). NOTE: it is possible that the response may have short ids for a subset of the metrics. */
  metricShortId?: ReadonlyArray<MetricShortId>;
  /** Obsolete, always empty. */
  suggestedStopPosition?: Position;
  /** New recommended reporting interval. */
  reportStatusInterval?: string;
  /** DEPRECATED in favor of split_request. */
  suggestedStopPoint?: ApproximateProgress;
  /** Time at which the current lease will expire. */
  leaseExpireTime?: string;
  /** The index value to use for the next report sent by the worker. Note: If the report call fails for whatever reason, the worker should reuse this index for subsequent report attempts. */
  nextReportIndex?: string;
  /** Other data returned by the service, specific to the particular worker harness. */
  harnessData?: Record<string, unknown>;
  /** A hot key is a symptom of poor data distribution in which there are enough elements mapped to a single key to impact pipeline performance. When present, this field includes metadata associated with any hot key. */
  hotKeyDetection?: HotKeyDetection;
  /** If set, a request to complete the work item with the given status. This will not be set to OK, unless supported by the specific kind of WorkItem. It can be used for the backend to indicate a WorkItem must terminate, e.g., for aborting work. */
  completeWorkStatus?: Status;
  /** The progress point in the WorkItem where the Dataflow service suggests that the worker truncate the task. */
  splitRequest?: ApproximateSplitRequest;
}

export const WorkItemServiceState: Schema.Codec<WorkItemServiceState> =
  /*@__PURE__*/ Schema.Struct({
    metricShortId: Schema.optional(Schema.Array(MetricShortId)),
    suggestedStopPosition: Schema.optional(Position),
    reportStatusInterval: Schema.optional(Schema.String),
    suggestedStopPoint: Schema.optional(ApproximateProgress),
    leaseExpireTime: Schema.optional(Schema.String),
    nextReportIndex: Schema.optional(Schema.String),
    harnessData: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    hotKeyDetection: Schema.optional(HotKeyDetection),
    completeWorkStatus: Schema.optional(Status),
    splitRequest: Schema.optional(ApproximateSplitRequest),
  }).annotate({ identifier: "WorkItemServiceState" });

export interface DatastoreIODetails {
  /** Namespace used in the connection. */
  namespace?: string;
  /** ProjectId accessed in the connection. */
  projectId?: string;
}

export const DatastoreIODetails: Schema.Codec<DatastoreIODetails> =
  /*@__PURE__*/ Schema.Struct({
    namespace: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatastoreIODetails" });

export interface JobExecutionStageInfo {
  /** The steps associated with the execution stage. Note that stages may have several steps, and that a given step might be run by more than one stage. */
  stepName?: ReadonlyArray<string>;
}

export const JobExecutionStageInfo: Schema.Codec<JobExecutionStageInfo> =
  /*@__PURE__*/ Schema.Struct({
    stepName: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "JobExecutionStageInfo" });

export interface JobExecutionInfo {
  /** A mapping from each stage to the information about that stage. */
  stages?: Record<string, JobExecutionStageInfo>;
}

export const JobExecutionInfo: Schema.Codec<JobExecutionInfo> =
  /*@__PURE__*/ Schema.Struct({
    stages: Schema.optional(
      Schema.Record(Schema.String, JobExecutionStageInfo),
    ),
  }).annotate({ identifier: "JobExecutionInfo" });

export interface PipelineDescription {
  /** Pipeline level display data. */
  displayData?: ReadonlyArray<DisplayData>;
  /** A hash value of the submitted pipeline portable graph step names if exists. */
  stepNamesHash?: string;
  /** Description of each transform in the pipeline and collections between them. */
  originalPipelineTransform?: ReadonlyArray<TransformSummary>;
  /** Description of each stage of execution of the pipeline. */
  executionPipelineStage?: ReadonlyArray<ExecutionStageSummary>;
}

export const PipelineDescription: Schema.Codec<PipelineDescription> =
  /*@__PURE__*/ Schema.Struct({
    displayData: Schema.optional(Schema.Array(DisplayData)),
    stepNamesHash: Schema.optional(Schema.String),
    originalPipelineTransform: Schema.optional(Schema.Array(TransformSummary)),
    executionPipelineStage: Schema.optional(
      Schema.Array(ExecutionStageSummary),
    ),
  }).annotate({ identifier: "PipelineDescription" });

export interface ExecutionStageState {
  /** The time at which the stage transitioned to this state. */
  currentStateTime?: string;
  /** Executions stage states allow the same set of values as JobState. */
  executionStageState?:
    | "JOB_STATE_UNKNOWN"
    | "JOB_STATE_STOPPED"
    | "JOB_STATE_RUNNING"
    | "JOB_STATE_DONE"
    | "JOB_STATE_FAILED"
    | "JOB_STATE_CANCELLED"
    | "JOB_STATE_UPDATED"
    | "JOB_STATE_DRAINING"
    | "JOB_STATE_DRAINED"
    | "JOB_STATE_PENDING"
    | "JOB_STATE_CANCELLING"
    | "JOB_STATE_QUEUED"
    | "JOB_STATE_RESOURCE_CLEANING_UP"
    | "JOB_STATE_PAUSING"
    | "JOB_STATE_PAUSED"
    | (string & {});
  /** The name of the execution stage. */
  executionStageName?: string;
}

export const ExecutionStageState: Schema.Codec<ExecutionStageState> =
  /*@__PURE__*/ Schema.Struct({
    currentStateTime: Schema.optional(Schema.String),
    executionStageState: Schema.optional(Schema.String),
    executionStageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExecutionStageState" });

export interface Step {
  /** The kind of step in the Cloud Dataflow job. */
  kind?: string;
  /** The name that identifies the step. This must be unique for each step with respect to all other steps in the Cloud Dataflow job. */
  name?: string;
  /** Named properties associated with the step. Each kind of predefined step has its own required set of properties. Must be provided on Create. Only retrieved with JOB_VIEW_ALL. */
  properties?: Record<string, unknown>;
}

export const Step: Schema.Codec<Step> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Step" });

export interface ServiceResources {
  /** Output only. List of Cloud Zones being used by the Dataflow Service for this job. Example: us-central1-c */
  zones?: ReadonlyArray<string>;
}

export const ServiceResources: Schema.Codec<ServiceResources> =
  /*@__PURE__*/ Schema.Struct({
    zones: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ServiceResources" });

export interface RuntimeUpdatableParams {
  /** The minimum number of workers to scale down to. This field is currently only supported for Streaming Engine jobs. */
  minNumWorkers?: number;
  /** Optional. Deprecated: Use `latency_tier` instead. The backlog threshold duration in seconds for autoscaling. Value must be non-negative. */
  acceptableBacklogDuration?: string;
  /** The maximum number of workers to cap autoscaling at. This field is currently only supported for Streaming Engine jobs. */
  maxNumWorkers?: number;
  /** Optional. The backlog threshold tier for autoscaling. Value must be one of "low-latency", "medium-latency", or "high-latency". */
  latencyTier?: string;
  /** Optional. Deprecated: Use `latency_tier` instead. The backlog threshold tier for autoscaling. Value must be one of "low-latency", "medium-latency", or "high-latency". */
  autoscalingTier?: string;
  /** Target worker utilization, compared against the aggregate utilization of the worker pool by autoscaler, to determine upscaling and downscaling when absent other constraints such as backlog. For more information, see [Update an existing pipeline](https://cloud.google.com/dataflow/docs/guides/updating-a-pipeline). */
  workerUtilizationHint?: number;
}

export const RuntimeUpdatableParams: Schema.Codec<RuntimeUpdatableParams> =
  /*@__PURE__*/ Schema.Struct({
    minNumWorkers: Schema.optional(Schema.Number),
    acceptableBacklogDuration: Schema.optional(Schema.String),
    maxNumWorkers: Schema.optional(Schema.Number),
    latencyTier: Schema.optional(Schema.String),
    autoscalingTier: Schema.optional(Schema.String),
    workerUtilizationHint: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RuntimeUpdatableParams" });

export interface SdkBug {
  /** Output only. Describes the impact of this SDK bug. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "GENERAL"
    | "PERFORMANCE"
    | "DATALOSS"
    | (string & {});
  /** Output only. Link to more information on the bug. */
  uri?: string;
  /** Output only. How severe the SDK bug is. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "NOTICE"
    | "WARNING"
    | "SEVERE"
    | (string & {});
}

export const SdkBug: Schema.Codec<SdkBug> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "SdkBug" });

export interface SdkVersion {
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
  /** Output only. Known bugs found in this SDK version. */
  bugs?: ReadonlyArray<SdkBug>;
}

export const SdkVersion: Schema.Codec<SdkVersion> =
  /*@__PURE__*/ Schema.Struct({
    sdkSupportStatus: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    versionDisplayName: Schema.optional(Schema.String),
    bugs: Schema.optional(Schema.Array(SdkBug)),
  }).annotate({ identifier: "SdkVersion" });

export interface BigTableIODetails {
  /** InstanceId accessed in the connection. */
  instanceId?: string;
  /** TableId accessed in the connection. */
  tableId?: string;
  /** ProjectId accessed in the connection. */
  projectId?: string;
}

export const BigTableIODetails: Schema.Codec<BigTableIODetails> =
  /*@__PURE__*/ Schema.Struct({
    instanceId: Schema.optional(Schema.String),
    tableId: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "BigTableIODetails" });

export interface PubSubIODetails {
  /** Topic accessed in the connection. */
  topic?: string;
  /** Subscription used in the connection. */
  subscription?: string;
}

export const PubSubIODetails: Schema.Codec<PubSubIODetails> =
  /*@__PURE__*/ Schema.Struct({
    topic: Schema.optional(Schema.String),
    subscription: Schema.optional(Schema.String),
  }).annotate({ identifier: "PubSubIODetails" });

export interface BigQueryIODetails {
  /** Query used to access data in the connection. */
  query?: string;
  /** Dataset accessed in the connection. */
  dataset?: string;
  /** Table accessed in the connection. */
  table?: string;
  /** Project accessed in the connection. */
  projectId?: string;
}

export const BigQueryIODetails: Schema.Codec<BigQueryIODetails> =
  /*@__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "BigQueryIODetails" });

export interface FileIODetails {
  /** File Pattern used to access files by the connector. */
  filePattern?: string;
}

export const FileIODetails: Schema.Codec<FileIODetails> =
  /*@__PURE__*/ Schema.Struct({
    filePattern: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileIODetails" });

export interface SpannerIODetails {
  /** ProjectId accessed in the connection. */
  projectId?: string;
  /** DatabaseId accessed in the connection. */
  databaseId?: string;
  /** InstanceId accessed in the connection. */
  instanceId?: string;
}

export const SpannerIODetails: Schema.Codec<SpannerIODetails> =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    databaseId: Schema.optional(Schema.String),
    instanceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpannerIODetails" });

export interface JobMetadata {
  /** The SDK version used to run the job. */
  sdkVersion?: SdkVersion;
  /** Identification of a Cloud Bigtable source used in the Dataflow job. */
  bigTableDetails?: ReadonlyArray<BigTableIODetails>;
  /** Identification of a Pub/Sub source used in the Dataflow job. */
  pubsubDetails?: ReadonlyArray<PubSubIODetails>;
  /** Identification of a BigQuery source used in the Dataflow job. */
  bigqueryDetails?: ReadonlyArray<BigQueryIODetails>;
  /** Identification of a File source used in the Dataflow job. */
  fileDetails?: ReadonlyArray<FileIODetails>;
  /** Identification of a Datastore source used in the Dataflow job. */
  datastoreDetails?: ReadonlyArray<DatastoreIODetails>;
  /** Identification of a Spanner source used in the Dataflow job. */
  spannerDetails?: ReadonlyArray<SpannerIODetails>;
  /** List of display properties to help UI filter jobs. */
  userDisplayProperties?: Record<string, string>;
}

export const JobMetadata: Schema.Codec<JobMetadata> =
  /*@__PURE__*/ Schema.Struct({
    sdkVersion: Schema.optional(SdkVersion),
    bigTableDetails: Schema.optional(Schema.Array(BigTableIODetails)),
    pubsubDetails: Schema.optional(Schema.Array(PubSubIODetails)),
    bigqueryDetails: Schema.optional(Schema.Array(BigQueryIODetails)),
    fileDetails: Schema.optional(Schema.Array(FileIODetails)),
    datastoreDetails: Schema.optional(Schema.Array(DatastoreIODetails)),
    spannerDetails: Schema.optional(Schema.Array(SpannerIODetails)),
    userDisplayProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "JobMetadata" });

export interface DebugOptions {
  /** Optional. When true, enables the logging of the literal hot key to the user's Cloud Logging. */
  enableHotKeyLogging?: boolean;
  /** Configuration options for sampling elements from a running pipeline. */
  dataSampling?: DataSamplingConfig;
}

export const DebugOptions: Schema.Codec<DebugOptions> =
  /*@__PURE__*/ Schema.Struct({
    enableHotKeyLogging: Schema.optional(Schema.Boolean),
    dataSampling: Schema.optional(DataSamplingConfig),
  }).annotate({ identifier: "DebugOptions" });

export interface AutoscalingSettings {
  /** The maximum number of workers to cap scaling at. */
  maxNumWorkers?: number;
  /** The algorithm to use for autoscaling. */
  algorithm?:
    | "AUTOSCALING_ALGORITHM_UNKNOWN"
    | "AUTOSCALING_ALGORITHM_NONE"
    | "AUTOSCALING_ALGORITHM_BASIC"
    | (string & {});
}

export const AutoscalingSettings: Schema.Codec<AutoscalingSettings> =
  /*@__PURE__*/ Schema.Struct({
    maxNumWorkers: Schema.optional(Schema.Number),
    algorithm: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutoscalingSettings" });

export interface TaskRunnerSettings {
  /** The API version of endpoint, e.g. "v1b3" */
  dataflowApiVersion?: string;
  /** The suggested backend language. */
  languageHint?: string;
  /** The command to launch the worker harness. */
  harnessCommand?: string;
  /** The ID string of the VM. */
  vmId?: string;
  /** The UNIX user ID on the worker VM to use for tasks launched by taskrunner; e.g. "root". */
  taskUser?: string;
  /** The prefix of the resources the taskrunner should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} */
  tempStoragePrefix?: string;
  /** Whether to continue taskrunner if an exception is hit. */
  continueOnException?: boolean;
  /** Whether to also send taskrunner log info to stderr. */
  alsologtostderr?: boolean;
  /** The streaming worker main class name. */
  streamingWorkerMainClass?: string;
  /** The file to store preprocessing commands in. */
  commandlinesFileName?: string;
  /** Indicates where to put logs. If this is not specified, the logs will not be uploaded. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} */
  logUploadLocation?: string;
  /** The OAuth2 scopes to be requested by the taskrunner in order to access the Cloud Dataflow API. */
  oauthScopes?: ReadonlyArray<string>;
  /** The settings to pass to the parallel worker harness. */
  parallelWorkerSettings?: WorkerSettings;
  /** The directory on the VM to store logs. */
  logDir?: string;
  /** The base URL for the taskrunner to use when accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/" */
  baseUrl?: string;
  /** The UNIX group ID on the worker VM to use for tasks launched by taskrunner; e.g. "wheel". */
  taskGroup?: string;
  /** The location on the worker for task-specific subdirectories. */
  baseTaskDir?: string;
  /** The file to store the workflow in. */
  workflowFileName?: string;
  /** Whether to send taskrunner log info to Google Compute Engine VM serial console. */
  logToSerialconsole?: boolean;
}

export const TaskRunnerSettings: Schema.Codec<TaskRunnerSettings> =
  /*@__PURE__*/ Schema.Struct({
    dataflowApiVersion: Schema.optional(Schema.String),
    languageHint: Schema.optional(Schema.String),
    harnessCommand: Schema.optional(Schema.String),
    vmId: Schema.optional(Schema.String),
    taskUser: Schema.optional(Schema.String),
    tempStoragePrefix: Schema.optional(Schema.String),
    continueOnException: Schema.optional(Schema.Boolean),
    alsologtostderr: Schema.optional(Schema.Boolean),
    streamingWorkerMainClass: Schema.optional(Schema.String),
    commandlinesFileName: Schema.optional(Schema.String),
    logUploadLocation: Schema.optional(Schema.String),
    oauthScopes: Schema.optional(Schema.Array(Schema.String)),
    parallelWorkerSettings: Schema.optional(WorkerSettings),
    logDir: Schema.optional(Schema.String),
    baseUrl: Schema.optional(Schema.String),
    taskGroup: Schema.optional(Schema.String),
    baseTaskDir: Schema.optional(Schema.String),
    workflowFileName: Schema.optional(Schema.String),
    logToSerialconsole: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TaskRunnerSettings" });

export interface Disk {
  /** Directory in a VM where disk is mounted. */
  mountPoint?: string;
  /** Size of disk in GB. If zero or unspecified, the service will attempt to choose a reasonable default. */
  sizeGb?: number;
  /** Disk storage type, as defined by Google Compute Engine. This must be a disk type appropriate to the project and zone in which the workers will run. If unknown or unspecified, the service will attempt to choose a reasonable default. For example, the standard persistent disk type is a resource name typically ending in "pd-standard". If SSD persistent disks are available, the resource name typically ends with "pd-ssd". The actual valid values are defined the Google Compute Engine API, not by the Cloud Dataflow API; consult the Google Compute Engine documentation for more information about determining the set of available disk types for a particular project and zone. Google Compute Engine Disk types are local to a particular project in a particular zone, and so the resource name will typically look something like this: compute.googleapis.com/projects/project-id/zones/zone/diskTypes/pd-standard */
  diskType?: string;
}

export const Disk: Schema.Codec<Disk> =
  /*@__PURE__*/ Schema.Struct({
    mountPoint: Schema.optional(Schema.String),
    sizeGb: Schema.optional(Schema.Number),
    diskType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Disk" });

export interface SdkHarnessContainerImage {
  /** The set of capabilities enumerated in the above Environment proto. See also [beam_runner_api.proto](https://github.com/apache/beam/blob/master/model/pipeline/src/main/proto/org/apache/beam/model/pipeline/v1/beam_runner_api.proto) */
  capabilities?: ReadonlyArray<string>;
  /** Environment ID for the Beam runner API proto Environment that corresponds to the current SDK Harness. */
  environmentId?: string;
  /** A docker container image that resides in Google Container Registry. */
  containerImage?: string;
  /** If true, recommends the Dataflow service to use only one core per SDK container instance with this image. If false (or unset) recommends using more than one core per SDK container instance with this image for efficiency. Note that Dataflow service may choose to override this property if needed. */
  useSingleCorePerContainer?: boolean;
}

export const SdkHarnessContainerImage: Schema.Codec<SdkHarnessContainerImage> =
  /*@__PURE__*/ Schema.Struct({
    capabilities: Schema.optional(Schema.Array(Schema.String)),
    environmentId: Schema.optional(Schema.String),
    containerImage: Schema.optional(Schema.String),
    useSingleCorePerContainer: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SdkHarnessContainerImage" });

export interface WorkerPool {
  /** Optional. IOPS provisioned for the root disk for VMs. */
  diskProvisionedIops?: string;
  /** The default package set to install. This allows the service to select a default set of packages which are useful to worker harnesses written in a particular language. */
  defaultPackageSet?:
    | "DEFAULT_PACKAGE_SET_UNKNOWN"
    | "DEFAULT_PACKAGE_SET_NONE"
    | "DEFAULT_PACKAGE_SET_JAVA"
    | "DEFAULT_PACKAGE_SET_PYTHON"
    | (string & {});
  /** Metadata to set on the Google Compute Engine VMs. */
  metadata?: Record<string, string>;
  /** Required. Docker container image that executes the Cloud Dataflow worker harness, residing in Google Container Registry. Deprecated for the Fn API path. Use sdk_harness_container_images instead. */
  workerHarnessContainerImage?: string;
  /** Size of root disk for VMs, in GB. If zero or unspecified, the service will attempt to choose a reasonable default. */
  diskSizeGb?: number;
  /** The number of threads per worker harness. If empty or unspecified, the service will choose a number of threads (according to the number of cores on the selected machine type for batch, or 1 by convention for streaming). */
  numThreadsPerWorker?: number;
  /** Optional. Throughput provisioned for the root disk for VMs. */
  diskProvisionedThroughputMibps?: string;
  /** Settings for autoscaling of this WorkerPool. */
  autoscalingSettings?: AutoscalingSettings;
  /** Number of Google Compute Engine workers in this pool needed to execute the job. If zero or unspecified, the service will attempt to choose a reasonable default. */
  numWorkers?: number;
  /** The kind of the worker pool; currently only `harness` and `shuffle` are supported. */
  kind?: string;
  /** Machine type (e.g. "n1-standard-1"). If empty or unspecified, the service will attempt to choose a reasonable default. */
  machineType?: string;
  /** Configuration for VM IPs. */
  ipConfiguration?:
    | "WORKER_IP_UNSPECIFIED"
    | "WORKER_IP_PUBLIC"
    | "WORKER_IP_PRIVATE"
    | (string & {});
  /** Sets the policy for determining when to turndown worker pool. Allowed values are: `TEARDOWN_ALWAYS`, `TEARDOWN_ON_SUCCESS`, and `TEARDOWN_NEVER`. `TEARDOWN_ALWAYS` means workers are always torn down regardless of whether the job succeeds. `TEARDOWN_ON_SUCCESS` means workers are torn down if the job succeeds. `TEARDOWN_NEVER` means the workers are never torn down. If the workers are not torn down by the service, they will continue to run and use Google Compute Engine VM resources in the user's project until they are explicitly terminated by the user. Because of this, Google recommends using the `TEARDOWN_ALWAYS` policy except for small, manually supervised test jobs. If unknown or unspecified, the service will attempt to choose a reasonable default. */
  teardownPolicy?:
    | "TEARDOWN_POLICY_UNKNOWN"
    | "TEARDOWN_ALWAYS"
    | "TEARDOWN_ON_SUCCESS"
    | "TEARDOWN_NEVER"
    | (string & {});
  /** Packages to be installed on workers. */
  packages?: ReadonlyArray<Package>;
  /** Fully qualified source image for disks. */
  diskSourceImage?: string;
  /** Settings passed through to Google Compute Engine workers when using the standard Dataflow task runner. Users should ignore this field. */
  taskrunnerSettings?: TaskRunnerSettings;
  /** Type of root disk for VMs. If empty or unspecified, the service will attempt to choose a reasonable default. */
  diskType?: string;
  /** The action to take on host maintenance, as defined by the Google Compute Engine API. */
  onHostMaintenance?: string;
  /** Data disks that are used by a VM in this workflow. */
  dataDisks?: ReadonlyArray<Disk>;
  /** Extra arguments for this worker pool. */
  poolArgs?: Record<string, unknown>;
  /** Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
  network?: string;
  /** Subnetwork to which VMs will be assigned, if desired. Expected to be of the form "regions/REGION/subnetworks/SUBNETWORK". */
  subnetwork?: string;
  /** Zone to run the worker pools in. If empty or unspecified, the service will attempt to choose a reasonable default. */
  zone?: string;
  /** Set of SDK harness containers needed to execute this pipeline. This will only be set in the Fn API path. For non-cross-language pipelines this should have only one entry. Cross-language pipelines will have two or more entries. */
  sdkHarnessContainerImages?: ReadonlyArray<SdkHarnessContainerImage>;
}

export const WorkerPool: Schema.Codec<WorkerPool> =
  /*@__PURE__*/ Schema.Struct({
    diskProvisionedIops: Schema.optional(Schema.String),
    defaultPackageSet: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    workerHarnessContainerImage: Schema.optional(Schema.String),
    diskSizeGb: Schema.optional(Schema.Number),
    numThreadsPerWorker: Schema.optional(Schema.Number),
    diskProvisionedThroughputMibps: Schema.optional(Schema.String),
    autoscalingSettings: Schema.optional(AutoscalingSettings),
    numWorkers: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    ipConfiguration: Schema.optional(Schema.String),
    teardownPolicy: Schema.optional(Schema.String),
    packages: Schema.optional(Schema.Array(Package)),
    diskSourceImage: Schema.optional(Schema.String),
    taskrunnerSettings: Schema.optional(TaskRunnerSettings),
    diskType: Schema.optional(Schema.String),
    onHostMaintenance: Schema.optional(Schema.String),
    dataDisks: Schema.optional(Schema.Array(Disk)),
    poolArgs: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    network: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    sdkHarnessContainerImages: Schema.optional(
      Schema.Array(SdkHarnessContainerImage),
    ),
  }).annotate({ identifier: "WorkerPool" });

export interface Environment {
  /** The type of cluster manager API to use. If unknown or unspecified, the service will attempt to choose a reasonable default. This should be in the form of the API service name, e.g. "compute.googleapis.com". */
  clusterManagerApiService?: string;
  /** Optional. Any debugging options to be supplied to the job. */
  debugOptions?: DebugOptions;
  /** The prefix of the resources the system should use for temporary storage. The system will append the suffix "/temp-{JOBNAME} to this resource prefix, where {JOBNAME} is the value of the job_name field. The resulting bucket and object prefix is used as the prefix of the resources used to store temporary data needed during the job execution. NOTE: This will override the value in taskrunner_settings. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} */
  tempStoragePrefix?: string;
  /** Optional. If set, contains the Cloud KMS key identifier used to encrypt data at rest, AKA a Customer Managed Encryption Key (CMEK). Format: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY */
  serviceKmsKeyName?: string;
  /** Optional. Identity to run virtual machines as. Defaults to the default account. */
  serviceAccountEmail?: string;
  /** Optional. A description of the process that generated the request. */
  userAgent?: Record<string, unknown>;
  /** Optional. The dataset for the current project where various workflow related tables are stored. The supported resource type is: Google BigQuery: bigquery.googleapis.com/{dataset} */
  dataset?: string;
  /** The list of experiments to enable. This field should be used for SDK related experiments and not for service related experiments. The proper field for service related experiments is service_options. */
  experiments?: ReadonlyArray<string>;
  /** The worker pools. At least one "harness" worker pool must be specified in order for the job to have workers. */
  workerPools?: ReadonlyArray<WorkerPool>;
  /** The Cloud Dataflow SDK pipeline options specified by the user. These options are passed through the service and are used to recreate the SDK pipeline options on the worker in a language agnostic and platform independent way. */
  sdkPipelineOptions?: Record<string, unknown>;
  /** Optional. Which Flexible Resource Scheduling mode to run in. */
  flexResourceSchedulingGoal?:
    | "FLEXRS_UNSPECIFIED"
    | "FLEXRS_SPEED_OPTIMIZED"
    | "FLEXRS_COST_OPTIMIZED"
    | (string & {});
  /** Output only. Whether the job uses the Streaming Engine resource-based billing model. */
  useStreamingEngineResourceBasedBilling?: boolean;
  /** Optional. The list of service options to enable. This field should be used for service related experiments only. These experiments, when graduating to GA, should be replaced by dedicated fields or become default (i.e. always on). */
  serviceOptions?: ReadonlyArray<string>;
  /** Optional. The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region. */
  workerRegion?: string;
  /** Optional. The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. */
  workerZone?: string;
  /** Experimental settings. */
  internalExperiments?: Record<string, unknown>;
  /** A structure describing which components and their versions of the service are required in order to run the job. */
  version?: Record<string, unknown>;
  /** Output only. The shuffle mode used for the job. */
  shuffleMode?:
    | "SHUFFLE_MODE_UNSPECIFIED"
    | "VM_BASED"
    | "SERVICE_BASED"
    | (string & {});
  /** Optional. Specifies the Streaming Engine message processing guarantees. Reduces cost and latency but might result in duplicate messages committed to storage. Designed to run simple mapping streaming ETL jobs at the lowest cost. For example, Change Data Capture (CDC) to BigQuery is a canonical use case. For more information, see [Set the pipeline streaming mode](https://cloud.google.com/dataflow/docs/guides/streaming-modes). */
  streamingMode?:
    | "STREAMING_MODE_UNSPECIFIED"
    | "STREAMING_MODE_EXACTLY_ONCE"
    | "STREAMING_MODE_AT_LEAST_ONCE"
    | (string & {});
  /** Optional. True when any worker pool that uses public IPs is present. */
  usePublicIps?: boolean;
}

export const Environment: Schema.Codec<Environment> =
  /*@__PURE__*/ Schema.Struct({
    clusterManagerApiService: Schema.optional(Schema.String),
    debugOptions: Schema.optional(DebugOptions),
    tempStoragePrefix: Schema.optional(Schema.String),
    serviceKmsKeyName: Schema.optional(Schema.String),
    serviceAccountEmail: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    dataset: Schema.optional(Schema.String),
    experiments: Schema.optional(Schema.Array(Schema.String)),
    workerPools: Schema.optional(Schema.Array(WorkerPool)),
    sdkPipelineOptions: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    flexResourceSchedulingGoal: Schema.optional(Schema.String),
    useStreamingEngineResourceBasedBilling: Schema.optional(Schema.Boolean),
    serviceOptions: Schema.optional(Schema.Array(Schema.String)),
    workerRegion: Schema.optional(Schema.String),
    workerZone: Schema.optional(Schema.String),
    internalExperiments: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    version: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    shuffleMode: Schema.optional(Schema.String),
    streamingMode: Schema.optional(Schema.String),
    usePublicIps: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Environment" });

export interface Job {
  /** The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service. */
  createTime?: string;
  /** The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field might be mutated by the Dataflow service; callers cannot mutate it. */
  currentState?:
    | "JOB_STATE_UNKNOWN"
    | "JOB_STATE_STOPPED"
    | "JOB_STATE_RUNNING"
    | "JOB_STATE_DONE"
    | "JOB_STATE_FAILED"
    | "JOB_STATE_CANCELLED"
    | "JOB_STATE_UPDATED"
    | "JOB_STATE_DRAINING"
    | "JOB_STATE_DRAINED"
    | "JOB_STATE_PENDING"
    | "JOB_STATE_CANCELLING"
    | "JOB_STATE_QUEUED"
    | "JOB_STATE_RESOURCE_CLEANING_UP"
    | "JOB_STATE_PAUSING"
    | "JOB_STATE_PAUSED"
    | (string & {});
  /** Output only. Indicates whether the job can be paused. */
  pausable?: boolean;
  /** Deprecated. */
  executionInfo?: JobExecutionInfo;
  /** Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests. */
  satisfiesPzs?: boolean;
  /** A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} */
  tempFiles?: ReadonlyArray<string>;
  /** Optional. The type of Dataflow job. */
  type?:
    | "JOB_TYPE_UNKNOWN"
    | "JOB_TYPE_BATCH"
    | "JOB_TYPE_STREAMING"
    | (string & {});
  /** If this is specified, the job's initial state is populated from the given snapshot. */
  createdFromSnapshotId?: string;
  /** Preliminary field: The format of this data may change at any time. A description of the user pipeline and stages through which it is executed. Created by Cloud Dataflow service. Only retrieved with JOB_VIEW_DESCRIPTION or JOB_VIEW_ALL. */
  pipelineDescription?: PipelineDescription;
  /** The ID of the Google Cloud project that the job belongs to. */
  projectId?: string;
  /** This field may be mutated by the Cloud Dataflow service; callers cannot mutate it. */
  stageStates?: ReadonlyArray<ExecutionStageState>;
  /** The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service. */
  startTime?: string;
  /** The unique ID of this job. This field is set by the Dataflow service when the job is created, and is immutable for the life of the job. */
  id?: string;
  /** The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it. */
  clientRequestId?: string;
  /** Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL. */
  steps?: ReadonlyArray<Step>;
  /** The job's requested state. Applies to `UpdateJob` requests. Set `requested_state` with `UpdateJob` requests to switch between the states `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING`. You can also use `UpdateJob` requests to change a job's state from `JOB_STATE_RUNNING` to `JOB_STATE_CANCELLED`, `JOB_STATE_DONE`, or `JOB_STATE_DRAINED`. These states irrevocably terminate the job if it hasn't already reached a terminal state. This field has no effect on `CreateJob` requests. */
  requestedState?:
    | "JOB_STATE_UNKNOWN"
    | "JOB_STATE_STOPPED"
    | "JOB_STATE_RUNNING"
    | "JOB_STATE_DONE"
    | "JOB_STATE_FAILED"
    | "JOB_STATE_CANCELLED"
    | "JOB_STATE_UPDATED"
    | "JOB_STATE_DRAINING"
    | "JOB_STATE_DRAINED"
    | "JOB_STATE_PENDING"
    | "JOB_STATE_CANCELLING"
    | "JOB_STATE_QUEUED"
    | "JOB_STATE_RESOURCE_CLEANING_UP"
    | "JOB_STATE_PAUSING"
    | "JOB_STATE_PAUSED"
    | (string & {});
  /** The Cloud Storage location where the steps are stored. */
  stepsLocation?: string;
  /** Output only. Resources used by the Dataflow Service to run the job. */
  serviceResources?: ServiceResources;
  /** This field may ONLY be modified at runtime using the projects.jobs.update method to adjust job behavior. This field has no effect when specified at job creation. */
  runtimeUpdatableParams?: RuntimeUpdatableParams;
  /** User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size. */
  labels?: Record<string, string>;
  /** This field is populated by the Dataflow service to support filtering jobs by the metadata values provided here. Populated for ListJobs and all GetJob views SUMMARY and higher. */
  jobMetadata?: JobMetadata;
  /** Optional. The user-specified Dataflow job name. Only one active job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a job with the same name as an active job that already exists, the attempt returns the existing job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?` */
  name?: string;
  /** Optional. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. */
  location?: string;
  /** Output only. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests. */
  satisfiesPzi?: boolean;
  /** Optional. The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. */
  transformNameMapping?: Record<string, string>;
  /** If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job. */
  replacedByJobId?: string;
  /** The timestamp associated with the current state. */
  currentStateTime?: string;
  /** Optional. The environment for the job. */
  environment?: Environment;
  /** If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job. */
  replaceJobId?: string;
}

export const Job: Schema.Codec<Job> = /*@__PURE__*/ Schema.Struct({
  createTime: Schema.optional(Schema.String),
  currentState: Schema.optional(Schema.String),
  pausable: Schema.optional(Schema.Boolean),
  executionInfo: Schema.optional(JobExecutionInfo),
  satisfiesPzs: Schema.optional(Schema.Boolean),
  tempFiles: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  createdFromSnapshotId: Schema.optional(Schema.String),
  pipelineDescription: Schema.optional(PipelineDescription),
  projectId: Schema.optional(Schema.String),
  stageStates: Schema.optional(Schema.Array(ExecutionStageState)),
  startTime: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  clientRequestId: Schema.optional(Schema.String),
  steps: Schema.optional(Schema.Array(Step)),
  requestedState: Schema.optional(Schema.String),
  stepsLocation: Schema.optional(Schema.String),
  serviceResources: Schema.optional(ServiceResources),
  runtimeUpdatableParams: Schema.optional(RuntimeUpdatableParams),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  jobMetadata: Schema.optional(JobMetadata),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  satisfiesPzi: Schema.optional(Schema.Boolean),
  transformNameMapping: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  replacedByJobId: Schema.optional(Schema.String),
  currentStateTime: Schema.optional(Schema.String),
  environment: Schema.optional(Environment),
  replaceJobId: Schema.optional(Schema.String),
}).annotate({ identifier: "Job" });

export interface LaunchFlexTemplateResponse {
  /** The job that was launched, if the request was not a dry run and the job was successfully launched. */
  job?: Job;
}

export const LaunchFlexTemplateResponse: Schema.Codec<LaunchFlexTemplateResponse> =
  /*@__PURE__*/ Schema.Struct({
    job: Schema.optional(Job),
  }).annotate({ identifier: "LaunchFlexTemplateResponse" });

export interface WorkItemDetails {
  /** Name of this work item. */
  taskId?: string;
  /** Start time of this work item attempt. */
  startTime?: string;
  /** State of this work item. */
  state?:
    | "EXECUTION_STATE_UNKNOWN"
    | "EXECUTION_STATE_NOT_STARTED"
    | "EXECUTION_STATE_RUNNING"
    | "EXECUTION_STATE_SUCCEEDED"
    | "EXECUTION_STATE_FAILED"
    | "EXECUTION_STATE_CANCELLED"
    | (string & {});
  /** End time of this work item attempt. If the work item is completed, this is the actual end time of the work item. Otherwise, it is the predicted end time. */
  endTime?: string;
  /** Attempt ID of this work item */
  attemptId?: string;
  /** Progress of this work item. */
  progress?: ProgressTimeseries;
  /** Metrics for this work item. */
  metrics?: ReadonlyArray<MetricUpdate>;
  /** Information about straggler detections for this work item. */
  stragglerInfo?: StragglerInfo;
}

export const WorkItemDetails: Schema.Codec<WorkItemDetails> =
  /*@__PURE__*/ Schema.Struct({
    taskId: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    attemptId: Schema.optional(Schema.String),
    progress: Schema.optional(ProgressTimeseries),
    metrics: Schema.optional(Schema.Array(MetricUpdate)),
    stragglerInfo: Schema.optional(StragglerInfo),
  }).annotate({ identifier: "WorkItemDetails" });

export interface SnapshotJobRequest {
  /** TTL for the snapshot. */
  ttl?: string;
  /** User specified description of the snapshot. Maybe empty. */
  description?: string;
  /** The location that contains this job. */
  location?: string;
  /** If true, perform snapshots for sources which support this. */
  snapshotSources?: boolean;
}

export const SnapshotJobRequest: Schema.Codec<SnapshotJobRequest> =
  /*@__PURE__*/ Schema.Struct({
    ttl: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    snapshotSources: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SnapshotJobRequest" });

export interface PubsubSnapshotMetadata {
  /** The name of the Pubsub snapshot. */
  snapshotName?: string;
  /** The name of the Pubsub topic. */
  topicName?: string;
  /** The expire time of the Pubsub snapshot. */
  expireTime?: string;
}

export const PubsubSnapshotMetadata: Schema.Codec<PubsubSnapshotMetadata> =
  /*@__PURE__*/ Schema.Struct({
    snapshotName: Schema.optional(Schema.String),
    topicName: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "PubsubSnapshotMetadata" });

export interface Snapshot {
  /** The disk byte size of the snapshot. Only available for snapshots in READY state. */
  diskSizeBytes?: string;
  /** Cloud region where this snapshot lives in, e.g., "us-central1". */
  region?: string;
  /** The time this snapshot was created. */
  creationTime?: string;
  /** State of the snapshot. */
  state?:
    | "UNKNOWN_SNAPSHOT_STATE"
    | "PENDING"
    | "RUNNING"
    | "READY"
    | "FAILED"
    | "DELETED"
    | (string & {});
  /** The job this snapshot was created from. */
  sourceJobId?: string;
  /** Pub/Sub snapshot metadata. */
  pubsubMetadata?: ReadonlyArray<PubsubSnapshotMetadata>;
  /** The project this snapshot belongs to. */
  projectId?: string;
  /** The time after which this snapshot will be automatically deleted. */
  ttl?: string;
  /** The unique ID of this snapshot. */
  id?: string;
  /** User specified description of the snapshot. Maybe empty. */
  description?: string;
}

export const Snapshot: Schema.Codec<Snapshot> =
  /*@__PURE__*/ Schema.Struct({
    diskSizeBytes: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    creationTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    sourceJobId: Schema.optional(Schema.String),
    pubsubMetadata: Schema.optional(Schema.Array(PubsubSnapshotMetadata)),
    projectId: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Snapshot" });

export interface GetDebugConfigResponse {
  /** The encoded debug configuration for the requested component. */
  config?: string;
}

export const GetDebugConfigResponse: Schema.Codec<GetDebugConfigResponse> =
  /*@__PURE__*/ Schema.Struct({
    config: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetDebugConfigResponse" });

export interface WorkerThreadScalingReportResponse {
  /** Recommended number of threads for a worker. */
  recommendedThreadCount?: number;
}

export const WorkerThreadScalingReportResponse: Schema.Codec<WorkerThreadScalingReportResponse> =
  /*@__PURE__*/ Schema.Struct({
    recommendedThreadCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "WorkerThreadScalingReportResponse" });

export interface WorkerHealthReportResponse {
  /** A positive value indicates the worker should change its reporting interval to the specified value. The default value of zero means no change in report rate is requested by the server. */
  reportInterval?: string;
}

export const WorkerHealthReportResponse: Schema.Codec<WorkerHealthReportResponse> =
  /*@__PURE__*/ Schema.Struct({
    reportInterval: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkerHealthReportResponse" });

export interface WorkerShutdownNoticeResponse {}

export const WorkerShutdownNoticeResponse: Schema.Codec<WorkerShutdownNoticeResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "WorkerShutdownNoticeResponse",
  });

export interface ResourceUtilizationReportResponse {}

export const ResourceUtilizationReportResponse: Schema.Codec<ResourceUtilizationReportResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResourceUtilizationReportResponse",
  });

export interface StreamingScalingReportResponse {
  /** Maximum thread count limit; */
  maximumThreadCount?: number;
}

export const StreamingScalingReportResponse: Schema.Codec<StreamingScalingReportResponse> =
  /*@__PURE__*/ Schema.Struct({
    maximumThreadCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "StreamingScalingReportResponse" });

export interface WorkerMessageResponse {
  /** Service's thread scaling recommendation for workers. */
  workerThreadScalingReportResponse?: WorkerThreadScalingReportResponse;
  /** The service's response to a worker's health report. */
  workerHealthReportResponse?: WorkerHealthReportResponse;
  /** Service's response to shutdown notice (currently empty). */
  workerShutdownNoticeResponse?: WorkerShutdownNoticeResponse;
  /** Service's response to reporting worker metrics (currently empty). */
  workerMetricsResponse?: ResourceUtilizationReportResponse;
  /** Service's streaming scaling response for workers. */
  streamingScalingReportResponse?: StreamingScalingReportResponse;
}

export const WorkerMessageResponse: Schema.Codec<WorkerMessageResponse> =
  /*@__PURE__*/ Schema.Struct({
    workerThreadScalingReportResponse: Schema.optional(
      WorkerThreadScalingReportResponse,
    ),
    workerHealthReportResponse: Schema.optional(WorkerHealthReportResponse),
    workerShutdownNoticeResponse: Schema.optional(WorkerShutdownNoticeResponse),
    workerMetricsResponse: Schema.optional(ResourceUtilizationReportResponse),
    streamingScalingReportResponse: Schema.optional(
      StreamingScalingReportResponse,
    ),
  }).annotate({ identifier: "WorkerMessageResponse" });

export interface FailedLocation {
  /** The name of the [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that failed to respond. */
  name?: string;
}

export const FailedLocation: Schema.Codec<FailedLocation> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "FailedLocation" });

export interface ListJobsResponse {
  /** Set if there may be more results than fit in this response. */
  nextPageToken?: string;
  /** Zero or more messages describing the [regional endpoints] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that failed to respond. */
  failedLocation?: ReadonlyArray<FailedLocation>;
  /** A subset of the requested job information. */
  jobs?: ReadonlyArray<Job>;
}

export const ListJobsResponse: Schema.Codec<ListJobsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    failedLocation: Schema.optional(Schema.Array(FailedLocation)),
    jobs: Schema.optional(Schema.Array(Job)),
  }).annotate({ identifier: "ListJobsResponse" });

export interface GPUUtilization {
  /** Required. GPU utilization rate of any kernel over the last sample period in the range of [0, 1]. */
  rate?: number;
}

export const GPUUtilization: Schema.Codec<GPUUtilization> =
  /*@__PURE__*/ Schema.Struct({
    rate: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GPUUtilization" });

export interface GPUUsage {
  /** Required. Timestamp of the measurement. */
  timestamp?: string;
  /** Required. Utilization info about the GPU. */
  utilization?: GPUUtilization;
}

export const GPUUsage: Schema.Codec<GPUUsage> =
  /*@__PURE__*/ Schema.Struct({
    timestamp: Schema.optional(Schema.String),
    utilization: Schema.optional(GPUUtilization),
  }).annotate({ identifier: "GPUUsage" });

export interface WorkerMessageCode {
  /** The code is a string intended for consumption by a machine that identifies the type of message being sent. Examples: 1. "HARNESS_STARTED" might be used to indicate the worker harness has started. 2. "GCS_DOWNLOAD_ERROR" might be used to indicate an error downloading a Cloud Storage file as part of the boot process of one of the worker containers. This is a string and not an enum to make it easy to add new codes without waiting for an API change. */
  code?: string;
  /** Parameters contains specific information about the code. This is a struct to allow parameters of different types. Examples: 1. For a "HARNESS_STARTED" message parameters might provide the name of the worker and additional data like timing information. 2. For a "GCS_DOWNLOAD_ERROR" parameters might contain fields listing the Cloud Storage objects being downloaded and fields containing errors. In general complex data structures should be avoided. If a worker needs to send a specific and complicated data structure then please consider defining a new proto and adding it to the data oneof in WorkerMessageResponse. Conventions: Parameters should only be used for information that isn't typically passed as a label. hostname and other worker identifiers should almost always be passed as labels since they will be included on most messages. */
  parameters?: Record<string, unknown>;
}

export const WorkerMessageCode: Schema.Codec<WorkerMessageCode> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "WorkerMessageCode" });

export interface CPUTime {
  /** Timestamp of the measurement. */
  timestamp?: string;
  /** Total active CPU time across all cores (ie., non-idle) in milliseconds since start-up. */
  totalMs?: string;
  /** Average CPU utilization rate (% non-idle cpu / second) since previous sample. */
  rate?: number;
}

export const CPUTime: Schema.Codec<CPUTime> =
  /*@__PURE__*/ Schema.Struct({
    timestamp: Schema.optional(Schema.String),
    totalMs: Schema.optional(Schema.String),
    rate: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CPUTime" });

export interface StreamingScalingReport {
  activeBundleCount?: number;
  /** Maximum bytes. */
  maximumBytes?: string;
  outstandingBytesCount?: number;
  /** Maximum thread count limit. */
  maximumThreadCount?: number;
  maximumBytesCount?: number;
  /** Current outstanding bytes. */
  outstandingBytes?: string;
  /** Maximum bundle count. */
  maximumBundleCount?: number;
  /** Current acive thread count. */
  activeThreadCount?: number;
  /** Current outstanding bundle count. */
  outstandingBundleCount?: number;
}

export const StreamingScalingReport: Schema.Codec<StreamingScalingReport> =
  /*@__PURE__*/ Schema.Struct({
    activeBundleCount: Schema.optional(Schema.Number),
    maximumBytes: Schema.optional(Schema.String),
    outstandingBytesCount: Schema.optional(Schema.Number),
    maximumThreadCount: Schema.optional(Schema.Number),
    maximumBytesCount: Schema.optional(Schema.Number),
    outstandingBytes: Schema.optional(Schema.String),
    maximumBundleCount: Schema.optional(Schema.Number),
    activeThreadCount: Schema.optional(Schema.Number),
    outstandingBundleCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "StreamingScalingReport" });

export interface Sdk {
  /** The SDK harness id. */
  sdkId?: string;
  /** The stacktraces for the processes running on the SDK harness. */
  stacks?: ReadonlyArray<Stack>;
}

export const Sdk: Schema.Codec<Sdk> = /*@__PURE__*/ Schema.Struct({
  sdkId: Schema.optional(Schema.String),
  stacks: Schema.optional(Schema.Array(Stack)),
}).annotate({ identifier: "Sdk" });

export interface WorkerThreadScalingReport {
  /** Current number of active threads in a worker. */
  currentThreadCount?: number;
}

export const WorkerThreadScalingReport: Schema.Codec<WorkerThreadScalingReport> =
  /*@__PURE__*/ Schema.Struct({
    currentThreadCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "WorkerThreadScalingReport" });

export interface RuntimeMetadata {
  /** SDK Info for the template. */
  sdkInfo?: SDKInfo;
  /** The parameters for the template. */
  parameters?: ReadonlyArray<ParameterMetadata>;
}

export const RuntimeMetadata: Schema.Codec<RuntimeMetadata> =
  /*@__PURE__*/ Schema.Struct({
    sdkInfo: Schema.optional(SDKInfo),
    parameters: Schema.optional(Schema.Array(ParameterMetadata)),
  }).annotate({ identifier: "RuntimeMetadata" });

export interface GetTemplateResponse {
  /** The status of the get template request. Any problems with the request will be indicated in the error_details. */
  status?: Status;
  /** Describes the runtime metadata with SDKInfo and available parameters. */
  runtimeMetadata?: RuntimeMetadata;
  /** Template Type. */
  templateType?: "UNKNOWN" | "LEGACY" | "FLEX" | (string & {});
  /** The template metadata describing the template name, available parameters, etc. */
  metadata?: TemplateMetadata;
}

export const GetTemplateResponse: Schema.Codec<GetTemplateResponse> =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(Status),
    runtimeMetadata: Schema.optional(RuntimeMetadata),
    templateType: Schema.optional(Schema.String),
    metadata: Schema.optional(TemplateMetadata),
  }).annotate({ identifier: "GetTemplateResponse" });

export interface JobMetrics {
  /** Timestamp as of which metric values are current. */
  metricTime?: string;
  /** All metrics for this job. */
  metrics?: ReadonlyArray<MetricUpdate>;
}

export const JobMetrics: Schema.Codec<JobMetrics> =
  /*@__PURE__*/ Schema.Struct({
    metricTime: Schema.optional(Schema.String),
    metrics: Schema.optional(Schema.Array(MetricUpdate)),
  }).annotate({ identifier: "JobMetrics" });

export interface LaunchFlexTemplateRequest {
  /** If true, the request is validated but not actually executed. Defaults to false. */
  validateOnly?: boolean;
  /** Required. Parameter to launch a job form Flex Template. */
  launchParameter?: LaunchFlexTemplateParameter;
}

export const LaunchFlexTemplateRequest: Schema.Codec<LaunchFlexTemplateRequest> =
  /*@__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean),
    launchParameter: Schema.optional(LaunchFlexTemplateParameter),
  }).annotate({ identifier: "LaunchFlexTemplateRequest" });

export interface GetWorkerStacktracesRequest {
  /** The worker for which to get stacktraces. The returned stacktraces will be for the SDK harness running on this worker. */
  workerId?: string;
  /** The end time for the stacktrace query. The returned stacktraces will be a recent stack trace at or shortly before this time. */
  endTime?: string;
}

export const GetWorkerStacktracesRequest: Schema.Codec<GetWorkerStacktracesRequest> =
  /*@__PURE__*/ Schema.Struct({
    workerId: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetWorkerStacktracesRequest" });

export interface LeaseWorkItemRequest {
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job. */
  location?: string;
  /** Filter for WorkItem type. */
  workItemTypes?: ReadonlyArray<string>;
  /** Optional. The project number of the project this worker belongs to. */
  projectNumber?: string;
  /** The current timestamp at the worker. */
  currentWorkerTime?: string;
  /** The initial lease period. */
  requestedLeaseDuration?: string;
  /** Identifies the worker leasing work -- typically the ID of the virtual machine running the worker. */
  workerId?: string;
  /** Untranslated bag-of-bytes WorkRequest from UnifiedWorker. */
  unifiedWorkerRequest?: Record<string, unknown>;
  /** Worker capabilities. WorkItems might be limited to workers with specific capabilities. */
  workerCapabilities?: ReadonlyArray<string>;
}

export const LeaseWorkItemRequest: Schema.Codec<LeaseWorkItemRequest> =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    workItemTypes: Schema.optional(Schema.Array(Schema.String)),
    projectNumber: Schema.optional(Schema.String),
    currentWorkerTime: Schema.optional(Schema.String),
    requestedLeaseDuration: Schema.optional(Schema.String),
    workerId: Schema.optional(Schema.String),
    unifiedWorkerRequest: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    workerCapabilities: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LeaseWorkItemRequest" });

export interface WorkerShutdownNotice {
  /** The reason for the worker shutdown. Current possible values are: "UNKNOWN": shutdown reason is unknown. "PREEMPTION": shutdown reason is preemption. Other possible reasons may be added in the future. */
  reason?: string;
}

export const WorkerShutdownNotice: Schema.Codec<WorkerShutdownNotice> =
  /*@__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkerShutdownNotice" });

export interface ReportWorkItemStatusResponse {
  /** Untranslated bag-of-bytes WorkProgressUpdateResponse for UnifiedWorker. */
  unifiedWorkerResponse?: Record<string, unknown>;
  /** A set of messages indicating the service-side state for each WorkItem whose status was reported, in the same order as the WorkItemStatus messages in the ReportWorkItemStatusRequest which resulting in this response. */
  workItemServiceStates?: ReadonlyArray<WorkItemServiceState>;
}

export const ReportWorkItemStatusResponse: Schema.Codec<ReportWorkItemStatusResponse> =
  /*@__PURE__*/ Schema.Struct({
    unifiedWorkerResponse: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    workItemServiceStates: Schema.optional(Schema.Array(WorkItemServiceState)),
  }).annotate({ identifier: "ReportWorkItemStatusResponse" });

export interface GetWorkerStacktracesResponse {
  /** Repeated as unified worker may have multiple SDK processes. */
  sdks?: ReadonlyArray<Sdk>;
}

export const GetWorkerStacktracesResponse: Schema.Codec<GetWorkerStacktracesResponse> =
  /*@__PURE__*/ Schema.Struct({
    sdks: Schema.optional(Schema.Array(Sdk)),
  }).annotate({ identifier: "GetWorkerStacktracesResponse" });

export interface RuntimeEnvironment {
  /** Optional. Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/ */
  kmsKeyName?: string;
  /** Optional. Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }. */
  additionalUserLabels?: Record<string, string>;
  /** Optional. Specifies the Streaming Engine message processing guarantees. Reduces cost and latency but might result in duplicate messages committed to storage. Designed to run simple mapping streaming ETL jobs at the lowest cost. For example, Change Data Capture (CDC) to BigQuery is a canonical use case. For more information, see [Set the pipeline streaming mode](https://cloud.google.com/dataflow/docs/guides/streaming-modes). */
  streamingMode?:
    | "STREAMING_MODE_UNSPECIFIED"
    | "STREAMING_MODE_EXACTLY_ONCE"
    | "STREAMING_MODE_AT_LEAST_ONCE"
    | (string & {});
  /** Optional. The machine type to use for the job. Defaults to the value from the template if not specified. */
  machineType?: string;
  /** Optional. Configuration for VM IPs. */
  ipConfiguration?:
    | "WORKER_IP_UNSPECIFIED"
    | "WORKER_IP_PUBLIC"
    | "WORKER_IP_PRIVATE"
    | (string & {});
  /** Optional. The initial number of Google Compute Engine instances for the job. The default value is 11. */
  numWorkers?: number;
  /** Optional. Additional experiment flags for the job, specified with the `--experiments` option. */
  additionalExperiments?: ReadonlyArray<string>;
  /** Optional. The disk size, in gigabytes, to use on each remote Compute Engine worker instance. */
  diskSizeGb?: number;
  /** Required. The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region. */
  workerRegion?: string;
  /** Optional. The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence. */
  workerZone?: string;
  /** Optional. Whether to bypass the safety checks for the job's temporary directory. Use with caution. */
  bypassTempDirValidation?: boolean;
  /** Optional. Whether to enable Streaming Engine for the job. */
  enableStreamingEngine?: boolean;
  /** Optional. The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. */
  zone?: string;
  /** Optional. Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
  network?: string;
  /** Optional. Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL. */
  subnetwork?: string;
  /** Optional. The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. The default value is 1. */
  maxWorkers?: number;
  /** Optional. Additional pipeline option flags for the job. */
  additionalPipelineOptions?: ReadonlyArray<string>;
  /** Optional. The email address of the service account to run the job as. */
  serviceAccountEmail?: string;
  /** Required. The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
  tempLocation?: string;
}

export const RuntimeEnvironment: Schema.Codec<RuntimeEnvironment> =
  /*@__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
    additionalUserLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    streamingMode: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    ipConfiguration: Schema.optional(Schema.String),
    numWorkers: Schema.optional(Schema.Number),
    additionalExperiments: Schema.optional(Schema.Array(Schema.String)),
    diskSizeGb: Schema.optional(Schema.Number),
    workerRegion: Schema.optional(Schema.String),
    workerZone: Schema.optional(Schema.String),
    bypassTempDirValidation: Schema.optional(Schema.Boolean),
    enableStreamingEngine: Schema.optional(Schema.Boolean),
    zone: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    maxWorkers: Schema.optional(Schema.Number),
    additionalPipelineOptions: Schema.optional(Schema.Array(Schema.String)),
    serviceAccountEmail: Schema.optional(Schema.String),
    tempLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "RuntimeEnvironment" });

export interface JobExecutionDetails {
  /** The stages of the job execution. */
  stages?: ReadonlyArray<StageSummary>;
  /** If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value. */
  nextPageToken?: string;
}

export const JobExecutionDetails: Schema.Codec<JobExecutionDetails> =
  /*@__PURE__*/ Schema.Struct({
    stages: Schema.optional(Schema.Array(StageSummary)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "JobExecutionDetails" });

export interface WorkerLifecycleEvent {
  /** The event being reported. */
  event?:
    | "UNKNOWN_EVENT"
    | "OS_START"
    | "CONTAINER_START"
    | "NETWORK_UP"
    | "STAGING_FILES_DOWNLOAD_START"
    | "STAGING_FILES_DOWNLOAD_FINISH"
    | "SDK_INSTALL_START"
    | "SDK_INSTALL_FINISH"
    | (string & {});
  /** Other stats that can accompany an event. E.g. { "downloaded_bytes" : "123456" } */
  metadata?: Record<string, string>;
  /** The start time of this container. All events will report this so that events can be grouped together across container/VM restarts. */
  containerStartTime?: string;
}

export const WorkerLifecycleEvent: Schema.Codec<WorkerLifecycleEvent> =
  /*@__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    containerStartTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkerLifecycleEvent" });

export interface LaunchTemplateResponse {
  /** The job that was launched, if the request was not a dry run and the job was successfully launched. */
  job?: Job;
}

export const LaunchTemplateResponse: Schema.Codec<LaunchTemplateResponse> =
  /*@__PURE__*/ Schema.Struct({
    job: Schema.optional(Job),
  }).annotate({ identifier: "LaunchTemplateResponse" });

export interface LeaseWorkItemResponse {
  /** A list of the leased WorkItems. */
  workItems?: ReadonlyArray<WorkItem>;
  /** Untranslated bag-of-bytes WorkResponse for UnifiedWorker. */
  unifiedWorkerResponse?: Record<string, unknown>;
}

export const LeaseWorkItemResponse: Schema.Codec<LeaseWorkItemResponse> =
  /*@__PURE__*/ Schema.Struct({
    workItems: Schema.optional(Schema.Array(WorkItem)),
    unifiedWorkerResponse: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "LeaseWorkItemResponse" });

export interface GetDebugConfigRequest {
  /** The internal component id for which debug configuration is requested. */
  componentId?: string;
  /** The worker id, i.e., VM hostname. */
  workerId?: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
  location?: string;
}

export const GetDebugConfigRequest: Schema.Codec<GetDebugConfigRequest> =
  /*@__PURE__*/ Schema.Struct({
    componentId: Schema.optional(Schema.String),
    workerId: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetDebugConfigRequest" });

export interface LaunchTemplateParameters {
  /** The runtime environment for the job. */
  environment?: RuntimeEnvironment;
  /** Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. */
  transformNameMapping?: Record<string, string>;
  /** The runtime parameters to pass to the job. */
  parameters?: Record<string, string>;
  /** Required. The job name to use for the created job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?` */
  jobName?: string;
  /** If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state. */
  update?: boolean;
}

export const LaunchTemplateParameters: Schema.Codec<LaunchTemplateParameters> =
  /*@__PURE__*/ Schema.Struct({
    environment: Schema.optional(RuntimeEnvironment),
    transformNameMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    jobName: Schema.optional(Schema.String),
    update: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LaunchTemplateParameters" });

export interface DataSamplingReport {
  /** Optional. Delta of bytes sampled from previous report. */
  elementsSampledBytes?: string;
  /** Optional. Delta of number of samples taken from user code exceptions from previous report. */
  exceptionsSampledCount?: string;
  /** Optional. Delta of bytes written to file from previous report. */
  bytesWrittenDelta?: string;
  /** Optional. Delta of errors counts from persisting the samples from previous report. */
  persistenceErrorsCount?: string;
  /** Optional. Delta of number of elements sampled from previous report. */
  elementsSampledCount?: string;
  /** Optional. Delta of number of PCollections sampled from previous report. */
  pcollectionsSampledCount?: string;
  /** Optional. Delta of errors counts from retrieving, or translating the samples from previous report. */
  translationErrorsCount?: string;
}

export const DataSamplingReport: Schema.Codec<DataSamplingReport> =
  /*@__PURE__*/ Schema.Struct({
    elementsSampledBytes: Schema.optional(Schema.String),
    exceptionsSampledCount: Schema.optional(Schema.String),
    bytesWrittenDelta: Schema.optional(Schema.String),
    persistenceErrorsCount: Schema.optional(Schema.String),
    elementsSampledCount: Schema.optional(Schema.String),
    pcollectionsSampledCount: Schema.optional(Schema.String),
    translationErrorsCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataSamplingReport" });

export interface DeleteSnapshotResponse {}

export const DeleteSnapshotResponse: Schema.Codec<DeleteSnapshotResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeleteSnapshotResponse",
  });

export interface CreateJobFromTemplateRequest {
  /** The runtime parameters to pass to the job. */
  parameters?: Record<string, string>;
  /** Required. The job name to use for the created job. */
  jobName?: string;
  /** Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with `gs://`. */
  gcsPath?: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. */
  location?: string;
  /** The runtime environment for the job. */
  environment?: RuntimeEnvironment;
}

export const CreateJobFromTemplateRequest: Schema.Codec<CreateJobFromTemplateRequest> =
  /*@__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    jobName: Schema.optional(Schema.String),
    gcsPath: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    environment: Schema.optional(RuntimeEnvironment),
  }).annotate({ identifier: "CreateJobFromTemplateRequest" });

export interface ListSnapshotsResponse {
  /** Returned snapshots. */
  snapshots?: ReadonlyArray<Snapshot>;
}

export const ListSnapshotsResponse: Schema.Codec<ListSnapshotsResponse> =
  /*@__PURE__*/ Schema.Struct({
    snapshots: Schema.optional(Schema.Array(Snapshot)),
  }).annotate({ identifier: "ListSnapshotsResponse" });

export interface WorkerDetails {
  /** Name of this worker */
  workerName?: string;
  /** Work items processed by this worker, sorted by time. */
  workItems?: ReadonlyArray<WorkItemDetails>;
}

export const WorkerDetails: Schema.Codec<WorkerDetails> =
  /*@__PURE__*/ Schema.Struct({
    workerName: Schema.optional(Schema.String),
    workItems: Schema.optional(Schema.Array(WorkItemDetails)),
  }).annotate({ identifier: "WorkerDetails" });

export interface ResourceUtilizationReport {
  /** Optional. GPU usage samples. */
  gpuUsage?: ReadonlyArray<GPUUsage>;
  /** Per container information. Key: container name. */
  containers?: Record<string, ResourceUtilizationReport>;
  /** Memory utilization samples. */
  memoryInfo?: ReadonlyArray<MemInfo>;
  /** CPU utilization samples. */
  cpuTime?: ReadonlyArray<CPUTime>;
}

export const ResourceUtilizationReport: Schema.Codec<ResourceUtilizationReport> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gpuUsage: Schema.optional(Schema.Array(GPUUsage)),
      containers: Schema.optional(
        Schema.Record(Schema.String, ResourceUtilizationReport),
      ),
      memoryInfo: Schema.optional(Schema.Array(MemInfo)),
      cpuTime: Schema.optional(Schema.Array(CPUTime)),
    }),
  ).annotate({
    identifier: "ResourceUtilizationReport",
  }) as any as Schema.Codec<ResourceUtilizationReport>;

export interface SendWorkerMessagesResponse {
  /** The servers response to the worker messages. */
  workerMessageResponses?: ReadonlyArray<WorkerMessageResponse>;
}

export const SendWorkerMessagesResponse: Schema.Codec<SendWorkerMessagesResponse> =
  /*@__PURE__*/ Schema.Struct({
    workerMessageResponses: Schema.optional(
      Schema.Array(WorkerMessageResponse),
    ),
  }).annotate({ identifier: "SendWorkerMessagesResponse" });

export interface WorkerMessage {
  /** The timestamp of the worker_message. */
  time?: string;
  /** System defined metrics for this worker. */
  perWorkerMetrics?: PerWorkerMetrics;
  /** Resource metrics reported by workers. */
  workerMetrics?: ResourceUtilizationReport;
  /** Thread scaling information reported by workers. */
  workerThreadScalingReport?: WorkerThreadScalingReport;
  /** Record of worker lifecycle events. */
  workerLifecycleEvent?: WorkerLifecycleEvent;
  /** A worker message code. */
  workerMessageCode?: WorkerMessageCode;
  /** Shutdown notice by workers. */
  workerShutdownNotice?: WorkerShutdownNotice;
  /** Optional. Contains metrics related to go/dataflow-data-sampling-telemetry. */
  dataSamplingReport?: DataSamplingReport;
  /** The health of a worker. */
  workerHealthReport?: WorkerHealthReport;
  /** Contains per-user worker telemetry used in streaming autoscaling. */
  streamingScalingReport?: StreamingScalingReport;
  /** Labels are used to group WorkerMessages. For example, a worker_message about a particular container might have the labels: { "JOB_ID": "2015-04-22", "WORKER_ID": "wordcount-vm-2015…" "CONTAINER_TYPE": "worker", "CONTAINER_ID": "ac1234def"} Label tags typically correspond to Label enum values. However, for ease of development other strings can be used as tags. LABEL_UNSPECIFIED should not be used here. */
  labels?: Record<string, string>;
}

export const WorkerMessage: Schema.Codec<WorkerMessage> =
  /*@__PURE__*/ Schema.Struct({
    time: Schema.optional(Schema.String),
    perWorkerMetrics: Schema.optional(PerWorkerMetrics),
    workerMetrics: Schema.optional(ResourceUtilizationReport),
    workerThreadScalingReport: Schema.optional(WorkerThreadScalingReport),
    workerLifecycleEvent: Schema.optional(WorkerLifecycleEvent),
    workerMessageCode: Schema.optional(WorkerMessageCode),
    workerShutdownNotice: Schema.optional(WorkerShutdownNotice),
    dataSamplingReport: Schema.optional(DataSamplingReport),
    workerHealthReport: Schema.optional(WorkerHealthReport),
    streamingScalingReport: Schema.optional(StreamingScalingReport),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "WorkerMessage" });

export interface SendDebugCaptureRequest {
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
  location?: string;
  /** The encoded debug information. */
  data?: string;
  /** The worker id, i.e., VM hostname. */
  workerId?: string;
  /** The internal component id for which debug information is sent. */
  componentId?: string;
  /** Format for the data field above (id=5). */
  dataFormat?:
    | "DATA_FORMAT_UNSPECIFIED"
    | "RAW"
    | "JSON"
    | "ZLIB"
    | "BROTLI"
    | (string & {});
}

export const SendDebugCaptureRequest: Schema.Codec<SendDebugCaptureRequest> =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
    workerId: Schema.optional(Schema.String),
    componentId: Schema.optional(Schema.String),
    dataFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "SendDebugCaptureRequest" });

export interface SendWorkerMessagesRequest {
  /** The WorkerMessages to send. */
  workerMessages?: ReadonlyArray<WorkerMessage>;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job. */
  location?: string;
}

export const SendWorkerMessagesRequest: Schema.Codec<SendWorkerMessagesRequest> =
  /*@__PURE__*/ Schema.Struct({
    workerMessages: Schema.optional(Schema.Array(WorkerMessage)),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "SendWorkerMessagesRequest" });

export interface StageExecutionDetails {
  /** Workers that have done work on the stage. */
  workers?: ReadonlyArray<WorkerDetails>;
  /** If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value. */
  nextPageToken?: string;
}

export const StageExecutionDetails: Schema.Codec<StageExecutionDetails> =
  /*@__PURE__*/ Schema.Struct({
    workers: Schema.optional(Schema.Array(WorkerDetails)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "StageExecutionDetails" });

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

export interface DeleteSnapshotsProjectsRequest {
  /** The ID of the Cloud Platform project that the snapshot belongs to. */
  projectId: string;
  /** The location that contains this snapshot. */
  location?: string;
  /** The ID of the snapshot. */
  snapshotId?: string;
}

export const DeleteSnapshotsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.optional(Schema.String).pipe(T.HttpQuery("location")),
    snapshotId: Schema.optional(Schema.String).pipe(T.HttpQuery("snapshotId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1b3/projects/{projectId}/snapshots" }),
    svc,
  ) as unknown as Schema.Codec<DeleteSnapshotsProjectsRequest>;

export type DeleteSnapshotsProjectsResponse = DeleteSnapshotResponse;
export const DeleteSnapshotsProjectsResponse =
  /*@__PURE__*/ DeleteSnapshotResponse;

export type DeleteSnapshotsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a snapshot. */
export const deleteSnapshotsProjects: API.OperationMethod<
  DeleteSnapshotsProjectsRequest,
  DeleteSnapshotsProjectsResponse,
  DeleteSnapshotsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSnapshotsProjectsRequest,
  output: DeleteSnapshotsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface WorkerMessagesProjectsRequest {
  /** The project to send the WorkerMessages to. */
  projectId: string;
  /** Request body */
  body?: SendWorkerMessagesRequest;
}

export const WorkerMessagesProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(SendWorkerMessagesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/WorkerMessages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<WorkerMessagesProjectsRequest>;

export type WorkerMessagesProjectsResponse = SendWorkerMessagesResponse;
export const WorkerMessagesProjectsResponse =
  /*@__PURE__*/ SendWorkerMessagesResponse;

export type WorkerMessagesProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Send a worker_message to the service. */
export const workerMessagesProjects: API.OperationMethod<
  WorkerMessagesProjectsRequest,
  WorkerMessagesProjectsResponse,
  WorkerMessagesProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: WorkerMessagesProjectsRequest,
  output: WorkerMessagesProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsSnapshotsRequest {
  /** If specified, list snapshots created from this job. */
  jobId?: string;
  /** The project ID to list snapshots for. */
  projectId: string;
  /** The location to list snapshots in. */
  location?: string;
}

export const ListProjectsSnapshotsRequest =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.optional(Schema.String).pipe(T.HttpQuery("jobId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.optional(Schema.String).pipe(T.HttpQuery("location")),
  }).pipe(
    T.Http({ method: "GET", path: "v1b3/projects/{projectId}/snapshots" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsSnapshotsRequest>;

export type ListProjectsSnapshotsResponse = ListSnapshotsResponse;
export const ListProjectsSnapshotsResponse =
  /*@__PURE__*/ ListSnapshotsResponse;

export type ListProjectsSnapshotsError = DefaultErrors | NotFound | Forbidden;

/** Lists snapshots. */
export const listProjectsSnapshots: API.OperationMethod<
  ListProjectsSnapshotsRequest,
  ListProjectsSnapshotsResponse,
  ListProjectsSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListProjectsSnapshotsRequest,
  output: ListProjectsSnapshotsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsSnapshotsRequest {
  /** The ID of the Cloud Platform project that the snapshot belongs to. */
  projectId: string;
  /** The location that contains this snapshot. */
  location?: string;
  /** The ID of the snapshot. */
  snapshotId: string;
}

export const GetProjectsSnapshotsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.optional(Schema.String).pipe(T.HttpQuery("location")),
    snapshotId: Schema.String.pipe(T.HttpPath("snapshotId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1b3/projects/{projectId}/snapshots/{snapshotId}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsSnapshotsRequest>;

export type GetProjectsSnapshotsResponse = Snapshot;
export const GetProjectsSnapshotsResponse = /*@__PURE__*/ Snapshot;

export type GetProjectsSnapshotsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a snapshot. */
export const getProjectsSnapshots: API.OperationMethod<
  GetProjectsSnapshotsRequest,
  GetProjectsSnapshotsResponse,
  GetProjectsSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsSnapshotsRequest,
  output: GetProjectsSnapshotsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AggregatedProjectsJobsRequest {
  /** Optional. The job name. */
  name?: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. */
  location?: string;
  /** Set this to the 'next_page_token' field of a previous response to request additional results in a long list. */
  pageToken?: string;
  /** The kind of filter to use. */
  filter?: "UNKNOWN" | "ALL" | "TERMINATED" | "ACTIVE" | (string & {});
  /** Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews. */
  view?:
    | "JOB_VIEW_UNKNOWN"
    | "JOB_VIEW_SUMMARY"
    | "JOB_VIEW_ALL"
    | "JOB_VIEW_DESCRIPTION"
    | (string & {});
  /** The project which owns the jobs. */
  projectId: string;
  /** If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit. */
  pageSize?: number;
}

export const AggregatedProjectsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    location: Schema.optional(Schema.String).pipe(T.HttpQuery("location")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1b3/projects/{projectId}/jobs:aggregated",
    }),
    svc,
  ) as unknown as Schema.Codec<AggregatedProjectsJobsRequest>;

export type AggregatedProjectsJobsResponse = ListJobsResponse;
export const AggregatedProjectsJobsResponse = /*@__PURE__*/ ListJobsResponse;

export type AggregatedProjectsJobsError = DefaultErrors | NotFound | Forbidden;

/** List the jobs of a project across all regions. **Note:** This method doesn't support filtering the list of jobs by name. */
export const aggregatedProjectsJobs: API.PaginatedOperationMethod<
  AggregatedProjectsJobsRequest,
  AggregatedProjectsJobsResponse,
  AggregatedProjectsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: AggregatedProjectsJobsRequest,
  output: AggregatedProjectsJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsJobsRequest {
  /** The ID of the Cloud Platform project that the job belongs to. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. */
  location?: string;
  /** The level of information requested in response. */
  view?:
    | "JOB_VIEW_UNKNOWN"
    | "JOB_VIEW_SUMMARY"
    | "JOB_VIEW_ALL"
    | "JOB_VIEW_DESCRIPTION"
    | (string & {});
  /** The job ID. */
  jobId: string;
}

export const GetProjectsJobsRequest = /*@__PURE__*/ Schema.Struct({
  projectId: Schema.String.pipe(T.HttpPath("projectId")),
  location: Schema.optional(Schema.String).pipe(T.HttpQuery("location")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  jobId: Schema.String.pipe(T.HttpPath("jobId")),
}).pipe(
  T.Http({ method: "GET", path: "v1b3/projects/{projectId}/jobs/{jobId}" }),
  svc,
) as unknown as Schema.Codec<GetProjectsJobsRequest>;

export type GetProjectsJobsResponse = Job;
export const GetProjectsJobsResponse = /*@__PURE__*/ Job;

export type GetProjectsJobsError = DefaultErrors | NotFound | Forbidden;

/** Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`. */
export const getProjectsJobs: API.OperationMethod<
  GetProjectsJobsRequest,
  GetProjectsJobsResponse,
  GetProjectsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsJobsRequest,
  output: GetProjectsJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateProjectsJobsRequest {
  /** The ID of the Cloud Platform project that the job belongs to. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. */
  location?: string;
  /** The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, an error will be returned as we cannot update both state and mask. */
  updateMask?: string;
  /** The job ID. */
  jobId: string;
  /** Request body */
  body?: Job;
}

export const UpdateProjectsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.optional(Schema.String).pipe(T.HttpQuery("location")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    body: Schema.optional(Job).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "v1b3/projects/{projectId}/jobs/{jobId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateProjectsJobsRequest>;

export type UpdateProjectsJobsResponse = Job;
export const UpdateProjectsJobsResponse = /*@__PURE__*/ Job;

export type UpdateProjectsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`. */
export const updateProjectsJobs: API.OperationMethod<
  UpdateProjectsJobsRequest,
  UpdateProjectsJobsResponse,
  UpdateProjectsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateProjectsJobsRequest,
  output: UpdateProjectsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsJobsRequest {
  /** The kind of filter to use. */
  filter?: "UNKNOWN" | "ALL" | "TERMINATED" | "ACTIVE" | (string & {});
  /** Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews. */
  view?:
    | "JOB_VIEW_UNKNOWN"
    | "JOB_VIEW_SUMMARY"
    | "JOB_VIEW_ALL"
    | "JOB_VIEW_DESCRIPTION"
    | (string & {});
  /** The project which owns the jobs. */
  projectId: string;
  /** If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit. */
  pageSize?: number;
  /** Optional. The job name. */
  name?: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. */
  location?: string;
  /** Set this to the 'next_page_token' field of a previous response to request additional results in a long list. */
  pageToken?: string;
}

export const ListProjectsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    location: Schema.optional(Schema.String).pipe(T.HttpQuery("location")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1b3/projects/{projectId}/jobs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsJobsRequest>;

export type ListProjectsJobsResponse = ListJobsResponse;
export const ListProjectsJobsResponse = /*@__PURE__*/ ListJobsResponse;

export type ListProjectsJobsError = DefaultErrors | NotFound | Forbidden;

/** List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`. */
export const listProjectsJobs: API.PaginatedOperationMethod<
  ListProjectsJobsRequest,
  ListProjectsJobsResponse,
  ListProjectsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsJobsRequest,
  output: ListProjectsJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SnapshotProjectsJobsRequest {
  /** The project which owns the job to be snapshotted. */
  projectId: string;
  /** The job to be snapshotted. */
  jobId: string;
  /** Request body */
  body?: SnapshotJobRequest;
}

export const SnapshotProjectsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    body: Schema.optional(SnapshotJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/jobs/{jobId}:snapshot",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SnapshotProjectsJobsRequest>;

export type SnapshotProjectsJobsResponse = Snapshot;
export const SnapshotProjectsJobsResponse = /*@__PURE__*/ Snapshot;

export type SnapshotProjectsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Snapshot the state of a streaming job. */
export const snapshotProjectsJobs: API.OperationMethod<
  SnapshotProjectsJobsRequest,
  SnapshotProjectsJobsResponse,
  SnapshotProjectsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SnapshotProjectsJobsRequest,
  output: SnapshotProjectsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsJobsRequest {
  /** The level of information requested in response. */
  view?:
    | "JOB_VIEW_UNKNOWN"
    | "JOB_VIEW_SUMMARY"
    | "JOB_VIEW_ALL"
    | "JOB_VIEW_DESCRIPTION"
    | (string & {});
  /** The ID of the Cloud Platform project that the job belongs to. */
  projectId: string;
  /** Deprecated. This field is now in the Job message. */
  replaceJobId?: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. */
  location?: string;
  /** Request body */
  body?: Job;
}

export const CreateProjectsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    replaceJobId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("replaceJobId"),
    ),
    location: Schema.optional(Schema.String).pipe(T.HttpQuery("location")),
    body: Schema.optional(Job).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/jobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsJobsRequest>;

export type CreateProjectsJobsResponse = Job;
export const CreateProjectsJobsResponse = /*@__PURE__*/ Job;

export type CreateProjectsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API. */
export const createProjectsJobs: API.OperationMethod<
  CreateProjectsJobsRequest,
  CreateProjectsJobsResponse,
  CreateProjectsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsJobsRequest,
  output: CreateProjectsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetMetricsProjectsJobsRequest {
  /** A project id. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
  location?: string;
  /** The job to get metrics for. */
  jobId: string;
  /** Return only metric data that has changed since this time. Default is to return all information about all metrics for the job. */
  startTime?: string;
}

export const GetMetricsProjectsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.optional(Schema.String).pipe(T.HttpQuery("location")),
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1b3/projects/{projectId}/jobs/{jobId}/metrics",
    }),
    svc,
  ) as unknown as Schema.Codec<GetMetricsProjectsJobsRequest>;

export type GetMetricsProjectsJobsResponse = JobMetrics;
export const GetMetricsProjectsJobsResponse = /*@__PURE__*/ JobMetrics;

export type GetMetricsProjectsJobsError = DefaultErrors | NotFound | Forbidden;

/** Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`. */
export const getMetricsProjectsJobs: API.OperationMethod<
  GetMetricsProjectsJobsRequest,
  GetMetricsProjectsJobsResponse,
  GetMetricsProjectsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMetricsProjectsJobsRequest,
  output: GetMetricsProjectsJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetConfigProjectsJobsDebugRequest {
  /** The project id. */
  projectId: string;
  /** The job id. */
  jobId: string;
  /** Request body */
  body?: GetDebugConfigRequest;
}

export const GetConfigProjectsJobsDebugRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    body: Schema.optional(GetDebugConfigRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/jobs/{jobId}/debug/getConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GetConfigProjectsJobsDebugRequest>;

export type GetConfigProjectsJobsDebugResponse = GetDebugConfigResponse;
export const GetConfigProjectsJobsDebugResponse =
  /*@__PURE__*/ GetDebugConfigResponse;

export type GetConfigProjectsJobsDebugError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Get encoded debug configuration for component. Not cacheable. */
export const getConfigProjectsJobsDebug: API.OperationMethod<
  GetConfigProjectsJobsDebugRequest,
  GetConfigProjectsJobsDebugResponse,
  GetConfigProjectsJobsDebugError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConfigProjectsJobsDebugRequest,
  output: GetConfigProjectsJobsDebugResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SendCaptureProjectsJobsDebugRequest {
  /** The project id. */
  projectId: string;
  /** The job id. */
  jobId: string;
  /** Request body */
  body?: SendDebugCaptureRequest;
}

export const SendCaptureProjectsJobsDebugRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    body: Schema.optional(SendDebugCaptureRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/jobs/{jobId}/debug/sendCapture",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SendCaptureProjectsJobsDebugRequest>;

export type SendCaptureProjectsJobsDebugResponse = SendDebugCaptureResponse;
export const SendCaptureProjectsJobsDebugResponse =
  /*@__PURE__*/ SendDebugCaptureResponse;

export type SendCaptureProjectsJobsDebugError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Send encoded debug capture data for component. */
export const sendCaptureProjectsJobsDebug: API.OperationMethod<
  SendCaptureProjectsJobsDebugRequest,
  SendCaptureProjectsJobsDebugResponse,
  SendCaptureProjectsJobsDebugError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendCaptureProjectsJobsDebugRequest,
  output: SendCaptureProjectsJobsDebugResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReportStatusProjectsJobsWorkItemsRequest {
  /** The project which owns the WorkItem's job. */
  projectId: string;
  /** The job which the WorkItem is part of. */
  jobId: string;
  /** Request body */
  body?: ReportWorkItemStatusRequest;
}

export const ReportStatusProjectsJobsWorkItemsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    body: Schema.optional(ReportWorkItemStatusRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ReportStatusProjectsJobsWorkItemsRequest>;

export type ReportStatusProjectsJobsWorkItemsResponse =
  ReportWorkItemStatusResponse;
export const ReportStatusProjectsJobsWorkItemsResponse =
  /*@__PURE__*/ ReportWorkItemStatusResponse;

export type ReportStatusProjectsJobsWorkItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reports the status of dataflow WorkItems leased by a worker. */
export const reportStatusProjectsJobsWorkItems: API.OperationMethod<
  ReportStatusProjectsJobsWorkItemsRequest,
  ReportStatusProjectsJobsWorkItemsResponse,
  ReportStatusProjectsJobsWorkItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ReportStatusProjectsJobsWorkItemsRequest,
  output: ReportStatusProjectsJobsWorkItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LeaseProjectsJobsWorkItemsRequest {
  /** Identifies the project this worker belongs to. */
  projectId: string;
  /** Identifies the workflow job this worker belongs to. */
  jobId: string;
  /** Request body */
  body?: LeaseWorkItemRequest;
}

export const LeaseProjectsJobsWorkItemsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    body: Schema.optional(LeaseWorkItemRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<LeaseProjectsJobsWorkItemsRequest>;

export type LeaseProjectsJobsWorkItemsResponse = LeaseWorkItemResponse;
export const LeaseProjectsJobsWorkItemsResponse =
  /*@__PURE__*/ LeaseWorkItemResponse;

export type LeaseProjectsJobsWorkItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Leases a dataflow WorkItem to run. */
export const leaseProjectsJobsWorkItems: API.OperationMethod<
  LeaseProjectsJobsWorkItemsRequest,
  LeaseProjectsJobsWorkItemsResponse,
  LeaseProjectsJobsWorkItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LeaseProjectsJobsWorkItemsRequest,
  output: LeaseProjectsJobsWorkItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsJobsMessagesRequest {
  /** The job to get messages about. */
  jobId: string;
  /** Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available). */
  endTime?: string;
  /** If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned. */
  pageToken?: string;
  /** If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages). */
  startTime?: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
  location?: string;
  /** Filter to only get messages with importance >= level */
  minimumImportance?:
    | "JOB_MESSAGE_IMPORTANCE_UNKNOWN"
    | "JOB_MESSAGE_DEBUG"
    | "JOB_MESSAGE_DETAILED"
    | "JOB_MESSAGE_BASIC"
    | "JOB_MESSAGE_WARNING"
    | "JOB_MESSAGE_ERROR"
    | (string & {});
  /** A project id. */
  projectId: string;
  /** If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results. */
  pageSize?: number;
}

export const ListProjectsJobsMessagesRequest =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    endTime: Schema.optional(Schema.String).pipe(T.HttpQuery("endTime")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    location: Schema.optional(Schema.String).pipe(T.HttpQuery("location")),
    minimumImportance: Schema.optional(Schema.String).pipe(
      T.HttpQuery("minimumImportance"),
    ),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1b3/projects/{projectId}/jobs/{jobId}/messages",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsJobsMessagesRequest>;

export type ListProjectsJobsMessagesResponse = ListJobMessagesResponse;
export const ListProjectsJobsMessagesResponse =
  /*@__PURE__*/ ListJobMessagesResponse;

export type ListProjectsJobsMessagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`. */
export const listProjectsJobsMessages: API.PaginatedOperationMethod<
  ListProjectsJobsMessagesRequest,
  ListProjectsJobsMessagesResponse,
  ListProjectsJobsMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsJobsMessagesRequest,
  output: ListProjectsJobsMessagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsTemplatesRequest {
  /** Required. The ID of the Cloud Platform project that the job belongs to. */
  projectId: string;
  /** Request body */
  body?: CreateJobFromTemplateRequest;
}

export const CreateProjectsTemplatesRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(CreateJobFromTemplateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/templates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsTemplatesRequest>;

export type CreateProjectsTemplatesResponse = Job;
export const CreateProjectsTemplatesResponse = /*@__PURE__*/ Job;

export type CreateProjectsTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API. To create a job, we recommend using `projects.locations.templates.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.create` is not recommended, because your job will always start in `us-central1`. */
export const createProjectsTemplates: API.OperationMethod<
  CreateProjectsTemplatesRequest,
  CreateProjectsTemplatesResponse,
  CreateProjectsTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsTemplatesRequest,
  output: CreateProjectsTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsTemplatesRequest {
  /** The view to retrieve. Defaults to METADATA_ONLY. */
  view?: "METADATA_ONLY" | (string & {});
  /** Required. The ID of the Cloud Platform project that the job belongs to. */
  projectId: string;
  /** Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'. */
  gcsPath?: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. */
  location?: string;
}

export const GetProjectsTemplatesRequest =
  /*@__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    gcsPath: Schema.optional(Schema.String).pipe(T.HttpQuery("gcsPath")),
    location: Schema.optional(Schema.String).pipe(T.HttpQuery("location")),
  }).pipe(
    T.Http({ method: "GET", path: "v1b3/projects/{projectId}/templates:get" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsTemplatesRequest>;

export type GetProjectsTemplatesResponse = GetTemplateResponse;
export const GetProjectsTemplatesResponse = /*@__PURE__*/ GetTemplateResponse;

export type GetProjectsTemplatesError = DefaultErrors | NotFound | Forbidden;

/** Get the template associated with a template. To get the template, we recommend using `projects.locations.templates.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.get` is not recommended, because only templates that are running in `us-central1` are retrieved. */
export const getProjectsTemplates: API.OperationMethod<
  GetProjectsTemplatesRequest,
  GetProjectsTemplatesResponse,
  GetProjectsTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsTemplatesRequest,
  output: GetProjectsTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface LaunchProjectsTemplatesRequest {
  /** Required. The ID of the Cloud Platform project that the job belongs to. */
  projectId: string;
  /** If true, the request is validated but not actually executed. Defaults to false. */
  validateOnly?: boolean;
  /** Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`. */
  "dynamicTemplate.stagingLocation"?: string;
  /** Path to the dynamic template specification file on Cloud Storage. The file must be a JSON serialized `DynamicTemplateFileSpec` object. */
  "dynamicTemplate.gcsPath"?: string;
  /** A Cloud Storage path to the template to use to create the job. Must be valid Cloud Storage URL, beginning with `gs://`. */
  gcsPath?: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. */
  location?: string;
  /** Request body */
  body?: LaunchTemplateParameters;
}

export const LaunchProjectsTemplatesRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    "dynamicTemplate.stagingLocation": Schema.optional(Schema.String).pipe(
      T.HttpQuery("dynamicTemplate.stagingLocation"),
    ),
    "dynamicTemplate.gcsPath": Schema.optional(Schema.String).pipe(
      T.HttpQuery("dynamicTemplate.gcsPath"),
    ),
    gcsPath: Schema.optional(Schema.String).pipe(T.HttpQuery("gcsPath")),
    location: Schema.optional(Schema.String).pipe(T.HttpQuery("location")),
    body: Schema.optional(LaunchTemplateParameters).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/templates:launch",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<LaunchProjectsTemplatesRequest>;

export type LaunchProjectsTemplatesResponse = LaunchTemplateResponse;
export const LaunchProjectsTemplatesResponse =
  /*@__PURE__*/ LaunchTemplateResponse;

export type LaunchProjectsTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Launches a template. To launch a template, we recommend using `projects.locations.templates.launch` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.launch` is not recommended, because jobs launched from the template will always start in `us-central1`. */
export const launchProjectsTemplates: API.OperationMethod<
  LaunchProjectsTemplatesRequest,
  LaunchProjectsTemplatesResponse,
  LaunchProjectsTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LaunchProjectsTemplatesRequest,
  output: LaunchProjectsTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface WorkerMessagesProjectsLocationsRequest {
  /** The project to send the WorkerMessages to. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job. */
  location: string;
  /** Request body */
  body?: SendWorkerMessagesRequest;
}

export const WorkerMessagesProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(SendWorkerMessagesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/locations/{location}/WorkerMessages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<WorkerMessagesProjectsLocationsRequest>;

export type WorkerMessagesProjectsLocationsResponse =
  SendWorkerMessagesResponse;
export const WorkerMessagesProjectsLocationsResponse =
  /*@__PURE__*/ SendWorkerMessagesResponse;

export type WorkerMessagesProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Send a worker_message to the service. */
export const workerMessagesProjectsLocations: API.OperationMethod<
  WorkerMessagesProjectsLocationsRequest,
  WorkerMessagesProjectsLocationsResponse,
  WorkerMessagesProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: WorkerMessagesProjectsLocationsRequest,
  output: WorkerMessagesProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSnapshotsRequest {
  /** The ID of the snapshot. */
  snapshotId: string;
  /** The ID of the Cloud Platform project that the snapshot belongs to. */
  projectId: string;
  /** The location that contains this snapshot. */
  location: string;
}

export const GetProjectsLocationsSnapshotsRequest =
  /*@__PURE__*/ Schema.Struct({
    snapshotId: Schema.String.pipe(T.HttpPath("snapshotId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsSnapshotsRequest>;

export type GetProjectsLocationsSnapshotsResponse = Snapshot;
export const GetProjectsLocationsSnapshotsResponse = /*@__PURE__*/ Snapshot;

export type GetProjectsLocationsSnapshotsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a snapshot. */
export const getProjectsLocationsSnapshots: API.OperationMethod<
  GetProjectsLocationsSnapshotsRequest,
  GetProjectsLocationsSnapshotsResponse,
  GetProjectsLocationsSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSnapshotsRequest,
  output: GetProjectsLocationsSnapshotsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSnapshotsRequest {
  /** The ID of the snapshot. */
  snapshotId: string;
  /** The ID of the Cloud Platform project that the snapshot belongs to. */
  projectId: string;
  /** The location that contains this snapshot. */
  location: string;
}

export const DeleteProjectsLocationsSnapshotsRequest =
  /*@__PURE__*/ Schema.Struct({
    snapshotId: Schema.String.pipe(T.HttpPath("snapshotId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}",
    }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsSnapshotsRequest>;

export type DeleteProjectsLocationsSnapshotsResponse = DeleteSnapshotResponse;
export const DeleteProjectsLocationsSnapshotsResponse =
  /*@__PURE__*/ DeleteSnapshotResponse;

export type DeleteProjectsLocationsSnapshotsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a snapshot. */
export const deleteProjectsLocationsSnapshots: API.OperationMethod<
  DeleteProjectsLocationsSnapshotsRequest,
  DeleteProjectsLocationsSnapshotsResponse,
  DeleteProjectsLocationsSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSnapshotsRequest,
  output: DeleteProjectsLocationsSnapshotsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSnapshotsRequest {
  /** If specified, list snapshots created from this job. */
  jobId?: string;
  /** The project ID to list snapshots for. */
  projectId: string;
  /** The location to list snapshots in. */
  location: string;
}

export const ListProjectsLocationsSnapshotsRequest =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.optional(Schema.String).pipe(T.HttpQuery("jobId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1b3/projects/{projectId}/locations/{location}/snapshots",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsSnapshotsRequest>;

export type ListProjectsLocationsSnapshotsResponse = ListSnapshotsResponse;
export const ListProjectsLocationsSnapshotsResponse =
  /*@__PURE__*/ ListSnapshotsResponse;

export type ListProjectsLocationsSnapshotsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists snapshots. */
export const listProjectsLocationsSnapshots: API.OperationMethod<
  ListProjectsLocationsSnapshotsRequest,
  ListProjectsLocationsSnapshotsResponse,
  ListProjectsLocationsSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsSnapshotsRequest,
  output: ListProjectsLocationsSnapshotsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsTemplatesRequest {
  /** Required. The ID of the Cloud Platform project that the job belongs to. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. */
  location: string;
  /** Request body */
  body?: CreateJobFromTemplateRequest;
}

export const CreateProjectsLocationsTemplatesRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(CreateJobFromTemplateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/locations/{location}/templates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsTemplatesRequest>;

export type CreateProjectsLocationsTemplatesResponse = Job;
export const CreateProjectsLocationsTemplatesResponse = /*@__PURE__*/ Job;

export type CreateProjectsLocationsTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API. To create a job, we recommend using `projects.locations.templates.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.create` is not recommended, because your job will always start in `us-central1`. */
export const createProjectsLocationsTemplates: API.OperationMethod<
  CreateProjectsLocationsTemplatesRequest,
  CreateProjectsLocationsTemplatesResponse,
  CreateProjectsLocationsTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTemplatesRequest,
  output: CreateProjectsLocationsTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsTemplatesRequest {
  /** Required. The ID of the Cloud Platform project that the job belongs to. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. */
  location: string;
  /** Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'. */
  gcsPath?: string;
  /** The view to retrieve. Defaults to METADATA_ONLY. */
  view?: "METADATA_ONLY" | (string & {});
}

export const GetProjectsLocationsTemplatesRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
    gcsPath: Schema.optional(Schema.String).pipe(T.HttpQuery("gcsPath")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1b3/projects/{projectId}/locations/{location}/templates:get",
    }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsTemplatesRequest>;

export type GetProjectsLocationsTemplatesResponse = GetTemplateResponse;
export const GetProjectsLocationsTemplatesResponse =
  /*@__PURE__*/ GetTemplateResponse;

export type GetProjectsLocationsTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the template associated with a template. To get the template, we recommend using `projects.locations.templates.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.get` is not recommended, because only templates that are running in `us-central1` are retrieved. */
export const getProjectsLocationsTemplates: API.OperationMethod<
  GetProjectsLocationsTemplatesRequest,
  GetProjectsLocationsTemplatesResponse,
  GetProjectsLocationsTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTemplatesRequest,
  output: GetProjectsLocationsTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface LaunchProjectsLocationsTemplatesRequest {
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. */
  location: string;
  /** A Cloud Storage path to the template to use to create the job. Must be valid Cloud Storage URL, beginning with `gs://`. */
  gcsPath?: string;
  /** Required. The ID of the Cloud Platform project that the job belongs to. */
  projectId: string;
  /** If true, the request is validated but not actually executed. Defaults to false. */
  validateOnly?: boolean;
  /** Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`. */
  "dynamicTemplate.stagingLocation"?: string;
  /** Path to the dynamic template specification file on Cloud Storage. The file must be a JSON serialized `DynamicTemplateFileSpec` object. */
  "dynamicTemplate.gcsPath"?: string;
  /** Request body */
  body?: LaunchTemplateParameters;
}

export const LaunchProjectsLocationsTemplatesRequest =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.HttpPath("location")),
    gcsPath: Schema.optional(Schema.String).pipe(T.HttpQuery("gcsPath")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    "dynamicTemplate.stagingLocation": Schema.optional(Schema.String).pipe(
      T.HttpQuery("dynamicTemplate.stagingLocation"),
    ),
    "dynamicTemplate.gcsPath": Schema.optional(Schema.String).pipe(
      T.HttpQuery("dynamicTemplate.gcsPath"),
    ),
    body: Schema.optional(LaunchTemplateParameters).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/locations/{location}/templates:launch",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<LaunchProjectsLocationsTemplatesRequest>;

export type LaunchProjectsLocationsTemplatesResponse = LaunchTemplateResponse;
export const LaunchProjectsLocationsTemplatesResponse =
  /*@__PURE__*/ LaunchTemplateResponse;

export type LaunchProjectsLocationsTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Launches a template. To launch a template, we recommend using `projects.locations.templates.launch` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.launch` is not recommended, because jobs launched from the template will always start in `us-central1`. */
export const launchProjectsLocationsTemplates: API.OperationMethod<
  LaunchProjectsLocationsTemplatesRequest,
  LaunchProjectsLocationsTemplatesResponse,
  LaunchProjectsLocationsTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LaunchProjectsLocationsTemplatesRequest,
  output: LaunchProjectsLocationsTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsJobsRequest {
  /** Set this to the 'next_page_token' field of a previous response to request additional results in a long list. */
  pageToken?: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. */
  location: string;
  /** Optional. The job name. */
  name?: string;
  /** The project which owns the jobs. */
  projectId: string;
  /** If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit. */
  pageSize?: number;
  /** The kind of filter to use. */
  filter?: "UNKNOWN" | "ALL" | "TERMINATED" | "ACTIVE" | (string & {});
  /** Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews. */
  view?:
    | "JOB_VIEW_UNKNOWN"
    | "JOB_VIEW_SUMMARY"
    | "JOB_VIEW_ALL"
    | "JOB_VIEW_DESCRIPTION"
    | (string & {});
}

export const ListProjectsLocationsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    location: Schema.String.pipe(T.HttpPath("location")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsJobsRequest>;

export type ListProjectsLocationsJobsResponse = ListJobsResponse;
export const ListProjectsLocationsJobsResponse = /*@__PURE__*/ ListJobsResponse;

export type ListProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`. */
export const listProjectsLocationsJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsJobsRequest,
  ListProjectsLocationsJobsResponse,
  ListProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobsRequest,
  output: ListProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsJobsRequest {
  /** The job ID. */
  jobId: string;
  /** The level of information requested in response. */
  view?:
    | "JOB_VIEW_UNKNOWN"
    | "JOB_VIEW_SUMMARY"
    | "JOB_VIEW_ALL"
    | "JOB_VIEW_DESCRIPTION"
    | (string & {});
  /** The ID of the Cloud Platform project that the job belongs to. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. */
  location: string;
}

export const GetProjectsLocationsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsJobsRequest>;

export type GetProjectsLocationsJobsResponse = Job;
export const GetProjectsLocationsJobsResponse = /*@__PURE__*/ Job;

export type GetProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`. */
export const getProjectsLocationsJobs: API.OperationMethod<
  GetProjectsLocationsJobsRequest,
  GetProjectsLocationsJobsResponse,
  GetProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobsRequest,
  output: GetProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateProjectsLocationsJobsRequest {
  /** The job ID. */
  jobId: string;
  /** The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, an error will be returned as we cannot update both state and mask. */
  updateMask?: string;
  /** The ID of the Cloud Platform project that the job belongs to. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. */
  location: string;
  /** Request body */
  body?: Job;
}

export const UpdateProjectsLocationsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(Job).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateProjectsLocationsJobsRequest>;

export type UpdateProjectsLocationsJobsResponse = Job;
export const UpdateProjectsLocationsJobsResponse = /*@__PURE__*/ Job;

export type UpdateProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`. */
export const updateProjectsLocationsJobs: API.OperationMethod<
  UpdateProjectsLocationsJobsRequest,
  UpdateProjectsLocationsJobsResponse,
  UpdateProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateProjectsLocationsJobsRequest,
  output: UpdateProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsJobsRequest {
  /** The ID of the Cloud Platform project that the job belongs to. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. */
  location: string;
  /** Deprecated. This field is now in the Job message. */
  replaceJobId?: string;
  /** The level of information requested in response. */
  view?:
    | "JOB_VIEW_UNKNOWN"
    | "JOB_VIEW_SUMMARY"
    | "JOB_VIEW_ALL"
    | "JOB_VIEW_DESCRIPTION"
    | (string & {});
  /** Request body */
  body?: Job;
}

export const CreateProjectsLocationsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
    replaceJobId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("replaceJobId"),
    ),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    body: Schema.optional(Job).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsJobsRequest>;

export type CreateProjectsLocationsJobsResponse = Job;
export const CreateProjectsLocationsJobsResponse = /*@__PURE__*/ Job;

export type CreateProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API. */
export const createProjectsLocationsJobs: API.OperationMethod<
  CreateProjectsLocationsJobsRequest,
  CreateProjectsLocationsJobsResponse,
  CreateProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsJobsRequest,
  output: CreateProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetMetricsProjectsLocationsJobsRequest {
  /** The job to get metrics for. */
  jobId: string;
  /** Return only metric data that has changed since this time. Default is to return all information about all metrics for the job. */
  startTime?: string;
  /** A project id. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
  location: string;
}

export const GetMetricsProjectsLocationsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics",
    }),
    svc,
  ) as unknown as Schema.Codec<GetMetricsProjectsLocationsJobsRequest>;

export type GetMetricsProjectsLocationsJobsResponse = JobMetrics;
export const GetMetricsProjectsLocationsJobsResponse = /*@__PURE__*/ JobMetrics;

export type GetMetricsProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`. */
export const getMetricsProjectsLocationsJobs: API.OperationMethod<
  GetMetricsProjectsLocationsJobsRequest,
  GetMetricsProjectsLocationsJobsResponse,
  GetMetricsProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMetricsProjectsLocationsJobsRequest,
  output: GetMetricsProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetExecutionDetailsProjectsLocationsJobsRequest {
  /** A project id. */
  projectId: string;
  /** If specified, determines the maximum number of stages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results. */
  pageSize?: number;
  /** The job to get execution details for. */
  jobId: string;
  /** If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned. */
  pageToken?: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
  location: string;
}

export const GetExecutionDetailsProjectsLocationsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    location: Schema.String.pipe(T.HttpPath("location")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/executionDetails",
    }),
    svc,
  ) as unknown as Schema.Codec<GetExecutionDetailsProjectsLocationsJobsRequest>;

export type GetExecutionDetailsProjectsLocationsJobsResponse =
  JobExecutionDetails;
export const GetExecutionDetailsProjectsLocationsJobsResponse =
  /*@__PURE__*/ JobExecutionDetails;

export type GetExecutionDetailsProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice. */
export const getExecutionDetailsProjectsLocationsJobs: API.PaginatedOperationMethod<
  GetExecutionDetailsProjectsLocationsJobsRequest,
  GetExecutionDetailsProjectsLocationsJobsResponse,
  GetExecutionDetailsProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetExecutionDetailsProjectsLocationsJobsRequest,
  output: GetExecutionDetailsProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SnapshotProjectsLocationsJobsRequest {
  /** The job to be snapshotted. */
  jobId: string;
  /** The project which owns the job to be snapshotted. */
  projectId: string;
  /** The location that contains this job. */
  location: string;
  /** Request body */
  body?: SnapshotJobRequest;
}

export const SnapshotProjectsLocationsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(SnapshotJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}:snapshot",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SnapshotProjectsLocationsJobsRequest>;

export type SnapshotProjectsLocationsJobsResponse = Snapshot;
export const SnapshotProjectsLocationsJobsResponse = /*@__PURE__*/ Snapshot;

export type SnapshotProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Snapshot the state of a streaming job. */
export const snapshotProjectsLocationsJobs: API.OperationMethod<
  SnapshotProjectsLocationsJobsRequest,
  SnapshotProjectsLocationsJobsResponse,
  SnapshotProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SnapshotProjectsLocationsJobsRequest,
  output: SnapshotProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsJobsMessagesRequest {
  /** If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned. */
  pageToken?: string;
  /** If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages). */
  startTime?: string;
  /** The job to get messages about. */
  jobId: string;
  /** Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available). */
  endTime?: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
  location: string;
  /** Filter to only get messages with importance >= level */
  minimumImportance?:
    | "JOB_MESSAGE_IMPORTANCE_UNKNOWN"
    | "JOB_MESSAGE_DEBUG"
    | "JOB_MESSAGE_DETAILED"
    | "JOB_MESSAGE_BASIC"
    | "JOB_MESSAGE_WARNING"
    | "JOB_MESSAGE_ERROR"
    | (string & {});
  /** A project id. */
  projectId: string;
  /** If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results. */
  pageSize?: number;
}

export const ListProjectsLocationsJobsMessagesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    endTime: Schema.optional(Schema.String).pipe(T.HttpQuery("endTime")),
    location: Schema.String.pipe(T.HttpPath("location")),
    minimumImportance: Schema.optional(Schema.String).pipe(
      T.HttpQuery("minimumImportance"),
    ),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsJobsMessagesRequest>;

export type ListProjectsLocationsJobsMessagesResponse = ListJobMessagesResponse;
export const ListProjectsLocationsJobsMessagesResponse =
  /*@__PURE__*/ ListJobMessagesResponse;

export type ListProjectsLocationsJobsMessagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`. */
export const listProjectsLocationsJobsMessages: API.PaginatedOperationMethod<
  ListProjectsLocationsJobsMessagesRequest,
  ListProjectsLocationsJobsMessagesResponse,
  ListProjectsLocationsJobsMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobsMessagesRequest,
  output: ListProjectsLocationsJobsMessagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetExecutionDetailsProjectsLocationsJobsStagesRequest {
  /** The stage for which to fetch information. */
  stageId: string;
  /** A project id. */
  projectId: string;
  /** If specified, determines the maximum number of work items to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results. */
  pageSize?: number;
  /** If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned. */
  pageToken?: string;
  /** Lower time bound of work items to include, by start time. */
  startTime?: string;
  /** The job to get execution details for. */
  jobId: string;
  /** Upper time bound of work items to include, by start time. */
  endTime?: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
  location: string;
}

export const GetExecutionDetailsProjectsLocationsJobsStagesRequest =
  /*@__PURE__*/ Schema.Struct({
    stageId: Schema.String.pipe(T.HttpPath("stageId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    endTime: Schema.optional(Schema.String).pipe(T.HttpQuery("endTime")),
    location: Schema.String.pipe(T.HttpPath("location")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/stages/{stageId}/executionDetails",
    }),
    svc,
  ) as unknown as Schema.Codec<GetExecutionDetailsProjectsLocationsJobsStagesRequest>;

export type GetExecutionDetailsProjectsLocationsJobsStagesResponse =
  StageExecutionDetails;
export const GetExecutionDetailsProjectsLocationsJobsStagesResponse =
  /*@__PURE__*/ StageExecutionDetails;

export type GetExecutionDetailsProjectsLocationsJobsStagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice. */
export const getExecutionDetailsProjectsLocationsJobsStages: API.PaginatedOperationMethod<
  GetExecutionDetailsProjectsLocationsJobsStagesRequest,
  GetExecutionDetailsProjectsLocationsJobsStagesResponse,
  GetExecutionDetailsProjectsLocationsJobsStagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetExecutionDetailsProjectsLocationsJobsStagesRequest,
  output: GetExecutionDetailsProjectsLocationsJobsStagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SendCaptureProjectsLocationsJobsDebugRequest {
  /** The job id. */
  jobId: string;
  /** The project id. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
  location: string;
  /** Request body */
  body?: SendDebugCaptureRequest;
}

export const SendCaptureProjectsLocationsJobsDebugRequest =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(SendDebugCaptureRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/sendCapture",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SendCaptureProjectsLocationsJobsDebugRequest>;

export type SendCaptureProjectsLocationsJobsDebugResponse =
  SendDebugCaptureResponse;
export const SendCaptureProjectsLocationsJobsDebugResponse =
  /*@__PURE__*/ SendDebugCaptureResponse;

export type SendCaptureProjectsLocationsJobsDebugError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Send encoded debug capture data for component. */
export const sendCaptureProjectsLocationsJobsDebug: API.OperationMethod<
  SendCaptureProjectsLocationsJobsDebugRequest,
  SendCaptureProjectsLocationsJobsDebugResponse,
  SendCaptureProjectsLocationsJobsDebugError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendCaptureProjectsLocationsJobsDebugRequest,
  output: SendCaptureProjectsLocationsJobsDebugResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetConfigProjectsLocationsJobsDebugRequest {
  /** The job id. */
  jobId: string;
  /** The project id. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
  location: string;
  /** Request body */
  body?: GetDebugConfigRequest;
}

export const GetConfigProjectsLocationsJobsDebugRequest =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(GetDebugConfigRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GetConfigProjectsLocationsJobsDebugRequest>;

export type GetConfigProjectsLocationsJobsDebugResponse =
  GetDebugConfigResponse;
export const GetConfigProjectsLocationsJobsDebugResponse =
  /*@__PURE__*/ GetDebugConfigResponse;

export type GetConfigProjectsLocationsJobsDebugError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Get encoded debug configuration for component. Not cacheable. */
export const getConfigProjectsLocationsJobsDebug: API.OperationMethod<
  GetConfigProjectsLocationsJobsDebugRequest,
  GetConfigProjectsLocationsJobsDebugResponse,
  GetConfigProjectsLocationsJobsDebugError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConfigProjectsLocationsJobsDebugRequest,
  output: GetConfigProjectsLocationsJobsDebugResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetWorkerStacktracesProjectsLocationsJobsDebugRequest {
  /** The job for which to get stacktraces. */
  jobId: string;
  /** The project id. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
  location: string;
  /** Request body */
  body?: GetWorkerStacktracesRequest;
}

export const GetWorkerStacktracesProjectsLocationsJobsDebugRequest =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(GetWorkerStacktracesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getWorkerStacktraces",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GetWorkerStacktracesProjectsLocationsJobsDebugRequest>;

export type GetWorkerStacktracesProjectsLocationsJobsDebugResponse =
  GetWorkerStacktracesResponse;
export const GetWorkerStacktracesProjectsLocationsJobsDebugResponse =
  /*@__PURE__*/ GetWorkerStacktracesResponse;

export type GetWorkerStacktracesProjectsLocationsJobsDebugError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Get worker stacktraces from debug capture. */
export const getWorkerStacktracesProjectsLocationsJobsDebug: API.OperationMethod<
  GetWorkerStacktracesProjectsLocationsJobsDebugRequest,
  GetWorkerStacktracesProjectsLocationsJobsDebugResponse,
  GetWorkerStacktracesProjectsLocationsJobsDebugError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkerStacktracesProjectsLocationsJobsDebugRequest,
  output: GetWorkerStacktracesProjectsLocationsJobsDebugResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsJobsSnapshotsRequest {
  /** If specified, list snapshots created from this job. */
  jobId: string;
  /** The project ID to list snapshots for. */
  projectId: string;
  /** The location to list snapshots in. */
  location: string;
}

export const ListProjectsLocationsJobsSnapshotsRequest =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/snapshots",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsJobsSnapshotsRequest>;

export type ListProjectsLocationsJobsSnapshotsResponse = ListSnapshotsResponse;
export const ListProjectsLocationsJobsSnapshotsResponse =
  /*@__PURE__*/ ListSnapshotsResponse;

export type ListProjectsLocationsJobsSnapshotsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists snapshots. */
export const listProjectsLocationsJobsSnapshots: API.OperationMethod<
  ListProjectsLocationsJobsSnapshotsRequest,
  ListProjectsLocationsJobsSnapshotsResponse,
  ListProjectsLocationsJobsSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsJobsSnapshotsRequest,
  output: ListProjectsLocationsJobsSnapshotsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ReportStatusProjectsLocationsJobsWorkItemsRequest {
  /** The job which the WorkItem is part of. */
  jobId: string;
  /** The project which owns the WorkItem's job. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job. */
  location: string;
  /** Request body */
  body?: ReportWorkItemStatusRequest;
}

export const ReportStatusProjectsLocationsJobsWorkItemsRequest =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(ReportWorkItemStatusRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:reportStatus",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ReportStatusProjectsLocationsJobsWorkItemsRequest>;

export type ReportStatusProjectsLocationsJobsWorkItemsResponse =
  ReportWorkItemStatusResponse;
export const ReportStatusProjectsLocationsJobsWorkItemsResponse =
  /*@__PURE__*/ ReportWorkItemStatusResponse;

export type ReportStatusProjectsLocationsJobsWorkItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reports the status of dataflow WorkItems leased by a worker. */
export const reportStatusProjectsLocationsJobsWorkItems: API.OperationMethod<
  ReportStatusProjectsLocationsJobsWorkItemsRequest,
  ReportStatusProjectsLocationsJobsWorkItemsResponse,
  ReportStatusProjectsLocationsJobsWorkItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ReportStatusProjectsLocationsJobsWorkItemsRequest,
  output: ReportStatusProjectsLocationsJobsWorkItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LeaseProjectsLocationsJobsWorkItemsRequest {
  /** Identifies the workflow job this worker belongs to. */
  jobId: string;
  /** Identifies the project this worker belongs to. */
  projectId: string;
  /** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job. */
  location: string;
  /** Request body */
  body?: LeaseWorkItemRequest;
}

export const LeaseProjectsLocationsJobsWorkItemsRequest =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(LeaseWorkItemRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:lease",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<LeaseProjectsLocationsJobsWorkItemsRequest>;

export type LeaseProjectsLocationsJobsWorkItemsResponse = LeaseWorkItemResponse;
export const LeaseProjectsLocationsJobsWorkItemsResponse =
  /*@__PURE__*/ LeaseWorkItemResponse;

export type LeaseProjectsLocationsJobsWorkItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Leases a dataflow WorkItem to run. */
export const leaseProjectsLocationsJobsWorkItems: API.OperationMethod<
  LeaseProjectsLocationsJobsWorkItemsRequest,
  LeaseProjectsLocationsJobsWorkItemsResponse,
  LeaseProjectsLocationsJobsWorkItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LeaseProjectsLocationsJobsWorkItemsRequest,
  output: LeaseProjectsLocationsJobsWorkItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LaunchProjectsLocationsFlexTemplatesRequest {
  /** Required. The ID of the Cloud Platform project that the job belongs to. */
  projectId: string;
  /** Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. E.g., us-central1, us-west1. */
  location: string;
  /** Request body */
  body?: LaunchFlexTemplateRequest;
}

export const LaunchProjectsLocationsFlexTemplatesRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(LaunchFlexTemplateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1b3/projects/{projectId}/locations/{location}/flexTemplates:launch",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<LaunchProjectsLocationsFlexTemplatesRequest>;

export type LaunchProjectsLocationsFlexTemplatesResponse =
  LaunchFlexTemplateResponse;
export const LaunchProjectsLocationsFlexTemplatesResponse =
  /*@__PURE__*/ LaunchFlexTemplateResponse;

export type LaunchProjectsLocationsFlexTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Launch a job with a FlexTemplate. */
export const launchProjectsLocationsFlexTemplates: API.OperationMethod<
  LaunchProjectsLocationsFlexTemplatesRequest,
  LaunchProjectsLocationsFlexTemplatesResponse,
  LaunchProjectsLocationsFlexTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LaunchProjectsLocationsFlexTemplatesRequest,
  output: LaunchProjectsLocationsFlexTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
