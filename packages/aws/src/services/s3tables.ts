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
  sdkId: "S3Tables",
  serviceShapeName: "S3TableBuckets",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "s3tables" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
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
              `https://s3tables-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://s3tables-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://s3tables.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://s3tables.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()(
    "ForbiddenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class InternalServerErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalServerErrorException>()(
    "InternalServerErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class MethodNotAllowedException
  extends /*@__PURE__*/ S.TaggedError<MethodNotAllowedException>()(
    "MethodNotAllowedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(405),
  ).pipe(C.withBadRequestError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()(
    "TooManyRequestsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export type TableBucketARN = string;
export type NamespaceName = string;
export type NamespaceList = string[];
const NamespaceList = /*@__PURE__*/ __L.at(__c0, 0);
export interface CreateNamespaceRequest {
  tableBucketARN: string;
  namespace: string[];
}
const CreateNamespaceRequest = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<CreateNamespaceRequest>;
export interface CreateNamespaceResponse {
  tableBucketARN: string;
  namespace: string[];
}
const CreateNamespaceResponse = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<CreateNamespaceResponse>;
export type TableName = string;
export type OpenTableFormat = "ICEBERG" | (string & {});
const OpenTableFormat = S.String;

export interface SchemaField {
  id?: number;
  name: string;
  type: string;
  required?: boolean;
}
const SchemaField = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<SchemaField>;
export type SchemaFieldList = SchemaField[];
const SchemaFieldList = /*@__PURE__*/ __L.at(__c0, 4);
export interface IcebergSchema {
  fields: SchemaField[];
}
const IcebergSchema = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<IcebergSchema>;
export type SchemaV2FieldType = "struct" | (string & {});
const SchemaV2FieldType = S.String;

export interface SchemaV2Field {
  id: number;
  name: string;
  type: any;
  required: boolean;
  doc?: string;
}
const SchemaV2Field = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<SchemaV2Field>;
export type SchemaV2FieldList = SchemaV2Field[];
const SchemaV2FieldList = /*@__PURE__*/ __L.at(__c0, 7);
export type IntegerList = number[];
const IntegerList = /*@__PURE__*/ __L.at(__c1, 0);
export interface IcebergSchemaV2 {
  type: SchemaV2FieldType;
  fields: SchemaV2Field[];
  schemaId?: number;
  identifierFieldIds?: number[];
}
const IcebergSchemaV2 = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<IcebergSchemaV2>;
export interface IcebergPartitionField {
  sourceId: number;
  transform: string;
  name: string;
  fieldId?: number;
}
const IcebergPartitionField = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<IcebergPartitionField>;
export type IcebergPartitionFieldList = IcebergPartitionField[];
const IcebergPartitionFieldList = /*@__PURE__*/ __L.at(__c1, 3);
export interface IcebergPartitionSpec {
  fields: IcebergPartitionField[];
  specId?: number;
}
const IcebergPartitionSpec = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<IcebergPartitionSpec>;
export type IcebergSortDirection = "asc" | "desc" | (string & {});
const IcebergSortDirection = S.String;

export type IcebergNullOrder = "nulls-first" | "nulls-last" | (string & {});
const IcebergNullOrder = S.String;

export interface IcebergSortField {
  sourceId: number;
  transform: string;
  direction: IcebergSortDirection;
  nullOrder: IcebergNullOrder;
}
const IcebergSortField = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<IcebergSortField>;
export type IcebergSortFieldList = IcebergSortField[];
const IcebergSortFieldList = /*@__PURE__*/ __L.at(__c1, 6);
export interface IcebergSortOrder {
  orderId: number;
  fields: IcebergSortField[];
}
const IcebergSortOrder = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<IcebergSortOrder>;
export type TableProperties = { [key: string]: string | undefined };
const TableProperties = /*@__PURE__*/ __L.at(__c2, 0);
export interface IcebergMetadata {
  schema?: IcebergSchema;
  schemaV2?: IcebergSchemaV2;
  partitionSpec?: IcebergPartitionSpec;
  writeOrder?: IcebergSortOrder;
  properties?: { [key: string]: string | undefined };
}
const IcebergMetadata = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<IcebergMetadata>;
export type TableMetadata = { iceberg: IcebergMetadata };
const TableMetadata = /*@__PURE__*/ __L.at(__c2, 2);
export type SSEAlgorithm = "AES256" | "aws:kms" | (string & {});
const SSEAlgorithm = S.String;

export interface EncryptionConfiguration {
  sseAlgorithm: SSEAlgorithm;
  kmsKeyArn?: string;
}
const EncryptionConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<EncryptionConfiguration>;
export type StorageClass = "STANDARD" | "INTELLIGENT_TIERING" | (string & {});
const StorageClass = S.String;

export interface StorageClassConfiguration {
  storageClass: StorageClass;
}
const StorageClassConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<StorageClassConfiguration>;
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
const Tags = /*@__PURE__*/ __L.at(__c2, 5);
export interface CreateTableRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
  format: OpenTableFormat;
  metadata?: TableMetadata;
  encryptionConfiguration?: EncryptionConfiguration;
  storageClassConfiguration?: StorageClassConfiguration;
  tags?: { [key: string]: string | undefined };
}
const CreateTableRequest = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<CreateTableRequest>;
export type TableARN = string;
export type VersionToken = string;
export interface CreateTableResponse {
  tableARN: string;
  versionToken: string;
}
const CreateTableResponse = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<CreateTableResponse>;
export type TableBucketName = string;
export interface CreateTableBucketRequest {
  name: string;
  encryptionConfiguration?: EncryptionConfiguration;
  storageClassConfiguration?: StorageClassConfiguration;
  tags?: { [key: string]: string | undefined };
}
const CreateTableBucketRequest = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CreateTableBucketRequest>;
export interface CreateTableBucketResponse {
  arn: string;
}
const CreateTableBucketResponse = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<CreateTableBucketResponse>;
export interface DeleteNamespaceRequest {
  tableBucketARN: string;
  namespace: string;
}
const DeleteNamespaceRequest = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<DeleteNamespaceRequest>;
export interface DeleteNamespaceResponse {}
const DeleteNamespaceResponse = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<DeleteNamespaceResponse>;
export interface DeleteTableRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
  versionToken?: string;
}
const DeleteTableRequest = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<DeleteTableRequest>;
export interface DeleteTableResponse {}
const DeleteTableResponse = DeleteNamespaceResponse as any as S.Schema<DeleteTableResponse>;
export interface DeleteTableBucketRequest {
  tableBucketARN: string;
}
const DeleteTableBucketRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<DeleteTableBucketRequest>;
export interface DeleteTableBucketResponse {}
const DeleteTableBucketResponse =
  DeleteNamespaceResponse as any as S.Schema<DeleteTableBucketResponse>;
export interface DeleteTableBucketEncryptionRequest {
  tableBucketARN: string;
}
const DeleteTableBucketEncryptionRequest = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<DeleteTableBucketEncryptionRequest>;
export interface DeleteTableBucketEncryptionResponse {}
const DeleteTableBucketEncryptionResponse = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<DeleteTableBucketEncryptionResponse>;
export interface DeleteTableBucketMetricsConfigurationRequest {
  tableBucketARN: string;
}
const DeleteTableBucketMetricsConfigurationRequest = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<DeleteTableBucketMetricsConfigurationRequest>;
export interface DeleteTableBucketMetricsConfigurationResponse {}
const DeleteTableBucketMetricsConfigurationResponse =
  DeleteTableBucketEncryptionResponse as any as S.Schema<DeleteTableBucketMetricsConfigurationResponse>;
export interface DeleteTableBucketPolicyRequest {
  tableBucketARN: string;
}
const DeleteTableBucketPolicyRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<DeleteTableBucketPolicyRequest>;
export interface DeleteTableBucketPolicyResponse {}
const DeleteTableBucketPolicyResponse = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<DeleteTableBucketPolicyResponse>;
export interface DeleteTableBucketReplicationRequest {
  tableBucketARN: string;
  versionToken?: string;
}
const DeleteTableBucketReplicationRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<DeleteTableBucketReplicationRequest>;
export interface DeleteTableBucketReplicationResponse {}
const DeleteTableBucketReplicationResponse =
  DeleteTableBucketEncryptionResponse as any as S.Schema<DeleteTableBucketReplicationResponse>;
export interface DeleteTablePolicyRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
}
const DeleteTablePolicyRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<DeleteTablePolicyRequest>;
export interface DeleteTablePolicyResponse {}
const DeleteTablePolicyResponse =
  DeleteNamespaceResponse as any as S.Schema<DeleteTablePolicyResponse>;
export interface DeleteTableReplicationRequest {
  tableArn: string;
  versionToken: string;
}
const DeleteTableReplicationRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<DeleteTableReplicationRequest>;
export interface DeleteTableReplicationResponse {}
const DeleteTableReplicationResponse =
  DeleteNamespaceResponse as any as S.Schema<DeleteTableReplicationResponse>;
export interface GetNamespaceRequest {
  tableBucketARN: string;
  namespace: string;
}
const GetNamespaceRequest = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<GetNamespaceRequest>;
export type AccountId = string;
export type NamespaceId = string;
export type TableBucketId = string;
export interface GetNamespaceResponse {
  namespace: string[];
  createdAt: Date;
  createdBy: string;
  ownerAccountId: string;
  namespaceId?: string;
  tableBucketId?: string;
}
const GetNamespaceResponse = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<GetNamespaceResponse>;
export interface GetTableRequest {
  tableBucketARN?: string;
  namespace?: string;
  name?: string;
  tableArn?: string;
}
const GetTableRequest = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<GetTableRequest>;
export type TableType = "customer" | "aws" | (string & {});
const TableType = S.String;

export type MetadataLocation = string;
export type WarehouseLocation = string;
export interface ReplicationInformation {
  sourceTableARN: string;
}
const ReplicationInformation = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<ReplicationInformation>;
export interface ManagedTableInformation {
  replicationInformation?: ReplicationInformation;
}
const ManagedTableInformation = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<ManagedTableInformation>;
export interface GetTableResponse {
  name: string;
  type: TableType;
  tableARN: string;
  namespace: string[];
  namespaceId?: string;
  versionToken: string;
  metadataLocation?: string;
  warehouseLocation: string;
  createdAt: Date;
  createdBy: string;
  managedByService?: string;
  modifiedAt: Date;
  modifiedBy?: string;
  ownerAccountId: string;
  format: OpenTableFormat;
  tableBucketId?: string;
  managedTableInformation?: ManagedTableInformation;
}
const GetTableResponse = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<GetTableResponse>;
export interface GetTableBucketRequest {
  tableBucketARN: string;
}
const GetTableBucketRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<GetTableBucketRequest>;
export type TableBucketType = "customer" | "aws" | (string & {});
const TableBucketType = S.String;

export interface GetTableBucketResponse {
  arn: string;
  name: string;
  ownerAccountId: string;
  createdAt: Date;
  tableBucketId?: string;
  type?: TableBucketType;
}
const GetTableBucketResponse = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<GetTableBucketResponse>;
export interface GetTableBucketEncryptionRequest {
  tableBucketARN: string;
}
const GetTableBucketEncryptionRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<GetTableBucketEncryptionRequest>;
export interface GetTableBucketEncryptionResponse {
  encryptionConfiguration: EncryptionConfiguration;
}
const GetTableBucketEncryptionResponse = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<GetTableBucketEncryptionResponse>;
export interface GetTableBucketMaintenanceConfigurationRequest {
  tableBucketARN: string;
}
const GetTableBucketMaintenanceConfigurationRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<GetTableBucketMaintenanceConfigurationRequest>;
export type TableBucketMaintenanceType = "icebergUnreferencedFileRemoval" | (string & {});
const TableBucketMaintenanceType = S.String;

export type MaintenanceStatus = "enabled" | "disabled" | (string & {});
const MaintenanceStatus = S.String;

export type PositiveInteger = number;
export interface IcebergUnreferencedFileRemovalSettings {
  unreferencedDays?: number;
  nonCurrentDays?: number;
}
const IcebergUnreferencedFileRemovalSettings = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<IcebergUnreferencedFileRemovalSettings>;
export type TableBucketMaintenanceSettings = {
  icebergUnreferencedFileRemoval: IcebergUnreferencedFileRemovalSettings;
};
const TableBucketMaintenanceSettings = /*@__PURE__*/ __L.at(__c6, 2);
export interface TableBucketMaintenanceConfigurationValue {
  status?: MaintenanceStatus;
  settings?: TableBucketMaintenanceSettings;
}
const TableBucketMaintenanceConfigurationValue = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<TableBucketMaintenanceConfigurationValue>;
export type TableBucketMaintenanceConfiguration = {
  [key in TableBucketMaintenanceType]?: TableBucketMaintenanceConfigurationValue;
};
const TableBucketMaintenanceConfiguration = /*@__PURE__*/ __L.at(__c6, 4);
export interface GetTableBucketMaintenanceConfigurationResponse {
  tableBucketARN: string;
  configuration: { [key: string]: TableBucketMaintenanceConfigurationValue | undefined };
}
const GetTableBucketMaintenanceConfigurationResponse = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<GetTableBucketMaintenanceConfigurationResponse>;
export interface GetTableBucketMetricsConfigurationRequest {
  tableBucketARN: string;
}
const GetTableBucketMetricsConfigurationRequest = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<GetTableBucketMetricsConfigurationRequest>;
export interface GetTableBucketMetricsConfigurationResponse {
  tableBucketARN: string;
  id?: string;
}
const GetTableBucketMetricsConfigurationResponse = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<GetTableBucketMetricsConfigurationResponse>;
export interface GetTableBucketPolicyRequest {
  tableBucketARN: string;
}
const GetTableBucketPolicyRequest = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<GetTableBucketPolicyRequest>;
export type ResourcePolicy = string;
export interface GetTableBucketPolicyResponse {
  resourcePolicy: string;
}
const GetTableBucketPolicyResponse = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<GetTableBucketPolicyResponse>;
export interface GetTableBucketReplicationRequest {
  tableBucketARN: string;
}
const GetTableBucketReplicationRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<GetTableBucketReplicationRequest>;
export type IAMRole = string;
export interface ReplicationDestination {
  destinationTableBucketARN: string;
}
const ReplicationDestination = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<ReplicationDestination>;
export type ReplicationDestinations = ReplicationDestination[];
const ReplicationDestinations = /*@__PURE__*/ __L.at(__c7, 4);
export interface TableBucketReplicationRule {
  destinations: ReplicationDestination[];
}
const TableBucketReplicationRule = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<TableBucketReplicationRule>;
export type TableBucketReplicationRules = TableBucketReplicationRule[];
const TableBucketReplicationRules = /*@__PURE__*/ __L.at(__c7, 6);
export interface TableBucketReplicationConfiguration {
  role: string;
  rules: TableBucketReplicationRule[];
}
const TableBucketReplicationConfiguration = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<TableBucketReplicationConfiguration>;
export interface GetTableBucketReplicationResponse {
  versionToken: string;
  configuration: TableBucketReplicationConfiguration;
}
const GetTableBucketReplicationResponse = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<GetTableBucketReplicationResponse>;
export interface GetTableBucketStorageClassRequest {
  tableBucketARN: string;
}
const GetTableBucketStorageClassRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<GetTableBucketStorageClassRequest>;
export interface GetTableBucketStorageClassResponse {
  storageClassConfiguration: StorageClassConfiguration;
}
const GetTableBucketStorageClassResponse = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<GetTableBucketStorageClassResponse>;
export interface GetTableEncryptionRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
}
const GetTableEncryptionRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<GetTableEncryptionRequest>;
export interface GetTableEncryptionResponse {
  encryptionConfiguration: EncryptionConfiguration;
}
const GetTableEncryptionResponse =
  GetTableBucketEncryptionResponse as any as S.Schema<GetTableEncryptionResponse>;
export interface GetTableMaintenanceConfigurationRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
}
const GetTableMaintenanceConfigurationRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<GetTableMaintenanceConfigurationRequest>;
export type TableMaintenanceType =
  | "icebergCompaction"
  | "icebergSnapshotManagement"
  | (string & {});
const TableMaintenanceType = S.String;

export type IcebergCompactionStrategy = "auto" | "binpack" | "sort" | "z-order" | (string & {});
const IcebergCompactionStrategy = S.String;

export interface IcebergCompactionSettings {
  targetFileSizeMB?: number;
  strategy?: IcebergCompactionStrategy;
}
const IcebergCompactionSettings = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<IcebergCompactionSettings>;
export interface IcebergSnapshotManagementSettings {
  minSnapshotsToKeep?: number;
  maxSnapshotAgeHours?: number;
}
const IcebergSnapshotManagementSettings = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<IcebergSnapshotManagementSettings>;
export type TableMaintenanceSettings =
  | { icebergCompaction: IcebergCompactionSettings; icebergSnapshotManagement?: never }
  | { icebergCompaction?: never; icebergSnapshotManagement: IcebergSnapshotManagementSettings };
const TableMaintenanceSettings = /*@__PURE__*/ __L.at(__c8, 7);
export interface TableMaintenanceConfigurationValue {
  status?: MaintenanceStatus;
  settings?: TableMaintenanceSettings;
}
const TableMaintenanceConfigurationValue = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<TableMaintenanceConfigurationValue>;
export type TableMaintenanceConfiguration = {
  [key in TableMaintenanceType]?: TableMaintenanceConfigurationValue;
};
const TableMaintenanceConfiguration = /*@__PURE__*/ __L.at(__c9, 1);
export interface GetTableMaintenanceConfigurationResponse {
  tableARN: string;
  configuration: { [key: string]: TableMaintenanceConfigurationValue | undefined };
}
const GetTableMaintenanceConfigurationResponse = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<GetTableMaintenanceConfigurationResponse>;
export interface GetTableMaintenanceJobStatusRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
}
const GetTableMaintenanceJobStatusRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<GetTableMaintenanceJobStatusRequest>;
export type TableMaintenanceJobType =
  | "icebergCompaction"
  | "icebergSnapshotManagement"
  | "icebergUnreferencedFileRemoval"
  | (string & {});
const TableMaintenanceJobType = S.String;

export type JobStatus = "Not_Yet_Run" | "Successful" | "Failed" | "Disabled" | (string & {});
const JobStatus = S.String;

export interface TableMaintenanceJobStatusValue {
  status: JobStatus;
  lastRunTimestamp?: Date;
  failureMessage?: string;
}
const TableMaintenanceJobStatusValue = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<TableMaintenanceJobStatusValue>;
export type TableMaintenanceJobStatus = {
  [key in TableMaintenanceJobType]?: TableMaintenanceJobStatusValue;
};
const TableMaintenanceJobStatus = /*@__PURE__*/ __L.at(__c9, 5);
export interface GetTableMaintenanceJobStatusResponse {
  tableARN: string;
  status: { [key: string]: TableMaintenanceJobStatusValue | undefined };
}
const GetTableMaintenanceJobStatusResponse = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<GetTableMaintenanceJobStatusResponse>;
export interface GetTableMetadataLocationRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
}
const GetTableMetadataLocationRequest = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<GetTableMetadataLocationRequest>;
export interface GetTableMetadataLocationResponse {
  versionToken: string;
  metadataLocation?: string;
  warehouseLocation: string;
}
const GetTableMetadataLocationResponse = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<GetTableMetadataLocationResponse>;
export interface GetTablePolicyRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
}
const GetTablePolicyRequest = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<GetTablePolicyRequest>;
export interface GetTablePolicyResponse {
  resourcePolicy: string;
}
const GetTablePolicyResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<GetTablePolicyResponse>;
export interface GetTableRecordExpirationConfigurationRequest {
  tableArn: string;
}
const GetTableRecordExpirationConfigurationRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<GetTableRecordExpirationConfigurationRequest>;
export type TableRecordExpirationStatus = "enabled" | "disabled" | (string & {});
const TableRecordExpirationStatus = S.String;

export interface TableRecordExpirationSettings {
  days?: number;
}
const TableRecordExpirationSettings = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<TableRecordExpirationSettings>;
export interface TableRecordExpirationConfigurationValue {
  status?: TableRecordExpirationStatus;
  settings?: TableRecordExpirationSettings;
}
const TableRecordExpirationConfigurationValue = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<TableRecordExpirationConfigurationValue>;
export interface GetTableRecordExpirationConfigurationResponse {
  configuration: TableRecordExpirationConfigurationValue;
}
const GetTableRecordExpirationConfigurationResponse = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<GetTableRecordExpirationConfigurationResponse>;
export interface GetTableRecordExpirationJobStatusRequest {
  tableArn: string;
}
const GetTableRecordExpirationJobStatusRequest = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<GetTableRecordExpirationJobStatusRequest>;
export type TableRecordExpirationJobStatus =
  | "NotYetRun"
  | "Successful"
  | "Failed"
  | "Disabled"
  | (string & {});
const TableRecordExpirationJobStatus = S.String;

export interface TableRecordExpirationJobMetrics {
  deletedDataFiles?: number;
  deletedRecords?: number;
  removedFilesSize?: number;
}
const TableRecordExpirationJobMetrics = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<TableRecordExpirationJobMetrics>;
export interface GetTableRecordExpirationJobStatusResponse {
  status: TableRecordExpirationJobStatus;
  lastRunTimestamp?: Date;
  failureMessage?: string;
  metrics?: TableRecordExpirationJobMetrics;
}
const GetTableRecordExpirationJobStatusResponse = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<GetTableRecordExpirationJobStatusResponse>;
export interface GetTableReplicationRequest {
  tableArn: string;
}
const GetTableReplicationRequest = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<GetTableReplicationRequest>;
export interface TableReplicationRule {
  destinations: ReplicationDestination[];
}
const TableReplicationRule = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<TableReplicationRule>;
export type TableReplicationRules = TableReplicationRule[];
const TableReplicationRules = /*@__PURE__*/ __L.at(__c11, 4);
export interface TableReplicationConfiguration {
  role: string;
  rules: TableReplicationRule[];
}
const TableReplicationConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<TableReplicationConfiguration>;
export interface GetTableReplicationResponse {
  versionToken: string;
  configuration: TableReplicationConfiguration;
}
const GetTableReplicationResponse = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<GetTableReplicationResponse>;
export interface GetTableReplicationStatusRequest {
  tableArn: string;
}
const GetTableReplicationStatusRequest = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<GetTableReplicationStatusRequest>;
export type ReplicationStatus = "pending" | "completed" | "failed" | (string & {});
const ReplicationStatus = S.String;

export interface LastSuccessfulReplicatedUpdate {
  metadataLocation: string;
  timestamp: Date;
}
const LastSuccessfulReplicatedUpdate = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<LastSuccessfulReplicatedUpdate>;
export interface ReplicationDestinationStatusModel {
  replicationStatus: ReplicationStatus;
  destinationTableBucketArn: string;
  destinationTableArn?: string;
  lastSuccessfulReplicatedUpdate?: LastSuccessfulReplicatedUpdate;
  failureMessage?: string;
}
const ReplicationDestinationStatusModel = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<ReplicationDestinationStatusModel>;
export type ReplicationDestinationStatuses = ReplicationDestinationStatusModel[];
const ReplicationDestinationStatuses = /*@__PURE__*/ __L.at(__c12, 2);
export interface GetTableReplicationStatusResponse {
  sourceTableArn: string;
  destinations: ReplicationDestinationStatusModel[];
}
const GetTableReplicationStatusResponse = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<GetTableReplicationStatusResponse>;
export interface GetTableStorageClassRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
}
const GetTableStorageClassRequest = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<GetTableStorageClassRequest>;
export interface GetTableStorageClassResponse {
  storageClassConfiguration: StorageClassConfiguration;
}
const GetTableStorageClassResponse =
  GetTableBucketStorageClassResponse as any as S.Schema<GetTableStorageClassResponse>;
export type NextToken = string;
export type ListNamespacesLimit = number;
export interface ListNamespacesRequest {
  tableBucketARN: string;
  prefix?: string;
  continuationToken?: string;
  maxNamespaces?: number;
}
const ListNamespacesRequest = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<ListNamespacesRequest>;
export interface NamespaceSummary {
  namespace: string[];
  createdAt: Date;
  createdBy: string;
  ownerAccountId: string;
  namespaceId?: string;
  tableBucketId?: string;
}
const NamespaceSummary = GetNamespaceResponse as any as S.Schema<NamespaceSummary>;
export type NamespaceSummaryList = NamespaceSummary[];
const NamespaceSummaryList = /*@__PURE__*/ __L.at(__c12, 6);
export interface ListNamespacesResponse {
  namespaces: NamespaceSummary[];
  continuationToken?: string;
}
const ListNamespacesResponse = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<ListNamespacesResponse>;
export type ListTableBucketsLimit = number;
export interface ListTableBucketsRequest {
  prefix?: string;
  continuationToken?: string;
  maxBuckets?: number;
  type?: TableBucketType;
}
const ListTableBucketsRequest = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<ListTableBucketsRequest>;
export interface TableBucketSummary {
  arn: string;
  name: string;
  ownerAccountId: string;
  createdAt: Date;
  tableBucketId?: string;
  type?: TableBucketType;
}
const TableBucketSummary = GetTableBucketResponse as any as S.Schema<TableBucketSummary>;
export type TableBucketSummaryList = TableBucketSummary[];
const TableBucketSummaryList = /*@__PURE__*/ __L.at(__c13, 1);
export interface ListTableBucketsResponse {
  tableBuckets: TableBucketSummary[];
  continuationToken?: string;
}
const ListTableBucketsResponse = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<ListTableBucketsResponse>;
export type ListTablesLimit = number;
export interface ListTablesRequest {
  tableBucketARN: string;
  namespace?: string;
  prefix?: string;
  continuationToken?: string;
  maxTables?: number;
}
const ListTablesRequest = /*@__PURE__*/ __L.at(__c13, 3) as any as S.Schema<ListTablesRequest>;
export interface TableSummary {
  namespace: string[];
  name: string;
  type: TableType;
  tableARN: string;
  createdAt: Date;
  modifiedAt: Date;
  managedByService?: string;
  namespaceId?: string;
  tableBucketId?: string;
}
const TableSummary = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<TableSummary>;
export type TableSummaryList = TableSummary[];
const TableSummaryList = /*@__PURE__*/ __L.at(__c13, 5);
export interface ListTablesResponse {
  tables: TableSummary[];
  continuationToken?: string;
}
const ListTablesResponse = /*@__PURE__*/ __L.at(__c13, 6) as any as S.Schema<ListTablesResponse>;
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface PutTableBucketEncryptionRequest {
  tableBucketARN: string;
  encryptionConfiguration: EncryptionConfiguration;
}
const PutTableBucketEncryptionRequest = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<PutTableBucketEncryptionRequest>;
export interface PutTableBucketEncryptionResponse {}
const PutTableBucketEncryptionResponse =
  DeleteTableBucketEncryptionResponse as any as S.Schema<PutTableBucketEncryptionResponse>;
export interface PutTableBucketMaintenanceConfigurationRequest {
  tableBucketARN: string;
  type: TableBucketMaintenanceType;
  value: TableBucketMaintenanceConfigurationValue;
}
const PutTableBucketMaintenanceConfigurationRequest = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<PutTableBucketMaintenanceConfigurationRequest>;
export interface PutTableBucketMaintenanceConfigurationResponse {}
const PutTableBucketMaintenanceConfigurationResponse =
  DeleteTableBucketEncryptionResponse as any as S.Schema<PutTableBucketMaintenanceConfigurationResponse>;
export interface PutTableBucketMetricsConfigurationRequest {
  tableBucketARN: string;
}
const PutTableBucketMetricsConfigurationRequest = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<PutTableBucketMetricsConfigurationRequest>;
export interface PutTableBucketMetricsConfigurationResponse {}
const PutTableBucketMetricsConfigurationResponse =
  DeleteTableBucketEncryptionResponse as any as S.Schema<PutTableBucketMetricsConfigurationResponse>;
export interface PutTableBucketPolicyRequest {
  tableBucketARN: string;
  resourcePolicy: string;
}
const PutTableBucketPolicyRequest = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<PutTableBucketPolicyRequest>;
export interface PutTableBucketPolicyResponse {}
const PutTableBucketPolicyResponse =
  DeleteNamespaceResponse as any as S.Schema<PutTableBucketPolicyResponse>;
export interface PutTableBucketReplicationRequest {
  tableBucketARN: string;
  versionToken?: string;
  configuration: TableBucketReplicationConfiguration;
}
const PutTableBucketReplicationRequest = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<PutTableBucketReplicationRequest>;
export interface PutTableBucketReplicationResponse {
  versionToken: string;
  status: string;
}
const PutTableBucketReplicationResponse = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<PutTableBucketReplicationResponse>;
export interface PutTableBucketStorageClassRequest {
  tableBucketARN: string;
  storageClassConfiguration: StorageClassConfiguration;
}
const PutTableBucketStorageClassRequest = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<PutTableBucketStorageClassRequest>;
export interface PutTableBucketStorageClassResponse {}
const PutTableBucketStorageClassResponse =
  DeleteTableBucketEncryptionResponse as any as S.Schema<PutTableBucketStorageClassResponse>;
export interface PutTableMaintenanceConfigurationRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
  type: TableMaintenanceType;
  value: TableMaintenanceConfigurationValue;
}
const PutTableMaintenanceConfigurationRequest = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<PutTableMaintenanceConfigurationRequest>;
export interface PutTableMaintenanceConfigurationResponse {}
const PutTableMaintenanceConfigurationResponse =
  DeleteTableBucketEncryptionResponse as any as S.Schema<PutTableMaintenanceConfigurationResponse>;
export interface PutTablePolicyRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
  resourcePolicy: string;
}
const PutTablePolicyRequest = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<PutTablePolicyRequest>;
export interface PutTablePolicyResponse {}
const PutTablePolicyResponse = DeleteNamespaceResponse as any as S.Schema<PutTablePolicyResponse>;
export interface PutTableRecordExpirationConfigurationRequest {
  tableArn: string;
  value: TableRecordExpirationConfigurationValue;
}
const PutTableRecordExpirationConfigurationRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<PutTableRecordExpirationConfigurationRequest>;
export interface PutTableRecordExpirationConfigurationResponse {}
const PutTableRecordExpirationConfigurationResponse =
  DeleteTableBucketEncryptionResponse as any as S.Schema<PutTableRecordExpirationConfigurationResponse>;
export interface PutTableReplicationRequest {
  tableArn: string;
  versionToken?: string;
  configuration: TableReplicationConfiguration;
}
const PutTableReplicationRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<PutTableReplicationRequest>;
export interface PutTableReplicationResponse {
  versionToken: string;
  status: string;
}
const PutTableReplicationResponse =
  PutTableBucketReplicationResponse as any as S.Schema<PutTableReplicationResponse>;
export interface RenameTableRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
  newNamespaceName?: string;
  newName?: string;
  versionToken?: string;
}
const RenameTableRequest = /*@__PURE__*/ __L.at(__c15, 4) as any as S.Schema<RenameTableRequest>;
export interface RenameTableResponse {}
const RenameTableResponse = DeleteNamespaceResponse as any as S.Schema<RenameTableResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c15, 5) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteNamespaceResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = NamespaceList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteNamespaceResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateTableMetadataLocationRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
  versionToken: string;
  metadataLocation: string;
}
const UpdateTableMetadataLocationRequest = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<UpdateTableMetadataLocationRequest>;
export interface UpdateTableMetadataLocationResponse {
  name: string;
  tableARN: string;
  namespace: string[];
  versionToken: string;
  metadataLocation: string;
}
const UpdateTableMetadataLocationResponse = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<UpdateTableMetadataLocationResponse>;
export type ErrorMessage = string;
export type CreateNamespaceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a namespace. A namespace is a logical grouping of tables within your table bucket, which you can use to organize tables. For more information, see Create a namespace in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:CreateNamespace` permission to use this operation.
 */
export const createNamespace: API.OperationMethod<
  CreateNamespaceRequest,
  CreateNamespaceResponse,
  CreateNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateNamespaceRequest,
  output: CreateNamespaceResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateNamespace",
}));

export type CreateTableError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new table associated with the given namespace in a table bucket. For more information, see Creating an Amazon S3 table in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * - You must have the `s3tables:CreateTable` permission to use this operation.
 *
 * - If you use this operation with the optional `metadata` request parameter you must have the `s3tables:PutTableData` permission.
 *
 * - If you use this operation with the optional `encryptionConfiguration` request parameter you must have the `s3tables:PutTableEncryption` permission.
 *
 * - If you use this operation with the `storageClassConfiguration` request parameter, you must have the `s3tables:PutTableStorageClass` permission.
 *
 * - To create a table with tags, you must have the `s3tables:TagResource` permission in addition to `s3tables:CreateTable` permission.
 *
 * Additionally, If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see Permissions requirements for S3 Tables SSE-KMS encryption.
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
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTable",
}));

export type CreateTableBucketError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a table bucket. For more information, see Creating a table bucket in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * - You must have the `s3tables:CreateTableBucket` permission to use this operation.
 *
 * - If you use this operation with the optional `encryptionConfiguration` parameter you must have the `s3tables:PutTableBucketEncryption` permission.
 *
 * - If you use this operation with the `storageClassConfiguration` request parameter, you must have the `s3tables:PutTableBucketStorageClass` permission.
 *
 * - To create a table bucket with tags, you must have the `s3tables:TagResource` permission in addition to `s3tables:CreateTableBucket` permission.
 */
export const createTableBucket: API.OperationMethod<
  CreateTableBucketRequest,
  CreateTableBucketResponse,
  CreateTableBucketError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTableBucketRequest,
  output: CreateTableBucketResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTableBucket",
}));

export type DeleteNamespaceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a namespace. For more information, see Delete a namespace in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:DeleteNamespace` permission to use this operation.
 */
export const deleteNamespace: API.OperationMethod<
  DeleteNamespaceRequest,
  DeleteNamespaceResponse,
  DeleteNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteNamespaceRequest,
  output: DeleteNamespaceResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteNamespace",
}));

export type DeleteTableError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a table. For more information, see Deleting an Amazon S3 table in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:DeleteTable` permission to use this operation.
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
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTable",
}));

export type DeleteTableBucketError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a table bucket. For more information, see Deleting a table bucket in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:DeleteTableBucket` permission to use this operation.
 */
export const deleteTableBucket: API.OperationMethod<
  DeleteTableBucketRequest,
  DeleteTableBucketResponse,
  DeleteTableBucketError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTableBucketRequest,
  output: DeleteTableBucketResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTableBucket",
}));

export type DeleteTableBucketEncryptionError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes the encryption configuration for a table bucket.
 *
 * ### Permissions
 *
 * You must have the `s3tables:DeleteTableBucketEncryption` permission to use this operation.
 */
export const deleteTableBucketEncryption: API.OperationMethod<
  DeleteTableBucketEncryptionRequest,
  DeleteTableBucketEncryptionResponse,
  DeleteTableBucketEncryptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTableBucketEncryptionRequest,
  output: DeleteTableBucketEncryptionResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTableBucketEncryption",
}));

export type DeleteTableBucketMetricsConfigurationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes the metrics configuration for a table bucket.
 *
 * ### Permissions
 *
 * You must have the `s3tables:DeleteTableBucketMetricsConfiguration` permission to use this operation.
 */
export const deleteTableBucketMetricsConfiguration: API.OperationMethod<
  DeleteTableBucketMetricsConfigurationRequest,
  DeleteTableBucketMetricsConfigurationResponse,
  DeleteTableBucketMetricsConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTableBucketMetricsConfigurationRequest,
  output: DeleteTableBucketMetricsConfigurationResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTableBucketMetricsConfiguration",
}));

export type DeleteTableBucketPolicyError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a table bucket policy. For more information, see Deleting a table bucket policy in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:DeleteTableBucketPolicy` permission to use this operation.
 */
export const deleteTableBucketPolicy: API.OperationMethod<
  DeleteTableBucketPolicyRequest,
  DeleteTableBucketPolicyResponse,
  DeleteTableBucketPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTableBucketPolicyRequest,
  output: DeleteTableBucketPolicyResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTableBucketPolicy",
}));

export type DeleteTableBucketReplicationError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes the replication configuration for a table bucket. After deletion, new table updates will no longer be replicated to destination buckets, though existing replicated tables will remain in destination buckets.
 *
 * ### Permissions
 *
 * You must have the `s3tables:DeleteTableBucketReplication` permission to use this operation.
 */
export const deleteTableBucketReplication: API.OperationMethod<
  DeleteTableBucketReplicationRequest,
  DeleteTableBucketReplicationResponse,
  DeleteTableBucketReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTableBucketReplicationRequest,
  output: DeleteTableBucketReplicationResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTableBucketReplication",
}));

export type DeleteTablePolicyError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a table policy. For more information, see Deleting a table policy in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:DeleteTablePolicy` permission to use this operation.
 */
export const deleteTablePolicy: API.OperationMethod<
  DeleteTablePolicyRequest,
  DeleteTablePolicyResponse,
  DeleteTablePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTablePolicyRequest,
  output: DeleteTablePolicyResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTablePolicy",
}));

export type DeleteTableReplicationError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes the replication configuration for a specific table. After deletion, new updates to this table will no longer be replicated to destination tables, though existing replicated copies will remain in destination buckets.
 *
 * ### Permissions
 *
 * You must have the `s3tables:DeleteTableReplication` permission to use this operation.
 */
export const deleteTableReplication: API.OperationMethod<
  DeleteTableReplicationRequest,
  DeleteTableReplicationResponse,
  DeleteTableReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTableReplicationRequest,
  output: DeleteTableReplicationResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTableReplication",
}));

export type GetNamespaceError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets details about a namespace. For more information, see Table namespaces in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetNamespace` permission to use this operation.
 */
export const getNamespace: API.OperationMethod<
  GetNamespaceRequest,
  GetNamespaceResponse,
  GetNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetNamespaceRequest,
  output: GetNamespaceResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNamespace",
}));

export type GetTableError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets details about a table. For more information, see S3 Tables in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTable` permission to use this operation.
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
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTable",
}));

export type GetTableBucketError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets details on a table bucket. For more information, see Viewing details about an Amazon S3 table bucket in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableBucket` permission to use this operation.
 */
export const getTableBucket: API.OperationMethod<
  GetTableBucketRequest,
  GetTableBucketResponse,
  GetTableBucketError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableBucketRequest,
  output: GetTableBucketResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableBucket",
}));

export type GetTableBucketEncryptionError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the encryption configuration for a table bucket.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableBucketEncryption` permission to use this operation.
 */
export const getTableBucketEncryption: API.OperationMethod<
  GetTableBucketEncryptionRequest,
  GetTableBucketEncryptionResponse,
  GetTableBucketEncryptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableBucketEncryptionRequest,
  output: GetTableBucketEncryptionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableBucketEncryption",
}));

export type GetTableBucketMaintenanceConfigurationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets details about a maintenance configuration for a given table bucket. For more information, see Amazon S3 table bucket maintenance in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableBucketMaintenanceConfiguration` permission to use this operation.
 */
export const getTableBucketMaintenanceConfiguration: API.OperationMethod<
  GetTableBucketMaintenanceConfigurationRequest,
  GetTableBucketMaintenanceConfigurationResponse,
  GetTableBucketMaintenanceConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableBucketMaintenanceConfigurationRequest,
  output: GetTableBucketMaintenanceConfigurationResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableBucketMaintenanceConfiguration",
}));

export type GetTableBucketMetricsConfigurationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the metrics configuration for a table bucket.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableBucketMetricsConfiguration` permission to use this operation.
 */
export const getTableBucketMetricsConfiguration: API.OperationMethod<
  GetTableBucketMetricsConfigurationRequest,
  GetTableBucketMetricsConfigurationResponse,
  GetTableBucketMetricsConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableBucketMetricsConfigurationRequest,
  output: GetTableBucketMetricsConfigurationResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableBucketMetricsConfiguration",
}));

export type GetTableBucketPolicyError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets details about a table bucket policy. For more information, see Viewing a table bucket policy in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableBucketPolicy` permission to use this operation.
 */
export const getTableBucketPolicy: API.OperationMethod<
  GetTableBucketPolicyRequest,
  GetTableBucketPolicyResponse,
  GetTableBucketPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableBucketPolicyRequest,
  output: GetTableBucketPolicyResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableBucketPolicy",
}));

export type GetTableBucketReplicationError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the replication configuration for a table bucket.This operation returns the IAM role, `versionToken`, and replication rules that define how tables in this bucket are replicated to other buckets.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableBucketReplication` permission to use this operation.
 */
export const getTableBucketReplication: API.OperationMethod<
  GetTableBucketReplicationRequest,
  GetTableBucketReplicationResponse,
  GetTableBucketReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableBucketReplicationRequest,
  output: GetTableBucketReplicationResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableBucketReplication",
}));

export type GetTableBucketStorageClassError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the storage class configuration for a specific table. This allows you to view the storage class settings that apply to an individual table, which may differ from the table bucket's default configuration.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableBucketStorageClass` permission to use this operation.
 */
export const getTableBucketStorageClass: API.OperationMethod<
  GetTableBucketStorageClassRequest,
  GetTableBucketStorageClassResponse,
  GetTableBucketStorageClassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableBucketStorageClassRequest,
  output: GetTableBucketStorageClassResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableBucketStorageClass",
}));

export type GetTableEncryptionError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the encryption configuration for a table.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableEncryption` permission to use this operation.
 */
export const getTableEncryption: API.OperationMethod<
  GetTableEncryptionRequest,
  GetTableEncryptionResponse,
  GetTableEncryptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableEncryptionRequest,
  output: GetTableEncryptionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableEncryption",
}));

export type GetTableMaintenanceConfigurationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets details about the maintenance configuration of a table. For more information, see S3 Tables maintenance in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * - You must have the `s3tables:GetTableMaintenanceConfiguration` permission to use this operation.
 *
 * - You must have the `s3tables:GetTableData` permission to use set the compaction strategy to `sort` or `zorder`.
 */
export const getTableMaintenanceConfiguration: API.OperationMethod<
  GetTableMaintenanceConfigurationRequest,
  GetTableMaintenanceConfigurationResponse,
  GetTableMaintenanceConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableMaintenanceConfigurationRequest,
  output: GetTableMaintenanceConfigurationResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableMaintenanceConfiguration",
}));

export type GetTableMaintenanceJobStatusError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the status of a maintenance job for a table. For more information, see S3 Tables maintenance in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableMaintenanceJobStatus` permission to use this operation.
 */
export const getTableMaintenanceJobStatus: API.OperationMethod<
  GetTableMaintenanceJobStatusRequest,
  GetTableMaintenanceJobStatusResponse,
  GetTableMaintenanceJobStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableMaintenanceJobStatusRequest,
  output: GetTableMaintenanceJobStatusResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableMaintenanceJobStatus",
}));

export type GetTableMetadataLocationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the location of the table metadata.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableMetadataLocation` permission to use this operation.
 */
export const getTableMetadataLocation: API.OperationMethod<
  GetTableMetadataLocationRequest,
  GetTableMetadataLocationResponse,
  GetTableMetadataLocationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableMetadataLocationRequest,
  output: GetTableMetadataLocationResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableMetadataLocation",
}));

export type GetTablePolicyError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets details about a table policy. For more information, see Viewing a table policy in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTablePolicy` permission to use this operation.
 */
export const getTablePolicy: API.OperationMethod<
  GetTablePolicyRequest,
  GetTablePolicyResponse,
  GetTablePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTablePolicyRequest,
  output: GetTablePolicyResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTablePolicy",
}));

export type GetTableRecordExpirationConfigurationError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the expiration configuration settings for records in a table, and the status of the configuration. If the status of the configuration is `enabled`, records expire and are automatically removed from the table after the specified number of days.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableRecordExpirationConfiguration` permission to use this operation.
 */
export const getTableRecordExpirationConfiguration: API.OperationMethod<
  GetTableRecordExpirationConfigurationRequest,
  GetTableRecordExpirationConfigurationResponse,
  GetTableRecordExpirationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableRecordExpirationConfigurationRequest,
  output: GetTableRecordExpirationConfigurationResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableRecordExpirationConfiguration",
}));

export type GetTableRecordExpirationJobStatusError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the status, metrics, and details of the latest record expiration job for a table. This includes when the job ran, and whether it succeeded or failed. If the job ran successfully, this also includes statistics about the records that were removed.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableRecordExpirationJobStatus` permission to use this operation.
 */
export const getTableRecordExpirationJobStatus: API.OperationMethod<
  GetTableRecordExpirationJobStatusRequest,
  GetTableRecordExpirationJobStatusResponse,
  GetTableRecordExpirationJobStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableRecordExpirationJobStatusRequest,
  output: GetTableRecordExpirationJobStatusResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableRecordExpirationJobStatus",
}));

export type GetTableReplicationError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the replication configuration for a specific table.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableReplication` permission to use this operation.
 */
export const getTableReplication: API.OperationMethod<
  GetTableReplicationRequest,
  GetTableReplicationResponse,
  GetTableReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableReplicationRequest,
  output: GetTableReplicationResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableReplication",
}));

export type GetTableReplicationStatusError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the replication status for a table, including the status of replication to each destination. This operation provides visibility into replication health and progress.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableReplicationStatus` permission to use this operation.
 */
export const getTableReplicationStatus: API.OperationMethod<
  GetTableReplicationStatusRequest,
  GetTableReplicationStatusResponse,
  GetTableReplicationStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableReplicationStatusRequest,
  output: GetTableReplicationStatusResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableReplicationStatus",
}));

export type GetTableStorageClassError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the storage class configuration for a specific table. This allows you to view the storage class settings that apply to an individual table, which may differ from the table bucket's default configuration.
 *
 * ### Permissions
 *
 * You must have the `s3tables:GetTableStorageClass` permission to use this operation.
 */
export const getTableStorageClass: API.OperationMethod<
  GetTableStorageClassRequest,
  GetTableStorageClassResponse,
  GetTableStorageClassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableStorageClassRequest,
  output: GetTableStorageClassResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableStorageClass",
}));

export type ListNamespacesError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists the namespaces within a table bucket. For more information, see Table namespaces in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:ListNamespaces` permission to use this operation.
 */
export const listNamespaces: API.PaginatedOperationMethod<
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListNamespacesError,
  Credentials | HttpClient.HttpClient,
  NamespaceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListNamespacesRequest,
  output: ListNamespacesResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNamespaces",
  pagination: {
    inputToken: "continuationToken",
    outputToken: "continuationToken",
    items: "namespaces",
    pageSize: "maxNamespaces",
  } as const,
})) as any;

export type ListTableBucketsError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists table buckets for your account. For more information, see S3 Table buckets in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:ListTableBuckets` permission to use this operation.
 */
export const listTableBuckets: API.PaginatedOperationMethod<
  ListTableBucketsRequest,
  ListTableBucketsResponse,
  ListTableBucketsError,
  Credentials | HttpClient.HttpClient,
  TableBucketSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTableBucketsRequest,
  output: ListTableBucketsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTableBuckets",
  pagination: {
    inputToken: "continuationToken",
    outputToken: "continuationToken",
    items: "tableBuckets",
    pageSize: "maxBuckets",
  } as const,
})) as any;

export type ListTablesError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * List tables in the given table bucket. For more information, see S3 Tables in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:ListTables` permission to use this operation.
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
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTables",
  pagination: {
    inputToken: "continuationToken",
    outputToken: "continuationToken",
    items: "tables",
    pageSize: "maxTables",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists all of the tags applied to a specified Amazon S3 Tables resource. Each tag is a label consisting of a key and value pair. Tags can help you organize, track costs for, and control access to resources.
 *
 * For a list of S3 resources that support tagging, see Managing tags for Amazon S3 resources.
 *
 * ### Permissions
 *
 * For tables and table buckets, you must have the `s3tables:ListTagsForResource` permission to use this operation.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutTableBucketEncryptionError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Sets the encryption configuration for a table bucket.
 *
 * ### Permissions
 *
 * You must have the `s3tables:PutTableBucketEncryption` permission to use this operation.
 *
 * If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see Permissions requirements for S3 Tables SSE-KMS encryption in the *Amazon Simple Storage Service User Guide*.
 */
export const putTableBucketEncryption: API.OperationMethod<
  PutTableBucketEncryptionRequest,
  PutTableBucketEncryptionResponse,
  PutTableBucketEncryptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutTableBucketEncryptionRequest,
  output: PutTableBucketEncryptionResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTableBucketEncryption",
}));

export type PutTableBucketMaintenanceConfigurationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new maintenance configuration or replaces an existing maintenance configuration for a table bucket. For more information, see Amazon S3 table bucket maintenance in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:PutTableBucketMaintenanceConfiguration` permission to use this operation.
 */
export const putTableBucketMaintenanceConfiguration: API.OperationMethod<
  PutTableBucketMaintenanceConfigurationRequest,
  PutTableBucketMaintenanceConfigurationResponse,
  PutTableBucketMaintenanceConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutTableBucketMaintenanceConfigurationRequest,
  output: PutTableBucketMaintenanceConfigurationResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTableBucketMaintenanceConfiguration",
}));

export type PutTableBucketMetricsConfigurationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Sets the metrics configuration for a table bucket.
 *
 * ### Permissions
 *
 * You must have the `s3tables:PutTableBucketMetricsConfiguration` permission to use this operation.
 */
export const putTableBucketMetricsConfiguration: API.OperationMethod<
  PutTableBucketMetricsConfigurationRequest,
  PutTableBucketMetricsConfigurationResponse,
  PutTableBucketMetricsConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutTableBucketMetricsConfigurationRequest,
  output: PutTableBucketMetricsConfigurationResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTableBucketMetricsConfiguration",
}));

export type PutTableBucketPolicyError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new table bucket policy or replaces an existing table bucket policy for a table bucket. For more information, see Adding a table bucket policy in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:PutTableBucketPolicy` permission to use this operation.
 */
export const putTableBucketPolicy: API.OperationMethod<
  PutTableBucketPolicyRequest,
  PutTableBucketPolicyResponse,
  PutTableBucketPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutTableBucketPolicyRequest,
  output: PutTableBucketPolicyResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTableBucketPolicy",
}));

export type PutTableBucketReplicationError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates or updates the replication configuration for a table bucket. This operation defines how tables in the source bucket are replicated to destination buckets. Replication helps ensure data availability and disaster recovery across regions or accounts.
 *
 * ### Permissions
 *
 * - You must have the `s3tables:PutTableBucketReplication` permission to use this operation. The IAM role specified in the configuration must have permissions to read from the source bucket and write permissions to all destination buckets.
 *
 * - You must also have the following permissions:
 *
 * - `s3tables:GetTable` permission on the source table.
 *
 * - `s3tables:ListTables` permission on the bucket containing the table.
 *
 * - `s3tables:CreateTable` permission for the destination.
 *
 * - `s3tables:CreateNamespace` permission for the destination.
 *
 * - `s3tables:GetTableMaintenanceConfig` permission for the source bucket.
 *
 * - `s3tables:PutTableMaintenanceConfig` permission for the destination bucket.
 *
 * - You must have `iam:PassRole` permission with condition allowing roles to be passed to `replication.s3tables.amazonaws.com`.
 */
export const putTableBucketReplication: API.OperationMethod<
  PutTableBucketReplicationRequest,
  PutTableBucketReplicationResponse,
  PutTableBucketReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutTableBucketReplicationRequest,
  output: PutTableBucketReplicationResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTableBucketReplication",
}));

export type PutTableBucketStorageClassError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Sets or updates the storage class configuration for a table bucket. This configuration serves as the default storage class for all new tables created in the bucket, allowing you to optimize storage costs at the bucket level.
 *
 * ### Permissions
 *
 * You must have the `s3tables:PutTableBucketStorageClass` permission to use this operation.
 */
export const putTableBucketStorageClass: API.OperationMethod<
  PutTableBucketStorageClassRequest,
  PutTableBucketStorageClassResponse,
  PutTableBucketStorageClassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutTableBucketStorageClassRequest,
  output: PutTableBucketStorageClassResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTableBucketStorageClass",
}));

export type PutTableMaintenanceConfigurationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new maintenance configuration or replaces an existing maintenance configuration for a table. For more information, see S3 Tables maintenance in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:PutTableMaintenanceConfiguration` permission to use this operation.
 */
export const putTableMaintenanceConfiguration: API.OperationMethod<
  PutTableMaintenanceConfigurationRequest,
  PutTableMaintenanceConfigurationResponse,
  PutTableMaintenanceConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutTableMaintenanceConfigurationRequest,
  output: PutTableMaintenanceConfigurationResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTableMaintenanceConfiguration",
}));

export type PutTablePolicyError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new table policy or replaces an existing table policy for a table. For more information, see Adding a table policy in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:PutTablePolicy` permission to use this operation.
 */
export const putTablePolicy: API.OperationMethod<
  PutTablePolicyRequest,
  PutTablePolicyResponse,
  PutTablePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutTablePolicyRequest,
  output: PutTablePolicyResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTablePolicy",
}));

export type PutTableRecordExpirationConfigurationError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates or updates the expiration configuration settings for records in a table, including the status of the configuration. If you enable record expiration for a table, records expire and are automatically removed from the table after the number of days that you specify.
 *
 * ### Permissions
 *
 * You must have the `s3tables:PutTableRecordExpirationConfiguration` permission to use this operation.
 */
export const putTableRecordExpirationConfiguration: API.OperationMethod<
  PutTableRecordExpirationConfigurationRequest,
  PutTableRecordExpirationConfigurationResponse,
  PutTableRecordExpirationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutTableRecordExpirationConfigurationRequest,
  output: PutTableRecordExpirationConfigurationResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTableRecordExpirationConfiguration",
}));

export type PutTableReplicationError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates or updates the replication configuration for a specific table. This operation allows you to define table-level replication independently of bucket-level replication, providing granular control over which tables are replicated and where.
 *
 * ### Permissions
 *
 * - You must have the `s3tables:PutTableReplication` permission to use this operation. The IAM role specified in the configuration must have permissions to read from the source table and write to all destination tables.
 *
 * - You must also have the following permissions:
 *
 * - `s3tables:GetTable` permission on the source table being replicated.
 *
 * - `s3tables:CreateTable` permission for the destination.
 *
 * - `s3tables:CreateNamespace` permission for the destination.
 *
 * - `s3tables:GetTableMaintenanceConfig` permission for the source table.
 *
 * - `s3tables:PutTableMaintenanceConfig` permission for the destination table.
 *
 * - You must have `iam:PassRole` permission with condition allowing roles to be passed to `replication.s3tables.amazonaws.com`.
 */
export const putTableReplication: API.OperationMethod<
  PutTableReplicationRequest,
  PutTableReplicationResponse,
  PutTableReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutTableReplicationRequest,
  output: PutTableReplicationResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTableReplication",
}));

export type RenameTableError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Renames a table or a namespace. For more information, see S3 Tables in the *Amazon Simple Storage Service User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3tables:RenameTable` permission to use this operation.
 */
export const renameTable: API.OperationMethod<
  RenameTableRequest,
  RenameTableResponse,
  RenameTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RenameTableRequest,
  output: RenameTableResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RenameTable",
}));

export type TagResourceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Applies one or more user-defined tags to an Amazon S3 Tables resource or updates existing tags. Each tag is a label consisting of a key and value pair. Tags can help you organize, track costs for, and control access to your resources. You can add up to 50 tags for each S3 resource.
 *
 * For a list of S3 resources that support tagging, see Managing tags for Amazon S3 resources.
 *
 * ### Permissions
 *
 * For tables and table buckets, you must have the `s3tables:TagResource` permission to use this operation.
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
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Removes the specified user-defined tags from an Amazon S3 Tables resource. You can pass one or more tag keys.
 *
 * For a list of S3 resources that support tagging, see Managing tags for Amazon S3 resources.
 *
 * ### Permissions
 *
 * For tables and table buckets, you must have the `s3tables:UntagResource` permission to use this operation.
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
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateTableMetadataLocationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates the metadata location for a table. The metadata location of a table must be an S3 URI that begins with the table's warehouse location. The metadata location for an Apache Iceberg table must end with `.metadata.json`, or if the metadata file is Gzip-compressed, `.metadata.json.gz`.
 *
 * ### Permissions
 *
 * You must have the `s3tables:UpdateTableMetadataLocation` permission to use this operation.
 */
export const updateTableMetadataLocation: API.OperationMethod<
  UpdateTableMetadataLocationRequest,
  UpdateTableMetadataLocationResponse,
  UpdateTableMetadataLocationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTableMetadataLocationRequest,
  output: UpdateTableMetadataLocationResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTableMetadataLocation",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: NamespaceList,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/namespaces/{tableBucketARN}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateNamespaceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String, namespace: NamespaceList }),
      ).annotate({ identifier: "CreateNamespaceResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.Number),
          name: S.String,
          type: S.String,
          required: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "SchemaField" });
    case 4:
      return S.Array(SchemaField);
    case 5:
      return S.suspend(() => S.Struct({ fields: SchemaFieldList })).annotate({
        identifier: "IcebergSchema",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.Number,
          name: S.String,
          type: S.Any,
          required: S.Boolean,
          doc: S.optional(S.String),
        }),
      ).annotate({ identifier: "SchemaV2Field" });
    case 7:
      return S.Array(SchemaV2Field);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.Number);
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: SchemaV2FieldType,
          fields: SchemaV2FieldList,
          schemaId: S.optional(S.Number),
          identifierFieldIds: S.optional(IntegerList),
        }).pipe(
          S.encodeKeys({ schemaId: "schema-id", identifierFieldIds: "identifier-field-ids" }),
        ),
      ).annotate({ identifier: "IcebergSchemaV2" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sourceId: S.Number,
          transform: S.String,
          name: S.String,
          fieldId: S.optional(S.Number),
        }).pipe(S.encodeKeys({ sourceId: "source-id", fieldId: "field-id" })),
      ).annotate({ identifier: "IcebergPartitionField" });
    case 3:
      return S.Array(IcebergPartitionField);
    case 4:
      return S.suspend(() =>
        S.Struct({ fields: IcebergPartitionFieldList, specId: S.optional(S.Number) }).pipe(
          S.encodeKeys({ specId: "spec-id" }),
        ),
      ).annotate({ identifier: "IcebergPartitionSpec" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceId: S.Number,
          transform: S.String,
          direction: IcebergSortDirection,
          nullOrder: IcebergNullOrder,
        }).pipe(S.encodeKeys({ sourceId: "source-id", nullOrder: "null-order" })),
      ).annotate({ identifier: "IcebergSortField" });
    case 6:
      return S.Array(IcebergSortField);
    case 7:
      return S.suspend(() =>
        S.Struct({ orderId: S.Number, fields: IcebergSortFieldList }).pipe(
          S.encodeKeys({ orderId: "order-id" }),
        ),
      ).annotate({ identifier: "IcebergSortOrder" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          schema: S.optional(IcebergSchema),
          schemaV2: S.optional(IcebergSchemaV2),
          partitionSpec: S.optional(IcebergPartitionSpec),
          writeOrder: S.optional(IcebergSortOrder),
          properties: S.optional(TableProperties),
        }),
      ).annotate({ identifier: "IcebergMetadata" });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ iceberg: IcebergMetadata })]);
    case 3:
      return S.suspend(() =>
        S.Struct({ sseAlgorithm: SSEAlgorithm, kmsKeyArn: S.optional(S.String) }),
      ).annotate({ identifier: "EncryptionConfiguration" });
    case 4:
      return S.suspend(() => S.Struct({ storageClass: StorageClass })).annotate({
        identifier: "StorageClassConfiguration",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String,
          format: OpenTableFormat,
          metadata: S.optional(TableMetadata),
          encryptionConfiguration: S.optional(EncryptionConfiguration),
          storageClassConfiguration: S.optional(StorageClassConfiguration),
          tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/tables/{tableBucketARN}/{namespace}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateTableRequest" });
    case 7:
      return S.suspend(() => S.Struct({ tableARN: S.String, versionToken: S.String })).annotate({
        identifier: "CreateTableResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          encryptionConfiguration: S.optional(EncryptionConfiguration),
          storageClassConfiguration: S.optional(StorageClassConfiguration),
          tags: S.optional(Tags),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/buckets" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTableBucketRequest" });
    case 1:
      return S.suspend(() => S.Struct({ arn: S.String })).annotate({
        identifier: "CreateTableBucketResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/namespaces/{tableBucketARN}/{namespace}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteNamespaceRequest" });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteNamespaceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
          versionToken: S.optional(S.String).pipe(T.HttpQuery("versionToken")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tables/{tableBucketARN}/{namespace}/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTableRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/buckets/{tableBucketARN}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTableBucketRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/buckets/{tableBucketARN}/encryption" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTableBucketEncryptionRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteTableBucketEncryptionResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/buckets/{tableBucketARN}/metrics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTableBucketMetricsConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/buckets/{tableBucketARN}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTableBucketPolicyRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteTableBucketPolicyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpQuery("tableBucketARN")),
          versionToken: S.optional(S.String).pipe(T.HttpQuery("versionToken")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/table-bucket-replication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTableBucketReplicationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tables/{tableBucketARN}/{namespace}/{name}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTablePolicyRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          tableArn: S.String.pipe(T.HttpQuery("tableArn")),
          versionToken: S.String.pipe(T.HttpQuery("versionToken")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/table-replication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTableReplicationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/namespaces/{tableBucketARN}/{namespace}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetNamespaceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          namespace: NamespaceList,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          ownerAccountId: S.String,
          namespaceId: S.optional(S.String),
          tableBucketId: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetNamespaceResponse" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.optional(S.String).pipe(T.HttpQuery("tableBucketARN")),
          namespace: S.optional(S.String).pipe(T.HttpQuery("namespace")),
          name: S.optional(S.String).pipe(T.HttpQuery("name")),
          tableArn: S.optional(S.String).pipe(T.HttpQuery("tableArn")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/get-table" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetTableRequest" });
    case 1:
      return S.suspend(() => S.Struct({ sourceTableARN: S.String })).annotate({
        identifier: "ReplicationInformation",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ replicationInformation: S.optional(ReplicationInformation) }),
      ).annotate({ identifier: "ManagedTableInformation" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: TableType,
          tableARN: S.String,
          namespace: NamespaceList,
          namespaceId: S.optional(S.String),
          versionToken: S.String,
          metadataLocation: S.optional(S.String),
          warehouseLocation: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          managedByService: S.optional(S.String),
          modifiedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          modifiedBy: S.optional(S.String),
          ownerAccountId: S.String,
          format: OpenTableFormat,
          tableBucketId: S.optional(S.String),
          managedTableInformation: S.optional(ManagedTableInformation),
        }),
      ).annotate({ identifier: "GetTableResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/buckets/{tableBucketARN}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTableBucketRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.String,
          ownerAccountId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          tableBucketId: S.optional(S.String),
          type: S.optional(TableBucketType),
        }),
      ).annotate({ identifier: "GetTableBucketResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/buckets/{tableBucketARN}/encryption" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTableBucketEncryptionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ encryptionConfiguration: EncryptionConfiguration }),
      ).annotate({
        identifier: "GetTableBucketEncryptionResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/buckets/{tableBucketARN}/maintenance" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTableBucketMaintenanceConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ unreferencedDays: S.optional(S.Number), nonCurrentDays: S.optional(S.Number) }),
      ).annotate({
        identifier: "IcebergUnreferencedFileRemovalSettings",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          icebergUnreferencedFileRemoval: IcebergUnreferencedFileRemovalSettings,
        }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(MaintenanceStatus),
          settings: S.optional(TableBucketMaintenanceSettings),
        }),
      ).annotate({
        identifier: "TableBucketMaintenanceConfigurationValue",
      });
    case 4:
      return S.Record(
        TableBucketMaintenanceType,
        /*@__PURE__*/ TableBucketMaintenanceConfigurationValue.pipe(S.optional),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String, configuration: TableBucketMaintenanceConfiguration }),
      ).annotate({
        identifier: "GetTableBucketMaintenanceConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/buckets/{tableBucketARN}/metrics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTableBucketMetricsConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String, id: S.optional(S.String) }),
      ).annotate({
        identifier: "GetTableBucketMetricsConfigurationResponse",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/buckets/{tableBucketARN}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTableBucketPolicyRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ resourcePolicy: S.String })).annotate({
        identifier: "GetTableBucketPolicyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String.pipe(T.HttpQuery("tableBucketARN")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/table-bucket-replication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTableBucketReplicationRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ destinationTableBucketARN: S.String })).annotate({
        identifier: "ReplicationDestination",
      });
    case 4:
      return S.Array(ReplicationDestination);
    case 5:
      return S.suspend(() => S.Struct({ destinations: ReplicationDestinations })).annotate({
        identifier: "TableBucketReplicationRule",
      });
    case 6:
      return S.Array(TableBucketReplicationRule);
    case 7:
      return S.suspend(() =>
        S.Struct({ role: S.String, rules: TableBucketReplicationRules }),
      ).annotate({
        identifier: "TableBucketReplicationConfiguration",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ versionToken: S.String, configuration: TableBucketReplicationConfiguration }),
      ).annotate({
        identifier: "GetTableBucketReplicationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/buckets/{tableBucketARN}/storage-class" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTableBucketStorageClassRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ storageClassConfiguration: StorageClassConfiguration }),
      ).annotate({
        identifier: "GetTableBucketStorageClassResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/tables/{tableBucketARN}/{namespace}/{name}/encryption",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTableEncryptionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/tables/{tableBucketARN}/{namespace}/{name}/maintenance",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTableMaintenanceConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          targetFileSizeMB: S.optional(S.Number),
          strategy: S.optional(IcebergCompactionStrategy),
        }),
      ).annotate({
        identifier: "IcebergCompactionSettings",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          minSnapshotsToKeep: S.optional(S.Number),
          maxSnapshotAgeHours: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "IcebergSnapshotManagementSettings",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ icebergCompaction: IcebergCompactionSettings }),
        /*@__PURE__*/ S.Struct({ icebergSnapshotManagement: IcebergSnapshotManagementSettings }),
      ]);
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(MaintenanceStatus),
          settings: S.optional(TableMaintenanceSettings),
        }),
      ).annotate({
        identifier: "TableMaintenanceConfigurationValue",
      });
    case 1:
      return S.Record(
        TableMaintenanceType,
        /*@__PURE__*/ TableMaintenanceConfigurationValue.pipe(S.optional),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({ tableARN: S.String, configuration: TableMaintenanceConfiguration }),
      ).annotate({
        identifier: "GetTableMaintenanceConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/tables/{tableBucketARN}/{namespace}/{name}/maintenance-job-status",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTableMaintenanceJobStatusRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          status: JobStatus,
          lastRunTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          failureMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TableMaintenanceJobStatusValue",
      });
    case 5:
      return S.Record(
        TableMaintenanceJobType,
        /*@__PURE__*/ TableMaintenanceJobStatusValue.pipe(S.optional),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ tableARN: S.String, status: TableMaintenanceJobStatus }),
      ).annotate({
        identifier: "GetTableMaintenanceJobStatusResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/tables/{tableBucketARN}/{namespace}/{name}/metadata-location",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTableMetadataLocationRequest",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          versionToken: S.String,
          metadataLocation: S.optional(S.String),
          warehouseLocation: S.String,
        }),
      ).annotate({
        identifier: "GetTableMetadataLocationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tables/{tableBucketARN}/{namespace}/{name}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTablePolicyRequest" });
    case 2:
      return S.suspend(() => S.Struct({ resourcePolicy: S.String })).annotate({
        identifier: "GetTablePolicyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ tableArn: S.String.pipe(T.HttpQuery("tableArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/table-record-expiration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTableRecordExpirationConfigurationRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ days: S.optional(S.Number) })).annotate({
        identifier: "TableRecordExpirationSettings",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(TableRecordExpirationStatus),
          settings: S.optional(TableRecordExpirationSettings),
        }),
      ).annotate({
        identifier: "TableRecordExpirationConfigurationValue",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ configuration: TableRecordExpirationConfigurationValue }),
      ).annotate({
        identifier: "GetTableRecordExpirationConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ tableArn: S.String.pipe(T.HttpQuery("tableArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/table-record-expiration-job-status" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTableRecordExpirationJobStatusRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          deletedDataFiles: S.optional(S.Number),
          deletedRecords: S.optional(S.Number),
          removedFilesSize: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "TableRecordExpirationJobMetrics",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          status: TableRecordExpirationJobStatus,
          lastRunTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          failureMessage: S.optional(S.String),
          metrics: S.optional(TableRecordExpirationJobMetrics),
        }),
      ).annotate({
        identifier: "GetTableRecordExpirationJobStatusResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ tableArn: S.String.pipe(T.HttpQuery("tableArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/table-replication" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetTableReplicationRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ destinations: ReplicationDestinations })).annotate({
        identifier: "TableReplicationRule",
      });
    case 4:
      return S.Array(TableReplicationRule);
    case 5:
      return S.suspend(() => S.Struct({ role: S.String, rules: TableReplicationRules })).annotate({
        identifier: "TableReplicationConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ versionToken: S.String, configuration: TableReplicationConfiguration }),
      ).annotate({
        identifier: "GetTableReplicationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ tableArn: S.String.pipe(T.HttpQuery("tableArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/replication-status" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTableReplicationStatusRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          metadataLocation: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "LastSuccessfulReplicatedUpdate",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          replicationStatus: ReplicationStatus,
          destinationTableBucketArn: S.String,
          destinationTableArn: S.optional(S.String),
          lastSuccessfulReplicatedUpdate: S.optional(LastSuccessfulReplicatedUpdate),
          failureMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ReplicationDestinationStatusModel",
      });
    case 2:
      return S.Array(ReplicationDestinationStatusModel);
    case 3:
      return S.suspend(() =>
        S.Struct({ sourceTableArn: S.String, destinations: ReplicationDestinationStatuses }),
      ).annotate({
        identifier: "GetTableReplicationStatusResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/tables/{tableBucketARN}/{namespace}/{name}/storage-class",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTableStorageClassRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          prefix: S.optional(S.String).pipe(T.HttpQuery("prefix")),
          continuationToken: S.optional(S.String).pipe(T.HttpQuery("continuationToken")),
          maxNamespaces: S.optional(S.Number).pipe(T.HttpQuery("maxNamespaces")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/namespaces/{tableBucketARN}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListNamespacesRequest" });
    case 6:
      return S.Array(NamespaceSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ namespaces: NamespaceSummaryList, continuationToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListNamespacesResponse" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          prefix: S.optional(S.String).pipe(T.HttpQuery("prefix")),
          continuationToken: S.optional(S.String).pipe(T.HttpQuery("continuationToken")),
          maxBuckets: S.optional(S.Number).pipe(T.HttpQuery("maxBuckets")),
          type: S.optional(TableBucketType).pipe(T.HttpQuery("type")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/buckets" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTableBucketsRequest" });
    case 1:
      return S.Array(TableBucketSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ tableBuckets: TableBucketSummaryList, continuationToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTableBucketsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.optional(S.String).pipe(T.HttpQuery("namespace")),
          prefix: S.optional(S.String).pipe(T.HttpQuery("prefix")),
          continuationToken: S.optional(S.String).pipe(T.HttpQuery("continuationToken")),
          maxTables: S.optional(S.Number).pipe(T.HttpQuery("maxTables")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tables/{tableBucketARN}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTablesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          namespace: NamespaceList,
          name: S.String,
          type: TableType,
          tableARN: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          modifiedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          managedByService: S.optional(S.String),
          namespaceId: S.optional(S.String),
          tableBucketId: S.optional(S.String),
        }),
      ).annotate({ identifier: "TableSummary" });
    case 5:
      return S.Array(TableSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ tables: TableSummaryList, continuationToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTablesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/tag/{resourceArn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ tags: S.optional(Tags) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          encryptionConfiguration: EncryptionConfiguration,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/buckets/{tableBucketARN}/encryption" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutTableBucketEncryptionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          type: TableBucketMaintenanceType.pipe(T.HttpLabel("type")),
          value: TableBucketMaintenanceConfigurationValue,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/buckets/{tableBucketARN}/maintenance/{type}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutTableBucketMaintenanceConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/buckets/{tableBucketARN}/metrics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutTableBucketMetricsConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          resourcePolicy: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/buckets/{tableBucketARN}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutTableBucketPolicyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpQuery("tableBucketARN")),
          versionToken: S.optional(S.String).pipe(T.HttpQuery("versionToken")),
          configuration: TableBucketReplicationConfiguration,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/table-bucket-replication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutTableBucketReplicationRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ versionToken: S.String, status: S.String })).annotate({
        identifier: "PutTableBucketReplicationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          storageClassConfiguration: StorageClassConfiguration,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/buckets/{tableBucketARN}/storage-class" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutTableBucketStorageClassRequest",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
          type: TableMaintenanceType.pipe(T.HttpLabel("type")),
          value: TableMaintenanceConfigurationValue,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/tables/{tableBucketARN}/{namespace}/{name}/maintenance/{type}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutTableMaintenanceConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
          resourcePolicy: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/tables/{tableBucketARN}/{namespace}/{name}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutTablePolicyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          tableArn: S.String.pipe(T.HttpQuery("tableArn")),
          value: TableRecordExpirationConfigurationValue,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/table-record-expiration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutTableRecordExpirationConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          tableArn: S.String.pipe(T.HttpQuery("tableArn")),
          versionToken: S.optional(S.String).pipe(T.HttpQuery("versionToken")),
          configuration: TableReplicationConfiguration,
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/table-replication" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutTableReplicationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
          newNamespaceName: S.optional(S.String),
          newName: S.optional(S.String),
          versionToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/tables/{tableBucketARN}/{namespace}/{name}/rename" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RenameTableRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: Tags }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tag/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tag/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          tableBucketARN: S.String.pipe(T.HttpLabel("tableBucketARN")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
          versionToken: S.String,
          metadataLocation: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/tables/{tableBucketARN}/{namespace}/{name}/metadata-location",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateTableMetadataLocationRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          tableARN: S.String,
          namespace: NamespaceList,
          versionToken: S.String,
          metadataLocation: S.String,
        }),
      ).annotate({
        identifier: "UpdateTableMetadataLocationResponse",
      });
  }
}
