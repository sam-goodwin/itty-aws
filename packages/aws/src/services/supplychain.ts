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
  sdkId: "SupplyChain",
  serviceShapeName: "GalaxyPublicAPIGateway",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "scn" });
const ver = /*@__PURE__*/ T.ServiceVersion("2024-01-01");
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
              `https://scn-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://scn-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://scn.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://scn.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type UUID = string;
export type ConfigurationS3Uri = string;
export type ClientToken = string;
export interface CreateBillOfMaterialsImportJobRequest {
  instanceId: string;
  s3uri: string;
  clientToken?: string;
}
export interface CreateBillOfMaterialsImportJobResponse {
  jobId: string;
}
export type DataIntegrationFlowName = string;
export type DataIntegrationFlowSourceType = "S3" | "DATASET" | (string & {});
export type DataIntegrationFlowSourceName = string;
export type S3BucketName = string;
export type DataIntegrationFlowS3Prefix = string;
export type DataIntegrationFlowFileType = "CSV" | "PARQUET" | "JSON" | (string & {});
export interface DataIntegrationFlowS3Options {
  fileType?: DataIntegrationFlowFileType;
}
export interface DataIntegrationFlowS3SourceConfiguration {
  bucketName: string;
  prefix: string;
  options?: DataIntegrationFlowS3Options;
}
export type DatasetIdentifier = string;
export type DataIntegrationFlowLoadType = "INCREMENTAL" | "REPLACE" | (string & {});
export type DataIntegrationFlowDedupeStrategyType = "FIELD_PRIORITY" | (string & {});
export type DataIntegrationFlowFieldPriorityDedupeFieldName = string;
export type DataIntegrationFlowFieldPriorityDedupeSortOrder = "ASC" | "DESC" | (string & {});
export interface DataIntegrationFlowFieldPriorityDedupeField {
  name: string;
  sortOrder: DataIntegrationFlowFieldPriorityDedupeSortOrder;
}
export type DataIntegrationFlowFieldPriorityDedupeFieldList =
  DataIntegrationFlowFieldPriorityDedupeField[];
export interface DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration {
  fields: DataIntegrationFlowFieldPriorityDedupeField[];
}
export interface DataIntegrationFlowDedupeStrategy {
  type: DataIntegrationFlowDedupeStrategyType;
  fieldPriority?: DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration;
}
export interface DataIntegrationFlowDatasetOptions {
  loadType?: DataIntegrationFlowLoadType;
  dedupeRecords?: boolean;
  dedupeStrategy?: DataIntegrationFlowDedupeStrategy;
}
export interface DataIntegrationFlowDatasetSourceConfiguration {
  datasetIdentifier: string;
  options?: DataIntegrationFlowDatasetOptions;
}
export interface DataIntegrationFlowSource {
  sourceType: DataIntegrationFlowSourceType;
  sourceName: string;
  s3Source?: DataIntegrationFlowS3SourceConfiguration;
  datasetSource?: DataIntegrationFlowDatasetSourceConfiguration;
}
export type DataIntegrationFlowSourceList = DataIntegrationFlowSource[];
export type DataIntegrationFlowTransformationType = "SQL" | "NONE" | (string & {});
export type DataIntegrationFlowSQLQuery = string | redacted.Redacted<string>;
export interface DataIntegrationFlowSQLTransformationConfiguration {
  query: string | redacted.Redacted<string>;
}
export interface DataIntegrationFlowTransformation {
  transformationType: DataIntegrationFlowTransformationType;
  sqlTransformation?: DataIntegrationFlowSQLTransformationConfiguration;
}
export type DataIntegrationFlowTargetType = "S3" | "DATASET" | (string & {});
export interface DataIntegrationFlowS3TargetConfiguration {
  bucketName: string;
  prefix: string;
  options?: DataIntegrationFlowS3Options;
}
export interface DataIntegrationFlowDatasetTargetConfiguration {
  datasetIdentifier: string;
  options?: DataIntegrationFlowDatasetOptions;
}
export interface DataIntegrationFlowTarget {
  targetType: DataIntegrationFlowTargetType;
  s3Target?: DataIntegrationFlowS3TargetConfiguration;
  datasetTarget?: DataIntegrationFlowDatasetTargetConfiguration;
}
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateDataIntegrationFlowRequest {
  instanceId: string;
  name: string;
  sources: DataIntegrationFlowSource[];
  transformation: DataIntegrationFlowTransformation;
  target: DataIntegrationFlowTarget;
  tags?: { [key: string]: string | undefined };
}
export interface CreateDataIntegrationFlowResponse {
  instanceId: string;
  name: string;
}
export type DataLakeNamespaceName = string;
export type DataLakeDatasetName = string;
export type DataLakeDatasetSchemaName = string;
export type DataLakeDatasetSchemaFieldName = string;
export type DataLakeDatasetSchemaFieldType =
  | "INT"
  | "DOUBLE"
  | "STRING"
  | "TIMESTAMP"
  | "LONG"
  | (string & {});
export interface DataLakeDatasetSchemaField {
  name: string;
  type: DataLakeDatasetSchemaFieldType;
  isRequired: boolean;
}
export type DataLakeDatasetSchemaFieldList = DataLakeDatasetSchemaField[];
export interface DataLakeDatasetPrimaryKeyField {
  name: string;
}
export type DataLakeDatasetPrimaryKeyFieldList = DataLakeDatasetPrimaryKeyField[];
export interface DataLakeDatasetSchema {
  name: string;
  fields: DataLakeDatasetSchemaField[];
  primaryKeys?: DataLakeDatasetPrimaryKeyField[];
}
export type DataLakeDatasetDescription = string;
export type DataLakeDatasetPartitionTransformType =
  | "YEAR"
  | "MONTH"
  | "DAY"
  | "HOUR"
  | "IDENTITY"
  | (string & {});
export interface DataLakeDatasetPartitionFieldTransform {
  type: DataLakeDatasetPartitionTransformType;
}
export interface DataLakeDatasetPartitionField {
  name: string;
  transform: DataLakeDatasetPartitionFieldTransform;
}
export type DataLakeDatasetPartitionFieldList = DataLakeDatasetPartitionField[];
export interface DataLakeDatasetPartitionSpec {
  fields: DataLakeDatasetPartitionField[];
}
export interface CreateDataLakeDatasetRequest {
  instanceId: string;
  namespace: string;
  name: string;
  schema?: DataLakeDatasetSchema;
  description?: string;
  partitionSpec?: DataLakeDatasetPartitionSpec;
  tags?: { [key: string]: string | undefined };
}
export type AscResourceArn = string;
export interface DataLakeDataset {
  instanceId: string;
  namespace: string;
  name: string;
  arn: string;
  schema: DataLakeDatasetSchema;
  description?: string;
  partitionSpec?: DataLakeDatasetPartitionSpec;
  createdTime: Date;
  lastModifiedTime: Date;
}
export interface CreateDataLakeDatasetResponse {
  dataset: DataLakeDataset;
}
export type DataLakeNamespaceDescription = string;
export interface CreateDataLakeNamespaceRequest {
  instanceId: string;
  name: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
}
export interface DataLakeNamespace {
  instanceId: string;
  name: string;
  arn: string;
  description?: string;
  createdTime: Date;
  lastModifiedTime: Date;
}
export interface CreateDataLakeNamespaceResponse {
  namespace: DataLakeNamespace;
}
export type InstanceName = string;
export type InstanceDescription = string;
export type KmsKeyArn = string;
export type InstanceWebAppDnsDomain = string;
export interface CreateInstanceRequest {
  instanceName?: string;
  instanceDescription?: string;
  kmsKeyArn?: string;
  webAppDnsDomain?: string;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
}
export type AwsAccountId = string;
export type InstanceState =
  | "Initializing"
  | "Active"
  | "CreateFailed"
  | "DeleteFailed"
  | "Deleting"
  | "Deleted"
  | (string & {});
export interface Instance {
  instanceId: string;
  awsAccountId: string;
  state: InstanceState;
  errorMessage?: string;
  webAppDnsDomain?: string;
  createdTime?: Date;
  lastModifiedTime?: Date;
  instanceName?: string;
  instanceDescription?: string;
  kmsKeyArn?: string;
  versionNumber?: number;
}
export interface CreateInstanceResponse {
  instance: Instance;
}
export interface DeleteDataIntegrationFlowRequest {
  instanceId: string;
  name: string;
}
export interface DeleteDataIntegrationFlowResponse {
  instanceId: string;
  name: string;
}
export interface DeleteDataLakeDatasetRequest {
  instanceId: string;
  namespace: string;
  name: string;
}
export interface DeleteDataLakeDatasetResponse {
  instanceId: string;
  namespace: string;
  name: string;
}
export interface DeleteDataLakeNamespaceRequest {
  instanceId: string;
  name: string;
}
export interface DeleteDataLakeNamespaceResponse {
  instanceId: string;
  name: string;
}
export interface DeleteInstanceRequest {
  instanceId: string;
}
export interface DeleteInstanceResponse {
  instance: Instance;
}
export interface GetBillOfMaterialsImportJobRequest {
  instanceId: string;
  jobId: string;
}
export type ConfigurationJobStatus =
  | "NEW"
  | "FAILED"
  | "IN_PROGRESS"
  | "QUEUED"
  | "SUCCESS"
  | (string & {});
export interface BillOfMaterialsImportJob {
  instanceId: string;
  jobId: string;
  status: ConfigurationJobStatus;
  s3uri: string;
  message?: string;
}
export interface GetBillOfMaterialsImportJobResponse {
  job: BillOfMaterialsImportJob;
}
export interface GetDataIntegrationEventRequest {
  instanceId: string;
  eventId: string;
}
export type DataIntegrationEventType =
  | "scn.data.forecast"
  | "scn.data.inventorylevel"
  | "scn.data.inboundorder"
  | "scn.data.inboundorderline"
  | "scn.data.inboundorderlineschedule"
  | "scn.data.outboundorderline"
  | "scn.data.outboundshipment"
  | "scn.data.processheader"
  | "scn.data.processoperation"
  | "scn.data.processproduct"
  | "scn.data.reservation"
  | "scn.data.shipment"
  | "scn.data.shipmentstop"
  | "scn.data.shipmentstoporder"
  | "scn.data.supplyplan"
  | "scn.data.dataset"
  | (string & {});
export type DataIntegrationEventGroupId = string;
export type DataIntegrationDatasetArn = string;
export type DataIntegrationEventDatasetOperationType =
  | "APPEND"
  | "UPSERT"
  | "DELETE"
  | (string & {});
export type DataIntegrationEventDatasetLoadStatus =
  | "SUCCEEDED"
  | "IN_PROGRESS"
  | "FAILED"
  | (string & {});
export interface DataIntegrationEventDatasetLoadExecutionDetails {
  status: DataIntegrationEventDatasetLoadStatus;
  message?: string;
}
export interface DataIntegrationEventDatasetTargetDetails {
  datasetIdentifier: string;
  operationType: DataIntegrationEventDatasetOperationType;
  datasetLoadExecution: DataIntegrationEventDatasetLoadExecutionDetails;
}
export interface DataIntegrationEvent {
  instanceId: string;
  eventId: string;
  eventType: DataIntegrationEventType;
  eventGroupId: string;
  eventTimestamp: Date;
  datasetTargetDetails?: DataIntegrationEventDatasetTargetDetails;
}
export interface GetDataIntegrationEventResponse {
  event: DataIntegrationEvent;
}
export interface GetDataIntegrationFlowRequest {
  instanceId: string;
  name: string;
}
export interface DataIntegrationFlow {
  instanceId: string;
  name: string;
  sources: DataIntegrationFlowSource[];
  transformation: DataIntegrationFlowTransformation;
  target: DataIntegrationFlowTarget;
  createdTime: Date;
  lastModifiedTime: Date;
}
export interface GetDataIntegrationFlowResponse {
  flow: DataIntegrationFlow;
}
export interface GetDataIntegrationFlowExecutionRequest {
  instanceId: string;
  flowName: string;
  executionId: string;
}
export type DataIntegrationFlowExecutionStatus =
  | "SUCCEEDED"
  | "IN_PROGRESS"
  | "FAILED"
  | (string & {});
export type DataIntegrationS3ObjectKey = string;
export interface DataIntegrationFlowS3Source {
  bucketName: string;
  key: string;
}
export interface DataIntegrationFlowDatasetSource {
  datasetIdentifier: string;
}
export interface DataIntegrationFlowExecutionSourceInfo {
  sourceType: DataIntegrationFlowSourceType;
  s3Source?: DataIntegrationFlowS3Source;
  datasetSource?: DataIntegrationFlowDatasetSource;
}
export type DataIntegrationFlowExecutionDiagnosticReportsRootS3URI = string;
export interface DataIntegrationFlowExecutionOutputMetadata {
  diagnosticReportsRootS3URI?: string;
}
export interface DataIntegrationFlowExecution {
  instanceId: string;
  flowName: string;
  executionId: string;
  status?: DataIntegrationFlowExecutionStatus;
  sourceInfo?: DataIntegrationFlowExecutionSourceInfo;
  message?: string;
  startTime?: Date;
  endTime?: Date;
  outputMetadata?: DataIntegrationFlowExecutionOutputMetadata;
}
export interface GetDataIntegrationFlowExecutionResponse {
  flowExecution: DataIntegrationFlowExecution;
}
export interface GetDataLakeDatasetRequest {
  instanceId: string;
  namespace: string;
  name: string;
}
export interface GetDataLakeDatasetResponse {
  dataset: DataLakeDataset;
}
export interface GetDataLakeNamespaceRequest {
  instanceId: string;
  name: string;
}
export interface GetDataLakeNamespaceResponse {
  namespace: DataLakeNamespace;
}
export interface GetInstanceRequest {
  instanceId: string;
}
export interface GetInstanceResponse {
  instance: Instance;
}
export type DataIntegrationEventNextToken = string;
export type DataIntegrationEventMaxResults = number;
export interface ListDataIntegrationEventsRequest {
  instanceId: string;
  eventType?: DataIntegrationEventType;
  nextToken?: string;
  maxResults?: number;
}
export type DataIntegrationEventList = DataIntegrationEvent[];
export interface ListDataIntegrationEventsResponse {
  events: DataIntegrationEvent[];
  nextToken?: string;
}
export type DataIntegrationFlowExecutionNextToken = string;
export type DataIntegrationFlowExecutionMaxResults = number;
export interface ListDataIntegrationFlowExecutionsRequest {
  instanceId: string;
  flowName: string;
  nextToken?: string;
  maxResults?: number;
}
export type DataIntegrationFlowExecutionList = DataIntegrationFlowExecution[];
export interface ListDataIntegrationFlowExecutionsResponse {
  flowExecutions: DataIntegrationFlowExecution[];
  nextToken?: string;
}
export type DataIntegrationFlowNextToken = string;
export type DataIntegrationFlowMaxResults = number;
export interface ListDataIntegrationFlowsRequest {
  instanceId: string;
  nextToken?: string;
  maxResults?: number;
}
export type DataIntegrationFlowList = DataIntegrationFlow[];
export interface ListDataIntegrationFlowsResponse {
  flows: DataIntegrationFlow[];
  nextToken?: string;
}
export type DataLakeDatasetNextToken = string;
export type DataLakeDatasetMaxResults = number;
export interface ListDataLakeDatasetsRequest {
  instanceId: string;
  namespace: string;
  nextToken?: string;
  maxResults?: number;
}
export type DataLakeDatasetList = DataLakeDataset[];
export interface ListDataLakeDatasetsResponse {
  datasets: DataLakeDataset[];
  nextToken?: string;
}
export type DataLakeNamespaceNextToken = string;
export type DataLakeNamespaceMaxResults = number;
export interface ListDataLakeNamespacesRequest {
  instanceId: string;
  nextToken?: string;
  maxResults?: number;
}
export type DataLakeNamespaceList = DataLakeNamespace[];
export interface ListDataLakeNamespacesResponse {
  namespaces: DataLakeNamespace[];
  nextToken?: string;
}
export type InstanceNextToken = string;
export type InstanceMaxResults = number;
export type InstanceNameList = string[];
export type InstanceStateList = InstanceState[];
export interface ListInstancesRequest {
  nextToken?: string;
  maxResults?: number;
  instanceNameFilter?: string[];
  instanceStateFilter?: InstanceState[];
}
export type InstanceList = Instance[];
export interface ListInstancesResponse {
  instances: Instance[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
export type DataIntegrationEventData = string | redacted.Redacted<string>;
export interface DataIntegrationEventDatasetTargetConfiguration {
  datasetIdentifier: string;
  operationType: DataIntegrationEventDatasetOperationType;
}
export interface SendDataIntegrationEventRequest {
  instanceId: string;
  eventType: DataIntegrationEventType;
  data: string | redacted.Redacted<string>;
  eventGroupId: string;
  eventTimestamp?: Date;
  clientToken?: string;
  datasetTarget?: DataIntegrationEventDatasetTargetConfiguration;
}
export interface SendDataIntegrationEventResponse {
  eventId: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateDataIntegrationFlowRequest {
  instanceId: string;
  name: string;
  sources?: DataIntegrationFlowSource[];
  transformation?: DataIntegrationFlowTransformation;
  target?: DataIntegrationFlowTarget;
}
export interface UpdateDataIntegrationFlowResponse {
  flow: DataIntegrationFlow;
}
export interface UpdateDataLakeDatasetRequest {
  instanceId: string;
  namespace: string;
  name: string;
  description?: string;
}
export interface UpdateDataLakeDatasetResponse {
  dataset: DataLakeDataset;
}
export interface UpdateDataLakeNamespaceRequest {
  instanceId: string;
  name: string;
  description?: string;
}
export interface UpdateDataLakeNamespaceResponse {
  namespace: DataLakeNamespace;
}
export interface UpdateInstanceRequest {
  instanceId: string;
  instanceName?: string;
  instanceDescription?: string;
}
export interface UpdateInstanceResponse {
  instance: Instance;
}
export type CreateBillOfMaterialsImportJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * CreateBillOfMaterialsImportJob creates an import job for the Product Bill Of Materials (BOM) entity. For information on the product_bom entity, see the AWS Supply Chain User Guide.
 *
 * The CSV file must be located in an Amazon S3 location accessible to AWS Supply Chain. It is recommended to use the same Amazon S3 bucket created during your AWS Supply Chain instance creation.
 */
export const createBillOfMaterialsImportJob: API.OperationMethod<
  CreateBillOfMaterialsImportJobRequest,
  CreateBillOfMaterialsImportJobResponse,
  CreateBillOfMaterialsImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<CreateBillOfMaterialsImportJobRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<CreateBillOfMaterialsImportJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBillOfMaterialsImportJob",
}));

export type CreateDataIntegrationFlowError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically create a data pipeline to ingest data from source systems such as Amazon S3 buckets, to a predefined Amazon Web Services Supply Chain dataset (product, inbound_order) or a temporary dataset along with the data transformation query provided with the API.
 */
export const createDataIntegrationFlow: API.OperationMethod<
  CreateDataIntegrationFlowRequest,
  CreateDataIntegrationFlowResponse,
  CreateDataIntegrationFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16, __c2, 0) as any as S.Schema<CreateDataIntegrationFlowRequest>,
  output: __S(17, __c2, 1) as any as S.Schema<CreateDataIntegrationFlowResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataIntegrationFlow",
}));

export type CreateDataLakeDatasetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically create an Amazon Web Services Supply Chain data lake dataset. Developers can create the datasets using their pre-defined or custom schema for a given instance ID, namespace, and dataset name.
 */
export const createDataLakeDataset: API.OperationMethod<
  CreateDataLakeDatasetRequest,
  CreateDataLakeDatasetResponse,
  CreateDataLakeDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27, __c3, 3) as any as S.Schema<CreateDataLakeDatasetRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<CreateDataLakeDatasetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataLakeDataset",
}));

export type CreateDataLakeNamespaceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically create an Amazon Web Services Supply Chain data lake namespace. Developers can create the namespaces for a given instance ID.
 */
export const createDataLakeNamespace: API.OperationMethod<
  CreateDataLakeNamespaceRequest,
  CreateDataLakeNamespaceResponse,
  CreateDataLakeNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30, __c3, 6) as any as S.Schema<CreateDataLakeNamespaceRequest>,
  output: __S(32, __c4, 0) as any as S.Schema<CreateDataLakeNamespaceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataLakeNamespace",
}));

export type CreateInstanceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically create an Amazon Web Services Supply Chain instance by applying KMS keys and relevant information associated with the API without using the Amazon Web Services console.
 *
 * This is an asynchronous operation. Upon receiving a CreateInstance request, Amazon Web Services Supply Chain immediately returns the instance resource, instance ID, and the initializing state while simultaneously creating all required Amazon Web Services resources for an instance creation. You can use GetInstance to check the status of the instance. If the instance results in an unhealthy state, you need to check the error message, delete the current instance, and recreate a new one based on the mitigation from the error message.
 */
export const createInstance: API.OperationMethod<
  CreateInstanceRequest,
  CreateInstanceResponse,
  CreateInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33, __c4, 1) as any as S.Schema<CreateInstanceRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<CreateInstanceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateInstance",
}));

export type DeleteDataIntegrationFlowError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Enable you to programmatically delete an existing data pipeline for the provided Amazon Web Services Supply Chain instance and DataIntegrationFlow name.
 */
export const deleteDataIntegrationFlow: API.OperationMethod<
  DeleteDataIntegrationFlowRequest,
  DeleteDataIntegrationFlowResponse,
  DeleteDataIntegrationFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36, __c4, 4) as any as S.Schema<DeleteDataIntegrationFlowRequest>,
  output: __S(17, __c2, 1) as any as S.Schema<DeleteDataIntegrationFlowResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataIntegrationFlow",
}));

export type DeleteDataLakeDatasetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically delete an Amazon Web Services Supply Chain data lake dataset. Developers can delete the existing datasets for a given instance ID, namespace, and instance name.
 */
export const deleteDataLakeDataset: API.OperationMethod<
  DeleteDataLakeDatasetRequest,
  DeleteDataLakeDatasetResponse,
  DeleteDataLakeDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37, __c4, 5) as any as S.Schema<DeleteDataLakeDatasetRequest>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteDataLakeDatasetResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataLakeDataset",
}));

export type DeleteDataLakeNamespaceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically delete an Amazon Web Services Supply Chain data lake namespace and its underling datasets. Developers can delete the existing namespaces for a given instance ID and namespace name.
 */
export const deleteDataLakeNamespace: API.OperationMethod<
  DeleteDataLakeNamespaceRequest,
  DeleteDataLakeNamespaceResponse,
  DeleteDataLakeNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(39, __c4, 7) as any as S.Schema<DeleteDataLakeNamespaceRequest>,
  output: __S(17, __c2, 1) as any as S.Schema<DeleteDataLakeNamespaceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataLakeNamespace",
}));

export type DeleteInstanceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically delete an Amazon Web Services Supply Chain instance by deleting the KMS keys and relevant information associated with the API without using the Amazon Web Services console.
 *
 * This is an asynchronous operation. Upon receiving a DeleteInstance request, Amazon Web Services Supply Chain immediately returns a response with the instance resource, delete state while cleaning up all Amazon Web Services resources created during the instance creation process. You can use the GetInstance action to check the instance status.
 */
export const deleteInstance: API.OperationMethod<
  DeleteInstanceRequest,
  DeleteInstanceResponse,
  DeleteInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40, __c5, 0) as any as S.Schema<DeleteInstanceRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<DeleteInstanceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInstance",
}));

export type GetBillOfMaterialsImportJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get status and details of a BillOfMaterialsImportJob.
 */
export const getBillOfMaterialsImportJob: API.OperationMethod<
  GetBillOfMaterialsImportJobRequest,
  GetBillOfMaterialsImportJobResponse,
  GetBillOfMaterialsImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41, __c5, 1) as any as S.Schema<GetBillOfMaterialsImportJobRequest>,
  output: __S(43, __c5, 3) as any as S.Schema<GetBillOfMaterialsImportJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBillOfMaterialsImportJob",
}));

export type GetDataIntegrationEventError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically view an Amazon Web Services Supply Chain Data Integration Event. Developers can view the eventType, eventGroupId, eventTimestamp, datasetTarget, datasetLoadExecution.
 */
export const getDataIntegrationEvent: API.OperationMethod<
  GetDataIntegrationEventRequest,
  GetDataIntegrationEventResponse,
  GetDataIntegrationEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44, __c5, 4) as any as S.Schema<GetDataIntegrationEventRequest>,
  output: __S(48, __c6, 0) as any as S.Schema<GetDataIntegrationEventResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataIntegrationEvent",
}));

export type GetDataIntegrationFlowError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically view a specific data pipeline for the provided Amazon Web Services Supply Chain instance and DataIntegrationFlow name.
 */
export const getDataIntegrationFlow: API.OperationMethod<
  GetDataIntegrationFlowRequest,
  GetDataIntegrationFlowResponse,
  GetDataIntegrationFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49, __c6, 1) as any as S.Schema<GetDataIntegrationFlowRequest>,
  output: __S(51, __c6, 3) as any as S.Schema<GetDataIntegrationFlowResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataIntegrationFlow",
}));

export type GetDataIntegrationFlowExecutionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the flow execution.
 */
export const getDataIntegrationFlowExecution: API.OperationMethod<
  GetDataIntegrationFlowExecutionRequest,
  GetDataIntegrationFlowExecutionResponse,
  GetDataIntegrationFlowExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52, __c6, 4) as any as S.Schema<GetDataIntegrationFlowExecutionRequest>,
  output: __S(58, __c7, 2) as any as S.Schema<GetDataIntegrationFlowExecutionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataIntegrationFlowExecution",
}));

export type GetDataLakeDatasetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically view an Amazon Web Services Supply Chain data lake dataset. Developers can view the data lake dataset information such as namespace, schema, and so on for a given instance ID, namespace, and dataset name.
 */
export const getDataLakeDataset: API.OperationMethod<
  GetDataLakeDatasetRequest,
  GetDataLakeDatasetResponse,
  GetDataLakeDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<GetDataLakeDatasetRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<GetDataLakeDatasetResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataLakeDataset",
}));

export type GetDataLakeNamespaceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically view an Amazon Web Services Supply Chain data lake namespace. Developers can view the data lake namespace information such as description for a given instance ID and namespace name.
 */
export const getDataLakeNamespace: API.OperationMethod<
  GetDataLakeNamespaceRequest,
  GetDataLakeNamespaceResponse,
  GetDataLakeNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60, __c7, 4) as any as S.Schema<GetDataLakeNamespaceRequest>,
  output: __S(32, __c4, 0) as any as S.Schema<GetDataLakeNamespaceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataLakeNamespace",
}));

export type GetInstanceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically retrieve the information related to an Amazon Web Services Supply Chain instance ID.
 */
export const getInstance: API.OperationMethod<
  GetInstanceRequest,
  GetInstanceResponse,
  GetInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<GetInstanceRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<GetInstanceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInstance",
}));

export type ListDataIntegrationEventsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically list all data integration events for the provided Amazon Web Services Supply Chain instance.
 */
export const listDataIntegrationEvents: API.PaginatedOperationMethod<
  ListDataIntegrationEventsRequest,
  ListDataIntegrationEventsResponse,
  ListDataIntegrationEventsError,
  Credentials | HttpClient.HttpClient,
  DataIntegrationEvent
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<ListDataIntegrationEventsRequest>,
  output: __S(64, __c8, 0) as any as S.Schema<ListDataIntegrationEventsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataIntegrationEvents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "events",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataIntegrationFlowExecutionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List flow executions.
 */
export const listDataIntegrationFlowExecutions: API.PaginatedOperationMethod<
  ListDataIntegrationFlowExecutionsRequest,
  ListDataIntegrationFlowExecutionsResponse,
  ListDataIntegrationFlowExecutionsError,
  Credentials | HttpClient.HttpClient,
  DataIntegrationFlowExecution
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<ListDataIntegrationFlowExecutionsRequest>,
  output: __S(67, __c8, 3) as any as S.Schema<ListDataIntegrationFlowExecutionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataIntegrationFlowExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "flowExecutions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataIntegrationFlowsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically list all data pipelines for the provided Amazon Web Services Supply Chain instance.
 */
export const listDataIntegrationFlows: API.PaginatedOperationMethod<
  ListDataIntegrationFlowsRequest,
  ListDataIntegrationFlowsResponse,
  ListDataIntegrationFlowsError,
  Credentials | HttpClient.HttpClient,
  DataIntegrationFlow
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<ListDataIntegrationFlowsRequest>,
  output: __S(70, __c8, 6) as any as S.Schema<ListDataIntegrationFlowsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataIntegrationFlows",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "flows",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataLakeDatasetsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically view the list of Amazon Web Services Supply Chain data lake datasets. Developers can view the datasets and the corresponding information such as namespace, schema, and so on for a given instance ID and namespace.
 */
export const listDataLakeDatasets: API.PaginatedOperationMethod<
  ListDataLakeDatasetsRequest,
  ListDataLakeDatasetsResponse,
  ListDataLakeDatasetsError,
  Credentials | HttpClient.HttpClient,
  DataLakeDataset
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(71, __c8, 7) as any as S.Schema<ListDataLakeDatasetsRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<ListDataLakeDatasetsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataLakeDatasets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "datasets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataLakeNamespacesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically view the list of Amazon Web Services Supply Chain data lake namespaces. Developers can view the namespaces and the corresponding information such as description for a given instance ID. Note that this API only return custom namespaces, instance pre-defined namespaces are not included.
 */
export const listDataLakeNamespaces: API.PaginatedOperationMethod<
  ListDataLakeNamespacesRequest,
  ListDataLakeNamespacesResponse,
  ListDataLakeNamespacesError,
  Credentials | HttpClient.HttpClient,
  DataLakeNamespace
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<ListDataLakeNamespacesRequest>,
  output: __S(76, __c9, 4) as any as S.Schema<ListDataLakeNamespacesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataLakeNamespaces",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "namespaces",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListInstancesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all Amazon Web Services Supply Chain instances for a specific account. Enables you to programmatically list all Amazon Web Services Supply Chain instances based on their account ID, instance name, and state of the instance (active or delete).
 */
export const listInstances: API.PaginatedOperationMethod<
  ListInstancesRequest,
  ListInstancesResponse,
  ListInstancesError,
  Credentials | HttpClient.HttpClient,
  Instance
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(79, __c9, 7) as any as S.Schema<ListInstancesRequest>,
  output: __S(81, __c10, 1) as any as S.Schema<ListInstancesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInstances",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "instances",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all the tags for an Amazon Web ServicesSupply Chain resource. You can list all the tags added to a resource. By listing the tags, developers can view the tag level information on a resource and perform actions such as, deleting a resource associated with a particular tag.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82, __c10, 2) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(83, __c10, 3) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type SendDataIntegrationEventError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Send the data payload for the event with real-time data for analysis or monitoring. The real-time data events are stored in an Amazon Web Services service before being processed and stored in data lake.
 */
export const sendDataIntegrationEvent: API.OperationMethod<
  SendDataIntegrationEventRequest,
  SendDataIntegrationEventResponse,
  SendDataIntegrationEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(85, __c10, 5) as any as S.Schema<SendDataIntegrationEventRequest>,
  output: __S(86, __c10, 6) as any as S.Schema<SendDataIntegrationEventResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendDataIntegrationEvent",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * You can create tags during or after creating a resource such as instance, data flow, or dataset in AWS Supply chain. During the data ingestion process, you can add tags such as dev, test, or prod to data flows created during the data ingestion process in the AWS Supply Chain datasets. You can use these tags to identify a group of resources or a single resource used by the developer.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(87, __c10, 7) as any as S.Schema<TagResourceRequest>,
  output: __S(88, __c11, 0) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * You can delete tags for an Amazon Web Services Supply chain resource such as instance, data flow, or dataset in AWS Supply Chain. During the data ingestion process, you can delete tags such as dev, test, or prod to data flows created during the data ingestion process in the AWS Supply Chain datasets.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89, __c11, 1) as any as S.Schema<UntagResourceRequest>,
  output: __S(88, __c11, 0) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateDataIntegrationFlowError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically update an existing data pipeline to ingest data from the source systems such as, Amazon S3 buckets, to a predefined Amazon Web Services Supply Chain dataset (product, inbound_order) or a temporary dataset along with the data transformation query provided with the API.
 */
export const updateDataIntegrationFlow: API.OperationMethod<
  UpdateDataIntegrationFlowRequest,
  UpdateDataIntegrationFlowResponse,
  UpdateDataIntegrationFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90, __c11, 2) as any as S.Schema<UpdateDataIntegrationFlowRequest>,
  output: __S(51, __c6, 3) as any as S.Schema<UpdateDataIntegrationFlowResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDataIntegrationFlow",
}));

export type UpdateDataLakeDatasetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically update an Amazon Web Services Supply Chain data lake dataset. Developers can update the description of a data lake dataset for a given instance ID, namespace, and dataset name.
 */
export const updateDataLakeDataset: API.OperationMethod<
  UpdateDataLakeDatasetRequest,
  UpdateDataLakeDatasetResponse,
  UpdateDataLakeDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(91, __c11, 3) as any as S.Schema<UpdateDataLakeDatasetRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<UpdateDataLakeDatasetResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDataLakeDataset",
}));

export type UpdateDataLakeNamespaceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically update an Amazon Web Services Supply Chain data lake namespace. Developers can update the description of a data lake namespace for a given instance ID and namespace name.
 */
export const updateDataLakeNamespace: API.OperationMethod<
  UpdateDataLakeNamespaceRequest,
  UpdateDataLakeNamespaceResponse,
  UpdateDataLakeNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92, __c11, 4) as any as S.Schema<UpdateDataLakeNamespaceRequest>,
  output: __S(32, __c4, 0) as any as S.Schema<UpdateDataLakeNamespaceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDataLakeNamespace",
}));

export type UpdateInstanceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to programmatically update an Amazon Web Services Supply Chain instance description by providing all the relevant information such as account ID, instance ID and so on without using the AWS console.
 */
export const updateInstance: API.OperationMethod<
  UpdateInstanceRequest,
  UpdateInstanceResponse,
  UpdateInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93, __c11, 5) as any as S.Schema<UpdateInstanceRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<UpdateInstanceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateInstance",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          s3uri: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/api/configuration/instances/{instanceId}/bill-of-materials-import-jobs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateBillOfMaterialsImportJobRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ jobId: S.String })).annotate({
        identifier: "CreateBillOfMaterialsImportJobResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ fileType: S.optional(S.String) })).annotate({
        identifier: "DataIntegrationFlowS3Options",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          bucketName: S.String,
          prefix: S.String,
          options: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({
        identifier: "DataIntegrationFlowS3SourceConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ name: S.String, sortOrder: S.String })).annotate({
        identifier: "DataIntegrationFlowFieldPriorityDedupeField",
      });
    case 5:
      return S.Array(__S(4, __c0, 4));
    case 6:
      return S.suspend(() => S.Struct({ fields: __S(5, __c0, 5) })).annotate({
        identifier: "DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          fieldPriority: S.optional(__S(6, __c0, 6)),
        }),
      ).annotate({
        identifier: "DataIntegrationFlowDedupeStrategy",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          loadType: S.optional(S.String),
          dedupeRecords: S.optional(S.Boolean),
          dedupeStrategy: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({
        identifier: "DataIntegrationFlowDatasetOptions",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          datasetIdentifier: S.String,
          options: S.optional(__S(8, __c1, 0)),
        }),
      ).annotate({
        identifier: "DataIntegrationFlowDatasetSourceConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sourceType: S.String,
          sourceName: S.String,
          s3Source: S.optional(__S(3, __c0, 3)),
          datasetSource: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({
        identifier: "DataIntegrationFlowSource",
      });
    case 3:
      return S.Array(__S(10, __c1, 2));
    case 4:
      return S.suspend(() => S.Struct({ query: SensitiveString })).annotate({
        identifier: "DataIntegrationFlowSQLTransformationConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          transformationType: S.String,
          sqlTransformation: S.optional(__S(12, __c1, 4)),
        }),
      ).annotate({
        identifier: "DataIntegrationFlowTransformation",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          targetType: S.String,
          s3Target: S.optional(__S(3, __c0, 3)),
          datasetTarget: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({
        identifier: "DataIntegrationFlowTarget",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          name: S.String.pipe(T.HttpLabel("name")),
          sources: __S(11, __c1, 3),
          transformation: __S(13, __c1, 5),
          target: __S(14, __c1, 6),
          tags: S.optional(__S(15, __c1, 7)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/api/data-integration/instance/{instanceId}/data-integration-flows/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDataIntegrationFlowRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ instanceId: S.String, name: S.String })).annotate({
        identifier: "CreateDataIntegrationFlowResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.String, type: S.String, isRequired: S.Boolean }),
      ).annotate({
        identifier: "DataLakeDatasetSchemaField",
      });
    case 3:
      return S.Array(__S(18, __c2, 2));
    case 4:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "DataLakeDatasetPrimaryKeyField",
      });
    case 5:
      return S.Array(__S(20, __c2, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          fields: __S(19, __c2, 3),
          primaryKeys: S.optional(__S(21, __c2, 5)),
        }),
      ).annotate({ identifier: "DataLakeDatasetSchema" });
    case 7:
      return S.suspend(() => S.Struct({ type: S.String })).annotate({
        identifier: "DataLakeDatasetPartitionFieldTransform",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String, transform: __S(23, __c2, 7) })).annotate({
        identifier: "DataLakeDatasetPartitionField",
      });
    case 1:
      return S.Array(__S(24, __c3, 0));
    case 2:
      return S.suspend(() => S.Struct({ fields: __S(25, __c3, 1) })).annotate({
        identifier: "DataLakeDatasetPartitionSpec",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
          schema: S.optional(__S(22, __c2, 6)),
          description: S.optional(S.String),
          partitionSpec: S.optional(__S(26, __c3, 2)),
          tags: S.optional(__S(15, __c1, 7)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDataLakeDatasetRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String,
          namespace: S.String,
          name: S.String,
          arn: S.String,
          schema: __S(22, __c2, 6),
          description: S.optional(S.String),
          partitionSpec: S.optional(__S(26, __c3, 2)),
          createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastModifiedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DataLakeDataset" });
    case 5:
      return S.suspend(() => S.Struct({ dataset: __S(28, __c3, 4) })).annotate({
        identifier: "CreateDataLakeDatasetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          name: S.String.pipe(T.HttpLabel("name")),
          description: S.optional(S.String),
          tags: S.optional(__S(15, __c1, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/api/datalake/instance/{instanceId}/namespaces/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDataLakeNamespaceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String,
          name: S.String,
          arn: S.String,
          description: S.optional(S.String),
          createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastModifiedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DataLakeNamespace" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ namespace: __S(31, __c3, 7) })).annotate({
        identifier: "CreateDataLakeNamespaceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          instanceName: S.optional(S.String),
          instanceDescription: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          webAppDnsDomain: S.optional(S.String),
          tags: S.optional(__S(15, __c1, 7)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/api/instance" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateInstanceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String,
          awsAccountId: S.String,
          state: S.String,
          errorMessage: S.optional(S.String),
          webAppDnsDomain: S.optional(S.String),
          createdTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          instanceName: S.optional(S.String),
          instanceDescription: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          versionNumber: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Instance" });
    case 3:
      return S.suspend(() => S.Struct({ instance: __S(34, __c4, 2) })).annotate({
        identifier: "CreateInstanceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/api/data-integration/instance/{instanceId}/data-integration-flows/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDataIntegrationFlowRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDataLakeDatasetRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ instanceId: S.String, namespace: S.String, name: S.String }),
      ).annotate({
        identifier: "DeleteDataLakeDatasetResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/api/datalake/instance/{instanceId}/namespaces/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDataLakeNamespaceRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ instanceId: S.String.pipe(T.HttpLabel("instanceId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/api/instance/{instanceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteInstanceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/api/configuration/instances/{instanceId}/bill-of-materials-import-jobs/{jobId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetBillOfMaterialsImportJobRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String,
          jobId: S.String,
          status: S.String,
          s3uri: S.String,
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "BillOfMaterialsImportJob" });
    case 3:
      return S.suspend(() => S.Struct({ job: __S(42, __c5, 2) })).annotate({
        identifier: "GetBillOfMaterialsImportJobResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          eventId: S.String.pipe(T.HttpLabel("eventId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/api-data/data-integration/instance/{instanceId}/data-integration-events/{eventId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataIntegrationEventRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ status: S.String, message: S.optional(S.String) }),
      ).annotate({
        identifier: "DataIntegrationEventDatasetLoadExecutionDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          datasetIdentifier: S.String,
          operationType: S.String,
          datasetLoadExecution: __S(45, __c5, 5),
        }),
      ).annotate({
        identifier: "DataIntegrationEventDatasetTargetDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String,
          eventId: S.String,
          eventType: S.String,
          eventGroupId: S.String,
          eventTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          datasetTargetDetails: S.optional(__S(46, __c5, 6)),
        }),
      ).annotate({ identifier: "DataIntegrationEvent" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ event: __S(47, __c5, 7) })).annotate({
        identifier: "GetDataIntegrationEventResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/api/data-integration/instance/{instanceId}/data-integration-flows/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataIntegrationFlowRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String,
          name: S.String,
          sources: __S(11, __c1, 3),
          transformation: __S(13, __c1, 5),
          target: __S(14, __c1, 6),
          createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastModifiedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DataIntegrationFlow" });
    case 3:
      return S.suspend(() => S.Struct({ flow: __S(50, __c6, 2) })).annotate({
        identifier: "GetDataIntegrationFlowResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          flowName: S.String.pipe(T.HttpLabel("flowName")),
          executionId: S.String.pipe(T.HttpLabel("executionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/api-data/data-integration/instance/{instanceId}/data-integration-flows/{flowName}/executions/{executionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataIntegrationFlowExecutionRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ bucketName: S.String, key: S.String })).annotate({
        identifier: "DataIntegrationFlowS3Source",
      });
    case 6:
      return S.suspend(() => S.Struct({ datasetIdentifier: S.String })).annotate({
        identifier: "DataIntegrationFlowDatasetSource",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sourceType: S.String,
          s3Source: S.optional(__S(53, __c6, 5)),
          datasetSource: S.optional(__S(54, __c6, 6)),
        }),
      ).annotate({
        identifier: "DataIntegrationFlowExecutionSourceInfo",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ diagnosticReportsRootS3URI: S.optional(S.String) }),
      ).annotate({
        identifier: "DataIntegrationFlowExecutionOutputMetadata",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String,
          flowName: S.String,
          executionId: S.String,
          status: S.optional(S.String),
          sourceInfo: S.optional(__S(55, __c6, 7)),
          message: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          outputMetadata: S.optional(__S(56, __c7, 0)),
        }),
      ).annotate({
        identifier: "DataIntegrationFlowExecution",
      });
    case 2:
      return S.suspend(() => S.Struct({ flowExecution: __S(57, __c7, 1) })).annotate({
        identifier: "GetDataIntegrationFlowExecutionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataLakeDatasetRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/api/datalake/instance/{instanceId}/namespaces/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataLakeNamespaceRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ instanceId: S.String.pipe(T.HttpLabel("instanceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/api/instance/{instanceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetInstanceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          eventType: S.optional(S.String).pipe(T.HttpQuery("eventType")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/api-data/data-integration/instance/{instanceId}/data-integration-events",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataIntegrationEventsRequest",
      });
    case 7:
      return S.Array(__S(47, __c5, 7));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ events: __S(63, __c7, 7), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDataIntegrationEventsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          flowName: S.String.pipe(T.HttpLabel("flowName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/api-data/data-integration/instance/{instanceId}/data-integration-flows/{flowName}/executions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataIntegrationFlowExecutionsRequest",
      });
    case 2:
      return S.Array(__S(57, __c7, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          flowExecutions: __S(66, __c8, 2),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDataIntegrationFlowExecutionsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/api/data-integration/instance/{instanceId}/data-integration-flows",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataIntegrationFlowsRequest",
      });
    case 5:
      return S.Array(__S(50, __c6, 2));
    case 6:
      return S.suspend(() =>
        S.Struct({ flows: __S(69, __c8, 5), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDataIntegrationFlowsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataLakeDatasetsRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(28, __c3, 4));
    case 1:
      return S.suspend(() =>
        S.Struct({ datasets: __S(72, __c9, 0), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDataLakeDatasetsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/api/datalake/instance/{instanceId}/namespaces" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataLakeNamespacesRequest",
      });
    case 3:
      return S.Array(__S(31, __c3, 7));
    case 4:
      return S.suspend(() =>
        S.Struct({ namespaces: __S(75, __c9, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDataLakeNamespacesResponse",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          instanceNameFilter: S.optional(__S(77, __c9, 5)).pipe(T.HttpQuery("instanceNameFilter")),
          instanceStateFilter: S.optional(__S(78, __c9, 6)).pipe(
            T.HttpQuery("instanceStateFilter"),
          ),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/api/instance" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListInstancesRequest" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(34, __c4, 2));
    case 1:
      return S.suspend(() =>
        S.Struct({ instances: __S(80, __c10, 0), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListInstancesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/api/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ tags: __S(15, __c1, 7) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          datasetIdentifier: S.String,
          operationType: S.String,
        }),
      ).annotate({
        identifier: "DataIntegrationEventDatasetTargetConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          eventType: S.String,
          data: SensitiveString,
          eventGroupId: S.String,
          eventTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          datasetTarget: S.optional(__S(84, __c10, 4)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/api-data/data-integration/instance/{instanceId}/data-integration-events",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SendDataIntegrationEventRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ eventId: S.String })).annotate({
        identifier: "SendDataIntegrationEventResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(15, __c1, 7),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/api/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(77, __c9, 5).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/api/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          name: S.String.pipe(T.HttpLabel("name")),
          sources: S.optional(__S(11, __c1, 3)),
          transformation: S.optional(__S(13, __c1, 5)),
          target: S.optional(__S(14, __c1, 6)),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/api/data-integration/instance/{instanceId}/data-integration-flows/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDataIntegrationFlowRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          namespace: S.String.pipe(T.HttpLabel("namespace")),
          name: S.String.pipe(T.HttpLabel("name")),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDataLakeDatasetRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          name: S.String.pipe(T.HttpLabel("name")),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/api/datalake/instance/{instanceId}/namespaces/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDataLakeNamespaceRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpLabel("instanceId")),
          instanceName: S.optional(S.String),
          instanceDescription: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/api/instance/{instanceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateInstanceRequest" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
