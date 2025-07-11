import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Kinesis_20131202 {
  addTagsToStream(
    input: AddTagsToStreamInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createStream(
    input: CreateStreamInput,
  ): Effect.Effect<
    {},
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | CommonAwsError
  >;
  decreaseStreamRetentionPeriod(
    input: DecreaseStreamRetentionPeriodInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteStream(
    input: DeleteStreamInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deregisterStreamConsumer(
    input: DeregisterStreamConsumerInput,
  ): Effect.Effect<
    {},
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeLimits(
    input: DescribeLimitsInput,
  ): Effect.Effect<
    DescribeLimitsOutput,
    LimitExceededException | CommonAwsError
  >;
  describeStream(
    input: DescribeStreamInput,
  ): Effect.Effect<
    DescribeStreamOutput,
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeStreamConsumer(
    input: DescribeStreamConsumerInput,
  ): Effect.Effect<
    DescribeStreamConsumerOutput,
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeStreamSummary(
    input: DescribeStreamSummaryInput,
  ): Effect.Effect<
    DescribeStreamSummaryOutput,
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disableEnhancedMonitoring(
    input: DisableEnhancedMonitoringInput,
  ): Effect.Effect<
    EnhancedMonitoringOutput,
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  enableEnhancedMonitoring(
    input: EnableEnhancedMonitoringInput,
  ): Effect.Effect<
    EnhancedMonitoringOutput,
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getRecords(
    input: GetRecordsInput,
  ): Effect.Effect<
    GetRecordsOutput,
    | AccessDeniedException
    | ExpiredIteratorException
    | InternalFailureException
    | InvalidArgumentException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyInput,
  ): Effect.Effect<
    GetResourcePolicyOutput,
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getShardIterator(
    input: GetShardIteratorInput,
  ): Effect.Effect<
    GetShardIteratorOutput,
    | AccessDeniedException
    | InternalFailureException
    | InvalidArgumentException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  increaseStreamRetentionPeriod(
    input: IncreaseStreamRetentionPeriodInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listShards(
    input: ListShardsInput,
  ): Effect.Effect<
    ListShardsOutput,
    | AccessDeniedException
    | ExpiredNextTokenException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listStreamConsumers(
    input: ListStreamConsumersInput,
  ): Effect.Effect<
    ListStreamConsumersOutput,
    | ExpiredNextTokenException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listStreams(
    input: ListStreamsInput,
  ): Effect.Effect<
    ListStreamsOutput,
    | ExpiredNextTokenException
    | InvalidArgumentException
    | LimitExceededException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listTagsForStream(
    input: ListTagsForStreamInput,
  ): Effect.Effect<
    ListTagsForStreamOutput,
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  mergeShards(
    input: MergeShardsInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putRecord(
    input: PutRecordInput,
  ): Effect.Effect<
    PutRecordOutput,
    | AccessDeniedException
    | InternalFailureException
    | InvalidArgumentException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putRecords(
    input: PutRecordsInput,
  ): Effect.Effect<
    PutRecordsOutput,
    | AccessDeniedException
    | InternalFailureException
    | InvalidArgumentException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  registerStreamConsumer(
    input: RegisterStreamConsumerInput,
  ): Effect.Effect<
    RegisterStreamConsumerOutput,
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  removeTagsFromStream(
    input: RemoveTagsFromStreamInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  splitShard(
    input: SplitShardInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startStreamEncryption(
    input: StartStreamEncryptionInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InvalidArgumentException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopStreamEncryption(
    input: StopStreamEncryptionInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  subscribeToShard(
    input: SubscribeToShardInput,
  ): Effect.Effect<
    SubscribeToShardOutput,
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateShardCount(
    input: UpdateShardCountInput,
  ): Effect.Effect<
    UpdateShardCountOutput,
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateStreamMode(
    input: UpdateStreamModeInput,
  ): Effect.Effect<
    {},
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type Kinesis = Kinesis_20131202;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AddTagsToStreamInput {
  StreamName?: string;
  Tags: Record<string, string>;
  StreamARN?: string;
}
export type BooleanObject = boolean;

export interface ChildShard {
  ShardId: string;
  ParentShards: Array<string>;
  HashKeyRange: HashKeyRange;
}
export type ChildShardList = Array<ChildShard>;
export interface Consumer {
  ConsumerName: string;
  ConsumerARN: string;
  ConsumerStatus: ConsumerStatus;
  ConsumerCreationTimestamp: Date | string;
}
export type ConsumerARN = string;

export type ConsumerCountObject = number;

export interface ConsumerDescription {
  ConsumerName: string;
  ConsumerARN: string;
  ConsumerStatus: ConsumerStatus;
  ConsumerCreationTimestamp: Date | string;
  StreamARN: string;
}
export type ConsumerList = Array<Consumer>;
export type ConsumerName = string;

export type ConsumerStatus = "CREATING" | "DELETING" | "ACTIVE";
export interface CreateStreamInput {
  StreamName: string;
  ShardCount?: number;
  StreamModeDetails?: StreamModeDetails;
  Tags?: Record<string, string>;
}
export type Data = Uint8Array | string;

export interface DecreaseStreamRetentionPeriodInput {
  StreamName?: string;
  RetentionPeriodHours: number;
  StreamARN?: string;
}
export interface DeleteResourcePolicyInput {
  ResourceARN: string;
}
export interface DeleteStreamInput {
  StreamName?: string;
  EnforceConsumerDeletion?: boolean;
  StreamARN?: string;
}
export interface DeregisterStreamConsumerInput {
  StreamARN?: string;
  ConsumerName?: string;
  ConsumerARN?: string;
}
export interface DescribeLimitsInput {}
export interface DescribeLimitsOutput {
  ShardLimit: number;
  OpenShardCount: number;
  OnDemandStreamCount: number;
  OnDemandStreamCountLimit: number;
}
export interface DescribeStreamConsumerInput {
  StreamARN?: string;
  ConsumerName?: string;
  ConsumerARN?: string;
}
export interface DescribeStreamConsumerOutput {
  ConsumerDescription: ConsumerDescription;
}
export interface DescribeStreamInput {
  StreamName?: string;
  Limit?: number;
  ExclusiveStartShardId?: string;
  StreamARN?: string;
}
export type DescribeStreamInputLimit = number;

export interface DescribeStreamOutput {
  StreamDescription: StreamDescription;
}
export interface DescribeStreamSummaryInput {
  StreamName?: string;
  StreamARN?: string;
}
export interface DescribeStreamSummaryOutput {
  StreamDescriptionSummary: StreamDescriptionSummary;
}
export interface DisableEnhancedMonitoringInput {
  StreamName?: string;
  ShardLevelMetrics: Array<MetricsName>;
  StreamARN?: string;
}
export interface EnableEnhancedMonitoringInput {
  StreamName?: string;
  ShardLevelMetrics: Array<MetricsName>;
  StreamARN?: string;
}
export type EncryptionType = "NONE" | "KMS";
export interface EnhancedMetrics {
  ShardLevelMetrics?: Array<MetricsName>;
}
export type EnhancedMonitoringList = Array<EnhancedMetrics>;
export interface EnhancedMonitoringOutput {
  StreamName?: string;
  CurrentShardLevelMetrics?: Array<MetricsName>;
  DesiredShardLevelMetrics?: Array<MetricsName>;
  StreamARN?: string;
}
export type ErrorCode = string;

export type ErrorMessage = string;

export declare class ExpiredIteratorException extends Data.TaggedError(
  "ExpiredIteratorException",
)<{
  readonly message?: string;
}> {}
export declare class ExpiredNextTokenException extends Data.TaggedError(
  "ExpiredNextTokenException",
)<{
  readonly message?: string;
}> {}
export interface GetRecordsInput {
  ShardIterator: string;
  Limit?: number;
  StreamARN?: string;
}
export type GetRecordsInputLimit = number;

export interface GetRecordsOutput {
  Records: Array<Record>;
  NextShardIterator?: string;
  MillisBehindLatest?: number;
  ChildShards?: Array<ChildShard>;
}
export interface GetResourcePolicyInput {
  ResourceARN: string;
}
export interface GetResourcePolicyOutput {
  Policy: string;
}
export interface GetShardIteratorInput {
  StreamName?: string;
  ShardId: string;
  ShardIteratorType: ShardIteratorType;
  StartingSequenceNumber?: string;
  Timestamp?: Date | string;
  StreamARN?: string;
}
export interface GetShardIteratorOutput {
  ShardIterator?: string;
}
export type HashKey = string;

export interface HashKeyRange {
  StartingHashKey: string;
  EndingHashKey: string;
}
export interface IncreaseStreamRetentionPeriodInput {
  StreamName?: string;
  RetentionPeriodHours: number;
  StreamARN?: string;
}
export declare class InternalFailureException extends Data.TaggedError(
  "InternalFailureException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidArgumentException extends Data.TaggedError(
  "InvalidArgumentException",
)<{
  readonly message?: string;
}> {}
export type KeyId = string;

export declare class KMSAccessDeniedException extends Data.TaggedError(
  "KMSAccessDeniedException",
)<{
  readonly message?: string;
}> {}
export declare class KMSDisabledException extends Data.TaggedError(
  "KMSDisabledException",
)<{
  readonly message?: string;
}> {}
export declare class KMSInvalidStateException extends Data.TaggedError(
  "KMSInvalidStateException",
)<{
  readonly message?: string;
}> {}
export declare class KMSNotFoundException extends Data.TaggedError(
  "KMSNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class KMSOptInRequired extends Data.TaggedError(
  "KMSOptInRequired",
)<{
  readonly message?: string;
}> {}
export declare class KMSThrottlingException extends Data.TaggedError(
  "KMSThrottlingException",
)<{
  readonly message?: string;
}> {}
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListShardsInput {
  StreamName?: string;
  NextToken?: string;
  ExclusiveStartShardId?: string;
  MaxResults?: number;
  StreamCreationTimestamp?: Date | string;
  ShardFilter?: ShardFilter;
  StreamARN?: string;
}
export type ListShardsInputLimit = number;

export interface ListShardsOutput {
  Shards?: Array<Shard>;
  NextToken?: string;
}
export interface ListStreamConsumersInput {
  StreamARN: string;
  NextToken?: string;
  MaxResults?: number;
  StreamCreationTimestamp?: Date | string;
}
export type ListStreamConsumersInputLimit = number;

export interface ListStreamConsumersOutput {
  Consumers?: Array<Consumer>;
  NextToken?: string;
}
export interface ListStreamsInput {
  Limit?: number;
  ExclusiveStartStreamName?: string;
  NextToken?: string;
}
export type ListStreamsInputLimit = number;

export interface ListStreamsOutput {
  StreamNames: Array<string>;
  HasMoreStreams: boolean;
  NextToken?: string;
  StreamSummaries?: Array<StreamSummary>;
}
export interface ListTagsForResourceInput {
  ResourceARN: string;
}
export interface ListTagsForResourceOutput {
  Tags?: Array<Tag>;
}
export interface ListTagsForStreamInput {
  StreamName?: string;
  ExclusiveStartTagKey?: string;
  Limit?: number;
  StreamARN?: string;
}
export type ListTagsForStreamInputLimit = number;

export interface ListTagsForStreamOutput {
  Tags: Array<Tag>;
  HasMoreTags: boolean;
}
export interface MergeShardsInput {
  StreamName?: string;
  ShardToMerge: string;
  AdjacentShardToMerge: string;
  StreamARN?: string;
}
export type MetricsName =
  | "INCOMING_BYTES"
  | "INCOMING_RECORDS"
  | "OUTGOING_BYTES"
  | "OUTGOING_RECORDS"
  | "WRITE_PROVISIONED_THROUGHPUT_EXCEEDED"
  | "READ_PROVISIONED_THROUGHPUT_EXCEEDED"
  | "ITERATOR_AGE_MILLISECONDS"
  | "ALL";
export type MetricsNameList = Array<MetricsName>;
export type MillisBehindLatest = number;

export type NextToken = string;

export type OnDemandStreamCountLimitObject = number;

export type OnDemandStreamCountObject = number;

export type PartitionKey = string;

export type Policy = string;

export type PositiveIntegerObject = number;

export declare class ProvisionedThroughputExceededException extends Data.TaggedError(
  "ProvisionedThroughputExceededException",
)<{
  readonly message?: string;
}> {}
export interface PutRecordInput {
  StreamName?: string;
  Data: Uint8Array | string;
  PartitionKey: string;
  ExplicitHashKey?: string;
  SequenceNumberForOrdering?: string;
  StreamARN?: string;
}
export interface PutRecordOutput {
  ShardId: string;
  SequenceNumber: string;
  EncryptionType?: EncryptionType;
}
export interface PutRecordsInput {
  Records: Array<PutRecordsRequestEntry>;
  StreamName?: string;
  StreamARN?: string;
}
export interface PutRecordsOutput {
  FailedRecordCount?: number;
  Records: Array<PutRecordsResultEntry>;
  EncryptionType?: EncryptionType;
}
export interface PutRecordsRequestEntry {
  Data: Uint8Array | string;
  ExplicitHashKey?: string;
  PartitionKey: string;
}
export type PutRecordsRequestEntryList = Array<PutRecordsRequestEntry>;
export interface PutRecordsResultEntry {
  SequenceNumber?: string;
  ShardId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type PutRecordsResultEntryList = Array<PutRecordsResultEntry>;
export interface PutResourcePolicyInput {
  ResourceARN: string;
  Policy: string;
}
export interface Record {
  SequenceNumber: string;
  ApproximateArrivalTimestamp?: Date | string;
  Data: Uint8Array | string;
  PartitionKey: string;
  EncryptionType?: EncryptionType;
}
export type RecordList = Array<Record>;
export interface RegisterStreamConsumerInput {
  StreamARN: string;
  ConsumerName: string;
  Tags?: Record<string, string>;
}
export interface RegisterStreamConsumerOutput {
  Consumer: Consumer;
}
export interface RemoveTagsFromStreamInput {
  StreamName?: string;
  TagKeys: Array<string>;
  StreamARN?: string;
}
export type ResourceARN = string;

export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RetentionPeriodHours = number;

export type ScalingType = "UNIFORM_SCALING";
export type SequenceNumber = string;

export interface SequenceNumberRange {
  StartingSequenceNumber: string;
  EndingSequenceNumber?: string;
}
export interface Shard {
  ShardId: string;
  ParentShardId?: string;
  AdjacentParentShardId?: string;
  HashKeyRange: HashKeyRange;
  SequenceNumberRange: SequenceNumberRange;
}
export type ShardCountObject = number;

export interface ShardFilter {
  Type: ShardFilterType;
  ShardId?: string;
  Timestamp?: Date | string;
}
export type ShardFilterType =
  | "AFTER_SHARD_ID"
  | "AT_TRIM_HORIZON"
  | "FROM_TRIM_HORIZON"
  | "AT_LATEST"
  | "AT_TIMESTAMP"
  | "FROM_TIMESTAMP";
export type ShardId = string;

export type ShardIdList = Array<string>;
export type ShardIterator = string;

export type ShardIteratorType =
  | "AT_SEQUENCE_NUMBER"
  | "AFTER_SEQUENCE_NUMBER"
  | "TRIM_HORIZON"
  | "LATEST"
  | "AT_TIMESTAMP";
export type ShardList = Array<Shard>;
export interface SplitShardInput {
  StreamName?: string;
  ShardToSplit: string;
  NewStartingHashKey: string;
  StreamARN?: string;
}
export interface StartingPosition {
  Type: ShardIteratorType;
  SequenceNumber?: string;
  Timestamp?: Date | string;
}
export interface StartStreamEncryptionInput {
  StreamName?: string;
  EncryptionType: EncryptionType;
  KeyId: string;
  StreamARN?: string;
}
export interface StopStreamEncryptionInput {
  StreamName?: string;
  EncryptionType: EncryptionType;
  KeyId: string;
  StreamARN?: string;
}
export type StreamARN = string;

export interface StreamDescription {
  StreamName: string;
  StreamARN: string;
  StreamStatus: StreamStatus;
  StreamModeDetails?: StreamModeDetails;
  Shards: Array<Shard>;
  HasMoreShards: boolean;
  RetentionPeriodHours: number;
  StreamCreationTimestamp: Date | string;
  EnhancedMonitoring: Array<EnhancedMetrics>;
  EncryptionType?: EncryptionType;
  KeyId?: string;
}
export interface StreamDescriptionSummary {
  StreamName: string;
  StreamARN: string;
  StreamStatus: StreamStatus;
  StreamModeDetails?: StreamModeDetails;
  RetentionPeriodHours: number;
  StreamCreationTimestamp: Date | string;
  EnhancedMonitoring: Array<EnhancedMetrics>;
  EncryptionType?: EncryptionType;
  KeyId?: string;
  OpenShardCount: number;
  ConsumerCount?: number;
}
export type StreamMode = "PROVISIONED" | "ON_DEMAND";
export interface StreamModeDetails {
  StreamMode: StreamMode;
}
export type StreamName = string;

export type StreamNameList = Array<string>;
export type StreamStatus = "CREATING" | "DELETING" | "ACTIVE" | "UPDATING";
export interface StreamSummary {
  StreamName: string;
  StreamARN: string;
  StreamStatus: StreamStatus;
  StreamModeDetails?: StreamModeDetails;
  StreamCreationTimestamp?: Date | string;
}
export type StreamSummaryList = Array<StreamSummary>;
export interface SubscribeToShardEvent {
  Records: Array<Record>;
  ContinuationSequenceNumber: string;
  MillisBehindLatest: number;
  ChildShards?: Array<ChildShard>;
}
export type SubscribeToShardEventStream =
  | { SubscribeToShardEvent: SubscribeToShardEvent }
  | { ResourceNotFoundException: ResourceNotFoundException }
  | { ResourceInUseException: ResourceInUseException }
  | { KMSDisabledException: KMSDisabledException }
  | { KMSInvalidStateException: KMSInvalidStateException }
  | { KMSAccessDeniedException: KMSAccessDeniedException }
  | { KMSNotFoundException: KMSNotFoundException }
  | { KMSOptInRequired: KMSOptInRequired }
  | { KMSThrottlingException: KMSThrottlingException }
  | { InternalFailureException: InternalFailureException };
export interface SubscribeToShardInput {
  ConsumerARN: string;
  ShardId: string;
  StartingPosition: StartingPosition;
}
export interface SubscribeToShardOutput {
  EventStream: SubscribeToShardEventStream;
}
export interface Tag {
  Key: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  Tags: Record<string, string>;
  ResourceARN: string;
}
export type TagValue = string;

export type Timestamp = Date | string;

export interface UntagResourceInput {
  TagKeys: Array<string>;
  ResourceARN: string;
}
export interface UpdateShardCountInput {
  StreamName?: string;
  TargetShardCount: number;
  ScalingType: ScalingType;
  StreamARN?: string;
}
export interface UpdateShardCountOutput {
  StreamName?: string;
  CurrentShardCount?: number;
  TargetShardCount?: number;
  StreamARN?: string;
}
export interface UpdateStreamModeInput {
  StreamARN: string;
  StreamModeDetails: StreamModeDetails;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export declare namespace AddTagsToStream {
  export type Input = AddTagsToStreamInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateStream {
  export type Input = CreateStreamInput;
  export type Output = {};
  export type Error =
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DecreaseStreamRetentionPeriod {
  export type Input = DecreaseStreamRetentionPeriodInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteStream {
  export type Input = DeleteStreamInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeregisterStreamConsumer {
  export type Input = DeregisterStreamConsumerInput;
  export type Output = {};
  export type Error =
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeLimits {
  export type Input = DescribeLimitsInput;
  export type Output = DescribeLimitsOutput;
  export type Error = LimitExceededException | CommonAwsError;
}

export declare namespace DescribeStream {
  export type Input = DescribeStreamInput;
  export type Output = DescribeStreamOutput;
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeStreamConsumer {
  export type Input = DescribeStreamConsumerInput;
  export type Output = DescribeStreamConsumerOutput;
  export type Error =
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeStreamSummary {
  export type Input = DescribeStreamSummaryInput;
  export type Output = DescribeStreamSummaryOutput;
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisableEnhancedMonitoring {
  export type Input = DisableEnhancedMonitoringInput;
  export type Output = EnhancedMonitoringOutput;
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace EnableEnhancedMonitoring {
  export type Input = EnableEnhancedMonitoringInput;
  export type Output = EnhancedMonitoringOutput;
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetRecords {
  export type Input = GetRecordsInput;
  export type Output = GetRecordsOutput;
  export type Error =
    | AccessDeniedException
    | ExpiredIteratorException
    | InternalFailureException
    | InvalidArgumentException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyInput;
  export type Output = GetResourcePolicyOutput;
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetShardIterator {
  export type Input = GetShardIteratorInput;
  export type Output = GetShardIteratorOutput;
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidArgumentException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace IncreaseStreamRetentionPeriod {
  export type Input = IncreaseStreamRetentionPeriodInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListShards {
  export type Input = ListShardsInput;
  export type Output = ListShardsOutput;
  export type Error =
    | AccessDeniedException
    | ExpiredNextTokenException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListStreamConsumers {
  export type Input = ListStreamConsumersInput;
  export type Output = ListStreamConsumersOutput;
  export type Error =
    | ExpiredNextTokenException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListStreams {
  export type Input = ListStreamsInput;
  export type Output = ListStreamsOutput;
  export type Error =
    | ExpiredNextTokenException
    | InvalidArgumentException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForStream {
  export type Input = ListTagsForStreamInput;
  export type Output = ListTagsForStreamOutput;
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace MergeShards {
  export type Input = MergeShardsInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutRecord {
  export type Input = PutRecordInput;
  export type Output = PutRecordOutput;
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidArgumentException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutRecords {
  export type Input = PutRecordsInput;
  export type Output = PutRecordsOutput;
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidArgumentException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RegisterStreamConsumer {
  export type Input = RegisterStreamConsumerInput;
  export type Output = RegisterStreamConsumerOutput;
  export type Error =
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RemoveTagsFromStream {
  export type Input = RemoveTagsFromStreamInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace SplitShard {
  export type Input = SplitShardInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartStreamEncryption {
  export type Input = StartStreamEncryptionInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopStreamEncryption {
  export type Input = StopStreamEncryptionInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace SubscribeToShard {
  export type Input = SubscribeToShardInput;
  export type Output = SubscribeToShardOutput;
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateShardCount {
  export type Input = UpdateShardCountInput;
  export type Output = UpdateShardCountOutput;
  export type Error =
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateStreamMode {
  export type Input = UpdateStreamModeInput;
  export type Output = {};
  export type Error =
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}
