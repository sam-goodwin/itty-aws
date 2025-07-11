import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface imagebuilder {
  cancelImageCreation(
    input: CancelImageCreationRequest,
  ): Effect.Effect<
    CancelImageCreationResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  cancelLifecycleExecution(
    input: CancelLifecycleExecutionRequest,
  ): Effect.Effect<
    CancelLifecycleExecutionResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createComponent(
    input: CreateComponentRequest,
  ): Effect.Effect<
    CreateComponentResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidParameterCombinationException
    | InvalidRequestException
    | InvalidVersionNumberException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createContainerRecipe(
    input: CreateContainerRecipeRequest,
  ): Effect.Effect<
    CreateContainerRecipeResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | InvalidVersionNumberException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createDistributionConfiguration(
    input: CreateDistributionConfigurationRequest,
  ): Effect.Effect<
    CreateDistributionConfigurationResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidParameterCombinationException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createImage(
    input: CreateImageRequest,
  ): Effect.Effect<
    CreateImageResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createImagePipeline(
    input: CreateImagePipelineRequest,
  ): Effect.Effect<
    CreateImagePipelineResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createImageRecipe(
    input: CreateImageRecipeRequest,
  ): Effect.Effect<
    CreateImageRecipeResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | InvalidVersionNumberException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createInfrastructureConfiguration(
    input: CreateInfrastructureConfigurationRequest,
  ): Effect.Effect<
    CreateInfrastructureConfigurationResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createLifecyclePolicy(
    input: CreateLifecyclePolicyRequest,
  ): Effect.Effect<
    CreateLifecyclePolicyResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createWorkflow(
    input: CreateWorkflowRequest,
  ): Effect.Effect<
    CreateWorkflowResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidParameterCombinationException
    | InvalidRequestException
    | InvalidVersionNumberException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteComponent(
    input: DeleteComponentRequest,
  ): Effect.Effect<
    DeleteComponentResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteContainerRecipe(
    input: DeleteContainerRecipeRequest,
  ): Effect.Effect<
    DeleteContainerRecipeResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteDistributionConfiguration(
    input: DeleteDistributionConfigurationRequest,
  ): Effect.Effect<
    DeleteDistributionConfigurationResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteImage(
    input: DeleteImageRequest,
  ): Effect.Effect<
    DeleteImageResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteImagePipeline(
    input: DeleteImagePipelineRequest,
  ): Effect.Effect<
    DeleteImagePipelineResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteImageRecipe(
    input: DeleteImageRecipeRequest,
  ): Effect.Effect<
    DeleteImageRecipeResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteInfrastructureConfiguration(
    input: DeleteInfrastructureConfigurationRequest,
  ): Effect.Effect<
    DeleteInfrastructureConfigurationResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteLifecyclePolicy(
    input: DeleteLifecyclePolicyRequest,
  ): Effect.Effect<
    DeleteLifecyclePolicyResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteWorkflow(
    input: DeleteWorkflowRequest,
  ): Effect.Effect<
    DeleteWorkflowResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getComponent(
    input: GetComponentRequest,
  ): Effect.Effect<
    GetComponentResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getComponentPolicy(
    input: GetComponentPolicyRequest,
  ): Effect.Effect<
    GetComponentPolicyResponse,
    | CallRateLimitExceededException
    | ForbiddenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getContainerRecipe(
    input: GetContainerRecipeRequest,
  ): Effect.Effect<
    GetContainerRecipeResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getContainerRecipePolicy(
    input: GetContainerRecipePolicyRequest,
  ): Effect.Effect<
    GetContainerRecipePolicyResponse,
    | CallRateLimitExceededException
    | ForbiddenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getDistributionConfiguration(
    input: GetDistributionConfigurationRequest,
  ): Effect.Effect<
    GetDistributionConfigurationResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getImage(
    input: GetImageRequest,
  ): Effect.Effect<
    GetImageResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getImagePipeline(
    input: GetImagePipelineRequest,
  ): Effect.Effect<
    GetImagePipelineResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getImagePolicy(
    input: GetImagePolicyRequest,
  ): Effect.Effect<
    GetImagePolicyResponse,
    | CallRateLimitExceededException
    | ForbiddenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getImageRecipe(
    input: GetImageRecipeRequest,
  ): Effect.Effect<
    GetImageRecipeResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getImageRecipePolicy(
    input: GetImageRecipePolicyRequest,
  ): Effect.Effect<
    GetImageRecipePolicyResponse,
    | CallRateLimitExceededException
    | ForbiddenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getInfrastructureConfiguration(
    input: GetInfrastructureConfigurationRequest,
  ): Effect.Effect<
    GetInfrastructureConfigurationResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getLifecycleExecution(
    input: GetLifecycleExecutionRequest,
  ): Effect.Effect<
    GetLifecycleExecutionResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getLifecyclePolicy(
    input: GetLifecyclePolicyRequest,
  ): Effect.Effect<
    GetLifecyclePolicyResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getMarketplaceResource(
    input: GetMarketplaceResourceRequest,
  ): Effect.Effect<
    GetMarketplaceResourceResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getWorkflow(
    input: GetWorkflowRequest,
  ): Effect.Effect<
    GetWorkflowResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getWorkflowExecution(
    input: GetWorkflowExecutionRequest,
  ): Effect.Effect<
    GetWorkflowExecutionResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getWorkflowStepExecution(
    input: GetWorkflowStepExecutionRequest,
  ): Effect.Effect<
    GetWorkflowStepExecutionResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  importComponent(
    input: ImportComponentRequest,
  ): Effect.Effect<
    ImportComponentResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidParameterCombinationException
    | InvalidRequestException
    | InvalidVersionNumberException
    | ResourceInUseException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  importDiskImage(
    input: ImportDiskImageRequest,
  ): Effect.Effect<
    ImportDiskImageResponse,
    | ClientException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  importVmImage(
    input: ImportVmImageRequest,
  ): Effect.Effect<
    ImportVmImageResponse,
    | ClientException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listComponentBuildVersions(
    input: ListComponentBuildVersionsRequest,
  ): Effect.Effect<
    ListComponentBuildVersionsResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listComponents(
    input: ListComponentsRequest,
  ): Effect.Effect<
    ListComponentsResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listContainerRecipes(
    input: ListContainerRecipesRequest,
  ): Effect.Effect<
    ListContainerRecipesResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listDistributionConfigurations(
    input: ListDistributionConfigurationsRequest,
  ): Effect.Effect<
    ListDistributionConfigurationsResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listImageBuildVersions(
    input: ListImageBuildVersionsRequest,
  ): Effect.Effect<
    ListImageBuildVersionsResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listImagePackages(
    input: ListImagePackagesRequest,
  ): Effect.Effect<
    ListImagePackagesResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listImagePipelineImages(
    input: ListImagePipelineImagesRequest,
  ): Effect.Effect<
    ListImagePipelineImagesResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listImagePipelines(
    input: ListImagePipelinesRequest,
  ): Effect.Effect<
    ListImagePipelinesResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listImageRecipes(
    input: ListImageRecipesRequest,
  ): Effect.Effect<
    ListImageRecipesResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listImages(
    input: ListImagesRequest,
  ): Effect.Effect<
    ListImagesResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listImageScanFindingAggregations(
    input: ListImageScanFindingAggregationsRequest,
  ): Effect.Effect<
    ListImageScanFindingAggregationsResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listImageScanFindings(
    input: ListImageScanFindingsRequest,
  ): Effect.Effect<
    ListImageScanFindingsResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listInfrastructureConfigurations(
    input: ListInfrastructureConfigurationsRequest,
  ): Effect.Effect<
    ListInfrastructureConfigurationsResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listLifecycleExecutionResources(
    input: ListLifecycleExecutionResourcesRequest,
  ): Effect.Effect<
    ListLifecycleExecutionResourcesResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listLifecycleExecutions(
    input: ListLifecycleExecutionsRequest,
  ): Effect.Effect<
    ListLifecycleExecutionsResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listLifecyclePolicies(
    input: ListLifecyclePoliciesRequest,
  ): Effect.Effect<
    ListLifecyclePoliciesResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError
  >;
  listWaitingWorkflowSteps(
    input: ListWaitingWorkflowStepsRequest,
  ): Effect.Effect<
    ListWaitingWorkflowStepsResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listWorkflowBuildVersions(
    input: ListWorkflowBuildVersionsRequest,
  ): Effect.Effect<
    ListWorkflowBuildVersionsResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listWorkflowExecutions(
    input: ListWorkflowExecutionsRequest,
  ): Effect.Effect<
    ListWorkflowExecutionsResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listWorkflows(
    input: ListWorkflowsRequest,
  ): Effect.Effect<
    ListWorkflowsResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listWorkflowStepExecutions(
    input: ListWorkflowStepExecutionsRequest,
  ): Effect.Effect<
    ListWorkflowStepExecutionsResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putComponentPolicy(
    input: PutComponentPolicyRequest,
  ): Effect.Effect<
    PutComponentPolicyResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidParameterValueException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putContainerRecipePolicy(
    input: PutContainerRecipePolicyRequest,
  ): Effect.Effect<
    PutContainerRecipePolicyResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidParameterValueException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putImagePolicy(
    input: PutImagePolicyRequest,
  ): Effect.Effect<
    PutImagePolicyResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidParameterValueException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putImageRecipePolicy(
    input: PutImageRecipePolicyRequest,
  ): Effect.Effect<
    PutImageRecipePolicyResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidParameterValueException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  sendWorkflowStepAction(
    input: SendWorkflowStepActionRequest,
  ): Effect.Effect<
    SendWorkflowStepActionResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidParameterValueException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  startImagePipelineExecution(
    input: StartImagePipelineExecutionRequest,
  ): Effect.Effect<
    StartImagePipelineExecutionResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  startResourceStateUpdate(
    input: StartResourceStateUpdateRequest,
  ): Effect.Effect<
    StartResourceStateUpdateResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError
  >;
  updateDistributionConfiguration(
    input: UpdateDistributionConfigurationRequest,
  ): Effect.Effect<
    UpdateDistributionConfigurationResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidParameterCombinationException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateImagePipeline(
    input: UpdateImagePipelineRequest,
  ): Effect.Effect<
    UpdateImagePipelineResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateInfrastructureConfiguration(
    input: UpdateInfrastructureConfigurationRequest,
  ): Effect.Effect<
    UpdateInfrastructureConfigurationResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateLifecyclePolicy(
    input: UpdateLifecyclePolicyRequest,
  ): Effect.Effect<
    UpdateLifecyclePolicyResponse,
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidParameterCombinationException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError
  >;
}

export type Imagebuilder = imagebuilder;

export interface AccountAggregation {
  accountId?: string;
  severityCounts?: SeverityCounts;
}
export type AccountId = string;

export type AccountList = Array<string>;
export interface AdditionalInstanceConfiguration {
  systemsManagerAgent?: SystemsManagerAgent;
  userDataOverride?: string;
}
export interface Ami {
  region?: string;
  image?: string;
  name?: string;
  description?: string;
  state?: ImageState;
  accountId?: string;
}
export interface AmiDistributionConfiguration {
  name?: string;
  description?: string;
  targetAccountIds?: Array<string>;
  amiTags?: Record<string, string>;
  kmsKeyId?: string;
  launchPermission?: LaunchPermissionConfiguration;
}
export type AmiList = Array<Ami>;
export type AmiNameString = string;

export type Arn = string;

export type BuildType =
  | "USER_INITIATED"
  | "SCHEDULED"
  | "IMPORT"
  | "IMPORT_ISO";
export declare class CallRateLimitExceededException extends Data.TaggedError(
  "CallRateLimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface CancelImageCreationRequest {
  imageBuildVersionArn: string;
  clientToken: string;
}
export interface CancelImageCreationResponse {
  requestId?: string;
  clientToken?: string;
  imageBuildVersionArn?: string;
}
export interface CancelLifecycleExecutionRequest {
  lifecycleExecutionId: string;
  clientToken: string;
}
export interface CancelLifecycleExecutionResponse {
  lifecycleExecutionId?: string;
}
export declare class ClientException extends Data.TaggedError(
  "ClientException",
)<{
  readonly message?: string;
}> {}
export type ClientToken = string;

export interface Component {
  arn?: string;
  name?: string;
  version?: string;
  description?: string;
  changeDescription?: string;
  type?: ComponentType;
  platform?: Platform;
  supportedOsVersions?: Array<string>;
  state?: ComponentState;
  parameters?: Array<ComponentParameterDetail>;
  owner?: string;
  data?: string;
  kmsKeyId?: string;
  encrypted?: boolean;
  dateCreated?: string;
  tags?: Record<string, string>;
  publisher?: string;
  obfuscate?: boolean;
  productCodes?: Array<ProductCodeListItem>;
}
export type ComponentBuildVersionArn = string;

export interface ComponentConfiguration {
  componentArn: string;
  parameters?: Array<ComponentParameter>;
}
export type ComponentConfigurationList = Array<ComponentConfiguration>;
export type ComponentData = string;

export type ComponentFormat = "SHELL";
export interface ComponentParameter {
  name: string;
  value: Array<string>;
}
export type ComponentParameterDescription = string;

export interface ComponentParameterDetail {
  name: string;
  type: string;
  defaultValue?: Array<string>;
  description?: string;
}
export type ComponentParameterDetailList = Array<ComponentParameterDetail>;
export type ComponentParameterList = Array<ComponentParameter>;
export type ComponentParameterName = string;

export type ComponentParameterType = string;

export type ComponentParameterValue = string;

export type ComponentParameterValueList = Array<string>;
export interface ComponentState {
  status?: ComponentStatus;
  reason?: string;
}
export type ComponentStatus = "DEPRECATED" | "DISABLED" | "ACTIVE";
export interface ComponentSummary {
  arn?: string;
  name?: string;
  version?: string;
  platform?: Platform;
  supportedOsVersions?: Array<string>;
  state?: ComponentState;
  type?: ComponentType;
  owner?: string;
  description?: string;
  changeDescription?: string;
  dateCreated?: string;
  tags?: Record<string, string>;
  publisher?: string;
  obfuscate?: boolean;
}
export type ComponentSummaryList = Array<ComponentSummary>;
export type ComponentType = "BUILD" | "TEST";
export interface ComponentVersion {
  arn?: string;
  name?: string;
  version?: string;
  description?: string;
  platform?: Platform;
  supportedOsVersions?: Array<string>;
  type?: ComponentType;
  owner?: string;
  dateCreated?: string;
  status?: ComponentStatus;
  productCodes?: Array<ProductCodeListItem>;
}
export type ComponentVersionArn = string;

export type ComponentVersionArnOrBuildVersionArn = string;

export type ComponentVersionList = Array<ComponentVersion>;
export interface Container {
  region?: string;
  imageUris?: Array<string>;
}
export interface ContainerDistributionConfiguration {
  description?: string;
  containerTags?: Array<string>;
  targetRepository: TargetContainerRepository;
}
export type ContainerList = Array<Container>;
export interface ContainerRecipe {
  arn?: string;
  containerType?: ContainerType;
  name?: string;
  description?: string;
  platform?: Platform;
  owner?: string;
  version?: string;
  components?: Array<ComponentConfiguration>;
  instanceConfiguration?: InstanceConfiguration;
  dockerfileTemplateData?: string;
  kmsKeyId?: string;
  encrypted?: boolean;
  parentImage?: string;
  dateCreated?: string;
  tags?: Record<string, string>;
  workingDirectory?: string;
  targetRepository?: TargetContainerRepository;
}
export type ContainerRecipeArn = string;

export interface ContainerRecipeSummary {
  arn?: string;
  containerType?: ContainerType;
  name?: string;
  platform?: Platform;
  owner?: string;
  parentImage?: string;
  dateCreated?: string;
  tags?: Record<string, string>;
}
export type ContainerRecipeSummaryList = Array<ContainerRecipeSummary>;
export type ContainerRepositoryService = "ECR";
export type ContainerType = "DOCKER";
export interface CreateComponentRequest {
  name: string;
  semanticVersion: string;
  description?: string;
  changeDescription?: string;
  platform: Platform;
  supportedOsVersions?: Array<string>;
  data?: string;
  uri?: string;
  kmsKeyId?: string;
  tags?: Record<string, string>;
  clientToken: string;
}
export interface CreateComponentResponse {
  requestId?: string;
  clientToken?: string;
  componentBuildVersionArn?: string;
}
export interface CreateContainerRecipeRequest {
  containerType: ContainerType;
  name: string;
  description?: string;
  semanticVersion: string;
  components: Array<ComponentConfiguration>;
  instanceConfiguration?: InstanceConfiguration;
  dockerfileTemplateData?: string;
  dockerfileTemplateUri?: string;
  platformOverride?: Platform;
  imageOsVersionOverride?: string;
  parentImage: string;
  tags?: Record<string, string>;
  workingDirectory?: string;
  targetRepository: TargetContainerRepository;
  kmsKeyId?: string;
  clientToken: string;
}
export interface CreateContainerRecipeResponse {
  requestId?: string;
  clientToken?: string;
  containerRecipeArn?: string;
}
export interface CreateDistributionConfigurationRequest {
  name: string;
  description?: string;
  distributions: Array<Distribution>;
  tags?: Record<string, string>;
  clientToken: string;
}
export interface CreateDistributionConfigurationResponse {
  requestId?: string;
  clientToken?: string;
  distributionConfigurationArn?: string;
}
export interface CreateImagePipelineRequest {
  name: string;
  description?: string;
  imageRecipeArn?: string;
  containerRecipeArn?: string;
  infrastructureConfigurationArn: string;
  distributionConfigurationArn?: string;
  imageTestsConfiguration?: ImageTestsConfiguration;
  enhancedImageMetadataEnabled?: boolean;
  schedule?: Schedule;
  status?: PipelineStatus;
  tags?: Record<string, string>;
  clientToken: string;
  imageScanningConfiguration?: ImageScanningConfiguration;
  workflows?: Array<WorkflowConfiguration>;
  executionRole?: string;
}
export interface CreateImagePipelineResponse {
  requestId?: string;
  clientToken?: string;
  imagePipelineArn?: string;
}
export interface CreateImageRecipeRequest {
  name: string;
  description?: string;
  semanticVersion: string;
  components: Array<ComponentConfiguration>;
  parentImage: string;
  blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
  tags?: Record<string, string>;
  workingDirectory?: string;
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration;
  clientToken: string;
}
export interface CreateImageRecipeResponse {
  requestId?: string;
  clientToken?: string;
  imageRecipeArn?: string;
}
export interface CreateImageRequest {
  imageRecipeArn?: string;
  containerRecipeArn?: string;
  distributionConfigurationArn?: string;
  infrastructureConfigurationArn: string;
  imageTestsConfiguration?: ImageTestsConfiguration;
  enhancedImageMetadataEnabled?: boolean;
  tags?: Record<string, string>;
  clientToken: string;
  imageScanningConfiguration?: ImageScanningConfiguration;
  workflows?: Array<WorkflowConfiguration>;
  executionRole?: string;
}
export interface CreateImageResponse {
  requestId?: string;
  clientToken?: string;
  imageBuildVersionArn?: string;
}
export interface CreateInfrastructureConfigurationRequest {
  name: string;
  description?: string;
  instanceTypes?: Array<string>;
  instanceProfileName: string;
  securityGroupIds?: Array<string>;
  subnetId?: string;
  logging?: Logging;
  keyPair?: string;
  terminateInstanceOnFailure?: boolean;
  snsTopicArn?: string;
  resourceTags?: Record<string, string>;
  instanceMetadataOptions?: InstanceMetadataOptions;
  tags?: Record<string, string>;
  placement?: Placement;
  clientToken: string;
}
export interface CreateInfrastructureConfigurationResponse {
  requestId?: string;
  clientToken?: string;
  infrastructureConfigurationArn?: string;
}
export interface CreateLifecyclePolicyRequest {
  name: string;
  description?: string;
  status?: LifecyclePolicyStatus;
  executionRole: string;
  resourceType: LifecyclePolicyResourceType;
  policyDetails: Array<LifecyclePolicyDetail>;
  resourceSelection: LifecyclePolicyResourceSelection;
  tags?: Record<string, string>;
  clientToken: string;
}
export interface CreateLifecyclePolicyResponse {
  clientToken?: string;
  lifecyclePolicyArn?: string;
}
export interface CreateWorkflowRequest {
  name: string;
  semanticVersion: string;
  description?: string;
  changeDescription?: string;
  data?: string;
  uri?: string;
  kmsKeyId?: string;
  tags?: Record<string, string>;
  clientToken: string;
  type: WorkflowType;
}
export interface CreateWorkflowResponse {
  clientToken?: string;
  workflowBuildVersionArn?: string;
}
export interface CvssScore {
  baseScore?: number;
  scoringVector?: string;
  version?: string;
  source?: string;
}
export interface CvssScoreAdjustment {
  metric?: string;
  reason?: string;
}
export type CvssScoreAdjustmentList = Array<CvssScoreAdjustment>;
export interface CvssScoreDetails {
  scoreSource?: string;
  cvssSource?: string;
  version?: string;
  score?: number;
  scoringVector?: string;
  adjustments?: Array<CvssScoreAdjustment>;
}
export type CvssScoreList = Array<CvssScore>;
export type DateTime = string;

export type DateTimeTimestamp = Date | string;

export interface DeleteComponentRequest {
  componentBuildVersionArn: string;
}
export interface DeleteComponentResponse {
  requestId?: string;
  componentBuildVersionArn?: string;
}
export interface DeleteContainerRecipeRequest {
  containerRecipeArn: string;
}
export interface DeleteContainerRecipeResponse {
  requestId?: string;
  containerRecipeArn?: string;
}
export interface DeleteDistributionConfigurationRequest {
  distributionConfigurationArn: string;
}
export interface DeleteDistributionConfigurationResponse {
  requestId?: string;
  distributionConfigurationArn?: string;
}
export interface DeleteImagePipelineRequest {
  imagePipelineArn: string;
}
export interface DeleteImagePipelineResponse {
  requestId?: string;
  imagePipelineArn?: string;
}
export interface DeleteImageRecipeRequest {
  imageRecipeArn: string;
}
export interface DeleteImageRecipeResponse {
  requestId?: string;
  imageRecipeArn?: string;
}
export interface DeleteImageRequest {
  imageBuildVersionArn: string;
}
export interface DeleteImageResponse {
  requestId?: string;
  imageBuildVersionArn?: string;
}
export interface DeleteInfrastructureConfigurationRequest {
  infrastructureConfigurationArn: string;
}
export interface DeleteInfrastructureConfigurationResponse {
  requestId?: string;
  infrastructureConfigurationArn?: string;
}
export interface DeleteLifecyclePolicyRequest {
  lifecyclePolicyArn: string;
}
export interface DeleteLifecyclePolicyResponse {
  lifecyclePolicyArn?: string;
}
export interface DeleteWorkflowRequest {
  workflowBuildVersionArn: string;
}
export interface DeleteWorkflowResponse {
  workflowBuildVersionArn?: string;
}
export type DiskImageFormat = "VMDK" | "RAW" | "VHD";
export interface Distribution {
  region: string;
  amiDistributionConfiguration?: AmiDistributionConfiguration;
  containerDistributionConfiguration?: ContainerDistributionConfiguration;
  licenseConfigurationArns?: Array<string>;
  launchTemplateConfigurations?: Array<LaunchTemplateConfiguration>;
  s3ExportConfiguration?: S3ExportConfiguration;
  fastLaunchConfigurations?: Array<FastLaunchConfiguration>;
  ssmParameterConfigurations?: Array<SsmParameterConfiguration>;
}
export interface DistributionConfiguration {
  arn?: string;
  name?: string;
  description?: string;
  distributions?: Array<Distribution>;
  timeoutMinutes: number;
  dateCreated?: string;
  dateUpdated?: string;
  tags?: Record<string, string>;
}
export type DistributionConfigurationArn = string;

export interface DistributionConfigurationSummary {
  arn?: string;
  name?: string;
  description?: string;
  dateCreated?: string;
  dateUpdated?: string;
  tags?: Record<string, string>;
  regions?: Array<string>;
}
export type DistributionConfigurationSummaryList =
  Array<DistributionConfigurationSummary>;
export type DistributionList = Array<Distribution>;
export type DistributionTimeoutMinutes = number;

export type DockerFileTemplate = string;

export interface EbsInstanceBlockDeviceSpecification {
  encrypted?: boolean;
  deleteOnTermination?: boolean;
  iops?: number;
  kmsKeyId?: string;
  snapshotId?: string;
  volumeSize?: number;
  volumeType?: EbsVolumeType;
  throughput?: number;
}
export type EbsIopsInteger = number;

export type EbsVolumeSizeInteger = number;

export type EbsVolumeThroughput = number;

export type EbsVolumeType =
  | "STANDARD"
  | "IO1"
  | "IO2"
  | "GP2"
  | "GP3"
  | "SC1"
  | "ST1";
export interface EcrConfiguration {
  repositoryName?: string;
  containerTags?: Array<string>;
}
export type EmptyString = string;

export type ErrorMessage = string;

export interface FastLaunchConfiguration {
  enabled: boolean;
  snapshotConfiguration?: FastLaunchSnapshotConfiguration;
  maxParallelLaunches?: number;
  launchTemplate?: FastLaunchLaunchTemplateSpecification;
  accountId?: string;
}
export type FastLaunchConfigurationList = Array<FastLaunchConfiguration>;
export interface FastLaunchLaunchTemplateSpecification {
  launchTemplateId?: string;
  launchTemplateName?: string;
  launchTemplateVersion?: string;
}
export interface FastLaunchSnapshotConfiguration {
  targetResourceCount?: number;
}
export interface Filter {
  name?: string;
  values?: Array<string>;
}
export type FilterList = Array<Filter>;
export type FilterName = string;

export type FilterValue = string;

export type FilterValues = Array<string>;
export declare class ForbiddenException extends Data.TaggedError(
  "ForbiddenException",
)<{
  readonly message?: string;
}> {}
export interface GetComponentPolicyRequest {
  componentArn: string;
}
export interface GetComponentPolicyResponse {
  requestId?: string;
  policy?: string;
}
export interface GetComponentRequest {
  componentBuildVersionArn: string;
}
export interface GetComponentResponse {
  requestId?: string;
  component?: Component;
}
export interface GetContainerRecipePolicyRequest {
  containerRecipeArn: string;
}
export interface GetContainerRecipePolicyResponse {
  requestId?: string;
  policy?: string;
}
export interface GetContainerRecipeRequest {
  containerRecipeArn: string;
}
export interface GetContainerRecipeResponse {
  requestId?: string;
  containerRecipe?: ContainerRecipe;
}
export interface GetDistributionConfigurationRequest {
  distributionConfigurationArn: string;
}
export interface GetDistributionConfigurationResponse {
  requestId?: string;
  distributionConfiguration?: DistributionConfiguration;
}
export interface GetImagePipelineRequest {
  imagePipelineArn: string;
}
export interface GetImagePipelineResponse {
  requestId?: string;
  imagePipeline?: ImagePipeline;
}
export interface GetImagePolicyRequest {
  imageArn: string;
}
export interface GetImagePolicyResponse {
  requestId?: string;
  policy?: string;
}
export interface GetImageRecipePolicyRequest {
  imageRecipeArn: string;
}
export interface GetImageRecipePolicyResponse {
  requestId?: string;
  policy?: string;
}
export interface GetImageRecipeRequest {
  imageRecipeArn: string;
}
export interface GetImageRecipeResponse {
  requestId?: string;
  imageRecipe?: ImageRecipe;
}
export interface GetImageRequest {
  imageBuildVersionArn: string;
}
export interface GetImageResponse {
  requestId?: string;
  image?: Image;
}
export interface GetInfrastructureConfigurationRequest {
  infrastructureConfigurationArn: string;
}
export interface GetInfrastructureConfigurationResponse {
  requestId?: string;
  infrastructureConfiguration?: InfrastructureConfiguration;
}
export interface GetLifecycleExecutionRequest {
  lifecycleExecutionId: string;
}
export interface GetLifecycleExecutionResponse {
  lifecycleExecution?: LifecycleExecution;
}
export interface GetLifecyclePolicyRequest {
  lifecyclePolicyArn: string;
}
export interface GetLifecyclePolicyResponse {
  lifecyclePolicy?: LifecyclePolicy;
}
export interface GetMarketplaceResourceRequest {
  resourceType: MarketplaceResourceType;
  resourceArn: string;
  resourceLocation?: string;
}
export interface GetMarketplaceResourceResponse {
  resourceArn?: string;
  url?: string;
  data?: string;
}
export interface GetWorkflowExecutionRequest {
  workflowExecutionId: string;
}
export interface GetWorkflowExecutionResponse {
  requestId?: string;
  workflowBuildVersionArn?: string;
  workflowExecutionId?: string;
  imageBuildVersionArn?: string;
  type?: WorkflowType;
  status?: WorkflowExecutionStatus;
  message?: string;
  totalStepCount?: number;
  totalStepsSucceeded?: number;
  totalStepsFailed?: number;
  totalStepsSkipped?: number;
  startTime?: string;
  endTime?: string;
  parallelGroup?: string;
}
export interface GetWorkflowRequest {
  workflowBuildVersionArn: string;
}
export interface GetWorkflowResponse {
  workflow?: Workflow;
}
export interface GetWorkflowStepExecutionRequest {
  stepExecutionId: string;
}
export interface GetWorkflowStepExecutionResponse {
  requestId?: string;
  stepExecutionId?: string;
  workflowBuildVersionArn?: string;
  workflowExecutionId?: string;
  imageBuildVersionArn?: string;
  name?: string;
  description?: string;
  action?: string;
  status?: WorkflowStepExecutionStatus;
  rollbackStatus?: WorkflowStepExecutionRollbackStatus;
  message?: string;
  inputs?: string;
  outputs?: string;
  startTime?: string;
  endTime?: string;
  onFailure?: string;
  timeoutSeconds?: number;
}
export type HttpPutResponseHopLimit = number;

export type HttpTokens = string;

export declare class IdempotentParameterMismatchException extends Data.TaggedError(
  "IdempotentParameterMismatchException",
)<{
  readonly message?: string;
}> {}
export interface Image {
  arn?: string;
  type?: ImageType;
  name?: string;
  version?: string;
  platform?: Platform;
  enhancedImageMetadataEnabled?: boolean;
  osVersion?: string;
  state?: ImageState;
  imageRecipe?: ImageRecipe;
  containerRecipe?: ContainerRecipe;
  sourcePipelineName?: string;
  sourcePipelineArn?: string;
  infrastructureConfiguration?: InfrastructureConfiguration;
  distributionConfiguration?: DistributionConfiguration;
  imageTestsConfiguration?: ImageTestsConfiguration;
  dateCreated?: string;
  outputResources?: OutputResources;
  tags?: Record<string, string>;
  buildType?: BuildType;
  imageSource?: ImageSource;
  scanState?: ImageScanState;
  imageScanningConfiguration?: ImageScanningConfiguration;
  deprecationTime?: Date | string;
  lifecycleExecutionId?: string;
  executionRole?: string;
  workflows?: Array<WorkflowConfiguration>;
}
export interface ImageAggregation {
  imageBuildVersionArn?: string;
  severityCounts?: SeverityCounts;
}
export type ImageBuilderArn = string;

export type ImageBuildMessage = string;

export type ImageBuildVersionArn = string;

export interface ImagePackage {
  packageName?: string;
  packageVersion?: string;
}
export type ImagePackageList = Array<ImagePackage>;
export interface ImagePipeline {
  arn?: string;
  name?: string;
  description?: string;
  platform?: Platform;
  enhancedImageMetadataEnabled?: boolean;
  imageRecipeArn?: string;
  containerRecipeArn?: string;
  infrastructureConfigurationArn?: string;
  distributionConfigurationArn?: string;
  imageTestsConfiguration?: ImageTestsConfiguration;
  schedule?: Schedule;
  status?: PipelineStatus;
  dateCreated?: string;
  dateUpdated?: string;
  dateLastRun?: string;
  dateNextRun?: string;
  tags?: Record<string, string>;
  imageScanningConfiguration?: ImageScanningConfiguration;
  executionRole?: string;
  workflows?: Array<WorkflowConfiguration>;
}
export interface ImagePipelineAggregation {
  imagePipelineArn?: string;
  severityCounts?: SeverityCounts;
}
export type ImagePipelineArn = string;

export type ImagePipelineList = Array<ImagePipeline>;
export interface ImageRecipe {
  arn?: string;
  type?: ImageType;
  name?: string;
  description?: string;
  platform?: Platform;
  owner?: string;
  version?: string;
  components?: Array<ComponentConfiguration>;
  parentImage?: string;
  blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
  dateCreated?: string;
  tags?: Record<string, string>;
  workingDirectory?: string;
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration;
}
export type ImageRecipeArn = string;

export interface ImageRecipeSummary {
  arn?: string;
  name?: string;
  platform?: Platform;
  owner?: string;
  parentImage?: string;
  dateCreated?: string;
  tags?: Record<string, string>;
}
export type ImageRecipeSummaryList = Array<ImageRecipeSummary>;
export interface ImageScanFinding {
  awsAccountId?: string;
  imageBuildVersionArn?: string;
  imagePipelineArn?: string;
  type?: string;
  description?: string;
  title?: string;
  remediation?: Remediation;
  severity?: string;
  firstObservedAt?: Date | string;
  updatedAt?: Date | string;
  inspectorScore?: number;
  inspectorScoreDetails?: InspectorScoreDetails;
  packageVulnerabilityDetails?: PackageVulnerabilityDetails;
  fixAvailable?: string;
}
export interface ImageScanFindingAggregation {
  accountAggregation?: AccountAggregation;
  imageAggregation?: ImageAggregation;
  imagePipelineAggregation?: ImagePipelineAggregation;
  vulnerabilityIdAggregation?: VulnerabilityIdAggregation;
}
export type ImageScanFindingAggregationsList =
  Array<ImageScanFindingAggregation>;
export interface ImageScanFindingsFilter {
  name?: string;
  values?: Array<string>;
}
export type ImageScanFindingsFilterList = Array<ImageScanFindingsFilter>;
export type ImageScanFindingsFilterValues = Array<string>;
export type ImageScanFindingsList = Array<ImageScanFinding>;
export interface ImageScanningConfiguration {
  imageScanningEnabled?: boolean;
  ecrConfiguration?: EcrConfiguration;
}
export interface ImageScanState {
  status?: ImageScanStatus;
  reason?: string;
}
export type ImageScanStatus =
  | "PENDING"
  | "SCANNING"
  | "COLLECTING"
  | "COMPLETED"
  | "ABANDONED"
  | "FAILED"
  | "TIMED_OUT";
export type ImageSource =
  | "AMAZON_MANAGED"
  | "AWS_MARKETPLACE"
  | "IMPORTED"
  | "CUSTOM";
export interface ImageState {
  status?: ImageStatus;
  reason?: string;
}
export type ImageStatus =
  | "PENDING"
  | "CREATING"
  | "BUILDING"
  | "TESTING"
  | "DISTRIBUTING"
  | "INTEGRATING"
  | "AVAILABLE"
  | "CANCELLED"
  | "FAILED"
  | "DEPRECATED"
  | "DELETED"
  | "DISABLED";
export interface ImageSummary {
  arn?: string;
  name?: string;
  type?: ImageType;
  version?: string;
  platform?: Platform;
  osVersion?: string;
  state?: ImageState;
  owner?: string;
  dateCreated?: string;
  outputResources?: OutputResources;
  tags?: Record<string, string>;
  buildType?: BuildType;
  imageSource?: ImageSource;
  deprecationTime?: Date | string;
  lifecycleExecutionId?: string;
}
export type ImageSummaryList = Array<ImageSummary>;
export interface ImageTestsConfiguration {
  imageTestsEnabled?: boolean;
  timeoutMinutes?: number;
}
export type ImageTestsTimeoutMinutes = number;

export type ImageType = "AMI" | "DOCKER";
export interface ImageVersion {
  arn?: string;
  name?: string;
  type?: ImageType;
  version?: string;
  platform?: Platform;
  osVersion?: string;
  owner?: string;
  dateCreated?: string;
  buildType?: BuildType;
  imageSource?: ImageSource;
}
export type ImageVersionArn = string;

export type ImageVersionArnOrBuildVersionArn = string;

export type ImageVersionList = Array<ImageVersion>;
export interface ImportComponentRequest {
  name: string;
  semanticVersion: string;
  description?: string;
  changeDescription?: string;
  type: ComponentType;
  format: ComponentFormat;
  platform: Platform;
  data?: string;
  uri?: string;
  kmsKeyId?: string;
  tags?: Record<string, string>;
  clientToken: string;
}
export interface ImportComponentResponse {
  requestId?: string;
  clientToken?: string;
  componentBuildVersionArn?: string;
}
export interface ImportDiskImageRequest {
  name: string;
  semanticVersion: string;
  description?: string;
  platform: string;
  osVersion: string;
  executionRole?: string;
  infrastructureConfigurationArn: string;
  uri: string;
  tags?: Record<string, string>;
  clientToken: string;
}
export interface ImportDiskImageResponse {
  clientToken?: string;
  imageBuildVersionArn?: string;
}
export interface ImportVmImageRequest {
  name: string;
  semanticVersion: string;
  description?: string;
  platform: Platform;
  osVersion?: string;
  vmImportTaskId: string;
  tags?: Record<string, string>;
  clientToken: string;
}
export interface ImportVmImageResponse {
  requestId?: string;
  imageArn?: string;
  clientToken?: string;
}
export interface InfrastructureConfiguration {
  arn?: string;
  name?: string;
  description?: string;
  instanceTypes?: Array<string>;
  instanceProfileName?: string;
  securityGroupIds?: Array<string>;
  subnetId?: string;
  logging?: Logging;
  keyPair?: string;
  terminateInstanceOnFailure?: boolean;
  snsTopicArn?: string;
  dateCreated?: string;
  dateUpdated?: string;
  resourceTags?: Record<string, string>;
  instanceMetadataOptions?: InstanceMetadataOptions;
  tags?: Record<string, string>;
  placement?: Placement;
}
export type InfrastructureConfigurationArn = string;

export interface InfrastructureConfigurationSummary {
  arn?: string;
  name?: string;
  description?: string;
  dateCreated?: string;
  dateUpdated?: string;
  resourceTags?: Record<string, string>;
  tags?: Record<string, string>;
  instanceTypes?: Array<string>;
  instanceProfileName?: string;
  placement?: Placement;
}
export type InfrastructureConfigurationSummaryList =
  Array<InfrastructureConfigurationSummary>;
export type InlineComponentData = string;

export type InlineDockerFileTemplate = string;

export type InlineWorkflowData = string;

export interface InspectorScoreDetails {
  adjustedCvss?: CvssScoreDetails;
}
export interface InstanceBlockDeviceMapping {
  deviceName?: string;
  ebs?: EbsInstanceBlockDeviceSpecification;
  virtualName?: string;
  noDevice?: string;
}
export type InstanceBlockDeviceMappings = Array<InstanceBlockDeviceMapping>;
export interface InstanceConfiguration {
  image?: string;
  blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
}
export interface InstanceMetadataOptions {
  httpTokens?: string;
  httpPutResponseHopLimit?: number;
}
export type InstanceProfileNameType = string;

export type InstanceType = string;

export type InstanceTypeList = Array<string>;
export declare class InvalidPaginationTokenException extends Data.TaggedError(
  "InvalidPaginationTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterCombinationException extends Data.TaggedError(
  "InvalidParameterCombinationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends Data.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterValueException extends Data.TaggedError(
  "InvalidParameterValueException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidVersionNumberException extends Data.TaggedError(
  "InvalidVersionNumberException",
)<{
  readonly message?: string;
}> {}
export interface LaunchPermissionConfiguration {
  userIds?: Array<string>;
  userGroups?: Array<string>;
  organizationArns?: Array<string>;
  organizationalUnitArns?: Array<string>;
}
export interface LaunchTemplateConfiguration {
  launchTemplateId: string;
  accountId?: string;
  setDefaultVersion?: boolean;
}
export type LaunchTemplateConfigurationList =
  Array<LaunchTemplateConfiguration>;
export type LaunchTemplateId = string;

export type LicenseConfigurationArn = string;

export type LicenseConfigurationArnList = Array<string>;
export interface LifecycleExecution {
  lifecycleExecutionId?: string;
  lifecyclePolicyArn?: string;
  resourcesImpactedSummary?: LifecycleExecutionResourcesImpactedSummary;
  state?: LifecycleExecutionState;
  startTime?: Date | string;
  endTime?: Date | string;
}
export type LifecycleExecutionId = string;

export interface LifecycleExecutionResource {
  accountId?: string;
  resourceId?: string;
  state?: LifecycleExecutionResourceState;
  action?: LifecycleExecutionResourceAction;
  region?: string;
  snapshots?: Array<LifecycleExecutionSnapshotResource>;
  imageUris?: Array<string>;
  startTime?: Date | string;
  endTime?: Date | string;
}
export interface LifecycleExecutionResourceAction {
  name?: LifecycleExecutionResourceActionName;
  reason?: string;
}
export type LifecycleExecutionResourceActionName =
  | "AVAILABLE"
  | "DELETE"
  | "DEPRECATE"
  | "DISABLE";
export type LifecycleExecutionResourceList = Array<LifecycleExecutionResource>;
export interface LifecycleExecutionResourcesImpactedSummary {
  hasImpactedResources?: boolean;
}
export interface LifecycleExecutionResourceState {
  status?: LifecycleExecutionResourceStatus;
  reason?: string;
}
export type LifecycleExecutionResourceStatus =
  | "FAILED"
  | "IN_PROGRESS"
  | "SKIPPED"
  | "SUCCESS";
export type LifecycleExecutionsList = Array<LifecycleExecution>;
export interface LifecycleExecutionSnapshotResource {
  snapshotId?: string;
  state?: LifecycleExecutionResourceState;
}
export type LifecycleExecutionSnapshotResourceList =
  Array<LifecycleExecutionSnapshotResource>;
export interface LifecycleExecutionState {
  status?: LifecycleExecutionStatus;
  reason?: string;
}
export type LifecycleExecutionStatus =
  | "IN_PROGRESS"
  | "CANCELLED"
  | "CANCELLING"
  | "FAILED"
  | "SUCCESS"
  | "PENDING";
export interface LifecyclePolicy {
  arn?: string;
  name?: string;
  description?: string;
  status?: LifecyclePolicyStatus;
  executionRole?: string;
  resourceType?: LifecyclePolicyResourceType;
  policyDetails?: Array<LifecyclePolicyDetail>;
  resourceSelection?: LifecyclePolicyResourceSelection;
  dateCreated?: Date | string;
  dateUpdated?: Date | string;
  dateLastRun?: Date | string;
  tags?: Record<string, string>;
}
export type LifecyclePolicyArn = string;

export interface LifecyclePolicyDetail {
  action: LifecyclePolicyDetailAction;
  filter: LifecyclePolicyDetailFilter;
  exclusionRules?: LifecyclePolicyDetailExclusionRules;
}
export interface LifecyclePolicyDetailAction {
  type: LifecyclePolicyDetailActionType;
  includeResources?: LifecyclePolicyDetailActionIncludeResources;
}
export interface LifecyclePolicyDetailActionIncludeResources {
  amis?: boolean;
  snapshots?: boolean;
  containers?: boolean;
}
export type LifecyclePolicyDetailActionType =
  | "DELETE"
  | "DEPRECATE"
  | "DISABLE";
export interface LifecyclePolicyDetailExclusionRules {
  tagMap?: Record<string, string>;
  amis?: LifecyclePolicyDetailExclusionRulesAmis;
}
export interface LifecyclePolicyDetailExclusionRulesAmis {
  isPublic?: boolean;
  regions?: Array<string>;
  sharedAccounts?: Array<string>;
  lastLaunched?: LifecyclePolicyDetailExclusionRulesAmisLastLaunched;
  tagMap?: Record<string, string>;
}
export interface LifecyclePolicyDetailExclusionRulesAmisLastLaunched {
  value: number;
  unit: LifecyclePolicyTimeUnit;
}
export type LifecyclePolicyDetailExclusionRulesAmisLastLaunchedValue = number;

export interface LifecyclePolicyDetailFilter {
  type: LifecyclePolicyDetailFilterType;
  value: number;
  unit?: LifecyclePolicyTimeUnit;
  retainAtLeast?: number;
}
export type LifecyclePolicyDetailFilterRetainAtLeast = number;

export type LifecyclePolicyDetailFilterType = "AGE" | "COUNT";
export type LifecyclePolicyDetailFilterValue = number;

export type LifecyclePolicyDetails = Array<LifecyclePolicyDetail>;
export interface LifecyclePolicyResourceSelection {
  recipes?: Array<LifecyclePolicyResourceSelectionRecipe>;
  tagMap?: Record<string, string>;
}
export interface LifecyclePolicyResourceSelectionRecipe {
  name: string;
  semanticVersion: string;
}
export type LifecyclePolicyResourceSelectionRecipes =
  Array<LifecyclePolicyResourceSelectionRecipe>;
export type LifecyclePolicyResourceType = "AMI_IMAGE" | "CONTAINER_IMAGE";
export type LifecyclePolicyStatus = "DISABLED" | "ENABLED";
export interface LifecyclePolicySummary {
  arn?: string;
  name?: string;
  description?: string;
  status?: LifecyclePolicyStatus;
  executionRole?: string;
  resourceType?: LifecyclePolicyResourceType;
  dateCreated?: Date | string;
  dateUpdated?: Date | string;
  dateLastRun?: Date | string;
  tags?: Record<string, string>;
}
export type LifecyclePolicySummaryList = Array<LifecyclePolicySummary>;
export type LifecyclePolicyTimeUnit = "DAYS" | "WEEKS" | "MONTHS" | "YEARS";
export interface ListComponentBuildVersionsRequest {
  componentVersionArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListComponentBuildVersionsResponse {
  requestId?: string;
  componentSummaryList?: Array<ComponentSummary>;
  nextToken?: string;
}
export interface ListComponentsRequest {
  owner?: Ownership;
  filters?: Array<Filter>;
  byName?: boolean;
  maxResults?: number;
  nextToken?: string;
}
export interface ListComponentsResponse {
  requestId?: string;
  componentVersionList?: Array<ComponentVersion>;
  nextToken?: string;
}
export interface ListContainerRecipesRequest {
  owner?: Ownership;
  filters?: Array<Filter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListContainerRecipesResponse {
  requestId?: string;
  containerRecipeSummaryList?: Array<ContainerRecipeSummary>;
  nextToken?: string;
}
export interface ListDistributionConfigurationsRequest {
  filters?: Array<Filter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDistributionConfigurationsResponse {
  requestId?: string;
  distributionConfigurationSummaryList?: Array<DistributionConfigurationSummary>;
  nextToken?: string;
}
export interface ListImageBuildVersionsRequest {
  imageVersionArn: string;
  filters?: Array<Filter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListImageBuildVersionsResponse {
  requestId?: string;
  imageSummaryList?: Array<ImageSummary>;
  nextToken?: string;
}
export interface ListImagePackagesRequest {
  imageBuildVersionArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListImagePackagesResponse {
  requestId?: string;
  imagePackageList?: Array<ImagePackage>;
  nextToken?: string;
}
export interface ListImagePipelineImagesRequest {
  imagePipelineArn: string;
  filters?: Array<Filter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListImagePipelineImagesResponse {
  requestId?: string;
  imageSummaryList?: Array<ImageSummary>;
  nextToken?: string;
}
export interface ListImagePipelinesRequest {
  filters?: Array<Filter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListImagePipelinesResponse {
  requestId?: string;
  imagePipelineList?: Array<ImagePipeline>;
  nextToken?: string;
}
export interface ListImageRecipesRequest {
  owner?: Ownership;
  filters?: Array<Filter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListImageRecipesResponse {
  requestId?: string;
  imageRecipeSummaryList?: Array<ImageRecipeSummary>;
  nextToken?: string;
}
export interface ListImageScanFindingAggregationsRequest {
  filter?: Filter;
  nextToken?: string;
}
export interface ListImageScanFindingAggregationsResponse {
  requestId?: string;
  aggregationType?: string;
  responses?: Array<ImageScanFindingAggregation>;
  nextToken?: string;
}
export interface ListImageScanFindingsRequest {
  filters?: Array<ImageScanFindingsFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListImageScanFindingsResponse {
  requestId?: string;
  findings?: Array<ImageScanFinding>;
  nextToken?: string;
}
export interface ListImagesRequest {
  owner?: Ownership;
  filters?: Array<Filter>;
  byName?: boolean;
  maxResults?: number;
  nextToken?: string;
  includeDeprecated?: boolean;
}
export interface ListImagesResponse {
  requestId?: string;
  imageVersionList?: Array<ImageVersion>;
  nextToken?: string;
}
export interface ListInfrastructureConfigurationsRequest {
  filters?: Array<Filter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListInfrastructureConfigurationsResponse {
  requestId?: string;
  infrastructureConfigurationSummaryList?: Array<InfrastructureConfigurationSummary>;
  nextToken?: string;
}
export interface ListLifecycleExecutionResourcesRequest {
  lifecycleExecutionId: string;
  parentResourceId?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListLifecycleExecutionResourcesResponse {
  lifecycleExecutionId?: string;
  lifecycleExecutionState?: LifecycleExecutionState;
  resources?: Array<LifecycleExecutionResource>;
  nextToken?: string;
}
export interface ListLifecycleExecutionsRequest {
  maxResults?: number;
  nextToken?: string;
  resourceArn: string;
}
export interface ListLifecycleExecutionsResponse {
  lifecycleExecutions?: Array<LifecycleExecution>;
  nextToken?: string;
}
export interface ListLifecyclePoliciesRequest {
  filters?: Array<Filter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListLifecyclePoliciesResponse {
  lifecyclePolicySummaryList?: Array<LifecyclePolicySummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListWaitingWorkflowStepsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListWaitingWorkflowStepsResponse {
  steps?: Array<WorkflowStepExecution>;
  nextToken?: string;
}
export interface ListWorkflowBuildVersionsRequest {
  workflowVersionArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListWorkflowBuildVersionsResponse {
  workflowSummaryList?: Array<WorkflowSummary>;
  nextToken?: string;
}
export interface ListWorkflowExecutionsRequest {
  maxResults?: number;
  nextToken?: string;
  imageBuildVersionArn: string;
}
export interface ListWorkflowExecutionsResponse {
  requestId?: string;
  workflowExecutions?: Array<WorkflowExecutionMetadata>;
  imageBuildVersionArn?: string;
  message?: string;
  nextToken?: string;
}
export interface ListWorkflowsRequest {
  owner?: Ownership;
  filters?: Array<Filter>;
  byName?: boolean;
  maxResults?: number;
  nextToken?: string;
}
export interface ListWorkflowsResponse {
  workflowVersionList?: Array<WorkflowVersion>;
  nextToken?: string;
}
export interface ListWorkflowStepExecutionsRequest {
  maxResults?: number;
  nextToken?: string;
  workflowExecutionId: string;
}
export interface ListWorkflowStepExecutionsResponse {
  requestId?: string;
  steps?: Array<WorkflowStepMetadata>;
  workflowBuildVersionArn?: string;
  workflowExecutionId?: string;
  imageBuildVersionArn?: string;
  message?: string;
  nextToken?: string;
}
export interface Logging {
  s3Logs?: S3Logs;
}
export type MarketplaceResourceLocation = string;

export type MarketplaceResourceType = "COMPONENT_DATA" | "COMPONENT_ARTIFACT";
export type MaxParallelLaunches = number;

export type NonEmptyString = string;

export type NonEmptyStringList = Array<string>;
export type NonNegativeDouble = number;

export type NullableBoolean = boolean;

export type OnWorkflowFailure = "CONTINUE" | "ABORT";
export type OrganizationalUnitArn = string;

export type OrganizationalUnitArnList = Array<string>;
export type OrganizationArn = string;

export type OrganizationArnList = Array<string>;
export type OsVersion = string;

export type OsVersionList = Array<string>;
export interface OutputResources {
  amis?: Array<Ami>;
  containers?: Array<Container>;
}
export type Ownership =
  | "SELF"
  | "SHARED"
  | "AMAZON"
  | "THIRDPARTY"
  | "AWS_MARKETPLACE";
export type PackageArchitecture = string;

export type PackageEpoch = number;

export interface PackageVulnerabilityDetails {
  vulnerabilityId: string;
  vulnerablePackages?: Array<VulnerablePackage>;
  source?: string;
  cvss?: Array<CvssScore>;
  relatedVulnerabilities?: Array<string>;
  sourceUrl?: string;
  vendorSeverity?: string;
  vendorCreatedAt?: Date | string;
  vendorUpdatedAt?: Date | string;
  referenceUrls?: Array<string>;
}
export type PaginationToken = string;

export type ParallelGroup = string;

export type PipelineExecutionStartCondition =
  | "EXPRESSION_MATCH_ONLY"
  | "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE";
export type PipelineStatus = "DISABLED" | "ENABLED";
export interface Placement {
  availabilityZone?: string;
  tenancy?: TenancyType;
  hostId?: string;
  hostResourceGroupArn?: string;
}
export type Platform = "WINDOWS" | "LINUX" | "MACOS";
export type ProductCodeId = string;

export type ProductCodeList = Array<ProductCodeListItem>;
export interface ProductCodeListItem {
  productCodeId: string;
  productCodeType: ProductCodeType;
}
export type ProductCodeType = "MARKETPLACE";
export interface PutComponentPolicyRequest {
  componentArn: string;
  policy: string;
}
export interface PutComponentPolicyResponse {
  requestId?: string;
  componentArn?: string;
}
export interface PutContainerRecipePolicyRequest {
  containerRecipeArn: string;
  policy: string;
}
export interface PutContainerRecipePolicyResponse {
  requestId?: string;
  containerRecipeArn?: string;
}
export interface PutImagePolicyRequest {
  imageArn: string;
  policy: string;
}
export interface PutImagePolicyResponse {
  requestId?: string;
  imageArn?: string;
}
export interface PutImageRecipePolicyRequest {
  imageRecipeArn: string;
  policy: string;
}
export interface PutImageRecipePolicyResponse {
  requestId?: string;
  imageRecipeArn?: string;
}
export type RegionList = Array<string>;
export interface Remediation {
  recommendation?: RemediationRecommendation;
}
export interface RemediationRecommendation {
  text?: string;
  url?: string;
}
export declare class ResourceAlreadyExistsException extends Data.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceDependencyException extends Data.TaggedError(
  "ResourceDependencyException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly message?: string;
}> {}
export type ResourceName = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResourcePolicyDocument = string;

export interface ResourceState {
  status?: ResourceStatus;
}
export interface ResourceStateUpdateExclusionRules {
  amis?: LifecyclePolicyDetailExclusionRulesAmis;
}
export interface ResourceStateUpdateIncludeResources {
  amis?: boolean;
  snapshots?: boolean;
  containers?: boolean;
}
export type ResourceStatus =
  | "AVAILABLE"
  | "DELETED"
  | "DEPRECATED"
  | "DISABLED";
export type ResourceTagMap = Record<string, string>;
export type RestrictedInteger = number;

export type RoleNameOrArn = string;

export interface S3ExportConfiguration {
  roleName: string;
  diskImageFormat: DiskImageFormat;
  s3Bucket: string;
  s3Prefix?: string;
}
export interface S3Logs {
  s3BucketName?: string;
  s3KeyPrefix?: string;
}
export interface Schedule {
  scheduleExpression?: string;
  timezone?: string;
  pipelineExecutionStartCondition?: PipelineExecutionStartCondition;
}
export type SecurityGroupIds = Array<string>;
export interface SendWorkflowStepActionRequest {
  stepExecutionId: string;
  imageBuildVersionArn: string;
  action: WorkflowStepActionType;
  reason?: string;
  clientToken: string;
}
export interface SendWorkflowStepActionResponse {
  stepExecutionId?: string;
  imageBuildVersionArn?: string;
  clientToken?: string;
}
export declare class ServiceException extends Data.TaggedError(
  "ServiceException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceUnavailableException extends Data.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export type SeverityCountNumber = number;

export interface SeverityCounts {
  all?: number;
  critical?: number;
  high?: number;
  medium?: number;
}
export type SnsTopicArn = string;

export type SourceLayerHash = string;

export interface SsmParameterConfiguration {
  amiAccountId?: string;
  parameterName: string;
  dataType?: SsmParameterDataType;
}
export type SsmParameterConfigurationList = Array<SsmParameterConfiguration>;
export type SsmParameterDataType = "TEXT" | "AWS_EC2_IMAGE";
export type SsmParameterName = string;

export interface StartImagePipelineExecutionRequest {
  imagePipelineArn: string;
  clientToken: string;
}
export interface StartImagePipelineExecutionResponse {
  requestId?: string;
  clientToken?: string;
  imageBuildVersionArn?: string;
}
export interface StartResourceStateUpdateRequest {
  resourceArn: string;
  state: ResourceState;
  executionRole?: string;
  includeResources?: ResourceStateUpdateIncludeResources;
  exclusionRules?: ResourceStateUpdateExclusionRules;
  updateAt?: Date | string;
  clientToken: string;
}
export interface StartResourceStateUpdateResponse {
  lifecycleExecutionId?: string;
  resourceArn?: string;
}
export type StringList = Array<string>;
export interface SystemsManagerAgent {
  uninstallAfterBuild?: boolean;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface TargetContainerRepository {
  service: ContainerRepositoryService;
  repositoryName: string;
}
export type TargetResourceCount = number;

export type TenancyType = "DEFAULT" | "DEDICATED" | "HOST";
export type Timezone = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateDistributionConfigurationRequest {
  distributionConfigurationArn: string;
  description?: string;
  distributions: Array<Distribution>;
  clientToken: string;
}
export interface UpdateDistributionConfigurationResponse {
  requestId?: string;
  clientToken?: string;
  distributionConfigurationArn?: string;
}
export interface UpdateImagePipelineRequest {
  imagePipelineArn: string;
  description?: string;
  imageRecipeArn?: string;
  containerRecipeArn?: string;
  infrastructureConfigurationArn: string;
  distributionConfigurationArn?: string;
  imageTestsConfiguration?: ImageTestsConfiguration;
  enhancedImageMetadataEnabled?: boolean;
  schedule?: Schedule;
  status?: PipelineStatus;
  clientToken: string;
  imageScanningConfiguration?: ImageScanningConfiguration;
  workflows?: Array<WorkflowConfiguration>;
  executionRole?: string;
}
export interface UpdateImagePipelineResponse {
  requestId?: string;
  clientToken?: string;
  imagePipelineArn?: string;
}
export interface UpdateInfrastructureConfigurationRequest {
  infrastructureConfigurationArn: string;
  description?: string;
  instanceTypes?: Array<string>;
  instanceProfileName: string;
  securityGroupIds?: Array<string>;
  subnetId?: string;
  logging?: Logging;
  keyPair?: string;
  terminateInstanceOnFailure?: boolean;
  snsTopicArn?: string;
  resourceTags?: Record<string, string>;
  instanceMetadataOptions?: InstanceMetadataOptions;
  placement?: Placement;
  clientToken: string;
}
export interface UpdateInfrastructureConfigurationResponse {
  requestId?: string;
  clientToken?: string;
  infrastructureConfigurationArn?: string;
}
export interface UpdateLifecyclePolicyRequest {
  lifecyclePolicyArn: string;
  description?: string;
  status?: LifecyclePolicyStatus;
  executionRole: string;
  resourceType: LifecyclePolicyResourceType;
  policyDetails: Array<LifecyclePolicyDetail>;
  resourceSelection: LifecyclePolicyResourceSelection;
  clientToken: string;
}
export interface UpdateLifecyclePolicyResponse {
  lifecyclePolicyArn?: string;
}
export type Uri = string;

export type UserDataOverride = string;

export type VersionNumber = string;

export type VulnerabilityId = string;

export interface VulnerabilityIdAggregation {
  vulnerabilityId?: string;
  severityCounts?: SeverityCounts;
}
export type VulnerabilityIdList = Array<string>;
export interface VulnerablePackage {
  name?: string;
  version?: string;
  sourceLayerHash?: string;
  epoch?: number;
  release?: string;
  arch?: string;
  packageManager?: string;
  filePath?: string;
  fixedInVersion?: string;
  remediation?: string;
}
export type VulnerablePackageList = Array<VulnerablePackage>;
export interface Workflow {
  arn?: string;
  name?: string;
  version?: string;
  description?: string;
  changeDescription?: string;
  type?: WorkflowType;
  state?: WorkflowState;
  owner?: string;
  data?: string;
  kmsKeyId?: string;
  dateCreated?: string;
  tags?: Record<string, string>;
  parameters?: Array<WorkflowParameterDetail>;
}
export type WorkflowBuildVersionArn = string;

export interface WorkflowConfiguration {
  workflowArn: string;
  parameters?: Array<WorkflowParameter>;
  parallelGroup?: string;
  onFailure?: OnWorkflowFailure;
}
export type WorkflowConfigurationList = Array<WorkflowConfiguration>;
export type WorkflowData = string;

export type WorkflowExecutionId = string;

export type WorkflowExecutionMessage = string;

export interface WorkflowExecutionMetadata {
  workflowBuildVersionArn?: string;
  workflowExecutionId?: string;
  type?: WorkflowType;
  status?: WorkflowExecutionStatus;
  message?: string;
  totalStepCount?: number;
  totalStepsSucceeded?: number;
  totalStepsFailed?: number;
  totalStepsSkipped?: number;
  startTime?: string;
  endTime?: string;
  parallelGroup?: string;
}
export type WorkflowExecutionsList = Array<WorkflowExecutionMetadata>;
export type WorkflowExecutionStatus =
  | "PENDING"
  | "SKIPPED"
  | "RUNNING"
  | "COMPLETED"
  | "FAILED"
  | "ROLLBACK_IN_PROGRESS"
  | "ROLLBACK_COMPLETED"
  | "CANCELLED";
export type WorkflowNameArn = string;

export interface WorkflowParameter {
  name: string;
  value: Array<string>;
}
export type WorkflowParameterDescription = string;

export interface WorkflowParameterDetail {
  name: string;
  type: string;
  defaultValue?: Array<string>;
  description?: string;
}
export type WorkflowParameterDetailList = Array<WorkflowParameterDetail>;
export type WorkflowParameterList = Array<WorkflowParameter>;
export type WorkflowParameterName = string;

export type WorkflowParameterType = string;

export type WorkflowParameterValue = string;

export type WorkflowParameterValueList = Array<string>;
export interface WorkflowState {
  status?: WorkflowStatus;
  reason?: string;
}
export type WorkflowStatus = "DEPRECATED";
export type WorkflowStepAction = string;

export type WorkflowStepActionType = "RESUME" | "STOP";
export type WorkflowStepCount = number;

export type WorkflowStepDescription = string;

export interface WorkflowStepExecution {
  stepExecutionId?: string;
  imageBuildVersionArn?: string;
  workflowExecutionId?: string;
  workflowBuildVersionArn?: string;
  name?: string;
  action?: string;
  startTime?: string;
}
export type WorkflowStepExecutionId = string;

export type WorkflowStepExecutionList = Array<WorkflowStepExecution>;
export type WorkflowStepExecutionRollbackStatus =
  | "RUNNING"
  | "COMPLETED"
  | "SKIPPED"
  | "FAILED";
export type WorkflowStepExecutionsList = Array<WorkflowStepMetadata>;
export type WorkflowStepExecutionStatus =
  | "PENDING"
  | "SKIPPED"
  | "RUNNING"
  | "COMPLETED"
  | "FAILED"
  | "CANCELLED";
export type WorkflowStepInputs = string;

export type WorkflowStepMessage = string;

export interface WorkflowStepMetadata {
  stepExecutionId?: string;
  name?: string;
  description?: string;
  action?: string;
  status?: WorkflowStepExecutionStatus;
  rollbackStatus?: WorkflowStepExecutionRollbackStatus;
  message?: string;
  inputs?: string;
  outputs?: string;
  startTime?: string;
  endTime?: string;
}
export type WorkflowStepName = string;

export type WorkflowStepOutputs = string;

export type WorkflowStepTimeoutSecondsInteger = number;

export interface WorkflowSummary {
  arn?: string;
  name?: string;
  version?: string;
  description?: string;
  changeDescription?: string;
  type?: WorkflowType;
  owner?: string;
  state?: WorkflowState;
  dateCreated?: string;
  tags?: Record<string, string>;
}
export type WorkflowSummaryList = Array<WorkflowSummary>;
export type WorkflowType = "BUILD" | "TEST" | "DISTRIBUTION";
export interface WorkflowVersion {
  arn?: string;
  name?: string;
  version?: string;
  description?: string;
  type?: WorkflowType;
  owner?: string;
  dateCreated?: string;
}
export type WorkflowVersionArn = string;

export type WorkflowVersionArnOrBuildVersionArn = string;

export type WorkflowVersionList = Array<WorkflowVersion>;
export type WorkflowWildcardVersionArn = string;

export declare namespace CancelImageCreation {
  export type Input = CancelImageCreationRequest;
  export type Output = CancelImageCreationResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CancelLifecycleExecution {
  export type Input = CancelLifecycleExecutionRequest;
  export type Output = CancelLifecycleExecutionResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateComponent {
  export type Input = CreateComponentRequest;
  export type Output = CreateComponentResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidParameterCombinationException
    | InvalidRequestException
    | InvalidVersionNumberException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateContainerRecipe {
  export type Input = CreateContainerRecipeRequest;
  export type Output = CreateContainerRecipeResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | InvalidVersionNumberException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateDistributionConfiguration {
  export type Input = CreateDistributionConfigurationRequest;
  export type Output = CreateDistributionConfigurationResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidParameterCombinationException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateImage {
  export type Input = CreateImageRequest;
  export type Output = CreateImageResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateImagePipeline {
  export type Input = CreateImagePipelineRequest;
  export type Output = CreateImagePipelineResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateImageRecipe {
  export type Input = CreateImageRecipeRequest;
  export type Output = CreateImageRecipeResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | InvalidVersionNumberException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateInfrastructureConfiguration {
  export type Input = CreateInfrastructureConfigurationRequest;
  export type Output = CreateInfrastructureConfigurationResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateLifecyclePolicy {
  export type Input = CreateLifecyclePolicyRequest;
  export type Output = CreateLifecyclePolicyResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateWorkflow {
  export type Input = CreateWorkflowRequest;
  export type Output = CreateWorkflowResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidParameterCombinationException
    | InvalidRequestException
    | InvalidVersionNumberException
    | ResourceInUseException
    | ServiceException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteComponent {
  export type Input = DeleteComponentRequest;
  export type Output = DeleteComponentResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteContainerRecipe {
  export type Input = DeleteContainerRecipeRequest;
  export type Output = DeleteContainerRecipeResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteDistributionConfiguration {
  export type Input = DeleteDistributionConfigurationRequest;
  export type Output = DeleteDistributionConfigurationResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteImage {
  export type Input = DeleteImageRequest;
  export type Output = DeleteImageResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteImagePipeline {
  export type Input = DeleteImagePipelineRequest;
  export type Output = DeleteImagePipelineResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteImageRecipe {
  export type Input = DeleteImageRecipeRequest;
  export type Output = DeleteImageRecipeResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteInfrastructureConfiguration {
  export type Input = DeleteInfrastructureConfigurationRequest;
  export type Output = DeleteInfrastructureConfigurationResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteLifecyclePolicy {
  export type Input = DeleteLifecyclePolicyRequest;
  export type Output = DeleteLifecyclePolicyResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteWorkflow {
  export type Input = DeleteWorkflowRequest;
  export type Output = DeleteWorkflowResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ResourceDependencyException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetComponent {
  export type Input = GetComponentRequest;
  export type Output = GetComponentResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetComponentPolicy {
  export type Input = GetComponentPolicyRequest;
  export type Output = GetComponentPolicyResponse;
  export type Error =
    | CallRateLimitExceededException
    | ForbiddenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetContainerRecipe {
  export type Input = GetContainerRecipeRequest;
  export type Output = GetContainerRecipeResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetContainerRecipePolicy {
  export type Input = GetContainerRecipePolicyRequest;
  export type Output = GetContainerRecipePolicyResponse;
  export type Error =
    | CallRateLimitExceededException
    | ForbiddenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetDistributionConfiguration {
  export type Input = GetDistributionConfigurationRequest;
  export type Output = GetDistributionConfigurationResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetImage {
  export type Input = GetImageRequest;
  export type Output = GetImageResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetImagePipeline {
  export type Input = GetImagePipelineRequest;
  export type Output = GetImagePipelineResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetImagePolicy {
  export type Input = GetImagePolicyRequest;
  export type Output = GetImagePolicyResponse;
  export type Error =
    | CallRateLimitExceededException
    | ForbiddenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetImageRecipe {
  export type Input = GetImageRecipeRequest;
  export type Output = GetImageRecipeResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetImageRecipePolicy {
  export type Input = GetImageRecipePolicyRequest;
  export type Output = GetImageRecipePolicyResponse;
  export type Error =
    | CallRateLimitExceededException
    | ForbiddenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetInfrastructureConfiguration {
  export type Input = GetInfrastructureConfigurationRequest;
  export type Output = GetInfrastructureConfigurationResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetLifecycleExecution {
  export type Input = GetLifecycleExecutionRequest;
  export type Output = GetLifecycleExecutionResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetLifecyclePolicy {
  export type Input = GetLifecyclePolicyRequest;
  export type Output = GetLifecyclePolicyResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetMarketplaceResource {
  export type Input = GetMarketplaceResourceRequest;
  export type Output = GetMarketplaceResourceResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetWorkflow {
  export type Input = GetWorkflowRequest;
  export type Output = GetWorkflowResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetWorkflowExecution {
  export type Input = GetWorkflowExecutionRequest;
  export type Output = GetWorkflowExecutionResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetWorkflowStepExecution {
  export type Input = GetWorkflowStepExecutionRequest;
  export type Output = GetWorkflowStepExecutionResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ImportComponent {
  export type Input = ImportComponentRequest;
  export type Output = ImportComponentResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidParameterCombinationException
    | InvalidRequestException
    | InvalidVersionNumberException
    | ResourceInUseException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ImportDiskImage {
  export type Input = ImportDiskImageRequest;
  export type Output = ImportDiskImageResponse;
  export type Error =
    | ClientException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ImportVmImage {
  export type Input = ImportVmImageRequest;
  export type Output = ImportVmImageResponse;
  export type Error =
    | ClientException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListComponentBuildVersions {
  export type Input = ListComponentBuildVersionsRequest;
  export type Output = ListComponentBuildVersionsResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListComponents {
  export type Input = ListComponentsRequest;
  export type Output = ListComponentsResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListContainerRecipes {
  export type Input = ListContainerRecipesRequest;
  export type Output = ListContainerRecipesResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListDistributionConfigurations {
  export type Input = ListDistributionConfigurationsRequest;
  export type Output = ListDistributionConfigurationsResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListImageBuildVersions {
  export type Input = ListImageBuildVersionsRequest;
  export type Output = ListImageBuildVersionsResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListImagePackages {
  export type Input = ListImagePackagesRequest;
  export type Output = ListImagePackagesResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListImagePipelineImages {
  export type Input = ListImagePipelineImagesRequest;
  export type Output = ListImagePipelineImagesResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListImagePipelines {
  export type Input = ListImagePipelinesRequest;
  export type Output = ListImagePipelinesResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListImageRecipes {
  export type Input = ListImageRecipesRequest;
  export type Output = ListImageRecipesResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListImages {
  export type Input = ListImagesRequest;
  export type Output = ListImagesResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListImageScanFindingAggregations {
  export type Input = ListImageScanFindingAggregationsRequest;
  export type Output = ListImageScanFindingAggregationsResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListImageScanFindings {
  export type Input = ListImageScanFindingsRequest;
  export type Output = ListImageScanFindingsResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListInfrastructureConfigurations {
  export type Input = ListInfrastructureConfigurationsRequest;
  export type Output = ListInfrastructureConfigurationsResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListLifecycleExecutionResources {
  export type Input = ListLifecycleExecutionResourcesRequest;
  export type Output = ListLifecycleExecutionResourcesResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListLifecycleExecutions {
  export type Input = ListLifecycleExecutionsRequest;
  export type Output = ListLifecycleExecutionsResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListLifecyclePolicies {
  export type Input = ListLifecyclePoliciesRequest;
  export type Output = ListLifecyclePoliciesResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError;
}

export declare namespace ListWaitingWorkflowSteps {
  export type Input = ListWaitingWorkflowStepsRequest;
  export type Output = ListWaitingWorkflowStepsResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListWorkflowBuildVersions {
  export type Input = ListWorkflowBuildVersionsRequest;
  export type Output = ListWorkflowBuildVersionsResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListWorkflowExecutions {
  export type Input = ListWorkflowExecutionsRequest;
  export type Output = ListWorkflowExecutionsResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListWorkflows {
  export type Input = ListWorkflowsRequest;
  export type Output = ListWorkflowsResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListWorkflowStepExecutions {
  export type Input = ListWorkflowStepExecutionsRequest;
  export type Output = ListWorkflowStepExecutionsResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidPaginationTokenException
    | InvalidRequestException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutComponentPolicy {
  export type Input = PutComponentPolicyRequest;
  export type Output = PutComponentPolicyResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidParameterValueException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutContainerRecipePolicy {
  export type Input = PutContainerRecipePolicyRequest;
  export type Output = PutContainerRecipePolicyResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidParameterValueException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutImagePolicy {
  export type Input = PutImagePolicyRequest;
  export type Output = PutImagePolicyResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidParameterValueException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutImageRecipePolicy {
  export type Input = PutImageRecipePolicyRequest;
  export type Output = PutImageRecipePolicyResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | InvalidParameterValueException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace SendWorkflowStepAction {
  export type Input = SendWorkflowStepActionRequest;
  export type Output = SendWorkflowStepActionResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidParameterValueException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace StartImagePipelineExecution {
  export type Input = StartImagePipelineExecutionRequest;
  export type Output = StartImagePipelineExecutionResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace StartResourceStateUpdate {
  export type Input = StartResourceStateUpdateRequest;
  export type Output = StartResourceStateUpdateResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError;
}

export declare namespace UpdateDistributionConfiguration {
  export type Input = UpdateDistributionConfigurationRequest;
  export type Output = UpdateDistributionConfigurationResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidParameterCombinationException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateImagePipeline {
  export type Input = UpdateImagePipelineRequest;
  export type Output = UpdateImagePipelineResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateInfrastructureConfiguration {
  export type Input = UpdateInfrastructureConfigurationRequest;
  export type Output = UpdateInfrastructureConfigurationResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateLifecyclePolicy {
  export type Input = UpdateLifecyclePolicyRequest;
  export type Output = UpdateLifecyclePolicyResponse;
  export type Error =
    | CallRateLimitExceededException
    | ClientException
    | ForbiddenException
    | IdempotentParameterMismatchException
    | InvalidParameterCombinationException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceException
    | ServiceUnavailableException
    | CommonAwsError;
}
