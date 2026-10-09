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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "LakeFormation",
  serviceShapeName: "AWSLakeFormation",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "lakeformation" });
const ver = /*@__PURE__*/ T.ServiceVersion("2017-03-31");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
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
              `https://lakeformation-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://lakeformation-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://lakeformation.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://lakeformation.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class AlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<AlreadyExistsException>()("AlreadyExistsException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAlreadyExistsError) {}
export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()("ConflictException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class EntityNotFoundException
  extends /*@__PURE__*/ S.TaggedError<EntityNotFoundException>()("EntityNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ExpiredException
  extends /*@__PURE__*/ S.TaggedError<ExpiredException>()(
    "ExpiredException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(410),
  ).pipe(C.withBadRequestError) {}
export class GlueEncryptionException
  extends /*@__PURE__*/ S.TaggedError<GlueEncryptionException>()("GlueEncryptionException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InternalServiceException
  extends /*@__PURE__*/ S.TaggedError<InternalServiceException>()(
    "InternalServiceException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidInputException
  extends /*@__PURE__*/ S.TaggedError<InvalidInputException>()(
    "InvalidInputException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidLakeFormationPrincipal
  extends /*@__PURE__*/ S.TaggedError<InvalidLakeFormationPrincipal>()(
    "InvalidLakeFormationPrincipal",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "InvalidInputException",
      message: { includes: "Invalid principal" },
    }),
  ).pipe(C.withBadRequestError, C.withRetryableError) {}
export class LastServiceLinkedRoleRegistration
  extends /*@__PURE__*/ S.TaggedError<LastServiceLinkedRoleRegistration>()(
    "LastServiceLinkedRoleRegistration",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "InvalidInputException",
      message: { includes: "Must manually delete service-linked role" },
    }),
  ).pipe(C.withConflictError) {}
export class OperationTimeoutException
  extends /*@__PURE__*/ S.TaggedError<OperationTimeoutException>()("OperationTimeoutException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class PermissionTypeMismatchException
  extends /*@__PURE__*/ S.TaggedError<PermissionTypeMismatchException>()(
    "PermissionTypeMismatchException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ResourceNotReadyException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotReadyException>()(
    "ResourceNotReadyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNumberLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ResourceNumberLimitExceededException>()(
    "ResourceNumberLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class StatisticsNotReadyYetException
  extends /*@__PURE__*/ S.TaggedError<StatisticsNotReadyYetException>()(
    "StatisticsNotReadyYetException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(420),
  ) {}
export class ThrottledException
  extends /*@__PURE__*/ S.TaggedError<ThrottledException>()(
    "ThrottledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class TransactionCanceledException
  extends /*@__PURE__*/ S.TaggedError<TransactionCanceledException>()(
    "TransactionCanceledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TransactionCommitInProgressException
  extends /*@__PURE__*/ S.TaggedError<TransactionCommitInProgressException>()(
    "TransactionCommitInProgressException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TransactionCommittedException
  extends /*@__PURE__*/ S.TaggedError<TransactionCommittedException>()(
    "TransactionCommittedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class WorkUnitsNotReadyYetException
  extends /*@__PURE__*/ S.TaggedError<WorkUnitsNotReadyYetException>()(
    "WorkUnitsNotReadyYetException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(420),
  ) {}
export type CatalogIdString = string;
export interface CatalogResource {
  Id?: string;
}
export type NameString = string;
export interface DatabaseResource {
  CatalogId?: string;
  Name: string;
}
export interface TableWildcard {}
export interface TableResource {
  CatalogId?: string;
  DatabaseName: string;
  Name?: string;
  TableWildcard?: TableWildcard;
}
export type ColumnNames = string[];
export interface ColumnWildcard {
  ExcludedColumnNames?: string[];
}
export interface TableWithColumnsResource {
  CatalogId?: string;
  DatabaseName: string;
  Name: string;
  ColumnNames?: string[];
  ColumnWildcard?: ColumnWildcard;
}
export type ResourceArnString = string;
export interface DataLocationResource {
  CatalogId?: string;
  ResourceArn: string;
}
export interface DataCellsFilterResource {
  TableCatalogId?: string;
  DatabaseName?: string;
  TableName?: string;
  Name?: string;
}
export type LFTagValue = string;
export type TagValueList = string[];
export interface LFTagKeyResource {
  CatalogId?: string;
  TagKey: string;
  TagValues: string[];
}
export type ResourceType = "DATABASE" | "TABLE" | (string & {});
export type LFTagKey = string;
export interface LFTag {
  TagKey: string;
  TagValues: string[];
}
export type Expression = LFTag[];
export interface LFTagPolicyResource {
  CatalogId?: string;
  ResourceType: ResourceType;
  Expression?: LFTag[];
  ExpressionName?: string;
}
export interface LFTagExpressionResource {
  CatalogId?: string;
  Name: string;
}
export interface Resource {
  Catalog?: CatalogResource;
  Database?: DatabaseResource;
  Table?: TableResource;
  TableWithColumns?: TableWithColumnsResource;
  DataLocation?: DataLocationResource;
  DataCellsFilter?: DataCellsFilterResource;
  LFTag?: LFTagKeyResource;
  LFTagPolicy?: LFTagPolicyResource;
  LFTagExpression?: LFTagExpressionResource;
}
export interface LFTagPair {
  CatalogId?: string;
  TagKey: string;
  TagValues: string[];
}
export type LFTagsList = LFTagPair[];
export interface AddLFTagsToResourceRequest {
  CatalogId?: string;
  Resource: Resource;
  LFTags: LFTagPair[];
}
export type DescriptionString = string;
export interface ErrorDetail {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export interface LFTagError {
  LFTag?: LFTagPair;
  Error?: ErrorDetail;
}
export type LFTagErrors = LFTagError[];
export interface AddLFTagsToResourceResponse {
  Failures?: LFTagError[];
}
export type SAMLAssertionString = string;
export type IAMRoleArn = string;
export type IAMSAMLProviderArn = string;
export type CredentialTimeoutDurationSecondInteger = number;
export interface AssumeDecoratedRoleWithSAMLRequest {
  SAMLAssertion: string;
  RoleArn: string;
  PrincipalArn: string;
  DurationSeconds?: number;
}
export type AccessKeyIdString = string;
export type SecretAccessKeyString = string;
export type SessionTokenString = string;
export type ExpirationTimestamp = Date;
export interface AssumeDecoratedRoleWithSAMLResponse {
  AccessKeyId?: string;
  SecretAccessKey?: string | redacted.Redacted<string>;
  SessionToken?: string | redacted.Redacted<string>;
  Expiration?: Date;
}
export type Identifier = string;
export type DataLakePrincipalString = string;
export interface DataLakePrincipal {
  DataLakePrincipalIdentifier?: string;
}
export type Permission =
  | "ALL"
  | "SELECT"
  | "ALTER"
  | "DROP"
  | "DELETE"
  | "INSERT"
  | "DESCRIBE"
  | "CREATE_DATABASE"
  | "CREATE_TABLE"
  | "DATA_LOCATION_ACCESS"
  | "CREATE_LF_TAG"
  | "ASSOCIATE"
  | "GRANT_WITH_LF_TAG_EXPRESSION"
  | "CREATE_LF_TAG_EXPRESSION"
  | "CREATE_CATALOG"
  | "SUPER_USER"
  | (string & {});
export type PermissionList = Permission[];
export type ExpressionString = string;
export interface Condition {
  Expression?: string;
}
export interface BatchPermissionsRequestEntry {
  Id: string;
  Principal?: DataLakePrincipal;
  Resource?: Resource;
  Permissions?: Permission[];
  Condition?: Condition;
  PermissionsWithGrantOption?: Permission[];
}
export type BatchPermissionsRequestEntryList = BatchPermissionsRequestEntry[];
export interface BatchGrantPermissionsRequest {
  CatalogId?: string;
  Entries: BatchPermissionsRequestEntry[];
}
export interface BatchPermissionsFailureEntry {
  RequestEntry?: BatchPermissionsRequestEntry;
  Error?: ErrorDetail;
}
export type BatchPermissionsFailureList = BatchPermissionsFailureEntry[];
export interface BatchGrantPermissionsResponse {
  Failures?: BatchPermissionsFailureEntry[];
}
export interface BatchRevokePermissionsRequest {
  CatalogId?: string;
  Entries: BatchPermissionsRequestEntry[];
}
export interface BatchRevokePermissionsResponse {
  Failures?: BatchPermissionsFailureEntry[];
}
export type TransactionIdString = string;
export interface CancelTransactionRequest {
  TransactionId: string;
}
export interface CancelTransactionResponse {}
export interface CommitTransactionRequest {
  TransactionId: string;
}
export type TransactionStatus =
  | "ACTIVE"
  | "COMMITTED"
  | "ABORTED"
  | "COMMIT_IN_PROGRESS"
  | (string & {});
export interface CommitTransactionResponse {
  TransactionStatus?: TransactionStatus;
}
export type PredicateString = string;
export interface AllRowsWildcard {}
export interface RowFilter {
  FilterExpression?: string;
  AllRowsWildcard?: AllRowsWildcard;
}
export type VersionString = string;
export interface DataCellsFilter {
  TableCatalogId: string;
  DatabaseName: string;
  TableName: string;
  Name: string;
  RowFilter?: RowFilter;
  ColumnNames?: string[];
  ColumnWildcard?: ColumnWildcard;
  VersionId?: string;
}
export interface CreateDataCellsFilterRequest {
  TableData: DataCellsFilter;
}
export interface CreateDataCellsFilterResponse {}
export type IdentityCenterInstanceArn = string;
export type EnableStatus = "ENABLED" | "DISABLED" | (string & {});
export type ScopeTarget = string;
export type ScopeTargets = string[];
export interface ExternalFilteringConfiguration {
  Status: EnableStatus;
  AuthorizedTargets: string[];
}
export type DataLakePrincipalList = DataLakePrincipal[];
export type ServiceAuthorization = "ENABLED" | "DISABLED" | (string & {});
export interface RedshiftConnect {
  Authorization: ServiceAuthorization;
}
export type RedshiftScopeUnion = { RedshiftConnect: RedshiftConnect };
export type RedshiftServiceIntegrations = RedshiftScopeUnion[];
export type ServiceIntegrationUnion = { Redshift: RedshiftScopeUnion[] };
export type ServiceIntegrationList = ServiceIntegrationUnion[];
export interface CreateLakeFormationIdentityCenterConfigurationRequest {
  CatalogId?: string;
  InstanceArn?: string;
  ExternalFiltering?: ExternalFilteringConfiguration;
  ShareRecipients?: DataLakePrincipal[];
  ServiceIntegrations?: ServiceIntegrationUnion[];
}
export type ApplicationArn = string;
export interface CreateLakeFormationIdentityCenterConfigurationResponse {
  ApplicationArn?: string;
}
export interface CreateLakeFormationOptInRequest {
  Principal: DataLakePrincipal;
  Resource: Resource;
  Condition?: Condition;
}
export interface CreateLakeFormationOptInResponse {}
export interface CreateLFTagRequest {
  CatalogId?: string;
  TagKey: string;
  TagValues: string[];
}
export interface CreateLFTagResponse {}
export interface CreateLFTagExpressionRequest {
  Name: string;
  Description?: string;
  CatalogId?: string;
  Expression: LFTag[];
}
export interface CreateLFTagExpressionResponse {}
export interface DeleteDataCellsFilterRequest {
  TableCatalogId?: string;
  DatabaseName?: string;
  TableName?: string;
  Name?: string;
}
export interface DeleteDataCellsFilterResponse {}
export interface DeleteLakeFormationIdentityCenterConfigurationRequest {
  CatalogId?: string;
}
export interface DeleteLakeFormationIdentityCenterConfigurationResponse {}
export interface DeleteLakeFormationOptInRequest {
  Principal: DataLakePrincipal;
  Resource: Resource;
  Condition?: Condition;
}
export interface DeleteLakeFormationOptInResponse {}
export interface DeleteLFTagRequest {
  CatalogId?: string;
  TagKey: string;
}
export interface DeleteLFTagResponse {}
export interface DeleteLFTagExpressionRequest {
  Name: string;
  CatalogId?: string;
}
export interface DeleteLFTagExpressionResponse {}
export type URI = string;
export type ETagString = string;
export interface VirtualObject {
  Uri: string;
  ETag?: string;
}
export type VirtualObjectList = VirtualObject[];
export interface DeleteObjectsOnCancelRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  TransactionId: string;
  Objects: VirtualObject[];
}
export interface DeleteObjectsOnCancelResponse {}
export interface DeregisterResourceRequest {
  ResourceArn: string;
}
export interface DeregisterResourceResponse {}
export interface DescribeLakeFormationIdentityCenterConfigurationRequest {
  CatalogId?: string;
}
export type RAMResourceShareArn = string;
export interface DescribeLakeFormationIdentityCenterConfigurationResponse {
  CatalogId?: string;
  InstanceArn?: string;
  ApplicationArn?: string;
  ExternalFiltering?: ExternalFilteringConfiguration;
  ShareRecipients?: DataLakePrincipal[];
  ServiceIntegrations?: ServiceIntegrationUnion[];
  ResourceShare?: string;
}
export interface DescribeResourceRequest {
  ResourceArn: string;
}
export type LastModifiedTimestamp = Date;
export type VerificationStatus =
  | "VERIFIED"
  | "VERIFICATION_FAILED"
  | "NOT_VERIFIED"
  | (string & {});
export type AccountIdString = string;
export interface ResourceInfo {
  ResourceArn?: string;
  RoleArn?: string;
  LastModified?: Date;
  WithFederation?: boolean;
  HybridAccessEnabled?: boolean;
  WithPrivilegedAccess?: boolean;
  VerificationStatus?: VerificationStatus;
  ExpectedResourceOwnerAccount?: string;
}
export interface DescribeResourceResponse {
  ResourceInfo?: ResourceInfo;
}
export interface DescribeTransactionRequest {
  TransactionId: string;
}
export interface TransactionDescription {
  TransactionId?: string;
  TransactionStatus?: TransactionStatus;
  TransactionStartTime?: Date;
  TransactionEndTime?: Date;
}
export interface DescribeTransactionResponse {
  TransactionDescription?: TransactionDescription;
}
export interface ExtendTransactionRequest {
  TransactionId?: string;
}
export interface ExtendTransactionResponse {}
export interface GetDataCellsFilterRequest {
  TableCatalogId: string;
  DatabaseName: string;
  TableName: string;
  Name: string;
}
export interface GetDataCellsFilterResponse {
  DataCellsFilter?: DataCellsFilter;
}
export interface GetDataLakePrincipalRequest {}
export type IdentityString = string;
export interface GetDataLakePrincipalResponse {
  Identity?: string;
}
export interface GetDataLakeSettingsRequest {
  CatalogId?: string;
}
export interface PrincipalPermissions {
  Principal?: DataLakePrincipal;
  Permissions?: Permission[];
}
export type PrincipalPermissionsList = PrincipalPermissions[];
export type KeyString = string;
export type ParametersMapValue = string;
export type ParametersMap = { [key: string]: string | undefined };
export type TrustedResourceOwners = string[];
export type AuthorizedSessionTagValueList = string[];
export interface DataLakeSettings {
  DataLakeAdmins?: DataLakePrincipal[];
  ReadOnlyAdmins?: DataLakePrincipal[];
  CreateDatabaseDefaultPermissions?: PrincipalPermissions[];
  CreateTableDefaultPermissions?: PrincipalPermissions[];
  Parameters?: { [key: string]: string | undefined };
  TrustedResourceOwners?: string[];
  AllowExternalDataFiltering?: boolean;
  AllowFullTableExternalDataAccess?: boolean;
  ExternalDataFilteringAllowList?: DataLakePrincipal[];
  AuthorizedSessionTagValueList?: string[];
}
export interface GetDataLakeSettingsResponse {
  DataLakeSettings?: DataLakeSettings;
}
export type Token = string;
export type PageSize = number;
export interface GetEffectivePermissionsForPathRequest {
  CatalogId?: string;
  ResourceArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export type ResourceShareList = string[];
export interface DetailsMap {
  ResourceShare?: string[];
}
export interface PrincipalResourcePermissions {
  Principal?: DataLakePrincipal;
  Resource?: Resource;
  Condition?: Condition;
  Permissions?: Permission[];
  PermissionsWithGrantOption?: Permission[];
  AdditionalDetails?: DetailsMap;
  LastUpdated?: Date;
  LastUpdatedBy?: string;
}
export type PrincipalResourcePermissionsList = PrincipalResourcePermissions[];
export interface GetEffectivePermissionsForPathResponse {
  Permissions?: PrincipalResourcePermissions[];
  NextToken?: string;
}
export interface GetLFTagRequest {
  CatalogId?: string;
  TagKey: string;
}
export interface GetLFTagResponse {
  CatalogId?: string;
  TagKey?: string;
  TagValues?: string[];
}
export interface GetLFTagExpressionRequest {
  Name: string;
  CatalogId?: string;
}
export interface GetLFTagExpressionResponse {
  Name?: string;
  Description?: string;
  CatalogId?: string;
  Expression?: LFTag[];
}
export type GetQueryStateRequestQueryIdString = string;
export interface GetQueryStateRequest {
  QueryId: string;
}
export type ErrorMessageString = string;
export type QueryStateString =
  | "PENDING"
  | "WORKUNITS_AVAILABLE"
  | "ERROR"
  | "FINISHED"
  | "EXPIRED"
  | (string & {});
export interface GetQueryStateResponse {
  Error?: string;
  State: QueryStateString;
}
export type GetQueryStatisticsRequestQueryIdString = string;
export interface GetQueryStatisticsRequest {
  QueryId: string;
}
export type NumberOfMilliseconds = number;
export type NumberOfBytes = number;
export type NumberOfItems = number;
export interface ExecutionStatistics {
  AverageExecutionTimeMillis?: number;
  DataScannedBytes?: number;
  WorkUnitsExecutedCount?: number;
}
export interface PlanningStatistics {
  EstimatedDataToScanBytes?: number;
  PlanningTimeMillis?: number;
  QueueTimeMillis?: number;
  WorkUnitsGeneratedCount?: number;
}
export interface GetQueryStatisticsResponse {
  ExecutionStatistics?: ExecutionStatistics;
  PlanningStatistics?: PlanningStatistics;
  QuerySubmissionTime?: Date;
}
export type BooleanNullable = boolean;
export interface GetResourceLFTagsRequest {
  CatalogId?: string;
  Resource: Resource;
  ShowAssignedLFTags?: boolean;
}
export interface ColumnLFTag {
  Name?: string;
  LFTags?: LFTagPair[];
}
export type ColumnLFTagsList = ColumnLFTag[];
export interface GetResourceLFTagsResponse {
  LFTagOnDatabase?: LFTagPair[];
  LFTagsOnTable?: LFTagPair[];
  LFTagsOnColumns?: ColumnLFTag[];
}
export type TokenString = string;
export interface GetTableObjectsRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  TransactionId?: string;
  QueryAsOfTime?: Date;
  PartitionPredicate?: string;
  MaxResults?: number;
  NextToken?: string;
}
export type PartitionValueString = string;
export type PartitionValuesList = string[];
export type ObjectSize = number;
export interface TableObject {
  Uri?: string;
  ETag?: string;
  Size?: number;
}
export type TableObjectList = TableObject[];
export interface PartitionObjects {
  PartitionValues?: string[];
  Objects?: TableObject[];
}
export type PartitionedTableObjectsList = PartitionObjects[];
export interface GetTableObjectsResponse {
  Objects?: PartitionObjects[];
  NextToken?: string;
}
export type AuditContextString = string;
export interface AuditContext {
  AdditionalAuditContext?: string;
}
export type PathString = string;
export type PathStringList = string[];
export type CredentialsScope = "READ" | "READWRITE" | (string & {});
export interface GetTemporaryDataLocationCredentialsRequest {
  DurationSeconds?: number;
  AuditContext?: AuditContext;
  DataLocations?: string[];
  CredentialsScope?: CredentialsScope;
}
export interface TemporaryCredentials {
  AccessKeyId?: string;
  SecretAccessKey?: string | redacted.Redacted<string>;
  SessionToken?: string | redacted.Redacted<string>;
  Expiration?: Date;
}
export interface GetTemporaryDataLocationCredentialsResponse {
  Credentials?: TemporaryCredentials;
  AccessibleDataLocations?: string[];
  CredentialsScope?: CredentialsScope;
}
export type ValueString = string;
export type ValueStringList = string[];
export interface PartitionValueList {
  Values: string[];
}
export type PermissionType =
  | "COLUMN_PERMISSION"
  | "CELL_FILTER_PERMISSION"
  | "NESTED_PERMISSION"
  | "NESTED_CELL_PERMISSION"
  | (string & {});
export type PermissionTypeList = PermissionType[];
export interface GetTemporaryGluePartitionCredentialsRequest {
  TableArn: string;
  Partition: PartitionValueList;
  Permissions?: Permission[];
  DurationSeconds?: number;
  AuditContext?: AuditContext;
  SupportedPermissionTypes?: PermissionType[];
}
export interface GetTemporaryGluePartitionCredentialsResponse {
  AccessKeyId?: string;
  SecretAccessKey?: string | redacted.Redacted<string>;
  SessionToken?: string | redacted.Redacted<string>;
  Expiration?: Date;
}
export type HashString = string;
export type NullableString = string;
export type ContextKey = string;
export type ContextValue = string;
export type AdditionalContextMap = { [key: string]: string | undefined };
export interface QuerySessionContext {
  QueryId?: string;
  QueryStartTime?: Date;
  ClusterId?: string;
  QueryAuthorizationId?: string;
  AdditionalContext?: { [key: string]: string | undefined };
}
export interface GetTemporaryGlueTableCredentialsRequest {
  TableArn: string;
  Permissions?: Permission[];
  DurationSeconds?: number;
  AuditContext?: AuditContext;
  SupportedPermissionTypes?: PermissionType[];
  S3Path?: string;
  QuerySessionContext?: QuerySessionContext;
}
export interface GetTemporaryGlueTableCredentialsResponse {
  AccessKeyId?: string;
  SecretAccessKey?: string | redacted.Redacted<string>;
  SessionToken?: string | redacted.Redacted<string>;
  Expiration?: Date;
  VendedS3Path?: string[];
}
export type GetWorkUnitResultsRequestQueryIdString = string;
export type GetWorkUnitResultsRequestWorkUnitIdLong = number;
export type SyntheticGetWorkUnitResultsRequestWorkUnitTokenString =
  | string
  | redacted.Redacted<string>;
export interface GetWorkUnitResultsRequest {
  QueryId: string;
  WorkUnitId: number;
  WorkUnitToken: string | redacted.Redacted<string>;
}
export interface GetWorkUnitResultsResponse {
  ResultStream?: T.StreamingOutputBody;
}
export type GetWorkUnitsRequestQueryIdString = string;
export interface GetWorkUnitsRequest {
  NextToken?: string;
  PageSize?: number;
  QueryId: string;
}
export type QueryIdString = string;
export type WorkUnitIdLong = number;
export type WorkUnitTokenString = string;
export interface WorkUnitRange {
  WorkUnitIdMax: number;
  WorkUnitIdMin: number;
  WorkUnitToken: string;
}
export type WorkUnitRangeList = WorkUnitRange[];
export interface GetWorkUnitsResponse {
  NextToken?: string;
  QueryId: string;
  WorkUnitRanges: WorkUnitRange[];
}
export interface GrantPermissionsRequest {
  CatalogId?: string;
  Principal: DataLakePrincipal;
  Resource: Resource;
  Permissions: Permission[];
  Condition?: Condition;
  PermissionsWithGrantOption?: Permission[];
}
export interface GrantPermissionsResponse {}
export interface ListDataCellsFilterRequest {
  Table?: TableResource;
  NextToken?: string;
  MaxResults?: number;
}
export type DataCellsFilterList = DataCellsFilter[];
export interface ListDataCellsFilterResponse {
  DataCellsFilters?: DataCellsFilter[];
  NextToken?: string;
}
export interface ListLakeFormationOptInsRequest {
  Principal?: DataLakePrincipal;
  Resource?: Resource;
  MaxResults?: number;
  NextToken?: string;
}
export interface LakeFormationOptInsInfo {
  Resource?: Resource;
  Principal?: DataLakePrincipal;
  Condition?: Condition;
  LastModified?: Date;
  LastUpdatedBy?: string;
}
export type LakeFormationOptInsInfoList = LakeFormationOptInsInfo[];
export interface ListLakeFormationOptInsResponse {
  LakeFormationOptInsInfoList?: LakeFormationOptInsInfo[];
  NextToken?: string;
}
export interface ListLFTagExpressionsRequest {
  CatalogId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface LFTagExpression {
  Name?: string;
  Description?: string;
  CatalogId?: string;
  Expression?: LFTag[];
}
export type LFTagExpressionsList = LFTagExpression[];
export interface ListLFTagExpressionsResponse {
  LFTagExpressions?: LFTagExpression[];
  NextToken?: string;
}
export type ResourceShareType = "FOREIGN" | "ALL" | (string & {});
export interface ListLFTagsRequest {
  CatalogId?: string;
  ResourceShareType?: ResourceShareType;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListLFTagsResponse {
  LFTags?: LFTagPair[];
  NextToken?: string;
}
export type DataLakeResourceType =
  | "CATALOG"
  | "DATABASE"
  | "TABLE"
  | "DATA_LOCATION"
  | "LF_TAG"
  | "LF_TAG_POLICY"
  | "LF_TAG_POLICY_DATABASE"
  | "LF_TAG_POLICY_TABLE"
  | "LF_NAMED_TAG_EXPRESSION"
  | (string & {});
export type TrueFalseString = string;
export interface ListPermissionsRequest {
  CatalogId?: string;
  Principal?: DataLakePrincipal;
  ResourceType?: DataLakeResourceType;
  Resource?: Resource;
  NextToken?: string;
  MaxResults?: number;
  IncludeRelated?: string;
}
export interface ListPermissionsResponse {
  PrincipalResourcePermissions?: PrincipalResourcePermissions[];
  NextToken?: string;
}
export type FieldNameString = "RESOURCE_ARN" | "ROLE_ARN" | "LAST_MODIFIED" | (string & {});
export type ComparisonOperator =
  | "EQ"
  | "NE"
  | "LE"
  | "LT"
  | "GE"
  | "GT"
  | "CONTAINS"
  | "NOT_CONTAINS"
  | "BEGINS_WITH"
  | "IN"
  | "BETWEEN"
  | (string & {});
export type StringValue = string;
export type StringValueList = string[];
export interface FilterCondition {
  Field?: FieldNameString;
  ComparisonOperator?: ComparisonOperator;
  StringValueList?: string[];
}
export type FilterConditionList = FilterCondition[];
export interface ListResourcesRequest {
  FilterConditionList?: FilterCondition[];
  MaxResults?: number;
  NextToken?: string;
}
export type ResourceInfoList = ResourceInfo[];
export interface ListResourcesResponse {
  ResourceInfoList?: ResourceInfo[];
  NextToken?: string;
}
export type OptimizerType = "COMPACTION" | "GARBAGE_COLLECTION" | "ALL" | (string & {});
export interface ListTableStorageOptimizersRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  StorageOptimizerType?: OptimizerType;
  MaxResults?: number;
  NextToken?: string;
}
export type StorageOptimizerConfigKey = string;
export type StorageOptimizerConfigValue = string;
export type StorageOptimizerConfig = { [key: string]: string | undefined };
export type MessageString = string;
export interface StorageOptimizer {
  StorageOptimizerType?: OptimizerType;
  Config?: { [key: string]: string | undefined };
  ErrorMessage?: string;
  Warnings?: string;
  LastRunDetails?: string;
}
export type StorageOptimizerList = StorageOptimizer[];
export interface ListTableStorageOptimizersResponse {
  StorageOptimizerList?: StorageOptimizer[];
  NextToken?: string;
}
export type TransactionStatusFilter =
  | "ALL"
  | "COMPLETED"
  | "ACTIVE"
  | "COMMITTED"
  | "ABORTED"
  | (string & {});
export interface ListTransactionsRequest {
  CatalogId?: string;
  StatusFilter?: TransactionStatusFilter;
  MaxResults?: number;
  NextToken?: string;
}
export type TransactionDescriptionList = TransactionDescription[];
export interface ListTransactionsResponse {
  Transactions?: TransactionDescription[];
  NextToken?: string;
}
export interface PutDataLakeSettingsRequest {
  CatalogId?: string;
  DataLakeSettings: DataLakeSettings;
}
export interface PutDataLakeSettingsResponse {}
export interface RegisterResourceRequest {
  ResourceArn: string;
  UseServiceLinkedRole?: boolean;
  RoleArn?: string;
  WithFederation?: boolean;
  HybridAccessEnabled?: boolean;
  WithPrivilegedAccess?: boolean;
  ExpectedResourceOwnerAccount?: string;
}
export interface RegisterResourceResponse {}
export interface RemoveLFTagsFromResourceRequest {
  CatalogId?: string;
  Resource: Resource;
  LFTags: LFTagPair[];
}
export interface RemoveLFTagsFromResourceResponse {
  Failures?: LFTagError[];
}
export interface RevokePermissionsRequest {
  CatalogId?: string;
  Principal: DataLakePrincipal;
  Resource: Resource;
  Permissions: Permission[];
  Condition?: Condition;
  PermissionsWithGrantOption?: Permission[];
}
export interface RevokePermissionsResponse {}
export type SearchPageSize = number;
export interface SearchDatabasesByLFTagsRequest {
  NextToken?: string;
  MaxResults?: number;
  CatalogId?: string;
  Expression: LFTag[];
}
export interface TaggedDatabase {
  Database?: DatabaseResource;
  LFTags?: LFTagPair[];
}
export type DatabaseLFTagsList = TaggedDatabase[];
export interface SearchDatabasesByLFTagsResponse {
  NextToken?: string;
  DatabaseList?: TaggedDatabase[];
}
export interface SearchTablesByLFTagsRequest {
  NextToken?: string;
  MaxResults?: number;
  CatalogId?: string;
  Expression: LFTag[];
}
export interface TaggedTable {
  Table?: TableResource;
  LFTagOnDatabase?: LFTagPair[];
  LFTagsOnTable?: LFTagPair[];
  LFTagsOnColumns?: ColumnLFTag[];
}
export type TableLFTagsList = TaggedTable[];
export interface SearchTablesByLFTagsResponse {
  NextToken?: string;
  TableList?: TaggedTable[];
}
export type QueryPlanningContextDatabaseNameString = string;
export type QueryParameterMap = { [key: string]: string | undefined };
export interface QueryPlanningContext {
  CatalogId?: string;
  DatabaseName: string;
  QueryAsOfTime?: Date;
  QueryParameters?: { [key: string]: string | undefined };
  TransactionId?: string;
}
export type SyntheticStartQueryPlanningRequestQueryString = string | redacted.Redacted<string>;
export interface StartQueryPlanningRequest {
  QueryPlanningContext: QueryPlanningContext;
  QueryString: string | redacted.Redacted<string>;
}
export interface StartQueryPlanningResponse {
  QueryId: string;
}
export type TransactionType = "READ_AND_WRITE" | "READ_ONLY" | (string & {});
export interface StartTransactionRequest {
  TransactionType?: TransactionType;
}
export interface StartTransactionResponse {
  TransactionId?: string;
}
export interface UpdateDataCellsFilterRequest {
  TableData: DataCellsFilter;
}
export interface UpdateDataCellsFilterResponse {}
export type ApplicationStatus = "ENABLED" | "DISABLED" | (string & {});
export interface UpdateLakeFormationIdentityCenterConfigurationRequest {
  CatalogId?: string;
  ShareRecipients?: DataLakePrincipal[];
  ServiceIntegrations?: ServiceIntegrationUnion[];
  ApplicationStatus?: ApplicationStatus;
  ExternalFiltering?: ExternalFilteringConfiguration;
}
export interface UpdateLakeFormationIdentityCenterConfigurationResponse {}
export interface UpdateLFTagRequest {
  CatalogId?: string;
  TagKey: string;
  TagValuesToDelete?: string[];
  TagValuesToAdd?: string[];
}
export interface UpdateLFTagResponse {}
export interface UpdateLFTagExpressionRequest {
  Name: string;
  Description?: string;
  CatalogId?: string;
  Expression: LFTag[];
}
export interface UpdateLFTagExpressionResponse {}
export interface UpdateResourceRequest {
  RoleArn: string;
  ResourceArn: string;
  WithFederation?: boolean;
  HybridAccessEnabled?: boolean;
  ExpectedResourceOwnerAccount?: string;
}
export interface UpdateResourceResponse {}
export interface AddObjectInput {
  Uri: string;
  ETag: string;
  Size: number;
  PartitionValues?: string[];
}
export interface DeleteObjectInput {
  Uri: string;
  ETag?: string;
  PartitionValues?: string[];
}
export interface WriteOperation {
  AddObject?: AddObjectInput;
  DeleteObject?: DeleteObjectInput;
}
export type WriteOperationList = WriteOperation[];
export interface UpdateTableObjectsRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  TransactionId?: string;
  WriteOperations: WriteOperation[];
}
export interface UpdateTableObjectsResponse {}
export type StorageOptimizerConfigMap = {
  [key in OptimizerType]?: { [key: string]: string | undefined };
};
export interface UpdateTableStorageOptimizerRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  StorageOptimizerConfig: { [key: string]: { [key: string]: string | undefined } | undefined };
}
export type Result = string;
export interface UpdateTableStorageOptimizerResponse {
  Result?: string;
}
export type AddLFTagsToResourceError =
  | AccessDeniedException
  | ConcurrentModificationException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Attaches one or more LF-tags to an existing resource.
 */
export const addLFTagsToResource: API.OperationMethod<
  AddLFTagsToResourceRequest,
  AddLFTagsToResourceResponse,
  AddLFTagsToResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<AddLFTagsToResourceRequest>,
  output: __S(19) as any as S.Schema<AddLFTagsToResourceResponse>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddLFTagsToResource",
}));

export type AssumeDecoratedRoleWithSAMLError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller's account as it can only be called with valid SAML assertions.
 * Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session.
 *
 * This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API `GetDataAccess`.
 * Therefore, all SAML roles that can be assumed via `AssumeDecoratedRoleWithSAML` must at a minimum include `lakeformation:GetDataAccess` in their role policies.
 * A typical IAM policy attached to such a role would include the following actions:
 *
 * - glue:*Database*
 *
 * - glue:*Table*
 *
 * - glue:*Partition*
 *
 * - glue:*UserDefinedFunction*
 *
 * - lakeformation:GetDataAccess
 */
export const assumeDecoratedRoleWithSAML: API.OperationMethod<
  AssumeDecoratedRoleWithSAMLRequest,
  AssumeDecoratedRoleWithSAMLResponse,
  AssumeDecoratedRoleWithSAMLError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<AssumeDecoratedRoleWithSAMLRequest>,
  output: __S(21) as any as S.Schema<AssumeDecoratedRoleWithSAMLResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssumeDecoratedRoleWithSAML",
}));

export type BatchGrantPermissionsError =
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Batch operation to grant permissions to the principal.
 */
export const batchGrantPermissions: API.OperationMethod<
  BatchGrantPermissionsRequest,
  BatchGrantPermissionsResponse,
  BatchGrantPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27) as any as S.Schema<BatchGrantPermissionsRequest>,
  output: __S(30) as any as S.Schema<BatchGrantPermissionsResponse>,
  errors: [InvalidInputException, OperationTimeoutException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGrantPermissions",
}));

export type BatchRevokePermissionsError =
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Batch operation to revoke permissions from the principal.
 */
export const batchRevokePermissions: API.OperationMethod<
  BatchRevokePermissionsRequest,
  BatchRevokePermissionsResponse,
  BatchRevokePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31) as any as S.Schema<BatchRevokePermissionsRequest>,
  output: __S(30) as any as S.Schema<BatchRevokePermissionsResponse>,
  errors: [InvalidInputException, OperationTimeoutException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchRevokePermissions",
}));

export type CancelTransactionError =
  | ConcurrentModificationException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | TransactionCommitInProgressException
  | TransactionCommittedException
  | CommonErrors;
/**
 * Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.
 */
export const cancelTransaction: API.OperationMethod<
  CancelTransactionRequest,
  CancelTransactionResponse,
  CancelTransactionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32) as any as S.Schema<CancelTransactionRequest>,
  output: __S(2) as any as S.Schema<CancelTransactionResponse>,
  errors: [
    ConcurrentModificationException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    TransactionCommitInProgressException,
    TransactionCommittedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelTransaction",
}));

export type CommitTransactionError =
  | ConcurrentModificationException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | TransactionCanceledException
  | CommonErrors;
/**
 * Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.
 */
export const commitTransaction: API.OperationMethod<
  CommitTransactionRequest,
  CommitTransactionResponse,
  CommitTransactionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33) as any as S.Schema<CommitTransactionRequest>,
  output: __S(34) as any as S.Schema<CommitTransactionResponse>,
  errors: [
    ConcurrentModificationException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    TransactionCanceledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CommitTransaction",
}));

export type CreateDataCellsFilterError =
  | AccessDeniedException
  | AlreadyExistsException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException
  | CommonErrors;
/**
 * Creates a data cell filter to allow one to grant access to certain columns on certain rows.
 */
export const createDataCellsFilter: API.OperationMethod<
  CreateDataCellsFilterRequest,
  CreateDataCellsFilterResponse,
  CreateDataCellsFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37) as any as S.Schema<CreateDataCellsFilterRequest>,
  output: __S(2) as any as S.Schema<CreateDataCellsFilterResponse>,
  errors: [
    AccessDeniedException,
    AlreadyExistsException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    ResourceNumberLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataCellsFilter",
}));

export type CreateLakeFormationIdentityCenterConfigurationError =
  | AccessDeniedException
  | AlreadyExistsException
  | ConcurrentModificationException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Creates an IAM Identity Center connection with Lake Formation to allow IAM Identity Center users and groups to access Data Catalog resources.
 */
export const createLakeFormationIdentityCenterConfiguration: API.OperationMethod<
  CreateLakeFormationIdentityCenterConfigurationRequest,
  CreateLakeFormationIdentityCenterConfigurationResponse,
  CreateLakeFormationIdentityCenterConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45) as any as S.Schema<CreateLakeFormationIdentityCenterConfigurationRequest>,
  output: __S(46) as any as S.Schema<CreateLakeFormationIdentityCenterConfigurationResponse>,
  errors: [
    AccessDeniedException,
    AlreadyExistsException,
    ConcurrentModificationException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLakeFormationIdentityCenterConfiguration",
}));

export type CreateLakeFormationOptInError =
  | AccessDeniedException
  | ConcurrentModificationException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException
  | InvalidLakeFormationPrincipal
  | CommonErrors;
/**
 * Enforce Lake Formation permissions for the given databases, tables, and principals.
 */
export const createLakeFormationOptIn: API.OperationMethod<
  CreateLakeFormationOptInRequest,
  CreateLakeFormationOptInResponse,
  CreateLakeFormationOptInError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47) as any as S.Schema<CreateLakeFormationOptInRequest>,
  output: __S(48) as any as S.Schema<CreateLakeFormationOptInResponse>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    ResourceNumberLimitExceededException,
    InvalidLakeFormationPrincipal,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLakeFormationOptIn",
}));

export type CreateLFTagError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException
  | CommonErrors;
/**
 * Creates an LF-tag with the specified name and values.
 */
export const createLFTag: API.OperationMethod<
  CreateLFTagRequest,
  CreateLFTagResponse,
  CreateLFTagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<CreateLFTagRequest>,
  output: __S(2) as any as S.Schema<CreateLFTagResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    ResourceNumberLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLFTag",
}));

export type CreateLFTagExpressionError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException
  | CommonErrors;
/**
 * Creates a new LF-Tag expression with the provided name, description, catalog ID, and
 * expression body. This call fails if a LF-Tag expression with the same name already exists in
 * the caller's account or if the underlying LF-Tags don't exist. To call this API operation,
 * caller needs the following Lake Formation permissions:
 *
 * `CREATE_LF_TAG_EXPRESSION` on the root catalog resource.
 *
 * `GRANT_WITH_LF_TAG_EXPRESSION` on all underlying LF-Tag key:value pairs
 * included in the expression.
 */
export const createLFTagExpression: API.OperationMethod<
  CreateLFTagExpressionRequest,
  CreateLFTagExpressionResponse,
  CreateLFTagExpressionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<CreateLFTagExpressionRequest>,
  output: __S(2) as any as S.Schema<CreateLFTagExpressionResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    ResourceNumberLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLFTagExpression",
}));

export type DeleteDataCellsFilterError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Deletes a data cell filter.
 */
export const deleteDataCellsFilter: API.OperationMethod<
  DeleteDataCellsFilterRequest,
  DeleteDataCellsFilterResponse,
  DeleteDataCellsFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<DeleteDataCellsFilterRequest>,
  output: __S(2) as any as S.Schema<DeleteDataCellsFilterResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataCellsFilter",
}));

export type DeleteLakeFormationIdentityCenterConfigurationError =
  | AccessDeniedException
  | ConcurrentModificationException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Deletes an IAM Identity Center connection with Lake Formation.
 */
export const deleteLakeFormationIdentityCenterConfiguration: API.OperationMethod<
  DeleteLakeFormationIdentityCenterConfigurationRequest,
  DeleteLakeFormationIdentityCenterConfigurationResponse,
  DeleteLakeFormationIdentityCenterConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52) as any as S.Schema<DeleteLakeFormationIdentityCenterConfigurationRequest>,
  output: __S(48) as any as S.Schema<DeleteLakeFormationIdentityCenterConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLakeFormationIdentityCenterConfiguration",
}));

export type DeleteLakeFormationOptInError =
  | AccessDeniedException
  | ConcurrentModificationException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | InvalidLakeFormationPrincipal
  | CommonErrors;
/**
 * Remove the Lake Formation permissions enforcement of the given databases, tables, and principals.
 */
export const deleteLakeFormationOptIn: API.OperationMethod<
  DeleteLakeFormationOptInRequest,
  DeleteLakeFormationOptInResponse,
  DeleteLakeFormationOptInError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53) as any as S.Schema<DeleteLakeFormationOptInRequest>,
  output: __S(48) as any as S.Schema<DeleteLakeFormationOptInResponse>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    InvalidLakeFormationPrincipal,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLakeFormationOptIn",
}));

export type DeleteLFTagError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Deletes an LF-tag by its key name. The operation fails if the specified tag key doesn't
 * exist. When you delete an LF-Tag:
 *
 * - The associated LF-Tag policy becomes invalid.
 *
 * - Resources that had this tag assigned will no longer have the tag policy applied to
 * them.
 */
export const deleteLFTag: API.OperationMethod<
  DeleteLFTagRequest,
  DeleteLFTagResponse,
  DeleteLFTagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54) as any as S.Schema<DeleteLFTagRequest>,
  output: __S(2) as any as S.Schema<DeleteLFTagResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLFTag",
}));

export type DeleteLFTagExpressionError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Deletes the LF-Tag expression. The caller must be a data lake admin or have `DROP` permissions on the LF-Tag expression.
 * Deleting a LF-Tag expression will also delete all `LFTagPolicy` permissions referencing the LF-Tag expression.
 */
export const deleteLFTagExpression: API.OperationMethod<
  DeleteLFTagExpressionRequest,
  DeleteLFTagExpressionResponse,
  DeleteLFTagExpressionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55) as any as S.Schema<DeleteLFTagExpressionRequest>,
  output: __S(2) as any as S.Schema<DeleteLFTagExpressionResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLFTagExpression",
}));

export type DeleteObjectsOnCancelError =
  | ConcurrentModificationException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | ResourceNotReadyException
  | TransactionCanceledException
  | TransactionCommittedException
  | CommonErrors;
/**
 * For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted
 * if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels.
 *
 * The Glue ETL library function `write_dynamic_frame.from_catalog()` includes an option to automatically
 * call `DeleteObjectsOnCancel` before writes. For more information, see
 * Rolling Back Amazon S3 Writes.
 */
export const deleteObjectsOnCancel: API.OperationMethod<
  DeleteObjectsOnCancelRequest,
  DeleteObjectsOnCancelResponse,
  DeleteObjectsOnCancelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<DeleteObjectsOnCancelRequest>,
  output: __S(2) as any as S.Schema<DeleteObjectsOnCancelResponse>,
  errors: [
    ConcurrentModificationException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    ResourceNotReadyException,
    TransactionCanceledException,
    TransactionCommittedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteObjectsOnCancel",
}));

export type DeregisterResourceError =
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | LastServiceLinkedRoleRegistration
  | CommonErrors;
/**
 * Deregisters the resource as managed by the Data Catalog.
 *
 * When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.
 */
export const deregisterResource: API.OperationMethod<
  DeregisterResourceRequest,
  DeregisterResourceResponse,
  DeregisterResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59) as any as S.Schema<DeregisterResourceRequest>,
  output: __S(2) as any as S.Schema<DeregisterResourceResponse>,
  errors: [
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    LastServiceLinkedRoleRegistration,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterResource",
}));

export type DescribeLakeFormationIdentityCenterConfigurationError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Retrieves the instance ARN and application ARN for the connection.
 */
export const describeLakeFormationIdentityCenterConfiguration: API.OperationMethod<
  DescribeLakeFormationIdentityCenterConfigurationRequest,
  DescribeLakeFormationIdentityCenterConfigurationResponse,
  DescribeLakeFormationIdentityCenterConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<DescribeLakeFormationIdentityCenterConfigurationRequest>,
  output: __S(61) as any as S.Schema<DescribeLakeFormationIdentityCenterConfigurationResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLakeFormationIdentityCenterConfiguration",
}));

export type DescribeResourceError =
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Retrieves the current data access role for the given resource registered in Lake Formation.
 */
export const describeResource: API.OperationMethod<
  DescribeResourceRequest,
  DescribeResourceResponse,
  DescribeResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62) as any as S.Schema<DescribeResourceRequest>,
  output: __S(64) as any as S.Schema<DescribeResourceResponse>,
  errors: [
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResource",
}));

export type DescribeTransactionError =
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Returns the details of a single transaction.
 */
export const describeTransaction: API.OperationMethod<
  DescribeTransactionRequest,
  DescribeTransactionResponse,
  DescribeTransactionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65) as any as S.Schema<DescribeTransactionRequest>,
  output: __S(67) as any as S.Schema<DescribeTransactionResponse>,
  errors: [
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTransaction",
}));

export type ExtendTransactionError =
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | TransactionCanceledException
  | TransactionCommitInProgressException
  | TransactionCommittedException
  | CommonErrors;
/**
 * Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.
 *
 * Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.
 */
export const extendTransaction: API.OperationMethod<
  ExtendTransactionRequest,
  ExtendTransactionResponse,
  ExtendTransactionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68) as any as S.Schema<ExtendTransactionRequest>,
  output: __S(2) as any as S.Schema<ExtendTransactionResponse>,
  errors: [
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    TransactionCanceledException,
    TransactionCommitInProgressException,
    TransactionCommittedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExtendTransaction",
}));

export type GetDataCellsFilterError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Returns a data cells filter.
 */
export const getDataCellsFilter: API.OperationMethod<
  GetDataCellsFilterRequest,
  GetDataCellsFilterResponse,
  GetDataCellsFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69) as any as S.Schema<GetDataCellsFilterRequest>,
  output: __S(70) as any as S.Schema<GetDataCellsFilterResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataCellsFilter",
}));

export type GetDataLakePrincipalError =
  | AccessDeniedException
  | InternalServiceException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Returns the identity of the invoking principal.
 */
export const getDataLakePrincipal: API.OperationMethod<
  GetDataLakePrincipalRequest,
  GetDataLakePrincipalResponse,
  GetDataLakePrincipalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<GetDataLakePrincipalRequest>,
  output: __S(72) as any as S.Schema<GetDataLakePrincipalResponse>,
  errors: [AccessDeniedException, InternalServiceException, OperationTimeoutException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataLakePrincipal",
}));

export type GetDataLakeSettingsError =
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | CommonErrors;
/**
 * Retrieves the list of the data lake administrators of a Lake Formation-managed data lake.
 */
export const getDataLakeSettings: API.OperationMethod<
  GetDataLakeSettingsRequest,
  GetDataLakeSettingsResponse,
  GetDataLakeSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(73) as any as S.Schema<GetDataLakeSettingsRequest>,
  output: __S(78) as any as S.Schema<GetDataLakeSettingsResponse>,
  errors: [EntityNotFoundException, InternalServiceException, InvalidInputException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataLakeSettings",
}));

export type GetEffectivePermissionsForPathError =
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Returns the Lake Formation permissions for a specified table or database resource located
 * at a path in Amazon S3. `GetEffectivePermissionsForPath` will not return databases and tables if the catalog is encrypted.
 */
export const getEffectivePermissionsForPath: API.PaginatedOperationMethod<
  GetEffectivePermissionsForPathRequest,
  GetEffectivePermissionsForPathResponse,
  GetEffectivePermissionsForPathError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(79) as any as S.Schema<GetEffectivePermissionsForPathRequest>,
  output: __S(83) as any as S.Schema<GetEffectivePermissionsForPathResponse>,
  errors: [
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEffectivePermissionsForPath",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetLFTagError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Returns an LF-tag definition.
 */
export const getLFTag: API.OperationMethod<
  GetLFTagRequest,
  GetLFTagResponse,
  GetLFTagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84) as any as S.Schema<GetLFTagRequest>,
  output: __S(85) as any as S.Schema<GetLFTagResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLFTag",
}));

export type GetLFTagExpressionError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Returns the details about the LF-Tag expression. The caller must be a data lake admin or must have `DESCRIBE` permission on the LF-Tag expression resource.
 */
export const getLFTagExpression: API.OperationMethod<
  GetLFTagExpressionRequest,
  GetLFTagExpressionResponse,
  GetLFTagExpressionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86) as any as S.Schema<GetLFTagExpressionRequest>,
  output: __S(87) as any as S.Schema<GetLFTagExpressionResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLFTagExpression",
}));

export type GetQueryStateError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidInputException
  | CommonErrors;
/**
 * Returns the state of a query previously submitted. Clients are expected to poll `GetQueryState` to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to `StartQueryPlanning`.
 */
export const getQueryState: API.OperationMethod<
  GetQueryStateRequest,
  GetQueryStateResponse,
  GetQueryStateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(88) as any as S.Schema<GetQueryStateRequest>,
  output: __S(89) as any as S.Schema<GetQueryStateResponse>,
  errors: [AccessDeniedException, InternalServiceException, InvalidInputException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetQueryState",
  endpointHostPrefix: "query-",
}));

export type GetQueryStatisticsError =
  | AccessDeniedException
  | ExpiredException
  | InternalServiceException
  | InvalidInputException
  | StatisticsNotReadyYetException
  | ThrottledException
  | CommonErrors;
/**
 * Retrieves statistics on the planning and execution of a query.
 */
export const getQueryStatistics: API.OperationMethod<
  GetQueryStatisticsRequest,
  GetQueryStatisticsResponse,
  GetQueryStatisticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90) as any as S.Schema<GetQueryStatisticsRequest>,
  output: __S(93) as any as S.Schema<GetQueryStatisticsResponse>,
  errors: [
    AccessDeniedException,
    ExpiredException,
    InternalServiceException,
    InvalidInputException,
    StatisticsNotReadyYetException,
    ThrottledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetQueryStatistics",
  endpointHostPrefix: "query-",
}));

export type GetResourceLFTagsError =
  | AccessDeniedException
  | EntityNotFoundException
  | GlueEncryptionException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Returns the LF-tags applied to a resource.
 */
export const getResourceLFTags: API.OperationMethod<
  GetResourceLFTagsRequest,
  GetResourceLFTagsResponse,
  GetResourceLFTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(94) as any as S.Schema<GetResourceLFTagsRequest>,
  output: __S(97) as any as S.Schema<GetResourceLFTagsResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    GlueEncryptionException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourceLFTags",
}));

export type GetTableObjectsError =
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | ResourceNotReadyException
  | TransactionCanceledException
  | TransactionCommittedException
  | CommonErrors;
/**
 * Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.
 */
export const getTableObjects: API.PaginatedOperationMethod<
  GetTableObjectsRequest,
  GetTableObjectsResponse,
  GetTableObjectsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(98) as any as S.Schema<GetTableObjectsRequest>,
  output: __S(103) as any as S.Schema<GetTableObjectsResponse>,
  errors: [
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    ResourceNotReadyException,
    TransactionCanceledException,
    TransactionCommittedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableObjects",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetTemporaryDataLocationCredentialsError =
  | AccessDeniedException
  | ConflictException
  | EntityNotFoundException
  | GlueEncryptionException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Allows a user or application in a secure environment to access data in a specific Amazon S3 location registered with Lake Formation by providing temporary scoped credentials that are limited to the requested data location and
 * the caller's authorized access level.
 *
 * `GetDataAccess` is logged in CloudTrail whenever a principal requests temporary data location credentials to access data in a data lake location that is registered with Lake Formation.
 *
 * The API operation returns an error in the following scenarios:
 *
 * - The data location is not registered with Lake Formation.
 *
 * - No Glue table is associated with the data location.
 *
 * - The caller doesn't have required permissions on the associated table. The caller must have
 * `SELECT` or `SUPER` permissions on the associated table, and
 * credential vending for full table access must be enabled in the data lake settings.
 *
 * For more information, see Application integration for full table access.
 *
 * - The data location is in a different Amazon Web Services Region. Lake Formation doesn't
 * support cross-Region access when vending credentials for a data location. Lake Formation only supports Amazon S3 paths registered within the same Region as the API
 * call.
 */
export const getTemporaryDataLocationCredentials: API.OperationMethod<
  GetTemporaryDataLocationCredentialsRequest,
  GetTemporaryDataLocationCredentialsResponse,
  GetTemporaryDataLocationCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105) as any as S.Schema<GetTemporaryDataLocationCredentialsRequest>,
  output: __S(107) as any as S.Schema<GetTemporaryDataLocationCredentialsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    EntityNotFoundException,
    GlueEncryptionException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTemporaryDataLocationCredentials",
}));

export type GetTemporaryGluePartitionCredentialsError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | PermissionTypeMismatchException
  | CommonErrors;
/**
 * This API is identical to `GetTemporaryTableCredentials` except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.
 */
export const getTemporaryGluePartitionCredentials: API.OperationMethod<
  GetTemporaryGluePartitionCredentialsRequest,
  GetTemporaryGluePartitionCredentialsResponse,
  GetTemporaryGluePartitionCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109) as any as S.Schema<GetTemporaryGluePartitionCredentialsRequest>,
  output: __S(21) as any as S.Schema<GetTemporaryGluePartitionCredentialsResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    PermissionTypeMismatchException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTemporaryGluePartitionCredentials",
}));

export type GetTemporaryGlueTableCredentialsError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | PermissionTypeMismatchException
  | CommonErrors;
/**
 * Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.
 *
 * To call this API, the role that the service assumes must have `lakeformation:GetDataAccess` permission on the resource.
 */
export const getTemporaryGlueTableCredentials: API.OperationMethod<
  GetTemporaryGlueTableCredentialsRequest,
  GetTemporaryGlueTableCredentialsResponse,
  GetTemporaryGlueTableCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111) as any as S.Schema<GetTemporaryGlueTableCredentialsRequest>,
  output: __S(112) as any as S.Schema<GetTemporaryGlueTableCredentialsResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    PermissionTypeMismatchException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTemporaryGlueTableCredentials",
}));

export type GetWorkUnitResultsError =
  | AccessDeniedException
  | ExpiredException
  | InternalServiceException
  | InvalidInputException
  | ThrottledException
  | CommonErrors;
/**
 * Returns the work units resulting from the query. Work units can be executed in any order and in parallel.
 */
export const getWorkUnitResults: API.OperationMethod<
  GetWorkUnitResultsRequest,
  GetWorkUnitResultsResponse,
  GetWorkUnitResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(113) as any as S.Schema<GetWorkUnitResultsRequest>,
  output: __S(114) as any as S.Schema<GetWorkUnitResultsResponse>,
  errors: [
    AccessDeniedException,
    ExpiredException,
    InternalServiceException,
    InvalidInputException,
    ThrottledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkUnitResults",
  endpointHostPrefix: "data-",
}));

export type GetWorkUnitsError =
  | AccessDeniedException
  | ExpiredException
  | InternalServiceException
  | InvalidInputException
  | WorkUnitsNotReadyYetException
  | CommonErrors;
/**
 * Retrieves the work units generated by the `StartQueryPlanning` operation.
 */
export const getWorkUnits: API.PaginatedOperationMethod<
  GetWorkUnitsRequest,
  GetWorkUnitsResponse,
  GetWorkUnitsError,
  Credentials | HttpClient.HttpClient,
  WorkUnitRange
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(115) as any as S.Schema<GetWorkUnitsRequest>,
  output: __S(118) as any as S.Schema<GetWorkUnitsResponse>,
  errors: [
    AccessDeniedException,
    ExpiredException,
    InternalServiceException,
    InvalidInputException,
    WorkUnitsNotReadyYetException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkUnits",
  endpointHostPrefix: "query-",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "WorkUnitRanges",
    pageSize: "PageSize",
  } as const,
})) as any;

export type GrantPermissionsError =
  | ConcurrentModificationException
  | EntityNotFoundException
  | InvalidInputException
  | InvalidLakeFormationPrincipal
  | CommonErrors;
/**
 * Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
 *
 * For information about permissions, see Security and Access Control to Metadata and Data.
 */
export const grantPermissions: API.OperationMethod<
  GrantPermissionsRequest,
  GrantPermissionsResponse,
  GrantPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119) as any as S.Schema<GrantPermissionsRequest>,
  output: __S(2) as any as S.Schema<GrantPermissionsResponse>,
  errors: [
    ConcurrentModificationException,
    EntityNotFoundException,
    InvalidInputException,
    InvalidLakeFormationPrincipal,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GrantPermissions",
}));

export type ListDataCellsFilterError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Lists all the data cell filters on a table.
 */
export const listDataCellsFilter: API.PaginatedOperationMethod<
  ListDataCellsFilterRequest,
  ListDataCellsFilterResponse,
  ListDataCellsFilterError,
  Credentials | HttpClient.HttpClient,
  DataCellsFilter
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(120) as any as S.Schema<ListDataCellsFilterRequest>,
  output: __S(122) as any as S.Schema<ListDataCellsFilterResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataCellsFilter",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "DataCellsFilters",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListLakeFormationOptInsError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | EntityNotFoundException
  | InvalidLakeFormationPrincipal
  | CommonErrors;
/**
 * Retrieve the current list of resources and principals that are opt in to enforce Lake Formation permissions.
 */
export const listLakeFormationOptIns: API.PaginatedOperationMethod<
  ListLakeFormationOptInsRequest,
  ListLakeFormationOptInsResponse,
  ListLakeFormationOptInsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(123) as any as S.Schema<ListLakeFormationOptInsRequest>,
  output: __S(126) as any as S.Schema<ListLakeFormationOptInsResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    EntityNotFoundException,
    InvalidLakeFormationPrincipal,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLakeFormationOptIns",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListLFTagExpressionsError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Returns the LF-Tag expressions in caller's account filtered based on caller's permissions. Data Lake and read only admins implicitly can see all tag expressions in their account, else caller needs DESCRIBE permissions on tag expression.
 */
export const listLFTagExpressions: API.PaginatedOperationMethod<
  ListLFTagExpressionsRequest,
  ListLFTagExpressionsResponse,
  ListLFTagExpressionsError,
  Credentials | HttpClient.HttpClient,
  LFTagExpression
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(127) as any as S.Schema<ListLFTagExpressionsRequest>,
  output: __S(130) as any as S.Schema<ListLFTagExpressionsResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLFTagExpressions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "LFTagExpressions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListLFTagsError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Lists LF-tags that the requester has permission to view.
 */
export const listLFTags: API.PaginatedOperationMethod<
  ListLFTagsRequest,
  ListLFTagsResponse,
  ListLFTagsError,
  Credentials | HttpClient.HttpClient,
  LFTagPair
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(131) as any as S.Schema<ListLFTagsRequest>,
  output: __S(132) as any as S.Schema<ListLFTagsResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLFTags",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "LFTags",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPermissionsError =
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | InvalidLakeFormationPrincipal
  | CommonErrors;
/**
 * Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.
 *
 * This operation returns only those permissions that have been explicitly granted. If both
 * `Principal` and `Resource` parameters are provided, the response
 * returns effective permissions rather than the explicitly granted permissions.
 *
 * For information about permissions, see Security and Access Control to Metadata and Data.
 */
export const listPermissions: API.PaginatedOperationMethod<
  ListPermissionsRequest,
  ListPermissionsResponse,
  ListPermissionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(133) as any as S.Schema<ListPermissionsRequest>,
  output: __S(134) as any as S.Schema<ListPermissionsResponse>,
  errors: [
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    InvalidLakeFormationPrincipal,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPermissions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListResourcesError =
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Lists the resources registered to be managed by the Data Catalog.
 */
export const listResources: API.PaginatedOperationMethod<
  ListResourcesRequest,
  ListResourcesResponse,
  ListResourcesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(137) as any as S.Schema<ListResourcesRequest>,
  output: __S(139) as any as S.Schema<ListResourcesResponse>,
  errors: [InternalServiceException, InvalidInputException, OperationTimeoutException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResources",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTableStorageOptimizersError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | CommonErrors;
/**
 * Returns the configuration of all storage optimizers associated with a specified table.
 */
export const listTableStorageOptimizers: API.PaginatedOperationMethod<
  ListTableStorageOptimizersRequest,
  ListTableStorageOptimizersResponse,
  ListTableStorageOptimizersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(140) as any as S.Schema<ListTableStorageOptimizersRequest>,
  output: __S(143) as any as S.Schema<ListTableStorageOptimizersResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTableStorageOptimizers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTransactionsError =
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.
 *
 * This operation can help you identify uncommitted transactions or to get information about transactions.
 */
export const listTransactions: API.PaginatedOperationMethod<
  ListTransactionsRequest,
  ListTransactionsResponse,
  ListTransactionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(144) as any as S.Schema<ListTransactionsRequest>,
  output: __S(146) as any as S.Schema<ListTransactionsResponse>,
  errors: [InternalServiceException, InvalidInputException, OperationTimeoutException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTransactions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type PutDataLakeSettingsError =
  | InternalServiceException
  | InvalidInputException
  | InvalidLakeFormationPrincipal
  | CommonErrors;
/**
 * Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see Granting Lake Formation Permissions.
 *
 * This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.
 */
export const putDataLakeSettings: API.OperationMethod<
  PutDataLakeSettingsRequest,
  PutDataLakeSettingsResponse,
  PutDataLakeSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(147) as any as S.Schema<PutDataLakeSettingsRequest>,
  output: __S(2) as any as S.Schema<PutDataLakeSettingsResponse>,
  errors: [InternalServiceException, InvalidInputException, InvalidLakeFormationPrincipal],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDataLakeSettings",
}));

export type RegisterResourceError =
  | AccessDeniedException
  | AlreadyExistsException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException
  | CommonErrors;
/**
 * Registers the resource as managed by the Data Catalog.
 *
 * To add or update data, Lake Formation needs read/write access to the chosen data location. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.
 *
 * The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.
 *
 * ResourceArn = arn:aws:s3:::my-bucket/
 * UseServiceLinkedRole = true
 *
 * If `UseServiceLinkedRole` is not set to true, you must provide or set the `RoleArn`:
 *
 * `arn:aws:iam::12345:role/my-data-access-role`
 */
export const registerResource: API.OperationMethod<
  RegisterResourceRequest,
  RegisterResourceResponse,
  RegisterResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(148) as any as S.Schema<RegisterResourceRequest>,
  output: __S(2) as any as S.Schema<RegisterResourceResponse>,
  errors: [
    AccessDeniedException,
    AlreadyExistsException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    ResourceNumberLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterResource",
}));

export type RemoveLFTagsFromResourceError =
  | AccessDeniedException
  | ConcurrentModificationException
  | EntityNotFoundException
  | GlueEncryptionException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in `tableWithColumns` to specify column input.
 */
export const removeLFTagsFromResource: API.OperationMethod<
  RemoveLFTagsFromResourceRequest,
  RemoveLFTagsFromResourceResponse,
  RemoveLFTagsFromResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(149) as any as S.Schema<RemoveLFTagsFromResourceRequest>,
  output: __S(19) as any as S.Schema<RemoveLFTagsFromResourceResponse>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    EntityNotFoundException,
    GlueEncryptionException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveLFTagsFromResource",
}));

export type RevokePermissionsError =
  | ConcurrentModificationException
  | EntityNotFoundException
  | InvalidInputException
  | InvalidLakeFormationPrincipal
  | CommonErrors;
/**
 * Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
 */
export const revokePermissions: API.OperationMethod<
  RevokePermissionsRequest,
  RevokePermissionsResponse,
  RevokePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(150) as any as S.Schema<RevokePermissionsRequest>,
  output: __S(2) as any as S.Schema<RevokePermissionsResponse>,
  errors: [
    ConcurrentModificationException,
    EntityNotFoundException,
    InvalidInputException,
    InvalidLakeFormationPrincipal,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RevokePermissions",
}));

export type SearchDatabasesByLFTagsError =
  | AccessDeniedException
  | EntityNotFoundException
  | GlueEncryptionException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * This operation allows a search on `DATABASE` resources by `TagCondition`. This operation is used by admins who want to grant user permissions on certain `TagConditions`. Before making a grant, the admin can use `SearchDatabasesByTags` to find all resources where the given `TagConditions` are valid to verify whether the returned resources can be shared.
 */
export const searchDatabasesByLFTags: API.PaginatedOperationMethod<
  SearchDatabasesByLFTagsRequest,
  SearchDatabasesByLFTagsResponse,
  SearchDatabasesByLFTagsError,
  Credentials | HttpClient.HttpClient,
  TaggedDatabase
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(151) as any as S.Schema<SearchDatabasesByLFTagsRequest>,
  output: __S(154) as any as S.Schema<SearchDatabasesByLFTagsResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    GlueEncryptionException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchDatabasesByLFTags",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "DatabaseList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type SearchTablesByLFTagsError =
  | AccessDeniedException
  | EntityNotFoundException
  | GlueEncryptionException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * This operation allows a search on `TABLE` resources by `LFTag`s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use `SearchTablesByLFTags` to find all resources where the given `LFTag`s are valid to verify whether the returned resources can be shared.
 */
export const searchTablesByLFTags: API.PaginatedOperationMethod<
  SearchTablesByLFTagsRequest,
  SearchTablesByLFTagsResponse,
  SearchTablesByLFTagsError,
  Credentials | HttpClient.HttpClient,
  TaggedTable
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(155) as any as S.Schema<SearchTablesByLFTagsRequest>,
  output: __S(158) as any as S.Schema<SearchTablesByLFTagsResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    GlueEncryptionException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchTablesByLFTags",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TableList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type StartQueryPlanningError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidInputException
  | ThrottledException
  | CommonErrors;
/**
 * Submits a request to process a query statement.
 *
 * This operation generates work units that can be retrieved with the `GetWorkUnits` operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.
 */
export const startQueryPlanning: API.OperationMethod<
  StartQueryPlanningRequest,
  StartQueryPlanningResponse,
  StartQueryPlanningError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(160) as any as S.Schema<StartQueryPlanningRequest>,
  output: __S(161) as any as S.Schema<StartQueryPlanningResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidInputException,
    ThrottledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartQueryPlanning",
  endpointHostPrefix: "query-",
}));

export type StartTransactionError =
  | InternalServiceException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.
 */
export const startTransaction: API.OperationMethod<
  StartTransactionRequest,
  StartTransactionResponse,
  StartTransactionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(162) as any as S.Schema<StartTransactionRequest>,
  output: __S(163) as any as S.Schema<StartTransactionResponse>,
  errors: [InternalServiceException, OperationTimeoutException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTransaction",
}));

export type UpdateDataCellsFilterError =
  | AccessDeniedException
  | ConcurrentModificationException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Updates a data cell filter.
 */
export const updateDataCellsFilter: API.OperationMethod<
  UpdateDataCellsFilterRequest,
  UpdateDataCellsFilterResponse,
  UpdateDataCellsFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(164) as any as S.Schema<UpdateDataCellsFilterRequest>,
  output: __S(2) as any as S.Schema<UpdateDataCellsFilterResponse>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDataCellsFilter",
}));

export type UpdateLakeFormationIdentityCenterConfigurationError =
  | AccessDeniedException
  | ConcurrentModificationException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Updates the IAM Identity Center connection parameters.
 */
export const updateLakeFormationIdentityCenterConfiguration: API.OperationMethod<
  UpdateLakeFormationIdentityCenterConfigurationRequest,
  UpdateLakeFormationIdentityCenterConfigurationResponse,
  UpdateLakeFormationIdentityCenterConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(165) as any as S.Schema<UpdateLakeFormationIdentityCenterConfigurationRequest>,
  output: __S(48) as any as S.Schema<UpdateLakeFormationIdentityCenterConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLakeFormationIdentityCenterConfiguration",
}));

export type UpdateLFTagError =
  | AccessDeniedException
  | ConcurrentModificationException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value.
 */
export const updateLFTag: API.OperationMethod<
  UpdateLFTagRequest,
  UpdateLFTagResponse,
  UpdateLFTagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(166) as any as S.Schema<UpdateLFTagRequest>,
  output: __S(2) as any as S.Schema<UpdateLFTagResponse>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLFTag",
}));

export type UpdateLFTagExpressionError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException
  | CommonErrors;
/**
 * Updates the name of the LF-Tag expression to the new description and expression body provided.
 * Updating a LF-Tag expression immediately changes the permission boundaries of all existing `LFTagPolicy` permission grants that reference the given LF-Tag expression.
 */
export const updateLFTagExpression: API.OperationMethod<
  UpdateLFTagExpressionRequest,
  UpdateLFTagExpressionResponse,
  UpdateLFTagExpressionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(167) as any as S.Schema<UpdateLFTagExpressionRequest>,
  output: __S(2) as any as S.Schema<UpdateLFTagExpressionResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    ResourceNumberLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLFTagExpression",
}));

export type UpdateResourceError =
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | CommonErrors;
/**
 * Updates the data access role used for vending access to the given (registered) resource in Lake Formation.
 */
export const updateResource: API.OperationMethod<
  UpdateResourceRequest,
  UpdateResourceResponse,
  UpdateResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(168) as any as S.Schema<UpdateResourceRequest>,
  output: __S(2) as any as S.Schema<UpdateResourceResponse>,
  errors: [
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateResource",
}));

export type UpdateTableObjectsError =
  | ConcurrentModificationException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException
  | ResourceNotReadyException
  | TransactionCanceledException
  | TransactionCommitInProgressException
  | TransactionCommittedException
  | CommonErrors;
/**
 * Updates the manifest of Amazon S3 objects that make up the specified governed table.
 */
export const updateTableObjects: API.OperationMethod<
  UpdateTableObjectsRequest,
  UpdateTableObjectsResponse,
  UpdateTableObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173) as any as S.Schema<UpdateTableObjectsRequest>,
  output: __S(2) as any as S.Schema<UpdateTableObjectsResponse>,
  errors: [
    ConcurrentModificationException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
    OperationTimeoutException,
    ResourceNotReadyException,
    TransactionCanceledException,
    TransactionCommitInProgressException,
    TransactionCommittedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTableObjects",
}));

export type UpdateTableStorageOptimizerError =
  | AccessDeniedException
  | EntityNotFoundException
  | InternalServiceException
  | InvalidInputException
  | CommonErrors;
/**
 * Updates the configuration of the storage optimizers for a table.
 */
export const updateTableStorageOptimizer: API.OperationMethod<
  UpdateTableStorageOptimizerRequest,
  UpdateTableStorageOptimizerResponse,
  UpdateTableStorageOptimizerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(175) as any as S.Schema<UpdateTableStorageOptimizerRequest>,
  output: __S(176) as any as S.Schema<UpdateTableStorageOptimizerResponse>,
  errors: [
    AccessDeniedException,
    EntityNotFoundException,
    InternalServiceException,
    InvalidInputException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTableStorageOptimizer",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Id: S.optional(S.String) })).annotate({
        identifier: "CatalogResource",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ CatalogId: S.optional(S.String), Name: S.String }),
      ).annotate({ identifier: "DatabaseResource" });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TableWildcard",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          DatabaseName: S.String,
          Name: S.optional(S.String),
          TableWildcard: S.optional(__S(2)),
        }),
      ).annotate({ identifier: "TableResource" });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() => S.Struct({ ExcludedColumnNames: S.optional(__S(4)) })).annotate({
        identifier: "ColumnWildcard",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          DatabaseName: S.String,
          Name: S.String,
          ColumnNames: S.optional(__S(4)),
          ColumnWildcard: S.optional(__S(5)),
        }),
      ).annotate({ identifier: "TableWithColumnsResource" });
    case 7:
      return S.suspend(() =>
        S.Struct({ CatalogId: S.optional(S.String), ResourceArn: S.String }),
      ).annotate({ identifier: "DataLocationResource" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TableCatalogId: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          TableName: S.optional(S.String),
          Name: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataCellsFilterResource" });
    case 1:
      return S.suspend(() =>
        S.Struct({ CatalogId: S.optional(S.String), TagKey: S.String, TagValues: __S(4) }),
      ).annotate({ identifier: "LFTagKeyResource" });
    case 2:
      return S.suspend(() => S.Struct({ TagKey: S.String, TagValues: __S(4) })).annotate({
        identifier: "LFTag",
      });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          ResourceType: S.String,
          Expression: S.optional(__S(11)),
          ExpressionName: S.optional(S.String),
        }),
      ).annotate({ identifier: "LFTagPolicyResource" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.optional(__S(0)),
          Database: S.optional(__S(1)),
          Table: S.optional(__S(3)),
          TableWithColumns: S.optional(__S(6)),
          DataLocation: S.optional(__S(7)),
          DataCellsFilter: S.optional(__S(8)),
          LFTag: S.optional(__S(9)),
          LFTagPolicy: S.optional(__S(12)),
          LFTagExpression: S.optional(__S(1)),
        }),
      ).annotate({ identifier: "Resource" });
    case 6:
      return S.Array(__S(9));
    case 7:
      return S.suspend(() =>
        S.Struct({ CatalogId: S.optional(S.String), Resource: __S(13), LFTags: __S(14) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/AddLFTagsToResource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AddLFTagsToResourceRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String) }),
      ).annotate({ identifier: "ErrorDetail" });
    case 1:
      return S.suspend(() =>
        S.Struct({ LFTag: S.optional(__S(9)), Error: S.optional(__S(16)) }),
      ).annotate({ identifier: "LFTagError" });
    case 2:
      return S.Array(__S(17));
    case 3:
      return S.suspend(() => S.Struct({ Failures: S.optional(__S(18)) })).annotate({
        identifier: "AddLFTagsToResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SAMLAssertion: S.String,
          RoleArn: S.String,
          PrincipalArn: S.String,
          DurationSeconds: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/AssumeDecoratedRoleWithSAML" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssumeDecoratedRoleWithSAMLRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccessKeyId: S.optional(S.String),
          SecretAccessKey: S.optional(SensitiveString),
          SessionToken: S.optional(SensitiveString),
          Expiration: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "AssumeDecoratedRoleWithSAMLResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DataLakePrincipalIdentifier: S.optional(S.String) }),
      ).annotate({ identifier: "DataLakePrincipal" });
    case 7:
      return S.Array(S.String);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Expression: S.optional(S.String) })).annotate({
        identifier: "Condition",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          Principal: S.optional(__S(22)),
          Resource: S.optional(__S(13)),
          Permissions: S.optional(__S(23)),
          Condition: S.optional(__S(24)),
          PermissionsWithGrantOption: S.optional(__S(23)),
        }),
      ).annotate({
        identifier: "BatchPermissionsRequestEntry",
      });
    case 2:
      return S.Array(__S(25));
    case 3:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          Entries: __S(26),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGrantPermissions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGrantPermissionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RequestEntry: S.optional(__S(25)),
          Error: S.optional(__S(16)),
        }),
      ).annotate({
        identifier: "BatchPermissionsFailureEntry",
      });
    case 5:
      return S.Array(__S(28));
    case 6:
      return S.suspend(() => S.Struct({ Failures: S.optional(__S(29)) })).annotate({
        identifier: "BatchGrantPermissionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          Entries: __S(26),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchRevokePermissions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchRevokePermissionsRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TransactionId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CancelTransaction" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelTransactionRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ TransactionId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CommitTransaction" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CommitTransactionRequest" });
    case 2:
      return S.suspend(() => S.Struct({ TransactionStatus: S.optional(S.String) })).annotate({
        identifier: "CommitTransactionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FilterExpression: S.optional(S.String),
          AllRowsWildcard: S.optional(__S(2)),
        }),
      ).annotate({ identifier: "RowFilter" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TableCatalogId: S.String,
          DatabaseName: S.String,
          TableName: S.String,
          Name: S.String,
          RowFilter: S.optional(__S(35)),
          ColumnNames: S.optional(__S(4)),
          ColumnWildcard: S.optional(__S(5)),
          VersionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataCellsFilter" });
    case 5:
      return S.suspend(() =>
        S.Struct({ TableData: __S(36) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateDataCellsFilter" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDataCellsFilterRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Status: S.String, AuthorizedTargets: __S(4) })).annotate({
        identifier: "ExternalFilteringConfiguration",
      });
    case 7:
      return S.Array(__S(22));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Authorization: S.String })).annotate({
        identifier: "RedshiftConnect",
      });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ RedshiftConnect: __S(40) })]);
    case 2:
      return S.Array(__S(41));
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ Redshift: __S(42) })]);
    case 4:
      return S.Array(__S(43));
    case 5:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          InstanceArn: S.optional(S.String),
          ExternalFiltering: S.optional(__S(38)),
          ShareRecipients: S.optional(__S(39)),
          ServiceIntegrations: S.optional(__S(44)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateLakeFormationIdentityCenterConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateLakeFormationIdentityCenterConfigurationRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ ApplicationArn: S.optional(S.String) })).annotate({
        identifier: "CreateLakeFormationIdentityCenterConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Principal: __S(22),
          Resource: __S(13),
          Condition: S.optional(__S(24)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateLakeFormationOptIn" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateLakeFormationOptInRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CreateLakeFormationOptInResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          TagKey: S.String,
          TagValues: __S(4),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateLFTag" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateLFTagRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          CatalogId: S.optional(S.String),
          Expression: __S(11),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateLFTagExpression" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateLFTagExpressionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TableCatalogId: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          TableName: S.optional(S.String),
          Name: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteDataCellsFilter" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDataCellsFilterRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ CatalogId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteLakeFormationIdentityCenterConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteLakeFormationIdentityCenterConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Principal: __S(22),
          Resource: __S(13),
          Condition: S.optional(__S(24)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteLakeFormationOptIn" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteLakeFormationOptInRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ CatalogId: S.optional(S.String), TagKey: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteLFTag" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteLFTagRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.String, CatalogId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteLFTagExpression" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteLFTagExpressionRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Uri: S.String, ETag: S.optional(S.String) })).annotate({
        identifier: "VirtualObject",
      });
    case 1:
      return S.Array(__S(56));
    case 2:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          DatabaseName: S.String,
          TableName: S.String,
          TransactionId: S.String,
          Objects: __S(57),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteObjectsOnCancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteObjectsOnCancelRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeregisterResource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeregisterResourceRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ CatalogId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribeLakeFormationIdentityCenterConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeLakeFormationIdentityCenterConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          InstanceArn: S.optional(S.String),
          ApplicationArn: S.optional(S.String),
          ExternalFiltering: S.optional(__S(38)),
          ShareRecipients: S.optional(__S(39)),
          ServiceIntegrations: S.optional(__S(44)),
          ResourceShare: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeLakeFormationIdentityCenterConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DescribeResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          RoleArn: S.optional(S.String),
          LastModified: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          WithFederation: S.optional(S.Boolean),
          HybridAccessEnabled: S.optional(S.Boolean),
          WithPrivilegedAccess: S.optional(S.Boolean),
          VerificationStatus: S.optional(S.String),
          ExpectedResourceOwnerAccount: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourceInfo" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ResourceInfo: S.optional(__S(63)) })).annotate({
        identifier: "DescribeResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ TransactionId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribeTransaction" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeTransactionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TransactionId: S.optional(S.String),
          TransactionStatus: S.optional(S.String),
          TransactionStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TransactionEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "TransactionDescription" });
    case 3:
      return S.suspend(() => S.Struct({ TransactionDescription: S.optional(__S(66)) })).annotate({
        identifier: "DescribeTransactionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ TransactionId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ExtendTransaction" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ExtendTransactionRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TableCatalogId: S.String,
          DatabaseName: S.String,
          TableName: S.String,
          Name: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetDataCellsFilter" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataCellsFilterRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ DataCellsFilter: S.optional(__S(36)) })).annotate({
        identifier: "GetDataCellsFilterResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetDataLakePrincipal" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataLakePrincipalRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Identity: S.optional(S.String) })).annotate({
        identifier: "GetDataLakePrincipalResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ CatalogId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetDataLakeSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataLakeSettingsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Principal: S.optional(__S(22)),
          Permissions: S.optional(__S(23)),
        }),
      ).annotate({ identifier: "PrincipalPermissions" });
    case 3:
      return S.Array(__S(74));
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          DataLakeAdmins: S.optional(__S(39)),
          ReadOnlyAdmins: S.optional(__S(39)),
          CreateDatabaseDefaultPermissions: S.optional(__S(75)),
          CreateTableDefaultPermissions: S.optional(__S(75)),
          Parameters: S.optional(__S(76)),
          TrustedResourceOwners: S.optional(__S(4)),
          AllowExternalDataFiltering: S.optional(S.Boolean),
          AllowFullTableExternalDataAccess: S.optional(S.Boolean),
          ExternalDataFilteringAllowList: S.optional(__S(39)),
          AuthorizedSessionTagValueList: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "DataLakeSettings" });
    case 6:
      return S.suspend(() => S.Struct({ DataLakeSettings: S.optional(__S(77)) })).annotate({
        identifier: "GetDataLakeSettingsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          ResourceArn: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetEffectivePermissionsForPath" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEffectivePermissionsForPathRequest",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ResourceShare: S.optional(__S(4)) })).annotate({
        identifier: "DetailsMap",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Principal: S.optional(__S(22)),
          Resource: S.optional(__S(13)),
          Condition: S.optional(__S(24)),
          Permissions: S.optional(__S(23)),
          PermissionsWithGrantOption: S.optional(__S(23)),
          AdditionalDetails: S.optional(__S(80)),
          LastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedBy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PrincipalResourcePermissions",
      });
    case 2:
      return S.Array(__S(81));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Permissions: S.optional(__S(82)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetEffectivePermissionsForPathResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ CatalogId: S.optional(S.String), TagKey: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetLFTag" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetLFTagRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          TagKey: S.optional(S.String),
          TagValues: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "GetLFTagResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.String, CatalogId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetLFTagExpression" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetLFTagExpressionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          CatalogId: S.optional(S.String),
          Expression: S.optional(__S(11)),
        }),
      ).annotate({
        identifier: "GetLFTagExpressionResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ QueryId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetQueryState" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetQueryStateRequest" });
    case 1:
      return S.suspend(() => S.Struct({ Error: S.optional(S.String), State: S.String })).annotate({
        identifier: "GetQueryStateResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ QueryId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetQueryStatistics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetQueryStatisticsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AverageExecutionTimeMillis: S.optional(S.Number),
          DataScannedBytes: S.optional(S.Number),
          WorkUnitsExecutedCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ExecutionStatistics" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EstimatedDataToScanBytes: S.optional(S.Number),
          PlanningTimeMillis: S.optional(S.Number),
          QueueTimeMillis: S.optional(S.Number),
          WorkUnitsGeneratedCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "PlanningStatistics" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ExecutionStatistics: S.optional(__S(91)),
          PlanningStatistics: S.optional(__S(92)),
          QuerySubmissionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "GetQueryStatisticsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          Resource: __S(13),
          ShowAssignedLFTags: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetResourceLFTags" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetResourceLFTagsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), LFTags: S.optional(__S(14)) }),
      ).annotate({ identifier: "ColumnLFTag" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95));
    case 1:
      return S.suspend(() =>
        S.Struct({
          LFTagOnDatabase: S.optional(__S(14)),
          LFTagsOnTable: S.optional(__S(14)),
          LFTagsOnColumns: S.optional(__S(96)),
        }),
      ).annotate({
        identifier: "GetResourceLFTagsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          DatabaseName: S.String,
          TableName: S.String,
          TransactionId: S.optional(S.String),
          QueryAsOfTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          PartitionPredicate: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetTableObjects" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTableObjectsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Uri: S.optional(S.String),
          ETag: S.optional(S.String),
          Size: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TableObject" });
    case 4:
      return S.Array(__S(99));
    case 5:
      return S.suspend(() =>
        S.Struct({
          PartitionValues: S.optional(__S(4)),
          Objects: S.optional(__S(100)),
        }),
      ).annotate({ identifier: "PartitionObjects" });
    case 6:
      return S.Array(__S(101));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Objects: S.optional(__S(102)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetTableObjectsResponse" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ AdditionalAuditContext: S.optional(S.String) })).annotate({
        identifier: "AuditContext",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DurationSeconds: S.optional(S.Number),
          AuditContext: S.optional(__S(104)),
          DataLocations: S.optional(__S(4)),
          CredentialsScope: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetTemporaryDataLocationCredentials" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTemporaryDataLocationCredentialsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccessKeyId: S.optional(S.String),
          SecretAccessKey: S.optional(SensitiveString),
          SessionToken: S.optional(SensitiveString),
          Expiration: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "TemporaryCredentials" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Credentials: S.optional(__S(106)),
          AccessibleDataLocations: S.optional(__S(4)),
          CredentialsScope: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetTemporaryDataLocationCredentialsResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ Values: __S(4) })).annotate({
        identifier: "PartitionValueList",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TableArn: S.String,
          Partition: __S(108),
          Permissions: S.optional(__S(23)),
          DurationSeconds: S.optional(S.Number),
          AuditContext: S.optional(__S(104)),
          SupportedPermissionTypes: S.optional(__S(23)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetTemporaryGluePartitionCredentials" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTemporaryGluePartitionCredentialsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          QueryId: S.optional(S.String),
          QueryStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ClusterId: S.optional(S.String),
          QueryAuthorizationId: S.optional(S.String),
          AdditionalContext: S.optional(__S(76)),
        }),
      ).annotate({ identifier: "QuerySessionContext" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TableArn: S.String,
          Permissions: S.optional(__S(23)),
          DurationSeconds: S.optional(S.Number),
          AuditContext: S.optional(__S(104)),
          SupportedPermissionTypes: S.optional(__S(23)),
          S3Path: S.optional(S.String),
          QuerySessionContext: S.optional(__S(110)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetTemporaryGlueTableCredentials" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTemporaryGlueTableCredentialsRequest",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccessKeyId: S.optional(S.String),
          SecretAccessKey: S.optional(SensitiveString),
          SessionToken: S.optional(SensitiveString),
          Expiration: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          VendedS3Path: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "GetTemporaryGlueTableCredentialsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ QueryId: S.String, WorkUnitId: S.Number, WorkUnitToken: SensitiveString }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetWorkUnitResults" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWorkUnitResultsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResultStream: S.optional(T.StreamingOutput).pipe(T.HttpPayload()) }),
      ).annotate({
        identifier: "GetWorkUnitResultsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
          QueryId: S.String,
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetWorkUnits" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetWorkUnitsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ WorkUnitIdMax: S.Number, WorkUnitIdMin: S.Number, WorkUnitToken: S.String }),
      ).annotate({ identifier: "WorkUnitRange" });
    case 5:
      return S.Array(__S(116));
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          QueryId: S.String,
          WorkUnitRanges: __S(117),
        }),
      ).annotate({ identifier: "GetWorkUnitsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          Principal: __S(22),
          Resource: __S(13),
          Permissions: __S(23),
          Condition: S.optional(__S(24)),
          PermissionsWithGrantOption: S.optional(__S(23)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GrantPermissions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GrantPermissionsRequest" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Table: S.optional(__S(3)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListDataCellsFilter" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataCellsFilterRequest",
      });
    case 1:
      return S.Array(__S(36));
    case 2:
      return S.suspend(() =>
        S.Struct({
          DataCellsFilters: S.optional(__S(121)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDataCellsFilterResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Principal: S.optional(__S(22)),
          Resource: S.optional(__S(13)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListLakeFormationOptIns" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListLakeFormationOptInsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Resource: S.optional(__S(13)),
          Principal: S.optional(__S(22)),
          Condition: S.optional(__S(24)),
          LastModified: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "LakeFormationOptInsInfo" });
    case 5:
      return S.Array(__S(124));
    case 6:
      return S.suspend(() =>
        S.Struct({
          LakeFormationOptInsInfoList: S.optional(__S(125)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListLakeFormationOptInsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListLFTagExpressions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListLFTagExpressionsRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          CatalogId: S.optional(S.String),
          Expression: S.optional(__S(11)),
        }),
      ).annotate({ identifier: "LFTagExpression" });
    case 1:
      return S.Array(__S(128));
    case 2:
      return S.suspend(() =>
        S.Struct({
          LFTagExpressions: S.optional(__S(129)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListLFTagExpressionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          ResourceShareType: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListLFTags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListLFTagsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ LFTags: S.optional(__S(14)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListLFTagsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          Principal: S.optional(__S(22)),
          ResourceType: S.optional(S.String),
          Resource: S.optional(__S(13)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          IncludeRelated: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListPermissions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListPermissionsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PrincipalResourcePermissions: S.optional(__S(82)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListPermissionsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Field: S.optional(S.String),
          ComparisonOperator: S.optional(S.String),
          StringValueList: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "FilterCondition" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135));
    case 1:
      return S.suspend(() =>
        S.Struct({
          FilterConditionList: S.optional(__S(136)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListResources" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListResourcesRequest" });
    case 2:
      return S.Array(__S(63));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceInfoList: S.optional(__S(138)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListResourcesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          DatabaseName: S.String,
          TableName: S.String,
          StorageOptimizerType: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListTableStorageOptimizers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTableStorageOptimizersRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StorageOptimizerType: S.optional(S.String),
          Config: S.optional(__S(76)),
          ErrorMessage: S.optional(S.String),
          Warnings: S.optional(S.String),
          LastRunDetails: S.optional(S.String),
        }),
      ).annotate({ identifier: "StorageOptimizer" });
    case 6:
      return S.Array(__S(141));
    case 7:
      return S.suspend(() =>
        S.Struct({
          StorageOptimizerList: S.optional(__S(142)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTableStorageOptimizersResponse",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          StatusFilter: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListTransactions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTransactionsRequest" });
    case 1:
      return S.Array(__S(66));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Transactions: S.optional(__S(145)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListTransactionsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ CatalogId: S.optional(S.String), DataLakeSettings: __S(77) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/PutDataLakeSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutDataLakeSettingsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          UseServiceLinkedRole: S.optional(S.Boolean),
          RoleArn: S.optional(S.String),
          WithFederation: S.optional(S.Boolean),
          HybridAccessEnabled: S.optional(S.Boolean),
          WithPrivilegedAccess: S.optional(S.Boolean),
          ExpectedResourceOwnerAccount: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/RegisterResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RegisterResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ CatalogId: S.optional(S.String), Resource: __S(13), LFTags: __S(14) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/RemoveLFTagsFromResource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RemoveLFTagsFromResourceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          Principal: __S(22),
          Resource: __S(13),
          Permissions: __S(23),
          Condition: S.optional(__S(24)),
          PermissionsWithGrantOption: S.optional(__S(23)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/RevokePermissions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RevokePermissionsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          CatalogId: S.optional(S.String),
          Expression: __S(11),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/SearchDatabasesByLFTags" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SearchDatabasesByLFTagsRequest",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Database: S.optional(__S(1)), LFTags: S.optional(__S(14)) }),
      ).annotate({ identifier: "TaggedDatabase" });
    case 1:
      return S.Array(__S(152));
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), DatabaseList: S.optional(__S(153)) }),
      ).annotate({
        identifier: "SearchDatabasesByLFTagsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          CatalogId: S.optional(S.String),
          Expression: __S(11),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/SearchTablesByLFTags" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SearchTablesByLFTagsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Table: S.optional(__S(3)),
          LFTagOnDatabase: S.optional(__S(14)),
          LFTagsOnTable: S.optional(__S(14)),
          LFTagsOnColumns: S.optional(__S(96)),
        }),
      ).annotate({ identifier: "TaggedTable" });
    case 5:
      return S.Array(__S(156));
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), TableList: S.optional(__S(157)) }),
      ).annotate({
        identifier: "SearchTablesByLFTagsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          DatabaseName: S.String,
          QueryAsOfTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          QueryParameters: S.optional(__S(76)),
          TransactionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "QueryPlanningContext" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ QueryPlanningContext: __S(159), QueryString: SensitiveString }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartQueryPlanning" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartQueryPlanningRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ QueryId: S.String })).annotate({
        identifier: "StartQueryPlanningResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ TransactionType: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StartTransaction" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartTransactionRequest" });
    case 3:
      return S.suspend(() => S.Struct({ TransactionId: S.optional(S.String) })).annotate({
        identifier: "StartTransactionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ TableData: __S(36) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateDataCellsFilter" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDataCellsFilterRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          ShareRecipients: S.optional(__S(39)),
          ServiceIntegrations: S.optional(__S(44)),
          ApplicationStatus: S.optional(S.String),
          ExternalFiltering: S.optional(__S(38)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateLakeFormationIdentityCenterConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateLakeFormationIdentityCenterConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          TagKey: S.String,
          TagValuesToDelete: S.optional(__S(4)),
          TagValuesToAdd: S.optional(__S(4)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateLFTag" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateLFTagRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          CatalogId: S.optional(S.String),
          Expression: __S(11),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateLFTagExpression" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateLFTagExpressionRequest",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RoleArn: S.String,
          ResourceArn: S.String,
          WithFederation: S.optional(S.Boolean),
          HybridAccessEnabled: S.optional(S.Boolean),
          ExpectedResourceOwnerAccount: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Uri: S.String,
          ETag: S.String,
          Size: S.Number,
          PartitionValues: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "AddObjectInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Uri: S.String,
          ETag: S.optional(S.String),
          PartitionValues: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "DeleteObjectInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AddObject: S.optional(__S(169)),
          DeleteObject: S.optional(__S(170)),
        }),
      ).annotate({ identifier: "WriteOperation" });
    case 4:
      return S.Array(__S(171));
    case 5:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          DatabaseName: S.String,
          TableName: S.String,
          TransactionId: S.optional(S.String),
          WriteOperations: __S(172),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateTableObjects" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateTableObjectsRequest",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(76).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          CatalogId: S.optional(S.String),
          DatabaseName: S.String,
          TableName: S.String,
          StorageOptimizerConfig: __S(174),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateTableStorageOptimizer" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateTableStorageOptimizerRequest",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Result: S.optional(S.String) })).annotate({
        identifier: "UpdateTableStorageOptimizerResponse",
      });
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
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
  }
}
