import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
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
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const ns = /*@__PURE__*/ T.XmlNamespace("http://dms.amazonaws.com/doc/2016-01-01/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Database Migration Service",
  serviceShapeName: "AmazonDMSv20160101",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "dms" });
const ver = /*@__PURE__*/ T.ServiceVersion("2016-01-01");
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
              `https://dms-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://dms.${Region}.amazonaws.com`);
            }
            if (_.getAttr(PartitionResult, "name") === "aws-iso") {
              return e(`https://dms.${Region}.c2s.ic.gov`);
            }
            if (_.getAttr(PartitionResult, "name") === "aws-iso-b") {
              return e(`https://dms.${Region}.sc2s.sgov.gov`);
            }
            return e(`https://dms-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://dms.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://dms.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedFault
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedFault>()("AccessDeniedFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAuthError) {}
export class CollectorNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<CollectorNotFoundFault>()(
    "CollectorNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class FailedDependencyFault
  extends /*@__PURE__*/ S.TaggedError<FailedDependencyFault>()("FailedDependencyFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InsufficientResourceCapacityFault
  extends /*@__PURE__*/ S.TaggedError<InsufficientResourceCapacityFault>()(
    "InsufficientResourceCapacityFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidCertificateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidCertificateFault>()("InvalidCertificateFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidOperationFault
  extends /*@__PURE__*/ S.TaggedError<InvalidOperationFault>()("InvalidOperationFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidResourceStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidResourceStateFault>()("InvalidResourceStateFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidSubnet
  extends /*@__PURE__*/ S.TaggedError<InvalidSubnet>()("InvalidSubnet", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class KMSAccessDeniedFault
  extends /*@__PURE__*/ S.TaggedError<KMSAccessDeniedFault>()("KMSAccessDeniedFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAuthError) {}
export class KMSDisabledFault
  extends /*@__PURE__*/ S.TaggedError<KMSDisabledFault>()("KMSDisabledFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class KMSFault
  extends /*@__PURE__*/ S.TaggedError<KMSFault>()("KMSFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class KMSInvalidStateFault
  extends /*@__PURE__*/ S.TaggedError<KMSInvalidStateFault>()("KMSInvalidStateFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class KMSKeyNotAccessibleFault
  extends /*@__PURE__*/ S.TaggedError<KMSKeyNotAccessibleFault>()("KMSKeyNotAccessibleFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class KMSNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<KMSNotFoundFault>()("KMSNotFoundFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class KMSThrottlingFault
  extends /*@__PURE__*/ S.TaggedError<KMSThrottlingFault>()("KMSThrottlingFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ReplicationSubnetGroupDoesNotCoverEnoughAZs
  extends /*@__PURE__*/ S.TaggedError<ReplicationSubnetGroupDoesNotCoverEnoughAZs>()(
    "ReplicationSubnetGroupDoesNotCoverEnoughAZs",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ResourceAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsFault>()("ResourceAlreadyExistsFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    resourceArn: /*@__PURE__*/ S.optional(S.String),
  }).pipe(C.withAlreadyExistsError) {}
export class ResourceNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundFault>()("ResourceNotFoundFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ResourceQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<ResourceQuotaExceededFault>()("ResourceQuotaExceededFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class S3AccessDeniedFault
  extends /*@__PURE__*/ S.TaggedError<S3AccessDeniedFault>()("S3AccessDeniedFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAuthError) {}
export class S3ResourceNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<S3ResourceNotFoundFault>()("S3ResourceNotFoundFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class SNSInvalidTopicFault
  extends /*@__PURE__*/ S.TaggedError<SNSInvalidTopicFault>()("SNSInvalidTopicFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class SNSNoAuthorizationFault
  extends /*@__PURE__*/ S.TaggedError<SNSNoAuthorizationFault>()("SNSNoAuthorizationFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class StorageQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<StorageQuotaExceededFault>()("StorageQuotaExceededFault", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class SubnetAlreadyInUse
  extends /*@__PURE__*/ S.TaggedError<SubnetAlreadyInUse>()("SubnetAlreadyInUse", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withDependencyViolationError) {}
export class UpgradeDependencyFailureFault
  extends /*@__PURE__*/ S.TaggedError<UpgradeDependencyFailureFault>()(
    "UpgradeDependencyFailureFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export interface Tag {
  Key?: string;
  Value?: string;
  ResourceArn?: string;
}
export type TagList = Tag[];
export interface AddTagsToResourceMessage {
  ResourceArn: string;
  Tags: Tag[];
}
export interface AddTagsToResourceResponse {}
export interface ApplyPendingMaintenanceActionMessage {
  ReplicationInstanceArn: string;
  ApplyAction: string;
  OptInType: string;
}
export interface PendingMaintenanceAction {
  Action?: string;
  AutoAppliedAfterDate?: Date;
  ForcedApplyDate?: Date;
  OptInStatus?: string;
  CurrentApplyDate?: Date;
  Description?: string;
}
export type PendingMaintenanceActionDetails = PendingMaintenanceAction[];
export interface ResourcePendingMaintenanceActions {
  ResourceIdentifier?: string;
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[];
}
export interface ApplyPendingMaintenanceActionResponse {
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}
export interface RecommendationSettings {
  InstanceSizingType: string;
  WorkloadType: string;
}
export interface StartRecommendationsRequestEntry {
  DatabaseId: string;
  Settings: RecommendationSettings;
}
export type StartRecommendationsRequestEntryList = StartRecommendationsRequestEntry[];
export interface BatchStartRecommendationsRequest {
  Data?: StartRecommendationsRequestEntry[];
}
export interface BatchStartRecommendationsErrorEntry {
  DatabaseId?: string;
  Message?: string;
  Code?: string;
}
export type BatchStartRecommendationsErrorEntryList = BatchStartRecommendationsErrorEntry[];
export interface BatchStartRecommendationsResponse {
  ErrorEntries?: BatchStartRecommendationsErrorEntry[];
}
export type MigrationProjectIdentifier = string;
export interface CancelMetadataModelConversionMessage {
  MigrationProjectIdentifier: string;
  RequestIdentifier: string;
}
export interface DefaultErrorDetails {
  Message?: string;
}
export type ErrorDetails = { defaultErrorDetails: DefaultErrorDetails };
export interface ExportSqlDetails {
  S3ObjectKey?: string;
  ObjectURL?: string;
}
export interface ProcessedObject {
  Name?: string;
  Type?: string;
  EndpointType?: string;
}
export interface Progress {
  ProgressPercent?: number;
  TotalObjects?: number;
  ProgressStep?: string;
  ProcessedObject?: ProcessedObject;
}
export interface SchemaConversionRequest {
  Status?: string;
  RequestIdentifier?: string;
  MigrationProjectArn?: string;
  Error?: ErrorDetails;
  ExportSqlDetails?: ExportSqlDetails;
  Progress?: Progress;
}
export interface CancelMetadataModelConversionResponse {
  Request?: SchemaConversionRequest;
}
export interface CancelMetadataModelCreationMessage {
  MigrationProjectIdentifier: string;
  RequestIdentifier: string;
}
export interface CancelMetadataModelCreationResponse {
  Request?: SchemaConversionRequest;
}
export interface CancelReplicationTaskAssessmentRunMessage {
  ReplicationTaskAssessmentRunArn: string;
}
export interface ReplicationTaskAssessmentRunProgress {
  IndividualAssessmentCount?: number;
  IndividualAssessmentCompletedCount?: number;
}
export interface ReplicationTaskAssessmentRunResultStatistic {
  Passed?: number;
  Failed?: number;
  Error?: number;
  Warning?: number;
  Cancelled?: number;
  Skipped?: number;
}
export interface ReplicationTaskAssessmentRun {
  ReplicationTaskAssessmentRunArn?: string;
  ReplicationTaskArn?: string;
  Status?: string;
  ReplicationTaskAssessmentRunCreationDate?: Date;
  AssessmentProgress?: ReplicationTaskAssessmentRunProgress;
  LastFailureMessage?: string;
  ServiceAccessRoleArn?: string;
  ResultLocationBucket?: string;
  ResultLocationFolder?: string;
  ResultEncryptionMode?: string;
  ResultKmsKeyArn?: string;
  AssessmentRunName?: string;
  IsLatestTaskAssessmentRun?: boolean;
  ResultStatistic?: ReplicationTaskAssessmentRunResultStatistic;
}
export interface CancelReplicationTaskAssessmentRunResponse {
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}
export type MigrationTypeValue = "full-load" | "cdc" | "full-load-and-cdc" | (string & {});
export type Iso8601DateTime = Date;
export interface SourceDataSetting {
  CDCStartPosition?: string;
  CDCStartTime?: Date;
  CDCStopTime?: Date;
  SlotName?: string;
}
export type SourceDataSettings = SourceDataSetting[];
export type TablePreparationMode =
  | "do-nothing"
  | "truncate"
  | "drop-tables-on-target"
  | (string & {});
export interface TargetDataSetting {
  TablePreparationMode?: TablePreparationMode;
}
export type TargetDataSettings = TargetDataSetting[];
export type SecretString = string | redacted.Redacted<string>;
export interface CreateDataMigrationMessage {
  DataMigrationName?: string;
  MigrationProjectIdentifier: string;
  DataMigrationType: MigrationTypeValue;
  ServiceAccessRoleArn: string;
  EnableCloudwatchLogs?: boolean;
  SourceDataSettings?: SourceDataSetting[];
  TargetDataSettings?: TargetDataSetting[];
  NumberOfJobs?: number;
  Tags?: Tag[];
  SelectionRules?: string | redacted.Redacted<string>;
}
export interface DataMigrationSettings {
  NumberOfJobs?: number;
  CloudwatchLogsEnabled?: boolean;
  SelectionRules?: string | redacted.Redacted<string>;
}
export interface DataMigrationStatistics {
  TablesLoaded?: number;
  ElapsedTimeMillis?: number;
  TablesLoading?: number;
  FullLoadPercentage?: number;
  CDCLatency?: number;
  TablesQueued?: number;
  TablesErrored?: number;
  StartTime?: Date;
  StopTime?: Date;
}
export type PublicIpAddressList = string[];
export type DataMigrationCidrBlock = string[];
export interface DataMigration {
  DataMigrationName?: string;
  DataMigrationArn?: string;
  DataMigrationCreateTime?: Date;
  DataMigrationStartTime?: Date;
  DataMigrationEndTime?: Date;
  ServiceAccessRoleArn?: string;
  MigrationProjectArn?: string;
  DataMigrationType?: MigrationTypeValue;
  DataMigrationSettings?: DataMigrationSettings;
  SourceDataSettings?: SourceDataSetting[];
  TargetDataSettings?: TargetDataSetting[];
  DataMigrationStatistics?: DataMigrationStatistics;
  DataMigrationStatus?: string;
  PublicIpAddresses?: string[];
  DataMigrationCidrBlocks?: string[];
  LastFailureMessage?: string;
  StopReason?: string;
}
export interface CreateDataMigrationResponse {
  DataMigration?: DataMigration;
}
export interface RedshiftDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export type DmsSslModeValue = "none" | "require" | "verify-ca" | "verify-full" | (string & {});
export interface PostgreSqlDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export interface MySqlDataProviderSettings {
  ServerName?: string;
  Port?: number;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export interface OracleDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  AsmServer?: string;
  SecretsManagerOracleAsmSecretId?: string;
  SecretsManagerOracleAsmAccessRoleArn?: string;
  SecretsManagerSecurityDbEncryptionSecretId?: string;
  SecretsManagerSecurityDbEncryptionAccessRoleArn?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export interface SybaseAseDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  EncryptPassword?: boolean;
  CertificateArn?: string;
}
export interface MicrosoftSqlServerDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export interface DocDbDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
}
export interface MariaDbDataProviderSettings {
  ServerName?: string;
  Port?: number;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export interface IbmDb2LuwDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  EncryptionAlgorithm?: number;
  SecurityMechanism?: number;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export interface IbmDb2zOsDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  S3Path?: string;
  S3AccessRoleArn?: string;
}
export type AuthTypeValue = "no" | "password" | (string & {});
export type AuthMechanismValue = "default" | "mongodb_cr" | "scram_sha_1" | (string & {});
export interface MongoDbDataProviderSettings {
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  SslMode?: DmsSslModeValue;
  CertificateArn?: string;
  AuthType?: AuthTypeValue;
  AuthSource?: string;
  AuthMechanism?: AuthMechanismValue;
}
export type DataProviderSettings =
  | {
      RedshiftSettings: RedshiftDataProviderSettings;
      PostgreSqlSettings?: never;
      MySqlSettings?: never;
      OracleSettings?: never;
      SybaseAseSettings?: never;
      MicrosoftSqlServerSettings?: never;
      DocDbSettings?: never;
      MariaDbSettings?: never;
      IbmDb2LuwSettings?: never;
      IbmDb2zOsSettings?: never;
      MongoDbSettings?: never;
    }
  | {
      RedshiftSettings?: never;
      PostgreSqlSettings: PostgreSqlDataProviderSettings;
      MySqlSettings?: never;
      OracleSettings?: never;
      SybaseAseSettings?: never;
      MicrosoftSqlServerSettings?: never;
      DocDbSettings?: never;
      MariaDbSettings?: never;
      IbmDb2LuwSettings?: never;
      IbmDb2zOsSettings?: never;
      MongoDbSettings?: never;
    }
  | {
      RedshiftSettings?: never;
      PostgreSqlSettings?: never;
      MySqlSettings: MySqlDataProviderSettings;
      OracleSettings?: never;
      SybaseAseSettings?: never;
      MicrosoftSqlServerSettings?: never;
      DocDbSettings?: never;
      MariaDbSettings?: never;
      IbmDb2LuwSettings?: never;
      IbmDb2zOsSettings?: never;
      MongoDbSettings?: never;
    }
  | {
      RedshiftSettings?: never;
      PostgreSqlSettings?: never;
      MySqlSettings?: never;
      OracleSettings: OracleDataProviderSettings;
      SybaseAseSettings?: never;
      MicrosoftSqlServerSettings?: never;
      DocDbSettings?: never;
      MariaDbSettings?: never;
      IbmDb2LuwSettings?: never;
      IbmDb2zOsSettings?: never;
      MongoDbSettings?: never;
    }
  | {
      RedshiftSettings?: never;
      PostgreSqlSettings?: never;
      MySqlSettings?: never;
      OracleSettings?: never;
      SybaseAseSettings: SybaseAseDataProviderSettings;
      MicrosoftSqlServerSettings?: never;
      DocDbSettings?: never;
      MariaDbSettings?: never;
      IbmDb2LuwSettings?: never;
      IbmDb2zOsSettings?: never;
      MongoDbSettings?: never;
    }
  | {
      RedshiftSettings?: never;
      PostgreSqlSettings?: never;
      MySqlSettings?: never;
      OracleSettings?: never;
      SybaseAseSettings?: never;
      MicrosoftSqlServerSettings: MicrosoftSqlServerDataProviderSettings;
      DocDbSettings?: never;
      MariaDbSettings?: never;
      IbmDb2LuwSettings?: never;
      IbmDb2zOsSettings?: never;
      MongoDbSettings?: never;
    }
  | {
      RedshiftSettings?: never;
      PostgreSqlSettings?: never;
      MySqlSettings?: never;
      OracleSettings?: never;
      SybaseAseSettings?: never;
      MicrosoftSqlServerSettings?: never;
      DocDbSettings: DocDbDataProviderSettings;
      MariaDbSettings?: never;
      IbmDb2LuwSettings?: never;
      IbmDb2zOsSettings?: never;
      MongoDbSettings?: never;
    }
  | {
      RedshiftSettings?: never;
      PostgreSqlSettings?: never;
      MySqlSettings?: never;
      OracleSettings?: never;
      SybaseAseSettings?: never;
      MicrosoftSqlServerSettings?: never;
      DocDbSettings?: never;
      MariaDbSettings: MariaDbDataProviderSettings;
      IbmDb2LuwSettings?: never;
      IbmDb2zOsSettings?: never;
      MongoDbSettings?: never;
    }
  | {
      RedshiftSettings?: never;
      PostgreSqlSettings?: never;
      MySqlSettings?: never;
      OracleSettings?: never;
      SybaseAseSettings?: never;
      MicrosoftSqlServerSettings?: never;
      DocDbSettings?: never;
      MariaDbSettings?: never;
      IbmDb2LuwSettings: IbmDb2LuwDataProviderSettings;
      IbmDb2zOsSettings?: never;
      MongoDbSettings?: never;
    }
  | {
      RedshiftSettings?: never;
      PostgreSqlSettings?: never;
      MySqlSettings?: never;
      OracleSettings?: never;
      SybaseAseSettings?: never;
      MicrosoftSqlServerSettings?: never;
      DocDbSettings?: never;
      MariaDbSettings?: never;
      IbmDb2LuwSettings?: never;
      IbmDb2zOsSettings: IbmDb2zOsDataProviderSettings;
      MongoDbSettings?: never;
    }
  | {
      RedshiftSettings?: never;
      PostgreSqlSettings?: never;
      MySqlSettings?: never;
      OracleSettings?: never;
      SybaseAseSettings?: never;
      MicrosoftSqlServerSettings?: never;
      DocDbSettings?: never;
      MariaDbSettings?: never;
      IbmDb2LuwSettings?: never;
      IbmDb2zOsSettings?: never;
      MongoDbSettings: MongoDbDataProviderSettings;
    };
export interface CreateDataProviderMessage {
  DataProviderName?: string;
  Description?: string;
  Engine: string;
  Virtual?: boolean;
  Settings: DataProviderSettings;
  Tags?: Tag[];
}
export interface DataProvider {
  DataProviderName?: string;
  DataProviderArn?: string;
  DataProviderCreationTime?: Date;
  Description?: string;
  Engine?: string;
  Virtual?: boolean;
  Settings?: DataProviderSettings;
}
export interface CreateDataProviderResponse {
  DataProvider?: DataProvider;
}
export type ReplicationEndpointTypeValue = "source" | "target" | (string & {});
export interface DynamoDbSettings {
  ServiceAccessRoleArn: string;
}
export type CompressionTypeValue = "none" | "gzip" | (string & {});
export type EncryptionModeValue = "sse-s3" | "sse-kms" | (string & {});
export type DataFormatValue = "csv" | "parquet" | (string & {});
export type EncodingTypeValue = "plain" | "plain-dictionary" | "rle-dictionary" | (string & {});
export type ParquetVersionValue = "parquet-1-0" | "parquet-2-0" | (string & {});
export type DatePartitionSequenceValue =
  | "YYYYMMDD"
  | "YYYYMMDDHH"
  | "YYYYMM"
  | "MMYYYYDD"
  | "DDMMYYYY"
  | (string & {});
export type DatePartitionDelimiterValue = "SLASH" | "UNDERSCORE" | "DASH" | "NONE" | (string & {});
export type CannedAclForObjectsValue =
  | "none"
  | "private"
  | "public-read"
  | "public-read-write"
  | "authenticated-read"
  | "aws-exec-read"
  | "bucket-owner-read"
  | "bucket-owner-full-control"
  | (string & {});
export interface S3Settings {
  ServiceAccessRoleArn?: string;
  ExternalTableDefinition?: string;
  CsvRowDelimiter?: string;
  CsvDelimiter?: string;
  BucketFolder?: string;
  BucketName?: string;
  CompressionType?: CompressionTypeValue;
  EncryptionMode?: EncryptionModeValue;
  ServerSideEncryptionKmsKeyId?: string;
  DataFormat?: DataFormatValue;
  EncodingType?: EncodingTypeValue;
  DictPageSizeLimit?: number;
  RowGroupLength?: number;
  DataPageSize?: number;
  ParquetVersion?: ParquetVersionValue;
  EnableStatistics?: boolean;
  IncludeOpForFullLoad?: boolean;
  CdcInsertsOnly?: boolean;
  TimestampColumnName?: string;
  ParquetTimestampInMillisecond?: boolean;
  CdcInsertsAndUpdates?: boolean;
  DatePartitionEnabled?: boolean;
  DatePartitionSequence?: DatePartitionSequenceValue;
  DatePartitionDelimiter?: DatePartitionDelimiterValue;
  UseCsvNoSupValue?: boolean;
  CsvNoSupValue?: string;
  PreserveTransactions?: boolean;
  CdcPath?: string;
  UseTaskStartTimeForFullLoadTimestamp?: boolean;
  CannedAclForObjects?: CannedAclForObjectsValue;
  AddColumnName?: boolean;
  CdcMaxBatchInterval?: number;
  CdcMinFileSize?: number;
  CsvNullValue?: string;
  IgnoreHeaderRows?: number;
  MaxFileSize?: number;
  Rfc4180?: boolean;
  DatePartitionTimezone?: string;
  AddTrailingPaddingCharacter?: boolean;
  ExpectedBucketOwner?: string;
  GlueCatalogGeneration?: boolean;
}
export interface DmsTransferSettings {
  ServiceAccessRoleArn?: string;
  BucketName?: string;
}
export type NestingLevelValue = "none" | "one" | (string & {});
export interface MongoDbSettings {
  Username?: string;
  Password?: string | redacted.Redacted<string>;
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  AuthType?: AuthTypeValue;
  AuthMechanism?: AuthMechanismValue;
  NestingLevel?: NestingLevelValue;
  ExtractDocId?: string;
  DocsToInvestigate?: string;
  AuthSource?: string;
  KmsKeyId?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  UseUpdateLookUp?: boolean;
  ReplicateShardCollections?: boolean;
}
export type MessageFormatValue = "json" | "json-unformatted" | (string & {});
export interface KinesisSettings {
  StreamArn?: string;
  MessageFormat?: MessageFormatValue;
  ServiceAccessRoleArn?: string;
  IncludeTransactionDetails?: boolean;
  IncludePartitionValue?: boolean;
  PartitionIncludeSchemaTable?: boolean;
  IncludeTableAlterOperations?: boolean;
  IncludeControlDetails?: boolean;
  IncludeNullAndEmpty?: boolean;
  NoHexPrefix?: boolean;
  UseLargeIntegerValue?: boolean;
}
export type KafkaSecurityProtocol =
  | "plaintext"
  | "ssl-authentication"
  | "ssl-encryption"
  | "sasl-ssl"
  | (string & {});
export type KafkaSaslMechanism = "scram-sha-512" | "plain" | (string & {});
export type KafkaSslEndpointIdentificationAlgorithm = "none" | "https" | (string & {});
export interface KafkaSettings {
  Broker?: string;
  Topic?: string;
  MessageFormat?: MessageFormatValue;
  IncludeTransactionDetails?: boolean;
  IncludePartitionValue?: boolean;
  PartitionIncludeSchemaTable?: boolean;
  IncludeTableAlterOperations?: boolean;
  IncludeControlDetails?: boolean;
  MessageMaxBytes?: number;
  IncludeNullAndEmpty?: boolean;
  SecurityProtocol?: KafkaSecurityProtocol;
  SslClientCertificateArn?: string;
  SslClientKeyArn?: string;
  SslClientKeyPassword?: string | redacted.Redacted<string>;
  SslCaCertificateArn?: string;
  SaslUsername?: string;
  SaslPassword?: string | redacted.Redacted<string>;
  NoHexPrefix?: boolean;
  SaslMechanism?: KafkaSaslMechanism;
  SslEndpointIdentificationAlgorithm?: KafkaSslEndpointIdentificationAlgorithm;
  UseLargeIntegerValue?: boolean;
}
export interface ElasticsearchSettings {
  ServiceAccessRoleArn: string;
  EndpointUri: string;
  FullLoadErrorPercentage?: number;
  ErrorRetryDuration?: number;
  UseNewMappingType?: boolean;
}
export interface NeptuneSettings {
  ServiceAccessRoleArn?: string;
  S3BucketName: string;
  S3BucketFolder: string;
  ErrorRetryDuration?: number;
  MaxFileSize?: number;
  MaxRetryCount?: number;
  IamAuthEnabled?: boolean;
}
export interface RedshiftSettings {
  AcceptAnyDate?: boolean;
  AfterConnectScript?: string;
  BucketFolder?: string;
  BucketName?: string;
  CaseSensitiveNames?: boolean;
  CompUpdate?: boolean;
  ConnectionTimeout?: number;
  DatabaseName?: string;
  DateFormat?: string;
  EmptyAsNull?: boolean;
  EncryptionMode?: EncryptionModeValue;
  ExplicitIds?: boolean;
  FileTransferUploadStreams?: number;
  LoadTimeout?: number;
  MaxFileSize?: number;
  Password?: string | redacted.Redacted<string>;
  Port?: number;
  RemoveQuotes?: boolean;
  ReplaceInvalidChars?: string;
  ReplaceChars?: string;
  ServerName?: string;
  ServiceAccessRoleArn?: string;
  ServerSideEncryptionKmsKeyId?: string;
  TimeFormat?: string;
  TrimBlanks?: boolean;
  TruncateColumns?: boolean;
  Username?: string;
  WriteBufferSize?: number;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  MapBooleanAsBoolean?: boolean;
}
export type PluginNameValue = "no-preference" | "test-decoding" | "pglogical" | (string & {});
export type LongVarcharMappingType = "wstring" | "clob" | "nclob" | (string & {});
export type DatabaseMode = "default" | "babelfish" | (string & {});
export type PostgreSQLAuthenticationMethod = "password" | "iam" | (string & {});
export interface PostgreSQLSettings {
  AfterConnectScript?: string;
  CaptureDdls?: boolean;
  MaxFileSize?: number;
  DatabaseName?: string;
  DdlArtifactsSchema?: string;
  ExecuteTimeout?: number;
  FailTasksOnLobTruncation?: boolean;
  HeartbeatEnable?: boolean;
  HeartbeatSchema?: string;
  HeartbeatFrequency?: number;
  Password?: string | redacted.Redacted<string>;
  Port?: number;
  ServerName?: string;
  Username?: string;
  SlotName?: string;
  PluginName?: PluginNameValue;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  TrimSpaceInChar?: boolean;
  MapBooleanAsBoolean?: boolean;
  MapJsonbAsClob?: boolean;
  MapLongVarcharAs?: LongVarcharMappingType;
  DatabaseMode?: DatabaseMode;
  BabelfishDatabaseName?: string;
  DisableUnicodeSourceFilter?: boolean;
  ServiceAccessRoleArn?: string;
  AuthenticationMethod?: PostgreSQLAuthenticationMethod;
}
export type TargetDbType = "specific-database" | "multiple-databases" | (string & {});
export type MySQLAuthenticationMethod = "password" | "iam" | (string & {});
export interface MySQLSettings {
  AfterConnectScript?: string;
  CleanSourceMetadataOnMismatch?: boolean;
  DatabaseName?: string;
  EventsPollInterval?: number;
  TargetDbType?: TargetDbType;
  MaxFileSize?: number;
  ParallelLoadThreads?: number;
  Password?: string | redacted.Redacted<string>;
  Port?: number;
  ServerName?: string;
  ServerTimezone?: string;
  Username?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  ExecuteTimeout?: number;
  ServiceAccessRoleArn?: string;
  AuthenticationMethod?: MySQLAuthenticationMethod;
}
export type IntegerList = number[];
export type CharLengthSemantics = "default" | "char" | "byte" | (string & {});
export type OracleAuthenticationMethod = "password" | "kerberos" | (string & {});
export interface OracleSettings {
  AddSupplementalLogging?: boolean;
  ArchivedLogDestId?: number;
  AdditionalArchivedLogDestId?: number;
  ExtraArchivedLogDestIds?: number[];
  AllowSelectNestedTables?: boolean;
  ParallelAsmReadThreads?: number;
  ReadAheadBlocks?: number;
  AccessAlternateDirectly?: boolean;
  UseAlternateFolderForOnline?: boolean;
  OraclePathPrefix?: string;
  UsePathPrefix?: string;
  ReplacePathPrefix?: boolean;
  EnableHomogenousTablespace?: boolean;
  DirectPathNoLog?: boolean;
  ArchivedLogsOnly?: boolean;
  AsmPassword?: string | redacted.Redacted<string>;
  AsmServer?: string;
  AsmUser?: string;
  CharLengthSemantics?: CharLengthSemantics;
  DatabaseName?: string;
  DirectPathParallelLoad?: boolean;
  FailTasksOnLobTruncation?: boolean;
  NumberDatatypeScale?: number;
  Password?: string | redacted.Redacted<string>;
  Port?: number;
  ReadTableSpaceName?: boolean;
  RetryInterval?: number;
  SecurityDbEncryption?: string | redacted.Redacted<string>;
  SecurityDbEncryptionName?: string;
  ServerName?: string;
  SpatialDataOptionToGeoJsonFunctionName?: string;
  StandbyDelayTime?: number;
  Username?: string;
  UseBFile?: boolean;
  UseDirectPathFullLoad?: boolean;
  UseLogminerReader?: boolean;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  SecretsManagerOracleAsmAccessRoleArn?: string;
  SecretsManagerOracleAsmSecretId?: string;
  TrimSpaceInChar?: boolean;
  ConvertTimestampWithZoneToUTC?: boolean;
  OpenTransactionWindow?: number;
  AuthenticationMethod?: OracleAuthenticationMethod;
}
export interface SybaseSettings {
  DatabaseName?: string;
  Password?: string | redacted.Redacted<string>;
  Port?: number;
  ServerName?: string;
  Username?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
}
export type SafeguardPolicy =
  | "rely-on-sql-server-replication-agent"
  | "exclusive-automatic-truncation"
  | "shared-automatic-truncation"
  | (string & {});
export type TlogAccessMode =
  | "BackupOnly"
  | "PreferBackup"
  | "PreferTlog"
  | "TlogOnly"
  | (string & {});
export type SqlServerAuthenticationMethod = "password" | "kerberos" | (string & {});
export interface MicrosoftSQLServerSettings {
  Port?: number;
  BcpPacketSize?: number;
  DatabaseName?: string;
  ControlTablesFileGroup?: string;
  Password?: string | redacted.Redacted<string>;
  QuerySingleAlwaysOnNode?: boolean;
  ReadBackupOnly?: boolean;
  SafeguardPolicy?: SafeguardPolicy;
  ServerName?: string;
  Username?: string;
  UseBcpFullLoad?: boolean;
  UseThirdPartyBackupDevice?: boolean;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  TrimSpaceInChar?: boolean;
  TlogAccessMode?: TlogAccessMode;
  ForceLobLookup?: boolean;
  AuthenticationMethod?: SqlServerAuthenticationMethod;
}
export interface IBMDb2Settings {
  DatabaseName?: string;
  Password?: string | redacted.Redacted<string>;
  Port?: number;
  ServerName?: string;
  SetDataCaptureChanges?: boolean;
  CurrentLsn?: string;
  MaxKBytesPerRead?: number;
  Username?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  LoadTimeout?: number;
  WriteBufferSize?: number;
  MaxFileSize?: number;
  KeepCsvFiles?: boolean;
}
export interface DocDbSettings {
  Username?: string;
  Password?: string | redacted.Redacted<string>;
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  NestingLevel?: NestingLevelValue;
  ExtractDocId?: boolean;
  DocsToInvestigate?: number;
  KmsKeyId?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  UseUpdateLookUp?: boolean;
  ReplicateShardCollections?: boolean;
}
export type SslSecurityProtocolValue = "plaintext" | "ssl-encryption" | (string & {});
export type RedisAuthTypeValue = "none" | "auth-role" | "auth-token" | (string & {});
export interface RedisSettings {
  ServerName: string;
  Port: number;
  SslSecurityProtocol?: SslSecurityProtocolValue;
  AuthType?: RedisAuthTypeValue;
  AuthUserName?: string;
  AuthPassword?: string | redacted.Redacted<string>;
  SslCaCertificateArn?: string;
}
export interface GcpMySQLSettings {
  AfterConnectScript?: string;
  CleanSourceMetadataOnMismatch?: boolean;
  DatabaseName?: string;
  EventsPollInterval?: number;
  TargetDbType?: TargetDbType;
  MaxFileSize?: number;
  ParallelLoadThreads?: number;
  Password?: string | redacted.Redacted<string>;
  Port?: number;
  ServerName?: string;
  ServerTimezone?: string;
  Username?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
}
export interface TimestreamSettings {
  DatabaseName: string;
  MemoryDuration: number;
  MagneticDuration: number;
  CdcInsertsAndUpdates?: boolean;
  EnableMagneticStoreWrites?: boolean;
}
export interface CreateEndpointMessage {
  EndpointIdentifier: string;
  EndpointType: ReplicationEndpointTypeValue;
  EngineName: string;
  Username?: string;
  Password?: string | redacted.Redacted<string>;
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  ExtraConnectionAttributes?: string;
  KmsKeyId?: string;
  Tags?: Tag[];
  CertificateArn?: string;
  SslMode?: DmsSslModeValue;
  ServiceAccessRoleArn?: string;
  ExternalTableDefinition?: string;
  DynamoDbSettings?: DynamoDbSettings;
  S3Settings?: S3Settings;
  DmsTransferSettings?: DmsTransferSettings;
  MongoDbSettings?: MongoDbSettings;
  KinesisSettings?: KinesisSettings;
  KafkaSettings?: KafkaSettings;
  ElasticsearchSettings?: ElasticsearchSettings;
  NeptuneSettings?: NeptuneSettings;
  RedshiftSettings?: RedshiftSettings;
  PostgreSQLSettings?: PostgreSQLSettings;
  MySQLSettings?: MySQLSettings;
  OracleSettings?: OracleSettings;
  SybaseSettings?: SybaseSettings;
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;
  IBMDb2Settings?: IBMDb2Settings;
  ResourceIdentifier?: string;
  DocDbSettings?: DocDbSettings;
  RedisSettings?: RedisSettings;
  GcpMySQLSettings?: GcpMySQLSettings;
  TimestreamSettings?: TimestreamSettings;
}
export interface LakehouseSettings {
  Arn: string;
}
export interface Endpoint {
  EndpointIdentifier?: string;
  EndpointType?: ReplicationEndpointTypeValue;
  EngineName?: string;
  EngineDisplayName?: string;
  Username?: string;
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  ExtraConnectionAttributes?: string;
  Status?: string;
  KmsKeyId?: string;
  EndpointArn?: string;
  CertificateArn?: string;
  SslMode?: DmsSslModeValue;
  ServiceAccessRoleArn?: string;
  ExternalTableDefinition?: string;
  ExternalId?: string;
  IsReadOnly?: boolean;
  DynamoDbSettings?: DynamoDbSettings;
  S3Settings?: S3Settings;
  DmsTransferSettings?: DmsTransferSettings;
  MongoDbSettings?: MongoDbSettings;
  KinesisSettings?: KinesisSettings;
  KafkaSettings?: KafkaSettings;
  ElasticsearchSettings?: ElasticsearchSettings;
  NeptuneSettings?: NeptuneSettings;
  RedshiftSettings?: RedshiftSettings;
  PostgreSQLSettings?: PostgreSQLSettings;
  MySQLSettings?: MySQLSettings;
  OracleSettings?: OracleSettings;
  SybaseSettings?: SybaseSettings;
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;
  IBMDb2Settings?: IBMDb2Settings;
  DocDbSettings?: DocDbSettings;
  RedisSettings?: RedisSettings;
  GcpMySQLSettings?: GcpMySQLSettings;
  TimestreamSettings?: TimestreamSettings;
  LakehouseSettings?: LakehouseSettings;
}
const Endpoint = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<Endpoint>;
export interface CreateEndpointResponse {
  Endpoint?: Endpoint;
}
export type EventCategoriesList = string[];
export type SourceIdsList = string[];
export interface CreateEventSubscriptionMessage {
  SubscriptionName: string;
  SnsTopicArn: string;
  SourceType?: string;
  EventCategories?: string[];
  SourceIds?: string[];
  Enabled?: boolean;
  Tags?: Tag[];
}
export interface EventSubscription {
  CustomerAwsId?: string;
  CustSubscriptionId?: string;
  SnsTopicArn?: string;
  Status?: string;
  SubscriptionCreationTime?: string;
  SourceType?: string;
  SourceIdsList?: string[];
  EventCategoriesList?: string[];
  Enabled?: boolean;
}
export interface CreateEventSubscriptionResponse {
  EventSubscription?: EventSubscription;
}
export interface CreateFleetAdvisorCollectorRequest {
  CollectorName: string;
  Description?: string;
  ServiceAccessRoleArn: string;
  S3BucketName: string;
}
export interface CreateFleetAdvisorCollectorResponse {
  CollectorReferencedId?: string;
  CollectorName?: string;
  Description?: string;
  ServiceAccessRoleArn?: string;
  S3BucketName?: string;
}
export type StringList = string[];
export interface CreateInstanceProfileMessage {
  AvailabilityZone?: string;
  KmsKeyArn?: string;
  PubliclyAccessible?: boolean;
  Tags?: Tag[];
  NetworkType?: string;
  InstanceProfileName?: string;
  Description?: string;
  SubnetGroupIdentifier?: string;
  VpcSecurityGroups?: string[];
}
export interface InstanceProfile {
  InstanceProfileArn?: string;
  AvailabilityZone?: string;
  KmsKeyArn?: string;
  PubliclyAccessible?: boolean;
  NetworkType?: string;
  InstanceProfileName?: string;
  Description?: string;
  InstanceProfileCreationTime?: Date;
  SubnetGroupIdentifier?: string;
  VpcSecurityGroups?: string[];
}
export interface CreateInstanceProfileResponse {
  InstanceProfile?: InstanceProfile;
}
export interface DataProviderDescriptorDefinition {
  DataProviderIdentifier: string;
  SecretsManagerSecretId?: string;
  SecretsManagerAccessRoleArn?: string;
}
export type DataProviderDescriptorDefinitionList = DataProviderDescriptorDefinition[];
export interface SCApplicationAttributes {
  S3BucketPath?: string;
  S3BucketRoleArn?: string;
}
export interface CreateMigrationProjectMessage {
  MigrationProjectName?: string;
  SourceDataProviderDescriptors: DataProviderDescriptorDefinition[];
  TargetDataProviderDescriptors: DataProviderDescriptorDefinition[];
  InstanceProfileIdentifier: string;
  TransformationRules?: string;
  Description?: string;
  Tags?: Tag[];
  SchemaConversionApplicationAttributes?: SCApplicationAttributes;
}
export interface DataProviderDescriptor {
  SecretsManagerSecretId?: string;
  SecretsManagerAccessRoleArn?: string;
  DataProviderName?: string;
  DataProviderArn?: string;
}
export type DataProviderDescriptorList = DataProviderDescriptor[];
export interface MigrationProject {
  MigrationProjectName?: string;
  MigrationProjectArn?: string;
  MigrationProjectCreationTime?: Date;
  SourceDataProviderDescriptors?: DataProviderDescriptor[];
  TargetDataProviderDescriptors?: DataProviderDescriptor[];
  InstanceProfileArn?: string;
  InstanceProfileName?: string;
  TransformationRules?: string;
  Description?: string;
  SchemaConversionApplicationAttributes?: SCApplicationAttributes;
}
export interface CreateMigrationProjectResponse {
  MigrationProject?: MigrationProject;
}
export interface ComputeConfig {
  AvailabilityZone?: string;
  DnsNameServers?: string;
  KmsKeyId?: string;
  MaxCapacityUnits?: number;
  MinCapacityUnits?: number;
  MultiAZ?: boolean;
  PreferredMaintenanceWindow?: string;
  ReplicationSubnetGroupId?: string;
  VpcSecurityGroupIds?: string[];
}
export interface CreateReplicationConfigMessage {
  ReplicationConfigIdentifier: string;
  SourceEndpointArn: string;
  TargetEndpointArn: string;
  ComputeConfig: ComputeConfig;
  ReplicationType: MigrationTypeValue;
  TableMappings: string;
  ReplicationSettings?: string;
  SupplementalSettings?: string;
  ResourceIdentifier?: string;
  Tags?: Tag[];
}
export interface ReplicationConfig {
  ReplicationConfigIdentifier?: string;
  ReplicationConfigArn?: string;
  SourceEndpointArn?: string;
  TargetEndpointArn?: string;
  ReplicationType?: MigrationTypeValue;
  ComputeConfig?: ComputeConfig;
  ReplicationSettings?: string;
  SupplementalSettings?: string;
  TableMappings?: string;
  ReplicationConfigCreateTime?: Date;
  ReplicationConfigUpdateTime?: Date;
  IsReadOnly?: boolean;
}
export interface CreateReplicationConfigResponse {
  ReplicationConfig?: ReplicationConfig;
}
export type ReplicationInstanceClass = string;
export type VpcSecurityGroupIdList = string[];
export interface KerberosAuthenticationSettings {
  KeyCacheSecretId?: string;
  KeyCacheSecretIamArn?: string;
  Krb5FileContents?: string;
}
export interface CreateReplicationInstanceMessage {
  ReplicationInstanceIdentifier: string;
  AllocatedStorage?: number;
  ReplicationInstanceClass: string;
  VpcSecurityGroupIds?: string[];
  AvailabilityZone?: string;
  ReplicationSubnetGroupIdentifier?: string;
  PreferredMaintenanceWindow?: string;
  MultiAZ?: boolean;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  Tags?: Tag[];
  KmsKeyId?: string;
  PubliclyAccessible?: boolean;
  DnsNameServers?: string;
  ResourceIdentifier?: string;
  NetworkType?: string;
  KerberosAuthenticationSettings?: KerberosAuthenticationSettings;
}
export interface VpcSecurityGroupMembership {
  VpcSecurityGroupId?: string;
  Status?: string;
}
export type VpcSecurityGroupMembershipList = VpcSecurityGroupMembership[];
export interface AvailabilityZone {
  Name?: string;
}
export interface Subnet {
  SubnetIdentifier?: string;
  SubnetAvailabilityZone?: AvailabilityZone;
  SubnetStatus?: string;
}
export type SubnetList = Subnet[];
export interface ReplicationSubnetGroup {
  ReplicationSubnetGroupIdentifier?: string;
  ReplicationSubnetGroupDescription?: string;
  VpcId?: string;
  SubnetGroupStatus?: string;
  Subnets?: Subnet[];
  SupportedNetworkTypes?: string[];
  IsReadOnly?: boolean;
}
export interface ReplicationPendingModifiedValues {
  ReplicationInstanceClass?: string;
  AllocatedStorage?: number;
  MultiAZ?: boolean;
  EngineVersion?: string;
  NetworkType?: string;
}
export type ReplicationInstancePublicIpAddressList = string[];
export type ReplicationInstancePrivateIpAddressList = string[];
export type ReplicationInstanceIpv6AddressList = string[];
export interface ReplicationInstance {
  ReplicationInstanceIdentifier?: string;
  ReplicationInstanceClass?: string;
  ReplicationInstanceStatus?: string;
  AllocatedStorage?: number;
  InstanceCreateTime?: Date;
  VpcSecurityGroups?: VpcSecurityGroupMembership[];
  AvailabilityZone?: string;
  ReplicationSubnetGroup?: ReplicationSubnetGroup;
  PreferredMaintenanceWindow?: string;
  PendingModifiedValues?: ReplicationPendingModifiedValues;
  MultiAZ?: boolean;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  KmsKeyId?: string;
  ReplicationInstanceArn?: string;
  ReplicationInstancePublicIpAddress?: string;
  ReplicationInstancePrivateIpAddress?: string;
  ReplicationInstancePublicIpAddresses?: string[];
  ReplicationInstancePrivateIpAddresses?: string[];
  ReplicationInstanceIpv6Addresses?: string[];
  PubliclyAccessible?: boolean;
  SecondaryAvailabilityZone?: string;
  FreeUntil?: Date;
  DnsNameServers?: string;
  NetworkType?: string;
  KerberosAuthenticationSettings?: KerberosAuthenticationSettings;
}
export interface CreateReplicationInstanceResponse {
  ReplicationInstance?: ReplicationInstance;
}
export type SubnetIdentifierList = string[];
export interface CreateReplicationSubnetGroupMessage {
  ReplicationSubnetGroupIdentifier: string;
  ReplicationSubnetGroupDescription: string;
  SubnetIds: string[];
  Tags?: Tag[];
}
export interface CreateReplicationSubnetGroupResponse {
  ReplicationSubnetGroup?: ReplicationSubnetGroup;
}
export interface CreateReplicationTaskMessage {
  ReplicationTaskIdentifier: string;
  SourceEndpointArn: string;
  TargetEndpointArn: string;
  ReplicationInstanceArn: string;
  MigrationType: MigrationTypeValue;
  TableMappings: string;
  ReplicationTaskSettings?: string;
  CdcStartTime?: Date;
  CdcStartPosition?: string;
  CdcStopPosition?: string;
  Tags?: Tag[];
  TaskData?: string;
  ResourceIdentifier?: string;
}
export interface ReplicationTaskStats {
  FullLoadProgressPercent?: number;
  ElapsedTimeMillis?: number;
  TablesLoaded?: number;
  TablesLoading?: number;
  TablesQueued?: number;
  TablesErrored?: number;
  FreshStartDate?: Date;
  StartDate?: Date;
  StopDate?: Date;
  FullLoadStartDate?: Date;
  FullLoadFinishDate?: Date;
}
export interface ReplicationTask {
  ReplicationTaskIdentifier?: string;
  SourceEndpointArn?: string;
  TargetEndpointArn?: string;
  ReplicationInstanceArn?: string;
  MigrationType?: MigrationTypeValue;
  TableMappings?: string;
  ReplicationTaskSettings?: string;
  Status?: string;
  LastFailureMessage?: string;
  StopReason?: string;
  ReplicationTaskCreationDate?: Date;
  ReplicationTaskStartDate?: Date;
  CdcStartPosition?: string;
  CdcStopPosition?: string;
  RecoveryCheckpoint?: string;
  ReplicationTaskArn?: string;
  ReplicationTaskStats?: ReplicationTaskStats;
  TaskData?: string;
  TargetReplicationInstanceArn?: string;
}
export interface CreateReplicationTaskResponse {
  ReplicationTask?: ReplicationTask;
}
export interface DeleteCertificateMessage {
  CertificateArn: string;
}
export type CertificateWallet = Uint8Array;
export interface Certificate {
  CertificateIdentifier?: string;
  CertificateCreationDate?: Date;
  CertificatePem?: string;
  CertificateWallet?: Uint8Array;
  CertificateArn?: string;
  CertificateOwner?: string;
  ValidFromDate?: Date;
  ValidToDate?: Date;
  SigningAlgorithm?: string;
  KeyLength?: number;
  KmsKeyId?: string;
}
export interface DeleteCertificateResponse {
  Certificate?: Certificate;
}
export interface DeleteConnectionMessage {
  EndpointArn: string;
  ReplicationInstanceArn: string;
}
export interface Connection {
  ReplicationInstanceArn?: string;
  EndpointArn?: string;
  Status?: string;
  LastFailureMessage?: string;
  EndpointIdentifier?: string;
  ReplicationInstanceIdentifier?: string;
}
export interface DeleteConnectionResponse {
  Connection?: Connection;
}
export interface DeleteDataMigrationMessage {
  DataMigrationIdentifier: string;
}
export interface DeleteDataMigrationResponse {
  DataMigration?: DataMigration;
}
export interface DeleteDataProviderMessage {
  DataProviderIdentifier: string;
}
export interface DeleteDataProviderResponse {
  DataProvider?: DataProvider;
}
export interface DeleteEndpointMessage {
  EndpointArn: string;
}
export interface DeleteEndpointResponse {
  Endpoint?: Endpoint;
}
export interface DeleteEventSubscriptionMessage {
  SubscriptionName: string;
}
export interface DeleteEventSubscriptionResponse {
  EventSubscription?: EventSubscription;
}
export interface DeleteCollectorRequest {
  CollectorReferencedId: string;
}
export interface DeleteFleetAdvisorCollectorResponse {}
export interface DeleteFleetAdvisorDatabasesRequest {
  DatabaseIds: string[];
}
export interface DeleteFleetAdvisorDatabasesResponse {
  DatabaseIds?: string[];
}
export interface DeleteInstanceProfileMessage {
  InstanceProfileIdentifier: string;
}
export interface DeleteInstanceProfileResponse {
  InstanceProfile?: InstanceProfile;
}
export interface DeleteMigrationProjectMessage {
  MigrationProjectIdentifier: string;
}
export interface DeleteMigrationProjectResponse {
  MigrationProject?: MigrationProject;
}
export interface DeleteReplicationConfigMessage {
  ReplicationConfigArn: string;
}
export interface DeleteReplicationConfigResponse {
  ReplicationConfig?: ReplicationConfig;
}
export interface DeleteReplicationInstanceMessage {
  ReplicationInstanceArn: string;
}
export interface DeleteReplicationInstanceResponse {
  ReplicationInstance?: ReplicationInstance;
}
export interface DeleteReplicationSubnetGroupMessage {
  ReplicationSubnetGroupIdentifier: string;
}
export interface DeleteReplicationSubnetGroupResponse {}
export interface DeleteReplicationTaskMessage {
  ReplicationTaskArn: string;
}
export interface DeleteReplicationTaskResponse {
  ReplicationTask?: ReplicationTask;
}
export interface DeleteReplicationTaskAssessmentRunMessage {
  ReplicationTaskAssessmentRunArn: string;
}
export interface DeleteReplicationTaskAssessmentRunResponse {
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}
export interface DescribeAccountAttributesMessage {}
export interface AccountQuota {
  AccountQuotaName?: string;
  Used?: number;
  Max?: number;
}
export type AccountQuotaList = AccountQuota[];
export interface DescribeAccountAttributesResponse {
  AccountQuotas?: AccountQuota[];
  UniqueAccountIdentifier?: string;
}
export interface DescribeApplicableIndividualAssessmentsMessage {
  ReplicationTaskArn?: string;
  ReplicationInstanceArn?: string;
  ReplicationConfigArn?: string;
  SourceEngineName?: string;
  TargetEngineName?: string;
  MigrationType?: MigrationTypeValue;
  MaxRecords?: number;
  Marker?: string;
}
export type IndividualAssessmentNameList = string[];
export interface DescribeApplicableIndividualAssessmentsResponse {
  IndividualAssessmentNames?: string[];
  Marker?: string;
}
export type FilterValueList = string[];
export interface Filter {
  Name: string;
  Values: string[];
}
export type FilterList = Filter[];
export interface DescribeCertificatesMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export type CertificateList = Certificate[];
export interface DescribeCertificatesResponse {
  Marker?: string;
  Certificates?: Certificate[];
}
export interface DescribeConnectionsMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export type ConnectionList = Connection[];
export interface DescribeConnectionsResponse {
  Marker?: string;
  Connections?: Connection[];
}
export interface DescribeConversionConfigurationMessage {
  MigrationProjectIdentifier: string;
}
export interface DescribeConversionConfigurationResponse {
  MigrationProjectIdentifier?: string;
  ConversionConfiguration?: string;
}
export type Marker = string;
export interface DescribeDataMigrationsMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
  WithoutSettings?: boolean;
  WithoutStatistics?: boolean;
}
export type DataMigrations = DataMigration[];
export interface DescribeDataMigrationsResponse {
  DataMigrations?: DataMigration[];
  Marker?: string;
}
export interface DescribeDataProvidersMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export type DataProviderList = DataProvider[];
export interface DescribeDataProvidersResponse {
  Marker?: string;
  DataProviders?: DataProvider[];
}
export interface DescribeEndpointsMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export type EndpointList = Endpoint[];
export interface DescribeEndpointsResponse {
  Marker?: string;
  Endpoints?: Endpoint[];
}
export interface DescribeEndpointSettingsMessage {
  EngineName: string;
  MaxRecords?: number;
  Marker?: string;
}
export type EndpointSettingTypeValue = "string" | "boolean" | "integer" | "enum" | (string & {});
export type EndpointSettingEnumValues = string[];
export interface EndpointSetting {
  Name?: string;
  Type?: EndpointSettingTypeValue;
  EnumValues?: string[];
  Sensitive?: boolean;
  Units?: string;
  Applicability?: string;
  IntValueMin?: number;
  IntValueMax?: number;
  DefaultValue?: string;
}
export type EndpointSettingsList = EndpointSetting[];
export interface DescribeEndpointSettingsResponse {
  Marker?: string;
  EndpointSettings?: EndpointSetting[];
}
export interface DescribeEndpointTypesMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export interface SupportedEndpointType {
  EngineName?: string;
  SupportsCDC?: boolean;
  EndpointType?: ReplicationEndpointTypeValue;
  ReplicationInstanceEngineMinimumVersion?: string;
  EngineDisplayName?: string;
}
export type SupportedEndpointTypeList = SupportedEndpointType[];
export interface DescribeEndpointTypesResponse {
  Marker?: string;
  SupportedEndpointTypes?: SupportedEndpointType[];
}
export interface DescribeEngineVersionsMessage {
  MaxRecords?: number;
  Marker?: string;
}
export type ReleaseStatusValues = "beta" | "prod" | (string & {});
export type AvailableUpgradesList = string[];
export interface EngineVersion {
  Version?: string;
  Lifecycle?: string;
  ReleaseStatus?: ReleaseStatusValues;
  LaunchDate?: Date;
  AutoUpgradeDate?: Date;
  DeprecationDate?: Date;
  ForceUpgradeDate?: Date;
  AvailableUpgrades?: string[];
}
export type EngineVersionList = EngineVersion[];
export interface DescribeEngineVersionsResponse {
  EngineVersions?: EngineVersion[];
  Marker?: string;
}
export interface DescribeEventCategoriesMessage {
  SourceType?: string;
  Filters?: Filter[];
}
export interface EventCategoryGroup {
  SourceType?: string;
  EventCategories?: string[];
}
export type EventCategoryGroupList = EventCategoryGroup[];
export interface DescribeEventCategoriesResponse {
  EventCategoryGroupList?: EventCategoryGroup[];
}
export type SourceType = "replication-instance" | (string & {});
export interface DescribeEventsMessage {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  StartTime?: Date;
  EndTime?: Date;
  Duration?: number;
  EventCategories?: string[];
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export interface Event {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  Message?: string;
  EventCategories?: string[];
  Date?: Date;
}
export type EventList = Event[];
export interface DescribeEventsResponse {
  Marker?: string;
  Events?: Event[];
}
export interface DescribeEventSubscriptionsMessage {
  SubscriptionName?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export type EventSubscriptionsList = EventSubscription[];
export interface DescribeEventSubscriptionsResponse {
  Marker?: string;
  EventSubscriptionsList?: EventSubscription[];
}
export interface DescribeExtensionPackAssociationsMessage {
  MigrationProjectIdentifier: string;
  Filters?: Filter[];
  Marker?: string;
  MaxRecords?: number;
}
export type SchemaConversionRequestList = SchemaConversionRequest[];
export interface DescribeExtensionPackAssociationsResponse {
  Marker?: string;
  Requests?: SchemaConversionRequest[];
}
export interface DescribeFleetAdvisorCollectorsRequest {
  Filters?: Filter[];
  MaxRecords?: number;
  NextToken?: string;
}
export type VersionStatus = "UP_TO_DATE" | "OUTDATED" | "UNSUPPORTED" | (string & {});
export type CollectorStatus = "UNREGISTERED" | "ACTIVE" | (string & {});
export interface CollectorHealthCheck {
  CollectorStatus?: CollectorStatus;
  LocalCollectorS3Access?: boolean;
  WebCollectorS3Access?: boolean;
  WebCollectorGrantedRoleBasedAccess?: boolean;
}
export interface InventoryData {
  NumberOfDatabases?: number;
  NumberOfSchemas?: number;
}
export interface CollectorResponse {
  CollectorReferencedId?: string;
  CollectorName?: string;
  CollectorVersion?: string;
  VersionStatus?: VersionStatus;
  Description?: string;
  S3BucketName?: string;
  ServiceAccessRoleArn?: string;
  CollectorHealthCheck?: CollectorHealthCheck;
  LastDataReceived?: string;
  RegisteredDate?: string;
  CreatedDate?: string;
  ModifiedDate?: string;
  InventoryData?: InventoryData;
}
export type CollectorResponses = CollectorResponse[];
export interface DescribeFleetAdvisorCollectorsResponse {
  Collectors?: CollectorResponse[];
  NextToken?: string;
}
export interface DescribeFleetAdvisorDatabasesRequest {
  Filters?: Filter[];
  MaxRecords?: number;
  NextToken?: string;
}
export interface ServerShortInfoResponse {
  ServerId?: string;
  IpAddress?: string;
  ServerName?: string;
}
export interface DatabaseInstanceSoftwareDetailsResponse {
  Engine?: string;
  EngineVersion?: string;
  EngineEdition?: string;
  ServicePack?: string;
  SupportLevel?: string;
  OsArchitecture?: number;
  Tooltip?: string;
}
export interface CollectorShortInfoResponse {
  CollectorReferencedId?: string;
  CollectorName?: string;
}
export type CollectorsList = CollectorShortInfoResponse[];
export interface DatabaseResponse {
  DatabaseId?: string;
  DatabaseName?: string;
  IpAddress?: string;
  NumberOfSchemas?: number;
  Server?: ServerShortInfoResponse;
  SoftwareDetails?: DatabaseInstanceSoftwareDetailsResponse;
  Collectors?: CollectorShortInfoResponse[];
}
export type DatabaseList = DatabaseResponse[];
export interface DescribeFleetAdvisorDatabasesResponse {
  Databases?: DatabaseResponse[];
  NextToken?: string;
}
export interface DescribeFleetAdvisorLsaAnalysisRequest {
  MaxRecords?: number;
  NextToken?: string;
}
export interface FleetAdvisorLsaAnalysisResponse {
  LsaAnalysisId?: string;
  Status?: string;
}
export type FleetAdvisorLsaAnalysisResponseList = FleetAdvisorLsaAnalysisResponse[];
export interface DescribeFleetAdvisorLsaAnalysisResponse {
  Analysis?: FleetAdvisorLsaAnalysisResponse[];
  NextToken?: string;
}
export interface DescribeFleetAdvisorSchemaObjectSummaryRequest {
  Filters?: Filter[];
  MaxRecords?: number;
  NextToken?: string;
}
export interface FleetAdvisorSchemaObjectResponse {
  SchemaId?: string;
  ObjectType?: string;
  NumberOfObjects?: number;
  CodeLineCount?: number;
  CodeSize?: number;
}
export type FleetAdvisorSchemaObjectList = FleetAdvisorSchemaObjectResponse[];
export interface DescribeFleetAdvisorSchemaObjectSummaryResponse {
  FleetAdvisorSchemaObjects?: FleetAdvisorSchemaObjectResponse[];
  NextToken?: string;
}
export interface DescribeFleetAdvisorSchemasRequest {
  Filters?: Filter[];
  MaxRecords?: number;
  NextToken?: string;
}
export interface DatabaseShortInfoResponse {
  DatabaseId?: string;
  DatabaseName?: string;
  DatabaseIpAddress?: string;
  DatabaseEngine?: string;
}
export interface SchemaShortInfoResponse {
  SchemaId?: string;
  SchemaName?: string;
  DatabaseId?: string;
  DatabaseName?: string;
  DatabaseIpAddress?: string;
}
export interface SchemaResponse {
  CodeLineCount?: number;
  CodeSize?: number;
  Complexity?: string;
  Server?: ServerShortInfoResponse;
  DatabaseInstance?: DatabaseShortInfoResponse;
  SchemaId?: string;
  SchemaName?: string;
  OriginalSchema?: SchemaShortInfoResponse;
  Similarity?: number;
}
export type FleetAdvisorSchemaList = SchemaResponse[];
export interface DescribeFleetAdvisorSchemasResponse {
  FleetAdvisorSchemas?: SchemaResponse[];
  NextToken?: string;
}
export interface DescribeInstanceProfilesMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export type InstanceProfileList = InstanceProfile[];
export interface DescribeInstanceProfilesResponse {
  Marker?: string;
  InstanceProfiles?: InstanceProfile[];
}
export type OriginTypeValue = "SOURCE" | "TARGET" | (string & {});
export interface DescribeMetadataModelMessage {
  SelectionRules: string;
  MigrationProjectIdentifier: string;
  Origin: OriginTypeValue;
}
export interface MetadataModelReference {
  MetadataModelName?: string;
  SelectionRules?: string;
}
export type MetadataModelReferenceList = MetadataModelReference[];
export interface DescribeMetadataModelResponse {
  MetadataModelName?: string;
  MetadataModelType?: string;
  TargetMetadataModels?: MetadataModelReference[];
  Definition?: string;
}
export interface DescribeMetadataModelAssessmentsMessage {
  MigrationProjectIdentifier: string;
  Filters?: Filter[];
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeMetadataModelAssessmentsResponse {
  Marker?: string;
  Requests?: SchemaConversionRequest[];
}
export interface DescribeMetadataModelChildrenMessage {
  SelectionRules: string;
  MigrationProjectIdentifier: string;
  Origin: OriginTypeValue;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeMetadataModelChildrenResponse {
  Marker?: string;
  MetadataModelChildren?: MetadataModelReference[];
}
export interface DescribeMetadataModelConversionsMessage {
  MigrationProjectIdentifier: string;
  Filters?: Filter[];
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeMetadataModelConversionsResponse {
  Marker?: string;
  Requests?: SchemaConversionRequest[];
}
export interface DescribeMetadataModelCreationsMessage {
  Filters?: Filter[];
  Marker?: string;
  MaxRecords?: number;
  MigrationProjectIdentifier: string;
}
export interface DescribeMetadataModelCreationsResponse {
  Marker?: string;
  Requests?: SchemaConversionRequest[];
}
export interface DescribeMetadataModelExportsAsScriptMessage {
  MigrationProjectIdentifier: string;
  Filters?: Filter[];
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeMetadataModelExportsAsScriptResponse {
  Marker?: string;
  Requests?: SchemaConversionRequest[];
}
export interface DescribeMetadataModelExportsToTargetMessage {
  MigrationProjectIdentifier: string;
  Filters?: Filter[];
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeMetadataModelExportsToTargetResponse {
  Marker?: string;
  Requests?: SchemaConversionRequest[];
}
export interface DescribeMetadataModelImportsMessage {
  MigrationProjectIdentifier: string;
  Filters?: Filter[];
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeMetadataModelImportsResponse {
  Marker?: string;
  Requests?: SchemaConversionRequest[];
}
export interface DescribeMigrationProjectsMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export type MigrationProjectList = MigrationProject[];
export interface DescribeMigrationProjectsResponse {
  Marker?: string;
  MigrationProjects?: MigrationProject[];
}
export interface DescribeOrderableReplicationInstancesMessage {
  MaxRecords?: number;
  Marker?: string;
}
export type AvailabilityZonesList = string[];
export interface OrderableReplicationInstance {
  EngineVersion?: string;
  ReplicationInstanceClass?: string;
  StorageType?: string;
  MinAllocatedStorage?: number;
  MaxAllocatedStorage?: number;
  DefaultAllocatedStorage?: number;
  IncludedAllocatedStorage?: number;
  AvailabilityZones?: string[];
  ReleaseStatus?: ReleaseStatusValues;
}
export type OrderableReplicationInstanceList = OrderableReplicationInstance[];
export interface DescribeOrderableReplicationInstancesResponse {
  OrderableReplicationInstances?: OrderableReplicationInstance[];
  Marker?: string;
}
export interface DescribePendingMaintenanceActionsMessage {
  ReplicationInstanceArn?: string;
  Filters?: Filter[];
  Marker?: string;
  MaxRecords?: number;
}
export type PendingMaintenanceActions = ResourcePendingMaintenanceActions[];
export interface DescribePendingMaintenanceActionsResponse {
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[];
  Marker?: string;
}
export interface DescribeRecommendationLimitationsRequest {
  Filters?: Filter[];
  MaxRecords?: number;
  NextToken?: string;
}
export interface Limitation {
  DatabaseId?: string;
  EngineName?: string;
  Name?: string;
  Description?: string;
  Impact?: string;
  Type?: string;
}
export type LimitationList = Limitation[];
export interface DescribeRecommendationLimitationsResponse {
  NextToken?: string;
  Limitations?: Limitation[];
}
export interface DescribeRecommendationsRequest {
  Filters?: Filter[];
  MaxRecords?: number;
  NextToken?: string;
}
export interface RdsRequirements {
  EngineEdition?: string;
  InstanceVcpu?: number;
  InstanceMemory?: number;
  StorageSize?: number;
  StorageIops?: number;
  DeploymentOption?: string;
  EngineVersion?: string;
}
export interface RdsConfiguration {
  EngineEdition?: string;
  InstanceType?: string;
  InstanceVcpu?: number;
  InstanceMemory?: number;
  StorageType?: string;
  StorageSize?: number;
  StorageIops?: number;
  DeploymentOption?: string;
  EngineVersion?: string;
}
export interface RdsRecommendation {
  RequirementsToTarget?: RdsRequirements;
  TargetConfiguration?: RdsConfiguration;
}
export interface RecommendationData {
  RdsEngine?: RdsRecommendation;
}
export interface Recommendation {
  DatabaseId?: string;
  EngineName?: string;
  CreatedDate?: string;
  Status?: string;
  Preferred?: boolean;
  Settings?: RecommendationSettings;
  Data?: RecommendationData;
}
export type RecommendationList = Recommendation[];
export interface DescribeRecommendationsResponse {
  NextToken?: string;
  Recommendations?: Recommendation[];
}
export interface DescribeRefreshSchemasStatusMessage {
  EndpointArn: string;
}
export type RefreshSchemasStatusTypeValue = "successful" | "failed" | "refreshing" | (string & {});
export interface RefreshSchemasStatus {
  EndpointArn?: string;
  ReplicationInstanceArn?: string;
  Status?: RefreshSchemasStatusTypeValue;
  LastRefreshDate?: Date;
  LastFailureMessage?: string;
}
export interface DescribeRefreshSchemasStatusResponse {
  RefreshSchemasStatus?: RefreshSchemasStatus;
}
export interface DescribeReplicationConfigsMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export type ReplicationConfigList = ReplicationConfig[];
export interface DescribeReplicationConfigsResponse {
  Marker?: string;
  ReplicationConfigs?: ReplicationConfig[];
}
export interface DescribeReplicationInstancesMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export type ReplicationInstanceList = ReplicationInstance[];
export interface DescribeReplicationInstancesResponse {
  Marker?: string;
  ReplicationInstances?: ReplicationInstance[];
}
export interface DescribeReplicationInstanceTaskLogsMessage {
  ReplicationInstanceArn: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface ReplicationInstanceTaskLog {
  ReplicationTaskName?: string;
  ReplicationTaskArn?: string;
  ReplicationInstanceTaskLogSize?: number;
}
export type ReplicationInstanceTaskLogsList = ReplicationInstanceTaskLog[];
export interface DescribeReplicationInstanceTaskLogsResponse {
  ReplicationInstanceArn?: string;
  ReplicationInstanceTaskLogs?: ReplicationInstanceTaskLog[];
  Marker?: string;
}
export interface DescribeReplicationsMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export interface ProvisionData {
  ProvisionState?: string;
  ProvisionedCapacityUnits?: number;
  DateProvisioned?: Date;
  IsNewProvisioningAvailable?: boolean;
  DateNewProvisioningDataAvailable?: Date;
  ReasonForNewProvisioningData?: string;
}
export interface PremigrationAssessmentStatus {
  PremigrationAssessmentRunArn?: string;
  FailOnAssessmentFailure?: boolean;
  Status?: string;
  PremigrationAssessmentRunCreationDate?: Date;
  AssessmentProgress?: ReplicationTaskAssessmentRunProgress;
  LastFailureMessage?: string;
  ResultLocationBucket?: string;
  ResultLocationFolder?: string;
  ResultEncryptionMode?: string;
  ResultKmsKeyArn?: string;
  ResultStatistic?: ReplicationTaskAssessmentRunResultStatistic;
}
export type PremigrationAssessmentStatusList = PremigrationAssessmentStatus[];
export interface ReplicationStats {
  FullLoadProgressPercent?: number;
  ElapsedTimeMillis?: number;
  TablesLoaded?: number;
  TablesLoading?: number;
  TablesQueued?: number;
  TablesErrored?: number;
  FreshStartDate?: Date;
  StartDate?: Date;
  StopDate?: Date;
  FullLoadStartDate?: Date;
  FullLoadFinishDate?: Date;
}
export interface Replication {
  ReplicationConfigIdentifier?: string;
  ReplicationConfigArn?: string;
  SourceEndpointArn?: string;
  TargetEndpointArn?: string;
  ReplicationType?: MigrationTypeValue;
  Status?: string;
  ProvisionData?: ProvisionData;
  PremigrationAssessmentStatuses?: PremigrationAssessmentStatus[];
  StopReason?: string;
  FailureMessages?: string[];
  ReplicationStats?: ReplicationStats;
  StartReplicationType?: string;
  CdcStartTime?: Date;
  CdcStartPosition?: string;
  CdcStopPosition?: string;
  RecoveryCheckpoint?: string;
  ReplicationCreateTime?: Date;
  ReplicationUpdateTime?: Date;
  ReplicationLastStopTime?: Date;
  ReplicationDeprovisionTime?: Date;
  IsReadOnly?: boolean;
}
export type ReplicationList = Replication[];
export interface DescribeReplicationsResponse {
  Marker?: string;
  Replications?: Replication[];
}
export interface DescribeReplicationSubnetGroupsMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export type ReplicationSubnetGroups = ReplicationSubnetGroup[];
export interface DescribeReplicationSubnetGroupsResponse {
  Marker?: string;
  ReplicationSubnetGroups?: ReplicationSubnetGroup[];
}
export interface DescribeReplicationTableStatisticsMessage {
  ReplicationConfigArn: string;
  MaxRecords?: number;
  Marker?: string;
  Filters?: Filter[];
}
export interface TableStatistics {
  SchemaName?: string;
  TableName?: string;
  Inserts?: number;
  Deletes?: number;
  Updates?: number;
  Ddls?: number;
  AppliedInserts?: number;
  AppliedDeletes?: number;
  AppliedUpdates?: number;
  AppliedDdls?: number;
  FullLoadRows?: number;
  FullLoadCondtnlChkFailedRows?: number;
  FullLoadErrorRows?: number;
  FullLoadStartTime?: Date;
  FullLoadEndTime?: Date;
  FullLoadReloaded?: boolean;
  LastUpdateTime?: Date;
  TableState?: string;
  ValidationPendingRecords?: number;
  ValidationFailedRecords?: number;
  ValidationSuspendedRecords?: number;
  ValidationState?: string;
  ValidationStateDetails?: string;
  ResyncState?: string;
  ResyncRowsAttempted?: number;
  ResyncRowsSucceeded?: number;
  ResyncRowsFailed?: number;
  ResyncProgress?: number;
}
export type ReplicationTableStatisticsList = TableStatistics[];
export interface DescribeReplicationTableStatisticsResponse {
  ReplicationConfigArn?: string;
  Marker?: string;
  ReplicationTableStatistics?: TableStatistics[];
}
export interface DescribeReplicationTaskAssessmentResultsMessage {
  ReplicationTaskArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface ReplicationTaskAssessmentResult {
  ReplicationTaskIdentifier?: string;
  ReplicationTaskArn?: string;
  ReplicationTaskLastAssessmentDate?: Date;
  AssessmentStatus?: string;
  AssessmentResultsFile?: string;
  AssessmentResults?: string;
  S3ObjectUrl?: string | redacted.Redacted<string>;
}
export type ReplicationTaskAssessmentResultList = ReplicationTaskAssessmentResult[];
export interface DescribeReplicationTaskAssessmentResultsResponse {
  Marker?: string;
  BucketName?: string;
  ReplicationTaskAssessmentResults?: ReplicationTaskAssessmentResult[];
}
export interface DescribeReplicationTaskAssessmentRunsMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export type ReplicationTaskAssessmentRunList = ReplicationTaskAssessmentRun[];
export interface DescribeReplicationTaskAssessmentRunsResponse {
  Marker?: string;
  ReplicationTaskAssessmentRuns?: ReplicationTaskAssessmentRun[];
}
export interface DescribeReplicationTaskIndividualAssessmentsMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
export interface ReplicationTaskIndividualAssessment {
  ReplicationTaskIndividualAssessmentArn?: string;
  ReplicationTaskAssessmentRunArn?: string;
  IndividualAssessmentName?: string;
  Status?: string;
  ReplicationTaskIndividualAssessmentStartDate?: Date;
}
export type ReplicationTaskIndividualAssessmentList = ReplicationTaskIndividualAssessment[];
export interface DescribeReplicationTaskIndividualAssessmentsResponse {
  Marker?: string;
  ReplicationTaskIndividualAssessments?: ReplicationTaskIndividualAssessment[];
}
export interface DescribeReplicationTasksMessage {
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
  WithoutSettings?: boolean;
}
export type ReplicationTaskList = ReplicationTask[];
export interface DescribeReplicationTasksResponse {
  Marker?: string;
  ReplicationTasks?: ReplicationTask[];
}
export interface DescribeSchemasMessage {
  EndpointArn: string;
  MaxRecords?: number;
  Marker?: string;
}
export type SchemaList = string[];
export interface DescribeSchemasResponse {
  Marker?: string;
  Schemas?: string[];
}
export interface DescribeTableStatisticsMessage {
  ReplicationTaskArn: string;
  MaxRecords?: number;
  Marker?: string;
  Filters?: Filter[];
}
export type TableStatisticsList = TableStatistics[];
export interface DescribeTableStatisticsResponse {
  ReplicationTaskArn?: string;
  TableStatistics?: TableStatistics[];
  Marker?: string;
}
export type AssessmentReportType = "pdf" | "csv" | (string & {});
export type AssessmentReportTypesList = AssessmentReportType[];
export interface ExportMetadataModelAssessmentMessage {
  MigrationProjectIdentifier: string;
  SelectionRules: string;
  FileName?: string;
  AssessmentReportTypes?: AssessmentReportType[];
}
export interface ExportMetadataModelAssessmentResultEntry {
  S3ObjectKey?: string;
  ObjectURL?: string;
}
export interface ExportMetadataModelAssessmentResponse {
  PdfReport?: ExportMetadataModelAssessmentResultEntry;
  CsvReport?: ExportMetadataModelAssessmentResultEntry;
}
export interface GetTargetSelectionRulesMessage {
  MigrationProjectIdentifier: string;
  SelectionRules: string;
}
export interface GetTargetSelectionRulesResponse {
  TargetSelectionRules?: string;
}
export interface ImportCertificateMessage {
  CertificateIdentifier: string;
  CertificatePem?: string | redacted.Redacted<string>;
  CertificateWallet?: Uint8Array;
  Tags?: Tag[];
  KmsKeyId?: string;
}
export interface ImportCertificateResponse {
  Certificate?: Certificate;
}
export type ArnList = string[];
export interface ListTagsForResourceMessage {
  ResourceArn?: string;
  ResourceArnList?: string[];
}
export interface ListTagsForResourceResponse {
  TagList?: Tag[];
}
export interface ModifyConversionConfigurationMessage {
  MigrationProjectIdentifier: string;
  ConversionConfiguration: string;
}
export interface ModifyConversionConfigurationResponse {
  MigrationProjectIdentifier?: string;
}
export interface ModifyDataMigrationMessage {
  DataMigrationIdentifier: string;
  DataMigrationName?: string;
  EnableCloudwatchLogs?: boolean;
  ServiceAccessRoleArn?: string;
  DataMigrationType?: MigrationTypeValue;
  SourceDataSettings?: SourceDataSetting[];
  TargetDataSettings?: TargetDataSetting[];
  NumberOfJobs?: number;
  SelectionRules?: string | redacted.Redacted<string>;
}
export interface ModifyDataMigrationResponse {
  DataMigration?: DataMigration;
}
export interface ModifyDataProviderMessage {
  DataProviderIdentifier: string;
  DataProviderName?: string;
  Description?: string;
  Engine?: string;
  Virtual?: boolean;
  ExactSettings?: boolean;
  Settings?: DataProviderSettings;
}
export interface ModifyDataProviderResponse {
  DataProvider?: DataProvider;
}
export interface ModifyEndpointMessage {
  EndpointArn: string;
  EndpointIdentifier?: string;
  EndpointType?: ReplicationEndpointTypeValue;
  EngineName?: string;
  Username?: string;
  Password?: string | redacted.Redacted<string>;
  ServerName?: string;
  Port?: number;
  DatabaseName?: string;
  ExtraConnectionAttributes?: string;
  CertificateArn?: string;
  SslMode?: DmsSslModeValue;
  ServiceAccessRoleArn?: string;
  ExternalTableDefinition?: string;
  DynamoDbSettings?: DynamoDbSettings;
  S3Settings?: S3Settings;
  DmsTransferSettings?: DmsTransferSettings;
  MongoDbSettings?: MongoDbSettings;
  KinesisSettings?: KinesisSettings;
  KafkaSettings?: KafkaSettings;
  ElasticsearchSettings?: ElasticsearchSettings;
  NeptuneSettings?: NeptuneSettings;
  RedshiftSettings?: RedshiftSettings;
  PostgreSQLSettings?: PostgreSQLSettings;
  MySQLSettings?: MySQLSettings;
  OracleSettings?: OracleSettings;
  SybaseSettings?: SybaseSettings;
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;
  IBMDb2Settings?: IBMDb2Settings;
  DocDbSettings?: DocDbSettings;
  RedisSettings?: RedisSettings;
  ExactSettings?: boolean;
  GcpMySQLSettings?: GcpMySQLSettings;
  TimestreamSettings?: TimestreamSettings;
}
export interface ModifyEndpointResponse {
  Endpoint?: Endpoint;
}
export interface ModifyEventSubscriptionMessage {
  SubscriptionName: string;
  SnsTopicArn?: string;
  SourceType?: string;
  EventCategories?: string[];
  Enabled?: boolean;
}
export interface ModifyEventSubscriptionResponse {
  EventSubscription?: EventSubscription;
}
export interface ModifyInstanceProfileMessage {
  InstanceProfileIdentifier: string;
  AvailabilityZone?: string;
  KmsKeyArn?: string;
  PubliclyAccessible?: boolean;
  NetworkType?: string;
  InstanceProfileName?: string;
  Description?: string;
  SubnetGroupIdentifier?: string;
  VpcSecurityGroups?: string[];
}
export interface ModifyInstanceProfileResponse {
  InstanceProfile?: InstanceProfile;
}
export interface ModifyMigrationProjectMessage {
  MigrationProjectIdentifier: string;
  MigrationProjectName?: string;
  SourceDataProviderDescriptors?: DataProviderDescriptorDefinition[];
  TargetDataProviderDescriptors?: DataProviderDescriptorDefinition[];
  InstanceProfileIdentifier?: string;
  TransformationRules?: string;
  Description?: string;
  SchemaConversionApplicationAttributes?: SCApplicationAttributes;
}
export interface ModifyMigrationProjectResponse {
  MigrationProject?: MigrationProject;
}
export interface ModifyReplicationConfigMessage {
  ReplicationConfigArn: string;
  ReplicationConfigIdentifier?: string;
  ReplicationType?: MigrationTypeValue;
  TableMappings?: string;
  ReplicationSettings?: string;
  SupplementalSettings?: string;
  ComputeConfig?: ComputeConfig;
  SourceEndpointArn?: string;
  TargetEndpointArn?: string;
}
export interface ModifyReplicationConfigResponse {
  ReplicationConfig?: ReplicationConfig;
}
export interface ModifyReplicationInstanceMessage {
  ReplicationInstanceArn: string;
  AllocatedStorage?: number;
  ApplyImmediately?: boolean;
  ReplicationInstanceClass?: string;
  VpcSecurityGroupIds?: string[];
  PreferredMaintenanceWindow?: string;
  MultiAZ?: boolean;
  EngineVersion?: string;
  AllowMajorVersionUpgrade?: boolean;
  AutoMinorVersionUpgrade?: boolean;
  ReplicationInstanceIdentifier?: string;
  NetworkType?: string;
  KerberosAuthenticationSettings?: KerberosAuthenticationSettings;
}
export interface ModifyReplicationInstanceResponse {
  ReplicationInstance?: ReplicationInstance;
}
export interface ModifyReplicationSubnetGroupMessage {
  ReplicationSubnetGroupIdentifier: string;
  ReplicationSubnetGroupDescription?: string;
  SubnetIds: string[];
}
export interface ModifyReplicationSubnetGroupResponse {
  ReplicationSubnetGroup?: ReplicationSubnetGroup;
}
export interface ModifyReplicationTaskMessage {
  ReplicationTaskArn: string;
  ReplicationTaskIdentifier?: string;
  MigrationType?: MigrationTypeValue;
  TableMappings?: string;
  ReplicationTaskSettings?: string;
  CdcStartTime?: Date;
  CdcStartPosition?: string;
  CdcStopPosition?: string;
  TaskData?: string;
}
export interface ModifyReplicationTaskResponse {
  ReplicationTask?: ReplicationTask;
}
export interface MoveReplicationTaskMessage {
  ReplicationTaskArn: string;
  TargetReplicationInstanceArn: string;
}
export interface MoveReplicationTaskResponse {
  ReplicationTask?: ReplicationTask;
}
export interface RebootReplicationInstanceMessage {
  ReplicationInstanceArn: string;
  ForceFailover?: boolean;
  ForcePlannedFailover?: boolean;
}
export interface RebootReplicationInstanceResponse {
  ReplicationInstance?: ReplicationInstance;
}
export interface RefreshSchemasMessage {
  EndpointArn: string;
  ReplicationInstanceArn: string;
}
export interface RefreshSchemasResponse {
  RefreshSchemasStatus?: RefreshSchemasStatus;
}
export interface TableToReload {
  SchemaName: string;
  TableName: string;
}
export type TableListToReload = TableToReload[];
export type ReloadOptionValue = "data-reload" | "validate-only" | (string & {});
export interface ReloadReplicationTablesMessage {
  ReplicationConfigArn: string;
  TablesToReload: TableToReload[];
  ReloadOption?: ReloadOptionValue;
}
export interface ReloadReplicationTablesResponse {
  ReplicationConfigArn?: string;
}
export interface ReloadTablesMessage {
  ReplicationTaskArn: string;
  TablesToReload: TableToReload[];
  ReloadOption?: ReloadOptionValue;
}
export interface ReloadTablesResponse {
  ReplicationTaskArn?: string;
}
export type KeyList = string[];
export interface RemoveTagsFromResourceMessage {
  ResourceArn: string;
  TagKeys: string[];
}
export interface RemoveTagsFromResourceResponse {}
export interface RunFleetAdvisorLsaAnalysisRequest {}
export interface RunFleetAdvisorLsaAnalysisResponse {
  LsaAnalysisId?: string;
  Status?: string;
}
export type StartReplicationMigrationTypeValue =
  | "reload-target"
  | "resume-processing"
  | "start-replication"
  | (string & {});
export interface StartDataMigrationMessage {
  DataMigrationIdentifier: string;
  StartType: StartReplicationMigrationTypeValue;
}
export interface StartDataMigrationResponse {
  DataMigration?: DataMigration;
}
export interface StartExtensionPackAssociationMessage {
  MigrationProjectIdentifier: string;
}
export interface StartExtensionPackAssociationResponse {
  RequestIdentifier?: string;
}
export interface StartMetadataModelAssessmentMessage {
  MigrationProjectIdentifier: string;
  SelectionRules: string;
}
export interface StartMetadataModelAssessmentResponse {
  RequestIdentifier?: string;
}
export interface StartMetadataModelConversionMessage {
  MigrationProjectIdentifier: string;
  SelectionRules: string;
}
export interface StartMetadataModelConversionResponse {
  RequestIdentifier?: string;
}
export interface StatementProperties {
  Definition: string;
}
export type MetadataModelProperties = { StatementProperties: StatementProperties };
export interface StartMetadataModelCreationMessage {
  MigrationProjectIdentifier: string;
  SelectionRules: string;
  MetadataModelName: string;
  Properties: MetadataModelProperties;
}
export interface StartMetadataModelCreationResponse {
  RequestIdentifier?: string;
}
export interface StartMetadataModelExportAsScriptMessage {
  MigrationProjectIdentifier: string;
  SelectionRules: string;
  Origin: OriginTypeValue;
  FileName?: string;
}
export interface StartMetadataModelExportAsScriptResponse {
  RequestIdentifier?: string;
}
export interface StartMetadataModelExportToTargetMessage {
  MigrationProjectIdentifier: string;
  SelectionRules: string;
  OverwriteExtensionPack?: boolean;
}
export interface StartMetadataModelExportToTargetResponse {
  RequestIdentifier?: string;
}
export interface StartMetadataModelImportMessage {
  MigrationProjectIdentifier: string;
  SelectionRules: string;
  Origin: OriginTypeValue;
  Refresh?: boolean;
}
export interface StartMetadataModelImportResponse {
  RequestIdentifier?: string;
}
export interface StartRecommendationsRequest {
  DatabaseId: string;
  Settings: RecommendationSettings;
}
export interface StartRecommendationsResponse {}
export interface StartReplicationMessage {
  ReplicationConfigArn: string;
  StartReplicationType: string;
  PremigrationAssessmentSettings?: string;
  CdcStartTime?: Date;
  CdcStartPosition?: string;
  CdcStopPosition?: string;
}
export interface StartReplicationResponse {
  Replication?: Replication;
}
export type StartReplicationTaskTypeValue =
  | "start-replication"
  | "resume-processing"
  | "reload-target"
  | (string & {});
export interface StartReplicationTaskMessage {
  ReplicationTaskArn: string;
  StartReplicationTaskType: StartReplicationTaskTypeValue;
  CdcStartTime?: Date;
  CdcStartPosition?: string;
  CdcStopPosition?: string;
}
export interface StartReplicationTaskResponse {
  ReplicationTask?: ReplicationTask;
}
export interface StartReplicationTaskAssessmentMessage {
  ReplicationTaskArn: string;
}
export interface StartReplicationTaskAssessmentResponse {
  ReplicationTask?: ReplicationTask;
}
export type IncludeTestList = string[];
export type ExcludeTestList = string[];
export interface StartReplicationTaskAssessmentRunMessage {
  ReplicationTaskArn: string;
  ServiceAccessRoleArn: string;
  ResultLocationBucket: string;
  ResultLocationFolder?: string;
  ResultEncryptionMode?: string;
  ResultKmsKeyArn?: string;
  AssessmentRunName: string;
  IncludeOnly?: string[];
  Exclude?: string[];
  Tags?: Tag[];
}
export interface StartReplicationTaskAssessmentRunResponse {
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}
export interface StopDataMigrationMessage {
  DataMigrationIdentifier: string;
}
export interface StopDataMigrationResponse {
  DataMigration?: DataMigration;
}
export interface StopReplicationMessage {
  ReplicationConfigArn: string;
}
export interface StopReplicationResponse {
  Replication?: Replication;
}
export interface StopReplicationTaskMessage {
  ReplicationTaskArn: string;
}
export interface StopReplicationTaskResponse {
  ReplicationTask?: ReplicationTask;
}
export interface TestConnectionMessage {
  ReplicationInstanceArn: string;
  EndpointArn: string;
}
export interface TestConnectionResponse {
  Connection?: Connection;
}
export interface UpdateSubscriptionsToEventBridgeMessage {
  ForceMove?: boolean;
}
export interface UpdateSubscriptionsToEventBridgeResponse {
  Result?: string;
}
export type ExceptionMessage = string;
export type ResourceArn = string;
export type AddTagsToResourceError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Adds metadata tags to an DMS resource, including replication instance, endpoint,
 * subnet group, and migration task. These tags can also be used with cost allocation
 * reporting to track cost associated with DMS resources, or used in a Condition statement in
 * an IAM policy for DMS. For more information, see
 * `Tag`
 * data type
 * description.
 */
export const addTagsToResource: API.OperationMethod<
  AddTagsToResourceMessage,
  AddTagsToResourceResponse,
  AddTagsToResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<AddTagsToResourceMessage>,
  output: __S(3, __c0, 3) as any as S.Schema<AddTagsToResourceResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddTagsToResource",
}));

export type ApplyPendingMaintenanceActionError = ResourceNotFoundFault | CommonErrors;
/**
 * Applies a pending maintenance action to a resource (for example, to a replication
 * instance).
 */
export const applyPendingMaintenanceAction: API.OperationMethod<
  ApplyPendingMaintenanceActionMessage,
  ApplyPendingMaintenanceActionResponse,
  ApplyPendingMaintenanceActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<ApplyPendingMaintenanceActionMessage>,
  output: __S(8, __c1, 0) as any as S.Schema<ApplyPendingMaintenanceActionResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ApplyPendingMaintenanceAction",
}));

export type BatchStartRecommendationsError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support.
 *
 * Starts the analysis of up to 20 source databases to recommend target engines for each
 * source database. This is a batch version of StartRecommendations.
 *
 * The result of analysis of each source database is reported individually in the
 * response. Because the batch request can result in a combination of successful and
 * unsuccessful actions, you should check for batch errors even when the call returns an
 * HTTP status code of `200`.
 */
export const batchStartRecommendations: API.OperationMethod<
  BatchStartRecommendationsRequest,
  BatchStartRecommendationsResponse,
  BatchStartRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12, __c1, 4) as any as S.Schema<BatchStartRecommendationsRequest>,
  output: __S(15, __c1, 7) as any as S.Schema<BatchStartRecommendationsResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchStartRecommendations",
}));

export type CancelMetadataModelConversionError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Cancels a single metadata model conversion operation that was started with `StartMetadataModelConversion`.
 *
 * **Required permissions:**
 * `dms:CancelMetadataModelConversion`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const cancelMetadataModelConversion: API.OperationMethod<
  CancelMetadataModelConversionMessage,
  CancelMetadataModelConversionResponse,
  CancelMetadataModelConversionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16, __c2, 0) as any as S.Schema<CancelMetadataModelConversionMessage>,
  output: __S(23, __c2, 7) as any as S.Schema<CancelMetadataModelConversionResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelMetadataModelConversion",
}));

export type CancelMetadataModelCreationError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Cancels a single metadata model creation operation that was started with `StartMetadataModelCreation`.
 *
 * **Required permissions:**
 * `dms:CancelMetadataModelCreation`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const cancelMetadataModelCreation: API.OperationMethod<
  CancelMetadataModelCreationMessage,
  CancelMetadataModelCreationResponse,
  CancelMetadataModelCreationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24, __c3, 0) as any as S.Schema<CancelMetadataModelCreationMessage>,
  output: __S(23, __c2, 7) as any as S.Schema<CancelMetadataModelCreationResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelMetadataModelCreation",
}));

export type CancelReplicationTaskAssessmentRunError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Cancels a single premigration assessment run.
 *
 * This operation prevents any individual assessments from running if they haven't started
 * running. It also attempts to cancel any individual assessments that are currently
 * running.
 */
export const cancelReplicationTaskAssessmentRun: API.OperationMethod<
  CancelReplicationTaskAssessmentRunMessage,
  CancelReplicationTaskAssessmentRunResponse,
  CancelReplicationTaskAssessmentRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25, __c3, 1) as any as S.Schema<CancelReplicationTaskAssessmentRunMessage>,
  output: __S(29, __c3, 5) as any as S.Schema<CancelReplicationTaskAssessmentRunResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelReplicationTaskAssessmentRun",
}));

export type CreateDataMigrationError =
  | FailedDependencyFault
  | InvalidOperationFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | CommonErrors;
/**
 * Creates a data migration using the provided settings.
 */
export const createDataMigration: API.OperationMethod<
  CreateDataMigrationMessage,
  CreateDataMigrationResponse,
  CreateDataMigrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34, __c4, 2) as any as S.Schema<CreateDataMigrationMessage>,
  output: __S(39, __c4, 7) as any as S.Schema<CreateDataMigrationResponse>,
  errors: [
    FailedDependencyFault,
    InvalidOperationFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataMigration",
}));

export type CreateDataProviderError =
  | AccessDeniedFault
  | FailedDependencyFault
  | ResourceAlreadyExistsFault
  | ResourceQuotaExceededFault
  | CommonErrors;
/**
 * Creates a data provider using the provided settings. A data provider stores a data store
 * type and location information about your database.
 *
 * **Required permissions:**
 * `dms:CreateDataProvider`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const createDataProvider: API.OperationMethod<
  CreateDataProviderMessage,
  CreateDataProviderResponse,
  CreateDataProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49, __c6, 1) as any as S.Schema<CreateDataProviderMessage>,
  output: __S(51, __c6, 3) as any as S.Schema<CreateDataProviderResponse>,
  errors: [
    AccessDeniedFault,
    FailedDependencyFault,
    ResourceAlreadyExistsFault,
    ResourceQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataProvider",
}));

export type CreateEndpointError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | S3AccessDeniedFault
  | CommonErrors;
/**
 * Creates an endpoint using the provided settings.
 *
 * For a MySQL source or target endpoint, don't explicitly specify the database using
 * the `DatabaseName` request parameter on the `CreateEndpoint` API
 * call. Specifying `DatabaseName` when you create a MySQL endpoint replicates
 * all the task tables to this single database. For MySQL endpoints, you specify the
 * database only when you specify the schema in the table-mapping rules of the DMS
 * task.
 */
export const createEndpoint: API.OperationMethod<
  CreateEndpointMessage,
  CreateEndpointResponse,
  CreateEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72, __c9, 0) as any as S.Schema<CreateEndpointMessage>,
  output: __S(75, __c9, 3) as any as S.Schema<CreateEndpointResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
    S3AccessDeniedFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEndpoint",
}));

export type CreateEventSubscriptionError =
  | KMSAccessDeniedFault
  | KMSDisabledFault
  | KMSInvalidStateFault
  | KMSNotFoundFault
  | KMSThrottlingFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | SNSInvalidTopicFault
  | SNSNoAuthorizationFault
  | CommonErrors;
/**
 * Creates an DMS event notification subscription.
 *
 * You can specify the type of source (`SourceType`) you want to be notified of,
 * provide a list of DMS source IDs (`SourceIds`) that triggers the events, and
 * provide a list of event categories (`EventCategories`) for events you want to be
 * notified of. If you specify both the `SourceType` and `SourceIds`,
 * such as `SourceType = replication-instance` and SourceIdentifier =
 * my-replinstance, you will be notified of all the replication instance events for
 * the specified source. If you specify a `SourceType` but don't specify a
 * `SourceIdentifier`, you receive notice of the events for that source type for
 * all your DMS sources. If you don't specify either `SourceType` nor
 * `SourceIdentifier`, you will be notified of events generated from all DMS
 * sources belonging to your customer account.
 *
 * For more information about DMS events, see Working with Events and
 * Notifications in the *Database Migration Service User Guide.*
 */
export const createEventSubscription: API.OperationMethod<
  CreateEventSubscriptionMessage,
  CreateEventSubscriptionResponse,
  CreateEventSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78, __c9, 6) as any as S.Schema<CreateEventSubscriptionMessage>,
  output: __S(80, __c10, 0) as any as S.Schema<CreateEventSubscriptionResponse>,
  errors: [
    KMSAccessDeniedFault,
    KMSDisabledFault,
    KMSInvalidStateFault,
    KMSNotFoundFault,
    KMSThrottlingFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
    SNSInvalidTopicFault,
    SNSNoAuthorizationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEventSubscription",
}));

export type CreateFleetAdvisorCollectorError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceQuotaExceededFault
  | S3AccessDeniedFault
  | S3ResourceNotFoundFault
  | CommonErrors;
/**
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support.
 *
 * Creates a Fleet Advisor collector using the specified parameters.
 */
export const createFleetAdvisorCollector: API.OperationMethod<
  CreateFleetAdvisorCollectorRequest,
  CreateFleetAdvisorCollectorResponse,
  CreateFleetAdvisorCollectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<CreateFleetAdvisorCollectorRequest>,
  output: __S(82, __c10, 2) as any as S.Schema<CreateFleetAdvisorCollectorResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    ResourceQuotaExceededFault,
    S3AccessDeniedFault,
    S3ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFleetAdvisorCollector",
}));

export type CreateInstanceProfileError =
  | AccessDeniedFault
  | FailedDependencyFault
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | S3AccessDeniedFault
  | S3ResourceNotFoundFault
  | CommonErrors;
/**
 * Creates the instance profile using the specified parameters.
 *
 * **Required permissions:**
 * `dms:CreateInstanceProfile`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const createInstanceProfile: API.OperationMethod<
  CreateInstanceProfileMessage,
  CreateInstanceProfileResponse,
  CreateInstanceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83, __c10, 3) as any as S.Schema<CreateInstanceProfileMessage>,
  output: __S(85, __c10, 5) as any as S.Schema<CreateInstanceProfileResponse>,
  errors: [
    AccessDeniedFault,
    FailedDependencyFault,
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
    S3AccessDeniedFault,
    S3ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateInstanceProfile",
}));

export type CreateMigrationProjectError =
  | AccessDeniedFault
  | FailedDependencyFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | S3AccessDeniedFault
  | S3ResourceNotFoundFault
  | CommonErrors;
/**
 * Creates the migration project using the specified parameters.
 *
 * You can run this action only after you create an instance profile and data providers
 * using CreateInstanceProfile and CreateDataProvider.
 *
 * **Required permissions:**
 * `dms:CreateMigrationProject`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const createMigrationProject: API.OperationMethod<
  CreateMigrationProjectMessage,
  CreateMigrationProjectResponse,
  CreateMigrationProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89, __c11, 1) as any as S.Schema<CreateMigrationProjectMessage>,
  output: __S(93, __c11, 5) as any as S.Schema<CreateMigrationProjectResponse>,
  errors: [
    AccessDeniedFault,
    FailedDependencyFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
    S3AccessDeniedFault,
    S3ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMigrationProject",
}));

export type CreateReplicationConfigError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | InvalidSubnet
  | KMSKeyNotAccessibleFault
  | ReplicationSubnetGroupDoesNotCoverEnoughAZs
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | CommonErrors;
/**
 * Creates a configuration that you can later provide to configure and start an DMS
 * Serverless replication. You can also provide options to validate the configuration inputs
 * before you start the replication.
 */
export const createReplicationConfig: API.OperationMethod<
  CreateReplicationConfigMessage,
  CreateReplicationConfigResponse,
  CreateReplicationConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95, __c11, 7) as any as S.Schema<CreateReplicationConfigMessage>,
  output: __S(97, __c12, 1) as any as S.Schema<CreateReplicationConfigResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    InvalidSubnet,
    KMSKeyNotAccessibleFault,
    ReplicationSubnetGroupDoesNotCoverEnoughAZs,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateReplicationConfig",
}));

export type CreateReplicationInstanceError =
  | AccessDeniedFault
  | InsufficientResourceCapacityFault
  | InvalidResourceStateFault
  | InvalidSubnet
  | KMSKeyNotAccessibleFault
  | ReplicationSubnetGroupDoesNotCoverEnoughAZs
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | StorageQuotaExceededFault
  | CommonErrors;
/**
 * Creates the replication instance using the specified parameters.
 *
 * DMS requires that your account have certain roles with appropriate permissions before
 * you can create a replication instance. For information on the required roles, see Creating the IAM Roles to Use With the CLI and DMS API. For information on
 * the required permissions, see IAM
 * Permissions Needed to Use DMS.
 *
 * If you don't specify a version when creating a replication instance, DMS will
 * create the instance using the default engine version. For information about the default
 * engine version, see Release Notes.
 */
export const createReplicationInstance: API.OperationMethod<
  CreateReplicationInstanceMessage,
  CreateReplicationInstanceResponse,
  CreateReplicationInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(100, __c12, 4) as any as S.Schema<CreateReplicationInstanceMessage>,
  output: __S(109, __c13, 5) as any as S.Schema<CreateReplicationInstanceResponse>,
  errors: [
    AccessDeniedFault,
    InsufficientResourceCapacityFault,
    InvalidResourceStateFault,
    InvalidSubnet,
    KMSKeyNotAccessibleFault,
    ReplicationSubnetGroupDoesNotCoverEnoughAZs,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
    StorageQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateReplicationInstance",
}));

export type CreateReplicationSubnetGroupError =
  | AccessDeniedFault
  | InvalidSubnet
  | ReplicationSubnetGroupDoesNotCoverEnoughAZs
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | CommonErrors;
/**
 * Creates a replication subnet group given a list of the subnet IDs in a VPC.
 *
 * The VPC needs to have at least one subnet in at least two availability zones in the
 * Amazon Web Services Region, otherwise the service will throw a
 * `ReplicationSubnetGroupDoesNotCoverEnoughAZs` exception.
 *
 * If a replication subnet group exists in your Amazon Web Services account, the
 * CreateReplicationSubnetGroup action returns the following error message: The Replication
 * Subnet Group already exists. In this case, delete the existing replication subnet group. To
 * do so, use the DeleteReplicationSubnetGroup action. Optionally, choose Subnet groups in the
 * DMS console, then choose your subnet group. Next, choose Delete from Actions.
 */
export const createReplicationSubnetGroup: API.OperationMethod<
  CreateReplicationSubnetGroupMessage,
  CreateReplicationSubnetGroupResponse,
  CreateReplicationSubnetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111, __c13, 7) as any as S.Schema<CreateReplicationSubnetGroupMessage>,
  output: __S(112, __c14, 0) as any as S.Schema<CreateReplicationSubnetGroupResponse>,
  errors: [
    AccessDeniedFault,
    InvalidSubnet,
    ReplicationSubnetGroupDoesNotCoverEnoughAZs,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateReplicationSubnetGroup",
}));

export type CreateReplicationTaskError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | CommonErrors;
/**
 * Creates a replication task using the specified parameters.
 */
export const createReplicationTask: API.OperationMethod<
  CreateReplicationTaskMessage,
  CreateReplicationTaskResponse,
  CreateReplicationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(113, __c14, 1) as any as S.Schema<CreateReplicationTaskMessage>,
  output: __S(116, __c14, 4) as any as S.Schema<CreateReplicationTaskResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateReplicationTask",
}));

export type DeleteCertificateError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Deletes the specified certificate.
 */
export const deleteCertificate: API.OperationMethod<
  DeleteCertificateMessage,
  DeleteCertificateResponse,
  DeleteCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(117, __c14, 5) as any as S.Schema<DeleteCertificateMessage>,
  output: __S(119, __c14, 7) as any as S.Schema<DeleteCertificateResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCertificate",
}));

export type DeleteConnectionError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Deletes the connection between a replication instance and an endpoint.
 */
export const deleteConnection: API.OperationMethod<
  DeleteConnectionMessage,
  DeleteConnectionResponse,
  DeleteConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<DeleteConnectionMessage>,
  output: __S(122, __c15, 2) as any as S.Schema<DeleteConnectionResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnection",
}));

export type DeleteDataMigrationError =
  | FailedDependencyFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Deletes the specified data migration.
 */
export const deleteDataMigration: API.OperationMethod<
  DeleteDataMigrationMessage,
  DeleteDataMigrationResponse,
  DeleteDataMigrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123, __c15, 3) as any as S.Schema<DeleteDataMigrationMessage>,
  output: __S(39, __c4, 7) as any as S.Schema<DeleteDataMigrationResponse>,
  errors: [FailedDependencyFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataMigration",
}));

export type DeleteDataProviderError =
  | AccessDeniedFault
  | FailedDependencyFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Deletes the specified data provider.
 *
 * **Required permissions:**
 * `dms:DeleteDataProvider`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 *
 * All migration projects associated with the data provider must be deleted or modified
 * before you can delete the data provider.
 */
export const deleteDataProvider: API.OperationMethod<
  DeleteDataProviderMessage,
  DeleteDataProviderResponse,
  DeleteDataProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<DeleteDataProviderMessage>,
  output: __S(51, __c6, 3) as any as S.Schema<DeleteDataProviderResponse>,
  errors: [
    AccessDeniedFault,
    FailedDependencyFault,
    InvalidResourceStateFault,
    ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataProvider",
}));

export type DeleteEndpointError = InvalidResourceStateFault | ResourceNotFoundFault | CommonErrors;
/**
 * Deletes the specified endpoint.
 *
 * All tasks associated with the endpoint must be deleted before you can delete the
 * endpoint.
 */
export const deleteEndpoint: API.OperationMethod<
  DeleteEndpointMessage,
  DeleteEndpointResponse,
  DeleteEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(125, __c15, 5) as any as S.Schema<DeleteEndpointMessage>,
  output: __S(75, __c9, 3) as any as S.Schema<DeleteEndpointResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEndpoint",
}));

export type DeleteEventSubscriptionError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Deletes an DMS event subscription.
 */
export const deleteEventSubscription: API.OperationMethod<
  DeleteEventSubscriptionMessage,
  DeleteEventSubscriptionResponse,
  DeleteEventSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<DeleteEventSubscriptionMessage>,
  output: __S(80, __c10, 0) as any as S.Schema<DeleteEventSubscriptionResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEventSubscription",
}));

export type DeleteFleetAdvisorCollectorError =
  | AccessDeniedFault
  | CollectorNotFoundFault
  | InvalidResourceStateFault
  | CommonErrors;
/**
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support.
 *
 * Deletes the specified Fleet Advisor collector.
 */
export const deleteFleetAdvisorCollector: API.OperationMethod<
  DeleteCollectorRequest,
  DeleteFleetAdvisorCollectorResponse,
  DeleteFleetAdvisorCollectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(127, __c15, 7) as any as S.Schema<DeleteCollectorRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<DeleteFleetAdvisorCollectorResponse>,
  errors: [AccessDeniedFault, CollectorNotFoundFault, InvalidResourceStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFleetAdvisorCollector",
}));

export type DeleteFleetAdvisorDatabasesError =
  | AccessDeniedFault
  | InvalidOperationFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support.
 *
 * Deletes the specified Fleet Advisor collector databases.
 */
export const deleteFleetAdvisorDatabases: API.OperationMethod<
  DeleteFleetAdvisorDatabasesRequest,
  DeleteFleetAdvisorDatabasesResponse,
  DeleteFleetAdvisorDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(128, __c16, 0) as any as S.Schema<DeleteFleetAdvisorDatabasesRequest>,
  output: __S(129, __c16, 1) as any as S.Schema<DeleteFleetAdvisorDatabasesResponse>,
  errors: [AccessDeniedFault, InvalidOperationFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFleetAdvisorDatabases",
}));

export type DeleteInstanceProfileError =
  | AccessDeniedFault
  | FailedDependencyFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Deletes the specified instance profile.
 *
 * **Required permissions:**
 * `dms:DeleteInstanceProfile`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 *
 * All migration projects associated with the instance profile must be deleted or
 * modified before you can delete the instance profile.
 */
export const deleteInstanceProfile: API.OperationMethod<
  DeleteInstanceProfileMessage,
  DeleteInstanceProfileResponse,
  DeleteInstanceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130, __c16, 2) as any as S.Schema<DeleteInstanceProfileMessage>,
  output: __S(85, __c10, 5) as any as S.Schema<DeleteInstanceProfileResponse>,
  errors: [
    AccessDeniedFault,
    FailedDependencyFault,
    InvalidResourceStateFault,
    ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInstanceProfile",
}));

export type DeleteMigrationProjectError =
  | AccessDeniedFault
  | FailedDependencyFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Deletes the specified migration project.
 *
 * **Required permissions:**
 * `dms:DeleteMigrationProject`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 *
 * The migration project must be closed before you can delete it.
 */
export const deleteMigrationProject: API.OperationMethod<
  DeleteMigrationProjectMessage,
  DeleteMigrationProjectResponse,
  DeleteMigrationProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131, __c16, 3) as any as S.Schema<DeleteMigrationProjectMessage>,
  output: __S(93, __c11, 5) as any as S.Schema<DeleteMigrationProjectResponse>,
  errors: [
    AccessDeniedFault,
    FailedDependencyFault,
    InvalidResourceStateFault,
    ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMigrationProject",
}));

export type DeleteReplicationConfigError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Deletes an DMS Serverless replication configuration. This effectively deprovisions any
 * and all replications that use this configuration. You can't delete the configuration for an
 * DMS Serverless replication that is ongoing. You can delete the configuration when the
 * replication is in a non-RUNNING and non-STARTING state.
 */
export const deleteReplicationConfig: API.OperationMethod<
  DeleteReplicationConfigMessage,
  DeleteReplicationConfigResponse,
  DeleteReplicationConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(132, __c16, 4) as any as S.Schema<DeleteReplicationConfigMessage>,
  output: __S(97, __c12, 1) as any as S.Schema<DeleteReplicationConfigResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteReplicationConfig",
}));

export type DeleteReplicationInstanceError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Deletes the specified replication instance.
 *
 * You must delete any migration tasks that are associated with the replication instance
 * before you can delete it.
 */
export const deleteReplicationInstance: API.OperationMethod<
  DeleteReplicationInstanceMessage,
  DeleteReplicationInstanceResponse,
  DeleteReplicationInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(133, __c16, 5) as any as S.Schema<DeleteReplicationInstanceMessage>,
  output: __S(109, __c13, 5) as any as S.Schema<DeleteReplicationInstanceResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteReplicationInstance",
}));

export type DeleteReplicationSubnetGroupError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Deletes a subnet group.
 */
export const deleteReplicationSubnetGroup: API.OperationMethod<
  DeleteReplicationSubnetGroupMessage,
  DeleteReplicationSubnetGroupResponse,
  DeleteReplicationSubnetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134, __c16, 6) as any as S.Schema<DeleteReplicationSubnetGroupMessage>,
  output: __S(3, __c0, 3) as any as S.Schema<DeleteReplicationSubnetGroupResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteReplicationSubnetGroup",
}));

export type DeleteReplicationTaskError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Deletes the specified replication task.
 */
export const deleteReplicationTask: API.OperationMethod<
  DeleteReplicationTaskMessage,
  DeleteReplicationTaskResponse,
  DeleteReplicationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(135, __c16, 7) as any as S.Schema<DeleteReplicationTaskMessage>,
  output: __S(116, __c14, 4) as any as S.Schema<DeleteReplicationTaskResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteReplicationTask",
}));

export type DeleteReplicationTaskAssessmentRunError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Deletes the record of a single premigration assessment run.
 *
 * This operation removes all metadata that DMS maintains about this assessment run.
 * However, the operation leaves untouched all information about this assessment run that is
 * stored in your Amazon S3 bucket.
 */
export const deleteReplicationTaskAssessmentRun: API.OperationMethod<
  DeleteReplicationTaskAssessmentRunMessage,
  DeleteReplicationTaskAssessmentRunResponse,
  DeleteReplicationTaskAssessmentRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(136, __c17, 0) as any as S.Schema<DeleteReplicationTaskAssessmentRunMessage>,
  output: __S(29, __c3, 5) as any as S.Schema<DeleteReplicationTaskAssessmentRunResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteReplicationTaskAssessmentRun",
}));

export type DescribeAccountAttributesError = CommonErrors;
/**
 * Lists all of the DMS attributes for a customer account. These attributes include DMS
 * quotas for the account and a unique account identifier in a particular DMS region. DMS
 * quotas include a list of resource quotas supported by the account, such as the number of
 * replication instances allowed. The description for each resource quota, includes the quota
 * name, current usage toward that quota, and the quota's maximum value. DMS uses the unique
 * account identifier to name each artifact used by DMS in the given region.
 *
 * This command does not take any parameters.
 */
export const describeAccountAttributes: API.OperationMethod<
  DescribeAccountAttributesMessage,
  DescribeAccountAttributesResponse,
  DescribeAccountAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(137, __c17, 1) as any as S.Schema<DescribeAccountAttributesMessage>,
  output: __S(140, __c17, 4) as any as S.Schema<DescribeAccountAttributesResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountAttributes",
}));

export type DescribeApplicableIndividualAssessmentsError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Provides a list of individual assessments that you can specify for a new premigration
 * assessment run, given one or more parameters.
 *
 * If you specify an existing migration task, this operation provides the default
 * individual assessments you can specify for that task. Otherwise, the specified parameters
 * model elements of a possible migration task on which to base a premigration assessment
 * run.
 *
 * To use these migration task modeling parameters, you must specify an existing
 * replication instance, a source database engine, a target database engine, and a migration
 * type. This combination of parameters potentially limits the default individual assessments
 * available for an assessment run created for a corresponding migration task.
 *
 * If you specify no parameters, this operation provides a list of all possible individual
 * assessments that you can specify for an assessment run. If you specify any one of the task
 * modeling parameters, you must specify all of them or the operation cannot provide a list of
 * individual assessments. The only parameter that you can specify alone is for an existing
 * migration task. The specified task definition then determines the default list of
 * individual assessments that you can specify in an assessment run for the task.
 */
export const describeApplicableIndividualAssessments: API.PaginatedOperationMethod<
  DescribeApplicableIndividualAssessmentsMessage,
  DescribeApplicableIndividualAssessmentsResponse,
  DescribeApplicableIndividualAssessmentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(141, __c17, 5) as any as S.Schema<DescribeApplicableIndividualAssessmentsMessage>,
  output: __S(142, __c17, 6) as any as S.Schema<DescribeApplicableIndividualAssessmentsResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplicableIndividualAssessments",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeCertificatesError = ResourceNotFoundFault | CommonErrors;
/**
 * Provides a description of the certificate.
 */
export const describeCertificates: API.PaginatedOperationMethod<
  DescribeCertificatesMessage,
  DescribeCertificatesResponse,
  DescribeCertificatesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(146, __c18, 2) as any as S.Schema<DescribeCertificatesMessage>,
  output: __S(148, __c18, 4) as any as S.Schema<DescribeCertificatesResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCertificates",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeConnectionsError = ResourceNotFoundFault | CommonErrors;
/**
 * Describes the status of the connections that have been made between the replication
 * instance and an endpoint. Connections are created when you test an endpoint.
 */
export const describeConnections: API.PaginatedOperationMethod<
  DescribeConnectionsMessage,
  DescribeConnectionsResponse,
  DescribeConnectionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(149, __c18, 5) as any as S.Schema<DescribeConnectionsMessage>,
  output: __S(151, __c18, 7) as any as S.Schema<DescribeConnectionsResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConnections",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeConversionConfigurationError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns configuration parameters for a schema conversion project.
 *
 * **Required permissions:**
 * `dms:DescribeConversionConfiguration`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const describeConversionConfiguration: API.OperationMethod<
  DescribeConversionConfigurationMessage,
  DescribeConversionConfigurationResponse,
  DescribeConversionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(152, __c19, 0) as any as S.Schema<DescribeConversionConfigurationMessage>,
  output: __S(153, __c19, 1) as any as S.Schema<DescribeConversionConfigurationResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConversionConfiguration",
}));

export type DescribeDataMigrationsError =
  | FailedDependencyFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Returns information about data migrations.
 */
export const describeDataMigrations: API.PaginatedOperationMethod<
  DescribeDataMigrationsMessage,
  DescribeDataMigrationsResponse,
  DescribeDataMigrationsError,
  Credentials | HttpClient.HttpClient,
  DataMigration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(154, __c19, 2) as any as S.Schema<DescribeDataMigrationsMessage>,
  output: __S(156, __c19, 4) as any as S.Schema<DescribeDataMigrationsResponse>,
  errors: [FailedDependencyFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDataMigrations",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "DataMigrations",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDataProvidersError =
  | AccessDeniedFault
  | FailedDependencyFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Returns a paginated list of data providers for your account in the current
 * region.
 *
 * **Required permissions:**
 * `dms:ListDataProviders`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const describeDataProviders: API.PaginatedOperationMethod<
  DescribeDataProvidersMessage,
  DescribeDataProvidersResponse,
  DescribeDataProvidersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(157, __c19, 5) as any as S.Schema<DescribeDataProvidersMessage>,
  output: __S(159, __c19, 7) as any as S.Schema<DescribeDataProvidersResponse>,
  errors: [AccessDeniedFault, FailedDependencyFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDataProviders",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeEndpointsError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns information about the endpoints for your account in the current region.
 */
export const describeEndpoints: API.PaginatedOperationMethod<
  DescribeEndpointsMessage,
  DescribeEndpointsResponse,
  DescribeEndpointsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(160, __c20, 0) as any as S.Schema<DescribeEndpointsMessage>,
  output: __S(162, __c20, 2) as any as S.Schema<DescribeEndpointsResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEndpoints",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeEndpointSettingsError = CommonErrors;
/**
 * Returns information about the possible endpoint settings available when you create an
 * endpoint for a specific database engine.
 */
export const describeEndpointSettings: API.PaginatedOperationMethod<
  DescribeEndpointSettingsMessage,
  DescribeEndpointSettingsResponse,
  DescribeEndpointSettingsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(163, __c20, 3) as any as S.Schema<DescribeEndpointSettingsMessage>,
  output: __S(166, __c20, 6) as any as S.Schema<DescribeEndpointSettingsResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEndpointSettings",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeEndpointTypesError = CommonErrors;
/**
 * Returns information about the type of endpoints available.
 */
export const describeEndpointTypes: API.PaginatedOperationMethod<
  DescribeEndpointTypesMessage,
  DescribeEndpointTypesResponse,
  DescribeEndpointTypesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(167, __c20, 7) as any as S.Schema<DescribeEndpointTypesMessage>,
  output: __S(170, __c21, 2) as any as S.Schema<DescribeEndpointTypesResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEndpointTypes",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeEngineVersionsError = CommonErrors;
/**
 * Returns information about the replication instance versions used in the project.
 */
export const describeEngineVersions: API.PaginatedOperationMethod<
  DescribeEngineVersionsMessage,
  DescribeEngineVersionsResponse,
  DescribeEngineVersionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(171, __c21, 3) as any as S.Schema<DescribeEngineVersionsMessage>,
  output: __S(174, __c21, 6) as any as S.Schema<DescribeEngineVersionsResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEngineVersions",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeEventCategoriesError = CommonErrors;
/**
 * Lists categories for all event source types, or, if specified, for a specified source
 * type. You can see a list of the event categories and source types in Working with Events
 * and Notifications in the *Database Migration Service User Guide.*
 */
export const describeEventCategories: API.OperationMethod<
  DescribeEventCategoriesMessage,
  DescribeEventCategoriesResponse,
  DescribeEventCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(175, __c21, 7) as any as S.Schema<DescribeEventCategoriesMessage>,
  output: __S(178, __c22, 2) as any as S.Schema<DescribeEventCategoriesResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEventCategories",
}));

export type DescribeEventsError = CommonErrors;
/**
 * Lists events for a given source identifier and source type. You can also specify a
 * start and end time. For more information on DMS events, see Working with Events and
 * Notifications in the *Database Migration Service User Guide.*
 */
export const describeEvents: API.PaginatedOperationMethod<
  DescribeEventsMessage,
  DescribeEventsResponse,
  DescribeEventsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(179, __c22, 3) as any as S.Schema<DescribeEventsMessage>,
  output: __S(182, __c22, 6) as any as S.Schema<DescribeEventsResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEvents",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeEventSubscriptionsError = ResourceNotFoundFault | CommonErrors;
/**
 * Lists all the event subscriptions for a customer account. The description of a
 * subscription includes `SubscriptionName`, `SNSTopicARN`,
 * `CustomerID`, `SourceType`, `SourceID`,
 * `CreationTime`, and `Status`.
 *
 * If you specify `SubscriptionName`, this action lists the description for that
 * subscription.
 */
export const describeEventSubscriptions: API.PaginatedOperationMethod<
  DescribeEventSubscriptionsMessage,
  DescribeEventSubscriptionsResponse,
  DescribeEventSubscriptionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(183, __c22, 7) as any as S.Schema<DescribeEventSubscriptionsMessage>,
  output: __S(185, __c23, 1) as any as S.Schema<DescribeEventSubscriptionsResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEventSubscriptions",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeExtensionPackAssociationsError = CommonErrors;
/**
 * Returns a paginated list of extension pack installation requests for a migration
 * project, initiated by
 * StartExtensionPackAssociation.
 *
 * **Required permissions:**
 * `dms:ListExtensionPacks`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const describeExtensionPackAssociations: API.PaginatedOperationMethod<
  DescribeExtensionPackAssociationsMessage,
  DescribeExtensionPackAssociationsResponse,
  DescribeExtensionPackAssociationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(186, __c23, 2) as any as S.Schema<DescribeExtensionPackAssociationsMessage>,
  output: __S(188, __c23, 4) as any as S.Schema<DescribeExtensionPackAssociationsResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeExtensionPackAssociations",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeFleetAdvisorCollectorsError = InvalidResourceStateFault | CommonErrors;
/**
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support.
 *
 * Returns a list of the Fleet Advisor collectors in your account.
 */
export const describeFleetAdvisorCollectors: API.PaginatedOperationMethod<
  DescribeFleetAdvisorCollectorsRequest,
  DescribeFleetAdvisorCollectorsResponse,
  DescribeFleetAdvisorCollectorsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(189, __c23, 5) as any as S.Schema<DescribeFleetAdvisorCollectorsRequest>,
  output: __S(194, __c24, 2) as any as S.Schema<DescribeFleetAdvisorCollectorsResponse>,
  errors: [InvalidResourceStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFleetAdvisorCollectors",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeFleetAdvisorDatabasesError = InvalidResourceStateFault | CommonErrors;
/**
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support.
 *
 * Returns a list of Fleet Advisor databases in your account.
 */
export const describeFleetAdvisorDatabases: API.PaginatedOperationMethod<
  DescribeFleetAdvisorDatabasesRequest,
  DescribeFleetAdvisorDatabasesResponse,
  DescribeFleetAdvisorDatabasesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(195, __c24, 3) as any as S.Schema<DescribeFleetAdvisorDatabasesRequest>,
  output: __S(202, __c25, 2) as any as S.Schema<DescribeFleetAdvisorDatabasesResponse>,
  errors: [InvalidResourceStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFleetAdvisorDatabases",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeFleetAdvisorLsaAnalysisError = InvalidResourceStateFault | CommonErrors;
/**
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support.
 *
 * Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet
 * Advisor collectors.
 */
export const describeFleetAdvisorLsaAnalysis: API.PaginatedOperationMethod<
  DescribeFleetAdvisorLsaAnalysisRequest,
  DescribeFleetAdvisorLsaAnalysisResponse,
  DescribeFleetAdvisorLsaAnalysisError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(203, __c25, 3) as any as S.Schema<DescribeFleetAdvisorLsaAnalysisRequest>,
  output: __S(206, __c25, 6) as any as S.Schema<DescribeFleetAdvisorLsaAnalysisResponse>,
  errors: [InvalidResourceStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFleetAdvisorLsaAnalysis",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeFleetAdvisorSchemaObjectSummaryError = InvalidResourceStateFault | CommonErrors;
/**
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support.
 *
 * Provides descriptions of the schemas discovered by your Fleet Advisor
 * collectors.
 */
export const describeFleetAdvisorSchemaObjectSummary: API.PaginatedOperationMethod<
  DescribeFleetAdvisorSchemaObjectSummaryRequest,
  DescribeFleetAdvisorSchemaObjectSummaryResponse,
  DescribeFleetAdvisorSchemaObjectSummaryError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(207, __c25, 7) as any as S.Schema<DescribeFleetAdvisorSchemaObjectSummaryRequest>,
  output: __S(210, __c26, 2) as any as S.Schema<DescribeFleetAdvisorSchemaObjectSummaryResponse>,
  errors: [InvalidResourceStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFleetAdvisorSchemaObjectSummary",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeFleetAdvisorSchemasError = InvalidResourceStateFault | CommonErrors;
/**
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support.
 *
 * Returns a list of schemas detected by Fleet Advisor Collectors in your account.
 */
export const describeFleetAdvisorSchemas: API.PaginatedOperationMethod<
  DescribeFleetAdvisorSchemasRequest,
  DescribeFleetAdvisorSchemasResponse,
  DescribeFleetAdvisorSchemasError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(211, __c26, 3) as any as S.Schema<DescribeFleetAdvisorSchemasRequest>,
  output: __S(216, __c27, 0) as any as S.Schema<DescribeFleetAdvisorSchemasResponse>,
  errors: [InvalidResourceStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFleetAdvisorSchemas",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeInstanceProfilesError =
  | AccessDeniedFault
  | FailedDependencyFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Returns a paginated list of instance profiles for your account in the current
 * region.
 *
 * **Required permissions:**
 * `dms:ListInstanceProfiles`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const describeInstanceProfiles: API.PaginatedOperationMethod<
  DescribeInstanceProfilesMessage,
  DescribeInstanceProfilesResponse,
  DescribeInstanceProfilesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(217, __c27, 1) as any as S.Schema<DescribeInstanceProfilesMessage>,
  output: __S(219, __c27, 3) as any as S.Schema<DescribeInstanceProfilesResponse>,
  errors: [AccessDeniedFault, FailedDependencyFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeInstanceProfiles",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeMetadataModelError = AccessDeniedFault | ResourceNotFoundFault | CommonErrors;
/**
 * Gets detailed information about the specified metadata model, including its definition and corresponding converted objects in the target database if applicable.
 *
 * **Required permissions:**
 * `dms:DescribeMetadataModel`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const describeMetadataModel: API.OperationMethod<
  DescribeMetadataModelMessage,
  DescribeMetadataModelResponse,
  DescribeMetadataModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(220, __c27, 4) as any as S.Schema<DescribeMetadataModelMessage>,
  output: __S(223, __c27, 7) as any as S.Schema<DescribeMetadataModelResponse>,
  errors: [AccessDeniedFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMetadataModel",
}));

export type DescribeMetadataModelAssessmentsError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns a paginated list of metadata model assessment requests for a migration
 * project, initiated by
 * StartMetadataModelAssessment.
 *
 * **Required permissions:**
 * `dms:ListMetadataModelAssessments`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const describeMetadataModelAssessments: API.PaginatedOperationMethod<
  DescribeMetadataModelAssessmentsMessage,
  DescribeMetadataModelAssessmentsResponse,
  DescribeMetadataModelAssessmentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(224, __c28, 0) as any as S.Schema<DescribeMetadataModelAssessmentsMessage>,
  output: __S(188, __c23, 4) as any as S.Schema<DescribeMetadataModelAssessmentsResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMetadataModelAssessments",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeMetadataModelChildrenError =
  | AccessDeniedFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Gets a list of child metadata models for the specified metadata model in the database hierarchy.
 *
 * **Required permissions:**
 * `dms:DescribeMetadataModelChildren`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const describeMetadataModelChildren: API.PaginatedOperationMethod<
  DescribeMetadataModelChildrenMessage,
  DescribeMetadataModelChildrenResponse,
  DescribeMetadataModelChildrenError,
  Credentials | HttpClient.HttpClient,
  MetadataModelReference
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(225, __c28, 1) as any as S.Schema<DescribeMetadataModelChildrenMessage>,
  output: __S(226, __c28, 2) as any as S.Schema<DescribeMetadataModelChildrenResponse>,
  errors: [AccessDeniedFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMetadataModelChildren",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "MetadataModelChildren",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeMetadataModelConversionsError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns a paginated list of metadata model conversion requests for a migration
 * project, initiated by
 * StartMetadataModelConversion.
 *
 * To cancel a queued or in-progress request, call
 * CancelMetadataModelConversion.
 *
 * **Required permissions:**
 * `dms:ListMetadataModelConversions`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const describeMetadataModelConversions: API.PaginatedOperationMethod<
  DescribeMetadataModelConversionsMessage,
  DescribeMetadataModelConversionsResponse,
  DescribeMetadataModelConversionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(227, __c28, 3) as any as S.Schema<DescribeMetadataModelConversionsMessage>,
  output: __S(188, __c23, 4) as any as S.Schema<DescribeMetadataModelConversionsResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMetadataModelConversions",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeMetadataModelCreationsError =
  | AccessDeniedFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Returns a paginated list of metadata model creation requests for a migration
 * project, initiated by
 * StartMetadataModelCreation.
 *
 * To cancel a queued or in-progress request, call
 * CancelMetadataModelCreation.
 *
 * **Required permissions:**
 * `dms:DescribeMetadataModelCreations`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const describeMetadataModelCreations: API.PaginatedOperationMethod<
  DescribeMetadataModelCreationsMessage,
  DescribeMetadataModelCreationsResponse,
  DescribeMetadataModelCreationsError,
  Credentials | HttpClient.HttpClient,
  SchemaConversionRequest
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(228, __c28, 4) as any as S.Schema<DescribeMetadataModelCreationsMessage>,
  output: __S(188, __c23, 4) as any as S.Schema<DescribeMetadataModelCreationsResponse>,
  errors: [AccessDeniedFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMetadataModelCreations",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Requests",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeMetadataModelExportsAsScriptError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns a paginated list of metadata model export requests for a migration
 * project, initiated by
 * StartMetadataModelExportAsScript.
 *
 * **Required permissions:**
 * `dms:ListMetadataModelExports`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const describeMetadataModelExportsAsScript: API.PaginatedOperationMethod<
  DescribeMetadataModelExportsAsScriptMessage,
  DescribeMetadataModelExportsAsScriptResponse,
  DescribeMetadataModelExportsAsScriptError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(229, __c28, 5) as any as S.Schema<DescribeMetadataModelExportsAsScriptMessage>,
  output: __S(188, __c23, 4) as any as S.Schema<DescribeMetadataModelExportsAsScriptResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMetadataModelExportsAsScript",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeMetadataModelExportsToTargetError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns a paginated list of metadata model export requests for a migration
 * project, initiated by
 * StartMetadataModelExportToTarget.
 *
 * **Required permissions:**
 * `dms:ListMetadataModelExports`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const describeMetadataModelExportsToTarget: API.PaginatedOperationMethod<
  DescribeMetadataModelExportsToTargetMessage,
  DescribeMetadataModelExportsToTargetResponse,
  DescribeMetadataModelExportsToTargetError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(230, __c28, 6) as any as S.Schema<DescribeMetadataModelExportsToTargetMessage>,
  output: __S(188, __c23, 4) as any as S.Schema<DescribeMetadataModelExportsToTargetResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMetadataModelExportsToTarget",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeMetadataModelImportsError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns a paginated list of metadata model import requests for a migration
 * project, initiated by
 * StartMetadataModelImport.
 *
 * **Required permissions:**
 * `dms:DescribeMetadataModelImports`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const describeMetadataModelImports: API.PaginatedOperationMethod<
  DescribeMetadataModelImportsMessage,
  DescribeMetadataModelImportsResponse,
  DescribeMetadataModelImportsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(231, __c28, 7) as any as S.Schema<DescribeMetadataModelImportsMessage>,
  output: __S(188, __c23, 4) as any as S.Schema<DescribeMetadataModelImportsResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMetadataModelImports",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeMigrationProjectsError =
  | AccessDeniedFault
  | FailedDependencyFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Returns a paginated list of migration projects for your account in the current
 * region.
 *
 * **Required permissions:**
 * `dms:ListMigrationProjects`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const describeMigrationProjects: API.PaginatedOperationMethod<
  DescribeMigrationProjectsMessage,
  DescribeMigrationProjectsResponse,
  DescribeMigrationProjectsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(232, __c29, 0) as any as S.Schema<DescribeMigrationProjectsMessage>,
  output: __S(234, __c29, 2) as any as S.Schema<DescribeMigrationProjectsResponse>,
  errors: [AccessDeniedFault, FailedDependencyFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMigrationProjects",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeOrderableReplicationInstancesError = CommonErrors;
/**
 * Returns information about the replication instance types that can be created in the
 * specified region.
 */
export const describeOrderableReplicationInstances: API.PaginatedOperationMethod<
  DescribeOrderableReplicationInstancesMessage,
  DescribeOrderableReplicationInstancesResponse,
  DescribeOrderableReplicationInstancesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(235, __c29, 3) as any as S.Schema<DescribeOrderableReplicationInstancesMessage>,
  output: __S(238, __c29, 6) as any as S.Schema<DescribeOrderableReplicationInstancesResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOrderableReplicationInstances",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribePendingMaintenanceActionsError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns a list of upcoming maintenance events for replication instances in your account
 * in the current Region.
 */
export const describePendingMaintenanceActions: API.PaginatedOperationMethod<
  DescribePendingMaintenanceActionsMessage,
  DescribePendingMaintenanceActionsResponse,
  DescribePendingMaintenanceActionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(239, __c29, 7) as any as S.Schema<DescribePendingMaintenanceActionsMessage>,
  output: __S(241, __c30, 1) as any as S.Schema<DescribePendingMaintenanceActionsResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePendingMaintenanceActions",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeRecommendationLimitationsError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | CommonErrors;
/**
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support.
 *
 * Returns a paginated list of limitations for recommendations of target Amazon Web Services
 * engines.
 */
export const describeRecommendationLimitations: API.PaginatedOperationMethod<
  DescribeRecommendationLimitationsRequest,
  DescribeRecommendationLimitationsResponse,
  DescribeRecommendationLimitationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(242, __c30, 2) as any as S.Schema<DescribeRecommendationLimitationsRequest>,
  output: __S(245, __c30, 5) as any as S.Schema<DescribeRecommendationLimitationsResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRecommendationLimitations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeRecommendationsError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | CommonErrors;
/**
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support.
 *
 * Returns a paginated list of target engine recommendations for your source
 * databases.
 */
export const describeRecommendations: API.PaginatedOperationMethod<
  DescribeRecommendationsRequest,
  DescribeRecommendationsResponse,
  DescribeRecommendationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(246, __c30, 6) as any as S.Schema<DescribeRecommendationsRequest>,
  output: __S(253, __c31, 5) as any as S.Schema<DescribeRecommendationsResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRecommendations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeRefreshSchemasStatusError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Returns the status of the RefreshSchemas operation.
 */
export const describeRefreshSchemasStatus: API.OperationMethod<
  DescribeRefreshSchemasStatusMessage,
  DescribeRefreshSchemasStatusResponse,
  DescribeRefreshSchemasStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(254, __c31, 6) as any as S.Schema<DescribeRefreshSchemasStatusMessage>,
  output: __S(256, __c32, 0) as any as S.Schema<DescribeRefreshSchemasStatusResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRefreshSchemasStatus",
}));

export type DescribeReplicationConfigsError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns one or more existing DMS Serverless replication configurations as a list of
 * structures.
 */
export const describeReplicationConfigs: API.PaginatedOperationMethod<
  DescribeReplicationConfigsMessage,
  DescribeReplicationConfigsResponse,
  DescribeReplicationConfigsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(257, __c32, 1) as any as S.Schema<DescribeReplicationConfigsMessage>,
  output: __S(259, __c32, 3) as any as S.Schema<DescribeReplicationConfigsResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReplicationConfigs",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeReplicationInstancesError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns information about replication instances for your account in the current
 * region.
 */
export const describeReplicationInstances: API.PaginatedOperationMethod<
  DescribeReplicationInstancesMessage,
  DescribeReplicationInstancesResponse,
  DescribeReplicationInstancesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(260, __c32, 4) as any as S.Schema<DescribeReplicationInstancesMessage>,
  output: __S(262, __c32, 6) as any as S.Schema<DescribeReplicationInstancesResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReplicationInstances",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeReplicationInstanceTaskLogsError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Returns information about the task logs for the specified task.
 */
export const describeReplicationInstanceTaskLogs: API.PaginatedOperationMethod<
  DescribeReplicationInstanceTaskLogsMessage,
  DescribeReplicationInstanceTaskLogsResponse,
  DescribeReplicationInstanceTaskLogsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(263, __c32, 7) as any as S.Schema<DescribeReplicationInstanceTaskLogsMessage>,
  output: __S(266, __c33, 2) as any as S.Schema<DescribeReplicationInstanceTaskLogsResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReplicationInstanceTaskLogs",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeReplicationsError = ResourceNotFoundFault | CommonErrors;
/**
 * Provides details on replication progress by returning status information for one or more
 * provisioned DMS Serverless replications.
 */
export const describeReplications: API.PaginatedOperationMethod<
  DescribeReplicationsMessage,
  DescribeReplicationsResponse,
  DescribeReplicationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(267, __c33, 3) as any as S.Schema<DescribeReplicationsMessage>,
  output: __S(273, __c34, 1) as any as S.Schema<DescribeReplicationsResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReplications",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeReplicationSubnetGroupsError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns information about the replication subnet groups.
 */
export const describeReplicationSubnetGroups: API.PaginatedOperationMethod<
  DescribeReplicationSubnetGroupsMessage,
  DescribeReplicationSubnetGroupsResponse,
  DescribeReplicationSubnetGroupsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(274, __c34, 2) as any as S.Schema<DescribeReplicationSubnetGroupsMessage>,
  output: __S(276, __c34, 4) as any as S.Schema<DescribeReplicationSubnetGroupsResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReplicationSubnetGroups",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeReplicationTableStatisticsError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Returns table and schema statistics for one or more provisioned replications that use a
 * given DMS Serverless replication configuration.
 */
export const describeReplicationTableStatistics: API.PaginatedOperationMethod<
  DescribeReplicationTableStatisticsMessage,
  DescribeReplicationTableStatisticsResponse,
  DescribeReplicationTableStatisticsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(277, __c34, 5) as any as S.Schema<DescribeReplicationTableStatisticsMessage>,
  output: __S(280, __c35, 0) as any as S.Schema<DescribeReplicationTableStatisticsResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReplicationTableStatistics",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeReplicationTaskAssessmentResultsError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns the task assessment results from the Amazon S3 bucket that DMS creates in your
 * Amazon Web Services account. This action always returns the latest results.
 *
 * For more information about DMS task assessments, see Creating a task assessment
 * report in the *Database Migration Service User Guide*.
 */
export const describeReplicationTaskAssessmentResults: API.PaginatedOperationMethod<
  DescribeReplicationTaskAssessmentResultsMessage,
  DescribeReplicationTaskAssessmentResultsResponse,
  DescribeReplicationTaskAssessmentResultsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(281, __c35, 1) as any as S.Schema<DescribeReplicationTaskAssessmentResultsMessage>,
  output: __S(284, __c35, 4) as any as S.Schema<DescribeReplicationTaskAssessmentResultsResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReplicationTaskAssessmentResults",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeReplicationTaskAssessmentRunsError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns a paginated list of premigration assessment runs based on filter
 * settings.
 *
 * These filter settings can specify a combination of premigration assessment runs,
 * migration tasks, replication instances, and assessment run status values.
 *
 * This operation doesn't return information about individual assessments. For this
 * information, see the `DescribeReplicationTaskIndividualAssessments`
 * operation.
 */
export const describeReplicationTaskAssessmentRuns: API.PaginatedOperationMethod<
  DescribeReplicationTaskAssessmentRunsMessage,
  DescribeReplicationTaskAssessmentRunsResponse,
  DescribeReplicationTaskAssessmentRunsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(285, __c35, 5) as any as S.Schema<DescribeReplicationTaskAssessmentRunsMessage>,
  output: __S(287, __c35, 7) as any as S.Schema<DescribeReplicationTaskAssessmentRunsResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReplicationTaskAssessmentRuns",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeReplicationTaskIndividualAssessmentsError =
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Returns a paginated list of individual assessments based on filter settings.
 *
 * These filter settings can specify a combination of premigration assessment runs,
 * migration tasks, and assessment status values.
 */
export const describeReplicationTaskIndividualAssessments: API.PaginatedOperationMethod<
  DescribeReplicationTaskIndividualAssessmentsMessage,
  DescribeReplicationTaskIndividualAssessmentsResponse,
  DescribeReplicationTaskIndividualAssessmentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(288, __c36, 0) as any as S.Schema<DescribeReplicationTaskIndividualAssessmentsMessage>,
  output: __S(
    291,
    __c36,
    3,
  ) as any as S.Schema<DescribeReplicationTaskIndividualAssessmentsResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReplicationTaskIndividualAssessments",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeReplicationTasksError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns information about replication tasks for your account in the current
 * region.
 */
export const describeReplicationTasks: API.PaginatedOperationMethod<
  DescribeReplicationTasksMessage,
  DescribeReplicationTasksResponse,
  DescribeReplicationTasksError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(292, __c36, 4) as any as S.Schema<DescribeReplicationTasksMessage>,
  output: __S(294, __c36, 6) as any as S.Schema<DescribeReplicationTasksResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReplicationTasks",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeSchemasError = InvalidResourceStateFault | ResourceNotFoundFault | CommonErrors;
/**
 * Returns information about the schema for the specified endpoint.
 */
export const describeSchemas: API.PaginatedOperationMethod<
  DescribeSchemasMessage,
  DescribeSchemasResponse,
  DescribeSchemasError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(295, __c36, 7) as any as S.Schema<DescribeSchemasMessage>,
  output: __S(296, __c37, 0) as any as S.Schema<DescribeSchemasResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSchemas",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type DescribeTableStatisticsError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Returns table statistics on the database migration task, including table name, rows
 * inserted, rows updated, and rows deleted.
 *
 * Note that the "last updated" column the DMS console only indicates the time that DMS
 * last updated the table statistics record for a table. It does not indicate the time of the
 * last update to the table.
 */
export const describeTableStatistics: API.PaginatedOperationMethod<
  DescribeTableStatisticsMessage,
  DescribeTableStatisticsResponse,
  DescribeTableStatisticsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(297, __c37, 1) as any as S.Schema<DescribeTableStatisticsMessage>,
  output: __S(298, __c37, 2) as any as S.Schema<DescribeTableStatisticsResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTableStatistics",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxRecords" } as const,
})) as any;

export type ExportMetadataModelAssessmentError = ResourceNotFoundFault | CommonErrors;
/**
 * Saves a copy of a database migration assessment report to your Amazon S3 bucket. DMS can
 * save your assessment report as a comma-separated value (CSV) or a PDF file.
 *
 * **Required permissions:**
 * `dms:ExportMetadataModelAssessment`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const exportMetadataModelAssessment: API.OperationMethod<
  ExportMetadataModelAssessmentMessage,
  ExportMetadataModelAssessmentResponse,
  ExportMetadataModelAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(300, __c37, 4) as any as S.Schema<ExportMetadataModelAssessmentMessage>,
  output: __S(302, __c37, 6) as any as S.Schema<ExportMetadataModelAssessmentResponse>,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExportMetadataModelAssessment",
}));

export type GetTargetSelectionRulesError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Converts source selection rules into their target counterparts for schema conversion operations.
 *
 * **Required permissions:**
 * `dms:GetTargetSelectionRules`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const getTargetSelectionRules: API.OperationMethod<
  GetTargetSelectionRulesMessage,
  GetTargetSelectionRulesResponse,
  GetTargetSelectionRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(303, __c37, 7) as any as S.Schema<GetTargetSelectionRulesMessage>,
  output: __S(304, __c38, 0) as any as S.Schema<GetTargetSelectionRulesResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTargetSelectionRules",
}));

export type ImportCertificateError =
  | InvalidCertificateFault
  | KMSKeyNotAccessibleFault
  | ResourceAlreadyExistsFault
  | ResourceQuotaExceededFault
  | CommonErrors;
/**
 * Uploads the specified certificate.
 */
export const importCertificate: API.OperationMethod<
  ImportCertificateMessage,
  ImportCertificateResponse,
  ImportCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(305, __c38, 1) as any as S.Schema<ImportCertificateMessage>,
  output: __S(119, __c14, 7) as any as S.Schema<ImportCertificateResponse>,
  errors: [
    InvalidCertificateFault,
    KMSKeyNotAccessibleFault,
    ResourceAlreadyExistsFault,
    ResourceQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportCertificate",
}));

export type ListTagsForResourceError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Lists all metadata tags attached to an DMS resource, including replication instance,
 * endpoint, subnet group, and migration task. For more information, see
 * `Tag`
 *
 * data type description.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceMessage,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(306, __c38, 2) as any as S.Schema<ListTagsForResourceMessage>,
  output: __S(307, __c38, 3) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ModifyConversionConfigurationError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Modifies the specified schema conversion configuration using the provided parameters.
 *
 * **Required permissions:**
 * `dms:UpdateConversionConfiguration`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const modifyConversionConfiguration: API.OperationMethod<
  ModifyConversionConfigurationMessage,
  ModifyConversionConfigurationResponse,
  ModifyConversionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(308, __c38, 4) as any as S.Schema<ModifyConversionConfigurationMessage>,
  output: __S(309, __c38, 5) as any as S.Schema<ModifyConversionConfigurationResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyConversionConfiguration",
}));

export type ModifyDataMigrationError =
  | FailedDependencyFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Modifies an existing DMS data migration.
 */
export const modifyDataMigration: API.OperationMethod<
  ModifyDataMigrationMessage,
  ModifyDataMigrationResponse,
  ModifyDataMigrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(310, __c38, 6) as any as S.Schema<ModifyDataMigrationMessage>,
  output: __S(39, __c4, 7) as any as S.Schema<ModifyDataMigrationResponse>,
  errors: [FailedDependencyFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyDataMigration",
}));

export type ModifyDataProviderError =
  | AccessDeniedFault
  | FailedDependencyFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Modifies the specified data provider using the provided settings.
 *
 * **Required permissions:**
 * `dms:UpdateDataProvider`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 *
 * You must remove the data provider from all migration projects before you can modify
 * it.
 */
export const modifyDataProvider: API.OperationMethod<
  ModifyDataProviderMessage,
  ModifyDataProviderResponse,
  ModifyDataProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(311, __c38, 7) as any as S.Schema<ModifyDataProviderMessage>,
  output: __S(51, __c6, 3) as any as S.Schema<ModifyDataProviderResponse>,
  errors: [
    AccessDeniedFault,
    FailedDependencyFault,
    InvalidResourceStateFault,
    ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyDataProvider",
}));

export type ModifyEndpointError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Modifies the specified endpoint.
 *
 * For a MySQL source or target endpoint, don't explicitly specify the database using
 * the `DatabaseName` request parameter on the `ModifyEndpoint` API
 * call. Specifying `DatabaseName` when you modify a MySQL endpoint replicates
 * all the task tables to this single database. For MySQL endpoints, you specify the
 * database only when you specify the schema in the table-mapping rules of the DMS
 * task.
 */
export const modifyEndpoint: API.OperationMethod<
  ModifyEndpointMessage,
  ModifyEndpointResponse,
  ModifyEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(312, __c39, 0) as any as S.Schema<ModifyEndpointMessage>,
  output: __S(75, __c9, 3) as any as S.Schema<ModifyEndpointResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyEndpoint",
}));

export type ModifyEventSubscriptionError =
  | AccessDeniedFault
  | KMSAccessDeniedFault
  | KMSDisabledFault
  | KMSInvalidStateFault
  | KMSNotFoundFault
  | KMSThrottlingFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | SNSInvalidTopicFault
  | SNSNoAuthorizationFault
  | CommonErrors;
/**
 * Modifies an existing DMS event notification subscription.
 */
export const modifyEventSubscription: API.OperationMethod<
  ModifyEventSubscriptionMessage,
  ModifyEventSubscriptionResponse,
  ModifyEventSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(313, __c39, 1) as any as S.Schema<ModifyEventSubscriptionMessage>,
  output: __S(80, __c10, 0) as any as S.Schema<ModifyEventSubscriptionResponse>,
  errors: [
    AccessDeniedFault,
    KMSAccessDeniedFault,
    KMSDisabledFault,
    KMSInvalidStateFault,
    KMSNotFoundFault,
    KMSThrottlingFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
    SNSInvalidTopicFault,
    SNSNoAuthorizationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyEventSubscription",
}));

export type ModifyInstanceProfileError =
  | AccessDeniedFault
  | FailedDependencyFault
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceNotFoundFault
  | S3AccessDeniedFault
  | S3ResourceNotFoundFault
  | CommonErrors;
/**
 * Modifies the specified instance profile using the provided parameters.
 *
 * **Required permissions:**
 * `dms:UpdateInstanceProfile`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 *
 * All migration projects associated with the instance profile must be deleted or
 * modified before you can modify the instance profile.
 */
export const modifyInstanceProfile: API.OperationMethod<
  ModifyInstanceProfileMessage,
  ModifyInstanceProfileResponse,
  ModifyInstanceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(314, __c39, 2) as any as S.Schema<ModifyInstanceProfileMessage>,
  output: __S(85, __c10, 5) as any as S.Schema<ModifyInstanceProfileResponse>,
  errors: [
    AccessDeniedFault,
    FailedDependencyFault,
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceNotFoundFault,
    S3AccessDeniedFault,
    S3ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyInstanceProfile",
}));

export type ModifyMigrationProjectError =
  | AccessDeniedFault
  | FailedDependencyFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | S3AccessDeniedFault
  | S3ResourceNotFoundFault
  | CommonErrors;
/**
 * Modifies the specified migration project using the provided parameters.
 *
 * **Required permissions:**
 * `dms:UpdateMigrationProject`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 *
 * The migration project must be closed before you can modify it.
 */
export const modifyMigrationProject: API.OperationMethod<
  ModifyMigrationProjectMessage,
  ModifyMigrationProjectResponse,
  ModifyMigrationProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(315, __c39, 3) as any as S.Schema<ModifyMigrationProjectMessage>,
  output: __S(93, __c11, 5) as any as S.Schema<ModifyMigrationProjectResponse>,
  errors: [
    AccessDeniedFault,
    FailedDependencyFault,
    InvalidResourceStateFault,
    ResourceNotFoundFault,
    S3AccessDeniedFault,
    S3ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyMigrationProject",
}));

export type ModifyReplicationConfigError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | InvalidSubnet
  | KMSKeyNotAccessibleFault
  | ReplicationSubnetGroupDoesNotCoverEnoughAZs
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Modifies an existing DMS Serverless replication configuration that you can use to
 * start a replication. This command includes input validation and logic to check the state of
 * any replication that uses this configuration. You can only modify a replication
 * configuration before any replication that uses it has started. As soon as you have
 * initially started a replication with a given configuiration, you can't modify that
 * configuration, even if you stop it.
 *
 * Other run statuses that allow you to run this command include FAILED and CREATED. A
 * provisioning state that allows you to run this command is FAILED_PROVISION.
 */
export const modifyReplicationConfig: API.OperationMethod<
  ModifyReplicationConfigMessage,
  ModifyReplicationConfigResponse,
  ModifyReplicationConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(316, __c39, 4) as any as S.Schema<ModifyReplicationConfigMessage>,
  output: __S(97, __c12, 1) as any as S.Schema<ModifyReplicationConfigResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    InvalidSubnet,
    KMSKeyNotAccessibleFault,
    ReplicationSubnetGroupDoesNotCoverEnoughAZs,
    ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyReplicationConfig",
}));

export type ModifyReplicationInstanceError =
  | AccessDeniedFault
  | InsufficientResourceCapacityFault
  | InvalidResourceStateFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | StorageQuotaExceededFault
  | UpgradeDependencyFailureFault
  | CommonErrors;
/**
 * Modifies the replication instance to apply new settings. You can change one or more
 * parameters by specifying these parameters and the new values in the request.
 *
 * Some settings are applied during the maintenance window.
 */
export const modifyReplicationInstance: API.OperationMethod<
  ModifyReplicationInstanceMessage,
  ModifyReplicationInstanceResponse,
  ModifyReplicationInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(317, __c39, 5) as any as S.Schema<ModifyReplicationInstanceMessage>,
  output: __S(109, __c13, 5) as any as S.Schema<ModifyReplicationInstanceResponse>,
  errors: [
    AccessDeniedFault,
    InsufficientResourceCapacityFault,
    InvalidResourceStateFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    StorageQuotaExceededFault,
    UpgradeDependencyFailureFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyReplicationInstance",
}));

export type ModifyReplicationSubnetGroupError =
  | AccessDeniedFault
  | InvalidSubnet
  | ReplicationSubnetGroupDoesNotCoverEnoughAZs
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | SubnetAlreadyInUse
  | CommonErrors;
/**
 * Modifies the settings for the specified replication subnet group.
 */
export const modifyReplicationSubnetGroup: API.OperationMethod<
  ModifyReplicationSubnetGroupMessage,
  ModifyReplicationSubnetGroupResponse,
  ModifyReplicationSubnetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(318, __c39, 6) as any as S.Schema<ModifyReplicationSubnetGroupMessage>,
  output: __S(112, __c14, 0) as any as S.Schema<ModifyReplicationSubnetGroupResponse>,
  errors: [
    AccessDeniedFault,
    InvalidSubnet,
    ReplicationSubnetGroupDoesNotCoverEnoughAZs,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
    SubnetAlreadyInUse,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyReplicationSubnetGroup",
}));

export type ModifyReplicationTaskError =
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Modifies the specified replication task.
 *
 * You can't modify the task endpoints. The task must be stopped before you can modify it.
 *
 * For more information about DMS tasks, see Working with Migration Tasks in the
 * *Database Migration Service User Guide*.
 */
export const modifyReplicationTask: API.OperationMethod<
  ModifyReplicationTaskMessage,
  ModifyReplicationTaskResponse,
  ModifyReplicationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(319, __c39, 7) as any as S.Schema<ModifyReplicationTaskMessage>,
  output: __S(116, __c14, 4) as any as S.Schema<ModifyReplicationTaskResponse>,
  errors: [
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyReplicationTask",
}));

export type MoveReplicationTaskError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | CommonErrors;
/**
 * Moves a replication task from its current replication instance to a different target
 * replication instance using the specified parameters. The target replication instance must
 * be created with the same or later DMS version as the current replication instance.
 */
export const moveReplicationTask: API.OperationMethod<
  MoveReplicationTaskMessage,
  MoveReplicationTaskResponse,
  MoveReplicationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(320, __c40, 0) as any as S.Schema<MoveReplicationTaskMessage>,
  output: __S(116, __c14, 4) as any as S.Schema<MoveReplicationTaskResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "MoveReplicationTask",
}));

export type RebootReplicationInstanceError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Reboots a replication instance. Rebooting results in a momentary outage, until the
 * replication instance becomes available again.
 */
export const rebootReplicationInstance: API.OperationMethod<
  RebootReplicationInstanceMessage,
  RebootReplicationInstanceResponse,
  RebootReplicationInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(321, __c40, 1) as any as S.Schema<RebootReplicationInstanceMessage>,
  output: __S(109, __c13, 5) as any as S.Schema<RebootReplicationInstanceResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RebootReplicationInstance",
}));

export type RefreshSchemasError =
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | CommonErrors;
/**
 * Populates the schema for the specified endpoint. This is an asynchronous operation and
 * can take several minutes. You can check the status of this operation by calling the
 * DescribeRefreshSchemasStatus operation.
 */
export const refreshSchemas: API.OperationMethod<
  RefreshSchemasMessage,
  RefreshSchemasResponse,
  RefreshSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(322, __c40, 2) as any as S.Schema<RefreshSchemasMessage>,
  output: __S(323, __c40, 3) as any as S.Schema<RefreshSchemasResponse>,
  errors: [
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RefreshSchemas",
}));

export type ReloadReplicationTablesError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Reloads the target database table with the source data for a given DMS Serverless
 * replication configuration.
 *
 * You can only use this operation with a task in the RUNNING state, otherwise the service
 * will throw an `InvalidResourceStateFault` exception.
 */
export const reloadReplicationTables: API.OperationMethod<
  ReloadReplicationTablesMessage,
  ReloadReplicationTablesResponse,
  ReloadReplicationTablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(326, __c40, 6) as any as S.Schema<ReloadReplicationTablesMessage>,
  output: __S(327, __c40, 7) as any as S.Schema<ReloadReplicationTablesResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ReloadReplicationTables",
}));

export type ReloadTablesError = InvalidResourceStateFault | ResourceNotFoundFault | CommonErrors;
/**
 * Reloads the target database table with the source data.
 *
 * You can only use this operation with a task in the `RUNNING` state, otherwise
 * the service will throw an `InvalidResourceStateFault` exception.
 */
export const reloadTables: API.OperationMethod<
  ReloadTablesMessage,
  ReloadTablesResponse,
  ReloadTablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(328, __c41, 0) as any as S.Schema<ReloadTablesMessage>,
  output: __S(329, __c41, 1) as any as S.Schema<ReloadTablesResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ReloadTables",
}));

export type RemoveTagsFromResourceError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Removes metadata tags from an DMS resource, including replication instance, endpoint,
 * subnet group, and migration task. For more information, see
 * `Tag`
 * data type
 * description.
 */
export const removeTagsFromResource: API.OperationMethod<
  RemoveTagsFromResourceMessage,
  RemoveTagsFromResourceResponse,
  RemoveTagsFromResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(330, __c41, 2) as any as S.Schema<RemoveTagsFromResourceMessage>,
  output: __S(3, __c0, 3) as any as S.Schema<RemoveTagsFromResourceResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveTagsFromResource",
}));

export type RunFleetAdvisorLsaAnalysisError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support.
 *
 * Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.
 */
export const runFleetAdvisorLsaAnalysis: API.OperationMethod<
  RunFleetAdvisorLsaAnalysisRequest,
  RunFleetAdvisorLsaAnalysisResponse,
  RunFleetAdvisorLsaAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(331, __c41, 3) as any as S.Schema<RunFleetAdvisorLsaAnalysisRequest>,
  output: __S(332, __c41, 4) as any as S.Schema<RunFleetAdvisorLsaAnalysisResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RunFleetAdvisorLsaAnalysis",
}));

export type StartDataMigrationError =
  | FailedDependencyFault
  | InvalidOperationFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | CommonErrors;
/**
 * Starts the specified data migration.
 */
export const startDataMigration: API.OperationMethod<
  StartDataMigrationMessage,
  StartDataMigrationResponse,
  StartDataMigrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(333, __c41, 5) as any as S.Schema<StartDataMigrationMessage>,
  output: __S(39, __c4, 7) as any as S.Schema<StartDataMigrationResponse>,
  errors: [
    FailedDependencyFault,
    InvalidOperationFault,
    InvalidResourceStateFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDataMigration",
}));

export type StartExtensionPackAssociationError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | S3AccessDeniedFault
  | S3ResourceNotFoundFault
  | CommonErrors;
/**
 * Queues the installation of the extension pack on your target database. If other
 * requests created by `Start*` operations are already in the migration project's
 * queue, the installation begins after they complete.
 *
 * This operation requires a non-virtual target data provider.
 *
 * If the extension pack already exists, the operation reinstalls it. To ensure
 * compatibility, reconvert your database objects if the version has changed since your last
 * conversion. For more information, see Using extension packs in DMS Schema Conversion.
 *
 * To check the status of the request, call
 * DescribeExtensionPackAssociations using the returned
 * `RequestIdentifier` as a filter.
 *
 * **Required permissions:**
 * `dms:AssociateExtensionPack`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const startExtensionPackAssociation: API.OperationMethod<
  StartExtensionPackAssociationMessage,
  StartExtensionPackAssociationResponse,
  StartExtensionPackAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(334, __c41, 6) as any as S.Schema<StartExtensionPackAssociationMessage>,
  output: __S(335, __c41, 7) as any as S.Schema<StartExtensionPackAssociationResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
    S3AccessDeniedFault,
    S3ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartExtensionPackAssociation",
}));

export type StartMetadataModelAssessmentError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | S3AccessDeniedFault
  | S3ResourceNotFoundFault
  | CommonErrors;
/**
 * Queues an assessment of the selected source metadata models (database objects such as
 * tables, views, and procedures) to evaluate conversion complexity to the target database
 * format. If other requests created by `Start*` operations are already in the
 * migration project's queue, the assessment begins after they complete.
 *
 * The assessment request loads metadata models that are not yet in the metadata tree, but
 * does not reload metadata models that are already present. If your source database has
 * changed since the metadata was loaded, refresh the affected metadata models with
 * StartMetadataModelImport before calling this operation.
 *
 * To check the status of the assessment request, call
 * DescribeMetadataModelAssessments using the returned
 * `RequestIdentifier` as a filter.
 *
 * To export the conversion assessment report after the request completes successfully,
 * call ExportMetadataModelAssessment.
 *
 * **Required permissions:**
 * `dms:StartMetadataModelAssessment`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const startMetadataModelAssessment: API.OperationMethod<
  StartMetadataModelAssessmentMessage,
  StartMetadataModelAssessmentResponse,
  StartMetadataModelAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(336, __c42, 0) as any as S.Schema<StartMetadataModelAssessmentMessage>,
  output: __S(335, __c41, 7) as any as S.Schema<StartMetadataModelAssessmentResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
    S3AccessDeniedFault,
    S3ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMetadataModelAssessment",
}));

export type StartMetadataModelConversionError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | S3AccessDeniedFault
  | S3ResourceNotFoundFault
  | CommonErrors;
/**
 * Queues a conversion of the selected source metadata models (database objects such as
 * tables, views, and procedures) to the target database format. If other requests created
 * by `Start*` operations are already in the migration project's queue, the
 * conversion begins after they complete.
 *
 * The conversion request loads metadata models that are not yet in the metadata tree, but
 * does not reload metadata models that are already present. If your source database has
 * changed since the metadata was loaded, refresh the affected metadata models with
 * StartMetadataModelImport before calling this operation.
 *
 * If converted objects already exist in the target metadata tree, the conversion
 * overwrites them, including any manual edits.
 *
 * To check the status of the conversion request, call
 * DescribeMetadataModelConversions using the returned
 * `RequestIdentifier` as a filter.
 *
 * To cancel a queued or in-progress request, call
 * CancelMetadataModelConversion with the returned
 * `RequestIdentifier`.
 *
 * After the conversion completes successfully:
 *
 * - To export a post-conversion assessment report, call
 * ExportMetadataModelAssessment.
 *
 * - To retrieve converted code, use any of the following
 * options:
 *
 * - DescribeMetadataModel and
 * DescribeMetadataModelChildren - navigate the target metadata
 * tree and retrieve converted definitions.
 *
 * - StartMetadataModelExportAsScript - export as data definition
 * language (DDL) scripts to your Amazon S3 bucket.
 *
 * - StartMetadataModelExportToTarget - apply directly to your
 * target database.
 *
 * **Required permissions:**
 * `dms:StartMetadataModelConversion`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const startMetadataModelConversion: API.OperationMethod<
  StartMetadataModelConversionMessage,
  StartMetadataModelConversionResponse,
  StartMetadataModelConversionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(337, __c42, 1) as any as S.Schema<StartMetadataModelConversionMessage>,
  output: __S(335, __c41, 7) as any as S.Schema<StartMetadataModelConversionResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
    S3AccessDeniedFault,
    S3ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMetadataModelConversion",
}));

export type StartMetadataModelCreationError =
  | AccessDeniedFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | CommonErrors;
/**
 * Queues the creation of a metadata model in the source metadata tree. If other requests
 * created by `Start*` operations are already in the migration project's queue, the
 * creation begins after they complete.
 *
 * This operation supports only Microsoft SQL Server to Aurora PostgreSQL and
 * Microsoft SQL Server to Amazon RDS for PostgreSQL conversion paths.
 *
 * To check the status of the creation request, call
 * DescribeMetadataModelCreations using the returned
 * `RequestIdentifier` as a filter.
 *
 * To cancel a queued or in-progress request, call
 * CancelMetadataModelCreation with the returned
 * `RequestIdentifier`.
 *
 * Calling
 * StartMetadataModelImport with `Refresh` deletes metadata models
 * created by this operation.
 *
 * After the creation completes successfully:
 *
 * - To evaluate conversion complexity, call
 * StartMetadataModelAssessment.
 *
 * - To convert to the target database format, call
 * StartMetadataModelConversion.
 *
 * **Required permissions:**
 * `dms:StartMetadataModelCreation`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const startMetadataModelCreation: API.OperationMethod<
  StartMetadataModelCreationMessage,
  StartMetadataModelCreationResponse,
  StartMetadataModelCreationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(340, __c42, 4) as any as S.Schema<StartMetadataModelCreationMessage>,
  output: __S(335, __c41, 7) as any as S.Schema<StartMetadataModelCreationResponse>,
  errors: [
    AccessDeniedFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMetadataModelCreation",
}));

export type StartMetadataModelExportAsScriptError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | S3AccessDeniedFault
  | S3ResourceNotFoundFault
  | CommonErrors;
/**
 * Queues an export of metadata models (database objects such as tables, views, and
 * procedures) as a data definition language (DDL) script. The script is stored as a ZIP
 * archive in the Amazon S3 bucket associated with the migration project. If other requests
 * created by `Start*` operations are already in the migration project's queue,
 * the export begins after they complete.
 *
 * When exporting from the target metadata tree, the export applies only to metadata
 * models created by conversion. Metadata models imported from the database are
 * skipped.
 *
 * To check the status of the export request, call
 * DescribeMetadataModelExportsAsScript using the returned
 * `RequestIdentifier` as a filter.
 *
 * **Required permissions:**
 * `dms:StartMetadataModelExportAsScripts`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const startMetadataModelExportAsScript: API.OperationMethod<
  StartMetadataModelExportAsScriptMessage,
  StartMetadataModelExportAsScriptResponse,
  StartMetadataModelExportAsScriptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(341, __c42, 5) as any as S.Schema<StartMetadataModelExportAsScriptMessage>,
  output: __S(335, __c41, 7) as any as S.Schema<StartMetadataModelExportAsScriptResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
    S3AccessDeniedFault,
    S3ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMetadataModelExportAsScript",
}));

export type StartMetadataModelExportToTargetError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | S3AccessDeniedFault
  | S3ResourceNotFoundFault
  | CommonErrors;
/**
 * Queues an export of the selected converted metadata models (database objects such as
 * tables, views, and procedures) to your target database. If other requests created by
 * `Start*` operations are already in the migration project's queue, the export
 * begins after they complete.
 *
 * This operation requires a non-virtual target data provider.
 *
 * The export applies only metadata models created by conversion. Metadata models
 * imported from the database are skipped.
 *
 * If objects with the same name already exist on the target database, the export
 * overwrites them.
 *
 * The operation installs the extension pack on the target database. For more
 * information, see Using extension packs in DMS Schema Conversion.
 *
 * To check the status of the export request, call
 * DescribeMetadataModelExportsToTarget using the returned
 * `RequestIdentifier` as a filter.
 *
 * **Required permissions:**
 * `dms:StartMetadataModelExportToTarget`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const startMetadataModelExportToTarget: API.OperationMethod<
  StartMetadataModelExportToTargetMessage,
  StartMetadataModelExportToTargetResponse,
  StartMetadataModelExportToTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(342, __c42, 6) as any as S.Schema<StartMetadataModelExportToTargetMessage>,
  output: __S(335, __c41, 7) as any as S.Schema<StartMetadataModelExportToTargetResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
    S3AccessDeniedFault,
    S3ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMetadataModelExportToTarget",
}));

export type StartMetadataModelImportError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | S3AccessDeniedFault
  | S3ResourceNotFoundFault
  | CommonErrors;
/**
 * Queues an import of metadata models (database objects such as tables, views, and
 * procedures) from your data provider into the metadata tree. If other requests created
 * by `Start*` operations are already in the migration project's queue, the
 * import begins after they complete.
 *
 * To check the status of the import request, call
 * DescribeMetadataModelImports using the returned
 * `RequestIdentifier` as a filter.
 *
 * **Required permissions:**
 * `dms:StartMetadataModelImport`. For more information, see
 * Actions, resources, and condition keys for Database Migration Service.
 */
export const startMetadataModelImport: API.OperationMethod<
  StartMetadataModelImportMessage,
  StartMetadataModelImportResponse,
  StartMetadataModelImportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(343, __c42, 7) as any as S.Schema<StartMetadataModelImportMessage>,
  output: __S(335, __c41, 7) as any as S.Schema<StartMetadataModelImportResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
    S3AccessDeniedFault,
    S3ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMetadataModelImport",
}));

export type StartRecommendationsError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support.
 *
 * Starts the analysis of your source database to provide recommendations of target
 * engines.
 *
 * You can create recommendations for multiple source databases using BatchStartRecommendations.
 */
export const startRecommendations: API.OperationMethod<
  StartRecommendationsRequest,
  StartRecommendationsResponse,
  StartRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(344, __c43, 0) as any as S.Schema<StartRecommendationsRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<StartRecommendationsResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartRecommendations",
}));

export type StartReplicationError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * For a given DMS Serverless replication configuration, DMS connects to the source
 * endpoint and collects the metadata to analyze the replication workload. Using this
 * metadata, DMS then computes and provisions the required capacity and starts replicating
 * to the target endpoint using the server resources that DMS has provisioned for the DMS
 * Serverless replication.
 */
export const startReplication: API.OperationMethod<
  StartReplicationMessage,
  StartReplicationResponse,
  StartReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(345, __c43, 1) as any as S.Schema<StartReplicationMessage>,
  output: __S(346, __c43, 2) as any as S.Schema<StartReplicationResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartReplication",
}));

export type StartReplicationTaskError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Starts the replication task.
 *
 * For more information about DMS tasks, see Working with Migration Tasks in the
 * *Database Migration Service User Guide.*
 */
export const startReplicationTask: API.OperationMethod<
  StartReplicationTaskMessage,
  StartReplicationTaskResponse,
  StartReplicationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(347, __c43, 3) as any as S.Schema<StartReplicationTaskMessage>,
  output: __S(116, __c14, 4) as any as S.Schema<StartReplicationTaskResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartReplicationTask",
}));

export type StartReplicationTaskAssessmentError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Starts the replication task assessment for unsupported data types in the source
 * database.
 *
 * You can only use this operation for a task if the following conditions are true:
 *
 * - The task must be in the `stopped` state.
 *
 * - The task must have successful connections to the source and target.
 *
 * If either of these conditions are not met, an `InvalidResourceStateFault`
 * error will result.
 *
 * For information about DMS task assessments, see Creating a task assessment report in the Database Migration Service User
 * Guide.
 */
export const startReplicationTaskAssessment: API.OperationMethod<
  StartReplicationTaskAssessmentMessage,
  StartReplicationTaskAssessmentResponse,
  StartReplicationTaskAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(348, __c43, 4) as any as S.Schema<StartReplicationTaskAssessmentMessage>,
  output: __S(116, __c14, 4) as any as S.Schema<StartReplicationTaskAssessmentResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartReplicationTaskAssessment",
}));

export type StartReplicationTaskAssessmentRunError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | KMSAccessDeniedFault
  | KMSDisabledFault
  | KMSFault
  | KMSInvalidStateFault
  | KMSKeyNotAccessibleFault
  | KMSNotFoundFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | S3AccessDeniedFault
  | S3ResourceNotFoundFault
  | CommonErrors;
/**
 * Starts a new premigration assessment run for one or more individual assessments of a
 * migration task.
 *
 * The assessments that you can specify depend on the source and target database engine and
 * the migration type defined for the given task. To run this operation, your migration task
 * must already be created. After you run this operation, you can review the status of each
 * individual assessment. You can also run the migration task manually after the assessment
 * run and its individual assessments complete.
 */
export const startReplicationTaskAssessmentRun: API.OperationMethod<
  StartReplicationTaskAssessmentRunMessage,
  StartReplicationTaskAssessmentRunResponse,
  StartReplicationTaskAssessmentRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(349, __c43, 5) as any as S.Schema<StartReplicationTaskAssessmentRunMessage>,
  output: __S(29, __c3, 5) as any as S.Schema<StartReplicationTaskAssessmentRunResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    KMSAccessDeniedFault,
    KMSDisabledFault,
    KMSFault,
    KMSInvalidStateFault,
    KMSKeyNotAccessibleFault,
    KMSNotFoundFault,
    ResourceAlreadyExistsFault,
    ResourceNotFoundFault,
    S3AccessDeniedFault,
    S3ResourceNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartReplicationTaskAssessmentRun",
}));

export type StopDataMigrationError =
  | FailedDependencyFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Stops the specified data migration.
 */
export const stopDataMigration: API.OperationMethod<
  StopDataMigrationMessage,
  StopDataMigrationResponse,
  StopDataMigrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(350, __c43, 6) as any as S.Schema<StopDataMigrationMessage>,
  output: __S(39, __c4, 7) as any as S.Schema<StopDataMigrationResponse>,
  errors: [FailedDependencyFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopDataMigration",
}));

export type StopReplicationError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * For a given DMS Serverless replication configuration, DMS stops any and all ongoing
 * DMS Serverless replications. This command doesn't deprovision the stopped
 * replications.
 */
export const stopReplication: API.OperationMethod<
  StopReplicationMessage,
  StopReplicationResponse,
  StopReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(351, __c43, 7) as any as S.Schema<StopReplicationMessage>,
  output: __S(346, __c43, 2) as any as S.Schema<StopReplicationResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopReplication",
}));

export type StopReplicationTaskError =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Stops the replication task.
 */
export const stopReplicationTask: API.OperationMethod<
  StopReplicationTaskMessage,
  StopReplicationTaskResponse,
  StopReplicationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(352, __c44, 0) as any as S.Schema<StopReplicationTaskMessage>,
  output: __S(116, __c14, 4) as any as S.Schema<StopReplicationTaskResponse>,
  errors: [InvalidResourceStateFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopReplicationTask",
}));

export type TestConnectionError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceNotFoundFault
  | ResourceQuotaExceededFault
  | CommonErrors;
/**
 * Tests the connection between the replication instance and the endpoint.
 */
export const testConnection: API.OperationMethod<
  TestConnectionMessage,
  TestConnectionResponse,
  TestConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(353, __c44, 1) as any as S.Schema<TestConnectionMessage>,
  output: __S(122, __c15, 2) as any as S.Schema<TestConnectionResponse>,
  errors: [
    AccessDeniedFault,
    InvalidResourceStateFault,
    KMSKeyNotAccessibleFault,
    ResourceNotFoundFault,
    ResourceQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TestConnection",
}));

export type UpdateSubscriptionsToEventBridgeError =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | CommonErrors;
/**
 * Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to
 * corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions
 * only when all your replication instance versions are 3.4.5 or higher. If any replication
 * instances are from versions earlier than 3.4.5, the operation raises an error and tells you
 * to upgrade these instances to version 3.4.5 or higher. To enable migration regardless of
 * version, set the `Force` option to true. However, if you don't upgrade instances
 * earlier than version 3.4.5, some types of events might not be available when you use Amazon
 * EventBridge.
 *
 * To call this operation, make sure that you have certain permissions added to your user
 * account. For more information, see Migrating event subscriptions to Amazon EventBridge in the
 * *Amazon Web Services Database Migration Service User Guide*.
 */
export const updateSubscriptionsToEventBridge: API.OperationMethod<
  UpdateSubscriptionsToEventBridgeMessage,
  UpdateSubscriptionsToEventBridgeResponse,
  UpdateSubscriptionsToEventBridgeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(354, __c44, 2) as any as S.Schema<UpdateSubscriptionsToEventBridgeMessage>,
  output: __S(355, __c44, 3) as any as S.Schema<UpdateSubscriptionsToEventBridgeResponse>,
  errors: [AccessDeniedFault, InvalidResourceStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSubscriptionsToEventBridge",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(S.String),
          Value: S.optional(S.String),
          ResourceArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Tag" });
    case 1:
      return S.Array(
        /*@__PURE__*/ __S(0, __c0, 0)
          .pipe(/*@__PURE__*/ T.XmlName("Tag"))
          .annotate({ identifier: "Tag" }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(1, __c0, 1) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AddTagsToResourceMessage" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddTagsToResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ReplicationInstanceArn: S.String,
          ApplyAction: S.String,
          OptInType: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ApplyPendingMaintenanceActionMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          AutoAppliedAfterDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ForcedApplyDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          OptInStatus: S.optional(S.String),
          CurrentApplyDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "PendingMaintenanceAction" });
    case 6:
      return S.Array(
        /*@__PURE__*/ __S(5, __c0, 5)
          .pipe(/*@__PURE__*/ T.XmlName("PendingMaintenanceAction"))
          .annotate({
            identifier: "PendingMaintenanceAction",
          }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.optional(S.String),
          PendingMaintenanceActionDetails: S.optional(__S(6, __c0, 6)),
        }),
      ).annotate({
        identifier: "ResourcePendingMaintenanceActions",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourcePendingMaintenanceActions: S.optional(__S(7, __c0, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "ApplyPendingMaintenanceActionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ InstanceSizingType: S.String, WorkloadType: S.String }),
      ).annotate({ identifier: "RecommendationSettings" });
    case 2:
      return S.suspend(() =>
        S.Struct({ DatabaseId: S.String, Settings: __S(9, __c1, 1) }),
      ).annotate({
        identifier: "StartRecommendationsRequestEntry",
      });
    case 3:
      return S.Array(__S(10, __c1, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ Data: S.optional(__S(11, __c1, 3)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchStartRecommendationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DatabaseId: S.optional(S.String),
          Message: S.optional(S.String),
          Code: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchStartRecommendationsErrorEntry",
      });
    case 6:
      return S.Array(__S(13, __c1, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ ErrorEntries: S.optional(__S(14, __c1, 6)) }).pipe(ns),
      ).annotate({
        identifier: "BatchStartRecommendationsResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ MigrationProjectIdentifier: S.String, RequestIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CancelMetadataModelConversionMessage",
      });
    case 1:
      return S.suspend(() => S.Struct({ Message: S.optional(S.String) })).annotate({
        identifier: "DefaultErrorDetails",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ defaultErrorDetails: __S(17, __c2, 1) })]);
    case 3:
      return S.suspend(() =>
        S.Struct({ S3ObjectKey: S.optional(S.String), ObjectURL: S.optional(S.String) }),
      ).annotate({ identifier: "ExportSqlDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: S.optional(S.String),
          EndpointType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProcessedObject" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ProgressPercent: S.optional(S.Number),
          TotalObjects: S.optional(S.Number),
          ProgressStep: S.optional(S.String),
          ProcessedObject: S.optional(__S(20, __c2, 4)),
        }),
      ).annotate({ identifier: "Progress" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          RequestIdentifier: S.optional(S.String),
          MigrationProjectArn: S.optional(S.String),
          Error: S.optional(__S(18, __c2, 2)),
          ExportSqlDetails: S.optional(__S(19, __c2, 3)),
          Progress: S.optional(__S(21, __c2, 5)),
        }),
      ).annotate({ identifier: "SchemaConversionRequest" });
    case 7:
      return S.suspend(() => S.Struct({ Request: S.optional(__S(22, __c2, 6)) }).pipe(ns)).annotate(
        {
          identifier: "CancelMetadataModelConversionResponse",
        },
      );
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ MigrationProjectIdentifier: S.String, RequestIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CancelMetadataModelCreationMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ReplicationTaskAssessmentRunArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CancelReplicationTaskAssessmentRunMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          IndividualAssessmentCount: S.optional(S.Number),
          IndividualAssessmentCompletedCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ReplicationTaskAssessmentRunProgress",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Passed: S.optional(S.Number),
          Failed: S.optional(S.Number),
          Error: S.optional(S.Number),
          Warning: S.optional(S.Number),
          Cancelled: S.optional(S.Number),
          Skipped: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ReplicationTaskAssessmentRunResultStatistic",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ReplicationTaskAssessmentRunArn: S.optional(S.String),
          ReplicationTaskArn: S.optional(S.String),
          Status: S.optional(S.String),
          ReplicationTaskAssessmentRunCreationDate: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          AssessmentProgress: S.optional(__S(26, __c3, 2)),
          LastFailureMessage: S.optional(S.String),
          ServiceAccessRoleArn: S.optional(S.String),
          ResultLocationBucket: S.optional(S.String),
          ResultLocationFolder: S.optional(S.String),
          ResultEncryptionMode: S.optional(S.String),
          ResultKmsKeyArn: S.optional(S.String),
          AssessmentRunName: S.optional(S.String),
          IsLatestTaskAssessmentRun: S.optional(S.Boolean),
          ResultStatistic: S.optional(__S(27, __c3, 3)),
        }),
      ).annotate({
        identifier: "ReplicationTaskAssessmentRun",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ReplicationTaskAssessmentRun: S.optional(__S(28, __c3, 4)) }).pipe(ns),
      ).annotate({
        identifier: "CancelReplicationTaskAssessmentRunResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CDCStartPosition: S.optional(S.String),
          CDCStartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CDCStopTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          SlotName: S.optional(S.String),
        }),
      ).annotate({ identifier: "SourceDataSetting" });
    case 7:
      return S.Array(__S(30, __c3, 6));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ TablePreparationMode: S.optional(S.String) })).annotate({
        identifier: "TargetDataSetting",
      });
    case 1:
      return S.Array(__S(32, __c4, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          DataMigrationName: S.optional(S.String),
          MigrationProjectIdentifier: S.String,
          DataMigrationType: S.String,
          ServiceAccessRoleArn: S.String,
          EnableCloudwatchLogs: S.optional(S.Boolean),
          SourceDataSettings: S.optional(__S(31, __c3, 7)),
          TargetDataSettings: S.optional(__S(33, __c4, 1)),
          NumberOfJobs: S.optional(S.Number),
          Tags: S.optional(__S(1, __c0, 1)),
          SelectionRules: S.optional(SensitiveString),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateDataMigrationMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NumberOfJobs: S.optional(S.Number),
          CloudwatchLogsEnabled: S.optional(S.Boolean),
          SelectionRules: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "DataMigrationSettings" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TablesLoaded: S.optional(S.Number),
          ElapsedTimeMillis: S.optional(S.Number),
          TablesLoading: S.optional(S.Number),
          FullLoadPercentage: S.optional(S.Number),
          CDCLatency: S.optional(S.Number),
          TablesQueued: S.optional(S.Number),
          TablesErrored: S.optional(S.Number),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          StopTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "DataMigrationStatistics" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          DataMigrationName: S.optional(S.String),
          DataMigrationArn: S.optional(S.String),
          DataMigrationCreateTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          DataMigrationStartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DataMigrationEndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ServiceAccessRoleArn: S.optional(S.String),
          MigrationProjectArn: S.optional(S.String),
          DataMigrationType: S.optional(S.String),
          DataMigrationSettings: S.optional(__S(35, __c4, 3)),
          SourceDataSettings: S.optional(__S(31, __c3, 7)),
          TargetDataSettings: S.optional(__S(33, __c4, 1)),
          DataMigrationStatistics: S.optional(__S(36, __c4, 4)),
          DataMigrationStatus: S.optional(S.String),
          PublicIpAddresses: S.optional(__S(37, __c4, 5)),
          DataMigrationCidrBlocks: S.optional(__S(37, __c4, 5)),
          LastFailureMessage: S.optional(S.String),
          StopReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataMigration" });
    case 7:
      return S.suspend(() =>
        S.Struct({ DataMigration: S.optional(__S(38, __c4, 6)) }).pipe(ns),
      ).annotate({
        identifier: "CreateDataMigrationResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ServerName: S.optional(S.String),
          Port: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          S3Path: S.optional(S.String),
          S3AccessRoleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RedshiftDataProviderSettings",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ServerName: S.optional(S.String),
          Port: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          SslMode: S.optional(S.String),
          CertificateArn: S.optional(S.String),
          S3Path: S.optional(S.String),
          S3AccessRoleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PostgreSqlDataProviderSettings",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ServerName: S.optional(S.String),
          Port: S.optional(S.Number),
          SslMode: S.optional(S.String),
          CertificateArn: S.optional(S.String),
          S3Path: S.optional(S.String),
          S3AccessRoleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MySqlDataProviderSettings",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ServerName: S.optional(S.String),
          Port: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          SslMode: S.optional(S.String),
          CertificateArn: S.optional(S.String),
          AsmServer: S.optional(S.String),
          SecretsManagerOracleAsmSecretId: S.optional(S.String),
          SecretsManagerOracleAsmAccessRoleArn: S.optional(S.String),
          SecretsManagerSecurityDbEncryptionSecretId: S.optional(S.String),
          SecretsManagerSecurityDbEncryptionAccessRoleArn: S.optional(S.String),
          S3Path: S.optional(S.String),
          S3AccessRoleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "OracleDataProviderSettings",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ServerName: S.optional(S.String),
          Port: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          SslMode: S.optional(S.String),
          EncryptPassword: S.optional(S.Boolean),
          CertificateArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SybaseAseDataProviderSettings",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServerName: S.optional(S.String),
          Port: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          SslMode: S.optional(S.String),
          CertificateArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DocDbDataProviderSettings",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ServerName: S.optional(S.String),
          Port: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          SslMode: S.optional(S.String),
          CertificateArn: S.optional(S.String),
          EncryptionAlgorithm: S.optional(S.Number),
          SecurityMechanism: S.optional(S.Number),
          S3Path: S.optional(S.String),
          S3AccessRoleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "IbmDb2LuwDataProviderSettings",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ServerName: S.optional(S.String),
          Port: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          SslMode: S.optional(S.String),
          CertificateArn: S.optional(S.String),
          AuthType: S.optional(S.String),
          AuthSource: S.optional(S.String),
          AuthMechanism: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MongoDbDataProviderSettings",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ RedshiftSettings: __S(40, __c5, 0) }),
        /*@__PURE__*/ S.Struct({ PostgreSqlSettings: __S(41, __c5, 1) }),
        /*@__PURE__*/ S.Struct({ MySqlSettings: __S(42, __c5, 2) }),
        /*@__PURE__*/ S.Struct({ OracleSettings: __S(43, __c5, 3) }),
        /*@__PURE__*/ S.Struct({ SybaseAseSettings: __S(44, __c5, 4) }),
        /*@__PURE__*/ S.Struct({
          MicrosoftSqlServerSettings: __S(41, __c5, 1),
        }),
        /*@__PURE__*/ S.Struct({ DocDbSettings: __S(45, __c5, 5) }),
        /*@__PURE__*/ S.Struct({ MariaDbSettings: __S(42, __c5, 2) }),
        /*@__PURE__*/ S.Struct({ IbmDb2LuwSettings: __S(46, __c5, 6) }),
        /*@__PURE__*/ S.Struct({ IbmDb2zOsSettings: __S(41, __c5, 1) }),
        /*@__PURE__*/ S.Struct({ MongoDbSettings: __S(47, __c5, 7) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          DataProviderName: S.optional(S.String),
          Description: S.optional(S.String),
          Engine: S.String,
          Virtual: S.optional(S.Boolean),
          Settings: __S(48, __c6, 0),
          Tags: S.optional(__S(1, __c0, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateDataProviderMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DataProviderName: S.optional(S.String),
          DataProviderArn: S.optional(S.String),
          DataProviderCreationTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          Description: S.optional(S.String),
          Engine: S.optional(S.String),
          Virtual: S.optional(S.Boolean),
          Settings: S.optional(__S(48, __c6, 0)),
        }),
      ).annotate({ identifier: "DataProvider" });
    case 3:
      return S.suspend(() =>
        S.Struct({ DataProvider: S.optional(__S(50, __c6, 2)) }).pipe(ns),
      ).annotate({
        identifier: "CreateDataProviderResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ ServiceAccessRoleArn: S.String })).annotate({
        identifier: "DynamoDbSettings",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServiceAccessRoleArn: S.optional(S.String),
          ExternalTableDefinition: S.optional(S.String),
          CsvRowDelimiter: S.optional(S.String),
          CsvDelimiter: S.optional(S.String),
          BucketFolder: S.optional(S.String),
          BucketName: S.optional(S.String),
          CompressionType: S.optional(S.String),
          EncryptionMode: S.optional(S.String),
          ServerSideEncryptionKmsKeyId: S.optional(S.String),
          DataFormat: S.optional(S.String),
          EncodingType: S.optional(S.String),
          DictPageSizeLimit: S.optional(S.Number),
          RowGroupLength: S.optional(S.Number),
          DataPageSize: S.optional(S.Number),
          ParquetVersion: S.optional(S.String),
          EnableStatistics: S.optional(S.Boolean),
          IncludeOpForFullLoad: S.optional(S.Boolean),
          CdcInsertsOnly: S.optional(S.Boolean),
          TimestampColumnName: S.optional(S.String),
          ParquetTimestampInMillisecond: S.optional(S.Boolean),
          CdcInsertsAndUpdates: S.optional(S.Boolean),
          DatePartitionEnabled: S.optional(S.Boolean),
          DatePartitionSequence: S.optional(S.String),
          DatePartitionDelimiter: S.optional(S.String),
          UseCsvNoSupValue: S.optional(S.Boolean),
          CsvNoSupValue: S.optional(S.String),
          PreserveTransactions: S.optional(S.Boolean),
          CdcPath: S.optional(S.String),
          UseTaskStartTimeForFullLoadTimestamp: S.optional(S.Boolean),
          CannedAclForObjects: S.optional(S.String),
          AddColumnName: S.optional(S.Boolean),
          CdcMaxBatchInterval: S.optional(S.Number),
          CdcMinFileSize: S.optional(S.Number),
          CsvNullValue: S.optional(S.String),
          IgnoreHeaderRows: S.optional(S.Number),
          MaxFileSize: S.optional(S.Number),
          Rfc4180: S.optional(S.Boolean),
          DatePartitionTimezone: S.optional(S.String),
          AddTrailingPaddingCharacter: S.optional(S.Boolean),
          ExpectedBucketOwner: S.optional(S.String),
          GlueCatalogGeneration: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "S3Settings" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ServiceAccessRoleArn: S.optional(S.String), BucketName: S.optional(S.String) }),
      ).annotate({ identifier: "DmsTransferSettings" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Username: S.optional(S.String),
          Password: S.optional(SensitiveString),
          ServerName: S.optional(S.String),
          Port: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          AuthType: S.optional(S.String),
          AuthMechanism: S.optional(S.String),
          NestingLevel: S.optional(S.String),
          ExtractDocId: S.optional(S.String),
          DocsToInvestigate: S.optional(S.String),
          AuthSource: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          SecretsManagerAccessRoleArn: S.optional(S.String),
          SecretsManagerSecretId: S.optional(S.String),
          UseUpdateLookUp: S.optional(S.Boolean),
          ReplicateShardCollections: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "MongoDbSettings" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StreamArn: S.optional(S.String),
          MessageFormat: S.optional(S.String),
          ServiceAccessRoleArn: S.optional(S.String),
          IncludeTransactionDetails: S.optional(S.Boolean),
          IncludePartitionValue: S.optional(S.Boolean),
          PartitionIncludeSchemaTable: S.optional(S.Boolean),
          IncludeTableAlterOperations: S.optional(S.Boolean),
          IncludeControlDetails: S.optional(S.Boolean),
          IncludeNullAndEmpty: S.optional(S.Boolean),
          NoHexPrefix: S.optional(S.Boolean),
          UseLargeIntegerValue: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "KinesisSettings" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Broker: S.optional(S.String),
          Topic: S.optional(S.String),
          MessageFormat: S.optional(S.String),
          IncludeTransactionDetails: S.optional(S.Boolean),
          IncludePartitionValue: S.optional(S.Boolean),
          PartitionIncludeSchemaTable: S.optional(S.Boolean),
          IncludeTableAlterOperations: S.optional(S.Boolean),
          IncludeControlDetails: S.optional(S.Boolean),
          MessageMaxBytes: S.optional(S.Number),
          IncludeNullAndEmpty: S.optional(S.Boolean),
          SecurityProtocol: S.optional(S.String),
          SslClientCertificateArn: S.optional(S.String),
          SslClientKeyArn: S.optional(S.String),
          SslClientKeyPassword: S.optional(SensitiveString),
          SslCaCertificateArn: S.optional(S.String),
          SaslUsername: S.optional(S.String),
          SaslPassword: S.optional(SensitiveString),
          NoHexPrefix: S.optional(S.Boolean),
          SaslMechanism: S.optional(S.String),
          SslEndpointIdentificationAlgorithm: S.optional(S.String),
          UseLargeIntegerValue: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "KafkaSettings" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ServiceAccessRoleArn: S.String,
          EndpointUri: S.String,
          FullLoadErrorPercentage: S.optional(S.Number),
          ErrorRetryDuration: S.optional(S.Number),
          UseNewMappingType: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ElasticsearchSettings" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ServiceAccessRoleArn: S.optional(S.String),
          S3BucketName: S.String,
          S3BucketFolder: S.String,
          ErrorRetryDuration: S.optional(S.Number),
          MaxFileSize: S.optional(S.Number),
          MaxRetryCount: S.optional(S.Number),
          IamAuthEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "NeptuneSettings" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AcceptAnyDate: S.optional(S.Boolean),
          AfterConnectScript: S.optional(S.String),
          BucketFolder: S.optional(S.String),
          BucketName: S.optional(S.String),
          CaseSensitiveNames: S.optional(S.Boolean),
          CompUpdate: S.optional(S.Boolean),
          ConnectionTimeout: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          DateFormat: S.optional(S.String),
          EmptyAsNull: S.optional(S.Boolean),
          EncryptionMode: S.optional(S.String),
          ExplicitIds: S.optional(S.Boolean),
          FileTransferUploadStreams: S.optional(S.Number),
          LoadTimeout: S.optional(S.Number),
          MaxFileSize: S.optional(S.Number),
          Password: S.optional(SensitiveString),
          Port: S.optional(S.Number),
          RemoveQuotes: S.optional(S.Boolean),
          ReplaceInvalidChars: S.optional(S.String),
          ReplaceChars: S.optional(S.String),
          ServerName: S.optional(S.String),
          ServiceAccessRoleArn: S.optional(S.String),
          ServerSideEncryptionKmsKeyId: S.optional(S.String),
          TimeFormat: S.optional(S.String),
          TrimBlanks: S.optional(S.Boolean),
          TruncateColumns: S.optional(S.Boolean),
          Username: S.optional(S.String),
          WriteBufferSize: S.optional(S.Number),
          SecretsManagerAccessRoleArn: S.optional(S.String),
          SecretsManagerSecretId: S.optional(S.String),
          MapBooleanAsBoolean: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "RedshiftSettings" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AfterConnectScript: S.optional(S.String),
          CaptureDdls: S.optional(S.Boolean),
          MaxFileSize: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          DdlArtifactsSchema: S.optional(S.String),
          ExecuteTimeout: S.optional(S.Number),
          FailTasksOnLobTruncation: S.optional(S.Boolean),
          HeartbeatEnable: S.optional(S.Boolean),
          HeartbeatSchema: S.optional(S.String),
          HeartbeatFrequency: S.optional(S.Number),
          Password: S.optional(SensitiveString),
          Port: S.optional(S.Number),
          ServerName: S.optional(S.String),
          Username: S.optional(S.String),
          SlotName: S.optional(S.String),
          PluginName: S.optional(S.String),
          SecretsManagerAccessRoleArn: S.optional(S.String),
          SecretsManagerSecretId: S.optional(S.String),
          TrimSpaceInChar: S.optional(S.Boolean),
          MapBooleanAsBoolean: S.optional(S.Boolean),
          MapJsonbAsClob: S.optional(S.Boolean),
          MapLongVarcharAs: S.optional(S.String),
          DatabaseMode: S.optional(S.String),
          BabelfishDatabaseName: S.optional(S.String),
          DisableUnicodeSourceFilter: S.optional(S.Boolean),
          ServiceAccessRoleArn: S.optional(S.String),
          AuthenticationMethod: S.optional(S.String),
        }),
      ).annotate({ identifier: "PostgreSQLSettings" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AfterConnectScript: S.optional(S.String),
          CleanSourceMetadataOnMismatch: S.optional(S.Boolean),
          DatabaseName: S.optional(S.String),
          EventsPollInterval: S.optional(S.Number),
          TargetDbType: S.optional(S.String),
          MaxFileSize: S.optional(S.Number),
          ParallelLoadThreads: S.optional(S.Number),
          Password: S.optional(SensitiveString),
          Port: S.optional(S.Number),
          ServerName: S.optional(S.String),
          ServerTimezone: S.optional(S.String),
          Username: S.optional(S.String),
          SecretsManagerAccessRoleArn: S.optional(S.String),
          SecretsManagerSecretId: S.optional(S.String),
          ExecuteTimeout: S.optional(S.Number),
          ServiceAccessRoleArn: S.optional(S.String),
          AuthenticationMethod: S.optional(S.String),
        }),
      ).annotate({ identifier: "MySQLSettings" });
    case 7:
      return S.Array(S.Number);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AddSupplementalLogging: S.optional(S.Boolean),
          ArchivedLogDestId: S.optional(S.Number),
          AdditionalArchivedLogDestId: S.optional(S.Number),
          ExtraArchivedLogDestIds: S.optional(__S(63, __c7, 7)),
          AllowSelectNestedTables: S.optional(S.Boolean),
          ParallelAsmReadThreads: S.optional(S.Number),
          ReadAheadBlocks: S.optional(S.Number),
          AccessAlternateDirectly: S.optional(S.Boolean),
          UseAlternateFolderForOnline: S.optional(S.Boolean),
          OraclePathPrefix: S.optional(S.String),
          UsePathPrefix: S.optional(S.String),
          ReplacePathPrefix: S.optional(S.Boolean),
          EnableHomogenousTablespace: S.optional(S.Boolean),
          DirectPathNoLog: S.optional(S.Boolean),
          ArchivedLogsOnly: S.optional(S.Boolean),
          AsmPassword: S.optional(SensitiveString),
          AsmServer: S.optional(S.String),
          AsmUser: S.optional(S.String),
          CharLengthSemantics: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          DirectPathParallelLoad: S.optional(S.Boolean),
          FailTasksOnLobTruncation: S.optional(S.Boolean),
          NumberDatatypeScale: S.optional(S.Number),
          Password: S.optional(SensitiveString),
          Port: S.optional(S.Number),
          ReadTableSpaceName: S.optional(S.Boolean),
          RetryInterval: S.optional(S.Number),
          SecurityDbEncryption: S.optional(SensitiveString),
          SecurityDbEncryptionName: S.optional(S.String),
          ServerName: S.optional(S.String),
          SpatialDataOptionToGeoJsonFunctionName: S.optional(S.String),
          StandbyDelayTime: S.optional(S.Number),
          Username: S.optional(S.String),
          UseBFile: S.optional(S.Boolean),
          UseDirectPathFullLoad: S.optional(S.Boolean),
          UseLogminerReader: S.optional(S.Boolean),
          SecretsManagerAccessRoleArn: S.optional(S.String),
          SecretsManagerSecretId: S.optional(S.String),
          SecretsManagerOracleAsmAccessRoleArn: S.optional(S.String),
          SecretsManagerOracleAsmSecretId: S.optional(S.String),
          TrimSpaceInChar: S.optional(S.Boolean),
          ConvertTimestampWithZoneToUTC: S.optional(S.Boolean),
          OpenTransactionWindow: S.optional(S.Number),
          AuthenticationMethod: S.optional(S.String),
        }),
      ).annotate({ identifier: "OracleSettings" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DatabaseName: S.optional(S.String),
          Password: S.optional(SensitiveString),
          Port: S.optional(S.Number),
          ServerName: S.optional(S.String),
          Username: S.optional(S.String),
          SecretsManagerAccessRoleArn: S.optional(S.String),
          SecretsManagerSecretId: S.optional(S.String),
        }),
      ).annotate({ identifier: "SybaseSettings" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Port: S.optional(S.Number),
          BcpPacketSize: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          ControlTablesFileGroup: S.optional(S.String),
          Password: S.optional(SensitiveString),
          QuerySingleAlwaysOnNode: S.optional(S.Boolean),
          ReadBackupOnly: S.optional(S.Boolean),
          SafeguardPolicy: S.optional(S.String),
          ServerName: S.optional(S.String),
          Username: S.optional(S.String),
          UseBcpFullLoad: S.optional(S.Boolean),
          UseThirdPartyBackupDevice: S.optional(S.Boolean),
          SecretsManagerAccessRoleArn: S.optional(S.String),
          SecretsManagerSecretId: S.optional(S.String),
          TrimSpaceInChar: S.optional(S.Boolean),
          TlogAccessMode: S.optional(S.String),
          ForceLobLookup: S.optional(S.Boolean),
          AuthenticationMethod: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MicrosoftSQLServerSettings",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DatabaseName: S.optional(S.String),
          Password: S.optional(SensitiveString),
          Port: S.optional(S.Number),
          ServerName: S.optional(S.String),
          SetDataCaptureChanges: S.optional(S.Boolean),
          CurrentLsn: S.optional(S.String),
          MaxKBytesPerRead: S.optional(S.Number),
          Username: S.optional(S.String),
          SecretsManagerAccessRoleArn: S.optional(S.String),
          SecretsManagerSecretId: S.optional(S.String),
          LoadTimeout: S.optional(S.Number),
          WriteBufferSize: S.optional(S.Number),
          MaxFileSize: S.optional(S.Number),
          KeepCsvFiles: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "IBMDb2Settings" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Username: S.optional(S.String),
          Password: S.optional(SensitiveString),
          ServerName: S.optional(S.String),
          Port: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          NestingLevel: S.optional(S.String),
          ExtractDocId: S.optional(S.Boolean),
          DocsToInvestigate: S.optional(S.Number),
          KmsKeyId: S.optional(S.String),
          SecretsManagerAccessRoleArn: S.optional(S.String),
          SecretsManagerSecretId: S.optional(S.String),
          UseUpdateLookUp: S.optional(S.Boolean),
          ReplicateShardCollections: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DocDbSettings" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServerName: S.String,
          Port: S.Number,
          SslSecurityProtocol: S.optional(S.String),
          AuthType: S.optional(S.String),
          AuthUserName: S.optional(S.String),
          AuthPassword: S.optional(SensitiveString),
          SslCaCertificateArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "RedisSettings" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AfterConnectScript: S.optional(S.String),
          CleanSourceMetadataOnMismatch: S.optional(S.Boolean),
          DatabaseName: S.optional(S.String),
          EventsPollInterval: S.optional(S.Number),
          TargetDbType: S.optional(S.String),
          MaxFileSize: S.optional(S.Number),
          ParallelLoadThreads: S.optional(S.Number),
          Password: S.optional(SensitiveString),
          Port: S.optional(S.Number),
          ServerName: S.optional(S.String),
          ServerTimezone: S.optional(S.String),
          Username: S.optional(S.String),
          SecretsManagerAccessRoleArn: S.optional(S.String),
          SecretsManagerSecretId: S.optional(S.String),
        }),
      ).annotate({ identifier: "GcpMySQLSettings" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DatabaseName: S.String,
          MemoryDuration: S.Number,
          MagneticDuration: S.Number,
          CdcInsertsAndUpdates: S.optional(S.Boolean),
          EnableMagneticStoreWrites: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "TimestreamSettings" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EndpointIdentifier: S.String,
          EndpointType: S.String,
          EngineName: S.String,
          Username: S.optional(S.String),
          Password: S.optional(SensitiveString),
          ServerName: S.optional(S.String),
          Port: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          ExtraConnectionAttributes: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          Tags: S.optional(__S(1, __c0, 1)),
          CertificateArn: S.optional(S.String),
          SslMode: S.optional(S.String),
          ServiceAccessRoleArn: S.optional(S.String),
          ExternalTableDefinition: S.optional(S.String),
          DynamoDbSettings: S.optional(__S(52, __c6, 4)),
          S3Settings: S.optional(__S(53, __c6, 5)),
          DmsTransferSettings: S.optional(__S(54, __c6, 6)),
          MongoDbSettings: S.optional(__S(55, __c6, 7)),
          KinesisSettings: S.optional(__S(56, __c7, 0)),
          KafkaSettings: S.optional(__S(57, __c7, 1)),
          ElasticsearchSettings: S.optional(__S(58, __c7, 2)),
          NeptuneSettings: S.optional(__S(59, __c7, 3)),
          RedshiftSettings: S.optional(__S(60, __c7, 4)),
          PostgreSQLSettings: S.optional(__S(61, __c7, 5)),
          MySQLSettings: S.optional(__S(62, __c7, 6)),
          OracleSettings: S.optional(__S(64, __c8, 0)),
          SybaseSettings: S.optional(__S(65, __c8, 1)),
          MicrosoftSQLServerSettings: S.optional(__S(66, __c8, 2)),
          IBMDb2Settings: S.optional(__S(67, __c8, 3)),
          ResourceIdentifier: S.optional(S.String),
          DocDbSettings: S.optional(__S(68, __c8, 4)),
          RedisSettings: S.optional(__S(69, __c8, 5)),
          GcpMySQLSettings: S.optional(__S(70, __c8, 6)),
          TimestreamSettings: S.optional(__S(71, __c8, 7)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateEndpointMessage" });
    case 1:
      return S.suspend(() => S.Struct({ Arn: S.String })).annotate({
        identifier: "LakehouseSettings",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EndpointIdentifier: S.optional(S.String),
          EndpointType: S.optional(S.String),
          EngineName: S.optional(S.String),
          EngineDisplayName: S.optional(S.String),
          Username: S.optional(S.String),
          ServerName: S.optional(S.String),
          Port: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          ExtraConnectionAttributes: S.optional(S.String),
          Status: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          EndpointArn: S.optional(S.String),
          CertificateArn: S.optional(S.String),
          SslMode: S.optional(S.String),
          ServiceAccessRoleArn: S.optional(S.String),
          ExternalTableDefinition: S.optional(S.String),
          ExternalId: S.optional(S.String),
          IsReadOnly: S.optional(S.Boolean),
          DynamoDbSettings: S.optional(__S(52, __c6, 4)),
          S3Settings: S.optional(__S(53, __c6, 5)),
          DmsTransferSettings: S.optional(__S(54, __c6, 6)),
          MongoDbSettings: S.optional(__S(55, __c6, 7)),
          KinesisSettings: S.optional(__S(56, __c7, 0)),
          KafkaSettings: S.optional(__S(57, __c7, 1)),
          ElasticsearchSettings: S.optional(__S(58, __c7, 2)),
          NeptuneSettings: S.optional(__S(59, __c7, 3)),
          RedshiftSettings: S.optional(__S(60, __c7, 4)),
          PostgreSQLSettings: S.optional(__S(61, __c7, 5)),
          MySQLSettings: S.optional(__S(62, __c7, 6)),
          OracleSettings: S.optional(__S(64, __c8, 0)),
          SybaseSettings: S.optional(__S(65, __c8, 1)),
          MicrosoftSQLServerSettings: S.optional(__S(66, __c8, 2)),
          IBMDb2Settings: S.optional(__S(67, __c8, 3)),
          DocDbSettings: S.optional(__S(68, __c8, 4)),
          RedisSettings: S.optional(__S(69, __c8, 5)),
          GcpMySQLSettings: S.optional(__S(70, __c8, 6)),
          TimestreamSettings: S.optional(__S(71, __c8, 7)),
          LakehouseSettings: S.optional(__S(73, __c9, 1)),
        }),
      ).annotate({ identifier: "Endpoint" });
    case 3:
      return S.suspend(() => S.Struct({ Endpoint: S.optional(Endpoint) }).pipe(ns)).annotate({
        identifier: "CreateEndpointResponse",
      });
    case 4:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("EventCategory")));
    case 5:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("SourceId")));
    case 6:
      return S.suspend(() =>
        S.Struct({
          SubscriptionName: S.String,
          SnsTopicArn: S.String,
          SourceType: S.optional(S.String),
          EventCategories: S.optional(__S(76, __c9, 4)),
          SourceIds: S.optional(__S(77, __c9, 5)),
          Enabled: S.optional(S.Boolean),
          Tags: S.optional(__S(1, __c0, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateEventSubscriptionMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CustomerAwsId: S.optional(S.String),
          CustSubscriptionId: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          Status: S.optional(S.String),
          SubscriptionCreationTime: S.optional(S.String),
          SourceType: S.optional(S.String),
          SourceIdsList: S.optional(__S(77, __c9, 5)),
          EventCategoriesList: S.optional(__S(76, __c9, 4)),
          Enabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "EventSubscription" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(__S(79, __c9, 7)) }).pipe(ns),
      ).annotate({
        identifier: "CreateEventSubscriptionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CollectorName: S.String,
          Description: S.optional(S.String),
          ServiceAccessRoleArn: S.String,
          S3BucketName: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateFleetAdvisorCollectorRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CollectorReferencedId: S.optional(S.String),
          CollectorName: S.optional(S.String),
          Description: S.optional(S.String),
          ServiceAccessRoleArn: S.optional(S.String),
          S3BucketName: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateFleetAdvisorCollectorResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZone: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          Tags: S.optional(__S(1, __c0, 1)),
          NetworkType: S.optional(S.String),
          InstanceProfileName: S.optional(S.String),
          Description: S.optional(S.String),
          SubnetGroupIdentifier: S.optional(S.String),
          VpcSecurityGroups: S.optional(__S(37, __c4, 5)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateInstanceProfileMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          InstanceProfileArn: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          NetworkType: S.optional(S.String),
          InstanceProfileName: S.optional(S.String),
          Description: S.optional(S.String),
          InstanceProfileCreationTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          SubnetGroupIdentifier: S.optional(S.String),
          VpcSecurityGroups: S.optional(__S(37, __c4, 5)),
        }),
      ).annotate({ identifier: "InstanceProfile" });
    case 5:
      return S.suspend(() =>
        S.Struct({ InstanceProfile: S.optional(__S(84, __c10, 4)) }).pipe(ns),
      ).annotate({
        identifier: "CreateInstanceProfileResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DataProviderIdentifier: S.String,
          SecretsManagerSecretId: S.optional(S.String),
          SecretsManagerAccessRoleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DataProviderDescriptorDefinition",
      });
    case 7:
      return S.Array(__S(86, __c10, 6));
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ S3BucketPath: S.optional(S.String), S3BucketRoleArn: S.optional(S.String) }),
      ).annotate({ identifier: "SCApplicationAttributes" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectName: S.optional(S.String),
          SourceDataProviderDescriptors: __S(87, __c10, 7),
          TargetDataProviderDescriptors: __S(87, __c10, 7),
          InstanceProfileIdentifier: S.String,
          TransformationRules: S.optional(S.String),
          Description: S.optional(S.String),
          Tags: S.optional(__S(1, __c0, 1)),
          SchemaConversionApplicationAttributes: S.optional(__S(88, __c11, 0)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateMigrationProjectMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SecretsManagerSecretId: S.optional(S.String),
          SecretsManagerAccessRoleArn: S.optional(S.String),
          DataProviderName: S.optional(S.String),
          DataProviderArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataProviderDescriptor" });
    case 3:
      return S.Array(__S(90, __c11, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectName: S.optional(S.String),
          MigrationProjectArn: S.optional(S.String),
          MigrationProjectCreationTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          SourceDataProviderDescriptors: S.optional(__S(91, __c11, 3)),
          TargetDataProviderDescriptors: S.optional(__S(91, __c11, 3)),
          InstanceProfileArn: S.optional(S.String),
          InstanceProfileName: S.optional(S.String),
          TransformationRules: S.optional(S.String),
          Description: S.optional(S.String),
          SchemaConversionApplicationAttributes: S.optional(__S(88, __c11, 0)),
        }),
      ).annotate({ identifier: "MigrationProject" });
    case 5:
      return S.suspend(() =>
        S.Struct({ MigrationProject: S.optional(__S(92, __c11, 4)) }).pipe(ns),
      ).annotate({
        identifier: "CreateMigrationProjectResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZone: S.optional(S.String),
          DnsNameServers: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          MaxCapacityUnits: S.optional(S.Number),
          MinCapacityUnits: S.optional(S.Number),
          MultiAZ: S.optional(S.Boolean),
          PreferredMaintenanceWindow: S.optional(S.String),
          ReplicationSubnetGroupId: S.optional(S.String),
          VpcSecurityGroupIds: S.optional(__S(37, __c4, 5)),
        }),
      ).annotate({ identifier: "ComputeConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ReplicationConfigIdentifier: S.String,
          SourceEndpointArn: S.String,
          TargetEndpointArn: S.String,
          ComputeConfig: __S(94, __c11, 6),
          ReplicationType: S.String,
          TableMappings: S.String,
          ReplicationSettings: S.optional(S.String),
          SupplementalSettings: S.optional(S.String),
          ResourceIdentifier: S.optional(S.String),
          Tags: S.optional(__S(1, __c0, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateReplicationConfigMessage",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ReplicationConfigIdentifier: S.optional(S.String),
          ReplicationConfigArn: S.optional(S.String),
          SourceEndpointArn: S.optional(S.String),
          TargetEndpointArn: S.optional(S.String),
          ReplicationType: S.optional(S.String),
          ComputeConfig: S.optional(__S(94, __c11, 6)),
          ReplicationSettings: S.optional(S.String),
          SupplementalSettings: S.optional(S.String),
          TableMappings: S.optional(S.String),
          ReplicationConfigCreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReplicationConfigUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IsReadOnly: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ReplicationConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ReplicationConfig: S.optional(__S(96, __c12, 0)) }).pipe(ns),
      ).annotate({
        identifier: "CreateReplicationConfigResponse",
      });
    case 2:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("VpcSecurityGroupId")));
    case 3:
      return S.suspend(() =>
        S.Struct({
          KeyCacheSecretId: S.optional(S.String),
          KeyCacheSecretIamArn: S.optional(S.String),
          Krb5FileContents: S.optional(S.String),
        }),
      ).annotate({
        identifier: "KerberosAuthenticationSettings",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ReplicationInstanceIdentifier: S.String,
          AllocatedStorage: S.optional(S.Number),
          ReplicationInstanceClass: S.String,
          VpcSecurityGroupIds: S.optional(__S(98, __c12, 2)),
          AvailabilityZone: S.optional(S.String),
          ReplicationSubnetGroupIdentifier: S.optional(S.String),
          PreferredMaintenanceWindow: S.optional(S.String),
          MultiAZ: S.optional(S.Boolean),
          EngineVersion: S.optional(S.String),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          Tags: S.optional(__S(1, __c0, 1)),
          KmsKeyId: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          DnsNameServers: S.optional(S.String),
          ResourceIdentifier: S.optional(S.String),
          NetworkType: S.optional(S.String),
          KerberosAuthenticationSettings: S.optional(__S(99, __c12, 3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateReplicationInstanceMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ VpcSecurityGroupId: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "VpcSecurityGroupMembership",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ __S(101, __c12, 5)
          .pipe(/*@__PURE__*/ T.XmlName("VpcSecurityGroupMembership"))
          .annotate({
            identifier: "VpcSecurityGroupMembership",
          }),
      );
    case 7:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "AvailabilityZone",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SubnetIdentifier: S.optional(S.String),
          SubnetAvailabilityZone: S.optional(__S(103, __c12, 7)),
          SubnetStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "Subnet" });
    case 1:
      return S.Array(
        /*@__PURE__*/ __S(104, __c13, 0).pipe(/*@__PURE__*/ T.XmlName("Subnet")).annotate({
          identifier: "Subnet",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          ReplicationSubnetGroupIdentifier: S.optional(S.String),
          ReplicationSubnetGroupDescription: S.optional(S.String),
          VpcId: S.optional(S.String),
          SubnetGroupStatus: S.optional(S.String),
          Subnets: S.optional(__S(105, __c13, 1)),
          SupportedNetworkTypes: S.optional(__S(37, __c4, 5)),
          IsReadOnly: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ReplicationSubnetGroup" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ReplicationInstanceClass: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          MultiAZ: S.optional(S.Boolean),
          EngineVersion: S.optional(S.String),
          NetworkType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ReplicationPendingModifiedValues",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ReplicationInstanceIdentifier: S.optional(S.String),
          ReplicationInstanceClass: S.optional(S.String),
          ReplicationInstanceStatus: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          InstanceCreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          VpcSecurityGroups: S.optional(__S(102, __c12, 6)),
          AvailabilityZone: S.optional(S.String),
          ReplicationSubnetGroup: S.optional(__S(106, __c13, 2)),
          PreferredMaintenanceWindow: S.optional(S.String),
          PendingModifiedValues: S.optional(__S(107, __c13, 3)),
          MultiAZ: S.optional(S.Boolean),
          EngineVersion: S.optional(S.String),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          ReplicationInstanceArn: S.optional(S.String),
          ReplicationInstancePublicIpAddress: S.optional(S.String),
          ReplicationInstancePrivateIpAddress: S.optional(S.String),
          ReplicationInstancePublicIpAddresses: S.optional(__S(37, __c4, 5)),
          ReplicationInstancePrivateIpAddresses: S.optional(__S(37, __c4, 5)),
          ReplicationInstanceIpv6Addresses: S.optional(__S(37, __c4, 5)),
          PubliclyAccessible: S.optional(S.Boolean),
          SecondaryAvailabilityZone: S.optional(S.String),
          FreeUntil: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DnsNameServers: S.optional(S.String),
          NetworkType: S.optional(S.String),
          KerberosAuthenticationSettings: S.optional(__S(99, __c12, 3)),
        }),
      ).annotate({ identifier: "ReplicationInstance" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ReplicationInstance: S.optional(__S(108, __c13, 4)) }).pipe(ns),
      ).annotate({
        identifier: "CreateReplicationInstanceResponse",
      });
    case 6:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("SubnetIdentifier")));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ReplicationSubnetGroupIdentifier: S.String,
          ReplicationSubnetGroupDescription: S.String,
          SubnetIds: __S(110, __c13, 6),
          Tags: S.optional(__S(1, __c0, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateReplicationSubnetGroupMessage",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ReplicationSubnetGroup: S.optional(__S(106, __c13, 2)) }).pipe(ns),
      ).annotate({
        identifier: "CreateReplicationSubnetGroupResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReplicationTaskIdentifier: S.String,
          SourceEndpointArn: S.String,
          TargetEndpointArn: S.String,
          ReplicationInstanceArn: S.String,
          MigrationType: S.String,
          TableMappings: S.String,
          ReplicationTaskSettings: S.optional(S.String),
          CdcStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CdcStartPosition: S.optional(S.String),
          CdcStopPosition: S.optional(S.String),
          Tags: S.optional(__S(1, __c0, 1)),
          TaskData: S.optional(S.String),
          ResourceIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateReplicationTaskMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FullLoadProgressPercent: S.optional(S.Number),
          ElapsedTimeMillis: S.optional(S.Number),
          TablesLoaded: S.optional(S.Number),
          TablesLoading: S.optional(S.Number),
          TablesQueued: S.optional(S.Number),
          TablesErrored: S.optional(S.Number),
          FreshStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StopDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FullLoadStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FullLoadFinishDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ReplicationTaskStats" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ReplicationTaskIdentifier: S.optional(S.String),
          SourceEndpointArn: S.optional(S.String),
          TargetEndpointArn: S.optional(S.String),
          ReplicationInstanceArn: S.optional(S.String),
          MigrationType: S.optional(S.String),
          TableMappings: S.optional(S.String),
          ReplicationTaskSettings: S.optional(S.String),
          Status: S.optional(S.String),
          LastFailureMessage: S.optional(S.String),
          StopReason: S.optional(S.String),
          ReplicationTaskCreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReplicationTaskStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CdcStartPosition: S.optional(S.String),
          CdcStopPosition: S.optional(S.String),
          RecoveryCheckpoint: S.optional(S.String),
          ReplicationTaskArn: S.optional(S.String),
          ReplicationTaskStats: S.optional(__S(114, __c14, 2)),
          TaskData: S.optional(S.String),
          TargetReplicationInstanceArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReplicationTask" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ReplicationTask: S.optional(__S(115, __c14, 3)) }).pipe(ns),
      ).annotate({
        identifier: "CreateReplicationTaskResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ CertificateArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteCertificateMessage" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CertificateIdentifier: S.optional(S.String),
          CertificateCreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CertificatePem: S.optional(S.String),
          CertificateWallet: S.optional(T.Blob),
          CertificateArn: S.optional(S.String),
          CertificateOwner: S.optional(S.String),
          ValidFromDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ValidToDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SigningAlgorithm: S.optional(S.String),
          KeyLength: S.optional(S.Number),
          KmsKeyId: S.optional(S.String),
        }),
      ).annotate({ identifier: "Certificate" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Certificate: S.optional(__S(118, __c14, 6)) }).pipe(ns),
      ).annotate({
        identifier: "DeleteCertificateResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EndpointArn: S.String, ReplicationInstanceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteConnectionMessage" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReplicationInstanceArn: S.optional(S.String),
          EndpointArn: S.optional(S.String),
          Status: S.optional(S.String),
          LastFailureMessage: S.optional(S.String),
          EndpointIdentifier: S.optional(S.String),
          ReplicationInstanceIdentifier: S.optional(S.String),
        }),
      ).annotate({ identifier: "Connection" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Connection: S.optional(__S(121, __c15, 1)) }).pipe(ns),
      ).annotate({
        identifier: "DeleteConnectionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DataMigrationIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDataMigrationMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DataProviderIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDataProviderMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ EndpointArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteEndpointMessage" });
    case 6:
      return S.suspend(() =>
        S.Struct({ SubscriptionName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteEventSubscriptionMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ CollectorReferencedId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteCollectorRequest" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DatabaseIds: __S(37, __c4, 5) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteFleetAdvisorDatabasesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DatabaseIds: S.optional(__S(37, __c4, 5)) }).pipe(ns),
      ).annotate({
        identifier: "DeleteFleetAdvisorDatabasesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ InstanceProfileIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteInstanceProfileMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ MigrationProjectIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteMigrationProjectMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ReplicationConfigArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteReplicationConfigMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ReplicationInstanceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteReplicationInstanceMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ReplicationSubnetGroupIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteReplicationSubnetGroupMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ReplicationTaskArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteReplicationTaskMessage",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ReplicationTaskAssessmentRunArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteReplicationTaskAssessmentRunMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAccountAttributesMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountQuotaName: S.optional(S.String),
          Used: S.optional(S.Number),
          Max: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AccountQuota" });
    case 3:
      return S.Array(
        /*@__PURE__*/ __S(138, __c17, 2).pipe(/*@__PURE__*/ T.XmlName("AccountQuota")).annotate({
          identifier: "AccountQuota",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountQuotas: S.optional(__S(139, __c17, 3)),
          UniqueAccountIdentifier: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeAccountAttributesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ReplicationTaskArn: S.optional(S.String),
          ReplicationInstanceArn: S.optional(S.String),
          ReplicationConfigArn: S.optional(S.String),
          SourceEngineName: S.optional(S.String),
          TargetEngineName: S.optional(S.String),
          MigrationType: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeApplicableIndividualAssessmentsMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          IndividualAssessmentNames: S.optional(__S(37, __c4, 5)),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeApplicableIndividualAssessmentsResponse",
      });
    case 7:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("Value")));
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Name: S.String, Values: __S(143, __c17, 7) })).annotate({
        identifier: "Filter",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ __S(144, __c18, 0).pipe(/*@__PURE__*/ T.XmlName("Filter")).annotate({
          identifier: "Filter",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeCertificatesMessage",
      });
    case 3:
      return S.Array(
        /*@__PURE__*/ __S(118, __c14, 6).pipe(/*@__PURE__*/ T.XmlName("Certificate")).annotate({
          identifier: "Certificate",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          Certificates: S.optional(__S(147, __c18, 3)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeCertificatesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeConnectionsMessage",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ __S(121, __c15, 1).pipe(/*@__PURE__*/ T.XmlName("Connection")).annotate({
          identifier: "Connection",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          Connections: S.optional(__S(150, __c18, 6)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeConnectionsResponse",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ MigrationProjectIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeConversionConfigurationMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectIdentifier: S.optional(S.String),
          ConversionConfiguration: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeConversionConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          WithoutSettings: S.optional(S.Boolean),
          WithoutStatistics: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDataMigrationsMessage",
      });
    case 3:
      return S.Array(__S(38, __c4, 6));
    case 4:
      return S.suspend(() =>
        S.Struct({
          DataMigrations: S.optional(__S(155, __c19, 3)),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDataMigrationsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDataProvidersMessage",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ __S(50, __c6, 2).pipe(/*@__PURE__*/ T.XmlName("DataProvider")).annotate({
          identifier: "DataProvider",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          DataProviders: S.optional(__S(158, __c19, 6)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDataProvidersResponse",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeEndpointsMessage" });
    case 1:
      return S.Array(
        /*@__PURE__*/ Endpoint.pipe(/*@__PURE__*/ T.XmlName("Endpoint")).annotate({
          identifier: "Endpoint",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Endpoints: S.optional(__S(161, __c20, 1)) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "DescribeEndpointsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EngineName: S.String,
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEndpointSettingsMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: S.optional(S.String),
          EnumValues: S.optional(__S(37, __c4, 5)),
          Sensitive: S.optional(S.Boolean),
          Units: S.optional(S.String),
          Applicability: S.optional(S.String),
          IntValueMin: S.optional(S.Number),
          IntValueMax: S.optional(S.Number),
          DefaultValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "EndpointSetting" });
    case 5:
      return S.Array(__S(164, __c20, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          EndpointSettings: S.optional(__S(165, __c20, 5)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeEndpointSettingsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEndpointTypesMessage",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EngineName: S.optional(S.String),
          SupportsCDC: S.optional(S.Boolean),
          EndpointType: S.optional(S.String),
          ReplicationInstanceEngineMinimumVersion: S.optional(S.String),
          EngineDisplayName: S.optional(S.String),
        }),
      ).annotate({ identifier: "SupportedEndpointType" });
    case 1:
      return S.Array(
        /*@__PURE__*/ __S(168, __c21, 0)
          .pipe(/*@__PURE__*/ T.XmlName("SupportedEndpointType"))
          .annotate({
            identifier: "SupportedEndpointType",
          }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          SupportedEndpointTypes: S.optional(__S(169, __c21, 1)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeEndpointTypesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ MaxRecords: S.optional(S.Number), Marker: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEngineVersionsMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Version: S.optional(S.String),
          Lifecycle: S.optional(S.String),
          ReleaseStatus: S.optional(S.String),
          LaunchDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AutoUpgradeDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DeprecationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ForceUpgradeDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AvailableUpgrades: S.optional(__S(37, __c4, 5)),
        }),
      ).annotate({ identifier: "EngineVersion" });
    case 5:
      return S.Array(
        /*@__PURE__*/ __S(172, __c21, 4).pipe(/*@__PURE__*/ T.XmlName("EngineVersion")).annotate({
          identifier: "EngineVersion",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          EngineVersions: S.optional(__S(173, __c21, 5)),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeEngineVersionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SourceType: S.optional(S.String),
          Filters: S.optional(__S(145, __c18, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEventCategoriesMessage",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SourceType: S.optional(S.String),
          EventCategories: S.optional(__S(76, __c9, 4)),
        }),
      ).annotate({ identifier: "EventCategoryGroup" });
    case 1:
      return S.Array(
        /*@__PURE__*/ __S(176, __c22, 0)
          .pipe(/*@__PURE__*/ T.XmlName("EventCategoryGroup"))
          .annotate({
            identifier: "EventCategoryGroup",
          }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({ EventCategoryGroupList: S.optional(__S(177, __c22, 1)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeEventCategoriesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SourceIdentifier: S.optional(S.String),
          SourceType: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Duration: S.optional(S.Number),
          EventCategories: S.optional(__S(76, __c9, 4)),
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeEventsMessage" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SourceIdentifier: S.optional(S.String),
          SourceType: S.optional(S.String),
          Message: S.optional(S.String),
          EventCategories: S.optional(__S(76, __c9, 4)),
          Date: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Event" });
    case 5:
      return S.Array(
        /*@__PURE__*/ __S(180, __c22, 4).pipe(/*@__PURE__*/ T.XmlName("Event")).annotate({
          identifier: "Event",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Events: S.optional(__S(181, __c22, 5)) }).pipe(ns),
      ).annotate({ identifier: "DescribeEventsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SubscriptionName: S.optional(S.String),
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEventSubscriptionsMessage",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ __S(79, __c9, 7).pipe(/*@__PURE__*/ T.XmlName("EventSubscription")).annotate({
          identifier: "EventSubscription",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          EventSubscriptionsList: S.optional(__S(184, __c23, 0)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeEventSubscriptionsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectIdentifier: S.String,
          Filters: S.optional(__S(145, __c18, 1)),
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeExtensionPackAssociationsMessage",
      });
    case 3:
      return S.Array(__S(22, __c2, 6));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          Requests: S.optional(__S(187, __c23, 3)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeExtensionPackAssociationsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeFleetAdvisorCollectorsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CollectorStatus: S.optional(S.String),
          LocalCollectorS3Access: S.optional(S.Boolean),
          WebCollectorS3Access: S.optional(S.Boolean),
          WebCollectorGrantedRoleBasedAccess: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "CollectorHealthCheck" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NumberOfDatabases: S.optional(S.Number),
          NumberOfSchemas: S.optional(S.Number),
        }),
      ).annotate({ identifier: "InventoryData" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CollectorReferencedId: S.optional(S.String),
          CollectorName: S.optional(S.String),
          CollectorVersion: S.optional(S.String),
          VersionStatus: S.optional(S.String),
          Description: S.optional(S.String),
          S3BucketName: S.optional(S.String),
          ServiceAccessRoleArn: S.optional(S.String),
          CollectorHealthCheck: S.optional(__S(190, __c23, 6)),
          LastDataReceived: S.optional(S.String),
          RegisteredDate: S.optional(S.String),
          CreatedDate: S.optional(S.String),
          ModifiedDate: S.optional(S.String),
          InventoryData: S.optional(__S(191, __c23, 7)),
        }),
      ).annotate({ identifier: "CollectorResponse" });
    case 1:
      return S.Array(__S(192, __c24, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Collectors: S.optional(__S(193, __c24, 1)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeFleetAdvisorCollectorsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeFleetAdvisorDatabasesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ServerId: S.optional(S.String),
          IpAddress: S.optional(S.String),
          ServerName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServerShortInfoResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          EngineEdition: S.optional(S.String),
          ServicePack: S.optional(S.String),
          SupportLevel: S.optional(S.String),
          OsArchitecture: S.optional(S.Number),
          Tooltip: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DatabaseInstanceSoftwareDetailsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CollectorReferencedId: S.optional(S.String),
          CollectorName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CollectorShortInfoResponse",
      });
    case 7:
      return S.Array(__S(198, __c24, 6));
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DatabaseId: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          IpAddress: S.optional(S.String),
          NumberOfSchemas: S.optional(S.Number),
          Server: S.optional(__S(196, __c24, 4)),
          SoftwareDetails: S.optional(__S(197, __c24, 5)),
          Collectors: S.optional(__S(199, __c24, 7)),
        }),
      ).annotate({ identifier: "DatabaseResponse" });
    case 1:
      return S.Array(__S(200, __c25, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Databases: S.optional(__S(201, __c25, 1)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeFleetAdvisorDatabasesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ MaxRecords: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeFleetAdvisorLsaAnalysisRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ LsaAnalysisId: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "FleetAdvisorLsaAnalysisResponse",
      });
    case 5:
      return S.Array(__S(204, __c25, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Analysis: S.optional(__S(205, __c25, 5)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeFleetAdvisorLsaAnalysisResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeFleetAdvisorSchemaObjectSummaryRequest",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SchemaId: S.optional(S.String),
          ObjectType: S.optional(S.String),
          NumberOfObjects: S.optional(S.Number),
          CodeLineCount: S.optional(S.Number),
          CodeSize: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "FleetAdvisorSchemaObjectResponse",
      });
    case 1:
      return S.Array(__S(208, __c26, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          FleetAdvisorSchemaObjects: S.optional(__S(209, __c26, 1)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeFleetAdvisorSchemaObjectSummaryResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeFleetAdvisorSchemasRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DatabaseId: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          DatabaseIpAddress: S.optional(S.String),
          DatabaseEngine: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DatabaseShortInfoResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SchemaId: S.optional(S.String),
          SchemaName: S.optional(S.String),
          DatabaseId: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          DatabaseIpAddress: S.optional(S.String),
        }),
      ).annotate({ identifier: "SchemaShortInfoResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CodeLineCount: S.optional(S.Number),
          CodeSize: S.optional(S.Number),
          Complexity: S.optional(S.String),
          Server: S.optional(__S(196, __c24, 4)),
          DatabaseInstance: S.optional(__S(212, __c26, 4)),
          SchemaId: S.optional(S.String),
          SchemaName: S.optional(S.String),
          OriginalSchema: S.optional(__S(213, __c26, 5)),
          Similarity: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SchemaResponse" });
    case 7:
      return S.Array(__S(214, __c26, 6));
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FleetAdvisorSchemas: S.optional(__S(215, __c26, 7)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeFleetAdvisorSchemasResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeInstanceProfilesMessage",
      });
    case 2:
      return S.Array(
        /*@__PURE__*/ __S(84, __c10, 4).pipe(/*@__PURE__*/ T.XmlName("InstanceProfile")).annotate({
          identifier: "InstanceProfile",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          InstanceProfiles: S.optional(__S(218, __c27, 2)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeInstanceProfilesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SelectionRules: S.String,
          MigrationProjectIdentifier: S.String,
          Origin: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeMetadataModelMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ MetadataModelName: S.optional(S.String), SelectionRules: S.optional(S.String) }),
      ).annotate({ identifier: "MetadataModelReference" });
    case 6:
      return S.Array(__S(221, __c27, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          MetadataModelName: S.optional(S.String),
          MetadataModelType: S.optional(S.String),
          TargetMetadataModels: S.optional(__S(222, __c27, 6)),
          Definition: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeMetadataModelResponse",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectIdentifier: S.String,
          Filters: S.optional(__S(145, __c18, 1)),
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeMetadataModelAssessmentsMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SelectionRules: S.String,
          MigrationProjectIdentifier: S.String,
          Origin: S.String,
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeMetadataModelChildrenMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          MetadataModelChildren: S.optional(__S(222, __c27, 6)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeMetadataModelChildrenResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectIdentifier: S.String,
          Filters: S.optional(__S(145, __c18, 1)),
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeMetadataModelConversionsMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          MigrationProjectIdentifier: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeMetadataModelCreationsMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectIdentifier: S.String,
          Filters: S.optional(__S(145, __c18, 1)),
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeMetadataModelExportsAsScriptMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectIdentifier: S.String,
          Filters: S.optional(__S(145, __c18, 1)),
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeMetadataModelExportsToTargetMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectIdentifier: S.String,
          Filters: S.optional(__S(145, __c18, 1)),
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeMetadataModelImportsMessage",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeMigrationProjectsMessage",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ __S(92, __c11, 4).pipe(/*@__PURE__*/ T.XmlName("MigrationProject")).annotate({
          identifier: "MigrationProject",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          MigrationProjects: S.optional(__S(233, __c29, 1)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeMigrationProjectsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ MaxRecords: S.optional(S.Number), Marker: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeOrderableReplicationInstancesMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EngineVersion: S.optional(S.String),
          ReplicationInstanceClass: S.optional(S.String),
          StorageType: S.optional(S.String),
          MinAllocatedStorage: S.optional(S.Number),
          MaxAllocatedStorage: S.optional(S.Number),
          DefaultAllocatedStorage: S.optional(S.Number),
          IncludedAllocatedStorage: S.optional(S.Number),
          AvailabilityZones: S.optional(__S(37, __c4, 5)),
          ReleaseStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "OrderableReplicationInstance",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ __S(236, __c29, 4)
          .pipe(/*@__PURE__*/ T.XmlName("OrderableReplicationInstance"))
          .annotate({
            identifier: "OrderableReplicationInstance",
          }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          OrderableReplicationInstances: S.optional(__S(237, __c29, 5)),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeOrderableReplicationInstancesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ReplicationInstanceArn: S.optional(S.String),
          Filters: S.optional(__S(145, __c18, 1)),
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribePendingMaintenanceActionsMessage",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ __S(7, __c0, 7)
          .pipe(/*@__PURE__*/ T.XmlName("ResourcePendingMaintenanceActions"))
          .annotate({
            identifier: "ResourcePendingMaintenanceActions",
          }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          PendingMaintenanceActions: S.optional(__S(240, __c30, 0)),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribePendingMaintenanceActionsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRecommendationLimitationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DatabaseId: S.optional(S.String),
          EngineName: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Impact: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "Limitation" });
    case 4:
      return S.Array(__S(243, __c30, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          Limitations: S.optional(__S(244, __c30, 4)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeRecommendationLimitationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRecommendationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EngineEdition: S.optional(S.String),
          InstanceVcpu: S.optional(S.Number),
          InstanceMemory: S.optional(S.Number),
          StorageSize: S.optional(S.Number),
          StorageIops: S.optional(S.Number),
          DeploymentOption: S.optional(S.String),
          EngineVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "RdsRequirements" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EngineEdition: S.optional(S.String),
          InstanceType: S.optional(S.String),
          InstanceVcpu: S.optional(S.Number),
          InstanceMemory: S.optional(S.Number),
          StorageType: S.optional(S.String),
          StorageSize: S.optional(S.Number),
          StorageIops: S.optional(S.Number),
          DeploymentOption: S.optional(S.String),
          EngineVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "RdsConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RequirementsToTarget: S.optional(__S(247, __c30, 7)),
          TargetConfiguration: S.optional(__S(248, __c31, 0)),
        }),
      ).annotate({ identifier: "RdsRecommendation" });
    case 2:
      return S.suspend(() => S.Struct({ RdsEngine: S.optional(__S(249, __c31, 1)) })).annotate({
        identifier: "RecommendationData",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DatabaseId: S.optional(S.String),
          EngineName: S.optional(S.String),
          CreatedDate: S.optional(S.String),
          Status: S.optional(S.String),
          Preferred: S.optional(S.Boolean),
          Settings: S.optional(__S(9, __c1, 1)),
          Data: S.optional(__S(250, __c31, 2)),
        }),
      ).annotate({ identifier: "Recommendation" });
    case 4:
      return S.Array(__S(251, __c31, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          Recommendations: S.optional(__S(252, __c31, 4)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeRecommendationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ EndpointArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeRefreshSchemasStatusMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EndpointArn: S.optional(S.String),
          ReplicationInstanceArn: S.optional(S.String),
          Status: S.optional(S.String),
          LastRefreshDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastFailureMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "RefreshSchemasStatus" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RefreshSchemasStatus: S.optional(__S(255, __c31, 7)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeRefreshSchemasStatusResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReplicationConfigsMessage",
      });
    case 2:
      return S.Array(
        /*@__PURE__*/ __S(96, __c12, 0)
          .pipe(/*@__PURE__*/ T.XmlName("ReplicationConfig"))
          .annotate({
            identifier: "ReplicationConfig",
          }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ReplicationConfigs: S.optional(__S(258, __c32, 2)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReplicationConfigsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReplicationInstancesMessage",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ __S(108, __c13, 4)
          .pipe(/*@__PURE__*/ T.XmlName("ReplicationInstance"))
          .annotate({
            identifier: "ReplicationInstance",
          }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ReplicationInstances: S.optional(__S(261, __c32, 5)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReplicationInstancesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ReplicationInstanceArn: S.String,
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReplicationInstanceTaskLogsMessage",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ReplicationTaskName: S.optional(S.String),
          ReplicationTaskArn: S.optional(S.String),
          ReplicationInstanceTaskLogSize: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ReplicationInstanceTaskLog",
      });
    case 1:
      return S.Array(__S(264, __c33, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ReplicationInstanceArn: S.optional(S.String),
          ReplicationInstanceTaskLogs: S.optional(__S(265, __c33, 1)),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReplicationInstanceTaskLogsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReplicationsMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProvisionState: S.optional(S.String),
          ProvisionedCapacityUnits: S.optional(S.Number),
          DateProvisioned: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IsNewProvisioningAvailable: S.optional(S.Boolean),
          DateNewProvisioningDataAvailable: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          ReasonForNewProvisioningData: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProvisionData" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PremigrationAssessmentRunArn: S.optional(S.String),
          FailOnAssessmentFailure: S.optional(S.Boolean),
          Status: S.optional(S.String),
          PremigrationAssessmentRunCreationDate: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          AssessmentProgress: S.optional(__S(26, __c3, 2)),
          LastFailureMessage: S.optional(S.String),
          ResultLocationBucket: S.optional(S.String),
          ResultLocationFolder: S.optional(S.String),
          ResultEncryptionMode: S.optional(S.String),
          ResultKmsKeyArn: S.optional(S.String),
          ResultStatistic: S.optional(__S(27, __c3, 3)),
        }),
      ).annotate({
        identifier: "PremigrationAssessmentStatus",
      });
    case 6:
      return S.Array(__S(269, __c33, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ReplicationConfigIdentifier: S.optional(S.String),
          ReplicationConfigArn: S.optional(S.String),
          SourceEndpointArn: S.optional(S.String),
          TargetEndpointArn: S.optional(S.String),
          ReplicationType: S.optional(S.String),
          Status: S.optional(S.String),
          ProvisionData: S.optional(__S(268, __c33, 4)),
          PremigrationAssessmentStatuses: S.optional(__S(270, __c33, 6)),
          StopReason: S.optional(S.String),
          FailureMessages: S.optional(__S(37, __c4, 5)),
          ReplicationStats: S.optional(__S(114, __c14, 2)),
          StartReplicationType: S.optional(S.String),
          CdcStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CdcStartPosition: S.optional(S.String),
          CdcStopPosition: S.optional(S.String),
          RecoveryCheckpoint: S.optional(S.String),
          ReplicationCreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReplicationUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReplicationLastStopTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReplicationDeprovisionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IsReadOnly: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Replication" });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ __S(271, __c33, 7).pipe(/*@__PURE__*/ T.XmlName("Replication")).annotate({
          identifier: "Replication",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          Replications: S.optional(__S(272, __c34, 0)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReplicationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReplicationSubnetGroupsMessage",
      });
    case 3:
      return S.Array(
        /*@__PURE__*/ __S(106, __c13, 2)
          .pipe(/*@__PURE__*/ T.XmlName("ReplicationSubnetGroup"))
          .annotate({
            identifier: "ReplicationSubnetGroup",
          }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ReplicationSubnetGroups: S.optional(__S(275, __c34, 3)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReplicationSubnetGroupsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ReplicationConfigArn: S.String,
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          Filters: S.optional(__S(145, __c18, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReplicationTableStatisticsMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SchemaName: S.optional(S.String),
          TableName: S.optional(S.String),
          Inserts: S.optional(S.Number),
          Deletes: S.optional(S.Number),
          Updates: S.optional(S.Number),
          Ddls: S.optional(S.Number),
          AppliedInserts: S.optional(S.Number),
          AppliedDeletes: S.optional(S.Number),
          AppliedUpdates: S.optional(S.Number),
          AppliedDdls: S.optional(S.Number),
          FullLoadRows: S.optional(S.Number),
          FullLoadCondtnlChkFailedRows: S.optional(S.Number),
          FullLoadErrorRows: S.optional(S.Number),
          FullLoadStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FullLoadEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FullLoadReloaded: S.optional(S.Boolean),
          LastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TableState: S.optional(S.String),
          ValidationPendingRecords: S.optional(S.Number),
          ValidationFailedRecords: S.optional(S.Number),
          ValidationSuspendedRecords: S.optional(S.Number),
          ValidationState: S.optional(S.String),
          ValidationStateDetails: S.optional(S.String),
          ResyncState: S.optional(S.String),
          ResyncRowsAttempted: S.optional(S.Number),
          ResyncRowsSucceeded: S.optional(S.Number),
          ResyncRowsFailed: S.optional(S.Number),
          ResyncProgress: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TableStatistics" });
    case 7:
      return S.Array(__S(278, __c34, 6));
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ReplicationConfigArn: S.optional(S.String),
          Marker: S.optional(S.String),
          ReplicationTableStatistics: S.optional(__S(279, __c34, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReplicationTableStatisticsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReplicationTaskArn: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReplicationTaskAssessmentResultsMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ReplicationTaskIdentifier: S.optional(S.String),
          ReplicationTaskArn: S.optional(S.String),
          ReplicationTaskLastAssessmentDate: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          AssessmentStatus: S.optional(S.String),
          AssessmentResultsFile: S.optional(S.String),
          AssessmentResults: S.optional(S.String),
          S3ObjectUrl: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ReplicationTaskAssessmentResult",
      });
    case 3:
      return S.Array(
        /*@__PURE__*/ __S(282, __c35, 2)
          .pipe(/*@__PURE__*/ T.XmlName("ReplicationTaskAssessmentResult"))
          .annotate({
            identifier: "ReplicationTaskAssessmentResult",
          }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          BucketName: S.optional(S.String),
          ReplicationTaskAssessmentResults: S.optional(__S(283, __c35, 3)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReplicationTaskAssessmentResultsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReplicationTaskAssessmentRunsMessage",
      });
    case 6:
      return S.Array(__S(28, __c3, 4));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ReplicationTaskAssessmentRuns: S.optional(__S(286, __c35, 6)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReplicationTaskAssessmentRunsResponse",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReplicationTaskIndividualAssessmentsMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReplicationTaskIndividualAssessmentArn: S.optional(S.String),
          ReplicationTaskAssessmentRunArn: S.optional(S.String),
          IndividualAssessmentName: S.optional(S.String),
          Status: S.optional(S.String),
          ReplicationTaskIndividualAssessmentStartDate: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
        }),
      ).annotate({
        identifier: "ReplicationTaskIndividualAssessment",
      });
    case 2:
      return S.Array(__S(289, __c36, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ReplicationTaskIndividualAssessments: S.optional(__S(290, __c36, 2)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReplicationTaskIndividualAssessmentsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(145, __c18, 1)),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          WithoutSettings: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReplicationTasksMessage",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ __S(115, __c14, 3).pipe(/*@__PURE__*/ T.XmlName("ReplicationTask")).annotate({
          identifier: "ReplicationTask",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ReplicationTasks: S.optional(__S(293, __c36, 5)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReplicationTasksResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EndpointArn: S.String,
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeSchemasMessage" });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Schemas: S.optional(__S(37, __c4, 5)) }).pipe(ns),
      ).annotate({ identifier: "DescribeSchemasResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReplicationTaskArn: S.String,
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          Filters: S.optional(__S(145, __c18, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeTableStatisticsMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ReplicationTaskArn: S.optional(S.String),
          TableStatistics: S.optional(__S(279, __c34, 7)),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeTableStatisticsResponse",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectIdentifier: S.String,
          SelectionRules: S.String,
          FileName: S.optional(S.String),
          AssessmentReportTypes: S.optional(__S(299, __c37, 3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ExportMetadataModelAssessmentMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ S3ObjectKey: S.optional(S.String), ObjectURL: S.optional(S.String) }),
      ).annotate({
        identifier: "ExportMetadataModelAssessmentResultEntry",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PdfReport: S.optional(__S(301, __c37, 5)),
          CsvReport: S.optional(__S(301, __c37, 5)),
        }).pipe(ns),
      ).annotate({
        identifier: "ExportMetadataModelAssessmentResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ MigrationProjectIdentifier: S.String, SelectionRules: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetTargetSelectionRulesMessage",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TargetSelectionRules: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "GetTargetSelectionRulesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CertificateIdentifier: S.String,
          CertificatePem: S.optional(SensitiveString),
          CertificateWallet: S.optional(T.Blob),
          Tags: S.optional(__S(1, __c0, 1)),
          KmsKeyId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ImportCertificateMessage" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          ResourceArnList: S.optional(__S(37, __c4, 5)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTagsForResourceMessage",
      });
    case 3:
      return S.suspend(() => S.Struct({ TagList: S.optional(__S(1, __c0, 1)) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ MigrationProjectIdentifier: S.String, ConversionConfiguration: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ModifyConversionConfigurationMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ MigrationProjectIdentifier: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ModifyConversionConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DataMigrationIdentifier: S.String,
          DataMigrationName: S.optional(S.String),
          EnableCloudwatchLogs: S.optional(S.Boolean),
          ServiceAccessRoleArn: S.optional(S.String),
          DataMigrationType: S.optional(S.String),
          SourceDataSettings: S.optional(__S(31, __c3, 7)),
          TargetDataSettings: S.optional(__S(33, __c4, 1)),
          NumberOfJobs: S.optional(S.Number),
          SelectionRules: S.optional(SensitiveString),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyDataMigrationMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DataProviderIdentifier: S.String,
          DataProviderName: S.optional(S.String),
          Description: S.optional(S.String),
          Engine: S.optional(S.String),
          Virtual: S.optional(S.Boolean),
          ExactSettings: S.optional(S.Boolean),
          Settings: S.optional(__S(48, __c6, 0)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyDataProviderMessage",
      });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EndpointArn: S.String,
          EndpointIdentifier: S.optional(S.String),
          EndpointType: S.optional(S.String),
          EngineName: S.optional(S.String),
          Username: S.optional(S.String),
          Password: S.optional(SensitiveString),
          ServerName: S.optional(S.String),
          Port: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          ExtraConnectionAttributes: S.optional(S.String),
          CertificateArn: S.optional(S.String),
          SslMode: S.optional(S.String),
          ServiceAccessRoleArn: S.optional(S.String),
          ExternalTableDefinition: S.optional(S.String),
          DynamoDbSettings: S.optional(__S(52, __c6, 4)),
          S3Settings: S.optional(__S(53, __c6, 5)),
          DmsTransferSettings: S.optional(__S(54, __c6, 6)),
          MongoDbSettings: S.optional(__S(55, __c6, 7)),
          KinesisSettings: S.optional(__S(56, __c7, 0)),
          KafkaSettings: S.optional(__S(57, __c7, 1)),
          ElasticsearchSettings: S.optional(__S(58, __c7, 2)),
          NeptuneSettings: S.optional(__S(59, __c7, 3)),
          RedshiftSettings: S.optional(__S(60, __c7, 4)),
          PostgreSQLSettings: S.optional(__S(61, __c7, 5)),
          MySQLSettings: S.optional(__S(62, __c7, 6)),
          OracleSettings: S.optional(__S(64, __c8, 0)),
          SybaseSettings: S.optional(__S(65, __c8, 1)),
          MicrosoftSQLServerSettings: S.optional(__S(66, __c8, 2)),
          IBMDb2Settings: S.optional(__S(67, __c8, 3)),
          DocDbSettings: S.optional(__S(68, __c8, 4)),
          RedisSettings: S.optional(__S(69, __c8, 5)),
          ExactSettings: S.optional(S.Boolean),
          GcpMySQLSettings: S.optional(__S(70, __c8, 6)),
          TimestreamSettings: S.optional(__S(71, __c8, 7)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyEndpointMessage" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SubscriptionName: S.String,
          SnsTopicArn: S.optional(S.String),
          SourceType: S.optional(S.String),
          EventCategories: S.optional(__S(76, __c9, 4)),
          Enabled: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyEventSubscriptionMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          InstanceProfileIdentifier: S.String,
          AvailabilityZone: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          NetworkType: S.optional(S.String),
          InstanceProfileName: S.optional(S.String),
          Description: S.optional(S.String),
          SubnetGroupIdentifier: S.optional(S.String),
          VpcSecurityGroups: S.optional(__S(37, __c4, 5)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyInstanceProfileMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectIdentifier: S.String,
          MigrationProjectName: S.optional(S.String),
          SourceDataProviderDescriptors: S.optional(__S(87, __c10, 7)),
          TargetDataProviderDescriptors: S.optional(__S(87, __c10, 7)),
          InstanceProfileIdentifier: S.optional(S.String),
          TransformationRules: S.optional(S.String),
          Description: S.optional(S.String),
          SchemaConversionApplicationAttributes: S.optional(__S(88, __c11, 0)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyMigrationProjectMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ReplicationConfigArn: S.String,
          ReplicationConfigIdentifier: S.optional(S.String),
          ReplicationType: S.optional(S.String),
          TableMappings: S.optional(S.String),
          ReplicationSettings: S.optional(S.String),
          SupplementalSettings: S.optional(S.String),
          ComputeConfig: S.optional(__S(94, __c11, 6)),
          SourceEndpointArn: S.optional(S.String),
          TargetEndpointArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyReplicationConfigMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ReplicationInstanceArn: S.String,
          AllocatedStorage: S.optional(S.Number),
          ApplyImmediately: S.optional(S.Boolean),
          ReplicationInstanceClass: S.optional(S.String),
          VpcSecurityGroupIds: S.optional(__S(98, __c12, 2)),
          PreferredMaintenanceWindow: S.optional(S.String),
          MultiAZ: S.optional(S.Boolean),
          EngineVersion: S.optional(S.String),
          AllowMajorVersionUpgrade: S.optional(S.Boolean),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          ReplicationInstanceIdentifier: S.optional(S.String),
          NetworkType: S.optional(S.String),
          KerberosAuthenticationSettings: S.optional(__S(99, __c12, 3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyReplicationInstanceMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ReplicationSubnetGroupIdentifier: S.String,
          ReplicationSubnetGroupDescription: S.optional(S.String),
          SubnetIds: __S(110, __c13, 6),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyReplicationSubnetGroupMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ReplicationTaskArn: S.String,
          ReplicationTaskIdentifier: S.optional(S.String),
          MigrationType: S.optional(S.String),
          TableMappings: S.optional(S.String),
          ReplicationTaskSettings: S.optional(S.String),
          CdcStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CdcStartPosition: S.optional(S.String),
          CdcStopPosition: S.optional(S.String),
          TaskData: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyReplicationTaskMessage",
      });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ReplicationTaskArn: S.String, TargetReplicationInstanceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "MoveReplicationTaskMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReplicationInstanceArn: S.String,
          ForceFailover: S.optional(S.Boolean),
          ForcePlannedFailover: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RebootReplicationInstanceMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ EndpointArn: S.String, ReplicationInstanceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RefreshSchemasMessage" });
    case 3:
      return S.suspend(() =>
        S.Struct({ RefreshSchemasStatus: S.optional(__S(255, __c31, 7)) }).pipe(ns),
      ).annotate({ identifier: "RefreshSchemasResponse" });
    case 4:
      return S.suspend(() => S.Struct({ SchemaName: S.String, TableName: S.String })).annotate({
        identifier: "TableToReload",
      });
    case 5:
      return S.Array(__S(324, __c40, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ReplicationConfigArn: S.String,
          TablesToReload: __S(325, __c40, 5),
          ReloadOption: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ReloadReplicationTablesMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ReplicationConfigArn: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ReloadReplicationTablesResponse",
      });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ReplicationTaskArn: S.String,
          TablesToReload: __S(325, __c40, 5),
          ReloadOption: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ReloadTablesMessage" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ReplicationTaskArn: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ReloadTablesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(37, __c4, 5) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RemoveTagsFromResourceMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RunFleetAdvisorLsaAnalysisRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ LsaAnalysisId: S.optional(S.String), Status: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "RunFleetAdvisorLsaAnalysisResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DataMigrationIdentifier: S.String,
          StartType: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartDataMigrationMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ MigrationProjectIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartExtensionPackAssociationMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ RequestIdentifier: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "StartExtensionPackAssociationResponse",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ MigrationProjectIdentifier: S.String, SelectionRules: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartMetadataModelAssessmentMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ MigrationProjectIdentifier: S.String, SelectionRules: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartMetadataModelConversionMessage",
      });
    case 2:
      return S.suspend(() => S.Struct({ Definition: S.String })).annotate({
        identifier: "StatementProperties",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ StatementProperties: __S(338, __c42, 2) })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectIdentifier: S.String,
          SelectionRules: S.String,
          MetadataModelName: S.String,
          Properties: __S(339, __c42, 3),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartMetadataModelCreationMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectIdentifier: S.String,
          SelectionRules: S.String,
          Origin: S.String,
          FileName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartMetadataModelExportAsScriptMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectIdentifier: S.String,
          SelectionRules: S.String,
          OverwriteExtensionPack: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartMetadataModelExportToTargetMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MigrationProjectIdentifier: S.String,
          SelectionRules: S.String,
          Origin: S.String,
          Refresh: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartMetadataModelImportMessage",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DatabaseId: S.String, Settings: __S(9, __c1, 1) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartRecommendationsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReplicationConfigArn: S.String,
          StartReplicationType: S.String,
          PremigrationAssessmentSettings: S.optional(S.String),
          CdcStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CdcStartPosition: S.optional(S.String),
          CdcStopPosition: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartReplicationMessage" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Replication: S.optional(__S(271, __c33, 7)) }).pipe(ns),
      ).annotate({
        identifier: "StartReplicationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ReplicationTaskArn: S.String,
          StartReplicationTaskType: S.String,
          CdcStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CdcStartPosition: S.optional(S.String),
          CdcStopPosition: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartReplicationTaskMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ReplicationTaskArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartReplicationTaskAssessmentMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ReplicationTaskArn: S.String,
          ServiceAccessRoleArn: S.String,
          ResultLocationBucket: S.String,
          ResultLocationFolder: S.optional(S.String),
          ResultEncryptionMode: S.optional(S.String),
          ResultKmsKeyArn: S.optional(S.String),
          AssessmentRunName: S.String,
          IncludeOnly: S.optional(__S(37, __c4, 5)),
          Exclude: S.optional(__S(37, __c4, 5)),
          Tags: S.optional(__S(1, __c0, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartReplicationTaskAssessmentRunMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DataMigrationIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopDataMigrationMessage" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ReplicationConfigArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopReplicationMessage" });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ReplicationTaskArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopReplicationTaskMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ReplicationInstanceArn: S.String, EndpointArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TestConnectionMessage" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ForceMove: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateSubscriptionsToEventBridgeMessage",
      });
    case 3:
      return S.suspend(() => S.Struct({ Result: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "UpdateSubscriptionsToEventBridgeResponse",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
