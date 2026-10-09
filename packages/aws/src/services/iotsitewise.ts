import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as stream from "effect/Stream";
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
  sdkId: "IoTSiteWise",
  serviceShapeName: "AWSIoTSiteWise",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "iotsitewise" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-12-02");
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
              `https://iotsitewise-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://iotsitewise-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://iotsitewise.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://iotsitewise.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class ConflictingOperationException
  extends /*@__PURE__*/ S.TaggedError<ConflictingOperationException>()(
    "ConflictingOperationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceArn: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalFailureException
  extends /*@__PURE__*/ S.TaggedError<InternalFailureException>()(
    "InternalFailureException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()(
    "InvalidRequestException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(410),
  ).pipe(C.withBadRequestError) {}
export class PreconditionFailedException
  extends /*@__PURE__*/ S.TaggedError<PreconditionFailedException>()(
    "PreconditionFailedException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceArn: S.String,
    },
    /*@__PURE__*/ T.HttpError(412),
  ) {}
export class QueryTimeoutException
  extends /*@__PURE__*/ S.TaggedError<QueryTimeoutException>()(
    "QueryTimeoutException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsException>()(
    "ResourceAlreadyExistsException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceArn: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError, C.withAlreadyExistsError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type CustomID = string;
export type ClientToken = string;
export interface AssociateAssetsRequest {
  assetId: string;
  hierarchyId: string;
  childAssetId: string;
  clientToken?: string;
}
export interface AssociateAssetsResponse {}
export type PropertyAlias = string;
export interface AssociateTimeSeriesToAssetPropertyRequest {
  alias: string;
  assetId: string;
  propertyId: string;
  clientToken?: string;
}
export interface AssociateTimeSeriesToAssetPropertyResponse {}
export type ID = string;
export type WorkspaceName = string;
export type TimeSeriesId = string;
export type TimeInSeconds = number;
export type OffsetInNanos = number;
export interface TimeInNanos {
  timeInSeconds: number;
  offsetInNanos?: number;
}
export interface AssociateDataSegmentEntry {
  sourceDatasetId: string;
  timeSeriesId: string;
  startTimestamp: TimeInNanos;
  endTimestamp: TimeInNanos;
}
export type AssociateDataSegmentEntries = AssociateDataSegmentEntry[];
export interface BatchAssociateDataSegmentsToDatasetRequest {
  datasetId: string;
  workspaceName: string;
  associateDataSegmentEntries: AssociateDataSegmentEntry[];
  clientToken?: string;
}
export type Version = string;
export type DataSegmentErrorCode =
  | "INTERNAL_FAILURE"
  | "VALIDATION_ERROR"
  | "RESOURCE_NOT_FOUND"
  | "LIMIT_EXCEEDED"
  | "CONFLICTING_OPERATION"
  | (string & {});
export type DataSegmentErrorMessage = string;
export interface FailedDataSegmentAssociation {
  sourceDatasetId: string;
  timeSeriesId: string;
  startTimestamp: TimeInNanos;
  endTimestamp: TimeInNanos;
  errorCode: DataSegmentErrorCode;
  errorMessage: string;
}
export type FailedDataSegmentAssociations = FailedDataSegmentAssociation[];
export interface BatchAssociateDataSegmentsToDatasetResponse {
  datasetId: string;
  datasetVersion: string;
  failedAssociations: FailedDataSegmentAssociation[];
}
export type IDs = string[];
export interface BatchAssociateProjectAssetsRequest {
  projectId: string;
  assetIds: string[];
  clientToken?: string;
}
export type AssetErrorCode = "INTERNAL_FAILURE" | (string & {});
export type AssetErrorMessage = string;
export interface AssetErrorDetails {
  assetId: string;
  code: AssetErrorCode;
  message: string;
}
export type BatchAssociateProjectAssetsErrors = AssetErrorDetails[];
export interface BatchAssociateProjectAssetsResponse {
  errors?: AssetErrorDetails[];
}
export interface DeleteDataSegmentEntry {
  timeSeriesId: string;
  startTimestamp: TimeInNanos;
  endTimestamp: TimeInNanos;
}
export type DeleteDataSegmentEntries = DeleteDataSegmentEntry[];
export interface BatchDeleteDatasetDataSegmentsRequest {
  datasetId: string;
  workspaceName: string;
  deleteDataSegmentEntries: DeleteDataSegmentEntry[];
  clientToken?: string;
}
export interface FailedDataSegmentDeletion {
  timeSeriesId: string;
  startTimestamp: TimeInNanos;
  endTimestamp: TimeInNanos;
  errorCode: DataSegmentErrorCode;
  errorMessage: string;
}
export type FailedDataSegmentDeletions = FailedDataSegmentDeletion[];
export interface BatchDeleteDatasetDataSegmentsResponse {
  datasetId: string;
  datasetVersion: string;
  errors: FailedDataSegmentDeletion[];
}
export interface DisassociateDataSegmentEntry {
  sourceDatasetId: string;
  timeSeriesId: string;
  startTimestamp: TimeInNanos;
  endTimestamp: TimeInNanos;
}
export type DisassociateDataSegmentEntries = DisassociateDataSegmentEntry[];
export interface BatchDisassociateDataSegmentsFromDatasetRequest {
  datasetId: string;
  workspaceName: string;
  disassociateDataSegmentEntries: DisassociateDataSegmentEntry[];
  clientToken?: string;
}
export interface FailedDataSegmentDisassociation {
  sourceDatasetId: string;
  timeSeriesId: string;
  startTimestamp: TimeInNanos;
  endTimestamp: TimeInNanos;
  errorCode: DataSegmentErrorCode;
  errorMessage: string;
}
export type FailedDataSegmentDisassociations = FailedDataSegmentDisassociation[];
export interface BatchDisassociateDataSegmentsFromDatasetResponse {
  datasetId: string;
  datasetVersion: string;
  failedDisassociations: FailedDataSegmentDisassociation[];
}
export interface BatchDisassociateProjectAssetsRequest {
  projectId: string;
  assetIds: string[];
  clientToken?: string;
}
export type BatchDisassociateProjectAssetsErrors = AssetErrorDetails[];
export interface BatchDisassociateProjectAssetsResponse {
  errors?: AssetErrorDetails[];
}
export type EntryId = string;
export type AssetPropertyAlias = string;
export type AggregateType =
  | "AVERAGE"
  | "COUNT"
  | "MAXIMUM"
  | "MINIMUM"
  | "SUM"
  | "STANDARD_DEVIATION"
  | (string & {});
export type AggregateTypes = AggregateType[];
export type Resolution = string;
export type Quality = "GOOD" | "BAD" | "UNCERTAIN" | (string & {});
export type Qualities = Quality[];
export type TimeOrdering = "ASCENDING" | "DESCENDING" | (string & {});
export interface BatchGetAssetPropertyAggregatesEntry {
  entryId: string;
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  aggregateTypes: AggregateType[];
  resolution: string;
  startDate: Date;
  endDate: Date;
  qualities?: Quality[];
  timeOrdering?: TimeOrdering;
}
export type BatchGetAssetPropertyAggregatesEntries = BatchGetAssetPropertyAggregatesEntry[];
export type NextToken = string;
export type BatchGetAssetPropertyAggregatesMaxResults = number;
export interface BatchGetAssetPropertyAggregatesRequest {
  entries: BatchGetAssetPropertyAggregatesEntry[];
  nextToken?: string;
  maxResults?: number;
}
export type BatchGetAssetPropertyAggregatesErrorCode =
  | "ResourceNotFoundException"
  | "InvalidRequestException"
  | "AccessDeniedException"
  | (string & {});
export type ErrorMessage = string;
export interface BatchGetAssetPropertyAggregatesErrorEntry {
  errorCode: BatchGetAssetPropertyAggregatesErrorCode;
  errorMessage: string;
  entryId: string;
}
export type BatchGetAssetPropertyAggregatesErrorEntries =
  BatchGetAssetPropertyAggregatesErrorEntry[];
export type AggregatedDoubleValue = number;
export interface Aggregates {
  average?: number;
  count?: number;
  maximum?: number;
  minimum?: number;
  sum?: number;
  standardDeviation?: number;
}
export interface AggregatedValue {
  timestamp: Date;
  quality?: Quality;
  value: Aggregates;
}
export type AggregatedValues = AggregatedValue[];
export interface BatchGetAssetPropertyAggregatesSuccessEntry {
  entryId: string;
  aggregatedValues: AggregatedValue[];
}
export type BatchGetAssetPropertyAggregatesSuccessEntries =
  BatchGetAssetPropertyAggregatesSuccessEntry[];
export type BatchEntryCompletionStatus = "SUCCESS" | "ERROR" | (string & {});
export interface BatchGetAssetPropertyAggregatesErrorInfo {
  errorCode: BatchGetAssetPropertyAggregatesErrorCode;
  errorTimestamp: Date;
}
export interface BatchGetAssetPropertyAggregatesSkippedEntry {
  entryId: string;
  completionStatus: BatchEntryCompletionStatus;
  errorInfo?: BatchGetAssetPropertyAggregatesErrorInfo;
}
export type BatchGetAssetPropertyAggregatesSkippedEntries =
  BatchGetAssetPropertyAggregatesSkippedEntry[];
export interface BatchGetAssetPropertyAggregatesResponse {
  errorEntries: BatchGetAssetPropertyAggregatesErrorEntry[];
  successEntries: BatchGetAssetPropertyAggregatesSuccessEntry[];
  skippedEntries: BatchGetAssetPropertyAggregatesSkippedEntry[];
  nextToken?: string;
}
export interface BatchGetAssetPropertyValueEntry {
  entryId: string;
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
}
export type BatchGetAssetPropertyValueEntries = BatchGetAssetPropertyValueEntry[];
export interface BatchGetAssetPropertyValueRequest {
  entries: BatchGetAssetPropertyValueEntry[];
  nextToken?: string;
}
export type BatchGetAssetPropertyValueErrorCode =
  | "ResourceNotFoundException"
  | "InvalidRequestException"
  | "AccessDeniedException"
  | (string & {});
export interface BatchGetAssetPropertyValueErrorEntry {
  errorCode: BatchGetAssetPropertyValueErrorCode;
  errorMessage: string;
  entryId: string;
}
export type BatchGetAssetPropertyValueErrorEntries = BatchGetAssetPropertyValueErrorEntry[];
export type PropertyValueStringValue = string;
export type PropertyValueIntegerValue = number;
export type PropertyValueDoubleValue = number;
export type PropertyValueBooleanValue = boolean;
export type RawValueType = "D" | "B" | "S" | "I" | "U" | (string & {});
export interface PropertyValueNullValue {
  valueType: RawValueType;
}
export interface Variant {
  stringValue?: string;
  integerValue?: number;
  doubleValue?: number;
  booleanValue?: boolean;
  nullValue?: PropertyValueNullValue;
}
export interface AssetPropertyValue {
  value: Variant;
  timestamp: TimeInNanos;
  quality?: Quality;
}
export interface BatchGetAssetPropertyValueSuccessEntry {
  entryId: string;
  assetPropertyValue?: AssetPropertyValue;
}
export type BatchGetAssetPropertyValueSuccessEntries = BatchGetAssetPropertyValueSuccessEntry[];
export interface BatchGetAssetPropertyValueErrorInfo {
  errorCode: BatchGetAssetPropertyValueErrorCode;
  errorTimestamp: Date;
}
export interface BatchGetAssetPropertyValueSkippedEntry {
  entryId: string;
  completionStatus: BatchEntryCompletionStatus;
  errorInfo?: BatchGetAssetPropertyValueErrorInfo;
}
export type BatchGetAssetPropertyValueSkippedEntries = BatchGetAssetPropertyValueSkippedEntry[];
export interface BatchGetAssetPropertyValueResponse {
  errorEntries: BatchGetAssetPropertyValueErrorEntry[];
  successEntries: BatchGetAssetPropertyValueSuccessEntry[];
  skippedEntries: BatchGetAssetPropertyValueSkippedEntry[];
  nextToken?: string;
}
export interface BatchGetAssetPropertyValueHistoryEntry {
  entryId: string;
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  startDate?: Date;
  endDate?: Date;
  qualities?: Quality[];
  timeOrdering?: TimeOrdering;
}
export type BatchGetAssetPropertyValueHistoryEntries = BatchGetAssetPropertyValueHistoryEntry[];
export type BatchGetAssetPropertyValueHistoryMaxResults = number;
export interface BatchGetAssetPropertyValueHistoryRequest {
  entries: BatchGetAssetPropertyValueHistoryEntry[];
  nextToken?: string;
  maxResults?: number;
}
export type BatchGetAssetPropertyValueHistoryErrorCode =
  | "ResourceNotFoundException"
  | "InvalidRequestException"
  | "AccessDeniedException"
  | (string & {});
export interface BatchGetAssetPropertyValueHistoryErrorEntry {
  errorCode: BatchGetAssetPropertyValueHistoryErrorCode;
  errorMessage: string;
  entryId: string;
}
export type BatchGetAssetPropertyValueHistoryErrorEntries =
  BatchGetAssetPropertyValueHistoryErrorEntry[];
export type AssetPropertyValueHistory = AssetPropertyValue[];
export interface BatchGetAssetPropertyValueHistorySuccessEntry {
  entryId: string;
  assetPropertyValueHistory: AssetPropertyValue[];
}
export type BatchGetAssetPropertyValueHistorySuccessEntries =
  BatchGetAssetPropertyValueHistorySuccessEntry[];
export interface BatchGetAssetPropertyValueHistoryErrorInfo {
  errorCode: BatchGetAssetPropertyValueHistoryErrorCode;
  errorTimestamp: Date;
}
export interface BatchGetAssetPropertyValueHistorySkippedEntry {
  entryId: string;
  completionStatus: BatchEntryCompletionStatus;
  errorInfo?: BatchGetAssetPropertyValueHistoryErrorInfo;
}
export type BatchGetAssetPropertyValueHistorySkippedEntries =
  BatchGetAssetPropertyValueHistorySkippedEntry[];
export interface BatchGetAssetPropertyValueHistoryResponse {
  errorEntries: BatchGetAssetPropertyValueHistoryErrorEntry[];
  successEntries: BatchGetAssetPropertyValueHistorySuccessEntry[];
  skippedEntries: BatchGetAssetPropertyValueHistorySkippedEntry[];
  nextToken?: string;
}
export type AssetPropertyValues = AssetPropertyValue[];
export interface PutAssetPropertyValueEntry {
  entryId: string;
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  propertyValues: AssetPropertyValue[];
}
export type PutAssetPropertyValueEntries = PutAssetPropertyValueEntry[];
export interface BatchPutAssetPropertyValueRequest {
  enablePartialEntryProcessing?: boolean;
  entries: PutAssetPropertyValueEntry[];
}
export type BatchPutAssetPropertyValueErrorCode =
  | "ResourceNotFoundException"
  | "InvalidRequestException"
  | "InternalFailureException"
  | "ServiceUnavailableException"
  | "ThrottlingException"
  | "LimitExceededException"
  | "ConflictingOperationException"
  | "TimestampOutOfRangeException"
  | "AccessDeniedException"
  | (string & {});
export type Timestamps = TimeInNanos[];
export interface BatchPutAssetPropertyError {
  errorCode: BatchPutAssetPropertyValueErrorCode;
  errorMessage: string;
  timestamps: TimeInNanos[];
}
export type BatchPutAssetPropertyErrors = BatchPutAssetPropertyError[];
export interface BatchPutAssetPropertyErrorEntry {
  entryId: string;
  errors: BatchPutAssetPropertyError[];
}
export type BatchPutAssetPropertyErrorEntries = BatchPutAssetPropertyErrorEntry[];
export interface BatchPutAssetPropertyValueResponse {
  errorEntries: BatchPutAssetPropertyErrorEntry[];
}
export interface CancelEnrichmentJobRequest {
  workspaceName: string;
  jobId: string;
}
export type EnrichmentJobStatus =
  | "PENDING"
  | "RUNNING"
  | "COMPLETED"
  | "FAILED"
  | "TIMED_OUT"
  | "CANCELLED"
  | (string & {});
export interface CancelEnrichmentJobResponse {
  jobId: string;
  status: EnrichmentJobStatus;
}
export type ResourceName = string;
export type CancelPipelineExecutionRequestReasonString = string;
export interface CancelPipelineExecutionRequest {
  workspaceName: string;
  pipelineName: string;
  pipelineExecutionId: string;
  reason?: string;
}
export type PipelineExecutionState =
  | "NOT_STARTED"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELLING"
  | "CANCELLED"
  | (string & {});
export interface CancelPipelineExecutionResponse {
  state: PipelineExecutionState;
}
export type QueryId = string;
export interface CancelQueryRequest {
  workspaceName: string;
  queryId: string;
}
export type QueryStatus =
  | "SUBMITTED"
  | "RUNNING"
  | "COMPLETED"
  | "FAILED"
  | "CANCELED"
  | "CANCELING"
  | (string & {});
export interface CancelQueryResponse {
  queryId: string;
  status: QueryStatus;
}
export type IdentityId = string;
export interface UserIdentity {
  id: string;
}
export interface GroupIdentity {
  id: string;
}
export type IamArn = string;
export interface IAMUserIdentity {
  arn: string;
}
export interface IAMRoleIdentity {
  arn: string;
}
export interface Identity {
  user?: UserIdentity;
  group?: GroupIdentity;
  iamUser?: IAMUserIdentity;
  iamRole?: IAMRoleIdentity;
}
export interface PortalResource {
  id: string;
}
export interface ProjectResource {
  id: string;
}
export interface Resource {
  portal?: PortalResource;
  project?: ProjectResource;
}
export type Permission = "ADMINISTRATOR" | "VIEWER" | (string & {});
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateAccessPolicyRequest {
  accessPolicyIdentity: Identity;
  accessPolicyResource: Resource;
  accessPolicyPermission: Permission;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type ARN = string;
export interface CreateAccessPolicyResponse {
  accessPolicyId: string;
  accessPolicyArn: string;
}
export type ApplicationName = string;
export type Description = string;
export interface CreateApplicationRequest {
  clientToken?: string;
  idcInstanceArn: string;
  workspaceName: string;
  name: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
}
export type ApplicationId = string;
export type DnsSubdomain = string;
export type ApplicationStatus = "CREATING" | "ACTIVE" | "DELETING" | (string & {});
export interface CreateApplicationResponse {
  arn: string;
  id: string;
  dnsSubdomain: string;
  name: string;
  status: ApplicationStatus;
}
export type Name = string;
export type ExternalId = string;
export interface CreateAssetRequest {
  assetName: string;
  assetModelId: string;
  assetId?: string;
  assetExternalId?: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
  assetDescription?: string;
}
export type AssetState = "CREATING" | "ACTIVE" | "UPDATING" | "DELETING" | "FAILED" | (string & {});
export type ErrorCode = "VALIDATION_ERROR" | "INTERNAL_FAILURE" | (string & {});
export type DetailedErrorCode =
  | "INCOMPATIBLE_COMPUTE_LOCATION"
  | "INCOMPATIBLE_FORWARDING_CONFIGURATION"
  | (string & {});
export type DetailedErrorMessage = string;
export interface DetailedError {
  code: DetailedErrorCode;
  message: string;
}
export type DetailedErrors = DetailedError[];
export interface ErrorDetails {
  code: ErrorCode;
  message: string;
  details?: DetailedError[];
}
export interface AssetStatus {
  state: AssetState;
  error?: ErrorDetails;
}
export interface CreateAssetResponse {
  assetId: string;
  assetArn: string;
  assetStatus: AssetStatus;
}
export type AssetModelType = "ASSET_MODEL" | "COMPONENT_MODEL" | "INTERFACE" | (string & {});
export type PropertyDataType =
  | "STRING"
  | "INTEGER"
  | "DOUBLE"
  | "BOOLEAN"
  | "STRUCT"
  | "VIDEO"
  | "ANNOTATION"
  | "JSON"
  | (string & {});
export type PropertyUnit = string;
export type DefaultValue = string;
export interface Attribute {
  defaultValue?: string;
}
export type ForwardingConfigState = "DISABLED" | "ENABLED" | (string & {});
export interface ForwardingConfig {
  state: ForwardingConfigState;
}
export interface MeasurementProcessingConfig {
  forwardingConfig: ForwardingConfig;
}
export interface Measurement {
  processingConfig?: MeasurementProcessingConfig;
}
export type Expression = string;
export type VariableName = string;
export type Macro = string;
export interface AssetModelPropertyPathSegment {
  id?: string;
  name?: string;
}
export type AssetModelPropertyPath = AssetModelPropertyPathSegment[];
export interface VariableValue {
  propertyId?: string;
  hierarchyId?: string;
  propertyPath?: AssetModelPropertyPathSegment[];
}
export interface ExpressionVariable {
  name: string;
  value: VariableValue;
}
export type ExpressionVariables = ExpressionVariable[];
export type ComputeLocation = "EDGE" | "CLOUD" | (string & {});
export interface TransformProcessingConfig {
  computeLocation: ComputeLocation;
  forwardingConfig?: ForwardingConfig;
}
export interface Transform {
  expression: string;
  variables: ExpressionVariable[];
  processingConfig?: TransformProcessingConfig;
}
export type Interval = string;
export type Offset = string;
export interface TumblingWindow {
  interval: string;
  offset?: string;
}
export interface MetricWindow {
  tumbling?: TumblingWindow;
}
export interface MetricProcessingConfig {
  computeLocation: ComputeLocation;
}
export interface Metric {
  expression?: string;
  variables?: ExpressionVariable[];
  window: MetricWindow;
  processingConfig?: MetricProcessingConfig;
}
export interface PropertyType {
  attribute?: Attribute;
  measurement?: Measurement;
  transform?: Transform;
  metric?: Metric;
}
export interface AssetModelPropertyDefinition {
  id?: string;
  externalId?: string;
  name: string;
  dataType: PropertyDataType;
  dataTypeSpec?: string;
  unit?: string;
  type: PropertyType;
}
export type AssetModelPropertyDefinitions = AssetModelPropertyDefinition[];
export interface AssetModelHierarchyDefinition {
  id?: string;
  externalId?: string;
  name: string;
  childAssetModelId: string;
}
export type AssetModelHierarchyDefinitions = AssetModelHierarchyDefinition[];
export interface AssetModelCompositeModelDefinition {
  id?: string;
  externalId?: string;
  name: string;
  description?: string;
  type: string;
  properties?: AssetModelPropertyDefinition[];
}
export type AssetModelCompositeModelDefinitions = AssetModelCompositeModelDefinition[];
export interface CreateAssetModelRequest {
  assetModelName: string;
  assetModelType?: AssetModelType;
  assetModelId?: string;
  assetModelExternalId?: string;
  assetModelDescription?: string;
  assetModelProperties?: AssetModelPropertyDefinition[];
  assetModelHierarchies?: AssetModelHierarchyDefinition[];
  assetModelCompositeModels?: AssetModelCompositeModelDefinition[];
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type AssetModelState =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "PROPAGATING"
  | "DELETING"
  | "FAILED"
  | (string & {});
export interface AssetModelStatus {
  state: AssetModelState;
  error?: ErrorDetails;
}
export interface CreateAssetModelResponse {
  assetModelId: string;
  assetModelArn: string;
  assetModelStatus: AssetModelStatus;
}
export type ETag = string;
export type SelectAll = string;
export type AssetModelVersionType = "LATEST" | "ACTIVE" | (string & {});
export interface CreateAssetModelCompositeModelRequest {
  assetModelId: string;
  assetModelCompositeModelExternalId?: string;
  parentAssetModelCompositeModelId?: string;
  assetModelCompositeModelId?: string;
  assetModelCompositeModelDescription?: string;
  assetModelCompositeModelName: string;
  assetModelCompositeModelType: string;
  clientToken?: string;
  composedAssetModelId?: string;
  assetModelCompositeModelProperties?: AssetModelPropertyDefinition[];
  ifMatch?: string;
  ifNoneMatch?: string;
  matchForVersionType?: AssetModelVersionType;
}
export interface AssetModelCompositeModelPathSegment {
  id?: string;
  name?: string;
}
export type AssetModelCompositeModelPath = AssetModelCompositeModelPathSegment[];
export interface CreateAssetModelCompositeModelResponse {
  assetModelCompositeModelId: string;
  assetModelCompositeModelPath: AssetModelCompositeModelPathSegment[];
  assetModelStatus: AssetModelStatus;
  assetModelId?: string;
}
export type BulkImportJobName = string;
export type Bucket = string;
export type ColumnName =
  | "ALIAS"
  | "ASSET_ID"
  | "PROPERTY_ID"
  | "DATA_TYPE"
  | "TIMESTAMP_SECONDS"
  | "TIMESTAMP_NANO_OFFSET"
  | "QUALITY"
  | "VALUE"
  | (string & {});
export type ColumnNames = ColumnName[];
export interface Csv {
  columnNames: ColumnName[];
}
export interface Parquet {}
export interface Mp4 {}
export interface Annotation {}
export interface FileFormat {
  csv?: Csv;
  parquet?: Parquet;
  mp4?: Mp4;
  annotation?: Annotation;
}
export interface File {
  bucket: string;
  key: string;
  versionId?: string;
  alias?: string;
  startTime?: TimeInNanos;
  fileFormat?: FileFormat;
}
export type Files = File[];
export interface ErrorReportLocation {
  bucket: string;
  prefix: string;
}
export interface JobConfiguration {
  fileFormat?: FileFormat;
}
export type AdaptiveIngestion = boolean;
export type DeleteFilesAfterImport = boolean;
export interface CreateBulkImportJobRequest {
  jobName: string;
  jobRoleArn: string;
  files: File[];
  errorReportLocation: ErrorReportLocation;
  jobConfiguration?: JobConfiguration;
  adaptiveIngestion?: boolean;
  deleteFilesAfterImport?: boolean;
  datasetId?: string;
  workspaceName?: string;
}
export type JobStatus =
  | "PENDING"
  | "CANCELLED"
  | "RUNNING"
  | "COMPLETED"
  | "FAILED"
  | "COMPLETED_WITH_FAILURES"
  | (string & {});
export interface CreateBulkImportJobResponse {
  jobId: string;
  jobName: string;
  jobStatus: JobStatus;
}
export type RestrictedName = string;
export type RestrictedDescription = string;
export type InputProperties = string;
export type ResultProperty = string;
export interface ComputationModelAnomalyDetectionConfiguration {
  inputProperties: string;
  resultProperty: string;
}
export interface ComputationModelConfiguration {
  anomalyDetection?: ComputationModelAnomalyDetectionConfiguration;
}
export type ComputationModelDataBindingVariable = string;
export interface AssetModelPropertyBindingValue {
  assetModelId: string;
  propertyId: string;
}
export interface AssetPropertyBindingValue {
  assetId: string;
  propertyId: string;
}
export type BindingValueList = ComputationModelDataBindingValue[];
export interface ComputationModelDataBindingValue {
  assetModelProperty?: AssetModelPropertyBindingValue;
  assetProperty?: AssetPropertyBindingValue;
  list?: ComputationModelDataBindingValue[];
}
export type ComputationModelDataBinding = {
  [key: string]: ComputationModelDataBindingValue | undefined;
};
export interface CreateComputationModelRequest {
  computationModelName: string;
  computationModelDescription?: string;
  computationModelConfiguration: ComputationModelConfiguration;
  computationModelDataBinding: { [key: string]: ComputationModelDataBindingValue | undefined };
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type ComputationModelState =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "FAILED"
  | (string & {});
export interface ComputationModelStatus {
  state: ComputationModelState;
  error?: ErrorDetails;
}
export interface CreateComputationModelResponse {
  computationModelId: string;
  computationModelArn: string;
  computationModelStatus: ComputationModelStatus;
}
export type DashboardDefinition = string;
export interface CreateDashboardRequest {
  projectId: string;
  dashboardName: string;
  dashboardDescription?: string;
  dashboardDefinition: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateDashboardResponse {
  dashboardId: string;
  dashboardArn: string;
}
export type DatasetTypeEnum = "SESSION" | "CURATED" | "EXTERNAL" | (string & {});
export interface SessionConfig {
  sessionStartTimestamp: TimeInNanos;
  sessionEndTimestamp: TimeInNanos;
}
export interface DatasetConfig {
  session?: SessionConfig;
}
export type MetadataKey = string;
export type MetadataValue = string;
export type Metadata = { [key: string]: string | undefined };
export type DatasetSourceType = "KENDRA" | "SITEWISE" | (string & {});
export type DatasetSourceFormat = "KNOWLEDGE_BASE" | "TIMESERIES" | (string & {});
export interface KendraSourceDetail {
  knowledgeBaseArn: string;
  roleArn: string;
}
export interface SourceDetail {
  kendra?: KendraSourceDetail;
}
export interface DatasetSource {
  sourceType: DatasetSourceType;
  sourceFormat: DatasetSourceFormat;
  sourceDetail?: SourceDetail;
}
export interface CreateDatasetRequest {
  datasetId?: string;
  datasetName: string;
  datasetDescription?: string;
  datasetType?: DatasetTypeEnum;
  datasetConfig?: DatasetConfig;
  workspaceName?: string;
  metadata?: { [key: string]: string | undefined };
  datasetSource: DatasetSource;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type DatasetState =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "FAILED"
  | (string & {});
export interface DatasetStatus {
  state: DatasetState;
  error?: ErrorDetails;
}
export interface CreateDatasetResponse {
  datasetId: string;
  datasetArn: string;
  datasetStatus: DatasetStatus;
}
export type S3Uri = string;
export interface TrimSettings {
  startTime: TimeInNanos;
  endTime: TimeInNanos;
}
export type PositiveInteger = number;
export interface FormatSettings {
  framesPerSecond?: number;
  widthInPixels?: number;
  heightInPixels?: number;
}
export interface TimeseriesItem {
  timeSeriesId?: string;
  propertyAlias?: string;
  trimSettings?: TrimSettings;
  formatSettings?: FormatSettings;
}
export type TimeseriesList = TimeseriesItem[];
export type DatasetId = string;
export type ExportDataType = "VIDEO" | "TELEMETRY" | "ANNOTATION" | (string & {});
export type ExportDataTypeList = ExportDataType[];
export interface DatasetItem {
  datasetId: string;
  trimSettings?: TrimSettings;
  exportDataTypes?: ExportDataType[];
}
export type ProcessingInput =
  | { timeseries: TimeseriesItem[]; dataset?: never }
  | { timeseries?: never; dataset: DatasetItem };
export interface ExportErrorReportLocation {
  s3Uri: string;
}
export interface CreateDatasetExportJobRequest {
  workspaceName: string;
  clientToken?: string;
  destinationS3Uri: string;
  input: ProcessingInput;
  errorReportLocation: ExportErrorReportLocation;
}
export type DatasetExportJobId = string;
export interface CreateDatasetExportJobResponse {
  jobId: string;
  workspaceName: string;
}
export interface EnrichmentTrimSettings {
  startTime: TimeInNanos;
  endTime: TimeInNanos;
}
export interface EventDetection {
  datasetId: string;
  timeSeriesId?: string;
  propertyAlias?: string;
  trimSettings: EnrichmentTrimSettings;
}
export type EnrichmentJobConfiguration = { eventDetection: EventDetection };
export interface CreateEnrichmentJobRequest {
  workspaceName: string;
  jobConfiguration: EnrichmentJobConfiguration;
  clientToken?: string;
}
export interface CreateEnrichmentJobResponse {
  jobId: string;
  status: EnrichmentJobStatus;
  createdAt: Date;
}
export type GatewayName = string;
export interface Greengrass {
  groupArn: string;
}
export type CoreDeviceThingName = string;
export type CoreDeviceOperatingSystem =
  | "LINUX_AARCH64"
  | "LINUX_AMD64"
  | "WINDOWS_AMD64"
  | (string & {});
export interface GreengrassV2 {
  coreDeviceThingName: string;
  coreDeviceOperatingSystem?: CoreDeviceOperatingSystem;
}
export type IotCoreThingName = string;
export interface SiemensIE {
  iotCoreThingName: string;
}
export interface GatewayPlatform {
  greengrass?: Greengrass;
  greengrassV2?: GreengrassV2;
  siemensIE?: SiemensIE;
}
export type GatewayVersion = string;
export interface CreateGatewayRequest {
  gatewayName: string;
  gatewayPlatform: GatewayPlatform;
  gatewayVersion?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateGatewayResponse {
  gatewayId: string;
  gatewayArn: string;
}
export type EnvironmentVariableName = string;
export type EnvironmentVariableValue = string;
export type EnvironmentVariablesMap = { [key: string]: string | undefined };
export type ComputeNodeNameList = string[];
export interface ComputeNode {
  computeNodeName: string;
  taskName: string;
  environmentVariables?: { [key: string]: string | undefined };
  dependsOn?: string[];
}
export type ComputeNodeList = ComputeNode[];
export interface CreatePipelineRequest {
  workspaceName: string;
  pipelineName: string;
  description?: string;
  environmentVariables?: { [key: string]: string | undefined };
  computations: ComputeNode[];
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
}
export type ResourceErrorCode = "VALIDATION_ERROR" | "INTERNAL_FAILURE" | (string & {});
export interface ResourceError {
  code?: ResourceErrorCode;
  message?: string;
}
export type ResourceState =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "FAILED"
  | (string & {});
export interface ResourceStatus {
  error?: ResourceError;
  state?: ResourceState;
}
export interface CreatePipelineResponse {
  pipelineName: string;
  pipelineArn: string;
  version: string;
  status: ResourceStatus;
}
export type Email = string | redacted.Redacted<string>;
export type ImageFileData = Uint8Array;
export type ImageFileType = "PNG" | (string & {});
export interface ImageFile {
  data: Uint8Array;
  type: ImageFileType;
}
export type AuthMode = "IAM" | "SSO" | (string & {});
export interface Alarms {
  alarmRoleArn: string;
  notificationLambdaArn?: string;
}
export type PortalType = "SITEWISE_PORTAL_V1" | "SITEWISE_PORTAL_V2" | (string & {});
export type PortalTypeKey = string;
export type PortalTools = string[];
export interface PortalTypeEntry {
  portalTools?: string[];
}
export type PortalTypeConfiguration = { [key: string]: PortalTypeEntry | undefined };
export interface CreatePortalRequest {
  portalName: string;
  portalDescription?: string;
  portalContactEmail: string | redacted.Redacted<string>;
  clientToken?: string;
  portalLogoImageFile?: ImageFile;
  roleArn: string;
  tags?: { [key: string]: string | undefined };
  portalAuthMode?: AuthMode;
  notificationSenderEmail?: string | redacted.Redacted<string>;
  alarms?: Alarms;
  portalType?: PortalType;
  portalTypeConfiguration?: { [key: string]: PortalTypeEntry | undefined };
}
export type Url = string;
export type PortalState =
  | "CREATING"
  | "PENDING"
  | "UPDATING"
  | "DELETING"
  | "ACTIVE"
  | "FAILED"
  | (string & {});
export type MonitorErrorCode =
  | "INTERNAL_FAILURE"
  | "VALIDATION_ERROR"
  | "LIMIT_EXCEEDED"
  | (string & {});
export type MonitorErrorMessage = string;
export interface MonitorErrorDetails {
  code?: MonitorErrorCode;
  message?: string;
}
export interface PortalStatus {
  state: PortalState;
  error?: MonitorErrorDetails;
}
export type SSOApplicationId = string;
export interface CreatePortalResponse {
  portalId: string;
  portalArn: string;
  portalStartUrl: string;
  portalStatus: PortalStatus;
  ssoApplicationId: string;
}
export interface CreateProjectRequest {
  portalId: string;
  projectName: string;
  projectDescription?: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateProjectResponse {
  projectId: string;
  projectArn: string;
}
export type EcrUri = string | redacted.Redacted<string>;
export type IamRoleArn = string | redacted.Redacted<string>;
export type ProcessingType =
  | "GENERIC_COMPUTE_PROCESSING"
  | "HARDWARE_ACCELERATED_PROCESSING"
  | (string & {});
export type ProcessingUnit =
  | "UNITS_2"
  | "UNITS_4"
  | "UNITS_8"
  | "UNITS_12"
  | "UNITS_16"
  | "UNITS_24"
  | "UNITS_32"
  | "UNITS_36"
  | "UNITS_48"
  | "UNITS_60"
  | "UNITS_64"
  | "UNITS_72"
  | "UNITS_84"
  | "UNITS_96"
  | (string & {});
export type StorageClass =
  | "STANDARD_1"
  | "STANDARD_2"
  | "THROUGHPUT_1"
  | "THROUGHPUT_2"
  | (string & {});
export type EphemeralStorageConfigurationStorageSizeInGiBInteger = number;
export interface EphemeralStorageConfiguration {
  storageClass: StorageClass;
  storageSizeInGiB: number;
}
export type CommandList = string[];
export type TimeoutSeconds = number;
export type MountRelativePath = string;
export type MountS3AccessPointArn = string;
export type MountS3KeyPrefix = string;
export interface S3AccessPointSource {
  accessPointArn: string;
  prefix?: string;
}
export type MountSource = { s3AccessPoint: S3AccessPointSource };
export type MountStorageType = "SHARED_STORAGE" | (string & {});
export interface Mount {
  name: string;
  relativePath: string;
  source: MountSource;
  storageType: MountStorageType;
}
export type MountList = Mount[];
export interface ContainerTaskConfiguration {
  ecrUri: string | redacted.Redacted<string>;
  taskExecutionRole: string | redacted.Redacted<string>;
  processingType: ProcessingType;
  processingUnit: ProcessingUnit;
  ephemeralStorageConfiguration?: EphemeralStorageConfiguration;
  command?: string[];
  timeoutSeconds?: number;
  environmentVariables?: { [key: string]: string | undefined };
  mounts?: Mount[];
}
export type TaskConfiguration = { containerTaskConfiguration: ContainerTaskConfiguration };
export interface CreateTaskRequest {
  workspaceName: string;
  taskName: string;
  description?: string;
  taskConfiguration: TaskConfiguration;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
}
export interface CreateTaskResponse {
  taskName: string;
  taskArn: string;
  version: string;
  status: ResourceStatus;
}
export type EncryptionType = "SITEWISE_DEFAULT_ENCRYPTION" | "KMS_BASED_ENCRYPTION" | (string & {});
export type KmsKeyId = string;
export interface WorkspaceEncryptionConfiguration {
  encryptionType: EncryptionType;
  kmsKeyId?: string;
}
export interface CreateWorkspaceRequest {
  workspaceName: string;
  workspaceDescription?: string;
  encryptionConfiguration: WorkspaceEncryptionConfiguration;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
}
export type WorkspaceState =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "FAILED"
  | (string & {});
export interface WorkspaceErrorDetails {
  code: ErrorCode;
  message: string;
}
export interface WorkspaceStatus {
  state: WorkspaceState;
  error?: WorkspaceErrorDetails;
}
export interface CreateWorkspaceResponse {
  workspaceName: string;
  workspaceArn: string;
  workspaceStatus: WorkspaceStatus;
}
export interface DeleteAccessPolicyRequest {
  accessPolicyId: string;
  clientToken?: string;
}
export interface DeleteAccessPolicyResponse {}
export interface DeleteApplicationRequest {
  workspaceName: string;
  id: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteAssetRequest {
  assetId: string;
  clientToken?: string;
}
export interface DeleteAssetResponse {
  assetId?: string;
  assetStatus: AssetStatus;
}
export interface DeleteAssetModelRequest {
  assetModelId: string;
  clientToken?: string;
  ifMatch?: string;
  ifNoneMatch?: string;
  matchForVersionType?: AssetModelVersionType;
}
export interface DeleteAssetModelResponse {
  assetModelId?: string;
  assetModelStatus: AssetModelStatus;
}
export interface DeleteAssetModelCompositeModelRequest {
  assetModelId: string;
  assetModelCompositeModelId: string;
  clientToken?: string;
  ifMatch?: string;
  ifNoneMatch?: string;
  matchForVersionType?: AssetModelVersionType;
}
export interface DeleteAssetModelCompositeModelResponse {
  assetModelStatus: AssetModelStatus;
  assetModelId?: string;
}
export interface DeleteAssetModelInterfaceRelationshipRequest {
  assetModelId: string;
  interfaceAssetModelId: string;
  clientToken?: string;
}
export interface DeleteAssetModelInterfaceRelationshipResponse {
  assetModelId: string;
  interfaceAssetModelId: string;
  assetModelArn: string;
  assetModelStatus: AssetModelStatus;
}
export interface DeleteComputationModelRequest {
  computationModelId: string;
  clientToken?: string;
}
export interface DeleteComputationModelResponse {
  computationModelStatus: ComputationModelStatus;
}
export interface DeleteDashboardRequest {
  dashboardId: string;
  clientToken?: string;
}
export interface DeleteDashboardResponse {}
export interface DeleteDatasetRequest {
  datasetId: string;
  workspaceName?: string;
  clientToken?: string;
}
export interface DeleteDatasetResponse {
  datasetStatus: DatasetStatus;
}
export interface DeleteGatewayRequest {
  gatewayId: string;
}
export interface DeleteGatewayResponse {}
export interface DeletePipelineRequest {
  workspaceName: string;
  pipelineName: string;
}
export interface DeletePipelineResponse {
  status: ResourceStatus;
}
export interface DeletePortalRequest {
  portalId: string;
  clientToken?: string;
}
export interface DeletePortalResponse {
  portalStatus: PortalStatus;
}
export interface DeleteProjectRequest {
  projectId: string;
  clientToken?: string;
}
export interface DeleteProjectResponse {}
export interface DeleteTaskRequest {
  workspaceName: string;
  taskName: string;
}
export interface DeleteTaskResponse {
  status: ResourceStatus;
}
export interface DeleteTimeSeriesRequest {
  alias?: string;
  assetId?: string;
  propertyId?: string;
  clientToken?: string;
  workspaceName?: string;
}
export interface DeleteTimeSeriesResponse {}
export interface DeleteWorkspaceRequest {
  workspaceName: string;
  clientToken?: string;
}
export interface DeleteWorkspaceResponse {
  workspaceStatus: WorkspaceStatus;
}
export interface DescribeAccessPolicyRequest {
  accessPolicyId: string;
}
export interface DescribeAccessPolicyResponse {
  accessPolicyId: string;
  accessPolicyArn: string;
  accessPolicyIdentity: Identity;
  accessPolicyResource: Resource;
  accessPolicyPermission: Permission;
  accessPolicyCreationDate: Date;
  accessPolicyLastUpdateDate: Date;
}
export interface DescribeActionRequest {
  actionId: string;
}
export interface TargetResource {
  assetId?: string;
  computationModelId?: string;
}
export type ActionPayloadString = string;
export interface ActionPayload {
  stringValue: string;
}
export interface ResolveTo {
  assetId: string;
}
export interface DescribeActionResponse {
  actionId: string;
  targetResource: TargetResource;
  actionDefinitionId: string;
  actionPayload: ActionPayload;
  executionTime: Date;
  resolveTo?: ResolveTo;
}
export interface DescribeApplicationRequest {
  workspaceName: string;
  id: string;
}
export type ApplicationDescription = string;
export interface DescribeApplicationResponse {
  arn: string;
  createdAt: Date;
  dnsSubdomain: string;
  description?: string;
  id: string;
  idcApplicationArn: string;
  name: string;
  status: ApplicationStatus;
  updatedAt: Date;
  workspaceName: string;
}
export type ExcludeProperties = boolean;
export interface DescribeAssetRequest {
  assetId: string;
  excludeProperties?: boolean;
}
export type PropertyNotificationTopic = string;
export type PropertyNotificationState = "ENABLED" | "DISABLED" | (string & {});
export interface PropertyNotification {
  topic: string;
  state: PropertyNotificationState;
}
export interface AssetPropertyPathSegment {
  id?: string;
  name?: string;
}
export type AssetPropertyPath = AssetPropertyPathSegment[];
export interface AssetProperty {
  id: string;
  externalId?: string;
  name: string;
  alias?: string;
  notification?: PropertyNotification;
  dataType: PropertyDataType;
  dataTypeSpec?: string;
  unit?: string;
  path?: AssetPropertyPathSegment[];
}
export type AssetProperties = AssetProperty[];
export interface AssetHierarchy {
  id?: string;
  externalId?: string;
  name: string;
}
export type AssetHierarchies = AssetHierarchy[];
export interface AssetCompositeModel {
  name: string;
  description?: string;
  type: string;
  properties: AssetProperty[];
  id?: string;
  externalId?: string;
}
export type AssetCompositeModels = AssetCompositeModel[];
export interface AssetCompositeModelPathSegment {
  id?: string;
  name?: string;
}
export type AssetCompositeModelPath = AssetCompositeModelPathSegment[];
export interface AssetCompositeModelSummary {
  id: string;
  externalId?: string;
  name: string;
  type: string;
  description: string;
  path: AssetCompositeModelPathSegment[];
}
export type AssetCompositeModelSummaries = AssetCompositeModelSummary[];
export interface DescribeAssetResponse {
  assetId: string;
  assetExternalId?: string;
  assetArn: string;
  assetName: string;
  assetModelId: string;
  assetProperties: AssetProperty[];
  assetHierarchies: AssetHierarchy[];
  assetCompositeModels?: AssetCompositeModel[];
  assetCreationDate: Date;
  assetLastUpdateDate: Date;
  assetStatus: AssetStatus;
  assetDescription?: string;
  assetCompositeModelSummaries?: AssetCompositeModelSummary[];
}
export interface DescribeAssetCompositeModelRequest {
  assetId: string;
  assetCompositeModelId: string;
}
export interface ActionDefinition {
  actionDefinitionId: string;
  actionName: string;
  actionType: string;
}
export type ActionDefinitions = ActionDefinition[];
export interface DescribeAssetCompositeModelResponse {
  assetId: string;
  assetCompositeModelId: string;
  assetCompositeModelExternalId?: string;
  assetCompositeModelPath: AssetCompositeModelPathSegment[];
  assetCompositeModelName: string;
  assetCompositeModelDescription: string;
  assetCompositeModelType: string;
  assetCompositeModelProperties: AssetProperty[];
  assetCompositeModelSummaries: AssetCompositeModelSummary[];
  actionDefinitions?: ActionDefinition[];
}
export type AssetModelVersionFilter = string;
export interface DescribeAssetModelRequest {
  assetModelId: string;
  excludeProperties?: boolean;
  assetModelVersion?: string;
}
export interface AssetModelProperty {
  id?: string;
  externalId?: string;
  name: string;
  dataType: PropertyDataType;
  dataTypeSpec?: string;
  unit?: string;
  type: PropertyType;
  path?: AssetModelPropertyPathSegment[];
}
export type AssetModelProperties = AssetModelProperty[];
export interface AssetModelHierarchy {
  id?: string;
  externalId?: string;
  name: string;
  childAssetModelId: string;
}
export type AssetModelHierarchies = AssetModelHierarchy[];
export interface AssetModelCompositeModel {
  name: string;
  description?: string;
  type: string;
  properties?: AssetModelProperty[];
  id?: string;
  externalId?: string;
}
export type AssetModelCompositeModels = AssetModelCompositeModel[];
export interface AssetModelCompositeModelSummary {
  id: string;
  externalId?: string;
  name: string;
  type: string;
  description?: string;
  path?: AssetModelCompositeModelPathSegment[];
}
export type AssetModelCompositeModelSummaries = AssetModelCompositeModelSummary[];
export interface InterfaceRelationship {
  id: string;
}
export type InterfaceDetails = InterfaceRelationship[];
export interface DescribeAssetModelResponse {
  assetModelId: string;
  assetModelExternalId?: string;
  assetModelArn: string;
  assetModelName: string;
  assetModelType?: AssetModelType;
  assetModelDescription: string;
  assetModelProperties: AssetModelProperty[];
  assetModelHierarchies: AssetModelHierarchy[];
  assetModelCompositeModels?: AssetModelCompositeModel[];
  assetModelCompositeModelSummaries?: AssetModelCompositeModelSummary[];
  assetModelCreationDate: Date;
  assetModelLastUpdateDate: Date;
  assetModelStatus: AssetModelStatus;
  assetModelVersion?: string;
  interfaceDetails?: InterfaceRelationship[];
  eTag?: string;
}
export interface DescribeAssetModelCompositeModelRequest {
  assetModelId: string;
  assetModelCompositeModelId: string;
  assetModelVersion?: string;
}
export interface CompositionRelationshipItem {
  id?: string;
}
export type CompositionRelationship = CompositionRelationshipItem[];
export interface CompositionDetails {
  compositionRelationship?: CompositionRelationshipItem[];
}
export interface DescribeAssetModelCompositeModelResponse {
  assetModelId: string;
  assetModelCompositeModelId: string;
  assetModelCompositeModelExternalId?: string;
  assetModelCompositeModelPath: AssetModelCompositeModelPathSegment[];
  assetModelCompositeModelName: string;
  assetModelCompositeModelDescription: string;
  assetModelCompositeModelType: string;
  assetModelCompositeModelProperties: AssetModelProperty[];
  compositionDetails?: CompositionDetails;
  assetModelCompositeModelSummaries: AssetModelCompositeModelSummary[];
  actionDefinitions?: ActionDefinition[];
}
export interface DescribeAssetModelInterfaceRelationshipRequest {
  assetModelId: string;
  interfaceAssetModelId: string;
}
export interface PropertyMapping {
  assetModelPropertyId: string;
  interfaceAssetModelPropertyId: string;
}
export type PropertyMappings = PropertyMapping[];
export interface HierarchyMapping {
  assetModelHierarchyId: string;
  interfaceAssetModelHierarchyId: string;
}
export type HierarchyMappings = HierarchyMapping[];
export interface DescribeAssetModelInterfaceRelationshipResponse {
  assetModelId: string;
  interfaceAssetModelId: string;
  propertyMappings: PropertyMapping[];
  hierarchyMappings: HierarchyMapping[];
}
export interface DescribeAssetPropertyRequest {
  assetId: string;
  propertyId: string;
}
export interface Property {
  id: string;
  externalId?: string;
  name: string;
  alias?: string;
  notification?: PropertyNotification;
  dataType: PropertyDataType;
  unit?: string;
  type?: PropertyType;
  path?: AssetPropertyPathSegment[];
}
export interface CompositeModelProperty {
  name: string;
  type: string;
  assetProperty: Property;
  id?: string;
  externalId?: string;
}
export interface DescribeAssetPropertyResponse {
  assetId: string;
  assetExternalId?: string;
  assetName: string;
  assetModelId: string;
  assetProperty?: Property;
  compositeModel?: CompositeModelProperty;
}
export interface DescribeBulkImportJobRequest {
  jobId: string;
  workspaceName?: string;
}
export interface DescribeBulkImportJobResponse {
  jobId: string;
  jobName: string;
  jobStatus: JobStatus;
  jobRoleArn: string;
  files: File[];
  errorReportLocation: ErrorReportLocation;
  jobConfiguration?: JobConfiguration;
  jobCreationDate: Date;
  jobLastUpdateDate: Date;
  adaptiveIngestion?: boolean;
  deleteFilesAfterImport?: boolean;
  datasetId?: string;
  workspaceName?: string;
}
export type ComputationModelVersionFilter = string;
export interface DescribeComputationModelRequest {
  computationModelId: string;
  computationModelVersion?: string;
}
export interface DescribeComputationModelResponse {
  computationModelId: string;
  computationModelArn: string;
  computationModelName: string;
  computationModelDescription?: string;
  computationModelConfiguration: ComputationModelConfiguration;
  computationModelDataBinding: { [key: string]: ComputationModelDataBindingValue | undefined };
  computationModelCreationDate: Date;
  computationModelLastUpdateDate: Date;
  computationModelStatus: ComputationModelStatus;
  computationModelVersion: string;
  actionDefinitions: ActionDefinition[];
}
export type ResolveToResourceType = "ASSET" | (string & {});
export interface DescribeComputationModelExecutionSummaryRequest {
  computationModelId: string;
  resolveToResourceType?: ResolveToResourceType;
  resolveToResourceId?: string;
}
export type ComputationModelExecutionSummaryKey = string;
export type ComputationModelExecutionSummaryValue = string;
export type ComputationModelExecutionSummary = { [key: string]: string | undefined };
export interface DescribeComputationModelExecutionSummaryResponse {
  computationModelId: string;
  resolveTo?: ResolveTo;
  computationModelExecutionSummary: { [key: string]: string | undefined };
}
export interface DescribeDashboardRequest {
  dashboardId: string;
}
export interface DescribeDashboardResponse {
  dashboardId: string;
  dashboardArn: string;
  dashboardName: string;
  projectId: string;
  dashboardDescription?: string;
  dashboardDefinition: string;
  dashboardCreationDate: Date;
  dashboardLastUpdateDate: Date;
}
export interface DescribeDatasetRequest {
  datasetId: string;
  workspaceName?: string;
  datasetVersion?: string;
}
export type DatasetEnrichmentStatus =
  | "FULLY_ENRICHED"
  | "PARTIALLY_ENRICHED"
  | "NOT_ENRICHED"
  | (string & {});
export interface DatasetEnrichmentEntry {
  status: DatasetEnrichmentStatus;
  lastEnrichedAt?: Date;
}
export interface DatasetEnrichment {
  video?: DatasetEnrichmentEntry;
}
export interface DescribeDatasetResponse {
  datasetId: string;
  datasetArn: string;
  datasetName: string;
  datasetDescription: string;
  datasetType?: DatasetTypeEnum;
  datasetConfig?: DatasetConfig;
  workspaceName?: string;
  metadata?: { [key: string]: string | undefined };
  datasetSource: DatasetSource;
  datasetStatus: DatasetStatus;
  datasetCreationDate: Date;
  datasetLastUpdateDate: Date;
  datasetVersion?: string;
  enrichmentStatus?: DatasetEnrichment;
}
export interface DescribeDatasetExportJobRequest {
  workspaceName: string;
  jobId: string;
}
export type DatasetExportJobStatus =
  | "SUBMITTED"
  | "RUNNING"
  | "COMPLETED"
  | "COMPLETED_WITH_ERRORS"
  | "FAILED"
  | (string & {});
export interface DescribeDatasetExportJobResponse {
  jobId: string;
  workspaceName: string;
  status: DatasetExportJobStatus;
  startedAt: Date;
  completedAt?: Date;
  destinationS3Uri: string;
  errorReportLocation: ExportErrorReportLocation;
  input: ProcessingInput;
}
export interface DescribeDefaultEncryptionConfigurationRequest {}
export type ConfigurationState = "ACTIVE" | "UPDATE_IN_PROGRESS" | "UPDATE_FAILED" | (string & {});
export interface ConfigurationErrorDetails {
  code: ErrorCode;
  message: string;
}
export interface ConfigurationStatus {
  state: ConfigurationState;
  error?: ConfigurationErrorDetails;
}
export interface DescribeDefaultEncryptionConfigurationResponse {
  encryptionType: EncryptionType;
  kmsKeyArn?: string;
  configurationStatus: ConfigurationStatus;
}
export interface DescribeEnrichmentJobRequest {
  workspaceName: string;
  jobId: string;
}
export type JobType = "EVENT_DETECTION" | (string & {});
export interface DescribeEnrichmentJobResponse {
  jobId: string;
  status: EnrichmentJobStatus;
  workspaceName: string;
  jobType: JobType;
  jobConfiguration: EnrichmentJobConfiguration;
  createdAt: Date;
  updatedAt?: Date;
  completedAt?: Date;
  cancelledAt?: Date;
  failureMessage?: string;
}
export interface DescribeExecutionRequest {
  executionId: string;
}
export type ExecutionState = "RUNNING" | "COMPLETED" | "FAILED" | (string & {});
export interface ExecutionStatus {
  state: ExecutionState;
}
export type ExecutionResultKey = string;
export type ExecutionResultValue = string;
export type ExecutionResult = { [key: string]: string | undefined };
export type ExecutionDetailsKey = string;
export type ExecutionDetailsValue = string;
export type ExecutionDetails = { [key: string]: string | undefined };
export interface DescribeExecutionResponse {
  executionId: string;
  actionType?: string;
  targetResource: TargetResource;
  targetResourceVersion: string;
  resolveTo?: ResolveTo;
  executionStartTime: Date;
  executionEndTime?: Date;
  executionStatus: ExecutionStatus;
  executionResult?: { [key: string]: string | undefined };
  executionDetails?: { [key: string]: string | undefined };
  executionEntityVersion?: string;
}
export interface DescribeGatewayRequest {
  gatewayId: string;
}
export type CapabilityNamespace = string;
export type CapabilitySyncStatus =
  | "IN_SYNC"
  | "OUT_OF_SYNC"
  | "SYNC_FAILED"
  | "UNKNOWN"
  | "NOT_APPLICABLE"
  | (string & {});
export interface GatewayCapabilitySummary {
  capabilityNamespace: string;
  capabilitySyncStatus: CapabilitySyncStatus;
}
export type GatewayCapabilitySummaries = GatewayCapabilitySummary[];
export interface DescribeGatewayResponse {
  gatewayId: string;
  gatewayName: string;
  gatewayArn: string;
  gatewayPlatform?: GatewayPlatform;
  gatewayVersion?: string;
  gatewayCapabilitySummaries: GatewayCapabilitySummary[];
  creationDate: Date;
  lastUpdateDate: Date;
}
export interface DescribeGatewayCapabilityConfigurationRequest {
  gatewayId: string;
  capabilityNamespace: string;
}
export type CapabilityConfiguration = string;
export interface DescribeGatewayCapabilityConfigurationResponse {
  gatewayId: string;
  capabilityNamespace: string;
  capabilityConfiguration: string;
  capabilitySyncStatus: CapabilitySyncStatus;
}
export interface DescribeLoggingOptionsRequest {
  workspaceName?: string;
}
export type LoggingLevel = "ERROR" | "INFO" | "OFF" | (string & {});
export interface LoggingOptions {
  level: LoggingLevel;
}
export interface DescribeLoggingOptionsResponse {
  loggingOptions: LoggingOptions;
}
export interface DescribePipelineRequest {
  workspaceName: string;
  pipelineName: string;
  pipelineVersion?: string;
}
export interface DescribePipelineResponse {
  pipelineName: string;
  workspaceName: string;
  description?: string;
  pipelineArn: string;
  version: string;
  environmentVariables?: { [key: string]: string | undefined };
  computations: ComputeNode[];
  status: ResourceStatus;
  createdAt: Date;
  updatedAt: Date;
}
export type PaginationToken = string;
export type DescribePipelineExecutionRequestMaxResultsInteger = number;
export interface DescribePipelineExecutionRequest {
  workspaceName: string;
  pipelineName: string;
  pipelineExecutionId: string;
  nextToken?: string;
  maxResults?: number;
}
export type PipelineErrorCode =
  | "VALIDATION_ERROR"
  | "INTERNAL_FAILURE"
  | "EXECUTION_ERROR"
  | "TIMED_OUT"
  | (string & {});
export type DetailedPipelineErrorCode =
  | "VALIDATION_ERROR"
  | "INTERNAL_FAILURE"
  | "EXECUTION_ERROR"
  | "TIMED_OUT"
  | (string & {});
export interface DetailedPipelineError {
  code: DetailedPipelineErrorCode;
  message: string;
}
export type DetailedErrorList = DetailedPipelineError[];
export interface PipelineExecutionStateDetails {
  code?: PipelineErrorCode;
  message: string;
  details?: DetailedPipelineError[];
}
export interface PipelineExecutionStatus {
  state: PipelineExecutionState;
  stateDetails?: PipelineExecutionStateDetails;
}
export type ComputeNodeEnvironmentVariablesMap = {
  [key: string]: { [key: string]: string | undefined } | undefined;
};
export interface ExecutionEnvironmentVariables {
  global?: { [key: string]: string | undefined };
  computeNodes?: { [key: string]: { [key: string]: string | undefined } | undefined };
}
export type ComputeNodeMountsMap = { [key: string]: Mount[] | undefined };
export interface MountOverrides {
  computeNodes: { [key: string]: Mount[] | undefined };
}
export type ExecutionPriority = number;
export type ComputeNodeExecutionState =
  | "NOT_STARTED"
  | "QUEUED"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | (string & {});
export type ComputeNodeErrorCode =
  | "VALIDATION_ERROR"
  | "INTERNAL_FAILURE"
  | "EXECUTION_ERROR"
  | "TIMED_OUT"
  | (string & {});
export interface ComputeNodeExecutionStateDetails {
  code: ComputeNodeErrorCode;
  message: string;
  details?: DetailedPipelineError[];
}
export interface ComputeNodeExecutionStatus {
  state: ComputeNodeExecutionState;
  stateDetails?: ComputeNodeExecutionStateDetails;
}
export type ExecutionEnvironmentVariablesMapKeyString = string;
export type ExecutionEnvironmentVariablesMapValueString = string;
export type ExecutionEnvironmentVariablesMap = { [key: string]: string | undefined };
export interface ComputeNodeExecutionDetails {
  computeNodeName: string;
  taskName: string;
  taskArn: string;
  taskVersion: string;
  dependsOn: string[];
  status: ComputeNodeExecutionStatus;
  startTime?: Date;
  endTime?: Date;
  executionEnvironmentVariables?: { [key: string]: string | undefined };
  executionMounts?: Mount[];
}
export type ComputeNodeExecutionDetailsList = ComputeNodeExecutionDetails[];
export interface DescribePipelineExecutionResponse {
  pipelineExecutionId: string;
  pipelineName: string;
  workspaceName: string;
  pipelineVersion: string;
  status: PipelineExecutionStatus;
  startTime?: Date;
  endTime?: Date;
  requestEnvironmentVariables: ExecutionEnvironmentVariables;
  requestMountOverrides?: MountOverrides;
  executionPriority?: number;
  computeNodeExecutionDetails: ComputeNodeExecutionDetails[];
  nextToken?: string;
}
export interface DescribePortalRequest {
  portalId: string;
}
export type PortalClientId = string;
export interface ImageLocation {
  id: string;
  url: string;
}
export interface DescribePortalResponse {
  portalId: string;
  portalArn: string;
  portalName: string;
  portalDescription?: string;
  portalClientId: string;
  portalStartUrl: string;
  portalContactEmail: string | redacted.Redacted<string>;
  portalStatus: PortalStatus;
  portalCreationDate: Date;
  portalLastUpdateDate: Date;
  portalLogoImageLocation?: ImageLocation;
  roleArn?: string;
  portalAuthMode?: AuthMode;
  notificationSenderEmail?: string | redacted.Redacted<string>;
  alarms?: Alarms;
  portalType?: PortalType;
  portalTypeConfiguration?: { [key: string]: PortalTypeEntry | undefined };
}
export interface DescribeProjectRequest {
  projectId: string;
}
export interface DescribeProjectResponse {
  projectId: string;
  projectArn: string;
  projectName: string;
  portalId: string;
  projectDescription?: string;
  projectCreationDate: Date;
  projectLastUpdateDate: Date;
}
export interface DescribeQueryRequest {
  workspaceName: string;
  queryId: string;
}
export interface QueryStatistics {
  rowCount: number;
  bytesScanned: number;
  executionTimeInMillis: number;
}
export type QueryErrorMessage = string;
export interface DescribeQueryResponse {
  queryId: string;
  status: QueryStatus;
  submittedAt: Date;
  completedAt?: Date;
  statistics?: QueryStatistics;
  errorMessage?: string;
}
export type SearchId = string;
export interface DescribeSearchRequest {
  workspaceName: string;
  searchId: string;
}
export type SearchStatus = "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | (string & {});
export type SearchQueryStatement = string | redacted.Redacted<string>;
export type SearchType = "DEEP" | "QUICK" | (string & {});
export type GroupId = string;
export interface DescribeSearchResponse {
  searchId: string;
  workspaceName: string;
  status: SearchStatus;
  queryStatement: string | redacted.Redacted<string>;
  searchType: SearchType;
  statusReason?: string;
  startedAt?: Date;
  groupId?: string;
}
export interface DescribeStorageConfigurationRequest {}
export type StorageType = "SITEWISE_DEFAULT_STORAGE" | "MULTI_LAYER_STORAGE" | (string & {});
export interface CustomerManagedS3Storage {
  s3ResourceArn: string;
  roleArn: string;
}
export interface MultiLayerStorage {
  customerManagedS3Storage: CustomerManagedS3Storage;
}
export type DisassociatedDataStorageState = "ENABLED" | "DISABLED" | (string & {});
export type NumberOfDays = number;
export type Unlimited = boolean;
export interface RetentionPeriod {
  numberOfDays?: number;
  unlimited?: boolean;
}
export type WarmTierState = "ENABLED" | "DISABLED" | (string & {});
export interface WarmTierRetentionPeriod {
  numberOfDays?: number;
  unlimited?: boolean;
}
export type DisallowIngestNullNaN = boolean;
export interface DescribeStorageConfigurationResponse {
  storageType: StorageType;
  multiLayerStorage?: MultiLayerStorage;
  disassociatedDataStorage?: DisassociatedDataStorageState;
  retentionPeriod?: RetentionPeriod;
  configurationStatus: ConfigurationStatus;
  lastUpdateDate?: Date;
  warmTier?: WarmTierState;
  warmTierRetentionPeriod?: WarmTierRetentionPeriod;
  disallowIngestNullNaN?: boolean;
}
export interface DescribeTaskRequest {
  workspaceName: string;
  taskName: string;
  taskVersion?: string;
}
export interface DescribeTaskResponse {
  workspaceName: string;
  taskName: string;
  description?: string;
  taskArn: string;
  version: string;
  taskConfiguration: TaskConfiguration;
  status: ResourceStatus;
  createdAt: Date;
  updatedAt: Date;
}
export interface DescribeTimeSeriesRequest {
  alias?: string;
  assetId?: string;
  propertyId?: string;
  workspaceName?: string;
}
export interface DescribeTimeSeriesResponse {
  assetId?: string;
  propertyId?: string;
  alias?: string;
  timeSeriesId: string;
  dataType: PropertyDataType;
  dataTypeSpec?: string;
  timeSeriesCreationDate: Date;
  timeSeriesLastUpdateDate: Date;
  timeSeriesArn: string;
  workspaceName?: string;
}
export interface DescribeWorkspaceRequest {
  workspaceName: string;
}
export interface WorkspaceEncryptionConfigurationInfo {
  encryptionType: EncryptionType;
  kmsKeyArn?: string;
}
export interface DescribeWorkspaceResponse {
  workspaceArn: string;
  workspaceName: string;
  workspaceDescription?: string;
  workspaceStatus: WorkspaceStatus;
  encryptionConfiguration?: WorkspaceEncryptionConfigurationInfo;
  createdAt: Date;
  updatedAt: Date;
}
export interface DisassociateAssetsRequest {
  assetId: string;
  hierarchyId: string;
  childAssetId: string;
  clientToken?: string;
}
export interface DisassociateAssetsResponse {}
export interface DisassociateTimeSeriesFromAssetPropertyRequest {
  alias: string;
  assetId: string;
  propertyId: string;
  clientToken?: string;
}
export interface DisassociateTimeSeriesFromAssetPropertyResponse {}
export interface ExecuteActionRequest {
  targetResource: TargetResource;
  actionDefinitionId: string;
  actionPayload: ActionPayload;
  clientToken?: string;
  resolveTo?: ResolveTo;
}
export interface ExecuteActionResponse {
  actionId: string;
}
export type QueryStatement = string | redacted.Redacted<string>;
export type ExecuteQueryNextToken = string;
export type ExecuteQueryMaxResults = number;
export interface ExecuteQueryRequest {
  queryStatement: string | redacted.Redacted<string>;
  nextToken?: string;
  maxResults?: number;
  clientToken?: string;
}
export type ScalarType = "BOOLEAN" | "INT" | "DOUBLE" | "TIMESTAMP" | "STRING" | (string & {});
export interface ColumnType {
  scalarType?: ScalarType;
}
export interface ColumnInfo {
  name?: string;
  type?: ColumnType;
}
export type ColumnsList = ColumnInfo[];
export type ScalarValue = string;
export interface Datum {
  scalarValue?: string;
  arrayValue?: Datum[];
  rowValue?: Row;
  nullValue?: boolean;
}
export type DatumList = Datum[];
export interface Row {
  data: Datum[];
}
export type Rows = Row[];
export interface ExecuteQueryResponse {
  columns?: ColumnInfo[];
  rows?: Row[];
  nextToken?: string;
}
export type GetAssetPropertyValueAggregatesMaxResults = number;
export interface GetAssetPropertyAggregatesRequest {
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  aggregateTypes: AggregateType[];
  resolution: string;
  qualities?: Quality[];
  startDate: Date;
  endDate: Date;
  timeOrdering?: TimeOrdering;
  nextToken?: string;
  maxResults?: number;
}
export interface GetAssetPropertyAggregatesResponse {
  aggregatedValues: AggregatedValue[];
  nextToken?: string;
}
export interface GetAssetPropertyValueRequest {
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
}
export interface GetAssetPropertyValueResponse {
  propertyValue?: AssetPropertyValue;
}
export type GetAssetPropertyValueHistoryMaxResults = number;
export interface GetAssetPropertyValueHistoryRequest {
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  startDate?: Date;
  endDate?: Date;
  qualities?: Quality[];
  timeOrdering?: TimeOrdering;
  nextToken?: string;
  maxResults?: number;
}
export interface GetAssetPropertyValueHistoryResponse {
  assetPropertyValueHistory: AssetPropertyValue[];
  nextToken?: string;
}
export type GetCaptureDataNextToken = string;
export interface GetCaptureDataRequest {
  workspaceName: string;
  startTime: TimeInNanos;
  endTime: TimeInNanos;
  timeSeriesId?: string;
  propertyAlias?: string;
  formatSettings?: FormatSettings;
  nextToken?: string;
}
export type CaptureBlob = Uint8Array;
export type VideoDataType = "VIDEO-MP4" | (string & {});
export interface GetCaptureDataResponse {
  data: Uint8Array;
  startTime: TimeInNanos;
  endTime: TimeInNanos;
  dataType: VideoDataType;
  nextToken?: string;
}
export type IntervalInSeconds = number;
export type MaxInterpolatedResults = number;
export type InterpolationType = string;
export type IntervalWindowInSeconds = number;
export interface GetInterpolatedAssetPropertyValuesRequest {
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  startTimeInSeconds: number;
  startTimeOffsetInNanos?: number;
  endTimeInSeconds: number;
  endTimeOffsetInNanos?: number;
  quality: Quality;
  intervalInSeconds: number;
  nextToken?: string;
  maxResults?: number;
  type: string;
  intervalWindowInSeconds?: number;
}
export interface InterpolatedAssetPropertyValue {
  timestamp: TimeInNanos;
  value: Variant;
}
export type InterpolatedAssetPropertyValues = InterpolatedAssetPropertyValue[];
export interface GetInterpolatedAssetPropertyValuesResponse {
  interpolatedAssetPropertyValues: InterpolatedAssetPropertyValue[];
  nextToken?: string;
}
export type QueryMaxResults = number;
export type QueryNextToken = string;
export interface GetQueryResultsRequest {
  workspaceName: string;
  queryId: string;
  maxResults?: number;
  nextToken?: string;
}
export type ColumnLabel = string;
export type ColumnDataType = string;
export interface ColumnInformation {
  name: string;
  type: string;
}
export type ColumnInformationList = ColumnInformation[];
export type ColumnValue = string;
export type Result = string[];
export type RowList = string[][];
export interface GetQueryResultsResponse {
  columnInfo?: ColumnInformation[];
  rows?: string[][];
  nextToken?: string;
}
export type GetSearchResultsRequestMaxResultsInteger = number;
export interface GetSearchResultsRequest {
  searchId: string;
  workspaceName: string;
  maxResults?: number;
  nextToken?: string;
}
export interface SearchResult {
  searchId: string;
  workspaceName: string;
  datasetId: string;
  timeSeriesId: string;
  startTimestamp: TimeInNanos;
  endTimestamp: TimeInNanos;
  topTimestamp: TimeInNanos;
  score: number;
}
export type SearchResultList = SearchResult[];
export interface GetSearchResultsResponse {
  searchResults: SearchResult[];
  nextToken?: string;
}
export type ConversationId = string;
export type MessageInput = string | redacted.Redacted<string>;
export interface InvokeAssistantRequest {
  conversationId?: string;
  message: string | redacted.Redacted<string>;
  enableTrace?: boolean;
}
export interface Trace {
  text?: string;
}
export interface Location {
  uri?: string;
}
export interface Source {
  arn?: string;
  location?: Location;
}
export interface DataSetReference {
  datasetArn?: string;
  source?: Source;
}
export interface Reference {
  dataset?: DataSetReference;
}
export interface Content {
  text?: string;
}
export interface Citation {
  reference?: Reference;
  content?: Content;
}
export type Citations = Citation[];
export interface InvocationOutput {
  message?: string;
  citations?: Citation[];
}
export type ResourceId = string;
export type ResourceArn = string;
export type ResponseStream =
  | {
      trace: Trace;
      output?: never;
      accessDeniedException?: never;
      conflictingOperationException?: never;
      internalFailureException?: never;
      invalidRequestException?: never;
      limitExceededException?: never;
      resourceNotFoundException?: never;
      throttlingException?: never;
    }
  | {
      trace?: never;
      output: InvocationOutput;
      accessDeniedException?: never;
      conflictingOperationException?: never;
      internalFailureException?: never;
      invalidRequestException?: never;
      limitExceededException?: never;
      resourceNotFoundException?: never;
      throttlingException?: never;
    }
  | {
      trace?: never;
      output?: never;
      accessDeniedException: AccessDeniedException;
      conflictingOperationException?: never;
      internalFailureException?: never;
      invalidRequestException?: never;
      limitExceededException?: never;
      resourceNotFoundException?: never;
      throttlingException?: never;
    }
  | {
      trace?: never;
      output?: never;
      accessDeniedException?: never;
      conflictingOperationException: ConflictingOperationException;
      internalFailureException?: never;
      invalidRequestException?: never;
      limitExceededException?: never;
      resourceNotFoundException?: never;
      throttlingException?: never;
    }
  | {
      trace?: never;
      output?: never;
      accessDeniedException?: never;
      conflictingOperationException?: never;
      internalFailureException: InternalFailureException;
      invalidRequestException?: never;
      limitExceededException?: never;
      resourceNotFoundException?: never;
      throttlingException?: never;
    }
  | {
      trace?: never;
      output?: never;
      accessDeniedException?: never;
      conflictingOperationException?: never;
      internalFailureException?: never;
      invalidRequestException: InvalidRequestException;
      limitExceededException?: never;
      resourceNotFoundException?: never;
      throttlingException?: never;
    }
  | {
      trace?: never;
      output?: never;
      accessDeniedException?: never;
      conflictingOperationException?: never;
      internalFailureException?: never;
      invalidRequestException?: never;
      limitExceededException: LimitExceededException;
      resourceNotFoundException?: never;
      throttlingException?: never;
    }
  | {
      trace?: never;
      output?: never;
      accessDeniedException?: never;
      conflictingOperationException?: never;
      internalFailureException?: never;
      invalidRequestException?: never;
      limitExceededException?: never;
      resourceNotFoundException: ResourceNotFoundException;
      throttlingException?: never;
    }
  | {
      trace?: never;
      output?: never;
      accessDeniedException?: never;
      conflictingOperationException?: never;
      internalFailureException?: never;
      invalidRequestException?: never;
      limitExceededException?: never;
      resourceNotFoundException?: never;
      throttlingException: ThrottlingException;
    };
export interface InvokeAssistantResponse {
  body: stream.Stream<ResponseStream, Error, never>;
  conversationId: string;
}
export type IdentityType = "USER" | "GROUP" | "IAM" | (string & {});
export type ResourceType = "PORTAL" | "PROJECT" | (string & {});
export type MaxResults = number;
export interface ListAccessPoliciesRequest {
  identityType?: IdentityType;
  identityId?: string;
  resourceType?: ResourceType;
  resourceId?: string;
  iamArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface AccessPolicySummary {
  id: string;
  identity: Identity;
  resource: Resource;
  permission: Permission;
  creationDate?: Date;
  lastUpdateDate?: Date;
}
export type AccessPolicySummaries = AccessPolicySummary[];
export interface ListAccessPoliciesResponse {
  accessPolicySummaries: AccessPolicySummary[];
  nextToken?: string;
}
export type TargetResourceType = "ASSET" | "COMPUTATION_MODEL" | (string & {});
export interface ListActionsRequest {
  targetResourceType: TargetResourceType;
  targetResourceId: string;
  nextToken?: string;
  maxResults?: number;
  resolveToResourceType?: ResolveToResourceType;
  resolveToResourceId?: string;
}
export interface ActionSummary {
  actionId?: string;
  actionDefinitionId?: string;
  targetResource?: TargetResource;
  resolveTo?: ResolveTo;
}
export type ActionSummaries = ActionSummary[];
export interface ListActionsResponse {
  actionSummaries: ActionSummary[];
  nextToken: string;
}
export interface ListApplicationsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ApplicationSummary {
  arn: string;
  id: string;
  name: string;
  status: ApplicationStatus;
  createdAt: Date;
  workspaceName: string;
}
export type ApplicationList = ApplicationSummary[];
export interface ListApplicationsResponse {
  nextToken?: string;
  applications: ApplicationSummary[];
}
export interface ListAssetModelCompositeModelsRequest {
  assetModelId: string;
  nextToken?: string;
  maxResults?: number;
  assetModelVersion?: string;
}
export interface ListAssetModelCompositeModelsResponse {
  assetModelCompositeModelSummaries: AssetModelCompositeModelSummary[];
  nextToken?: string;
}
export type ListAssetModelPropertiesFilter = "ALL" | "BASE" | (string & {});
export interface ListAssetModelPropertiesRequest {
  assetModelId: string;
  nextToken?: string;
  maxResults?: number;
  filter?: ListAssetModelPropertiesFilter;
  assetModelVersion?: string;
}
export interface InterfaceSummary {
  interfaceAssetModelId: string;
  interfaceAssetModelPropertyId: string;
}
export type InterfaceSummaries = InterfaceSummary[];
export interface AssetModelPropertySummary {
  id?: string;
  externalId?: string;
  name: string;
  dataType: PropertyDataType;
  dataTypeSpec?: string;
  unit?: string;
  type: PropertyType;
  assetModelCompositeModelId?: string;
  path?: AssetModelPropertyPathSegment[];
  interfaceSummaries?: InterfaceSummary[];
}
export type AssetModelPropertySummaries = AssetModelPropertySummary[];
export interface ListAssetModelPropertiesResponse {
  assetModelPropertySummaries: AssetModelPropertySummary[];
  nextToken?: string;
}
export type ListAssetModelsTypeFilter = AssetModelType[];
export interface ListAssetModelsRequest {
  assetModelTypes?: AssetModelType[];
  nextToken?: string;
  maxResults?: number;
  assetModelVersion?: string;
}
export interface AssetModelSummary {
  id: string;
  externalId?: string;
  arn: string;
  name: string;
  assetModelType?: AssetModelType;
  description?: string;
  creationDate: Date;
  lastUpdateDate: Date;
  status: AssetModelStatus;
  version?: string;
}
export type AssetModelSummaries = AssetModelSummary[];
export interface ListAssetModelsResponse {
  assetModelSummaries: AssetModelSummary[];
  nextToken?: string;
}
export type ListAssetPropertiesFilter = "ALL" | "BASE" | (string & {});
export interface ListAssetPropertiesRequest {
  assetId: string;
  nextToken?: string;
  maxResults?: number;
  filter?: ListAssetPropertiesFilter;
}
export interface AssetPropertySummary {
  id: string;
  externalId?: string;
  alias?: string;
  unit?: string;
  notification?: PropertyNotification;
  assetCompositeModelId?: string;
  path?: AssetPropertyPathSegment[];
}
export type AssetPropertySummaries = AssetPropertySummary[];
export interface ListAssetPropertiesResponse {
  assetPropertySummaries: AssetPropertySummary[];
  nextToken?: string;
}
export type TraversalType = "PATH_TO_ROOT" | (string & {});
export interface ListAssetRelationshipsRequest {
  assetId: string;
  traversalType: TraversalType;
  nextToken?: string;
  maxResults?: number;
}
export interface AssetHierarchyInfo {
  parentAssetId?: string;
  childAssetId?: string;
}
export type AssetRelationshipType = "HIERARCHY" | (string & {});
export interface AssetRelationshipSummary {
  hierarchyInfo?: AssetHierarchyInfo;
  relationshipType: AssetRelationshipType;
}
export type AssetRelationshipSummaries = AssetRelationshipSummary[];
export interface ListAssetRelationshipsResponse {
  assetRelationshipSummaries: AssetRelationshipSummary[];
  nextToken?: string;
}
export type ListAssetsFilter = "ALL" | "TOP_LEVEL" | (string & {});
export interface ListAssetsRequest {
  nextToken?: string;
  maxResults?: number;
  assetModelId?: string;
  filter?: ListAssetsFilter;
}
export interface AssetSummary {
  id: string;
  externalId?: string;
  arn: string;
  name: string;
  assetModelId: string;
  creationDate: Date;
  lastUpdateDate: Date;
  status: AssetStatus;
  hierarchies: AssetHierarchy[];
  description?: string;
}
export type AssetSummaries = AssetSummary[];
export interface ListAssetsResponse {
  assetSummaries: AssetSummary[];
  nextToken?: string;
}
export type TraversalDirection = "PARENT" | "CHILD" | (string & {});
export interface ListAssociatedAssetsRequest {
  assetId: string;
  hierarchyId?: string;
  traversalDirection?: TraversalDirection;
  nextToken?: string;
  maxResults?: number;
}
export interface AssociatedAssetsSummary {
  id: string;
  externalId?: string;
  arn: string;
  name: string;
  assetModelId: string;
  creationDate: Date;
  lastUpdateDate: Date;
  status: AssetStatus;
  hierarchies: AssetHierarchy[];
  description?: string;
}
export type AssociatedAssetsSummaries = AssociatedAssetsSummary[];
export interface ListAssociatedAssetsResponse {
  assetSummaries: AssociatedAssetsSummary[];
  nextToken?: string;
}
export type ListBulkImportJobsFilter =
  | "ALL"
  | "PENDING"
  | "RUNNING"
  | "CANCELLED"
  | "FAILED"
  | "COMPLETED_WITH_FAILURES"
  | "COMPLETED"
  | (string & {});
export interface ListBulkImportJobsRequest {
  nextToken?: string;
  maxResults?: number;
  filter?: ListBulkImportJobsFilter;
  workspaceName?: string;
}
export interface JobSummary {
  id: string;
  name: string;
  status: JobStatus;
}
export type JobSummaries = JobSummary[];
export interface ListBulkImportJobsResponse {
  jobSummaries: JobSummary[];
  nextToken?: string;
}
export interface ListCompositionRelationshipsRequest {
  assetModelId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface CompositionRelationshipSummary {
  assetModelId: string;
  assetModelCompositeModelId: string;
  assetModelCompositeModelType: string;
}
export type CompositionRelationshipSummaries = CompositionRelationshipSummary[];
export interface ListCompositionRelationshipsResponse {
  compositionRelationshipSummaries: CompositionRelationshipSummary[];
  nextToken?: string;
}
export interface AssetBindingValueFilter {
  assetId: string;
}
export interface AssetModelBindingValueFilter {
  assetModelId: string;
}
export interface AssetPropertyBindingValueFilter {
  assetId: string;
  propertyId: string;
}
export interface AssetModelPropertyBindingValueFilter {
  assetModelId: string;
  propertyId: string;
}
export interface DataBindingValueFilter {
  asset?: AssetBindingValueFilter;
  assetModel?: AssetModelBindingValueFilter;
  assetProperty?: AssetPropertyBindingValueFilter;
  assetModelProperty?: AssetModelPropertyBindingValueFilter;
}
export interface ListComputationModelDataBindingUsagesRequest {
  dataBindingValueFilter: DataBindingValueFilter;
  nextToken?: string;
  maxResults?: number;
}
export type ComputationModelIdList = string[];
export interface DataBindingValue {
  assetModelProperty?: AssetModelPropertyBindingValue;
  assetProperty?: AssetPropertyBindingValue;
}
export interface MatchedDataBinding {
  value: DataBindingValue;
}
export interface ComputationModelDataBindingUsageSummary {
  computationModelIds: string[];
  matchedDataBinding: MatchedDataBinding;
}
export type ComputationModelDataBindingUsageSummaries = ComputationModelDataBindingUsageSummary[];
export interface ListComputationModelDataBindingUsagesResponse {
  dataBindingUsageSummaries: ComputationModelDataBindingUsageSummary[];
  nextToken?: string;
}
export interface ListComputationModelResolveToResourcesRequest {
  computationModelId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ComputationModelResolveToResourceSummary {
  resolveTo?: ResolveTo;
}
export type ComputationModelResolveToResourceSummaries = ComputationModelResolveToResourceSummary[];
export interface ListComputationModelResolveToResourcesResponse {
  computationModelResolveToResourceSummaries: ComputationModelResolveToResourceSummary[];
  nextToken?: string;
}
export type ComputationModelType = "ANOMALY_DETECTION" | (string & {});
export interface ListComputationModelsRequest {
  computationModelType?: ComputationModelType;
  nextToken?: string;
  maxResults?: number;
}
export interface ComputationModelSummary {
  id: string;
  arn: string;
  name: string;
  description?: string;
  type: ComputationModelType;
  creationDate: Date;
  lastUpdateDate: Date;
  status: ComputationModelStatus;
  version: string;
}
export type ComputationModelSummaries = ComputationModelSummary[];
export interface ListComputationModelsResponse {
  computationModelSummaries: ComputationModelSummary[];
  nextToken?: string;
}
export interface ListDashboardsRequest {
  projectId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DashboardSummary {
  id: string;
  name: string;
  description?: string;
  creationDate?: Date;
  lastUpdateDate?: Date;
}
export type DashboardSummaries = DashboardSummary[];
export interface ListDashboardsResponse {
  dashboardSummaries: DashboardSummary[];
  nextToken?: string;
}
export interface ListDatasetDataSegmentRelationshipsRequest {
  datasetId: string;
  workspaceName: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DataSegmentRelationshipSummary {
  targetDatasetId: string;
  sourceDatasetId: string;
  timeSeriesId: string;
  startTimestamp: TimeInNanos;
  endTimestamp: TimeInNanos;
}
export type DataSegmentRelationshipSummaries = DataSegmentRelationshipSummary[];
export interface ListDatasetDataSegmentRelationshipsResponse {
  dataSegmentRelationshipSummaries: DataSegmentRelationshipSummary[];
  nextToken?: string;
}
export interface ListDatasetDataSegmentsRequest {
  datasetId: string;
  workspaceName: string;
  datasetVersion?: string;
  maxResults?: number;
  nextToken?: string;
}
export type EnrichmentStatus = "ENRICHED" | "NOT_ENRICHED" | (string & {});
export interface DataSegmentEnrichment {
  status: EnrichmentStatus;
  lastEnrichedAt?: Date;
}
export interface DataSegmentSummary {
  sourceDatasetId: string;
  timeSeriesId: string;
  startTimestamp: TimeInNanos;
  endTimestamp: TimeInNanos;
  alias: string;
  dataType: PropertyDataType;
  enrichment?: DataSegmentEnrichment;
}
export type DataSegmentSummaries = DataSegmentSummary[];
export interface ListDatasetDataSegmentsResponse {
  dataSegments: DataSegmentSummary[];
  nextToken?: string;
}
export type DatasetExportJobFilter =
  | "ALL"
  | "SUBMITTED"
  | "RUNNING"
  | "COMPLETED"
  | "COMPLETED_WITH_ERRORS"
  | "FAILED"
  | (string & {});
export type ListExportJobsMaxResults = number;
export type ListExportJobsNextToken = string;
export interface ListDatasetExportJobsRequest {
  workspaceName: string;
  filter?: DatasetExportJobFilter;
  maxResults?: number;
  nextToken?: string;
}
export interface ExportJobSummary {
  jobId: string;
  status: DatasetExportJobStatus;
  startedAt: Date;
  completedAt?: Date;
  destinationS3Uri: string;
}
export type ExportJobSummaryList = ExportJobSummary[];
export interface ListDatasetExportJobsResponse {
  jobs: ExportJobSummary[];
  nextToken?: string;
}
export interface ListDatasetsRequest {
  sourceType: DatasetSourceType;
  workspaceName?: string;
  datasetType?: DatasetTypeEnum;
  nextToken?: string;
  maxResults?: number;
}
export interface DatasetSummary {
  id: string;
  arn: string;
  name: string;
  description: string;
  sourceType?: DatasetSourceType;
  datasetType?: DatasetTypeEnum;
  creationDate: Date;
  lastUpdateDate: Date;
  status: DatasetStatus;
  enrichmentStatus?: DatasetEnrichment;
}
export type DatasetSummaries = DatasetSummary[];
export interface ListDatasetsResponse {
  datasetSummaries: DatasetSummary[];
  nextToken?: string;
  workspaceName?: string;
}
export interface ListEnrichmentJobsRequest {
  workspaceName: string;
  datasetId?: string;
  propertyAlias?: string;
  timeSeriesId?: string;
  status?: EnrichmentJobStatus;
  jobType?: JobType;
  startDate?: Date;
  endDate?: Date;
  maxResults?: number;
  nextToken?: string;
}
export interface EnrichmentJobSummary {
  jobId: string;
  status: EnrichmentJobStatus;
  workspaceName: string;
  jobType: JobType;
  datasetId: string;
  propertyAlias?: string;
  timeSeriesId?: string;
  createdAt: Date;
  updatedAt?: Date;
}
export type EnrichmentJobSummaries = EnrichmentJobSummary[];
export interface ListEnrichmentJobsResponse {
  jobs: EnrichmentJobSummary[];
  nextToken?: string;
}
export interface ListExecutionsRequest {
  targetResourceType: TargetResourceType;
  targetResourceId: string;
  resolveToResourceType?: ResolveToResourceType;
  resolveToResourceId?: string;
  nextToken?: string;
  maxResults?: number;
  actionType?: string;
}
export interface ExecutionSummary {
  executionId: string;
  actionType?: string;
  targetResource: TargetResource;
  targetResourceVersion: string;
  resolveTo?: ResolveTo;
  executionStartTime: Date;
  executionEndTime?: Date;
  executionStatus: ExecutionStatus;
  executionEntityVersion?: string;
}
export type ExecutionSummaries = ExecutionSummary[];
export interface ListExecutionsResponse {
  executionSummaries: ExecutionSummary[];
  nextToken?: string;
}
export interface ListGatewaysRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface GatewaySummary {
  gatewayId: string;
  gatewayName: string;
  gatewayPlatform?: GatewayPlatform;
  gatewayVersion?: string;
  gatewayCapabilitySummaries?: GatewayCapabilitySummary[];
  creationDate: Date;
  lastUpdateDate: Date;
}
export type GatewaySummaries = GatewaySummary[];
export interface ListGatewaysResponse {
  gatewaySummaries: GatewaySummary[];
  nextToken?: string;
}
export interface ListInterfaceRelationshipsRequest {
  interfaceAssetModelId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface InterfaceRelationshipSummary {
  id: string;
}
export type InterfaceRelationshipSummaries = InterfaceRelationshipSummary[];
export interface ListInterfaceRelationshipsResponse {
  interfaceRelationshipSummaries: InterfaceRelationshipSummary[];
  nextToken?: string;
}
export type ListPipelineExecutionsRequestMaxResultsInteger = number;
export interface ListPipelineExecutionsRequest {
  workspaceName: string;
  pipelineName: string;
  nextToken?: string;
  maxResults?: number;
  state?: PipelineExecutionState;
  startTimeAfter?: Date;
  startTimeBefore?: Date;
  endTimeAfter?: Date;
  endTimeBefore?: Date;
}
export interface PipelineExecutionSummary {
  pipelineExecutionId: string;
  pipelineVersion: string;
  status: PipelineExecutionStatus;
  executionPriority?: number;
  startTime?: Date;
  endTime?: Date;
}
export type PipelineExecutionSummaryList = PipelineExecutionSummary[];
export interface ListPipelineExecutionsResponse {
  pipelineExecutionSummaries: PipelineExecutionSummary[];
  nextToken?: string;
}
export type ListPipelinesRequestMaxResultsInteger = number;
export interface ListPipelinesRequest {
  workspaceName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface PipelineSummary {
  pipelineName: string;
  description?: string;
  pipelineArn: string;
  version: string;
  status: ResourceStatus;
  createdAt: Date;
  updatedAt: Date;
}
export type PipelineSummaries = PipelineSummary[];
export interface ListPipelinesResponse {
  pipelineSummaries: PipelineSummary[];
  nextToken?: string;
}
export interface ListPortalsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface PortalSummary {
  id: string;
  name: string;
  description?: string;
  startUrl: string;
  creationDate?: Date;
  lastUpdateDate?: Date;
  roleArn?: string;
  status: PortalStatus;
  portalType?: PortalType;
}
export type PortalSummaries = PortalSummary[];
export interface ListPortalsResponse {
  portalSummaries?: PortalSummary[];
  nextToken?: string;
}
export interface ListProjectAssetsRequest {
  projectId: string;
  nextToken?: string;
  maxResults?: number;
}
export type AssetIDs = string[];
export interface ListProjectAssetsResponse {
  assetIds: string[];
  nextToken?: string;
}
export interface ListProjectsRequest {
  portalId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ProjectSummary {
  id: string;
  name: string;
  description?: string;
  creationDate?: Date;
  lastUpdateDate?: Date;
}
export type ProjectSummaries = ProjectSummary[];
export interface ListProjectsResponse {
  projectSummaries: ProjectSummary[];
  nextToken?: string;
}
export type QueryFilter = string;
export type QueryListNextToken = string;
export interface ListQueriesRequest {
  workspaceName: string;
  filter?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface QuerySummary {
  queryId: string;
  status: QueryStatus;
  submittedAt: Date;
  completedAt?: Date;
}
export type QuerySummaryList = QuerySummary[];
export interface ListQueriesResponse {
  queries: QuerySummary[];
  nextToken?: string;
}
export type ListSearchesRequestMaxResultsInteger = number;
export type SearchStatusFilterList = SearchStatus[];
export type GroupIdFilterList = string[];
export type SearchTypeFilterList = SearchType[];
export interface ListSearchesFilters {
  statusFilter?: SearchStatus[];
  startedAfter?: Date;
  startedBefore?: Date;
  groupIdFilter?: string[];
  searchTypeFilter?: SearchType[];
}
export interface ListSearchesRequest {
  workspaceName: string;
  maxResults?: number;
  nextToken?: string;
  listSearchesFilters?: ListSearchesFilters;
}
export interface SearchSummary {
  searchId: string;
  workspaceName: string;
  status: SearchStatus;
  queryStatement: string | redacted.Redacted<string>;
  searchType: SearchType;
  statusReason?: string;
  startedAt?: Date;
  groupId?: string;
}
export type SearchSummaries = SearchSummary[];
export interface ListSearchesResponse {
  searchSummaries: SearchSummary[];
  nextToken?: string;
}
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export type ListTasksRequestMaxResultsInteger = number;
export interface ListTasksRequest {
  workspaceName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface TaskSummary {
  taskName: string;
  description?: string;
  taskArn: string;
  version: string;
  status: ResourceStatus;
  createdAt: Date;
  updatedAt: Date;
}
export type TaskSummaries = TaskSummary[];
export interface ListTasksResponse {
  taskSummaries: TaskSummary[];
  nextToken?: string;
}
export type ListTimeSeriesType = "ASSOCIATED" | "DISASSOCIATED" | (string & {});
export interface ListTimeSeriesRequest {
  nextToken?: string;
  maxResults?: number;
  assetId?: string;
  aliasPrefix?: string;
  timeSeriesType?: ListTimeSeriesType;
  workspaceName?: string;
}
export interface TimeSeriesSummary {
  assetId?: string;
  propertyId?: string;
  alias?: string;
  timeSeriesId: string;
  dataType: PropertyDataType;
  dataTypeSpec?: string;
  timeSeriesCreationDate: Date;
  timeSeriesLastUpdateDate: Date;
  timeSeriesArn: string;
}
export type TimeSeriesSummaries = TimeSeriesSummary[];
export interface ListTimeSeriesResponse {
  TimeSeriesSummaries: TimeSeriesSummary[];
  nextToken?: string;
  workspaceName?: string;
}
export interface ListWorkspacesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface WorkspaceSummary {
  name: string;
  arn: string;
  status: WorkspaceStatus;
  createdAt: Date;
  updatedAt: Date;
}
export type WorkspaceSummaries = WorkspaceSummary[];
export interface ListWorkspacesResponse {
  workspaceSummaries: WorkspaceSummary[];
  nextToken?: string;
}
export type MatchByPropertyName = boolean;
export type CreateMissingProperty = boolean;
export interface PropertyMappingConfiguration {
  matchByPropertyName?: boolean;
  createMissingProperty?: boolean;
  overrides?: PropertyMapping[];
}
export interface PutAssetModelInterfaceRelationshipRequest {
  assetModelId: string;
  interfaceAssetModelId: string;
  propertyMappingConfiguration: PropertyMappingConfiguration;
  clientToken?: string;
}
export interface PutAssetModelInterfaceRelationshipResponse {
  assetModelId: string;
  interfaceAssetModelId: string;
  assetModelArn: string;
  assetModelStatus: AssetModelStatus;
}
export interface PutDefaultEncryptionConfigurationRequest {
  encryptionType: EncryptionType;
  kmsKeyId?: string;
}
export interface PutDefaultEncryptionConfigurationResponse {
  encryptionType: EncryptionType;
  kmsKeyArn?: string;
  configurationStatus: ConfigurationStatus;
}
export interface PutLoggingOptionsRequest {
  loggingOptions: LoggingOptions;
  workspaceName?: string;
}
export interface PutLoggingOptionsResponse {}
export interface PutStorageConfigurationRequest {
  storageType: StorageType;
  multiLayerStorage?: MultiLayerStorage;
  disassociatedDataStorage?: DisassociatedDataStorageState;
  retentionPeriod?: RetentionPeriod;
  warmTier?: WarmTierState;
  warmTierRetentionPeriod?: WarmTierRetentionPeriod;
  disallowIngestNullNaN?: boolean;
}
export interface PutStorageConfigurationResponse {
  storageType: StorageType;
  multiLayerStorage?: MultiLayerStorage;
  disassociatedDataStorage?: DisassociatedDataStorageState;
  retentionPeriod?: RetentionPeriod;
  configurationStatus: ConfigurationStatus;
  warmTier?: WarmTierState;
  warmTierRetentionPeriod?: WarmTierRetentionPeriod;
  disallowIngestNullNaN?: boolean;
}
export interface StartPipelineExecutionRequest {
  workspaceName: string;
  pipelineName: string;
  executionEnvironmentVariableOverrides?: ExecutionEnvironmentVariables;
  executionMountOverrides?: MountOverrides;
  executionPriority?: number;
  clientToken?: string;
}
export interface StartPipelineExecutionResponse {
  pipelineExecutionId: string;
}
export type QueryString = string | redacted.Redacted<string>;
export interface StartQueryRequest {
  clientToken?: string;
  workspaceName: string;
  queryStatement: string | redacted.Redacted<string>;
}
export interface StartQueryResponse {
  queryId: string;
  status: QueryStatus;
}
export type TimeSeriesIdList = string[];
export type DataSetIdList = string[];
export interface TimeInterval {
  startTime: TimeInNanos;
  endTime: TimeInNanos;
}
export type TimeIntervalList = TimeInterval[];
export interface SearchFilters {
  timeSeriesIds?: string[];
  datasetIds?: string[];
  timeIntervals?: TimeInterval[];
}
export interface StartSearchRequest {
  workspaceName: string;
  queryStatement: string | redacted.Redacted<string>;
  clientToken?: string;
  searchType?: SearchType;
  searchFilters?: SearchFilters;
  groupId?: string;
}
export interface StartSearchResponse {
  searchId: string;
  workspaceName: string;
  status: SearchStatus;
  groupId?: string;
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
export interface UpdateAccessPolicyRequest {
  accessPolicyId: string;
  accessPolicyIdentity: Identity;
  accessPolicyResource: Resource;
  accessPolicyPermission: Permission;
  clientToken?: string;
}
export interface UpdateAccessPolicyResponse {}
export interface UpdateAssetRequest {
  assetId: string;
  assetExternalId?: string;
  assetName: string;
  clientToken?: string;
  assetDescription?: string;
}
export interface UpdateAssetResponse {
  assetId?: string;
  assetStatus: AssetStatus;
}
export interface UpdateAssetModelRequest {
  assetModelId: string;
  assetModelExternalId?: string;
  assetModelName: string;
  assetModelDescription?: string;
  assetModelProperties?: AssetModelProperty[];
  assetModelHierarchies?: AssetModelHierarchy[];
  assetModelCompositeModels?: AssetModelCompositeModel[];
  clientToken?: string;
  ifMatch?: string;
  ifNoneMatch?: string;
  matchForVersionType?: AssetModelVersionType;
}
export interface UpdateAssetModelResponse {
  assetModelId?: string;
  assetModelStatus: AssetModelStatus;
}
export interface UpdateAssetModelCompositeModelRequest {
  assetModelId: string;
  assetModelCompositeModelId: string;
  assetModelCompositeModelExternalId?: string;
  assetModelCompositeModelDescription?: string;
  assetModelCompositeModelName: string;
  clientToken?: string;
  assetModelCompositeModelProperties?: AssetModelProperty[];
  ifMatch?: string;
  ifNoneMatch?: string;
  matchForVersionType?: AssetModelVersionType;
}
export interface UpdateAssetModelCompositeModelResponse {
  assetModelCompositeModelPath: AssetModelCompositeModelPathSegment[];
  assetModelStatus: AssetModelStatus;
  assetModelId?: string;
}
export interface UpdateAssetPropertyRequest {
  assetId: string;
  propertyId: string;
  propertyAlias?: string;
  propertyNotificationState?: PropertyNotificationState;
  clientToken?: string;
  propertyUnit?: string;
}
export interface UpdateAssetPropertyResponse {}
export interface UpdateComputationModelRequest {
  computationModelId: string;
  computationModelName: string;
  computationModelDescription?: string;
  computationModelConfiguration: ComputationModelConfiguration;
  computationModelDataBinding: { [key: string]: ComputationModelDataBindingValue | undefined };
  clientToken?: string;
}
export interface UpdateComputationModelResponse {
  computationModelStatus: ComputationModelStatus;
}
export interface UpdateDashboardRequest {
  dashboardId: string;
  dashboardName: string;
  dashboardDescription?: string;
  dashboardDefinition: string;
  clientToken?: string;
}
export interface UpdateDashboardResponse {}
export interface UpdateDatasetRequest {
  datasetId: string;
  workspaceName?: string;
  datasetName: string;
  datasetDescription?: string;
  datasetConfig?: DatasetConfig;
  metadata?: { [key: string]: string | undefined };
  datasetSource: DatasetSource;
  clientToken?: string;
}
export interface UpdateDatasetResponse {
  datasetId?: string;
  datasetArn?: string;
  datasetStatus?: DatasetStatus;
}
export interface UpdateGatewayRequest {
  gatewayId: string;
  gatewayName: string;
}
export interface UpdateGatewayResponse {}
export interface UpdateGatewayCapabilityConfigurationRequest {
  gatewayId: string;
  capabilityNamespace: string;
  capabilityConfiguration: string;
}
export interface UpdateGatewayCapabilityConfigurationResponse {
  capabilityNamespace: string;
  capabilitySyncStatus: CapabilitySyncStatus;
}
export interface UpdatePipelineRequest {
  workspaceName: string;
  pipelineName: string;
  description?: string;
  environmentVariables?: { [key: string]: string | undefined };
  computations?: ComputeNode[];
}
export interface UpdatePipelineResponse {
  version: string;
  status: ResourceStatus;
}
export interface Image {
  id?: string;
  file?: ImageFile;
}
export interface UpdatePortalRequest {
  portalId: string;
  portalName: string;
  portalDescription?: string;
  portalContactEmail: string | redacted.Redacted<string>;
  portalLogoImage?: Image;
  roleArn: string;
  clientToken?: string;
  notificationSenderEmail?: string | redacted.Redacted<string>;
  alarms?: Alarms;
  portalType?: PortalType;
  portalTypeConfiguration?: { [key: string]: PortalTypeEntry | undefined };
}
export interface UpdatePortalResponse {
  portalStatus: PortalStatus;
}
export interface UpdateProjectRequest {
  projectId: string;
  projectName: string;
  projectDescription?: string;
  clientToken?: string;
}
export interface UpdateProjectResponse {}
export interface UpdateTaskRequest {
  workspaceName: string;
  taskName: string;
  description?: string;
  taskConfiguration?: TaskConfiguration;
}
export interface UpdateTaskResponse {
  version: string;
  status: ResourceStatus;
}
export interface UpdateWorkspaceRequest {
  workspaceName: string;
  workspaceDescription?: string;
  encryptionConfiguration?: WorkspaceEncryptionConfiguration;
  clientToken?: string;
}
export interface UpdateWorkspaceResponse {
  workspaceStatus: WorkspaceStatus;
}
export type ExceptionMessage = string;
export type AssociateAssetsError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Associates a child asset with the given parent asset through a hierarchy defined in the
 * parent asset's model. For more information, see Associating assets in the
 * *IoT SiteWise User Guide*.
 */
export const associateAssets: API.OperationMethod<
  AssociateAssetsRequest,
  AssociateAssetsResponse,
  AssociateAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AssociateAssetsRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<AssociateAssetsResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateAssets",
  endpointHostPrefix: "api.",
}));

export type AssociateTimeSeriesToAssetPropertyError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Associates a time series (data stream) with an asset property.
 */
export const associateTimeSeriesToAssetProperty: API.OperationMethod<
  AssociateTimeSeriesToAssetPropertyRequest,
  AssociateTimeSeriesToAssetPropertyResponse,
  AssociateTimeSeriesToAssetPropertyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<AssociateTimeSeriesToAssetPropertyRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<AssociateTimeSeriesToAssetPropertyResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateTimeSeriesToAssetProperty",
  endpointHostPrefix: "api.",
}));

export type BatchAssociateDataSegmentsToDatasetError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Associates a batch of data segments with a curated dataset. Data segments are
 * time-bounded slices of time series data selected from source session datasets. Data segments
 * that belong to the same time series can't overlap in time, regardless of which dataset they
 * belong to.
 */
export const batchAssociateDataSegmentsToDataset: API.OperationMethod<
  BatchAssociateDataSegmentsToDatasetRequest,
  BatchAssociateDataSegmentsToDatasetResponse,
  BatchAssociateDataSegmentsToDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7, __c0, 7) as any as S.Schema<BatchAssociateDataSegmentsToDatasetRequest>,
  output: __S(10, __c1, 2) as any as S.Schema<BatchAssociateDataSegmentsToDatasetResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchAssociateDataSegmentsToDataset",
  endpointHostPrefix: "api.",
}));

export type BatchAssociateProjectAssetsError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT SiteWise Monitor feature will no longer be open to new
 * customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can
 * continue to use the service as normal. For more information, see
 * IoT SiteWise Monitor availability change.
 *
 * Associates a group (batch) of assets with an IoT SiteWise Monitor project.
 */
export const batchAssociateProjectAssets: API.OperationMethod<
  BatchAssociateProjectAssetsRequest,
  BatchAssociateProjectAssetsResponse,
  BatchAssociateProjectAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12, __c1, 4) as any as S.Schema<BatchAssociateProjectAssetsRequest>,
  output: __S(15, __c1, 7) as any as S.Schema<BatchAssociateProjectAssetsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchAssociateProjectAssets",
  endpointHostPrefix: "monitor.",
}));

export type BatchDeleteDatasetDataSegmentsError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a batch of data segments from a session dataset. Deleting a data segment deletes
 * the underlying time series data for the segment's time range.
 */
export const batchDeleteDatasetDataSegments: API.OperationMethod<
  BatchDeleteDatasetDataSegmentsRequest,
  BatchDeleteDatasetDataSegmentsResponse,
  BatchDeleteDatasetDataSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18, __c2, 2) as any as S.Schema<BatchDeleteDatasetDataSegmentsRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<BatchDeleteDatasetDataSegmentsResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteDatasetDataSegments",
  endpointHostPrefix: "api.",
}));

export type BatchDisassociateDataSegmentsFromDatasetError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Disassociates a batch of data segments from a curated dataset. Disassociating a data
 * segment doesn't delete the underlying data in the source session dataset.
 */
export const batchDisassociateDataSegmentsFromDataset: API.OperationMethod<
  BatchDisassociateDataSegmentsFromDatasetRequest,
  BatchDisassociateDataSegmentsFromDatasetResponse,
  BatchDisassociateDataSegmentsFromDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22, __c2, 6) as any as S.Schema<BatchDisassociateDataSegmentsFromDatasetRequest>,
  output: __S(24, __c3, 0) as any as S.Schema<BatchDisassociateDataSegmentsFromDatasetResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDisassociateDataSegmentsFromDataset",
  endpointHostPrefix: "api.",
}));

export type BatchDisassociateProjectAssetsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.
 */
export const batchDisassociateProjectAssets: API.OperationMethod<
  BatchDisassociateProjectAssetsRequest,
  BatchDisassociateProjectAssetsResponse,
  BatchDisassociateProjectAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25, __c3, 1) as any as S.Schema<BatchDisassociateProjectAssetsRequest>,
  output: __S(15, __c1, 7) as any as S.Schema<BatchDisassociateProjectAssetsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDisassociateProjectAssets",
  endpointHostPrefix: "monitor.",
}));

export type BatchGetAssetPropertyAggregatesError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets aggregated values (for example, average, minimum, and maximum) for one or more asset
 * properties. For more information, see Querying aggregates in the
 * *IoT SiteWise User Guide*.
 */
export const batchGetAssetPropertyAggregates: API.PaginatedOperationMethod<
  BatchGetAssetPropertyAggregatesRequest,
  BatchGetAssetPropertyAggregatesResponse,
  BatchGetAssetPropertyAggregatesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(29, __c3, 5) as any as S.Schema<BatchGetAssetPropertyAggregatesRequest>,
  output: __S(40, __c5, 0) as any as S.Schema<BatchGetAssetPropertyAggregatesResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetAssetPropertyAggregates",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type BatchGetAssetPropertyValueError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the current value for one or more asset properties. For more information, see Querying
 * current values in the *IoT SiteWise User Guide*.
 */
export const batchGetAssetPropertyValue: API.PaginatedOperationMethod<
  BatchGetAssetPropertyValueRequest,
  BatchGetAssetPropertyValueResponse,
  BatchGetAssetPropertyValueError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(43, __c5, 3) as any as S.Schema<BatchGetAssetPropertyValueRequest>,
  output: __S(49, __c6, 1) as any as S.Schema<BatchGetAssetPropertyValueResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetAssetPropertyValue",
  endpointHostPrefix: "data.",
  pagination: { inputToken: "nextToken", outputToken: "nextToken" } as const,
})) as any;

export type BatchGetAssetPropertyValueHistoryError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the historical values for one or more asset properties. For more information, see
 * Querying historical values in the *IoT SiteWise User Guide*.
 */
export const batchGetAssetPropertyValueHistory: API.PaginatedOperationMethod<
  BatchGetAssetPropertyValueHistoryRequest,
  BatchGetAssetPropertyValueHistoryResponse,
  BatchGetAssetPropertyValueHistoryError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(52, __c6, 4) as any as S.Schema<BatchGetAssetPropertyValueHistoryRequest>,
  output: __S(56, __c7, 0) as any as S.Schema<BatchGetAssetPropertyValueHistoryResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetAssetPropertyValueHistory",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type BatchPutAssetPropertyValueError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value
 * (TQV) data point. For more information, see Ingesting data using the API in the
 * *IoT SiteWise User Guide*.
 *
 * To identify an asset property, you must specify one of the following:
 *
 * - The `assetId` and `propertyId` of an asset property.
 *
 * - A `propertyAlias`, which is a data stream alias (for example,
 * `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see UpdateAssetProperty.
 *
 * With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more
 * than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps
 * outside of the inclusive range of [-7 days, +10 minutes] and returns a
 * `TimestampOutOfRangeException` error.
 *
 * For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer
 * TQV has a different quality. For example, if you store a TQV `{T1, GOOD, V1}`,
 * then storing `{T1, GOOD, V2}` replaces the existing TQV.
 *
 * IoT SiteWise authorizes access to each `BatchPutAssetPropertyValue` entry individually.
 * For more information, see BatchPutAssetPropertyValue authorization in the
 * *IoT SiteWise User Guide*.
 */
export const batchPutAssetPropertyValue: API.OperationMethod<
  BatchPutAssetPropertyValueRequest,
  BatchPutAssetPropertyValueResponse,
  BatchPutAssetPropertyValueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<BatchPutAssetPropertyValueRequest>,
  output: __S(65, __c8, 1) as any as S.Schema<BatchPutAssetPropertyValueResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchPutAssetPropertyValue",
  endpointHostPrefix: "data.",
}));

export type CancelEnrichmentJobError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Cancels a running or pending enrichment job. This is an idempotent operation--calling it multiple
 * times with the same jobId is safe and returns the current status.
 *
 * Behavior
 *
 * - Jobs in PENDING or RUNNING status transition to CANCELLED
 *
 * - Jobs in RUNNING state may not be cancellable once they have progressed to certain processing stages
 *
 * - Jobs already in terminal states (COMPLETED, FAILED, TIMED_OUT) cannot be cancelled;
 * the operation returns a ConflictingOperationException
 *
 * - Cancelling an already-CANCELLED job is a no-op and returns the current status (idempotent behavior)
 *
 * - The API responds immediately after recording the cancellation
 *
 * - Cleanup of job resources happens asynchronously in the background
 *
 * When to Cancel
 *
 * Cancel a job when:
 *
 * - The job is taking longer than expected
 *
 * - The job was created with incorrect parameters
 *
 * - You no longer need the results
 *
 * Idempotency
 *
 * You can safely retry cancellation requests. Calling CancelEnrichmentJob multiple times for the same
 * job returns the current status without error as long as the job is not in a terminal state other
 * than CANCELLED.
 */
export const cancelEnrichmentJob: API.OperationMethod<
  CancelEnrichmentJobRequest,
  CancelEnrichmentJobResponse,
  CancelEnrichmentJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66, __c8, 2) as any as S.Schema<CancelEnrichmentJobRequest>,
  output: __S(67, __c8, 3) as any as S.Schema<CancelEnrichmentJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelEnrichmentJob",
  endpointHostPrefix: "data.",
}));

export type CancelPipelineExecutionError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Cancels a pipeline execution in the specified workspace. If the execution
 * is not in a terminal state (such as NOT_STARTED or RUNNING), it transitions to
 * CANCELLING and asynchronously to CANCELLED. This operation is idempotent: calling
 * it on an execution that is already CANCELLING or CANCELLED returns success with
 * the current state. Calling it on a terminal execution (SUCCEEDED or FAILED)
 * returns a conflict error. You can optionally provide a reason; it is returned in
 * the stateDetails field when you describe the execution.
 */
export const cancelPipelineExecution: API.OperationMethod<
  CancelPipelineExecutionRequest,
  CancelPipelineExecutionResponse,
  CancelPipelineExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<CancelPipelineExecutionRequest>,
  output: __S(69, __c8, 5) as any as S.Schema<CancelPipelineExecutionResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelPipelineExecution",
  endpointHostPrefix: "data.",
}));

export type CancelQueryError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Cancels a running query.
 */
export const cancelQuery: API.OperationMethod<
  CancelQueryRequest,
  CancelQueryResponse,
  CancelQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<CancelQueryRequest>,
  output: __S(71, __c8, 7) as any as S.Schema<CancelQueryResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelQuery",
  endpointHostPrefix: "data.",
}));

export type CreateAccessPolicyError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT SiteWise Monitor feature will no longer be open to new
 * customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can
 * continue to use the service as normal. For more information, see
 * IoT SiteWise Monitor availability change.
 *
 * Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or
 * IAM user) access to the specified IoT SiteWise Monitor portal or project resource.
 *
 * Support for access policies that use an SSO Group as the identity is not supported at this time.
 */
export const createAccessPolicy: API.OperationMethod<
  CreateAccessPolicyRequest,
  CreateAccessPolicyResponse,
  CreateAccessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<CreateAccessPolicyRequest>,
  output: __S(78, __c9, 6) as any as S.Schema<CreateAccessPolicyResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccessPolicy",
  endpointHostPrefix: "monitor.",
}));

export type CreateApplicationError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a new application for the workspace and IdC application provided
 */
export const createApplication: API.OperationMethod<
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79, __c9, 7) as any as S.Schema<CreateApplicationRequest>,
  output: __S(80, __c10, 0) as any as S.Schema<CreateApplicationResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplication",
  endpointHostPrefix: "api.",
}));

export type CreateAssetError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates an asset from an existing asset model. For more information, see Creating assets in the
 * *IoT SiteWise User Guide*.
 */
export const createAsset: API.OperationMethod<
  CreateAssetRequest,
  CreateAssetResponse,
  CreateAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<CreateAssetRequest>,
  output: __S(86, __c10, 6) as any as S.Schema<CreateAssetResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAsset",
  endpointHostPrefix: "api.",
}));

export type CreateAssetModelError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates an asset model from specified property and hierarchy definitions. You create
 * assets from asset models. With asset models, you can easily create assets of the same type
 * that have standardized definitions. Each asset created from a model inherits the asset model's
 * property and hierarchy definitions. For more information, see Defining asset models in the
 * *IoT SiteWise User Guide*.
 *
 * You can create three types of asset models, `ASSET_MODEL`,
 * `COMPONENT_MODEL`, or an `INTERFACE`.
 *
 * - **ASSET_MODEL** - (default) An asset model that
 * you can use to create assets. Can't be included as a component in another asset
 * model.
 *
 * - **COMPONENT_MODEL** - A reusable component that
 * you can include in the composite models of other asset models. You can't create
 * assets directly from this type of asset model.
 *
 * - **INTERFACE** - An interface is a type of model
 * that defines a standard structure that can be applied to different asset models.
 */
export const createAssetModel: API.OperationMethod<
  CreateAssetModelRequest,
  CreateAssetModelResponse,
  CreateAssetModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109, __c13, 5) as any as S.Schema<CreateAssetModelRequest>,
  output: __S(110, __c13, 6) as any as S.Schema<CreateAssetModelResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAssetModel",
  endpointHostPrefix: "api.",
}));

export type CreateAssetModelCompositeModelError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | PreconditionFailedException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a custom composite model from specified property and hierarchy definitions. There
 * are two types of custom composite models, `inline` and
 * `component-model-based`.
 *
 * Use component-model-based custom composite models to define standard, reusable components.
 * A component-model-based custom composite model consists of a name, a description, and the ID
 * of the component model it references. A component-model-based custom composite model has no
 * properties of its own; its referenced component model provides its associated properties to
 * any created assets. For more information, see Custom composite models (Components)
 * in the *IoT SiteWise User Guide*.
 *
 * Use inline custom composite models to organize the properties of an asset model. The
 * properties of inline custom composite models are local to the asset model where they are
 * included and can't be used to create multiple assets.
 *
 * To create a component-model-based model, specify the `composedAssetModelId` of
 * an existing asset model with `assetModelType` of
 * `COMPONENT_MODEL`.
 *
 * To create an inline model, specify the `assetModelCompositeModelProperties` and
 * don't include an `composedAssetModelId`.
 */
export const createAssetModelCompositeModel: API.OperationMethod<
  CreateAssetModelCompositeModelRequest,
  CreateAssetModelCompositeModelResponse,
  CreateAssetModelCompositeModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111, __c13, 7) as any as S.Schema<CreateAssetModelCompositeModelRequest>,
  output: __S(113, __c14, 1) as any as S.Schema<CreateAssetModelCompositeModelResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    PreconditionFailedException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAssetModelCompositeModel",
  endpointHostPrefix: "api.",
}));

export type CreateBulkImportJobError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see Create a
 * bulk import job (CLI) in the *Amazon Simple Storage Service User Guide*.
 *
 * Before you create a bulk import job that ingests data into time series outside of a
 * workspace, you must enable IoT SiteWise warm tier or IoT SiteWise cold tier. For more information about how
 * to configure storage settings, see PutStorageConfiguration. This requirement doesn't apply to bulk import jobs that
 * ingest data into a session dataset in a workspace (jobs that specify a
 * `workspaceName` and `datasetId`). Those jobs don't use IoT SiteWise warm or
 * cold tier storage.
 *
 * Bulk import is designed to store historical data to IoT SiteWise.
 *
 * - Newly ingested data in the hot tier triggers notifications and computations.
 *
 * - After data moves from the hot tier to the warm or cold tier based on retention
 * settings, it does not trigger computations or notifications.
 *
 * - Data older than 7 days does not trigger computations or notifications.
 */
export const createBulkImportJob: API.OperationMethod<
  CreateBulkImportJobRequest,
  CreateBulkImportJobResponse,
  CreateBulkImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<CreateBulkImportJobRequest>,
  output: __S(121, __c15, 1) as any as S.Schema<CreateBulkImportJobResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBulkImportJob",
  endpointHostPrefix: "data.",
}));

export type CreateComputationModelError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Create a computation model with a configuration and data binding.
 */
export const createComputationModel: API.OperationMethod<
  CreateComputationModelRequest,
  CreateComputationModelResponse,
  CreateComputationModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(129, __c16, 1) as any as S.Schema<CreateComputationModelRequest>,
  output: __S(130, __c16, 2) as any as S.Schema<CreateComputationModelResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateComputationModel",
  endpointHostPrefix: "api.",
}));

export type CreateDashboardError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT SiteWise Monitor feature will no longer be open to new
 * customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can
 * continue to use the service as normal. For more information, see
 * IoT SiteWise Monitor availability change.
 *
 * Creates a dashboard in an IoT SiteWise Monitor project.
 */
export const createDashboard: API.OperationMethod<
  CreateDashboardRequest,
  CreateDashboardResponse,
  CreateDashboardError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131, __c16, 3) as any as S.Schema<CreateDashboardRequest>,
  output: __S(132, __c16, 4) as any as S.Schema<CreateDashboardResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDashboard",
  endpointHostPrefix: "monitor.",
}));

export type CreateDatasetError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a dataset. Session and curated datasets are created in a workspace. A session dataset contains data segments of time series data, and a curated dataset curates data segments selected from source session datasets. A dataset that connects to an external datasource is created outside of a workspace.
 */
export const createDataset: API.OperationMethod<
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(138, __c17, 2) as any as S.Schema<CreateDatasetRequest>,
  output: __S(139, __c17, 3) as any as S.Schema<CreateDatasetResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataset",
  endpointHostPrefix: "api.",
}));

export type CreateDatasetExportJobError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Starts an asynchronous job that exports dataset and time-series data from a workspace to Amazon
 * S3. The operation returns a jobId immediately; poll DescribeDatasetExportJob to track progress and
 * ListDatasetExportJobs to enumerate a workspace's jobs.
 */
export const createDatasetExportJob: API.OperationMethod<
  CreateDatasetExportJobRequest,
  CreateDatasetExportJobResponse,
  CreateDatasetExportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(147, __c18, 3) as any as S.Schema<CreateDatasetExportJobRequest>,
  output: __S(148, __c18, 4) as any as S.Schema<CreateDatasetExportJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDatasetExportJob",
  endpointHostPrefix: "data.",
}));

export type CreateEnrichmentJobError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates an asynchronous enrichment job to analyze time-series sensor data. The operation returns
 * immediately with job details while processing continues in the background.
 *
 * Idempotency
 *
 * Include a clientToken to make the operation idempotent. If you submit the same request with the same
 * token within the idempotency window, you receive the original job details without creating a duplicate.
 *
 * Prerequisites
 *
 * Before creating a job, ensure:
 *
 * - The workspace is in ACTIVE state (not being deleted)
 *
 * - You have IAM permissions for the workspace, dataset, and time-series resources
 *
 * - You have KMS Decrypt permission on the workspace's customer-managed encryption key
 *
 * - No duplicate job (same workspace, dataset, property, and job type) is currently running
 *
 * Workflow
 *
 * - Submit the job with configuration specifying which video data to analyze and the time range
 *
 * - Capture the jobId from the response
 *
 * - Use DescribeEnrichmentJob to monitor progress and check job status
 *
 * - When status reaches a terminal state (COMPLETED, FAILED, TIMED_OUT, CANCELLED), check results
 *
 * - For COMPLETED jobs, query IoT SiteWise for semantic search on video events
 *
 * Error Handling
 *
 * - ConflictingOperationException: A duplicate job is already running for the same configuration
 *
 * - InvalidRequestException: Invalid parameters (e.g., both timeSeriesId and propertyAlias specified)
 *
 * - AccessDeniedException: Insufficient IAM or KMS permissions
 *
 * - LimitExceededException: Too many concurrent jobs or requests
 */
export const createEnrichmentJob: API.OperationMethod<
  CreateEnrichmentJobRequest,
  CreateEnrichmentJobResponse,
  CreateEnrichmentJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(151, __c18, 7) as any as S.Schema<CreateEnrichmentJobRequest>,
  output: __S(152, __c19, 0) as any as S.Schema<CreateEnrichmentJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEnrichmentJob",
  endpointHostPrefix: "data.",
}));

export type CreateGatewayError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a gateway, which is a virtual or edge device that delivers industrial data streams
 * from local servers to IoT SiteWise. For more information, see Ingesting data using a gateway in the
 * *IoT SiteWise User Guide*.
 */
export const createGateway: API.OperationMethod<
  CreateGatewayRequest,
  CreateGatewayResponse,
  CreateGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(157, __c19, 5) as any as S.Schema<CreateGatewayRequest>,
  output: __S(158, __c19, 6) as any as S.Schema<CreateGatewayResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGateway",
  endpointHostPrefix: "api.",
}));

export type CreatePipelineError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a new pipeline in the specified workspace. A pipeline defines a
 * directed acyclic graph (DAG) of compute nodes, where each node references a task
 * and can declare dependencies on other nodes. Cyclic dependencies are not
 * allowed. Nodes without dependencies run in parallel, while nodes with dependencies
 * wait for all upstream nodes to complete successfully before starting.
 *
 * You can set environment variables at the pipeline level that are shared across all
 * compute nodes, and override them at the individual compute node level.
 */
export const createPipeline: API.OperationMethod<
  CreatePipelineRequest,
  CreatePipelineResponse,
  CreatePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(162, __c20, 2) as any as S.Schema<CreatePipelineRequest>,
  output: __S(165, __c20, 5) as any as S.Schema<CreatePipelineResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePipeline",
  endpointHostPrefix: "api.",
}));

export type CreatePortalError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT SiteWise Monitor feature will no longer be open to new
 * customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can
 * continue to use the service as normal. For more information, see
 * IoT SiteWise Monitor availability change.
 *
 * Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM
 * to authenticate portal users and manage user permissions.
 *
 * Before you can sign in to a new portal, you must add at least one identity to that
 * portal. For more information, see Adding or removing portal
 * administrators in the *IoT SiteWise User Guide*.
 */
export const createPortal: API.OperationMethod<
  CreatePortalRequest,
  CreatePortalResponse,
  CreatePortalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(170, __c21, 2) as any as S.Schema<CreatePortalRequest>,
  output: __S(172, __c21, 4) as any as S.Schema<CreatePortalResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePortal",
  endpointHostPrefix: "monitor.",
}));

export type CreateProjectError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT SiteWise Monitor feature will no longer be open to new
 * customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can
 * continue to use the service as normal. For more information, see
 * IoT SiteWise Monitor availability change.
 *
 * Creates a project in the specified portal.
 *
 * Make sure that the project name and description don't contain confidential
 * information.
 */
export const createProject: API.OperationMethod<
  CreateProjectRequest,
  CreateProjectResponse,
  CreateProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173, __c21, 5) as any as S.Schema<CreateProjectRequest>,
  output: __S(174, __c21, 6) as any as S.Schema<CreateProjectResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProject",
  endpointHostPrefix: "monitor.",
}));

export type CreateTaskError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a new task in the specified workspace. A task defines a reusable
 * containerized compute workload that can be referenced by one or more pipeline compute nodes.
 *
 * Specify a `containerTaskConfiguration` for custom container workloads with
 * configurable ECR image, processing type, processing unit, and environment variables.
 */
export const createTask: API.OperationMethod<
  CreateTaskRequest,
  CreateTaskResponse,
  CreateTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182, __c22, 6) as any as S.Schema<CreateTaskRequest>,
  output: __S(183, __c22, 7) as any as S.Schema<CreateTaskResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTask",
  endpointHostPrefix: "api.",
}));

export type CreateWorkspaceError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a workspace in IoT SiteWise. A workspace isolates its resources, such as datasets, time
 * series, pipelines, and tasks, and their data from other workspaces, and has its own quotas
 * and throttling limits. You must specify an encryption configuration when you create
 * a workspace. The operation returns immediately with the workspace in the
 * `CREATING` state. Provisioning completes asynchronously, after which the workspace
 * state is `ACTIVE`, or `FAILED` if provisioning doesn't complete.
 */
export const createWorkspace: API.OperationMethod<
  CreateWorkspaceRequest,
  CreateWorkspaceResponse,
  CreateWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(185, __c23, 1) as any as S.Schema<CreateWorkspaceRequest>,
  output: __S(187, __c23, 3) as any as S.Schema<CreateWorkspaceResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkspace",
  endpointHostPrefix: "api.",
}));

export type DeleteAccessPolicyError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes an access policy that grants the specified identity access to the specified
 * IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor
 * resource.
 */
export const deleteAccessPolicy: API.OperationMethod<
  DeleteAccessPolicyRequest,
  DeleteAccessPolicyResponse,
  DeleteAccessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188, __c23, 4) as any as S.Schema<DeleteAccessPolicyRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteAccessPolicyResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessPolicy",
  endpointHostPrefix: "monitor.",
}));

export type DeleteApplicationError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes an application by ID
 */
export const deleteApplication: API.OperationMethod<
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(189, __c23, 5) as any as S.Schema<DeleteApplicationRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteApplicationResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplication",
  endpointHostPrefix: "api.",
}));

export type DeleteAssetError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes an asset. This action can't be undone. For more information, see Deleting assets and
 * models in the *IoT SiteWise User Guide*.
 *
 * You can't delete an asset that's associated to another asset. For more information, see
 * DisassociateAssets.
 */
export const deleteAsset: API.OperationMethod<
  DeleteAssetRequest,
  DeleteAssetResponse,
  DeleteAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(190, __c23, 6) as any as S.Schema<DeleteAssetRequest>,
  output: __S(191, __c23, 7) as any as S.Schema<DeleteAssetResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAsset",
  endpointHostPrefix: "api.",
}));

export type DeleteAssetModelError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | PreconditionFailedException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes an asset model. This action can't be undone. You must delete all assets created
 * from an asset model before you can delete the model. Also, you can't delete an asset model if
 * a parent asset model exists that contains a property formula expression that depends on the
 * asset model that you want to delete. For more information, see Deleting assets and models in the
 * *IoT SiteWise User Guide*.
 */
export const deleteAssetModel: API.OperationMethod<
  DeleteAssetModelRequest,
  DeleteAssetModelResponse,
  DeleteAssetModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192, __c24, 0) as any as S.Schema<DeleteAssetModelRequest>,
  output: __S(193, __c24, 1) as any as S.Schema<DeleteAssetModelResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    PreconditionFailedException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAssetModel",
  endpointHostPrefix: "api.",
}));

export type DeleteAssetModelCompositeModelError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | PreconditionFailedException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a composite model. This action can't be undone. You must delete all assets created
 * from a composite model before you can delete the model. Also, you can't delete a composite
 * model if a parent asset model exists that contains a property formula expression that depends
 * on the asset model that you want to delete. For more information, see Deleting assets and
 * models in the *IoT SiteWise User Guide*.
 */
export const deleteAssetModelCompositeModel: API.OperationMethod<
  DeleteAssetModelCompositeModelRequest,
  DeleteAssetModelCompositeModelResponse,
  DeleteAssetModelCompositeModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194, __c24, 2) as any as S.Schema<DeleteAssetModelCompositeModelRequest>,
  output: __S(195, __c24, 3) as any as S.Schema<DeleteAssetModelCompositeModelResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    PreconditionFailedException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAssetModelCompositeModel",
  endpointHostPrefix: "api.",
}));

export type DeleteAssetModelInterfaceRelationshipError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes an interface relationship between an asset model and an interface asset
 * model.
 */
export const deleteAssetModelInterfaceRelationship: API.OperationMethod<
  DeleteAssetModelInterfaceRelationshipRequest,
  DeleteAssetModelInterfaceRelationshipResponse,
  DeleteAssetModelInterfaceRelationshipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(196, __c24, 4) as any as S.Schema<DeleteAssetModelInterfaceRelationshipRequest>,
  output: __S(197, __c24, 5) as any as S.Schema<DeleteAssetModelInterfaceRelationshipResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAssetModelInterfaceRelationship",
  endpointHostPrefix: "api.",
}));

export type DeleteComputationModelError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a computation model. This action can't be undone.
 */
export const deleteComputationModel: API.OperationMethod<
  DeleteComputationModelRequest,
  DeleteComputationModelResponse,
  DeleteComputationModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(198, __c24, 6) as any as S.Schema<DeleteComputationModelRequest>,
  output: __S(199, __c24, 7) as any as S.Schema<DeleteComputationModelResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteComputationModel",
  endpointHostPrefix: "api.",
}));

export type DeleteDashboardError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a dashboard from IoT SiteWise Monitor.
 */
export const deleteDashboard: API.OperationMethod<
  DeleteDashboardRequest,
  DeleteDashboardResponse,
  DeleteDashboardError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(200, __c25, 0) as any as S.Schema<DeleteDashboardRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteDashboardResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDashboard",
  endpointHostPrefix: "monitor.",
}));

export type DeleteDatasetError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a dataset. This can't be undone. Deleting a session dataset also deletes the underlying time series data in the session. You can't delete a session dataset while a curated dataset references its data segments. First delete the curated dataset or disassociate the data segments. Deleting a curated dataset doesn't delete the underlying data in the source session datasets.
 */
export const deleteDataset: API.OperationMethod<
  DeleteDatasetRequest,
  DeleteDatasetResponse,
  DeleteDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(201, __c25, 1) as any as S.Schema<DeleteDatasetRequest>,
  output: __S(202, __c25, 2) as any as S.Schema<DeleteDatasetResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataset",
  endpointHostPrefix: "api.",
}));

export type DeleteGatewayError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain
 * in your gateway's file system.
 */
export const deleteGateway: API.OperationMethod<
  DeleteGatewayRequest,
  DeleteGatewayResponse,
  DeleteGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(203, __c25, 3) as any as S.Schema<DeleteGatewayRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteGatewayResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGateway",
  endpointHostPrefix: "api.",
}));

export type DeletePipelineError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a pipeline from the specified workspace. A pipeline cannot be
 * deleted if it has any active executions. Wait for all executions to complete before
 * attempting to delete the pipeline, or use CancelPipelineExecution to stop a running
 * execution.
 */
export const deletePipeline: API.OperationMethod<
  DeletePipelineRequest,
  DeletePipelineResponse,
  DeletePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(204, __c25, 4) as any as S.Schema<DeletePipelineRequest>,
  output: __S(205, __c25, 5) as any as S.Schema<DeletePipelineResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePipeline",
  endpointHostPrefix: "api.",
}));

export type DeletePortalError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a portal from IoT SiteWise Monitor.
 */
export const deletePortal: API.OperationMethod<
  DeletePortalRequest,
  DeletePortalResponse,
  DeletePortalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(206, __c25, 6) as any as S.Schema<DeletePortalRequest>,
  output: __S(207, __c25, 7) as any as S.Schema<DeletePortalResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePortal",
  endpointHostPrefix: "monitor.",
}));

export type DeleteProjectError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a project from IoT SiteWise Monitor.
 */
export const deleteProject: API.OperationMethod<
  DeleteProjectRequest,
  DeleteProjectResponse,
  DeleteProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(208, __c26, 0) as any as S.Schema<DeleteProjectRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteProjectResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProject",
  endpointHostPrefix: "monitor.",
}));

export type DeleteTaskError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a task from the specified workspace. A task cannot be deleted
 * if it is currently referenced by any existing pipeline. Remove the task from all
 * pipelines before attempting to delete it.
 */
export const deleteTask: API.OperationMethod<
  DeleteTaskRequest,
  DeleteTaskResponse,
  DeleteTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(209, __c26, 1) as any as S.Schema<DeleteTaskRequest>,
  output: __S(205, __c25, 5) as any as S.Schema<DeleteTaskResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTask",
  endpointHostPrefix: "api.",
}));

export type DeleteTimeSeriesError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a time series (data stream). If you delete a time series that's associated with an
 * asset property, the asset property still exists, but the time series will no longer be
 * associated with this asset property. You can't delete a time series until all of its data
 * segments have been deleted from session datasets.
 *
 * To identify a time series, do one of the following:
 *
 * - If the time series isn't associated with an asset property,
 * specify the `alias` of the time series.
 *
 * - If the time series is associated with an asset property,
 * specify one of the following:
 *
 * - The `alias` of the time series.
 *
 * - The `assetId` and `propertyId` that identifies the asset property.
 */
export const deleteTimeSeries: API.OperationMethod<
  DeleteTimeSeriesRequest,
  DeleteTimeSeriesResponse,
  DeleteTimeSeriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(210, __c26, 2) as any as S.Schema<DeleteTimeSeriesRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteTimeSeriesResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTimeSeries",
  endpointHostPrefix: "api.",
}));

export type DeleteWorkspaceError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a workspace. Before you delete a workspace, you must delete all resources
 * contained in or associated with the workspace, such as datasets, time series, pipelines,
 * and tasks.
 */
export const deleteWorkspace: API.OperationMethod<
  DeleteWorkspaceRequest,
  DeleteWorkspaceResponse,
  DeleteWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(211, __c26, 3) as any as S.Schema<DeleteWorkspaceRequest>,
  output: __S(212, __c26, 4) as any as S.Schema<DeleteWorkspaceResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkspace",
  endpointHostPrefix: "api.",
}));

export type DescribeAccessPolicyError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or
 * project.
 */
export const describeAccessPolicy: API.OperationMethod<
  DescribeAccessPolicyRequest,
  DescribeAccessPolicyResponse,
  DescribeAccessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(213, __c26, 5) as any as S.Schema<DescribeAccessPolicyRequest>,
  output: __S(214, __c26, 6) as any as S.Schema<DescribeAccessPolicyResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccessPolicy",
  endpointHostPrefix: "monitor.",
}));

export type DescribeActionError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about an action.
 */
export const describeAction: API.OperationMethod<
  DescribeActionRequest,
  DescribeActionResponse,
  DescribeActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(215, __c26, 7) as any as S.Schema<DescribeActionRequest>,
  output: __S(219, __c27, 3) as any as S.Schema<DescribeActionResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAction",
  endpointHostPrefix: "api.",
}));

export type DescribeApplicationError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves Application details based on the ID
 */
export const describeApplication: API.OperationMethod<
  DescribeApplicationRequest,
  DescribeApplicationResponse,
  DescribeApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(220, __c27, 4) as any as S.Schema<DescribeApplicationRequest>,
  output: __S(221, __c27, 5) as any as S.Schema<DescribeApplicationResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplication",
  endpointHostPrefix: "api.",
}));

export type DescribeAssetError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about an asset.
 */
export const describeAsset: API.OperationMethod<
  DescribeAssetRequest,
  DescribeAssetResponse,
  DescribeAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(222, __c27, 6) as any as S.Schema<DescribeAssetRequest>,
  output: __S(234, __c29, 2) as any as S.Schema<DescribeAssetResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAsset",
  endpointHostPrefix: "api.",
}));

export type DescribeAssetCompositeModelError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about an asset composite model (also known as an asset component).
 * An `AssetCompositeModel` is an instance of an
 * `AssetModelCompositeModel`. If you want to see information about the model this is
 * based on, call DescribeAssetModelCompositeModel.
 */
export const describeAssetCompositeModel: API.OperationMethod<
  DescribeAssetCompositeModelRequest,
  DescribeAssetCompositeModelResponse,
  DescribeAssetCompositeModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(235, __c29, 3) as any as S.Schema<DescribeAssetCompositeModelRequest>,
  output: __S(238, __c29, 6) as any as S.Schema<DescribeAssetCompositeModelResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAssetCompositeModel",
  endpointHostPrefix: "api.",
}));

export type DescribeAssetModelError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about an asset model. This includes details about the asset model's
 * properties, hierarchies, composite models, and any interface relationships if the asset model
 * implements interfaces.
 */
export const describeAssetModel: API.OperationMethod<
  DescribeAssetModelRequest,
  DescribeAssetModelResponse,
  DescribeAssetModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(239, __c29, 7) as any as S.Schema<DescribeAssetModelRequest>,
  output: __S(250, __c31, 2) as any as S.Schema<DescribeAssetModelResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAssetModel",
  endpointHostPrefix: "api.",
}));

export type DescribeAssetModelCompositeModelError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about an asset model composite model (also known as an asset model
 * component). For more information, see Custom composite models
 * (Components) in the *IoT SiteWise User Guide*.
 */
export const describeAssetModelCompositeModel: API.OperationMethod<
  DescribeAssetModelCompositeModelRequest,
  DescribeAssetModelCompositeModelResponse,
  DescribeAssetModelCompositeModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(251, __c31, 3) as any as S.Schema<DescribeAssetModelCompositeModelRequest>,
  output: __S(255, __c31, 7) as any as S.Schema<DescribeAssetModelCompositeModelResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAssetModelCompositeModel",
  endpointHostPrefix: "api.",
}));

export type DescribeAssetModelInterfaceRelationshipError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about an interface relationship between an asset model and an
 * interface asset model.
 */
export const describeAssetModelInterfaceRelationship: API.OperationMethod<
  DescribeAssetModelInterfaceRelationshipRequest,
  DescribeAssetModelInterfaceRelationshipResponse,
  DescribeAssetModelInterfaceRelationshipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(256, __c32, 0) as any as S.Schema<DescribeAssetModelInterfaceRelationshipRequest>,
  output: __S(261, __c32, 5) as any as S.Schema<DescribeAssetModelInterfaceRelationshipResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAssetModelInterfaceRelationship",
  endpointHostPrefix: "api.",
}));

export type DescribeAssetPropertyError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about an asset property.
 *
 * When you call this operation for an attribute property, this response includes the
 * default attribute value that you define in the asset model. If you update the default value
 * in the model, this operation's response includes the new default value.
 *
 * This operation doesn't return the value of the asset property. To get the value of an
 * asset property, use GetAssetPropertyValue.
 */
export const describeAssetProperty: API.OperationMethod<
  DescribeAssetPropertyRequest,
  DescribeAssetPropertyResponse,
  DescribeAssetPropertyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(262, __c32, 6) as any as S.Schema<DescribeAssetPropertyRequest>,
  output: __S(265, __c33, 1) as any as S.Schema<DescribeAssetPropertyResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAssetProperty",
  endpointHostPrefix: "api.",
}));

export type DescribeBulkImportJobError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about a bulk import job request. For more information, see Describe
 * a bulk import job (CLI) in the *Amazon Simple Storage Service User Guide*.
 */
export const describeBulkImportJob: API.OperationMethod<
  DescribeBulkImportJobRequest,
  DescribeBulkImportJobResponse,
  DescribeBulkImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(266, __c33, 2) as any as S.Schema<DescribeBulkImportJobRequest>,
  output: __S(267, __c33, 3) as any as S.Schema<DescribeBulkImportJobResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBulkImportJob",
  endpointHostPrefix: "data.",
}));

export type DescribeComputationModelError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about a computation model.
 */
export const describeComputationModel: API.OperationMethod<
  DescribeComputationModelRequest,
  DescribeComputationModelResponse,
  DescribeComputationModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(268, __c33, 4) as any as S.Schema<DescribeComputationModelRequest>,
  output: __S(269, __c33, 5) as any as S.Schema<DescribeComputationModelResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeComputationModel",
  endpointHostPrefix: "api.",
}));

export type DescribeComputationModelExecutionSummaryError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about the execution summary of a computation model.
 */
export const describeComputationModelExecutionSummary: API.OperationMethod<
  DescribeComputationModelExecutionSummaryRequest,
  DescribeComputationModelExecutionSummaryResponse,
  DescribeComputationModelExecutionSummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(270, __c33, 6) as any as S.Schema<DescribeComputationModelExecutionSummaryRequest>,
  output: __S(271, __c33, 7) as any as S.Schema<DescribeComputationModelExecutionSummaryResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeComputationModelExecutionSummary",
  endpointHostPrefix: "api.",
}));

export type DescribeDashboardError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about a dashboard.
 */
export const describeDashboard: API.OperationMethod<
  DescribeDashboardRequest,
  DescribeDashboardResponse,
  DescribeDashboardError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(272, __c34, 0) as any as S.Schema<DescribeDashboardRequest>,
  output: __S(273, __c34, 1) as any as S.Schema<DescribeDashboardResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDashboard",
  endpointHostPrefix: "monitor.",
}));

export type DescribeDatasetError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about a dataset.
 */
export const describeDataset: API.OperationMethod<
  DescribeDatasetRequest,
  DescribeDatasetResponse,
  DescribeDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(274, __c34, 2) as any as S.Schema<DescribeDatasetRequest>,
  output: __S(277, __c34, 5) as any as S.Schema<DescribeDatasetResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDataset",
  endpointHostPrefix: "api.",
}));

export type DescribeDatasetExportJobError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about a dataset export job.
 */
export const describeDatasetExportJob: API.OperationMethod<
  DescribeDatasetExportJobRequest,
  DescribeDatasetExportJobResponse,
  DescribeDatasetExportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(278, __c34, 6) as any as S.Schema<DescribeDatasetExportJobRequest>,
  output: __S(279, __c34, 7) as any as S.Schema<DescribeDatasetExportJobResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDatasetExportJob",
  endpointHostPrefix: "data.",
}));

export type DescribeDefaultEncryptionConfigurationError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about the default encryption configuration for the Amazon Web Services account in
 * the default or specified Region. For more information, see Key management in the
 * *IoT SiteWise User Guide*.
 */
export const describeDefaultEncryptionConfiguration: API.OperationMethod<
  DescribeDefaultEncryptionConfigurationRequest,
  DescribeDefaultEncryptionConfigurationResponse,
  DescribeDefaultEncryptionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(280, __c35, 0) as any as S.Schema<DescribeDefaultEncryptionConfigurationRequest>,
  output: __S(283, __c35, 3) as any as S.Schema<DescribeDefaultEncryptionConfigurationResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDefaultEncryptionConfiguration",
  endpointHostPrefix: "api.",
}));

export type DescribeEnrichmentJobError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific enrichment job, including its current status,
 * configuration, and timestamps.
 *
 * Use Cases
 *
 * - Monitor job progress by checking status updates with DescribeEnrichmentJob
 *
 * - Retrieve the complete job configuration submitted during creation
 *
 * - Debug failed jobs by examining the failureMessage field
 *
 * - Track job lifecycle with creation, update, completion, and cancellation timestamps
 *
 * Status Monitoring
 *
 * Jobs progress through statuses: PENDING -> RUNNING -> terminal state
 *
 * Terminal states:
 *
 * - COMPLETED: Job finished successfully; query IoT SiteWise for semantic search results
 *
 * - FAILED: Job encountered an error; check failureMessage for details
 *
 * - TIMED_OUT: Job exceeded maximum processing time
 *
 * - CANCELLED: Job was cancelled via CancelEnrichmentJob
 *
 * Response Fields
 *
 * The response includes:
 *
 * - Current job status and type
 *
 * - Full job configuration as originally submitted
 *
 * - Lifecycle timestamps (created, updated, completed, cancelled)
 *
 * - Failure details if status is FAILED
 */
export const describeEnrichmentJob: API.OperationMethod<
  DescribeEnrichmentJobRequest,
  DescribeEnrichmentJobResponse,
  DescribeEnrichmentJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(284, __c35, 4) as any as S.Schema<DescribeEnrichmentJobRequest>,
  output: __S(285, __c35, 5) as any as S.Schema<DescribeEnrichmentJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEnrichmentJob",
  endpointHostPrefix: "data.",
}));

export type DescribeExecutionError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about the execution.
 */
export const describeExecution: API.OperationMethod<
  DescribeExecutionRequest,
  DescribeExecutionResponse,
  DescribeExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(286, __c35, 6) as any as S.Schema<DescribeExecutionRequest>,
  output: __S(287, __c35, 7) as any as S.Schema<DescribeExecutionResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeExecution",
  endpointHostPrefix: "api.",
}));

export type DescribeGatewayError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about a gateway.
 */
export const describeGateway: API.OperationMethod<
  DescribeGatewayRequest,
  DescribeGatewayResponse,
  DescribeGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(288, __c36, 0) as any as S.Schema<DescribeGatewayRequest>,
  output: __S(291, __c36, 3) as any as S.Schema<DescribeGatewayResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeGateway",
  endpointHostPrefix: "api.",
}));

export type DescribeGatewayCapabilityConfigurationError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Each gateway capability defines data sources for a gateway. This is the namespace of the gateway capability.
 *
 * . The namespace follows the format `service:capability:version`, where:
 *
 * - `service` - The service providing the capability, or `iotsitewise`.
 *
 * - `capability` - The specific capability type. Options include: `opcuacollector` for the OPC UA data source collector, or `publisher` for data publisher capability.
 *
 * - `version` - The version number of the capability. Option include `2` for Classic streams, V2 gateways, and `3` for MQTT-enabled, V3 gateways.
 *
 * After updating a capability configuration, the sync status becomes `OUT_OF_SYNC` until the gateway processes the configuration.Use `DescribeGatewayCapabilityConfiguration` to check the sync status and verify the configuration was applied.
 *
 * A gateway can have multiple capability configurations with different namespaces.
 */
export const describeGatewayCapabilityConfiguration: API.OperationMethod<
  DescribeGatewayCapabilityConfigurationRequest,
  DescribeGatewayCapabilityConfigurationResponse,
  DescribeGatewayCapabilityConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(292, __c36, 4) as any as S.Schema<DescribeGatewayCapabilityConfigurationRequest>,
  output: __S(293, __c36, 5) as any as S.Schema<DescribeGatewayCapabilityConfigurationResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeGatewayCapabilityConfiguration",
  endpointHostPrefix: "api.",
}));

export type DescribeLoggingOptionsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the current IoT SiteWise logging options.
 */
export const describeLoggingOptions: API.OperationMethod<
  DescribeLoggingOptionsRequest,
  DescribeLoggingOptionsResponse,
  DescribeLoggingOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(294, __c36, 6) as any as S.Schema<DescribeLoggingOptionsRequest>,
  output: __S(296, __c37, 0) as any as S.Schema<DescribeLoggingOptionsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLoggingOptions",
  endpointHostPrefix: "api.",
}));

export type DescribePipelineError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific pipeline in a workspace.
 */
export const describePipeline: API.OperationMethod<
  DescribePipelineRequest,
  DescribePipelineResponse,
  DescribePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(297, __c37, 1) as any as S.Schema<DescribePipelineRequest>,
  output: __S(298, __c37, 2) as any as S.Schema<DescribePipelineResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePipeline",
  endpointHostPrefix: "api.",
}));

export type DescribePipelineExecutionError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific pipeline execution, including the
 * overall execution status and the status of each individual compute node. Use this
 * operation to monitor execution progress and inspect per-node results, environment
 * variables, and error details.
 */
export const describePipelineExecution: API.PaginatedOperationMethod<
  DescribePipelineExecutionRequest,
  DescribePipelineExecutionResponse,
  DescribePipelineExecutionError,
  Credentials | HttpClient.HttpClient,
  ComputeNodeExecutionDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(299, __c37, 3) as any as S.Schema<DescribePipelineExecutionRequest>,
  output: __S(310, __c38, 6) as any as S.Schema<DescribePipelineExecutionResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePipelineExecution",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "computeNodeExecutionDetails",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribePortalError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about a portal.
 */
export const describePortal: API.OperationMethod<
  DescribePortalRequest,
  DescribePortalResponse,
  DescribePortalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(311, __c38, 7) as any as S.Schema<DescribePortalRequest>,
  output: __S(313, __c39, 1) as any as S.Schema<DescribePortalResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePortal",
  endpointHostPrefix: "monitor.",
}));

export type DescribeProjectError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about a project.
 */
export const describeProject: API.OperationMethod<
  DescribeProjectRequest,
  DescribeProjectResponse,
  DescribeProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(314, __c39, 2) as any as S.Schema<DescribeProjectRequest>,
  output: __S(315, __c39, 3) as any as S.Schema<DescribeProjectResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProject",
  endpointHostPrefix: "monitor.",
}));

export type DescribeQueryError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about a query, including its status.
 */
export const describeQuery: API.OperationMethod<
  DescribeQueryRequest,
  DescribeQueryResponse,
  DescribeQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(316, __c39, 4) as any as S.Schema<DescribeQueryRequest>,
  output: __S(318, __c39, 6) as any as S.Schema<DescribeQueryResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeQuery",
  endpointHostPrefix: "data.",
}));

export type DescribeSearchError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the current status and metadata of a single search, including the query that was
 * submitted, the search type, and -- when the search has failed -- the reason. Use this to poll a
 * search started with `StartSearch` until it reaches a terminal status (`SUCCEEDED` or
 * `FAILED`).
 */
export const describeSearch: API.OperationMethod<
  DescribeSearchRequest,
  DescribeSearchResponse,
  DescribeSearchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(319, __c39, 7) as any as S.Schema<DescribeSearchRequest>,
  output: __S(320, __c40, 0) as any as S.Schema<DescribeSearchResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSearch",
  endpointHostPrefix: "data.",
}));

export type DescribeStorageConfigurationError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about the storage configuration for IoT SiteWise.
 */
export const describeStorageConfiguration: API.OperationMethod<
  DescribeStorageConfigurationRequest,
  DescribeStorageConfigurationResponse,
  DescribeStorageConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(321, __c40, 1) as any as S.Schema<DescribeStorageConfigurationRequest>,
  output: __S(325, __c40, 5) as any as S.Schema<DescribeStorageConfigurationResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStorageConfiguration",
  endpointHostPrefix: "api.",
}));

export type DescribeTaskError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific task in a workspace.
 */
export const describeTask: API.OperationMethod<
  DescribeTaskRequest,
  DescribeTaskResponse,
  DescribeTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(326, __c40, 6) as any as S.Schema<DescribeTaskRequest>,
  output: __S(327, __c40, 7) as any as S.Schema<DescribeTaskResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTask",
  endpointHostPrefix: "api.",
}));

export type DescribeTimeSeriesError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about a time series (data stream).
 *
 * To identify a time series, do one of the following:
 *
 * - If the time series isn't associated with an asset property,
 * specify the `alias` of the time series.
 *
 * - If the time series is associated with an asset property,
 * specify one of the following:
 *
 * - The `alias` of the time series.
 *
 * - The `assetId` and `propertyId` that identifies the asset property.
 */
export const describeTimeSeries: API.OperationMethod<
  DescribeTimeSeriesRequest,
  DescribeTimeSeriesResponse,
  DescribeTimeSeriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(328, __c41, 0) as any as S.Schema<DescribeTimeSeriesRequest>,
  output: __S(329, __c41, 1) as any as S.Schema<DescribeTimeSeriesResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTimeSeries",
  endpointHostPrefix: "api.",
}));

export type DescribeWorkspaceError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about a workspace.
 */
export const describeWorkspace: API.OperationMethod<
  DescribeWorkspaceRequest,
  DescribeWorkspaceResponse,
  DescribeWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(330, __c41, 2) as any as S.Schema<DescribeWorkspaceRequest>,
  output: __S(332, __c41, 4) as any as S.Schema<DescribeWorkspaceResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspace",
  endpointHostPrefix: "api.",
}));

export type DisassociateAssetsError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Disassociates a child asset from the given parent asset through a hierarchy defined in the
 * parent asset's model.
 */
export const disassociateAssets: API.OperationMethod<
  DisassociateAssetsRequest,
  DisassociateAssetsResponse,
  DisassociateAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(333, __c41, 5) as any as S.Schema<DisassociateAssetsRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DisassociateAssetsResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateAssets",
  endpointHostPrefix: "api.",
}));

export type DisassociateTimeSeriesFromAssetPropertyError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Disassociates a time series (data stream) from an asset property.
 */
export const disassociateTimeSeriesFromAssetProperty: API.OperationMethod<
  DisassociateTimeSeriesFromAssetPropertyRequest,
  DisassociateTimeSeriesFromAssetPropertyResponse,
  DisassociateTimeSeriesFromAssetPropertyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(334, __c41, 6) as any as S.Schema<DisassociateTimeSeriesFromAssetPropertyRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<DisassociateTimeSeriesFromAssetPropertyResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateTimeSeriesFromAssetProperty",
  endpointHostPrefix: "api.",
}));

export type ExecuteActionError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Executes an action on a target resource.
 */
export const executeAction: API.OperationMethod<
  ExecuteActionRequest,
  ExecuteActionResponse,
  ExecuteActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(335, __c41, 7) as any as S.Schema<ExecuteActionRequest>,
  output: __S(336, __c42, 0) as any as S.Schema<ExecuteActionResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExecuteAction",
  endpointHostPrefix: "api.",
}));

export type ExecuteQueryError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | QueryTimeoutException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Run SQL queries to retrieve metadata and time-series data from asset models, assets,
 * measurements, metrics, transforms, and aggregates.
 */
export const executeQuery: API.PaginatedOperationMethod<
  ExecuteQueryRequest,
  ExecuteQueryResponse,
  ExecuteQueryError,
  Credentials | HttpClient.HttpClient,
  Row
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(337, __c42, 1) as any as S.Schema<ExecuteQueryRequest>,
  output: __S(345, __c43, 1) as any as S.Schema<ExecuteQueryResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    QueryTimeoutException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExecuteQuery",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "rows",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetAssetPropertyAggregatesError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets aggregated values for an asset property. For more information, see Querying
 * aggregates in the *IoT SiteWise User Guide*.
 *
 * To identify an asset property, you must specify one of the following:
 *
 * - The `assetId` and `propertyId` of an asset property.
 *
 * - A `propertyAlias`, which is a data stream alias (for example,
 * `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see UpdateAssetProperty.
 */
export const getAssetPropertyAggregates: API.PaginatedOperationMethod<
  GetAssetPropertyAggregatesRequest,
  GetAssetPropertyAggregatesResponse,
  GetAssetPropertyAggregatesError,
  Credentials | HttpClient.HttpClient,
  AggregatedValue
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(346, __c43, 2) as any as S.Schema<GetAssetPropertyAggregatesRequest>,
  output: __S(347, __c43, 3) as any as S.Schema<GetAssetPropertyAggregatesResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAssetPropertyAggregates",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "aggregatedValues",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetAssetPropertyValueError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets an asset property's current value. For more information, see Querying
 * current values in the *IoT SiteWise User Guide*.
 *
 * To identify an asset property, you must specify one of the following:
 *
 * - The `assetId` and `propertyId` of an asset property.
 *
 * - A `propertyAlias`, which is a data stream alias (for example,
 * `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see UpdateAssetProperty.
 */
export const getAssetPropertyValue: API.OperationMethod<
  GetAssetPropertyValueRequest,
  GetAssetPropertyValueResponse,
  GetAssetPropertyValueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(348, __c43, 4) as any as S.Schema<GetAssetPropertyValueRequest>,
  output: __S(349, __c43, 5) as any as S.Schema<GetAssetPropertyValueResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAssetPropertyValue",
  endpointHostPrefix: "data.",
}));

export type GetAssetPropertyValueHistoryError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the history of an asset property's values. For more information, see Querying
 * historical values in the *IoT SiteWise User Guide*.
 *
 * To identify an asset property, you must specify one of the following:
 *
 * - The `assetId` and `propertyId` of an asset property.
 *
 * - A `propertyAlias`, which is a data stream alias (for example,
 * `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see UpdateAssetProperty.
 */
export const getAssetPropertyValueHistory: API.PaginatedOperationMethod<
  GetAssetPropertyValueHistoryRequest,
  GetAssetPropertyValueHistoryResponse,
  GetAssetPropertyValueHistoryError,
  Credentials | HttpClient.HttpClient,
  AssetPropertyValue
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(350, __c43, 6) as any as S.Schema<GetAssetPropertyValueHistoryRequest>,
  output: __S(351, __c43, 7) as any as S.Schema<GetAssetPropertyValueHistoryResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAssetPropertyValueHistory",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "assetPropertyValueHistory",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetCaptureDataError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves video data for a specific time range.
 */
export const getCaptureData: API.OperationMethod<
  GetCaptureDataRequest,
  GetCaptureDataResponse,
  GetCaptureDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(352, __c44, 0) as any as S.Schema<GetCaptureDataRequest>,
  output: __S(353, __c44, 1) as any as S.Schema<GetCaptureDataResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCaptureData",
  endpointHostPrefix: "data.",
}));

export type GetInterpolatedAssetPropertyValuesError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Get interpolated values for an asset property for a specified time interval, during a
 * period of time. If your time series is missing data points during the specified time interval,
 * you can use interpolation to estimate the missing data.
 *
 * For example, you can use this operation to return the interpolated temperature values for
 * a wind turbine every 24 hours over a duration of 7 days.
 *
 * To identify an asset property, you must specify one of the following:
 *
 * - The `assetId` and `propertyId` of an asset property.
 *
 * - A `propertyAlias`, which is a data stream alias (for example,
 * `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see UpdateAssetProperty.
 */
export const getInterpolatedAssetPropertyValues: API.PaginatedOperationMethod<
  GetInterpolatedAssetPropertyValuesRequest,
  GetInterpolatedAssetPropertyValuesResponse,
  GetInterpolatedAssetPropertyValuesError,
  Credentials | HttpClient.HttpClient,
  InterpolatedAssetPropertyValue
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(354, __c44, 2) as any as S.Schema<GetInterpolatedAssetPropertyValuesRequest>,
  output: __S(357, __c44, 5) as any as S.Schema<GetInterpolatedAssetPropertyValuesResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInterpolatedAssetPropertyValues",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "interpolatedAssetPropertyValues",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetQueryResultsError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the paginated results of a query. Returns empty rows if the query is not yet complete.
 */
export const getQueryResults: API.PaginatedOperationMethod<
  GetQueryResultsRequest,
  GetQueryResultsResponse,
  GetQueryResultsError,
  Credentials | HttpClient.HttpClient,
  ColumnValue[]
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(358, __c44, 6) as any as S.Schema<GetQueryResultsRequest>,
  output: __S(363, __c45, 3) as any as S.Schema<GetQueryResultsResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetQueryResults",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "rows",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetSearchResultsError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the ranked results of a search, ordered by descending relevance score. Results are
 * available only after the search has reached the `SUCCEEDED` status. Calling this on a search
 * that exists but has not yet completed returns `InvalidRequestException`, while calling it on a
 * search that does not exist returns `ResourceNotFoundException`. The response is paginated: when
 * `nextToken` is present, pass it on a subsequent call to retrieve the next page.
 */
export const getSearchResults: API.PaginatedOperationMethod<
  GetSearchResultsRequest,
  GetSearchResultsResponse,
  GetSearchResultsError,
  Credentials | HttpClient.HttpClient,
  SearchResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(364, __c45, 4) as any as S.Schema<GetSearchResultsRequest>,
  output: __S(367, __c45, 7) as any as S.Schema<GetSearchResultsResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSearchResults",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "searchResults",
    pageSize: "maxResults",
  } as const,
})) as any;

export type InvokeAssistantError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Invokes SiteWise Assistant to start or continue a conversation.
 */
export const invokeAssistant: API.OperationMethod<
  InvokeAssistantRequest,
  InvokeAssistantResponse,
  InvokeAssistantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(368, __c46, 0) as any as S.Schema<InvokeAssistantRequest>,
  output: __S(378, __c47, 2) as any as S.Schema<InvokeAssistantResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InvokeAssistant",
  endpointHostPrefix: "data.",
}));

export type ListAccessPoliciesError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center
 * group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).
 */
export const listAccessPolicies: API.PaginatedOperationMethod<
  ListAccessPoliciesRequest,
  ListAccessPoliciesResponse,
  ListAccessPoliciesError,
  Credentials | HttpClient.HttpClient,
  AccessPolicySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(379, __c47, 3) as any as S.Schema<ListAccessPoliciesRequest>,
  output: __S(382, __c47, 6) as any as S.Schema<ListAccessPoliciesResponse>,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessPolicies",
  endpointHostPrefix: "monitor.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "accessPolicySummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListActionsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of actions for a specific target resource.
 */
export const listActions: API.PaginatedOperationMethod<
  ListActionsRequest,
  ListActionsResponse,
  ListActionsError,
  Credentials | HttpClient.HttpClient,
  ActionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(383, __c47, 7) as any as S.Schema<ListActionsRequest>,
  output: __S(386, __c48, 2) as any as S.Schema<ListActionsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListActions",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "actionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListApplicationsError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of existing applications
 */
export const listApplications: API.PaginatedOperationMethod<
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListApplicationsError,
  Credentials | HttpClient.HttpClient,
  ApplicationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(387, __c48, 3) as any as S.Schema<ListApplicationsRequest>,
  output: __S(390, __c48, 6) as any as S.Schema<ListApplicationsResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplications",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "applications",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssetModelCompositeModelsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of composite models associated with the asset model
 */
export const listAssetModelCompositeModels: API.PaginatedOperationMethod<
  ListAssetModelCompositeModelsRequest,
  ListAssetModelCompositeModelsResponse,
  ListAssetModelCompositeModelsError,
  Credentials | HttpClient.HttpClient,
  AssetModelCompositeModelSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(391, __c48, 7) as any as S.Schema<ListAssetModelCompositeModelsRequest>,
  output: __S(392, __c49, 0) as any as S.Schema<ListAssetModelCompositeModelsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssetModelCompositeModels",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "assetModelCompositeModelSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssetModelPropertiesError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of properties associated with an asset model.
 * If you update properties associated with the model before you finish listing all the properties,
 * you need to start all over again.
 */
export const listAssetModelProperties: API.PaginatedOperationMethod<
  ListAssetModelPropertiesRequest,
  ListAssetModelPropertiesResponse,
  ListAssetModelPropertiesError,
  Credentials | HttpClient.HttpClient,
  AssetModelPropertySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(393, __c49, 1) as any as S.Schema<ListAssetModelPropertiesRequest>,
  output: __S(398, __c49, 6) as any as S.Schema<ListAssetModelPropertiesResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssetModelProperties",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "assetModelPropertySummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssetModelsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of summaries of all asset models.
 */
export const listAssetModels: API.PaginatedOperationMethod<
  ListAssetModelsRequest,
  ListAssetModelsResponse,
  ListAssetModelsError,
  Credentials | HttpClient.HttpClient,
  AssetModelSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(399, __c49, 7) as any as S.Schema<ListAssetModelsRequest>,
  output: __S(402, __c50, 2) as any as S.Schema<ListAssetModelsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssetModels",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "assetModelSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssetPropertiesError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of properties associated with an asset.
 * If you update properties associated with the model before you finish listing all the properties,
 * you need to start all over again.
 */
export const listAssetProperties: API.PaginatedOperationMethod<
  ListAssetPropertiesRequest,
  ListAssetPropertiesResponse,
  ListAssetPropertiesError,
  Credentials | HttpClient.HttpClient,
  AssetPropertySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(403, __c50, 3) as any as S.Schema<ListAssetPropertiesRequest>,
  output: __S(406, __c50, 6) as any as S.Schema<ListAssetPropertiesResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssetProperties",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "assetPropertySummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssetRelationshipsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of asset relationships for an asset. You can use this operation
 * to identify an asset's root asset and all associated assets between that asset and its
 * root.
 */
export const listAssetRelationships: API.PaginatedOperationMethod<
  ListAssetRelationshipsRequest,
  ListAssetRelationshipsResponse,
  ListAssetRelationshipsError,
  Credentials | HttpClient.HttpClient,
  AssetRelationshipSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(407, __c50, 7) as any as S.Schema<ListAssetRelationshipsRequest>,
  output: __S(411, __c51, 3) as any as S.Schema<ListAssetRelationshipsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssetRelationships",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "assetRelationshipSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssetsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of asset summaries.
 *
 * You can use this operation to do the following:
 *
 * - List assets based on a specific asset model.
 *
 * - List top-level assets.
 *
 * You can't use this operation to list all assets. To retrieve summaries for all of your
 * assets, use ListAssetModels to get all of your asset model IDs. Then, use ListAssets to get all
 * assets for each asset model.
 */
export const listAssets: API.PaginatedOperationMethod<
  ListAssetsRequest,
  ListAssetsResponse,
  ListAssetsError,
  Credentials | HttpClient.HttpClient,
  AssetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(412, __c51, 4) as any as S.Schema<ListAssetsRequest>,
  output: __S(415, __c51, 7) as any as S.Schema<ListAssetsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssets",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "assetSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssociatedAssetsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of associated assets.
 *
 * You can use this operation to do the following:
 *
 * - `CHILD` - List all child assets associated to the asset.
 *
 * - `PARENT` - List the asset's parent asset.
 */
export const listAssociatedAssets: API.PaginatedOperationMethod<
  ListAssociatedAssetsRequest,
  ListAssociatedAssetsResponse,
  ListAssociatedAssetsError,
  Credentials | HttpClient.HttpClient,
  AssociatedAssetsSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(416, __c52, 0) as any as S.Schema<ListAssociatedAssetsRequest>,
  output: __S(417, __c52, 1) as any as S.Schema<ListAssociatedAssetsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssociatedAssets",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "assetSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBulkImportJobsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of bulk import job requests. For more information, see List bulk
 * import jobs (CLI) in the *IoT SiteWise User Guide*.
 */
export const listBulkImportJobs: API.PaginatedOperationMethod<
  ListBulkImportJobsRequest,
  ListBulkImportJobsResponse,
  ListBulkImportJobsError,
  Credentials | HttpClient.HttpClient,
  JobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(418, __c52, 2) as any as S.Schema<ListBulkImportJobsRequest>,
  output: __S(421, __c52, 5) as any as S.Schema<ListBulkImportJobsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBulkImportJobs",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCompositionRelationshipsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of composition relationships for an asset model of type
 * `COMPONENT_MODEL`.
 */
export const listCompositionRelationships: API.PaginatedOperationMethod<
  ListCompositionRelationshipsRequest,
  ListCompositionRelationshipsResponse,
  ListCompositionRelationshipsError,
  Credentials | HttpClient.HttpClient,
  CompositionRelationshipSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(422, __c52, 6) as any as S.Schema<ListCompositionRelationshipsRequest>,
  output: __S(425, __c53, 1) as any as S.Schema<ListCompositionRelationshipsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCompositionRelationships",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "compositionRelationshipSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListComputationModelDataBindingUsagesError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists all data binding usages for computation models. This allows to identify where
 * specific data bindings are being utilized across the computation models. This track
 * dependencies between data sources and computation models.
 */
export const listComputationModelDataBindingUsages: API.PaginatedOperationMethod<
  ListComputationModelDataBindingUsagesRequest,
  ListComputationModelDataBindingUsagesResponse,
  ListComputationModelDataBindingUsagesError,
  Credentials | HttpClient.HttpClient,
  ComputationModelDataBindingUsageSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(429, __c53, 5) as any as S.Schema<ListComputationModelDataBindingUsagesRequest>,
  output: __S(434, __c54, 2) as any as S.Schema<ListComputationModelDataBindingUsagesResponse>,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListComputationModelDataBindingUsages",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dataBindingUsageSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListComputationModelResolveToResourcesError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists all distinct resources that are resolved from the executed actions of the
 * computation model.
 */
export const listComputationModelResolveToResources: API.PaginatedOperationMethod<
  ListComputationModelResolveToResourcesRequest,
  ListComputationModelResolveToResourcesResponse,
  ListComputationModelResolveToResourcesError,
  Credentials | HttpClient.HttpClient,
  ComputationModelResolveToResourceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(435, __c54, 3) as any as S.Schema<ListComputationModelResolveToResourcesRequest>,
  output: __S(438, __c54, 6) as any as S.Schema<ListComputationModelResolveToResourcesResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListComputationModelResolveToResources",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "computationModelResolveToResourceSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListComputationModelsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of summaries of all computation models.
 */
export const listComputationModels: API.PaginatedOperationMethod<
  ListComputationModelsRequest,
  ListComputationModelsResponse,
  ListComputationModelsError,
  Credentials | HttpClient.HttpClient,
  ComputationModelSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(439, __c54, 7) as any as S.Schema<ListComputationModelsRequest>,
  output: __S(442, __c55, 2) as any as S.Schema<ListComputationModelsResponse>,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListComputationModels",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "computationModelSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDashboardsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.
 */
export const listDashboards: API.PaginatedOperationMethod<
  ListDashboardsRequest,
  ListDashboardsResponse,
  ListDashboardsError,
  Credentials | HttpClient.HttpClient,
  DashboardSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(443, __c55, 3) as any as S.Schema<ListDashboardsRequest>,
  output: __S(446, __c55, 6) as any as S.Schema<ListDashboardsResponse>,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDashboards",
  endpointHostPrefix: "monitor.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dashboardSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDatasetDataSegmentRelationshipsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of data segment relationships for a session dataset. Use this
 * operation to find the curated datasets that reference data segments of the specified session
 * dataset. Use the `nextToken` parameter to retrieve additional results.
 */
export const listDatasetDataSegmentRelationships: API.PaginatedOperationMethod<
  ListDatasetDataSegmentRelationshipsRequest,
  ListDatasetDataSegmentRelationshipsResponse,
  ListDatasetDataSegmentRelationshipsError,
  Credentials | HttpClient.HttpClient,
  DataSegmentRelationshipSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(447, __c55, 7) as any as S.Schema<ListDatasetDataSegmentRelationshipsRequest>,
  output: __S(450, __c56, 2) as any as S.Schema<ListDatasetDataSegmentRelationshipsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDatasetDataSegmentRelationships",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dataSegmentRelationshipSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDatasetDataSegmentsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of data segments associated with a dataset. Use the `nextToken` parameter to retrieve additional results.
 */
export const listDatasetDataSegments: API.PaginatedOperationMethod<
  ListDatasetDataSegmentsRequest,
  ListDatasetDataSegmentsResponse,
  ListDatasetDataSegmentsError,
  Credentials | HttpClient.HttpClient,
  DataSegmentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(451, __c56, 3) as any as S.Schema<ListDatasetDataSegmentsRequest>,
  output: __S(454, __c56, 6) as any as S.Schema<ListDatasetDataSegmentsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDatasetDataSegments",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dataSegments",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDatasetExportJobsError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of dataset export jobs for a workspace.
 */
export const listDatasetExportJobs: API.PaginatedOperationMethod<
  ListDatasetExportJobsRequest,
  ListDatasetExportJobsResponse,
  ListDatasetExportJobsError,
  Credentials | HttpClient.HttpClient,
  ExportJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(455, __c56, 7) as any as S.Schema<ListDatasetExportJobsRequest>,
  output: __S(458, __c57, 2) as any as S.Schema<ListDatasetExportJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDatasetExportJobs",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDatasetsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of datasets for a specific target resource.
 */
export const listDatasets: API.PaginatedOperationMethod<
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListDatasetsError,
  Credentials | HttpClient.HttpClient,
  DatasetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(459, __c57, 3) as any as S.Schema<ListDatasetsRequest>,
  output: __S(462, __c57, 6) as any as S.Schema<ListDatasetsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDatasets",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "datasetSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEnrichmentJobsError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists enrichment jobs within a workspace with optional filtering and pagination. Results are ordered
 * by createdAt timestamp descending (newest first).
 *
 * Filtering
 *
 * Combine filters to narrow results:
 *
 * - datasetId: Filter by dataset
 *
 * - propertyAlias OR timeSeriesId: Filter by time series (specify one, not both)
 *
 * - status: Filter by job status (e.g., RUNNING to find active jobs)
 *
 * - jobType: Filter by enrichment type (currently only EVENT_DETECTION)
 *
 * - startDate and endDate: Filter by job creation time range
 *
 * Important Constraints
 *
 * - You must specify either propertyAlias OR timeSeriesId, but not both
 *
 * - Attempting to specify both results in an InvalidRequestException
 *
 * - Date filters use ISO 8601 format
 *
 * - startDate is exclusive, endDate is inclusive
 *
 * Pagination
 *
 * The operation returns up to maxResults jobs per page (default 50). If more results exist, the
 * response includes a nextToken. Submit this token in a subsequent request to retrieve the next page.
 *
 * Common Use Cases
 *
 * - Find all running jobs: Filter by status=RUNNING
 *
 * - List recent jobs for a dataset: Filter by datasetId with optional date range
 *
 * - Monitor jobs for a specific sensor: Filter by propertyAlias or timeSeriesId
 *
 * - Track all event detection jobs: Filter by jobType=EVENT_DETECTION
 *
 * Performance
 *
 * Performance is optimal when filtering by supported fields (datasetId, propertyAlias, timeSeriesId, status, jobType).
 */
export const listEnrichmentJobs: API.PaginatedOperationMethod<
  ListEnrichmentJobsRequest,
  ListEnrichmentJobsResponse,
  ListEnrichmentJobsError,
  Credentials | HttpClient.HttpClient,
  EnrichmentJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(463, __c57, 7) as any as S.Schema<ListEnrichmentJobsRequest>,
  output: __S(466, __c58, 2) as any as S.Schema<ListEnrichmentJobsResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEnrichmentJobs",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListExecutionsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of summaries of all executions.
 */
export const listExecutions: API.PaginatedOperationMethod<
  ListExecutionsRequest,
  ListExecutionsResponse,
  ListExecutionsError,
  Credentials | HttpClient.HttpClient,
  ExecutionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(467, __c58, 3) as any as S.Schema<ListExecutionsRequest>,
  output: __S(470, __c58, 6) as any as S.Schema<ListExecutionsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExecutions",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "executionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListGatewaysError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of gateways.
 */
export const listGateways: API.PaginatedOperationMethod<
  ListGatewaysRequest,
  ListGatewaysResponse,
  ListGatewaysError,
  Credentials | HttpClient.HttpClient,
  GatewaySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(471, __c58, 7) as any as S.Schema<ListGatewaysRequest>,
  output: __S(474, __c59, 2) as any as S.Schema<ListGatewaysResponse>,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGateways",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "gatewaySummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListInterfaceRelationshipsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of asset models that have a specific interface asset model
 * applied to them.
 */
export const listInterfaceRelationships: API.PaginatedOperationMethod<
  ListInterfaceRelationshipsRequest,
  ListInterfaceRelationshipsResponse,
  ListInterfaceRelationshipsError,
  Credentials | HttpClient.HttpClient,
  InterfaceRelationshipSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(475, __c59, 3) as any as S.Schema<ListInterfaceRelationshipsRequest>,
  output: __S(478, __c59, 6) as any as S.Schema<ListInterfaceRelationshipsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInterfaceRelationships",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "interfaceRelationshipSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPipelineExecutionsError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists pipeline executions for a specific pipeline in a workspace.
 * Supports filtering by state and time range. State can be combined with either
 * startTime or endTime filters. Time range filters are grouped: use startTime filters
 * (startTimeAfter, startTimeBefore) or endTime filters (endTimeAfter, endTimeBefore),
 * but not both. Combining startTime and endTime filters returns an InvalidRequestException.
 * Note: endTime filters only return executions in terminal states, as in-progress
 * executions have no endTime.
 */
export const listPipelineExecutions: API.PaginatedOperationMethod<
  ListPipelineExecutionsRequest,
  ListPipelineExecutionsResponse,
  ListPipelineExecutionsError,
  Credentials | HttpClient.HttpClient,
  PipelineExecutionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(479, __c59, 7) as any as S.Schema<ListPipelineExecutionsRequest>,
  output: __S(482, __c60, 2) as any as S.Schema<ListPipelineExecutionsResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPipelineExecutions",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "pipelineExecutionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPipelinesError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists pipelines in a workspace. To get complete details about a pipeline, use DescribePipeline.
 */
export const listPipelines: API.PaginatedOperationMethod<
  ListPipelinesRequest,
  ListPipelinesResponse,
  ListPipelinesError,
  Credentials | HttpClient.HttpClient,
  PipelineSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(483, __c60, 3) as any as S.Schema<ListPipelinesRequest>,
  output: __S(486, __c60, 6) as any as S.Schema<ListPipelinesResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPipelines",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "pipelineSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPortalsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of IoT SiteWise Monitor portals.
 */
export const listPortals: API.PaginatedOperationMethod<
  ListPortalsRequest,
  ListPortalsResponse,
  ListPortalsError,
  Credentials | HttpClient.HttpClient,
  PortalSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(487, __c60, 7) as any as S.Schema<ListPortalsRequest>,
  output: __S(490, __c61, 2) as any as S.Schema<ListPortalsResponse>,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPortals",
  endpointHostPrefix: "monitor.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "portalSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListProjectAssetsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.
 */
export const listProjectAssets: API.PaginatedOperationMethod<
  ListProjectAssetsRequest,
  ListProjectAssetsResponse,
  ListProjectAssetsError,
  Credentials | HttpClient.HttpClient,
  ID
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(491, __c61, 3) as any as S.Schema<ListProjectAssetsRequest>,
  output: __S(492, __c61, 4) as any as S.Schema<ListProjectAssetsResponse>,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProjectAssets",
  endpointHostPrefix: "monitor.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "assetIds",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListProjectsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.
 */
export const listProjects: API.PaginatedOperationMethod<
  ListProjectsRequest,
  ListProjectsResponse,
  ListProjectsError,
  Credentials | HttpClient.HttpClient,
  ProjectSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(493, __c61, 5) as any as S.Schema<ListProjectsRequest>,
  output: __S(494, __c61, 6) as any as S.Schema<ListProjectsResponse>,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProjects",
  endpointHostPrefix: "monitor.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "projectSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListQueriesError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of queries for a workspace.
 */
export const listQueries: API.PaginatedOperationMethod<
  ListQueriesRequest,
  ListQueriesResponse,
  ListQueriesError,
  Credentials | HttpClient.HttpClient,
  QuerySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(495, __c61, 7) as any as S.Schema<ListQueriesRequest>,
  output: __S(498, __c62, 2) as any as S.Schema<ListQueriesResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListQueries",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "queries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSearchesError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the searches in a workspace, most recently started first. Results can be narrowed with
 * optional filters (status, search type, group, and started-at time range) and are paginated: when
 * `nextToken` is present, pass it on a subsequent call to retrieve the next page.
 */
export const listSearches: API.PaginatedOperationMethod<
  ListSearchesRequest,
  ListSearchesResponse,
  ListSearchesError,
  Credentials | HttpClient.HttpClient,
  SearchSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(500, __c62, 4) as any as S.Schema<ListSearchesRequest>,
  output: __S(502, __c62, 6) as any as S.Schema<ListSearchesResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSearches",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "searchSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves the list of tags for an IoT SiteWise resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(503, __c62, 7) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(504, __c63, 0) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  endpointHostPrefix: "api.",
}));

export type ListTasksError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists tasks in a workspace. To get complete details about a task, use DescribeTask.
 */
export const listTasks: API.PaginatedOperationMethod<
  ListTasksRequest,
  ListTasksResponse,
  ListTasksError,
  Credentials | HttpClient.HttpClient,
  TaskSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(505, __c63, 1) as any as S.Schema<ListTasksRequest>,
  output: __S(508, __c63, 4) as any as S.Schema<ListTasksResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTasks",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "taskSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTimeSeriesError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of time series (data streams).
 */
export const listTimeSeries: API.PaginatedOperationMethod<
  ListTimeSeriesRequest,
  ListTimeSeriesResponse,
  ListTimeSeriesError,
  Credentials | HttpClient.HttpClient,
  TimeSeriesSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(509, __c63, 5) as any as S.Schema<ListTimeSeriesRequest>,
  output: __S(512, __c64, 0) as any as S.Schema<ListTimeSeriesResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTimeSeries",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "TimeSeriesSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkspacesError =
  | AccessDeniedException
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a paginated list of workspaces. Use the `nextToken` parameter to retrieve additional results.
 */
export const listWorkspaces: API.PaginatedOperationMethod<
  ListWorkspacesRequest,
  ListWorkspacesResponse,
  ListWorkspacesError,
  Credentials | HttpClient.HttpClient,
  WorkspaceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(513, __c64, 1) as any as S.Schema<ListWorkspacesRequest>,
  output: __S(516, __c64, 4) as any as S.Schema<ListWorkspacesResponse>,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    InvalidRequestException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkspaces",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workspaceSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutAssetModelInterfaceRelationshipError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates or updates an interface relationship between an asset model and an interface asset
 * model. This operation applies an interface to an asset model.
 */
export const putAssetModelInterfaceRelationship: API.OperationMethod<
  PutAssetModelInterfaceRelationshipRequest,
  PutAssetModelInterfaceRelationshipResponse,
  PutAssetModelInterfaceRelationshipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(518, __c64, 6) as any as S.Schema<PutAssetModelInterfaceRelationshipRequest>,
  output: __S(197, __c24, 5) as any as S.Schema<PutAssetModelInterfaceRelationshipResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAssetModelInterfaceRelationship",
  endpointHostPrefix: "api.",
}));

export type PutDefaultEncryptionConfigurationError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Sets the default encryption configuration for the Amazon Web Services account. For more information, see
 * Key management in
 * the *IoT SiteWise User Guide*.
 */
export const putDefaultEncryptionConfiguration: API.OperationMethod<
  PutDefaultEncryptionConfigurationRequest,
  PutDefaultEncryptionConfigurationResponse,
  PutDefaultEncryptionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(519, __c64, 7) as any as S.Schema<PutDefaultEncryptionConfigurationRequest>,
  output: __S(283, __c35, 3) as any as S.Schema<PutDefaultEncryptionConfigurationResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDefaultEncryptionConfiguration",
  endpointHostPrefix: "api.",
}));

export type PutLoggingOptionsError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Sets logging options for IoT SiteWise.
 */
export const putLoggingOptions: API.OperationMethod<
  PutLoggingOptionsRequest,
  PutLoggingOptionsResponse,
  PutLoggingOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(520, __c65, 0) as any as S.Schema<PutLoggingOptionsRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<PutLoggingOptionsResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutLoggingOptions",
  endpointHostPrefix: "api.",
}));

export type PutStorageConfigurationError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Configures storage settings for IoT SiteWise.
 */
export const putStorageConfiguration: API.OperationMethod<
  PutStorageConfigurationRequest,
  PutStorageConfigurationResponse,
  PutStorageConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(521, __c65, 1) as any as S.Schema<PutStorageConfigurationRequest>,
  output: __S(522, __c65, 2) as any as S.Schema<PutStorageConfigurationResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutStorageConfiguration",
  endpointHostPrefix: "api.",
}));

export type StartPipelineExecutionError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Starts execution of a pipeline in the specified workspace. Each compute node runs
 * according to the DAG dependency order defined in the pipeline. Nodes without
 * dependencies start immediately, while dependent nodes wait for all upstream nodes
 * to complete successfully.
 *
 * You can provide runtime environment variable overrides that take the highest priority
 * in the environment variable hierarchy, without modifying the pipeline definition.
 */
export const startPipelineExecution: API.OperationMethod<
  StartPipelineExecutionRequest,
  StartPipelineExecutionResponse,
  StartPipelineExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(523, __c65, 3) as any as S.Schema<StartPipelineExecutionRequest>,
  output: __S(524, __c65, 4) as any as S.Schema<StartPipelineExecutionResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartPipelineExecution",
  endpointHostPrefix: "data.",
}));

export type StartQueryError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Starts an asynchronous SQL query against workspace telemetry, annotations, data segment, and dataset data.
 */
export const startQuery: API.OperationMethod<
  StartQueryRequest,
  StartQueryResponse,
  StartQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(525, __c65, 5) as any as S.Schema<StartQueryRequest>,
  output: __S(71, __c8, 7) as any as S.Schema<StartQueryResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartQuery",
  endpointHostPrefix: "data.",
}));

export type StartSearchError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Starts an asynchronous search over the data in a workspace. The search runs in the background;
 * the response returns immediately with a `searchId` and an initial status of `QUEUED`. Use
 * `DescribeSearch` to poll for completion and `GetSearchResults` to retrieve the results once the
 * search reaches `SUCCEEDED`. The request is idempotent on `clientToken`: repeating a call with the
 * same token returns the original search instead of starting a new one.
 */
export const startSearch: API.OperationMethod<
  StartSearchRequest,
  StartSearchResponse,
  StartSearchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(528, __c66, 0) as any as S.Schema<StartSearchRequest>,
  output: __S(529, __c66, 1) as any as S.Schema<StartSearchResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSearch",
  endpointHostPrefix: "data.",
}));

export type TagResourceError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | TooManyTagsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation
 * updates the tag's value.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(530, __c66, 2) as any as S.Schema<TagResourceRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<TagResourceResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    TooManyTagsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
  endpointHostPrefix: "api.",
}));

export type UntagResourceError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Removes a tag from an IoT SiteWise resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(531, __c66, 3) as any as S.Schema<UntagResourceRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UntagResourceResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
  endpointHostPrefix: "api.",
}));

export type UpdateAccessPolicyError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT SiteWise Monitor feature will no longer be open to new
 * customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can
 * continue to use the service as normal. For more information, see
 * IoT SiteWise Monitor availability change.
 *
 * Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor
 * portal or project resource.
 */
export const updateAccessPolicy: API.OperationMethod<
  UpdateAccessPolicyRequest,
  UpdateAccessPolicyResponse,
  UpdateAccessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(532, __c66, 4) as any as S.Schema<UpdateAccessPolicyRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateAccessPolicyResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAccessPolicy",
  endpointHostPrefix: "monitor.",
}));

export type UpdateAssetError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates an asset's name. For more information, see Updating assets and models in the
 * *IoT SiteWise User Guide*.
 */
export const updateAsset: API.OperationMethod<
  UpdateAssetRequest,
  UpdateAssetResponse,
  UpdateAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(533, __c66, 5) as any as S.Schema<UpdateAssetRequest>,
  output: __S(191, __c23, 7) as any as S.Schema<UpdateAssetResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAsset",
  endpointHostPrefix: "api.",
}));

export type UpdateAssetModelError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | PreconditionFailedException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates an asset model and all of the assets that were created from the model. Each asset
 * created from the model inherits the updated asset model's property and hierarchy definitions.
 * For more information, see Updating assets and models in the
 * *IoT SiteWise User Guide*.
 *
 * If you remove a property from an asset model, IoT SiteWise deletes all previous data for that
 * property. You can't change the type or data type of an existing property.
 *
 * To replace an existing asset model property with a new one with the same
 * `name`, do the following:
 *
 * - Submit an `UpdateAssetModel` request with the entire existing property
 * removed.
 *
 * - Submit a second `UpdateAssetModel` request that includes the new
 * property. The new asset property will have the same `name` as the previous
 * one and IoT SiteWise will generate a new unique `id`.
 */
export const updateAssetModel: API.OperationMethod<
  UpdateAssetModelRequest,
  UpdateAssetModelResponse,
  UpdateAssetModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(534, __c66, 6) as any as S.Schema<UpdateAssetModelRequest>,
  output: __S(193, __c24, 1) as any as S.Schema<UpdateAssetModelResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    PreconditionFailedException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAssetModel",
  endpointHostPrefix: "api.",
}));

export type UpdateAssetModelCompositeModelError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | PreconditionFailedException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a composite model and all of the assets that were created from the model. Each
 * asset created from the model inherits the updated asset model's property and hierarchy
 * definitions. For more information, see Updating assets and models in the
 * *IoT SiteWise User Guide*.
 *
 * If you remove a property from a composite asset model, IoT SiteWise deletes all previous data
 * for that property. You can't change the type or data type of an existing property.
 *
 * To replace an existing composite asset model property with a new one with the same
 * `name`, do the following:
 *
 * - Submit an `UpdateAssetModelCompositeModel` request with the entire
 * existing property removed.
 *
 * - Submit a second `UpdateAssetModelCompositeModel` request that includes
 * the new property. The new asset property will have the same `name` as the
 * previous one and IoT SiteWise will generate a new unique `id`.
 */
export const updateAssetModelCompositeModel: API.OperationMethod<
  UpdateAssetModelCompositeModelRequest,
  UpdateAssetModelCompositeModelResponse,
  UpdateAssetModelCompositeModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(535, __c66, 7) as any as S.Schema<UpdateAssetModelCompositeModelRequest>,
  output: __S(536, __c67, 0) as any as S.Schema<UpdateAssetModelCompositeModelResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    PreconditionFailedException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAssetModelCompositeModel",
  endpointHostPrefix: "api.",
}));

export type UpdateAssetPropertyError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates an asset property's alias and notification state.
 *
 * This operation overwrites the property's existing alias and notification state. To keep
 * your existing property's alias or notification state, you must include the existing values
 * in the UpdateAssetProperty request. For more information, see DescribeAssetProperty.
 */
export const updateAssetProperty: API.OperationMethod<
  UpdateAssetPropertyRequest,
  UpdateAssetPropertyResponse,
  UpdateAssetPropertyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(537, __c67, 1) as any as S.Schema<UpdateAssetPropertyRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateAssetPropertyResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAssetProperty",
  endpointHostPrefix: "api.",
}));

export type UpdateComputationModelError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the computation model.
 */
export const updateComputationModel: API.OperationMethod<
  UpdateComputationModelRequest,
  UpdateComputationModelResponse,
  UpdateComputationModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(538, __c67, 2) as any as S.Schema<UpdateComputationModelRequest>,
  output: __S(199, __c24, 7) as any as S.Schema<UpdateComputationModelResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateComputationModel",
  endpointHostPrefix: "api.",
}));

export type UpdateDashboardError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT SiteWise Monitor feature will no longer be open to new
 * customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can
 * continue to use the service as normal. For more information, see
 * IoT SiteWise Monitor availability change.
 *
 * Updates an IoT SiteWise Monitor dashboard.
 */
export const updateDashboard: API.OperationMethod<
  UpdateDashboardRequest,
  UpdateDashboardResponse,
  UpdateDashboardError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(539, __c67, 3) as any as S.Schema<UpdateDashboardRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateDashboardResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDashboard",
  endpointHostPrefix: "monitor.",
}));

export type UpdateDatasetError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a dataset.
 */
export const updateDataset: API.OperationMethod<
  UpdateDatasetRequest,
  UpdateDatasetResponse,
  UpdateDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(540, __c67, 4) as any as S.Schema<UpdateDatasetRequest>,
  output: __S(541, __c67, 5) as any as S.Schema<UpdateDatasetResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDataset",
  endpointHostPrefix: "api.",
}));

export type UpdateGatewayError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a gateway's name.
 */
export const updateGateway: API.OperationMethod<
  UpdateGatewayRequest,
  UpdateGatewayResponse,
  UpdateGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(542, __c67, 6) as any as S.Schema<UpdateGatewayRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateGatewayResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGateway",
  endpointHostPrefix: "api.",
}));

export type UpdateGatewayCapabilityConfigurationError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway.
 *
 * Important workflow notes:
 *
 * Each gateway capability defines data sources for a gateway. This is the namespace of the gateway capability.
 *
 * . The namespace follows the format `service:capability:version`, where:
 *
 * - `service` - The service providing the capability, or `iotsitewise`.
 *
 * - `capability` - The specific capability type. Options include: `opcuacollector` for the OPC UA data source collector, or `publisher` for data publisher capability.
 *
 * - `version` - The version number of the capability. Option include `2` for Classic streams, V2 gateways, and `3` for MQTT-enabled, V3 gateways.
 *
 * After updating a capability configuration, the sync status becomes `OUT_OF_SYNC` until the gateway processes the configuration.Use `DescribeGatewayCapabilityConfiguration` to check the sync status and verify the configuration was applied.
 *
 * A gateway can have multiple capability configurations with different namespaces.
 */
export const updateGatewayCapabilityConfiguration: API.OperationMethod<
  UpdateGatewayCapabilityConfigurationRequest,
  UpdateGatewayCapabilityConfigurationResponse,
  UpdateGatewayCapabilityConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(543, __c67, 7) as any as S.Schema<UpdateGatewayCapabilityConfigurationRequest>,
  output: __S(544, __c68, 0) as any as S.Schema<UpdateGatewayCapabilityConfigurationResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGatewayCapabilityConfiguration",
  endpointHostPrefix: "api.",
}));

export type UpdatePipelineError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates an existing pipeline in the specified workspace. Only the fields
 * provided in the request are updated; fields not included in the request are preserved
 * unchanged. You can update the pipeline description, environment variables, and the
 * list of compute nodes independently.
 */
export const updatePipeline: API.OperationMethod<
  UpdatePipelineRequest,
  UpdatePipelineResponse,
  UpdatePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(545, __c68, 1) as any as S.Schema<UpdatePipelineRequest>,
  output: __S(546, __c68, 2) as any as S.Schema<UpdatePipelineResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePipeline",
  endpointHostPrefix: "api.",
}));

export type UpdatePortalError =
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT SiteWise Monitor feature will no longer be open to new
 * customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can
 * continue to use the service as normal. For more information, see
 * IoT SiteWise Monitor availability change.
 *
 * Updates an IoT SiteWise Monitor portal.
 */
export const updatePortal: API.OperationMethod<
  UpdatePortalRequest,
  UpdatePortalResponse,
  UpdatePortalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(548, __c68, 4) as any as S.Schema<UpdatePortalRequest>,
  output: __S(207, __c25, 7) as any as S.Schema<UpdatePortalResponse>,
  errors: [
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePortal",
  endpointHostPrefix: "monitor.",
}));

export type UpdateProjectError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT SiteWise Monitor feature will no longer be open to new
 * customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can
 * continue to use the service as normal. For more information, see
 * IoT SiteWise Monitor availability change.
 *
 * Updates an IoT SiteWise Monitor project.
 */
export const updateProject: API.OperationMethod<
  UpdateProjectRequest,
  UpdateProjectResponse,
  UpdateProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(549, __c68, 5) as any as S.Schema<UpdateProjectRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateProjectResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProject",
  endpointHostPrefix: "monitor.",
}));

export type UpdateTaskError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates an existing task in the specified workspace. Only the fields
 * provided in the request are updated; fields not included in the request are preserved
 * unchanged.
 */
export const updateTask: API.OperationMethod<
  UpdateTaskRequest,
  UpdateTaskResponse,
  UpdateTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(550, __c68, 6) as any as S.Schema<UpdateTaskRequest>,
  output: __S(546, __c68, 2) as any as S.Schema<UpdateTaskResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTask",
  endpointHostPrefix: "api.",
}));

export type UpdateWorkspaceError =
  | AccessDeniedException
  | ConflictingOperationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a workspace. You can update only workspaces in the `ACTIVE` or
 * `FAILED` state. Fields that you omit from the request are left unchanged. To
 * recover a workspace in the `FAILED` state, call this operation and supply its
 * encryption configuration again.
 */
export const updateWorkspace: API.OperationMethod<
  UpdateWorkspaceRequest,
  UpdateWorkspaceResponse,
  UpdateWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(551, __c68, 7) as any as S.Schema<UpdateWorkspaceRequest>,
  output: __S(212, __c26, 4) as any as S.Schema<UpdateWorkspaceResponse>,
  errors: [
    AccessDeniedException,
    ConflictingOperationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkspace",
  endpointHostPrefix: "api.",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          hierarchyId: S.String,
          childAssetId: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/assets/{assetId}/associate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssociateAssetsRequest" });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateAssetsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          alias: S.String.pipe(T.HttpQuery("alias")),
          assetId: S.String.pipe(T.HttpQuery("assetId")),
          propertyId: S.String.pipe(T.HttpQuery("propertyId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/timeseries/associate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateTimeSeriesToAssetPropertyRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateTimeSeriesToAssetPropertyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ timeInSeconds: S.Number, offsetInNanos: S.optional(S.Number) }),
      ).annotate({ identifier: "TimeInNanos" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceDatasetId: S.String,
          timeSeriesId: S.String,
          startTimestamp: __S(4, __c0, 4),
          endTimestamp: __S(4, __c0, 4),
        }),
      ).annotate({
        identifier: "AssociateDataSegmentEntry",
      });
    case 6:
      return S.Array(__S(5, __c0, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          workspaceName: S.String,
          associateDataSegmentEntries: __S(6, __c0, 6),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/datasets/{datasetId}/data-segments/associate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchAssociateDataSegmentsToDatasetRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sourceDatasetId: S.String,
          timeSeriesId: S.String,
          startTimestamp: __S(4, __c0, 4),
          endTimestamp: __S(4, __c0, 4),
          errorCode: S.String,
          errorMessage: S.String,
        }),
      ).annotate({
        identifier: "FailedDataSegmentAssociation",
      });
    case 1:
      return S.Array(__S(8, __c1, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String,
          datasetVersion: S.String,
          failedAssociations: __S(9, __c1, 1),
        }),
      ).annotate({
        identifier: "BatchAssociateDataSegmentsToDatasetResponse",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          projectId: S.String.pipe(T.HttpLabel("projectId")),
          assetIds: __S(11, __c1, 3),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/projects/{projectId}/assets/associate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchAssociateProjectAssetsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ assetId: S.String, code: S.String, message: S.String }),
      ).annotate({ identifier: "AssetErrorDetails" });
    case 6:
      return S.Array(__S(13, __c1, 5));
    case 7:
      return S.suspend(() => S.Struct({ errors: S.optional(__S(14, __c1, 6)) })).annotate({
        identifier: "BatchAssociateProjectAssetsResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          timeSeriesId: S.String,
          startTimestamp: __S(4, __c0, 4),
          endTimestamp: __S(4, __c0, 4),
        }),
      ).annotate({ identifier: "DeleteDataSegmentEntry" });
    case 1:
      return S.Array(__S(16, __c2, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          workspaceName: S.String,
          deleteDataSegmentEntries: __S(17, __c2, 1),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/datasets/{datasetId}/data-segments/batch-delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeleteDatasetDataSegmentsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          timeSeriesId: S.String,
          startTimestamp: __S(4, __c0, 4),
          endTimestamp: __S(4, __c0, 4),
          errorCode: S.String,
          errorMessage: S.String,
        }),
      ).annotate({
        identifier: "FailedDataSegmentDeletion",
      });
    case 4:
      return S.Array(__S(19, __c2, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String,
          datasetVersion: S.String,
          errors: __S(20, __c2, 4),
        }),
      ).annotate({
        identifier: "BatchDeleteDatasetDataSegmentsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          workspaceName: S.String,
          disassociateDataSegmentEntries: __S(6, __c0, 6),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/datasets/{datasetId}/data-segments/disassociate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDisassociateDataSegmentsFromDatasetRequest",
      });
    case 7:
      return S.Array(__S(8, __c1, 0));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String,
          datasetVersion: S.String,
          failedDisassociations: __S(23, __c2, 7),
        }),
      ).annotate({
        identifier: "BatchDisassociateDataSegmentsFromDatasetResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          projectId: S.String.pipe(T.HttpLabel("projectId")),
          assetIds: __S(11, __c1, 3),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/projects/{projectId}/assets/disassociate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDisassociateProjectAssetsRequest",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          entryId: S.String,
          assetId: S.optional(S.String),
          propertyId: S.optional(S.String),
          propertyAlias: S.optional(S.String),
          aggregateTypes: __S(26, __c3, 2),
          resolution: S.String,
          startDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          qualities: S.optional(__S(26, __c3, 2)),
          timeOrdering: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchGetAssetPropertyAggregatesEntry",
      });
    case 4:
      return S.Array(__S(27, __c3, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          entries: __S(28, __c3, 4),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/properties/batch/aggregates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetAssetPropertyAggregatesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          errorCode: S.String,
          errorMessage: S.String,
          entryId: S.String,
        }),
      ).annotate({
        identifier: "BatchGetAssetPropertyAggregatesErrorEntry",
      });
    case 7:
      return S.Array(__S(30, __c3, 6));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          average: S.optional(S.Number),
          count: S.optional(S.Number),
          maximum: S.optional(S.Number),
          minimum: S.optional(S.Number),
          sum: S.optional(S.Number),
          standardDeviation: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Aggregates" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          quality: S.optional(S.String),
          value: __S(32, __c4, 0),
        }),
      ).annotate({ identifier: "AggregatedValue" });
    case 2:
      return S.Array(__S(33, __c4, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ entryId: S.String, aggregatedValues: __S(34, __c4, 2) }),
      ).annotate({
        identifier: "BatchGetAssetPropertyAggregatesSuccessEntry",
      });
    case 4:
      return S.Array(__S(35, __c4, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          errorCode: S.String,
          errorTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "BatchGetAssetPropertyAggregatesErrorInfo",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          entryId: S.String,
          completionStatus: S.String,
          errorInfo: S.optional(__S(37, __c4, 5)),
        }),
      ).annotate({
        identifier: "BatchGetAssetPropertyAggregatesSkippedEntry",
      });
    case 7:
      return S.Array(__S(38, __c4, 6));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          errorEntries: __S(31, __c3, 7),
          successEntries: __S(36, __c4, 4),
          skippedEntries: __S(39, __c4, 7),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchGetAssetPropertyAggregatesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          entryId: S.String,
          assetId: S.optional(S.String),
          propertyId: S.optional(S.String),
          propertyAlias: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchGetAssetPropertyValueEntry",
      });
    case 2:
      return S.Array(__S(41, __c5, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          entries: __S(42, __c5, 2),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/properties/batch/latest" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetAssetPropertyValueRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ valueType: S.String })).annotate({
        identifier: "PropertyValueNullValue",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          stringValue: S.optional(S.String),
          integerValue: S.optional(S.Number),
          doubleValue: S.optional(S.Number),
          booleanValue: S.optional(S.Boolean),
          nullValue: S.optional(__S(44, __c5, 4)),
        }),
      ).annotate({ identifier: "Variant" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          value: __S(45, __c5, 5),
          timestamp: __S(4, __c0, 4),
          quality: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssetPropertyValue" });
    case 7:
      return S.suspend(() =>
        S.Struct({ entryId: S.String, assetPropertyValue: S.optional(__S(46, __c5, 6)) }),
      ).annotate({
        identifier: "BatchGetAssetPropertyValueSuccessEntry",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47, __c5, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          errorEntries: __S(31, __c3, 7),
          successEntries: __S(48, __c6, 0),
          skippedEntries: __S(39, __c4, 7),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchGetAssetPropertyValueResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          entryId: S.String,
          assetId: S.optional(S.String),
          propertyId: S.optional(S.String),
          propertyAlias: S.optional(S.String),
          startDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          qualities: S.optional(__S(26, __c3, 2)),
          timeOrdering: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchGetAssetPropertyValueHistoryEntry",
      });
    case 3:
      return S.Array(__S(50, __c6, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          entries: __S(51, __c6, 3),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/properties/batch/history" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetAssetPropertyValueHistoryRequest",
      });
    case 5:
      return S.Array(__S(46, __c5, 6));
    case 6:
      return S.suspend(() =>
        S.Struct({ entryId: S.String, assetPropertyValueHistory: __S(53, __c6, 5) }),
      ).annotate({
        identifier: "BatchGetAssetPropertyValueHistorySuccessEntry",
      });
    case 7:
      return S.Array(__S(54, __c6, 6));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          errorEntries: __S(31, __c3, 7),
          successEntries: __S(55, __c6, 7),
          skippedEntries: __S(39, __c4, 7),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchGetAssetPropertyValueHistoryResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          entryId: S.String,
          assetId: S.optional(S.String),
          propertyId: S.optional(S.String),
          propertyAlias: S.optional(S.String),
          propertyValues: __S(53, __c6, 5),
        }),
      ).annotate({
        identifier: "PutAssetPropertyValueEntry",
      });
    case 2:
      return S.Array(__S(57, __c7, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          enablePartialEntryProcessing: S.optional(S.Boolean),
          entries: __S(58, __c7, 2),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/properties" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchPutAssetPropertyValueRequest",
      });
    case 4:
      return S.Array(__S(4, __c0, 4));
    case 5:
      return S.suspend(() =>
        S.Struct({
          errorCode: S.String,
          errorMessage: S.String,
          timestamps: __S(60, __c7, 4),
        }),
      ).annotate({
        identifier: "BatchPutAssetPropertyError",
      });
    case 6:
      return S.Array(__S(61, __c7, 5));
    case 7:
      return S.suspend(() => S.Struct({ entryId: S.String, errors: __S(62, __c7, 6) })).annotate({
        identifier: "BatchPutAssetPropertyErrorEntry",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(63, __c7, 7));
    case 1:
      return S.suspend(() => S.Struct({ errorEntries: __S(64, __c8, 0) })).annotate({
        identifier: "BatchPutAssetPropertyValueResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/workspaces/{workspaceName}/enrichment-jobs/{jobId}/cancel",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelEnrichmentJobRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ jobId: S.String, status: S.String })).annotate({
        identifier: "CancelEnrichmentJobResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          pipelineName: S.String.pipe(T.HttpLabel("pipelineName")),
          pipelineExecutionId: S.String.pipe(T.HttpLabel("pipelineExecutionId")),
          reason: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/workspaces/{workspaceName}/pipelines/{pipelineName}/executions/{pipelineExecutionId}/cancel",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelPipelineExecutionRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ state: S.String })).annotate({
        identifier: "CancelPipelineExecutionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          queryId: S.String.pipe(T.HttpLabel("queryId")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceName}/queries/{queryId}/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelQueryRequest" });
    case 7:
      return S.suspend(() => S.Struct({ queryId: S.String, status: S.String })).annotate({
        identifier: "CancelQueryResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ id: S.String })).annotate({
        identifier: "UserIdentity",
      });
    case 1:
      return S.suspend(() => S.Struct({ arn: S.String })).annotate({
        identifier: "IAMUserIdentity",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          user: S.optional(__S(72, __c9, 0)),
          group: S.optional(__S(72, __c9, 0)),
          iamUser: S.optional(__S(73, __c9, 1)),
          iamRole: S.optional(__S(73, __c9, 1)),
        }),
      ).annotate({ identifier: "Identity" });
    case 3:
      return S.suspend(() =>
        S.Struct({ portal: S.optional(__S(72, __c9, 0)), project: S.optional(__S(72, __c9, 0)) }),
      ).annotate({ identifier: "Resource" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          accessPolicyIdentity: __S(74, __c9, 2),
          accessPolicyResource: __S(75, __c9, 3),
          accessPolicyPermission: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(76, __c9, 4)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/access-policies" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateAccessPolicyRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ accessPolicyId: S.String, accessPolicyArn: S.String }),
      ).annotate({
        identifier: "CreateAccessPolicyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          idcInstanceArn: S.String,
          workspaceName: S.String,
          name: S.String,
          description: S.optional(S.String),
          tags: S.optional(__S(76, __c9, 4)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/applications" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateApplicationRequest" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          id: S.String,
          dnsSubdomain: S.String,
          name: S.String,
          status: S.String,
        }),
      ).annotate({
        identifier: "CreateApplicationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          assetName: S.String,
          assetModelId: S.String,
          assetId: S.optional(S.String),
          assetExternalId: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(76, __c9, 4)),
          assetDescription: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/assets" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateAssetRequest" });
    case 2:
      return S.suspend(() => S.Struct({ code: S.String, message: S.String })).annotate({
        identifier: "DetailedError",
      });
    case 3:
      return S.Array(__S(82, __c10, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ code: S.String, message: S.String, details: S.optional(__S(83, __c10, 3)) }),
      ).annotate({ identifier: "ErrorDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({ state: S.String, error: S.optional(__S(84, __c10, 4)) }),
      ).annotate({ identifier: "AssetStatus" });
    case 6:
      return S.suspend(() =>
        S.Struct({ assetId: S.String, assetArn: S.String, assetStatus: __S(85, __c10, 5) }),
      ).annotate({ identifier: "CreateAssetResponse" });
    case 7:
      return S.suspend(() => S.Struct({ defaultValue: S.optional(S.String) })).annotate({
        identifier: "Attribute",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ state: S.String })).annotate({
        identifier: "ForwardingConfig",
      });
    case 1:
      return S.suspend(() => S.Struct({ forwardingConfig: __S(88, __c11, 0) })).annotate({
        identifier: "MeasurementProcessingConfig",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ processingConfig: S.optional(__S(89, __c11, 1)) }),
      ).annotate({ identifier: "Measurement" });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), name: S.optional(S.String) }),
      ).annotate({
        identifier: "AssetModelPropertyPathSegment",
      });
    case 4:
      return S.Array(__S(91, __c11, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          propertyId: S.optional(S.String),
          hierarchyId: S.optional(S.String),
          propertyPath: S.optional(__S(92, __c11, 4)),
        }),
      ).annotate({ identifier: "VariableValue" });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, value: __S(93, __c11, 5) })).annotate({
        identifier: "ExpressionVariable",
      });
    case 7:
      return S.Array(__S(94, __c11, 6));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          computeLocation: S.String,
          forwardingConfig: S.optional(__S(88, __c11, 0)),
        }),
      ).annotate({
        identifier: "TransformProcessingConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          expression: S.String,
          variables: __S(95, __c11, 7),
          processingConfig: S.optional(__S(96, __c12, 0)),
        }),
      ).annotate({ identifier: "Transform" });
    case 2:
      return S.suspend(() =>
        S.Struct({ interval: S.String, offset: S.optional(S.String) }),
      ).annotate({ identifier: "TumblingWindow" });
    case 3:
      return S.suspend(() => S.Struct({ tumbling: S.optional(__S(98, __c12, 2)) })).annotate({
        identifier: "MetricWindow",
      });
    case 4:
      return S.suspend(() => S.Struct({ computeLocation: S.String })).annotate({
        identifier: "MetricProcessingConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          expression: S.optional(S.String),
          variables: S.optional(__S(95, __c11, 7)),
          window: __S(99, __c12, 3),
          processingConfig: S.optional(__S(100, __c12, 4)),
        }),
      ).annotate({ identifier: "Metric" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          attribute: S.optional(__S(87, __c10, 7)),
          measurement: S.optional(__S(90, __c11, 2)),
          transform: S.optional(__S(97, __c12, 1)),
          metric: S.optional(__S(101, __c12, 5)),
        }),
      ).annotate({ identifier: "PropertyType" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          externalId: S.optional(S.String),
          name: S.String,
          dataType: S.String,
          dataTypeSpec: S.optional(S.String),
          unit: S.optional(S.String),
          type: __S(102, __c12, 6),
        }),
      ).annotate({
        identifier: "AssetModelPropertyDefinition",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103, __c12, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          externalId: S.optional(S.String),
          name: S.String,
          childAssetModelId: S.String,
        }),
      ).annotate({
        identifier: "AssetModelHierarchyDefinition",
      });
    case 2:
      return S.Array(__S(105, __c13, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          externalId: S.optional(S.String),
          name: S.String,
          description: S.optional(S.String),
          type: S.String,
          properties: S.optional(__S(104, __c13, 0)),
        }),
      ).annotate({
        identifier: "AssetModelCompositeModelDefinition",
      });
    case 4:
      return S.Array(__S(107, __c13, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          assetModelName: S.String,
          assetModelType: S.optional(S.String),
          assetModelId: S.optional(S.String),
          assetModelExternalId: S.optional(S.String),
          assetModelDescription: S.optional(S.String),
          assetModelProperties: S.optional(__S(104, __c13, 0)),
          assetModelHierarchies: S.optional(__S(106, __c13, 2)),
          assetModelCompositeModels: S.optional(__S(108, __c13, 4)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(76, __c9, 4)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/asset-models" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateAssetModelRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String,
          assetModelArn: S.String,
          assetModelStatus: __S(85, __c10, 5),
        }),
      ).annotate({ identifier: "CreateAssetModelResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String.pipe(T.HttpLabel("assetModelId")),
          assetModelCompositeModelExternalId: S.optional(S.String),
          parentAssetModelCompositeModelId: S.optional(S.String),
          assetModelCompositeModelId: S.optional(S.String),
          assetModelCompositeModelDescription: S.optional(S.String),
          assetModelCompositeModelName: S.String,
          assetModelCompositeModelType: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          composedAssetModelId: S.optional(S.String),
          assetModelCompositeModelProperties: S.optional(__S(104, __c13, 0)),
          ifMatch: S.optional(S.String).pipe(T.HttpHeader("If-Match")),
          ifNoneMatch: S.optional(S.String).pipe(T.HttpHeader("If-None-Match")),
          matchForVersionType: S.optional(S.String).pipe(T.HttpHeader("Match-For-Version-Type")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/asset-models/{assetModelId}/composite-models" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAssetModelCompositeModelRequest",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(91, __c11, 3));
    case 1:
      return S.suspend(() =>
        S.Struct({
          assetModelCompositeModelId: S.String,
          assetModelCompositeModelPath: __S(112, __c14, 0),
          assetModelStatus: __S(85, __c10, 5),
          assetModelId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateAssetModelCompositeModelResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ columnNames: __S(26, __c3, 2) })).annotate({
        identifier: "Csv",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          csv: S.optional(__S(114, __c14, 2)),
          parquet: S.optional(__S(1, __c0, 1)),
          mp4: S.optional(__S(1, __c0, 1)),
          annotation: S.optional(__S(1, __c0, 1)),
        }),
      ).annotate({ identifier: "FileFormat" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          bucket: S.String,
          key: S.String,
          versionId: S.optional(S.String),
          alias: S.optional(S.String),
          startTime: S.optional(__S(4, __c0, 4)),
          fileFormat: S.optional(__S(115, __c14, 3)),
        }),
      ).annotate({ identifier: "File" });
    case 5:
      return S.Array(__S(116, __c14, 4));
    case 6:
      return S.suspend(() => S.Struct({ bucket: S.String, prefix: S.String })).annotate({
        identifier: "ErrorReportLocation",
      });
    case 7:
      return S.suspend(() => S.Struct({ fileFormat: S.optional(__S(115, __c14, 3)) })).annotate({
        identifier: "JobConfiguration",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          jobName: S.String,
          jobRoleArn: S.String,
          files: __S(117, __c14, 5),
          errorReportLocation: __S(118, __c14, 6),
          jobConfiguration: S.optional(__S(119, __c14, 7)),
          adaptiveIngestion: S.optional(S.Boolean),
          deleteFilesAfterImport: S.optional(S.Boolean),
          datasetId: S.optional(S.String),
          workspaceName: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/jobs" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateBulkImportJobRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ jobId: S.String, jobName: S.String, jobStatus: S.String }),
      ).annotate({
        identifier: "CreateBulkImportJobResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ inputProperties: S.String, resultProperty: S.String }),
      ).annotate({
        identifier: "ComputationModelAnomalyDetectionConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ anomalyDetection: S.optional(__S(122, __c15, 2)) }),
      ).annotate({
        identifier: "ComputationModelConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ assetModelId: S.String, propertyId: S.String })).annotate({
        identifier: "AssetModelPropertyBindingValue",
      });
    case 5:
      return S.suspend(() => S.Struct({ assetId: S.String, propertyId: S.String })).annotate({
        identifier: "AssetPropertyBindingValue",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<ComputationModelDataBindingValue> =>
          __S(127, __c15, 7),
        ).annotate({ identifier: "ComputationModelDataBindingValue" }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          assetModelProperty: S.optional(__S(124, __c15, 4)),
          assetProperty: S.optional(__S(125, __c15, 5)),
          list: S.optional(
            S.suspend(() => __S(126, __c15, 6)).annotate({ identifier: "BindingValueList" }),
          ),
        }),
      ).annotate({
        identifier: "ComputationModelDataBindingValue",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend((): S.Schema<ComputationModelDataBindingValue> =>
          __S(127, __c15, 7),
        )
          .annotate({ identifier: "ComputationModelDataBindingValue" })
          .pipe(S.optional),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          computationModelName: S.String,
          computationModelDescription: S.optional(S.String),
          computationModelConfiguration: __S(123, __c15, 3),
          computationModelDataBinding: __S(128, __c16, 0),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(76, __c9, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/computation-models" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateComputationModelRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          computationModelId: S.String,
          computationModelArn: S.String,
          computationModelStatus: __S(85, __c10, 5),
        }),
      ).annotate({
        identifier: "CreateComputationModelResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          projectId: S.String,
          dashboardName: S.String,
          dashboardDescription: S.optional(S.String),
          dashboardDefinition: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(76, __c9, 4)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/dashboards" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateDashboardRequest" });
    case 4:
      return S.suspend(() => S.Struct({ dashboardId: S.String, dashboardArn: S.String })).annotate({
        identifier: "CreateDashboardResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ sessionStartTimestamp: __S(4, __c0, 4), sessionEndTimestamp: __S(4, __c0, 4) }),
      ).annotate({ identifier: "SessionConfig" });
    case 6:
      return S.suspend(() => S.Struct({ session: S.optional(__S(133, __c16, 5)) })).annotate({
        identifier: "DatasetConfig",
      });
    case 7:
      return S.suspend(() => S.Struct({ knowledgeBaseArn: S.String, roleArn: S.String })).annotate({
        identifier: "KendraSourceDetail",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ kendra: S.optional(__S(135, __c16, 7)) })).annotate({
        identifier: "SourceDetail",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          sourceType: S.String,
          sourceFormat: S.String,
          sourceDetail: S.optional(__S(136, __c17, 0)),
        }),
      ).annotate({ identifier: "DatasetSource" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.optional(S.String),
          datasetName: S.String,
          datasetDescription: S.optional(S.String),
          datasetType: S.optional(S.String),
          datasetConfig: S.optional(__S(134, __c16, 6)),
          workspaceName: S.optional(S.String),
          metadata: S.optional(__S(76, __c9, 4)),
          datasetSource: __S(137, __c17, 1),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(76, __c9, 4)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/datasets" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDatasetRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ datasetId: S.String, datasetArn: S.String, datasetStatus: __S(85, __c10, 5) }),
      ).annotate({ identifier: "CreateDatasetResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ startTime: __S(4, __c0, 4), endTime: __S(4, __c0, 4) }),
      ).annotate({
        identifier: "TrimSettings",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          framesPerSecond: S.optional(S.Number),
          widthInPixels: S.optional(S.Number),
          heightInPixels: S.optional(S.Number),
        }),
      ).annotate({ identifier: "FormatSettings" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          timeSeriesId: S.optional(S.String),
          propertyAlias: S.optional(S.String),
          trimSettings: S.optional(__S(140, __c17, 4)),
          formatSettings: S.optional(__S(141, __c17, 5)),
        }),
      ).annotate({ identifier: "TimeseriesItem" });
    case 7:
      return S.Array(__S(142, __c17, 6));
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String,
          trimSettings: S.optional(__S(140, __c17, 4)),
          exportDataTypes: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({ identifier: "DatasetItem" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ timeseries: __S(143, __c17, 7) }),
        /*@__PURE__*/ S.Struct({ dataset: __S(144, __c18, 0) }),
      ]);
    case 2:
      return S.suspend(() => S.Struct({ s3Uri: S.String })).annotate({
        identifier: "ExportErrorReportLocation",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          destinationS3Uri: S.String,
          input: __S(145, __c18, 1),
          errorReportLocation: __S(146, __c18, 2),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceName}/dataset-export-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDatasetExportJobRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ jobId: S.String, workspaceName: S.String })).annotate({
        identifier: "CreateDatasetExportJobResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String,
          timeSeriesId: S.optional(S.String),
          propertyAlias: S.optional(S.String),
          trimSettings: __S(140, __c17, 4),
        }),
      ).annotate({ identifier: "EventDetection" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ eventDetection: __S(149, __c18, 5) })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          jobConfiguration: __S(150, __c18, 6),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceName}/enrichment-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEnrichmentJobRequest",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "CreateEnrichmentJobResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ groupArn: S.String })).annotate({
        identifier: "Greengrass",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          coreDeviceThingName: S.String,
          coreDeviceOperatingSystem: S.optional(S.String),
        }),
      ).annotate({ identifier: "GreengrassV2" });
    case 3:
      return S.suspend(() => S.Struct({ iotCoreThingName: S.String })).annotate({
        identifier: "SiemensIE",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          greengrass: S.optional(__S(153, __c19, 1)),
          greengrassV2: S.optional(__S(154, __c19, 2)),
          siemensIE: S.optional(__S(155, __c19, 3)),
        }),
      ).annotate({ identifier: "GatewayPlatform" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          gatewayName: S.String,
          gatewayPlatform: __S(156, __c19, 4),
          gatewayVersion: S.optional(S.String),
          tags: S.optional(__S(76, __c9, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/20200301/gateways" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateGatewayRequest" });
    case 6:
      return S.suspend(() => S.Struct({ gatewayId: S.String, gatewayArn: S.String })).annotate({
        identifier: "CreateGatewayResponse",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          computeNodeName: S.String,
          taskName: S.String,
          environmentVariables: S.optional(__S(159, __c19, 7)),
          dependsOn: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({ identifier: "ComputeNode" });
    case 1:
      return S.Array(__S(160, __c20, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          pipelineName: S.String,
          description: S.optional(S.String),
          environmentVariables: S.optional(__S(159, __c19, 7)),
          computations: __S(161, __c20, 1),
          tags: S.optional(__S(76, __c9, 4)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceName}/pipelines" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreatePipelineRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ code: S.optional(S.String), message: S.optional(S.String) }),
      ).annotate({ identifier: "ResourceError" });
    case 4:
      return S.suspend(() =>
        S.Struct({ error: S.optional(__S(163, __c20, 3)), state: S.optional(S.String) }),
      ).annotate({ identifier: "ResourceStatus" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.String,
          pipelineArn: S.String,
          version: S.String,
          status: __S(164, __c20, 4),
        }),
      ).annotate({ identifier: "CreatePipelineResponse" });
    case 6:
      return S.suspend(() => S.Struct({ data: T.Blob, type: S.String })).annotate({
        identifier: "ImageFile",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ alarmRoleArn: S.String, notificationLambdaArn: S.optional(S.String) }),
      ).annotate({ identifier: "Alarms" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ portalTools: S.optional(__S(11, __c1, 3)) })).annotate({
        identifier: "PortalTypeEntry",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(168, __c21, 0).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          portalName: S.String,
          portalDescription: S.optional(S.String),
          portalContactEmail: SensitiveString,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          portalLogoImageFile: S.optional(__S(166, __c20, 6)),
          roleArn: S.String,
          tags: S.optional(__S(76, __c9, 4)),
          portalAuthMode: S.optional(S.String),
          notificationSenderEmail: S.optional(SensitiveString),
          alarms: S.optional(__S(167, __c20, 7)),
          portalType: S.optional(S.String),
          portalTypeConfiguration: S.optional(__S(169, __c21, 1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/portals" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreatePortalRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ state: S.String, error: S.optional(__S(163, __c20, 3)) }),
      ).annotate({ identifier: "PortalStatus" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          portalId: S.String,
          portalArn: S.String,
          portalStartUrl: S.String,
          portalStatus: __S(171, __c21, 3),
          ssoApplicationId: S.String,
        }),
      ).annotate({ identifier: "CreatePortalResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          portalId: S.String,
          projectName: S.String,
          projectDescription: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(76, __c9, 4)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/projects" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateProjectRequest" });
    case 6:
      return S.suspend(() => S.Struct({ projectId: S.String, projectArn: S.String })).annotate({
        identifier: "CreateProjectResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ storageClass: S.String, storageSizeInGiB: S.Number }),
      ).annotate({
        identifier: "EphemeralStorageConfiguration",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ accessPointArn: S.String, prefix: S.optional(S.String) }),
      ).annotate({ identifier: "S3AccessPointSource" });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ s3AccessPoint: __S(176, __c22, 0) })]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          relativePath: S.String,
          source: __S(177, __c22, 1),
          storageType: S.String,
        }),
      ).annotate({ identifier: "Mount" });
    case 3:
      return S.Array(__S(178, __c22, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ecrUri: SensitiveString,
          taskExecutionRole: SensitiveString,
          processingType: S.String,
          processingUnit: S.String,
          ephemeralStorageConfiguration: S.optional(__S(175, __c21, 7)),
          command: S.optional(__S(11, __c1, 3)),
          timeoutSeconds: S.optional(S.Number),
          environmentVariables: S.optional(__S(159, __c19, 7)),
          mounts: S.optional(__S(179, __c22, 3)),
        }),
      ).annotate({
        identifier: "ContainerTaskConfiguration",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ containerTaskConfiguration: __S(180, __c22, 4) })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          taskName: S.String,
          description: S.optional(S.String),
          taskConfiguration: __S(181, __c22, 5),
          tags: S.optional(__S(76, __c9, 4)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceName}/tasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateTaskRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          taskName: S.String,
          taskArn: S.String,
          version: S.String,
          status: __S(164, __c20, 4),
        }),
      ).annotate({ identifier: "CreateTaskResponse" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ encryptionType: S.String, kmsKeyId: S.optional(S.String) }),
      ).annotate({
        identifier: "WorkspaceEncryptionConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String,
          workspaceDescription: S.optional(S.String),
          encryptionConfiguration: __S(184, __c23, 0),
          tags: S.optional(__S(76, __c9, 4)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/workspaces" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateWorkspaceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ state: S.String, error: S.optional(__S(82, __c10, 2)) }),
      ).annotate({ identifier: "WorkspaceStatus" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String,
          workspaceArn: S.String,
          workspaceStatus: __S(186, __c23, 2),
        }),
      ).annotate({ identifier: "CreateWorkspaceResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          accessPolicyId: S.String.pipe(T.HttpLabel("accessPolicyId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/access-policies/{accessPolicyId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAccessPolicyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceName}/applications/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteApplicationRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/assets/{assetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAssetRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ assetId: S.optional(S.String), assetStatus: __S(85, __c10, 5) }),
      ).annotate({ identifier: "DeleteAssetResponse" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String.pipe(T.HttpLabel("assetModelId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          ifMatch: S.optional(S.String).pipe(T.HttpHeader("If-Match")),
          ifNoneMatch: S.optional(S.String).pipe(T.HttpHeader("If-None-Match")),
          matchForVersionType: S.optional(S.String).pipe(T.HttpHeader("Match-For-Version-Type")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/asset-models/{assetModelId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAssetModelRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ assetModelId: S.optional(S.String), assetModelStatus: __S(85, __c10, 5) }),
      ).annotate({ identifier: "DeleteAssetModelResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String.pipe(T.HttpLabel("assetModelId")),
          assetModelCompositeModelId: S.String.pipe(T.HttpLabel("assetModelCompositeModelId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          ifMatch: S.optional(S.String).pipe(T.HttpHeader("If-Match")),
          ifNoneMatch: S.optional(S.String).pipe(T.HttpHeader("If-None-Match")),
          matchForVersionType: S.optional(S.String).pipe(T.HttpHeader("Match-For-Version-Type")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAssetModelCompositeModelRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ assetModelStatus: __S(85, __c10, 5), assetModelId: S.optional(S.String) }),
      ).annotate({
        identifier: "DeleteAssetModelCompositeModelResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String.pipe(T.HttpLabel("assetModelId")),
          interfaceAssetModelId: S.String.pipe(T.HttpLabel("interfaceAssetModelId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/asset-models/{assetModelId}/interface/{interfaceAssetModelId}/asset-model-interface-relationship",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAssetModelInterfaceRelationshipRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String,
          interfaceAssetModelId: S.String,
          assetModelArn: S.String,
          assetModelStatus: __S(85, __c10, 5),
        }),
      ).annotate({
        identifier: "DeleteAssetModelInterfaceRelationshipResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          computationModelId: S.String.pipe(T.HttpLabel("computationModelId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/computation-models/{computationModelId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteComputationModelRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ computationModelStatus: __S(85, __c10, 5) })).annotate({
        identifier: "DeleteComputationModelResponse",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dashboardId: S.String.pipe(T.HttpLabel("dashboardId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/dashboards/{dashboardId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDashboardRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          workspaceName: S.optional(S.String).pipe(T.HttpQuery("workspaceName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/datasets/{datasetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDatasetRequest" });
    case 2:
      return S.suspend(() => S.Struct({ datasetStatus: __S(85, __c10, 5) })).annotate({
        identifier: "DeleteDatasetResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ gatewayId: S.String.pipe(T.HttpLabel("gatewayId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/20200301/gateways/{gatewayId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteGatewayRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          pipelineName: S.String.pipe(T.HttpLabel("pipelineName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/workspaces/{workspaceName}/pipelines/{pipelineName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeletePipelineRequest" });
    case 5:
      return S.suspend(() => S.Struct({ status: __S(164, __c20, 4) })).annotate({
        identifier: "DeletePipelineResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          portalId: S.String.pipe(T.HttpLabel("portalId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/portals/{portalId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeletePortalRequest" });
    case 7:
      return S.suspend(() => S.Struct({ portalStatus: __S(171, __c21, 3) })).annotate({
        identifier: "DeletePortalResponse",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          projectId: S.String.pipe(T.HttpLabel("projectId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/projects/{projectId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteProjectRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          taskName: S.String.pipe(T.HttpLabel("taskName")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceName}/tasks/{taskName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTaskRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          alias: S.optional(S.String).pipe(T.HttpQuery("alias")),
          assetId: S.optional(S.String).pipe(T.HttpQuery("assetId")),
          propertyId: S.optional(S.String).pipe(T.HttpQuery("propertyId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          workspaceName: S.optional(S.String).pipe(T.HttpQuery("workspaceName")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/timeseries/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTimeSeriesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteWorkspaceRequest" });
    case 4:
      return S.suspend(() => S.Struct({ workspaceStatus: __S(186, __c23, 2) })).annotate({
        identifier: "DeleteWorkspaceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ accessPolicyId: S.String.pipe(T.HttpLabel("accessPolicyId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/access-policies/{accessPolicyId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAccessPolicyRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          accessPolicyId: S.String,
          accessPolicyArn: S.String,
          accessPolicyIdentity: __S(74, __c9, 2),
          accessPolicyResource: __S(75, __c9, 3),
          accessPolicyPermission: S.String,
          accessPolicyCreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          accessPolicyLastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "DescribeAccessPolicyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ actionId: S.String.pipe(T.HttpLabel("actionId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/actions/{actionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeActionRequest" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ assetId: S.optional(S.String), computationModelId: S.optional(S.String) }),
      ).annotate({ identifier: "TargetResource" });
    case 1:
      return S.suspend(() => S.Struct({ stringValue: S.String })).annotate({
        identifier: "ActionPayload",
      });
    case 2:
      return S.suspend(() => S.Struct({ assetId: S.String })).annotate({
        identifier: "ResolveTo",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          actionId: S.String,
          targetResource: __S(216, __c27, 0),
          actionDefinitionId: S.String,
          actionPayload: __S(217, __c27, 1),
          executionTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          resolveTo: S.optional(__S(218, __c27, 2)),
        }),
      ).annotate({ identifier: "DescribeActionResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceName}/applications/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeApplicationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          dnsSubdomain: S.String,
          description: S.optional(S.String),
          id: S.String,
          idcApplicationArn: S.String,
          name: S.String,
          status: S.String,
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          workspaceName: S.String,
        }),
      ).annotate({
        identifier: "DescribeApplicationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          excludeProperties: S.optional(S.Boolean).pipe(T.HttpQuery("excludeProperties")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/assets/{assetId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeAssetRequest" });
    case 7:
      return S.suspend(() => S.Struct({ topic: S.String, state: S.String })).annotate({
        identifier: "PropertyNotification",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), name: S.optional(S.String) }),
      ).annotate({ identifier: "AssetPropertyPathSegment" });
    case 1:
      return S.Array(__S(224, __c28, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          externalId: S.optional(S.String),
          name: S.String,
          alias: S.optional(S.String),
          notification: S.optional(__S(223, __c27, 7)),
          dataType: S.String,
          dataTypeSpec: S.optional(S.String),
          unit: S.optional(S.String),
          path: S.optional(__S(225, __c28, 1)),
        }),
      ).annotate({ identifier: "AssetProperty" });
    case 3:
      return S.Array(__S(226, __c28, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), externalId: S.optional(S.String), name: S.String }),
      ).annotate({ identifier: "AssetHierarchy" });
    case 5:
      return S.Array(__S(228, __c28, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          type: S.String,
          properties: __S(227, __c28, 3),
          id: S.optional(S.String),
          externalId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssetCompositeModel" });
    case 7:
      return S.Array(__S(230, __c28, 6));
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          externalId: S.optional(S.String),
          name: S.String,
          type: S.String,
          description: S.String,
          path: __S(92, __c11, 4),
        }),
      ).annotate({
        identifier: "AssetCompositeModelSummary",
      });
    case 1:
      return S.Array(__S(232, __c29, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String,
          assetExternalId: S.optional(S.String),
          assetArn: S.String,
          assetName: S.String,
          assetModelId: S.String,
          assetProperties: __S(227, __c28, 3),
          assetHierarchies: __S(229, __c28, 5),
          assetCompositeModels: S.optional(__S(231, __c28, 7)),
          assetCreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          assetLastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          assetStatus: __S(85, __c10, 5),
          assetDescription: S.optional(S.String),
          assetCompositeModelSummaries: S.optional(__S(233, __c29, 1)),
        }),
      ).annotate({ identifier: "DescribeAssetResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          assetCompositeModelId: S.String.pipe(T.HttpLabel("assetCompositeModelId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/assets/{assetId}/composite-models/{assetCompositeModelId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAssetCompositeModelRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ actionDefinitionId: S.String, actionName: S.String, actionType: S.String }),
      ).annotate({ identifier: "ActionDefinition" });
    case 5:
      return S.Array(__S(236, __c29, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String,
          assetCompositeModelId: S.String,
          assetCompositeModelExternalId: S.optional(S.String),
          assetCompositeModelPath: __S(92, __c11, 4),
          assetCompositeModelName: S.String,
          assetCompositeModelDescription: S.String,
          assetCompositeModelType: S.String,
          assetCompositeModelProperties: __S(227, __c28, 3),
          assetCompositeModelSummaries: __S(233, __c29, 1),
          actionDefinitions: S.optional(__S(237, __c29, 5)),
        }),
      ).annotate({
        identifier: "DescribeAssetCompositeModelResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String.pipe(T.HttpLabel("assetModelId")),
          excludeProperties: S.optional(S.Boolean).pipe(T.HttpQuery("excludeProperties")),
          assetModelVersion: S.optional(S.String).pipe(T.HttpQuery("assetModelVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/asset-models/{assetModelId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAssetModelRequest",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          externalId: S.optional(S.String),
          name: S.String,
          dataType: S.String,
          dataTypeSpec: S.optional(S.String),
          unit: S.optional(S.String),
          type: __S(102, __c12, 6),
          path: S.optional(__S(92, __c11, 4)),
        }),
      ).annotate({ identifier: "AssetModelProperty" });
    case 1:
      return S.Array(__S(240, __c30, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          externalId: S.optional(S.String),
          name: S.String,
          childAssetModelId: S.String,
        }),
      ).annotate({ identifier: "AssetModelHierarchy" });
    case 3:
      return S.Array(__S(242, __c30, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          type: S.String,
          properties: S.optional(__S(241, __c30, 1)),
          id: S.optional(S.String),
          externalId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssetModelCompositeModel" });
    case 5:
      return S.Array(__S(244, __c30, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          externalId: S.optional(S.String),
          name: S.String,
          type: S.String,
          description: S.optional(S.String),
          path: S.optional(__S(112, __c14, 0)),
        }),
      ).annotate({
        identifier: "AssetModelCompositeModelSummary",
      });
    case 7:
      return S.Array(__S(246, __c30, 6));
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ id: S.String })).annotate({
        identifier: "InterfaceRelationship",
      });
    case 1:
      return S.Array(__S(248, __c31, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String,
          assetModelExternalId: S.optional(S.String),
          assetModelArn: S.String,
          assetModelName: S.String,
          assetModelType: S.optional(S.String),
          assetModelDescription: S.String,
          assetModelProperties: __S(241, __c30, 1),
          assetModelHierarchies: __S(243, __c30, 3),
          assetModelCompositeModels: S.optional(__S(245, __c30, 5)),
          assetModelCompositeModelSummaries: S.optional(__S(247, __c30, 7)),
          assetModelCreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          assetModelLastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          assetModelStatus: __S(85, __c10, 5),
          assetModelVersion: S.optional(S.String),
          interfaceDetails: S.optional(__S(249, __c31, 1)),
          eTag: S.optional(S.String).pipe(T.HttpHeader("ETag")),
        }),
      ).annotate({
        identifier: "DescribeAssetModelResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String.pipe(T.HttpLabel("assetModelId")),
          assetModelCompositeModelId: S.String.pipe(T.HttpLabel("assetModelCompositeModelId")),
          assetModelVersion: S.optional(S.String).pipe(T.HttpQuery("assetModelVersion")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAssetModelCompositeModelRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ id: S.optional(S.String) })).annotate({
        identifier: "CompositionRelationshipItem",
      });
    case 5:
      return S.Array(__S(252, __c31, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ compositionRelationship: S.optional(__S(253, __c31, 5)) }),
      ).annotate({ identifier: "CompositionDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String,
          assetModelCompositeModelId: S.String,
          assetModelCompositeModelExternalId: S.optional(S.String),
          assetModelCompositeModelPath: __S(112, __c14, 0),
          assetModelCompositeModelName: S.String,
          assetModelCompositeModelDescription: S.String,
          assetModelCompositeModelType: S.String,
          assetModelCompositeModelProperties: __S(241, __c30, 1),
          compositionDetails: S.optional(__S(254, __c31, 6)),
          assetModelCompositeModelSummaries: __S(247, __c30, 7),
          actionDefinitions: S.optional(__S(237, __c29, 5)),
        }),
      ).annotate({
        identifier: "DescribeAssetModelCompositeModelResponse",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String.pipe(T.HttpLabel("assetModelId")),
          interfaceAssetModelId: S.String.pipe(T.HttpLabel("interfaceAssetModelId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/asset-models/{assetModelId}/interface/{interfaceAssetModelId}/asset-model-interface-relationship",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAssetModelInterfaceRelationshipRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ assetModelPropertyId: S.String, interfaceAssetModelPropertyId: S.String }),
      ).annotate({ identifier: "PropertyMapping" });
    case 2:
      return S.Array(__S(257, __c32, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ assetModelHierarchyId: S.String, interfaceAssetModelHierarchyId: S.String }),
      ).annotate({ identifier: "HierarchyMapping" });
    case 4:
      return S.Array(__S(259, __c32, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String,
          interfaceAssetModelId: S.String,
          propertyMappings: __S(258, __c32, 2),
          hierarchyMappings: __S(260, __c32, 4),
        }),
      ).annotate({
        identifier: "DescribeAssetModelInterfaceRelationshipResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          propertyId: S.String.pipe(T.HttpLabel("propertyId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/assets/{assetId}/properties/{propertyId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAssetPropertyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          externalId: S.optional(S.String),
          name: S.String,
          alias: S.optional(S.String),
          notification: S.optional(__S(223, __c27, 7)),
          dataType: S.String,
          unit: S.optional(S.String),
          type: S.optional(__S(102, __c12, 6)),
          path: S.optional(__S(225, __c28, 1)),
        }),
      ).annotate({ identifier: "Property" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: S.String,
          assetProperty: __S(263, __c32, 7),
          id: S.optional(S.String),
          externalId: S.optional(S.String),
        }),
      ).annotate({ identifier: "CompositeModelProperty" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String,
          assetExternalId: S.optional(S.String),
          assetName: S.String,
          assetModelId: S.String,
          assetProperty: S.optional(__S(263, __c32, 7)),
          compositeModel: S.optional(__S(264, __c33, 0)),
        }),
      ).annotate({
        identifier: "DescribeAssetPropertyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          workspaceName: S.optional(S.String).pipe(T.HttpQuery("workspaceName")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/jobs/{jobId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeBulkImportJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          jobName: S.String,
          jobStatus: S.String,
          jobRoleArn: S.String,
          files: __S(117, __c14, 5),
          errorReportLocation: __S(118, __c14, 6),
          jobConfiguration: S.optional(__S(119, __c14, 7)),
          jobCreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          jobLastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          adaptiveIngestion: S.optional(S.Boolean),
          deleteFilesAfterImport: S.optional(S.Boolean),
          datasetId: S.optional(S.String),
          workspaceName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeBulkImportJobResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          computationModelId: S.String.pipe(T.HttpLabel("computationModelId")),
          computationModelVersion: S.optional(S.String).pipe(
            T.HttpQuery("computationModelVersion"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/computation-models/{computationModelId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeComputationModelRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          computationModelId: S.String,
          computationModelArn: S.String,
          computationModelName: S.String,
          computationModelDescription: S.optional(S.String),
          computationModelConfiguration: __S(123, __c15, 3),
          computationModelDataBinding: __S(128, __c16, 0),
          computationModelCreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          computationModelLastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          computationModelStatus: __S(85, __c10, 5),
          computationModelVersion: S.String,
          actionDefinitions: __S(237, __c29, 5),
        }),
      ).annotate({
        identifier: "DescribeComputationModelResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          computationModelId: S.String.pipe(T.HttpLabel("computationModelId")),
          resolveToResourceType: S.optional(S.String).pipe(T.HttpQuery("resolveToResourceType")),
          resolveToResourceId: S.optional(S.String).pipe(T.HttpQuery("resolveToResourceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/computation-models/{computationModelId}/execution-summary",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeComputationModelExecutionSummaryRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          computationModelId: S.String,
          resolveTo: S.optional(__S(218, __c27, 2)),
          computationModelExecutionSummary: __S(159, __c19, 7),
        }),
      ).annotate({
        identifier: "DescribeComputationModelExecutionSummaryResponse",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ dashboardId: S.String.pipe(T.HttpLabel("dashboardId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/dashboards/{dashboardId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeDashboardRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          dashboardId: S.String,
          dashboardArn: S.String,
          dashboardName: S.String,
          projectId: S.String,
          dashboardDescription: S.optional(S.String),
          dashboardDefinition: S.String,
          dashboardCreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          dashboardLastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "DescribeDashboardResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          workspaceName: S.optional(S.String).pipe(T.HttpQuery("workspaceName")),
          datasetVersion: S.optional(S.String).pipe(T.HttpQuery("datasetVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/datasets/{datasetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeDatasetRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          status: S.String,
          lastEnrichedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DatasetEnrichmentEntry" });
    case 4:
      return S.suspend(() => S.Struct({ video: S.optional(__S(275, __c34, 3)) })).annotate({
        identifier: "DatasetEnrichment",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String,
          datasetArn: S.String,
          datasetName: S.String,
          datasetDescription: S.String,
          datasetType: S.optional(S.String),
          datasetConfig: S.optional(__S(134, __c16, 6)),
          workspaceName: S.optional(S.String),
          metadata: S.optional(__S(76, __c9, 4)),
          datasetSource: __S(137, __c17, 1),
          datasetStatus: __S(85, __c10, 5),
          datasetCreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          datasetLastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          datasetVersion: S.optional(S.String),
          enrichmentStatus: S.optional(__S(276, __c34, 4)),
        }),
      ).annotate({ identifier: "DescribeDatasetResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/workspaces/{workspaceName}/dataset-export-jobs/{jobId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDatasetExportJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          workspaceName: S.String,
          status: S.String,
          startedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          completedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          destinationS3Uri: S.String,
          errorReportLocation: __S(146, __c18, 2),
          input: __S(145, __c18, 1),
        }),
      ).annotate({
        identifier: "DescribeDatasetExportJobResponse",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/configuration/account/encryption" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDefaultEncryptionConfigurationRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ code: S.String, message: S.String })).annotate({
        identifier: "ConfigurationErrorDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ state: S.String, error: S.optional(__S(281, __c35, 1)) }),
      ).annotate({ identifier: "ConfigurationStatus" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          encryptionType: S.String,
          kmsKeyArn: S.optional(S.String),
          configurationStatus: __S(282, __c35, 2),
        }),
      ).annotate({
        identifier: "DescribeDefaultEncryptionConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceName}/enrichment-jobs/{jobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeEnrichmentJobRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          status: S.String,
          workspaceName: S.String,
          jobType: S.String,
          jobConfiguration: __S(150, __c18, 6),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          completedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          cancelledAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          failureMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeEnrichmentJobResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ executionId: S.String.pipe(T.HttpLabel("executionId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/executions/{executionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeExecutionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          executionId: S.String,
          actionType: S.optional(S.String),
          targetResource: __S(216, __c27, 0),
          targetResourceVersion: S.String,
          resolveTo: S.optional(__S(218, __c27, 2)),
          executionStartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          executionEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          executionStatus: __S(88, __c11, 0),
          executionResult: S.optional(__S(159, __c19, 7)),
          executionDetails: S.optional(__S(159, __c19, 7)),
          executionEntityVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeExecutionResponse",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ gatewayId: S.String.pipe(T.HttpLabel("gatewayId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/20200301/gateways/{gatewayId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeGatewayRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ capabilityNamespace: S.String, capabilitySyncStatus: S.String }),
      ).annotate({ identifier: "GatewayCapabilitySummary" });
    case 2:
      return S.Array(__S(289, __c36, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          gatewayName: S.String,
          gatewayArn: S.String,
          gatewayPlatform: S.optional(__S(156, __c19, 4)),
          gatewayVersion: S.optional(S.String),
          gatewayCapabilitySummaries: __S(290, __c36, 2),
          creationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DescribeGatewayResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          capabilityNamespace: S.String.pipe(T.HttpLabel("capabilityNamespace")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/20200301/gateways/{gatewayId}/capability/{capabilityNamespace}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeGatewayCapabilityConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          capabilityNamespace: S.String,
          capabilityConfiguration: S.String,
          capabilitySyncStatus: S.String,
        }),
      ).annotate({
        identifier: "DescribeGatewayCapabilityConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ workspaceName: S.optional(S.String).pipe(T.HttpQuery("workspaceName")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/logging" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLoggingOptionsRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ level: S.String })).annotate({
        identifier: "LoggingOptions",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ loggingOptions: __S(295, __c36, 7) })).annotate({
        identifier: "DescribeLoggingOptionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          pipelineName: S.String.pipe(T.HttpLabel("pipelineName")),
          pipelineVersion: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceName}/pipelines/{pipelineName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribePipelineRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.String,
          workspaceName: S.String,
          description: S.optional(S.String),
          pipelineArn: S.String,
          version: S.String,
          environmentVariables: S.optional(__S(159, __c19, 7)),
          computations: __S(161, __c20, 1),
          status: __S(164, __c20, 4),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DescribePipelineResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          pipelineName: S.String.pipe(T.HttpLabel("pipelineName")),
          pipelineExecutionId: S.String.pipe(T.HttpLabel("pipelineExecutionId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/workspaces/{workspaceName}/pipelines/{pipelineName}/executions/{pipelineExecutionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribePipelineExecutionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          code: S.optional(S.String),
          message: S.String,
          details: S.optional(__S(83, __c10, 3)),
        }),
      ).annotate({
        identifier: "PipelineExecutionStateDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          state: S.String,
          stateDetails: S.optional(__S(300, __c37, 4)),
        }),
      ).annotate({ identifier: "PipelineExecutionStatus" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(159, __c19, 7).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          global: S.optional(__S(159, __c19, 7)),
          computeNodes: S.optional(__S(302, __c37, 6)),
        }),
      ).annotate({
        identifier: "ExecutionEnvironmentVariables",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(179, __c22, 3).pipe(S.optional));
    case 1:
      return S.suspend(() => S.Struct({ computeNodes: __S(304, __c38, 0) })).annotate({
        identifier: "MountOverrides",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          code: S.String,
          message: S.String,
          details: S.optional(__S(83, __c10, 3)),
        }),
      ).annotate({
        identifier: "ComputeNodeExecutionStateDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          state: S.String,
          stateDetails: S.optional(__S(306, __c38, 2)),
        }),
      ).annotate({
        identifier: "ComputeNodeExecutionStatus",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          computeNodeName: S.String,
          taskName: S.String,
          taskArn: S.String,
          taskVersion: S.String,
          dependsOn: __S(11, __c1, 3),
          status: __S(307, __c38, 3),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          executionEnvironmentVariables: S.optional(__S(159, __c19, 7)),
          executionMounts: S.optional(__S(179, __c22, 3)),
        }),
      ).annotate({
        identifier: "ComputeNodeExecutionDetails",
      });
    case 5:
      return S.Array(__S(308, __c38, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          pipelineExecutionId: S.String,
          pipelineName: S.String,
          workspaceName: S.String,
          pipelineVersion: S.String,
          status: __S(301, __c37, 5),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          requestEnvironmentVariables: __S(303, __c37, 7),
          requestMountOverrides: S.optional(__S(305, __c38, 1)),
          executionPriority: S.optional(S.Number),
          computeNodeExecutionDetails: __S(309, __c38, 5),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribePipelineExecutionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ portalId: S.String.pipe(T.HttpLabel("portalId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/portals/{portalId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribePortalRequest" });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ id: S.String, url: S.String })).annotate({
        identifier: "ImageLocation",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          portalId: S.String,
          portalArn: S.String,
          portalName: S.String,
          portalDescription: S.optional(S.String),
          portalClientId: S.String,
          portalStartUrl: S.String,
          portalContactEmail: SensitiveString,
          portalStatus: __S(171, __c21, 3),
          portalCreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          portalLastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          portalLogoImageLocation: S.optional(__S(312, __c39, 0)),
          roleArn: S.optional(S.String),
          portalAuthMode: S.optional(S.String),
          notificationSenderEmail: S.optional(SensitiveString),
          alarms: S.optional(__S(167, __c20, 7)),
          portalType: S.optional(S.String),
          portalTypeConfiguration: S.optional(__S(169, __c21, 1)),
        }),
      ).annotate({ identifier: "DescribePortalResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ projectId: S.String.pipe(T.HttpLabel("projectId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/projects/{projectId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeProjectRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          projectId: S.String,
          projectArn: S.String,
          projectName: S.String,
          portalId: S.String,
          projectDescription: S.optional(S.String),
          projectCreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          projectLastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DescribeProjectResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          queryId: S.String.pipe(T.HttpLabel("queryId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceName}/queries/{queryId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeQueryRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ rowCount: S.Number, bytesScanned: S.Number, executionTimeInMillis: S.Number }),
      ).annotate({ identifier: "QueryStatistics" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          queryId: S.String,
          status: S.String,
          submittedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          completedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          statistics: S.optional(__S(317, __c39, 5)),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "DescribeQueryResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          searchId: S.String.pipe(T.HttpLabel("searchId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceName}/searches/{searchId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeSearchRequest" });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          searchId: S.String,
          workspaceName: S.String,
          status: S.String,
          queryStatement: SensitiveString,
          searchType: S.String,
          statusReason: S.optional(S.String),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          groupId: S.optional(S.String),
        }),
      ).annotate({ identifier: "DescribeSearchResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/configuration/account/storage" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeStorageConfigurationRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ s3ResourceArn: S.String, roleArn: S.String })).annotate({
        identifier: "CustomerManagedS3Storage",
      });
    case 3:
      return S.suspend(() => S.Struct({ customerManagedS3Storage: __S(322, __c40, 2) })).annotate({
        identifier: "MultiLayerStorage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ numberOfDays: S.optional(S.Number), unlimited: S.optional(S.Boolean) }),
      ).annotate({ identifier: "RetentionPeriod" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          storageType: S.String,
          multiLayerStorage: S.optional(__S(323, __c40, 3)),
          disassociatedDataStorage: S.optional(S.String),
          retentionPeriod: S.optional(__S(324, __c40, 4)),
          configurationStatus: __S(282, __c35, 2),
          lastUpdateDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          warmTier: S.optional(S.String),
          warmTierRetentionPeriod: S.optional(__S(324, __c40, 4)),
          disallowIngestNullNaN: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "DescribeStorageConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          taskName: S.String.pipe(T.HttpLabel("taskName")),
          taskVersion: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceName}/tasks/{taskName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeTaskRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String,
          taskName: S.String,
          description: S.optional(S.String),
          taskArn: S.String,
          version: S.String,
          taskConfiguration: __S(181, __c22, 5),
          status: __S(164, __c20, 4),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DescribeTaskResponse" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          alias: S.optional(S.String).pipe(T.HttpQuery("alias")),
          assetId: S.optional(S.String).pipe(T.HttpQuery("assetId")),
          propertyId: S.optional(S.String).pipe(T.HttpQuery("propertyId")),
          workspaceName: S.optional(S.String).pipe(T.HttpQuery("workspaceName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/timeseries/describe" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeTimeSeriesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          assetId: S.optional(S.String),
          propertyId: S.optional(S.String),
          alias: S.optional(S.String),
          timeSeriesId: S.String,
          dataType: S.String,
          dataTypeSpec: S.optional(S.String),
          timeSeriesCreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          timeSeriesLastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          timeSeriesArn: S.String,
          workspaceName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeTimeSeriesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ workspaceName: S.String.pipe(T.HttpLabel("workspaceName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeWorkspaceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ encryptionType: S.String, kmsKeyArn: S.optional(S.String) }),
      ).annotate({
        identifier: "WorkspaceEncryptionConfigurationInfo",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceArn: S.String,
          workspaceName: S.String,
          workspaceDescription: S.optional(S.String),
          workspaceStatus: __S(186, __c23, 2),
          encryptionConfiguration: S.optional(__S(331, __c41, 3)),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "DescribeWorkspaceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          hierarchyId: S.String,
          childAssetId: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/assets/{assetId}/disassociate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateAssetsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          alias: S.String.pipe(T.HttpQuery("alias")),
          assetId: S.String.pipe(T.HttpQuery("assetId")),
          propertyId: S.String.pipe(T.HttpQuery("propertyId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/timeseries/disassociate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateTimeSeriesFromAssetPropertyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          targetResource: __S(216, __c27, 0),
          actionDefinitionId: S.String,
          actionPayload: __S(217, __c27, 1),
          clientToken: S.optional(S.String),
          resolveTo: S.optional(__S(218, __c27, 2)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/actions" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ExecuteActionRequest" });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ actionId: S.String })).annotate({
        identifier: "ExecuteActionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          queryStatement: SensitiveString,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/queries/execution" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ExecuteQueryRequest" });
    case 2:
      return S.suspend(() => S.Struct({ scalarType: S.optional(S.String) })).annotate({
        identifier: "ColumnType",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), type: S.optional(__S(338, __c42, 2)) }),
      ).annotate({ identifier: "ColumnInfo" });
    case 4:
      return S.Array(__S(339, __c42, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          scalarValue: S.optional(S.String),
          arrayValue: S.optional(
            S.suspend(() => __S(342, __c42, 6)).annotate({ identifier: "DatumList" }),
          ),
          rowValue: S.optional(
            S.suspend((): S.Schema<Row> => __S(343, __c42, 7)).annotate({ identifier: "Row" }),
          ),
          nullValue: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Datum" });
    case 6:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Datum> => __S(341, __c42, 5)).annotate({
          identifier: "Datum",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          data: S.suspend(() => __S(342, __c42, 6)).annotate({ identifier: "DatumList" }),
        }),
      ).annotate({ identifier: "Row" });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Row> => __S(343, __c42, 7)).annotate({
          identifier: "Row",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          columns: S.optional(__S(340, __c42, 4)),
          rows: S.optional(__S(344, __c43, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExecuteQueryResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          assetId: S.optional(S.String).pipe(T.HttpQuery("assetId")),
          propertyId: S.optional(S.String).pipe(T.HttpQuery("propertyId")),
          propertyAlias: S.optional(S.String).pipe(T.HttpQuery("propertyAlias")),
          aggregateTypes: __S(26, __c3, 2).pipe(T.HttpQuery("aggregateTypes")),
          resolution: S.String.pipe(T.HttpQuery("resolution")),
          qualities: S.optional(__S(26, __c3, 2)).pipe(T.HttpQuery("qualities")),
          startDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("startDate")),
          endDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("endDate")),
          timeOrdering: S.optional(S.String).pipe(T.HttpQuery("timeOrdering")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/properties/aggregates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAssetPropertyAggregatesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ aggregatedValues: __S(34, __c4, 2), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetAssetPropertyAggregatesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          assetId: S.optional(S.String).pipe(T.HttpQuery("assetId")),
          propertyId: S.optional(S.String).pipe(T.HttpQuery("propertyId")),
          propertyAlias: S.optional(S.String).pipe(T.HttpQuery("propertyAlias")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/properties/latest" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAssetPropertyValueRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ propertyValue: S.optional(__S(46, __c5, 6)) })).annotate({
        identifier: "GetAssetPropertyValueResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          assetId: S.optional(S.String).pipe(T.HttpQuery("assetId")),
          propertyId: S.optional(S.String).pipe(T.HttpQuery("propertyId")),
          propertyAlias: S.optional(S.String).pipe(T.HttpQuery("propertyAlias")),
          startDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("startDate"),
          ),
          endDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("endDate"),
          ),
          qualities: S.optional(__S(26, __c3, 2)).pipe(T.HttpQuery("qualities")),
          timeOrdering: S.optional(S.String).pipe(T.HttpQuery("timeOrdering")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/properties/history" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAssetPropertyValueHistoryRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          assetPropertyValueHistory: __S(53, __c6, 5),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetAssetPropertyValueHistoryResponse",
      });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          startTime: __S(4, __c0, 4),
          endTime: __S(4, __c0, 4),
          timeSeriesId: S.optional(S.String),
          propertyAlias: S.optional(S.String),
          formatSettings: S.optional(__S(141, __c17, 5)),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceName}/get-capture-data" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCaptureDataRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          data: T.Blob,
          startTime: __S(4, __c0, 4),
          endTime: __S(4, __c0, 4),
          dataType: S.String,
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetCaptureDataResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          assetId: S.optional(S.String).pipe(T.HttpQuery("assetId")),
          propertyId: S.optional(S.String).pipe(T.HttpQuery("propertyId")),
          propertyAlias: S.optional(S.String).pipe(T.HttpQuery("propertyAlias")),
          startTimeInSeconds: S.Number.pipe(T.HttpQuery("startTimeInSeconds")),
          startTimeOffsetInNanos: S.optional(S.Number).pipe(T.HttpQuery("startTimeOffsetInNanos")),
          endTimeInSeconds: S.Number.pipe(T.HttpQuery("endTimeInSeconds")),
          endTimeOffsetInNanos: S.optional(S.Number).pipe(T.HttpQuery("endTimeOffsetInNanos")),
          quality: S.String.pipe(T.HttpQuery("quality")),
          intervalInSeconds: S.Number.pipe(T.HttpQuery("intervalInSeconds")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          type: S.String.pipe(T.HttpQuery("type")),
          intervalWindowInSeconds: S.optional(S.Number).pipe(
            T.HttpQuery("intervalWindowInSeconds"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/properties/interpolated" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetInterpolatedAssetPropertyValuesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ timestamp: __S(4, __c0, 4), value: __S(45, __c5, 5) }),
      ).annotate({
        identifier: "InterpolatedAssetPropertyValue",
      });
    case 4:
      return S.Array(__S(355, __c44, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          interpolatedAssetPropertyValues: __S(356, __c44, 4),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetInterpolatedAssetPropertyValuesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          queryId: S.String.pipe(T.HttpLabel("queryId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceName}/queries/{queryId}/results" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetQueryResultsRequest" });
    case 7:
      return S.suspend(() => S.Struct({ name: S.String, type: S.String })).annotate({
        identifier: "ColumnInformation",
      });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(359, __c44, 7));
    case 1:
      return S.Array(S.String).pipe(/*@__PURE__*/ T.Sparse());
    case 2:
      return S.Array(__S(361, __c45, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          columnInfo: S.optional(__S(360, __c45, 0)),
          rows: S.optional(__S(362, __c45, 2)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetQueryResultsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          searchId: S.String.pipe(T.HttpLabel("searchId")),
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/workspaces/{workspaceName}/searches/{searchId}/results",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSearchResultsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          searchId: S.String,
          workspaceName: S.String,
          datasetId: S.String,
          timeSeriesId: S.String,
          startTimestamp: __S(4, __c0, 4),
          endTimestamp: __S(4, __c0, 4),
          topTimestamp: __S(4, __c0, 4),
          score: S.Number,
        }),
      ).annotate({ identifier: "SearchResult" });
    case 6:
      return S.Array(__S(365, __c45, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ searchResults: __S(366, __c45, 6), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetSearchResultsResponse" });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          conversationId: S.optional(S.String),
          message: SensitiveString,
          enableTrace: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/assistant/invocation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "InvokeAssistantRequest" });
    case 1:
      return S.suspend(() => S.Struct({ text: S.optional(S.String) })).annotate({
        identifier: "Trace",
      });
    case 2:
      return S.suspend(() => S.Struct({ uri: S.optional(S.String) })).annotate({
        identifier: "Location",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ arn: S.optional(S.String), location: S.optional(__S(370, __c46, 2)) }),
      ).annotate({ identifier: "Source" });
    case 4:
      return S.suspend(() =>
        S.Struct({ datasetArn: S.optional(S.String), source: S.optional(__S(371, __c46, 3)) }),
      ).annotate({ identifier: "DataSetReference" });
    case 5:
      return S.suspend(() => S.Struct({ dataset: S.optional(__S(372, __c46, 4)) })).annotate({
        identifier: "Reference",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          reference: S.optional(__S(373, __c46, 5)),
          content: S.optional(__S(369, __c46, 1)),
        }),
      ).annotate({ identifier: "Citation" });
    case 7:
      return S.Array(__S(374, __c46, 6));
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ message: S.optional(S.String), citations: S.optional(__S(375, __c46, 7)) }),
      ).annotate({ identifier: "InvocationOutput" });
    case 1:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ trace: __S(369, __c46, 1) }),
          /*@__PURE__*/ S.Struct({
            output: __S(376, __c47, 0) as any as S.Schema<InvocationOutput>,
          }),
          /*@__PURE__*/ S.Struct({
            accessDeniedException: /*@__PURE__*/ S.suspend(() => AccessDeniedException).annotate({
              identifier: "AccessDeniedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            conflictingOperationException: /*@__PURE__*/ S.suspend(
              () => ConflictingOperationException,
            ).annotate({
              identifier: "ConflictingOperationException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            internalFailureException: /*@__PURE__*/ S.suspend(
              () => InternalFailureException,
            ).annotate({
              identifier: "InternalFailureException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            invalidRequestException: /*@__PURE__*/ S.suspend(
              () => InvalidRequestException,
            ).annotate({
              identifier: "InvalidRequestException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            limitExceededException: /*@__PURE__*/ S.suspend(() => LimitExceededException).annotate({
              identifier: "LimitExceededException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            resourceNotFoundException: /*@__PURE__*/ S.suspend(
              () => ResourceNotFoundException,
            ).annotate({
              identifier: "ResourceNotFoundException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            throttlingException: /*@__PURE__*/ S.suspend(() => ThrottlingException).annotate({
              identifier: "ThrottlingException",
            }),
          }),
        ]),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          body: __S(377, __c47, 1).pipe(T.HttpPayload()),
          conversationId: S.String.pipe(
            T.HttpHeader("x-amz-iotsitewise-assistant-conversation-id"),
          ),
        }),
      ).annotate({ identifier: "InvokeAssistantResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          identityType: S.optional(S.String).pipe(T.HttpQuery("identityType")),
          identityId: S.optional(S.String).pipe(T.HttpQuery("identityId")),
          resourceType: S.optional(S.String).pipe(T.HttpQuery("resourceType")),
          resourceId: S.optional(S.String).pipe(T.HttpQuery("resourceId")),
          iamArn: S.optional(S.String).pipe(T.HttpQuery("iamArn")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/access-policies" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAccessPoliciesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          identity: __S(74, __c9, 2),
          resource: __S(75, __c9, 3),
          permission: S.String,
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AccessPolicySummary" });
    case 5:
      return S.Array(__S(380, __c47, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ accessPolicySummaries: __S(381, __c47, 5), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAccessPoliciesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          targetResourceType: S.String.pipe(T.HttpQuery("targetResourceType")),
          targetResourceId: S.String.pipe(T.HttpQuery("targetResourceId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          resolveToResourceType: S.optional(S.String).pipe(T.HttpQuery("resolveToResourceType")),
          resolveToResourceId: S.optional(S.String).pipe(T.HttpQuery("resolveToResourceId")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/actions" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListActionsRequest" });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          actionId: S.optional(S.String),
          actionDefinitionId: S.optional(S.String),
          targetResource: S.optional(__S(216, __c27, 0)),
          resolveTo: S.optional(__S(218, __c27, 2)),
        }),
      ).annotate({ identifier: "ActionSummary" });
    case 1:
      return S.Array(__S(384, __c48, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ actionSummaries: __S(385, __c48, 1), nextToken: S.String }),
      ).annotate({ identifier: "ListActionsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/applications" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListApplicationsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          id: S.String,
          name: S.String,
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          workspaceName: S.String,
        }),
      ).annotate({ identifier: "ApplicationSummary" });
    case 5:
      return S.Array(__S(388, __c48, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), applications: __S(389, __c48, 5) }),
      ).annotate({ identifier: "ListApplicationsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String.pipe(T.HttpLabel("assetModelId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          assetModelVersion: S.optional(S.String).pipe(T.HttpQuery("assetModelVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/asset-models/{assetModelId}/composite-models" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAssetModelCompositeModelsRequest",
      });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          assetModelCompositeModelSummaries: __S(247, __c30, 7),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAssetModelCompositeModelsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String.pipe(T.HttpLabel("assetModelId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          filter: S.optional(S.String).pipe(T.HttpQuery("filter")),
          assetModelVersion: S.optional(S.String).pipe(T.HttpQuery("assetModelVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/asset-models/{assetModelId}/properties" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAssetModelPropertiesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ interfaceAssetModelId: S.String, interfaceAssetModelPropertyId: S.String }),
      ).annotate({ identifier: "InterfaceSummary" });
    case 3:
      return S.Array(__S(394, __c49, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          externalId: S.optional(S.String),
          name: S.String,
          dataType: S.String,
          dataTypeSpec: S.optional(S.String),
          unit: S.optional(S.String),
          type: __S(102, __c12, 6),
          assetModelCompositeModelId: S.optional(S.String),
          path: S.optional(__S(92, __c11, 4)),
          interfaceSummaries: S.optional(__S(395, __c49, 3)),
        }),
      ).annotate({
        identifier: "AssetModelPropertySummary",
      });
    case 5:
      return S.Array(__S(396, __c49, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          assetModelPropertySummaries: __S(397, __c49, 5),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAssetModelPropertiesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          assetModelTypes: S.optional(__S(26, __c3, 2)).pipe(T.HttpQuery("assetModelTypes")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          assetModelVersion: S.optional(S.String).pipe(T.HttpQuery("assetModelVersion")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/asset-models" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAssetModelsRequest" });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          externalId: S.optional(S.String),
          arn: S.String,
          name: S.String,
          assetModelType: S.optional(S.String),
          description: S.optional(S.String),
          creationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: __S(85, __c10, 5),
          version: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssetModelSummary" });
    case 1:
      return S.Array(__S(400, __c50, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ assetModelSummaries: __S(401, __c50, 1), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAssetModelsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          filter: S.optional(S.String).pipe(T.HttpQuery("filter")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/assets/{assetId}/properties" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAssetPropertiesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          externalId: S.optional(S.String),
          alias: S.optional(S.String),
          unit: S.optional(S.String),
          notification: S.optional(__S(223, __c27, 7)),
          assetCompositeModelId: S.optional(S.String),
          path: S.optional(__S(225, __c28, 1)),
        }),
      ).annotate({ identifier: "AssetPropertySummary" });
    case 5:
      return S.Array(__S(404, __c50, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          assetPropertySummaries: __S(405, __c50, 5),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAssetPropertiesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          traversalType: S.String.pipe(T.HttpQuery("traversalType")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/assets/{assetId}/assetRelationships" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAssetRelationshipsRequest",
      });
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ parentAssetId: S.optional(S.String), childAssetId: S.optional(S.String) }),
      ).annotate({ identifier: "AssetHierarchyInfo" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          hierarchyInfo: S.optional(__S(408, __c51, 0)),
          relationshipType: S.String,
        }),
      ).annotate({ identifier: "AssetRelationshipSummary" });
    case 2:
      return S.Array(__S(409, __c51, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          assetRelationshipSummaries: __S(410, __c51, 2),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAssetRelationshipsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          assetModelId: S.optional(S.String).pipe(T.HttpQuery("assetModelId")),
          filter: S.optional(S.String).pipe(T.HttpQuery("filter")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/assets" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAssetsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          externalId: S.optional(S.String),
          arn: S.String,
          name: S.String,
          assetModelId: S.String,
          creationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: __S(85, __c10, 5),
          hierarchies: __S(229, __c28, 5),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssetSummary" });
    case 6:
      return S.Array(__S(413, __c51, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ assetSummaries: __S(414, __c51, 6), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAssetsResponse" });
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          hierarchyId: S.optional(S.String).pipe(T.HttpQuery("hierarchyId")),
          traversalDirection: S.optional(S.String).pipe(T.HttpQuery("traversalDirection")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/assets/{assetId}/hierarchies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAssociatedAssetsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ assetSummaries: __S(414, __c51, 6), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAssociatedAssetsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          filter: S.optional(S.String).pipe(T.HttpQuery("filter")),
          workspaceName: S.optional(S.String).pipe(T.HttpQuery("workspaceName")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/jobs" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListBulkImportJobsRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ id: S.String, name: S.String, status: S.String })).annotate(
        { identifier: "JobSummary" },
      );
    case 4:
      return S.Array(__S(419, __c52, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ jobSummaries: __S(420, __c52, 4), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListBulkImportJobsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String.pipe(T.HttpLabel("assetModelId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/asset-models/{assetModelId}/composition-relationships",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCompositionRelationshipsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String,
          assetModelCompositeModelId: S.String,
          assetModelCompositeModelType: S.String,
        }),
      ).annotate({
        identifier: "CompositionRelationshipSummary",
      });
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(423, __c52, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          compositionRelationshipSummaries: __S(424, __c53, 0),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCompositionRelationshipsResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ assetId: S.String })).annotate({
        identifier: "AssetBindingValueFilter",
      });
    case 3:
      return S.suspend(() => S.Struct({ assetModelId: S.String })).annotate({
        identifier: "AssetModelBindingValueFilter",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          asset: S.optional(__S(426, __c53, 2)),
          assetModel: S.optional(__S(427, __c53, 3)),
          assetProperty: S.optional(__S(125, __c15, 5)),
          assetModelProperty: S.optional(__S(124, __c15, 4)),
        }),
      ).annotate({ identifier: "DataBindingValueFilter" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          dataBindingValueFilter: __S(428, __c53, 4),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/computation-models/data-binding-usages" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListComputationModelDataBindingUsagesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          assetModelProperty: S.optional(__S(124, __c15, 4)),
          assetProperty: S.optional(__S(125, __c15, 5)),
        }),
      ).annotate({ identifier: "DataBindingValue" });
    case 7:
      return S.suspend(() => S.Struct({ value: __S(430, __c53, 6) })).annotate({
        identifier: "MatchedDataBinding",
      });
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          computationModelIds: __S(11, __c1, 3),
          matchedDataBinding: __S(431, __c53, 7),
        }),
      ).annotate({
        identifier: "ComputationModelDataBindingUsageSummary",
      });
    case 1:
      return S.Array(__S(432, __c54, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          dataBindingUsageSummaries: __S(433, __c54, 1),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListComputationModelDataBindingUsagesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          computationModelId: S.String.pipe(T.HttpLabel("computationModelId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/computation-models/{computationModelId}/resolve-to-resources",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListComputationModelResolveToResourcesRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ resolveTo: S.optional(__S(218, __c27, 2)) })).annotate({
        identifier: "ComputationModelResolveToResourceSummary",
      });
    case 5:
      return S.Array(__S(436, __c54, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          computationModelResolveToResourceSummaries: __S(437, __c54, 5),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListComputationModelResolveToResourcesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          computationModelType: S.optional(S.String).pipe(T.HttpQuery("computationModelType")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/computation-models" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListComputationModelsRequest",
      });
  }
}
function __c55(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          name: S.String,
          description: S.optional(S.String),
          type: S.String,
          creationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: __S(85, __c10, 5),
          version: S.String,
        }),
      ).annotate({ identifier: "ComputationModelSummary" });
    case 1:
      return S.Array(__S(440, __c55, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          computationModelSummaries: __S(441, __c55, 1),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListComputationModelsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          projectId: S.String.pipe(T.HttpQuery("projectId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/dashboards" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDashboardsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.String,
          description: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DashboardSummary" });
    case 5:
      return S.Array(__S(444, __c55, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ dashboardSummaries: __S(445, __c55, 5), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDashboardsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          workspaceName: S.String.pipe(T.HttpQuery("workspaceName")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/datasets/{datasetId}/data-segment-relationships" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDatasetDataSegmentRelationshipsRequest",
      });
  }
}
function __c56(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          targetDatasetId: S.String,
          sourceDatasetId: S.String,
          timeSeriesId: S.String,
          startTimestamp: __S(4, __c0, 4),
          endTimestamp: __S(4, __c0, 4),
        }),
      ).annotate({
        identifier: "DataSegmentRelationshipSummary",
      });
    case 1:
      return S.Array(__S(448, __c56, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          dataSegmentRelationshipSummaries: __S(449, __c56, 1),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDatasetDataSegmentRelationshipsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          workspaceName: S.String.pipe(T.HttpQuery("workspaceName")),
          datasetVersion: S.optional(S.String).pipe(T.HttpQuery("datasetVersion")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/datasets/{datasetId}/data-segments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDatasetDataSegmentsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sourceDatasetId: S.String,
          timeSeriesId: S.String,
          startTimestamp: __S(4, __c0, 4),
          endTimestamp: __S(4, __c0, 4),
          alias: S.String,
          dataType: S.String,
          enrichment: S.optional(__S(275, __c34, 3)),
        }),
      ).annotate({ identifier: "DataSegmentSummary" });
    case 5:
      return S.Array(__S(452, __c56, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ dataSegments: __S(453, __c56, 5), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDatasetDataSegmentsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          filter: S.optional(S.String).pipe(T.HttpQuery("filter")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceName}/dataset-export-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDatasetExportJobsRequest",
      });
  }
}
function __c57(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          status: S.String,
          startedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          completedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          destinationS3Uri: S.String,
        }),
      ).annotate({ identifier: "ExportJobSummary" });
    case 1:
      return S.Array(__S(456, __c57, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ jobs: __S(457, __c57, 1), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDatasetExportJobsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sourceType: S.String.pipe(T.HttpQuery("sourceType")),
          workspaceName: S.optional(S.String).pipe(T.HttpQuery("workspaceName")),
          datasetType: S.optional(S.String).pipe(T.HttpQuery("datasetType")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/datasets" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDatasetsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          name: S.String,
          description: S.String,
          sourceType: S.optional(S.String),
          datasetType: S.optional(S.String),
          creationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: __S(85, __c10, 5),
          enrichmentStatus: S.optional(__S(276, __c34, 4)),
        }),
      ).annotate({ identifier: "DatasetSummary" });
    case 5:
      return S.Array(__S(460, __c57, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          datasetSummaries: __S(461, __c57, 5),
          nextToken: S.optional(S.String),
          workspaceName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListDatasetsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          datasetId: S.optional(S.String).pipe(T.HttpQuery("datasetId")),
          propertyAlias: S.optional(S.String).pipe(T.HttpQuery("propertyAlias")),
          timeSeriesId: S.optional(S.String).pipe(T.HttpQuery("timeSeriesId")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          jobType: S.optional(S.String).pipe(T.HttpQuery("jobType")),
          startDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("startDate"),
          ),
          endDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("endDate"),
          ),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceName}/enrichment-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEnrichmentJobsRequest",
      });
  }
}
function __c58(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          status: S.String,
          workspaceName: S.String,
          jobType: S.String,
          datasetId: S.String,
          propertyAlias: S.optional(S.String),
          timeSeriesId: S.optional(S.String),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "EnrichmentJobSummary" });
    case 1:
      return S.Array(__S(464, __c58, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ jobs: __S(465, __c58, 1), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListEnrichmentJobsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          targetResourceType: S.String.pipe(T.HttpQuery("targetResourceType")),
          targetResourceId: S.String.pipe(T.HttpQuery("targetResourceId")),
          resolveToResourceType: S.optional(S.String).pipe(T.HttpQuery("resolveToResourceType")),
          resolveToResourceId: S.optional(S.String).pipe(T.HttpQuery("resolveToResourceId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          actionType: S.optional(S.String).pipe(T.HttpQuery("actionType")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/executions" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListExecutionsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          executionId: S.String,
          actionType: S.optional(S.String),
          targetResource: __S(216, __c27, 0),
          targetResourceVersion: S.String,
          resolveTo: S.optional(__S(218, __c27, 2)),
          executionStartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          executionEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          executionStatus: __S(88, __c11, 0),
          executionEntityVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExecutionSummary" });
    case 5:
      return S.Array(__S(468, __c58, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ executionSummaries: __S(469, __c58, 5), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListExecutionsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/20200301/gateways" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListGatewaysRequest" });
  }
}
function __c59(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          gatewayName: S.String,
          gatewayPlatform: S.optional(__S(156, __c19, 4)),
          gatewayVersion: S.optional(S.String),
          gatewayCapabilitySummaries: S.optional(__S(290, __c36, 2)),
          creationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "GatewaySummary" });
    case 1:
      return S.Array(__S(472, __c59, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ gatewaySummaries: __S(473, __c59, 1), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListGatewaysResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          interfaceAssetModelId: S.String.pipe(T.HttpLabel("interfaceAssetModelId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/interface/{interfaceAssetModelId}/asset-models" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListInterfaceRelationshipsRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ id: S.String })).annotate({
        identifier: "InterfaceRelationshipSummary",
      });
    case 5:
      return S.Array(__S(476, __c59, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          interfaceRelationshipSummaries: __S(477, __c59, 5),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListInterfaceRelationshipsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          pipelineName: S.String.pipe(T.HttpLabel("pipelineName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          state: S.optional(S.String).pipe(T.HttpQuery("state")),
          startTimeAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("startTimeAfter"),
          ),
          startTimeBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("startTimeBefore"),
          ),
          endTimeAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("endTimeAfter"),
          ),
          endTimeBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("endTimeBefore"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/workspaces/{workspaceName}/pipelines/{pipelineName}/executions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPipelineExecutionsRequest",
      });
  }
}
function __c60(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          pipelineExecutionId: S.String,
          pipelineVersion: S.String,
          status: __S(301, __c37, 5),
          executionPriority: S.optional(S.Number),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "PipelineExecutionSummary" });
    case 1:
      return S.Array(__S(480, __c60, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          pipelineExecutionSummaries: __S(481, __c60, 1),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPipelineExecutionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceName}/pipelines" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListPipelinesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.String,
          description: S.optional(S.String),
          pipelineArn: S.String,
          version: S.String,
          status: __S(164, __c20, 4),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "PipelineSummary" });
    case 5:
      return S.Array(__S(484, __c60, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ pipelineSummaries: __S(485, __c60, 5), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListPipelinesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/portals" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListPortalsRequest" });
  }
}
function __c61(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.String,
          description: S.optional(S.String),
          startUrl: S.String,
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          roleArn: S.optional(S.String),
          status: __S(171, __c21, 3),
          portalType: S.optional(S.String),
        }),
      ).annotate({ identifier: "PortalSummary" });
    case 1:
      return S.Array(__S(488, __c61, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          portalSummaries: S.optional(__S(489, __c61, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListPortalsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          projectId: S.String.pipe(T.HttpLabel("projectId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/projects/{projectId}/assets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListProjectAssetsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ assetIds: __S(11, __c1, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListProjectAssetsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          portalId: S.String.pipe(T.HttpQuery("portalId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/projects" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListProjectsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ projectSummaries: __S(445, __c55, 5), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListProjectsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          filter: S.optional(S.String).pipe(T.HttpQuery("filter")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceName}/queries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListQueriesRequest" });
  }
}
function __c62(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          queryId: S.String,
          status: S.String,
          submittedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          completedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "QuerySummary" });
    case 1:
      return S.Array(__S(496, __c62, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ queries: __S(497, __c62, 1), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListQueriesResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          statusFilter: S.optional(__S(26, __c3, 2)),
          startedAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startedBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          groupIdFilter: S.optional(__S(11, __c1, 3)),
          searchTypeFilter: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({ identifier: "ListSearchesFilters" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          listSearchesFilters: S.optional(__S(499, __c62, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceName}/searches/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSearchesRequest" });
    case 5:
      return S.Array(__S(320, __c40, 0));
    case 6:
      return S.suspend(() =>
        S.Struct({ searchSummaries: __S(501, __c62, 5), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSearchesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpQuery("resourceArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c63(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(76, __c9, 4)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceName}/tasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTasksRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          taskName: S.String,
          description: S.optional(S.String),
          taskArn: S.String,
          version: S.String,
          status: __S(164, __c20, 4),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "TaskSummary" });
    case 3:
      return S.Array(__S(506, __c63, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ taskSummaries: __S(507, __c63, 3), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTasksResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          assetId: S.optional(S.String).pipe(T.HttpQuery("assetId")),
          aliasPrefix: S.optional(S.String).pipe(T.HttpQuery("aliasPrefix")),
          timeSeriesType: S.optional(S.String).pipe(T.HttpQuery("timeSeriesType")),
          workspaceName: S.optional(S.String).pipe(T.HttpQuery("workspaceName")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/timeseries" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTimeSeriesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          assetId: S.optional(S.String),
          propertyId: S.optional(S.String),
          alias: S.optional(S.String),
          timeSeriesId: S.String,
          dataType: S.String,
          dataTypeSpec: S.optional(S.String),
          timeSeriesCreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          timeSeriesLastUpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          timeSeriesArn: S.String,
        }),
      ).annotate({ identifier: "TimeSeriesSummary" });
    case 7:
      return S.Array(__S(510, __c63, 6));
  }
}
function __c64(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TimeSeriesSummaries: __S(511, __c63, 7),
          nextToken: S.optional(S.String),
          workspaceName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListTimeSeriesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/workspaces" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListWorkspacesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          arn: S.String,
          status: __S(186, __c23, 2),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "WorkspaceSummary" });
    case 3:
      return S.Array(__S(514, __c64, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ workspaceSummaries: __S(515, __c64, 3), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListWorkspacesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          matchByPropertyName: S.optional(S.Boolean),
          createMissingProperty: S.optional(S.Boolean),
          overrides: S.optional(__S(258, __c32, 2)),
        }),
      ).annotate({
        identifier: "PropertyMappingConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String.pipe(T.HttpLabel("assetModelId")),
          interfaceAssetModelId: S.String.pipe(T.HttpLabel("interfaceAssetModelId")),
          propertyMappingConfiguration: __S(517, __c64, 5),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/asset-models/{assetModelId}/interface/{interfaceAssetModelId}/asset-model-interface-relationship",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutAssetModelInterfaceRelationshipRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ encryptionType: S.String, kmsKeyId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configuration/account/encryption" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutDefaultEncryptionConfigurationRequest",
      });
  }
}
function __c65(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ loggingOptions: __S(295, __c36, 7), workspaceName: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/logging" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutLoggingOptionsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          storageType: S.String,
          multiLayerStorage: S.optional(__S(323, __c40, 3)),
          disassociatedDataStorage: S.optional(S.String),
          retentionPeriod: S.optional(__S(324, __c40, 4)),
          warmTier: S.optional(S.String),
          warmTierRetentionPeriod: S.optional(__S(324, __c40, 4)),
          disallowIngestNullNaN: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configuration/account/storage" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutStorageConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          storageType: S.String,
          multiLayerStorage: S.optional(__S(323, __c40, 3)),
          disassociatedDataStorage: S.optional(S.String),
          retentionPeriod: S.optional(__S(324, __c40, 4)),
          configurationStatus: __S(282, __c35, 2),
          warmTier: S.optional(S.String),
          warmTierRetentionPeriod: S.optional(__S(324, __c40, 4)),
          disallowIngestNullNaN: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "PutStorageConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          pipelineName: S.String.pipe(T.HttpLabel("pipelineName")),
          executionEnvironmentVariableOverrides: S.optional(__S(303, __c37, 7)),
          executionMountOverrides: S.optional(__S(305, __c38, 1)),
          executionPriority: S.optional(S.Number),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/workspaces/{workspaceName}/pipelines/{pipelineName}/executions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartPipelineExecutionRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ pipelineExecutionId: S.String })).annotate({
        identifier: "StartPipelineExecutionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          queryStatement: SensitiveString,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceName}/queries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartQueryRequest" });
    case 6:
      return S.Array(__S(140, __c17, 4));
    case 7:
      return S.suspend(() =>
        S.Struct({
          timeSeriesIds: S.optional(__S(11, __c1, 3)),
          datasetIds: S.optional(__S(11, __c1, 3)),
          timeIntervals: S.optional(__S(526, __c65, 6)),
        }),
      ).annotate({ identifier: "SearchFilters" });
  }
}
function __c66(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          queryStatement: SensitiveString,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          searchType: S.optional(S.String),
          searchFilters: S.optional(__S(527, __c65, 7)),
          groupId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceName}/searches" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartSearchRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          searchId: S.String,
          workspaceName: S.String,
          status: S.String,
          groupId: S.optional(S.String),
        }),
      ).annotate({ identifier: "StartSearchResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpQuery("resourceArn")),
          tags: __S(76, __c9, 4),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/tags" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpQuery("resourceArn")),
          tagKeys: __S(11, __c1, 3).pipe(T.HttpQuery("tagKeys")),
        }).pipe(T.all(T.Http({ method: "DELETE", uri: "/tags" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          accessPolicyId: S.String.pipe(T.HttpLabel("accessPolicyId")),
          accessPolicyIdentity: __S(74, __c9, 2),
          accessPolicyResource: __S(75, __c9, 3),
          accessPolicyPermission: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/access-policies/{accessPolicyId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAccessPolicyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          assetExternalId: S.optional(S.String),
          assetName: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          assetDescription: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/assets/{assetId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateAssetRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String.pipe(T.HttpLabel("assetModelId")),
          assetModelExternalId: S.optional(S.String),
          assetModelName: S.String,
          assetModelDescription: S.optional(S.String),
          assetModelProperties: S.optional(__S(241, __c30, 1)),
          assetModelHierarchies: S.optional(__S(243, __c30, 3)),
          assetModelCompositeModels: S.optional(__S(245, __c30, 5)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ifMatch: S.optional(S.String).pipe(T.HttpHeader("If-Match")),
          ifNoneMatch: S.optional(S.String).pipe(T.HttpHeader("If-None-Match")),
          matchForVersionType: S.optional(S.String).pipe(T.HttpHeader("Match-For-Version-Type")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/asset-models/{assetModelId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAssetModelRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.String.pipe(T.HttpLabel("assetModelId")),
          assetModelCompositeModelId: S.String.pipe(T.HttpLabel("assetModelCompositeModelId")),
          assetModelCompositeModelExternalId: S.optional(S.String),
          assetModelCompositeModelDescription: S.optional(S.String),
          assetModelCompositeModelName: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          assetModelCompositeModelProperties: S.optional(__S(241, __c30, 1)),
          ifMatch: S.optional(S.String).pipe(T.HttpHeader("If-Match")),
          ifNoneMatch: S.optional(S.String).pipe(T.HttpHeader("If-None-Match")),
          matchForVersionType: S.optional(S.String).pipe(T.HttpHeader("Match-For-Version-Type")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAssetModelCompositeModelRequest",
      });
  }
}
function __c67(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          assetModelCompositeModelPath: __S(112, __c14, 0),
          assetModelStatus: __S(85, __c10, 5),
          assetModelId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateAssetModelCompositeModelResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          propertyId: S.String.pipe(T.HttpLabel("propertyId")),
          propertyAlias: S.optional(S.String),
          propertyNotificationState: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          propertyUnit: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/assets/{assetId}/properties/{propertyId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAssetPropertyRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          computationModelId: S.String.pipe(T.HttpLabel("computationModelId")),
          computationModelName: S.String,
          computationModelDescription: S.optional(S.String),
          computationModelConfiguration: __S(123, __c15, 3),
          computationModelDataBinding: __S(128, __c16, 0),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/computation-models/{computationModelId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateComputationModelRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          dashboardId: S.String.pipe(T.HttpLabel("dashboardId")),
          dashboardName: S.String,
          dashboardDescription: S.optional(S.String),
          dashboardDefinition: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/dashboards/{dashboardId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDashboardRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          workspaceName: S.optional(S.String),
          datasetName: S.String,
          datasetDescription: S.optional(S.String),
          datasetConfig: S.optional(__S(134, __c16, 6)),
          metadata: S.optional(__S(76, __c9, 4)),
          datasetSource: __S(137, __c17, 1),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/datasets/{datasetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDatasetRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.optional(S.String),
          datasetArn: S.optional(S.String),
          datasetStatus: S.optional(__S(85, __c10, 5)),
        }),
      ).annotate({ identifier: "UpdateDatasetResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          gatewayName: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/20200301/gateways/{gatewayId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateGatewayRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          capabilityNamespace: S.String,
          capabilityConfiguration: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/20200301/gateways/{gatewayId}/capability" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateGatewayCapabilityConfigurationRequest",
      });
  }
}
function __c68(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ capabilityNamespace: S.String, capabilitySyncStatus: S.String }),
      ).annotate({
        identifier: "UpdateGatewayCapabilityConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          pipelineName: S.String.pipe(T.HttpLabel("pipelineName")),
          description: S.optional(S.String),
          environmentVariables: S.optional(__S(159, __c19, 7)),
          computations: S.optional(__S(161, __c20, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workspaces/{workspaceName}/pipelines/{pipelineName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdatePipelineRequest" });
    case 2:
      return S.suspend(() => S.Struct({ version: S.String, status: __S(164, __c20, 4) })).annotate({
        identifier: "UpdatePipelineResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), file: S.optional(__S(166, __c20, 6)) }),
      ).annotate({ identifier: "Image" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          portalId: S.String.pipe(T.HttpLabel("portalId")),
          portalName: S.String,
          portalDescription: S.optional(S.String),
          portalContactEmail: SensitiveString,
          portalLogoImage: S.optional(__S(547, __c68, 3)),
          roleArn: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          notificationSenderEmail: S.optional(SensitiveString),
          alarms: S.optional(__S(167, __c20, 7)),
          portalType: S.optional(S.String),
          portalTypeConfiguration: S.optional(__S(169, __c21, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/portals/{portalId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdatePortalRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          projectId: S.String.pipe(T.HttpLabel("projectId")),
          projectName: S.String,
          projectDescription: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/projects/{projectId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateProjectRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          taskName: S.String.pipe(T.HttpLabel("taskName")),
          description: S.optional(S.String),
          taskConfiguration: S.optional(__S(181, __c22, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workspaces/{workspaceName}/tasks/{taskName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateTaskRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workspaceName: S.String.pipe(T.HttpLabel("workspaceName")),
          workspaceDescription: S.optional(S.String),
          encryptionConfiguration: S.optional(__S(184, __c23, 0)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workspaces/{workspaceName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateWorkspaceRequest" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
