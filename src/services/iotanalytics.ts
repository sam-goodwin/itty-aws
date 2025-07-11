import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSIoTAnalytics {
  batchPutMessage(
    input: BatchPutMessageRequest,
  ): Effect.Effect<
    BatchPutMessageResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  cancelPipelineReprocessing(
    input: CancelPipelineReprocessingRequest,
  ): Effect.Effect<
    CancelPipelineReprocessingResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createChannel(
    input: CreateChannelRequest,
  ): Effect.Effect<
    CreateChannelResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createDataset(
    input: CreateDatasetRequest,
  ): Effect.Effect<
    CreateDatasetResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createDatasetContent(
    input: CreateDatasetContentRequest,
  ): Effect.Effect<
    CreateDatasetContentResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createDatastore(
    input: CreateDatastoreRequest,
  ): Effect.Effect<
    CreateDatastoreResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createPipeline(
    input: CreatePipelineRequest,
  ): Effect.Effect<
    CreatePipelineResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteChannel(
    input: DeleteChannelRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDataset(
    input: DeleteDatasetRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDatasetContent(
    input: DeleteDatasetContentRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDatastore(
    input: DeleteDatastoreRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deletePipeline(
    input: DeletePipelineRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeChannel(
    input: DescribeChannelRequest,
  ): Effect.Effect<
    DescribeChannelResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDataset(
    input: DescribeDatasetRequest,
  ): Effect.Effect<
    DescribeDatasetResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDatastore(
    input: DescribeDatastoreRequest,
  ): Effect.Effect<
    DescribeDatastoreResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeLoggingOptions(
    input: DescribeLoggingOptionsRequest,
  ): Effect.Effect<
    DescribeLoggingOptionsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describePipeline(
    input: DescribePipelineRequest,
  ): Effect.Effect<
    DescribePipelineResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getDatasetContent(
    input: GetDatasetContentRequest,
  ): Effect.Effect<
    GetDatasetContentResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listChannels(
    input: ListChannelsRequest,
  ): Effect.Effect<
    ListChannelsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listDatasetContents(
    input: ListDatasetContentsRequest,
  ): Effect.Effect<
    ListDatasetContentsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listDatasets(
    input: ListDatasetsRequest,
  ): Effect.Effect<
    ListDatasetsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listDatastores(
    input: ListDatastoresRequest,
  ): Effect.Effect<
    ListDatastoresResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listPipelines(
    input: ListPipelinesRequest,
  ): Effect.Effect<
    ListPipelinesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  putLoggingOptions(
    input: PutLoggingOptionsRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  runPipelineActivity(
    input: RunPipelineActivityRequest,
  ): Effect.Effect<
    RunPipelineActivityResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  sampleChannelData(
    input: SampleChannelDataRequest,
  ): Effect.Effect<
    SampleChannelDataResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  startPipelineReprocessing(
    input: StartPipelineReprocessingRequest,
  ): Effect.Effect<
    StartPipelineReprocessingResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateChannel(
    input: UpdateChannelRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDataset(
    input: UpdateDatasetRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDatastore(
    input: UpdateDatastoreRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updatePipeline(
    input: UpdatePipelineRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
}

export type Iotanalytics = AWSIoTAnalytics;

export type ActivityBatchSize = number;

export type ActivityName = string;

export interface AddAttributesActivity {
  name: string;
  attributes: Record<string, string>;
  next?: string;
}
export type AttributeName = string;

export type AttributeNameMapping = Record<string, string>;
export type AttributeNames = Array<string>;
export type BatchPutMessageErrorEntries = Array<BatchPutMessageErrorEntry>;
export interface BatchPutMessageErrorEntry {
  messageId?: string;
  errorCode?: string;
  errorMessage?: string;
}
export interface BatchPutMessageRequest {
  channelName: string;
  messages: Array<Message>;
}
export interface BatchPutMessageResponse {
  batchPutMessageErrorEntries?: Array<BatchPutMessageErrorEntry>;
}
export type BucketKeyExpression = string;

export type BucketName = string;

export interface CancelPipelineReprocessingRequest {
  pipelineName: string;
  reprocessingId: string;
}
export interface CancelPipelineReprocessingResponse {}
export interface Channel {
  name?: string;
  storage?: ChannelStorage;
  arn?: string;
  status?: ChannelStatus;
  retentionPeriod?: RetentionPeriod;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  lastMessageArrivalTime?: Date | string;
}
export interface ChannelActivity {
  name: string;
  channelName: string;
  next?: string;
}
export type ChannelArn = string;

export interface ChannelMessages {
  s3Paths?: Array<string>;
}
export type ChannelName = string;

export interface ChannelStatistics {
  size?: EstimatedResourceSize;
}
export type ChannelStatus = "CREATING" | "ACTIVE" | "DELETING";
export interface ChannelStorage {
  serviceManagedS3?: ServiceManagedChannelS3Storage;
  customerManagedS3?: CustomerManagedChannelS3Storage;
}
export interface ChannelStorageSummary {
  serviceManagedS3?: ServiceManagedChannelS3StorageSummary;
  customerManagedS3?: CustomerManagedChannelS3StorageSummary;
}
export type ChannelSummaries = Array<ChannelSummary>;
export interface ChannelSummary {
  channelName?: string;
  channelStorage?: ChannelStorageSummary;
  status?: ChannelStatus;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  lastMessageArrivalTime?: Date | string;
}
export interface Column {
  name: string;
  type: string;
}
export type ColumnDataType = string;

export type ColumnName = string;

export type Columns = Array<Column>;
export type ComputeType = "ACU_1" | "ACU_2";
export interface ContainerDatasetAction {
  image: string;
  executionRoleArn: string;
  resourceConfiguration: ResourceConfiguration;
  variables?: Array<Variable>;
}
export interface CreateChannelRequest {
  channelName: string;
  channelStorage?: ChannelStorage;
  retentionPeriod?: RetentionPeriod;
  tags?: Array<Tag>;
}
export interface CreateChannelResponse {
  channelName?: string;
  channelArn?: string;
  retentionPeriod?: RetentionPeriod;
}
export interface CreateDatasetContentRequest {
  datasetName: string;
  versionId?: string;
}
export interface CreateDatasetContentResponse {
  versionId?: string;
}
export interface CreateDatasetRequest {
  datasetName: string;
  actions: Array<DatasetAction>;
  triggers?: Array<DatasetTrigger>;
  contentDeliveryRules?: Array<DatasetContentDeliveryRule>;
  retentionPeriod?: RetentionPeriod;
  versioningConfiguration?: VersioningConfiguration;
  tags?: Array<Tag>;
  lateDataRules?: Array<LateDataRule>;
}
export interface CreateDatasetResponse {
  datasetName?: string;
  datasetArn?: string;
  retentionPeriod?: RetentionPeriod;
}
export interface CreateDatastoreRequest {
  datastoreName: string;
  datastoreStorage?: DatastoreStorage;
  retentionPeriod?: RetentionPeriod;
  tags?: Array<Tag>;
  fileFormatConfiguration?: FileFormatConfiguration;
  datastorePartitions?: DatastorePartitions;
}
export interface CreateDatastoreResponse {
  datastoreName?: string;
  datastoreArn?: string;
  retentionPeriod?: RetentionPeriod;
}
export interface CreatePipelineRequest {
  pipelineName: string;
  pipelineActivities: Array<PipelineActivity>;
  tags?: Array<Tag>;
}
export interface CreatePipelineResponse {
  pipelineName?: string;
  pipelineArn?: string;
}
export interface CustomerManagedChannelS3Storage {
  bucket: string;
  keyPrefix?: string;
  roleArn: string;
}
export interface CustomerManagedChannelS3StorageSummary {
  bucket?: string;
  keyPrefix?: string;
  roleArn?: string;
}
export interface CustomerManagedDatastoreS3Storage {
  bucket: string;
  keyPrefix?: string;
  roleArn: string;
}
export interface CustomerManagedDatastoreS3StorageSummary {
  bucket?: string;
  keyPrefix?: string;
  roleArn?: string;
}
export interface Dataset {
  name?: string;
  arn?: string;
  actions?: Array<DatasetAction>;
  triggers?: Array<DatasetTrigger>;
  contentDeliveryRules?: Array<DatasetContentDeliveryRule>;
  status?: DatasetStatus;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  retentionPeriod?: RetentionPeriod;
  versioningConfiguration?: VersioningConfiguration;
  lateDataRules?: Array<LateDataRule>;
}
export interface DatasetAction {
  actionName?: string;
  queryAction?: SqlQueryDatasetAction;
  containerAction?: ContainerDatasetAction;
}
export type DatasetActionName = string;

export type DatasetActions = Array<DatasetAction>;
export type DatasetActionSummaries = Array<DatasetActionSummary>;
export interface DatasetActionSummary {
  actionName?: string;
  actionType?: DatasetActionType;
}
export type DatasetActionType = "QUERY" | "CONTAINER";
export type DatasetArn = string;

export interface DatasetContentDeliveryDestination {
  iotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;
  s3DestinationConfiguration?: S3DestinationConfiguration;
}
export interface DatasetContentDeliveryRule {
  entryName?: string;
  destination: DatasetContentDeliveryDestination;
}
export type DatasetContentDeliveryRules = Array<DatasetContentDeliveryRule>;
export type DatasetContentState = "CREATING" | "SUCCEEDED" | "FAILED";
export interface DatasetContentStatus {
  state?: DatasetContentState;
  reason?: string;
}
export type DatasetContentSummaries = Array<DatasetContentSummary>;
export interface DatasetContentSummary {
  version?: string;
  status?: DatasetContentStatus;
  creationTime?: Date | string;
  scheduleTime?: Date | string;
  completionTime?: Date | string;
}
export type DatasetContentVersion = string;

export interface DatasetContentVersionValue {
  datasetName: string;
}
export type DatasetEntries = Array<DatasetEntry>;
export interface DatasetEntry {
  entryName?: string;
  dataURI?: string;
}
export type DatasetName = string;

export type DatasetStatus = "CREATING" | "ACTIVE" | "DELETING";
export type DatasetSummaries = Array<DatasetSummary>;
export interface DatasetSummary {
  datasetName?: string;
  status?: DatasetStatus;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  triggers?: Array<DatasetTrigger>;
  actions?: Array<DatasetActionSummary>;
}
export interface DatasetTrigger {
  schedule?: Schedule;
  dataset?: TriggeringDataset;
}
export type DatasetTriggers = Array<DatasetTrigger>;
export interface Datastore {
  name?: string;
  storage?: DatastoreStorage;
  arn?: string;
  status?: DatastoreStatus;
  retentionPeriod?: RetentionPeriod;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  lastMessageArrivalTime?: Date | string;
  fileFormatConfiguration?: FileFormatConfiguration;
  datastorePartitions?: DatastorePartitions;
}
export interface DatastoreActivity {
  name: string;
  datastoreName: string;
}
export type DatastoreArn = string;

export interface DatastoreIotSiteWiseMultiLayerStorage {
  customerManagedS3Storage: IotSiteWiseCustomerManagedDatastoreS3Storage;
}
export interface DatastoreIotSiteWiseMultiLayerStorageSummary {
  customerManagedS3Storage?: IotSiteWiseCustomerManagedDatastoreS3StorageSummary;
}
export type DatastoreName = string;

export interface DatastorePartition {
  attributePartition?: Partition;
  timestampPartition?: TimestampPartition;
}
export interface DatastorePartitions {
  partitions?: Array<DatastorePartition>;
}
export interface DatastoreStatistics {
  size?: EstimatedResourceSize;
}
export type DatastoreStatus = "CREATING" | "ACTIVE" | "DELETING";
export type DatastoreStorage =
  | { serviceManagedS3: ServiceManagedDatastoreS3Storage }
  | { customerManagedS3: CustomerManagedDatastoreS3Storage }
  | { iotSiteWiseMultiLayerStorage: DatastoreIotSiteWiseMultiLayerStorage };
export interface DatastoreStorageSummary {
  serviceManagedS3?: ServiceManagedDatastoreS3StorageSummary;
  customerManagedS3?: CustomerManagedDatastoreS3StorageSummary;
  iotSiteWiseMultiLayerStorage?: DatastoreIotSiteWiseMultiLayerStorageSummary;
}
export type DatastoreSummaries = Array<DatastoreSummary>;
export interface DatastoreSummary {
  datastoreName?: string;
  datastoreStorage?: DatastoreStorageSummary;
  status?: DatastoreStatus;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  lastMessageArrivalTime?: Date | string;
  fileFormatType?: FileFormatType;
  datastorePartitions?: DatastorePartitions;
}
export interface DeleteChannelRequest {
  channelName: string;
}
export interface DeleteDatasetContentRequest {
  datasetName: string;
  versionId?: string;
}
export interface DeleteDatasetRequest {
  datasetName: string;
}
export interface DeleteDatastoreRequest {
  datastoreName: string;
}
export interface DeletePipelineRequest {
  pipelineName: string;
}
export interface DeltaTime {
  offsetSeconds: number;
  timeExpression: string;
}
export interface DeltaTimeSessionWindowConfiguration {
  timeoutInMinutes: number;
}
export interface DescribeChannelRequest {
  channelName: string;
  includeStatistics?: boolean;
}
export interface DescribeChannelResponse {
  channel?: Channel;
  statistics?: ChannelStatistics;
}
export interface DescribeDatasetRequest {
  datasetName: string;
}
export interface DescribeDatasetResponse {
  dataset?: Dataset;
}
export interface DescribeDatastoreRequest {
  datastoreName: string;
  includeStatistics?: boolean;
}
export interface DescribeDatastoreResponse {
  datastore?: Datastore;
  statistics?: DatastoreStatistics;
}
export interface DescribeLoggingOptionsRequest {}
export interface DescribeLoggingOptionsResponse {
  loggingOptions?: LoggingOptions;
}
export interface DescribePipelineRequest {
  pipelineName: string;
}
export interface DescribePipelineResponse {
  pipeline?: Pipeline;
}
export interface DeviceRegistryEnrichActivity {
  name: string;
  attribute: string;
  thingName: string;
  roleArn: string;
  next?: string;
}
export interface DeviceShadowEnrichActivity {
  name: string;
  attribute: string;
  thingName: string;
  roleArn: string;
  next?: string;
}
export type DoubleValue = number;

export type EndTime = Date | string;

export type EntryName = string;

export type ErrorCode = string;

export type ErrorMessage = string;

export interface EstimatedResourceSize {
  estimatedSizeInBytes?: number;
  estimatedOn?: Date | string;
}
export interface FileFormatConfiguration {
  jsonConfiguration?: JsonConfiguration;
  parquetConfiguration?: ParquetConfiguration;
}
export type FileFormatType = "JSON" | "PARQUET";
export interface FilterActivity {
  name: string;
  filter: string;
  next?: string;
}
export type FilterExpression = string;

export interface GetDatasetContentRequest {
  datasetName: string;
  versionId?: string;
}
export interface GetDatasetContentResponse {
  entries?: Array<DatasetEntry>;
  timestamp?: Date | string;
  status?: DatasetContentStatus;
}
export interface GlueConfiguration {
  tableName: string;
  databaseName: string;
}
export type GlueDatabaseName = string;

export type GlueTableName = string;

export type Image = string;

export type IncludeStatisticsFlag = boolean;

export declare class InternalFailureException extends EffectData.TaggedError(
  "InternalFailureException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export interface IotEventsDestinationConfiguration {
  inputName: string;
  roleArn: string;
}
export type IotEventsInputName = string;

export interface IotSiteWiseCustomerManagedDatastoreS3Storage {
  bucket: string;
  keyPrefix?: string;
}
export interface IotSiteWiseCustomerManagedDatastoreS3StorageSummary {
  bucket?: string;
  keyPrefix?: string;
}
export interface JsonConfiguration {}
export interface LambdaActivity {
  name: string;
  lambdaName: string;
  batchSize: number;
  next?: string;
}
export type LambdaName = string;

export interface LateDataRule {
  ruleName?: string;
  ruleConfiguration: LateDataRuleConfiguration;
}
export interface LateDataRuleConfiguration {
  deltaTimeSessionWindowConfiguration?: DeltaTimeSessionWindowConfiguration;
}
export type LateDataRuleName = string;

export type LateDataRules = Array<LateDataRule>;
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListChannelsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListChannelsResponse {
  channelSummaries?: Array<ChannelSummary>;
  nextToken?: string;
}
export interface ListDatasetContentsRequest {
  datasetName: string;
  nextToken?: string;
  maxResults?: number;
  scheduledOnOrAfter?: Date | string;
  scheduledBefore?: Date | string;
}
export interface ListDatasetContentsResponse {
  datasetContentSummaries?: Array<DatasetContentSummary>;
  nextToken?: string;
}
export interface ListDatasetsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListDatasetsResponse {
  datasetSummaries?: Array<DatasetSummary>;
  nextToken?: string;
}
export interface ListDatastoresRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListDatastoresResponse {
  datastoreSummaries?: Array<DatastoreSummary>;
  nextToken?: string;
}
export interface ListPipelinesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListPipelinesResponse {
  pipelineSummaries?: Array<PipelineSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export type LoggingEnabled = boolean;

export type LoggingLevel = "ERROR";
export interface LoggingOptions {
  roleArn: string;
  level: LoggingLevel;
  enabled: boolean;
}
export type LogResult = string;

export interface MathActivity {
  name: string;
  attribute: string;
  math: string;
  next?: string;
}
export type MathExpression = string;

export type MaxMessages = number;

export type MaxResults = number;

export type MaxVersions = number;

export interface Message {
  messageId: string;
  payload: Uint8Array | string;
}
export type MessageId = string;

export type MessagePayload = Uint8Array | string;

export type MessagePayloads = Array<Uint8Array | string>;
export type Messages = Array<Message>;
export type NextToken = string;

export type OffsetSeconds = number;

export type OutputFileName = string;

export interface OutputFileUriValue {
  fileName: string;
}
export interface ParquetConfiguration {
  schemaDefinition?: SchemaDefinition;
}
export interface Partition {
  attributeName: string;
}
export type PartitionAttributeName = string;

export type Partitions = Array<DatastorePartition>;
export interface Pipeline {
  name?: string;
  arn?: string;
  activities?: Array<PipelineActivity>;
  reprocessingSummaries?: Array<ReprocessingSummary>;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
}
export type PipelineActivities = Array<PipelineActivity>;
export interface PipelineActivity {
  channel?: ChannelActivity;
  lambda?: LambdaActivity;
  datastore?: DatastoreActivity;
  addAttributes?: AddAttributesActivity;
  removeAttributes?: RemoveAttributesActivity;
  selectAttributes?: SelectAttributesActivity;
  filter?: FilterActivity;
  math?: MathActivity;
  deviceRegistryEnrich?: DeviceRegistryEnrichActivity;
  deviceShadowEnrich?: DeviceShadowEnrichActivity;
}
export type PipelineArn = string;

export type PipelineName = string;

export type PipelineSummaries = Array<PipelineSummary>;
export interface PipelineSummary {
  pipelineName?: string;
  reprocessingSummaries?: Array<ReprocessingSummary>;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
}
export type PresignedURI = string;

export interface PutLoggingOptionsRequest {
  loggingOptions: LoggingOptions;
}
export interface QueryFilter {
  deltaTime?: DeltaTime;
}
export type QueryFilters = Array<QueryFilter>;
export type Reason = string;

export interface RemoveAttributesActivity {
  name: string;
  attributes: Array<string>;
  next?: string;
}
export type ReprocessingId = string;

export type ReprocessingStatus =
  | "RUNNING"
  | "SUCCEEDED"
  | "CANCELLED"
  | "FAILED";
export type ReprocessingSummaries = Array<ReprocessingSummary>;
export interface ReprocessingSummary {
  id?: string;
  status?: ReprocessingStatus;
  creationTime?: Date | string;
}
export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceArn?: string;
}> {}
export type ResourceArn = string;

export type ResourceArn2 = string;

export interface ResourceConfiguration {
  computeType: ComputeType;
  volumeSizeInGB: number;
}
export type resourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface RetentionPeriod {
  unlimited?: boolean;
  numberOfDays?: number;
}
export type RetentionPeriodInDays = number;

export type RoleArn = string;

export interface RunPipelineActivityRequest {
  pipelineActivity: PipelineActivity;
  payloads: Array<Uint8Array | string>;
}
export interface RunPipelineActivityResponse {
  payloads?: Array<Uint8Array | string>;
  logResult?: string;
}
export interface S3DestinationConfiguration {
  bucket: string;
  key: string;
  glueConfiguration?: GlueConfiguration;
  roleArn: string;
}
export type S3KeyPrefix = string;

export type S3PathChannelMessage = string;

export type S3PathChannelMessages = Array<string>;
export interface SampleChannelDataRequest {
  channelName: string;
  maxMessages?: number;
  startTime?: Date | string;
  endTime?: Date | string;
}
export interface SampleChannelDataResponse {
  payloads?: Array<Uint8Array | string>;
}
export interface Schedule {
  expression?: string;
}
export type ScheduleExpression = string;

export interface SchemaDefinition {
  columns?: Array<Column>;
}
export interface SelectAttributesActivity {
  name: string;
  attributes: Array<string>;
  next?: string;
}
export interface ServiceManagedChannelS3Storage {}
export interface ServiceManagedChannelS3StorageSummary {}
export interface ServiceManagedDatastoreS3Storage {}
export interface ServiceManagedDatastoreS3StorageSummary {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export type SessionTimeoutInMinutes = number;

export type SizeInBytes = number;

export type SqlQuery = string;

export interface SqlQueryDatasetAction {
  sqlQuery: string;
  filters?: Array<QueryFilter>;
}
export interface StartPipelineReprocessingRequest {
  pipelineName: string;
  startTime?: Date | string;
  endTime?: Date | string;
  channelMessages?: ChannelMessages;
}
export interface StartPipelineReprocessingResponse {
  reprocessingId?: string;
}
export type StartTime = Date | string;

export type StringValue = string;

export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type TimeExpression = string;

export type Timestamp = Date | string;

export type TimestampFormat = string;

export interface TimestampPartition {
  attributeName: string;
  timestampFormat?: string;
}
export interface TriggeringDataset {
  name: string;
}
export type UnlimitedRetentionPeriod = boolean;

export type UnlimitedVersioning = boolean;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateChannelRequest {
  channelName: string;
  channelStorage?: ChannelStorage;
  retentionPeriod?: RetentionPeriod;
}
export interface UpdateDatasetRequest {
  datasetName: string;
  actions: Array<DatasetAction>;
  triggers?: Array<DatasetTrigger>;
  contentDeliveryRules?: Array<DatasetContentDeliveryRule>;
  retentionPeriod?: RetentionPeriod;
  versioningConfiguration?: VersioningConfiguration;
  lateDataRules?: Array<LateDataRule>;
}
export interface UpdateDatastoreRequest {
  datastoreName: string;
  retentionPeriod?: RetentionPeriod;
  datastoreStorage?: DatastoreStorage;
  fileFormatConfiguration?: FileFormatConfiguration;
}
export interface UpdatePipelineRequest {
  pipelineName: string;
  pipelineActivities: Array<PipelineActivity>;
}
export interface Variable {
  name: string;
  stringValue?: string;
  doubleValue?: number;
  datasetContentVersionValue?: DatasetContentVersionValue;
  outputFileUriValue?: OutputFileUriValue;
}
export type VariableName = string;

export type Variables = Array<Variable>;
export interface VersioningConfiguration {
  unlimited?: boolean;
  maxVersions?: number;
}
export type VolumeSizeInGB = number;

export declare namespace BatchPutMessage {
  export type Input = BatchPutMessageRequest;
  export type Output = BatchPutMessageResponse;
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
  export type Output = CancelPipelineReprocessingResponse;
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
  export type Output = CreateChannelResponse;
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
  export type Output = CreateDatasetResponse;
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
  export type Output = CreateDatasetContentResponse;
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
  export type Output = CreateDatastoreResponse;
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
  export type Output = CreatePipelineResponse;
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
  export type Output = DescribeChannelResponse;
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
  export type Output = DescribeDatasetResponse;
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
  export type Output = DescribeDatastoreResponse;
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
  export type Output = DescribeLoggingOptionsResponse;
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
  export type Output = DescribePipelineResponse;
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
  export type Output = GetDatasetContentResponse;
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
  export type Output = ListChannelsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDatasetContents {
  export type Input = ListDatasetContentsRequest;
  export type Output = ListDatasetContentsResponse;
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
  export type Output = ListDatasetsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDatastores {
  export type Input = ListDatastoresRequest;
  export type Output = ListDatastoresResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListPipelines {
  export type Input = ListPipelinesRequest;
  export type Output = ListPipelinesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
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
  export type Output = RunPipelineActivityResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SampleChannelData {
  export type Input = SampleChannelDataRequest;
  export type Output = SampleChannelDataResponse;
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
  export type Output = StartPipelineReprocessingResponse;
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
  export type Output = TagResourceResponse;
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
  export type Output = UntagResourceResponse;
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
