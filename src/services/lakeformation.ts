import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSLakeFormation {
  addLFTagsToResource(
    input: AddLFTagsToResourceRequest,
  ): Effect.Effect<
    AddLFTagsToResourceResponse,
    AccessDeniedException | ConcurrentModificationException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  assumeDecoratedRoleWithSAML(
    input: AssumeDecoratedRoleWithSAMLRequest,
  ): Effect.Effect<
    AssumeDecoratedRoleWithSAMLResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  batchGrantPermissions(
    input: BatchGrantPermissionsRequest,
  ): Effect.Effect<
    BatchGrantPermissionsResponse,
    InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  batchRevokePermissions(
    input: BatchRevokePermissionsRequest,
  ): Effect.Effect<
    BatchRevokePermissionsResponse,
    InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  cancelTransaction(
    input: CancelTransactionRequest,
  ): Effect.Effect<
    CancelTransactionResponse,
    ConcurrentModificationException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | TransactionCommitInProgressException | TransactionCommittedException | CommonAwsError
  >;
  commitTransaction(
    input: CommitTransactionRequest,
  ): Effect.Effect<
    CommitTransactionResponse,
    ConcurrentModificationException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | TransactionCanceledException | CommonAwsError
  >;
  createDataCellsFilter(
    input: CreateDataCellsFilterRequest,
  ): Effect.Effect<
    CreateDataCellsFilterResponse,
    AccessDeniedException | AlreadyExistsException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | ResourceNumberLimitExceededException | CommonAwsError
  >;
  createLFTag(
    input: CreateLFTagRequest,
  ): Effect.Effect<
    CreateLFTagResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | ResourceNumberLimitExceededException | CommonAwsError
  >;
  createLFTagExpression(
    input: CreateLFTagExpressionRequest,
  ): Effect.Effect<
    CreateLFTagExpressionResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | ResourceNumberLimitExceededException | CommonAwsError
  >;
  createLakeFormationIdentityCenterConfiguration(
    input: CreateLakeFormationIdentityCenterConfigurationRequest,
  ): Effect.Effect<
    CreateLakeFormationIdentityCenterConfigurationResponse,
    AccessDeniedException | AlreadyExistsException | ConcurrentModificationException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  createLakeFormationOptIn(
    input: CreateLakeFormationOptInRequest,
  ): Effect.Effect<
    CreateLakeFormationOptInResponse,
    AccessDeniedException | ConcurrentModificationException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | ResourceNumberLimitExceededException | CommonAwsError
  >;
  deleteDataCellsFilter(
    input: DeleteDataCellsFilterRequest,
  ): Effect.Effect<
    DeleteDataCellsFilterResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  deleteLFTag(
    input: DeleteLFTagRequest,
  ): Effect.Effect<
    DeleteLFTagResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  deleteLFTagExpression(
    input: DeleteLFTagExpressionRequest,
  ): Effect.Effect<
    DeleteLFTagExpressionResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  deleteLakeFormationIdentityCenterConfiguration(
    input: DeleteLakeFormationIdentityCenterConfigurationRequest,
  ): Effect.Effect<
    DeleteLakeFormationIdentityCenterConfigurationResponse,
    AccessDeniedException | ConcurrentModificationException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  deleteLakeFormationOptIn(
    input: DeleteLakeFormationOptInRequest,
  ): Effect.Effect<
    DeleteLakeFormationOptInResponse,
    AccessDeniedException | ConcurrentModificationException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  deleteObjectsOnCancel(
    input: DeleteObjectsOnCancelRequest,
  ): Effect.Effect<
    DeleteObjectsOnCancelResponse,
    ConcurrentModificationException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | ResourceNotReadyException | TransactionCanceledException | TransactionCommittedException | CommonAwsError
  >;
  deregisterResource(
    input: DeregisterResourceRequest,
  ): Effect.Effect<
    DeregisterResourceResponse,
    EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  describeLakeFormationIdentityCenterConfiguration(
    input: DescribeLakeFormationIdentityCenterConfigurationRequest,
  ): Effect.Effect<
    DescribeLakeFormationIdentityCenterConfigurationResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  describeResource(
    input: DescribeResourceRequest,
  ): Effect.Effect<
    DescribeResourceResponse,
    EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  describeTransaction(
    input: DescribeTransactionRequest,
  ): Effect.Effect<
    DescribeTransactionResponse,
    EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  extendTransaction(
    input: ExtendTransactionRequest,
  ): Effect.Effect<
    ExtendTransactionResponse,
    EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | TransactionCanceledException | TransactionCommitInProgressException | TransactionCommittedException | CommonAwsError
  >;
  getDataCellsFilter(
    input: GetDataCellsFilterRequest,
  ): Effect.Effect<
    GetDataCellsFilterResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  getDataLakePrincipal(
    input: GetDataLakePrincipalRequest,
  ): Effect.Effect<
    GetDataLakePrincipalResponse,
    AccessDeniedException | InternalServiceException | OperationTimeoutException | CommonAwsError
  >;
  getDataLakeSettings(
    input: GetDataLakeSettingsRequest,
  ): Effect.Effect<
    GetDataLakeSettingsResponse,
    EntityNotFoundException | InternalServiceException | InvalidInputException | CommonAwsError
  >;
  getEffectivePermissionsForPath(
    input: GetEffectivePermissionsForPathRequest,
  ): Effect.Effect<
    GetEffectivePermissionsForPathResponse,
    EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  getLFTag(
    input: GetLFTagRequest,
  ): Effect.Effect<
    GetLFTagResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  getLFTagExpression(
    input: GetLFTagExpressionRequest,
  ): Effect.Effect<
    GetLFTagExpressionResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  getQueryState(
    input: GetQueryStateRequest,
  ): Effect.Effect<
    GetQueryStateResponse,
    AccessDeniedException | InternalServiceException | InvalidInputException | CommonAwsError
  >;
  getQueryStatistics(
    input: GetQueryStatisticsRequest,
  ): Effect.Effect<
    GetQueryStatisticsResponse,
    AccessDeniedException | ExpiredException | InternalServiceException | InvalidInputException | StatisticsNotReadyYetException | ThrottledException | CommonAwsError
  >;
  getResourceLFTags(
    input: GetResourceLFTagsRequest,
  ): Effect.Effect<
    GetResourceLFTagsResponse,
    AccessDeniedException | EntityNotFoundException | GlueEncryptionException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  getTableObjects(
    input: GetTableObjectsRequest,
  ): Effect.Effect<
    GetTableObjectsResponse,
    EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | ResourceNotReadyException | TransactionCanceledException | TransactionCommittedException | CommonAwsError
  >;
  getTemporaryGluePartitionCredentials(
    input: GetTemporaryGluePartitionCredentialsRequest,
  ): Effect.Effect<
    GetTemporaryGluePartitionCredentialsResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | PermissionTypeMismatchException | CommonAwsError
  >;
  getTemporaryGlueTableCredentials(
    input: GetTemporaryGlueTableCredentialsRequest,
  ): Effect.Effect<
    GetTemporaryGlueTableCredentialsResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | PermissionTypeMismatchException | CommonAwsError
  >;
  getWorkUnitResults(
    input: GetWorkUnitResultsRequest,
  ): Effect.Effect<
    GetWorkUnitResultsResponse,
    AccessDeniedException | ExpiredException | InternalServiceException | InvalidInputException | ThrottledException | CommonAwsError
  >;
  getWorkUnits(
    input: GetWorkUnitsRequest,
  ): Effect.Effect<
    GetWorkUnitsResponse,
    AccessDeniedException | ExpiredException | InternalServiceException | InvalidInputException | WorkUnitsNotReadyYetException | CommonAwsError
  >;
  grantPermissions(
    input: GrantPermissionsRequest,
  ): Effect.Effect<
    GrantPermissionsResponse,
    ConcurrentModificationException | EntityNotFoundException | InvalidInputException | CommonAwsError
  >;
  listDataCellsFilter(
    input: ListDataCellsFilterRequest,
  ): Effect.Effect<
    ListDataCellsFilterResponse,
    AccessDeniedException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  listLFTagExpressions(
    input: ListLFTagExpressionsRequest,
  ): Effect.Effect<
    ListLFTagExpressionsResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  listLFTags(
    input: ListLFTagsRequest,
  ): Effect.Effect<
    ListLFTagsResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  listLakeFormationOptIns(
    input: ListLakeFormationOptInsRequest,
  ): Effect.Effect<
    ListLakeFormationOptInsResponse,
    AccessDeniedException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  listPermissions(
    input: ListPermissionsRequest,
  ): Effect.Effect<
    ListPermissionsResponse,
    InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  listResources(
    input: ListResourcesRequest,
  ): Effect.Effect<
    ListResourcesResponse,
    InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  listTableStorageOptimizers(
    input: ListTableStorageOptimizersRequest,
  ): Effect.Effect<
    ListTableStorageOptimizersResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | CommonAwsError
  >;
  listTransactions(
    input: ListTransactionsRequest,
  ): Effect.Effect<
    ListTransactionsResponse,
    InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  putDataLakeSettings(
    input: PutDataLakeSettingsRequest,
  ): Effect.Effect<
    PutDataLakeSettingsResponse,
    InternalServiceException | InvalidInputException | CommonAwsError
  >;
  registerResource(
    input: RegisterResourceRequest,
  ): Effect.Effect<
    RegisterResourceResponse,
    AccessDeniedException | AlreadyExistsException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | ResourceNumberLimitExceededException | CommonAwsError
  >;
  removeLFTagsFromResource(
    input: RemoveLFTagsFromResourceRequest,
  ): Effect.Effect<
    RemoveLFTagsFromResourceResponse,
    AccessDeniedException | ConcurrentModificationException | EntityNotFoundException | GlueEncryptionException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  revokePermissions(
    input: RevokePermissionsRequest,
  ): Effect.Effect<
    RevokePermissionsResponse,
    ConcurrentModificationException | EntityNotFoundException | InvalidInputException | CommonAwsError
  >;
  searchDatabasesByLFTags(
    input: SearchDatabasesByLFTagsRequest,
  ): Effect.Effect<
    SearchDatabasesByLFTagsResponse,
    AccessDeniedException | EntityNotFoundException | GlueEncryptionException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  searchTablesByLFTags(
    input: SearchTablesByLFTagsRequest,
  ): Effect.Effect<
    SearchTablesByLFTagsResponse,
    AccessDeniedException | EntityNotFoundException | GlueEncryptionException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  startQueryPlanning(
    input: StartQueryPlanningRequest,
  ): Effect.Effect<
    StartQueryPlanningResponse,
    AccessDeniedException | InternalServiceException | InvalidInputException | ThrottledException | CommonAwsError
  >;
  startTransaction(
    input: StartTransactionRequest,
  ): Effect.Effect<
    StartTransactionResponse,
    InternalServiceException | OperationTimeoutException | CommonAwsError
  >;
  updateDataCellsFilter(
    input: UpdateDataCellsFilterRequest,
  ): Effect.Effect<
    UpdateDataCellsFilterResponse,
    AccessDeniedException | ConcurrentModificationException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  updateLFTag(
    input: UpdateLFTagRequest,
  ): Effect.Effect<
    UpdateLFTagResponse,
    AccessDeniedException | ConcurrentModificationException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  updateLFTagExpression(
    input: UpdateLFTagExpressionRequest,
  ): Effect.Effect<
    UpdateLFTagExpressionResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | ResourceNumberLimitExceededException | CommonAwsError
  >;
  updateLakeFormationIdentityCenterConfiguration(
    input: UpdateLakeFormationIdentityCenterConfigurationRequest,
  ): Effect.Effect<
    UpdateLakeFormationIdentityCenterConfigurationResponse,
    AccessDeniedException | ConcurrentModificationException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  updateResource(
    input: UpdateResourceRequest,
  ): Effect.Effect<
    UpdateResourceResponse,
    EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | CommonAwsError
  >;
  updateTableObjects(
    input: UpdateTableObjectsRequest,
  ): Effect.Effect<
    UpdateTableObjectsResponse,
    ConcurrentModificationException | EntityNotFoundException | InternalServiceException | InvalidInputException | OperationTimeoutException | ResourceNotReadyException | TransactionCanceledException | TransactionCommitInProgressException | TransactionCommittedException | CommonAwsError
  >;
  updateTableStorageOptimizer(
    input: UpdateTableStorageOptimizerRequest,
  ): Effect.Effect<
    UpdateTableStorageOptimizerResponse,
    AccessDeniedException | EntityNotFoundException | InternalServiceException | InvalidInputException | CommonAwsError
  >;
}

export type Lakeformation = AWSLakeFormation;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccessKeyIdString = string;

export type AdditionalContextMap = Record<string, string>;
export interface AddLFTagsToResourceRequest {
  CatalogId?: string;
  Resource: Resource;
  LFTags: Array<LFTagPair>;
}
export interface AddLFTagsToResourceResponse {
  Failures?: Array<LFTagError>;
}
export interface AddObjectInput {
  Uri: string;
  ETag: string;
  Size: number;
  PartitionValues?: Array<string>;
}
export interface AllRowsWildcard {
}
export declare class AlreadyExistsException extends Data.TaggedError(
  "AlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export type ApplicationArn = string;

export type ApplicationStatus = "ENABLED" | "DISABLED";
export interface AssumeDecoratedRoleWithSAMLRequest {
  SAMLAssertion: string;
  RoleArn: string;
  PrincipalArn: string;
  DurationSeconds?: number;
}
export interface AssumeDecoratedRoleWithSAMLResponse {
  AccessKeyId?: string;
  SecretAccessKey?: string;
  SessionToken?: string;
  Expiration?: Date | string;
}
export interface AuditContext {
  AdditionalAuditContext?: string;
}
export type AuditContextString = string;

export type AuthorizedSessionTagValueList = Array<string>;
export interface BatchGrantPermissionsRequest {
  CatalogId?: string;
  Entries: Array<BatchPermissionsRequestEntry>;
}
export interface BatchGrantPermissionsResponse {
  Failures?: Array<BatchPermissionsFailureEntry>;
}
export interface BatchPermissionsFailureEntry {
  RequestEntry?: BatchPermissionsRequestEntry;
  Error?: ErrorDetail;
}
export type BatchPermissionsFailureList = Array<BatchPermissionsFailureEntry>;
export interface BatchPermissionsRequestEntry {
  Id: string;
  Principal?: DataLakePrincipal;
  Resource?: Resource;
  Permissions?: Array<Permission>;
  Condition?: Condition;
  PermissionsWithGrantOption?: Array<Permission>;
}
export type BatchPermissionsRequestEntryList = Array<BatchPermissionsRequestEntry>;
export interface BatchRevokePermissionsRequest {
  CatalogId?: string;
  Entries: Array<BatchPermissionsRequestEntry>;
}
export interface BatchRevokePermissionsResponse {
  Failures?: Array<BatchPermissionsFailureEntry>;
}
export type BooleanNullable = boolean;

export interface CancelTransactionRequest {
  TransactionId: string;
}
export interface CancelTransactionResponse {
}
export type CatalogIdString = string;

export interface CatalogResource {
  Id?: string;
}
export interface ColumnLFTag {
  Name?: string;
  LFTags?: Array<LFTagPair>;
}
export type ColumnLFTagsList = Array<ColumnLFTag>;
export type ColumnNames = Array<string>;
export interface ColumnWildcard {
  ExcludedColumnNames?: Array<string>;
}
export interface CommitTransactionRequest {
  TransactionId: string;
}
export interface CommitTransactionResponse {
  TransactionStatus?: TransactionStatus;
}
export type ComparisonOperator = "EQ" | "NE" | "LE" | "LT" | "GE" | "GT" | "CONTAINS" | "NOT_CONTAINS" | "BEGINS_WITH" | "IN" | "BETWEEN";
export declare class ConcurrentModificationException extends Data.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly Message?: string;
}> {}
export interface Condition {
  Expression?: string;
}
export type ContextKey = string;

export type ContextValue = string;

export interface CreateDataCellsFilterRequest {
  TableData: DataCellsFilter;
}
export interface CreateDataCellsFilterResponse {
}
export interface CreateLakeFormationIdentityCenterConfigurationRequest {
  CatalogId?: string;
  InstanceArn?: string;
  ExternalFiltering?: ExternalFilteringConfiguration;
  ShareRecipients?: Array<DataLakePrincipal>;
}
export interface CreateLakeFormationIdentityCenterConfigurationResponse {
  ApplicationArn?: string;
}
export interface CreateLakeFormationOptInRequest {
  Principal: DataLakePrincipal;
  Resource: Resource;
  Condition?: Condition;
}
export interface CreateLakeFormationOptInResponse {
}
export interface CreateLFTagExpressionRequest {
  Name: string;
  Description?: string;
  CatalogId?: string;
  Expression: Array<LFTag>;
}
export interface CreateLFTagExpressionResponse {
}
export interface CreateLFTagRequest {
  CatalogId?: string;
  TagKey: string;
  TagValues: Array<string>;
}
export interface CreateLFTagResponse {
}
export type CredentialTimeoutDurationSecondInteger = number;

export type DatabaseLFTagsList = Array<TaggedDatabase>;
export interface DatabaseResource {
  CatalogId?: string;
  Name: string;
}
export interface DataCellsFilter {
  TableCatalogId: string;
  DatabaseName: string;
  TableName: string;
  Name: string;
  RowFilter?: RowFilter;
  ColumnNames?: Array<string>;
  ColumnWildcard?: ColumnWildcard;
  VersionId?: string;
}
export type DataCellsFilterList = Array<DataCellsFilter>;
export interface DataCellsFilterResource {
  TableCatalogId?: string;
  DatabaseName?: string;
  TableName?: string;
  Name?: string;
}
export interface DataLakePrincipal {
  DataLakePrincipalIdentifier?: string;
}
export type DataLakePrincipalList = Array<DataLakePrincipal>;
export type DataLakePrincipalString = string;

export type DataLakeResourceType = "CATALOG" | "DATABASE" | "TABLE" | "DATA_LOCATION" | "LF_TAG" | "LF_TAG_POLICY" | "LF_TAG_POLICY_DATABASE" | "LF_TAG_POLICY_TABLE" | "LF_NAMED_TAG_EXPRESSION";
export interface DataLakeSettings {
  DataLakeAdmins?: Array<DataLakePrincipal>;
  ReadOnlyAdmins?: Array<DataLakePrincipal>;
  CreateDatabaseDefaultPermissions?: Array<PrincipalPermissions>;
  CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
  Parameters?: Record<string, string>;
  TrustedResourceOwners?: Array<string>;
  AllowExternalDataFiltering?: boolean;
  AllowFullTableExternalDataAccess?: boolean;
  ExternalDataFilteringAllowList?: Array<DataLakePrincipal>;
  AuthorizedSessionTagValueList?: Array<string>;
}
export interface DataLocationResource {
  CatalogId?: string;
  ResourceArn: string;
}
export type DateTime = Date | string;

export interface DeleteDataCellsFilterRequest {
  TableCatalogId?: string;
  DatabaseName?: string;
  TableName?: string;
  Name?: string;
}
export interface DeleteDataCellsFilterResponse {
}
export interface DeleteLakeFormationIdentityCenterConfigurationRequest {
  CatalogId?: string;
}
export interface DeleteLakeFormationIdentityCenterConfigurationResponse {
}
export interface DeleteLakeFormationOptInRequest {
  Principal: DataLakePrincipal;
  Resource: Resource;
  Condition?: Condition;
}
export interface DeleteLakeFormationOptInResponse {
}
export interface DeleteLFTagExpressionRequest {
  Name: string;
  CatalogId?: string;
}
export interface DeleteLFTagExpressionResponse {
}
export interface DeleteLFTagRequest {
  CatalogId?: string;
  TagKey: string;
}
export interface DeleteLFTagResponse {
}
export interface DeleteObjectInput {
  Uri: string;
  ETag?: string;
  PartitionValues?: Array<string>;
}
export interface DeleteObjectsOnCancelRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  TransactionId: string;
  Objects: Array<VirtualObject>;
}
export interface DeleteObjectsOnCancelResponse {
}
export interface DeregisterResourceRequest {
  ResourceArn: string;
}
export interface DeregisterResourceResponse {
}
export interface DescribeLakeFormationIdentityCenterConfigurationRequest {
  CatalogId?: string;
}
export interface DescribeLakeFormationIdentityCenterConfigurationResponse {
  CatalogId?: string;
  InstanceArn?: string;
  ApplicationArn?: string;
  ExternalFiltering?: ExternalFilteringConfiguration;
  ShareRecipients?: Array<DataLakePrincipal>;
  ResourceShare?: string;
}
export interface DescribeResourceRequest {
  ResourceArn: string;
}
export interface DescribeResourceResponse {
  ResourceInfo?: ResourceInfo;
}
export interface DescribeTransactionRequest {
  TransactionId: string;
}
export interface DescribeTransactionResponse {
  TransactionDescription?: TransactionDescription;
}
export type DescriptionString = string;

export interface DetailsMap {
  ResourceShare?: Array<string>;
}
export type EnableStatus = "ENABLED" | "DISABLED";
export declare class EntityNotFoundException extends Data.TaggedError(
  "EntityNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ErrorDetail {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type ErrorMessageString = string;

export type ETagString = string;

export interface ExecutionStatistics {
  AverageExecutionTimeMillis?: number;
  DataScannedBytes?: number;
  WorkUnitsExecutedCount?: number;
}
export type ExpirationTimestamp = Date | string;

export declare class ExpiredException extends Data.TaggedError(
  "ExpiredException",
)<{
  readonly Message?: string;
}> {}
export type Expression = Array<LFTag>;
export type ExpressionString = string;

export interface ExtendTransactionRequest {
  TransactionId?: string;
}
export interface ExtendTransactionResponse {
}
export interface ExternalFilteringConfiguration {
  Status: EnableStatus;
  AuthorizedTargets: Array<string>;
}
export type FieldNameString = "RESOURCE_ARN" | "ROLE_ARN" | "LAST_MODIFIED";
export interface FilterCondition {
  Field?: FieldNameString;
  ComparisonOperator?: ComparisonOperator;
  StringValueList?: Array<string>;
}
export type FilterConditionList = Array<FilterCondition>;
export interface GetDataCellsFilterRequest {
  TableCatalogId: string;
  DatabaseName: string;
  TableName: string;
  Name: string;
}
export interface GetDataCellsFilterResponse {
  DataCellsFilter?: DataCellsFilter;
}
export interface GetDataLakePrincipalRequest {
}
export interface GetDataLakePrincipalResponse {
  Identity?: string;
}
export interface GetDataLakeSettingsRequest {
  CatalogId?: string;
}
export interface GetDataLakeSettingsResponse {
  DataLakeSettings?: DataLakeSettings;
}
export interface GetEffectivePermissionsForPathRequest {
  CatalogId?: string;
  ResourceArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetEffectivePermissionsForPathResponse {
  Permissions?: Array<PrincipalResourcePermissions>;
  NextToken?: string;
}
export interface GetLFTagExpressionRequest {
  Name: string;
  CatalogId?: string;
}
export interface GetLFTagExpressionResponse {
  Name?: string;
  Description?: string;
  CatalogId?: string;
  Expression?: Array<LFTag>;
}
export interface GetLFTagRequest {
  CatalogId?: string;
  TagKey: string;
}
export interface GetLFTagResponse {
  CatalogId?: string;
  TagKey?: string;
  TagValues?: Array<string>;
}
export interface GetQueryStateRequest {
  QueryId: string;
}
export type GetQueryStateRequestQueryIdString = string;

export interface GetQueryStateResponse {
  Error?: string;
  State: QueryStateString;
}
export interface GetQueryStatisticsRequest {
  QueryId: string;
}
export type GetQueryStatisticsRequestQueryIdString = string;

export interface GetQueryStatisticsResponse {
  ExecutionStatistics?: ExecutionStatistics;
  PlanningStatistics?: PlanningStatistics;
  QuerySubmissionTime?: Date | string;
}
export interface GetResourceLFTagsRequest {
  CatalogId?: string;
  Resource: Resource;
  ShowAssignedLFTags?: boolean;
}
export interface GetResourceLFTagsResponse {
  LFTagOnDatabase?: Array<LFTagPair>;
  LFTagsOnTable?: Array<LFTagPair>;
  LFTagsOnColumns?: Array<ColumnLFTag>;
}
export interface GetTableObjectsRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  TransactionId?: string;
  QueryAsOfTime?: Date | string;
  PartitionPredicate?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetTableObjectsResponse {
  Objects?: Array<PartitionObjects>;
  NextToken?: string;
}
export interface GetTemporaryGluePartitionCredentialsRequest {
  TableArn: string;
  Partition: PartitionValueList;
  Permissions?: Array<Permission>;
  DurationSeconds?: number;
  AuditContext?: AuditContext;
  SupportedPermissionTypes?: Array<PermissionType>;
}
export interface GetTemporaryGluePartitionCredentialsResponse {
  AccessKeyId?: string;
  SecretAccessKey?: string;
  SessionToken?: string;
  Expiration?: Date | string;
}
export interface GetTemporaryGlueTableCredentialsRequest {
  TableArn: string;
  Permissions?: Array<Permission>;
  DurationSeconds?: number;
  AuditContext?: AuditContext;
  SupportedPermissionTypes?: Array<PermissionType>;
  S3Path?: string;
  QuerySessionContext?: QuerySessionContext;
}
export interface GetTemporaryGlueTableCredentialsResponse {
  AccessKeyId?: string;
  SecretAccessKey?: string;
  SessionToken?: string;
  Expiration?: Date | string;
  VendedS3Path?: Array<string>;
}
export interface GetWorkUnitResultsRequest {
  QueryId: string;
  WorkUnitId: number;
  WorkUnitToken: string;
}
export type GetWorkUnitResultsRequestQueryIdString = string;

export type GetWorkUnitResultsRequestWorkUnitIdLong = number;

export interface GetWorkUnitResultsResponse {
  ResultStream?: Uint8Array | string;
}
export interface GetWorkUnitsRequest {
  NextToken?: string;
  PageSize?: number;
  QueryId: string;
}
export type GetWorkUnitsRequestQueryIdString = string;

export interface GetWorkUnitsResponse {
  NextToken?: string;
  QueryId: string;
  WorkUnitRanges: Array<WorkUnitRange>;
}
export declare class GlueEncryptionException extends Data.TaggedError(
  "GlueEncryptionException",
)<{
  readonly Message?: string;
}> {}
export interface GrantPermissionsRequest {
  CatalogId?: string;
  Principal: DataLakePrincipal;
  Resource: Resource;
  Permissions: Array<Permission>;
  Condition?: Condition;
  PermissionsWithGrantOption?: Array<Permission>;
}
export interface GrantPermissionsResponse {
}
export type HashString = string;

export type IAMRoleArn = string;

export type IAMSAMLProviderArn = string;

export type Identifier = string;

export type IdentityCenterInstanceArn = string;

export type IdentityString = string;

export declare class InternalServiceException extends Data.TaggedError(
  "InternalServiceException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidInputException extends Data.TaggedError(
  "InvalidInputException",
)<{
  readonly Message?: string;
}> {}
export type KeyString = string;

export interface LakeFormationOptInsInfo {
  Resource?: Resource;
  Principal?: DataLakePrincipal;
  Condition?: Condition;
  LastModified?: Date | string;
  LastUpdatedBy?: string;
}
export type LakeFormationOptInsInfoList = Array<LakeFormationOptInsInfo>;
export type LastModifiedTimestamp = Date | string;

export interface LFTag {
  TagKey: string;
  TagValues: Array<string>;
}
export interface LFTagError {
  LFTag?: LFTagPair;
  Error?: ErrorDetail;
}
export type LFTagErrors = Array<LFTagError>;
export interface LFTagExpression {
  Name?: string;
  Description?: string;
  CatalogId?: string;
  Expression?: Array<LFTag>;
}
export interface LFTagExpressionResource {
  CatalogId?: string;
  Name: string;
}
export type LFTagExpressionsList = Array<LFTagExpression>;
export type LFTagKey = string;

export interface LFTagKeyResource {
  CatalogId?: string;
  TagKey: string;
  TagValues: Array<string>;
}
export interface LFTagPair {
  CatalogId?: string;
  TagKey: string;
  TagValues: Array<string>;
}
export interface LFTagPolicyResource {
  CatalogId?: string;
  ResourceType: ResourceType;
  Expression?: Array<LFTag>;
  ExpressionName?: string;
}
export type LFTagsList = Array<LFTagPair>;
export type LFTagValue = string;

export interface ListDataCellsFilterRequest {
  Table?: TableResource;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDataCellsFilterResponse {
  DataCellsFilters?: Array<DataCellsFilter>;
  NextToken?: string;
}
export interface ListLakeFormationOptInsRequest {
  Principal?: DataLakePrincipal;
  Resource?: Resource;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListLakeFormationOptInsResponse {
  LakeFormationOptInsInfoList?: Array<LakeFormationOptInsInfo>;
  NextToken?: string;
}
export interface ListLFTagExpressionsRequest {
  CatalogId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListLFTagExpressionsResponse {
  LFTagExpressions?: Array<LFTagExpression>;
  NextToken?: string;
}
export interface ListLFTagsRequest {
  CatalogId?: string;
  ResourceShareType?: ResourceShareType;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListLFTagsResponse {
  LFTags?: Array<LFTagPair>;
  NextToken?: string;
}
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
  PrincipalResourcePermissions?: Array<PrincipalResourcePermissions>;
  NextToken?: string;
}
export interface ListResourcesRequest {
  FilterConditionList?: Array<FilterCondition>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListResourcesResponse {
  ResourceInfoList?: Array<ResourceInfo>;
  NextToken?: string;
}
export interface ListTableStorageOptimizersRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  StorageOptimizerType?: OptimizerType;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTableStorageOptimizersResponse {
  StorageOptimizerList?: Array<StorageOptimizer>;
  NextToken?: string;
}
export interface ListTransactionsRequest {
  CatalogId?: string;
  StatusFilter?: TransactionStatusFilter;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTransactionsResponse {
  Transactions?: Array<TransactionDescription>;
  NextToken?: string;
}
export type MessageString = string;

export type NameString = string;

export type NullableBoolean = boolean;

export type NullableString = string;

export type NumberOfBytes = number;

export type NumberOfItems = number;

export type NumberOfMilliseconds = number;

export type ObjectSize = number;

export declare class OperationTimeoutException extends Data.TaggedError(
  "OperationTimeoutException",
)<{
  readonly Message?: string;
}> {}
export type OptimizerType = "COMPACTION" | "GARBAGE_COLLECTION" | "GENERIC";
export type PageSize = number;

export type ParametersMap = Record<string, string>;
export type ParametersMapValue = string;

export type PartitionedTableObjectsList = Array<PartitionObjects>;
export interface PartitionObjects {
  PartitionValues?: Array<string>;
  Objects?: Array<TableObject>;
}
export interface PartitionValueList {
  Values: Array<string>;
}
export type PartitionValuesList = Array<string>;
export type PartitionValueString = string;

export type PathString = string;

export type PathStringList = Array<string>;
export type Permission = "ALL" | "SELECT" | "ALTER" | "DROP" | "DELETE" | "INSERT" | "DESCRIBE" | "CREATE_DATABASE" | "CREATE_TABLE" | "DATA_LOCATION_ACCESS" | "CREATE_LF_TAG" | "ASSOCIATE" | "GRANT_WITH_LF_TAG_EXPRESSION" | "CREATE_LF_TAG_EXPRESSION" | "CREATE_CATALOG" | "SUPER_USER";
export type PermissionList = Array<Permission>;
export type PermissionType = "COLUMN_PERMISSION" | "CELL_FILTER_PERMISSION" | "NESTED_PERMISSION" | "NESTED_CELL_PERMISSION";
export type PermissionTypeList = Array<PermissionType>;
export declare class PermissionTypeMismatchException extends Data.TaggedError(
  "PermissionTypeMismatchException",
)<{
  readonly Message?: string;
}> {}
export interface PlanningStatistics {
  EstimatedDataToScanBytes?: number;
  PlanningTimeMillis?: number;
  QueueTimeMillis?: number;
  WorkUnitsGeneratedCount?: number;
}
export type PredicateString = string;

export interface PrincipalPermissions {
  Principal?: DataLakePrincipal;
  Permissions?: Array<Permission>;
}
export type PrincipalPermissionsList = Array<PrincipalPermissions>;
export interface PrincipalResourcePermissions {
  Principal?: DataLakePrincipal;
  Resource?: Resource;
  Condition?: Condition;
  Permissions?: Array<Permission>;
  PermissionsWithGrantOption?: Array<Permission>;
  AdditionalDetails?: DetailsMap;
  LastUpdated?: Date | string;
  LastUpdatedBy?: string;
}
export type PrincipalResourcePermissionsList = Array<PrincipalResourcePermissions>;
export interface PutDataLakeSettingsRequest {
  CatalogId?: string;
  DataLakeSettings: DataLakeSettings;
}
export interface PutDataLakeSettingsResponse {
}
export type QueryIdString = string;

export type QueryParameterMap = Record<string, string>;
export interface QueryPlanningContext {
  CatalogId?: string;
  DatabaseName: string;
  QueryAsOfTime?: Date | string;
  QueryParameters?: Record<string, string>;
  TransactionId?: string;
}
export type QueryPlanningContextDatabaseNameString = string;

export interface QuerySessionContext {
  QueryId?: string;
  QueryStartTime?: Date | string;
  ClusterId?: string;
  QueryAuthorizationId?: string;
  AdditionalContext?: Record<string, string>;
}
export type QueryStateString = "PENDING" | "WORKUNITS_AVAILABLE" | "ERROR" | "FINISHED" | "EXPIRED";
export type RAMResourceShareArn = string;

export interface RegisterResourceRequest {
  ResourceArn: string;
  UseServiceLinkedRole?: boolean;
  RoleArn?: string;
  WithFederation?: boolean;
  HybridAccessEnabled?: boolean;
  WithPrivilegedAccess?: boolean;
}
export interface RegisterResourceResponse {
}
export interface RemoveLFTagsFromResourceRequest {
  CatalogId?: string;
  Resource: Resource;
  LFTags: Array<LFTagPair>;
}
export interface RemoveLFTagsFromResourceResponse {
  Failures?: Array<LFTagError>;
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
export type ResourceArnString = string;

export interface ResourceInfo {
  ResourceArn?: string;
  RoleArn?: string;
  LastModified?: Date | string;
  WithFederation?: boolean;
  HybridAccessEnabled?: boolean;
  WithPrivilegedAccess?: boolean;
}
export type ResourceInfoList = Array<ResourceInfo>;
export declare class ResourceNotReadyException extends Data.TaggedError(
  "ResourceNotReadyException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNumberLimitExceededException extends Data.TaggedError(
  "ResourceNumberLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type ResourceShareList = Array<string>;
export type ResourceShareType = "FOREIGN" | "ALL";
export type ResourceType = "DATABASE" | "TABLE";
export type Result = string;

export type ResultStream = Uint8Array | string;

export interface RevokePermissionsRequest {
  CatalogId?: string;
  Principal: DataLakePrincipal;
  Resource: Resource;
  Permissions: Array<Permission>;
  Condition?: Condition;
  PermissionsWithGrantOption?: Array<Permission>;
}
export interface RevokePermissionsResponse {
}
export interface RowFilter {
  FilterExpression?: string;
  AllRowsWildcard?: AllRowsWildcard;
}
export type SAMLAssertionString = string;

export type ScopeTarget = string;

export type ScopeTargets = Array<string>;
export interface SearchDatabasesByLFTagsRequest {
  NextToken?: string;
  MaxResults?: number;
  CatalogId?: string;
  Expression: Array<LFTag>;
}
export interface SearchDatabasesByLFTagsResponse {
  NextToken?: string;
  DatabaseList?: Array<TaggedDatabase>;
}
export type SearchPageSize = number;

export interface SearchTablesByLFTagsRequest {
  NextToken?: string;
  MaxResults?: number;
  CatalogId?: string;
  Expression: Array<LFTag>;
}
export interface SearchTablesByLFTagsResponse {
  NextToken?: string;
  TableList?: Array<TaggedTable>;
}
export type SecretAccessKeyString = string;

export type SessionTokenString = string;

export interface StartQueryPlanningRequest {
  QueryPlanningContext: QueryPlanningContext;
  QueryString: string;
}
export interface StartQueryPlanningResponse {
  QueryId: string;
}
export interface StartTransactionRequest {
  TransactionType?: TransactionType;
}
export interface StartTransactionResponse {
  TransactionId?: string;
}
export declare class StatisticsNotReadyYetException extends Data.TaggedError(
  "StatisticsNotReadyYetException",
)<{
  readonly Message?: string;
}> {}
export interface StorageOptimizer {
  StorageOptimizerType?: OptimizerType;
  Config?: Record<string, string>;
  ErrorMessage?: string;
  Warnings?: string;
  LastRunDetails?: string;
}
export type StorageOptimizerConfig = Record<string, string>;
export type StorageOptimizerConfigKey = string;

export type StorageOptimizerConfigMap = Record<OptimizerType, Record<string, string>>;
export type StorageOptimizerConfigValue = string;

export type StorageOptimizerList = Array<StorageOptimizer>;
export type StringValue = string;

export type StringValueList = Array<string>;
export type SyntheticGetWorkUnitResultsRequestWorkUnitTokenString = string;

export type SyntheticStartQueryPlanningRequestQueryString = string;

export type TableLFTagsList = Array<TaggedTable>;
export interface TableObject {
  Uri?: string;
  ETag?: string;
  Size?: number;
}
export type TableObjectList = Array<TableObject>;
export interface TableResource {
  CatalogId?: string;
  DatabaseName: string;
  Name?: string;
  TableWildcard?: TableWildcard;
}
export interface TableWildcard {
}
export interface TableWithColumnsResource {
  CatalogId?: string;
  DatabaseName: string;
  Name: string;
  ColumnNames?: Array<string>;
  ColumnWildcard?: ColumnWildcard;
}
export interface TaggedDatabase {
  Database?: DatabaseResource;
  LFTags?: Array<LFTagPair>;
}
export interface TaggedTable {
  Table?: TableResource;
  LFTagOnDatabase?: Array<LFTagPair>;
  LFTagsOnTable?: Array<LFTagPair>;
  LFTagsOnColumns?: Array<ColumnLFTag>;
}
export type TagValueList = Array<string>;
export declare class ThrottledException extends Data.TaggedError(
  "ThrottledException",
)<{
  readonly Message?: string;
}> {}
export type Timestamp = Date | string;

export type Token = string;

export type TokenString = string;

export declare class TransactionCanceledException extends Data.TaggedError(
  "TransactionCanceledException",
)<{
  readonly Message?: string;
}> {}
export declare class TransactionCommitInProgressException extends Data.TaggedError(
  "TransactionCommitInProgressException",
)<{
  readonly Message?: string;
}> {}
export declare class TransactionCommittedException extends Data.TaggedError(
  "TransactionCommittedException",
)<{
  readonly Message?: string;
}> {}
export interface TransactionDescription {
  TransactionId?: string;
  TransactionStatus?: TransactionStatus;
  TransactionStartTime?: Date | string;
  TransactionEndTime?: Date | string;
}
export type TransactionDescriptionList = Array<TransactionDescription>;
export type TransactionIdString = string;

export type TransactionStatus = "ACTIVE" | "COMMITTED" | "ABORTED" | "COMMIT_IN_PROGRESS";
export type TransactionStatusFilter = "ALL" | "COMPLETED" | "ACTIVE" | "COMMITTED" | "ABORTED";
export type TransactionType = "READ_AND_WRITE" | "READ_ONLY";
export type TrueFalseString = string;

export type TrustedResourceOwners = Array<string>;
export interface UpdateDataCellsFilterRequest {
  TableData: DataCellsFilter;
}
export interface UpdateDataCellsFilterResponse {
}
export interface UpdateLakeFormationIdentityCenterConfigurationRequest {
  CatalogId?: string;
  ShareRecipients?: Array<DataLakePrincipal>;
  ApplicationStatus?: ApplicationStatus;
  ExternalFiltering?: ExternalFilteringConfiguration;
}
export interface UpdateLakeFormationIdentityCenterConfigurationResponse {
}
export interface UpdateLFTagExpressionRequest {
  Name: string;
  Description?: string;
  CatalogId?: string;
  Expression: Array<LFTag>;
}
export interface UpdateLFTagExpressionResponse {
}
export interface UpdateLFTagRequest {
  CatalogId?: string;
  TagKey: string;
  TagValuesToDelete?: Array<string>;
  TagValuesToAdd?: Array<string>;
}
export interface UpdateLFTagResponse {
}
export interface UpdateResourceRequest {
  RoleArn: string;
  ResourceArn: string;
  WithFederation?: boolean;
  HybridAccessEnabled?: boolean;
}
export interface UpdateResourceResponse {
}
export interface UpdateTableObjectsRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  TransactionId?: string;
  WriteOperations: Array<WriteOperation>;
}
export interface UpdateTableObjectsResponse {
}
export interface UpdateTableStorageOptimizerRequest {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  StorageOptimizerConfig: Record<OptimizerType, Record<string, string>>;
}
export interface UpdateTableStorageOptimizerResponse {
  Result?: string;
}
export type URI = string;

export type ValueString = string;

export type ValueStringList = Array<string>;
export type VersionString = string;

export interface VirtualObject {
  Uri: string;
  ETag?: string;
}
export type VirtualObjectList = Array<VirtualObject>;
export type WorkUnitIdLong = number;

export interface WorkUnitRange {
  WorkUnitIdMax: number;
  WorkUnitIdMin: number;
  WorkUnitToken: string;
}
export type WorkUnitRangeList = Array<WorkUnitRange>;
export declare class WorkUnitsNotReadyYetException extends Data.TaggedError(
  "WorkUnitsNotReadyYetException",
)<{
  readonly Message?: string;
}> {}
export type WorkUnitTokenString = string;

export interface WriteOperation {
  AddObject?: AddObjectInput;
  DeleteObject?: DeleteObjectInput;
}
export type WriteOperationList = Array<WriteOperation>;
export declare namespace AddLFTagsToResource {
  export type Input = AddLFTagsToResourceRequest;
  export type Output = AddLFTagsToResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace AssumeDecoratedRoleWithSAML {
  export type Input = AssumeDecoratedRoleWithSAMLRequest;
  export type Output = AssumeDecoratedRoleWithSAMLResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchGrantPermissions {
  export type Input = BatchGrantPermissionsRequest;
  export type Output = BatchGrantPermissionsResponse;
  export type Error =
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace BatchRevokePermissions {
  export type Input = BatchRevokePermissionsRequest;
  export type Output = BatchRevokePermissionsResponse;
  export type Error =
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace CancelTransaction {
  export type Input = CancelTransactionRequest;
  export type Output = CancelTransactionResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | TransactionCommitInProgressException
    | TransactionCommittedException
    | CommonAwsError;
}

export declare namespace CommitTransaction {
  export type Input = CommitTransactionRequest;
  export type Output = CommitTransactionResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | TransactionCanceledException
    | CommonAwsError;
}

export declare namespace CreateDataCellsFilter {
  export type Input = CreateDataCellsFilterRequest;
  export type Output = CreateDataCellsFilterResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateLFTag {
  export type Input = CreateLFTagRequest;
  export type Output = CreateLFTagResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateLFTagExpression {
  export type Input = CreateLFTagExpressionRequest;
  export type Output = CreateLFTagExpressionResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateLakeFormationIdentityCenterConfiguration {
  export type Input = CreateLakeFormationIdentityCenterConfigurationRequest;
  export type Output = CreateLakeFormationIdentityCenterConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | ConcurrentModificationException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace CreateLakeFormationOptIn {
  export type Input = CreateLakeFormationOptInRequest;
  export type Output = CreateLakeFormationOptInResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteDataCellsFilter {
  export type Input = DeleteDataCellsFilterRequest;
  export type Output = DeleteDataCellsFilterResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteLFTag {
  export type Input = DeleteLFTagRequest;
  export type Output = DeleteLFTagResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteLFTagExpression {
  export type Input = DeleteLFTagExpressionRequest;
  export type Output = DeleteLFTagExpressionResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteLakeFormationIdentityCenterConfiguration {
  export type Input = DeleteLakeFormationIdentityCenterConfigurationRequest;
  export type Output = DeleteLakeFormationIdentityCenterConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteLakeFormationOptIn {
  export type Input = DeleteLakeFormationOptInRequest;
  export type Output = DeleteLakeFormationOptInResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DeleteObjectsOnCancel {
  export type Input = DeleteObjectsOnCancelRequest;
  export type Output = DeleteObjectsOnCancelResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNotReadyException
    | TransactionCanceledException
    | TransactionCommittedException
    | CommonAwsError;
}

export declare namespace DeregisterResource {
  export type Input = DeregisterResourceRequest;
  export type Output = DeregisterResourceResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DescribeLakeFormationIdentityCenterConfiguration {
  export type Input = DescribeLakeFormationIdentityCenterConfigurationRequest;
  export type Output = DescribeLakeFormationIdentityCenterConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DescribeResource {
  export type Input = DescribeResourceRequest;
  export type Output = DescribeResourceResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace DescribeTransaction {
  export type Input = DescribeTransactionRequest;
  export type Output = DescribeTransactionResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ExtendTransaction {
  export type Input = ExtendTransactionRequest;
  export type Output = ExtendTransactionResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | TransactionCanceledException
    | TransactionCommitInProgressException
    | TransactionCommittedException
    | CommonAwsError;
}

export declare namespace GetDataCellsFilter {
  export type Input = GetDataCellsFilterRequest;
  export type Output = GetDataCellsFilterResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetDataLakePrincipal {
  export type Input = GetDataLakePrincipalRequest;
  export type Output = GetDataLakePrincipalResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetDataLakeSettings {
  export type Input = GetDataLakeSettingsRequest;
  export type Output = GetDataLakeSettingsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace GetEffectivePermissionsForPath {
  export type Input = GetEffectivePermissionsForPathRequest;
  export type Output = GetEffectivePermissionsForPathResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetLFTag {
  export type Input = GetLFTagRequest;
  export type Output = GetLFTagResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetLFTagExpression {
  export type Input = GetLFTagExpressionRequest;
  export type Output = GetLFTagExpressionResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetQueryState {
  export type Input = GetQueryStateRequest;
  export type Output = GetQueryStateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace GetQueryStatistics {
  export type Input = GetQueryStatisticsRequest;
  export type Output = GetQueryStatisticsResponse;
  export type Error =
    | AccessDeniedException
    | ExpiredException
    | InternalServiceException
    | InvalidInputException
    | StatisticsNotReadyYetException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetResourceLFTags {
  export type Input = GetResourceLFTagsRequest;
  export type Output = GetResourceLFTagsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace GetTableObjects {
  export type Input = GetTableObjectsRequest;
  export type Output = GetTableObjectsResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNotReadyException
    | TransactionCanceledException
    | TransactionCommittedException
    | CommonAwsError;
}

export declare namespace GetTemporaryGluePartitionCredentials {
  export type Input = GetTemporaryGluePartitionCredentialsRequest;
  export type Output = GetTemporaryGluePartitionCredentialsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | PermissionTypeMismatchException
    | CommonAwsError;
}

export declare namespace GetTemporaryGlueTableCredentials {
  export type Input = GetTemporaryGlueTableCredentialsRequest;
  export type Output = GetTemporaryGlueTableCredentialsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | PermissionTypeMismatchException
    | CommonAwsError;
}

export declare namespace GetWorkUnitResults {
  export type Input = GetWorkUnitResultsRequest;
  export type Output = GetWorkUnitResultsResponse;
  export type Error =
    | AccessDeniedException
    | ExpiredException
    | InternalServiceException
    | InvalidInputException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetWorkUnits {
  export type Input = GetWorkUnitsRequest;
  export type Output = GetWorkUnitsResponse;
  export type Error =
    | AccessDeniedException
    | ExpiredException
    | InternalServiceException
    | InvalidInputException
    | WorkUnitsNotReadyYetException
    | CommonAwsError;
}

export declare namespace GrantPermissions {
  export type Input = GrantPermissionsRequest;
  export type Output = GrantPermissionsResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityNotFoundException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace ListDataCellsFilter {
  export type Input = ListDataCellsFilterRequest;
  export type Output = ListDataCellsFilterResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListLFTagExpressions {
  export type Input = ListLFTagExpressionsRequest;
  export type Output = ListLFTagExpressionsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListLFTags {
  export type Input = ListLFTagsRequest;
  export type Output = ListLFTagsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListLakeFormationOptIns {
  export type Input = ListLakeFormationOptInsRequest;
  export type Output = ListLakeFormationOptInsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListPermissions {
  export type Input = ListPermissionsRequest;
  export type Output = ListPermissionsResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListResources {
  export type Input = ListResourcesRequest;
  export type Output = ListResourcesResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace ListTableStorageOptimizers {
  export type Input = ListTableStorageOptimizersRequest;
  export type Output = ListTableStorageOptimizersResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace ListTransactions {
  export type Input = ListTransactionsRequest;
  export type Output = ListTransactionsResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace PutDataLakeSettings {
  export type Input = PutDataLakeSettingsRequest;
  export type Output = PutDataLakeSettingsResponse;
  export type Error =
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace RegisterResource {
  export type Input = RegisterResourceRequest;
  export type Output = RegisterResourceResponse;
  export type Error =
    | AccessDeniedException
    | AlreadyExistsException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace RemoveLFTagsFromResource {
  export type Input = RemoveLFTagsFromResourceRequest;
  export type Output = RemoveLFTagsFromResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace RevokePermissions {
  export type Input = RevokePermissionsRequest;
  export type Output = RevokePermissionsResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityNotFoundException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace SearchDatabasesByLFTags {
  export type Input = SearchDatabasesByLFTagsRequest;
  export type Output = SearchDatabasesByLFTagsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace SearchTablesByLFTags {
  export type Input = SearchTablesByLFTagsRequest;
  export type Output = SearchTablesByLFTagsResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | GlueEncryptionException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace StartQueryPlanning {
  export type Input = StartQueryPlanningRequest;
  export type Output = StartQueryPlanningResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidInputException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace StartTransaction {
  export type Input = StartTransactionRequest;
  export type Output = StartTransactionResponse;
  export type Error =
    | InternalServiceException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateDataCellsFilter {
  export type Input = UpdateDataCellsFilterRequest;
  export type Output = UpdateDataCellsFilterResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateLFTag {
  export type Input = UpdateLFTagRequest;
  export type Output = UpdateLFTagResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateLFTagExpression {
  export type Input = UpdateLFTagExpressionRequest;
  export type Output = UpdateLFTagExpressionResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNumberLimitExceededException
    | CommonAwsError;
}

export declare namespace UpdateLakeFormationIdentityCenterConfiguration {
  export type Input = UpdateLakeFormationIdentityCenterConfigurationRequest;
  export type Output = UpdateLakeFormationIdentityCenterConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateResource {
  export type Input = UpdateResourceRequest;
  export type Output = UpdateResourceResponse;
  export type Error =
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | CommonAwsError;
}

export declare namespace UpdateTableObjects {
  export type Input = UpdateTableObjectsRequest;
  export type Output = UpdateTableObjectsResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | OperationTimeoutException
    | ResourceNotReadyException
    | TransactionCanceledException
    | TransactionCommitInProgressException
    | TransactionCommittedException
    | CommonAwsError;
}

export declare namespace UpdateTableStorageOptimizer {
  export type Input = UpdateTableStorageOptimizerRequest;
  export type Output = UpdateTableStorageOptimizerResponse;
  export type Error =
    | AccessDeniedException
    | EntityNotFoundException
    | InternalServiceException
    | InvalidInputException
    | CommonAwsError;
}

