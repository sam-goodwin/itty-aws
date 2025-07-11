import type { Data, Effect } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface DynamoDB_20120810 {
  batchExecuteStatement(
    input: BatchExecuteStatementInput,
  ): Effect.Effect<
    BatchExecuteStatementOutput,
    InternalServerError | RequestLimitExceeded | CommonAwsError
  >;
  batchGetItem(
    input: BatchGetItemInput,
  ): Effect.Effect<
    BatchGetItemOutput,
    | InternalServerError
    | InvalidEndpointException
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | CommonAwsError
  >;
  batchWriteItem(
    input: BatchWriteItemInput,
  ): Effect.Effect<
    BatchWriteItemOutput,
    | InternalServerError
    | InvalidEndpointException
    | ItemCollectionSizeLimitExceededException
    | ProvisionedThroughputExceededException
    | ReplicatedWriteConflictException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createBackup(
    input: CreateBackupInput,
  ): Effect.Effect<
    CreateBackupOutput,
    | BackupInUseException
    | ContinuousBackupsUnavailableException
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | TableInUseException
    | TableNotFoundException
    | CommonAwsError
  >;
  createGlobalTable(
    input: CreateGlobalTableInput,
  ): Effect.Effect<
    CreateGlobalTableOutput,
    | GlobalTableAlreadyExistsException
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | TableNotFoundException
    | CommonAwsError
  >;
  createTable(
    input: CreateTableInput,
  ): Effect.Effect<
    CreateTableOutput,
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | CommonAwsError
  >;
  deleteBackup(
    input: DeleteBackupInput,
  ): Effect.Effect<
    DeleteBackupOutput,
    | BackupInUseException
    | BackupNotFoundException
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | CommonAwsError
  >;
  deleteItem(
    input: DeleteItemInput,
  ): Effect.Effect<
    DeleteItemOutput,
    | ConditionalCheckFailedException
    | InternalServerError
    | InvalidEndpointException
    | ItemCollectionSizeLimitExceededException
    | ProvisionedThroughputExceededException
    | ReplicatedWriteConflictException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | TransactionConflictException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyInput,
  ): Effect.Effect<
    DeleteResourcePolicyOutput,
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | PolicyNotFoundException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteTable(
    input: DeleteTableInput,
  ): Effect.Effect<
    DeleteTableOutput,
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeBackup(
    input: DescribeBackupInput,
  ): Effect.Effect<
    DescribeBackupOutput,
    | BackupNotFoundException
    | InternalServerError
    | InvalidEndpointException
    | CommonAwsError
  >;
  describeContinuousBackups(
    input: DescribeContinuousBackupsInput,
  ): Effect.Effect<
    DescribeContinuousBackupsOutput,
    | InternalServerError
    | InvalidEndpointException
    | TableNotFoundException
    | CommonAwsError
  >;
  describeContributorInsights(
    input: DescribeContributorInsightsInput,
  ): Effect.Effect<
    DescribeContributorInsightsOutput,
    InternalServerError | ResourceNotFoundException | CommonAwsError
  >;
  describeEndpoints(
    input: DescribeEndpointsRequest,
  ): Effect.Effect<DescribeEndpointsResponse, CommonAwsError>;
  describeExport(
    input: DescribeExportInput,
  ): Effect.Effect<
    DescribeExportOutput,
    | ExportNotFoundException
    | InternalServerError
    | LimitExceededException
    | CommonAwsError
  >;
  describeGlobalTable(
    input: DescribeGlobalTableInput,
  ): Effect.Effect<
    DescribeGlobalTableOutput,
    | GlobalTableNotFoundException
    | InternalServerError
    | InvalidEndpointException
    | CommonAwsError
  >;
  describeGlobalTableSettings(
    input: DescribeGlobalTableSettingsInput,
  ): Effect.Effect<
    DescribeGlobalTableSettingsOutput,
    | GlobalTableNotFoundException
    | InternalServerError
    | InvalidEndpointException
    | CommonAwsError
  >;
  describeImport(
    input: DescribeImportInput,
  ): Effect.Effect<
    DescribeImportOutput,
    ImportNotFoundException | CommonAwsError
  >;
  describeKinesisStreamingDestination(
    input: DescribeKinesisStreamingDestinationInput,
  ): Effect.Effect<
    DescribeKinesisStreamingDestinationOutput,
    | InternalServerError
    | InvalidEndpointException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeLimits(
    input: DescribeLimitsInput,
  ): Effect.Effect<
    DescribeLimitsOutput,
    InternalServerError | InvalidEndpointException | CommonAwsError
  >;
  describeTable(
    input: DescribeTableInput,
  ): Effect.Effect<
    DescribeTableOutput,
    | InternalServerError
    | InvalidEndpointException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeTableReplicaAutoScaling(
    input: DescribeTableReplicaAutoScalingInput,
  ): Effect.Effect<
    DescribeTableReplicaAutoScalingOutput,
    InternalServerError | ResourceNotFoundException | CommonAwsError
  >;
  describeTimeToLive(
    input: DescribeTimeToLiveInput,
  ): Effect.Effect<
    DescribeTimeToLiveOutput,
    | InternalServerError
    | InvalidEndpointException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disableKinesisStreamingDestination(
    input: KinesisStreamingDestinationInput,
  ): Effect.Effect<
    KinesisStreamingDestinationOutput,
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  enableKinesisStreamingDestination(
    input: KinesisStreamingDestinationInput,
  ): Effect.Effect<
    KinesisStreamingDestinationOutput,
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  executeStatement(
    input: ExecuteStatementInput,
  ): Effect.Effect<
    ExecuteStatementOutput,
    | ConditionalCheckFailedException
    | DuplicateItemException
    | InternalServerError
    | ItemCollectionSizeLimitExceededException
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | TransactionConflictException
    | CommonAwsError
  >;
  executeTransaction(
    input: ExecuteTransactionInput,
  ): Effect.Effect<
    ExecuteTransactionOutput,
    | IdempotentParameterMismatchException
    | InternalServerError
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | TransactionCanceledException
    | TransactionInProgressException
    | CommonAwsError
  >;
  exportTableToPointInTime(
    input: ExportTableToPointInTimeInput,
  ): Effect.Effect<
    ExportTableToPointInTimeOutput,
    | ExportConflictException
    | InternalServerError
    | InvalidExportTimeException
    | LimitExceededException
    | PointInTimeRecoveryUnavailableException
    | TableNotFoundException
    | CommonAwsError
  >;
  getItem(
    input: GetItemInput,
  ): Effect.Effect<
    GetItemOutput,
    | InternalServerError
    | InvalidEndpointException
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyInput,
  ): Effect.Effect<
    GetResourcePolicyOutput,
    | InternalServerError
    | InvalidEndpointException
    | PolicyNotFoundException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  importTable(
    input: ImportTableInput,
  ): Effect.Effect<
    ImportTableOutput,
    | ImportConflictException
    | LimitExceededException
    | ResourceInUseException
    | CommonAwsError
  >;
  listBackups(
    input: ListBackupsInput,
  ): Effect.Effect<
    ListBackupsOutput,
    InternalServerError | InvalidEndpointException | CommonAwsError
  >;
  listContributorInsights(
    input: ListContributorInsightsInput,
  ): Effect.Effect<
    ListContributorInsightsOutput,
    InternalServerError | ResourceNotFoundException | CommonAwsError
  >;
  listExports(
    input: ListExportsInput,
  ): Effect.Effect<
    ListExportsOutput,
    InternalServerError | LimitExceededException | CommonAwsError
  >;
  listGlobalTables(
    input: ListGlobalTablesInput,
  ): Effect.Effect<
    ListGlobalTablesOutput,
    InternalServerError | InvalidEndpointException | CommonAwsError
  >;
  listImports(
    input: ListImportsInput,
  ): Effect.Effect<ListImportsOutput, LimitExceededException | CommonAwsError>;
  listTables(
    input: ListTablesInput,
  ): Effect.Effect<
    ListTablesOutput,
    InternalServerError | InvalidEndpointException | CommonAwsError
  >;
  listTagsOfResource(
    input: ListTagsOfResourceInput,
  ): Effect.Effect<
    ListTagsOfResourceOutput,
    | InternalServerError
    | InvalidEndpointException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putItem(
    input: PutItemInput,
  ): Effect.Effect<
    PutItemOutput,
    | ConditionalCheckFailedException
    | InternalServerError
    | InvalidEndpointException
    | ItemCollectionSizeLimitExceededException
    | ProvisionedThroughputExceededException
    | ReplicatedWriteConflictException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | TransactionConflictException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyInput,
  ): Effect.Effect<
    PutResourcePolicyOutput,
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | PolicyNotFoundException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  query(
    input: QueryInput,
  ): Effect.Effect<
    QueryOutput,
    | InternalServerError
    | InvalidEndpointException
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | CommonAwsError
  >;
  restoreTableFromBackup(
    input: RestoreTableFromBackupInput,
  ): Effect.Effect<
    RestoreTableFromBackupOutput,
    | BackupInUseException
    | BackupNotFoundException
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | TableAlreadyExistsException
    | TableInUseException
    | CommonAwsError
  >;
  restoreTableToPointInTime(
    input: RestoreTableToPointInTimeInput,
  ): Effect.Effect<
    RestoreTableToPointInTimeOutput,
    | InternalServerError
    | InvalidEndpointException
    | InvalidRestoreTimeException
    | LimitExceededException
    | PointInTimeRecoveryUnavailableException
    | TableAlreadyExistsException
    | TableInUseException
    | TableNotFoundException
    | CommonAwsError
  >;
  scan(
    input: ScanInput,
  ): Effect.Effect<
    ScanOutput,
    | InternalServerError
    | InvalidEndpointException
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    {},
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  transactGetItems(
    input: TransactGetItemsInput,
  ): Effect.Effect<
    TransactGetItemsOutput,
    | InternalServerError
    | InvalidEndpointException
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | TransactionCanceledException
    | CommonAwsError
  >;
  transactWriteItems(
    input: TransactWriteItemsInput,
  ): Effect.Effect<
    TransactWriteItemsOutput,
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidEndpointException
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | TransactionCanceledException
    | TransactionInProgressException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    {},
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateContinuousBackups(
    input: UpdateContinuousBackupsInput,
  ): Effect.Effect<
    UpdateContinuousBackupsOutput,
    | ContinuousBackupsUnavailableException
    | InternalServerError
    | InvalidEndpointException
    | TableNotFoundException
    | CommonAwsError
  >;
  updateContributorInsights(
    input: UpdateContributorInsightsInput,
  ): Effect.Effect<
    UpdateContributorInsightsOutput,
    InternalServerError | ResourceNotFoundException | CommonAwsError
  >;
  updateGlobalTable(
    input: UpdateGlobalTableInput,
  ): Effect.Effect<
    UpdateGlobalTableOutput,
    | GlobalTableNotFoundException
    | InternalServerError
    | InvalidEndpointException
    | ReplicaAlreadyExistsException
    | ReplicaNotFoundException
    | TableNotFoundException
    | CommonAwsError
  >;
  updateGlobalTableSettings(
    input: UpdateGlobalTableSettingsInput,
  ): Effect.Effect<
    UpdateGlobalTableSettingsOutput,
    | GlobalTableNotFoundException
    | IndexNotFoundException
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ReplicaNotFoundException
    | ResourceInUseException
    | CommonAwsError
  >;
  updateItem(
    input: UpdateItemInput,
  ): Effect.Effect<
    UpdateItemOutput,
    | ConditionalCheckFailedException
    | InternalServerError
    | InvalidEndpointException
    | ItemCollectionSizeLimitExceededException
    | ProvisionedThroughputExceededException
    | ReplicatedWriteConflictException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | TransactionConflictException
    | CommonAwsError
  >;
  updateKinesisStreamingDestination(
    input: UpdateKinesisStreamingDestinationInput,
  ): Effect.Effect<
    UpdateKinesisStreamingDestinationOutput,
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateTable(
    input: UpdateTableInput,
  ): Effect.Effect<
    UpdateTableOutput,
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateTableReplicaAutoScaling(
    input: UpdateTableReplicaAutoScalingInput,
  ): Effect.Effect<
    UpdateTableReplicaAutoScalingOutput,
    | InternalServerError
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateTimeToLive(
    input: UpdateTimeToLiveInput,
  ): Effect.Effect<
    UpdateTimeToLiveOutput,
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type DynamoDB = DynamoDB_20120810;

export type ApproximateCreationDateTimePrecision =
  | "MILLISECOND"
  | "MICROSECOND";
export type ArchivalReason = string;

export interface ArchivalSummary {
  ArchivalDateTime?: Date | string;
  ArchivalReason?: string;
  ArchivalBackupArn?: string;
}
export type AttributeAction = "ADD" | "PUT" | "DELETE";
export interface AttributeDefinition {
  AttributeName: string;
  AttributeType: ScalarAttributeType;
}
export type AttributeDefinitions = Array<AttributeDefinition>;
export type AttributeMap = Record<string, AttributeValue>;
export type AttributeName = string;

export type AttributeNameList = Array<string>;
export type AttributeUpdates = Record<string, AttributeValueUpdate>;
export type AttributeValue =
  | { S: string }
  | { N: string }
  | { B: Uint8Array | string }
  | { SS: Array<string> }
  | { NS: Array<string> }
  | { BS: Array<Uint8Array | string> }
  | { M: Record<string, AttributeValue> }
  | { L: Array<AttributeValue> }
  | { NULL: boolean }
  | { BOOL: boolean };
export type AttributeValueList = Array<AttributeValue>;
export interface AttributeValueUpdate {
  Value?: AttributeValue;
  Action?: AttributeAction;
}
export interface AutoScalingPolicyDescription {
  PolicyName?: string;
  TargetTrackingScalingPolicyConfiguration?: AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
}
export type AutoScalingPolicyDescriptionList =
  Array<AutoScalingPolicyDescription>;
export type AutoScalingPolicyName = string;

export interface AutoScalingPolicyUpdate {
  PolicyName?: string;
  TargetTrackingScalingPolicyConfiguration: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
}
export type AutoScalingRoleArn = string;

export interface AutoScalingSettingsDescription {
  MinimumUnits?: number;
  MaximumUnits?: number;
  AutoScalingDisabled?: boolean;
  AutoScalingRoleArn?: string;
  ScalingPolicies?: Array<AutoScalingPolicyDescription>;
}
export interface AutoScalingSettingsUpdate {
  MinimumUnits?: number;
  MaximumUnits?: number;
  AutoScalingDisabled?: boolean;
  AutoScalingRoleArn?: string;
  ScalingPolicyUpdate?: AutoScalingPolicyUpdate;
}
export interface AutoScalingTargetTrackingScalingPolicyConfigurationDescription {
  DisableScaleIn?: boolean;
  ScaleInCooldown?: number;
  ScaleOutCooldown?: number;
  TargetValue: number;
}
export interface AutoScalingTargetTrackingScalingPolicyConfigurationUpdate {
  DisableScaleIn?: boolean;
  ScaleInCooldown?: number;
  ScaleOutCooldown?: number;
  TargetValue: number;
}
export type Backfilling = boolean;

export type BackupArn = string;

export type BackupCreationDateTime = Date | string;

export interface BackupDescription {
  BackupDetails?: BackupDetails;
  SourceTableDetails?: SourceTableDetails;
  SourceTableFeatureDetails?: SourceTableFeatureDetails;
}
export interface BackupDetails {
  BackupArn: string;
  BackupName: string;
  BackupSizeBytes?: number;
  BackupStatus: BackupStatus;
  BackupType: BackupType;
  BackupCreationDateTime: Date | string;
  BackupExpiryDateTime?: Date | string;
}
export declare class BackupInUseException extends Data.TaggedError(
  "BackupInUseException",
)<{
  readonly message?: string;
}> {}
export type BackupName = string;

export declare class BackupNotFoundException extends Data.TaggedError(
  "BackupNotFoundException",
)<{
  readonly message?: string;
}> {}
export type BackupsInputLimit = number;

export type BackupSizeBytes = number;

export type BackupStatus = "CREATING" | "DELETED" | "AVAILABLE";
export type BackupSummaries = Array<BackupSummary>;
export interface BackupSummary {
  TableName?: string;
  TableId?: string;
  TableArn?: string;
  BackupArn?: string;
  BackupName?: string;
  BackupCreationDateTime?: Date | string;
  BackupExpiryDateTime?: Date | string;
  BackupStatus?: BackupStatus;
  BackupType?: BackupType;
  BackupSizeBytes?: number;
}
export type BackupType = "USER" | "SYSTEM" | "AWS_BACKUP";
export type BackupTypeFilter = "USER" | "SYSTEM" | "AWS_BACKUP" | "ALL";
export interface BatchExecuteStatementInput {
  Statements: Array<BatchStatementRequest>;
  ReturnConsumedCapacity?: ReturnConsumedCapacity;
}
export interface BatchExecuteStatementOutput {
  Responses?: Array<BatchStatementResponse>;
  ConsumedCapacity?: Array<ConsumedCapacity>;
}
export interface BatchGetItemInput {
  RequestItems: Record<string, KeysAndAttributes>;
  ReturnConsumedCapacity?: ReturnConsumedCapacity;
}
export interface BatchGetItemOutput {
  Responses?: Record<string, Array<Record<string, AttributeValue>>>;
  UnprocessedKeys?: Record<string, KeysAndAttributes>;
  ConsumedCapacity?: Array<ConsumedCapacity>;
}
export type BatchGetRequestMap = Record<string, KeysAndAttributes>;
export type BatchGetResponseMap = Record<
  string,
  Array<Record<string, AttributeValue>>
>;
export interface BatchStatementError {
  Code?: BatchStatementErrorCodeEnum;
  Message?: string;
  Item?: Record<string, AttributeValue>;
}
export type BatchStatementErrorCodeEnum =
  | "ConditionalCheckFailed"
  | "ItemCollectionSizeLimitExceeded"
  | "RequestLimitExceeded"
  | "ValidationError"
  | "ProvisionedThroughputExceeded"
  | "TransactionConflict"
  | "ThrottlingError"
  | "InternalServerError"
  | "ResourceNotFound"
  | "AccessDenied"
  | "DuplicateItem";
export interface BatchStatementRequest {
  Statement: string;
  Parameters?: Array<AttributeValue>;
  ConsistentRead?: boolean;
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
}
export interface BatchStatementResponse {
  Error?: BatchStatementError;
  TableName?: string;
  Item?: Record<string, AttributeValue>;
}
export interface BatchWriteItemInput {
  RequestItems: Record<string, Array<WriteRequest>>;
  ReturnConsumedCapacity?: ReturnConsumedCapacity;
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
}
export interface BatchWriteItemOutput {
  UnprocessedItems?: Record<string, Array<WriteRequest>>;
  ItemCollectionMetrics?: Record<string, Array<ItemCollectionMetrics>>;
  ConsumedCapacity?: Array<ConsumedCapacity>;
}
export type BatchWriteItemRequestMap = Record<string, Array<WriteRequest>>;
export type BilledSizeBytes = number;

export type BillingMode = "PROVISIONED" | "PAY_PER_REQUEST";
export interface BillingModeSummary {
  BillingMode?: BillingMode;
  LastUpdateToPayPerRequestDateTime?: Date | string;
}
export type BinaryAttributeValue = Uint8Array | string;

export type BinarySetAttributeValue = Array<Uint8Array | string>;
export type BooleanAttributeValue = boolean;

export type BooleanObject = boolean;

export interface CancellationReason {
  Item?: Record<string, AttributeValue>;
  Code?: string;
  Message?: string;
}
export type CancellationReasonList = Array<CancellationReason>;
export interface Capacity {
  ReadCapacityUnits?: number;
  WriteCapacityUnits?: number;
  CapacityUnits?: number;
}
export type ClientRequestToken = string;

export type ClientToken = string;

export type CloudWatchLogGroupArn = string;

export type Code = string;

export type ComparisonOperator =
  | "EQ"
  | "NE"
  | "IN"
  | "LE"
  | "LT"
  | "GE"
  | "GT"
  | "BETWEEN"
  | "NOT_NULL"
  | "NULL"
  | "CONTAINS"
  | "NOT_CONTAINS"
  | "BEGINS_WITH";
export interface Condition {
  AttributeValueList?: Array<AttributeValue>;
  ComparisonOperator: ComparisonOperator;
}
export declare class ConditionalCheckFailedException extends Data.TaggedError(
  "ConditionalCheckFailedException",
)<{
  readonly message?: string;
  readonly Item?: Record<string, AttributeValue>;
}> {}
export type ConditionalOperator = "AND" | "OR";
export interface ConditionCheck {
  Key: Record<string, AttributeValue>;
  TableName: string;
  ConditionExpression: string;
  ExpressionAttributeNames?: Record<string, string>;
  ExpressionAttributeValues?: Record<string, AttributeValue>;
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
}
export type ConditionExpression = string;

export type ConfirmRemoveSelfResourceAccess = boolean;

export type ConsistentRead = boolean;

export interface ConsumedCapacity {
  TableName?: string;
  CapacityUnits?: number;
  ReadCapacityUnits?: number;
  WriteCapacityUnits?: number;
  Table?: Capacity;
  LocalSecondaryIndexes?: Record<string, Capacity>;
  GlobalSecondaryIndexes?: Record<string, Capacity>;
}
export type ConsumedCapacityMultiple = Array<ConsumedCapacity>;
export type ConsumedCapacityUnits = number;

export interface ContinuousBackupsDescription {
  ContinuousBackupsStatus: ContinuousBackupsStatus;
  PointInTimeRecoveryDescription?: PointInTimeRecoveryDescription;
}
export type ContinuousBackupsStatus = "ENABLED" | "DISABLED";
export declare class ContinuousBackupsUnavailableException extends Data.TaggedError(
  "ContinuousBackupsUnavailableException",
)<{
  readonly message?: string;
}> {}
export type ContributorInsightsAction = "ENABLE" | "DISABLE";
export type ContributorInsightsRule = string;

export type ContributorInsightsRuleList = Array<string>;
export type ContributorInsightsStatus =
  | "ENABLING"
  | "ENABLED"
  | "DISABLING"
  | "DISABLED"
  | "FAILED";
export type ContributorInsightsSummaries = Array<ContributorInsightsSummary>;
export interface ContributorInsightsSummary {
  TableName?: string;
  IndexName?: string;
  ContributorInsightsStatus?: ContributorInsightsStatus;
}
export interface CreateBackupInput {
  TableName: string;
  BackupName: string;
}
export interface CreateBackupOutput {
  BackupDetails?: BackupDetails;
}
export interface CreateGlobalSecondaryIndexAction {
  IndexName: string;
  KeySchema: Array<KeySchemaElement>;
  Projection: Projection;
  ProvisionedThroughput?: ProvisionedThroughput;
  OnDemandThroughput?: OnDemandThroughput;
  WarmThroughput?: WarmThroughput;
}
export interface CreateGlobalTableInput {
  GlobalTableName: string;
  ReplicationGroup: Array<Replica>;
}
export interface CreateGlobalTableOutput {
  GlobalTableDescription?: GlobalTableDescription;
}
export interface CreateGlobalTableWitnessGroupMemberAction {
  RegionName: string;
}
export interface CreateReplicaAction {
  RegionName: string;
}
export interface CreateReplicationGroupMemberAction {
  RegionName: string;
  KMSMasterKeyId?: string;
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
  OnDemandThroughputOverride?: OnDemandThroughputOverride;
  GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndex>;
  TableClassOverride?: TableClass;
}
export interface CreateTableInput {
  AttributeDefinitions: Array<AttributeDefinition>;
  TableName: string;
  KeySchema: Array<KeySchemaElement>;
  LocalSecondaryIndexes?: Array<LocalSecondaryIndex>;
  GlobalSecondaryIndexes?: Array<GlobalSecondaryIndex>;
  BillingMode?: BillingMode;
  ProvisionedThroughput?: ProvisionedThroughput;
  StreamSpecification?: StreamSpecification;
  SSESpecification?: SSESpecification;
  Tags?: Array<Tag>;
  TableClass?: TableClass;
  DeletionProtectionEnabled?: boolean;
  WarmThroughput?: WarmThroughput;
  ResourcePolicy?: string;
  OnDemandThroughput?: OnDemandThroughput;
}
export interface CreateTableOutput {
  TableDescription?: TableDescription;
}
export type CsvDelimiter = string;

export type CsvHeader = string;

export type CsvHeaderList = Array<string>;
export interface CsvOptions {
  Delimiter?: string;
  HeaderList?: Array<string>;
}
export interface Delete {
  Key: Record<string, AttributeValue>;
  TableName: string;
  ConditionExpression?: string;
  ExpressionAttributeNames?: Record<string, string>;
  ExpressionAttributeValues?: Record<string, AttributeValue>;
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
}
export interface DeleteBackupInput {
  BackupArn: string;
}
export interface DeleteBackupOutput {
  BackupDescription?: BackupDescription;
}
export interface DeleteGlobalSecondaryIndexAction {
  IndexName: string;
}
export interface DeleteGlobalTableWitnessGroupMemberAction {
  RegionName: string;
}
export interface DeleteItemInput {
  TableName: string;
  Key: Record<string, AttributeValue>;
  Expected?: Record<string, ExpectedAttributeValue>;
  ConditionalOperator?: ConditionalOperator;
  ReturnValues?: ReturnValue;
  ReturnConsumedCapacity?: ReturnConsumedCapacity;
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
  ConditionExpression?: string;
  ExpressionAttributeNames?: Record<string, string>;
  ExpressionAttributeValues?: Record<string, AttributeValue>;
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
}
export interface DeleteItemOutput {
  Attributes?: Record<string, AttributeValue>;
  ConsumedCapacity?: ConsumedCapacity;
  ItemCollectionMetrics?: ItemCollectionMetrics;
}
export interface DeleteReplicaAction {
  RegionName: string;
}
export interface DeleteReplicationGroupMemberAction {
  RegionName: string;
}
export interface DeleteRequest {
  Key: Record<string, AttributeValue>;
}
export interface DeleteResourcePolicyInput {
  ResourceArn: string;
  ExpectedRevisionId?: string;
}
export interface DeleteResourcePolicyOutput {
  RevisionId?: string;
}
export interface DeleteTableInput {
  TableName: string;
}
export interface DeleteTableOutput {
  TableDescription?: TableDescription;
}
export type DeletionProtectionEnabled = boolean;

export interface DescribeBackupInput {
  BackupArn: string;
}
export interface DescribeBackupOutput {
  BackupDescription?: BackupDescription;
}
export interface DescribeContinuousBackupsInput {
  TableName: string;
}
export interface DescribeContinuousBackupsOutput {
  ContinuousBackupsDescription?: ContinuousBackupsDescription;
}
export interface DescribeContributorInsightsInput {
  TableName: string;
  IndexName?: string;
}
export interface DescribeContributorInsightsOutput {
  TableName?: string;
  IndexName?: string;
  ContributorInsightsRuleList?: Array<string>;
  ContributorInsightsStatus?: ContributorInsightsStatus;
  LastUpdateDateTime?: Date | string;
  FailureException?: FailureException;
}
export interface DescribeEndpointsRequest {}
export interface DescribeEndpointsResponse {
  Endpoints: Array<Endpoint>;
}
export interface DescribeExportInput {
  ExportArn: string;
}
export interface DescribeExportOutput {
  ExportDescription?: ExportDescription;
}
export interface DescribeGlobalTableInput {
  GlobalTableName: string;
}
export interface DescribeGlobalTableOutput {
  GlobalTableDescription?: GlobalTableDescription;
}
export interface DescribeGlobalTableSettingsInput {
  GlobalTableName: string;
}
export interface DescribeGlobalTableSettingsOutput {
  GlobalTableName?: string;
  ReplicaSettings?: Array<ReplicaSettingsDescription>;
}
export interface DescribeImportInput {
  ImportArn: string;
}
export interface DescribeImportOutput {
  ImportTableDescription: ImportTableDescription;
}
export interface DescribeKinesisStreamingDestinationInput {
  TableName: string;
}
export interface DescribeKinesisStreamingDestinationOutput {
  TableName?: string;
  KinesisDataStreamDestinations?: Array<KinesisDataStreamDestination>;
}
export interface DescribeLimitsInput {}
export interface DescribeLimitsOutput {
  AccountMaxReadCapacityUnits?: number;
  AccountMaxWriteCapacityUnits?: number;
  TableMaxReadCapacityUnits?: number;
  TableMaxWriteCapacityUnits?: number;
}
export interface DescribeTableInput {
  TableName: string;
}
export interface DescribeTableOutput {
  Table?: TableDescription;
}
export interface DescribeTableReplicaAutoScalingInput {
  TableName: string;
}
export interface DescribeTableReplicaAutoScalingOutput {
  TableAutoScalingDescription?: TableAutoScalingDescription;
}
export interface DescribeTimeToLiveInput {
  TableName: string;
}
export interface DescribeTimeToLiveOutput {
  TimeToLiveDescription?: TimeToLiveDescription;
}
export type DestinationStatus =
  | "ENABLING"
  | "ACTIVE"
  | "DISABLING"
  | "DISABLED"
  | "ENABLE_FAILED"
  | "UPDATING";
export type DoubleObject = number;

export declare class DuplicateItemException extends Data.TaggedError(
  "DuplicateItemException",
)<{
  readonly message?: string;
}> {}
export interface EnableKinesisStreamingConfiguration {
  ApproximateCreationDateTimePrecision?: ApproximateCreationDateTimePrecision;
}
export interface Endpoint {
  Address: string;
  CachePeriodInMinutes: number;
}
export type Endpoints = Array<Endpoint>;
export type ErrorCount = number;

export type ErrorMessage = string;

export type ExceptionDescription = string;

export type ExceptionName = string;

export interface ExecuteStatementInput {
  Statement: string;
  Parameters?: Array<AttributeValue>;
  ConsistentRead?: boolean;
  NextToken?: string;
  ReturnConsumedCapacity?: ReturnConsumedCapacity;
  Limit?: number;
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
}
export interface ExecuteStatementOutput {
  Items?: Array<Record<string, AttributeValue>>;
  NextToken?: string;
  ConsumedCapacity?: ConsumedCapacity;
  LastEvaluatedKey?: Record<string, AttributeValue>;
}
export interface ExecuteTransactionInput {
  TransactStatements: Array<ParameterizedStatement>;
  ClientRequestToken?: string;
  ReturnConsumedCapacity?: ReturnConsumedCapacity;
}
export interface ExecuteTransactionOutput {
  Responses?: Array<ItemResponse>;
  ConsumedCapacity?: Array<ConsumedCapacity>;
}
export type ExpectedAttributeMap = Record<string, ExpectedAttributeValue>;
export interface ExpectedAttributeValue {
  Value?: AttributeValue;
  Exists?: boolean;
  ComparisonOperator?: ComparisonOperator;
  AttributeValueList?: Array<AttributeValue>;
}
export type ExportArn = string;

export declare class ExportConflictException extends Data.TaggedError(
  "ExportConflictException",
)<{
  readonly message?: string;
}> {}
export interface ExportDescription {
  ExportArn?: string;
  ExportStatus?: ExportStatus;
  StartTime?: Date | string;
  EndTime?: Date | string;
  ExportManifest?: string;
  TableArn?: string;
  TableId?: string;
  ExportTime?: Date | string;
  ClientToken?: string;
  S3Bucket?: string;
  S3BucketOwner?: string;
  S3Prefix?: string;
  S3SseAlgorithm?: S3SseAlgorithm;
  S3SseKmsKeyId?: string;
  FailureCode?: string;
  FailureMessage?: string;
  ExportFormat?: ExportFormat;
  BilledSizeBytes?: number;
  ItemCount?: number;
  ExportType?: ExportType;
  IncrementalExportSpecification?: IncrementalExportSpecification;
}
export type ExportEndTime = Date | string;

export type ExportFormat = "DYNAMODB_JSON" | "ION";
export type ExportFromTime = Date | string;

export type ExportManifest = string;

export type ExportNextToken = string;

export declare class ExportNotFoundException extends Data.TaggedError(
  "ExportNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ExportStartTime = Date | string;

export type ExportStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED";
export type ExportSummaries = Array<ExportSummary>;
export interface ExportSummary {
  ExportArn?: string;
  ExportStatus?: ExportStatus;
  ExportType?: ExportType;
}
export interface ExportTableToPointInTimeInput {
  TableArn: string;
  ExportTime?: Date | string;
  ClientToken?: string;
  S3Bucket: string;
  S3BucketOwner?: string;
  S3Prefix?: string;
  S3SseAlgorithm?: S3SseAlgorithm;
  S3SseKmsKeyId?: string;
  ExportFormat?: ExportFormat;
  ExportType?: ExportType;
  IncrementalExportSpecification?: IncrementalExportSpecification;
}
export interface ExportTableToPointInTimeOutput {
  ExportDescription?: ExportDescription;
}
export type ExportTime = Date | string;

export type ExportToTime = Date | string;

export type ExportType = "FULL_EXPORT" | "INCREMENTAL_EXPORT";
export type ExportViewType = "NEW_IMAGE" | "NEW_AND_OLD_IMAGES";
export type ExpressionAttributeNameMap = Record<string, string>;
export type ExpressionAttributeNameVariable = string;

export type ExpressionAttributeValueMap = Record<string, AttributeValue>;
export type ExpressionAttributeValueVariable = string;

export type FailureCode = string;

export interface FailureException {
  ExceptionName?: string;
  ExceptionDescription?: string;
}
export type FailureMessage = string;

export type FilterConditionMap = Record<string, Condition>;
export interface Get {
  Key: Record<string, AttributeValue>;
  TableName: string;
  ProjectionExpression?: string;
  ExpressionAttributeNames?: Record<string, string>;
}
export interface GetItemInput {
  TableName: string;
  Key: Record<string, AttributeValue>;
  AttributesToGet?: Array<string>;
  ConsistentRead?: boolean;
  ReturnConsumedCapacity?: ReturnConsumedCapacity;
  ProjectionExpression?: string;
  ExpressionAttributeNames?: Record<string, string>;
}
export interface GetItemOutput {
  Item?: Record<string, AttributeValue>;
  ConsumedCapacity?: ConsumedCapacity;
}
export interface GetResourcePolicyInput {
  ResourceArn: string;
}
export interface GetResourcePolicyOutput {
  Policy?: string;
  RevisionId?: string;
}
export interface GlobalSecondaryIndex {
  IndexName: string;
  KeySchema: Array<KeySchemaElement>;
  Projection: Projection;
  ProvisionedThroughput?: ProvisionedThroughput;
  OnDemandThroughput?: OnDemandThroughput;
  WarmThroughput?: WarmThroughput;
}
export interface GlobalSecondaryIndexAutoScalingUpdate {
  IndexName?: string;
  ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}
export type GlobalSecondaryIndexAutoScalingUpdateList =
  Array<GlobalSecondaryIndexAutoScalingUpdate>;
export interface GlobalSecondaryIndexDescription {
  IndexName?: string;
  KeySchema?: Array<KeySchemaElement>;
  Projection?: Projection;
  IndexStatus?: IndexStatus;
  Backfilling?: boolean;
  ProvisionedThroughput?: ProvisionedThroughputDescription;
  IndexSizeBytes?: number;
  ItemCount?: number;
  IndexArn?: string;
  OnDemandThroughput?: OnDemandThroughput;
  WarmThroughput?: GlobalSecondaryIndexWarmThroughputDescription;
}
export type GlobalSecondaryIndexDescriptionList =
  Array<GlobalSecondaryIndexDescription>;
export type GlobalSecondaryIndexes = Array<GlobalSecondaryIndexInfo>;
export interface GlobalSecondaryIndexInfo {
  IndexName?: string;
  KeySchema?: Array<KeySchemaElement>;
  Projection?: Projection;
  ProvisionedThroughput?: ProvisionedThroughput;
  OnDemandThroughput?: OnDemandThroughput;
}
export type GlobalSecondaryIndexList = Array<GlobalSecondaryIndex>;
export interface GlobalSecondaryIndexUpdate {
  Update?: UpdateGlobalSecondaryIndexAction;
  Create?: CreateGlobalSecondaryIndexAction;
  Delete?: DeleteGlobalSecondaryIndexAction;
}
export type GlobalSecondaryIndexUpdateList = Array<GlobalSecondaryIndexUpdate>;
export interface GlobalSecondaryIndexWarmThroughputDescription {
  ReadUnitsPerSecond?: number;
  WriteUnitsPerSecond?: number;
  Status?: IndexStatus;
}
export interface GlobalTable {
  GlobalTableName?: string;
  ReplicationGroup?: Array<Replica>;
}
export declare class GlobalTableAlreadyExistsException extends Data.TaggedError(
  "GlobalTableAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type GlobalTableArnString = string;

export interface GlobalTableDescription {
  ReplicationGroup?: Array<ReplicaDescription>;
  GlobalTableArn?: string;
  CreationDateTime?: Date | string;
  GlobalTableStatus?: GlobalTableStatus;
  GlobalTableName?: string;
}
export interface GlobalTableGlobalSecondaryIndexSettingsUpdate {
  IndexName: string;
  ProvisionedWriteCapacityUnits?: number;
  ProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
}
export type GlobalTableGlobalSecondaryIndexSettingsUpdateList =
  Array<GlobalTableGlobalSecondaryIndexSettingsUpdate>;
export type GlobalTableList = Array<GlobalTable>;
export declare class GlobalTableNotFoundException extends Data.TaggedError(
  "GlobalTableNotFoundException",
)<{
  readonly message?: string;
}> {}
export type GlobalTableStatus = "CREATING" | "ACTIVE" | "DELETING" | "UPDATING";
export interface GlobalTableWitnessDescription {
  RegionName?: string;
  WitnessStatus?: WitnessStatus;
}
export type GlobalTableWitnessDescriptionList =
  Array<GlobalTableWitnessDescription>;
export interface GlobalTableWitnessGroupUpdate {
  Create?: CreateGlobalTableWitnessGroupMemberAction;
  Delete?: DeleteGlobalTableWitnessGroupMemberAction;
}
export type GlobalTableWitnessGroupUpdateList =
  Array<GlobalTableWitnessGroupUpdate>;
export declare class IdempotentParameterMismatchException extends Data.TaggedError(
  "IdempotentParameterMismatchException",
)<{
  readonly Message?: string;
}> {}
export type ImportArn = string;

export declare class ImportConflictException extends Data.TaggedError(
  "ImportConflictException",
)<{
  readonly message?: string;
}> {}
export type ImportedItemCount = number;

export type ImportEndTime = Date | string;

export type ImportNextToken = string;

export declare class ImportNotFoundException extends Data.TaggedError(
  "ImportNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ImportStartTime = Date | string;

export type ImportStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLING"
  | "CANCELLED"
  | "FAILED";
export interface ImportSummary {
  ImportArn?: string;
  ImportStatus?: ImportStatus;
  TableArn?: string;
  S3BucketSource?: S3BucketSource;
  CloudWatchLogGroupArn?: string;
  InputFormat?: InputFormat;
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export type ImportSummaryList = Array<ImportSummary>;
export interface ImportTableDescription {
  ImportArn?: string;
  ImportStatus?: ImportStatus;
  TableArn?: string;
  TableId?: string;
  ClientToken?: string;
  S3BucketSource?: S3BucketSource;
  ErrorCount?: number;
  CloudWatchLogGroupArn?: string;
  InputFormat?: InputFormat;
  InputFormatOptions?: InputFormatOptions;
  InputCompressionType?: InputCompressionType;
  TableCreationParameters?: TableCreationParameters;
  StartTime?: Date | string;
  EndTime?: Date | string;
  ProcessedSizeBytes?: number;
  ProcessedItemCount?: number;
  ImportedItemCount?: number;
  FailureCode?: string;
  FailureMessage?: string;
}
export interface ImportTableInput {
  ClientToken?: string;
  S3BucketSource: S3BucketSource;
  InputFormat: InputFormat;
  InputFormatOptions?: InputFormatOptions;
  InputCompressionType?: InputCompressionType;
  TableCreationParameters: TableCreationParameters;
}
export interface ImportTableOutput {
  ImportTableDescription: ImportTableDescription;
}
export interface IncrementalExportSpecification {
  ExportFromTime?: Date | string;
  ExportToTime?: Date | string;
  ExportViewType?: ExportViewType;
}
export type IndexName = string;

export declare class IndexNotFoundException extends Data.TaggedError(
  "IndexNotFoundException",
)<{
  readonly message?: string;
}> {}
export type IndexStatus = "CREATING" | "UPDATING" | "DELETING" | "ACTIVE";
export type InputCompressionType = "GZIP" | "ZSTD" | "NONE";
export type InputFormat = "DYNAMODB_JSON" | "ION" | "CSV";
export interface InputFormatOptions {
  Csv?: CsvOptions;
}
export type Integer = number;

export type IntegerObject = number;

export declare class InternalServerError extends Data.TaggedError(
  "InternalServerError",
)<{
  readonly message?: string;
}> {}
export declare class InvalidEndpointException extends Data.TaggedError(
  "InvalidEndpointException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidExportTimeException extends Data.TaggedError(
  "InvalidExportTimeException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRestoreTimeException extends Data.TaggedError(
  "InvalidRestoreTimeException",
)<{
  readonly message?: string;
}> {}
export type ItemCollectionKeyAttributeMap = Record<string, AttributeValue>;
export interface ItemCollectionMetrics {
  ItemCollectionKey?: Record<string, AttributeValue>;
  SizeEstimateRangeGB?: Array<number>;
}
export type ItemCollectionMetricsMultiple = Array<ItemCollectionMetrics>;
export type ItemCollectionMetricsPerTable = Record<
  string,
  Array<ItemCollectionMetrics>
>;
export type ItemCollectionSizeEstimateBound = number;

export type ItemCollectionSizeEstimateRange = Array<number>;
export declare class ItemCollectionSizeLimitExceededException extends Data.TaggedError(
  "ItemCollectionSizeLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type ItemCount = number;

export type ItemList = Array<Record<string, AttributeValue>>;
export interface ItemResponse {
  Item?: Record<string, AttributeValue>;
}
export type ItemResponseList = Array<ItemResponse>;
export type Key = Record<string, AttributeValue>;
export type KeyConditions = Record<string, Condition>;
export type KeyExpression = string;

export type KeyList = Array<Record<string, AttributeValue>>;
export interface KeysAndAttributes {
  Keys: Array<Record<string, AttributeValue>>;
  AttributesToGet?: Array<string>;
  ConsistentRead?: boolean;
  ProjectionExpression?: string;
  ExpressionAttributeNames?: Record<string, string>;
}
export type KeySchema = Array<KeySchemaElement>;
export type KeySchemaAttributeName = string;

export interface KeySchemaElement {
  AttributeName: string;
  KeyType: KeyType;
}
export type KeyType = "HASH" | "RANGE";
export interface KinesisDataStreamDestination {
  StreamArn?: string;
  DestinationStatus?: DestinationStatus;
  DestinationStatusDescription?: string;
  ApproximateCreationDateTimePrecision?: ApproximateCreationDateTimePrecision;
}
export type KinesisDataStreamDestinations = Array<KinesisDataStreamDestination>;
export interface KinesisStreamingDestinationInput {
  TableName: string;
  StreamArn: string;
  EnableKinesisStreamingConfiguration?: EnableKinesisStreamingConfiguration;
}
export interface KinesisStreamingDestinationOutput {
  TableName?: string;
  StreamArn?: string;
  DestinationStatus?: DestinationStatus;
  EnableKinesisStreamingConfiguration?: EnableKinesisStreamingConfiguration;
}
export type KMSMasterKeyArn = string;

export type KMSMasterKeyId = string;

export type LastUpdateDateTime = Date | string;

export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export type ListAttributeValue = Array<AttributeValue>;
export interface ListBackupsInput {
  TableName?: string;
  Limit?: number;
  TimeRangeLowerBound?: Date | string;
  TimeRangeUpperBound?: Date | string;
  ExclusiveStartBackupArn?: string;
  BackupType?: BackupTypeFilter;
}
export interface ListBackupsOutput {
  BackupSummaries?: Array<BackupSummary>;
  LastEvaluatedBackupArn?: string;
}
export interface ListContributorInsightsInput {
  TableName?: string;
  NextToken?: string;
  MaxResults?: number;
}
export type ListContributorInsightsLimit = number;

export interface ListContributorInsightsOutput {
  ContributorInsightsSummaries?: Array<ContributorInsightsSummary>;
  NextToken?: string;
}
export interface ListExportsInput {
  TableArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export type ListExportsMaxLimit = number;

export interface ListExportsOutput {
  ExportSummaries?: Array<ExportSummary>;
  NextToken?: string;
}
export interface ListGlobalTablesInput {
  ExclusiveStartGlobalTableName?: string;
  Limit?: number;
  RegionName?: string;
}
export interface ListGlobalTablesOutput {
  GlobalTables?: Array<GlobalTable>;
  LastEvaluatedGlobalTableName?: string;
}
export interface ListImportsInput {
  TableArn?: string;
  PageSize?: number;
  NextToken?: string;
}
export type ListImportsMaxLimit = number;

export interface ListImportsOutput {
  ImportSummaryList?: Array<ImportSummary>;
  NextToken?: string;
}
export interface ListTablesInput {
  ExclusiveStartTableName?: string;
  Limit?: number;
}
export type ListTablesInputLimit = number;

export interface ListTablesOutput {
  TableNames?: Array<string>;
  LastEvaluatedTableName?: string;
}
export interface ListTagsOfResourceInput {
  ResourceArn: string;
  NextToken?: string;
}
export interface ListTagsOfResourceOutput {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export interface LocalSecondaryIndex {
  IndexName: string;
  KeySchema: Array<KeySchemaElement>;
  Projection: Projection;
}
export interface LocalSecondaryIndexDescription {
  IndexName?: string;
  KeySchema?: Array<KeySchemaElement>;
  Projection?: Projection;
  IndexSizeBytes?: number;
  ItemCount?: number;
  IndexArn?: string;
}
export type LocalSecondaryIndexDescriptionList =
  Array<LocalSecondaryIndexDescription>;
export type LocalSecondaryIndexes = Array<LocalSecondaryIndexInfo>;
export interface LocalSecondaryIndexInfo {
  IndexName?: string;
  KeySchema?: Array<KeySchemaElement>;
  Projection?: Projection;
}
export type LocalSecondaryIndexList = Array<LocalSecondaryIndex>;
export type Long = number;

export type LongObject = number;

export type MapAttributeValue = Record<string, AttributeValue>;
export type MultiRegionConsistency = "EVENTUAL" | "STRONG";
export type NextTokenString = string;

export type NonKeyAttributeName = string;

export type NonKeyAttributeNameList = Array<string>;
export type NonNegativeLongObject = number;

export type NullAttributeValue = boolean;

export type NumberAttributeValue = string;

export type NumberSetAttributeValue = Array<string>;
export interface OnDemandThroughput {
  MaxReadRequestUnits?: number;
  MaxWriteRequestUnits?: number;
}
export interface OnDemandThroughputOverride {
  MaxReadRequestUnits?: number;
}
export interface ParameterizedStatement {
  Statement: string;
  Parameters?: Array<AttributeValue>;
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
}
export type ParameterizedStatements = Array<ParameterizedStatement>;
export type PartiQLBatchRequest = Array<BatchStatementRequest>;
export type PartiQLBatchResponse = Array<BatchStatementResponse>;
export type PartiQLNextToken = string;

export type PartiQLStatement = string;

export interface PointInTimeRecoveryDescription {
  PointInTimeRecoveryStatus?: PointInTimeRecoveryStatus;
  RecoveryPeriodInDays?: number;
  EarliestRestorableDateTime?: Date | string;
  LatestRestorableDateTime?: Date | string;
}
export interface PointInTimeRecoverySpecification {
  PointInTimeRecoveryEnabled: boolean;
  RecoveryPeriodInDays?: number;
}
export type PointInTimeRecoveryStatus = "ENABLED" | "DISABLED";
export declare class PointInTimeRecoveryUnavailableException extends Data.TaggedError(
  "PointInTimeRecoveryUnavailableException",
)<{
  readonly message?: string;
}> {}
export declare class PolicyNotFoundException extends Data.TaggedError(
  "PolicyNotFoundException",
)<{
  readonly message?: string;
}> {}
export type PolicyRevisionId = string;

export type PositiveIntegerObject = number;

export type PositiveLongObject = number;

export type PreparedStatementParameters = Array<AttributeValue>;
export type ProcessedItemCount = number;

export interface Projection {
  ProjectionType?: ProjectionType;
  NonKeyAttributes?: Array<string>;
}
export type ProjectionExpression = string;

export type ProjectionType = "ALL" | "KEYS_ONLY" | "INCLUDE";
export interface ProvisionedThroughput {
  ReadCapacityUnits: number;
  WriteCapacityUnits: number;
}
export interface ProvisionedThroughputDescription {
  LastIncreaseDateTime?: Date | string;
  LastDecreaseDateTime?: Date | string;
  NumberOfDecreasesToday?: number;
  ReadCapacityUnits?: number;
  WriteCapacityUnits?: number;
}
export declare class ProvisionedThroughputExceededException extends Data.TaggedError(
  "ProvisionedThroughputExceededException",
)<{
  readonly message?: string;
}> {}
export interface ProvisionedThroughputOverride {
  ReadCapacityUnits?: number;
}
export interface Put {
  Item: Record<string, AttributeValue>;
  TableName: string;
  ConditionExpression?: string;
  ExpressionAttributeNames?: Record<string, string>;
  ExpressionAttributeValues?: Record<string, AttributeValue>;
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
}
export interface PutItemInput {
  TableName: string;
  Item: Record<string, AttributeValue>;
  Expected?: Record<string, ExpectedAttributeValue>;
  ReturnValues?: ReturnValue;
  ReturnConsumedCapacity?: ReturnConsumedCapacity;
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
  ConditionalOperator?: ConditionalOperator;
  ConditionExpression?: string;
  ExpressionAttributeNames?: Record<string, string>;
  ExpressionAttributeValues?: Record<string, AttributeValue>;
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
}
export type PutItemInputAttributeMap = Record<string, AttributeValue>;
export interface PutItemOutput {
  Attributes?: Record<string, AttributeValue>;
  ConsumedCapacity?: ConsumedCapacity;
  ItemCollectionMetrics?: ItemCollectionMetrics;
}
export interface PutRequest {
  Item: Record<string, AttributeValue>;
}
export interface PutResourcePolicyInput {
  ResourceArn: string;
  Policy: string;
  ExpectedRevisionId?: string;
  ConfirmRemoveSelfResourceAccess?: boolean;
}
export interface PutResourcePolicyOutput {
  RevisionId?: string;
}
export interface QueryInput {
  TableName: string;
  IndexName?: string;
  Select?: Select;
  AttributesToGet?: Array<string>;
  Limit?: number;
  ConsistentRead?: boolean;
  KeyConditions?: Record<string, Condition>;
  QueryFilter?: Record<string, Condition>;
  ConditionalOperator?: ConditionalOperator;
  ScanIndexForward?: boolean;
  ExclusiveStartKey?: Record<string, AttributeValue>;
  ReturnConsumedCapacity?: ReturnConsumedCapacity;
  ProjectionExpression?: string;
  FilterExpression?: string;
  KeyConditionExpression?: string;
  ExpressionAttributeNames?: Record<string, string>;
  ExpressionAttributeValues?: Record<string, AttributeValue>;
}
export interface QueryOutput {
  Items?: Array<Record<string, AttributeValue>>;
  Count?: number;
  ScannedCount?: number;
  LastEvaluatedKey?: Record<string, AttributeValue>;
  ConsumedCapacity?: ConsumedCapacity;
}
export type RecoveryPeriodInDays = number;

export type RegionName = string;

export interface Replica {
  RegionName?: string;
}
export declare class ReplicaAlreadyExistsException extends Data.TaggedError(
  "ReplicaAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export interface ReplicaAutoScalingDescription {
  RegionName?: string;
  GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndexAutoScalingDescription>;
  ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
  ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
  ReplicaStatus?: ReplicaStatus;
}
export type ReplicaAutoScalingDescriptionList =
  Array<ReplicaAutoScalingDescription>;
export interface ReplicaAutoScalingUpdate {
  RegionName: string;
  ReplicaGlobalSecondaryIndexUpdates?: Array<ReplicaGlobalSecondaryIndexAutoScalingUpdate>;
  ReplicaProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}
export type ReplicaAutoScalingUpdateList = Array<ReplicaAutoScalingUpdate>;
export interface ReplicaDescription {
  RegionName?: string;
  ReplicaStatus?: ReplicaStatus;
  ReplicaStatusDescription?: string;
  ReplicaStatusPercentProgress?: string;
  KMSMasterKeyId?: string;
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
  OnDemandThroughputOverride?: OnDemandThroughputOverride;
  WarmThroughput?: TableWarmThroughputDescription;
  GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndexDescription>;
  ReplicaInaccessibleDateTime?: Date | string;
  ReplicaTableClassSummary?: TableClassSummary;
}
export type ReplicaDescriptionList = Array<ReplicaDescription>;
export interface ReplicaGlobalSecondaryIndex {
  IndexName: string;
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
  OnDemandThroughputOverride?: OnDemandThroughputOverride;
}
export interface ReplicaGlobalSecondaryIndexAutoScalingDescription {
  IndexName?: string;
  IndexStatus?: IndexStatus;
  ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
  ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
}
export type ReplicaGlobalSecondaryIndexAutoScalingDescriptionList =
  Array<ReplicaGlobalSecondaryIndexAutoScalingDescription>;
export interface ReplicaGlobalSecondaryIndexAutoScalingUpdate {
  IndexName?: string;
  ProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}
export type ReplicaGlobalSecondaryIndexAutoScalingUpdateList =
  Array<ReplicaGlobalSecondaryIndexAutoScalingUpdate>;
export interface ReplicaGlobalSecondaryIndexDescription {
  IndexName?: string;
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
  OnDemandThroughputOverride?: OnDemandThroughputOverride;
  WarmThroughput?: GlobalSecondaryIndexWarmThroughputDescription;
}
export type ReplicaGlobalSecondaryIndexDescriptionList =
  Array<ReplicaGlobalSecondaryIndexDescription>;
export type ReplicaGlobalSecondaryIndexList =
  Array<ReplicaGlobalSecondaryIndex>;
export interface ReplicaGlobalSecondaryIndexSettingsDescription {
  IndexName: string;
  IndexStatus?: IndexStatus;
  ProvisionedReadCapacityUnits?: number;
  ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
  ProvisionedWriteCapacityUnits?: number;
  ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
}
export type ReplicaGlobalSecondaryIndexSettingsDescriptionList =
  Array<ReplicaGlobalSecondaryIndexSettingsDescription>;
export interface ReplicaGlobalSecondaryIndexSettingsUpdate {
  IndexName: string;
  ProvisionedReadCapacityUnits?: number;
  ProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
}
export type ReplicaGlobalSecondaryIndexSettingsUpdateList =
  Array<ReplicaGlobalSecondaryIndexSettingsUpdate>;
export type ReplicaList = Array<Replica>;
export declare class ReplicaNotFoundException extends Data.TaggedError(
  "ReplicaNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface ReplicaSettingsDescription {
  RegionName: string;
  ReplicaStatus?: ReplicaStatus;
  ReplicaBillingModeSummary?: BillingModeSummary;
  ReplicaProvisionedReadCapacityUnits?: number;
  ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
  ReplicaProvisionedWriteCapacityUnits?: number;
  ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
  ReplicaGlobalSecondaryIndexSettings?: Array<ReplicaGlobalSecondaryIndexSettingsDescription>;
  ReplicaTableClassSummary?: TableClassSummary;
}
export type ReplicaSettingsDescriptionList = Array<ReplicaSettingsDescription>;
export interface ReplicaSettingsUpdate {
  RegionName: string;
  ReplicaProvisionedReadCapacityUnits?: number;
  ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
  ReplicaGlobalSecondaryIndexSettingsUpdate?: Array<ReplicaGlobalSecondaryIndexSettingsUpdate>;
  ReplicaTableClass?: TableClass;
}
export type ReplicaSettingsUpdateList = Array<ReplicaSettingsUpdate>;
export type ReplicaStatus =
  | "CREATING"
  | "CREATION_FAILED"
  | "UPDATING"
  | "DELETING"
  | "ACTIVE"
  | "REGION_DISABLED"
  | "INACCESSIBLE_ENCRYPTION_CREDENTIALS"
  | "ARCHIVING"
  | "ARCHIVED"
  | "REPLICATION_NOT_AUTHORIZED";
export type ReplicaStatusDescription = string;

export type ReplicaStatusPercentProgress = string;

export declare class ReplicatedWriteConflictException extends Data.TaggedError(
  "ReplicatedWriteConflictException",
)<{
  readonly message?: string;
}> {}
export interface ReplicationGroupUpdate {
  Create?: CreateReplicationGroupMemberAction;
  Update?: UpdateReplicationGroupMemberAction;
  Delete?: DeleteReplicationGroupMemberAction;
}
export type ReplicationGroupUpdateList = Array<ReplicationGroupUpdate>;
export interface ReplicaUpdate {
  Create?: CreateReplicaAction;
  Delete?: DeleteReplicaAction;
}
export type ReplicaUpdateList = Array<ReplicaUpdate>;
export declare class RequestLimitExceeded extends Data.TaggedError(
  "RequestLimitExceeded",
)<{
  readonly message?: string;
}> {}
export type ResourceArnString = string;

export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResourcePolicy = string;

export type RestoreInProgress = boolean;

export interface RestoreSummary {
  SourceBackupArn?: string;
  SourceTableArn?: string;
  RestoreDateTime: Date | string;
  RestoreInProgress: boolean;
}
export interface RestoreTableFromBackupInput {
  TargetTableName: string;
  BackupArn: string;
  BillingModeOverride?: BillingMode;
  GlobalSecondaryIndexOverride?: Array<GlobalSecondaryIndex>;
  LocalSecondaryIndexOverride?: Array<LocalSecondaryIndex>;
  ProvisionedThroughputOverride?: ProvisionedThroughput;
  OnDemandThroughputOverride?: OnDemandThroughput;
  SSESpecificationOverride?: SSESpecification;
}
export interface RestoreTableFromBackupOutput {
  TableDescription?: TableDescription;
}
export interface RestoreTableToPointInTimeInput {
  SourceTableArn?: string;
  SourceTableName?: string;
  TargetTableName: string;
  UseLatestRestorableTime?: boolean;
  RestoreDateTime?: Date | string;
  BillingModeOverride?: BillingMode;
  GlobalSecondaryIndexOverride?: Array<GlobalSecondaryIndex>;
  LocalSecondaryIndexOverride?: Array<LocalSecondaryIndex>;
  ProvisionedThroughputOverride?: ProvisionedThroughput;
  OnDemandThroughputOverride?: OnDemandThroughput;
  SSESpecificationOverride?: SSESpecification;
}
export interface RestoreTableToPointInTimeOutput {
  TableDescription?: TableDescription;
}
export type ReturnConsumedCapacity = "INDEXES" | "TOTAL" | "NONE";
export type ReturnItemCollectionMetrics = "SIZE" | "NONE";
export type ReturnValue =
  | "NONE"
  | "ALL_OLD"
  | "UPDATED_OLD"
  | "ALL_NEW"
  | "UPDATED_NEW";
export type ReturnValuesOnConditionCheckFailure = "ALL_OLD" | "NONE";
export type S3Bucket = string;

export type S3BucketOwner = string;

export interface S3BucketSource {
  S3BucketOwner?: string;
  S3Bucket: string;
  S3KeyPrefix?: string;
}
export type S3Prefix = string;

export type S3SseAlgorithm = "AES256" | "KMS";
export type S3SseKmsKeyId = string;

export type ScalarAttributeType = "S" | "N" | "B";
export interface ScanInput {
  TableName: string;
  IndexName?: string;
  AttributesToGet?: Array<string>;
  Limit?: number;
  Select?: Select;
  ScanFilter?: Record<string, Condition>;
  ConditionalOperator?: ConditionalOperator;
  ExclusiveStartKey?: Record<string, AttributeValue>;
  ReturnConsumedCapacity?: ReturnConsumedCapacity;
  TotalSegments?: number;
  Segment?: number;
  ProjectionExpression?: string;
  FilterExpression?: string;
  ExpressionAttributeNames?: Record<string, string>;
  ExpressionAttributeValues?: Record<string, AttributeValue>;
  ConsistentRead?: boolean;
}
export interface ScanOutput {
  Items?: Array<Record<string, AttributeValue>>;
  Count?: number;
  ScannedCount?: number;
  LastEvaluatedKey?: Record<string, AttributeValue>;
  ConsumedCapacity?: ConsumedCapacity;
}
export type ScanSegment = number;

export type ScanTotalSegments = number;

export type SecondaryIndexesCapacityMap = Record<string, Capacity>;
export type Select =
  | "ALL_ATTRIBUTES"
  | "ALL_PROJECTED_ATTRIBUTES"
  | "SPECIFIC_ATTRIBUTES"
  | "COUNT";
export interface SourceTableDetails {
  TableName: string;
  TableId: string;
  TableArn?: string;
  TableSizeBytes?: number;
  KeySchema: Array<KeySchemaElement>;
  TableCreationDateTime: Date | string;
  ProvisionedThroughput: ProvisionedThroughput;
  OnDemandThroughput?: OnDemandThroughput;
  ItemCount?: number;
  BillingMode?: BillingMode;
}
export interface SourceTableFeatureDetails {
  LocalSecondaryIndexes?: Array<LocalSecondaryIndexInfo>;
  GlobalSecondaryIndexes?: Array<GlobalSecondaryIndexInfo>;
  StreamDescription?: StreamSpecification;
  TimeToLiveDescription?: TimeToLiveDescription;
  SSEDescription?: SSEDescription;
}
export interface SSEDescription {
  Status?: SSEStatus;
  SSEType?: SSEType;
  KMSMasterKeyArn?: string;
  InaccessibleEncryptionDateTime?: Date | string;
}
export type SSEEnabled = boolean;

export interface SSESpecification {
  Enabled?: boolean;
  SSEType?: SSEType;
  KMSMasterKeyId?: string;
}
export type SSEStatus =
  | "ENABLING"
  | "ENABLED"
  | "DISABLING"
  | "DISABLED"
  | "UPDATING";
export type SSEType = "AES256" | "KMS";
export type StreamArn = string;

export type StreamEnabled = boolean;

export interface StreamSpecification {
  StreamEnabled: boolean;
  StreamViewType?: StreamViewType;
}
export type StreamViewType =
  | "NEW_IMAGE"
  | "OLD_IMAGE"
  | "NEW_AND_OLD_IMAGES"
  | "KEYS_ONLY";
export type StringAttributeValue = string;

export type StringSetAttributeValue = Array<string>;
export declare class TableAlreadyExistsException extends Data.TaggedError(
  "TableAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type TableArn = string;

export interface TableAutoScalingDescription {
  TableName?: string;
  TableStatus?: TableStatus;
  Replicas?: Array<ReplicaAutoScalingDescription>;
}
export type TableClass = "STANDARD" | "STANDARD_INFREQUENT_ACCESS";
export interface TableClassSummary {
  TableClass?: TableClass;
  LastUpdateDateTime?: Date | string;
}
export type TableCreationDateTime = Date | string;

export interface TableCreationParameters {
  TableName: string;
  AttributeDefinitions: Array<AttributeDefinition>;
  KeySchema: Array<KeySchemaElement>;
  BillingMode?: BillingMode;
  ProvisionedThroughput?: ProvisionedThroughput;
  OnDemandThroughput?: OnDemandThroughput;
  SSESpecification?: SSESpecification;
  GlobalSecondaryIndexes?: Array<GlobalSecondaryIndex>;
}
export interface TableDescription {
  AttributeDefinitions?: Array<AttributeDefinition>;
  TableName?: string;
  KeySchema?: Array<KeySchemaElement>;
  TableStatus?: TableStatus;
  CreationDateTime?: Date | string;
  ProvisionedThroughput?: ProvisionedThroughputDescription;
  TableSizeBytes?: number;
  ItemCount?: number;
  TableArn?: string;
  TableId?: string;
  BillingModeSummary?: BillingModeSummary;
  LocalSecondaryIndexes?: Array<LocalSecondaryIndexDescription>;
  GlobalSecondaryIndexes?: Array<GlobalSecondaryIndexDescription>;
  StreamSpecification?: StreamSpecification;
  LatestStreamLabel?: string;
  LatestStreamArn?: string;
  GlobalTableVersion?: string;
  Replicas?: Array<ReplicaDescription>;
  GlobalTableWitnesses?: Array<GlobalTableWitnessDescription>;
  RestoreSummary?: RestoreSummary;
  SSEDescription?: SSEDescription;
  ArchivalSummary?: ArchivalSummary;
  TableClassSummary?: TableClassSummary;
  DeletionProtectionEnabled?: boolean;
  OnDemandThroughput?: OnDemandThroughput;
  WarmThroughput?: TableWarmThroughputDescription;
  MultiRegionConsistency?: MultiRegionConsistency;
}
export type TableId = string;

export declare class TableInUseException extends Data.TaggedError(
  "TableInUseException",
)<{
  readonly message?: string;
}> {}
export type TableName = string;

export type TableNameList = Array<string>;
export declare class TableNotFoundException extends Data.TaggedError(
  "TableNotFoundException",
)<{
  readonly message?: string;
}> {}
export type TableStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "ACTIVE"
  | "INACCESSIBLE_ENCRYPTION_CREDENTIALS"
  | "ARCHIVING"
  | "ARCHIVED"
  | "REPLICATION_NOT_AUTHORIZED";
export interface TableWarmThroughputDescription {
  ReadUnitsPerSecond?: number;
  WriteUnitsPerSecond?: number;
  Status?: TableStatus;
}
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKeyList = Array<string>;
export type TagKeyString = string;

export type TagList = Array<Tag>;
export interface TagResourceInput {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export type TagValueString = string;

export type TimeRangeLowerBound = Date | string;

export type TimeRangeUpperBound = Date | string;

export type TimeToLiveAttributeName = string;

export interface TimeToLiveDescription {
  TimeToLiveStatus?: TimeToLiveStatus;
  AttributeName?: string;
}
export type TimeToLiveEnabled = boolean;

export interface TimeToLiveSpecification {
  Enabled: boolean;
  AttributeName: string;
}
export type TimeToLiveStatus =
  | "ENABLING"
  | "DISABLING"
  | "ENABLED"
  | "DISABLED";
export interface TransactGetItem {
  Get: Get;
}
export type TransactGetItemList = Array<TransactGetItem>;
export interface TransactGetItemsInput {
  TransactItems: Array<TransactGetItem>;
  ReturnConsumedCapacity?: ReturnConsumedCapacity;
}
export interface TransactGetItemsOutput {
  ConsumedCapacity?: Array<ConsumedCapacity>;
  Responses?: Array<ItemResponse>;
}
export declare class TransactionCanceledException extends Data.TaggedError(
  "TransactionCanceledException",
)<{
  readonly Message?: string;
  readonly CancellationReasons?: Array<CancellationReason>;
}> {}
export declare class TransactionConflictException extends Data.TaggedError(
  "TransactionConflictException",
)<{
  readonly message?: string;
}> {}
export declare class TransactionInProgressException extends Data.TaggedError(
  "TransactionInProgressException",
)<{
  readonly Message?: string;
}> {}
export interface TransactWriteItem {
  ConditionCheck?: ConditionCheck;
  Put?: Put;
  Delete?: Delete;
  Update?: Update;
}
export type TransactWriteItemList = Array<TransactWriteItem>;
export interface TransactWriteItemsInput {
  TransactItems: Array<TransactWriteItem>;
  ReturnConsumedCapacity?: ReturnConsumedCapacity;
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
  ClientRequestToken?: string;
}
export interface TransactWriteItemsOutput {
  ConsumedCapacity?: Array<ConsumedCapacity>;
  ItemCollectionMetrics?: Record<string, Array<ItemCollectionMetrics>>;
}
export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface Update {
  Key: Record<string, AttributeValue>;
  UpdateExpression: string;
  TableName: string;
  ConditionExpression?: string;
  ExpressionAttributeNames?: Record<string, string>;
  ExpressionAttributeValues?: Record<string, AttributeValue>;
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
}
export interface UpdateContinuousBackupsInput {
  TableName: string;
  PointInTimeRecoverySpecification: PointInTimeRecoverySpecification;
}
export interface UpdateContinuousBackupsOutput {
  ContinuousBackupsDescription?: ContinuousBackupsDescription;
}
export interface UpdateContributorInsightsInput {
  TableName: string;
  IndexName?: string;
  ContributorInsightsAction: ContributorInsightsAction;
}
export interface UpdateContributorInsightsOutput {
  TableName?: string;
  IndexName?: string;
  ContributorInsightsStatus?: ContributorInsightsStatus;
}
export type UpdateExpression = string;

export interface UpdateGlobalSecondaryIndexAction {
  IndexName: string;
  ProvisionedThroughput?: ProvisionedThroughput;
  OnDemandThroughput?: OnDemandThroughput;
  WarmThroughput?: WarmThroughput;
}
export interface UpdateGlobalTableInput {
  GlobalTableName: string;
  ReplicaUpdates: Array<ReplicaUpdate>;
}
export interface UpdateGlobalTableOutput {
  GlobalTableDescription?: GlobalTableDescription;
}
export interface UpdateGlobalTableSettingsInput {
  GlobalTableName: string;
  GlobalTableBillingMode?: BillingMode;
  GlobalTableProvisionedWriteCapacityUnits?: number;
  GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
  GlobalTableGlobalSecondaryIndexSettingsUpdate?: Array<GlobalTableGlobalSecondaryIndexSettingsUpdate>;
  ReplicaSettingsUpdate?: Array<ReplicaSettingsUpdate>;
}
export interface UpdateGlobalTableSettingsOutput {
  GlobalTableName?: string;
  ReplicaSettings?: Array<ReplicaSettingsDescription>;
}
export interface UpdateItemInput {
  TableName: string;
  Key: Record<string, AttributeValue>;
  AttributeUpdates?: Record<string, AttributeValueUpdate>;
  Expected?: Record<string, ExpectedAttributeValue>;
  ConditionalOperator?: ConditionalOperator;
  ReturnValues?: ReturnValue;
  ReturnConsumedCapacity?: ReturnConsumedCapacity;
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
  UpdateExpression?: string;
  ConditionExpression?: string;
  ExpressionAttributeNames?: Record<string, string>;
  ExpressionAttributeValues?: Record<string, AttributeValue>;
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
}
export interface UpdateItemOutput {
  Attributes?: Record<string, AttributeValue>;
  ConsumedCapacity?: ConsumedCapacity;
  ItemCollectionMetrics?: ItemCollectionMetrics;
}
export interface UpdateKinesisStreamingConfiguration {
  ApproximateCreationDateTimePrecision?: ApproximateCreationDateTimePrecision;
}
export interface UpdateKinesisStreamingDestinationInput {
  TableName: string;
  StreamArn: string;
  UpdateKinesisStreamingConfiguration?: UpdateKinesisStreamingConfiguration;
}
export interface UpdateKinesisStreamingDestinationOutput {
  TableName?: string;
  StreamArn?: string;
  DestinationStatus?: DestinationStatus;
  UpdateKinesisStreamingConfiguration?: UpdateKinesisStreamingConfiguration;
}
export interface UpdateReplicationGroupMemberAction {
  RegionName: string;
  KMSMasterKeyId?: string;
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
  OnDemandThroughputOverride?: OnDemandThroughputOverride;
  GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndex>;
  TableClassOverride?: TableClass;
}
export interface UpdateTableInput {
  AttributeDefinitions?: Array<AttributeDefinition>;
  TableName: string;
  BillingMode?: BillingMode;
  ProvisionedThroughput?: ProvisionedThroughput;
  GlobalSecondaryIndexUpdates?: Array<GlobalSecondaryIndexUpdate>;
  StreamSpecification?: StreamSpecification;
  SSESpecification?: SSESpecification;
  ReplicaUpdates?: Array<ReplicationGroupUpdate>;
  TableClass?: TableClass;
  DeletionProtectionEnabled?: boolean;
  MultiRegionConsistency?: MultiRegionConsistency;
  GlobalTableWitnessUpdates?: Array<GlobalTableWitnessGroupUpdate>;
  OnDemandThroughput?: OnDemandThroughput;
  WarmThroughput?: WarmThroughput;
}
export interface UpdateTableOutput {
  TableDescription?: TableDescription;
}
export interface UpdateTableReplicaAutoScalingInput {
  GlobalSecondaryIndexUpdates?: Array<GlobalSecondaryIndexAutoScalingUpdate>;
  TableName: string;
  ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
  ReplicaUpdates?: Array<ReplicaAutoScalingUpdate>;
}
export interface UpdateTableReplicaAutoScalingOutput {
  TableAutoScalingDescription?: TableAutoScalingDescription;
}
export interface UpdateTimeToLiveInput {
  TableName: string;
  TimeToLiveSpecification: TimeToLiveSpecification;
}
export interface UpdateTimeToLiveOutput {
  TimeToLiveSpecification?: TimeToLiveSpecification;
}
export interface WarmThroughput {
  ReadUnitsPerSecond?: number;
  WriteUnitsPerSecond?: number;
}
export type WitnessStatus = "CREATING" | "DELETING" | "ACTIVE";
export interface WriteRequest {
  PutRequest?: PutRequest;
  DeleteRequest?: DeleteRequest;
}
export type WriteRequests = Array<WriteRequest>;
export declare namespace BatchExecuteStatement {
  export type Input = BatchExecuteStatementInput;
  export type Output = BatchExecuteStatementOutput;
  export type Error =
    | InternalServerError
    | RequestLimitExceeded
    | CommonAwsError;
}

export declare namespace BatchGetItem {
  export type Input = BatchGetItemInput;
  export type Output = BatchGetItemOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace BatchWriteItem {
  export type Input = BatchWriteItemInput;
  export type Output = BatchWriteItemOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | ItemCollectionSizeLimitExceededException
    | ProvisionedThroughputExceededException
    | ReplicatedWriteConflictException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateBackup {
  export type Input = CreateBackupInput;
  export type Output = CreateBackupOutput;
  export type Error =
    | BackupInUseException
    | ContinuousBackupsUnavailableException
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | TableInUseException
    | TableNotFoundException
    | CommonAwsError;
}

export declare namespace CreateGlobalTable {
  export type Input = CreateGlobalTableInput;
  export type Output = CreateGlobalTableOutput;
  export type Error =
    | GlobalTableAlreadyExistsException
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | TableNotFoundException
    | CommonAwsError;
}

export declare namespace CreateTable {
  export type Input = CreateTableInput;
  export type Output = CreateTableOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteBackup {
  export type Input = DeleteBackupInput;
  export type Output = DeleteBackupOutput;
  export type Error =
    | BackupInUseException
    | BackupNotFoundException
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteItem {
  export type Input = DeleteItemInput;
  export type Output = DeleteItemOutput;
  export type Error =
    | ConditionalCheckFailedException
    | InternalServerError
    | InvalidEndpointException
    | ItemCollectionSizeLimitExceededException
    | ProvisionedThroughputExceededException
    | ReplicatedWriteConflictException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | TransactionConflictException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyInput;
  export type Output = DeleteResourcePolicyOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | PolicyNotFoundException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteTable {
  export type Input = DeleteTableInput;
  export type Output = DeleteTableOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeBackup {
  export type Input = DescribeBackupInput;
  export type Output = DescribeBackupOutput;
  export type Error =
    | BackupNotFoundException
    | InternalServerError
    | InvalidEndpointException
    | CommonAwsError;
}

export declare namespace DescribeContinuousBackups {
  export type Input = DescribeContinuousBackupsInput;
  export type Output = DescribeContinuousBackupsOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | TableNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeContributorInsights {
  export type Input = DescribeContributorInsightsInput;
  export type Output = DescribeContributorInsightsOutput;
  export type Error =
    | InternalServerError
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeEndpoints {
  export type Input = DescribeEndpointsRequest;
  export type Output = DescribeEndpointsResponse;
  export type Error = CommonAwsError;
}

export declare namespace DescribeExport {
  export type Input = DescribeExportInput;
  export type Output = DescribeExportOutput;
  export type Error =
    | ExportNotFoundException
    | InternalServerError
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DescribeGlobalTable {
  export type Input = DescribeGlobalTableInput;
  export type Output = DescribeGlobalTableOutput;
  export type Error =
    | GlobalTableNotFoundException
    | InternalServerError
    | InvalidEndpointException
    | CommonAwsError;
}

export declare namespace DescribeGlobalTableSettings {
  export type Input = DescribeGlobalTableSettingsInput;
  export type Output = DescribeGlobalTableSettingsOutput;
  export type Error =
    | GlobalTableNotFoundException
    | InternalServerError
    | InvalidEndpointException
    | CommonAwsError;
}

export declare namespace DescribeImport {
  export type Input = DescribeImportInput;
  export type Output = DescribeImportOutput;
  export type Error = ImportNotFoundException | CommonAwsError;
}

export declare namespace DescribeKinesisStreamingDestination {
  export type Input = DescribeKinesisStreamingDestinationInput;
  export type Output = DescribeKinesisStreamingDestinationOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeLimits {
  export type Input = DescribeLimitsInput;
  export type Output = DescribeLimitsOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | CommonAwsError;
}

export declare namespace DescribeTable {
  export type Input = DescribeTableInput;
  export type Output = DescribeTableOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeTableReplicaAutoScaling {
  export type Input = DescribeTableReplicaAutoScalingInput;
  export type Output = DescribeTableReplicaAutoScalingOutput;
  export type Error =
    | InternalServerError
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeTimeToLive {
  export type Input = DescribeTimeToLiveInput;
  export type Output = DescribeTimeToLiveOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisableKinesisStreamingDestination {
  export type Input = KinesisStreamingDestinationInput;
  export type Output = KinesisStreamingDestinationOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace EnableKinesisStreamingDestination {
  export type Input = KinesisStreamingDestinationInput;
  export type Output = KinesisStreamingDestinationOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ExecuteStatement {
  export type Input = ExecuteStatementInput;
  export type Output = ExecuteStatementOutput;
  export type Error =
    | ConditionalCheckFailedException
    | DuplicateItemException
    | InternalServerError
    | ItemCollectionSizeLimitExceededException
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | TransactionConflictException
    | CommonAwsError;
}

export declare namespace ExecuteTransaction {
  export type Input = ExecuteTransactionInput;
  export type Output = ExecuteTransactionOutput;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerError
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | TransactionCanceledException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace ExportTableToPointInTime {
  export type Input = ExportTableToPointInTimeInput;
  export type Output = ExportTableToPointInTimeOutput;
  export type Error =
    | ExportConflictException
    | InternalServerError
    | InvalidExportTimeException
    | LimitExceededException
    | PointInTimeRecoveryUnavailableException
    | TableNotFoundException
    | CommonAwsError;
}

export declare namespace GetItem {
  export type Input = GetItemInput;
  export type Output = GetItemOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyInput;
  export type Output = GetResourcePolicyOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | PolicyNotFoundException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ImportTable {
  export type Input = ImportTableInput;
  export type Output = ImportTableOutput;
  export type Error =
    | ImportConflictException
    | LimitExceededException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace ListBackups {
  export type Input = ListBackupsInput;
  export type Output = ListBackupsOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | CommonAwsError;
}

export declare namespace ListContributorInsights {
  export type Input = ListContributorInsightsInput;
  export type Output = ListContributorInsightsOutput;
  export type Error =
    | InternalServerError
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListExports {
  export type Input = ListExportsInput;
  export type Output = ListExportsOutput;
  export type Error =
    | InternalServerError
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListGlobalTables {
  export type Input = ListGlobalTablesInput;
  export type Output = ListGlobalTablesOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | CommonAwsError;
}

export declare namespace ListImports {
  export type Input = ListImportsInput;
  export type Output = ListImportsOutput;
  export type Error = LimitExceededException | CommonAwsError;
}

export declare namespace ListTables {
  export type Input = ListTablesInput;
  export type Output = ListTablesOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | CommonAwsError;
}

export declare namespace ListTagsOfResource {
  export type Input = ListTagsOfResourceInput;
  export type Output = ListTagsOfResourceOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutItem {
  export type Input = PutItemInput;
  export type Output = PutItemOutput;
  export type Error =
    | ConditionalCheckFailedException
    | InternalServerError
    | InvalidEndpointException
    | ItemCollectionSizeLimitExceededException
    | ProvisionedThroughputExceededException
    | ReplicatedWriteConflictException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | TransactionConflictException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyInput;
  export type Output = PutResourcePolicyOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | PolicyNotFoundException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace Query {
  export type Input = QueryInput;
  export type Output = QueryOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RestoreTableFromBackup {
  export type Input = RestoreTableFromBackupInput;
  export type Output = RestoreTableFromBackupOutput;
  export type Error =
    | BackupInUseException
    | BackupNotFoundException
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | TableAlreadyExistsException
    | TableInUseException
    | CommonAwsError;
}

export declare namespace RestoreTableToPointInTime {
  export type Input = RestoreTableToPointInTimeInput;
  export type Output = RestoreTableToPointInTimeOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | InvalidRestoreTimeException
    | LimitExceededException
    | PointInTimeRecoveryUnavailableException
    | TableAlreadyExistsException
    | TableInUseException
    | TableNotFoundException
    | CommonAwsError;
}

export declare namespace Scan {
  export type Input = ScanInput;
  export type Output = ScanOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TransactGetItems {
  export type Input = TransactGetItemsInput;
  export type Output = TransactGetItemsOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | TransactionCanceledException
    | CommonAwsError;
}

export declare namespace TransactWriteItems {
  export type Input = TransactWriteItemsInput;
  export type Output = TransactWriteItemsOutput;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidEndpointException
    | ProvisionedThroughputExceededException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | TransactionCanceledException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateContinuousBackups {
  export type Input = UpdateContinuousBackupsInput;
  export type Output = UpdateContinuousBackupsOutput;
  export type Error =
    | ContinuousBackupsUnavailableException
    | InternalServerError
    | InvalidEndpointException
    | TableNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateContributorInsights {
  export type Input = UpdateContributorInsightsInput;
  export type Output = UpdateContributorInsightsOutput;
  export type Error =
    | InternalServerError
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateGlobalTable {
  export type Input = UpdateGlobalTableInput;
  export type Output = UpdateGlobalTableOutput;
  export type Error =
    | GlobalTableNotFoundException
    | InternalServerError
    | InvalidEndpointException
    | ReplicaAlreadyExistsException
    | ReplicaNotFoundException
    | TableNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateGlobalTableSettings {
  export type Input = UpdateGlobalTableSettingsInput;
  export type Output = UpdateGlobalTableSettingsOutput;
  export type Error =
    | GlobalTableNotFoundException
    | IndexNotFoundException
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ReplicaNotFoundException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace UpdateItem {
  export type Input = UpdateItemInput;
  export type Output = UpdateItemOutput;
  export type Error =
    | ConditionalCheckFailedException
    | InternalServerError
    | InvalidEndpointException
    | ItemCollectionSizeLimitExceededException
    | ProvisionedThroughputExceededException
    | ReplicatedWriteConflictException
    | RequestLimitExceeded
    | ResourceNotFoundException
    | TransactionConflictException
    | CommonAwsError;
}

export declare namespace UpdateKinesisStreamingDestination {
  export type Input = UpdateKinesisStreamingDestinationInput;
  export type Output = UpdateKinesisStreamingDestinationOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateTable {
  export type Input = UpdateTableInput;
  export type Output = UpdateTableOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateTableReplicaAutoScaling {
  export type Input = UpdateTableReplicaAutoScalingInput;
  export type Output = UpdateTableReplicaAutoScalingOutput;
  export type Error =
    | InternalServerError
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateTimeToLive {
  export type Input = UpdateTimeToLiveInput;
  export type Output = UpdateTimeToLiveOutput;
  export type Error =
    | InternalServerError
    | InvalidEndpointException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}
