import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class Firehose extends AWSServiceClient {
  createDeliveryStream(
    input: CreateDeliveryStreamInput,
  ): Effect.Effect<
    CreateDeliveryStreamOutput,
    | InvalidArgumentException
    | InvalidKMSResourceException
    | LimitExceededException
    | ResourceInUseException
    | CommonAwsError
  >;
  deleteDeliveryStream(
    input: DeleteDeliveryStreamInput,
  ): Effect.Effect<
    DeleteDeliveryStreamOutput,
    ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  describeDeliveryStream(
    input: DescribeDeliveryStreamInput,
  ): Effect.Effect<
    DescribeDeliveryStreamOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  listDeliveryStreams(
    input: ListDeliveryStreamsInput,
  ): Effect.Effect<ListDeliveryStreamsOutput, CommonAwsError>;
  listTagsForDeliveryStream(
    input: ListTagsForDeliveryStreamInput,
  ): Effect.Effect<
    ListTagsForDeliveryStreamOutput,
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putRecord(
    input: PutRecordInput,
  ): Effect.Effect<
    PutRecordOutput,
    | InvalidArgumentException
    | InvalidKMSResourceException
    | InvalidSourceException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putRecordBatch(
    input: PutRecordBatchInput,
  ): Effect.Effect<
    PutRecordBatchOutput,
    | InvalidArgumentException
    | InvalidKMSResourceException
    | InvalidSourceException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  startDeliveryStreamEncryption(
    input: StartDeliveryStreamEncryptionInput,
  ): Effect.Effect<
    StartDeliveryStreamEncryptionOutput,
    | InvalidArgumentException
    | InvalidKMSResourceException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopDeliveryStreamEncryption(
    input: StopDeliveryStreamEncryptionInput,
  ): Effect.Effect<
    StopDeliveryStreamEncryptionOutput,
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  tagDeliveryStream(
    input: TagDeliveryStreamInput,
  ): Effect.Effect<
    TagDeliveryStreamOutput,
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  untagDeliveryStream(
    input: UntagDeliveryStreamInput,
  ): Effect.Effect<
    UntagDeliveryStreamOutput,
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateDestination(
    input: UpdateDestinationInput,
  ): Effect.Effect<
    UpdateDestinationOutput,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export interface AmazonOpenSearchServerlessBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
export type AmazonOpenSearchServerlessBufferingIntervalInSeconds = number;

export type AmazonOpenSearchServerlessBufferingSizeInMBs = number;

export type AmazonOpenSearchServerlessCollectionEndpoint = string;

export interface AmazonOpenSearchServerlessDestinationConfiguration {
  RoleARN: string;
  CollectionEndpoint?: string;
  IndexName: string;
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints;
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions;
  S3BackupMode?: AmazonOpenSearchServerlessS3BackupMode;
  S3Configuration: S3DestinationConfiguration;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  VpcConfiguration?: VpcConfiguration;
}
export interface AmazonOpenSearchServerlessDestinationDescription {
  RoleARN?: string;
  CollectionEndpoint?: string;
  IndexName?: string;
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints;
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions;
  S3BackupMode?: AmazonOpenSearchServerlessS3BackupMode;
  S3DestinationDescription?: S3DestinationDescription;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  VpcConfigurationDescription?: VpcConfigurationDescription;
}
export interface AmazonOpenSearchServerlessDestinationUpdate {
  RoleARN?: string;
  CollectionEndpoint?: string;
  IndexName?: string;
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints;
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions;
  S3Update?: S3DestinationUpdate;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export type AmazonOpenSearchServerlessIndexName = string;

export type AmazonOpenSearchServerlessRetryDurationInSeconds = number;

export interface AmazonOpenSearchServerlessRetryOptions {
  DurationInSeconds?: number;
}
export type AmazonOpenSearchServerlessS3BackupMode =
  | "FailedDocumentsOnly"
  | "AllDocuments";
export interface AmazonopensearchserviceBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
export type AmazonopensearchserviceBufferingIntervalInSeconds = number;

export type AmazonopensearchserviceBufferingSizeInMBs = number;

export type AmazonopensearchserviceClusterEndpoint = string;

export interface AmazonopensearchserviceDestinationConfiguration {
  RoleARN: string;
  DomainARN?: string;
  ClusterEndpoint?: string;
  IndexName: string;
  TypeName?: string;
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod;
  BufferingHints?: AmazonopensearchserviceBufferingHints;
  RetryOptions?: AmazonopensearchserviceRetryOptions;
  S3BackupMode?: AmazonopensearchserviceS3BackupMode;
  S3Configuration: S3DestinationConfiguration;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  VpcConfiguration?: VpcConfiguration;
  DocumentIdOptions?: DocumentIdOptions;
}
export interface AmazonopensearchserviceDestinationDescription {
  RoleARN?: string;
  DomainARN?: string;
  ClusterEndpoint?: string;
  IndexName?: string;
  TypeName?: string;
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod;
  BufferingHints?: AmazonopensearchserviceBufferingHints;
  RetryOptions?: AmazonopensearchserviceRetryOptions;
  S3BackupMode?: AmazonopensearchserviceS3BackupMode;
  S3DestinationDescription?: S3DestinationDescription;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  VpcConfigurationDescription?: VpcConfigurationDescription;
  DocumentIdOptions?: DocumentIdOptions;
}
export interface AmazonopensearchserviceDestinationUpdate {
  RoleARN?: string;
  DomainARN?: string;
  ClusterEndpoint?: string;
  IndexName?: string;
  TypeName?: string;
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod;
  BufferingHints?: AmazonopensearchserviceBufferingHints;
  RetryOptions?: AmazonopensearchserviceRetryOptions;
  S3Update?: S3DestinationUpdate;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  DocumentIdOptions?: DocumentIdOptions;
}
export type AmazonopensearchserviceDomainARN = string;

export type AmazonopensearchserviceIndexName = string;

export type AmazonopensearchserviceIndexRotationPeriod =
  | "NoRotation"
  | "OneHour"
  | "OneDay"
  | "OneWeek"
  | "OneMonth";
export type AmazonopensearchserviceRetryDurationInSeconds = number;

export interface AmazonopensearchserviceRetryOptions {
  DurationInSeconds?: number;
}
export type AmazonopensearchserviceS3BackupMode =
  | "FailedDocumentsOnly"
  | "AllDocuments";
export type AmazonopensearchserviceTypeName = string;

export interface AuthenticationConfiguration {
  RoleARN: string;
  Connectivity: Connectivity;
}
export type AWSKMSKeyARN = string;

export type BlockSizeBytes = number;

export type BooleanObject = boolean;

export type BucketARN = string;

export interface BufferingHints {
  SizeInMBs?: number;
  IntervalInSeconds?: number;
}
export interface CatalogConfiguration {
  CatalogARN?: string;
  WarehouseLocation?: string;
}
export interface CloudWatchLoggingOptions {
  Enabled?: boolean;
  LogGroupName?: string;
  LogStreamName?: string;
}
export type ClusterJDBCURL = string;

export type ColumnToJsonKeyMappings = Record<string, string>;
export type CompressionFormat =
  | "UNCOMPRESSED"
  | "GZIP"
  | "ZIP"
  | "SNAPPY"
  | "HADOOP_SNAPPY";
export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly message?: string;
}> {}
export type Connectivity = "PUBLIC" | "PRIVATE";
export type ContentEncoding = "NONE" | "GZIP";
export interface CopyCommand {
  DataTableName: string;
  DataTableColumns?: string;
  CopyOptions?: string;
}
export type CopyOptions = string;

export interface CreateDeliveryStreamInput {
  DeliveryStreamName: string;
  DeliveryStreamType?: DeliveryStreamType;
  DirectPutSourceConfiguration?: DirectPutSourceConfiguration;
  KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;
  DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
  S3DestinationConfiguration?: S3DestinationConfiguration;
  ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;
  RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration;
  ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;
  AmazonopensearchserviceDestinationConfiguration?: AmazonopensearchserviceDestinationConfiguration;
  SplunkDestinationConfiguration?: SplunkDestinationConfiguration;
  HttpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration;
  Tags?: Array<Tag>;
  AmazonOpenSearchServerlessDestinationConfiguration?: AmazonOpenSearchServerlessDestinationConfiguration;
  MSKSourceConfiguration?: MSKSourceConfiguration;
  SnowflakeDestinationConfiguration?: SnowflakeDestinationConfiguration;
  IcebergDestinationConfiguration?: IcebergDestinationConfiguration;
  DatabaseSourceConfiguration?: DatabaseSourceConfiguration;
}
export interface CreateDeliveryStreamOutput {
  DeliveryStreamARN?: string;
}
export type CustomTimeZone = string;

export type Data = Uint8Array | string;

export type DatabaseColumnIncludeOrExcludeList = Array<string>;
export interface DatabaseColumnList {
  Include?: Array<string>;
  Exclude?: Array<string>;
}
export type DatabaseColumnName = string;

export type DatabaseEndpoint = string;

export type DatabaseIncludeOrExcludeList = Array<string>;
export interface DatabaseList {
  Include?: Array<string>;
  Exclude?: Array<string>;
}
export type DatabaseName = string;

export type DatabasePort = number;

export interface DatabaseSnapshotInfo {
  Id: string;
  Table: string;
  RequestTimestamp: Date | string;
  RequestedBy: SnapshotRequestedBy;
  Status: SnapshotStatus;
  FailureDescription?: FailureDescription;
}
export type DatabaseSnapshotInfoList = Array<DatabaseSnapshotInfo>;
export interface DatabaseSourceAuthenticationConfiguration {
  SecretsManagerConfiguration: SecretsManagerConfiguration;
}
export interface DatabaseSourceConfiguration {
  Type: DatabaseType;
  Endpoint: string;
  Port: number;
  SSLMode?: SSLMode;
  Databases: DatabaseList;
  Tables: DatabaseTableList;
  Columns?: DatabaseColumnList;
  SurrogateKeys?: Array<string>;
  SnapshotWatermarkTable: string;
  DatabaseSourceAuthenticationConfiguration: DatabaseSourceAuthenticationConfiguration;
  DatabaseSourceVPCConfiguration: DatabaseSourceVPCConfiguration;
}
export interface DatabaseSourceDescription {
  Type?: DatabaseType;
  Endpoint?: string;
  Port?: number;
  SSLMode?: SSLMode;
  Databases?: DatabaseList;
  Tables?: DatabaseTableList;
  Columns?: DatabaseColumnList;
  SurrogateKeys?: Array<string>;
  SnapshotWatermarkTable?: string;
  SnapshotInfo?: Array<DatabaseSnapshotInfo>;
  DatabaseSourceAuthenticationConfiguration?: DatabaseSourceAuthenticationConfiguration;
  DatabaseSourceVPCConfiguration?: DatabaseSourceVPCConfiguration;
}
export interface DatabaseSourceVPCConfiguration {
  VpcEndpointServiceName: string;
}
export type DatabaseSurrogateKeyList = Array<string>;
export type DatabaseTableIncludeOrExcludeList = Array<string>;
export interface DatabaseTableList {
  Include?: Array<string>;
  Exclude?: Array<string>;
}
export type DatabaseTableName = string;

export type DatabaseType = "MySQL" | "PostgreSQL";
export interface DataFormatConversionConfiguration {
  SchemaConfiguration?: SchemaConfiguration;
  InputFormatConfiguration?: InputFormatConfiguration;
  OutputFormatConfiguration?: OutputFormatConfiguration;
  Enabled?: boolean;
}
export type DataTableColumns = string;

export type DataTableName = string;

export type DefaultDocumentIdFormat = "FIREHOSE_DEFAULT" | "NO_DOCUMENT_ID";
export interface DeleteDeliveryStreamInput {
  DeliveryStreamName: string;
  AllowForceDelete?: boolean;
}
export interface DeleteDeliveryStreamOutput {}
export type DeliveryStartTimestamp = Date | string;

export type DeliveryStreamARN = string;

export interface DeliveryStreamDescription {
  DeliveryStreamName: string;
  DeliveryStreamARN: string;
  DeliveryStreamStatus: DeliveryStreamStatus;
  FailureDescription?: FailureDescription;
  DeliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration;
  DeliveryStreamType: DeliveryStreamType;
  VersionId: string;
  CreateTimestamp?: Date | string;
  LastUpdateTimestamp?: Date | string;
  Source?: SourceDescription;
  Destinations: Array<DestinationDescription>;
  HasMoreDestinations: boolean;
}
export interface DeliveryStreamEncryptionConfiguration {
  KeyARN?: string;
  KeyType?: KeyType;
  Status?: DeliveryStreamEncryptionStatus;
  FailureDescription?: FailureDescription;
}
export interface DeliveryStreamEncryptionConfigurationInput {
  KeyARN?: string;
  KeyType: KeyType;
}
export type DeliveryStreamEncryptionStatus =
  | "ENABLED"
  | "ENABLING"
  | "ENABLING_FAILED"
  | "DISABLED"
  | "DISABLING"
  | "DISABLING_FAILED";
export type DeliveryStreamFailureType =
  | "VPC_ENDPOINT_SERVICE_NAME_NOT_FOUND"
  | "VPC_INTERFACE_ENDPOINT_SERVICE_ACCESS_DENIED"
  | "RETIRE_KMS_GRANT_FAILED"
  | "CREATE_KMS_GRANT_FAILED"
  | "KMS_ACCESS_DENIED"
  | "DISABLED_KMS_KEY"
  | "INVALID_KMS_KEY"
  | "KMS_KEY_NOT_FOUND"
  | "KMS_OPT_IN_REQUIRED"
  | "CREATE_ENI_FAILED"
  | "DELETE_ENI_FAILED"
  | "SUBNET_NOT_FOUND"
  | "SECURITY_GROUP_NOT_FOUND"
  | "ENI_ACCESS_DENIED"
  | "SUBNET_ACCESS_DENIED"
  | "SECURITY_GROUP_ACCESS_DENIED"
  | "UNKNOWN_ERROR";
export type DeliveryStreamName = string;

export type DeliveryStreamNameList = Array<string>;
export type DeliveryStreamStatus =
  | "CREATING"
  | "CREATING_FAILED"
  | "DELETING"
  | "DELETING_FAILED"
  | "ACTIVE";
export type DeliveryStreamType =
  | "DirectPut"
  | "KinesisStreamAsSource"
  | "MSKAsSource"
  | "DatabaseAsSource";
export type DeliveryStreamVersionId = string;

export interface DescribeDeliveryStreamInput {
  DeliveryStreamName: string;
  Limit?: number;
  ExclusiveStartDestinationId?: string;
}
export type DescribeDeliveryStreamInputLimit = number;

export interface DescribeDeliveryStreamOutput {
  DeliveryStreamDescription: DeliveryStreamDescription;
}
export interface Deserializer {
  OpenXJsonSerDe?: OpenXJsonSerDe;
  HiveJsonSerDe?: HiveJsonSerDe;
}
export interface DestinationDescription {
  DestinationId: string;
  S3DestinationDescription?: S3DestinationDescription;
  ExtendedS3DestinationDescription?: ExtendedS3DestinationDescription;
  RedshiftDestinationDescription?: RedshiftDestinationDescription;
  ElasticsearchDestinationDescription?: ElasticsearchDestinationDescription;
  AmazonopensearchserviceDestinationDescription?: AmazonopensearchserviceDestinationDescription;
  SplunkDestinationDescription?: SplunkDestinationDescription;
  HttpEndpointDestinationDescription?: HttpEndpointDestinationDescription;
  SnowflakeDestinationDescription?: SnowflakeDestinationDescription;
  AmazonOpenSearchServerlessDestinationDescription?: AmazonOpenSearchServerlessDestinationDescription;
  IcebergDestinationDescription?: IcebergDestinationDescription;
}
export type DestinationDescriptionList = Array<DestinationDescription>;
export type DestinationId = string;

export interface DestinationTableConfiguration {
  DestinationTableName: string;
  DestinationDatabaseName: string;
  UniqueKeys?: Array<string>;
  PartitionSpec?: PartitionSpec;
  S3ErrorOutputPrefix?: string;
}
export type DestinationTableConfigurationList =
  Array<DestinationTableConfiguration>;
export interface DirectPutSourceConfiguration {
  ThroughputHintInMBs: number;
}
export interface DirectPutSourceDescription {
  ThroughputHintInMBs?: number;
}
export interface DocumentIdOptions {
  DefaultDocumentIdFormat: DefaultDocumentIdFormat;
}
export interface DynamicPartitioningConfiguration {
  RetryOptions?: RetryOptions;
  Enabled?: boolean;
}
export interface ElasticsearchBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
export type ElasticsearchBufferingIntervalInSeconds = number;

export type ElasticsearchBufferingSizeInMBs = number;

export type ElasticsearchClusterEndpoint = string;

export interface ElasticsearchDestinationConfiguration {
  RoleARN: string;
  DomainARN?: string;
  ClusterEndpoint?: string;
  IndexName: string;
  TypeName?: string;
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;
  BufferingHints?: ElasticsearchBufferingHints;
  RetryOptions?: ElasticsearchRetryOptions;
  S3BackupMode?: ElasticsearchS3BackupMode;
  S3Configuration: S3DestinationConfiguration;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  VpcConfiguration?: VpcConfiguration;
  DocumentIdOptions?: DocumentIdOptions;
}
export interface ElasticsearchDestinationDescription {
  RoleARN?: string;
  DomainARN?: string;
  ClusterEndpoint?: string;
  IndexName?: string;
  TypeName?: string;
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;
  BufferingHints?: ElasticsearchBufferingHints;
  RetryOptions?: ElasticsearchRetryOptions;
  S3BackupMode?: ElasticsearchS3BackupMode;
  S3DestinationDescription?: S3DestinationDescription;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  VpcConfigurationDescription?: VpcConfigurationDescription;
  DocumentIdOptions?: DocumentIdOptions;
}
export interface ElasticsearchDestinationUpdate {
  RoleARN?: string;
  DomainARN?: string;
  ClusterEndpoint?: string;
  IndexName?: string;
  TypeName?: string;
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;
  BufferingHints?: ElasticsearchBufferingHints;
  RetryOptions?: ElasticsearchRetryOptions;
  S3Update?: S3DestinationUpdate;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  DocumentIdOptions?: DocumentIdOptions;
}
export type ElasticsearchDomainARN = string;

export type ElasticsearchIndexName = string;

export type ElasticsearchIndexRotationPeriod =
  | "NoRotation"
  | "OneHour"
  | "OneDay"
  | "OneWeek"
  | "OneMonth";
export type ElasticsearchRetryDurationInSeconds = number;

export interface ElasticsearchRetryOptions {
  DurationInSeconds?: number;
}
export type ElasticsearchS3BackupMode = "FailedDocumentsOnly" | "AllDocuments";
export type ElasticsearchTypeName = string;

export interface EncryptionConfiguration {
  NoEncryptionConfig?: NoEncryptionConfig;
  KMSEncryptionConfig?: KMSEncryptionConfig;
}
export type ErrorCode = string;

export type ErrorMessage = string;

export type ErrorOutputPrefix = string;

export interface ExtendedS3DestinationConfiguration {
  RoleARN: string;
  BucketARN: string;
  Prefix?: string;
  ErrorOutputPrefix?: string;
  BufferingHints?: BufferingHints;
  CompressionFormat?: CompressionFormat;
  EncryptionConfiguration?: EncryptionConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: S3BackupMode;
  S3BackupConfiguration?: S3DestinationConfiguration;
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
  FileExtension?: string;
  CustomTimeZone?: string;
}
export interface ExtendedS3DestinationDescription {
  RoleARN: string;
  BucketARN: string;
  Prefix?: string;
  ErrorOutputPrefix?: string;
  BufferingHints: BufferingHints;
  CompressionFormat: CompressionFormat;
  EncryptionConfiguration: EncryptionConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: S3BackupMode;
  S3BackupDescription?: S3DestinationDescription;
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
  FileExtension?: string;
  CustomTimeZone?: string;
}
export interface ExtendedS3DestinationUpdate {
  RoleARN?: string;
  BucketARN?: string;
  Prefix?: string;
  ErrorOutputPrefix?: string;
  BufferingHints?: BufferingHints;
  CompressionFormat?: CompressionFormat;
  EncryptionConfiguration?: EncryptionConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: S3BackupMode;
  S3BackupUpdate?: S3DestinationUpdate;
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
  FileExtension?: string;
  CustomTimeZone?: string;
}
export interface FailureDescription {
  Type: DeliveryStreamFailureType;
  Details: string;
}
export type FileExtension = string;

export type GlueDataCatalogARN = string;

export type HECAcknowledgmentTimeoutInSeconds = number;

export type HECEndpoint = string;

export type HECEndpointType = "Raw" | "Event";
export type HECToken = string;

export interface HiveJsonSerDe {
  TimestampFormats?: Array<string>;
}
export type HttpEndpointAccessKey = string;

export type HttpEndpointAttributeName = string;

export type HttpEndpointAttributeValue = string;

export interface HttpEndpointBufferingHints {
  SizeInMBs?: number;
  IntervalInSeconds?: number;
}
export type HttpEndpointBufferingIntervalInSeconds = number;

export type HttpEndpointBufferingSizeInMBs = number;

export interface HttpEndpointCommonAttribute {
  AttributeName: string;
  AttributeValue: string;
}
export type HttpEndpointCommonAttributesList =
  Array<HttpEndpointCommonAttribute>;
export interface HttpEndpointConfiguration {
  Url: string;
  Name?: string;
  AccessKey?: string;
}
export interface HttpEndpointDescription {
  Url?: string;
  Name?: string;
}
export interface HttpEndpointDestinationConfiguration {
  EndpointConfiguration: HttpEndpointConfiguration;
  BufferingHints?: HttpEndpointBufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  RequestConfiguration?: HttpEndpointRequestConfiguration;
  ProcessingConfiguration?: ProcessingConfiguration;
  RoleARN?: string;
  RetryOptions?: HttpEndpointRetryOptions;
  S3BackupMode?: HttpEndpointS3BackupMode;
  S3Configuration: S3DestinationConfiguration;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
export interface HttpEndpointDestinationDescription {
  EndpointConfiguration?: HttpEndpointDescription;
  BufferingHints?: HttpEndpointBufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  RequestConfiguration?: HttpEndpointRequestConfiguration;
  ProcessingConfiguration?: ProcessingConfiguration;
  RoleARN?: string;
  RetryOptions?: HttpEndpointRetryOptions;
  S3BackupMode?: HttpEndpointS3BackupMode;
  S3DestinationDescription?: S3DestinationDescription;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
export interface HttpEndpointDestinationUpdate {
  EndpointConfiguration?: HttpEndpointConfiguration;
  BufferingHints?: HttpEndpointBufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  RequestConfiguration?: HttpEndpointRequestConfiguration;
  ProcessingConfiguration?: ProcessingConfiguration;
  RoleARN?: string;
  RetryOptions?: HttpEndpointRetryOptions;
  S3BackupMode?: HttpEndpointS3BackupMode;
  S3Update?: S3DestinationUpdate;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
export type HttpEndpointName = string;

export interface HttpEndpointRequestConfiguration {
  ContentEncoding?: ContentEncoding;
  CommonAttributes?: Array<HttpEndpointCommonAttribute>;
}
export type HttpEndpointRetryDurationInSeconds = number;

export interface HttpEndpointRetryOptions {
  DurationInSeconds?: number;
}
export type HttpEndpointS3BackupMode = "FailedDataOnly" | "AllData";
export type HttpEndpointUrl = string;

export interface IcebergDestinationConfiguration {
  DestinationTableConfigurationList?: Array<DestinationTableConfiguration>;
  SchemaEvolutionConfiguration?: SchemaEvolutionConfiguration;
  TableCreationConfiguration?: TableCreationConfiguration;
  BufferingHints?: BufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: IcebergS3BackupMode;
  RetryOptions?: RetryOptions;
  RoleARN: string;
  AppendOnly?: boolean;
  CatalogConfiguration: CatalogConfiguration;
  S3Configuration: S3DestinationConfiguration;
}
export interface IcebergDestinationDescription {
  DestinationTableConfigurationList?: Array<DestinationTableConfiguration>;
  SchemaEvolutionConfiguration?: SchemaEvolutionConfiguration;
  TableCreationConfiguration?: TableCreationConfiguration;
  BufferingHints?: BufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: IcebergS3BackupMode;
  RetryOptions?: RetryOptions;
  RoleARN?: string;
  AppendOnly?: boolean;
  CatalogConfiguration?: CatalogConfiguration;
  S3DestinationDescription?: S3DestinationDescription;
}
export interface IcebergDestinationUpdate {
  DestinationTableConfigurationList?: Array<DestinationTableConfiguration>;
  SchemaEvolutionConfiguration?: SchemaEvolutionConfiguration;
  TableCreationConfiguration?: TableCreationConfiguration;
  BufferingHints?: BufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: IcebergS3BackupMode;
  RetryOptions?: RetryOptions;
  RoleARN?: string;
  AppendOnly?: boolean;
  CatalogConfiguration?: CatalogConfiguration;
  S3Configuration?: S3DestinationConfiguration;
}
export type IcebergS3BackupMode = "FailedDataOnly" | "AllData";
export interface InputFormatConfiguration {
  Deserializer?: Deserializer;
}
export type IntervalInSeconds = number;

export declare class InvalidArgumentException extends EffectData.TaggedError(
  "InvalidArgumentException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidKMSResourceException extends EffectData.TaggedError(
  "InvalidKMSResourceException",
)<{
  readonly code?: string;
  readonly message?: string;
}> {}
export declare class InvalidSourceException extends EffectData.TaggedError(
  "InvalidSourceException",
)<{
  readonly code?: string;
  readonly message?: string;
}> {}
export type KeyType = "AWS_OWNED_CMK" | "CUSTOMER_MANAGED_CMK";
export type KinesisStreamARN = string;

export interface KinesisStreamSourceConfiguration {
  KinesisStreamARN: string;
  RoleARN: string;
}
export interface KinesisStreamSourceDescription {
  KinesisStreamARN?: string;
  RoleARN?: string;
  DeliveryStartTimestamp?: Date | string;
}
export interface KMSEncryptionConfig {
  AWSKMSKeyARN: string;
}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListDeliveryStreamsInput {
  Limit?: number;
  DeliveryStreamType?: DeliveryStreamType;
  ExclusiveStartDeliveryStreamName?: string;
}
export type ListDeliveryStreamsInputLimit = number;

export interface ListDeliveryStreamsOutput {
  DeliveryStreamNames: Array<string>;
  HasMoreDeliveryStreams: boolean;
}
export type ListOfNonEmptyStrings = Array<string>;
export type ListOfNonEmptyStringsWithoutWhitespace = Array<string>;
export interface ListTagsForDeliveryStreamInput {
  DeliveryStreamName: string;
  ExclusiveStartTagKey?: string;
  Limit?: number;
}
export type ListTagsForDeliveryStreamInputLimit = number;

export interface ListTagsForDeliveryStreamOutput {
  Tags: Array<Tag>;
  HasMoreTags: boolean;
}
export type ListTagsForDeliveryStreamOutputTagList = Array<Tag>;
export type LogGroupName = string;

export type LogStreamName = string;

export type MSKClusterARN = string;

export interface MSKSourceConfiguration {
  MSKClusterARN: string;
  TopicName: string;
  AuthenticationConfiguration: AuthenticationConfiguration;
  ReadFromTimestamp?: Date | string;
}
export interface MSKSourceDescription {
  MSKClusterARN?: string;
  TopicName?: string;
  AuthenticationConfiguration?: AuthenticationConfiguration;
  DeliveryStartTimestamp?: Date | string;
  ReadFromTimestamp?: Date | string;
}
export type NoEncryptionConfig = "NoEncryption";
export type NonEmptyString = string;

export type NonEmptyStringWithoutWhitespace = string;

export type NonNegativeIntegerObject = number;

export interface OpenXJsonSerDe {
  ConvertDotsInJsonKeysToUnderscores?: boolean;
  CaseInsensitive?: boolean;
  ColumnToJsonKeyMappings?: Record<string, string>;
}
export type OrcCompression = "NONE" | "ZLIB" | "SNAPPY";
export type OrcFormatVersion = "V0_11" | "V0_12";
export type OrcRowIndexStride = number;

export interface OrcSerDe {
  StripeSizeBytes?: number;
  BlockSizeBytes?: number;
  RowIndexStride?: number;
  EnablePadding?: boolean;
  PaddingTolerance?: number;
  Compression?: OrcCompression;
  BloomFilterColumns?: Array<string>;
  BloomFilterFalsePositiveProbability?: number;
  DictionaryKeyThreshold?: number;
  FormatVersion?: OrcFormatVersion;
}
export type OrcStripeSizeBytes = number;

export interface OutputFormatConfiguration {
  Serializer?: Serializer;
}
export type ParquetCompression = "UNCOMPRESSED" | "GZIP" | "SNAPPY";
export type ParquetPageSizeBytes = number;

export interface ParquetSerDe {
  BlockSizeBytes?: number;
  PageSizeBytes?: number;
  Compression?: ParquetCompression;
  EnableDictionaryCompression?: boolean;
  MaxPaddingBytes?: number;
  WriterVersion?: ParquetWriterVersion;
}
export type ParquetWriterVersion = "V1" | "V2";
export interface PartitionField {
  SourceName: string;
}
export type PartitionFields = Array<PartitionField>;
export interface PartitionSpec {
  Identity?: Array<PartitionField>;
}
export type Password = string;

export type Prefix = string;

export interface ProcessingConfiguration {
  Enabled?: boolean;
  Processors?: Array<Processor>;
}
export interface Processor {
  Type: ProcessorType;
  Parameters?: Array<ProcessorParameter>;
}
export type ProcessorList = Array<Processor>;
export interface ProcessorParameter {
  ParameterName: ProcessorParameterName;
  ParameterValue: string;
}
export type ProcessorParameterList = Array<ProcessorParameter>;
export type ProcessorParameterName =
  | "LAMBDA_ARN"
  | "LAMBDA_NUMBER_OF_RETRIES"
  | "METADATA_EXTRACTION_QUERY"
  | "JSON_PARSING_ENGINE"
  | "ROLE_ARN"
  | "BUFFER_SIZE_IN_MB"
  | "BUFFER_INTERVAL_IN_SECONDS"
  | "SUB_RECORD_TYPE"
  | "Delimiter"
  | "COMPRESSION_FORMAT"
  | "DATA_MESSAGE_EXTRACTION";
export type ProcessorParameterValue = string;

export type ProcessorType =
  | "RecordDeAggregation"
  | "Decompression"
  | "CloudWatchLogProcessing"
  | "Lambda"
  | "MetadataExtraction"
  | "AppendDelimiterToRecord";
export type Proportion = number;

export interface PutRecordBatchInput {
  DeliveryStreamName: string;
  Records: Array<FirehoseRecord>;
}
export interface PutRecordBatchOutput {
  FailedPutCount: number;
  Encrypted?: boolean;
  RequestResponses: Array<PutRecordBatchResponseEntry>;
}
export type PutRecordBatchRequestEntryList = Array<FirehoseRecord>;
export interface PutRecordBatchResponseEntry {
  RecordId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type PutRecordBatchResponseEntryList =
  Array<PutRecordBatchResponseEntry>;
export interface PutRecordInput {
  DeliveryStreamName: string;
  Record: FirehoseRecord;
}
export interface PutRecordOutput {
  RecordId: string;
  Encrypted?: boolean;
}
export type PutResponseRecordId = string;

export type ReadFromTimestamp = Date | string;

export interface FirehoseRecord {
  Data: Uint8Array | string;
}
export interface RedshiftDestinationConfiguration {
  RoleARN: string;
  ClusterJDBCURL: string;
  CopyCommand: CopyCommand;
  Username?: string;
  Password?: string;
  RetryOptions?: RedshiftRetryOptions;
  S3Configuration: S3DestinationConfiguration;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: RedshiftS3BackupMode;
  S3BackupConfiguration?: S3DestinationConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
export interface RedshiftDestinationDescription {
  RoleARN: string;
  ClusterJDBCURL: string;
  CopyCommand: CopyCommand;
  Username?: string;
  RetryOptions?: RedshiftRetryOptions;
  S3DestinationDescription: S3DestinationDescription;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: RedshiftS3BackupMode;
  S3BackupDescription?: S3DestinationDescription;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
export interface RedshiftDestinationUpdate {
  RoleARN?: string;
  ClusterJDBCURL?: string;
  CopyCommand?: CopyCommand;
  Username?: string;
  Password?: string;
  RetryOptions?: RedshiftRetryOptions;
  S3Update?: S3DestinationUpdate;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: RedshiftS3BackupMode;
  S3BackupUpdate?: S3DestinationUpdate;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
export type RedshiftRetryDurationInSeconds = number;

export interface RedshiftRetryOptions {
  DurationInSeconds?: number;
}
export type RedshiftS3BackupMode = "Disabled" | "Enabled";
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
export type RetryDurationInSeconds = number;

export interface RetryOptions {
  DurationInSeconds?: number;
}
export type RoleARN = string;

export type S3BackupMode = "Disabled" | "Enabled";
export interface S3DestinationConfiguration {
  RoleARN: string;
  BucketARN: string;
  Prefix?: string;
  ErrorOutputPrefix?: string;
  BufferingHints?: BufferingHints;
  CompressionFormat?: CompressionFormat;
  EncryptionConfiguration?: EncryptionConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export interface S3DestinationDescription {
  RoleARN: string;
  BucketARN: string;
  Prefix?: string;
  ErrorOutputPrefix?: string;
  BufferingHints: BufferingHints;
  CompressionFormat: CompressionFormat;
  EncryptionConfiguration: EncryptionConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export interface S3DestinationUpdate {
  RoleARN?: string;
  BucketARN?: string;
  Prefix?: string;
  ErrorOutputPrefix?: string;
  BufferingHints?: BufferingHints;
  CompressionFormat?: CompressionFormat;
  EncryptionConfiguration?: EncryptionConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export interface SchemaConfiguration {
  RoleARN?: string;
  CatalogId?: string;
  DatabaseName?: string;
  TableName?: string;
  Region?: string;
  VersionId?: string;
}
export interface SchemaEvolutionConfiguration {
  Enabled: boolean;
}
export type SecretARN = string;

export interface SecretsManagerConfiguration {
  SecretARN?: string;
  RoleARN?: string;
  Enabled: boolean;
}
export type SecurityGroupIdList = Array<string>;
export interface Serializer {
  ParquetSerDe?: ParquetSerDe;
  OrcSerDe?: OrcSerDe;
}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export type SizeInMBs = number;

export type SnapshotRequestedBy = "USER" | "FIREHOSE";
export type SnapshotStatus = "IN_PROGRESS" | "COMPLETE" | "SUSPENDED";
export type SnowflakeAccountUrl = string;

export interface SnowflakeBufferingHints {
  SizeInMBs?: number;
  IntervalInSeconds?: number;
}
export type SnowflakeBufferingIntervalInSeconds = number;

export type SnowflakeBufferingSizeInMBs = number;

export type SnowflakeContentColumnName = string;

export type SnowflakeDatabase = string;

export type SnowflakeDataLoadingOption =
  | "JSON_MAPPING"
  | "VARIANT_CONTENT_MAPPING"
  | "VARIANT_CONTENT_AND_METADATA_MAPPING";
export interface SnowflakeDestinationConfiguration {
  AccountUrl: string;
  PrivateKey?: string;
  KeyPassphrase?: string;
  User?: string;
  Database: string;
  Schema: string;
  Table: string;
  SnowflakeRoleConfiguration?: SnowflakeRoleConfiguration;
  DataLoadingOption?: SnowflakeDataLoadingOption;
  MetaDataColumnName?: string;
  ContentColumnName?: string;
  SnowflakeVpcConfiguration?: SnowflakeVpcConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  ProcessingConfiguration?: ProcessingConfiguration;
  RoleARN: string;
  RetryOptions?: SnowflakeRetryOptions;
  S3BackupMode?: SnowflakeS3BackupMode;
  S3Configuration: S3DestinationConfiguration;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
  BufferingHints?: SnowflakeBufferingHints;
}
export interface SnowflakeDestinationDescription {
  AccountUrl?: string;
  User?: string;
  Database?: string;
  Schema?: string;
  Table?: string;
  SnowflakeRoleConfiguration?: SnowflakeRoleConfiguration;
  DataLoadingOption?: SnowflakeDataLoadingOption;
  MetaDataColumnName?: string;
  ContentColumnName?: string;
  SnowflakeVpcConfiguration?: SnowflakeVpcConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  ProcessingConfiguration?: ProcessingConfiguration;
  RoleARN?: string;
  RetryOptions?: SnowflakeRetryOptions;
  S3BackupMode?: SnowflakeS3BackupMode;
  S3DestinationDescription?: S3DestinationDescription;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
  BufferingHints?: SnowflakeBufferingHints;
}
export interface SnowflakeDestinationUpdate {
  AccountUrl?: string;
  PrivateKey?: string;
  KeyPassphrase?: string;
  User?: string;
  Database?: string;
  Schema?: string;
  Table?: string;
  SnowflakeRoleConfiguration?: SnowflakeRoleConfiguration;
  DataLoadingOption?: SnowflakeDataLoadingOption;
  MetaDataColumnName?: string;
  ContentColumnName?: string;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  ProcessingConfiguration?: ProcessingConfiguration;
  RoleARN?: string;
  RetryOptions?: SnowflakeRetryOptions;
  S3BackupMode?: SnowflakeS3BackupMode;
  S3Update?: S3DestinationUpdate;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
  BufferingHints?: SnowflakeBufferingHints;
}
export type SnowflakeKeyPassphrase = string;

export type SnowflakeMetaDataColumnName = string;

export type SnowflakePrivateKey = string;

export type SnowflakePrivateLinkVpceId = string;

export type SnowflakeRetryDurationInSeconds = number;

export interface SnowflakeRetryOptions {
  DurationInSeconds?: number;
}
export type SnowflakeRole = string;

export interface SnowflakeRoleConfiguration {
  Enabled?: boolean;
  SnowflakeRole?: string;
}
export type SnowflakeS3BackupMode = "FailedDataOnly" | "AllData";
export type SnowflakeSchema = string;

export type SnowflakeTable = string;

export type SnowflakeUser = string;

export interface SnowflakeVpcConfiguration {
  PrivateLinkVpceId: string;
}
export interface SourceDescription {
  DirectPutSourceDescription?: DirectPutSourceDescription;
  KinesisStreamSourceDescription?: KinesisStreamSourceDescription;
  MSKSourceDescription?: MSKSourceDescription;
  DatabaseSourceDescription?: DatabaseSourceDescription;
}
export interface SplunkBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
export type SplunkBufferingIntervalInSeconds = number;

export type SplunkBufferingSizeInMBs = number;

export interface SplunkDestinationConfiguration {
  HECEndpoint: string;
  HECEndpointType: HECEndpointType;
  HECToken?: string;
  HECAcknowledgmentTimeoutInSeconds?: number;
  RetryOptions?: SplunkRetryOptions;
  S3BackupMode?: SplunkS3BackupMode;
  S3Configuration: S3DestinationConfiguration;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  BufferingHints?: SplunkBufferingHints;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
export interface SplunkDestinationDescription {
  HECEndpoint?: string;
  HECEndpointType?: HECEndpointType;
  HECToken?: string;
  HECAcknowledgmentTimeoutInSeconds?: number;
  RetryOptions?: SplunkRetryOptions;
  S3BackupMode?: SplunkS3BackupMode;
  S3DestinationDescription?: S3DestinationDescription;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  BufferingHints?: SplunkBufferingHints;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
export interface SplunkDestinationUpdate {
  HECEndpoint?: string;
  HECEndpointType?: HECEndpointType;
  HECToken?: string;
  HECAcknowledgmentTimeoutInSeconds?: number;
  RetryOptions?: SplunkRetryOptions;
  S3BackupMode?: SplunkS3BackupMode;
  S3Update?: S3DestinationUpdate;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  BufferingHints?: SplunkBufferingHints;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
export type SplunkRetryDurationInSeconds = number;

export interface SplunkRetryOptions {
  DurationInSeconds?: number;
}
export type SplunkS3BackupMode = "FailedEventsOnly" | "AllEvents";
export type SSLMode = "Disabled" | "Enabled";
export interface StartDeliveryStreamEncryptionInput {
  DeliveryStreamName: string;
  DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
}
export interface StartDeliveryStreamEncryptionOutput {}
export interface StopDeliveryStreamEncryptionInput {
  DeliveryStreamName: string;
}
export interface StopDeliveryStreamEncryptionOutput {}
export type StringWithLettersDigitsUnderscoresDots = string;

export type SubnetIdList = Array<string>;
export interface TableCreationConfiguration {
  Enabled: boolean;
}
export interface Tag {
  Key: string;
  Value?: string;
}
export interface TagDeliveryStreamInput {
  DeliveryStreamName: string;
  Tags: Array<Tag>;
}
export type TagDeliveryStreamInputTagList = Array<Tag>;
export interface TagDeliveryStreamOutput {}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagValue = string;

export type ThroughputHintInMBs = number;

export type Timestamp = Date | string;

export type TopicName = string;

export interface UntagDeliveryStreamInput {
  DeliveryStreamName: string;
  TagKeys: Array<string>;
}
export interface UntagDeliveryStreamOutput {}
export interface UpdateDestinationInput {
  DeliveryStreamName: string;
  CurrentDeliveryStreamVersionId: string;
  DestinationId: string;
  S3DestinationUpdate?: S3DestinationUpdate;
  ExtendedS3DestinationUpdate?: ExtendedS3DestinationUpdate;
  RedshiftDestinationUpdate?: RedshiftDestinationUpdate;
  ElasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate;
  AmazonopensearchserviceDestinationUpdate?: AmazonopensearchserviceDestinationUpdate;
  SplunkDestinationUpdate?: SplunkDestinationUpdate;
  HttpEndpointDestinationUpdate?: HttpEndpointDestinationUpdate;
  AmazonOpenSearchServerlessDestinationUpdate?: AmazonOpenSearchServerlessDestinationUpdate;
  SnowflakeDestinationUpdate?: SnowflakeDestinationUpdate;
  IcebergDestinationUpdate?: IcebergDestinationUpdate;
}
export interface UpdateDestinationOutput {}
export type Username = string;

export interface VpcConfiguration {
  SubnetIds: Array<string>;
  RoleARN: string;
  SecurityGroupIds: Array<string>;
}
export interface VpcConfigurationDescription {
  SubnetIds: Array<string>;
  RoleARN: string;
  SecurityGroupIds: Array<string>;
  VpcId: string;
}
export type VpcEndpointServiceName = string;

export type WarehouseLocation = string;

export declare namespace CreateDeliveryStream {
  export type Input = CreateDeliveryStreamInput;
  export type Output = CreateDeliveryStreamOutput;
  export type Error =
    | InvalidArgumentException
    | InvalidKMSResourceException
    | LimitExceededException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteDeliveryStream {
  export type Input = DeleteDeliveryStreamInput;
  export type Output = DeleteDeliveryStreamOutput;
  export type Error =
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeDeliveryStream {
  export type Input = DescribeDeliveryStreamInput;
  export type Output = DescribeDeliveryStreamOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace ListDeliveryStreams {
  export type Input = ListDeliveryStreamsInput;
  export type Output = ListDeliveryStreamsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListTagsForDeliveryStream {
  export type Input = ListTagsForDeliveryStreamInput;
  export type Output = ListTagsForDeliveryStreamOutput;
  export type Error =
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutRecord {
  export type Input = PutRecordInput;
  export type Output = PutRecordOutput;
  export type Error =
    | InvalidArgumentException
    | InvalidKMSResourceException
    | InvalidSourceException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutRecordBatch {
  export type Input = PutRecordBatchInput;
  export type Output = PutRecordBatchOutput;
  export type Error =
    | InvalidArgumentException
    | InvalidKMSResourceException
    | InvalidSourceException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace StartDeliveryStreamEncryption {
  export type Input = StartDeliveryStreamEncryptionInput;
  export type Output = StartDeliveryStreamEncryptionOutput;
  export type Error =
    | InvalidArgumentException
    | InvalidKMSResourceException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopDeliveryStreamEncryption {
  export type Input = StopDeliveryStreamEncryptionInput;
  export type Output = StopDeliveryStreamEncryptionOutput;
  export type Error =
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagDeliveryStream {
  export type Input = TagDeliveryStreamInput;
  export type Output = TagDeliveryStreamOutput;
  export type Error =
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagDeliveryStream {
  export type Input = UntagDeliveryStreamInput;
  export type Output = UntagDeliveryStreamOutput;
  export type Error =
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateDestination {
  export type Input = UpdateDestinationInput;
  export type Output = UpdateDestinationOutput;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}
