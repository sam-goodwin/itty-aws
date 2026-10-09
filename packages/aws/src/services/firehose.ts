import * as API from "@distilled.cloud/core/api";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
const ns = /*@__PURE__*/ T.XmlNamespace("http://firehose.amazonaws.com/doc/2015-08-04");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Firehose",
  serviceShapeName: "Firehose_20150804",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "firehose" });
const ver = /*@__PURE__*/ T.ServiceVersion("2015-08-04");
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
              `https://firehose-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://firehose-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://firehose.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://firehose.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidArgumentException
  extends /*@__PURE__*/ S.TaggedError<InvalidArgumentException>()("InvalidArgumentException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidKMSResourceException
  extends /*@__PURE__*/ S.TaggedError<InvalidKMSResourceException>()(
    "InvalidKMSResourceException",
    {
      code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
  ) {}
export class InvalidSourceException
  extends /*@__PURE__*/ S.TaggedError<InvalidSourceException>()("InvalidSourceException", {
    code: /*@__PURE__*/ S.optional(S.String),
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
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export type DeliveryStreamName = string;
export type DeliveryStreamType =
  | "DirectPut"
  | "KinesisStreamAsSource"
  | "MSKAsSource"
  | "DatabaseAsSource"
  | (string & {});
const DeliveryStreamType = S.String;

export type ThroughputHintInMBs = number;
export interface DirectPutSourceConfiguration {
  ThroughputHintInMBs: number;
}
const DirectPutSourceConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ThroughputHintInMBs: S.Number }),
).annotate({
  identifier: "DirectPutSourceConfiguration",
}) as any as S.Schema<DirectPutSourceConfiguration>;
export type KinesisStreamARN = string;
export type RoleARN = string;
export interface KinesisStreamSourceConfiguration {
  KinesisStreamARN: string;
  RoleARN: string;
}
const KinesisStreamSourceConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ KinesisStreamARN: S.String, RoleARN: S.String }),
).annotate({
  identifier: "KinesisStreamSourceConfiguration",
}) as any as S.Schema<KinesisStreamSourceConfiguration>;
export type AWSKMSKeyARNForSSE = string;
export type KeyType = "AWS_OWNED_CMK" | "CUSTOMER_MANAGED_CMK" | (string & {});
const KeyType = S.String;

export interface DeliveryStreamEncryptionConfigurationInput {
  KeyARN?: string;
  KeyType: KeyType;
}
const DeliveryStreamEncryptionConfigurationInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ KeyARN: S.optional(S.String), KeyType: KeyType }),
).annotate({
  identifier: "DeliveryStreamEncryptionConfigurationInput",
}) as any as S.Schema<DeliveryStreamEncryptionConfigurationInput>;
export type BucketARN = string;
export type Prefix = string;
export type ErrorOutputPrefix = string;
export type SizeInMBs = number;
export type IntervalInSeconds = number;
export interface BufferingHints {
  SizeInMBs?: number;
  IntervalInSeconds?: number;
}
const BufferingHints = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ SizeInMBs: S.optional(S.Number), IntervalInSeconds: S.optional(S.Number) }),
).annotate({ identifier: "BufferingHints" }) as any as S.Schema<BufferingHints>;
export type CompressionFormat =
  | "UNCOMPRESSED"
  | "GZIP"
  | "ZIP"
  | "Snappy"
  | "HADOOP_SNAPPY"
  | (string & {});
const CompressionFormat = S.String;

export type NoEncryptionConfig = "NoEncryption" | (string & {});
const NoEncryptionConfig = S.String;

export type AWSKMSKeyARN = string;
export interface KMSEncryptionConfig {
  AWSKMSKeyARN: string;
}
const KMSEncryptionConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AWSKMSKeyARN: S.String }),
).annotate({ identifier: "KMSEncryptionConfig" }) as any as S.Schema<KMSEncryptionConfig>;
export interface EncryptionConfiguration {
  NoEncryptionConfig?: NoEncryptionConfig;
  KMSEncryptionConfig?: KMSEncryptionConfig;
}
const EncryptionConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    NoEncryptionConfig: S.optional(NoEncryptionConfig),
    KMSEncryptionConfig: S.optional(KMSEncryptionConfig),
  }),
).annotate({ identifier: "EncryptionConfiguration" }) as any as S.Schema<EncryptionConfiguration>;
export type LogGroupName = string;
export type LogStreamName = string;
export interface CloudWatchLoggingOptions {
  Enabled?: boolean;
  LogGroupName?: string;
  LogStreamName?: string;
}
const CloudWatchLoggingOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Enabled: S.optional(S.Boolean),
    LogGroupName: S.optional(S.String),
    LogStreamName: S.optional(S.String),
  }),
).annotate({ identifier: "CloudWatchLoggingOptions" }) as any as S.Schema<CloudWatchLoggingOptions>;
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
const S3DestinationConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.String,
    BucketARN: S.String,
    Prefix: S.optional(S.String),
    ErrorOutputPrefix: S.optional(S.String),
    BufferingHints: S.optional(BufferingHints),
    CompressionFormat: S.optional(CompressionFormat),
    EncryptionConfiguration: S.optional(EncryptionConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
  }),
).annotate({
  identifier: "S3DestinationConfiguration",
}) as any as S.Schema<S3DestinationConfiguration>;
export type ProcessorType =
  | "RecordDeAggregation"
  | "Decompression"
  | "CloudWatchLogProcessing"
  | "Lambda"
  | "MetadataExtraction"
  | "AppendDelimiterToRecord"
  | (string & {});
const ProcessorType = S.String;

export type ProcessorParameterName =
  | "LambdaArn"
  | "NumberOfRetries"
  | "MetadataExtractionQuery"
  | "JsonParsingEngine"
  | "RoleArn"
  | "BufferSizeInMBs"
  | "BufferIntervalInSeconds"
  | "SubRecordType"
  | "Delimiter"
  | "CompressionFormat"
  | "DataMessageExtraction"
  | (string & {});
const ProcessorParameterName = S.String;

export type ProcessorParameterValue = string;
export interface ProcessorParameter {
  ParameterName: ProcessorParameterName;
  ParameterValue: string;
}
const ProcessorParameter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ParameterName: ProcessorParameterName, ParameterValue: S.String }),
).annotate({ identifier: "ProcessorParameter" }) as any as S.Schema<ProcessorParameter>;
export type ProcessorParameterList = ProcessorParameter[];
const ProcessorParameterList = /*@__PURE__*/ S.Array(ProcessorParameter);
export interface Processor {
  Type: ProcessorType;
  Parameters?: ProcessorParameter[];
}
const Processor = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Type: ProcessorType, Parameters: S.optional(ProcessorParameterList) }),
).annotate({ identifier: "Processor" }) as any as S.Schema<Processor>;
export type ProcessorList = Processor[];
const ProcessorList = /*@__PURE__*/ S.Array(Processor);
export interface ProcessingConfiguration {
  Enabled?: boolean;
  Processors?: Processor[];
}
const ProcessingConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Enabled: S.optional(S.Boolean), Processors: S.optional(ProcessorList) }),
).annotate({ identifier: "ProcessingConfiguration" }) as any as S.Schema<ProcessingConfiguration>;
export type S3BackupMode = "Disabled" | "Enabled" | (string & {});
const S3BackupMode = S.String;

export type NonEmptyStringWithoutWhitespace = string;
export interface SchemaConfiguration {
  RoleARN?: string;
  CatalogId?: string;
  DatabaseName?: string;
  TableName?: string;
  Region?: string;
  VersionId?: string;
}
const SchemaConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.optional(S.String),
    CatalogId: S.optional(S.String),
    DatabaseName: S.optional(S.String),
    TableName: S.optional(S.String),
    Region: S.optional(S.String),
    VersionId: S.optional(S.String),
  }),
).annotate({ identifier: "SchemaConfiguration" }) as any as S.Schema<SchemaConfiguration>;
export type NonEmptyString = string;
export type ColumnToJsonKeyMappings = { [key: string]: string | undefined };
const ColumnToJsonKeyMappings = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ S.String.pipe(S.optional),
);
export interface OpenXJsonSerDe {
  ConvertDotsInJsonKeysToUnderscores?: boolean;
  CaseInsensitive?: boolean;
  ColumnToJsonKeyMappings?: { [key: string]: string | undefined };
}
const OpenXJsonSerDe = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ConvertDotsInJsonKeysToUnderscores: S.optional(S.Boolean),
    CaseInsensitive: S.optional(S.Boolean),
    ColumnToJsonKeyMappings: S.optional(ColumnToJsonKeyMappings),
  }),
).annotate({ identifier: "OpenXJsonSerDe" }) as any as S.Schema<OpenXJsonSerDe>;
export type ListOfNonEmptyStrings = string[];
const ListOfNonEmptyStrings = /*@__PURE__*/ S.Array(S.String);
export interface HiveJsonSerDe {
  TimestampFormats?: string[];
}
const HiveJsonSerDe = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ TimestampFormats: S.optional(ListOfNonEmptyStrings) }),
).annotate({ identifier: "HiveJsonSerDe" }) as any as S.Schema<HiveJsonSerDe>;
export interface Deserializer {
  OpenXJsonSerDe?: OpenXJsonSerDe;
  HiveJsonSerDe?: HiveJsonSerDe;
}
const Deserializer = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    OpenXJsonSerDe: S.optional(OpenXJsonSerDe),
    HiveJsonSerDe: S.optional(HiveJsonSerDe),
  }),
).annotate({ identifier: "Deserializer" }) as any as S.Schema<Deserializer>;
export interface InputFormatConfiguration {
  Deserializer?: Deserializer;
}
const InputFormatConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Deserializer: S.optional(Deserializer) }),
).annotate({ identifier: "InputFormatConfiguration" }) as any as S.Schema<InputFormatConfiguration>;
export type BlockSizeBytes = number;
export type ParquetPageSizeBytes = number;
export type ParquetCompression = "UNCOMPRESSED" | "GZIP" | "SNAPPY" | (string & {});
const ParquetCompression = S.String;

export type NonNegativeIntegerObject = number;
export type ParquetWriterVersion = "V1" | "V2" | (string & {});
const ParquetWriterVersion = S.String;

export interface ParquetSerDe {
  BlockSizeBytes?: number;
  PageSizeBytes?: number;
  Compression?: ParquetCompression;
  EnableDictionaryCompression?: boolean;
  MaxPaddingBytes?: number;
  WriterVersion?: ParquetWriterVersion;
}
const ParquetSerDe = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    BlockSizeBytes: S.optional(S.Number),
    PageSizeBytes: S.optional(S.Number),
    Compression: S.optional(ParquetCompression),
    EnableDictionaryCompression: S.optional(S.Boolean),
    MaxPaddingBytes: S.optional(S.Number),
    WriterVersion: S.optional(ParquetWriterVersion),
  }),
).annotate({ identifier: "ParquetSerDe" }) as any as S.Schema<ParquetSerDe>;
export type OrcStripeSizeBytes = number;
export type OrcRowIndexStride = number;
export type Proportion = number;
export type OrcCompression = "NONE" | "ZLIB" | "SNAPPY" | (string & {});
const OrcCompression = S.String;

export type ListOfNonEmptyStringsWithoutWhitespace = string[];
const ListOfNonEmptyStringsWithoutWhitespace =
  ListOfNonEmptyStrings as any as S.Schema<ListOfNonEmptyStringsWithoutWhitespace>;
export type OrcFormatVersion = "V0_11" | "V0_12" | (string & {});
const OrcFormatVersion = S.String;

export interface OrcSerDe {
  StripeSizeBytes?: number;
  BlockSizeBytes?: number;
  RowIndexStride?: number;
  EnablePadding?: boolean;
  PaddingTolerance?: number;
  Compression?: OrcCompression;
  BloomFilterColumns?: string[];
  BloomFilterFalsePositiveProbability?: number;
  DictionaryKeyThreshold?: number;
  FormatVersion?: OrcFormatVersion;
}
const OrcSerDe = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    StripeSizeBytes: S.optional(S.Number),
    BlockSizeBytes: S.optional(S.Number),
    RowIndexStride: S.optional(S.Number),
    EnablePadding: S.optional(S.Boolean),
    PaddingTolerance: S.optional(S.Number),
    Compression: S.optional(OrcCompression),
    BloomFilterColumns: S.optional(ListOfNonEmptyStringsWithoutWhitespace),
    BloomFilterFalsePositiveProbability: S.optional(S.Number),
    DictionaryKeyThreshold: S.optional(S.Number),
    FormatVersion: S.optional(OrcFormatVersion),
  }),
).annotate({ identifier: "OrcSerDe" }) as any as S.Schema<OrcSerDe>;
export interface Serializer {
  ParquetSerDe?: ParquetSerDe;
  OrcSerDe?: OrcSerDe;
}
const Serializer = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ParquetSerDe: S.optional(ParquetSerDe), OrcSerDe: S.optional(OrcSerDe) }),
).annotate({ identifier: "Serializer" }) as any as S.Schema<Serializer>;
export interface OutputFormatConfiguration {
  Serializer?: Serializer;
}
const OutputFormatConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Serializer: S.optional(Serializer) }),
).annotate({
  identifier: "OutputFormatConfiguration",
}) as any as S.Schema<OutputFormatConfiguration>;
export interface DataFormatConversionConfiguration {
  SchemaConfiguration?: SchemaConfiguration;
  InputFormatConfiguration?: InputFormatConfiguration;
  OutputFormatConfiguration?: OutputFormatConfiguration;
  Enabled?: boolean;
}
const DataFormatConversionConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    SchemaConfiguration: S.optional(SchemaConfiguration),
    InputFormatConfiguration: S.optional(InputFormatConfiguration),
    OutputFormatConfiguration: S.optional(OutputFormatConfiguration),
    Enabled: S.optional(S.Boolean),
  }),
).annotate({
  identifier: "DataFormatConversionConfiguration",
}) as any as S.Schema<DataFormatConversionConfiguration>;
export type RetryDurationInSeconds = number;
export interface RetryOptions {
  DurationInSeconds?: number;
}
const RetryOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DurationInSeconds: S.optional(S.Number) }),
).annotate({ identifier: "RetryOptions" }) as any as S.Schema<RetryOptions>;
export interface DynamicPartitioningConfiguration {
  RetryOptions?: RetryOptions;
  Enabled?: boolean;
}
const DynamicPartitioningConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ RetryOptions: S.optional(RetryOptions), Enabled: S.optional(S.Boolean) }),
).annotate({
  identifier: "DynamicPartitioningConfiguration",
}) as any as S.Schema<DynamicPartitioningConfiguration>;
export type FileExtension = string;
export type CustomTimeZone = string;
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
const ExtendedS3DestinationConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.String,
    BucketARN: S.String,
    Prefix: S.optional(S.String),
    ErrorOutputPrefix: S.optional(S.String),
    BufferingHints: S.optional(BufferingHints),
    CompressionFormat: S.optional(CompressionFormat),
    EncryptionConfiguration: S.optional(EncryptionConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    S3BackupMode: S.optional(S3BackupMode),
    S3BackupConfiguration: S.optional(S3DestinationConfiguration),
    DataFormatConversionConfiguration: S.optional(DataFormatConversionConfiguration),
    DynamicPartitioningConfiguration: S.optional(DynamicPartitioningConfiguration),
    FileExtension: S.optional(S.String),
    CustomTimeZone: S.optional(S.String),
  }),
).annotate({
  identifier: "ExtendedS3DestinationConfiguration",
}) as any as S.Schema<ExtendedS3DestinationConfiguration>;
export type ClusterJDBCURL = string;
export type DataTableName = string;
export type DataTableColumns = string;
export type CopyOptions = string;
export interface CopyCommand {
  DataTableName: string;
  DataTableColumns?: string;
  CopyOptions?: string;
}
const CopyCommand = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DataTableName: S.String,
    DataTableColumns: S.optional(S.String),
    CopyOptions: S.optional(S.String),
  }),
).annotate({ identifier: "CopyCommand" }) as any as S.Schema<CopyCommand>;
export type Username = string | redacted.Redacted<string>;
export type Password = string | redacted.Redacted<string>;
export type RedshiftRetryDurationInSeconds = number;
export interface RedshiftRetryOptions {
  DurationInSeconds?: number;
}
const RedshiftRetryOptions = RetryOptions as any as S.Schema<RedshiftRetryOptions>;
export type RedshiftS3BackupMode = "Disabled" | "Enabled" | (string & {});
const RedshiftS3BackupMode = S.String;

export type SecretARN = string;
export interface SecretsManagerConfiguration {
  SecretARN?: string;
  RoleARN?: string;
  Enabled: boolean;
}
const SecretsManagerConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ SecretARN: S.optional(S.String), RoleARN: S.optional(S.String), Enabled: S.Boolean }),
).annotate({
  identifier: "SecretsManagerConfiguration",
}) as any as S.Schema<SecretsManagerConfiguration>;
export interface RedshiftDestinationConfiguration {
  RoleARN: string;
  ClusterJDBCURL: string;
  CopyCommand: CopyCommand;
  Username?: string | redacted.Redacted<string>;
  Password?: string | redacted.Redacted<string>;
  RetryOptions?: RedshiftRetryOptions;
  S3Configuration: S3DestinationConfiguration;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: RedshiftS3BackupMode;
  S3BackupConfiguration?: S3DestinationConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
const RedshiftDestinationConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.String,
    ClusterJDBCURL: S.String,
    CopyCommand: CopyCommand,
    Username: S.optional(SensitiveString),
    Password: S.optional(SensitiveString),
    RetryOptions: S.optional(RedshiftRetryOptions),
    S3Configuration: S3DestinationConfiguration,
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    S3BackupMode: S.optional(RedshiftS3BackupMode),
    S3BackupConfiguration: S.optional(S3DestinationConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    SecretsManagerConfiguration: S.optional(SecretsManagerConfiguration),
  }),
).annotate({
  identifier: "RedshiftDestinationConfiguration",
}) as any as S.Schema<RedshiftDestinationConfiguration>;
export type ElasticsearchDomainARN = string;
export type ElasticsearchClusterEndpoint = string;
export type ElasticsearchIndexName = string;
export type ElasticsearchTypeName = string;
export type ElasticsearchIndexRotationPeriod =
  | "NoRotation"
  | "OneHour"
  | "OneDay"
  | "OneWeek"
  | "OneMonth"
  | (string & {});
const ElasticsearchIndexRotationPeriod = S.String;

export type ElasticsearchBufferingIntervalInSeconds = number;
export type ElasticsearchBufferingSizeInMBs = number;
export interface ElasticsearchBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
const ElasticsearchBufferingHints = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ IntervalInSeconds: S.optional(S.Number), SizeInMBs: S.optional(S.Number) }),
).annotate({
  identifier: "ElasticsearchBufferingHints",
}) as any as S.Schema<ElasticsearchBufferingHints>;
export type ElasticsearchRetryDurationInSeconds = number;
export interface ElasticsearchRetryOptions {
  DurationInSeconds?: number;
}
const ElasticsearchRetryOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DurationInSeconds: S.optional(S.Number) }),
).annotate({
  identifier: "ElasticsearchRetryOptions",
}) as any as S.Schema<ElasticsearchRetryOptions>;
export type ElasticsearchS3BackupMode = "FailedDocumentsOnly" | "AllDocuments" | (string & {});
const ElasticsearchS3BackupMode = S.String;

export type SubnetIdList = string[];
const SubnetIdList = ListOfNonEmptyStrings as any as S.Schema<SubnetIdList>;
export type SecurityGroupIdList = string[];
const SecurityGroupIdList = ListOfNonEmptyStrings as any as S.Schema<SecurityGroupIdList>;
export interface VpcConfiguration {
  SubnetIds: string[];
  RoleARN: string;
  SecurityGroupIds: string[];
}
const VpcConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ SubnetIds: SubnetIdList, RoleARN: S.String, SecurityGroupIds: SecurityGroupIdList }),
).annotate({ identifier: "VpcConfiguration" }) as any as S.Schema<VpcConfiguration>;
export type DefaultDocumentIdFormat = "FIREHOSE_DEFAULT" | "NO_DOCUMENT_ID" | (string & {});
const DefaultDocumentIdFormat = S.String;

export interface DocumentIdOptions {
  DefaultDocumentIdFormat: DefaultDocumentIdFormat;
}
const DocumentIdOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DefaultDocumentIdFormat: DefaultDocumentIdFormat }),
).annotate({ identifier: "DocumentIdOptions" }) as any as S.Schema<DocumentIdOptions>;
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
const ElasticsearchDestinationConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.String,
    DomainARN: S.optional(S.String),
    ClusterEndpoint: S.optional(S.String),
    IndexName: S.String,
    TypeName: S.optional(S.String),
    IndexRotationPeriod: S.optional(ElasticsearchIndexRotationPeriod),
    BufferingHints: S.optional(ElasticsearchBufferingHints),
    RetryOptions: S.optional(ElasticsearchRetryOptions),
    S3BackupMode: S.optional(ElasticsearchS3BackupMode),
    S3Configuration: S3DestinationConfiguration,
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    VpcConfiguration: S.optional(VpcConfiguration),
    DocumentIdOptions: S.optional(DocumentIdOptions),
  }),
).annotate({
  identifier: "ElasticsearchDestinationConfiguration",
}) as any as S.Schema<ElasticsearchDestinationConfiguration>;
export type AmazonopensearchserviceDomainARN = string;
export type AmazonopensearchserviceClusterEndpoint = string;
export type AmazonopensearchserviceIndexName = string;
export type AmazonopensearchserviceTypeName = string;
export type AmazonopensearchserviceIndexRotationPeriod =
  | "NoRotation"
  | "OneHour"
  | "OneDay"
  | "OneWeek"
  | "OneMonth"
  | (string & {});
const AmazonopensearchserviceIndexRotationPeriod = S.String;

export type AmazonopensearchserviceBufferingIntervalInSeconds = number;
export type AmazonopensearchserviceBufferingSizeInMBs = number;
export interface AmazonopensearchserviceBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
const AmazonopensearchserviceBufferingHints =
  ElasticsearchBufferingHints as any as S.Schema<AmazonopensearchserviceBufferingHints>;
export type AmazonopensearchserviceRetryDurationInSeconds = number;
export interface AmazonopensearchserviceRetryOptions {
  DurationInSeconds?: number;
}
const AmazonopensearchserviceRetryOptions =
  ElasticsearchRetryOptions as any as S.Schema<AmazonopensearchserviceRetryOptions>;
export type AmazonopensearchserviceS3BackupMode =
  | "FailedDocumentsOnly"
  | "AllDocuments"
  | (string & {});
const AmazonopensearchserviceS3BackupMode = S.String;

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
const AmazonopensearchserviceDestinationConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.String,
    DomainARN: S.optional(S.String),
    ClusterEndpoint: S.optional(S.String),
    IndexName: S.String,
    TypeName: S.optional(S.String),
    IndexRotationPeriod: S.optional(AmazonopensearchserviceIndexRotationPeriod),
    BufferingHints: S.optional(AmazonopensearchserviceBufferingHints),
    RetryOptions: S.optional(AmazonopensearchserviceRetryOptions),
    S3BackupMode: S.optional(AmazonopensearchserviceS3BackupMode),
    S3Configuration: S3DestinationConfiguration,
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    VpcConfiguration: S.optional(VpcConfiguration),
    DocumentIdOptions: S.optional(DocumentIdOptions),
  }),
).annotate({
  identifier: "AmazonopensearchserviceDestinationConfiguration",
}) as any as S.Schema<AmazonopensearchserviceDestinationConfiguration>;
export type HECEndpoint = string;
export type HECEndpointType = "Raw" | "Event" | (string & {});
const HECEndpointType = S.String;

export type HECToken = string;
export type HECAcknowledgmentTimeoutInSeconds = number;
export type SplunkRetryDurationInSeconds = number;
export interface SplunkRetryOptions {
  DurationInSeconds?: number;
}
const SplunkRetryOptions = RetryOptions as any as S.Schema<SplunkRetryOptions>;
export type SplunkS3BackupMode = "FailedEventsOnly" | "AllEvents" | (string & {});
const SplunkS3BackupMode = S.String;

export type SplunkBufferingIntervalInSeconds = number;
export type SplunkBufferingSizeInMBs = number;
export interface SplunkBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
const SplunkBufferingHints = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ IntervalInSeconds: S.optional(S.Number), SizeInMBs: S.optional(S.Number) }),
).annotate({ identifier: "SplunkBufferingHints" }) as any as S.Schema<SplunkBufferingHints>;
export interface SplunkDestinationConfiguration {
  HECEndpoint: string;
  HECEndpointType: HECEndpointType;
  HECToken?: string | redacted.Redacted<string>;
  HECAcknowledgmentTimeoutInSeconds?: number;
  RetryOptions?: SplunkRetryOptions;
  S3BackupMode?: SplunkS3BackupMode;
  S3Configuration: S3DestinationConfiguration;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  BufferingHints?: SplunkBufferingHints;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
const SplunkDestinationConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    HECEndpoint: S.String,
    HECEndpointType: HECEndpointType,
    HECToken: S.optional(SensitiveString),
    HECAcknowledgmentTimeoutInSeconds: S.optional(S.Number),
    RetryOptions: S.optional(SplunkRetryOptions),
    S3BackupMode: S.optional(SplunkS3BackupMode),
    S3Configuration: S3DestinationConfiguration,
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    BufferingHints: S.optional(SplunkBufferingHints),
    SecretsManagerConfiguration: S.optional(SecretsManagerConfiguration),
  }),
).annotate({
  identifier: "SplunkDestinationConfiguration",
}) as any as S.Schema<SplunkDestinationConfiguration>;
export type HttpEndpointUrl = string | redacted.Redacted<string>;
export type HttpEndpointName = string;
export type HttpEndpointAccessKey = string | redacted.Redacted<string>;
export interface HttpEndpointConfiguration {
  Url: string | redacted.Redacted<string>;
  Name?: string;
  AccessKey?: string | redacted.Redacted<string>;
}
const HttpEndpointConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Url: SensitiveString,
    Name: S.optional(S.String),
    AccessKey: S.optional(SensitiveString),
  }),
).annotate({
  identifier: "HttpEndpointConfiguration",
}) as any as S.Schema<HttpEndpointConfiguration>;
export type HttpEndpointBufferingSizeInMBs = number;
export type HttpEndpointBufferingIntervalInSeconds = number;
export interface HttpEndpointBufferingHints {
  SizeInMBs?: number;
  IntervalInSeconds?: number;
}
const HttpEndpointBufferingHints = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ SizeInMBs: S.optional(S.Number), IntervalInSeconds: S.optional(S.Number) }),
).annotate({
  identifier: "HttpEndpointBufferingHints",
}) as any as S.Schema<HttpEndpointBufferingHints>;
export type ContentEncoding = "NONE" | "GZIP" | (string & {});
const ContentEncoding = S.String;

export type HttpEndpointAttributeName = string | redacted.Redacted<string>;
export type HttpEndpointAttributeValue = string | redacted.Redacted<string>;
export interface HttpEndpointCommonAttribute {
  AttributeName: string | redacted.Redacted<string>;
  AttributeValue: string | redacted.Redacted<string>;
}
const HttpEndpointCommonAttribute = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AttributeName: SensitiveString, AttributeValue: SensitiveString }),
).annotate({
  identifier: "HttpEndpointCommonAttribute",
}) as any as S.Schema<HttpEndpointCommonAttribute>;
export type HttpEndpointCommonAttributesList = HttpEndpointCommonAttribute[];
const HttpEndpointCommonAttributesList = /*@__PURE__*/ S.Array(HttpEndpointCommonAttribute);
export interface HttpEndpointRequestConfiguration {
  ContentEncoding?: ContentEncoding;
  CommonAttributes?: HttpEndpointCommonAttribute[];
}
const HttpEndpointRequestConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ContentEncoding: S.optional(ContentEncoding),
    CommonAttributes: S.optional(HttpEndpointCommonAttributesList),
  }),
).annotate({
  identifier: "HttpEndpointRequestConfiguration",
}) as any as S.Schema<HttpEndpointRequestConfiguration>;
export type HttpEndpointRetryDurationInSeconds = number;
export interface HttpEndpointRetryOptions {
  DurationInSeconds?: number;
}
const HttpEndpointRetryOptions = RetryOptions as any as S.Schema<HttpEndpointRetryOptions>;
export type HttpEndpointS3BackupMode = "FailedDataOnly" | "AllData" | (string & {});
const HttpEndpointS3BackupMode = S.String;

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
const HttpEndpointDestinationConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    EndpointConfiguration: HttpEndpointConfiguration,
    BufferingHints: S.optional(HttpEndpointBufferingHints),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    RequestConfiguration: S.optional(HttpEndpointRequestConfiguration),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    RoleARN: S.optional(S.String),
    RetryOptions: S.optional(HttpEndpointRetryOptions),
    S3BackupMode: S.optional(HttpEndpointS3BackupMode),
    S3Configuration: S3DestinationConfiguration,
    SecretsManagerConfiguration: S.optional(SecretsManagerConfiguration),
  }),
).annotate({
  identifier: "HttpEndpointDestinationConfiguration",
}) as any as S.Schema<HttpEndpointDestinationConfiguration>;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value?: string;
}
const Tag = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Key: S.String, Value: S.optional(S.String) }),
).annotate({ identifier: "Tag" }) as any as S.Schema<Tag>;
export type TagDeliveryStreamInputTagList = Tag[];
const TagDeliveryStreamInputTagList = /*@__PURE__*/ S.Array(Tag);
export type AmazonOpenSearchServerlessCollectionEndpoint = string;
export type AmazonOpenSearchServerlessIndexName = string;
export type AmazonOpenSearchServerlessBufferingIntervalInSeconds = number;
export type AmazonOpenSearchServerlessBufferingSizeInMBs = number;
export interface AmazonOpenSearchServerlessBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
const AmazonOpenSearchServerlessBufferingHints =
  ElasticsearchBufferingHints as any as S.Schema<AmazonOpenSearchServerlessBufferingHints>;
export type AmazonOpenSearchServerlessRetryDurationInSeconds = number;
export interface AmazonOpenSearchServerlessRetryOptions {
  DurationInSeconds?: number;
}
const AmazonOpenSearchServerlessRetryOptions =
  ElasticsearchRetryOptions as any as S.Schema<AmazonOpenSearchServerlessRetryOptions>;
export type AmazonOpenSearchServerlessS3BackupMode =
  | "FailedDocumentsOnly"
  | "AllDocuments"
  | (string & {});
const AmazonOpenSearchServerlessS3BackupMode = S.String;

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
const AmazonOpenSearchServerlessDestinationConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.String,
    CollectionEndpoint: S.optional(S.String),
    IndexName: S.String,
    BufferingHints: S.optional(AmazonOpenSearchServerlessBufferingHints),
    RetryOptions: S.optional(AmazonOpenSearchServerlessRetryOptions),
    S3BackupMode: S.optional(AmazonOpenSearchServerlessS3BackupMode),
    S3Configuration: S3DestinationConfiguration,
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    VpcConfiguration: S.optional(VpcConfiguration),
  }),
).annotate({
  identifier: "AmazonOpenSearchServerlessDestinationConfiguration",
}) as any as S.Schema<AmazonOpenSearchServerlessDestinationConfiguration>;
export type MSKClusterARN = string;
export type TopicName = string;
export type Connectivity = "PUBLIC" | "PRIVATE" | (string & {});
const Connectivity = S.String;

export interface AuthenticationConfiguration {
  RoleARN: string;
  Connectivity: Connectivity;
}
const AuthenticationConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ RoleARN: S.String, Connectivity: Connectivity }),
).annotate({
  identifier: "AuthenticationConfiguration",
}) as any as S.Schema<AuthenticationConfiguration>;
export type ReadFromTimestamp = Date;
export interface MSKSourceConfiguration {
  MSKClusterARN: string;
  TopicName: string;
  AuthenticationConfiguration: AuthenticationConfiguration;
  ReadFromTimestamp?: Date;
}
const MSKSourceConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    MSKClusterARN: S.String,
    TopicName: S.String,
    AuthenticationConfiguration: AuthenticationConfiguration,
    ReadFromTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({ identifier: "MSKSourceConfiguration" }) as any as S.Schema<MSKSourceConfiguration>;
export type SnowflakeAccountUrl = string | redacted.Redacted<string>;
export type SnowflakePrivateKey = string | redacted.Redacted<string>;
export type SnowflakeKeyPassphrase = string | redacted.Redacted<string>;
export type SnowflakeUser = string | redacted.Redacted<string>;
export type SnowflakeDatabase = string | redacted.Redacted<string>;
export type SnowflakeSchema = string | redacted.Redacted<string>;
export type SnowflakeTable = string | redacted.Redacted<string>;
export type SnowflakeRole = string | redacted.Redacted<string>;
export interface SnowflakeRoleConfiguration {
  Enabled?: boolean;
  SnowflakeRole?: string | redacted.Redacted<string>;
}
const SnowflakeRoleConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Enabled: S.optional(S.Boolean), SnowflakeRole: S.optional(SensitiveString) }),
).annotate({
  identifier: "SnowflakeRoleConfiguration",
}) as any as S.Schema<SnowflakeRoleConfiguration>;
export type SnowflakeDataLoadingOption =
  | "JSON_MAPPING"
  | "VARIANT_CONTENT_MAPPING"
  | "VARIANT_CONTENT_AND_METADATA_MAPPING"
  | (string & {});
const SnowflakeDataLoadingOption = S.String;

export type SnowflakeMetaDataColumnName = string | redacted.Redacted<string>;
export type SnowflakeContentColumnName = string | redacted.Redacted<string>;
export type SnowflakePrivateLinkVpceId = string | redacted.Redacted<string>;
export interface SnowflakeVpcConfiguration {
  PrivateLinkVpceId: string | redacted.Redacted<string>;
}
const SnowflakeVpcConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ PrivateLinkVpceId: SensitiveString }),
).annotate({
  identifier: "SnowflakeVpcConfiguration",
}) as any as S.Schema<SnowflakeVpcConfiguration>;
export type SnowflakeRetryDurationInSeconds = number;
export interface SnowflakeRetryOptions {
  DurationInSeconds?: number;
}
const SnowflakeRetryOptions = RetryOptions as any as S.Schema<SnowflakeRetryOptions>;
export type SnowflakeS3BackupMode = "FailedDataOnly" | "AllData" | (string & {});
const SnowflakeS3BackupMode = S.String;

export type SnowflakeBufferingSizeInMBs = number;
export type SnowflakeBufferingIntervalInSeconds = number;
export interface SnowflakeBufferingHints {
  SizeInMBs?: number;
  IntervalInSeconds?: number;
}
const SnowflakeBufferingHints = BufferingHints as any as S.Schema<SnowflakeBufferingHints>;
export interface SnowflakeDestinationConfiguration {
  AccountUrl: string | redacted.Redacted<string>;
  PrivateKey?: string | redacted.Redacted<string>;
  KeyPassphrase?: string | redacted.Redacted<string>;
  User?: string | redacted.Redacted<string>;
  Database: string | redacted.Redacted<string>;
  Schema: string | redacted.Redacted<string>;
  Table: string | redacted.Redacted<string>;
  SnowflakeRoleConfiguration?: SnowflakeRoleConfiguration;
  DataLoadingOption?: SnowflakeDataLoadingOption;
  MetaDataColumnName?: string | redacted.Redacted<string>;
  ContentColumnName?: string | redacted.Redacted<string>;
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
const SnowflakeDestinationConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AccountUrl: SensitiveString,
    PrivateKey: S.optional(SensitiveString),
    KeyPassphrase: S.optional(SensitiveString),
    User: S.optional(SensitiveString),
    Database: SensitiveString,
    Schema: SensitiveString,
    Table: SensitiveString,
    SnowflakeRoleConfiguration: S.optional(SnowflakeRoleConfiguration),
    DataLoadingOption: S.optional(SnowflakeDataLoadingOption),
    MetaDataColumnName: S.optional(SensitiveString),
    ContentColumnName: S.optional(SensitiveString),
    SnowflakeVpcConfiguration: S.optional(SnowflakeVpcConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    RoleARN: S.String,
    RetryOptions: S.optional(SnowflakeRetryOptions),
    S3BackupMode: S.optional(SnowflakeS3BackupMode),
    S3Configuration: S3DestinationConfiguration,
    SecretsManagerConfiguration: S.optional(SecretsManagerConfiguration),
    BufferingHints: S.optional(SnowflakeBufferingHints),
  }),
).annotate({
  identifier: "SnowflakeDestinationConfiguration",
}) as any as S.Schema<SnowflakeDestinationConfiguration>;
export type StringWithLettersDigitsUnderscoresDots = string;
export interface PartitionField {
  SourceName: string;
}
const PartitionField = /*@__PURE__*/ S.suspend(() => S.Struct({ SourceName: S.String })).annotate({
  identifier: "PartitionField",
}) as any as S.Schema<PartitionField>;
export type PartitionFields = PartitionField[];
const PartitionFields = /*@__PURE__*/ S.Array(PartitionField);
export interface PartitionSpec {
  Identity?: PartitionField[];
}
const PartitionSpec = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Identity: S.optional(PartitionFields) }),
).annotate({ identifier: "PartitionSpec" }) as any as S.Schema<PartitionSpec>;
export interface DestinationTableConfiguration {
  DestinationTableName: string;
  DestinationDatabaseName: string;
  UniqueKeys?: string[];
  PartitionSpec?: PartitionSpec;
  S3ErrorOutputPrefix?: string;
}
const DestinationTableConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DestinationTableName: S.String,
    DestinationDatabaseName: S.String,
    UniqueKeys: S.optional(ListOfNonEmptyStringsWithoutWhitespace),
    PartitionSpec: S.optional(PartitionSpec),
    S3ErrorOutputPrefix: S.optional(S.String),
  }),
).annotate({
  identifier: "DestinationTableConfiguration",
}) as any as S.Schema<DestinationTableConfiguration>;
export type DestinationTableConfigurationList = DestinationTableConfiguration[];
const DestinationTableConfigurationList = /*@__PURE__*/ S.Array(DestinationTableConfiguration);
export interface SchemaEvolutionConfiguration {
  Enabled: boolean;
}
const SchemaEvolutionConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Enabled: S.Boolean }),
).annotate({
  identifier: "SchemaEvolutionConfiguration",
}) as any as S.Schema<SchemaEvolutionConfiguration>;
export interface TableCreationConfiguration {
  Enabled: boolean;
}
const TableCreationConfiguration =
  SchemaEvolutionConfiguration as any as S.Schema<TableCreationConfiguration>;
export type IcebergS3BackupMode = "FailedDataOnly" | "AllData" | (string & {});
const IcebergS3BackupMode = S.String;

export type GlueDataCatalogARN = string;
export type WarehouseLocation = string;
export interface CatalogConfiguration {
  CatalogARN?: string;
  WarehouseLocation?: string;
}
const CatalogConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ CatalogARN: S.optional(S.String), WarehouseLocation: S.optional(S.String) }),
).annotate({ identifier: "CatalogConfiguration" }) as any as S.Schema<CatalogConfiguration>;
export interface IcebergDestinationConfiguration {
  DestinationTableConfigurationList?: DestinationTableConfiguration[];
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
const IcebergDestinationConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DestinationTableConfigurationList: S.optional(DestinationTableConfigurationList),
    SchemaEvolutionConfiguration: S.optional(SchemaEvolutionConfiguration),
    TableCreationConfiguration: S.optional(TableCreationConfiguration),
    BufferingHints: S.optional(BufferingHints),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    S3BackupMode: S.optional(IcebergS3BackupMode),
    RetryOptions: S.optional(RetryOptions),
    RoleARN: S.String,
    AppendOnly: S.optional(S.Boolean),
    CatalogConfiguration: CatalogConfiguration,
    S3Configuration: S3DestinationConfiguration,
  }),
).annotate({
  identifier: "IcebergDestinationConfiguration",
}) as any as S.Schema<IcebergDestinationConfiguration>;
export type DatabaseType = "MySQL" | "PostgreSQL" | (string & {});
const DatabaseType = S.String;

export type DatabaseEndpoint = string;
export type DatabasePort = number;
export type SSLMode = "Disabled" | "Enabled" | (string & {});
const SSLMode = S.String;

export type DatabaseName = string;
export type DatabaseIncludeOrExcludeList = string[];
const DatabaseIncludeOrExcludeList =
  ListOfNonEmptyStrings as any as S.Schema<DatabaseIncludeOrExcludeList>;
export interface DatabaseList {
  Include?: string[];
  Exclude?: string[];
}
const DatabaseList = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Include: S.optional(DatabaseIncludeOrExcludeList),
    Exclude: S.optional(DatabaseIncludeOrExcludeList),
  }),
).annotate({ identifier: "DatabaseList" }) as any as S.Schema<DatabaseList>;
export type DatabaseTableName = string;
export type DatabaseTableIncludeOrExcludeList = string[];
export interface DatabaseTableList {
  Include?: string[];
  Exclude?: string[];
}
const DatabaseTableList = DatabaseList as any as S.Schema<DatabaseTableList>;
export type DatabaseColumnName = string;
export type DatabaseColumnIncludeOrExcludeList = string[];
const DatabaseColumnIncludeOrExcludeList =
  ListOfNonEmptyStrings as any as S.Schema<DatabaseColumnIncludeOrExcludeList>;
export interface DatabaseColumnList {
  Include?: string[];
  Exclude?: string[];
}
const DatabaseColumnList = DatabaseList as any as S.Schema<DatabaseColumnList>;
export type DatabaseSurrogateKeyList = string[];
const DatabaseSurrogateKeyList = ListOfNonEmptyStrings as any as S.Schema<DatabaseSurrogateKeyList>;
export interface DatabaseSourceAuthenticationConfiguration {
  SecretsManagerConfiguration: SecretsManagerConfiguration;
}
const DatabaseSourceAuthenticationConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ SecretsManagerConfiguration: SecretsManagerConfiguration }),
).annotate({
  identifier: "DatabaseSourceAuthenticationConfiguration",
}) as any as S.Schema<DatabaseSourceAuthenticationConfiguration>;
export type VpcEndpointServiceName = string;
export interface DatabaseSourceVPCConfiguration {
  VpcEndpointServiceName: string;
}
const DatabaseSourceVPCConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ VpcEndpointServiceName: S.String }),
).annotate({
  identifier: "DatabaseSourceVPCConfiguration",
}) as any as S.Schema<DatabaseSourceVPCConfiguration>;
export interface DatabaseSourceConfiguration {
  Type: DatabaseType;
  Endpoint: string;
  Port: number;
  SSLMode?: SSLMode;
  Databases: DatabaseList;
  Tables: DatabaseTableList;
  Columns?: DatabaseColumnList;
  SurrogateKeys?: string[];
  SnapshotWatermarkTable: string;
  DatabaseSourceAuthenticationConfiguration: DatabaseSourceAuthenticationConfiguration;
  DatabaseSourceVPCConfiguration: DatabaseSourceVPCConfiguration;
}
const DatabaseSourceConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Type: DatabaseType,
    Endpoint: S.String,
    Port: S.Number,
    SSLMode: S.optional(SSLMode),
    Databases: DatabaseList,
    Tables: DatabaseTableList,
    Columns: S.optional(DatabaseColumnList),
    SurrogateKeys: S.optional(DatabaseSurrogateKeyList),
    SnapshotWatermarkTable: S.String,
    DatabaseSourceAuthenticationConfiguration: DatabaseSourceAuthenticationConfiguration,
    DatabaseSourceVPCConfiguration: DatabaseSourceVPCConfiguration,
  }),
).annotate({
  identifier: "DatabaseSourceConfiguration",
}) as any as S.Schema<DatabaseSourceConfiguration>;
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
  Tags?: Tag[];
  AmazonOpenSearchServerlessDestinationConfiguration?: AmazonOpenSearchServerlessDestinationConfiguration;
  MSKSourceConfiguration?: MSKSourceConfiguration;
  SnowflakeDestinationConfiguration?: SnowflakeDestinationConfiguration;
  IcebergDestinationConfiguration?: IcebergDestinationConfiguration;
  DatabaseSourceConfiguration?: DatabaseSourceConfiguration;
}
const CreateDeliveryStreamInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DeliveryStreamName: S.String,
    DeliveryStreamType: S.optional(DeliveryStreamType),
    DirectPutSourceConfiguration: S.optional(DirectPutSourceConfiguration),
    KinesisStreamSourceConfiguration: S.optional(KinesisStreamSourceConfiguration),
    DeliveryStreamEncryptionConfigurationInput: S.optional(
      DeliveryStreamEncryptionConfigurationInput,
    ),
    S3DestinationConfiguration: S.optional(S3DestinationConfiguration),
    ExtendedS3DestinationConfiguration: S.optional(ExtendedS3DestinationConfiguration),
    RedshiftDestinationConfiguration: S.optional(RedshiftDestinationConfiguration),
    ElasticsearchDestinationConfiguration: S.optional(ElasticsearchDestinationConfiguration),
    AmazonopensearchserviceDestinationConfiguration: S.optional(
      AmazonopensearchserviceDestinationConfiguration,
    ),
    SplunkDestinationConfiguration: S.optional(SplunkDestinationConfiguration),
    HttpEndpointDestinationConfiguration: S.optional(HttpEndpointDestinationConfiguration),
    Tags: S.optional(TagDeliveryStreamInputTagList),
    AmazonOpenSearchServerlessDestinationConfiguration: S.optional(
      AmazonOpenSearchServerlessDestinationConfiguration,
    ),
    MSKSourceConfiguration: S.optional(MSKSourceConfiguration),
    SnowflakeDestinationConfiguration: S.optional(SnowflakeDestinationConfiguration),
    IcebergDestinationConfiguration: S.optional(IcebergDestinationConfiguration),
    DatabaseSourceConfiguration: S.optional(DatabaseSourceConfiguration),
  }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "CreateDeliveryStreamInput",
}) as any as S.Schema<CreateDeliveryStreamInput>;
export type DeliveryStreamARN = string;
export interface CreateDeliveryStreamOutput {
  DeliveryStreamARN?: string;
}
const CreateDeliveryStreamOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DeliveryStreamARN: S.optional(S.String) }).pipe(ns),
).annotate({
  identifier: "CreateDeliveryStreamOutput",
}) as any as S.Schema<CreateDeliveryStreamOutput>;
export interface DeleteDeliveryStreamInput {
  DeliveryStreamName: string;
  AllowForceDelete?: boolean;
}
const DeleteDeliveryStreamInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DeliveryStreamName: S.String, AllowForceDelete: S.optional(S.Boolean) }).pipe(
    T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "DeleteDeliveryStreamInput",
}) as any as S.Schema<DeleteDeliveryStreamInput>;
export interface DeleteDeliveryStreamOutput {}
const DeleteDeliveryStreamOutput = /*@__PURE__*/ S.suspend(() => S.Struct({}).pipe(ns)).annotate({
  identifier: "DeleteDeliveryStreamOutput",
}) as any as S.Schema<DeleteDeliveryStreamOutput>;
export type DescribeDeliveryStreamInputLimit = number;
export type DestinationId = string;
export interface DescribeDeliveryStreamInput {
  DeliveryStreamName: string;
  Limit?: number;
  ExclusiveStartDestinationId?: string;
}
const DescribeDeliveryStreamInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DeliveryStreamName: S.String,
    Limit: S.optional(S.Number),
    ExclusiveStartDestinationId: S.optional(S.String),
  }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "DescribeDeliveryStreamInput",
}) as any as S.Schema<DescribeDeliveryStreamInput>;
export type DeliveryStreamStatus =
  | "CREATING"
  | "CREATING_FAILED"
  | "DELETING"
  | "DELETING_FAILED"
  | "ACTIVE"
  | (string & {});
const DeliveryStreamStatus = S.String;

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
  | "UNKNOWN_ERROR"
  | (string & {});
const DeliveryStreamFailureType = S.String;

export interface FailureDescription {
  Type: DeliveryStreamFailureType;
  Details: string;
}
const FailureDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Type: DeliveryStreamFailureType, Details: S.String }),
).annotate({ identifier: "FailureDescription" }) as any as S.Schema<FailureDescription>;
export type DeliveryStreamEncryptionStatus =
  | "ENABLED"
  | "ENABLING"
  | "ENABLING_FAILED"
  | "DISABLED"
  | "DISABLING"
  | "DISABLING_FAILED"
  | (string & {});
const DeliveryStreamEncryptionStatus = S.String;

export interface DeliveryStreamEncryptionConfiguration {
  KeyARN?: string;
  KeyType?: KeyType;
  Status?: DeliveryStreamEncryptionStatus;
  FailureDescription?: FailureDescription;
}
const DeliveryStreamEncryptionConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    KeyARN: S.optional(S.String),
    KeyType: S.optional(KeyType),
    Status: S.optional(DeliveryStreamEncryptionStatus),
    FailureDescription: S.optional(FailureDescription),
  }),
).annotate({
  identifier: "DeliveryStreamEncryptionConfiguration",
}) as any as S.Schema<DeliveryStreamEncryptionConfiguration>;
export type DeliveryStreamVersionId = string;
export interface DirectPutSourceDescription {
  ThroughputHintInMBs?: number;
}
const DirectPutSourceDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ThroughputHintInMBs: S.optional(S.Number) }),
).annotate({
  identifier: "DirectPutSourceDescription",
}) as any as S.Schema<DirectPutSourceDescription>;
export type DeliveryStartTimestamp = Date;
export interface KinesisStreamSourceDescription {
  KinesisStreamARN?: string;
  RoleARN?: string;
  DeliveryStartTimestamp?: Date;
}
const KinesisStreamSourceDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    KinesisStreamARN: S.optional(S.String),
    RoleARN: S.optional(S.String),
    DeliveryStartTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({
  identifier: "KinesisStreamSourceDescription",
}) as any as S.Schema<KinesisStreamSourceDescription>;
export interface MSKSourceDescription {
  MSKClusterARN?: string;
  TopicName?: string;
  AuthenticationConfiguration?: AuthenticationConfiguration;
  DeliveryStartTimestamp?: Date;
  ReadFromTimestamp?: Date;
}
const MSKSourceDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    MSKClusterARN: S.optional(S.String),
    TopicName: S.optional(S.String),
    AuthenticationConfiguration: S.optional(AuthenticationConfiguration),
    DeliveryStartTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    ReadFromTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({ identifier: "MSKSourceDescription" }) as any as S.Schema<MSKSourceDescription>;
export type SnapshotRequestedBy = "USER" | "FIREHOSE" | (string & {});
const SnapshotRequestedBy = S.String;

export type SnapshotStatus = "IN_PROGRESS" | "COMPLETE" | "SUSPENDED" | (string & {});
const SnapshotStatus = S.String;

export interface DatabaseSnapshotInfo {
  Id: string;
  Table: string;
  RequestTimestamp: Date;
  RequestedBy: SnapshotRequestedBy;
  Status: SnapshotStatus;
  FailureDescription?: FailureDescription;
}
const DatabaseSnapshotInfo = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Id: S.String,
    Table: S.String,
    RequestTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    RequestedBy: SnapshotRequestedBy,
    Status: SnapshotStatus,
    FailureDescription: S.optional(FailureDescription),
  }),
).annotate({ identifier: "DatabaseSnapshotInfo" }) as any as S.Schema<DatabaseSnapshotInfo>;
export type DatabaseSnapshotInfoList = DatabaseSnapshotInfo[];
const DatabaseSnapshotInfoList = /*@__PURE__*/ S.Array(DatabaseSnapshotInfo);
export interface DatabaseSourceDescription {
  Type?: DatabaseType;
  Endpoint?: string;
  Port?: number;
  SSLMode?: SSLMode;
  Databases?: DatabaseList;
  Tables?: DatabaseTableList;
  Columns?: DatabaseColumnList;
  SurrogateKeys?: string[];
  SnapshotWatermarkTable?: string;
  SnapshotInfo?: DatabaseSnapshotInfo[];
  DatabaseSourceAuthenticationConfiguration?: DatabaseSourceAuthenticationConfiguration;
  DatabaseSourceVPCConfiguration?: DatabaseSourceVPCConfiguration;
}
const DatabaseSourceDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Type: S.optional(DatabaseType),
    Endpoint: S.optional(S.String),
    Port: S.optional(S.Number),
    SSLMode: S.optional(SSLMode),
    Databases: S.optional(DatabaseList),
    Tables: S.optional(DatabaseTableList),
    Columns: S.optional(DatabaseColumnList),
    SurrogateKeys: S.optional(DatabaseColumnIncludeOrExcludeList),
    SnapshotWatermarkTable: S.optional(S.String),
    SnapshotInfo: S.optional(DatabaseSnapshotInfoList),
    DatabaseSourceAuthenticationConfiguration: S.optional(
      DatabaseSourceAuthenticationConfiguration,
    ),
    DatabaseSourceVPCConfiguration: S.optional(DatabaseSourceVPCConfiguration),
  }),
).annotate({
  identifier: "DatabaseSourceDescription",
}) as any as S.Schema<DatabaseSourceDescription>;
export interface SourceDescription {
  DirectPutSourceDescription?: DirectPutSourceDescription;
  KinesisStreamSourceDescription?: KinesisStreamSourceDescription;
  MSKSourceDescription?: MSKSourceDescription;
  DatabaseSourceDescription?: DatabaseSourceDescription;
}
const SourceDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DirectPutSourceDescription: S.optional(DirectPutSourceDescription),
    KinesisStreamSourceDescription: S.optional(KinesisStreamSourceDescription),
    MSKSourceDescription: S.optional(MSKSourceDescription),
    DatabaseSourceDescription: S.optional(DatabaseSourceDescription),
  }),
).annotate({ identifier: "SourceDescription" }) as any as S.Schema<SourceDescription>;
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
const S3DestinationDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.String,
    BucketARN: S.String,
    Prefix: S.optional(S.String),
    ErrorOutputPrefix: S.optional(S.String),
    BufferingHints: BufferingHints,
    CompressionFormat: CompressionFormat,
    EncryptionConfiguration: EncryptionConfiguration,
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
  }),
).annotate({ identifier: "S3DestinationDescription" }) as any as S.Schema<S3DestinationDescription>;
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
const ExtendedS3DestinationDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.String,
    BucketARN: S.String,
    Prefix: S.optional(S.String),
    ErrorOutputPrefix: S.optional(S.String),
    BufferingHints: BufferingHints,
    CompressionFormat: CompressionFormat,
    EncryptionConfiguration: EncryptionConfiguration,
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    S3BackupMode: S.optional(S3BackupMode),
    S3BackupDescription: S.optional(S3DestinationDescription),
    DataFormatConversionConfiguration: S.optional(DataFormatConversionConfiguration),
    DynamicPartitioningConfiguration: S.optional(DynamicPartitioningConfiguration),
    FileExtension: S.optional(S.String),
    CustomTimeZone: S.optional(S.String),
  }),
).annotate({
  identifier: "ExtendedS3DestinationDescription",
}) as any as S.Schema<ExtendedS3DestinationDescription>;
export interface RedshiftDestinationDescription {
  RoleARN: string;
  ClusterJDBCURL: string;
  CopyCommand: CopyCommand;
  Username?: string | redacted.Redacted<string>;
  RetryOptions?: RedshiftRetryOptions;
  S3DestinationDescription: S3DestinationDescription;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: RedshiftS3BackupMode;
  S3BackupDescription?: S3DestinationDescription;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
const RedshiftDestinationDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.String,
    ClusterJDBCURL: S.String,
    CopyCommand: CopyCommand,
    Username: S.optional(SensitiveString),
    RetryOptions: S.optional(RedshiftRetryOptions),
    S3DestinationDescription: S3DestinationDescription,
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    S3BackupMode: S.optional(RedshiftS3BackupMode),
    S3BackupDescription: S.optional(S3DestinationDescription),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    SecretsManagerConfiguration: S.optional(SecretsManagerConfiguration),
  }),
).annotate({
  identifier: "RedshiftDestinationDescription",
}) as any as S.Schema<RedshiftDestinationDescription>;
export interface VpcConfigurationDescription {
  SubnetIds: string[];
  RoleARN: string;
  SecurityGroupIds: string[];
  VpcId: string;
}
const VpcConfigurationDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    SubnetIds: SubnetIdList,
    RoleARN: S.String,
    SecurityGroupIds: SecurityGroupIdList,
    VpcId: S.String,
  }),
).annotate({
  identifier: "VpcConfigurationDescription",
}) as any as S.Schema<VpcConfigurationDescription>;
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
const ElasticsearchDestinationDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.optional(S.String),
    DomainARN: S.optional(S.String),
    ClusterEndpoint: S.optional(S.String),
    IndexName: S.optional(S.String),
    TypeName: S.optional(S.String),
    IndexRotationPeriod: S.optional(ElasticsearchIndexRotationPeriod),
    BufferingHints: S.optional(ElasticsearchBufferingHints),
    RetryOptions: S.optional(ElasticsearchRetryOptions),
    S3BackupMode: S.optional(ElasticsearchS3BackupMode),
    S3DestinationDescription: S.optional(S3DestinationDescription),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    VpcConfigurationDescription: S.optional(VpcConfigurationDescription),
    DocumentIdOptions: S.optional(DocumentIdOptions),
  }),
).annotate({
  identifier: "ElasticsearchDestinationDescription",
}) as any as S.Schema<ElasticsearchDestinationDescription>;
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
const AmazonopensearchserviceDestinationDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.optional(S.String),
    DomainARN: S.optional(S.String),
    ClusterEndpoint: S.optional(S.String),
    IndexName: S.optional(S.String),
    TypeName: S.optional(S.String),
    IndexRotationPeriod: S.optional(AmazonopensearchserviceIndexRotationPeriod),
    BufferingHints: S.optional(AmazonopensearchserviceBufferingHints),
    RetryOptions: S.optional(AmazonopensearchserviceRetryOptions),
    S3BackupMode: S.optional(AmazonopensearchserviceS3BackupMode),
    S3DestinationDescription: S.optional(S3DestinationDescription),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    VpcConfigurationDescription: S.optional(VpcConfigurationDescription),
    DocumentIdOptions: S.optional(DocumentIdOptions),
  }),
).annotate({
  identifier: "AmazonopensearchserviceDestinationDescription",
}) as any as S.Schema<AmazonopensearchserviceDestinationDescription>;
export interface SplunkDestinationDescription {
  HECEndpoint?: string;
  HECEndpointType?: HECEndpointType;
  HECToken?: string | redacted.Redacted<string>;
  HECAcknowledgmentTimeoutInSeconds?: number;
  RetryOptions?: SplunkRetryOptions;
  S3BackupMode?: SplunkS3BackupMode;
  S3DestinationDescription?: S3DestinationDescription;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  BufferingHints?: SplunkBufferingHints;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
const SplunkDestinationDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    HECEndpoint: S.optional(S.String),
    HECEndpointType: S.optional(HECEndpointType),
    HECToken: S.optional(SensitiveString),
    HECAcknowledgmentTimeoutInSeconds: S.optional(S.Number),
    RetryOptions: S.optional(SplunkRetryOptions),
    S3BackupMode: S.optional(SplunkS3BackupMode),
    S3DestinationDescription: S.optional(S3DestinationDescription),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    BufferingHints: S.optional(SplunkBufferingHints),
    SecretsManagerConfiguration: S.optional(SecretsManagerConfiguration),
  }),
).annotate({
  identifier: "SplunkDestinationDescription",
}) as any as S.Schema<SplunkDestinationDescription>;
export interface HttpEndpointDescription {
  Url?: string | redacted.Redacted<string>;
  Name?: string;
}
const HttpEndpointDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Url: S.optional(SensitiveString), Name: S.optional(S.String) }),
).annotate({ identifier: "HttpEndpointDescription" }) as any as S.Schema<HttpEndpointDescription>;
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
const HttpEndpointDestinationDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    EndpointConfiguration: S.optional(HttpEndpointDescription),
    BufferingHints: S.optional(HttpEndpointBufferingHints),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    RequestConfiguration: S.optional(HttpEndpointRequestConfiguration),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    RoleARN: S.optional(S.String),
    RetryOptions: S.optional(HttpEndpointRetryOptions),
    S3BackupMode: S.optional(HttpEndpointS3BackupMode),
    S3DestinationDescription: S.optional(S3DestinationDescription),
    SecretsManagerConfiguration: S.optional(SecretsManagerConfiguration),
  }),
).annotate({
  identifier: "HttpEndpointDestinationDescription",
}) as any as S.Schema<HttpEndpointDestinationDescription>;
export interface SnowflakeDestinationDescription {
  AccountUrl?: string | redacted.Redacted<string>;
  User?: string | redacted.Redacted<string>;
  Database?: string | redacted.Redacted<string>;
  Schema?: string | redacted.Redacted<string>;
  Table?: string | redacted.Redacted<string>;
  SnowflakeRoleConfiguration?: SnowflakeRoleConfiguration;
  DataLoadingOption?: SnowflakeDataLoadingOption;
  MetaDataColumnName?: string | redacted.Redacted<string>;
  ContentColumnName?: string | redacted.Redacted<string>;
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
const SnowflakeDestinationDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AccountUrl: S.optional(SensitiveString),
    User: S.optional(SensitiveString),
    Database: S.optional(SensitiveString),
    Schema: S.optional(SensitiveString),
    Table: S.optional(SensitiveString),
    SnowflakeRoleConfiguration: S.optional(SnowflakeRoleConfiguration),
    DataLoadingOption: S.optional(SnowflakeDataLoadingOption),
    MetaDataColumnName: S.optional(SensitiveString),
    ContentColumnName: S.optional(SensitiveString),
    SnowflakeVpcConfiguration: S.optional(SnowflakeVpcConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    RoleARN: S.optional(S.String),
    RetryOptions: S.optional(SnowflakeRetryOptions),
    S3BackupMode: S.optional(SnowflakeS3BackupMode),
    S3DestinationDescription: S.optional(S3DestinationDescription),
    SecretsManagerConfiguration: S.optional(SecretsManagerConfiguration),
    BufferingHints: S.optional(SnowflakeBufferingHints),
  }),
).annotate({
  identifier: "SnowflakeDestinationDescription",
}) as any as S.Schema<SnowflakeDestinationDescription>;
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
const AmazonOpenSearchServerlessDestinationDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.optional(S.String),
    CollectionEndpoint: S.optional(S.String),
    IndexName: S.optional(S.String),
    BufferingHints: S.optional(AmazonOpenSearchServerlessBufferingHints),
    RetryOptions: S.optional(AmazonOpenSearchServerlessRetryOptions),
    S3BackupMode: S.optional(AmazonOpenSearchServerlessS3BackupMode),
    S3DestinationDescription: S.optional(S3DestinationDescription),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    VpcConfigurationDescription: S.optional(VpcConfigurationDescription),
  }),
).annotate({
  identifier: "AmazonOpenSearchServerlessDestinationDescription",
}) as any as S.Schema<AmazonOpenSearchServerlessDestinationDescription>;
export interface IcebergDestinationDescription {
  DestinationTableConfigurationList?: DestinationTableConfiguration[];
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
const IcebergDestinationDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DestinationTableConfigurationList: S.optional(DestinationTableConfigurationList),
    SchemaEvolutionConfiguration: S.optional(SchemaEvolutionConfiguration),
    TableCreationConfiguration: S.optional(TableCreationConfiguration),
    BufferingHints: S.optional(BufferingHints),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    S3BackupMode: S.optional(IcebergS3BackupMode),
    RetryOptions: S.optional(RetryOptions),
    RoleARN: S.optional(S.String),
    AppendOnly: S.optional(S.Boolean),
    CatalogConfiguration: S.optional(CatalogConfiguration),
    S3DestinationDescription: S.optional(S3DestinationDescription),
  }),
).annotate({
  identifier: "IcebergDestinationDescription",
}) as any as S.Schema<IcebergDestinationDescription>;
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
const DestinationDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DestinationId: S.String,
    S3DestinationDescription: S.optional(S3DestinationDescription),
    ExtendedS3DestinationDescription: S.optional(ExtendedS3DestinationDescription),
    RedshiftDestinationDescription: S.optional(RedshiftDestinationDescription),
    ElasticsearchDestinationDescription: S.optional(ElasticsearchDestinationDescription),
    AmazonopensearchserviceDestinationDescription: S.optional(
      AmazonopensearchserviceDestinationDescription,
    ),
    SplunkDestinationDescription: S.optional(SplunkDestinationDescription),
    HttpEndpointDestinationDescription: S.optional(HttpEndpointDestinationDescription),
    SnowflakeDestinationDescription: S.optional(SnowflakeDestinationDescription),
    AmazonOpenSearchServerlessDestinationDescription: S.optional(
      AmazonOpenSearchServerlessDestinationDescription,
    ),
    IcebergDestinationDescription: S.optional(IcebergDestinationDescription),
  }),
).annotate({ identifier: "DestinationDescription" }) as any as S.Schema<DestinationDescription>;
export type DestinationDescriptionList = DestinationDescription[];
const DestinationDescriptionList = /*@__PURE__*/ S.Array(DestinationDescription);
export interface DeliveryStreamDescription {
  DeliveryStreamName: string;
  DeliveryStreamARN: string;
  DeliveryStreamStatus: DeliveryStreamStatus;
  FailureDescription?: FailureDescription;
  DeliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration;
  DeliveryStreamType: DeliveryStreamType;
  VersionId: string;
  CreateTimestamp?: Date;
  LastUpdateTimestamp?: Date;
  Source?: SourceDescription;
  Destinations: DestinationDescription[];
  HasMoreDestinations: boolean;
}
const DeliveryStreamDescription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DeliveryStreamName: S.String,
    DeliveryStreamARN: S.String,
    DeliveryStreamStatus: DeliveryStreamStatus,
    FailureDescription: S.optional(FailureDescription),
    DeliveryStreamEncryptionConfiguration: S.optional(DeliveryStreamEncryptionConfiguration),
    DeliveryStreamType: DeliveryStreamType,
    VersionId: S.String,
    CreateTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    LastUpdateTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    Source: S.optional(SourceDescription),
    Destinations: DestinationDescriptionList,
    HasMoreDestinations: S.Boolean,
  }),
).annotate({
  identifier: "DeliveryStreamDescription",
}) as any as S.Schema<DeliveryStreamDescription>;
export interface DescribeDeliveryStreamOutput {
  DeliveryStreamDescription: DeliveryStreamDescription;
}
const DescribeDeliveryStreamOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DeliveryStreamDescription: DeliveryStreamDescription }).pipe(ns),
).annotate({
  identifier: "DescribeDeliveryStreamOutput",
}) as any as S.Schema<DescribeDeliveryStreamOutput>;
export type ListDeliveryStreamsInputLimit = number;
export interface ListDeliveryStreamsInput {
  Limit?: number;
  DeliveryStreamType?: DeliveryStreamType;
  ExclusiveStartDeliveryStreamName?: string;
}
const ListDeliveryStreamsInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Limit: S.optional(S.Number),
    DeliveryStreamType: S.optional(DeliveryStreamType),
    ExclusiveStartDeliveryStreamName: S.optional(S.String),
  }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListDeliveryStreamsInput" }) as any as S.Schema<ListDeliveryStreamsInput>;
export type DeliveryStreamNameList = string[];
const DeliveryStreamNameList = ListOfNonEmptyStrings as any as S.Schema<DeliveryStreamNameList>;
export interface ListDeliveryStreamsOutput {
  DeliveryStreamNames: string[];
  HasMoreDeliveryStreams: boolean;
}
const ListDeliveryStreamsOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DeliveryStreamNames: DeliveryStreamNameList, HasMoreDeliveryStreams: S.Boolean }).pipe(
    ns,
  ),
).annotate({
  identifier: "ListDeliveryStreamsOutput",
}) as any as S.Schema<ListDeliveryStreamsOutput>;
export type ListTagsForDeliveryStreamInputLimit = number;
export interface ListTagsForDeliveryStreamInput {
  DeliveryStreamName: string;
  ExclusiveStartTagKey?: string;
  Limit?: number;
}
const ListTagsForDeliveryStreamInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DeliveryStreamName: S.String,
    ExclusiveStartTagKey: S.optional(S.String),
    Limit: S.optional(S.Number),
  }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "ListTagsForDeliveryStreamInput",
}) as any as S.Schema<ListTagsForDeliveryStreamInput>;
export type ListTagsForDeliveryStreamOutputTagList = Tag[];
const ListTagsForDeliveryStreamOutputTagList =
  TagDeliveryStreamInputTagList as any as S.Schema<ListTagsForDeliveryStreamOutputTagList>;
export interface ListTagsForDeliveryStreamOutput {
  Tags: Tag[];
  HasMoreTags: boolean;
}
const ListTagsForDeliveryStreamOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Tags: ListTagsForDeliveryStreamOutputTagList, HasMoreTags: S.Boolean }).pipe(ns),
).annotate({
  identifier: "ListTagsForDeliveryStreamOutput",
}) as any as S.Schema<ListTagsForDeliveryStreamOutput>;
export type Data = Uint8Array;
export interface Record {
  Data: Uint8Array;
}
const Record = /*@__PURE__*/ S.suspend(() => S.Struct({ Data: T.Blob })).annotate({
  identifier: "Record",
}) as any as S.Schema<Record>;
export interface PutRecordInput {
  DeliveryStreamName: string;
  Record: Record;
}
const PutRecordInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DeliveryStreamName: S.String, Record: Record }).pipe(
    T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "PutRecordInput" }) as any as S.Schema<PutRecordInput>;
export type PutResponseRecordId = string;
export interface PutRecordOutput {
  RecordId: string;
  Encrypted?: boolean;
}
const PutRecordOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ RecordId: S.String, Encrypted: S.optional(S.Boolean) }).pipe(ns),
).annotate({ identifier: "PutRecordOutput" }) as any as S.Schema<PutRecordOutput>;
export type PutRecordBatchRequestEntryList = Record[];
const PutRecordBatchRequestEntryList = /*@__PURE__*/ S.Array(Record);
export interface PutRecordBatchInput {
  DeliveryStreamName: string;
  Records: Record[];
}
const PutRecordBatchInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DeliveryStreamName: S.String, Records: PutRecordBatchRequestEntryList }).pipe(
    T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "PutRecordBatchInput" }) as any as S.Schema<PutRecordBatchInput>;
export type ErrorCode = string;
export type ErrorMessage = string;
export interface PutRecordBatchResponseEntry {
  RecordId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
const PutRecordBatchResponseEntry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RecordId: S.optional(S.String),
    ErrorCode: S.optional(S.String),
    ErrorMessage: S.optional(S.String),
  }),
).annotate({
  identifier: "PutRecordBatchResponseEntry",
}) as any as S.Schema<PutRecordBatchResponseEntry>;
export type PutRecordBatchResponseEntryList = PutRecordBatchResponseEntry[];
const PutRecordBatchResponseEntryList = /*@__PURE__*/ S.Array(PutRecordBatchResponseEntry);
export interface PutRecordBatchOutput {
  FailedPutCount: number;
  Encrypted?: boolean;
  RequestResponses: PutRecordBatchResponseEntry[];
}
const PutRecordBatchOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    FailedPutCount: S.Number,
    Encrypted: S.optional(S.Boolean),
    RequestResponses: PutRecordBatchResponseEntryList,
  }).pipe(ns),
).annotate({ identifier: "PutRecordBatchOutput" }) as any as S.Schema<PutRecordBatchOutput>;
export interface StartDeliveryStreamEncryptionInput {
  DeliveryStreamName: string;
  DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
}
const StartDeliveryStreamEncryptionInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DeliveryStreamName: S.String,
    DeliveryStreamEncryptionConfigurationInput: S.optional(
      DeliveryStreamEncryptionConfigurationInput,
    ),
  }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "StartDeliveryStreamEncryptionInput",
}) as any as S.Schema<StartDeliveryStreamEncryptionInput>;
export interface StartDeliveryStreamEncryptionOutput {}
const StartDeliveryStreamEncryptionOutput =
  DeleteDeliveryStreamOutput as any as S.Schema<StartDeliveryStreamEncryptionOutput>;
export interface StopDeliveryStreamEncryptionInput {
  DeliveryStreamName: string;
}
const StopDeliveryStreamEncryptionInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DeliveryStreamName: S.String }).pipe(
    T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "StopDeliveryStreamEncryptionInput",
}) as any as S.Schema<StopDeliveryStreamEncryptionInput>;
export interface StopDeliveryStreamEncryptionOutput {}
const StopDeliveryStreamEncryptionOutput =
  DeleteDeliveryStreamOutput as any as S.Schema<StopDeliveryStreamEncryptionOutput>;
export interface TagDeliveryStreamInput {
  DeliveryStreamName: string;
  Tags: Tag[];
}
const TagDeliveryStreamInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DeliveryStreamName: S.String, Tags: TagDeliveryStreamInputTagList }).pipe(
    T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "TagDeliveryStreamInput" }) as any as S.Schema<TagDeliveryStreamInput>;
export interface TagDeliveryStreamOutput {}
const TagDeliveryStreamOutput = /*@__PURE__*/ S.suspend(() => S.Struct({}).pipe(ns)).annotate({
  identifier: "TagDeliveryStreamOutput",
}) as any as S.Schema<TagDeliveryStreamOutput>;
export type TagKeyList = string[];
const TagKeyList = ListOfNonEmptyStrings as any as S.Schema<TagKeyList>;
export interface UntagDeliveryStreamInput {
  DeliveryStreamName: string;
  TagKeys: string[];
}
const UntagDeliveryStreamInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DeliveryStreamName: S.String, TagKeys: TagKeyList }).pipe(
    T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "UntagDeliveryStreamInput" }) as any as S.Schema<UntagDeliveryStreamInput>;
export interface UntagDeliveryStreamOutput {}
const UntagDeliveryStreamOutput =
  DeleteDeliveryStreamOutput as any as S.Schema<UntagDeliveryStreamOutput>;
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
const S3DestinationUpdate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.optional(S.String),
    BucketARN: S.optional(S.String),
    Prefix: S.optional(S.String),
    ErrorOutputPrefix: S.optional(S.String),
    BufferingHints: S.optional(BufferingHints),
    CompressionFormat: S.optional(CompressionFormat),
    EncryptionConfiguration: S.optional(EncryptionConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
  }),
).annotate({ identifier: "S3DestinationUpdate" }) as any as S.Schema<S3DestinationUpdate>;
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
const ExtendedS3DestinationUpdate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.optional(S.String),
    BucketARN: S.optional(S.String),
    Prefix: S.optional(S.String),
    ErrorOutputPrefix: S.optional(S.String),
    BufferingHints: S.optional(BufferingHints),
    CompressionFormat: S.optional(CompressionFormat),
    EncryptionConfiguration: S.optional(EncryptionConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    S3BackupMode: S.optional(S3BackupMode),
    S3BackupUpdate: S.optional(S3DestinationUpdate),
    DataFormatConversionConfiguration: S.optional(DataFormatConversionConfiguration),
    DynamicPartitioningConfiguration: S.optional(DynamicPartitioningConfiguration),
    FileExtension: S.optional(S.String),
    CustomTimeZone: S.optional(S.String),
  }),
).annotate({
  identifier: "ExtendedS3DestinationUpdate",
}) as any as S.Schema<ExtendedS3DestinationUpdate>;
export interface RedshiftDestinationUpdate {
  RoleARN?: string;
  ClusterJDBCURL?: string;
  CopyCommand?: CopyCommand;
  Username?: string | redacted.Redacted<string>;
  Password?: string | redacted.Redacted<string>;
  RetryOptions?: RedshiftRetryOptions;
  S3Update?: S3DestinationUpdate;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: RedshiftS3BackupMode;
  S3BackupUpdate?: S3DestinationUpdate;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
const RedshiftDestinationUpdate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.optional(S.String),
    ClusterJDBCURL: S.optional(S.String),
    CopyCommand: S.optional(CopyCommand),
    Username: S.optional(SensitiveString),
    Password: S.optional(SensitiveString),
    RetryOptions: S.optional(RedshiftRetryOptions),
    S3Update: S.optional(S3DestinationUpdate),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    S3BackupMode: S.optional(RedshiftS3BackupMode),
    S3BackupUpdate: S.optional(S3DestinationUpdate),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    SecretsManagerConfiguration: S.optional(SecretsManagerConfiguration),
  }),
).annotate({
  identifier: "RedshiftDestinationUpdate",
}) as any as S.Schema<RedshiftDestinationUpdate>;
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
const ElasticsearchDestinationUpdate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.optional(S.String),
    DomainARN: S.optional(S.String),
    ClusterEndpoint: S.optional(S.String),
    IndexName: S.optional(S.String),
    TypeName: S.optional(S.String),
    IndexRotationPeriod: S.optional(ElasticsearchIndexRotationPeriod),
    BufferingHints: S.optional(ElasticsearchBufferingHints),
    RetryOptions: S.optional(ElasticsearchRetryOptions),
    S3Update: S.optional(S3DestinationUpdate),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    DocumentIdOptions: S.optional(DocumentIdOptions),
  }),
).annotate({
  identifier: "ElasticsearchDestinationUpdate",
}) as any as S.Schema<ElasticsearchDestinationUpdate>;
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
const AmazonopensearchserviceDestinationUpdate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.optional(S.String),
    DomainARN: S.optional(S.String),
    ClusterEndpoint: S.optional(S.String),
    IndexName: S.optional(S.String),
    TypeName: S.optional(S.String),
    IndexRotationPeriod: S.optional(AmazonopensearchserviceIndexRotationPeriod),
    BufferingHints: S.optional(AmazonopensearchserviceBufferingHints),
    RetryOptions: S.optional(AmazonopensearchserviceRetryOptions),
    S3Update: S.optional(S3DestinationUpdate),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    DocumentIdOptions: S.optional(DocumentIdOptions),
  }),
).annotate({
  identifier: "AmazonopensearchserviceDestinationUpdate",
}) as any as S.Schema<AmazonopensearchserviceDestinationUpdate>;
export interface SplunkDestinationUpdate {
  HECEndpoint?: string;
  HECEndpointType?: HECEndpointType;
  HECToken?: string | redacted.Redacted<string>;
  HECAcknowledgmentTimeoutInSeconds?: number;
  RetryOptions?: SplunkRetryOptions;
  S3BackupMode?: SplunkS3BackupMode;
  S3Update?: S3DestinationUpdate;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  BufferingHints?: SplunkBufferingHints;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
}
const SplunkDestinationUpdate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    HECEndpoint: S.optional(S.String),
    HECEndpointType: S.optional(HECEndpointType),
    HECToken: S.optional(SensitiveString),
    HECAcknowledgmentTimeoutInSeconds: S.optional(S.Number),
    RetryOptions: S.optional(SplunkRetryOptions),
    S3BackupMode: S.optional(SplunkS3BackupMode),
    S3Update: S.optional(S3DestinationUpdate),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    BufferingHints: S.optional(SplunkBufferingHints),
    SecretsManagerConfiguration: S.optional(SecretsManagerConfiguration),
  }),
).annotate({ identifier: "SplunkDestinationUpdate" }) as any as S.Schema<SplunkDestinationUpdate>;
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
const HttpEndpointDestinationUpdate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    EndpointConfiguration: S.optional(HttpEndpointConfiguration),
    BufferingHints: S.optional(HttpEndpointBufferingHints),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    RequestConfiguration: S.optional(HttpEndpointRequestConfiguration),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    RoleARN: S.optional(S.String),
    RetryOptions: S.optional(HttpEndpointRetryOptions),
    S3BackupMode: S.optional(HttpEndpointS3BackupMode),
    S3Update: S.optional(S3DestinationUpdate),
    SecretsManagerConfiguration: S.optional(SecretsManagerConfiguration),
  }),
).annotate({
  identifier: "HttpEndpointDestinationUpdate",
}) as any as S.Schema<HttpEndpointDestinationUpdate>;
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
const AmazonOpenSearchServerlessDestinationUpdate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoleARN: S.optional(S.String),
    CollectionEndpoint: S.optional(S.String),
    IndexName: S.optional(S.String),
    BufferingHints: S.optional(AmazonOpenSearchServerlessBufferingHints),
    RetryOptions: S.optional(AmazonOpenSearchServerlessRetryOptions),
    S3Update: S.optional(S3DestinationUpdate),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
  }),
).annotate({
  identifier: "AmazonOpenSearchServerlessDestinationUpdate",
}) as any as S.Schema<AmazonOpenSearchServerlessDestinationUpdate>;
export interface SnowflakeDestinationUpdate {
  AccountUrl?: string | redacted.Redacted<string>;
  PrivateKey?: string | redacted.Redacted<string>;
  KeyPassphrase?: string | redacted.Redacted<string>;
  User?: string | redacted.Redacted<string>;
  Database?: string | redacted.Redacted<string>;
  Schema?: string | redacted.Redacted<string>;
  Table?: string | redacted.Redacted<string>;
  SnowflakeRoleConfiguration?: SnowflakeRoleConfiguration;
  DataLoadingOption?: SnowflakeDataLoadingOption;
  MetaDataColumnName?: string | redacted.Redacted<string>;
  ContentColumnName?: string | redacted.Redacted<string>;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  ProcessingConfiguration?: ProcessingConfiguration;
  RoleARN?: string;
  RetryOptions?: SnowflakeRetryOptions;
  S3BackupMode?: SnowflakeS3BackupMode;
  S3Update?: S3DestinationUpdate;
  SecretsManagerConfiguration?: SecretsManagerConfiguration;
  BufferingHints?: SnowflakeBufferingHints;
}
const SnowflakeDestinationUpdate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AccountUrl: S.optional(SensitiveString),
    PrivateKey: S.optional(SensitiveString),
    KeyPassphrase: S.optional(SensitiveString),
    User: S.optional(SensitiveString),
    Database: S.optional(SensitiveString),
    Schema: S.optional(SensitiveString),
    Table: S.optional(SensitiveString),
    SnowflakeRoleConfiguration: S.optional(SnowflakeRoleConfiguration),
    DataLoadingOption: S.optional(SnowflakeDataLoadingOption),
    MetaDataColumnName: S.optional(SensitiveString),
    ContentColumnName: S.optional(SensitiveString),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    RoleARN: S.optional(S.String),
    RetryOptions: S.optional(SnowflakeRetryOptions),
    S3BackupMode: S.optional(SnowflakeS3BackupMode),
    S3Update: S.optional(S3DestinationUpdate),
    SecretsManagerConfiguration: S.optional(SecretsManagerConfiguration),
    BufferingHints: S.optional(SnowflakeBufferingHints),
  }),
).annotate({
  identifier: "SnowflakeDestinationUpdate",
}) as any as S.Schema<SnowflakeDestinationUpdate>;
export interface IcebergDestinationUpdate {
  DestinationTableConfigurationList?: DestinationTableConfiguration[];
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
const IcebergDestinationUpdate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DestinationTableConfigurationList: S.optional(DestinationTableConfigurationList),
    SchemaEvolutionConfiguration: S.optional(SchemaEvolutionConfiguration),
    TableCreationConfiguration: S.optional(TableCreationConfiguration),
    BufferingHints: S.optional(BufferingHints),
    CloudWatchLoggingOptions: S.optional(CloudWatchLoggingOptions),
    ProcessingConfiguration: S.optional(ProcessingConfiguration),
    S3BackupMode: S.optional(IcebergS3BackupMode),
    RetryOptions: S.optional(RetryOptions),
    RoleARN: S.optional(S.String),
    AppendOnly: S.optional(S.Boolean),
    CatalogConfiguration: S.optional(CatalogConfiguration),
    S3Configuration: S.optional(S3DestinationConfiguration),
  }),
).annotate({ identifier: "IcebergDestinationUpdate" }) as any as S.Schema<IcebergDestinationUpdate>;
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
const UpdateDestinationInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DeliveryStreamName: S.String,
    CurrentDeliveryStreamVersionId: S.String,
    DestinationId: S.String,
    S3DestinationUpdate: S.optional(S3DestinationUpdate),
    ExtendedS3DestinationUpdate: S.optional(ExtendedS3DestinationUpdate),
    RedshiftDestinationUpdate: S.optional(RedshiftDestinationUpdate),
    ElasticsearchDestinationUpdate: S.optional(ElasticsearchDestinationUpdate),
    AmazonopensearchserviceDestinationUpdate: S.optional(AmazonopensearchserviceDestinationUpdate),
    SplunkDestinationUpdate: S.optional(SplunkDestinationUpdate),
    HttpEndpointDestinationUpdate: S.optional(HttpEndpointDestinationUpdate),
    AmazonOpenSearchServerlessDestinationUpdate: S.optional(
      AmazonOpenSearchServerlessDestinationUpdate,
    ),
    SnowflakeDestinationUpdate: S.optional(SnowflakeDestinationUpdate),
    IcebergDestinationUpdate: S.optional(IcebergDestinationUpdate),
  }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "UpdateDestinationInput" }) as any as S.Schema<UpdateDestinationInput>;
export interface UpdateDestinationOutput {}
const UpdateDestinationOutput = TagDeliveryStreamOutput as any as S.Schema<UpdateDestinationOutput>;
export type CreateDeliveryStreamError =
  | InvalidArgumentException
  | InvalidKMSResourceException
  | LimitExceededException
  | ResourceInUseException
  | CommonErrors;
/**
 * Creates a Firehose stream.
 *
 * By default, you can create up to 5,000 Firehose streams per Amazon Web Services
 * Region.
 *
 * This is an asynchronous operation that immediately returns. The initial status of the
 * Firehose stream is `CREATING`. After the Firehose stream is created, its status
 * is `ACTIVE` and it now accepts data. If the Firehose stream creation fails, the
 * status transitions to `CREATING_FAILED`. Attempts to send data to a delivery
 * stream that is not in the `ACTIVE` state cause an exception. To check the state
 * of a Firehose stream, use DescribeDeliveryStream.
 *
 * If the status of a Firehose stream is `CREATING_FAILED`, this status
 * doesn't change, and you can't invoke `CreateDeliveryStream` again on it.
 * However, you can invoke the DeleteDeliveryStream operation to delete
 * it.
 *
 * A Firehose stream can be configured to receive records directly
 * from providers using PutRecord or PutRecordBatch, or it
 * can be configured to use an existing Kinesis stream as its source. To specify a Kinesis
 * data stream as input, set the `DeliveryStreamType` parameter to
 * `KinesisStreamAsSource`, and provide the Kinesis stream Amazon Resource Name
 * (ARN) and role ARN in the `KinesisStreamSourceConfiguration`
 * parameter.
 *
 * To create a Firehose stream with server-side encryption (SSE) enabled, include DeliveryStreamEncryptionConfigurationInput in your request. This is
 * optional. You can also invoke StartDeliveryStreamEncryption to turn on
 * SSE for an existing Firehose stream that doesn't have SSE enabled.
 *
 * A Firehose stream is configured with a single destination, such as Amazon Simple
 * Storage Service (Amazon S3), Amazon Redshift, Amazon OpenSearch Service, Amazon OpenSearch
 * Serverless, Splunk, and any custom HTTP endpoint or HTTP endpoints owned by or supported by
 * third-party service providers, including Datadog, Dynatrace, LogicMonitor, MongoDB, New
 * Relic, and Sumo Logic. You must specify only one of the following destination configuration
 * parameters: `ExtendedS3DestinationConfiguration`,
 * `S3DestinationConfiguration`,
 * `ElasticsearchDestinationConfiguration`,
 * `RedshiftDestinationConfiguration`, or
 * `SplunkDestinationConfiguration`.
 *
 * When you specify `S3DestinationConfiguration`, you can also provide the
 * following optional values: BufferingHints, `EncryptionConfiguration`, and
 * `CompressionFormat`. By default, if no `BufferingHints` value is
 * provided, Firehose buffers data up to 5 MB or for 5 minutes, whichever
 * condition is satisfied first. `BufferingHints` is a hint, so there are some
 * cases where the service cannot adhere to these conditions strictly. For example, record
 * boundaries might be such that the size is a little over or under the configured buffering
 * size. By default, no encryption is performed. We strongly recommend that you enable
 * encryption to ensure secure data storage in Amazon S3.
 *
 * A few notes about Amazon Redshift as a destination:
 *
 * - An Amazon Redshift destination requires an S3 bucket as intermediate location.
 * Firehose first delivers data to Amazon S3 and then uses
 * `COPY` syntax to load data into an Amazon Redshift table. This is
 * specified in the `RedshiftDestinationConfiguration.S3Configuration`
 * parameter.
 *
 * - The compression formats `SNAPPY` or `ZIP` cannot be
 * specified in `RedshiftDestinationConfiguration.S3Configuration` because
 * the Amazon Redshift `COPY` operation that reads from the S3 bucket doesn't
 * support these compression formats.
 *
 * - We strongly recommend that you use the user name and password you provide
 * exclusively with Firehose, and that the permissions for the account are
 * restricted for Amazon Redshift `INSERT` permissions.
 *
 * Firehose assumes the IAM role that is configured as part of the
 * destination. The role should allow the Firehose principal to assume the role,
 * and the role should have permissions that allow the service to deliver the data. For more
 * information, see Grant Firehose Access to an Amazon S3 Destination in the *Amazon Firehose Developer Guide*.
 */
export const createDeliveryStream: API.OperationMethod<
  CreateDeliveryStreamInput,
  CreateDeliveryStreamOutput,
  CreateDeliveryStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDeliveryStreamInput,
  output: CreateDeliveryStreamOutput,
  errors: [
    InvalidArgumentException,
    InvalidKMSResourceException,
    LimitExceededException,
    ResourceInUseException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDeliveryStream",
}));

export type DeleteDeliveryStreamError =
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a Firehose stream and its data.
 *
 * You can delete a Firehose stream only if it is in one of the following states:
 * `ACTIVE`, `DELETING`, `CREATING_FAILED`, or
 * `DELETING_FAILED`. You can't delete a Firehose stream that is in the
 * `CREATING` state. To check the state of a Firehose stream, use DescribeDeliveryStream.
 *
 * DeleteDeliveryStream is an asynchronous API. When an API request to DeleteDeliveryStream succeeds, the Firehose stream is marked for deletion, and it goes into the
 * `DELETING` state.While the Firehose stream is in the `DELETING` state, the service might
 * continue to accept records, but it doesn't make any guarantees with respect to delivering
 * the data. Therefore, as a best practice, first stop any applications that are sending
 * records before you delete a Firehose stream.
 *
 * Removal of a Firehose stream that is in the `DELETING` state is a low priority operation for the service. A stream may remain in the
 * `DELETING` state for several minutes. Therefore, as a best practice, applications should not wait for streams in the `DELETING` state
 * to be removed.
 */
export const deleteDeliveryStream: API.OperationMethod<
  DeleteDeliveryStreamInput,
  DeleteDeliveryStreamOutput,
  DeleteDeliveryStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDeliveryStreamInput,
  output: DeleteDeliveryStreamOutput,
  errors: [ResourceInUseException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDeliveryStream",
}));

export type DescribeDeliveryStreamError = ResourceNotFoundException | CommonErrors;
/**
 * Describes the specified Firehose stream and its status. For example, after your
 * Firehose stream is created, call `DescribeDeliveryStream` to see whether the
 * Firehose stream is `ACTIVE` and therefore ready for data to be sent to it.
 *
 * If the status of a Firehose stream is `CREATING_FAILED`, this status
 * doesn't change, and you can't invoke CreateDeliveryStream again on it.
 * However, you can invoke the DeleteDeliveryStream operation to delete it.
 * If the status is `DELETING_FAILED`, you can force deletion by invoking DeleteDeliveryStream again but with DeleteDeliveryStreamInput$AllowForceDelete set to true.
 */
export const describeDeliveryStream: API.OperationMethod<
  DescribeDeliveryStreamInput,
  DescribeDeliveryStreamOutput,
  DescribeDeliveryStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeDeliveryStreamInput,
  output: DescribeDeliveryStreamOutput,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDeliveryStream",
}));

export type ListDeliveryStreamsError = CommonErrors;
/**
 * Lists your Firehose streams in alphabetical order of their names.
 *
 * The number of Firehose streams might be too large to return using a single call to
 * `ListDeliveryStreams`. You can limit the number of Firehose streams returned,
 * using the `Limit` parameter. To determine whether there are more delivery
 * streams to list, check the value of `HasMoreDeliveryStreams` in the output. If
 * there are more Firehose streams to list, you can request them by calling this operation
 * again and setting the `ExclusiveStartDeliveryStreamName` parameter to the name
 * of the last Firehose stream returned in the last call.
 */
export const listDeliveryStreams: API.OperationMethod<
  ListDeliveryStreamsInput,
  ListDeliveryStreamsOutput,
  ListDeliveryStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListDeliveryStreamsInput,
  output: ListDeliveryStreamsOutput,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDeliveryStreams",
}));

export type ListTagsForDeliveryStreamError =
  | InvalidArgumentException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the tags for the specified Firehose stream. This operation has a limit of five
 * transactions per second per account.
 */
export const listTagsForDeliveryStream: API.OperationMethod<
  ListTagsForDeliveryStreamInput,
  ListTagsForDeliveryStreamOutput,
  ListTagsForDeliveryStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForDeliveryStreamInput,
  output: ListTagsForDeliveryStreamOutput,
  errors: [InvalidArgumentException, LimitExceededException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForDeliveryStream",
}));

export type PutRecordError =
  | InvalidArgumentException
  | InvalidKMSResourceException
  | InvalidSourceException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Writes a single data record into an Firehose stream. To
 * write multiple data records into a Firehose stream, use PutRecordBatch.
 * Applications using these operations are referred to as producers.
 *
 * By default, each Firehose stream can take in up to 2,000 transactions per second,
 * 5,000 records per second, or 5 MB per second. If you use PutRecord and
 * PutRecordBatch, the limits are an aggregate across these two
 * operations for each Firehose stream. For more information about limits and how to request
 * an increase, see Amazon
 * Firehose Limits.
 *
 * Firehose accumulates and publishes a particular metric for a customer account in one minute intervals. It is possible that the bursts of incoming bytes/records ingested to a Firehose stream last only for a few seconds. Due to this, the actual spikes in the traffic might not be fully visible in the customer's 1 minute CloudWatch metrics.
 *
 * You must specify the name of the Firehose stream and the data record when using PutRecord. The data record consists of a data blob that can be up to 1,000
 * KiB in size, and any kind of data. For example, it can be a segment from a log file,
 * geographic location data, website clickstream data, and so on.
 *
 * For multi record de-aggregation, you can not put more than 500 records even if the
 * data blob length is less than 1000 KiB. If you include more than 500 records, the request
 * succeeds but the record de-aggregation doesn't work as expected and transformation lambda
 * is invoked with the complete base64 encoded data blob instead of de-aggregated base64
 * decoded records.
 *
 * Firehose buffers records before delivering them to the destination. To
 * disambiguate the data blobs at the destination, a common solution is to use delimiters in
 * the data, such as a newline (`\n`) or some other character unique within the
 * data. This allows the consumer application to parse individual data items when reading the
 * data from the destination.
 *
 * The `PutRecord` operation returns a `RecordId`, which is a
 * unique string assigned to each record. Producer applications can use this ID for purposes
 * such as auditability and investigation.
 *
 * If the `PutRecord` operation throws a
 * `ServiceUnavailableException`, the API is automatically reinvoked (retried) 3
 * times. If the exception persists, it is possible that the throughput limits have been
 * exceeded for the Firehose stream.
 *
 * Re-invoking the Put API operations (for example, PutRecord and PutRecordBatch) can
 * result in data duplicates. For larger data assets, allow for a longer time out before
 * retrying Put API operations.
 *
 * Data records sent to Firehose are stored for 24 hours from the time they
 * are added to a Firehose stream as it tries to send the records to the destination. If the
 * destination is unreachable for more than 24 hours, the data is no longer
 * available.
 *
 * Don't concatenate two or more base64 strings to form the data fields of your records.
 * Instead, concatenate the raw data, then perform base64 encoding.
 */
export const putRecord: API.OperationMethod<
  PutRecordInput,
  PutRecordOutput,
  PutRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutRecordInput,
  output: PutRecordOutput,
  errors: [
    InvalidArgumentException,
    InvalidKMSResourceException,
    InvalidSourceException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutRecord",
}));

export type PutRecordBatchError =
  | InvalidArgumentException
  | InvalidKMSResourceException
  | InvalidSourceException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Writes multiple data records into a Firehose stream in a single call, which can
 * achieve higher throughput per producer than when writing single records. To write single
 * data records into a Firehose stream, use PutRecord. Applications using
 * these operations are referred to as producers.
 *
 * Firehose accumulates and publishes a particular metric for a customer account in one minute intervals. It is possible that the bursts of incoming bytes/records ingested to a Firehose stream last only for a few seconds. Due to this, the actual spikes in the traffic might not be fully visible in the customer's 1 minute CloudWatch metrics.
 *
 * For information about service quota, see Amazon Firehose
 * Quota.
 *
 * Each PutRecordBatch request supports up to 500 records. Each record
 * in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB
 * for the entire request. These limits cannot be changed.
 *
 * You must specify the name of the Firehose stream and the data record when using PutRecord. The data record consists of a data blob that can be up to 1,000
 * KB in size, and any kind of data. For example, it could be a segment from a log file,
 * geographic location data, website clickstream data, and so on.
 *
 * For multi record de-aggregation, you can not put more than 500 records even if the
 * data blob length is less than 1000 KiB. If you include more than 500 records, the request
 * succeeds but the record de-aggregation doesn't work as expected and transformation lambda
 * is invoked with the complete base64 encoded data blob instead of de-aggregated base64
 * decoded records.
 *
 * Firehose buffers records before delivering them to the destination. To
 * disambiguate the data blobs at the destination, a common solution is to use delimiters in
 * the data, such as a newline (`\n`) or some other character unique within the
 * data. This allows the consumer application to parse individual data items when reading the
 * data from the destination.
 *
 * The PutRecordBatch response includes a count of failed records,
 * `FailedPutCount`, and an array of responses, `RequestResponses`.
 * Even if the PutRecordBatch call succeeds, the value of
 * `FailedPutCount` may be greater than 0, indicating that there are records for
 * which the operation didn't succeed. Each entry in the `RequestResponses` array
 * provides additional information about the processed record. It directly correlates with a
 * record in the request array using the same ordering, from the top to the bottom. The
 * response array always includes the same number of records as the request array.
 * `RequestResponses` includes both successfully and unsuccessfully processed
 * records. Firehose tries to process all records in each PutRecordBatch request. A single record failure does not stop the processing
 * of subsequent records.
 *
 * A successfully processed record includes a `RecordId` value, which is
 * unique for the record. An unsuccessfully processed record includes `ErrorCode`
 * and `ErrorMessage` values. `ErrorCode` reflects the type of error,
 * and is one of the following values: `ServiceUnavailableException` or
 * `InternalFailure`. `ErrorMessage` provides more detailed
 * information about the error.
 *
 * If there is an internal server error or a timeout, the write might have completed or
 * it might have failed. If `FailedPutCount` is greater than 0, retry the request,
 * resending only those records that might have failed processing. This minimizes the possible
 * duplicate records and also reduces the total bytes sent (and corresponding charges). We
 * recommend that you handle any duplicates at the destination.
 *
 * If PutRecordBatch throws `ServiceUnavailableException`,
 * the API is automatically reinvoked (retried) 3 times. If the exception persists, it is
 * possible that the throughput limits have been exceeded for the Firehose stream.
 *
 * Re-invoking the Put API operations (for example, PutRecord and PutRecordBatch) can
 * result in data duplicates. For larger data assets, allow for a longer time out before
 * retrying Put API operations.
 *
 * Data records sent to Firehose are stored for 24 hours from the time they
 * are added to a Firehose stream as it attempts to send the records to the destination. If
 * the destination is unreachable for more than 24 hours, the data is no longer
 * available.
 *
 * Don't concatenate two or more base64 strings to form the data fields of your records.
 * Instead, concatenate the raw data, then perform base64 encoding.
 */
export const putRecordBatch: API.OperationMethod<
  PutRecordBatchInput,
  PutRecordBatchOutput,
  PutRecordBatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutRecordBatchInput,
  output: PutRecordBatchOutput,
  errors: [
    InvalidArgumentException,
    InvalidKMSResourceException,
    InvalidSourceException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutRecordBatch",
}));

export type StartDeliveryStreamEncryptionError =
  | InvalidArgumentException
  | InvalidKMSResourceException
  | LimitExceededException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Enables server-side encryption (SSE) for the Firehose stream.
 *
 * This operation is asynchronous. It returns immediately. When you invoke it, Firehose first sets the encryption status of the stream to `ENABLING`, and then
 * to `ENABLED`. The encryption status of a Firehose stream is the
 * `Status` property in DeliveryStreamEncryptionConfiguration.
 * If the operation fails, the encryption status changes to `ENABLING_FAILED`. You
 * can continue to read and write data to your Firehose stream while the encryption status is
 * `ENABLING`, but the data is not encrypted. It can take up to 5 seconds after
 * the encryption status changes to `ENABLED` before all records written to the
 * Firehose stream are encrypted. To find out whether a record or a batch of records was
 * encrypted, check the response elements PutRecordOutput$Encrypted and
 * PutRecordBatchOutput$Encrypted, respectively.
 *
 * To check the encryption status of a Firehose stream, use DescribeDeliveryStream.
 *
 * Even if encryption is currently enabled for a Firehose stream, you can still invoke this
 * operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this
 * method to change the CMK, and the old CMK is of type `CUSTOMER_MANAGED_CMK`,
 * Firehose schedules the grant it had on the old CMK for retirement. If the new
 * CMK is of type `CUSTOMER_MANAGED_CMK`, Firehose creates a grant
 * that enables it to use the new CMK to encrypt and decrypt data and to manage the
 * grant.
 *
 * For the KMS grant creation to be successful, the Firehose API operations
 * `StartDeliveryStreamEncryption` and `CreateDeliveryStream` should
 * not be called with session credentials that are more than 6 hours old.
 *
 * If a Firehose stream already has encryption enabled and then you invoke this operation
 * to change the ARN of the CMK or both its type and ARN and you get
 * `ENABLING_FAILED`, this only means that the attempt to change the CMK failed.
 * In this case, encryption remains enabled with the old CMK.
 *
 * If the encryption status of your Firehose stream is `ENABLING_FAILED`, you
 * can invoke this operation again with a valid CMK. The CMK must be enabled and the key
 * policy mustn't explicitly deny the permission for Firehose to invoke KMS
 * encrypt and decrypt operations.
 *
 * You can enable SSE for a Firehose stream only if it's a Firehose stream that uses
 * `DirectPut` as its source.
 *
 * The `StartDeliveryStreamEncryption` and
 * `StopDeliveryStreamEncryption` operations have a combined limit of 25 calls
 * per Firehose stream per 24 hours. For example, you reach the limit if you call
 * `StartDeliveryStreamEncryption` 13 times and
 * `StopDeliveryStreamEncryption` 12 times for the same Firehose stream in a
 * 24-hour period.
 */
export const startDeliveryStreamEncryption: API.OperationMethod<
  StartDeliveryStreamEncryptionInput,
  StartDeliveryStreamEncryptionOutput,
  StartDeliveryStreamEncryptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartDeliveryStreamEncryptionInput,
  output: StartDeliveryStreamEncryptionOutput,
  errors: [
    InvalidArgumentException,
    InvalidKMSResourceException,
    LimitExceededException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDeliveryStreamEncryption",
}));

export type StopDeliveryStreamEncryptionError =
  | InvalidArgumentException
  | LimitExceededException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disables server-side encryption (SSE) for the Firehose stream.
 *
 * This operation is asynchronous. It returns immediately. When you invoke it, Firehose first sets the encryption status of the stream to `DISABLING`, and then
 * to `DISABLED`. You can continue to read and write data to your stream while its
 * status is `DISABLING`. It can take up to 5 seconds after the encryption status
 * changes to `DISABLED` before all records written to the Firehose stream are no
 * longer subject to encryption. To find out whether a record or a batch of records was
 * encrypted, check the response elements PutRecordOutput$Encrypted and
 * PutRecordBatchOutput$Encrypted, respectively.
 *
 * To check the encryption state of a Firehose stream, use DescribeDeliveryStream.
 *
 * If SSE is enabled using a customer managed CMK and then you invoke
 * `StopDeliveryStreamEncryption`, Firehose schedules the related
 * KMS grant for retirement and then retires it after it ensures that it is finished
 * delivering records to the destination.
 *
 * The `StartDeliveryStreamEncryption` and
 * `StopDeliveryStreamEncryption` operations have a combined limit of 25 calls
 * per Firehose stream per 24 hours. For example, you reach the limit if you call
 * `StartDeliveryStreamEncryption` 13 times and
 * `StopDeliveryStreamEncryption` 12 times for the same Firehose stream in a
 * 24-hour period.
 */
export const stopDeliveryStreamEncryption: API.OperationMethod<
  StopDeliveryStreamEncryptionInput,
  StopDeliveryStreamEncryptionOutput,
  StopDeliveryStreamEncryptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopDeliveryStreamEncryptionInput,
  output: StopDeliveryStreamEncryptionOutput,
  errors: [
    InvalidArgumentException,
    LimitExceededException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopDeliveryStreamEncryption",
}));

export type TagDeliveryStreamError =
  | InvalidArgumentException
  | LimitExceededException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds or updates tags for the specified Firehose stream. A tag is a key-value pair
 * that you can define and assign to Amazon Web Services resources. If you specify a tag that
 * already exists, the tag value is replaced with the value that you specify in the request.
 * Tags are metadata. For example, you can add friendly names and descriptions or other types
 * of information that can help you distinguish the Firehose stream. For more information
 * about tags, see Using Cost Allocation
 * Tags in the Amazon Web Services Billing and Cost Management User
 * Guide.
 *
 * Each Firehose stream can have up to 50 tags.
 *
 * This operation has a limit of five transactions per second per account.
 */
export const tagDeliveryStream: API.OperationMethod<
  TagDeliveryStreamInput,
  TagDeliveryStreamOutput,
  TagDeliveryStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagDeliveryStreamInput,
  output: TagDeliveryStreamOutput,
  errors: [
    InvalidArgumentException,
    LimitExceededException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagDeliveryStream",
}));

export type UntagDeliveryStreamError =
  | InvalidArgumentException
  | LimitExceededException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes tags from the specified Firehose stream. Removed tags are deleted, and you
 * can't recover them after this operation successfully completes.
 *
 * If you specify a tag that doesn't exist, the operation ignores it.
 *
 * This operation has a limit of five transactions per second per account.
 */
export const untagDeliveryStream: API.OperationMethod<
  UntagDeliveryStreamInput,
  UntagDeliveryStreamOutput,
  UntagDeliveryStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagDeliveryStreamInput,
  output: UntagDeliveryStreamOutput,
  errors: [
    InvalidArgumentException,
    LimitExceededException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagDeliveryStream",
}));

export type UpdateDestinationError =
  | ConcurrentModificationException
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the specified destination of the specified Firehose stream.
 *
 * Use this operation to change the destination type (for example, to replace the Amazon
 * S3 destination with Amazon Redshift) or change the parameters associated with a destination
 * (for example, to change the bucket name of the Amazon S3 destination). The update might not
 * occur immediately. The target Firehose stream remains active while the configurations are
 * updated, so data writes to the Firehose stream can continue during this process. The
 * updated configurations are usually effective within a few minutes.
 *
 * Switching between Amazon OpenSearch Service and other services is not supported. For
 * an Amazon OpenSearch Service destination, you can only update to another Amazon OpenSearch
 * Service destination.
 *
 * If the destination type is the same, Firehose merges the configuration
 * parameters specified with the destination configuration that already exists on the delivery
 * stream. If any of the parameters are not specified in the call, the existing values are
 * retained. For example, in the Amazon S3 destination, if EncryptionConfiguration is not specified, then the existing
 * `EncryptionConfiguration` is maintained on the destination.
 *
 * If the destination type is not the same, for example, changing the destination from
 * Amazon S3 to Amazon Redshift, Firehose does not merge any parameters. In this
 * case, all parameters must be specified.
 *
 * Firehose uses `CurrentDeliveryStreamVersionId` to avoid race
 * conditions and conflicting merges. This is a required field, and the service updates the
 * configuration only if the existing configuration has a version ID that matches. After the
 * update is applied successfully, the version ID is updated, and can be retrieved using DescribeDeliveryStream. Use the new version ID to set
 * `CurrentDeliveryStreamVersionId` in the next call.
 */
export const updateDestination: API.OperationMethod<
  UpdateDestinationInput,
  UpdateDestinationOutput,
  UpdateDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDestinationInput,
  output: UpdateDestinationOutput,
  errors: [
    ConcurrentModificationException,
    InvalidArgumentException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDestination",
}));
