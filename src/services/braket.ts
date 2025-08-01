import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class Braket extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AlgorithmSpecification {
  scriptModeConfig?: ScriptModeConfig;
  containerImage?: ContainerImage;
}
export interface Association {
  arn: string;
  type: string;
}
export type Associations = Array<Association>;
export type AssociationType = string;

export type BraketResourceArn = string;

export interface CancelJobRequest {
  jobArn: string;
}
export interface CancelJobResponse {
  jobArn: string;
  cancellationStatus: string;
}
export type CancellationStatus = string;

export interface CancelQuantumTaskRequest {
  quantumTaskArn: string;
  clientToken: string;
}
export interface CancelQuantumTaskResponse {
  quantumTaskArn: string;
  cancellationStatus: string;
}
export type CompressionType = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface ContainerImage {
  uri: string;
}
export interface CreateJobRequest {
  clientToken: string;
  algorithmSpecification: AlgorithmSpecification;
  inputDataConfig?: Array<InputFileConfig>;
  outputDataConfig: JobOutputDataConfig;
  checkpointConfig?: JobCheckpointConfig;
  jobName: string;
  roleArn: string;
  stoppingCondition?: JobStoppingCondition;
  instanceConfig: InstanceConfig;
  hyperParameters?: Record<string, string>;
  deviceConfig: DeviceConfig;
  tags?: Record<string, string>;
  associations?: Array<Association>;
}
export interface CreateJobResponse {
  jobArn: string;
}
export interface CreateQuantumTaskRequest {
  clientToken: string;
  deviceArn: string;
  deviceParameters?: string;
  shots: number;
  outputS3Bucket: string;
  outputS3KeyPrefix: string;
  action: string;
  tags?: Record<string, string>;
  jobToken?: string;
  associations?: Array<Association>;
}
export interface CreateQuantumTaskResponse {
  quantumTaskArn: string;
}
export interface DataSource {
  s3DataSource: S3DataSource;
}
export type DeviceArn = string;

export interface DeviceConfig {
  device: string;
}
export declare class DeviceOfflineException extends EffectData.TaggedError(
  "DeviceOfflineException",
)<{
  readonly message?: string;
}> {}
export interface DeviceQueueInfo {
  queue: string;
  queueSize: string;
  queuePriority?: string;
}
export type DeviceQueueInfoList = Array<DeviceQueueInfo>;
export declare class DeviceRetiredException extends EffectData.TaggedError(
  "DeviceRetiredException",
)<{
  readonly message?: string;
}> {}
export type DeviceStatus = string;

export interface DeviceSummary {
  deviceArn: string;
  deviceName: string;
  providerName: string;
  deviceType: string;
  deviceStatus: string;
}
export type DeviceSummaryList = Array<DeviceSummary>;
export type DeviceType = string;

export interface GetDeviceRequest {
  deviceArn: string;
}
export interface GetDeviceResponse {
  deviceArn: string;
  deviceName: string;
  providerName: string;
  deviceType: string;
  deviceStatus: string;
  deviceCapabilities: string;
  deviceQueueInfo?: Array<DeviceQueueInfo>;
}
export interface GetJobRequest {
  jobArn: string;
  additionalAttributeNames?: Array<string>;
}
export interface GetJobResponse {
  status: string;
  jobArn: string;
  roleArn: string;
  failureReason?: string;
  jobName: string;
  hyperParameters?: Record<string, string>;
  inputDataConfig?: Array<InputFileConfig>;
  outputDataConfig: JobOutputDataConfig;
  stoppingCondition?: JobStoppingCondition;
  checkpointConfig?: JobCheckpointConfig;
  algorithmSpecification: AlgorithmSpecification;
  instanceConfig: InstanceConfig;
  createdAt: Date | string;
  startedAt?: Date | string;
  endedAt?: Date | string;
  billableDuration?: number;
  deviceConfig?: DeviceConfig;
  events?: Array<JobEventDetails>;
  tags?: Record<string, string>;
  queueInfo?: HybridJobQueueInfo;
  associations?: Array<Association>;
}
export interface GetQuantumTaskRequest {
  quantumTaskArn: string;
  additionalAttributeNames?: Array<string>;
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
  createdAt: Date | string;
  endedAt?: Date | string;
  tags?: Record<string, string>;
  jobArn?: string;
  queueInfo?: QuantumTaskQueueInfo;
  associations?: Array<Association>;
}
export type HybridJobAdditionalAttributeName = string;

export type HybridJobAdditionalAttributeNamesList = Array<string>;
export interface HybridJobQueueInfo {
  queue: string;
  position: string;
  message?: string;
}
export type HyperParameters = Record<string, string>;
export type InputConfigList = Array<InputFileConfig>;
export interface InputFileConfig {
  channelName: string;
  contentType?: string;
  dataSource: DataSource;
}
export interface InstanceConfig {
  instanceType: string;
  volumeSizeInGb: number;
  instanceCount?: number;
}
export type InstanceType = string;

export declare class InternalServiceException extends EffectData.TaggedError(
  "InternalServiceException",
)<{
  readonly message?: string;
}> {}
export type JobArn = string;

export interface JobCheckpointConfig {
  localPath?: string;
  s3Uri: string;
}
export interface JobEventDetails {
  eventType?: string;
  timeOfEvent?: Date | string;
  message?: string;
}
export type JobEvents = Array<JobEventDetails>;
export type JobEventType = string;

export interface JobOutputDataConfig {
  kmsKeyId?: string;
  s3Path: string;
}
export type JobPrimaryStatus = string;

export interface JobStoppingCondition {
  maxRuntimeInSeconds?: number;
}
export interface JobSummary {
  status: string;
  jobArn: string;
  jobName: string;
  device: string;
  createdAt: Date | string;
  startedAt?: Date | string;
  endedAt?: Date | string;
  tags?: Record<string, string>;
}
export type JobSummaryList = Array<JobSummary>;
export type JobToken = string;

export type JsonValue = string;

export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type QuantumTaskAdditionalAttributeName = string;

export type QuantumTaskAdditionalAttributeNamesList = Array<string>;
export type QuantumTaskArn = string;

export interface QuantumTaskQueueInfo {
  queue: string;
  position: string;
  queuePriority?: string;
  message?: string;
}
export type QuantumTaskStatus = string;

export interface QuantumTaskSummary {
  quantumTaskArn: string;
  status: string;
  deviceArn: string;
  shots: number;
  outputS3Bucket: string;
  outputS3Directory: string;
  createdAt: Date | string;
  endedAt?: Date | string;
  tags?: Record<string, string>;
}
export type QuantumTaskSummaryList = Array<QuantumTaskSummary>;
export type QueueName = string;

export type QueuePriority = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RoleArn = string;

export interface S3DataSource {
  s3Uri: string;
}
export type S3Path = string;

export interface ScriptModeConfig {
  entryPoint: string;
  s3Uri: string;
  compressionType?: string;
}
export interface SearchDevicesFilter {
  name: string;
  values: Array<string>;
}
export type SearchDevicesFilterList = Array<SearchDevicesFilter>;
export interface SearchDevicesRequest {
  nextToken?: string;
  maxResults?: number;
  filters: Array<SearchDevicesFilter>;
}
export interface SearchDevicesResponse {
  devices: Array<DeviceSummary>;
  nextToken?: string;
}
export interface SearchJobsFilter {
  name: string;
  values: Array<string>;
  operator: string;
}
export type SearchJobsFilterList = Array<SearchJobsFilter>;
export type SearchJobsFilterOperator = string;

export interface SearchJobsRequest {
  nextToken?: string;
  maxResults?: number;
  filters: Array<SearchJobsFilter>;
}
export interface SearchJobsResponse {
  jobs: Array<JobSummary>;
  nextToken?: string;
}
export interface SearchQuantumTasksFilter {
  name: string;
  values: Array<string>;
  operator: string;
}
export type SearchQuantumTasksFilterList = Array<SearchQuantumTasksFilter>;
export type SearchQuantumTasksFilterOperator = string;

export interface SearchQuantumTasksRequest {
  nextToken?: string;
  maxResults?: number;
  filters: Array<SearchQuantumTasksFilter>;
}
export interface SearchQuantumTasksResponse {
  quantumTasks: Array<QuantumTaskSummary>;
  nextToken?: string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export type String1024 = string;

export type String2048 = string;

export type String256 = string;

export type String256List = Array<string>;
export type String4096 = string;

export type String64 = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagsMap = Record<string, string>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export type Uri = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
