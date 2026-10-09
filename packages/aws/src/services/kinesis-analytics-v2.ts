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
const ns = /*@__PURE__*/ T.XmlNamespace("http://analytics.kinesis.amazonaws.com/doc/2018-05-23");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Kinesis Analytics V2",
  serviceShapeName: "KinesisAnalytics_20180523",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "kinesisanalytics" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-23");
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
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()("InvalidRequestException", {
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
        /*@__PURE__*/ S.suspend(() => __S(17, __c2, 1)).annotate({ identifier: "RawInputRecords" }),
      ),
      ProcessedInputRecords: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(17, __c2, 1)).annotate({
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
export interface CloudWatchLoggingOption {
  LogStreamARN: string;
}
export type ConditionalToken = string;
export interface AddApplicationCloudWatchLoggingOptionRequest {
  ApplicationName: string;
  CurrentApplicationVersionId?: number;
  CloudWatchLoggingOption: CloudWatchLoggingOption;
  ConditionalToken?: string;
}
export type ResourceARN = string;
export type Id = string;
export type RoleARN = string;
export interface CloudWatchLoggingOptionDescription {
  CloudWatchLoggingOptionId?: string;
  LogStreamARN: string;
  RoleARN?: string;
}
export type CloudWatchLoggingOptionDescriptions = CloudWatchLoggingOptionDescription[];
export type OperationId = string;
export interface AddApplicationCloudWatchLoggingOptionResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
  OperationId?: string;
}
export type InAppStreamName = string;
export interface InputLambdaProcessor {
  ResourceARN: string;
}
export interface InputProcessingConfiguration {
  InputLambdaProcessor: InputLambdaProcessor;
}
export interface KinesisStreamsInput {
  ResourceARN: string;
}
export interface KinesisFirehoseInput {
  ResourceARN: string;
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
export type InAppStreamNames = string[];
export interface InputLambdaProcessorDescription {
  ResourceARN: string;
  RoleARN?: string;
}
export interface InputProcessingConfigurationDescription {
  InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
}
export interface KinesisStreamsInputDescription {
  ResourceARN: string;
  RoleARN?: string;
}
export interface KinesisFirehoseInputDescription {
  ResourceARN: string;
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
export interface AddApplicationInputResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  InputDescriptions?: InputDescription[];
}
export interface AddApplicationInputProcessingConfigurationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  InputId: string;
  InputProcessingConfiguration: InputProcessingConfiguration;
}
export interface AddApplicationInputProcessingConfigurationResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  InputId?: string;
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
}
export interface KinesisStreamsOutput {
  ResourceARN: string;
}
export interface KinesisFirehoseOutput {
  ResourceARN: string;
}
export interface LambdaOutput {
  ResourceARN: string;
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
export interface KinesisStreamsOutputDescription {
  ResourceARN: string;
  RoleARN?: string;
}
export interface KinesisFirehoseOutputDescription {
  ResourceARN: string;
  RoleARN?: string;
}
export interface LambdaOutputDescription {
  ResourceARN: string;
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
export interface AddApplicationOutputResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  OutputDescriptions?: OutputDescription[];
}
export type InAppTableName = string;
export type BucketARN = string;
export type FileKey = string;
export interface S3ReferenceDataSource {
  BucketARN?: string;
  FileKey?: string;
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
export interface S3ReferenceDataSourceDescription {
  BucketARN: string;
  FileKey: string;
  ReferenceRoleARN?: string;
}
export interface ReferenceDataSourceDescription {
  ReferenceId: string;
  TableName: string;
  S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;
  ReferenceSchema?: SourceSchema;
}
export type ReferenceDataSourceDescriptions = ReferenceDataSourceDescription[];
export interface AddApplicationReferenceDataSourceResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}
export type SubnetId = string;
export type SubnetIds = string[];
export type SecurityGroupId = string;
export type SecurityGroupIds = string[];
export interface VpcConfiguration {
  SubnetIds: string[];
  SecurityGroupIds: string[];
}
export interface AddApplicationVpcConfigurationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId?: number;
  VpcConfiguration: VpcConfiguration;
  ConditionalToken?: string;
}
export type VpcId = string;
export interface VpcConfigurationDescription {
  VpcConfigurationId: string;
  VpcId: string;
  SubnetIds: string[];
  SecurityGroupIds: string[];
}
export interface AddApplicationVpcConfigurationResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  VpcConfigurationDescription?: VpcConfigurationDescription;
  OperationId?: string;
}
export type ApplicationDescription = string;
export type RuntimeEnvironment =
  | "SQL-1_0"
  | "FLINK-1_6"
  | "FLINK-1_8"
  | "ZEPPELIN-FLINK-1_0"
  | "FLINK-1_11"
  | "FLINK-1_13"
  | "ZEPPELIN-FLINK-2_0"
  | "FLINK-1_15"
  | "ZEPPELIN-FLINK-3_0"
  | "FLINK-1_18"
  | "FLINK-1_19"
  | "FLINK-1_20"
  | "FLINK-2_2"
  | "FLINK-2_3"
  | (string & {});
export type Inputs = Input[];
export type Outputs = Output[];
export type ReferenceDataSources = ReferenceDataSource[];
export interface SqlApplicationConfiguration {
  Inputs?: Input[];
  Outputs?: Output[];
  ReferenceDataSources?: ReferenceDataSource[];
}
export type ConfigurationType = "DEFAULT" | "CUSTOM" | (string & {});
export type CheckpointInterval = number;
export type MinPauseBetweenCheckpoints = number;
export interface CheckpointConfiguration {
  ConfigurationType: ConfigurationType;
  CheckpointingEnabled?: boolean;
  CheckpointInterval?: number;
  MinPauseBetweenCheckpoints?: number;
}
export type MetricsLevel = "APPLICATION" | "TASK" | "OPERATOR" | "PARALLELISM" | (string & {});
export type LogLevel = "INFO" | "WARN" | "ERROR" | "DEBUG" | (string & {});
export interface MonitoringConfiguration {
  ConfigurationType: ConfigurationType;
  MetricsLevel?: MetricsLevel;
  LogLevel?: LogLevel;
}
export type Parallelism = number;
export type ParallelismPerKPU = number;
export interface ParallelismConfiguration {
  ConfigurationType: ConfigurationType;
  Parallelism?: number;
  ParallelismPerKPU?: number;
  AutoScalingEnabled?: boolean;
}
export interface FlinkApplicationConfiguration {
  CheckpointConfiguration?: CheckpointConfiguration;
  MonitoringConfiguration?: MonitoringConfiguration;
  ParallelismConfiguration?: ParallelismConfiguration;
}
export type PropertyKey = string;
export type PropertyValue = string;
export type PropertyMap = { [key: string]: string | undefined };
export interface PropertyGroup {
  PropertyGroupId: string;
  PropertyMap: { [key: string]: string | undefined };
}
export type PropertyGroups = PropertyGroup[];
export interface EnvironmentProperties {
  PropertyGroups: PropertyGroup[];
}
export type TextContent = string;
export type ZipFileContent = Uint8Array;
export type ObjectVersion = string;
export interface S3ContentLocation {
  BucketARN: string;
  FileKey: string;
  ObjectVersion?: string;
}
export interface CodeContent {
  TextContent?: string;
  ZipFileContent?: Uint8Array;
  S3ContentLocation?: S3ContentLocation;
}
export type CodeContentType = "PLAINTEXT" | "ZIPFILE" | (string & {});
export interface ApplicationCodeConfiguration {
  CodeContent?: CodeContent;
  CodeContentType: CodeContentType;
}
export interface ApplicationSnapshotConfiguration {
  SnapshotsEnabled: boolean;
}
export interface ApplicationSystemRollbackConfiguration {
  RollbackEnabled: boolean;
}
export type VpcConfigurations = VpcConfiguration[];
export interface ZeppelinMonitoringConfiguration {
  LogLevel: LogLevel;
}
export type DatabaseARN = string;
export interface GlueDataCatalogConfiguration {
  DatabaseARN: string;
}
export interface CatalogConfiguration {
  GlueDataCatalogConfiguration: GlueDataCatalogConfiguration;
}
export type BasePath = string;
export interface S3ContentBaseLocation {
  BucketARN: string;
  BasePath?: string;
}
export interface DeployAsApplicationConfiguration {
  S3ContentLocation: S3ContentBaseLocation;
}
export type ArtifactType = "UDF" | "DEPENDENCY_JAR" | (string & {});
export type MavenGroupId = string;
export type MavenArtifactId = string;
export type MavenVersion = string;
export interface MavenReference {
  GroupId: string;
  ArtifactId: string;
  Version: string;
}
export interface CustomArtifactConfiguration {
  ArtifactType: ArtifactType;
  S3ContentLocation?: S3ContentLocation;
  MavenReference?: MavenReference;
}
export type CustomArtifactsConfigurationList = CustomArtifactConfiguration[];
export interface ZeppelinApplicationConfiguration {
  MonitoringConfiguration?: ZeppelinMonitoringConfiguration;
  CatalogConfiguration?: CatalogConfiguration;
  DeployAsApplicationConfiguration?: DeployAsApplicationConfiguration;
  CustomArtifactsConfiguration?: CustomArtifactConfiguration[];
}
export type KeyId = string;
export type KeyType = "AWS_OWNED_KEY" | "CUSTOMER_MANAGED_KEY" | (string & {});
export interface ApplicationEncryptionConfiguration {
  KeyId?: string;
  KeyType: KeyType;
}
export interface ApplicationConfiguration {
  SqlApplicationConfiguration?: SqlApplicationConfiguration;
  FlinkApplicationConfiguration?: FlinkApplicationConfiguration;
  EnvironmentProperties?: EnvironmentProperties;
  ApplicationCodeConfiguration?: ApplicationCodeConfiguration;
  ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;
  ApplicationSystemRollbackConfiguration?: ApplicationSystemRollbackConfiguration;
  VpcConfigurations?: VpcConfiguration[];
  ZeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration;
  ApplicationEncryptionConfiguration?: ApplicationEncryptionConfiguration;
}
export type CloudWatchLoggingOptions = CloudWatchLoggingOption[];
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value?: string;
}
export type Tags = Tag[];
export type ApplicationMode = "STREAMING" | "INTERACTIVE" | (string & {});
export interface CreateApplicationRequest {
  ApplicationName: string;
  ApplicationDescription?: string;
  RuntimeEnvironment: RuntimeEnvironment;
  ServiceExecutionRole: string;
  ApplicationConfiguration?: ApplicationConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOption[];
  Tags?: Tag[];
  ApplicationMode?: ApplicationMode;
}
export type ApplicationStatus =
  | "DELETING"
  | "STARTING"
  | "STOPPING"
  | "READY"
  | "RUNNING"
  | "UPDATING"
  | "AUTOSCALING"
  | "FORCE_STOPPING"
  | "ROLLING_BACK"
  | "MAINTENANCE"
  | "ROLLED_BACK"
  | (string & {});
export interface SqlApplicationConfigurationDescription {
  InputDescriptions?: InputDescription[];
  OutputDescriptions?: OutputDescription[];
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}
export type CodeMD5 = string;
export type CodeSize = number;
export interface S3ApplicationCodeLocationDescription {
  BucketARN: string;
  FileKey: string;
  ObjectVersion?: string;
}
export interface CodeContentDescription {
  TextContent?: string;
  CodeMD5?: string;
  CodeSize?: number;
  S3ApplicationCodeLocationDescription?: S3ApplicationCodeLocationDescription;
}
export interface ApplicationCodeConfigurationDescription {
  CodeContentType: CodeContentType;
  CodeContentDescription?: CodeContentDescription;
}
export type ApplicationRestoreType =
  | "SKIP_RESTORE_FROM_SNAPSHOT"
  | "RESTORE_FROM_LATEST_SNAPSHOT"
  | "RESTORE_FROM_CUSTOM_SNAPSHOT"
  | (string & {});
export type SnapshotName = string;
export interface ApplicationRestoreConfiguration {
  ApplicationRestoreType: ApplicationRestoreType;
  SnapshotName?: string;
}
export interface FlinkRunConfiguration {
  AllowNonRestoredState?: boolean;
}
export interface RunConfigurationDescription {
  ApplicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration;
  FlinkRunConfigurationDescription?: FlinkRunConfiguration;
}
export interface CheckpointConfigurationDescription {
  ConfigurationType?: ConfigurationType;
  CheckpointingEnabled?: boolean;
  CheckpointInterval?: number;
  MinPauseBetweenCheckpoints?: number;
}
export interface MonitoringConfigurationDescription {
  ConfigurationType?: ConfigurationType;
  MetricsLevel?: MetricsLevel;
  LogLevel?: LogLevel;
}
export interface ParallelismConfigurationDescription {
  ConfigurationType?: ConfigurationType;
  Parallelism?: number;
  ParallelismPerKPU?: number;
  CurrentParallelism?: number;
  AutoScalingEnabled?: boolean;
}
export type JobPlanDescription = string;
export interface FlinkApplicationConfigurationDescription {
  CheckpointConfigurationDescription?: CheckpointConfigurationDescription;
  MonitoringConfigurationDescription?: MonitoringConfigurationDescription;
  ParallelismConfigurationDescription?: ParallelismConfigurationDescription;
  JobPlanDescription?: string;
}
export interface EnvironmentPropertyDescriptions {
  PropertyGroupDescriptions?: PropertyGroup[];
}
export interface ApplicationSnapshotConfigurationDescription {
  SnapshotsEnabled: boolean;
}
export interface ApplicationSystemRollbackConfigurationDescription {
  RollbackEnabled: boolean;
}
export type VpcConfigurationDescriptions = VpcConfigurationDescription[];
export interface ZeppelinMonitoringConfigurationDescription {
  LogLevel?: LogLevel;
}
export interface GlueDataCatalogConfigurationDescription {
  DatabaseARN: string;
}
export interface CatalogConfigurationDescription {
  GlueDataCatalogConfigurationDescription: GlueDataCatalogConfigurationDescription;
}
export interface S3ContentBaseLocationDescription {
  BucketARN: string;
  BasePath?: string;
}
export interface DeployAsApplicationConfigurationDescription {
  S3ContentLocationDescription: S3ContentBaseLocationDescription;
}
export interface CustomArtifactConfigurationDescription {
  ArtifactType?: ArtifactType;
  S3ContentLocationDescription?: S3ContentLocation;
  MavenReferenceDescription?: MavenReference;
}
export type CustomArtifactsConfigurationDescriptionList = CustomArtifactConfigurationDescription[];
export interface ZeppelinApplicationConfigurationDescription {
  MonitoringConfigurationDescription: ZeppelinMonitoringConfigurationDescription;
  CatalogConfigurationDescription?: CatalogConfigurationDescription;
  DeployAsApplicationConfigurationDescription?: DeployAsApplicationConfigurationDescription;
  CustomArtifactsConfigurationDescription?: CustomArtifactConfigurationDescription[];
}
export interface ApplicationEncryptionConfigurationDescription {
  KeyId?: string;
  KeyType: KeyType;
}
export interface ApplicationConfigurationDescription {
  SqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription;
  ApplicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription;
  RunConfigurationDescription?: RunConfigurationDescription;
  FlinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription;
  EnvironmentPropertyDescriptions?: EnvironmentPropertyDescriptions;
  ApplicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription;
  ApplicationSystemRollbackConfigurationDescription?: ApplicationSystemRollbackConfigurationDescription;
  VpcConfigurationDescriptions?: VpcConfigurationDescription[];
  ZeppelinApplicationConfigurationDescription?: ZeppelinApplicationConfigurationDescription;
  ApplicationEncryptionConfigurationDescription?: ApplicationEncryptionConfigurationDescription;
}
export type ApplicationMaintenanceWindowStartTime = string;
export type ApplicationMaintenanceWindowEndTime = string;
export interface ApplicationMaintenanceConfigurationDescription {
  ApplicationMaintenanceWindowStartTime: string;
  ApplicationMaintenanceWindowEndTime: string;
}
export interface ApplicationDetail {
  ApplicationARN: string;
  ApplicationDescription?: string;
  ApplicationName: string;
  RuntimeEnvironment: RuntimeEnvironment;
  ServiceExecutionRole?: string;
  ApplicationStatus: ApplicationStatus;
  ApplicationVersionId: number;
  CreateTimestamp?: Date;
  LastUpdateTimestamp?: Date;
  ApplicationConfigurationDescription?: ApplicationConfigurationDescription;
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
  ApplicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;
  ApplicationVersionUpdatedFrom?: number;
  ApplicationVersionRolledBackFrom?: number;
  ApplicationVersionCreateTimestamp?: Date;
  ConditionalToken?: string;
  ApplicationVersionRolledBackTo?: number;
  ApplicationMode?: ApplicationMode;
}
export interface CreateApplicationResponse {
  ApplicationDetail: ApplicationDetail;
}
export type UrlType = "FLINK_DASHBOARD_URL" | "ZEPPELIN_UI_URL" | (string & {});
export type SessionExpirationDurationInSeconds = number;
export interface CreateApplicationPresignedUrlRequest {
  ApplicationName: string;
  UrlType: UrlType;
  SessionExpirationDurationInSeconds?: number;
}
export type AuthorizedUrl = string;
export interface CreateApplicationPresignedUrlResponse {
  AuthorizedUrl?: string;
}
export interface CreateApplicationSnapshotRequest {
  ApplicationName: string;
  SnapshotName: string;
}
export interface CreateApplicationSnapshotResponse {}
export interface DeleteApplicationRequest {
  ApplicationName: string;
  CreateTimestamp: Date;
}
export interface DeleteApplicationResponse {}
export interface DeleteApplicationCloudWatchLoggingOptionRequest {
  ApplicationName: string;
  CurrentApplicationVersionId?: number;
  CloudWatchLoggingOptionId: string;
  ConditionalToken?: string;
}
export interface DeleteApplicationCloudWatchLoggingOptionResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
  OperationId?: string;
}
export interface DeleteApplicationInputProcessingConfigurationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  InputId: string;
}
export interface DeleteApplicationInputProcessingConfigurationResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
}
export interface DeleteApplicationOutputRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  OutputId: string;
}
export interface DeleteApplicationOutputResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
}
export interface DeleteApplicationReferenceDataSourceRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  ReferenceId: string;
}
export interface DeleteApplicationReferenceDataSourceResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
}
export interface DeleteApplicationSnapshotRequest {
  ApplicationName: string;
  SnapshotName: string;
  SnapshotCreationTimestamp: Date;
}
export interface DeleteApplicationSnapshotResponse {}
export interface DeleteApplicationVpcConfigurationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId?: number;
  VpcConfigurationId: string;
  ConditionalToken?: string;
}
export interface DeleteApplicationVpcConfigurationResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  OperationId?: string;
}
export interface DescribeApplicationRequest {
  ApplicationName: string;
  IncludeAdditionalDetails?: boolean;
}
export interface DescribeApplicationResponse {
  ApplicationDetail: ApplicationDetail;
}
export interface DescribeApplicationOperationRequest {
  ApplicationName: string;
  OperationId: string;
}
export type Operation = string;
export type OperationStatus = "IN_PROGRESS" | "CANCELLED" | "SUCCESSFUL" | "FAILED" | (string & {});
export interface ApplicationVersionChangeDetails {
  ApplicationVersionUpdatedFrom: number;
  ApplicationVersionUpdatedTo: number;
}
export type ErrorString = string;
export interface ErrorInfo {
  ErrorString?: string;
}
export interface OperationFailureDetails {
  RollbackOperationId?: string;
  ErrorInfo?: ErrorInfo;
}
export interface ApplicationOperationInfoDetails {
  Operation: string;
  StartTime: Date;
  EndTime: Date;
  OperationStatus: OperationStatus;
  ApplicationVersionChangeDetails?: ApplicationVersionChangeDetails;
  OperationFailureDetails?: OperationFailureDetails;
}
export interface DescribeApplicationOperationResponse {
  ApplicationOperationInfoDetails?: ApplicationOperationInfoDetails;
}
export interface DescribeApplicationSnapshotRequest {
  ApplicationName: string;
  SnapshotName: string;
}
export type SnapshotStatus = "CREATING" | "READY" | "DELETING" | "FAILED" | (string & {});
export interface SnapshotDetails {
  SnapshotName: string;
  SnapshotStatus: SnapshotStatus;
  ApplicationVersionId: number;
  SnapshotCreationTimestamp?: Date;
  RuntimeEnvironment?: RuntimeEnvironment;
  ApplicationEncryptionConfigurationDescription?: ApplicationEncryptionConfigurationDescription;
}
export interface DescribeApplicationSnapshotResponse {
  SnapshotDetails: SnapshotDetails;
}
export interface DescribeApplicationVersionRequest {
  ApplicationName: string;
  ApplicationVersionId: number;
}
export interface DescribeApplicationVersionResponse {
  ApplicationVersionDetail?: ApplicationDetail;
}
export interface S3Configuration {
  BucketARN: string;
  FileKey: string;
}
export interface DiscoverInputSchemaRequest {
  ResourceARN?: string;
  ServiceExecutionRole: string;
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
export type ListApplicationOperationsInputLimit = number;
export type NextToken = string;
export interface ListApplicationOperationsRequest {
  ApplicationName: string;
  Limit?: number;
  NextToken?: string;
  Operation?: string;
  OperationStatus?: OperationStatus;
}
export interface ApplicationOperationInfo {
  Operation?: string;
  OperationId?: string;
  StartTime?: Date;
  EndTime?: Date;
  OperationStatus?: OperationStatus;
}
export type ApplicationOperationInfoList = ApplicationOperationInfo[];
export interface ListApplicationOperationsResponse {
  ApplicationOperationInfoList?: ApplicationOperationInfo[];
  NextToken?: string;
}
export type ListApplicationsInputLimit = number;
export interface ListApplicationsRequest {
  Limit?: number;
  NextToken?: string;
}
export interface ApplicationSummary {
  ApplicationName: string;
  ApplicationARN: string;
  ApplicationStatus: ApplicationStatus;
  ApplicationVersionId: number;
  RuntimeEnvironment: RuntimeEnvironment;
  ApplicationMode?: ApplicationMode;
}
export type ApplicationSummaries = ApplicationSummary[];
export interface ListApplicationsResponse {
  ApplicationSummaries: ApplicationSummary[];
  NextToken?: string;
}
export type ListSnapshotsInputLimit = number;
export interface ListApplicationSnapshotsRequest {
  ApplicationName: string;
  Limit?: number;
  NextToken?: string;
}
export type SnapshotSummaries = SnapshotDetails[];
export interface ListApplicationSnapshotsResponse {
  SnapshotSummaries?: SnapshotDetails[];
  NextToken?: string;
}
export type ListApplicationVersionsInputLimit = number;
export interface ListApplicationVersionsRequest {
  ApplicationName: string;
  Limit?: number;
  NextToken?: string;
}
export interface ApplicationVersionSummary {
  ApplicationVersionId: number;
  ApplicationStatus: ApplicationStatus;
}
export type ApplicationVersionSummaries = ApplicationVersionSummary[];
export interface ListApplicationVersionsResponse {
  ApplicationVersionSummaries?: ApplicationVersionSummary[];
  NextToken?: string;
}
export type KinesisAnalyticsARN = string;
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export interface RollbackApplicationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
}
export interface RollbackApplicationResponse {
  ApplicationDetail: ApplicationDetail;
  OperationId?: string;
}
export interface SqlRunConfiguration {
  InputId: string;
  InputStartingPositionConfiguration: InputStartingPositionConfiguration;
}
export type SqlRunConfigurations = SqlRunConfiguration[];
export interface RunConfiguration {
  FlinkRunConfiguration?: FlinkRunConfiguration;
  SqlRunConfigurations?: SqlRunConfiguration[];
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
}
export interface StartApplicationRequest {
  ApplicationName: string;
  RunConfiguration?: RunConfiguration;
}
export interface StartApplicationResponse {
  OperationId?: string;
}
export interface StopApplicationRequest {
  ApplicationName: string;
  Force?: boolean;
}
export interface StopApplicationResponse {
  OperationId?: string;
}
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
  ResourceARNUpdate: string;
}
export interface InputProcessingConfigurationUpdate {
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate;
}
export interface KinesisStreamsInputUpdate {
  ResourceARNUpdate: string;
}
export interface KinesisFirehoseInputUpdate {
  ResourceARNUpdate: string;
}
export interface InputSchemaUpdate {
  RecordFormatUpdate?: RecordFormat;
  RecordEncodingUpdate?: string;
  RecordColumnUpdates?: RecordColumn[];
}
export interface InputParallelismUpdate {
  CountUpdate: number;
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
  ResourceARNUpdate: string;
}
export interface KinesisFirehoseOutputUpdate {
  ResourceARNUpdate: string;
}
export interface LambdaOutputUpdate {
  ResourceARNUpdate: string;
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
}
export interface ReferenceDataSourceUpdate {
  ReferenceId: string;
  TableNameUpdate?: string;
  S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;
  ReferenceSchemaUpdate?: SourceSchema;
}
export type ReferenceDataSourceUpdates = ReferenceDataSourceUpdate[];
export interface SqlApplicationConfigurationUpdate {
  InputUpdates?: InputUpdate[];
  OutputUpdates?: OutputUpdate[];
  ReferenceDataSourceUpdates?: ReferenceDataSourceUpdate[];
}
export interface S3ContentLocationUpdate {
  BucketARNUpdate?: string;
  FileKeyUpdate?: string;
  ObjectVersionUpdate?: string;
}
export interface CodeContentUpdate {
  TextContentUpdate?: string;
  ZipFileContentUpdate?: Uint8Array;
  S3ContentLocationUpdate?: S3ContentLocationUpdate;
}
export interface ApplicationCodeConfigurationUpdate {
  CodeContentTypeUpdate?: CodeContentType;
  CodeContentUpdate?: CodeContentUpdate;
}
export interface CheckpointConfigurationUpdate {
  ConfigurationTypeUpdate?: ConfigurationType;
  CheckpointingEnabledUpdate?: boolean;
  CheckpointIntervalUpdate?: number;
  MinPauseBetweenCheckpointsUpdate?: number;
}
export interface MonitoringConfigurationUpdate {
  ConfigurationTypeUpdate?: ConfigurationType;
  MetricsLevelUpdate?: MetricsLevel;
  LogLevelUpdate?: LogLevel;
}
export interface ParallelismConfigurationUpdate {
  ConfigurationTypeUpdate?: ConfigurationType;
  ParallelismUpdate?: number;
  ParallelismPerKPUUpdate?: number;
  AutoScalingEnabledUpdate?: boolean;
}
export interface FlinkApplicationConfigurationUpdate {
  CheckpointConfigurationUpdate?: CheckpointConfigurationUpdate;
  MonitoringConfigurationUpdate?: MonitoringConfigurationUpdate;
  ParallelismConfigurationUpdate?: ParallelismConfigurationUpdate;
}
export interface EnvironmentPropertyUpdates {
  PropertyGroups: PropertyGroup[];
}
export interface ApplicationSnapshotConfigurationUpdate {
  SnapshotsEnabledUpdate: boolean;
}
export interface ApplicationSystemRollbackConfigurationUpdate {
  RollbackEnabledUpdate: boolean;
}
export interface VpcConfigurationUpdate {
  VpcConfigurationId: string;
  SubnetIdUpdates?: string[];
  SecurityGroupIdUpdates?: string[];
}
export type VpcConfigurationUpdates = VpcConfigurationUpdate[];
export interface ZeppelinMonitoringConfigurationUpdate {
  LogLevelUpdate: LogLevel;
}
export interface GlueDataCatalogConfigurationUpdate {
  DatabaseARNUpdate: string;
}
export interface CatalogConfigurationUpdate {
  GlueDataCatalogConfigurationUpdate: GlueDataCatalogConfigurationUpdate;
}
export interface S3ContentBaseLocationUpdate {
  BucketARNUpdate?: string;
  BasePathUpdate?: string;
}
export interface DeployAsApplicationConfigurationUpdate {
  S3ContentLocationUpdate?: S3ContentBaseLocationUpdate;
}
export interface ZeppelinApplicationConfigurationUpdate {
  MonitoringConfigurationUpdate?: ZeppelinMonitoringConfigurationUpdate;
  CatalogConfigurationUpdate?: CatalogConfigurationUpdate;
  DeployAsApplicationConfigurationUpdate?: DeployAsApplicationConfigurationUpdate;
  CustomArtifactsConfigurationUpdate?: CustomArtifactConfiguration[];
}
export interface ApplicationEncryptionConfigurationUpdate {
  KeyIdUpdate?: string;
  KeyTypeUpdate: KeyType;
}
export interface ApplicationConfigurationUpdate {
  SqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate;
  ApplicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate;
  FlinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate;
  EnvironmentPropertyUpdates?: EnvironmentPropertyUpdates;
  ApplicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate;
  ApplicationSystemRollbackConfigurationUpdate?: ApplicationSystemRollbackConfigurationUpdate;
  VpcConfigurationUpdates?: VpcConfigurationUpdate[];
  ZeppelinApplicationConfigurationUpdate?: ZeppelinApplicationConfigurationUpdate;
  ApplicationEncryptionConfigurationUpdate?: ApplicationEncryptionConfigurationUpdate;
}
export interface RunConfigurationUpdate {
  FlinkRunConfiguration?: FlinkRunConfiguration;
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
}
export interface CloudWatchLoggingOptionUpdate {
  CloudWatchLoggingOptionId: string;
  LogStreamARNUpdate?: string;
}
export type CloudWatchLoggingOptionUpdates = CloudWatchLoggingOptionUpdate[];
export interface UpdateApplicationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId?: number;
  ApplicationConfigurationUpdate?: ApplicationConfigurationUpdate;
  ServiceExecutionRoleUpdate?: string;
  RunConfigurationUpdate?: RunConfigurationUpdate;
  CloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];
  ConditionalToken?: string;
  RuntimeEnvironmentUpdate?: RuntimeEnvironment;
}
export interface UpdateApplicationResponse {
  ApplicationDetail: ApplicationDetail;
  OperationId?: string;
}
export interface ApplicationMaintenanceConfigurationUpdate {
  ApplicationMaintenanceWindowStartTimeUpdate: string;
}
export interface UpdateApplicationMaintenanceConfigurationRequest {
  ApplicationName: string;
  ApplicationMaintenanceConfigurationUpdate: ApplicationMaintenanceConfigurationUpdate;
}
export interface UpdateApplicationMaintenanceConfigurationResponse {
  ApplicationARN?: string;
  ApplicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;
}
export type ErrorMessage = string;
export type AddApplicationCloudWatchLoggingOptionError =
  | ConcurrentModificationException
  | InvalidApplicationConfigurationException
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds an Amazon CloudWatch log stream to monitor application configuration errors.
 */
export const addApplicationCloudWatchLoggingOption: API.OperationMethod<
  AddApplicationCloudWatchLoggingOptionRequest,
  AddApplicationCloudWatchLoggingOptionResponse,
  AddApplicationCloudWatchLoggingOptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1, __c0, 1) as any as S.Schema<AddApplicationCloudWatchLoggingOptionRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<AddApplicationCloudWatchLoggingOptionResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidApplicationConfigurationException,
    InvalidArgumentException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddApplicationCloudWatchLoggingOption",
}));

export type AddApplicationInputError =
  | CodeValidationException
  | ConcurrentModificationException
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds a streaming source to your SQL-based Kinesis Data Analytics application.
 *
 * You can add a streaming source when you create an application, or you can use this
 * operation to add a streaming source after you create an application. For more information, see
 * CreateApplication.
 *
 * Any configuration update, including adding a streaming source using this operation,
 * results in a new version of the application. You can use the DescribeApplication operation
 * to find the current application version.
 */
export const addApplicationInput: API.OperationMethod<
  AddApplicationInputRequest,
  AddApplicationInputResponse,
  AddApplicationInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16, __c2, 0) as any as S.Schema<AddApplicationInputRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<AddApplicationInputResponse>,
  errors: [
    CodeValidationException,
    ConcurrentModificationException,
    InvalidArgumentException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddApplicationInput",
}));

export type AddApplicationInputProcessingConfigurationError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds an InputProcessingConfiguration to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records
 * on the input stream before the
 * application's SQL code executes. Currently, the only input processor available is Amazon Lambda.
 */
export const addApplicationInputProcessingConfiguration: API.OperationMethod<
  AddApplicationInputProcessingConfigurationRequest,
  AddApplicationInputProcessingConfigurationResponse,
  AddApplicationInputProcessingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24, __c3, 0) as any as S.Schema<AddApplicationInputProcessingConfigurationRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<AddApplicationInputProcessingConfigurationResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddApplicationInputProcessingConfiguration",
}));

export type AddApplicationOutputError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds an external destination to your SQL-based Kinesis Data Analytics application.
 *
 * If you want Kinesis Data Analytics to deliver data from an in-application stream within
 * your application to an external destination (such as an Kinesis data stream, a Kinesis Data
 * Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to
 * your application using this operation. You can configure one or more outputs for your
 * application. Each output configuration maps an in-application stream and an external
 * destination.
 *
 * You can use one of the output configurations to deliver data from your
 * in-application error stream to an external destination so that you can analyze the
 * errors.
 *
 * Any configuration update, including adding a streaming source using this
 * operation, results in a new version of the application. You can use the DescribeApplication operation to find the current application
 * version.
 */
export const addApplicationOutput: API.OperationMethod<
  AddApplicationOutputRequest,
  AddApplicationOutputResponse,
  AddApplicationOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<AddApplicationOutputRequest>,
  output: __S(32, __c4, 0) as any as S.Schema<AddApplicationOutputResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddApplicationOutput",
}));

export type AddApplicationReferenceDataSourceError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.
 *
 * Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an
 * in-application table within your application. In the request, you provide the source (S3
 * bucket name and object key name), name of the in-application table to create, and the
 * necessary mapping information that describes how data in an Amazon S3 object maps to columns
 * in the resulting in-application table.
 */
export const addApplicationReferenceDataSource: API.OperationMethod<
  AddApplicationReferenceDataSourceRequest,
  AddApplicationReferenceDataSourceResponse,
  AddApplicationReferenceDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35, __c4, 3) as any as S.Schema<AddApplicationReferenceDataSourceRequest>,
  output: __S(39, __c4, 7) as any as S.Schema<AddApplicationReferenceDataSourceResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddApplicationReferenceDataSource",
}));

export type AddApplicationVpcConfigurationError =
  | ConcurrentModificationException
  | InvalidApplicationConfigurationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store
 * and access resources securely.
 *
 * Note the following about VPC configurations for Managed Service for Apache Flink applications:
 *
 * - VPC configurations are not supported for SQL applications.
 *
 * - When a VPC is added to a Managed Service for Apache Flink application, the application can no longer be accessed from the
 * Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.
 */
export const addApplicationVpcConfiguration: API.OperationMethod<
  AddApplicationVpcConfigurationRequest,
  AddApplicationVpcConfigurationResponse,
  AddApplicationVpcConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41, __c5, 1) as any as S.Schema<AddApplicationVpcConfigurationRequest>,
  output: __S(43, __c5, 3) as any as S.Schema<AddApplicationVpcConfigurationResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidApplicationConfigurationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddApplicationVpcConfiguration",
}));

export type CreateApplicationError =
  | CodeValidationException
  | ConcurrentModificationException
  | InvalidArgumentException
  | InvalidRequestException
  | LimitExceededException
  | ResourceInUseException
  | TooManyTagsException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Creates a Managed Service for Apache Flink application. For information about creating a
 * Managed Service for Apache Flink application, see Creating an
 * Application.
 */
export const createApplication: API.OperationMethod<
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76, __c9, 4) as any as S.Schema<CreateApplicationRequest>,
  output: __S(100, __c12, 4) as any as S.Schema<CreateApplicationResponse>,
  errors: [
    CodeValidationException,
    ConcurrentModificationException,
    InvalidArgumentException,
    InvalidRequestException,
    LimitExceededException,
    ResourceInUseException,
    TooManyTagsException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplication",
}));

export type CreateApplicationPresignedUrlError =
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates and returns a URL that you can use to connect to
 * an application's extension.
 *
 * The IAM role or user used to call this API defines the permissions to access the
 * extension. After the presigned URL is created, no additional permission is required to access
 * this URL. IAM authorization policies for this API are also enforced for every HTTP request
 * that attempts to connect to the extension.
 *
 * You control the amount of time that the URL will be valid using the `SessionExpirationDurationInSeconds`
 * parameter. If you do not provide this parameter, the returned URL is valid for twelve hours.
 *
 * The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes
 * to be valid.
 * If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.
 */
export const createApplicationPresignedUrl: API.OperationMethod<
  CreateApplicationPresignedUrlRequest,
  CreateApplicationPresignedUrlResponse,
  CreateApplicationPresignedUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(101, __c12, 5) as any as S.Schema<CreateApplicationPresignedUrlRequest>,
  output: __S(102, __c12, 6) as any as S.Schema<CreateApplicationPresignedUrlResponse>,
  errors: [InvalidArgumentException, ResourceInUseException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplicationPresignedUrl",
}));

export type CreateApplicationSnapshotError =
  | InvalidApplicationConfigurationException
  | InvalidArgumentException
  | InvalidRequestException
  | LimitExceededException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Creates a snapshot of the application's state data.
 */
export const createApplicationSnapshot: API.OperationMethod<
  CreateApplicationSnapshotRequest,
  CreateApplicationSnapshotResponse,
  CreateApplicationSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103, __c12, 7) as any as S.Schema<CreateApplicationSnapshotRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<CreateApplicationSnapshotResponse>,
  errors: [
    InvalidApplicationConfigurationException,
    InvalidArgumentException,
    InvalidRequestException,
    LimitExceededException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplicationSnapshot",
}));

export type DeleteApplicationError =
  | ConcurrentModificationException
  | InvalidApplicationConfigurationException
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified application. Managed Service for Apache Flink halts application execution and deletes the application.
 */
export const deleteApplication: API.OperationMethod<
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105, __c13, 1) as any as S.Schema<DeleteApplicationRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<DeleteApplicationResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidApplicationConfigurationException,
    InvalidArgumentException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplication",
}));

export type DeleteApplicationCloudWatchLoggingOptionError =
  | ConcurrentModificationException
  | InvalidApplicationConfigurationException
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an Amazon CloudWatch log stream from an SQL-based Kinesis Data Analytics application.
 */
export const deleteApplicationCloudWatchLoggingOption: API.OperationMethod<
  DeleteApplicationCloudWatchLoggingOptionRequest,
  DeleteApplicationCloudWatchLoggingOptionResponse,
  DeleteApplicationCloudWatchLoggingOptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106, __c13, 2) as any as S.Schema<DeleteApplicationCloudWatchLoggingOptionRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<DeleteApplicationCloudWatchLoggingOptionResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidApplicationConfigurationException,
    InvalidArgumentException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplicationCloudWatchLoggingOption",
}));

export type DeleteApplicationInputProcessingConfigurationError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an InputProcessingConfiguration from an input.
 */
export const deleteApplicationInputProcessingConfiguration: API.OperationMethod<
  DeleteApplicationInputProcessingConfigurationRequest,
  DeleteApplicationInputProcessingConfigurationResponse,
  DeleteApplicationInputProcessingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(
    107,
    __c13,
    3,
  ) as any as S.Schema<DeleteApplicationInputProcessingConfigurationRequest>,
  output: __S(
    108,
    __c13,
    4,
  ) as any as S.Schema<DeleteApplicationInputProcessingConfigurationResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplicationInputProcessingConfiguration",
}));

export type DeleteApplicationOutputError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration.
 * Kinesis Data Analytics will no longer write data from
 * the corresponding in-application stream to the external output destination.
 */
export const deleteApplicationOutput: API.OperationMethod<
  DeleteApplicationOutputRequest,
  DeleteApplicationOutputResponse,
  DeleteApplicationOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109, __c13, 5) as any as S.Schema<DeleteApplicationOutputRequest>,
  output: __S(108, __c13, 4) as any as S.Schema<DeleteApplicationOutputResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplicationOutput",
}));

export type DeleteApplicationReferenceDataSourceError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration.
 *
 * If the application is running, Kinesis Data Analytics immediately removes the in-application table
 * that you created using the AddApplicationReferenceDataSource operation.
 */
export const deleteApplicationReferenceDataSource: API.OperationMethod<
  DeleteApplicationReferenceDataSourceRequest,
  DeleteApplicationReferenceDataSourceResponse,
  DeleteApplicationReferenceDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(110, __c13, 6) as any as S.Schema<DeleteApplicationReferenceDataSourceRequest>,
  output: __S(108, __c13, 4) as any as S.Schema<DeleteApplicationReferenceDataSourceResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplicationReferenceDataSource",
}));

export type DeleteApplicationSnapshotError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Deletes a snapshot of application state.
 */
export const deleteApplicationSnapshot: API.OperationMethod<
  DeleteApplicationSnapshotRequest,
  DeleteApplicationSnapshotResponse,
  DeleteApplicationSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111, __c13, 7) as any as S.Schema<DeleteApplicationSnapshotRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<DeleteApplicationSnapshotResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplicationSnapshot",
}));

export type DeleteApplicationVpcConfigurationError =
  | ConcurrentModificationException
  | InvalidApplicationConfigurationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes a VPC configuration from a Managed Service for Apache Flink application.
 */
export const deleteApplicationVpcConfiguration: API.OperationMethod<
  DeleteApplicationVpcConfigurationRequest,
  DeleteApplicationVpcConfigurationResponse,
  DeleteApplicationVpcConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112, __c14, 0) as any as S.Schema<DeleteApplicationVpcConfigurationRequest>,
  output: __S(113, __c14, 1) as any as S.Schema<DeleteApplicationVpcConfigurationResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidApplicationConfigurationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplicationVpcConfiguration",
}));

export type DescribeApplicationError =
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns information about a specific Managed Service for Apache Flink application.
 *
 * If you want to retrieve a list of all applications in your account,
 * use the ListApplications operation.
 */
export const describeApplication: API.OperationMethod<
  DescribeApplicationRequest,
  DescribeApplicationResponse,
  DescribeApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114, __c14, 2) as any as S.Schema<DescribeApplicationRequest>,
  output: __S(100, __c12, 4) as any as S.Schema<DescribeApplicationResponse>,
  errors: [InvalidArgumentException, InvalidRequestException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplication",
}));

export type DescribeApplicationOperationError =
  | InvalidArgumentException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Provides a detailed description of a specified application operation. To see a list of all the operations of an application, invoke the ListApplicationOperations operation.
 *
 * This operation is supported only for Managed Service for Apache Flink.
 */
export const describeApplicationOperation: API.OperationMethod<
  DescribeApplicationOperationRequest,
  DescribeApplicationOperationResponse,
  DescribeApplicationOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115, __c14, 3) as any as S.Schema<DescribeApplicationOperationRequest>,
  output: __S(120, __c15, 0) as any as S.Schema<DescribeApplicationOperationResponse>,
  errors: [InvalidArgumentException, ResourceNotFoundException, UnsupportedOperationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplicationOperation",
}));

export type DescribeApplicationSnapshotError =
  | InvalidArgumentException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Returns information about a snapshot of application state data.
 */
export const describeApplicationSnapshot: API.OperationMethod<
  DescribeApplicationSnapshotRequest,
  DescribeApplicationSnapshotResponse,
  DescribeApplicationSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(121, __c15, 1) as any as S.Schema<DescribeApplicationSnapshotRequest>,
  output: __S(123, __c15, 3) as any as S.Schema<DescribeApplicationSnapshotResponse>,
  errors: [InvalidArgumentException, ResourceNotFoundException, UnsupportedOperationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplicationSnapshot",
}));

export type DescribeApplicationVersionError =
  | InvalidArgumentException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the ListApplicationVersions operation.
 *
 * This operation is supported only for Managed Service for Apache Flink.
 */
export const describeApplicationVersion: API.OperationMethod<
  DescribeApplicationVersionRequest,
  DescribeApplicationVersionResponse,
  DescribeApplicationVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<DescribeApplicationVersionRequest>,
  output: __S(125, __c15, 5) as any as S.Schema<DescribeApplicationVersionResponse>,
  errors: [InvalidArgumentException, ResourceNotFoundException, UnsupportedOperationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplicationVersion",
}));

export type DiscoverInputSchemaError =
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceProvisionedThroughputExceededException
  | ServiceUnavailableException
  | UnableToDetectSchemaException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating
 * sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose
 * delivery stream) or Amazon S3 object. In the response, the operation returns the inferred
 * schema and also the sample records that the operation used to infer the schema.
 *
 * You can use the inferred schema when configuring a streaming source for your application.
 * When you create an application using the Kinesis Data Analytics console, the console uses this
 * operation to infer a schema and show it in the console user interface.
 */
export const discoverInputSchema: API.OperationMethod<
  DiscoverInputSchemaRequest,
  DiscoverInputSchemaResponse,
  DiscoverInputSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(127, __c15, 7) as any as S.Schema<DiscoverInputSchemaRequest>,
  output: __S(129, __c16, 1) as any as S.Schema<DiscoverInputSchemaResponse>,
  errors: [
    InvalidArgumentException,
    InvalidRequestException,
    ResourceProvisionedThroughputExceededException,
    ServiceUnavailableException,
    UnableToDetectSchemaException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DiscoverInputSchema",
}));

export type ListApplicationOperationsError =
  | InvalidArgumentException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Lists all the operations performed for the specified application such as UpdateApplication, StartApplication etc.
 * The response also includes a summary of the operation.
 *
 * To get the complete description of a specific operation, invoke the DescribeApplicationOperation operation.
 *
 * This operation is supported only for Managed Service for Apache Flink.
 */
export const listApplicationOperations: API.PaginatedOperationMethod<
  ListApplicationOperationsRequest,
  ListApplicationOperationsResponse,
  ListApplicationOperationsError,
  Credentials | HttpClient.HttpClient,
  ApplicationOperationInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(130, __c16, 2) as any as S.Schema<ListApplicationOperationsRequest>,
  output: __S(133, __c16, 5) as any as S.Schema<ListApplicationOperationsResponse>,
  errors: [InvalidArgumentException, ResourceNotFoundException, UnsupportedOperationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplicationOperations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ApplicationOperationInfoList",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListApplicationsError = InvalidRequestException | CommonErrors;
/**
 * Returns a list of Managed Service for Apache Flink applications in your account. For each
 * application, the response includes the application name, Amazon Resource Name (ARN), and
 * status.
 *
 * If you want detailed information about a specific application, use
 * DescribeApplication.
 */
export const listApplications: API.PaginatedOperationMethod<
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListApplicationsError,
  Credentials | HttpClient.HttpClient,
  ApplicationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(134, __c16, 6) as any as S.Schema<ListApplicationsRequest>,
  output: __S(137, __c17, 1) as any as S.Schema<ListApplicationsResponse>,
  errors: [InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplications",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ApplicationSummaries",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListApplicationSnapshotsError =
  | InvalidArgumentException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Lists information about the current application snapshots.
 */
export const listApplicationSnapshots: API.PaginatedOperationMethod<
  ListApplicationSnapshotsRequest,
  ListApplicationSnapshotsResponse,
  ListApplicationSnapshotsError,
  Credentials | HttpClient.HttpClient,
  SnapshotDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(138, __c17, 2) as any as S.Schema<ListApplicationSnapshotsRequest>,
  output: __S(140, __c17, 4) as any as S.Schema<ListApplicationSnapshotsResponse>,
  errors: [InvalidArgumentException, UnsupportedOperationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplicationSnapshots",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SnapshotSummaries",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListApplicationVersionsError =
  | InvalidArgumentException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration
 * associated with each version.
 *
 * To get the complete description of a specific application version, invoke the DescribeApplicationVersion operation.
 *
 * This operation is supported only for Managed Service for Apache Flink.
 */
export const listApplicationVersions: API.PaginatedOperationMethod<
  ListApplicationVersionsRequest,
  ListApplicationVersionsResponse,
  ListApplicationVersionsError,
  Credentials | HttpClient.HttpClient,
  ApplicationVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(141, __c17, 5) as any as S.Schema<ListApplicationVersionsRequest>,
  output: __S(144, __c18, 0) as any as S.Schema<ListApplicationVersionsResponse>,
  errors: [InvalidArgumentException, ResourceNotFoundException, UnsupportedOperationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplicationVersions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ApplicationVersionSummaries",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves the list of key-value tags assigned to the application. For more information, see
 * Using Tagging.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(145, __c18, 1) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(146, __c18, 2) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [ConcurrentModificationException, InvalidArgumentException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type RollbackApplicationError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Reverts the application to the previous running version. You can roll back an
 * application if you suspect it is stuck in a transient status or in the running status.
 *
 * You can roll back an application only if it is in the `UPDATING`,
 * `AUTOSCALING`, or `RUNNING` statuses.
 *
 * When you rollback an application, it loads state data from the last successful snapshot.
 * If the application has no snapshots, Managed Service for Apache Flink rejects the rollback request.
 */
export const rollbackApplication: API.OperationMethod<
  RollbackApplicationRequest,
  RollbackApplicationResponse,
  RollbackApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(147, __c18, 3) as any as S.Schema<RollbackApplicationRequest>,
  output: __S(148, __c18, 4) as any as S.Schema<RollbackApplicationResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RollbackApplication",
}));

export type StartApplicationError =
  | InvalidApplicationConfigurationException
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Starts the specified Managed Service for Apache Flink application. After creating an application, you must exclusively call this operation to
 * start your application.
 */
export const startApplication: API.OperationMethod<
  StartApplicationRequest,
  StartApplicationResponse,
  StartApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(152, __c19, 0) as any as S.Schema<StartApplicationRequest>,
  output: __S(153, __c19, 1) as any as S.Schema<StartApplicationResponse>,
  errors: [
    InvalidApplicationConfigurationException,
    InvalidArgumentException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartApplication",
}));

export type StopApplicationError =
  | ConcurrentModificationException
  | InvalidApplicationConfigurationException
  | InvalidArgumentException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Stops the application from processing data. You can stop
 * an application only if it is in the running status, unless you set the `Force`
 * parameter to `true`.
 *
 * You can use the DescribeApplication operation to find the application status.
 *
 * Managed Service for Apache Flink takes a snapshot when the application is stopped, unless `Force` is set
 * to `true`.
 */
export const stopApplication: API.OperationMethod<
  StopApplicationRequest,
  StopApplicationResponse,
  StopApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(154, __c19, 2) as any as S.Schema<StopApplicationRequest>,
  output: __S(153, __c19, 1) as any as S.Schema<StopApplicationResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidApplicationConfigurationException,
    InvalidArgumentException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
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
 * Adds one or more key-value tags to a Managed Service for Apache Flink application. Note that the maximum number of application
 * tags includes system tags. The maximum number of user-defined application tags is 50.
 * For more information, see Using Tagging.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(155, __c19, 3) as any as S.Schema<TagResourceRequest>,
  output: __S(156, __c19, 4) as any as S.Schema<TagResourceResponse>,
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
 * Removes one or more tags from a Managed Service for Apache Flink application. For more information, see
 * Using Tagging.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(157, __c19, 5) as any as S.Schema<UntagResourceRequest>,
  output: __S(156, __c19, 4) as any as S.Schema<UntagResourceResponse>,
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
  | InvalidApplicationConfigurationException
  | InvalidArgumentException
  | InvalidRequestException
  | LimitExceededException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates an existing Managed Service for Apache Flink application. Using this operation, you
 * can update application code, input configuration, and output configuration.
 *
 * Managed Service for Apache Flink updates the `ApplicationVersionId` each time you update
 * your application.
 */
export const updateApplication: API.OperationMethod<
  UpdateApplicationRequest,
  UpdateApplicationResponse,
  UpdateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194, __c24, 2) as any as S.Schema<UpdateApplicationRequest>,
  output: __S(148, __c18, 4) as any as S.Schema<UpdateApplicationResponse>,
  errors: [
    CodeValidationException,
    ConcurrentModificationException,
    InvalidApplicationConfigurationException,
    InvalidArgumentException,
    InvalidRequestException,
    LimitExceededException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplication",
}));

export type UpdateApplicationMaintenanceConfigurationError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Updates the maintenance configuration of the Managed Service for Apache Flink application.
 *
 * You can invoke this operation on an application that is in one of the two following
 * states: `READY` or `RUNNING`. If you invoke it when the application is
 * in a state other than these two states, it throws a `ResourceInUseException`. The
 * service makes use of the updated configuration the next time it schedules maintenance for the
 * application. If you invoke this operation after the service schedules maintenance, the service
 * will apply the configuration update the next time it schedules maintenance for the
 * application. This means that you might not see the maintenance configuration update applied to
 * the maintenance process that follows a successful invocation of this operation, but to the
 * following maintenance process instead.
 *
 * To see the current maintenance configuration of your application, invoke the
 * DescribeApplication operation.
 *
 * For information about application maintenance, see Managed Service for Apache Flink for Apache Flink Maintenance.
 *
 * This operation is supported only for Managed Service for Apache Flink.
 */
export const updateApplicationMaintenanceConfiguration: API.OperationMethod<
  UpdateApplicationMaintenanceConfigurationRequest,
  UpdateApplicationMaintenanceConfigurationResponse,
  UpdateApplicationMaintenanceConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(196, __c24, 4) as any as S.Schema<UpdateApplicationMaintenanceConfigurationRequest>,
  output: __S(197, __c24, 5) as any as S.Schema<UpdateApplicationMaintenanceConfigurationResponse>,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplicationMaintenanceConfiguration",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ LogStreamARN: S.String })).annotate({
        identifier: "CloudWatchLoggingOption",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.optional(S.Number),
          CloudWatchLoggingOption: __S(0, __c0, 0),
          ConditionalToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddApplicationCloudWatchLoggingOptionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLoggingOptionId: S.optional(S.String),
          LogStreamARN: S.String,
          RoleARN: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CloudWatchLoggingOptionDescription",
      });
    case 3:
      return S.Array(__S(2, __c0, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationARN: S.optional(S.String),
          ApplicationVersionId: S.optional(S.Number),
          CloudWatchLoggingOptionDescriptions: S.optional(__S(3, __c0, 3)),
          OperationId: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "AddApplicationCloudWatchLoggingOptionResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ ResourceARN: S.String })).annotate({
        identifier: "InputLambdaProcessor",
      });
    case 6:
      return S.suspend(() => S.Struct({ InputLambdaProcessor: __S(5, __c0, 5) })).annotate({
        identifier: "InputProcessingConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ Count: S.optional(S.Number) })).annotate({
        identifier: "InputParallelism",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ RecordRowPath: S.String })).annotate({
        identifier: "JSONMappingParameters",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ RecordRowDelimiter: S.String, RecordColumnDelimiter: S.String }),
      ).annotate({ identifier: "CSVMappingParameters" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          JSONMappingParameters: S.optional(__S(8, __c1, 0)),
          CSVMappingParameters: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({ identifier: "MappingParameters" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RecordFormatType: S.String,
          MappingParameters: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({ identifier: "RecordFormat" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Mapping: S.optional(S.String), SqlType: S.String }),
      ).annotate({ identifier: "RecordColumn" });
    case 5:
      return S.Array(__S(12, __c1, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          RecordFormat: __S(11, __c1, 3),
          RecordEncoding: S.optional(S.String),
          RecordColumns: __S(13, __c1, 5),
        }),
      ).annotate({ identifier: "SourceSchema" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NamePrefix: S.String,
          InputProcessingConfiguration: S.optional(__S(6, __c0, 6)),
          KinesisStreamsInput: S.optional(__S(5, __c0, 5)),
          KinesisFirehoseInput: S.optional(__S(5, __c0, 5)),
          InputParallelism: S.optional(__S(7, __c0, 7)),
          InputSchema: __S(14, __c1, 6),
        }),
      ).annotate({ identifier: "Input" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          Input: __S(15, __c1, 7),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddApplicationInputRequest",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, RoleARN: S.optional(S.String) }),
      ).annotate({
        identifier: "InputLambdaProcessorDescription",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ InputLambdaProcessorDescription: S.optional(__S(18, __c2, 2)) }),
      ).annotate({
        identifier: "InputProcessingConfigurationDescription",
      });
    case 4:
      return S.suspend(() => S.Struct({ InputStartingPosition: S.optional(S.String) })).annotate({
        identifier: "InputStartingPositionConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InputId: S.optional(S.String),
          NamePrefix: S.optional(S.String),
          InAppStreamNames: S.optional(__S(17, __c2, 1)),
          InputProcessingConfigurationDescription: S.optional(__S(19, __c2, 3)),
          KinesisStreamsInputDescription: S.optional(__S(18, __c2, 2)),
          KinesisFirehoseInputDescription: S.optional(__S(18, __c2, 2)),
          InputSchema: S.optional(__S(14, __c1, 6)),
          InputParallelism: S.optional(__S(7, __c0, 7)),
          InputStartingPositionConfiguration: S.optional(__S(20, __c2, 4)),
        }),
      ).annotate({ identifier: "InputDescription" });
    case 6:
      return S.Array(__S(21, __c2, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationARN: S.optional(S.String),
          ApplicationVersionId: S.optional(S.Number),
          InputDescriptions: S.optional(__S(22, __c2, 6)),
        }).pipe(ns),
      ).annotate({
        identifier: "AddApplicationInputResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          InputId: S.String,
          InputProcessingConfiguration: __S(6, __c0, 6),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddApplicationInputProcessingConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationARN: S.optional(S.String),
          ApplicationVersionId: S.optional(S.Number),
          InputId: S.optional(S.String),
          InputProcessingConfigurationDescription: S.optional(__S(19, __c2, 3)),
        }).pipe(ns),
      ).annotate({
        identifier: "AddApplicationInputProcessingConfigurationResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ RecordFormatType: S.String })).annotate({
        identifier: "DestinationSchema",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          KinesisStreamsOutput: S.optional(__S(5, __c0, 5)),
          KinesisFirehoseOutput: S.optional(__S(5, __c0, 5)),
          LambdaOutput: S.optional(__S(5, __c0, 5)),
          DestinationSchema: __S(26, __c3, 2),
        }),
      ).annotate({ identifier: "Output" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          Output: __S(27, __c3, 3),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddApplicationOutputRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, RoleARN: S.optional(S.String) }),
      ).annotate({ identifier: "LambdaOutputDescription" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          OutputId: S.optional(S.String),
          Name: S.optional(S.String),
          KinesisStreamsOutputDescription: S.optional(__S(18, __c2, 2)),
          KinesisFirehoseOutputDescription: S.optional(__S(18, __c2, 2)),
          LambdaOutputDescription: S.optional(__S(29, __c3, 5)),
          DestinationSchema: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({ identifier: "OutputDescription" });
    case 7:
      return S.Array(__S(30, __c3, 6));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationARN: S.optional(S.String),
          ApplicationVersionId: S.optional(S.Number),
          OutputDescriptions: S.optional(__S(31, __c3, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "AddApplicationOutputResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ BucketARN: S.optional(S.String), FileKey: S.optional(S.String) }),
      ).annotate({ identifier: "S3ReferenceDataSource" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TableName: S.String,
          S3ReferenceDataSource: S.optional(__S(33, __c4, 1)),
          ReferenceSchema: __S(14, __c1, 6),
        }),
      ).annotate({ identifier: "ReferenceDataSource" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          ReferenceDataSource: __S(34, __c4, 2),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddApplicationReferenceDataSourceRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BucketARN: S.String,
          FileKey: S.String,
          ReferenceRoleARN: S.optional(S.String),
        }),
      ).annotate({
        identifier: "S3ReferenceDataSourceDescription",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ReferenceId: S.String,
          TableName: S.String,
          S3ReferenceDataSourceDescription: __S(36, __c4, 4),
          ReferenceSchema: S.optional(__S(14, __c1, 6)),
        }),
      ).annotate({
        identifier: "ReferenceDataSourceDescription",
      });
    case 6:
      return S.Array(__S(37, __c4, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationARN: S.optional(S.String),
          ApplicationVersionId: S.optional(S.Number),
          ReferenceDataSourceDescriptions: S.optional(__S(38, __c4, 6)),
        }).pipe(ns),
      ).annotate({
        identifier: "AddApplicationReferenceDataSourceResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SubnetIds: __S(17, __c2, 1), SecurityGroupIds: __S(17, __c2, 1) }),
      ).annotate({ identifier: "VpcConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.optional(S.Number),
          VpcConfiguration: __S(40, __c5, 0),
          ConditionalToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddApplicationVpcConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          VpcConfigurationId: S.String,
          VpcId: S.String,
          SubnetIds: __S(17, __c2, 1),
          SecurityGroupIds: __S(17, __c2, 1),
        }),
      ).annotate({
        identifier: "VpcConfigurationDescription",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationARN: S.optional(S.String),
          ApplicationVersionId: S.optional(S.Number),
          VpcConfigurationDescription: S.optional(__S(42, __c5, 2)),
          OperationId: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "AddApplicationVpcConfigurationResponse",
      });
    case 4:
      return S.Array(__S(15, __c1, 7));
    case 5:
      return S.Array(__S(27, __c3, 3));
    case 6:
      return S.Array(__S(34, __c4, 2));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Inputs: S.optional(__S(44, __c5, 4)),
          Outputs: S.optional(__S(45, __c5, 5)),
          ReferenceDataSources: S.optional(__S(46, __c5, 6)),
        }),
      ).annotate({
        identifier: "SqlApplicationConfiguration",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ConfigurationType: S.String,
          CheckpointingEnabled: S.optional(S.Boolean),
          CheckpointInterval: S.optional(S.Number),
          MinPauseBetweenCheckpoints: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CheckpointConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConfigurationType: S.String,
          MetricsLevel: S.optional(S.String),
          LogLevel: S.optional(S.String),
        }),
      ).annotate({ identifier: "MonitoringConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConfigurationType: S.String,
          Parallelism: S.optional(S.Number),
          ParallelismPerKPU: S.optional(S.Number),
          AutoScalingEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ParallelismConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CheckpointConfiguration: S.optional(__S(48, __c6, 0)),
          MonitoringConfiguration: S.optional(__S(49, __c6, 1)),
          ParallelismConfiguration: S.optional(__S(50, __c6, 2)),
        }),
      ).annotate({
        identifier: "FlinkApplicationConfiguration",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({ PropertyGroupId: S.String, PropertyMap: __S(52, __c6, 4) }),
      ).annotate({ identifier: "PropertyGroup" });
    case 6:
      return S.Array(__S(53, __c6, 5));
    case 7:
      return S.suspend(() => S.Struct({ PropertyGroups: __S(54, __c6, 6) })).annotate({
        identifier: "EnvironmentProperties",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ BucketARN: S.String, FileKey: S.String, ObjectVersion: S.optional(S.String) }),
      ).annotate({ identifier: "S3ContentLocation" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TextContent: S.optional(S.String),
          ZipFileContent: S.optional(T.Blob),
          S3ContentLocation: S.optional(__S(56, __c7, 0)),
        }),
      ).annotate({ identifier: "CodeContent" });
    case 2:
      return S.suspend(() =>
        S.Struct({ CodeContent: S.optional(__S(57, __c7, 1)), CodeContentType: S.String }),
      ).annotate({
        identifier: "ApplicationCodeConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ SnapshotsEnabled: S.Boolean })).annotate({
        identifier: "ApplicationSnapshotConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ RollbackEnabled: S.Boolean })).annotate({
        identifier: "ApplicationSystemRollbackConfiguration",
      });
    case 5:
      return S.Array(__S(40, __c5, 0));
    case 6:
      return S.suspend(() => S.Struct({ LogLevel: S.String })).annotate({
        identifier: "ZeppelinMonitoringConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ DatabaseARN: S.String })).annotate({
        identifier: "GlueDataCatalogConfiguration",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ GlueDataCatalogConfiguration: __S(63, __c7, 7) })).annotate(
        { identifier: "CatalogConfiguration" },
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ BucketARN: S.String, BasePath: S.optional(S.String) }),
      ).annotate({ identifier: "S3ContentBaseLocation" });
    case 2:
      return S.suspend(() => S.Struct({ S3ContentLocation: __S(65, __c8, 1) })).annotate({
        identifier: "DeployAsApplicationConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ GroupId: S.String, ArtifactId: S.String, Version: S.String }),
      ).annotate({ identifier: "MavenReference" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ArtifactType: S.String,
          S3ContentLocation: S.optional(__S(56, __c7, 0)),
          MavenReference: S.optional(__S(67, __c8, 3)),
        }),
      ).annotate({
        identifier: "CustomArtifactConfiguration",
      });
    case 5:
      return S.Array(__S(68, __c8, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          MonitoringConfiguration: S.optional(__S(62, __c7, 6)),
          CatalogConfiguration: S.optional(__S(64, __c8, 0)),
          DeployAsApplicationConfiguration: S.optional(__S(66, __c8, 2)),
          CustomArtifactsConfiguration: S.optional(__S(69, __c8, 5)),
        }),
      ).annotate({
        identifier: "ZeppelinApplicationConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ KeyId: S.optional(S.String), KeyType: S.String })).annotate(
        {
          identifier: "ApplicationEncryptionConfiguration",
        },
      );
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SqlApplicationConfiguration: S.optional(__S(47, __c5, 7)),
          FlinkApplicationConfiguration: S.optional(__S(51, __c6, 3)),
          EnvironmentProperties: S.optional(__S(55, __c6, 7)),
          ApplicationCodeConfiguration: S.optional(__S(58, __c7, 2)),
          ApplicationSnapshotConfiguration: S.optional(__S(59, __c7, 3)),
          ApplicationSystemRollbackConfiguration: S.optional(__S(60, __c7, 4)),
          VpcConfigurations: S.optional(__S(61, __c7, 5)),
          ZeppelinApplicationConfiguration: S.optional(__S(70, __c8, 6)),
          ApplicationEncryptionConfiguration: S.optional(__S(71, __c8, 7)),
        }),
      ).annotate({ identifier: "ApplicationConfiguration" });
    case 1:
      return S.Array(__S(0, __c0, 0));
    case 2:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.optional(S.String) })).annotate({
        identifier: "Tag",
      });
    case 3:
      return S.Array(__S(74, __c9, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          ApplicationDescription: S.optional(S.String),
          RuntimeEnvironment: S.String,
          ServiceExecutionRole: S.String,
          ApplicationConfiguration: S.optional(__S(72, __c9, 0)),
          CloudWatchLoggingOptions: S.optional(__S(73, __c9, 1)),
          Tags: S.optional(__S(75, __c9, 3)),
          ApplicationMode: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateApplicationRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InputDescriptions: S.optional(__S(22, __c2, 6)),
          OutputDescriptions: S.optional(__S(31, __c3, 7)),
          ReferenceDataSourceDescriptions: S.optional(__S(38, __c4, 6)),
        }),
      ).annotate({
        identifier: "SqlApplicationConfigurationDescription",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ BucketARN: S.String, FileKey: S.String, ObjectVersion: S.optional(S.String) }),
      ).annotate({
        identifier: "S3ApplicationCodeLocationDescription",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TextContent: S.optional(S.String),
          CodeMD5: S.optional(S.String),
          CodeSize: S.optional(S.Number),
          S3ApplicationCodeLocationDescription: S.optional(__S(78, __c9, 6)),
        }),
      ).annotate({ identifier: "CodeContentDescription" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CodeContentType: S.String,
          CodeContentDescription: S.optional(__S(79, __c9, 7)),
        }),
      ).annotate({
        identifier: "ApplicationCodeConfigurationDescription",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationRestoreType: S.String,
          SnapshotName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ApplicationRestoreConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ AllowNonRestoredState: S.optional(S.Boolean) })).annotate({
        identifier: "FlinkRunConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationRestoreConfigurationDescription: S.optional(__S(81, __c10, 1)),
          FlinkRunConfigurationDescription: S.optional(__S(82, __c10, 2)),
        }),
      ).annotate({
        identifier: "RunConfigurationDescription",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConfigurationType: S.optional(S.String),
          CheckpointingEnabled: S.optional(S.Boolean),
          CheckpointInterval: S.optional(S.Number),
          MinPauseBetweenCheckpoints: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CheckpointConfigurationDescription",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConfigurationType: S.optional(S.String),
          MetricsLevel: S.optional(S.String),
          LogLevel: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MonitoringConfigurationDescription",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConfigurationType: S.optional(S.String),
          Parallelism: S.optional(S.Number),
          ParallelismPerKPU: S.optional(S.Number),
          CurrentParallelism: S.optional(S.Number),
          AutoScalingEnabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ParallelismConfigurationDescription",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CheckpointConfigurationDescription: S.optional(__S(84, __c10, 4)),
          MonitoringConfigurationDescription: S.optional(__S(85, __c10, 5)),
          ParallelismConfigurationDescription: S.optional(__S(86, __c10, 6)),
          JobPlanDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FlinkApplicationConfigurationDescription",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PropertyGroupDescriptions: S.optional(__S(54, __c6, 6)) }),
      ).annotate({
        identifier: "EnvironmentPropertyDescriptions",
      });
    case 1:
      return S.Array(__S(42, __c5, 2));
    case 2:
      return S.suspend(() => S.Struct({ LogLevel: S.optional(S.String) })).annotate({
        identifier: "ZeppelinMonitoringConfigurationDescription",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          GlueDataCatalogConfigurationDescription: __S(63, __c7, 7),
        }),
      ).annotate({
        identifier: "CatalogConfigurationDescription",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ BucketARN: S.String, BasePath: S.optional(S.String) }),
      ).annotate({
        identifier: "S3ContentBaseLocationDescription",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ S3ContentLocationDescription: __S(92, __c11, 4) }),
      ).annotate({
        identifier: "DeployAsApplicationConfigurationDescription",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ArtifactType: S.optional(S.String),
          S3ContentLocationDescription: S.optional(__S(56, __c7, 0)),
          MavenReferenceDescription: S.optional(__S(67, __c8, 3)),
        }),
      ).annotate({
        identifier: "CustomArtifactConfigurationDescription",
      });
    case 7:
      return S.Array(__S(94, __c11, 6));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MonitoringConfigurationDescription: __S(90, __c11, 2),
          CatalogConfigurationDescription: S.optional(__S(91, __c11, 3)),
          DeployAsApplicationConfigurationDescription: S.optional(__S(93, __c11, 5)),
          CustomArtifactsConfigurationDescription: S.optional(__S(95, __c11, 7)),
        }),
      ).annotate({
        identifier: "ZeppelinApplicationConfigurationDescription",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SqlApplicationConfigurationDescription: S.optional(__S(77, __c9, 5)),
          ApplicationCodeConfigurationDescription: S.optional(__S(80, __c10, 0)),
          RunConfigurationDescription: S.optional(__S(83, __c10, 3)),
          FlinkApplicationConfigurationDescription: S.optional(__S(87, __c10, 7)),
          EnvironmentPropertyDescriptions: S.optional(__S(88, __c11, 0)),
          ApplicationSnapshotConfigurationDescription: S.optional(__S(59, __c7, 3)),
          ApplicationSystemRollbackConfigurationDescription: S.optional(__S(60, __c7, 4)),
          VpcConfigurationDescriptions: S.optional(__S(89, __c11, 1)),
          ZeppelinApplicationConfigurationDescription: S.optional(__S(96, __c12, 0)),
          ApplicationEncryptionConfigurationDescription: S.optional(__S(71, __c8, 7)),
        }),
      ).annotate({
        identifier: "ApplicationConfigurationDescription",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationMaintenanceWindowStartTime: S.String,
          ApplicationMaintenanceWindowEndTime: S.String,
        }),
      ).annotate({
        identifier: "ApplicationMaintenanceConfigurationDescription",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationARN: S.String,
          ApplicationDescription: S.optional(S.String),
          ApplicationName: S.String,
          RuntimeEnvironment: S.String,
          ServiceExecutionRole: S.optional(S.String),
          ApplicationStatus: S.String,
          ApplicationVersionId: S.Number,
          CreateTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdateTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ApplicationConfigurationDescription: S.optional(__S(97, __c12, 1)),
          CloudWatchLoggingOptionDescriptions: S.optional(__S(3, __c0, 3)),
          ApplicationMaintenanceConfigurationDescription: S.optional(__S(98, __c12, 2)),
          ApplicationVersionUpdatedFrom: S.optional(S.Number),
          ApplicationVersionRolledBackFrom: S.optional(S.Number),
          ApplicationVersionCreateTimestamp: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          ConditionalToken: S.optional(S.String),
          ApplicationVersionRolledBackTo: S.optional(S.Number),
          ApplicationMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "ApplicationDetail" });
    case 4:
      return S.suspend(() => S.Struct({ ApplicationDetail: __S(99, __c12, 3) }).pipe(ns)).annotate({
        identifier: "CreateApplicationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          UrlType: S.String,
          SessionExpirationDurationInSeconds: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateApplicationPresignedUrlRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ AuthorizedUrl: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateApplicationPresignedUrlResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ApplicationName: S.String, SnapshotName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateApplicationSnapshotRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateApplicationSnapshotResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CreateTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteApplicationRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.optional(S.Number),
          CloudWatchLoggingOptionId: S.String,
          ConditionalToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteApplicationCloudWatchLoggingOptionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          InputId: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteApplicationInputProcessingConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationARN: S.optional(S.String),
          ApplicationVersionId: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({
        identifier: "DeleteApplicationInputProcessingConfigurationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          OutputId: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteApplicationOutputRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.Number,
          ReferenceId: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteApplicationReferenceDataSourceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          SnapshotName: S.String,
          SnapshotCreationTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteApplicationSnapshotRequest",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.optional(S.Number),
          VpcConfigurationId: S.String,
          ConditionalToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteApplicationVpcConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationARN: S.optional(S.String),
          ApplicationVersionId: S.optional(S.Number),
          OperationId: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DeleteApplicationVpcConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          IncludeAdditionalDetails: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeApplicationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ApplicationName: S.String, OperationId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeApplicationOperationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationVersionUpdatedFrom: S.Number,
          ApplicationVersionUpdatedTo: S.Number,
        }),
      ).annotate({
        identifier: "ApplicationVersionChangeDetails",
      });
    case 5:
      return S.suspend(() => S.Struct({ ErrorString: S.optional(S.String) })).annotate({
        identifier: "ErrorInfo",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RollbackOperationId: S.optional(S.String),
          ErrorInfo: S.optional(__S(117, __c14, 5)),
        }),
      ).annotate({ identifier: "OperationFailureDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Operation: S.String,
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          OperationStatus: S.String,
          ApplicationVersionChangeDetails: S.optional(__S(116, __c14, 4)),
          OperationFailureDetails: S.optional(__S(118, __c14, 6)),
        }),
      ).annotate({
        identifier: "ApplicationOperationInfoDetails",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationOperationInfoDetails: S.optional(__S(119, __c14, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeApplicationOperationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ApplicationName: S.String, SnapshotName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeApplicationSnapshotRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SnapshotName: S.String,
          SnapshotStatus: S.String,
          ApplicationVersionId: S.Number,
          SnapshotCreationTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RuntimeEnvironment: S.optional(S.String),
          ApplicationEncryptionConfigurationDescription: S.optional(__S(71, __c8, 7)),
        }),
      ).annotate({ identifier: "SnapshotDetails" });
    case 3:
      return S.suspend(() => S.Struct({ SnapshotDetails: __S(122, __c15, 2) }).pipe(ns)).annotate({
        identifier: "DescribeApplicationSnapshotResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ApplicationName: S.String, ApplicationVersionId: S.Number }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeApplicationVersionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ApplicationVersionDetail: S.optional(__S(99, __c12, 3)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeApplicationVersionResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ BucketARN: S.String, FileKey: S.String })).annotate({
        identifier: "S3Configuration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceARN: S.optional(S.String),
          ServiceExecutionRole: S.String,
          InputStartingPositionConfiguration: S.optional(__S(20, __c2, 4)),
          S3Configuration: S.optional(__S(126, __c15, 6)),
          InputProcessingConfiguration: S.optional(__S(6, __c0, 6)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DiscoverInputSchemaRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(17, __c2, 1));
    case 1:
      return S.suspend(() =>
        S.Struct({
          InputSchema: S.optional(__S(14, __c1, 6)),
          ParsedInputRecords: S.optional(__S(128, __c16, 0)),
          ProcessedInputRecords: S.optional(__S(17, __c2, 1)),
          RawInputRecords: S.optional(__S(17, __c2, 1)),
        }).pipe(ns),
      ).annotate({
        identifier: "DiscoverInputSchemaResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          Limit: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Operation: S.optional(S.String),
          OperationStatus: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListApplicationOperationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Operation: S.optional(S.String),
          OperationId: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          OperationStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "ApplicationOperationInfo" });
    case 4:
      return S.Array(__S(131, __c16, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationOperationInfoList: S.optional(__S(132, __c16, 4)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListApplicationOperationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Limit: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListApplicationsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          ApplicationARN: S.String,
          ApplicationStatus: S.String,
          ApplicationVersionId: S.Number,
          RuntimeEnvironment: S.String,
          ApplicationMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "ApplicationSummary" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135, __c16, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationSummaries: __S(136, __c17, 0),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListApplicationsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          Limit: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListApplicationSnapshotsRequest",
      });
    case 3:
      return S.Array(__S(122, __c15, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          SnapshotSummaries: S.optional(__S(139, __c17, 3)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListApplicationSnapshotsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          Limit: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListApplicationVersionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ApplicationVersionId: S.Number, ApplicationStatus: S.String }),
      ).annotate({
        identifier: "ApplicationVersionSummary",
      });
    case 7:
      return S.Array(__S(142, __c17, 6));
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationVersionSummaries: S.optional(__S(143, __c17, 7)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListApplicationVersionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(75, __c9, 3)) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ApplicationName: S.String, CurrentApplicationVersionId: S.Number }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RollbackApplicationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ApplicationDetail: __S(99, __c12, 3), OperationId: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "RollbackApplicationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InputId: S.String,
          InputStartingPositionConfiguration: __S(20, __c2, 4),
        }),
      ).annotate({ identifier: "SqlRunConfiguration" });
    case 6:
      return S.Array(__S(149, __c18, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          FlinkRunConfiguration: S.optional(__S(82, __c10, 2)),
          SqlRunConfigurations: S.optional(__S(150, __c18, 6)),
          ApplicationRestoreConfiguration: S.optional(__S(81, __c10, 1)),
        }),
      ).annotate({ identifier: "RunConfiguration" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          RunConfiguration: S.optional(__S(151, __c18, 7)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartApplicationRequest" });
    case 1:
      return S.suspend(() => S.Struct({ OperationId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "StartApplicationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ApplicationName: S.String, Force: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopApplicationRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: __S(75, __c9, 3) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: __S(17, __c2, 1) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 6:
      return S.suspend(() => S.Struct({ ResourceARNUpdate: S.String })).annotate({
        identifier: "InputLambdaProcessorUpdate",
      });
    case 7:
      return S.suspend(() => S.Struct({ InputLambdaProcessorUpdate: __S(158, __c19, 6) })).annotate(
        {
          identifier: "InputProcessingConfigurationUpdate",
        },
      );
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RecordFormatUpdate: S.optional(__S(11, __c1, 3)),
          RecordEncodingUpdate: S.optional(S.String),
          RecordColumnUpdates: S.optional(__S(13, __c1, 5)),
        }),
      ).annotate({ identifier: "InputSchemaUpdate" });
    case 1:
      return S.suspend(() => S.Struct({ CountUpdate: S.Number })).annotate({
        identifier: "InputParallelismUpdate",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          InputId: S.String,
          NamePrefixUpdate: S.optional(S.String),
          InputProcessingConfigurationUpdate: S.optional(__S(159, __c19, 7)),
          KinesisStreamsInputUpdate: S.optional(__S(158, __c19, 6)),
          KinesisFirehoseInputUpdate: S.optional(__S(158, __c19, 6)),
          InputSchemaUpdate: S.optional(__S(160, __c20, 0)),
          InputParallelismUpdate: S.optional(__S(161, __c20, 1)),
        }),
      ).annotate({ identifier: "InputUpdate" });
    case 3:
      return S.Array(__S(162, __c20, 2));
    case 4:
      return S.suspend(() => S.Struct({ ResourceARNUpdate: S.String })).annotate({
        identifier: "LambdaOutputUpdate",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OutputId: S.String,
          NameUpdate: S.optional(S.String),
          KinesisStreamsOutputUpdate: S.optional(__S(158, __c19, 6)),
          KinesisFirehoseOutputUpdate: S.optional(__S(158, __c19, 6)),
          LambdaOutputUpdate: S.optional(__S(164, __c20, 4)),
          DestinationSchemaUpdate: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({ identifier: "OutputUpdate" });
    case 6:
      return S.Array(__S(165, __c20, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ BucketARNUpdate: S.optional(S.String), FileKeyUpdate: S.optional(S.String) }),
      ).annotate({
        identifier: "S3ReferenceDataSourceUpdate",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ReferenceId: S.String,
          TableNameUpdate: S.optional(S.String),
          S3ReferenceDataSourceUpdate: S.optional(__S(167, __c20, 7)),
          ReferenceSchemaUpdate: S.optional(__S(14, __c1, 6)),
        }),
      ).annotate({
        identifier: "ReferenceDataSourceUpdate",
      });
    case 1:
      return S.Array(__S(168, __c21, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          InputUpdates: S.optional(__S(163, __c20, 3)),
          OutputUpdates: S.optional(__S(166, __c20, 6)),
          ReferenceDataSourceUpdates: S.optional(__S(169, __c21, 1)),
        }),
      ).annotate({
        identifier: "SqlApplicationConfigurationUpdate",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          BucketARNUpdate: S.optional(S.String),
          FileKeyUpdate: S.optional(S.String),
          ObjectVersionUpdate: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3ContentLocationUpdate" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TextContentUpdate: S.optional(S.String),
          ZipFileContentUpdate: S.optional(T.Blob),
          S3ContentLocationUpdate: S.optional(__S(171, __c21, 3)),
        }),
      ).annotate({ identifier: "CodeContentUpdate" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CodeContentTypeUpdate: S.optional(S.String),
          CodeContentUpdate: S.optional(__S(172, __c21, 4)),
        }),
      ).annotate({
        identifier: "ApplicationCodeConfigurationUpdate",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConfigurationTypeUpdate: S.optional(S.String),
          CheckpointingEnabledUpdate: S.optional(S.Boolean),
          CheckpointIntervalUpdate: S.optional(S.Number),
          MinPauseBetweenCheckpointsUpdate: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CheckpointConfigurationUpdate",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConfigurationTypeUpdate: S.optional(S.String),
          MetricsLevelUpdate: S.optional(S.String),
          LogLevelUpdate: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MonitoringConfigurationUpdate",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ConfigurationTypeUpdate: S.optional(S.String),
          ParallelismUpdate: S.optional(S.Number),
          ParallelismPerKPUUpdate: S.optional(S.Number),
          AutoScalingEnabledUpdate: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ParallelismConfigurationUpdate",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CheckpointConfigurationUpdate: S.optional(__S(174, __c21, 6)),
          MonitoringConfigurationUpdate: S.optional(__S(175, __c21, 7)),
          ParallelismConfigurationUpdate: S.optional(__S(176, __c22, 0)),
        }),
      ).annotate({
        identifier: "FlinkApplicationConfigurationUpdate",
      });
    case 2:
      return S.suspend(() => S.Struct({ PropertyGroups: __S(54, __c6, 6) })).annotate({
        identifier: "EnvironmentPropertyUpdates",
      });
    case 3:
      return S.suspend(() => S.Struct({ SnapshotsEnabledUpdate: S.Boolean })).annotate({
        identifier: "ApplicationSnapshotConfigurationUpdate",
      });
    case 4:
      return S.suspend(() => S.Struct({ RollbackEnabledUpdate: S.Boolean })).annotate({
        identifier: "ApplicationSystemRollbackConfigurationUpdate",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          VpcConfigurationId: S.String,
          SubnetIdUpdates: S.optional(__S(17, __c2, 1)),
          SecurityGroupIdUpdates: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({ identifier: "VpcConfigurationUpdate" });
    case 6:
      return S.Array(__S(181, __c22, 5));
    case 7:
      return S.suspend(() => S.Struct({ LogLevelUpdate: S.String })).annotate({
        identifier: "ZeppelinMonitoringConfigurationUpdate",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ DatabaseARNUpdate: S.String })).annotate({
        identifier: "GlueDataCatalogConfigurationUpdate",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ GlueDataCatalogConfigurationUpdate: __S(184, __c23, 0) }),
      ).annotate({
        identifier: "CatalogConfigurationUpdate",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ BucketARNUpdate: S.optional(S.String), BasePathUpdate: S.optional(S.String) }),
      ).annotate({
        identifier: "S3ContentBaseLocationUpdate",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ S3ContentLocationUpdate: S.optional(__S(186, __c23, 2)) }),
      ).annotate({
        identifier: "DeployAsApplicationConfigurationUpdate",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MonitoringConfigurationUpdate: S.optional(__S(183, __c22, 7)),
          CatalogConfigurationUpdate: S.optional(__S(185, __c23, 1)),
          DeployAsApplicationConfigurationUpdate: S.optional(__S(187, __c23, 3)),
          CustomArtifactsConfigurationUpdate: S.optional(__S(69, __c8, 5)),
        }),
      ).annotate({
        identifier: "ZeppelinApplicationConfigurationUpdate",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ KeyIdUpdate: S.optional(S.String), KeyTypeUpdate: S.String }),
      ).annotate({
        identifier: "ApplicationEncryptionConfigurationUpdate",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SqlApplicationConfigurationUpdate: S.optional(__S(170, __c21, 2)),
          ApplicationCodeConfigurationUpdate: S.optional(__S(173, __c21, 5)),
          FlinkApplicationConfigurationUpdate: S.optional(__S(177, __c22, 1)),
          EnvironmentPropertyUpdates: S.optional(__S(178, __c22, 2)),
          ApplicationSnapshotConfigurationUpdate: S.optional(__S(179, __c22, 3)),
          ApplicationSystemRollbackConfigurationUpdate: S.optional(__S(180, __c22, 4)),
          VpcConfigurationUpdates: S.optional(__S(182, __c22, 6)),
          ZeppelinApplicationConfigurationUpdate: S.optional(__S(188, __c23, 4)),
          ApplicationEncryptionConfigurationUpdate: S.optional(__S(189, __c23, 5)),
        }),
      ).annotate({
        identifier: "ApplicationConfigurationUpdate",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          FlinkRunConfiguration: S.optional(__S(82, __c10, 2)),
          ApplicationRestoreConfiguration: S.optional(__S(81, __c10, 1)),
        }),
      ).annotate({ identifier: "RunConfigurationUpdate" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ CloudWatchLoggingOptionId: S.String, LogStreamARNUpdate: S.optional(S.String) }),
      ).annotate({
        identifier: "CloudWatchLoggingOptionUpdate",
      });
    case 1:
      return S.Array(__S(192, __c24, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          CurrentApplicationVersionId: S.optional(S.Number),
          ApplicationConfigurationUpdate: S.optional(__S(190, __c23, 6)),
          ServiceExecutionRoleUpdate: S.optional(S.String),
          RunConfigurationUpdate: S.optional(__S(191, __c23, 7)),
          CloudWatchLoggingOptionUpdates: S.optional(__S(193, __c24, 1)),
          ConditionalToken: S.optional(S.String),
          RuntimeEnvironmentUpdate: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateApplicationRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ApplicationMaintenanceWindowStartTimeUpdate: S.String }),
      ).annotate({
        identifier: "ApplicationMaintenanceConfigurationUpdate",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          ApplicationMaintenanceConfigurationUpdate: __S(195, __c24, 3),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateApplicationMaintenanceConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationARN: S.optional(S.String),
          ApplicationMaintenanceConfigurationDescription: S.optional(__S(98, __c12, 2)),
        }).pipe(ns),
      ).annotate({
        identifier: "UpdateApplicationMaintenanceConfigurationResponse",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
