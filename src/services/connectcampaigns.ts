import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmazonConnectCampaignService {
  createCampaign(
    input: CreateCampaignRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCampaign(
    input: DeleteCampaignRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteConnectInstanceConfig(
    input: DeleteConnectInstanceConfigRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidStateException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteInstanceOnboardingJob(
    input: DeleteInstanceOnboardingJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidStateException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeCampaign(
    input: DescribeCampaignRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getCampaignState(
    input: GetCampaignStateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCampaignStateBatch(
    input: GetCampaignStateBatchRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getConnectInstanceConfig(
    input: GetConnectInstanceConfigRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getInstanceOnboardingJobStatus(
    input: GetInstanceOnboardingJobStatusRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listCampaigns(
    input: ListCampaignsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  pauseCampaign(
    input: PauseCampaignRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidCampaignStateException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putDialRequestBatch(
    input: PutDialRequestBatchRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidCampaignStateException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  resumeCampaign(
    input: ResumeCampaignRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidCampaignStateException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startCampaign(
    input: StartCampaignRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidCampaignStateException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startInstanceOnboardingJob(
    input: StartInstanceOnboardingJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  stopCampaign(
    input: StopCampaignRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidCampaignStateException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateCampaignDialerConfig(
    input: UpdateCampaignDialerConfigRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateCampaignName(
    input: UpdateCampaignNameRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateCampaignOutboundCallConfig(
    input: UpdateCampaignOutboundCallConfigRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type Connectcampaigns = AmazonConnectCampaignService;

export interface AccessDeniedException {
}
export interface AgentlessDialerConfig {
}
export interface AnswerMachineDetectionConfig {
}
export type Arn = string;

export type AttributeName = string;

export type Attributes = Record<string, unknown>;
export type AttributeValue = string;

export type BandwidthAllocation = number;

export interface Campaign {
}
export type CampaignArn = string;

export interface CampaignFilters {
}
export type CampaignId = string;

export type CampaignIdList = Array<unknown>;
export type CampaignName = string;

export type CampaignState = string;

export interface CampaignSummary {
}
export type CampaignSummaryList = Array<unknown>;
export type ClientToken = string;

export interface ConflictException {
}
export type ContactFlowId = string;

export interface CreateCampaignRequest {
}
export interface CreateCampaignResponse {
}
export interface DeleteCampaignRequest {
}
export interface DeleteConnectInstanceConfigRequest {
}
export interface DeleteInstanceOnboardingJobRequest {
}
export interface DescribeCampaignRequest {
}
export interface DescribeCampaignResponse {
}
export type DestinationPhoneNumber = string;

export type DialerConfig = never;
export type DialingCapacity = number;

export interface DialRequest {
}
export type DialRequestId = string;

export type DialRequestList = Array<unknown>;
export type Enabled = boolean;

export interface EncryptionConfig {
}
export type EncryptionKey = string;

export type EncryptionType = string;

export interface FailedCampaignStateResponse {
}
export type FailedCampaignStateResponseList = Array<unknown>;
export interface FailedRequest {
}
export type FailedRequestList = Array<unknown>;
export type FailureCode = string;

export type GetCampaignStateBatchFailureCode = string;

export interface GetCampaignStateBatchRequest {
}
export interface GetCampaignStateBatchResponse {
}
export interface GetCampaignStateRequest {
}
export interface GetCampaignStateResponse {
}
export interface GetConnectInstanceConfigRequest {
}
export interface GetConnectInstanceConfigResponse {
}
export interface GetInstanceOnboardingJobStatusRequest {
}
export interface GetInstanceOnboardingJobStatusResponse {
}
export interface InstanceConfig {
}
export type InstanceId = string;

export interface InstanceIdFilter {
}
export type InstanceIdFilterOperator = string;

export type InstanceOnboardingJobFailureCode = string;

export interface InstanceOnboardingJobStatus {
}
export type InstanceOnboardingJobStatusCode = string;

export interface InternalServerException {
}
export interface InvalidCampaignStateException {
}
export interface InvalidStateException {
}
export interface ListCampaignsRequest {
}
export interface ListCampaignsResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type MaxResults = number;

export type NextToken = string;

export interface OutboundCallConfig {
}
export interface PauseCampaignRequest {
}
export interface PredictiveDialerConfig {
}
export interface ProgressiveDialerConfig {
}
export interface PutDialRequestBatchRequest {
}
export interface PutDialRequestBatchResponse {
}
export type QueueId = string;

export interface ResourceNotFoundException {
}
export interface ResumeCampaignRequest {
}
export type ServiceLinkedRoleArn = string;

export interface ServiceQuotaExceededException {
}
export type SourcePhoneNumber = string;

export interface StartCampaignRequest {
}
export interface StartInstanceOnboardingJobRequest {
}
export interface StartInstanceOnboardingJobResponse {
}
export interface StopCampaignRequest {
}
export interface SuccessfulCampaignStateResponse {
}
export type SuccessfulCampaignStateResponseList = Array<unknown>;
export interface SuccessfulRequest {
}
export type SuccessfulRequestList = Array<unknown>;
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagMap = Record<string, unknown>;
export interface TagResourceRequest {
}
export type TagValue = string;

export interface ThrottlingException {
}
export type TimeStamp = Date | string;

export interface UntagResourceRequest {
}
export interface UpdateCampaignDialerConfigRequest {
}
export interface UpdateCampaignNameRequest {
}
export interface UpdateCampaignOutboundCallConfigRequest {
}
export interface ValidationException {
}
export type XAmazonErrorType = string;

export declare namespace CreateCampaign {
  export type Input = CreateCampaignRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCampaignState {
  export type Input = GetCampaignStateRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConnectInstanceConfig {
  export type Input = GetConnectInstanceConfigRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInstanceOnboardingJobStatus {
  export type Input = GetInstanceOnboardingJobStatusRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCampaigns {
  export type Input = ListCampaignsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
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

