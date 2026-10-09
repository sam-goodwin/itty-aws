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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Keyspaces",
  serviceShapeName: "KeyspacesService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "cassandra" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-02-10");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
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
              `https://cassandra-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://cassandra.${Region}.amazonaws.com`);
            }
            return e(`https://cassandra-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://cassandra.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://cassandra.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AccessDeniedException", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ConflictException", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InternalServerException", httpResponseCode: 500 }),
      /*@__PURE__*/ T.HttpError(500),
    ),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceArn: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceNotFoundException", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ServiceQuotaExceededException",
        httpResponseCode: 402,
      }),
      /*@__PURE__*/ T.HttpError(402),
    ),
  ).pipe(C.withQuotaError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.AwsQueryError({ code: "ValidationException", httpResponseCode: 400 }),
  ) {}
export type KeyspaceName = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 1);
export type Rs = string;
export type Region = string;
export type RegionList = string[];
const RegionList = /*@__PURE__*/ __L.at(__c0, 2);
export interface ReplicationSpecification {
  replicationStrategy: string;
  regionList?: string[];
}
const ReplicationSpecification = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<ReplicationSpecification>;
export interface CreateKeyspaceRequest {
  keyspaceName: string;
  tags?: Tag[];
  replicationSpecification?: ReplicationSpecification;
}
const CreateKeyspaceRequest = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<CreateKeyspaceRequest>;
export type ARN = string;
export interface CreateKeyspaceResponse {
  resourceArn: string;
}
const CreateKeyspaceResponse = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<CreateKeyspaceResponse>;
export type TableName = string;
export interface ColumnDefinition {
  name: string;
  type: string;
}
const ColumnDefinition = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<ColumnDefinition>;
export type ColumnDefinitionList = ColumnDefinition[];
const ColumnDefinitionList = /*@__PURE__*/ __L.at(__c0, 7);
export interface PartitionKey {
  name: string;
}
const PartitionKey = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<PartitionKey>;
export type PartitionKeyList = PartitionKey[];
const PartitionKeyList = /*@__PURE__*/ __L.at(__c1, 1);
export type SortOrder = string;
export interface ClusteringKey {
  name: string;
  orderBy: string;
}
const ClusteringKey = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<ClusteringKey>;
export type ClusteringKeyList = ClusteringKey[];
const ClusteringKeyList = /*@__PURE__*/ __L.at(__c1, 3);
export interface StaticColumn {
  name: string;
}
export type StaticColumnList = StaticColumn[];
const StaticColumnList = PartitionKeyList as any as S.Schema<StaticColumnList>;
export interface SchemaDefinition {
  allColumns: ColumnDefinition[];
  partitionKeys: PartitionKey[];
  clusteringKeys?: ClusteringKey[];
  staticColumns?: StaticColumn[];
}
const SchemaDefinition = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<SchemaDefinition>;
export interface Comment {
  message: string;
}
const Comment = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<Comment>;
export type ThroughputMode = string;
export type CapacityUnits = number;
export interface CapacitySpecification {
  throughputMode: string;
  readCapacityUnits?: number;
  writeCapacityUnits?: number;
}
const CapacitySpecification = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CapacitySpecification>;
export type EncryptionType = string;
export type KmsKeyARN = string;
export interface EncryptionSpecification {
  type: string;
  kmsKeyIdentifier?: string;
}
const EncryptionSpecification = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<EncryptionSpecification>;
export type PointInTimeRecoveryStatus = string;
export interface PointInTimeRecovery {
  status: string;
}
const PointInTimeRecovery = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<PointInTimeRecovery>;
export type TimeToLiveStatus = string;
export interface TimeToLive {
  status: string;
}
const TimeToLive = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<TimeToLive>;
export type DefaultTimeToLive = number;
export type ClientSideTimestampsStatus = string;
export interface ClientSideTimestamps {
  status: string;
}
const ClientSideTimestamps = PointInTimeRecovery as any as S.Schema<ClientSideTimestamps>;
export type IntegerObject = number;
export type DoubleObject = number;
export interface TargetTrackingScalingPolicyConfiguration {
  disableScaleIn?: boolean;
  scaleInCooldown?: number;
  scaleOutCooldown?: number;
  targetValue: number;
}
const TargetTrackingScalingPolicyConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<TargetTrackingScalingPolicyConfiguration>;
export interface AutoScalingPolicy {
  targetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
}
const AutoScalingPolicy = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<AutoScalingPolicy>;
export interface AutoScalingSettings {
  autoScalingDisabled?: boolean;
  minimumUnits?: number;
  maximumUnits?: number;
  scalingPolicy?: AutoScalingPolicy;
}
const AutoScalingSettings = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<AutoScalingSettings>;
export interface AutoScalingSpecification {
  writeCapacityAutoScaling?: AutoScalingSettings;
  readCapacityAutoScaling?: AutoScalingSettings;
}
const AutoScalingSpecification = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<AutoScalingSpecification>;
export interface ReplicaSpecification {
  region: string;
  readCapacityUnits?: number;
  readCapacityAutoScaling?: AutoScalingSettings;
}
const ReplicaSpecification = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<ReplicaSpecification>;
export type ReplicaSpecificationList = ReplicaSpecification[];
const ReplicaSpecificationList = /*@__PURE__*/ __L.at(__c2, 7);
export type CdcStatus = string;
export type ViewType = string;
export type CdcPropagateTags = string;
export interface CdcSpecification {
  status: string;
  viewType?: string;
  tags?: Tag[];
  propagateTags?: string;
}
const CdcSpecification = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<CdcSpecification>;
export interface WarmThroughputSpecification {
  readUnitsPerSecond?: number;
  writeUnitsPerSecond?: number;
}
const WarmThroughputSpecification = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<WarmThroughputSpecification>;
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
  tags?: Tag[];
  clientSideTimestamps?: ClientSideTimestamps;
  autoScalingSpecification?: AutoScalingSpecification;
  replicaSpecifications?: ReplicaSpecification[];
  cdcSpecification?: CdcSpecification;
  warmThroughputSpecification?: WarmThroughputSpecification;
}
const CreateTableRequest = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<CreateTableRequest>;
export interface CreateTableResponse {
  resourceArn: string;
}
const CreateTableResponse = CreateKeyspaceResponse as any as S.Schema<CreateTableResponse>;
export type TypeName = string;
export interface FieldDefinition {
  name: string;
  type: string;
}
export type FieldList = FieldDefinition[];
const FieldList = ColumnDefinitionList as any as S.Schema<FieldList>;
export interface CreateTypeRequest {
  keyspaceName: string;
  typeName: string;
  fieldDefinitions: FieldDefinition[];
}
const CreateTypeRequest = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<CreateTypeRequest>;
export interface CreateTypeResponse {
  keyspaceArn: string;
  typeName: string;
}
const CreateTypeResponse = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<CreateTypeResponse>;
export interface DeleteKeyspaceRequest {
  keyspaceName: string;
}
const DeleteKeyspaceRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<DeleteKeyspaceRequest>;
export interface DeleteKeyspaceResponse {}
const DeleteKeyspaceResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<DeleteKeyspaceResponse>;
export interface DeleteTableRequest {
  keyspaceName: string;
  tableName: string;
}
const DeleteTableRequest = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<DeleteTableRequest>;
export interface DeleteTableResponse {}
const DeleteTableResponse = DeleteKeyspaceResponse as any as S.Schema<DeleteTableResponse>;
export interface DeleteTypeRequest {
  keyspaceName: string;
  typeName: string;
}
const DeleteTypeRequest = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<DeleteTypeRequest>;
export interface DeleteTypeResponse {
  keyspaceArn: string;
  typeName: string;
}
const DeleteTypeResponse = CreateTypeResponse as any as S.Schema<DeleteTypeResponse>;
export interface GetKeyspaceRequest {
  keyspaceName: string;
}
const GetKeyspaceRequest = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<GetKeyspaceRequest>;
export type KeyspaceStatus = string;
export type TablesReplicationProgress = string;
export interface ReplicationGroupStatus {
  region: string;
  keyspaceStatus: string;
  tablesReplicationProgress?: string;
}
const ReplicationGroupStatus = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<ReplicationGroupStatus>;
export type ReplicationGroupStatusList = ReplicationGroupStatus[];
const ReplicationGroupStatusList = /*@__PURE__*/ __L.at(__c4, 3);
export interface GetKeyspaceResponse {
  keyspaceName: string;
  resourceArn: string;
  replicationStrategy: string;
  replicationRegions?: string[];
  replicationGroupStatuses?: ReplicationGroupStatus[];
}
const GetKeyspaceResponse = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<GetKeyspaceResponse>;
export interface GetTableRequest {
  keyspaceName: string;
  tableName: string;
}
const GetTableRequest = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<GetTableRequest>;
export type TableStatus = string;
export interface CapacitySpecificationSummary {
  throughputMode: string;
  readCapacityUnits?: number;
  writeCapacityUnits?: number;
  lastUpdateToPayPerRequestTimestamp?: Date;
}
const CapacitySpecificationSummary = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<CapacitySpecificationSummary>;
export interface PointInTimeRecoverySummary {
  status: string;
  earliestRestorableTimestamp?: Date;
}
const PointInTimeRecoverySummary = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<PointInTimeRecoverySummary>;
export type WarmThroughputStatus = string;
export interface WarmThroughputSpecificationSummary {
  readUnitsPerSecond: number;
  writeUnitsPerSecond: number;
  status: string;
}
const WarmThroughputSpecificationSummary = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<WarmThroughputSpecificationSummary>;
export interface ReplicaSpecificationSummary {
  region?: string;
  status?: string;
  capacitySpecification?: CapacitySpecificationSummary;
  warmThroughputSpecification?: WarmThroughputSpecificationSummary;
}
const ReplicaSpecificationSummary = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<ReplicaSpecificationSummary>;
export type ReplicaSpecificationSummaryList = ReplicaSpecificationSummary[];
const ReplicaSpecificationSummaryList = /*@__PURE__*/ __L.at(__c5, 2);
export type StreamArn = string;
export interface CdcSpecificationSummary {
  status: string;
  viewType?: string;
}
const CdcSpecificationSummary = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<CdcSpecificationSummary>;
export interface GetTableResponse {
  keyspaceName: string;
  tableName: string;
  resourceArn: string;
  creationTimestamp?: Date;
  status?: string;
  schemaDefinition?: SchemaDefinition;
  capacitySpecification?: CapacitySpecificationSummary;
  encryptionSpecification?: EncryptionSpecification;
  pointInTimeRecovery?: PointInTimeRecoverySummary;
  ttl?: TimeToLive;
  defaultTimeToLive?: number;
  comment?: Comment;
  clientSideTimestamps?: ClientSideTimestamps;
  replicaSpecifications?: ReplicaSpecificationSummary[];
  latestStreamArn?: string;
  cdcSpecification?: CdcSpecificationSummary;
  warmThroughputSpecification?: WarmThroughputSpecificationSummary;
}
const GetTableResponse = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<GetTableResponse>;
export interface GetTableAutoScalingSettingsRequest {
  keyspaceName: string;
  tableName: string;
}
const GetTableAutoScalingSettingsRequest = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<GetTableAutoScalingSettingsRequest>;
export interface ReplicaAutoScalingSpecification {
  region?: string;
  autoScalingSpecification?: AutoScalingSpecification;
}
const ReplicaAutoScalingSpecification = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<ReplicaAutoScalingSpecification>;
export type ReplicaAutoScalingSpecificationList = ReplicaAutoScalingSpecification[];
const ReplicaAutoScalingSpecificationList = /*@__PURE__*/ __L.at(__c5, 7);
export interface GetTableAutoScalingSettingsResponse {
  keyspaceName: string;
  tableName: string;
  resourceArn: string;
  autoScalingSpecification?: AutoScalingSpecification;
  replicaSpecifications?: ReplicaAutoScalingSpecification[];
}
const GetTableAutoScalingSettingsResponse = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<GetTableAutoScalingSettingsResponse>;
export interface GetTypeRequest {
  keyspaceName: string;
  typeName: string;
}
const GetTypeRequest = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<GetTypeRequest>;
export type TypeStatus = string;
export type TableNameList = string[];
const TableNameList = RegionList as any as S.Schema<TableNameList>;
export type TypeNameList = string[];
const TypeNameList = RegionList as any as S.Schema<TypeNameList>;
export type Depth = number;
export interface GetTypeResponse {
  keyspaceName: string;
  typeName: string;
  fieldDefinitions?: FieldDefinition[];
  lastModifiedTimestamp?: Date;
  status?: string;
  directReferringTables?: string[];
  directParentTypes?: string[];
  maxNestingDepth?: number;
  keyspaceArn: string;
}
const GetTypeResponse = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<GetTypeResponse>;
export type NextToken = string;
export type MaxResults = number;
export interface ListKeyspacesRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListKeyspacesRequest = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<ListKeyspacesRequest>;
export interface KeyspaceSummary {
  keyspaceName: string;
  resourceArn: string;
  replicationStrategy: string;
  replicationRegions?: string[];
}
const KeyspaceSummary = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<KeyspaceSummary>;
export type KeyspaceSummaryList = KeyspaceSummary[];
const KeyspaceSummaryList = /*@__PURE__*/ __L.at(__c6, 5);
export interface ListKeyspacesResponse {
  nextToken?: string;
  keyspaces: KeyspaceSummary[];
}
const ListKeyspacesResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<ListKeyspacesResponse>;
export interface ListTablesRequest {
  nextToken?: string;
  maxResults?: number;
  keyspaceName: string;
}
const ListTablesRequest = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<ListTablesRequest>;
export interface TableSummary {
  keyspaceName: string;
  tableName: string;
  resourceArn: string;
}
const TableSummary = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<TableSummary>;
export type TableSummaryList = TableSummary[];
const TableSummaryList = /*@__PURE__*/ __L.at(__c7, 1);
export interface ListTablesResponse {
  nextToken?: string;
  tables?: TableSummary[];
}
const ListTablesResponse = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<ListTablesResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
  nextToken?: string;
  maxResults?: number;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  nextToken?: string;
  tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListTypesRequest {
  nextToken?: string;
  maxResults?: number;
  keyspaceName: string;
}
const ListTypesRequest = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<ListTypesRequest>;
export interface ListTypesResponse {
  nextToken?: string;
  types: string[];
}
const ListTypesResponse = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<ListTypesResponse>;
export interface RestoreTableRequest {
  sourceKeyspaceName: string;
  sourceTableName: string;
  targetKeyspaceName: string;
  targetTableName: string;
  restoreTimestamp?: Date;
  capacitySpecificationOverride?: CapacitySpecification;
  encryptionSpecificationOverride?: EncryptionSpecification;
  pointInTimeRecoveryOverride?: PointInTimeRecovery;
  tagsOverride?: Tag[];
  autoScalingSpecification?: AutoScalingSpecification;
  replicaSpecifications?: ReplicaSpecification[];
}
const RestoreTableRequest = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<RestoreTableRequest>;
export interface RestoreTableResponse {
  restoredTableARN: string;
}
const RestoreTableResponse = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<RestoreTableResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteKeyspaceResponse as any as S.Schema<TagResourceResponse>;
export interface UntagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteKeyspaceResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateKeyspaceRequest {
  keyspaceName: string;
  replicationSpecification: ReplicationSpecification;
  clientSideTimestamps?: ClientSideTimestamps;
}
const UpdateKeyspaceRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<UpdateKeyspaceRequest>;
export interface UpdateKeyspaceResponse {
  resourceArn: string;
}
const UpdateKeyspaceResponse = CreateKeyspaceResponse as any as S.Schema<UpdateKeyspaceResponse>;
export interface UpdateTableRequest {
  keyspaceName: string;
  tableName: string;
  addColumns?: ColumnDefinition[];
  capacitySpecification?: CapacitySpecification;
  encryptionSpecification?: EncryptionSpecification;
  pointInTimeRecovery?: PointInTimeRecovery;
  ttl?: TimeToLive;
  defaultTimeToLive?: number;
  clientSideTimestamps?: ClientSideTimestamps;
  autoScalingSpecification?: AutoScalingSpecification;
  replicaSpecifications?: ReplicaSpecification[];
  cdcSpecification?: CdcSpecification;
  warmThroughputSpecification?: WarmThroughputSpecification;
}
const UpdateTableRequest = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<UpdateTableRequest>;
export interface UpdateTableResponse {
  resourceArn: string;
}
const UpdateTableResponse = CreateKeyspaceResponse as any as S.Schema<UpdateTableResponse>;
export type CreateKeyspaceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * The `CreateKeyspace` operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names must be unique within each Region.
 *
 * `CreateKeyspace` is an asynchronous operation. You can monitor the creation status of the new keyspace by using the `GetKeyspace` operation.
 *
 * For more information, see Create a keyspace in the *Amazon Keyspaces Developer Guide*.
 */
export const createKeyspace: API.OperationMethod<
  CreateKeyspaceRequest,
  CreateKeyspaceResponse,
  CreateKeyspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateKeyspaceRequest,
  output: CreateKeyspaceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateKeyspace",
}));

export type CreateTableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * The `CreateTable` operation adds a new table to the specified keyspace. Within a keyspace, table names must be unique.
 *
 * `CreateTable` is an asynchronous operation. When the request is received, the status of the table is set to `CREATING`. You can monitor the creation status of the new table by using the `GetTable` operation, which returns the current `status` of the table. You can start using a table when the status is `ACTIVE`.
 *
 * For more information, see Create a table in the *Amazon Keyspaces Developer Guide*.
 */
export const createTable: API.OperationMethod<
  CreateTableRequest,
  CreateTableResponse,
  CreateTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTableRequest,
  output: CreateTableResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTable",
}));

export type CreateTypeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * The `CreateType` operation creates a new user-defined type in the specified keyspace.
 *
 * To configure the required permissions, see Permissions to create a UDT in the *Amazon Keyspaces Developer Guide*.
 *
 * For more information, see User-defined types (UDTs) in the *Amazon Keyspaces Developer Guide*.
 */
export const createType: API.OperationMethod<
  CreateTypeRequest,
  CreateTypeResponse,
  CreateTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTypeRequest,
  output: CreateTypeResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateType",
}));

export type DeleteKeyspaceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * The `DeleteKeyspace` operation deletes a keyspace and all of its tables.
 */
export const deleteKeyspace: API.OperationMethod<
  DeleteKeyspaceRequest,
  DeleteKeyspaceResponse,
  DeleteKeyspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteKeyspaceRequest,
  output: DeleteKeyspaceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteKeyspace",
}));

export type DeleteTableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * The `DeleteTable` operation deletes a table and all of its data. After a `DeleteTable` request is received, the specified table is in the `DELETING` state until Amazon Keyspaces completes the deletion. If the table is in the `ACTIVE` state, you can delete it. If a table is either in the `CREATING` or `UPDATING` states, then Amazon Keyspaces returns a `ResourceInUseException`. If the specified table does not exist, Amazon Keyspaces returns a `ResourceNotFoundException`. If the table is already in the `DELETING` state, no error is returned.
 */
export const deleteTable: API.OperationMethod<
  DeleteTableRequest,
  DeleteTableResponse,
  DeleteTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTableRequest,
  output: DeleteTableResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTable",
}));

export type DeleteTypeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * The `DeleteType` operation deletes a user-defined type (UDT). You can only delete a type that is not used in a table or another UDT.
 *
 * To configure the required permissions, see Permissions to delete a UDT in the *Amazon Keyspaces Developer Guide*.
 */
export const deleteType: API.OperationMethod<
  DeleteTypeRequest,
  DeleteTypeResponse,
  DeleteTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTypeRequest,
  output: DeleteTypeResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteType",
}));

export type GetKeyspaceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Returns the name of the specified keyspace, the Amazon Resource Name (ARN), the replication strategy, the Amazon Web Services Regions of a multi-Region keyspace, and the status of newly added Regions after an `UpdateKeyspace` operation.
 */
export const getKeyspace: API.OperationMethod<
  GetKeyspaceRequest,
  GetKeyspaceResponse,
  GetKeyspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetKeyspaceRequest,
  output: GetKeyspaceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetKeyspace",
}));

export type GetTableError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the table, including the table's name and current status, the keyspace name, configuration settings, and metadata.
 *
 * To read table metadata using `GetTable`, the IAM principal needs `Select` action permissions for the table and the system keyspace.
 */
export const getTable: API.OperationMethod<
  GetTableRequest,
  GetTableResponse,
  GetTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableRequest,
  output: GetTableResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTable",
}));

export type GetTableAutoScalingSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Returns auto scaling related settings of the specified table in JSON format. If the table is a multi-Region table, the Amazon Web Services Region specific auto scaling settings of the table are included.
 *
 * Amazon Keyspaces auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing your table's read and write capacity automatically in response to application traffic. For more information, see Managing throughput capacity automatically with Amazon Keyspaces auto scaling in the *Amazon Keyspaces Developer Guide*.
 *
 * `GetTableAutoScalingSettings` can't be used as an action in an IAM policy.
 *
 * To define permissions for `GetTableAutoScalingSettings`, you must allow the following two actions in the IAM policy statement's `Action` element:
 *
 * - `application-autoscaling:DescribeScalableTargets`
 *
 * - `application-autoscaling:DescribeScalingPolicies`
 */
export const getTableAutoScalingSettings: API.OperationMethod<
  GetTableAutoScalingSettingsRequest,
  GetTableAutoScalingSettingsResponse,
  GetTableAutoScalingSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableAutoScalingSettingsRequest,
  output: GetTableAutoScalingSettingsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableAutoScalingSettings",
}));

export type GetTypeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * The `GetType` operation returns information about the type, for example the field definitions, the timestamp when the type was last modified, the level of nesting, the status, and details about if the type is used in other types and tables.
 *
 * To read keyspace metadata using `GetType`, the IAM principal needs `Select` action permissions for the system keyspace. To configure the required permissions, see Permissions to view a UDT in the *Amazon Keyspaces Developer Guide*.
 */
export const getType: API.OperationMethod<
  GetTypeRequest,
  GetTypeResponse,
  GetTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTypeRequest,
  output: GetTypeResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetType",
}));

export type ListKeyspacesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * The `ListKeyspaces` operation returns a list of keyspaces.
 */
export const listKeyspaces: API.PaginatedOperationMethod<
  ListKeyspacesRequest,
  ListKeyspacesResponse,
  ListKeyspacesError,
  Credentials | HttpClient.HttpClient,
  KeyspaceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListKeyspacesRequest,
  output: ListKeyspacesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListKeyspaces",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "keyspaces",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTablesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * The `ListTables` operation returns a list of tables for a specified keyspace.
 *
 * To read keyspace metadata using `ListTables`, the IAM principal needs `Select` action permissions for the system keyspace.
 */
export const listTables: API.PaginatedOperationMethod<
  ListTablesRequest,
  ListTablesResponse,
  ListTablesError,
  Credentials | HttpClient.HttpClient,
  TableSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTablesRequest,
  output: ListTablesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTables",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tables",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all tags associated with the specified Amazon Keyspaces resource.
 *
 * To read keyspace metadata using `ListTagsForResource`, the IAM principal needs `Select` action permissions for the specified resource and the system keyspace.
 */
export const listTagsForResource: API.PaginatedOperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tags",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTypesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * The `ListTypes` operation returns a list of types for a specified keyspace.
 *
 * To read keyspace metadata using `ListTypes`, the IAM principal needs `Select` action permissions for the system keyspace. To configure the required permissions, see Permissions to view a UDT in the *Amazon Keyspaces Developer Guide*.
 */
export const listTypes: API.PaginatedOperationMethod<
  ListTypesRequest,
  ListTypesResponse,
  ListTypesError,
  Credentials | HttpClient.HttpClient,
  TypeName
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTypesRequest,
  output: ListTypesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTypes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "types",
    pageSize: "maxResults",
  } as const,
})) as any;

export type RestoreTableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Restores the table to the specified point in time within the `earliest_restorable_timestamp` and the current time. For more information about restore points, see Time window for PITR continuous backups in the *Amazon Keyspaces Developer Guide*.
 *
 * Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.
 *
 * When you restore using point in time recovery, Amazon Keyspaces restores your source table's schema and data to the state based on the selected timestamp `(day:hour:minute:second)` to a new table. The Time to Live (TTL) settings are also restored to the state based on the selected timestamp.
 *
 * In addition to the table's schema, data, and TTL settings, `RestoreTable` restores the capacity mode, auto scaling settings, encryption settings, and point-in-time recovery settings from the source table. Unlike the table's schema data and TTL settings, which are restored based on the selected timestamp, these settings are always restored based on the table's settings as of the current time or when the table was deleted.
 *
 * You can also overwrite these settings during restore:
 *
 * - Read/write capacity mode
 *
 * - Provisioned throughput capacity units
 *
 * - Auto scaling settings
 *
 * - Point-in-time (PITR) settings
 *
 * - Tags
 *
 * For more information, see PITR restore settings in the *Amazon Keyspaces Developer Guide*.
 *
 * Note that the following settings are not restored, and you must configure them manually for the new table:
 *
 * - Identity and Access Management (IAM) policies
 *
 * - Amazon CloudWatch metrics and alarms
 */
export const restoreTable: API.OperationMethod<
  RestoreTableRequest,
  RestoreTableResponse,
  RestoreTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreTableRequest,
  output: RestoreTableResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestoreTable",
}));

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Associates a set of tags with a Amazon Keyspaces resource. You can then activate these user-defined tags so that they appear on the Cost Management Console for cost allocation tracking. For more information, see Adding tags and labels to Amazon Keyspaces resources in the *Amazon Keyspaces Developer Guide*.
 *
 * For IAM policy examples that show how to control access to Amazon Keyspaces resources based on tags, see Amazon Keyspaces resource access based on tags in the *Amazon Keyspaces Developer Guide*.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Removes the association of tags from a Amazon Keyspaces resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateKeyspaceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Adds a new Amazon Web Services Region to the keyspace. You can add a new Region to a keyspace that is either a single or a multi-Region keyspace. Amazon Keyspaces is going to replicate all tables in the keyspace to the new Region. To successfully replicate all tables to the new Region, they must use client-side timestamps for conflict resolution. To enable client-side timestamps, specify `clientSideTimestamps.status = enabled` when invoking the API. For more information about client-side timestamps, see Client-side timestamps in Amazon Keyspaces in the *Amazon Keyspaces Developer Guide*.
 *
 * To add a Region to a keyspace using the `UpdateKeyspace` API, the IAM principal needs permissions for the following IAM actions:
 *
 * - `cassandra:Alter`
 *
 * - `cassandra:AlterMultiRegionResource`
 *
 * - `cassandra:Create`
 *
 * - `cassandra:CreateMultiRegionResource`
 *
 * - `cassandra:Select`
 *
 * - `cassandra:SelectMultiRegionResource`
 *
 * - `cassandra:Modify`
 *
 * - `cassandra:ModifyMultiRegionResource`
 *
 * If the keyspace contains a table that is configured in provisioned mode with auto scaling enabled, the following additional IAM actions need to be allowed.
 *
 * - `application-autoscaling:RegisterScalableTarget`
 *
 * - `application-autoscaling:DeregisterScalableTarget`
 *
 * - `application-autoscaling:DescribeScalableTargets`
 *
 * - `application-autoscaling:PutScalingPolicy`
 *
 * - `application-autoscaling:DescribeScalingPolicies`
 *
 * To use the `UpdateKeyspace` API, the IAM principal also needs permissions to create a service-linked role with the following elements:
 *
 * - `iam:CreateServiceLinkedRole` - The **action** the principal can perform.
 *
 * - `arn:aws:iam::*:role/aws-service-role/replication.cassandra.amazonaws.com/AWSServiceRoleForKeyspacesReplication` - The **resource** that the action can be performed on.
 *
 * - `iam:AWSServiceName: replication.cassandra.amazonaws.com` - The only Amazon Web Services service that this role can be attached to is Amazon Keyspaces.
 *
 * For more information, see Configure the IAM permissions required to add an Amazon Web Services Region to a keyspace in the *Amazon Keyspaces Developer Guide*.
 */
export const updateKeyspace: API.OperationMethod<
  UpdateKeyspaceRequest,
  UpdateKeyspaceResponse,
  UpdateKeyspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateKeyspaceRequest,
  output: UpdateKeyspaceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateKeyspace",
}));

export type UpdateTableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Adds new columns to the table or updates one of the table's settings, for example capacity mode, auto scaling, encryption, point-in-time recovery, or ttl settings. Note that you can only update one specific table setting per update operation.
 */
export const updateTable: API.OperationMethod<
  UpdateTableRequest,
  UpdateTableResponse,
  UpdateTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTableRequest,
  output: UpdateTableResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTable",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(Tag);
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({ replicationStrategy: S.String, regionList: S.optional(RegionList) }),
      ).annotate({ identifier: "ReplicationSpecification" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          keyspaceName: S.String,
          tags: S.optional(TagList),
          replicationSpecification: S.optional(ReplicationSpecification),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateKeyspaceRequest" });
    case 5:
      return S.suspend(() => S.Struct({ resourceArn: S.String })).annotate({
        identifier: "CreateKeyspaceResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, type: S.String })).annotate({
        identifier: "ColumnDefinition",
      });
    case 7:
      return S.Array(ColumnDefinition);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "PartitionKey",
      });
    case 1:
      return S.Array(PartitionKey);
    case 2:
      return S.suspend(() => S.Struct({ name: S.String, orderBy: S.String })).annotate({
        identifier: "ClusteringKey",
      });
    case 3:
      return S.Array(ClusteringKey);
    case 4:
      return S.suspend(() =>
        S.Struct({
          allColumns: ColumnDefinitionList,
          partitionKeys: PartitionKeyList,
          clusteringKeys: S.optional(ClusteringKeyList),
          staticColumns: S.optional(StaticColumnList),
        }),
      ).annotate({ identifier: "SchemaDefinition" });
    case 5:
      return S.suspend(() => S.Struct({ message: S.String })).annotate({
        identifier: "Comment",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          throughputMode: S.String,
          readCapacityUnits: S.optional(S.Number),
          writeCapacityUnits: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CapacitySpecification" });
    case 7:
      return S.suspend(() =>
        S.Struct({ type: S.String, kmsKeyIdentifier: S.optional(S.String) }),
      ).annotate({ identifier: "EncryptionSpecification" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ status: S.String })).annotate({
        identifier: "PointInTimeRecovery",
      });
    case 1:
      return S.suspend(() => S.Struct({ status: S.String })).annotate({
        identifier: "TimeToLive",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          disableScaleIn: S.optional(S.Boolean),
          scaleInCooldown: S.optional(S.Number),
          scaleOutCooldown: S.optional(S.Number),
          targetValue: S.Number,
        }),
      ).annotate({
        identifier: "TargetTrackingScalingPolicyConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          targetTrackingScalingPolicyConfiguration: S.optional(
            TargetTrackingScalingPolicyConfiguration,
          ),
        }),
      ).annotate({ identifier: "AutoScalingPolicy" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          autoScalingDisabled: S.optional(S.Boolean),
          minimumUnits: S.optional(S.Number),
          maximumUnits: S.optional(S.Number),
          scalingPolicy: S.optional(AutoScalingPolicy),
        }),
      ).annotate({ identifier: "AutoScalingSettings" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          writeCapacityAutoScaling: S.optional(AutoScalingSettings),
          readCapacityAutoScaling: S.optional(AutoScalingSettings),
        }),
      ).annotate({ identifier: "AutoScalingSpecification" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          region: S.String,
          readCapacityUnits: S.optional(S.Number),
          readCapacityAutoScaling: S.optional(AutoScalingSettings),
        }),
      ).annotate({ identifier: "ReplicaSpecification" });
    case 7:
      return S.Array(ReplicaSpecification);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          status: S.String,
          viewType: S.optional(S.String),
          tags: S.optional(TagList),
          propagateTags: S.optional(S.String),
        }),
      ).annotate({ identifier: "CdcSpecification" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          readUnitsPerSecond: S.optional(S.Number),
          writeUnitsPerSecond: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "WarmThroughputSpecification",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          keyspaceName: S.String,
          tableName: S.String,
          schemaDefinition: SchemaDefinition,
          comment: S.optional(Comment),
          capacitySpecification: S.optional(CapacitySpecification),
          encryptionSpecification: S.optional(EncryptionSpecification),
          pointInTimeRecovery: S.optional(PointInTimeRecovery),
          ttl: S.optional(TimeToLive),
          defaultTimeToLive: S.optional(S.Number),
          tags: S.optional(TagList),
          clientSideTimestamps: S.optional(ClientSideTimestamps),
          autoScalingSpecification: S.optional(AutoScalingSpecification),
          replicaSpecifications: S.optional(ReplicaSpecificationList),
          cdcSpecification: S.optional(CdcSpecification),
          warmThroughputSpecification: S.optional(WarmThroughputSpecification),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTableRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ keyspaceName: S.String, typeName: S.String, fieldDefinitions: FieldList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateTypeRequest" });
    case 4:
      return S.suspend(() => S.Struct({ keyspaceArn: S.String, typeName: S.String })).annotate({
        identifier: "CreateTypeResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ keyspaceName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteKeyspaceRequest" });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteKeyspaceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ keyspaceName: S.String, tableName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTableRequest" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ keyspaceName: S.String, typeName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTypeRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ keyspaceName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetKeyspaceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          region: S.String,
          keyspaceStatus: S.String,
          tablesReplicationProgress: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReplicationGroupStatus" });
    case 3:
      return S.Array(ReplicationGroupStatus);
    case 4:
      return S.suspend(() =>
        S.Struct({
          keyspaceName: S.String,
          resourceArn: S.String,
          replicationStrategy: S.String,
          replicationRegions: S.optional(RegionList),
          replicationGroupStatuses: S.optional(ReplicationGroupStatusList),
        }),
      ).annotate({ identifier: "GetKeyspaceResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ keyspaceName: S.String, tableName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTableRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          throughputMode: S.String,
          readCapacityUnits: S.optional(S.Number),
          writeCapacityUnits: S.optional(S.Number),
          lastUpdateToPayPerRequestTimestamp: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
        }),
      ).annotate({
        identifier: "CapacitySpecificationSummary",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          status: S.String,
          earliestRestorableTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "PointInTimeRecoverySummary",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ readUnitsPerSecond: S.Number, writeUnitsPerSecond: S.Number, status: S.String }),
      ).annotate({
        identifier: "WarmThroughputSpecificationSummary",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          region: S.optional(S.String),
          status: S.optional(S.String),
          capacitySpecification: S.optional(CapacitySpecificationSummary),
          warmThroughputSpecification: S.optional(WarmThroughputSpecificationSummary),
        }),
      ).annotate({
        identifier: "ReplicaSpecificationSummary",
      });
    case 2:
      return S.Array(ReplicaSpecificationSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ status: S.String, viewType: S.optional(S.String) }),
      ).annotate({ identifier: "CdcSpecificationSummary" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          keyspaceName: S.String,
          tableName: S.String,
          resourceArn: S.String,
          creationTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          schemaDefinition: S.optional(SchemaDefinition),
          capacitySpecification: S.optional(CapacitySpecificationSummary),
          encryptionSpecification: S.optional(EncryptionSpecification),
          pointInTimeRecovery: S.optional(PointInTimeRecoverySummary),
          ttl: S.optional(TimeToLive),
          defaultTimeToLive: S.optional(S.Number),
          comment: S.optional(Comment),
          clientSideTimestamps: S.optional(ClientSideTimestamps),
          replicaSpecifications: S.optional(ReplicaSpecificationSummaryList),
          latestStreamArn: S.optional(S.String),
          cdcSpecification: S.optional(CdcSpecificationSummary),
          warmThroughputSpecification: S.optional(WarmThroughputSpecificationSummary),
        }),
      ).annotate({ identifier: "GetTableResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ keyspaceName: S.String, tableName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetTableAutoScalingSettingsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          region: S.optional(S.String),
          autoScalingSpecification: S.optional(AutoScalingSpecification),
        }),
      ).annotate({
        identifier: "ReplicaAutoScalingSpecification",
      });
    case 7:
      return S.Array(ReplicaAutoScalingSpecification);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          keyspaceName: S.String,
          tableName: S.String,
          resourceArn: S.String,
          autoScalingSpecification: S.optional(AutoScalingSpecification),
          replicaSpecifications: S.optional(ReplicaAutoScalingSpecificationList),
        }),
      ).annotate({
        identifier: "GetTableAutoScalingSettingsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ keyspaceName: S.String, typeName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTypeRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          keyspaceName: S.String,
          typeName: S.String,
          fieldDefinitions: S.optional(FieldList),
          lastModifiedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          directReferringTables: S.optional(TableNameList),
          directParentTypes: S.optional(TypeNameList),
          maxNestingDepth: S.optional(S.Number),
          keyspaceArn: S.String,
        }),
      ).annotate({ identifier: "GetTypeResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListKeyspacesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          keyspaceName: S.String,
          resourceArn: S.String,
          replicationStrategy: S.String,
          replicationRegions: S.optional(RegionList),
        }),
      ).annotate({ identifier: "KeyspaceSummary" });
    case 5:
      return S.Array(KeyspaceSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), keyspaces: KeyspaceSummaryList }),
      ).annotate({ identifier: "ListKeyspacesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          keyspaceName: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTablesRequest" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ keyspaceName: S.String, tableName: S.String, resourceArn: S.String }),
      ).annotate({ identifier: "TableSummary" });
    case 1:
      return S.Array(TableSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), tables: S.optional(TableSummaryList) }),
      ).annotate({ identifier: "ListTablesResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), tags: S.optional(TagList) }),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          keyspaceName: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTypesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), types: TypeNameList }),
      ).annotate({ identifier: "ListTypesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sourceKeyspaceName: S.String,
          sourceTableName: S.String,
          targetKeyspaceName: S.String,
          targetTableName: S.String,
          restoreTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          capacitySpecificationOverride: S.optional(CapacitySpecification),
          encryptionSpecificationOverride: S.optional(EncryptionSpecification),
          pointInTimeRecoveryOverride: S.optional(PointInTimeRecovery),
          tagsOverride: S.optional(TagList),
          autoScalingSpecification: S.optional(AutoScalingSpecification),
          replicaSpecifications: S.optional(ReplicaSpecificationList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RestoreTableRequest" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ restoredTableARN: S.String })).annotate({
        identifier: "RestoreTableResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: TagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: TagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          keyspaceName: S.String,
          replicationSpecification: ReplicationSpecification,
          clientSideTimestamps: S.optional(ClientSideTimestamps),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateKeyspaceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          keyspaceName: S.String,
          tableName: S.String,
          addColumns: S.optional(ColumnDefinitionList),
          capacitySpecification: S.optional(CapacitySpecification),
          encryptionSpecification: S.optional(EncryptionSpecification),
          pointInTimeRecovery: S.optional(PointInTimeRecovery),
          ttl: S.optional(TimeToLive),
          defaultTimeToLive: S.optional(S.Number),
          clientSideTimestamps: S.optional(ClientSideTimestamps),
          autoScalingSpecification: S.optional(AutoScalingSpecification),
          replicaSpecifications: S.optional(ReplicaSpecificationList),
          cdcSpecification: S.optional(CdcSpecification),
          warmThroughputSpecification: S.optional(WarmThroughputSpecification),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateTableRequest" });
  }
}
