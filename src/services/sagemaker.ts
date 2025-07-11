import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface SageMaker {
  addAssociation(
    input: AddAssociationRequest,
  ): Effect.Effect<
    AddAssociationResponse,
    ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  addTags(
    input: AddTagsInput,
  ): Effect.Effect<
    AddTagsOutput,
    CommonAwsError
  >;
  associateTrialComponent(
    input: AssociateTrialComponentRequest,
  ): Effect.Effect<
    AssociateTrialComponentResponse,
    ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  batchDeleteClusterNodes(
    input: BatchDeleteClusterNodesRequest,
  ): Effect.Effect<
    BatchDeleteClusterNodesResponse,
    ResourceNotFound | CommonAwsError
  >;
  batchDescribeModelPackage(
    input: BatchDescribeModelPackageInput,
  ): Effect.Effect<
    BatchDescribeModelPackageOutput,
    CommonAwsError
  >;
  createAction(
    input: CreateActionRequest,
  ): Effect.Effect<
    CreateActionResponse,
    ResourceLimitExceeded | CommonAwsError
  >;
  createAlgorithm(
    input: CreateAlgorithmInput,
  ): Effect.Effect<
    CreateAlgorithmOutput,
    CommonAwsError
  >;
  createApp(
    input: CreateAppRequest,
  ): Effect.Effect<
    CreateAppResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createAppImageConfig(
    input: CreateAppImageConfigRequest,
  ): Effect.Effect<
    CreateAppImageConfigResponse,
    ResourceInUse | CommonAwsError
  >;
  createArtifact(
    input: CreateArtifactRequest,
  ): Effect.Effect<
    CreateArtifactResponse,
    ResourceLimitExceeded | CommonAwsError
  >;
  createAutoMLJob(
    input: CreateAutoMLJobRequest,
  ): Effect.Effect<
    CreateAutoMLJobResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createAutoMLJobV2(
    input: CreateAutoMLJobV2Request,
  ): Effect.Effect<
    CreateAutoMLJobV2Response,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createCluster(
    input: CreateClusterRequest,
  ): Effect.Effect<
    CreateClusterResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createClusterSchedulerConfig(
    input: CreateClusterSchedulerConfigRequest,
  ): Effect.Effect<
    CreateClusterSchedulerConfigResponse,
    ConflictException | ResourceLimitExceeded | CommonAwsError
  >;
  createCodeRepository(
    input: CreateCodeRepositoryInput,
  ): Effect.Effect<
    CreateCodeRepositoryOutput,
    CommonAwsError
  >;
  createCompilationJob(
    input: CreateCompilationJobRequest,
  ): Effect.Effect<
    CreateCompilationJobResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createComputeQuota(
    input: CreateComputeQuotaRequest,
  ): Effect.Effect<
    CreateComputeQuotaResponse,
    ConflictException | ResourceLimitExceeded | CommonAwsError
  >;
  createContext(
    input: CreateContextRequest,
  ): Effect.Effect<
    CreateContextResponse,
    ResourceLimitExceeded | CommonAwsError
  >;
  createDataQualityJobDefinition(
    input: CreateDataQualityJobDefinitionRequest,
  ): Effect.Effect<
    CreateDataQualityJobDefinitionResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createDeviceFleet(
    input: CreateDeviceFleetRequest,
  ): Effect.Effect<
    {},
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createDomain(
    input: CreateDomainRequest,
  ): Effect.Effect<
    CreateDomainResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createEdgeDeploymentPlan(
    input: CreateEdgeDeploymentPlanRequest,
  ): Effect.Effect<
    CreateEdgeDeploymentPlanResponse,
    ResourceLimitExceeded | CommonAwsError
  >;
  createEdgeDeploymentStage(
    input: CreateEdgeDeploymentStageRequest,
  ): Effect.Effect<
    {},
    ResourceLimitExceeded | CommonAwsError
  >;
  createEdgePackagingJob(
    input: CreateEdgePackagingJobRequest,
  ): Effect.Effect<
    {},
    ResourceLimitExceeded | CommonAwsError
  >;
  createEndpoint(
    input: CreateEndpointInput,
  ): Effect.Effect<
    CreateEndpointOutput,
    ResourceLimitExceeded | CommonAwsError
  >;
  createEndpointConfig(
    input: CreateEndpointConfigInput,
  ): Effect.Effect<
    CreateEndpointConfigOutput,
    ResourceLimitExceeded | CommonAwsError
  >;
  createExperiment(
    input: CreateExperimentRequest,
  ): Effect.Effect<
    CreateExperimentResponse,
    ResourceLimitExceeded | CommonAwsError
  >;
  createFeatureGroup(
    input: CreateFeatureGroupRequest,
  ): Effect.Effect<
    CreateFeatureGroupResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createFlowDefinition(
    input: CreateFlowDefinitionRequest,
  ): Effect.Effect<
    CreateFlowDefinitionResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createHub(
    input: CreateHubRequest,
  ): Effect.Effect<
    CreateHubResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createHubContentPresignedUrls(
    input: CreateHubContentPresignedUrlsRequest,
  ): Effect.Effect<
    CreateHubContentPresignedUrlsResponse,
    CommonAwsError
  >;
  createHubContentReference(
    input: CreateHubContentReferenceRequest,
  ): Effect.Effect<
    CreateHubContentReferenceResponse,
    ResourceInUse | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  createHumanTaskUi(
    input: CreateHumanTaskUiRequest,
  ): Effect.Effect<
    CreateHumanTaskUiResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createHyperParameterTuningJob(
    input: CreateHyperParameterTuningJobRequest,
  ): Effect.Effect<
    CreateHyperParameterTuningJobResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createImage(
    input: CreateImageRequest,
  ): Effect.Effect<
    CreateImageResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createImageVersion(
    input: CreateImageVersionRequest,
  ): Effect.Effect<
    CreateImageVersionResponse,
    ResourceInUse | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  createInferenceComponent(
    input: CreateInferenceComponentInput,
  ): Effect.Effect<
    CreateInferenceComponentOutput,
    ResourceLimitExceeded | CommonAwsError
  >;
  createInferenceExperiment(
    input: CreateInferenceExperimentRequest,
  ): Effect.Effect<
    CreateInferenceExperimentResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createInferenceRecommendationsJob(
    input: CreateInferenceRecommendationsJobRequest,
  ): Effect.Effect<
    CreateInferenceRecommendationsJobResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createLabelingJob(
    input: CreateLabelingJobRequest,
  ): Effect.Effect<
    CreateLabelingJobResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createMlflowTrackingServer(
    input: CreateMlflowTrackingServerRequest,
  ): Effect.Effect<
    CreateMlflowTrackingServerResponse,
    ResourceLimitExceeded | CommonAwsError
  >;
  createModel(
    input: CreateModelInput,
  ): Effect.Effect<
    CreateModelOutput,
    ResourceLimitExceeded | CommonAwsError
  >;
  createModelBiasJobDefinition(
    input: CreateModelBiasJobDefinitionRequest,
  ): Effect.Effect<
    CreateModelBiasJobDefinitionResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createModelCard(
    input: CreateModelCardRequest,
  ): Effect.Effect<
    CreateModelCardResponse,
    ConflictException | ResourceLimitExceeded | CommonAwsError
  >;
  createModelCardExportJob(
    input: CreateModelCardExportJobRequest,
  ): Effect.Effect<
    CreateModelCardExportJobResponse,
    ConflictException | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  createModelExplainabilityJobDefinition(
    input: CreateModelExplainabilityJobDefinitionRequest,
  ): Effect.Effect<
    CreateModelExplainabilityJobDefinitionResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createModelPackage(
    input: CreateModelPackageInput,
  ): Effect.Effect<
    CreateModelPackageOutput,
    ConflictException | ResourceLimitExceeded | CommonAwsError
  >;
  createModelPackageGroup(
    input: CreateModelPackageGroupInput,
  ): Effect.Effect<
    CreateModelPackageGroupOutput,
    ResourceLimitExceeded | CommonAwsError
  >;
  createModelQualityJobDefinition(
    input: CreateModelQualityJobDefinitionRequest,
  ): Effect.Effect<
    CreateModelQualityJobDefinitionResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createMonitoringSchedule(
    input: CreateMonitoringScheduleRequest,
  ): Effect.Effect<
    CreateMonitoringScheduleResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createNotebookInstance(
    input: CreateNotebookInstanceInput,
  ): Effect.Effect<
    CreateNotebookInstanceOutput,
    ResourceLimitExceeded | CommonAwsError
  >;
  createNotebookInstanceLifecycleConfig(
    input: CreateNotebookInstanceLifecycleConfigInput,
  ): Effect.Effect<
    CreateNotebookInstanceLifecycleConfigOutput,
    ResourceLimitExceeded | CommonAwsError
  >;
  createOptimizationJob(
    input: CreateOptimizationJobRequest,
  ): Effect.Effect<
    CreateOptimizationJobResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createPartnerApp(
    input: CreatePartnerAppRequest,
  ): Effect.Effect<
    CreatePartnerAppResponse,
    ConflictException | ResourceLimitExceeded | CommonAwsError
  >;
  createPartnerAppPresignedUrl(
    input: CreatePartnerAppPresignedUrlRequest,
  ): Effect.Effect<
    CreatePartnerAppPresignedUrlResponse,
    ResourceNotFound | CommonAwsError
  >;
  createPipeline(
    input: CreatePipelineRequest,
  ): Effect.Effect<
    CreatePipelineResponse,
    ConflictException | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  createPresignedDomainUrl(
    input: CreatePresignedDomainUrlRequest,
  ): Effect.Effect<
    CreatePresignedDomainUrlResponse,
    ResourceNotFound | CommonAwsError
  >;
  createPresignedMlflowTrackingServerUrl(
    input: CreatePresignedMlflowTrackingServerUrlRequest,
  ): Effect.Effect<
    CreatePresignedMlflowTrackingServerUrlResponse,
    ResourceNotFound | CommonAwsError
  >;
  createPresignedNotebookInstanceUrl(
    input: CreatePresignedNotebookInstanceUrlInput,
  ): Effect.Effect<
    CreatePresignedNotebookInstanceUrlOutput,
    CommonAwsError
  >;
  createProcessingJob(
    input: CreateProcessingJobRequest,
  ): Effect.Effect<
    CreateProcessingJobResponse,
    ResourceInUse | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  createProject(
    input: CreateProjectInput,
  ): Effect.Effect<
    CreateProjectOutput,
    ResourceLimitExceeded | CommonAwsError
  >;
  createSpace(
    input: CreateSpaceRequest,
  ): Effect.Effect<
    CreateSpaceResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createStudioLifecycleConfig(
    input: CreateStudioLifecycleConfigRequest,
  ): Effect.Effect<
    CreateStudioLifecycleConfigResponse,
    ResourceInUse | CommonAwsError
  >;
  createTrainingJob(
    input: CreateTrainingJobRequest,
  ): Effect.Effect<
    CreateTrainingJobResponse,
    ResourceInUse | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  createTrainingPlan(
    input: CreateTrainingPlanRequest,
  ): Effect.Effect<
    CreateTrainingPlanResponse,
    ResourceInUse | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  createTransformJob(
    input: CreateTransformJobRequest,
  ): Effect.Effect<
    CreateTransformJobResponse,
    ResourceInUse | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  createTrial(
    input: CreateTrialRequest,
  ): Effect.Effect<
    CreateTrialResponse,
    ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  createTrialComponent(
    input: CreateTrialComponentRequest,
  ): Effect.Effect<
    CreateTrialComponentResponse,
    ResourceLimitExceeded | CommonAwsError
  >;
  createUserProfile(
    input: CreateUserProfileRequest,
  ): Effect.Effect<
    CreateUserProfileResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  createWorkforce(
    input: CreateWorkforceRequest,
  ): Effect.Effect<
    CreateWorkforceResponse,
    CommonAwsError
  >;
  createWorkteam(
    input: CreateWorkteamRequest,
  ): Effect.Effect<
    CreateWorkteamResponse,
    ResourceInUse | ResourceLimitExceeded | CommonAwsError
  >;
  deleteAction(
    input: DeleteActionRequest,
  ): Effect.Effect<
    DeleteActionResponse,
    ResourceNotFound | CommonAwsError
  >;
  deleteAlgorithm(
    input: DeleteAlgorithmInput,
  ): Effect.Effect<
    {},
    ConflictException | CommonAwsError
  >;
  deleteApp(
    input: DeleteAppRequest,
  ): Effect.Effect<
    {},
    ResourceInUse | ResourceNotFound | CommonAwsError
  >;
  deleteAppImageConfig(
    input: DeleteAppImageConfigRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  deleteArtifact(
    input: DeleteArtifactRequest,
  ): Effect.Effect<
    DeleteArtifactResponse,
    ResourceNotFound | CommonAwsError
  >;
  deleteAssociation(
    input: DeleteAssociationRequest,
  ): Effect.Effect<
    DeleteAssociationResponse,
    ResourceNotFound | CommonAwsError
  >;
  deleteCluster(
    input: DeleteClusterRequest,
  ): Effect.Effect<
    DeleteClusterResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  deleteClusterSchedulerConfig(
    input: DeleteClusterSchedulerConfigRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  deleteCodeRepository(
    input: DeleteCodeRepositoryInput,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteCompilationJob(
    input: DeleteCompilationJobRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  deleteComputeQuota(
    input: DeleteComputeQuotaRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  deleteContext(
    input: DeleteContextRequest,
  ): Effect.Effect<
    DeleteContextResponse,
    ResourceNotFound | CommonAwsError
  >;
  deleteDataQualityJobDefinition(
    input: DeleteDataQualityJobDefinitionRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  deleteDeviceFleet(
    input: DeleteDeviceFleetRequest,
  ): Effect.Effect<
    {},
    ResourceInUse | CommonAwsError
  >;
  deleteDomain(
    input: DeleteDomainRequest,
  ): Effect.Effect<
    {},
    ResourceInUse | ResourceNotFound | CommonAwsError
  >;
  deleteEdgeDeploymentPlan(
    input: DeleteEdgeDeploymentPlanRequest,
  ): Effect.Effect<
    {},
    ResourceInUse | CommonAwsError
  >;
  deleteEdgeDeploymentStage(
    input: DeleteEdgeDeploymentStageRequest,
  ): Effect.Effect<
    {},
    ResourceInUse | CommonAwsError
  >;
  deleteEndpoint(
    input: DeleteEndpointInput,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteEndpointConfig(
    input: DeleteEndpointConfigInput,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteExperiment(
    input: DeleteExperimentRequest,
  ): Effect.Effect<
    DeleteExperimentResponse,
    ResourceNotFound | CommonAwsError
  >;
  deleteFeatureGroup(
    input: DeleteFeatureGroupRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  deleteFlowDefinition(
    input: DeleteFlowDefinitionRequest,
  ): Effect.Effect<
    DeleteFlowDefinitionResponse,
    ResourceInUse | ResourceNotFound | CommonAwsError
  >;
  deleteHub(
    input: DeleteHubRequest,
  ): Effect.Effect<
    {},
    ResourceInUse | ResourceNotFound | CommonAwsError
  >;
  deleteHubContent(
    input: DeleteHubContentRequest,
  ): Effect.Effect<
    {},
    ResourceInUse | ResourceNotFound | CommonAwsError
  >;
  deleteHubContentReference(
    input: DeleteHubContentReferenceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  deleteHumanTaskUi(
    input: DeleteHumanTaskUiRequest,
  ): Effect.Effect<
    DeleteHumanTaskUiResponse,
    ResourceNotFound | CommonAwsError
  >;
  deleteHyperParameterTuningJob(
    input: DeleteHyperParameterTuningJobRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteImage(
    input: DeleteImageRequest,
  ): Effect.Effect<
    DeleteImageResponse,
    ResourceInUse | ResourceNotFound | CommonAwsError
  >;
  deleteImageVersion(
    input: DeleteImageVersionRequest,
  ): Effect.Effect<
    DeleteImageVersionResponse,
    ResourceInUse | ResourceNotFound | CommonAwsError
  >;
  deleteInferenceComponent(
    input: DeleteInferenceComponentInput,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteInferenceExperiment(
    input: DeleteInferenceExperimentRequest,
  ): Effect.Effect<
    DeleteInferenceExperimentResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  deleteMlflowTrackingServer(
    input: DeleteMlflowTrackingServerRequest,
  ): Effect.Effect<
    DeleteMlflowTrackingServerResponse,
    ResourceNotFound | CommonAwsError
  >;
  deleteModel(
    input: DeleteModelInput,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteModelBiasJobDefinition(
    input: DeleteModelBiasJobDefinitionRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  deleteModelCard(
    input: DeleteModelCardRequest,
  ): Effect.Effect<
    {},
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  deleteModelExplainabilityJobDefinition(
    input: DeleteModelExplainabilityJobDefinitionRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  deleteModelPackage(
    input: DeleteModelPackageInput,
  ): Effect.Effect<
    {},
    ConflictException | CommonAwsError
  >;
  deleteModelPackageGroup(
    input: DeleteModelPackageGroupInput,
  ): Effect.Effect<
    {},
    ConflictException | CommonAwsError
  >;
  deleteModelPackageGroupPolicy(
    input: DeleteModelPackageGroupPolicyInput,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteModelQualityJobDefinition(
    input: DeleteModelQualityJobDefinitionRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  deleteMonitoringSchedule(
    input: DeleteMonitoringScheduleRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  deleteNotebookInstance(
    input: DeleteNotebookInstanceInput,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteNotebookInstanceLifecycleConfig(
    input: DeleteNotebookInstanceLifecycleConfigInput,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteOptimizationJob(
    input: DeleteOptimizationJobRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  deletePartnerApp(
    input: DeletePartnerAppRequest,
  ): Effect.Effect<
    DeletePartnerAppResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  deletePipeline(
    input: DeletePipelineRequest,
  ): Effect.Effect<
    DeletePipelineResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  deleteProject(
    input: DeleteProjectInput,
  ): Effect.Effect<
    {},
    ConflictException | CommonAwsError
  >;
  deleteSpace(
    input: DeleteSpaceRequest,
  ): Effect.Effect<
    {},
    ResourceInUse | ResourceNotFound | CommonAwsError
  >;
  deleteStudioLifecycleConfig(
    input: DeleteStudioLifecycleConfigRequest,
  ): Effect.Effect<
    {},
    ResourceInUse | ResourceNotFound | CommonAwsError
  >;
  deleteTags(
    input: DeleteTagsInput,
  ): Effect.Effect<
    DeleteTagsOutput,
    CommonAwsError
  >;
  deleteTrial(
    input: DeleteTrialRequest,
  ): Effect.Effect<
    DeleteTrialResponse,
    ResourceNotFound | CommonAwsError
  >;
  deleteTrialComponent(
    input: DeleteTrialComponentRequest,
  ): Effect.Effect<
    DeleteTrialComponentResponse,
    ResourceNotFound | CommonAwsError
  >;
  deleteUserProfile(
    input: DeleteUserProfileRequest,
  ): Effect.Effect<
    {},
    ResourceInUse | ResourceNotFound | CommonAwsError
  >;
  deleteWorkforce(
    input: DeleteWorkforceRequest,
  ): Effect.Effect<
    DeleteWorkforceResponse,
    CommonAwsError
  >;
  deleteWorkteam(
    input: DeleteWorkteamRequest,
  ): Effect.Effect<
    DeleteWorkteamResponse,
    ResourceLimitExceeded | CommonAwsError
  >;
  deregisterDevices(
    input: DeregisterDevicesRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  describeAction(
    input: DescribeActionRequest,
  ): Effect.Effect<
    DescribeActionResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeAlgorithm(
    input: DescribeAlgorithmInput,
  ): Effect.Effect<
    DescribeAlgorithmOutput,
    CommonAwsError
  >;
  describeApp(
    input: DescribeAppRequest,
  ): Effect.Effect<
    DescribeAppResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeAppImageConfig(
    input: DescribeAppImageConfigRequest,
  ): Effect.Effect<
    DescribeAppImageConfigResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeArtifact(
    input: DescribeArtifactRequest,
  ): Effect.Effect<
    DescribeArtifactResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeAutoMLJob(
    input: DescribeAutoMLJobRequest,
  ): Effect.Effect<
    DescribeAutoMLJobResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeAutoMLJobV2(
    input: DescribeAutoMLJobV2Request,
  ): Effect.Effect<
    DescribeAutoMLJobV2Response,
    ResourceNotFound | CommonAwsError
  >;
  describeCluster(
    input: DescribeClusterRequest,
  ): Effect.Effect<
    DescribeClusterResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeClusterNode(
    input: DescribeClusterNodeRequest,
  ): Effect.Effect<
    DescribeClusterNodeResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeClusterSchedulerConfig(
    input: DescribeClusterSchedulerConfigRequest,
  ): Effect.Effect<
    DescribeClusterSchedulerConfigResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeCodeRepository(
    input: DescribeCodeRepositoryInput,
  ): Effect.Effect<
    DescribeCodeRepositoryOutput,
    CommonAwsError
  >;
  describeCompilationJob(
    input: DescribeCompilationJobRequest,
  ): Effect.Effect<
    DescribeCompilationJobResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeComputeQuota(
    input: DescribeComputeQuotaRequest,
  ): Effect.Effect<
    DescribeComputeQuotaResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeContext(
    input: DescribeContextRequest,
  ): Effect.Effect<
    DescribeContextResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeDataQualityJobDefinition(
    input: DescribeDataQualityJobDefinitionRequest,
  ): Effect.Effect<
    DescribeDataQualityJobDefinitionResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeDevice(
    input: DescribeDeviceRequest,
  ): Effect.Effect<
    DescribeDeviceResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeDeviceFleet(
    input: DescribeDeviceFleetRequest,
  ): Effect.Effect<
    DescribeDeviceFleetResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeDomain(
    input: DescribeDomainRequest,
  ): Effect.Effect<
    DescribeDomainResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeEdgeDeploymentPlan(
    input: DescribeEdgeDeploymentPlanRequest,
  ): Effect.Effect<
    DescribeEdgeDeploymentPlanResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeEdgePackagingJob(
    input: DescribeEdgePackagingJobRequest,
  ): Effect.Effect<
    DescribeEdgePackagingJobResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeEndpoint(
    input: DescribeEndpointInput,
  ): Effect.Effect<
    DescribeEndpointOutput,
    CommonAwsError
  >;
  describeEndpointConfig(
    input: DescribeEndpointConfigInput,
  ): Effect.Effect<
    DescribeEndpointConfigOutput,
    CommonAwsError
  >;
  describeExperiment(
    input: DescribeExperimentRequest,
  ): Effect.Effect<
    DescribeExperimentResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeFeatureGroup(
    input: DescribeFeatureGroupRequest,
  ): Effect.Effect<
    DescribeFeatureGroupResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeFeatureMetadata(
    input: DescribeFeatureMetadataRequest,
  ): Effect.Effect<
    DescribeFeatureMetadataResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeFlowDefinition(
    input: DescribeFlowDefinitionRequest,
  ): Effect.Effect<
    DescribeFlowDefinitionResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeHub(
    input: DescribeHubRequest,
  ): Effect.Effect<
    DescribeHubResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeHubContent(
    input: DescribeHubContentRequest,
  ): Effect.Effect<
    DescribeHubContentResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeHumanTaskUi(
    input: DescribeHumanTaskUiRequest,
  ): Effect.Effect<
    DescribeHumanTaskUiResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeHyperParameterTuningJob(
    input: DescribeHyperParameterTuningJobRequest,
  ): Effect.Effect<
    DescribeHyperParameterTuningJobResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeImage(
    input: DescribeImageRequest,
  ): Effect.Effect<
    DescribeImageResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeImageVersion(
    input: DescribeImageVersionRequest,
  ): Effect.Effect<
    DescribeImageVersionResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeInferenceComponent(
    input: DescribeInferenceComponentInput,
  ): Effect.Effect<
    DescribeInferenceComponentOutput,
    CommonAwsError
  >;
  describeInferenceExperiment(
    input: DescribeInferenceExperimentRequest,
  ): Effect.Effect<
    DescribeInferenceExperimentResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeInferenceRecommendationsJob(
    input: DescribeInferenceRecommendationsJobRequest,
  ): Effect.Effect<
    DescribeInferenceRecommendationsJobResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeLabelingJob(
    input: DescribeLabelingJobRequest,
  ): Effect.Effect<
    DescribeLabelingJobResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeLineageGroup(
    input: DescribeLineageGroupRequest,
  ): Effect.Effect<
    DescribeLineageGroupResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeMlflowTrackingServer(
    input: DescribeMlflowTrackingServerRequest,
  ): Effect.Effect<
    DescribeMlflowTrackingServerResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeModel(
    input: DescribeModelInput,
  ): Effect.Effect<
    DescribeModelOutput,
    CommonAwsError
  >;
  describeModelBiasJobDefinition(
    input: DescribeModelBiasJobDefinitionRequest,
  ): Effect.Effect<
    DescribeModelBiasJobDefinitionResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeModelCard(
    input: DescribeModelCardRequest,
  ): Effect.Effect<
    DescribeModelCardResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeModelCardExportJob(
    input: DescribeModelCardExportJobRequest,
  ): Effect.Effect<
    DescribeModelCardExportJobResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeModelExplainabilityJobDefinition(
    input: DescribeModelExplainabilityJobDefinitionRequest,
  ): Effect.Effect<
    DescribeModelExplainabilityJobDefinitionResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeModelPackage(
    input: DescribeModelPackageInput,
  ): Effect.Effect<
    DescribeModelPackageOutput,
    CommonAwsError
  >;
  describeModelPackageGroup(
    input: DescribeModelPackageGroupInput,
  ): Effect.Effect<
    DescribeModelPackageGroupOutput,
    CommonAwsError
  >;
  describeModelQualityJobDefinition(
    input: DescribeModelQualityJobDefinitionRequest,
  ): Effect.Effect<
    DescribeModelQualityJobDefinitionResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeMonitoringSchedule(
    input: DescribeMonitoringScheduleRequest,
  ): Effect.Effect<
    DescribeMonitoringScheduleResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeNotebookInstance(
    input: DescribeNotebookInstanceInput,
  ): Effect.Effect<
    DescribeNotebookInstanceOutput,
    CommonAwsError
  >;
  describeNotebookInstanceLifecycleConfig(
    input: DescribeNotebookInstanceLifecycleConfigInput,
  ): Effect.Effect<
    DescribeNotebookInstanceLifecycleConfigOutput,
    CommonAwsError
  >;
  describeOptimizationJob(
    input: DescribeOptimizationJobRequest,
  ): Effect.Effect<
    DescribeOptimizationJobResponse,
    ResourceNotFound | CommonAwsError
  >;
  describePartnerApp(
    input: DescribePartnerAppRequest,
  ): Effect.Effect<
    DescribePartnerAppResponse,
    ResourceNotFound | CommonAwsError
  >;
  describePipeline(
    input: DescribePipelineRequest,
  ): Effect.Effect<
    DescribePipelineResponse,
    ResourceNotFound | CommonAwsError
  >;
  describePipelineDefinitionForExecution(
    input: DescribePipelineDefinitionForExecutionRequest,
  ): Effect.Effect<
    DescribePipelineDefinitionForExecutionResponse,
    ResourceNotFound | CommonAwsError
  >;
  describePipelineExecution(
    input: DescribePipelineExecutionRequest,
  ): Effect.Effect<
    DescribePipelineExecutionResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeProcessingJob(
    input: DescribeProcessingJobRequest,
  ): Effect.Effect<
    DescribeProcessingJobResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeProject(
    input: DescribeProjectInput,
  ): Effect.Effect<
    DescribeProjectOutput,
    CommonAwsError
  >;
  describeSpace(
    input: DescribeSpaceRequest,
  ): Effect.Effect<
    DescribeSpaceResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeStudioLifecycleConfig(
    input: DescribeStudioLifecycleConfigRequest,
  ): Effect.Effect<
    DescribeStudioLifecycleConfigResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeSubscribedWorkteam(
    input: DescribeSubscribedWorkteamRequest,
  ): Effect.Effect<
    DescribeSubscribedWorkteamResponse,
    CommonAwsError
  >;
  describeTrainingJob(
    input: DescribeTrainingJobRequest,
  ): Effect.Effect<
    DescribeTrainingJobResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeTrainingPlan(
    input: DescribeTrainingPlanRequest,
  ): Effect.Effect<
    DescribeTrainingPlanResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeTransformJob(
    input: DescribeTransformJobRequest,
  ): Effect.Effect<
    DescribeTransformJobResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeTrial(
    input: DescribeTrialRequest,
  ): Effect.Effect<
    DescribeTrialResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeTrialComponent(
    input: DescribeTrialComponentRequest,
  ): Effect.Effect<
    DescribeTrialComponentResponse,
    ResourceNotFound | CommonAwsError
  >;
  describeUserProfile(
    input: DescribeUserProfileRequest,
  ): Effect.Effect<
    DescribeUserProfileResponse,
    ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  describeWorkforce(
    input: DescribeWorkforceRequest,
  ): Effect.Effect<
    DescribeWorkforceResponse,
    CommonAwsError
  >;
  describeWorkteam(
    input: DescribeWorkteamRequest,
  ): Effect.Effect<
    DescribeWorkteamResponse,
    CommonAwsError
  >;
  disableSagemakerServicecatalogPortfolio(
    input: DisableSagemakerServicecatalogPortfolioInput,
  ): Effect.Effect<
    DisableSagemakerServicecatalogPortfolioOutput,
    CommonAwsError
  >;
  disassociateTrialComponent(
    input: DisassociateTrialComponentRequest,
  ): Effect.Effect<
    DisassociateTrialComponentResponse,
    ResourceNotFound | CommonAwsError
  >;
  enableSagemakerServicecatalogPortfolio(
    input: EnableSagemakerServicecatalogPortfolioInput,
  ): Effect.Effect<
    EnableSagemakerServicecatalogPortfolioOutput,
    CommonAwsError
  >;
  getDeviceFleetReport(
    input: GetDeviceFleetReportRequest,
  ): Effect.Effect<
    GetDeviceFleetReportResponse,
    CommonAwsError
  >;
  getLineageGroupPolicy(
    input: GetLineageGroupPolicyRequest,
  ): Effect.Effect<
    GetLineageGroupPolicyResponse,
    ResourceNotFound | CommonAwsError
  >;
  getModelPackageGroupPolicy(
    input: GetModelPackageGroupPolicyInput,
  ): Effect.Effect<
    GetModelPackageGroupPolicyOutput,
    CommonAwsError
  >;
  getSagemakerServicecatalogPortfolioStatus(
    input: GetSagemakerServicecatalogPortfolioStatusInput,
  ): Effect.Effect<
    GetSagemakerServicecatalogPortfolioStatusOutput,
    CommonAwsError
  >;
  getScalingConfigurationRecommendation(
    input: GetScalingConfigurationRecommendationRequest,
  ): Effect.Effect<
    GetScalingConfigurationRecommendationResponse,
    ResourceNotFound | CommonAwsError
  >;
  getSearchSuggestions(
    input: GetSearchSuggestionsRequest,
  ): Effect.Effect<
    GetSearchSuggestionsResponse,
    CommonAwsError
  >;
  importHubContent(
    input: ImportHubContentRequest,
  ): Effect.Effect<
    ImportHubContentResponse,
    ResourceInUse | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  listActions(
    input: ListActionsRequest,
  ): Effect.Effect<
    ListActionsResponse,
    ResourceNotFound | CommonAwsError
  >;
  listAlgorithms(
    input: ListAlgorithmsInput,
  ): Effect.Effect<
    ListAlgorithmsOutput,
    CommonAwsError
  >;
  listAliases(
    input: ListAliasesRequest,
  ): Effect.Effect<
    ListAliasesResponse,
    ResourceNotFound | CommonAwsError
  >;
  listAppImageConfigs(
    input: ListAppImageConfigsRequest,
  ): Effect.Effect<
    ListAppImageConfigsResponse,
    CommonAwsError
  >;
  listApps(
    input: ListAppsRequest,
  ): Effect.Effect<
    ListAppsResponse,
    CommonAwsError
  >;
  listArtifacts(
    input: ListArtifactsRequest,
  ): Effect.Effect<
    ListArtifactsResponse,
    ResourceNotFound | CommonAwsError
  >;
  listAssociations(
    input: ListAssociationsRequest,
  ): Effect.Effect<
    ListAssociationsResponse,
    ResourceNotFound | CommonAwsError
  >;
  listAutoMLJobs(
    input: ListAutoMLJobsRequest,
  ): Effect.Effect<
    ListAutoMLJobsResponse,
    CommonAwsError
  >;
  listCandidatesForAutoMLJob(
    input: ListCandidatesForAutoMLJobRequest,
  ): Effect.Effect<
    ListCandidatesForAutoMLJobResponse,
    ResourceNotFound | CommonAwsError
  >;
  listClusterNodes(
    input: ListClusterNodesRequest,
  ): Effect.Effect<
    ListClusterNodesResponse,
    ResourceNotFound | CommonAwsError
  >;
  listClusterSchedulerConfigs(
    input: ListClusterSchedulerConfigsRequest,
  ): Effect.Effect<
    ListClusterSchedulerConfigsResponse,
    CommonAwsError
  >;
  listClusters(
    input: ListClustersRequest,
  ): Effect.Effect<
    ListClustersResponse,
    CommonAwsError
  >;
  listCodeRepositories(
    input: ListCodeRepositoriesInput,
  ): Effect.Effect<
    ListCodeRepositoriesOutput,
    CommonAwsError
  >;
  listCompilationJobs(
    input: ListCompilationJobsRequest,
  ): Effect.Effect<
    ListCompilationJobsResponse,
    CommonAwsError
  >;
  listComputeQuotas(
    input: ListComputeQuotasRequest,
  ): Effect.Effect<
    ListComputeQuotasResponse,
    CommonAwsError
  >;
  listContexts(
    input: ListContextsRequest,
  ): Effect.Effect<
    ListContextsResponse,
    ResourceNotFound | CommonAwsError
  >;
  listDataQualityJobDefinitions(
    input: ListDataQualityJobDefinitionsRequest,
  ): Effect.Effect<
    ListDataQualityJobDefinitionsResponse,
    CommonAwsError
  >;
  listDeviceFleets(
    input: ListDeviceFleetsRequest,
  ): Effect.Effect<
    ListDeviceFleetsResponse,
    CommonAwsError
  >;
  listDevices(
    input: ListDevicesRequest,
  ): Effect.Effect<
    ListDevicesResponse,
    CommonAwsError
  >;
  listDomains(
    input: ListDomainsRequest,
  ): Effect.Effect<
    ListDomainsResponse,
    CommonAwsError
  >;
  listEdgeDeploymentPlans(
    input: ListEdgeDeploymentPlansRequest,
  ): Effect.Effect<
    ListEdgeDeploymentPlansResponse,
    CommonAwsError
  >;
  listEdgePackagingJobs(
    input: ListEdgePackagingJobsRequest,
  ): Effect.Effect<
    ListEdgePackagingJobsResponse,
    CommonAwsError
  >;
  listEndpointConfigs(
    input: ListEndpointConfigsInput,
  ): Effect.Effect<
    ListEndpointConfigsOutput,
    CommonAwsError
  >;
  listEndpoints(
    input: ListEndpointsInput,
  ): Effect.Effect<
    ListEndpointsOutput,
    CommonAwsError
  >;
  listExperiments(
    input: ListExperimentsRequest,
  ): Effect.Effect<
    ListExperimentsResponse,
    CommonAwsError
  >;
  listFeatureGroups(
    input: ListFeatureGroupsRequest,
  ): Effect.Effect<
    ListFeatureGroupsResponse,
    CommonAwsError
  >;
  listFlowDefinitions(
    input: ListFlowDefinitionsRequest,
  ): Effect.Effect<
    ListFlowDefinitionsResponse,
    CommonAwsError
  >;
  listHubContentVersions(
    input: ListHubContentVersionsRequest,
  ): Effect.Effect<
    ListHubContentVersionsResponse,
    ResourceNotFound | CommonAwsError
  >;
  listHubContents(
    input: ListHubContentsRequest,
  ): Effect.Effect<
    ListHubContentsResponse,
    ResourceNotFound | CommonAwsError
  >;
  listHubs(
    input: ListHubsRequest,
  ): Effect.Effect<
    ListHubsResponse,
    CommonAwsError
  >;
  listHumanTaskUis(
    input: ListHumanTaskUisRequest,
  ): Effect.Effect<
    ListHumanTaskUisResponse,
    CommonAwsError
  >;
  listHyperParameterTuningJobs(
    input: ListHyperParameterTuningJobsRequest,
  ): Effect.Effect<
    ListHyperParameterTuningJobsResponse,
    CommonAwsError
  >;
  listImageVersions(
    input: ListImageVersionsRequest,
  ): Effect.Effect<
    ListImageVersionsResponse,
    ResourceNotFound | CommonAwsError
  >;
  listImages(
    input: ListImagesRequest,
  ): Effect.Effect<
    ListImagesResponse,
    CommonAwsError
  >;
  listInferenceComponents(
    input: ListInferenceComponentsInput,
  ): Effect.Effect<
    ListInferenceComponentsOutput,
    CommonAwsError
  >;
  listInferenceExperiments(
    input: ListInferenceExperimentsRequest,
  ): Effect.Effect<
    ListInferenceExperimentsResponse,
    CommonAwsError
  >;
  listInferenceRecommendationsJobSteps(
    input: ListInferenceRecommendationsJobStepsRequest,
  ): Effect.Effect<
    ListInferenceRecommendationsJobStepsResponse,
    ResourceNotFound | CommonAwsError
  >;
  listInferenceRecommendationsJobs(
    input: ListInferenceRecommendationsJobsRequest,
  ): Effect.Effect<
    ListInferenceRecommendationsJobsResponse,
    CommonAwsError
  >;
  listLabelingJobs(
    input: ListLabelingJobsRequest,
  ): Effect.Effect<
    ListLabelingJobsResponse,
    CommonAwsError
  >;
  listLabelingJobsForWorkteam(
    input: ListLabelingJobsForWorkteamRequest,
  ): Effect.Effect<
    ListLabelingJobsForWorkteamResponse,
    ResourceNotFound | CommonAwsError
  >;
  listLineageGroups(
    input: ListLineageGroupsRequest,
  ): Effect.Effect<
    ListLineageGroupsResponse,
    CommonAwsError
  >;
  listMlflowTrackingServers(
    input: ListMlflowTrackingServersRequest,
  ): Effect.Effect<
    ListMlflowTrackingServersResponse,
    CommonAwsError
  >;
  listModelBiasJobDefinitions(
    input: ListModelBiasJobDefinitionsRequest,
  ): Effect.Effect<
    ListModelBiasJobDefinitionsResponse,
    CommonAwsError
  >;
  listModelCardExportJobs(
    input: ListModelCardExportJobsRequest,
  ): Effect.Effect<
    ListModelCardExportJobsResponse,
    CommonAwsError
  >;
  listModelCardVersions(
    input: ListModelCardVersionsRequest,
  ): Effect.Effect<
    ListModelCardVersionsResponse,
    ResourceNotFound | CommonAwsError
  >;
  listModelCards(
    input: ListModelCardsRequest,
  ): Effect.Effect<
    ListModelCardsResponse,
    CommonAwsError
  >;
  listModelExplainabilityJobDefinitions(
    input: ListModelExplainabilityJobDefinitionsRequest,
  ): Effect.Effect<
    ListModelExplainabilityJobDefinitionsResponse,
    CommonAwsError
  >;
  listModelMetadata(
    input: ListModelMetadataRequest,
  ): Effect.Effect<
    ListModelMetadataResponse,
    CommonAwsError
  >;
  listModelPackageGroups(
    input: ListModelPackageGroupsInput,
  ): Effect.Effect<
    ListModelPackageGroupsOutput,
    CommonAwsError
  >;
  listModelPackages(
    input: ListModelPackagesInput,
  ): Effect.Effect<
    ListModelPackagesOutput,
    CommonAwsError
  >;
  listModelQualityJobDefinitions(
    input: ListModelQualityJobDefinitionsRequest,
  ): Effect.Effect<
    ListModelQualityJobDefinitionsResponse,
    CommonAwsError
  >;
  listModels(
    input: ListModelsInput,
  ): Effect.Effect<
    ListModelsOutput,
    CommonAwsError
  >;
  listMonitoringAlertHistory(
    input: ListMonitoringAlertHistoryRequest,
  ): Effect.Effect<
    ListMonitoringAlertHistoryResponse,
    ResourceNotFound | CommonAwsError
  >;
  listMonitoringAlerts(
    input: ListMonitoringAlertsRequest,
  ): Effect.Effect<
    ListMonitoringAlertsResponse,
    ResourceNotFound | CommonAwsError
  >;
  listMonitoringExecutions(
    input: ListMonitoringExecutionsRequest,
  ): Effect.Effect<
    ListMonitoringExecutionsResponse,
    CommonAwsError
  >;
  listMonitoringSchedules(
    input: ListMonitoringSchedulesRequest,
  ): Effect.Effect<
    ListMonitoringSchedulesResponse,
    CommonAwsError
  >;
  listNotebookInstanceLifecycleConfigs(
    input: ListNotebookInstanceLifecycleConfigsInput,
  ): Effect.Effect<
    ListNotebookInstanceLifecycleConfigsOutput,
    CommonAwsError
  >;
  listNotebookInstances(
    input: ListNotebookInstancesInput,
  ): Effect.Effect<
    ListNotebookInstancesOutput,
    CommonAwsError
  >;
  listOptimizationJobs(
    input: ListOptimizationJobsRequest,
  ): Effect.Effect<
    ListOptimizationJobsResponse,
    CommonAwsError
  >;
  listPartnerApps(
    input: ListPartnerAppsRequest,
  ): Effect.Effect<
    ListPartnerAppsResponse,
    CommonAwsError
  >;
  listPipelineExecutionSteps(
    input: ListPipelineExecutionStepsRequest,
  ): Effect.Effect<
    ListPipelineExecutionStepsResponse,
    ResourceNotFound | CommonAwsError
  >;
  listPipelineExecutions(
    input: ListPipelineExecutionsRequest,
  ): Effect.Effect<
    ListPipelineExecutionsResponse,
    ResourceNotFound | CommonAwsError
  >;
  listPipelineParametersForExecution(
    input: ListPipelineParametersForExecutionRequest,
  ): Effect.Effect<
    ListPipelineParametersForExecutionResponse,
    ResourceNotFound | CommonAwsError
  >;
  listPipelines(
    input: ListPipelinesRequest,
  ): Effect.Effect<
    ListPipelinesResponse,
    CommonAwsError
  >;
  listProcessingJobs(
    input: ListProcessingJobsRequest,
  ): Effect.Effect<
    ListProcessingJobsResponse,
    CommonAwsError
  >;
  listProjects(
    input: ListProjectsInput,
  ): Effect.Effect<
    ListProjectsOutput,
    CommonAwsError
  >;
  listResourceCatalogs(
    input: ListResourceCatalogsRequest,
  ): Effect.Effect<
    ListResourceCatalogsResponse,
    CommonAwsError
  >;
  listSpaces(
    input: ListSpacesRequest,
  ): Effect.Effect<
    ListSpacesResponse,
    CommonAwsError
  >;
  listStageDevices(
    input: ListStageDevicesRequest,
  ): Effect.Effect<
    ListStageDevicesResponse,
    CommonAwsError
  >;
  listStudioLifecycleConfigs(
    input: ListStudioLifecycleConfigsRequest,
  ): Effect.Effect<
    ListStudioLifecycleConfigsResponse,
    ResourceInUse | CommonAwsError
  >;
  listSubscribedWorkteams(
    input: ListSubscribedWorkteamsRequest,
  ): Effect.Effect<
    ListSubscribedWorkteamsResponse,
    CommonAwsError
  >;
  listTags(
    input: ListTagsInput,
  ): Effect.Effect<
    ListTagsOutput,
    CommonAwsError
  >;
  listTrainingJobs(
    input: ListTrainingJobsRequest,
  ): Effect.Effect<
    ListTrainingJobsResponse,
    CommonAwsError
  >;
  listTrainingJobsForHyperParameterTuningJob(
    input: ListTrainingJobsForHyperParameterTuningJobRequest,
  ): Effect.Effect<
    ListTrainingJobsForHyperParameterTuningJobResponse,
    ResourceNotFound | CommonAwsError
  >;
  listTrainingPlans(
    input: ListTrainingPlansRequest,
  ): Effect.Effect<
    ListTrainingPlansResponse,
    CommonAwsError
  >;
  listTransformJobs(
    input: ListTransformJobsRequest,
  ): Effect.Effect<
    ListTransformJobsResponse,
    CommonAwsError
  >;
  listTrialComponents(
    input: ListTrialComponentsRequest,
  ): Effect.Effect<
    ListTrialComponentsResponse,
    ResourceNotFound | CommonAwsError
  >;
  listTrials(
    input: ListTrialsRequest,
  ): Effect.Effect<
    ListTrialsResponse,
    ResourceNotFound | CommonAwsError
  >;
  listUserProfiles(
    input: ListUserProfilesRequest,
  ): Effect.Effect<
    ListUserProfilesResponse,
    CommonAwsError
  >;
  listWorkforces(
    input: ListWorkforcesRequest,
  ): Effect.Effect<
    ListWorkforcesResponse,
    CommonAwsError
  >;
  listWorkteams(
    input: ListWorkteamsRequest,
  ): Effect.Effect<
    ListWorkteamsResponse,
    CommonAwsError
  >;
  putModelPackageGroupPolicy(
    input: PutModelPackageGroupPolicyInput,
  ): Effect.Effect<
    PutModelPackageGroupPolicyOutput,
    ConflictException | CommonAwsError
  >;
  queryLineage(
    input: QueryLineageRequest,
  ): Effect.Effect<
    QueryLineageResponse,
    ResourceNotFound | CommonAwsError
  >;
  registerDevices(
    input: RegisterDevicesRequest,
  ): Effect.Effect<
    {},
    ResourceLimitExceeded | CommonAwsError
  >;
  renderUiTemplate(
    input: RenderUiTemplateRequest,
  ): Effect.Effect<
    RenderUiTemplateResponse,
    ResourceNotFound | CommonAwsError
  >;
  retryPipelineExecution(
    input: RetryPipelineExecutionRequest,
  ): Effect.Effect<
    RetryPipelineExecutionResponse,
    ConflictException | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  search(
    input: SearchRequest,
  ): Effect.Effect<
    SearchResponse,
    CommonAwsError
  >;
  searchTrainingPlanOfferings(
    input: SearchTrainingPlanOfferingsRequest,
  ): Effect.Effect<
    SearchTrainingPlanOfferingsResponse,
    ResourceLimitExceeded | CommonAwsError
  >;
  sendPipelineExecutionStepFailure(
    input: SendPipelineExecutionStepFailureRequest,
  ): Effect.Effect<
    SendPipelineExecutionStepFailureResponse,
    ConflictException | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  sendPipelineExecutionStepSuccess(
    input: SendPipelineExecutionStepSuccessRequest,
  ): Effect.Effect<
    SendPipelineExecutionStepSuccessResponse,
    ConflictException | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  startEdgeDeploymentStage(
    input: StartEdgeDeploymentStageRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  startInferenceExperiment(
    input: StartInferenceExperimentRequest,
  ): Effect.Effect<
    StartInferenceExperimentResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  startMlflowTrackingServer(
    input: StartMlflowTrackingServerRequest,
  ): Effect.Effect<
    StartMlflowTrackingServerResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  startMonitoringSchedule(
    input: StartMonitoringScheduleRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  startNotebookInstance(
    input: StartNotebookInstanceInput,
  ): Effect.Effect<
    {},
    ResourceLimitExceeded | CommonAwsError
  >;
  startPipelineExecution(
    input: StartPipelineExecutionRequest,
  ): Effect.Effect<
    StartPipelineExecutionResponse,
    ConflictException | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  startSession(
    input: StartSessionRequest,
  ): Effect.Effect<
    StartSessionResponse,
    ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  stopAutoMLJob(
    input: StopAutoMLJobRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  stopCompilationJob(
    input: StopCompilationJobRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  stopEdgeDeploymentStage(
    input: StopEdgeDeploymentStageRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  stopEdgePackagingJob(
    input: StopEdgePackagingJobRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  stopHyperParameterTuningJob(
    input: StopHyperParameterTuningJobRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  stopInferenceExperiment(
    input: StopInferenceExperimentRequest,
  ): Effect.Effect<
    StopInferenceExperimentResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  stopInferenceRecommendationsJob(
    input: StopInferenceRecommendationsJobRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  stopLabelingJob(
    input: StopLabelingJobRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  stopMlflowTrackingServer(
    input: StopMlflowTrackingServerRequest,
  ): Effect.Effect<
    StopMlflowTrackingServerResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  stopMonitoringSchedule(
    input: StopMonitoringScheduleRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  stopNotebookInstance(
    input: StopNotebookInstanceInput,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  stopOptimizationJob(
    input: StopOptimizationJobRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  stopPipelineExecution(
    input: StopPipelineExecutionRequest,
  ): Effect.Effect<
    StopPipelineExecutionResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  stopProcessingJob(
    input: StopProcessingJobRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  stopTrainingJob(
    input: StopTrainingJobRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  stopTransformJob(
    input: StopTransformJobRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  updateAction(
    input: UpdateActionRequest,
  ): Effect.Effect<
    UpdateActionResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  updateAppImageConfig(
    input: UpdateAppImageConfigRequest,
  ): Effect.Effect<
    UpdateAppImageConfigResponse,
    ResourceNotFound | CommonAwsError
  >;
  updateArtifact(
    input: UpdateArtifactRequest,
  ): Effect.Effect<
    UpdateArtifactResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  updateCluster(
    input: UpdateClusterRequest,
  ): Effect.Effect<
    UpdateClusterResponse,
    ConflictException | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  updateClusterSchedulerConfig(
    input: UpdateClusterSchedulerConfigRequest,
  ): Effect.Effect<
    UpdateClusterSchedulerConfigResponse,
    ConflictException | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  updateClusterSoftware(
    input: UpdateClusterSoftwareRequest,
  ): Effect.Effect<
    UpdateClusterSoftwareResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  updateCodeRepository(
    input: UpdateCodeRepositoryInput,
  ): Effect.Effect<
    UpdateCodeRepositoryOutput,
    ConflictException | CommonAwsError
  >;
  updateComputeQuota(
    input: UpdateComputeQuotaRequest,
  ): Effect.Effect<
    UpdateComputeQuotaResponse,
    ConflictException | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  updateContext(
    input: UpdateContextRequest,
  ): Effect.Effect<
    UpdateContextResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  updateDeviceFleet(
    input: UpdateDeviceFleetRequest,
  ): Effect.Effect<
    {},
    ResourceInUse | CommonAwsError
  >;
  updateDevices(
    input: UpdateDevicesRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  updateDomain(
    input: UpdateDomainRequest,
  ): Effect.Effect<
    UpdateDomainResponse,
    ResourceInUse | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  updateEndpoint(
    input: UpdateEndpointInput,
  ): Effect.Effect<
    UpdateEndpointOutput,
    ResourceLimitExceeded | CommonAwsError
  >;
  updateEndpointWeightsAndCapacities(
    input: UpdateEndpointWeightsAndCapacitiesInput,
  ): Effect.Effect<
    UpdateEndpointWeightsAndCapacitiesOutput,
    ResourceLimitExceeded | CommonAwsError
  >;
  updateExperiment(
    input: UpdateExperimentRequest,
  ): Effect.Effect<
    UpdateExperimentResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  updateFeatureGroup(
    input: UpdateFeatureGroupRequest,
  ): Effect.Effect<
    UpdateFeatureGroupResponse,
    ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  updateFeatureMetadata(
    input: UpdateFeatureMetadataRequest,
  ): Effect.Effect<
    {},
    ResourceNotFound | CommonAwsError
  >;
  updateHub(
    input: UpdateHubRequest,
  ): Effect.Effect<
    UpdateHubResponse,
    ResourceNotFound | CommonAwsError
  >;
  updateHubContent(
    input: UpdateHubContentRequest,
  ): Effect.Effect<
    UpdateHubContentResponse,
    ResourceInUse | ResourceNotFound | CommonAwsError
  >;
  updateHubContentReference(
    input: UpdateHubContentReferenceRequest,
  ): Effect.Effect<
    UpdateHubContentReferenceResponse,
    ResourceInUse | ResourceNotFound | CommonAwsError
  >;
  updateImage(
    input: UpdateImageRequest,
  ): Effect.Effect<
    UpdateImageResponse,
    ResourceInUse | ResourceNotFound | CommonAwsError
  >;
  updateImageVersion(
    input: UpdateImageVersionRequest,
  ): Effect.Effect<
    UpdateImageVersionResponse,
    ResourceInUse | ResourceNotFound | CommonAwsError
  >;
  updateInferenceComponent(
    input: UpdateInferenceComponentInput,
  ): Effect.Effect<
    UpdateInferenceComponentOutput,
    ResourceLimitExceeded | CommonAwsError
  >;
  updateInferenceComponentRuntimeConfig(
    input: UpdateInferenceComponentRuntimeConfigInput,
  ): Effect.Effect<
    UpdateInferenceComponentRuntimeConfigOutput,
    ResourceLimitExceeded | CommonAwsError
  >;
  updateInferenceExperiment(
    input: UpdateInferenceExperimentRequest,
  ): Effect.Effect<
    UpdateInferenceExperimentResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  updateMlflowTrackingServer(
    input: UpdateMlflowTrackingServerRequest,
  ): Effect.Effect<
    UpdateMlflowTrackingServerResponse,
    ConflictException | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  updateModelCard(
    input: UpdateModelCardRequest,
  ): Effect.Effect<
    UpdateModelCardResponse,
    ConflictException | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  updateModelPackage(
    input: UpdateModelPackageInput,
  ): Effect.Effect<
    UpdateModelPackageOutput,
    ConflictException | CommonAwsError
  >;
  updateMonitoringAlert(
    input: UpdateMonitoringAlertRequest,
  ): Effect.Effect<
    UpdateMonitoringAlertResponse,
    ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  updateMonitoringSchedule(
    input: UpdateMonitoringScheduleRequest,
  ): Effect.Effect<
    UpdateMonitoringScheduleResponse,
    ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  updateNotebookInstance(
    input: UpdateNotebookInstanceInput,
  ): Effect.Effect<
    UpdateNotebookInstanceOutput,
    ResourceLimitExceeded | CommonAwsError
  >;
  updateNotebookInstanceLifecycleConfig(
    input: UpdateNotebookInstanceLifecycleConfigInput,
  ): Effect.Effect<
    UpdateNotebookInstanceLifecycleConfigOutput,
    ResourceLimitExceeded | CommonAwsError
  >;
  updatePartnerApp(
    input: UpdatePartnerAppRequest,
  ): Effect.Effect<
    UpdatePartnerAppResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  updatePipeline(
    input: UpdatePipelineRequest,
  ): Effect.Effect<
    UpdatePipelineResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  updatePipelineExecution(
    input: UpdatePipelineExecutionRequest,
  ): Effect.Effect<
    UpdatePipelineExecutionResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  updateProject(
    input: UpdateProjectInput,
  ): Effect.Effect<
    UpdateProjectOutput,
    ConflictException | CommonAwsError
  >;
  updateSpace(
    input: UpdateSpaceRequest,
  ): Effect.Effect<
    UpdateSpaceResponse,
    ResourceInUse | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  updateTrainingJob(
    input: UpdateTrainingJobRequest,
  ): Effect.Effect<
    UpdateTrainingJobResponse,
    ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  updateTrial(
    input: UpdateTrialRequest,
  ): Effect.Effect<
    UpdateTrialResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  updateTrialComponent(
    input: UpdateTrialComponentRequest,
  ): Effect.Effect<
    UpdateTrialComponentResponse,
    ConflictException | ResourceNotFound | CommonAwsError
  >;
  updateUserProfile(
    input: UpdateUserProfileRequest,
  ): Effect.Effect<
    UpdateUserProfileResponse,
    ResourceInUse | ResourceLimitExceeded | ResourceNotFound | CommonAwsError
  >;
  updateWorkforce(
    input: UpdateWorkforceRequest,
  ): Effect.Effect<
    UpdateWorkforceResponse,
    ConflictException | CommonAwsError
  >;
  updateWorkteam(
    input: UpdateWorkteamRequest,
  ): Effect.Effect<
    UpdateWorkteamResponse,
    ResourceLimitExceeded | CommonAwsError
  >;
}

export type Sagemaker = SageMaker;

export type Accept = string;

export type AcceptEula = boolean;

export type AccountId = string;

export type ActionArn = string;

export interface ActionSource {
  SourceUri: string;
  SourceType?: string;
  SourceId?: string;
}
export type ActionStatus = "UNKNOWN" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "STOPPING" | "STOPPED";
export type ActionSummaries = Array<ActionSummary>;
export interface ActionSummary {
  ActionArn?: string;
  ActionName?: string;
  Source?: ActionSource;
  ActionType?: string;
  Status?: ActionStatus;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type ActivationState = "ENABLED" | "DISABLED";
export interface AddAssociationRequest {
  SourceArn: string;
  DestinationArn: string;
  AssociationType?: AssociationEdgeType;
}
export interface AddAssociationResponse {
  SourceArn?: string;
  DestinationArn?: string;
}
export type AdditionalCodeRepositoryNamesOrUrls = Array<string>;
export interface AdditionalInferenceSpecificationDefinition {
  Name: string;
  Description?: string;
  Containers: Array<ModelPackageContainerDefinition>;
  SupportedTransformInstanceTypes?: Array<TransformInstanceType>;
  SupportedRealtimeInferenceInstanceTypes?: Array<ProductionVariantInstanceType>;
  SupportedContentTypes?: Array<string>;
  SupportedResponseMIMETypes?: Array<string>;
}
export type AdditionalInferenceSpecifications = Array<AdditionalInferenceSpecificationDefinition>;
export type AdditionalModelChannelName = string;

export interface AdditionalModelDataSource {
  ChannelName: string;
  S3DataSource: S3ModelDataSource;
}
export type AdditionalModelDataSources = Array<AdditionalModelDataSource>;
export interface AdditionalS3DataSource {
  S3DataType: AdditionalS3DataSourceDataType;
  S3Uri: string;
  CompressionType?: CompressionType;
  ETag?: string;
}
export type AdditionalS3DataSourceDataType = "S3OBJECT" | "S3PREFIX";
export interface AddTagsInput {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface AddTagsOutput {
  Tags?: Array<Tag>;
}
export interface AgentVersion {
  Version: string;
  AgentCount: number;
}
export type AgentVersions = Array<AgentVersion>;
export type AggregationTransformations = Record<string, AggregationTransformationValue>;
export type AggregationTransformationValue = "Sum" | "Avg" | "First" | "Min" | "Max";
export interface Alarm {
  AlarmName?: string;
}
export interface AlarmDetails {
  AlarmName: string;
}
export type AlarmList = Array<Alarm>;
export type AlarmName = string;

export type AlgorithmArn = string;

export type AlgorithmImage = string;

export type AlgorithmSortBy = "NAME" | "CREATION_TIME";
export interface AlgorithmSpecification {
  TrainingImage?: string;
  AlgorithmName?: string;
  TrainingInputMode: TrainingInputMode;
  MetricDefinitions?: Array<MetricDefinition>;
  EnableSageMakerMetricsTimeSeries?: boolean;
  ContainerEntrypoint?: Array<string>;
  ContainerArguments?: Array<string>;
  TrainingImageConfig?: TrainingImageConfig;
}
export type AlgorithmStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "DELETING";
export interface AlgorithmStatusDetails {
  ValidationStatuses?: Array<AlgorithmStatusItem>;
  ImageScanStatuses?: Array<AlgorithmStatusItem>;
}
export interface AlgorithmStatusItem {
  Name: string;
  Status: DetailedAlgorithmStatus;
  FailureReason?: string;
}
export type AlgorithmStatusItemList = Array<AlgorithmStatusItem>;
export interface AlgorithmSummary {
  AlgorithmName: string;
  AlgorithmArn: string;
  AlgorithmDescription?: string;
  CreationTime: Date | string;
  AlgorithmStatus: AlgorithmStatus;
}
export type AlgorithmSummaryList = Array<AlgorithmSummary>;
export interface AlgorithmValidationProfile {
  ProfileName: string;
  TrainingJobDefinition: TrainingJobDefinition;
  TransformJobDefinition?: TransformJobDefinition;
}
export type AlgorithmValidationProfiles = Array<AlgorithmValidationProfile>;
export interface AlgorithmValidationSpecification {
  ValidationRole: string;
  ValidationProfiles: Array<AlgorithmValidationProfile>;
}
export interface AmazonQSettings {
  Status?: FeatureStatus;
  QProfileArn?: string;
}
export interface AnnotationConsolidationConfig {
  AnnotationConsolidationLambdaArn: string;
}
export type AppArn = string;

export interface AppDetails {
  DomainId?: string;
  UserProfileName?: string;
  SpaceName?: string;
  AppType?: AppType;
  AppName?: string;
  Status?: AppStatus;
  CreationTime?: Date | string;
  ResourceSpec?: ResourceSpec;
}
export type AppImageConfigArn = string;

export interface AppImageConfigDetails {
  AppImageConfigArn?: string;
  AppImageConfigName?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
  JupyterLabAppImageConfig?: JupyterLabAppImageConfig;
  CodeEditorAppImageConfig?: CodeEditorAppImageConfig;
}
export type AppImageConfigList = Array<AppImageConfigDetails>;
export type AppImageConfigName = string;

export type AppImageConfigSortKey = "CreationTime" | "LastModifiedTime" | "Name";
export type AppInstanceType = "SYSTEM" | "ML_T3_MICRO" | "ML_T3_SMALL" | "ML_T3_MEDIUM" | "ML_T3_LARGE" | "ML_T3_XLARGE" | "ML_T3_2XLARGE" | "ML_M5_LARGE" | "ML_M5_XLARGE" | "ML_M5_2XLARGE" | "ML_M5_4XLARGE" | "ML_M5_8XLARGE" | "ML_M5_12XLARGE" | "ML_M5_16XLARGE" | "ML_M5_24XLARGE" | "ML_M5D_LARGE" | "ML_M5D_XLARGE" | "ML_M5D_2XLARGE" | "ML_M5D_4XLARGE" | "ML_M5D_8XLARGE" | "ML_M5D_12XLARGE" | "ML_M5D_16XLARGE" | "ML_M5D_24XLARGE" | "ML_C5_LARGE" | "ML_C5_XLARGE" | "ML_C5_2XLARGE" | "ML_C5_4XLARGE" | "ML_C5_9XLARGE" | "ML_C5_12XLARGE" | "ML_C5_18XLARGE" | "ML_C5_24XLARGE" | "ML_P3_2XLARGE" | "ML_P3_8XLARGE" | "ML_P3_16XLARGE" | "ML_P3DN_24XLARGE" | "ML_G4DN_XLARGE" | "ML_G4DN_2XLARGE" | "ML_G4DN_4XLARGE" | "ML_G4DN_8XLARGE" | "ML_G4DN_12XLARGE" | "ML_G4DN_16XLARGE" | "ML_R5_LARGE" | "ML_R5_XLARGE" | "ML_R5_2XLARGE" | "ML_R5_4XLARGE" | "ML_R5_8XLARGE" | "ML_R5_12XLARGE" | "ML_R5_16XLARGE" | "ML_R5_24XLARGE" | "ML_G5_XLARGE" | "ML_G5_2XLARGE" | "ML_G5_4XLARGE" | "ML_G5_8XLARGE" | "ML_G5_16XLARGE" | "ML_G5_12XLARGE" | "ML_G5_24XLARGE" | "ML_G5_48XLARGE" | "ML_G6_XLARGE" | "ML_G6_2XLARGE" | "ML_G6_4XLARGE" | "ML_G6_8XLARGE" | "ML_G6_12XLARGE" | "ML_G6_16XLARGE" | "ML_G6_24XLARGE" | "ML_G6_48XLARGE" | "ML_G6E_XLARGE" | "ML_G6E_2XLARGE" | "ML_G6E_4XLARGE" | "ML_G6E_8XLARGE" | "ML_G6E_12XLARGE" | "ML_G6E_16XLARGE" | "ML_G6E_24XLARGE" | "ML_G6E_48XLARGE" | "ML_GEOSPATIAL_INTERACTIVE" | "ML_P4D_24XLARGE" | "ML_P4DE_24XLARGE" | "ML_TRN1_2XLARGE" | "ML_TRN1_32XLARGE" | "ML_TRN1N_32XLARGE" | "ML_P5_48XLARGE" | "ML_P5EN_48XLARGE" | "ML_M6I_LARGE" | "ML_M6I_XLARGE" | "ML_M6I_2XLARGE" | "ML_M6I_4XLARGE" | "ML_M6I_8XLARGE" | "ML_M6I_12XLARGE" | "ML_M6I_16XLARGE" | "ML_M6I_24XLARGE" | "ML_M6I_32XLARGE" | "ML_M7I_LARGE" | "ML_M7I_XLARGE" | "ML_M7I_2XLARGE" | "ML_M7I_4XLARGE" | "ML_M7I_8XLARGE" | "ML_M7I_12XLARGE" | "ML_M7I_16XLARGE" | "ML_M7I_24XLARGE" | "ML_M7I_48XLARGE" | "ML_C6I_LARGE" | "ML_C6I_XLARGE" | "ML_C6I_2XLARGE" | "ML_C6I_4XLARGE" | "ML_C6I_8XLARGE" | "ML_C6I_12XLARGE" | "ML_C6I_16XLARGE" | "ML_C6I_24XLARGE" | "ML_C6I_32XLARGE" | "ML_C7I_LARGE" | "ML_C7I_XLARGE" | "ML_C7I_2XLARGE" | "ML_C7I_4XLARGE" | "ML_C7I_8XLARGE" | "ML_C7I_12XLARGE" | "ML_C7I_16XLARGE" | "ML_C7I_24XLARGE" | "ML_C7I_48XLARGE" | "ML_R6I_LARGE" | "ML_R6I_XLARGE" | "ML_R6I_2XLARGE" | "ML_R6I_4XLARGE" | "ML_R6I_8XLARGE" | "ML_R6I_12XLARGE" | "ML_R6I_16XLARGE" | "ML_R6I_24XLARGE" | "ML_R6I_32XLARGE" | "ML_R7I_LARGE" | "ML_R7I_XLARGE" | "ML_R7I_2XLARGE" | "ML_R7I_4XLARGE" | "ML_R7I_8XLARGE" | "ML_R7I_12XLARGE" | "ML_R7I_16XLARGE" | "ML_R7I_24XLARGE" | "ML_R7I_48XLARGE" | "ML_M6ID_LARGE" | "ML_M6ID_XLARGE" | "ML_M6ID_2XLARGE" | "ML_M6ID_4XLARGE" | "ML_M6ID_8XLARGE" | "ML_M6ID_12XLARGE" | "ML_M6ID_16XLARGE" | "ML_M6ID_24XLARGE" | "ML_M6ID_32XLARGE" | "ML_C6ID_LARGE" | "ML_C6ID_XLARGE" | "ML_C6ID_2XLARGE" | "ML_C6ID_4XLARGE" | "ML_C6ID_8XLARGE" | "ML_C6ID_12XLARGE" | "ML_C6ID_16XLARGE" | "ML_C6ID_24XLARGE" | "ML_C6ID_32XLARGE" | "ML_R6ID_LARGE" | "ML_R6ID_XLARGE" | "ML_R6ID_2XLARGE" | "ML_R6ID_4XLARGE" | "ML_R6ID_8XLARGE" | "ML_R6ID_12XLARGE" | "ML_R6ID_16XLARGE" | "ML_R6ID_24XLARGE" | "ML_R6ID_32XLARGE";
export interface AppLifecycleManagement {
  IdleSettings?: IdleSettings;
}
export type AppList = Array<AppDetails>;
export type AppManaged = boolean;

export type AppName = string;

export type AppNetworkAccessType = "PublicInternetOnly" | "VpcOnly";
export type ApprovalDescription = string;

export type AppSecurityGroupManagement = "Service" | "Customer";
export type AppSortKey = "CreationTime";
export interface AppSpecification {
  ImageUri: string;
  ContainerEntrypoint?: Array<string>;
  ContainerArguments?: Array<string>;
}
export type AppStatus = "Deleted" | "Deleting" | "Failed" | "InService" | "Pending";
export type AppType = "JupyterServer" | "KernelGateway" | "DetailedProfiler" | "TensorBoard" | "CodeEditor" | "JupyterLab" | "RStudioServerPro" | "RSessionGateway" | "Canvas";
export type ArnOrName = string;

export type ArtifactArn = string;

export type ArtifactDigest = string;

export type ArtifactProperties = Record<string, string>;
export type ArtifactPropertyValue = string;

export interface ArtifactSource {
  SourceUri: string;
  SourceTypes?: Array<ArtifactSourceType>;
}
export type ArtifactSourceIdType = "MD5_HASH" | "S3_ETAG" | "S3_VERSION" | "CUSTOM";
export interface ArtifactSourceType {
  SourceIdType: ArtifactSourceIdType;
  Value: string;
}
export type ArtifactSourceTypes = Array<ArtifactSourceType>;
export type ArtifactSummaries = Array<ArtifactSummary>;
export interface ArtifactSummary {
  ArtifactArn?: string;
  ArtifactName?: string;
  Source?: ArtifactSource;
  ArtifactType?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type AssemblyType = "NONE" | "LINE";
export interface AssociateTrialComponentRequest {
  TrialComponentName: string;
  TrialName: string;
}
export interface AssociateTrialComponentResponse {
  TrialComponentArn?: string;
  TrialArn?: string;
}
export type AssociationEdgeType = "CONTRIBUTED_TO" | "ASSOCIATED_WITH" | "DERIVED_FROM" | "PRODUCED" | "SAME_AS";
export type AssociationEntityArn = string;

export type AssociationSummaries = Array<AssociationSummary>;
export interface AssociationSummary {
  SourceArn?: string;
  DestinationArn?: string;
  SourceType?: string;
  DestinationType?: string;
  AssociationType?: AssociationEdgeType;
  SourceName?: string;
  DestinationName?: string;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
}
export type AssumableRoleArns = Array<string>;
export interface AsyncInferenceClientConfig {
  MaxConcurrentInvocationsPerInstance?: number;
}
export interface AsyncInferenceConfig {
  ClientConfig?: AsyncInferenceClientConfig;
  OutputConfig: AsyncInferenceOutputConfig;
}
export interface AsyncInferenceNotificationConfig {
  SuccessTopic?: string;
  ErrorTopic?: string;
  IncludeInferenceResponseIn?: Array<AsyncNotificationTopicTypes>;
}
export interface AsyncInferenceOutputConfig {
  KmsKeyId?: string;
  S3OutputPath?: string;
  NotificationConfig?: AsyncInferenceNotificationConfig;
  S3FailurePath?: string;
}
export type AsyncNotificationTopicTypeList = Array<AsyncNotificationTopicTypes>;
export type AsyncNotificationTopicTypes = "SUCCESS_NOTIFICATION_TOPIC" | "ERROR_NOTIFICATION_TOPIC";
export type AthenaCatalog = string;

export type AthenaDatabase = string;

export interface AthenaDatasetDefinition {
  Catalog: string;
  Database: string;
  QueryString: string;
  WorkGroup?: string;
  OutputS3Uri: string;
  KmsKeyId?: string;
  OutputFormat: AthenaResultFormat;
  OutputCompression?: AthenaResultCompressionType;
}
export type AthenaQueryString = string;

export type AthenaResultCompressionType = "GZIP" | "SNAPPY" | "ZLIB";
export type AthenaResultFormat = "PARQUET" | "ORC" | "AVRO" | "JSON" | "TEXTFILE";
export type AthenaWorkGroup = string;

export type AttributeName = string;

export type AttributeNames = Array<string>;
export type AuthenticationRequestExtraParams = Record<string, string>;
export type AuthenticationRequestExtraParamsKey = string;

export type AuthenticationRequestExtraParamsValue = string;

export type AuthMode = "SSO" | "IAM";
export interface AuthorizedUrl {
  Url?: string;
  LocalPath?: string;
}
export type AuthorizedUrlConfigs = Array<AuthorizedUrl>;
export type AutoGenerateEndpointName = boolean;

export type AutoMLAlgorithm = "XGBOOST" | "LINEAR_LEARNER" | "MLP" | "LIGHTGBM" | "CATBOOST" | "RANDOMFOREST" | "EXTRA_TREES" | "NN_TORCH" | "FASTAI" | "CNN_QR" | "DEEPAR" | "PROPHET" | "NPTS" | "ARIMA" | "ETS";
export interface AutoMLAlgorithmConfig {
  AutoMLAlgorithms: Array<AutoMLAlgorithm>;
}
export type AutoMLAlgorithms = Array<AutoMLAlgorithm>;
export type AutoMLAlgorithmsConfig = Array<AutoMLAlgorithmConfig>;
export interface AutoMLCandidate {
  CandidateName: string;
  FinalAutoMLJobObjectiveMetric?: FinalAutoMLJobObjectiveMetric;
  ObjectiveStatus: ObjectiveStatus;
  CandidateSteps: Array<AutoMLCandidateStep>;
  CandidateStatus: CandidateStatus;
  InferenceContainers?: Array<AutoMLContainerDefinition>;
  CreationTime: Date | string;
  EndTime?: Date | string;
  LastModifiedTime: Date | string;
  FailureReason?: string;
  CandidateProperties?: CandidateProperties;
  InferenceContainerDefinitions?: Record<AutoMLProcessingUnit, Array<AutoMLContainerDefinition>>;
}
export interface AutoMLCandidateGenerationConfig {
  FeatureSpecificationS3Uri?: string;
  AlgorithmsConfig?: Array<AutoMLAlgorithmConfig>;
}
export type AutoMLCandidates = Array<AutoMLCandidate>;
export interface AutoMLCandidateStep {
  CandidateStepType: CandidateStepType;
  CandidateStepArn: string;
  CandidateStepName: string;
}
export interface AutoMLChannel {
  DataSource?: AutoMLDataSource;
  CompressionType?: CompressionType;
  TargetAttributeName: string;
  ContentType?: string;
  ChannelType?: AutoMLChannelType;
  SampleWeightAttributeName?: string;
}
export type AutoMLChannelType = "TRAINING" | "VALIDATION";
export interface AutoMLComputeConfig {
  EmrServerlessComputeConfig?: EmrServerlessComputeConfig;
}
export interface AutoMLContainerDefinition {
  Image: string;
  ModelDataUrl: string;
  Environment?: Record<string, string>;
}
export type AutoMLContainerDefinitions = Array<AutoMLContainerDefinition>;
export interface AutoMLDataSource {
  S3DataSource: AutoMLS3DataSource;
}
export interface AutoMLDataSplitConfig {
  ValidationFraction?: number;
}
export type AutoMLFailureReason = string;

export type AutoMLInferenceContainerDefinitions = Record<AutoMLProcessingUnit, Array<AutoMLContainerDefinition>>;
export type AutoMLInputDataConfig = Array<AutoMLChannel>;
export type AutoMLJobArn = string;

export interface AutoMLJobArtifacts {
  CandidateDefinitionNotebookLocation?: string;
  DataExplorationNotebookLocation?: string;
}
export interface AutoMLJobChannel {
  ChannelType?: AutoMLChannelType;
  ContentType?: string;
  CompressionType?: CompressionType;
  DataSource?: AutoMLDataSource;
}
export interface AutoMLJobCompletionCriteria {
  MaxCandidates?: number;
  MaxRuntimePerTrainingJobInSeconds?: number;
  MaxAutoMLJobRuntimeInSeconds?: number;
}
export interface AutoMLJobConfig {
  CompletionCriteria?: AutoMLJobCompletionCriteria;
  SecurityConfig?: AutoMLSecurityConfig;
  CandidateGenerationConfig?: AutoMLCandidateGenerationConfig;
  DataSplitConfig?: AutoMLDataSplitConfig;
  Mode?: AutoMLMode;
}
export type AutoMLJobInputDataConfig = Array<AutoMLJobChannel>;
export type AutoMLJobName = string;

export interface AutoMLJobObjective {
  MetricName: AutoMLMetricEnum;
}
export type AutoMLJobObjectiveType = "MAXIMIZE" | "MINIMIZE";
export type AutoMLJobSecondaryStatus = "STARTING" | "MAX_CANDIDATES_REACHED" | "FAILED" | "STOPPED" | "MAX_AUTO_ML_JOB_RUNTIME_REACHED" | "STOPPING" | "CANDIDATE_DEFINITIONS_GENERATED" | "COMPLETED" | "EXPLAINABILITY_ERROR" | "DEPLOYING_MODEL" | "MODEL_DEPLOYMENT_ERROR" | "GENERATING_MODEL_INSIGHTS_REPORT" | "MODEL_INSIGHTS_ERROR" | "ANALYZING_DATA" | "FEATURE_ENGINEERING" | "MODEL_TUNING" | "GENERATING_EXPLAINABILITY_REPORT" | "TRAINING_MODELS" | "PRE_TRAINING";
export type AutoMLJobStatus = "COMPLETED" | "IN_PROGRESS" | "FAILED" | "STOPPED" | "STOPPING";
export interface AutoMLJobStepMetadata {
  Arn?: string;
}
export type AutoMLJobSummaries = Array<AutoMLJobSummary>;
export interface AutoMLJobSummary {
  AutoMLJobName: string;
  AutoMLJobArn: string;
  AutoMLJobStatus: AutoMLJobStatus;
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus;
  CreationTime: Date | string;
  EndTime?: Date | string;
  LastModifiedTime: Date | string;
  FailureReason?: string;
  PartialFailureReasons?: Array<AutoMLPartialFailureReason>;
}
export type AutoMLMaxResults = number;

export type AutoMLMaxResultsForTrials = number;

export type AutoMLMetricEnum = "ACCURACY" | "MSE" | "F1" | "F1_MACRO" | "AUC" | "RMSE" | "BALANCED_ACCURACY" | "R2" | "RECALL" | "RECALL_MACRO" | "PRECISION" | "PRECISION_MACRO" | "MAE" | "MAPE" | "MASE" | "WAPE" | "AVERAGE_WEIGHTED_QUANTILE_LOSS";
export type AutoMLMetricExtendedEnum = "ACCURACY" | "MSE" | "F1" | "F1_MACRO" | "AUC" | "RMSE" | "MAE" | "R2" | "BALANCED_ACCURACY" | "PRECISION" | "PRECISION_MACRO" | "RECALL" | "RECALL_MACRO" | "LogLoss" | "INFERENCE_LATENCY" | "MAPE" | "MASE" | "WAPE" | "AVERAGE_WEIGHTED_QUANTILE_LOSS" | "ROUGE1" | "ROUGE2" | "ROUGEL" | "ROUGEL_SUM" | "PERPLEXITY" | "VALIDATION_LOSS" | "TRAINING_LOSS";
export type AutoMLMode = "AUTO" | "ENSEMBLING" | "HYPERPARAMETER_TUNING";
export type AutoMLNameContains = string;

export interface AutoMLOutputDataConfig {
  KmsKeyId?: string;
  S3OutputPath: string;
}
export interface AutoMLPartialFailureReason {
  PartialFailureMessage?: string;
}
export type AutoMLPartialFailureReasons = Array<AutoMLPartialFailureReason>;
export type AutoMLProblemTypeConfig = { ImageClassificationJobConfig: ImageClassificationJobConfig } | { TextClassificationJobConfig: TextClassificationJobConfig } | { TimeSeriesForecastingJobConfig: TimeSeriesForecastingJobConfig } | { TabularJobConfig: TabularJobConfig } | { TextGenerationJobConfig: TextGenerationJobConfig };
export type AutoMLProblemTypeConfigName = "IMAGE_CLASSIFICATION" | "TEXT_CLASSIFICATION" | "TIMESERIES_FORECASTING" | "TABULAR" | "TEXT_GENERATION";
export type AutoMLProblemTypeResolvedAttributes = { TabularResolvedAttributes: TabularResolvedAttributes } | { TextGenerationResolvedAttributes: TextGenerationResolvedAttributes };
export type AutoMLProcessingUnit = "CPU" | "GPU";
export interface AutoMLResolvedAttributes {
  AutoMLJobObjective?: AutoMLJobObjective;
  CompletionCriteria?: AutoMLJobCompletionCriteria;
  AutoMLProblemTypeResolvedAttributes?: AutoMLProblemTypeResolvedAttributes;
}
export interface AutoMLS3DataSource {
  S3DataType: AutoMLS3DataType;
  S3Uri: string;
}
export type AutoMLS3DataType = "MANIFEST_FILE" | "S3_PREFIX" | "AUGMENTED_MANIFEST_FILE";
export interface AutoMLSecurityConfig {
  VolumeKmsKeyId?: string;
  EnableInterContainerTrafficEncryption?: boolean;
  VpcConfig?: VpcConfig;
}
export type AutoMLSortBy = "NAME" | "CREATION_TIME" | "STATUS";
export type AutoMLSortOrder = "ASCENDING" | "DESCENDING";
export type AutoMountHomeEFS = "ENABLED" | "DISABLED" | "DEFAULT_AS_DOMAIN";
export interface AutoParameter {
  Name: string;
  ValueHint: string;
}
export type AutoParameters = Array<AutoParameter>;
export type AutoRollbackAlarms = Array<AlarmDetails>;
export interface AutoRollbackConfig {
  Alarms?: Array<Alarm>;
}
export interface Autotune {
  Mode: AutotuneMode;
}
export type AutotuneMode = "ENABLED";
export type AvailabilityZone = string;

export type AvailableInstanceCount = number;

export type AwsManagedHumanLoopRequestSource = "REKOGNITION_DETECT_MODERATION_LABELS_IMAGE_V3" | "TEXTRACT_ANALYZE_DOCUMENT_FORMS_V1";
export type BacktestResultsLocation = string;

export type BaseModelName = string;

export interface BatchDataCaptureConfig {
  DestinationS3Uri: string;
  KmsKeyId?: string;
  GenerateInferenceId?: boolean;
}
export interface BatchDeleteClusterNodesError {
  Code: BatchDeleteClusterNodesErrorCode;
  Message: string;
  NodeId: string;
}
export type BatchDeleteClusterNodesErrorCode = "NODE_ID_NOT_FOUND" | "INVALID_NODE_STATUS" | "NODE_ID_IN_USE";
export type BatchDeleteClusterNodesErrorList = Array<BatchDeleteClusterNodesError>;
export interface BatchDeleteClusterNodesRequest {
  ClusterName: string;
  NodeIds: Array<string>;
}
export interface BatchDeleteClusterNodesResponse {
  Failed?: Array<BatchDeleteClusterNodesError>;
  Successful?: Array<string>;
}
export interface BatchDescribeModelPackageError {
  ErrorCode: string;
  ErrorResponse: string;
}
export type BatchDescribeModelPackageErrorMap = Record<string, BatchDescribeModelPackageError>;
export interface BatchDescribeModelPackageInput {
  ModelPackageArnList: Array<string>;
}
export interface BatchDescribeModelPackageOutput {
  ModelPackageSummaries?: Record<string, BatchDescribeModelPackageSummary>;
  BatchDescribeModelPackageErrorMap?: Record<string, BatchDescribeModelPackageError>;
}
export interface BatchDescribeModelPackageSummary {
  ModelPackageGroupName: string;
  ModelPackageVersion?: number;
  ModelPackageArn: string;
  ModelPackageDescription?: string;
  CreationTime: Date | string;
  InferenceSpecification: InferenceSpecification;
  ModelPackageStatus: ModelPackageStatus;
  ModelApprovalStatus?: ModelApprovalStatus;
}
export type BatchStrategy = "MULTI_RECORD" | "SINGLE_RECORD";
export interface BatchTransformInput {
  DataCapturedDestinationS3Uri: string;
  DatasetFormat: MonitoringDatasetFormat;
  LocalPath: string;
  S3InputMode?: ProcessingS3InputMode;
  S3DataDistributionType?: ProcessingS3DataDistributionType;
  FeaturesAttribute?: string;
  InferenceAttribute?: string;
  ProbabilityAttribute?: string;
  ProbabilityThresholdAttribute?: number;
  StartTimeOffset?: string;
  EndTimeOffset?: string;
  ExcludeFeaturesAttribute?: string;
}
export interface BestObjectiveNotImproving {
  MaxNumberOfTrainingJobsNotImproving?: number;
}
export interface Bias {
  Report?: MetricsSource;
  PreTrainingReport?: MetricsSource;
  PostTrainingReport?: MetricsSource;
}
export type BillableTimeInSeconds = number;

export type BlockedReason = string;

export interface BlueGreenUpdatePolicy {
  TrafficRoutingConfiguration: TrafficRoutingConfig;
  TerminationWaitInSeconds?: number;
  MaximumExecutionTimeoutInSeconds?: number;
}
export type BooleanOperator = "AND" | "OR";
export type BorrowLimit = number;

export type Branch = string;

export type BucketName = string;

export interface CacheHitResult {
  SourcePipelineExecutionArn?: string;
}
export interface CallbackStepMetadata {
  CallbackToken?: string;
  SqsQueueUrl?: string;
  OutputParameters?: Array<OutputParameter>;
}
export type CallbackToken = string;

export interface CandidateArtifactLocations {
  Explainability: string;
  ModelInsights?: string;
  BacktestResults?: string;
}
export type CandidateDefinitionNotebookLocation = string;

export interface CandidateGenerationConfig {
  AlgorithmsConfig?: Array<AutoMLAlgorithmConfig>;
}
export type CandidateName = string;

export interface CandidateProperties {
  CandidateArtifactLocations?: CandidateArtifactLocations;
  CandidateMetrics?: Array<MetricDatum>;
}
export type CandidateSortBy = "CreationTime" | "Status" | "FinalObjectiveMetricValue";
export type CandidateStatus = "COMPLETED" | "IN_PROGRESS" | "FAILED" | "STOPPED" | "STOPPING";
export type CandidateStepArn = string;

export type CandidateStepName = string;

export type CandidateSteps = Array<AutoMLCandidateStep>;
export type CandidateStepType = "TRAINING" | "TRANSFORM" | "PROCESSING";
export interface CanvasAppSettings {
  TimeSeriesForecastingSettings?: TimeSeriesForecastingSettings;
  ModelRegisterSettings?: ModelRegisterSettings;
  WorkspaceSettings?: WorkspaceSettings;
  IdentityProviderOAuthSettings?: Array<IdentityProviderOAuthSetting>;
  DirectDeploySettings?: DirectDeploySettings;
  KendraSettings?: KendraSettings;
  GenerativeAiSettings?: GenerativeAiSettings;
  EmrServerlessSettings?: EmrServerlessSettings;
}
export type CapacityReservationPreference = "CAPACITY_RESERVATIONS_ONLY";
export interface CapacitySize {
  Type: CapacitySizeType;
  Value: number;
}
export interface CapacitySizeConfig {
  Type: NodeUnavailabilityType;
  Value: number;
}
export type CapacitySizeType = "INSTANCE_COUNT" | "CAPACITY_PERCENT";
export type CapacitySizeValue = number;

export type CapacityUnit = number;

export interface CaptureContentTypeHeader {
  CsvContentTypes?: Array<string>;
  JsonContentTypes?: Array<string>;
}
export type CaptureMode = "INPUT" | "OUTPUT" | "INPUT_AND_OUTPUT";
export interface CaptureOption {
  CaptureMode: CaptureMode;
}
export type CaptureOptionList = Array<CaptureOption>;
export type CaptureStatus = "STARTED" | "STOPPED";
export type Catalog = string;

export interface CategoricalParameter {
  Name: string;
  Value: Array<string>;
}
export interface CategoricalParameterRange {
  Name: string;
  Values: Array<string>;
}
export type CategoricalParameterRanges = Array<CategoricalParameterRange>;
export interface CategoricalParameterRangeSpecification {
  Values: Array<string>;
}
export type CategoricalParameterRangeValues = Array<string>;
export type CategoricalParameters = Array<CategoricalParameter>;
export type Cents = number;

export type CertifyForMarketplace = boolean;

export interface CfnCreateTemplateProvider {
  TemplateName: string;
  TemplateURL: string;
  RoleARN?: string;
  Parameters?: Array<CfnStackCreateParameter>;
}
export interface CfnStackCreateParameter {
  Key: string;
  Value?: string;
}
export type CfnStackCreateParameters = Array<CfnStackCreateParameter>;
export interface CfnStackDetail {
  Name?: string;
  Id?: string;
  StatusMessage: string;
}
export type CfnStackId = string;

export type CfnStackName = string;

export interface CfnStackParameter {
  Key: string;
  Value?: string;
}
export type CfnStackParameterKey = string;

export type CfnStackParameters = Array<CfnStackParameter>;
export type CfnStackParameterValue = string;

export type CfnStackStatusMessage = string;

export interface CfnStackUpdateParameter {
  Key: string;
  Value?: string;
}
export type CfnStackUpdateParameters = Array<CfnStackUpdateParameter>;
export type CfnTemplateName = string;

export interface CfnTemplateProviderDetail {
  TemplateName: string;
  TemplateURL: string;
  RoleARN?: string;
  Parameters?: Array<CfnStackParameter>;
  StackDetail?: CfnStackDetail;
}
export type CfnTemplateURL = string;

export interface CfnUpdateTemplateProvider {
  TemplateName: string;
  TemplateURL: string;
  Parameters?: Array<CfnStackUpdateParameter>;
}
export interface Channel {
  ChannelName: string;
  DataSource: DataSource;
  ContentType?: string;
  CompressionType?: CompressionType;
  RecordWrapperType?: RecordWrapper;
  InputMode?: TrainingInputMode;
  ShuffleConfig?: ShuffleConfig;
}
export type ChannelName = string;

export interface ChannelSpecification {
  Name: string;
  Description?: string;
  IsRequired?: boolean;
  SupportedContentTypes: Array<string>;
  SupportedCompressionTypes?: Array<CompressionType>;
  SupportedInputModes: Array<TrainingInputMode>;
}
export type ChannelSpecifications = Array<ChannelSpecification>;
export interface CheckpointConfig {
  S3Uri: string;
  LocalPath?: string;
}
export type Cidr = string;

export type Cidrs = Array<string>;
export interface ClarifyCheckStepMetadata {
  CheckType?: string;
  BaselineUsedForDriftCheckConstraints?: string;
  CalculatedBaselineConstraints?: string;
  ModelPackageGroupName?: string;
  ViolationReport?: string;
  CheckJobArn?: string;
  SkipCheck?: boolean;
  RegisterNewBaseline?: boolean;
}
export type ClarifyContentTemplate = string;

export type ClarifyEnableExplanations = string;

export interface ClarifyExplainerConfig {
  EnableExplanations?: string;
  InferenceConfig?: ClarifyInferenceConfig;
  ShapConfig: ClarifyShapConfig;
}
export type ClarifyFeatureHeaders = Array<string>;
export type ClarifyFeaturesAttribute = string;

export type ClarifyFeatureType = "NUMERICAL" | "CATEGORICAL" | "TEXT";
export type ClarifyFeatureTypes = Array<ClarifyFeatureType>;
export type ClarifyHeader = string;

export interface ClarifyInferenceConfig {
  FeaturesAttribute?: string;
  ContentTemplate?: string;
  MaxRecordCount?: number;
  MaxPayloadInMB?: number;
  ProbabilityIndex?: number;
  LabelIndex?: number;
  ProbabilityAttribute?: string;
  LabelAttribute?: string;
  LabelHeaders?: Array<string>;
  FeatureHeaders?: Array<string>;
  FeatureTypes?: Array<ClarifyFeatureType>;
}
export type ClarifyLabelAttribute = string;

export type ClarifyLabelHeaders = Array<string>;
export type ClarifyLabelIndex = number;

export type ClarifyMaxPayloadInMB = number;

export type ClarifyMaxRecordCount = number;

export type ClarifyMimeType = string;

export type ClarifyProbabilityAttribute = string;

export type ClarifyProbabilityIndex = number;

export type ClarifyShapBaseline = string;

export interface ClarifyShapBaselineConfig {
  MimeType?: string;
  ShapBaseline?: string;
  ShapBaselineUri?: string;
}
export interface ClarifyShapConfig {
  ShapBaselineConfig: ClarifyShapBaselineConfig;
  NumberOfSamples?: number;
  UseLogit?: boolean;
  Seed?: number;
  TextConfig?: ClarifyTextConfig;
}
export type ClarifyShapNumberOfSamples = number;

export type ClarifyShapSeed = number;

export type ClarifyShapUseLogit = boolean;

export interface ClarifyTextConfig {
  Language: ClarifyTextLanguage;
  Granularity: ClarifyTextGranularity;
}
export type ClarifyTextGranularity = "TOKEN" | "SENTENCE" | "PARAGRAPH";
export type ClarifyTextLanguage = "AFRIKAANS" | "ALBANIAN" | "ARABIC" | "ARMENIAN" | "BASQUE" | "BENGALI" | "BULGARIAN" | "CATALAN" | "CHINESE" | "CROATIAN" | "CZECH" | "DANISH" | "DUTCH" | "ENGLISH" | "ESTONIAN" | "FINNISH" | "FRENCH" | "GERMAN" | "GREEK" | "GUJARATI" | "HEBREW" | "HINDI" | "HUNGARIAN" | "ICELANDIC" | "INDONESIAN" | "IRISH" | "ITALIAN" | "KANNADA" | "KYRGYZ" | "LATVIAN" | "LITHUANIAN" | "LUXEMBOURGISH" | "MACEDONIAN" | "MALAYALAM" | "MARATHI" | "NEPALI" | "NORWEGIAN_BOKMAL" | "PERSIAN" | "POLISH" | "PORTUGUESE" | "ROMANIAN" | "RUSSIAN" | "SANSKRIT" | "SERBIAN" | "SETSWANA" | "SINHALA" | "SLOVAK" | "SLOVENIAN" | "SPANISH" | "SWEDISH" | "TAGALOG" | "TAMIL" | "TATAR" | "TELUGU" | "TURKISH" | "UKRAINIAN" | "URDU" | "YORUBA" | "LIGURIAN" | "MULTI_LANGUAGE";
export type ClientId = string;

export type ClientSecret = string;

export type ClientToken = string;

export type ClusterArn = string;

export type ClusterAvailabilityZone = string;

export type ClusterAvailabilityZoneId = string;

export interface ClusterEbsVolumeConfig {
  VolumeSizeInGB: number;
}
export type ClusterEbsVolumeSizeInGB = number;

export type ClusterInstanceCount = number;

export interface ClusterInstanceGroupDetails {
  CurrentCount?: number;
  TargetCount?: number;
  InstanceGroupName?: string;
  InstanceType?: ClusterInstanceType;
  LifeCycleConfig?: ClusterLifeCycleConfig;
  ExecutionRole?: string;
  ThreadsPerCore?: number;
  InstanceStorageConfigs?: Array<ClusterInstanceStorageConfig>;
  OnStartDeepHealthChecks?: Array<DeepHealthCheckType>;
  Status?: InstanceGroupStatus;
  TrainingPlanArn?: string;
  TrainingPlanStatus?: string;
  OverrideVpcConfig?: VpcConfig;
  ScheduledUpdateConfig?: ScheduledUpdateConfig;
}
export type ClusterInstanceGroupDetailsList = Array<ClusterInstanceGroupDetails>;
export type ClusterInstanceGroupName = string;

export interface ClusterInstanceGroupSpecification {
  InstanceCount: number;
  InstanceGroupName: string;
  InstanceType: ClusterInstanceType;
  LifeCycleConfig: ClusterLifeCycleConfig;
  ExecutionRole: string;
  ThreadsPerCore?: number;
  InstanceStorageConfigs?: Array<ClusterInstanceStorageConfig>;
  OnStartDeepHealthChecks?: Array<DeepHealthCheckType>;
  TrainingPlanArn?: string;
  OverrideVpcConfig?: VpcConfig;
  ScheduledUpdateConfig?: ScheduledUpdateConfig;
}
export type ClusterInstanceGroupSpecifications = Array<ClusterInstanceGroupSpecification>;
export type ClusterInstanceGroupsToDelete = Array<string>;
export interface ClusterInstancePlacement {
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
}
export type ClusterInstanceStatus = "RUNNING" | "FAILURE" | "PENDING" | "SHUTTING_DOWN" | "SYSTEM_UPDATING" | "DEEP_HEALTH_CHECK_IN_PROGRESS";
export interface ClusterInstanceStatusDetails {
  Status: ClusterInstanceStatus;
  Message?: string;
}
export type ClusterInstanceStorageConfig = { EbsVolumeConfig: ClusterEbsVolumeConfig };
export type ClusterInstanceStorageConfigs = Array<ClusterInstanceStorageConfig>;
export type ClusterInstanceType = "ML_P4D_24XLARGE" | "ML_P4DE_24XLARGE" | "ML_P5_48XLARGE" | "ML_TRN1_32XLARGE" | "ML_TRN1N_32XLARGE" | "ML_G5_XLARGE" | "ML_G5_2XLARGE" | "ML_G5_4XLARGE" | "ML_G5_8XLARGE" | "ML_G5_12XLARGE" | "ML_G5_16XLARGE" | "ML_G5_24XLARGE" | "ML_G5_48XLARGE" | "ML_C5_LARGE" | "ML_C5_XLARGE" | "ML_C5_2XLARGE" | "ML_C5_4XLARGE" | "ML_C5_9XLARGE" | "ML_C5_12XLARGE" | "ML_C5_18XLARGE" | "ML_C5_24XLARGE" | "ML_C5N_LARGE" | "ML_C5N_2XLARGE" | "ML_C5N_4XLARGE" | "ML_C5N_9XLARGE" | "ML_C5N_18XLARGE" | "ML_M5_LARGE" | "ML_M5_XLARGE" | "ML_M5_2XLARGE" | "ML_M5_4XLARGE" | "ML_M5_8XLARGE" | "ML_M5_12XLARGE" | "ML_M5_16XLARGE" | "ML_M5_24XLARGE" | "ML_T3_MEDIUM" | "ML_T3_LARGE" | "ML_T3_XLARGE" | "ML_T3_2XLARGE" | "ML_G6_XLARGE" | "ML_G6_2XLARGE" | "ML_G6_4XLARGE" | "ML_G6_8XLARGE" | "ML_G6_16XLARGE" | "ML_G6_12XLARGE" | "ML_G6_24XLARGE" | "ML_G6_48XLARGE" | "ML_GR6_4XLARGE" | "ML_GR6_8XLARGE" | "ML_G6E_XLARGE" | "ML_G6E_2XLARGE" | "ML_G6E_4XLARGE" | "ML_G6E_8XLARGE" | "ML_G6E_16XLARGE" | "ML_G6E_12XLARGE" | "ML_G6E_24XLARGE" | "ML_G6E_48XLARGE" | "ML_P5E_48XLARGE" | "ML_P5EN_48XLARGE" | "ML_P6_B200_48XLARGE" | "ML_TRN2_48XLARGE" | "ML_C6I_LARGE" | "ML_C6I_XLARGE" | "ML_C6I_2XLARGE" | "ML_C6I_4XLARGE" | "ML_C6I_8XLARGE" | "ML_C6I_12XLARGE" | "ML_C6I_16XLARGE" | "ML_C6I_24XLARGE" | "ML_C6I_32XLARGE" | "ML_M6I_LARGE" | "ML_M6I_XLARGE" | "ML_M6I_2XLARGE" | "ML_M6I_4XLARGE" | "ML_M6I_8XLARGE" | "ML_M6I_12XLARGE" | "ML_M6I_16XLARGE" | "ML_M6I_24XLARGE" | "ML_M6I_32XLARGE" | "ML_R6I_LARGE" | "ML_R6I_XLARGE" | "ML_R6I_2XLARGE" | "ML_R6I_4XLARGE" | "ML_R6I_8XLARGE" | "ML_R6I_12XLARGE" | "ML_R6I_16XLARGE" | "ML_R6I_24XLARGE" | "ML_R6I_32XLARGE" | "ML_I3EN_LARGE" | "ML_I3EN_XLARGE" | "ML_I3EN_2XLARGE" | "ML_I3EN_3XLARGE" | "ML_I3EN_6XLARGE" | "ML_I3EN_12XLARGE" | "ML_I3EN_24XLARGE" | "ML_M7I_LARGE" | "ML_M7I_XLARGE" | "ML_M7I_2XLARGE" | "ML_M7I_4XLARGE" | "ML_M7I_8XLARGE" | "ML_M7I_12XLARGE" | "ML_M7I_16XLARGE" | "ML_M7I_24XLARGE" | "ML_M7I_48XLARGE" | "ML_R7I_LARGE" | "ML_R7I_XLARGE" | "ML_R7I_2XLARGE" | "ML_R7I_4XLARGE" | "ML_R7I_8XLARGE" | "ML_R7I_12XLARGE" | "ML_R7I_16XLARGE" | "ML_R7I_24XLARGE" | "ML_R7I_48XLARGE";
export interface ClusterLifeCycleConfig {
  SourceS3Uri: string;
  OnCreate: string;
}
export type ClusterLifeCycleConfigFileName = string;

export type ClusterName = string;

export type ClusterNameOrArn = string;

export interface ClusterNodeDetails {
  InstanceGroupName?: string;
  InstanceId?: string;
  InstanceStatus?: ClusterInstanceStatusDetails;
  InstanceType?: ClusterInstanceType;
  LaunchTime?: Date | string;
  LastSoftwareUpdateTime?: Date | string;
  LifeCycleConfig?: ClusterLifeCycleConfig;
  OverrideVpcConfig?: VpcConfig;
  ThreadsPerCore?: number;
  InstanceStorageConfigs?: Array<ClusterInstanceStorageConfig>;
  PrivatePrimaryIp?: string;
  PrivatePrimaryIpv6?: string;
  PrivateDnsHostname?: string;
  Placement?: ClusterInstancePlacement;
}
export type ClusterNodeId = string;

export type ClusterNodeIds = Array<string>;
export type ClusterNodeRecovery = "AUTOMATIC" | "NONE";
export type ClusterNodeSummaries = Array<ClusterNodeSummary>;
export interface ClusterNodeSummary {
  InstanceGroupName: string;
  InstanceId: string;
  InstanceType: ClusterInstanceType;
  LaunchTime: Date | string;
  LastSoftwareUpdateTime?: Date | string;
  InstanceStatus: ClusterInstanceStatusDetails;
}
export type ClusterNonNegativeInstanceCount = number;

export interface ClusterOrchestrator {
  Eks: ClusterOrchestratorEksConfig;
}
export interface ClusterOrchestratorEksConfig {
  ClusterArn: string;
}
export type ClusterPrivateDnsHostname = string;

export type ClusterPrivatePrimaryIp = string;

export type ClusterPrivatePrimaryIpv6 = string;

export type ClusterSchedulerConfigArn = string;

export type ClusterSchedulerConfigId = string;

export interface ClusterSchedulerConfigSummary {
  ClusterSchedulerConfigArn: string;
  ClusterSchedulerConfigId: string;
  ClusterSchedulerConfigVersion?: number;
  Name: string;
  CreationTime: Date | string;
  LastModifiedTime?: Date | string;
  Status: SchedulerResourceStatus;
  ClusterArn?: string;
}
export type ClusterSchedulerConfigSummaryList = Array<ClusterSchedulerConfigSummary>;
export type ClusterSchedulerPriorityClassName = string;

export type ClusterSortBy = "CREATION_TIME" | "NAME";
export type ClusterStatus = "CREATING" | "DELETING" | "FAILED" | "INSERVICE" | "ROLLINGBACK" | "SYSTEMUPDATING" | "UPDATING";
export type ClusterSummaries = Array<ClusterSummary>;
export interface ClusterSummary {
  ClusterArn: string;
  ClusterName: string;
  CreationTime: Date | string;
  ClusterStatus: ClusterStatus;
  TrainingPlanArns?: Array<string>;
}
export type ClusterThreadsPerCore = number;

export interface CodeEditorAppImageConfig {
  FileSystemConfig?: FileSystemConfig;
  ContainerConfig?: ContainerConfig;
}
export interface CodeEditorAppSettings {
  DefaultResourceSpec?: ResourceSpec;
  CustomImages?: Array<CustomImage>;
  LifecycleConfigArns?: Array<string>;
  AppLifecycleManagement?: AppLifecycleManagement;
  BuiltInLifecycleConfigArn?: string;
}
export type CodeRepositories = Array<CodeRepository>;
export interface CodeRepository {
  RepositoryUrl: string;
}
export type CodeRepositoryArn = string;

export type CodeRepositoryContains = string;

export type CodeRepositoryNameContains = string;

export type CodeRepositoryNameOrUrl = string;

export type CodeRepositorySortBy = "NAME" | "CREATION_TIME" | "LAST_MODIFIED_TIME";
export type CodeRepositorySortOrder = "ASCENDING" | "DESCENDING";
export interface CodeRepositorySummary {
  CodeRepositoryName: string;
  CodeRepositoryArn: string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  GitConfig?: GitConfig;
}
export type CodeRepositorySummaryList = Array<CodeRepositorySummary>;
export interface CognitoConfig {
  UserPool: string;
  ClientId: string;
}
export interface CognitoMemberDefinition {
  UserPool: string;
  UserGroup: string;
  ClientId: string;
}
export type CognitoUserGroup = string;

export type CognitoUserPool = string;

export type CollectionConfig = { VectorConfig: VectorConfig };
export interface CollectionConfiguration {
  CollectionName?: string;
  CollectionParameters?: Record<string, string>;
}
export type CollectionConfigurations = Array<CollectionConfiguration>;
export type CollectionName = string;

export type CollectionParameters = Record<string, string>;
export type CollectionType = "LIST" | "SET" | "VECTOR";
export type CompilationJobArn = string;

export type CompilationJobStatus = "INPROGRESS" | "COMPLETED" | "FAILED" | "STARTING" | "STOPPING" | "STOPPED";
export type CompilationJobSummaries = Array<CompilationJobSummary>;
export interface CompilationJobSummary {
  CompilationJobName: string;
  CompilationJobArn: string;
  CreationTime: Date | string;
  CompilationStartTime?: Date | string;
  CompilationEndTime?: Date | string;
  CompilationTargetDevice?: TargetDevice;
  CompilationTargetPlatformOs?: TargetPlatformOs;
  CompilationTargetPlatformArch?: TargetPlatformArch;
  CompilationTargetPlatformAccelerator?: TargetPlatformAccelerator;
  LastModifiedTime?: Date | string;
  CompilationJobStatus: CompilationJobStatus;
}
export type CompilerOptions = string;

export type CompleteOnConvergence = "DISABLED" | "ENABLED";
export type CompressionType = "NONE" | "GZIP";
export type CompressionTypes = Array<CompressionType>;
export type ComputeQuotaArn = string;

export interface ComputeQuotaConfig {
  ComputeQuotaResources?: Array<ComputeQuotaResourceConfig>;
  ResourceSharingConfig?: ResourceSharingConfig;
  PreemptTeamTasks?: PreemptTeamTasks;
}
export type ComputeQuotaId = string;

export interface ComputeQuotaResourceConfig {
  InstanceType: ClusterInstanceType;
  Count: number;
}
export type ComputeQuotaResourceConfigList = Array<ComputeQuotaResourceConfig>;
export interface ComputeQuotaSummary {
  ComputeQuotaArn: string;
  ComputeQuotaId: string;
  Name: string;
  ComputeQuotaVersion?: number;
  Status: SchedulerResourceStatus;
  ClusterArn?: string;
  ComputeQuotaConfig?: ComputeQuotaConfig;
  ComputeQuotaTarget: ComputeQuotaTarget;
  ActivationState?: ActivationState;
  CreationTime: Date | string;
  LastModifiedTime?: Date | string;
}
export type ComputeQuotaSummaryList = Array<ComputeQuotaSummary>;
export interface ComputeQuotaTarget {
  TeamName: string;
  FairShareWeight?: number;
}
export type ComputeQuotaTargetTeamName = string;

export type ConditionOutcome = "TRUE" | "FALSE";
export interface ConditionStepMetadata {
  Outcome?: ConditionOutcome;
}
export type ConfigKey = string;

export type ConfigValue = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export type ContainerArgument = string;

export type ContainerArguments = Array<string>;
export interface ContainerConfig {
  ContainerArguments?: Array<string>;
  ContainerEntrypoint?: Array<string>;
  ContainerEnvironmentVariables?: Record<string, string>;
}
export interface ContainerDefinition {
  ContainerHostname?: string;
  Image?: string;
  ImageConfig?: ImageConfig;
  Mode?: ContainerMode;
  ModelDataUrl?: string;
  ModelDataSource?: ModelDataSource;
  AdditionalModelDataSources?: Array<AdditionalModelDataSource>;
  Environment?: Record<string, string>;
  ModelPackageName?: string;
  InferenceSpecificationName?: string;
  MultiModelConfig?: MultiModelConfig;
}
export type ContainerDefinitionList = Array<ContainerDefinition>;
export type ContainerEntrypoint = Array<string>;
export type ContainerEntrypointString = string;

export type ContainerHostname = string;

export type ContainerImage = string;

export type ContainerMode = "SINGLE_MODEL" | "MULTI_MODEL";
export type ContentClassifier = "FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION" | "FREE_OF_ADULT_CONTENT";
export type ContentClassifiers = Array<ContentClassifier>;
export type ContentColumn = string;

export type ContentDigest = string;

export type ContentType = string;

export type ContentTypes = Array<string>;
export type ContextArn = string;

export type ContextName = string;

export type ContextNameOrArn = string;

export interface ContextSource {
  SourceUri: string;
  SourceType?: string;
  SourceId?: string;
}
export type ContextSummaries = Array<ContextSummary>;
export interface ContextSummary {
  ContextArn?: string;
  ContextName?: string;
  Source?: ContextSource;
  ContextType?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export interface ContinuousParameterRange {
  Name: string;
  MinValue: string;
  MaxValue: string;
  ScalingType?: HyperParameterScalingType;
}
export type ContinuousParameterRanges = Array<ContinuousParameterRange>;
export interface ContinuousParameterRangeSpecification {
  MinValue: string;
  MaxValue: string;
}
export interface ConvergenceDetected {
  CompleteOnConvergence?: CompleteOnConvergence;
}
export type CountryCode = string;

export interface CreateActionRequest {
  ActionName: string;
  Source: ActionSource;
  ActionType: string;
  Description?: string;
  Status?: ActionStatus;
  Properties?: Record<string, string>;
  MetadataProperties?: MetadataProperties;
  Tags?: Array<Tag>;
}
export interface CreateActionResponse {
  ActionArn?: string;
}
export interface CreateAlgorithmInput {
  AlgorithmName: string;
  AlgorithmDescription?: string;
  TrainingSpecification: TrainingSpecification;
  InferenceSpecification?: InferenceSpecification;
  ValidationSpecification?: AlgorithmValidationSpecification;
  CertifyForMarketplace?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateAlgorithmOutput {
  AlgorithmArn: string;
}
export interface CreateAppImageConfigRequest {
  AppImageConfigName: string;
  Tags?: Array<Tag>;
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
  JupyterLabAppImageConfig?: JupyterLabAppImageConfig;
  CodeEditorAppImageConfig?: CodeEditorAppImageConfig;
}
export interface CreateAppImageConfigResponse {
  AppImageConfigArn?: string;
}
export interface CreateAppRequest {
  DomainId: string;
  UserProfileName?: string;
  SpaceName?: string;
  AppType: AppType;
  AppName: string;
  Tags?: Array<Tag>;
  ResourceSpec?: ResourceSpec;
  RecoveryMode?: boolean;
}
export interface CreateAppResponse {
  AppArn?: string;
}
export interface CreateArtifactRequest {
  ArtifactName?: string;
  Source: ArtifactSource;
  ArtifactType: string;
  Properties?: Record<string, string>;
  MetadataProperties?: MetadataProperties;
  Tags?: Array<Tag>;
}
export interface CreateArtifactResponse {
  ArtifactArn?: string;
}
export interface CreateAutoMLJobRequest {
  AutoMLJobName: string;
  InputDataConfig: Array<AutoMLChannel>;
  OutputDataConfig: AutoMLOutputDataConfig;
  ProblemType?: ProblemType;
  AutoMLJobObjective?: AutoMLJobObjective;
  AutoMLJobConfig?: AutoMLJobConfig;
  RoleArn: string;
  GenerateCandidateDefinitionsOnly?: boolean;
  Tags?: Array<Tag>;
  ModelDeployConfig?: ModelDeployConfig;
}
export interface CreateAutoMLJobResponse {
  AutoMLJobArn: string;
}
export interface CreateAutoMLJobV2Request {
  AutoMLJobName: string;
  AutoMLJobInputDataConfig: Array<AutoMLJobChannel>;
  OutputDataConfig: AutoMLOutputDataConfig;
  AutoMLProblemTypeConfig: AutoMLProblemTypeConfig;
  RoleArn: string;
  Tags?: Array<Tag>;
  SecurityConfig?: AutoMLSecurityConfig;
  AutoMLJobObjective?: AutoMLJobObjective;
  ModelDeployConfig?: ModelDeployConfig;
  DataSplitConfig?: AutoMLDataSplitConfig;
  AutoMLComputeConfig?: AutoMLComputeConfig;
}
export interface CreateAutoMLJobV2Response {
  AutoMLJobArn: string;
}
export interface CreateClusterRequest {
  ClusterName: string;
  InstanceGroups?: Array<ClusterInstanceGroupSpecification>;
  VpcConfig?: VpcConfig;
  Tags?: Array<Tag>;
  Orchestrator?: ClusterOrchestrator;
  NodeRecovery?: ClusterNodeRecovery;
}
export interface CreateClusterResponse {
  ClusterArn: string;
}
export interface CreateClusterSchedulerConfigRequest {
  Name: string;
  ClusterArn: string;
  SchedulerConfig: SchedulerConfig;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface CreateClusterSchedulerConfigResponse {
  ClusterSchedulerConfigArn: string;
  ClusterSchedulerConfigId: string;
}
export interface CreateCodeRepositoryInput {
  CodeRepositoryName: string;
  GitConfig: GitConfig;
  Tags?: Array<Tag>;
}
export interface CreateCodeRepositoryOutput {
  CodeRepositoryArn: string;
}
export interface CreateCompilationJobRequest {
  CompilationJobName: string;
  RoleArn: string;
  ModelPackageVersionArn?: string;
  InputConfig?: InputConfig;
  OutputConfig: OutputConfig;
  VpcConfig?: NeoVpcConfig;
  StoppingCondition: StoppingCondition;
  Tags?: Array<Tag>;
}
export interface CreateCompilationJobResponse {
  CompilationJobArn: string;
}
export interface CreateComputeQuotaRequest {
  Name: string;
  Description?: string;
  ClusterArn: string;
  ComputeQuotaConfig: ComputeQuotaConfig;
  ComputeQuotaTarget: ComputeQuotaTarget;
  ActivationState?: ActivationState;
  Tags?: Array<Tag>;
}
export interface CreateComputeQuotaResponse {
  ComputeQuotaArn: string;
  ComputeQuotaId: string;
}
export interface CreateContextRequest {
  ContextName: string;
  Source: ContextSource;
  ContextType: string;
  Description?: string;
  Properties?: Record<string, string>;
  Tags?: Array<Tag>;
}
export interface CreateContextResponse {
  ContextArn?: string;
}
export interface CreateDataQualityJobDefinitionRequest {
  JobDefinitionName: string;
  DataQualityBaselineConfig?: DataQualityBaselineConfig;
  DataQualityAppSpecification: DataQualityAppSpecification;
  DataQualityJobInput: DataQualityJobInput;
  DataQualityJobOutputConfig: MonitoringOutputConfig;
  JobResources: MonitoringResources;
  NetworkConfig?: MonitoringNetworkConfig;
  RoleArn: string;
  StoppingCondition?: MonitoringStoppingCondition;
  Tags?: Array<Tag>;
}
export interface CreateDataQualityJobDefinitionResponse {
  JobDefinitionArn: string;
}
export interface CreateDeviceFleetRequest {
  DeviceFleetName: string;
  RoleArn?: string;
  Description?: string;
  OutputConfig: EdgeOutputConfig;
  Tags?: Array<Tag>;
  EnableIotRoleAlias?: boolean;
}
export interface CreateDomainRequest {
  DomainName: string;
  AuthMode: AuthMode;
  DefaultUserSettings: UserSettings;
  DomainSettings?: DomainSettings;
  SubnetIds?: Array<string>;
  VpcId?: string;
  Tags?: Array<Tag>;
  AppNetworkAccessType?: AppNetworkAccessType;
  HomeEfsFileSystemKmsKeyId?: string;
  KmsKeyId?: string;
  AppSecurityGroupManagement?: AppSecurityGroupManagement;
  TagPropagation?: TagPropagation;
  DefaultSpaceSettings?: DefaultSpaceSettings;
}
export interface CreateDomainResponse {
  DomainArn?: string;
  DomainId?: string;
  Url?: string;
}
export interface CreateEdgeDeploymentPlanRequest {
  EdgeDeploymentPlanName: string;
  ModelConfigs: Array<EdgeDeploymentModelConfig>;
  DeviceFleetName: string;
  Stages?: Array<DeploymentStage>;
  Tags?: Array<Tag>;
}
export interface CreateEdgeDeploymentPlanResponse {
  EdgeDeploymentPlanArn: string;
}
export interface CreateEdgeDeploymentStageRequest {
  EdgeDeploymentPlanName: string;
  Stages: Array<DeploymentStage>;
}
export interface CreateEdgePackagingJobRequest {
  EdgePackagingJobName: string;
  CompilationJobName: string;
  ModelName: string;
  ModelVersion: string;
  RoleArn: string;
  OutputConfig: EdgeOutputConfig;
  ResourceKey?: string;
  Tags?: Array<Tag>;
}
export interface CreateEndpointConfigInput {
  EndpointConfigName: string;
  ProductionVariants: Array<ProductionVariant>;
  DataCaptureConfig?: DataCaptureConfig;
  Tags?: Array<Tag>;
  KmsKeyId?: string;
  AsyncInferenceConfig?: AsyncInferenceConfig;
  ExplainerConfig?: ExplainerConfig;
  ShadowProductionVariants?: Array<ProductionVariant>;
  ExecutionRoleArn?: string;
  VpcConfig?: VpcConfig;
  EnableNetworkIsolation?: boolean;
}
export interface CreateEndpointConfigOutput {
  EndpointConfigArn: string;
}
export interface CreateEndpointInput {
  EndpointName: string;
  EndpointConfigName: string;
  DeploymentConfig?: DeploymentConfig;
  Tags?: Array<Tag>;
}
export interface CreateEndpointOutput {
  EndpointArn: string;
}
export interface CreateExperimentRequest {
  ExperimentName: string;
  DisplayName?: string;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface CreateExperimentResponse {
  ExperimentArn?: string;
}
export interface CreateFeatureGroupRequest {
  FeatureGroupName: string;
  RecordIdentifierFeatureName: string;
  EventTimeFeatureName: string;
  FeatureDefinitions: Array<FeatureDefinition>;
  OnlineStoreConfig?: OnlineStoreConfig;
  OfflineStoreConfig?: OfflineStoreConfig;
  ThroughputConfig?: ThroughputConfig;
  RoleArn?: string;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface CreateFeatureGroupResponse {
  FeatureGroupArn: string;
}
export interface CreateFlowDefinitionRequest {
  FlowDefinitionName: string;
  HumanLoopRequestSource?: HumanLoopRequestSource;
  HumanLoopActivationConfig?: HumanLoopActivationConfig;
  HumanLoopConfig?: HumanLoopConfig;
  OutputConfig: FlowDefinitionOutputConfig;
  RoleArn: string;
  Tags?: Array<Tag>;
}
export interface CreateFlowDefinitionResponse {
  FlowDefinitionArn: string;
}
export interface CreateHubContentPresignedUrlsRequest {
  HubName: string;
  HubContentType: HubContentType;
  HubContentName: string;
  HubContentVersion?: string;
  AccessConfig?: PresignedUrlAccessConfig;
  MaxResults?: number;
  NextToken?: string;
}
export interface CreateHubContentPresignedUrlsResponse {
  AuthorizedUrlConfigs: Array<AuthorizedUrl>;
  NextToken?: string;
}
export interface CreateHubContentReferenceRequest {
  HubName: string;
  SageMakerPublicHubContentArn: string;
  HubContentName?: string;
  MinVersion?: string;
  Tags?: Array<Tag>;
}
export interface CreateHubContentReferenceResponse {
  HubArn: string;
  HubContentArn: string;
}
export interface CreateHubRequest {
  HubName: string;
  HubDescription: string;
  HubDisplayName?: string;
  HubSearchKeywords?: Array<string>;
  S3StorageConfig?: HubS3StorageConfig;
  Tags?: Array<Tag>;
}
export interface CreateHubResponse {
  HubArn: string;
}
export interface CreateHumanTaskUiRequest {
  HumanTaskUiName: string;
  UiTemplate: UiTemplate;
  Tags?: Array<Tag>;
}
export interface CreateHumanTaskUiResponse {
  HumanTaskUiArn: string;
}
export interface CreateHyperParameterTuningJobRequest {
  HyperParameterTuningJobName: string;
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig;
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;
  TrainingJobDefinitions?: Array<HyperParameterTrainingJobDefinition>;
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;
  Tags?: Array<Tag>;
  Autotune?: Autotune;
}
export interface CreateHyperParameterTuningJobResponse {
  HyperParameterTuningJobArn: string;
}
export interface CreateImageRequest {
  Description?: string;
  DisplayName?: string;
  ImageName: string;
  RoleArn: string;
  Tags?: Array<Tag>;
}
export interface CreateImageResponse {
  ImageArn?: string;
}
export interface CreateImageVersionRequest {
  BaseImage: string;
  ClientToken: string;
  ImageName: string;
  Aliases?: Array<string>;
  VendorGuidance?: VendorGuidance;
  JobType?: JobType;
  MLFramework?: string;
  ProgrammingLang?: string;
  Processor?: Processor;
  Horovod?: boolean;
  ReleaseNotes?: string;
}
export interface CreateImageVersionResponse {
  ImageVersionArn?: string;
}
export interface CreateInferenceComponentInput {
  InferenceComponentName: string;
  EndpointName: string;
  VariantName?: string;
  Specification: InferenceComponentSpecification;
  RuntimeConfig?: InferenceComponentRuntimeConfig;
  Tags?: Array<Tag>;
}
export interface CreateInferenceComponentOutput {
  InferenceComponentArn: string;
}
export interface CreateInferenceExperimentRequest {
  Name: string;
  Type: InferenceExperimentType;
  Schedule?: InferenceExperimentSchedule;
  Description?: string;
  RoleArn: string;
  EndpointName: string;
  ModelVariants: Array<ModelVariantConfig>;
  DataStorageConfig?: InferenceExperimentDataStorageConfig;
  ShadowModeConfig: ShadowModeConfig;
  KmsKey?: string;
  Tags?: Array<Tag>;
}
export interface CreateInferenceExperimentResponse {
  InferenceExperimentArn: string;
}
export interface CreateInferenceRecommendationsJobRequest {
  JobName: string;
  JobType: RecommendationJobType;
  RoleArn: string;
  InputConfig: RecommendationJobInputConfig;
  JobDescription?: string;
  StoppingConditions?: RecommendationJobStoppingConditions;
  OutputConfig?: RecommendationJobOutputConfig;
  Tags?: Array<Tag>;
}
export interface CreateInferenceRecommendationsJobResponse {
  JobArn: string;
}
export interface CreateLabelingJobRequest {
  LabelingJobName: string;
  LabelAttributeName: string;
  InputConfig: LabelingJobInputConfig;
  OutputConfig: LabelingJobOutputConfig;
  RoleArn: string;
  LabelCategoryConfigS3Uri?: string;
  StoppingConditions?: LabelingJobStoppingConditions;
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;
  HumanTaskConfig: HumanTaskConfig;
  Tags?: Array<Tag>;
}
export interface CreateLabelingJobResponse {
  LabelingJobArn: string;
}
export interface CreateMlflowTrackingServerRequest {
  TrackingServerName: string;
  ArtifactStoreUri: string;
  TrackingServerSize?: TrackingServerSize;
  MlflowVersion?: string;
  RoleArn: string;
  AutomaticModelRegistration?: boolean;
  WeeklyMaintenanceWindowStart?: string;
  Tags?: Array<Tag>;
}
export interface CreateMlflowTrackingServerResponse {
  TrackingServerArn?: string;
}
export interface CreateModelBiasJobDefinitionRequest {
  JobDefinitionName: string;
  ModelBiasBaselineConfig?: ModelBiasBaselineConfig;
  ModelBiasAppSpecification: ModelBiasAppSpecification;
  ModelBiasJobInput: ModelBiasJobInput;
  ModelBiasJobOutputConfig: MonitoringOutputConfig;
  JobResources: MonitoringResources;
  NetworkConfig?: MonitoringNetworkConfig;
  RoleArn: string;
  StoppingCondition?: MonitoringStoppingCondition;
  Tags?: Array<Tag>;
}
export interface CreateModelBiasJobDefinitionResponse {
  JobDefinitionArn: string;
}
export interface CreateModelCardExportJobRequest {
  ModelCardName: string;
  ModelCardVersion?: number;
  ModelCardExportJobName: string;
  OutputConfig: ModelCardExportOutputConfig;
}
export interface CreateModelCardExportJobResponse {
  ModelCardExportJobArn: string;
}
export interface CreateModelCardRequest {
  ModelCardName: string;
  SecurityConfig?: ModelCardSecurityConfig;
  Content: string;
  ModelCardStatus: ModelCardStatus;
  Tags?: Array<Tag>;
}
export interface CreateModelCardResponse {
  ModelCardArn: string;
}
export interface CreateModelExplainabilityJobDefinitionRequest {
  JobDefinitionName: string;
  ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig;
  ModelExplainabilityAppSpecification: ModelExplainabilityAppSpecification;
  ModelExplainabilityJobInput: ModelExplainabilityJobInput;
  ModelExplainabilityJobOutputConfig: MonitoringOutputConfig;
  JobResources: MonitoringResources;
  NetworkConfig?: MonitoringNetworkConfig;
  RoleArn: string;
  StoppingCondition?: MonitoringStoppingCondition;
  Tags?: Array<Tag>;
}
export interface CreateModelExplainabilityJobDefinitionResponse {
  JobDefinitionArn: string;
}
export interface CreateModelInput {
  ModelName: string;
  PrimaryContainer?: ContainerDefinition;
  Containers?: Array<ContainerDefinition>;
  InferenceExecutionConfig?: InferenceExecutionConfig;
  ExecutionRoleArn?: string;
  Tags?: Array<Tag>;
  VpcConfig?: VpcConfig;
  EnableNetworkIsolation?: boolean;
}
export interface CreateModelOutput {
  ModelArn: string;
}
export interface CreateModelPackageGroupInput {
  ModelPackageGroupName: string;
  ModelPackageGroupDescription?: string;
  Tags?: Array<Tag>;
}
export interface CreateModelPackageGroupOutput {
  ModelPackageGroupArn: string;
}
export interface CreateModelPackageInput {
  ModelPackageName?: string;
  ModelPackageGroupName?: string;
  ModelPackageDescription?: string;
  InferenceSpecification?: InferenceSpecification;
  ValidationSpecification?: ModelPackageValidationSpecification;
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;
  CertifyForMarketplace?: boolean;
  Tags?: Array<Tag>;
  ModelApprovalStatus?: ModelApprovalStatus;
  MetadataProperties?: MetadataProperties;
  ModelMetrics?: ModelMetrics;
  ClientToken?: string;
  Domain?: string;
  Task?: string;
  SamplePayloadUrl?: string;
  CustomerMetadataProperties?: Record<string, string>;
  DriftCheckBaselines?: DriftCheckBaselines;
  AdditionalInferenceSpecifications?: Array<AdditionalInferenceSpecificationDefinition>;
  SkipModelValidation?: SkipModelValidation;
  SourceUri?: string;
  SecurityConfig?: ModelPackageSecurityConfig;
  ModelCard?: ModelPackageModelCard;
  ModelLifeCycle?: ModelLifeCycle;
}
export interface CreateModelPackageOutput {
  ModelPackageArn: string;
}
export interface CreateModelQualityJobDefinitionRequest {
  JobDefinitionName: string;
  ModelQualityBaselineConfig?: ModelQualityBaselineConfig;
  ModelQualityAppSpecification: ModelQualityAppSpecification;
  ModelQualityJobInput: ModelQualityJobInput;
  ModelQualityJobOutputConfig: MonitoringOutputConfig;
  JobResources: MonitoringResources;
  NetworkConfig?: MonitoringNetworkConfig;
  RoleArn: string;
  StoppingCondition?: MonitoringStoppingCondition;
  Tags?: Array<Tag>;
}
export interface CreateModelQualityJobDefinitionResponse {
  JobDefinitionArn: string;
}
export interface CreateMonitoringScheduleRequest {
  MonitoringScheduleName: string;
  MonitoringScheduleConfig: MonitoringScheduleConfig;
  Tags?: Array<Tag>;
}
export interface CreateMonitoringScheduleResponse {
  MonitoringScheduleArn: string;
}
export interface CreateNotebookInstanceInput {
  NotebookInstanceName: string;
  InstanceType: InstanceType;
  SubnetId?: string;
  SecurityGroupIds?: Array<string>;
  RoleArn: string;
  KmsKeyId?: string;
  Tags?: Array<Tag>;
  LifecycleConfigName?: string;
  DirectInternetAccess?: DirectInternetAccess;
  VolumeSizeInGB?: number;
  AcceleratorTypes?: Array<NotebookInstanceAcceleratorType>;
  DefaultCodeRepository?: string;
  AdditionalCodeRepositories?: Array<string>;
  RootAccess?: RootAccess;
  PlatformIdentifier?: string;
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
}
export interface CreateNotebookInstanceLifecycleConfigInput {
  NotebookInstanceLifecycleConfigName: string;
  OnCreate?: Array<NotebookInstanceLifecycleHook>;
  OnStart?: Array<NotebookInstanceLifecycleHook>;
  Tags?: Array<Tag>;
}
export interface CreateNotebookInstanceLifecycleConfigOutput {
  NotebookInstanceLifecycleConfigArn?: string;
}
export interface CreateNotebookInstanceOutput {
  NotebookInstanceArn?: string;
}
export interface CreateOptimizationJobRequest {
  OptimizationJobName: string;
  RoleArn: string;
  ModelSource: OptimizationJobModelSource;
  DeploymentInstanceType: OptimizationJobDeploymentInstanceType;
  OptimizationEnvironment?: Record<string, string>;
  OptimizationConfigs: Array<OptimizationConfig>;
  OutputConfig: OptimizationJobOutputConfig;
  StoppingCondition: StoppingCondition;
  Tags?: Array<Tag>;
  VpcConfig?: OptimizationVpcConfig;
}
export interface CreateOptimizationJobResponse {
  OptimizationJobArn: string;
}
export interface CreatePartnerAppPresignedUrlRequest {
  Arn: string;
  ExpiresInSeconds?: number;
  SessionExpirationDurationInSeconds?: number;
}
export interface CreatePartnerAppPresignedUrlResponse {
  Url?: string;
}
export interface CreatePartnerAppRequest {
  Name: string;
  Type: PartnerAppType;
  ExecutionRoleArn: string;
  KmsKeyId?: string;
  MaintenanceConfig?: PartnerAppMaintenanceConfig;
  Tier: string;
  ApplicationConfig?: PartnerAppConfig;
  AuthType: PartnerAppAuthType;
  EnableIamSessionBasedIdentity?: boolean;
  ClientToken?: string;
  Tags?: Array<Tag>;
}
export interface CreatePartnerAppResponse {
  Arn?: string;
}
export interface CreatePipelineRequest {
  PipelineName: string;
  PipelineDisplayName?: string;
  PipelineDefinition?: string;
  PipelineDefinitionS3Location?: PipelineDefinitionS3Location;
  PipelineDescription?: string;
  ClientRequestToken: string;
  RoleArn: string;
  Tags?: Array<Tag>;
  ParallelismConfiguration?: ParallelismConfiguration;
}
export interface CreatePipelineResponse {
  PipelineArn?: string;
}
export interface CreatePresignedDomainUrlRequest {
  DomainId: string;
  UserProfileName: string;
  SessionExpirationDurationInSeconds?: number;
  ExpiresInSeconds?: number;
  SpaceName?: string;
  LandingUri?: string;
}
export interface CreatePresignedDomainUrlResponse {
  AuthorizedUrl?: string;
}
export interface CreatePresignedMlflowTrackingServerUrlRequest {
  TrackingServerName: string;
  ExpiresInSeconds?: number;
  SessionExpirationDurationInSeconds?: number;
}
export interface CreatePresignedMlflowTrackingServerUrlResponse {
  AuthorizedUrl?: string;
}
export interface CreatePresignedNotebookInstanceUrlInput {
  NotebookInstanceName: string;
  SessionExpirationDurationInSeconds?: number;
}
export interface CreatePresignedNotebookInstanceUrlOutput {
  AuthorizedUrl?: string;
}
export interface CreateProcessingJobRequest {
  ProcessingInputs?: Array<ProcessingInput>;
  ProcessingOutputConfig?: ProcessingOutputConfig;
  ProcessingJobName: string;
  ProcessingResources: ProcessingResources;
  StoppingCondition?: ProcessingStoppingCondition;
  AppSpecification: AppSpecification;
  Environment?: Record<string, string>;
  NetworkConfig?: NetworkConfig;
  RoleArn: string;
  Tags?: Array<Tag>;
  ExperimentConfig?: ExperimentConfig;
}
export interface CreateProcessingJobResponse {
  ProcessingJobArn: string;
}
export interface CreateProjectInput {
  ProjectName: string;
  ProjectDescription?: string;
  ServiceCatalogProvisioningDetails?: ServiceCatalogProvisioningDetails;
  Tags?: Array<Tag>;
  TemplateProviders?: Array<CreateTemplateProvider>;
}
export interface CreateProjectOutput {
  ProjectArn: string;
  ProjectId: string;
}
export interface CreateSpaceRequest {
  DomainId: string;
  SpaceName: string;
  Tags?: Array<Tag>;
  SpaceSettings?: SpaceSettings;
  OwnershipSettings?: OwnershipSettings;
  SpaceSharingSettings?: SpaceSharingSettings;
  SpaceDisplayName?: string;
}
export interface CreateSpaceResponse {
  SpaceArn?: string;
}
export interface CreateStudioLifecycleConfigRequest {
  StudioLifecycleConfigName: string;
  StudioLifecycleConfigContent: string;
  StudioLifecycleConfigAppType: StudioLifecycleConfigAppType;
  Tags?: Array<Tag>;
}
export interface CreateStudioLifecycleConfigResponse {
  StudioLifecycleConfigArn?: string;
}
export interface CreateTemplateProvider {
  CfnTemplateProvider?: CfnCreateTemplateProvider;
}
export type CreateTemplateProviderList = Array<CreateTemplateProvider>;
export interface CreateTrainingJobRequest {
  TrainingJobName: string;
  HyperParameters?: Record<string, string>;
  AlgorithmSpecification: AlgorithmSpecification;
  RoleArn: string;
  InputDataConfig?: Array<Channel>;
  OutputDataConfig: OutputDataConfig;
  ResourceConfig: ResourceConfig;
  VpcConfig?: VpcConfig;
  StoppingCondition: StoppingCondition;
  Tags?: Array<Tag>;
  EnableNetworkIsolation?: boolean;
  EnableInterContainerTrafficEncryption?: boolean;
  EnableManagedSpotTraining?: boolean;
  CheckpointConfig?: CheckpointConfig;
  DebugHookConfig?: DebugHookConfig;
  DebugRuleConfigurations?: Array<DebugRuleConfiguration>;
  TensorBoardOutputConfig?: TensorBoardOutputConfig;
  ExperimentConfig?: ExperimentConfig;
  ProfilerConfig?: ProfilerConfig;
  ProfilerRuleConfigurations?: Array<ProfilerRuleConfiguration>;
  Environment?: Record<string, string>;
  RetryStrategy?: RetryStrategy;
  RemoteDebugConfig?: RemoteDebugConfig;
  InfraCheckConfig?: InfraCheckConfig;
  SessionChainingConfig?: SessionChainingConfig;
}
export interface CreateTrainingJobResponse {
  TrainingJobArn: string;
}
export interface CreateTrainingPlanRequest {
  TrainingPlanName: string;
  TrainingPlanOfferingId: string;
  Tags?: Array<Tag>;
}
export interface CreateTrainingPlanResponse {
  TrainingPlanArn: string;
}
export interface CreateTransformJobRequest {
  TransformJobName: string;
  ModelName: string;
  MaxConcurrentTransforms?: number;
  ModelClientConfig?: ModelClientConfig;
  MaxPayloadInMB?: number;
  BatchStrategy?: BatchStrategy;
  Environment?: Record<string, string>;
  TransformInput: TransformInput;
  TransformOutput: TransformOutput;
  DataCaptureConfig?: BatchDataCaptureConfig;
  TransformResources: TransformResources;
  DataProcessing?: DataProcessing;
  Tags?: Array<Tag>;
  ExperimentConfig?: ExperimentConfig;
}
export interface CreateTransformJobResponse {
  TransformJobArn: string;
}
export interface CreateTrialComponentRequest {
  TrialComponentName: string;
  DisplayName?: string;
  Status?: TrialComponentStatus;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Parameters?: Record<string, TrialComponentParameterValue>;
  InputArtifacts?: Record<string, TrialComponentArtifact>;
  OutputArtifacts?: Record<string, TrialComponentArtifact>;
  MetadataProperties?: MetadataProperties;
  Tags?: Array<Tag>;
}
export interface CreateTrialComponentResponse {
  TrialComponentArn?: string;
}
export interface CreateTrialRequest {
  TrialName: string;
  DisplayName?: string;
  ExperimentName: string;
  MetadataProperties?: MetadataProperties;
  Tags?: Array<Tag>;
}
export interface CreateTrialResponse {
  TrialArn?: string;
}
export interface CreateUserProfileRequest {
  DomainId: string;
  UserProfileName: string;
  SingleSignOnUserIdentifier?: string;
  SingleSignOnUserValue?: string;
  Tags?: Array<Tag>;
  UserSettings?: UserSettings;
}
export interface CreateUserProfileResponse {
  UserProfileArn?: string;
}
export interface CreateWorkforceRequest {
  CognitoConfig?: CognitoConfig;
  OidcConfig?: OidcConfig;
  SourceIpConfig?: SourceIpConfig;
  WorkforceName: string;
  Tags?: Array<Tag>;
  WorkforceVpcConfig?: WorkforceVpcConfigRequest;
}
export interface CreateWorkforceResponse {
  WorkforceArn: string;
}
export interface CreateWorkteamRequest {
  WorkteamName: string;
  WorkforceName?: string;
  MemberDefinitions: Array<MemberDefinition>;
  Description: string;
  NotificationConfiguration?: NotificationConfiguration;
  WorkerAccessConfiguration?: WorkerAccessConfiguration;
  Tags?: Array<Tag>;
}
export interface CreateWorkteamResponse {
  WorkteamArn?: string;
}
export type CreationTime = Date | string;

export type CronScheduleExpression = string;

export type CrossAccountFilterOption = "SAME_ACCOUNT" | "CROSS_ACCOUNT";
export type CsvContentType = string;

export type CsvContentTypes = Array<string>;
export type CurrencyCode = string;

export type CustomerMetadataKey = string;

export type CustomerMetadataKeyList = Array<string>;
export type CustomerMetadataMap = Record<string, string>;
export type CustomerMetadataValue = string;

export type CustomFileSystem = { EFSFileSystem: EFSFileSystem } | { FSxLustreFileSystem: FSxLustreFileSystem };
export type CustomFileSystemConfig = { EFSFileSystemConfig: EFSFileSystemConfig } | { FSxLustreFileSystemConfig: FSxLustreFileSystemConfig };
export type CustomFileSystemConfigs = Array<CustomFileSystemConfig>;
export type CustomFileSystems = Array<CustomFileSystem>;
export interface CustomImage {
  ImageName: string;
  ImageVersionNumber?: number;
  AppImageConfigName: string;
}
export type CustomImageContainerArguments = Array<string>;
export type CustomImageContainerEntrypoint = Array<string>;
export type CustomImageContainerEnvironmentVariables = Record<string, string>;
export type CustomImages = Array<CustomImage>;
export interface CustomizedMetricSpecification {
  MetricName?: string;
  Namespace?: string;
  Statistic?: Statistic;
}
export interface CustomPosixUserConfig {
  Uid: number;
  Gid: number;
}
export type Database = string;

export interface DataCaptureConfig {
  EnableCapture?: boolean;
  InitialSamplingPercentage: number;
  DestinationS3Uri: string;
  KmsKeyId?: string;
  CaptureOptions: Array<CaptureOption>;
  CaptureContentTypeHeader?: CaptureContentTypeHeader;
}
export interface DataCaptureConfigSummary {
  EnableCapture: boolean;
  CaptureStatus: CaptureStatus;
  CurrentSamplingPercentage: number;
  DestinationS3Uri: string;
  KmsKeyId: string;
}
export interface DataCatalogConfig {
  TableName: string;
  Catalog: string;
  Database: string;
}
export type DataDistributionType = "FULLYREPLICATED" | "SHARDEDBYS3KEY";
export type DataExplorationNotebookLocation = string;

export type DataInputConfig = string;

export interface DataProcessing {
  InputFilter?: string;
  OutputFilter?: string;
  JoinSource?: JoinSource;
}
export interface DataQualityAppSpecification {
  ImageUri: string;
  ContainerEntrypoint?: Array<string>;
  ContainerArguments?: Array<string>;
  RecordPreprocessorSourceUri?: string;
  PostAnalyticsProcessorSourceUri?: string;
  Environment?: Record<string, string>;
}
export interface DataQualityBaselineConfig {
  BaseliningJobName?: string;
  ConstraintsResource?: MonitoringConstraintsResource;
  StatisticsResource?: MonitoringStatisticsResource;
}
export interface DataQualityJobInput {
  EndpointInput?: EndpointInput;
  BatchTransformInput?: BatchTransformInput;
}
export interface DatasetDefinition {
  AthenaDatasetDefinition?: AthenaDatasetDefinition;
  RedshiftDatasetDefinition?: RedshiftDatasetDefinition;
  LocalPath?: string;
  DataDistributionType?: DataDistributionType;
  InputMode?: InputMode;
}
export interface DataSource {
  S3DataSource?: S3DataSource;
  FileSystemDataSource?: FileSystemDataSource;
}
export type DataSourceName = "SalesforceGenie" | "Snowflake";
export interface DebugHookConfig {
  LocalPath?: string;
  S3OutputPath: string;
  HookParameters?: Record<string, string>;
  CollectionConfigurations?: Array<CollectionConfiguration>;
}
export interface DebugRuleConfiguration {
  RuleConfigurationName: string;
  LocalPath?: string;
  S3OutputPath?: string;
  RuleEvaluatorImage: string;
  InstanceType?: ProcessingInstanceType;
  VolumeSizeInGB?: number;
  RuleParameters?: Record<string, string>;
}
export type DebugRuleConfigurations = Array<DebugRuleConfiguration>;
export interface DebugRuleEvaluationStatus {
  RuleConfigurationName?: string;
  RuleEvaluationJobArn?: string;
  RuleEvaluationStatus?: RuleEvaluationStatus;
  StatusDetails?: string;
  LastModifiedTime?: Date | string;
}
export type DebugRuleEvaluationStatuses = Array<DebugRuleEvaluationStatus>;
export type DeepHealthCheckType = "INSTANCE_STRESS" | "INSTANCE_CONNECTIVITY";
export interface DefaultEbsStorageSettings {
  DefaultEbsVolumeSizeInGb: number;
  MaximumEbsVolumeSizeInGb: number;
}
export type DefaultGid = number;

export interface DefaultSpaceSettings {
  ExecutionRole?: string;
  SecurityGroups?: Array<string>;
  JupyterServerAppSettings?: JupyterServerAppSettings;
  KernelGatewayAppSettings?: KernelGatewayAppSettings;
  JupyterLabAppSettings?: JupyterLabAppSettings;
  SpaceStorageSettings?: DefaultSpaceStorageSettings;
  CustomPosixUserConfig?: CustomPosixUserConfig;
  CustomFileSystemConfigs?: Array<CustomFileSystemConfig>;
}
export interface DefaultSpaceStorageSettings {
  DefaultEbsStorageSettings?: DefaultEbsStorageSettings;
}
export type DefaultUid = number;

export interface DeleteActionRequest {
  ActionName: string;
}
export interface DeleteActionResponse {
  ActionArn?: string;
}
export interface DeleteAlgorithmInput {
  AlgorithmName: string;
}
export interface DeleteAppImageConfigRequest {
  AppImageConfigName: string;
}
export interface DeleteAppRequest {
  DomainId: string;
  UserProfileName?: string;
  SpaceName?: string;
  AppType: AppType;
  AppName: string;
}
export interface DeleteArtifactRequest {
  ArtifactArn?: string;
  Source?: ArtifactSource;
}
export interface DeleteArtifactResponse {
  ArtifactArn?: string;
}
export interface DeleteAssociationRequest {
  SourceArn: string;
  DestinationArn: string;
}
export interface DeleteAssociationResponse {
  SourceArn?: string;
  DestinationArn?: string;
}
export interface DeleteClusterRequest {
  ClusterName: string;
}
export interface DeleteClusterResponse {
  ClusterArn: string;
}
export interface DeleteClusterSchedulerConfigRequest {
  ClusterSchedulerConfigId: string;
}
export interface DeleteCodeRepositoryInput {
  CodeRepositoryName: string;
}
export interface DeleteCompilationJobRequest {
  CompilationJobName: string;
}
export interface DeleteComputeQuotaRequest {
  ComputeQuotaId: string;
}
export interface DeleteContextRequest {
  ContextName: string;
}
export interface DeleteContextResponse {
  ContextArn?: string;
}
export interface DeleteDataQualityJobDefinitionRequest {
  JobDefinitionName: string;
}
export interface DeleteDeviceFleetRequest {
  DeviceFleetName: string;
}
export interface DeleteDomainRequest {
  DomainId: string;
  RetentionPolicy?: RetentionPolicy;
}
export interface DeleteEdgeDeploymentPlanRequest {
  EdgeDeploymentPlanName: string;
}
export interface DeleteEdgeDeploymentStageRequest {
  EdgeDeploymentPlanName: string;
  StageName: string;
}
export interface DeleteEndpointConfigInput {
  EndpointConfigName: string;
}
export interface DeleteEndpointInput {
  EndpointName: string;
}
export interface DeleteExperimentRequest {
  ExperimentName: string;
}
export interface DeleteExperimentResponse {
  ExperimentArn?: string;
}
export interface DeleteFeatureGroupRequest {
  FeatureGroupName: string;
}
export interface DeleteFlowDefinitionRequest {
  FlowDefinitionName: string;
}
export interface DeleteFlowDefinitionResponse {
}
export interface DeleteHubContentReferenceRequest {
  HubName: string;
  HubContentType: HubContentType;
  HubContentName: string;
}
export interface DeleteHubContentRequest {
  HubName: string;
  HubContentType: HubContentType;
  HubContentName: string;
  HubContentVersion: string;
}
export interface DeleteHubRequest {
  HubName: string;
}
export interface DeleteHumanTaskUiRequest {
  HumanTaskUiName: string;
}
export interface DeleteHumanTaskUiResponse {
}
export interface DeleteHyperParameterTuningJobRequest {
  HyperParameterTuningJobName: string;
}
export interface DeleteImageRequest {
  ImageName: string;
}
export interface DeleteImageResponse {
}
export interface DeleteImageVersionRequest {
  ImageName: string;
  Version?: number;
  Alias?: string;
}
export interface DeleteImageVersionResponse {
}
export interface DeleteInferenceComponentInput {
  InferenceComponentName: string;
}
export interface DeleteInferenceExperimentRequest {
  Name: string;
}
export interface DeleteInferenceExperimentResponse {
  InferenceExperimentArn: string;
}
export interface DeleteMlflowTrackingServerRequest {
  TrackingServerName: string;
}
export interface DeleteMlflowTrackingServerResponse {
  TrackingServerArn?: string;
}
export interface DeleteModelBiasJobDefinitionRequest {
  JobDefinitionName: string;
}
export interface DeleteModelCardRequest {
  ModelCardName: string;
}
export interface DeleteModelExplainabilityJobDefinitionRequest {
  JobDefinitionName: string;
}
export interface DeleteModelInput {
  ModelName: string;
}
export interface DeleteModelPackageGroupInput {
  ModelPackageGroupName: string;
}
export interface DeleteModelPackageGroupPolicyInput {
  ModelPackageGroupName: string;
}
export interface DeleteModelPackageInput {
  ModelPackageName: string;
}
export interface DeleteModelQualityJobDefinitionRequest {
  JobDefinitionName: string;
}
export interface DeleteMonitoringScheduleRequest {
  MonitoringScheduleName: string;
}
export interface DeleteNotebookInstanceInput {
  NotebookInstanceName: string;
}
export interface DeleteNotebookInstanceLifecycleConfigInput {
  NotebookInstanceLifecycleConfigName: string;
}
export interface DeleteOptimizationJobRequest {
  OptimizationJobName: string;
}
export interface DeletePartnerAppRequest {
  Arn: string;
  ClientToken?: string;
}
export interface DeletePartnerAppResponse {
  Arn?: string;
}
export interface DeletePipelineRequest {
  PipelineName: string;
  ClientRequestToken: string;
}
export interface DeletePipelineResponse {
  PipelineArn?: string;
}
export interface DeleteProjectInput {
  ProjectName: string;
}
export interface DeleteSpaceRequest {
  DomainId: string;
  SpaceName: string;
}
export interface DeleteStudioLifecycleConfigRequest {
  StudioLifecycleConfigName: string;
}
export interface DeleteTagsInput {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface DeleteTagsOutput {
}
export interface DeleteTrialComponentRequest {
  TrialComponentName: string;
}
export interface DeleteTrialComponentResponse {
  TrialComponentArn?: string;
}
export interface DeleteTrialRequest {
  TrialName: string;
}
export interface DeleteTrialResponse {
  TrialArn?: string;
}
export interface DeleteUserProfileRequest {
  DomainId: string;
  UserProfileName: string;
}
export interface DeleteWorkforceRequest {
  WorkforceName: string;
}
export interface DeleteWorkforceResponse {
}
export interface DeleteWorkteamRequest {
  WorkteamName: string;
}
export interface DeleteWorkteamResponse {
  Success: boolean;
}
export type DependencyCopyPath = string;

export type DependencyOriginPath = string;

export interface DeployedImage {
  SpecifiedImage?: string;
  ResolvedImage?: string;
  ResolutionTime?: Date | string;
}
export type DeployedImages = Array<DeployedImage>;
export interface DeploymentConfig {
  BlueGreenUpdatePolicy?: BlueGreenUpdatePolicy;
  RollingUpdatePolicy?: RollingUpdatePolicy;
  AutoRollbackConfiguration?: AutoRollbackConfig;
}
export interface DeploymentConfiguration {
  RollingUpdatePolicy?: RollingDeploymentPolicy;
  WaitIntervalInSeconds?: number;
  AutoRollbackConfiguration?: Array<AlarmDetails>;
}
export interface DeploymentRecommendation {
  RecommendationStatus: RecommendationStatus;
  RealTimeInferenceRecommendations?: Array<RealTimeInferenceRecommendation>;
}
export interface DeploymentStage {
  StageName: string;
  DeviceSelectionConfig: DeviceSelectionConfig;
  DeploymentConfig?: EdgeDeploymentConfig;
}
export type DeploymentStageMaxResults = number;

export type DeploymentStages = Array<DeploymentStage>;
export type DeploymentStageStatusSummaries = Array<DeploymentStageStatusSummary>;
export interface DeploymentStageStatusSummary {
  StageName: string;
  DeviceSelectionConfig: DeviceSelectionConfig;
  DeploymentConfig: EdgeDeploymentConfig;
  DeploymentStatus: EdgeDeploymentStatus;
}
export interface DeregisterDevicesRequest {
  DeviceFleetName: string;
  DeviceNames: Array<string>;
}
export interface DerivedInformation {
  DerivedDataInputConfig?: string;
}
export interface DescribeActionRequest {
  ActionName: string;
}
export interface DescribeActionResponse {
  ActionName?: string;
  ActionArn?: string;
  Source?: ActionSource;
  ActionType?: string;
  Description?: string;
  Status?: ActionStatus;
  Properties?: Record<string, string>;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
  MetadataProperties?: MetadataProperties;
  LineageGroupArn?: string;
}
export interface DescribeAlgorithmInput {
  AlgorithmName: string;
}
export interface DescribeAlgorithmOutput {
  AlgorithmName: string;
  AlgorithmArn: string;
  AlgorithmDescription?: string;
  CreationTime: Date | string;
  TrainingSpecification: TrainingSpecification;
  InferenceSpecification?: InferenceSpecification;
  ValidationSpecification?: AlgorithmValidationSpecification;
  AlgorithmStatus: AlgorithmStatus;
  AlgorithmStatusDetails: AlgorithmStatusDetails;
  ProductId?: string;
  CertifyForMarketplace?: boolean;
}
export interface DescribeAppImageConfigRequest {
  AppImageConfigName: string;
}
export interface DescribeAppImageConfigResponse {
  AppImageConfigArn?: string;
  AppImageConfigName?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
  JupyterLabAppImageConfig?: JupyterLabAppImageConfig;
  CodeEditorAppImageConfig?: CodeEditorAppImageConfig;
}
export interface DescribeAppRequest {
  DomainId: string;
  UserProfileName?: string;
  SpaceName?: string;
  AppType: AppType;
  AppName: string;
}
export interface DescribeAppResponse {
  AppArn?: string;
  AppType?: AppType;
  AppName?: string;
  DomainId?: string;
  UserProfileName?: string;
  SpaceName?: string;
  Status?: AppStatus;
  RecoveryMode?: boolean;
  LastHealthCheckTimestamp?: Date | string;
  LastUserActivityTimestamp?: Date | string;
  CreationTime?: Date | string;
  FailureReason?: string;
  ResourceSpec?: ResourceSpec;
  BuiltInLifecycleConfigArn?: string;
}
export interface DescribeArtifactRequest {
  ArtifactArn: string;
}
export interface DescribeArtifactResponse {
  ArtifactName?: string;
  ArtifactArn?: string;
  Source?: ArtifactSource;
  ArtifactType?: string;
  Properties?: Record<string, string>;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
  MetadataProperties?: MetadataProperties;
  LineageGroupArn?: string;
}
export interface DescribeAutoMLJobRequest {
  AutoMLJobName: string;
}
export interface DescribeAutoMLJobResponse {
  AutoMLJobName: string;
  AutoMLJobArn: string;
  InputDataConfig: Array<AutoMLChannel>;
  OutputDataConfig: AutoMLOutputDataConfig;
  RoleArn: string;
  AutoMLJobObjective?: AutoMLJobObjective;
  ProblemType?: ProblemType;
  AutoMLJobConfig?: AutoMLJobConfig;
  CreationTime: Date | string;
  EndTime?: Date | string;
  LastModifiedTime: Date | string;
  FailureReason?: string;
  PartialFailureReasons?: Array<AutoMLPartialFailureReason>;
  BestCandidate?: AutoMLCandidate;
  AutoMLJobStatus: AutoMLJobStatus;
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus;
  GenerateCandidateDefinitionsOnly?: boolean;
  AutoMLJobArtifacts?: AutoMLJobArtifacts;
  ResolvedAttributes?: ResolvedAttributes;
  ModelDeployConfig?: ModelDeployConfig;
  ModelDeployResult?: ModelDeployResult;
}
export interface DescribeAutoMLJobV2Request {
  AutoMLJobName: string;
}
export interface DescribeAutoMLJobV2Response {
  AutoMLJobName: string;
  AutoMLJobArn: string;
  AutoMLJobInputDataConfig: Array<AutoMLJobChannel>;
  OutputDataConfig: AutoMLOutputDataConfig;
  RoleArn: string;
  AutoMLJobObjective?: AutoMLJobObjective;
  AutoMLProblemTypeConfig?: AutoMLProblemTypeConfig;
  AutoMLProblemTypeConfigName?: AutoMLProblemTypeConfigName;
  CreationTime: Date | string;
  EndTime?: Date | string;
  LastModifiedTime: Date | string;
  FailureReason?: string;
  PartialFailureReasons?: Array<AutoMLPartialFailureReason>;
  BestCandidate?: AutoMLCandidate;
  AutoMLJobStatus: AutoMLJobStatus;
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus;
  AutoMLJobArtifacts?: AutoMLJobArtifacts;
  ResolvedAttributes?: AutoMLResolvedAttributes;
  ModelDeployConfig?: ModelDeployConfig;
  ModelDeployResult?: ModelDeployResult;
  DataSplitConfig?: AutoMLDataSplitConfig;
  SecurityConfig?: AutoMLSecurityConfig;
  AutoMLComputeConfig?: AutoMLComputeConfig;
}
export interface DescribeClusterNodeRequest {
  ClusterName: string;
  NodeId: string;
}
export interface DescribeClusterNodeResponse {
  NodeDetails: ClusterNodeDetails;
}
export interface DescribeClusterRequest {
  ClusterName: string;
}
export interface DescribeClusterResponse {
  ClusterArn: string;
  ClusterName?: string;
  ClusterStatus: ClusterStatus;
  CreationTime?: Date | string;
  FailureMessage?: string;
  InstanceGroups: Array<ClusterInstanceGroupDetails>;
  VpcConfig?: VpcConfig;
  Orchestrator?: ClusterOrchestrator;
  NodeRecovery?: ClusterNodeRecovery;
}
export interface DescribeClusterSchedulerConfigRequest {
  ClusterSchedulerConfigId: string;
  ClusterSchedulerConfigVersion?: number;
}
export interface DescribeClusterSchedulerConfigResponse {
  ClusterSchedulerConfigArn: string;
  ClusterSchedulerConfigId: string;
  Name: string;
  ClusterSchedulerConfigVersion: number;
  Status: SchedulerResourceStatus;
  FailureReason?: string;
  ClusterArn?: string;
  SchedulerConfig?: SchedulerConfig;
  Description?: string;
  CreationTime: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
}
export interface DescribeCodeRepositoryInput {
  CodeRepositoryName: string;
}
export interface DescribeCodeRepositoryOutput {
  CodeRepositoryName: string;
  CodeRepositoryArn: string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  GitConfig?: GitConfig;
}
export interface DescribeCompilationJobRequest {
  CompilationJobName: string;
}
export interface DescribeCompilationJobResponse {
  CompilationJobName: string;
  CompilationJobArn: string;
  CompilationJobStatus: CompilationJobStatus;
  CompilationStartTime?: Date | string;
  CompilationEndTime?: Date | string;
  StoppingCondition: StoppingCondition;
  InferenceImage?: string;
  ModelPackageVersionArn?: string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  FailureReason: string;
  ModelArtifacts: ModelArtifacts;
  ModelDigests?: ModelDigests;
  RoleArn: string;
  InputConfig: InputConfig;
  OutputConfig: OutputConfig;
  VpcConfig?: NeoVpcConfig;
  DerivedInformation?: DerivedInformation;
}
export interface DescribeComputeQuotaRequest {
  ComputeQuotaId: string;
  ComputeQuotaVersion?: number;
}
export interface DescribeComputeQuotaResponse {
  ComputeQuotaArn: string;
  ComputeQuotaId: string;
  Name: string;
  Description?: string;
  ComputeQuotaVersion: number;
  Status: SchedulerResourceStatus;
  FailureReason?: string;
  ClusterArn?: string;
  ComputeQuotaConfig?: ComputeQuotaConfig;
  ComputeQuotaTarget: ComputeQuotaTarget;
  ActivationState?: ActivationState;
  CreationTime: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
}
export interface DescribeContextRequest {
  ContextName: string;
}
export interface DescribeContextResponse {
  ContextName?: string;
  ContextArn?: string;
  Source?: ContextSource;
  ContextType?: string;
  Description?: string;
  Properties?: Record<string, string>;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
  LineageGroupArn?: string;
}
export interface DescribeDataQualityJobDefinitionRequest {
  JobDefinitionName: string;
}
export interface DescribeDataQualityJobDefinitionResponse {
  JobDefinitionArn: string;
  JobDefinitionName: string;
  CreationTime: Date | string;
  DataQualityBaselineConfig?: DataQualityBaselineConfig;
  DataQualityAppSpecification: DataQualityAppSpecification;
  DataQualityJobInput: DataQualityJobInput;
  DataQualityJobOutputConfig: MonitoringOutputConfig;
  JobResources: MonitoringResources;
  NetworkConfig?: MonitoringNetworkConfig;
  RoleArn: string;
  StoppingCondition?: MonitoringStoppingCondition;
}
export interface DescribeDeviceFleetRequest {
  DeviceFleetName: string;
}
export interface DescribeDeviceFleetResponse {
  DeviceFleetName: string;
  DeviceFleetArn: string;
  OutputConfig: EdgeOutputConfig;
  Description?: string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  RoleArn?: string;
  IotRoleAlias?: string;
}
export interface DescribeDeviceRequest {
  NextToken?: string;
  DeviceName: string;
  DeviceFleetName: string;
}
export interface DescribeDeviceResponse {
  DeviceArn?: string;
  DeviceName: string;
  Description?: string;
  DeviceFleetName: string;
  IotThingName?: string;
  RegistrationTime: Date | string;
  LatestHeartbeat?: Date | string;
  Models?: Array<EdgeModel>;
  MaxModels?: number;
  NextToken?: string;
  AgentVersion?: string;
}
export interface DescribeDomainRequest {
  DomainId: string;
}
export interface DescribeDomainResponse {
  DomainArn?: string;
  DomainId?: string;
  DomainName?: string;
  HomeEfsFileSystemId?: string;
  SingleSignOnManagedApplicationInstanceId?: string;
  SingleSignOnApplicationArn?: string;
  Status?: DomainStatus;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  FailureReason?: string;
  SecurityGroupIdForDomainBoundary?: string;
  AuthMode?: AuthMode;
  DefaultUserSettings?: UserSettings;
  DomainSettings?: DomainSettings;
  AppNetworkAccessType?: AppNetworkAccessType;
  HomeEfsFileSystemKmsKeyId?: string;
  SubnetIds?: Array<string>;
  Url?: string;
  VpcId?: string;
  KmsKeyId?: string;
  AppSecurityGroupManagement?: AppSecurityGroupManagement;
  TagPropagation?: TagPropagation;
  DefaultSpaceSettings?: DefaultSpaceSettings;
}
export interface DescribeEdgeDeploymentPlanRequest {
  EdgeDeploymentPlanName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeEdgeDeploymentPlanResponse {
  EdgeDeploymentPlanArn: string;
  EdgeDeploymentPlanName: string;
  ModelConfigs: Array<EdgeDeploymentModelConfig>;
  DeviceFleetName: string;
  EdgeDeploymentSuccess?: number;
  EdgeDeploymentPending?: number;
  EdgeDeploymentFailed?: number;
  Stages: Array<DeploymentStageStatusSummary>;
  NextToken?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export interface DescribeEdgePackagingJobRequest {
  EdgePackagingJobName: string;
}
export interface DescribeEdgePackagingJobResponse {
  EdgePackagingJobArn: string;
  EdgePackagingJobName: string;
  CompilationJobName?: string;
  ModelName?: string;
  ModelVersion?: string;
  RoleArn?: string;
  OutputConfig?: EdgeOutputConfig;
  ResourceKey?: string;
  EdgePackagingJobStatus: EdgePackagingJobStatus;
  EdgePackagingJobStatusMessage?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  ModelArtifact?: string;
  ModelSignature?: string;
  PresetDeploymentOutput?: EdgePresetDeploymentOutput;
}
export interface DescribeEndpointConfigInput {
  EndpointConfigName: string;
}
export interface DescribeEndpointConfigOutput {
  EndpointConfigName: string;
  EndpointConfigArn: string;
  ProductionVariants: Array<ProductionVariant>;
  DataCaptureConfig?: DataCaptureConfig;
  KmsKeyId?: string;
  CreationTime: Date | string;
  AsyncInferenceConfig?: AsyncInferenceConfig;
  ExplainerConfig?: ExplainerConfig;
  ShadowProductionVariants?: Array<ProductionVariant>;
  ExecutionRoleArn?: string;
  VpcConfig?: VpcConfig;
  EnableNetworkIsolation?: boolean;
}
export interface DescribeEndpointInput {
  EndpointName: string;
}
export interface DescribeEndpointOutput {
  EndpointName: string;
  EndpointArn: string;
  EndpointConfigName?: string;
  ProductionVariants?: Array<ProductionVariantSummary>;
  DataCaptureConfig?: DataCaptureConfigSummary;
  EndpointStatus: EndpointStatus;
  FailureReason?: string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  LastDeploymentConfig?: DeploymentConfig;
  AsyncInferenceConfig?: AsyncInferenceConfig;
  PendingDeploymentSummary?: PendingDeploymentSummary;
  ExplainerConfig?: ExplainerConfig;
  ShadowProductionVariants?: Array<ProductionVariantSummary>;
}
export interface DescribeExperimentRequest {
  ExperimentName: string;
}
export interface DescribeExperimentResponse {
  ExperimentName?: string;
  ExperimentArn?: string;
  DisplayName?: string;
  Source?: ExperimentSource;
  Description?: string;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
}
export interface DescribeFeatureGroupRequest {
  FeatureGroupName: string;
  NextToken?: string;
}
export interface DescribeFeatureGroupResponse {
  FeatureGroupArn: string;
  FeatureGroupName: string;
  RecordIdentifierFeatureName: string;
  EventTimeFeatureName: string;
  FeatureDefinitions: Array<FeatureDefinition>;
  CreationTime: Date | string;
  LastModifiedTime?: Date | string;
  OnlineStoreConfig?: OnlineStoreConfig;
  OfflineStoreConfig?: OfflineStoreConfig;
  ThroughputConfig?: ThroughputConfigDescription;
  RoleArn?: string;
  FeatureGroupStatus?: FeatureGroupStatus;
  OfflineStoreStatus?: OfflineStoreStatus;
  LastUpdateStatus?: LastUpdateStatus;
  FailureReason?: string;
  Description?: string;
  NextToken: string;
  OnlineStoreTotalSizeBytes?: number;
}
export interface DescribeFeatureMetadataRequest {
  FeatureGroupName: string;
  FeatureName: string;
}
export interface DescribeFeatureMetadataResponse {
  FeatureGroupArn: string;
  FeatureGroupName: string;
  FeatureName: string;
  FeatureType: FeatureType;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  Description?: string;
  Parameters?: Array<FeatureParameter>;
}
export interface DescribeFlowDefinitionRequest {
  FlowDefinitionName: string;
}
export interface DescribeFlowDefinitionResponse {
  FlowDefinitionArn: string;
  FlowDefinitionName: string;
  FlowDefinitionStatus: FlowDefinitionStatus;
  CreationTime: Date | string;
  HumanLoopRequestSource?: HumanLoopRequestSource;
  HumanLoopActivationConfig?: HumanLoopActivationConfig;
  HumanLoopConfig?: HumanLoopConfig;
  OutputConfig: FlowDefinitionOutputConfig;
  RoleArn: string;
  FailureReason?: string;
}
export interface DescribeHubContentRequest {
  HubName: string;
  HubContentType: HubContentType;
  HubContentName: string;
  HubContentVersion?: string;
}
export interface DescribeHubContentResponse {
  HubContentName: string;
  HubContentArn: string;
  HubContentVersion: string;
  HubContentType: HubContentType;
  DocumentSchemaVersion: string;
  HubName: string;
  HubArn: string;
  HubContentDisplayName?: string;
  HubContentDescription?: string;
  HubContentMarkdown?: string;
  HubContentDocument: string;
  SageMakerPublicHubContentArn?: string;
  ReferenceMinVersion?: string;
  SupportStatus?: HubContentSupportStatus;
  HubContentSearchKeywords?: Array<string>;
  HubContentDependencies?: Array<HubContentDependency>;
  HubContentStatus: HubContentStatus;
  FailureReason?: string;
  CreationTime: Date | string;
  LastModifiedTime?: Date | string;
}
export interface DescribeHubRequest {
  HubName: string;
}
export interface DescribeHubResponse {
  HubName: string;
  HubArn: string;
  HubDisplayName?: string;
  HubDescription?: string;
  HubSearchKeywords?: Array<string>;
  S3StorageConfig?: HubS3StorageConfig;
  HubStatus: HubStatus;
  FailureReason?: string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
}
export interface DescribeHumanTaskUiRequest {
  HumanTaskUiName: string;
}
export interface DescribeHumanTaskUiResponse {
  HumanTaskUiArn: string;
  HumanTaskUiName: string;
  HumanTaskUiStatus?: HumanTaskUiStatus;
  CreationTime: Date | string;
  UiTemplate: UiTemplateInfo;
}
export interface DescribeHyperParameterTuningJobRequest {
  HyperParameterTuningJobName: string;
}
export interface DescribeHyperParameterTuningJobResponse {
  HyperParameterTuningJobName: string;
  HyperParameterTuningJobArn: string;
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig;
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;
  TrainingJobDefinitions?: Array<HyperParameterTrainingJobDefinition>;
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus;
  CreationTime: Date | string;
  HyperParameterTuningEndTime?: Date | string;
  LastModifiedTime?: Date | string;
  TrainingJobStatusCounters: TrainingJobStatusCounters;
  ObjectiveStatusCounters: ObjectiveStatusCounters;
  BestTrainingJob?: HyperParameterTrainingJobSummary;
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary;
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;
  Autotune?: Autotune;
  FailureReason?: string;
  TuningJobCompletionDetails?: HyperParameterTuningJobCompletionDetails;
  ConsumedResources?: HyperParameterTuningJobConsumedResources;
}
export interface DescribeImageRequest {
  ImageName: string;
}
export interface DescribeImageResponse {
  CreationTime?: Date | string;
  Description?: string;
  DisplayName?: string;
  FailureReason?: string;
  ImageArn?: string;
  ImageName?: string;
  ImageStatus?: ImageStatus;
  LastModifiedTime?: Date | string;
  RoleArn?: string;
}
export interface DescribeImageVersionRequest {
  ImageName: string;
  Version?: number;
  Alias?: string;
}
export interface DescribeImageVersionResponse {
  BaseImage?: string;
  ContainerImage?: string;
  CreationTime?: Date | string;
  FailureReason?: string;
  ImageArn?: string;
  ImageVersionArn?: string;
  ImageVersionStatus?: ImageVersionStatus;
  LastModifiedTime?: Date | string;
  Version?: number;
  VendorGuidance?: VendorGuidance;
  JobType?: JobType;
  MLFramework?: string;
  ProgrammingLang?: string;
  Processor?: Processor;
  Horovod?: boolean;
  ReleaseNotes?: string;
}
export interface DescribeInferenceComponentInput {
  InferenceComponentName: string;
}
export interface DescribeInferenceComponentOutput {
  InferenceComponentName: string;
  InferenceComponentArn: string;
  EndpointName: string;
  EndpointArn: string;
  VariantName?: string;
  FailureReason?: string;
  Specification?: InferenceComponentSpecificationSummary;
  RuntimeConfig?: InferenceComponentRuntimeConfigSummary;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  InferenceComponentStatus?: InferenceComponentStatus;
  LastDeploymentConfig?: InferenceComponentDeploymentConfig;
}
export interface DescribeInferenceExperimentRequest {
  Name: string;
}
export interface DescribeInferenceExperimentResponse {
  Arn: string;
  Name: string;
  Type: InferenceExperimentType;
  Schedule?: InferenceExperimentSchedule;
  Status: InferenceExperimentStatus;
  StatusReason?: string;
  Description?: string;
  CreationTime?: Date | string;
  CompletionTime?: Date | string;
  LastModifiedTime?: Date | string;
  RoleArn?: string;
  EndpointMetadata: EndpointMetadata;
  ModelVariants: Array<ModelVariantConfigSummary>;
  DataStorageConfig?: InferenceExperimentDataStorageConfig;
  ShadowModeConfig?: ShadowModeConfig;
  KmsKey?: string;
}
export interface DescribeInferenceRecommendationsJobRequest {
  JobName: string;
}
export interface DescribeInferenceRecommendationsJobResponse {
  JobName: string;
  JobDescription?: string;
  JobType: RecommendationJobType;
  JobArn: string;
  RoleArn: string;
  Status: RecommendationJobStatus;
  CreationTime: Date | string;
  CompletionTime?: Date | string;
  LastModifiedTime: Date | string;
  FailureReason?: string;
  InputConfig: RecommendationJobInputConfig;
  StoppingConditions?: RecommendationJobStoppingConditions;
  InferenceRecommendations?: Array<InferenceRecommendation>;
  EndpointPerformances?: Array<EndpointPerformance>;
}
export interface DescribeLabelingJobRequest {
  LabelingJobName: string;
}
export interface DescribeLabelingJobResponse {
  LabelingJobStatus: LabelingJobStatus;
  LabelCounters: LabelCounters;
  FailureReason?: string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  JobReferenceCode: string;
  LabelingJobName: string;
  LabelingJobArn: string;
  LabelAttributeName?: string;
  InputConfig: LabelingJobInputConfig;
  OutputConfig: LabelingJobOutputConfig;
  RoleArn: string;
  LabelCategoryConfigS3Uri?: string;
  StoppingConditions?: LabelingJobStoppingConditions;
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;
  HumanTaskConfig: HumanTaskConfig;
  Tags?: Array<Tag>;
  LabelingJobOutput?: LabelingJobOutput;
}
export interface DescribeLineageGroupRequest {
  LineageGroupName: string;
}
export interface DescribeLineageGroupResponse {
  LineageGroupName?: string;
  LineageGroupArn?: string;
  DisplayName?: string;
  Description?: string;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
}
export interface DescribeMlflowTrackingServerRequest {
  TrackingServerName: string;
}
export interface DescribeMlflowTrackingServerResponse {
  TrackingServerArn?: string;
  TrackingServerName?: string;
  ArtifactStoreUri?: string;
  TrackingServerSize?: TrackingServerSize;
  MlflowVersion?: string;
  RoleArn?: string;
  TrackingServerStatus?: TrackingServerStatus;
  TrackingServerMaintenanceStatus?: TrackingServerMaintenanceStatus;
  IsActive?: IsTrackingServerActive;
  TrackingServerUrl?: string;
  WeeklyMaintenanceWindowStart?: string;
  AutomaticModelRegistration?: boolean;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
}
export interface DescribeModelBiasJobDefinitionRequest {
  JobDefinitionName: string;
}
export interface DescribeModelBiasJobDefinitionResponse {
  JobDefinitionArn: string;
  JobDefinitionName: string;
  CreationTime: Date | string;
  ModelBiasBaselineConfig?: ModelBiasBaselineConfig;
  ModelBiasAppSpecification: ModelBiasAppSpecification;
  ModelBiasJobInput: ModelBiasJobInput;
  ModelBiasJobOutputConfig: MonitoringOutputConfig;
  JobResources: MonitoringResources;
  NetworkConfig?: MonitoringNetworkConfig;
  RoleArn: string;
  StoppingCondition?: MonitoringStoppingCondition;
}
export interface DescribeModelCardExportJobRequest {
  ModelCardExportJobArn: string;
}
export interface DescribeModelCardExportJobResponse {
  ModelCardExportJobName: string;
  ModelCardExportJobArn: string;
  Status: ModelCardExportJobStatus;
  ModelCardName: string;
  ModelCardVersion: number;
  OutputConfig: ModelCardExportOutputConfig;
  CreatedAt: Date | string;
  LastModifiedAt: Date | string;
  FailureReason?: string;
  ExportArtifacts?: ModelCardExportArtifacts;
}
export interface DescribeModelCardRequest {
  ModelCardName: string;
  ModelCardVersion?: number;
}
export interface DescribeModelCardResponse {
  ModelCardArn: string;
  ModelCardName: string;
  ModelCardVersion: number;
  Content: string;
  ModelCardStatus: ModelCardStatus;
  SecurityConfig?: ModelCardSecurityConfig;
  CreationTime: Date | string;
  CreatedBy: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
  ModelCardProcessingStatus?: ModelCardProcessingStatus;
}
export interface DescribeModelExplainabilityJobDefinitionRequest {
  JobDefinitionName: string;
}
export interface DescribeModelExplainabilityJobDefinitionResponse {
  JobDefinitionArn: string;
  JobDefinitionName: string;
  CreationTime: Date | string;
  ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig;
  ModelExplainabilityAppSpecification: ModelExplainabilityAppSpecification;
  ModelExplainabilityJobInput: ModelExplainabilityJobInput;
  ModelExplainabilityJobOutputConfig: MonitoringOutputConfig;
  JobResources: MonitoringResources;
  NetworkConfig?: MonitoringNetworkConfig;
  RoleArn: string;
  StoppingCondition?: MonitoringStoppingCondition;
}
export interface DescribeModelInput {
  ModelName: string;
}
export interface DescribeModelOutput {
  ModelName: string;
  PrimaryContainer?: ContainerDefinition;
  Containers?: Array<ContainerDefinition>;
  InferenceExecutionConfig?: InferenceExecutionConfig;
  ExecutionRoleArn?: string;
  VpcConfig?: VpcConfig;
  CreationTime: Date | string;
  ModelArn: string;
  EnableNetworkIsolation?: boolean;
  DeploymentRecommendation?: DeploymentRecommendation;
}
export interface DescribeModelPackageGroupInput {
  ModelPackageGroupName: string;
}
export interface DescribeModelPackageGroupOutput {
  ModelPackageGroupName: string;
  ModelPackageGroupArn: string;
  ModelPackageGroupDescription?: string;
  CreationTime: Date | string;
  CreatedBy: UserContext;
  ModelPackageGroupStatus: ModelPackageGroupStatus;
}
export interface DescribeModelPackageInput {
  ModelPackageName: string;
}
export interface DescribeModelPackageOutput {
  ModelPackageName: string;
  ModelPackageGroupName?: string;
  ModelPackageVersion?: number;
  ModelPackageArn: string;
  ModelPackageDescription?: string;
  CreationTime: Date | string;
  InferenceSpecification?: InferenceSpecification;
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;
  ValidationSpecification?: ModelPackageValidationSpecification;
  ModelPackageStatus: ModelPackageStatus;
  ModelPackageStatusDetails: ModelPackageStatusDetails;
  CertifyForMarketplace?: boolean;
  ModelApprovalStatus?: ModelApprovalStatus;
  CreatedBy?: UserContext;
  MetadataProperties?: MetadataProperties;
  ModelMetrics?: ModelMetrics;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
  ApprovalDescription?: string;
  Domain?: string;
  Task?: string;
  SamplePayloadUrl?: string;
  CustomerMetadataProperties?: Record<string, string>;
  DriftCheckBaselines?: DriftCheckBaselines;
  AdditionalInferenceSpecifications?: Array<AdditionalInferenceSpecificationDefinition>;
  SkipModelValidation?: SkipModelValidation;
  SourceUri?: string;
  SecurityConfig?: ModelPackageSecurityConfig;
  ModelCard?: ModelPackageModelCard;
  ModelLifeCycle?: ModelLifeCycle;
}
export interface DescribeModelQualityJobDefinitionRequest {
  JobDefinitionName: string;
}
export interface DescribeModelQualityJobDefinitionResponse {
  JobDefinitionArn: string;
  JobDefinitionName: string;
  CreationTime: Date | string;
  ModelQualityBaselineConfig?: ModelQualityBaselineConfig;
  ModelQualityAppSpecification: ModelQualityAppSpecification;
  ModelQualityJobInput: ModelQualityJobInput;
  ModelQualityJobOutputConfig: MonitoringOutputConfig;
  JobResources: MonitoringResources;
  NetworkConfig?: MonitoringNetworkConfig;
  RoleArn: string;
  StoppingCondition?: MonitoringStoppingCondition;
}
export interface DescribeMonitoringScheduleRequest {
  MonitoringScheduleName: string;
}
export interface DescribeMonitoringScheduleResponse {
  MonitoringScheduleArn: string;
  MonitoringScheduleName: string;
  MonitoringScheduleStatus: ScheduleStatus;
  MonitoringType?: MonitoringType;
  FailureReason?: string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  MonitoringScheduleConfig: MonitoringScheduleConfig;
  EndpointName?: string;
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;
}
export interface DescribeNotebookInstanceInput {
  NotebookInstanceName: string;
}
export interface DescribeNotebookInstanceLifecycleConfigInput {
  NotebookInstanceLifecycleConfigName: string;
}
export interface DescribeNotebookInstanceLifecycleConfigOutput {
  NotebookInstanceLifecycleConfigArn?: string;
  NotebookInstanceLifecycleConfigName?: string;
  OnCreate?: Array<NotebookInstanceLifecycleHook>;
  OnStart?: Array<NotebookInstanceLifecycleHook>;
  LastModifiedTime?: Date | string;
  CreationTime?: Date | string;
}
export interface DescribeNotebookInstanceOutput {
  NotebookInstanceArn?: string;
  NotebookInstanceName?: string;
  NotebookInstanceStatus?: NotebookInstanceStatus;
  FailureReason?: string;
  Url?: string;
  InstanceType?: InstanceType;
  SubnetId?: string;
  SecurityGroups?: Array<string>;
  RoleArn?: string;
  KmsKeyId?: string;
  NetworkInterfaceId?: string;
  LastModifiedTime?: Date | string;
  CreationTime?: Date | string;
  NotebookInstanceLifecycleConfigName?: string;
  DirectInternetAccess?: DirectInternetAccess;
  VolumeSizeInGB?: number;
  AcceleratorTypes?: Array<NotebookInstanceAcceleratorType>;
  DefaultCodeRepository?: string;
  AdditionalCodeRepositories?: Array<string>;
  RootAccess?: RootAccess;
  PlatformIdentifier?: string;
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
}
export interface DescribeOptimizationJobRequest {
  OptimizationJobName: string;
}
export interface DescribeOptimizationJobResponse {
  OptimizationJobArn: string;
  OptimizationJobStatus: OptimizationJobStatus;
  OptimizationStartTime?: Date | string;
  OptimizationEndTime?: Date | string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  FailureReason?: string;
  OptimizationJobName: string;
  ModelSource: OptimizationJobModelSource;
  OptimizationEnvironment?: Record<string, string>;
  DeploymentInstanceType: OptimizationJobDeploymentInstanceType;
  OptimizationConfigs: Array<OptimizationConfig>;
  OutputConfig: OptimizationJobOutputConfig;
  OptimizationOutput?: OptimizationOutput;
  RoleArn: string;
  StoppingCondition: StoppingCondition;
  VpcConfig?: OptimizationVpcConfig;
}
export interface DescribePartnerAppRequest {
  Arn: string;
}
export interface DescribePartnerAppResponse {
  Arn?: string;
  Name?: string;
  Type?: PartnerAppType;
  Status?: PartnerAppStatus;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  ExecutionRoleArn?: string;
  KmsKeyId?: string;
  BaseUrl?: string;
  MaintenanceConfig?: PartnerAppMaintenanceConfig;
  Tier?: string;
  Version?: string;
  ApplicationConfig?: PartnerAppConfig;
  AuthType?: PartnerAppAuthType;
  EnableIamSessionBasedIdentity?: boolean;
  Error?: ErrorInfo;
}
export interface DescribePipelineDefinitionForExecutionRequest {
  PipelineExecutionArn: string;
}
export interface DescribePipelineDefinitionForExecutionResponse {
  PipelineDefinition?: string;
  CreationTime?: Date | string;
}
export interface DescribePipelineExecutionRequest {
  PipelineExecutionArn: string;
}
export interface DescribePipelineExecutionResponse {
  PipelineArn?: string;
  PipelineExecutionArn?: string;
  PipelineExecutionDisplayName?: string;
  PipelineExecutionStatus?: PipelineExecutionStatus;
  PipelineExecutionDescription?: string;
  PipelineExperimentConfig?: PipelineExperimentConfig;
  FailureReason?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedBy?: UserContext;
  ParallelismConfiguration?: ParallelismConfiguration;
  SelectiveExecutionConfig?: SelectiveExecutionConfig;
}
export interface DescribePipelineRequest {
  PipelineName: string;
}
export interface DescribePipelineResponse {
  PipelineArn?: string;
  PipelineName?: string;
  PipelineDisplayName?: string;
  PipelineDefinition?: string;
  PipelineDescription?: string;
  RoleArn?: string;
  PipelineStatus?: PipelineStatus;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  LastRunTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedBy?: UserContext;
  ParallelismConfiguration?: ParallelismConfiguration;
}
export interface DescribeProcessingJobRequest {
  ProcessingJobName: string;
}
export interface DescribeProcessingJobResponse {
  ProcessingInputs?: Array<ProcessingInput>;
  ProcessingOutputConfig?: ProcessingOutputConfig;
  ProcessingJobName: string;
  ProcessingResources: ProcessingResources;
  StoppingCondition?: ProcessingStoppingCondition;
  AppSpecification: AppSpecification;
  Environment?: Record<string, string>;
  NetworkConfig?: NetworkConfig;
  RoleArn?: string;
  ExperimentConfig?: ExperimentConfig;
  ProcessingJobArn: string;
  ProcessingJobStatus: ProcessingJobStatus;
  ExitMessage?: string;
  FailureReason?: string;
  ProcessingEndTime?: Date | string;
  ProcessingStartTime?: Date | string;
  LastModifiedTime?: Date | string;
  CreationTime: Date | string;
  MonitoringScheduleArn?: string;
  AutoMLJobArn?: string;
  TrainingJobArn?: string;
}
export interface DescribeProjectInput {
  ProjectName: string;
}
export interface DescribeProjectOutput {
  ProjectArn: string;
  ProjectName: string;
  ProjectId: string;
  ProjectDescription?: string;
  ServiceCatalogProvisioningDetails?: ServiceCatalogProvisioningDetails;
  ServiceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;
  ProjectStatus: ProjectStatus;
  TemplateProviderDetails?: Array<TemplateProviderDetail>;
  CreatedBy?: UserContext;
  CreationTime: Date | string;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
}
export interface DescribeSpaceRequest {
  DomainId: string;
  SpaceName: string;
}
export interface DescribeSpaceResponse {
  DomainId?: string;
  SpaceArn?: string;
  SpaceName?: string;
  HomeEfsFileSystemUid?: string;
  Status?: SpaceStatus;
  LastModifiedTime?: Date | string;
  CreationTime?: Date | string;
  FailureReason?: string;
  SpaceSettings?: SpaceSettings;
  OwnershipSettings?: OwnershipSettings;
  SpaceSharingSettings?: SpaceSharingSettings;
  SpaceDisplayName?: string;
  Url?: string;
}
export interface DescribeStudioLifecycleConfigRequest {
  StudioLifecycleConfigName: string;
}
export interface DescribeStudioLifecycleConfigResponse {
  StudioLifecycleConfigArn?: string;
  StudioLifecycleConfigName?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  StudioLifecycleConfigContent?: string;
  StudioLifecycleConfigAppType?: StudioLifecycleConfigAppType;
}
export interface DescribeSubscribedWorkteamRequest {
  WorkteamArn: string;
}
export interface DescribeSubscribedWorkteamResponse {
  SubscribedWorkteam: SubscribedWorkteam;
}
export interface DescribeTrainingJobRequest {
  TrainingJobName: string;
}
export interface DescribeTrainingJobResponse {
  TrainingJobName: string;
  TrainingJobArn: string;
  TuningJobArn?: string;
  LabelingJobArn?: string;
  AutoMLJobArn?: string;
  ModelArtifacts: ModelArtifacts;
  TrainingJobStatus: TrainingJobStatus;
  SecondaryStatus: SecondaryStatus;
  FailureReason?: string;
  HyperParameters?: Record<string, string>;
  AlgorithmSpecification: AlgorithmSpecification;
  RoleArn?: string;
  InputDataConfig?: Array<Channel>;
  OutputDataConfig?: OutputDataConfig;
  ResourceConfig: ResourceConfig;
  WarmPoolStatus?: WarmPoolStatus;
  VpcConfig?: VpcConfig;
  StoppingCondition: StoppingCondition;
  CreationTime: Date | string;
  TrainingStartTime?: Date | string;
  TrainingEndTime?: Date | string;
  LastModifiedTime?: Date | string;
  SecondaryStatusTransitions?: Array<SecondaryStatusTransition>;
  FinalMetricDataList?: Array<MetricData>;
  EnableNetworkIsolation?: boolean;
  EnableInterContainerTrafficEncryption?: boolean;
  EnableManagedSpotTraining?: boolean;
  CheckpointConfig?: CheckpointConfig;
  TrainingTimeInSeconds?: number;
  BillableTimeInSeconds?: number;
  DebugHookConfig?: DebugHookConfig;
  ExperimentConfig?: ExperimentConfig;
  DebugRuleConfigurations?: Array<DebugRuleConfiguration>;
  TensorBoardOutputConfig?: TensorBoardOutputConfig;
  DebugRuleEvaluationStatuses?: Array<DebugRuleEvaluationStatus>;
  ProfilerConfig?: ProfilerConfig;
  ProfilerRuleConfigurations?: Array<ProfilerRuleConfiguration>;
  ProfilerRuleEvaluationStatuses?: Array<ProfilerRuleEvaluationStatus>;
  ProfilingStatus?: ProfilingStatus;
  Environment?: Record<string, string>;
  RetryStrategy?: RetryStrategy;
  RemoteDebugConfig?: RemoteDebugConfig;
  InfraCheckConfig?: InfraCheckConfig;
}
export interface DescribeTrainingPlanRequest {
  TrainingPlanName: string;
}
export interface DescribeTrainingPlanResponse {
  TrainingPlanArn: string;
  TrainingPlanName: string;
  Status: TrainingPlanStatus;
  StatusMessage?: string;
  DurationHours?: number;
  DurationMinutes?: number;
  StartTime?: Date | string;
  EndTime?: Date | string;
  UpfrontFee?: string;
  CurrencyCode?: string;
  TotalInstanceCount?: number;
  AvailableInstanceCount?: number;
  InUseInstanceCount?: number;
  TargetResources?: Array<SageMakerResourceName>;
  ReservedCapacitySummaries?: Array<ReservedCapacitySummary>;
}
export interface DescribeTransformJobRequest {
  TransformJobName: string;
}
export interface DescribeTransformJobResponse {
  TransformJobName: string;
  TransformJobArn: string;
  TransformJobStatus: TransformJobStatus;
  FailureReason?: string;
  ModelName: string;
  MaxConcurrentTransforms?: number;
  ModelClientConfig?: ModelClientConfig;
  MaxPayloadInMB?: number;
  BatchStrategy?: BatchStrategy;
  Environment?: Record<string, string>;
  TransformInput: TransformInput;
  TransformOutput?: TransformOutput;
  DataCaptureConfig?: BatchDataCaptureConfig;
  TransformResources: TransformResources;
  CreationTime: Date | string;
  TransformStartTime?: Date | string;
  TransformEndTime?: Date | string;
  LabelingJobArn?: string;
  AutoMLJobArn?: string;
  DataProcessing?: DataProcessing;
  ExperimentConfig?: ExperimentConfig;
}
export interface DescribeTrialComponentRequest {
  TrialComponentName: string;
}
export interface DescribeTrialComponentResponse {
  TrialComponentName?: string;
  TrialComponentArn?: string;
  DisplayName?: string;
  Source?: TrialComponentSource;
  Status?: TrialComponentStatus;
  StartTime?: Date | string;
  EndTime?: Date | string;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
  Parameters?: Record<string, TrialComponentParameterValue>;
  InputArtifacts?: Record<string, TrialComponentArtifact>;
  OutputArtifacts?: Record<string, TrialComponentArtifact>;
  MetadataProperties?: MetadataProperties;
  Metrics?: Array<TrialComponentMetricSummary>;
  LineageGroupArn?: string;
  Sources?: Array<TrialComponentSource>;
}
export interface DescribeTrialRequest {
  TrialName: string;
}
export interface DescribeTrialResponse {
  TrialName?: string;
  TrialArn?: string;
  DisplayName?: string;
  ExperimentName?: string;
  Source?: TrialSource;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
  MetadataProperties?: MetadataProperties;
}
export interface DescribeUserProfileRequest {
  DomainId: string;
  UserProfileName: string;
}
export interface DescribeUserProfileResponse {
  DomainId?: string;
  UserProfileArn?: string;
  UserProfileName?: string;
  HomeEfsFileSystemUid?: string;
  Status?: UserProfileStatus;
  LastModifiedTime?: Date | string;
  CreationTime?: Date | string;
  FailureReason?: string;
  SingleSignOnUserIdentifier?: string;
  SingleSignOnUserValue?: string;
  UserSettings?: UserSettings;
}
export interface DescribeWorkforceRequest {
  WorkforceName: string;
}
export interface DescribeWorkforceResponse {
  Workforce: Workforce;
}
export interface DescribeWorkteamRequest {
  WorkteamName: string;
}
export interface DescribeWorkteamResponse {
  Workteam: Workteam;
}
export type Description = string;

export interface DesiredWeightAndCapacity {
  VariantName: string;
  DesiredWeight?: number;
  DesiredInstanceCount?: number;
  ServerlessUpdateConfig?: ProductionVariantServerlessUpdateConfig;
}
export type DesiredWeightAndCapacityList = Array<DesiredWeightAndCapacity>;
export type DestinationS3Uri = string;

export type DetailedAlgorithmStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
export type DetailedModelPackageStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
export interface Device {
  DeviceName: string;
  Description?: string;
  IotThingName?: string;
}
export type DeviceArn = string;

export type DeviceDeploymentStatus = "ReadyToDeploy" | "InProgress" | "Deployed" | "Failed" | "Stopping" | "Stopped";
export type DeviceDeploymentSummaries = Array<DeviceDeploymentSummary>;
export interface DeviceDeploymentSummary {
  EdgeDeploymentPlanArn: string;
  EdgeDeploymentPlanName: string;
  StageName: string;
  DeployedStageName?: string;
  DeviceFleetName?: string;
  DeviceName: string;
  DeviceArn: string;
  DeviceDeploymentStatus?: DeviceDeploymentStatus;
  DeviceDeploymentStatusMessage?: string;
  Description?: string;
  DeploymentStartTime?: Date | string;
}
export type DeviceDescription = string;

export type DeviceFleetArn = string;

export type DeviceFleetDescription = string;

export type DeviceFleetSummaries = Array<DeviceFleetSummary>;
export interface DeviceFleetSummary {
  DeviceFleetArn: string;
  DeviceFleetName: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type DeviceName = string;

export type DeviceNames = Array<string>;
export type Devices = Array<Device>;
export interface DeviceSelectionConfig {
  DeviceSubsetType: DeviceSubsetType;
  Percentage?: number;
  DeviceNames?: Array<string>;
  DeviceNameContains?: string;
}
export interface DeviceStats {
  ConnectedDeviceCount: number;
  RegisteredDeviceCount: number;
}
export type DeviceSubsetType = "Percentage" | "Selection" | "NameContains";
export type DeviceSummaries = Array<DeviceSummary>;
export interface DeviceSummary {
  DeviceName: string;
  DeviceArn: string;
  Description?: string;
  DeviceFleetName?: string;
  IotThingName?: string;
  RegistrationTime?: Date | string;
  LatestHeartbeat?: Date | string;
  Models?: Array<EdgeModelSummary>;
  AgentVersion?: string;
}
export type Dimension = number;

export interface DirectDeploySettings {
  Status?: FeatureStatus;
}
export type DirectInternetAccess = "ENABLED" | "DISABLED";
export type Direction = "BOTH" | "ASCENDANTS" | "DESCENDANTS";
export type DirectoryPath = string;

export type DisableProfiler = boolean;

export interface DisableSagemakerServicecatalogPortfolioInput {
}
export interface DisableSagemakerServicecatalogPortfolioOutput {
}
export type DisassociateAdditionalCodeRepositories = boolean;

export type DisassociateDefaultCodeRepository = boolean;

export type DisassociateNotebookInstanceAcceleratorTypes = boolean;

export type DisassociateNotebookInstanceLifecycleConfig = boolean;

export interface DisassociateTrialComponentRequest {
  TrialComponentName: string;
  TrialName: string;
}
export interface DisassociateTrialComponentResponse {
  TrialComponentArn?: string;
  TrialArn?: string;
}
export interface DockerSettings {
  EnableDockerAccess?: FeatureStatus;
  VpcOnlyTrustedAccounts?: Array<string>;
}
export type DocumentSchemaVersion = string;

export type Dollars = number;

export type DomainArn = string;

export interface DomainDetails {
  DomainArn?: string;
  DomainId?: string;
  DomainName?: string;
  Status?: DomainStatus;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  Url?: string;
}
export type DomainId = string;

export type DomainList = Array<DomainDetails>;
export type DomainName = string;

export type DomainSecurityGroupIds = Array<string>;
export interface DomainSettings {
  SecurityGroupIds?: Array<string>;
  RStudioServerProDomainSettings?: RStudioServerProDomainSettings;
  ExecutionRoleIdentityConfig?: ExecutionRoleIdentityConfig;
  DockerSettings?: DockerSettings;
  AmazonQSettings?: AmazonQSettings;
  UnifiedStudioSettings?: UnifiedStudioSettings;
}
export interface DomainSettingsForUpdate {
  RStudioServerProDomainSettingsForUpdate?: RStudioServerProDomainSettingsForUpdate;
  ExecutionRoleIdentityConfig?: ExecutionRoleIdentityConfig;
  SecurityGroupIds?: Array<string>;
  DockerSettings?: DockerSettings;
  AmazonQSettings?: AmazonQSettings;
  UnifiedStudioSettings?: UnifiedStudioSettings;
}
export type DomainStatus = "Deleting" | "Failed" | "InService" | "Pending" | "Updating" | "Update_Failed" | "Delete_Failed";
export type Double = number;

export type DoubleParameterValue = number;

export interface DriftCheckBaselines {
  Bias?: DriftCheckBias;
  Explainability?: DriftCheckExplainability;
  ModelQuality?: DriftCheckModelQuality;
  ModelDataQuality?: DriftCheckModelDataQuality;
}
export interface DriftCheckBias {
  ConfigFile?: FileSource;
  PreTrainingConstraints?: MetricsSource;
  PostTrainingConstraints?: MetricsSource;
}
export interface DriftCheckExplainability {
  Constraints?: MetricsSource;
  ConfigFile?: FileSource;
}
export interface DriftCheckModelDataQuality {
  Statistics?: MetricsSource;
  Constraints?: MetricsSource;
}
export interface DriftCheckModelQuality {
  Statistics?: MetricsSource;
  Constraints?: MetricsSource;
}
export interface DynamicScalingConfiguration {
  MinCapacity?: number;
  MaxCapacity?: number;
  ScaleInCooldown?: number;
  ScaleOutCooldown?: number;
  ScalingPolicies?: Array<ScalingPolicy>;
}
export interface EbsStorageSettings {
  EbsVolumeSizeInGb: number;
}
export interface Ec2CapacityReservation {
  Ec2CapacityReservationId?: string;
  TotalInstanceCount?: number;
  AvailableInstanceCount?: number;
  UsedByCurrentEndpoint?: number;
}
export type Ec2CapacityReservationId = string;

export type Ec2CapacityReservationsList = Array<Ec2CapacityReservation>;
export interface Edge {
  SourceArn?: string;
  DestinationArn?: string;
  AssociationType?: AssociationEdgeType;
}
export interface EdgeDeploymentConfig {
  FailureHandlingPolicy: FailureHandlingPolicy;
}
export interface EdgeDeploymentModelConfig {
  ModelHandle: string;
  EdgePackagingJobName: string;
}
export type EdgeDeploymentModelConfigs = Array<EdgeDeploymentModelConfig>;
export type EdgeDeploymentPlanArn = string;

export type EdgeDeploymentPlanSummaries = Array<EdgeDeploymentPlanSummary>;
export interface EdgeDeploymentPlanSummary {
  EdgeDeploymentPlanArn: string;
  EdgeDeploymentPlanName: string;
  DeviceFleetName: string;
  EdgeDeploymentSuccess: number;
  EdgeDeploymentPending: number;
  EdgeDeploymentFailed: number;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export interface EdgeDeploymentStatus {
  StageStatus: StageStatus;
  EdgeDeploymentSuccessInStage: number;
  EdgeDeploymentPendingInStage: number;
  EdgeDeploymentFailedInStage: number;
  EdgeDeploymentStatusMessage?: string;
  EdgeDeploymentStageStartTime?: Date | string;
}
export interface EdgeModel {
  ModelName: string;
  ModelVersion: string;
  LatestSampleTime?: Date | string;
  LatestInference?: Date | string;
}
export type EdgeModels = Array<EdgeModel>;
export interface EdgeModelStat {
  ModelName: string;
  ModelVersion: string;
  OfflineDeviceCount: number;
  ConnectedDeviceCount: number;
  ActiveDeviceCount: number;
  SamplingDeviceCount: number;
}
export type EdgeModelStats = Array<EdgeModelStat>;
export type EdgeModelSummaries = Array<EdgeModelSummary>;
export interface EdgeModelSummary {
  ModelName: string;
  ModelVersion: string;
}
export interface EdgeOutputConfig {
  S3OutputLocation: string;
  KmsKeyId?: string;
  PresetDeploymentType?: EdgePresetDeploymentType;
  PresetDeploymentConfig?: string;
}
export type EdgePackagingJobArn = string;

export type EdgePackagingJobStatus = "Starting" | "InProgress" | "Completed" | "Failed" | "Stopping" | "Stopped";
export type EdgePackagingJobSummaries = Array<EdgePackagingJobSummary>;
export interface EdgePackagingJobSummary {
  EdgePackagingJobArn: string;
  EdgePackagingJobName: string;
  EdgePackagingJobStatus: EdgePackagingJobStatus;
  CompilationJobName?: string;
  ModelName?: string;
  ModelVersion?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type EdgePresetDeploymentArtifact = string;

export interface EdgePresetDeploymentOutput {
  Type: EdgePresetDeploymentType;
  Artifact?: string;
  Status?: EdgePresetDeploymentStatus;
  StatusMessage?: string;
}
export type EdgePresetDeploymentStatus = "Completed" | "Failed";
export type EdgePresetDeploymentType = "GreengrassV2Component";
export type Edges = Array<Edge>;
export type EdgeVersion = string;

export interface EFSFileSystem {
  FileSystemId: string;
}
export interface EFSFileSystemConfig {
  FileSystemId: string;
  FileSystemPath?: string;
}
export type EfsUid = string;

export type EksClusterArn = string;

export interface EmrServerlessComputeConfig {
  ExecutionRoleARN: string;
}
export interface EmrServerlessSettings {
  ExecutionRoleArn?: string;
  Status?: FeatureStatus;
}
export interface EmrSettings {
  AssumableRoleArns?: Array<string>;
  ExecutionRoleArns?: Array<string>;
}
export interface EMRStepMetadata {
  ClusterId?: string;
  StepId?: string;
  StepName?: string;
  LogFilePath?: string;
}
export type EnableCapture = boolean;

export type EnabledOrDisabled = "Enabled" | "Disabled";
export type EnableInfraCheck = boolean;

export type EnableIotRoleAlias = boolean;

export type EnableRemoteDebug = boolean;

export interface EnableSagemakerServicecatalogPortfolioInput {
}
export interface EnableSagemakerServicecatalogPortfolioOutput {
}
export type EnableSessionTagChaining = boolean;

export interface Endpoint {
  EndpointName: string;
  EndpointArn: string;
  EndpointConfigName: string;
  ProductionVariants?: Array<ProductionVariantSummary>;
  DataCaptureConfig?: DataCaptureConfigSummary;
  EndpointStatus: EndpointStatus;
  FailureReason?: string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  MonitoringSchedules?: Array<MonitoringSchedule>;
  Tags?: Array<Tag>;
  ShadowProductionVariants?: Array<ProductionVariantSummary>;
}
export type EndpointArn = string;

export type EndpointConfigArn = string;

export type EndpointConfigName = string;

export type EndpointConfigNameContains = string;

export type EndpointConfigSortKey = "Name" | "CreationTime";
export interface EndpointConfigStepMetadata {
  Arn?: string;
}
export interface EndpointConfigSummary {
  EndpointConfigName: string;
  EndpointConfigArn: string;
  CreationTime: Date | string;
}
export type EndpointConfigSummaryList = Array<EndpointConfigSummary>;
export interface EndpointInfo {
  EndpointName?: string;
}
export interface EndpointInput {
  EndpointName: string;
  LocalPath: string;
  S3InputMode?: ProcessingS3InputMode;
  S3DataDistributionType?: ProcessingS3DataDistributionType;
  FeaturesAttribute?: string;
  InferenceAttribute?: string;
  ProbabilityAttribute?: string;
  ProbabilityThresholdAttribute?: number;
  StartTimeOffset?: string;
  EndTimeOffset?: string;
  ExcludeFeaturesAttribute?: string;
}
export interface EndpointInputConfiguration {
  InstanceType?: ProductionVariantInstanceType;
  ServerlessConfig?: ProductionVariantServerlessConfig;
  InferenceSpecificationName?: string;
  EnvironmentParameterRanges?: EnvironmentParameterRanges;
}
export type EndpointInputConfigurations = Array<EndpointInputConfiguration>;
export interface EndpointMetadata {
  EndpointName: string;
  EndpointConfigName?: string;
  EndpointStatus?: EndpointStatus;
  FailureReason?: string;
}
export type EndpointName = string;

export type EndpointNameContains = string;

export interface EndpointOutputConfiguration {
  EndpointName: string;
  VariantName: string;
  InstanceType?: ProductionVariantInstanceType;
  InitialInstanceCount?: number;
  ServerlessConfig?: ProductionVariantServerlessConfig;
}
export interface EndpointPerformance {
  Metrics: InferenceMetrics;
  EndpointInfo: EndpointInfo;
}
export type EndpointPerformances = Array<EndpointPerformance>;
export type Endpoints = Array<EndpointInfo>;
export type EndpointSortKey = "Name" | "CreationTime" | "Status";
export type EndpointStatus = "OUT_OF_SERVICE" | "CREATING" | "UPDATING" | "SYSTEM_UPDATING" | "ROLLING_BACK" | "IN_SERVICE" | "DELETING" | "FAILED" | "UPDATE_ROLLBACK_FAILED";
export interface EndpointStepMetadata {
  Arn?: string;
}
export interface EndpointSummary {
  EndpointName: string;
  EndpointArn: string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  EndpointStatus: EndpointStatus;
}
export type EndpointSummaryList = Array<EndpointSummary>;
export type EntityDescription = string;

export type EntityName = string;

export type EnvironmentKey = string;

export type EnvironmentMap = Record<string, string>;
export interface EnvironmentParameter {
  Key: string;
  ValueType: string;
  Value: string;
}
export interface EnvironmentParameterRanges {
  CategoricalParameterRanges?: Array<CategoricalParameter>;
}
export type EnvironmentParameters = Array<EnvironmentParameter>;
export type EnvironmentValue = string;

export interface ErrorInfo {
  Code?: string;
  Reason?: string;
}
export type ExcludeFeaturesAttribute = string;

export type ExecutionRoleArns = Array<string>;
export type ExecutionRoleIdentityConfig = "USER_PROFILE_NAME" | "DISABLED";
export type ExecutionStatus = "PENDING" | "COMPLETED" | "COMPLETED_WITH_VIOLATIONS" | "IN_PROGRESS" | "FAILED" | "STOPPING" | "STOPPED";
export type ExitMessage = string;

export interface Experiment {
  ExperimentName?: string;
  ExperimentArn?: string;
  DisplayName?: string;
  Source?: ExperimentSource;
  Description?: string;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
  Tags?: Array<Tag>;
}
export type ExperimentArn = string;

export interface ExperimentConfig {
  ExperimentName?: string;
  TrialName?: string;
  TrialComponentDisplayName?: string;
  RunName?: string;
}
export type ExperimentDescription = string;

export type ExperimentEntityName = string;

export type ExperimentEntityNameOrArn = string;

export interface ExperimentSource {
  SourceArn: string;
  SourceType?: string;
}
export type ExperimentSourceArn = string;

export type ExperimentSummaries = Array<ExperimentSummary>;
export interface ExperimentSummary {
  ExperimentArn?: string;
  ExperimentName?: string;
  DisplayName?: string;
  ExperimentSource?: ExperimentSource;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type ExpiresInSeconds = number;

export interface Explainability {
  Report?: MetricsSource;
}
export type ExplainabilityLocation = string;

export interface ExplainerConfig {
  ClarifyExplainerConfig?: ClarifyExplainerConfig;
}
export interface FailStepMetadata {
  ErrorMessage?: string;
}
export type FailureHandlingPolicy = "RollbackOnFailure" | "DoNothing";
export type FailureReason = string;

export type FairShare = "ENABLED" | "DISABLED";
export type FairShareWeight = number;

export type FeatureAdditions = Array<FeatureDefinition>;
export interface FeatureDefinition {
  FeatureName: string;
  FeatureType: FeatureType;
  CollectionType?: CollectionType;
  CollectionConfig?: CollectionConfig;
}
export type FeatureDefinitions = Array<FeatureDefinition>;
export type FeatureDescription = string;

export interface FeatureGroup {
  FeatureGroupArn?: string;
  FeatureGroupName?: string;
  RecordIdentifierFeatureName?: string;
  EventTimeFeatureName?: string;
  FeatureDefinitions?: Array<FeatureDefinition>;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  OnlineStoreConfig?: OnlineStoreConfig;
  OfflineStoreConfig?: OfflineStoreConfig;
  RoleArn?: string;
  FeatureGroupStatus?: FeatureGroupStatus;
  OfflineStoreStatus?: OfflineStoreStatus;
  LastUpdateStatus?: LastUpdateStatus;
  FailureReason?: string;
  Description?: string;
  Tags?: Array<Tag>;
}
export type FeatureGroupArn = string;

export type FeatureGroupMaxResults = number;

export type FeatureGroupName = string;

export type FeatureGroupNameContains = string;

export type FeatureGroupNameOrArn = string;

export type FeatureGroupSortBy = "NAME" | "FEATURE_GROUP_STATUS" | "OFFLINE_STORE_STATUS" | "CREATION_TIME";
export type FeatureGroupSortOrder = "ASCENDING" | "DESCENDING";
export type FeatureGroupStatus = "CREATING" | "CREATED" | "CREATE_FAILED" | "DELETING" | "DELETE_FAILED";
export type FeatureGroupSummaries = Array<FeatureGroupSummary>;
export interface FeatureGroupSummary {
  FeatureGroupName: string;
  FeatureGroupArn: string;
  CreationTime: Date | string;
  FeatureGroupStatus?: FeatureGroupStatus;
  OfflineStoreStatus?: OfflineStoreStatus;
}
export interface FeatureMetadata {
  FeatureGroupArn?: string;
  FeatureGroupName?: string;
  FeatureName?: string;
  FeatureType?: FeatureType;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  Description?: string;
  Parameters?: Array<FeatureParameter>;
}
export type FeatureName = string;

export interface FeatureParameter {
  Key?: string;
  Value?: string;
}
export type FeatureParameterAdditions = Array<FeatureParameter>;
export type FeatureParameterKey = string;

export type FeatureParameterRemovals = Array<string>;
export type FeatureParameters = Array<FeatureParameter>;
export type FeatureParameterValue = string;

export type FeatureStatus = "Enabled" | "Disabled";
export type FeatureType = "INTEGRAL" | "FRACTIONAL" | "STRING";
export interface FileSource {
  ContentType?: string;
  ContentDigest?: string;
  S3Uri: string;
}
export type FileSystemAccessMode = "RW" | "RO";
export interface FileSystemConfig {
  MountPath?: string;
  DefaultUid?: number;
  DefaultGid?: number;
}
export interface FileSystemDataSource {
  FileSystemId: string;
  FileSystemAccessMode: FileSystemAccessMode;
  FileSystemType: FileSystemType;
  DirectoryPath: string;
}
export type FileSystemId = string;

export type FileSystemPath = string;

export type FileSystemType = "EFS" | "FSXLUSTRE";
export type FillingTransformationMap = Record<FillingType, string>;
export type FillingTransformations = Record<string, Record<FillingType, string>>;
export type FillingTransformationValue = string;

export type FillingType = "Frontfill" | "Middlefill" | "Backfill" | "Futurefill" | "FrontfillValue" | "MiddlefillValue" | "BackfillValue" | "FuturefillValue";
export interface Filter {
  Name: string;
  Operator?: Operator;
  Value?: string;
}
export type FilterList = Array<Filter>;
export type FilterValue = string;

export interface FinalAutoMLJobObjectiveMetric {
  Type?: AutoMLJobObjectiveType;
  MetricName: AutoMLMetricEnum;
  Value: number;
  StandardMetricName?: AutoMLMetricEnum;
}
export interface FinalHyperParameterTuningJobObjectiveMetric {
  Type?: HyperParameterTuningJobObjectiveType;
  MetricName: string;
  Value: number;
}
export type FinalMetricDataList = Array<MetricData>;
export type FlatInvocations = "CONTINUE" | "STOP";
export type Float = number;

export type FlowDefinitionArn = string;

export type FlowDefinitionName = string;

export interface FlowDefinitionOutputConfig {
  S3OutputPath: string;
  KmsKeyId?: string;
}
export type FlowDefinitionStatus = "INITIALIZING" | "ACTIVE" | "FAILED" | "DELETING";
export type FlowDefinitionSummaries = Array<FlowDefinitionSummary>;
export interface FlowDefinitionSummary {
  FlowDefinitionName: string;
  FlowDefinitionArn: string;
  FlowDefinitionStatus: FlowDefinitionStatus;
  CreationTime: Date | string;
  FailureReason?: string;
}
export type FlowDefinitionTaskAvailabilityLifetimeInSeconds = number;

export type FlowDefinitionTaskCount = number;

export type FlowDefinitionTaskDescription = string;

export type FlowDefinitionTaskKeyword = string;

export type FlowDefinitionTaskKeywords = Array<string>;
export type FlowDefinitionTaskTimeLimitInSeconds = number;

export type FlowDefinitionTaskTitle = string;

export type ForecastFrequency = string;

export type ForecastHorizon = number;

export type ForecastQuantile = string;

export type ForecastQuantiles = Array<string>;
export type Framework = "TENSORFLOW" | "KERAS" | "MXNET" | "ONNX" | "PYTORCH" | "XGBOOST" | "TFLITE" | "DARKNET" | "SKLEARN";
export type FrameworkVersion = string;

export interface FSxLustreFileSystem {
  FileSystemId: string;
}
export interface FSxLustreFileSystemConfig {
  FileSystemId: string;
  FileSystemPath?: string;
}
export type GenerateCandidateDefinitionsOnly = boolean;

export interface GenerativeAiSettings {
  AmazonBedrockRoleArn?: string;
}
export interface GetDeviceFleetReportRequest {
  DeviceFleetName: string;
}
export interface GetDeviceFleetReportResponse {
  DeviceFleetArn: string;
  DeviceFleetName: string;
  OutputConfig?: EdgeOutputConfig;
  Description?: string;
  ReportGenerated?: Date | string;
  DeviceStats?: DeviceStats;
  AgentVersions?: Array<AgentVersion>;
  ModelStats?: Array<EdgeModelStat>;
}
export interface GetLineageGroupPolicyRequest {
  LineageGroupName: string;
}
export interface GetLineageGroupPolicyResponse {
  LineageGroupArn?: string;
  ResourcePolicy?: string;
}
export interface GetModelPackageGroupPolicyInput {
  ModelPackageGroupName: string;
}
export interface GetModelPackageGroupPolicyOutput {
  ResourcePolicy: string;
}
export interface GetSagemakerServicecatalogPortfolioStatusInput {
}
export interface GetSagemakerServicecatalogPortfolioStatusOutput {
  Status?: SagemakerServicecatalogStatus;
}
export interface GetScalingConfigurationRecommendationRequest {
  InferenceRecommendationsJobName: string;
  RecommendationId?: string;
  EndpointName?: string;
  TargetCpuUtilizationPerCore?: number;
  ScalingPolicyObjective?: ScalingPolicyObjective;
}
export interface GetScalingConfigurationRecommendationResponse {
  InferenceRecommendationsJobName?: string;
  RecommendationId?: string;
  EndpointName?: string;
  TargetCpuUtilizationPerCore?: number;
  ScalingPolicyObjective?: ScalingPolicyObjective;
  Metric?: ScalingPolicyMetric;
  DynamicScalingConfiguration?: DynamicScalingConfiguration;
}
export interface GetSearchSuggestionsRequest {
  Resource: ResourceType;
  SuggestionQuery?: SuggestionQuery;
}
export interface GetSearchSuggestionsResponse {
  PropertyNameSuggestions?: Array<PropertyNameSuggestion>;
}
export type Gid = number;

export interface GitConfig {
  RepositoryUrl: string;
  Branch?: string;
  SecretArn?: string;
}
export interface GitConfigForUpdate {
  SecretArn?: string;
}
export type GitConfigUrl = string;

export type Group = string;

export type GroupingAttributeName = string;

export type GroupingAttributeNames = Array<string>;
export type Groups = Array<string>;
export type HiddenAppTypesList = Array<AppType>;
export type HiddenInstanceTypesList = Array<AppInstanceType>;
export type HiddenMlToolsList = Array<MlTools>;
export interface HiddenSageMakerImage {
  SageMakerImageName?: SageMakerImageName;
  VersionAliases?: Array<string>;
}
export type HiddenSageMakerImageVersionAliasesList = Array<HiddenSageMakerImage>;
export type HolidayConfig = Array<HolidayConfigAttributes>;
export interface HolidayConfigAttributes {
  CountryCode?: string;
}
export type HookParameters = Record<string, string>;
export type Horovod = boolean;

export interface HubAccessConfig {
  HubContentArn: string;
}
export type HubArn = string;

export type HubContentArn = string;

export interface HubContentDependency {
  DependencyOriginPath?: string;
  DependencyCopyPath?: string;
}
export type HubContentDependencyList = Array<HubContentDependency>;
export type HubContentDescription = string;

export type HubContentDisplayName = string;

export type HubContentDocument = string;

export interface HubContentInfo {
  HubContentName: string;
  HubContentArn: string;
  SageMakerPublicHubContentArn?: string;
  HubContentVersion: string;
  HubContentType: HubContentType;
  DocumentSchemaVersion: string;
  HubContentDisplayName?: string;
  HubContentDescription?: string;
  SupportStatus?: HubContentSupportStatus;
  HubContentSearchKeywords?: Array<string>;
  HubContentStatus: HubContentStatus;
  CreationTime: Date | string;
  OriginalCreationTime?: Date | string;
}
export type HubContentInfoList = Array<HubContentInfo>;
export type HubContentMarkdown = string;

export type HubContentName = string;

export type HubContentSearchKeywordList = Array<string>;
export type HubContentSortBy = "HUB_CONTENT_NAME" | "CREATION_TIME" | "HUB_CONTENT_STATUS";
export type HubContentStatus = "AVAILABLE" | "IMPORTING" | "DELETING" | "IMPORT_FAILED" | "DELETE_FAILED";
export type HubContentSupportStatus = "SUPPORTED" | "DEPRECATED" | "RESTRICTED";
export type HubContentType = "MODEL" | "NOTEBOOK" | "MODEL_REFERENCE";
export type HubContentVersion = string;

export type HubDescription = string;

export type HubDisplayName = string;

export interface HubInfo {
  HubName: string;
  HubArn: string;
  HubDisplayName?: string;
  HubDescription?: string;
  HubSearchKeywords?: Array<string>;
  HubStatus: HubStatus;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
}
export type HubInfoList = Array<HubInfo>;
export type HubName = string;

export type HubNameOrArn = string;

export interface HubS3StorageConfig {
  S3OutputPath?: string;
}
export type HubSearchKeyword = string;

export type HubSearchKeywordList = Array<string>;
export type HubSortBy = "HUB_NAME" | "CREATION_TIME" | "HUB_STATUS" | "ACCOUNT_ID_OWNER";
export type HubStatus = "IN_SERVICE" | "CREATING" | "UPDATING" | "DELETING" | "CREATE_FAILED" | "UPDATE_FAILED" | "DELETE_FAILED";
export type HumanLoopActivationConditions = string;

export interface HumanLoopActivationConditionsConfig {
  HumanLoopActivationConditions: string;
}
export interface HumanLoopActivationConfig {
  HumanLoopActivationConditionsConfig: HumanLoopActivationConditionsConfig;
}
export interface HumanLoopConfig {
  WorkteamArn: string;
  HumanTaskUiArn: string;
  TaskTitle: string;
  TaskDescription: string;
  TaskCount: number;
  TaskAvailabilityLifetimeInSeconds?: number;
  TaskTimeLimitInSeconds?: number;
  TaskKeywords?: Array<string>;
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
}
export interface HumanLoopRequestSource {
  AwsManagedHumanLoopRequestSource: AwsManagedHumanLoopRequestSource;
}
export interface HumanTaskConfig {
  WorkteamArn: string;
  UiConfig: UiConfig;
  PreHumanTaskLambdaArn?: string;
  TaskKeywords?: Array<string>;
  TaskTitle: string;
  TaskDescription: string;
  NumberOfHumanWorkersPerDataObject: number;
  TaskTimeLimitInSeconds: number;
  TaskAvailabilityLifetimeInSeconds?: number;
  MaxConcurrentTaskCount?: number;
  AnnotationConsolidationConfig?: AnnotationConsolidationConfig;
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
}
export type HumanTaskUiArn = string;

export type HumanTaskUiName = string;

export type HumanTaskUiStatus = "ACTIVE" | "DELETING";
export type HumanTaskUiSummaries = Array<HumanTaskUiSummary>;
export interface HumanTaskUiSummary {
  HumanTaskUiName: string;
  HumanTaskUiArn: string;
  CreationTime: Date | string;
}
export interface HyperbandStrategyConfig {
  MinResource?: number;
  MaxResource?: number;
}
export type HyperbandStrategyMaxResource = number;

export type HyperbandStrategyMinResource = number;

export interface HyperParameterAlgorithmSpecification {
  TrainingImage?: string;
  TrainingInputMode: TrainingInputMode;
  AlgorithmName?: string;
  MetricDefinitions?: Array<MetricDefinition>;
}
export type HyperParameterKey = string;

export type HyperParameters = Record<string, string>;
export type HyperParameterScalingType = "AUTO" | "LINEAR" | "LOGARITHMIC" | "REVERSE_LOGARITHMIC";
export interface HyperParameterSpecification {
  Name: string;
  Description?: string;
  Type: ParameterType;
  Range?: ParameterRange;
  IsTunable?: boolean;
  IsRequired?: boolean;
  DefaultValue?: string;
}
export type HyperParameterSpecifications = Array<HyperParameterSpecification>;
export interface HyperParameterTrainingJobDefinition {
  DefinitionName?: string;
  TuningObjective?: HyperParameterTuningJobObjective;
  HyperParameterRanges?: ParameterRanges;
  StaticHyperParameters?: Record<string, string>;
  AlgorithmSpecification: HyperParameterAlgorithmSpecification;
  RoleArn: string;
  InputDataConfig?: Array<Channel>;
  VpcConfig?: VpcConfig;
  OutputDataConfig: OutputDataConfig;
  ResourceConfig?: ResourceConfig;
  HyperParameterTuningResourceConfig?: HyperParameterTuningResourceConfig;
  StoppingCondition: StoppingCondition;
  EnableNetworkIsolation?: boolean;
  EnableInterContainerTrafficEncryption?: boolean;
  EnableManagedSpotTraining?: boolean;
  CheckpointConfig?: CheckpointConfig;
  RetryStrategy?: RetryStrategy;
  Environment?: Record<string, string>;
}
export type HyperParameterTrainingJobDefinitionName = string;

export type HyperParameterTrainingJobDefinitions = Array<HyperParameterTrainingJobDefinition>;
export type HyperParameterTrainingJobEnvironmentKey = string;

export type HyperParameterTrainingJobEnvironmentMap = Record<string, string>;
export type HyperParameterTrainingJobEnvironmentValue = string;

export type HyperParameterTrainingJobSummaries = Array<HyperParameterTrainingJobSummary>;
export interface HyperParameterTrainingJobSummary {
  TrainingJobDefinitionName?: string;
  TrainingJobName: string;
  TrainingJobArn: string;
  TuningJobName?: string;
  CreationTime: Date | string;
  TrainingStartTime?: Date | string;
  TrainingEndTime?: Date | string;
  TrainingJobStatus: TrainingJobStatus;
  TunedHyperParameters: Record<string, string>;
  FailureReason?: string;
  FinalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric;
  ObjectiveStatus?: ObjectiveStatus;
}
export type HyperParameterTuningAllocationStrategy = "PRIORITIZED";
export interface HyperParameterTuningInstanceConfig {
  InstanceType: TrainingInstanceType;
  InstanceCount: number;
  VolumeSizeInGB: number;
}
export type HyperParameterTuningInstanceConfigs = Array<HyperParameterTuningInstanceConfig>;
export type HyperParameterTuningJobArn = string;

export interface HyperParameterTuningJobCompletionDetails {
  NumberOfTrainingJobsObjectiveNotImproving?: number;
  ConvergenceDetectedTime?: Date | string;
}
export interface HyperParameterTuningJobConfig {
  Strategy: HyperParameterTuningJobStrategyType;
  StrategyConfig?: HyperParameterTuningJobStrategyConfig;
  HyperParameterTuningJobObjective?: HyperParameterTuningJobObjective;
  ResourceLimits: ResourceLimits;
  ParameterRanges?: ParameterRanges;
  TrainingJobEarlyStoppingType?: TrainingJobEarlyStoppingType;
  TuningJobCompletionCriteria?: TuningJobCompletionCriteria;
  RandomSeed?: number;
}
export interface HyperParameterTuningJobConsumedResources {
  RuntimeInSeconds?: number;
}
export type HyperParameterTuningJobName = string;

export interface HyperParameterTuningJobObjective {
  Type: HyperParameterTuningJobObjectiveType;
  MetricName: string;
}
export type HyperParameterTuningJobObjectives = Array<HyperParameterTuningJobObjective>;
export type HyperParameterTuningJobObjectiveType = "MAXIMIZE" | "MINIMIZE";
export interface HyperParameterTuningJobSearchEntity {
  HyperParameterTuningJobName?: string;
  HyperParameterTuningJobArn?: string;
  HyperParameterTuningJobConfig?: HyperParameterTuningJobConfig;
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;
  TrainingJobDefinitions?: Array<HyperParameterTrainingJobDefinition>;
  HyperParameterTuningJobStatus?: HyperParameterTuningJobStatus;
  CreationTime?: Date | string;
  HyperParameterTuningEndTime?: Date | string;
  LastModifiedTime?: Date | string;
  TrainingJobStatusCounters?: TrainingJobStatusCounters;
  ObjectiveStatusCounters?: ObjectiveStatusCounters;
  BestTrainingJob?: HyperParameterTrainingJobSummary;
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary;
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;
  FailureReason?: string;
  TuningJobCompletionDetails?: HyperParameterTuningJobCompletionDetails;
  ConsumedResources?: HyperParameterTuningJobConsumedResources;
  Tags?: Array<Tag>;
}
export type HyperParameterTuningJobSortByOptions = "Name" | "Status" | "CreationTime";
export type HyperParameterTuningJobStatus = "COMPLETED" | "IN_PROGRESS" | "FAILED" | "STOPPED" | "STOPPING" | "DELETING" | "DELETE_FAILED";
export interface HyperParameterTuningJobStrategyConfig {
  HyperbandStrategyConfig?: HyperbandStrategyConfig;
}
export type HyperParameterTuningJobStrategyType = "BAYESIAN" | "RANDOM" | "HYPERBAND" | "GRID";
export type HyperParameterTuningJobSummaries = Array<HyperParameterTuningJobSummary>;
export interface HyperParameterTuningJobSummary {
  HyperParameterTuningJobName: string;
  HyperParameterTuningJobArn: string;
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus;
  Strategy: HyperParameterTuningJobStrategyType;
  CreationTime: Date | string;
  HyperParameterTuningEndTime?: Date | string;
  LastModifiedTime?: Date | string;
  TrainingJobStatusCounters: TrainingJobStatusCounters;
  ObjectiveStatusCounters: ObjectiveStatusCounters;
  ResourceLimits?: ResourceLimits;
}
export interface HyperParameterTuningJobWarmStartConfig {
  ParentHyperParameterTuningJobs: Array<ParentHyperParameterTuningJob>;
  WarmStartType: HyperParameterTuningJobWarmStartType;
}
export type HyperParameterTuningJobWarmStartType = "IDENTICAL_DATA_AND_ALGORITHM" | "TRANSFER_LEARNING";
export type HyperParameterTuningMaxRuntimeInSeconds = number;

export interface HyperParameterTuningResourceConfig {
  InstanceType?: TrainingInstanceType;
  InstanceCount?: number;
  VolumeSizeInGB?: number;
  VolumeKmsKeyId?: string;
  AllocationStrategy?: HyperParameterTuningAllocationStrategy;
  InstanceConfigs?: Array<HyperParameterTuningInstanceConfig>;
}
export type HyperParameterValue = string;

export interface IamIdentity {
  Arn?: string;
  PrincipalId?: string;
  SourceIdentity?: string;
}
export interface IamPolicyConstraints {
  SourceIp?: EnabledOrDisabled;
  VpcSourceIp?: EnabledOrDisabled;
}
export type IdempotencyToken = string;

export interface IdentityProviderOAuthSetting {
  DataSourceName?: DataSourceName;
  Status?: FeatureStatus;
  SecretArn?: string;
}
export type IdentityProviderOAuthSettings = Array<IdentityProviderOAuthSetting>;
export interface IdleSettings {
  LifecycleManagement?: LifecycleManagement;
  IdleTimeoutInMinutes?: number;
  MinIdleTimeoutInMinutes?: number;
  MaxIdleTimeoutInMinutes?: number;
}
export type IdleTimeoutInMinutes = number;

export interface Image {
  CreationTime: Date | string;
  Description?: string;
  DisplayName?: string;
  FailureReason?: string;
  ImageArn: string;
  ImageName: string;
  ImageStatus: ImageStatus;
  LastModifiedTime: Date | string;
}
export type ImageArn = string;

export type ImageBaseImage = string;

export interface ImageClassificationJobConfig {
  CompletionCriteria?: AutoMLJobCompletionCriteria;
}
export interface ImageConfig {
  RepositoryAccessMode: RepositoryAccessMode;
  RepositoryAuthConfig?: RepositoryAuthConfig;
}
export type ImageContainerImage = string;

export type ImageDeleteProperty = string;

export type ImageDeletePropertyList = Array<string>;
export type ImageDescription = string;

export type ImageDigest = string;

export type ImageDisplayName = string;

export type ImageName = string;

export type ImageNameContains = string;

export type Images = Array<Image>;
export type ImageSortBy = "CREATION_TIME" | "LAST_MODIFIED_TIME" | "IMAGE_NAME";
export type ImageSortOrder = "ASCENDING" | "DESCENDING";
export type ImageStatus = "CREATING" | "CREATED" | "CREATE_FAILED" | "UPDATING" | "UPDATE_FAILED" | "DELETING" | "DELETE_FAILED";
export type ImageUri = string;

export interface ImageVersion {
  CreationTime: Date | string;
  FailureReason?: string;
  ImageArn: string;
  ImageVersionArn: string;
  ImageVersionStatus: ImageVersionStatus;
  LastModifiedTime: Date | string;
  Version: number;
}
export type ImageVersionAlias = string;

export type ImageVersionAliasPattern = string;

export type ImageVersionArn = string;

export type ImageVersionNumber = number;

export type ImageVersions = Array<ImageVersion>;
export type ImageVersionSortBy = "CREATION_TIME" | "LAST_MODIFIED_TIME" | "VERSION";
export type ImageVersionSortOrder = "ASCENDING" | "DESCENDING";
export type ImageVersionStatus = "CREATING" | "CREATED" | "CREATE_FAILED" | "DELETING" | "DELETE_FAILED";
export interface ImportHubContentRequest {
  HubContentName: string;
  HubContentVersion?: string;
  HubContentType: HubContentType;
  DocumentSchemaVersion: string;
  HubName: string;
  HubContentDisplayName?: string;
  HubContentDescription?: string;
  HubContentMarkdown?: string;
  HubContentDocument: string;
  SupportStatus?: HubContentSupportStatus;
  HubContentSearchKeywords?: Array<string>;
  Tags?: Array<Tag>;
}
export interface ImportHubContentResponse {
  HubArn: string;
  HubContentArn: string;
}
export type InferenceComponentArn = string;

export interface InferenceComponentCapacitySize {
  Type: InferenceComponentCapacitySizeType;
  Value: number;
}
export type InferenceComponentCapacitySizeType = "COPY_COUNT" | "CAPACITY_PERCENT";
export interface InferenceComponentComputeResourceRequirements {
  NumberOfCpuCoresRequired?: number;
  NumberOfAcceleratorDevicesRequired?: number;
  MinMemoryRequiredInMb: number;
  MaxMemoryRequiredInMb?: number;
}
export interface InferenceComponentContainerSpecification {
  Image?: string;
  ArtifactUrl?: string;
  Environment?: Record<string, string>;
}
export interface InferenceComponentContainerSpecificationSummary {
  DeployedImage?: DeployedImage;
  ArtifactUrl?: string;
  Environment?: Record<string, string>;
}
export type InferenceComponentCopyCount = number;

export interface InferenceComponentDeploymentConfig {
  RollingUpdatePolicy: InferenceComponentRollingUpdatePolicy;
  AutoRollbackConfiguration?: AutoRollbackConfig;
}
export type InferenceComponentName = string;

export type InferenceComponentNameContains = string;

export interface InferenceComponentRollingUpdatePolicy {
  MaximumBatchSize: InferenceComponentCapacitySize;
  WaitIntervalInSeconds: number;
  MaximumExecutionTimeoutInSeconds?: number;
  RollbackMaximumBatchSize?: InferenceComponentCapacitySize;
}
export interface InferenceComponentRuntimeConfig {
  CopyCount: number;
}
export interface InferenceComponentRuntimeConfigSummary {
  DesiredCopyCount?: number;
  CurrentCopyCount?: number;
}
export type InferenceComponentSortKey = "Name" | "CreationTime" | "Status";
export interface InferenceComponentSpecification {
  ModelName?: string;
  Container?: InferenceComponentContainerSpecification;
  StartupParameters?: InferenceComponentStartupParameters;
  ComputeResourceRequirements?: InferenceComponentComputeResourceRequirements;
  BaseInferenceComponentName?: string;
}
export interface InferenceComponentSpecificationSummary {
  ModelName?: string;
  Container?: InferenceComponentContainerSpecificationSummary;
  StartupParameters?: InferenceComponentStartupParameters;
  ComputeResourceRequirements?: InferenceComponentComputeResourceRequirements;
  BaseInferenceComponentName?: string;
}
export interface InferenceComponentStartupParameters {
  ModelDataDownloadTimeoutInSeconds?: number;
  ContainerStartupHealthCheckTimeoutInSeconds?: number;
}
export type InferenceComponentStatus = "IN_SERVICE" | "CREATING" | "UPDATING" | "FAILED" | "DELETING";
export interface InferenceComponentSummary {
  CreationTime: Date | string;
  InferenceComponentArn: string;
  InferenceComponentName: string;
  EndpointArn: string;
  EndpointName: string;
  VariantName: string;
  InferenceComponentStatus?: InferenceComponentStatus;
  LastModifiedTime: Date | string;
}
export type InferenceComponentSummaryList = Array<InferenceComponentSummary>;
export interface InferenceExecutionConfig {
  Mode: InferenceExecutionMode;
}
export type InferenceExecutionMode = "SERIAL" | "DIRECT";
export type InferenceExperimentArn = string;

export interface InferenceExperimentDataStorageConfig {
  Destination: string;
  KmsKey?: string;
  ContentType?: CaptureContentTypeHeader;
}
export type InferenceExperimentDescription = string;

export type InferenceExperimentList = Array<InferenceExperimentSummary>;
export type InferenceExperimentName = string;

export interface InferenceExperimentSchedule {
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export type InferenceExperimentStatus = "CREATING" | "CREATED" | "UPDATING" | "RUNNING" | "STARTING" | "STOPPING" | "COMPLETED" | "CANCELLED";
export type InferenceExperimentStatusReason = string;

export type InferenceExperimentStopDesiredState = "COMPLETED" | "CANCELLED";
export interface InferenceExperimentSummary {
  Name: string;
  Type: InferenceExperimentType;
  Schedule?: InferenceExperimentSchedule;
  Status: InferenceExperimentStatus;
  StatusReason?: string;
  Description?: string;
  CreationTime: Date | string;
  CompletionTime?: Date | string;
  LastModifiedTime: Date | string;
  RoleArn?: string;
}
export type InferenceExperimentType = "SHADOW_MODE";
export interface InferenceHubAccessConfig {
  HubContentArn: string;
}
export type InferenceImage = string;

export interface InferenceMetrics {
  MaxInvocations: number;
  ModelLatency: number;
}
export interface InferenceRecommendation {
  RecommendationId?: string;
  Metrics?: RecommendationMetrics;
  EndpointConfiguration: EndpointOutputConfiguration;
  ModelConfiguration: ModelConfiguration;
  InvocationEndTime?: Date | string;
  InvocationStartTime?: Date | string;
}
export type InferenceRecommendations = Array<InferenceRecommendation>;
export interface InferenceRecommendationsJob {
  JobName: string;
  JobDescription: string;
  JobType: RecommendationJobType;
  JobArn: string;
  Status: RecommendationJobStatus;
  CreationTime: Date | string;
  CompletionTime?: Date | string;
  RoleArn: string;
  LastModifiedTime: Date | string;
  FailureReason?: string;
  ModelName?: string;
  SamplePayloadUrl?: string;
  ModelPackageVersionArn?: string;
}
export type InferenceRecommendationsJobs = Array<InferenceRecommendationsJob>;
export interface InferenceRecommendationsJobStep {
  StepType: RecommendationStepType;
  JobName: string;
  Status: RecommendationJobStatus;
  InferenceBenchmark?: RecommendationJobInferenceBenchmark;
}
export type InferenceRecommendationsJobSteps = Array<InferenceRecommendationsJobStep>;
export interface InferenceSpecification {
  Containers: Array<ModelPackageContainerDefinition>;
  SupportedTransformInstanceTypes?: Array<TransformInstanceType>;
  SupportedRealtimeInferenceInstanceTypes?: Array<ProductionVariantInstanceType>;
  SupportedContentTypes?: Array<string>;
  SupportedResponseMIMETypes?: Array<string>;
}
export type InferenceSpecificationName = string;

export interface InfraCheckConfig {
  EnableInfraCheck?: boolean;
}
export type InitialInstanceCount = number;

export type InitialNumberOfUsers = number;

export type InitialTaskCount = number;

export interface InputConfig {
  S3Uri: string;
  DataInputConfig?: string;
  Framework: Framework;
  FrameworkVersion?: string;
}
export type InputDataConfig = Array<Channel>;
export type InputMode = "PIPE" | "FILE";
export type InputModes = Array<TrainingInputMode>;
export type InstanceCount = number;

export interface InstanceGroup {
  InstanceType: TrainingInstanceType;
  InstanceCount: number;
  InstanceGroupName: string;
}
export type InstanceGroupName = string;

export type InstanceGroupNames = Array<string>;
export type InstanceGroups = Array<InstanceGroup>;
export type InstanceGroupStatus = "INSERVICE" | "CREATING" | "UPDATING" | "FAILED" | "DEGRADED" | "SYSTEMUPDATING" | "DELETING";
export type InstanceGroupTrainingPlanStatus = string;

export interface InstanceMetadataServiceConfiguration {
  MinimumInstanceMetadataServiceVersion: string;
}
export type InstanceType = "ML_T2_MEDIUM" | "ML_T2_LARGE" | "ML_T2_XLARGE" | "ML_T2_2XLARGE" | "ML_T3_MEDIUM" | "ML_T3_LARGE" | "ML_T3_XLARGE" | "ML_T3_2XLARGE" | "ML_M4_XLARGE" | "ML_M4_2XLARGE" | "ML_M4_4XLARGE" | "ML_M4_10XLARGE" | "ML_M4_16XLARGE" | "ML_M5_XLARGE" | "ML_M5_2XLARGE" | "ML_M5_4XLARGE" | "ML_M5_12XLARGE" | "ML_M5_24XLARGE" | "ML_M5D_LARGE" | "ML_M5D_XLARGE" | "ML_M5D_2XLARGE" | "ML_M5D_4XLARGE" | "ML_M5D_8XLARGE" | "ML_M5D_12XLARGE" | "ML_M5D_16XLARGE" | "ML_M5D_24XLARGE" | "ML_C4_XLARGE" | "ML_C4_2XLARGE" | "ML_C4_4XLARGE" | "ML_C4_8XLARGE" | "ML_C5_XLARGE" | "ML_C5_2XLARGE" | "ML_C5_4XLARGE" | "ML_C5_9XLARGE" | "ML_C5_18XLARGE" | "ML_C5D_XLARGE" | "ML_C5D_2XLARGE" | "ML_C5D_4XLARGE" | "ML_C5D_9XLARGE" | "ML_C5D_18XLARGE" | "ML_P2_XLARGE" | "ML_P2_8XLARGE" | "ML_P2_16XLARGE" | "ML_P3_2XLARGE" | "ML_P3_8XLARGE" | "ML_P3_16XLARGE" | "ML_P3DN_24XLARGE" | "ML_G4DN_XLARGE" | "ML_G4DN_2XLARGE" | "ML_G4DN_4XLARGE" | "ML_G4DN_8XLARGE" | "ML_G4DN_12XLARGE" | "ML_G4DN_16XLARGE" | "ML_R5_LARGE" | "ML_R5_XLARGE" | "ML_R5_2XLARGE" | "ML_R5_4XLARGE" | "ML_R5_8XLARGE" | "ML_R5_12XLARGE" | "ML_R5_16XLARGE" | "ML_R5_24XLARGE" | "ML_G5_XLARGE" | "ML_G5_2XLARGE" | "ML_G5_4XLARGE" | "ML_G5_8XLARGE" | "ML_G5_16XLARGE" | "ML_G5_12XLARGE" | "ML_G5_24XLARGE" | "ML_G5_48XLARGE" | "ML_INF1_XLARGE" | "ML_INF1_2XLARGE" | "ML_INF1_6XLARGE" | "ML_INF1_24XLARGE" | "ML_TRN1_2XLARGE" | "ML_TRN1_32XLARGE" | "ML_TRN1N_32XLARGE" | "ML_INF2_XLARGE" | "ML_INF2_8XLARGE" | "ML_INF2_24XLARGE" | "ML_INF2_48XLARGE" | "ML_P4D_24XLARGE" | "ML_P4DE_24XLARGE" | "ML_P5_48XLARGE" | "ML_M6I_LARGE" | "ML_M6I_XLARGE" | "ML_M6I_2XLARGE" | "ML_M6I_4XLARGE" | "ML_M6I_8XLARGE" | "ML_M6I_12XLARGE" | "ML_M6I_16XLARGE" | "ML_M6I_24XLARGE" | "ML_M6I_32XLARGE" | "ML_M7I_LARGE" | "ML_M7I_XLARGE" | "ML_M7I_2XLARGE" | "ML_M7I_4XLARGE" | "ML_M7I_8XLARGE" | "ML_M7I_12XLARGE" | "ML_M7I_16XLARGE" | "ML_M7I_24XLARGE" | "ML_M7I_48XLARGE" | "ML_C6I_LARGE" | "ML_C6I_XLARGE" | "ML_C6I_2XLARGE" | "ML_C6I_4XLARGE" | "ML_C6I_8XLARGE" | "ML_C6I_12XLARGE" | "ML_C6I_16XLARGE" | "ML_C6I_24XLARGE" | "ML_C6I_32XLARGE" | "ML_C7I_LARGE" | "ML_C7I_XLARGE" | "ML_C7I_2XLARGE" | "ML_C7I_4XLARGE" | "ML_C7I_8XLARGE" | "ML_C7I_12XLARGE" | "ML_C7I_16XLARGE" | "ML_C7I_24XLARGE" | "ML_C7I_48XLARGE" | "ML_R6I_LARGE" | "ML_R6I_XLARGE" | "ML_R6I_2XLARGE" | "ML_R6I_4XLARGE" | "ML_R6I_8XLARGE" | "ML_R6I_12XLARGE" | "ML_R6I_16XLARGE" | "ML_R6I_24XLARGE" | "ML_R6I_32XLARGE" | "ML_R7I_LARGE" | "ML_R7I_XLARGE" | "ML_R7I_2XLARGE" | "ML_R7I_4XLARGE" | "ML_R7I_8XLARGE" | "ML_R7I_12XLARGE" | "ML_R7I_16XLARGE" | "ML_R7I_24XLARGE" | "ML_R7I_48XLARGE" | "ML_M6ID_LARGE" | "ML_M6ID_XLARGE" | "ML_M6ID_2XLARGE" | "ML_M6ID_4XLARGE" | "ML_M6ID_8XLARGE" | "ML_M6ID_12XLARGE" | "ML_M6ID_16XLARGE" | "ML_M6ID_24XLARGE" | "ML_M6ID_32XLARGE" | "ML_C6ID_LARGE" | "ML_C6ID_XLARGE" | "ML_C6ID_2XLARGE" | "ML_C6ID_4XLARGE" | "ML_C6ID_8XLARGE" | "ML_C6ID_12XLARGE" | "ML_C6ID_16XLARGE" | "ML_C6ID_24XLARGE" | "ML_C6ID_32XLARGE" | "ML_R6ID_LARGE" | "ML_R6ID_XLARGE" | "ML_R6ID_2XLARGE" | "ML_R6ID_4XLARGE" | "ML_R6ID_8XLARGE" | "ML_R6ID_12XLARGE" | "ML_R6ID_16XLARGE" | "ML_R6ID_24XLARGE" | "ML_R6ID_32XLARGE" | "ML_G6_XLARGE" | "ML_G6_2XLARGE" | "ML_G6_4XLARGE" | "ML_G6_8XLARGE" | "ML_G6_12XLARGE" | "ML_G6_16XLARGE" | "ML_G6_24XLARGE" | "ML_G6_48XLARGE";
export type Integer = number;

export interface IntegerParameterRange {
  Name: string;
  MinValue: string;
  MaxValue: string;
  ScalingType?: HyperParameterScalingType;
}
export type IntegerParameterRanges = Array<IntegerParameterRange>;
export interface IntegerParameterRangeSpecification {
  MinValue: string;
  MaxValue: string;
}
export type InUseInstanceCount = number;

export type InvocationEndTime = Date | string;

export type InvocationsMaxRetries = number;

export type InvocationStartTime = Date | string;

export type InvocationsTimeoutInSeconds = number;

export type IotRoleAlias = string;

export type IsTrackingServerActive = "ACTIVE" | "INACTIVE";
export type ItemIdentifierAttributeName = string;

export type JobDurationInSeconds = number;

export type JobReferenceCode = string;

export type JobReferenceCodeContains = string;

export type JobType = "TRAINING" | "INFERENCE" | "NOTEBOOK_KERNEL";
export type JoinSource = "INPUT" | "NONE";
export type JsonContentType = string;

export type JsonContentTypes = Array<string>;
export type JsonPath = string;

export interface JupyterLabAppImageConfig {
  FileSystemConfig?: FileSystemConfig;
  ContainerConfig?: ContainerConfig;
}
export interface JupyterLabAppSettings {
  DefaultResourceSpec?: ResourceSpec;
  CustomImages?: Array<CustomImage>;
  LifecycleConfigArns?: Array<string>;
  CodeRepositories?: Array<CodeRepository>;
  AppLifecycleManagement?: AppLifecycleManagement;
  EmrSettings?: EmrSettings;
  BuiltInLifecycleConfigArn?: string;
}
export interface JupyterServerAppSettings {
  DefaultResourceSpec?: ResourceSpec;
  LifecycleConfigArns?: Array<string>;
  CodeRepositories?: Array<CodeRepository>;
}
export type KeepAlivePeriodInSeconds = number;

export interface KendraSettings {
  Status?: FeatureStatus;
}
export type KernelDisplayName = string;

export interface KernelGatewayAppSettings {
  DefaultResourceSpec?: ResourceSpec;
  CustomImages?: Array<CustomImage>;
  LifecycleConfigArns?: Array<string>;
}
export interface KernelGatewayImageConfig {
  KernelSpecs: Array<KernelSpec>;
  FileSystemConfig?: FileSystemConfig;
}
export type KernelName = string;

export interface KernelSpec {
  Name: string;
  DisplayName?: string;
}
export type KernelSpecs = Array<KernelSpec>;
export type Key = string;

export type KmsKeyId = string;

export type LabelAttributeName = string;

export type LabelCounter = number;

export interface LabelCounters {
  TotalLabeled?: number;
  HumanLabeled?: number;
  MachineLabeled?: number;
  FailedNonRetryableError?: number;
  Unlabeled?: number;
}
export interface LabelCountersForWorkteam {
  HumanLabeled?: number;
  PendingHuman?: number;
  Total?: number;
}
export interface LabelingJobAlgorithmsConfig {
  LabelingJobAlgorithmSpecificationArn: string;
  InitialActiveLearningModelArn?: string;
  LabelingJobResourceConfig?: LabelingJobResourceConfig;
}
export type LabelingJobAlgorithmSpecificationArn = string;

export type LabelingJobArn = string;

export interface LabelingJobDataAttributes {
  ContentClassifiers?: Array<ContentClassifier>;
}
export interface LabelingJobDataSource {
  S3DataSource?: LabelingJobS3DataSource;
  SnsDataSource?: LabelingJobSnsDataSource;
}
export interface LabelingJobForWorkteamSummary {
  LabelingJobName?: string;
  JobReferenceCode: string;
  WorkRequesterAccountId: string;
  CreationTime: Date | string;
  LabelCounters?: LabelCountersForWorkteam;
  NumberOfHumanWorkersPerDataObject?: number;
}
export type LabelingJobForWorkteamSummaryList = Array<LabelingJobForWorkteamSummary>;
export interface LabelingJobInputConfig {
  DataSource: LabelingJobDataSource;
  DataAttributes?: LabelingJobDataAttributes;
}
export type LabelingJobName = string;

export interface LabelingJobOutput {
  OutputDatasetS3Uri: string;
  FinalActiveLearningModelArn?: string;
}
export interface LabelingJobOutputConfig {
  S3OutputPath: string;
  KmsKeyId?: string;
  SnsTopicArn?: string;
}
export interface LabelingJobResourceConfig {
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
export interface LabelingJobS3DataSource {
  ManifestS3Uri: string;
}
export interface LabelingJobSnsDataSource {
  SnsTopicArn: string;
}
export type LabelingJobStatus = "INITIALIZING" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "STOPPING" | "STOPPED";
export interface LabelingJobStoppingConditions {
  MaxHumanLabeledObjectCount?: number;
  MaxPercentageOfInputDatasetLabeled?: number;
}
export interface LabelingJobSummary {
  LabelingJobName: string;
  LabelingJobArn: string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  LabelingJobStatus: LabelingJobStatus;
  LabelCounters: LabelCounters;
  WorkteamArn: string;
  PreHumanTaskLambdaArn?: string;
  AnnotationConsolidationLambdaArn?: string;
  FailureReason?: string;
  LabelingJobOutput?: LabelingJobOutput;
  InputConfig?: LabelingJobInputConfig;
}
export type LabelingJobSummaryList = Array<LabelingJobSummary>;
export type LambdaFunctionArn = string;

export interface LambdaStepMetadata {
  Arn?: string;
  OutputParameters?: Array<OutputParameter>;
}
export type LandingUri = string;

export type LastModifiedTime = Date | string;

export interface LastUpdateStatus {
  Status: LastUpdateStatusValue;
  FailureReason?: string;
}
export type LastUpdateStatusValue = "SUCCESSFUL" | "FAILED" | "IN_PROGRESS";
export type LifecycleConfigArns = Array<string>;
export type LifecycleManagement = "Enabled" | "Disabled";
export type LineageEntityParameters = Record<string, string>;
export type LineageGroupArn = string;

export type LineageGroupNameOrArn = string;

export type LineageGroupSummaries = Array<LineageGroupSummary>;
export interface LineageGroupSummary {
  LineageGroupArn?: string;
  LineageGroupName?: string;
  DisplayName?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type LineageType = "TRIAL_COMPONENT" | "ARTIFACT" | "CONTEXT" | "ACTION";
export interface ListActionsRequest {
  SourceUri?: string;
  ActionType?: string;
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  SortBy?: SortActionsBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListActionsResponse {
  ActionSummaries?: Array<ActionSummary>;
  NextToken?: string;
}
export interface ListAlgorithmsInput {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  MaxResults?: number;
  NameContains?: string;
  NextToken?: string;
  SortBy?: AlgorithmSortBy;
  SortOrder?: SortOrder;
}
export interface ListAlgorithmsOutput {
  AlgorithmSummaryList: Array<AlgorithmSummary>;
  NextToken?: string;
}
export interface ListAliasesRequest {
  ImageName: string;
  Alias?: string;
  Version?: number;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAliasesResponse {
  SageMakerImageVersionAliases?: Array<string>;
  NextToken?: string;
}
export interface ListAppImageConfigsRequest {
  MaxResults?: number;
  NextToken?: string;
  NameContains?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
  ModifiedTimeBefore?: Date | string;
  ModifiedTimeAfter?: Date | string;
  SortBy?: AppImageConfigSortKey;
  SortOrder?: SortOrder;
}
export interface ListAppImageConfigsResponse {
  NextToken?: string;
  AppImageConfigs?: Array<AppImageConfigDetails>;
}
export interface ListAppsRequest {
  NextToken?: string;
  MaxResults?: number;
  SortOrder?: SortOrder;
  SortBy?: AppSortKey;
  DomainIdEquals?: string;
  UserProfileNameEquals?: string;
  SpaceNameEquals?: string;
}
export interface ListAppsResponse {
  Apps?: Array<AppDetails>;
  NextToken?: string;
}
export interface ListArtifactsRequest {
  SourceUri?: string;
  ArtifactType?: string;
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  SortBy?: SortArtifactsBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListArtifactsResponse {
  ArtifactSummaries?: Array<ArtifactSummary>;
  NextToken?: string;
}
export interface ListAssociationsRequest {
  SourceArn?: string;
  DestinationArn?: string;
  SourceType?: string;
  DestinationType?: string;
  AssociationType?: AssociationEdgeType;
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  SortBy?: SortAssociationsBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAssociationsResponse {
  AssociationSummaries?: Array<AssociationSummary>;
  NextToken?: string;
}
export interface ListAutoMLJobsRequest {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  NameContains?: string;
  StatusEquals?: AutoMLJobStatus;
  SortOrder?: AutoMLSortOrder;
  SortBy?: AutoMLSortBy;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAutoMLJobsResponse {
  AutoMLJobSummaries: Array<AutoMLJobSummary>;
  NextToken?: string;
}
export interface ListCandidatesForAutoMLJobRequest {
  AutoMLJobName: string;
  StatusEquals?: CandidateStatus;
  CandidateNameEquals?: string;
  SortOrder?: AutoMLSortOrder;
  SortBy?: CandidateSortBy;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCandidatesForAutoMLJobResponse {
  Candidates: Array<AutoMLCandidate>;
  NextToken?: string;
}
export interface ListClusterNodesRequest {
  ClusterName: string;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  InstanceGroupNameContains?: string;
  MaxResults?: number;
  NextToken?: string;
  SortBy?: ClusterSortBy;
  SortOrder?: SortOrder;
}
export interface ListClusterNodesResponse {
  NextToken?: string;
  ClusterNodeSummaries: Array<ClusterNodeSummary>;
}
export interface ListClusterSchedulerConfigsRequest {
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  NameContains?: string;
  ClusterArn?: string;
  Status?: SchedulerResourceStatus;
  SortBy?: SortClusterSchedulerConfigBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListClusterSchedulerConfigsResponse {
  ClusterSchedulerConfigSummaries?: Array<ClusterSchedulerConfigSummary>;
  NextToken?: string;
}
export interface ListClustersRequest {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  MaxResults?: number;
  NameContains?: string;
  NextToken?: string;
  SortBy?: ClusterSortBy;
  SortOrder?: SortOrder;
  TrainingPlanArn?: string;
}
export interface ListClustersResponse {
  NextToken?: string;
  ClusterSummaries: Array<ClusterSummary>;
}
export interface ListCodeRepositoriesInput {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  MaxResults?: number;
  NameContains?: string;
  NextToken?: string;
  SortBy?: CodeRepositorySortBy;
  SortOrder?: CodeRepositorySortOrder;
}
export interface ListCodeRepositoriesOutput {
  CodeRepositorySummaryList: Array<CodeRepositorySummary>;
  NextToken?: string;
}
export interface ListCompilationJobsRequest {
  NextToken?: string;
  MaxResults?: number;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  NameContains?: string;
  StatusEquals?: CompilationJobStatus;
  SortBy?: ListCompilationJobsSortBy;
  SortOrder?: SortOrder;
}
export interface ListCompilationJobsResponse {
  CompilationJobSummaries: Array<CompilationJobSummary>;
  NextToken?: string;
}
export type ListCompilationJobsSortBy = "NAME" | "CREATION_TIME" | "STATUS";
export interface ListComputeQuotasRequest {
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  NameContains?: string;
  Status?: SchedulerResourceStatus;
  ClusterArn?: string;
  SortBy?: SortQuotaBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListComputeQuotasResponse {
  ComputeQuotaSummaries?: Array<ComputeQuotaSummary>;
  NextToken?: string;
}
export interface ListContextsRequest {
  SourceUri?: string;
  ContextType?: string;
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  SortBy?: SortContextsBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListContextsResponse {
  ContextSummaries?: Array<ContextSummary>;
  NextToken?: string;
}
export interface ListDataQualityJobDefinitionsRequest {
  EndpointName?: string;
  SortBy?: MonitoringJobDefinitionSortKey;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
  NameContains?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
}
export interface ListDataQualityJobDefinitionsResponse {
  JobDefinitionSummaries: Array<MonitoringJobDefinitionSummary>;
  NextToken?: string;
}
export interface ListDeviceFleetsRequest {
  NextToken?: string;
  MaxResults?: number;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  NameContains?: string;
  SortBy?: ListDeviceFleetsSortBy;
  SortOrder?: SortOrder;
}
export interface ListDeviceFleetsResponse {
  DeviceFleetSummaries: Array<DeviceFleetSummary>;
  NextToken?: string;
}
export type ListDeviceFleetsSortBy = "Name" | "CreationTime" | "LastModifiedTime";
export interface ListDevicesRequest {
  NextToken?: string;
  MaxResults?: number;
  LatestHeartbeatAfter?: Date | string;
  ModelName?: string;
  DeviceFleetName?: string;
}
export interface ListDevicesResponse {
  DeviceSummaries: Array<DeviceSummary>;
  NextToken?: string;
}
export interface ListDomainsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDomainsResponse {
  Domains?: Array<DomainDetails>;
  NextToken?: string;
}
export interface ListEdgeDeploymentPlansRequest {
  NextToken?: string;
  MaxResults?: number;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  NameContains?: string;
  DeviceFleetNameContains?: string;
  SortBy?: ListEdgeDeploymentPlansSortBy;
  SortOrder?: SortOrder;
}
export interface ListEdgeDeploymentPlansResponse {
  EdgeDeploymentPlanSummaries: Array<EdgeDeploymentPlanSummary>;
  NextToken?: string;
}
export type ListEdgeDeploymentPlansSortBy = "Name" | "DeviceFleetName" | "CreationTime" | "LastModifiedTime";
export interface ListEdgePackagingJobsRequest {
  NextToken?: string;
  MaxResults?: number;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  NameContains?: string;
  ModelNameContains?: string;
  StatusEquals?: EdgePackagingJobStatus;
  SortBy?: ListEdgePackagingJobsSortBy;
  SortOrder?: SortOrder;
}
export interface ListEdgePackagingJobsResponse {
  EdgePackagingJobSummaries: Array<EdgePackagingJobSummary>;
  NextToken?: string;
}
export type ListEdgePackagingJobsSortBy = "Name" | "ModelName" | "CreationTime" | "LastModifiedTime" | "EdgePackagingJobStatus";
export interface ListEndpointConfigsInput {
  SortBy?: EndpointConfigSortKey;
  SortOrder?: OrderKey;
  NextToken?: string;
  MaxResults?: number;
  NameContains?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
}
export interface ListEndpointConfigsOutput {
  EndpointConfigs: Array<EndpointConfigSummary>;
  NextToken?: string;
}
export interface ListEndpointsInput {
  SortBy?: EndpointSortKey;
  SortOrder?: OrderKey;
  NextToken?: string;
  MaxResults?: number;
  NameContains?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  StatusEquals?: EndpointStatus;
}
export interface ListEndpointsOutput {
  Endpoints: Array<EndpointSummary>;
  NextToken?: string;
}
export interface ListExperimentsRequest {
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  SortBy?: SortExperimentsBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListExperimentsResponse {
  ExperimentSummaries?: Array<ExperimentSummary>;
  NextToken?: string;
}
export interface ListFeatureGroupsRequest {
  NameContains?: string;
  FeatureGroupStatusEquals?: FeatureGroupStatus;
  OfflineStoreStatusEquals?: OfflineStoreStatusValue;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  SortOrder?: FeatureGroupSortOrder;
  SortBy?: FeatureGroupSortBy;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFeatureGroupsResponse {
  FeatureGroupSummaries: Array<FeatureGroupSummary>;
  NextToken?: string;
}
export interface ListFlowDefinitionsRequest {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFlowDefinitionsResponse {
  FlowDefinitionSummaries: Array<FlowDefinitionSummary>;
  NextToken?: string;
}
export interface ListHubContentsRequest {
  HubName: string;
  HubContentType: HubContentType;
  NameContains?: string;
  MaxSchemaVersion?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
  SortBy?: HubContentSortBy;
  SortOrder?: SortOrder;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListHubContentsResponse {
  HubContentSummaries: Array<HubContentInfo>;
  NextToken?: string;
}
export interface ListHubContentVersionsRequest {
  HubName: string;
  HubContentType: HubContentType;
  HubContentName: string;
  MinVersion?: string;
  MaxSchemaVersion?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
  SortBy?: HubContentSortBy;
  SortOrder?: SortOrder;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListHubContentVersionsResponse {
  HubContentSummaries: Array<HubContentInfo>;
  NextToken?: string;
}
export interface ListHubsRequest {
  NameContains?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  SortBy?: HubSortBy;
  SortOrder?: SortOrder;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListHubsResponse {
  HubSummaries: Array<HubInfo>;
  NextToken?: string;
}
export interface ListHumanTaskUisRequest {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListHumanTaskUisResponse {
  HumanTaskUiSummaries: Array<HumanTaskUiSummary>;
  NextToken?: string;
}
export interface ListHyperParameterTuningJobsRequest {
  NextToken?: string;
  MaxResults?: number;
  SortBy?: HyperParameterTuningJobSortByOptions;
  SortOrder?: SortOrder;
  NameContains?: string;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  StatusEquals?: HyperParameterTuningJobStatus;
}
export interface ListHyperParameterTuningJobsResponse {
  HyperParameterTuningJobSummaries: Array<HyperParameterTuningJobSummary>;
  NextToken?: string;
}
export interface ListImagesRequest {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  MaxResults?: number;
  NameContains?: string;
  NextToken?: string;
  SortBy?: ImageSortBy;
  SortOrder?: ImageSortOrder;
}
export interface ListImagesResponse {
  Images?: Array<Image>;
  NextToken?: string;
}
export interface ListImageVersionsRequest {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  ImageName: string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  MaxResults?: number;
  NextToken?: string;
  SortBy?: ImageVersionSortBy;
  SortOrder?: ImageVersionSortOrder;
}
export interface ListImageVersionsResponse {
  ImageVersions?: Array<ImageVersion>;
  NextToken?: string;
}
export interface ListInferenceComponentsInput {
  SortBy?: InferenceComponentSortKey;
  SortOrder?: OrderKey;
  NextToken?: string;
  MaxResults?: number;
  NameContains?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  StatusEquals?: InferenceComponentStatus;
  EndpointNameEquals?: string;
  VariantNameEquals?: string;
}
export interface ListInferenceComponentsOutput {
  InferenceComponents: Array<InferenceComponentSummary>;
  NextToken?: string;
}
export interface ListInferenceExperimentsRequest {
  NameContains?: string;
  Type?: InferenceExperimentType;
  StatusEquals?: InferenceExperimentStatus;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  SortBy?: SortInferenceExperimentsBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListInferenceExperimentsResponse {
  InferenceExperiments?: Array<InferenceExperimentSummary>;
  NextToken?: string;
}
export interface ListInferenceRecommendationsJobsRequest {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  NameContains?: string;
  StatusEquals?: RecommendationJobStatus;
  SortBy?: ListInferenceRecommendationsJobsSortBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
  ModelNameEquals?: string;
  ModelPackageVersionArnEquals?: string;
}
export interface ListInferenceRecommendationsJobsResponse {
  InferenceRecommendationsJobs: Array<InferenceRecommendationsJob>;
  NextToken?: string;
}
export type ListInferenceRecommendationsJobsSortBy = "NAME" | "CREATION_TIME" | "STATUS";
export interface ListInferenceRecommendationsJobStepsRequest {
  JobName: string;
  Status?: RecommendationJobStatus;
  StepType?: RecommendationStepType;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListInferenceRecommendationsJobStepsResponse {
  Steps?: Array<InferenceRecommendationsJobStep>;
  NextToken?: string;
}
export interface ListLabelingJobsForWorkteamRequest {
  WorkteamArn: string;
  MaxResults?: number;
  NextToken?: string;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  JobReferenceCodeContains?: string;
  SortBy?: ListLabelingJobsForWorkteamSortByOptions;
  SortOrder?: SortOrder;
}
export interface ListLabelingJobsForWorkteamResponse {
  LabelingJobSummaryList: Array<LabelingJobForWorkteamSummary>;
  NextToken?: string;
}
export type ListLabelingJobsForWorkteamSortByOptions = "CREATION_TIME";
export interface ListLabelingJobsRequest {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  MaxResults?: number;
  NextToken?: string;
  NameContains?: string;
  SortBy?: SortBy;
  SortOrder?: SortOrder;
  StatusEquals?: LabelingJobStatus;
}
export interface ListLabelingJobsResponse {
  LabelingJobSummaryList?: Array<LabelingJobSummary>;
  NextToken?: string;
}
export type ListLineageEntityParameterKey = Array<string>;
export interface ListLineageGroupsRequest {
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  SortBy?: SortLineageGroupsBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListLineageGroupsResponse {
  LineageGroupSummaries?: Array<LineageGroupSummary>;
  NextToken?: string;
}
export type ListMaxResults = number;

export interface ListMlflowTrackingServersRequest {
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  TrackingServerStatus?: TrackingServerStatus;
  MlflowVersion?: string;
  SortBy?: SortTrackingServerBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMlflowTrackingServersResponse {
  TrackingServerSummaries?: Array<TrackingServerSummary>;
  NextToken?: string;
}
export interface ListModelBiasJobDefinitionsRequest {
  EndpointName?: string;
  SortBy?: MonitoringJobDefinitionSortKey;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
  NameContains?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
}
export interface ListModelBiasJobDefinitionsResponse {
  JobDefinitionSummaries: Array<MonitoringJobDefinitionSummary>;
  NextToken?: string;
}
export interface ListModelCardExportJobsRequest {
  ModelCardName: string;
  ModelCardVersion?: number;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  ModelCardExportJobNameContains?: string;
  StatusEquals?: ModelCardExportJobStatus;
  SortBy?: ModelCardExportJobSortBy;
  SortOrder?: ModelCardExportJobSortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListModelCardExportJobsResponse {
  ModelCardExportJobSummaries: Array<ModelCardExportJobSummary>;
  NextToken?: string;
}
export interface ListModelCardsRequest {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  MaxResults?: number;
  NameContains?: string;
  ModelCardStatus?: ModelCardStatus;
  NextToken?: string;
  SortBy?: ModelCardSortBy;
  SortOrder?: ModelCardSortOrder;
}
export interface ListModelCardsResponse {
  ModelCardSummaries: Array<ModelCardSummary>;
  NextToken?: string;
}
export interface ListModelCardVersionsRequest {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  MaxResults?: number;
  ModelCardName: string;
  ModelCardStatus?: ModelCardStatus;
  NextToken?: string;
  SortBy?: ModelCardVersionSortBy;
  SortOrder?: ModelCardSortOrder;
}
export interface ListModelCardVersionsResponse {
  ModelCardVersionSummaryList: Array<ModelCardVersionSummary>;
  NextToken?: string;
}
export interface ListModelExplainabilityJobDefinitionsRequest {
  EndpointName?: string;
  SortBy?: MonitoringJobDefinitionSortKey;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
  NameContains?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
}
export interface ListModelExplainabilityJobDefinitionsResponse {
  JobDefinitionSummaries: Array<MonitoringJobDefinitionSummary>;
  NextToken?: string;
}
export interface ListModelMetadataRequest {
  SearchExpression?: ModelMetadataSearchExpression;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListModelMetadataResponse {
  ModelMetadataSummaries: Array<ModelMetadataSummary>;
  NextToken?: string;
}
export interface ListModelPackageGroupsInput {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  MaxResults?: number;
  NameContains?: string;
  NextToken?: string;
  SortBy?: ModelPackageGroupSortBy;
  SortOrder?: SortOrder;
  CrossAccountFilterOption?: CrossAccountFilterOption;
}
export interface ListModelPackageGroupsOutput {
  ModelPackageGroupSummaryList: Array<ModelPackageGroupSummary>;
  NextToken?: string;
}
export interface ListModelPackagesInput {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  MaxResults?: number;
  NameContains?: string;
  ModelApprovalStatus?: ModelApprovalStatus;
  ModelPackageGroupName?: string;
  ModelPackageType?: ModelPackageType;
  NextToken?: string;
  SortBy?: ModelPackageSortBy;
  SortOrder?: SortOrder;
}
export interface ListModelPackagesOutput {
  ModelPackageSummaryList: Array<ModelPackageSummary>;
  NextToken?: string;
}
export interface ListModelQualityJobDefinitionsRequest {
  EndpointName?: string;
  SortBy?: MonitoringJobDefinitionSortKey;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
  NameContains?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
}
export interface ListModelQualityJobDefinitionsResponse {
  JobDefinitionSummaries: Array<MonitoringJobDefinitionSummary>;
  NextToken?: string;
}
export interface ListModelsInput {
  SortBy?: ModelSortKey;
  SortOrder?: OrderKey;
  NextToken?: string;
  MaxResults?: number;
  NameContains?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
}
export interface ListModelsOutput {
  Models: Array<ModelSummary>;
  NextToken?: string;
}
export interface ListMonitoringAlertHistoryRequest {
  MonitoringScheduleName?: string;
  MonitoringAlertName?: string;
  SortBy?: MonitoringAlertHistorySortKey;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
  StatusEquals?: MonitoringAlertStatus;
}
export interface ListMonitoringAlertHistoryResponse {
  MonitoringAlertHistory?: Array<MonitoringAlertHistorySummary>;
  NextToken?: string;
}
export interface ListMonitoringAlertsRequest {
  MonitoringScheduleName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMonitoringAlertsResponse {
  MonitoringAlertSummaries?: Array<MonitoringAlertSummary>;
  NextToken?: string;
}
export interface ListMonitoringExecutionsRequest {
  MonitoringScheduleName?: string;
  EndpointName?: string;
  SortBy?: MonitoringExecutionSortKey;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
  ScheduledTimeBefore?: Date | string;
  ScheduledTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  StatusEquals?: ExecutionStatus;
  MonitoringJobDefinitionName?: string;
  MonitoringTypeEquals?: MonitoringType;
}
export interface ListMonitoringExecutionsResponse {
  MonitoringExecutionSummaries: Array<MonitoringExecutionSummary>;
  NextToken?: string;
}
export interface ListMonitoringSchedulesRequest {
  EndpointName?: string;
  SortBy?: MonitoringScheduleSortKey;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
  NameContains?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  StatusEquals?: ScheduleStatus;
  MonitoringJobDefinitionName?: string;
  MonitoringTypeEquals?: MonitoringType;
}
export interface ListMonitoringSchedulesResponse {
  MonitoringScheduleSummaries: Array<MonitoringScheduleSummary>;
  NextToken?: string;
}
export interface ListNotebookInstanceLifecycleConfigsInput {
  NextToken?: string;
  MaxResults?: number;
  SortBy?: NotebookInstanceLifecycleConfigSortKey;
  SortOrder?: NotebookInstanceLifecycleConfigSortOrder;
  NameContains?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
}
export interface ListNotebookInstanceLifecycleConfigsOutput {
  NextToken?: string;
  NotebookInstanceLifecycleConfigs?: Array<NotebookInstanceLifecycleConfigSummary>;
}
export interface ListNotebookInstancesInput {
  NextToken?: string;
  MaxResults?: number;
  SortBy?: NotebookInstanceSortKey;
  SortOrder?: NotebookInstanceSortOrder;
  NameContains?: string;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  StatusEquals?: NotebookInstanceStatus;
  NotebookInstanceLifecycleConfigNameContains?: string;
  DefaultCodeRepositoryContains?: string;
  AdditionalCodeRepositoryEquals?: string;
}
export interface ListNotebookInstancesOutput {
  NextToken?: string;
  NotebookInstances?: Array<NotebookInstanceSummary>;
}
export interface ListOptimizationJobsRequest {
  NextToken?: string;
  MaxResults?: number;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  OptimizationContains?: string;
  NameContains?: string;
  StatusEquals?: OptimizationJobStatus;
  SortBy?: ListOptimizationJobsSortBy;
  SortOrder?: SortOrder;
}
export interface ListOptimizationJobsResponse {
  OptimizationJobSummaries: Array<OptimizationJobSummary>;
  NextToken?: string;
}
export type ListOptimizationJobsSortBy = "NAME" | "CREATION_TIME" | "STATUS";
export interface ListPartnerAppsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPartnerAppsResponse {
  Summaries?: Array<PartnerAppSummary>;
  NextToken?: string;
}
export interface ListPipelineExecutionsRequest {
  PipelineName: string;
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  SortBy?: SortPipelineExecutionsBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPipelineExecutionsResponse {
  PipelineExecutionSummaries?: Array<PipelineExecutionSummary>;
  NextToken?: string;
}
export interface ListPipelineExecutionStepsRequest {
  PipelineExecutionArn?: string;
  NextToken?: string;
  MaxResults?: number;
  SortOrder?: SortOrder;
}
export interface ListPipelineExecutionStepsResponse {
  PipelineExecutionSteps?: Array<PipelineExecutionStep>;
  NextToken?: string;
}
export interface ListPipelineParametersForExecutionRequest {
  PipelineExecutionArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPipelineParametersForExecutionResponse {
  PipelineParameters?: Array<Parameter>;
  NextToken?: string;
}
export interface ListPipelinesRequest {
  PipelineNamePrefix?: string;
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  SortBy?: SortPipelinesBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPipelinesResponse {
  PipelineSummaries?: Array<PipelineSummary>;
  NextToken?: string;
}
export interface ListProcessingJobsRequest {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  NameContains?: string;
  StatusEquals?: ProcessingJobStatus;
  SortBy?: SortBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListProcessingJobsResponse {
  ProcessingJobSummaries: Array<ProcessingJobSummary>;
  NextToken?: string;
}
export interface ListProjectsInput {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  MaxResults?: number;
  NameContains?: string;
  NextToken?: string;
  SortBy?: ProjectSortBy;
  SortOrder?: ProjectSortOrder;
}
export interface ListProjectsOutput {
  ProjectSummaryList: Array<ProjectSummary>;
  NextToken?: string;
}
export interface ListResourceCatalogsRequest {
  NameContains?: string;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  SortOrder?: ResourceCatalogSortOrder;
  SortBy?: ResourceCatalogSortBy;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListResourceCatalogsResponse {
  ResourceCatalogs?: Array<ResourceCatalog>;
  NextToken?: string;
}
export interface ListSpacesRequest {
  NextToken?: string;
  MaxResults?: number;
  SortOrder?: SortOrder;
  SortBy?: SpaceSortKey;
  DomainIdEquals?: string;
  SpaceNameContains?: string;
}
export interface ListSpacesResponse {
  Spaces?: Array<SpaceDetails>;
  NextToken?: string;
}
export interface ListStageDevicesRequest {
  NextToken?: string;
  MaxResults?: number;
  EdgeDeploymentPlanName: string;
  ExcludeDevicesDeployedInOtherStage?: boolean;
  StageName: string;
}
export interface ListStageDevicesResponse {
  DeviceDeploymentSummaries: Array<DeviceDeploymentSummary>;
  NextToken?: string;
}
export interface ListStudioLifecycleConfigsRequest {
  MaxResults?: number;
  NextToken?: string;
  NameContains?: string;
  AppTypeEquals?: StudioLifecycleConfigAppType;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
  ModifiedTimeBefore?: Date | string;
  ModifiedTimeAfter?: Date | string;
  SortBy?: StudioLifecycleConfigSortKey;
  SortOrder?: SortOrder;
}
export interface ListStudioLifecycleConfigsResponse {
  NextToken?: string;
  StudioLifecycleConfigs?: Array<StudioLifecycleConfigDetails>;
}
export interface ListSubscribedWorkteamsRequest {
  NameContains?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSubscribedWorkteamsResponse {
  SubscribedWorkteams: Array<SubscribedWorkteam>;
  NextToken?: string;
}
export interface ListTagsInput {
  ResourceArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export type ListTagsMaxResults = number;

export interface ListTagsOutput {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export interface ListTrainingJobsForHyperParameterTuningJobRequest {
  HyperParameterTuningJobName: string;
  NextToken?: string;
  MaxResults?: number;
  StatusEquals?: TrainingJobStatus;
  SortBy?: TrainingJobSortByOptions;
  SortOrder?: SortOrder;
}
export interface ListTrainingJobsForHyperParameterTuningJobResponse {
  TrainingJobSummaries: Array<HyperParameterTrainingJobSummary>;
  NextToken?: string;
}
export interface ListTrainingJobsRequest {
  NextToken?: string;
  MaxResults?: number;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  NameContains?: string;
  StatusEquals?: TrainingJobStatus;
  SortBy?: SortBy;
  SortOrder?: SortOrder;
  WarmPoolStatusEquals?: WarmPoolResourceStatus;
  TrainingPlanArnEquals?: string;
}
export interface ListTrainingJobsResponse {
  TrainingJobSummaries: Array<TrainingJobSummary>;
  NextToken?: string;
}
export interface ListTrainingPlansRequest {
  NextToken?: string;
  MaxResults?: number;
  StartTimeAfter?: Date | string;
  StartTimeBefore?: Date | string;
  SortBy?: TrainingPlanSortBy;
  SortOrder?: TrainingPlanSortOrder;
  Filters?: Array<TrainingPlanFilter>;
}
export interface ListTrainingPlansResponse {
  NextToken?: string;
  TrainingPlanSummaries: Array<TrainingPlanSummary>;
}
export interface ListTransformJobsRequest {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  LastModifiedTimeAfter?: Date | string;
  LastModifiedTimeBefore?: Date | string;
  NameContains?: string;
  StatusEquals?: TransformJobStatus;
  SortBy?: SortBy;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTransformJobsResponse {
  TransformJobSummaries: Array<TransformJobSummary>;
  NextToken?: string;
}
export type ListTrialComponentKey256 = Array<string>;
export interface ListTrialComponentsRequest {
  ExperimentName?: string;
  TrialName?: string;
  SourceArn?: string;
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  SortBy?: SortTrialComponentsBy;
  SortOrder?: SortOrder;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTrialComponentsResponse {
  TrialComponentSummaries?: Array<TrialComponentSummary>;
  NextToken?: string;
}
export interface ListTrialsRequest {
  ExperimentName?: string;
  TrialComponentName?: string;
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  SortBy?: SortTrialsBy;
  SortOrder?: SortOrder;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTrialsResponse {
  TrialSummaries?: Array<TrialSummary>;
  NextToken?: string;
}
export interface ListUserProfilesRequest {
  NextToken?: string;
  MaxResults?: number;
  SortOrder?: SortOrder;
  SortBy?: UserProfileSortKey;
  DomainIdEquals?: string;
  UserProfileNameContains?: string;
}
export interface ListUserProfilesResponse {
  UserProfiles?: Array<UserProfileDetails>;
  NextToken?: string;
}
export interface ListWorkforcesRequest {
  SortBy?: ListWorkforcesSortByOptions;
  SortOrder?: SortOrder;
  NameContains?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListWorkforcesResponse {
  Workforces: Array<Workforce>;
  NextToken?: string;
}
export type ListWorkforcesSortByOptions = "Name" | "CreateDate";
export interface ListWorkteamsRequest {
  SortBy?: ListWorkteamsSortByOptions;
  SortOrder?: SortOrder;
  NameContains?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListWorkteamsResponse {
  Workteams: Array<Workteam>;
  NextToken?: string;
}
export type ListWorkteamsSortByOptions = "Name" | "CreateDate";
export type LocalPath = string;

export type Long = number;

export type LongS3Uri = string;

export type ManagedInstanceScalingMaxInstanceCount = number;

export type ManagedInstanceScalingMinInstanceCount = number;

export type ManagedInstanceScalingStatus = "ENABLED" | "DISABLED";
export type MaxAutoMLJobRuntimeInSeconds = number;

export type MaxCandidates = number;

export type MaxConcurrentInvocationsPerInstance = number;

export type MaxConcurrentTaskCount = number;

export type MaxConcurrentTransforms = number;

export type MaxHumanLabeledObjectCount = number;

export type MaximumExecutionTimeoutInSeconds = number;

export type MaximumRetryAttempts = number;

export type MaxNumberOfTests = number;

export type MaxNumberOfTrainingJobs = number;

export type MaxNumberOfTrainingJobsNotImproving = number;

export type MaxParallelExecutionSteps = number;

export type MaxParallelOfTests = number;

export type MaxParallelTrainingJobs = number;

export type MaxPayloadInMB = number;

export type MaxPendingTimeInSeconds = number;

export type MaxPercentageOfInputDatasetLabeled = number;

export type MaxResults = number;

export type MaxRuntimeInSeconds = number;

export type MaxRuntimePerTrainingJobInSeconds = number;

export type MaxWaitTimeInSeconds = number;

export type MediaType = string;

export interface MemberDefinition {
  CognitoMemberDefinition?: CognitoMemberDefinition;
  OidcMemberDefinition?: OidcMemberDefinition;
}
export type MemberDefinitions = Array<MemberDefinition>;
export type MemoryInMb = number;

export interface MetadataProperties {
  CommitId?: string;
  Repository?: string;
  GeneratedBy?: string;
  ProjectId?: string;
}
export type MetadataPropertyValue = string;

export interface MetricData {
  MetricName?: string;
  Value?: number;
  Timestamp?: Date | string;
}
export type MetricDataList = Array<MetricDatum>;
export interface MetricDatum {
  MetricName?: AutoMLMetricEnum;
  StandardMetricName?: AutoMLMetricExtendedEnum;
  Value?: number;
  Set?: MetricSetSource;
}
export interface MetricDefinition {
  Name: string;
  Regex: string;
}
export type MetricDefinitionList = Array<MetricDefinition>;
export type MetricName = string;

export type MetricRegex = string;

export type MetricSetSource = "TRAIN" | "VALIDATION" | "TEST";
export type MetricSpecification = { Predefined: PredefinedMetricSpecification } | { Customized: CustomizedMetricSpecification };
export interface MetricsSource {
  ContentType: string;
  ContentDigest?: string;
  S3Uri: string;
}
export type MetricValue = number;

export type MinimumInstanceMetadataServiceVersion = string;

export type MlflowVersion = string;

export type MLFramework = string;

export type MlReservationArn = string;

export type MlTools = "DATA_WRANGLER" | "FEATURE_STORE" | "EMR_CLUSTERS" | "AUTO_ML" | "EXPERIMENTS" | "TRAINING" | "MODEL_EVALUATION" | "PIPELINES" | "MODELS" | "JUMP_START" | "INFERENCE_RECOMMENDER" | "ENDPOINTS" | "PROJECTS" | "INFERENCE_OPTIMIZATION" | "PERFORMANCE_EVALUATION" | "LAKERA_GUARD" | "COMET" | "DEEPCHECKS_LLM_EVALUATION" | "FIDDLER" | "HYPER_POD_CLUSTERS";
export interface Model {
  ModelName?: string;
  PrimaryContainer?: ContainerDefinition;
  Containers?: Array<ContainerDefinition>;
  InferenceExecutionConfig?: InferenceExecutionConfig;
  ExecutionRoleArn?: string;
  VpcConfig?: VpcConfig;
  CreationTime?: Date | string;
  ModelArn?: string;
  EnableNetworkIsolation?: boolean;
  Tags?: Array<Tag>;
  DeploymentRecommendation?: DeploymentRecommendation;
}
export interface ModelAccessConfig {
  AcceptEula: boolean;
}
export type ModelApprovalStatus = "APPROVED" | "REJECTED" | "PENDING_MANUAL_APPROVAL";
export type ModelArn = string;

export interface ModelArtifacts {
  S3ModelArtifacts: string;
}
export interface ModelBiasAppSpecification {
  ImageUri: string;
  ConfigUri: string;
  Environment?: Record<string, string>;
}
export interface ModelBiasBaselineConfig {
  BaseliningJobName?: string;
  ConstraintsResource?: MonitoringConstraintsResource;
}
export interface ModelBiasJobInput {
  EndpointInput?: EndpointInput;
  BatchTransformInput?: BatchTransformInput;
  GroundTruthS3Input: MonitoringGroundTruthS3Input;
}
export type ModelCacheSetting = "ENABLED" | "DISABLED";
export interface ModelCard {
  ModelCardArn?: string;
  ModelCardName?: string;
  ModelCardVersion?: number;
  Content?: string;
  ModelCardStatus?: ModelCardStatus;
  SecurityConfig?: ModelCardSecurityConfig;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
  Tags?: Array<Tag>;
  ModelId?: string;
  RiskRating?: string;
  ModelPackageGroupName?: string;
}
export type ModelCardArn = string;

export type ModelCardContent = string;

export interface ModelCardExportArtifacts {
  S3ExportArtifacts: string;
}
export type ModelCardExportJobArn = string;

export type ModelCardExportJobSortBy = "NAME" | "CREATION_TIME" | "STATUS";
export type ModelCardExportJobSortOrder = "ASCENDING" | "DESCENDING";
export type ModelCardExportJobStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED";
export interface ModelCardExportJobSummary {
  ModelCardExportJobName: string;
  ModelCardExportJobArn: string;
  Status: ModelCardExportJobStatus;
  ModelCardName: string;
  ModelCardVersion: number;
  CreatedAt: Date | string;
  LastModifiedAt: Date | string;
}
export type ModelCardExportJobSummaryList = Array<ModelCardExportJobSummary>;
export interface ModelCardExportOutputConfig {
  S3OutputPath: string;
}
export type ModelCardNameOrArn = string;

export type ModelCardProcessingStatus = "DELETE_INPROGRESS" | "DELETE_PENDING" | "CONTENT_DELETED" | "EXPORTJOBS_DELETED" | "DELETE_COMPLETED" | "DELETE_FAILED";
export interface ModelCardSecurityConfig {
  KmsKeyId?: string;
}
export type ModelCardSortBy = "NAME" | "CREATION_TIME";
export type ModelCardSortOrder = "ASCENDING" | "DESCENDING";
export type ModelCardStatus = "DRAFT" | "PENDINGREVIEW" | "APPROVED" | "ARCHIVED";
export interface ModelCardSummary {
  ModelCardName: string;
  ModelCardArn: string;
  ModelCardStatus: ModelCardStatus;
  CreationTime: Date | string;
  LastModifiedTime?: Date | string;
}
export type ModelCardSummaryList = Array<ModelCardSummary>;
export type ModelCardVersionSortBy = "VERSION";
export interface ModelCardVersionSummary {
  ModelCardName: string;
  ModelCardArn: string;
  ModelCardStatus: ModelCardStatus;
  ModelCardVersion: number;
  CreationTime: Date | string;
  LastModifiedTime?: Date | string;
}
export type ModelCardVersionSummaryList = Array<ModelCardVersionSummary>;
export interface ModelClientConfig {
  InvocationsTimeoutInSeconds?: number;
  InvocationsMaxRetries?: number;
}
export interface ModelCompilationConfig {
  Image?: string;
  OverrideEnvironment?: Record<string, string>;
}
export type ModelCompressionType = "None" | "Gzip";
export interface ModelConfiguration {
  InferenceSpecificationName?: string;
  EnvironmentParameters?: Array<EnvironmentParameter>;
  CompilationJobName?: string;
}
export interface ModelDashboardEndpoint {
  EndpointName: string;
  EndpointArn: string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  EndpointStatus: EndpointStatus;
}
export type ModelDashboardEndpoints = Array<ModelDashboardEndpoint>;
export interface ModelDashboardIndicatorAction {
  Enabled?: boolean;
}
export interface ModelDashboardModel {
  Model?: Model;
  Endpoints?: Array<ModelDashboardEndpoint>;
  LastBatchTransformJob?: TransformJob;
  MonitoringSchedules?: Array<ModelDashboardMonitoringSchedule>;
  ModelCard?: ModelDashboardModelCard;
}
export interface ModelDashboardModelCard {
  ModelCardArn?: string;
  ModelCardName?: string;
  ModelCardVersion?: number;
  ModelCardStatus?: ModelCardStatus;
  SecurityConfig?: ModelCardSecurityConfig;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
  Tags?: Array<Tag>;
  ModelId?: string;
  RiskRating?: string;
}
export interface ModelDashboardMonitoringSchedule {
  MonitoringScheduleArn?: string;
  MonitoringScheduleName?: string;
  MonitoringScheduleStatus?: ScheduleStatus;
  MonitoringType?: MonitoringType;
  FailureReason?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  MonitoringScheduleConfig?: MonitoringScheduleConfig;
  EndpointName?: string;
  MonitoringAlertSummaries?: Array<MonitoringAlertSummary>;
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;
  BatchTransformInput?: BatchTransformInput;
}
export type ModelDashboardMonitoringSchedules = Array<ModelDashboardMonitoringSchedule>;
export interface ModelDataQuality {
  Statistics?: MetricsSource;
  Constraints?: MetricsSource;
}
export interface ModelDataSource {
  S3DataSource?: S3ModelDataSource;
}
export interface ModelDeployConfig {
  AutoGenerateEndpointName?: boolean;
  EndpointName?: string;
}
export interface ModelDeployResult {
  EndpointName?: string;
}
export interface ModelDigests {
  ArtifactDigest?: string;
}
export interface ModelExplainabilityAppSpecification {
  ImageUri: string;
  ConfigUri: string;
  Environment?: Record<string, string>;
}
export interface ModelExplainabilityBaselineConfig {
  BaseliningJobName?: string;
  ConstraintsResource?: MonitoringConstraintsResource;
}
export interface ModelExplainabilityJobInput {
  EndpointInput?: EndpointInput;
  BatchTransformInput?: BatchTransformInput;
}
export interface ModelInfrastructureConfig {
  InfrastructureType: ModelInfrastructureType;
  RealTimeInferenceConfig: RealTimeInferenceConfig;
}
export type ModelInfrastructureType = "REAL_TIME_INFERENCE";
export interface ModelInput {
  DataInputConfig: string;
}
export type ModelInsightsLocation = string;

export interface ModelLatencyThreshold {
  Percentile?: string;
  ValueInMilliseconds?: number;
}
export type ModelLatencyThresholds = Array<ModelLatencyThreshold>;
export interface ModelLifeCycle {
  Stage: string;
  StageStatus: string;
  StageDescription?: string;
}
export interface ModelMetadataFilter {
  Name: ModelMetadataFilterType;
  Value: string;
}
export type ModelMetadataFilters = Array<ModelMetadataFilter>;
export type ModelMetadataFilterType = "DOMAIN" | "FRAMEWORK" | "TASK" | "FRAMEWORKVERSION";
export interface ModelMetadataSearchExpression {
  Filters?: Array<ModelMetadataFilter>;
}
export type ModelMetadataSummaries = Array<ModelMetadataSummary>;
export interface ModelMetadataSummary {
  Domain: string;
  Framework: string;
  Task: string;
  Model: string;
  FrameworkVersion: string;
}
export interface ModelMetrics {
  ModelQuality?: ModelQuality;
  ModelDataQuality?: ModelDataQuality;
  Bias?: Bias;
  Explainability?: Explainability;
}
export type ModelName = string;

export type ModelNameContains = string;

export interface ModelPackage {
  ModelPackageName?: string;
  ModelPackageGroupName?: string;
  ModelPackageVersion?: number;
  ModelPackageArn?: string;
  ModelPackageDescription?: string;
  CreationTime?: Date | string;
  InferenceSpecification?: InferenceSpecification;
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;
  ValidationSpecification?: ModelPackageValidationSpecification;
  ModelPackageStatus?: ModelPackageStatus;
  ModelPackageStatusDetails?: ModelPackageStatusDetails;
  CertifyForMarketplace?: boolean;
  ModelApprovalStatus?: ModelApprovalStatus;
  CreatedBy?: UserContext;
  MetadataProperties?: MetadataProperties;
  ModelMetrics?: ModelMetrics;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
  ApprovalDescription?: string;
  Domain?: string;
  Task?: string;
  SamplePayloadUrl?: string;
  AdditionalInferenceSpecifications?: Array<AdditionalInferenceSpecificationDefinition>;
  SourceUri?: string;
  SecurityConfig?: ModelPackageSecurityConfig;
  ModelCard?: ModelPackageModelCard;
  ModelLifeCycle?: ModelLifeCycle;
  Tags?: Array<Tag>;
  CustomerMetadataProperties?: Record<string, string>;
  DriftCheckBaselines?: DriftCheckBaselines;
  SkipModelValidation?: SkipModelValidation;
}
export type ModelPackageArn = string;

export type ModelPackageArnList = Array<string>;
export interface ModelPackageContainerDefinition {
  ContainerHostname?: string;
  Image: string;
  ImageDigest?: string;
  ModelDataUrl?: string;
  ModelDataSource?: ModelDataSource;
  ProductId?: string;
  Environment?: Record<string, string>;
  ModelInput?: ModelInput;
  Framework?: string;
  FrameworkVersion?: string;
  NearestModelName?: string;
  AdditionalS3DataSource?: AdditionalS3DataSource;
  ModelDataETag?: string;
}
export type ModelPackageContainerDefinitionList = Array<ModelPackageContainerDefinition>;
export type ModelPackageFrameworkVersion = string;

export interface ModelPackageGroup {
  ModelPackageGroupName?: string;
  ModelPackageGroupArn?: string;
  ModelPackageGroupDescription?: string;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  ModelPackageGroupStatus?: ModelPackageGroupStatus;
  Tags?: Array<Tag>;
}
export type ModelPackageGroupArn = string;

export type ModelPackageGroupSortBy = "NAME" | "CREATION_TIME";
export type ModelPackageGroupStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "DELETING" | "DELETE_FAILED";
export interface ModelPackageGroupSummary {
  ModelPackageGroupName: string;
  ModelPackageGroupArn: string;
  ModelPackageGroupDescription?: string;
  CreationTime: Date | string;
  ModelPackageGroupStatus: ModelPackageGroupStatus;
}
export type ModelPackageGroupSummaryList = Array<ModelPackageGroupSummary>;
export interface ModelPackageModelCard {
  ModelCardContent?: string;
  ModelCardStatus?: ModelCardStatus;
}
export interface ModelPackageSecurityConfig {
  KmsKeyId: string;
}
export type ModelPackageSortBy = "NAME" | "CREATION_TIME";
export type ModelPackageSourceUri = string;

export type ModelPackageStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "DELETING";
export interface ModelPackageStatusDetails {
  ValidationStatuses: Array<ModelPackageStatusItem>;
  ImageScanStatuses?: Array<ModelPackageStatusItem>;
}
export interface ModelPackageStatusItem {
  Name: string;
  Status: DetailedModelPackageStatus;
  FailureReason?: string;
}
export type ModelPackageStatusItemList = Array<ModelPackageStatusItem>;
export type ModelPackageSummaries = Record<string, BatchDescribeModelPackageSummary>;
export interface ModelPackageSummary {
  ModelPackageName?: string;
  ModelPackageGroupName?: string;
  ModelPackageVersion?: number;
  ModelPackageArn: string;
  ModelPackageDescription?: string;
  CreationTime: Date | string;
  ModelPackageStatus: ModelPackageStatus;
  ModelApprovalStatus?: ModelApprovalStatus;
  ModelLifeCycle?: ModelLifeCycle;
}
export type ModelPackageSummaryList = Array<ModelPackageSummary>;
export type ModelPackageType = "VERSIONED" | "UNVERSIONED" | "BOTH";
export interface ModelPackageValidationProfile {
  ProfileName: string;
  TransformJobDefinition: TransformJobDefinition;
}
export type ModelPackageValidationProfiles = Array<ModelPackageValidationProfile>;
export interface ModelPackageValidationSpecification {
  ValidationRole: string;
  ValidationProfiles: Array<ModelPackageValidationProfile>;
}
export type ModelPackageVersion = number;

export interface ModelQuality {
  Statistics?: MetricsSource;
  Constraints?: MetricsSource;
}
export interface ModelQualityAppSpecification {
  ImageUri: string;
  ContainerEntrypoint?: Array<string>;
  ContainerArguments?: Array<string>;
  RecordPreprocessorSourceUri?: string;
  PostAnalyticsProcessorSourceUri?: string;
  ProblemType?: MonitoringProblemType;
  Environment?: Record<string, string>;
}
export interface ModelQualityBaselineConfig {
  BaseliningJobName?: string;
  ConstraintsResource?: MonitoringConstraintsResource;
}
export interface ModelQualityJobInput {
  EndpointInput?: EndpointInput;
  BatchTransformInput?: BatchTransformInput;
  GroundTruthS3Input: MonitoringGroundTruthS3Input;
}
export interface ModelQuantizationConfig {
  Image?: string;
  OverrideEnvironment?: Record<string, string>;
}
export interface ModelRegisterSettings {
  Status?: FeatureStatus;
  CrossAccountModelRegisterRoleArn?: string;
}
export type ModelSetupTime = number;

export interface ModelShardingConfig {
  Image?: string;
  OverrideEnvironment?: Record<string, string>;
}
export type ModelSortKey = "Name" | "CreationTime";
export interface ModelStepMetadata {
  Arn?: string;
}
export interface ModelSummary {
  ModelName: string;
  ModelArn: string;
  CreationTime: Date | string;
}
export type ModelSummaryList = Array<ModelSummary>;
export type ModelVariantAction = "RETAIN" | "REMOVE" | "PROMOTE";
export type ModelVariantActionMap = Record<string, ModelVariantAction>;
export interface ModelVariantConfig {
  ModelName: string;
  VariantName: string;
  InfrastructureConfig: ModelInfrastructureConfig;
}
export type ModelVariantConfigList = Array<ModelVariantConfig>;
export interface ModelVariantConfigSummary {
  ModelName: string;
  VariantName: string;
  InfrastructureConfig: ModelInfrastructureConfig;
  Status: ModelVariantStatus;
}
export type ModelVariantConfigSummaryList = Array<ModelVariantConfigSummary>;
export type ModelVariantName = string;

export type ModelVariantStatus = "CREATING" | "UPDATING" | "IN_SERVICE" | "DELETING" | "DELETED";
export interface MonitoringAlertActions {
  ModelDashboardIndicator?: ModelDashboardIndicatorAction;
}
export type MonitoringAlertHistoryList = Array<MonitoringAlertHistorySummary>;
export type MonitoringAlertHistorySortKey = "CreationTime" | "Status";
export interface MonitoringAlertHistorySummary {
  MonitoringScheduleName: string;
  MonitoringAlertName: string;
  CreationTime: Date | string;
  AlertStatus: MonitoringAlertStatus;
}
export type MonitoringAlertName = string;

export type MonitoringAlertStatus = "IN_ALERT" | "OK";
export interface MonitoringAlertSummary {
  MonitoringAlertName: string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  AlertStatus: MonitoringAlertStatus;
  DatapointsToAlert: number;
  EvaluationPeriod: number;
  Actions: MonitoringAlertActions;
}
export type MonitoringAlertSummaryList = Array<MonitoringAlertSummary>;
export interface MonitoringAppSpecification {
  ImageUri: string;
  ContainerEntrypoint?: Array<string>;
  ContainerArguments?: Array<string>;
  RecordPreprocessorSourceUri?: string;
  PostAnalyticsProcessorSourceUri?: string;
}
export interface MonitoringBaselineConfig {
  BaseliningJobName?: string;
  ConstraintsResource?: MonitoringConstraintsResource;
  StatisticsResource?: MonitoringStatisticsResource;
}
export interface MonitoringClusterConfig {
  InstanceCount: number;
  InstanceType: ProcessingInstanceType;
  VolumeSizeInGB: number;
  VolumeKmsKeyId?: string;
}
export interface MonitoringConstraintsResource {
  S3Uri?: string;
}
export type MonitoringContainerArguments = Array<string>;
export interface MonitoringCsvDatasetFormat {
  Header?: boolean;
}
export type MonitoringDatapointsToAlert = number;

export interface MonitoringDatasetFormat {
  Csv?: MonitoringCsvDatasetFormat;
  Json?: MonitoringJsonDatasetFormat;
  Parquet?: MonitoringParquetDatasetFormat;
}
export type MonitoringEnvironmentMap = Record<string, string>;
export type MonitoringEvaluationPeriod = number;

export type MonitoringExecutionSortKey = "CREATION_TIME" | "SCHEDULED_TIME" | "STATUS";
export interface MonitoringExecutionSummary {
  MonitoringScheduleName: string;
  ScheduledTime: Date | string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  MonitoringExecutionStatus: ExecutionStatus;
  ProcessingJobArn?: string;
  EndpointName?: string;
  FailureReason?: string;
  MonitoringJobDefinitionName?: string;
  MonitoringType?: MonitoringType;
}
export type MonitoringExecutionSummaryList = Array<MonitoringExecutionSummary>;
export interface MonitoringGroundTruthS3Input {
  S3Uri?: string;
}
export interface MonitoringInput {
  EndpointInput?: EndpointInput;
  BatchTransformInput?: BatchTransformInput;
}
export type MonitoringInputs = Array<MonitoringInput>;
export interface MonitoringJobDefinition {
  BaselineConfig?: MonitoringBaselineConfig;
  MonitoringInputs: Array<MonitoringInput>;
  MonitoringOutputConfig: MonitoringOutputConfig;
  MonitoringResources: MonitoringResources;
  MonitoringAppSpecification: MonitoringAppSpecification;
  StoppingCondition?: MonitoringStoppingCondition;
  Environment?: Record<string, string>;
  NetworkConfig?: NetworkConfig;
  RoleArn: string;
}
export type MonitoringJobDefinitionArn = string;

export type MonitoringJobDefinitionName = string;

export type MonitoringJobDefinitionSortKey = "NAME" | "CREATION_TIME";
export interface MonitoringJobDefinitionSummary {
  MonitoringJobDefinitionName: string;
  MonitoringJobDefinitionArn: string;
  CreationTime: Date | string;
  EndpointName: string;
}
export type MonitoringJobDefinitionSummaryList = Array<MonitoringJobDefinitionSummary>;
export interface MonitoringJsonDatasetFormat {
  Line?: boolean;
}
export type MonitoringMaxRuntimeInSeconds = number;

export interface MonitoringNetworkConfig {
  EnableInterContainerTrafficEncryption?: boolean;
  EnableNetworkIsolation?: boolean;
  VpcConfig?: VpcConfig;
}
export interface MonitoringOutput {
  S3Output: MonitoringS3Output;
}
export interface MonitoringOutputConfig {
  MonitoringOutputs: Array<MonitoringOutput>;
  KmsKeyId?: string;
}
export type MonitoringOutputs = Array<MonitoringOutput>;
export interface MonitoringParquetDatasetFormat {
}
export type MonitoringProblemType = "BINARY_CLASSIFICATION" | "MULTICLASS_CLASSIFICATION" | "REGRESSION";
export interface MonitoringResources {
  ClusterConfig: MonitoringClusterConfig;
}
export interface MonitoringS3Output {
  S3Uri: string;
  LocalPath: string;
  S3UploadMode?: ProcessingS3UploadMode;
}
export type MonitoringS3Uri = string;

export interface MonitoringSchedule {
  MonitoringScheduleArn?: string;
  MonitoringScheduleName?: string;
  MonitoringScheduleStatus?: ScheduleStatus;
  MonitoringType?: MonitoringType;
  FailureReason?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  MonitoringScheduleConfig?: MonitoringScheduleConfig;
  EndpointName?: string;
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;
  Tags?: Array<Tag>;
}
export type MonitoringScheduleArn = string;

export interface MonitoringScheduleConfig {
  ScheduleConfig?: ScheduleConfig;
  MonitoringJobDefinition?: MonitoringJobDefinition;
  MonitoringJobDefinitionName?: string;
  MonitoringType?: MonitoringType;
}
export type MonitoringScheduleList = Array<MonitoringSchedule>;
export type MonitoringScheduleName = string;

export type MonitoringScheduleSortKey = "NAME" | "CREATION_TIME" | "STATUS";
export interface MonitoringScheduleSummary {
  MonitoringScheduleName: string;
  MonitoringScheduleArn: string;
  CreationTime: Date | string;
  LastModifiedTime: Date | string;
  MonitoringScheduleStatus: ScheduleStatus;
  EndpointName?: string;
  MonitoringJobDefinitionName?: string;
  MonitoringType?: MonitoringType;
}
export type MonitoringScheduleSummaryList = Array<MonitoringScheduleSummary>;
export interface MonitoringStatisticsResource {
  S3Uri?: string;
}
export interface MonitoringStoppingCondition {
  MaxRuntimeInSeconds: number;
}
export type MonitoringTimeOffsetString = string;

export type MonitoringType = "DATA_QUALITY" | "MODEL_QUALITY" | "MODEL_BIAS" | "MODEL_EXPLAINABILITY";
export type MountPath = string;

export interface MultiModelConfig {
  ModelCacheSetting?: ModelCacheSetting;
}
export type NameContains = string;

export interface NeoVpcConfig {
  SecurityGroupIds: Array<string>;
  Subnets: Array<string>;
}
export type NeoVpcSecurityGroupId = string;

export type NeoVpcSecurityGroupIds = Array<string>;
export type NeoVpcSubnetId = string;

export type NeoVpcSubnets = Array<string>;
export interface NestedFilters {
  NestedPropertyName: string;
  Filters: Array<Filter>;
}
export type NestedFiltersList = Array<NestedFilters>;
export interface NetworkConfig {
  EnableInterContainerTrafficEncryption?: boolean;
  EnableNetworkIsolation?: boolean;
  VpcConfig?: VpcConfig;
}
export type NetworkInterfaceId = string;

export type NextToken = string;

export type NodeUnavailabilityType = "INSTANCE_COUNT" | "CAPACITY_PERCENTAGE";
export type NodeUnavailabilityValue = number;

export type NonEmptyString256 = string;

export type NonEmptyString64 = string;

export type NotebookInstanceAcceleratorType = "ML_EIA1_MEDIUM" | "ML_EIA1_LARGE" | "ML_EIA1_XLARGE" | "ML_EIA2_MEDIUM" | "ML_EIA2_LARGE" | "ML_EIA2_XLARGE";
export type NotebookInstanceAcceleratorTypes = Array<NotebookInstanceAcceleratorType>;
export type NotebookInstanceArn = string;

export type NotebookInstanceLifecycleConfigArn = string;

export type NotebookInstanceLifecycleConfigContent = string;

export type NotebookInstanceLifecycleConfigList = Array<NotebookInstanceLifecycleHook>;
export type NotebookInstanceLifecycleConfigName = string;

export type NotebookInstanceLifecycleConfigNameContains = string;

export type NotebookInstanceLifecycleConfigSortKey = "NAME" | "CREATION_TIME" | "LAST_MODIFIED_TIME";
export type NotebookInstanceLifecycleConfigSortOrder = "ASCENDING" | "DESCENDING";
export interface NotebookInstanceLifecycleConfigSummary {
  NotebookInstanceLifecycleConfigName: string;
  NotebookInstanceLifecycleConfigArn: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type NotebookInstanceLifecycleConfigSummaryList = Array<NotebookInstanceLifecycleConfigSummary>;
export interface NotebookInstanceLifecycleHook {
  Content?: string;
}
export type NotebookInstanceName = string;

export type NotebookInstanceNameContains = string;

export type NotebookInstanceSortKey = "NAME" | "CREATION_TIME" | "STATUS";
export type NotebookInstanceSortOrder = "ASCENDING" | "DESCENDING";
export type NotebookInstanceStatus = "Pending" | "InService" | "Stopping" | "Stopped" | "Failed" | "Deleting" | "Updating";
export interface NotebookInstanceSummary {
  NotebookInstanceName: string;
  NotebookInstanceArn: string;
  NotebookInstanceStatus?: NotebookInstanceStatus;
  Url?: string;
  InstanceType?: InstanceType;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  NotebookInstanceLifecycleConfigName?: string;
  DefaultCodeRepository?: string;
  AdditionalCodeRepositories?: Array<string>;
}
export type NotebookInstanceSummaryList = Array<NotebookInstanceSummary>;
export type NotebookInstanceUrl = string;

export type NotebookInstanceVolumeSizeInGB = number;

export type NotebookOutputOption = "Allowed" | "Disabled";
export interface NotificationConfiguration {
  NotificationTopicArn?: string;
}
export type NotificationTopicArn = string;

export type NumberOfAcceleratorDevices = number;

export type NumberOfCpuCores = number;

export type NumberOfHumanWorkersPerDataObject = number;

export type NumberOfSteps = number;

export type ObjectiveStatus = "Succeeded" | "Pending" | "Failed";
export type ObjectiveStatusCounter = number;

export interface ObjectiveStatusCounters {
  Succeeded?: number;
  Pending?: number;
  Failed?: number;
}
export interface OfflineStoreConfig {
  S3StorageConfig: S3StorageConfig;
  DisableGlueTableCreation?: boolean;
  DataCatalogConfig?: DataCatalogConfig;
  TableFormat?: TableFormat;
}
export interface OfflineStoreStatus {
  Status: OfflineStoreStatusValue;
  BlockedReason?: string;
}
export type OfflineStoreStatusValue = "ACTIVE" | "BLOCKED" | "DISABLED";
export interface OidcConfig {
  ClientId: string;
  ClientSecret: string;
  Issuer: string;
  AuthorizationEndpoint: string;
  TokenEndpoint: string;
  UserInfoEndpoint: string;
  LogoutEndpoint: string;
  JwksUri: string;
  Scope?: string;
  AuthenticationRequestExtraParams?: Record<string, string>;
}
export interface OidcConfigForResponse {
  ClientId?: string;
  Issuer?: string;
  AuthorizationEndpoint?: string;
  TokenEndpoint?: string;
  UserInfoEndpoint?: string;
  LogoutEndpoint?: string;
  JwksUri?: string;
  Scope?: string;
  AuthenticationRequestExtraParams?: Record<string, string>;
}
export type OidcEndpoint = string;

export interface OidcMemberDefinition {
  Groups?: Array<string>;
}
export interface OnlineStoreConfig {
  SecurityConfig?: OnlineStoreSecurityConfig;
  EnableOnlineStore?: boolean;
  TtlDuration?: TtlDuration;
  StorageType?: StorageType;
}
export interface OnlineStoreConfigUpdate {
  TtlDuration?: TtlDuration;
}
export interface OnlineStoreSecurityConfig {
  KmsKeyId?: string;
}
export type OnlineStoreTotalSizeBytes = number;

export type OnStartDeepHealthChecks = Array<DeepHealthCheckType>;
export type Operator = "EQUALS" | "NOT_EQUALS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "CONTAINS" | "EXISTS" | "NOT_EXISTS" | "IN";
export type OptimizationConfig = { ModelQuantizationConfig: ModelQuantizationConfig } | { ModelCompilationConfig: ModelCompilationConfig } | { ModelShardingConfig: ModelShardingConfig };
export type OptimizationConfigs = Array<OptimizationConfig>;
export type OptimizationContainerImage = string;

export type OptimizationJobArn = string;

export type OptimizationJobDeploymentInstanceType = "ML_P4D_24XLARGE" | "ML_P4DE_24XLARGE" | "ML_P5_48XLARGE" | "ML_G5_XLARGE" | "ML_G5_2XLARGE" | "ML_G5_4XLARGE" | "ML_G5_8XLARGE" | "ML_G5_12XLARGE" | "ML_G5_16XLARGE" | "ML_G5_24XLARGE" | "ML_G5_48XLARGE" | "ML_G6_XLARGE" | "ML_G6_2XLARGE" | "ML_G6_4XLARGE" | "ML_G6_8XLARGE" | "ML_G6_12XLARGE" | "ML_G6_16XLARGE" | "ML_G6_24XLARGE" | "ML_G6_48XLARGE" | "ML_G6E_XLARGE" | "ML_G6E_2XLARGE" | "ML_G6E_4XLARGE" | "ML_G6E_8XLARGE" | "ML_G6E_12XLARGE" | "ML_G6E_16XLARGE" | "ML_G6E_24XLARGE" | "ML_G6E_48XLARGE" | "ML_INF2_XLARGE" | "ML_INF2_8XLARGE" | "ML_INF2_24XLARGE" | "ML_INF2_48XLARGE" | "ML_TRN1_2XLARGE" | "ML_TRN1_32XLARGE" | "ML_TRN1N_32XLARGE";
export type OptimizationJobEnvironmentVariables = Record<string, string>;
export interface OptimizationJobModelSource {
  S3?: OptimizationJobModelSourceS3;
}
export interface OptimizationJobModelSourceS3 {
  S3Uri?: string;
  ModelAccessConfig?: OptimizationModelAccessConfig;
}
export interface OptimizationJobOutputConfig {
  KmsKeyId?: string;
  S3OutputLocation: string;
}
export type OptimizationJobStatus = "INPROGRESS" | "COMPLETED" | "FAILED" | "STARTING" | "STOPPING" | "STOPPED";
export type OptimizationJobSummaries = Array<OptimizationJobSummary>;
export interface OptimizationJobSummary {
  OptimizationJobName: string;
  OptimizationJobArn: string;
  CreationTime: Date | string;
  OptimizationJobStatus: OptimizationJobStatus;
  OptimizationStartTime?: Date | string;
  OptimizationEndTime?: Date | string;
  LastModifiedTime?: Date | string;
  DeploymentInstanceType: OptimizationJobDeploymentInstanceType;
  OptimizationTypes: Array<string>;
}
export type OptimizationModelAcceptEula = boolean;

export interface OptimizationModelAccessConfig {
  AcceptEula: boolean;
}
export interface OptimizationOutput {
  RecommendedInferenceImage?: string;
}
export type OptimizationType = string;

export type OptimizationTypes = Array<string>;
export interface OptimizationVpcConfig {
  SecurityGroupIds: Array<string>;
  Subnets: Array<string>;
}
export type OptimizationVpcSecurityGroupId = string;

export type OptimizationVpcSecurityGroupIds = Array<string>;
export type OptimizationVpcSubnetId = string;

export type OptimizationVpcSubnets = Array<string>;
export type OptionalDouble = number;

export type OptionalInteger = number;

export type OptionalVolumeSizeInGB = number;

export type OrderKey = "Ascending" | "Descending";
export type OutputCompressionType = "GZIP" | "NONE";
export interface OutputConfig {
  S3OutputLocation: string;
  TargetDevice?: TargetDevice;
  TargetPlatform?: TargetPlatform;
  CompilerOptions?: string;
  KmsKeyId?: string;
}
export interface OutputDataConfig {
  KmsKeyId?: string;
  S3OutputPath: string;
  CompressionType?: OutputCompressionType;
}
export interface OutputParameter {
  Name: string;
  Value: string;
}
export type OutputParameterList = Array<OutputParameter>;
export interface OwnershipSettings {
  OwnerUserProfileName: string;
}
export interface OwnershipSettingsSummary {
  OwnerUserProfileName?: string;
}
export type PaginationToken = string;

export interface ParallelismConfiguration {
  MaxParallelExecutionSteps: number;
}
export interface Parameter {
  Name: string;
  Value: string;
}
export type ParameterKey = string;

export type ParameterList = Array<Parameter>;
export type ParameterName = string;

export interface ParameterRange {
  IntegerParameterRangeSpecification?: IntegerParameterRangeSpecification;
  ContinuousParameterRangeSpecification?: ContinuousParameterRangeSpecification;
  CategoricalParameterRangeSpecification?: CategoricalParameterRangeSpecification;
}
export interface ParameterRanges {
  IntegerParameterRanges?: Array<IntegerParameterRange>;
  ContinuousParameterRanges?: Array<ContinuousParameterRange>;
  CategoricalParameterRanges?: Array<CategoricalParameterRange>;
  AutoParameters?: Array<AutoParameter>;
}
export type ParameterType = "INTEGER" | "CONTINUOUS" | "CATEGORICAL" | "FREE_TEXT";
export type ParameterValue = string;

export type ParameterValues = Array<string>;
export interface Parent {
  TrialName?: string;
  ExperimentName?: string;
}
export interface ParentHyperParameterTuningJob {
  HyperParameterTuningJobName?: string;
}
export type ParentHyperParameterTuningJobs = Array<ParentHyperParameterTuningJob>;
export type Parents = Array<Parent>;
export type PartnerAppAdminUserList = Array<string>;
export type PartnerAppArguments = Record<string, string>;
export type PartnerAppArn = string;

export type PartnerAppAuthType = "IAM";
export interface PartnerAppConfig {
  AdminUsers?: Array<string>;
  Arguments?: Record<string, string>;
}
export interface PartnerAppMaintenanceConfig {
  MaintenanceWindowStart?: string;
}
export type PartnerAppName = string;

export type PartnerAppStatus = "CREATING" | "UPDATING" | "DELETING" | "AVAILABLE" | "FAILED" | "UPDATE_FAILED" | "DELETED";
export type PartnerAppSummaries = Array<PartnerAppSummary>;
export interface PartnerAppSummary {
  Arn?: string;
  Name?: string;
  Type?: PartnerAppType;
  Status?: PartnerAppStatus;
  CreationTime?: Date | string;
}
export type PartnerAppType = "LAKERA_GUARD" | "COMET" | "DEEPCHECKS_LLM_EVALUATION" | "FIDDLER";
export interface PendingDeploymentSummary {
  EndpointConfigName: string;
  ProductionVariants?: Array<PendingProductionVariantSummary>;
  StartTime?: Date | string;
  ShadowProductionVariants?: Array<PendingProductionVariantSummary>;
}
export interface PendingProductionVariantSummary {
  VariantName: string;
  DeployedImages?: Array<DeployedImage>;
  CurrentWeight?: number;
  DesiredWeight?: number;
  CurrentInstanceCount?: number;
  DesiredInstanceCount?: number;
  InstanceType?: ProductionVariantInstanceType;
  AcceleratorType?: ProductionVariantAcceleratorType;
  VariantStatus?: Array<ProductionVariantStatus>;
  CurrentServerlessConfig?: ProductionVariantServerlessConfig;
  DesiredServerlessConfig?: ProductionVariantServerlessConfig;
  ManagedInstanceScaling?: ProductionVariantManagedInstanceScaling;
  RoutingConfig?: ProductionVariantRoutingConfig;
}
export type PendingProductionVariantSummaryList = Array<PendingProductionVariantSummary>;
export type Percentage = number;

export interface Phase {
  InitialNumberOfUsers?: number;
  SpawnRate?: number;
  DurationInSeconds?: number;
}
export type Phases = Array<Phase>;
export interface Pipeline {
  PipelineArn?: string;
  PipelineName?: string;
  PipelineDisplayName?: string;
  PipelineDescription?: string;
  RoleArn?: string;
  PipelineStatus?: PipelineStatus;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  LastRunTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedBy?: UserContext;
  ParallelismConfiguration?: ParallelismConfiguration;
  Tags?: Array<Tag>;
}
export type PipelineArn = string;

export type PipelineDefinition = string;

export interface PipelineDefinitionS3Location {
  Bucket: string;
  ObjectKey: string;
  VersionId?: string;
}
export type PipelineDescription = string;

export interface PipelineExecution {
  PipelineArn?: string;
  PipelineExecutionArn?: string;
  PipelineExecutionDisplayName?: string;
  PipelineExecutionStatus?: PipelineExecutionStatus;
  PipelineExecutionDescription?: string;
  PipelineExperimentConfig?: PipelineExperimentConfig;
  FailureReason?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedBy?: UserContext;
  ParallelismConfiguration?: ParallelismConfiguration;
  SelectiveExecutionConfig?: SelectiveExecutionConfig;
  PipelineParameters?: Array<Parameter>;
}
export type PipelineExecutionArn = string;

export type PipelineExecutionDescription = string;

export type PipelineExecutionFailureReason = string;

export type PipelineExecutionName = string;

export type PipelineExecutionStatus = "EXECUTING" | "STOPPING" | "STOPPED" | "FAILED" | "SUCCEEDED";
export interface PipelineExecutionStep {
  StepName?: string;
  StepDisplayName?: string;
  StepDescription?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  StepStatus?: StepStatus;
  CacheHitResult?: CacheHitResult;
  FailureReason?: string;
  Metadata?: PipelineExecutionStepMetadata;
  AttemptCount?: number;
  SelectiveExecutionResult?: SelectiveExecutionResult;
}
export type PipelineExecutionStepList = Array<PipelineExecutionStep>;
export interface PipelineExecutionStepMetadata {
  TrainingJob?: TrainingJobStepMetadata;
  ProcessingJob?: ProcessingJobStepMetadata;
  TransformJob?: TransformJobStepMetadata;
  TuningJob?: TuningJobStepMetaData;
  Model?: ModelStepMetadata;
  RegisterModel?: RegisterModelStepMetadata;
  Condition?: ConditionStepMetadata;
  Callback?: CallbackStepMetadata;
  Lambda?: LambdaStepMetadata;
  EMR?: EMRStepMetadata;
  QualityCheck?: QualityCheckStepMetadata;
  ClarifyCheck?: ClarifyCheckStepMetadata;
  Fail?: FailStepMetadata;
  AutoMLJob?: AutoMLJobStepMetadata;
  Endpoint?: EndpointStepMetadata;
  EndpointConfig?: EndpointConfigStepMetadata;
}
export interface PipelineExecutionSummary {
  PipelineExecutionArn?: string;
  StartTime?: Date | string;
  PipelineExecutionStatus?: PipelineExecutionStatus;
  PipelineExecutionDescription?: string;
  PipelineExecutionDisplayName?: string;
  PipelineExecutionFailureReason?: string;
}
export type PipelineExecutionSummaryList = Array<PipelineExecutionSummary>;
export interface PipelineExperimentConfig {
  ExperimentName?: string;
  TrialName?: string;
}
export type PipelineName = string;

export type PipelineNameOrArn = string;

export type PipelineParameterName = string;

export type PipelineStatus = "ACTIVE" | "DELETING";
export interface PipelineSummary {
  PipelineArn?: string;
  PipelineName?: string;
  PipelineDisplayName?: string;
  PipelineDescription?: string;
  RoleArn?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  LastExecutionTime?: Date | string;
}
export type PipelineSummaryList = Array<PipelineSummary>;
export type PlatformIdentifier = string;

export type PolicyString = string;

export interface PredefinedMetricSpecification {
  PredefinedMetricType?: string;
}
export type PreemptTeamTasks = "NEVER" | "LOWERPRIORITY";
export type PresignedDomainUrl = string;

export interface PresignedUrlAccessConfig {
  AcceptEula?: boolean;
  ExpectedS3Url?: string;
}
export interface PriorityClass {
  Name: string;
  Weight: number;
}
export type PriorityClassList = Array<PriorityClass>;
export type PriorityWeight = number;

export type ProbabilityThresholdAttribute = number;

export type ProblemType = "BINARY_CLASSIFICATION" | "MULTICLASS_CLASSIFICATION" | "REGRESSION";
export interface ProcessingClusterConfig {
  InstanceCount: number;
  InstanceType: ProcessingInstanceType;
  VolumeSizeInGB: number;
  VolumeKmsKeyId?: string;
}
export type ProcessingEnvironmentKey = string;

export type ProcessingEnvironmentMap = Record<string, string>;
export type ProcessingEnvironmentValue = string;

export interface ProcessingFeatureStoreOutput {
  FeatureGroupName: string;
}
export interface ProcessingInput {
  InputName: string;
  AppManaged?: boolean;
  S3Input?: ProcessingS3Input;
  DatasetDefinition?: DatasetDefinition;
}
export type ProcessingInputs = Array<ProcessingInput>;
export type ProcessingInstanceCount = number;

export type ProcessingInstanceType = "ML_T3_MEDIUM" | "ML_T3_LARGE" | "ML_T3_XLARGE" | "ML_T3_2XLARGE" | "ML_M4_XLARGE" | "ML_M4_2XLARGE" | "ML_M4_4XLARGE" | "ML_M4_10XLARGE" | "ML_M4_16XLARGE" | "ML_C4_XLARGE" | "ML_C4_2XLARGE" | "ML_C4_4XLARGE" | "ML_C4_8XLARGE" | "ML_P2_XLARGE" | "ML_P2_8XLARGE" | "ML_P2_16XLARGE" | "ML_P3_2XLARGE" | "ML_P3_8XLARGE" | "ML_P3_16XLARGE" | "ML_C5_XLARGE" | "ML_C5_2XLARGE" | "ML_C5_4XLARGE" | "ML_C5_9XLARGE" | "ML_C5_18XLARGE" | "ML_M5_LARGE" | "ML_M5_XLARGE" | "ML_M5_2XLARGE" | "ML_M5_4XLARGE" | "ML_M5_12XLARGE" | "ML_M5_24XLARGE" | "ML_R5_LARGE" | "ML_R5_XLARGE" | "ML_R5_2XLARGE" | "ML_R5_4XLARGE" | "ML_R5_8XLARGE" | "ML_R5_12XLARGE" | "ML_R5_16XLARGE" | "ML_R5_24XLARGE" | "ML_G4DN_XLARGE" | "ML_G4DN_2XLARGE" | "ML_G4DN_4XLARGE" | "ML_G4DN_8XLARGE" | "ML_G4DN_12XLARGE" | "ML_G4DN_16XLARGE" | "ML_G5_XLARGE" | "ML_G5_2XLARGE" | "ML_G5_4XLARGE" | "ML_G5_8XLARGE" | "ML_G5_16XLARGE" | "ML_G5_12XLARGE" | "ML_G5_24XLARGE" | "ML_G5_48XLARGE" | "ML_R5D_LARGE" | "ML_R5D_XLARGE" | "ML_R5D_2XLARGE" | "ML_R5D_4XLARGE" | "ML_R5D_8XLARGE" | "ML_R5D_12XLARGE" | "ML_R5D_16XLARGE" | "ML_R5D_24XLARGE" | "ML_G6_XLARGE" | "ML_G6_2XLARGE" | "ML_G6_4XLARGE" | "ML_G6_8XLARGE" | "ML_G6_12XLARGE" | "ML_G6_16XLARGE" | "ML_G6_24XLARGE" | "ML_G6_48XLARGE" | "ML_G6E_XLARGE" | "ML_G6E_2XLARGE" | "ML_G6E_4XLARGE" | "ML_G6E_8XLARGE" | "ML_G6E_12XLARGE" | "ML_G6E_16XLARGE" | "ML_G6E_24XLARGE" | "ML_G6E_48XLARGE" | "ML_M6I_LARGE" | "ML_M6I_XLARGE" | "ML_M6I_2XLARGE" | "ML_M6I_4XLARGE" | "ML_M6I_8XLARGE" | "ML_M6I_12XLARGE" | "ML_M6I_16XLARGE" | "ML_M6I_24XLARGE" | "ML_M6I_32XLARGE" | "ML_C6I_XLARGE" | "ML_C6I_2XLARGE" | "ML_C6I_4XLARGE" | "ML_C6I_8XLARGE" | "ML_C6I_12XLARGE" | "ML_C6I_16XLARGE" | "ML_C6I_24XLARGE" | "ML_C6I_32XLARGE" | "ML_M7I_LARGE" | "ML_M7I_XLARGE" | "ML_M7I_2XLARGE" | "ML_M7I_4XLARGE" | "ML_M7I_8XLARGE" | "ML_M7I_12XLARGE" | "ML_M7I_16XLARGE" | "ML_M7I_24XLARGE" | "ML_M7I_48XLARGE" | "ML_C7I_LARGE" | "ML_C7I_XLARGE" | "ML_C7I_2XLARGE" | "ML_C7I_4XLARGE" | "ML_C7I_8XLARGE" | "ML_C7I_12XLARGE" | "ML_C7I_16XLARGE" | "ML_C7I_24XLARGE" | "ML_C7I_48XLARGE" | "ML_R7I_LARGE" | "ML_R7I_XLARGE" | "ML_R7I_2XLARGE" | "ML_R7I_4XLARGE" | "ML_R7I_8XLARGE" | "ML_R7I_12XLARGE" | "ML_R7I_16XLARGE" | "ML_R7I_24XLARGE" | "ML_R7I_48XLARGE";
export interface ProcessingJob {
  ProcessingInputs?: Array<ProcessingInput>;
  ProcessingOutputConfig?: ProcessingOutputConfig;
  ProcessingJobName?: string;
  ProcessingResources?: ProcessingResources;
  StoppingCondition?: ProcessingStoppingCondition;
  AppSpecification?: AppSpecification;
  Environment?: Record<string, string>;
  NetworkConfig?: NetworkConfig;
  RoleArn?: string;
  ExperimentConfig?: ExperimentConfig;
  ProcessingJobArn?: string;
  ProcessingJobStatus?: ProcessingJobStatus;
  ExitMessage?: string;
  FailureReason?: string;
  ProcessingEndTime?: Date | string;
  ProcessingStartTime?: Date | string;
  LastModifiedTime?: Date | string;
  CreationTime?: Date | string;
  MonitoringScheduleArn?: string;
  AutoMLJobArn?: string;
  TrainingJobArn?: string;
  Tags?: Array<Tag>;
}
export type ProcessingJobArn = string;

export type ProcessingJobName = string;

export type ProcessingJobStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED" | "STOPPING" | "STOPPED";
export interface ProcessingJobStepMetadata {
  Arn?: string;
}
export type ProcessingJobSummaries = Array<ProcessingJobSummary>;
export interface ProcessingJobSummary {
  ProcessingJobName: string;
  ProcessingJobArn: string;
  CreationTime: Date | string;
  ProcessingEndTime?: Date | string;
  LastModifiedTime?: Date | string;
  ProcessingJobStatus: ProcessingJobStatus;
  FailureReason?: string;
  ExitMessage?: string;
}
export type ProcessingLocalPath = string;

export type ProcessingMaxRuntimeInSeconds = number;

export interface ProcessingOutput {
  OutputName: string;
  S3Output?: ProcessingS3Output;
  FeatureStoreOutput?: ProcessingFeatureStoreOutput;
  AppManaged?: boolean;
}
export interface ProcessingOutputConfig {
  Outputs: Array<ProcessingOutput>;
  KmsKeyId?: string;
}
export type ProcessingOutputs = Array<ProcessingOutput>;
export interface ProcessingResources {
  ClusterConfig: ProcessingClusterConfig;
}
export type ProcessingS3CompressionType = "NONE" | "GZIP";
export type ProcessingS3DataDistributionType = "FULLYREPLICATED" | "SHARDEDBYS3KEY";
export type ProcessingS3DataType = "MANIFEST_FILE" | "S3_PREFIX";
export interface ProcessingS3Input {
  S3Uri: string;
  LocalPath?: string;
  S3DataType: ProcessingS3DataType;
  S3InputMode?: ProcessingS3InputMode;
  S3DataDistributionType?: ProcessingS3DataDistributionType;
  S3CompressionType?: ProcessingS3CompressionType;
}
export type ProcessingS3InputMode = "PIPE" | "FILE";
export interface ProcessingS3Output {
  S3Uri: string;
  LocalPath?: string;
  S3UploadMode: ProcessingS3UploadMode;
}
export type ProcessingS3UploadMode = "CONTINUOUS" | "END_OF_JOB";
export interface ProcessingStoppingCondition {
  MaxRuntimeInSeconds: number;
}
export type ProcessingVolumeSizeInGB = number;

export type Processor = "CPU" | "GPU";
export type ProductId = string;

export interface ProductionVariant {
  VariantName: string;
  ModelName?: string;
  InitialInstanceCount?: number;
  InstanceType?: ProductionVariantInstanceType;
  InitialVariantWeight?: number;
  AcceleratorType?: ProductionVariantAcceleratorType;
  CoreDumpConfig?: ProductionVariantCoreDumpConfig;
  ServerlessConfig?: ProductionVariantServerlessConfig;
  VolumeSizeInGB?: number;
  ModelDataDownloadTimeoutInSeconds?: number;
  ContainerStartupHealthCheckTimeoutInSeconds?: number;
  EnableSSMAccess?: boolean;
  ManagedInstanceScaling?: ProductionVariantManagedInstanceScaling;
  RoutingConfig?: ProductionVariantRoutingConfig;
  InferenceAmiVersion?: ProductionVariantInferenceAmiVersion;
  CapacityReservationConfig?: ProductionVariantCapacityReservationConfig;
}
export type ProductionVariantAcceleratorType = "ML_EIA1_MEDIUM" | "ML_EIA1_LARGE" | "ML_EIA1_XLARGE" | "ML_EIA2_MEDIUM" | "ML_EIA2_LARGE" | "ML_EIA2_XLARGE";
export interface ProductionVariantCapacityReservationConfig {
  CapacityReservationPreference?: CapacityReservationPreference;
  MlReservationArn?: string;
}
export interface ProductionVariantCapacityReservationSummary {
  MlReservationArn?: string;
  CapacityReservationPreference?: CapacityReservationPreference;
  TotalInstanceCount?: number;
  AvailableInstanceCount?: number;
  UsedByCurrentEndpoint?: number;
  Ec2CapacityReservations?: Array<Ec2CapacityReservation>;
}
export type ProductionVariantContainerStartupHealthCheckTimeoutInSeconds = number;

export interface ProductionVariantCoreDumpConfig {
  DestinationS3Uri: string;
  KmsKeyId?: string;
}
export type ProductionVariantInferenceAmiVersion = "AL2_GPU_2" | "AL2_GPU_2_1" | "AL2_GPU_3_1" | "AL2_NEURON_2";
export type ProductionVariantInstanceType = "ML_T2_MEDIUM" | "ML_T2_LARGE" | "ML_T2_XLARGE" | "ML_T2_2XLARGE" | "ML_M4_XLARGE" | "ML_M4_2XLARGE" | "ML_M4_4XLARGE" | "ML_M4_10XLARGE" | "ML_M4_16XLARGE" | "ML_M5_LARGE" | "ML_M5_XLARGE" | "ML_M5_2XLARGE" | "ML_M5_4XLARGE" | "ML_M5_12XLARGE" | "ML_M5_24XLARGE" | "ML_M5D_LARGE" | "ML_M5D_XLARGE" | "ML_M5D_2XLARGE" | "ML_M5D_4XLARGE" | "ML_M5D_12XLARGE" | "ML_M5D_24XLARGE" | "ML_C4_LARGE" | "ML_C4_XLARGE" | "ML_C4_2XLARGE" | "ML_C4_4XLARGE" | "ML_C4_8XLARGE" | "ML_P2_XLARGE" | "ML_P2_8XLARGE" | "ML_P2_16XLARGE" | "ML_P3_2XLARGE" | "ML_P3_8XLARGE" | "ML_P3_16XLARGE" | "ML_C5_LARGE" | "ML_C5_XLARGE" | "ML_C5_2XLARGE" | "ML_C5_4XLARGE" | "ML_C5_9XLARGE" | "ML_C5_18XLARGE" | "ML_C5D_LARGE" | "ML_C5D_XLARGE" | "ML_C5D_2XLARGE" | "ML_C5D_4XLARGE" | "ML_C5D_9XLARGE" | "ML_C5D_18XLARGE" | "ML_G4DN_XLARGE" | "ML_G4DN_2XLARGE" | "ML_G4DN_4XLARGE" | "ML_G4DN_8XLARGE" | "ML_G4DN_12XLARGE" | "ML_G4DN_16XLARGE" | "ML_R5_LARGE" | "ML_R5_XLARGE" | "ML_R5_2XLARGE" | "ML_R5_4XLARGE" | "ML_R5_12XLARGE" | "ML_R5_24XLARGE" | "ML_R5D_LARGE" | "ML_R5D_XLARGE" | "ML_R5D_2XLARGE" | "ML_R5D_4XLARGE" | "ML_R5D_12XLARGE" | "ML_R5D_24XLARGE" | "ML_INF1_XLARGE" | "ML_INF1_2XLARGE" | "ML_INF1_6XLARGE" | "ML_INF1_24XLARGE" | "ML_DL1_24XLARGE" | "ML_C6I_LARGE" | "ML_C6I_XLARGE" | "ML_C6I_2XLARGE" | "ML_C6I_4XLARGE" | "ML_C6I_8XLARGE" | "ML_C6I_12XLARGE" | "ML_C6I_16XLARGE" | "ML_C6I_24XLARGE" | "ML_C6I_32XLARGE" | "ML_M6I_LARGE" | "ML_M6I_XLARGE" | "ML_M6I_2XLARGE" | "ML_M6I_4XLARGE" | "ML_M6I_8XLARGE" | "ML_M6I_12XLARGE" | "ML_M6I_16XLARGE" | "ML_M6I_24XLARGE" | "ML_M6I_32XLARGE" | "ML_R6I_LARGE" | "ML_R6I_XLARGE" | "ML_R6I_2XLARGE" | "ML_R6I_4XLARGE" | "ML_R6I_8XLARGE" | "ML_R6I_12XLARGE" | "ML_R6I_16XLARGE" | "ML_R6I_24XLARGE" | "ML_R6I_32XLARGE" | "ML_G5_XLARGE" | "ML_G5_2XLARGE" | "ML_G5_4XLARGE" | "ML_G5_8XLARGE" | "ML_G5_12XLARGE" | "ML_G5_16XLARGE" | "ML_G5_24XLARGE" | "ML_G5_48XLARGE" | "ML_G6_XLARGE" | "ML_G6_2XLARGE" | "ML_G6_4XLARGE" | "ML_G6_8XLARGE" | "ML_G6_12XLARGE" | "ML_G6_16XLARGE" | "ML_G6_24XLARGE" | "ML_G6_48XLARGE" | "ML_R8G_MEDIUM" | "ML_R8G_LARGE" | "ML_R8G_XLARGE" | "ML_R8G_2XLARGE" | "ML_R8G_4XLARGE" | "ML_R8G_8XLARGE" | "ML_R8G_12XLARGE" | "ML_R8G_16XLARGE" | "ML_R8G_24XLARGE" | "ML_R8G_48XLARGE" | "ML_G6E_XLARGE" | "ML_G6E_2XLARGE" | "ML_G6E_4XLARGE" | "ML_G6E_8XLARGE" | "ML_G6E_12XLARGE" | "ML_G6E_16XLARGE" | "ML_G6E_24XLARGE" | "ML_G6E_48XLARGE" | "ML_P4D_24XLARGE" | "ML_C7G_LARGE" | "ML_C7G_XLARGE" | "ML_C7G_2XLARGE" | "ML_C7G_4XLARGE" | "ML_C7G_8XLARGE" | "ML_C7G_12XLARGE" | "ML_C7G_16XLARGE" | "ML_M6G_LARGE" | "ML_M6G_XLARGE" | "ML_M6G_2XLARGE" | "ML_M6G_4XLARGE" | "ML_M6G_8XLARGE" | "ML_M6G_12XLARGE" | "ML_M6G_16XLARGE" | "ML_M6GD_LARGE" | "ML_M6GD_XLARGE" | "ML_M6GD_2XLARGE" | "ML_M6GD_4XLARGE" | "ML_M6GD_8XLARGE" | "ML_M6GD_12XLARGE" | "ML_M6GD_16XLARGE" | "ML_C6G_LARGE" | "ML_C6G_XLARGE" | "ML_C6G_2XLARGE" | "ML_C6G_4XLARGE" | "ML_C6G_8XLARGE" | "ML_C6G_12XLARGE" | "ML_C6G_16XLARGE" | "ML_C6GD_LARGE" | "ML_C6GD_XLARGE" | "ML_C6GD_2XLARGE" | "ML_C6GD_4XLARGE" | "ML_C6GD_8XLARGE" | "ML_C6GD_12XLARGE" | "ML_C6GD_16XLARGE" | "ML_C6GN_LARGE" | "ML_C6GN_XLARGE" | "ML_C6GN_2XLARGE" | "ML_C6GN_4XLARGE" | "ML_C6GN_8XLARGE" | "ML_C6GN_12XLARGE" | "ML_C6GN_16XLARGE" | "ML_R6G_LARGE" | "ML_R6G_XLARGE" | "ML_R6G_2XLARGE" | "ML_R6G_4XLARGE" | "ML_R6G_8XLARGE" | "ML_R6G_12XLARGE" | "ML_R6G_16XLARGE" | "ML_R6GD_LARGE" | "ML_R6GD_XLARGE" | "ML_R6GD_2XLARGE" | "ML_R6GD_4XLARGE" | "ML_R6GD_8XLARGE" | "ML_R6GD_12XLARGE" | "ML_R6GD_16XLARGE" | "ML_P4DE_24XLARGE" | "ML_TRN1_2XLARGE" | "ML_TRN1_32XLARGE" | "ML_TRN1N_32XLARGE" | "ML_TRN2_48XLARGE" | "ML_INF2_XLARGE" | "ML_INF2_8XLARGE" | "ML_INF2_24XLARGE" | "ML_INF2_48XLARGE" | "ML_P5_48XLARGE" | "ML_P5E_48XLARGE" | "ML_P5EN_48XLARGE" | "ML_M7I_LARGE" | "ML_M7I_XLARGE" | "ML_M7I_2XLARGE" | "ML_M7I_4XLARGE" | "ML_M7I_8XLARGE" | "ML_M7I_12XLARGE" | "ML_M7I_16XLARGE" | "ML_M7I_24XLARGE" | "ML_M7I_48XLARGE" | "ML_C7I_LARGE" | "ML_C7I_XLARGE" | "ML_C7I_2XLARGE" | "ML_C7I_4XLARGE" | "ML_C7I_8XLARGE" | "ML_C7I_12XLARGE" | "ML_C7I_16XLARGE" | "ML_C7I_24XLARGE" | "ML_C7I_48XLARGE" | "ML_R7I_LARGE" | "ML_R7I_XLARGE" | "ML_R7I_2XLARGE" | "ML_R7I_4XLARGE" | "ML_R7I_8XLARGE" | "ML_R7I_12XLARGE" | "ML_R7I_16XLARGE" | "ML_R7I_24XLARGE" | "ML_R7I_48XLARGE" | "ML_C8G_MEDIUM" | "ML_C8G_LARGE" | "ML_C8G_XLARGE" | "ML_C8G_2XLARGE" | "ML_C8G_4XLARGE" | "ML_C8G_8XLARGE" | "ML_C8G_12XLARGE" | "ML_C8G_16XLARGE" | "ML_C8G_24XLARGE" | "ML_C8G_48XLARGE" | "ML_R7GD_MEDIUM" | "ML_R7GD_LARGE" | "ML_R7GD_XLARGE" | "ML_R7GD_2XLARGE" | "ML_R7GD_4XLARGE" | "ML_R7GD_8XLARGE" | "ML_R7GD_12XLARGE" | "ML_R7GD_16XLARGE" | "ML_M8G_MEDIUM" | "ML_M8G_LARGE" | "ML_M8G_XLARGE" | "ML_M8G_2XLARGE" | "ML_M8G_4XLARGE" | "ML_M8G_8XLARGE" | "ML_M8G_12XLARGE" | "ML_M8G_16XLARGE" | "ML_M8G_24XLARGE" | "ML_M8G_48XLARGE" | "ML_C6IN_LARGE" | "ML_C6IN_XLARGE" | "ML_C6IN_2XLARGE" | "ML_C6IN_4XLARGE" | "ML_C6IN_8XLARGE" | "ML_C6IN_12XLARGE" | "ML_C6IN_16XLARGE" | "ML_C6IN_24XLARGE" | "ML_C6IN_32XLARGE" | "ML_P6_B200_48XLARGE" | "ML_P6E_GB200_36XLARGE";
export type ProductionVariantList = Array<ProductionVariant>;
export interface ProductionVariantManagedInstanceScaling {
  Status?: ManagedInstanceScalingStatus;
  MinInstanceCount?: number;
  MaxInstanceCount?: number;
}
export type ProductionVariantModelDataDownloadTimeoutInSeconds = number;

export interface ProductionVariantRoutingConfig {
  RoutingStrategy: RoutingStrategy;
}
export interface ProductionVariantServerlessConfig {
  MemorySizeInMB: number;
  MaxConcurrency: number;
  ProvisionedConcurrency?: number;
}
export interface ProductionVariantServerlessUpdateConfig {
  MaxConcurrency?: number;
  ProvisionedConcurrency?: number;
}
export type ProductionVariantSSMAccess = boolean;

export interface ProductionVariantStatus {
  Status: VariantStatus;
  StatusMessage?: string;
  StartTime?: Date | string;
}
export type ProductionVariantStatusList = Array<ProductionVariantStatus>;
export interface ProductionVariantSummary {
  VariantName: string;
  DeployedImages?: Array<DeployedImage>;
  CurrentWeight?: number;
  DesiredWeight?: number;
  CurrentInstanceCount?: number;
  DesiredInstanceCount?: number;
  VariantStatus?: Array<ProductionVariantStatus>;
  CurrentServerlessConfig?: ProductionVariantServerlessConfig;
  DesiredServerlessConfig?: ProductionVariantServerlessConfig;
  ManagedInstanceScaling?: ProductionVariantManagedInstanceScaling;
  RoutingConfig?: ProductionVariantRoutingConfig;
  CapacityReservationConfig?: ProductionVariantCapacityReservationSummary;
}
export type ProductionVariantSummaryList = Array<ProductionVariantSummary>;
export type ProductionVariantVolumeSizeInGB = number;

export type ProductListings = Array<string>;
export interface ProfilerConfig {
  S3OutputPath?: string;
  ProfilingIntervalInMilliseconds?: number;
  ProfilingParameters?: Record<string, string>;
  DisableProfiler?: boolean;
}
export interface ProfilerConfigForUpdate {
  S3OutputPath?: string;
  ProfilingIntervalInMilliseconds?: number;
  ProfilingParameters?: Record<string, string>;
  DisableProfiler?: boolean;
}
export interface ProfilerRuleConfiguration {
  RuleConfigurationName: string;
  LocalPath?: string;
  S3OutputPath?: string;
  RuleEvaluatorImage: string;
  InstanceType?: ProcessingInstanceType;
  VolumeSizeInGB?: number;
  RuleParameters?: Record<string, string>;
}
export type ProfilerRuleConfigurations = Array<ProfilerRuleConfiguration>;
export interface ProfilerRuleEvaluationStatus {
  RuleConfigurationName?: string;
  RuleEvaluationJobArn?: string;
  RuleEvaluationStatus?: RuleEvaluationStatus;
  StatusDetails?: string;
  LastModifiedTime?: Date | string;
}
export type ProfilerRuleEvaluationStatuses = Array<ProfilerRuleEvaluationStatus>;
export type ProfilingIntervalInMilliseconds = number;

export type ProfilingParameters = Record<string, string>;
export type ProfilingStatus = "ENABLED" | "DISABLED";
export type ProgrammingLang = string;

export interface Project {
  ProjectArn?: string;
  ProjectName?: string;
  ProjectId?: string;
  ProjectDescription?: string;
  ServiceCatalogProvisioningDetails?: ServiceCatalogProvisioningDetails;
  ServiceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;
  ProjectStatus?: ProjectStatus;
  CreatedBy?: UserContext;
  CreationTime?: Date | string;
  TemplateProviderDetails?: Array<TemplateProviderDetail>;
  Tags?: Array<Tag>;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
}
export type ProjectArn = string;

export type ProjectEntityName = string;

export type ProjectId = string;

export type ProjectSortBy = "NAME" | "CREATION_TIME";
export type ProjectSortOrder = "ASCENDING" | "DESCENDING";
export type ProjectStatus = "PENDING" | "CREATE_IN_PROGRESS" | "CREATE_COMPLETED" | "CREATE_FAILED" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETE_COMPLETED" | "UPDATE_IN_PROGRESS" | "UPDATE_COMPLETED" | "UPDATE_FAILED";
export interface ProjectSummary {
  ProjectName: string;
  ProjectDescription?: string;
  ProjectArn: string;
  ProjectId: string;
  CreationTime: Date | string;
  ProjectStatus: ProjectStatus;
}
export type ProjectSummaryList = Array<ProjectSummary>;
export type PropertyNameHint = string;

export interface PropertyNameQuery {
  PropertyNameHint: string;
}
export interface PropertyNameSuggestion {
  PropertyName?: string;
}
export type PropertyNameSuggestionList = Array<PropertyNameSuggestion>;
export type ProvisionedProductStatusMessage = string;

export interface ProvisioningParameter {
  Key?: string;
  Value?: string;
}
export type ProvisioningParameterKey = string;

export type ProvisioningParameters = Array<ProvisioningParameter>;
export type ProvisioningParameterValue = string;

export interface PublicWorkforceTaskPrice {
  AmountInUsd?: USD;
}
export interface PutModelPackageGroupPolicyInput {
  ModelPackageGroupName: string;
  ResourcePolicy: string;
}
export interface PutModelPackageGroupPolicyOutput {
  ModelPackageGroupArn: string;
}
export type QProfileArn = string;

export interface QualityCheckStepMetadata {
  CheckType?: string;
  BaselineUsedForDriftCheckStatistics?: string;
  BaselineUsedForDriftCheckConstraints?: string;
  CalculatedBaselineStatistics?: string;
  CalculatedBaselineConstraints?: string;
  ModelPackageGroupName?: string;
  ViolationReport?: string;
  CheckJobArn?: string;
  SkipCheck?: boolean;
  RegisterNewBaseline?: boolean;
}
export interface QueryFilters {
  Types?: Array<string>;
  LineageTypes?: Array<LineageType>;
  CreatedBefore?: Date | string;
  CreatedAfter?: Date | string;
  ModifiedBefore?: Date | string;
  ModifiedAfter?: Date | string;
  Properties?: Record<string, string>;
}
export type QueryLineageMaxDepth = number;

export type QueryLineageMaxResults = number;

export interface QueryLineageRequest {
  StartArns?: Array<string>;
  Direction?: Direction;
  IncludeEdges?: boolean;
  Filters?: QueryFilters;
  MaxDepth?: number;
  MaxResults?: number;
  NextToken?: string;
}
export interface QueryLineageResponse {
  Vertices?: Array<Vertex>;
  Edges?: Array<Edge>;
  NextToken?: string;
}
export type QueryLineageStartArns = Array<string>;
export type QueryLineageTypes = Array<LineageType>;
export type QueryProperties = Record<string, string>;
export type QueryTypes = Array<string>;
export type RandomSeed = number;

export interface RealTimeInferenceConfig {
  InstanceType: InstanceType;
  InstanceCount: number;
}
export type RealtimeInferenceInstanceTypes = Array<ProductionVariantInstanceType>;
export interface RealTimeInferenceRecommendation {
  RecommendationId: string;
  InstanceType: ProductionVariantInstanceType;
  Environment?: Record<string, string>;
}
export type RealTimeInferenceRecommendations = Array<RealTimeInferenceRecommendation>;
export type RecommendationFailureReason = string;

export type RecommendationJobArn = string;

export type RecommendationJobCompilationJobName = string;

export interface RecommendationJobCompiledOutputConfig {
  S3OutputUri?: string;
}
export interface RecommendationJobContainerConfig {
  Domain?: string;
  Task?: string;
  Framework?: string;
  FrameworkVersion?: string;
  PayloadConfig?: RecommendationJobPayloadConfig;
  NearestModelName?: string;
  SupportedInstanceTypes?: Array<string>;
  SupportedEndpointType?: RecommendationJobSupportedEndpointType;
  DataInputConfig?: string;
  SupportedResponseMIMETypes?: Array<string>;
}
export type RecommendationJobDataInputConfig = string;

export type RecommendationJobDescription = string;

export type RecommendationJobFrameworkVersion = string;

export interface RecommendationJobInferenceBenchmark {
  Metrics?: RecommendationMetrics;
  EndpointMetrics?: InferenceMetrics;
  EndpointConfiguration?: EndpointOutputConfiguration;
  ModelConfiguration: ModelConfiguration;
  FailureReason?: string;
  InvocationEndTime?: Date | string;
  InvocationStartTime?: Date | string;
}
export interface RecommendationJobInputConfig {
  ModelPackageVersionArn?: string;
  ModelName?: string;
  JobDurationInSeconds?: number;
  TrafficPattern?: TrafficPattern;
  ResourceLimit?: RecommendationJobResourceLimit;
  EndpointConfigurations?: Array<EndpointInputConfiguration>;
  VolumeKmsKeyId?: string;
  ContainerConfig?: RecommendationJobContainerConfig;
  Endpoints?: Array<EndpointInfo>;
  VpcConfig?: RecommendationJobVpcConfig;
}
export type RecommendationJobName = string;

export interface RecommendationJobOutputConfig {
  KmsKeyId?: string;
  CompiledOutputConfig?: RecommendationJobCompiledOutputConfig;
}
export interface RecommendationJobPayloadConfig {
  SamplePayloadUrl?: string;
  SupportedContentTypes?: Array<string>;
}
export interface RecommendationJobResourceLimit {
  MaxNumberOfTests?: number;
  MaxParallelOfTests?: number;
}
export type RecommendationJobStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "STOPPING" | "STOPPED" | "DELETING" | "DELETED";
export interface RecommendationJobStoppingConditions {
  MaxInvocations?: number;
  ModelLatencyThresholds?: Array<ModelLatencyThreshold>;
  FlatInvocations?: FlatInvocations;
}
export type RecommendationJobSupportedContentType = string;

export type RecommendationJobSupportedContentTypes = Array<string>;
export type RecommendationJobSupportedEndpointType = "REALTIME" | "SERVERLESS";
export type RecommendationJobSupportedInstanceTypes = Array<string>;
export type RecommendationJobSupportedResponseMIMEType = string;

export type RecommendationJobSupportedResponseMIMETypes = Array<string>;
export type RecommendationJobType = "DEFAULT" | "ADVANCED";
export interface RecommendationJobVpcConfig {
  SecurityGroupIds: Array<string>;
  Subnets: Array<string>;
}
export type RecommendationJobVpcSecurityGroupId = string;

export type RecommendationJobVpcSecurityGroupIds = Array<string>;
export type RecommendationJobVpcSubnetId = string;

export type RecommendationJobVpcSubnets = Array<string>;
export interface RecommendationMetrics {
  CostPerHour?: number;
  CostPerInference?: number;
  MaxInvocations?: number;
  ModelLatency?: number;
  CpuUtilization?: number;
  MemoryUtilization?: number;
  ModelSetupTime?: number;
}
export type RecommendationStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED" | "NOT_APPLICABLE";
export type RecommendationStepType = "BENCHMARK";
export type RecordWrapper = "NONE" | "RECORDIO";
export type RedshiftClusterId = string;

export type RedshiftDatabase = string;

export interface RedshiftDatasetDefinition {
  ClusterId: string;
  Database: string;
  DbUser: string;
  QueryString: string;
  ClusterRoleArn: string;
  OutputS3Uri: string;
  KmsKeyId?: string;
  OutputFormat: RedshiftResultFormat;
  OutputCompression?: RedshiftResultCompressionType;
}
export type RedshiftQueryString = string;

export type RedshiftResultCompressionType = "NONE" | "GZIP" | "BZIP2" | "ZSTD" | "SNAPPY";
export type RedshiftResultFormat = "PARQUET" | "CSV";
export type RedshiftUserName = string;

export type ReferenceMinVersion = string;

export type RegionName = string;

export interface RegisterDevicesRequest {
  DeviceFleetName: string;
  Devices: Array<Device>;
  Tags?: Array<Tag>;
}
export interface RegisterModelStepMetadata {
  Arn?: string;
}
export type Relation = "EQUAL_TO" | "GREATER_THAN_OR_EQUAL_TO";
export type ReleaseNotes = string;

export interface RemoteDebugConfig {
  EnableRemoteDebug?: boolean;
}
export interface RemoteDebugConfigForUpdate {
  EnableRemoteDebug?: boolean;
}
export interface RenderableTask {
  Input: string;
}
export interface RenderingError {
  Code: string;
  Message: string;
}
export type RenderingErrorList = Array<RenderingError>;
export interface RenderUiTemplateRequest {
  UiTemplate?: UiTemplate;
  Task: RenderableTask;
  RoleArn: string;
  HumanTaskUiArn?: string;
}
export interface RenderUiTemplateResponse {
  RenderedContent: string;
  Errors: Array<RenderingError>;
}
export type RepositoryAccessMode = "PLATFORM" | "VPC";
export interface RepositoryAuthConfig {
  RepositoryCredentialsProviderArn: string;
}
export type RepositoryCredentialsProviderArn = string;

export type RepositoryUrl = string;

export type ReservedCapacityArn = string;

export type ReservedCapacityDurationHours = number;

export type ReservedCapacityDurationMinutes = number;

export type ReservedCapacityInstanceCount = number;

export type ReservedCapacityInstanceType = "ML_P4D_24XLARGE" | "ML_P5_48XLARGE" | "ML_P5E_48XLARGE" | "ML_P5EN_48XLARGE" | "ML_TRN1_32XLARGE" | "ML_TRN2_48XLARGE" | "ML_P6_B200_48XLARGE";
export interface ReservedCapacityOffering {
  InstanceType: ReservedCapacityInstanceType;
  InstanceCount: number;
  AvailabilityZone?: string;
  DurationHours?: number;
  DurationMinutes?: number;
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export type ReservedCapacityOfferings = Array<ReservedCapacityOffering>;
export type ReservedCapacityStatus = "PENDING" | "ACTIVE" | "SCHEDULED" | "EXPIRED" | "FAILED";
export type ReservedCapacitySummaries = Array<ReservedCapacitySummary>;
export interface ReservedCapacitySummary {
  ReservedCapacityArn: string;
  InstanceType: ReservedCapacityInstanceType;
  TotalInstanceCount: number;
  Status: ReservedCapacityStatus;
  AvailabilityZone?: string;
  DurationHours?: number;
  DurationMinutes?: number;
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export interface ResolvedAttributes {
  AutoMLJobObjective?: AutoMLJobObjective;
  ProblemType?: ProblemType;
  CompletionCriteria?: AutoMLJobCompletionCriteria;
}
export type ResourceArn = string;

export interface ResourceCatalog {
  ResourceCatalogArn: string;
  ResourceCatalogName: string;
  Description: string;
  CreationTime: Date | string;
}
export type ResourceCatalogArn = string;

export type ResourceCatalogDescription = string;

export type ResourceCatalogList = Array<ResourceCatalog>;
export type ResourceCatalogName = string;

export type ResourceCatalogSortBy = "CREATION_TIME";
export type ResourceCatalogSortOrder = "ASCENDING" | "DESCENDING";
export interface ResourceConfig {
  InstanceType?: TrainingInstanceType;
  InstanceCount?: number;
  VolumeSizeInGB: number;
  VolumeKmsKeyId?: string;
  KeepAlivePeriodInSeconds?: number;
  InstanceGroups?: Array<InstanceGroup>;
  TrainingPlanArn?: string;
}
export interface ResourceConfigForUpdate {
  KeepAlivePeriodInSeconds: number;
}
export type ResourceId = string;

export type ResourceIdentifier = string;

export declare class ResourceInUse extends Data.TaggedError(
  "ResourceInUse",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceLimitExceeded extends Data.TaggedError(
  "ResourceLimitExceeded",
)<{
  readonly Message?: string;
}> {}
export interface ResourceLimits {
  MaxNumberOfTrainingJobs?: number;
  MaxParallelTrainingJobs: number;
  MaxRuntimeInSeconds?: number;
}
export declare class ResourceNotFound extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly Message?: string;
}> {}
export type ResourcePolicyString = string;

export type ResourcePropertyName = string;

export type ResourceRetainedBillableTimeInSeconds = number;

export interface ResourceSharingConfig {
  Strategy: ResourceSharingStrategy;
  BorrowLimit?: number;
}
export type ResourceSharingStrategy = "LEND" | "DONTLEND" | "LENDANDBORROW";
export interface ResourceSpec {
  SageMakerImageArn?: string;
  SageMakerImageVersionArn?: string;
  SageMakerImageVersionAlias?: string;
  InstanceType?: AppInstanceType;
  LifecycleConfigArn?: string;
}
export type ResourceType = "TRAINING_JOB" | "EXPERIMENT" | "EXPERIMENT_TRIAL" | "EXPERIMENT_TRIAL_COMPONENT" | "ENDPOINT" | "MODEL" | "MODEL_PACKAGE" | "MODEL_PACKAGE_GROUP" | "PIPELINE" | "PIPELINE_EXECUTION" | "FEATURE_GROUP" | "FEATURE_METADATA" | "IMAGE" | "IMAGE_VERSION" | "PROJECT" | "HYPER_PARAMETER_TUNING_JOB" | "MODEL_CARD";
export type ResponseMIMEType = string;

export type ResponseMIMETypes = Array<string>;
export interface RetentionPolicy {
  HomeEfsFileSystem?: RetentionType;
}
export type RetentionType = "Retain" | "Delete";
export interface RetryPipelineExecutionRequest {
  PipelineExecutionArn: string;
  ClientRequestToken: string;
  ParallelismConfiguration?: ParallelismConfiguration;
}
export interface RetryPipelineExecutionResponse {
  PipelineExecutionArn?: string;
}
export interface RetryStrategy {
  MaximumRetryAttempts: number;
}
export type RoleArn = string;

export interface RollingDeploymentPolicy {
  MaximumBatchSize: CapacitySizeConfig;
  RollbackMaximumBatchSize?: CapacitySizeConfig;
}
export interface RollingUpdatePolicy {
  MaximumBatchSize: CapacitySize;
  WaitIntervalInSeconds: number;
  MaximumExecutionTimeoutInSeconds?: number;
  RollbackMaximumBatchSize?: CapacitySize;
}
export type RootAccess = "ENABLED" | "DISABLED";
export type RoutingStrategy = "LEAST_OUTSTANDING_REQUESTS" | "RANDOM";
export interface RSessionAppSettings {
  DefaultResourceSpec?: ResourceSpec;
  CustomImages?: Array<CustomImage>;
}
export type RStudioServerProAccessStatus = "Enabled" | "Disabled";
export interface RStudioServerProAppSettings {
  AccessStatus?: RStudioServerProAccessStatus;
  UserGroup?: RStudioServerProUserGroup;
}
export interface RStudioServerProDomainSettings {
  DomainExecutionRoleArn: string;
  RStudioConnectUrl?: string;
  RStudioPackageManagerUrl?: string;
  DefaultResourceSpec?: ResourceSpec;
}
export interface RStudioServerProDomainSettingsForUpdate {
  DomainExecutionRoleArn: string;
  DefaultResourceSpec?: ResourceSpec;
  RStudioConnectUrl?: string;
  RStudioPackageManagerUrl?: string;
}
export type RStudioServerProUserGroup = "Admin" | "User";
export type RuleConfigurationName = string;

export type RuleEvaluationStatus = "IN_PROGRESS" | "NO_ISSUES_FOUND" | "ISSUES_FOUND" | "ERROR" | "STOPPING" | "STOPPED";
export type RuleParameters = Record<string, string>;
export type S3DataDistribution = "FULLY_REPLICATED" | "SHARDED_BY_S3_KEY";
export interface S3DataSource {
  S3DataType: S3DataType;
  S3Uri: string;
  S3DataDistributionType?: S3DataDistribution;
  AttributeNames?: Array<string>;
  InstanceGroupNames?: Array<string>;
  ModelAccessConfig?: ModelAccessConfig;
  HubAccessConfig?: HubAccessConfig;
}
export type S3DataType = "MANIFEST_FILE" | "S3_PREFIX" | "AUGMENTED_MANIFEST_FILE" | "CONVERSE";
export interface S3ModelDataSource {
  S3Uri: string;
  S3DataType: S3ModelDataType;
  CompressionType: ModelCompressionType;
  ModelAccessConfig?: ModelAccessConfig;
  HubAccessConfig?: InferenceHubAccessConfig;
  ManifestS3Uri?: string;
  ETag?: string;
  ManifestEtag?: string;
}
export type S3ModelDataType = "S3Prefix" | "S3Object";
export type S3ModelUri = string;

export type S3OutputPath = string;

export interface S3Presign {
  IamPolicyConstraints?: IamPolicyConstraints;
}
export interface S3StorageConfig {
  S3Uri: string;
  KmsKeyId?: string;
  ResolvedOutputS3Uri?: string;
}
export type S3Uri = string;

export type SageMakerImageName = "sagemaker_distribution";
export type SageMakerImageVersionAlias = string;

export type SageMakerImageVersionAliases = Array<string>;
export type SageMakerPublicHubContentArn = string;

export type SageMakerResourceName = "TRAINING_JOB" | "HYPERPOD_CLUSTER";
export type SageMakerResourceNames = Array<SageMakerResourceName>;
export type SagemakerServicecatalogStatus = "ENABLED" | "DISABLED";
export type SampleWeightAttributeName = string;

export type SamplingPercentage = number;

export type ScalingPolicies = Array<ScalingPolicy>;
export type ScalingPolicy = { TargetTracking: TargetTrackingScalingPolicyConfiguration };
export interface ScalingPolicyMetric {
  InvocationsPerInstance?: number;
  ModelLatency?: number;
}
export interface ScalingPolicyObjective {
  MinInvocationsPerMinute?: number;
  MaxInvocationsPerMinute?: number;
}
export interface ScheduleConfig {
  ScheduleExpression: string;
  DataAnalysisStartTime?: string;
  DataAnalysisEndTime?: string;
}
export interface ScheduledUpdateConfig {
  ScheduleExpression: string;
  DeploymentConfig?: DeploymentConfiguration;
}
export type ScheduleExpression = string;

export interface SchedulerConfig {
  PriorityClasses?: Array<PriorityClass>;
  FairShare?: FairShare;
}
export type SchedulerResourceStatus = "CREATING" | "CREATE_FAILED" | "CREATE_ROLLBACK_FAILED" | "CREATED" | "UPDATING" | "UPDATE_FAILED" | "UPDATE_ROLLBACK_FAILED" | "UPDATED" | "DELETING" | "DELETE_FAILED" | "DELETE_ROLLBACK_FAILED" | "DELETED";
export type ScheduleStatus = "PENDING" | "FAILED" | "SCHEDULED" | "STOPPED";
export type Scope = string;

export interface SearchExpression {
  Filters?: Array<Filter>;
  NestedFilters?: Array<NestedFilters>;
  SubExpressions?: Array<SearchExpression>;
  Operator?: BooleanOperator;
}
export type SearchExpressionList = Array<SearchExpression>;
export interface SearchRecord {
  TrainingJob?: TrainingJob;
  Experiment?: Experiment;
  Trial?: Trial;
  TrialComponent?: TrialComponent;
  Endpoint?: Endpoint;
  ModelPackage?: ModelPackage;
  ModelPackageGroup?: ModelPackageGroup;
  Pipeline?: Pipeline;
  PipelineExecution?: PipelineExecution;
  FeatureGroup?: FeatureGroup;
  FeatureMetadata?: FeatureMetadata;
  Project?: Project;
  HyperParameterTuningJob?: HyperParameterTuningJobSearchEntity;
  ModelCard?: ModelCard;
  Model?: ModelDashboardModel;
}
export interface SearchRequest {
  Resource: ResourceType;
  SearchExpression?: SearchExpression;
  SortBy?: string;
  SortOrder?: SearchSortOrder;
  NextToken?: string;
  MaxResults?: number;
  CrossAccountFilterOption?: CrossAccountFilterOption;
  VisibilityConditions?: Array<VisibilityConditions>;
}
export interface SearchResponse {
  Results?: Array<SearchRecord>;
  NextToken?: string;
  TotalHits?: TotalHits;
}
export type SearchResultsList = Array<SearchRecord>;
export type SearchSortOrder = "ASCENDING" | "DESCENDING";
export interface SearchTrainingPlanOfferingsRequest {
  InstanceType?: ReservedCapacityInstanceType;
  InstanceCount?: number;
  StartTimeAfter?: Date | string;
  EndTimeBefore?: Date | string;
  DurationHours: number;
  TargetResources: Array<SageMakerResourceName>;
}
export interface SearchTrainingPlanOfferingsResponse {
  TrainingPlanOfferings: Array<TrainingPlanOffering>;
}
export type SecondaryStatus = "STARTING" | "LAUNCHING_ML_INSTANCES" | "PREPARING_TRAINING_STACK" | "DOWNLOADING" | "DOWNLOADING_TRAINING_IMAGE" | "TRAINING" | "UPLOADING" | "STOPPING" | "STOPPED" | "MAX_RUNTIME_EXCEEDED" | "COMPLETED" | "FAILED" | "INTERRUPTED" | "MAX_WAIT_TIME_EXCEEDED" | "UPDATING" | "RESTARTING" | "PENDING";
export interface SecondaryStatusTransition {
  Status: SecondaryStatus;
  StartTime: Date | string;
  EndTime?: Date | string;
  StatusMessage?: string;
}
export type SecondaryStatusTransitions = Array<SecondaryStatusTransition>;
export type SecretArn = string;

export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export type Seed = number;

export interface SelectedStep {
  StepName: string;
}
export type SelectedStepList = Array<SelectedStep>;
export interface SelectiveExecutionConfig {
  SourcePipelineExecutionArn?: string;
  SelectedSteps: Array<SelectedStep>;
}
export interface SelectiveExecutionResult {
  SourcePipelineExecutionArn?: string;
}
export interface SendPipelineExecutionStepFailureRequest {
  CallbackToken: string;
  FailureReason?: string;
  ClientRequestToken?: string;
}
export interface SendPipelineExecutionStepFailureResponse {
  PipelineExecutionArn?: string;
}
export interface SendPipelineExecutionStepSuccessRequest {
  CallbackToken: string;
  OutputParameters?: Array<OutputParameter>;
  ClientRequestToken?: string;
}
export interface SendPipelineExecutionStepSuccessResponse {
  PipelineExecutionArn?: string;
}
export type ServerlessMaxConcurrency = number;

export type ServerlessMemorySizeInMB = number;

export type ServerlessProvisionedConcurrency = number;

export type ServiceCatalogEntityId = string;

export interface ServiceCatalogProvisionedProductDetails {
  ProvisionedProductId?: string;
  ProvisionedProductStatusMessage?: string;
}
export interface ServiceCatalogProvisioningDetails {
  ProductId: string;
  ProvisioningArtifactId?: string;
  PathId?: string;
  ProvisioningParameters?: Array<ProvisioningParameter>;
}
export interface ServiceCatalogProvisioningUpdateDetails {
  ProvisioningArtifactId?: string;
  ProvisioningParameters?: Array<ProvisioningParameter>;
}
export interface SessionChainingConfig {
  EnableSessionTagChaining?: boolean;
}
export type SessionExpirationDurationInSeconds = number;

export type SessionId = string;

export interface ShadowModeConfig {
  SourceModelVariantName: string;
  ShadowModelVariants: Array<ShadowModelVariantConfig>;
}
export interface ShadowModelVariantConfig {
  ShadowModelVariantName: string;
  SamplingPercentage: number;
}
export type ShadowModelVariantConfigList = Array<ShadowModelVariantConfig>;
export interface SharingSettings {
  NotebookOutputOption?: NotebookOutputOption;
  S3OutputPath?: string;
  S3KmsKeyId?: string;
}
export type SharingType = "Private" | "Shared";
export interface ShuffleConfig {
  Seed: number;
}
export type SingleSignOnApplicationArn = string;

export type SingleSignOnUserIdentifier = string;

export type SkipModelValidation = "ALL" | "NONE";
export type SnsTopicArn = string;

export type SortActionsBy = "NAME" | "CREATION_TIME";
export type SortArtifactsBy = "CREATION_TIME";
export type SortAssociationsBy = "SOURCE_ARN" | "DESTINATION_ARN" | "SOURCE_TYPE" | "DESTINATION_TYPE" | "CREATION_TIME";
export type SortBy = "NAME" | "CREATION_TIME" | "STATUS";
export type SortClusterSchedulerConfigBy = "NAME" | "CREATION_TIME" | "STATUS";
export type SortContextsBy = "NAME" | "CREATION_TIME";
export type SortExperimentsBy = "NAME" | "CREATION_TIME";
export type SortInferenceExperimentsBy = "NAME" | "CREATION_TIME" | "STATUS";
export type SortLineageGroupsBy = "NAME" | "CREATION_TIME";
export type SortOrder = "ASCENDING" | "DESCENDING";
export type SortPipelineExecutionsBy = "CREATION_TIME" | "PIPELINE_EXECUTION_ARN";
export type SortPipelinesBy = "NAME" | "CREATION_TIME";
export type SortQuotaBy = "NAME" | "CREATION_TIME" | "STATUS" | "CLUSTER_ARN";
export type SortTrackingServerBy = "NAME" | "CREATION_TIME" | "STATUS";
export type SortTrialComponentsBy = "NAME" | "CREATION_TIME";
export type SortTrialsBy = "NAME" | "CREATION_TIME";
export interface SourceAlgorithm {
  ModelDataUrl?: string;
  ModelDataSource?: ModelDataSource;
  ModelDataETag?: string;
  AlgorithmName: string;
}
export type SourceAlgorithmList = Array<SourceAlgorithm>;
export interface SourceAlgorithmSpecification {
  SourceAlgorithms: Array<SourceAlgorithm>;
}
export interface SourceIpConfig {
  Cidrs: Array<string>;
}
export type SourceType = string;

export type SourceUri = string;

export interface SpaceAppLifecycleManagement {
  IdleSettings?: SpaceIdleSettings;
}
export type SpaceArn = string;

export interface SpaceCodeEditorAppSettings {
  DefaultResourceSpec?: ResourceSpec;
  AppLifecycleManagement?: SpaceAppLifecycleManagement;
}
export interface SpaceDetails {
  DomainId?: string;
  SpaceName?: string;
  Status?: SpaceStatus;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  SpaceSettingsSummary?: SpaceSettingsSummary;
  SpaceSharingSettingsSummary?: SpaceSharingSettingsSummary;
  OwnershipSettingsSummary?: OwnershipSettingsSummary;
  SpaceDisplayName?: string;
}
export type SpaceEbsVolumeSizeInGb = number;

export interface SpaceIdleSettings {
  IdleTimeoutInMinutes?: number;
}
export interface SpaceJupyterLabAppSettings {
  DefaultResourceSpec?: ResourceSpec;
  CodeRepositories?: Array<CodeRepository>;
  AppLifecycleManagement?: SpaceAppLifecycleManagement;
}
export type SpaceList = Array<SpaceDetails>;
export type SpaceName = string;

export interface SpaceSettings {
  JupyterServerAppSettings?: JupyterServerAppSettings;
  KernelGatewayAppSettings?: KernelGatewayAppSettings;
  CodeEditorAppSettings?: SpaceCodeEditorAppSettings;
  JupyterLabAppSettings?: SpaceJupyterLabAppSettings;
  AppType?: AppType;
  SpaceStorageSettings?: SpaceStorageSettings;
  SpaceManagedResources?: FeatureStatus;
  CustomFileSystems?: Array<CustomFileSystem>;
  RemoteAccess?: FeatureStatus;
}
export interface SpaceSettingsSummary {
  AppType?: AppType;
  RemoteAccess?: FeatureStatus;
  SpaceStorageSettings?: SpaceStorageSettings;
}
export interface SpaceSharingSettings {
  SharingType: SharingType;
}
export interface SpaceSharingSettingsSummary {
  SharingType?: SharingType;
}
export type SpaceSortKey = "CreationTime" | "LastModifiedTime";
export type SpaceStatus = "Deleting" | "Failed" | "InService" | "Pending" | "Updating" | "Update_Failed" | "Delete_Failed";
export interface SpaceStorageSettings {
  EbsStorageSettings?: EbsStorageSettings;
}
export type SpawnRate = number;

export type SplitType = "NONE" | "LINE" | "RECORDIO" | "TFRECORD";
export type StageDescription = string;

export type StageStatus = "Creating" | "ReadyToDeploy" | "Starting" | "InProgress" | "Deployed" | "Failed" | "Stopping" | "Stopped";
export interface Stairs {
  DurationInSeconds?: number;
  NumberOfSteps?: number;
  UsersPerStep?: number;
}
export interface StartEdgeDeploymentStageRequest {
  EdgeDeploymentPlanName: string;
  StageName: string;
}
export interface StartInferenceExperimentRequest {
  Name: string;
}
export interface StartInferenceExperimentResponse {
  InferenceExperimentArn: string;
}
export interface StartMlflowTrackingServerRequest {
  TrackingServerName: string;
}
export interface StartMlflowTrackingServerResponse {
  TrackingServerArn?: string;
}
export interface StartMonitoringScheduleRequest {
  MonitoringScheduleName: string;
}
export interface StartNotebookInstanceInput {
  NotebookInstanceName: string;
}
export interface StartPipelineExecutionRequest {
  PipelineName: string;
  PipelineExecutionDisplayName?: string;
  PipelineParameters?: Array<Parameter>;
  PipelineExecutionDescription?: string;
  ClientRequestToken: string;
  ParallelismConfiguration?: ParallelismConfiguration;
  SelectiveExecutionConfig?: SelectiveExecutionConfig;
}
export interface StartPipelineExecutionResponse {
  PipelineExecutionArn?: string;
}
export interface StartSessionRequest {
  ResourceIdentifier: string;
}
export interface StartSessionResponse {
  SessionId?: string;
  StreamUrl?: string;
  TokenValue?: string;
}
export type Statistic = "AVERAGE" | "MINIMUM" | "MAXIMUM" | "SAMPLE_COUNT" | "SUM";
export type StatusDetails = string;

export type StatusMessage = string;

export type StepDescription = string;

export type StepDisplayName = string;

export type StepName = string;

export type StepStatus = "STARTING" | "EXECUTING" | "STOPPING" | "STOPPED" | "FAILED" | "SUCCEEDED";
export interface StopAutoMLJobRequest {
  AutoMLJobName: string;
}
export interface StopCompilationJobRequest {
  CompilationJobName: string;
}
export interface StopEdgeDeploymentStageRequest {
  EdgeDeploymentPlanName: string;
  StageName: string;
}
export interface StopEdgePackagingJobRequest {
  EdgePackagingJobName: string;
}
export interface StopHyperParameterTuningJobRequest {
  HyperParameterTuningJobName: string;
}
export interface StopInferenceExperimentRequest {
  Name: string;
  ModelVariantActions: Record<string, ModelVariantAction>;
  DesiredModelVariants?: Array<ModelVariantConfig>;
  DesiredState?: InferenceExperimentStopDesiredState;
  Reason?: string;
}
export interface StopInferenceExperimentResponse {
  InferenceExperimentArn: string;
}
export interface StopInferenceRecommendationsJobRequest {
  JobName: string;
}
export interface StopLabelingJobRequest {
  LabelingJobName: string;
}
export interface StopMlflowTrackingServerRequest {
  TrackingServerName: string;
}
export interface StopMlflowTrackingServerResponse {
  TrackingServerArn?: string;
}
export interface StopMonitoringScheduleRequest {
  MonitoringScheduleName: string;
}
export interface StopNotebookInstanceInput {
  NotebookInstanceName: string;
}
export interface StopOptimizationJobRequest {
  OptimizationJobName: string;
}
export interface StoppingCondition {
  MaxRuntimeInSeconds?: number;
  MaxWaitTimeInSeconds?: number;
  MaxPendingTimeInSeconds?: number;
}
export interface StopPipelineExecutionRequest {
  PipelineExecutionArn: string;
  ClientRequestToken: string;
}
export interface StopPipelineExecutionResponse {
  PipelineExecutionArn?: string;
}
export interface StopProcessingJobRequest {
  ProcessingJobName: string;
}
export interface StopTrainingJobRequest {
  TrainingJobName: string;
}
export interface StopTransformJobRequest {
  TransformJobName: string;
}
export type StorageType = "STANDARD" | "IN_MEMORY";
export type StreamUrl = string;

export type String1024 = string;

export type String128 = string;

export type String200 = string;

export type String2048 = string;

export type String256 = string;

export type String3072 = string;

export type String40 = string;

export type String64 = string;

export type String8192 = string;

export type StringParameterValue = string;

export type StudioLifecycleConfigAppType = "JupyterServer" | "KernelGateway" | "CodeEditor" | "JupyterLab";
export type StudioLifecycleConfigArn = string;

export type StudioLifecycleConfigContent = string;

export interface StudioLifecycleConfigDetails {
  StudioLifecycleConfigArn?: string;
  StudioLifecycleConfigName?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  StudioLifecycleConfigAppType?: StudioLifecycleConfigAppType;
}
export type StudioLifecycleConfigName = string;

export type StudioLifecycleConfigsList = Array<StudioLifecycleConfigDetails>;
export type StudioLifecycleConfigSortKey = "CreationTime" | "LastModifiedTime" | "Name";
export type StudioWebPortal = "Enabled" | "Disabled";
export interface StudioWebPortalSettings {
  HiddenMlTools?: Array<MlTools>;
  HiddenAppTypes?: Array<AppType>;
  HiddenInstanceTypes?: Array<AppInstanceType>;
  HiddenSageMakerImageVersionAliases?: Array<HiddenSageMakerImage>;
}
export type SubnetId = string;

export type Subnets = Array<string>;
export interface SubscribedWorkteam {
  WorkteamArn: string;
  MarketplaceTitle?: string;
  SellerName?: string;
  MarketplaceDescription?: string;
  ListingId?: string;
}
export type SubscribedWorkteams = Array<SubscribedWorkteam>;
export type Success = boolean;

export interface SuggestionQuery {
  PropertyNameQuery?: PropertyNameQuery;
}
export type TableFormat = "DEFAULT" | "GLUE" | "ICEBERG";
export type TableName = string;

export interface TabularJobConfig {
  CandidateGenerationConfig?: CandidateGenerationConfig;
  CompletionCriteria?: AutoMLJobCompletionCriteria;
  FeatureSpecificationS3Uri?: string;
  Mode?: AutoMLMode;
  GenerateCandidateDefinitionsOnly?: boolean;
  ProblemType?: ProblemType;
  TargetAttributeName: string;
  SampleWeightAttributeName?: string;
}
export interface TabularResolvedAttributes {
  ProblemType?: ProblemType;
}
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export type TagPropagation = "ENABLED" | "DISABLED";
export type TagValue = string;

export type TargetAttributeName = string;

export type TargetDevice = "LAMBDA" | "ML_M4" | "ML_M5" | "ML_M6G" | "ML_C4" | "ML_C5" | "ML_C6G" | "ML_P2" | "ML_P3" | "ML_G4DN" | "ML_INF1" | "ML_INF2" | "ML_TRN1" | "ML_EIA2" | "JETSON_TX1" | "JETSON_TX2" | "JETSON_NANO" | "JETSON_XAVIER" | "RASP3B" | "RASP4B" | "IMX8QM" | "DEEPLENS" | "RK3399" | "RK3288" | "AISAGE" | "SBE_C" | "QCS605" | "QCS603" | "SITARA_AM57X" | "AMBA_CV2" | "AMBA_CV22" | "AMBA_CV25" | "X86_WIN32" | "X86_WIN64" | "COREML" | "JACINTO_TDA4VM" | "IMX8MPLUS";
export type TargetLabelColumn = string;

export type TargetObjectiveMetricValue = number;

export interface TargetPlatform {
  Os: TargetPlatformOs;
  Arch: TargetPlatformArch;
  Accelerator?: TargetPlatformAccelerator;
}
export type TargetPlatformAccelerator = "INTEL_GRAPHICS" | "MALI" | "NVIDIA" | "NNA";
export type TargetPlatformArch = "X86_64" | "X86" | "ARM64" | "ARM_EABI" | "ARM_EABIHF";
export type TargetPlatformOs = "ANDROID" | "LINUX";
export interface TargetTrackingScalingPolicyConfiguration {
  MetricSpecification?: MetricSpecification;
  TargetValue?: number;
}
export type TaskAvailabilityLifetimeInSeconds = number;

export type TaskCount = number;

export type TaskDescription = string;

export type TaskInput = string;

export type TaskKeyword = string;

export type TaskKeywords = Array<string>;
export type TaskTimeLimitInSeconds = number;

export type TaskTitle = string;

export type TemplateContent = string;

export type TemplateContentSha256 = string;

export interface TemplateProviderDetail {
  CfnTemplateProviderDetail?: CfnTemplateProviderDetail;
}
export type TemplateProviderDetailList = Array<TemplateProviderDetail>;
export type TemplateUrl = string;

export interface TensorBoardAppSettings {
  DefaultResourceSpec?: ResourceSpec;
}
export interface TensorBoardOutputConfig {
  LocalPath?: string;
  S3OutputPath: string;
}
export type TenthFractionsOfACent = number;

export type TerminationWaitInSeconds = number;

export interface TextClassificationJobConfig {
  CompletionCriteria?: AutoMLJobCompletionCriteria;
  ContentColumn: string;
  TargetLabelColumn: string;
}
export type TextGenerationHyperParameterKey = string;

export type TextGenerationHyperParameters = Record<string, string>;
export type TextGenerationHyperParameterValue = string;

export interface TextGenerationJobConfig {
  CompletionCriteria?: AutoMLJobCompletionCriteria;
  BaseModelName?: string;
  TextGenerationHyperParameters?: Record<string, string>;
  ModelAccessConfig?: ModelAccessConfig;
}
export interface TextGenerationResolvedAttributes {
  BaseModelName?: string;
}
export type ThingName = string;

export interface ThroughputConfig {
  ThroughputMode: ThroughputMode;
  ProvisionedReadCapacityUnits?: number;
  ProvisionedWriteCapacityUnits?: number;
}
export interface ThroughputConfigDescription {
  ThroughputMode: ThroughputMode;
  ProvisionedReadCapacityUnits?: number;
  ProvisionedWriteCapacityUnits?: number;
}
export interface ThroughputConfigUpdate {
  ThroughputMode?: ThroughputMode;
  ProvisionedReadCapacityUnits?: number;
  ProvisionedWriteCapacityUnits?: number;
}
export type ThroughputMode = "ON_DEMAND" | "PROVISIONED";
export interface TimeSeriesConfig {
  TargetAttributeName: string;
  TimestampAttributeName: string;
  ItemIdentifierAttributeName: string;
  GroupingAttributeNames?: Array<string>;
}
export interface TimeSeriesForecastingJobConfig {
  FeatureSpecificationS3Uri?: string;
  CompletionCriteria?: AutoMLJobCompletionCriteria;
  ForecastFrequency: string;
  ForecastHorizon: number;
  ForecastQuantiles?: Array<string>;
  Transformations?: TimeSeriesTransformations;
  TimeSeriesConfig: TimeSeriesConfig;
  HolidayConfig?: Array<HolidayConfigAttributes>;
  CandidateGenerationConfig?: CandidateGenerationConfig;
}
export interface TimeSeriesForecastingSettings {
  Status?: FeatureStatus;
  AmazonForecastRoleArn?: string;
}
export interface TimeSeriesTransformations {
  Filling?: Record<string, Record<FillingType, string>>;
  Aggregation?: Record<string, AggregationTransformationValue>;
}
export type Timestamp = Date | string;

export type TimestampAttributeName = string;

export type TokenValue = string;

export interface TotalHits {
  Value?: number;
  Relation?: Relation;
}
export type TotalInstanceCount = number;

export type TrackingServerArn = string;

export type TrackingServerMaintenanceStatus = "MAINTENANCE_IN_PROGRESS" | "MAINTENANCE_COMPLETE" | "MAINTENANCE_FAILED";
export type TrackingServerName = string;

export type TrackingServerSize = "S" | "M" | "L";
export type TrackingServerStatus = "CREATING" | "CREATED" | "CREATE_FAILED" | "UPDATING" | "UPDATED" | "UPDATE_FAILED" | "DELETING" | "DELETE_FAILED" | "STOPPING" | "STOPPED" | "STOP_FAILED" | "STARTING" | "STARTED" | "START_FAILED" | "MAINTENANCE_IN_PROGRESS" | "MAINTENANCE_COMPLETE" | "MAINTENANCE_FAILED";
export interface TrackingServerSummary {
  TrackingServerArn?: string;
  TrackingServerName?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  TrackingServerStatus?: TrackingServerStatus;
  IsActive?: IsTrackingServerActive;
  MlflowVersion?: string;
}
export type TrackingServerSummaryList = Array<TrackingServerSummary>;
export type TrackingServerUrl = string;

export type TrafficDurationInSeconds = number;

export interface TrafficPattern {
  TrafficType?: TrafficType;
  Phases?: Array<Phase>;
  Stairs?: Stairs;
}
export interface TrafficRoutingConfig {
  Type: TrafficRoutingConfigType;
  WaitIntervalInSeconds: number;
  CanarySize?: CapacitySize;
  LinearStepSize?: CapacitySize;
}
export type TrafficRoutingConfigType = "ALL_AT_ONCE" | "CANARY" | "LINEAR";
export type TrafficType = "PHASES" | "STAIRS";
export type TrainingContainerArgument = string;

export type TrainingContainerArguments = Array<string>;
export type TrainingContainerEntrypoint = Array<string>;
export type TrainingContainerEntrypointString = string;

export type TrainingEnvironmentKey = string;

export type TrainingEnvironmentMap = Record<string, string>;
export type TrainingEnvironmentValue = string;

export interface TrainingImageConfig {
  TrainingRepositoryAccessMode: TrainingRepositoryAccessMode;
  TrainingRepositoryAuthConfig?: TrainingRepositoryAuthConfig;
}
export type TrainingInputMode = "PIPE" | "FILE" | "FASTFILE";
export type TrainingInstanceCount = number;

export type TrainingInstanceType = "ML_M4_XLARGE" | "ML_M4_2XLARGE" | "ML_M4_4XLARGE" | "ML_M4_10XLARGE" | "ML_M4_16XLARGE" | "ML_G4DN_XLARGE" | "ML_G4DN_2XLARGE" | "ML_G4DN_4XLARGE" | "ML_G4DN_8XLARGE" | "ML_G4DN_12XLARGE" | "ML_G4DN_16XLARGE" | "ML_M5_LARGE" | "ML_M5_XLARGE" | "ML_M5_2XLARGE" | "ML_M5_4XLARGE" | "ML_M5_12XLARGE" | "ML_M5_24XLARGE" | "ML_C4_XLARGE" | "ML_C4_2XLARGE" | "ML_C4_4XLARGE" | "ML_C4_8XLARGE" | "ML_P2_XLARGE" | "ML_P2_8XLARGE" | "ML_P2_16XLARGE" | "ML_P3_2XLARGE" | "ML_P3_8XLARGE" | "ML_P3_16XLARGE" | "ML_P3DN_24XLARGE" | "ML_P4D_24XLARGE" | "ML_P4DE_24XLARGE" | "ML_P5_48XLARGE" | "ML_P5E_48XLARGE" | "ML_P5EN_48XLARGE" | "ML_C5_XLARGE" | "ML_C5_2XLARGE" | "ML_C5_4XLARGE" | "ML_C5_9XLARGE" | "ML_C5_18XLARGE" | "ML_C5N_XLARGE" | "ML_C5N_2XLARGE" | "ML_C5N_4XLARGE" | "ML_C5N_9XLARGE" | "ML_C5N_18XLARGE" | "ML_G5_XLARGE" | "ML_G5_2XLARGE" | "ML_G5_4XLARGE" | "ML_G5_8XLARGE" | "ML_G5_16XLARGE" | "ML_G5_12XLARGE" | "ML_G5_24XLARGE" | "ML_G5_48XLARGE" | "ML_G6_XLARGE" | "ML_G6_2XLARGE" | "ML_G6_4XLARGE" | "ML_G6_8XLARGE" | "ML_G6_16XLARGE" | "ML_G6_12XLARGE" | "ML_G6_24XLARGE" | "ML_G6_48XLARGE" | "ML_G6E_XLARGE" | "ML_G6E_2XLARGE" | "ML_G6E_4XLARGE" | "ML_G6E_8XLARGE" | "ML_G6E_16XLARGE" | "ML_G6E_12XLARGE" | "ML_G6E_24XLARGE" | "ML_G6E_48XLARGE" | "ML_TRN1_2XLARGE" | "ML_TRN1_32XLARGE" | "ML_TRN1N_32XLARGE" | "ML_TRN2_48XLARGE" | "ML_M6I_LARGE" | "ML_M6I_XLARGE" | "ML_M6I_2XLARGE" | "ML_M6I_4XLARGE" | "ML_M6I_8XLARGE" | "ML_M6I_12XLARGE" | "ML_M6I_16XLARGE" | "ML_M6I_24XLARGE" | "ML_M6I_32XLARGE" | "ML_C6I_XLARGE" | "ML_C6I_2XLARGE" | "ML_C6I_8XLARGE" | "ML_C6I_4XLARGE" | "ML_C6I_12XLARGE" | "ML_C6I_16XLARGE" | "ML_C6I_24XLARGE" | "ML_C6I_32XLARGE" | "ML_R5D_LARGE" | "ML_R5D_XLARGE" | "ML_R5D_2XLARGE" | "ML_R5D_4XLARGE" | "ML_R5D_8XLARGE" | "ML_R5D_12XLARGE" | "ML_R5D_16XLARGE" | "ML_R5D_24XLARGE" | "ML_T3_MEDIUM" | "ML_T3_LARGE" | "ML_T3_XLARGE" | "ML_T3_2XLARGE" | "ML_R5_LARGE" | "ML_R5_XLARGE" | "ML_R5_2XLARGE" | "ML_R5_4XLARGE" | "ML_R5_8XLARGE" | "ML_R5_12XLARGE" | "ML_R5_16XLARGE" | "ML_R5_24XLARGE" | "ML_P6_B200_48XLARGE" | "ML_M7I_LARGE" | "ML_M7I_XLARGE" | "ML_M7I_2XLARGE" | "ML_M7I_4XLARGE" | "ML_M7I_8XLARGE" | "ML_M7I_12XLARGE" | "ML_M7I_16XLARGE" | "ML_M7I_24XLARGE" | "ML_M7I_48XLARGE" | "ML_C7I_LARGE" | "ML_C7I_XLARGE" | "ML_C7I_2XLARGE" | "ML_C7I_4XLARGE" | "ML_C7I_8XLARGE" | "ML_C7I_12XLARGE" | "ML_C7I_16XLARGE" | "ML_C7I_24XLARGE" | "ML_C7I_48XLARGE" | "ML_R7I_LARGE" | "ML_R7I_XLARGE" | "ML_R7I_2XLARGE" | "ML_R7I_4XLARGE" | "ML_R7I_8XLARGE" | "ML_R7I_12XLARGE" | "ML_R7I_16XLARGE" | "ML_R7I_24XLARGE" | "ML_R7I_48XLARGE";
export type TrainingInstanceTypes = Array<TrainingInstanceType>;
export interface TrainingJob {
  TrainingJobName?: string;
  TrainingJobArn?: string;
  TuningJobArn?: string;
  LabelingJobArn?: string;
  AutoMLJobArn?: string;
  ModelArtifacts?: ModelArtifacts;
  TrainingJobStatus?: TrainingJobStatus;
  SecondaryStatus?: SecondaryStatus;
  FailureReason?: string;
  HyperParameters?: Record<string, string>;
  AlgorithmSpecification?: AlgorithmSpecification;
  RoleArn?: string;
  InputDataConfig?: Array<Channel>;
  OutputDataConfig?: OutputDataConfig;
  ResourceConfig?: ResourceConfig;
  VpcConfig?: VpcConfig;
  StoppingCondition?: StoppingCondition;
  CreationTime?: Date | string;
  TrainingStartTime?: Date | string;
  TrainingEndTime?: Date | string;
  LastModifiedTime?: Date | string;
  SecondaryStatusTransitions?: Array<SecondaryStatusTransition>;
  FinalMetricDataList?: Array<MetricData>;
  EnableNetworkIsolation?: boolean;
  EnableInterContainerTrafficEncryption?: boolean;
  EnableManagedSpotTraining?: boolean;
  CheckpointConfig?: CheckpointConfig;
  TrainingTimeInSeconds?: number;
  BillableTimeInSeconds?: number;
  DebugHookConfig?: DebugHookConfig;
  ExperimentConfig?: ExperimentConfig;
  DebugRuleConfigurations?: Array<DebugRuleConfiguration>;
  TensorBoardOutputConfig?: TensorBoardOutputConfig;
  DebugRuleEvaluationStatuses?: Array<DebugRuleEvaluationStatus>;
  ProfilerConfig?: ProfilerConfig;
  Environment?: Record<string, string>;
  RetryStrategy?: RetryStrategy;
  Tags?: Array<Tag>;
}
export type TrainingJobArn = string;

export interface TrainingJobDefinition {
  TrainingInputMode: TrainingInputMode;
  HyperParameters?: Record<string, string>;
  InputDataConfig: Array<Channel>;
  OutputDataConfig: OutputDataConfig;
  ResourceConfig: ResourceConfig;
  StoppingCondition: StoppingCondition;
}
export type TrainingJobEarlyStoppingType = "OFF" | "AUTO";
export type TrainingJobName = string;

export type TrainingJobSortByOptions = "Name" | "CreationTime" | "Status" | "FinalObjectiveMetricValue";
export type TrainingJobStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED" | "STOPPING" | "STOPPED";
export type TrainingJobStatusCounter = number;

export interface TrainingJobStatusCounters {
  Completed?: number;
  InProgress?: number;
  RetryableError?: number;
  NonRetryableError?: number;
  Stopped?: number;
}
export interface TrainingJobStepMetadata {
  Arn?: string;
}
export type TrainingJobSummaries = Array<TrainingJobSummary>;
export interface TrainingJobSummary {
  TrainingJobName: string;
  TrainingJobArn: string;
  CreationTime: Date | string;
  TrainingEndTime?: Date | string;
  LastModifiedTime?: Date | string;
  TrainingJobStatus: TrainingJobStatus;
  SecondaryStatus?: SecondaryStatus;
  WarmPoolStatus?: WarmPoolStatus;
  TrainingPlanArn?: string;
}
export type TrainingPlanArn = string;

export type TrainingPlanArns = Array<string>;
export type TrainingPlanDurationHours = number;

export type TrainingPlanDurationHoursInput = number;

export type TrainingPlanDurationMinutes = number;

export interface TrainingPlanFilter {
  Name: TrainingPlanFilterName;
  Value: string;
}
export type TrainingPlanFilterName = "STATUS";
export type TrainingPlanFilters = Array<TrainingPlanFilter>;
export type TrainingPlanName = string;

export interface TrainingPlanOffering {
  TrainingPlanOfferingId: string;
  TargetResources: Array<SageMakerResourceName>;
  RequestedStartTimeAfter?: Date | string;
  RequestedEndTimeBefore?: Date | string;
  DurationHours?: number;
  DurationMinutes?: number;
  UpfrontFee?: string;
  CurrencyCode?: string;
  ReservedCapacityOfferings?: Array<ReservedCapacityOffering>;
}
export type TrainingPlanOfferingId = string;

export type TrainingPlanOfferings = Array<TrainingPlanOffering>;
export type TrainingPlanSortBy = "NAME" | "START_TIME" | "STATUS";
export type TrainingPlanSortOrder = "ASCENDING" | "DESCENDING";
export type TrainingPlanStatus = "PENDING" | "ACTIVE" | "SCHEDULED" | "EXPIRED" | "FAILED";
export type TrainingPlanStatusMessage = string;

export type TrainingPlanSummaries = Array<TrainingPlanSummary>;
export interface TrainingPlanSummary {
  TrainingPlanArn: string;
  TrainingPlanName: string;
  Status: TrainingPlanStatus;
  StatusMessage?: string;
  DurationHours?: number;
  DurationMinutes?: number;
  StartTime?: Date | string;
  EndTime?: Date | string;
  UpfrontFee?: string;
  CurrencyCode?: string;
  TotalInstanceCount?: number;
  AvailableInstanceCount?: number;
  InUseInstanceCount?: number;
  TargetResources?: Array<SageMakerResourceName>;
  ReservedCapacitySummaries?: Array<ReservedCapacitySummary>;
}
export type TrainingRepositoryAccessMode = "PLATFORM" | "VPC";
export interface TrainingRepositoryAuthConfig {
  TrainingRepositoryCredentialsProviderArn: string;
}
export type TrainingRepositoryCredentialsProviderArn = string;

export interface TrainingSpecification {
  TrainingImage: string;
  TrainingImageDigest?: string;
  SupportedHyperParameters?: Array<HyperParameterSpecification>;
  SupportedTrainingInstanceTypes: Array<TrainingInstanceType>;
  SupportsDistributedTraining?: boolean;
  MetricDefinitions?: Array<MetricDefinition>;
  TrainingChannels: Array<ChannelSpecification>;
  SupportedTuningJobObjectiveMetrics?: Array<HyperParameterTuningJobObjective>;
  AdditionalS3DataSource?: AdditionalS3DataSource;
}
export type TrainingTimeInSeconds = number;

export type TransformAmiVersion = string;

export type TransformationAttributeName = string;

export interface TransformDataSource {
  S3DataSource: TransformS3DataSource;
}
export type TransformEnvironmentKey = string;

export type TransformEnvironmentMap = Record<string, string>;
export type TransformEnvironmentValue = string;

export interface TransformInput {
  DataSource: TransformDataSource;
  ContentType?: string;
  CompressionType?: CompressionType;
  SplitType?: SplitType;
}
export type TransformInstanceCount = number;

export type TransformInstanceType = "ML_M4_XLARGE" | "ML_M4_2XLARGE" | "ML_M4_4XLARGE" | "ML_M4_10XLARGE" | "ML_M4_16XLARGE" | "ML_C4_XLARGE" | "ML_C4_2XLARGE" | "ML_C4_4XLARGE" | "ML_C4_8XLARGE" | "ML_P2_XLARGE" | "ML_P2_8XLARGE" | "ML_P2_16XLARGE" | "ML_P3_2XLARGE" | "ML_P3_8XLARGE" | "ML_P3_16XLARGE" | "ML_C5_XLARGE" | "ML_C5_2XLARGE" | "ML_C5_4XLARGE" | "ML_C5_9XLARGE" | "ML_C5_18XLARGE" | "ML_M5_LARGE" | "ML_M5_XLARGE" | "ML_M5_2XLARGE" | "ML_M5_4XLARGE" | "ML_M5_12XLARGE" | "ML_M5_24XLARGE" | "ML_M6I_LARGE" | "ML_M6I_XLARGE" | "ML_M6I_2XLARGE" | "ML_M6I_4XLARGE" | "ML_M6I_8XLARGE" | "ML_M6I_12XLARGE" | "ML_M6I_16XLARGE" | "ML_M6I_24XLARGE" | "ML_M6I_32XLARGE" | "ML_C6I_LARGE" | "ML_C6I_XLARGE" | "ML_C6I_2XLARGE" | "ML_C6I_4XLARGE" | "ML_C6I_8XLARGE" | "ML_C6I_12XLARGE" | "ML_C6I_16XLARGE" | "ML_C6I_24XLARGE" | "ML_C6I_32XLARGE" | "ML_R6I_LARGE" | "ML_R6I_XLARGE" | "ML_R6I_2XLARGE" | "ML_R6I_4XLARGE" | "ML_R6I_8XLARGE" | "ML_R6I_12XLARGE" | "ML_R6I_16XLARGE" | "ML_R6I_24XLARGE" | "ML_R6I_32XLARGE" | "ML_M7I_LARGE" | "ML_M7I_XLARGE" | "ML_M7I_2XLARGE" | "ML_M7I_4XLARGE" | "ML_M7I_8XLARGE" | "ML_M7I_12XLARGE" | "ML_M7I_16XLARGE" | "ML_M7I_24XLARGE" | "ML_M7I_48XLARGE" | "ML_C7I_LARGE" | "ML_C7I_XLARGE" | "ML_C7I_2XLARGE" | "ML_C7I_4XLARGE" | "ML_C7I_8XLARGE" | "ML_C7I_12XLARGE" | "ML_C7I_16XLARGE" | "ML_C7I_24XLARGE" | "ML_C7I_48XLARGE" | "ML_R7I_LARGE" | "ML_R7I_XLARGE" | "ML_R7I_2XLARGE" | "ML_R7I_4XLARGE" | "ML_R7I_8XLARGE" | "ML_R7I_12XLARGE" | "ML_R7I_16XLARGE" | "ML_R7I_24XLARGE" | "ML_R7I_48XLARGE" | "ML_G4DN_XLARGE" | "ML_G4DN_2XLARGE" | "ML_G4DN_4XLARGE" | "ML_G4DN_8XLARGE" | "ML_G4DN_12XLARGE" | "ML_G4DN_16XLARGE" | "ML_G5_XLARGE" | "ML_G5_2XLARGE" | "ML_G5_4XLARGE" | "ML_G5_8XLARGE" | "ML_G5_12XLARGE" | "ML_G5_16XLARGE" | "ML_G5_24XLARGE" | "ML_G5_48XLARGE" | "ML_TRN1_2XLARGE" | "ML_TRN1_32XLARGE" | "ML_INF2_XLARGE" | "ML_INF2_8XLARGE" | "ML_INF2_24XLARGE" | "ML_INF2_48XLARGE";
export type TransformInstanceTypes = Array<TransformInstanceType>;
export interface TransformJob {
  TransformJobName?: string;
  TransformJobArn?: string;
  TransformJobStatus?: TransformJobStatus;
  FailureReason?: string;
  ModelName?: string;
  MaxConcurrentTransforms?: number;
  ModelClientConfig?: ModelClientConfig;
  MaxPayloadInMB?: number;
  BatchStrategy?: BatchStrategy;
  Environment?: Record<string, string>;
  TransformInput?: TransformInput;
  TransformOutput?: TransformOutput;
  DataCaptureConfig?: BatchDataCaptureConfig;
  TransformResources?: TransformResources;
  CreationTime?: Date | string;
  TransformStartTime?: Date | string;
  TransformEndTime?: Date | string;
  LabelingJobArn?: string;
  AutoMLJobArn?: string;
  DataProcessing?: DataProcessing;
  ExperimentConfig?: ExperimentConfig;
  Tags?: Array<Tag>;
}
export type TransformJobArn = string;

export interface TransformJobDefinition {
  MaxConcurrentTransforms?: number;
  MaxPayloadInMB?: number;
  BatchStrategy?: BatchStrategy;
  Environment?: Record<string, string>;
  TransformInput: TransformInput;
  TransformOutput: TransformOutput;
  TransformResources: TransformResources;
}
export type TransformJobName = string;

export type TransformJobStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED" | "STOPPING" | "STOPPED";
export interface TransformJobStepMetadata {
  Arn?: string;
}
export type TransformJobSummaries = Array<TransformJobSummary>;
export interface TransformJobSummary {
  TransformJobName: string;
  TransformJobArn: string;
  CreationTime: Date | string;
  TransformEndTime?: Date | string;
  LastModifiedTime?: Date | string;
  TransformJobStatus: TransformJobStatus;
  FailureReason?: string;
}
export interface TransformOutput {
  S3OutputPath: string;
  Accept?: string;
  AssembleWith?: AssemblyType;
  KmsKeyId?: string;
}
export interface TransformResources {
  InstanceType: TransformInstanceType;
  InstanceCount: number;
  VolumeKmsKeyId?: string;
  TransformAmiVersion?: string;
}
export interface TransformS3DataSource {
  S3DataType: S3DataType;
  S3Uri: string;
}
export interface Trial {
  TrialName?: string;
  TrialArn?: string;
  DisplayName?: string;
  ExperimentName?: string;
  Source?: TrialSource;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
  MetadataProperties?: MetadataProperties;
  Tags?: Array<Tag>;
  TrialComponentSummaries?: Array<TrialComponentSimpleSummary>;
}
export type TrialArn = string;

export interface TrialComponent {
  TrialComponentName?: string;
  DisplayName?: string;
  TrialComponentArn?: string;
  Source?: TrialComponentSource;
  Status?: TrialComponentStatus;
  StartTime?: Date | string;
  EndTime?: Date | string;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
  Parameters?: Record<string, TrialComponentParameterValue>;
  InputArtifacts?: Record<string, TrialComponentArtifact>;
  OutputArtifacts?: Record<string, TrialComponentArtifact>;
  Metrics?: Array<TrialComponentMetricSummary>;
  MetadataProperties?: MetadataProperties;
  SourceDetail?: TrialComponentSourceDetail;
  LineageGroupArn?: string;
  Tags?: Array<Tag>;
  Parents?: Array<Parent>;
  RunName?: string;
}
export type TrialComponentArn = string;

export interface TrialComponentArtifact {
  MediaType?: string;
  Value: string;
}
export type TrialComponentArtifacts = Record<string, TrialComponentArtifact>;
export type TrialComponentArtifactValue = string;

export type TrialComponentKey128 = string;

export type TrialComponentKey256 = string;

export type TrialComponentKey320 = string;

export type TrialComponentMetricSummaries = Array<TrialComponentMetricSummary>;
export interface TrialComponentMetricSummary {
  MetricName?: string;
  SourceArn?: string;
  TimeStamp?: Date | string;
  Max?: number;
  Min?: number;
  Last?: number;
  Count?: number;
  Avg?: number;
  StdDev?: number;
}
export type TrialComponentParameters = Record<string, TrialComponentParameterValue>;
export type TrialComponentParameterValue = { StringValue: string } | { NumberValue: number };
export type TrialComponentPrimaryStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED" | "STOPPING" | "STOPPED";
export type TrialComponentSimpleSummaries = Array<TrialComponentSimpleSummary>;
export interface TrialComponentSimpleSummary {
  TrialComponentName?: string;
  TrialComponentArn?: string;
  TrialComponentSource?: TrialComponentSource;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
}
export interface TrialComponentSource {
  SourceArn: string;
  SourceType?: string;
}
export type TrialComponentSourceArn = string;

export interface TrialComponentSourceDetail {
  SourceArn?: string;
  TrainingJob?: TrainingJob;
  ProcessingJob?: ProcessingJob;
  TransformJob?: TransformJob;
}
export type TrialComponentSources = Array<TrialComponentSource>;
export interface TrialComponentStatus {
  PrimaryStatus?: TrialComponentPrimaryStatus;
  Message?: string;
}
export type TrialComponentStatusMessage = string;

export type TrialComponentSummaries = Array<TrialComponentSummary>;
export interface TrialComponentSummary {
  TrialComponentName?: string;
  TrialComponentArn?: string;
  DisplayName?: string;
  TrialComponentSource?: TrialComponentSource;
  Status?: TrialComponentStatus;
  StartTime?: Date | string;
  EndTime?: Date | string;
  CreationTime?: Date | string;
  CreatedBy?: UserContext;
  LastModifiedTime?: Date | string;
  LastModifiedBy?: UserContext;
}
export interface TrialSource {
  SourceArn: string;
  SourceType?: string;
}
export type TrialSourceArn = string;

export type TrialSummaries = Array<TrialSummary>;
export interface TrialSummary {
  TrialArn?: string;
  TrialName?: string;
  DisplayName?: string;
  TrialSource?: TrialSource;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export interface TtlDuration {
  Unit?: TtlDurationUnit;
  Value?: number;
}
export type TtlDurationUnit = "SECONDS" | "MINUTES" | "HOURS" | "DAYS" | "WEEKS";
export type TtlDurationValue = number;

export interface TuningJobCompletionCriteria {
  TargetObjectiveMetricValue?: number;
  BestObjectiveNotImproving?: BestObjectiveNotImproving;
  ConvergenceDetected?: ConvergenceDetected;
}
export interface TuningJobStepMetaData {
  Arn?: string;
}
export interface UiConfig {
  UiTemplateS3Uri?: string;
  HumanTaskUiArn?: string;
}
export type Uid = number;

export interface UiTemplate {
  Content: string;
}
export interface UiTemplateInfo {
  Url?: string;
  ContentSha256?: string;
}
export type UnifiedStudioDomainId = string;

export type UnifiedStudioEnvironmentId = string;

export type UnifiedStudioProjectId = string;

export interface UnifiedStudioSettings {
  StudioWebPortalAccess?: FeatureStatus;
  DomainAccountId?: string;
  DomainRegion?: string;
  DomainId?: string;
  ProjectId?: string;
  EnvironmentId?: string;
  ProjectS3Path?: string;
  SingleSignOnApplicationArn?: string;
}
export interface UpdateActionRequest {
  ActionName: string;
  Description?: string;
  Status?: ActionStatus;
  Properties?: Record<string, string>;
  PropertiesToRemove?: Array<string>;
}
export interface UpdateActionResponse {
  ActionArn?: string;
}
export interface UpdateAppImageConfigRequest {
  AppImageConfigName: string;
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
  JupyterLabAppImageConfig?: JupyterLabAppImageConfig;
  CodeEditorAppImageConfig?: CodeEditorAppImageConfig;
}
export interface UpdateAppImageConfigResponse {
  AppImageConfigArn?: string;
}
export interface UpdateArtifactRequest {
  ArtifactArn: string;
  ArtifactName?: string;
  Properties?: Record<string, string>;
  PropertiesToRemove?: Array<string>;
}
export interface UpdateArtifactResponse {
  ArtifactArn?: string;
}
export interface UpdateClusterRequest {
  ClusterName: string;
  InstanceGroups?: Array<ClusterInstanceGroupSpecification>;
  NodeRecovery?: ClusterNodeRecovery;
  InstanceGroupsToDelete?: Array<string>;
}
export interface UpdateClusterResponse {
  ClusterArn: string;
}
export interface UpdateClusterSchedulerConfigRequest {
  ClusterSchedulerConfigId: string;
  TargetVersion: number;
  SchedulerConfig?: SchedulerConfig;
  Description?: string;
}
export interface UpdateClusterSchedulerConfigResponse {
  ClusterSchedulerConfigArn: string;
  ClusterSchedulerConfigVersion: number;
}
export type UpdateClusterSoftwareInstanceGroups = Array<UpdateClusterSoftwareInstanceGroupSpecification>;
export interface UpdateClusterSoftwareInstanceGroupSpecification {
  InstanceGroupName: string;
}
export interface UpdateClusterSoftwareRequest {
  ClusterName: string;
  InstanceGroups?: Array<UpdateClusterSoftwareInstanceGroupSpecification>;
  DeploymentConfig?: DeploymentConfiguration;
}
export interface UpdateClusterSoftwareResponse {
  ClusterArn: string;
}
export interface UpdateCodeRepositoryInput {
  CodeRepositoryName: string;
  GitConfig?: GitConfigForUpdate;
}
export interface UpdateCodeRepositoryOutput {
  CodeRepositoryArn: string;
}
export interface UpdateComputeQuotaRequest {
  ComputeQuotaId: string;
  TargetVersion: number;
  ComputeQuotaConfig?: ComputeQuotaConfig;
  ComputeQuotaTarget?: ComputeQuotaTarget;
  ActivationState?: ActivationState;
  Description?: string;
}
export interface UpdateComputeQuotaResponse {
  ComputeQuotaArn: string;
  ComputeQuotaVersion: number;
}
export interface UpdateContextRequest {
  ContextName: string;
  Description?: string;
  Properties?: Record<string, string>;
  PropertiesToRemove?: Array<string>;
}
export interface UpdateContextResponse {
  ContextArn?: string;
}
export interface UpdateDeviceFleetRequest {
  DeviceFleetName: string;
  RoleArn?: string;
  Description?: string;
  OutputConfig: EdgeOutputConfig;
  EnableIotRoleAlias?: boolean;
}
export interface UpdateDevicesRequest {
  DeviceFleetName: string;
  Devices: Array<Device>;
}
export interface UpdateDomainRequest {
  DomainId: string;
  DefaultUserSettings?: UserSettings;
  DomainSettingsForUpdate?: DomainSettingsForUpdate;
  AppSecurityGroupManagement?: AppSecurityGroupManagement;
  DefaultSpaceSettings?: DefaultSpaceSettings;
  SubnetIds?: Array<string>;
  AppNetworkAccessType?: AppNetworkAccessType;
  TagPropagation?: TagPropagation;
}
export interface UpdateDomainResponse {
  DomainArn?: string;
}
export interface UpdateEndpointInput {
  EndpointName: string;
  EndpointConfigName: string;
  RetainAllVariantProperties?: boolean;
  ExcludeRetainedVariantProperties?: Array<VariantProperty>;
  DeploymentConfig?: DeploymentConfig;
  RetainDeploymentConfig?: boolean;
}
export interface UpdateEndpointOutput {
  EndpointArn: string;
}
export interface UpdateEndpointWeightsAndCapacitiesInput {
  EndpointName: string;
  DesiredWeightsAndCapacities: Array<DesiredWeightAndCapacity>;
}
export interface UpdateEndpointWeightsAndCapacitiesOutput {
  EndpointArn: string;
}
export interface UpdateExperimentRequest {
  ExperimentName: string;
  DisplayName?: string;
  Description?: string;
}
export interface UpdateExperimentResponse {
  ExperimentArn?: string;
}
export interface UpdateFeatureGroupRequest {
  FeatureGroupName: string;
  FeatureAdditions?: Array<FeatureDefinition>;
  OnlineStoreConfig?: OnlineStoreConfigUpdate;
  ThroughputConfig?: ThroughputConfigUpdate;
}
export interface UpdateFeatureGroupResponse {
  FeatureGroupArn: string;
}
export interface UpdateFeatureMetadataRequest {
  FeatureGroupName: string;
  FeatureName: string;
  Description?: string;
  ParameterAdditions?: Array<FeatureParameter>;
  ParameterRemovals?: Array<string>;
}
export interface UpdateHubContentReferenceRequest {
  HubName: string;
  HubContentName: string;
  HubContentType: HubContentType;
  MinVersion?: string;
}
export interface UpdateHubContentReferenceResponse {
  HubArn: string;
  HubContentArn: string;
}
export interface UpdateHubContentRequest {
  HubName: string;
  HubContentName: string;
  HubContentType: HubContentType;
  HubContentVersion: string;
  HubContentDisplayName?: string;
  HubContentDescription?: string;
  HubContentMarkdown?: string;
  HubContentSearchKeywords?: Array<string>;
  SupportStatus?: HubContentSupportStatus;
}
export interface UpdateHubContentResponse {
  HubArn: string;
  HubContentArn: string;
}
export interface UpdateHubRequest {
  HubName: string;
  HubDescription?: string;
  HubDisplayName?: string;
  HubSearchKeywords?: Array<string>;
}
export interface UpdateHubResponse {
  HubArn: string;
}
export interface UpdateImageRequest {
  DeleteProperties?: Array<string>;
  Description?: string;
  DisplayName?: string;
  ImageName: string;
  RoleArn?: string;
}
export interface UpdateImageResponse {
  ImageArn?: string;
}
export interface UpdateImageVersionRequest {
  ImageName: string;
  Alias?: string;
  Version?: number;
  AliasesToAdd?: Array<string>;
  AliasesToDelete?: Array<string>;
  VendorGuidance?: VendorGuidance;
  JobType?: JobType;
  MLFramework?: string;
  ProgrammingLang?: string;
  Processor?: Processor;
  Horovod?: boolean;
  ReleaseNotes?: string;
}
export interface UpdateImageVersionResponse {
  ImageVersionArn?: string;
}
export interface UpdateInferenceComponentInput {
  InferenceComponentName: string;
  Specification?: InferenceComponentSpecification;
  RuntimeConfig?: InferenceComponentRuntimeConfig;
  DeploymentConfig?: InferenceComponentDeploymentConfig;
}
export interface UpdateInferenceComponentOutput {
  InferenceComponentArn: string;
}
export interface UpdateInferenceComponentRuntimeConfigInput {
  InferenceComponentName: string;
  DesiredRuntimeConfig: InferenceComponentRuntimeConfig;
}
export interface UpdateInferenceComponentRuntimeConfigOutput {
  InferenceComponentArn: string;
}
export interface UpdateInferenceExperimentRequest {
  Name: string;
  Schedule?: InferenceExperimentSchedule;
  Description?: string;
  ModelVariants?: Array<ModelVariantConfig>;
  DataStorageConfig?: InferenceExperimentDataStorageConfig;
  ShadowModeConfig?: ShadowModeConfig;
}
export interface UpdateInferenceExperimentResponse {
  InferenceExperimentArn: string;
}
export interface UpdateMlflowTrackingServerRequest {
  TrackingServerName: string;
  ArtifactStoreUri?: string;
  TrackingServerSize?: TrackingServerSize;
  AutomaticModelRegistration?: boolean;
  WeeklyMaintenanceWindowStart?: string;
}
export interface UpdateMlflowTrackingServerResponse {
  TrackingServerArn?: string;
}
export interface UpdateModelCardRequest {
  ModelCardName: string;
  Content?: string;
  ModelCardStatus?: ModelCardStatus;
}
export interface UpdateModelCardResponse {
  ModelCardArn: string;
}
export interface UpdateModelPackageInput {
  ModelPackageArn: string;
  ModelApprovalStatus?: ModelApprovalStatus;
  ApprovalDescription?: string;
  CustomerMetadataProperties?: Record<string, string>;
  CustomerMetadataPropertiesToRemove?: Array<string>;
  AdditionalInferenceSpecificationsToAdd?: Array<AdditionalInferenceSpecificationDefinition>;
  InferenceSpecification?: InferenceSpecification;
  SourceUri?: string;
  ModelCard?: ModelPackageModelCard;
  ModelLifeCycle?: ModelLifeCycle;
  ClientToken?: string;
}
export interface UpdateModelPackageOutput {
  ModelPackageArn: string;
}
export interface UpdateMonitoringAlertRequest {
  MonitoringScheduleName: string;
  MonitoringAlertName: string;
  DatapointsToAlert: number;
  EvaluationPeriod: number;
}
export interface UpdateMonitoringAlertResponse {
  MonitoringScheduleArn: string;
  MonitoringAlertName?: string;
}
export interface UpdateMonitoringScheduleRequest {
  MonitoringScheduleName: string;
  MonitoringScheduleConfig: MonitoringScheduleConfig;
}
export interface UpdateMonitoringScheduleResponse {
  MonitoringScheduleArn: string;
}
export interface UpdateNotebookInstanceInput {
  NotebookInstanceName: string;
  InstanceType?: InstanceType;
  RoleArn?: string;
  LifecycleConfigName?: string;
  DisassociateLifecycleConfig?: boolean;
  VolumeSizeInGB?: number;
  DefaultCodeRepository?: string;
  AdditionalCodeRepositories?: Array<string>;
  AcceleratorTypes?: Array<NotebookInstanceAcceleratorType>;
  DisassociateAcceleratorTypes?: boolean;
  DisassociateDefaultCodeRepository?: boolean;
  DisassociateAdditionalCodeRepositories?: boolean;
  RootAccess?: RootAccess;
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
}
export interface UpdateNotebookInstanceLifecycleConfigInput {
  NotebookInstanceLifecycleConfigName: string;
  OnCreate?: Array<NotebookInstanceLifecycleHook>;
  OnStart?: Array<NotebookInstanceLifecycleHook>;
}
export interface UpdateNotebookInstanceLifecycleConfigOutput {
}
export interface UpdateNotebookInstanceOutput {
}
export interface UpdatePartnerAppRequest {
  Arn: string;
  MaintenanceConfig?: PartnerAppMaintenanceConfig;
  Tier?: string;
  ApplicationConfig?: PartnerAppConfig;
  EnableIamSessionBasedIdentity?: boolean;
  ClientToken?: string;
  Tags?: Array<Tag>;
}
export interface UpdatePartnerAppResponse {
  Arn?: string;
}
export interface UpdatePipelineExecutionRequest {
  PipelineExecutionArn: string;
  PipelineExecutionDescription?: string;
  PipelineExecutionDisplayName?: string;
  ParallelismConfiguration?: ParallelismConfiguration;
}
export interface UpdatePipelineExecutionResponse {
  PipelineExecutionArn?: string;
}
export interface UpdatePipelineRequest {
  PipelineName: string;
  PipelineDisplayName?: string;
  PipelineDefinition?: string;
  PipelineDefinitionS3Location?: PipelineDefinitionS3Location;
  PipelineDescription?: string;
  RoleArn?: string;
  ParallelismConfiguration?: ParallelismConfiguration;
}
export interface UpdatePipelineResponse {
  PipelineArn?: string;
}
export interface UpdateProjectInput {
  ProjectName: string;
  ProjectDescription?: string;
  ServiceCatalogProvisioningUpdateDetails?: ServiceCatalogProvisioningUpdateDetails;
  Tags?: Array<Tag>;
  TemplateProvidersToUpdate?: Array<UpdateTemplateProvider>;
}
export interface UpdateProjectOutput {
  ProjectArn: string;
}
export interface UpdateSpaceRequest {
  DomainId: string;
  SpaceName: string;
  SpaceSettings?: SpaceSettings;
  SpaceDisplayName?: string;
}
export interface UpdateSpaceResponse {
  SpaceArn?: string;
}
export interface UpdateTemplateProvider {
  CfnTemplateProvider?: CfnUpdateTemplateProvider;
}
export type UpdateTemplateProviderList = Array<UpdateTemplateProvider>;
export interface UpdateTrainingJobRequest {
  TrainingJobName: string;
  ProfilerConfig?: ProfilerConfigForUpdate;
  ProfilerRuleConfigurations?: Array<ProfilerRuleConfiguration>;
  ResourceConfig?: ResourceConfigForUpdate;
  RemoteDebugConfig?: RemoteDebugConfigForUpdate;
}
export interface UpdateTrainingJobResponse {
  TrainingJobArn: string;
}
export interface UpdateTrialComponentRequest {
  TrialComponentName: string;
  DisplayName?: string;
  Status?: TrialComponentStatus;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Parameters?: Record<string, TrialComponentParameterValue>;
  ParametersToRemove?: Array<string>;
  InputArtifacts?: Record<string, TrialComponentArtifact>;
  InputArtifactsToRemove?: Array<string>;
  OutputArtifacts?: Record<string, TrialComponentArtifact>;
  OutputArtifactsToRemove?: Array<string>;
}
export interface UpdateTrialComponentResponse {
  TrialComponentArn?: string;
}
export interface UpdateTrialRequest {
  TrialName: string;
  DisplayName?: string;
}
export interface UpdateTrialResponse {
  TrialArn?: string;
}
export interface UpdateUserProfileRequest {
  DomainId: string;
  UserProfileName: string;
  UserSettings?: UserSettings;
}
export interface UpdateUserProfileResponse {
  UserProfileArn?: string;
}
export interface UpdateWorkforceRequest {
  WorkforceName: string;
  SourceIpConfig?: SourceIpConfig;
  OidcConfig?: OidcConfig;
  WorkforceVpcConfig?: WorkforceVpcConfigRequest;
}
export interface UpdateWorkforceResponse {
  Workforce: Workforce;
}
export interface UpdateWorkteamRequest {
  WorkteamName: string;
  MemberDefinitions?: Array<MemberDefinition>;
  Description?: string;
  NotificationConfiguration?: NotificationConfiguration;
  WorkerAccessConfiguration?: WorkerAccessConfiguration;
}
export interface UpdateWorkteamResponse {
  Workteam: Workteam;
}
export type Url = string;

export interface USD {
  Dollars?: number;
  Cents?: number;
  TenthFractionsOfACent?: number;
}
export interface UserContext {
  UserProfileArn?: string;
  UserProfileName?: string;
  DomainId?: string;
  IamIdentity?: IamIdentity;
}
export type UserProfileArn = string;

export interface UserProfileDetails {
  DomainId?: string;
  UserProfileName?: string;
  Status?: UserProfileStatus;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type UserProfileList = Array<UserProfileDetails>;
export type UserProfileName = string;

export type UserProfileSortKey = "CreationTime" | "LastModifiedTime";
export type UserProfileStatus = "Deleting" | "Failed" | "InService" | "Pending" | "Updating" | "Update_Failed" | "Delete_Failed";
export interface UserSettings {
  ExecutionRole?: string;
  SecurityGroups?: Array<string>;
  SharingSettings?: SharingSettings;
  JupyterServerAppSettings?: JupyterServerAppSettings;
  KernelGatewayAppSettings?: KernelGatewayAppSettings;
  TensorBoardAppSettings?: TensorBoardAppSettings;
  RStudioServerProAppSettings?: RStudioServerProAppSettings;
  RSessionAppSettings?: RSessionAppSettings;
  CanvasAppSettings?: CanvasAppSettings;
  CodeEditorAppSettings?: CodeEditorAppSettings;
  JupyterLabAppSettings?: JupyterLabAppSettings;
  SpaceStorageSettings?: DefaultSpaceStorageSettings;
  DefaultLandingUri?: string;
  StudioWebPortal?: StudioWebPortal;
  CustomPosixUserConfig?: CustomPosixUserConfig;
  CustomFileSystemConfigs?: Array<CustomFileSystemConfig>;
  StudioWebPortalSettings?: StudioWebPortalSettings;
  AutoMountHomeEFS?: AutoMountHomeEFS;
}
export type UsersPerStep = number;

export type UtilizationMetric = number;

export type UtilizationPercentagePerCore = number;

export type ValidationFraction = number;

export type VariantName = string;

export interface VariantProperty {
  VariantPropertyType: VariantPropertyType;
}
export type VariantPropertyList = Array<VariantProperty>;
export type VariantPropertyType = "DesiredInstanceCount" | "DesiredWeight" | "DataCaptureConfig";
export type VariantStatus = "CREATING" | "UPDATING" | "DELETING" | "ACTIVATING_TRAFFIC" | "BAKING";
export type VariantStatusMessage = string;

export type VariantWeight = number;

export interface VectorConfig {
  Dimension: number;
}
export type VendorGuidance = "NOT_PROVIDED" | "STABLE" | "TO_BE_ARCHIVED" | "ARCHIVED";
export type VersionAliasesList = Array<string>;
export type VersionedArnOrName = string;

export type VersionId = string;

export interface Vertex {
  Arn?: string;
  Type?: string;
  LineageType?: LineageType;
}
export type Vertices = Array<Vertex>;
export interface VisibilityConditions {
  Key?: string;
  Value?: string;
}
export type VisibilityConditionsKey = string;

export type VisibilityConditionsList = Array<VisibilityConditions>;
export type VisibilityConditionsValue = string;

export type VolumeSizeInGB = number;

export interface VpcConfig {
  SecurityGroupIds: Array<string>;
  Subnets: Array<string>;
}
export type VpcId = string;

export type VpcOnlyTrustedAccounts = Array<string>;
export type VpcSecurityGroupIds = Array<string>;
export type WaitIntervalInSeconds = number;

export type WaitTimeIntervalInSeconds = number;

export type WarmPoolResourceStatus = "AVAILABLE" | "TERMINATED" | "REUSED" | "INUSE";
export interface WarmPoolStatus {
  Status: WarmPoolResourceStatus;
  ResourceRetainedBillableTimeInSeconds?: number;
  ReusedByJob?: string;
}
export type WeeklyMaintenanceWindowStart = string;

export type WeeklyScheduleTimeFormat = string;

export interface WorkerAccessConfiguration {
  S3Presign?: S3Presign;
}
export interface Workforce {
  WorkforceName: string;
  WorkforceArn: string;
  LastUpdatedDate?: Date | string;
  SourceIpConfig?: SourceIpConfig;
  SubDomain?: string;
  CognitoConfig?: CognitoConfig;
  OidcConfig?: OidcConfigForResponse;
  CreateDate?: Date | string;
  WorkforceVpcConfig?: WorkforceVpcConfigResponse;
  Status?: WorkforceStatus;
  FailureReason?: string;
}
export type WorkforceArn = string;

export type WorkforceFailureReason = string;

export type WorkforceName = string;

export type Workforces = Array<Workforce>;
export type WorkforceSecurityGroupId = string;

export type WorkforceSecurityGroupIds = Array<string>;
export type WorkforceStatus = "INITIALIZING" | "UPDATING" | "DELETING" | "FAILED" | "ACTIVE";
export type WorkforceSubnetId = string;

export type WorkforceSubnets = Array<string>;
export interface WorkforceVpcConfigRequest {
  VpcId?: string;
  SecurityGroupIds?: Array<string>;
  Subnets?: Array<string>;
}
export interface WorkforceVpcConfigResponse {
  VpcId: string;
  SecurityGroupIds: Array<string>;
  Subnets: Array<string>;
  VpcEndpointId?: string;
}
export type WorkforceVpcEndpointId = string;

export type WorkforceVpcId = string;

export interface WorkspaceSettings {
  S3ArtifactPath?: string;
  S3KmsKeyId?: string;
}
export interface Workteam {
  WorkteamName: string;
  MemberDefinitions: Array<MemberDefinition>;
  WorkteamArn: string;
  WorkforceArn?: string;
  ProductListingIds?: Array<string>;
  Description: string;
  SubDomain?: string;
  CreateDate?: Date | string;
  LastUpdatedDate?: Date | string;
  NotificationConfiguration?: NotificationConfiguration;
  WorkerAccessConfiguration?: WorkerAccessConfiguration;
}
export type WorkteamArn = string;

export type WorkteamName = string;

export type Workteams = Array<Workteam>;
export declare namespace AddAssociation {
  export type Input = AddAssociationRequest;
  export type Output = AddAssociationResponse;
  export type Error =
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace AddTags {
  export type Input = AddTagsInput;
  export type Output = AddTagsOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateTrialComponent {
  export type Input = AssociateTrialComponentRequest;
  export type Output = AssociateTrialComponentResponse;
  export type Error =
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace BatchDeleteClusterNodes {
  export type Input = BatchDeleteClusterNodesRequest;
  export type Output = BatchDeleteClusterNodesResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace BatchDescribeModelPackage {
  export type Input = BatchDescribeModelPackageInput;
  export type Output = BatchDescribeModelPackageOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateAction {
  export type Input = CreateActionRequest;
  export type Output = CreateActionResponse;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateAlgorithm {
  export type Input = CreateAlgorithmInput;
  export type Output = CreateAlgorithmOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateApp {
  export type Input = CreateAppRequest;
  export type Output = CreateAppResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateAppImageConfig {
  export type Input = CreateAppImageConfigRequest;
  export type Output = CreateAppImageConfigResponse;
  export type Error =
    | ResourceInUse
    | CommonAwsError;
}

export declare namespace CreateArtifact {
  export type Input = CreateArtifactRequest;
  export type Output = CreateArtifactResponse;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateAutoMLJob {
  export type Input = CreateAutoMLJobRequest;
  export type Output = CreateAutoMLJobResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateAutoMLJobV2 {
  export type Input = CreateAutoMLJobV2Request;
  export type Output = CreateAutoMLJobV2Response;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateCluster {
  export type Input = CreateClusterRequest;
  export type Output = CreateClusterResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateClusterSchedulerConfig {
  export type Input = CreateClusterSchedulerConfigRequest;
  export type Output = CreateClusterSchedulerConfigResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateCodeRepository {
  export type Input = CreateCodeRepositoryInput;
  export type Output = CreateCodeRepositoryOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateCompilationJob {
  export type Input = CreateCompilationJobRequest;
  export type Output = CreateCompilationJobResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateComputeQuota {
  export type Input = CreateComputeQuotaRequest;
  export type Output = CreateComputeQuotaResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateContext {
  export type Input = CreateContextRequest;
  export type Output = CreateContextResponse;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateDataQualityJobDefinition {
  export type Input = CreateDataQualityJobDefinitionRequest;
  export type Output = CreateDataQualityJobDefinitionResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateDeviceFleet {
  export type Input = CreateDeviceFleetRequest;
  export type Output = {};
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateDomain {
  export type Input = CreateDomainRequest;
  export type Output = CreateDomainResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateEdgeDeploymentPlan {
  export type Input = CreateEdgeDeploymentPlanRequest;
  export type Output = CreateEdgeDeploymentPlanResponse;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateEdgeDeploymentStage {
  export type Input = CreateEdgeDeploymentStageRequest;
  export type Output = {};
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateEdgePackagingJob {
  export type Input = CreateEdgePackagingJobRequest;
  export type Output = {};
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateEndpoint {
  export type Input = CreateEndpointInput;
  export type Output = CreateEndpointOutput;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateEndpointConfig {
  export type Input = CreateEndpointConfigInput;
  export type Output = CreateEndpointConfigOutput;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateExperiment {
  export type Input = CreateExperimentRequest;
  export type Output = CreateExperimentResponse;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateFeatureGroup {
  export type Input = CreateFeatureGroupRequest;
  export type Output = CreateFeatureGroupResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateFlowDefinition {
  export type Input = CreateFlowDefinitionRequest;
  export type Output = CreateFlowDefinitionResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateHub {
  export type Input = CreateHubRequest;
  export type Output = CreateHubResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateHubContentPresignedUrls {
  export type Input = CreateHubContentPresignedUrlsRequest;
  export type Output = CreateHubContentPresignedUrlsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateHubContentReference {
  export type Input = CreateHubContentReferenceRequest;
  export type Output = CreateHubContentReferenceResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace CreateHumanTaskUi {
  export type Input = CreateHumanTaskUiRequest;
  export type Output = CreateHumanTaskUiResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateHyperParameterTuningJob {
  export type Input = CreateHyperParameterTuningJobRequest;
  export type Output = CreateHyperParameterTuningJobResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateImage {
  export type Input = CreateImageRequest;
  export type Output = CreateImageResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateImageVersion {
  export type Input = CreateImageVersionRequest;
  export type Output = CreateImageVersionResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace CreateInferenceComponent {
  export type Input = CreateInferenceComponentInput;
  export type Output = CreateInferenceComponentOutput;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateInferenceExperiment {
  export type Input = CreateInferenceExperimentRequest;
  export type Output = CreateInferenceExperimentResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateInferenceRecommendationsJob {
  export type Input = CreateInferenceRecommendationsJobRequest;
  export type Output = CreateInferenceRecommendationsJobResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateLabelingJob {
  export type Input = CreateLabelingJobRequest;
  export type Output = CreateLabelingJobResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateMlflowTrackingServer {
  export type Input = CreateMlflowTrackingServerRequest;
  export type Output = CreateMlflowTrackingServerResponse;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateModel {
  export type Input = CreateModelInput;
  export type Output = CreateModelOutput;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateModelBiasJobDefinition {
  export type Input = CreateModelBiasJobDefinitionRequest;
  export type Output = CreateModelBiasJobDefinitionResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateModelCard {
  export type Input = CreateModelCardRequest;
  export type Output = CreateModelCardResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateModelCardExportJob {
  export type Input = CreateModelCardExportJobRequest;
  export type Output = CreateModelCardExportJobResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace CreateModelExplainabilityJobDefinition {
  export type Input = CreateModelExplainabilityJobDefinitionRequest;
  export type Output = CreateModelExplainabilityJobDefinitionResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateModelPackage {
  export type Input = CreateModelPackageInput;
  export type Output = CreateModelPackageOutput;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateModelPackageGroup {
  export type Input = CreateModelPackageGroupInput;
  export type Output = CreateModelPackageGroupOutput;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateModelQualityJobDefinition {
  export type Input = CreateModelQualityJobDefinitionRequest;
  export type Output = CreateModelQualityJobDefinitionResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateMonitoringSchedule {
  export type Input = CreateMonitoringScheduleRequest;
  export type Output = CreateMonitoringScheduleResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateNotebookInstance {
  export type Input = CreateNotebookInstanceInput;
  export type Output = CreateNotebookInstanceOutput;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateNotebookInstanceLifecycleConfig {
  export type Input = CreateNotebookInstanceLifecycleConfigInput;
  export type Output = CreateNotebookInstanceLifecycleConfigOutput;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateOptimizationJob {
  export type Input = CreateOptimizationJobRequest;
  export type Output = CreateOptimizationJobResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreatePartnerApp {
  export type Input = CreatePartnerAppRequest;
  export type Output = CreatePartnerAppResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreatePartnerAppPresignedUrl {
  export type Input = CreatePartnerAppPresignedUrlRequest;
  export type Output = CreatePartnerAppPresignedUrlResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace CreatePipeline {
  export type Input = CreatePipelineRequest;
  export type Output = CreatePipelineResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace CreatePresignedDomainUrl {
  export type Input = CreatePresignedDomainUrlRequest;
  export type Output = CreatePresignedDomainUrlResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace CreatePresignedMlflowTrackingServerUrl {
  export type Input = CreatePresignedMlflowTrackingServerUrlRequest;
  export type Output = CreatePresignedMlflowTrackingServerUrlResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace CreatePresignedNotebookInstanceUrl {
  export type Input = CreatePresignedNotebookInstanceUrlInput;
  export type Output = CreatePresignedNotebookInstanceUrlOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateProcessingJob {
  export type Input = CreateProcessingJobRequest;
  export type Output = CreateProcessingJobResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace CreateProject {
  export type Input = CreateProjectInput;
  export type Output = CreateProjectOutput;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateSpace {
  export type Input = CreateSpaceRequest;
  export type Output = CreateSpaceResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateStudioLifecycleConfig {
  export type Input = CreateStudioLifecycleConfigRequest;
  export type Output = CreateStudioLifecycleConfigResponse;
  export type Error =
    | ResourceInUse
    | CommonAwsError;
}

export declare namespace CreateTrainingJob {
  export type Input = CreateTrainingJobRequest;
  export type Output = CreateTrainingJobResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace CreateTrainingPlan {
  export type Input = CreateTrainingPlanRequest;
  export type Output = CreateTrainingPlanResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace CreateTransformJob {
  export type Input = CreateTransformJobRequest;
  export type Output = CreateTransformJobResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace CreateTrial {
  export type Input = CreateTrialRequest;
  export type Output = CreateTrialResponse;
  export type Error =
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace CreateTrialComponent {
  export type Input = CreateTrialComponentRequest;
  export type Output = CreateTrialComponentResponse;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateUserProfile {
  export type Input = CreateUserProfileRequest;
  export type Output = CreateUserProfileResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateWorkforce {
  export type Input = CreateWorkforceRequest;
  export type Output = CreateWorkforceResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateWorkteam {
  export type Input = CreateWorkteamRequest;
  export type Output = CreateWorkteamResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace DeleteAction {
  export type Input = DeleteActionRequest;
  export type Output = DeleteActionResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteAlgorithm {
  export type Input = DeleteAlgorithmInput;
  export type Output = {};
  export type Error =
    | ConflictException
    | CommonAwsError;
}

export declare namespace DeleteApp {
  export type Input = DeleteAppRequest;
  export type Output = {};
  export type Error =
    | ResourceInUse
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteAppImageConfig {
  export type Input = DeleteAppImageConfigRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteArtifact {
  export type Input = DeleteArtifactRequest;
  export type Output = DeleteArtifactResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteAssociation {
  export type Input = DeleteAssociationRequest;
  export type Output = DeleteAssociationResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteCluster {
  export type Input = DeleteClusterRequest;
  export type Output = DeleteClusterResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteClusterSchedulerConfig {
  export type Input = DeleteClusterSchedulerConfigRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteCodeRepository {
  export type Input = DeleteCodeRepositoryInput;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteCompilationJob {
  export type Input = DeleteCompilationJobRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteComputeQuota {
  export type Input = DeleteComputeQuotaRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteContext {
  export type Input = DeleteContextRequest;
  export type Output = DeleteContextResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteDataQualityJobDefinition {
  export type Input = DeleteDataQualityJobDefinitionRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteDeviceFleet {
  export type Input = DeleteDeviceFleetRequest;
  export type Output = {};
  export type Error =
    | ResourceInUse
    | CommonAwsError;
}

export declare namespace DeleteDomain {
  export type Input = DeleteDomainRequest;
  export type Output = {};
  export type Error =
    | ResourceInUse
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteEdgeDeploymentPlan {
  export type Input = DeleteEdgeDeploymentPlanRequest;
  export type Output = {};
  export type Error =
    | ResourceInUse
    | CommonAwsError;
}

export declare namespace DeleteEdgeDeploymentStage {
  export type Input = DeleteEdgeDeploymentStageRequest;
  export type Output = {};
  export type Error =
    | ResourceInUse
    | CommonAwsError;
}

export declare namespace DeleteEndpoint {
  export type Input = DeleteEndpointInput;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteEndpointConfig {
  export type Input = DeleteEndpointConfigInput;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteExperiment {
  export type Input = DeleteExperimentRequest;
  export type Output = DeleteExperimentResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteFeatureGroup {
  export type Input = DeleteFeatureGroupRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteFlowDefinition {
  export type Input = DeleteFlowDefinitionRequest;
  export type Output = DeleteFlowDefinitionResponse;
  export type Error =
    | ResourceInUse
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteHub {
  export type Input = DeleteHubRequest;
  export type Output = {};
  export type Error =
    | ResourceInUse
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteHubContent {
  export type Input = DeleteHubContentRequest;
  export type Output = {};
  export type Error =
    | ResourceInUse
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteHubContentReference {
  export type Input = DeleteHubContentReferenceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteHumanTaskUi {
  export type Input = DeleteHumanTaskUiRequest;
  export type Output = DeleteHumanTaskUiResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteHyperParameterTuningJob {
  export type Input = DeleteHyperParameterTuningJobRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteImage {
  export type Input = DeleteImageRequest;
  export type Output = DeleteImageResponse;
  export type Error =
    | ResourceInUse
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteImageVersion {
  export type Input = DeleteImageVersionRequest;
  export type Output = DeleteImageVersionResponse;
  export type Error =
    | ResourceInUse
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteInferenceComponent {
  export type Input = DeleteInferenceComponentInput;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteInferenceExperiment {
  export type Input = DeleteInferenceExperimentRequest;
  export type Output = DeleteInferenceExperimentResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteMlflowTrackingServer {
  export type Input = DeleteMlflowTrackingServerRequest;
  export type Output = DeleteMlflowTrackingServerResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteModel {
  export type Input = DeleteModelInput;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteModelBiasJobDefinition {
  export type Input = DeleteModelBiasJobDefinitionRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteModelCard {
  export type Input = DeleteModelCardRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteModelExplainabilityJobDefinition {
  export type Input = DeleteModelExplainabilityJobDefinitionRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteModelPackage {
  export type Input = DeleteModelPackageInput;
  export type Output = {};
  export type Error =
    | ConflictException
    | CommonAwsError;
}

export declare namespace DeleteModelPackageGroup {
  export type Input = DeleteModelPackageGroupInput;
  export type Output = {};
  export type Error =
    | ConflictException
    | CommonAwsError;
}

export declare namespace DeleteModelPackageGroupPolicy {
  export type Input = DeleteModelPackageGroupPolicyInput;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteModelQualityJobDefinition {
  export type Input = DeleteModelQualityJobDefinitionRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteMonitoringSchedule {
  export type Input = DeleteMonitoringScheduleRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteNotebookInstance {
  export type Input = DeleteNotebookInstanceInput;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteNotebookInstanceLifecycleConfig {
  export type Input = DeleteNotebookInstanceLifecycleConfigInput;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteOptimizationJob {
  export type Input = DeleteOptimizationJobRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeletePartnerApp {
  export type Input = DeletePartnerAppRequest;
  export type Output = DeletePartnerAppResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeletePipeline {
  export type Input = DeletePipelineRequest;
  export type Output = DeletePipelineResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteProject {
  export type Input = DeleteProjectInput;
  export type Output = {};
  export type Error =
    | ConflictException
    | CommonAwsError;
}

export declare namespace DeleteSpace {
  export type Input = DeleteSpaceRequest;
  export type Output = {};
  export type Error =
    | ResourceInUse
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteStudioLifecycleConfig {
  export type Input = DeleteStudioLifecycleConfigRequest;
  export type Output = {};
  export type Error =
    | ResourceInUse
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteTags {
  export type Input = DeleteTagsInput;
  export type Output = DeleteTagsOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTrial {
  export type Input = DeleteTrialRequest;
  export type Output = DeleteTrialResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteTrialComponent {
  export type Input = DeleteTrialComponentRequest;
  export type Output = DeleteTrialComponentResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteUserProfile {
  export type Input = DeleteUserProfileRequest;
  export type Output = {};
  export type Error =
    | ResourceInUse
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DeleteWorkforce {
  export type Input = DeleteWorkforceRequest;
  export type Output = DeleteWorkforceResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteWorkteam {
  export type Input = DeleteWorkteamRequest;
  export type Output = DeleteWorkteamResponse;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace DeregisterDevices {
  export type Input = DeregisterDevicesRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeAction {
  export type Input = DescribeActionRequest;
  export type Output = DescribeActionResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeAlgorithm {
  export type Input = DescribeAlgorithmInput;
  export type Output = DescribeAlgorithmOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeApp {
  export type Input = DescribeAppRequest;
  export type Output = DescribeAppResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeAppImageConfig {
  export type Input = DescribeAppImageConfigRequest;
  export type Output = DescribeAppImageConfigResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeArtifact {
  export type Input = DescribeArtifactRequest;
  export type Output = DescribeArtifactResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeAutoMLJob {
  export type Input = DescribeAutoMLJobRequest;
  export type Output = DescribeAutoMLJobResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeAutoMLJobV2 {
  export type Input = DescribeAutoMLJobV2Request;
  export type Output = DescribeAutoMLJobV2Response;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeCluster {
  export type Input = DescribeClusterRequest;
  export type Output = DescribeClusterResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeClusterNode {
  export type Input = DescribeClusterNodeRequest;
  export type Output = DescribeClusterNodeResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeClusterSchedulerConfig {
  export type Input = DescribeClusterSchedulerConfigRequest;
  export type Output = DescribeClusterSchedulerConfigResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeCodeRepository {
  export type Input = DescribeCodeRepositoryInput;
  export type Output = DescribeCodeRepositoryOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeCompilationJob {
  export type Input = DescribeCompilationJobRequest;
  export type Output = DescribeCompilationJobResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeComputeQuota {
  export type Input = DescribeComputeQuotaRequest;
  export type Output = DescribeComputeQuotaResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeContext {
  export type Input = DescribeContextRequest;
  export type Output = DescribeContextResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeDataQualityJobDefinition {
  export type Input = DescribeDataQualityJobDefinitionRequest;
  export type Output = DescribeDataQualityJobDefinitionResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeDevice {
  export type Input = DescribeDeviceRequest;
  export type Output = DescribeDeviceResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeDeviceFleet {
  export type Input = DescribeDeviceFleetRequest;
  export type Output = DescribeDeviceFleetResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeDomain {
  export type Input = DescribeDomainRequest;
  export type Output = DescribeDomainResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeEdgeDeploymentPlan {
  export type Input = DescribeEdgeDeploymentPlanRequest;
  export type Output = DescribeEdgeDeploymentPlanResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeEdgePackagingJob {
  export type Input = DescribeEdgePackagingJobRequest;
  export type Output = DescribeEdgePackagingJobResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeEndpoint {
  export type Input = DescribeEndpointInput;
  export type Output = DescribeEndpointOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeEndpointConfig {
  export type Input = DescribeEndpointConfigInput;
  export type Output = DescribeEndpointConfigOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeExperiment {
  export type Input = DescribeExperimentRequest;
  export type Output = DescribeExperimentResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeFeatureGroup {
  export type Input = DescribeFeatureGroupRequest;
  export type Output = DescribeFeatureGroupResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeFeatureMetadata {
  export type Input = DescribeFeatureMetadataRequest;
  export type Output = DescribeFeatureMetadataResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeFlowDefinition {
  export type Input = DescribeFlowDefinitionRequest;
  export type Output = DescribeFlowDefinitionResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeHub {
  export type Input = DescribeHubRequest;
  export type Output = DescribeHubResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeHubContent {
  export type Input = DescribeHubContentRequest;
  export type Output = DescribeHubContentResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeHumanTaskUi {
  export type Input = DescribeHumanTaskUiRequest;
  export type Output = DescribeHumanTaskUiResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeHyperParameterTuningJob {
  export type Input = DescribeHyperParameterTuningJobRequest;
  export type Output = DescribeHyperParameterTuningJobResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeImage {
  export type Input = DescribeImageRequest;
  export type Output = DescribeImageResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeImageVersion {
  export type Input = DescribeImageVersionRequest;
  export type Output = DescribeImageVersionResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeInferenceComponent {
  export type Input = DescribeInferenceComponentInput;
  export type Output = DescribeInferenceComponentOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeInferenceExperiment {
  export type Input = DescribeInferenceExperimentRequest;
  export type Output = DescribeInferenceExperimentResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeInferenceRecommendationsJob {
  export type Input = DescribeInferenceRecommendationsJobRequest;
  export type Output = DescribeInferenceRecommendationsJobResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeLabelingJob {
  export type Input = DescribeLabelingJobRequest;
  export type Output = DescribeLabelingJobResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeLineageGroup {
  export type Input = DescribeLineageGroupRequest;
  export type Output = DescribeLineageGroupResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeMlflowTrackingServer {
  export type Input = DescribeMlflowTrackingServerRequest;
  export type Output = DescribeMlflowTrackingServerResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeModel {
  export type Input = DescribeModelInput;
  export type Output = DescribeModelOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeModelBiasJobDefinition {
  export type Input = DescribeModelBiasJobDefinitionRequest;
  export type Output = DescribeModelBiasJobDefinitionResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeModelCard {
  export type Input = DescribeModelCardRequest;
  export type Output = DescribeModelCardResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeModelCardExportJob {
  export type Input = DescribeModelCardExportJobRequest;
  export type Output = DescribeModelCardExportJobResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeModelExplainabilityJobDefinition {
  export type Input = DescribeModelExplainabilityJobDefinitionRequest;
  export type Output = DescribeModelExplainabilityJobDefinitionResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeModelPackage {
  export type Input = DescribeModelPackageInput;
  export type Output = DescribeModelPackageOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeModelPackageGroup {
  export type Input = DescribeModelPackageGroupInput;
  export type Output = DescribeModelPackageGroupOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeModelQualityJobDefinition {
  export type Input = DescribeModelQualityJobDefinitionRequest;
  export type Output = DescribeModelQualityJobDefinitionResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeMonitoringSchedule {
  export type Input = DescribeMonitoringScheduleRequest;
  export type Output = DescribeMonitoringScheduleResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeNotebookInstance {
  export type Input = DescribeNotebookInstanceInput;
  export type Output = DescribeNotebookInstanceOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeNotebookInstanceLifecycleConfig {
  export type Input = DescribeNotebookInstanceLifecycleConfigInput;
  export type Output = DescribeNotebookInstanceLifecycleConfigOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeOptimizationJob {
  export type Input = DescribeOptimizationJobRequest;
  export type Output = DescribeOptimizationJobResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribePartnerApp {
  export type Input = DescribePartnerAppRequest;
  export type Output = DescribePartnerAppResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribePipeline {
  export type Input = DescribePipelineRequest;
  export type Output = DescribePipelineResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribePipelineDefinitionForExecution {
  export type Input = DescribePipelineDefinitionForExecutionRequest;
  export type Output = DescribePipelineDefinitionForExecutionResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribePipelineExecution {
  export type Input = DescribePipelineExecutionRequest;
  export type Output = DescribePipelineExecutionResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeProcessingJob {
  export type Input = DescribeProcessingJobRequest;
  export type Output = DescribeProcessingJobResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeProject {
  export type Input = DescribeProjectInput;
  export type Output = DescribeProjectOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSpace {
  export type Input = DescribeSpaceRequest;
  export type Output = DescribeSpaceResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeStudioLifecycleConfig {
  export type Input = DescribeStudioLifecycleConfigRequest;
  export type Output = DescribeStudioLifecycleConfigResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeSubscribedWorkteam {
  export type Input = DescribeSubscribedWorkteamRequest;
  export type Output = DescribeSubscribedWorkteamResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTrainingJob {
  export type Input = DescribeTrainingJobRequest;
  export type Output = DescribeTrainingJobResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeTrainingPlan {
  export type Input = DescribeTrainingPlanRequest;
  export type Output = DescribeTrainingPlanResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeTransformJob {
  export type Input = DescribeTransformJobRequest;
  export type Output = DescribeTransformJobResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeTrial {
  export type Input = DescribeTrialRequest;
  export type Output = DescribeTrialResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeTrialComponent {
  export type Input = DescribeTrialComponentRequest;
  export type Output = DescribeTrialComponentResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeUserProfile {
  export type Input = DescribeUserProfileRequest;
  export type Output = DescribeUserProfileResponse;
  export type Error =
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace DescribeWorkforce {
  export type Input = DescribeWorkforceRequest;
  export type Output = DescribeWorkforceResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeWorkteam {
  export type Input = DescribeWorkteamRequest;
  export type Output = DescribeWorkteamResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableSagemakerServicecatalogPortfolio {
  export type Input = DisableSagemakerServicecatalogPortfolioInput;
  export type Output = DisableSagemakerServicecatalogPortfolioOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateTrialComponent {
  export type Input = DisassociateTrialComponentRequest;
  export type Output = DisassociateTrialComponentResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace EnableSagemakerServicecatalogPortfolio {
  export type Input = EnableSagemakerServicecatalogPortfolioInput;
  export type Output = EnableSagemakerServicecatalogPortfolioOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetDeviceFleetReport {
  export type Input = GetDeviceFleetReportRequest;
  export type Output = GetDeviceFleetReportResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetLineageGroupPolicy {
  export type Input = GetLineageGroupPolicyRequest;
  export type Output = GetLineageGroupPolicyResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace GetModelPackageGroupPolicy {
  export type Input = GetModelPackageGroupPolicyInput;
  export type Output = GetModelPackageGroupPolicyOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetSagemakerServicecatalogPortfolioStatus {
  export type Input = GetSagemakerServicecatalogPortfolioStatusInput;
  export type Output = GetSagemakerServicecatalogPortfolioStatusOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetScalingConfigurationRecommendation {
  export type Input = GetScalingConfigurationRecommendationRequest;
  export type Output = GetScalingConfigurationRecommendationResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace GetSearchSuggestions {
  export type Input = GetSearchSuggestionsRequest;
  export type Output = GetSearchSuggestionsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ImportHubContent {
  export type Input = ImportHubContentRequest;
  export type Output = ImportHubContentResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListActions {
  export type Input = ListActionsRequest;
  export type Output = ListActionsResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListAlgorithms {
  export type Input = ListAlgorithmsInput;
  export type Output = ListAlgorithmsOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListAliases {
  export type Input = ListAliasesRequest;
  export type Output = ListAliasesResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListAppImageConfigs {
  export type Input = ListAppImageConfigsRequest;
  export type Output = ListAppImageConfigsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListApps {
  export type Input = ListAppsRequest;
  export type Output = ListAppsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListArtifacts {
  export type Input = ListArtifactsRequest;
  export type Output = ListArtifactsResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListAssociations {
  export type Input = ListAssociationsRequest;
  export type Output = ListAssociationsResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListAutoMLJobs {
  export type Input = ListAutoMLJobsRequest;
  export type Output = ListAutoMLJobsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListCandidatesForAutoMLJob {
  export type Input = ListCandidatesForAutoMLJobRequest;
  export type Output = ListCandidatesForAutoMLJobResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListClusterNodes {
  export type Input = ListClusterNodesRequest;
  export type Output = ListClusterNodesResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListClusterSchedulerConfigs {
  export type Input = ListClusterSchedulerConfigsRequest;
  export type Output = ListClusterSchedulerConfigsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListClusters {
  export type Input = ListClustersRequest;
  export type Output = ListClustersResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListCodeRepositories {
  export type Input = ListCodeRepositoriesInput;
  export type Output = ListCodeRepositoriesOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListCompilationJobs {
  export type Input = ListCompilationJobsRequest;
  export type Output = ListCompilationJobsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListComputeQuotas {
  export type Input = ListComputeQuotasRequest;
  export type Output = ListComputeQuotasResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListContexts {
  export type Input = ListContextsRequest;
  export type Output = ListContextsResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListDataQualityJobDefinitions {
  export type Input = ListDataQualityJobDefinitionsRequest;
  export type Output = ListDataQualityJobDefinitionsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListDeviceFleets {
  export type Input = ListDeviceFleetsRequest;
  export type Output = ListDeviceFleetsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListDevices {
  export type Input = ListDevicesRequest;
  export type Output = ListDevicesResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListDomains {
  export type Input = ListDomainsRequest;
  export type Output = ListDomainsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListEdgeDeploymentPlans {
  export type Input = ListEdgeDeploymentPlansRequest;
  export type Output = ListEdgeDeploymentPlansResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListEdgePackagingJobs {
  export type Input = ListEdgePackagingJobsRequest;
  export type Output = ListEdgePackagingJobsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListEndpointConfigs {
  export type Input = ListEndpointConfigsInput;
  export type Output = ListEndpointConfigsOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListEndpoints {
  export type Input = ListEndpointsInput;
  export type Output = ListEndpointsOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListExperiments {
  export type Input = ListExperimentsRequest;
  export type Output = ListExperimentsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListFeatureGroups {
  export type Input = ListFeatureGroupsRequest;
  export type Output = ListFeatureGroupsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListFlowDefinitions {
  export type Input = ListFlowDefinitionsRequest;
  export type Output = ListFlowDefinitionsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListHubContentVersions {
  export type Input = ListHubContentVersionsRequest;
  export type Output = ListHubContentVersionsResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListHubContents {
  export type Input = ListHubContentsRequest;
  export type Output = ListHubContentsResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListHubs {
  export type Input = ListHubsRequest;
  export type Output = ListHubsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListHumanTaskUis {
  export type Input = ListHumanTaskUisRequest;
  export type Output = ListHumanTaskUisResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListHyperParameterTuningJobs {
  export type Input = ListHyperParameterTuningJobsRequest;
  export type Output = ListHyperParameterTuningJobsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListImageVersions {
  export type Input = ListImageVersionsRequest;
  export type Output = ListImageVersionsResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListImages {
  export type Input = ListImagesRequest;
  export type Output = ListImagesResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListInferenceComponents {
  export type Input = ListInferenceComponentsInput;
  export type Output = ListInferenceComponentsOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListInferenceExperiments {
  export type Input = ListInferenceExperimentsRequest;
  export type Output = ListInferenceExperimentsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListInferenceRecommendationsJobSteps {
  export type Input = ListInferenceRecommendationsJobStepsRequest;
  export type Output = ListInferenceRecommendationsJobStepsResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListInferenceRecommendationsJobs {
  export type Input = ListInferenceRecommendationsJobsRequest;
  export type Output = ListInferenceRecommendationsJobsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListLabelingJobs {
  export type Input = ListLabelingJobsRequest;
  export type Output = ListLabelingJobsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListLabelingJobsForWorkteam {
  export type Input = ListLabelingJobsForWorkteamRequest;
  export type Output = ListLabelingJobsForWorkteamResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListLineageGroups {
  export type Input = ListLineageGroupsRequest;
  export type Output = ListLineageGroupsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListMlflowTrackingServers {
  export type Input = ListMlflowTrackingServersRequest;
  export type Output = ListMlflowTrackingServersResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListModelBiasJobDefinitions {
  export type Input = ListModelBiasJobDefinitionsRequest;
  export type Output = ListModelBiasJobDefinitionsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListModelCardExportJobs {
  export type Input = ListModelCardExportJobsRequest;
  export type Output = ListModelCardExportJobsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListModelCardVersions {
  export type Input = ListModelCardVersionsRequest;
  export type Output = ListModelCardVersionsResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListModelCards {
  export type Input = ListModelCardsRequest;
  export type Output = ListModelCardsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListModelExplainabilityJobDefinitions {
  export type Input = ListModelExplainabilityJobDefinitionsRequest;
  export type Output = ListModelExplainabilityJobDefinitionsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListModelMetadata {
  export type Input = ListModelMetadataRequest;
  export type Output = ListModelMetadataResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListModelPackageGroups {
  export type Input = ListModelPackageGroupsInput;
  export type Output = ListModelPackageGroupsOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListModelPackages {
  export type Input = ListModelPackagesInput;
  export type Output = ListModelPackagesOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListModelQualityJobDefinitions {
  export type Input = ListModelQualityJobDefinitionsRequest;
  export type Output = ListModelQualityJobDefinitionsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListModels {
  export type Input = ListModelsInput;
  export type Output = ListModelsOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListMonitoringAlertHistory {
  export type Input = ListMonitoringAlertHistoryRequest;
  export type Output = ListMonitoringAlertHistoryResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListMonitoringAlerts {
  export type Input = ListMonitoringAlertsRequest;
  export type Output = ListMonitoringAlertsResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListMonitoringExecutions {
  export type Input = ListMonitoringExecutionsRequest;
  export type Output = ListMonitoringExecutionsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListMonitoringSchedules {
  export type Input = ListMonitoringSchedulesRequest;
  export type Output = ListMonitoringSchedulesResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListNotebookInstanceLifecycleConfigs {
  export type Input = ListNotebookInstanceLifecycleConfigsInput;
  export type Output = ListNotebookInstanceLifecycleConfigsOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListNotebookInstances {
  export type Input = ListNotebookInstancesInput;
  export type Output = ListNotebookInstancesOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListOptimizationJobs {
  export type Input = ListOptimizationJobsRequest;
  export type Output = ListOptimizationJobsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListPartnerApps {
  export type Input = ListPartnerAppsRequest;
  export type Output = ListPartnerAppsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListPipelineExecutionSteps {
  export type Input = ListPipelineExecutionStepsRequest;
  export type Output = ListPipelineExecutionStepsResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListPipelineExecutions {
  export type Input = ListPipelineExecutionsRequest;
  export type Output = ListPipelineExecutionsResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListPipelineParametersForExecution {
  export type Input = ListPipelineParametersForExecutionRequest;
  export type Output = ListPipelineParametersForExecutionResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListPipelines {
  export type Input = ListPipelinesRequest;
  export type Output = ListPipelinesResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListProcessingJobs {
  export type Input = ListProcessingJobsRequest;
  export type Output = ListProcessingJobsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListProjects {
  export type Input = ListProjectsInput;
  export type Output = ListProjectsOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListResourceCatalogs {
  export type Input = ListResourceCatalogsRequest;
  export type Output = ListResourceCatalogsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListSpaces {
  export type Input = ListSpacesRequest;
  export type Output = ListSpacesResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListStageDevices {
  export type Input = ListStageDevicesRequest;
  export type Output = ListStageDevicesResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListStudioLifecycleConfigs {
  export type Input = ListStudioLifecycleConfigsRequest;
  export type Output = ListStudioLifecycleConfigsResponse;
  export type Error =
    | ResourceInUse
    | CommonAwsError;
}

export declare namespace ListSubscribedWorkteams {
  export type Input = ListSubscribedWorkteamsRequest;
  export type Output = ListSubscribedWorkteamsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListTags {
  export type Input = ListTagsInput;
  export type Output = ListTagsOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListTrainingJobs {
  export type Input = ListTrainingJobsRequest;
  export type Output = ListTrainingJobsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListTrainingJobsForHyperParameterTuningJob {
  export type Input = ListTrainingJobsForHyperParameterTuningJobRequest;
  export type Output = ListTrainingJobsForHyperParameterTuningJobResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListTrainingPlans {
  export type Input = ListTrainingPlansRequest;
  export type Output = ListTrainingPlansResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListTransformJobs {
  export type Input = ListTransformJobsRequest;
  export type Output = ListTransformJobsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListTrialComponents {
  export type Input = ListTrialComponentsRequest;
  export type Output = ListTrialComponentsResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListTrials {
  export type Input = ListTrialsRequest;
  export type Output = ListTrialsResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ListUserProfiles {
  export type Input = ListUserProfilesRequest;
  export type Output = ListUserProfilesResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListWorkforces {
  export type Input = ListWorkforcesRequest;
  export type Output = ListWorkforcesResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListWorkteams {
  export type Input = ListWorkteamsRequest;
  export type Output = ListWorkteamsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace PutModelPackageGroupPolicy {
  export type Input = PutModelPackageGroupPolicyInput;
  export type Output = PutModelPackageGroupPolicyOutput;
  export type Error =
    | ConflictException
    | CommonAwsError;
}

export declare namespace QueryLineage {
  export type Input = QueryLineageRequest;
  export type Output = QueryLineageResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace RegisterDevices {
  export type Input = RegisterDevicesRequest;
  export type Output = {};
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace RenderUiTemplate {
  export type Input = RenderUiTemplateRequest;
  export type Output = RenderUiTemplateResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace RetryPipelineExecution {
  export type Input = RetryPipelineExecutionRequest;
  export type Output = RetryPipelineExecutionResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace Search {
  export type Input = SearchRequest;
  export type Output = SearchResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace SearchTrainingPlanOfferings {
  export type Input = SearchTrainingPlanOfferingsRequest;
  export type Output = SearchTrainingPlanOfferingsResponse;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace SendPipelineExecutionStepFailure {
  export type Input = SendPipelineExecutionStepFailureRequest;
  export type Output = SendPipelineExecutionStepFailureResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace SendPipelineExecutionStepSuccess {
  export type Input = SendPipelineExecutionStepSuccessRequest;
  export type Output = SendPipelineExecutionStepSuccessResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StartEdgeDeploymentStage {
  export type Input = StartEdgeDeploymentStageRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace StartInferenceExperiment {
  export type Input = StartInferenceExperimentRequest;
  export type Output = StartInferenceExperimentResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StartMlflowTrackingServer {
  export type Input = StartMlflowTrackingServerRequest;
  export type Output = StartMlflowTrackingServerResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StartMonitoringSchedule {
  export type Input = StartMonitoringScheduleRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StartNotebookInstance {
  export type Input = StartNotebookInstanceInput;
  export type Output = {};
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace StartPipelineExecution {
  export type Input = StartPipelineExecutionRequest;
  export type Output = StartPipelineExecutionResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StartSession {
  export type Input = StartSessionRequest;
  export type Output = StartSessionResponse;
  export type Error =
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StopAutoMLJob {
  export type Input = StopAutoMLJobRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StopCompilationJob {
  export type Input = StopCompilationJobRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StopEdgeDeploymentStage {
  export type Input = StopEdgeDeploymentStageRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace StopEdgePackagingJob {
  export type Input = StopEdgePackagingJobRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace StopHyperParameterTuningJob {
  export type Input = StopHyperParameterTuningJobRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StopInferenceExperiment {
  export type Input = StopInferenceExperimentRequest;
  export type Output = StopInferenceExperimentResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StopInferenceRecommendationsJob {
  export type Input = StopInferenceRecommendationsJobRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StopLabelingJob {
  export type Input = StopLabelingJobRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StopMlflowTrackingServer {
  export type Input = StopMlflowTrackingServerRequest;
  export type Output = StopMlflowTrackingServerResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StopMonitoringSchedule {
  export type Input = StopMonitoringScheduleRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StopNotebookInstance {
  export type Input = StopNotebookInstanceInput;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace StopOptimizationJob {
  export type Input = StopOptimizationJobRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StopPipelineExecution {
  export type Input = StopPipelineExecutionRequest;
  export type Output = StopPipelineExecutionResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StopProcessingJob {
  export type Input = StopProcessingJobRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StopTrainingJob {
  export type Input = StopTrainingJobRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace StopTransformJob {
  export type Input = StopTransformJobRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateAction {
  export type Input = UpdateActionRequest;
  export type Output = UpdateActionResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateAppImageConfig {
  export type Input = UpdateAppImageConfigRequest;
  export type Output = UpdateAppImageConfigResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateArtifact {
  export type Input = UpdateArtifactRequest;
  export type Output = UpdateArtifactResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateCluster {
  export type Input = UpdateClusterRequest;
  export type Output = UpdateClusterResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateClusterSchedulerConfig {
  export type Input = UpdateClusterSchedulerConfigRequest;
  export type Output = UpdateClusterSchedulerConfigResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateClusterSoftware {
  export type Input = UpdateClusterSoftwareRequest;
  export type Output = UpdateClusterSoftwareResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateCodeRepository {
  export type Input = UpdateCodeRepositoryInput;
  export type Output = UpdateCodeRepositoryOutput;
  export type Error =
    | ConflictException
    | CommonAwsError;
}

export declare namespace UpdateComputeQuota {
  export type Input = UpdateComputeQuotaRequest;
  export type Output = UpdateComputeQuotaResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateContext {
  export type Input = UpdateContextRequest;
  export type Output = UpdateContextResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateDeviceFleet {
  export type Input = UpdateDeviceFleetRequest;
  export type Output = {};
  export type Error =
    | ResourceInUse
    | CommonAwsError;
}

export declare namespace UpdateDevices {
  export type Input = UpdateDevicesRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace UpdateDomain {
  export type Input = UpdateDomainRequest;
  export type Output = UpdateDomainResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateEndpoint {
  export type Input = UpdateEndpointInput;
  export type Output = UpdateEndpointOutput;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace UpdateEndpointWeightsAndCapacities {
  export type Input = UpdateEndpointWeightsAndCapacitiesInput;
  export type Output = UpdateEndpointWeightsAndCapacitiesOutput;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace UpdateExperiment {
  export type Input = UpdateExperimentRequest;
  export type Output = UpdateExperimentResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateFeatureGroup {
  export type Input = UpdateFeatureGroupRequest;
  export type Output = UpdateFeatureGroupResponse;
  export type Error =
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateFeatureMetadata {
  export type Input = UpdateFeatureMetadataRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateHub {
  export type Input = UpdateHubRequest;
  export type Output = UpdateHubResponse;
  export type Error =
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateHubContent {
  export type Input = UpdateHubContentRequest;
  export type Output = UpdateHubContentResponse;
  export type Error =
    | ResourceInUse
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateHubContentReference {
  export type Input = UpdateHubContentReferenceRequest;
  export type Output = UpdateHubContentReferenceResponse;
  export type Error =
    | ResourceInUse
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateImage {
  export type Input = UpdateImageRequest;
  export type Output = UpdateImageResponse;
  export type Error =
    | ResourceInUse
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateImageVersion {
  export type Input = UpdateImageVersionRequest;
  export type Output = UpdateImageVersionResponse;
  export type Error =
    | ResourceInUse
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateInferenceComponent {
  export type Input = UpdateInferenceComponentInput;
  export type Output = UpdateInferenceComponentOutput;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace UpdateInferenceComponentRuntimeConfig {
  export type Input = UpdateInferenceComponentRuntimeConfigInput;
  export type Output = UpdateInferenceComponentRuntimeConfigOutput;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace UpdateInferenceExperiment {
  export type Input = UpdateInferenceExperimentRequest;
  export type Output = UpdateInferenceExperimentResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateMlflowTrackingServer {
  export type Input = UpdateMlflowTrackingServerRequest;
  export type Output = UpdateMlflowTrackingServerResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateModelCard {
  export type Input = UpdateModelCardRequest;
  export type Output = UpdateModelCardResponse;
  export type Error =
    | ConflictException
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateModelPackage {
  export type Input = UpdateModelPackageInput;
  export type Output = UpdateModelPackageOutput;
  export type Error =
    | ConflictException
    | CommonAwsError;
}

export declare namespace UpdateMonitoringAlert {
  export type Input = UpdateMonitoringAlertRequest;
  export type Output = UpdateMonitoringAlertResponse;
  export type Error =
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateMonitoringSchedule {
  export type Input = UpdateMonitoringScheduleRequest;
  export type Output = UpdateMonitoringScheduleResponse;
  export type Error =
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateNotebookInstance {
  export type Input = UpdateNotebookInstanceInput;
  export type Output = UpdateNotebookInstanceOutput;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace UpdateNotebookInstanceLifecycleConfig {
  export type Input = UpdateNotebookInstanceLifecycleConfigInput;
  export type Output = UpdateNotebookInstanceLifecycleConfigOutput;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

export declare namespace UpdatePartnerApp {
  export type Input = UpdatePartnerAppRequest;
  export type Output = UpdatePartnerAppResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdatePipeline {
  export type Input = UpdatePipelineRequest;
  export type Output = UpdatePipelineResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdatePipelineExecution {
  export type Input = UpdatePipelineExecutionRequest;
  export type Output = UpdatePipelineExecutionResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateProject {
  export type Input = UpdateProjectInput;
  export type Output = UpdateProjectOutput;
  export type Error =
    | ConflictException
    | CommonAwsError;
}

export declare namespace UpdateSpace {
  export type Input = UpdateSpaceRequest;
  export type Output = UpdateSpaceResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateTrainingJob {
  export type Input = UpdateTrainingJobRequest;
  export type Output = UpdateTrainingJobResponse;
  export type Error =
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateTrial {
  export type Input = UpdateTrialRequest;
  export type Output = UpdateTrialResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateTrialComponent {
  export type Input = UpdateTrialComponentRequest;
  export type Output = UpdateTrialComponentResponse;
  export type Error =
    | ConflictException
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateUserProfile {
  export type Input = UpdateUserProfileRequest;
  export type Output = UpdateUserProfileResponse;
  export type Error =
    | ResourceInUse
    | ResourceLimitExceeded
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateWorkforce {
  export type Input = UpdateWorkforceRequest;
  export type Output = UpdateWorkforceResponse;
  export type Error =
    | ConflictException
    | CommonAwsError;
}

export declare namespace UpdateWorkteam {
  export type Input = UpdateWorkteamRequest;
  export type Output = UpdateWorkteamResponse;
  export type Error =
    | ResourceLimitExceeded
    | CommonAwsError;
}

