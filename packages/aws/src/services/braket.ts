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
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "Braket", serviceShapeName: "Braket" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "braket" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-09-01");
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
              `https://braket-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://braket-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://braket.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://braket.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class DeviceOfflineException
  extends /*@__PURE__*/ S.TaggedError<DeviceOfflineException>()(
    "DeviceOfflineException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(424),
  ) {}
export class DeviceRetiredException
  extends /*@__PURE__*/ S.TaggedError<DeviceRetiredException>()(
    "DeviceRetiredException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(410),
  ).pipe(C.withBadRequestError) {}
export class InternalServiceException
  extends /*@__PURE__*/ S.TaggedError<InternalServiceException>()(
    "InternalServiceException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
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
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(S.String),
      programSetValidationFailures: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(72, __c9, 0)).annotate({
          identifier: "ProgramSetValidationFailuresList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type JobArn = string;
export interface CancelJobRequest {
  jobArn: string;
}
export type CancellationStatus = string;
export interface CancelJobResponse {
  jobArn: string;
  cancellationStatus: string;
}
export type QuantumTaskArn = string;
export type String64 = string;
export interface CancelQuantumTaskRequest {
  quantumTaskArn: string;
  clientToken: string;
}
export interface CancelQuantumTaskResponse {
  quantumTaskArn: string;
  cancellationStatus: string;
}
export type S3Path = string;
export type CompressionType = string;
export interface ScriptModeConfig {
  entryPoint: string;
  s3Uri: string;
  compressionType?: string;
}
export type Uri = string;
export interface ContainerImage {
  uri: string;
}
export interface AlgorithmSpecification {
  scriptModeConfig?: ScriptModeConfig;
  containerImage?: ContainerImage;
}
export type String256 = string;
export interface S3DataSource {
  s3Uri: string;
}
export interface DataSource {
  s3DataSource: S3DataSource;
}
export interface InputFileConfig {
  channelName: string;
  contentType?: string;
  dataSource: DataSource;
}
export type InputConfigList = InputFileConfig[];
export type String2048 = string;
export interface JobOutputDataConfig {
  kmsKeyId?: string;
  s3Path: string;
}
export type String4096 = string;
export interface JobCheckpointConfig {
  localPath?: string;
  s3Uri: string;
}
export type RoleArn = string;
export interface JobStoppingCondition {
  maxRuntimeInSeconds?: number;
}
export type InstanceType = string;
export interface InstanceConfig {
  instanceType: string;
  volumeSizeInGb: number;
  instanceCount?: number;
}
export type HyperParameters = { [key: string]: string | undefined };
export interface DeviceConfig {
  device: string;
}
export type TagsMap = { [key: string]: string | undefined };
export type BraketResourceArn = string;
export type AssociationType = string;
export interface Association {
  arn: string;
  type: string;
}
export type Associations = Association[];
export interface CreateJobRequest {
  clientToken: string;
  algorithmSpecification: AlgorithmSpecification;
  inputDataConfig?: InputFileConfig[];
  outputDataConfig: JobOutputDataConfig;
  checkpointConfig?: JobCheckpointConfig;
  jobName: string;
  roleArn: string;
  stoppingCondition?: JobStoppingCondition;
  instanceConfig: InstanceConfig;
  hyperParameters?: { [key: string]: string | undefined };
  deviceConfig: DeviceConfig;
  tags?: { [key: string]: string | undefined };
  associations?: Association[];
}
export interface CreateJobResponse {
  jobArn: string;
}
export type DeviceArn = string;
export type JsonValue = string;
export type JobToken = string;
export type ExperimentalCapabilitiesEnablementType = string;
export type ExperimentalCapabilities = { enabled: string };
export interface CreateQuantumTaskRequest {
  clientToken: string;
  deviceArn: string;
  deviceParameters?: string;
  shots: number;
  outputS3Bucket: string;
  outputS3KeyPrefix: string;
  action: string;
  tags?: { [key: string]: string | undefined };
  jobToken?: string;
  associations?: Association[];
  experimentalCapabilities?: ExperimentalCapabilities;
}
export interface CreateQuantumTaskResponse {
  quantumTaskArn: string;
}
export interface TimePeriod {
  startAt: Date;
  endAt: Date;
}
export interface CreateSpendingLimitRequest {
  clientToken: string;
  deviceArn: string;
  spendingLimit: string;
  timePeriod?: TimePeriod;
  tags?: { [key: string]: string | undefined };
}
export type SpendingLimitArn = string;
export interface CreateSpendingLimitResponse {
  spendingLimitArn: string;
}
export interface DeleteSpendingLimitRequest {
  spendingLimitArn: string;
}
export interface DeleteSpendingLimitResponse {}
export interface GetDeviceRequest {
  deviceArn: string;
}
export type DeviceType = string;
export type DeviceStatus = string;
export type QueueName = string;
export type QueuePriority = string;
export interface DeviceQueueInfo {
  queue: string;
  queueSize: string;
  queuePriority?: string;
}
export type DeviceQueueInfoList = DeviceQueueInfo[];
export interface GetDeviceResponse {
  deviceArn: string;
  deviceName: string;
  providerName: string;
  deviceType: string;
  deviceStatus: string;
  deviceCapabilities: string;
  deviceQueueInfo?: DeviceQueueInfo[];
}
export type HybridJobAdditionalAttributeName = string;
export type HybridJobAdditionalAttributeNamesList = string[];
export interface GetJobRequest {
  jobArn: string;
  additionalAttributeNames?: string[];
}
export type JobPrimaryStatus = string;
export type String1024 = string;
export type JobEventType = string;
export interface JobEventDetails {
  eventType?: string;
  timeOfEvent?: Date;
  message?: string;
}
export type JobEvents = JobEventDetails[];
export interface HybridJobQueueInfo {
  queue: string;
  position: string;
  message?: string;
}
export interface GetJobResponse {
  status: string;
  jobArn: string;
  roleArn: string;
  failureReason?: string;
  jobName: string;
  hyperParameters?: { [key: string]: string | undefined };
  inputDataConfig?: InputFileConfig[];
  outputDataConfig: JobOutputDataConfig;
  stoppingCondition?: JobStoppingCondition;
  checkpointConfig?: JobCheckpointConfig;
  algorithmSpecification: AlgorithmSpecification;
  instanceConfig: InstanceConfig;
  createdAt: Date;
  startedAt?: Date;
  endedAt?: Date;
  billableDuration?: number;
  deviceConfig?: DeviceConfig;
  events?: JobEventDetails[];
  tags?: { [key: string]: string | undefined };
  queueInfo?: HybridJobQueueInfo;
  associations?: Association[];
}
export type QuantumTaskAdditionalAttributeName = string;
export type QuantumTaskAdditionalAttributeNamesList = string[];
export interface GetQuantumTaskRequest {
  quantumTaskArn: string;
  additionalAttributeNames?: string[];
}
export type QuantumTaskStatus = string;
export interface QuantumTaskQueueInfo {
  queue: string;
  position: string;
  queuePriority?: string;
  message?: string;
}
export interface ActionMetadata {
  actionType: string;
  programCount?: number;
  executableCount?: number;
}
export interface GetQuantumTaskResponse {
  quantumTaskArn: string;
  status: string;
  failureReason?: string;
  deviceArn: string;
  deviceParameters: string;
  shots: number;
  outputS3Bucket: string;
  outputS3Directory: string;
  createdAt: Date;
  endedAt?: Date;
  tags?: { [key: string]: string | undefined };
  jobArn?: string;
  queueInfo?: QuantumTaskQueueInfo;
  associations?: Association[];
  numSuccessfulShots?: number;
  actionMetadata?: ActionMetadata;
  experimentalCapabilities?: ExperimentalCapabilities;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export type String256List = string[];
export interface SearchDevicesFilter {
  name: string;
  values: string[];
}
export type SearchDevicesFilterList = SearchDevicesFilter[];
export interface SearchDevicesRequest {
  nextToken?: string;
  maxResults?: number;
  filters: SearchDevicesFilter[];
}
export interface DeviceSummary {
  deviceArn: string;
  deviceName: string;
  providerName: string;
  deviceType: string;
  deviceStatus: string;
}
export type DeviceSummaryList = DeviceSummary[];
export interface SearchDevicesResponse {
  devices: DeviceSummary[];
  nextToken?: string;
}
export type SearchJobsFilterOperator = string;
export interface SearchJobsFilter {
  name: string;
  values: string[];
  operator: string;
}
export type SearchJobsFilterList = SearchJobsFilter[];
export interface SearchJobsRequest {
  nextToken?: string;
  maxResults?: number;
  filters: SearchJobsFilter[];
}
export interface JobSummary {
  status: string;
  jobArn: string;
  jobName: string;
  device: string;
  createdAt: Date;
  startedAt?: Date;
  endedAt?: Date;
  tags?: { [key: string]: string | undefined };
}
export type JobSummaryList = JobSummary[];
export interface SearchJobsResponse {
  jobs: JobSummary[];
  nextToken?: string;
}
export type SearchQuantumTasksFilterOperator = string;
export interface SearchQuantumTasksFilter {
  name: string;
  values: string[];
  operator: string;
}
export type SearchQuantumTasksFilterList = SearchQuantumTasksFilter[];
export interface SearchQuantumTasksRequest {
  nextToken?: string;
  maxResults?: number;
  filters: SearchQuantumTasksFilter[];
}
export interface QuantumTaskSummary {
  quantumTaskArn: string;
  status: string;
  deviceArn: string;
  shots: number;
  outputS3Bucket: string;
  outputS3Directory: string;
  createdAt: Date;
  endedAt?: Date;
  tags?: { [key: string]: string | undefined };
}
export type QuantumTaskSummaryList = QuantumTaskSummary[];
export interface SearchQuantumTasksResponse {
  quantumTasks: QuantumTaskSummary[];
  nextToken?: string;
}
export type SearchSpendingLimitsFilterOperator = string;
export interface SearchSpendingLimitsFilter {
  name: string;
  values: string[];
  operator: string;
}
export type SearchSpendingLimitsFilterList = SearchSpendingLimitsFilter[];
export interface SearchSpendingLimitsRequest {
  nextToken?: string;
  maxResults?: number;
  filters?: SearchSpendingLimitsFilter[];
}
export interface SpendingLimitSummary {
  spendingLimitArn: string;
  deviceArn: string;
  timePeriod: TimePeriod;
  spendingLimit: string;
  queuedSpend: string;
  totalSpend: string;
  createdAt: Date;
  updatedAt: Date;
  tags?: { [key: string]: string | undefined };
}
export type SpendingLimitSummaryList = SpendingLimitSummary[];
export interface SearchSpendingLimitsResponse {
  spendingLimits: SpendingLimitSummary[];
  nextToken?: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeys = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateSpendingLimitRequest {
  spendingLimitArn: string;
  clientToken: string;
  spendingLimit?: string;
  timePeriod?: TimePeriod;
}
export interface UpdateSpendingLimitResponse {}
export type ValidationExceptionReason = string;
export type ProgramValidationFailuresList = string[];
export interface ProgramSetValidationFailure {
  programIndex: number;
  inputsIndex?: number;
  errors?: string[];
}
export type ProgramSetValidationFailuresList = ProgramSetValidationFailure[];
export type CancelJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels an Amazon Braket hybrid job.
 */
export const cancelJob: API.OperationMethod<
  CancelJobRequest,
  CancelJobResponse,
  CancelJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<CancelJobRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<CancelJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelJob",
}));

export type CancelQuantumTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels the specified task.
 */
export const cancelQuantumTask: API.OperationMethod<
  CancelQuantumTaskRequest,
  CancelQuantumTaskResponse,
  CancelQuantumTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<CancelQuantumTaskRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<CancelQuantumTaskResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelQuantumTask",
}));

export type CreateJobError =
  | AccessDeniedException
  | ConflictException
  | DeviceOfflineException
  | DeviceRetiredException
  | InternalServiceException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Braket hybrid job.
 */
export const createJob: API.OperationMethod<
  CreateJobRequest,
  CreateJobResponse,
  CreateJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20, __c2, 4) as any as S.Schema<CreateJobRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<CreateJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DeviceOfflineException,
    DeviceRetiredException,
    InternalServiceException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateJob",
}));

export type CreateQuantumTaskError =
  | AccessDeniedException
  | DeviceOfflineException
  | DeviceRetiredException
  | InternalServiceException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a quantum task.
 */
export const createQuantumTask: API.OperationMethod<
  CreateQuantumTaskRequest,
  CreateQuantumTaskResponse,
  CreateQuantumTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(23, __c2, 7) as any as S.Schema<CreateQuantumTaskRequest>,
  output: __S(24, __c3, 0) as any as S.Schema<CreateQuantumTaskResponse>,
  errors: [
    AccessDeniedException,
    DeviceOfflineException,
    DeviceRetiredException,
    InternalServiceException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateQuantumTask",
}));

export type CreateSpendingLimitError =
  | AccessDeniedException
  | DeviceRetiredException
  | InternalServiceException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a spending limit for a specified quantum device. Spending limits help you control costs by setting maximum amounts that can be spent on quantum computing tasks within a specified time period. Simulators do not support spending limits.
 */
export const createSpendingLimit: API.OperationMethod<
  CreateSpendingLimitRequest,
  CreateSpendingLimitResponse,
  CreateSpendingLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26, __c3, 2) as any as S.Schema<CreateSpendingLimitRequest>,
  output: __S(27, __c3, 3) as any as S.Schema<CreateSpendingLimitResponse>,
  errors: [
    AccessDeniedException,
    DeviceRetiredException,
    InternalServiceException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSpendingLimit",
}));

export type DeleteSpendingLimitError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing spending limit. This operation permanently removes the spending limit and cannot be undone. After deletion, the associated device becomes unrestricted for spending.
 */
export const deleteSpendingLimit: API.OperationMethod<
  DeleteSpendingLimitRequest,
  DeleteSpendingLimitResponse,
  DeleteSpendingLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<DeleteSpendingLimitRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<DeleteSpendingLimitResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSpendingLimit",
}));

export type GetDeviceError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the devices available in Amazon Braket.
 *
 * For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.
 */
export const getDevice: API.OperationMethod<
  GetDeviceRequest,
  GetDeviceResponse,
  GetDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30, __c3, 6) as any as S.Schema<GetDeviceRequest>,
  output: __S(33, __c4, 1) as any as S.Schema<GetDeviceResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDevice",
}));

export type GetJobError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the specified Amazon Braket hybrid job.
 */
export const getJob: API.OperationMethod<
  GetJobRequest,
  GetJobResponse,
  GetJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35, __c4, 3) as any as S.Schema<GetJobRequest>,
  output: __S(39, __c4, 7) as any as S.Schema<GetJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJob",
}));

export type GetQuantumTaskError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the specified quantum task.
 */
export const getQuantumTask: API.OperationMethod<
  GetQuantumTaskRequest,
  GetQuantumTaskResponse,
  GetQuantumTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40, __c5, 0) as any as S.Schema<GetQuantumTaskRequest>,
  output: __S(43, __c5, 3) as any as S.Schema<GetQuantumTaskResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetQuantumTask",
}));

export type ListTagsForResourceError =
  | InternalServiceException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Shows the tags associated with this resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44, __c5, 4) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(45, __c5, 5) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalServiceException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type SearchDevicesError =
  | AccessDeniedException
  | InternalServiceException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches for devices using the specified filters.
 */
export const searchDevices: API.PaginatedOperationMethod<
  SearchDevicesRequest,
  SearchDevicesResponse,
  SearchDevicesError,
  Credentials | HttpClient.HttpClient,
  DeviceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(48, __c6, 0) as any as S.Schema<SearchDevicesRequest>,
  output: __S(51, __c6, 3) as any as S.Schema<SearchDevicesResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchDevices",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "devices",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchJobsError =
  | AccessDeniedException
  | InternalServiceException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches for Amazon Braket hybrid jobs that match the specified filter values.
 */
export const searchJobs: API.PaginatedOperationMethod<
  SearchJobsRequest,
  SearchJobsResponse,
  SearchJobsError,
  Credentials | HttpClient.HttpClient,
  JobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(54, __c6, 6) as any as S.Schema<SearchJobsRequest>,
  output: __S(57, __c7, 1) as any as S.Schema<SearchJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchQuantumTasksError =
  | AccessDeniedException
  | InternalServiceException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches for tasks that match the specified filter values.
 */
export const searchQuantumTasks: API.PaginatedOperationMethod<
  SearchQuantumTasksRequest,
  SearchQuantumTasksResponse,
  SearchQuantumTasksError,
  Credentials | HttpClient.HttpClient,
  QuantumTaskSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<SearchQuantumTasksRequest>,
  output: __S(61, __c7, 5) as any as S.Schema<SearchQuantumTasksResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchQuantumTasks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "quantumTasks",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchSpendingLimitsError =
  | AccessDeniedException
  | InternalServiceException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches and lists spending limits based on specified filters. This operation supports pagination and allows filtering by various criteria to find specific spending limits. We recommend using pagination to ensure that the operation returns quickly and successfully.
 */
export const searchSpendingLimits: API.PaginatedOperationMethod<
  SearchSpendingLimitsRequest,
  SearchSpendingLimitsResponse,
  SearchSpendingLimitsError,
  Credentials | HttpClient.HttpClient,
  SpendingLimitSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(64, __c8, 0) as any as S.Schema<SearchSpendingLimitsRequest>,
  output: __S(67, __c8, 3) as any as S.Schema<SearchSpendingLimitsResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchSpendingLimits",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "spendingLimits",
    pageSize: "maxResults",
  } as const,
})) as any;

export type TagResourceError =
  | InternalServiceException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Add a tag to the specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<TagResourceRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<TagResourceResponse>,
  errors: [InternalServiceException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServiceException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Remove tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69, __c8, 5) as any as S.Schema<UntagResourceRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<UntagResourceResponse>,
  errors: [InternalServiceException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateSpendingLimitError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing spending limit. You can modify the spending amount or time period. Changes take effect immediately.
 */
export const updateSpendingLimit: API.OperationMethod<
  UpdateSpendingLimitRequest,
  UpdateSpendingLimitResponse,
  UpdateSpendingLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<UpdateSpendingLimitRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<UpdateSpendingLimitResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSpendingLimit",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ jobArn: S.String.pipe(T.HttpLabel("jobArn")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/job/{jobArn}/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelJobRequest" });
    case 1:
      return S.suspend(() => S.Struct({ jobArn: S.String, cancellationStatus: S.String })).annotate(
        { identifier: "CancelJobResponse" },
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          quantumTaskArn: S.String.pipe(T.HttpLabel("quantumTaskArn")),
          clientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/quantum-task/{quantumTaskArn}/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelQuantumTaskRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ quantumTaskArn: S.String, cancellationStatus: S.String }),
      ).annotate({
        identifier: "CancelQuantumTaskResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ entryPoint: S.String, s3Uri: S.String, compressionType: S.optional(S.String) }),
      ).annotate({ identifier: "ScriptModeConfig" });
    case 5:
      return S.suspend(() => S.Struct({ uri: S.String })).annotate({
        identifier: "ContainerImage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          scriptModeConfig: S.optional(__S(4, __c0, 4)),
          containerImage: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "AlgorithmSpecification" });
    case 7:
      return S.suspend(() => S.Struct({ s3Uri: S.String })).annotate({
        identifier: "S3DataSource",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ s3DataSource: __S(7, __c0, 7) })).annotate({
        identifier: "DataSource",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          channelName: S.String,
          contentType: S.optional(S.String),
          dataSource: __S(8, __c1, 0),
        }),
      ).annotate({ identifier: "InputFileConfig" });
    case 2:
      return S.Array(__S(9, __c1, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ kmsKeyId: S.optional(S.String), s3Path: S.String }),
      ).annotate({ identifier: "JobOutputDataConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({ localPath: S.optional(S.String), s3Uri: S.String }),
      ).annotate({ identifier: "JobCheckpointConfig" });
    case 5:
      return S.suspend(() => S.Struct({ maxRuntimeInSeconds: S.optional(S.Number) })).annotate({
        identifier: "JobStoppingCondition",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          instanceType: S.String,
          volumeSizeInGb: S.Number,
          instanceCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "InstanceConfig" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ device: S.String })).annotate({
        identifier: "DeviceConfig",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() => S.Struct({ arn: S.String, type: S.String })).annotate({
        identifier: "Association",
      });
    case 3:
      return S.Array(__S(18, __c2, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.String.pipe(T.IdempotencyToken()),
          algorithmSpecification: __S(6, __c0, 6),
          inputDataConfig: S.optional(__S(10, __c1, 2)),
          outputDataConfig: __S(11, __c1, 3),
          checkpointConfig: S.optional(__S(12, __c1, 4)),
          jobName: S.String,
          roleArn: S.String,
          stoppingCondition: S.optional(__S(13, __c1, 5)),
          instanceConfig: __S(14, __c1, 6),
          hyperParameters: S.optional(__S(15, __c1, 7)),
          deviceConfig: __S(16, __c2, 0),
          tags: S.optional(__S(17, __c2, 1)),
          associations: S.optional(__S(19, __c2, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/job" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateJobRequest" });
    case 5:
      return S.suspend(() => S.Struct({ jobArn: S.String })).annotate({
        identifier: "CreateJobResponse",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ enabled: S.String })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.String.pipe(T.IdempotencyToken()),
          deviceArn: S.String,
          deviceParameters: S.optional(S.String),
          shots: S.Number,
          outputS3Bucket: S.String,
          outputS3KeyPrefix: S.String,
          action: S.String,
          tags: S.optional(__S(17, __c2, 1)),
          jobToken: S.optional(S.String),
          associations: S.optional(__S(19, __c2, 3)),
          experimentalCapabilities: S.optional(__S(22, __c2, 6)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/quantum-task" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateQuantumTaskRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ quantumTaskArn: S.String })).annotate({
        identifier: "CreateQuantumTaskResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          startAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "TimePeriod" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.String.pipe(T.IdempotencyToken()),
          deviceArn: S.String,
          spendingLimit: S.String,
          timePeriod: S.optional(__S(25, __c3, 1)),
          tags: S.optional(__S(17, __c2, 1)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/spending-limit" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateSpendingLimitRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ spendingLimitArn: S.String })).annotate({
        identifier: "CreateSpendingLimitResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ spendingLimitArn: S.String.pipe(T.HttpLabel("spendingLimitArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/spending-limit/{spendingLimitArn}/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSpendingLimitRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteSpendingLimitResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ deviceArn: S.String.pipe(T.HttpLabel("deviceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/device/{deviceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDeviceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ queue: S.String, queueSize: S.String, queuePriority: S.optional(S.String) }),
      ).annotate({ identifier: "DeviceQueueInfo" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31, __c3, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          deviceArn: S.String,
          deviceName: S.String,
          providerName: S.String,
          deviceType: S.String,
          deviceStatus: S.String,
          deviceCapabilities: S.String,
          deviceQueueInfo: S.optional(__S(32, __c4, 0)),
        }),
      ).annotate({ identifier: "GetDeviceResponse" });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          jobArn: S.String.pipe(T.HttpLabel("jobArn")),
          additionalAttributeNames: S.optional(__S(34, __c4, 2)).pipe(
            T.HttpQuery("additionalAttributeNames"),
          ),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/job/{jobArn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetJobRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          eventType: S.optional(S.String),
          timeOfEvent: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "JobEventDetails" });
    case 5:
      return S.Array(__S(36, __c4, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ queue: S.String, position: S.String, message: S.optional(S.String) }),
      ).annotate({ identifier: "HybridJobQueueInfo" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          status: S.String,
          jobArn: S.String,
          roleArn: S.String,
          failureReason: S.optional(S.String),
          jobName: S.String,
          hyperParameters: S.optional(__S(15, __c1, 7)),
          inputDataConfig: S.optional(__S(10, __c1, 2)),
          outputDataConfig: __S(11, __c1, 3),
          stoppingCondition: S.optional(__S(13, __c1, 5)),
          checkpointConfig: S.optional(__S(12, __c1, 4)),
          algorithmSpecification: __S(6, __c0, 6),
          instanceConfig: __S(14, __c1, 6),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          billableDuration: S.optional(S.Number),
          deviceConfig: S.optional(__S(16, __c2, 0)),
          events: S.optional(__S(37, __c4, 5)),
          tags: S.optional(__S(17, __c2, 1)),
          queueInfo: S.optional(__S(38, __c4, 6)),
          associations: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({ identifier: "GetJobResponse" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          quantumTaskArn: S.String.pipe(T.HttpLabel("quantumTaskArn")),
          additionalAttributeNames: S.optional(__S(34, __c4, 2)).pipe(
            T.HttpQuery("additionalAttributeNames"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/quantum-task/{quantumTaskArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetQuantumTaskRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          queue: S.String,
          position: S.String,
          queuePriority: S.optional(S.String),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "QuantumTaskQueueInfo" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          actionType: S.String,
          programCount: S.optional(S.Number),
          executableCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ActionMetadata" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          quantumTaskArn: S.String,
          status: S.String,
          failureReason: S.optional(S.String),
          deviceArn: S.String,
          deviceParameters: S.String,
          shots: S.Number,
          outputS3Bucket: S.String,
          outputS3Directory: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          tags: S.optional(__S(17, __c2, 1)),
          jobArn: S.optional(S.String),
          queueInfo: S.optional(__S(41, __c5, 1)),
          associations: S.optional(__S(19, __c2, 3)),
          numSuccessfulShots: S.optional(S.Number),
          actionMetadata: S.optional(__S(42, __c5, 2)),
          experimentalCapabilities: S.optional(__S(22, __c2, 6)),
        }),
      ).annotate({ identifier: "GetQuantumTaskResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
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
    case 5:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(17, __c2, 1)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, values: __S(34, __c4, 2) })).annotate({
        identifier: "SearchDevicesFilter",
      });
    case 7:
      return S.Array(__S(46, __c5, 6));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          filters: __S(47, __c5, 7),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/devices" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SearchDevicesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          deviceArn: S.String,
          deviceName: S.String,
          providerName: S.String,
          deviceType: S.String,
          deviceStatus: S.String,
        }),
      ).annotate({ identifier: "DeviceSummary" });
    case 2:
      return S.Array(__S(49, __c6, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ devices: __S(50, __c6, 2), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "SearchDevicesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ name: S.String, values: __S(34, __c4, 2), operator: S.String }),
      ).annotate({ identifier: "SearchJobsFilter" });
    case 5:
      return S.Array(__S(52, __c6, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          filters: __S(53, __c6, 5),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/jobs" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SearchJobsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          status: S.String,
          jobArn: S.String,
          jobName: S.String,
          device: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          tags: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({ identifier: "JobSummary" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55, __c6, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ jobs: __S(56, __c7, 0), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "SearchJobsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          filters: __S(53, __c6, 5),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/quantum-tasks" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SearchQuantumTasksRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          quantumTaskArn: S.String,
          status: S.String,
          deviceArn: S.String,
          shots: S.Number,
          outputS3Bucket: S.String,
          outputS3Directory: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          tags: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({ identifier: "QuantumTaskSummary" });
    case 4:
      return S.Array(__S(59, __c7, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ quantumTasks: __S(60, __c7, 4), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "SearchQuantumTasksResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.String, values: __S(34, __c4, 2), operator: S.String }),
      ).annotate({
        identifier: "SearchSpendingLimitsFilter",
      });
    case 7:
      return S.Array(__S(62, __c7, 6));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          filters: S.optional(__S(63, __c7, 7)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/spending-limits" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SearchSpendingLimitsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          spendingLimitArn: S.String,
          deviceArn: S.String,
          timePeriod: __S(25, __c3, 1),
          spendingLimit: S.String,
          queuedSpend: S.String,
          totalSpend: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          tags: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({ identifier: "SpendingLimitSummary" });
    case 2:
      return S.Array(__S(65, __c8, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ spendingLimits: __S(66, __c8, 2), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "SearchSpendingLimitsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(17, __c2, 1),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(34, __c4, 2).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          spendingLimitArn: S.String.pipe(T.HttpLabel("spendingLimitArn")),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          spendingLimit: S.optional(S.String),
          timePeriod: S.optional(__S(25, __c3, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/spending-limit/{spendingLimitArn}/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSpendingLimitRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          programIndex: S.Number,
          inputsIndex: S.optional(S.Number),
          errors: S.optional(__S(34, __c4, 2)),
        }),
      ).annotate({
        identifier: "ProgramSetValidationFailure",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71, __c8, 7));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
