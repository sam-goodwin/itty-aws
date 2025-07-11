import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSIoTAnalytics {
  batchPutMessage(
    input: BatchPutMessageRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  cancelPipelineReprocessing(
    input: CancelPipelineReprocessingRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  createChannel(
    input: CreateChannelRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  createDataset(
    input: CreateDatasetRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  createDatasetContent(
    input: CreateDatasetContentRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  createDatastore(
    input: CreateDatastoreRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  createPipeline(
    input: CreatePipelineRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteChannel(
    input: DeleteChannelRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteDataset(
    input: DeleteDatasetRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteDatasetContent(
    input: DeleteDatasetContentRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteDatastore(
    input: DeleteDatastoreRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deletePipeline(
    input: DeletePipelineRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeChannel(
    input: DescribeChannelRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeDataset(
    input: DescribeDatasetRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeDatastore(
    input: DescribeDatastoreRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeLoggingOptions(
    input: DescribeLoggingOptionsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describePipeline(
    input: DescribePipelineRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  getDatasetContent(
    input: GetDatasetContentRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listChannels(
    input: ListChannelsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listDatasetContents(
    input: ListDatasetContentsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listDatasets(
    input: ListDatasetsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listDatastores(
    input: ListDatastoresRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listPipelines(
    input: ListPipelinesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  putLoggingOptions(
    input: PutLoggingOptionsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  runPipelineActivity(
    input: RunPipelineActivityRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  sampleChannelData(
    input: SampleChannelDataRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  startPipelineReprocessing(
    input: StartPipelineReprocessingRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceAlreadyExistsException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  updateChannel(
    input: UpdateChannelRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  updateDataset(
    input: UpdateDatasetRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  updateDatastore(
    input: UpdateDatastoreRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  updatePipeline(
    input: UpdatePipelineRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
}

export type Iotanalytics = AWSIoTAnalytics;

export type ActivityBatchSize = number;

export type ActivityName = string;

export interface AddAttributesActivity {
}
export type AttributeName = string;

export type AttributeNameMapping = Record<string, unknown>;
export type AttributeNames = Array<unknown>;
export type BatchPutMessageErrorEntries = Array<unknown>;
export interface BatchPutMessageErrorEntry {
}
export interface BatchPutMessageRequest {
}
export interface BatchPutMessageResponse {
}
export type BucketKeyExpression = string;

export type BucketName = string;

export interface CancelPipelineReprocessingRequest {
}
export interface CancelPipelineReprocessingResponse {
}
export interface Channel {
}
export interface ChannelActivity {
}
export type ChannelArn = string;

export interface ChannelMessages {
}
export type ChannelName = string;

export interface ChannelStatistics {
}
export type ChannelStatus = never;
export interface ChannelStorage {
}
export interface ChannelStorageSummary {
}
export type ChannelSummaries = Array<unknown>;
export interface ChannelSummary {
}
export interface Column {
}
export type ColumnDataType = string;

export type ColumnName = string;

export type Columns = Array<unknown>;
export type ComputeType = never;
export interface ContainerDatasetAction {
}
export interface CreateChannelRequest {
}
export interface CreateChannelResponse {
}
export interface CreateDatasetContentRequest {
}
export interface CreateDatasetContentResponse {
}
export interface CreateDatasetRequest {
}
export interface CreateDatasetResponse {
}
export interface CreateDatastoreRequest {
}
export interface CreateDatastoreResponse {
}
export interface CreatePipelineRequest {
}
export interface CreatePipelineResponse {
}
export interface CustomerManagedChannelS3Storage {
}
export interface CustomerManagedChannelS3StorageSummary {
}
export interface CustomerManagedDatastoreS3Storage {
}
export interface CustomerManagedDatastoreS3StorageSummary {
}
export interface Dataset {
}
export interface DatasetAction {
}
export type DatasetActionName = string;

export type DatasetActions = Array<unknown>;
export type DatasetActionSummaries = Array<unknown>;
export interface DatasetActionSummary {
}
export type DatasetActionType = never;
export type DatasetArn = string;

export interface DatasetContentDeliveryDestination {
}
export interface DatasetContentDeliveryRule {
}
export type DatasetContentDeliveryRules = Array<unknown>;
export type DatasetContentState = never;
export interface DatasetContentStatus {
}
export type DatasetContentSummaries = Array<unknown>;
export interface DatasetContentSummary {
}
export type DatasetContentVersion = string;

export interface DatasetContentVersionValue {
}
export type DatasetEntries = Array<unknown>;
export interface DatasetEntry {
}
export type DatasetName = string;

export type DatasetStatus = never;
export type DatasetSummaries = Array<unknown>;
export interface DatasetSummary {
}
export interface DatasetTrigger {
}
export type DatasetTriggers = Array<unknown>;
export interface Datastore {
}
export interface DatastoreActivity {
}
export type DatastoreArn = string;

export interface DatastoreIotSiteWiseMultiLayerStorage {
}
export interface DatastoreIotSiteWiseMultiLayerStorageSummary {
}
export type DatastoreName = string;

export interface DatastorePartition {
}
export interface DatastorePartitions {
}
export interface DatastoreStatistics {
}
export type DatastoreStatus = never;
export type DatastoreStorage = never;
export interface DatastoreStorageSummary {
}
export type DatastoreSummaries = Array<unknown>;
export interface DatastoreSummary {
}
export interface DeleteChannelRequest {
}
export interface DeleteDatasetContentRequest {
}
export interface DeleteDatasetRequest {
}
export interface DeleteDatastoreRequest {
}
export interface DeletePipelineRequest {
}
export interface DeltaTime {
}
export interface DeltaTimeSessionWindowConfiguration {
}
export interface DescribeChannelRequest {
}
export interface DescribeChannelResponse {
}
export interface DescribeDatasetRequest {
}
export interface DescribeDatasetResponse {
}
export interface DescribeDatastoreRequest {
}
export interface DescribeDatastoreResponse {
}
export interface DescribeLoggingOptionsRequest {
}
export interface DescribeLoggingOptionsResponse {
}
export interface DescribePipelineRequest {
}
export interface DescribePipelineResponse {
}
export interface DeviceRegistryEnrichActivity {
}
export interface DeviceShadowEnrichActivity {
}
export type DoubleValue = number;

export type EndTime = Date | string;

export type EntryName = string;

export type ErrorCode = string;

export type ErrorMessage = string;

export interface EstimatedResourceSize {
}
export interface FileFormatConfiguration {
}
export type FileFormatType = never;
export interface FilterActivity {
}
export type FilterExpression = string;

export interface GetDatasetContentRequest {
}
export interface GetDatasetContentResponse {
}
export interface GlueConfiguration {
}
export type GlueDatabaseName = string;

export type GlueTableName = string;

export type Image = string;

export type IncludeStatisticsFlag = boolean;

export interface InternalFailureException {
}
export interface InvalidRequestException {
}
export interface IotEventsDestinationConfiguration {
}
export type IotEventsInputName = string;

export interface IotSiteWiseCustomerManagedDatastoreS3Storage {
}
export interface IotSiteWiseCustomerManagedDatastoreS3StorageSummary {
}
export interface JsonConfiguration {
}
export interface LambdaActivity {
}
export type LambdaName = string;

export interface LateDataRule {
}
export interface LateDataRuleConfiguration {
}
export type LateDataRuleName = string;

export type LateDataRules = Array<unknown>;
export interface LimitExceededException {
}
export interface ListChannelsRequest {
}
export interface ListChannelsResponse {
}
export interface ListDatasetContentsRequest {
}
export interface ListDatasetContentsResponse {
}
export interface ListDatasetsRequest {
}
export interface ListDatasetsResponse {
}
export interface ListDatastoresRequest {
}
export interface ListDatastoresResponse {
}
export interface ListPipelinesRequest {
}
export interface ListPipelinesResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type LoggingEnabled = boolean;

export type LoggingLevel = never;
export interface LoggingOptions {
}
export type LogResult = string;

export interface MathActivity {
}
export type MathExpression = string;

export type MaxMessages = number;

export type MaxResults = number;

export type MaxVersions = number;

export interface Message {
}
export type MessageId = string;

export type MessagePayload = Uint8Array | string;

export type MessagePayloads = Array<unknown>;
export type Messages = Array<unknown>;
export type NextToken = string;

export type OffsetSeconds = number;

export type OutputFileName = string;

export interface OutputFileUriValue {
}
export interface ParquetConfiguration {
}
export interface Partition {
}
export type PartitionAttributeName = string;

export type Partitions = Array<unknown>;
export interface Pipeline {
}
export type PipelineActivities = Array<unknown>;
export interface PipelineActivity {
}
export type PipelineArn = string;

export type PipelineName = string;

export type PipelineSummaries = Array<unknown>;
export interface PipelineSummary {
}
export type PresignedURI = string;

export interface PutLoggingOptionsRequest {
}
export interface QueryFilter {
}
export type QueryFilters = Array<unknown>;
export type Reason = string;

export interface RemoveAttributesActivity {
}
export type ReprocessingId = string;

export type ReprocessingStatus = never;
export type ReprocessingSummaries = Array<unknown>;
export interface ReprocessingSummary {
}
export interface ResourceAlreadyExistsException {
}
export type ResourceArn = string;

export type ResourceArn2 = string;

export interface ResourceConfiguration {
}
export type resourceId = string;

export interface ResourceNotFoundException {
}
export interface RetentionPeriod {
}
export type RetentionPeriodInDays = number;

export type RoleArn = string;

export interface RunPipelineActivityRequest {
}
export interface RunPipelineActivityResponse {
}
export interface S3DestinationConfiguration {
}
export type S3KeyPrefix = string;

export type S3PathChannelMessage = string;

export type S3PathChannelMessages = Array<unknown>;
export interface SampleChannelDataRequest {
}
export interface SampleChannelDataResponse {
}
export interface Schedule {
}
export type ScheduleExpression = string;

export interface SchemaDefinition {
}
export interface SelectAttributesActivity {
}
export interface ServiceManagedChannelS3Storage {
}
export interface ServiceManagedChannelS3StorageSummary {
}
export interface ServiceManagedDatastoreS3Storage {
}
export interface ServiceManagedDatastoreS3StorageSummary {
}
export interface ServiceUnavailableException {
}
export type SessionTimeoutInMinutes = number;

export type SizeInBytes = number;

export type SqlQuery = string;

export interface SqlQueryDatasetAction {
}
export interface StartPipelineReprocessingRequest {
}
export interface StartPipelineReprocessingResponse {
}
export type StartTime = Date | string;

export type StringValue = string;

export interface Tag {
}
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagList = Array<unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface ThrottlingException {
}
export type TimeExpression = string;

export type Timestamp = Date | string;

export type TimestampFormat = string;

export interface TimestampPartition {
}
export interface TriggeringDataset {
}
export type UnlimitedRetentionPeriod = boolean;

export type UnlimitedVersioning = boolean;

export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateChannelRequest {
}
export interface UpdateDatasetRequest {
}
export interface UpdateDatastoreRequest {
}
export interface UpdatePipelineRequest {
}
export interface Variable {
}
export type VariableName = string;

export type Variables = Array<unknown>;
export interface VersioningConfiguration {
}
export type VolumeSizeInGB = number;

export declare namespace BatchPutMessage {
  export type Input = BatchPutMessageRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CancelPipelineReprocessing {
  export type Input = CancelPipelineReprocessingRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateChannel {
  export type Input = CreateChannelRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDataset {
  export type Input = CreateDatasetRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDatasetContent {
  export type Input = CreateDatasetContentRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDatastore {
  export type Input = CreateDatastoreRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreatePipeline {
  export type Input = CreatePipelineRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteChannel {
  export type Input = DeleteChannelRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDataset {
  export type Input = DeleteDatasetRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDatasetContent {
  export type Input = DeleteDatasetContentRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDatastore {
  export type Input = DeleteDatastoreRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeletePipeline {
  export type Input = DeletePipelineRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeChannel {
  export type Input = DescribeChannelRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDataset {
  export type Input = DescribeDatasetRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDatastore {
  export type Input = DescribeDatastoreRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeLoggingOptions {
  export type Input = DescribeLoggingOptionsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribePipeline {
  export type Input = DescribePipelineRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetDatasetContent {
  export type Input = GetDatasetContentRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListChannels {
  export type Input = ListChannelsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDatasetContents {
  export type Input = ListDatasetContentsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDatasets {
  export type Input = ListDatasetsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDatastores {
  export type Input = ListDatastoresRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListPipelines {
  export type Input = ListPipelinesRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutLoggingOptions {
  export type Input = PutLoggingOptionsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace RunPipelineActivity {
  export type Input = RunPipelineActivityRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SampleChannelData {
  export type Input = SampleChannelDataRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartPipelineReprocessing {
  export type Input = StartPipelineReprocessingRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateChannel {
  export type Input = UpdateChannelRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDataset {
  export type Input = UpdateDatasetRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDatastore {
  export type Input = UpdateDatastoreRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdatePipeline {
  export type Input = UpdatePipelineRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

