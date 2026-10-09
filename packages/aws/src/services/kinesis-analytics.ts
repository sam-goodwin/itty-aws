import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const ns = /*@__PURE__*/ T.XmlNamespace("http://analytics.kinesis.amazonaws.com/doc/2015-08-14");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Kinesis Analytics",
  serviceShapeName: "KinesisAnalytics_20150814",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "kinesisanalytics" });
const ver = /*@__PURE__*/ T.ServiceVersion("2015-08-14");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://kinesisanalytics-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://kinesisanalytics-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://kinesisanalytics.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://kinesisanalytics.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class CodeValidationException
  extends /*@__PURE__*/ S.TaggedError<CodeValidationException>()("CodeValidationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InvalidApplicationConfigurationException
  extends /*@__PURE__*/ S.TaggedError<InvalidApplicationConfigurationException>()(
    "InvalidApplicationConfigurationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidArgumentException
  extends /*@__PURE__*/ S.TaggedError<InvalidArgumentException>()("InvalidArgumentException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()("LimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()("ResourceInUseException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ResourceProvisionedThroughputExceededException
  extends /*@__PURE__*/ S.TaggedError<ResourceProvisionedThroughputExceededException>()(
    "ResourceProvisionedThroughputExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()("TooManyTagsException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class UnableToDetectSchemaException
  extends /*@__PURE__*/ S.TaggedError<UnableToDetectSchemaException>()(
    "UnableToDetectSchemaException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RawInputRecords: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(36)).annotate({ identifier: "RawInputRecords" }),
      ),
      ProcessedInputRecords: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(36)).annotate({
          identifier: "ProcessedInputRecords",
        }),
      ),
    },
  ) {}
export class UnsupportedOperationException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedOperationException>()(
    "UnsupportedOperationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export type ApplicationName = string;
export type ApplicationVersionId = number;
export type LogStreamARN = string;
export type RoleARN = string;
export interface CloudWatchLoggingOption {
  LogStreamARN: string;
  RoleARN: string;
}
export interface AddApplicationCloudWatchLoggingOptionRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  CloudWatchLoggingOption: CloudWatchLoggingOption;
}
export interface AddApplicationCloudWatchLoggingOptionResponse {}
export type InAppStreamName = string;
export type ResourceARN = string;
export interface InputLambdaProcessor {
  ResourceARN: string;
  RoleARN: string;
}
export interface InputProcessingConfiguration {
  InputLambdaProcessor: InputLambdaProcessor;
}
export interface KinesisStreamsInput {
  ResourceARN: string;
  RoleARN: string;
}
export interface KinesisFirehoseInput {
  ResourceARN: string;
  RoleARN: string;
}
export type InputParallelismCount = number;
export interface InputParallelism {
  Count?: number;
}
export type RecordFormatType = "JSON" | "CSV" | (string & {});
export type RecordRowPath = string;
export interface JSONMappingParameters {
  RecordRowPath: string;
}
export type RecordRowDelimiter = string;
export type RecordColumnDelimiter = string;
export interface CSVMappingParameters {
  RecordRowDelimiter: string;
  RecordColumnDelimiter: string;
}
export interface MappingParameters {
  JSONMappingParameters?: JSONMappingParameters;
  CSVMappingParameters?: CSVMappingParameters;
}
export interface RecordFormat {
  RecordFormatType: RecordFormatType;
  MappingParameters?: MappingParameters;
}
export type RecordEncoding = string;
export type RecordColumnName = string;
export type RecordColumnMapping = string;
export type RecordColumnSqlType = string;
export interface RecordColumn {
  Name: string;
  Mapping?: string;
  SqlType: string;
}
export type RecordColumns = RecordColumn[];
export interface SourceSchema {
  RecordFormat: RecordFormat;
  RecordEncoding?: string;
  RecordColumns: RecordColumn[];
}
export interface Input {
  NamePrefix: string;
  InputProcessingConfiguration?: InputProcessingConfiguration;
  KinesisStreamsInput?: KinesisStreamsInput;
  KinesisFirehoseInput?: KinesisFirehoseInput;
  InputParallelism?: InputParallelism;
  InputSchema: SourceSchema;
}
export interface AddApplicationInputRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  Input: Input;
}
export interface AddApplicationInputResponse {}
export type Id = string;
export interface AddApplicationInputProcessingConfigurationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  InputId: string;
  InputProcessingConfiguration: InputProcessingConfiguration;
}
export interface AddApplicationInputProcessingConfigurationResponse {}
export interface KinesisStreamsOutput {
  ResourceARN: string;
  RoleARN: string;
}
export interface KinesisFirehoseOutput {
  ResourceARN: string;
  RoleARN: string;
}
export interface LambdaOutput {
  ResourceARN: string;
  RoleARN: string;
}
export interface DestinationSchema {
  RecordFormatType: RecordFormatType;
}
export interface Output {
  Name: string;
  KinesisStreamsOutput?: KinesisStreamsOutput;
  KinesisFirehoseOutput?: KinesisFirehoseOutput;
  LambdaOutput?: LambdaOutput;
  DestinationSchema: DestinationSchema;
}
export interface AddApplicationOutputRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  Output: Output;
}
export interface AddApplicationOutputResponse {}
export type InAppTableName = string;
export type BucketARN = string;
export type FileKey = string;
export interface S3ReferenceDataSource {
  BucketARN: string;
  FileKey: string;
  ReferenceRoleARN: string;
}
export interface ReferenceDataSource {
  TableName: string;
  S3ReferenceDataSource?: S3ReferenceDataSource;
  ReferenceSchema: SourceSchema;
}
export interface AddApplicationReferenceDataSourceRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  ReferenceDataSource: ReferenceDataSource;
}
export interface AddApplicationReferenceDataSourceResponse {}
export type ApplicationDescription = string;
export type Inputs = Input[];
export type Outputs = Output[];
export type CloudWatchLoggingOptions = CloudWatchLoggingOption[];
export type ApplicationCode = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value?: string;
}
export type Tags = Tag[];
export interface CreateApplicationRequest {
  ApplicationName: string;
  ApplicationDescription?: string;
  Inputs?: Input[];
  Outputs?: Output[];
  CloudWatchLoggingOptions?: CloudWatchLoggingOption[];
  ApplicationCode?: string;
  Tags?: Tag[];
}
export type ApplicationStatus =
  | "DELETING"
  | "STARTING"
  | "STOPPING"
  | "READY"
  | "RUNNING"
  | "UPDATING"
  | (string & {});
export interface ApplicationSummary {
  ApplicationName: string;
  ApplicationARN: string;
  ApplicationStatus: ApplicationStatus;
}
export interface CreateApplicationResponse {
  ApplicationSummary: ApplicationSummary;
}
export interface DeleteApplicationRequest {
  ApplicationName: string;
  CreateTimestamp: Date;
}
export interface DeleteApplicationResponse {}
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
export interface DescribeApplicationRequest {
  ApplicationName: string;
}
export type InAppStreamNames = string[];
export interface InputLambdaProcessorDescription {
  ResourceARN?: string;
  RoleARN?: string;
}
export interface InputProcessingConfigurationDescription {
  InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
}
export interface KinesisStreamsInputDescription {
  ResourceARN?: string;
  RoleARN?: string;
}
export interface KinesisFirehoseInputDescription {
  ResourceARN?: string;
  RoleARN?: string;
}
export type InputStartingPosition = "NOW" | "TRIM_HORIZON" | "LAST_STOPPED_POINT" | (string & {});
export interface InputStartingPositionConfiguration {
  InputStartingPosition?: InputStartingPosition;
}
export interface InputDescription {
  InputId?: string;
  NamePrefix?: string;
  InAppStreamNames?: string[];
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
  KinesisStreamsInputDescription?: KinesisStreamsInputDescription;
  KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;
  InputSchema?: SourceSchema;
  InputParallelism?: InputParallelism;
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
}
export type InputDescriptions = InputDescription[];
export interface KinesisStreamsOutputDescription {
  ResourceARN?: string;
  RoleARN?: string;
}
export interface KinesisFirehoseOutputDescription {
  ResourceARN?: string;
  RoleARN?: string;
}
export interface LambdaOutputDescription {
  ResourceARN?: string;
  RoleARN?: string;
}
export interface OutputDescription {
  OutputId?: string;
  Name?: string;
  KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;
  KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;
  LambdaOutputDescription?: LambdaOutputDescription;
  DestinationSchema?: DestinationSchema;
}
export type OutputDescriptions = OutputDescription[];
export interface S3ReferenceDataSourceDescription {
  BucketARN: string;
  FileKey: string;
  ReferenceRoleARN: string;
}
export interface ReferenceDataSourceDescription {
  ReferenceId: string;
  TableName: string;
  S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;
  ReferenceSchema?: SourceSchema;
}
export type ReferenceDataSourceDescriptions = ReferenceDataSourceDescription[];
export interface CloudWatchLoggingOptionDescription {
  CloudWatchLoggingOptionId?: string;
  LogStreamARN: string;
  RoleARN: string;
}
export type CloudWatchLoggingOptionDescriptions = CloudWatchLoggingOptionDescription[];
export interface ApplicationDetail {
  ApplicationName: string;
  ApplicationDescription?: string;
  ApplicationARN: string;
  ApplicationStatus: ApplicationStatus;
  CreateTimestamp?: Date;
  LastUpdateTimestamp?: Date;
  InputDescriptions?: InputDescription[];
  OutputDescriptions?: OutputDescription[];
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
  ApplicationCode?: string;
  ApplicationVersionId: number;
}
export interface DescribeApplicationResponse {
  ApplicationDetail: ApplicationDetail;
}
export interface S3Configuration {
  RoleARN: string;
  BucketARN: string;
  FileKey: string;
}
export interface DiscoverInputSchemaRequest {
  ResourceARN?: string;
  RoleARN?: string;
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
  S3Configuration?: S3Configuration;
  InputProcessingConfiguration?: InputProcessingConfiguration;
}
export type ParsedInputRecordField = string;
export type ParsedInputRecord = string[];
export type ParsedInputRecords = string[][];
export type ProcessedInputRecord = string;
export type ProcessedInputRecords = string[];
export type RawInputRecord = string;
export type RawInputRecords = string[];
export interface DiscoverInputSchemaResponse {
  InputSchema?: SourceSchema;
  ParsedInputRecords?: string[][];
  ProcessedInputRecords?: string[];
  RawInputRecords?: string[];
}
export type ListApplicationsInputLimit = number;
export interface ListApplicationsRequest {
  Limit?: number;
  ExclusiveStartApplicationName?: string;
}
export type ApplicationSummaries = ApplicationSummary[];
export interface ListApplicationsResponse {
  ApplicationSummaries: ApplicationSummary[];
  HasMoreApplications: boolean;
}
export type KinesisAnalyticsARN = string;
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export interface InputConfiguration {
  Id: string;
  InputStartingPositionConfiguration: InputStartingPositionConfiguration;
}
export type InputConfigurations = InputConfiguration[];
export interface StartApplicationRequest {
  ApplicationName: string;
  InputConfigurations: InputConfiguration[];
}
export interface StartApplicationResponse {}
export interface StopApplicationRequest {
  ApplicationName: string;
}
export interface StopApplicationResponse {}
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeys = string[];
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface InputLambdaProcessorUpdate {
  ResourceARNUpdate?: string;
  RoleARNUpdate?: string;
}
export interface InputProcessingConfigurationUpdate {
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate;
}
export interface KinesisStreamsInputUpdate {
  ResourceARNUpdate?: string;
  RoleARNUpdate?: string;
}
export interface KinesisFirehoseInputUpdate {
  ResourceARNUpdate?: string;
  RoleARNUpdate?: string;
}
export interface InputSchemaUpdate {
  RecordFormatUpdate?: RecordFormat;
  RecordEncodingUpdate?: string;
  RecordColumnUpdates?: RecordColumn[];
}
export interface InputParallelismUpdate {
  CountUpdate?: number;
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
export type InputUpdates = InputUpdate[];
export interface KinesisStreamsOutputUpdate {
  ResourceARNUpdate?: string;
  RoleARNUpdate?: string;
}
export interface KinesisFirehoseOutputUpdate {
  ResourceARNUpdate?: string;
  RoleARNUpdate?: string;
}
export interface LambdaOutputUpdate {
  ResourceARNUpdate?: string;
  RoleARNUpdate?: string;
}
export interface OutputUpdate {
  OutputId: string;
  NameUpdate?: string;
  KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;
  KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;
  LambdaOutputUpdate?: LambdaOutputUpdate;
  DestinationSchemaUpdate?: DestinationSchema;
}
export type OutputUpdates = OutputUpdate[];
export interface S3ReferenceDataSourceUpdate {
  BucketARNUpdate?: string;
  FileKeyUpdate?: string;
  ReferenceRoleARNUpdate?: string;
}
export interface ReferenceDataSourceUpdate {
  ReferenceId: string;
  TableNameUpdate?: string;
  S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;
  ReferenceSchemaUpdate?: SourceSchema;
}
export type ReferenceDataSourceUpdates = ReferenceDataSourceUpdate[];
export interface CloudWatchLoggingOptionUpdate {
  CloudWatchLoggingOptionId: string;
  LogStreamARNUpdate?: string;
  RoleARNUpdate?: string;
}
export type CloudWatchLoggingOptionUpdates = CloudWatchLoggingOptionUpdate[];
export interface ApplicationUpdate {
  InputUpdates?: InputUpdate[];
  ApplicationCodeUpdate?: string;
  OutputUpdates?: OutputUpdate[];
  ReferenceDataSourceUpdates?: ReferenceDataSourceUpdate[];
  CloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];
}
export interface UpdateApplicationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  ApplicationUpdate: ApplicationUpdate;
}
export interface UpdateApplicationResponse {}
export type ErrorMessage = string;
export type AddApplicationCloudWatchLoggingOptionError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Adds a CloudWatch log stream to monitor application configuration errors. For more
 * information about using CloudWatch log streams with Amazon Kinesis Analytics
 * applications, see Working with Amazon
 * CloudWatch Logs.
 */
export const addApplicationCloudWatchLoggingOption: API.OperationMethod<
  AddApplicationCloudWatchLoggingOptionRequest,
  AddApplicationCloudWatchLoggingOptionResponse,
  AddApplicationCloudWatchLoggingOptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1) as any as S.Schema<AddApplicationCloudWatchLoggingOptionRequest>,
  output: __S(2) as any as S.Schema<AddApplicationCloudWatchLoggingOptionResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddApplicationCloudWatchLoggingOption",
}));

export type AddApplicationInputError =
  | CodeValidationException
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Adds a streaming source to your Amazon Kinesis application.
 * For conceptual information,
 * see Configuring Application Input.
 *
 * You can add a streaming source either when you create an application or you can use
 * this operation to add a streaming source after you create an application. For more information, see
 * CreateApplication.
 *
 * Any configuration update, including adding a streaming source using this operation,
 * results in a new version of the application. You can use the DescribeApplication operation
 * to find the current application version.
 *
 * This operation requires permissions to perform the
 * `kinesisanalytics:AddApplicationInput` action.
 */
export const addApplicationInput: API.OperationMethod<
  AddApplicationInputRequest,
  AddApplicationInputResponse,
  AddApplicationInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<AddApplicationInputRequest>,
  output: __S(2) as any as S.Schema<AddApplicationInputResponse>,
  errors: [
    CodeValidationException,
    ConcurrentModificationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddApplicationInput",
}));

export type AddApplicationInputProcessingConfigurationError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Adds an InputProcessingConfiguration to an application. An input processor preprocesses records on the input stream
 * before the application's SQL code executes. Currently, the only input processor available is
 * AWS Lambda.
 */
export const addApplicationInputProcessingConfiguration: API.OperationMethod<
  AddApplicationInputProcessingConfigurationRequest,
  AddApplicationInputProcessingConfigurationResponse,
  AddApplicationInputProcessingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<AddApplicationInputProcessingConfigurationRequest>,
  output: __S(2) as any as S.Schema<AddApplicationInputProcessingConfigurationResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddApplicationInputProcessingConfiguration",
}));

export type AddApplicationOutputError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Adds an external destination to your Amazon Kinesis Analytics application.
 *
 * If you want Amazon Kinesis Analytics to deliver data from an in-application stream
 * within your application to an external destination (such as an Amazon Kinesis stream, an
 * Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the
 * relevant configuration to your application using this operation. You can configure one
 * or more outputs for your application. Each output configuration maps an in-application
 * stream and an external destination.
 *
 * You can use one of the output configurations to deliver data from your
 * in-application error stream to an external destination so that you can analyze the
 * errors. For more information, see Understanding Application
 * Output (Destination).
 *
 * Any configuration update, including adding a streaming source using this
 * operation, results in a new version of the application. You can use the DescribeApplication operation to find the current application
 * version.
 *
 * For the limits on the number of application inputs and outputs
 * you can configure, see Limits.
 *
 * This operation requires permissions to perform the `kinesisanalytics:AddApplicationOutput` action.
 */
export const addApplicationOutput: API.OperationMethod<
  AddApplicationOutputRequest,
  AddApplicationOutputResponse,
  AddApplicationOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18) as any as S.Schema<AddApplicationOutputRequest>,
  output: __S(2) as any as S.Schema<AddApplicationOutputResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddApplicationOutput",
}));

export type AddApplicationReferenceDataSourceError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Adds a reference data source to an existing application.
 *
 * Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.
 *
 * For conceptual information,
 * see Configuring Application Input.
 * For the limits on data sources you can add to your application, see
 * Limits.
 *
 * This operation requires permissions to perform the `kinesisanalytics:AddApplicationOutput` action.
 */
export const addApplicationReferenceDataSource: API.OperationMethod<
  AddApplicationReferenceDataSourceRequest,
  AddApplicationReferenceDataSourceResponse,
  AddApplicationReferenceDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21) as any as S.Schema<AddApplicationReferenceDataSourceRequest>,
  output: __S(2) as any as S.Schema<AddApplicationReferenceDataSourceResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddApplicationReferenceDataSource",
}));

export type CreateApplicationError =
  | CodeValidationException
  | ConcurrentModificationException
  | InvalidArgumentException
  | LimitExceededException
  | ResourceInUseException
  | TooManyTagsException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Creates an Amazon Kinesis Analytics application.
 * You can configure each application with one streaming source as input,
 * application code to process the input, and up to
 * three destinations where
 * you want Amazon Kinesis Analytics to write the output data from your application.
 * For an overview, see
 * How it Works.
 *
 * In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a
 * data element in the streaming source.
 *
 * Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps.
 *
 * In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations.
 *
 * To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics
 * needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the
 * `kinesisanalytics:CreateApplication` action.
 *
 * For introductory exercises to create an Amazon Kinesis Analytics application, see
 * Getting Started.
 */
export const createApplication: API.OperationMethod<
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27) as any as S.Schema<CreateApplicationRequest>,
  output: __S(29) as any as S.Schema<CreateApplicationResponse>,
  errors: [
    CodeValidationException,
    ConcurrentModificationException,
    InvalidArgumentException,
    LimitExceededException,
    ResourceInUseException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplication",
}));

export type DeleteApplicationError =
  | ConcurrentModificationException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code).
 *
 * This operation requires permissions to perform the `kinesisanalytics:DeleteApplication` action.
 */
export const deleteApplication: API.OperationMethod<
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30) as any as S.Schema<DeleteApplicationRequest>,
  output: __S(2) as any as S.Schema<DeleteApplicationResponse>,
  errors: [
    ConcurrentModificationException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplication",
}));

export type DeleteApplicationCloudWatchLoggingOptionError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Deletes a CloudWatch log stream from an application. For more information about
 * using CloudWatch log streams with Amazon Kinesis Analytics applications, see
 * Working with Amazon CloudWatch Logs.
 */
export const deleteApplicationCloudWatchLoggingOption: API.OperationMethod<
  DeleteApplicationCloudWatchLoggingOptionRequest,
  DeleteApplicationCloudWatchLoggingOptionResponse,
  DeleteApplicationCloudWatchLoggingOptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31) as any as S.Schema<DeleteApplicationCloudWatchLoggingOptionRequest>,
  output: __S(2) as any as S.Schema<DeleteApplicationCloudWatchLoggingOptionResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplicationCloudWatchLoggingOption",
}));

export type DeleteApplicationInputProcessingConfigurationError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Deletes an InputProcessingConfiguration from an input.
 */
export const deleteApplicationInputProcessingConfiguration: API.OperationMethod<
  DeleteApplicationInputProcessingConfigurationRequest,
  DeleteApplicationInputProcessingConfigurationResponse,
  DeleteApplicationInputProcessingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32) as any as S.Schema<DeleteApplicationInputProcessingConfigurationRequest>,
  output: __S(2) as any as S.Schema<DeleteApplicationInputProcessingConfigurationResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplicationInputProcessingConfiguration",
}));

export type DeleteApplicationOutputError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination.
 *
 * This operation requires permissions to perform the
 * `kinesisanalytics:DeleteApplicationOutput` action.
 */
export const deleteApplicationOutput: API.OperationMethod<
  DeleteApplicationOutputRequest,
  DeleteApplicationOutputResponse,
  DeleteApplicationOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33) as any as S.Schema<DeleteApplicationOutputRequest>,
  output: __S(2) as any as S.Schema<DeleteApplicationOutputResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplicationOutput",
}));

export type DeleteApplicationReferenceDataSourceError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Deletes a reference data source configuration from the specified application configuration.
 *
 * If the application is running, Amazon Kinesis Analytics immediately removes the in-application table
 * that you created using the AddApplicationReferenceDataSource operation.
 *
 * This operation requires permissions to perform the `kinesisanalytics.DeleteApplicationReferenceDataSource`
 * action.
 */
export const deleteApplicationReferenceDataSource: API.OperationMethod<
  DeleteApplicationReferenceDataSourceRequest,
  DeleteApplicationReferenceDataSourceResponse,
  DeleteApplicationReferenceDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34) as any as S.Schema<DeleteApplicationReferenceDataSourceRequest>,
  output: __S(2) as any as S.Schema<DeleteApplicationReferenceDataSourceResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplicationReferenceDataSource",
}));

export type DescribeApplicationError =
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Returns information about a specific Amazon Kinesis Analytics application.
 *
 * If you want to retrieve a list of all applications in your account,
 * use the ListApplications operation.
 *
 * This operation requires permissions to perform the `kinesisanalytics:DescribeApplication`
 * action. You can use `DescribeApplication` to get the current application versionId, which you need to call other
 * operations such as `Update`.
 */
export const describeApplication: API.OperationMethod<
  DescribeApplicationRequest,
  DescribeApplicationResponse,
  DescribeApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35) as any as S.Schema<DescribeApplicationRequest>,
  output: __S(51) as any as S.Schema<DescribeApplicationResponse>,
  errors: [ResourceNotFoundException, UnsupportedOperationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplication",
}));

export type DiscoverInputSchemaError =
  | InvalidArgumentException
  | ResourceProvisionedThroughputExceededException
  | ServiceUnavailableException
  | UnableToDetectSchemaException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream) or S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.
 *
 * You can use the inferred schema when configuring a streaming source
 * for your application. For conceptual information,
 * see Configuring Application Input.
 * Note that when you create an application using the Amazon Kinesis Analytics console,
 * the console uses this operation to infer a schema and show it in the console user interface.
 *
 * This operation requires permissions to perform the
 * `kinesisanalytics:DiscoverInputSchema` action.
 */
export const discoverInputSchema: API.OperationMethod<
  DiscoverInputSchemaRequest,
  DiscoverInputSchemaResponse,
  DiscoverInputSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53) as any as S.Schema<DiscoverInputSchemaRequest>,
  output: __S(55) as any as S.Schema<DiscoverInputSchemaResponse>,
  errors: [
    InvalidArgumentException,
    ResourceProvisionedThroughputExceededException,
    ServiceUnavailableException,
    UnableToDetectSchemaException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DiscoverInputSchema",
}));

export type ListApplicationsError = CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Returns a list of Amazon Kinesis Analytics applications in your account.
 * For each application, the response includes the application name,
 * Amazon Resource Name (ARN), and status.
 *
 * If the response returns the `HasMoreApplications` value as true,
 * you can send another request by adding the
 * `ExclusiveStartApplicationName` in the request body, and
 * set the value of this to the last application name from
 * the previous response.
 *
 * If you want detailed information about a specific application, use
 * DescribeApplication.
 *
 * This operation requires permissions to perform the
 * `kinesisanalytics:ListApplications` action.
 */
export const listApplications: API.OperationMethod<
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56) as any as S.Schema<ListApplicationsRequest>,
  output: __S(58) as any as S.Schema<ListApplicationsResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplications",
}));

export type ListTagsForResourceError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves the list of key-value tags assigned to the application. For more information, see Using Tagging.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(60) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [ConcurrentModificationException, InvalidArgumentException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type StartApplicationError =
  | InvalidApplicationConfigurationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application.
 *
 * After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.
 *
 * The application status must be `READY` for you to start an application. You can
 * get the application status in the console or using the DescribeApplication operation.
 *
 * After you start the application, you can stop the application from processing
 * the input by calling the StopApplication operation.
 *
 * This operation requires permissions to perform the
 * `kinesisanalytics:StartApplication` action.
 */
export const startApplication: API.OperationMethod<
  StartApplicationRequest,
  StartApplicationResponse,
  StartApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63) as any as S.Schema<StartApplicationRequest>,
  output: __S(64) as any as S.Schema<StartApplicationResponse>,
  errors: [
    InvalidApplicationConfigurationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartApplication",
}));

export type StopApplicationError =
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Stops the application from processing input data. You can stop
 * an application only if it is in the running state.
 * You can use the DescribeApplication operation to find the application state.
 * After the application is stopped,
 * Amazon Kinesis Analytics stops reading data from the input, the
 * application stops processing data, and there is no output written to the destination.
 *
 * This operation requires permissions to perform the
 * `kinesisanalytics:StopApplication` action.
 */
export const stopApplication: API.OperationMethod<
  StopApplicationRequest,
  StopApplicationResponse,
  StopApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65) as any as S.Schema<StopApplicationRequest>,
  output: __S(64) as any as S.Schema<StopApplicationResponse>,
  errors: [ResourceInUseException, ResourceNotFoundException, UnsupportedOperationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopApplication",
}));

export type TagResourceError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | TooManyTagsException
  | CommonErrors;
/**
 * Adds one or more key-value tags to a Kinesis Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
 * For more information, see Using Tagging.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66) as any as S.Schema<TagResourceRequest>,
  output: __S(67) as any as S.Schema<TagResourceResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | TooManyTagsException
  | CommonErrors;
/**
 * Removes one or more tags from a Kinesis Analytics application. For more information, see Using Tagging.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68) as any as S.Schema<UntagResourceRequest>,
  output: __S(67) as any as S.Schema<UntagResourceResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateApplicationError =
  | CodeValidationException
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.
 *
 * Updates an existing Amazon Kinesis Analytics application. Using this API,
 * you can update application code, input configuration, and
 * output configuration.
 *
 * Note that Amazon Kinesis Analytics updates the `CurrentApplicationVersionId`
 * each time you update your application.
 *
 * This operation requires permission for the
 * `kinesisanalytics:UpdateApplication` action.
 */
export const updateApplication: API.OperationMethod<
  UpdateApplicationRequest,
  UpdateApplicationResponse,
  UpdateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84) as any as S.Schema<UpdateApplicationRequest>,
  output: __S(2) as any as S.Schema<UpdateApplicationResponse>,
  errors: [
    CodeValidationException,
    ConcurrentModificationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplication",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ LogStreamARN: S.String, RoleARN: S.String })).annotate({
        identifier: "CloudWatchLoggingOption",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          CloudWatchLoggingOption: __S(0),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddApplicationCloudWatchLoggingOptionRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddApplicationCloudWatchLoggingOptionResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ ResourceARN: S.String, RoleARN: S.String })).annotate({
        identifier: "InputLambdaProcessor",
      });
    case 4:
      return S.suspend(() => S.Struct({ InputLambdaProcessor: __S(3) })).annotate({
        identifier: "InputProcessingConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ Count: S.optional(S.Number) })).annotate({
        identifier: "InputParallelism",
      });
    case 6:
      return S.suspend(() => S.Struct({ RecordRowPath: S.String })).annotate({
        identifier: "JSONMappingParameters",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ RecordRowDelimiter: S.String, RecordColumnDelimiter: S.String }),
      ).annotate({ identifier: "CSVMappingParameters" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          JSONMappingParameters: S.optional(__S(6)),
          CSVMappingParameters: S.optional(__S(7)),
        }),
      ).annotate({ identifier: "MappingParameters" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RecordFormatType: S.String,
          MappingParameters: S.optional(__S(8)),
        }),
      ).annotate({ identifier: "RecordFormat" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Mapping: S.optional(S.String), SqlType: S.String }),
      ).annotate({ identifier: "RecordColumn" });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() =>
        S.Struct({
          RecordFormat: __S(9),
          RecordEncoding: S.optional(S.String),
          RecordColumns: __S(11),
        }),
      ).annotate({ identifier: "SourceSchema" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NamePrefix: S.String,
          InputProcessingConfiguration: S.optional(__S(4)),
          KinesisStreamsInput: S.optional(__S(3)),
          KinesisFirehoseInput: S.optional(__S(3)),
          InputParallelism: S.optional(__S(5)),
          InputSchema: __S(12),
        }),
      ).annotate({ identifier: "Input" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          Input: __S(13),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddApplicationInputRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          InputId: S.String,
          InputProcessingConfiguration: __S(4),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddApplicationInputProcessingConfigurationRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ RecordFormatType: S.String })).annotate({
        identifier: "DestinationSchema",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          KinesisStreamsOutput: S.optional(__S(3)),
          KinesisFirehoseOutput: S.optional(__S(3)),
          LambdaOutput: S.optional(__S(3)),
          DestinationSchema: __S(16),
        }),
      ).annotate({ identifier: "Output" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          Output: __S(17),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddApplicationOutputRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ BucketARN: S.String, FileKey: S.String, ReferenceRoleARN: S.String }),
      ).annotate({ identifier: "S3ReferenceDataSource" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TableName: S.String,
          S3ReferenceDataSource: S.optional(__S(19)),
          ReferenceSchema: __S(12),
        }),
      ).annotate({ identifier: "ReferenceDataSource" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          ReferenceDataSource: __S(20),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddApplicationReferenceDataSourceRequest",
      });
    case 6:
      return S.Array(__S(13));
    case 7:
      return S.Array(__S(17));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(0));
    case 1:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.optional(S.String) })).annotate({
        identifier: "Tag",
      });
    case 2:
      return S.Array(__S(25));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          ApplicationDescription: S.optional(S.String),
          Inputs: S.optional(__S(22)),
          Outputs: S.optional(__S(23)),
          CloudWatchLoggingOptions: S.optional(__S(24)),
          ApplicationCode: S.optional(S.String),
          Tags: S.optional(__S(26)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateApplicationRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          ApplicationARN: S.String,
          ApplicationStatus: S.String,
        }),
      ).annotate({ identifier: "ApplicationSummary" });
    case 5:
      return S.suspend(() => S.Struct({ ApplicationSummary: __S(28) }).pipe(ns)).annotate({
        identifier: "CreateApplicationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CreateTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteApplicationRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          CloudWatchLoggingOptionId: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteApplicationCloudWatchLoggingOptionRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          InputId: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteApplicationInputProcessingConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          OutputId: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteApplicationOutputRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          ReferenceId: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteApplicationReferenceDataSourceRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ApplicationName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeApplicationRequest",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.optional(S.String), RoleARN: S.optional(S.String) }),
      ).annotate({
        identifier: "InputLambdaProcessorDescription",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ InputLambdaProcessorDescription: S.optional(__S(37)) }),
      ).annotate({
        identifier: "InputProcessingConfigurationDescription",
      });
    case 7:
      return S.suspend(() => S.Struct({ InputStartingPosition: S.optional(S.String) })).annotate({
        identifier: "InputStartingPositionConfiguration",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InputId: S.optional(S.String),
          NamePrefix: S.optional(S.String),
          InAppStreamNames: S.optional(__S(36)),
          InputProcessingConfigurationDescription: S.optional(__S(38)),
          KinesisStreamsInputDescription: S.optional(__S(37)),
          KinesisFirehoseInputDescription: S.optional(__S(37)),
          InputSchema: S.optional(__S(12)),
          InputParallelism: S.optional(__S(5)),
          InputStartingPositionConfiguration: S.optional(__S(39)),
        }),
      ).annotate({ identifier: "InputDescription" });
    case 1:
      return S.Array(__S(40));
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.optional(S.String), RoleARN: S.optional(S.String) }),
      ).annotate({ identifier: "LambdaOutputDescription" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          OutputId: S.optional(S.String),
          Name: S.optional(S.String),
          KinesisStreamsOutputDescription: S.optional(__S(37)),
          KinesisFirehoseOutputDescription: S.optional(__S(37)),
          LambdaOutputDescription: S.optional(__S(42)),
          DestinationSchema: S.optional(__S(16)),
        }),
      ).annotate({ identifier: "OutputDescription" });
    case 4:
      return S.Array(__S(43));
    case 5:
      return S.suspend(() =>
        S.Struct({ BucketARN: S.String, FileKey: S.String, ReferenceRoleARN: S.String }),
      ).annotate({
        identifier: "S3ReferenceDataSourceDescription",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ReferenceId: S.String,
          TableName: S.String,
          S3ReferenceDataSourceDescription: __S(45),
          ReferenceSchema: S.optional(__S(12)),
        }),
      ).annotate({
        identifier: "ReferenceDataSourceDescription",
      });
    case 7:
      return S.Array(__S(46));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLoggingOptionId: S.optional(S.String),
          LogStreamARN: S.String,
          RoleARN: S.String,
        }),
      ).annotate({
        identifier: "CloudWatchLoggingOptionDescription",
      });
    case 1:
      return S.Array(__S(48));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          ApplicationDescription: S.optional(S.String),
          ApplicationARN: S.String,
          ApplicationStatus: S.String,
          CreateTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdateTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InputDescriptions: S.optional(__S(41)),
          OutputDescriptions: S.optional(__S(44)),
          ReferenceDataSourceDescriptions: S.optional(__S(47)),
          CloudWatchLoggingOptionDescriptions: S.optional(__S(49)),
          ApplicationCode: S.optional(S.String),
          ApplicationVersionId: S.Number,
        }),
      ).annotate({ identifier: "ApplicationDetail" });
    case 3:
      return S.suspend(() => S.Struct({ ApplicationDetail: __S(50) }).pipe(ns)).annotate({
        identifier: "DescribeApplicationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ RoleARN: S.String, BucketARN: S.String, FileKey: S.String }),
      ).annotate({ identifier: "S3Configuration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceARN: S.optional(S.String),
          RoleARN: S.optional(S.String),
          InputStartingPositionConfiguration: S.optional(__S(39)),
          S3Configuration: S.optional(__S(52)),
          InputProcessingConfiguration: S.optional(__S(4)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DiscoverInputSchemaRequest",
      });
    case 6:
      return S.Array(__S(36));
    case 7:
      return S.suspend(() =>
        S.Struct({
          InputSchema: S.optional(__S(12)),
          ParsedInputRecords: S.optional(__S(54)),
          ProcessedInputRecords: S.optional(__S(36)),
          RawInputRecords: S.optional(__S(36)),
        }).pipe(ns),
      ).annotate({
        identifier: "DiscoverInputSchemaResponse",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Limit: S.optional(S.Number),
          ExclusiveStartApplicationName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListApplicationsRequest" });
    case 1:
      return S.Array(__S(28));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationSummaries: __S(57),
          HasMoreApplications: S.Boolean,
        }).pipe(ns),
      ).annotate({ identifier: "ListApplicationsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(26)) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          InputStartingPositionConfiguration: __S(39),
        }),
      ).annotate({ identifier: "InputConfiguration" });
    case 6:
      return S.Array(__S(61));
    case 7:
      return S.suspend(() =>
        S.Struct({ ApplicationName: S.String, InputConfigurations: __S(62) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartApplicationRequest" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "StartApplicationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ApplicationName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopApplicationRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: __S(26) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: __S(36) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceARNUpdate: S.optional(S.String), RoleARNUpdate: S.optional(S.String) }),
      ).annotate({
        identifier: "InputLambdaProcessorUpdate",
      });
    case 6:
      return S.suspend(() => S.Struct({ InputLambdaProcessorUpdate: __S(69) })).annotate({
        identifier: "InputProcessingConfigurationUpdate",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RecordFormatUpdate: S.optional(__S(9)),
          RecordEncodingUpdate: S.optional(S.String),
          RecordColumnUpdates: S.optional(__S(11)),
        }),
      ).annotate({ identifier: "InputSchemaUpdate" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ CountUpdate: S.optional(S.Number) })).annotate({
        identifier: "InputParallelismUpdate",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InputId: S.String,
          NamePrefixUpdate: S.optional(S.String),
          InputProcessingConfigurationUpdate: S.optional(__S(70)),
          KinesisStreamsInputUpdate: S.optional(__S(69)),
          KinesisFirehoseInputUpdate: S.optional(__S(69)),
          InputSchemaUpdate: S.optional(__S(71)),
          InputParallelismUpdate: S.optional(__S(72)),
        }),
      ).annotate({ identifier: "InputUpdate" });
    case 2:
      return S.Array(__S(73));
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceARNUpdate: S.optional(S.String), RoleARNUpdate: S.optional(S.String) }),
      ).annotate({ identifier: "LambdaOutputUpdate" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          OutputId: S.String,
          NameUpdate: S.optional(S.String),
          KinesisStreamsOutputUpdate: S.optional(__S(69)),
          KinesisFirehoseOutputUpdate: S.optional(__S(69)),
          LambdaOutputUpdate: S.optional(__S(75)),
          DestinationSchemaUpdate: S.optional(__S(16)),
        }),
      ).annotate({ identifier: "OutputUpdate" });
    case 5:
      return S.Array(__S(76));
    case 6:
      return S.suspend(() =>
        S.Struct({
          BucketARNUpdate: S.optional(S.String),
          FileKeyUpdate: S.optional(S.String),
          ReferenceRoleARNUpdate: S.optional(S.String),
        }),
      ).annotate({
        identifier: "S3ReferenceDataSourceUpdate",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ReferenceId: S.String,
          TableNameUpdate: S.optional(S.String),
          S3ReferenceDataSourceUpdate: S.optional(__S(78)),
          ReferenceSchemaUpdate: S.optional(__S(12)),
        }),
      ).annotate({
        identifier: "ReferenceDataSourceUpdate",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(79));
    case 1:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLoggingOptionId: S.String,
          LogStreamARNUpdate: S.optional(S.String),
          RoleARNUpdate: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CloudWatchLoggingOptionUpdate",
      });
    case 2:
      return S.Array(__S(81));
    case 3:
      return S.suspend(() =>
        S.Struct({
          InputUpdates: S.optional(__S(74)),
          ApplicationCodeUpdate: S.optional(S.String),
          OutputUpdates: S.optional(__S(77)),
          ReferenceDataSourceUpdates: S.optional(__S(80)),
          CloudWatchLoggingOptionUpdates: S.optional(__S(82)),
        }),
      ).annotate({ identifier: "ApplicationUpdate" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          ApplicationUpdate: __S(83),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateApplicationRequest" });
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
  }
}
