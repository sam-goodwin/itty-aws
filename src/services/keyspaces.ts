import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface KeyspacesService {
  createKeyspace(
    input: CreateKeyspaceRequest,
  ): Effect.Effect<
    CreateKeyspaceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createTable(
    input: CreateTableRequest,
  ): Effect.Effect<
    CreateTableResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createType(
    input: CreateTypeRequest,
  ): Effect.Effect<
    CreateTypeResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteKeyspace(
    input: DeleteKeyspaceRequest,
  ): Effect.Effect<
    DeleteKeyspaceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteTable(
    input: DeleteTableRequest,
  ): Effect.Effect<
    DeleteTableResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteType(
    input: DeleteTypeRequest,
  ): Effect.Effect<
    DeleteTypeResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  getKeyspace(
    input: GetKeyspaceRequest,
  ): Effect.Effect<
    GetKeyspaceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  getTable(
    input: GetTableRequest,
  ): Effect.Effect<
    GetTableResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  getTableAutoScalingSettings(
    input: GetTableAutoScalingSettingsRequest,
  ): Effect.Effect<
    GetTableAutoScalingSettingsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  getType(
    input: GetTypeRequest,
  ): Effect.Effect<
    GetTypeResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  listKeyspaces(
    input: ListKeyspacesRequest,
  ): Effect.Effect<
    ListKeyspacesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  listTables(
    input: ListTablesRequest,
  ): Effect.Effect<
    ListTablesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  listTypes(
    input: ListTypesRequest,
  ): Effect.Effect<
    ListTypesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  restoreTable(
    input: RestoreTableRequest,
  ): Effect.Effect<
    RestoreTableResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  updateKeyspace(
    input: UpdateKeyspaceRequest,
  ): Effect.Effect<
    UpdateKeyspaceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  updateTable(
    input: UpdateTableRequest,
  ): Effect.Effect<
    UpdateTableResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
}

export type Keyspaces = KeyspacesService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type ARN = string;

export interface AutoScalingPolicy {
  targetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
}
export interface AutoScalingSettings {
  autoScalingDisabled?: boolean;
  minimumUnits?: number;
  maximumUnits?: number;
  scalingPolicy?: AutoScalingPolicy;
}
export interface AutoScalingSpecification {
  writeCapacityAutoScaling?: AutoScalingSettings;
  readCapacityAutoScaling?: AutoScalingSettings;
}
export type BooleanObject = boolean;

export interface CapacitySpecification {
  throughputMode: string;
  readCapacityUnits?: number;
  writeCapacityUnits?: number;
}
export interface CapacitySpecificationSummary {
  throughputMode: string;
  readCapacityUnits?: number;
  writeCapacityUnits?: number;
  lastUpdateToPayPerRequestTimestamp?: Date | string;
}
export type CapacityUnits = number;

export type CdcPropagateTags = string;

export interface CdcSpecification {
  status: string;
  viewType?: string;
  tags?: Array<Tag>;
  propagateTags?: string;
}
export interface CdcSpecificationSummary {
  status: string;
  viewType?: string;
}
export type CdcStatus = string;

export interface ClientSideTimestamps {
  status: string;
}
export type ClientSideTimestampsStatus = string;

export interface ClusteringKey {
  name: string;
  orderBy: string;
}
export type ClusteringKeyList = Array<ClusteringKey>;
export interface ColumnDefinition {
  name: string;
  type: string;
}
export type ColumnDefinitionList = Array<ColumnDefinition>;
export interface Comment {
  message: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateKeyspaceRequest {
  keyspaceName: string;
  tags?: Array<Tag>;
  replicationSpecification?: ReplicationSpecification;
}
export interface CreateKeyspaceResponse {
  resourceArn: string;
}
export interface CreateTableRequest {
  keyspaceName: string;
  tableName: string;
  schemaDefinition: SchemaDefinition;
  comment?: Comment;
  capacitySpecification?: CapacitySpecification;
  encryptionSpecification?: EncryptionSpecification;
  pointInTimeRecovery?: PointInTimeRecovery;
  ttl?: TimeToLive;
  defaultTimeToLive?: number;
  tags?: Array<Tag>;
  clientSideTimestamps?: ClientSideTimestamps;
  autoScalingSpecification?: AutoScalingSpecification;
  replicaSpecifications?: Array<ReplicaSpecification>;
  cdcSpecification?: CdcSpecification;
}
export interface CreateTableResponse {
  resourceArn: string;
}
export interface CreateTypeRequest {
  keyspaceName: string;
  typeName: string;
  fieldDefinitions: Array<FieldDefinition>;
}
export interface CreateTypeResponse {
  keyspaceArn: string;
  typeName: string;
}
export type DefaultTimeToLive = number;

export interface DeleteKeyspaceRequest {
  keyspaceName: string;
}
export interface DeleteKeyspaceResponse {}
export interface DeleteTableRequest {
  keyspaceName: string;
  tableName: string;
}
export interface DeleteTableResponse {}
export interface DeleteTypeRequest {
  keyspaceName: string;
  typeName: string;
}
export interface DeleteTypeResponse {
  keyspaceArn: string;
  typeName: string;
}
export type Depth = number;

export type DoubleObject = number;

export interface EncryptionSpecification {
  type: string;
  kmsKeyIdentifier?: string;
}
export type EncryptionType = string;

export interface FieldDefinition {
  name: string;
  type: string;
}
export type FieldList = Array<FieldDefinition>;
export type GenericString = string;

export interface GetKeyspaceRequest {
  keyspaceName: string;
}
export interface GetKeyspaceResponse {
  keyspaceName: string;
  resourceArn: string;
  replicationStrategy: string;
  replicationRegions?: Array<string>;
  replicationGroupStatuses?: Array<ReplicationGroupStatus>;
}
export interface GetTableAutoScalingSettingsRequest {
  keyspaceName: string;
  tableName: string;
}
export interface GetTableAutoScalingSettingsResponse {
  keyspaceName: string;
  tableName: string;
  resourceArn: string;
  autoScalingSpecification?: AutoScalingSpecification;
  replicaSpecifications?: Array<ReplicaAutoScalingSpecification>;
}
export interface GetTableRequest {
  keyspaceName: string;
  tableName: string;
}
export interface GetTableResponse {
  keyspaceName: string;
  tableName: string;
  resourceArn: string;
  creationTimestamp?: Date | string;
  status?: string;
  schemaDefinition?: SchemaDefinition;
  capacitySpecification?: CapacitySpecificationSummary;
  encryptionSpecification?: EncryptionSpecification;
  pointInTimeRecovery?: PointInTimeRecoverySummary;
  ttl?: TimeToLive;
  defaultTimeToLive?: number;
  comment?: Comment;
  clientSideTimestamps?: ClientSideTimestamps;
  replicaSpecifications?: Array<ReplicaSpecificationSummary>;
  latestStreamArn?: string;
  cdcSpecification?: CdcSpecificationSummary;
}
export interface GetTypeRequest {
  keyspaceName: string;
  typeName: string;
}
export interface GetTypeResponse {
  keyspaceName: string;
  typeName: string;
  fieldDefinitions?: Array<FieldDefinition>;
  lastModifiedTimestamp?: Date | string;
  status?: string;
  directReferringTables?: Array<string>;
  directParentTypes?: Array<string>;
  maxNestingDepth?: number;
  keyspaceArn: string;
}
export type IntegerObject = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type KeyspaceName = string;

export type KeyspaceStatus = string;

export interface KeyspaceSummary {
  keyspaceName: string;
  resourceArn: string;
  replicationStrategy: string;
  replicationRegions?: Array<string>;
}
export type KeyspaceSummaryList = Array<KeyspaceSummary>;
export type kmsKeyARN = string;

export interface ListKeyspacesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListKeyspacesResponse {
  nextToken?: string;
  keyspaces: Array<KeyspaceSummary>;
}
export interface ListTablesRequest {
  nextToken?: string;
  maxResults?: number;
  keyspaceName: string;
}
export interface ListTablesResponse {
  nextToken?: string;
  tables?: Array<TableSummary>;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTagsForResourceResponse {
  nextToken?: string;
  tags?: Array<Tag>;
}
export interface ListTypesRequest {
  nextToken?: string;
  maxResults?: number;
  keyspaceName: string;
}
export interface ListTypesResponse {
  nextToken?: string;
  types: Array<string>;
}
export type MaxResults = number;

export type NextToken = string;

export interface PartitionKey {
  name: string;
}
export type PartitionKeyList = Array<PartitionKey>;
export interface PointInTimeRecovery {
  status: string;
}
export type PointInTimeRecoveryStatus = string;

export interface PointInTimeRecoverySummary {
  status: string;
  earliestRestorableTimestamp?: Date | string;
}
export type region = string;

export type RegionList = Array<string>;
export interface ReplicaAutoScalingSpecification {
  region?: string;
  autoScalingSpecification?: AutoScalingSpecification;
}
export type ReplicaAutoScalingSpecificationList =
  Array<ReplicaAutoScalingSpecification>;
export interface ReplicaSpecification {
  region: string;
  readCapacityUnits?: number;
  readCapacityAutoScaling?: AutoScalingSettings;
}
export type ReplicaSpecificationList = Array<ReplicaSpecification>;
export interface ReplicaSpecificationSummary {
  region?: string;
  status?: string;
  capacitySpecification?: CapacitySpecificationSummary;
}
export type ReplicaSpecificationSummaryList =
  Array<ReplicaSpecificationSummary>;
export interface ReplicationGroupStatus {
  region: string;
  keyspaceStatus: string;
  tablesReplicationProgress?: string;
}
export type ReplicationGroupStatusList = Array<ReplicationGroupStatus>;
export interface ReplicationSpecification {
  replicationStrategy: string;
  regionList?: Array<string>;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly resourceArn?: string;
}> {}
export interface RestoreTableRequest {
  sourceKeyspaceName: string;
  sourceTableName: string;
  targetKeyspaceName: string;
  targetTableName: string;
  restoreTimestamp?: Date | string;
  capacitySpecificationOverride?: CapacitySpecification;
  encryptionSpecificationOverride?: EncryptionSpecification;
  pointInTimeRecoveryOverride?: PointInTimeRecovery;
  tagsOverride?: Array<Tag>;
  autoScalingSpecification?: AutoScalingSpecification;
  replicaSpecifications?: Array<ReplicaSpecification>;
}
export interface RestoreTableResponse {
  restoredTableARN: string;
}
export type rs = string;

export interface SchemaDefinition {
  allColumns: Array<ColumnDefinition>;
  partitionKeys: Array<PartitionKey>;
  clusteringKeys?: Array<ClusteringKey>;
  staticColumns?: Array<StaticColumn>;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export type SortOrder = string;

export interface StaticColumn {
  name: string;
}
export type StaticColumnList = Array<StaticColumn>;
export type StreamArn = string;

export type TableName = string;

export type TableNameList = Array<string>;
export type TablesReplicationProgress = string;

export type TableStatus = string;

export interface TableSummary {
  keyspaceName: string;
  tableName: string;
  resourceArn: string;
}
export type TableSummaryList = Array<TableSummary>;
export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface TargetTrackingScalingPolicyConfiguration {
  disableScaleIn?: boolean;
  scaleInCooldown?: number;
  scaleOutCooldown?: number;
  targetValue: number;
}
export type ThroughputMode = string;

export type Timestamp = Date | string;

export interface TimeToLive {
  status: string;
}
export type TimeToLiveStatus = string;

export type TypeName = string;

export type TypeNameList = Array<string>;
export type TypeStatus = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface UntagResourceResponse {}
export interface UpdateKeyspaceRequest {
  keyspaceName: string;
  replicationSpecification: ReplicationSpecification;
  clientSideTimestamps?: ClientSideTimestamps;
}
export interface UpdateKeyspaceResponse {
  resourceArn: string;
}
export interface UpdateTableRequest {
  keyspaceName: string;
  tableName: string;
  addColumns?: Array<ColumnDefinition>;
  capacitySpecification?: CapacitySpecification;
  encryptionSpecification?: EncryptionSpecification;
  pointInTimeRecovery?: PointInTimeRecovery;
  ttl?: TimeToLive;
  defaultTimeToLive?: number;
  clientSideTimestamps?: ClientSideTimestamps;
  autoScalingSpecification?: AutoScalingSpecification;
  replicaSpecifications?: Array<ReplicaSpecification>;
  cdcSpecification?: CdcSpecification;
}
export interface UpdateTableResponse {
  resourceArn: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type ViewType = string;

export declare namespace CreateKeyspace {
  export type Input = CreateKeyspaceRequest;
  export type Output = CreateKeyspaceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTable {
  export type Input = CreateTableRequest;
  export type Output = CreateTableResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateType {
  export type Input = CreateTypeRequest;
  export type Output = CreateTypeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteKeyspace {
  export type Input = DeleteKeyspaceRequest;
  export type Output = DeleteKeyspaceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTable {
  export type Input = DeleteTableRequest;
  export type Output = DeleteTableResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteType {
  export type Input = DeleteTypeRequest;
  export type Output = DeleteTypeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKeyspace {
  export type Input = GetKeyspaceRequest;
  export type Output = GetKeyspaceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTable {
  export type Input = GetTableRequest;
  export type Output = GetTableResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTableAutoScalingSettings {
  export type Input = GetTableAutoScalingSettingsRequest;
  export type Output = GetTableAutoScalingSettingsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetType {
  export type Input = GetTypeRequest;
  export type Output = GetTypeResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKeyspaces {
  export type Input = ListKeyspacesRequest;
  export type Output = ListKeyspacesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTables {
  export type Input = ListTablesRequest;
  export type Output = ListTablesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTypes {
  export type Input = ListTypesRequest;
  export type Output = ListTypesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RestoreTable {
  export type Input = RestoreTableRequest;
  export type Output = RestoreTableResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateKeyspace {
  export type Input = UpdateKeyspaceRequest;
  export type Output = UpdateKeyspaceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTable {
  export type Input = UpdateTableRequest;
  export type Output = UpdateTableResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}
