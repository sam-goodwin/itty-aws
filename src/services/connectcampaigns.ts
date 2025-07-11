import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonConnectCampaignService {
  createCampaign(
    input: CreateCampaignRequest,
  ): Effect.Effect<
    CreateCampaignResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCampaign(
    input: DeleteCampaignRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteConnectInstanceConfig(
    input: DeleteConnectInstanceConfigRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | InvalidStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteInstanceOnboardingJob(
    input: DeleteInstanceOnboardingJobRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeCampaign(
    input: DescribeCampaignRequest,
  ): Effect.Effect<
    DescribeCampaignResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getCampaignState(
    input: GetCampaignStateRequest,
  ): Effect.Effect<
    GetCampaignStateResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCampaignStateBatch(
    input: GetCampaignStateBatchRequest,
  ): Effect.Effect<
    GetCampaignStateBatchResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getConnectInstanceConfig(
    input: GetConnectInstanceConfigRequest,
  ): Effect.Effect<
    GetConnectInstanceConfigResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getInstanceOnboardingJobStatus(
    input: GetInstanceOnboardingJobStatusRequest,
  ): Effect.Effect<
    GetInstanceOnboardingJobStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listCampaigns(
    input: ListCampaignsRequest,
  ): Effect.Effect<
    ListCampaignsResponse,
    | AccessDeniedException
    | InternalServerException
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
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  pauseCampaign(
    input: PauseCampaignRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putDialRequestBatch(
    input: PutDialRequestBatchRequest,
  ): Effect.Effect<
    PutDialRequestBatchResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  resumeCampaign(
    input: ResumeCampaignRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startCampaign(
    input: StartCampaignRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startInstanceOnboardingJob(
    input: StartInstanceOnboardingJobRequest,
  ): Effect.Effect<
    StartInstanceOnboardingJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopCampaign(
    input: StopCampaignRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateCampaignDialerConfig(
    input: UpdateCampaignDialerConfigRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateCampaignName(
    input: UpdateCampaignNameRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateCampaignOutboundCallConfig(
    input: UpdateCampaignOutboundCallConfigRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type Connectcampaigns = AmazonConnectCampaignService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export interface AgentlessDialerConfig {
  dialingCapacity?: number;
}
export interface AnswerMachineDetectionConfig {
  enableAnswerMachineDetection: boolean;
  awaitAnswerMachinePrompt?: boolean;
}
export type Arn = string;

export type AttributeName = string;

export type Attributes = Record<string, string>;
export type AttributeValue = string;

export type BandwidthAllocation = number;

export interface Campaign {
  id: string;
  arn: string;
  name: string;
  connectInstanceId: string;
  dialerConfig: DialerConfig;
  outboundCallConfig: OutboundCallConfig;
  tags?: Record<string, string>;
}
export type CampaignArn = string;

export interface CampaignFilters {
  instanceIdFilter?: InstanceIdFilter;
}
export type CampaignId = string;

export type CampaignIdList = Array<string>;
export type CampaignName = string;

export type CampaignState = string;

export interface CampaignSummary {
  id: string;
  arn: string;
  name: string;
  connectInstanceId: string;
}
export type CampaignSummaryList = Array<CampaignSummary>;
export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export type ContactFlowId = string;

export interface CreateCampaignRequest {
  name: string;
  connectInstanceId: string;
  dialerConfig: DialerConfig;
  outboundCallConfig: OutboundCallConfig;
  tags?: Record<string, string>;
}
export interface CreateCampaignResponse {
  id?: string;
  arn?: string;
  tags?: Record<string, string>;
}
export interface DeleteCampaignRequest {
  id: string;
}
export interface DeleteConnectInstanceConfigRequest {
  connectInstanceId: string;
}
export interface DeleteInstanceOnboardingJobRequest {
  connectInstanceId: string;
}
export interface DescribeCampaignRequest {
  id: string;
}
export interface DescribeCampaignResponse {
  campaign?: Campaign;
}
export type DestinationPhoneNumber = string;

export type DialerConfig =
  | { progressiveDialerConfig: ProgressiveDialerConfig }
  | { predictiveDialerConfig: PredictiveDialerConfig }
  | { agentlessDialerConfig: AgentlessDialerConfig };
export type DialingCapacity = number;

export interface DialRequest {
  clientToken: string;
  phoneNumber: string;
  expirationTime: Date | string;
  attributes: Record<string, string>;
}
export type DialRequestId = string;

export type DialRequestList = Array<DialRequest>;
export type Enabled = boolean;

export interface EncryptionConfig {
  enabled: boolean;
  encryptionType?: string;
  keyArn?: string;
}
export type EncryptionKey = string;

export type EncryptionType = string;

export interface FailedCampaignStateResponse {
  campaignId?: string;
  failureCode?: string;
}
export type FailedCampaignStateResponseList =
  Array<FailedCampaignStateResponse>;
export interface FailedRequest {
  clientToken?: string;
  id?: string;
  failureCode?: string;
}
export type FailedRequestList = Array<FailedRequest>;
export type FailureCode = string;

export type GetCampaignStateBatchFailureCode = string;

export interface GetCampaignStateBatchRequest {
  campaignIds: Array<string>;
}
export interface GetCampaignStateBatchResponse {
  successfulRequests?: Array<SuccessfulCampaignStateResponse>;
  failedRequests?: Array<FailedCampaignStateResponse>;
}
export interface GetCampaignStateRequest {
  id: string;
}
export interface GetCampaignStateResponse {
  state?: string;
}
export interface GetConnectInstanceConfigRequest {
  connectInstanceId: string;
}
export interface GetConnectInstanceConfigResponse {
  connectInstanceConfig?: InstanceConfig;
}
export interface GetInstanceOnboardingJobStatusRequest {
  connectInstanceId: string;
}
export interface GetInstanceOnboardingJobStatusResponse {
  connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus;
}
export interface InstanceConfig {
  connectInstanceId: string;
  serviceLinkedRoleArn: string;
  encryptionConfig: EncryptionConfig;
}
export type InstanceId = string;

export interface InstanceIdFilter {
  value: string;
  operator: string;
}
export type InstanceIdFilterOperator = string;

export type InstanceOnboardingJobFailureCode = string;

export interface InstanceOnboardingJobStatus {
  connectInstanceId: string;
  status: string;
  failureCode?: string;
}
export type InstanceOnboardingJobStatusCode = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export declare class InvalidCampaignStateException extends EffectData.TaggedError(
  "InvalidCampaignStateException",
)<{
  readonly state: string;
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export declare class InvalidStateException extends EffectData.TaggedError(
  "InvalidStateException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export interface ListCampaignsRequest {
  maxResults?: number;
  nextToken?: string;
  filters?: CampaignFilters;
}
export interface ListCampaignsResponse {
  nextToken?: string;
  campaignSummaryList?: Array<CampaignSummary>;
}
export interface ListTagsForResourceRequest {
  arn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MaxResults = number;

export type NextToken = string;

export interface OutboundCallConfig {
  connectContactFlowId: string;
  connectSourcePhoneNumber?: string;
  connectQueueId?: string;
  answerMachineDetectionConfig?: AnswerMachineDetectionConfig;
}
export interface PauseCampaignRequest {
  id: string;
}
export interface PredictiveDialerConfig {
  bandwidthAllocation: number;
  dialingCapacity?: number;
}
export interface ProgressiveDialerConfig {
  bandwidthAllocation: number;
  dialingCapacity?: number;
}
export interface PutDialRequestBatchRequest {
  id: string;
  dialRequests: Array<DialRequest>;
}
export interface PutDialRequestBatchResponse {
  successfulRequests?: Array<SuccessfulRequest>;
  failedRequests?: Array<FailedRequest>;
}
export type QueueId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export interface ResumeCampaignRequest {
  id: string;
}
export type ServiceLinkedRoleArn = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export type SourcePhoneNumber = string;

export interface StartCampaignRequest {
  id: string;
}
export interface StartInstanceOnboardingJobRequest {
  connectInstanceId: string;
  encryptionConfig: EncryptionConfig;
}
export interface StartInstanceOnboardingJobResponse {
  connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus;
}
export interface StopCampaignRequest {
  id: string;
}
export interface SuccessfulCampaignStateResponse {
  campaignId?: string;
  state?: string;
}
export type SuccessfulCampaignStateResponseList =
  Array<SuccessfulCampaignStateResponse>;
export interface SuccessfulRequest {
  clientToken?: string;
  id?: string;
}
export type SuccessfulRequestList = Array<SuccessfulRequest>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  arn: string;
  tags: Record<string, string>;
}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export type TimeStamp = Date | string;

export interface UntagResourceRequest {
  arn: string;
  tagKeys: Array<string>;
}
export interface UpdateCampaignDialerConfigRequest {
  id: string;
  dialerConfig: DialerConfig;
}
export interface UpdateCampaignNameRequest {
  id: string;
  name: string;
}
export interface UpdateCampaignOutboundCallConfigRequest {
  id: string;
  connectContactFlowId?: string;
  connectSourcePhoneNumber?: string;
  answerMachineDetectionConfig?: AnswerMachineDetectionConfig;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export type XAmazonErrorType = string;

export declare namespace CreateCampaign {
  export type Input = CreateCampaignRequest;
  export type Output = CreateCampaignResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCampaign {
  export type Input = DeleteCampaignRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConnectInstanceConfig {
  export type Input = DeleteConnectInstanceConfigRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInstanceOnboardingJob {
  export type Input = DeleteInstanceOnboardingJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeCampaign {
  export type Input = DescribeCampaignRequest;
  export type Output = DescribeCampaignResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCampaignState {
  export type Input = GetCampaignStateRequest;
  export type Output = GetCampaignStateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCampaignStateBatch {
  export type Input = GetCampaignStateBatchRequest;
  export type Output = GetCampaignStateBatchResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConnectInstanceConfig {
  export type Input = GetConnectInstanceConfigRequest;
  export type Output = GetConnectInstanceConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInstanceOnboardingJobStatus {
  export type Input = GetInstanceOnboardingJobStatusRequest;
  export type Output = GetInstanceOnboardingJobStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCampaigns {
  export type Input = ListCampaignsRequest;
  export type Output = ListCampaignsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
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
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PauseCampaign {
  export type Input = PauseCampaignRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutDialRequestBatch {
  export type Input = PutDialRequestBatchRequest;
  export type Output = PutDialRequestBatchResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResumeCampaign {
  export type Input = ResumeCampaignRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartCampaign {
  export type Input = StartCampaignRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartInstanceOnboardingJob {
  export type Input = StartInstanceOnboardingJobRequest;
  export type Output = StartInstanceOnboardingJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopCampaign {
  export type Input = StopCampaignRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCampaignDialerConfig {
  export type Input = UpdateCampaignDialerConfigRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCampaignName {
  export type Input = UpdateCampaignNameRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCampaignOutboundCallConfig {
  export type Input = UpdateCampaignOutboundCallConfigRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
