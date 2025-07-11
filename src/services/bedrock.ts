import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class Bedrock extends AWSServiceClient {
  batchDeleteEvaluationJob(
    input: BatchDeleteEvaluationJobRequest,
  ): Effect.Effect<
    BatchDeleteEvaluationJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createCustomModel(
    input: CreateCustomModelRequest,
  ): Effect.Effect<
    CreateCustomModelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  createEvaluationJob(
    input: CreateEvaluationJobRequest,
  ): Effect.Effect<
    CreateEvaluationJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createFoundationModelAgreement(
    input: CreateFoundationModelAgreementRequest,
  ): Effect.Effect<
    CreateFoundationModelAgreementResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createGuardrail(
    input: CreateGuardrailRequest,
  ): Effect.Effect<
    CreateGuardrailResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  createGuardrailVersion(
    input: CreateGuardrailVersionRequest,
  ): Effect.Effect<
    CreateGuardrailVersionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createInferenceProfile(
    input: CreateInferenceProfileRequest,
  ): Effect.Effect<
    CreateInferenceProfileResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  createMarketplaceModelEndpoint(
    input: CreateMarketplaceModelEndpointRequest,
  ): Effect.Effect<
    CreateMarketplaceModelEndpointResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createModelCopyJob(
    input: CreateModelCopyJobRequest,
  ): Effect.Effect<
    CreateModelCopyJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  createModelCustomizationJob(
    input: CreateModelCustomizationJobRequest,
  ): Effect.Effect<
    CreateModelCustomizationJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  createModelImportJob(
    input: CreateModelImportJobRequest,
  ): Effect.Effect<
    CreateModelImportJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  createModelInvocationJob(
    input: CreateModelInvocationJobRequest,
  ): Effect.Effect<
    CreateModelInvocationJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createPromptRouter(
    input: CreatePromptRouterRequest,
  ): Effect.Effect<
    CreatePromptRouterResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  createProvisionedModelThroughput(
    input: CreateProvisionedModelThroughputRequest,
  ): Effect.Effect<
    CreateProvisionedModelThroughputResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  deleteCustomModel(
    input: DeleteCustomModelRequest,
  ): Effect.Effect<
    DeleteCustomModelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteFoundationModelAgreement(
    input: DeleteFoundationModelAgreementRequest,
  ): Effect.Effect<
    DeleteFoundationModelAgreementResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteGuardrail(
    input: DeleteGuardrailRequest,
  ): Effect.Effect<
    DeleteGuardrailResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteImportedModel(
    input: DeleteImportedModelRequest,
  ): Effect.Effect<
    DeleteImportedModelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteInferenceProfile(
    input: DeleteInferenceProfileRequest,
  ): Effect.Effect<
    DeleteInferenceProfileResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteMarketplaceModelEndpoint(
    input: DeleteMarketplaceModelEndpointRequest,
  ): Effect.Effect<
    DeleteMarketplaceModelEndpointResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteModelInvocationLoggingConfiguration(
    input: DeleteModelInvocationLoggingConfigurationRequest,
  ): Effect.Effect<
    DeleteModelInvocationLoggingConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError
  >;
  deletePromptRouter(
    input: DeletePromptRouterRequest,
  ): Effect.Effect<
    DeletePromptRouterResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteProvisionedModelThroughput(
    input: DeleteProvisionedModelThroughputRequest,
  ): Effect.Effect<
    DeleteProvisionedModelThroughputResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deregisterMarketplaceModelEndpoint(
    input: DeregisterMarketplaceModelEndpointRequest,
  ): Effect.Effect<
    DeregisterMarketplaceModelEndpointResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCustomModel(
    input: GetCustomModelRequest,
  ): Effect.Effect<
    GetCustomModelResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEvaluationJob(
    input: GetEvaluationJobRequest,
  ): Effect.Effect<
    GetEvaluationJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getFoundationModel(
    input: GetFoundationModelRequest,
  ): Effect.Effect<
    GetFoundationModelResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getFoundationModelAvailability(
    input: GetFoundationModelAvailabilityRequest,
  ): Effect.Effect<
    GetFoundationModelAvailabilityResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getGuardrail(
    input: GetGuardrailRequest,
  ): Effect.Effect<
    GetGuardrailResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getImportedModel(
    input: GetImportedModelRequest,
  ): Effect.Effect<
    GetImportedModelResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getInferenceProfile(
    input: GetInferenceProfileRequest,
  ): Effect.Effect<
    GetInferenceProfileResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMarketplaceModelEndpoint(
    input: GetMarketplaceModelEndpointRequest,
  ): Effect.Effect<
    GetMarketplaceModelEndpointResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getModelCopyJob(
    input: GetModelCopyJobRequest,
  ): Effect.Effect<
    GetModelCopyJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getModelCustomizationJob(
    input: GetModelCustomizationJobRequest,
  ): Effect.Effect<
    GetModelCustomizationJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getModelImportJob(
    input: GetModelImportJobRequest,
  ): Effect.Effect<
    GetModelImportJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getModelInvocationJob(
    input: GetModelInvocationJobRequest,
  ): Effect.Effect<
    GetModelInvocationJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getModelInvocationLoggingConfiguration(
    input: GetModelInvocationLoggingConfigurationRequest,
  ): Effect.Effect<
    GetModelInvocationLoggingConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError
  >;
  getPromptRouter(
    input: GetPromptRouterRequest,
  ): Effect.Effect<
    GetPromptRouterResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getProvisionedModelThroughput(
    input: GetProvisionedModelThroughputRequest,
  ): Effect.Effect<
    GetProvisionedModelThroughputResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getUseCaseForModelAccess(
    input: GetUseCaseForModelAccessRequest,
  ): Effect.Effect<
    GetUseCaseForModelAccessResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCustomModels(
    input: ListCustomModelsRequest,
  ): Effect.Effect<
    ListCustomModelsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEvaluationJobs(
    input: ListEvaluationJobsRequest,
  ): Effect.Effect<
    ListEvaluationJobsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFoundationModelAgreementOffers(
    input: ListFoundationModelAgreementOffersRequest,
  ): Effect.Effect<
    ListFoundationModelAgreementOffersResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFoundationModels(
    input: ListFoundationModelsRequest,
  ): Effect.Effect<
    ListFoundationModelsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listGuardrails(
    input: ListGuardrailsRequest,
  ): Effect.Effect<
    ListGuardrailsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listImportedModels(
    input: ListImportedModelsRequest,
  ): Effect.Effect<
    ListImportedModelsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInferenceProfiles(
    input: ListInferenceProfilesRequest,
  ): Effect.Effect<
    ListInferenceProfilesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listMarketplaceModelEndpoints(
    input: ListMarketplaceModelEndpointsRequest,
  ): Effect.Effect<
    ListMarketplaceModelEndpointsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listModelCopyJobs(
    input: ListModelCopyJobsRequest,
  ): Effect.Effect<
    ListModelCopyJobsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listModelCustomizationJobs(
    input: ListModelCustomizationJobsRequest,
  ): Effect.Effect<
    ListModelCustomizationJobsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listModelImportJobs(
    input: ListModelImportJobsRequest,
  ): Effect.Effect<
    ListModelImportJobsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listModelInvocationJobs(
    input: ListModelInvocationJobsRequest,
  ): Effect.Effect<
    ListModelInvocationJobsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPromptRouters(
    input: ListPromptRoutersRequest,
  ): Effect.Effect<
    ListPromptRoutersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProvisionedModelThroughputs(
    input: ListProvisionedModelThroughputsRequest,
  ): Effect.Effect<
    ListProvisionedModelThroughputsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
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
  putModelInvocationLoggingConfiguration(
    input: PutModelInvocationLoggingConfigurationRequest,
  ): Effect.Effect<
    PutModelInvocationLoggingConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putUseCaseForModelAccess(
    input: PutUseCaseForModelAccessRequest,
  ): Effect.Effect<
    PutUseCaseForModelAccessResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  registerMarketplaceModelEndpoint(
    input: RegisterMarketplaceModelEndpointRequest,
  ): Effect.Effect<
    RegisterMarketplaceModelEndpointResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopEvaluationJob(
    input: StopEvaluationJobRequest,
  ): Effect.Effect<
    StopEvaluationJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopModelCustomizationJob(
    input: StopModelCustomizationJobRequest,
  ): Effect.Effect<
    StopModelCustomizationJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopModelInvocationJob(
    input: StopModelInvocationJobRequest,
  ): Effect.Effect<
    StopModelInvocationJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateGuardrail(
    input: UpdateGuardrailRequest,
  ): Effect.Effect<
    UpdateGuardrailResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateMarketplaceModelEndpoint(
    input: UpdateMarketplaceModelEndpointRequest,
  ): Effect.Effect<
    UpdateMarketplaceModelEndpointResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateProvisionedModelThroughput(
    input: UpdateProvisionedModelThroughputRequest,
  ): Effect.Effect<
    UpdateProvisionedModelThroughputResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type AcceptEula = boolean;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AccountId = string;

export type AcknowledgementFormDataBody = Uint8Array | string;

export type AdditionalModelRequestFields = Record<string, unknown>;
export type AdditionalModelRequestFieldsKey = string;

export type AdditionalModelRequestFieldsValue = unknown;

export interface AgreementAvailability {
  status: AgreementStatus;
  errorMessage?: string;
}
export type AgreementStatus =
  | "AVAILABLE"
  | "PENDING"
  | "NOT_AVAILABLE"
  | "ERROR";
export type ApplicationType = "MODEL_EVALUATION" | "RAG_EVALUATION";
export type Arn = string;

export type AttributeType = "STRING" | "NUMBER" | "BOOLEAN" | "STRING_LIST";
export type AuthorizationStatus = "AUTHORIZED" | "NOT_AUTHORIZED";
export interface AutomatedEvaluationConfig {
  datasetMetricConfigs: Array<EvaluationDatasetMetricConfig>;
  evaluatorModelConfig?: EvaluatorModelConfig;
  customMetricConfig?: AutomatedEvaluationCustomMetricConfig;
}
export interface AutomatedEvaluationCustomMetricConfig {
  customMetrics: Array<AutomatedEvaluationCustomMetricSource>;
  evaluatorModelConfig: CustomMetricEvaluatorModelConfig;
}
export type AutomatedEvaluationCustomMetrics =
  Array<AutomatedEvaluationCustomMetricSource>;
interface _AutomatedEvaluationCustomMetricSource {
  customMetricDefinition?: CustomMetricDefinition;
}

export type AutomatedEvaluationCustomMetricSource =
  _AutomatedEvaluationCustomMetricSource & {
    customMetricDefinition: CustomMetricDefinition;
  };
export type BaseModelIdentifier = string;

export interface BatchDeleteEvaluationJobError {
  jobIdentifier: string;
  code: string;
  message?: string;
}
export type BatchDeleteEvaluationJobErrors =
  Array<BatchDeleteEvaluationJobError>;
export interface BatchDeleteEvaluationJobItem {
  jobIdentifier: string;
  jobStatus: EvaluationJobStatus;
}
export type BatchDeleteEvaluationJobItems = Array<BatchDeleteEvaluationJobItem>;
export interface BatchDeleteEvaluationJobRequest {
  jobIdentifiers: Array<string>;
}
export interface BatchDeleteEvaluationJobResponse {
  errors: Array<BatchDeleteEvaluationJobError>;
  evaluationJobs: Array<BatchDeleteEvaluationJobItem>;
}
export interface BedrockEvaluatorModel {
  modelIdentifier: string;
}
export type BedrockEvaluatorModels = Array<BedrockEvaluatorModel>;
export type BedrockModelArn = string;

export type BedrockModelId = string;

export type BedrockRerankingModelArn = string;

export type BrandedName = string;

export type BucketName = string;

export type ByteContentBlob = Uint8Array | string;

export interface ByteContentDoc {
  identifier: string;
  contentType: string;
  data: Uint8Array | string;
}
export interface CloudWatchConfig {
  logGroupName: string;
  roleArn: string;
  largeDataDeliveryS3Config?: S3Config;
}
export type CommitmentDuration = "ONE_MONTH" | "SIX_MONTHS";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ContentType = string;

export interface CreateCustomModelRequest {
  modelName: string;
  modelSourceConfig: ModelDataSource;
  modelKmsKeyArn?: string;
  roleArn?: string;
  modelTags?: Array<Tag>;
  clientRequestToken?: string;
}
export interface CreateCustomModelResponse {
  modelArn: string;
}
export interface CreateEvaluationJobRequest {
  jobName: string;
  jobDescription?: string;
  clientRequestToken?: string;
  roleArn: string;
  customerEncryptionKeyId?: string;
  jobTags?: Array<Tag>;
  applicationType?: ApplicationType;
  evaluationConfig: EvaluationConfig;
  inferenceConfig: EvaluationInferenceConfig;
  outputDataConfig: EvaluationOutputDataConfig;
}
export interface CreateEvaluationJobResponse {
  jobArn: string;
}
export interface CreateFoundationModelAgreementRequest {
  offerToken: string;
  modelId: string;
}
export interface CreateFoundationModelAgreementResponse {
  modelId: string;
}
export interface CreateGuardrailRequest {
  name: string;
  description?: string;
  topicPolicyConfig?: GuardrailTopicPolicyConfig;
  contentPolicyConfig?: GuardrailContentPolicyConfig;
  wordPolicyConfig?: GuardrailWordPolicyConfig;
  sensitiveInformationPolicyConfig?: GuardrailSensitiveInformationPolicyConfig;
  contextualGroundingPolicyConfig?: GuardrailContextualGroundingPolicyConfig;
  crossRegionConfig?: GuardrailCrossRegionConfig;
  blockedInputMessaging: string;
  blockedOutputsMessaging: string;
  kmsKeyId?: string;
  tags?: Array<Tag>;
  clientRequestToken?: string;
}
export interface CreateGuardrailResponse {
  guardrailId: string;
  guardrailArn: string;
  version: string;
  createdAt: Date | string;
}
export interface CreateGuardrailVersionRequest {
  guardrailIdentifier: string;
  description?: string;
  clientRequestToken?: string;
}
export interface CreateGuardrailVersionResponse {
  guardrailId: string;
  version: string;
}
export interface CreateInferenceProfileRequest {
  inferenceProfileName: string;
  description?: string;
  clientRequestToken?: string;
  modelSource: InferenceProfileModelSource;
  tags?: Array<Tag>;
}
export interface CreateInferenceProfileResponse {
  inferenceProfileArn: string;
  status?: InferenceProfileStatus;
}
export interface CreateMarketplaceModelEndpointRequest {
  modelSourceIdentifier: string;
  endpointConfig: EndpointConfig;
  acceptEula?: boolean;
  endpointName: string;
  clientRequestToken?: string;
  tags?: Array<Tag>;
}
export interface CreateMarketplaceModelEndpointResponse {
  marketplaceModelEndpoint: MarketplaceModelEndpoint;
}
export interface CreateModelCopyJobRequest {
  sourceModelArn: string;
  targetModelName: string;
  modelKmsKeyId?: string;
  targetModelTags?: Array<Tag>;
  clientRequestToken?: string;
}
export interface CreateModelCopyJobResponse {
  jobArn: string;
}
export interface CreateModelCustomizationJobRequest {
  jobName: string;
  customModelName: string;
  roleArn: string;
  clientRequestToken?: string;
  baseModelIdentifier: string;
  customizationType?: CustomizationType;
  customModelKmsKeyId?: string;
  jobTags?: Array<Tag>;
  customModelTags?: Array<Tag>;
  trainingDataConfig: TrainingDataConfig;
  validationDataConfig?: ValidationDataConfig;
  outputDataConfig: OutputDataConfig;
  hyperParameters?: Record<string, string>;
  vpcConfig?: VpcConfig;
  customizationConfig?: CustomizationConfig;
}
export interface CreateModelCustomizationJobResponse {
  jobArn: string;
}
export interface CreateModelImportJobRequest {
  jobName: string;
  importedModelName: string;
  roleArn: string;
  modelDataSource: ModelDataSource;
  jobTags?: Array<Tag>;
  importedModelTags?: Array<Tag>;
  clientRequestToken?: string;
  vpcConfig?: VpcConfig;
  importedModelKmsKeyId?: string;
}
export interface CreateModelImportJobResponse {
  jobArn: string;
}
export interface CreateModelInvocationJobRequest {
  jobName: string;
  roleArn: string;
  clientRequestToken?: string;
  modelId: string;
  inputDataConfig: ModelInvocationJobInputDataConfig;
  outputDataConfig: ModelInvocationJobOutputDataConfig;
  vpcConfig?: VpcConfig;
  timeoutDurationInHours?: number;
  tags?: Array<Tag>;
}
export interface CreateModelInvocationJobResponse {
  jobArn: string;
}
export interface CreatePromptRouterRequest {
  clientRequestToken?: string;
  promptRouterName: string;
  models: Array<PromptRouterTargetModel>;
  description?: string;
  routingCriteria: RoutingCriteria;
  fallbackModel: PromptRouterTargetModel;
  tags?: Array<Tag>;
}
export interface CreatePromptRouterResponse {
  promptRouterArn?: string;
}
export interface CreateProvisionedModelThroughputRequest {
  clientRequestToken?: string;
  modelUnits: number;
  provisionedModelName: string;
  modelId: string;
  commitmentDuration?: CommitmentDuration;
  tags?: Array<Tag>;
}
export interface CreateProvisionedModelThroughputResponse {
  provisionedModelArn: string;
}
interface _CustomizationConfig {
  distillationConfig?: DistillationConfig;
}

export type CustomizationConfig = _CustomizationConfig & {
  distillationConfig: DistillationConfig;
};
export type CustomizationType =
  | "FINE_TUNING"
  | "CONTINUED_PRE_TRAINING"
  | "DISTILLATION"
  | "IMPORTED";
export interface CustomMetricBedrockEvaluatorModel {
  modelIdentifier: string;
}
export type CustomMetricBedrockEvaluatorModels =
  Array<CustomMetricBedrockEvaluatorModel>;
export interface CustomMetricDefinition {
  name: string;
  instructions: string;
  ratingScale?: Array<RatingScaleItem>;
}
export interface CustomMetricEvaluatorModelConfig {
  bedrockEvaluatorModels: Array<CustomMetricBedrockEvaluatorModel>;
}
export type CustomMetricInstructions = string;

export type CustomModelArn = string;

export type CustomModelName = string;

export interface CustomModelSummary {
  modelArn: string;
  modelName: string;
  creationTime: Date | string;
  baseModelArn: string;
  baseModelName: string;
  customizationType?: CustomizationType;
  ownerAccountId?: string;
  modelStatus?: ModelStatus;
}
export type CustomModelSummaryList = Array<CustomModelSummary>;
export interface CustomModelUnits {
  customModelUnitsPerModelCopy?: number;
  customModelUnitsVersion?: string;
}
export type CustomModelUnitsVersion = string;

export interface DataProcessingDetails {
  status?: JobStatusDetails;
  creationTime?: Date | string;
  lastModifiedTime?: Date | string;
}
export interface DeleteCustomModelRequest {
  modelIdentifier: string;
}
export interface DeleteCustomModelResponse {}
export interface DeleteFoundationModelAgreementRequest {
  modelId: string;
}
export interface DeleteFoundationModelAgreementResponse {}
export interface DeleteGuardrailRequest {
  guardrailIdentifier: string;
  guardrailVersion?: string;
}
export interface DeleteGuardrailResponse {}
export interface DeleteImportedModelRequest {
  modelIdentifier: string;
}
export interface DeleteImportedModelResponse {}
export interface DeleteInferenceProfileRequest {
  inferenceProfileIdentifier: string;
}
export interface DeleteInferenceProfileResponse {}
export interface DeleteMarketplaceModelEndpointRequest {
  endpointArn: string;
}
export interface DeleteMarketplaceModelEndpointResponse {}
export interface DeleteModelInvocationLoggingConfigurationRequest {}
export interface DeleteModelInvocationLoggingConfigurationResponse {}
export interface DeletePromptRouterRequest {
  promptRouterArn: string;
}
export interface DeletePromptRouterResponse {}
export interface DeleteProvisionedModelThroughputRequest {
  provisionedModelId: string;
}
export interface DeleteProvisionedModelThroughputResponse {}
export interface DeregisterMarketplaceModelEndpointRequest {
  endpointArn: string;
}
export interface DeregisterMarketplaceModelEndpointResponse {}
export interface DimensionalPriceRate {
  dimension?: string;
  price?: string;
  description?: string;
  unit?: string;
}
export interface DistillationConfig {
  teacherModelConfig: TeacherModelConfig;
}
interface _EndpointConfig {
  sageMaker?: SageMakerEndpoint;
}

export type EndpointConfig = _EndpointConfig & { sageMaker: SageMakerEndpoint };
export type EndpointName = string;

export type EntitlementAvailability = "AVAILABLE" | "NOT_AVAILABLE";
export type ErrorMessage = string;

export type ErrorMessages = Array<string>;
export type EvaluationBedrockKnowledgeBaseIdentifiers = Array<string>;
export interface EvaluationBedrockModel {
  modelIdentifier: string;
  inferenceParams?: string;
  performanceConfig?: PerformanceConfiguration;
}
export type EvaluationBedrockModelIdentifier = string;

export type EvaluationBedrockModelIdentifiers = Array<string>;
interface _EvaluationConfig {
  automated?: AutomatedEvaluationConfig;
  human?: HumanEvaluationConfig;
}

export type EvaluationConfig =
  | (_EvaluationConfig & { automated: AutomatedEvaluationConfig })
  | (_EvaluationConfig & { human: HumanEvaluationConfig });
export interface EvaluationDataset {
  name: string;
  datasetLocation?: EvaluationDatasetLocation;
}
interface _EvaluationDatasetLocation {
  s3Uri?: string;
}

export type EvaluationDatasetLocation = _EvaluationDatasetLocation & {
  s3Uri: string;
};
export interface EvaluationDatasetMetricConfig {
  taskType: EvaluationTaskType;
  dataset: EvaluationDataset;
  metricNames: Array<string>;
}
export type EvaluationDatasetMetricConfigs =
  Array<EvaluationDatasetMetricConfig>;
export type EvaluationDatasetName = string;

interface _EvaluationInferenceConfig {
  models?: Array<EvaluationModelConfig>;
  ragConfigs?: Array<RAGConfig>;
}

export type EvaluationInferenceConfig =
  | (_EvaluationInferenceConfig & { models: Array<EvaluationModelConfig> })
  | (_EvaluationInferenceConfig & { ragConfigs: Array<RAGConfig> });
export interface EvaluationInferenceConfigSummary {
  modelConfigSummary?: EvaluationModelConfigSummary;
  ragConfigSummary?: EvaluationRagConfigSummary;
}
export type EvaluationJobArn = string;

export type EvaluationJobDescription = string;

export type EvaluationJobIdentifier = string;

export type EvaluationJobIdentifiers = Array<string>;
export type EvaluationJobName = string;

export type EvaluationJobStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "STOPPING"
  | "STOPPED"
  | "DELETING";
export type EvaluationJobType = "HUMAN" | "AUTOMATED";
export type EvaluationMetricDescription = string;

export type EvaluationMetricName = string;

export type EvaluationMetricNames = Array<string>;
interface _EvaluationModelConfig {
  bedrockModel?: EvaluationBedrockModel;
  precomputedInferenceSource?: EvaluationPrecomputedInferenceSource;
}

export type EvaluationModelConfig =
  | (_EvaluationModelConfig & { bedrockModel: EvaluationBedrockModel })
  | (_EvaluationModelConfig & {
      precomputedInferenceSource: EvaluationPrecomputedInferenceSource;
    });
export type EvaluationModelConfigs = Array<EvaluationModelConfig>;
export interface EvaluationModelConfigSummary {
  bedrockModelIdentifiers?: Array<string>;
  precomputedInferenceSourceIdentifiers?: Array<string>;
}
export type EvaluationModelInferenceParams = string;

export interface EvaluationOutputDataConfig {
  s3Uri: string;
}
export interface EvaluationPrecomputedInferenceSource {
  inferenceSourceIdentifier: string;
}
export type EvaluationPrecomputedInferenceSourceIdentifier = string;

export type EvaluationPrecomputedInferenceSourceIdentifiers = Array<string>;
interface _EvaluationPrecomputedRagSourceConfig {
  retrieveSourceConfig?: EvaluationPrecomputedRetrieveSourceConfig;
  retrieveAndGenerateSourceConfig?: EvaluationPrecomputedRetrieveAndGenerateSourceConfig;
}

export type EvaluationPrecomputedRagSourceConfig =
  | (_EvaluationPrecomputedRagSourceConfig & {
      retrieveSourceConfig: EvaluationPrecomputedRetrieveSourceConfig;
    })
  | (_EvaluationPrecomputedRagSourceConfig & {
      retrieveAndGenerateSourceConfig: EvaluationPrecomputedRetrieveAndGenerateSourceConfig;
    });
export type EvaluationPrecomputedRagSourceIdentifier = string;

export type EvaluationPrecomputedRagSourceIdentifiers = Array<string>;
export interface EvaluationPrecomputedRetrieveAndGenerateSourceConfig {
  ragSourceIdentifier: string;
}
export interface EvaluationPrecomputedRetrieveSourceConfig {
  ragSourceIdentifier: string;
}
export interface EvaluationRagConfigSummary {
  bedrockKnowledgeBaseIdentifiers?: Array<string>;
  precomputedRagSourceIdentifiers?: Array<string>;
}
export type EvaluationRatingMethod = string;

export type EvaluationSummaries = Array<EvaluationSummary>;
export interface EvaluationSummary {
  jobArn: string;
  jobName: string;
  status: EvaluationJobStatus;
  creationTime: Date | string;
  jobType: EvaluationJobType;
  evaluationTaskTypes: Array<EvaluationTaskType>;
  modelIdentifiers?: Array<string>;
  ragIdentifiers?: Array<string>;
  evaluatorModelIdentifiers?: Array<string>;
  customMetricsEvaluatorModelIdentifiers?: Array<string>;
  inferenceConfigSummary?: EvaluationInferenceConfigSummary;
  applicationType?: ApplicationType;
}
export type EvaluationTaskType =
  | "SUMMARIZATION"
  | "CLASSIFICATION"
  | "QUESTION_AND_ANSWER"
  | "GENERATION"
  | "CUSTOM";
export type EvaluationTaskTypes = Array<EvaluationTaskType>;
interface _EvaluatorModelConfig {
  bedrockEvaluatorModels?: Array<BedrockEvaluatorModel>;
}

export type EvaluatorModelConfig = _EvaluatorModelConfig & {
  bedrockEvaluatorModels: Array<BedrockEvaluatorModel>;
};
export type EvaluatorModelIdentifier = string;

export type EvaluatorModelIdentifiers = Array<string>;
export interface ExternalSource {
  sourceType: ExternalSourceType;
  s3Location?: S3ObjectDoc;
  byteContent?: ByteContentDoc;
}
export type ExternalSources = Array<ExternalSource>;
export interface ExternalSourcesGenerationConfiguration {
  promptTemplate?: PromptTemplate;
  guardrailConfiguration?: GuardrailConfiguration;
  kbInferenceConfig?: KbInferenceConfig;
  additionalModelRequestFields?: Record<string, unknown>;
}
export interface ExternalSourcesRetrieveAndGenerateConfiguration {
  modelArn: string;
  sources: Array<ExternalSource>;
  generationConfiguration?: ExternalSourcesGenerationConfiguration;
}
export type ExternalSourceType = "S3" | "BYTE_CONTENT";
export interface FieldForReranking {
  fieldName: string;
}
export type FieldsForReranking = Array<FieldForReranking>;
export interface FilterAttribute {
  key: string;
  value: unknown;
}
export type FilterKey = string;

export type FilterValue = unknown;

export type FineTuningJobStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "STOPPING"
  | "STOPPED";
export type FoundationModelArn = string;

export interface FoundationModelDetails {
  modelArn: string;
  modelId: string;
  modelName?: string;
  providerName?: string;
  inputModalities?: Array<ModelModality>;
  outputModalities?: Array<ModelModality>;
  responseStreamingSupported?: boolean;
  customizationsSupported?: Array<ModelCustomization>;
  inferenceTypesSupported?: Array<InferenceType>;
  modelLifecycle?: FoundationModelLifecycle;
}
export interface FoundationModelLifecycle {
  status: FoundationModelLifecycleStatus;
}
export type FoundationModelLifecycleStatus = "ACTIVE" | "LEGACY";
export interface FoundationModelSummary {
  modelArn: string;
  modelId: string;
  modelName?: string;
  providerName?: string;
  inputModalities?: Array<ModelModality>;
  outputModalities?: Array<ModelModality>;
  responseStreamingSupported?: boolean;
  customizationsSupported?: Array<ModelCustomization>;
  inferenceTypesSupported?: Array<InferenceType>;
  modelLifecycle?: FoundationModelLifecycle;
}
export type FoundationModelSummaryList = Array<FoundationModelSummary>;
export interface GenerationConfiguration {
  promptTemplate?: PromptTemplate;
  guardrailConfiguration?: GuardrailConfiguration;
  kbInferenceConfig?: KbInferenceConfig;
  additionalModelRequestFields?: Record<string, unknown>;
}
export interface GetCustomModelRequest {
  modelIdentifier: string;
}
export interface GetCustomModelResponse {
  modelArn: string;
  modelName: string;
  jobName?: string;
  jobArn?: string;
  baseModelArn?: string;
  customizationType?: CustomizationType;
  modelKmsKeyArn?: string;
  hyperParameters?: Record<string, string>;
  trainingDataConfig?: TrainingDataConfig;
  validationDataConfig?: ValidationDataConfig;
  outputDataConfig?: OutputDataConfig;
  trainingMetrics?: TrainingMetrics;
  validationMetrics?: Array<ValidatorMetric>;
  creationTime: Date | string;
  customizationConfig?: CustomizationConfig;
  modelStatus?: ModelStatus;
  failureMessage?: string;
}
export interface GetEvaluationJobRequest {
  jobIdentifier: string;
}
export interface GetEvaluationJobResponse {
  jobName: string;
  status: EvaluationJobStatus;
  jobArn: string;
  jobDescription?: string;
  roleArn: string;
  customerEncryptionKeyId?: string;
  jobType: EvaluationJobType;
  applicationType?: ApplicationType;
  evaluationConfig: EvaluationConfig;
  inferenceConfig: EvaluationInferenceConfig;
  outputDataConfig: EvaluationOutputDataConfig;
  creationTime: Date | string;
  lastModifiedTime?: Date | string;
  failureMessages?: Array<string>;
}
export interface GetFoundationModelAvailabilityRequest {
  modelId: string;
}
export interface GetFoundationModelAvailabilityResponse {
  modelId: string;
  agreementAvailability: AgreementAvailability;
  authorizationStatus: AuthorizationStatus;
  entitlementAvailability: EntitlementAvailability;
  regionAvailability: RegionAvailability;
}
export interface GetFoundationModelRequest {
  modelIdentifier: string;
}
export interface GetFoundationModelResponse {
  modelDetails?: FoundationModelDetails;
}
export interface GetGuardrailRequest {
  guardrailIdentifier: string;
  guardrailVersion?: string;
}
export interface GetGuardrailResponse {
  name: string;
  description?: string;
  guardrailId: string;
  guardrailArn: string;
  version: string;
  status: GuardrailStatus;
  topicPolicy?: GuardrailTopicPolicy;
  contentPolicy?: GuardrailContentPolicy;
  wordPolicy?: GuardrailWordPolicy;
  sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicy;
  contextualGroundingPolicy?: GuardrailContextualGroundingPolicy;
  crossRegionDetails?: GuardrailCrossRegionDetails;
  createdAt: Date | string;
  updatedAt: Date | string;
  statusReasons?: Array<string>;
  failureRecommendations?: Array<string>;
  blockedInputMessaging: string;
  blockedOutputsMessaging: string;
  kmsKeyArn?: string;
}
export interface GetImportedModelRequest {
  modelIdentifier: string;
}
export interface GetImportedModelResponse {
  modelArn?: string;
  modelName?: string;
  jobName?: string;
  jobArn?: string;
  modelDataSource?: ModelDataSource;
  creationTime?: Date | string;
  modelArchitecture?: string;
  modelKmsKeyArn?: string;
  instructSupported?: boolean;
  customModelUnits?: CustomModelUnits;
}
export interface GetInferenceProfileRequest {
  inferenceProfileIdentifier: string;
}
export interface GetInferenceProfileResponse {
  inferenceProfileName: string;
  description?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  inferenceProfileArn: string;
  models: Array<InferenceProfileModel>;
  inferenceProfileId: string;
  status: InferenceProfileStatus;
  type: InferenceProfileType;
}
export interface GetMarketplaceModelEndpointRequest {
  endpointArn: string;
}
export interface GetMarketplaceModelEndpointResponse {
  marketplaceModelEndpoint?: MarketplaceModelEndpoint;
}
export interface GetModelCopyJobRequest {
  jobArn: string;
}
export interface GetModelCopyJobResponse {
  jobArn: string;
  status: ModelCopyJobStatus;
  creationTime: Date | string;
  targetModelArn: string;
  targetModelName?: string;
  sourceAccountId: string;
  sourceModelArn: string;
  targetModelKmsKeyArn?: string;
  targetModelTags?: Array<Tag>;
  failureMessage?: string;
  sourceModelName?: string;
}
export interface GetModelCustomizationJobRequest {
  jobIdentifier: string;
}
export interface GetModelCustomizationJobResponse {
  jobArn: string;
  jobName: string;
  outputModelName: string;
  outputModelArn?: string;
  clientRequestToken?: string;
  roleArn: string;
  status?: ModelCustomizationJobStatus;
  statusDetails?: StatusDetails;
  failureMessage?: string;
  creationTime: Date | string;
  lastModifiedTime?: Date | string;
  endTime?: Date | string;
  baseModelArn: string;
  hyperParameters?: Record<string, string>;
  trainingDataConfig: TrainingDataConfig;
  validationDataConfig: ValidationDataConfig;
  outputDataConfig: OutputDataConfig;
  customizationType?: CustomizationType;
  outputModelKmsKeyArn?: string;
  trainingMetrics?: TrainingMetrics;
  validationMetrics?: Array<ValidatorMetric>;
  vpcConfig?: VpcConfig;
  customizationConfig?: CustomizationConfig;
}
export interface GetModelImportJobRequest {
  jobIdentifier: string;
}
export interface GetModelImportJobResponse {
  jobArn?: string;
  jobName?: string;
  importedModelName?: string;
  importedModelArn?: string;
  roleArn?: string;
  modelDataSource?: ModelDataSource;
  status?: ModelImportJobStatus;
  failureMessage?: string;
  creationTime?: Date | string;
  lastModifiedTime?: Date | string;
  endTime?: Date | string;
  vpcConfig?: VpcConfig;
  importedModelKmsKeyArn?: string;
}
export interface GetModelInvocationJobRequest {
  jobIdentifier: string;
}
export interface GetModelInvocationJobResponse {
  jobArn: string;
  jobName?: string;
  modelId: string;
  clientRequestToken?: string;
  roleArn: string;
  status?: ModelInvocationJobStatus;
  message?: string;
  submitTime: Date | string;
  lastModifiedTime?: Date | string;
  endTime?: Date | string;
  inputDataConfig: ModelInvocationJobInputDataConfig;
  outputDataConfig: ModelInvocationJobOutputDataConfig;
  vpcConfig?: VpcConfig;
  timeoutDurationInHours?: number;
  jobExpirationTime?: Date | string;
}
export interface GetModelInvocationLoggingConfigurationRequest {}
export interface GetModelInvocationLoggingConfigurationResponse {
  loggingConfig?: LoggingConfig;
}
export interface GetPromptRouterRequest {
  promptRouterArn: string;
}
export interface GetPromptRouterResponse {
  promptRouterName: string;
  routingCriteria: RoutingCriteria;
  description?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  promptRouterArn: string;
  models: Array<PromptRouterTargetModel>;
  fallbackModel: PromptRouterTargetModel;
  status: PromptRouterStatus;
  type: PromptRouterType;
}
export interface GetProvisionedModelThroughputRequest {
  provisionedModelId: string;
}
export interface GetProvisionedModelThroughputResponse {
  modelUnits: number;
  desiredModelUnits: number;
  provisionedModelName: string;
  provisionedModelArn: string;
  modelArn: string;
  desiredModelArn: string;
  foundationModelArn: string;
  status: ProvisionedModelStatus;
  creationTime: Date | string;
  lastModifiedTime: Date | string;
  failureMessage?: string;
  commitmentDuration?: CommitmentDuration;
  commitmentExpirationTime?: Date | string;
}
export interface GetUseCaseForModelAccessRequest {}
export interface GetUseCaseForModelAccessResponse {
  formData: Uint8Array | string;
}
export type GuardrailArn = string;

export type GuardrailBlockedMessaging = string;

export interface GuardrailConfiguration {
  guardrailId: string;
  guardrailVersion: string;
}
export interface GuardrailContentFilter {
  type: GuardrailContentFilterType;
  inputStrength: GuardrailFilterStrength;
  outputStrength: GuardrailFilterStrength;
  inputModalities?: Array<GuardrailModality>;
  outputModalities?: Array<GuardrailModality>;
  inputAction?: GuardrailContentFilterAction;
  outputAction?: GuardrailContentFilterAction;
  inputEnabled?: boolean;
  outputEnabled?: boolean;
}
export type GuardrailContentFilterAction = "BLOCK" | "NONE";
export interface GuardrailContentFilterConfig {
  type: GuardrailContentFilterType;
  inputStrength: GuardrailFilterStrength;
  outputStrength: GuardrailFilterStrength;
  inputModalities?: Array<GuardrailModality>;
  outputModalities?: Array<GuardrailModality>;
  inputAction?: GuardrailContentFilterAction;
  outputAction?: GuardrailContentFilterAction;
  inputEnabled?: boolean;
  outputEnabled?: boolean;
}
export type GuardrailContentFilters = Array<GuardrailContentFilter>;
export type GuardrailContentFiltersConfig = Array<GuardrailContentFilterConfig>;
export interface GuardrailContentFiltersTier {
  tierName: GuardrailContentFiltersTierName;
}
export interface GuardrailContentFiltersTierConfig {
  tierName: GuardrailContentFiltersTierName;
}
export type GuardrailContentFiltersTierName = "CLASSIC" | "STANDARD";
export type GuardrailContentFilterType =
  | "SEXUAL"
  | "VIOLENCE"
  | "HATE"
  | "INSULTS"
  | "MISCONDUCT"
  | "PROMPT_ATTACK";
export interface GuardrailContentPolicy {
  filters?: Array<GuardrailContentFilter>;
  tier?: GuardrailContentFiltersTier;
}
export interface GuardrailContentPolicyConfig {
  filtersConfig: Array<GuardrailContentFilterConfig>;
  tierConfig?: GuardrailContentFiltersTierConfig;
}
export type GuardrailContextualGroundingAction = "BLOCK" | "NONE";
export interface GuardrailContextualGroundingFilter {
  type: GuardrailContextualGroundingFilterType;
  threshold: number;
  action?: GuardrailContextualGroundingAction;
  enabled?: boolean;
}
export interface GuardrailContextualGroundingFilterConfig {
  type: GuardrailContextualGroundingFilterType;
  threshold: number;
  action?: GuardrailContextualGroundingAction;
  enabled?: boolean;
}
export type GuardrailContextualGroundingFilters =
  Array<GuardrailContextualGroundingFilter>;
export type GuardrailContextualGroundingFiltersConfig =
  Array<GuardrailContextualGroundingFilterConfig>;
export type GuardrailContextualGroundingFilterType = "GROUNDING" | "RELEVANCE";
export interface GuardrailContextualGroundingPolicy {
  filters: Array<GuardrailContextualGroundingFilter>;
}
export interface GuardrailContextualGroundingPolicyConfig {
  filtersConfig: Array<GuardrailContextualGroundingFilterConfig>;
}
export interface GuardrailCrossRegionConfig {
  guardrailProfileIdentifier: string;
}
export interface GuardrailCrossRegionDetails {
  guardrailProfileId?: string;
  guardrailProfileArn?: string;
}
export type GuardrailCrossRegionGuardrailProfileArn = string;

export type GuardrailCrossRegionGuardrailProfileId = string;

export type GuardrailCrossRegionGuardrailProfileIdentifier = string;

export type GuardrailDescription = string;

export type GuardrailDraftVersion = string;

export type GuardrailFailureRecommendation = string;

export type GuardrailFailureRecommendations = Array<string>;
export type GuardrailFilterStrength = "NONE" | "LOW" | "MEDIUM" | "HIGH";
export type GuardrailId = string;

export type GuardrailIdentifier = string;

export type GuardrailManagedWordLists = Array<GuardrailManagedWords>;
export type GuardrailManagedWordListsConfig =
  Array<GuardrailManagedWordsConfig>;
export interface GuardrailManagedWords {
  type: GuardrailManagedWordsType;
  inputAction?: GuardrailWordAction;
  outputAction?: GuardrailWordAction;
  inputEnabled?: boolean;
  outputEnabled?: boolean;
}
export interface GuardrailManagedWordsConfig {
  type: GuardrailManagedWordsType;
  inputAction?: GuardrailWordAction;
  outputAction?: GuardrailWordAction;
  inputEnabled?: boolean;
  outputEnabled?: boolean;
}
export type GuardrailManagedWordsType = "PROFANITY";
export type GuardrailModalities = Array<GuardrailModality>;
export type GuardrailModality = "TEXT" | "IMAGE";
export type GuardrailName = string;

export type GuardrailNumericalVersion = string;

export type GuardrailPiiEntities = Array<GuardrailPiiEntity>;
export type GuardrailPiiEntitiesConfig = Array<GuardrailPiiEntityConfig>;
export interface GuardrailPiiEntity {
  type: GuardrailPiiEntityType;
  action: GuardrailSensitiveInformationAction;
  inputAction?: GuardrailSensitiveInformationAction;
  outputAction?: GuardrailSensitiveInformationAction;
  inputEnabled?: boolean;
  outputEnabled?: boolean;
}
export interface GuardrailPiiEntityConfig {
  type: GuardrailPiiEntityType;
  action: GuardrailSensitiveInformationAction;
  inputAction?: GuardrailSensitiveInformationAction;
  outputAction?: GuardrailSensitiveInformationAction;
  inputEnabled?: boolean;
  outputEnabled?: boolean;
}
export type GuardrailPiiEntityType =
  | "ADDRESS"
  | "AGE"
  | "AWS_ACCESS_KEY"
  | "AWS_SECRET_KEY"
  | "CA_HEALTH_NUMBER"
  | "CA_SOCIAL_INSURANCE_NUMBER"
  | "CREDIT_DEBIT_CARD_CVV"
  | "CREDIT_DEBIT_CARD_EXPIRY"
  | "CREDIT_DEBIT_CARD_NUMBER"
  | "DRIVER_ID"
  | "EMAIL"
  | "INTERNATIONAL_BANK_ACCOUNT_NUMBER"
  | "IP_ADDRESS"
  | "LICENSE_PLATE"
  | "MAC_ADDRESS"
  | "NAME"
  | "PASSWORD"
  | "PHONE"
  | "PIN"
  | "SWIFT_CODE"
  | "UK_NATIONAL_HEALTH_SERVICE_NUMBER"
  | "UK_NATIONAL_INSURANCE_NUMBER"
  | "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER"
  | "URL"
  | "USERNAME"
  | "US_BANK_ACCOUNT_NUMBER"
  | "US_BANK_ROUTING_NUMBER"
  | "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER"
  | "US_PASSPORT_NUMBER"
  | "US_SOCIAL_SECURITY_NUMBER"
  | "VEHICLE_IDENTIFICATION_NUMBER";
export interface GuardrailRegex {
  name: string;
  description?: string;
  pattern: string;
  action: GuardrailSensitiveInformationAction;
  inputAction?: GuardrailSensitiveInformationAction;
  outputAction?: GuardrailSensitiveInformationAction;
  inputEnabled?: boolean;
  outputEnabled?: boolean;
}
export interface GuardrailRegexConfig {
  name: string;
  description?: string;
  pattern: string;
  action: GuardrailSensitiveInformationAction;
  inputAction?: GuardrailSensitiveInformationAction;
  outputAction?: GuardrailSensitiveInformationAction;
  inputEnabled?: boolean;
  outputEnabled?: boolean;
}
export type GuardrailRegexes = Array<GuardrailRegex>;
export type GuardrailRegexesConfig = Array<GuardrailRegexConfig>;
export type GuardrailSensitiveInformationAction =
  | "BLOCK"
  | "ANONYMIZE"
  | "NONE";
export interface GuardrailSensitiveInformationPolicy {
  piiEntities?: Array<GuardrailPiiEntity>;
  regexes?: Array<GuardrailRegex>;
}
export interface GuardrailSensitiveInformationPolicyConfig {
  piiEntitiesConfig?: Array<GuardrailPiiEntityConfig>;
  regexesConfig?: Array<GuardrailRegexConfig>;
}
export type GuardrailStatus =
  | "CREATING"
  | "UPDATING"
  | "VERSIONING"
  | "READY"
  | "FAILED"
  | "DELETING";
export type GuardrailStatusReason = string;

export type GuardrailStatusReasons = Array<string>;
export type GuardrailSummaries = Array<GuardrailSummary>;
export interface GuardrailSummary {
  id: string;
  arn: string;
  status: GuardrailStatus;
  name: string;
  description?: string;
  version: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  crossRegionDetails?: GuardrailCrossRegionDetails;
}
export interface GuardrailTopic {
  name: string;
  definition: string;
  examples?: Array<string>;
  type?: GuardrailTopicType;
  inputAction?: GuardrailTopicAction;
  outputAction?: GuardrailTopicAction;
  inputEnabled?: boolean;
  outputEnabled?: boolean;
}
export type GuardrailTopicAction = "BLOCK" | "NONE";
export interface GuardrailTopicConfig {
  name: string;
  definition: string;
  examples?: Array<string>;
  type: GuardrailTopicType;
  inputAction?: GuardrailTopicAction;
  outputAction?: GuardrailTopicAction;
  inputEnabled?: boolean;
  outputEnabled?: boolean;
}
export type GuardrailTopicDefinition = string;

export type GuardrailTopicExample = string;

export type GuardrailTopicExamples = Array<string>;
export type GuardrailTopicName = string;

export interface GuardrailTopicPolicy {
  topics: Array<GuardrailTopic>;
  tier?: GuardrailTopicsTier;
}
export interface GuardrailTopicPolicyConfig {
  topicsConfig: Array<GuardrailTopicConfig>;
  tierConfig?: GuardrailTopicsTierConfig;
}
export type GuardrailTopics = Array<GuardrailTopic>;
export type GuardrailTopicsConfig = Array<GuardrailTopicConfig>;
export interface GuardrailTopicsTier {
  tierName: GuardrailTopicsTierName;
}
export interface GuardrailTopicsTierConfig {
  tierName: GuardrailTopicsTierName;
}
export type GuardrailTopicsTierName = "CLASSIC" | "STANDARD";
export type GuardrailTopicType = "DENY";
export type GuardrailVersion = string;

export interface GuardrailWord {
  text: string;
  inputAction?: GuardrailWordAction;
  outputAction?: GuardrailWordAction;
  inputEnabled?: boolean;
  outputEnabled?: boolean;
}
export type GuardrailWordAction = "BLOCK" | "NONE";
export interface GuardrailWordConfig {
  text: string;
  inputAction?: GuardrailWordAction;
  outputAction?: GuardrailWordAction;
  inputEnabled?: boolean;
  outputEnabled?: boolean;
}
export interface GuardrailWordPolicy {
  words?: Array<GuardrailWord>;
  managedWordLists?: Array<GuardrailManagedWords>;
}
export interface GuardrailWordPolicyConfig {
  wordsConfig?: Array<GuardrailWordConfig>;
  managedWordListsConfig?: Array<GuardrailManagedWordsConfig>;
}
export type GuardrailWords = Array<GuardrailWord>;
export type GuardrailWordsConfig = Array<GuardrailWordConfig>;
export interface HumanEvaluationConfig {
  humanWorkflowConfig?: HumanWorkflowConfig;
  customMetrics?: Array<HumanEvaluationCustomMetric>;
  datasetMetricConfigs: Array<EvaluationDatasetMetricConfig>;
}
export interface HumanEvaluationCustomMetric {
  name: string;
  description?: string;
  ratingMethod: string;
}
export type HumanEvaluationCustomMetrics = Array<HumanEvaluationCustomMetric>;
export type HumanTaskInstructions = string;

export interface HumanWorkflowConfig {
  flowDefinitionArn: string;
  instructions?: string;
}
export type IdempotencyToken = string;

export type Identifier = string;

export interface ImplicitFilterConfiguration {
  metadataAttributes: Array<MetadataAttributeSchema>;
  modelArn: string;
}
export type ImportedModelArn = string;

export type ImportedModelIdentifier = string;

export type ImportedModelName = string;

export interface ImportedModelSummary {
  modelArn: string;
  modelName: string;
  creationTime: Date | string;
  instructSupported?: boolean;
  modelArchitecture?: string;
}
export type ImportedModelSummaryList = Array<ImportedModelSummary>;
export type InferenceProfileArn = string;

export type InferenceProfileDescription = string;

export type InferenceProfileId = string;

export type InferenceProfileIdentifier = string;

export interface InferenceProfileModel {
  modelArn?: string;
}
export type InferenceProfileModels = Array<InferenceProfileModel>;
interface _InferenceProfileModelSource {
  copyFrom?: string;
}

export type InferenceProfileModelSource = _InferenceProfileModelSource & {
  copyFrom: string;
};
export type InferenceProfileModelSourceArn = string;

export type InferenceProfileName = string;

export type InferenceProfileStatus = "ACTIVE";
export type InferenceProfileSummaries = Array<InferenceProfileSummary>;
export interface InferenceProfileSummary {
  inferenceProfileName: string;
  description?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  inferenceProfileArn: string;
  models: Array<InferenceProfileModel>;
  inferenceProfileId: string;
  status: InferenceProfileStatus;
  type: InferenceProfileType;
}
export type InferenceProfileType = "SYSTEM_DEFINED" | "APPLICATION";
export type InferenceType = "ON_DEMAND" | "PROVISIONED";
export type InferenceTypeList = Array<InferenceType>;
export type InstanceCount = number;

export type InstanceType = string;

export type InstructSupported = boolean;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface InvocationLogsConfig {
  usePromptResponse?: boolean;
  invocationLogSource: InvocationLogSource;
  requestMetadataFilters?: RequestMetadataFilters;
}
interface _InvocationLogSource {
  s3Uri?: string;
}

export type InvocationLogSource = _InvocationLogSource & { s3Uri: string };
export type JobName = string;

export type JobStatusDetails =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "STOPPING"
  | "STOPPED"
  | "FAILED"
  | "NOT_STARTED";
export interface KbInferenceConfig {
  textInferenceConfig?: TextInferenceConfig;
}
export type kBS3Uri = string;

export type KeyPrefix = string;

export type KmsKeyArn = string;

export type KmsKeyId = string;

interface _KnowledgeBaseConfig {
  retrieveConfig?: RetrieveConfig;
  retrieveAndGenerateConfig?: RetrieveAndGenerateConfiguration;
}

export type KnowledgeBaseConfig =
  | (_KnowledgeBaseConfig & { retrieveConfig: RetrieveConfig })
  | (_KnowledgeBaseConfig & {
      retrieveAndGenerateConfig: RetrieveAndGenerateConfiguration;
    });
export type KnowledgeBaseId = string;

export interface KnowledgeBaseRetrievalConfiguration {
  vectorSearchConfiguration: KnowledgeBaseVectorSearchConfiguration;
}
export interface KnowledgeBaseRetrieveAndGenerateConfiguration {
  knowledgeBaseId: string;
  modelArn: string;
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;
  generationConfiguration?: GenerationConfiguration;
  orchestrationConfiguration?: OrchestrationConfiguration;
}
export interface KnowledgeBaseVectorSearchConfiguration {
  numberOfResults?: number;
  overrideSearchType?: SearchType;
  filter?: RetrievalFilter;
  implicitFilterConfiguration?: ImplicitFilterConfiguration;
  rerankingConfiguration?: VectorSearchRerankingConfiguration;
}
export interface LegalTerm {
  url?: string;
}
export interface ListCustomModelsRequest {
  creationTimeBefore?: Date | string;
  creationTimeAfter?: Date | string;
  nameContains?: string;
  baseModelArnEquals?: string;
  foundationModelArnEquals?: string;
  maxResults?: number;
  nextToken?: string;
  sortBy?: SortModelsBy;
  sortOrder?: SortOrder;
  isOwned?: boolean;
  modelStatus?: ModelStatus;
}
export interface ListCustomModelsResponse {
  nextToken?: string;
  modelSummaries?: Array<CustomModelSummary>;
}
export interface ListEvaluationJobsRequest {
  creationTimeAfter?: Date | string;
  creationTimeBefore?: Date | string;
  statusEquals?: EvaluationJobStatus;
  applicationTypeEquals?: ApplicationType;
  nameContains?: string;
  maxResults?: number;
  nextToken?: string;
  sortBy?: SortJobsBy;
  sortOrder?: SortOrder;
}
export interface ListEvaluationJobsResponse {
  nextToken?: string;
  jobSummaries?: Array<EvaluationSummary>;
}
export interface ListFoundationModelAgreementOffersRequest {
  modelId: string;
  offerType?: OfferType;
}
export interface ListFoundationModelAgreementOffersResponse {
  modelId: string;
  offers: Array<Offer>;
}
export interface ListFoundationModelsRequest {
  byProvider?: string;
  byCustomizationType?: ModelCustomization;
  byOutputModality?: ModelModality;
  byInferenceType?: InferenceType;
}
export interface ListFoundationModelsResponse {
  modelSummaries?: Array<FoundationModelSummary>;
}
export interface ListGuardrailsRequest {
  guardrailIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListGuardrailsResponse {
  guardrails: Array<GuardrailSummary>;
  nextToken?: string;
}
export interface ListImportedModelsRequest {
  creationTimeBefore?: Date | string;
  creationTimeAfter?: Date | string;
  nameContains?: string;
  maxResults?: number;
  nextToken?: string;
  sortBy?: SortModelsBy;
  sortOrder?: SortOrder;
}
export interface ListImportedModelsResponse {
  nextToken?: string;
  modelSummaries?: Array<ImportedModelSummary>;
}
export interface ListInferenceProfilesRequest {
  maxResults?: number;
  nextToken?: string;
  typeEquals?: InferenceProfileType;
}
export interface ListInferenceProfilesResponse {
  inferenceProfileSummaries?: Array<InferenceProfileSummary>;
  nextToken?: string;
}
export interface ListMarketplaceModelEndpointsRequest {
  maxResults?: number;
  nextToken?: string;
  modelSourceEquals?: string;
}
export interface ListMarketplaceModelEndpointsResponse {
  marketplaceModelEndpoints?: Array<MarketplaceModelEndpointSummary>;
  nextToken?: string;
}
export interface ListModelCopyJobsRequest {
  creationTimeAfter?: Date | string;
  creationTimeBefore?: Date | string;
  statusEquals?: ModelCopyJobStatus;
  sourceAccountEquals?: string;
  sourceModelArnEquals?: string;
  targetModelNameContains?: string;
  maxResults?: number;
  nextToken?: string;
  sortBy?: SortJobsBy;
  sortOrder?: SortOrder;
}
export interface ListModelCopyJobsResponse {
  nextToken?: string;
  modelCopyJobSummaries?: Array<ModelCopyJobSummary>;
}
export interface ListModelCustomizationJobsRequest {
  creationTimeAfter?: Date | string;
  creationTimeBefore?: Date | string;
  statusEquals?: FineTuningJobStatus;
  nameContains?: string;
  maxResults?: number;
  nextToken?: string;
  sortBy?: SortJobsBy;
  sortOrder?: SortOrder;
}
export interface ListModelCustomizationJobsResponse {
  nextToken?: string;
  modelCustomizationJobSummaries?: Array<ModelCustomizationJobSummary>;
}
export interface ListModelImportJobsRequest {
  creationTimeAfter?: Date | string;
  creationTimeBefore?: Date | string;
  statusEquals?: ModelImportJobStatus;
  nameContains?: string;
  maxResults?: number;
  nextToken?: string;
  sortBy?: SortJobsBy;
  sortOrder?: SortOrder;
}
export interface ListModelImportJobsResponse {
  nextToken?: string;
  modelImportJobSummaries?: Array<ModelImportJobSummary>;
}
export interface ListModelInvocationJobsRequest {
  submitTimeAfter?: Date | string;
  submitTimeBefore?: Date | string;
  statusEquals?: ModelInvocationJobStatus;
  nameContains?: string;
  maxResults?: number;
  nextToken?: string;
  sortBy?: SortJobsBy;
  sortOrder?: SortOrder;
}
export interface ListModelInvocationJobsResponse {
  nextToken?: string;
  invocationJobSummaries?: Array<ModelInvocationJobSummary>;
}
export interface ListPromptRoutersRequest {
  maxResults?: number;
  nextToken?: string;
  type?: PromptRouterType;
}
export interface ListPromptRoutersResponse {
  promptRouterSummaries?: Array<PromptRouterSummary>;
  nextToken?: string;
}
export interface ListProvisionedModelThroughputsRequest {
  creationTimeAfter?: Date | string;
  creationTimeBefore?: Date | string;
  statusEquals?: ProvisionedModelStatus;
  modelArnEquals?: string;
  nameContains?: string;
  maxResults?: number;
  nextToken?: string;
  sortBy?: SortByProvisionedModels;
  sortOrder?: SortOrder;
}
export interface ListProvisionedModelThroughputsResponse {
  nextToken?: string;
  provisionedModelSummaries?: Array<ProvisionedModelSummary>;
}
export interface ListTagsForResourceRequest {
  resourceARN: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export interface LoggingConfig {
  cloudWatchConfig?: CloudWatchConfig;
  s3Config?: S3Config;
  textDataDeliveryEnabled?: boolean;
  imageDataDeliveryEnabled?: boolean;
  embeddingDataDeliveryEnabled?: boolean;
  videoDataDeliveryEnabled?: boolean;
}
export type LogGroupName = string;

export interface MarketplaceModelEndpoint {
  endpointArn: string;
  modelSourceIdentifier: string;
  status?: Status;
  statusMessage?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  endpointConfig: EndpointConfig;
  endpointStatus: string;
  endpointStatusMessage?: string;
}
export type MarketplaceModelEndpointSummaries =
  Array<MarketplaceModelEndpointSummary>;
export interface MarketplaceModelEndpointSummary {
  endpointArn: string;
  modelSourceIdentifier: string;
  status?: Status;
  statusMessage?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export type MaxResults = number;

export type MaxTokens = number;

export type Message = string;

export interface MetadataAttributeSchema {
  key: string;
  type: AttributeType;
  description: string;
}
export type MetadataAttributeSchemaList = Array<MetadataAttributeSchema>;
export interface MetadataConfigurationForReranking {
  selectionMode: RerankingMetadataSelectionMode;
  selectiveModeConfiguration?: RerankingMetadataSelectiveModeConfiguration;
}
export type MetricFloat = number;

export type MetricName = string;

export type ModelArchitecture = string;

export type ModelArn = string;

export type ModelCopyJobArn = string;

export type ModelCopyJobStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED";
export type ModelCopyJobSummaries = Array<ModelCopyJobSummary>;
export interface ModelCopyJobSummary {
  jobArn: string;
  status: ModelCopyJobStatus;
  creationTime: Date | string;
  targetModelArn: string;
  targetModelName?: string;
  sourceAccountId: string;
  sourceModelArn: string;
  targetModelKmsKeyArn?: string;
  targetModelTags?: Array<Tag>;
  failureMessage?: string;
  sourceModelName?: string;
}
export type ModelCustomization =
  | "FINE_TUNING"
  | "CONTINUED_PRE_TRAINING"
  | "DISTILLATION";
export type ModelCustomizationHyperParameters = Record<string, string>;
export type ModelCustomizationJobArn = string;

export type ModelCustomizationJobIdentifier = string;

export type ModelCustomizationJobStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "STOPPING"
  | "STOPPED";
export type ModelCustomizationJobSummaries =
  Array<ModelCustomizationJobSummary>;
export interface ModelCustomizationJobSummary {
  jobArn: string;
  baseModelArn: string;
  jobName: string;
  status: ModelCustomizationJobStatus;
  statusDetails?: StatusDetails;
  lastModifiedTime?: Date | string;
  creationTime: Date | string;
  endTime?: Date | string;
  customModelArn?: string;
  customModelName?: string;
  customizationType?: CustomizationType;
}
export type ModelCustomizationList = Array<ModelCustomization>;
interface _ModelDataSource {
  s3DataSource?: S3DataSource;
}

export type ModelDataSource = _ModelDataSource & { s3DataSource: S3DataSource };
export type ModelId = string;

export type ModelIdentifier = string;

export type ModelImportJobArn = string;

export type ModelImportJobIdentifier = string;

export type ModelImportJobStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED";
export type ModelImportJobSummaries = Array<ModelImportJobSummary>;
export interface ModelImportJobSummary {
  jobArn: string;
  jobName: string;
  status: ModelImportJobStatus;
  lastModifiedTime?: Date | string;
  creationTime: Date | string;
  endTime?: Date | string;
  importedModelArn?: string;
  importedModelName?: string;
}
export type ModelInvocationIdempotencyToken = string;

export type ModelInvocationJobArn = string;

export type ModelInvocationJobIdentifier = string;

interface _ModelInvocationJobInputDataConfig {
  s3InputDataConfig?: ModelInvocationJobS3InputDataConfig;
}

export type ModelInvocationJobInputDataConfig =
  _ModelInvocationJobInputDataConfig & {
    s3InputDataConfig: ModelInvocationJobS3InputDataConfig;
  };
export type ModelInvocationJobName = string;

interface _ModelInvocationJobOutputDataConfig {
  s3OutputDataConfig?: ModelInvocationJobS3OutputDataConfig;
}

export type ModelInvocationJobOutputDataConfig =
  _ModelInvocationJobOutputDataConfig & {
    s3OutputDataConfig: ModelInvocationJobS3OutputDataConfig;
  };
export interface ModelInvocationJobS3InputDataConfig {
  s3InputFormat?: S3InputFormat;
  s3Uri: string;
  s3BucketOwner?: string;
}
export interface ModelInvocationJobS3OutputDataConfig {
  s3Uri: string;
  s3EncryptionKeyId?: string;
  s3BucketOwner?: string;
}
export type ModelInvocationJobStatus =
  | "SUBMITTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "STOPPING"
  | "STOPPED"
  | "PARTIALLY_COMPLETED"
  | "EXPIRED"
  | "VALIDATING"
  | "SCHEDULED";
export type ModelInvocationJobSummaries = Array<ModelInvocationJobSummary>;
export interface ModelInvocationJobSummary {
  jobArn: string;
  jobName: string;
  modelId: string;
  clientRequestToken?: string;
  roleArn: string;
  status?: ModelInvocationJobStatus;
  message?: string;
  submitTime: Date | string;
  lastModifiedTime?: Date | string;
  endTime?: Date | string;
  inputDataConfig: ModelInvocationJobInputDataConfig;
  outputDataConfig: ModelInvocationJobOutputDataConfig;
  vpcConfig?: VpcConfig;
  timeoutDurationInHours?: number;
  jobExpirationTime?: Date | string;
}
export type ModelInvocationJobTimeoutDurationInHours = number;

export type ModelModality = "TEXT" | "IMAGE" | "EMBEDDING";
export type ModelModalityList = Array<ModelModality>;
export type ModelName = string;

export type ModelSourceIdentifier = string;

export type ModelStatus = "ACTIVE" | "CREATING" | "FAILED";
export type NonBlankString = string;

export interface Offer {
  offerId?: string;
  offerToken: string;
  termDetails: TermDetails;
}
export type OfferId = string;

export type Offers = Array<Offer>;
export type OfferToken = string;

export type OfferType = "ALL" | "PUBLIC";
export interface OrchestrationConfiguration {
  queryTransformationConfiguration: QueryTransformationConfiguration;
}
export interface OutputDataConfig {
  s3Uri: string;
}
export type PaginationToken = string;

export type PerformanceConfigLatency = "STANDARD" | "OPTIMIZED";
export interface PerformanceConfiguration {
  latency?: PerformanceConfigLatency;
}
export type PositiveInteger = number;

export interface PricingTerm {
  rateCard: Array<DimensionalPriceRate>;
}
export type PromptRouterArn = string;

export type PromptRouterDescription = string;

export type PromptRouterName = string;

export type PromptRouterStatus = "AVAILABLE";
export type PromptRouterSummaries = Array<PromptRouterSummary>;
export interface PromptRouterSummary {
  promptRouterName: string;
  routingCriteria: RoutingCriteria;
  description?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  promptRouterArn: string;
  models: Array<PromptRouterTargetModel>;
  fallbackModel: PromptRouterTargetModel;
  status: PromptRouterStatus;
  type: PromptRouterType;
}
export interface PromptRouterTargetModel {
  modelArn: string;
}
export type PromptRouterTargetModelArn = string;

export type PromptRouterTargetModels = Array<PromptRouterTargetModel>;
export type PromptRouterType = "CUSTOM" | "DEFAULT";
export interface PromptTemplate {
  textPromptTemplate?: string;
}
export type Provider = string;

export type ProvisionedModelArn = string;

export type ProvisionedModelId = string;

export type ProvisionedModelName = string;

export type ProvisionedModelStatus =
  | "CREATING"
  | "IN_SERVICE"
  | "UPDATING"
  | "FAILED";
export type ProvisionedModelSummaries = Array<ProvisionedModelSummary>;
export interface ProvisionedModelSummary {
  provisionedModelName: string;
  provisionedModelArn: string;
  modelArn: string;
  desiredModelArn: string;
  foundationModelArn: string;
  modelUnits: number;
  desiredModelUnits: number;
  status: ProvisionedModelStatus;
  commitmentDuration?: CommitmentDuration;
  commitmentExpirationTime?: Date | string;
  creationTime: Date | string;
  lastModifiedTime: Date | string;
}
export interface PutModelInvocationLoggingConfigurationRequest {
  loggingConfig: LoggingConfig;
}
export interface PutModelInvocationLoggingConfigurationResponse {}
export interface PutUseCaseForModelAccessRequest {
  formData: Uint8Array | string;
}
export interface PutUseCaseForModelAccessResponse {}
export interface QueryTransformationConfiguration {
  type: QueryTransformationType;
}
export type QueryTransformationType = "QUERY_DECOMPOSITION";
interface _RAGConfig {
  knowledgeBaseConfig?: KnowledgeBaseConfig;
  precomputedRagSourceConfig?: EvaluationPrecomputedRagSourceConfig;
}

export type RAGConfig =
  | (_RAGConfig & { knowledgeBaseConfig: KnowledgeBaseConfig })
  | (_RAGConfig & {
      precomputedRagSourceConfig: EvaluationPrecomputedRagSourceConfig;
    });
export type RagConfigs = Array<RAGConfig>;
export type RAGStopSequences = Array<string>;
export type RateCard = Array<DimensionalPriceRate>;
export type RatingScale = Array<RatingScaleItem>;
export interface RatingScaleItem {
  definition: string;
  value: RatingScaleItemValue;
}
export type RatingScaleItemDefinition = string;

interface _RatingScaleItemValue {
  stringValue?: string;
  floatValue?: number;
}

export type RatingScaleItemValue =
  | (_RatingScaleItemValue & { stringValue: string })
  | (_RatingScaleItemValue & { floatValue: number });
export type RegionAvailability = "AVAILABLE" | "NOT_AVAILABLE";
export interface RegisterMarketplaceModelEndpointRequest {
  endpointIdentifier: string;
  modelSourceIdentifier: string;
}
export interface RegisterMarketplaceModelEndpointResponse {
  marketplaceModelEndpoint: MarketplaceModelEndpoint;
}
export interface RequestMetadataBaseFilters {
  equals?: Record<string, string>;
  notEquals?: Record<string, string>;
}
interface _RequestMetadataFilters {
  equals?: Record<string, string>;
  notEquals?: Record<string, string>;
  andAll?: Array<RequestMetadataBaseFilters>;
  orAll?: Array<RequestMetadataBaseFilters>;
}

export type RequestMetadataFilters =
  | (_RequestMetadataFilters & { equals: Record<string, string> })
  | (_RequestMetadataFilters & { notEquals: Record<string, string> })
  | (_RequestMetadataFilters & { andAll: Array<RequestMetadataBaseFilters> })
  | (_RequestMetadataFilters & { orAll: Array<RequestMetadataBaseFilters> });
export type RequestMetadataFiltersList = Array<RequestMetadataBaseFilters>;
export type RequestMetadataMap = Record<string, string>;
export type RerankingMetadataSelectionMode = "SELECTIVE" | "ALL";
interface _RerankingMetadataSelectiveModeConfiguration {
  fieldsToInclude?: Array<FieldForReranking>;
  fieldsToExclude?: Array<FieldForReranking>;
}

export type RerankingMetadataSelectiveModeConfiguration =
  | (_RerankingMetadataSelectiveModeConfiguration & {
      fieldsToInclude: Array<FieldForReranking>;
    })
  | (_RerankingMetadataSelectiveModeConfiguration & {
      fieldsToExclude: Array<FieldForReranking>;
    });
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
interface _RetrievalFilter {
  equals?: FilterAttribute;
  notEquals?: FilterAttribute;
  greaterThan?: FilterAttribute;
  greaterThanOrEquals?: FilterAttribute;
  lessThan?: FilterAttribute;
  lessThanOrEquals?: FilterAttribute;
  in?: FilterAttribute;
  notIn?: FilterAttribute;
  startsWith?: FilterAttribute;
  listContains?: FilterAttribute;
  stringContains?: FilterAttribute;
  andAll?: Array<RetrievalFilter>;
  orAll?: Array<RetrievalFilter>;
}

export type RetrievalFilter =
  | (_RetrievalFilter & { equals: FilterAttribute })
  | (_RetrievalFilter & { notEquals: FilterAttribute })
  | (_RetrievalFilter & { greaterThan: FilterAttribute })
  | (_RetrievalFilter & { greaterThanOrEquals: FilterAttribute })
  | (_RetrievalFilter & { lessThan: FilterAttribute })
  | (_RetrievalFilter & { lessThanOrEquals: FilterAttribute })
  | (_RetrievalFilter & { in: FilterAttribute })
  | (_RetrievalFilter & { notIn: FilterAttribute })
  | (_RetrievalFilter & { startsWith: FilterAttribute })
  | (_RetrievalFilter & { listContains: FilterAttribute })
  | (_RetrievalFilter & { stringContains: FilterAttribute })
  | (_RetrievalFilter & { andAll: Array<RetrievalFilter> })
  | (_RetrievalFilter & { orAll: Array<RetrievalFilter> });
export type RetrievalFilterList = Array<RetrievalFilter>;
export interface RetrieveAndGenerateConfiguration {
  type: RetrieveAndGenerateType;
  knowledgeBaseConfiguration?: KnowledgeBaseRetrieveAndGenerateConfiguration;
  externalSourcesConfiguration?: ExternalSourcesRetrieveAndGenerateConfiguration;
}
export type RetrieveAndGenerateType = "KNOWLEDGE_BASE" | "EXTERNAL_SOURCES";
export interface RetrieveConfig {
  knowledgeBaseId: string;
  knowledgeBaseRetrievalConfiguration: KnowledgeBaseRetrievalConfiguration;
}
export type RoleArn = string;

export interface RoutingCriteria {
  responseQualityDifference: number;
}
export interface S3Config {
  bucketName: string;
  keyPrefix?: string;
}
export interface S3DataSource {
  s3Uri: string;
}
export type S3InputFormat = "JSONL";
export interface S3ObjectDoc {
  uri: string;
}
export type S3Uri = string;

export interface SageMakerEndpoint {
  initialInstanceCount: number;
  instanceType: string;
  executionRole: string;
  kmsEncryptionKey?: string;
  vpc?: VpcConfig;
}
export type SageMakerFlowDefinitionArn = string;

export type SearchType = "HYBRID" | "SEMANTIC";
export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export type SortByProvisionedModels = "CREATION_TIME";
export type SortJobsBy = "CREATION_TIME";
export type SortModelsBy = "CREATION_TIME";
export type SortOrder = "ASCENDING" | "DESCENDING";
export type Status = "REGISTERED" | "INCOMPATIBLE_ENDPOINT";
export interface StatusDetails {
  validationDetails?: ValidationDetails;
  dataProcessingDetails?: DataProcessingDetails;
  trainingDetails?: TrainingDetails;
}
export interface StopEvaluationJobRequest {
  jobIdentifier: string;
}
export interface StopEvaluationJobResponse {}
export interface StopModelCustomizationJobRequest {
  jobIdentifier: string;
}
export interface StopModelCustomizationJobResponse {}
export interface StopModelInvocationJobRequest {
  jobIdentifier: string;
}
export interface StopModelInvocationJobResponse {}
export type SubnetId = string;

export type SubnetIds = Array<string>;
export interface SupportTerm {
  refundPolicyDescription?: string;
}
export interface Tag {
  key: string;
  value: string;
}
export type TaggableResourcesArn = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceARN: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface TeacherModelConfig {
  teacherModelIdentifier: string;
  maxResponseLengthForInference?: number;
}
export type TeacherModelIdentifier = string;

export type Temperature = number;

export interface TermDetails {
  usageBasedPricingTerm: PricingTerm;
  legalTerm: LegalTerm;
  supportTerm: SupportTerm;
  validityTerm?: ValidityTerm;
}
export interface TextInferenceConfig {
  temperature?: number;
  topP?: number;
  maxTokens?: number;
  stopSequences?: Array<string>;
}
export type TextPromptTemplate = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Timestamp = Date | string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export type TopP = number;

export interface TrainingDataConfig {
  s3Uri?: string;
  invocationLogsConfig?: InvocationLogsConfig;
}
export interface TrainingDetails {
  status?: JobStatusDetails;
  creationTime?: Date | string;
  lastModifiedTime?: Date | string;
}
export interface TrainingMetrics {
  trainingLoss?: number;
}
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateGuardrailRequest {
  guardrailIdentifier: string;
  name: string;
  description?: string;
  topicPolicyConfig?: GuardrailTopicPolicyConfig;
  contentPolicyConfig?: GuardrailContentPolicyConfig;
  wordPolicyConfig?: GuardrailWordPolicyConfig;
  sensitiveInformationPolicyConfig?: GuardrailSensitiveInformationPolicyConfig;
  contextualGroundingPolicyConfig?: GuardrailContextualGroundingPolicyConfig;
  crossRegionConfig?: GuardrailCrossRegionConfig;
  blockedInputMessaging: string;
  blockedOutputsMessaging: string;
  kmsKeyId?: string;
}
export interface UpdateGuardrailResponse {
  guardrailId: string;
  guardrailArn: string;
  version: string;
  updatedAt: Date | string;
}
export interface UpdateMarketplaceModelEndpointRequest {
  endpointArn: string;
  endpointConfig: EndpointConfig;
  clientRequestToken?: string;
}
export interface UpdateMarketplaceModelEndpointResponse {
  marketplaceModelEndpoint: MarketplaceModelEndpoint;
}
export interface UpdateProvisionedModelThroughputRequest {
  provisionedModelId: string;
  desiredProvisionedModelName?: string;
  desiredModelId?: string;
}
export interface UpdateProvisionedModelThroughputResponse {}
export type UsePromptResponse = boolean;

export interface ValidationDataConfig {
  validators: Array<Validator>;
}
export interface ValidationDetails {
  status?: JobStatusDetails;
  creationTime?: Date | string;
  lastModifiedTime?: Date | string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type ValidationMetrics = Array<ValidatorMetric>;
export interface Validator {
  s3Uri: string;
}
export interface ValidatorMetric {
  validationLoss?: number;
}
export type Validators = Array<Validator>;
export interface ValidityTerm {
  agreementDuration?: string;
}
export interface VectorSearchBedrockRerankingConfiguration {
  modelConfiguration: VectorSearchBedrockRerankingModelConfiguration;
  numberOfRerankedResults?: number;
  metadataConfiguration?: MetadataConfigurationForReranking;
}
export interface VectorSearchBedrockRerankingModelConfiguration {
  modelArn: string;
  additionalModelRequestFields?: Record<string, unknown>;
}
export interface VectorSearchRerankingConfiguration {
  type: VectorSearchRerankingConfigurationType;
  bedrockRerankingConfiguration?: VectorSearchBedrockRerankingConfiguration;
}
export type VectorSearchRerankingConfigurationType = "BEDROCK_RERANKING_MODEL";
export interface VpcConfig {
  subnetIds: Array<string>;
  securityGroupIds: Array<string>;
}
export declare namespace BatchDeleteEvaluationJob {
  export type Input = BatchDeleteEvaluationJobRequest;
  export type Output = BatchDeleteEvaluationJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCustomModel {
  export type Input = CreateCustomModelRequest;
  export type Output = CreateCustomModelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateEvaluationJob {
  export type Input = CreateEvaluationJobRequest;
  export type Output = CreateEvaluationJobResponse;
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

export declare namespace CreateFoundationModelAgreement {
  export type Input = CreateFoundationModelAgreementRequest;
  export type Output = CreateFoundationModelAgreementResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGuardrail {
  export type Input = CreateGuardrailRequest;
  export type Output = CreateGuardrailResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGuardrailVersion {
  export type Input = CreateGuardrailVersionRequest;
  export type Output = CreateGuardrailVersionResponse;
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

export declare namespace CreateInferenceProfile {
  export type Input = CreateInferenceProfileRequest;
  export type Output = CreateInferenceProfileResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateMarketplaceModelEndpoint {
  export type Input = CreateMarketplaceModelEndpointRequest;
  export type Output = CreateMarketplaceModelEndpointResponse;
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

export declare namespace CreateModelCopyJob {
  export type Input = CreateModelCopyJobRequest;
  export type Output = CreateModelCopyJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateModelCustomizationJob {
  export type Input = CreateModelCustomizationJobRequest;
  export type Output = CreateModelCustomizationJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateModelImportJob {
  export type Input = CreateModelImportJobRequest;
  export type Output = CreateModelImportJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateModelInvocationJob {
  export type Input = CreateModelInvocationJobRequest;
  export type Output = CreateModelInvocationJobResponse;
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

export declare namespace CreatePromptRouter {
  export type Input = CreatePromptRouterRequest;
  export type Output = CreatePromptRouterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateProvisionedModelThroughput {
  export type Input = CreateProvisionedModelThroughputRequest;
  export type Output = CreateProvisionedModelThroughputResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCustomModel {
  export type Input = DeleteCustomModelRequest;
  export type Output = DeleteCustomModelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFoundationModelAgreement {
  export type Input = DeleteFoundationModelAgreementRequest;
  export type Output = DeleteFoundationModelAgreementResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGuardrail {
  export type Input = DeleteGuardrailRequest;
  export type Output = DeleteGuardrailResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteImportedModel {
  export type Input = DeleteImportedModelRequest;
  export type Output = DeleteImportedModelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInferenceProfile {
  export type Input = DeleteInferenceProfileRequest;
  export type Output = DeleteInferenceProfileResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMarketplaceModelEndpoint {
  export type Input = DeleteMarketplaceModelEndpointRequest;
  export type Output = DeleteMarketplaceModelEndpointResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteModelInvocationLoggingConfiguration {
  export type Input = DeleteModelInvocationLoggingConfigurationRequest;
  export type Output = DeleteModelInvocationLoggingConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeletePromptRouter {
  export type Input = DeletePromptRouterRequest;
  export type Output = DeletePromptRouterResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProvisionedModelThroughput {
  export type Input = DeleteProvisionedModelThroughputRequest;
  export type Output = DeleteProvisionedModelThroughputResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterMarketplaceModelEndpoint {
  export type Input = DeregisterMarketplaceModelEndpointRequest;
  export type Output = DeregisterMarketplaceModelEndpointResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCustomModel {
  export type Input = GetCustomModelRequest;
  export type Output = GetCustomModelResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEvaluationJob {
  export type Input = GetEvaluationJobRequest;
  export type Output = GetEvaluationJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFoundationModel {
  export type Input = GetFoundationModelRequest;
  export type Output = GetFoundationModelResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFoundationModelAvailability {
  export type Input = GetFoundationModelAvailabilityRequest;
  export type Output = GetFoundationModelAvailabilityResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGuardrail {
  export type Input = GetGuardrailRequest;
  export type Output = GetGuardrailResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetImportedModel {
  export type Input = GetImportedModelRequest;
  export type Output = GetImportedModelResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInferenceProfile {
  export type Input = GetInferenceProfileRequest;
  export type Output = GetInferenceProfileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMarketplaceModelEndpoint {
  export type Input = GetMarketplaceModelEndpointRequest;
  export type Output = GetMarketplaceModelEndpointResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetModelCopyJob {
  export type Input = GetModelCopyJobRequest;
  export type Output = GetModelCopyJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetModelCustomizationJob {
  export type Input = GetModelCustomizationJobRequest;
  export type Output = GetModelCustomizationJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetModelImportJob {
  export type Input = GetModelImportJobRequest;
  export type Output = GetModelImportJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetModelInvocationJob {
  export type Input = GetModelInvocationJobRequest;
  export type Output = GetModelInvocationJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetModelInvocationLoggingConfiguration {
  export type Input = GetModelInvocationLoggingConfigurationRequest;
  export type Output = GetModelInvocationLoggingConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetPromptRouter {
  export type Input = GetPromptRouterRequest;
  export type Output = GetPromptRouterResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProvisionedModelThroughput {
  export type Input = GetProvisionedModelThroughputRequest;
  export type Output = GetProvisionedModelThroughputResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetUseCaseForModelAccess {
  export type Input = GetUseCaseForModelAccessRequest;
  export type Output = GetUseCaseForModelAccessResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCustomModels {
  export type Input = ListCustomModelsRequest;
  export type Output = ListCustomModelsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEvaluationJobs {
  export type Input = ListEvaluationJobsRequest;
  export type Output = ListEvaluationJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFoundationModelAgreementOffers {
  export type Input = ListFoundationModelAgreementOffersRequest;
  export type Output = ListFoundationModelAgreementOffersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFoundationModels {
  export type Input = ListFoundationModelsRequest;
  export type Output = ListFoundationModelsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGuardrails {
  export type Input = ListGuardrailsRequest;
  export type Output = ListGuardrailsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListImportedModels {
  export type Input = ListImportedModelsRequest;
  export type Output = ListImportedModelsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInferenceProfiles {
  export type Input = ListInferenceProfilesRequest;
  export type Output = ListInferenceProfilesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMarketplaceModelEndpoints {
  export type Input = ListMarketplaceModelEndpointsRequest;
  export type Output = ListMarketplaceModelEndpointsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListModelCopyJobs {
  export type Input = ListModelCopyJobsRequest;
  export type Output = ListModelCopyJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListModelCustomizationJobs {
  export type Input = ListModelCustomizationJobsRequest;
  export type Output = ListModelCustomizationJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListModelImportJobs {
  export type Input = ListModelImportJobsRequest;
  export type Output = ListModelImportJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListModelInvocationJobs {
  export type Input = ListModelInvocationJobsRequest;
  export type Output = ListModelInvocationJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPromptRouters {
  export type Input = ListPromptRoutersRequest;
  export type Output = ListPromptRoutersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProvisionedModelThroughputs {
  export type Input = ListProvisionedModelThroughputsRequest;
  export type Output = ListProvisionedModelThroughputsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
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

export declare namespace PutModelInvocationLoggingConfiguration {
  export type Input = PutModelInvocationLoggingConfigurationRequest;
  export type Output = PutModelInvocationLoggingConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutUseCaseForModelAccess {
  export type Input = PutUseCaseForModelAccessRequest;
  export type Output = PutUseCaseForModelAccessResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterMarketplaceModelEndpoint {
  export type Input = RegisterMarketplaceModelEndpointRequest;
  export type Output = RegisterMarketplaceModelEndpointResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopEvaluationJob {
  export type Input = StopEvaluationJobRequest;
  export type Output = StopEvaluationJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopModelCustomizationJob {
  export type Input = StopModelCustomizationJobRequest;
  export type Output = StopModelCustomizationJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopModelInvocationJob {
  export type Input = StopModelInvocationJobRequest;
  export type Output = StopModelInvocationJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateGuardrail {
  export type Input = UpdateGuardrailRequest;
  export type Output = UpdateGuardrailResponse;
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

export declare namespace UpdateMarketplaceModelEndpoint {
  export type Input = UpdateMarketplaceModelEndpointRequest;
  export type Output = UpdateMarketplaceModelEndpointResponse;
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

export declare namespace UpdateProvisionedModelThroughput {
  export type Input = UpdateProvisionedModelThroughputRequest;
  export type Output = UpdateProvisionedModelThroughputResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
