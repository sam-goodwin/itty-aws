import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as stream from "effect/Stream";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
const ns = /*@__PURE__*/ T.XmlNamespace("http://monitoring.amazonaws.com/doc/2014-03-28/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "CloudWatch Logs",
  serviceShapeName: "Logs_20140328",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "logs" });
const ver = /*@__PURE__*/ T.ServiceVersion("2014-03-28");
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
              `https://logs-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (Region === "us-gov-east-1") {
              return e("https://logs.us-gov-east-1.amazonaws.com");
            }
            if (Region === "us-gov-west-1") {
              return e("https://logs.us-gov-west-1.amazonaws.com");
            }
            return e(`https://logs-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://logs.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://logs.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()("AccessDeniedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()("ConflictException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withConflictError) {}
export class DataAlreadyAcceptedException
  extends /*@__PURE__*/ S.TaggedError<DataAlreadyAcceptedException>()(
    "DataAlreadyAcceptedException",
    {
      expectedSequenceToken: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidOperationException
  extends /*@__PURE__*/ S.TaggedError<InvalidOperationException>()("InvalidOperationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withBadRequestError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()("InvalidParameterException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withBadRequestError) {}
export class InvalidSequenceTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidSequenceTokenException>()(
    "InvalidSequenceTokenException",
    {
      expectedSequenceToken: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()("LimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withQuotaError) {}
export class MalformedQueryException
  extends /*@__PURE__*/ S.TaggedError<MalformedQueryException>()("MalformedQueryException", {
    queryCompileError: /*@__PURE__*/ S.optional(
      /*@__PURE__*/ S.suspend(() => QueryCompileError).annotate({
        identifier: "QueryCompileError",
      }),
    ),
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withBadRequestError) {}
export class OperationAbortedException
  extends /*@__PURE__*/ S.TaggedError<OperationAbortedException>()("OperationAbortedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withConflictError, C.withRetryableError) {}
export class ResourceAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsException>()(
    "ResourceAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withAlreadyExistsError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withNotFoundError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withQuotaError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withServerError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()("ThrottlingException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withThrottlingError, C.withRetryableError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UnrecognizedClientException
  extends /*@__PURE__*/ S.TaggedError<UnrecognizedClientException>()(
    "UnrecognizedClientException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withAuthError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()("ValidationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withBadRequestError) {}
export type LogGroupName = string;
export type KmsKeyId = string;
export type ResourceIdentifier = string;
export interface AssociateKmsKeyRequest {
  logGroupName?: string;
  kmsKeyId: string;
  resourceIdentifier?: string;
}
const AssociateKmsKeyRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AssociateKmsKeyRequest>;
export interface AssociateKmsKeyResponse {}
const AssociateKmsKeyResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AssociateKmsKeyResponse>;
export type Arn = string;
export type DataSourceName = string;
export type DataSourceType = string;
export interface DataSource {
  name: string;
  type?: string;
}
const DataSource = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<DataSource>;
export interface AssociateSourceToS3TableIntegrationRequest {
  integrationArn: string;
  dataSource: DataSource;
}
const AssociateSourceToS3TableIntegrationRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AssociateSourceToS3TableIntegrationRequest>;
export type S3TableIntegrationSourceIdentifier = string;
export interface AssociateSourceToS3TableIntegrationResponse {
  identifier?: string;
}
const AssociateSourceToS3TableIntegrationResponse = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AssociateSourceToS3TableIntegrationResponse>;
export type ExportTaskId = string;
export interface CancelExportTaskRequest {
  taskId: string;
}
const CancelExportTaskRequest = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<CancelExportTaskRequest>;
export interface CancelExportTaskResponse {}
const CancelExportTaskResponse =
  AssociateKmsKeyResponse as any as S.Schema<CancelExportTaskResponse>;
export type ImportId = string;
export interface CancelImportTaskRequest {
  importId: string;
}
const CancelImportTaskRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<CancelImportTaskRequest>;
export type StoredBytes = number;
export interface ImportStatistics {
  bytesImported?: number;
}
const ImportStatistics = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<ImportStatistics>;
export type ImportStatus = "IN_PROGRESS" | "CANCELLED" | "COMPLETED" | "FAILED" | (string & {});
const ImportStatus = S.String;

export interface CancelImportTaskResponse {
  importId?: string;
  importStatistics?: ImportStatistics;
  importStatus?: ImportStatus;
  creationTime?: number;
  lastUpdatedTime?: number;
}
const CancelImportTaskResponse = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<CancelImportTaskResponse>;
export type DeliverySourceName = string;
export type FieldHeader = string;
export type RecordFields = string[];
const RecordFields = /*@__PURE__*/ __L.at(__c1, 1);
export type FieldDelimiter = string;
export type DeliverySuffixPath = string;
export interface S3DeliveryConfiguration {
  suffixPath?: string;
  enableHiveCompatiblePath?: boolean;
}
const S3DeliveryConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<S3DeliveryConfiguration>;
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
const Tags = /*@__PURE__*/ __L.at(__c1, 3);
export interface CreateDeliveryRequest {
  deliverySourceName: string;
  deliveryDestinationArn: string;
  recordFields?: string[];
  fieldDelimiter?: string;
  s3DeliveryConfiguration?: S3DeliveryConfiguration;
  tags?: { [key: string]: string | undefined };
}
const CreateDeliveryRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<CreateDeliveryRequest>;
export type DeliveryId = string;
export type DeliveryDestinationType = "S3" | "CWL" | "FH" | "XRAY" | (string & {});
const DeliveryDestinationType = S.String;

export interface Delivery {
  id?: string;
  arn?: string;
  deliverySourceName?: string;
  deliveryDestinationArn?: string;
  deliveryDestinationType?: DeliveryDestinationType;
  recordFields?: string[];
  fieldDelimiter?: string;
  s3DeliveryConfiguration?: S3DeliveryConfiguration;
  tags?: { [key: string]: string | undefined };
}
const Delivery = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<Delivery>;
export interface CreateDeliveryResponse {
  delivery?: Delivery;
}
const CreateDeliveryResponse = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateDeliveryResponse>;
export type ExportTaskName = string;
export type LogStreamName = string;
export type ExportDestinationBucket = string;
export type ExportDestinationPrefix = string;
export interface CreateExportTaskRequest {
  taskName?: string;
  logGroupName: string;
  logStreamNamePrefix?: string;
  from: number;
  to: number;
  destination: string;
  destinationPrefix?: string;
}
const CreateExportTaskRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CreateExportTaskRequest>;
export interface CreateExportTaskResponse {
  taskId?: string;
}
const CreateExportTaskResponse = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<CreateExportTaskResponse>;
export type RoleArn = string;
export interface ImportFilter {
  startEventTime?: number;
  endEventTime?: number;
}
const ImportFilter = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<ImportFilter>;
export interface CreateImportTaskRequest {
  importSourceArn: string;
  importRoleArn: string;
  importFilter?: ImportFilter;
}
const CreateImportTaskRequest = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CreateImportTaskRequest>;
export interface CreateImportTaskResponse {
  importId?: string;
  importDestinationArn?: string;
  creationTime?: number;
}
const CreateImportTaskResponse = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<CreateImportTaskResponse>;
export type LogGroupArn = string;
export type LogGroupArnList = string[];
const LogGroupArnList = RecordFields as any as S.Schema<LogGroupArnList>;
export type DetectorName = string;
export type EvaluationFrequency =
  | "ONE_MIN"
  | "FIVE_MIN"
  | "TEN_MIN"
  | "FIFTEEN_MIN"
  | "THIRTY_MIN"
  | "ONE_HOUR"
  | (string & {});
const EvaluationFrequency = S.String;

export type FilterPattern = string;
export type DetectorKmsKeyArn = string;
export type AnomalyVisibilityTime = number;
export interface CreateLogAnomalyDetectorRequest {
  logGroupArnList: string[];
  detectorName?: string;
  evaluationFrequency?: EvaluationFrequency;
  filterPattern?: string;
  kmsKeyId?: string;
  anomalyVisibilityTime?: number;
  tags?: { [key: string]: string | undefined };
}
const CreateLogAnomalyDetectorRequest = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<CreateLogAnomalyDetectorRequest>;
export type AnomalyDetectorArn = string;
export interface CreateLogAnomalyDetectorResponse {
  anomalyDetectorArn?: string;
}
const CreateLogAnomalyDetectorResponse = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<CreateLogAnomalyDetectorResponse>;
export type LogGroupClass = "STANDARD" | "INFREQUENT_ACCESS" | "DELIVERY" | (string & {});
const LogGroupClass = S.String;

export type DeletionProtectionEnabled = boolean;
export interface CreateLogGroupRequest {
  logGroupName: string;
  kmsKeyId?: string;
  tags?: { [key: string]: string | undefined };
  logGroupClass?: LogGroupClass;
  deletionProtectionEnabled?: boolean;
}
const CreateLogGroupRequest = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<CreateLogGroupRequest>;
export interface CreateLogGroupResponse {}
const CreateLogGroupResponse = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<CreateLogGroupResponse>;
export interface CreateLogStreamRequest {
  logGroupName: string;
  logStreamName: string;
}
const CreateLogStreamRequest = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CreateLogStreamRequest>;
export interface CreateLogStreamResponse {}
const CreateLogStreamResponse = AssociateKmsKeyResponse as any as S.Schema<CreateLogStreamResponse>;
export type LookupTableName = string;
export type LookupTableDescription = string;
export type TableBody = string;
export type QueryId = string;
export interface CreateLookupTableRequest {
  lookupTableName: string;
  description?: string;
  tableBody?: string;
  queryId?: string;
  kmsKeyId?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateLookupTableRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<CreateLookupTableRequest>;
export interface CreateLookupTableResponse {
  lookupTableArn?: string;
  createdAt?: number;
}
const CreateLookupTableResponse = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<CreateLookupTableResponse>;
export type ScheduledQueryName = string;
export type ScheduledQueryDescription = string;
export type QueryLanguage = "CWLI" | "SQL" | "PPL" | (string & {});
const QueryLanguage = S.String;

export type QueryString = string;
export type LogGroupIdentifier = string;
export type ScheduledQueryLogGroupIdentifiers = string[];
const ScheduledQueryLogGroupIdentifiers =
  RecordFields as any as S.Schema<ScheduledQueryLogGroupIdentifiers>;
export type ScheduleExpression = string;
export type ScheduleTimezone = string;
export type StartTimeOffset = number;
export type EndTimeOffset = number;
export type S3Uri = string;
export type AccountId = string;
export interface S3Configuration {
  destinationIdentifier: string;
  roleArn: string;
  ownerAccountId?: string;
  kmsKeyId?: string;
}
const S3Configuration = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<S3Configuration>;
export interface LookupTableConfiguration {
  tableName: string;
  roleArn: string;
  description?: string;
  kmsKeyId?: string;
  tags?: { [key: string]: string | undefined };
}
const LookupTableConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<LookupTableConfiguration>;
export interface DestinationConfiguration {
  s3Configuration?: S3Configuration;
  lookupTableConfiguration?: LookupTableConfiguration;
}
const DestinationConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<DestinationConfiguration>;
export type ScheduledQueryState = "ENABLED" | "DISABLED" | (string & {});
const ScheduledQueryState = S.String;

export interface CreateScheduledQueryRequest {
  name: string;
  description?: string;
  queryLanguage: QueryLanguage;
  queryString: string;
  logGroupIdentifiers?: string[];
  scheduleExpression: string;
  timezone?: string;
  startTimeOffset?: number;
  endTimeOffset?: number;
  destinationConfiguration?: DestinationConfiguration;
  scheduleStartTime?: number;
  scheduleEndTime?: number;
  executionRoleArn: string;
  state?: ScheduledQueryState;
  tags?: { [key: string]: string | undefined };
}
const CreateScheduledQueryRequest = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<CreateScheduledQueryRequest>;
export interface CreateScheduledQueryResponse {
  scheduledQueryArn?: string;
  state?: ScheduledQueryState;
}
const CreateScheduledQueryResponse = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateScheduledQueryResponse>;
export type PolicyName = string;
export type PolicyType =
  | "DATA_PROTECTION_POLICY"
  | "SUBSCRIPTION_FILTER_POLICY"
  | "FIELD_INDEX_POLICY"
  | "TRANSFORMER_POLICY"
  | "METRIC_EXTRACTION_POLICY"
  | (string & {});
const PolicyType = S.String;

export interface DeleteAccountPolicyRequest {
  policyName: string;
  policyType: PolicyType;
}
const DeleteAccountPolicyRequest = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<DeleteAccountPolicyRequest>;
export interface DeleteAccountPolicyResponse {}
const DeleteAccountPolicyResponse = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<DeleteAccountPolicyResponse>;
export interface DeleteDataProtectionPolicyRequest {
  logGroupIdentifier: string;
}
const DeleteDataProtectionPolicyRequest = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<DeleteDataProtectionPolicyRequest>;
export interface DeleteDataProtectionPolicyResponse {}
const DeleteDataProtectionPolicyResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteDataProtectionPolicyResponse>;
export interface DeleteDeliveryRequest {
  id: string;
}
const DeleteDeliveryRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<DeleteDeliveryRequest>;
export interface DeleteDeliveryResponse {}
const DeleteDeliveryResponse = CreateLogGroupResponse as any as S.Schema<DeleteDeliveryResponse>;
export type DeliveryDestinationName = string;
export interface DeleteDeliveryDestinationRequest {
  name: string;
}
const DeleteDeliveryDestinationRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<DeleteDeliveryDestinationRequest>;
export interface DeleteDeliveryDestinationResponse {}
const DeleteDeliveryDestinationResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteDeliveryDestinationResponse>;
export interface DeleteDeliveryDestinationPolicyRequest {
  deliveryDestinationName: string;
}
const DeleteDeliveryDestinationPolicyRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<DeleteDeliveryDestinationPolicyRequest>;
export interface DeleteDeliveryDestinationPolicyResponse {}
const DeleteDeliveryDestinationPolicyResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteDeliveryDestinationPolicyResponse>;
export interface DeleteDeliverySourceRequest {
  name: string;
}
const DeleteDeliverySourceRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<DeleteDeliverySourceRequest>;
export interface DeleteDeliverySourceResponse {}
const DeleteDeliverySourceResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteDeliverySourceResponse>;
export type DestinationName = string;
export interface DeleteDestinationRequest {
  destinationName: string;
}
const DeleteDestinationRequest = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<DeleteDestinationRequest>;
export interface DeleteDestinationResponse {}
const DeleteDestinationResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteDestinationResponse>;
export interface DeleteIndexPolicyRequest {
  logGroupIdentifier: string;
}
const DeleteIndexPolicyRequest = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<DeleteIndexPolicyRequest>;
export interface DeleteIndexPolicyResponse {}
const DeleteIndexPolicyResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteIndexPolicyResponse>;
export type IntegrationName = string;
export type Force = boolean;
export interface DeleteIntegrationRequest {
  integrationName: string;
  force?: boolean;
}
const DeleteIntegrationRequest = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<DeleteIntegrationRequest>;
export interface DeleteIntegrationResponse {}
const DeleteIntegrationResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteIntegrationResponse>;
export interface DeleteLogAnomalyDetectorRequest {
  anomalyDetectorArn: string;
}
const DeleteLogAnomalyDetectorRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<DeleteLogAnomalyDetectorRequest>;
export interface DeleteLogAnomalyDetectorResponse {}
const DeleteLogAnomalyDetectorResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteLogAnomalyDetectorResponse>;
export interface DeleteLogGroupRequest {
  logGroupName: string;
}
const DeleteLogGroupRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<DeleteLogGroupRequest>;
export interface DeleteLogGroupResponse {}
const DeleteLogGroupResponse = CreateLogGroupResponse as any as S.Schema<DeleteLogGroupResponse>;
export interface DeleteLogStreamRequest {
  logGroupName: string;
  logStreamName: string;
}
const DeleteLogStreamRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<DeleteLogStreamRequest>;
export interface DeleteLogStreamResponse {}
const DeleteLogStreamResponse = AssociateKmsKeyResponse as any as S.Schema<DeleteLogStreamResponse>;
export interface DeleteLookupTableRequest {
  lookupTableArn: string;
}
const DeleteLookupTableRequest = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<DeleteLookupTableRequest>;
export interface DeleteLookupTableResponse {}
const DeleteLookupTableResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteLookupTableResponse>;
export type FilterName = string;
export interface DeleteMetricFilterRequest {
  logGroupName: string;
  filterName: string;
}
const DeleteMetricFilterRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<DeleteMetricFilterRequest>;
export interface DeleteMetricFilterResponse {}
const DeleteMetricFilterResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteMetricFilterResponse>;
export interface DeleteQueryDefinitionRequest {
  queryDefinitionId: string;
}
const DeleteQueryDefinitionRequest = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<DeleteQueryDefinitionRequest>;
export type Success = boolean;
export interface DeleteQueryDefinitionResponse {
  success?: boolean;
}
const DeleteQueryDefinitionResponse = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<DeleteQueryDefinitionResponse>;
export type ExpectedRevisionId = string;
export interface DeleteResourcePolicyRequest {
  policyName?: string;
  resourceArn?: string;
  expectedRevisionId?: string;
}
const DeleteResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<DeleteResourcePolicyRequest>;
export interface DeleteResourcePolicyResponse {}
const DeleteResourcePolicyResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteResourcePolicyResponse>;
export interface DeleteRetentionPolicyRequest {
  logGroupName: string;
}
const DeleteRetentionPolicyRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<DeleteRetentionPolicyRequest>;
export interface DeleteRetentionPolicyResponse {}
const DeleteRetentionPolicyResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteRetentionPolicyResponse>;
export type ScheduledQueryIdentifier = string;
export interface DeleteScheduledQueryRequest {
  identifier: string;
}
const DeleteScheduledQueryRequest = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<DeleteScheduledQueryRequest>;
export interface DeleteScheduledQueryResponse {}
const DeleteScheduledQueryResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteScheduledQueryResponse>;
export interface DeleteSubscriptionFilterRequest {
  logGroupName: string;
  filterName: string;
}
const DeleteSubscriptionFilterRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<DeleteSubscriptionFilterRequest>;
export interface DeleteSubscriptionFilterResponse {}
const DeleteSubscriptionFilterResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteSubscriptionFilterResponse>;
export type VpcEndpointId = string;
export interface DeleteSyslogConfigurationRequest {
  logGroupIdentifier: string;
  vpcEndpointId?: string;
}
const DeleteSyslogConfigurationRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<DeleteSyslogConfigurationRequest>;
export interface DeleteSyslogConfigurationResponse {}
const DeleteSyslogConfigurationResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteSyslogConfigurationResponse>;
export interface DeleteTransformerRequest {
  logGroupIdentifier: string;
}
const DeleteTransformerRequest = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<DeleteTransformerRequest>;
export interface DeleteTransformerResponse {}
const DeleteTransformerResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DeleteTransformerResponse>;
export type AccountIds = string[];
const AccountIds = RecordFields as any as S.Schema<AccountIds>;
export type NextToken = string;
export interface DescribeAccountPoliciesRequest {
  policyType: PolicyType;
  policyName?: string;
  accountIdentifiers?: string[];
  nextToken?: string;
}
const DescribeAccountPoliciesRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DescribeAccountPoliciesRequest>;
export type AccountPolicyDocument = string;
export type Scope = "ALL" | (string & {});
const Scope = S.String;

export type SelectionCriteria = string;
export interface AccountPolicy {
  policyName?: string;
  policyDocument?: string;
  lastUpdatedTime?: number;
  policyType?: PolicyType;
  scope?: Scope;
  selectionCriteria?: string;
  accountId?: string;
}
const AccountPolicy = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<AccountPolicy>;
export type AccountPolicies = AccountPolicy[];
const AccountPolicies = /*@__PURE__*/ __L.at(__c7, 1);
export interface DescribeAccountPoliciesResponse {
  accountPolicies?: AccountPolicy[];
  nextToken?: string;
}
const DescribeAccountPoliciesResponse = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DescribeAccountPoliciesResponse>;
export type Service = string;
export type LogType = string;
export type LogTypes = string[];
const LogTypes = RecordFields as any as S.Schema<LogTypes>;
export type ResourceType = string;
export type ResourceTypes = string[];
const ResourceTypes = RecordFields as any as S.Schema<ResourceTypes>;
export type DeliveryDestinationTypes = DeliveryDestinationType[];
const DeliveryDestinationTypes = /*@__PURE__*/ __L.at(__c7, 3);
export type DescribeLimit = number;
export interface DescribeConfigurationTemplatesRequest {
  service?: string;
  logTypes?: string[];
  resourceTypes?: string[];
  deliveryDestinationTypes?: DeliveryDestinationType[];
  nextToken?: string;
  limit?: number;
}
const DescribeConfigurationTemplatesRequest = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DescribeConfigurationTemplatesRequest>;
export interface ConfigurationTemplateDeliveryConfigValues {
  recordFields?: string[];
  fieldDelimiter?: string;
  s3DeliveryConfiguration?: S3DeliveryConfiguration;
}
const ConfigurationTemplateDeliveryConfigValues = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<ConfigurationTemplateDeliveryConfigValues>;
export interface RecordField {
  name?: string;
  mandatory?: boolean;
}
const RecordField = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<RecordField>;
export type AllowedFields = RecordField[];
const AllowedFields = /*@__PURE__*/ __L.at(__c7, 7);
export type OutputFormat = "json" | "plain" | "w3c" | "raw" | "parquet" | (string & {});
const OutputFormat = S.String;

export type OutputFormats = OutputFormat[];
const OutputFormats = DeliveryDestinationTypes as any as S.Schema<OutputFormats>;
export type AllowedActionForAllowVendedLogsDeliveryForResource = string;
export type AllowedFieldDelimiters = string[];
const AllowedFieldDelimiters = RecordFields as any as S.Schema<AllowedFieldDelimiters>;
export type DeliverySourceConfigurationSchemaField = string;
export type DeliverySourceConfigurationSchemaValueType =
  | "string"
  | "boolean"
  | "int"
  | "double"
  | "long"
  | (string & {});
const DeliverySourceConfigurationSchemaValueType = S.String;

export type DeliverySourceConfigurationSupportedValues = string[];
const DeliverySourceConfigurationSupportedValues =
  RecordFields as any as S.Schema<DeliverySourceConfigurationSupportedValues>;
export type DeliverySourceConfigurationNumericValue = number;
export interface DeliverySourceConfigurationSchema {
  keyName: string;
  valueType: DeliverySourceConfigurationSchemaValueType;
  defaultValue: string;
  supportedValues?: string[];
  minValue?: number;
  maxValue?: number;
}
const DeliverySourceConfigurationSchema = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<DeliverySourceConfigurationSchema>;
export type DeliverySourceConfigurationSchemas = DeliverySourceConfigurationSchema[];
const DeliverySourceConfigurationSchemas = /*@__PURE__*/ __L.at(__c8, 1);
export type S3TablesDatasourceName = string;
export type S3TablesDatasourceType = string;
export interface S3TablesIntegration {
  datasourceName?: string;
  datasourceType?: string;
}
const S3TablesIntegration = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<S3TablesIntegration>;
export interface ConfigurationTemplate {
  service?: string;
  logType?: string;
  resourceType?: string;
  deliveryDestinationType?: DeliveryDestinationType;
  defaultDeliveryConfigValues?: ConfigurationTemplateDeliveryConfigValues;
  allowedFields?: RecordField[];
  allowedOutputFormats?: OutputFormat[];
  allowedActionForAllowVendedLogsDeliveryForResource?: string;
  allowedFieldDelimiters?: string[];
  allowedSuffixPathFields?: string[];
  deliverySourceConfiguration?: DeliverySourceConfigurationSchema[];
  s3TablesIntegration?: S3TablesIntegration;
}
const ConfigurationTemplate = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<ConfigurationTemplate>;
export type ConfigurationTemplates = ConfigurationTemplate[];
const ConfigurationTemplates = /*@__PURE__*/ __L.at(__c8, 4);
export interface DescribeConfigurationTemplatesResponse {
  configurationTemplates?: ConfigurationTemplate[];
  nextToken?: string;
}
const DescribeConfigurationTemplatesResponse = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DescribeConfigurationTemplatesResponse>;
export interface DescribeDeliveriesRequest {
  nextToken?: string;
  limit?: number;
}
const DescribeDeliveriesRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DescribeDeliveriesRequest>;
export type Deliveries = Delivery[];
const Deliveries = /*@__PURE__*/ __L.at(__c8, 7);
export interface DescribeDeliveriesResponse {
  deliveries?: Delivery[];
  nextToken?: string;
}
const DescribeDeliveriesResponse = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<DescribeDeliveriesResponse>;
export interface DescribeDeliveryDestinationsRequest {
  nextToken?: string;
  limit?: number;
}
const DescribeDeliveryDestinationsRequest = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<DescribeDeliveryDestinationsRequest>;
export interface DeliveryDestinationConfiguration {
  destinationResourceArn: string;
}
const DeliveryDestinationConfiguration = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DeliveryDestinationConfiguration>;
export interface DeliveryDestination {
  name?: string;
  arn?: string;
  deliveryDestinationType?: DeliveryDestinationType;
  outputFormat?: OutputFormat;
  deliveryDestinationConfiguration?: DeliveryDestinationConfiguration;
  roleArn?: string;
  tags?: { [key: string]: string | undefined };
}
const DeliveryDestination = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<DeliveryDestination>;
export type DeliveryDestinations = DeliveryDestination[];
const DeliveryDestinations = /*@__PURE__*/ __L.at(__c9, 4);
export interface DescribeDeliveryDestinationsResponse {
  deliveryDestinations?: DeliveryDestination[];
  nextToken?: string;
}
const DescribeDeliveryDestinationsResponse = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<DescribeDeliveryDestinationsResponse>;
export interface DescribeDeliverySourcesRequest {
  nextToken?: string;
  limit?: number;
}
const DescribeDeliverySourcesRequest = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<DescribeDeliverySourcesRequest>;
export type ResourceArns = string[];
const ResourceArns = RecordFields as any as S.Schema<ResourceArns>;
export type DeliverySourceConfigurationKey = string;
export type DeliverySourceConfigurationValue = string;
export type DeliverySourceConfiguration = { [key: string]: string | undefined };
const DeliverySourceConfiguration = /*@__PURE__*/ __L.at(__c9, 7);
export type DeliverySourceStatus = "ACTIVE" | "INACTIVE" | (string & {});
const DeliverySourceStatus = S.String;

export type DeliverySourceStatusReason = "RESOURCE_DELETED" | (string & {});
const DeliverySourceStatusReason = S.String;

export interface DeliverySource {
  name?: string;
  arn?: string;
  resourceArns?: string[];
  service?: string;
  logType?: string;
  tags?: { [key: string]: string | undefined };
  deliverySourceConfiguration?: { [key: string]: string | undefined };
  status?: DeliverySourceStatus;
  statusReason?: DeliverySourceStatusReason;
}
const DeliverySource = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<DeliverySource>;
export type DeliverySources = DeliverySource[];
const DeliverySources = /*@__PURE__*/ __L.at(__c10, 1);
export interface DescribeDeliverySourcesResponse {
  deliverySources?: DeliverySource[];
  nextToken?: string;
}
const DescribeDeliverySourcesResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<DescribeDeliverySourcesResponse>;
export interface DescribeDestinationsRequest {
  DestinationNamePrefix?: string;
  nextToken?: string;
  limit?: number;
}
const DescribeDestinationsRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<DescribeDestinationsRequest>;
export type TargetArn = string;
export type AccessPolicy = string;
export interface Destination {
  destinationName?: string;
  targetArn?: string;
  roleArn?: string;
  accessPolicy?: string;
  arn?: string;
  creationTime?: number;
}
const Destination = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<Destination>;
export type Destinations = Destination[];
const Destinations = /*@__PURE__*/ __L.at(__c10, 5);
export interface DescribeDestinationsResponse {
  destinations?: Destination[];
  nextToken?: string;
}
const DescribeDestinationsResponse = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<DescribeDestinationsResponse>;
export type ExportTaskStatusCode =
  | "CANCELLED"
  | "COMPLETED"
  | "FAILED"
  | "PENDING"
  | "PENDING_CANCEL"
  | "RUNNING"
  | (string & {});
const ExportTaskStatusCode = S.String;

export interface DescribeExportTasksRequest {
  taskId?: string;
  statusCode?: ExportTaskStatusCode;
  nextToken?: string;
  limit?: number;
}
const DescribeExportTasksRequest = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<DescribeExportTasksRequest>;
export type ExportTaskStatusMessage = string;
export interface ExportTaskStatus {
  code?: ExportTaskStatusCode;
  message?: string;
}
const ExportTaskStatus = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<ExportTaskStatus>;
export interface ExportTaskExecutionInfo {
  creationTime?: number;
  completionTime?: number;
}
const ExportTaskExecutionInfo = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<ExportTaskExecutionInfo>;
export interface ExportTask {
  taskId?: string;
  taskName?: string;
  logGroupName?: string;
  from?: number;
  to?: number;
  destination?: string;
  destinationPrefix?: string;
  status?: ExportTaskStatus;
  executionInfo?: ExportTaskExecutionInfo;
}
const ExportTask = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<ExportTask>;
export type ExportTasks = ExportTask[];
const ExportTasks = /*@__PURE__*/ __L.at(__c11, 3);
export interface DescribeExportTasksResponse {
  exportTasks?: ExportTask[];
  nextToken?: string;
}
const DescribeExportTasksResponse = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<DescribeExportTasksResponse>;
export type DescribeFieldIndexesLogGroupIdentifiers = string[];
const DescribeFieldIndexesLogGroupIdentifiers =
  RecordFields as any as S.Schema<DescribeFieldIndexesLogGroupIdentifiers>;
export type IndexCategory = "DEFAULT" | "CUSTOM" | "AUTO" | "INACTIVE" | (string & {});
const IndexCategory = S.String;

export type IndexCategories = IndexCategory[];
const IndexCategories = DeliveryDestinationTypes as any as S.Schema<IndexCategories>;
export interface DescribeFieldIndexesRequest {
  logGroupIdentifiers: string[];
  indexCategories?: IndexCategory[];
  nextToken?: string;
}
const DescribeFieldIndexesRequest = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<DescribeFieldIndexesRequest>;
export type FieldIndexName = string;
export type IndexType = "FACET" | "FIELD_INDEX" | (string & {});
const IndexType = S.String;

export interface FieldIndex {
  logGroupIdentifier?: string;
  fieldIndexName?: string;
  lastScanTime?: number;
  firstEventTime?: number;
  lastEventTime?: number;
  type?: IndexType;
  indexCategory?: IndexCategory;
}
const FieldIndex = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<FieldIndex>;
export type FieldIndexes = FieldIndex[];
const FieldIndexes = /*@__PURE__*/ __L.at(__c11, 7);
export interface DescribeFieldIndexesResponse {
  fieldIndexes?: FieldIndex[];
  nextToken?: string;
}
const DescribeFieldIndexesResponse = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<DescribeFieldIndexesResponse>;
export type ImportStatusList = ImportStatus[];
const ImportStatusList = DeliveryDestinationTypes as any as S.Schema<ImportStatusList>;
export interface DescribeImportTaskBatchesRequest {
  importId: string;
  batchImportStatus?: ImportStatus[];
  limit?: number;
  nextToken?: string;
}
const DescribeImportTaskBatchesRequest = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<DescribeImportTaskBatchesRequest>;
export type BatchId = string;
export type ErrorMessage = string;
export interface ImportBatch {
  batchId: string;
  status: ImportStatus;
  errorMessage?: string;
}
const ImportBatch = /*@__PURE__*/ __L.at(__c12, 2) as any as S.Schema<ImportBatch>;
export type ImportBatchList = ImportBatch[];
const ImportBatchList = /*@__PURE__*/ __L.at(__c12, 3);
export interface DescribeImportTaskBatchesResponse {
  importSourceArn?: string;
  importId?: string;
  importBatches?: ImportBatch[];
  nextToken?: string;
}
const DescribeImportTaskBatchesResponse = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<DescribeImportTaskBatchesResponse>;
export interface DescribeImportTasksRequest {
  importId?: string;
  importStatus?: ImportStatus;
  importSourceArn?: string;
  limit?: number;
  nextToken?: string;
}
const DescribeImportTasksRequest = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<DescribeImportTasksRequest>;
export interface Import {
  importId?: string;
  importSourceArn?: string;
  importStatus?: ImportStatus;
  importDestinationArn?: string;
  importStatistics?: ImportStatistics;
  importFilter?: ImportFilter;
  creationTime?: number;
  lastUpdatedTime?: number;
  errorMessage?: string;
}
const Import = /*@__PURE__*/ __L.at(__c12, 6) as any as S.Schema<Import>;
export type ImportList = Import[];
const ImportList = /*@__PURE__*/ __L.at(__c12, 7);
export interface DescribeImportTasksResponse {
  imports?: Import[];
  nextToken?: string;
}
const DescribeImportTasksResponse = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<DescribeImportTasksResponse>;
export type DescribeIndexPoliciesLogGroupIdentifiers = string[];
const DescribeIndexPoliciesLogGroupIdentifiers =
  RecordFields as any as S.Schema<DescribeIndexPoliciesLogGroupIdentifiers>;
export interface DescribeIndexPoliciesRequest {
  logGroupIdentifiers: string[];
  nextToken?: string;
}
const DescribeIndexPoliciesRequest = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<DescribeIndexPoliciesRequest>;
export type PolicyDocument = string;
export type IndexSource = "ACCOUNT" | "LOG_GROUP" | (string & {});
const IndexSource = S.String;

export interface IndexPolicy {
  logGroupIdentifier?: string;
  lastUpdateTime?: number;
  policyDocument?: string;
  policyName?: string;
  source?: IndexSource;
}
const IndexPolicy = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<IndexPolicy>;
export type IndexPolicies = IndexPolicy[];
const IndexPolicies = /*@__PURE__*/ __L.at(__c13, 3);
export interface DescribeIndexPoliciesResponse {
  indexPolicies?: IndexPolicy[];
  nextToken?: string;
}
const DescribeIndexPoliciesResponse = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<DescribeIndexPoliciesResponse>;
export type LogGroupNamePattern = string;
export type IncludeLinkedAccounts = boolean;
export type DescribeLogGroupsLogGroupIdentifiers = string[];
const DescribeLogGroupsLogGroupIdentifiers =
  RecordFields as any as S.Schema<DescribeLogGroupsLogGroupIdentifiers>;
export interface DescribeLogGroupsRequest {
  accountIdentifiers?: string[];
  logGroupNamePrefix?: string;
  logGroupNamePattern?: string;
  nextToken?: string;
  limit?: number;
  includeLinkedAccounts?: boolean;
  logGroupClass?: LogGroupClass;
  logGroupIdentifiers?: string[];
}
const DescribeLogGroupsRequest = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<DescribeLogGroupsRequest>;
export type Days = number;
export type FilterCount = number;
export type DataProtectionStatus =
  | "ACTIVATED"
  | "DELETED"
  | "ARCHIVED"
  | "DISABLED"
  | (string & {});
const DataProtectionStatus = S.String;

export type InheritedProperty = "ACCOUNT_DATA_PROTECTION" | (string & {});
export type InheritedProperties = InheritedProperty[];
const InheritedProperties = DeliveryDestinationTypes as any as S.Schema<InheritedProperties>;
export type BearerTokenAuthenticationEnabled = boolean;
export interface LogGroup {
  logGroupName?: string;
  creationTime?: number;
  retentionInDays?: number;
  metricFilterCount?: number;
  arn?: string;
  storedBytes?: number;
  kmsKeyId?: string;
  dataProtectionStatus?: DataProtectionStatus;
  inheritedProperties?: InheritedProperty[];
  logGroupClass?: LogGroupClass;
  logGroupArn?: string;
  deletionProtectionEnabled?: boolean;
  bearerTokenAuthenticationEnabled?: boolean;
}
const LogGroup = /*@__PURE__*/ __L.at(__c13, 6) as any as S.Schema<LogGroup>;
export type LogGroups = LogGroup[];
const LogGroups = /*@__PURE__*/ __L.at(__c13, 7);
export interface DescribeLogGroupsResponse {
  logGroups?: LogGroup[];
  nextToken?: string;
}
const DescribeLogGroupsResponse = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<DescribeLogGroupsResponse>;
export type OrderBy = "LogStreamName" | "LastEventTime" | (string & {});
const OrderBy = S.String;

export type Descending = boolean;
export interface DescribeLogStreamsRequest {
  logGroupName?: string;
  logGroupIdentifier?: string;
  logStreamNamePrefix?: string;
  orderBy?: OrderBy;
  descending?: boolean;
  nextToken?: string;
  limit?: number;
}
const DescribeLogStreamsRequest = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<DescribeLogStreamsRequest>;
export type SequenceToken = string;
export interface LogStream {
  logStreamName?: string;
  creationTime?: number;
  firstEventTimestamp?: number;
  lastEventTimestamp?: number;
  lastIngestionTime?: number;
  uploadSequenceToken?: string;
  arn?: string;
  storedBytes?: number;
}
const LogStream = /*@__PURE__*/ __L.at(__c14, 2) as any as S.Schema<LogStream>;
export type LogStreams = LogStream[];
const LogStreams = /*@__PURE__*/ __L.at(__c14, 3);
export interface DescribeLogStreamsResponse {
  logStreams?: LogStream[];
  nextToken?: string;
}
const DescribeLogStreamsResponse = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<DescribeLogStreamsResponse>;
export type DescribeLookupTablesMaxResults = number;
export interface DescribeLookupTablesRequest {
  lookupTableNamePrefix?: string;
  maxResults?: number;
  nextToken?: string;
}
const DescribeLookupTablesRequest = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<DescribeLookupTablesRequest>;
export type TableFields = string[];
const TableFields = RecordFields as any as S.Schema<TableFields>;
export type RecordsCount = number;
export interface LookupTable {
  lookupTableArn?: string;
  lookupTableName?: string;
  description?: string;
  tableFields?: string[];
  recordsCount?: number;
  sizeBytes?: number;
  lastUpdatedTime?: number;
  kmsKeyId?: string;
}
const LookupTable = /*@__PURE__*/ __L.at(__c14, 6) as any as S.Schema<LookupTable>;
export type LookupTables = LookupTable[];
const LookupTables = /*@__PURE__*/ __L.at(__c14, 7);
export interface DescribeLookupTablesResponse {
  lookupTables?: LookupTable[];
  nextToken?: string;
}
const DescribeLookupTablesResponse = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<DescribeLookupTablesResponse>;
export type MetricName = string;
export type MetricNamespace = string;
export interface DescribeMetricFiltersRequest {
  logGroupName?: string;
  filterNamePrefix?: string;
  nextToken?: string;
  limit?: number;
  metricName?: string;
  metricNamespace?: string;
}
const DescribeMetricFiltersRequest = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<DescribeMetricFiltersRequest>;
export type MetricValue = string;
export type DefaultValue = number;
export type DimensionsKey = string;
export type DimensionsValue = string;
export type Dimensions = { [key: string]: string | undefined };
const Dimensions = Tags as any as S.Schema<Dimensions>;
export type StandardUnit =
  | "Seconds"
  | "Microseconds"
  | "Milliseconds"
  | "Bytes"
  | "Kilobytes"
  | "Megabytes"
  | "Gigabytes"
  | "Terabytes"
  | "Bits"
  | "Kilobits"
  | "Megabits"
  | "Gigabits"
  | "Terabits"
  | "Percent"
  | "Count"
  | "Bytes/Second"
  | "Kilobytes/Second"
  | "Megabytes/Second"
  | "Gigabytes/Second"
  | "Terabytes/Second"
  | "Bits/Second"
  | "Kilobits/Second"
  | "Megabits/Second"
  | "Gigabits/Second"
  | "Terabits/Second"
  | "Count/Second"
  | "None"
  | (string & {});
const StandardUnit = S.String;

export interface MetricTransformation {
  metricName: string;
  metricNamespace: string;
  metricValue: string;
  defaultValue?: number;
  dimensions?: { [key: string]: string | undefined };
  unit?: StandardUnit;
}
const MetricTransformation = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<MetricTransformation>;
export type MetricTransformations = MetricTransformation[];
const MetricTransformations = /*@__PURE__*/ __L.at(__c15, 3);
export type ApplyOnTransformedLogs = boolean;
export type FieldSelectionCriteria = string;
export type SystemField = string;
export type EmitSystemFields = string[];
const EmitSystemFields = RecordFields as any as S.Schema<EmitSystemFields>;
export interface MetricFilter {
  filterName?: string;
  filterPattern?: string;
  metricTransformations?: MetricTransformation[];
  creationTime?: number;
  logGroupName?: string;
  applyOnTransformedLogs?: boolean;
  fieldSelectionCriteria?: string;
  emitSystemFieldDimensions?: string[];
}
const MetricFilter = /*@__PURE__*/ __L.at(__c15, 4) as any as S.Schema<MetricFilter>;
export type MetricFilters = MetricFilter[];
const MetricFilters = /*@__PURE__*/ __L.at(__c15, 5);
export interface DescribeMetricFiltersResponse {
  metricFilters?: MetricFilter[];
  nextToken?: string;
}
const DescribeMetricFiltersResponse = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<DescribeMetricFiltersResponse>;
export type QueryStatus =
  | "Scheduled"
  | "Running"
  | "Complete"
  | "Failed"
  | "Cancelled"
  | "Timeout"
  | "Unknown"
  | (string & {});
const QueryStatus = S.String;

export type DescribeQueriesMaxResults = number;
export interface DescribeQueriesRequest {
  logGroupName?: string;
  status?: QueryStatus;
  maxResults?: number;
  nextToken?: string;
  queryLanguage?: QueryLanguage;
}
const DescribeQueriesRequest = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<DescribeQueriesRequest>;
export type QueryDuration = number;
export type BytesScannedValue = number;
export type UserIdentity = string;
export interface QueryInfo {
  queryLanguage?: QueryLanguage;
  queryId?: string;
  queryString?: string;
  status?: QueryStatus;
  createTime?: number;
  logGroupName?: string;
  queryDuration?: number;
  bytesScanned?: number;
  userIdentity?: string;
}
const QueryInfo = /*@__PURE__*/ __L.at(__c16, 0) as any as S.Schema<QueryInfo>;
export type QueryInfoList = QueryInfo[];
const QueryInfoList = /*@__PURE__*/ __L.at(__c16, 1);
export interface DescribeQueriesResponse {
  queries?: QueryInfo[];
  nextToken?: string;
}
const DescribeQueriesResponse = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<DescribeQueriesResponse>;
export type QueryDefinitionName = string;
export type QueryListMaxResults = number;
export interface DescribeQueryDefinitionsRequest {
  queryLanguage?: QueryLanguage;
  queryDefinitionNamePrefix?: string;
  maxResults?: number;
  nextToken?: string;
}
const DescribeQueryDefinitionsRequest = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<DescribeQueryDefinitionsRequest>;
export type QueryDefinitionString = string;
export type LogGroupNames = string[];
const LogGroupNames = RecordFields as any as S.Schema<LogGroupNames>;
export type QueryParameterName = string;
export type QueryParameterDefaultValue = string;
export type QueryParameterDescription = string;
export interface QueryParameter {
  name: string;
  defaultValue?: string;
  description?: string;
}
const QueryParameter = /*@__PURE__*/ __L.at(__c16, 4) as any as S.Schema<QueryParameter>;
export type QueryParameterList = QueryParameter[];
const QueryParameterList = /*@__PURE__*/ __L.at(__c16, 5);
export interface QueryDefinition {
  queryLanguage?: QueryLanguage;
  queryDefinitionId?: string;
  name?: string;
  queryString?: string;
  lastModified?: number;
  logGroupNames?: string[];
  parameters?: QueryParameter[];
}
const QueryDefinition = /*@__PURE__*/ __L.at(__c16, 6) as any as S.Schema<QueryDefinition>;
export type QueryDefinitionList = QueryDefinition[];
const QueryDefinitionList = /*@__PURE__*/ __L.at(__c16, 7);
export interface DescribeQueryDefinitionsResponse {
  queryDefinitions?: QueryDefinition[];
  nextToken?: string;
}
const DescribeQueryDefinitionsResponse = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<DescribeQueryDefinitionsResponse>;
export type PolicyScope = "ACCOUNT" | "RESOURCE" | (string & {});
const PolicyScope = S.String;

export interface DescribeResourcePoliciesRequest {
  nextToken?: string;
  limit?: number;
  resourceArn?: string;
  policyScope?: PolicyScope;
}
const DescribeResourcePoliciesRequest = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<DescribeResourcePoliciesRequest>;
export interface ResourcePolicy {
  policyName?: string;
  policyDocument?: string;
  lastUpdatedTime?: number;
  policyScope?: PolicyScope;
  resourceArn?: string;
  revisionId?: string;
}
const ResourcePolicy = /*@__PURE__*/ __L.at(__c17, 2) as any as S.Schema<ResourcePolicy>;
export type ResourcePolicies = ResourcePolicy[];
const ResourcePolicies = /*@__PURE__*/ __L.at(__c17, 3);
export interface DescribeResourcePoliciesResponse {
  resourcePolicies?: ResourcePolicy[];
  nextToken?: string;
}
const DescribeResourcePoliciesResponse = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<DescribeResourcePoliciesResponse>;
export interface DescribeSubscriptionFiltersRequest {
  logGroupName: string;
  filterNamePrefix?: string;
  nextToken?: string;
  limit?: number;
}
const DescribeSubscriptionFiltersRequest = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<DescribeSubscriptionFiltersRequest>;
export type DestinationArn = string;
export type Distribution = "Random" | "ByLogStream" | (string & {});
const Distribution = S.String;

export interface SubscriptionFilter {
  filterName?: string;
  logGroupName?: string;
  filterPattern?: string;
  destinationArn?: string;
  roleArn?: string;
  distribution?: Distribution;
  applyOnTransformedLogs?: boolean;
  creationTime?: number;
  fieldSelectionCriteria?: string;
  emitSystemFields?: string[];
}
const SubscriptionFilter = /*@__PURE__*/ __L.at(__c17, 6) as any as S.Schema<SubscriptionFilter>;
export type SubscriptionFilters = SubscriptionFilter[];
const SubscriptionFilters = /*@__PURE__*/ __L.at(__c17, 7);
export interface DescribeSubscriptionFiltersResponse {
  subscriptionFilters?: SubscriptionFilter[];
  nextToken?: string;
}
const DescribeSubscriptionFiltersResponse = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<DescribeSubscriptionFiltersResponse>;
export interface DisassociateKmsKeyRequest {
  logGroupName?: string;
  resourceIdentifier?: string;
}
const DisassociateKmsKeyRequest = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<DisassociateKmsKeyRequest>;
export interface DisassociateKmsKeyResponse {}
const DisassociateKmsKeyResponse =
  DeleteAccountPolicyResponse as any as S.Schema<DisassociateKmsKeyResponse>;
export interface DisassociateSourceFromS3TableIntegrationRequest {
  identifier: string;
}
const DisassociateSourceFromS3TableIntegrationRequest = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<DisassociateSourceFromS3TableIntegrationRequest>;
export interface DisassociateSourceFromS3TableIntegrationResponse {
  identifier?: string;
}
const DisassociateSourceFromS3TableIntegrationResponse =
  AssociateSourceToS3TableIntegrationResponse as any as S.Schema<DisassociateSourceFromS3TableIntegrationResponse>;
export type InputLogStreamNames = string[];
const InputLogStreamNames = RecordFields as any as S.Schema<InputLogStreamNames>;
export type EventsLimit = number;
export type StartFromHead = boolean;
export type Interleaved = boolean;
export type Unmask = boolean;
export interface FilterLogEventsRequest {
  logGroupName?: string;
  logGroupIdentifier?: string;
  logStreamNames?: string[];
  logStreamNamePrefix?: string;
  startTime?: number;
  endTime?: number;
  filterPattern?: string;
  nextToken?: string;
  limit?: number;
  startFromHead?: boolean;
  interleaved?: boolean;
  unmask?: boolean;
}
const FilterLogEventsRequest = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<FilterLogEventsRequest>;
export type EventMessage = string;
export type EventId = string;
export interface FilteredLogEvent {
  logStreamName?: string;
  timestamp?: number;
  message?: string;
  ingestionTime?: number;
  eventId?: string;
}
const FilteredLogEvent = /*@__PURE__*/ __L.at(__c18, 4) as any as S.Schema<FilteredLogEvent>;
export type FilteredLogEvents = FilteredLogEvent[];
const FilteredLogEvents = /*@__PURE__*/ __L.at(__c18, 5);
export type LogStreamSearchedCompletely = boolean;
export interface SearchedLogStream {
  logStreamName?: string;
  searchedCompletely?: boolean;
}
const SearchedLogStream = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<SearchedLogStream>;
export type SearchedLogStreams = SearchedLogStream[];
const SearchedLogStreams = /*@__PURE__*/ __L.at(__c18, 7);
export interface FilterLogEventsResponse {
  events?: FilteredLogEvent[];
  searchedLogStreams?: SearchedLogStream[];
  nextToken?: string;
}
const FilterLogEventsResponse = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<FilterLogEventsResponse>;
export interface GetDataProtectionPolicyRequest {
  logGroupIdentifier: string;
}
const GetDataProtectionPolicyRequest = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<GetDataProtectionPolicyRequest>;
export type DataProtectionPolicyDocument = string;
export interface GetDataProtectionPolicyResponse {
  logGroupIdentifier?: string;
  policyDocument?: string;
  lastUpdatedTime?: number;
}
const GetDataProtectionPolicyResponse = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<GetDataProtectionPolicyResponse>;
export interface GetDeliveryRequest {
  id: string;
}
const GetDeliveryRequest = /*@__PURE__*/ __L.at(__c19, 3) as any as S.Schema<GetDeliveryRequest>;
export interface GetDeliveryResponse {
  delivery?: Delivery;
}
const GetDeliveryResponse = CreateDeliveryResponse as any as S.Schema<GetDeliveryResponse>;
export interface GetDeliveryDestinationRequest {
  name: string;
}
const GetDeliveryDestinationRequest = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<GetDeliveryDestinationRequest>;
export interface GetDeliveryDestinationResponse {
  deliveryDestination?: DeliveryDestination;
}
const GetDeliveryDestinationResponse = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<GetDeliveryDestinationResponse>;
export interface GetDeliveryDestinationPolicyRequest {
  deliveryDestinationName: string;
}
const GetDeliveryDestinationPolicyRequest = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<GetDeliveryDestinationPolicyRequest>;
export type DeliveryDestinationPolicy = string;
export interface Policy {
  deliveryDestinationPolicy?: string;
}
const Policy = /*@__PURE__*/ __L.at(__c19, 7) as any as S.Schema<Policy>;
export interface GetDeliveryDestinationPolicyResponse {
  policy?: Policy;
}
const GetDeliveryDestinationPolicyResponse = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<GetDeliveryDestinationPolicyResponse>;
export interface GetDeliverySourceRequest {
  name: string;
}
const GetDeliverySourceRequest = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<GetDeliverySourceRequest>;
export interface GetDeliverySourceResponse {
  deliverySource?: DeliverySource;
}
const GetDeliverySourceResponse = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<GetDeliverySourceResponse>;
export interface GetIntegrationRequest {
  integrationName: string;
}
const GetIntegrationRequest = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<GetIntegrationRequest>;
export type IntegrationType = "OPENSEARCH" | (string & {});
const IntegrationType = S.String;

export type IntegrationStatus = "PROVISIONING" | "ACTIVE" | "FAILED" | (string & {});
const IntegrationStatus = S.String;

export type OpenSearchDataSourceName = string;
export type OpenSearchResourceStatusType = "ACTIVE" | "NOT_FOUND" | "ERROR" | (string & {});
const OpenSearchResourceStatusType = S.String;

export type IntegrationStatusMessage = string;
export interface OpenSearchResourceStatus {
  status?: OpenSearchResourceStatusType;
  statusMessage?: string;
}
const OpenSearchResourceStatus = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<OpenSearchResourceStatus>;
export interface OpenSearchDataSource {
  dataSourceName?: string;
  status?: OpenSearchResourceStatus;
}
const OpenSearchDataSource = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<OpenSearchDataSource>;
export type OpenSearchApplicationEndpoint = string;
export type OpenSearchApplicationId = string;
export interface OpenSearchApplication {
  applicationEndpoint?: string;
  applicationArn?: string;
  applicationId?: string;
  status?: OpenSearchResourceStatus;
}
const OpenSearchApplication = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<OpenSearchApplication>;
export type OpenSearchCollectionEndpoint = string;
export interface OpenSearchCollection {
  collectionEndpoint?: string;
  collectionArn?: string;
  status?: OpenSearchResourceStatus;
}
const OpenSearchCollection = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<OpenSearchCollection>;
export type OpenSearchWorkspaceId = string;
export interface OpenSearchWorkspace {
  workspaceId?: string;
  status?: OpenSearchResourceStatus;
}
const OpenSearchWorkspace = /*@__PURE__*/ __L.at(__c21, 0) as any as S.Schema<OpenSearchWorkspace>;
export type OpenSearchPolicyName = string;
export interface OpenSearchEncryptionPolicy {
  policyName?: string;
  status?: OpenSearchResourceStatus;
}
const OpenSearchEncryptionPolicy = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<OpenSearchEncryptionPolicy>;
export interface OpenSearchNetworkPolicy {
  policyName?: string;
  status?: OpenSearchResourceStatus;
}
const OpenSearchNetworkPolicy = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<OpenSearchNetworkPolicy>;
export interface OpenSearchDataAccessPolicy {
  policyName?: string;
  status?: OpenSearchResourceStatus;
}
const OpenSearchDataAccessPolicy =
  OpenSearchEncryptionPolicy as any as S.Schema<OpenSearchDataAccessPolicy>;
export interface OpenSearchLifecyclePolicy {
  policyName?: string;
  status?: OpenSearchResourceStatus;
}
const OpenSearchLifecyclePolicy =
  OpenSearchEncryptionPolicy as any as S.Schema<OpenSearchLifecyclePolicy>;
export interface OpenSearchIntegrationDetails {
  dataSource?: OpenSearchDataSource;
  application?: OpenSearchApplication;
  collection?: OpenSearchCollection;
  workspace?: OpenSearchWorkspace;
  encryptionPolicy?: OpenSearchEncryptionPolicy;
  networkPolicy?: OpenSearchNetworkPolicy;
  accessPolicy?: OpenSearchDataAccessPolicy;
  lifecyclePolicy?: OpenSearchLifecyclePolicy;
}
const OpenSearchIntegrationDetails = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<OpenSearchIntegrationDetails>;
export type IntegrationDetails = { openSearchIntegrationDetails: OpenSearchIntegrationDetails };
const IntegrationDetails = /*@__PURE__*/ __L.at(__c21, 4);
export interface GetIntegrationResponse {
  integrationName?: string;
  integrationType?: IntegrationType;
  integrationStatus?: IntegrationStatus;
  integrationDetails?: IntegrationDetails;
}
const GetIntegrationResponse = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<GetIntegrationResponse>;
export interface GetLogAnomalyDetectorRequest {
  anomalyDetectorArn: string;
}
const GetLogAnomalyDetectorRequest = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<GetLogAnomalyDetectorRequest>;
export type AnomalyDetectorStatus =
  | "INITIALIZING"
  | "TRAINING"
  | "ANALYZING"
  | "FAILED"
  | "DELETED"
  | "PAUSED"
  | (string & {});
const AnomalyDetectorStatus = S.String;

export type EpochMillis = number;
export interface GetLogAnomalyDetectorResponse {
  detectorName?: string;
  logGroupArnList?: string[];
  evaluationFrequency?: EvaluationFrequency;
  filterPattern?: string;
  anomalyDetectorStatus?: AnomalyDetectorStatus;
  kmsKeyId?: string;
  creationTimeStamp?: number;
  lastModifiedTimeStamp?: number;
  anomalyVisibilityTime?: number;
}
const GetLogAnomalyDetectorResponse = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<GetLogAnomalyDetectorResponse>;
export interface GetLogEventsRequest {
  logGroupName?: string;
  logGroupIdentifier?: string;
  logStreamName: string;
  startTime?: number;
  endTime?: number;
  nextToken?: string;
  limit?: number;
  startFromHead?: boolean;
  unmask?: boolean;
}
const GetLogEventsRequest = /*@__PURE__*/ __L.at(__c22, 0) as any as S.Schema<GetLogEventsRequest>;
export interface OutputLogEvent {
  timestamp?: number;
  message?: string;
  ingestionTime?: number;
}
const OutputLogEvent = /*@__PURE__*/ __L.at(__c22, 1) as any as S.Schema<OutputLogEvent>;
export type OutputLogEvents = OutputLogEvent[];
const OutputLogEvents = /*@__PURE__*/ __L.at(__c22, 2);
export interface GetLogEventsResponse {
  events?: OutputLogEvent[];
  nextForwardToken?: string;
  nextBackwardToken?: string;
}
const GetLogEventsResponse = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<GetLogEventsResponse>;
export interface GetLogFieldsRequest {
  dataSourceName: string;
  dataSourceType: string;
}
const GetLogFieldsRequest = /*@__PURE__*/ __L.at(__c22, 4) as any as S.Schema<GetLogFieldsRequest>;
export type LogFieldName = string;
export type DataType = string;
export interface LogFieldType {
  type?: string;
  element?: LogFieldType;
  fields?: LogFieldsListItem[];
}
const LogFieldType = /*@__PURE__*/ __L.at(__c22, 5) as any as S.Schema<LogFieldType>;
export interface LogFieldsListItem {
  logFieldName?: string;
  logFieldType?: LogFieldType;
}
const LogFieldsListItem = /*@__PURE__*/ __L.at(__c22, 6) as any as S.Schema<LogFieldsListItem>;
export type LogFieldsList = LogFieldsListItem[];
const LogFieldsList = /*@__PURE__*/ __L.at(__c22, 7) as any as S.Schema<LogFieldsList>;
export interface GetLogFieldsResponse {
  logFields?: LogFieldsListItem[];
}
const GetLogFieldsResponse = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<GetLogFieldsResponse>;
export interface GetLogGroupFieldsRequest {
  logGroupName?: string;
  time?: number;
  logGroupIdentifier?: string;
}
const GetLogGroupFieldsRequest = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<GetLogGroupFieldsRequest>;
export type Field = string;
export type Percentage = number;
export interface LogGroupField {
  name?: string;
  percent?: number;
}
const LogGroupField = /*@__PURE__*/ __L.at(__c23, 2) as any as S.Schema<LogGroupField>;
export type LogGroupFieldList = LogGroupField[];
const LogGroupFieldList = /*@__PURE__*/ __L.at(__c23, 3);
export interface GetLogGroupFieldsResponse {
  logGroupFields?: LogGroupField[];
}
const GetLogGroupFieldsResponse = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<GetLogGroupFieldsResponse>;
export type LogObjectPointer = string;
export interface GetLogObjectRequest {
  unmask?: boolean;
  logObjectPointer: string;
}
const GetLogObjectRequest = /*@__PURE__*/ __L.at(__c23, 5) as any as S.Schema<GetLogObjectRequest>;
export type Data = Uint8Array;
export interface FieldsData {
  data?: Uint8Array;
}
const FieldsData = /*@__PURE__*/ __L.at(__c23, 6) as any as S.Schema<FieldsData>;
export type Message = string;
export interface InternalStreamingException {
  message?: string;
}
const InternalStreamingException = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<InternalStreamingException>;
export type GetLogObjectResponseStream =
  | { fields: FieldsData; InternalStreamingException?: never }
  | { fields?: never; InternalStreamingException: InternalStreamingException };
const GetLogObjectResponseStream = /*@__PURE__*/ __L.at(__c24, 0) as any as S.Schema<
  stream.Stream<GetLogObjectResponseStream, Error, never>
>;
export interface GetLogObjectResponse {
  fieldStream?: stream.Stream<GetLogObjectResponseStream, Error, never>;
}
const GetLogObjectResponse = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<GetLogObjectResponse>;
export type LogRecordPointer = string;
export interface GetLogRecordRequest {
  logRecordPointer: string;
  unmask?: boolean;
}
const GetLogRecordRequest = /*@__PURE__*/ __L.at(__c24, 2) as any as S.Schema<GetLogRecordRequest>;
export type Value = string;
export type LogRecord = { [key: string]: string | undefined };
const LogRecord = Tags as any as S.Schema<LogRecord>;
export interface GetLogRecordResponse {
  logRecord?: { [key: string]: string | undefined };
}
const GetLogRecordResponse = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<GetLogRecordResponse>;
export interface GetLookupTableRequest {
  lookupTableArn: string;
}
const GetLookupTableRequest = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<GetLookupTableRequest>;
export interface GetLookupTableResponse {
  lookupTableArn?: string;
  lookupTableName?: string;
  description?: string;
  tableBody?: string;
  sizeBytes?: number;
  lastUpdatedTime?: number;
  kmsKeyId?: string;
}
const GetLookupTableResponse = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<GetLookupTableResponse>;
export type GetQueryResultsNextToken = string;
export type GetQueryResultsMaxItems = number;
export interface GetQueryResultsRequest {
  queryId: string;
  nextToken?: string;
  maxItems?: number;
}
const GetQueryResultsRequest = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<GetQueryResultsRequest>;
export interface ResultField {
  field?: string;
  value?: string;
}
const ResultField = /*@__PURE__*/ __L.at(__c24, 7) as any as S.Schema<ResultField>;
export type ResultRows = ResultField[];
const ResultRows = /*@__PURE__*/ __L.at(__c25, 0);
export type QueryResults = ResultField[][];
const QueryResults = /*@__PURE__*/ __L.at(__c25, 1);
export type StatsValue = number;
export interface QueryStatistics {
  recordsMatched?: number;
  recordsScanned?: number;
  estimatedRecordsSkipped?: number;
  bytesScanned?: number;
  estimatedBytesSkipped?: number;
  logGroupsScanned?: number;
  resultCount?: number;
}
const QueryStatistics = /*@__PURE__*/ __L.at(__c25, 2) as any as S.Schema<QueryStatistics>;
export type EncryptionKey = string;
export interface GetQueryResultsResponse {
  queryLanguage?: QueryLanguage;
  results?: ResultField[][];
  statistics?: QueryStatistics;
  status?: QueryStatus;
  encryptionKey?: string;
  nextToken?: string;
}
const GetQueryResultsResponse = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<GetQueryResultsResponse>;
export interface GetScheduledQueryRequest {
  identifier: string;
}
const GetScheduledQueryRequest = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<GetScheduledQueryRequest>;
export type ScheduleType = "CUSTOMER_MANAGED" | "AWS_MANAGED" | (string & {});
const ScheduleType = S.String;

export type ExecutionStatus =
  | "Running"
  | "InvalidQuery"
  | "Complete"
  | "Failed"
  | "Timeout"
  | (string & {});
const ExecutionStatus = S.String;

export interface GetScheduledQueryResponse {
  scheduledQueryArn?: string;
  name?: string;
  description?: string;
  queryLanguage?: QueryLanguage;
  queryString?: string;
  logGroupIdentifiers?: string[];
  scheduleExpression?: string;
  timezone?: string;
  startTimeOffset?: number;
  endTimeOffset?: number;
  destinationConfiguration?: DestinationConfiguration;
  state?: ScheduledQueryState;
  scheduleType?: ScheduleType;
  lastTriggeredTime?: number;
  lastExecutionStatus?: ExecutionStatus;
  scheduleStartTime?: number;
  scheduleEndTime?: number;
  executionRoleArn?: string;
  creationTime?: number;
  lastUpdatedTime?: number;
}
const GetScheduledQueryResponse = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<GetScheduledQueryResponse>;
export type ExecutionStatusList = ExecutionStatus[];
const ExecutionStatusList = DeliveryDestinationTypes as any as S.Schema<ExecutionStatusList>;
export type GetScheduledQueryHistoryMaxResults = number;
export interface GetScheduledQueryHistoryRequest {
  identifier: string;
  startTime: number;
  endTime: number;
  executionStatuses?: ExecutionStatus[];
  maxResults?: number;
  nextToken?: string;
}
const GetScheduledQueryHistoryRequest = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<GetScheduledQueryHistoryRequest>;
export type ScheduledQueryDestinationType = "S3" | "LOOKUP_TABLE" | (string & {});
const ScheduledQueryDestinationType = S.String;

export type ActionStatus = "IN_PROGRESS" | "CLIENT_ERROR" | "FAILED" | "COMPLETE" | (string & {});
const ActionStatus = S.String;

export interface ScheduledQueryDestination {
  destinationType?: ScheduledQueryDestinationType;
  destinationIdentifier?: string;
  status?: ActionStatus;
  processedIdentifier?: string;
  errorMessage?: string;
}
const ScheduledQueryDestination = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<ScheduledQueryDestination>;
export type ScheduledQueryDestinationList = ScheduledQueryDestination[];
const ScheduledQueryDestinationList = /*@__PURE__*/ __L.at(__c26, 0);
export interface TriggerHistoryRecord {
  queryId?: string;
  executionStatus?: ExecutionStatus;
  triggeredTimestamp?: number;
  errorMessage?: string;
  destinations?: ScheduledQueryDestination[];
}
const TriggerHistoryRecord = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<TriggerHistoryRecord>;
export type TriggerHistoryRecordList = TriggerHistoryRecord[];
const TriggerHistoryRecordList = /*@__PURE__*/ __L.at(__c26, 2);
export interface GetScheduledQueryHistoryResponse {
  name?: string;
  scheduledQueryArn?: string;
  triggerHistory?: TriggerHistoryRecord[];
  nextToken?: string;
}
const GetScheduledQueryHistoryResponse = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<GetScheduledQueryHistoryResponse>;
export interface GetStorageTierPolicyRequest {}
const GetStorageTierPolicyRequest = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<GetStorageTierPolicyRequest>;
export type StorageTier = "STANDARD" | "INTELLIGENT_TIERING" | (string & {});
const StorageTier = S.String;

export interface GetStorageTierPolicyResponse {
  storageTier?: StorageTier;
  lastUpdatedTime?: number;
}
const GetStorageTierPolicyResponse = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<GetStorageTierPolicyResponse>;
export interface GetTransformerRequest {
  logGroupIdentifier: string;
}
const GetTransformerRequest = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<GetTransformerRequest>;
export type Key = string;
export type AddKeyValue = string;
export type OverwriteIfExists = boolean;
export interface AddKeyEntry {
  key: string;
  value: string;
  overwriteIfExists?: boolean;
}
const AddKeyEntry = /*@__PURE__*/ __L.at(__c26, 7) as any as S.Schema<AddKeyEntry>;
export type AddKeyEntries = AddKeyEntry[];
const AddKeyEntries = /*@__PURE__*/ __L.at(__c27, 0);
export interface AddKeys {
  entries: AddKeyEntry[];
}
const AddKeys = /*@__PURE__*/ __L.at(__c27, 1) as any as S.Schema<AddKeys>;
export type Source = string;
export type Target = string;
export interface CopyValueEntry {
  source: string;
  target: string;
  overwriteIfExists?: boolean;
}
const CopyValueEntry = /*@__PURE__*/ __L.at(__c27, 2) as any as S.Schema<CopyValueEntry>;
export type CopyValueEntries = CopyValueEntry[];
const CopyValueEntries = /*@__PURE__*/ __L.at(__c27, 3);
export interface CopyValue {
  entries: CopyValueEntry[];
}
const CopyValue = /*@__PURE__*/ __L.at(__c27, 4) as any as S.Schema<CopyValue>;
export type QuoteCharacter = string;
export type Delimiter = string;
export type Column = string;
export type Columns = string[];
const Columns = RecordFields as any as S.Schema<Columns>;
export type DestinationField = string;
export interface CSV {
  quoteCharacter?: string;
  delimiter?: string;
  columns?: string[];
  source?: string;
  destination?: string;
}
const CSV = /*@__PURE__*/ __L.at(__c27, 5) as any as S.Schema<CSV>;
export type TargetFormat = string;
export type MatchPattern = string;
export type MatchPatterns = string[];
const MatchPatterns = RecordFields as any as S.Schema<MatchPatterns>;
export type SourceTimezone = string;
export type TargetTimezone = string;
export type Locale = string;
export interface DateTimeConverter {
  source: string;
  target: string;
  targetFormat?: string;
  matchPatterns: string[];
  sourceTimezone?: string;
  targetTimezone?: string;
  locale?: string;
}
const DateTimeConverter = /*@__PURE__*/ __L.at(__c27, 6) as any as S.Schema<DateTimeConverter>;
export type WithKey = string;
export type DeleteWithKeys = string[];
const DeleteWithKeys = RecordFields as any as S.Schema<DeleteWithKeys>;
export interface DeleteKeys {
  withKeys: string[];
}
const DeleteKeys = /*@__PURE__*/ __L.at(__c27, 7) as any as S.Schema<DeleteKeys>;
export type GrokMatch = string;
export interface Grok {
  source?: string;
  match: string;
}
const Grok = /*@__PURE__*/ __L.at(__c28, 0) as any as S.Schema<Grok>;
export type ValueKey = string;
export type Flatten = boolean;
export type FlattenedElement = "first" | "last" | (string & {});
const FlattenedElement = S.String;

export interface ListToMap {
  source: string;
  key: string;
  valueKey?: string;
  target?: string;
  flatten?: boolean;
  flattenedElement?: FlattenedElement;
}
const ListToMap = /*@__PURE__*/ __L.at(__c28, 1) as any as S.Schema<ListToMap>;
export type LowerCaseStringWithKeys = string[];
export interface LowerCaseString {
  withKeys: string[];
}
const LowerCaseString = DeleteKeys as any as S.Schema<LowerCaseString>;
export interface MoveKeyEntry {
  source: string;
  target: string;
  overwriteIfExists?: boolean;
}
export type MoveKeyEntries = MoveKeyEntry[];
export interface MoveKeys {
  entries: MoveKeyEntry[];
}
const MoveKeys = CopyValue as any as S.Schema<MoveKeys>;
export interface ParseCloudfront {
  source?: string;
}
const ParseCloudfront = /*@__PURE__*/ __L.at(__c28, 2) as any as S.Schema<ParseCloudfront>;
export interface ParseJSON {
  source?: string;
  destination?: string;
}
const ParseJSON = /*@__PURE__*/ __L.at(__c28, 3) as any as S.Schema<ParseJSON>;
export type ParserFieldDelimiter = string;
export type KeyValueDelimiter = string;
export type KeyPrefix = string;
export type NonMatchValue = string;
export interface ParseKeyValue {
  source?: string;
  destination?: string;
  fieldDelimiter?: string;
  keyValueDelimiter?: string;
  keyPrefix?: string;
  nonMatchValue?: string;
  overwriteIfExists?: boolean;
}
const ParseKeyValue = /*@__PURE__*/ __L.at(__c28, 4) as any as S.Schema<ParseKeyValue>;
export interface ParseRoute53 {
  source?: string;
}
const ParseRoute53 = ParseCloudfront as any as S.Schema<ParseRoute53>;
export type EventSource =
  | "CloudTrail"
  | "Route53Resolver"
  | "VPCFlow"
  | "EKSAudit"
  | "AWSWAF"
  | (string & {});
const EventSource = S.String;

export type OCSFVersion = "V1.1" | "V1.5" | (string & {});
const OCSFVersion = S.String;

export type MappingVersion = string;
export interface ParseToOCSF {
  source?: string;
  eventSource: EventSource;
  ocsfVersion: OCSFVersion;
  mappingVersion?: string;
}
const ParseToOCSF = /*@__PURE__*/ __L.at(__c28, 5) as any as S.Schema<ParseToOCSF>;
export interface ParsePostgres {
  source?: string;
}
const ParsePostgres = ParseCloudfront as any as S.Schema<ParsePostgres>;
export interface ParseVPC {
  source?: string;
}
const ParseVPC = ParseCloudfront as any as S.Schema<ParseVPC>;
export interface ParseWAF {
  source?: string;
}
const ParseWAF = ParseCloudfront as any as S.Schema<ParseWAF>;
export type RenameTo = string;
export interface RenameKeyEntry {
  key: string;
  renameTo: string;
  overwriteIfExists?: boolean;
}
const RenameKeyEntry = /*@__PURE__*/ __L.at(__c28, 6) as any as S.Schema<RenameKeyEntry>;
export type RenameKeyEntries = RenameKeyEntry[];
const RenameKeyEntries = /*@__PURE__*/ __L.at(__c28, 7);
export interface RenameKeys {
  entries: RenameKeyEntry[];
}
const RenameKeys = /*@__PURE__*/ __L.at(__c29, 0) as any as S.Schema<RenameKeys>;
export type SplitStringDelimiter = string;
export interface SplitStringEntry {
  source: string;
  delimiter: string;
}
const SplitStringEntry = /*@__PURE__*/ __L.at(__c29, 1) as any as S.Schema<SplitStringEntry>;
export type SplitStringEntries = SplitStringEntry[];
const SplitStringEntries = /*@__PURE__*/ __L.at(__c29, 2);
export interface SplitString {
  entries: SplitStringEntry[];
}
const SplitString = /*@__PURE__*/ __L.at(__c29, 3) as any as S.Schema<SplitString>;
export type FromKey = string;
export type ToKey = string;
export interface SubstituteStringEntry {
  source: string;
  from: string;
  to: string;
}
const SubstituteStringEntry = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<SubstituteStringEntry>;
export type SubstituteStringEntries = SubstituteStringEntry[];
const SubstituteStringEntries = /*@__PURE__*/ __L.at(__c29, 5);
export interface SubstituteString {
  entries: SubstituteStringEntry[];
}
const SubstituteString = /*@__PURE__*/ __L.at(__c29, 6) as any as S.Schema<SubstituteString>;
export type TrimStringWithKeys = string[];
export interface TrimString {
  withKeys: string[];
}
const TrimString = DeleteKeys as any as S.Schema<TrimString>;
export type Type = "boolean" | "integer" | "double" | "string" | (string & {});
const Type = S.String;

export interface TypeConverterEntry {
  key: string;
  type: Type;
}
const TypeConverterEntry = /*@__PURE__*/ __L.at(__c29, 7) as any as S.Schema<TypeConverterEntry>;
export type TypeConverterEntries = TypeConverterEntry[];
const TypeConverterEntries = /*@__PURE__*/ __L.at(__c30, 0);
export interface TypeConverter {
  entries: TypeConverterEntry[];
}
const TypeConverter = /*@__PURE__*/ __L.at(__c30, 1) as any as S.Schema<TypeConverter>;
export type UpperCaseStringWithKeys = string[];
export interface UpperCaseString {
  withKeys: string[];
}
const UpperCaseString = DeleteKeys as any as S.Schema<UpperCaseString>;
export interface Processor {
  addKeys?: AddKeys;
  copyValue?: CopyValue;
  csv?: CSV;
  dateTimeConverter?: DateTimeConverter;
  deleteKeys?: DeleteKeys;
  grok?: Grok;
  listToMap?: ListToMap;
  lowerCaseString?: LowerCaseString;
  moveKeys?: MoveKeys;
  parseCloudfront?: ParseCloudfront;
  parseJSON?: ParseJSON;
  parseKeyValue?: ParseKeyValue;
  parseRoute53?: ParseRoute53;
  parseToOCSF?: ParseToOCSF;
  parsePostgres?: ParsePostgres;
  parseVPC?: ParseVPC;
  parseWAF?: ParseWAF;
  renameKeys?: RenameKeys;
  splitString?: SplitString;
  substituteString?: SubstituteString;
  trimString?: TrimString;
  typeConverter?: TypeConverter;
  upperCaseString?: UpperCaseString;
}
const Processor = /*@__PURE__*/ __L.at(__c30, 2) as any as S.Schema<Processor>;
export type Processors = Processor[];
const Processors = /*@__PURE__*/ __L.at(__c30, 3);
export interface GetTransformerResponse {
  logGroupIdentifier?: string;
  creationTime?: number;
  lastModifiedTime?: number;
  transformerConfig?: Processor[];
}
const GetTransformerResponse = /*@__PURE__*/ __L.at(
  __c30,
  4,
) as any as S.Schema<GetTransformerResponse>;
export type LogGroupNameRegexPattern = string;
export interface DataSourceFilter {
  name: string;
  type?: string;
}
const DataSourceFilter = DataSource as any as S.Schema<DataSourceFilter>;
export type DataSourceFilters = DataSourceFilter[];
const DataSourceFilters = /*@__PURE__*/ __L.at(__c30, 5);
export type ListAggregateLogGroupSummariesGroupBy =
  | "DATA_SOURCE_NAME_TYPE_AND_FORMAT"
  | "DATA_SOURCE_NAME_AND_TYPE"
  | (string & {});
const ListAggregateLogGroupSummariesGroupBy = S.String;

export type ListLogGroupsRequestLimit = number;
export interface ListAggregateLogGroupSummariesRequest {
  accountIdentifiers?: string[];
  includeLinkedAccounts?: boolean;
  logGroupClass?: LogGroupClass;
  logGroupNamePattern?: string;
  dataSources?: DataSourceFilter[];
  groupBy: ListAggregateLogGroupSummariesGroupBy;
  nextToken?: string;
  limit?: number;
}
const ListAggregateLogGroupSummariesRequest = /*@__PURE__*/ __L.at(
  __c30,
  6,
) as any as S.Schema<ListAggregateLogGroupSummariesRequest>;
export type LogGroupCount = number;
export type GroupingIdentifierKey = string;
export type GroupingIdentifierValue = string;
export interface GroupingIdentifier {
  key?: string;
  value?: string;
}
const GroupingIdentifier = /*@__PURE__*/ __L.at(__c30, 7) as any as S.Schema<GroupingIdentifier>;
export type GroupingIdentifiers = GroupingIdentifier[];
const GroupingIdentifiers = /*@__PURE__*/ __L.at(__c31, 0);
export interface AggregateLogGroupSummary {
  logGroupCount?: number;
  groupingIdentifiers?: GroupingIdentifier[];
}
const AggregateLogGroupSummary = /*@__PURE__*/ __L.at(
  __c31,
  1,
) as any as S.Schema<AggregateLogGroupSummary>;
export type AggregateLogGroupSummaries = AggregateLogGroupSummary[];
const AggregateLogGroupSummaries = /*@__PURE__*/ __L.at(__c31, 2);
export interface ListAggregateLogGroupSummariesResponse {
  aggregateLogGroupSummaries?: AggregateLogGroupSummary[];
  nextToken?: string;
}
const ListAggregateLogGroupSummariesResponse = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<ListAggregateLogGroupSummariesResponse>;
export type SuppressionState = "SUPPRESSED" | "UNSUPPRESSED" | (string & {});
const SuppressionState = S.String;

export type ListAnomaliesLimit = number;
export interface ListAnomaliesRequest {
  anomalyDetectorArn?: string;
  suppressionState?: SuppressionState;
  limit?: number;
  nextToken?: string;
}
const ListAnomaliesRequest = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<ListAnomaliesRequest>;
export type AnomalyId = string;
export type PatternId = string;
export type PatternString = string;
export type PatternRegex = string;
export type Priority = string;
export type Description = string;
export type State = "Active" | "Suppressed" | "Baseline" | (string & {});
const State = S.String;

export type Count = number;
export type Histogram = { [key: string]: number | undefined };
const Histogram = /*@__PURE__*/ __L.at(__c31, 5);
export interface LogEvent {
  timestamp?: number;
  message?: string;
}
const LogEvent = /*@__PURE__*/ __L.at(__c31, 6) as any as S.Schema<LogEvent>;
export type LogSamples = LogEvent[];
const LogSamples = /*@__PURE__*/ __L.at(__c31, 7);
export type DynamicTokenPosition = number;
export type TokenString = string;
export type TokenValue = number;
export type Enumerations = { [key: string]: number | undefined };
const Enumerations = /*@__PURE__*/ __L.at(__c32, 0);
export type InferredTokenName = string;
export interface PatternToken {
  dynamicTokenPosition?: number;
  isDynamic?: boolean;
  tokenString?: string;
  enumerations?: { [key: string]: number | undefined };
  inferredTokenName?: string;
}
const PatternToken = /*@__PURE__*/ __L.at(__c32, 1) as any as S.Schema<PatternToken>;
export type PatternTokens = PatternToken[];
const PatternTokens = /*@__PURE__*/ __L.at(__c32, 2);
export interface Anomaly {
  anomalyId: string;
  patternId: string;
  anomalyDetectorArn: string;
  patternString: string;
  patternRegex?: string;
  priority?: string;
  firstSeen: number;
  lastSeen: number;
  description: string;
  active: boolean;
  state: State;
  histogram: { [key: string]: number | undefined };
  logSamples: LogEvent[];
  patternTokens: PatternToken[];
  logGroupArnList: string[];
  suppressed?: boolean;
  suppressedDate?: number;
  suppressedUntil?: number;
  isPatternLevelSuppression?: boolean;
}
const Anomaly = /*@__PURE__*/ __L.at(__c32, 3) as any as S.Schema<Anomaly>;
export type Anomalies = Anomaly[];
const Anomalies = /*@__PURE__*/ __L.at(__c32, 4);
export interface ListAnomaliesResponse {
  anomalies?: Anomaly[];
  nextToken?: string;
}
const ListAnomaliesResponse = /*@__PURE__*/ __L.at(
  __c32,
  5,
) as any as S.Schema<ListAnomaliesResponse>;
export type IntegrationNamePrefix = string;
export interface ListIntegrationsRequest {
  integrationNamePrefix?: string;
  integrationType?: IntegrationType;
  integrationStatus?: IntegrationStatus;
}
const ListIntegrationsRequest = /*@__PURE__*/ __L.at(
  __c32,
  6,
) as any as S.Schema<ListIntegrationsRequest>;
export interface IntegrationSummary {
  integrationName?: string;
  integrationType?: IntegrationType;
  integrationStatus?: IntegrationStatus;
}
const IntegrationSummary = /*@__PURE__*/ __L.at(__c32, 7) as any as S.Schema<IntegrationSummary>;
export type IntegrationSummaries = IntegrationSummary[];
const IntegrationSummaries = /*@__PURE__*/ __L.at(__c33, 0);
export interface ListIntegrationsResponse {
  integrationSummaries?: IntegrationSummary[];
}
const ListIntegrationsResponse = /*@__PURE__*/ __L.at(
  __c33,
  1,
) as any as S.Schema<ListIntegrationsResponse>;
export type ListLogAnomalyDetectorsLimit = number;
export interface ListLogAnomalyDetectorsRequest {
  filterLogGroupArn?: string;
  limit?: number;
  nextToken?: string;
}
const ListLogAnomalyDetectorsRequest = /*@__PURE__*/ __L.at(
  __c33,
  2,
) as any as S.Schema<ListLogAnomalyDetectorsRequest>;
export interface AnomalyDetector {
  anomalyDetectorArn?: string;
  detectorName?: string;
  logGroupArnList?: string[];
  evaluationFrequency?: EvaluationFrequency;
  filterPattern?: string;
  anomalyDetectorStatus?: AnomalyDetectorStatus;
  kmsKeyId?: string;
  creationTimeStamp?: number;
  lastModifiedTimeStamp?: number;
  anomalyVisibilityTime?: number;
}
const AnomalyDetector = /*@__PURE__*/ __L.at(__c33, 3) as any as S.Schema<AnomalyDetector>;
export type AnomalyDetectors = AnomalyDetector[];
const AnomalyDetectors = /*@__PURE__*/ __L.at(__c33, 4);
export interface ListLogAnomalyDetectorsResponse {
  anomalyDetectors?: AnomalyDetector[];
  nextToken?: string;
}
const ListLogAnomalyDetectorsResponse = /*@__PURE__*/ __L.at(
  __c33,
  5,
) as any as S.Schema<ListLogAnomalyDetectorsResponse>;
export type ListLimit = number;
export type FieldIndexNames = string[];
const FieldIndexNames = RecordFields as any as S.Schema<FieldIndexNames>;
export type TagFilterKey = string;
export type TagFilterValue = string;
export type TagFilterValues = string[];
const TagFilterValues = RecordFields as any as S.Schema<TagFilterValues>;
export interface TagFilter {
  key: string;
  values?: string[];
}
const TagFilter = /*@__PURE__*/ __L.at(__c33, 6) as any as S.Schema<TagFilter>;
export type TagFilters = TagFilter[];
const TagFilters = /*@__PURE__*/ __L.at(__c33, 7);
export interface ListLogGroupsRequest {
  logGroupNamePattern?: string;
  logGroupClass?: LogGroupClass;
  includeLinkedAccounts?: boolean;
  accountIdentifiers?: string[];
  nextToken?: string;
  limit?: number;
  dataSources?: DataSourceFilter[];
  fieldIndexNames?: string[];
  logGroupTags?: TagFilter[];
}
const ListLogGroupsRequest = /*@__PURE__*/ __L.at(
  __c34,
  0,
) as any as S.Schema<ListLogGroupsRequest>;
export interface LogGroupSummary {
  logGroupName?: string;
  logGroupArn?: string;
  logGroupClass?: LogGroupClass;
}
const LogGroupSummary = /*@__PURE__*/ __L.at(__c34, 1) as any as S.Schema<LogGroupSummary>;
export type LogGroupSummaries = LogGroupSummary[];
const LogGroupSummaries = /*@__PURE__*/ __L.at(__c34, 2);
export interface ListLogGroupsResponse {
  logGroups?: LogGroupSummary[];
  nextToken?: string;
}
const ListLogGroupsResponse = /*@__PURE__*/ __L.at(
  __c34,
  3,
) as any as S.Schema<ListLogGroupsResponse>;
export type ListLogGroupsForQueryMaxResults = number;
export interface ListLogGroupsForQueryRequest {
  queryId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListLogGroupsForQueryRequest = /*@__PURE__*/ __L.at(
  __c34,
  4,
) as any as S.Schema<ListLogGroupsForQueryRequest>;
export type LogGroupIdentifiers = string[];
const LogGroupIdentifiers = RecordFields as any as S.Schema<LogGroupIdentifiers>;
export interface ListLogGroupsForQueryResponse {
  logGroupIdentifiers?: string[];
  nextToken?: string;
}
const ListLogGroupsForQueryResponse = /*@__PURE__*/ __L.at(
  __c34,
  5,
) as any as S.Schema<ListLogGroupsForQueryResponse>;
export type ListScheduledQueriesMaxResults = number;
export interface ListScheduledQueriesRequest {
  maxResults?: number;
  nextToken?: string;
  state?: ScheduledQueryState;
  scheduleType?: ScheduleType;
}
const ListScheduledQueriesRequest = /*@__PURE__*/ __L.at(
  __c34,
  6,
) as any as S.Schema<ListScheduledQueriesRequest>;
export interface ScheduledQuerySummary {
  scheduledQueryArn?: string;
  name?: string;
  state?: ScheduledQueryState;
  scheduleType?: ScheduleType;
  lastTriggeredTime?: number;
  lastExecutionStatus?: ExecutionStatus;
  scheduleExpression?: string;
  timezone?: string;
  destinationConfiguration?: DestinationConfiguration;
  creationTime?: number;
  lastUpdatedTime?: number;
}
const ScheduledQuerySummary = /*@__PURE__*/ __L.at(
  __c34,
  7,
) as any as S.Schema<ScheduledQuerySummary>;
export type ScheduledQuerySummaryList = ScheduledQuerySummary[];
const ScheduledQuerySummaryList = /*@__PURE__*/ __L.at(__c35, 0);
export interface ListScheduledQueriesResponse {
  nextToken?: string;
  scheduledQueries?: ScheduledQuerySummary[];
}
const ListScheduledQueriesResponse = /*@__PURE__*/ __L.at(
  __c35,
  1,
) as any as S.Schema<ListScheduledQueriesResponse>;
export type ListSourcesForS3TableIntegrationMaxResults = number;
export interface ListSourcesForS3TableIntegrationRequest {
  integrationArn: string;
  maxResults?: number;
  nextToken?: string;
}
const ListSourcesForS3TableIntegrationRequest = /*@__PURE__*/ __L.at(
  __c35,
  2,
) as any as S.Schema<ListSourcesForS3TableIntegrationRequest>;
export type S3TableIntegrationSourceStatus =
  | "ACTIVE"
  | "UNHEALTHY"
  | "FAILED"
  | "DATA_SOURCE_DELETE_IN_PROGRESS"
  | (string & {});
const S3TableIntegrationSourceStatus = S.String;

export type S3TableIntegrationSourceStatusReason = string;
export interface S3TableIntegrationSource {
  identifier?: string;
  dataSource?: DataSource;
  status?: S3TableIntegrationSourceStatus;
  statusReason?: string;
  createdTimeStamp?: number;
  parentSourceIdentifier?: string;
}
const S3TableIntegrationSource = /*@__PURE__*/ __L.at(
  __c35,
  3,
) as any as S.Schema<S3TableIntegrationSource>;
export type S3TableIntegrationSources = S3TableIntegrationSource[];
const S3TableIntegrationSources = /*@__PURE__*/ __L.at(__c35, 4);
export interface ListSourcesForS3TableIntegrationResponse {
  sources?: S3TableIntegrationSource[];
  nextToken?: string;
}
const ListSourcesForS3TableIntegrationResponse = /*@__PURE__*/ __L.at(
  __c35,
  5,
) as any as S.Schema<ListSourcesForS3TableIntegrationResponse>;
export type ListSyslogConfigurationsMaxResults = number;
export interface ListSyslogConfigurationsRequest {
  logGroupIdentifier?: string;
  vpcEndpointId?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListSyslogConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c35,
  6,
) as any as S.Schema<ListSyslogConfigurationsRequest>;
export type SyslogSourceType = "VPCE" | (string & {});
const SyslogSourceType = S.String;

export interface SyslogConfiguration {
  logGroupArn?: string;
  sourceType?: SyslogSourceType;
  vpcEndpointId?: string;
  createdAt?: number;
}
const SyslogConfiguration = /*@__PURE__*/ __L.at(__c35, 7) as any as S.Schema<SyslogConfiguration>;
export type SyslogConfigurations = SyslogConfiguration[];
const SyslogConfigurations = /*@__PURE__*/ __L.at(__c36, 0);
export interface ListSyslogConfigurationsResponse {
  syslogConfigurations?: SyslogConfiguration[];
  nextToken?: string;
}
const ListSyslogConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c36,
  1,
) as any as S.Schema<ListSyslogConfigurationsResponse>;
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c36,
  2,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c36,
  3,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListTagsLogGroupRequest {
  logGroupName: string;
}
const ListTagsLogGroupRequest = /*@__PURE__*/ __L.at(
  __c36,
  4,
) as any as S.Schema<ListTagsLogGroupRequest>;
export interface ListTagsLogGroupResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsLogGroupResponse = /*@__PURE__*/ __L.at(
  __c36,
  5,
) as any as S.Schema<ListTagsLogGroupResponse>;
export interface PutAccountPolicyRequest {
  policyName: string;
  policyDocument: string;
  policyType: PolicyType;
  scope?: Scope;
  selectionCriteria?: string;
}
const PutAccountPolicyRequest = /*@__PURE__*/ __L.at(
  __c36,
  6,
) as any as S.Schema<PutAccountPolicyRequest>;
export interface PutAccountPolicyResponse {
  accountPolicy?: AccountPolicy;
}
const PutAccountPolicyResponse = /*@__PURE__*/ __L.at(
  __c36,
  7,
) as any as S.Schema<PutAccountPolicyResponse>;
export interface PutBearerTokenAuthenticationRequest {
  logGroupIdentifier: string;
  bearerTokenAuthenticationEnabled: boolean;
}
const PutBearerTokenAuthenticationRequest = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<PutBearerTokenAuthenticationRequest>;
export interface PutBearerTokenAuthenticationResponse {}
const PutBearerTokenAuthenticationResponse =
  DeleteAccountPolicyResponse as any as S.Schema<PutBearerTokenAuthenticationResponse>;
export interface PutDataProtectionPolicyRequest {
  logGroupIdentifier: string;
  policyDocument: string;
}
const PutDataProtectionPolicyRequest = /*@__PURE__*/ __L.at(
  __c37,
  1,
) as any as S.Schema<PutDataProtectionPolicyRequest>;
export interface PutDataProtectionPolicyResponse {
  logGroupIdentifier?: string;
  policyDocument?: string;
  lastUpdatedTime?: number;
}
const PutDataProtectionPolicyResponse =
  GetDataProtectionPolicyResponse as any as S.Schema<PutDataProtectionPolicyResponse>;
export interface PutDeliveryDestinationRequest {
  name: string;
  outputFormat?: OutputFormat;
  deliveryDestinationConfiguration?: DeliveryDestinationConfiguration;
  deliveryDestinationType?: DeliveryDestinationType;
  roleArn?: string;
  tags?: { [key: string]: string | undefined };
}
const PutDeliveryDestinationRequest = /*@__PURE__*/ __L.at(
  __c37,
  2,
) as any as S.Schema<PutDeliveryDestinationRequest>;
export interface PutDeliveryDestinationResponse {
  deliveryDestination?: DeliveryDestination;
}
const PutDeliveryDestinationResponse =
  GetDeliveryDestinationResponse as any as S.Schema<PutDeliveryDestinationResponse>;
export interface PutDeliveryDestinationPolicyRequest {
  deliveryDestinationName: string;
  deliveryDestinationPolicy: string;
}
const PutDeliveryDestinationPolicyRequest = /*@__PURE__*/ __L.at(
  __c37,
  3,
) as any as S.Schema<PutDeliveryDestinationPolicyRequest>;
export interface PutDeliveryDestinationPolicyResponse {
  policy?: Policy;
}
const PutDeliveryDestinationPolicyResponse =
  GetDeliveryDestinationPolicyResponse as any as S.Schema<PutDeliveryDestinationPolicyResponse>;
export interface PutDeliverySourceRequest {
  name: string;
  resourceArn: string;
  logType: string;
  tags?: { [key: string]: string | undefined };
  deliverySourceConfiguration?: { [key: string]: string | undefined };
}
const PutDeliverySourceRequest = /*@__PURE__*/ __L.at(
  __c37,
  4,
) as any as S.Schema<PutDeliverySourceRequest>;
export interface PutDeliverySourceResponse {
  deliverySource?: DeliverySource;
}
const PutDeliverySourceResponse =
  GetDeliverySourceResponse as any as S.Schema<PutDeliverySourceResponse>;
export interface PutDestinationRequest {
  destinationName: string;
  targetArn: string;
  roleArn: string;
  tags?: { [key: string]: string | undefined };
}
const PutDestinationRequest = /*@__PURE__*/ __L.at(
  __c37,
  5,
) as any as S.Schema<PutDestinationRequest>;
export interface PutDestinationResponse {
  destination?: Destination;
}
const PutDestinationResponse = /*@__PURE__*/ __L.at(
  __c37,
  6,
) as any as S.Schema<PutDestinationResponse>;
export type ForceUpdate = boolean;
export interface PutDestinationPolicyRequest {
  destinationName: string;
  accessPolicy: string;
  forceUpdate?: boolean;
}
const PutDestinationPolicyRequest = /*@__PURE__*/ __L.at(
  __c37,
  7,
) as any as S.Schema<PutDestinationPolicyRequest>;
export interface PutDestinationPolicyResponse {}
const PutDestinationPolicyResponse =
  DeleteAccountPolicyResponse as any as S.Schema<PutDestinationPolicyResponse>;
export interface PutIndexPolicyRequest {
  logGroupIdentifier: string;
  policyDocument: string;
}
const PutIndexPolicyRequest = /*@__PURE__*/ __L.at(
  __c38,
  0,
) as any as S.Schema<PutIndexPolicyRequest>;
export interface PutIndexPolicyResponse {
  indexPolicy?: IndexPolicy;
}
const PutIndexPolicyResponse = /*@__PURE__*/ __L.at(
  __c38,
  1,
) as any as S.Schema<PutIndexPolicyResponse>;
export type DashboardViewerPrincipals = string[];
const DashboardViewerPrincipals = RecordFields as any as S.Schema<DashboardViewerPrincipals>;
export type CollectionRetentionDays = number;
export interface OpenSearchResourceConfig {
  kmsKeyArn?: string;
  dataSourceRoleArn: string;
  dashboardViewerPrincipals: string[];
  applicationArn?: string;
  retentionDays: number;
}
const OpenSearchResourceConfig = /*@__PURE__*/ __L.at(
  __c38,
  2,
) as any as S.Schema<OpenSearchResourceConfig>;
export type ResourceConfig = { openSearchResourceConfig: OpenSearchResourceConfig };
const ResourceConfig = /*@__PURE__*/ __L.at(__c38, 3);
export interface PutIntegrationRequest {
  integrationName: string;
  resourceConfig: ResourceConfig;
  integrationType: IntegrationType;
}
const PutIntegrationRequest = /*@__PURE__*/ __L.at(
  __c38,
  4,
) as any as S.Schema<PutIntegrationRequest>;
export interface PutIntegrationResponse {
  integrationName?: string;
  integrationStatus?: IntegrationStatus;
}
const PutIntegrationResponse = /*@__PURE__*/ __L.at(
  __c38,
  5,
) as any as S.Schema<PutIntegrationResponse>;
export interface InputLogEvent {
  timestamp: number;
  message: string;
}
const InputLogEvent = /*@__PURE__*/ __L.at(__c38, 6) as any as S.Schema<InputLogEvent>;
export type InputLogEvents = InputLogEvent[];
const InputLogEvents = /*@__PURE__*/ __L.at(__c38, 7);
export type EntityKeyAttributesKey = string;
export type EntityKeyAttributesValue = string;
export type EntityKeyAttributes = { [key: string]: string | undefined };
const EntityKeyAttributes = DeliverySourceConfiguration as any as S.Schema<EntityKeyAttributes>;
export type EntityAttributesKey = string;
export type EntityAttributesValue = string;
export type EntityAttributes = { [key: string]: string | undefined };
const EntityAttributes = DeliverySourceConfiguration as any as S.Schema<EntityAttributes>;
export interface Entity {
  keyAttributes?: { [key: string]: string | undefined };
  attributes?: { [key: string]: string | undefined };
}
const Entity = /*@__PURE__*/ __L.at(__c39, 0) as any as S.Schema<Entity>;
export interface PutLogEventsRequest {
  logGroupName: string;
  logStreamName: string;
  logEvents: InputLogEvent[];
  sequenceToken?: string;
  entity?: Entity;
}
const PutLogEventsRequest = /*@__PURE__*/ __L.at(__c39, 1) as any as S.Schema<PutLogEventsRequest>;
export type LogEventIndex = number;
export interface RejectedLogEventsInfo {
  tooNewLogEventStartIndex?: number;
  tooOldLogEventEndIndex?: number;
  expiredLogEventEndIndex?: number;
}
const RejectedLogEventsInfo = /*@__PURE__*/ __L.at(
  __c39,
  2,
) as any as S.Schema<RejectedLogEventsInfo>;
export type EntityRejectionErrorType =
  | "InvalidEntity"
  | "InvalidTypeValue"
  | "InvalidKeyAttributes"
  | "InvalidAttributes"
  | "EntitySizeTooLarge"
  | "UnsupportedLogGroupType"
  | "MissingRequiredFields"
  | (string & {});
const EntityRejectionErrorType = S.String;

export interface RejectedEntityInfo {
  errorType: EntityRejectionErrorType;
}
const RejectedEntityInfo = /*@__PURE__*/ __L.at(__c39, 3) as any as S.Schema<RejectedEntityInfo>;
export interface PutLogEventsResponse {
  nextSequenceToken?: string;
  rejectedLogEventsInfo?: RejectedLogEventsInfo;
  rejectedEntityInfo?: RejectedEntityInfo;
}
const PutLogEventsResponse = /*@__PURE__*/ __L.at(
  __c39,
  4,
) as any as S.Schema<PutLogEventsResponse>;
export interface PutLogGroupDeletionProtectionRequest {
  logGroupIdentifier: string;
  deletionProtectionEnabled: boolean;
}
const PutLogGroupDeletionProtectionRequest = /*@__PURE__*/ __L.at(
  __c39,
  5,
) as any as S.Schema<PutLogGroupDeletionProtectionRequest>;
export interface PutLogGroupDeletionProtectionResponse {}
const PutLogGroupDeletionProtectionResponse =
  DeleteAccountPolicyResponse as any as S.Schema<PutLogGroupDeletionProtectionResponse>;
export interface PutMetricFilterRequest {
  logGroupName: string;
  filterName: string;
  filterPattern: string;
  metricTransformations: MetricTransformation[];
  applyOnTransformedLogs?: boolean;
  fieldSelectionCriteria?: string;
  emitSystemFieldDimensions?: string[];
}
const PutMetricFilterRequest = /*@__PURE__*/ __L.at(
  __c39,
  6,
) as any as S.Schema<PutMetricFilterRequest>;
export interface PutMetricFilterResponse {}
const PutMetricFilterResponse = AssociateKmsKeyResponse as any as S.Schema<PutMetricFilterResponse>;
export type ClientToken = string;
export interface PutQueryDefinitionRequest {
  queryLanguage?: QueryLanguage;
  name: string;
  queryDefinitionId?: string;
  logGroupNames?: string[];
  queryString: string;
  clientToken?: string;
  parameters?: QueryParameter[];
}
const PutQueryDefinitionRequest = /*@__PURE__*/ __L.at(
  __c39,
  7,
) as any as S.Schema<PutQueryDefinitionRequest>;
export interface PutQueryDefinitionResponse {
  queryDefinitionId?: string;
}
const PutQueryDefinitionResponse = /*@__PURE__*/ __L.at(
  __c40,
  0,
) as any as S.Schema<PutQueryDefinitionResponse>;
export interface PutResourcePolicyRequest {
  policyName?: string;
  policyDocument?: string;
  resourceArn?: string;
  expectedRevisionId?: string;
}
const PutResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c40,
  1,
) as any as S.Schema<PutResourcePolicyRequest>;
export interface PutResourcePolicyResponse {
  resourcePolicy?: ResourcePolicy;
  revisionId?: string;
}
const PutResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c40,
  2,
) as any as S.Schema<PutResourcePolicyResponse>;
export interface PutRetentionPolicyRequest {
  logGroupName: string;
  retentionInDays: number;
}
const PutRetentionPolicyRequest = /*@__PURE__*/ __L.at(
  __c40,
  3,
) as any as S.Schema<PutRetentionPolicyRequest>;
export interface PutRetentionPolicyResponse {}
const PutRetentionPolicyResponse =
  DeleteAccountPolicyResponse as any as S.Schema<PutRetentionPolicyResponse>;
export interface PutStorageTierPolicyRequest {
  storageTier: StorageTier;
}
const PutStorageTierPolicyRequest = /*@__PURE__*/ __L.at(
  __c40,
  4,
) as any as S.Schema<PutStorageTierPolicyRequest>;
export interface PutStorageTierPolicyResponse {
  storageTier?: StorageTier;
  lastUpdatedTime?: number;
}
const PutStorageTierPolicyResponse =
  GetStorageTierPolicyResponse as any as S.Schema<PutStorageTierPolicyResponse>;
export interface PutSubscriptionFilterRequest {
  logGroupName: string;
  filterName: string;
  filterPattern: string;
  destinationArn: string;
  roleArn?: string;
  distribution?: Distribution;
  applyOnTransformedLogs?: boolean;
  fieldSelectionCriteria?: string;
  emitSystemFields?: string[];
}
const PutSubscriptionFilterRequest = /*@__PURE__*/ __L.at(
  __c40,
  5,
) as any as S.Schema<PutSubscriptionFilterRequest>;
export interface PutSubscriptionFilterResponse {}
const PutSubscriptionFilterResponse =
  DeleteAccountPolicyResponse as any as S.Schema<PutSubscriptionFilterResponse>;
export interface PutSyslogConfigurationRequest {
  logGroupIdentifier: string;
  vpcEndpointId?: string;
}
const PutSyslogConfigurationRequest = /*@__PURE__*/ __L.at(
  __c40,
  6,
) as any as S.Schema<PutSyslogConfigurationRequest>;
export interface PutSyslogConfigurationResponse {}
const PutSyslogConfigurationResponse =
  DeleteAccountPolicyResponse as any as S.Schema<PutSyslogConfigurationResponse>;
export interface PutTransformerRequest {
  logGroupIdentifier: string;
  transformerConfig: Processor[];
}
const PutTransformerRequest = /*@__PURE__*/ __L.at(
  __c40,
  7,
) as any as S.Schema<PutTransformerRequest>;
export interface PutTransformerResponse {}
const PutTransformerResponse = CreateLogGroupResponse as any as S.Schema<PutTransformerResponse>;
export type StartLiveTailLogGroupIdentifiers = string[];
const StartLiveTailLogGroupIdentifiers =
  RecordFields as any as S.Schema<StartLiveTailLogGroupIdentifiers>;
export interface StartLiveTailRequest {
  logGroupIdentifiers: string[];
  logStreamNames?: string[];
  logStreamNamePrefixes?: string[];
  logEventFilterPattern?: string;
}
const StartLiveTailRequest = /*@__PURE__*/ __L.at(
  __c41,
  0,
) as any as S.Schema<StartLiveTailRequest>;
export type RequestId = string;
export type SessionId = string;
export interface LiveTailSessionStart {
  requestId?: string;
  sessionId?: string;
  logGroupIdentifiers?: string[];
  logStreamNames?: string[];
  logStreamNamePrefixes?: string[];
  logEventFilterPattern?: string;
}
const LiveTailSessionStart = /*@__PURE__*/ __L.at(
  __c41,
  1,
) as any as S.Schema<LiveTailSessionStart>;
export type IsSampled = boolean;
export interface LiveTailSessionMetadata {
  sampled?: boolean;
}
const LiveTailSessionMetadata = /*@__PURE__*/ __L.at(
  __c41,
  2,
) as any as S.Schema<LiveTailSessionMetadata>;
export interface LiveTailSessionLogEvent {
  logStreamName?: string;
  logGroupIdentifier?: string;
  message?: string;
  timestamp?: number;
  ingestionTime?: number;
}
const LiveTailSessionLogEvent = /*@__PURE__*/ __L.at(
  __c41,
  3,
) as any as S.Schema<LiveTailSessionLogEvent>;
export type LiveTailSessionResults = LiveTailSessionLogEvent[];
const LiveTailSessionResults = /*@__PURE__*/ __L.at(__c41, 4);
export interface LiveTailSessionUpdate {
  sessionMetadata?: LiveTailSessionMetadata;
  sessionResults?: LiveTailSessionLogEvent[];
}
const LiveTailSessionUpdate = /*@__PURE__*/ __L.at(
  __c41,
  5,
) as any as S.Schema<LiveTailSessionUpdate>;
export interface SessionTimeoutException {
  message?: string;
}
const SessionTimeoutException = /*@__PURE__*/ __L.at(
  __c41,
  6,
) as any as S.Schema<SessionTimeoutException>;
export interface SessionStreamingException {
  message?: string;
}
const SessionStreamingException =
  InternalStreamingException as any as S.Schema<SessionStreamingException>;
export type StartLiveTailResponseStream =
  | {
      sessionStart: LiveTailSessionStart;
      sessionUpdate?: never;
      SessionTimeoutException?: never;
      SessionStreamingException?: never;
    }
  | {
      sessionStart?: never;
      sessionUpdate: LiveTailSessionUpdate;
      SessionTimeoutException?: never;
      SessionStreamingException?: never;
    }
  | {
      sessionStart?: never;
      sessionUpdate?: never;
      SessionTimeoutException: SessionTimeoutException;
      SessionStreamingException?: never;
    }
  | {
      sessionStart?: never;
      sessionUpdate?: never;
      SessionTimeoutException?: never;
      SessionStreamingException: SessionStreamingException;
    };
const StartLiveTailResponseStream = /*@__PURE__*/ __L.at(__c41, 7) as any as S.Schema<
  stream.Stream<StartLiveTailResponseStream, Error, never>
>;
export interface StartLiveTailResponse {
  responseStream?: stream.Stream<StartLiveTailResponseStream, Error, never>;
}
const StartLiveTailResponse = /*@__PURE__*/ __L.at(
  __c42,
  0,
) as any as S.Schema<StartLiveTailResponse>;
export type EventsLimitStartQuery = number;
export interface StartQueryRequest {
  queryLanguage?: QueryLanguage;
  logGroupName?: string;
  logGroupNames?: string[];
  logGroupIdentifiers?: string[];
  startTime: number;
  endTime: number;
  queryString: string;
  limit?: number;
}
const StartQueryRequest = /*@__PURE__*/ __L.at(__c42, 1) as any as S.Schema<StartQueryRequest>;
export interface StartQueryResponse {
  queryId?: string;
}
const StartQueryResponse = /*@__PURE__*/ __L.at(__c42, 2) as any as S.Schema<StartQueryResponse>;
export interface StopQueryRequest {
  queryId: string;
}
const StopQueryRequest = /*@__PURE__*/ __L.at(__c42, 3) as any as S.Schema<StopQueryRequest>;
export interface StopQueryResponse {
  success?: boolean;
}
const StopQueryResponse = /*@__PURE__*/ __L.at(__c42, 4) as any as S.Schema<StopQueryResponse>;
export interface TagLogGroupRequest {
  logGroupName: string;
  tags: { [key: string]: string | undefined };
}
const TagLogGroupRequest = /*@__PURE__*/ __L.at(__c42, 5) as any as S.Schema<TagLogGroupRequest>;
export interface TagLogGroupResponse {}
const TagLogGroupResponse = /*@__PURE__*/ __L.at(__c42, 6) as any as S.Schema<TagLogGroupResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c42, 7) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = TagLogGroupResponse as any as S.Schema<TagResourceResponse>;
export type TestEventMessages = string[];
const TestEventMessages = RecordFields as any as S.Schema<TestEventMessages>;
export interface TestMetricFilterRequest {
  filterPattern: string;
  logEventMessages: string[];
}
const TestMetricFilterRequest = /*@__PURE__*/ __L.at(
  __c43,
  0,
) as any as S.Schema<TestMetricFilterRequest>;
export type EventNumber = number;
export type Token = string;
export type ExtractedValues = { [key: string]: string | undefined };
const ExtractedValues = DeliverySourceConfiguration as any as S.Schema<ExtractedValues>;
export interface MetricFilterMatchRecord {
  eventNumber?: number;
  eventMessage?: string;
  extractedValues?: { [key: string]: string | undefined };
}
const MetricFilterMatchRecord = /*@__PURE__*/ __L.at(
  __c43,
  1,
) as any as S.Schema<MetricFilterMatchRecord>;
export type MetricFilterMatches = MetricFilterMatchRecord[];
const MetricFilterMatches = /*@__PURE__*/ __L.at(__c43, 2);
export interface TestMetricFilterResponse {
  matches?: MetricFilterMatchRecord[];
}
const TestMetricFilterResponse = /*@__PURE__*/ __L.at(
  __c43,
  3,
) as any as S.Schema<TestMetricFilterResponse>;
export interface TestTransformerRequest {
  transformerConfig: Processor[];
  logEventMessages: string[];
}
const TestTransformerRequest = /*@__PURE__*/ __L.at(
  __c43,
  4,
) as any as S.Schema<TestTransformerRequest>;
export type TransformedEventMessage = string;
export interface TransformedLogRecord {
  eventNumber?: number;
  eventMessage?: string;
  transformedEventMessage?: string;
}
const TransformedLogRecord = /*@__PURE__*/ __L.at(
  __c43,
  5,
) as any as S.Schema<TransformedLogRecord>;
export type TransformedLogs = TransformedLogRecord[];
const TransformedLogs = /*@__PURE__*/ __L.at(__c43, 6);
export interface TestTransformerResponse {
  transformedLogs?: TransformedLogRecord[];
}
const TestTransformerResponse = /*@__PURE__*/ __L.at(
  __c43,
  7,
) as any as S.Schema<TestTransformerResponse>;
export type TagList = string[];
const TagList = RecordFields as any as S.Schema<TagList>;
export interface UntagLogGroupRequest {
  logGroupName: string;
  tags: string[];
}
const UntagLogGroupRequest = /*@__PURE__*/ __L.at(
  __c44,
  0,
) as any as S.Schema<UntagLogGroupRequest>;
export interface UntagLogGroupResponse {}
const UntagLogGroupResponse = TagLogGroupResponse as any as S.Schema<UntagLogGroupResponse>;
export type TagKeyList = string[];
const TagKeyList = RecordFields as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c44,
  1,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TagLogGroupResponse as any as S.Schema<UntagResourceResponse>;
export type SuppressionType = "LIMITED" | "INFINITE" | (string & {});
const SuppressionType = S.String;

export type SuppressionUnit = "SECONDS" | "MINUTES" | "HOURS" | (string & {});
const SuppressionUnit = S.String;

export interface SuppressionPeriod {
  value?: number;
  suppressionUnit?: SuppressionUnit;
}
const SuppressionPeriod = /*@__PURE__*/ __L.at(__c44, 2) as any as S.Schema<SuppressionPeriod>;
export type Baseline = boolean;
export interface UpdateAnomalyRequest {
  anomalyId?: string;
  patternId?: string;
  anomalyDetectorArn: string;
  suppressionType?: SuppressionType;
  suppressionPeriod?: SuppressionPeriod;
  baseline?: boolean;
}
const UpdateAnomalyRequest = /*@__PURE__*/ __L.at(
  __c44,
  3,
) as any as S.Schema<UpdateAnomalyRequest>;
export interface UpdateAnomalyResponse {}
const UpdateAnomalyResponse = TagLogGroupResponse as any as S.Schema<UpdateAnomalyResponse>;
export interface UpdateDeliveryConfigurationRequest {
  id: string;
  recordFields?: string[];
  fieldDelimiter?: string;
  s3DeliveryConfiguration?: S3DeliveryConfiguration;
}
const UpdateDeliveryConfigurationRequest = /*@__PURE__*/ __L.at(
  __c44,
  4,
) as any as S.Schema<UpdateDeliveryConfigurationRequest>;
export interface UpdateDeliveryConfigurationResponse {}
const UpdateDeliveryConfigurationResponse =
  DeleteAccountPolicyResponse as any as S.Schema<UpdateDeliveryConfigurationResponse>;
export interface UpdateLogAnomalyDetectorRequest {
  anomalyDetectorArn: string;
  evaluationFrequency?: EvaluationFrequency;
  filterPattern?: string;
  anomalyVisibilityTime?: number;
  enabled: boolean;
}
const UpdateLogAnomalyDetectorRequest = /*@__PURE__*/ __L.at(
  __c44,
  5,
) as any as S.Schema<UpdateLogAnomalyDetectorRequest>;
export interface UpdateLogAnomalyDetectorResponse {}
const UpdateLogAnomalyDetectorResponse =
  DeleteAccountPolicyResponse as any as S.Schema<UpdateLogAnomalyDetectorResponse>;
export interface UpdateLookupTableRequest {
  lookupTableArn: string;
  description?: string;
  tableBody?: string;
  queryId?: string;
  kmsKeyId?: string;
}
const UpdateLookupTableRequest = /*@__PURE__*/ __L.at(
  __c44,
  6,
) as any as S.Schema<UpdateLookupTableRequest>;
export interface UpdateLookupTableResponse {
  lookupTableArn?: string;
  lastUpdatedTime?: number;
}
const UpdateLookupTableResponse = /*@__PURE__*/ __L.at(
  __c44,
  7,
) as any as S.Schema<UpdateLookupTableResponse>;
export interface UpdateScheduledQueryRequest {
  identifier: string;
  description?: string;
  queryLanguage: QueryLanguage;
  queryString: string;
  logGroupIdentifiers?: string[];
  scheduleExpression: string;
  timezone?: string;
  startTimeOffset?: number;
  endTimeOffset?: number;
  destinationConfiguration?: DestinationConfiguration;
  scheduleStartTime?: number;
  scheduleEndTime?: number;
  executionRoleArn: string;
  state?: ScheduledQueryState;
}
const UpdateScheduledQueryRequest = /*@__PURE__*/ __L.at(
  __c45,
  0,
) as any as S.Schema<UpdateScheduledQueryRequest>;
export interface UpdateScheduledQueryResponse {
  scheduledQueryArn?: string;
  name?: string;
  description?: string;
  queryLanguage?: QueryLanguage;
  queryString?: string;
  logGroupIdentifiers?: string[];
  scheduleExpression?: string;
  timezone?: string;
  startTimeOffset?: number;
  endTimeOffset?: number;
  destinationConfiguration?: DestinationConfiguration;
  state?: ScheduledQueryState;
  scheduleType?: ScheduleType;
  lastTriggeredTime?: number;
  lastExecutionStatus?: ExecutionStatus;
  scheduleStartTime?: number;
  scheduleEndTime?: number;
  executionRoleArn?: string;
  creationTime?: number;
  lastUpdatedTime?: number;
}
const UpdateScheduledQueryResponse =
  GetScheduledQueryResponse as any as S.Schema<UpdateScheduledQueryResponse>;
export type QueryCharOffset = number;
export interface QueryCompileErrorLocation {
  startCharOffset?: number;
  endCharOffset?: number;
}
const QueryCompileErrorLocation = /*@__PURE__*/ __L.at(
  __c45,
  1,
) as any as S.Schema<QueryCompileErrorLocation>;
export interface QueryCompileError {
  location?: QueryCompileErrorLocation;
  message?: string;
}
const QueryCompileError = /*@__PURE__*/ __L.at(__c45, 2) as any as S.Schema<QueryCompileError>;
export type AssociateKmsKeyError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Associates the specified KMS key with either one log group in the
 * account, or with all stored CloudWatch Logs query insights results in the
 * account.
 *
 * When you use `AssociateKmsKey`, you specify either the
 * `logGroupName` parameter or the `resourceIdentifier` parameter. You
 * can't specify both of those parameters in the same operation.
 *
 * - Specify the `logGroupName` parameter to cause log events ingested into that
 * log group to be encrypted with that key. Only the log events ingested after the key is
 * associated are encrypted with that key.
 *
 * Associating a KMS key with a log group overrides any existing
 * associations between the log group and a KMS key. After a KMS key is associated with a log group, all newly ingested data for the log group
 * is encrypted using the KMS key. This association is stored as long as the
 * data encrypted with the KMS key is still within CloudWatch Logs. This
 * enables CloudWatch Logs to decrypt this data whenever it is requested.
 *
 * Associating a key with a log group does not cause the results of queries of that log
 * group to be encrypted with that key. To have query results encrypted with a KMS key, you must use an `AssociateKmsKey` operation with the
 * `resourceIdentifier` parameter that specifies a `query-result`
 * resource.
 *
 * - Specify the `resourceIdentifier` parameter with a `query-result`
 * resource, to use that key to encrypt the stored results of all future StartQuery operations in the account. The response from a GetQueryResults operation will still return the query results in plain
 * text.
 *
 * Even if you have not associated a key with your query results, the query results are
 * encrypted when stored, using the default CloudWatch Logs method.
 *
 * If you run a query from a monitoring account that queries logs in a source account,
 * the query results key from the monitoring account, if any, is used.
 *
 * If you delete the key that is used to encrypt log events or log group query results,
 * then all the associated stored log events or query results that were encrypted with that key
 * will be unencryptable and unusable.
 *
 * CloudWatch Logs supports only symmetric KMS keys. Do not associate an
 * asymmetric KMS key with your log group or query results. For more
 * information, see Using Symmetric and Asymmetric
 * Keys.
 *
 * It can take up to 5 minutes for this operation to take effect.
 *
 * If you attempt to associate a KMS key with a log group but the KMS key does not exist or the KMS key is disabled, you receive an
 * `InvalidParameterException` error.
 */
export const associateKmsKey: API.OperationMethod<
  AssociateKmsKeyRequest,
  AssociateKmsKeyResponse,
  AssociateKmsKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateKmsKeyRequest,
  output: AssociateKmsKeyResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateKmsKey",
}));

export type AssociateSourceToS3TableIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a data source with an S3 Table Integration for query access in the 'logs'
 * namespace. This enables querying log data using analytics engines that support Iceberg such as
 * Amazon Athena, Amazon Redshift, and Apache Spark.
 */
export const associateSourceToS3TableIntegration: API.OperationMethod<
  AssociateSourceToS3TableIntegrationRequest,
  AssociateSourceToS3TableIntegrationResponse,
  AssociateSourceToS3TableIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateSourceToS3TableIntegrationRequest,
  output: AssociateSourceToS3TableIntegrationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateSourceToS3TableIntegration",
}));

export type CancelExportTaskError =
  | InvalidOperationException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Cancels the specified export task.
 *
 * The task must be in the `PENDING` or `RUNNING` state.
 */
export const cancelExportTask: API.OperationMethod<
  CancelExportTaskRequest,
  CancelExportTaskResponse,
  CancelExportTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelExportTaskRequest,
  output: CancelExportTaskResponse,
  errors: [
    InvalidOperationException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelExportTask",
}));

export type CancelImportTaskError =
  | AccessDeniedException
  | InvalidOperationException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Cancels an active import task and stops importing data from the CloudTrail Lake Event Data Store.
 */
export const cancelImportTask: API.OperationMethod<
  CancelImportTaskRequest,
  CancelImportTaskResponse,
  CancelImportTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelImportTaskRequest,
  output: CancelImportTaskResponse,
  errors: [
    AccessDeniedException,
    InvalidOperationException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelImportTask",
}));

export type CreateDeliveryError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a *delivery*. A delivery is a connection between a logical
 * *delivery source* and a logical *delivery destination*
 * that you have already created.
 *
 * Only some Amazon Web Services services support being configured as a delivery source using
 * this operation. These services are listed as Supported [V2
 * Permissions] in the table at Enabling logging from
 * Amazon Web Services services.
 *
 * A delivery destination can represent a log group in CloudWatch Logs, an Amazon S3 bucket, a delivery stream in Firehose, or X-Ray.
 *
 * To configure logs delivery between a supported Amazon Web Services service and a
 * destination, you must do the following:
 *
 * - Create a delivery source, which is a logical object that represents the resource that
 * is actually sending the logs. For more information, see PutDeliverySource.
 *
 * - Create a *delivery destination*, which is a logical object that
 * represents the actual delivery destination. For more information, see PutDeliveryDestination.
 *
 * - If you are delivering logs cross-account, you must use PutDeliveryDestinationPolicy in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 *
 * - Use `CreateDelivery` to create a *delivery* by pairing
 * exactly one delivery source and one delivery destination.
 *
 * You can configure a single delivery source to send logs to multiple destinations by
 * creating multiple deliveries. You can also create multiple deliveries to configure multiple
 * delivery sources to send logs to the same delivery destination.
 *
 * To update an existing delivery configuration, use UpdateDeliveryConfiguration.
 */
export const createDelivery: API.OperationMethod<
  CreateDeliveryRequest,
  CreateDeliveryResponse,
  CreateDeliveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDeliveryRequest,
  output: CreateDeliveryResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDelivery",
}));

export type CreateExportTaskError =
  | InvalidParameterException
  | LimitExceededException
  | OperationAbortedException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates an export task so that you can efficiently export data from a log group to an
 * Amazon S3 bucket. When you perform a `CreateExportTask` operation, you must use
 * credentials that have permission to write to the S3 bucket that you specify as the
 * destination.
 *
 * Exporting log data to S3 buckets that are encrypted by KMS is supported.
 * Exporting log data to Amazon S3 buckets that have S3 Object Lock enabled with a
 * retention period is also supported.
 *
 * Exporting to S3 buckets that are encrypted with AES-256 is supported.
 *
 * This is an asynchronous call. If all the required information is provided, this
 * operation initiates an export task and responds with the ID of the task. After the task has
 * started, you can use DescribeExportTasks to get the status of the export task. Each account can only
 * have one active (`RUNNING` or `PENDING`) export task at a time. To
 * cancel an export task, use CancelExportTask.
 *
 * You can export logs from multiple log groups or multiple time ranges to the same S3
 * bucket. To separate log data for each export task, specify a prefix to be used as the Amazon
 * S3 key prefix for all exported objects.
 *
 * We recommend that you don't regularly export to Amazon S3 as a way to
 * continuously archive your logs. For that use case, we instead recommend that you use
 * subscriptions. For more information about subscriptions, see Real-time processing of log data
 * with subscriptions.
 *
 * Time-based sorting on chunks of log data inside an exported file is not guaranteed. You
 * can sort the exported log field data by using Linux utilities.
 */
export const createExportTask: API.OperationMethod<
  CreateExportTaskRequest,
  CreateExportTaskResponse,
  CreateExportTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateExportTaskRequest,
  output: CreateExportTaskResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    OperationAbortedException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateExportTask",
}));

export type CreateImportTaskError =
  | AccessDeniedException
  | ConflictException
  | InvalidOperationException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts an import from a data source to CloudWatch Log and creates a managed log group as the destination for the imported data.
 * Currently, CloudTrail Event Data Store is the only supported data source.
 *
 * The import task must satisfy the following constraints:
 *
 * - The specified source must be in an ACTIVE state.
 *
 * - The API caller must have permissions to access the data in the provided source and to perform iam:PassRole on the
 * provided import role which has the same permissions, as described below.
 *
 * - The provided IAM role must trust the "cloudtrail.amazonaws.com" principal and have the following permissions:
 *
 * - cloudtrail:GetEventDataStoreData
 *
 * - logs:CreateLogGroup
 *
 * - logs:CreateLogStream
 *
 * - logs:PutResourcePolicy
 *
 * - (If source has an associated Amazon Web Services KMS Key) kms:Decrypt
 *
 * - (If source has an associated Amazon Web Services KMS Key) kms:GenerateDataKey
 *
 * Example IAM policy for provided import role:
 *
 * `[ { "Effect": "Allow", "Action": "iam:PassRole", "Resource": "arn:aws:iam::123456789012:role/apiCallerCredentials", "Condition": { "StringLike": { "iam:AssociatedResourceARN": "arn:aws:logs:us-east-1:123456789012:log-group:aws/cloudtrail/f1d45bff-d0e3-4868-b5d9-2eb678aa32fb:*" } } }, { "Effect": "Allow", "Action": [ "cloudtrail:GetEventDataStoreData" ], "Resource": [ "arn:aws:cloudtrail:us-east-1:123456789012:eventdatastore/f1d45bff-d0e3-4868-b5d9-2eb678aa32fb" ] }, { "Effect": "Allow", "Action": [ "logs:CreateImportTask", "logs:CreateLogGroup", "logs:CreateLogStream", "logs:PutResourcePolicy" ], "Resource": [ "arn:aws:logs:us-east-1:123456789012:log-group:/aws/cloudtrail/*" ] }, { "Effect": "Allow", "Action": [ "kms:Decrypt", "kms:GenerateDataKey" ], "Resource": [ "arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012" ] } ]`
 *
 * - If the import source has a customer managed key, the "cloudtrail.amazonaws.com" principal needs permissions to perform kms:Decrypt and kms:GenerateDataKey.
 *
 * - There can be no more than 3 active imports per account at a given time.
 *
 * - The startEventTime must be less than or equal to endEventTime.
 *
 * - The data being imported must be within the specified source's retention period.
 */
export const createImportTask: API.OperationMethod<
  CreateImportTaskRequest,
  CreateImportTaskResponse,
  CreateImportTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateImportTaskRequest,
  output: CreateImportTaskResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InvalidOperationException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateImportTask",
}));

export type CreateLogAnomalyDetectorError =
  | InvalidParameterException
  | LimitExceededException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates an *anomaly detector* that regularly scans one or more log
 * groups and look for patterns and anomalies in the logs.
 *
 * An anomaly detector can help surface issues by automatically discovering anomalies in your
 * log event traffic. An anomaly detector uses machine learning algorithms to scan log events and
 * find *patterns*. A pattern is a shared text structure that recurs among
 * your log fields. Patterns provide a useful tool for analyzing large sets of logs because a
 * large number of log events can often be compressed into a few patterns.
 *
 * The anomaly detector uses pattern recognition to find `anomalies`, which are
 * unusual log events. It uses the `evaluationFrequency` to compare current log events
 * and patterns with trained baselines.
 *
 * Fields within a pattern are called *tokens*. Fields that vary within a
 * pattern, such as a request ID or timestamp, are referred to as dynamic
 * tokens and represented by ``.
 *
 * The following is an example of a pattern:
 *
 * `[INFO] Request time: ms`
 *
 * This pattern represents log events like `[INFO] Request time: 327 ms` and other
 * similar log events that differ only by the number, in this csse 327. When the pattern is
 * displayed, the different numbers are replaced by ``
 *
 * Any parts of log events that are masked as sensitive data are not scanned for anomalies.
 * For more information about masking sensitive data, see Help protect sensitive log
 * data with masking.
 */
export const createLogAnomalyDetector: API.OperationMethod<
  CreateLogAnomalyDetectorRequest,
  CreateLogAnomalyDetectorResponse,
  CreateLogAnomalyDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLogAnomalyDetectorRequest,
  output: CreateLogAnomalyDetectorResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLogAnomalyDetector",
}));

export type CreateLogGroupError =
  | InvalidParameterException
  | LimitExceededException
  | OperationAbortedException
  | ResourceAlreadyExistsException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates a log group with the specified name. You can create up to 1,000,000 log groups
 * per Region per account.
 *
 * You must use the following guidelines when naming a log group:
 *
 * - Log group names must be unique within a Region for an Amazon Web Services
 * account.
 *
 * - Log group names can be between 1 and 512 characters long.
 *
 * - Log group names consist of the following characters: a-z, A-Z, 0-9, '_'
 * (underscore), '-' (hyphen), '/' (forward slash), '.' (period), and '#' (number
 * sign)
 *
 * - Log group names can't start with the string `aws/`
 *
 * When you create a log group, by default the log events in the log group do not expire.
 * To set a retention policy so that events expire and are deleted after a specified time, use
 * PutRetentionPolicy.
 *
 * If you associate an KMS key with the log group, ingested data is
 * encrypted using the KMS key. This association is stored as long as the data
 * encrypted with the KMS key is still within CloudWatch Logs. This enables
 * CloudWatch Logs to decrypt this data whenever it is requested.
 *
 * If you attempt to associate a KMS key with the log group but the KMS key does not exist or the KMS key is disabled, you receive an
 * `InvalidParameterException` error.
 *
 * CloudWatch Logs supports only symmetric KMS keys. Do not associate an
 * asymmetric KMS key with your log group. For more information, see Using
 * Symmetric and Asymmetric Keys.
 */
export const createLogGroup: API.OperationMethod<
  CreateLogGroupRequest,
  CreateLogGroupResponse,
  CreateLogGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLogGroupRequest,
  output: CreateLogGroupResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    OperationAbortedException,
    ResourceAlreadyExistsException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLogGroup",
}));

export type CreateLogStreamError =
  | InvalidParameterException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates a log stream for the specified log group. A log stream is a sequence of log
 * events that originate from a single source, such as an application instance or a resource that
 * is being monitored.
 *
 * There is no limit on the number of log streams that you can create for a log group.
 * There is a limit of 50 TPS on `CreateLogStream` operations, after which
 * transactions are throttled.
 *
 * You must use the following guidelines when naming a log stream:
 *
 * - Log stream names must be unique within the log group.
 *
 * - Log stream names can be between 1 and 512 characters long.
 *
 * - Don't use ':' (colon) or '*' (asterisk) characters.
 */
export const createLogStream: API.OperationMethod<
  CreateLogStreamRequest,
  CreateLogStreamResponse,
  CreateLogStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLogStreamRequest,
  output: CreateLogStreamResponse,
  errors: [
    InvalidParameterException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLogStream",
}));

export type CreateLookupTableError =
  | AccessDeniedException
  | InvalidParameterException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ServiceUnavailableException
  | ValidationException
  | CommonErrors;
/**
 * Creates a lookup table by uploading CSV data or from CloudWatch Logs query
 * results. You can use lookup tables to enrich log data in CloudWatch Logs queries with
 * reference data such as user details, application names, or error descriptions.
 *
 * The table name must be unique within your account and Region. You must specify either
 * `tableBody` or `queryId`, but not both. If you use
 * `tableBody`, the CSV content must include a header row with column names, use
 * UTF-8 encoding, and not exceed 10 MB.
 */
export const createLookupTable: API.OperationMethod<
  CreateLookupTableRequest,
  CreateLookupTableResponse,
  CreateLookupTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLookupTableRequest,
  output: CreateLookupTableResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ServiceUnavailableException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLookupTable",
}));

export type CreateScheduledQueryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a scheduled query that runs CloudWatch Logs Insights queries at regular intervals.
 * Scheduled queries enable proactive monitoring by automatically executing queries to detect
 * patterns and anomalies in your log data. Query results can be delivered to Amazon S3 for analysis
 * or further processing.
 */
export const createScheduledQuery: API.OperationMethod<
  CreateScheduledQueryRequest,
  CreateScheduledQueryResponse,
  CreateScheduledQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScheduledQueryRequest,
  output: CreateScheduledQueryResponse,
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
  operationName: "CreateScheduledQuery",
}));

export type DeleteAccountPolicyError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes a CloudWatch Logs account policy. This stops the account-wide policy from
 * applying to log groups or data sources in the account. If you delete a data protection policy
 * or subscription filter policy, any log-group level policies of those types remain in effect.
 * This operation supports deletion of data source-based field index policies, including facet
 * configurations, in addition to log group-based policies.
 *
 * To use this operation, you must be signed on with the correct permissions depending on the
 * type of policy that you are deleting.
 *
 * - To delete a data protection policy, you must have the
 * `logs:DeleteDataProtectionPolicy` and `logs:DeleteAccountPolicy`
 * permissions.
 *
 * - To delete a subscription filter policy, you must have the
 * `logs:DeleteSubscriptionFilter` and `logs:DeleteAccountPolicy`
 * permissions.
 *
 * - To delete a transformer policy, you must have the `logs:DeleteTransformer`
 * and `logs:DeleteAccountPolicy` permissions.
 *
 * - To delete a field index policy, you must have the `logs:DeleteIndexPolicy`
 * and `logs:DeleteAccountPolicy` permissions.
 *
 * If you delete a field index policy that included facet configurations, those facets
 * will no longer be available for interactive exploration in the CloudWatch Logs Insights
 * console. However, facet data is retained for up to 30 days.
 *
 * If you delete a field index policy, the indexing of the log events that happened before
 * you deleted the policy will still be used for up to 30 days to improve CloudWatch Logs
 * Insights queries.
 */
export const deleteAccountPolicy: API.OperationMethod<
  DeleteAccountPolicyRequest,
  DeleteAccountPolicyResponse,
  DeleteAccountPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccountPolicyRequest,
  output: DeleteAccountPolicyResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccountPolicy",
}));

export type DeleteDataProtectionPolicyError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes the data protection policy from the specified log group.
 *
 * For more information about data protection policies, see PutDataProtectionPolicy.
 */
export const deleteDataProtectionPolicy: API.OperationMethod<
  DeleteDataProtectionPolicyRequest,
  DeleteDataProtectionPolicyResponse,
  DeleteDataProtectionPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDataProtectionPolicyRequest,
  output: DeleteDataProtectionPolicyResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataProtectionPolicy",
}));

export type DeleteDeliveryError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a *delivery*. A delivery is a connection between a logical
 * *delivery source* and a logical delivery
 * destination. Deleting a delivery only deletes the connection between the delivery
 * source and delivery destination. It does not delete the delivery destination or the delivery
 * source.
 */
export const deleteDelivery: API.OperationMethod<
  DeleteDeliveryRequest,
  DeleteDeliveryResponse,
  DeleteDeliveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDeliveryRequest,
  output: DeleteDeliveryResponse,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDelivery",
}));

export type DeleteDeliveryDestinationError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a *delivery destination*. A delivery is a connection between a
 * logical *delivery source* and a logical delivery
 * destination.
 *
 * You can't delete a delivery destination if any current deliveries are associated with it.
 * To find whether any deliveries are associated with this delivery destination, use the DescribeDeliveries operation and check the `deliveryDestinationArn`
 * field in the results.
 */
export const deleteDeliveryDestination: API.OperationMethod<
  DeleteDeliveryDestinationRequest,
  DeleteDeliveryDestinationResponse,
  DeleteDeliveryDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDeliveryDestinationRequest,
  output: DeleteDeliveryDestinationResponse,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDeliveryDestination",
}));

export type DeleteDeliveryDestinationPolicyError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a delivery destination policy. For more information about these policies, see
 * PutDeliveryDestinationPolicy.
 */
export const deleteDeliveryDestinationPolicy: API.OperationMethod<
  DeleteDeliveryDestinationPolicyRequest,
  DeleteDeliveryDestinationPolicyResponse,
  DeleteDeliveryDestinationPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDeliveryDestinationPolicyRequest,
  output: DeleteDeliveryDestinationPolicyResponse,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDeliveryDestinationPolicy",
}));

export type DeleteDeliverySourceError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a *delivery source*. A delivery is a connection between a
 * logical *delivery source* and a logical delivery
 * destination.
 *
 * You can't delete a delivery source if any current deliveries are associated with it. To
 * find whether any deliveries are associated with this delivery source, use the DescribeDeliveries operation and check the `deliverySourceName` field in
 * the results.
 */
export const deleteDeliverySource: API.OperationMethod<
  DeleteDeliverySourceRequest,
  DeleteDeliverySourceResponse,
  DeleteDeliverySourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDeliverySourceRequest,
  output: DeleteDeliverySourceResponse,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDeliverySource",
}));

export type DeleteDestinationError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes the specified destination, and eventually disables all the subscription filters
 * that publish to it. This operation does not delete the physical resource encapsulated by the
 * destination.
 */
export const deleteDestination: API.OperationMethod<
  DeleteDestinationRequest,
  DeleteDestinationResponse,
  DeleteDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDestinationRequest,
  output: DeleteDestinationResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDestination",
}));

export type DeleteIndexPolicyError =
  | InvalidParameterException
  | LimitExceededException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes a log-group level field index policy that was applied to a single log group. The
 * indexing of the log events that happened before you delete the policy will still be used for
 * as many as 30 days to improve CloudWatch Logs Insights queries.
 *
 * If the deleted policy included facet configurations, those facets will no longer be
 * available for interactive exploration in the CloudWatch Logs Insights console for this log
 * group. However, facet data is retained for up to 30 days.
 *
 * You can't use this operation to delete an account-level index policy. Instead, use DeleteAccountPolicy.
 *
 * If you delete a log-group level field index policy and there is an account-level field
 * index policy, in a few minutes the log group begins using that account-wide policy to index
 * new incoming log events. This operation only affects log group-level policies, including any
 * facet configurations, and preserves any data source-based account policies that may apply to
 * the log group.
 */
export const deleteIndexPolicy: API.OperationMethod<
  DeleteIndexPolicyRequest,
  DeleteIndexPolicyResponse,
  DeleteIndexPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteIndexPolicyRequest,
  output: DeleteIndexPolicyResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIndexPolicy",
}));

export type DeleteIntegrationError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the integration between CloudWatch Logs and OpenSearch Service. If your
 * integration has active vended logs dashboards, you must specify `true` for the
 * `force` parameter, otherwise the operation will fail. If you delete the
 * integration by setting `force` to `true`, all your vended logs
 * dashboards powered by OpenSearch Service will be deleted and the data that was on them will no
 * longer be accessible.
 */
export const deleteIntegration: API.OperationMethod<
  DeleteIntegrationRequest,
  DeleteIntegrationResponse,
  DeleteIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteIntegrationRequest,
  output: DeleteIntegrationResponse,
  errors: [
    InvalidParameterException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIntegration",
}));

export type DeleteLogAnomalyDetectorError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes the specified CloudWatch Logs anomaly detector.
 */
export const deleteLogAnomalyDetector: API.OperationMethod<
  DeleteLogAnomalyDetectorRequest,
  DeleteLogAnomalyDetectorResponse,
  DeleteLogAnomalyDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLogAnomalyDetectorRequest,
  output: DeleteLogAnomalyDetectorResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLogAnomalyDetector",
}));

export type DeleteLogGroupError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified log group and permanently deletes all the archived log events
 * associated with the log group.
 */
export const deleteLogGroup: API.OperationMethod<
  DeleteLogGroupRequest,
  DeleteLogGroupResponse,
  DeleteLogGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLogGroupRequest,
  output: DeleteLogGroupResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLogGroup",
}));

export type DeleteLogStreamError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified log stream and permanently deletes all the archived log events
 * associated with the log stream.
 */
export const deleteLogStream: API.OperationMethod<
  DeleteLogStreamRequest,
  DeleteLogStreamResponse,
  DeleteLogStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLogStreamRequest,
  output: DeleteLogStreamResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLogStream",
}));

export type DeleteLookupTableError =
  | AccessDeniedException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes a lookup table permanently. This operation cannot be undone.
 *
 * Queries that reference a deleted table will return an error. Before deleting a lookup
 * table, review any saved queries or dashboards that may reference it.
 */
export const deleteLookupTable: API.OperationMethod<
  DeleteLookupTableRequest,
  DeleteLookupTableResponse,
  DeleteLookupTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLookupTableRequest,
  output: DeleteLookupTableResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLookupTable",
}));

export type DeleteMetricFilterError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes the specified metric filter.
 */
export const deleteMetricFilter: API.OperationMethod<
  DeleteMetricFilterRequest,
  DeleteMetricFilterResponse,
  DeleteMetricFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMetricFilterRequest,
  output: DeleteMetricFilterResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMetricFilter",
}));

export type DeleteQueryDefinitionError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes a saved CloudWatch Logs Insights query definition. A query definition contains
 * details about a saved CloudWatch Logs Insights query.
 *
 * Each `DeleteQueryDefinition` operation can delete one query definition.
 *
 * You must have the `logs:DeleteQueryDefinition` permission to be able to perform
 * this operation.
 */
export const deleteQueryDefinition: API.OperationMethod<
  DeleteQueryDefinitionRequest,
  DeleteQueryDefinitionResponse,
  DeleteQueryDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteQueryDefinitionRequest,
  output: DeleteQueryDefinitionResponse,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteQueryDefinition",
}));

export type DeleteResourcePolicyError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes a resource policy from this account. This revokes the access of the identities
 * in that policy to put log events to this account.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteResourcePolicyRequest,
  output: DeleteResourcePolicyResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DeleteRetentionPolicyError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes the specified retention policy.
 *
 * Log events do not expire if they belong to log groups without a retention
 * policy.
 */
export const deleteRetentionPolicy: API.OperationMethod<
  DeleteRetentionPolicyRequest,
  DeleteRetentionPolicyResponse,
  DeleteRetentionPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRetentionPolicyRequest,
  output: DeleteRetentionPolicyResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRetentionPolicy",
}));

export type DeleteScheduledQueryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a scheduled query and stops all future executions. This operation also removes any
 * configured actions and associated resources.
 */
export const deleteScheduledQuery: API.OperationMethod<
  DeleteScheduledQueryRequest,
  DeleteScheduledQueryResponse,
  DeleteScheduledQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteScheduledQueryRequest,
  output: DeleteScheduledQueryResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteScheduledQuery",
}));

export type DeleteSubscriptionFilterError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes the specified subscription filter.
 */
export const deleteSubscriptionFilter: API.OperationMethod<
  DeleteSubscriptionFilterRequest,
  DeleteSubscriptionFilterResponse,
  DeleteSubscriptionFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSubscriptionFilterRequest,
  output: DeleteSubscriptionFilterResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSubscriptionFilter",
}));

export type DeleteSyslogConfigurationError =
  | AccessDeniedException
  | InvalidOperationException
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a syslog configuration for a log group. After deletion, syslog data is no
 * longer ingested through the specified VPC endpoint.
 */
export const deleteSyslogConfiguration: API.OperationMethod<
  DeleteSyslogConfigurationRequest,
  DeleteSyslogConfigurationResponse,
  DeleteSyslogConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSyslogConfigurationRequest,
  output: DeleteSyslogConfigurationResponse,
  errors: [
    AccessDeniedException,
    InvalidOperationException,
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSyslogConfiguration",
}));

export type DeleteTransformerError =
  | InvalidOperationException
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes the log transformer for the specified log group. As soon as you do this, the
 * transformation of incoming log events according to that transformer stops. If this account has
 * an account-level transformer that applies to this log group, the log group begins using that
 * account-level transformer when this log-group level transformer is deleted.
 *
 * After you delete a transformer, be sure to edit any metric filters or subscription filters
 * that relied on the transformed versions of the log events.
 */
export const deleteTransformer: API.OperationMethod<
  DeleteTransformerRequest,
  DeleteTransformerResponse,
  DeleteTransformerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTransformerRequest,
  output: DeleteTransformerResponse,
  errors: [
    InvalidOperationException,
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTransformer",
}));

export type DescribeAccountPoliciesError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of all CloudWatch Logs account policies in the account.
 *
 * To use this operation, you must be signed on with the correct permissions depending on the
 * type of policy that you are retrieving information for.
 *
 * - To see data protection policies, you must have the
 * `logs:GetDataProtectionPolicy` and `logs:DescribeAccountPolicies`
 * permissions.
 *
 * - To see subscription filter policies, you must have the
 * `logs:DescribeSubscriptionFilters` and
 * `logs:DescribeAccountPolicies` permissions.
 *
 * - To see transformer policies, you must have the `logs:GetTransformer` and
 * `logs:DescribeAccountPolicies` permissions.
 *
 * - To see field index policies, you must have the `logs:DescribeIndexPolicies`
 * and `logs:DescribeAccountPolicies` permissions.
 */
export const describeAccountPolicies: API.OperationMethod<
  DescribeAccountPoliciesRequest,
  DescribeAccountPoliciesResponse,
  DescribeAccountPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAccountPoliciesRequest,
  output: DescribeAccountPoliciesResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountPolicies",
}));

export type DescribeConfigurationTemplatesError =
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to return the valid and default values that are used when creating
 * delivery sources, delivery destinations, and deliveries. For more information about
 * deliveries, see CreateDelivery.
 */
export const describeConfigurationTemplates: API.PaginatedOperationMethod<
  DescribeConfigurationTemplatesRequest,
  DescribeConfigurationTemplatesResponse,
  DescribeConfigurationTemplatesError,
  Credentials | HttpClient.HttpClient,
  ConfigurationTemplate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeConfigurationTemplatesRequest,
  output: DescribeConfigurationTemplatesResponse,
  errors: [
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConfigurationTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "configurationTemplates",
    pageSize: "limit",
  } as const,
})) as any;

export type DescribeDeliveriesError =
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of the deliveries that have been created in the account.
 *
 * A *delivery* is a connection between a
 * delivery
 * source
 * and a
 * *delivery destination*
 * .
 *
 * A delivery source represents an Amazon Web Services resource that sends logs to an logs
 * delivery destination. The destination can be CloudWatch Logs, Amazon S3, Firehose or X-Ray. Only some Amazon Web Services services support being
 * configured as a delivery source. These services are listed in Enable logging from
 * Amazon Web Services services.
 */
export const describeDeliveries: API.PaginatedOperationMethod<
  DescribeDeliveriesRequest,
  DescribeDeliveriesResponse,
  DescribeDeliveriesError,
  Credentials | HttpClient.HttpClient,
  Delivery
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDeliveriesRequest,
  output: DescribeDeliveriesResponse,
  errors: [
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDeliveries",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "deliveries",
    pageSize: "limit",
  } as const,
})) as any;

export type DescribeDeliveryDestinationsError =
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of the delivery destinations that have been created in the
 * account.
 */
export const describeDeliveryDestinations: API.PaginatedOperationMethod<
  DescribeDeliveryDestinationsRequest,
  DescribeDeliveryDestinationsResponse,
  DescribeDeliveryDestinationsError,
  Credentials | HttpClient.HttpClient,
  DeliveryDestination
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDeliveryDestinationsRequest,
  output: DescribeDeliveryDestinationsResponse,
  errors: [
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDeliveryDestinations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "deliveryDestinations",
    pageSize: "limit",
  } as const,
})) as any;

export type DescribeDeliverySourcesError =
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of the delivery sources that have been created in the account.
 */
export const describeDeliverySources: API.PaginatedOperationMethod<
  DescribeDeliverySourcesRequest,
  DescribeDeliverySourcesResponse,
  DescribeDeliverySourcesError,
  Credentials | HttpClient.HttpClient,
  DeliverySource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDeliverySourcesRequest,
  output: DescribeDeliverySourcesResponse,
  errors: [
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDeliverySources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "deliverySources",
    pageSize: "limit",
  } as const,
})) as any;

export type DescribeDestinationsError =
  | InvalidParameterException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists all your destinations. The results are ASCII-sorted by destination
 * name.
 */
export const describeDestinations: API.PaginatedOperationMethod<
  DescribeDestinationsRequest,
  DescribeDestinationsResponse,
  DescribeDestinationsError,
  Credentials | HttpClient.HttpClient,
  Destination
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDestinationsRequest,
  output: DescribeDestinationsResponse,
  errors: [InvalidParameterException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDestinations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "destinations",
    pageSize: "limit",
  } as const,
})) as any;

export type DescribeExportTasksError =
  | InvalidParameterException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the specified export tasks. You can list all your export tasks or filter the
 * results based on task ID or task status.
 */
export const describeExportTasks: API.OperationMethod<
  DescribeExportTasksRequest,
  DescribeExportTasksResponse,
  DescribeExportTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeExportTasksRequest,
  output: DescribeExportTasksResponse,
  errors: [InvalidParameterException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeExportTasks",
}));

export type DescribeFieldIndexesError =
  | InvalidParameterException
  | LimitExceededException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of field indexes discovered in log data. By default, the response includes
 * the `DEFAULT`, `CUSTOM`, and `INACTIVE` index categories. To
 * return indexes from other categories, use the `indexCategories` parameter.
 *
 * For more information about field index policies, see PutIndexPolicy.
 */
export const describeFieldIndexes: API.OperationMethod<
  DescribeFieldIndexesRequest,
  DescribeFieldIndexesResponse,
  DescribeFieldIndexesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeFieldIndexesRequest,
  output: DescribeFieldIndexesResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFieldIndexes",
}));

export type DescribeImportTaskBatchesError =
  | AccessDeniedException
  | InvalidOperationException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets detailed information about the individual batches within an import task, including their status and any error messages.
 * For CloudTrail Event Data Store sources, a batch refers to a subset of stored events grouped by their eventTime.
 */
export const describeImportTaskBatches: API.OperationMethod<
  DescribeImportTaskBatchesRequest,
  DescribeImportTaskBatchesResponse,
  DescribeImportTaskBatchesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeImportTaskBatchesRequest,
  output: DescribeImportTaskBatchesResponse,
  errors: [
    AccessDeniedException,
    InvalidOperationException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeImportTaskBatches",
}));

export type DescribeImportTasksError =
  | AccessDeniedException
  | InvalidOperationException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists and describes import tasks, with optional filtering by import status and source ARN.
 */
export const describeImportTasks: API.OperationMethod<
  DescribeImportTasksRequest,
  DescribeImportTasksResponse,
  DescribeImportTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeImportTasksRequest,
  output: DescribeImportTasksResponse,
  errors: [
    AccessDeniedException,
    InvalidOperationException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeImportTasks",
}));

export type DescribeIndexPoliciesError =
  | InvalidParameterException
  | LimitExceededException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns the field index policies of the specified log group. For more information about
 * field index policies, see PutIndexPolicy.
 *
 * If a specified log group has a log-group level index policy, that policy is returned by
 * this operation.
 *
 * If a specified log group doesn't have a log-group level index policy, but an account-wide
 * index policy applies to it, that account-wide policy is returned by this operation.
 *
 * To find information about only account-level policies, use DescribeAccountPolicies instead.
 */
export const describeIndexPolicies: API.OperationMethod<
  DescribeIndexPoliciesRequest,
  DescribeIndexPoliciesResponse,
  DescribeIndexPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeIndexPoliciesRequest,
  output: DescribeIndexPoliciesResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeIndexPolicies",
}));

export type DescribeLogGroupsError =
  | InvalidParameterException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns information about log groups, including data sources that ingest into each log
 * group. You can return all your log groups or filter the results by prefix. The results are
 * ASCII-sorted by log group name.
 *
 * CloudWatch Logs doesn't support IAM policies that control access to the
 * `DescribeLogGroups` action by using the
 * aws:ResourceTag/*key-name*
 * condition key. Other CloudWatch
 * Logs actions do support the use of the
 * aws:ResourceTag/*key-name*
 * condition key to control access.
 * For more information about using tags to control access, see Controlling access to Amazon Web Services
 * resources using tags.
 *
 * If you are using CloudWatch cross-account observability, you can use this operation
 * in a monitoring account and view data from the linked source accounts. For more information,
 * see CloudWatch cross-account observability.
 */
export const describeLogGroups: API.PaginatedOperationMethod<
  DescribeLogGroupsRequest,
  DescribeLogGroupsResponse,
  DescribeLogGroupsError,
  Credentials | HttpClient.HttpClient,
  LogGroup
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeLogGroupsRequest,
  output: DescribeLogGroupsResponse,
  errors: [InvalidParameterException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLogGroups",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "logGroups",
    pageSize: "limit",
  } as const,
})) as any;

export type DescribeLogStreamsError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the log streams for the specified log group. You can list all the log streams or
 * filter the results by prefix. You can also control how the results are ordered.
 *
 * You can specify the log group to search by using either `logGroupIdentifier` or
 * `logGroupName`. You must include one of these two parameters, but you can't
 * include both.
 *
 * This operation has a limit of 25 transactions per second, after which transactions are
 * throttled.
 *
 * If you are using CloudWatch cross-account observability, you can use this operation
 * in a monitoring account and view data from the linked source accounts. For more information,
 * see CloudWatch cross-account observability.
 */
export const describeLogStreams: API.PaginatedOperationMethod<
  DescribeLogStreamsRequest,
  DescribeLogStreamsResponse,
  DescribeLogStreamsError,
  Credentials | HttpClient.HttpClient,
  LogStream
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeLogStreamsRequest,
  output: DescribeLogStreamsResponse,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLogStreams",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "logStreams",
    pageSize: "limit",
  } as const,
})) as any;

export type DescribeLookupTablesError =
  | AccessDeniedException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves metadata about lookup tables in your account. You can optionally filter the
 * results by table name prefix. Results are sorted by table name in ascending order.
 */
export const describeLookupTables: API.OperationMethod<
  DescribeLookupTablesRequest,
  DescribeLookupTablesResponse,
  DescribeLookupTablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLookupTablesRequest,
  output: DescribeLookupTablesResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLookupTables",
}));

export type DescribeMetricFiltersError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the specified metric filters. You can list all of the metric filters or filter
 * the results by log name, prefix, metric name, or metric namespace. The results are
 * ASCII-sorted by filter name.
 */
export const describeMetricFilters: API.PaginatedOperationMethod<
  DescribeMetricFiltersRequest,
  DescribeMetricFiltersResponse,
  DescribeMetricFiltersError,
  Credentials | HttpClient.HttpClient,
  MetricFilter
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeMetricFiltersRequest,
  output: DescribeMetricFiltersResponse,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMetricFilters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "metricFilters",
    pageSize: "limit",
  } as const,
})) as any;

export type DescribeQueriesError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of CloudWatch Logs Insights queries that are scheduled, running, or have
 * been run recently in this account. You can request all queries or limit it to queries of a
 * specific log group or queries with a certain status.
 *
 * This operation includes both interactive queries started directly by users and automated
 * queries executed by scheduled query configurations. Scheduled query executions appear in the
 * results alongside manually initiated queries, providing visibility into all query activity in
 * your account.
 */
export const describeQueries: API.OperationMethod<
  DescribeQueriesRequest,
  DescribeQueriesResponse,
  DescribeQueriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeQueriesRequest,
  output: DescribeQueriesResponse,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeQueries",
}));

export type DescribeQueryDefinitionsError =
  | InvalidParameterException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * This operation returns a paginated list of your saved CloudWatch Logs Insights query
 * definitions. You can retrieve query definitions from the current account or from a source
 * account that is linked to the current account.
 *
 * You can use the `queryDefinitionNamePrefix` parameter to limit the results to
 * only the query definitions that have names that start with a certain string.
 */
export const describeQueryDefinitions: API.OperationMethod<
  DescribeQueryDefinitionsRequest,
  DescribeQueryDefinitionsResponse,
  DescribeQueryDefinitionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeQueryDefinitionsRequest,
  output: DescribeQueryDefinitionsResponse,
  errors: [InvalidParameterException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeQueryDefinitions",
}));

export type DescribeResourcePoliciesError =
  | InvalidParameterException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the resource policies in this account.
 */
export const describeResourcePolicies: API.OperationMethod<
  DescribeResourcePoliciesRequest,
  DescribeResourcePoliciesResponse,
  DescribeResourcePoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeResourcePoliciesRequest,
  output: DescribeResourcePoliciesResponse,
  errors: [InvalidParameterException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResourcePolicies",
}));

export type DescribeSubscriptionFiltersError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the subscription filters for the specified log group. You can list all the
 * subscription filters or filter the results by prefix. The results are ASCII-sorted by filter
 * name.
 */
export const describeSubscriptionFilters: API.PaginatedOperationMethod<
  DescribeSubscriptionFiltersRequest,
  DescribeSubscriptionFiltersResponse,
  DescribeSubscriptionFiltersError,
  Credentials | HttpClient.HttpClient,
  SubscriptionFilter
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeSubscriptionFiltersRequest,
  output: DescribeSubscriptionFiltersResponse,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSubscriptionFilters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "subscriptionFilters",
    pageSize: "limit",
  } as const,
})) as any;

export type DisassociateKmsKeyError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Disassociates the specified KMS key from the specified log group or
 * from all CloudWatch Logs Insights query results in the account.
 *
 * When you use `DisassociateKmsKey`, you specify either the
 * `logGroupName` parameter or the `resourceIdentifier` parameter. You
 * can't specify both of those parameters in the same operation.
 *
 * - Specify the `logGroupName` parameter to stop using the KMS key to encrypt future log events ingested and stored in the log group.
 * Instead, they will be encrypted with the default CloudWatch Logs method. The log events
 * that were ingested while the key was associated with the log group are still encrypted
 * with that key. Therefore, CloudWatch Logs will need permissions for the key whenever
 * that data is accessed.
 *
 * - Specify the `resourceIdentifier` parameter with the
 * `query-result` resource to stop using the KMS key to
 * encrypt the results of all future StartQuery
 * operations in the account. They will instead be encrypted with the default CloudWatch Logs method. The results from queries that ran while the key was associated with
 * the account are still encrypted with that key. Therefore, CloudWatch Logs will need
 * permissions for the key whenever that data is accessed.
 *
 * It can take up to 5 minutes for this operation to take effect.
 */
export const disassociateKmsKey: API.OperationMethod<
  DisassociateKmsKeyRequest,
  DisassociateKmsKeyResponse,
  DisassociateKmsKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateKmsKeyRequest,
  output: DisassociateKmsKeyResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateKmsKey",
}));

export type DisassociateSourceFromS3TableIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a data source from an S3 Table Integration, removing query access and
 * deleting all associated data from the integration.
 */
export const disassociateSourceFromS3TableIntegration: API.OperationMethod<
  DisassociateSourceFromS3TableIntegrationRequest,
  DisassociateSourceFromS3TableIntegrationResponse,
  DisassociateSourceFromS3TableIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateSourceFromS3TableIntegrationRequest,
  output: DisassociateSourceFromS3TableIntegrationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateSourceFromS3TableIntegration",
}));

export type FilterLogEventsError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists log events from the specified log group. You can list all the log events or
 * filter the results using one or more of the following:
 *
 * - A filter pattern
 *
 * - A time range
 *
 * - The log stream name, or a log stream name prefix that matches multiple log
 * streams
 *
 * You must have the `logs:FilterLogEvents` permission to perform this
 * operation.
 *
 * You can specify the log group to search by using either `logGroupIdentifier` or
 * `logGroupName`. You must include one of these two parameters, but you can't
 * include both.
 *
 * `FilterLogEvents` is a paginated operation. Each page returned can contain up
 * to 1 MB of log events or up to 10,000 log events. A returned page might only be partially
 * full, or even empty. For example, if the result of a query would return 15,000 log events, the
 * first page isn't guaranteed to have 10,000 log events even if they all fit into 1 MB.
 *
 * Partially full or empty pages don't necessarily mean that pagination is finished. If the
 * results include a `nextToken`, there might be more log events available. You can
 * return these additional log events by providing the nextToken in a subsequent
 * `FilterLogEvents` operation. If the results don't include a
 * `nextToken`, then pagination is finished.
 *
 * Specifying the `limit` parameter only guarantees that a single page doesn't
 * return more log events than the specified limit, but it might return fewer events than the
 * limit. This is the expected API behavior.
 *
 * The returned log events are sorted by event timestamp, the timestamp when the event was
 * ingested by CloudWatch Logs, and the ID of the `PutLogEvents` request. By default,
 * the events are returned in ascending timestamp order (oldest first). To return events in
 * descending timestamp order (newest first), set the `startFromHead` parameter to
 * `false`.
 *
 * If you are using CloudWatch cross-account observability, you can use this operation
 * in a monitoring account and view data from the linked source accounts. For more information,
 * see CloudWatch cross-account observability.
 *
 * If you are using log
 * transformation, the `FilterLogEvents` operation returns only the
 * original versions of log events, before they were transformed. To view the transformed
 * versions, you must use a CloudWatch Logs
 * query.
 */
export const filterLogEvents: API.PaginatedOperationMethod<
  FilterLogEventsRequest,
  FilterLogEventsResponse,
  FilterLogEventsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: FilterLogEventsRequest,
  output: FilterLogEventsResponse,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "FilterLogEvents",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", pageSize: "limit" } as const,
})) as any;

export type GetDataProtectionPolicyError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns information about a log group data protection policy.
 */
export const getDataProtectionPolicy: API.OperationMethod<
  GetDataProtectionPolicyRequest,
  GetDataProtectionPolicyResponse,
  GetDataProtectionPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDataProtectionPolicyRequest,
  output: GetDataProtectionPolicyResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataProtectionPolicy",
}));

export type GetDeliveryError =
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns complete information about one logical *delivery*. A delivery
 * is a connection between a
 * delivery
 * source
 * and a
 * *delivery destination*
 * .
 *
 * A delivery source represents an Amazon Web Services resource that sends logs to an logs
 * delivery destination. The destination can be CloudWatch Logs, Amazon S3, or Firehose. Only some Amazon Web Services services support being configured as a delivery
 * source. These services are listed in Enable logging from
 * Amazon Web Services services.
 *
 * You need to specify the delivery `id` in this operation. You can find the IDs
 * of the deliveries in your account with the DescribeDeliveries operation.
 */
export const getDelivery: API.OperationMethod<
  GetDeliveryRequest,
  GetDeliveryResponse,
  GetDeliveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDeliveryRequest,
  output: GetDeliveryResponse,
  errors: [
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDelivery",
}));

export type GetDeliveryDestinationError =
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves complete information about one delivery destination.
 */
export const getDeliveryDestination: API.OperationMethod<
  GetDeliveryDestinationRequest,
  GetDeliveryDestinationResponse,
  GetDeliveryDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDeliveryDestinationRequest,
  output: GetDeliveryDestinationResponse,
  errors: [
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDeliveryDestination",
}));

export type GetDeliveryDestinationPolicyError =
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the delivery destination policy assigned to the delivery destination that you
 * specify. For more information about delivery destinations and their policies, see PutDeliveryDestinationPolicy.
 */
export const getDeliveryDestinationPolicy: API.OperationMethod<
  GetDeliveryDestinationPolicyRequest,
  GetDeliveryDestinationPolicyResponse,
  GetDeliveryDestinationPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDeliveryDestinationPolicyRequest,
  output: GetDeliveryDestinationPolicyResponse,
  errors: [ResourceNotFoundException, ServiceUnavailableException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDeliveryDestinationPolicy",
}));

export type GetDeliverySourceError =
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves complete information about one delivery source.
 */
export const getDeliverySource: API.OperationMethod<
  GetDeliverySourceRequest,
  GetDeliverySourceResponse,
  GetDeliverySourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDeliverySourceRequest,
  output: GetDeliverySourceResponse,
  errors: [
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDeliverySource",
}));

export type GetIntegrationError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns information about one integration between CloudWatch Logs and OpenSearch Service.
 */
export const getIntegration: API.OperationMethod<
  GetIntegrationRequest,
  GetIntegrationResponse,
  GetIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIntegrationRequest,
  output: GetIntegrationResponse,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIntegration",
}));

export type GetLogAnomalyDetectorError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves information about the log anomaly detector that you specify. The KMS key ARN detected is valid.
 */
export const getLogAnomalyDetector: API.OperationMethod<
  GetLogAnomalyDetectorRequest,
  GetLogAnomalyDetectorResponse,
  GetLogAnomalyDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLogAnomalyDetectorRequest,
  output: GetLogAnomalyDetectorResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLogAnomalyDetector",
}));

export type GetLogEventsError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists log events from the specified log stream. You can list all of the log events or
 * filter using a time range.
 *
 * `GetLogEvents` is a paginated operation. Each page returned can contain up to 1
 * MB of log events or up to 10,000 log events. A returned page might only be partially full, or
 * even empty. For example, if the result of a query would return 15,000 log events, the first
 * page isn't guaranteed to have 10,000 log events even if they all fit into 1 MB.
 *
 * Partially full or empty pages don't necessarily mean that pagination is finished. As long
 * as the `nextBackwardToken` or `nextForwardToken` returned is NOT equal
 * to the `nextToken` that you passed into the API call, there might be more log
 * events available. The token that you use depends on the direction you want to move in along
 * the log stream. The returned tokens are never null.
 *
 * If you set `startFromHead` to `true` and you don't include
 * `endTime` in your request, you can end up in a situation where the pagination
 * doesn't terminate. This can happen when the new log events are being added to the target log
 * streams faster than they are being read. This situation is a good use case for the CloudWatch Logs
 * Live Tail feature.
 *
 * If you are using CloudWatch cross-account observability, you can use this operation
 * in a monitoring account and view data from the linked source accounts. For more information,
 * see CloudWatch cross-account observability.
 *
 * You can specify the log group to search by using either `logGroupIdentifier` or
 * `logGroupName`. You must include one of these two parameters, but you can't
 * include both.
 *
 * If you are using log
 * transformation, the `GetLogEvents` operation returns only the original
 * versions of log events, before they were transformed. To view the transformed versions, you
 * must use a CloudWatch Logs
 * query.
 */
export const getLogEvents: API.PaginatedOperationMethod<
  GetLogEventsRequest,
  GetLogEventsResponse,
  GetLogEventsError,
  Credentials | HttpClient.HttpClient,
  OutputLogEvent
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetLogEventsRequest,
  output: GetLogEventsResponse,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLogEvents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextForwardToken",
    items: "events",
    pageSize: "limit",
  } as const,
})) as any;

export type GetLogFieldsError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Discovers available fields for a specific data source and type. The response includes any
 * field modifications introduced through pipelines, such as new fields or changed field types.
 */
export const getLogFields: API.OperationMethod<
  GetLogFieldsRequest,
  GetLogFieldsResponse,
  GetLogFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLogFieldsRequest,
  output: GetLogFieldsResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLogFields",
}));

export type GetLogGroupFieldsError =
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of the fields that are included in log events in the specified log group.
 * Includes the percentage of log events that contain each field. The search is limited to a time
 * period that you specify.
 *
 * This operation is used for discovering fields within log group events. For discovering
 * fields across data sources, use the GetLogFields operation.
 *
 * You can specify the log group to search by using either `logGroupIdentifier` or
 * `logGroupName`. You must specify one of these parameters, but you can't specify
 * both.
 *
 * In the results, fields that start with `@` are fields generated by CloudWatch
 * Logs. For example, `@timestamp` is the timestamp of each log event. For more
 * information about the fields that are generated by CloudWatch logs, see Supported
 * Logs and Discovered Fields.
 *
 * The response results are sorted by the frequency percentage, starting with the highest
 * percentage.
 *
 * If you are using CloudWatch cross-account observability, you can use this operation
 * in a monitoring account and view data from the linked source accounts. For more information,
 * see CloudWatch cross-account observability.
 */
export const getLogGroupFields: API.OperationMethod<
  GetLogGroupFieldsRequest,
  GetLogGroupFieldsResponse,
  GetLogGroupFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLogGroupFieldsRequest,
  output: GetLogGroupFieldsResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLogGroupFields",
}));

export type GetLogObjectError =
  | AccessDeniedException
  | InvalidOperationException
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a large logging object (LLO) and streams it back. This API is used to fetch the
 * content of large portions of log events that have been ingested through the
 * PutOpenTelemetryLogs API. When log events contain fields that would cause the total event size
 * to exceed 1MB, CloudWatch Logs automatically processes up to 10 fields, starting with the
 * largest fields. Each field is truncated as needed to keep the total event size as close to 1MB
 * as possible. The excess portions are stored as Large Log Objects (LLOs) and these fields are
 * processed separately and LLO reference system fields (in the format
 * `@ptr.$[path.to.field]`) are added. The path in the reference field reflects the
 * original JSON structure where the large field was located. For example, this could be
 * `@ptr.$['input']['message']`, `@ptr.$['AAA']['BBB']['CCC']['DDD']`,
 * `@ptr.$['AAA']`, or any other path matching your log structure.
 *
 * The `GetLogObject` API routes requests using SDK host prefix injection. SDK versions released before April 1, 2026 route to
 * `streaming-logs.*Region*.amazonaws.com`, which does not support VPC endpoints. SDK versions released on or after April 1, 2026 route to
 * `stream-logs.*Region*.amazonaws.com`, which supports VPC endpoints. To set up a VPC endpoint for this API, see Creating a VPC endpoint for CloudWatch Logs
 * .
 */
export const getLogObject: API.OperationMethod<
  GetLogObjectRequest,
  GetLogObjectResponse,
  GetLogObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLogObjectRequest,
  output: GetLogObjectResponse,
  errors: [
    AccessDeniedException,
    InvalidOperationException,
    InvalidParameterException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLogObject",
  endpointHostPrefix: "stream-",
}));

export type GetLogRecordError =
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves all of the fields and values of a single log event. All fields are retrieved,
 * even if the original query that produced the `logRecordPointer` retrieved only a
 * subset of fields. Fields are returned as field name/field value pairs.
 *
 * The full unparsed log event is returned within `@message`.
 */
export const getLogRecord: API.OperationMethod<
  GetLogRecordRequest,
  GetLogRecordResponse,
  GetLogRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLogRecordRequest,
  output: GetLogRecordResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLogRecord",
}));

export type GetLookupTableError =
  | AccessDeniedException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves the full content of a lookup table, including the CSV data.
 */
export const getLookupTable: API.OperationMethod<
  GetLookupTableRequest,
  GetLookupTableResponse,
  GetLookupTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLookupTableRequest,
  output: GetLookupTableResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLookupTable",
}));

export type GetQueryResultsError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns the results from the specified query.
 *
 * Only the fields requested in the query are returned, along with a `@ptr` field,
 * which is the identifier for the log record. You can use the value of `@ptr` in a
 * GetLogRecord
 * operation to get the full log record.
 *
 * `GetQueryResults` does not start running a query. To run a query, use StartQuery. For more information about how long results of previous queries are
 * available, see CloudWatch Logs
 * quotas.
 *
 * If the value of the `Status` field in the output is `Running`, this
 * operation returns only partial results. If you see a value of `Scheduled` or
 * `Running` for the status, you can retry the operation later to see the final
 * results.
 *
 * This operation is used both for retrieving results from interactive queries and from
 * automated scheduled query executions. Scheduled queries use `GetQueryResults`
 * internally to retrieve query results for processing and delivery to configured
 * destinations.
 *
 * You can retrieve up to 100,000 log event results from a query, if available, by using
 * pagination. Use the `nextToken` returned in the response to request additional
 * pages of results, with each page returning up to 10,000 log events. This is only supported for Logs Insights QL and is currently not supported for PPL and SQL query languages.
 *
 * If you are using CloudWatch cross-account observability, you can use this operation
 * in a monitoring account to start queries in linked source accounts. For more information, see
 * CloudWatch cross-account observability.
 */
export const getQueryResults: API.OperationMethod<
  GetQueryResultsRequest,
  GetQueryResultsResponse,
  GetQueryResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetQueryResultsRequest,
  output: GetQueryResultsResponse,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetQueryResults",
}));

export type GetScheduledQueryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about a specific scheduled query, including its configuration, execution
 * status, and metadata.
 */
export const getScheduledQuery: API.OperationMethod<
  GetScheduledQueryRequest,
  GetScheduledQueryResponse,
  GetScheduledQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScheduledQueryRequest,
  output: GetScheduledQueryResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetScheduledQuery",
}));

export type GetScheduledQueryHistoryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the execution history of a scheduled query within a specified time range,
 * including query results and destination processing status.
 */
export const getScheduledQueryHistory: API.PaginatedOperationMethod<
  GetScheduledQueryHistoryRequest,
  GetScheduledQueryHistoryResponse,
  GetScheduledQueryHistoryError,
  Credentials | HttpClient.HttpClient,
  TriggerHistoryRecord
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetScheduledQueryHistoryRequest,
  output: GetScheduledQueryHistoryResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetScheduledQueryHistory",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "triggerHistory",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetStorageTierPolicyError =
  | AccessDeniedException
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns the storage tier policy for the account.
 */
export const getStorageTierPolicy: API.OperationMethod<
  GetStorageTierPolicyRequest,
  GetStorageTierPolicyResponse,
  GetStorageTierPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetStorageTierPolicyRequest,
  output: GetStorageTierPolicyResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStorageTierPolicy",
}));

export type GetTransformerError =
  | InvalidOperationException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns the information about the log transformer associated with this log group.
 *
 * This operation returns data only for transformers created at the log group level. To get
 * information for an account-level transformer, use DescribeAccountPolicies.
 */
export const getTransformer: API.OperationMethod<
  GetTransformerRequest,
  GetTransformerResponse,
  GetTransformerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTransformerRequest,
  output: GetTransformerResponse,
  errors: [
    InvalidOperationException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTransformer",
}));

export type ListAggregateLogGroupSummariesError =
  | InvalidParameterException
  | ServiceUnavailableException
  | ValidationException
  | CommonErrors;
/**
 * Returns an aggregate summary of all log groups in the Region grouped by specified data
 * source characteristics. Supports optional filtering by log group class, name patterns, and
 * data sources. If you perform this action in a monitoring account, you can also return
 * aggregated summaries of log groups from source accounts that are linked to the monitoring
 * account. For more information about using cross-account observability to set up monitoring
 * accounts and source accounts, see CloudWatch
 * cross-account observability.
 *
 * The operation aggregates log groups by data source name and type and optionally format,
 * providing counts of log groups that share these characteristics. The operation paginates
 * results. By default, it returns up to 50 results and includes a token to retrieve more
 * results.
 */
export const listAggregateLogGroupSummaries: API.PaginatedOperationMethod<
  ListAggregateLogGroupSummariesRequest,
  ListAggregateLogGroupSummariesResponse,
  ListAggregateLogGroupSummariesError,
  Credentials | HttpClient.HttpClient,
  AggregateLogGroupSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAggregateLogGroupSummariesRequest,
  output: ListAggregateLogGroupSummariesResponse,
  errors: [InvalidParameterException, ServiceUnavailableException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAggregateLogGroupSummaries",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "aggregateLogGroupSummaries",
    pageSize: "limit",
  } as const,
})) as any;

export type ListAnomaliesError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of anomalies that log anomaly detectors have found. For details about the
 * structure format of each anomaly object that is returned, see the example in this
 * section.
 */
export const listAnomalies: API.PaginatedOperationMethod<
  ListAnomaliesRequest,
  ListAnomaliesResponse,
  ListAnomaliesError,
  Credentials | HttpClient.HttpClient,
  Anomaly
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAnomaliesRequest,
  output: ListAnomaliesResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAnomalies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "anomalies",
    pageSize: "limit",
  } as const,
})) as any;

export type ListIntegrationsError =
  | InvalidParameterException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of integrations between CloudWatch Logs and other services in this
 * account. Currently, only one integration can be created in an account, and this integration
 * must be with OpenSearch Service.
 */
export const listIntegrations: API.OperationMethod<
  ListIntegrationsRequest,
  ListIntegrationsResponse,
  ListIntegrationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListIntegrationsRequest,
  output: ListIntegrationsResponse,
  errors: [InvalidParameterException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIntegrations",
}));

export type ListLogAnomalyDetectorsError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves a list of the log anomaly detectors in the account.
 */
export const listLogAnomalyDetectors: API.PaginatedOperationMethod<
  ListLogAnomalyDetectorsRequest,
  ListLogAnomalyDetectorsResponse,
  ListLogAnomalyDetectorsError,
  Credentials | HttpClient.HttpClient,
  AnomalyDetector
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLogAnomalyDetectorsRequest,
  output: ListLogAnomalyDetectorsResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLogAnomalyDetectors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "anomalyDetectors",
    pageSize: "limit",
  } as const,
})) as any;

export type ListLogGroupsError =
  | InvalidParameterException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of log groups in the Region in your account. If you are performing this
 * action in a monitoring account, you can choose to also return log groups from source accounts
 * that are linked to the monitoring account. For more information about using cross-account
 * observability to set up monitoring accounts and source accounts, see
 * CloudWatch cross-account observability.
 *
 * You can optionally filter the results by log group class, log group name pattern,
 * field indexes, data sources, field index names, or log group tags. If you specify more than
 * one filter type, the results include log groups that satisfy all filters.
 *
 * This operation is paginated. By default, your first use of this operation returns 50
 * results, and includes a token to use in a subsequent operation to return more results.
 */
export const listLogGroups: API.OperationMethod<
  ListLogGroupsRequest,
  ListLogGroupsResponse,
  ListLogGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListLogGroupsRequest,
  output: ListLogGroupsResponse,
  errors: [InvalidParameterException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLogGroups",
}));

export type ListLogGroupsForQueryError =
  | AccessDeniedException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of the log groups that were analyzed during a single CloudWatch Logs
 * Insights query. This can be useful for queries that use log group name prefixes or the
 * `filterIndex` command, because the log groups are dynamically selected in these
 * cases.
 *
 * For more information about field indexes, see Create field indexes
 * to improve query performance and reduce costs.
 */
export const listLogGroupsForQuery: API.PaginatedOperationMethod<
  ListLogGroupsForQueryRequest,
  ListLogGroupsForQueryResponse,
  ListLogGroupsForQueryError,
  Credentials | HttpClient.HttpClient,
  LogGroupIdentifier
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLogGroupsForQueryRequest,
  output: ListLogGroupsForQueryResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLogGroupsForQuery",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "logGroupIdentifiers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListScheduledQueriesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all scheduled queries in your account and region. You can filter results by state to
 * show only enabled or disabled queries.
 */
export const listScheduledQueries: API.PaginatedOperationMethod<
  ListScheduledQueriesRequest,
  ListScheduledQueriesResponse,
  ListScheduledQueriesError,
  Credentials | HttpClient.HttpClient,
  ScheduledQuerySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListScheduledQueriesRequest,
  output: ListScheduledQueriesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListScheduledQueries",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "scheduledQueries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSourcesForS3TableIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of data source associations for a specified S3 Table Integration, showing
 * which data sources are currently associated for query access.
 */
export const listSourcesForS3TableIntegration: API.PaginatedOperationMethod<
  ListSourcesForS3TableIntegrationRequest,
  ListSourcesForS3TableIntegrationResponse,
  ListSourcesForS3TableIntegrationError,
  Credentials | HttpClient.HttpClient,
  S3TableIntegrationSource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSourcesForS3TableIntegrationRequest,
  output: ListSourcesForS3TableIntegrationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSourcesForS3TableIntegration",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "sources",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSyslogConfigurationsError =
  | AccessDeniedException
  | InvalidOperationException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of syslog configurations. You can optionally filter the results by log
 * group or VPC endpoint.
 */
export const listSyslogConfigurations: API.OperationMethod<
  ListSyslogConfigurationsRequest,
  ListSyslogConfigurationsResponse,
  ListSyslogConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListSyslogConfigurationsRequest,
  output: ListSyslogConfigurationsResponse,
  errors: [
    AccessDeniedException,
    InvalidOperationException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSyslogConfigurations",
}));

export type ListTagsForResourceError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Displays the tags associated with a CloudWatch Logs resource. Currently, log groups and
 * destinations support tagging.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTagsLogGroupError =
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * The ListTagsLogGroup operation is on the path to deprecation. We recommend that you use
 * ListTagsForResource instead.
 *
 * Lists the tags for the specified log group.
 */
export const listTagsLogGroup: API.OperationMethod<
  ListTagsLogGroupRequest,
  ListTagsLogGroupResponse,
  ListTagsLogGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsLogGroupRequest,
  output: ListTagsLogGroupResponse,
  errors: [ResourceNotFoundException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsLogGroup",
}));

export type PutAccountPolicyError =
  | InvalidParameterException
  | LimitExceededException
  | OperationAbortedException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates an account-level data protection policy, subscription filter policy, field index
 * policy, transformer policy, or metric extraction policy that applies to all log groups, a
 * subset of log groups, or a data source name and type combination in the account. Account-level
 * policies are Region-specific: a policy applies only to log groups in the Region where you
 * create it. To apply a policy across multiple Regions, create the policy separately in each
 * Region.
 *
 * `PutAccountPolicy` is an account-wide administrative operation intended for
 * CloudWatch Logs administrators. Because it affects all log groups (or a broad subset) in
 * the account, you should grant `logs:PutAccountPolicy` permissions only to
 * administrators who manage logging configuration across the account, not to application teams
 * or individual log group owners.
 *
 * Conflict resolution between account-level and log-group-level
 * policies
 *
 * When both an account-level policy and a log-group-level policy of the same type apply to a
 * log group, the resolution depends on the policy type:
 *
 * - *Data protection* -- The two policies are cumulative. Any sensitive
 * term specified in either the account-level or the log-group-level policy is masked.
 *
 * - *Subscription filters* -- Account-level and log-group-level
 * subscription filters are additive. A log group can have up to 1 account-level and up to 2
 * log-group-level subscription filters.
 *
 * - *Transformers* -- A log-group-level transformer overrides the
 * account-level transformer. If a log group has its own transformer, it ignores the
 * account-level transformer policy.
 *
 * - *Field index policies* -- If a log group has its own field index
 * policy (created with `PutIndexPolicy`), any account-level policy that uses
 * `LogGroupNamePrefix` selection criteria or has no selection criteria is ignored
 * for that log group. However, account-level policies that use `DataSourceName`
 * and `DataSourceType` selection criteria still apply alongside the log-group-level
 * policy.
 *
 * - *Metric extraction policies* -- Metric extraction policies are
 * account-level only and have no log-group-level equivalent, so no conflict resolution
 * applies.
 *
 * For field index policies, you can configure indexed fields as *facets*
 * to enable interactive exploration of your logs. Facets provide value distributions and counts
 * for indexed fields in the CloudWatch Logs Insights console without requiring query
 * execution. For more information, see Use facets to group and
 * explore logs.
 *
 * To use this operation, you must be signed on with the correct permissions depending on the
 * type of policy that you are creating.
 *
 * - To create a data protection policy, you must have the
 * `logs:PutDataProtectionPolicy` and `logs:PutAccountPolicy`
 * permissions.
 *
 * - To create a subscription filter policy, you must have the
 * `logs:PutSubscriptionFilter` and `logs:PutAccountPolicy`
 * permissions.
 *
 * - To create a transformer policy, you must have the `logs:PutTransformer` and
 * `logs:PutAccountPolicy` permissions.
 *
 * - To create a field index policy, you must have the `logs:PutIndexPolicy` and
 * `logs:PutAccountPolicy` permissions.
 *
 * - To configure facets for field index policies, you must have the
 * `logs:PutIndexPolicy` and `logs:PutAccountPolicy`
 * permissions.
 *
 * - To create a metric extraction policy, you must have the
 * `logs:PutMetricExtractionPolicy` and `logs:PutAccountPolicy`
 * permissions.
 *
 * **Data protection policy**
 *
 * A data protection policy can help safeguard sensitive data that's ingested by your log
 * groups by auditing and masking the sensitive log data. Each account can have only one
 * account-level data protection policy.
 *
 * Sensitive data is detected and masked when it is ingested into a log group. When you set
 * a data protection policy, log events ingested into the log groups before that time are not
 * masked.
 *
 * If you use `PutAccountPolicy` to create a data protection policy for your whole
 * account, it applies to both existing log groups and all log groups that are created later in
 * this account. The account-level policy is applied to existing log groups with eventual
 * consistency. It might take up to 5 minutes before sensitive data in existing log groups begins
 * to be masked.
 *
 * By default, when a user views a log event that includes masked data, the sensitive data is
 * replaced by asterisks. A user who has the `logs:Unmask` permission can use a GetLogEvents or FilterLogEvents operation with the `unmask` parameter set to
 * `true` to view the unmasked log events. Users with the `logs:Unmask`
 * can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs
 * Insights query with the `unmask` query command.
 *
 * For more information, including a list of types of data that can be audited and masked,
 * see Protect sensitive log data
 * with masking.
 *
 * To use the `PutAccountPolicy` operation for a data protection policy, you must
 * be signed on with the `logs:PutDataProtectionPolicy` and
 * `logs:PutAccountPolicy` permissions.
 *
 * The `PutAccountPolicy` operation applies to all log groups in the account. You
 * can use PutDataProtectionPolicy to create a data protection policy that applies to just one
 * log group. If a log group has its own data protection policy and the account also has an
 * account-level data protection policy, then the two policies are cumulative. Any sensitive term
 * specified in either policy is masked.
 *
 * **Subscription filter policy**
 *
 * A subscription filter policy sets up a real-time feed of log events from CloudWatch Logs to other Amazon Web Services services. Account-level subscription filter policies apply to
 * both existing log groups and log groups that are created later in this account. Supported
 * destinations are Kinesis Data Streams, Firehose, and Lambda. When log
 * events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP
 * format.
 *
 * The following destinations are supported for subscription filters:
 *
 * - An Kinesis Data Streams data stream in the same account as the subscription policy, for
 * same-account delivery.
 *
 * - An Firehose data stream in the same account as the subscription policy, for
 * same-account delivery.
 *
 * - A Lambda function in the same account as the subscription policy, for
 * same-account delivery.
 *
 * - A logical destination in a different account created with PutDestination, for cross-account delivery. Kinesis Data Streams and Firehose are supported as logical destinations.
 *
 * Each account can have one account-level subscription filter policy per Region. If you are
 * updating an existing filter, you must specify the correct name in `PolicyName`. To
 * perform a `PutAccountPolicy` subscription filter operation for any destination
 * except a Lambda function, you must also have the `iam:PassRole`
 * permission.
 *
 * **Transformer policy**
 *
 * Creates or updates a *log transformer policy* for your account. You use
 * log transformers to transform log events into a different format, making them easier for you
 * to process and analyze. You can also transform logs from different sources into standardized
 * formats that contain relevant, source-specific information. After you have created a
 * transformer, CloudWatch Logs performs this transformation at the time of log ingestion. You
 * can then refer to the transformed versions of the logs during operations such as querying with
 * CloudWatch Logs Insights or creating metric filters or subscription filters.
 *
 * You can also use a transformer to copy metadata from metadata keys into the log events
 * themselves. This metadata can include log group name, log stream name, account ID and
 * Region.
 *
 * A transformer for a log group is a series of processors, where each processor applies one
 * type of transformation to the log events ingested into this log group. For more information
 * about the available processors to use in a transformer, see Processors that you can use.
 *
 * Having log events in standardized format enables visibility across your applications for
 * your log analysis, reporting, and alarming needs. CloudWatch Logs provides transformation
 * for common log types with out-of-the-box transformation templates for major Amazon Web Services
 * log sources such as VPC flow logs, Lambda, and Amazon RDS. You can use
 * pre-built transformation templates or create custom transformation policies.
 *
 * You can create transformers only for the log groups in the Standard log class.
 *
 * You can have one account-level transformer policy that applies to all log groups in the
 * account. Or you can create as many as 20 account-level transformer policies that are each
 * scoped to a subset of log groups with the `selectionCriteria` parameter. If you
 * have multiple account-level transformer policies with selection criteria, no two of them can
 * use the same or overlapping log group name prefixes. For example, if you have one policy
 * filtered to log groups that start with `my-log`, you can't have another transformer
 * policy filtered to `my-logpprod` or `my-logging`.
 *
 * You can also set up a transformer at the log-group level. For more information, see PutTransformer. If there is both a log-group level transformer created with
 * `PutTransformer` and an account-level transformer that could apply to the same
 * log group, the log group uses only the log-group level transformer. It ignores the
 * account-level transformer.
 *
 * **Field index policy**
 *
 * You can use field index policies to create indexes on fields found in log events for a log
 * group or data source name and type combination. Creating field indexes can help lower the scan
 * volume for CloudWatch Logs Insights queries that reference those fields, because these
 * queries attempt to skip the processing of log events that are known to not match the indexed
 * field. Good fields to index are fields that you often need to query for and fields or values
 * that match only a small fraction of the total log events. Common examples of indexes include
 * request ID, session ID, user IDs, or instance IDs. For more information, see Create field indexes to improve query performance and reduce costs
 *
 * To find the fields that are in your log group events, use the GetLogGroupFields operation. To find the fields for a data source use the GetLogFields operation.
 *
 * For example, suppose you have created a field index for `requestId`. Then, any
 * CloudWatch Logs Insights query on that log group that includes requestId =
 * *value*
 * or requestId in [*value*,
 * *value*, ...] will attempt to process only the log events where
 * the indexed field matches the specified value.
 *
 * Matches of log events to the names of indexed fields are case-sensitive. For example, an
 * indexed field of `RequestId` won't match a log event containing
 * `requestId`.
 *
 * You can have one account-level field index policy that applies to all log groups in the
 * account. Or you can create as many as 20 account-level field index policies that are each
 * scoped to a subset of log groups using `LogGroupNamePrefix` with the
 * `selectionCriteria` parameter. You can have another 20 account-level field index
 * policies using `DataSourceName` and `DataSourceType` for the
 * `selectionCriteria` parameter. If you have multiple account-level index policies
 * with `LogGroupNamePrefix` selection criteria, no two of them can use the same or
 * overlapping log group name prefixes. For example, if you have one policy filtered to log
 * groups that start with *my-log*, you can't have another field index policy
 * filtered to *my-logpprod* or *my-logging*. Similarly, if
 * you have multiple account-level index policies with `DataSourceName` and
 * `DataSourceType` selection criteria, no two of them can use the same data source
 * name and type combination. For example, if you have one policy filtered to the data source
 * name `amazon_vpc` and data source type `flow` you cannot create another
 * policy with this combination.
 *
 * If you create an account-level field index policy in a monitoring account in cross-account
 * observability, the policy is applied only to the monitoring account and not to any source
 * accounts.
 *
 * CloudWatch Logs provides default field indexes for all log groups in the Standard log
 * class. Default field indexes are automatically available for the following fields:
 *
 * - `@logStream`
 *
 * - `@aws.region`
 *
 * - `@aws.account`
 *
 * - `@source.log`
 *
 * - `@data_source_name`
 *
 * - `@data_source_type`
 *
 * - `@data_format`
 *
 * - `traceId`
 *
 * - `severityText`
 *
 * - `attributes.session.id`
 *
 * CloudWatch Logs provides default field indexes for certain data source name and type
 * combinations as well. Default field indexes are automatically available for the following data
 * source name and type combinations as identified in the following list:
 *
 * `amazon_vpc.flow`
 *
 * - `action`
 *
 * - `logStatus`
 *
 * - `region`
 *
 * - `flowDirection`
 *
 * - `type`
 *
 * `amazon_route53.resolver_query`
 *
 * - `transport`
 *
 * - `rcode`
 *
 * `aws_waf.access`
 *
 * - `action`
 *
 * - `httpRequest.country`
 *
 * `aws_cloudtrail.data`, `aws_cloudtrail.management`
 *
 * - `eventSource`
 *
 * - `eventName`
 *
 * - `awsRegion`
 *
 * - `userAgent`
 *
 * - `errorCode`
 *
 * - `eventType`
 *
 * - `managementEvent`
 *
 * - `readOnly`
 *
 * - `eventCategory`
 *
 * - `requestId`
 *
 * Default field indexes are in addition to any custom field indexes you define within your
 * policy. Default field indexes are not counted towards your field index
 * quota.
 *
 * If you want to create a field index policy for a single log group, you can use PutIndexPolicy instead of `PutAccountPolicy`. If you do so, that log
 * group will use that log-group level policy and any account-level policies that match at the
 * data source level; any account-level policy that matches at the log group level (for example,
 * no selection criteria or log group name prefix selection criteria) will be ignored.
 *
 * **Metric extraction policy**
 *
 * A metric extraction policy controls whether CloudWatch Metrics can be created through the
 * Embedded Metrics Format (EMF) for log groups in your account. By default, EMF metric creation
 * is enabled for all log groups. You can use metric extraction policies to disable EMF metric
 * creation for your entire account or specific log groups.
 *
 * When a policy disables EMF metric creation for a log group, log events in the EMF format
 * are still ingested, but no CloudWatch Metrics are created from them.
 *
 * Creating a policy disables metrics for Amazon Web Services features that use EMF to create metrics, such
 * as CloudWatch Container Insights and CloudWatch Application Signals. To prevent turning off
 * those features by accident, we recommend that you exclude the underlying log-groups through
 * a selection-criteria such as LogGroupNamePrefix NOT IN ["/aws/containerinsights",
 * "/aws/ecs/containerinsights", "/aws/application-signals/data"].
 *
 * Each account can have either one account-level metric extraction policy that applies to
 * all log groups, or up to 5 policies that are each scoped to a subset of log groups with the
 * `selectionCriteria` parameter. The selection criteria supports filtering by
 * `LogGroupName` and `LogGroupNamePrefix` using the operators
 * `IN` and `NOT IN`. You can specify up to 50 values in each
 * `IN` or `NOT IN` list.
 *
 * The selection criteria can be specified in these formats:
 *
 * `LogGroupName IN ["log-group-1", "log-group-2"]`
 *
 * `LogGroupNamePrefix NOT IN ["/aws/prefix1", "/aws/prefix2"]`
 *
 * If you have multiple account-level metric extraction policies with selection criteria, no
 * two of them can have overlapping criteria. For example, if you have one policy with selection
 * criteria `LogGroupNamePrefix IN ["my-log"]`, you can't have another metric
 * extraction policy with selection criteria `LogGroupNamePrefix IN ["/my-log-prod"]`
 * or `LogGroupNamePrefix IN ["/my-logging"]`, as the set of log groups matching these
 * prefixes would be a subset of the log groups matching the first policy's prefix, creating an
 * overlap.
 *
 * When using `NOT IN`, only one policy with this operator is allowed per
 * account.
 *
 * When combining policies with `IN` and `NOT IN` operators, the
 * overlap check ensures that policies don't have conflicting effects. Two policies with
 * `IN` and `NOT IN` operators do not overlap if and only if every value
 * in the `IN `policy is completely contained within some value in the NOT
 * IN policy. For example:
 *
 * - If you have a `NOT IN` policy for prefix `"/aws/lambda"`, you
 * can create an `IN` policy for the exact log group name
 * `"/aws/lambda/function1"` because the set of log groups matching
 * `"/aws/lambda/function1"` is a subset of the log groups matching
 * `"/aws/lambda"`.
 *
 * - If you have a `NOT IN` policy for prefix `"/aws/lambda"`, you
 * cannot create an `IN` policy for prefix `"/aws"` because the set of
 * log groups matching `"/aws"` is not a subset of the log groups matching
 * `"/aws/lambda"`.
 */
export const putAccountPolicy: API.OperationMethod<
  PutAccountPolicyRequest,
  PutAccountPolicyResponse,
  PutAccountPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAccountPolicyRequest,
  output: PutAccountPolicyResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    OperationAbortedException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccountPolicy",
}));

export type PutBearerTokenAuthenticationError =
  | AccessDeniedException
  | InvalidOperationException
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Enables or disables bearer token authentication for the specified log group. When enabled on a
 * log group, bearer token authentication is enabled on operations until it is explicitly
 * disabled.
 *
 * For information about the parameters that are common to all actions, see Common Parameters.
 */
export const putBearerTokenAuthentication: API.OperationMethod<
  PutBearerTokenAuthenticationRequest,
  PutBearerTokenAuthenticationResponse,
  PutBearerTokenAuthenticationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutBearerTokenAuthenticationRequest,
  output: PutBearerTokenAuthenticationResponse,
  errors: [
    AccessDeniedException,
    InvalidOperationException,
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutBearerTokenAuthentication",
}));

export type PutDataProtectionPolicyError =
  | InvalidParameterException
  | LimitExceededException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates a data protection policy for the specified log group. A data protection policy can
 * help safeguard sensitive data that's ingested by the log group by auditing and masking the
 * sensitive log data.
 *
 * Sensitive data is detected and masked when it is ingested into the log group. When you
 * set a data protection policy, log events ingested into the log group before that time are
 * not masked.
 *
 * By default, when a user views a log event that includes masked data, the sensitive data is
 * replaced by asterisks. A user who has the `logs:Unmask` permission can use a GetLogEvents or FilterLogEvents operation with the `unmask` parameter set to
 * `true` to view the unmasked log events. Users with the `logs:Unmask`
 * can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs
 * Insights query with the `unmask` query command.
 *
 * For more information, including a list of types of data that can be audited and masked,
 * see Protect sensitive log data
 * with masking.
 *
 * The `PutDataProtectionPolicy` operation applies to only the specified log
 * group. You can also use PutAccountPolicy to create an account-level data protection policy that applies to
 * all log groups in the account, including both existing log groups and log groups that are
 * created level. If a log group has its own data protection policy and the account also has an
 * account-level data protection policy, then the two policies are cumulative. Any sensitive term
 * specified in either policy is masked.
 */
export const putDataProtectionPolicy: API.OperationMethod<
  PutDataProtectionPolicyRequest,
  PutDataProtectionPolicyResponse,
  PutDataProtectionPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutDataProtectionPolicyRequest,
  output: PutDataProtectionPolicyResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDataProtectionPolicy",
}));

export type PutDeliveryDestinationError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates a logical *delivery destination*. A delivery
 * destination is an Amazon Web Services resource that represents an Amazon Web Services service
 * that logs can be sent to. CloudWatch Logs, Amazon S3, and Firehose are
 * supported as logs delivery destinations and X-Ray as the trace delivery
 * destination.
 *
 * To configure logs delivery between a supported Amazon Web Services service and a
 * destination, you must do the following:
 *
 * - Create a delivery source, which is a logical object that represents the resource that
 * is actually sending the logs. For more information, see PutDeliverySource.
 *
 * - Use `PutDeliveryDestination` to create a delivery
 * destination in the same account of the actual delivery destination. The
 * delivery destination that you create is a logical object that represents the actual
 * delivery destination.
 *
 * - If you are delivering logs cross-account, you must use PutDeliveryDestinationPolicy in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 *
 * - Use `CreateDelivery` to create a *delivery* by pairing
 * exactly one delivery source and one delivery destination. For more information, see CreateDelivery.
 *
 * You can configure a single delivery source to send logs to multiple destinations by
 * creating multiple deliveries. You can also create multiple deliveries to configure multiple
 * delivery sources to send logs to the same delivery destination.
 *
 * Only some Amazon Web Services services support being configured as a delivery source. These
 * services are listed as **Supported [V2 Permissions]** in the
 * table at Enabling logging from
 * Amazon Web Services services.
 *
 * If you use this operation to update an existing delivery destination, all the current
 * delivery destination parameters are overwritten with the new parameter values that you
 * specify.
 */
export const putDeliveryDestination: API.OperationMethod<
  PutDeliveryDestinationRequest,
  PutDeliveryDestinationResponse,
  PutDeliveryDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutDeliveryDestinationRequest,
  output: PutDeliveryDestinationResponse,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDeliveryDestination",
}));

export type PutDeliveryDestinationPolicyError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ValidationException
  | CommonErrors;
/**
 * Creates and assigns an IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account. To
 * configure the delivery of logs from an Amazon Web Services service in another account to a logs
 * delivery destination in the current account, you must do the following:
 *
 * - Create a delivery source, which is a logical object that represents the resource that
 * is actually sending the logs. For more information, see PutDeliverySource.
 *
 * - Create a *delivery destination*, which is a logical object that
 * represents the actual delivery destination. For more information, see PutDeliveryDestination.
 *
 * - Use this operation in the destination account to assign an IAM policy
 * to the destination. This policy allows delivery to that destination.
 *
 * - Create a *delivery* by pairing exactly one delivery source and one
 * delivery destination. For more information, see CreateDelivery.
 *
 * Only some Amazon Web Services services support being configured as a delivery source. These
 * services are listed as **Supported [V2 Permissions]** in the
 * table at Enabling logging from
 * Amazon Web Services services.
 *
 * The contents of the policy must include two statements. One statement enables general logs
 * delivery, and the other allows delivery to the chosen destination. See the examples for the
 * needed policies.
 */
export const putDeliveryDestinationPolicy: API.OperationMethod<
  PutDeliveryDestinationPolicyRequest,
  PutDeliveryDestinationPolicyResponse,
  PutDeliveryDestinationPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutDeliveryDestinationPolicyRequest,
  output: PutDeliveryDestinationPolicyResponse,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDeliveryDestinationPolicy",
}));

export type PutDeliverySourceError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates a logical *delivery source*. A delivery source
 * represents an Amazon Web Services resource that sends logs to an logs delivery destination. The
 * destination can be CloudWatch Logs, Amazon S3, Firehose or X-Ray for sending traces.
 *
 * To configure logs delivery between a delivery destination and an Amazon Web Services
 * service that is supported as a delivery source, you must do the following:
 *
 * - Use `PutDeliverySource` to create a delivery source, which is a logical
 * object that represents the resource that is actually sending the logs.
 *
 * - Use `PutDeliveryDestination` to create a delivery
 * destination, which is a logical object that represents the actual delivery
 * destination. For more information, see PutDeliveryDestination.
 *
 * - If you are delivering logs cross-account, you must use PutDeliveryDestinationPolicy in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 *
 * - Use `CreateDelivery` to create a *delivery* by pairing
 * exactly one delivery source and one delivery destination. For more information, see CreateDelivery.
 *
 * You can configure a single delivery source to send logs to multiple destinations by
 * creating multiple deliveries. You can also create multiple deliveries to configure multiple
 * delivery sources to send logs to the same delivery destination.
 *
 * Only some Amazon Web Services services support being configured as a delivery source. These
 * services are listed as **Supported [V2 Permissions]** in the
 * table at Enabling logging from
 * Amazon Web Services services.
 *
 * If you use this operation to update an existing delivery source, all the current delivery
 * source parameters are overwritten with the new parameter values that you specify.
 */
export const putDeliverySource: API.OperationMethod<
  PutDeliverySourceRequest,
  PutDeliverySourceResponse,
  PutDeliverySourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutDeliverySourceRequest,
  output: PutDeliverySourceResponse,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDeliverySource",
}));

export type PutDestinationError =
  | InvalidParameterException
  | OperationAbortedException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates or updates a destination. This operation is used only to create destinations
 * for cross-account subscriptions.
 *
 * A destination encapsulates a physical resource (such as an Amazon Kinesis stream). With
 * a destination, you can subscribe to a real-time stream of log events for a different account,
 * ingested using PutLogEvents.
 *
 * Through an access policy, a destination controls what is written to it. By default,
 * `PutDestination` does not set any access policy with the destination, which means
 * a cross-account user cannot call PutSubscriptionFilter against this destination. To enable this, the destination
 * owner must call PutDestinationPolicy after `PutDestination`.
 *
 * To perform a `PutDestination` operation, you must also have the
 * `iam:PassRole` permission.
 */
export const putDestination: API.OperationMethod<
  PutDestinationRequest,
  PutDestinationResponse,
  PutDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutDestinationRequest,
  output: PutDestinationResponse,
  errors: [InvalidParameterException, OperationAbortedException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDestination",
}));

export type PutDestinationPolicyError =
  | InvalidParameterException
  | OperationAbortedException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates or updates an access policy associated with an existing destination. An access
 * policy is an IAM
 * policy document that is used to authorize claims to register a subscription filter
 * against a given destination.
 */
export const putDestinationPolicy: API.OperationMethod<
  PutDestinationPolicyRequest,
  PutDestinationPolicyResponse,
  PutDestinationPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutDestinationPolicyRequest,
  output: PutDestinationPolicyResponse,
  errors: [InvalidParameterException, OperationAbortedException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDestinationPolicy",
}));

export type PutIndexPolicyError =
  | InvalidParameterException
  | LimitExceededException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates or updates a *field index policy* for the specified log group.
 * Only log groups in the Standard log class support field index policies. For more information
 * about log classes, see Log
 * classes.
 *
 * You can use field index policies to create *field indexes* on fields
 * found in log events in the log group. Creating field indexes speeds up and lowers the costs
 * for CloudWatch Logs Insights queries that reference those field indexes, because these
 * queries attempt to skip the processing of log events that are known to not match the indexed
 * field. Good fields to index are fields that you often need to query for and fields or values
 * that match only a small fraction of the total log events. Common examples of indexes include
 * request ID, session ID, userID, and instance IDs. For more information, see Create field indexes to improve query performance and reduce costs.
 *
 * You can configure indexed fields as *facets* to enable interactive
 * exploration and filtering of your logs in the CloudWatch Logs Insights console. Facets
 * allow you to view value distributions and counts for indexed fields without running queries.
 * When you create a field index, you can optionally set it as a facet to enable this interactive
 * analysis capability. For more information, see Use facets to group and
 * explore logs.
 *
 * To find the fields that are in your log group events, use the GetLogGroupFields operation.
 *
 * For example, suppose you have created a field index for `requestId`. Then, any
 * CloudWatch Logs Insights query on that log group that includes requestId =
 * *value*
 * or requestId IN [*value*,
 * *value*, ...] will process fewer log events to reduce costs, and
 * have improved performance.
 *
 * CloudWatch Logs provides default field indexes for all log groups in the Standard log
 * class. Default field indexes are automatically available for the following fields:
 *
 * - `@logStream`
 *
 * - `@aws.region`
 *
 * - `@aws.account`
 *
 * - `@source.log`
 *
 * - `traceId`
 *
 * Default field indexes are in addition to any custom field indexes you define within your
 * policy. Default field indexes are not counted towards your field index quota.
 *
 * Each index policy has the following quotas and restrictions:
 *
 * - As many as 20 fields can be included in the policy.
 *
 * - Each field name can include as many as 100 characters.
 *
 * Matches of log events to the names of indexed fields are case-sensitive. For example, a
 * field index of `RequestId` won't match a log event containing
 * `requestId`.
 *
 * Log group-level field index policies created with `PutIndexPolicy` override
 * account-level field index policies created with PutAccountPolicy that apply to log groups. If you use `PutIndexPolicy`
 * to create a field index policy for a log group, that log group uses only that policy for log
 * group-level indexing, including any facet configurations. The log group ignores any
 * account-wide field index policy that applies to log groups, but data source-based account
 * policies may still apply.
 */
export const putIndexPolicy: API.OperationMethod<
  PutIndexPolicyRequest,
  PutIndexPolicyResponse,
  PutIndexPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutIndexPolicyRequest,
  output: PutIndexPolicyResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutIndexPolicy",
}));

export type PutIntegrationError =
  | InvalidParameterException
  | LimitExceededException
  | ServiceUnavailableException
  | ValidationException
  | CommonErrors;
/**
 * Creates an integration between CloudWatch Logs and another service in this account.
 * Currently, only integrations with OpenSearch Service are supported, and currently you can have
 * only one integration in your account.
 *
 * Integrating with OpenSearch Service makes it possible for you to create curated vended
 * logs dashboards, powered by OpenSearch Service analytics. For more information, see Vended log
 * dashboards powered by Amazon OpenSearch Service.
 *
 * You can use this operation only to create a new integration. You can't modify an existing
 * integration.
 */
export const putIntegration: API.OperationMethod<
  PutIntegrationRequest,
  PutIntegrationResponse,
  PutIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutIntegrationRequest,
  output: PutIntegrationResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    ServiceUnavailableException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutIntegration",
}));

export type PutLogEventsError =
  | DataAlreadyAcceptedException
  | InvalidParameterException
  | InvalidSequenceTokenException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | UnrecognizedClientException
  | CommonErrors;
/**
 * Uploads a batch of log events to the specified log stream.
 *
 * The sequence token is now ignored in `PutLogEvents` actions.
 * `PutLogEvents` actions are always accepted and never return
 * `InvalidSequenceTokenException` or `DataAlreadyAcceptedException`
 * even if the sequence token is not valid. You can use parallel `PutLogEvents`
 * actions on the same log stream.
 *
 * The batch of events must satisfy the following constraints:
 *
 * - The maximum batch size is 1,048,576 bytes. This size is calculated as the sum of
 * all event messages in UTF-8, plus 26 bytes for each log event.
 *
 * - Events more than 2 hours in the future are rejected while processing remaining
 * valid events.
 *
 * - Events older than 14 days or preceding the log group's retention period are
 * rejected while processing remaining valid events.
 *
 * - The log events in the batch must be in chronological order by their timestamp. The
 * timestamp is the time that the event occurred, expressed as the number of milliseconds
 * after `Jan 1, 1970 00:00:00 UTC`. (In Amazon Web Services Tools for PowerShell
 * and the Amazon Web Services SDK for .NET, the timestamp is specified in .NET format:
 * `yyyy-mm-ddThh:mm:ss`. For example, `2017-09-15T13:45:30`.)
 *
 * - A batch of log events in a single request must be in a chronological order.
 * Otherwise, the operation fails.
 *
 * - Each log event can be no larger than 1 MB.
 *
 * - The maximum number of log events in a batch is 10,000.
 *
 * - For valid events (within 14 days in the past to 2 hours in future), the time span
 * in a single batch cannot exceed 24 hours. Otherwise, the operation fails.
 *
 * The quota of five requests per second per log stream has been removed. Instead,
 * `PutLogEvents` actions are throttled based on a per-second per-account quota.
 * You can request an increase to the per-second throttling quota by using the Service Quotas service.
 *
 * If a call to `PutLogEvents` returns "UnrecognizedClientException" the most
 * likely cause is a non-valid Amazon Web Services access key ID or secret key.
 */
export const putLogEvents: API.OperationMethod<
  PutLogEventsRequest,
  PutLogEventsResponse,
  PutLogEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutLogEventsRequest,
  output: PutLogEventsResponse,
  errors: [
    DataAlreadyAcceptedException,
    InvalidParameterException,
    InvalidSequenceTokenException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    UnrecognizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutLogEvents",
}));

export type PutLogGroupDeletionProtectionError =
  | AccessDeniedException
  | InvalidOperationException
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Enables or disables deletion protection for the specified log group. When enabled on a
 * log group, deletion protection blocks all deletion operations until it is explicitly
 * disabled.
 *
 * For information about the parameters that are common to all actions, see Common Parameters.
 */
export const putLogGroupDeletionProtection: API.OperationMethod<
  PutLogGroupDeletionProtectionRequest,
  PutLogGroupDeletionProtectionResponse,
  PutLogGroupDeletionProtectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutLogGroupDeletionProtectionRequest,
  output: PutLogGroupDeletionProtectionResponse,
  errors: [
    AccessDeniedException,
    InvalidOperationException,
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutLogGroupDeletionProtection",
}));

export type PutMetricFilterError =
  | InvalidOperationException
  | InvalidParameterException
  | LimitExceededException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates or updates a metric filter and associates it with the specified log group. With
 * metric filters, you can configure rules to extract metric data from log events ingested
 * through PutLogEvents.
 *
 * The maximum number of metric filters that can be associated with a log group is
 * 100.
 *
 * Using regular expressions in filter patterns is supported. For these filters, there is a
 * quota of two regular expression patterns within a single filter pattern. There is also a quota
 * of five regular expression patterns per log group. For more information about using regular
 * expressions in filter patterns, see Filter pattern syntax for
 * metric filters, subscription filters, filter log events, and Live Tail.
 *
 * When you create a metric filter, you can also optionally assign a unit and dimensions to
 * the metric that is created.
 *
 * Metrics extracted from log events are charged as custom metrics. To prevent unexpected
 * high charges, do not specify high-cardinality fields such as `IPAddress` or
 * `requestID` as dimensions. Each different value found for a dimension is
 * treated as a separate metric and accrues charges as a separate custom metric.
 *
 * CloudWatch Logs might disable a metric filter if it generates 1,000 different
 * name/value pairs for your specified dimensions within one hour.
 *
 * You can also set up a billing alarm to alert you if your charges are higher than
 * expected. For more information, see
 * Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges.
 */
export const putMetricFilter: API.OperationMethod<
  PutMetricFilterRequest,
  PutMetricFilterResponse,
  PutMetricFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutMetricFilterRequest,
  output: PutMetricFilterResponse,
  errors: [
    InvalidOperationException,
    InvalidParameterException,
    LimitExceededException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutMetricFilter",
}));

export type PutQueryDefinitionError =
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates or updates a query definition for CloudWatch Logs Insights. For more information,
 * see Analyzing Log Data with CloudWatch Logs Insights.
 *
 * To update a query definition, specify its `queryDefinitionId` in your request.
 * The values of `name`, `queryString`, and `logGroupNames` are
 * changed to the values that you specify in your update operation. No current values are
 * retained from the current query definition. For example, imagine updating a current query
 * definition that includes log groups. If you don't specify the `logGroupNames`
 * parameter in your update operation, the query definition changes to contain no log
 * groups.
 *
 * You must have the `logs:PutQueryDefinition` permission to be able to perform
 * this operation.
 */
export const putQueryDefinition: API.OperationMethod<
  PutQueryDefinitionRequest,
  PutQueryDefinitionResponse,
  PutQueryDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutQueryDefinitionRequest,
  output: PutQueryDefinitionResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutQueryDefinition",
}));

export type PutResourcePolicyError =
  | InvalidParameterException
  | LimitExceededException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates or updates a resource policy allowing other Amazon Web Services services to put
 * log events to this account, such as Amazon Route 53. This API has the following
 * restrictions:
 *
 * - **Supported actions** - Policy only supports
 * `logs:PutLogEvents` and `logs:CreateLogStream ` actions
 *
 * - **Supported principals** - Policy only applies when
 * operations are invoked by Amazon Web Services service principals (not IAM
 * users, roles, or cross-account principals
 *
 * - **Policy limits** - An account can have a maximum of 10
 * policies without resourceARN and one per LogGroup resourceARN
 *
 * Resource policies with actions invoked by non-Amazon Web Services service principals
 * (such as IAM users, roles, or other Amazon Web Services accounts) will not be
 * enforced. For access control involving these principals, use the IAM
 * policies.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutResourcePolicyRequest,
  output: PutResourcePolicyResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type PutRetentionPolicyError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Sets the retention of the specified log group. With a retention policy, you can
 * configure the number of days for which to retain log events in the specified log
 * group.
 *
 * CloudWatch Logs doesn't immediately delete log events when they reach their retention
 * setting. It typically takes up to 72 hours after that before log events are deleted, but in
 * rare situations might take longer.
 *
 * To illustrate, imagine that you change a log group to have a longer retention setting
 * when it contains log events that are past the expiration date, but haven't been deleted.
 * Those log events will take up to 72 hours to be deleted after the new retention date is
 * reached. To make sure that log data is deleted permanently, keep a log group at its lower
 * retention setting until 72 hours after the previous retention period ends. Alternatively,
 * wait to change the retention setting until you confirm that the earlier log events are
 * deleted.
 *
 * When log events reach their retention setting they are marked for deletion. After they
 * are marked for deletion, they do not add to your archival storage costs anymore, even if
 * they are not actually deleted until later. These log events marked for deletion are also not
 * included when you use an API to retrieve the `storedBytes` value to see how many
 * bytes a log group is storing.
 */
export const putRetentionPolicy: API.OperationMethod<
  PutRetentionPolicyRequest,
  PutRetentionPolicyResponse,
  PutRetentionPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutRetentionPolicyRequest,
  output: PutRetentionPolicyResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutRetentionPolicy",
}));

export type PutStorageTierPolicyError =
  | AccessDeniedException
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Sets the storage tier policy for the account. When you set the storage tier to
 * `INTELLIGENT_TIERING`, the service automatically moves log data to the most
 * cost-effective storage tier based on access frequency.
 */
export const putStorageTierPolicy: API.OperationMethod<
  PutStorageTierPolicyRequest,
  PutStorageTierPolicyResponse,
  PutStorageTierPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutStorageTierPolicyRequest,
  output: PutStorageTierPolicyResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutStorageTierPolicy",
}));

export type PutSubscriptionFilterError =
  | InvalidOperationException
  | InvalidParameterException
  | LimitExceededException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates or updates a subscription filter and associates it with the specified log
 * group. With subscription filters, you can subscribe to a real-time stream of log events
 * ingested through PutLogEvents
 * and have them delivered to a specific destination. When log events are sent to the receiving
 * service, they are Base64 encoded and compressed with the GZIP format.
 *
 * The following destinations are supported for subscription filters:
 *
 * - An Amazon Kinesis data stream belonging to the same account as the subscription
 * filter, for same-account delivery.
 *
 * - A logical destination created with PutDestination that belongs to a different account, for cross-account delivery.
 * We currently support Kinesis Data Streams and Firehose as logical
 * destinations.
 *
 * - An Amazon Kinesis Data Firehose delivery stream that belongs to the same account as
 * the subscription filter, for same-account delivery.
 *
 * - An Lambda function that belongs to the same account as the
 * subscription filter, for same-account delivery.
 *
 * Each log group can have up to two subscription filters associated with it. If you are
 * updating an existing filter, you must specify the correct name in `filterName`.
 *
 * Using regular expressions in filter patterns is supported. For these filters, there is a
 * quotas of quota of two regular expression patterns within a single filter pattern. There is
 * also a quota of five regular expression patterns per log group. For more information about
 * using regular expressions in filter patterns, see Filter pattern syntax for
 * metric filters, subscription filters, filter log events, and Live Tail.
 *
 * To perform a `PutSubscriptionFilter` operation for any destination except a
 * Lambda function, you must also have the `iam:PassRole`
 * permission.
 */
export const putSubscriptionFilter: API.OperationMethod<
  PutSubscriptionFilterRequest,
  PutSubscriptionFilterResponse,
  PutSubscriptionFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutSubscriptionFilterRequest,
  output: PutSubscriptionFilterResponse,
  errors: [
    InvalidOperationException,
    InvalidParameterException,
    LimitExceededException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutSubscriptionFilter",
}));

export type PutSyslogConfigurationError =
  | AccessDeniedException
  | InvalidOperationException
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates or updates a syslog configuration for a log group. This enables ingestion of
 * syslog data through the specified VPC endpoint into the log group.
 */
export const putSyslogConfiguration: API.OperationMethod<
  PutSyslogConfigurationRequest,
  PutSyslogConfigurationResponse,
  PutSyslogConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutSyslogConfigurationRequest,
  output: PutSyslogConfigurationResponse,
  errors: [
    AccessDeniedException,
    InvalidOperationException,
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutSyslogConfiguration",
}));

export type PutTransformerError =
  | InvalidOperationException
  | InvalidParameterException
  | LimitExceededException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates or updates a *log transformer* for a single log group. You use
 * log transformers to transform log events into a different format, making them easier for you
 * to process and analyze. You can also transform logs from different sources into standardized
 * formats that contains relevant, source-specific information.
 *
 * After you have created a transformer, CloudWatch Logs performs the transformations at
 * the time of log ingestion. You can then refer to the transformed versions of the logs during
 * operations such as querying with CloudWatch Logs Insights or creating metric filters or
 * subscription filers.
 *
 * You can also use a transformer to copy metadata from metadata keys into the log events
 * themselves. This metadata can include log group name, log stream name, account ID and
 * Region.
 *
 * A transformer for a log group is a series of processors, where each processor applies one
 * type of transformation to the log events ingested into this log group. The processors work one
 * after another, in the order that you list them, like a pipeline. For more information about
 * the available processors to use in a transformer, see Processors that you can use.
 *
 * Having log events in standardized format enables visibility across your applications for
 * your log analysis, reporting, and alarming needs. CloudWatch Logs provides transformation
 * for common log types with out-of-the-box transformation templates for major Amazon Web Services
 * log sources such as VPC flow logs, Lambda, and Amazon RDS. You can use
 * pre-built transformation templates or create custom transformation policies.
 *
 * You can create transformers only for the log groups in the Standard log class.
 *
 * You can also set up a transformer at the account level. For more information, see PutAccountPolicy. If there is both a log-group level transformer created with
 * `PutTransformer` and an account-level transformer that could apply to the same
 * log group, the log group uses only the log-group level transformer. It ignores the
 * account-level transformer.
 */
export const putTransformer: API.OperationMethod<
  PutTransformerRequest,
  PutTransformerResponse,
  PutTransformerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutTransformerRequest,
  output: PutTransformerResponse,
  errors: [
    InvalidOperationException,
    InvalidParameterException,
    LimitExceededException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTransformer",
}));

export type StartLiveTailError =
  | AccessDeniedException
  | InvalidOperationException
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Starts a Live Tail streaming session for one or more log groups. A Live Tail session
 * returns a stream of log events that have been recently ingested in the log groups. For more
 * information, see Use Live Tail to view logs
 * in near real time.
 *
 * The response to this operation is a response stream, over which the server sends live log
 * events and the client receives them.
 *
 * The following objects are sent over the stream:
 *
 * - A single LiveTailSessionStart object is sent at the start of the session.
 *
 * - Every second, a LiveTailSessionUpdate object is sent. Each of these objects contains an array
 * of the actual log events.
 *
 * If no new log events were ingested in the past second, the
 * `LiveTailSessionUpdate` object will contain an empty array.
 *
 * The array of log events contained in a `LiveTailSessionUpdate` can include
 * as many as 500 log events. If the number of log events matching the request exceeds 500
 * per second, the log events are sampled down to 500 log events to be included in each
 * `LiveTailSessionUpdate` object.
 *
 * If your client consumes the log events slower than the server produces them, CloudWatch Logs buffers up to 10 `LiveTailSessionUpdate` events or 5000 log
 * events, after which it starts dropping the oldest events.
 *
 * - A SessionStreamingException object is returned if an unknown error occurs on the
 * server side.
 *
 * - A SessionTimeoutException object is returned when the session times out, after it
 * has been kept open for three hours.
 *
 * The `StartLiveTail` API routes requests using SDK host prefix injection. SDK versions released before April 1, 2026 route to
 * `streaming-logs.*Region*.amazonaws.com`, which does not support VPC endpoints. SDK versions released on or after April 1, 2026 route to
 * `stream-logs.*Region*.amazonaws.com`, which supports VPC endpoints. To set up a VPC endpoint for this API, see Creating a VPC endpoint for CloudWatch Logs
 * .
 *
 * You can end a session before it times out by closing the session stream or by closing
 * the client that is receiving the stream. The session also ends if the established connection
 * between the client and the server breaks.
 *
 * For examples of using an SDK to start a Live Tail session, see Start
 * a Live Tail session using an Amazon Web Services SDK.
 */
export const startLiveTail: API.OperationMethod<
  StartLiveTailRequest,
  StartLiveTailResponse,
  StartLiveTailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartLiveTailRequest,
  output: StartLiveTailResponse,
  errors: [
    AccessDeniedException,
    InvalidOperationException,
    InvalidParameterException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartLiveTail",
  endpointHostPrefix: "stream-",
}));

export type StartQueryError =
  | InvalidParameterException
  | LimitExceededException
  | MalformedQueryException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Starts a query of one or more log groups or data sources using CloudWatch Logs
 * Insights. You specify the log groups or data sources and time range to query and the query
 * string to use. You can query up to 10 data sources in a single query.
 *
 * For more information, see CloudWatch Logs Insights Query
 * Syntax.
 *
 * After you run a query using `StartQuery`, the query results are stored by
 * CloudWatch Logs. You can use GetQueryResults to retrieve the results of a query, using the `queryId`
 * that `StartQuery` returns.
 *
 * Interactive queries started with `StartQuery` share concurrency limits with
 * automated scheduled query executions. Both types of queries count toward the same regional
 * concurrent query quota, so high scheduled query activity may affect the availability of
 * concurrent slots for interactive queries.
 *
 * To specify the log groups to query, a `StartQuery` operation must include one
 * of the following:
 *
 * - Either exactly one of the following parameters: `logGroupName`,
 * `logGroupNames`, or `logGroupIdentifiers`
 *
 * - Or the `queryString` must include a `SOURCE` command to select
 * log groups for the query. The `SOURCE` command can select log groups based on
 * log group name prefix, account ID, and log class, or select data sources using
 * dataSource syntax in LogsQL, PPL, and SQL. In LogsQL, the `SOURCE` command
 * also supports filtering by log group tags.
 *
 * For more information about the `SOURCE` command, see SOURCE.
 *
 * If you have associated a KMS key with the query results in this
 * account, then StartQuery uses
 * that key to encrypt the results when it stores them. If no key is associated with query
 * results, the query results are encrypted with the default CloudWatch Logs encryption
 * method.
 *
 * Queries time out after 60 minutes of runtime. If your queries are timing out, reduce the
 * time range being searched or partition your query into a number of queries.
 *
 * If you are using CloudWatch cross-account observability, you can use this operation
 * in a monitoring account to start a query in a linked source account. For more information, see
 * CloudWatch cross-account observability. For a cross-account `StartQuery`
 * operation, the query definition must be defined in the monitoring account.
 *
 * You can have up to 100 concurrent CloudWatch Logs insights queries, including queries
 * that have been added to dashboards.
 */
export const startQuery: API.OperationMethod<
  StartQueryRequest,
  StartQueryResponse,
  StartQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartQueryRequest,
  output: StartQueryResponse,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    MalformedQueryException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartQuery",
}));

export type StopQueryError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Stops a CloudWatch Logs Insights query that is in progress. If the query has already
 * ended, the operation returns an error indicating that the specified query is not
 * running.
 *
 * This operation can be used to cancel both interactive queries and individual scheduled
 * query executions. When used with scheduled queries, `StopQuery` cancels only the
 * specific execution identified by the query ID, not the scheduled query configuration
 * itself.
 */
export const stopQuery: API.OperationMethod<
  StopQueryRequest,
  StopQueryResponse,
  StopQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopQueryRequest,
  output: StopQueryResponse,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopQuery",
}));

export type TagLogGroupError = InvalidParameterException | ResourceNotFoundException | CommonErrors;
/**
 * The TagLogGroup operation is on the path to deprecation. We recommend that you use
 * TagResource
 * instead.
 *
 * Adds or updates the specified tags for the specified log group.
 *
 * To list the tags for a log group, use ListTagsForResource. To remove tags, use UntagResource.
 *
 * For more information about tags, see Tag Log Groups in Amazon CloudWatch Logs in the Amazon CloudWatch Logs
 * User Guide.
 *
 * CloudWatch Logs doesn't support IAM policies that prevent users from assigning specified
 * tags to log groups using the aws:Resource/*key-name*
 * or
 * `aws:TagKeys` condition keys. For more information about using tags to control
 * access, see Controlling access to Amazon Web Services resources using tags.
 */
export const tagLogGroup: API.OperationMethod<
  TagLogGroupRequest,
  TagLogGroupResponse,
  TagLogGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagLogGroupRequest,
  output: TagLogGroupResponse,
  errors: [InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagLogGroup",
}));

export type TagResourceError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | TooManyTagsException
  | CommonErrors;
/**
 * Assigns one or more tags (key-value pairs) to the specified CloudWatch Logs resource.
 * Currently, the only CloudWatch Logs resources that can be tagged are log groups and
 * destinations.
 *
 * Tags can help you organize and categorize your resources. You can also use them to scope
 * user permissions by granting a user permission to access or change only resources with certain
 * tag values.
 *
 * Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as
 * strings of characters.
 *
 * You can use the `TagResource` action with a resource that already has tags. If
 * you specify a new tag key for the alarm, this tag is appended to the list of tags associated
 * with the alarm. If you specify a tag key that is already associated with the alarm, the new
 * tag value that you specify replaces the previous value for that tag.
 *
 * You can associate as many as 50 tags with a CloudWatch Logs resource.
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
    InvalidParameterException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type TestMetricFilterError =
  | InvalidParameterException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Tests the filter pattern of a metric filter against a sample of log event messages. You
 * can use this operation to validate the correctness of a metric filter pattern.
 */
export const testMetricFilter: API.OperationMethod<
  TestMetricFilterRequest,
  TestMetricFilterResponse,
  TestMetricFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestMetricFilterRequest,
  output: TestMetricFilterResponse,
  errors: [InvalidParameterException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TestMetricFilter",
}));

export type TestTransformerError =
  | InvalidOperationException
  | InvalidParameterException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Use this operation to test a log transformer. You enter the transformer configuration and
 * a set of log events to test with. The operation responds with an array that includes the
 * original log events and the transformed versions.
 */
export const testTransformer: API.OperationMethod<
  TestTransformerRequest,
  TestTransformerResponse,
  TestTransformerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestTransformerRequest,
  output: TestTransformerResponse,
  errors: [InvalidOperationException, InvalidParameterException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TestTransformer",
}));

export type UntagLogGroupError = ResourceNotFoundException | CommonErrors;
/**
 * The UntagLogGroup operation is on the path to deprecation. We recommend that you use
 * UntagResource instead.
 *
 * Removes the specified tags from the specified log group.
 *
 * To list the tags for a log group, use ListTagsForResource. To add tags, use TagResource.
 *
 * When using IAM policies to control tag management for CloudWatch Logs log groups, the
 * condition keys `aws:Resource/key-name` and `aws:TagKeys` cannot be used
 * to restrict which tags users can assign.
 */
export const untagLogGroup: API.OperationMethod<
  UntagLogGroupRequest,
  UntagLogGroupResponse,
  UntagLogGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagLogGroupRequest,
  output: UntagLogGroupResponse,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagLogGroup",
}));

export type UntagResourceError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Removes one or more tags from the specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAnomalyError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Use this operation to *suppress* anomaly detection for a specified
 * anomaly or pattern. If you suppress an anomaly, CloudWatch Logs won't report new
 * occurrences of that anomaly and won't update that anomaly with new data. If you suppress a
 * pattern, CloudWatch Logs won't report any anomalies related to that pattern.
 *
 * You must specify either `anomalyId` or `patternId`, but you can't
 * specify both parameters in the same operation.
 *
 * If you have previously used this operation to suppress detection of a pattern or anomaly,
 * you can use it again to cause CloudWatch Logs to end the suppression. To do this, use this
 * operation and specify the anomaly or pattern to stop suppressing, and omit the
 * `suppressionType` and `suppressionPeriod` parameters.
 */
export const updateAnomaly: API.OperationMethod<
  UpdateAnomalyRequest,
  UpdateAnomalyResponse,
  UpdateAnomalyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAnomalyRequest,
  output: UpdateAnomalyResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAnomaly",
}));

export type UpdateDeliveryConfigurationError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to update the configuration of a delivery to change
 * either the S3 path pattern or the format of the delivered logs. You can't use this operation
 * to change the source or destination of the delivery.
 */
export const updateDeliveryConfiguration: API.OperationMethod<
  UpdateDeliveryConfigurationRequest,
  UpdateDeliveryConfigurationResponse,
  UpdateDeliveryConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDeliveryConfigurationRequest,
  output: UpdateDeliveryConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDeliveryConfiguration",
}));

export type UpdateLogAnomalyDetectorError =
  | InvalidParameterException
  | OperationAbortedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Updates an existing log anomaly detector.
 */
export const updateLogAnomalyDetector: API.OperationMethod<
  UpdateLogAnomalyDetectorRequest,
  UpdateLogAnomalyDetectorResponse,
  UpdateLogAnomalyDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLogAnomalyDetectorRequest,
  output: UpdateLogAnomalyDetectorResponse,
  errors: [
    InvalidParameterException,
    OperationAbortedException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLogAnomalyDetector",
}));

export type UpdateLookupTableError =
  | AccessDeniedException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing lookup table by replacing all of its content with new CSV data or
 * CloudWatch Logs query results. After the update completes, queries that use this table
 * use the new data.
 *
 * This is a full replacement operation. All existing content is replaced. You must specify
 * either `tableBody` or `queryId`, but not both.
 */
export const updateLookupTable: API.OperationMethod<
  UpdateLookupTableRequest,
  UpdateLookupTableResponse,
  UpdateLookupTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLookupTableRequest,
  output: UpdateLookupTableResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLookupTable",
}));

export type UpdateScheduledQueryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing scheduled query with new configuration. This operation uses PUT
 * semantics, allowing modification of query parameters, schedule, and destinations.
 */
export const updateScheduledQuery: API.OperationMethod<
  UpdateScheduledQueryRequest,
  UpdateScheduledQueryResponse,
  UpdateScheduledQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateScheduledQueryRequest,
  output: UpdateScheduledQueryResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateScheduledQuery",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.optional(S.String),
          kmsKeyId: S.String,
          resourceIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AssociateKmsKeyRequest" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AssociateKmsKeyResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ name: S.String, type: S.optional(S.String) })).annotate({
        identifier: "DataSource",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ integrationArn: S.String, dataSource: DataSource }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateSourceToS3TableIntegrationRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ identifier: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "AssociateSourceToS3TableIntegrationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ taskId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CancelExportTaskRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ importId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CancelImportTaskRequest" });
    case 7:
      return S.suspend(() => S.Struct({ bytesImported: S.optional(S.Number) })).annotate({
        identifier: "ImportStatistics",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          importId: S.optional(S.String),
          importStatistics: S.optional(ImportStatistics),
          importStatus: S.optional(ImportStatus),
          creationTime: S.optional(S.Number),
          lastUpdatedTime: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({ identifier: "CancelImportTaskResponse" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          suffixPath: S.optional(S.String),
          enableHiveCompatiblePath: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "S3DeliveryConfiguration" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          deliverySourceName: S.String,
          deliveryDestinationArn: S.String,
          recordFields: S.optional(RecordFields),
          fieldDelimiter: S.optional(S.String),
          s3DeliveryConfiguration: S.optional(S3DeliveryConfiguration),
          tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDeliveryRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          deliverySourceName: S.optional(S.String),
          deliveryDestinationArn: S.optional(S.String),
          deliveryDestinationType: S.optional(DeliveryDestinationType),
          recordFields: S.optional(RecordFields),
          fieldDelimiter: S.optional(S.String),
          s3DeliveryConfiguration: S.optional(S3DeliveryConfiguration),
          tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "Delivery" });
    case 6:
      return S.suspend(() => S.Struct({ delivery: S.optional(Delivery) }).pipe(ns)).annotate({
        identifier: "CreateDeliveryResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          taskName: S.optional(S.String),
          logGroupName: S.String,
          logStreamNamePrefix: S.optional(S.String),
          from: S.Number,
          to: S.Number,
          destination: S.String,
          destinationPrefix: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateExportTaskRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ taskId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateExportTaskResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ startEventTime: S.optional(S.Number), endEventTime: S.optional(S.Number) }),
      ).annotate({ identifier: "ImportFilter" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          importSourceArn: S.String,
          importRoleArn: S.String,
          importFilter: S.optional(ImportFilter),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateImportTaskRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          importId: S.optional(S.String),
          importDestinationArn: S.optional(S.String),
          creationTime: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({ identifier: "CreateImportTaskResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          logGroupArnList: LogGroupArnList,
          detectorName: S.optional(S.String),
          evaluationFrequency: S.optional(EvaluationFrequency),
          filterPattern: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          anomalyVisibilityTime: S.optional(S.Number),
          tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLogAnomalyDetectorRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ anomalyDetectorArn: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "CreateLogAnomalyDetectorResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.String,
          kmsKeyId: S.optional(S.String),
          tags: S.optional(Tags),
          logGroupClass: S.optional(LogGroupClass),
          deletionProtectionEnabled: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateLogGroupRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateLogGroupResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ logGroupName: S.String, logStreamName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateLogStreamRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          lookupTableName: S.String,
          description: S.optional(S.String),
          tableBody: S.optional(S.String),
          queryId: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateLookupTableRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ lookupTableArn: S.optional(S.String), createdAt: S.optional(S.Number) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "CreateLookupTableResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          destinationIdentifier: S.String,
          roleArn: S.String,
          ownerAccountId: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3Configuration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          tableName: S.String,
          roleArn: S.String,
          description: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "LookupTableConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          s3Configuration: S.optional(S3Configuration),
          lookupTableConfiguration: S.optional(LookupTableConfiguration),
        }),
      ).annotate({ identifier: "DestinationConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          queryLanguage: QueryLanguage,
          queryString: S.String,
          logGroupIdentifiers: S.optional(ScheduledQueryLogGroupIdentifiers),
          scheduleExpression: S.String,
          timezone: S.optional(S.String),
          startTimeOffset: S.optional(S.Number),
          endTimeOffset: S.optional(S.Number),
          destinationConfiguration: S.optional(DestinationConfiguration),
          scheduleStartTime: S.optional(S.Number),
          scheduleEndTime: S.optional(S.Number),
          executionRoleArn: S.String,
          state: S.optional(ScheduledQueryState),
          tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateScheduledQueryRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          scheduledQueryArn: S.optional(S.String),
          state: S.optional(ScheduledQueryState),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateScheduledQueryResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ policyName: S.String, policyType: PolicyType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAccountPolicyRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAccountPolicyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ logGroupIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDataProtectionPolicyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteDeliveryRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDeliveryDestinationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ deliveryDestinationName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDeliveryDestinationPolicyRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDeliverySourceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ destinationName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteDestinationRequest" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ logGroupIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteIndexPolicyRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ integrationName: S.String, force: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteIntegrationRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ anomalyDetectorArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteLogAnomalyDetectorRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ logGroupName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteLogGroupRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ logGroupName: S.String, logStreamName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteLogStreamRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ lookupTableArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteLookupTableRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ logGroupName: S.String, filterName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteMetricFilterRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ queryDefinitionId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteQueryDefinitionRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ success: S.optional(S.Boolean) }).pipe(ns)).annotate({
        identifier: "DeleteQueryDefinitionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          policyName: S.optional(S.String),
          resourceArn: S.optional(S.String),
          expectedRevisionId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ logGroupName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRetentionPolicyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ identifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteScheduledQueryRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ logGroupName: S.String, filterName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSubscriptionFilterRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ logGroupIdentifier: S.String, vpcEndpointId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSyslogConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ logGroupIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTransformerRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          policyType: PolicyType,
          policyName: S.optional(S.String),
          accountIdentifiers: S.optional(AccountIds),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeAccountPoliciesRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          policyName: S.optional(S.String),
          policyDocument: S.optional(S.String),
          lastUpdatedTime: S.optional(S.Number),
          policyType: S.optional(PolicyType),
          scope: S.optional(Scope),
          selectionCriteria: S.optional(S.String),
          accountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccountPolicy" });
    case 1:
      return S.Array(AccountPolicy);
    case 2:
      return S.suspend(() =>
        S.Struct({
          accountPolicies: S.optional(AccountPolicies),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeAccountPoliciesResponse",
      });
    case 3:
      return S.Array(DeliveryDestinationType);
    case 4:
      return S.suspend(() =>
        S.Struct({
          service: S.optional(S.String),
          logTypes: S.optional(LogTypes),
          resourceTypes: S.optional(ResourceTypes),
          deliveryDestinationTypes: S.optional(DeliveryDestinationTypes),
          nextToken: S.optional(S.String),
          limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeConfigurationTemplatesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          recordFields: S.optional(RecordFields),
          fieldDelimiter: S.optional(S.String),
          s3DeliveryConfiguration: S.optional(S3DeliveryConfiguration),
        }),
      ).annotate({
        identifier: "ConfigurationTemplateDeliveryConfigValues",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), mandatory: S.optional(S.Boolean) }),
      ).annotate({ identifier: "RecordField" });
    case 7:
      return S.Array(RecordField);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          keyName: S.String,
          valueType: DeliverySourceConfigurationSchemaValueType,
          defaultValue: S.String,
          supportedValues: S.optional(DeliverySourceConfigurationSupportedValues),
          minValue: S.optional(S.Number),
          maxValue: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DeliverySourceConfigurationSchema",
      });
    case 1:
      return S.Array(DeliverySourceConfigurationSchema);
    case 2:
      return S.suspend(() =>
        S.Struct({ datasourceName: S.optional(S.String), datasourceType: S.optional(S.String) }),
      ).annotate({ identifier: "S3TablesIntegration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          service: S.optional(S.String),
          logType: S.optional(S.String),
          resourceType: S.optional(S.String),
          deliveryDestinationType: S.optional(DeliveryDestinationType),
          defaultDeliveryConfigValues: S.optional(ConfigurationTemplateDeliveryConfigValues),
          allowedFields: S.optional(AllowedFields),
          allowedOutputFormats: S.optional(OutputFormats),
          allowedActionForAllowVendedLogsDeliveryForResource: S.optional(S.String),
          allowedFieldDelimiters: S.optional(AllowedFieldDelimiters),
          allowedSuffixPathFields: S.optional(RecordFields),
          deliverySourceConfiguration: S.optional(DeliverySourceConfigurationSchemas),
          s3TablesIntegration: S.optional(S3TablesIntegration),
        }),
      ).annotate({ identifier: "ConfigurationTemplate" });
    case 4:
      return S.Array(ConfigurationTemplate);
    case 5:
      return S.suspend(() =>
        S.Struct({
          configurationTemplates: S.optional(ConfigurationTemplates),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeConfigurationTemplatesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), limit: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDeliveriesRequest",
      });
    case 7:
      return S.Array(Delivery);
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ deliveries: S.optional(Deliveries), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeDeliveriesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), limit: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDeliveryDestinationsRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ destinationResourceArn: S.String })).annotate({
        identifier: "DeliveryDestinationConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          arn: S.optional(S.String),
          deliveryDestinationType: S.optional(DeliveryDestinationType),
          outputFormat: S.optional(OutputFormat),
          deliveryDestinationConfiguration: S.optional(DeliveryDestinationConfiguration),
          roleArn: S.optional(S.String),
          tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "DeliveryDestination" });
    case 4:
      return S.Array(DeliveryDestination);
    case 5:
      return S.suspend(() =>
        S.Struct({
          deliveryDestinations: S.optional(DeliveryDestinations),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDeliveryDestinationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), limit: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDeliverySourcesRequest",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          arn: S.optional(S.String),
          resourceArns: S.optional(ResourceArns),
          service: S.optional(S.String),
          logType: S.optional(S.String),
          tags: S.optional(Tags),
          deliverySourceConfiguration: S.optional(DeliverySourceConfiguration),
          status: S.optional(DeliverySourceStatus),
          statusReason: S.optional(DeliverySourceStatusReason),
        }),
      ).annotate({ identifier: "DeliverySource" });
    case 1:
      return S.Array(DeliverySource);
    case 2:
      return S.suspend(() =>
        S.Struct({
          deliverySources: S.optional(DeliverySources),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDeliverySourcesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DestinationNamePrefix: S.optional(S.String),
          nextToken: S.optional(S.String),
          limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDestinationsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          destinationName: S.optional(S.String),
          targetArn: S.optional(S.String),
          roleArn: S.optional(S.String),
          accessPolicy: S.optional(S.String),
          arn: S.optional(S.String),
          creationTime: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Destination" });
    case 5:
      return S.Array(Destination);
    case 6:
      return S.suspend(() =>
        S.Struct({ destinations: S.optional(Destinations), nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "DescribeDestinationsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          statusCode: S.optional(ExportTaskStatusCode),
          nextToken: S.optional(S.String),
          limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeExportTasksRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ code: S.optional(ExportTaskStatusCode), message: S.optional(S.String) }),
      ).annotate({ identifier: "ExportTaskStatus" });
    case 1:
      return S.suspend(() =>
        S.Struct({ creationTime: S.optional(S.Number), completionTime: S.optional(S.Number) }),
      ).annotate({ identifier: "ExportTaskExecutionInfo" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          taskName: S.optional(S.String),
          logGroupName: S.optional(S.String),
          from: S.optional(S.Number),
          to: S.optional(S.Number),
          destination: S.optional(S.String),
          destinationPrefix: S.optional(S.String),
          status: S.optional(ExportTaskStatus),
          executionInfo: S.optional(ExportTaskExecutionInfo),
        }),
      ).annotate({ identifier: "ExportTask" });
    case 3:
      return S.Array(ExportTask);
    case 4:
      return S.suspend(() =>
        S.Struct({ exportTasks: S.optional(ExportTasks), nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "DescribeExportTasksResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          logGroupIdentifiers: DescribeFieldIndexesLogGroupIdentifiers,
          indexCategories: S.optional(IndexCategories),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeFieldIndexesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          logGroupIdentifier: S.optional(S.String),
          fieldIndexName: S.optional(S.String),
          lastScanTime: S.optional(S.Number),
          firstEventTime: S.optional(S.Number),
          lastEventTime: S.optional(S.Number),
          type: S.optional(IndexType),
          indexCategory: S.optional(IndexCategory),
        }),
      ).annotate({ identifier: "FieldIndex" });
    case 7:
      return S.Array(FieldIndex);
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ fieldIndexes: S.optional(FieldIndexes), nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "DescribeFieldIndexesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          importId: S.String,
          batchImportStatus: S.optional(ImportStatusList),
          limit: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeImportTaskBatchesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ batchId: S.String, status: ImportStatus, errorMessage: S.optional(S.String) }),
      ).annotate({ identifier: "ImportBatch" });
    case 3:
      return S.Array(ImportBatch);
    case 4:
      return S.suspend(() =>
        S.Struct({
          importSourceArn: S.optional(S.String),
          importId: S.optional(S.String),
          importBatches: S.optional(ImportBatchList),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeImportTaskBatchesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          importId: S.optional(S.String),
          importStatus: S.optional(ImportStatus),
          importSourceArn: S.optional(S.String),
          limit: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeImportTasksRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          importId: S.optional(S.String),
          importSourceArn: S.optional(S.String),
          importStatus: S.optional(ImportStatus),
          importDestinationArn: S.optional(S.String),
          importStatistics: S.optional(ImportStatistics),
          importFilter: S.optional(ImportFilter),
          creationTime: S.optional(S.Number),
          lastUpdatedTime: S.optional(S.Number),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "Import" });
    case 7:
      return S.Array(Import);
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ imports: S.optional(ImportList), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeImportTasksResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          logGroupIdentifiers: DescribeIndexPoliciesLogGroupIdentifiers,
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeIndexPoliciesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          logGroupIdentifier: S.optional(S.String),
          lastUpdateTime: S.optional(S.Number),
          policyDocument: S.optional(S.String),
          policyName: S.optional(S.String),
          source: S.optional(IndexSource),
        }),
      ).annotate({ identifier: "IndexPolicy" });
    case 3:
      return S.Array(IndexPolicy);
    case 4:
      return S.suspend(() =>
        S.Struct({
          indexPolicies: S.optional(IndexPolicies),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeIndexPoliciesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          accountIdentifiers: S.optional(AccountIds),
          logGroupNamePrefix: S.optional(S.String),
          logGroupNamePattern: S.optional(S.String),
          nextToken: S.optional(S.String),
          limit: S.optional(S.Number),
          includeLinkedAccounts: S.optional(S.Boolean),
          logGroupClass: S.optional(LogGroupClass),
          logGroupIdentifiers: S.optional(DescribeLogGroupsLogGroupIdentifiers),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeLogGroupsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.optional(S.String),
          creationTime: S.optional(S.Number),
          retentionInDays: S.optional(S.Number),
          metricFilterCount: S.optional(S.Number),
          arn: S.optional(S.String),
          storedBytes: S.optional(S.Number),
          kmsKeyId: S.optional(S.String),
          dataProtectionStatus: S.optional(DataProtectionStatus),
          inheritedProperties: S.optional(InheritedProperties),
          logGroupClass: S.optional(LogGroupClass),
          logGroupArn: S.optional(S.String),
          deletionProtectionEnabled: S.optional(S.Boolean),
          bearerTokenAuthenticationEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "LogGroup" });
    case 7:
      return S.Array(LogGroup);
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ logGroups: S.optional(LogGroups), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeLogGroupsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.optional(S.String),
          logGroupIdentifier: S.optional(S.String),
          logStreamNamePrefix: S.optional(S.String),
          orderBy: S.optional(OrderBy),
          descending: S.optional(S.Boolean),
          nextToken: S.optional(S.String),
          limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeLogStreamsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          logStreamName: S.optional(S.String),
          creationTime: S.optional(S.Number),
          firstEventTimestamp: S.optional(S.Number),
          lastEventTimestamp: S.optional(S.Number),
          lastIngestionTime: S.optional(S.Number),
          uploadSequenceToken: S.optional(S.String),
          arn: S.optional(S.String),
          storedBytes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LogStream" });
    case 3:
      return S.Array(LogStream);
    case 4:
      return S.suspend(() =>
        S.Struct({ logStreams: S.optional(LogStreams), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeLogStreamsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          lookupTableNamePrefix: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeLookupTablesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          lookupTableArn: S.optional(S.String),
          lookupTableName: S.optional(S.String),
          description: S.optional(S.String),
          tableFields: S.optional(TableFields),
          recordsCount: S.optional(S.Number),
          sizeBytes: S.optional(S.Number),
          lastUpdatedTime: S.optional(S.Number),
          kmsKeyId: S.optional(S.String),
        }),
      ).annotate({ identifier: "LookupTable" });
    case 7:
      return S.Array(LookupTable);
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ lookupTables: S.optional(LookupTables), nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "DescribeLookupTablesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.optional(S.String),
          filterNamePrefix: S.optional(S.String),
          nextToken: S.optional(S.String),
          limit: S.optional(S.Number),
          metricName: S.optional(S.String),
          metricNamespace: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeMetricFiltersRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          metricName: S.String,
          metricNamespace: S.String,
          metricValue: S.String,
          defaultValue: S.optional(S.Number),
          dimensions: S.optional(Dimensions),
          unit: S.optional(StandardUnit),
        }),
      ).annotate({ identifier: "MetricTransformation" });
    case 3:
      return S.Array(MetricTransformation);
    case 4:
      return S.suspend(() =>
        S.Struct({
          filterName: S.optional(S.String),
          filterPattern: S.optional(S.String),
          metricTransformations: S.optional(MetricTransformations),
          creationTime: S.optional(S.Number),
          logGroupName: S.optional(S.String),
          applyOnTransformedLogs: S.optional(S.Boolean),
          fieldSelectionCriteria: S.optional(S.String),
          emitSystemFieldDimensions: S.optional(EmitSystemFields),
        }),
      ).annotate({ identifier: "MetricFilter" });
    case 5:
      return S.Array(MetricFilter);
    case 6:
      return S.suspend(() =>
        S.Struct({
          metricFilters: S.optional(MetricFilters),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeMetricFiltersResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.optional(S.String),
          status: S.optional(QueryStatus),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          queryLanguage: S.optional(QueryLanguage),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeQueriesRequest" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          queryLanguage: S.optional(QueryLanguage),
          queryId: S.optional(S.String),
          queryString: S.optional(S.String),
          status: S.optional(QueryStatus),
          createTime: S.optional(S.Number),
          logGroupName: S.optional(S.String),
          queryDuration: S.optional(S.Number),
          bytesScanned: S.optional(S.Number),
          userIdentity: S.optional(S.String),
        }),
      ).annotate({ identifier: "QueryInfo" });
    case 1:
      return S.Array(QueryInfo);
    case 2:
      return S.suspend(() =>
        S.Struct({ queries: S.optional(QueryInfoList), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DescribeQueriesResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          queryLanguage: S.optional(QueryLanguage),
          queryDefinitionNamePrefix: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeQueryDefinitionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          defaultValue: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "QueryParameter" });
    case 5:
      return S.Array(QueryParameter);
    case 6:
      return S.suspend(() =>
        S.Struct({
          queryLanguage: S.optional(QueryLanguage),
          queryDefinitionId: S.optional(S.String),
          name: S.optional(S.String),
          queryString: S.optional(S.String),
          lastModified: S.optional(S.Number),
          logGroupNames: S.optional(LogGroupNames),
          parameters: S.optional(QueryParameterList),
        }),
      ).annotate({ identifier: "QueryDefinition" });
    case 7:
      return S.Array(QueryDefinition);
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          queryDefinitions: S.optional(QueryDefinitionList),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeQueryDefinitionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          limit: S.optional(S.Number),
          resourceArn: S.optional(S.String),
          policyScope: S.optional(PolicyScope),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeResourcePoliciesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyName: S.optional(S.String),
          policyDocument: S.optional(S.String),
          lastUpdatedTime: S.optional(S.Number),
          policyScope: S.optional(PolicyScope),
          resourceArn: S.optional(S.String),
          revisionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourcePolicy" });
    case 3:
      return S.Array(ResourcePolicy);
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourcePolicies: S.optional(ResourcePolicies),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeResourcePoliciesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.String,
          filterNamePrefix: S.optional(S.String),
          nextToken: S.optional(S.String),
          limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeSubscriptionFiltersRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          filterName: S.optional(S.String),
          logGroupName: S.optional(S.String),
          filterPattern: S.optional(S.String),
          destinationArn: S.optional(S.String),
          roleArn: S.optional(S.String),
          distribution: S.optional(Distribution),
          applyOnTransformedLogs: S.optional(S.Boolean),
          creationTime: S.optional(S.Number),
          fieldSelectionCriteria: S.optional(S.String),
          emitSystemFields: S.optional(EmitSystemFields),
        }),
      ).annotate({ identifier: "SubscriptionFilter" });
    case 7:
      return S.Array(SubscriptionFilter);
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          subscriptionFilters: S.optional(SubscriptionFilters),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeSubscriptionFiltersResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.optional(S.String),
          resourceIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DisassociateKmsKeyRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ identifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateSourceFromS3TableIntegrationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.optional(S.String),
          logGroupIdentifier: S.optional(S.String),
          logStreamNames: S.optional(InputLogStreamNames),
          logStreamNamePrefix: S.optional(S.String),
          startTime: S.optional(S.Number),
          endTime: S.optional(S.Number),
          filterPattern: S.optional(S.String),
          nextToken: S.optional(S.String),
          limit: S.optional(S.Number),
          startFromHead: S.optional(S.Boolean),
          interleaved: S.optional(S.Boolean),
          unmask: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "FilterLogEventsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          logStreamName: S.optional(S.String),
          timestamp: S.optional(S.Number),
          message: S.optional(S.String),
          ingestionTime: S.optional(S.Number),
          eventId: S.optional(S.String),
        }),
      ).annotate({ identifier: "FilteredLogEvent" });
    case 5:
      return S.Array(FilteredLogEvent);
    case 6:
      return S.suspend(() =>
        S.Struct({
          logStreamName: S.optional(S.String),
          searchedCompletely: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "SearchedLogStream" });
    case 7:
      return S.Array(SearchedLogStream);
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          events: S.optional(FilteredLogEvents),
          searchedLogStreams: S.optional(SearchedLogStreams),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "FilterLogEventsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ logGroupIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetDataProtectionPolicyRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          logGroupIdentifier: S.optional(S.String),
          policyDocument: S.optional(S.String),
          lastUpdatedTime: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({
        identifier: "GetDataProtectionPolicyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetDeliveryRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetDeliveryDestinationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ deliveryDestination: S.optional(DeliveryDestination) }).pipe(ns),
      ).annotate({
        identifier: "GetDeliveryDestinationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ deliveryDestinationName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetDeliveryDestinationPolicyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ deliveryDestinationPolicy: S.optional(S.String) }),
      ).annotate({ identifier: "Policy" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ policy: S.optional(Policy) }).pipe(ns)).annotate({
        identifier: "GetDeliveryDestinationPolicyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetDeliverySourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ deliverySource: S.optional(DeliverySource) }).pipe(ns),
      ).annotate({
        identifier: "GetDeliverySourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ integrationName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetIntegrationRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(OpenSearchResourceStatusType),
          statusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "OpenSearchResourceStatus" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          dataSourceName: S.optional(S.String),
          status: S.optional(OpenSearchResourceStatus),
        }),
      ).annotate({ identifier: "OpenSearchDataSource" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationEndpoint: S.optional(S.String),
          applicationArn: S.optional(S.String),
          applicationId: S.optional(S.String),
          status: S.optional(OpenSearchResourceStatus),
        }),
      ).annotate({ identifier: "OpenSearchApplication" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          collectionEndpoint: S.optional(S.String),
          collectionArn: S.optional(S.String),
          status: S.optional(OpenSearchResourceStatus),
        }),
      ).annotate({ identifier: "OpenSearchCollection" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.optional(S.String),
          status: S.optional(OpenSearchResourceStatus),
        }),
      ).annotate({ identifier: "OpenSearchWorkspace" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          policyName: S.optional(S.String),
          status: S.optional(OpenSearchResourceStatus),
        }),
      ).annotate({
        identifier: "OpenSearchEncryptionPolicy",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyName: S.optional(S.String),
          status: S.optional(OpenSearchResourceStatus),
        }),
      ).annotate({ identifier: "OpenSearchNetworkPolicy" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          dataSource: S.optional(OpenSearchDataSource),
          application: S.optional(OpenSearchApplication),
          collection: S.optional(OpenSearchCollection),
          workspace: S.optional(OpenSearchWorkspace),
          encryptionPolicy: S.optional(OpenSearchEncryptionPolicy),
          networkPolicy: S.optional(OpenSearchNetworkPolicy),
          accessPolicy: S.optional(OpenSearchDataAccessPolicy),
          lifecyclePolicy: S.optional(OpenSearchLifecyclePolicy),
        }),
      ).annotate({
        identifier: "OpenSearchIntegrationDetails",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ openSearchIntegrationDetails: OpenSearchIntegrationDetails }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          integrationName: S.optional(S.String),
          integrationType: S.optional(IntegrationType),
          integrationStatus: S.optional(IntegrationStatus),
          integrationDetails: S.optional(IntegrationDetails),
        }).pipe(ns),
      ).annotate({ identifier: "GetIntegrationResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ anomalyDetectorArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetLogAnomalyDetectorRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          detectorName: S.optional(S.String),
          logGroupArnList: S.optional(LogGroupArnList),
          evaluationFrequency: S.optional(EvaluationFrequency),
          filterPattern: S.optional(S.String),
          anomalyDetectorStatus: S.optional(AnomalyDetectorStatus),
          kmsKeyId: S.optional(S.String),
          creationTimeStamp: S.optional(S.Number),
          lastModifiedTimeStamp: S.optional(S.Number),
          anomalyVisibilityTime: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({
        identifier: "GetLogAnomalyDetectorResponse",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.optional(S.String),
          logGroupIdentifier: S.optional(S.String),
          logStreamName: S.String,
          startTime: S.optional(S.Number),
          endTime: S.optional(S.Number),
          nextToken: S.optional(S.String),
          limit: S.optional(S.Number),
          startFromHead: S.optional(S.Boolean),
          unmask: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetLogEventsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          timestamp: S.optional(S.Number),
          message: S.optional(S.String),
          ingestionTime: S.optional(S.Number),
        }),
      ).annotate({ identifier: "OutputLogEvent" });
    case 2:
      return S.Array(OutputLogEvent);
    case 3:
      return S.suspend(() =>
        S.Struct({
          events: S.optional(OutputLogEvents),
          nextForwardToken: S.optional(S.String),
          nextBackwardToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetLogEventsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ dataSourceName: S.String, dataSourceType: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetLogFieldsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          element: S.optional(
            S.suspend((): S.Schema<LogFieldType> => LogFieldType).annotate({
              identifier: "LogFieldType",
            }),
          ),
          fields: S.optional(
            S.suspend(() => LogFieldsList).annotate({ identifier: "LogFieldsList" }),
          ),
        }),
      ).annotate({ identifier: "LogFieldType" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          logFieldName: S.optional(S.String),
          logFieldType: S.optional(
            S.suspend((): S.Schema<LogFieldType> => LogFieldType).annotate({
              identifier: "LogFieldType",
            }),
          ),
        }),
      ).annotate({ identifier: "LogFieldsListItem" });
    case 7:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<LogFieldsListItem> => LogFieldsListItem).annotate({
          identifier: "LogFieldsListItem",
        }),
      );
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ logFields: S.optional(LogFieldsList) }).pipe(ns)).annotate({
        identifier: "GetLogFieldsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.optional(S.String),
          time: S.optional(S.Number),
          logGroupIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetLogGroupFieldsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), percent: S.optional(S.Number) }),
      ).annotate({ identifier: "LogGroupField" });
    case 3:
      return S.Array(LogGroupField);
    case 4:
      return S.suspend(() =>
        S.Struct({ logGroupFields: S.optional(LogGroupFieldList) }).pipe(ns),
      ).annotate({
        identifier: "GetLogGroupFieldsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ unmask: S.optional(S.Boolean), logObjectPointer: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetLogObjectRequest" });
    case 6:
      return S.suspend(() => S.Struct({ data: S.optional(T.Blob) })).annotate({
        identifier: "FieldsData",
      });
    case 7:
      return S.suspend(() => S.Struct({ message: S.optional(S.String) })).annotate({
        identifier: "InternalStreamingException",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ fields: FieldsData }),
          /*@__PURE__*/ S.Struct({ InternalStreamingException: InternalStreamingException }),
        ]),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ fieldStream: S.optional(GetLogObjectResponseStream) }).pipe(ns),
      ).annotate({ identifier: "GetLogObjectResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ logRecordPointer: S.String, unmask: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetLogRecordRequest" });
    case 3:
      return S.suspend(() => S.Struct({ logRecord: S.optional(LogRecord) }).pipe(ns)).annotate({
        identifier: "GetLogRecordResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ lookupTableArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetLookupTableRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          lookupTableArn: S.optional(S.String),
          lookupTableName: S.optional(S.String),
          description: S.optional(S.String),
          tableBody: S.optional(S.String),
          sizeBytes: S.optional(S.Number),
          lastUpdatedTime: S.optional(S.Number),
          kmsKeyId: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetLookupTableResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          queryId: S.String,
          nextToken: S.optional(S.String),
          maxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetQueryResultsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ field: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "ResultField" });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ResultField);
    case 1:
      return S.Array(ResultRows);
    case 2:
      return S.suspend(() =>
        S.Struct({
          recordsMatched: S.optional(S.Number),
          recordsScanned: S.optional(S.Number),
          estimatedRecordsSkipped: S.optional(S.Number),
          bytesScanned: S.optional(S.Number),
          estimatedBytesSkipped: S.optional(S.Number),
          logGroupsScanned: S.optional(S.Number),
          resultCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "QueryStatistics" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          queryLanguage: S.optional(QueryLanguage),
          results: S.optional(QueryResults),
          statistics: S.optional(QueryStatistics),
          status: S.optional(QueryStatus),
          encryptionKey: S.optional(S.String),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetQueryResultsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ identifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetScheduledQueryRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          scheduledQueryArn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          queryLanguage: S.optional(QueryLanguage),
          queryString: S.optional(S.String),
          logGroupIdentifiers: S.optional(ScheduledQueryLogGroupIdentifiers),
          scheduleExpression: S.optional(S.String),
          timezone: S.optional(S.String),
          startTimeOffset: S.optional(S.Number),
          endTimeOffset: S.optional(S.Number),
          destinationConfiguration: S.optional(DestinationConfiguration),
          state: S.optional(ScheduledQueryState),
          scheduleType: S.optional(ScheduleType),
          lastTriggeredTime: S.optional(S.Number),
          lastExecutionStatus: S.optional(ExecutionStatus),
          scheduleStartTime: S.optional(S.Number),
          scheduleEndTime: S.optional(S.Number),
          executionRoleArn: S.optional(S.String),
          creationTime: S.optional(S.Number),
          lastUpdatedTime: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({
        identifier: "GetScheduledQueryResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          startTime: S.Number,
          endTime: S.Number,
          executionStatuses: S.optional(ExecutionStatusList),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetScheduledQueryHistoryRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          destinationType: S.optional(ScheduledQueryDestinationType),
          destinationIdentifier: S.optional(S.String),
          status: S.optional(ActionStatus),
          processedIdentifier: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ScheduledQueryDestination",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ScheduledQueryDestination);
    case 1:
      return S.suspend(() =>
        S.Struct({
          queryId: S.optional(S.String),
          executionStatus: S.optional(ExecutionStatus),
          triggeredTimestamp: S.optional(S.Number),
          errorMessage: S.optional(S.String),
          destinations: S.optional(ScheduledQueryDestinationList),
        }),
      ).annotate({ identifier: "TriggerHistoryRecord" });
    case 2:
      return S.Array(TriggerHistoryRecord);
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          scheduledQueryArn: S.optional(S.String),
          triggerHistory: S.optional(TriggerHistoryRecordList),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetScheduledQueryHistoryResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetStorageTierPolicyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          storageTier: S.optional(StorageTier),
          lastUpdatedTime: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({
        identifier: "GetStorageTierPolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ logGroupIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTransformerRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ key: S.String, value: S.String, overwriteIfExists: S.optional(S.Boolean) }),
      ).annotate({ identifier: "AddKeyEntry" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AddKeyEntry);
    case 1:
      return S.suspend(() => S.Struct({ entries: AddKeyEntries })).annotate({
        identifier: "AddKeys",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ source: S.String, target: S.String, overwriteIfExists: S.optional(S.Boolean) }),
      ).annotate({ identifier: "CopyValueEntry" });
    case 3:
      return S.Array(CopyValueEntry);
    case 4:
      return S.suspend(() => S.Struct({ entries: CopyValueEntries })).annotate({
        identifier: "CopyValue",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          quoteCharacter: S.optional(S.String),
          delimiter: S.optional(S.String),
          columns: S.optional(Columns),
          source: S.optional(S.String),
          destination: S.optional(S.String),
        }),
      ).annotate({ identifier: "CSV" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          source: S.String,
          target: S.String,
          targetFormat: S.optional(S.String),
          matchPatterns: MatchPatterns,
          sourceTimezone: S.optional(S.String),
          targetTimezone: S.optional(S.String),
          locale: S.optional(S.String),
        }),
      ).annotate({ identifier: "DateTimeConverter" });
    case 7:
      return S.suspend(() => S.Struct({ withKeys: DeleteWithKeys })).annotate({
        identifier: "DeleteKeys",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ source: S.optional(S.String), match: S.String })).annotate({
        identifier: "Grok",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          source: S.String,
          key: S.String,
          valueKey: S.optional(S.String),
          target: S.optional(S.String),
          flatten: S.optional(S.Boolean),
          flattenedElement: S.optional(FlattenedElement),
        }),
      ).annotate({ identifier: "ListToMap" });
    case 2:
      return S.suspend(() => S.Struct({ source: S.optional(S.String) })).annotate({
        identifier: "ParseCloudfront",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ source: S.optional(S.String), destination: S.optional(S.String) }),
      ).annotate({ identifier: "ParseJSON" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          source: S.optional(S.String),
          destination: S.optional(S.String),
          fieldDelimiter: S.optional(S.String),
          keyValueDelimiter: S.optional(S.String),
          keyPrefix: S.optional(S.String),
          nonMatchValue: S.optional(S.String),
          overwriteIfExists: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ParseKeyValue" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          source: S.optional(S.String),
          eventSource: EventSource,
          ocsfVersion: OCSFVersion,
          mappingVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "ParseToOCSF" });
    case 6:
      return S.suspend(() =>
        S.Struct({ key: S.String, renameTo: S.String, overwriteIfExists: S.optional(S.Boolean) }),
      ).annotate({ identifier: "RenameKeyEntry" });
    case 7:
      return S.Array(RenameKeyEntry);
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ entries: RenameKeyEntries })).annotate({
        identifier: "RenameKeys",
      });
    case 1:
      return S.suspend(() => S.Struct({ source: S.String, delimiter: S.String })).annotate({
        identifier: "SplitStringEntry",
      });
    case 2:
      return S.Array(SplitStringEntry);
    case 3:
      return S.suspend(() => S.Struct({ entries: SplitStringEntries })).annotate({
        identifier: "SplitString",
      });
    case 4:
      return S.suspend(() => S.Struct({ source: S.String, from: S.String, to: S.String })).annotate(
        { identifier: "SubstituteStringEntry" },
      );
    case 5:
      return S.Array(SubstituteStringEntry);
    case 6:
      return S.suspend(() => S.Struct({ entries: SubstituteStringEntries })).annotate({
        identifier: "SubstituteString",
      });
    case 7:
      return S.suspend(() => S.Struct({ key: S.String, type: Type })).annotate({
        identifier: "TypeConverterEntry",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.Array(TypeConverterEntry);
    case 1:
      return S.suspend(() => S.Struct({ entries: TypeConverterEntries })).annotate({
        identifier: "TypeConverter",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          addKeys: S.optional(AddKeys),
          copyValue: S.optional(CopyValue),
          csv: S.optional(CSV),
          dateTimeConverter: S.optional(DateTimeConverter),
          deleteKeys: S.optional(DeleteKeys),
          grok: S.optional(Grok),
          listToMap: S.optional(ListToMap),
          lowerCaseString: S.optional(LowerCaseString),
          moveKeys: S.optional(MoveKeys),
          parseCloudfront: S.optional(ParseCloudfront),
          parseJSON: S.optional(ParseJSON),
          parseKeyValue: S.optional(ParseKeyValue),
          parseRoute53: S.optional(ParseRoute53),
          parseToOCSF: S.optional(ParseToOCSF),
          parsePostgres: S.optional(ParsePostgres),
          parseVPC: S.optional(ParseVPC),
          parseWAF: S.optional(ParseWAF),
          renameKeys: S.optional(RenameKeys),
          splitString: S.optional(SplitString),
          substituteString: S.optional(SubstituteString),
          trimString: S.optional(TrimString),
          typeConverter: S.optional(TypeConverter),
          upperCaseString: S.optional(UpperCaseString),
        }),
      ).annotate({ identifier: "Processor" });
    case 3:
      return S.Array(Processor);
    case 4:
      return S.suspend(() =>
        S.Struct({
          logGroupIdentifier: S.optional(S.String),
          creationTime: S.optional(S.Number),
          lastModifiedTime: S.optional(S.Number),
          transformerConfig: S.optional(Processors),
        }).pipe(ns),
      ).annotate({ identifier: "GetTransformerResponse" });
    case 5:
      return S.Array(DataSourceFilter);
    case 6:
      return S.suspend(() =>
        S.Struct({
          accountIdentifiers: S.optional(AccountIds),
          includeLinkedAccounts: S.optional(S.Boolean),
          logGroupClass: S.optional(LogGroupClass),
          logGroupNamePattern: S.optional(S.String),
          dataSources: S.optional(DataSourceFilters),
          groupBy: ListAggregateLogGroupSummariesGroupBy,
          nextToken: S.optional(S.String),
          limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAggregateLogGroupSummariesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ key: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "GroupingIdentifier" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.Array(GroupingIdentifier);
    case 1:
      return S.suspend(() =>
        S.Struct({
          logGroupCount: S.optional(S.Number),
          groupingIdentifiers: S.optional(GroupingIdentifiers),
        }),
      ).annotate({ identifier: "AggregateLogGroupSummary" });
    case 2:
      return S.Array(AggregateLogGroupSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          aggregateLogGroupSummaries: S.optional(AggregateLogGroupSummaries),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAggregateLogGroupSummariesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          anomalyDetectorArn: S.optional(S.String),
          suppressionState: S.optional(SuppressionState),
          limit: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAnomaliesRequest" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({ timestamp: S.optional(S.Number), message: S.optional(S.String) }),
      ).annotate({ identifier: "LogEvent" });
    case 7:
      return S.Array(LogEvent);
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          dynamicTokenPosition: S.optional(S.Number),
          isDynamic: S.optional(S.Boolean),
          tokenString: S.optional(S.String),
          enumerations: S.optional(Enumerations),
          inferredTokenName: S.optional(S.String),
        }),
      ).annotate({ identifier: "PatternToken" });
    case 2:
      return S.Array(PatternToken);
    case 3:
      return S.suspend(() =>
        S.Struct({
          anomalyId: S.String,
          patternId: S.String,
          anomalyDetectorArn: S.String,
          patternString: S.String,
          patternRegex: S.optional(S.String),
          priority: S.optional(S.String),
          firstSeen: S.Number,
          lastSeen: S.Number,
          description: S.String,
          active: S.Boolean,
          state: State,
          histogram: Histogram,
          logSamples: LogSamples,
          patternTokens: PatternTokens,
          logGroupArnList: LogGroupArnList,
          suppressed: S.optional(S.Boolean),
          suppressedDate: S.optional(S.Number),
          suppressedUntil: S.optional(S.Number),
          isPatternLevelSuppression: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Anomaly" });
    case 4:
      return S.Array(Anomaly);
    case 5:
      return S.suspend(() =>
        S.Struct({ anomalies: S.optional(Anomalies), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListAnomaliesResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          integrationNamePrefix: S.optional(S.String),
          integrationType: S.optional(IntegrationType),
          integrationStatus: S.optional(IntegrationStatus),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListIntegrationsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          integrationName: S.optional(S.String),
          integrationType: S.optional(IntegrationType),
          integrationStatus: S.optional(IntegrationStatus),
        }),
      ).annotate({ identifier: "IntegrationSummary" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.Array(IntegrationSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ integrationSummaries: S.optional(IntegrationSummaries) }).pipe(ns),
      ).annotate({ identifier: "ListIntegrationsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          filterLogGroupArn: S.optional(S.String),
          limit: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLogAnomalyDetectorsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          anomalyDetectorArn: S.optional(S.String),
          detectorName: S.optional(S.String),
          logGroupArnList: S.optional(LogGroupArnList),
          evaluationFrequency: S.optional(EvaluationFrequency),
          filterPattern: S.optional(S.String),
          anomalyDetectorStatus: S.optional(AnomalyDetectorStatus),
          kmsKeyId: S.optional(S.String),
          creationTimeStamp: S.optional(S.Number),
          lastModifiedTimeStamp: S.optional(S.Number),
          anomalyVisibilityTime: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AnomalyDetector" });
    case 4:
      return S.Array(AnomalyDetector);
    case 5:
      return S.suspend(() =>
        S.Struct({
          anomalyDetectors: S.optional(AnomalyDetectors),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListLogAnomalyDetectorsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ key: S.String, values: S.optional(TagFilterValues) }),
      ).annotate({ identifier: "TagFilter" });
    case 7:
      return S.Array(TagFilter);
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          logGroupNamePattern: S.optional(S.String),
          logGroupClass: S.optional(LogGroupClass),
          includeLinkedAccounts: S.optional(S.Boolean),
          accountIdentifiers: S.optional(AccountIds),
          nextToken: S.optional(S.String),
          limit: S.optional(S.Number),
          dataSources: S.optional(DataSourceFilters),
          fieldIndexNames: S.optional(FieldIndexNames),
          logGroupTags: S.optional(TagFilters),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListLogGroupsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.optional(S.String),
          logGroupArn: S.optional(S.String),
          logGroupClass: S.optional(LogGroupClass),
        }),
      ).annotate({ identifier: "LogGroupSummary" });
    case 2:
      return S.Array(LogGroupSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          logGroups: S.optional(LogGroupSummaries),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListLogGroupsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          queryId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLogGroupsForQueryRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          logGroupIdentifiers: S.optional(LogGroupIdentifiers),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListLogGroupsForQueryResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          state: S.optional(ScheduledQueryState),
          scheduleType: S.optional(ScheduleType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListScheduledQueriesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          scheduledQueryArn: S.optional(S.String),
          name: S.optional(S.String),
          state: S.optional(ScheduledQueryState),
          scheduleType: S.optional(ScheduleType),
          lastTriggeredTime: S.optional(S.Number),
          lastExecutionStatus: S.optional(ExecutionStatus),
          scheduleExpression: S.optional(S.String),
          timezone: S.optional(S.String),
          destinationConfiguration: S.optional(DestinationConfiguration),
          creationTime: S.optional(S.Number),
          lastUpdatedTime: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ScheduledQuerySummary" });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ScheduledQuerySummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          scheduledQueries: S.optional(ScheduledQuerySummaryList),
        }).pipe(ns),
      ).annotate({
        identifier: "ListScheduledQueriesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          integrationArn: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSourcesForS3TableIntegrationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          identifier: S.optional(S.String),
          dataSource: S.optional(DataSource),
          status: S.optional(S3TableIntegrationSourceStatus),
          statusReason: S.optional(S.String),
          createdTimeStamp: S.optional(S.Number),
          parentSourceIdentifier: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3TableIntegrationSource" });
    case 4:
      return S.Array(S3TableIntegrationSource);
    case 5:
      return S.suspend(() =>
        S.Struct({
          sources: S.optional(S3TableIntegrationSources),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListSourcesForS3TableIntegrationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          logGroupIdentifier: S.optional(S.String),
          vpcEndpointId: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSyslogConfigurationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          logGroupArn: S.optional(S.String),
          sourceType: S.optional(SyslogSourceType),
          vpcEndpointId: S.optional(S.String),
          createdAt: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SyslogConfiguration" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SyslogConfiguration);
    case 1:
      return S.suspend(() =>
        S.Struct({
          syslogConfigurations: S.optional(SyslogConfigurations),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListSyslogConfigurationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ tags: S.optional(Tags) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ logGroupName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTagsLogGroupRequest" });
    case 5:
      return S.suspend(() => S.Struct({ tags: S.optional(Tags) }).pipe(ns)).annotate({
        identifier: "ListTagsLogGroupResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          policyName: S.String,
          policyDocument: S.String,
          policyType: PolicyType,
          scope: S.optional(Scope),
          selectionCriteria: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutAccountPolicyRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ accountPolicy: S.optional(AccountPolicy) }).pipe(ns),
      ).annotate({ identifier: "PutAccountPolicyResponse" });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          logGroupIdentifier: S.String,
          bearerTokenAuthenticationEnabled: S.Boolean,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutBearerTokenAuthenticationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ logGroupIdentifier: S.String, policyDocument: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutDataProtectionPolicyRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          outputFormat: S.optional(OutputFormat),
          deliveryDestinationConfiguration: S.optional(DeliveryDestinationConfiguration),
          deliveryDestinationType: S.optional(DeliveryDestinationType),
          roleArn: S.optional(S.String),
          tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutDeliveryDestinationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ deliveryDestinationName: S.String, deliveryDestinationPolicy: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutDeliveryDestinationPolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          resourceArn: S.String,
          logType: S.String,
          tags: S.optional(Tags),
          deliverySourceConfiguration: S.optional(DeliverySourceConfiguration),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutDeliverySourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          destinationName: S.String,
          targetArn: S.String,
          roleArn: S.String,
          tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutDestinationRequest" });
    case 6:
      return S.suspend(() => S.Struct({ destination: S.optional(Destination) }).pipe(ns)).annotate({
        identifier: "PutDestinationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          destinationName: S.String,
          accessPolicy: S.String,
          forceUpdate: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutDestinationPolicyRequest",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ logGroupIdentifier: S.String, policyDocument: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutIndexPolicyRequest" });
    case 1:
      return S.suspend(() => S.Struct({ indexPolicy: S.optional(IndexPolicy) }).pipe(ns)).annotate({
        identifier: "PutIndexPolicyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          kmsKeyArn: S.optional(S.String),
          dataSourceRoleArn: S.String,
          dashboardViewerPrincipals: DashboardViewerPrincipals,
          applicationArn: S.optional(S.String),
          retentionDays: S.Number,
        }),
      ).annotate({ identifier: "OpenSearchResourceConfig" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ openSearchResourceConfig: OpenSearchResourceConfig }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          integrationName: S.String,
          resourceConfig: ResourceConfig,
          integrationType: IntegrationType,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutIntegrationRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          integrationName: S.optional(S.String),
          integrationStatus: S.optional(IntegrationStatus),
        }).pipe(ns),
      ).annotate({ identifier: "PutIntegrationResponse" });
    case 6:
      return S.suspend(() => S.Struct({ timestamp: S.Number, message: S.String })).annotate({
        identifier: "InputLogEvent",
      });
    case 7:
      return S.Array(InputLogEvent);
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          keyAttributes: S.optional(EntityKeyAttributes),
          attributes: S.optional(EntityAttributes),
        }),
      ).annotate({ identifier: "Entity" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.String,
          logStreamName: S.String,
          logEvents: InputLogEvents,
          sequenceToken: S.optional(S.String),
          entity: S.optional(Entity),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutLogEventsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          tooNewLogEventStartIndex: S.optional(S.Number),
          tooOldLogEventEndIndex: S.optional(S.Number),
          expiredLogEventEndIndex: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RejectedLogEventsInfo" });
    case 3:
      return S.suspend(() => S.Struct({ errorType: EntityRejectionErrorType })).annotate({
        identifier: "RejectedEntityInfo",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextSequenceToken: S.optional(S.String),
          rejectedLogEventsInfo: S.optional(RejectedLogEventsInfo),
          rejectedEntityInfo: S.optional(RejectedEntityInfo),
        }).pipe(ns),
      ).annotate({ identifier: "PutLogEventsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ logGroupIdentifier: S.String, deletionProtectionEnabled: S.Boolean }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutLogGroupDeletionProtectionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.String,
          filterName: S.String,
          filterPattern: S.String,
          metricTransformations: MetricTransformations,
          applyOnTransformedLogs: S.optional(S.Boolean),
          fieldSelectionCriteria: S.optional(S.String),
          emitSystemFieldDimensions: S.optional(EmitSystemFields),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutMetricFilterRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          queryLanguage: S.optional(QueryLanguage),
          name: S.String,
          queryDefinitionId: S.optional(S.String),
          logGroupNames: S.optional(LogGroupNames),
          queryString: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          parameters: S.optional(QueryParameterList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutQueryDefinitionRequest",
      });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ queryDefinitionId: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "PutQueryDefinitionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          policyName: S.optional(S.String),
          policyDocument: S.optional(S.String),
          resourceArn: S.optional(S.String),
          expectedRevisionId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutResourcePolicyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourcePolicy: S.optional(ResourcePolicy),
          revisionId: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "PutResourcePolicyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ logGroupName: S.String, retentionInDays: S.Number }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutRetentionPolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ storageTier: StorageTier }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutStorageTierPolicyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.String,
          filterName: S.String,
          filterPattern: S.String,
          destinationArn: S.String,
          roleArn: S.optional(S.String),
          distribution: S.optional(Distribution),
          applyOnTransformedLogs: S.optional(S.Boolean),
          fieldSelectionCriteria: S.optional(S.String),
          emitSystemFields: S.optional(EmitSystemFields),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutSubscriptionFilterRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ logGroupIdentifier: S.String, vpcEndpointId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutSyslogConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ logGroupIdentifier: S.String, transformerConfig: Processors }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutTransformerRequest" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          logGroupIdentifiers: StartLiveTailLogGroupIdentifiers,
          logStreamNames: S.optional(InputLogStreamNames),
          logStreamNamePrefixes: S.optional(InputLogStreamNames),
          logEventFilterPattern: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartLiveTailRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          sessionId: S.optional(S.String),
          logGroupIdentifiers: S.optional(StartLiveTailLogGroupIdentifiers),
          logStreamNames: S.optional(InputLogStreamNames),
          logStreamNamePrefixes: S.optional(InputLogStreamNames),
          logEventFilterPattern: S.optional(S.String),
        }),
      ).annotate({ identifier: "LiveTailSessionStart" });
    case 2:
      return S.suspend(() => S.Struct({ sampled: S.optional(S.Boolean) })).annotate({
        identifier: "LiveTailSessionMetadata",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          logStreamName: S.optional(S.String),
          logGroupIdentifier: S.optional(S.String),
          message: S.optional(S.String),
          timestamp: S.optional(S.Number),
          ingestionTime: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LiveTailSessionLogEvent" });
    case 4:
      return S.Array(LiveTailSessionLogEvent);
    case 5:
      return S.suspend(() =>
        S.Struct({
          sessionMetadata: S.optional(LiveTailSessionMetadata),
          sessionResults: S.optional(LiveTailSessionResults),
        }),
      ).annotate({ identifier: "LiveTailSessionUpdate" });
    case 6:
      return S.suspend(() => S.Struct({ message: S.optional(S.String) })).annotate({
        identifier: "SessionTimeoutException",
      });
    case 7:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ sessionStart: LiveTailSessionStart }),
          /*@__PURE__*/ S.Struct({ sessionUpdate: LiveTailSessionUpdate }),
          /*@__PURE__*/ S.Struct({ SessionTimeoutException: SessionTimeoutException }),
          /*@__PURE__*/ S.Struct({ SessionStreamingException: SessionStreamingException }),
        ]),
      );
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ responseStream: S.optional(StartLiveTailResponseStream) }).pipe(ns),
      ).annotate({ identifier: "StartLiveTailResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          queryLanguage: S.optional(QueryLanguage),
          logGroupName: S.optional(S.String),
          logGroupNames: S.optional(LogGroupNames),
          logGroupIdentifiers: S.optional(LogGroupIdentifiers),
          startTime: S.Number,
          endTime: S.Number,
          queryString: S.String,
          limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartQueryRequest" });
    case 2:
      return S.suspend(() => S.Struct({ queryId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "StartQueryResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ queryId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopQueryRequest" });
    case 4:
      return S.suspend(() => S.Struct({ success: S.optional(S.Boolean) }).pipe(ns)).annotate({
        identifier: "StopQueryResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ logGroupName: S.String, tags: Tags }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagLogGroupRequest" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagLogGroupResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: Tags }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ filterPattern: S.String, logEventMessages: TestEventMessages }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TestMetricFilterRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          eventNumber: S.optional(S.Number),
          eventMessage: S.optional(S.String),
          extractedValues: S.optional(ExtractedValues),
        }),
      ).annotate({ identifier: "MetricFilterMatchRecord" });
    case 2:
      return S.Array(MetricFilterMatchRecord);
    case 3:
      return S.suspend(() =>
        S.Struct({ matches: S.optional(MetricFilterMatches) }).pipe(ns),
      ).annotate({ identifier: "TestMetricFilterResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ transformerConfig: Processors, logEventMessages: TestEventMessages }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TestTransformerRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          eventNumber: S.optional(S.Number),
          eventMessage: S.optional(S.String),
          transformedEventMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "TransformedLogRecord" });
    case 6:
      return S.Array(TransformedLogRecord);
    case 7:
      return S.suspend(() =>
        S.Struct({ transformedLogs: S.optional(TransformedLogs) }).pipe(ns),
      ).annotate({ identifier: "TestTransformerResponse" });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ logGroupName: S.String, tags: TagList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagLogGroupRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: TagKeyList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ value: S.optional(S.Number), suppressionUnit: S.optional(SuppressionUnit) }),
      ).annotate({ identifier: "SuppressionPeriod" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          anomalyId: S.optional(S.String),
          patternId: S.optional(S.String),
          anomalyDetectorArn: S.String,
          suppressionType: S.optional(SuppressionType),
          suppressionPeriod: S.optional(SuppressionPeriod),
          baseline: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateAnomalyRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          recordFields: S.optional(RecordFields),
          fieldDelimiter: S.optional(S.String),
          s3DeliveryConfiguration: S.optional(S3DeliveryConfiguration),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateDeliveryConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          anomalyDetectorArn: S.String,
          evaluationFrequency: S.optional(EvaluationFrequency),
          filterPattern: S.optional(S.String),
          anomalyVisibilityTime: S.optional(S.Number),
          enabled: S.Boolean,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLogAnomalyDetectorRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          lookupTableArn: S.String,
          description: S.optional(S.String),
          tableBody: S.optional(S.String),
          queryId: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateLookupTableRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          lookupTableArn: S.optional(S.String),
          lastUpdatedTime: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({
        identifier: "UpdateLookupTableResponse",
      });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          description: S.optional(S.String),
          queryLanguage: QueryLanguage,
          queryString: S.String,
          logGroupIdentifiers: S.optional(ScheduledQueryLogGroupIdentifiers),
          scheduleExpression: S.String,
          timezone: S.optional(S.String),
          startTimeOffset: S.optional(S.Number),
          endTimeOffset: S.optional(S.Number),
          destinationConfiguration: S.optional(DestinationConfiguration),
          scheduleStartTime: S.optional(S.Number),
          scheduleEndTime: S.optional(S.Number),
          executionRoleArn: S.String,
          state: S.optional(ScheduledQueryState),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateScheduledQueryRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ startCharOffset: S.optional(S.Number), endCharOffset: S.optional(S.Number) }),
      ).annotate({
        identifier: "QueryCompileErrorLocation",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          location: S.optional(QueryCompileErrorLocation),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "QueryCompileError" });
  }
}
