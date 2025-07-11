import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface KinesisAnalytics_20150814 {
  addApplicationCloudWatchLoggingOption(
    input: AddApplicationCloudWatchLoggingOptionRequest,
  ): Effect.Effect<
    AddApplicationCloudWatchLoggingOptionResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  addApplicationInput(
    input: AddApplicationInputRequest,
  ): Effect.Effect<
    AddApplicationInputResponse,
    | CodeValidationException
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  addApplicationInputProcessingConfiguration(
    input: AddApplicationInputProcessingConfigurationRequest,
  ): Effect.Effect<
    AddApplicationInputProcessingConfigurationResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  addApplicationOutput(
    input: AddApplicationOutputRequest,
  ): Effect.Effect<
    AddApplicationOutputResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  addApplicationReferenceDataSource(
    input: AddApplicationReferenceDataSourceRequest,
  ): Effect.Effect<
    AddApplicationReferenceDataSourceResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    CreateApplicationResponse,
    | CodeValidationException
    | ConcurrentModificationException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | TooManyTagsException
    | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    DeleteApplicationResponse,
    | ConcurrentModificationException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteApplicationCloudWatchLoggingOption(
    input: DeleteApplicationCloudWatchLoggingOptionRequest,
  ): Effect.Effect<
    DeleteApplicationCloudWatchLoggingOptionResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteApplicationInputProcessingConfiguration(
    input: DeleteApplicationInputProcessingConfigurationRequest,
  ): Effect.Effect<
    DeleteApplicationInputProcessingConfigurationResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteApplicationOutput(
    input: DeleteApplicationOutputRequest,
  ): Effect.Effect<
    DeleteApplicationOutputResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteApplicationReferenceDataSource(
    input: DeleteApplicationReferenceDataSourceRequest,
  ): Effect.Effect<
    DeleteApplicationReferenceDataSourceResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  describeApplication(
    input: DescribeApplicationRequest,
  ): Effect.Effect<
    DescribeApplicationResponse,
    ResourceNotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  discoverInputSchema(
    input: DiscoverInputSchemaRequest,
  ): Effect.Effect<
    DiscoverInputSchemaResponse,
    | InvalidArgumentException
    | ResourceProvisionedThroughputExceededException
    | ServiceUnavailableException
    | UnableToDetectSchemaException
    | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<ListApplicationsResponse, CommonAwsError>;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startApplication(
    input: StartApplicationRequest,
  ): Effect.Effect<
    StartApplicationResponse,
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  stopApplication(
    input: StopApplicationRequest,
  ): Effect.Effect<
    StopApplicationResponse,
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    UpdateApplicationResponse,
    | CodeValidationException
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
}

export type KinesisAnalytics = KinesisAnalytics_20150814;

export interface AddApplicationCloudWatchLoggingOptionRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  CloudWatchLoggingOption: CloudWatchLoggingOption;
}
export interface AddApplicationCloudWatchLoggingOptionResponse {}
export interface AddApplicationInputProcessingConfigurationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  InputId: string;
  InputProcessingConfiguration: InputProcessingConfiguration;
}
export interface AddApplicationInputProcessingConfigurationResponse {}
export interface AddApplicationInputRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  Input: Input;
}
export interface AddApplicationInputResponse {}
export interface AddApplicationOutputRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  Output: Output;
}
export interface AddApplicationOutputResponse {}
export interface AddApplicationReferenceDataSourceRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  ReferenceDataSource: ReferenceDataSource;
}
export interface AddApplicationReferenceDataSourceResponse {}
export type ApplicationCode = string;

export type ApplicationDescription = string;

export interface ApplicationDetail {
  ApplicationName: string;
  ApplicationDescription?: string;
  ApplicationARN: string;
  ApplicationStatus: ApplicationStatus;
  CreateTimestamp?: Date | string;
  LastUpdateTimestamp?: Date | string;
  InputDescriptions?: Array<InputDescription>;
  OutputDescriptions?: Array<OutputDescription>;
  ReferenceDataSourceDescriptions?: Array<ReferenceDataSourceDescription>;
  CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription>;
  ApplicationCode?: string;
  ApplicationVersionId: number;
}
export type ApplicationName = string;

export type ApplicationStatus =
  | "DELETING"
  | "STARTING"
  | "STOPPING"
  | "READY"
  | "RUNNING"
  | "UPDATING";
export type ApplicationSummaries = Array<ApplicationSummary>;
export interface ApplicationSummary {
  ApplicationName: string;
  ApplicationARN: string;
  ApplicationStatus: ApplicationStatus;
}
export interface ApplicationUpdate {
  InputUpdates?: Array<InputUpdate>;
  ApplicationCodeUpdate?: string;
  OutputUpdates?: Array<OutputUpdate>;
  ReferenceDataSourceUpdates?: Array<ReferenceDataSourceUpdate>;
  CloudWatchLoggingOptionUpdates?: Array<CloudWatchLoggingOptionUpdate>;
}
export type ApplicationVersionId = number;

export type BooleanObject = boolean;

export type BucketARN = string;

export interface CloudWatchLoggingOption {
  LogStreamARN: string;
  RoleARN: string;
}
export interface CloudWatchLoggingOptionDescription {
  CloudWatchLoggingOptionId?: string;
  LogStreamARN: string;
  RoleARN: string;
}
export type CloudWatchLoggingOptionDescriptions =
  Array<CloudWatchLoggingOptionDescription>;
export type CloudWatchLoggingOptions = Array<CloudWatchLoggingOption>;
export interface CloudWatchLoggingOptionUpdate {
  CloudWatchLoggingOptionId: string;
  LogStreamARNUpdate?: string;
  RoleARNUpdate?: string;
}
export type CloudWatchLoggingOptionUpdates =
  Array<CloudWatchLoggingOptionUpdate>;
export declare class CodeValidationException extends EffectData.TaggedError(
  "CodeValidationException",
)<{
  readonly message?: string;
}> {}
export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly message?: string;
}> {}
export interface CreateApplicationRequest {
  ApplicationName: string;
  ApplicationDescription?: string;
  Inputs?: Array<Input>;
  Outputs?: Array<Output>;
  CloudWatchLoggingOptions?: Array<CloudWatchLoggingOption>;
  ApplicationCode?: string;
  Tags?: Array<Tag>;
}
export interface CreateApplicationResponse {
  ApplicationSummary: ApplicationSummary;
}
export interface CSVMappingParameters {
  RecordRowDelimiter: string;
  RecordColumnDelimiter: string;
}
export interface DeleteApplicationCloudWatchLoggingOptionRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  CloudWatchLoggingOptionId: string;
}
export interface DeleteApplicationCloudWatchLoggingOptionResponse {}
export interface DeleteApplicationInputProcessingConfigurationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  InputId: string;
}
export interface DeleteApplicationInputProcessingConfigurationResponse {}
export interface DeleteApplicationOutputRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  OutputId: string;
}
export interface DeleteApplicationOutputResponse {}
export interface DeleteApplicationReferenceDataSourceRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  ReferenceId: string;
}
export interface DeleteApplicationReferenceDataSourceResponse {}
export interface DeleteApplicationRequest {
  ApplicationName: string;
  CreateTimestamp: Date | string;
}
export interface DeleteApplicationResponse {}
export interface DescribeApplicationRequest {
  ApplicationName: string;
}
export interface DescribeApplicationResponse {
  ApplicationDetail: ApplicationDetail;
}
export interface DestinationSchema {
  RecordFormatType: RecordFormatType;
}
export interface DiscoverInputSchemaRequest {
  ResourceARN?: string;
  RoleARN?: string;
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
  S3Configuration?: S3Configuration;
  InputProcessingConfiguration?: InputProcessingConfiguration;
}
export interface DiscoverInputSchemaResponse {
  InputSchema?: SourceSchema;
  ParsedInputRecords?: Array<Array<string>>;
  ProcessedInputRecords?: Array<string>;
  RawInputRecords?: Array<string>;
}
export type ErrorMessage = string;

export type FileKey = string;

export type Id = string;

export type InAppStreamName = string;

export type InAppStreamNames = Array<string>;
export type InAppTableName = string;

export interface Input {
  NamePrefix: string;
  InputProcessingConfiguration?: InputProcessingConfiguration;
  KinesisStreamsInput?: KinesisStreamsInput;
  KinesisFirehoseInput?: KinesisFirehoseInput;
  InputParallelism?: InputParallelism;
  InputSchema: SourceSchema;
}
export interface InputConfiguration {
  Id: string;
  InputStartingPositionConfiguration: InputStartingPositionConfiguration;
}
export type InputConfigurations = Array<InputConfiguration>;
export interface InputDescription {
  InputId?: string;
  NamePrefix?: string;
  InAppStreamNames?: Array<string>;
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
  KinesisStreamsInputDescription?: KinesisStreamsInputDescription;
  KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;
  InputSchema?: SourceSchema;
  InputParallelism?: InputParallelism;
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
}
export type InputDescriptions = Array<InputDescription>;
export interface InputLambdaProcessor {
  ResourceARN: string;
  RoleARN: string;
}
export interface InputLambdaProcessorDescription {
  ResourceARN?: string;
  RoleARN?: string;
}
export interface InputLambdaProcessorUpdate {
  ResourceARNUpdate?: string;
  RoleARNUpdate?: string;
}
export interface InputParallelism {
  Count?: number;
}
export type InputParallelismCount = number;

export interface InputParallelismUpdate {
  CountUpdate?: number;
}
export interface InputProcessingConfiguration {
  InputLambdaProcessor: InputLambdaProcessor;
}
export interface InputProcessingConfigurationDescription {
  InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
}
export interface InputProcessingConfigurationUpdate {
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate;
}
export type Inputs = Array<Input>;
export interface InputSchemaUpdate {
  RecordFormatUpdate?: RecordFormat;
  RecordEncodingUpdate?: string;
  RecordColumnUpdates?: Array<RecordColumn>;
}
export type InputStartingPosition =
  | "NOW"
  | "TRIM_HORIZON"
  | "LAST_STOPPED_POINT";
export interface InputStartingPositionConfiguration {
  InputStartingPosition?: InputStartingPosition;
}
export interface InputUpdate {
  InputId: string;
  NamePrefixUpdate?: string;
  InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;
  KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;
  KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;
  InputSchemaUpdate?: InputSchemaUpdate;
  InputParallelismUpdate?: InputParallelismUpdate;
}
export type InputUpdates = Array<InputUpdate>;
export declare class InvalidApplicationConfigurationException extends EffectData.TaggedError(
  "InvalidApplicationConfigurationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidArgumentException extends EffectData.TaggedError(
  "InvalidArgumentException",
)<{
  readonly message?: string;
}> {}
export interface JSONMappingParameters {
  RecordRowPath: string;
}
export type KinesisAnalyticsARN = string;

export interface KinesisFirehoseInput {
  ResourceARN: string;
  RoleARN: string;
}
export interface KinesisFirehoseInputDescription {
  ResourceARN?: string;
  RoleARN?: string;
}
export interface KinesisFirehoseInputUpdate {
  ResourceARNUpdate?: string;
  RoleARNUpdate?: string;
}
export interface KinesisFirehoseOutput {
  ResourceARN: string;
  RoleARN: string;
}
export interface KinesisFirehoseOutputDescription {
  ResourceARN?: string;
  RoleARN?: string;
}
export interface KinesisFirehoseOutputUpdate {
  ResourceARNUpdate?: string;
  RoleARNUpdate?: string;
}
export interface KinesisStreamsInput {
  ResourceARN: string;
  RoleARN: string;
}
export interface KinesisStreamsInputDescription {
  ResourceARN?: string;
  RoleARN?: string;
}
export interface KinesisStreamsInputUpdate {
  ResourceARNUpdate?: string;
  RoleARNUpdate?: string;
}
export interface KinesisStreamsOutput {
  ResourceARN: string;
  RoleARN: string;
}
export interface KinesisStreamsOutputDescription {
  ResourceARN?: string;
  RoleARN?: string;
}
export interface KinesisStreamsOutputUpdate {
  ResourceARNUpdate?: string;
  RoleARNUpdate?: string;
}
export interface LambdaOutput {
  ResourceARN: string;
  RoleARN: string;
}
export interface LambdaOutputDescription {
  ResourceARN?: string;
  RoleARN?: string;
}
export interface LambdaOutputUpdate {
  ResourceARNUpdate?: string;
  RoleARNUpdate?: string;
}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export type ListApplicationsInputLimit = number;

export interface ListApplicationsRequest {
  Limit?: number;
  ExclusiveStartApplicationName?: string;
}
export interface ListApplicationsResponse {
  ApplicationSummaries: Array<ApplicationSummary>;
  HasMoreApplications: boolean;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type LogStreamARN = string;

export interface MappingParameters {
  JSONMappingParameters?: JSONMappingParameters;
  CSVMappingParameters?: CSVMappingParameters;
}
export interface Output {
  Name: string;
  KinesisStreamsOutput?: KinesisStreamsOutput;
  KinesisFirehoseOutput?: KinesisFirehoseOutput;
  LambdaOutput?: LambdaOutput;
  DestinationSchema: DestinationSchema;
}
export interface OutputDescription {
  OutputId?: string;
  Name?: string;
  KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;
  KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;
  LambdaOutputDescription?: LambdaOutputDescription;
  DestinationSchema?: DestinationSchema;
}
export type OutputDescriptions = Array<OutputDescription>;
export type Outputs = Array<Output>;
export interface OutputUpdate {
  OutputId: string;
  NameUpdate?: string;
  KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;
  KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;
  LambdaOutputUpdate?: LambdaOutputUpdate;
  DestinationSchemaUpdate?: DestinationSchema;
}
export type OutputUpdates = Array<OutputUpdate>;
export type ParsedInputRecord = Array<string>;
export type ParsedInputRecordField = string;

export type ParsedInputRecords = Array<Array<string>>;
export type ProcessedInputRecord = string;

export type ProcessedInputRecords = Array<string>;
export type RawInputRecord = string;

export type RawInputRecords = Array<string>;
export interface RecordColumn {
  Name: string;
  Mapping?: string;
  SqlType: string;
}
export type RecordColumnDelimiter = string;

export type RecordColumnMapping = string;

export type RecordColumnName = string;

export type RecordColumns = Array<RecordColumn>;
export type RecordColumnSqlType = string;

export type RecordEncoding = string;

export interface RecordFormat {
  RecordFormatType: RecordFormatType;
  MappingParameters?: MappingParameters;
}
export type RecordFormatType = "JSON" | "CSV";
export type RecordRowDelimiter = string;

export type RecordRowPath = string;

export interface ReferenceDataSource {
  TableName: string;
  S3ReferenceDataSource?: S3ReferenceDataSource;
  ReferenceSchema: SourceSchema;
}
export interface ReferenceDataSourceDescription {
  ReferenceId: string;
  TableName: string;
  S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;
  ReferenceSchema?: SourceSchema;
}
export type ReferenceDataSourceDescriptions =
  Array<ReferenceDataSourceDescription>;
export interface ReferenceDataSourceUpdate {
  ReferenceId: string;
  TableNameUpdate?: string;
  S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;
  ReferenceSchemaUpdate?: SourceSchema;
}
export type ReferenceDataSourceUpdates = Array<ReferenceDataSourceUpdate>;
export type ResourceARN = string;

export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceProvisionedThroughputExceededException extends EffectData.TaggedError(
  "ResourceProvisionedThroughputExceededException",
)<{
  readonly message?: string;
}> {}
export type RoleARN = string;

export interface S3Configuration {
  RoleARN: string;
  BucketARN: string;
  FileKey: string;
}
export interface S3ReferenceDataSource {
  BucketARN: string;
  FileKey: string;
  ReferenceRoleARN: string;
}
export interface S3ReferenceDataSourceDescription {
  BucketARN: string;
  FileKey: string;
  ReferenceRoleARN: string;
}
export interface S3ReferenceDataSourceUpdate {
  BucketARNUpdate?: string;
  FileKeyUpdate?: string;
  ReferenceRoleARNUpdate?: string;
}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export interface SourceSchema {
  RecordFormat: RecordFormat;
  RecordEncoding?: string;
  RecordColumns: Array<RecordColumn>;
}
export interface StartApplicationRequest {
  ApplicationName: string;
  InputConfigurations: Array<InputConfiguration>;
}
export interface StartApplicationResponse {}
export interface StopApplicationRequest {
  ApplicationName: string;
}
export interface StopApplicationResponse {}
export interface Tag {
  Key: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type Tags = Array<Tag>;
export type TagValue = string;

export type Timestamp = Date | string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export declare class UnableToDetectSchemaException extends EffectData.TaggedError(
  "UnableToDetectSchemaException",
)<{
  readonly message?: string;
  readonly RawInputRecords?: Array<string>;
  readonly ProcessedInputRecords?: Array<string>;
}> {}
export declare class UnsupportedOperationException extends EffectData.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateApplicationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  ApplicationUpdate: ApplicationUpdate;
}
export interface UpdateApplicationResponse {}
export declare namespace AddApplicationCloudWatchLoggingOption {
  export type Input = AddApplicationCloudWatchLoggingOptionRequest;
  export type Output = AddApplicationCloudWatchLoggingOptionResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace AddApplicationInput {
  export type Input = AddApplicationInputRequest;
  export type Output = AddApplicationInputResponse;
  export type Error =
    | CodeValidationException
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace AddApplicationInputProcessingConfiguration {
  export type Input = AddApplicationInputProcessingConfigurationRequest;
  export type Output = AddApplicationInputProcessingConfigurationResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace AddApplicationOutput {
  export type Input = AddApplicationOutputRequest;
  export type Output = AddApplicationOutputResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace AddApplicationReferenceDataSource {
  export type Input = AddApplicationReferenceDataSourceRequest;
  export type Output = AddApplicationReferenceDataSourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = CreateApplicationResponse;
  export type Error =
    | CodeValidationException
    | ConcurrentModificationException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = DeleteApplicationResponse;
  export type Error =
    | ConcurrentModificationException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteApplicationCloudWatchLoggingOption {
  export type Input = DeleteApplicationCloudWatchLoggingOptionRequest;
  export type Output = DeleteApplicationCloudWatchLoggingOptionResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteApplicationInputProcessingConfiguration {
  export type Input = DeleteApplicationInputProcessingConfigurationRequest;
  export type Output = DeleteApplicationInputProcessingConfigurationResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteApplicationOutput {
  export type Input = DeleteApplicationOutputRequest;
  export type Output = DeleteApplicationOutputResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteApplicationReferenceDataSource {
  export type Input = DeleteApplicationReferenceDataSourceRequest;
  export type Output = DeleteApplicationReferenceDataSourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeApplication {
  export type Input = DescribeApplicationRequest;
  export type Output = DescribeApplicationResponse;
  export type Error =
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DiscoverInputSchema {
  export type Input = DiscoverInputSchemaRequest;
  export type Output = DiscoverInputSchemaResponse;
  export type Error =
    | InvalidArgumentException
    | ResourceProvisionedThroughputExceededException
    | ServiceUnavailableException
    | UnableToDetectSchemaException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = ListApplicationsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartApplication {
  export type Input = StartApplicationRequest;
  export type Output = StartApplicationResponse;
  export type Error =
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StopApplication {
  export type Input = StopApplicationRequest;
  export type Output = StopApplicationResponse;
  export type Error =
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = UpdateApplicationResponse;
  export type Error =
    | CodeValidationException
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}
